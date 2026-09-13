/* Pages liminaires et annexes — injecté dans engine.js */
window.MATTER=function(D, helpers){
const {node, newPlain, flowInto} = helpers;
const M=D.matter, out=document.getElementById('out');
const esc=s=>String(s==null?'':s);

/* ---------- 1. COUVERTURE ---------- */
function cover(){
  const el=document.createElement('section'); el.className='page cover';
  el.style.cssText='background:var(--green);color:var(--cream)';
  el.innerHTML=`
  <div style="position:absolute;inset:9mm;border:1.6px solid rgba(246,241,228,.55)"></div>
  <div style="position:absolute;inset:11.5mm;border:.6px solid rgba(246,241,228,.35)"></div>
  <div class="pad" style="inset:16mm 20mm 16mm 20mm;display:flex;flex-direction:column;align-items:center;text-align:center">
    <div style="margin-top:1mm">${D.ILLUS.crest}</div>
    <div class="script" style="font-size:20pt;margin-top:7mm;color:var(--brass)">The Complete</div>
    <h1 style="font-size:59pt;line-height:.95;letter-spacing:.05em;margin-top:1mm">DACHSHUND</h1>
    <div class="script" style="font-size:26pt;margin-top:1mm">Owner’s Manual</div>
    <div style="width:52mm;margin-top:6mm">${D.rule.replace(/#1E4032/g,'rgba(246,241,228,.7)')}</div>
    <div class="label" style="margin-top:4mm;color:var(--brass)">Miniature &amp; Standard &nbsp;·&nbsp; Smooth, Wire &amp; Long</div>
    <div style="width:104mm;margin-top:6mm">${D.photoHTML({n:1,h:'74mm',shape:'arch',
      note:'Cover portrait — standard smooth red, three-quarter view, shallow depth of field, warm window light, neutral background.'})}</div>
    <div style="margin-top:auto;width:100%">
      ${D.stripe}
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:5mm">
        <div style="text-align:left">
          <div class="label" style="color:var(--brass)">First Edition · MMXXVI</div>
          <div class="script" style="font-size:12.5pt;margin-top:1.5mm;color:rgba(246,241,228,.85)">reviewed by a licensed veterinarian</div>
        </div>
        <div class="label-sm" style="text-align:right;color:rgba(246,241,228,.6);line-height:11pt">
          <span data-pagecount>—</span> PAGES · 24 TOOLS<br>EVERY FIGURE SOURCED</div>
      </div>
    </div>
  </div>`;
  out.appendChild(el); return el;
}

/* ---------- 2. FAUX-TITRE ---------- */
function halfTitle(){
  const el=newPlain('cream');
  el.querySelector('.pad').innerHTML=`<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
    ${D.ILLUS.crestGreen}
    <div class="label" style="margin-top:9mm;color:var(--green);font-size:9pt;letter-spacing:.34em">DACHSHUNDOLOGY</div>
    <div class="script" style="font-size:15pt;color:var(--camel);margin-top:4mm">the science of the world’s most stubborn dog</div>
  </div>`;
  return el;
}

/* ---------- 3. TITRE + MENTIONS ---------- */
function titlePage(){
  const el=newPlain();
  el.querySelector('.pad').innerHTML=`<div style="height:100%;display:flex;flex-direction:column">
    <div style="margin-top:24mm;text-align:center">
      <div class="script" style="font-size:19pt;color:var(--camel)">The Complete</div>
      <h1 style="font-size:46pt;line-height:1;letter-spacing:.045em;color:var(--green);margin-top:1mm">DACHSHUND</h1>
      <div class="script" style="font-size:23pt;color:var(--green);margin-top:1mm">Owner’s Manual</div>
      <div style="width:60mm;margin:7mm auto 0">${D.rule}</div>
      <div class="label" style="margin-top:5mm;color:var(--slate)">Dachshundology · First Edition · 2026</div>
    </div>
    <div style="margin-top:auto;display:grid;grid-template-columns:1fr 1fr;gap:9mm">
      <div>
        <div class="label" style="color:var(--camel)">A note on what this is</div>
        <p style="margin-top:2.5mm;font-size:9pt;line-height:13.6pt">This manual is a work of reporting and
        synthesis. It is written for owners, not for clinicians, and it does not replace an examination.
        Nothing here diagnoses, prescribes, or authorizes you to withhold veterinary care. Where a decision
        is medical, the book tells you what to ask and who to ask.</p>
        <p style="margin-top:2.5mm;font-size:9pt;line-height:13.6pt">Figures are current as of September 2026.
        Prices, statutes and airline rules change; verify anything you are about to act on.</p>
      </div>
      <div>
        <div class="label" style="color:var(--camel)">Sources and corrections</div>
        <p style="margin-top:2.5mm;font-size:9pt;line-height:13.6pt">Every figure in this book is traceable to a
        named source listed in the bibliography. Claims that the evidence does not settle are labeled as such.
        If you find an error, it will be corrected in the next revision and every buyer receives it.</p>
        <p style="margin-top:2.5mm;font-size:9pt;line-height:13.6pt">© 2026 Dachshundology. All rights reserved.
        No part of this publication may be reproduced or redistributed without written permission.</p>
      </div>
    </div>
  </div>`;
  return el;
}

/* ---------- 4. NOTE DE L'AUTEUR ---------- */
function authorNote(){
  const items=M.author.paras.map((p,i)=>i===0?`<p class="first">${esc(p)}</p>`:`<p>${esc(p)}</p>`);
  return flowInto({title:M.author.title, sub:'and what is wrong with everything else', head:'Front matter',
                   width:'132mm', items});
}

/* ---------- 5. MODE D'EMPLOI ---------- */
function howTo(){
  const h=M.howto;
  const items=[
    ...h.paras.map((p,i)=>i===0?`<p class="first">${esc(p)}</p>`:`<p>${esc(p)}</p>`),
    `<h3 style="margin-top:6mm">The eight things on a page</h3>`,
    ...h.modules.map(([n,d])=>`<div style="border-top:.6px solid #D6CCB4;padding:2.4mm 0">
        <div class="label-sm" style="color:var(--camel)">${esc(n)}</div>
        <div style="font-size:9pt;line-height:13.2pt;margin-top:1mm">${esc(d)}</div></div>`),
    `<h3 style="margin-top:6mm">Three levels of evidence</h3>`,
    `<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6mm;margin-top:3mm">${
      h.levels.map(([n,d],i)=>`<div><span class="tag ${['settled','contested','myth'][i]}">${esc(n)}</span>
        <div style="font-size:9pt;line-height:13.2pt;margin-top:2.4mm">${esc(d)}</div></div>`).join('')}</div>`,
    `<h3 style="margin-top:7mm">The twenty-four tools</h3>`,
    ...h.tools.map(([n,t,s])=>`<div class="leader" style="break-inside:avoid;padding:1.4mm 0;font-size:8.8pt">
        <span class="label-sm" style="color:var(--camel);letter-spacing:.08em">${String(n).padStart(2,'0')}</span>
        <span>${esc(t)}</span><span class="dots"></span><span class="n" style="color:var(--slate)">§ ${esc(s)}</span></div>`)
  ];
  return flowInto({title:h.title, sub:'read this page once, then never again', head:'Front matter', items});
}

/* ---------- 6. SOMMAIRE ---------- */
function contents(){
  const items=[];
  D.book.forEach(p=>{
    items.push(`<div style="break-inside:avoid;margin-top:5mm">
      <div style="display:flex;align-items:baseline;gap:3mm;border-bottom:1.4px solid var(--green);padding-bottom:1.6mm">
        <span style="font-family:var(--display);font-size:15pt;color:var(--green)">${p.n}</span>
        <span style="font-family:var(--display);font-size:13pt;flex:1">${esc(p.title)}</span>
        <span class="n label-sm" data-part="${p.slug}" style="color:var(--slate)">—</span></div></div>`);
    p.sections.forEach(s=>items.push(`<div class="leader" style="break-inside:avoid;padding:1.5mm 0">
      <span class="label-sm" style="color:var(--camel);letter-spacing:.08em">${s.id}</span>
      <span>${esc(s.title)}</span><span class="dots"></span><span class="n" data-sec2="${s.id}">—</span></div>`));
  });
  items.push(`<div style="break-inside:avoid;margin-top:5mm">
      <div style="display:flex;align-items:baseline;gap:3mm;border-bottom:1.4px solid var(--green);padding-bottom:1.6mm">
        <span style="font-family:var(--display);font-size:15pt;color:var(--green)">—</span>
        <span style="font-family:var(--display);font-size:13pt;flex:1">Reference</span></div></div>`);
  [['A','The forty questions owners ask'],['B','Toxic foods — the sheet for the refrigerator'],
   ['C','Answers'],['D','Glossary'],['E','Where to call'],['F','The tools, indexed'],['G','Sources']]
   .forEach(([k,t])=>items.push(`<div class="leader" style="break-inside:avoid;padding:1.5mm 0">
      <span class="label-sm" style="color:var(--camel)">${k}</span><span>${esc(t)}</span>
      <span class="dots"></span><span class="n" data-app="${k}">—</span></div>`));
  return flowInto({title:'Contents', sub:'one hundred and sixty-odd pages, and the eight that matter most',
                   head:'Front matter', cols:2, items});
}

/* ---------- ANNEXES ---------- */
function faq(){
  const items=M.faq.map((f,i)=>`<div style="break-inside:avoid;padding:2.6mm 0;border-top:.6px solid #D6CCB4">
    <div style="display:flex;gap:2.6mm"><span class="label-sm" style="color:var(--camel);flex:0 0 auto">${String(i+1).padStart(2,'0')}</span>
    <div><h3 style="font-size:9.6pt">${esc(f.q)}</h3>
    <p style="margin-top:1.2mm;font-size:8.8pt;line-height:13pt;text-align:left">${esc(f.a)}</p></div></div></div>`);
  return flowInto({title:'The forty questions owners ask', sub:'short answers, with the page that gives the long one',
                   head:'Appendix A', cols:2, items, app:'A'});
}
function toxic(){
  const t=M.toxic;
  const items=[`<p class="lede">${esc(t.intro)}</p>`,
   `<table style="margin-top:5mm"><tr><th>What</th><th>How much matters</th><th>What it does</th><th>How fast</th></tr>
    ${t.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`,
   `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8mm;margin-top:7mm">${
     t.hotlines.map(([n,num,fee])=>`<div class="box"><div class="bt" style="color:var(--oxblood)">${esc(n)}</div>
       <div style="font-family:var(--display);font-size:22pt;color:var(--green);margin-top:1mm">${esc(num)}</div>
       <small style="margin-top:1.6mm">${esc(fee)}</small></div>`).join('')}</div>`,
   `<div class="box blood" style="margin-top:6mm"><div class="bt">Before you call</div><p>${esc(t.note)}</p></div>`];
  return flowInto({title:'Toxic foods', sub:'print this one and put it on the refrigerator',
                   head:'Appendix B', items, app:'B'});
}
function answers(){
  const items=M.answers.map(a=>`<div style="break-inside:avoid;padding:3mm 0;border-top:.6px solid #D6CCB4">
    <div class="label-sm" style="color:var(--camel)">Part ${esc(a.part)}</div>
    ${a.items.map((x,i)=>`<p style="margin-top:1.4mm;font-size:9pt;line-height:13.4pt;text-align:left">
      <strong>${i+1}.</strong> ${esc(x)}</p>`).join('')}</div>`);
  return flowInto({title:'Answers', sub:'no peeking before the questions', head:'Appendix C', cols:2, items, app:'C'});
}
function glossary(){
  const items=M.glossary.map(([t,d])=>`<div style="break-inside:avoid;padding:2.2mm 0;border-top:.6px solid #D6CCB4">
    <h3 style="font-size:9.4pt">${esc(t)}</h3>
    <p style="margin-top:1mm;font-size:8.8pt;line-height:13pt;text-align:left">${esc(d)}</p></div>`);
  return flowInto({title:'Glossary', sub:'the words your vet will use', head:'Appendix D', cols:2, items, app:'D'});
}
function contacts(){
  const items=M.contacts.map(c=>`<div style="break-inside:avoid;display:grid;grid-template-columns:34mm 1fr;gap:5mm;
      padding:3mm 0;border-top:.6px solid #D6CCB4">
      <div class="label-sm" style="color:var(--camel)">${esc(c[0])}</div>
      <div><h3 style="font-size:9.6pt">${esc(c[1])}</h3>
        <p style="margin-top:1mm;font-size:8.8pt;line-height:13pt;text-align:left;word-break:break-word">${esc(c[2])}</p></div></div>`);
  return flowInto({title:'Where to call', sub:'the numbers and links worth keeping',
                   head:'Appendix E', items, app:'E'});
}
function toolIndex(){
  const items=M.howto.tools.map(([n,t,s])=>`<div class="leader" style="break-inside:avoid;padding:2.2mm 0;border-top:.6px solid #D6CCB4">
      <span class="label-sm" style="color:var(--camel)">${String(n).padStart(2,'0')}</span>
      <span>${esc(t)}</span><span class="dots"></span><span class="n">§ ${esc(s)}</span></div>`);
  return flowInto({title:'The tools, indexed', sub:'everything in this book you are meant to print',
                   head:'Appendix F', cols:2, items, app:'F'});
}
function sources(){
  const items=[];
  M.sources.forEach(g=>{
    items.push(`<h3 style="margin-top:5mm;break-after:avoid">${esc(g.group)}</h3>`);
    g.items.forEach(i=>items.push(`<p style="font-size:8.4pt;line-height:12.4pt;text-align:left;margin-top:1.8mm;
      padding-left:5mm;text-indent:-5mm;word-break:break-word">${esc(i)}</p>`));
  });
  return flowInto({title:'Sources', sub:'every number in this book came from one of these',
                   head:'Appendix G', cols:2, items, app:'G'});
}
return {cover, halfTitle, titlePage, authorNote, howTo, contents,
        back:[faq, toxic, answers, glossary, contacts, toolIndex, sources]};
};
