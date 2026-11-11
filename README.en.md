<div align="center">

# deepin Indonesia — About Site

**The "About deepin" & product planning site**

[about.deepin.id](https://about.deepin.id) · 🇬🇧 **English** · [🇮🇩 Bahasa Indonesia](README.md)

</div>

---

A static site for **deepin Indonesia** and the **About deepin** hub: community profile, leads, original apps, desktop environment, and version roadmap. Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com).

## Table of Contents

- [About](#about)
- [Pages](#pages)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Editing Content](#editing-content)
- [Deployment](#deployment)
- [SEO, Performance & AdSense](#seo-performance--adsense)
- [Analytics](#analytics)
- [Contributing](#contributing)
- [License](#license)

## About

`about-site` is the **deepin Indonesia** page at **https://about.deepin.id**. It introduces the community first, then presents three main topics: **Product Planning**, **Original Apps**, and **Desktop Environment (DDE/Treeland)**.

### The deepin Indonesia ecosystem

| Subdomain | Repo | Purpose |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Home page |
| [os.deepin.id](https://os.deepin.id) | `download-site` | deepin image downloads |
| [news.deepin.id](https://news.deepin.id) | `news-site` | News & articles |
| [about.deepin.id](https://about.deepin.id) | `about-site` ← this repo | Community & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Community donations |

## Pages

| Route | Content |
|---|---|
| `/` | Community profile: hero, intro, activities, three topic cards, `#original-apps` & `#desktop-environment` sections, leads, FAQ, CTA |
| `/product-planning/` | Version roadmap (release schedule), deepin 25.3.0 features, disclaimer, FAQ |

## Features

- **Full community profile** with leads and official deepin support.
- **Original Apps section** — 12 original deepin apps.
- **Desktop Environment section** — DDE 7.0 & Treeland.
- **Product Planning** — release schedule, version status, and feature highlights.
- **Rich structured data**: `AboutPage`, `ItemList`, `Person`, `FAQPage`, `SoftwareApplication`, `TechArticle`, and `BreadcrumbList`.
- **Sitemap with accurate `lastmod`** per page (not the build date).
- **`_redirects`** for legacy URLs + a `/privacy/` redirect to the main site.

## Tech Stack

| Technology | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Language** | TypeScript (`strict`), alias `@/*` → `src/*` |
| **Icons** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` with per-page `lastmod` |
| **Analytics** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Ads** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Project Structure

```
about-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, SEO, schema, AdSense, hreflang, LCP preload
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Analytics.astro
│   ├── data/
│   │   ├── deepin-indonesia.ts   # Home page (/) content
│   │   ├── product-planning.ts   # /product-planning/ content
│   │   └── site.ts               # Site config & navigation
│   ├── pages/
│   │   ├── index.astro           # Community page
│   │   ├── 404.astro             # 404 (noindex)
│   │   └── product-planning/
│   │       └── index.astro       # Product planning
│   └── styles/
│       └── global.css            # Tailwind + deepin palette + .section-eyebrow
├── public/
│   ├── images/                   # Logo, lead photos, OG image
│   ├── _redirects                # Legacy URLs + privacy redirect
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt
│   └── site.webmanifest
├── astro.config.mjs              # site, sitemap lastmod (CONTENT_UPDATED)
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- npm

### Install & develop

```bash
git clone https://github.com/deepin-Indonesia/about-site.git
cd about-site
npm install
npm run dev        # → http://localhost:4321 (or the next free port)
```

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the build |

## Editing Content

### Home page — `src/data/deepin-indonesia.ts`

| Export | Content |
|---|---|
| `INDONESIA_PAGE` | Title, tagline, intro, last-updated date |
| `INDONESIA_SUPPORT` | Official support from the deepin main community |
| `INDONESIA_VALUES` | Community principles |
| `INDONESIA_ACTIVITIES` | Community activities + links |
| `EXPLORE_SECTIONS` | Three topic cards (`#original-apps`, `#desktop-environment`, `/product-planning/`) |
| `COMMUNITY_LEADS` | Leads (name, role, badge, photo, bio, links) |
| `INDONESIA_FAQ` | FAQ (also used for the `FAQPage` schema) |

> Icons in `links` must include the Font Awesome style (`fas`/`fab`), e.g. `fas fa-link` or `fab fa-github`.

### Product planning page — `src/data/product-planning.ts`

| Export | Content |
|---|---|
| `PLANNING_PAGE` | Title, tagline, intro, last-updated date |
| `RELEASE_SCHEDULE` | Release schedule + version status |
| `NEXT_RELEASE` | Focus version (hero & metadata) |
| `PLAN_CATEGORIES` | Feature categories and items |
| `PLAN_HIGHLIGHTS` | Highlight chips at the top |
| `PLAN_DISCLAIMER` | Important note |
| `FAQ_ITEMS` | FAQ (also used for the `FAQPage` schema) |

> Whenever content changes, update the dates in `CONTENT_UPDATED` (`astro.config.mjs`), `INDONESIA_PAGE.updated`, and `PLANNING_PAGE.updated` so the sitemap `lastmod` and schema stay accurate.

## Deployment

Push to `main` → **Cloudflare Pages** builds and deploys automatically.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## SEO, Performance & AdSense

- **Per-page meta**: description, keywords, canonical, `robots`, and `hreflang` (`id-ID`, `x-default`).
- **Open Graph & Twitter Card** with a 1200×630 image (`/images/og-about.png`), `og:image:type`, and matching dimensions.
- **JSON-LD**: `Organization`, `WebSite`, `BreadcrumbList`, `AboutPage`, `ItemList`, `TechArticle`, `FAQPage`, `SoftwareApplication`.
- **Sitemap** with per-page `lastmod` (`CONTENT_UPDATED` in `astro.config.mjs`) + `robots.txt`.
- **404** uses `noindex, follow` without `hreflang`.
- **Performance**: `preconnect` to cdnjs & GTM, `dns-prefetch` to GA, `preload` for the LCP image (`preloadImage`), heavy blurs reduced.
- **AdSense**: script + meta + `public/ads.txt`.
- **Privacy Policy** is centralized at **https://deepin.id/privacy/**; `/privacy/` on this subdomain 301-redirects there.

## Analytics

One GA4 property (`G-2J4TLB9W7H`) for all subdomains; every event carries a `site` parameter. Key events: `nav_click`, `dropdown_toggle`, `anchor_click`, `cta_click`, `faq_toggle`, `scroll_depth`, `engaged_reader`.

## Contributing

1. Fork the repo, then branch from `preview`: `git checkout preview && git checkout -b feat/description`.
2. Commit with a clear message, push to your fork, and open a **Pull Request** against `deepin-Indonesia/about-site` (target: **`preview`**).
3. After review, merge `preview` → `main`.

> ⚠️ Do not push directly to `main` — that branch goes live automatically.

## License

Released under the [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Made with ❤️ by the [deepin Indonesia](https://deepin.id) community · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
