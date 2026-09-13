const fs=require('fs');
const {CSS}=require('./theme.js');
const {C,dachSolid,crest,stripe,dblRule,photo,script,bcs,spine}=require('./kit.js');
const folio=(l,n,r='DACHSHUNDOLOGY')=>`<div class="folio"><span>${l}</span><b>${n}</b><span>${r}</span></div>`;

/* ═══════════ 1. COVER ═══════════ */
const cover=`<section class="page" style="background:var(--green);color:var(--cream)">
  <div style="position:absolute;inset:9mm;border:1.6px solid rgba(246,241,228,.55)"></div>
  <div style="position:absolute;inset:11.5mm;border:.6px solid rgba(246,241,228,.35)"></div>
  <div class="pad" style="inset:16mm 20mm 16mm 20mm;display:flex;flex-direction:column;align-items:center;text-align:center">
    <div style="margin-top:1mm">${crest({d:126})}</div>
    <div class="script" style="font-size:20pt;margin-top:7mm;color:var(--brass)">The Complete</div>
    <h1 style="font-size:59pt;line-height:.95;letter-spacing:.05em;margin-top:1mm">DACHSHUND</h1>
    <div class="script" style="font-size:26pt;margin-top:1mm">Owner’s Manual</div>
    <div style="width:52mm;margin:6mm 0 0">${dblRule('rgba(246,241,228,.7)')}</div>
    <div class="label" style="margin-top:4mm;color:var(--brass)">Miniature &amp; Standard &nbsp;·&nbsp; Smooth, Wire &amp; Long</div>

    <div style="width:104mm;margin-top:6mm">
      ${photo({n:1,h:'74mm',shape:'arch',tone:C.green,
        note:'Cover portrait — standard smooth red, three-quarter view, shallow depth of field, warm window light, neutral background.'})}
    </div>

    <div style="margin-top:auto;width:100%">
      ${stripe({h:9})}
      <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-top:5mm">
        <div style="text-align:left">
          <div class="label" style="color:var(--brass)">American Edition · MMXXVI</div>
          <div class="script" style="font-size:12.5pt;margin-top:1.5mm;color:rgba(246,241,228,.85)">reviewed by a licensed veterinarian</div>
        </div>
        <div class="label-sm" style="text-align:right;color:rgba(246,241,228,.6);line-height:11pt">
          150 PAGES · 24 TOOLS<br>EVERY FIGURE SOURCED
        </div>
      </div>
    </div>
  </div>
</section>`;

/* ═══════════ 2. PART OPENER ═══════════ */
const opener=`<section class="page" style="background:var(--cream)">
  <div style="position:absolute;top:0;left:0;right:0">${stripe({h:11})}</div>
  <div class="pad" style="inset:26mm 20mm 21mm 20mm;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="label" style="color:var(--camel)">Part Five</span>
      <span class="label" style="color:var(--slate)">Pages 79 – 98</span>
    </div>
    <div style="margin-top:3mm">${dblRule(C.green)}</div>

    <div style="display:flex;gap:10mm;align-items:flex-start;margin-top:13mm">
      <h1 style="font-size:96pt;line-height:.78;color:var(--green)">V</h1>
      <div style="padding-top:4mm">
        <h1 style="font-size:34pt;line-height:1.05;color:var(--green)">The Back</h1>
        ${script('the chapter no one gets to skip',{size:19,rot:-1.6,mt:2})}
      </div>
    </div>

    <p class="lede" style="margin-top:11mm;max-width:138mm">
      About one dachshund in four will have a disc episode — ten to twelve times the risk carried by other
      breeds. The American College of Veterinary Surgeons reports that dachshunds account for
      <em>45 to 70 percent of every canine IVDD case in the country</em>. It is also the subject on which
      more confident, well-meant, wrong advice circulates than any other. This part sorts it:
      what is settled, what is contested, and what is folklore.
    </p>

    <div style="display:grid;grid-template-columns:1fr 64mm;gap:10mm;margin-top:10mm;align-items:start">
      <div>
        <div>${spine({w:400})}</div>
        ${script('a healthy disc, and one that has herniated upward into the cord',{size:11.5,rot:0,mt:1})}
        <div class="box filled" style="margin-top:7mm">
          <div class="bt" style="color:var(--camel)">Before you read on</div>
          <p>Three claims in this part contradict advice you have almost certainly been given, by people who
          meant well. Each one carries its source. Where the evidence is thin, the page says so.</p>
        </div>
      </div>
      ${photo({n:3,h:'72mm',tone:C.green,
        note:'Miniature long-haired lying flat on a wood floor, shot from floor level, back in a straight line.',
        caption:'Twenty-six vertebrae, twenty-four discs, and a spine held level between two short pairs of legs.'})}
    </div>

    <div style="margin-top:auto">
      <div style="margin-bottom:4mm">${dblRule(C.green,true)}</div>
      <div style="columns:2;column-gap:12mm">
        ${[['5.1','What the numbers actually say','80'],
           ['5.2','What protects the back — and what doesn’t','83'],
           ['5.3','Spay, neuter, and the study nobody quotes','87'],
           ['5.4','Reading a crisis: twelve signs, five grades','89'],
           ['5.5','The first sixty minutes','92'],
           ['5.6','Crate rest or surgery','94'],
           ['5.7','Six weeks of confinement, day by day','96'],
           ['5.8','The one-page sheet for your vet and sitter','97']]
          .map(([n,t,p])=>`<div class="leader" style="break-inside:avoid;padding:1.7mm 0">
            <span class="label-sm" style="color:var(--camel);letter-spacing:.1em">${n}</span>
            <span>${t}</span><span class="dots"></span><span class="n">${p}</span></div>`).join('')}
      </div>
    </div>
  </div>
</section>`;

