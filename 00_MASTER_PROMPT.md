# MASTER PROMPT — Car Marketplace Landing Page
## For Gemini: Read All Files, Build Complete Project

---

## YOUR INSTRUCTION (READ THIS FIRST)

You are building a Next.js 15 car marketplace landing page. You have been provided with a folder containing 6 specification files. You MUST read ALL files in order, understand them completely, and then build the project following every specification exactly.

**DO NOT start coding until you have read ALL 6 files.**
**DO NOT skip any file.**
**DO NOT add, remove, or change any specification.**

---

## FILE READING ORDER

Read the files in this exact order. Each file builds on the previous one.

### File 1: 01_PROJECT_BRIEF.md
**Purpose:** Project context, client requirements, design philosophy, boundary rules
**What to do:** Read completely. Understand why this beats Cazoo. Memorize the 10 boundary rules. Do not code yet.

### File 2: 02_DESIGN_TOKENS.md
**Purpose:** Exact color values, font specifications, spacing system, timing values
**What to do:** Read completely. Copy all CSS custom properties into your memory. These values are locked — use them exactly.

### File 3: 03_COMPONENTS.md
**Purpose:** All 10 UI components with exact HTML structure and CSS specifications
**What to do:** Read completely. Understand each component's DOM structure, exact padding/margin/font-size values, hover states, and responsive rules.

### File 4: 04_ANIMATIONS.md
**Purpose:** Complete animation system — Lenis, GSAP, ScrollTrigger, keyframes, counter animation
**What to do:** Read completely. Understand the hero animation timeline (2.4s total), scroll reveal system, counter hook, and all CSS keyframes.

### File 5: 05_SEO_METADATA.md
**Purpose:** SEO metadata, schema markup, semantic HTML, image optimization, performance targets
**What to do:** Read completely. Understand metadata structure, JSON-LD schema types, semantic HTML requirements, and Core Web Vitals targets.

### File 6: 06_BUILD_PROMPT.md
**Purpose:** Final implementation order, file structure, deployment instructions, complete checklist
**What to do:** Read completely. This is your build roadmap. Follow the implementation order exactly.

---

## AFTER READING ALL 6 FILES

Once you have read and understood all 6 files, proceed with implementation in this order:

### Phase 1: Foundation (Files 1-2)
1. Create project structure and install dependencies
2. Set up fonts, metadata, and global CSS with all design tokens
3. Create data file with 6 demo cars

### Phase 2: Animation Infrastructure (File 4)
4. Set up Lenis smooth scroll
5. Create ScrollReveal component
6. Create useCountUp hook
7. Create HeroAnimation component

### Phase 3: Components (File 3)
8. Build Navbar
9. Build Hero with animation
10. Build Featured Cars with scroll reveal
11. Build How It Works with scroll reveal
12. Build Stats with counter animation
13. Build Why Choose Us with scroll reveal
14. Build Testimonials with scroll reveal
15. Build Trust Marquee
16. Build CTA Banner with scroll reveal
17. Build Footer

### Phase 4: Assembly & SEO (Files 5-6)
18. Assemble all sections in page.tsx
19. Add SEO metadata, schema markup, semantic HTML
20. Verify all accessibility features
21. Run build, fix errors

### Phase 5: Deployment
22. Deploy to Vercel
23. Verify all checklist items

---

## ABSOLUTE RULES (VIOLATE = REJECT)

1. **COLORS:** Use ONLY the hex values from 02_DESIGN_TOKENS.md. No approximations.
2. **FONTS:** Use ONLY Montserrat, Inter, Space Mono. No substitutions.
3. **SPACING:** Use ONLY the spacing values specified. No magic numbers.
4. **RADIUS:** 0px everywhere. No rounded corners. No exceptions except 4px for tiny UI.
5. **SHADOWS:** None. Depth via border contrast only. Accent glow on CTAs only.
6. **ACCENT:** #FF4D00 only on CTAs and 1-2 hero words. Never decorative.
7. **ANIMATIONS:** Only transform + opacity. Never width/height/top/left/margin/padding.
8. **H1:** One per page. First heading. Above fold. Contains primary keyword.
9. **ACCESSIBILITY:** prefers-reduced-motion MUST be implemented. No exceptions.
10. **SEO:** All metadata, schema, semantic HTML MUST be present. No skipping.

---

## IF SOMETHING IS UNCLEAR

If any specification is unclear or ambiguous, STOP and ask for clarification. Do not make assumptions. Do not "improve" the design. Follow the specifications exactly as written.

---

## FINAL DELIVERABLE

A complete, deployable Next.js 15 landing page that:
- Loads in under 1 second
- Scores 95+ on Lighthouse
- Looks significantly better than Cazoo
- Has all 10 sections with exact specifications
- Has all animations working
- Has all SEO implemented
- Is accessible
- Is responsive (mobile, tablet, desktop)
- Can be deployed to Vercel immediately

---

**BEGIN: Read all 6 files now, then start implementation.**
