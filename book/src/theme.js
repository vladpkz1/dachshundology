const CSS = `
@page{ size:A4; margin:0 }
*{ box-sizing:border-box; margin:0; padding:0; -webkit-print-color-adjust:exact; print-color-adjust:exact }
:root{
  /* ACADEMY — palette dérivée du logo Dachshund Academy */
  --green:#093B2F; --greenDk:#052720; --greenLt:#1B5344;
  --cream:#FAF0D5; --sand:#EFE3C2; --paper:#FFFDF6;
  --camel:#A93B27; --brass:#D6C8A6; --oxblood:#8E2F1E;
  --ink:#1A2420; --slate:#7A7259;
  --display:'Fraunces','TeX Gyre Schola',Georgia,serif;
  --text:'Inter','Helvetica Neue',Arial,sans-serif;
  --M:20mm;
}
html,body{ background:#3a3a38 }
.page{ position:relative; width:210mm; height:297mm; background:var(--paper); color:var(--ink);
  overflow:hidden; page-break-after:always; break-after:page; font-family:var(--text);
  font-variant-numeric:oldstyle-nums proportional-nums }
.page:last-child{ page-break-after:auto }
.pad{ position:absolute; inset:17mm var(--M) 21mm var(--M) }

h1{ font-family:var(--display); font-weight:600; letter-spacing:-.012em; font-variant-numeric:lining-nums }
h2{ font-family:var(--display); font-weight:600; font-size:25pt; line-height:1.08; letter-spacing:-.015em }
h3{ font-family:var(--text); font-weight:700; font-size:10.6pt; letter-spacing:-.004em }
p{ font-size:10.1pt; line-height:16.3pt; text-align:left; hyphens:none; font-feature-settings:"kern" 1 }
p+p{ margin-top:2.4mm }
p.first::first-letter{ font-family:var(--display); font-weight:600; float:left; font-size:38pt; line-height:.80;
  padding:1.6mm 2.2mm 0 0; color:var(--green) }
.lede{ font-size:12.2pt; line-height:18.4pt; text-align:left; color:#2B3430; letter-spacing:-.006em }
/* ex-cursive : devient le "deck" ACADEMY — Fraunces italique, sans rotation */
.script{ font-family:var(--display); font-style:italic; font-weight:400; letter-spacing:-.004em }
.label{ font-family:var(--text); font-weight:600; font-size:6.9pt; letter-spacing:.22em; text-transform:uppercase }
.label-sm{ font-family:var(--text); font-weight:600; font-size:6.2pt; letter-spacing:.18em; text-transform:uppercase }
small{ display:block; font-size:8.1pt; line-height:11.9pt; color:var(--slate) }
em{ font-style:italic }
strong,b{ font-weight:600 }

/* colonne de notes */
.cols{ display:grid; grid-template-columns:1fr 57mm; gap:8mm; align-items:start }
.cols > div:last-child p, .cols > div:last-child small{ text-align:left; hyphens:none }
.aside{ border-top:1.4px solid var(--green); padding-top:3mm }

/* encadrés — filets fins, tag posé sur le bord */
.box{ position:relative; border:.8px solid var(--brass); padding:5mm 5.5mm; background:var(--paper) }
.box.filled{ background:var(--cream); border-color:transparent }
.box.dark{ background:var(--green); color:var(--cream); border-color:transparent }
.box.dark small{ color:#C4D2C8 }
.box.blood{ background:#F7EAE5; border:none; border-left:2.6mm solid var(--oxblood) }
.box .bt{ font-family:var(--text); font-weight:600; font-size:6.8pt; letter-spacing:.2em; text-transform:uppercase;
  display:flex; align-items:center; gap:2.5mm; margin-bottom:3mm; color:var(--green) }
.box.dark .bt{ color:var(--cream); opacity:.72 }
.box.blood .bt{ color:var(--oxblood) }
.box p{ font-size:9.5pt; line-height:14.6pt }
.tag{ font-family:var(--text); font-weight:700; font-size:6pt; letter-spacing:.16em; text-transform:uppercase;
  padding:.9mm 2.4mm; margin-left:auto }
.tag.settled{ background:var(--green); color:var(--cream) }
.tag.contested{ background:var(--sand); color:var(--green) }
.tag.myth{ background:var(--oxblood); color:#FFF3EE }
.box.dark .tag.settled{ background:var(--cream); color:var(--green) }

/* tableaux */
table{ width:100%; border-collapse:collapse; font-size:9.1pt }
th{ font-family:var(--text); font-weight:600; font-size:6.4pt; letter-spacing:.16em; text-transform:uppercase;
  text-align:left; padding:2.4mm 2.6mm; border-top:1.4px solid var(--green); border-bottom:.6px solid var(--green);
  color:var(--green) }
td{ padding:2.3mm 2.6mm; border-bottom:.5px solid #E2D9C2; vertical-align:top; line-height:13.2pt }
tr:last-child td{ border-bottom:1.4px solid var(--green) }
td.n{ font-variant-numeric:tabular-nums lining-nums; white-space:nowrap }
.leader{ display:flex; align-items:baseline; gap:2mm; font-size:9.3pt }
.leader .dots{ flex:1; border-bottom:.7px dotted #C5B996; transform:translateY(-2px) }

/* folio — pastille ronde, comme la planche ACADEMY */
.folio{ position:absolute; left:0; right:0; bottom:-13mm; display:flex; justify-content:space-between;
  align-items:center; font-family:var(--text); font-weight:500; font-size:6.2pt; letter-spacing:.2em;
  text-transform:uppercase; color:#A39A80 }
.folio b{ font-weight:600; color:var(--green); font-family:var(--display); font-size:8.4pt; letter-spacing:0;
  font-variant-numeric:lining-nums; width:7.4mm; height:7.4mm; border:.8px solid var(--green); border-radius:50%;
  display:flex; align-items:center; justify-content:center }
`;
module.exports={CSS};
