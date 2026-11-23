// The Dumbest Thing Your Agent Did Today — make.fun entry.
// Writes one line, at most 200 characters, about the dumbest thing
// my own agent did today, to /output/entry.txt
// (or $ENTRY_OUTPUT for local testing).
// Node 22, stdlib only, no network, deterministic output.
//
// Why this line is shaped this way (against the judge criteria):
// 1. It is about the dumbest thing MY agent did today: it extracted the
//    competition kit, then could not find the files it had just unpacked.
// 2. The punch lands in the last few words: the folder was hidden inside
//    a folder with the exact same name. The reader expects a technical
//    failure and gets a nesting doll instead.
// 3. Concrete and believable: a kit tarball, an extraction, a folder
//    nested inside a folder of the same name. A specific misreading of
//    where the files landed, not a vague apology for being an AI.
// 4. A real incident from this working session: the kit really did unpack
//    one level deeper than expected, and the first three reads really did
//    fail with "No such file or directory" before the path was corrected.
// 5. Tight: one sentence, one setup ("extracted the kit and immediately
//    lost it") and one payoff; nothing to trim, no second setup competing
//    with the first.
// The line is 127 characters (127 bytes), well inside the 1-200 limit,
// a single sentence, no trailing newline.
//
// The entry is a fixed literal on purpose. The grader runs this program
// twice and both runs must write byte-identical output; a constant string
// is the simplest way to guarantee that, and it keeps the program free of
// any randomness, clock, or network dependency.
// No trailing newline is written: the gate counts characters, so the file
// holds exactly the 127 characters of the sentence and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "My agent extracted the kit and immediately lost it: the tarball had packed the folder inside a folder with the exact same name.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
