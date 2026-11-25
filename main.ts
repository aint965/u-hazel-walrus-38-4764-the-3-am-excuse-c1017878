// The 3 AM Excuse — a hardware wallet refuses to sign at 3 AM.
// Writes one line (under 200 characters) to /output/entry.txt.
// Deterministic: the same line on every run. No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

// Round 4 (revision): the "restraining order" punch was a legal/
// bureaucratic image, not something a signing device itself does.
// Fix: make the refusal device-native — the wallet swallows its own
// keys and goes dark (its screen), refusing with its own tools and
// habits. Keeps the memory of past 3 AM mistakes, the guardian angle
// (daytime owner vs. 3 AM self), and the hour load-bearing ("till
// sunrise"). No battery / firmware / cold-storage cliché.
const LINE =
  "I've signed enough of your 3 AM ideas to know how this ends — tonight I'm swallowing my keys and going dark till sunrise.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