/* ═══════════ 3. CONTENT ═══════════ */
const content=`<section class="page">
  <div class="pad">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="label" style="color:var(--camel)">Five · The Back</span>
      <span class="label" style="color:var(--slate)">5.1</span>
    </div>
    <div style="margin-top:2.4mm">${dblRule(C.green)}</div>

    <h2 style="margin-top:7mm;max-width:122mm;color:var(--green)">What the numbers<br>actually say</h2>
    ${script('“one in four” is roughly right — and almost always misused',{size:15,mt:2.5})}

    <div class="cols" style="margin-top:7mm">
      <div>
        <p class="first">You have met the statistic already: one dachshund in four. It is close enough to true.
        The problem was never the number — it is what people do with it. Two different studies produce two
        different figures, both correct, and a guide that gives you one without the other leaves you thinking
        the science is a mess when it is simply answering two different questions.</p>

        <p>Swedish insurance records covering tens of thousands of dogs put lifetime risk at
        <strong>24.4 percent for miniatures and 13.0 percent for standards</strong>, against 3.5 percent across
        all breeds. That is a lifetime figure. The British DachsLife survey of 2,031 owners, analyzed by the
        Royal Veterinary College, found <strong>15.7 percent</strong> — but that counts dogs already affected
        on the day of the survey, including two-year-olds who have not reached the risk window yet. Neither
        number is wrong. They are not measuring the same thing.</p>

        <h3 style="margin-top:5mm">Why the body does this</h3>
        <p>Intervertebral disc disease in this breed is not an accident of clumsiness. It is the direct
        consequence of the thing you bought the dog for. The gene that makes the legs short —
        chondrodystrophy, carried by an <em>FGF4</em> retrogene — also changes the discs between the vertebrae.
        They mineralize early, lose their give, and eventually fail. The process begins around
        <strong>four months of age</strong>. By twelve months, most of a dachshund's discs have already
        changed character.</p>

        <p>Read that again: the terrain is laid down before your puppy has finished teething. Nothing you
        did caused it, and nothing you do will undo it. What you control is everything that comes after.</p>

        <div style="display:flex;gap:6mm;margin-top:5mm">
          ${[['45–70%','of all canine IVDD cases in the US are dachshunds &nbsp;<span style="color:#9A9179">— ACVS</span>'],
             ['3–6 yrs','the age at which chondrodystrophoid breeds typically present'],
             ['94 / 6','percent of lesions in the back versus the neck']]
            .map(([n,t])=>`<div style="flex:1">
              <div style="font-family:'GFS Baskerville';font-size:21pt;color:var(--green);line-height:1">${n}</div>
              <div style="height:1.6px;background:var(--brass);margin:2mm 0 2mm"></div>
              <small>${t}</small></div>`).join('')}
        </div>
      </div>

      <div>
        ${photo({n:2,h:'46mm',note:'Smooth red standing in profile on grass, side-on, whole body sharp — the reference silhouette.',
                 caption:'The proportion that defines the breed is also the proportion that defines the risk.'})}
        <div class="box dark" style="margin-top:6mm">
          <div class="bt">What the evidence says <span class="tag settled">Settled</span></div>
          <p>The two figures disagree because one asks <em>“will it ever happen?”</em> and the other asks
          <em>“has it happened yet?”</em>. A guide quoting one number without saying which question it
          answers is repeating, not reporting.</p>
          <small style="margin-top:3mm;border-top:.5px solid #4A6357;padding-top:2.2mm">
          Bergknut et al., 2012 · Packer et al., <em>Canine Genetics &amp; Epidemiology</em>, 2016 · ACVS.</small>
        </div>
        <div class="box blood" style="margin-top:5mm">
          <div class="bt">Red flag</div>
          <p>A dog that suddenly refuses the couch, yelps for no visible reason, or stands with an arched
          back is not sulking. Call the same day — protocol on page&nbsp;92.</p>
        </div>
      </div>
    </div>
    ${folio('Part Five · The Back','80')}
  </div>
</section>`;

