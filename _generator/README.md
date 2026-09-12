# Generator

The HTML at the repository root is generated from these files. Nothing here is served —
`.vercelignore` keeps the folder out of the deployment.

```
cd _generator && node pages.js && node flatten.js
# then copy site/flat/* over the repository root
```

- `build.js` — layout, `<head>`, JSON-LD, the guide template, and the site-wide constants
  `PREVIEW`, `SITE`, `BUY`, `PRICE`.
- `pages.js` — home, the manual page, the guides hub, the Check-Up, About, Sources, and the
  technical files (sitemap, robots, llms.txt, vercel.json).
- `flatten.js` — turns `x/index.html` into `x.html` and rewrites links to clean URLs.
- `guides.js` — the content of the eight free guides.
- `kit.js`, `content/matter.js` — the SVG marks, the author's note, the tool index and the
  bibliography, all shared with the book.
