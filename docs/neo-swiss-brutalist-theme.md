# Neo-Swiss Brutalist Theme Guide

**Status:** Active
**Created:** 2025-12-05
**Last Updated:** 2025-12-05

---

## Overview

This theme combines **Neo-Swiss** design principles (clean typography, systematic grid, functional clarity) with **Brutalist** accents (harsh shadows, monospace typography, bold borders, raw aesthetics).

---

## Design Tokens

### Brutalist Variables (in `@theme`)

| Variable | Value | Usage |
|----------|-------|-------|
| `--border-brutal` | `4px` | Bold border width |
| `--shadow-brutal` | `6px 6px 0` | Standard harsh shadow |
| `--shadow-brutal-lg` | `10px 10px 0` | Large harsh shadow |
| `--color-brutal-yellow` | `#FFFF00` | Highlight/marker color |

### Typography

| Variable | Value | Usage |
|----------|-------|-------|
| `--font-mono` | SF Mono, Monaco, etc. | Brutalist text elements |

---

## Utility Classes

### Typography

| Class | Effect |
|-------|--------|
| `.font-mono` | Monospace font family |
| `.text-brutal` | Mono + uppercase + letter-spacing |

### Shadows

| Class | Effect |
|-------|--------|
| `.shadow-brutal` | 6px offset black shadow |
| `.shadow-brutal-lg` | 10px offset black shadow |
| `.shadow-brutal-accent` | 6px offset red shadow |

### Borders

| Class | Effect |
|-------|--------|
| `.border-brutal` | 4px border width |
| `.border-brutal-accent` | 4px red border |

### Special Effects

| Class | Effect |
|-------|--------|
| `.highlight-brutal` | Yellow marker highlight (50% underline) |
| `.no-transition` | Removes all CSS transitions |
| `.offset-brutal` | 4px top/left offset positioning |

### Button Variant

| Class | Effect |
|-------|--------|
| `.button-brutal` | Mono font, 4px border, shadow, push-down hover effect |

### Mobile Hamburger Menu

The hamburger menu appears on screens ≤768px with these Brutalist features:
- **48x48px black button** with 4px border
- **Three 4px-thick lines** that animate to X on open
- **Full-width dropdown** with black background
- **Red accent border** at top of dropdown
- **10px offset shadow** on dropdown
- **Red hover state** on menu items

```html
<button class="hamburger-btn" data-menu-toggle aria-expanded="false">
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
  <span class="hamburger-line"></span>
</button>
```

---

## Usage Patterns

### Hero Titles
```html
<h1>About <span class="highlight-brutal">MyWebClass.org</span></h1>
```

### Section Headings
```html
<h2 class="text-brutal">Featured Design Styles</h2>
```

### Primary CTA Buttons
```html
<a href="/submit/" class="button button-brutal">Submit Your Design</a>
```

### Feature Cards/Boxes
```html
<div class="shadow-brutal" style="padding: var(--spacing-lg); border: 2px solid var(--color-primary);">
  <h2 class="text-brutal">Section Title</h2>
  <p>Content here...</p>
</div>
```

### Large CTA Sections
```html
<div class="shadow-brutal-lg" style="padding: var(--spacing-xl); border: var(--border-brutal) solid var(--color-primary);">
  <h2 class="text-brutal">Get Involved</h2>
  <a href="/submit/" class="button button-brutal">Take Action</a>
</div>
```

---

## Current Implementation Status

### Completed

| Component | Brutalist Elements |
|-----------|-------------------|
| **Header** | `.font-mono` on logo and nav, Brutalist hamburger menu |
| **Footer** | `.font-mono` on headings and copyright |
| **Homepage** | `highlight-brutal`, `text-brutal`, `shadow-brutal`, `button-brutal` |
| **Gallery** | `highlight-brutal`, `text-brutal`, `shadow-brutal-lg`, `button-brutal` |
| **Submit** | `highlight-brutal`, `shadow-brutal`, `button-brutal` |
| **About** | `highlight-brutal`, `text-brutal`, `shadow-brutal`, `shadow-brutal-lg`, `button-brutal` |
| **Style Detail** | `highlight-brutal`, `text-brutal`, `font-mono`, `button-brutal` |

### Inconsistencies - RESOLVED ✓

All inconsistencies have been fixed as of 2025-12-05:

#### 1. Button Classes - ✓ Fixed
- `style-detail.njk` → `button-brutal`
- `gallery-page.njk` → `button-brutal`
- `submit.njk` → `button-brutal`
- `cookie-consent.njk` → Kept as `button-primary` (system UI)

#### 2. Border Styles - ✓ Fixed
- All Brutalist boxes now use `border: var(--border-brutal) solid`

#### 3. Missing Brutalist Styling - ✓ Fixed
- `style-detail.njk` → Added `highlight-brutal`, `text-brutal`, `font-mono`, `button-brutal`
- `cookie-consent.njk` → Intentionally kept clean (system UI)

---

## Design Decisions

### Keep As-Is

- **Cookie consent** → Clean `button-primary`/`button-secondary` for system UI clarity
- **Secondary buttons** → `button-secondary` for less prominent actions (e.g., "Browse Gallery", "View Source Code")

### Future Considerations

- Consider a `.card-brutal` variant for cards with harsher treatment
- Add dark mode Brutalist variant with inverted colors
- Consider `.input-brutal` for form inputs with bold borders

---

## File References

| File | Purpose |
|------|---------|
| `src/assets/css/main.css` | Theme tokens and utility classes (lines 51-55, 91-95, 1027-1100) |
| `src/_includes/components/header.njk` | Header with mono typography |
| `src/_includes/components/footer.njk` | Footer with mono typography |
| `src/index.njk` | Homepage with full Brutalist treatment |
| `src/gallery-page.njk` | Gallery with Brutalist CTAs |
| `src/submit.njk` | Submit form with Brutalist styling |
| `src/about.njk` | About page with comprehensive Brutalist treatment |
| `src/assets/js/menu.js` | Hamburger menu toggle JavaScript |

---

## Change Log

| Date | Change |
|------|--------|
| 2025-12-05 | Initial Brutalist theme implementation |
| 2025-12-05 | Documentation created, inconsistencies identified |
| 2025-12-05 | All inconsistencies resolved - buttons, borders, style-detail.njk |
| 2025-12-05 | Added Brutalist hamburger menu for mobile navigation |
