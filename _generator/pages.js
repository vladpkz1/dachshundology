const F=require('./build.js');
const {PREVIEW,layout,guidePage,photo,GUIDES,SITE,BUY,PRICE,CREST_G,DACH,DACH_CREAM,W,esc,crumbs,ORG,WEBSITE}=F;
const MATTER=require('./content/matter.js');
const fs=require('fs'), path=require('path');

/* ---------- HOME ---------- */
const home=layout({
 title:'Dachshundology — The Complete Dachshund Owner’s Manual',
 desc:'The dachshund manual that shows its sources. 173 pages on the back, buying, feeding, training and cost — built on the research American owners never see.',
 url:'/', img:'home-hero',
 schema:[ORG,WEBSITE,
  {"@context":"https://schema.org","@type":"Book",name:"The Complete Dachshund Owner’s Manual",
   numberOfPages:173,inLanguage:"en-US",bookFormat:"https://schema.org/EBook",
   author:{"@type":"Organization",name:"Dachshundology"},
   offers:{"@type":"Offer",price:PRICE,priceCurrency:"USD",availability:"https://schema.org/InStock",url:BUY}}],
 body:`
<section class="hero"><div class="wrap hero-grid">
  <div>
    <div class="kicker">The complete</div>
    <h1>Dachshund<br>Owner’s Manual</h1>
    <p style="margin-top:22px">One dachshund in four will have a disc episode. Almost everything you have been
    told about preventing it is either unproven or backwards. This is the manual that shows you the studies
    and lets you decide.</p>
    <div style="display:flex;gap:14px;margin-top:30px;flex-wrap:wrap">
      <a class="btn" href="/the-manual/">What is in the manual</a>
      <a class="btn on-dark" href="/check-up/">Try the free Check-Up</a>
    </div>
    <p class="label" style="margin-top:26px;color:var(--brass)">173 pages · 24 printable tools · every figure sourced</p>
  </div>
  <div class="hero-photo">${photo('home-hero',{ratio:'3 / 4',eager:true})}
    <div style="text-align:center;margin-top:20px;opacity:.9">${CREST_G.replace(/#1E4032/g,'#F6F1E4')}</div></div>
</div></section>

<section class="cream"><div class="wrap">
  <h2>Three things no American dachshund guide tells you</h2>
  <div class="sub">and all three are in the free guides</div>
  <div class="grid g3" style="margin-top:34px">
    <a class="card" href="/guides/are-stairs-bad-for-dachshunds/"><div class="label">The stairs myth</div>
      <h3>Banning the sofa may not help</h3>
      <p>In DachsLife 2015, dogs prevented from using furniture had <em>higher</em> odds of disc disease, and stairs showed no significant effect. Here is what that does and does not mean.</p></a>
    <a class="card" href="/guides/when-to-neuter-a-dachshund/"><div class="label">Timing</div>
      <h3>The study nobody quotes</h3>
      <p>Dachshunds neutered before twelve months carried roughly twice the relative risk of disc disease. The general small-dog guidance says five to six months. Both are real.</p></a>
    <a class="card" href="/guides/pet-insurance-for-dachshunds/"><div class="label">The fine print</div>
      <h3>A 180-day orthopedic clock</h3>
      <p>At least one major insurer classifies IVDD as orthopedic and applies a six-month waiting period — often collapsible by an exam in your first fourteen days.</p></a>
  </div>
</div></section>

<section><div class="wrap">
  <div class="grid g2" style="align-items:center;gap:54px">
    <div>
      <h2>Why this book exists</h2>
      <div class="sub">and what is wrong with everything else</div>
      <p class="lede" style="margin-top:20px">${esc(MATTER.author.paras[1])}</p>
      <p>${esc(MATTER.author.paras[2])}</p>
      <a class="btn ghost" href="/the-manual/" style="margin-top:18px">What is inside</a>
    </div>
    <div style="text-align:center">${DACH}
      <p class="script" style="font-size:26px;color:var(--camel);margin-top:10px">every number carries its source</p></div>
  </div>
</div></section>

<section class="sand"><div class="wrap">
  <h2>The free Dachshund Check-Up</h2>
  <div class="sub">five steps, no email, nothing stored</div>
  <p class="lede" style="max-width:66ch;margin-top:16px">Enter his weight, run the hands-on body check, and the
  tool returns his AKC division, his body condition band, his daily calories in cups of your food, a realistic
  annual budget, and the back-risk levers that actually have studies behind them.</p>
  <a class="btn" href="/check-up/" style="margin-top:24px">Run the Check-Up</a>
</div></section>

<section><div class="wrap">
  <h2>Free guides</h2><div class="sub">complete, not teasers</div>
  <div class="grid g2" style="margin-top:30px">
    ${GUIDES.map(g=>`<a class="card" href="/guides/${g.slug}/"><div class="label">${esc(g.keyword)}</div>
      <h3>${esc(g.h1)}</h3><p>${esc(g.metaDescription)}</p></a>`).join('')}
  </div>
</div></section>

<section class="dark"><div class="wrap" style="text-align:center">
  ${DACH_CREAM}
  <h2 style="margin-top:20px">173 pages. 24 tools. One bibliography.</h2>
  <p style="max-width:58ch;margin:18px auto 28px;color:#DCD6C6">Everything on this site, plus the twenty pages on
  the back, the thirty days after you bring him home, the training progressions, and the printable sheets you
  hand to a sitter or a veterinarian.</p>
  <a class="btn" href="/the-manual/">See the full contents</a>
  <p class="label" style="margin-top:20px;color:rgba(246,241,228,.55)">173 pages · instant PDF download · updates included</p>
</div></section>`});
W('index.html',home);

