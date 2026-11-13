# ShareOrb — Product Brief & Landing Page Requirements

**Document type:** Product and website specification  
**Product:** ShareOrb  
**Website:** shareorb.app  
**Project:** Public marketing landing page  
**Status:** Initial design and frontend implementation  
**Primary technology:** Astro, TypeScript, Tailwind CSS

---

## 1. Product Overview

### What is ShareOrb?

ShareOrb is a mobile application that helps people manage and split shared expenses in groups.

It is designed for friends traveling together, couples sharing everyday expenses, roommates managing household costs, and anyone who regularly pays for things on behalf of others.

Instead of manually tracking expenses in spreadsheets, messaging applications, or personal notes, users can record shared expenses, assign who paid, choose how costs should be divided, and understand who owes whom.

ShareOrb aims to make shared financial responsibilities simpler, clearer, and less stressful.

### Brand tagline

**Split expenses. Not friendships.**

This is the official tagline and should be used consistently across the landing page.

### Product positioning

ShareOrb belongs to the shared-expense management category, alongside products such as Splitwise.

The website should communicate ShareOrb as a simple, modern, approachable solution for managing money shared between people.

The product must not be positioned as a bank, digital wallet, payment processor, or personal finance investment application.

### Core value proposition

Keep shared expenses organized, understand group balances, and spend less time figuring out who owes whom.

### Product philosophy

- Splitting expenses should be intuitive and transparent.
- Users should understand their balances without performing manual calculations.
- The application should reduce unnecessary friction when managing shared money.
- Important information should be easy to find and understand.
- Shared expense management should feel approachable rather than complicated.

---

## 2. Target Audience

### Primary audience

**Friends and travel groups**

Groups of friends sharing travel-related costs such as accommodation, transportation, groceries, restaurants, and activities.

Typical problem: Different people pay for different expenses, and keeping track of everything becomes confusing.

**Couples**

Partners sharing household costs, groceries, dining, subscriptions, and everyday expenses.

Typical problem: Keeping shared spending fair and transparent without constantly calculating balances.

**Roommates**

People sharing rent-related expenses, utilities, groceries, internet bills, and other household costs.

Typical problem: Managing recurring shared responsibilities while keeping track of contributions.

**Small informal groups**

Any group where one or more people pay for shared activities or purchases.

### User characteristics

- Prefer straightforward, mobile-first experiences.
- Want to avoid spreadsheets and manual calculations.
- Value clarity and transparency.
- May have different levels of technical experience.
- Want to quickly understand what they owe or are owed.

### Primary user motivation

Users do not necessarily want another financial application.

They want to solve a practical problem: **keeping shared expenses fair without unnecessary effort or awkward conversations.**

---

## 3. Key Product Features

The landing page must describe existing product capabilities accurately.

Do not introduce functionality that has not been verified.

### 3.1 Shared Expense Groups

Users can organize expenses into groups.

Examples include vacations, shared apartments, everyday household spending, and group activities.

Groups contain members and expenses associated with their shared spending.

**Website message:** Keep everything organized in one place.

### 3.2 Expense Tracking

Users can add expenses to a group and specify who paid.

Expenses are associated with group members, allowing ShareOrb to track individual contributions.

**Website message:** Record shared expenses as they happen.

### 3.3 Flexible Expense Splitting

ShareOrb supports different ways of dividing expenses.

Supported concepts include:

- Equal splits between participating members.
- Custom expense splits.
- Expenses paid by one member.
- Custom payment allocation where supported by the expense flow.

The user interface should emphasize flexibility without introducing unnecessary technical complexity.

**Website message:** Split expenses fairly, your way.

### 3.4 Group Balances

ShareOrb calculates balances using recorded payments and expense allocations.

Users can understand:

- How much each person has paid.
- How much each person owes.
- Whether a member has a positive or negative balance.
- Which members owe money to others.

The landing page should emphasize clarity and transparency rather than the underlying calculation implementation.

**Website message:** Always know who owes whom.

### 3.5 Settlement Overview

ShareOrb provides balance and settlement-related views to help users understand outstanding obligations.

Do not suggest that ShareOrb directly transfers money between bank accounts or processes payments.

Any claims about recording completed settlements must be verified against the current application before publication.

**Website message:** Make settling up easier.

### 3.6 Group Invitations

