---
project_name: 'MyWebClass'
user_name: 'Jay'
date: '2025-12-05'
sections_completed: ['technology_stack', 'implementation_rules', 'anti_patterns', 'testing', 'migration']
status: 'complete'
rule_count: 35
optimized_for_llm: true
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

**Target Stack (after migration):**
- Eleventy: v3.1.2
- Sanity CMS: v6.10.0
- Tailwind CSS: v4
- Nunjucks: latest
- Playwright: v1.40.1
- Node.js: v20+

**Build Tools:**
- ESLint: v8.56.0
- Prettier: v3.1.1
- Stylelint: v16.1.0
- Markdownlint: v0.38.0

**Current State (pre-migration):**
- Eleventy v2.0.1 (upgrade needed)
- Plain CSS (Tailwind migration needed)
- Supabase submissions (Sanity migration needed)

---

## Critical Implementation Rules

### File & Naming Conventions

- **All files:** kebab-case (`style-card.njk`, `submit-form.js`)
- **Exception:** Sanity schemas use camelCase (`designStyle.js`)
- **Data files:** Plural names matching content type (`designStyles.js`)
- **Test files:** Same name + `.spec.js` (`gallery.spec.js`)

### Nunjucks Template Rules

- Use `{% extends "layouts/base.njk" %}` for page layouts
- Use `{% include "components/..." %}` for simple partials
- Use macros for parameterized components:
  ```nunjucks
  {% from "components/button.njk" import button %}
  {{ button("Label", url, "primary") }}
  ```
- Never create standalone component pages

### Sanity Data Fetching Rules

- **ALWAYS** use shared client from `src/lib/sanity-client.js`
- **NEVER** instantiate new Sanity clients
- **ALWAYS** project specific fields in GROQ (no wildcards):
  ```javascript
  // GOOD
  *[_type == "designStyle"] { _id, title, slug, demoUrl }

  // BAD
  *[_type == "designStyle"]
  ```
- Use GROQ dereferencing for assets: `"imageUrl": image.asset->url`

### JavaScript Rules

- Use object literal module pattern (no classes):
  ```javascript
  const ModuleName = {
    STORAGE_KEY: 'key-name',
    init() { /* ... */ },
  };
  document.addEventListener('DOMContentLoaded', () => ModuleName.init());
  ```
- **ALWAYS** use `data-*` attributes for DOM hooks (never classes/IDs for JS)
- Wrap fetch calls in try/catch with user-friendly error messages
- Constants in UPPER_SNAKE_CASE, methods in camelCase

### Tailwind CSS Rules

- **Class ordering:** Layout → Spacing → Sizing → Typography → Colors → Effects → States
- Extract to `@layer components` when used 3+ times
- **ALWAYS** include focus states on interactive elements:
  ```html
  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
  ```

### Accessibility Rules (WCAG AA)

- All interactive elements MUST have visible focus states
- Form errors MUST use `aria-invalid="true"` and `aria-describedby`
- Status messages MUST use `role="alert"`
- All images MUST have meaningful alt text

### Form Handling Rules

- Client-side validation before submit
- Disable submit button during submission, show "Submitting..."
- On success: Show green `role="alert"` message, reset form
- On error: Show red `role="alert"` message, preserve user input
- **NEVER** clear user input on error

### Performance Rules

- CSS bundle MUST be <50KB
- Lighthouse scores MUST be ≥90
- All integrations MUST fail gracefully (no blocking errors)
- GA4 ONLY loads after explicit user consent

---

## Anti-Patterns to Avoid

### Code Anti-Patterns

- **NEVER** use class names or IDs for JavaScript DOM selection
- **NEVER** fetch all fields in GROQ queries without projection
- **NEVER** instantiate new Sanity clients (use shared instance)
- **NEVER** load GA4 without checking consent first
- **NEVER** clear form input on validation/submission errors
- **NEVER** create components without focus states
- **NEVER** use inline styles (use Tailwind utilities)

### Architecture Anti-Patterns

- **NEVER** put JS logic in Nunjucks templates
- **NEVER** make runtime API calls that should be build-time
- **NEVER** expose Sanity tokens client-side
- **NEVER** skip error handling for fetch/async operations
- **NEVER** block page rendering on failed integrations

### Testing Anti-Patterns

- **NEVER** test implementation details (test behavior)
- **NEVER** skip accessibility assertions in E2E tests
- **NEVER** hardcode test data that could change

---

## Testing Rules

### Test Organization

- Tests live in `/tests/` directory
- E2E tests in `/tests/e2e/`
- Fixtures in `/tests/fixtures/`
- Name pattern: `{feature}.spec.js`

### Required Test Coverage

- Homepage loads and displays content
- Gallery filtering and navigation works
- Submission form validates correctly
- Cookie consent banner functions properly
- All pages pass accessibility checks

### Playwright Patterns

```javascript
// Always use data-testid for test selectors
await page.locator('[data-testid="submit-button"]').click();

// Always check accessibility
await expect(page).toHaveNoViolations();

// Always test error states
await expect(page.locator('[role="alert"]')).toBeVisible();
```

---

## Migration Awareness

**IMPORTANT:** Current codebase differs from target architecture:

| Current | Target | Status |
|---------|--------|--------|
| `src/js/` | `src/assets/js/` | Migration needed |
| `src/css/` | `src/assets/css/` | Migration needed |
| `partials/` | `components/` | Migration needed |
| Supabase | Sanity mutations | Migration needed |
| Plain CSS | Tailwind CSS v4 | Migration needed |
| Eleventy v2 | Eleventy v3.1.2 | Migration needed |

**AI agents should:**
1. Check which structure exists before creating files
2. Follow target architecture for NEW files
3. Note migration tasks when touching existing files

---

## Reference Documents

- **Architecture:** `docs/architecture.md`
- **PRD:** `docs/prd.md`
- **Sanity Schemas:** `studio/schemas/`

---

_Last updated: 2025-12-05_
