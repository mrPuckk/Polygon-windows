# Polygon Windows — Front-End Specification (Text-Only)

Concise specification for rebuilding the Polygon Windows website from scratch. Brand tone: premium, minimal, engineering-first; product quality over marketing.

---

## 1. Overall design style and visual identity

- **Aesthetic:** Calm, Scandinavian–Japanese influenced. Large white space, soft neutrals, refined serif headlines. Scientific precision, health-aware engineering, quiet premium presence.
- **Color system (light theme):**
  - Background: warm white (oklch 0.98 0.001 0).
  - Foreground: charcoal (oklch 0.11 0.01 65).
  - Secondary: soft beige (oklch 0.88 0.02 70).
  - Muted: warm grey (oklch 0.8 0.015 70).
  - Accent / primary: muted deep green (oklch 0.3 0.08 140).
  - Accent on text/buttons: warm white.
  - Border: same as secondary.
  - All semantic tokens (card, popover, input, ring, destructive, etc.) map from these; exact values available on request.
- **Typography:**
  - Body: Inter, sans-serif; line-height 1.8; letter-spacing 0.3px.
  - Headings: Playfair Display, serif; font-weight 600; letter-spacing -0.02em.
  - H1: 3.5rem, line-height 1.1.
  - H2: 2.5rem, line-height 1.2.
  - H3: 1.875rem, line-height 1.3.
- **Radii:** Base 0.5rem; sm/md/lg/xl derived. UI uses “subtle” (rounded-sm) and “pill” (rounded-full) for cards and badges.
- **Shadows:** Light only — card: 12px/24px and 4px/8px; overlay: 20px/40px and 8px/16px (opacity 0.03–0.08).
- **Layout:** Single full-width page; content in a centered container with responsive horizontal padding (16px mobile, 24px tablet, 32px desktop) and max-width 1280px at 1024px+.
- **Fonts:** Playfair Display (400, 500, 600, 700), Inter (400, 500, 600, 700); loaded via Google Fonts.
- **Viewport:** width=device-width, initial-scale=1.0, maximum-scale=1.
- **Dark theme:** Defined in CSS (`.dark`) with different palette; default is light. Theme not switchable in current UI.

---

## 2. Header and footer structure

### Header (global navigation)

