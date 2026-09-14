/* Pages liminaires et annexes — injecté dans engine.js */
window.MATTER=function(D, helpers){
const {node, newPlain, flowInto} = helpers;
const M=D.matter, out=document.getElementById('out');
const esc=s=>String(s==null?'':s);

/* ---------- 1. COUVERTURE ---------- */
function cover(){
  const el=document.createElement('section'); el.className='page cover';
  el.style.cssText='background:var(--ink);color:var(--paper)';
  el.innerHTML=`
  <div style="position:absolute;inset:0;display:flex;flex-direction:column">

    <div style="display:flex;align-items:center;justify-content:space-between;
                padding:11mm 14mm 0 14mm">
      <div style="display:flex;align-items:center;gap:4mm">
        ${D.ILLUS.markPaper}
        <span style="font-family:var(--display);font-weight:800;font-size:12pt;letter-spacing:.02em;
                     text-transform:uppercase">Dachshundology</span>
      </div>
      <span style="font-family:var(--text);font-weight:700;font-size:7pt;letter-spacing:.22em;
                   text-transform:uppercase;color:rgba(241,240,236,.55)">First edition · 2026</span>
    </div>

    <div style="padding:14mm 14mm 0 14mm">
      <span style="display:inline-block;background:var(--sig);color:#fff;font-family:var(--text);
                   font-weight:800;font-size:7.4pt;letter-spacing:.2em;text-transform:uppercase;
                   padding:1.8mm 3.4mm">The complete</span>
      <h1 style="font-family:var(--display);font-weight:800;font-size:63pt;line-height:.83;
                 letter-spacing:-.045em;text-transform:uppercase;margin-top:5mm;color:var(--paper)">
        Dachshund<br>Owner’s<br>Manual</h1>
      <div style="display:flex;gap:2.4mm;flex-wrap:wrap;margin-top:7mm">
        ${['Miniature &amp; standard','Smooth, wire &amp; long','Every figure sourced']
          .map(t=>`<span style="font-family:var(--text);font-weight:700;font-size:6.6pt;letter-spacing:.16em;
            text-transform:uppercase;border:1.2px solid rgba(241,240,236,.4);padding:1.6mm 3mm;
            color:rgba(241,240,236,.82)">${t}</span>`).join('')}
      </div>
    </div>

    <div style="flex:1;margin-top:9mm;overflow:hidden">
      ${D.photoHTML({n:1,h:'100%',shape:'rect',bleed:true,
        note:'Cover portrait — standard smooth red, three-quarter view, shallow depth of field, warm window light, neutral background.'})}
    </div>

    <div style="display:grid;grid-template-columns:1fr auto;align-items:center;gap:6mm;
                background:var(--sig);color:#fff;padding:5.6mm 14mm">
      <span style="font-family:var(--display);font-weight:800;font-size:13pt;letter-spacing:-.02em;
                   text-transform:uppercase">Reviewed by a licensed veterinarian</span>
      <span style="font-family:var(--text);font-weight:700;font-size:7pt;letter-spacing:.18em;
                   text-transform:uppercase;text-align:right;line-height:11pt">
        <span data-pagecount>—</span> pages · 24 tools<br>every figure sourced</span>
    </div>
  </div>`;
  out.appendChild(el); return el;
}

/* ---------- 2. FAUX-TITRE ---------- */
function halfTitle(){
  const el=newPlain();
  el.querySelector('.pad').innerHTML=`<div style="height:100%;display:flex;flex-direction:column;justify-content:center">
    ${D.ILLUS.mark}
    <div style="font-family:var(--display);font-weight:800;font-size:26pt;line-height:.92;
                letter-spacing:-.04em;text-transform:uppercase;margin-top:8mm;max-width:120mm">
      The science of the world’s most stubborn dog</div>
    <div style="height:1.4px;background:var(--ink);margin-top:8mm;width:58mm"></div>
    <div style="font-family:var(--text);font-weight:700;font-size:7.4pt;letter-spacing:.24em;
                text-transform:uppercase;color:var(--sig);margin-top:5mm">Dachshundology</div>
  </div>`;
  return el;
}

/* ---------- 3. TITRE + MENTIONS ---------- */
function titlePage(){
  const el=newPlain();
  el.querySelector('.pad').innerHTML=`<div style="height:100%;display:flex;flex-direction:column">
    <div>
      <span style="display:inline-block;background:var(--sig);color:#fff;font-family:var(--text);
        font-weight:800;font-size:7pt;letter-spacing:.2em;text-transform:uppercase;padding:1.6mm 3mm">The complete</span>
      <h1 style="font-family:var(--display);font-weight:800;font-size:44pt;line-height:.86;
                 letter-spacing:-.045em;text-transform:uppercase;margin-top:4mm">Dachshund<br>Owner’s Manual</h1>
      <div style="font-family:var(--text);font-weight:700;font-size:7.4pt;letter-spacing:.2em;
                  text-transform:uppercase;color:var(--grey);margin-top:6mm">
        Dachshundology · First edition · 2026</div>
    </div>
    <div style="margin-top:auto;border-top:1.4px solid var(--ink);display:grid;grid-template-columns:1fr 1fr">
      <div style="padding:6mm 6mm 0 0;border-right:1.4px solid var(--ink)">
        <div class="label-sm" style="color:var(--sig);font-weight:700;letter-spacing:.18em">A note on what this is</div>
        <p style="margin-top:3mm;font-size:9pt;line-height:13.6pt">A work of reporting and synthesis, written for
        owners and not for clinicians. It does not replace an examination. Nothing here diagnoses, prescribes, or
        authorizes you to withhold veterinary care. Where a decision is medical, the book tells you what to ask
        and who to ask.</p>
        <p style="margin-top:3mm;font-size:9pt;line-height:13.6pt">Figures are current as of September 2026.
        Prices, statutes and airline rules change; verify anything you are about to act on.</p>
      </div>
      <div style="padding:6mm 0 0 6mm">
        <div class="label-sm" style="color:var(--sig);font-weight:700;letter-spacing:.18em">Sources and corrections</div>
        <p style="margin-top:3mm;font-size:9pt;line-height:13.6pt">Every figure is traceable to a named source in
        the bibliography. Claims the evidence does not settle are labeled as such. If you find an error it will be
        corrected in the next revision, and every buyer receives it.</p>
        <p style="margin-top:3mm;font-size:9pt;line-height:13.6pt">© 2026 Dachshundology. All rights reserved.
        No part of this publication may be reproduced or redistributed without written permission.</p>
      </div>
    </div>
  </div>`;
  return el;
}

/* ---------- 4. NOTE DE L'AUTEUR ---------- */
function authorNote(){
  const A=M.author;
  const items=[
    `<p class="first">${esc(A.paras[0])}</p>`,
    `<div class="modh" style="margin-top:6mm">Three ways the answer is not there</div>`,
    `<div class="cards n3">${A.problem.map(([t,d],i)=>
      `<div class="mcard${i===2?' s':''}"><div class="t">${esc(t)}</div><p>${esc(d)}</p></div>`).join('')}</div>`,
    `<p style="margin-top:5.5mm">${esc(A.paras[1])}</p>`,
    `<p>${esc(A.paras[2])}</p>`,
    `<div class="numrule"><div class="nh">The rule</div><ol>${A.rule.map(r=>`<li>${esc(r)}</li>`).join('')}</ol></div>`,
    `<div class="modh acc" style="margin-top:6.5mm">Pages that will contradict somebody who meant well</div>`,
    `<div class="signals one"><ul>${A.contradict.map(c=>`<li>${esc(c)}</li>`).join('')}</ul></div>`,
    ...A.closing.map(p=>`<p>${esc(p)}</p>`),
    `<div class="cards n3" style="margin-top:6mm">${A.limits.map(([t,d],i)=>
      `<div class="mcard${i===0?' a':''}"><div class="t">${esc(t)}</div><p>${esc(d)}</p></div>`).join('')}</div>`,
    `<div class="endnote"><div class="k">The whole of it, in one line</div>
      <div class="s">You are not told what to think. You are shown what is known, and where it stops.</div>
      <p>Every figure in these pages names its study, its country and its year. Where nobody has measured it yet,
      the page says so and moves on.</p></div>`
  ];
  return flowInto({title:A.title, sub:'and what is wrong with everything else', head:'Front matter', items});
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
    items.push(`<div style="break-inside:avoid;margin-top:3.6mm">
      <div style="display:flex;align-items:baseline;gap:3mm;border-bottom:1.4px solid var(--green);padding-bottom:1.2mm">
        <span style="font-family:var(--display);font-size:13.5pt;color:var(--green)">${p.n}</span>
        <span style="font-family:var(--display);font-size:11.8pt;flex:1">${esc(p.title)}</span>
        <span class="n label-sm" data-part="${p.slug}" style="color:var(--slate)">—</span></div></div>`);
    p.sections.forEach(s=>items.push(`<div class="leader" style="break-inside:avoid;padding:0.84mm 0">
      <span class="label-sm" style="color:var(--camel);letter-spacing:.08em">${s.id}</span>
      <span>${esc(s.title)}</span><span class="dots"></span><span class="n" data-sec2="${s.id}">—</span></div>`));
  });
  items.push(`<div style="break-inside:avoid;margin-top:3.6mm">
      <div style="display:flex;align-items:baseline;gap:3mm;border-bottom:1.4px solid var(--green);padding-bottom:1.2mm">
        <span style="font-family:var(--display);font-size:13.5pt;color:var(--green)">—</span>
        <span style="font-family:var(--display);font-size:11.8pt;flex:1">Reference</span></div></div>`);
  [['A','The forty questions owners ask'],['B','Toxic foods — the sheet for the refrigerator'],
   ['C','Answers'],['D','Glossary'],['E','Where to call'],['F','The tools, indexed'],['G','Sources']]
   .forEach(([k,t])=>items.push(`<div class="leader" style="break-inside:avoid;padding:0.84mm 0">
      <span class="label-sm" style="color:var(--camel)">${k}</span><span>${esc(t)}</span>
      <span class="dots"></span><span class="n" data-app="${k}">—</span></div>`));
  return flowInto({title:'Contents', sub:'eight parts, fifty-five sections, and the twenty-four tools',
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
   `<div style="display:grid;grid-template-columns:1fr 1fr;gap:0;margin-top:5mm;border:1.4px solid var(--ink)">${
     t.hotlines.map(([n,num,fee],i)=>`<div style="padding:4.4mm 4.6mm;${i===0?'border-right:1.4px solid var(--ink);':''}background:${i===0?'var(--ink)':'var(--white)'};color:${i===0?'var(--paper)':'var(--ink)'}">
       <div class="label-sm" style="color:var(--sig);font-weight:700;letter-spacing:.16em">${esc(n)}</div>
       <div style="font-family:var(--display);font-weight:800;font-size:21pt;letter-spacing:-.03em;margin-top:2.2mm">${esc(num)}</div>
       <div style="font-size:8.2pt;line-height:11.8pt;margin-top:1.8mm;opacity:.72">${esc(fee)}</div></div>`).join('')}</div>`,
   `<div class="box blood" style="margin-top:5mm"><div class="bt">Before you call</div><p>${esc(t.note)}</p></div>`,
   `<table style="margin-top:6mm"><tr><th>What</th><th>How much matters</th><th>What it does</th><th>How fast</th></tr>
    ${t.rows.map(r=>`<tr>${r.map(c=>`<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</table>`];
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
