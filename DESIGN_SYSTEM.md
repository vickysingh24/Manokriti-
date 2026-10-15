# Manokriti --- Swiss International Design System

**Purpose:** A reusable visual and interaction standard for Manokriti's
website and future digital products.

**Design direction:** Swiss International / International Typographic
Style\
**Version:** 1.0\
**Status:** Initial design specification

------------------------------------------------------------------------

## 1. Design philosophy

Manokriti's interface should communicate with clarity, structure, and
confidence. Treat typography as the primary visual element, use a
disciplined grid, and remove decoration that does not improve
comprehension.

Core principles:

1.  **Clarity over decoration:** Every visual choice should help users
    understand content or take action.
2.  **Grid-led layouts:** Use consistent columns, visible dividers, and
    deliberate asymmetry.
3.  **Typography as structure:** Use strong scale and weight to
    establish hierarchy.
4.  **Purposeful whitespace:** Give important content room to breathe.
5.  **Flat visual language:** Avoid drop shadows, glass effects,
    gradients, and unnecessary rounded corners.
6.  **Accessible by default:** Maintain readable contrast, visible
    keyboard focus, semantic markup, and comfortable touch targets.

## 2. Design tokens

Centralize these values in the project's existing token system instead
of repeating one-off values throughout components.

### Colors

  -----------------------------------------------------------------------
  Token                   Value                   Intended use
  ----------------------- ----------------------- -----------------------
  `--color-background`    `#FFFFFF`               Main page canvas

  `--color-foreground`    `#000000`               Main text and strong
                                                  structure

  `--color-muted`         `#F2F2F2`               Secondary surfaces and
                                                  alternating sections

  `--color-accent`        `#FF3000`               Primary actions,
                                                  section numbers, and
                                                  meaningful emphasis

  `--color-border`        `#000000`               Grid lines, card
                                                  borders, and separators
  -----------------------------------------------------------------------

Use Swiss red sparingly as a functional signal, not as decoration. Check
text contrast before using red for small text.

### Typography

-   **Primary typeface:** Inter, with a sensible system sans-serif
    fallback.
-   **Headings:** Bold or Black weights (700--900), usually uppercase.
-   **Body:** Regular or Medium weights (400--500), sentence case for
    readability.
-   **Large display type:** Tight tracking and responsive sizing.
-   **Small labels:** Uppercase with wider letter spacing.
-   **Alignment:** Prefer left alignment and ragged-right text.

Suggested responsive display scale: - Mobile: approximately `3.75rem`
for the main headline, adjusted when needed to avoid overflow. - Tablet:
approximately `6rem`. - Desktop: approximately `8–10rem` when the
content and viewport support it.

Do not force uppercase on long body copy, product descriptions, form
labels, or accessibility text.

### Borders, corners, and depth

-   **Corner radius:** `0` by default.
-   **Borders:** Use clear 2--4px borders for primary grid structures;
    use thinner dividers where a heavy border would create visual noise.
-   **Shadows:** None by default.
-   **Depth:** Create hierarchy through borders, spacing, typography,
    and subtle CSS patterns rather than shadows.

### Spacing

Use the project's existing spacing scale where possible. Prefer
consistent, reusable spacing tokens over arbitrary values. Narrative
sections should have generous spacing; dense data tables may use tighter
spacing while remaining readable.

## 3. Background textures

Use CSS-generated textures selectively on white or muted-gray surfaces.
Keep them subtle enough that text remains easy to read.

-   `.swiss-grid-pattern`: 24px grid lines at roughly 3% opacity.
-   `.swiss-dots`: 16px dot matrix at roughly 4% opacity.
-   `.swiss-diagonal`: 45-degree lines at roughly 2% opacity.
-   `.swiss-noise`: optional paper-grain overlay at roughly 1.5%
    opacity.

Do not apply these textures to pure-black or Swiss-red surfaces. Prefer
lightweight CSS patterns; avoid adding a dependency solely for texture.
If using SVG noise, keep it decorative and ensure it does not interfere
with interaction or text selection.

## 4. Layout system

-   Use a consistent responsive container and column grid.
-   Prefer asymmetric compositions such as 8:4, 7:5, or 5:7 where they
    improve hierarchy.
-   Align text and components to the same grid.
-   Use visible borders and horizontal/vertical separators to
    communicate structure.
-   Use numbered section labels, for example `01. SYSTEM`, `02. METHOD`,
    `03. ADVANTAGES`, and `04. JOURNAL`.
-   Avoid centered layouts by default; use them only when the content
    calls for them.
-   Ensure the mobile layout remains clear and does not create
    horizontal scrolling.

## 5. Component guidelines

### Buttons

-   Rectangular, with no rounded corners.
-   **Primary:** black background with white text.
-   **Secondary:** white background, black border, black text.
-   Use uppercase, bold labels where concise.
-   Hover and active states should provide immediate, clear feedback
    through color inversion or a red accent.