- **Placement:** Fixed top, full width, z-index above content; border-bottom 1px; background background/95 with backdrop blur.
- **Height:** 64px.
- **Layout:** Single row: container (same padding as page), flex, space-between, items centered.
- **Left:** Brand text “POLYGON WINDOWS” — text-sm, font-medium, tracking-widest, foreground color.
- **Center (hidden below md):** Nav links in a row, gap 48px, text-xs, tracking-wide, muted-foreground; hover to foreground; transition colors. Links: SYSTEMS, PERFORMANCE, ABOUT (href #).
- **Right:** Button “CONTACT” — text-xs, font-medium, tracking-widest; no explicit href (button).
- **Breakpoint:** Center links hidden below md (768px); no mobile menu in spec.

### Footer

- **Background:** secondary/30; top border 1px; vertical padding 48px (py-12).
- **Layout:** Container, then two blocks.
- **Block 1 — Four columns:** Grid 1 col mobile, 4 cols from md; gap 32px; margin-bottom 32px.
  - Column 1: Title “POLYGON” (text-xs, font-medium, tracking-widest, foreground, mb-4). Body paragraph (text-xs, muted-foreground, leading-relaxed): “Precision-engineered aluminium window and door systems designed for health, silence, and thermal balance.”
  - Column 2: Title “SYSTEMS”. List of links (space-y-2, text-xs, muted-foreground): Sliding Doors, Fixed Windows, Hinged Doors. Links hover to foreground.
  - Column 3: Title “COMPANY”. Links: About, Engineering, Contact (same style).
  - Column 4: Title “LEGAL”. Links: Privacy, Terms, Certifications (same style).
- **Block 2 — Bottom bar:** Top border; padding-top 32px; flex column on mobile, row from md; justify-between; items centered; text-xs, muted-foreground.
  - Left: “© 2026 Polygon Windows. All rights reserved.”
  - Right: “Engineering Calm. Protecting Wellbeing.”

---

## 3. Page structure and section order

### Routes

- `/` — Home (single long page).
- `/sections` — Sections gallery (same sections with dividers; optional for rebuild).
- `/404` — Not found.
- Any other path → 404.

### Home page — section order (top to bottom)

1. **Navigation** (fixed; not part of scroll flow).
2. **Hero**
3. **Product grid**
4. **Pain points** (“What Most Windows Don’t Tell You”)
5. **Profile systems** (“Engineered with Proven Profile Systems”)
6. **Feature grid** (“Why Homeowners Choose Polygon”)
7. **Healing living** (split image + copy)
8. **Process** (“Our Process”)
9. **Closing manifesto** (“For Those Who Value What Lasts”)
10. **Footer**

Page wrapper: single div, min-h-screen, background, text-foreground. No sidebar; no other global chrome.

### Home — section layout summary

| Section           | Vertical padding      | Background    | Main layout / grid |
|------------------|------------------------|---------------|---------------------|
| Hero             | pt-20                  | —             | 1 col → 2 col lg, gap 0, min-h-screen |
| Product grid     | py-12 lg:py-20        | background    | container; grid 1 → 2 md → 5 lg; gap 6; mb-12 lg:mb-20 |
| Pain points      | py-16 lg:py-24        | secondary/30  | container; grid 1 → 3 md; gap 8 lg:12 |
| Profile systems  | py-16 lg:py-24        | background    | container; grid 1 → 2 md; gap 8 lg:12 |
| Feature grid     | py-16 lg:py-24        | secondary/20  | container; grid 1 → 3 md; gap 6 lg:8 |
| Healing living   | py-16 lg:py-24        | background    | 1 col → 2 col lg, gap 0 |
| Process          | py-16 lg:py-24        | secondary/20  | container; grid 1 → 4 md; gap 8 |
| Closing manifesto| py-20 lg:py-32        | background    | container, text-center, max-w-3xl mx-auto |

### 404 page

- Full viewport centering (flex, min-h-screen, items and justify center).
- Gradient background (e.g. slate-50 to slate-100).
- Single card: max-w-lg, white/80, backdrop blur, shadow, no border.
- Content: icon (AlertCircle, red), “404”, “Page Not Found”, short copy, “Go Home” button (blue). Styling diverges from main design system (slate/blue); can be recreated as-is or aligned to brand tokens.

---

## 4. Core UI components

### Container

- Class: container + px-6 lg:px-12 (or equivalent). Width 100%, margin auto, padding as in §1; max-width 1280px from 1024px up.

### Buttons

- **Primary (accent):** Background accent, text accent-foreground, hover accent/90. Padding px-8 py-3; text-sm, font-medium, tracking-wide. Used for main CTAs (e.g. “BOOK A CONSULTATION”, “Explore Systems”).
- **Secondary (outline):** Border border, text foreground, transparent background, hover secondary/50. Same padding and typography. Used for “Request Specification Pack”.
- Base: inline-flex, items-center, gap-2, rounded-md, transition; focus-visible ring. No decorative shadows on primary in main sections.

### Cards and panels

- **Product card:** No visible card container; group wrapper. Image block: aspect-square, bg muted/20, rounded-sm, border border/50, hover border; overflow hidden. Image: object-cover, hover scale-105, transition 700ms. Below: title (text-sm, serif, semibold, mb-2), description (text-xs, muted-foreground).
- **Pain-point block:** Vertical stack (space-y-6). Image: aspect-square, bg muted/40, rounded-sm, overflow hidden; image object-cover. Text block: title (text-lg, serif, semibold, mb-3), body (text-sm, muted-foreground, mb-4, leading-relaxed), label “Polygon Standard:” (text-xs, font-medium, tracking-wide), list (space-y-2, text-xs, muted-foreground) with CheckCircle2 icon (size 4, accent, mr-2, flex-shrink-0) per item.
- **Profile system block:** Bottom border; pb-8. Placeholder area: h-40, bg muted/20, rounded-sm, flex center; placeholder text (e.g. “Maxpro JP Profile”) text-xs muted-foreground. Then title (text-lg, serif, semibold, mb-2), description (text-sm, muted-foreground).
- **Feature card:** Background background, p-6, rounded-sm, border border/50, hover border, transition. Row: left — circle 32px, bg accent/10, rounded-full, flex center; CheckCircle2 16px, accent. Right — single line (text-sm, font-medium). No image.

### Lists

- **Bullet list (pain points):** Unstyled list; items flex items-start; icon + span; space-y-2; text-xs, muted-foreground.
- **Footer link lists:** Unstyled; space-y-2; text-xs; links hover to foreground.

### Hero

- **Left column:** Flex center vertically; padding px-6 lg:px-12, py-12 lg:py-0; bg background. Inner max-w-lg. Eyebrow: text-xs, tracking-widest, muted-foreground, mb-6. Title: text-5xl lg:text-6xl, serif, bold, leading-tight, mb-6. Body: text-sm, leading-relaxed, muted-foreground, mb-8. One primary button.
- **Right column:** Relative, bg muted/30, flex center, overflow hidden. Hero image: w-full h-full object-cover. Overlay badge: absolute top-8 right-8; circle 128px; border-2 accent/30; flex center; “VIEW” (text-xs, accent, font-medium), “360°” (text-2xl, serif, bold, accent).

### Healing living (split)

- **Left:** Full-height (min-h-96 lg:min-h-screen), bg-cover bg-center; background-image from content (one lifestyle image).
- **Right:** Flex center; padding px-6 lg:px-12, py-12 lg:py-0; bg secondary/10. Inner max-w-lg. Section title (same as others), body (text-base, muted-foreground, mb-8), one primary button with ArrowRight icon (ml-2, 16px).

### Process (four steps)

- Section title; then grid 1 → 4 cols. Each cell: text-center. Number in circle: 48px circle, bg accent/10, rounded-full, flex center; number text-sm serif bold accent (1–4). Step name (text-lg, serif, semibold, mb-2), description (text-sm, muted-foreground).

### Closing manifesto

- Centered; max-w-3xl. Large title (text-4xl lg:text-5xl, serif, bold, leading-tight, mb-8). Body (text-lg, muted-foreground, mb-12, leading-relaxed). Two buttons in a row (flex-col sm:flex-row, gap-4, justify-center): primary, then outline.

### Icons

- Lucide React: CheckCircle2 (pain points, feature grid), ArrowRight (healing CTA). Size 16px unless noted. Accent color for checkmarks; inline with text for arrow.

### Forms

- No forms in the current homepage or footer. Form styling (if added) should use input/ring/border tokens; exact components available on request.

---

## 5. Responsive behavior and micro-interactions

- **Breakpoints:** sm 640px, md 768px, lg 1024px. Container and grids key off these.
- **Navigation:** Center links hidden below md; only brand and CONTACT visible on small screens.
- **Grids:**
  - Product: 1 col → 2 (md) → 5 (lg).
  - Pain points: 1 → 3 (md).
  - Profile systems: 1 → 2 (md).
  - Feature grid: 1 → 3 (md).
  - Process: 1 → 4 (md).
- **Hero / healing:** Single column below lg; two equal columns from lg; no gap between columns (gap-0).
- **Closing buttons:** Stacked on small screens; row from sm.
- **Footer columns:** 1 col → 4 cols (md). Bottom bar: column → row (md).
- **Micro-interactions:**
  - Nav links and footer links: color transition on hover (muted-foreground → foreground).
  - Product card image: scale-105 on group hover; transition 700ms.
  - Product card and feature card borders: border/50 → border on hover; transition colors.
  - Buttons: hover opacity/background as specified (accent/90, secondary/50 for outline). No motion beyond transition.
- **Scroll:** No parallax or scroll-based animations in spec. One unused scroll listener exists in Home (can be omitted on rebuild).
- **Touch / accessibility:** Buttons and links cursor pointer; focus-visible ring on buttons. No custom focus styles specified for nav/footer links.

---

## Content and assets (reference)

- All copy and image URLs are defined in a single content/config module (e.g. `content/home.ts`). Sections consume this; no hardcoded strings in layout components.
- Image URLs: CDN base (e.g. d2xsxph8kpxj0f.cloudfront.net); specific paths available on request.
- No performance figures, test results, or technical claims are stated in the UI beyond the copy in the content module.

---

## Summary checklist for rebuild

- [ ] Light theme palette (background, foreground, secondary, muted, accent, border).
- [ ] Inter + Playfair Display; base typography and heading scale.
- [ ] Container: padding 16/24/32px, max-width 1280px at lg.
- [ ] Fixed header: 64px, brand + nav links (hidden &lt; md) + CONTACT; backdrop blur.
- [ ] Footer: 4-column block + bottom bar; link lists and tagline.
- [ ] Home sections in order: Hero → Product grid (5 cols lg) → Pain points (3 cols) → Profile systems (2 cols) → Feature grid (3 cols) → Healing living (split) → Process (4 cols) → Closing manifesto → Footer.
- [ ] Primary and outline button styles; no Express/server dependency for static deploy.
- [ ] Responsive grids and breakpoints as above; hover states for cards and links.
- [ ] 404 page (optional: match spec or align to design system).
