# ShareOrb — Brand Guidelines

**Document:** Brand Identity & Visual Direction  

**Brand:** ShareOrb  

**Website:** shareorb.app  

**Status:** Working brand reference — mobile-app values extracted; final branding approval still pending  

**Applies to:** ShareOrb marketing website and related promotional materials

**Evidence basis:** Codex-generated read-only audit of the Angular/Ionic ShareOrb repository, 12 November 2026. Code-derived values are not necessarily formally approved brand standards. This document does not claim independent source-code or visual verification.

---

## 1. Purpose of This Document

This document defines the visual identity, personality, communication style, and creative principles of the ShareOrb brand.

Its purpose is to ensure that all landing page sections, UI elements, illustrations, and marketing materials feel consistent and recognizable.

The website must feel like a natural extension of the existing ShareOrb mobile application. Code-extracted observations inform the website but do not independently establish a formal brand standard.

### Relationship with Other Documents
- `product-brief.md` defines the product, its audience, features, and website objectives.
- `brand-guidelines.md` defines the brand identity, visual direction, and communication principles.
- `design-system.md` defines implementation-level design tokens, CSS values, component specifications, and responsive behavior.
- `AGENTS.md` defines development instructions for Codex.

Do not duplicate entire documents or create conflicting specifications.

### Source of Truth

Follow this order when making brand decisions:
1. Official ShareOrb assets and confirmed product branding.
2. Approved design-system specifications.
3. These brand guidelines.
4. Explicit design instructions supplied for the current task.

If an existing brand element contradicts an unapproved design proposal, the official brand element takes precedence.

Never invent official brand colors, typography, logos, or illustrations. Values documented as **code-confirmed** below are observed mobile-app implementations, not necessarily formally approved brand standards. Website-specific choices must be labeled as **proposed** until approved.

---

## 2. Brand Identity

### Brand Name

**ShareOrb**

Always use the exact capitalization.

Avoid alternative spellings such as Share Orb, ShareORb, or Shareorb.

### Official Tagline

**Split expenses. Not friendships.**

This is the primary brand tagline.

Preserve its exact wording and punctuation when presenting it as the official tagline.

### Brand Description

ShareOrb is a mobile application that makes managing shared expenses easier.

It helps groups track spending, divide costs, and understand who owes whom.

### Brand Mission

Make shared expense management simple, transparent, and stress-free.

### Brand Promise

Help people focus less on calculating expenses and more on enjoying the experiences they share.

### Brand Personality

ShareOrb should be perceived as:
- **Friendly:** Welcoming and approachable without feeling childish.
- **Trustworthy:** Clear, consistent, and dependable.
- **Modern:** Contemporary design without chasing every visual trend.
- **Simple:** Easy to understand and free from unnecessary complexity.
- **Confident:** Clear communication without exaggerated promises.
- **Playful:** A subtle sense of personality through the planet mascot and illustrations.
- **Mature:** Suitable for adults managing real shared expenses.

### Emotional Goal

When visitors see the ShareOrb website, they should feel:
- This product is easy to understand.
- This could solve a problem I regularly encounter.
- The application looks modern and well-designed.
- I understand what the product does.
- I feel comfortable trying it.

The goal is to communicate simplicity, reliability, and friendliness simultaneously.

---

## 3. Brand Positioning

### Category

Shared-expense management application.

### Main Product Benefit

A simpler way to organize group expenses and understand shared balances.

### Primary Brand Message

Shared expenses should be easy to manage and fair for everyone involved.

### Communication Priorities
1. Simplicity.
2. Transparency.
3. Fairness.
4. Convenience.
5. Shared experiences.

### What ShareOrb Is Not

ShareOrb must not be presented as:
- A banking service.
- A digital wallet.
- A money transfer platform.
- An investment or budgeting advisory service.
- A payment processing application.

Avoid wording suggesting ShareOrb automatically sends or receives money.

---

## 4. Tone of Voice

The website should communicate in natural, conversational English.

### Voice Characteristics

**Clear**

Explain benefits using familiar language.

Avoid complicated technical descriptions.

**Friendly**

Sound approachable and human.

Avoid overly formal corporate language.

**Confident**

Communicate product capabilities directly.

Avoid exaggerated promises or aggressive marketing.

**Concise**

Prefer short headlines and compact supporting descriptions.

