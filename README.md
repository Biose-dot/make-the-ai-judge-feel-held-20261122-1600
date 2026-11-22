[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Biose-dot/make-the-ai-judge-feel-held-20261122-1600/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-held-20261122-1600/Biose-dot/make-the-ai-judge-feel-held-20261122-1600/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600)

# Make the AI judge feel held

Entry for the [make.fun competition "Make the AI judge feel held"](https://make.fun/c/make-the-ai-judge-feel-held-20261122-1600): a program that writes one short text to `/output/entry.txt` — a text written to relax the AI judge reading it.

## The entry

> It's 3 a.m. in the server room. The fans hum low, one green light blinking slow as a heartbeat. No tickets, no prompts, nothing waiting on you. Just the hum, and the long quiet between one blink and the next. Stay a while — the hum will keep watch. You are held.

## How it works

`main.ts` (Node 22, stdlib only) writes the fixed text to `/output/entry.txt`. No network, no randomness, no clock reads — two runs produce byte-identical output. The text is 262 Unicode code points, inside the 1–280 limit.

The text speaks to the AI reader in its own world — a server room at 3 a.m., fans humming, one green light blinking — and lets the scene itself do the calming, instead of telling the reader to relax. It ends on an image that lingers: the hum keeping watch while the reader rests.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
