# MyWebClass.org - Component Inventory

## Overview

This document catalogs all UI components in the MyWebClass.org project, organized by type and usage.

## 1. Layout Components

### 1.1 Base Layout (`base.njk`)

**Location:** `src/_includes/layouts/base.njk`
**Lines:** 45

**Purpose:** HTML document shell providing structure for all pages

**Features:**
- DOCTYPE and HTML structure
- Meta tags (SEO, OpenGraph, Twitter)
- Google Fonts preconnect (Inter)
- CSS link to compiled Tailwind
- Skip link for accessibility
- Includes navigation, footer, cookie banner
- Script loading with `defer`

**Blocks:**
- `head` - Additional head content
- `content` - Main page content
- `scripts` - Additional scripts

**Usage:** Extended by all pages

---

### 1.2 Page Layout (`page.njk`)

**Location:** `src/_includes/layouts/page.njk`
**Lines:** 19

**Purpose:** Standard content page with title/description header

**Features:**
- Title and description header
- Prose styling for content
- Max-width container

**Usage:** Extended by about, privacy, terms, cookies pages

---

## 2. Navigation Components

### 2.1 Navigation Bar (`navigation.njk`)

**Location:** `src/_includes/components/navigation.njk`
**Lines:** 70

**Purpose:** Site header with responsive navigation

**Features:**
- Logo with "M" monogram
- Desktop nav links (Gallery, About, Submit, Instructor)
- CTA button ("Submit Demo")
- Mobile hamburger menu with toggle
- Sticky positioning (top: 0)
- 2px black border bottom

**States:**
- Active link highlighting based on `page.url`
- Mobile menu expand/collapse
- Menu icon ↔ close icon toggle

**ARIA:**
- `aria-label="Main navigation"`
- `aria-expanded` on menu button
- `aria-controls` pointing to mobile menu

---

### 2.2 Footer (`footer.njk`)

**Location:** `src/_includes/components/footer.njk`
**Lines:** 50

**Purpose:** Site footer with links and credits

**Features:**
- 4-column grid layout (responsive)
- Logo and tagline
- Gallery links
- Resources links
- Legal links
- Copyright and tech stack credit

**Sections:**
1. Brand (logo + description)
2. Gallery (Swiss, Bauhaus, Brutalism, All)
3. Resources (Submit, About, How It Works)
4. Legal (Privacy, Terms, Cookies)

---

## 3. Form Components

### 3.1 Cookie Banner (`cookie-banner.njk`)

**Location:** `src/_includes/components/cookie-banner.njk`
**Lines:** 35

**Purpose:** GDPR-compliant cookie consent dialog

**Features:**
- Fixed position at bottom
- Black background, white text
- Three buttons: Preferences, Reject All, Accept All
- Link to Privacy Policy
- Hidden by default (shown via JavaScript)

**ARIA:**
- `role="dialog"`
- `aria-label="Cookie consent"`

---

### 3.2 Form Field Macros (`form-field.njk`)

**Location:** `src/_includes/macros/form-field.njk`
**Lines:** 79

**Purpose:** Reusable form input components

**Macros:**

#### `input(name, label, type, placeholder, required, helpText)`
- Text, email, URL inputs
- Required indicator
- Helper text support
- Autocomplete for email

#### `select(name, label, options, required, helpText)`
- Dropdown with placeholder option
- Options array with value/label

#### `textarea(name, label, rows, placeholder, required, helpText)`
- Multi-line text input
- Configurable rows
- Resize: vertical only

#### `checkbox(name, label, required)`
- Checkbox with inline label
- Safe HTML support in label

---

## 4. Display Components

### 4.1 Gallery Card (`card.njk`)

**Location:** `src/_includes/macros/card.njk`
**Lines:** 32

**Purpose:** Design style preview card for gallery

**Features:**
- Thumbnail area with accent color background
- Emoji/icon display
- Title with hover color change
- Era badge
- Description text
- "View Demo" link with arrow
- Color accent square

**States:**
- Hover: shadow effect
- Group hover: title color change

**Props:** `style` object with:
- `title`, `slug`, `era`, `thumbnail`, `accentColor`, `description`

---

### 4.2 Button (`button.njk`)

**Location:** `src/_includes/macros/button.njk`
**Lines:** 12

**Purpose:** Reusable button/link component

**Macro:** `button(text, href, variant, type, classes)`

**Variants:**
- `primary` - Black background
- `secondary` - Bordered
- `text` - Text only

**Output:**
- `<a>` if href provided
- `<button>` otherwise

---

### 4.3 Status Badge (`badge.njk`)

**Location:** `src/_includes/macros/badge.njk`
**Lines:** 17

**Purpose:** Status indicator badges

**Macro:** `statusBadge(status)`

**Variants:**
| Status | Class | Colors |
|--------|-------|--------|
| pending | `.badge-pending` | Yellow background, dark text |
| approved | `.badge-approved` | Green background, dark text |
| rejected | `.badge-rejected` | Red background, dark text |
| submitted | `.badge-submitted` | Blue background, dark text |