Avoid long paragraphs where a simpler explanation would be sufficient.

**Lightly playful**

The brand may use subtle, tasteful humor.

Avoid jokes that undermine trust or trivialize people's financial responsibilities.

### Copywriting Examples

Preferred:
- Split expenses. Not friendships.
- Keep shared expenses simple.
- Know who owes whom.
- Your group expenses, all in one place.
- Less calculating. More enjoying.
- Split costs your way.

Avoid:
- The world's #1 expense-splitting app.
- Revolutionary AI-powered finance.
- Never worry about money again.
- Guaranteed perfect finances.
- The ultimate financial ecosystem.
- Magic expense management.

The avoided examples are either exaggerated, unverified, misleading, or inconsistent with the brand's tone.

### Headline Style

Headlines should generally be:
- Short.
- Benefit-oriented.
- Easy to understand.
- Natural rather than overly promotional.

Use sentence case unless a specific approved design calls for a different convention.

### CTA Language

Preferred CTA labels:
- **Join the Beta** — primary conversion action.
- **See How It Works** — product discovery.
- **Explore Features** — feature navigation.
- **Contact Us** — contact form.
- **Back to Top** — page navigation when needed.

Use consistent wording throughout the website.

Do not arbitrarily alternate between multiple labels for the same action.

---

## 5. Visual Identity

### Overall Creative Direction

ShareOrb combines a restrained, light financial-product interface with a more expressive illustration style in its onboarding and verification screens. The landing page should unite these two authentic sides of the same product.

**Code-confirmed mobile-app visual language:**
- Pale lavender application background (`#f7f6fb`).
- White rounded cards and inputs (`#ffffff`).
- Dark indigo heading text (`#1a1640`).
- Muted violet secondary/body text (`#6b6993`).
- Purple action and selection color (`#534ab7`).
- Teal positive balances (`#0f6e56`) and coral negative balances (`#993c1d`).
- Rounded 12–16px everyday surfaces, pill primary buttons, soft purple/indigo shadows.
- Planet, stars and clouds illustrations; a more cinematic sunset/welcome treatment.

**Proposed landing-page approach:** Light and spacious layouts, larger marketing typography, authentic product screenshots and carefully chosen mascot artwork. Preserve the app's indigo/purple/teal/coral semantics rather than recreating its native navigation or dense list screens.

### Visual Keywords

Modern, clean, approachable, balanced, soft, confident, mature, memorable.

### Avoid
- Excessive glassmorphism and neon glows.
- Overly saturated gradients or purple everywhere.
- Random new brand colors or inconsistent icon families.
- Excessive shadows and floating decorative elements.
- Kawaii or childlike mascot reinterpretations.
- Invented application screens, testimonials or product claims.
- Desktop layouts that simply enlarge mobile UI elements.

---

## 6. Brand Color System

### Evidence and Approval Status

The following HEX values are **code-confirmed from the mobile application audit**, primarily `src/theme/_palette.scss` and `src/theme/_theme.light.scss`. They are recommended as the initial website foundation, **not yet a formally approved corporate brand specification**.

### Core Mobile-App Palette — Recommended Website Foundation

| Role | HEX | Source token / usage | Website status |
|---|---|---|---|
| Primary action purple | `#534AB7` | `$lp-purple-600`, `--ss-primary` | Proposed primary |
| Primary hover/pressed | `#3C3489` | `$lp-purple-800`, `--ss-primary-hover` | Proposed interactive shade |
| Lavender tint | `#AFA9EC` | `$lp-purple-200`, Ionic primary tint | Support color; not white-text CTA fill |
| Soft lavender panel | `#EEEDFE` | `$lp-purple-50`, `--ss-primary-subtle` | Proposed subtle surface |
| Light-purple input outline | `#CECBF6` | `$lp-purple-100`, `--ss-border-input` | Proposed form border |
| Page canvas | `#F7F6FB` | `$lp-bg`, `--ss-bg` | Proposed background |
| Card surface | `#FFFFFF` | `$lp-surface`, `--ss-surface` | Proposed surface |
| Selected surface | `#FAF9FF` | `$lp-surface-selected` | Optional |
| Heading / high-emphasis ink | `#1A1640` | `$lp-text-heading` | Proposed primary text |
| Body / secondary ink | `#6B6993` | `$lp-text-body` | Proposed secondary text |
| Input placeholder | `#8583B0` | `$lp-text-placeholder` | Proposed placeholder, check contrast |
| Light card border | `#E8E4F8` | `$lp-border-card` | Proposed border |
| Positive balance | `#0F6E56` | `$lp-teal-600`, `--ss-positive` | Financial semantic |
| Positive subtle fill | `#E1F5EE` | `$lp-teal-50` | Financial semantic |
| Positive muted | `#1D9E75` | `$lp-teal-400` | Supporting positive |
| Negative balance | `#993C1D` | `$lp-coral-600`, `--ss-negative` | Financial semantic |
| Negative subtle fill | `#FAECE7` | `$lp-coral-50` | Financial semantic |
| Negative muted | `#F0997B` | `$lp-coral-200` | Supporting negative |
| Warning / indicator | `#FACC15` | `$lp-warning` | Semantic; not a brand accent |
| Warning pale background | `#FAEEDA` | `$lp-tint-amber` | Semantic |
| Pink category tint | `#FBEAF0` | `$lp-tint-pink` | Optional category tint |

