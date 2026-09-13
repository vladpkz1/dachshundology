const fs=require('fs'), path=require('path');
const K=require('./kit.js');
const GUIDES=require('./guides.js');
const ROOT=__dirname, DIST=path.join(ROOT,'dist');
fs.rmSync(DIST,{recursive:true,force:true});   // sinon les fichiers d'une build précédente restent
const PREVIEW=true;                                   // ← false le jour de la mise en ligne
const SITE=PREVIEW?'https://dachshundology.vercel.app':'https://dachshundology.com';
const BUY='/the-manual/';                             // ← remplacer par l'URL Payhip le moment venu
const PRICE='45.00';
const esc=s=>String(s==null?'':s);
const W=(p,c)=>{const f=path.join(DIST,p);fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,c);};

const CREST=K.crest({d:34,ring:'#093B2F',dog:'#093B2F'});
const CREST_G=K.crest({d:120,ring:'#093B2F',dog:'#093B2F'});
const DACH=K.dachSolid({w:300,fill:'#093B2F'});
const DACH_CREAM=K.dachSolid({w:260,fill:'rgba(250,240,213,.94)'});
const CREST_C=K.crest({d:34,ring:'#FAF0D5',dog:'#FAF0D5'});

const NAV=[['/the-manual/','The Manual'],['/guides/','Free Guides'],['/check-up/','Check-Up'],
           ['/about/','About']];

/* ---------- empreinte de contenu sur les assets ----------
   Vercel sert /assets/* en immutable pendant un an. Sans empreinte dans le nom,
   un visiteur déjà venu garde l'ancienne image ou l'ancienne CSS pendant un an. */
const crypto=require('crypto');
const ASSETDIR=path.join(__dirname,'..','assets');
const _fp={};
function fingerprint(rel){
  if(_fp[rel]!==undefined) return _fp[rel];
  let out=rel;
  try{
    const h=crypto.createHash('sha1').update(fs.readFileSync(path.join(ASSETDIR,rel))).digest('hex').slice(0,8);
    const i=rel.lastIndexOf('.');
    out=rel.slice(0,i)+'.'+h+rel.slice(i);
  }catch(e){}
  _fp[rel]=out; return out;
}
const asset=rel=>'/assets/'+fingerprint(rel);
const assetList=()=>Object.entries(_fp);

/* ---------- photographies ---------- */
const ALT={
 'home-hero':'A red smooth-haired dachshund sitting front-on against a plain cream studio backdrop',
 'manual':'A red smooth-haired dachshund standing in full side profile, showing the long level back',
 'guides-hub':'A red dachshund walking along a woodland path, seen in full profile',
 'check-up':'A black-and-tan dachshund on grass taking a treat from an open hand',
 'about':'A wirehaired dachshund standing against a plain studio backdrop, beard and eyebrows visible',
 'dachshund-back-problems-ivdd':'A longhaired dachshund resting on the back of a green velvet sofa beside a window',
 'are-stairs-bad-for-dachshunds':'A dachshund walking down a low ramp from a sofa onto a wooden floor',
 'when-to-neuter-a-dachshund':'A black-and-tan dachshund puppy sitting in soft window light',
 'pet-insurance-for-dachshunds':'A dachshund secured in a car harness, looking out of the window',
 'how-much-to-feed-a-dachshund':'A flat lay of two ceramic bowls, a harness, a leash and a folded blanket on a pale oak table',
 'dachshund-weight-chart':'A standard and a miniature dachshund standing side by side, the size difference visible',
 'questions-to-ask-a-dachshund-breeder':'A longhaired red dachshund standing in side profile against a studio backdrop',
 'how-much-does-a-dachshund-cost':'A dachshund asleep in a wire crate beside a bed, one lamp lit',
};
function photo(name,{ratio='3 / 2',cls='',caption='',eager=false,alt=null}={}){
  return `<figure class="ph ${cls}" style="--ar:${ratio}">
  <img src="${asset('photos/'+name+'.jpg')}" alt="${esc(alt||ALT[name]||'')}"
       loading="${eager?'eager':'lazy'}" decoding="async" fetchpriority="${eager?'high':'auto'}">
  ${caption?`<figcaption>${esc(caption)}</figcaption>`:''}</figure>`;
}

