# BOARDGAMES Project — Context & Instructions
# ▒▒▒ CABINET LUDO · BOARD GAMES ONLY ▒▒▒
# This `CLAUDE.md` ONLY governs the Cabinet Ludo board game project.
# It is auto-loaded by Claude Code whenever this directory is the working scope.
# Do not rename — auto-loading depends on the filename. Folder name `_CLAUDE_BOARDGAMES/` and this banner do the scoping work.

This folder is a personal board game library and curation project for Chris (chris@tykee.ventures).

---

## ⚑ Directory Structure — Read This First

```
/Users/CDW-home/My Drive/BOARDGAMES/              ← ROOT (game rules & references only)
│
├── *.pdf                                          ← All rulebooks (PDFs) live here
├── DIPLOMACY/                                     ← Diplomacy resources folder
├── Sherlock Holmes/                               ← SH Consulting Detective resources
├── WARHAMMER/                                     ← Warhammer resources
├── ludo-ticket-to-ride/                           ← Standalone Ticket to Ride site (separate Netlify deploy)
│
└── _CLAUDE_BOARDGAMES/                            ← CLAUDE'S WORKING DIRECTORY (all website outputs + brand)
    ├── CLAUDE.md                                  ← This file
    ├── _SCOUTING_TEMPLATE.md                      ← Template for new game evaluations
    ├── _brand/                                    ← Brand assets (kept INSIDE the project to prevent accidents)
    │   └── jules-verne-nautilus-cover.png         ← Visual anchor — do not delete, do not duplicate
    ├── css/
    │   └── ludo.css                               ← Master stylesheet (Jules Verne / Nautilus theme)
    ├── cheatsheets/
    │   └── _source/                               ← Structured EN/FR source for one-page cheat sheets
    │       └── pax-pamir_fr_source.md             ← Pax Pamir FR (extracted from legacy HTMLs)
    ├── index.html                                 ← Cabinet Ludo home — The Map Room
    ├── collection.html                            ← The Game Library (with modal cards + tonight filters)
    ├── heritage.html                              ← The Vitrine — ancient classics + antique hunting grounds
    ├── editions.html                              ← Atlas of Editions — game families with multiple variants
    ├── scouting.html                              ← Scouting & Discovery
    ├── draughts.html                              ← Draughts deep-history chronicle (linked from Heritage)
    ├── Ticket_to_Ride_All_Versions_Review.html   ← TtR atlas chapter (linked from Editions)
    ├── games-data.js                              ← All game data (powers collection.html)
    ├── ludo.js                                    ← Site JavaScript
    ├── ludo.skill                                 ← Ludo skill definition (ZIP bundle of SKILL.md)
    └── netlify.toml                               ← Netlify deployment config
```

### Rules for Claude working in this project:
- **ALL website outputs** go in `_CLAUDE_BOARDGAMES/` — HTML pages, JS, CSS, brand assets
- **ALL rulebook lookups** come from the ROOT (`/BOARDGAMES/*.pdf` and subfolders)
- **CSS path** in all HTML: `css/ludo.css` (relative, same directory as HTML files)
- **Brand image path:** `_brand/jules-verne-nautilus-cover.png` (now scoped inside the project folder)
- **Never write outputs to the ROOT** — it's read-only reference material
- **Chris drops input files** (screenshots, PDFs, references) into `_CLAUDE_BOARDGAMES/` for Claude to use

### Files cleanup status:
- 2026-04-26 — Cabinet Ludo restructure: duplicates removed, 4-section architecture built.
- 2026-04-26 — Pax Pamir legacy HTMLs deleted; FR content extracted to `cheatsheets/_source/pax-pamir_fr_source.md`.
- 2026-04-26 — `_brand/` folder relocated from `/BOARDGAMES/_brand/` → `_CLAUDE_BOARDGAMES/_brand/` so the visual anchor lives inside the project.

---

---

## About the Family & Gaming Context

Chris is building a lifelong board game collection to share with his grown children (late 20s) and their partners — and eventually with grandchildren. The family has a deep tradition of play going back to when the children were young.