/* ═══════════ 4. TOOL ═══════════ */
const tool=`<section class="page" style="background:var(--cream)">
  <div class="pad">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="label" style="color:var(--camel)">Six · Health, Food &amp; Weight</span>
      <span class="label" style="color:var(--slate)">Tool nº 19</span>
    </div>
    <div style="margin-top:2.4mm">${dblRule(C.green)}</div>
    <h2 style="margin-top:6mm;color:var(--green)">The ideal-weight check</h2>
    ${script('the scale lies — your hands don’t',{size:16,mt:2.5})}
    <p class="lede" style="margin-top:3.5mm;max-width:146mm">A sixteen-pound dachshund can be lean or obese
    depending on frame and muscle. What you grade is shape — with your hands and your eyes, on the nine-point
    scale every veterinarian already uses.</p>

    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:7mm;margin-top:6mm;background:var(--paper);
                border:1px solid var(--brass);padding:5mm">
      ${[['lean','1 – 3','Too lean','Ribs, spine and hip bones visible across the room. No palpable fat. Waist exaggerated.'],
         ['ideal','4 – 5','Ideal','Ribs felt easily under a thin layer. Waist visible from above, belly tucked from the side.'],
         ['heavy','7 – 9','Overweight','Ribs hard to find. No waist, or a waist that bulges. Fat over the spine and tail base.']]
        .map(([s,sc,t,d])=>`<div style="display:flex;gap:4mm">
          <div style="flex:0 0 auto;width:15mm">${bcs({w:56,state:s,fill:s==='ideal'?C.green:C.camel})}</div>
          <div>
            <div style="font-family:'GFS Baskerville';font-size:17pt;line-height:1;color:${s==='ideal'?'var(--green)':'var(--oxblood)'}">${sc}</div>
            <h3 style="margin-top:1.4mm">${t}</h3>
            <small style="margin-top:1.4mm">${d}</small>
          </div></div>`).join('')}
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9mm;margin-top:6mm">
      <div>
        <h3>The twenty-second test</h3>
        <p style="margin-top:2.4mm"><strong>One.</strong> Lay both palms flat on his ribcage and slide them
        back. You should feel the ribs the way you feel the knuckles on the <em>back</em> of your hand — not
        the padded ones on your palm.</p>
        <p><strong>Two.</strong> Look down at him standing. A waist should appear behind the ribs.</p>
        <p><strong>Three.</strong> Look at him side-on. The belly line should rise toward the back legs.</p>
        <p style="margin-top:2.4mm"><strong>Three yes answers is a 4 or 5 out of 9.</strong> That is where you
        keep him, for fifteen years.</p>
      </div>
      <div>
        <h3>Weight by size, American standard</h3>
        <table style="margin-top:2.6mm">
          <tr><th>AKC division</th><th>Weight</th><th>Measured</th></tr>
          <tr><td>Standard</td><td class="n">16 – 32 lb</td><td>at maturity</td></tr>
          <tr><td>Miniature</td><td class="n">11 lb and under</td><td>at 12 months+</td></tr>
          <tr><td>“Tweenie”</td><td class="n">≈ 12 – 15 lb</td><td>no official status</td></tr>
        </table>
        <small style="margin-top:2.4mm">The AKC divides by <em>weight</em>; the European FCI divides by
        <em>chest circumference</em>, which is why an American “miniature” and a European <em>Zwergteckel</em>
        are not the same animal. There is no rabbit size in the AKC.</small>
      </div>
    </div>

    <div style="margin-top:5mm">
      <div style="display:flex;justify-content:space-between;align-items:baseline">
        <h3>Weigh-in log — same day each month, same scale</h3>
        <span class="label-sm" style="color:var(--slate)">Printable · sheet 19</span>
      </div>
      <table style="margin-top:2.6mm">
        <tr><th style="width:24mm">Month</th><th style="width:20mm">Weight</th><th style="width:22mm">Score / 9</th><th>What I changed — food, treats, walks</th></tr>
        ${['January','February'].map(m=>`<tr><td>${m}</td><td class="n">&nbsp;</td><td class="n">&nbsp;</td><td>&nbsp;</td></tr>`).join('')}
      </table>
    </div>

    <div class="box dark" style="margin-top:5mm">
      <div class="bt">What the evidence says <span class="tag contested">Contested</span></div>
      <p>Everyone will tell you an overweight dachshund herniates more discs. It is plausible — but
      DachsLife 2015 found <em>no significant association</em> between body condition and IVDD. Keep him lean
      for his joints, his teeth, his heart and his years. Promising it will spare his back would be a lie.</p>
    </div>
    ${folio('Part Six · Health, Food &amp; Weight','105')}
  </div>
</section>`;