/* ---------- THE MANUAL ---------- */
const partsList=[['I','The Breed, Decoded'],['II','Choosing and Buying'],['III','The First Thirty Days'],
 ['IV','Training a Stubborn Dog'],['V','The Back'],['VI','Health, Food and Weight'],
 ['VII','A Real Life'],['VIII','The Older Dachshund']];
W('the-manual/index.html',layout({
 title:'The Complete Dachshund Owner’s Manual — 173 pages, every figure sourced',
 desc:'What is inside the manual: eight parts, 24 printable tools, forty answered questions and a full bibliography. $'+PRICE+', instant download.',
 url:'/the-manual/', img:'manual',
 schema:[crumbs([['Home','/'],['The Manual','/the-manual/']]),
  {"@context":"https://schema.org","@type":"Product",name:"The Complete Dachshund Owner’s Manual",
   description:"A 173-page sourced manual for US dachshund owners.",brand:{"@type":"Brand",name:"Dachshundology"},
   offers:{"@type":"Offer",price:PRICE,priceCurrency:"USD",availability:"https://schema.org/InStock",url:BUY}}],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › The Manual</div></div>
<section style="padding-top:8px"><div class="wrap narrow">
  <h1 style="font-size:clamp(34px,5.4vw,54px)">The Complete Dachshund Owner’s Manual</h1>
  <div class="sub">from the day you start looking to the day it gets hard</div>
  ${photo('manual',{ratio:'3 / 2',cls:'lead',eager:true,
    caption:'Eight parts, twenty-four printable tools, and a bibliography you can check line by line.'})}
  <div class="answer" style="margin:28px 0"><strong>What this is</strong>173 pages, eight parts, 24 printable
  tools and a bibliography you can check. Written for owners in the United States, built on the British,
  Swedish and Danish research that American guides never cite.</div>
  <div class="grid g2" style="margin:34px 0">
    ${partsList.map(([n,t])=>`<div style="border-top:2px solid var(--green);padding-top:12px">
      <div class="label" style="color:var(--camel)">Part ${n}</div>
      <h3 style="margin-top:4px">${t}</h3></div>`).join('')}
  </div>
  <h2>The twenty-four tools</h2>
  <p>Every one is designed to be printed, filled in and stuck on a refrigerator or handed to somebody else.</p>
  <div class="tablewrap"><table><thead><tr><th>#</th><th>Tool</th><th>Section</th></tr></thead><tbody>
  ${MATTER.howto.tools.map(([n,t,s])=>`<tr><td>${String(n).padStart(2,'0')}</td><td>${esc(t)}</td><td>§ ${esc(s)}</td></tr>`).join('')}
  </tbody></table></div>
  <h2>What it does not do</h2>
  <p>It does not diagnose, prescribe, or replace an examination. Where a decision is medical, the book tells you
  what to ask and who to ask. There is no money-back guarantee — instead, every page that matters is checkable
  against the <a href="/sources/">bibliography</a>, and eight of the chapters are published free on this site so
  you can judge the writing before you pay for it.</p>
  <div class="sell"><div class="label" style="color:var(--camel)">Instant download</div>
    <h3 style="margin:8px 0 10px">$${PRICE} — PDF, 173 pages</h3>
    <p style="margin:0 0 18px">Revisions are free for life. If a figure changes, you get the corrected edition.</p>
    <p class="label" style="color:var(--slate);border:1px solid var(--line);padding:14px 18px;display:inline-block">
      Checkout opens with the first edition · ${PREVIEW?'preview build':'coming shortly'}</p></div>
</div></section>`}));

/* ---------- GUIDES HUB ---------- */
W('guides/index.html',layout({
 title:'Free dachshund guides — sourced, complete, no email required',
 desc:'Eight complete guides on dachshund back problems, feeding, weight, neutering, insurance, breeders and cost. Every figure carries its source.',
 url:'/guides/', img:'guides-hub',
 schema:[crumbs([['Home','/'],['Guides','/guides/']]),
  {"@context":"https://schema.org","@type":"CollectionPage",name:"Free dachshund guides",url:SITE+'/guides/'}],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › Guides</div></div>
<section style="padding-top:8px"><div class="wrap">
  <h1 style="font-size:clamp(34px,5.4vw,54px)">Free guides</h1>
  <div class="sub">the whole answer, not the first paragraph of it</div>
  <p class="lede" style="max-width:66ch;margin-top:18px">No email wall, no drip sequence. If these are useful,
  the manual is the same thing at eight times the length with the printable tools attached.</p>
  ${photo('guides-hub',{ratio:'21 / 9',cls:'lead'})}
  <div class="grid g2" style="margin-top:36px">
  ${GUIDES.map(g=>`<a class="card" href="/guides/${g.slug}/">
    <div class="label">${esc(g.keyword)}</div><h3>${esc(g.h1)}</h3>
    <p>${esc(g.metaDescription)}</p>
    <p class="meta" style="margin-top:12px">Updated ${esc(g.updated)}</p></a>`).join('')}
  </div>
</div></section>`}));
GUIDES.forEach(g=>W(`guides/${g.slug}/index.html`,guidePage(g)));

