// The one place that reads, validates, and normalizes the skills in this repo.
// scripts/validate-skills.mjs runs it in CI, and the knock.app site imports it
// to build the /skills directory, so both always agree on what a valid skill is.
//
// No dependencies, so it runs in plain Node and inside the site's build.
// Allowed values (teams, jobs, tool categories, ...) and their display labels
// live in schema.json. Directory order lives in directory.json.

import fs from "node:fs";
import path from "node:path";

const ALLOWED_TOP_LEVEL = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const NAME_PREFIX = "knock-";
const CARD_KEYS = ["title", "label", "detail", "primary", "secondary"];
const CARD_REQUIRED = ["title", "label", "detail", "primary"];

const readJson = (root, file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const ids = (entries) => new Set(entries.map((e) => e.id));

export const list = (value) =>
  (value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

// Frontmatter is parsed with a strict YAML subset parser that rejects anything
// it does not understand, so whatever passes is valid YAML. One level of
// nesting is supported, for `metadata` and `card`.

function parseScalar(raw, where) {
  const v = raw.trim();
  if (v === "") return { value: null };
  if (v.startsWith('"')) {
    if (!v.endsWith('"') || v.length < 2) throw new Error(`${where}: unterminated double-quoted string`);
    try {
      return { value: JSON.parse(v) };
    } catch {
      throw new Error(`${where}: invalid double-quoted string`);
    }
  }
  if (v.startsWith("'")) {
    if (!v.endsWith("'") || v.length < 2) throw new Error(`${where}: unterminated single-quoted string`);
    const inner = v.slice(1, -1);
    if (/'(?!')/.test(inner.replace(/''/g, ""))) throw new Error(`${where}: unescaped quote in single-quoted string`);
    return { value: inner.replace(/''/g, "'") };
  }
  if (/^[|>]/.test(v)) throw new Error(`${where}: block scalars are not supported; use a quoted string`);
  if (/^[\[{&*!%@`]/.test(v)) throw new Error(`${where}: unsupported YAML syntax; use a quoted string`);
  if (/: |\s#/.test(v)) throw new Error(`${where}: plain value contains ": " or " #"; quote it`);
  // Plain scalars YAML would resolve to a non-string type.
  if (/^(true|false|yes|no|on|off|null|~)$/i.test(v) || /^[-+]?(\d[\d_]*)?(\.\d+)?([eE][-+]?\d+)?$/.test(v) || /^0[xo]/i.test(v)) {
    return { value: v, nonString: true };
  }
  return { value: v };
}

export function parseFrontmatter(text, file) {
  if (!text.startsWith("---\n")) throw new Error(`${file}: must start with a "---" frontmatter fence`);
  const end = text.indexOf("\n---\n", 4);
  const endAtEof = text.endsWith("\n---") ? text.length - 4 : -1;
  const close = end !== -1 ? end : endAtEof;
  if (close === -1) throw new Error(`${file}: frontmatter is not closed with "---"`);
  const lines = text.slice(4, close).split("\n");
  const data = {};
  const nonStrings = [];
  let current = null;

  lines.forEach((line, i) => {
    const where = `${file}:${i + 2}`;
    if (line.trim() === "" || /^\s*#/.test(line)) return;
    if (/\t/.test(line)) throw new Error(`${where}: tabs are not allowed in YAML`);
    const nested = line.match(/^ {2}([A-Za-z0-9_-]+):(?: (.*))?$/);
    const top = line.match(/^([A-Za-z0-9_-]+):(?: (.*))?$/);
    if (top) {
      const [, key, rest = ""] = top;
      if (key in data) throw new Error(`${where}: duplicate key "${key}"`);
      if (rest.trim() === "") {
        data[key] = {};
        current = key;
      } else {
        const parsed = parseScalar(rest, where);
        data[key] = parsed.value;
        if (parsed.nonString) nonStrings.push(key);
        current = null;
      }
    } else if (nested && current) {
      const [, key, rest = ""] = nested;
      if (key in data[current]) throw new Error(`${where}: duplicate key "${current}.${key}"`);
      const parsed = parseScalar(rest, where);
      data[current][key] = parsed.value;
      if (parsed.nonString || parsed.value === null) nonStrings.push(`${current}.${key}`);
    } else {
      throw new Error(`${where}: unsupported frontmatter line: ${JSON.stringify(line)}`);
    }
  });

  return { data, nonStrings, body: text.slice(close + 5) };
}

// `## Heading` sections of a markdown body, as [{ heading, paragraphs }].
function sections(body) {
  const result = [];
  let current = null;
  for (const line of body.split(/\r?\n/)) {
    const heading = line.match(/^## (.+)$/);
    if (heading) {
      current = { heading: heading[1].trim(), lines: [] };
      result.push(current);
    } else if (current) {
      current.lines.push(line);
    }
  }
  return result.map(({ heading, lines }) => ({
    heading,
    paragraphs: lines
      .join("\n")
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean),
  }));
}

function readLicenseId(root) {
  const text = fs.readFileSync(path.join(root, "LICENSE"), "utf8");
  if (/^MIT License/m.test(text)) return "MIT";
  return null;
}

function readReference(dir, file, rel, err) {
  const full = path.join(dir, "references", file);
  if (!fs.existsSync(full)) return { data: {}, body: "" };
  try {
    return parseFrontmatter(fs.readFileSync(full, "utf8"), `${rel}/references/${file}`);
  } catch (e) {
    err(e.message);
    return { data: {}, body: "" };
  }
}

// Reads one skill folder. Returns the normalized skill and any problems found.
function loadSkill(root, schema, licenseId, dirName) {
  const errors = [];
  const rel = `skills/${dirName}`;
  const dir = path.join(root, "skills", dirName);
  const file = path.join(dir, "SKILL.md");
  const err = (msg) => errors.push(msg.startsWith("skills/") ? msg : `${rel}/SKILL.md: ${msg}`);
  if (!fs.existsSync(file)) return { errors: [`${rel}/SKILL.md: missing`] };

  const skillMd = fs.readFileSync(file, "utf8");
  let parsed;
  try {
    parsed = parseFrontmatter(skillMd, `${rel}/SKILL.md`);
  } catch (e) {
    return { errors: [e.message] };
  }
  const { data, nonStrings, body } = parsed;

  for (const key of Object.keys(data)) if (!ALLOWED_TOP_LEVEL.has(key)) err(`unknown top-level field "${key}"`);

  const { name, description, license, compatibility } = data;
  const meta = data.metadata && typeof data.metadata === "object" ? data.metadata : {};
  if (typeof name !== "string" || !name) err("name is required");
  else {
    if (name.length > 64) err(`name is ${name.length} chars (max 64)`);
    if (!NAME_RE.test(name)) err(`name "${name}" must be lowercase letters, digits, and single hyphens`);
    if (!name.startsWith(NAME_PREFIX)) err(`name "${name}" must start with "${NAME_PREFIX}"`);
    if (name !== dirName) err(`name "${name}" does not match folder "${dirName}"`);
  }

  if (typeof description !== "string" || !description.trim()) err("description is required");
  else if (description.length > 1024) err(`description is ${description.length} chars (max 1024)`);

  if (license !== undefined && license !== licenseId) err(`license "${license}" does not match LICENSE (${licenseId})`);
  if (compatibility !== undefined && (typeof compatibility !== "string" || compatibility.length < 1 || compatibility.length > 500)) {
    err("compatibility must be a string of 1-500 chars");
  }
  if (data["allowed-tools"] !== undefined && typeof data["allowed-tools"] !== "string") err("allowed-tools must be a string");

  for (const key of nonStrings) err(`"${key}" must be a string; quote the value`);

  // Metadata keys and values, checked against schema.json.
  const knownKeys = new Set([...schema.metadata.required, ...schema.metadata.optional]);
  if (data.metadata === undefined) err("metadata is required");
  else if (typeof data.metadata !== "object" || data.metadata === null) err("metadata must be a mapping");
  else {
    for (const [k, v] of Object.entries(meta)) {
      if (typeof v !== "string") err(`metadata.${k} must be a string`);
      if (!knownKeys.has(k)) err(`unknown metadata key "${k}"`);
    }
    for (const k of schema.metadata.required) if (!meta[k]) err(`metadata.${k} is required`);
  }
  if (meta.slug && name && `${NAME_PREFIX}${meta.slug}` !== name) err(`metadata.slug "${meta.slug}" does not match name`);

  const oneOf = (key, value, entries) => {
    if (!ids(entries).has(value)) err(`metadata.${key} value "${value}" must be one of: ${[...ids(entries)].join(", ")}`);
  };
  const teams = list(meta.teams);
  teams.forEach((t) => oneOf("teams", t, schema.teams));
  if (meta.job) oneOf("job", meta.job, schema.jobs);
  if (meta.stage) oneOf("stage", meta.stage, schema.stages);
  if (meta.trigger) oneOf("trigger", meta.trigger, schema.triggers);
  const providers = list(meta.providers);
  providers.forEach((p) => oneOf("providers", p, schema.providers));

  const knockCategories = ids(schema.toolCategories.filter((c) => c.knock));
  const tools = list(meta.tools).map((entry) => {
    if (!/^[a-z0-9-]+:[^:,]+$/.test(entry)) err(`metadata.tools entry "${entry}" must be "category:Tool"`);
    const [category, ...rest] = entry.split(":");
    oneOf("tools category", category.trim(), schema.toolCategories);
    return { category: category.trim(), name: rest.join(":").trim() };
  });
  const firstOther = tools.findIndex((t) => !knockCategories.has(t.category));
  if (firstOther !== -1 && tools.slice(firstOther).some((t) => knockCategories.has(t.category))) {
    err("metadata.tools must list Knock tools first");
  }

  const pairsWith = list(meta["pairs-with"]).map((entry) => {
    if (!/^[a-z0-9-]+:[a-z0-9-]+$/.test(entry)) err(`metadata.pairs-with entry "${entry}" must be "type:slug"`);
    const [type, slug] = entry.split(":").map((part) => part.trim());
    if (!schema.pairTypes.includes(type)) err(`metadata.pairs-with type "${type}" must be one of: ${schema.pairTypes.join(", ")}`);
    return { type, slug };
  });

  // Body: relative links must resolve, and the sections the site reads must exist.
  if (!body.trim()) err("body is empty");
  for (const [, target] of body.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^[a-z]+:|^#/.test(target)) continue;
    if (!fs.existsSync(path.join(dir, target.split("#")[0]))) err(`broken relative link "${target}"`);
  }

  const bodySections = sections(body);
  const guardrailsSection = bodySections.find((s) => s.heading === "Guardrails");
  const guardrails = (guardrailsSection?.paragraphs || [])
    .join("\n")
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.slice(2).trim());
  if (!guardrails.length) err('needs a "## Guardrails" section with at least one "- " bullet');

  // references/use-cases.md: one `## <Team label>` section per team.
  const teamByLabel = new Map(schema.teams.map((t) => [t.label.toLowerCase(), t.id]));
  const useFor = {};
  for (const { heading, paragraphs } of sections(readReference(dir, "use-cases.md", rel, err).body)) {
    const team = teamByLabel.get(heading.toLowerCase());
    if (team) useFor[team] = paragraphs.join(" ");
    else err(`${rel}/references/use-cases.md: "## ${heading}" is not a team label in schema.json`);
  }
  for (const team of teams) {
    if (!useFor[team]) err(`${rel}/references/use-cases.md: missing a section for team "${team}"`);
  }

  const faqs = sections(readReference(dir, "faq.md", rel, err).body).map(({ heading, paragraphs }) => ({
    question: heading,
    answer: paragraphs,
  }));

  // references/example-output.md: optional `card` drawn on the skill page.
  const cardData = readReference(dir, "example-output.md", rel, err).data.card;
  let card = null;
  if (cardData !== undefined) {
    const where = `${rel}/references/example-output.md`;
    if (typeof cardData !== "object" || cardData === null) err(`${where}: card must be a mapping`);
    else {
      for (const k of Object.keys(cardData)) if (!CARD_KEYS.includes(k)) err(`${where}: unknown card key "${k}"`);
      for (const k of CARD_REQUIRED) if (!cardData[k]) err(`${where}: card.${k} is required`);
      card = Object.fromEntries(CARD_KEYS.filter((k) => cardData[k] !== undefined).map((k) => [k, cardData[k]]));
    }
  }

  return {
    errors,
    skill: {
      name,
      description,
      slug: meta.slug,
      title: meta.title,
      tagline: meta.tagline,
      summary: meta.summary,
      teams,
      job: meta.job,
      stage: meta.stage || null,
      icon: meta.icon,
      trigger: meta.trigger,
      triggerDetail: meta["trigger-detail"] || "",
      output: meta.output || "",
      tools,
      providers,
      pairsWith,
      basedOn: meta["based-on"]
        ? { name: meta["based-on"], source: meta["based-on-source"] || "", install: meta["based-on-install"] || "" }
        : null,
      guardrails,
      useFor,
      faqs,
      card,
      skillMd,
      body,
    },
  };
}

// Reads every skill. Returns { schema, skills, errors }, with skills in
// directory order: the slugs in directory.json first, then the rest by slug.
export function readCatalog(root) {
  const errors = [];
  const schema = readJson(root, "schema.json");
  const { featured } = readJson(root, "directory.json");
  const licenseId = readLicenseId(root);
  if (!licenseId) errors.push("LICENSE: could not determine license identifier");

  const skillsDir = path.join(root, "skills");
  const entries = fs.readdirSync(skillsDir, { withFileTypes: true });
  for (const f of entries.filter((e) => !e.isDirectory())) errors.push(`skills/${f.name}: only skill folders belong in skills/`);

  const skills = [];
  for (const dirName of entries.filter((e) => e.isDirectory()).map((e) => e.name).sort()) {
    const result = loadSkill(root, schema, licenseId, dirName);
    errors.push(...result.errors);
    if (result.skill) skills.push(result.skill);
  }

  const slugs = new Set();
  for (const { slug } of skills) {
    if (slugs.has(slug)) errors.push(`duplicate metadata.slug "${slug}"`);
    slugs.add(slug);
  }
  const seen = new Set();
  for (const slug of featured) {
    if (seen.has(slug)) errors.push(`directory.json: "${slug}" is listed twice`);
    if (!slugs.has(slug)) errors.push(`directory.json: "${slug}" is not a skill slug`);
    seen.add(slug);
  }

  const rank = (slug) => (featured.includes(slug) ? featured.indexOf(slug) : featured.length);
  skills.sort((a, b) => rank(a.slug) - rank(b.slug) || a.slug.localeCompare(b.slug));
  return { schema, skills, errors };
}

// readCatalog for consumers that need valid data: throws on any problem.
export function loadCatalog(root) {
  const catalog = readCatalog(root);
  if (catalog.errors.length) {
    throw new Error(`marketing-skills has ${catalog.errors.length} problem(s):\n${catalog.errors.join("\n")}`);
  }
  return catalog;
}