/* ═══════════ 5. PROTOCOL ═══════════ */
const protocol=`<section class="page">
  <div class="pad">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="label" style="color:var(--oxblood)">Five · The Back &nbsp;·&nbsp; Emergency</span>
      <span class="label" style="color:var(--slate)">5.5 · Tool nº 15</span>
    </div>
    <div style="margin-top:2.4mm">${dblRule(C.oxblood)}</div>
    <h2 style="margin-top:6mm;color:var(--green)">The first sixty minutes</h2>
    ${script('read this page before you need it',{size:16,color:C.oxblood,mt:2.5})}
    <p class="lede" style="margin-top:4mm;max-width:140mm">He has cried out, or he is dragging a back foot,
    or he will not stand up. From this moment every decision counts, and most of them are decisions you make
    before you reach the clinic.</p>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:9mm;margin-top:7mm">
      <div>
        ${[['0 – 5 min','Confine him','Into a crate, a pen, or a low box. Support the whole body like a plank — no hand under the belly, no stairs, no “let him walk it off.”'],
           ['5 – 10 min','Make the call','Your veterinarian, or the emergency hospital after hours. Say it in these words: “Dachshund, suspected disc herniation, he can’t stand.” Those words move you up the queue.'],
           ['10 – 20 min','Test deep pain','Pinch a back toe, firmly. Does he pull the foot away? Does he turn his head and react? Write down what you saw and the time. This is the single most powerful piece of information in the whole case.'],
           ['20 – 60 min','Travel flat','In the box, level, never held upright. Bring vaccination records and the sheet from page 97. No food, and no medicine from your own cabinet.']]
          .map(([t,h,d],i)=>`<div style="display:flex;gap:4.5mm;padding-bottom:4mm">
            <div style="flex:0 0 auto;display:flex;flex-direction:column;align-items:center">
              <div style="width:9mm;height:9mm;border:1.4px solid var(--oxblood);border-radius:50%;color:var(--oxblood);
                   font-family:'GFS Baskerville';font-size:12pt;display:flex;align-items:center;justify-content:center">${i+1}</div>
              ${i<3?'<div style="flex:1;width:1px;background:#D9C7C2;margin-top:1.6mm"></div>':''}
            </div>
            <div><div class="label-sm" style="color:var(--oxblood)">${t}</div>
              <h3 style="margin-top:1mm">${h}</h3>
              <p style="margin-top:1.4mm;font-size:9.6pt;line-height:14.6pt">${d}</p></div></div>`).join('')}
        <div class="box blood">
          <div class="bt">Never</div>
          <p>Do not walk him “to see.” Do not give ibuprofen, acetaminophen or aspirin — all three are toxic
          to dogs. Do not massage the back. Do not wait until morning because he seems brighter.</p>
        </div>
      </div>
      <div>
        <h3>The grading scale your neurologist will use</h3>
        <table style="margin-top:2.6mm">
          <tr><th style="width:12mm">Grade</th><th>What you see</th><th style="width:22mm">Walks again</th></tr>
          <tr><td class="n">1</td><td>Walks normally, clearly in pain</td><td class="n">70 – 100%</td></tr>
          <tr><td class="n">2</td><td>Walks, wobbly, knuckling</td><td class="n">55 – 100%</td></tr>
          <tr><td class="n">3</td><td>Cannot rise without help</td><td class="n">55 – 80%</td></tr>
          <tr><td class="n">4</td><td>Paralyzed, still feels deep pain</td><td class="n">40 – 80%</td></tr>
          <tr style="background:#F3E6E2"><td class="n" style="color:var(--oxblood)">5</td>
            <td style="color:var(--oxblood)"><strong>Paralyzed, no deep pain</strong></td>
            <td class="n" style="color:var(--oxblood)">≈ 30%</td></tr>
        </table>
        <small style="margin-top:2.2mm">Recovery under conservative management. With surgery the ACVS reports
        about <strong>90 percent</strong> where deep pain is present, and <strong>50 to 60 percent</strong>
        where it is not — against under 10 percent medically. That gap is why grade 5 is a surgical emergency.</small>

        <div class="box filled" style="margin-top:6mm">
          <div class="bt" style="color:var(--camel)">What it costs, honestly</div>
          <p>An MRI averages <strong>$2,285</strong> nationally and runs past <strong>$4,000</strong> in the
          most expensive states. One Florida specialty group publishes an all-in figure of
          <strong>$10,000 – $15,000</strong> covering imaging, surgery, three to four nights of hospitalization
          and rehab; vet-reviewed national estimates for the surgery alone sit at <strong>$3,000 – $8,000</strong>.</p>
          <p style="margin-top:2.4mm">This is the number that makes page 117 the most valuable page in the book.</p>
        </div>
        ${script('Ask your insurer one question before you sign: is there an orthopedic waiting period, and does IVDD fall inside it?',{size:12,mt:5})}
      </div>
    </div>
    ${folio('Part Five · The Back','92')}
  </div>
</section>`;

