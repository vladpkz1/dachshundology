/* Planches vectorielles — brutalisme plat : noir, papier, un seul rouge.
   Chaque fonction rend un <svg> responsive en largeur. */
const INK='#101010', SIG='#FF3B1F', FILL='#E6E4DE', GREY='#7C7A73';
const DACH="M40 92C60 66 88 62 120 64L300 64C328 64 338 58 350 48C364 36 376 32 392 33C410 34 420 44 423 56L462 62C473 64 474 76 464 78L426 82C420 94 406 100 392 100C372 101 356 112 350 128C346 143 330 151 310 151L152 151C120 151 98 146 84 136C66 124 52 110 40 92Z";
const L=(x,y,t,s=15,c=INK,w=700,a='start')=>`<text x="${x}" y="${y}" font-family="Inter Tight, Inter, Arial" font-weight="${w}" font-size="${s}" letter-spacing="1.4" fill="${c}" text-anchor="${a}">${t}</text>`;
const N=(x,y,t,s=34,c=INK,a='start')=>`<text x="${x}" y="${y}" font-family="Archivo, Arial" font-weight="800" font-size="${s}" letter-spacing="-1.6" fill="${c}" text-anchor="${a}">${t}</text>`;
const svg=(vb,inner)=>`<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const P = {};

/* 1 — la colonne et le disque qui lâche */
P.spine = svg('0 0 900 230', `
  <g fill="none" stroke="${INK}" stroke-width="16" stroke-linecap="square">
    <path d="M60 150h780"/>
    ${[...Array(13)].map((_,i)=>`<path d="M${96+i*58} 150V96"/>`).join('')}
  </g>
  <rect x="${96+6*58-26}" y="94" width="52" height="58" fill="${SIG}"/>
  <path d="M${96+6*58} 90V40" stroke="${SIG}" stroke-width="10"/>
  <circle cx="${96+6*58}" cy="34" r="12" fill="${SIG}"/>
  ${N(96+6*58+28, 46, 'T12–T13', 30, INK)}
  ${L(60, 196, 'RIBCAGE BRACES THE SPINE', 15, GREY)}
  ${L(840, 196, 'UNSUPPORTED SPAN', 15, GREY, 700, 'end')}
  <path d="M60 176h${6*58-20}" stroke="${GREY}" stroke-width="3"/>
  <path d="M${96+6*58+40} 176h${780-6*58-60}" stroke="${GREY}" stroke-width="3"/>`);

/* 2 — la hauteur du saut contre la garde au sol */
P.drop = svg('0 0 900 300', `
  <rect x="470" y="96" width="390" height="126" fill="${FILL}"/>
  <rect x="470" y="96" width="390" height="16" fill="${INK}"/>
  <g transform="translate(60,196) scale(0.5)" fill="${INK}"><path d="${DACH}"/></g>
  <path d="M40 258h820" stroke="${INK}" stroke-width="10"/>
  <path d="M300 258V214" stroke="${SIG}" stroke-width="7"/>
  <path d="M288 258h24M288 214h24" stroke="${SIG}" stroke-width="7"/>
  ${L(276, 240, 'CLEARANCE', 14, SIG, 700, 'end')}
  <path d="M432 258V96" stroke="${SIG}" stroke-width="7" stroke-dasharray="13 9"/>
  <path d="M420 258h24M420 96h24" stroke="${SIG}" stroke-width="7"/>
  ${L(446, 90, 'THE DROP', 14, SIG)}
  ${L(492, 150, 'THE SOFA HE JUMPS OFF', 14, GREY)}
  ${N(60, 50, '4–5×', 36)}
  ${L(166, 46, 'HIS OWN STANDING HEIGHT', 15, GREY)}
  ${L(60, 74, 'MEASURE BOTH TONIGHT. THE RATIO IS THE POINT.', 14, INK)}`);

/* 3 — la prise à deux mains */
P.lift = svg('0 0 900 300', `
  <rect x="20" y="54" width="420" height="226" fill="none" stroke="${INK}" stroke-width="4"/>
  <rect x="460" y="54" width="420" height="226" fill="${SIG}" opacity="0.08"/>
  <rect x="460" y="54" width="420" height="226" fill="none" stroke="${SIG}" stroke-width="4"/>
  ${L(20, 36, 'YES — BACK HELD LEVEL', 16, INK)}
  ${L(460, 36, 'NO — LIFTED UNDER THE FRONT LEGS', 16, SIG)}
  <g transform="translate(58,132) scale(0.56)" fill="${INK}"><path d="${DACH}"/></g>
  <rect x="122" y="188" width="66" height="24" fill="${SIG}"/>
  <rect x="286" y="188" width="66" height="24" fill="${SIG}"/>
  ${L(40, 256, 'ONE HAND UNDER THE CHEST,', 13, GREY)}
  ${L(40, 274, 'ONE UNDER THE REAR.', 13, GREY)}
  <g transform="translate(520,106) rotate(26) scale(0.5)" fill="${INK}" opacity="0.55"><path d="${DACH}"/></g>
  <rect x="556" y="120" width="62" height="24" fill="${SIG}"/>
  ${L(480, 256, 'THE WHOLE SPINE HANGS', 13, GREY)}
  ${L(480, 274, 'FROM ONE POINT.', 13, GREY)}`);

/* 4 — l'emprise de la caisse */
P.crate = svg('0 0 900 290', `
  <rect x="60" y="40" width="440" height="168" fill="none" stroke="${INK}" stroke-width="8"/>
  ${[...Array(9)].map((_,i)=>`<path d="M${60+(i+1)*44} 40v168" stroke="${INK}" stroke-width="4"/>`).join('')}
  <g transform="translate(106,150) scale(0.52)" fill="${INK}"><path d="${DACH}"/></g>
  <path d="M60 244h440" stroke="${SIG}" stroke-width="7"/>
  <path d="M60 232v24M500 232v24" stroke="${SIG}" stroke-width="7"/>
  ${L(280, 278, '4 FT · 120 CM', 14, SIG, 700, 'middle')}
  <path d="M34 40v168" stroke="${SIG}" stroke-width="7"/>
  <path d="M22 40h24M22 208h24" stroke="${SIG}" stroke-width="7"/>
  ${N(556, 86, '3 × 4 FT', 38)}
  ${L(556, 122, 'ABOUT 90 × 120 CM', 15, GREY)}
  ${L(556, 160, 'A PEN. NOT A ROOM,', 15, INK)}
  ${L(556, 184, 'NOT A KITCHEN WITH A GATE.', 15, INK)}`);

/* 5 — la rampe contre le saut */
P.ramp = svg('0 0 900 280', `
  ${L(40, 34, 'A RAMP ONLY WORKS WHERE HE ALREADY JUMPS.', 16, INK)}
  ${L(40, 58, 'ON THE WRONG SIDE OF THE SOFA IT IS FURNITURE.', 14, SIG)}
  <rect x="580" y="108" width="280" height="122" fill="${FILL}"/>
  <rect x="580" y="108" width="280" height="16" fill="${INK}"/>
  <path d="M200 230L580 124" stroke="${INK}" stroke-width="14" stroke-linecap="square"/>
  <path d="M200 230h380" stroke="${GREY}" stroke-width="4" stroke-dasharray="12 10"/>
  <path d="M40 230h820" stroke="${INK}" stroke-width="10"/>
  <g transform="translate(266,182) rotate(-15) scale(0.4)" fill="${INK}"><path d="${DACH}"/></g>
  ${L(40, 264, 'PUT IT WHERE THE DOG ALREADY GOES UP AND DOWN — NOT WHERE IT LOOKS TIDY.', 13, GREY)}`);

/* 6 — trois registres, trois mesures */
P.sizes = svg('0 0 900 250', `
  <rect x="20" y="20" width="276" height="210" fill="none" stroke="${INK}" stroke-width="4"/>
  <rect x="312" y="20" width="276" height="210" fill="none" stroke="${INK}" stroke-width="4"/>
  <rect x="604" y="20" width="276" height="210" fill="${SIG}" opacity="0.1"/>
  <rect x="604" y="20" width="276" height="210" fill="none" stroke="${SIG}" stroke-width="4"/>
  <rect x="20" y="20" width="276" height="34" fill="${INK}"/>
  <rect x="312" y="20" width="276" height="34" fill="${INK}"/>
  <rect x="604" y="20" width="276" height="34" fill="${SIG}"/>
  ${L(36, 43, 'AKC — UNITED STATES', 14, '#F1F0EC')}
  ${L(328, 43, 'THE KENNEL CLUB — UK', 14, '#F1F0EC')}
  ${L(620, 43, 'FCI — MOST OF THE WORLD', 14, '#fff')}
  <g stroke="${INK}" stroke-width="8" fill="none">
    <path d="M100 150h116M158 150v-34M126 116h64"/><path d="M100 150l-18 40h152l-18-40"/></g>
  ${L(158, 216, 'WEIGHT · FROM 12 MONTHS', 13, GREY, 700, 'middle')}
  <g stroke="${INK}" stroke-width="8" fill="none">
    <path d="M392 150h116M450 150v-34M418 116h64"/><path d="M392 150l-18 40h152l-18-40"/></g>
  ${L(450, 216, 'WEIGHT · NO AGE GIVEN', 13, GREY, 700, 'middle')}
  <g stroke="${SIG}" stroke-width="8" fill="none"><ellipse cx="742" cy="140" rx="62" ry="42"/></g>
  <path d="M742 92v96" stroke="${SIG}" stroke-width="6" stroke-dasharray="10 8"/>
  ${L(742, 216, 'CHEST · AT 15 MONTHS', 13, SIG, 700, 'middle')}`);

/* 7 — le score corporel */
P.bcs = svg('0 0 900 300', `
  ${[['UNDER','1–3',40,0.86],['TARGET','4–5',330,1],['OVER','6–9',620,1.18]].map(([t,r,x,k],i)=>`
    <g transform="translate(${x},50)">
      <g transform="scale(${0.44*k},0.44)" fill="${i===1?INK:GREY}"><path d="${DACH}"/></g>
      <rect x="0" y="112" width="230" height="8" fill="${i===1?SIG:FILL}"/>
      ${L(0,148,t,16,i===1?INK:GREY)}
      ${N(0,192,r,32,i===1?SIG:GREY)}
    </g>`).join('')}
  ${L(40, 288, 'AT 7 OF 9, ROUGHLY 30 PERCENT BODY FAT. FEED TO THE SCORE, NOT TO THE BAG.', 13, GREY)}`);

/* 8 — l'escalier */
P.stairs = svg('0 0 900 290', `
  ${N(40, 46, 'NO EFFECT', 34)}
  ${L(40, 78, 'DACHSLIFE 2015 FOUND NO SIGNIFICANT ASSOCIATION', 15, GREY)}
  ${L(40, 100, 'BETWEEN STAIR USE AND DISC DISEASE.', 15, INK)}
  <g fill="none" stroke="${INK}" stroke-width="12" stroke-linecap="square">
    <path d="M60 250h130v-38h130v-38h130v-38h130v-38h180"/>
  </g>
  <g transform="translate(86,212) scale(0.38)" fill="${INK}"><path d="${DACH}"/></g>
  <path d="M40 270h820" stroke="${FILL}" stroke-width="8"/>`);

/* 9 — harnais contre collier */
P.harness = svg('0 0 900 300', `
  ${L(20, 36, 'HARNESS — LOAD ON THE CHEST', 16, INK)}
  ${L(460, 36, 'COLLAR — LOAD ON THE NECK', 16, SIG)}
  <rect x="20" y="54" width="420" height="200" fill="none" stroke="${INK}" stroke-width="4"/>
  <rect x="460" y="54" width="420" height="200" fill="${SIG}" opacity="0.08"/>
  <rect x="460" y="54" width="420" height="200" fill="none" stroke="${SIG}" stroke-width="4"/>
  <g transform="translate(56,152) scale(0.54)" fill="${INK}"><path d="${DACH}"/></g>
  <rect x="148" y="150" width="92" height="38" fill="none" stroke="${SIG}" stroke-width="10"/>
  <path d="M194 150V108" stroke="${SIG}" stroke-width="10"/>
  <g transform="translate(496,152) scale(0.54)" fill="${INK}"><path d="${DACH}"/></g>
  <rect x="712" y="140" width="24" height="44" fill="${SIG}"/>
  <path d="M724 140V104" stroke="${SIG}" stroke-width="10"/>
  ${L(20, 284, 'EVERY WALK OF HIS LIFE. THE WORST DISC SITS BEHIND THE RIBS.', 13, GREY)}`);

module.exports = P;
