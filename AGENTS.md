# ShareOrb Landing Page — Agent Instructions

## 1. Project Overview

This repository contains the official ShareOrb marketing website.

ShareOrb is a mobile application for managing and splitting shared expenses.

**Technology stack:**
- Astro 7
- TypeScript
- Tailwind CSS 4
- Static-first architecture

The website must be fast, accessible, responsive, SEO-friendly, and consistent with the existing ShareOrb mobile application.

Do not introduce React, Vue, Angular, or other frontend frameworks unless explicitly requested.

---

## 2. Project Documentation

The following documents define the project requirements:

| Document | Purpose |
|---|---|
| `docs/product-brief.md` | Product features, audience, website goals, and implementation scope |
| `docs/brand-guidelines.md` | Brand identity, color palette, typography, illustrations, and communication style |
| `docs/design-system.md` | Website-specific design tokens, layout, components, spacing, and responsive specifications |

**Instructions:**

- Read the relevant documentation before making product, design, or content decisions.
- For UI implementation, consult both the brand guidelines and design system.
- Reuse existing approved design tokens and components.
- Do not invent unsupported product features, statistics, testimonials, or marketing claims.
- Treat confirmed mobile-app values as brand references and provisional web-specific values as implementation decisions.
- If a necessary specification is missing, make a reasonable, clearly identified proposal rather than silently inventing official brand values.

Do not repeatedly reread unrelated documentation during a single task.

---

## 3. Brand Identity — Highest Design Priority

ShareOrb has an established purple and lavender visual identity.

The existing mobile application is the primary reference for brand colors, typography, logos, illustrations, and visual personality.

**Rules:**

- Preserve ShareOrb's established purple/lavender palette.
- Use the approved brand colors and design tokens.
- Reuse original ShareOrb visual assets whenever available.
- Preserve the official planet mascot's appearance and proportions.
- Maintain consistency between the mobile application and website.
- Avoid excessive glow, neon gradients, childish/kawaii aesthetics, and generic AI-generated SaaS designs.
- Do not fabricate application screenshots.
- Do not replace brand colors with arbitrary alternatives.

If an optional design skill conflicts with these rules, the ShareOrb brand guidelines take precedence.

---

## 4. Current Development Scope

**Phase 1: Landing Page Frontend Implementation**

In scope:

- Responsive landing page sections.
- Astro components and Tailwind styling.
- Navigation and functional internal links.
- Brand illustrations and authentic app screenshots.
- Beta Signup form UI.
- Contact Us form UI.
- Client-side validation and accessible form states.
- SEO metadata and performance optimization.
- Accessibility and responsive behavior.
- Subtle animations where appropriate.

**Out of scope:**

- Backend APIs.
- Beta registration submissions.
- Contact message submissions.
- Resend/email integrations.
- Server-side form handlers.
- Database persistence.
- Cloudflare Turnstile integration.
- Any simulated successful submission in production.

Beta Signup and Contact Us must be visually complete but must not claim to submit data until backend integration is implemented.

Keep their frontend architecture ready for future API integration.

---

## 5. Visual Assets & Product Screenshots

All ShareOrb visual assets are organized as follows:

- `src/assets/brand/` — Original ShareOrb mascot,
  logo, and brand artwork.
- `src/assets/illustrations/` — Backgrounds, clouds,
  and decorative illustrations.
- `src/assets/screenshots/` — Authentic screenshots
  of the existing ShareOrb mobile application.
- `public/` — Favicon and other static public assets.

### Rules

1. Inspect relevant visual assets before designing
   or implementing any product-focused section.

2. Always prefer authentic ShareOrb screenshots
   and existing brand illustrations.

3. NEVER fabricate application interfaces,
   screenshots, features, or visual representations
   that mislead users about the actual product.

4. Do not modify, overwrite, rename, or crop
   original assets without explicit approval.

5. Use Astro's Image component for raster images
   where appropriate to optimize performance.

6. Do not display every available screenshot.
   Select only those that clearly communicate
   the purpose of each section.

7. Preserve original image proportions and
   avoid stretching or distorting screenshots.

8. Use responsive image sizing and appropriate
   loading strategies:
   - Eager loading for above-the-fold hero images.
   - Lazy loading for below-the-fold images.

9. Keep visual compositions consistent with
   ShareOrb's approved brand guidelines and
   design system.

10. If an appropriate asset is missing, report it
    instead of generating a replacement without approval.

---

## 6. Skill Usage Policy

### Prohibited Skills

The **Sites skill is strictly prohibited** in this project.

Never invoke, load, recommend, or delegate work to Sites.

Do not use external website-generation services or tools unless explicitly authorized.

### Allowed Design Skills

The installed `design-taste-frontend` skill may be used for:

- Layout composition.
- Visual hierarchy.
- Typography composition.
- Responsive design guidance.
- Visual quality review.

**Restrictions:**

- ShareOrb brand guidelines override conflicting skill recommendations.
- Do not introduce unrelated colors or visual styles.
- Do not install additional frameworks or large dependencies without approval.
- Avoid unnecessary WebGL, shaders, complex parallax, and heavy animations.
- Do not execute repeated autonomous redesign loops unless requested.

Skills should support the project requirements, not replace them.

---

## 7. Implementation Workflow

When receiving a development task:

1. Inspect the relevant existing source files.
2. Consult applicable project documentation.
3. Identify reusable components and design tokens.
4. Implement the requested functionality or UI.
5. Verify responsive behavior and accessibility.
6. Run appropriate validation once.
7. Summarize modified files and important decisions.

### Important Rules

- Do not repeatedly generate design proposals when implementation has been explicitly requested.
- Do not modify unrelated files.
- Do not perform large refactors without a clear reason.
- Avoid unnecessary dependencies.
- Prefer simple Astro components and semantic HTML.
- Use TypeScript for application logic.
- Prefer Tailwind CSS utilities and centralized design tokens.
- Avoid hardcoding brand colors and repeated magic values.
- Use meaningful component names.
- Do not overengineer simple landing page functionality.

For substantial tasks, provide a concise plan before implementation.

For small, well-defined tasks, implement directly.

---

## 8. Development Server

When starting the development server, use background mode:

```bash
astro dev --background
```

Manage the background server with:

```bash
astro dev status
astro dev logs
astro dev stop
```

Do not start duplicate development servers.

---

## 9. Validation and Quality

Before completing a significant implementation:

- Run `npx astro check` when applicable.
- Run `npm run build`.
- Check for TypeScript and build errors.
- Verify semantic HTML and accessible interactions.
- Check responsive layouts.
- Ensure no unnecessary client-side JavaScript was introduced.

Do not run repeated browser automation or multi-agent review cycles without explicit approval.

Report any tests that were not executed.

---

## 10. Astro Documentation

Official documentation: https://docs.astro.build

Consult relevant documentation when working with unfamiliar Astro functionality.

Useful references:

- Components: https://docs.astro.build/en/basics/astro-components/
- Routing: https://docs.astro.build/en/guides/routing/
- Styling: https://docs.astro.build/en/guides/styling/
- Images: https://docs.astro.build/en/guides/images/
- SEO and sitemap: https://docs.astro.build/en/guides/integrations-guide/sitemap/

Use established project patterns before introducing new architectural approaches.
