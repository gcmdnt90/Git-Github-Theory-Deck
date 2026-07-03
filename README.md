# Git & GitHub — a basic-literacy module

A light-theme Reveal.js deck that teaches the smallest useful set of Git and
GitHub ideas. Its defining feature: **every action is shown two ways** — what a
human types, and what you say to an AI agent to have it done for you.

Built to match the format of the AI theory deck (`theory-deck-git`): same
"Signal-on-Paper" theme, same modular build.

## Audience

Complete beginners. No prior Git assumed. CLI-first, with brief notes that
VS Code / GitHub Desktop do the same things with buttons.

## Modules

- `00-cover` — cover, map, the human-vs-agent motif, one-sentence thesis
- `01-why-git` — the problem without Git; why it matters more with agents
- `02-mental-model` — repo, working dir, staging, commit, branch, remote
- `03-daily-loop` — status, add, commit, push, pull (both ways)
- `04-branching` — branch, switch, merge, conflicts
- `05-github` — Git vs GitHub, clone/push/pull, pull requests
- `06-with-agents` — what to delegate, the review habit, good prompts
- `07-never-forget` — habits, secrets, force-push, how to undo
- `08-cheatsheet` — one page to keep
- `99-references` — official git-scm.com and docs.github.com sources only

## View

Open `index.html` directly in a browser. Self-contained; runs offline from
`file://`.

## Edit and rebuild

Edit the fragments in `modules/`, then:

```bash
node build.mjs
```

Do not edit `index.html` by hand — it is generated from `template.html` and the
module fragments.

## Design note

Content-first, with generated HTML/CSS graphics instead of raster image
dependencies. The deck uses a consistent commit-graph motif, file-stack,
branching, remote-sync, and review-loop visuals. Colour is semantic: cyan =
human, violet = agent, green = safe habit, red = warning, amber =
follow-this signal.