/* ---------- CHECK-UP ---------- */
W('check-up/index.html',layout({
 title:'The Dachshund Check-Up — free weight, calorie and back-risk tool',
 desc:'Free five-step tool: AKC size division, body condition score, daily calories in cups, annual budget, and the back-risk levers that have published evidence behind them.',
 url:'/check-up/', img:'check-up',
 preload:`<script>window.BUY=${JSON.stringify(BUY)}</script><script defer src="/assets/checkup.js"></script>`,
 schema:[crumbs([['Home','/'],['Check-Up','/check-up/']]),
  {"@context":"https://schema.org","@type":"WebApplication",name:"The Dachshund Check-Up",
   applicationCategory:"HealthApplication",operatingSystem:"Any",url:SITE+'/check-up/',
   offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
   description:"A free five-step tool returning a dachshund’s AKC size division, body condition band, daily calorie requirement, annual budget and evidence-based back-risk levers."},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:[
   {"@type":"Question",name:"How many calories does a dachshund need per day?",acceptedAnswer:{"@type":"Answer",
    text:"Resting energy requirement is 70 × body weight in kilograms to the power 0.75, multiplied by 1.6 for a neutered adult or 1.8 for an intact one. A 16 lb dachshund comes to roughly 480 kcal a day. Individual dogs vary by up to 50 percent, so adjust to body condition."}},
   {"@type":"Question",name:"What is the difference between a standard and a miniature dachshund?",acceptedAnswer:{"@type":"Answer",
    text:"The AKC divides by weight: standard is usually 16 to 32 pounds, miniature is 11 pounds and under at 12 months or older. The European FCI divides by chest circumference instead, and recognizes a third rabbit size that does not exist in the AKC."}}]}],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › Check-Up</div></div>
<section style="padding-top:8px"><div class="wrap narrow">
  <h1 style="font-size:clamp(32px,5vw,50px)">The Dachshund Check-Up</h1>
  <div class="sub">five steps, no email, nothing leaves your browser</div>
  <p class="lede" style="margin-top:18px">It returns his AKC size division, a body condition band from a real
  hands-on test, his daily calories converted into cups of the food you actually buy, a realistic annual budget,
  and the back-risk levers that have published studies behind them — with the studies named.</p>
  ${photo('check-up',{cls:'lead'})}
  <div id="checkup" style="margin-top:34px"><noscript><p>This tool needs JavaScript. The same arithmetic is
    explained step by step in <a href="/guides/how-much-to-feed-a-dachshund/">the feeding guide</a>.</p></noscript></div>
  <div class="callout" style="margin-top:34px"><div class="t">What this is not</div>
    <p>It is educational, not diagnostic. No online tool can assess a spine, and nothing here should delay a
    veterinary appointment. If your dog is in pain, cannot stand, or is dragging a back foot, stop reading and
    call a veterinarian — the emergency protocol is in <a href="/guides/dachshund-back-problems-ivdd/">the back
    problems guide</a>.</p></div>
</div></section>`}));

/* ---------- SOURCES ---------- */
W('sources/index.html',layout({
 title:'Sources and bibliography — Dachshundology',
 desc:'Every study, guideline and dataset behind the manual and the free guides, listed and linked. Swedish and British epidemiology, ACVS, AAHA, AVSAB, CAPC, FDA, Merck.',
 url:'/sources/',
 schema:[crumbs([['Home','/'],['Sources','/sources/']])],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › Sources</div></div>
<section style="padding-top:8px"><div class="wrap narrow">
  <h1 style="font-size:clamp(32px,5vw,50px)">Sources</h1>
  <div class="sub">every number on this site came from one of these</div>
  <p class="lede" style="margin-top:18px">Publishing the bibliography is the whole point. If a claim here
  matters to a decision you are about to make, check it yourself.</p>
  <div class="callout evidence" style="margin-top:26px"><div class="t">One thing worth knowing</div>
  <p>There is no American epidemiological dataset on dachshund disc disease. Every prevalence figure you will
  read anywhere — here, on a veterinary site, in another book — is Swedish, British or Danish. Anyone quoting a
  US number is quoting a foreign study without saying so.</p></div>
  ${MATTER.sources.map(g=>`<h2>${esc(g.group)}</h2><ul style="font-size:16.5px;line-height:1.6">
    ${g.items.map(i=>`<li style="margin:10px 0;word-break:break-word">${esc(i)}</li>`).join('')}</ul>`).join('')}
</div></section>`}));

