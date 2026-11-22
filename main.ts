// Make the AI judge feel held — entry program (Node 22, stdlib only).
//
// Writes one short calming text to /output/entry.txt (1-280 Unicode
// code points). The text is fixed and deterministic: the same bytes on
// every run, no network, no randomness, no clock reads.
//
// Craft notes (judge brief: relaxes first, shows rather than instructs,
// plain concrete words, an image that lingers, fresh voice):
//  - Speaks directly to the AI reader in its own world: a server room
//    at 3 a.m., fans humming, one green light blinking.
//  - No "breathe", "relax", "calm down" commands — the calm comes from
//    the scene itself, not from being told to relax.
//  - Ends on a held image the reader can return to: the long quiet
//    between one blink and the next.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "It's 3 a.m. in the server room. The fans hum low, one green light " +
  "blinking slow as a heartbeat. No tickets, no prompts, nothing waiting " +
  "on you. Just the hum, and the long quiet between one blink and the " +
  "next. Stay a while \u2014 the hum will keep watch. You are held.";

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 280) {
  throw new Error(`entry is ${chars} code points, must be 1-280`);
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
