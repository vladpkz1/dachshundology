/* ============ DACHSHUNDOLOGY — preppy design kit ============ */
const C = {
  green:'#093B2F', greenDk:'#052720', greenLt:'#1B5344',
  cream:'#FAF0D5', sand:'#EFE3C2', paper:'#FFFDF6',
  camel:'#A93B27', brass:'#D6C8A6', oxblood:'#8E2F1E',
  ink:'#1A2420', slate:'#7A7259', navy:'#16324F'
};

/* ---- dachshund silhouette, solid (crest / plates) ---- */
const DACH_PATH = "M40 92 C60 66 88 62 120 64 L300 64 C328 64 338 58 350 48 C364 36 376 32 392 33 C410 34 420 44 423 56 L462 62 C473 64 474 76 464 78 L426 82 C420 94 406 100 392 100 C372 101 356 112 350 128 C346 143 330 151 310 151 L152 151 C120 151 98 146 84 136 C66 124 52 110 40 92 Z";
function dachSolid({w=200, fill=C.cream, flip=false}={}) {
  return `<svg viewBox="0 0 500 210" width="${w}" xmlns="http://www.w3.org/2000/svg"${flip?' style="transform:scaleX(-1)"':''}>
    <g fill="${fill}">
      <rect x="96" y="128" width="27" height="72" rx="13"/><rect x="134" y="130" width="27" height="70" rx="13"/>
      <rect x="296" y="132" width="24" height="68" rx="12"/><rect x="326" y="130" width="24" height="70" rx="12"/>
      <path d="${DACH_PATH}"/>
      <ellipse cx="116" cy="118" rx="42" ry="38"/>
      <path d="M46 96 C30 70 30 44 44 26 C52 36 54 56 58 70 C62 82 68 90 74 96 Z"/>
      <path d="M380 44 C404 40 414 58 412 82 C410 108 396 124 378 124 C360 124 352 106 354 84 C356 62 364 48 380 44 Z"/>
    </g>
    <circle cx="407" cy="60" r="5" fill="${fill===C.cream?C.green:C.cream}"/>
  </svg>`;
}


/* ---- CLINIC : marque brutaliste (carré plein + teckel en réserve) ---- */
function mark({d=34, bg='#101010', dog='#F1F0EC'}={}) {
  return `<svg viewBox="0 0 100 100" width="${d}" height="${d}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect width="100" height="100" fill="${bg}"/>
    <g transform="translate(9,31) scale(0.164)">${dachSolid({w:500,fill:dog}).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'').replace(/<circle cx="407"[^>]*\/>/,`<circle cx="407" cy="60" r="5" fill="${bg}"/>`)}</g>
  </svg>`;
}

/* ---- crest / seal ---- */
function crest({d=150, ring=C.cream, field='none', dog=C.cream, top='DACHSHUNDOLOGY', bottom='EST. MMXXVI'}={}) {
  const R=100, rid='c'+Math.random().toString(36).slice(2,8);
  return `<svg viewBox="0 0 240 240" width="${d}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <path id="${rid}t" d="M120 120 m-86 0 a86 86 0 1 1 172 0" fill="none"/>
      <path id="${rid}b" d="M120 120 m86 0 a86 86 0 1 1 -172 0" fill="none"/>
    </defs>
    <circle cx="120" cy="120" r="115" fill="${field}" stroke="${ring}" stroke-width="1.4"/>
    <circle cx="120" cy="120" r="108" fill="none" stroke="${ring}" stroke-width="3"/>
    <circle cx="120" cy="120" r="72" fill="none" stroke="${ring}" stroke-width="1"/>
    <text font-family="TeX Gyre Heros" font-size="15" letter-spacing="4.2" fill="${ring}">
      <textPath href="#${rid}t" startOffset="50%" text-anchor="middle">${top}</textPath></text>
    <text font-family="TeX Gyre Heros" font-size="11" letter-spacing="3.4" fill="${ring}">
      <textPath href="#${rid}b" startOffset="50%" text-anchor="middle">${bottom}</textPath></text>
    <g transform="translate(120,126)">
      <g transform="translate(-52,-22) scale(0.208)">${dachSolid({w:500,fill:dog}).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</g>
    </g>
    <path d="M120 196 l-5 -9 h10 z" fill="${ring}"/>
    <circle cx="86" cy="63" r="2.6" fill="${ring}"/><circle cx="154" cy="63" r="2.6" fill="${ring}"/>
  </svg>`;
}

/* ---- repp stripe band ---- */
function stripe({h=14, a=C.green, b=C.brass, c=C.cream, w='100%'}={}) {
  return `<div style="height:${h}px;width:${w};background:repeating-linear-gradient(115deg,
    ${a} 0 14px, ${b} 14px 18px, ${c} 18px 23px, ${b} 23px 27px, ${a} 27px 41px)"></div>`;
}

/* ---- double rule (thick / thin) ---- */
const dblRule=(col=C.green,flip=false)=>`<div style="display:flex;flex-direction:column;gap:1.6px">
  <div style="height:${flip?'0.7':'2.2'}px;background:${col}"></div>
  <div style="height:${flip?'2.2':'0.7'}px;background:${col}"></div></div>`;