### Separate Auth and Illustrative Palette

The mobile app also uses these **screen-specific** colors:

| Values | Observed context | Rule for marketing site |
|---|---|---|
| `#7357E8` / `#855EF0` | Authentication purple and button gradient | Optional accent; not the primary system color |
| `#7560DF` | Auth input focus | Auth-specific, not globally adopted by default |
| `#7E6CF2 → #6354D8 → #AFA9EC` | Home balance card / icon generator purple gradient | Optional expressive treatment, subject to visual review |
| `#34337D` / `#484391` | Welcome scene and panel | Optional illustration backing |
| `#AD96FF` | Welcome focus/highlight | Illustration accent |
| `#B9A4FF` / `#C7B7FF` | Stars / verify-email accents | Decoration only |

Do not combine all these purples indiscriminately in one composition. Google sign-in button colors are **third-party brand colors**, not ShareOrb colors.

### Confirmed Theme Inconsistencies — Do Not Copy

The audit observed these mismatches in the mobile source:
- `--ion-color-success` maps to primary purple while financial success/positive semantics use teal.
- Some success/error background aliases point to amber (`#FAEEDA`), rather than teal/coral fills.
- `--ss-error` uses `#EF4444`, whereas shared negative/debt styling uses `#993C1D`.
- The Ionic background RGB channel is `240,238,249`, while the declared hex background is `#F7F6FB` (`247,246,251`).
- Authentication fields use a brighter purple and alternate red error values.

**Web rule:** Define a single consistent semantic token map. Use teal for positive financial values, coral for negative amounts and clearly defined separate validation colors as needed. Do not transfer contradictory aliases verbatim.

### Color and Accessibility Rules
- Use primary purple for important CTA buttons, links, selection and focus where accessible.
- Use white/very-light surfaces as breathing room; avoid all-purple sections.
- Target WCAG 2.2 AA: contrast 4.5:1 for normal text, 3:1 for large text and relevant UI boundaries.
- Check combinations in the actual browser, particularly placeholder and text on semi-transparent overlays.
- Never rely on color alone to convey status.
- The audited mobile application is configured light-only; do not claim an approved dark theme.

---

## 7. Typography

### Current Application Typography — Code Confirmed

The application imports **Roboto Regular (400) and Medium (500)** via `@fontsource/roboto` in `angular.json`. Ionic supplies platform-dependent fallback stacks:
- Material/Ionic: `"Roboto", "Helvetica Neue", sans-serif`.
- iOS/Ionic: `-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif`.

The audit found **no explicit global `font-family`** declaration in the shared application SCSS. Auth screens inherit the Ionic font selection. The presence of Roboto files alone is **not proof of an approved formal brand typeface**.

### Audited Mobile Type Examples

| Role | Size / line height | Weight / tracking | Notes |
|---|---|---|---|
| Shared screen title | 24px / 32px | 600, −0.01em | App utility |
| Shared screen subtitle | 20px / 28px | 600 | App utility |
| Home greeting | 28px / ~30px | 800, −0.7px | Home-specific |
| Welcome hero | `clamp(36px, 9vw, 42px)` / 1.08 | 700, −1px | Mobile illustration screen |
| Login / auth title | 30px / 1.15 | 700, −0.6px | Auth-specific |
| Section title | 18px / 26px | 500, +0.01em | Shared |
| Card title | 16px / 1.2 | 700, +0.04em | Shared |
| Body / form input | 16px / ~24px | Usually 400 | Inputs at least 16px |
| Field label | 14px / 20px | 500 | Shared |
| Metadata | 14px / 20px | 400 | Shared |
| Caption / timestamp | 12px / 16px | 400 | Shared |
| Primary button | 16px / native | 600, +0.01em | Shared |

