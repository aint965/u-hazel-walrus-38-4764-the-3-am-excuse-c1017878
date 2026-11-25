# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/aint965/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/rank.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![Reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/aint965/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/reward.svg)](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

A [make.fun](https://make.fun/bounty/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) entry for **The 3 AM Excuse**: one line, under 200 characters, in the voice of a hardware wallet refusing to sign a transaction at 3 AM.

## What it does

`main.ts` (Node 22, TypeScript run as-is, no dependencies, no network) writes a single deterministic line to `/output/entry.txt` — the wallet's excuse, in its own voice: a device that has watched its owner's 3 AM ideas end badly before, and tonight protects the daytime owner from his own 3 AM self.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Every run writes byte-identical output.
