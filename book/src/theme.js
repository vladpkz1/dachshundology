const CSS = `
@page{ size:A4; margin:0 }
*{ box-sizing:border-box; margin:0; padding:0; -webkit-print-color-adjust:exact; print-color-adjust:exact }
:root{
  /* CLINIC — brutalisme suisse */
  --ink:#101010; --ink2:#2B2B28; --paper:#F1F0EC; --white:#FFFFFF;
  --sig:#FF3B1F; --sig-p:#FFE9E4;
  --grey:#7C7A73; --line:#CFCDC5; --fill:#E6E4DE;
  /* alias conservés pour le code existant */
  --green:#101010; --greenDk:#000; --greenLt:#2B2B28;
  --cream:#E6E4DE; --sand:#DAD8D1; --camel:#FF3B1F; --brass:#CFCDC5; --oxblood:#FF3B1F;
  --slate:#7C7A73;
  --display:'Archivo','Helvetica Neue',Arial,sans-serif;
  --text:'Inter Tight','Inter','Helvetica Neue',Arial,sans-serif;
  --M:14mm;
}
html,body{ background:#3a3a38 }
.page{ position:relative; width:210mm; height:297mm; background:var(--paper); color:var(--ink);
  overflow:hidden; page-break-after:always; break-after:page; font-family:var(--text);
  display:flex; flex-direction:column }
.page:last-child{ page-break-after:auto }
/* les pages « simples » (couverture, ouvertures, annexes) gardent le pad absolu */
.pad{ position:absolute; inset:16mm var(--M) 16mm var(--M) }
/* les pages de contenu : bandeau noir en haut, bandeau noir en bas, pleine largeur entre les deux */
.sheet{ position:absolute; inset:0; display:flex; flex-direction:column }
.pad2{ flex:1; display:flex; flex-direction:column; padding:0 var(--M); min-height:0 }

h1{ font-family:var(--display); font-weight:800; font-stretch:112%; letter-spacing:-.035em;
    text-transform:uppercase; line-height:.9 }
h2{ font-family:var(--display); font-weight:800; font-stretch:112%; font-size:31pt; line-height:.9;
    letter-spacing:-.038em; text-transform:uppercase }
h3{ font-family:var(--text); font-weight:700; font-size:11.5pt; letter-spacing:-.01em }
p{ font-size:10.6pt; line-height:17pt; text-align:left; hyphens:none }
p+p{ margin-top:2.6mm }
p.first{ font-size:12.6pt; line-height:19.4pt; font-weight:500 }
p.first::first-letter{ font-family:var(--display); font-weight:800; float:left; font-size:33pt; line-height:.78;
  padding:1.4mm 2.4mm 0 0; color:var(--ink) }
.lede{ font-size:12.6pt; line-height:19.4pt; font-weight:500; color:var(--ink2) }
strong,b{ font-weight:700 }
em{ font-style:italic }
small{ display:block; font-size:8pt; line-height:11.6pt; color:var(--grey) }
/* ex-deck cursif : devient un sous-titre en capitales rouges */
.script{ font-family:var(--text)!important; font-style:normal!important; font-weight:700;
  font-size:9pt!important; letter-spacing:.16em; text-transform:uppercase; color:var(--sig) }
.label{ font-family:var(--text); font-weight:700; font-size:7pt; letter-spacing:.2em; text-transform:uppercase }
.label-sm{ font-family:var(--text); font-weight:700; font-size:6.4pt; letter-spacing:.18em; text-transform:uppercase }

/* bandeaux */
.hdr{ background:var(--ink); color:var(--paper); display:flex; justify-content:space-between; align-items:center;
  padding:2.6mm var(--M); font-size:6.8pt; font-weight:700; letter-spacing:.22em; text-transform:uppercase; flex:0 0 auto }
.hdr .r{ color:var(--sig) }
.ftr{ background:var(--ink); color:rgba(241,240,236,.55); display:flex; justify-content:space-between;
  align-items:center; padding:2.4mm var(--M); font-size:6.6pt; font-weight:700; letter-spacing:.22em;
  text-transform:uppercase; flex:0 0 auto }
.ftr b{ background:var(--sig); color:#fff; font-family:var(--display); font-weight:800; font-size:9.5pt;
  letter-spacing:0; padding:.8mm 2.4mm }

/* folio des pages d'annexe */
.folio.flow{ position:absolute; left:var(--M); right:var(--M); bottom:8mm; display:flex;
  justify-content:space-between; align-items:center; font-family:var(--text); font-weight:700;
  font-size:6.6pt; letter-spacing:.22em; text-transform:uppercase; color:var(--grey) }
.folio.flow b{ background:var(--ink); color:var(--paper); font-family:var(--display); font-weight:800;
  font-size:9.5pt; letter-spacing:0; padding:.8mm 2.4mm }

/* encadrés génériques */
.box{ border:1.4px solid var(--ink); padding:4.4mm 4.8mm; background:var(--white) }
.box.filled{ background:var(--fill); border-color:var(--ink) }
.box.dark{ background:var(--ink); color:var(--paper) }
.box.dark small{ color:rgba(241,240,236,.6) }
.box.blood{ background:var(--sig-p); border:1.4px solid var(--sig) }
.box .bt{ font-family:var(--text); font-weight:700; font-size:6.8pt; letter-spacing:.2em; text-transform:uppercase;
  display:flex; align-items:center; gap:2.5mm; margin-bottom:2.8mm; color:var(--ink) }
.box.dark .bt{ color:var(--sig) }
.box.blood .bt{ color:var(--sig) }
.box p{ font-size:9.6pt; line-height:14.2pt }
.tag{ font-family:var(--text); font-weight:700; font-size:6pt; letter-spacing:.14em; text-transform:uppercase;
  padding:.8mm 2.2mm; margin-left:auto; background:var(--ink); color:var(--paper) }
.tag.myth{ background:var(--sig); color:#fff }
.tag.contested{ background:var(--fill); color:var(--ink) }
.box.dark .tag{ background:var(--paper); color:var(--ink) }

/* tableaux */
table{ width:100%; border-collapse:collapse; font-size:9.2pt }
th{ background:var(--ink); color:var(--paper); font-family:var(--text); font-weight:700; font-size:6.6pt;
  letter-spacing:.16em; text-transform:uppercase; text-align:left; padding:2.4mm 2.6mm; border:none }
td{ padding:2.4mm 2.6mm; border-bottom:1px solid var(--line); vertical-align:top; line-height:13pt }
tr:last-child td{ border-bottom:1.4px solid var(--ink) }
td.n{ font-variant-numeric:tabular-nums; white-space:nowrap; font-weight:600 }
.leader{ display:flex; align-items:baseline; gap:2mm; font-size:9.4pt }
.leader .dots{ flex:1; border-bottom:1px dotted var(--line); transform:translateY(-2px) }
`;
module.exports={CSS};
