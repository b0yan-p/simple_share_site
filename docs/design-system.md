# ShareOrb — Web Design System

**Project:** ShareOrb marketing landing page (`shareorb.app`)  
**Version:** 1.0 — implementation draft  
**Date:** 2026-11-12  
**Stack:** Astro + TypeScript + Tailwind CSS v4 (once installed)  
**Current phase:** Landing page UI, without Beta Signup or Contact Us backend integration

> **Status legend**
> - **APP-CONFIRMED:** Reported in the read-only ShareOrb Angular/Ionic source audit. These values are implemented in the app, but are not necessarily formal brand standards.
> - **WEB-PROPOSED:** A new, concrete design decision for the landing page. Adopt as the v1 implementation baseline unless the project owner changes it.
> - **PENDING:** An asset, copy decision, or specification that still requires confirmation. Do not invent it.
>
## 1. Purpose and precedence

This document translates ShareOrb's established mobile visual language into **implementable web specifications**. It defines the semantic tokens, responsive scales, layout rules, components and interaction behavior Codex should use in Astro.

Reference documents:
- `docs/product-brief.md` — product, audience, content and Phase 1 scope.
- `docs/brand-guidelines.md` — brand identity, voice, approved/observed visual direction and image usage.
- `AGENTS.md` — agent workflow, prohibited tools and implementation restrictions.

**Decision priority:** Explicit owner-approved project decisions and genuine brand assets > this adopted web specification > brand guidance for unspecified cases > optional design skills. Generic Taste Skill preferences (including any restriction against purple) **must not override ShareOrb's purple/lavender identity**. Never use the Sites skill for this project.

This is a **light-theme marketing website** in v1; dark mode is neither implemented nor claimed. The mobile app's native Ionic sizing and navigation are references, not mandatory web behaviors.

## 2. Color tokens

### 2.1 Semantic palette

All listed HEX values are **APP-CONFIRMED** through the audit; mapping them into web roles is **WEB-PROPOSED**.

| Web semantic token | HEX | Intended use |
|---|---|---|
| `brand-primary` | `#534AB7` | Primary CTA, key links, selected states, focus emphasis |
| `brand-primary-hover` | `#3C3489` | Hover and pressed CTA/background |
| `brand-primary-tint` | `#AFA9EC` | Decorative brand tint (not white-text CTA) |
| `brand-lavender` | `#EEEDFE` | Soft feature panels, highlighted content |
| `brand-lavender-border` | `#CECBF6` | Outlines for secondary buttons and inputs |
| `canvas` | `#F7F6FB` | Page background / alternate sections |
| `surface` | `#FFFFFF` | Cards, primary light panels, form surfaces |
| `surface-selected` | `#FAF9FF` | Subtle active or secondary cards |
| `ink` | `#1A1640` | Headings and primary content |
| `ink-muted` | `#6B6993` | Body/supporting copy |
| `ink-placeholder` | `#8583B0` | Placeholder only; see contrast warning |
| `border-control` | `#8583B0` | **WEB-PROPOSED** visible form-control outlines using existing app palette |
| `border-subtle` | `#E8E4F8` | Non-critical card outlines/dividers |
| `balance-positive` | `#0F6E56` | Positive financial amounts |
| `balance-positive-bg` | `#E1F5EE` | Positive financial status backgrounds |
| `balance-negative` | `#993C1D` | Negative financial amounts and error text if appropriate |
| `balance-negative-bg` | `#FAECE7` | Negative financial status backgrounds |
| `status-warning` | `#FACC15` | Warning accents; pair with dark text |
| `status-warning-bg` | `#FAEEDA` | Warning panels |
| `on-primary` | `#FFFFFF` | Text/icons on primary CTA |

**Do not copy mobile theme defects:** The audit found `--ion-color-success` mapped to purple, mismatched success/error amber backgrounds, and a stale Ionic background RGB value. Use the semantic tokens above, not those incorrect aliases.

### 2.2 Contrast rules and known checks

Ratios below are computed from the listed opaque HEX values (actual overlays and states still require browser inspection):

