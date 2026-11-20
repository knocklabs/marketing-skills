#!/usr/bin/env node
// Validates every skills/*/SKILL.md against the Agent Skills spec
// (https://agentskills.io/specification) and this repo's conventions. The
// checks live in lib/catalog.mjs, which the knock.app site also uses to load
// skills, so a skill that passes here builds on the site.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { readCatalog } from "../lib/catalog.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const { skills, errors } = readCatalog(ROOT);

if (errors.length) {
  console.error(errors.join("\n"));
  console.error(`\n${errors.length} problem(s) across ${skills.length} skill(s).`);
  process.exit(1);
}
console.log(`All ${skills.length} skills are valid.`);
