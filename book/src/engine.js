(function(){
const D=window.DATA, out=document.getElementById('out');
const MM=96/25.4, esc=s=>String(s==null?'':s);
const MARGIN=new Set([]); /* pleine page : plus de colonne de marge */

/* ---------- block renderers ---------- */
function R(b){
  switch(b.t){
    case 'first': return `<p class="first">${esc(b.text)}</p>`;
    case 'p':     return `<p>${esc(b.text)}</p>`;
    case 'h3':    return `<h3>${esc(b.text)}</h3>`;
    case 'lede':  return `<p class="lede">${esc(b.text)}</p>`;
    case 'stats': return `<div class="stats">${(b.items||[]).map(([f,c])=>
        `<div style="flex:1"><div class="fig">${esc(f)}</div><div class="bar"></div><small>${esc(c)}</small></div>`).join('')}</div>`;
    case 'list':{ const T=b.ordered?'ol':'ul';
      return `<${T}>${(b.items||[]).map(i=>`<li>${esc(i)}</li>`).join('')}</${T}>`; }
    case 'steps': return `<div class="steps">${(b.items||[]).map(([w,t,x,d],i)=>
        `<div class="s"><div class="num">${i+1}</div><div><div class="w">${esc(w)}</div>
         <h3 style="margin-top:.8mm">${esc(t)}${d?`<span class="dur">${esc(d)}</span>`:''}</h3><p style="margin-top:1.2mm;font-size:9.6pt;line-height:14.6pt">${esc(x)}</p></div></div>`).join('')}</div>`;
    case 'check': return `<div>${b.title?`<h3>${esc(b.title)}</h3>`:''}<div class="check">${(b.items||[]).map(i=>
        `<div class="i"><span class="bx"></span><span class="t">${esc(i)}</span></div>`).join('')}</div></div>`;
    case 'table': return `<div>${b.title?`<h3>${esc(b.title)}</h3>`:''}<table style="margin-top:2.6mm">
        ${b.head?`<tr>${b.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr>`:''}
        ${(b.rows||[]).map(r=>`<tr>${r.map((c,i)=>`<td${/^[\d$—–.,%+\- ]+$/.test(String(c))?' class="n"':''}>${esc(c)}</td>`).join('')}</tr>`).join('')}
      </table>${b.note?`<small style="margin-top:2.2mm">${esc(b.note)}</small>`:''}</div>`;
    case 'tool': return `<div class="toolhead"><div class="k">Tool nº ${esc(b.n)}</div>
        <h3>${esc(b.title)}</h3>${b.intro?`<p>${esc(b.intro)}</p>`:''}</div>`;
    case 'evidence': return `<div class="box dark"><div class="bt">What the evidence says
        <span class="tag ${b.badge==='myth'?'myth':b.badge==='contested'?'contested':'settled'}">${b.badge||'settled'}</span></div>
        ${(b.paras||[]).map(p=>`<p>${esc(p)}</p>`).join('')}
        ${b.source?`<small style="margin-top:3mm;border-top:.5px solid #4A6357;padding-top:2.2mm">${esc(b.source)}</small>`:''}</div>`;
    case 'note': return `<div class="box filled"><div class="bt" style="color:var(--camel)">${esc(b.title||'Note')}</div>
        ${(b.paras||[]).map(p=>`<p>${esc(p)}</p>`).join('')}</div>`;
    case 'flag': return `<div class="box blood"><div class="bt">${esc(b.title||'Red flag')}</div>
        ${(b.paras||[]).map(p=>`<p>${esc(p)}</p>`).join('')}</div>`;
    case 'brief': return `<div class="box"><div class="bt" style="color:var(--green)">${esc(b.title||'')}</div>
        ${(b.paras||[]).map(p=>`<p>${esc(p)}</p>`).join('')}</div>`;
    case 'script': return `<div class="script" style="font-size:11.6pt;color:var(--camel);line-height:1.38">${esc(b.text)}</div>`;
    case 'photo':{ const src=D.have[b.n];
      if(b.bleed) return `<div style="height:${b.h||'100%'};overflow:hidden;background:var(--fill)">${src
        ? `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block">`
        : `<div style="width:100%;height:100%;background:var(--fill);display:flex;align-items:center;
             justify-content:center;padding:8mm;text-align:center;font-family:var(--text);font-size:8pt;
             letter-spacing:.14em;text-transform:uppercase;color:var(--grey)">${esc(b.note||'')}</div>`}</div>`;
      return `<figure><div style="border:1px solid var(--brass);padding:1.4mm;background:var(--paper)">
        <div style="height:${b.h||'42mm'};overflow:hidden">${src
          ? `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block">`
          : `<div style="width:100%;height:100%;background:repeating-linear-gradient(135deg,rgba(30,64,50,.055) 0 6px,rgba(30,64,50,0) 6px 12px),var(--sand);
               display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2.5mm;padding:4mm;text-align:center">
               <div style="width:11mm;height:11mm;border:1px solid var(--green);border-radius:50%;display:flex;align-items:center;justify-content:center;
                 font-family:var(--text);font-size:7pt;color:var(--green)">${String(b.n).padStart(2,'0')}</div>
               <div class="script" style="font-size:9.6pt;color:var(--green);line-height:1.3">${esc(b.note||'')}</div></div>`}</div></div>
        ${b.caption?`<figcaption class="script" style="font-size:10pt;color:var(--slate);margin-top:2mm;line-height:1.3">${esc(b.caption)}</figcaption>`:''}</figure>`; }
    case 'illus':{
      if(b.name==='bcs') return `<div><div style="display:flex;gap:9mm;justify-content:center;align-items:flex-end;margin-top:4mm">
          ${['Lean 1–3','Ideal 4–5','Heavy 7–9'].map((l,i)=>`<div style="text-align:center">
            ${[D.ILLUS.bcsLean,D.ILLUS.bcsIdeal,D.ILLUS.bcsHeavy][i]}
            <div class="label-sm" style="margin-top:2mm;color:${i===1?'var(--green)':'var(--oxblood)'}">${l}</div></div>`).join('')}
        </div>${b.caption?`<div class="script" style="font-size:10.4pt;color:var(--slate);text-align:center;margin-top:2.5mm">${esc(b.caption)}</div>`:''}</div>`;
      const g=b.name==='dach'?D.ILLUS.dach:D.ILLUS.spine;
      return `<div style="text-align:center;margin-top:4mm">${g}
        ${b.caption?`<div class="script" style="font-size:10.4pt;color:var(--slate);margin-top:2mm">${esc(b.caption)}</div>`:''}</div>`; }
    case 'remember': return `<div class="remember">${(b.items||[]).map(([t,x],i)=>
        `<div class="it"><span class="rn">${['I','II','III','IV','V'][i]||i+1}</span>
         <div><h3>${esc(t)}</h3><p style="margin-top:1.2mm;font-size:9.8pt;line-height:15pt">${esc(x)}</p></div></div>`).join('')}</div>`;

    /* ─── grammaire de modules ─── */
    case 'plate':{ const g=(D.PLATES||{})[b.name]; if(!g) return '';
      return `<div class="plate${b.wide?' wide':''}">
        <div class="ph"><span>${esc(b.title||'Plate')}</span><span>${esc(b.tag||'')}</span></div>
        <div class="pb">${g}</div>
        ${b.caption?`<div class="pc">${esc(b.caption)}</div>`:''}</div>`; }

    case 'tiles':{ const it=b.items||[], n=Math.min(4,Math.max(2,it.length));
      const role=['g','s','','b'];
      return `<div class="mod">${b.title?`<div class="modh${b.acc?' acc':''}">${esc(b.title)}</div>`:''}
        <div class="tiles n${n}">${it.map(([f,l,x],i)=>`<div class="tile ${b.roles&&b.roles[i]!==undefined?b.roles[i]:role[i]||''}">
          <div class="fig">${esc(f)}</div><div class="lab">${esc(l)}</div>
          ${x?`<div class="sub">${esc(x)}</div>`:''}</div>`).join('')}</div>
        ${b.src?`<div class="msrc">${esc(b.src)}</div>`:''}</div>`; }

    case 'cards':{ const it=b.items||[], n=it.length>=3?3:2;
      return `<div class="mod">${b.title?`<div class="modh${b.acc?' acc':''}">${esc(b.title)}</div>`:''}
        <div class="cards n${n}">${it.map(([k,h,x,r])=>`<div class="mcard ${r||''}">
          ${k?`<div class="t">${esc(k)}</div>`:''}${h?`<h4>${esc(h)}</h4>`:''}
          ${String(x||'').split('|').map(q=>`<p>${esc(q)}</p>`).join('')}</div>`).join('')}</div></div>`; }

    case 'matrix':{ const hi=new Set((b.hi||[]).map(([r,c])=>r+':'+c));
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <table class="mx">${b.head?`<tr>${b.head.map(h=>`<th>${esc(h)}</th>`).join('')}</tr>`:''}
        ${(b.rows||[]).map((r,ri)=>`<tr>${r.map((c,ci)=>`<td class="${hi.has(ri+':'+ci)?'hi':''}">${esc(c)}</td>`).join('')}</tr>`).join('')}
        </table>${b.note?`<small style="margin-top:2.2mm">${esc(b.note)}</small>`:''}</div>`; }

    case 'decision':{
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <div class="dec">${(b.items||[]).map(([q,hint,branches])=>`<div class="dq">
          <div class="q">${esc(q)}</div>${hint?`<div class="hint">${esc(hint)}</div>`:''}
          <div class="br">${(branches||[]).map(([l,r])=>`<span class="chip ${r||''}">${esc(l)}</span>`).join('')}</div>
        </div>`).join('')}</div></div>`; }

    case 'gauge':{
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <div class="gauge">${(b.items||[]).map(([k,pct,c,r])=>`<div class="grow ${r||''}">
          <div class="k">${esc(k)}</div><div class="bar"><i style="width:${Math.max(0,Math.min(100,+pct||0))}%"></i></div>
          <div class="c">${esc(c)}</div></div>`).join('')}</div></div>`; }

    case 'phases':{
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <div class="phases">${(b.items||[]).map(([v,l])=>`<div class="phase">
          <div class="b">${esc(v)}</div><div class="l">${esc(l)}</div></div>`).join('')}</div></div>`; }

    case 'signals':{
      return `<div class="signals ${b.role||''}${(b.items||[]).length<4?' one':''}">
        ${b.title?`<div class="t">${esc(b.title)}</div>`:''}
        <ul>${(b.items||[]).map(i=>`<li>${esc(i)}</li>`).join('')}</ul></div>`; }

    case 'duo':{
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <div class="duo"><div><div class="t">${esc((b.a||[])[0]||'')}</div><p>${esc((b.a||[])[1]||'')}</p></div>
        <div><div class="t">${esc((b.b||[])[0]||'')}</div><p>${esc((b.b||[])[1]||'')}</p></div></div>
        ${b.note?`<div class="msrc">${esc(b.note)}</div>`:''}</div>`; }

    case 'keyfig':{
      return `<div class="mod">${b.title?`<div class="modh">${esc(b.title)}</div>`:''}
        <div class="keyfigs">${(b.items||[]).map(([k,v,x])=>`<div class="keyfig">
          <span class="k">${esc(k)}</span><div class="v">${esc(v)}</div>
          ${x?`<p>${esc(x)}</p>`:''}</div>`).join('')}</div></div>`; }

    case 'quiz': return `<div class="box" style="margin-top:5mm"><div class="bt" style="color:var(--green)">Three questions</div>
        ${(b.items||[]).map((q,i)=>`<p><strong>${i+1}.</strong> ${esc(q)}</p>`).join('')}
        <small style="margin-top:3mm">Answers on page 146.</small></div>`;
    default: return '';
  }
}

/* ---------- page factory ---------- */
let pages=[], cur=null;
function newPage(part,secId,solo){
  const el=document.createElement('section'); el.className='page';
  el.innerHTML=`<div class="sheet">
    <div class="hdr"><span>${part.n} · ${part.title}</span><span class="r" data-sec>${secId||''}</span></div>
    <div class="pad2">
      <div class="body${solo?' solo':''}"><div class="main"></div><div class="marg"></div></div>
    </div>
    <div class="ftr folio"><span>Dachshundology</span><b></b><span>${part.title}</span></div>
  </div>`;
  out.appendChild(el);
  const o={el, part, solo:!!solo, main:el.querySelector('.main'), marg:el.querySelector('.marg'),
           body:el.querySelector('.body'), pad:el.querySelector('.pad2'), rh:el.querySelector('[data-sec]')};
  pages.push(o); cur=o; return o;
}
const SAFE=18;   /* garde-fou bas de page : rien ne touche le bandeau de pied */
const avail=o=>o.pad.getBoundingClientRect().bottom - o.body.getBoundingClientRect().top - SAFE;
const fillOf=o=>o.main.scrollHeight/avail(o);
function node(html){
  const t=String(html).trimStart();
  if(/^<tr[\s>]/i.test(t)){ const w=document.createElement('table'); w.innerHTML=t;
    return w.querySelector('tr'); }
  if(/^<(td|th)[\s>]/i.test(t)){ const w=document.createElement('table'); w.innerHTML='<tr>'+t+'</tr>';
    return w.querySelector('td,th'); }
  if(/^<li[\s>]/i.test(t)){ const w=document.createElement('ul'); w.innerHTML=t; return w.querySelector('li'); }
  const w=document.createElement('div'); w.innerHTML=t; return w.firstElementChild; }
/* un titre ne doit jamais rester seul en bas de page : on lui demande
   d'emporter au moins trois lignes de ce qui suit (keep-with-next). */
const isHead=el=>!!el && (el.tagName==='H3' || el.tagName==='H2'
  || /(^|\s)(sechead|kicker|modh|toolhead)(\s|$)/.test(el.className||''));
function tryAppend(col,el,o){
  col.appendChild(el);
  const need = isHead(el) ? 118 : 0;
  if(col.scrollHeight+need>avail(o)+1){
    if(col.children.length>1){ col.removeChild(el); return false; }
    return true; // seul bloc : on l'accepte même s'il déborde
  }
  return true;
}

/* blocs sécables : renvoie {shell, kids, cont} ou null */
function splittable(b){
  const esc2=esc;
  if(b.t==='table'){
    const head=b.head?`<tr>${b.head.map(h=>`<th>${esc2(h)}</th>`).join('')}</tr>`:'';
    return {shell:`<div>${b.title?`<h3>${esc2(b.title)}</h3>`:''}<table style="margin-top:2.6mm">${head}</table>
            ${b.note?`<small class="tnote" style="margin-top:2.2mm">${esc2(b.note)}</small>`:''}</div>`,
      sel:'table',
      kids:(b.rows||[]).map(r=>`<tr>${r.map(c=>`<td${/^[\d$—–.,%+\- ]+$/.test(String(c))?' class="n"':''}>${esc2(c)}</td>`).join('')}</tr>`),
      cont:`<div><table style="margin-top:0">${head}</table></div>`, contSel:'table', tail:'.tnote'};
  }
  if(b.t==='check'){
    return {shell:`<div>${b.title?`<h3>${esc2(b.title)}</h3>`:''}<div class="check"></div></div>`, sel:'.check',
      kids:(b.items||[]).map(i=>`<div class="i"><span class="bx"></span><span class="t">${esc2(i)}</span></div>`),
      cont:`<div><div class="check"></div></div>`, contSel:'.check'};
  }
  if(b.t==='list'){ const T=b.ordered?'ol':'ul';
    return {shell:`<${T}></${T}>`, sel:null, kids:(b.items||[]).map(i=>`<li>${esc2(i)}</li>`),
      cont:`<${T} style="margin-top:0"></${T}>`, contSel:null};
  }
  if(b.t==='steps'){
    return {shell:`<div class="steps"></div>`, sel:null,
      kids:(b.items||[]).map(([w,t,x,d],i)=>`<div class="s"><div class="num">${i+1}</div><div><div class="w">${esc2(w)}</div>
        <h3 style="margin-top:.8mm">${esc2(t)}${d?`<span class="dur">${esc2(d)}</span>`:''}</h3><p style="margin-top:1.2mm;font-size:9.6pt;line-height:14.6pt">${esc2(x)}</p></div></div>`),
      cont:`<div class="steps" style="margin-top:0"></div>`, contSel:null};
  }
  if(b.t==='remember'){
    return {shell:`<div class="remember"></div>`, sel:null,
      kids:(b.items||[]).map(([t,x],i)=>`<div class="it"><span class="rn">${['I','II','III','IV','V'][i]||i+1}</span>
        <div><h3>${esc2(t)}</h3><p style="margin-top:1.2mm;font-size:9.8pt;line-height:15pt">${esc2(x)}</p></div></div>`),
      cont:`<div class="remember" style="margin-top:0"></div>`, contSel:null};
  }
  return null;
}


/* ---------- pages hors corps ---------- */
function newPlain(bg){
  const el=document.createElement('section'); el.className='page';
  if(bg==='cream') el.style.background='var(--cream)';
  el.innerHTML='<div class="pad"></div>';
  out.appendChild(el); pages.push({el, plain:true}); return el;
}
function flowInto(o){
  const mk=(first)=>{
    const el=document.createElement('section'); el.className='page';
    el.innerHTML=`<div class="pad">
      <div class="rh"><span class="l">${o.head||''}</span><span class="r">${first?'':'continued'}</span></div>
      <div class="rule">${D.rule}</div>
      ${first?`<div class="sechead"><h2>${o.title}</h2>${o.sub?`<div class="script" style="font-size:14.5pt;color:var(--camel);margin-top:2mm">${o.sub}</div>`:''}</div>`:'<div style="height:7mm"></div>'}
      <div class="matter"${o.cols?' style="columns:'+o.cols+';column-gap:9mm"':''}${o.width?' style="max-width:'+o.width+'"':''}></div>
      <div class="folio flow"><span>${o.head||''}</span><b></b><span>Dachshundology</span></div>
    </div>`;
    out.appendChild(el);
    const rec={el, matter:true, pad:el.querySelector('.pad'), box:el.querySelector('.matter'), app:o.app};
    pages.push(rec); return rec;
  };
  let pg=mk(true); const firstPage=pg;
  const availM=r=>{
    const f=r.el.querySelector('.folio');
    const bottom = f ? f.getBoundingClientRect().top : r.pad.getBoundingClientRect().bottom;
    return bottom - r.box.getBoundingClientRect().top - 10;   /* respiration avant le folio */
  };
  o.items.forEach(html=>{
    const el=node(html); if(!el) return;
    pg.box.appendChild(el);
    if(pg.box.scrollHeight>availM(pg)+1 && pg.box.children.length>1){
      pg.box.removeChild(el); pg=mk(false); pg.app=o.app; pg.box.appendChild(el);
    }
  });
  return firstPage;
}

/* ---------- front matter ---------- */
D.photoHTML=b=>R(Object.assign({t:'photo'},b));
const MT=window.MATTER(D,{node,newPlain,flowInto});
MT.cover(); MT.halfTitle(); MT.titlePage(); MT.authorNote(); MT.howTo(); const tocPage=MT.contents();

/* ---------- flow ---------- */
D.book.forEach((part,pi)=>{
  const op=document.createElement('section'); op.className='page'; op.style.background='var(--cream)';
  const toc=part.sections.map(s=>`<div class="leader" style="break-inside:avoid;padding:1.6mm 0">
      <span class="label-sm" style="color:var(--camel);letter-spacing:.1em">${s.id}</span>
      <span>${s.title}</span><span class="dots"></span><span class="n" data-sec="${s.id}">—</span></div>`).join('');
  op.innerHTML=`<div style="position:absolute;top:0;left:0;right:0">${D.stripe}</div>
   <div class="pad" style="inset:26mm 20mm 21mm 20mm;display:flex;flex-direction:column">
     <div style="display:flex;justify-content:space-between;align-items:baseline">
       <span class="label" style="color:var(--camel)">Part ${part.n}</span>
       <span class="label" style="color:var(--slate)" data-range="${part.slug}"></span></div>
     <div style="margin-top:3mm">${D.rule}</div>
     <div style="display:flex;gap:10mm;align-items:flex-start;margin-top:14mm">
       <h1 style="font-size:92pt;line-height:.78;color:var(--green)">${part.n}</h1>
       <div style="padding-top:4mm"><h1 style="font-size:32pt;line-height:1.06;color:var(--green)">${part.title}</h1>
         <div class="script" style="font-size:18pt;color:var(--camel);margin-top:2mm">${part.sub}</div></div>
     </div>
     ${(()=>{ const src=D.have[101+pi]; if(!src) return '';
        const ar=+(D.haveAR||{})[101+pi]||2.247;          // bandeau par défaut
        // une image verticale n'entre pas dans un bandeau : on lui donne un bloc à sa forme,
        // aligné à droite, plutôt que de lui couper la tête.
        const w = ar>=1.6 ? '100%' : (74*ar).toFixed(1)+'mm';
        const align = ar>=1.6 ? '' : 'margin-left:auto;';
        return `<div style="margin-top:11mm;${align}width:${w}"><div style="border:1px solid var(--brass);padding:1.6mm;background:var(--paper)">
       <div style="height:74mm;overflow:hidden"><img src="${src}" alt="" style="width:100%;height:100%;object-fit:cover;display:block"></div></div></div>`; })()}
     <div style="margin-top:auto"><div style="margin-bottom:4mm">${D.ruleFlip}</div>
       <div style="columns:2;column-gap:12mm">${toc}</div></div>
   </div>`;
  out.appendChild(op); pages.push({el:op,opener:true,part});

  let page=newPage(part,part.sections[0].id);
  const deferred=[];
  const wide=[];
  const drain=()=>{ while(deferred.length){
      if(page.solo) break;
      const el=node(deferred[0]);
      page.marg.appendChild(el);
      const tooTall = el.getBoundingClientRect().height > avail(page)*0.62;
      if(tooTall){ page.marg.removeChild(el); wide.push(deferred.shift()); continue; }
      if(page.marg.scrollHeight>avail(page)+1){
        page.marg.removeChild(el);
        if(page.marg.children.length===0){ wide.push(deferred.shift()); continue; } // trop haut même seul
        break;
      }
      deferred.shift();
    }
    while(wide.length){ const el=node(wide[0]); el.classList.add('wide');
      if(tryAppend(page.main,el,page)) wide.shift(); else break; } };

  part.sections.forEach((sec,si)=>{
    /* nouvelle page si la courante est déjà bien remplie */
    if(si>0 && fillOf(page)>0.5){ page=newPage(part,sec.id); }
    else if(si>0){ page.rh.textContent=page.rh.textContent+' · '+sec.id; }
    page.startOf=page.startOf||sec.id;
    if(!page.secMark) page.secMark={};
    page.secMark[sec.id]=true;
    const head=node(`<div class="sechead"${si>0&&fillOf(page)>0.02?' style="margin-top:9mm;border-top:1.6px solid var(--green);padding-top:5mm"':''}>
        <h2>${sec.title}</h2>
        ${sec.sub?`<div class="script" style="font-size:14.5pt;color:var(--camel);margin-top:2mm">${sec.sub}</div>`:''}</div>`);
    if(!tryAppend(page.main,head,page)){ page=newPage(part,sec.id); page.startOf=sec.id; page.secMark={[sec.id]:true};
      head.removeAttribute('style'); tryAppend(page.main,head,page); }
    if(!page.firstSec) page.firstSec=sec.id;

    sec.blocks.forEach(b=>{
      if(MARGIN.has(b.t)){ deferred.push(R(b)); drain(); return; }
      const needWide = b.t==='table' && ((b.head&&b.head.length>=4) || (b.rows&&b.rows.some(r=>r.length>=4)));
      if(needWide && !page.solo){
        if(page.marg.children.length===0){ page.solo=true; page.body.classList.add('solo'); }
        else { page=newPage(part,sec.id,true); page.startOf=page.startOf||sec.id;
               if(!page.secMark) page.secMark={}; page.secMark[sec.id]=true; }
      }
      const sp=splittable(b);
      if(sp && sp.kids.length>1){
        let shell=node(sp.shell);
        let host=sp.sel?shell.querySelector(sp.sel):shell;
        if(!tryAppend(page.main,shell,page)){ page=newPage(part,sec.id,page.solo); page.startOf=sec.id; drain();
          shell=node(sp.shell); host=sp.sel?shell.querySelector(sp.sel):shell; tryAppend(page.main,shell,page); }
        const tail=sp.tail?shell.querySelector(sp.tail):null;
        if(tail) tail.remove();
        for(const k of sp.kids){
          const kid=node(k);
          host.appendChild(kid);
          if(page.main.scrollHeight>avail(page)+1){
            host.removeChild(kid);
            page=newPage(part,sec.id,page.solo); page.startOf=sec.id;
            shell=node(sp.cont); host=sp.contSel?shell.querySelector(sp.contSel):shell;
            tryAppend(page.main,shell,page); host.appendChild(kid);
          }
        }
        if(tail){ if(!tryAppend(page.main,tail,page)){ page=newPage(part,sec.id); page.startOf=sec.id; drain(); tryAppend(page.main,tail,page);} }
        return;
      }
      const el=node(R(b)); if(!el) return;
      if(!tryAppend(page.main,el,page)){ page=newPage(part,sec.id); page.startOf=sec.id; drain(); tryAppend(page.main,el,page); }
    });
  });
  while(deferred.length||wide.length){
    const before=deferred.length+wide.length; drain();
    if(deferred.length+wide.length===before){ page=newPage(part,page.startOf); page.startOf=page.startOf; drain();
      if(deferred.length+wide.length===before) break; } }

  /* ---- page Checkpoint de fin de partie ---- */
  const cp=(D.CHECKPOINTS||{})[part.slug];
  if(cp){
    const el=document.createElement('section'); el.className='page cp';
    el.innerHTML=`<div class="sheet"><div class="hdr"><span>${part.n} · ${part.title}</span><span class="r">Checkpoint</span></div>
      <div class="pad2">
      <div class="cp">
        <div class="cp-k">End of Part ${part.n}</div>
        <h2>Checkpoint</h2>
        <div class="cp-grid">
          <div class="cp-list"><div class="t">What should be done</div>
            ${(cp.done||[]).map(x=>`<div class="i"><span class="bx"></span><span class="x">${esc(x)}</span></div>`).join('')}</div>
          <div class="cp-tiles">${(cp.tiles||[]).map(([f,l])=>`<div class="cp-tile"><div class="f">${esc(f)}</div><div class="l">${esc(l)}</div></div>`).join('')}</div>
        </div>
        ${(cp.errors||[]).length?`<div class="cp-err"><div class="h">The three mistakes to avoid</div>
          <div class="row">${cp.errors.map(([t,x])=>`<div class="e"><div class="t">${esc(t)}</div><p>${esc(x)}</p></div>`).join('')}</div></div>`:''}
        ${cp.next?`<div class="cp-next"><div class="k">Next</div>
          <div><h4>${esc(cp.next[0])}</h4><p>${esc(cp.next[1])}</p></div></div>`:''}
      </div>
      </div>
      <div class="ftr folio"><span>Dachshundology</span><b></b><span>${part.title}</span></div>
    </div>`;
    out.appendChild(el); pages.push({el, part, checkpoint:true});
  }
});

/* ---------- back matter ---------- */
MT.back.forEach(f=>f());

/* ---------- folios + TOC ---------- */
pages.forEach((p,i)=>{
  p.n=i+1;
  const b=p.el.querySelector('.folio b'); if(b) b.textContent=p.n;
});
// sommaire général + appendices
D.book.forEach(part=>{
  const opener=pages.find(p=>p.opener&&p.part===part);
  document.querySelectorAll(`[data-part="${part.slug}"]`).forEach(e=>{ if(opener) e.textContent=opener.n; });
  part.sections.forEach(sec=>{
    const first=pages.find(p=>p.secMark&&p.secMark[sec.id]);
    if(first) document.querySelectorAll(`[data-sec2="${sec.id}"]`).forEach(e=>e.textContent=first.n);
  });
});
['A','B','C','D','E','F','G'].forEach(k=>{
  const pg=pages.find(p=>p.app===k);
  if(pg) document.querySelectorAll(`[data-app="${k}"]`).forEach(e=>e.textContent=pg.n);
});
document.querySelectorAll('[data-pagecount]').forEach(e=>e.textContent=document.querySelectorAll('.page').length);
// renseigne les numéros dans les ouvertures de partie
let idx=0;
D.book.forEach(part=>{
  const opener=pages.find(p=>p.opener&&p.part===part);
  const partPages=pages.filter(p=>p.part===part||(!p.opener&&p.el.querySelector('.rh .l')?.textContent.startsWith(part.n+' ·')));
  part.sections.forEach(sec=>{
    const first=pages.find(p=>p.secMark&&p.secMark[sec.id]);
    if(first&&opener){ const el=opener.el.querySelector(`[data-sec="${sec.id}"]`); if(el) el.textContent=first.n; }
  });
  if(opener){
    const own=pages.filter(p=>p.el.querySelector('.rh .l')?.textContent===`${part.n} · ${part.title}`);
    const lo=opener.n, hi=own.length?own[own.length-1].n:lo;
    const r=opener.el.querySelector('[data-range]'); if(r) r.textContent=`Pages ${lo} – ${hi}`;
  }
});
window.__PAGES__=pages.length;
window.__TOC__=D.book.map(p=>({part:p.n,title:p.title,
  start:pages.find(x=>x.opener&&x.part===p)?.n,
  sections:p.sections.map(s=>({id:s.id,title:s.title,page:pages.find(x=>x.startOf===s.id)?.n}))}));
document.title='ready:'+pages.length;
})();