Users can invite others to participate in shared-expense groups through invitation links.

The experience should be described as simple and convenient.

**Website message:** Bring everyone into the same group.

### 3.7 Flexible Group Participation

The application supports management of group members, including participants who do not necessarily have registered user accounts.

This functionality may be useful in explaining flexible group participation, but it is not necessarily a primary marketing feature.

### 3.8 Multi-Currency Expenses

ShareOrb supports recording expenses in currencies that differ from the group's selected currency, with amounts converted for group accounting.

Avoid making claims about live exchange rates, guaranteed conversion accuracy, currency coverage, or supported currency counts unless verified.

**Website message:** Keep group spending organized across currencies.

### Feature prioritization

The most important features to communicate visually are:

1. Creating and managing groups.
2. Adding expenses.
3. Splitting expenses equally or using custom allocations.
4. Understanding balances and who owes whom.
5. Inviting group members.

Secondary features should be presented only where they improve the user's understanding.

---

## 4. Landing Page Objectives

### Primary objective

Introduce ShareOrb to potential users and encourage interest in joining the beta.

The main intended conversion action is:

**Join the Beta**

### Secondary objectives

- Explain what ShareOrb does within a few seconds.
- Demonstrate the core expense-management experience.
- Build confidence in the product through authentic visuals.
- Help visitors understand whether ShareOrb solves their problem.
- Allow interested visitors to find the contact form.
- Establish a professional, memorable brand identity.
- Build a strong technical SEO foundation.

### Primary success criteria

The initial website should:

- Look polished and professional on desktop and mobile.
- Explain the product clearly without requiring extensive reading.
- Present a compelling and easy-to-understand value proposition.
- Use authentic product visuals.
- Make the primary CTA easy to find.
- Load quickly and avoid unnecessary frontend JavaScript.
- Be accessible and responsive.
- Have a structure that allows backend integrations to be added later.

### Current limitations

Beta registrations and contact submissions are not part of the current implementation phase.

The design must prepare these workflows for future integration without implementing their server-side functionality.

---

## 5. Website Structure

The initial website should be a focused, single-page marketing experience.

The following structure is proposed and may be refined during design.

### 5.1 Navigation

Include:

- ShareOrb logo.
- Links to important landing page sections.
- A visually distinct Join Beta CTA.

Navigation should be responsive, minimal, and easy to use.

Mobile navigation must remain accessible and should not clutter the screen.

### 5.2 Hero Section

The Hero is the most important section of the website.

It must immediately communicate:

- What ShareOrb is.
- Why it is useful.
- What users should do next.

Content direction:

**Headline concept:** Shared expenses, without the hassle.

**Supporting text concept:** Track group expenses, split costs fairly, and see who owes whom — all in one place.

**Primary CTA:** Join the Beta

**Secondary CTA:** See How It Works

The headline and supporting text are proposed marketing copy, not mandatory final wording.

Visual direction:

- A prominent, authentic product interface.
- Clean typography with strong visual hierarchy.
- Restrained use of purple and lavender brand accents.
- Spacious layout and clear CTA placement.
- Optional use of the existing ShareOrb planet mascot where appropriate.

Avoid generic SaaS illustrations that do not communicate the product.

### 5.3 Problem and Value Section

Explain the common frustrations of shared expenses.

Possible scenarios:

- One person pays for accommodation.
- Another covers groceries.
- Someone else pays for dinner.
- At the end, nobody remembers the exact amounts.

Position ShareOrb as a simple way to maintain clarity.

Do not use overly negative or aggressive language.

### 5.4 How It Works

Explain the core experience through three or four simple steps.

Proposed sequence:

1. **Create a group** — Organize expenses for your trip, home, or activity.
2. **Add your expenses** — Record what was paid and by whom.
3. **Split the costs** — Choose how expenses should be divided.
4. **Check your balances** — Understand who owes whom.

Where possible, accompany these steps with genuine application screenshots.

### 5.5 Features Section

Highlight the most important ShareOrb capabilities.

Suggested feature cards:

- Everything in one group.
- Flexible expense splitting.
- Clear balances.
- Easy group invitations.
- Multi-currency expense tracking.

Avoid presenting too many features at once.

Prioritize comprehension over feature quantity.

### 5.6 Real-Life Use Cases

Show ShareOrb in relatable everyday scenarios:

