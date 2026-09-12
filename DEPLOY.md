# Deploying dachshundology

The repository root **is** the site: static HTML, no build step, no dependencies.
`_generator/` holds the sources and is excluded by `.vercelignore`.

URLs are clean and without trailing slashes — `about.html` is served at `/about`,
`guides/dachshund-back-problems-ivdd.html` at `/guides/dachshund-back-problems-ivdd`.
That comes from `cleanUrls: true` and `trailingSlash: false` in `vercel.json`.

## Vercel

Import the repository, then:

- Framework preset **Other**
- Build command, output directory, install command: **all empty**

You get `dachshundology.vercel.app`, and every push to `main` redeploys.

## Deliberately not wired yet

| Thing | State | Where |
|---|---|---|
| Checkout | Not connected. Every buy CTA points at `/the-manual`, which reads "Checkout opens with the first edition". | `_generator/build.js` → `BUY` |
| Indexing | Blocked: `noindex, nofollow` on every page, `robots.txt` disallows all. | `_generator/build.js` → `PREVIEW` |
| Canonicals | Point at `dachshundology.vercel.app`. | `_generator/build.js` → `SITE` |
| Photographs | None yet. | shot list in the book folder |

## Going live

```js
const PREVIEW = false;
const SITE    = 'https://dachshundology.com';
const BUY     = 'https://payhip.com/b/xxxxx';
```

Then `cd _generator && node pages.js && node flatten.js`, copy the result over the root, push.
One edit flips indexing, rewrites every canonical and wires every CTA.

Before flipping: attach the domain in Vercel, add `assets/og.jpg` (1200×630) with the `og:image`
meta in `layout()`, name the reviewing veterinarian on `/about`, and submit `sitemap.xml`
in Search Console.
