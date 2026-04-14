# A Day at Cream City

A browser-based interactive story game where you navigate your first weeks at a startup. Every choice you make shapes how your day unfolds — and reveals what kind of thinker and collaborator you are.

---

## What It Is

You play as Alex, a new hire three weeks into a job at Cream City. Throughout the day you'll run into your teammates — Priya, Sam, Kai, and Jordan — and face real workplace situations. How you respond to each one builds your personality profile by the end of the day.

Every playthrough is different. The game picks 6 scenes at random from a pool of 12, so you'll rarely get the exact same day twice.

---

## How It Works

The game is split into three chapters:

| Chapter | Time | Theme |
|---|---|---|
| 1 | 9:04 AM | Monday Morning |
| 2 | 2:30 PM | Afternoon Turbulence |
| 3 | 4:45 PM | End of Day Fire Drill |

Each chapter plays 2 randomly selected scenes from a pool of 4. In each scene, a teammate approaches you with a situation and you pick one of four responses. There are no wrong answers — but your choices do mean something.

---

## The Scoring System

Every choice quietly tracks two things:

- **EQ** — your emotional and relational intelligence (reading people, staying coachable, building trust)
- **IQ** — your analytical and structural intelligence (asking the right questions, thinking in systems, making clear decisions)

Each choice awards 0, 1, or 2 points in either or both categories. By the end of the game your totals are compared to five personality archetypes to find your closest match.

### The Five Archetypes

| Archetype | What It Means |
|---|---|
| **The Empathetic Analyst** | High EQ and IQ — you balance people-reading with structured thinking |
| **The Connector** | High EQ — you build trust and notice relationship dynamics naturally |
| **The Adaptive Operator** | Balanced EQ and IQ — you adjust well to changing situations |
| **The Systematic Solver** | High IQ — you think in systems and thrive on concrete problems |
| **The Steady Independent** | Neither dominant — you work well autonomously and are reliable under pressure |

---

## The Characters

| Character | Role |
|---|---|
| **Alex** | You |
| **Priya** | Senior Engineer |
| **Sam** | Your Manager |
| **Kai** | Junior Designer |
| **Jordan** | Product Lead |
| **Mia & Theo** | Background colleagues |

All characters are drawn entirely in code using SVG — no image files needed.

---

## Your Results Card

At the end of the day you get a snapshot that includes:

- Your **archetype** and what it means
- Your **top decision patterns** (e.g. "Asked for clarity", "Stayed coachable")
- **Badges** for completing each chapter
- The types of **work environments** where your style tends to thrive
- The situations that might **challenge** your style
- **Three growth edges** — specific habits to build next

The card is designed to be screenshotted and shared.

---

## File Structure

```
index.html      — The entry point. Sets up the page and loads everything else.
App.js          — The entire game brain. All logic, characters, story, and UI live here.
styles.css      — All visual styling. Colors, layouts, animations, and responsive design.
```

### How they connect

The HTML file is just a shell — it loads the CSS for looks and the JS for everything else. When the page opens, `App.js` runs a `boot()` function that builds the entire game interface from scratch and injects it into the empty `<div id="root">` in the HTML.

---

## Technical Overview

### App.js

- **CHARS** — Color and appearance data for every character
- **POSITIONS** — X/Y coordinates for where each character stands on screen (as percentages)
- **CHAPTER_POOLS** — The full game script: all 3 chapters, 4 scenes each, with choices and reactions
- **ARCHETYPES** — The 5 personality profiles with match rules, culture fits, and growth tips
- **G** — The live game state object tracking scores, chapter progress, signals, and badges
- **svgChar()** — Draws each character as an SVG using pure math shapes (no images)
- **buildIsoSVG()** — Draws the entire isometric office environment as one SVG
- **boot()** — Runs on load, builds all three screens and starts the intro

### styles.css

- **CSS variables** at the top define the entire color palette and shadows used throughout
- **Screen switching** — only the `.screen.active` class is visible at any time; others are hidden
- **Animations** — characters bob while idle, walk when moving, choice buttons fade in staggered, bubbles pop in with a spring effect
- **Responsive design** — at screens under 760px wide, the layout adapts for mobile (choices stack vertically, overlays reposition)

---

## Running the Game

No build tools, no install, no dependencies. Just open `index.html` in any modern browser and it runs.

```
open index.html
```

Or drag the file into a browser window.

---

## Customisation Notes

- **Add scenes** — drop a new object into any `scenes` array inside `CHAPTER_POOLS`. Follow the existing structure.
- **Add characters** — add an entry to `CHARS` and a position to `POSITIONS`.
- **Change archetype rules** — edit the `match` function in any `ARCHETYPES` entry. It receives `(eq, iq)` and returns true/false.
- **Adjust scoring** — change the `eq` and `iq` values on any choice inside a scene.
- **Change colors** — edit the CSS variables in `:root` inside `styles.css` to retheme the entire game at once.
