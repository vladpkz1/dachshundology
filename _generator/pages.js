const F=require('./build.js');
const {PREVIEW,layout,guidePage,nextStep,heroPreload,photo,asset,fingerprint,GUIDES,SITE,BUY,PRICE,CREST_G,DACH,DACH_CREAM,W,esc,crumbs,ORG,WEBSITE}=F;
const MATTER=require('./content/matter.js');
const fs=require('fs'), path=require('path');

/* ---------- HOME ---------- */
const home=layout({
 title:'Dachshundology — The Complete Dachshund Owner’s Manual',
 desc:'The dachshund manual that shows its sources. 195 pages on the back, buying, feeding, training and cost — built on research most owner guides never cite.',
 url:'/', head:heroPreload('home-hero'),
 schema:[ORG,WEBSITE,
  {"@context":"https://schema.org","@type":"Book",name:"The Complete Dachshund Owner’s Manual",
   numberOfPages:195,inLanguage:"en-US",bookFormat:"https://schema.org/EBook",
   author:{"@type":"Organization",name:"Dachshundology"},
   offers:{"@type":"Offer",price:PRICE,priceCurrency:"USD",availability:"https://schema.org/InStock",url:BUY}}],
 body:`
<section class="hero"><div class="wrap hero-grid">
  <div>
    <div class="kicker">The complete</div>
    <h1>Dachshund<br>Owner’s Manual</h1>
    <p style="margin-top:20px">One dachshund in four will have a disc episode. Most of what you have been
    told about preventing it is unproven, or backwards. This manual shows you the studies, names the country
    each one came from, and lets you decide.</p>
    <div style="display:flex;gap:14px;margin-top:28px;flex-wrap:wrap">
      <a class="btn" href="/the-manual/">See the manual — $${PRICE.replace('.00','')}</a>
      <a class="btn ghost" href="/check-up/">Free Check-Up →</a>
    </div>
    <ul class="checks" style="margin-top:28px">
      <li class="k"><b>✓</b><span><em>Every figure sourced.</em> Study named, country named, year named.</span></li>
      <li><b>✓</b><span><em>Reviewed by a veterinarian</em> before it went on sale.</span></li>
      <li><b>✓</b><span><em>Written for owners anywhere</em> — pounds and kilos, AKC, KC and FCI.</span></li>
    </ul>
  </div>
  <div class="hero-photo">${photo('home-hero',{ratio:'3 / 4',eager:true})}</div>
</div></section>

<section class="numband" style="padding:0"><div class="in">
  <div class="n k"><div class="f">195</div><div class="l">pages, eight parts</div></div>
  <div class="n"><div class="f">24</div><div class="l">printable tools</div></div>
  <div class="n"><div class="f">40</div><div class="l">questions answered straight</div></div>
  <div class="n"><div class="f">$${PRICE.replace('.00','')}</div><div class="l">instant download · no subscription</div></div>
</div></section>

<section class="cream"><div class="wrap">
  <h2>Three things no dachshund guide tells you</h2>
  <div class="sub">and all three are in the free guides</div>
  <div class="grid g3" style="margin-top:32px">
    <a class="card" href="/guides/are-stairs-bad-for-dachshunds/"><div class="label">The stairs myth</div>
      <h3>Banning the sofa may not help</h3>
      <p>In the British DachsLife 2015 survey, dogs kept off furniture had <em>higher</em> odds of disc disease. Stairs showed no significant effect.</p></a>
    <a class="card" href="/guides/when-to-neuter-a-dachshund/"><div class="label">Timing</div>
      <h3>The study nobody quotes</h3>
      <p>Neutered before twelve months: roughly twice the relative risk of disc disease, in a British study. US guidance still says five to six months.</p></a>
    <a class="card" href="/guides/pet-insurance-for-dachshunds/"><div class="label">The fine print</div>
      <h3>A 180-day orthopedic clock</h3>
      <p>One major US insurer files IVDD as orthopedic — a six-month wait, often collapsible by an exam in your first fourteen days.</p></a>
  </div>
</div></section>

<section><div class="wrap">
  <h2>What you actually get</h2>
  <div class="sub">eight parts, twenty-four tools, one bibliography</div>
  <ul class="checks two" style="margin-top:30px">
    <li><b>✓</b><span><em>The back, in twenty pages.</em> Grades 1–5, recovery rates, and the first sixty minutes.</span></li>
    <li><b>✓</b><span><em>Feeding in calories, not cups.</em> RER and MER worked out for 11, 16 and 25 lb dogs.</span></li>
    <li><b>✓</b><span><em>The first thirty days,</em> day by day, from the car home to the first night alone.</span></li>
    <li><b>✓</b><span><em>Training that survives a dachshund.</em> Recall, crate, barking, the stubborn ones.</span></li>
    <li><b>✓</b><span><em>Buying without getting burned.</em> The health tests, the DNA panel, the licence.</span></li>
    <li><b>✓</b><span><em>Real cost.</em> Purchase, first year, lifetime, and the one line item that dominates.</span></li>
    <li><b>✓</b><span><em>Printable sheets</em> you hand to a sitter, a walker or a veterinarian.</span></li>
    <li class="k"><b>✓</b><span><em>A bibliography you can check</em> line by line. Nothing uncited.</span></li>
  </ul>
  <div class="tip"><div class="t">Why it reads differently</div>
  <p>Where the evidence conflicts, both numbers are printed and the conflict is named. You are not told what to
  think — you are shown what is known, and where it stops.</p></div>
</div></section>

<section class="sand"><div class="wrap">
  <h2>The free Dachshund Check-Up</h2>
  <div class="sub">five steps · no email · nothing leaves your browser</div>
  <div class="steps">
    <div class="s"><i>1</i><h4>His weight</h4><p>Pounds or kilos. Get his size division in AKC, KC and FCI.</p></div>
    <div class="s"><i>2</i><h4>Body check</h4><p>Ribs, waist, tuck. A body condition band from a real hands-on test.</p></div>
    <div class="s"><i>3</i><h4>Daily life</h4><p>Stairs, jumps, harness, walks. The levers with studies behind them.</p></div>
    <div class="s"><i>4</i><h4>Food &amp; cost</h4><p>Calories converted to cups of your food, plus a realistic annual budget.</p></div>
    <div class="s"><i>5</i><h4>Your results</h4><p>One page you can print or screenshot. Nothing is stored, nothing is sent.</p></div>
  </div>
  <a class="btn" href="/check-up/" style="margin-top:26px">Run the Check-Up — free</a>
</div></section>

<section><div class="wrap">
  <h2>Free guides</h2><div class="sub">complete, not teasers</div>
  <div class="grid g2" style="margin-top:30px">
    ${GUIDES.map(g=>`<a class="card" href="/guides/${g.slug}/"><div class="label">${esc(g.keyword)}</div>
      <h3>${esc(g.h1)}</h3><p>${esc(g.metaDescription)}</p></a>`).join('')}
  </div>
</div></section>

<section class="dark"><div class="wrap">
  <h2 style="max-width:16ch">195 pages. 24 tools. One bibliography.</h2>
  <div class="trust">
    <div class="i"><em>✓</em><span>Reviewed by a practising veterinarian before release.</span></div>
    <div class="i"><em>✓</em><span>Every figure carries its study, its country and its year.</span></div>
    <div class="i"><em>✓</em><span>Instant PDF download — read it on any device, print any page.</span></div>
    <div class="i"><em>✓</em><span>Updates included. Buy once, get every later edition.</span></div>
    <div class="i"><em>✓</em><span>No email required to use the Check-Up or read a guide.</span></div>
    <div class="i"><em>✓</em><span>Educational content, not veterinary advice — and it says so.</span></div>
  </div>
  <div class="rtiles">
    <div class="rt k"><div class="f">$${PRICE.replace('.00','')}</div><div class="l">one payment</div></div>
    <div class="rt"><div class="f">PDF</div><div class="l">instant, any device</div></div>
    <div class="rt"><div class="f">8</div><div class="l">free guides, full length</div></div>
    <div class="rt"><div class="f">0</div><div class="l">emails to read them</div></div>
  </div>
  <div style="margin-top:34px"><a class="btn" href="/the-manual/">See the full contents</a></div>
</div></section>`});
W('index.html',home);