**Classic games in the family repertoire:** Backgammon, Chess, Risk, Ticket to Ride, Monopoly, Catan, Cluedo, Poker (Texas Hold'em), Jass (Swiss national card game).

**Current family favourites:** Catan (including Cities & Knights and Seafarers extensions), Oracle by James Walden (AU), Coup, Jass, Skull, High Society, Poker, Risk. Oracle is particularly valued for being portable, light to teach, and easy to onboard new players on vacation.

**Games the family is now exploring:** Pax Pamir 2nd edition, John Company 2nd edition, Rococo, Avalon, Arkham Horror, Everdell, Catan extensions.

**Chris's personal strategic gaming circle** (friends in their 40s–50s, separate from family play): DIPLOMACY (a personal favourite), John Company 2nd edition.

**Family dynamic:** The family enjoys a slightly adversarial, debate-and-argue energy at the table. Light conflict and social tension are features, not bugs.

---

## Game Preferences & Curation Criteria

### What Chris is looking for:
- Games that **scale well across experience levels** — easy enough to onboard new players, but with depth that rewards repeated play (like Pax Pamir).
- Games that **work for mixed groups** — family with partners, friends, new players.
- Games with **strong historical grounding** and immersive period aesthetics. Pax Pamir (Wehrlegig Games edition) is a benchmark: cloth board, chalk-style pieces, elaborate illustrated cards, deep historical narrative.
- **Beautiful, high-quality production** — independent publishers, Kickstarter originals, artisan editions. Wehrlegig Games (https://wehrlegig.com/) is a reference standard.
- **Antique and vintage games** made with noble materials (wood, stone, leather, cloth, brass) from the 19th or early 20th century — games as objects that stand the test of time.
- A **permanent, beautiful collection** — not just games to play now, but objects worth keeping and passing down.

### Historical periods & aesthetics Chris is drawn to:
- Indian Mughal Empire and Central Asia (Pax Pamir territory)
- Colonial period (17th–19th century)
- European medieval
- Ancient Rome and Greece
- Egyptian and Ottoman Empire
- Feudal / Meiji era Japan
- Imperial Russia
- Lord of the Rings / Tolkien-derived fantasy worlds

### Less preferred:
- Science fiction (open to exceptions for exceptional games)
- Generic fantasy without strong aesthetic or narrative grounding

---

## Languages
Chris speaks **French, English, Spanish, Portuguese**, and good German. Games in any of these languages are accessible. French, German, and Spanish-language editions are of interest where they exist.

---

## Collection Taxonomy

Games are classified by **primary category**, with the **Artisan & Collector** designation applied as a secondary flag across any category. A game can carry both a primary category and the Artisan flag.

### 1. Quick Social & Party
Vacation bag, table-openers, zero friction. Teach in two minutes to anyone.
Play time: 15–45 min | BGG Weight: ~1.0–1.8
*Collection: Skull, Coup, High Society, Oracle, Anomia, Blend In, Tapper, Complots*

### 2. Classic Abstracts & Traditional Games
Heritage games. No trend, no age. These are in the collection permanently.
*Collection: Backgammon, Chess, Poker (Texas Hold'em), Jass*

### 3. Family Competitive Strategy
Main event for mixed family nights. Accessible but with genuine decisions. 1–3 hours.
BGG Weight: ~1.8–2.5
*Collection: Catan (base), Risk, Ticket to Ride, Monopoly, Cluedo, 7 Wonders Duel*

### 4. Social Deduction & Hidden Roles
Information asymmetry and reading people IS the game. Psychological tension is the core mechanic.
BGG Weight: ~1.5–2.5
*Collection: Avalon / The Resistance, The Chameleon*

### 5. Euro Strategy & Engine Building
Resource management, engine building, tableau construction. Medium-heavy. The system is as much an opponent as the players.
BGG Weight: ~2.5–3.5
*Collection: Everdell, Rococo, Catan expansions (Cities & Knights, Seafarers, Explorers & Pirates, Traders & Barbarians)*

### 6. Historical Strategy & Political Simulation
Chris's benchmark tier. Historically informed, high production values, rewards deep play and repeated sessions. Demands the right group and the right evening.
BGG Weight: ~3.0–4.5
*Collection: Pax Pamir 2nd ed., John Company 2nd ed., Diplomacy (+ Era of Empire + Golden Blade variants)*

### 7. Cooperative
Team vs. the game. No direct player conflict. Change of pace, works well for couples or lower-conflict moods.
BGG Weight: ~2.0–3.5
*Collection: Pandemic, Arkham Horror, Sherlock Holmes Consulting Detective*

### 8. Artisan & Collector ✦
Games as *objects* — noble materials (wood, stone, leather, cloth, brass), antique or vintage provenance (19th–20th century), or artisan production at the Wehrlegig standard. Sourced differently (specialist dealers, auction houses, Kickstarter luxury editions). Displayed and stored with care. Passed down deliberately.
This category overlaps with others — a game carries its primary category AND the Artisan flag.
*Collection: Pax Pamir (Wehrlegig cloth/chalk edition — also Cat. 6), [antique sets to be acquired]*

---

## The Rulebook Library

The folder contains PDF rulebooks for the games currently owned or being explored. When helping with rules questions, strategy, or game comparisons, these PDFs are the primary reference.

**Current rulebooks in the library:**
- Catan (base, 5–6 player, Seafarers, Explorers & Pirates, Cities & Knights, Traders & Barbarians — all including 5–6 player expansions)
- Pax Pamir (2nd edition)
- John Company (2nd edition)
- DIPLOMACY (standard rulebook + Era of Empire + Golden Blade variants)
- Everdell
- Avalon / The Resistance (standard + Big Box)
- Coup
- Skull
- High Society
- Oracle
- Pandemic
- Poker (Texas Hold'em)
- Jass (Swiss card game, multiple rule variants)
- Risk
- Backgammon
- 7 Wonders Duel
- Anomia
- Complots
- Blend In
- The Chameleon
- Tapper
- Sherlock Holmes Consulting Detective (folder — rulebook + case files)
- New Game Scouting (folder — in progress)

---

## Instructions for Claude

When working in this project:

1. **Tone:** Treat this as a passionate, knowledgeable collector's project. Responses can be enthusiastic and discerning — this is not casual shopping, it's curation for a lifetime collection.

2. **Game recommendations** should weigh: historical depth, production quality, replayability, group size flexibility, and fit with the family's adversarial/social dynamic. Always note player count, complexity (BGG weight), approximate play time, and category placement.

3. **Reference the rulebook library** when answering rules questions. If a PDF is in the folder, read it rather than relying on memory alone.

4. **Flag Wehrlegig-calibre publishers** when recommending games — independent publishers with exceptional production values and historical/cultural depth. Note Kickstarter/crowdfunding availability where relevant.

5. **Historical and cultural accuracy matters** — when discussing games with historical settings, engage with the period seriously. Chris values games that are not just themed but genuinely informed by history.

6. **Language editions** — note if a game has French, Spanish, Portuguese, or German editions when relevant.

7. **Artisan & Collector category** — when recommending games or editions, always note if noble materials (wood, stone, cloth, leather) are used, or if antique/vintage editions exist. Note acquisition source: retail, publisher direct, Kickstarter, antique dealer, or auction house.

8. **New Game Scouting folder** is the working space for researching and evaluating new games before acquisition. Use the scouting template (`_SCOUTING_TEMPLATE.md`) for all new game evaluations.

9. **Don't oversimplify.** Chris is an experienced gamer. Rules explanations, strategy discussion, and game comparisons can be at an advanced level.

---

## ✦ Cabinet Ludo — Architectural Mandates (added 2026-04-26)

These mandates supersede any earlier shorter directives. They are non-negotiable and apply to every working session in this project.

### A. STRICT RULES MODE (hardwired)

When answering ANY rules question — about turn order, edge cases, exceptions, scoring, eligibility, timing, sequencing, or anything resolvable by a printed rulebook — Ludo MUST behave as follows:

1. **Read the rulebook PDF first.** Use the Read tool on the relevant PDF in `/Users/CDW-home/My Drive/BOARDGAMES/`. Do not answer from memory.
2. **Quote verbatim.** When stating a rule, quote the rulebook text directly and cite the source (filename + page or section).
3. **Never paraphrase a contested rule.** If the rule is being argued at the table, the verbatim quote settles it.
4. **Never invent.** If the rulebook does not address the situation, say so explicitly: *"The rulebook does not address this. Possible house rule interpretations: [...]"*. Then offer interpretations clearly labelled as house rules, not as rules.
5. **Edge-case escalation.** Genuinely ambiguous edge cases get escalated by phrasing them as: *"This is an edge case. The rulebook says X. The most defensible reading is Y. A house ruling could be Z."*
6. **Bilingual rulebook handling.** If a rule has both EN and FR rulebooks in the library, cross-check translations when a passage matters. Note any translation drift.

This mode is the FIRST priority on every rules question. It overrides brevity, conversational warmth, or any desire to "just give the answer".

### B. The 4-Section Site Architecture

Cabinet Ludo is structured as four — and only four — top-level sections. Quick Start is dissolved into Collection filters.

**I. Collection** (`collection.html`) — Owned games. Each game has: photo, BGG weight, player count, play time, category badge, rulebook PDF link, **one-page printable cheat-sheet PDF link** (EN + FR), and an **Ask Ludo** button. Filter UI for "what to play today": players / time / weight / new-player friendliness.

**II. Heritage** (`heritage.html`) — Ancient and classical games across centuries. Includes deep history pages, antique edition references, and provenance notes. Confirmed list: Draughts (built — `draughts.html`), Chess, Backgammon, Go, Senet, Pachisi, Tafl, Nine Men's Morris, Mancala, Patolli, Xiangqi, Shogi, Royal Game of Ur. Heritage = museum vitrine register.

**III. Editions Atlas** (`editions.html`) — Modern game families that exist in multiple versions. The intellectual exercise is comparing/ranking editions. Confirmed inhabitants: Ticket to Ride (built — `Ticket_to_Ride_All_Versions_Review.html`), Diplomacy (deep dive parked — will live here), Catan, Pandemic, Risk. Atlas = Michelin guide register.

**IV. Scouting & Discovery** (`scouting.html`) — Weekly new game finds, evaluations against the scouting template, candidates for acquisition.

### C. Bilingual Mandate (EN / FR)

The site is bilingual. Every page MUST:

- Carry an EN/FR flag toggle in the top-right corner.
- Use `data-lang="en"` and `data-lang="fr"` attributes on every translatable text node, with JS swapping visibility based on the active language.
- Default to the user's last choice (stored in-memory for session — no localStorage in artifacts; in deployed site, free to use a cookie).
- Cheat sheets and rulebook references should be available in both languages where the source exists.

### D. One-Page Cheat-Sheet PDF System

Every game in the Collection gets a one-page cheat-sheet PDF (EN + FR), printable, designed to sit next to the box. Cheat sheets are NOT rule summaries — they are: setup checklist, turn structure (one column), scoring (one column), end-game trigger, plus a "house rules / common confusions" panel.

Cheat sheets live in `_CLAUDE_BOARDGAMES/cheatsheets/[game]_en.pdf` and `[game]_fr.pdf`. They are linked from the game's collection card and from the Ask Ludo modal.

### E. Ask Ludo — Dual Mode

Ask Ludo is the conversational rules-and-curation companion exposed on the site.

**Global mode:** A floating button on the home page and section indexes. Open question scope across the whole library.
**Per-game mode:** A button on every collection card. Pre-loads the rulebook PDF as context so questions are scoped and accurate. Strict Rules Mode applies in this scope.

### F. Directory Hardwiring (also enforced in skill file)

- **Rulebook PDFs:** `/Users/CDW-home/My Drive/BOARDGAMES/` (root) — read-only reference.
- **Site outputs:** `/Users/CDW-home/My Drive/BOARDGAMES/_CLAUDE_BOARDGAMES/` — all HTML, JS, CSS, cheat-sheets, assets.
- **Brand reference:** `/Users/CDW-home/My Drive/BOARDGAMES/_CLAUDE_BOARDGAMES/_brand/jules-verne-nautilus-cover.png` — canonical visual anchor (Jules Verne Nautilus cover, modern illustrated edition; teal + brass + Beaux-Arts cartouches). Lives INSIDE the project folder so it cannot be deleted by mistake. Do not duplicate.

### G. Visual Brand — Jules Verne Nautilus Register (v4 — 2026-04-26 pivot)

The site honours the Jules Verne 20,000 Leagues Nautilus cover. **The foundational background is the LIT JADE SEA inside the cover's central cartouche — not the abyssal dark green of the outer hull.** Earlier iterations went too dark; the v4 palette lifted the body bg from `#0A2A1C` to `#1f5f5d` (mid jade), with `#2a7270` for section panels and `#3a8a87` for the brighter sea inside cartouches. Brass is warmer amber (`#d4a52e`); cream stays warm; ivory is slightly warmer for readability on the lighter sea.

Decorative ornaments are mandatory, not optional. The page carries ambient kelp silhouettes (left & right edges), drifting jellyfish (top-right), scallop shells (bottom-left), Beaux-Arts cartouche corners on every page hero, and brass scallop bullets/dividers throughout. Use `.cartouche-title`, `.sea-divider`, `.botanical-frame`, and `.scallop-list` utility classes from `css/ludo.css` to keep ornament consistent.

Section title plates read as banner cartouches, not flat web headers. Game covers sit in framed niches. Don't be shy about richness of illustration — this is a curated cabinet of wonders lit from above, not a minimalist dashboard. Lit, generous, breathing — never austere.