**Travel together** — Keep shared vacation spending organized.

**Share a home** — Manage household costs with roommates.

**Split everyday costs** — Track spending between partners or friends.

This section should help visitors recognize themselves as potential users.

### 5.7 Beta Signup Section

Provide a dedicated, visually compelling section inviting visitors to express interest in beta access.

Suggested heading:

**Be among the first to try ShareOrb.**

Suggested supporting text:

Get ready for a simpler way to manage shared expenses.

This section should contain the beta signup form design described later in this document.

Do not promise immediate beta access, specific launch dates, or an automatic invitation unless confirmed.

### 5.8 FAQ Section

Provide concise answers to relevant visitor questions.

Potential topics:

- What is ShareOrb?
- Who is ShareOrb for?
- How does expense splitting work?
- Can I use ShareOrb while traveling?
- How can I participate in the beta?

Do not make unsupported claims about pricing, platform availability, data security, or launch schedules.

### 5.9 Contact Section

Provide an accessible way for users to find the Contact Us form.

The contact form should be visually consistent with the rest of the landing page.

Its functionality is intentionally deferred.

### 5.10 Footer

Include:

- ShareOrb logo or wordmark.
- Short product description or tagline.
- Navigation links.
- Contact link.
- Privacy Policy and Terms links only when valid destinations are available.
- Copyright information.

Do not introduce broken placeholder links into the production website.

---

## 6. Beta Signup Form — Design-Only Phase

### Purpose

The beta signup form is intended to collect interest from potential early users once the backend integration is available.

### Current scope

**Frontend UI implementation only.**

Implement the complete visual structure, responsive styling, field validation, accessibility, and interaction states.

Do not implement any API calls or data persistence.

### Proposed form fields

- Email address — required.
- Additional fields only if their product purpose is confirmed.

The beta form should remain short and easy to complete.

### Required design states

- Default form.
- Focused input.
- Invalid email input.
- Validation error.
- Disabled control.
- Loading state (design preview only).
- Success state (design preview only).
- Error state (design preview only).

Loading, success, and error states should be designed so they are ready for future API integration, but must not misrepresent actual submission behavior.

### Required behavior during this phase

- No POST requests.
- No backend integration.
- No mailing-list provider integration.
- No email submission.
- No localStorage, cookies, or database persistence of submitted information.
- No fabricated successful submission.
- No fake network calls.

In public-facing builds, the form must not pretend to accept registrations.

Until the integration is implemented, the submission action should remain disabled or explicitly communicate that beta applications are not yet being accepted.

UI states can be previewed using development-only mechanisms.

### Future implementation

A backend endpoint for beta registrations will be integrated separately.

This future integration is explicitly outside the current task scope.

---

## 7. Contact Us Form — Design-Only Phase

### Purpose

Allow visitors to reach the ShareOrb team once the contact submission workflow has been integrated.

### Proposed form fields

- Name — required.
- Email — required.
- Message — required.

Optional fields should not be introduced without a clear reason.

### Required design states

- Empty form.
- Focused field.
- Required field error.
- Invalid email error.
- Message validation feedback.
- Disabled submit button.
- Loading preview.
- Success preview.
- Error preview.

### Current functional restrictions

- No API integration.
- No email provider integration.
- No messages sent.
- No stored submissions.
- No fake successful messages.
- No production behavior that implies a message has actually been delivered.

The form may be fully styled and validated on the client, but actual submission must remain inactive until the backend is available.

### Future considerations

A later implementation phase may include:

- Backend contact endpoint.
- Spam and bot protection.
- Server-side input validation.
- Request throttling.
- Email delivery integration.
- Secure environment configuration.

These are future implementation requirements, not current tasks.

---

## 8. Brand Identity

### Brand name

ShareOrb

Use consistent capitalization across the website.

### Official tagline

Split expenses. Not friendships.

### Brand personality

ShareOrb should feel:

- Friendly.
- Modern.
- Trustworthy.
- Clear.
- Approachable.
- Mature.
- Confident.
- Calm and organized.

### Visual direction

The existing application uses a purple/lavender visual language and planet-themed brand illustrations.

The website should feel like a natural extension of the mobile application.

It should not look like an unrelated product.

### Visual styles to avoid