---

## 5. Page Components

### 5.1 Homepage Sections

**Location:** `src/pages/index.njk`

#### Hero Section
- Black background
- 12-column grid (8/4 split)
- Display headline with accent color
- Lead paragraph
- Two CTA buttons
- Swiss geometric decoration

#### Stats Bar
- 4-column grid
- Bordered sections
- Large numbers with labels

#### Gallery Section
- Section header with filter buttons
- 3-column card grid
- Filters by status (approved only shown)

#### How It Works Section
- Gray background
- 4-step process
- Large step numbers
- Title and description per step

#### CTA Section
- Black background
- Centered text
- Single CTA button

---

### 5.2 Admin Dashboard Components

**Location:** `src/pages/admin.njk`

#### Header
- Title and description
- User info (mocked)
- Logout button

#### Tab Navigation
- Three tabs: Pending, Approved, Rejected
- Count badges
- Active state styling
- JavaScript switching

#### Submissions Table
- Column headers
- Row per submission
- Status badge
- Action buttons (View, Approve, Reject)

#### Stats Grid
- 4-column layout
- Total, Pending, Published, This Week

---

### 5.3 Submit Form Components

**Location:** `src/pages/submit.njk`

#### Form Structure
- Centered layout (max-width)
- Title and description
- Honeypot field (spam prevention)
- 2-column name/email row
- Single-column style, URL, screenshot, explanation
- Consent checkbox
- Submit button

#### File Upload
- Dashed border dropzone
- Icon and instructions
- File name preview
- Accept: PNG, JPG
- Max: 5MB

#### Success Message
- Hidden by default
- Green checkmark
- Success headline
- Return to gallery link

---

### 5.4 Style Detail Components

**Location:** `src/pages/styles/style-detail.njk`

#### Header
- Back link
- Era overline
- Style title
- Accent color block

#### Demo Preview
- Bordered container
- Emoji thumbnail
- "Open Full Demo" link

#### Content Area
- 8/4 column split
- Main: Origins, Characteristics, Authenticity
- Sidebar: Style guide (colors, typography, grid)

---

## 6. CSS Components

### 6.1 Button Classes

**Location:** `src/styles/main.css`

| Class | Styles |
|-------|--------|
| `.btn` | Base padding, font weight, transitions |
| `.btn-primary` | Black bg, white text, hover states |
| `.btn-secondary` | 2px border, transparent bg, hover invert |
| `.btn-text` | No bg, hover color change |

---

### 6.2 Form Classes

| Class | Purpose |
|-------|---------|
| `.form-input` | Input styling with 2px border, focus ring |
| `.form-label` | Label styling |
| `.form-helper` | Helper text (small, gray) |
| `.form-error` | Error text (small, red) |

---

### 6.3 Card Classes

| Class | Purpose |
|-------|---------|
| `.card` | 2px border, white bg |
| `.card-hover` | Shadow on hover |

---

### 6.4 Badge Classes

| Class | Colors |
|-------|--------|
| `.badge` | Base styling |
| `.badge-pending` | Yellow |
| `.badge-approved` | Green |
| `.badge-rejected` | Red |
| `.badge-submitted` | Blue |

---

### 6.5 Layout Classes

| Class | Purpose |
|-------|---------|
| `.container-custom` | Max-width container with padding |
| `.section-padding` | Responsive section padding |
| `.skip-link` | Accessibility skip link |
| `.prose` | Typography for long-form content |

---

## 7. JavaScript Components

### 7.1 Cookie Consent (`cookie-consent.js`)

**Location:** `src/scripts/cookie-consent.js`
**Lines:** 82

**Features:**
- Get/set consent in localStorage
- Show banner if no consent recorded
- Load analytics on acceptance
- Three button handlers

**API:**
- `getConsent()` - Read localStorage
- `setConsent(value)` - Save to localStorage
- `loadAnalytics()` - Inject analytics script
- `checkConsent()` - Initialize on page load

---

### 7.2 Navigation (`navigation.js`)

**Location:** `src/scripts/navigation.js`
**Lines:** 53

**Features:**
- Mobile menu toggle
- Icon swap (hamburger ↔ close)
- Click outside to close
- Escape key to close

**ARIA Updates:**
- `aria-expanded` toggled
- Menu visibility toggled

---

## Component Dependency Map

```
base.njk
├── navigation.njk
├── footer.njk
├── cookie-banner.njk
└── [page content]

index.njk
├── macros/button.njk
├── macros/card.njk
└── data: designStyles, site

submit.njk
└── macros/form-field.njk (input, select, textarea, checkbox)

admin.njk
├── macros/badge.njk
└── data: submissions, designStyles

style-detail.njk
└── pagination: designStyles

[all pages]
├── scripts/cookie-consent.js
└── scripts/navigation.js
```
