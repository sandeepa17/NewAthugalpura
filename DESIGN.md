# Design System Document

## 1. Overview & Creative North Star: "The Global Attaché"
This design system moves away from the "template" aesthetic of traditional recruitment sites. Our Creative North Star is **"The Global Attaché"**—a visual identity that feels like a high-end editorial travel journal crossed with a prestigious diplomatic office. 

We achieve this through **Intentional Asymmetry** and **Tonal Depth**. Instead of rigid, centered grids, we utilize wide-margin layouts, overlapping imagery, and a dramatic typography scale that feels authoritative yet bespoke. The goal is to convey "New Athugalpura Agencies" not just as a labor recruiter, but as a premium gateway to international careers.

---

## 2. Colors: Tonal Architecture
The palette is rooted in the "Brick Ember" of prestige and the "Cream" of heritage. We do not use flat colors; we use a hierarchy of surfaces.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to define sections or containers. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section sitting on a `surface` background provides all the separation needed without the "cheapening" effect of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as physical layers of fine paper and frosted glass.
- **Base Layer:** `surface` (#FFF9EF) for the main page body.
- **Nesting:** Place a `surface-container-lowest` (#FFFFFF) card inside a `surface-container-low` (#F9F3E9) section. This "recessed" look creates sophisticated depth.
- **The Glass & Gradient Rule:** For navigation bars or floating action cards, use Glassmorphism. Apply `surface` at 80% opacity with a `20px` backdrop-blur. 
- **Signature Textures:** Use a subtle linear gradient for primary CTAs: `primary-container` (#C10000) to `primary` (#940000) at a 135-degree angle. This adds "soul" and prevents the Brick Ember from looking flat.

---

## 3. Typography: Editorial Authority
We utilize a triad of typefaces to separate "Action," "Information," and "Authority."

*   **Display & Headlines (Manrope):** Our authoritative voice. Use `display-lg` for hero statements with tight letter-spacing (-0.02em) to feel premium.
*   **Body (Be Vietnam Pro):** Chosen for its global, modern legibility. Elegant and spacious.
*   **Labels (Inter):** Used for technical data, country listings, and metadata.

| Role | Token | Font | Size | Case/Weight |
| :--- | :--- | :--- | :--- | :--- |
| **Hero Title** | `display-lg` | Manrope | 3.5rem | Bold (700) |
| **Section Head** | `headline-lg` | Manrope | 2.0rem | Semi-Bold (600) |
| **Body Text** | `body-lg` | Be Vietnam Pro | 1.0rem | Regular (400) |
| **Metadata** | `label-md` | Inter | 0.75rem | Medium (500) |

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often a crutch for poor layout. In this system, we use light and layering.

*   **The Layering Principle:** Depth is achieved by stacking. A `surface-container-highest` (#E7E2D8) element on a `surface` (#FFF9EF) background creates a "natural lift."
*   **Ambient Shadows:** If a floating effect is required (e.g., a high-priority "Apply Now" card), use an extra-diffused shadow: `box-shadow: 0 20px 40px rgba(29, 27, 22, 0.06);`. The shadow color is a tint of `on-surface`, never pure black.
*   **The Ghost Border Fallback:** If accessibility requires a container edge, use the `outline-variant` token (#E7BDB6) at **15% opacity**. 
*   **Glassmorphism:** Use semi-transparent `surface-variant` with a blur for elements that hover over high-quality travel imagery.

---

## 5. Components

### Buttons & Interaction
*   **Primary Button:** `primary` background, `on-primary` text. Shape: `md` (0.375rem). Use a 2px "Gold" (`secondary`) underline on hover to tie in the brand's secondary accent.
*   **Secondary/Outlined:** Use a "Ghost Border" approach. No background, `outline-variant` at 20% opacity, and `primary` text.

### Cards & Listings
*   **The "No-Divider" Rule:** Forbid the use of divider lines in lists. Use `spacing-6` (2rem) of vertical whitespace or a shift to `surface-container-low` to separate items.
*   **Imagery:** Cards featuring countries or job sectors should use "Bleed Imagery"—photos that touch the top and sides of the card with a `xl` (0.75rem) corner radius.

### Input Fields
*   **Style:** Minimalist. No four-sided boxes. Use a bottom-only border (2px) of `outline-variant`. On focus, animate the border to `secondary` (Gold) and shift the background to `surface-container-highest`.

### Signature Components for Recruitment
*   **The Visa Tracker/Timeline:** A vertical stepped component using `secondary_fixed` (Gold) for completed steps and `surface-dim` for pending, using `spacing-10` between nodes.
*   **Global Ambient Map:** A background-integrated map using `outline-variant` for landmasses and `surface-container` for oceans, with `primary` pulses on recruitment hubs.

---

## 6. Do's and Don'ts

### Do:
*   **Embrace Whitespace:** Use `spacing-20` (7rem) between major sections to let the "Editorial" feel breathe.
*   **Asymmetric Imagery:** Place a portrait-oriented image of a professional environment slightly offset from its text container.
*   **Tonal Transitions:** Use background color shifts to guide the user’s eye from "Discovery" (Cream) to "Action" (Brick Ember).

### Don't:
*   **No "Heavy" Shadows:** Never use shadows with an opacity higher than 10%.
*   **No Pure Black:** Text should always be `on-surface` (#1D1B16), which is a deep charcoal, never #000000.
*   **No Default Grids:** Avoid the "3-column card row" whenever possible. Try a 2-column layout where one side is an image and the other contains two stacked content blocks.
*   **No Standard Icons:** Use thin-stroke (1.5px) custom icons in `primary` or `secondary` colors. Avoid filled, bulky icons.