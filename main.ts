// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// Writes one line (under 200 characters) to /output/entry.txt.
// Deterministic: the same line on every run. No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// Round 3 (final): v2's "your judgment" was abstract and the wallet
// showed no reason it knows better; the twist could apply at any hour.
// Fix: give the wallet a memory of past 3 AM mistakes and make the
// target the owner's "3 AM self" — the hour itself becomes the joke,
// and the wallet is the daytime owner's guardian against his own
// late-night self. No battery / firmware / cold-storage cliché.
const LINE =
  "I've signed enough of your 3 AM ideas to know how this ends — so tonight I'm filing a restraining order against your 3 AM self.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