| Pair | Contrast | Guidance |
|---|---:|---|
| `brand-primary` on white | `6.93:1` | Passes WCAG AA for normal text |
| White on `brand-primary` | `6.93:1` | Passes normal text |
| `ink-muted` on white | `5.16:1` | Passes normal text |
| `ink-muted` on `canvas` | `4.80:1` | Passes normal text |
| `ink-placeholder` on white | `3.58:1` | **Does not pass** 4.5:1 for regular text; never use as instructions or essential information |
| `balance-positive` on `balance-positive-bg` | `5.46:1` | Passes normal text |
| `balance-negative` on `balance-negative-bg` | `6.03:1` | Passes normal text |
| `brand-lavender-border` on white | `1.56:1` | **Not sufficient alone** to make a control boundary visibly distinguishable under 3:1 non-text contrast requirements |
| `border-control` on white | `3.58:1` | Passes the 3:1 non-text contrast threshold for an important control boundary |

**WEB-PROPOSED adjustment:** Use `border-control` (`#8583B0`) for visible default form outlines and `brand-primary` for focus border/ring. Reserve pale `#CECBF6` for decorative/secondary outlines, not the sole boundary of essential controls. Verify this appearance in the browser before final approval. Keep error text and control states accessible without relying solely on color.

### 2.3 Gradients (optional, not default)

**APP-CONFIRMED illustrative values:** Auth uses `#7357E8 → #855EF0`; the home balance/icon art uses a violet family including `#7E6CF2`, `#6354D8`, `#AFA9EC`. These are **not** competing website primary colors. They may appear only in approved illustrative/feature compositions. Avoid pervasive glow or gradients on every section.

## 3. Typography

### 3.1 Font family and loading

- **APP-CONFIRMED:** The mobile build imports `Roboto` weights 400 and 500; platform-specific Ionic stacks also exist. A formal brand typeface is not independently established.
- **WEB-PROPOSED v1:** Use `Roboto, Arial, sans-serif` for both headings and body to preserve visual continuity. Load real 400, 500, 600 and 700 font files (e.g. via `@fontsource/roboto`); do not depend on synthetic bold. Use `font-display: swap` through the chosen font loading approach.
- **PENDING:** The owner may approve a distinct display font later; do not change typography ad hoc per section.

### 3.2 Responsive type scale — WEB-PROPOSED

| Role | Mobile (<640px) | Tablet (640–1023px) | Desktop (≥1024px) | Weight | Line-height / tracking |
|---|---|---|---|---:|---|
| Display / Hero H1 | 40px | 52px | 64px | 700 | 1.07; -0.035em |
| Section H2 | 30px | 38px | 46px | 700 | 1.14; -0.025em |
| Card/section H3 | 20px | 22px | 24px | 600 | 1.25; -0.015em |
| Large lead paragraph | 17px | 18px | 19px | 400 | 1.6; normal |
| Body | 16px | 16px | 16px | 400 | 1.6; normal |
| Small/body supporting | 14px | 14px | 14px | 400 | 1.5; normal |
| Field labels | 14px | 14px | 14px | 500 | 1.4; normal |
| Button label | 16px | 16px | 16px | 600 | 1.25; 0.005em |
| Eyebrow / overline | 12px | 12px | 13px | 700 | 1.4; 0.08em |

- Keep paragraph measure around `55–70ch`; hero support text `45–56ch`.
- Avoid 9–12px text for important marketing content. Native app typography is not a desktop type scale.
- Use one visible H1 on the landing page, semantic H2 for major sections and H3 for cards/subsections.
- Use tabular numerals when presenting money in genuine product screenshots or UI examples.

## 4. Layout and responsive grid — WEB-PROPOSED

### Breakpoints

Use Tailwind CSS v4 defaults where applicable (mobile-first):

| Viewport | Layout behavior |
|---|---|
| `<640px` | Single column, compact navigation and stacked hero |
| `640–767px` | Wider one-column or selective two-column content |
| `768–1023px` | Two-column feature cards as space permits |
| `1024–1279px` | Full desktop nav, two-column hero and composed layouts |
| `≥1280px` | Same hierarchy with capped width, not endlessly stretched |

### Global dimensions

| Item | Value | Status |
|---|---|---|
| Main max content width | `1200px` | WEB-PROPOSED |
| Page horizontal gutters | `20px` mobile, `32px` tablet/desktop | WEB-PROPOSED |
| Section vertical padding | `64px` mobile, `80px` tablet, `104px` desktop | WEB-PROPOSED |
| Hero top/bottom padding | `64px / 72px` mobile; `96px / 104px` desktop | WEB-PROPOSED |
| Main section heading to description | `16px` | WEB-PROPOSED |
| Section intro to content grid | `40px` mobile, `56px` desktop | WEB-PROPOSED |
| Standard grid/card gap | `16px` mobile, `24px` desktop | WEB-PROPOSED |
| Navigation height | `64px` mobile, `76px` desktop | WEB-PROPOSED |

