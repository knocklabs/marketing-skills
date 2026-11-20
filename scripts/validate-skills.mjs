#!/usr/bin/env node
// Validates every skills/*/SKILL.md against the Agent Skills spec
// (https://agentskills.io/specification) and this repo's conventions.
// No dependencies: frontmatter is parsed with a strict YAML subset parser that
// rejects anything it does not understand, so whatever passes is valid YAML.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SKILLS_DIR = path.join(ROOT, "skills");

const ALLOWED_TOP_LEVEL = new Set(["name", "description", "license", "compatibility", "metadata", "allowed-tools"]);
const REQUIRED_METADATA = ["title", "slug", "tagline", "summary", "teams", "job", "tools", "trigger", "trigger-detail", "output", "providers", "icon", "pairs-with"];
const OPTIONAL_METADATA = ["stage", "based-on", "based-on-source", "based-on-install"];
const KNOWN_METADATA = new Set([...REQUIRED_METADATA, ...OPTIONAL_METADATA]);
const ENUMS = {
  teams: { list: true, values: ["marketing", "gtm", "lifecycle", "product", "engineering"] },
  job: { values: ["seo", "website", "content", "messaging", "analytics", "social", "paid-ads", "outbound", "abm", "brand"] },
  stage: { values: ["acquisition", "activation", "engagement", "retention", "win-back"] },
  trigger: { values: ["schedule", "event", "manual"] },
  providers: { list: true, values: ["claude", "grok", "chatgpt", "cursor"] },
};
const NAME_RE = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const NAME_PREFIX = "knock-";

function readLicenseId() {
  const text = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");
  if (/^MIT License/m.test(text)) return "MIT";
  return null;
}

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

function parseFrontmatter(text, file) {
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

function validateSkill(dirName, licenseId) {
  const errors = [];
  const rel = `skills/${dirName}/SKILL.md`;
  const file = path.join(SKILLS_DIR, dirName, "SKILL.md");
  if (!fs.existsSync(file)) return [`${rel}: missing`];

  let parsed;
  try {
    parsed = parseFrontmatter(fs.readFileSync(file, "utf8"), rel);
  } catch (err) {
    return [err.message];
  }
  const { data, nonStrings, body } = parsed;
  const err = (msg) => errors.push(`${rel}: ${msg}`);

  for (const key of Object.keys(data)) if (!ALLOWED_TOP_LEVEL.has(key)) err(`unknown top-level field "${key}"`);

  const { name, description, license, compatibility, metadata } = data;
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

  if (metadata === undefined) err("metadata is required");
  else if (typeof metadata !== "object" || metadata === null) err("metadata must be a mapping");
  else {
    for (const [k, v] of Object.entries(metadata)) {
      if (typeof v !== "string") err(`metadata.${k} must be a string`);
      if (!KNOWN_METADATA.has(k)) err(`unknown metadata key "${k}"`);
    }
    for (const k of REQUIRED_METADATA) if (!metadata[k]) err(`metadata.${k} is required`);
    if (metadata.slug && name && `${NAME_PREFIX}${metadata.slug}` !== name) err(`metadata.slug "${metadata.slug}" does not match name`);
    for (const [k, { list, values }] of Object.entries(ENUMS)) {
      if (typeof metadata[k] !== "string") continue;
      for (const v of list ? metadata[k].split(",").map((t) => t.trim()) : [metadata[k]]) {
        if (!values.includes(v)) err(`metadata.${k} value "${v}" must be one of: ${values.join(", ")}`);
      }
    }
    if (metadata.tools) {
      for (const tool of metadata.tools.split(",").map((t) => t.trim())) {
        if (!/^[a-z0-9-]+:[^:,]+$/.test(tool)) err(`metadata.tools entry "${tool}" must be "category:Tool"`);
      }
    }
    if (metadata["pairs-with"]) {
      for (const pair of metadata["pairs-with"].split(",").map((t) => t.trim())) {
        if (!/^[a-z0-9-]+:[a-z0-9-]+$/.test(pair)) err(`metadata.pairs-with entry "${pair}" must be "type:slug"`);
      }
    }
  }

  if (!body.trim()) err("body is empty");
  for (const [, target] of body.matchAll(/\]\(([^)\s]+)\)/g)) {
    if (/^[a-z]+:|^#/.test(target)) continue;
    const resolved = path.join(SKILLS_DIR, dirName, target.split("#")[0]);
    if (!fs.existsSync(resolved)) err(`broken relative link "${target}"`);
  }

  return errors;
}

const licenseId = readLicenseId();
const dirs = fs
  .readdirSync(SKILLS_DIR, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort();

const errors = [];
if (!licenseId) errors.push("LICENSE: could not determine license identifier");
for (const dir of dirs) errors.push(...validateSkill(dir, licenseId));

const strays = fs.readdirSync(SKILLS_DIR).filter((f) => !fs.statSync(path.join(SKILLS_DIR, f)).isDirectory());
for (const f of strays) errors.push(`skills/${f}: only skill folders belong in skills/`);

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) across ${dirs.length} skill(s).`);
  process.exit(1);
}
console.log(`All ${dirs.length} skills are valid.`);