-   Provide a visible red keyboard-focus outline.
-   Aim for a minimum 44 × 44px touch target.

### Cards and containers

-   Use white or muted-gray surfaces with clearly defined borders.
-   Use consistent padding, generally generous on desktop and reduced
    appropriately on mobile.
-   Avoid default drop shadows and decorative rounding.
-   Interactive cards should clearly indicate hover and focus states.
    Use color inversion only when contrast remains accessible.

### Inputs

-   Use underlined or rectangular black borders.
-   On focus, change the border to Swiss red.
-   Include persistent labels; do not rely on placeholder text alone.
-   Show clear validation messages and programmatically associate them
    with the relevant field.

### Navigation

-   Keep labels concise and information architecture obvious.
-   Use a collapsible mobile navigation with an accessible toggle and
    keyboard support.
-   Optional vertical-slide hover effects must not be the only way users
    can understand a link.
-   Ensure focus states are as clear as hover states.

### Product and content cards

For Manokriti's expanding catalog, use reusable card patterns for
digital books, PDFs, courses, research, frameworks, memberships,
and---if needed later---physical products. Each card should prioritize
title, concise description, price or category where relevant, and one
clear action. Do not create a separate visual system for every product
category.

## 6. Motion and interaction

-   Keep transitions short and purposeful: roughly 150--200ms.
-   Prefer immediate color inversion, simple position changes, and
    functional icon rotation.
-   Avoid springy or decorative motion.
-   Respect `prefers-reduced-motion`.
-   Do not communicate state through animation or color alone.

## 7. Responsive behavior

### Mobile: below 768px

-   Stack multi-column sections into one column.
-   Keep display typography bold but prevent clipping and horizontal
    overflow.
-   Keep primary actions easy to tap and often full-width when
    appropriate.
-   Preserve clear borders and spacing without letting them overwhelm
    the content.
-   Use a compact navigation.

### Tablet: 768--1024px

-   Introduce two-column layouts where useful.
-   Maintain readable line lengths and comfortable touch targets.
-   Reduce large display type if the grid becomes crowded.

### Desktop: 1024px and above

-   Use the full asymmetric grid where appropriate.
-   Allow multi-column product, journal, and feature layouts.
-   Use sticky section navigation only when it improves orientation and
    does not obscure content.

Treat these breakpoints as starting points, not rigid rules. Follow the
existing codebase's responsive conventions when they are already
established.

## 8. Accessibility requirements

-   Use semantic HTML and a logical heading hierarchy.
-   Ensure keyboard access to all interactive elements.
-   Provide a clearly visible `:focus-visible` treatment, using a 2px
    Swiss-red outline with suitable offset where practical.
-   Check contrast for all text and interactive states; do not assume
    every red-on-white combination meets WCAG AA.
-   Use descriptive accessible names for icon-only controls.
-   Respect reduced-motion preferences.
-   Ensure controls have touch targets of at least 44 × 44px where
    practical.
-   Give meaningful images appropriate alternative text; mark purely
    decorative visuals as decorative.

## 9. Implementation principles

Before changing styles or adding components:

1.  Identify the actual framework, styling system, global styles, and
    existing component conventions.
2.  Reuse existing tokens and primitives where possible.
3.  Define shared tokens centrally (CSS custom properties, Tailwind
    theme, or the project's established equivalent).
4.  Build composable components instead of duplicating page-specific
    styles.
5.  Avoid adding a new UI or icon dependency unless the codebase needs
    it.
6.  Preserve existing behavior and improve responsive and accessible
    states.
7.  Verify the result at mobile, tablet, and desktop widths.

Do not assume the project uses React, Tailwind, or `lucide-react` until
the repository confirms it. Adapt these guidelines to the actual stack.

## 10. Manokriti brand application

The visual system should support one evolving brand rather than a single
product landing page. Keep the global navigation and design language
stable as new offerings are introduced.

Potential top-level destinations: - **Library:** PDFs, e-books, and
other downloadable products. - **Courses:** Structured learning
products. - **Research:** Articles, analysis, and useful references. -
**Frameworks:** Checklists, templates, and practical tools. - **About:**
The purpose and principles behind Manokriti.

Only publish categories that have real content. The navigation should
grow with the catalog rather than showing empty sections.

## 11. Repository usage

Save this file at the repository root as `DESIGN_SYSTEM.md` so it is
easy to find and reference.

When asking a coding agent to work on the website, instruct it to: -
Read `DESIGN_SYSTEM.md` first. - Inspect the existing codebase before
proposing edits. - Follow the current stack and component conventions. -
Centralize tokens and reuse components. - Explain the proposed changes
before making broad refactors. - Test responsive layouts and
accessibility after implementation.

This file documents the design rules; it does not replace inspecting the
repository or validating the implementation.
