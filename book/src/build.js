const fs=require('fs'), path=require('path');
const {CSS}=require('./theme.js');
const K=require('./kit.js');
const ROOT='/home/claude/dachshundology';

const PARTS=[
 {n:'I',   slug:'part1', title:'The Breed, Decoded',        sub:'what you actually bought'},
 {n:'II',  slug:'part2', title:'Choosing and Buying',       sub:'the only part you cannot redo'},
 {n:'III', slug:'part3', title:'The First Thirty Days',     sub:'nobody sleeps, and that is normal'},
 {n:'IV',  slug:'part4', title:'Training a Stubborn Dog',   sub:'he is not being difficult on purpose'},
 {n:'V',   slug:'part5', title:'The Back',                  sub:'the chapter no one gets to skip'},
 {n:'VI',  slug:'part6', title:'Health, Food and Weight',   sub:'the boring pages that buy you years'},
 {n:'VII', slug:'part7', title:'A Real Life',               sub:'a short dog with a long list of opinions'},
 {n:'VIII',slug:'part8', title:'The Older Dachshund',       sub:'the part you read twice, years apart'},
];
const book=PARTS.map(p=>({...p, sections:require(path.join(ROOT,'content',p.slug+'.js'))}));

/* photos réellement présentes */
const have={};
try{ for(const f of fs.readdirSync(path.join(ROOT,'photos'))){
  const m=f.match(/^(\d+)\.(jpe?g|png|webp)$/i); if(m) have[parseInt(m[1],10)]='../photos/'+f; } }catch(e){}
/* rapport largeur/hauteur réel de chaque image, écrit par le script de recadrage */
let haveAR={};
try{ haveAR=JSON.parse(fs.readFileSync(path.join(ROOT,'photos','meta.json'),'utf8')); }catch(e){}

const ILLUS={
  spine: K.spine({w:430}),
  spineWide: K.spine({w:500}),
  bcsLean: K.bcs({w:56,state:'lean',fill:K.C.camel}),
  bcsIdeal: K.bcs({w:56,state:'ideal',fill:K.C.green}),
  bcsHeavy: K.bcs({w:56,state:'heavy',fill:K.C.camel}),
  dach: K.dachSolid({w:150,fill:K.C.green}),
  dachCream: K.dachSolid({w:150,fill:'rgba(246,241,228,.9)',flip:true}),
  crest: K.crest({d:126}),
  crestGreen: K.crest({d:150,ring:K.C.green,dog:K.C.green}),
};

const matter=require(path.join(ROOT,'content','matter.js'));
/* une seule source de vérité : le site rend la note d'auteur, l'index des outils et la
   bibliographie depuis cette même matière. Vercel ne construit que depuis repo/, donc on
   y recopie le fichier à chaque build du livre. */
try{
  const SITE_MATTER=path.join(ROOT,'repo','_generator','content','matter.js');
  if(fs.existsSync(path.dirname(SITE_MATTER))){
    fs.copyFileSync(path.join(ROOT,'content','matter.js'), SITE_MATTER);
  }
}catch(e){ console.warn('matter.js non synchronisé vers repo/:', e.message); }
const payload={ book, have, haveAR, ILLUS, matter, stripe:K.stripe({h:11}), rule:K.dblRule(K.C.green), ruleFlip:K.dblRule(K.C.green,true) };

const ENGINE = fs.readFileSync(path.join(ROOT,'src','engine.js'),'utf8');
const MATTER = fs.readFileSync(path.join(ROOT,'src','matter.js'),'utf8');
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Dachshundology — The Complete Dachshund Owner’s Manual</title>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..600&family=Inter:wght@400..700&display=swap" rel="stylesheet">
<style>${CSS}${fs.readFileSync(path.join(ROOT,'src','book.css'),'utf8')}</style></head>
<body><div id="out"></div>
<script>window.DATA=${JSON.stringify(payload)};</script>
<script>${MATTER}</script>
<script>(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(function(){${ENGINE}});</script></body></html>`;
fs.writeFileSync(path.join(ROOT,'build','book.html'),html);
console.log('sections:',book.reduce((a,p)=>a+p.sections.length,0),
            '· declared pages:',book.reduce((a,p)=>a+p.sections.reduce((b,s)=>b+s.pages,0),0),
            '· photos on disk:',Object.keys(have).length);
