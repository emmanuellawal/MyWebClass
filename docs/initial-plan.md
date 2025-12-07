# Implementation Plan: MyWebClass.org - Eleventy + Nunjucks + Sanity CMS

## Project Overview
Build MyWebClass.org as a static site using Eleventy (11ty) with Nunjucks templates, Tailwind CSS, TypeScript for interactivity, and Sanity CMS for all content and submission management. Follow Swiss International Style design principles from the UI specifications document.

## Architecture Decisions
- **Static Site Generator**: Eleventy (11ty) with Nunjucks templating
- **Styling**: Tailwind CSS extended with Swiss design system tokens
- **CMS**: Sanity headless CMS for content and submission workflow
- **Client-side JavaScript**: TypeScript compiled to ES6 modules
- **Hosting**: Netlify/Vercel with serverless functions for dynamic features
- **Forms**: Serverless functions connected to Sanity
- **Analytics**: GDPR-compliant with cookie consent management

## Implementation Phases

### Phase 1: Foundation Setup
1. Initialize Eleventy project with Nunjucks
2. Configure Tailwind CSS with PostCSS
3. Set up TypeScript for client-side code
4. Install Sanity client library
5. Configure build pipeline and npm scripts
6. Create directory structure (src/, _includes/, _data/, pages/, styles/, scripts/)

### Phase 2: Design System Implementation
1. Extend Tailwind config with Swiss color palette
2. Configure typography scale (Display through Caption)
3. Set up spacing scale (8px base unit)
4. Create CSS custom properties
5. Add Inter font family
6. Build utility classes for common patterns
7. Implement focus and accessibility styles

### Phase 3: Sanity CMS Setup
1. Create designStyle schema
2. Create gallerySubmission schema
3. Create article and author schemas
4. Set up Sanity Studio
5. Create seed data for 3 design styles (Swiss, Bauhaus, Brutalist)
6. Configure Sanity data fetching in src/_data/
7. Set up image optimization

### Phase 4: Base Layouts and Components
1. Create base.njk layout with HTML structure, meta tags
2. Create page.njk layout
3. Build navigation.njk component (desktop + mobile)
4. Build footer.njk component (4-column layout)
5. Build cookieBanner.njk component
6. Create Nunjucks macros (button, card, formField, badge)

### Phase 5: Homepage
1. Build hero section (12-column grid, Swiss geometric decoration)
2. Create stats bar (4-column metrics)
3. Build gallery preview (filtering + 3-column card grid)
4. Add "How It Works" section (4-step process)
5. Create CTA section
6. Integrate Sanity data for design styles
7. Implement responsive layouts

### Phase 6: Gallery Detail Pages
1. Create styles/[slug].njk template with pagination
2. Build header with back button, era badge, accent color
3. Create demo preview section
4. Build 8/4 column layout (content + sidebar)
5. Display origin, characteristics, authenticity explanation
6. Build sidebar with style guide information
7. Generate pages dynamically from Sanity data

### Phase 7: Submission Form
1. Create submit.njk page with centered form
2. Build form fields (name, email, style, URL, screenshot, explanation, consent)
3. Add client-side validation with TypeScript
4. Style with Tailwind following Swiss design specs
5. Create serverless function for form submission to Sanity
6. Add success/error states

### Phase 8: Instructor Dashboard
1. Create admin.njk with protected layout
2. Build tab navigation (Pending/Approved/Rejected)
3. Create submissions table
4. Add action buttons (View, Approve, Reject)
5. Build stats grid
6. Create serverless functions for admin actions
7. Implement simple authentication

### Phase 9: Additional Pages
1. Create about.njk
2. Create privacy.njk (Privacy Policy)
3. Create terms.njk (Terms of Service)
4. Create cookies.njk (Cookie Policy)
5. Create 404.njk
6. Style with Swiss design principles

### Phase 10: Client-Side Interactivity
1. Build navigation.ts (mobile menu toggle)
2. Create cookieConsent.ts (banner + localStorage)
3. Build formValidation.ts
4. Create adminActions.ts
5. Build analytics.ts (conditional loading)
6. Compile TypeScript to JavaScript

### Phase 11: Serverless Functions
1. Create /api/submit-demo for form submissions
2. Create /api/update-submission for admin actions
3. Create /api/webhook for Sanity rebuild triggers
4. Secure admin endpoints
5. Add error handling and validation

### Phase 12: Cookie Consent & Analytics
1. Build cookie banner with Accept/Reject/Preferences
2. Store consent in localStorage
3. Integrate analytics solution (Plausible or Cloudflare Analytics)
4. Conditionally load analytics based on consent
5. Create preference management modal

### Phase 13: Responsive Design
1. Implement mobile navigation
2. Test responsive typography scaling
3. Verify grid layouts at all breakpoints
4. Make tables horizontally scrollable on mobile
5. Ensure touch-friendly tap targets
6. Add responsive images with srcset

### Phase 14: Accessibility
1. Use semantic HTML5 throughout
2. Add ARIA labels for navigation, forms, interactive elements
3. Create skip links
4. Add descriptive alt text for all images
5. Implement proper form labels and error associations
6. Add focus-visible styles
7. Verify color contrast (WCAG AA 4.5:1)
8. Test keyboard navigation

### Phase 15: Performance Optimization
1. Optimize images with Eleventy Image plugin
2. Implement lazy loading
3. Minimize CSS with cssnano
4. Tree-shake unused Tailwind classes
5. Minify JavaScript
6. Add preload hints for critical fonts
7. Implement critical CSS inlining
8. Generate sitemap.xml and robots.txt

### Phase 16: Deployment & Testing
1. Configure Eleventy build command
2. Set up Netlify/Vercel deployment
3. Add environment variables for Sanity
4. Configure build triggers via Sanity webhooks
5. Test deployment process
6. Run Lighthouse audits
7. Test across browsers and devices
8. Validate HTML and accessibility

## Success Criteria
- All pages follow Swiss International Style design specifications
- Site is fully static (generated at build time)
- Sanity CMS integrated for content and submissions
- GDPR-compliant cookie consent with conditional analytics
- Responsive across all breakpoints (mobile, tablet, desktop)
- Accessible (WCAG AA compliance)
- Performant (Lighthouse score >90)
- Working submission workflow (students → instructors)
- Three authentic design style demos implemented