function layout({title,desc,url,body,schema=[],cls='',preload='',img=''}){
  const ld=schema.map(s=>`<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('');
  return `<!doctype html><html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${SITE}${url}">${PREVIEW?'\n<meta name="robots" content="noindex, nofollow">':''}
<meta property="og:type" content="website"><meta property="og:site_name" content="Dachshundology">
<meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${SITE}${url}"><meta name="twitter:card" content="summary_large_image">${img?`\n<meta property="og:image" content="${SITE}${asset('photos/'+img+'.jpg')}"><meta name="twitter:image" content="${SITE}${asset('photos/'+img+'.jpg')}"><meta property="og:image:alt" content="${esc(ALT[img]||'')}">`:''}
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400..700&display=swap">
<link rel="stylesheet" href="${asset('site.css')}">${preload}
<link rel="icon" href="${asset('favicon.svg')}" type="image/svg+xml">
${ld}</head>
<body class="${cls}">
<header class="site"><div class="wrap bar">
  <a class="brandmark" href="/">${CREST}<span>Dachshundology</span></a>
  <nav>${NAV.map(([h,t])=>`<a href="${h}">${t}</a>`).join('')}
  <a class="cta-nav" href="/the-manual/">The manual</a></nav>
</div></header>
<div class="stripe"></div>
${body}
<footer class="site"><div class="wrap">
  <div class="fgrid">
    <div><div class="brandmark" style="letter-spacing:.24em;color:var(--cream)">${CREST_C}<span>Dachshundology</span></div>
      <p style="margin-top:14px;max-width:34ch">The dachshund manual that shows its sources. Written in English for
      owners anywhere, built on the research most owner guides never cite.</p></div>
    <div><h4>Read</h4><ul>${GUIDES.slice(0,4).map(g=>`<li><a href="/guides/${g.slug}/">${esc(g.h1)}</a></li>`).join('')}</ul></div>
    <div><h4>More</h4><ul>${GUIDES.slice(4).map(g=>`<li><a href="/guides/${g.slug}/">${esc(g.h1)}</a></li>`).join('')}</ul></div>
    <div><h4>The book</h4><ul>
      <li><a href="/the-manual/">What is inside</a></li><li><a href="/check-up/">The Check-Up</a></li>
      <li><a href="/sources/">Bibliography</a></li><li><a href="/about/">About &amp; editorial policy</a></li>
      <li><a href="/the-manual/">Buy — $${PRICE}</a></li></ul></div>
  </div>
  <div class="fine"><span>© 2026 Dachshundology. Educational content, not veterinary advice.</span>
    <span>Figures current as of September 2026.</span></div>
</div></footer>
</body></html>`;
}

/* ---------- schema helpers ---------- */
const ORG={"@context":"https://schema.org","@type":"Organization","name":"Dachshundology","url":SITE,
  "description":"Evidence-based guidance for dachshund owners in English, naming the country behind every figure.",
  "sameAs":[]};
const WEBSITE={"@context":"https://schema.org","@type":"WebSite","name":"Dachshundology","url":SITE};
const crumbs=(items)=>({"@context":"https://schema.org","@type":"BreadcrumbList",
  itemListElement:items.map(([n,u],i)=>({"@type":"ListItem",position:i+1,name:n,item:SITE+u}))});
const faqSchema=(faq)=>({"@context":"https://schema.org","@type":"FAQPage",
  mainEntity:faq.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))});

/* ---------- guide rendering ---------- */
function blockHTML(b){
  switch(b.t){
    case 'h2': return `<h2 id="${slugify(b.text)}">${b.text}</h2>`;
    case 'h3': return `<h3>${b.text}</h3>`;
    case 'p':  return `<p>${b.text}</p>`;
    case 'ul': return `<ul>${b.items.map(i=>`<li>${i}</li>`).join('')}</ul>`;
    case 'ol': return `<ol>${b.items.map(i=>`<li>${i}</li>`).join('')}</ol>`;
    case 'table': return `<div class="tablewrap"><table>${b.head?`<thead><tr>${b.head.map(h=>`<th>${h}</th>`).join('')}</tr></thead>`:''}
      <tbody>${b.rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
      ${b.caption?`<caption>${b.caption}</caption>`:''}</table></div>`;
    case 'callout': return `<div class="callout ${b.tone||'note'}">${b.title?`<div class="t">${b.title}</div>`:''}<p>${b.text}</p></div>`;
    case 'stat': return `<div class="stat"><span class="fig">${b.figure}</span><span class="lb">${b.label}
      ${b.source?`<br><span class="meta">${b.source}</span>`:''}</span></div>`;
    case 'quote': return `<blockquote style="border-left:3px solid var(--brass);margin:26px 0;padding-left:22px;font-style:italic">${b.text}</blockquote>`;
    default: return '';
  }
}
const slugify=s=>String(s).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);

function guidePage(g){
  const url=`/guides/${g.slug}/`;
  const body=`<div class="wrap"><div class="crumbs"><a href="/">Home</a> › <a href="/guides/">Guides</a> › ${esc(g.h1)}</div></div>
<section style="padding-top:8px">
 <div class="wrap narrow">
  <h1 style="font-size:clamp(32px,5vw,50px)">${esc(g.h1)}</h1>
  <div class="sub">${esc(g.keyword)}</div>
  <p class="meta" style="margin-top:14px">Updated ${esc(g.updated)} · Every figure sourced · <a href="/about/">Editorial policy</a></p>
  ${photo(g.slug,{cls:'lead',eager:true})}
  <div class="answer" style="margin:28px 0"><strong>Short answer</strong>${esc(g.answer)}</div>
  <div class="facts"><div class="label">Key numbers</div><dl>
    ${g.facts.map(([l,v,s])=>`<dt>${l}</dt><dd>${v}</dd>`).join('')}
    <div class="src">Sources: ${[...new Set(g.facts.map(f=>f[2]))].join(' · ')}</div></dl></div>
  <nav class="toc"><div class="label" style="color:var(--camel)">On this page</div>
    <ol>${g.toc.map(t=>`<li><a href="#${slugify(t)}">${t}</a></li>`).join('')}</ol></nav>
  <article>${g.blocks.map(blockHTML).join('\n')}</article>

  <div class="sell">
    <div class="label" style="color:var(--camel)">The long version</div>
    <h3 style="margin:8px 0 10px">The Complete Dachshund Owner’s Manual</h3>
    <p style="margin:0 0 18px">212 pages, 24 printable tools, and the full research trail behind every number on
    this page — including the twenty pages on the back that this guide only summarizes.</p>
    <a class="btn" href="/the-manual/">See what is inside — $${PRICE}</a>
  </div>

  <h2 id="faq">Questions people also ask</h2>
  <div class="faq">${g.faq.map(f=>`<details><summary>${esc(f.q)}</summary><p>${esc(f.a)}</p></details>`).join('')}</div>

  <h2 style="margin-top:48px">Keep reading</h2>
  <div class="grid g3" style="margin-top:18px">${g.related.map(s=>{const r=GUIDES.find(x=>x.slug===s);
    return r?`<a class="card" href="/guides/${r.slug}/"><div class="label">Guide</div><h3>${esc(r.h1)}</h3>
      <p>${esc(r.metaDescription).slice(0,110)}…</p></a>`:''}).join('')}</div>
 </div>
</section>`;
  return layout({title:g.metaTitle, desc:g.metaDescription, url, body, img:g.slug,
    schema:[
      {"@context":"https://schema.org","@type":"Article",headline:g.h1,description:g.metaDescription,
       datePublished:'2026-09-12',dateModified:g.updated,inLanguage:'en-US',
       author:{"@type":"Organization",name:"Dachshundology"},
       publisher:{"@type":"Organization",name:"Dachshundology"},
       mainEntityOfPage:{"@type":"WebPage","@id":SITE+url},
       image:[SITE+asset('photos/'+g.slug+'.jpg')],
       about:{"@type":"Thing",name:"Dachshund"}},
      faqSchema(g.faq),
      crumbs([['Home','/'],['Guides','/guides/'],[g.h1,url]])
    ]});
}
module.exports={PREVIEW,layout,guidePage,photo,ALT,asset,fingerprint,assetList,GUIDES,SITE,BUY,PRICE,CREST,CREST_C,CREST_G,DACH,DACH_CREAM,W,DIST,esc,crumbs,ORG,WEBSITE,slugify,blockHTML};
