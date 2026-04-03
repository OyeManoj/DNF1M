# DNF — Do Nothing

**A fullscreen stillness timer. Lock your screen. Sit still. Receive one thought worth keeping.**

🔗 **Live:** [dnf.vercel.app](https://dnf.vercel.app)

---

## What it does

- Choose your duration: 1 min → 5 hours, or any custom value
- Enters fullscreen and locks your screen
- Detects tab switches, window blur, keyboard presses — 5 second penalty each time
- Delivers one of **1000 hand-written insights** at the end of each session
- Insights never repeat within 1000 sessions (Fisher-Yates shuffle, seeded per device)
- Tracks session count and total stillness time
- Auto dark mode after 8pm

## Tech

- **Pure static HTML** — single file, zero dependencies, zero API calls
- **No backend** — everything runs in the browser
- **~100KB** total including all 1000 insights
- Deploys to Vercel, GitHub Pages, Netlify, or anywhere that serves HTML

## Deploy

```bash
# Push to GitHub
git add .
git commit -m "deploy"
git push origin main

# Then connect repo to vercel.com/new
# Framework: Other (static)
# No env vars needed
```

## Insights

1000 original insights across 10 categories:
Attention · Time · Work · Rest · Thought · Effort · Nature · Memory · Clarity · Self

Shuffled with a seeded Fisher-Yates algorithm stored in `localStorage`.
After all 1000 are seen, reshuffles with a new seed.

## Lock mechanics

| Trigger | Response |
|---------|----------|
| Tab switch | 5s penalty |
| Window blur | 5s penalty |
| Any keypress | 5s penalty |
| Fullscreen exit | Re-requests fullscreen + 5s penalty |
| Close/navigate | Browser confirmation dialog |
| Right-click | Blocked during session |

---

Built by [Manoj Bhosale](https://github.com/OyeManoj)
