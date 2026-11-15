# Vipan Kumar — Portfolio Frontend

A personal developer portfolio for **Vipan Kumar**, a backend &amp; full-stack engineer. The site highlights his work at Sardeck Services (Intradiem) and Benepik Plus through immersive case studies, a skills grid, real metrics, and a resume download.

🖥️ **Live site:** https://vipankumar.tech

---

## ✨ Features

- **Animated home experience** — custom preloader, Lenis smooth scrolling, framer-motion reveal/mask animations.
- **Case studies** — Intradiem &amp; Benepik Plus with hand-built flow diagrams, benchmark callouts, and interactive encryption demo.
- **Downloadable resume** — ready in the header and hero (public PDF).
- **Contact form** — Web3Forms-powered with Gmail/Outlook/mailto fallbacks.
- **Custom VK monogram** — bold interlock mark used across header, preloader and favicon.
- **SEO &amp; social ready** — per-page meta, Open Graph, Twitter Cards, JSON-LD structured data, sitemap, robots.txt, feeds.
- **404 page** — on-brand, on any unmatched route.

---

## 🧰 Tech Stack

| Area | Tech |
| --- | --- |
| UI framework | React 18 (Create React App + Craco) |
| Styling | Tailwind CSS |
| Animation | Framer Motion, Lenis |
| Icons | lucide-react |
| Routing | React Router |
| Data fetching | TanStack React Query (configured), SWR |
| Forms | React Hook Form + Zod |
| UI primitives | Radix UI + shadcn-style components |
| Fonts | Bricolage Grotesque, Instrument Sans, JetBrains Mono |

---

## 📁 Project Structure

```text
frontend/
├── public/                  # static assets, SEO files
│   ├── index.html           # shell, meta, OG, JSON-LD
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── site.webmanifest
│   ├── llms.txt
│   ├── feed.xml
│   ├── humans.txt
│   ├── security.txt
│   ├── .well-known/security.txt
│   ├── _redirects           # Netlify SPA fallback
│   ├── vercel.json          # Vercel SPA rewrite
│   ├── favicon.ico / favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.png / og-banner.svg
│   └── Vipan Kumar -Image.jpg
└── src/
    ├── App.js               # routes, Lenis init, root layout
    ├── index.js
    ├── data/profile.js       # all content: profile, skills, projects, experience
    ├── lib/
    │   ├── scroll.js
    │   └── useSeo.js        # per-page SEO hook
    ├── components/
    │   ├── site/            # Header, Hero, About, Works, Skills, Impact, Contact, Footer, etc.
    │   ├── case/            # case-study components (diagrams, chapters)
    │   └── ui/              # UI primitives
    └── pages/
        ├── CaseIntradiem.jsx
        ├── CaseBenepikPlus.jsx
        └── NotFound.jsx
```

---

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:3000)
npm start

# run tests (interactive watch)
npm test

# production build → build/
npm run build
```

> Note: `eject` is available but generally not needed. The project uses Craco for Tailwind config.

### Environment variables

Create a `.env` file in the project root (see `.env.example` if present):

```env
REACT_APP_WEB3FORMS_ACCESS_KEY=your_web3forms_key
```

The contact form falls back to opening the visitor’s email client if no key is set.

---

## 🔧 Configuration

- **Tailwind:** `tailwind.config.js`
- **Craco:** `craco.config.js`
- **Path aliases:** `@/` → `src/` (see `jsconfig.json`)
- **Content/data:** all site copy lives in `src/data/profile.js` — edit once, reflects everywhere.

---

## 📦 Deployment

### Netlify
A `public/_redirects` file (`/* /index.html 200`) is included for SPA routing. Deploy the `frontend` folder with build command `npm run build` and publish directory `build`.

### Vercel
A `vercel.json` rewrite sends all routes to `/index.html`. Set build command `npm run build` and output dir `build`.

### Others
For hosts without a redirect rule, ensure all non-asset routes fall back to `index.html` so `/work/*` and the 404 page work on refresh.

---

## 🧹 SEO &amp; Assets

- Domain used across canonical/OG/sitemap: **https://vipankumar.tech** (update if it changes).
- Update `og-image.png` / `og-banner.svg` to refresh social previews.
- Regenerate `robots.txt`, `sitemap.xml`, and feeds when adding routes.
- Favicon/monogram live in `public/favicon.svg` and `src/components/site/Primitives.jsx` (Logo).

---

## 📄 License

© 2026 Vipan Kumar. All rights reserved.