Use fluid containers; avoid hard-coded full-height sections that clip on small displays. Section backgrounds can alternate between `surface`, `canvas` and restrained `brand-lavender` accents.

### Hero composition

- Desktop (`≥1024px`): two columns, approximately **52% text / 48% product visual**; align vertically, with `48–64px` separation.
- Mobile: text and CTAs first, real product screenshot underneath; prioritize readable headline and full-width or comfortably tappable buttons.
- Desktop H1 max width: about `11–13ch` when it fits the approved copy; avoid awkward one-word line breaks. Don't force line breaks until final copy is reviewed.
- The mascot may support the composition but must **not** displace the actual application UI as primary product proof.
- **PENDING:** Choose a canonical mascot and approved, sanitized screenshots before final hero imagery. Until then show a clearly temporary design placeholder, not a fabricated app screen.

## 5. Spacing, radius and elevation

### 5.1 Spacing

**APP-CONFIRMED mobile base:** `4, 8, 12, 16, 20, 24, 32, 48px`.  
**WEB-PROPOSED extended spacing:** `64, 80, 96, 104px` for section-level layouts; retain the 4px base for component spacing. Prefer the established scale over arbitrary one-off numbers.

### 5.2 Radius

**APP-CONFIRMED token values:** `4, 8, 12, 16, 24, 30, 9999px`.

**WEB-PROPOSED uses:**
- Cards and feature surfaces: `16px` (`24px` for prominent feature art panels).
- Inputs and text areas: `12px`.
- Pills/buttons/CTA: `9999px` (matching app primary action).
- Small badges: `9999px`.
- Modal/dialog (if needed): `16px` or `24px`, **not** native bottom-sheet dimensions.

### 5.3 Shadows

**APP-CONFIRMED:**

```css
--shadow-sm: 0 1px 3px rgba(26, 22, 64, .06), 0 1px 2px rgba(26, 22, 64, .04);
--shadow-md: 0 4px 12px rgba(26, 22, 64, .08), 0 2px 4px rgba(26, 22, 64, .04);
--shadow-lg: 0 12px 32px rgba(26, 22, 64, .12), 0 4px 8px rgba(26, 22, 64, .06);
```

Use `sm` on ordinary cards, `md` on select raised panels, `lg` rarely. Do not add shadows indiscriminately or combine heavy shadows with glowing borders.

## 6. Components — WEB-PROPOSED v1 specifications

| Component | Default specification | Interaction / accessibility |
|---|---|---|
| Primary CTA | 52px min height; `24px` x-padding; purple fill; white 16px/600 label; pill radius | Hover `#3C3489`; clear `focus-visible`; disabled state must not look clickable |
| Secondary CTA | 52px min height; white surface, purple label, lavender 1.5px decorative border; pill radius | Button label and shape reinforce affordance; use stronger focus ring; never higher emphasis than primary |
| Text link | Purple; underline when useful to signal interaction | Visible hover and keyboard focus; no color-only affordance |
| Standard input | 48–52px minimum height, 16px font, 12px radius, 16px horizontal padding, `#8583B0` 1px visible outline | Explicit label, error message tied to field; `brand-primary` focus ring |
| Textarea | 120px minimum height, same typography/radius as input | Resize vertically, proper label/helper/error association |
| Basic card | White surface, 16px radius, 24px desktop / 20px mobile padding, subtle border/shadow | Only clickable if it is actually a link/button; no fake hover cursor |
| Feature showcase panel | 24px radius, soft lavender/canvas background, 32px+ responsive padding | Reserve space for authentic screenshot and prevent image distortion |
| FAQ item | Full-width row with 16–18px question, clear indicator, 16px answer | Native `details/summary` or equivalently accessible disclosure; keyboard operable |
| Navigation | Logo/wordmark left, section links, one primary CTA | Mobile menu requires aria state, Escape behavior and keyboard access if custom-built |
| Status/amount | Indigo labels; teal positive / coral negative with light status fills | Sign or explicit text visible; never rely on color only |