/* ---- photo frame : placeholder designé + emplacement réel ---- */
function photo({n, w='100%', h='60mm', shape='rect', caption='', note='', src=null, tone=C.green}={}) {
  const radius = shape==='oval' ? '50%' : shape==='arch' ? '999px 999px 4px 4px' : '3px';
  const inner = src
    ? `<img src="${src}" style="width:100%;height:100%;object-fit:cover;display:block">`
    : `<div style="width:100%;height:100%;background:
          repeating-linear-gradient(135deg, rgba(30,64,50,.055) 0 6px, rgba(30,64,50,0) 6px 12px), ${C.sand};
          display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3mm;text-align:center;padding:6mm">
         <div style="width:15mm;height:15mm;border:1px solid ${tone};border-radius:50%;display:flex;align-items:center;justify-content:center;
              font-family:'TeX Gyre Heros';font-size:8pt;letter-spacing:.08em;color:${tone}">${String(n).padStart(2,'0')}</div>
         <div style="font-family:'TeX Gyre Chorus';font-size:11pt;color:${tone};line-height:1.35;max-width:62mm">${note}</div>
       </div>`;
  return `<figure style="margin:0;width:${w}">
    <div style="border:1px solid ${C.brass};padding:1.6mm;border-radius:${shape==='oval'?'50%':'5px'};background:${C.paper}">
      <div style="height:${h};overflow:hidden;border-radius:${radius}">${inner}</div>
    </div>
    ${caption?`<figcaption style="font-family:'TeX Gyre Chorus';font-size:10.4pt;color:${C.slate};margin-top:2.2mm;line-height:1.3">${caption}</figcaption>`:''}
  </figure>`;
}

/* ---- note manuscrite ---- */
const script=(t,{size=13,color=C.camel,rot=-1.4,align='left',mt=0}={})=>
  `<div style="font-family:'TeX Gyre Chorus';font-size:${size}pt;color:${color};transform:rotate(${rot}deg);
    text-align:${align};margin-top:${mt}mm;line-height:1.35">${t}</div>`;

/* ---- BCS : silhouettes vues de dessus, style gravure ---- */
function bcs({w=150, state='ideal', fill=C.green}={}) {
  const S={lean:{ep:29,tr:24,ta:15,ha:26},ideal:{ep:37,tr:32,ta:25,ha:35},heavy:{ep:45,tr:46,ta:48,ha:47}}[state];
  const pts=[[14,9],[24,17],[38,20],[50,17],[60,13],[70,S.ep-6],[86,S.ep],[110,S.tr],[140,S.ta],[162,S.ta],[186,S.ha],[214,S.ha-2],[234,10],[252,7],[268,5],[278,4]];
  const cx=80, R=pts.map(([y,h])=>[cx+h,y]), L=pts.slice().reverse().map(([y,h])=>[cx-h,y]), all=R.concat(L);
  let d=`M${all[0][0]} ${all[0][1]}`;
  for(let i=0;i<all.length-1;i++){const a=all[i],b=all[i+1];
    d+=` C${a[0].toFixed(1)} ${(a[1]+(b[1]-a[1])*.45).toFixed(1)} ${b[0].toFixed(1)} ${(b[1]-(b[1]-a[1])*.45).toFixed(1)} ${b[0].toFixed(1)} ${b[1].toFixed(1)}`;}
  d+=' Z';
  const waist = state==='heavy'
    ? `<g stroke="${C.oxblood}" stroke-width="2.2"><path d="M${80-S.ta-9} 162 h7M${80+S.ta+2} 162 h7"/></g>`
    : `<g stroke="${fill}" stroke-width="1.6" stroke-dasharray="3 3" opacity=".8"><line x1="${80-S.ta-7}" y1="162" x2="${80+S.ta+7}" y2="162"/></g>`;
  const ribs = state==='lean' ? `<g stroke="${C.cream}" stroke-width="2.6" stroke-linecap="round" opacity=".85">
      <path d="M62 96 h-11M62 108 h-11M62 120 h-11M98 96 h11M98 108 h11M98 120 h11"/></g>` : '';
  return `<svg viewBox="0 0 160 300" width="${w}" xmlns="http://www.w3.org/2000/svg">
    <path d="M58 26 C44 22 36 34 38 48 C40 62 52 68 60 62 Z" fill="${fill}"/>
    <path d="M102 26 C116 22 124 34 122 48 C120 62 108 68 100 62 Z" fill="${fill}"/>
    <path d="${d}" fill="${fill}"/>${ribs}${waist}
    <circle cx="71" cy="31" r="3" fill="${C.cream}"/><circle cx="89" cy="31" r="3" fill="${C.cream}"/>
  </svg>`;
}

/* ---- schéma colonne, style planche gravée ---- */
function spine({w=520, on=C.green}={}) {
  let v='';
  for(let i=0;i<9;i++){const x=40+i*52;
    v+=`<path d="M${x+10} 52 l8 -22 h11 l-5 22 z" fill="none" stroke="${on}" stroke-width="1.6" stroke-linejoin="round"/>`;}
  v+=`<rect x="34" y="52" width="472" height="20" rx="10" fill="none" stroke="${on}" stroke-width="1.6"/>`;
  for(let i=0;i<9;i++){const x=40+i*52;
    v+=`<rect x="${x}" y="72" width="42" height="40" rx="6" fill="none" stroke="${on}" stroke-width="1.6"/>`;
    if(i<8){const h=(i===4);
      v+=`<rect x="${x+42}" y="76" width="10" height="32" rx="4" fill="${h?C.oxblood:on}" opacity="${h?1:.35}"/>`;
      if(h) v+=`<path d="M${x+47} 78 v-16" stroke="${C.oxblood}" stroke-width="10" stroke-linecap="round"/>
                <ellipse cx="${x+47}" cy="62" rx="12" ry="9" fill="${C.oxblood}"/>`;}
  }
  return `<svg viewBox="0 0 520 130" width="${w}" xmlns="http://www.w3.org/2000/svg">${v}</svg>`;
}
module.exports={mark,C,dachSolid,crest,stripe,dblRule,photo,script,bcs,spine,DACH_PATH};