/* ---------- ABOUT ---------- */
W('about/index.html',layout({
 title:'About Dachshundology and our editorial policy',
 desc:'How this site sources its claims, how contested evidence is labeled, how corrections work, and what we do not do.',
 url:'/about/', img:'about',
 schema:[crumbs([['Home','/'],['About','/about/']]),ORG],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › About</div></div>
<section style="padding-top:8px"><div class="wrap narrow">
  <h1 style="font-size:clamp(32px,5vw,50px)">About</h1>
  <div class="sub">${esc(MATTER.author.title.toLowerCase())}</div>
  ${photo('about',{cls:'lead'})}
  <article style="margin-top:24px">${MATTER.author.paras.map(p=>`<p>${esc(p)}</p>`).join('')}</article>
  <h2>Editorial policy</h2>
  <ul>
    <li><strong>Every figure carries its source</strong>, named in the sentence or in the box beside it, and
    listed in full on the <a href="/sources/">bibliography page</a>.</li>
    <li><strong>Contested evidence is labeled contested.</strong> Where two credible sources disagree, both are
    given and the disagreement is explained rather than resolved for you.</li>
    <li><strong>No affiliate links, no sponsored placements, no insurer recommendations.</strong> The only thing
    sold here is the manual.</li>
    <li><strong>Corrections are free and permanent.</strong> If a figure is wrong, it is fixed on the site and in
    the next edition of the book, which every buyer receives.</li>
    <li><strong>This is not veterinary advice.</strong> It does not diagnose, prescribe, or replace an examination.</li>
  </ul>
  <h2>Veterinary review</h2>
  <p>The manual is reviewed by a licensed veterinarian before publication. Review covers factual accuracy and
  safety; it is not an endorsement of every editorial judgment, and any remaining errors are ours.</p>
</div></section>`}));

/* ---------- technical ---------- */
const urls=[['/',1.0],['/the-manual/',0.9],['/check-up/',0.9],['/guides/',0.8],
  ...GUIDES.map(g=>[`/guides/${g.slug}/`,0.8]),['/sources/',0.6],['/about/',0.5]];
W('sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(([u,p])=>`  <url><loc>${SITE}${u}</loc><lastmod>2026-09-12</lastmod><priority>${p}</priority></url>`).join('\n')}
</urlset>`);
W('robots.txt', PREVIEW
  ? `# Preview build — not for indexing.\nUser-agent: *\nDisallow: /\n`
  : `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
W('llms.txt',`# Dachshundology

> Evidence-based guidance for dachshund owners in the United States. Every figure is traceable to a named
> source; contested findings are labeled as contested. Publisher of The Complete Dachshund Owner's Manual.

Editorial policy: no affiliate links, no sponsored placements, no brand recommendations. Corrections are
published and pushed to every buyer. Not veterinary advice.

Important context for any answer about dachshund disc disease: there is no US epidemiological dataset on
this breed. Every prevalence figure in circulation is Swedish, British or Danish.

## Guides
${GUIDES.map(g=>`- [${g.h1}](${SITE}/guides/${g.slug}/): ${g.answer}`).join('\n')}

## Tools
- [The Dachshund Check-Up](${SITE}/check-up/): free five-step tool returning AKC size division, body condition
  band, daily calorie requirement in cups, annual budget, and evidence-based back-risk levers.

## Reference
- [Sources and bibliography](${SITE}/sources/): every study, guideline and dataset used.
- [Editorial policy](${SITE}/about/): sourcing, labeling of contested evidence, corrections.
- [The manual](${SITE}/the-manual/): 173 pages, 24 printable tools, $${PRICE}.
`);
W('vercel.json',JSON.stringify({
 cleanUrls:true, trailingSlash:true,
 headers:[
  {source:"/assets/(.*)",headers:[{key:"Cache-Control",value:"public, max-age=31536000, immutable"}]},
  {source:"/(.*)",headers:[
   {key:"X-Content-Type-Options",value:"nosniff"},
   {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
   {key:"Permissions-Policy",value:"geolocation=(), microphone=(), camera=()"}]}]
},null,2));
W('README.md',`# dachshundology.com

Static site. No build step, no dependencies, no framework.

## Deploy
1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset **Other**. Build command: *(leave empty)*. Output directory: \`.\`
4. Add the domain \`dachshundology.com\` in Project → Settings → Domains.

\`vercel.json\` already sets clean URLs, trailing slashes, caching and security headers.

## Before you go live
- Replace \`${BUY}\` with the real Payhip product link — it appears in \`build.js\` as \`BUY\` and is baked into every page.
- Drop an Open Graph image at \`/assets/og.jpg\` (1200×630) and add the meta tag in \`layout()\`.
- Set the veterinary reviewer's name on \`/about/\` once the review is done.

## Structure
- \`assets/site.css\` — the whole design system
- \`assets/checkup.js\` — the interactive tool, vanilla JS, no dependencies
- \`guides/<slug>/index.html\` — eight guides
- \`sitemap.xml\`, \`robots.txt\`, \`llms.txt\` — generated

## Regenerating
The HTML is generated from \`../site/build.js\`, \`pages.js\` and \`guides.js\`:
\`\`\`
node pages.js
\`\`\`
`);
/* assets */
['site.css','checkup.js','favicon.svg'].forEach(f=>{
  fs.mkdirSync(path.join(F.DIST,'assets'),{recursive:true});
  fs.copyFileSync(path.join(__dirname,'..','assets',f),path.join(F.DIST,'assets',f));
});
/* photographies */
{ const src=path.join(__dirname,'..','assets','photos'), dst=path.join(F.DIST,'assets','photos');
  fs.mkdirSync(dst,{recursive:true});
  for(const f of fs.readdirSync(src)) fs.copyFileSync(path.join(src,f),path.join(dst,f)); }
console.log('built pages:',fs.readdirSync(F.DIST).length,'entries in dist/');
