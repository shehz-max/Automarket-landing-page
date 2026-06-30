# 01 — PROJECT BRIEF & CONTEXT
## Car Marketplace Landing Page — Design System v1.0

---

## PROJECT OVERVIEW

**Client Request:** Build a car marketplace website similar to Cazoo (cazoo.co.uk) but significantly better in design, performance, and user experience.

**Client's Initial Tech Preference:** WordPress
**Our Recommended Tech Stack:** Next.js 15 + React 19 + TypeScript + Tailwind CSS
**Reason:** WordPress cannot handle the scale, real-time features, and performance requirements of a modern car marketplace. Next.js provides superior SEO, performance, scalability, and developer experience.

**Target Market:** United Kingdom (initially)
**Business Model:** Multi-dealer car marketplace (buyers browse cars from verified dealers)

---

## REFERENCE SITE ANALYSIS: CAZOO

**What Cazoo Does:**
- Aggregates used cars from 5,000+ dealers nationwide
- Advanced search: Make / Model / Postcode / Max Price
- Finance broking (credit referrals)
- Trustpilot integration
- Mobile-first responsive design

**Cazoo's Weaknesses We Will Beat:**
1. Light, generic visual design — lacks premium feel
2. Minimal animations — feels static and dated
3. Basic card layouts — no hover interactions
4. Slow performance (WordPress backend)
5. Weak conversion optimization
6. No cinematic storytelling
7. Boring typography

**Our Competitive Advantages:**
- Dark luxury aesthetic (automotive premium feel)
- Full animation system (scroll reveals, micro-interactions)
- 3D hover effects on car cards
- Cinematic hero with word-by-word text reveal
- Superior performance (< 1s load time)
- Strategic CTA placement with trust signals
- Modern typography (Montserrat + Inter + Space Mono)

---

## DESIGN PHILOSOPHY

**Core Principle:** "Emotional immersion before information delivery"
- Users should FEEL the premium automotive experience before they see car specs
- Every interaction should feel deliberate, weighty, and satisfying
- Dark backgrounds make car imagery pop dramatically
- Animation pacing should feel cinematic, not rushed

**Personality:** Dark Futurist (adapted for automotive)
- Pure black backgrounds
- Zero border-radius (sharp, aggressive, automotive)
- Single accent color (#FF4D00 automotive orange)
- Border contrast creates depth (no shadows)
- Mechanical, precise motion

---

## BOUNDARY CONDITIONS FOR GEMINI

**CRITICAL RULES — DO NOT VIOLATE:**

1. **NO LIGHT BACKGROUNDS** — Background is ALWAYS #000000 or #0A0A0A. Never use white, off-white, or light gray as primary background.

2. **NO BORDER-RADIUS** — Zero rounded corners everywhere. Sharp edges only. This is non-negotiable for the Dark Futurist personality. (Tiny 4px exception for small UI elements only if absolutely necessary.)

3. **NO SHADOWS** — Depth is created via border contrast and background lightness variation only. No box-shadows on cards.

4. **ACCENT COLOR RESTRICTION** — #FF4D00 (automotive orange) appears ONLY on:
   - Primary CTA buttons
   - Active/hover states on key interactive elements
   - Maximum 1-2 words in hero headline (gradient text)
   - Never use orange for decorative elements, borders, or backgrounds

5. **TYPOGRAPHY LOCK** — Use ONLY these fonts:
   - Montserrat (headings, display)
   - Inter (body, UI)
   - Space Mono (prices, specs, technical data)
   Do NOT substitute with other fonts.

6. **ANIMATION RULES** — Only animate transform and opacity. Never animate width, height, top, left, margin, or padding.

7. **NO GENERIC CTAs** — Button text must be action-specific: "Search Cars", "List Your Car", "Get Finance Quote". Never "Click Here", "Submit", or "Learn More".

8. **ONE H1 PER PAGE** — The hero headline is the only H1. No other H1 elements anywhere.

9. **PREFERS-REDUCED-MOTION** — Must implement accessibility for users who disable animations.

10. **PERFORMANCE FIRST** — Hero image must load with priority. LCP target < 2.5s. No animation delays on above-fold content.

---

## FILES IN THIS DESIGN SYSTEM

This project is split into 6 files to maintain context with Gemini:

1. **01_PROJECT_BRIEF.md** — This file (context, rules, boundaries)
2. **02_DESIGN_TOKENS.md** — Colors, typography, spacing, z-index
3. **03_COMPONENTS.md** — All UI components with exact CSS specifications
4. **04_ANIMATIONS.md** — Animation system, GSAP components, keyframes
5. **05_SEO_METADATA.md** — SEO, metadata, schema, semantic HTML
6. **06_BUILD_PROMPT.md** — Final binding prompt for Gemini with exact instructions

**INSTRUCTION FOR GEMINI:** Read each file in order. Do not skip files. Do not proceed to the next file until you have fully implemented the current file's specifications. Do not add, remove, or change any specification. Implement exactly as written.

---

*File 1 of 6 — Read next: 02_DESIGN_TOKENS.md*