### Buttons and form copy

- Default CTA: **Join the Beta**; secondary: **See How It Works**. The hero CTA can scroll to `#beta`, but the section must transparently state signup isn't live yet.
- Form UI may show default, focus, error, disabled, loading and success **design previews in development only**. Do not display a fabricated success state in production.
- During Phase 1, **production submission is disabled**. Use clear explanatory copy such as *“Beta signups are coming soon”* and *“Contact form coming soon”*. Do not create API endpoints, Resend integration, storage, fake POST requests or bot-protection flows yet.
- If the unreleased CTA would mislead visitors, revise the live label to communicate prelaunch status before publication; don't silently claim signup is operational.

## 7. Content-specific visual rules

| Section | Design direction |
|---|---|
| Hero | Clear tagline, supporting statement, real product visual, dominant CTA |
| Problem | Recognizable shared-cost scenario, restrained illustration/copy |
| How it works | 4 steps: group → expense → split → balances; readable sequence on mobile |
| Features | 3–5 focused items; avoid dense rows of generic identical cards |
| Use cases | Travel, couples, roommates; authentic, non-misleading visuals |
| Beta | High-contrast, inviting panel; UI-only form with honest inactive state |
| FAQ | Scannable, accessible disclosure, no unsupported pricing/security claims |
| Contact | Consistent form styling; inactive submission clearly communicated |
| Footer | Compact navigation, actual legal links only if those destinations exist |

The design-taste skill may improve composition, hierarchy and imagery placement, but must not impose alien palettes, excessive motion, invented screens or a different framework.

## 8. Images and iconography

**APP-CONFIRMED asset paths in the mobile repository (not yet copied into Astro):**

| Source-relative path | Content / use |
|---|---|
| `src/assets/images/logo.png` | Smiling planet mascot; welcome/auth/positive balance |
| `src/assets/images/logo_sad.png` | Sad planet variant; negative balance |
| `src/assets/images/email-verification-planet.png` | Planet holding email; email status |
| `src/assets/images/loog-expense.png` | Planet with receipt; expense empty state |
| `src/assets/images/login_background.png` | Illustrated friends watching sunset |
| `src/assets/images/clauds.png` | Translucent login clouds |
| `src/assets/images/claude-bg.png` | Wide lavender clouds for verification |
| `src/assets/icon/favicon.png` | Existing mobile favicon (not necessarily final website icon) |

- **PENDING:** Canonical mascot/logo variant, approved wordmark, final website favicon and marketing screenshots.
- Add only the selected originals into Astro (`src/assets/brand/` or `public/brand/`) once approved; document their **new** relative paths when copied.
- Prefer Astro image optimization for imported raster assets; retain transparency where needed. Provide useful alt text for informative imagery; use empty `alt` for purely decorative images.
- Never invent app screenshots, testimonials, reviews, feature screens or financial statistics.
- **APP-CONFIRMED:** The app uses Ionicons. **WEB-PROPOSED:** Choose one consistent web icon family; do not mix icon styles just because both are available.

## 9. Motion and interaction

- **APP-CONFIRMED mobile tendencies:** short 150–250ms transitions and restrained component motion.
- **WEB-PROPOSED:** 150ms for button/focus feedback; 200–250ms for disclosure/visual transitions. Use easing such as `ease-out`; keep layout shifts to a minimum.
- No mandatory scroll animation, parallax, shader, WebGL or constant floating elements.
- Respect `prefers-reduced-motion: reduce` by removing nonessential animations/transitions, not merely slowing them down.
- Do not animate the primary content into an invisible state without a usable no-JS fallback.

## 10. Tailwind CSS v4 token implementation reference

**Use this as a concrete starting point when implementing `src/styles/global.css`; it is not a claim that the file already exists or Tailwind is installed.** Configure Astro/Tailwind first, then place the tokens in one global stylesheet rather than duplicating values in every component.

