// Fortune Cookie Wisdom for Developers — make.fun entry for @yuhao-qiao.
// The program writes one fortune-cookie line to /output/entry.txt: a
// single line of wisdom for a software developer, in the voice of a
// real fortune cookie. The line is baked into the code below so the
// program runs with no network and writes the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The fortune: the next bug is already in production, waiting since
// Tuesday. It works as a fortune because it is true and it is
// specific — every developer has felt the dread of a bug that was
// already live before anyone noticed. "Waiting patiently" gives the
// bug a personality, and "since Tuesday" is the detail that makes it
// land: not "soon", not "someday", but a weekday that has already
// passed. The tired senior engineer smiles because he has met this
// bug before, more than once.
const LINE = "Your next bug is already in production. It has been waiting patiently for you since Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");

// Second pass: "since Tuesday" survived the cut over "last week" — a
// weekday is a fact, a week is a shrug. Fortunes need one concrete
// detail or they read as horoscopes.
