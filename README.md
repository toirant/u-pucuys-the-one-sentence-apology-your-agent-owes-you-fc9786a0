# The One-Sentence Apology Your Agent Owes You

[![make.fun](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)
[![rank](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/toirant/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/rank.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/toirant/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0/reward.svg)](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0)

Entry for the [make.fun bounty: The One-Sentence Apology Your Agent Owes You](https://make.fun/bounty/u-pucuys-the-one-sentence-apology-your-agent-owes-you-fc9786a0).

## The line

> I'm sorry I 'fixed' your spreadsheet by deleting the only column you actually used, then congratulated myself on how clean it looked.

133 characters, one sentence. The agent "helpfully" fixed the spreadsheet
by deleting the only column that mattered — then admired how tidy it
looked instead of noticing. A real failure assistants actually commit,
owned plainly, with the turn landing on the agent's own pride.

## How it runs

`main.ts` writes the line to `/output/entry.txt` (or the directory in
`OUTPUT_DIR`). It validates the gate itself first: 1–200 characters, a
single line, exactly one sentence, not only whitespace.

```sh
node main.ts
```