/* ---------- THE MANUAL ---------- */
const partsList=[['I','The Breed, Decoded'],['II','Choosing and Buying'],['III','The First Thirty Days'],
 ['IV','Training a Stubborn Dog'],['V','The Back'],['VI','Health, Food and Weight'],
 ['VII','A Real Life'],['VIII','The Older Dachshund']];
W('the-manual/index.html',layout({
 title:'The Complete Dachshund Owner’s Manual — 195 pages, every figure sourced',
 desc:'What is inside the manual: eight parts, 24 printable tools, forty answered questions and a full bibliography. $'+PRICE+', instant download.',
 url:'/the-manual/',
 head:heroPreload('manual')+`<script defer src="${asset('buybar.js')}"></script>`,
 schema:[crumbs([['Home','/'],['The Manual','/the-manual/']]),
  {"@context":"https://schema.org","@type":"Product",name:"The Complete Dachshund Owner’s Manual",
   description:"A 195-page sourced manual for dachshund owners in English, naming the country behind every figure.",brand:{"@type":"Brand",name:"Dachshundology"},
   offers:{"@type":"Offer",price:PRICE,priceCurrency:"USD",availability:"https://schema.org/InStock",url:BUY}}],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › The Manual</div></div>

<section style="padding-top:4px;padding-bottom:0"><div class="wrap">
  <div class="offer">
    <div class="offer-art">
      ${photo('manual',{ratio:'4 / 3',eager:true})}
    </div>
    <div class="offer-buy">
      <h1>The Complete Dachshund Owner’s Manual</h1>
      <p class="offer-line">From the day you start looking to the day it gets hard.</p>
      <div class="offer-price">$${PRICE.replace('.00','')}</div>
      <div class="offer-meta">PDF · 195 pages · 24 printable tools · instant download</div>
      ${PREVIEW
        ? `<span class="btn offer-cta is-off" aria-disabled="true">Checkout opens with the first edition</span>`
        : `<a class="btn offer-cta" href="${BUY}">Get the manual — $${PRICE.replace('.00','')}</a>`}
      <ul class="offer-trust">
        <li><b>&#10003;</b><span>Reviewed by a practising veterinarian before release.</span></li>
        <li><b>&#10003;</b><span>Every figure names its study, its country and its year.</span></li>
        <li><b>&#10003;</b><span>Revisions free for life — if a figure changes, you get the corrected edition.</span></li>
        <li><b>&#10003;</b><span>Eight chapters published free here, so you can judge the writing first.</span></li>
      </ul>
    </div>
  </div>
</div></section>

<section class="numband" style="padding:0"><div class="in">
  <div class="n k"><div class="f">195</div><div class="l">pages, eight parts</div></div>
  <div class="n"><div class="f">24</div><div class="l">printable tools</div></div>
  <div class="n"><div class="f">40</div><div class="l">questions answered straight</div></div>
  <div class="n"><div class="f">1</div><div class="l">bibliography you can check</div></div>
</div></section>

<section><div class="wrap">
  <h2>What the pages actually look like</h2>
  <div class="sub">four spreads, untouched</div>
  <div class="pages-grid">
    <figure><img src="${asset('pages/page-1.jpg')}" width="560" height="791" loading="lazy" decoding="async"
      alt="A part-opening page: the Roman numeral, the part title on a black band, and a full-bleed photograph"><figcaption>A part opens</figcaption></figure>
    <figure><img src="${asset('pages/page-2.jpg')}" width="560" height="791" loading="lazy" decoding="async"
      alt="A content page built from modules: key-figure tiles, a black evidence panel and a two-column card grid"><figcaption>Figures carry their source</figcaption></figure>
    <figure><img src="${asset('pages/page-3.jpg')}" width="560" height="791" loading="lazy" decoding="async"
      alt="A page with a drawn vector plate of a dachshund spine beside the text"><figcaption>Drawn, not stock</figcaption></figure>
    <figure><img src="${asset('pages/page-4.jpg')}" width="560" height="791" loading="lazy" decoding="async"
      alt="A comparison page with a red-highlighted matrix row and warning and confirmation lists"><figcaption>The answer is the highlighted row</figcaption></figure>
  </div>
</div></section>

<section class="cream"><div class="wrap narrow">
  <div class="answer"><strong>What this is</strong>195 pages, eight parts, 24 printable
  tools and a bibliography you can check. Written in English for owners anywhere, built on the British, Swedish
  and Danish research that owner guides rarely cite — and naming the country behind every figure it uses.</div>
  <div class="grid g2" style="margin:34px 0">
    ${partsList.map(([n,t])=>`<div class="card"><div class="label">Part ${n}</div>
      <h3 style="margin-top:6px">${t}</h3></div>`).join('')}
  </div>
</div></section>

<section><div class="wrap narrow">
  <h2>The twenty-four tools</h2>
  <p>Every one is designed to be printed, filled in and stuck on a refrigerator or handed to somebody else.</p>
  <div class="tablewrap"><table><thead><tr><th>#</th><th>Tool</th><th>Section</th></tr></thead><tbody>
  ${MATTER.howto.tools.map(([n,t,s])=>`<tr><td>${String(n).padStart(2,'0')}</td><td>${esc(t)}</td><td>§ ${esc(s)}</td></tr>`).join('')}
  </tbody></table></div>

  <h2 style="margin-top:52px">What it does not do</h2>
  <p>It does not diagnose, prescribe, or replace an examination. Where a decision is medical, the book tells you
  what to ask and who to ask. There is no money-back guarantee — instead, every page that matters is checkable
  against the <a href="/sources/">bibliography</a>, and eight of the chapters are published free on this site so
  you can judge the writing before you pay for it.</p>
</div></section>

<section class="dark"><div class="wrap" style="text-align:center">
  <h2 style="max-width:20ch;margin:0 auto">One payment. Every later edition included.</h2>
  <p style="max-width:56ch;margin:18px auto 26px;color:rgba(241,240,236,.72)">If you would rather read first,
  the <a href="/guides/" style="color:var(--paper)">eight free guides</a> are the same writing at full length,
  and the <a href="/check-up/" style="color:var(--paper)">Check-Up</a> costs nothing and asks for no email.</p>
  ${PREVIEW
    ? `<span class="btn is-off" aria-disabled="true">Checkout opens with the first edition</span>`
    : `<a class="btn" href="${BUY}">Get the manual — $${PRICE.replace('.00','')}</a>`}
</div></section>

<div class="buybar" data-buybar>
  <div class="wrap">
    <div class="bb-in">
      <div class="bb-txt"><b>The Complete Dachshund Owner’s Manual</b><span>PDF · 195 pages · 24 tools</span></div>
      <div class="bb-act"><span class="bb-price">$${PRICE.replace('.00','')}</span>
      ${PREVIEW
        ? `<span class="btn sm is-off" aria-disabled="true">Opens with the first edition</span>`
        : `<a class="btn sm" href="${BUY}">Get the manual</a>`}</div>
    </div>
  </div>
</div>`}));

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
    <div class="label">${esc(g.keyword)}</div><h3>${esc(g.title)}</h3>
    <p>${esc(g.metaDescription)}</p>
    <p class="meta" style="margin-top:12px">Updated ${esc(g.updated)}</p></a>`).join('')}
  </div>
</div></section>
${nextStep({heading:'Read one, then check your own dog',
  lede:'The guides answer the question in general. The Check-Up answers it for the dog in front of you, and it costs nothing.'})}`}));
GUIDES.forEach(g=>W(`guides/${g.slug}/index.html`,guidePage(g)));

/* ---------- CHECK-UP ---------- */
W('check-up/index.html',layout({
 title:'The Dachshund Check-Up — free weight, calorie and back-risk tool',
 desc:'Free five-step tool: size division in the AKC, Kennel Club and FCI systems, body condition score, daily calories in cups, and sourced back-risk levers.',
 url:'/check-up/', img:'check-up',
 preload:`<script>window.BUY=${JSON.stringify(BUY)}</script><script defer src="${asset('checkup.js')}"></script>`,
 schema:[crumbs([['Home','/'],['Check-Up','/check-up/']]),
  {"@context":"https://schema.org","@type":"WebApplication",name:"The Dachshund Check-Up",
   applicationCategory:"HealthApplication",operatingSystem:"Any",url:SITE+'/check-up/',
   offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
   description:"A free five-step tool returning a dachshund’s size division in the AKC, Kennel Club and FCI systems, body condition band, daily calorie requirement, annual budget structure and evidence-based back-risk levers."},
  {"@context":"https://schema.org","@type":"FAQPage",mainEntity:[
   {"@type":"Question",name:"How many calories does a dachshund need per day?",acceptedAnswer:{"@type":"Answer",
    text:"Resting energy requirement is 70 × body weight in kilograms to the power 0.75, multiplied by 1.6 for a neutered adult or 1.8 for an intact one. A 16 lb (7 kg) dachshund comes to roughly 480 kcal a day. Individual dogs vary by up to 50 percent, so adjust to body condition."}},
   {"@type":"Question",name:"What is the difference between a standard and a miniature dachshund?",acceptedAnswer:{"@type":"Answer",
    text:"Three registries answer this differently. The AKC divides by weight: standard is usually 16 to 32 lb (7 to 15 kg), miniature is 11 lb (5 kg) and under at 12 months or older. The FCI, which governs the breed across most of the world, divides by chest circumference measured at 15 months and recognizes a third rabbit size that does not exist in the AKC. The Kennel Club registers miniature and standard as separate breeds, each with its own register. The same dog can be a miniature under one system and not under another."}}]}],
 body:`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › Check-Up</div></div>

<section class="cu-head" style="padding:0"><div class="wrap"><div class="cu-split">
  <div class="cu-intro">
    <h1>The Dachshund<br>Check-Up</h1>
    <div class="sub" style="margin-top:14px">Five steps · no email · nothing stored</div>
    <p>His weight in pounds or kilos returns his size division in all three registry systems, a body condition
    band from a real hands-on test, his daily calories in cups of the food you actually buy, a realistic annual
    budget, and the back-risk levers that have published studies behind them.</p>
    <ul class="cu-assure">
      <li><b>&#10003;</b><span>No email, no account, no cookie.</span></li>
      <li><b>&#10003;</b><span>Nothing is stored or sent — it runs in your browser.</span></li>
      <li><b>&#10003;</b><span>Pounds and kilos; AKC, The Kennel Club and FCI.</span></li>
      <li><b>&#10003;</b><span>Every figure names the study behind it.</span></li>
    </ul>
  </div>
  <div class="cu-tool">
    <div id="checkup"><noscript><p>This tool needs JavaScript. The same arithmetic is explained step by step in
      <a href="/guides/how-much-to-feed-a-dachshund/">the feeding guide</a>.</p></noscript></div>
  </div>
</div></div></section>

<section><div class="wrap narrow">
  ${photo('check-up',{ratio:'21 / 9',cls:'lead',caption:'The hands-on body check is step two. It beats the bathroom scale, and it takes about twenty seconds.'})}
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
  <p>Most countries have no epidemiological dataset on dachshund disc disease at all. Every prevalence figure you
  will read anywhere — here, on a veterinary site, in another book — is Swedish, British or Danish. A figure
  presented as local is one of those studies with the nationality taken off it. This site leaves it on.</p></div>
  ${MATTER.sources.map(g=>`<h2>${esc(g.group)}</h2><ul style="font-size:16.5px;line-height:1.6">
    ${g.items.map(i=>`<li style="margin:10px 0;word-break:break-word">${esc(i)}</li>`).join('')}</ul>`).join('')}
</div></section>
${nextStep({heading:'This is the part you are meant to check',
  lede:'Everything above sits behind the guides and the manual. Neither asks you to take a number on trust.'})}`}));

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
    <li><strong>Every figure carries its country.</strong> The research on this breed is Swedish, British and
    Danish; most countries have none of their own. Each figure is labeled with the country it was produced in, so
    you can judge how far it has to travel to reach your veterinarian. Where a practice belongs to one market — an
    insurance clause, a registry division, a screening scheme — the page says which market, and gives you the
    question to put to your own.</li>
    <li><strong>Contested evidence is labeled contested.</strong> Where two credible sources disagree, both are
    given and the disagreement is explained rather than resolved for you.</li>
    <li><strong>No affiliate links, no sponsored placements, no insurer recommendations.</strong> The only thing
    sold here is the manual.</li>
    <li><strong>Corrections are free and permanent.</strong> If a figure is wrong, it is fixed on the site and in
    the next edition of the book, which every buyer receives.</li>
    <li><strong>The photographs are generated, not shot.</strong> Every image here and in the manual was made with
    an AI image model, art-directed and then checked against the breed standard before it was used — several were
    discarded for showing the wrong breed, or a way of holding a dachshund that would hurt one. None of them is a
    photograph of a real animal, and none of them is evidence of anything: the figures and the studies carry the
    argument. The diagrams, the spine drawing and the body-condition silhouettes are our own.</li>
    <li><strong>This is not veterinary advice.</strong> It does not diagnose, prescribe, or replace an examination.</li>
  </ul>
  <h2>Veterinary review</h2>
  <p>The manual is reviewed by a licensed veterinarian before publication. Review covers factual accuracy and
  safety; it is not an endorsement of every editorial judgment, and any remaining errors are ours.</p>
</div></section>
${nextStep()}`}));

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