```css
@import "tailwindcss";

@theme {
  --font-sans: "Roboto", Arial, sans-serif;

  --color-brand-primary: #534ab7;
  --color-brand-primary-hover: #3c3489;
  --color-brand-tint: #afa9ec;
  --color-brand-lavender: #eeedfe;
  --color-brand-lavender-border: #cecbf6;

  --color-canvas: #f7f6fb;
  --color-surface: #ffffff;
  --color-surface-selected: #faf9ff;
  --color-ink: #1a1640;
  --color-ink-muted: #6b6993;
  --color-ink-placeholder: #8583b0;
  --color-border-subtle: #e8e4f8;
  --color-border-control: #8583b0;

  --color-balance-positive: #0f6e56;
  --color-balance-positive-bg: #e1f5ee;
  --color-balance-negative: #993c1d;
  --color-balance-negative-bg: #faece7;

  --radius-card: 1rem;
  --radius-showcase: 1.5rem;
  --shadow-card: 0 1px 3px rgba(26, 22, 64, .06), 0 1px 2px rgba(26, 22, 64, .04);
  --shadow-raised: 0 4px 12px rgba(26, 22, 64, .08), 0 2px 4px rgba(26, 22, 64, .04);
}

:root {
  --layout-max-width: 1200px;
  --layout-gutter: 20px;
  --section-padding-block: 64px;
}

@media (min-width: 640px) {
  :root { --layout-gutter: 32px; --section-padding-block: 80px; }
}

@media (min-width: 1024px) {
  :root { --section-padding-block: 104px; }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

The Tailwind `@theme` namespace creates utilities such as `bg-brand-primary`, `text-ink`, `bg-canvas` and `rounded-card`. The `:root` layout variables are for custom CSS, e.g. `.container-shell { width: min(100% - 2 * var(--layout-gutter), var(--layout-max-width)); margin-inline: auto; }`. Do not import app-specific Ionic Sass directly into Astro.

**Font installation example (once the site is being coded):** `npm install @fontsource/roboto`, then import the used weights (400/500/600/700) in the project's global entrypoint. Verify the actual generated CSS and production network requests.

## 11. Accessibility and quality gates

- Semantic landmarks (`header`, `main`, `nav`, `section`, `footer`) and logical heading hierarchy.
- Keyboard-accessible mobile navigation, FAQ and controls; visible focus states and sensible tab order.
- Inputs with labels, helper/error text and `aria-describedby` where appropriate.
- WCAG AA color checks **against the actual rendered background**, including gradients and overlays; distinguish decorative borders from necessary control boundaries.
- Responsive check at least at **390, 768, 1024 and 1440px**; also test a narrow **320px** viewport for overflow.
- No horizontal scrolling from decorative imagery; readable text when zoomed.
- Prefer static Astro output and minimal client-side JavaScript; avoid heavyweight UI frameworks for ordinary landing sections.
- Optimize images, specify dimensions/space for media, use appropriate lazy loading (do not lazy-load the important above-the-fold hero image by default).
- One standard build and targeted checks per implementation task. Repeated autonomous redesign/browsing loops require approval to avoid unnecessary Codex usage.

## 12. Open approvals / design decisions

| Decision | Current proposal / status |
|---|---|
| Public product name | **ShareOrb** (owner intention); mobile auth still contains `SimpleShare` |
| Main purple / light palette | Use audited app values above as v1 site baseline; formal brand-manual approval not claimed |
| Website font | Roboto with explicitly imported 400/500/600/700; **proposed**, not formal brand approval |
| Main layout | 1200px max, 20/32px gutters, 64/80/104px sections; **proposed** |
| Hero | Desktop text + actual screenshot in two columns; mobile stacked; **proposed** |
| Canonical mascot/wordmark | **PENDING** — select authentic source asset and header treatment |
| Product screenshots | **PENDING** — sanitized real captures, approved for public display |
| Default input border design | `#8583B0` visible outline with primary focus ring (**WEB-PROPOSED**); browser appearance review pending |
| Legal/app store links | **PENDING** — use only verified live destinations |
| Beta/contact API | **DEFERRED** — frontend UI only; no faux success in production |

## 13. Definition of done for v1 visual implementation

- Site matches the audited ShareOrb color identity and uses one centralized token layer.
- Responsive type, grid, CTA hierarchy, forms, cards and navigation follow this document.
- Approved, genuine assets are used; missing screenshots are not fabricated.
- Forms are visually specified but do not submit or claim success.
- Contrast, focus, labels, keyboard navigation, reduced motion and mobile layouts are reviewed.
- Site remains Astro-first, lightweight and deployable as a static marketing page pending later backend features.

---

**Maintenance rule:** When an owner approves a token or visual treatment, update this file with its final value and status. Do not silently mutate the brand palette or design scale because a generated reference suggests a different aesthetic.
