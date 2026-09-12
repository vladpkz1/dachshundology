# dachshundology.com

Static site. No build step, no dependencies, no framework.

## Deploy
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset **Other**. Build command: *(leave empty)*. Output directory: `.`
4. Add the domain `dachshundology.com` in Project → Settings → Domains.

`vercel.json` already sets clean URLs, trailing slashes, caching and security headers.

## Before you go live
- Replace `/the-manual/` with the real Payhip product link — it appears in `build.js` as `BUY` and is baked into every page.
- Drop an Open Graph image at `/assets/og.jpg` (1200×630) and add the meta tag in `layout()`.
- Set the veterinary reviewer's name on `/about/` once the review is done.

## Structure
- `assets/site.css` — the whole design system
- `assets/checkup.js` — the interactive tool, vanilla JS, no dependencies
- `guides/<slug>/index.html` — eight guides
- `sitemap.xml`, `robots.txt`, `llms.txt` — generated

## Regenerating
The HTML is generated from `../site/build.js`, `pages.js` and `guides.js`:
```
node pages.js
```