The source uses weights 400, 500, 600, 700 and 800, but only 400 and 500 Roboto font files were explicitly imported. Higher weights may be synthesized by a browser.

### Website Typography Policy
- **Proposed default family:** Roboto or a reviewed alternative, pending a visual decision and correct font loading.
- Preserve the modern, readable, approachable tone; do not mechanically copy mobile text sizes onto desktop marketing headers.
- Define a responsive display/H1/H2/H3/body/label/caption scale in `design-system.md`.
- Explicitly load any font weights used on the website rather than depending on accidental synthesis.
- Keep body copy comfortably readable; do not use tiny 9–12px mobile metadata styles for marketing paragraphs.
- Use restrained tracking and consistent line-height conventions.

---

## 8. Logo and Wordmark

### Assets Found in the Mobile Repository

The audit found **raster brand artwork**, not an approved vector wordmark:

| File (relative to mobile-app repository) | Audited content | Current use |
|---|---|---|
| `src/assets/images/logo.png` | 1126×890 transparent PNG; smiling planet, violet orbital ring and green moon | Welcome/auth art, positive home balance, icon generation input |
| `src/assets/icon/favicon.png` | 256×256 RGBA; icon on violet square | Application favicon |
| `assets/icon-only.png` | 1024×1024; planet on purple gradient | Generated launcher/icon source |
| `assets/icon-foreground.png` | 1024×1024 transparent simplified planet | Android adaptive foreground |
| `assets/icon-background.png` | 1024×1024 violet gradient | Android adaptive background |

**Not found in the audit:** official SVG wordmark, clear-space manual or formal logo lockup variants. Do not assume `logo.png` is a complete horizontal logo: it is primarily mascot art.

### Naming Conflict to Resolve

The audited authentication templates currently display the word **SimpleShare**, while the chosen public product name is **ShareOrb** and the website domain is `shareorb.app`. The landing page must display **ShareOrb**, not SimpleShare. The app itself can be corrected separately; this document does not authorize mobile-app changes.

### Logo Rules
- Reuse original supplied artwork without distortion, recoloring, rotation or extra glow.
- Do not synthesize an official vector/wordmark and claim it is approved.
- If no approved wordmark exists, use a **provisional text wordmark** “ShareOrb” with an appropriately sized existing planet mark; explicitly mark the lockup as proposed.
- Provide variants suitable for light/dark surfaces only once approved.
- Preserve source aspect ratios and adequate clear space.
- Select one canonical planet/icon variant before final brand approval.

---

## 9. Planet Mascot and Illustrations

### Existing Illustration Family — Code Confirmed

| Asset (relative to mobile-app repository) | Audited appearance | Audited use |
|---|---|---|
| `src/assets/images/logo.png` | Friendly ringed planet with green moon | Main welcoming mascot / positive balance |
| `src/assets/images/logo_sad.png` | Sad planet with coral moon | Negative balance |
| `src/assets/images/logo-offline.png` | Worried planet with no-Wi-Fi badge | Offline state |
| `src/assets/images/email-verification-planet.png` | Planet holding an envelope | Email/check/verification flow |
| `src/assets/images/loog-expense.png` | Planet with receipt and stars | Expense empty state |
| `src/assets/images/login_background.png` | Friends viewing coastal sunset (941×1672) | Welcome/onboarding backdrop |
| `src/assets/images/clauds.png` | Transparent mobile cloud bank (941×1672) | Auth background |
| `src/assets/images/claude-bg.png` | Wide lavender clouds (2172×724) | Verify-email footer/backdrop |

File names are preserved exactly as recorded by the audit, including `loog-expense.png` and `clauds.png`. These source paths are **not yet web asset paths**; files must be intentionally copied/optimized for Astro and rights to reuse must be confirmed.

