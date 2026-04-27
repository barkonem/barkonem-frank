# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for **Barkonem IT Services** — a premium IT, cybersecurity, smart home, and AI consulting company founded by Corey Barkley, operating in the Philadelphia/PA region.

## Files

| File | Purpose |
|------|---------|
| `barkonem_website.html` | Primary marketing site (dark navy theme, services, CTA) |
| `barkonem_website_preview.html` | Earlier layout prototype with hero image and contact form |
| `frank-barkonem.html` | "Frank" — AI COO chat interface powered by Claude |
| `barkonem-website-godaddy.zip` | GoDaddy-packaged deployment archive |

## Running Locally

No build step — open any `.html` file directly in a browser:
```
open barkonem_website.html
open frank-barkonem.html
```

## Architecture: Frank AI Chat (`frank-barkonem.html`)

Frank is a standalone single-file chat app that calls the Anthropic Messages API directly from the browser. Key details:

- **Model:** `claude-sonnet-4-20250514`
- **System prompt:** Defines Frank as Barkonem's AI COO/CTO/strategist with full business context (Corey's background, target markets, brand positioning, radiology consulting lane)
- **Conversation state:** Maintained in a `conversation[]` array in memory (resets on page reload)
- **Auto-intro:** On `window.load`, an intro prompt fires automatically to seed Frank's opening briefing
- **Markdown rendering:** `formatResponse()` converts bold, headers, lists, and `NEXT MOVE:` sections to HTML

**API proxy:** Frank calls `/api/chat` (a Vercel serverless function) instead of Anthropic directly. The function holds the API key in a server-side environment variable (`ANTHROPIC_API_KEY`) — never exposed to the browser.

## Brand & Design System

- **Color palette:** Navy `#050d1a` / Electric blue `#0ea5e9` / Cyan `#22d3ee` / Accent orange `#ff6b2b`
- **Fonts:** Bebas Neue (display), IBM Plex Mono (mono/UI labels), DM Sans (body)
- **Tone:** Premium, protective, technical — not budget/consumer