/* ═══════════ 6. CLOSING ═══════════ */
const closing=`<section class="page" style="background:var(--green);color:var(--cream)">
  <div style="position:absolute;inset:10mm;border:1px solid rgba(246,241,228,.35)"></div>
  <div class="pad" style="inset:19mm 24mm 23mm 24mm;display:flex;flex-direction:column">
    <div style="display:flex;justify-content:space-between;align-items:baseline">
      <span class="label" style="color:var(--brass)">Part Five closes</span>
      <span class="label" style="color:rgba(246,241,228,.5)">The Back</span>
    </div>
    <div style="margin-top:3mm">${dblRule('rgba(246,241,228,.6)')}</div>
    <h1 style="font-size:32pt;margin-top:9mm">What to remember</h1>
    <div style="margin-top:6mm">
      ${[['The terrain is genetic, not behavioral.','His discs began changing at four months. You did not cause this, and no amount of carefulness will reverse it. What you control is everything downstream.'],
         ['The one lever with real evidence behind it is timing.','Waiting past twelve months to neuter roughly halves the risk — Dorn and Seath, 2018, on 1,073 dachshunds. It is also the one piece of advice your vet may not volunteer.'],
         ['Staying active protects better than staying careful.','Under thirty minutes of walking a day: higher risk. Over an hour: lower. Immobility is not protection.'],
         ['Stairs and sofas do not deserve their reputation.','The available data does not convict them. A ramp is a kindness and a comfort. It is not an insurance policy.'],
         ['A crisis is measured in hours.','Confine, call, check deep pain, give nothing. The neurological grade on arrival is the best predictor of how this ends.']]
        .map(([t,d],i)=>`<div style="display:flex;gap:6mm;padding:4mm 0;border-top:.6px solid rgba(246,241,228,.28)">
          <span style="font-family:'GFS Baskerville';font-size:23pt;color:var(--brass);min-width:11mm;line-height:1">${['I','II','III','IV','V'][i]}</span>
          <div><h3 style="color:var(--cream)">${t}</h3>
          <p style="margin-top:1.4mm;font-size:9.8pt;line-height:15pt;color:#DED8C8">${d}</p></div></div>`).join('')}
    </div>
    <div style="display:grid;grid-template-columns:1.1fr .9fr;gap:9mm;margin-top:8mm;align-items:end">
      <div class="box" style="background:rgba(246,241,228,.07);border-color:rgba(246,241,228,.35)">
        <div class="bt" style="color:var(--brass)">Three questions</div>
        <p style="color:#DED8C8"><strong>1.</strong> At what age do a dachshund’s discs begin to change?</p>
        <p style="color:#DED8C8"><strong>2.</strong> Which single decision has study-level evidence behind it?</p>
        <p style="color:#DED8C8"><strong>3.</strong> What must you test before you move a dog that cannot stand?</p>
        <small style="margin-top:3mm;color:#A9B3A7">Answers on page 146.</small>
      </div>
      <div style="text-align:center">
        ${dachSolid({w:150,fill:'rgba(246,241,228,.9)',flip:true})}
        ${script('next: food, weight, and the pages your insurer hopes you skip',{size:12,color:'#C2A24C',align:'center',rot:-1,mt:2})}
      </div>
    </div>
    ${folio('Part Five · The Back','98')}
  </div>
</section>`;

const html=`<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Dachshundology — design sample</title><style>${CSS}</style></head><body>
${cover}${opener}${content}${tool}${protocol}${closing}</body></html>`;
fs.writeFileSync('/home/claude/dachshundology/build/sample.html',html);
console.log('pages:',(html.match(/class="page"/g)||[]).length);