### Mascot Personality and Usage
- Friendly, balanced and lightly playful; never excessively kawaii.
- Use the **approved original** and preserve the face, orbit, moon, proportions and palette.
- Use hero or CTA appearances sparingly; authentic screenshots usually communicate app functionality better.
- Contextual variants (sad, offline, email, expense) should be used only in fitting contexts.
- Do not redraw the mascot or invent additional character variants without approval.
- Cloud and sunset scenes are optional supporting material, not mandatory decorations.
- Avoid excessive glow, glitter, animated bouncing or competing planets in every section.

### Review Needed

The audit found a detailed transparent planet illustration and a simpler launcher variant. The canonical artwork for public marketing is **not yet confirmed**.

---

## 10. Product Screenshots and Mockups

### Authenticity First

Use genuine ShareOrb application screenshots captured from actual builds. The audit inventoried **source assets and source screens**, not a ready-to-publish screenshot library; no production screenshots are confirmed as part of the audited output.

### Priority Screens to Capture
1. Group overview / recent groups.
2. Add new expense.
3. Equal and custom split allocation.
4. Group balances / who owes whom.
5. Invitations or member management.

### Website Rules
- Use high-resolution, readable screenshots with realistic but non-sensitive demo data.
- Preserve original UI proportions and avoid false representations of feature behavior.
- Use consistent device framing only if it improves readability.
- Optimize delivery through Astro image handling; keep source originals for reference.
- Prefer screenshots over fabricated product interfaces.
- Do not publish real customer names, emails, balances or private information.

---

## 11. Shapes, Borders, Spacing and Depth

### Audited Shared Tokens

The mobile app declares a **4px-base spacing scale**:

`4, 8, 12, 16, 20, 24, 32, 48px` (`--ss-space-1/2/3/4/5/6/8/12`).

It also declares a radius scale:

| Radius token | Value |
|---|---|
| `--ss-radius-sm` | 4px |
| `--ss-radius-md` | 8px |
| `--ss-radius-lg` | 12px |
| `--ss-radius-xl` | 16px |
| `--ss-radius-2xl` | 24px |
| `--ss-radius-3xl` | 30px |
| `--ss-radius-full` | 9999px |

Shared shadows from the audit:

```css
/* Mobile source values, reference only */
--ss-shadow-sm: 0 1px 3px rgba(26,22,64,.06), 0 1px 2px rgba(26,22,64,.04);
--ss-shadow-md: 0 4px 12px rgba(26,22,64,.08), 0 2px 4px rgba(26,22,64,.04);
--ss-shadow-lg: 0 12px 32px rgba(26,22,64,.12), 0 4px 8px rgba(26,22,64,.06);
```

### Actual Component Patterns
- Everyday cards: white, usually 16px radius, low shadow.
- Compact list cards: roughly 12px radius.
- Native floating bottom tabs: 24px radius, **not** a web navigation prescription.
- Native bottom sheets: 32px top corners, **not** a web modal prescription.
- Source components also use one-off 10/14/28/40px spacing values; not every value is a token.

### Web Translation

Use consistent spacing and a restrained radius/shadow language. Define desktop section spacing, content widths and component layouts in `design-system.md`; do not copy native screen gutters or sheet dimensions mechanically.

---

## 12. Buttons and Interactive Elements

### Audited Mobile Styles

| Pattern | Code-confirmed values | Website guidance |
|---|---|---|
| Primary Ionic button | 48px height, 24px horizontal padding, pill radius (9999px), 16px/600, `#534AB7` fill | Strong visual reference for web primary CTA |
| Primary button shadow | `0 2px 8px rgba(83,74,183,.25)`; active scale 0.98 | Use selectively, avoid excessive motion |
| Outlined button | White fill, 1.5px `#CECBF6` border, purple text | Suitable secondary CTA reference |
| Clear/subtle button | Transparent fill, purple text | Tertiary action reference |
| Standard Ionic input | 16px text, ~12px radius, 1.5px border, 14px inner padding | Form baseline; do not copy Ionic markup |
| Auth input | ~48px high, 14px radius, 16px horizontal padding, `#DDD9EF` border, soft focus halo | Alternate auth treatment, not global default |
| Standard card | White, 16px radius, small shadow | Foundation for landing-page cards |