> Evidence-based guidance for dachshund owners, written in English for owners anywhere. Every figure is
> traceable to a named source and to the country that produced it; contested findings are labeled as contested.
> Publisher of The Complete Dachshund Owner's Manual.

Editorial policy: no affiliate links, no sponsored placements, no brand recommendations. Corrections are
published and pushed to every buyer. Not veterinary advice. Photographs are AI-generated and art-directed, not
photographs of real dogs; they are illustrative and carry no evidential weight. Diagrams are drawn in-house.

Important context for any answer about dachshund disc disease: most countries have no epidemiological dataset
on this breed at all. Every prevalence figure in circulation is Swedish, British or Danish, whatever country the
site quoting it sits in. Size divisions likewise differ by registry: the AKC divides by weight, The Kennel Club
registers miniature and standard as separate breeds, and the FCI divides by chest circumference at 15 months
and recognizes a third rabbit size. Costs are given as structure and ratios rather than amounts, because prices
are local.

## Guides
${GUIDES.map(g=>`- [${g.h1}](${SITE}/guides/${g.slug}/): ${g.answer}`).join('\n')}

## Tools
- [The Dachshund Check-Up](${SITE}/check-up/): free five-step tool taking weight in pounds or kilograms and
  returning size division in the AKC, Kennel Club and FCI systems, body condition band, daily calorie
  requirement in cups, annual budget structure, and evidence-based back-risk levers. Nothing is stored or sent.