- Excessively childish or kawaii aesthetics.
- Overly saturated neon purple.
- Excessive glow effects.
- Heavy glassmorphism used without purpose.
- Generic AI-generated SaaS aesthetics.
- Too many floating decorative elements.
- Overly complex animations.
- Unnecessary gradients across every component.
- Poor contrast or small unreadable text.

### Brand assets

Before finalizing visual styles, obtain and inspect:

- Official ShareOrb logo.
- Official wordmark.
- Correct planet mascot illustrations.
- Exact brand colors.
- Font families and weights.
- Existing application screenshots.
- Any reusable background illustrations.

**Important:** Do not invent exact brand tokens or recreate official assets from memory.

If assets are missing, use clearly temporary development placeholders and flag the missing information.

---

## 9. Design and User Experience Principles

### 9.1 Mobile-First Design

The entire landing page must be responsive.

Start with mobile usability, then adapt layouts for tablet and desktop.

Avoid horizontal overflow, cramped cards, and unreadable text.

### 9.2 Visual Hierarchy

Each section should have:

- A clear primary message.
- Supporting content.
- An obvious next action where needed.
- Consistent spacing and alignment.

Not every section needs its own CTA.

### 9.3 Readability

Prioritize readable typography, comfortable line lengths, sufficient contrast, and concise descriptions.

### 9.4 Consistency

Use reusable components, design tokens, consistent spacing, and standardized button/input styles.

### 9.5 Intentional Motion

Animations should improve understanding or provide subtle feedback.

Use restrained transitions and reveal effects where appropriate.

Respect `prefers-reduced-motion`.

### 9.6 Authentic Product Presentation

Prefer real screenshots and genuine application imagery.

Do not fabricate application screens or display features that do not exist.

### 9.7 Accessibility

Use semantic HTML, keyboard-accessible interactions, visible focus indicators, accessible form labels, and appropriate image alternative text.

Target WCAG 2.2 AA where practical.

### 9.8 Conversion Without Manipulation

Use clear CTAs and persuasive but factual copy.

Avoid artificial urgency, misleading scarcity, fake reviews, or fictional usage statistics.

---

## 10. Content and Copywriting

### Language

The initial website content should be written in English.

The copy should be understandable to an international audience.

### Tone of voice

Use natural, concise, friendly language.

The tone should be professional but not corporate or overly formal.

### Writing guidelines

- Focus on user benefits before technical features.
- Use short, meaningful headlines.
- Avoid unnecessary financial terminology.
- Make CTA labels clear and consistent.
- Use concrete examples of shared expenses.
- Avoid exaggerated marketing claims.

### Claims that must not be invented

Do not invent:

- User counts.
- App download counts.
- Customer testimonials.
- Ratings or reviews.
- Awards.
- Savings percentages.
- Claims of being the best or fastest product.
- Pricing or subscription plans.
- Launch dates.
- Security certifications.
- Guaranteed beta access.
- Supported platforms without verification.
- Features not implemented in the product.

All published claims must correspond to actual product capabilities or confirmed business information.

---

## 11. SEO Requirements

The website should establish a strong technical SEO foundation.

### Technical requirements

- Semantic HTML.
- Correct heading hierarchy.
- Descriptive page title.
- Unique meta description.
- Canonical URL.
- Open Graph metadata.
- Social sharing image.
- Responsive image handling.
- Descriptive image alt text.
- Sitemap generation.
- Robots.txt configuration.
- Structured data where relevant and factually accurate.

### Search intent

The site should naturally address topics such as:

- Splitting expenses with friends.
- Managing group expenses.
- Sharing travel costs.
- Splitting household expenses.
- Tracking who owes whom.

These are content themes, not instructions to repeat keywords unnaturally.

### Performance objectives

Aim for excellent Core Web Vitals and Lighthouse results.

Prioritize:

- Fast initial rendering.
- Optimized images.
- Minimal client-side JavaScript.
- Avoiding unnecessary dependencies.
- Stable layouts without unexpected content shifts.

Do not compromise design quality or usability merely to achieve an arbitrary Lighthouse score.

---

## 12. Technical Architecture and Scope

### Technology stack

- Astro.
- TypeScript.
- Tailwind CSS.
- Static-first rendering.
- Component-based page composition.

Additional libraries should be introduced only when they provide a clear benefit.

### Implementation principles