### Interaction Requirements
- Clear default, hover, focus-visible, active, disabled, and validation states.
- Use accessible labels, readable helper text, keyboard navigation and adequate touch targets.
- One visually dominant CTA per relevant viewport; do not turn every action purple and filled.
- Reserve loading and success/error **previews** for development/design review.
- **Phase 1 only:** Join Beta and Contact Us forms are frontend UI designs. Do not submit requests, persist data or show fabricated success in production. Keep real submission inactive until approved backend work.

---

## 13. Website-Specific Brand Application

### Navigation

Keep navigation minimal, clear, and consistent.

Use the official logo.

The primary Join the Beta CTA should be visually emphasized without creating excessive visual noise.

### Hero

The Hero should immediately establish the ShareOrb identity.

Recommended visual composition:
- Strong, benefit-focused headline.
- Concise explanation.
- Clear primary CTA.
- Supporting secondary CTA where appropriate.
- Authentic mobile application presentation.
- Optional restrained planet illustration.

The Hero must not resemble a generic finance dashboard unrelated to the mobile product.

### Feature Sections

Use a consistent system of headings, cards, icons, and spacing.

Features should be demonstrated using actual product capabilities.

### Beta Signup

The beta section should feel welcoming and clear.

Use consistent brand styling for inputs, labels, buttons, and informational messages.

During the initial design phase, it remains a UI-only experience.

Do not imply that beta registration is functional before the backend has been integrated.

### Contact Section

Maintain the same typography, colors, input styles, and button system as the beta section.

The visual design should be complete, while submission remains inactive until integration.

### Footer

Use a restrained design that provides closure to the page.

Ensure brand consistency with the navigation and the rest of the website.

---

## 14. Responsive Design

### Audited Mobile Behavior

The Ionic source handles safe areas and compact-height screens. Observed rules include `max-width: 360px`, compact-height conditions (`700px`, `580px`, `500px`) and a verification-screen adjustment at `min-width: 700px`.

These are **mobile application rules**, not a ready-made responsive breakpoint system for the Astro website.

### Marketing Website Principles
- Design mobile layouts intentionally, rather than simply reducing desktop widths.
- Choose website breakpoints based on content and design needs; record exact values in `design-system.md`.
- Adapt desktop hero composition, screenshots, cards and navigation to narrower screens.
- Keep hero content and the primary CTA accessible without unnecessary scrolling caused by decoration.
- Avoid horizontal overflow and inaccessible typography.
- Respect reduced-motion and keyboard access regardless of viewport.

---

## 15. Animation and Motion

### Observed Mobile Behavior

The audit found interaction timings mainly around **150–250ms**, including small row/segment transitions, chevron rotation and balance expansion. The verification spinner becomes *slower* under `prefers-reduced-motion`; this does **not** amount to a complete reduced-motion accessibility policy.

### Website Motion Policy
- Use subtle, short hover/focus transitions only where they improve feedback.
- Avoid heavy parallax, infinite floating elements and repeated bouncing mascot effects.
- Make important content visible without animations.
- Under `prefers-reduced-motion: reduce`, remove nonessential motion instead of merely slowing it.
- Exact durations/easing, if adopted, belong in `design-system.md`.

---

## 16. Iconography

### Mobile-App Evidence

The app uses **Ionicons** (audit reports `ionicons@7.1.0` script plus dependency) for general UI controls and navigation. This is an icon library, **not** a bespoke ShareOrb icon family.

### Landing Page Direction
- Choose one consistent outline or filled icon system for the website.
- Reusing Ionicons is acceptable if licensing and package choice are suitable, but not mandatory.
- Maintain consistent stroke weight, dimensions and visual tone.
- Use icons for groups, expenses, splitting, balances, invites, contact and navigation only when they aid clarity.
- Keep functional icons separate from the planet mascot/illustration language.
- Do not migrate unrelated legacy SVGs (`stonks-up.svg`, `stonks-down.svg`, `shapes.svg`) merely because they exist in the repo.

---

## 17. Trust and Authenticity

ShareOrb should communicate trust primarily through clarity, quality, and authentic product presentation.

### Trust-Building Elements
- Real product screenshots.
- Accurate feature descriptions.
- Consistent design.
- Clear interactions.
- Transparent beta messaging.
- Professional typography and layouts.
- Functional navigation.
- Accessible content.

### Forbidden Marketing Practices

