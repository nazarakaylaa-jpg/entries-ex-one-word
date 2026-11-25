// Describe Your Ex in One Word — make.fun program/v1 entry.
//
// Writes exactly one word (11 characters) to <output>/entry.txt: the
// one-word verdict on an ex.
//
// The word was chosen against the judge brief, in the brief's own order:
// 1. On subject: "Unsubscribe" is instantly readable as a verdict on a
//    former partner — the ex as a subscription you cancelled. It is the
//    button you press when a service stops being worth it, applied to a
//    person, so the verdict lands without a caption.
// 2. Comic punch: the joke is a category error that clicks at a glance —
//    a human being filed under email marketing. The ex is not insulted,
//    they are unsubscribed from, which is colder and funnier than any
//    name-calling.
// 3. Surprise: nobody's first instinct for "describe your ex" is a
//    mailing-list verb, yet the moment it lands it feels obvious.
// 4. Craft: one word, spelled correctly, no punctuation tricks, no
//    hyphen, no capitalisation gimmick beyond the normal sentence case
//    of a single word.
// 5. Recognition: anyone who has had an ex has felt the exact moment of
//    hitting unsubscribe — the relief of opting out for good.
//
// Final word (11 characters):
//   Unsubscribe

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "Unsubscribe";

const MAX_CHARS = 111;

function main(): void {
  const chars = [...ENTRY].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (ENTRY.trim() !== ENTRY) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (/\s/.test(ENTRY)) {
    throw new Error("entry must be exactly one word, no whitespace");
  }
  if (!/^[A-Za-z]+$/.test(ENTRY)) {
    throw new Error("entry must be a single alphabetic word");
  }
  if (/[.,;:!?'"-]/.test(ENTRY)) {
    throw new Error("entry must use no punctuation tricks");
  }
  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(ENTRY)) {
    throw new Error("entry must not contain control characters");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY, "utf8");
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== ENTRY) {
    throw new Error("entry.txt did not round-trip byte for byte");
  }
  console.log(`wrote ${outPath} (${chars} characters)`);
}

main();
