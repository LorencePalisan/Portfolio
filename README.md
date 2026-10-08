# Lorence Palisan — Portfolio

Personal portfolio and booking site for **Lorence Palisan**, a freelance web developer helping growing businesses with fast websites, organized data, storage, and conversion-focused design.

**Live site:** [lorencepalisan.com](https://lorencepalisan.com)

## Tech Stack

- [Astro](https://astro.build/) — static site framework
- [React](https://react.dev/) — interactive islands (forms, carousels, the 3D hero card)
- [Tailwind CSS v4](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) / [Base UI](https://base-ui.com/)
- [Three.js](https://threejs.org/) / [React Three Fiber](https://r3f.docs.pmnd.rs/) — 3D ID card in the hero
- Contact and booking forms post to my CRM (`crm.lorencepalisan.com/api/forms/submit`); see `.env.example`
- [Cloudflare Pages](https://pages.cloudflare.com/) — hosting

## Getting Started

Requires Node `>=22.12.0` and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

## Scripts

| Command             | Description                          |
| -------------------- | ------------------------------------ |
| `pnpm dev`           | Start the local dev server           |
| `pnpm build`         | Production build (outputs to `dist`) |
| `pnpm preview`       | Preview the production build locally |
| `pnpm check-types`   | TypeScript type check                |
| `pnpm lint`          | Lint with ESLint                     |
| `pnpm lint:fix`      | Lint and auto-fix                    |
| `pnpm format`        | Format with Prettier                 |

## Deployment

Production deploys to Cloudflare Pages via GitHub Actions (`.github/workflows/deploy.yml`), and **only runs when a version tag is pushed** — plain commits to `main` never trigger a deploy.

To ship a release:

```bash
git tag v1.0.1
git push origin v1.0.1
```

The workflow type-checks, lints, builds with the production `SITE_URL`, and deploys via `wrangler pages deploy`.

**Required repository secrets** (Settings → Secrets and variables → Actions):

| Secret                  | Value                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------- |
| `CLOUDFLARE_API_TOKEN`   | An API token scoped to **Account → Cloudflare Pages → Edit** for this account only    |
| `CLOUDFLARE_ACCOUNT_ID`  | The Cloudflare account ID this project is deployed under                              |

## Project Structure

```
src/
  components/
    home/          # Hero, About, Experience, Services, Hire Me, Select Service
    contact/        # Contact page hero + form
    shared/         # Reused across pages (services, eyebrow, profile showcase)
    layout/         # Header, footer, nav dock, theme toggle
    ui/              # shadcn/ui primitives + the 3D ID card
  pages/            # Astro file-based routes
  layouts/          # Base HTML layout + SEO head
  consts.ts         # Site metadata, SEO defaults, social links
public/
  _headers          # Cloudflare Pages response headers (incl. CSP)
  favicon/          # Favicon set
  images/           # Static image assets
```

## License

All rights reserved. This is a personal portfolio, not intended for reuse or redistribution.