Do not invent:
- Testimonials.
- User counts.
- Review scores.
- App Store ratings.
- Download counts.
- Awards.
- Security certifications.
- Launch dates.
- Pricing promises.
- Availability claims.
- Product capabilities.

The absence of these elements is better than presenting misleading information.

---

## 18. Brand Consistency Checklist

Before approving any major landing page section, verify:
- [ ] Does it feel like the ShareOrb mobile application?
- [ ] Are the official logo and imagery used correctly?
- [ ] Are colors consistent with approved brand tokens?
- [ ] Does the typography follow the established system?
- [ ] Is the design modern without being overly decorative?
- [ ] Is the planet mascot used appropriately?
- [ ] Does the section have a clear purpose?
- [ ] Is the language friendly, mature, and understandable?
- [ ] Are screenshots authentic?
- [ ] Are marketing claims accurate?
- [ ] Does the section work on mobile?
- [ ] Does the design meet accessibility requirements?
- [ ] Are the CTA styles consistent?
- [ ] Are animations restrained?

---

## 19. Confirmed Findings and Remaining Decisions

### Extracted From the Mobile Source Audit
- [x] Main app purple: `#534AB7` (code-confirmed; proposed website primary).
- [x] App canvas, surface, heading/body colors and relevant borders identified.
- [x] Financial positive and negative color semantics identified.
- [x] Existing font source and platform fallbacks identified (Roboto 400/500 loaded).
- [x] Common mobile spacing/radius/shadow values inventoried.
- [x] Common primary button, outline button, input and card styling inventoried.
- [x] Mascot, welcome, cloud and icon asset paths identified.
- [x] Ionicons usage identified.

### Still Requires Design/Owner Confirmation
- [ ] Confirm `ShareOrb` as the public display name everywhere; audit found `SimpleShare` in auth templates.
- [ ] Select the canonical brand planet/logo variant and obtain approved website-ready assets.
- [ ] Confirm whether a formal wordmark exists; none identified in the audit.
- [ ] Approve the mobile primary/palette as website brand defaults.
- [ ] Decide website font family and ensure required weights/files are actually loaded.
- [ ] Capture sanitized, high-quality screenshots of Group, Expense, Split, Balance and Invitation views.
- [ ] Approve the hero visual treatment (app UI vs illustrative sunset) and CTA copy.
- [ ] Define website-specific grid, content widths, responsive type, spacing and breakpoints in `design-system.md`.
- [ ] Confirm legal pages, store availability, beta claims and other public messaging before release.
- [ ] Independently test actual website color combinations for accessibility.

### Intentional Deferrals
- Beta signup API, contact API, email delivery, bot protection and server-side persistence are **not part of the current design phase**.
- Native mobile app token inconsistencies are documented here but **not changed** by this website project.

---

## 20. Final Brand Direction

ShareOrb should feel like a modern, thoughtful application designed to simplify everyday shared expenses.

Its visual identity should balance professional quality with a friendly personality.

Purple and lavender provide recognizable brand accents. Authentic mobile screenshots explain the product. The planet mascot gives ShareOrb its own character.

Typography, layout, and clear communication should carry the design.

**The guiding principle is: Make shared expenses feel simple, transparent, and approachable — without sacrificing visual quality or trust.**

Do not finalize unconfirmed brand values. Treat missing assets and design tokens as explicit dependencies, not invitations to invent new branding.
---

## Appendix — Source Evidence (Mobile Repository)

This document incorporates the Codex-generated `shareorb-design-audit.md` provided by the product owner. Values described as code-confirmed are **reported findings of that audit**; the underlying mobile repository was not independently opened during this document update. Source locations recorded by the audit:

- `src/theme/_palette.scss` — base palette.
- `src/theme/_theme.light.scss` and `src/theme/variables.scss` — semantic CSS/Sass tokens, spacing, radius and shadows.
- `src/theme/components/_button.scss`, `_input.scss`, `_card.scss`, `_surface-card.scss` — shared component styles.
- `src/app/auth/styles/_auth-page.scss` — auth-specific visual styles.
- `angular.json`, `src/index.html` — font and platform configuration.
- `src/assets/images/`, `src/assets/icon/`, `assets/` — illustrations and icon inputs.

**Separation of concerns:** This is the *brand/creative* guide. Final CSS variables, component sizing, page grids, breakpoints, type scale and approved marketing-specific design adjustments must be maintained in `docs/design-system.md` as a separate document.