- Prefer Astro components for static content.
- Avoid unnecessary client-side frameworks.
- Use reusable components for repeated UI patterns.
- Maintain a clean project structure.
- Keep layout and design tokens centralized.
- Write maintainable TypeScript.
- Avoid premature abstractions.
- Avoid dependencies that duplicate built-in browser functionality.

### Current development phase

**Phase 1 — Landing Page Design and Frontend**

In scope:

- Brand-aligned visual design.
- Landing page structure.
- Responsive layouts.
- Reusable frontend components.
- Typography, spacing, colors, and visual assets.
- Navigation and section scrolling.
- Static content and feature presentation.
- Real application screenshots.
- Beta signup form UI.
- Contact form UI.
- Client-side form validation.
- Design previews of form states.
- Accessibility.
- SEO metadata and technical SEO.
- Image and asset optimization.
- Appropriate animations.
- Frontend quality checks.
- Production-ready frontend build, excluding backend-dependent submission functionality.

### Explicitly out of scope

During Phase 1, do not implement:

- Beta registration API.
- Contact submission API.
- Resend integration.
- Email sending.
- Database persistence for form submissions.
- Server-side form handlers.
- Bot protection integration.
- Cloudflare Turnstile integration.
- Backend authentication.
- Backend business logic.
- Any fabricated submission flow.

Do not install or configure backend-related services simply because they may be needed later.

### Future phase — Backend Integration

A separate development task will implement:

- Beta signup submission.
- Contact form submission.
- Server-side validation.
- Spam protection.
- Email delivery or other approved data-handling mechanisms.
- Appropriate success/error handling based on real API responses.

The frontend should be structured so the future backend can be integrated without redesigning the forms.

---

## 13. Development Workflow for Codex

Before implementing a website feature:

1. Read this product brief.
2. Review relevant project instructions in `AGENTS.md`.
3. Inspect the existing implementation and reusable components.
4. Check whether required brand assets are available.
5. Identify missing information or assumptions.
6. For substantial changes, propose an implementation plan.
7. Implement only the requested scope.
8. Verify responsive behavior.
9. Check accessibility and semantic structure.
10. Run the available project validation and build commands.

### Critical implementation constraints

- Do not introduce unrequested backend functionality.
- Do not replace real product features with invented ones.
- Do not introduce new design conventions that contradict approved brand assets.
- Do not fabricate API responses or user testimonials.
- Do not refactor unrelated code without justification.
- Do not add large frontend frameworks without clear technical need.
- Do not claim a feature is operational when only its interface exists.

---

## 14. Missing Information and Decisions

The following details require confirmation before final styling or publication.

### Brand

- [ ] Official logo and wordmark assets.
- [ ] Primary and secondary color values.
- [ ] Typography system.
- [ ] Correct planet mascot assets.
- [ ] Existing illustrations and background elements.

### Product

- [ ] Final list of publicly advertised features.
- [ ] Real screenshots approved for marketing.
- [ ] Confirmed Android and iOS availability.
- [ ] Official app store URLs, if available.
- [ ] Beta access and invitation policy.
- [ ] Pricing information, if it will be public.

### Website

- [ ] Final Hero copy.
- [ ] Approved section structure.
- [ ] Final CTA wording.
- [ ] Beta form field requirements.
- [ ] Contact form field requirements.
- [ ] Legal pages and valid destinations.
- [ ] Open Graph image.
- [ ] Approved footer content.

Unconfirmed information must not be silently transformed into final product claims.

---

## 15. Definition of Done — Phase 1

The initial landing page implementation is complete when:

- The website has a cohesive, brand-aligned visual identity.
- All approved landing page sections are implemented.
- Layouts work across common mobile, tablet, and desktop sizes.
- Navigation and internal section links work correctly.
- Real product imagery is integrated where available.
- The Beta Signup form is visually complete.
- The Contact Us form is visually complete.
- Both forms have appropriate client-side validation and UI states.
- Neither form sends requests or falsely claims successful delivery.
- Accessibility and responsive behavior have been reviewed.
- SEO metadata and basic technical SEO are implemented.
- Images and frontend assets are optimized.
- The production build completes successfully.
- The project is structured for future backend integration without major frontend rework.

**The goal of Phase 1 is a complete, polished, performant ShareOrb marketing website — not a functioning beta-registration or contact-processing system.**