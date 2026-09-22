# Personalization Checklist

Two lists: content to replace, and images to source. File paths and line numbers point at the current template placeholders.

## 1. Content to replace

### Start here — central config
- `src/consts.ts:4-97` — site title/description, `SITE_URL`, `SOCIAL_LINKS` (github/linkedin/instagram/twitter — all `yourusername`), `COMPANY_INFO` (name, address, `hello@zoltmercer.com`), OG/Twitter metadata, author name `Zolt Mercer`
- `astro.config.mjs:9` — `site` URL (needed for correct sitemap/canonical links in prod)
- `public/site.webmanifest` — still says "Zolt", "Shadcn Studio", even "Next.js" (wrong framework)
- `public/robots.txt` — placeholder sitemap URL
- `src/layouts/HeadSeo.astro:34` — title template hardcodes "Demo: ... | Shadcn Studio"

### Content collections (`src/content.config.ts`)
Replace or delete sample entries:
- 3 blog posts in `src/content/blog/*.mdx` (fields: title, description, image, date, author, category, tags)
- 4 case studies in `src/content/case-studies/*.mdx` (fields: organisation, role, duration, tools, images, logo)

### Home page
- `hero/hero.astro:14,16-19` — name, title, bio
- `hero/hero-cta.tsx:11-14` — "Download CV" button, no real file linked yet
- `experience/experience.tsx:4-51` — 4 fake jobs (company/role/period/stack/description)
- `experience/activity-card.tsx:65-66` — GitHub handle + fake contribution copy (grid itself is `Math.random()`, not real data)
- `hire-me/pricing-card.tsx:22-46` — pricing plan/price/features
- `hire-me/profile-card.tsx:11-15,68-100` — stats (hours/rating/jobs), name, location, bio
- `select-service/service-step-card.tsx:20-42` — 3 bookable services w/ price+duration
- `about/*` — music player card, trip folder captions, joke notes (cosmetic, optional)

### Shared/contact
- `shared/services/services.tsx:10-47` — 5 services
- `shared/testimonials/testimonials.tsx:17-39` — 3 fake testimonials
- `shared/profile-showcase.tsx:14-18,77-97` — social links (all `href='#'`), name/caption
- `contact/contact-form/contact-form-schema.ts:3-9` — dropdown options
- ⚠️ **Neither the contact form nor the booking form is wired to email/backend** — both just show a success toast. Needs hooking up (e.g. Formspree, a serverless function, etc.) before submissions actually reach you.

### Layout / cleanup candidates
- `layout/footer.astro:5-10,44` — social icons have **no `href` at all**; copyright line
- `layout/download-button.astro` — links out to the template's own sales page; likely delete
- `layout/header.tsx` — dead code, not used anywhere (`nav-dock.tsx` is the real nav) — safe to delete
- `src/pages/login.astro`, `register.astro` — unused stub pages, not linked from nav — delete unless adding real auth

## 2. Images needed

### Your photos
- `profile.webp` (3d-card, 4:5 portrait) — hero ID card
- `hire-me/profile.webp` (square) — headshot
- `services/services-profile.webp` (cutout/transparent bg) — services & contact sections
- `about-me/carousel-01..04.webp` (~380×520) — About carousel
- `about-me/folder-01..03.webp` (~290:230) — "trip" folder card
- `footer/signature.webp` (~240px wide) — your signature

### Logos
- `features/logo-01..04.webp` — reused as both employer logos (Experience) and case-study client logos — split into separate files if they differ
- `experience/img-01..20.webp` (~40px) — scrolling tool/tech logos

### Case studies / portfolio
- `features/page-01..04.webp` — case study cover cards
- `case-study/lumio-*, dwello-*, stackwise-*, trackflow-*` (16+ files) — hero + inline images per project, referenced in each `.mdx`

### Testimonials
- `testimonials/avatar-01..03.webp` (~100px) — client photos, or delete the section

### SEO/PWA — required, exact sizes
- `og-image.png` — must be exactly **1200×630**
- `favicon/favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180×180), `android-chrome-192x192.png`, `android-chrome-512x512.png`

### Currently broken (pre-existing template bug)
- Blog cover images (`design-systems.webp`, `edge-computing.webp`, `ui-design.webp`) and 3 author avatars are referenced in blog frontmatter but the files don't exist in `public/` at all — blog covers are broken right now regardless of what you do.

### Resume
No PDF exists anywhere — add one (e.g. `public/resume.pdf`) and point `hero-cta.tsx:11` at it.
