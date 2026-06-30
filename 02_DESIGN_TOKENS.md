# 02 — DESIGN TOKENS
## Car Marketplace Landing Page — Exact Values

---

## CRITICAL INSTRUCTION FOR GEMINI

**DO NOT:**
- Change any hex color value
- Change any font family
- Change any spacing value
- Change any timing value
- Add new tokens not listed here
- Remove any token listed here
- Approximate values (use EXACT values as written)

**DO:**
- Copy all CSS custom properties exactly as written
- Use these tokens consistently across ALL components
- Reference these variables instead of hardcoding values

---

## 1. COLOR TOKENS

```css
:root {
  /* BACKGROUND — Dark Futurist, pure black system */
  --color-bg-primary:     #000000;           /* Pure black — page background */
  --color-bg-elevated:    #0A0A0A;           /* Slightly lifted — card backgrounds */
  --color-bg-card:        #111111;           /* Card surfaces, elevated sections */
  --color-bg-glass:       rgba(255, 255, 255, 0.05);  /* Glassmorphism base */

  /* TEXT — Monochromatic hierarchy */
  --color-text-primary:   #FFFFFF;           /* Headlines, primary text */
  --color-text-body:      #A3A3A3;           /* Body copy, descriptions */
  --color-text-muted:     #737373;           /* Captions, labels, meta info */

  /* BORDERS — Contrast creates depth */
  --color-border-rest:    #262626;           /* Default card/section borders */
  --color-border-hover:   #FFFFFF;           /* Hover/active border */
  --color-border-glass:   rgba(255, 255, 255, 0.08);  /* Glass card borders */

  /* ACCENT — Automotive orange, RESTRICTED USE */
  --color-accent:         #FF4D00;           /* Primary CTA buttons only */
  --color-accent-hover:   #FF6B2C;           /* CTA hover state */
  --color-accent-glow:    rgba(255, 77, 0, 0.3);    /* Glow effects on hover */

  /* UTILITY — Status and feedback */
  --color-success:        #22C55E;           /* Checkmarks, confirmations */
  --color-star:           #FACC15;           /* Star ratings */

  /* GRADIENTS — Used on maximum 1-2 words per headline */
  --gradient-accent:      linear-gradient(135deg, #FF4D00 0%, #FF8C00 100%);
  --gradient-text-hero: linear-gradient(135deg, #FFFFFF 0%, #A3A3A3 100%);
}
```

