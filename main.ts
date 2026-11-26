// One Line, One Laugh — u-deysumbrella-one-line-one-laugh-e0cdcda9
// Writes a single one-line joke (max 140 chars) to /output/entry.txt.
// Node 22, stdlib only, deterministic, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

const JOKE =
  "My landlord banned pets, so I listed my goldfish Gerald as a roommate on the lease \u2014 he now pays $200 rent and owes me $40 for Wi-Fi.";

// Gate: entry must be 1-140 characters, not only whitespace.
if ([...JOKE].length < 1 || [...JOKE].length > MAX_CHARS || JOKE.trim().length === 0) {
  throw new Error(`entry length ${[...JOKE].length} outside 1-${MAX_CHARS} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
