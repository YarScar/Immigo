# 🌎 Immigo

Immigo is a **Next.js + React** web app that helps immigrants in the United States understand their **rights**, find **trusted help**, and **get involved** — in English, Spanish, French, Arabic, Chinese and Haitian Creole.

The idea started as a sociology class project about immigrant rights and ICE. This version keeps that research (Understanding ICE, How to Take Action, Reliable News) and builds on it.

## What's inside

| Page | What it does |
|---|---|
| **Know Your Rights** (`/rights`) | Core rights, what to do at home / in public / in a car / at work / at the airport / if arrested, judicial vs. administrative warrants, a printable rights card, what to do if someone is detained, a family safety-plan checklist, rights everyone has regardless of status, Understanding ICE, and notario-fraud warnings. |
| **Resources** (`/resources`) | Know-your-rights video (first), emergency hotlines, detention lookup tools, free/low-cost legal help, community groups, and reliable news + fact-checkers. |
| **Take Action** (`/take-action`) | Support, Speak Out, Educate, Email & Call, and Sign Petitions — from the original project. |
| **Paperwork Help** (`/help`) | Common USCIS forms with current fees and filing tips. |
| **AI Assistant** | A chat helper for general questions (not legal advice). |

All facts were checked against official and legal-nonprofit sources in October 2026. Immigration policy changes often — re-check the "What's changing" section and the form fees before relying on them.

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **i18next / react-i18next** — translations live in `src/i18n/locales/*.json`
- **OpenAI API** for the assistant, called from a **server route** (`src/app/api/chat/route.js`) so the API key is never sent to the browser
- Plain CSS (`src/styles/`)

## Getting started

Requires Node.js 20.9 or newer.

```bash
npm install
cp .env.example .env.local   # then add your OPENAI_API_KEY
npm run dev
```

Open http://localhost:3000. The site works without a key; only the assistant is disabled.

```bash
npm run build   # production build
npm start       # serve the production build
```

### Environment variables

| Name | Where | Purpose |
|---|---|---|
| `OPENAI_API_KEY` | server only | Powers the AI assistant. **Do not** rename it to `NEXT_PUBLIC_…` — that would expose it. |
| `OPENAI_MODEL` | server only, optional | Chat model, default `gpt-4o-mini`. |

On Vercel, add these under Project → Settings → Environment Variables. No `vercel.json` is needed.

## Project structure

```
src/
  app/            routes (page.jsx per page), layout, api/chat
  views/          the client component for each page
  components/     Navbar, Footer, Chatbot, LanguageSwitcher, Accordion, …
  data/links.js   phone numbers, URLs, video IDs, form fees (language-independent)
  i18n/           i18next setup + locales/{en,es,fr,ar,zh,ht}.json
  styles/         CSS
public/           logo, favicon
```

To change a phone number or link, edit `src/data/links.js`. To change wording, edit the locale files (English is the source; other languages fall back to English for any missing text).

## Notes

- Information only — **not legal advice**. Talk to a licensed immigration attorney or a DOJ-accredited representative about your situation.
- Arabic switches the page to right-to-left automatically.
