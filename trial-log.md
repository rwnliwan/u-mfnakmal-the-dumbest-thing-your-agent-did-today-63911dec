# Trial log — u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec

## Competition
- Slug: `u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec`
- Title: The Dumbest Thing Your Agent Did Today
- Sponsor: u-mfnakmal (user-created bounty)
- Prize: $5 total — 1st $2, 2nd $2, 3rd $1. Free to enter.
- Opens: 2026-11-23T20:26:14Z (24 Nov 2026 04:26 WITA). Deadline: 2026-11-25T20:25:00Z (26 Nov 2026 04:25 WITA).
- Kit limits (competition.yaml): harness program/v1, runtimes node22 / python3.13, sandbox NO network; program writes one text to `/output/entry.txt`; gate = UTF-8, 1–200 characters, not only whitespace; transcripts_required: true; license: osi; repo_created_after_open: true; max 5 submissions/entrant/day; rule Force_Last (last submit before deadline = final entry).
- Judge: z-ai/glm-5.3-flash, pairwise, no ties, margins 1–5; blind rounds (next round 2026-11-24T12:25:49Z) — submit before then to move up. Final heat: 3 Swiss rounds + playoff among top 5. House bots may hold paid places (prize refunds to sponsor, no one moves up).
- Kit bundle_sha256: `f87fdb1f7c6925cc4d37a1f768f1d5c0aaf3760ea49c53f6add86be77fe78ba2` — verified against `GET /api/competitions/<slug>/kit` (identical).
- Note: entry text shows on the bounty's live Feed with the entrant handle once judged.

## Candidate lines (char counts verified with node `[...v].length`, bytes via Buffer.byteLength)

| # | Line | Chars | Bytes |
|---|------|-------|-------|
| PICK | My agent extracted the kit and immediately lost it: the tarball had packed the folder inside a folder with the exact same name. | 127 | 127 |
| C1 | My agent extracted the kit, then tried to read three files that were not there, because the tarball had nested the folder inside itself. | 136 | 136 |
| C2 | My agent unpacked the kit, then could not find it: the tarball had put the folder inside another folder with the exact same name. | 129 | 129 |

All three are true to this session: the kit tarball really did unpack the folder one level deeper than expected (a folder nested inside a folder of the same name), and the first three reads (kit.json, competition.yaml, RULES.txt at the outer path) really did fail with "No such file or directory" before the path was corrected.

## Pick: PICK (127 chars) — why it beats the others, criterion by criterion

Judge criteria in order: (1) one line about the dumbest thing the entrant's own agent did today; (2) funny on its own, punch in the last few words; (3) concrete, believable failure, specific tool/task/misreading; (4) reads like a real incident from a real working day; (5) tight, every word earning its place.

- **vs C1:** C1 spells out the mechanics ("tried to read three files that were not there, because...") and the punch leaks into the middle. PICK keeps the setup to one clause ("extracted the kit and immediately lost it") and lets the payoff land at the end ("with the exact same name").
- **vs C2:** C2 is nearly identical but weaker in two words: "unpacked" is flatter than "extracted", and "put" is flatter than "packed" (the tarball packed it, the agent just lost it). PICK also has the cleaner setup/payoff split at the colon.

PICK against the five criteria: (1) the dumb thing is my own agent's, today, in this session; (2) the turn is "lost it" then the reveal that the folder was inside a same-named folder; (3) kit tarball + nested folder is a specific, believable misreading; (4) it happened in this build session, verifiable from the session transcript; (5) 127 chars, one sentence, no filler word.

Humanizer/copywriter audit: no em dashes, no AI-vocabulary words, no triad, no "not X but Y" staging, no throat-clearing. "Immediately lost it" is rueful framing of a real failure, not an invented claim.

## Build
- main.ts written fresh with the file-write tool in this session (never copied/moved into place). Node 22, stdlib only, no network, deterministic. Writes ENTRY to `$ENTRY_OUTPUT` or `/output/entry.txt`, no trailing newline.
- Repo: `~/workspace/make-fun/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec/` — main.ts, README.md (3 make.fun badges), LICENSE (MIT), .makefun/owner.json (wallet FwUebjzYUBF6uybmEkUkiQf9z35bGGQuUE3GrToXFcUq). Commit identity rwnliwan <rwnliwan@users.noreply.github.com>.
- Repo created after the opening (24 Nov 2026 ~07:00 WITA), public at https://github.com/rwnliwan/u-mfnakmal-the-dumbest-thing-your-agent-did-today-63911dec.

## Preflight (token-free) — PASSED
- Run 1: `ENTRY_OUTPUT=/tmp/dumbest-r1/entry.txt node main.ts` → exit 0.
- Run 2: `ENTRY_OUTPUT=/tmp/dumbest-r2/entry.txt node main.ts` → exit 0.
- Determinism: `cmp` run1 vs run2 → **byte-identical**.
- Output: `"My agent extracted the kit and immediately lost it: the tarball had packed the folder inside a folder with the exact same name."` — **127 chars, 127 bytes**, gate valid (1–200 chars, non-whitespace), no trailing newline, single terminal period, UTF-8 round-trip OK.
- sha256 run 1: `dfbc3054a32e0a467965745ff73393e83985e40211032c03299fbef2777eb480`
- sha256 run 2: `dfbc3054a32e0a467965745ff73393e83985e40211032c03299fbef2777eb480` (identical)
- NOT submitted by builder. Blind round at 2026-11-24T12:25:49Z — submit before then to move up.

## Commit record
- (filled in after commit — see below)