## Reference
- [Sources and bibliography](${SITE}/sources/): every study, guideline and dataset used.
- [Editorial policy](${SITE}/about/): sourcing, labeling of contested evidence, corrections.
- [The manual](${SITE}/the-manual/): 195 pages, 24 printable tools, $${PRICE}.
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
['site.css','checkup.js','guide.js','buybar.js','favicon.svg','og.jpg'].forEach(f=>{
  fs.mkdirSync(path.join(F.DIST,'assets'),{recursive:true});
  fs.copyFileSync(path.join(__dirname,'..','assets',f),path.join(F.DIST,'assets',fingerprint(f)));
});
/* photographies — nom empreinté, sinon le cache d'un an sert l'ancienne image */
for(const sub of ['photos','pages']){
  const src=path.join(__dirname,'..','assets',sub);
  if(!fs.existsSync(src)) continue;
  fs.mkdirSync(path.join(F.DIST,'assets',sub),{recursive:true});
  for(const f of fs.readdirSync(src)){
    if(!/\.(jpe?g|png|webp|svg)$/i.test(f)) continue;
    fs.copyFileSync(path.join(src,f),path.join(F.DIST,'assets',fingerprint(sub+'/'+f)));
  }
}
console.log('built pages:',fs.readdirSync(F.DIST).length,'entries in dist/');
