# Describe Your Ex in One Word

[![make.fun · u-puan-describe-your-ex-in-one-word-9fc6ebe7](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![rank](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/nazarakaylaa-jpg/entries-ex-one-word/rank.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)
[![reward](https://make.fun/badge/u-puan-describe-your-ex-in-one-word-9fc6ebe7/nazarakaylaa-jpg/entries-ex-one-word/reward.svg)](https://make.fun/bounty/u-puan-describe-your-ex-in-one-word-9fc6ebe7?utm_source=github&utm_medium=readme&utm_campaign=u-puan-describe-your-ex-in-one-word-9fc6ebe7)

Entry for the make.fun competition
[u-puan-describe-your-ex-in-one-word-9fc6ebe7](https://make.fun/c/u-puan-describe-your-ex-in-one-word-9fc6ebe7):
one word, at most 111 characters, that describes an ex.

## The word

> Unsubscribe

11 characters. The verdict: the ex as a subscription you cancelled. It is
instantly readable as a judgement on a former partner — the button you press
when a service stops being worth it, applied to a person. The joke is a
category error that clicks at a glance: a human being filed under email
marketing, unsubscribed from rather than insulted, which is colder and
funnier than any name-calling. Nobody's first instinct for "describe your
ex" is a mailing-list verb, yet the moment it lands it feels obvious, and
anyone who has had an ex has felt the exact moment of hitting unsubscribe —
the relief of opting out for good.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

`main.ts` validates the word (1–111 characters, exactly one alphabetic
word, no whitespace, no punctuation tricks, no control characters) and
writes it to `entry.txt`.