**Color Usage Rules:**
- `--color-bg-primary` (#000000) is the ONLY page background. No exceptions.
- `--color-bg-elevated` (#0A0A0A) for alternate sections (creates subtle depth without gradients).
- `--color-accent` (#FF4D00) appears ONLY on: primary CTAs, active nav indicators, 1-2 words in hero headline (gradient text). Never for decorative borders, backgrounds, or icons.
- `--color-text-muted` (#737373) for ALL meta information: dates, locations, reading time, dealer names, spec labels.
- `--color-border-rest` (#262626) for ALL default card borders, section dividers, input borders.
- `--color-border-hover` (#FFFFFF) for hover states on cards and interactive elements.

---

## 2. TYPOGRAPHY TOKENS

```css
:root {
  /* FONT FAMILIES — DO NOT SUBSTITUTE */
  --font-display:  'Montserrat', sans-serif;     /* Headlines, display text */
  --font-body:     'Inter', sans-serif;           /* Body text, UI elements */
  --font-mono:     'Space Mono', monospace;       /* Prices, specs, technical data */

  /* TYPE SCALE — Fluid scaling with clamp() */
  --font-size-display:  clamp(48px, 8vw, 96px);   /* Hero H1 */
  --font-size-h1:      clamp(36px, 5vw, 64px);    /* Section H1 */
  --font-size-h2:      clamp(28px, 3.5vw, 44px);  /* Section H2 */
  --font-size-h3:      clamp(20px, 2vw, 28px);    /* Card titles */
  --font-size-body:    16px;                       /* Body text */
  --font-size-small:   14px;                       /* Secondary text */
  --font-size-label:   12px;                       /* Labels, uppercase */
  --font-size-mono:    14px;                       /* Mono text (specs, prices) */

  /* FONT WEIGHTS */
  --font-weight-light:   300;
  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-semibold: 600;
  --font-weight-bold:    700;
  --font-weight-black:   800;

  /* LETTER SPACING */
  --letter-spacing-tight:  -0.03em;   /* Display headlines */
  --letter-spacing-normal: -0.02em;   /* H1, H2 */
  --letter-spacing-wide:   0.05em;    /* Labels, uppercase */
  --letter-spacing-wider:  0.1em;     /* Small labels */

  /* LINE HEIGHTS */
  --line-height-display: 0.9;   /* Hero headlines — compact, powerful */
  --line-height-tight:   1.1;   /* Section headings */
  --line-height-normal:  1.6;   /* Body text */
  --line-height-relaxed: 1.7;   /* Long-form reading */
}
```

**Typography Rules:**
- `--font-display` (Montserrat) is used for ALL headings H1-H3 and display text. Never use Inter for headings.
- `--font-body` (Inter) is used for body text, paragraphs, nav links, button text, labels. Never use Montserrat for body.
- `--font-mono` (Space Mono) is used for ALL prices, mileage, technical specs, VIN numbers, stats. Creates precision and trust.
- `--letter-spacing-tight` (-0.03em) on display text makes large headlines feel modern and intentional.
- `--line-height-display` (0.9) on hero text creates compact visual mass. Do NOT increase this.
- Hero headline: 1-2 words get `--gradient-accent` treatment via `background-clip: text`. Maximum 2 words.

**Next.js Font Imports (exact):**
```typescript
import { Montserrat, Inter, Space_Mono } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});
```

---

## 3. SPACING TOKENS

```css
:root {
  /* BASE UNIT: 4px */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;
  --space-24:  96px;
  --space-32: 128px;
  --space-40: 160px;

  /* SECTION SPACING */
  --section-padding-y: 120px;     /* Vertical padding for all sections */
  --section-padding-x: 24px;    /* Horizontal padding (mobile-safe) */

  /* CONTAINER */
  --container-max: 1280px;        /* Maximum content width */
  --container-padding: 24px;      /* Side padding */

  /* GRID */
  --grid-gap: 24px;               /* Standard grid gap */
  --grid-gap-sm: 16px;            /* Tight grid gap */

  /* COMPONENT SPACING */
  --card-padding: 24px;           /* Internal card padding */
  --card-padding-lg: 32px;        /* Large card padding */
  --button-padding-x: 24px;       /* Button horizontal padding */
  --button-padding-y: 12px;       /* Button vertical padding */
  --input-padding: 16px 20px;     /* Input field padding */
  --nav-height: 72px;             /* Sticky navbar height */
  --nav-padding-x: 48px;          /* Navbar horizontal padding */
}
```

**Spacing Rules:**
- Section vertical padding is ALWAYS `--section-padding-y` (120px). No exceptions.
- Container max-width is ALWAYS `--container-max` (1280px). Center with `margin: 0 auto`.
- Grid gap is ALWAYS `--grid-gap` (24px) for standard grids.
- Card internal padding is ALWAYS `--card-padding` (24px) or `--card-padding-lg` (32px).
- Navbar height is EXACTLY `--nav-height` (72px). No variation.

---

## 4. BORDER RADIUS TOKENS

```css
:root {
  /* DARK FUTURIST: ZERO RADIUS SYSTEM */
  --radius-none: 0px;     /* Default — sharp corners everywhere */
  --radius-ui: 4px;       /* TINY exception for small UI elements only */
  --radius-pill: 999px;   /* NEVER USE in Dark Futurist — forbidden */
}
```

**Border Radius Rules:**
- ALL cards, sections, images, buttons use `--radius-none` (0px). Sharp corners are a core Dark Futurist identity marker.
- `--radius-ui` (4px) is allowed ONLY for: small input fields, tiny badges, or micro-elements where sharp corners cause usability issues.
- NEVER use pill-shaped buttons (999px radius). This is a Dark Futurist anti-pattern.
- NEVER use rounded cards (12px, 16px, 24px). This destroys the aesthetic.

---

## 5. SHADOW TOKENS

```css
:root {
  /* DARK FUTURIST: NO SHADOWS */
  --shadow-none: none;

  /* EXCEPTION: Subtle accent glow on hover (not a shadow) */
  --glow-accent: 0 0 20px rgba(255, 77, 0, 0.3);
  --glow-accent-lg: 0 0 30px rgba(255, 77, 0, 0.4);

  /* EXCEPTION: Glassmorphism subtle shadow */
  --shadow-glass: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

**Shadow Rules:**
- NO box-shadows on cards. Depth is created via border contrast (`#262626` vs `#111111` vs `#0A0A0A`).
- `--glow-accent` is allowed ONLY on primary CTA buttons during hover state.
- `--shadow-glass` is allowed ONLY on glassmorphism search bar overlay (if used).
- Never use elevation shadows (material design style). This is forbidden in Dark Futurist.

---

## 6. Z-INDEX SCALE

```css
:root {
  --z-below:     -1;    /* Background elements, decorative */
  --z-base:       0;    /* Default stacking */
  --z-raised:    10;    /* Cards, floating elements */
  --z-dropdown:  100;   /* Dropdowns, tooltips */
  --z-sticky:    200;   /* Sticky navbar */
  --z-overlay:   500;   /* Backdrop overlays, mobile menu */
  --z-modal:    1000;   /* Modals, dialogs */
  --z-cursor:   9999;   /* Custom cursor (if implemented) */
}
```

---

## 7. TRANSITION & TIMING TOKENS

```css
:root {
  /* DURATIONS */
  --duration-fast:   0.15s;   /* Micro-interactions: border color, opacity */
  --duration-normal: 0.3s;   /* Standard hover: transforms, colors */
  --duration-slow:   0.5s;   /* Complex hovers: image scale, lifts */
  --duration-reveal: 0.8s;   /* Scroll reveal animations */

  /* EASINGS */
  --ease-out:       cubic-bezier(0.16, 1, 0.3, 1);      /* Primary — snappy, modern */
  --ease-out-smooth: cubic-bezier(0.4, 0, 0.2, 1);      /* Smooth deceleration */
  --ease-out-expo:  cubic-bezier(0.19, 1, 0.22, 1);     /* Dramatic, luxury */
  --ease-spring:    cubic-bezier(0.34, 1.56, 0.64, 1); /* Bouncy, energetic */

  /* STAGGER */
  --stagger-fast:   0.05s;   /* Quick cascades: nav links, badges */
  --stagger-normal: 0.1s;    /* Standard: grid items, cards */
  --stagger-slow:   0.15s;  /* Dramatic: section reveals */
  --stagger-text:   0.08s;  /* Per-word text reveals */
}
```

**Timing Rules:**
- Card hover transitions: `--duration-normal` (0.3s) with `--ease-out`.
- Scroll reveal animations: `--duration-reveal` (0.8s) with `--ease-out-expo`.
- Text word stagger: `--stagger-text` (0.08s) between words.
- Grid item stagger: `--stagger-normal` (0.1s) between items.
- NEVER use linear easing for reveal animations. Always use `--ease-out` or `--ease-out-expo`.

---

## 8. RESPONSIVE BREAKPOINTS

```css
:root {
  --bp-sm:   640px;   /* Small tablets */
  --bp-md:   768px;   /* Tablets */
  --bp-lg:  1024px;   /* Small desktops */
  --bp-xl:  1280px;   /* Standard desktops */
  --bp-2xl: 1536px;   /* Large screens */
}
```

**Responsive Rules:**
- Mobile-first approach: base styles for mobile, then breakpoints up.
- Touch targets: minimum 44px × 44px for ALL interactive elements.
- Grid columns: 1 col (mobile) → 2 col (tablet) → 3 col (desktop).
- Navbar: hamburger menu below `--bp-md` (768px).
- Section padding: reduce to 80px vertical on mobile.

---

## TOKEN USAGE CHECKLIST FOR GEMINI

Before implementing any component, verify:

- [ ] All colors use CSS custom properties (var(--color-*)) not hardcoded hex
- [ ] All fonts use CSS custom properties (var(--font-*)) not hardcoded names
- [ ] All spacing uses CSS custom properties (var(--space-*)) not magic numbers
- [ ] Border radius is 0px (var(--radius-none)) except tiny UI elements
- [ ] No box-shadows except accent glow on CTAs
- [ ] All transitions use CSS custom properties (var(--duration-*), var(--ease-*))
- [ ] Z-index values use the scale (var(--z-*))
- [ ] Responsive breakpoints use the scale (var(--bp-*))

---

*File 2 of 6 — Read next: 03_COMPONENTS.md*
