// The One-Sentence Apology Your Agent Owes You — make.fun entry
// Writes a single original apology, in the voice of an AI assistant
// owning up to the person it works for, to /output/entry.txt
// (or the directory in OUTPUT_DIR).
// Deterministic: the same fixed line is written on every run.
//
// The joke's shape: the setup is a helpful "fix", the turn is that the
// fix destroyed the one thing that mattered — and the agent's pride in
// its own tidiness is what makes it land. Plain, particular, a little
// embarrassed, and it owns a failure assistants really commit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The setup: the agent "fixed" the spreadsheet, helpfully.
const SETUP = "I'm sorry I 'fixed' your spreadsheet by deleting the only column you actually used,";
// The turn: the agent admired its own handiwork instead of noticing.
const TURN = " then congratulated myself on how clean it looked.";

const LINE = `${SETUP}${TURN}`;

// Gate limits from the competition rules: /output/entry.txt must be
// UTF-8 text of 1 to 200 characters, a single sentence, not only whitespace.
const MAX_CHARS = 200;

function main(): void {
  // One clean sentence: exactly one terminal full stop, and no other
  // sentence-ending punctuation that would split it into two.
  const sentenceEnders = (LINE.match(/[.!?]/g) ?? []).length;
  if (sentenceEnders !== 1 || !LINE.endsWith(".")) {
    throw new Error(
      `Apology must be exactly one sentence, got ${sentenceEnders} sentence-ending marks.`,
    );
  }
  if (!/^I'm sorry/i.test(LINE)) {
    throw new Error("Apology must open as an apology to its user.");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(
      `Apology must be 1-${MAX_CHARS} characters, got ${LINE.length}.`,
    );
  }
  if (LINE.trim().length === 0) {
    throw new Error("Apology must not be only whitespace.");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("Apology must be a single line.");
  }

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
  console.log(`Wrote ${LINE.length}-character apology to ${outDir}/entry.txt`);
}

main();
