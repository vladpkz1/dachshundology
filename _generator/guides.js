/* DACHSHUNDOLOGY — dachshundology.com
   Eight free guides. Every figure traces to SOURCES.md.
   Where a figure is British, Swedish or Danish, the text says so.
   There is no US epidemiological dataset on dachshund IVDD. */

module.exports = [

/* ═══════════════════ 1 · PILLAR ═══════════════════ */
{
  slug:'dachshund-back-problems-ivdd',
  title:'Dachshund Back Problems: IVDD Explained',
  h1:'Dachshund back problems: what IVDD is, how likely it is, and what to do in the first hour',
  metaTitle:'Dachshund Back Problems (IVDD): Real Numbers, Signs, Grades',
  metaDescription:'Lifetime IVDD risk, the 1–5 grades with recovery rates, the signs in order of urgency, and exactly what to do in the first hour. Every figure sourced.',
  keyword:'dachshund back problems',
  updated:'2026-09-12',
  answer:'Dachshund back problems are almost always intervertebral disc disease. Swedish insurance data (Bergknut 2012) puts lifetime risk at 24.4% for miniatures and 13.0% for standards, against 3.5% across all breeds. The ACVS says dachshunds account for 45–70% of all canine IVDD cases. Sudden weakness in the back legs is an emergency, not a wait-and-see.',
  toc:[
    'What is IVDD in a dachshund?',
    'How common are dachshund back problems?',
    'Why do two different prevalence figures circulate?',
    'At what age does IVDD usually appear?',
    'What are the signs, in order of urgency?',
    'What are the IVDD grades, and what are the recovery rates?',
    'What do you do in the first hour?',
    'Surgery or conservative management?',
    'What does conservative management actually involve?',
    'What actually lowers the risk?'
  ],
  blocks:[

    {t:'h2',text:'What is IVDD in a dachshund?'},

    {t:'p',text:'A disc sits between each pair of vertebrae and works as a shock absorber. In a dachshund, the soft center of that disc hardens and calcifies years earlier than it should. Degeneration begins at around <strong>four months of age</strong>, and roughly 90% of discs show changes by the first birthday. A hardened disc cannot absorb anything. It cracks, and its contents extrude upward into the spinal canal, where the cord has nowhere to go.'},

    {t:'p',text:'The cause is genetic and it is known. Brown et al., publishing in <em>PNAS</em> in 2017, identified an <strong>FGF4 retrogene</strong> — the mutation now tested as CDDY — as the driver of both the short legs and the early disc calcification. The two traits came in the same package. This matters for how you think about your dog: the disc that fails at five years old was already failing at five months. Nothing you did on the day it ruptured created the condition.'},

    {t:'p',text:'The damage is overwhelmingly thoracolumbar. Ninety-four percent of dachshund cases affect the back, 6% the neck, and a third of all cases involve a single disc space, <strong>T12–T13</strong>.'},

    {t:'h2',text:'How common are dachshund back problems?'},

    {t:'stat',figure:'24.4%',label:'lifetime IVDD risk in miniature dachshunds',source:'Bergknut 2012, Swedish insurance data'},

    {t:'p',text:'Common enough that it is the defining fact of the breed, and not so common that it is a sentence. Three-quarters of miniature dachshunds never have a disc episode. That is the honest framing, and it is the one most owners are never given.'},

    {t:'table',
      head:['Population','IVDD figure','What kind of figure','Source'],
      rows:[
        ['Miniature dachshund','24.4%','Lifetime risk','Bergknut 2012, Swedish insurance'],
        ['Standard dachshund','13.0%','Lifetime risk','Bergknut 2012, Swedish insurance'],
        ['All breeds','3.5%','Lifetime risk','Bergknut 2012, Swedish insurance'],
        ['Dachshunds, all varieties','15.7% (95% CI 14.1–17.3)','Point prevalence','DachsLife 2015, 2,031 owners, RVC analysis'],
        ['Standard smooth','24.4%','Point prevalence, highest variety','DachsLife 2015'],
        ['Standard wirehaired','7.1%','Point prevalence, lowest variety','DachsLife 2015']
      ],
      caption:'Two study designs, two different questions. Neither figure is American.'},

    {t:'h2',text:'Why do two different prevalence figures circulate?'},

    {t:'p',text:'Because they measure different things, and almost nobody online says which is which. <strong>Lifetime risk</strong> asks what share of dogs will have an episode at some point across a whole life. <strong>Point prevalence</strong> asks what share of dogs alive right now have the condition today. A snapshot of living dogs always reads lower than a lifetime tally, because it counts the young dogs who have not got there yet.'},

    {t:'p',text:'So 24.4% and 15.7% are not a contradiction. Bergknut followed Swedish insurance records to the end of life. DachsLife 2015 surveyed 2,031 owners at one moment, and the Royal Veterinary College analyzed the result. Both are good studies. They answer different questions, and a page that quotes one without naming the design is not telling you enough to use it.'},

    {t:'callout',tone:'evidence',title:'No American dataset exists',text:'Every prevalence figure on this page is British, Swedish or Danish. The United States has no epidemiological dataset on dachshund intervertebral disc disease. When a US site gives you a percentage, it is quoting European research, usually without saying so. We say so.'},

    {t:'p',text:'Two further figures are worth carrying. Dachshunds run at roughly <strong>10 to 12 times</strong> the IVDD risk of other breeds, and the American College of Veterinary Surgeons states that dachshunds account for <strong>45 to 70% of all canine IVDD cases</strong> — one breed, most of the caseload. That is why your veterinarian recognizes the walk before you finish describing it.'},

    {t:'h2',text:'At what age does IVDD usually appear?'},

    {t:'p',text:'Earlier than owners expect. The ACVS puts typical presentation in chondrodystrophoid breeds at <strong>three to six years</strong>. Seventy-six percent of cases are diagnosed between four and eight. This is not an old dog’s disease. It arrives in the middle of a healthy life, which is exactly why it blindsides people who were braced for something at twelve.'},

    {t:'h2',text:'What are the signs, in order of urgency?'},

    {t:'p',text:'Read this list top to bottom. The ordering is the point: pain is a warning, and weakness is an emergency.'},

    {t:'ol',items:[
      '<strong>Reluctance.</strong> He stops jumping onto the sofa he has used for years. He hesitates at a step. He asks to be lifted.',
      '<strong>A changed outline.</strong> An arched back, a tucked belly, a head held low, a tense abdomen that feels like a board.',
      '<strong>Pain on handling.</strong> A yelp when you lift him under the ribs. Flinching along the spine. Trembling, panting, or refusing to settle at night.',
      '<strong>Scuffed nails and a wobble.</strong> He is still walking, but the back end sways, the legs cross, or the nails drag on the sidewalk.',
      '<strong>Knuckling.</strong> A paw turns over and he stands on the top of it without correcting. He has lost the sense of where the foot is.',
      '<strong>He cannot stand.</strong> The back legs move but will not hold weight, or will not move at all.',
      '<strong>No bladder control.</strong> Dribbling, or a bladder that fills without emptying.'
    ]},

    {t:'callout',tone:'warn',title:'Items 4 through 7 are an emergency tonight',text:'Weakness means the spinal cord is already compressed. Time to treatment is one of the few variables you control. Do not wait until the morning to see whether it settles, and do not accept a next-available appointment three days out.'},

    {t:'h2',text:'What are the IVDD grades, and what are the recovery rates?'},

    {t:'p',text:'Your veterinarian will grade the episode one to five. The grade describes function, not how much the dog hurts, and it drives every decision that follows. The recovery percentages below come from the UK IVDD scheme’s published clinical grading scale and describe <em>conservative</em> — non-surgical — management.'},

    {t:'table',
      head:['Grade','What you see','Recovery, managed conservatively'],
      rows:[
        ['1','Pain only. Walking normally.','70–100%'],
        ['2','Walking, but wobbly. Crossing, scuffing, knuckling.','55–100%'],
        ['3','Can move the back legs, cannot stand or walk unaided.','55–80%'],
        ['4','No voluntary movement in the back legs. Deep pain still present. Bladder control usually lost.','40–80%'],
        ['5','As grade 4, with no deep pain sensation.','About 30%']
      ],
      caption:'Clinical grading scale and conservative recovery rates, UK IVDD scheme. Deep pain is tested by a veterinarian, not at home.'},

    {t:'p',text:'The wide bands are honest, not sloppy. Outcome depends on the grade, the speed of onset, how fast treatment starts, and whether the dog holds still for four weeks. A grade 2 caught the same day and confined properly sits near the top of its band.'},

    {t:'h2',text:'What do you do in the first hour?'},

    {t:'ol',items:[
      '<strong>Stop all movement.</strong> Pick him up with one hand under the chest and one under the pelvis so the spine stays level, and put him somewhere he cannot move — a crate, a laundry basket, a puppy pen. No stairs, no sofa, no yard.',
      '<strong>Write down the time.</strong> When did you last see him normal? When did the sign appear? Your neurologist will ask, and your memory will be worse than you think.',
      '<strong>Note what he can do.</strong> Can he stand? Bear weight? Wag? Move his toes? Has he urinated? Write the answers down rather than trusting yourself to recall them at the counter.',
      '<strong>Call now.</strong> Your veterinarian in hours, the nearest emergency hospital out of hours. Say the words "dachshund", "back legs" and the time of onset in the first sentence. It changes the triage.',
      '<strong>Ask whether they have a neurologist or can refer tonight.</strong> Advanced imaging and surgery happen at referral hospitals, and the transfer takes time you may not want to spend twice.',
      '<strong>Take a harness, not a collar.</strong> And take the written notes.'
    ]},

    {t:'callout',tone:'warn',title:'Four things not to do',text:'Do not give human painkillers — ibuprofen, naproxen and acetaminophen are all dangerous to dogs. Do not massage the back or manipulate the spine. Do not encourage him to walk to show you how bad it is. Do not let him sleep it off to see if the morning is better.'},

    {t:'p',text:'A US emergency exam averages <strong>$135</strong> (range $107–$246) and a neurologic exam at a university teaching hospital runs about <strong>$195</strong>. That is the price of finding out. It is the cheapest part of the entire episode, and the only part where speed still buys you something.'},

    {t:'h2',text:'Surgery or conservative management?'},

    {t:'p',text:'The deciding question is whether deep pain sensation is present, and the ACVS numbers are unambiguous about what it changes.'},

    {t:'table',
      head:['Deep pain','With surgery','With medical management'],
      rows:[
        ['Present','About 90% walk again','60–80% walk again'],
        ['Absent','50–60% walk again','Under 10% walk again']
      ],
      caption:'Outcome figures, American College of Veterinary Surgeons.'},

    {t:'p',text:'With deep pain present, both routes work and the choice is genuinely yours — faster recovery and a higher ceiling against cost and anesthesia. With deep pain absent, the gap is enormous, and it closes with delay. That is the moment the decision stops being a preference.'},

    {t:'p',text:'Cost is part of the decision and pretending otherwise helps nobody. An MRI averages <strong>$2,285</strong> nationally (range $1,811–$4,140). PetMD puts spinal surgery itself at $3,000–$8,000, and one referral neurology practice publishes an all-in figure of <strong>$10,000–$15,000</strong> covering consult, imaging, surgery, three to four nights, rehabilitation and recheck. Our <a href="/guides/pet-insurance-for-dachshunds">pet insurance guide</a> works the math before you need it.'},

    {t:'h2',text:'What does conservative management actually involve?'},

    {t:'p',text:'Strict rest, and the word strict is doing real work. Published conservative protocols specify a <strong>minimum of four weeks</strong> of confinement, a space around three by four feet for a small dog, and three ten-minute leashed bathroom breaks a day — on a <strong>harness, never a collar</strong>. Not a room. Not the kitchen. Not supervised freedom. The dog feels better before the disc has healed, and that gap is where second episodes are made.'},

    {t:'ul',items:[
      'An anti-inflammatory: prednisone <em>or</em> an NSAID, <strong>never both together</strong>.',
      'Neuropathic pain control: gabapentin, tramadol or amantadine.',
      'A muscle relaxant: methocarbamol.',
      'Sedation where the dog will not settle: trazodone.'
    ]},

    {t:'callout',tone:'warn',title:'Check the gabapentin label for xylitol',text:'Some liquid gabapentin formulations are sweetened with xylitol, which causes hypoglycemia in dogs above 100 mg/kg and liver injury above 500 mg/kg. Of dogs showing signs of xylitol liver injury, 62.5% died or were euthanized. Ask the pharmacy for a xylitol-free formulation or capsules.'},

    {t:'h2',text:'What actually lowers the risk?'},

    {t:'p',text:'Less than the internet claims, and one thing more than most owners realize.'},

    {t:'ul',items:[
      '<strong>Neutering timing.</strong> Dorn & Seath (2018, 1,073 dachshunds, 274 cases) found females spayed under 12 months carried a relative risk of <strong>2.12</strong> (95% CI 1.44–3.11) and males neutered under 12 months <strong>1.5</strong> (1.05–2.15). Later neutering was not significantly different from intact. This is the strongest single lever an owner controls — see <a href="/guides/when-to-neuter-a-dachshund">when to neuter a dachshund</a>.',
      '<strong>Exercise.</strong> DachsLife 2015 found dogs getting under 30 minutes a day at higher risk, and dogs getting over an hour at lower risk. Association, not proof of causation.',
      '<strong>Not stairs.</strong> Stairs showed a protective trend that did not reach significance, and dogs <em>prevented</em> from using furniture had higher rates — see <a href="/guides/are-stairs-bad-for-dachshunds">are stairs bad for dachshunds</a>.',
      '<strong>Not body condition, on this evidence.</strong> DachsLife found no significant association between body condition score and disc disease. Keep him lean anyway: restricting calories 25% added about 1.8 years of median lifespan in Purina’s lifetime Labrador study. Just do not sell it to yourself as back insurance.',
      '<strong>Not the CDDY DNA test.</strong> 93% of dachshunds carry two copies. It does not discriminate between individuals.'
    ]},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual carries the same numbers plus the parts that need pages rather than paragraphs — a printed first-hour protocol, the full four-week crate-rest schedule week by week, the questions to ask a neurologist before you consent, and the return-to-activity ladder.'}
  ],
  facts:[
    ['Lifetime risk, miniature','24.4%','Bergknut 2012, Swedish insurance'],
    ['Lifetime risk, standard','13.0%','Bergknut 2012, Swedish insurance'],
    ['Lifetime risk, all breeds','3.5%','Bergknut 2012, Swedish insurance'],
    ['Share of all canine IVDD cases','45–70%','ACVS'],
    ['Typical age at presentation','3–6 years','ACVS'],
    ['Most affected disc space','T12–T13 (33% of cases)','Dachshund IVDD, UK']
  ],
  faq:[
    {q:'Is IVDD in dachshunds always genetic?',
     a:'The predisposition is. Brown et al. (PNAS, 2017) traced early disc calcification to an FGF4 retrogene that also produces the short legs. Disc degeneration starts around four months and about 90% of discs show change by one year. What varies between dogs is whether and when a degenerated disc fails.'},
    {q:'Can a dachshund recover from IVDD without surgery?',
     a:'Often, yes. Using the UK IVDD scheme’s grading scale, conservative recovery runs 70–100% at grade 1, 55–80% at grade 3 and 40–80% at grade 4. The ACVS puts medical management at 60–80% where deep pain is present. Below 10% where deep pain is absent, which is why that one finding drives the decision.'},
    {q:'How fast does a dachshund need to see a vet for back problems?',
     a:'Pain alone warrants an appointment the same day. Weakness, knuckling, dragging nails, inability to stand, or loss of bladder control warrants an emergency hospital tonight. Deep pain absent is the worst prognostic category, and outcomes in that category deteriorate with delay. An emergency exam averages $135.'},
    {q:'Do all dachshunds get back problems?',
     a:'No. Swedish insurance data puts lifetime risk at 24.4% for miniatures and 13.0% for standards. So roughly three in four miniatures and nearly nine in ten standards never have a disc episode. The risk is real and it is roughly 10–12 times other breeds, but it is not a certainty.'},
    {q:'Which dachshund variety has the lowest IVDD risk?',
     a:'In DachsLife 2015, standard wirehaired dachshunds showed the lowest point prevalence at 7.1% and standard smooths the highest at 24.4%. That is a British survey of 2,031 dogs analyzed by the Royal Veterinary College, and variety was not the only difference between those groups. Treat it as a signal, not a guarantee.'},
    {q:'What does IVDD surgery cost in the US?',
     a:'PetMD puts spinal surgery at $3,000–$8,000. One referral neurology practice publishes an all-in figure of $10,000–$15,000 covering consult, imaging, surgery, three to four nights of hospitalization, rehabilitation and recheck. MRI alone averages $2,285 nationally, with a range of $1,811–$4,140, and ER hospitalization runs $1,323 a day.'}
  ],
  related:['when-to-neuter-a-dachshund','are-stairs-bad-for-dachshunds','pet-insurance-for-dachshunds']
},

/* ═══════════════════ 2 · MYTH-BUSTER ═══════════════════ */
{
  slug:'are-stairs-bad-for-dachshunds',
  title:'Are Stairs Bad for Dachshunds?',
  h1:'Are stairs bad for dachshunds? What the evidence actually shows',
  metaTitle:'Are Stairs Bad for Dachshunds? What DachsLife 2015 Found',
  metaDescription:'The largest dachshund lifestyle survey found no evidence stairs raise IVDD risk — and dogs banned from furniture fared worse. Here is why, and what does help.',
  keyword:'are stairs bad for dachshunds',
  updated:'2026-09-12',
  answer:'Probably not. DachsLife 2015, a survey of 2,031 dachshund owners analyzed by the Royal Veterinary College, found stairs showed a protective trend that did not reach statistical significance. Dogs prevented from using furniture had higher rates of disc disease, not lower. Exercise mattered more: under 30 minutes a day raised risk, over an hour lowered it.',
  toc:[
    'Are stairs bad for dachshunds?',
    'What did DachsLife 2015 actually measure?',
    'Why did dogs banned from furniture have more back trouble?',
    'Is a ramp a waste of money, then?',
    'What does the evidence actually support?',
    'What would change this answer?'
  ],
  blocks:[

    {t:'h2',text:'Are stairs bad for dachshunds?'},

    {t:'p',text:'There is no evidence that they are. The largest study to look at this question is <strong>DachsLife 2015</strong>, a survey of 2,031 dachshund owners analyzed by the Royal Veterinary College. It tested a list of everyday lifestyle factors against whether the dog had intervertebral disc disease. Stairs came out with a <em>protective</em> trend that did not reach statistical significance.'},

    {t:'p',text:'Read that carefully, because the careful reading is the whole point. A non-significant trend is not proof that stairs help. It is an absence of evidence that they hurt. Those are different sentences, and anyone who tells you DachsLife proved stairs are good for dachshunds is overreading it in the opposite direction from the blogs.'},

    {t:'stat',figure:'2,031',label:'dachshund owners surveyed in DachsLife 2015',source:'DachsLife 2015, Royal Veterinary College analysis'},

    {t:'h2',text:'What did DachsLife 2015 actually measure?'},

    {t:'p',text:'It asked owners about their dog’s daily life and compared the answers against disc disease. Four findings are worth carrying, and three of them contradict advice you have already been given.'},

    {t:'table',
      head:['What owners are usually told','What DachsLife 2015 found','What that means for you'],
      rows:[
        ['Never let him do stairs','Protective trend, not statistically significant','No evidence stairs raise risk. Gate them for a puppy learning coordination, not as disease prevention.'],
        ['Keep him off the furniture','Dogs <em>prevented</em> from using furniture had <strong>higher</strong> IVDD rates','Almost certainly not because banning sofas causes disc disease. See below.'],
        ['Short, gentle walks only','Under 30 min/day associated with <strong>higher</strong> risk; over 1 h/day with <strong>lower</strong> risk','Under-exercising a healthy dachshund looks worse than exercising one.'],
        ['Keep him thin to protect his back','<strong>No significant association</strong> with body condition score','Keep him lean for lifespan and joints. Do not sell it to yourself as back insurance.']
      ],
      caption:'DachsLife 2015. These are associations in a cross-sectional survey, not proof of cause.'},

    {t:'callout',tone:'evidence',title:'Association is not causation, and this survey cannot tell you which',text:'DachsLife photographed households at a single moment. It recorded what owners were doing and whether the dog had disc disease. It could not see which came first. Every finding above should be read as "these things travel together", not "this one produced that one".'},

    {t:'h2',text:'Why did dogs banned from furniture have more back trouble?'},

    {t:'p',text:'The likeliest explanation is that the arrow points the other way. Owners ban the sofa <em>after</em> something happens — a yelp on landing, a bad week, a diagnosis, a neurologist’s discharge sheet. A survey taken afterwards finds furniture-banned dogs and disc disease in the same households and cannot distinguish the ban that followed the disease from a ban that preceded it. This is reverse causation, and it is the single most common way a lifestyle survey misleads people.'},

    {t:'p',text:'A second explanation sits alongside it. Households that restrict a dog from furniture may restrict him elsewhere too — shorter walks, less off-leash movement, more carrying. Given that the same survey found under-exercised dogs at higher risk, some of the furniture signal may simply be the exercise signal wearing a different hat.'},

    {t:'p',text:'What the finding does <em>not</em> support is the cheerful conclusion that sofas are good for spines. Nobody has shown that. The defensible reading is narrower and more useful: <strong>there is no evidence that banning furniture protects a dachshund’s back, and the households that do it are not the households with healthier backs.</strong>'},

    {t:'h2',text:'Is a ramp a waste of money, then?'},

    {t:'p',text:'No, and here is the distinction the survey does not draw. DachsLife asked whether the dog was <em>allowed</em> on furniture. It did not measure how he got up and down. A dog who launches himself off a 20-inch sofa onto a hardwood floor forty times a week is doing something different from a dog who walks down a ramp, and no published dachshund dataset separates those two dogs.'},

    {t:'p',text:'So the case for a ramp is not epidemiological. It is this:'},

    {t:'ul',items:[
      'It costs less than one emergency exam, which averages <strong>$135</strong> in the US.',
      'It removes a repeated impact that no study has cleared, in a breed whose discs are calcifying from four months of age.',
      'If your dog ever has an episode, you will need one immediately — and a dog who already knows how to use it will use it. Teaching a ramp to a painful, confined dog is a bad week to pick.',
      'It costs him nothing. There is no downside column.'
    ]},

    {t:'p',text:'The places a ramp earns its keep are the ones with the biggest drop and the hardest landing: the bed, the car tailgate, and any sofa over a bare floor. Teach it while he is well, in a week of short sessions with food on the ramp, so that the skill is already there on the day it stops being optional.'},

    {t:'p',text:'Buy the ramp. Just buy it for the right reason, and do not believe it has bought you a percentage.'},

    {t:'h2',text:'What does the evidence actually support?'},

    {t:'p',text:'Three things, in descending order of how much they are supported.'},

    {t:'ol',items:[
      '<strong>Neutering timing.</strong> Dorn & Seath (2018), studying 1,073 dachshunds with 274 disc cases, found a relative risk of <strong>2.12</strong> (95% CI 1.44–3.11) for females spayed under 12 months and <strong>1.5</strong> (1.05–2.15) for males neutered under 12 months. Later neutering was not significantly different from intact. This is the strongest single lever you control, and it is decided in the first year. See <a href="/guides/when-to-neuter-a-dachshund">when to neuter a dachshund</a>.',
      '<strong>Daily exercise above an hour.</strong> Associated with lower risk in DachsLife 2015. Association only — but the direction is the opposite of what most new owners are told.',
      '<strong>Speed of response.</strong> Nothing in the literature changes an outcome as sharply as getting a weak dog to a neurologist quickly. The ACVS puts recovery at about 90% with surgery where deep pain is present, and under 10% with medical management where it is absent.'
    ]},

    {t:'p',text:'Notice what is not on that list: stairs, sofas, jumping bans and body condition. Three of the four things owners worry about most have no supporting evidence behind them, and the one thing with the strongest evidence is a conversation with a veterinarian about a surgery date.'},

    {t:'h2',text:'What would change this answer?'},

    {t:'p',text:'A prospective study — one that recorded stair use in healthy dachshunds and then followed them for years — would settle it. None exists. Nor is there any US dataset at all: every dachshund IVDD figure in circulation is British, Swedish or Danish. Until that changes, the honest position is that stairs are unproven in both directions, and the evidence such as it is points away from the panic rather than toward it.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual takes the same evidence and turns it into a house layout — where gates actually earn their place, how to teach a ramp in a week, and the return-to-stairs ladder for a dog coming out of crate rest.'}
  ],
  facts:[
    ['Owners surveyed','2,031','DachsLife 2015, RVC analysis'],
    ['Stairs','Protective trend, not significant','DachsLife 2015'],
    ['Furniture prevented','Higher IVDD rate','DachsLife 2015'],
    ['Exercise under 30 min/day','Higher risk','DachsLife 2015'],
    ['Exercise over 1 hour/day','Lower risk','DachsLife 2015'],
    ['Body condition score','No significant association','DachsLife 2015']
  ],
  faq:[
    {q:'Should I stop my dachshund using stairs?',
     a:'There is no evidence that stairs raise IVDD risk. DachsLife 2015 found a protective trend that was not statistically significant. Gate stairs for a young puppy still learning coordination, or for a dog recovering from an episode under veterinary instruction. Gating them for life as disease prevention is not supported by any published dachshund data.'},
    {q:'Can dachshunds jump on and off the couch?',
     a:'No study has measured jump height against disc disease in dachshunds. DachsLife 2015 measured only whether furniture was allowed, and dogs banned from it had higher rates — most likely because the ban followed the diagnosis. A ramp removes a repeated impact at low cost, which is a sensible precaution rather than a proven one.'},
    {q:'Does carrying my dachshund up stairs protect his back?',
     a:'Nothing published supports it. The same survey found under-exercised dachshunds at higher risk, so a routine built on carrying rather than walking may trade an unproven benefit for a measured one. Carry a dog who is painful, weak or under crate rest. Let a healthy dog walk.'},
    {q:'Is a dog ramp worth it for a dachshund?',
     a:'Yes, on cost-benefit rather than on evidence. A ramp costs less than a single emergency exam, which averages $135 in the US. It removes an impact no study has cleared, and a dog who already knows how to use one will keep using it during recovery, when you will need it most.'},
    {q:'What actually causes IVDD in dachshunds?',
     a:'An FGF4 retrogene, identified by Brown et al. in PNAS in 2017, causes both the short legs and early disc calcification. Degeneration begins around four months and about 90% of discs show change by one year. Lifestyle modifies when a degenerated disc fails, not whether the degeneration happens.'},
    {q:'Is DachsLife a US study?',
     a:'No. DachsLife 2015 is British, run with UK dachshund owners and analyzed by the Royal Veterinary College. There is no US epidemiological dataset on dachshund IVDD at all. Every prevalence and lifestyle figure you will read on American sites is imported from British, Swedish or Danish research.'}
  ],
  related:['dachshund-back-problems-ivdd','when-to-neuter-a-dachshund','how-much-to-feed-a-dachshund']
},

/* ═══════════════════ 3 · THE GAP ═══════════════════ */
{
  slug:'when-to-neuter-a-dachshund',
  title:'When to Neuter a Dachshund',
  h1:'When should you neuter a dachshund? The evidence conflicts, and here is how',
  metaTitle:'When to Neuter a Dachshund: AAHA vs the IVDD Data',
  metaDescription:'AAHA says 5–6 months for small dogs. Dorn & Seath found dachshunds spayed under 12 months had 2.12× the disc disease risk. Both figures, and how to raise it.',
  keyword:'when should I neuter my dachshund',
  updated:'2026-09-12',
  answer:'There is no consensus. AAHA’s 2019 life stage guidelines recommend castration at 6 months and spaying at 5–6 months for dogs under 45 pounds. Dorn & Seath (2018), studying 1,073 dachshunds, found females spayed before 12 months carried 2.12 times the disc disease risk. Both cannot be optimal for the same dog.',
  toc:[
    'When should you neuter a dachshund?',
    'What does AAHA recommend, and why?',
    'What did Dorn & Seath find?',
    'Why do the two conflict?',
    'Does the study prove that waiting is safer?',
    'What are you trading if you wait?',
    'How do you raise this with your vet without picking a fight?'
  ],
  blocks:[

    {t:'h2',text:'When should you neuter a dachshund?'},

    {t:'p',text:'This is the one question in dachshund ownership where the general small-dog guidance and the breed-specific evidence point in opposite directions, and almost nobody says so out loud. We are going to put both numbers on the table, explain what each one is worth, and then hand you the conversation to have with your own veterinarian. What we are not going to do is pretend there is a consensus, because there is not one.'},

    {t:'h2',text:'What does AAHA recommend, and why?'},

    {t:'p',text:'The <strong>American Animal Hospital Association</strong>, in its 2019 Canine Life Stage Guidelines, recommends that dogs <strong>under 45 pounds</strong> be castrated at <strong>6 months</strong> and that females undergo ovariohysterectomy <strong>before the first heat, at 5 to 6 months</strong>. Every dachshund in America is under 45 pounds, so on paper this is the answer.'},

    {t:'p',text:'The reasoning behind early small-dog neutering is not arbitrary. Small breeds finish growing early, so the orthopedic arguments for delay in large breeds carry less weight. Spaying before the first heat eliminates the heat itself, unplanned litters, and pyometra. And a clinic that sets one policy for every small dog sets a policy that is easy to follow and hard to forget. The guideline is written for small dogs as a class. It is not written for this breed.'},

    {t:'h2',text:'What did Dorn & Seath find?'},

    {t:'p',text:'In 2018, Dorn and Seath published a study of <strong>1,073 dachshunds containing 274 cases</strong> of intervertebral disc disease, and looked at neutering status and timing.'},

    {t:'table',
      head:['Group','Relative risk of IVDD','95% confidence interval'],
      rows:[
        ['Spayed females (any age)','1.81','1.28–2.54'],
        ['Females spayed under 12 months','2.12','1.44–3.11'],
        ['Males neutered under 12 months','1.5','1.05–2.15'],
        ['Neutered at 12 months or later','Not significantly different from intact','—']
      ],
      caption:'Dorn & Seath 2018, 1,073 dachshunds, 274 IVDD cases. A relative risk of 2.12 means roughly twice the rate, not a 212% chance.'},

    {t:'p',text:'The last row is the one that changes the practical question. The signal is not in <em>whether</em> the dog is neutered. It is in <em>when</em>. Dogs neutered at or after 12 months did not differ significantly from intact dogs. So this is not an argument for leaving a dachshund entire for life. It is an argument about a date.'},

    {t:'h2',text:'Why do the two conflict?'},

    {t:'p',text:'Because they are answering different questions with different evidence. AAHA is optimizing across all small dogs for a basket of outcomes — reproductive disease, population control, surgical simplicity, compliance. Dorn and Seath are optimizing one outcome, in one breed, against the condition that defines it. A dachshund is a small dog with a 24.4% lifetime risk of disc disease in the miniature (Bergknut’s Swedish insurance data), against 3.5% across all breeds. That single fact is what makes the general guidance a poor fit.'},

    {t:'callout',tone:'evidence',title:'Neither body has changed its position',text:'AAHA has not revised its under-45-pound guidance in light of the dachshund data, and the dachshund data has not been replicated in the US. Anyone telling you this is settled — in either direction — is telling you something the literature does not say.'},

    {t:'h2',text:'Does the study prove that waiting is safer?'},

    {t:'p',text:'No, and the reasons matter if you are going to discuss it with a professional.'},

    {t:'ul',items:[
      '<strong>It is observational.</strong> Owners chose when to neuter. The study did not assign it.',
      '<strong>Confounding is plausible.</strong> Households that neuter early may differ in other ways — exercise, activity, how quickly a back problem gets reported.',
      '<strong>It is one study, in one country.</strong> 1,073 dogs is a respectable sample, not a definitive one, and it is British. No American replication exists.',
      '<strong>Relative risk is not absolute risk.</strong> 2.12 times a 24.4% baseline is a large shift. 2.12 times a small baseline would not be. The study reports the ratio.'
    ]},

    {t:'p',text:'What the study is, is the best breed-specific evidence anyone has on a decision every dachshund owner makes in the first year. That is a genuinely different thing from proof, and it is also considerably more than nothing.'},

    {t:'h2',text:'What are you trading if you wait?'},

    {t:'p',text:'Real things, and a page that skipped them would be selling you a position rather than informing you.'},

    {t:'p',text:'An intact female will come into heat, roughly twice a year, with the containment and the mess that involves. She remains at risk of pyometra and of an unplanned litter, and a dachshund pregnancy is not a trivial event. The size of the mammary-tumor effect of early spaying is genuinely contested in the veterinary literature, and we are not going to put a number on it here, because we do not have one we can stand behind. An intact male may roam, mark, and be harder to manage around intact females. None of that is nothing.'},

    {t:'p',text:'But notice what the trade actually is. On Dorn and Seath’s numbers, the question is not intact versus neutered. It is <strong>six months versus twelve to eighteen</strong>. You are managing one heat cycle, or a few months of adolescent male behavior, against the strongest breed-specific risk signal in the literature.'},

    {t:'h2',text:'How do you raise this with your vet without picking a fight?'},

    {t:'p',text:'Most veterinarians have not read a dachshund-specific IVDD paper, and there is no reason they should have — they see forty breeds a week. Walking in with a printout and a position is the fastest way to get a defensive answer. Walk in with a question instead.'},

    {t:'ol',items:[
      '<strong>Email ahead.</strong> Send the citation — Dorn & Seath 2018, <em>Canine Genetics and Epidemiology</em> — a few days before the appointment, with one line: "I would like to talk about spay timing at our next visit."',
      '<strong>Open with their experience, not the paper.</strong> "How do you usually think about timing for the small chondrodystrophic breeds?"',
      '<strong>Name the tension without assigning blame.</strong> "The AAHA small-dog guidance says five to six months. There is a dachshund study that found higher disc disease risk under twelve months. I am trying to work out how to weigh those."',
      '<strong>Ask what changes if you wait.</strong> "If we went to twelve or fifteen months instead, what would you want to monitor, and what would worry you?"',
      '<strong>Agree a date and a review point,</strong> rather than leaving it open. An undecided decision drifts into a decision made by default.',
      '<strong>Accept a clear no.</strong> If your veterinarian has a reason specific to your dog, that reason beats a British cohort study every time. They can examine her. The paper cannot.'
    ]},

    {t:'callout',tone:'note',title:'Ask what the practice policy actually is',text:'Some clinics book spays by age as a matter of scheduling rather than clinical judgment. It is worth finding out which one you are getting. "Is six months a recommendation for her specifically, or the practice default?" is a fair and unaggressive question.'},

    {t:'p',text:'One more thing worth knowing before the conversation: this decision interacts with <a href="/guides/pet-insurance-for-dachshunds">insurance timing</a>. If a policy is going in, it wants to be in place and past its waiting periods long before any back sign appears — and long before a neutering decision becomes urgent.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual gives the full decision table by sex and by household, the printable one-page summary to hand across the consulting room desk, and what to do when your veterinarian and your breeder tell you different things.'}
  ],
  facts:[
    ['AAHA guidance, dogs under 45 lb','Castration 6 months; spay 5–6 months','AAHA 2019 Canine Life Stage Guidelines'],
    ['Spayed females, any age','RR 1.81 (1.28–2.54)','Dorn & Seath 2018'],
    ['Females spayed under 12 months','RR 2.12 (1.44–3.11)','Dorn & Seath 2018'],
    ['Males neutered under 12 months','RR 1.5 (1.05–2.15)','Dorn & Seath 2018'],
    ['Neutered at 12 months or later','No significant difference from intact','Dorn & Seath 2018'],
    ['Study size','1,073 dachshunds, 274 IVDD cases','Dorn & Seath 2018']
  ],
  faq:[
    {q:'What age should a dachshund be neutered?',
     a:'It depends which evidence you weight. AAHA’s 2019 guidelines say 6 months for castration and 5–6 months for spaying in dogs under 45 pounds. Dorn & Seath’s 2018 dachshund study found under-12-month neutering associated with higher disc disease risk, and no significant difference for dogs done at 12 months or later.'},
    {q:'Does neutering cause IVDD in dachshunds?',
     a:'No study shows causation. Dorn & Seath found an association between early neutering and disc disease: relative risk 2.12 for females spayed under 12 months, 1.5 for males under 12 months. It is observational, British, and unreplicated in the US. It is also the best breed-specific evidence available.'},
    {q:'Should I let my dachshund have a first heat before spaying?',
     a:'That is one practical way to land past 12 months, and it is worth discussing with your veterinarian rather than deciding alone. Dorn & Seath found no significant difference between dogs neutered at 12 months or later and intact dogs. Against that, you are managing a heat cycle and continued pyometra risk.'},
    {q:'Is early neutering worse for male dachshunds too?',
     a:'The signal is smaller. Dorn & Seath reported a relative risk of 1.5 (95% CI 1.05–2.15) for males neutered under 12 months, against 2.12 for females spayed under 12 months. The confidence interval for males only just clears 1.0, so the male finding is weaker evidence than the female one.'},
    {q:'Why does my vet recommend 6 months?',
     a:'Because AAHA’s 2019 Canine Life Stage Guidelines set that for dogs under 45 pounds, and most practices follow them as policy. The guidance is written for small dogs as a class, not for a breed carrying a 24.4% lifetime disc disease risk in the miniature. Raise the breed-specific data as a question, not a challenge.'},
    {q:'Does waiting to neuter affect pet insurance?',
     a:'Not directly, but timing matters for a different reason. Under the NAIC Pet Insurance Model Act, anything showing signs before the effective date or during a waiting period is preexisting. Get the policy in force and past its waiting periods early, independent of whatever you decide about surgery dates.'}
  ],
  related:['dachshund-back-problems-ivdd','are-stairs-bad-for-dachshunds','questions-to-ask-a-dachshund-breeder']
},

/* ═══════════════════ 4 · INSURANCE ═══════════════════ */
{
  slug:'pet-insurance-for-dachshunds',
  title:'Pet Insurance for Dachshunds',
  h1:'Pet insurance for dachshunds: does it cover IVDD, and what to ask before you buy',
  metaTitle:'Pet Insurance for Dachshunds: Does It Cover IVDD?',
  metaDescription:'What a preexisting condition legally means, the 180-day orthopedic waiting period that catches IVDD, how to collapse it in 14 days, and the cost of an episode.',
  keyword:'does pet insurance cover IVDD',
  updated:'2026-09-12',
  answer:'Pet insurance generally covers IVDD, but only if nothing about the dog’s back predates the policy. The average US dog accident-and-illness premium was $749.29 a year, or $62.44 a month, in data year 2024 (NAPHIA). At least one major insurer applies a 180-day orthopedic waiting period and classifies IVDD as orthopedic.',
  toc:[
    'Does pet insurance cover IVDD?',
    'What does insuring a dachshund cost?',
    'What legally counts as a preexisting condition?',
    'What is the 180-day orthopedic waiting period?',
    'How do you collapse the orthopedic wait?',
    'What does an IVDD episode actually cost?',
    'Will they pay the bill, or a schedule?',
    'What to ask before you buy'
  ],
  blocks:[

    {t:'h2',text:'Does pet insurance cover IVDD?'},

    {t:'p',text:'Yes, usually — with one condition that decides everything. Modern accident-and-illness policies generally do cover hereditary and breed-associated conditions, intervertebral disc disease included, <strong>provided no sign or diagnosis predates the coverage</strong>. That single qualifier is where dachshund owners get caught, because the breed’s defining condition is precisely the kind of thing that produces a vague note in a file long before it produces a diagnosis.'},

    {t:'p',text:'This page names no insurer as a recommendation. It describes the practices that exist in the US market, quotes the model law that governs the definitions, and gives you the questions to ask. Which company you choose matters less than whether you understood the timing.'},

    {t:'h2',text:'What does insuring a dachshund cost?'},

    {t:'stat',figure:'$749.29',label:'average US dog accident-and-illness premium per year, data year 2024',source:'NAPHIA State of the Industry 2025'},

    {t:'p',text:'That is <strong>$62.44 a month</strong>, and it is the all-breed average, not a dachshund quote. NAPHIA’s figure is for data year 2024 and should not be read as a 2026 price. By the end of 2025, 7.6 million pets were insured across North America.'},

    {t:'p',text:'You will also see a lower number. Synchrony’s 2025 Pet Lifetime of Care Study puts insurance at <strong>$198–$313 a year</strong> and wellness plans at $422–$701. That is not a contradiction so much as a different measurement: Synchrony models what owners report spending across a lifetime, NAPHIA reports the average premium actually written for accident-and-illness cover. Expect a dachshund quote to sit above an all-breed average rather than below it, and get real quotes rather than trusting either figure as your budget.'},

    {t:'h2',text:'What legally counts as a preexisting condition?'},

    {t:'p',text:'The <strong>NAIC Pet Insurance Model Act (#633)</strong> defines it, and the definition is broader than most owners assume. A preexisting condition is any condition for which a veterinarian gave advice, the pet received treatment, or the pet showed signs — <em>"prior to the effective date or during any waiting period."</em>'},

    {t:'callout',tone:'warn',title:'Read the last seven words again',text:'"Or during any waiting period." A back problem that appears on day 40 of a 180-day orthopedic wait is not a covered claim that arrived early. It is a preexisting condition, permanently excluded, on a policy you have been paying for.'},

    {t:'p',text:'Three consequences follow. <strong>Advice counts</strong> — a veterinarian saying "watch that back" in a routine exam can create the record. <strong>Signs count</strong>, diagnosed or not. And the record that matters is the clinical file, which the insurer will request and read. The Model Act also requires insurers to disclose preexisting, hereditary, congenital and chronic exclusions and every waiting period <em>before</em> purchase, and to provide a <strong>15-day free look</strong> period.'},

    {t:'h2',text:'What is the 180-day orthopedic waiting period?'},

    {t:'p',text:'Most policies carry a short accident wait, measured in days, and an illness wait, typically a couple of weeks. Orthopedic conditions can carry a much longer one. At least one major US insurer applies a <strong>180-day orthopedic waiting period</strong> — and classifies <strong>IVDD as orthopedic</strong>.'},

    {t:'p',text:'For a dachshund, that is not a footnote. It is six months during which the one condition you bought the policy for is not covered, and during which any sign of it becomes permanently preexisting under the NAIC definition. Terms vary by state, and not every insurer does this. You have to ask.'},

    {t:'h2',text:'How do you collapse the orthopedic wait?'},

    {t:'p',text:'With an exam, and with speed. Where the 180-day orthopedic wait applies, it can be <strong>waived by an orthopedic exam performed within the first 14 days</strong> of the policy — an "Orthopedic Report Card" in the insurer’s language. Done inside that window and clean, the wait collapses to zero. Done later and clean, it collapses only to the date of the exam, and everything before that date stays excluded.'},

    {t:'ol',items:[
      'Buy the policy <strong>before</strong> anything is wrong. This is the whole game.',
      'On the day it is issued, ask the insurer in writing whether an orthopedic waiver exam applies, what form they require, and what the deadline date is.',
      'Book the exam inside the first 14 days. Not the third week.',
      'Have the veterinarian complete the insurer’s own form, not a generic health certificate.',
      'Submit it and <strong>get written confirmation that the waiver is applied.</strong> Keep it.'
    ]},

    {t:'callout',tone:'note',title:'Do this with a puppy, not with a five-year-old',text:'The ACVS puts typical IVDD presentation at three to six years. A policy taken out at eight weeks, with the orthopedic waiver done in the first fortnight, sits in force for years before the risk window opens. A policy taken out at four, after the first yelp, is a different and much worse product.'},

    {t:'h2',text:'What does an IVDD episode actually cost?'},

    {t:'p',text:'This is the number that makes the premium a math problem instead of a feeling.'},

    {t:'table',
      head:['Item','US cost','Source'],
      rows:[
        ['Emergency exam','$135 (range $107–$246)','2025 Synchrony Average Procedural Cost Study'],
        ['Neurologic exam','$195','University of Missouri Veterinary Health Center'],
        ['X-rays, 2–3 views','$334','2025 Synchrony Average Procedural Cost Study'],
        ['CT','$1,615','2025 Synchrony Average Procedural Cost Study'],
        ['MRI','$2,285 average (range $1,811–$4,140)','2025 Synchrony Average Procedural Cost Study'],
        ['MRI or CT with anesthesia, bloodwork, radiographs, CSF tap','$3,000–$4,000','University of Missouri VHC'],
        ['Spinal surgery','$3,000–$8,000','PetMD, vet-reviewed'],
        ['ER hospitalization','$1,323 per day','2025 Synchrony Average Procedural Cost Study'],
        ['All-in surgical episode','$10,000–$15,000','Southeast Veterinary Neurology']
      ],
      caption:'The all-in figure covers consult, imaging, surgery, three to four nights, rehabilitation and recheck.'},

    {t:'p',text:'Set that against $749.29 a year. An owner who insures a dachshund from eight weeks and never claims has spent a few thousand dollars over a decade. An owner who does not insure and meets the all-in figure once has spent more than that in a weekend. Neither outcome is guaranteed, which is the definition of insurance; the point is that the downside here is unusually large relative to the premium, and unusually likely relative to other breeds.'},

    {t:'p',text:'We do not publish a total for conservative management, because no sourced US range exists. Build your own from the components above — exam, imaging, four weeks of medication, rechecks — and treat it as an estimate rather than a quote.'},

    {t:'h2',text:'Will they pay the bill, or a schedule?'},

    {t:'p',text:'Ask this before you buy, because the two models produce very different checks. Reimbursement may be calculated on <strong>the actual bill</strong>, or on a <strong>benefit schedule</strong> or "usual and customary" charges — in which case the insurer pays its own stated figure for the procedure and you pay the gap. In a market where MRI ranges from $1,811 to $4,140 depending on where you live, that gap can be substantial. The California Department of Insurance guide to pet insurance sets this out plainly, and it applies wherever you are.'},

    {t:'p',text:'A published example of how the arithmetic actually lands: a <strong>$8,500 claim reimbursed at $6,550</strong>, on 80% reimbursement with a $250 deductible. Note that the owner still wrote a check for nearly two thousand dollars on a fully covered claim. Insurance is a damper, not a shield.'},

    {t:'h2',text:'What to ask before you buy'},

    {t:'p',text:'Ask these in writing, and keep the answers with the policy documents.'},

    {t:'ul',items:[
      'Is IVDD classified as orthopedic under this policy, and what is the orthopedic waiting period in <strong>my state</strong>?',
      'Is there an exam that waives it, what is the deadline, and what form do you need?',
      'Are hereditary and congenital conditions covered as standard, or is that a rider?',
      'Is reimbursement on the actual invoice, or on a benefit schedule or usual-and-customary basis?',
      'What is the annual limit, per-condition limit, and is IVDD treated as one condition for life?',
      'Does the deductible reset annually or run per condition?',
      'Are rehabilitation, hydrotherapy and prescription medication covered?',
      'Does the premium rise with age, with claims, or both?',
      'Which of my dog’s existing file notes would you treat as preexisting today?'
    ]},

    {t:'p',text:'That last question is the one that separates a brochure from a policy. Ask it before the free-look period expires, not after the first claim.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual includes the printable pre-purchase questionnaire, a worked ten-year cost comparison of insuring versus self-funding a dachshund, and what to do when a claim is denied as preexisting on the strength of a single line in a file.'}
  ],
  facts:[
    ['Average US dog A&I premium','$749.29/yr ($62.44/mo), data year 2024','NAPHIA State of the Industry 2025'],
    ['Pets insured in North America','7.6 million at end of 2025','NAPHIA'],
    ['Preexisting definition window','Before effective date or during any waiting period','NAIC Model Act #633'],
    ['Free look period','15 days','NAIC Model Act #633'],
    ['Orthopedic waiting period','180 days, IVDD classified as orthopedic','At least one major US insurer'],
    ['All-in IVDD surgical episode','$10,000–$15,000','Southeast Veterinary Neurology']
  ],
  faq:[
    {q:'Does pet insurance cover IVDD in dachshunds?',
     a:'Generally yes, on modern accident-and-illness policies, provided no sign or diagnosis of a back problem predates the coverage. The obstacle is timing rather than breed exclusion. Watch for an orthopedic waiting period, which at least one major insurer sets at 180 days with IVDD classified as an orthopedic condition.'},
    {q:'What counts as a preexisting condition for a dachshund?',
     a:'Under the NAIC Pet Insurance Model Act #633, any condition for which a veterinarian gave advice, the pet received treatment, or the pet showed signs prior to the effective date or during any waiting period. Advice alone counts. A note reading "mild back pain, resolved" can be enough to exclude IVDD permanently.'},
    {q:'Can you insure a dachshund that already has IVDD?',
     a:'You can buy a policy, but the disc disease itself will be excluded as preexisting, and so will anything the insurer links to it. Cover for unrelated illness and accidents still has value. If the diagnosis has not happened yet and you are wondering whether to wait, do not wait.'},
    {q:'When should I insure a dachshund puppy?',
     a:'Before anything is wrong, ideally at eight weeks. The ACVS puts typical IVDD presentation at three to six years, so a policy bought in puppyhood clears every waiting period years before the risk window opens. If an orthopedic waiver exam is available, book it inside the first 14 days.'},
    {q:'How much does dachshund pet insurance cost per month?',
     a:'NAPHIA puts the average US dog accident-and-illness premium at $62.44 a month for data year 2024, across all breeds. A dachshund quote will typically sit above an all-breed average. Synchrony’s lifetime study reports lower annual insurance spend, $198–$313, because it measures something different.'},
    {q:'Is pet insurance worth it for a dachshund?',
     a:'The math is more favorable here than for most breeds. Lifetime IVDD risk is 24.4% in miniatures on Swedish insurance data, and one referral practice puts an all-in surgical episode at $10,000–$15,000. Against an average premium of $749.29 a year, the downside is large relative to the cost of covering it.'}
  ],
  related:['dachshund-back-problems-ivdd','how-much-does-a-dachshund-cost','questions-to-ask-a-dachshund-breeder']
},

/* ═══════════════════ 5 · FEEDING ═══════════════════ */
{
  slug:'how-much-to-feed-a-dachshund',
  title:'How Much to Feed a Dachshund',
  h1:'How much should you feed a dachshund? Work it out in calories, not cups',
  metaTitle:'How Much to Feed a Dachshund: Calories by Weight',
  metaDescription:'The RER and MER formula worked for 11, 16 and 25 lb dachshunds, how to convert calories to cups, the 10% treat rule, and why the bag chart overfeeds.',
  keyword:'how much should I feed my dachshund',
  updated:'2026-09-12',
  answer:'Start from calories, not cups. Resting energy requirement is 70 × (body weight in kg)^0.75, and a neutered adult multiplies that by 1.6. An 11-pound dachshund lands near 375 kcal a day, a 16-pound dog near 482, and a 25-pound dog near 678. Individual needs vary by up to 50%, so adjust to body condition.',
  toc:[
    'How much should you feed a dachshund?',
    'How do you work out the number yourself?',
    'How do you turn calories into cups?',
    'Why does the chart on the bag overfeed?',
    'How many treats can a dachshund have?',
    'How do you know the number is right?',
    'Does keeping him lean protect his back?',
    'What about puppies and weight loss?'
  ],
  blocks:[

    {t:'h2',text:'How much should you feed a dachshund?'},

    {t:'p',text:'Every honest answer starts with a calorie figure and ends with your hands on the dog. The formula gives you a starting point. The dog tells you whether the starting point was right. Anyone who gives you a cup number without asking his weight, his neuter status and the calorie density of your food is guessing.'},

    {t:'h2',text:'How do you work out the number yourself?'},

    {t:'p',text:'Two steps, and the arithmetic is the same one your veterinarian uses. <strong>Resting energy requirement</strong> is 70 × (body weight in kg)<sup>0.75</sup>. Then multiply by a <strong>maintenance factor</strong> for the dog in front of you. Both come from the Pet Nutrition Alliance.'},

    {t:'table',
      head:['Dog','RER','Neutered adult (×1.6)','Intact adult (×1.8)','Weight loss (×1.0)','Prone to obesity (×1.2–1.4)'],
      rows:[
        ['11 lb (5 kg) miniature','234 kcal','375 kcal','421 kcal','234 kcal','281–328 kcal'],
        ['16 lb (7.3 kg) small standard','301 kcal','482 kcal','542 kcal','301 kcal','361–421 kcal'],
        ['25 lb (11.3 kg) standard','424 kcal','678 kcal','763 kcal','424 kcal','509–594 kcal']
      ],
      caption:'RER and the neutered-adult column are from the Pet Nutrition Alliance. The other columns apply its published factors to the same RER.'},

    {t:'callout',tone:'evidence',title:'The table is a starting point, and the variation is enormous',text:'The Pet Nutrition Alliance states that individual variation runs up to ±50%. Two neutered 16-pound dachshunds in the same house can genuinely need 240 and 720 calories. Adjust to body condition, not to the table.'},

    {t:'h2',text:'How do you turn calories into cups?'},

    {t:'p',text:'Find the <strong>kcal per cup</strong> on your bag — it is on the label, usually near the feeding chart, sometimes stated per kilogram as well. Divide the daily calorie figure by it. Then split the result across the day’s meals.'},

    {t:'p',text:'The arithmetic for a 16-pound neutered adult at 482 kcal: a food listing 400 kcal per cup gives about 1.2 cups a day; a food listing 300 kcal per cup gives about 1.6. Those two numbers are arithmetic, not a claim about any particular product — calorie density varies widely between foods, and it is the reason a cup measurement transferred from one bag to another can quietly overfeed a dog by a third.'},

    {t:'ul',items:[
      'Measure with a <strong>kitchen scale in grams</strong> if you can. A "cup" scooped from a bag varies by how you scoop it.',
      'Re-do the arithmetic every time you change food. Every time.',
      'Subtract treats from the total <em>before</em> you portion the meals, not after.'
    ]},

    {t:'h2',text:'Why does the chart on the bag overfeed?'},

    {t:'p',text:'It is not a conspiracy, it is a category error. The bag’s chart is a broad population range printed for every dog of a given weight — intact and neutered, working and sedentary, adolescent and elderly. It cannot know that your dog is a neutered five-year-old who walks forty minutes a day. Given a range and no other information, most owners read the top of it, and the difference between the top and the bottom of a population range in a breed with a 24.4% lifetime disc disease risk is not a rounding error.'},

    {t:'h2',text:'How many treats can a dachshund have?'},

    {t:'stat',figure:'48 kcal',label:'daily treat allowance for a 16 lb dachshund',source:'Tufts Petfoodology, 10% rule'},

    {t:'p',text:'Treats should account for <strong>no more than 10% of daily calories</strong>. For that 16-pound dog on 482 kcal, the allowance is roughly <strong>48 calories a day</strong> — which is less than most owners picture. A dachshund being trained through a session can burn through it in ten minutes, which is an argument for training with part of his measured dinner rather than with anything extra.'},

    {t:'p',text:'The other 90% has to be complete and balanced, which under FDA labeling rules means the food meets an AAFCO nutrient profile or has passed an AAFCO feeding trial. Note that there is no such thing as "AAFCO approved" — AAFCO has no regulatory authority, and state feed control officials do the enforcing.'},

    {t:'h2',text:'How do you know the number is right?'},

    {t:'p',text:'You score his body condition, weekly, with your hands. The <strong>1-to-9 scale</strong> is the standard, and the target is <strong>4 to 5</strong>. A dog at 7 out of 9 is carrying roughly 30% body fat.'},

    {t:'ol',items:[
      '<strong>Ribs.</strong> Run flat palms along his sides. You should feel each rib easily under a thin layer, with light pressure. If you have to press, he is over. If they are sharp and visible from across the room, he is under.',
      '<strong>From above.</strong> Look down. There should be a visible waist behind the ribs. On a long dog this reads as a narrowing rather than an hourglass — do not expect a whippet.',
      '<strong>From the side.</strong> The belly should tuck up from the ribcage toward the hind legs, not run parallel to the floor.',
      '<strong>Weigh weekly,</strong> same scale, same time of day. Change the calorie figure by about 10% and hold it for two to three weeks before judging.'
    ]},

    {t:'h2',text:'Does keeping him lean protect his back?'},

    {t:'p',text:'Not on the evidence we have, and this is where most dachshund feeding advice quietly overclaims. <strong>DachsLife 2015 found no significant association between body condition score and intervertebral disc disease</strong> in 2,031 dogs. The link everyone assumes exists has not been demonstrated in this breed.'},

    {t:'p',text:'Keep him lean anyway, for a reason that is better supported. In Purina’s lifetime study of 48 Labradors, restricting calories by 25% added about <strong>1.8 years of median lifespan</strong>. That is a large effect for something that costs nothing. It is a longevity argument and a joint argument, not a spine argument, and the difference is worth holding onto — because an owner who believes thinness is back insurance may skip the things that <a href="/guides/dachshund-back-problems-ivdd">do have evidence behind them</a>.'},

    {t:'h2',text:'What about puppies and weight loss?'},

    {t:'p',text:'A growing puppy uses a factor of <strong>2 to 3 times RER</strong>, which is why a 10-week-old eats an amount that looks absurd next to an adult’s bowl, and why that amount must come down as growth slows rather than becoming the permanent ration. A dog on a formal weight-loss plan uses a factor of <strong>1.0</strong> — RER alone — and that plan belongs with your veterinarian, who should be weighing him and checking that the drop is fat rather than muscle.'},

    {t:'p',text:'If he is already heavy, do not simply cut the current amount by eye. Work out RER for his <em>target</em> weight, feed to that, and re-score every two weeks. Use <a href="/guides/dachshund-weight-chart">the weight guide</a> to decide what the target should be, because the AKC divisions and the body condition scale answer different questions.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual carries the full calorie tables by weight and life stage, a two-page body condition scoring illustration you can hold the dog against, and a label-reading walkthrough for picking a food when every bag on the shelf makes the same claims.'}
  ],
  facts:[
    ['RER formula','70 × (body weight in kg)^0.75','Pet Nutrition Alliance'],
    ['Neutered adult factor','×1.6 (intact ×1.8, growth ×2–3, weight loss ×1.0)','Pet Nutrition Alliance'],
    ['11 lb dachshund, neutered adult','About 375 kcal/day','Pet Nutrition Alliance'],
    ['16 lb dachshund, neutered adult','About 482 kcal/day','Pet Nutrition Alliance'],
    ['25 lb dachshund, neutered adult','About 678 kcal/day','Pet Nutrition Alliance'],
    ['Treat allowance','10% of daily calories; about 48 kcal at 16 lb','Tufts Petfoodology']
  ],
  faq:[
    {q:'How many cups should a dachshund eat per day?',
     a:'There is no universal cup figure, because calorie density differs between foods. Work out the calories first — about 375 a day for an 11-pound neutered adult, 482 at 16 pounds, 678 at 25 pounds — then divide by the kcal per cup printed on your bag, and re-do the arithmetic whenever you change food.'},
    {q:'How often should you feed a dachshund?',
     a:'Twice a day suits most adult dachshunds, and it splits the ration into portions that feel like meals. Puppies need three or four smaller meals. Note that twice-daily feeding is good practice for other reasons, not bloat prevention: gastric dilatation and volvulus is a disease of deep, narrow chests, and dachshunds are not a listed at-risk breed.'},
    {q:'Why is my dachshund always hungry?',
     a:'Appetite is a poor guide to requirement in this breed. Work from the calorie figure and body condition score instead. If he is scoring 4 to 5 out of 9 and holding weight, he is being fed correctly regardless of how he behaves at the bowl. A sudden genuine change in appetite is worth a veterinary conversation.'},
    {q:'How do I know if my dachshund is overweight?',
     a:'Use the 1-to-9 body condition scale and aim for 4 to 5. You should feel the ribs easily with light pressure, see a waist from above, and see the belly tuck up from the side. A dog scoring 7 out of 9 is carrying roughly 30% body fat. Weigh weekly on the same scale.'},
    {q:'Does being overweight cause IVDD in dachshunds?',
     a:'DachsLife 2015, surveying 2,031 owners, found no significant association between body condition score and disc disease. That is a British dataset and an absence of evidence rather than proof of no effect. Keep him lean for lifespan — Purina’s Labrador study found 25% calorie restriction added about 1.8 years of median life.'},
    {q:'How many treats can I give a dachshund while training?',
     a:'Keep all treats under 10% of daily calories — around 48 kcal for a 16-pound dog, which disappears fast in a training session. The practical fix is to train with part of his measured daily ration rather than with extra food, so a heavy training week does not become a heavy dog.'}
  ],
  related:['dachshund-weight-chart','dachshund-back-problems-ivdd','are-stairs-bad-for-dachshunds']
},

/* ═══════════════════ 6 · SIZE ═══════════════════ */
{
  slug:'dachshund-weight-chart',
  title:'Dachshund Weight Chart',
  h1:'Dachshund weight chart: AKC divisions, FCI chest measurement, and the number that matters',
  metaTitle:'Dachshund Weight Chart: AKC vs FCI Sizes Explained',
  metaDescription:'The AKC recognizes two sizes by weight. The FCI measures chest circumference. Tweenie is not official, and there is no rabbit dachshund in America.',
  keyword:'dachshund weight chart',
  updated:'2026-09-12',
  answer:'The AKC recognizes two sizes by weight: standard, usually 16 to 32 pounds, and miniature, 11 pounds and under at 12 months. The FCI instead measures chest circumference at 15 months — standard over 37 cm, miniature 32 to 37, rabbit 27 to 32. Tweenie has no official status, and no rabbit size exists in America.',
  toc:[
    'Is there an official dachshund weight chart?',
    'What are the AKC weight divisions?',
    'How does the FCI classify dachshunds?',
    'Is tweenie a real dachshund size?',
    'Why is there no rabbit dachshund in America?',
    'What should your dachshund actually weigh?',
    'How do you score body condition at home?',
    'Why we do not publish a puppy growth chart'
  ],
  blocks:[

    {t:'h2',text:'Is there an official dachshund weight chart?'},

    {t:'p',text:'There are two official systems, they disagree, and neither one is a chart of what your individual dog should weigh. The American Kennel Club divides the breed by <strong>weight</strong>. The Fédération Cynologique Internationale, which governs the breed across Europe and much of the world, divides it by <strong>chest circumference</strong>. A dog that is a miniature under one system can fail to be one under the other, and both would be right.'},

    {t:'h2',text:'What are the AKC weight divisions?'},

    {t:'p',text:'Two, and only two. <strong>Standard</strong> is described in the AKC standard as "usually between 16 and 32 pounds." <strong>Miniature</strong> is defined as <strong>11 pounds and under at 12 months of age and older</strong>.'},

    {t:'p',text:'One detail is routinely lost: in the AKC, miniature is a <strong>class division for showing, not a separate variety</strong>. The varieties are the three coats — smooth, wirehaired and longhaired — and each is shown separately. So "miniature longhaired dachshund" describes a coat variety shown in a weight division, not a distinct breed within a breed.'},

    {t:'callout',tone:'note',title:'Note the gap between the two divisions',text:'Miniature stops at 11 pounds. Standard "usually" starts at 16. The five pounds in between are not an official category, and that gap is where the entire tweenie argument lives.'},

    {t:'h2',text:'How does the FCI classify dachshunds?'},

    {t:'p',text:'By a tape measure around the chest, taken at <strong>15 months</strong>, because chest circumference is what determines whether a dog can follow quarry down a burrow. The breed was built for that job, and the FCI kept the measurement that tests it.'},

    {t:'table',
      head:['System','Standard','Miniature','Rabbit (Kaninchen)','Measured'],
      rows:[
        ['AKC (United States)','Usually 16–32 lb','11 lb and under at 12 months','Does not exist','Weight, from 12 months'],
        ['FCI (Europe and most of the world)','Over 37 cm chest (standard gives 37–47 cm; about 14.6–18.5 in)','Over 32 up to 37 cm (about 12.6–14.6 in)','27 up to 32 cm (about 10.6–12.6 in)','Chest circumference at 15 months'],
        ['US informal usage','—','—','—','"Tweenie", roughly 12–15 lb. No official status anywhere.']
      ],
      caption:'Inch figures are conversions of the FCI centimetre measurements, given for American readers.'},

    {t:'p',text:'The practical consequence: a European pedigree may describe a dog by a size class your American veterinarian has never used, and an imported miniature measured by chest may sit above 11 pounds on a US scale. Neither document is wrong. They are measuring different things.'},

    {t:'h2',text:'Is tweenie a real dachshund size?'},

    {t:'p',text:'No. <strong>"Tweenie" has no official status</strong> — not with the AKC, not with the FCI, not with the Dachshund Club of America. It is a useful piece of American shorthand for a dog of roughly 12 to 15 pounds who is too heavy to show as a miniature and lighter than a typical standard. That dog is real. The category is not.'},

    {t:'p',text:'This matters in exactly one place: a sales listing. A breeder using "tweenie" descriptively is being practical. A breeder using it as a rare or premium designation is selling you a word. There is no registry, no standard and no price justification behind it.'},

    {t:'h2',text:'Why is there no rabbit dachshund in America?'},

    {t:'p',text:'Because the AKC never adopted the third size. The <strong>rabbit, or kaninchen, dachshund does not exist in the AKC</strong> — a dog under the FCI rabbit measurement, imported to the United States, is simply registered and shown as a miniature.'},

    {t:'p',text:'So when a US listing advertises a "rabbit dachshund" at a premium, one of two things is happening. Either the breeder is accurately describing FCI paperwork on an imported or European-bred dog, in which case they will be able to show you that paperwork without being asked twice. Or the word is being used to price a very small miniature. Ask which. The answer arrives quickly.'},

    {t:'h2',text:'What should your dachshund actually weigh?'},

    {t:'p',text:'The question has no numerical answer, and that is not evasion. The AKC divisions exist to sort dogs into show classes; they were never designed to tell you whether the animal on your floor is the right weight. A 22-pound standard with a dense frame can be lean. A 12-pound miniature can be carrying too much. The scale cannot distinguish them. <strong>Body condition can.</strong>'},

    {t:'stat',figure:'4–5 out of 9',label:'target body condition score',source:'VCA Hospitals body condition scoring'},

    {t:'p',text:'The standard scale runs <strong>1 to 9</strong>, and the target is <strong>4 to 5</strong>. A dog at 7 out of 9 is carrying roughly <strong>30% body fat</strong>. That is the number to manage. Your dog’s correct weight is whatever weight puts him at 4 or 5, and it will change across his life.'},

    {t:'h2',text:'How do you score body condition at home?'},

    {t:'ol',items:[
      '<strong>Ribs.</strong> Flat palms down both sides. You should feel each rib easily under a thin covering, with light pressure. Pressing hard to find them means he is over; seeing them clearly across a room means he is under.',
      '<strong>Waist from above.</strong> Stand over him and look down. There should be a narrowing behind the ribs. On a dog built this long it reads as a gentle taper rather than an obvious waist, so compare him against himself month to month rather than against a picture of a different breed.',
      '<strong>Tuck from the side.</strong> The underline should rise from the ribcage toward the hind legs. A belly running parallel to the floor is a score above target.',
      '<strong>Write it down.</strong> Weigh weekly on the same scale and log the score monthly. Gradual gain is invisible day to day and obvious in a six-month column.'
    ]},

    {t:'p',text:'Then feed to that score rather than to the bag. <a href="/guides/how-much-to-feed-a-dachshund">The feeding guide</a> works the calorie arithmetic for 11, 16 and 25 pound dogs.'},

    {t:'h2',text:'Why we do not publish a puppy growth chart'},

    {t:'p',text:'Because we could not source one we would stand behind, and a fabricated growth curve is worse than none. Dachshund puppies from different lines and different sizes follow different trajectories, and the AKC’s own miniature division is not assessed until <strong>12 months</strong> — the registry itself declines to judge size before then.'},

    {t:'p',text:'What is worth tracking is the shape of the curve rather than the numbers on it: steady gain, a puppy who stays at a body condition score of 4 to 5 throughout, and no week where he suddenly stops gaining. Bring the log to every veterinary visit in the first year. That is more informative than any chart we could print.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual carries the full AKC standard with the disqualifications annotated, the illustrated body condition scale sized to hold against a real dog, and the growth-tracking log for the first eighteen months.'}
  ],
  facts:[
    ['AKC standard size','Usually 16–32 lb','AKC breed standard'],
    ['AKC miniature division','11 lb and under at 12 months','AKC breed standard'],
    ['FCI standard','Chest over 37 cm at 15 months (37–47 cm)','FCI standard 148'],
    ['FCI miniature','Chest over 32 up to 37 cm','FCI standard 148'],
    ['FCI rabbit','Chest 27 up to 32 cm; no AKC equivalent','FCI standard 148'],
    ['Target body condition score','4–5 of 9; 7 of 9 is about 30% body fat','VCA Hospitals']
  ],
  faq:[
    {q:'How much should a miniature dachshund weigh?',
     a:'The AKC defines the miniature division as 11 pounds and under at 12 months of age and older. That is a show-class threshold, not a health target. A miniature can be 11 pounds and overweight, or 11 pounds and underweight. Score body condition on the 1-to-9 scale and aim for 4 to 5.'},
    {q:'What is a tweenie dachshund?',
     a:'American shorthand for a dog of roughly 12 to 15 pounds, between the AKC miniature limit of 11 pounds and the usual standard range of 16 to 32. It has no official status with the AKC, the FCI or the Dachshund Club of America. Treat it as a description, never as a premium designation.'},
    {q:'Are there rabbit dachshunds in the US?',
     a:'Not as a recognized size. The FCI rabbit or kaninchen class is defined by a chest circumference of 27 to 32 cm at 15 months, and the AKC has no equivalent — such a dog is registered and shown here as a miniature. A US listing charging extra for a rabbit dachshund should be able to produce FCI paperwork.'},
    {q:'Why does the AKC use weight when Europe uses chest size?',
     a:'The FCI kept the measurement that tests the breed’s original job: a chest that fits down a burrow. It is taken at 15 months. The AKC simplified to weight assessed from 12 months, with two divisions rather than three. Neither is wrong; they answer different questions and produce different classifications for the same dog.'},
    {q:'Is my dachshund overweight at 18 pounds?',
     a:'Eighteen pounds sits inside the AKC standard range of roughly 16 to 32 pounds, so the number alone tells you nothing. Feel the ribs with light pressure, look for a taper behind the ribs from above, and check that the belly tucks up from the side. Score 4 to 5 of 9 is the target.'},
    {q:'When do dachshunds stop growing?',
     a:'The AKC assesses its miniature division at 12 months and the FCI takes its chest measurement at 15 months, which tells you where both registries consider size settled. We do not publish a week-by-week growth chart because no sourced dachshund growth curve was available. Track body condition instead.'}
  ],
  related:['how-much-to-feed-a-dachshund','dachshund-back-problems-ivdd','how-much-does-a-dachshund-cost']
},

/* ═══════════════════ 7 · BREEDER ═══════════════════ */
{
  slug:'questions-to-ask-a-dachshund-breeder',
  title:'Questions to Ask a Dachshund Breeder',
  h1:'How to find a reputable dachshund breeder: the questions, and the answers that end the conversation',
  metaTitle:'Questions to Ask a Dachshund Breeder (and Red Flags)',
  metaDescription:'The three-item AKC parent-club health test list, the DNA panel that matters, why the CDDY test is useless for selection, and what a USDA license really signals.',
  keyword:'how to find a reputable dachshund breeder',
  updated:'2026-09-12',
  answer:'Ask three things first: whether the sire and dam have had a patella evaluation, a cardiac exam and an ophthalmologist evaluation. That is the entire AKC parent-club health testing list for the breed. Then ask for the DNA panel and whether the sale is face-to-face. A USDA license signals sight-unseen commercial volume, not quality.',
  toc:[
    'How do you find a reputable dachshund breeder?',
    'What health testing should the parents have?',
    'Which DNA tests matter?',
    'Why is the CDDY test not a selection tool?',
    'What about back scoring?',
    'Does a USDA license mean anything good?',
    'What does AKC Breeder of Merit prove?',
    'What should you ask about color?',
    'Which answers should end the conversation?',
    'How do you avoid a puppy scam?',
    'What protection do you have after the sale?'
  ],
  blocks:[

    {t:'h2',text:'How do you find a reputable dachshund breeder?'},

    {t:'p',text:'By asking a small number of specific questions and listening to how they are answered rather than what is claimed. Price will not do it for you: the reputable breeder band of <strong>$1,000–$3,000</strong> overlaps the online marketplace band of <strong>$500–$2,000</strong>, so a broker can sit comfortably inside a breeder’s price range. Documentation and a face-to-face sale can tell them apart. A number on a listing cannot.'},

    {t:'h2',text:'What health testing should the parents have?'},

    {t:'p',text:'Three things, and it really is only three. The AKC parent-club health testing requirements for the Dachshund are a <strong>Patella Evaluation</strong>, a <strong>Cardiac Exam</strong>, and an <strong>Ophthalmologist Evaluation</strong>. That is the entire list.'},

    {t:'p',text:'Ask for results for <em>both</em> parents, with dates and the examining specialist named, and verify them yourself at <strong>ofa.org</strong> rather than accepting a photograph of a certificate. A breeder who is doing this work will hand the results over before you finish the sentence. A breeder who says the line is clean, or that the vet checked them over, is describing an opinion rather than a test.'},

    {t:'callout',tone:'evidence',title:'Check OFA yourself',text:'We do not print a CHIC requirement list for this breed, because we could not retrieve and verify the OFA page. Go to ofa.org, search the sire and dam by registered name, and read what is actually recorded. The database is public and free.'},

    {t:'h2',text:'Which DNA tests matter?'},

    {t:'p',text:'Commercial panels for the breed cover <strong>CDDY/IVDD (FGF4)</strong>, <strong>PRA crd4/cord1 (RPGRIP1)</strong>, <strong>Degenerative Myelopathy</strong>, <strong>Osteogenesis Imperfecta</strong>, <strong>LGMD 2D</strong> (in miniatures), <strong>MPS IIIA</strong>, <strong>Narcolepsy</strong>, <strong>NCL1</strong> and <strong>NCL2</strong>.'},

    {t:'p',text:'One deserves singling out. <strong>Lafora disease</strong> (NHLRC1) is concentrated in <strong>miniature wirehaired</strong> dachshunds, the DNA test is established and commercially available, and screening works: UK screening cut the proportion of affected dogs from <strong>10.4% in 2012 to 2.7% in 2017</strong>. If you are buying a miniature wirehaired puppy, ask about Lafora status by name. A breeder in that variety who has not heard of it is not following their own variety’s health work.'},

    {t:'h2',text:'Why is the CDDY test not a selection tool?'},

    {t:'p',text:'Because nearly every dachshund alive fails it. <strong>93% of dachshunds carry two copies</strong> of the CDDY variant, and the allele frequency is <strong>0.98</strong>. A test that returns the same answer for almost every dog cannot separate dogs.'},

    {t:'p',text:'Dachshund Health UK states the position directly: <em>"we do not currently recommend the use of the UC Davis DNA Test (CDDY)"</em>, warning that relying on it <em>"will have an irreversible effect on the Dachshund breed excluding almost all dogs from breeding."</em> The variant is inseparable from the short legs that define the breed — the same FGF4 retrogene produces both.'},

    {t:'callout',tone:'warn',title:'"Our dogs are CDDY clear" is a sentence to examine closely',text:'With 93% of the breed carrying two copies, a genuinely clear dachshund is a rarity. Either the claim is wrong, or the breeder is selecting on a marker their own health authorities advise against using for selection. Ask to see the report, and ask what they think it means.'},

    {t:'h2',text:'What about back scoring?'},

    {t:'p',text:'This is the real screening tool for disc disease, and it barely exists in America. Radiographic back scoring measures spinal calcification and is used to make breeding decisions. <strong>Denmark has run a scheme for around twenty years</strong>; since 2019 its rules require both parents to be X-rayed and permit only dogs graded <strong>K0 to K2</strong> to breed. The UK’s Royal Kennel Club launched an IVDD scheme in <strong>2021</strong>.'},

    {t:'p',text:'In the United States, <strong>neither the AKC nor the Dachshund Club of America recommends it</strong>, and only about <strong>three US breeders</strong> have been confirmed to X-ray for spinal calcification. So this is not a question you can use to filter American breeders — almost none will say yes. It is a question worth asking anyway, because the answer tells you how closely they follow the breed’s health research. A breeder who knows what you are asking about and explains why they do not do it is a different proposition from one who has never heard of it.'},

    {t:'h2',text:'Does a USDA license mean anything good?'},

    {t:'p',text:'It means the opposite of what sellers imply. USDA and APHIS state that <em>"if you maintain four or fewer breeding females … you do not have to be USDA licensed"</em>, and that <em>"if you always sell pets to new owners in face-to-face transactions, you do not have to be USDA licensed, no matter how many breeding females you have."</em> Photos, videos and video calls do <strong>not</strong> count as face-to-face.'},

    {t:'p',text:'Run that backwards. A breeder holding a USDA license is, by definition, either running more than four breeding females <em>and</em> shipping to buyers sight unseen. The license is a marker of <strong>sight-unseen commercial volume</strong>. A small hobby breeder who sells face to face has no reason to hold one. "We are USDA licensed and inspected," offered as reassurance, tells you what kind of operation you are talking to.'},

    {t:'h2',text:'What does AKC Breeder of Merit prove?'},

    {t:'p',text:'Participation, mostly. The program requires at least five years in AKC events, parent club membership, AKC titles on at least four dogs bred, certification that parent-club health screens are performed, and 100% of puppies AKC registered. Those are real commitments and they filter out drive-by operations. But note the word <em>certification</em>: the breeder attests that the screens are done. It is <strong>a participation credential, not an independent health audit</strong>. Verify the screens at ofa.org regardless.'},

    {t:'h2',text:'What should you ask about color?'},

    {t:'p',text:'Ask what the sire and dam are, and specifically whether either is a dapple. A <strong>dapple × dapple</strong> mating produces roughly <strong>25% double-dapple puppies</strong>, and the Dachshund Club of America states these <em>"are more likely to carry health issues such as deafness, reduced eye size or missing eyes."</em> Red dapples can be visually ambiguous, so accidental dapple-to-dapple matings are a genuine risk rather than a theoretical one — which is why the honest answer to "is either parent a dapple" is a considered one, not a shrug.'},

    {t:'p',text:'The DCA also warns that dilutes — <strong>Blue and Isabella</strong> — carry <em>"thin coats, skin sensitivity, vaccine failures and reduced lifespan."</em> Colour dilution alopecia is genetic and recessive, dachshunds are explicitly listed as susceptible, the coat is normal at birth with signs from about six months, and it is not curable.'},

    {t:'p',text:'Note the perverse incentive while you are at it. Dapple adds <strong>$500–$1,000</strong> to the price of a puppy. The two biggest premiums in the market attach to patterns the breed’s own parent club warns about, which is worth saying plainly to anyone quoting you a colour surcharge.'},

    {t:'h2',text:'Which answers should end the conversation?'},

    {t:'ul',items:[
      '"We do not health test — our line is clean." The three-test list is short and cheap. Not doing it is a choice.',
      '"Both parents are dapple," or any version of specialising in double dapples.',
      'Refusal or reluctance to let you meet the dam, in person, where the puppies live.',
      '"We can ship him this week" for a puppy under eight weeks old.',
      'Payment by wire transfer, gift card, cryptocurrency or a peer-to-peer app only.',
      'Several litters always available, in every colour, year round.',
      '"We are USDA licensed" offered as a quality credential.',
      'Pressure — a deposit deadline, another buyer waiting, a discount for deciding today.',
      'No contract, or a contract with no health guarantee and no return clause.',
      'No questions asked about you. A breeder who does not interview you is not placing puppies, they are selling them.'
    ]},

    {t:'h2',text:'How do you avoid a puppy scam?'},

    {t:'p',text:'By insisting on a live, in-person meeting before money moves. The BBB Scam Tracker logged <strong>2,899 puppy scam reports in 2023</strong> with a median loss of $700, <strong>2,278 in 2024</strong> at $680, and <strong>1,632 through September 2025</strong> at $600, with individual losses documented between $1,900 and $4,500. Those counts understate the problem badly: the BBB cites FTC data that only <strong>4.8%</strong> of mass-market fraud victims report at all, which puts true volume at roughly twenty times the logged figures.'},

    {t:'h2',text:'What protection do you have after the sale?'},

    {t:'p',text:'Some, depending on your state and who you bought from. <strong>Twenty-two states have puppy lemon laws</strong>, typically giving a short window for infectious illness and a longer one for congenital or hereditary defects, with remedies of refund, exchange or reimbursement of veterinary costs. California allows 15 days for illness and one year for congenital or hereditary conditions, with a retention remedy of up to <strong>150% of the purchase price</strong>. Florida runs 14 days and one year, Illinois 21 days, Vermont 7.'},

    {t:'p',text:'Two limits matter. These laws bind dealers and retailers, <strong>not every hobby breeder</strong>, and remedies are usually capped at the purchase price — which will not touch the cost of a serious condition. Separately, <strong>ten states now ban retail pet store puppy sales</strong> (California was first in 2017, Colorado in 2026, Delaware the tenth), along with 530 localities across 31 states.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual turns this into a printable breeder interview sheet with scoring, the contract clauses worth arguing over, and a walkthrough of reading an OFA record and a DNA panel line by line.'}
  ],
  facts:[
    ['AKC parent-club health tests','Patella, cardiac, ophthalmologist — three total','AKC breed health testing requirements'],
    ['CDDY carrier rate','93% carry two copies; allele frequency 0.98','Dachshund Health UK'],
    ['Lafora screening effect (UK)','10.4% affected in 2012 to 2.7% in 2017','Dachshund Health UK'],
    ['USDA license threshold','Over four breeding females and sight-unseen sales','USDA/APHIS via AKC'],
    ['Double dapple','About 25% of a dapple × dapple litter','Dachshund Club of America'],
    ['Puppy scam reports, 2024','2,278 reports, $680 median loss','BBB Scam Tracker']
  ],
  faq:[
    {q:'What health tests should dachshund parents have?',
     a:'The AKC parent-club list for the breed is exactly three: a patella evaluation, a cardiac exam and an ophthalmologist evaluation. Ask for both parents, with dates and the examining specialist named, and verify them at ofa.org rather than accepting a photo of a certificate. Add the Lafora DNA test for miniature wirehaired lines.'},
    {q:'Should I buy from a USDA licensed dachshund breeder?',
     a:'A USDA license is not a quality mark. USDA and APHIS state that breeders with four or fewer breeding females, or who always sell face-to-face, need no license regardless of volume. Holding one therefore indicates larger-scale, sight-unseen selling. Photos, videos and video calls do not count as face-to-face.'},
    {q:'Does a CDDY DNA test tell me if a puppy will get IVDD?',
     a:'No. About 93% of dachshunds carry two copies and the allele frequency is 0.98, so the test returns the same answer for nearly every dog. Dachshund Health UK does not recommend using it for selection, warning it would exclude almost all dogs from breeding. It is not a screening tool for buyers.'},
    {q:'Do US dachshund breeders X-ray for back problems?',
     a:'Almost none. Denmark has scored spinal calcification for around twenty years and since 2019 requires both parents X-rayed with only K0–K2 grades permitted to breed. The UK launched a scheme in 2021. In the US neither the AKC nor the DCA recommends it, and only about three breeders are confirmed to do it.'},
    {q:'Why do dapple dachshunds cost more?',
     a:'Because buyers pay more for the pattern, which adds $500–$1,000 to the price. The Dachshund Club of America warns that dapple-to-dapple matings produce roughly 25% double dapples, more likely to carry deafness, reduced eye size or missing eyes. The premium and the parent club’s warning point in opposite directions.'},
    {q:'How do I check a dachshund breeder is legitimate?',
     a:'Verify the parents’ health results yourself at ofa.org, meet the dam in person where the puppies live, and refuse wire transfers, gift cards or crypto. The BBB logged 2,278 puppy scam reports in 2024 at a $680 median loss, and cites FTC data that only 4.8% of fraud victims report at all.'}
  ],
  related:['how-much-does-a-dachshund-cost','dachshund-back-problems-ivdd','when-to-neuter-a-dachshund']
},

/* ═══════════════════ 8 · COST ═══════════════════ */
{
  slug:'how-much-does-a-dachshund-cost',
  title:'How Much Does a Dachshund Cost?',
  h1:'How much does a dachshund cost? Purchase, first year, lifetime, and the line item that dominates',
  metaTitle:'How Much Does a Dachshund Cost? Purchase to Lifetime',
  metaDescription:'Puppy prices by source and region, why dapple costs more, first-year setup, lifetime totals, and the IVDD line item that outweighs every other number.',
  keyword:'how much does a dachshund cost',
  updated:'2026-09-12',
  answer:'A dachshund puppy costs $1,000–$3,000 from a reputable breeder, $200–$500 from rescue and $1,800–$4,000 or more from a pet store (iHeartDogs, 2026). Bringing a dog home runs $1,150–$4,420 (Rover, 2025). Synchrony puts lifetime cost at $22,125–$60,602 over fifteen years, while owners typically guess $8,000.',
  toc:[
    'How much does a dachshund cost?',
    'What does the puppy itself cost?',
    'Why does a dapple cost more, and why is that backwards?',
    'Does price tell you anything about quality?',
    'What does the first year cost?',
    'What does a dachshund cost over a lifetime?',
    'The line item that dominates everything',
    'How do you actually budget for this?'
  ],
  blocks:[

    {t:'h2',text:'How much does a dachshund cost?'},

    {t:'p',text:'The purchase price is the smallest number in this guide, and the one people research hardest. Over a lifetime it accounts for a few percent of the total. What follows is every figure we can source, in the order you will meet them.'},

    {t:'h2',text:'What does the puppy itself cost?'},

    {t:'table',
      head:['Source','Price','Notes'],
      rows:[
        ['Reputable breeder','$1,000–$3,000','iHeartDogs, 2026'],
        ['Pet store','$1,800–$4,000+','Now banned at retail in 10 states'],
        ['Online marketplace','$500–$2,000','Overlaps the breeder band — see below'],
        ['Rescue','$200–$500','iHeartDogs, 2026'],
        ['Northeast and West','$1,500–$3,000','Regional variation, iHeartDogs'],
        ['Midwest','$1,000–$2,200','Regional variation, iHeartDogs']
      ],
      caption:'iHeartDogs, March 2026, updated September 2026.'},

    {t:'p',text:'Rescue figures are published rather than estimated. Dachshund Rescue of North America charges $350 under a year, $275 from one to seven, and $150 at eight and over. Coast to Coast Dachshund Rescue charges $400 under a year plus a $100 alteration deposit, $350 from one to four, $300 from four to eight and $200 at eight and over — and that fee includes the exam, vaccines, spay or neuter, parasite treatment, heartworm test and treatment, and a microchip. Priced against a spay at <strong>$455</strong> and a neuter at <strong>$487</strong>, an adult rescue dachshund arrives having already absorbed several hundred dollars of work.'},

    {t:'p',text:'Coat and pattern add on top. <strong>Dapple adds $500–$1,000. Longhaired adds $200–$500. Wirehaired commands a premium.</strong>'},

    {t:'h2',text:'Why does a dapple cost more, and why is that backwards?'},

    {t:'p',text:'Because it is scarcer and it photographs well, and for no other reason. Nothing about the pattern makes the dog healthier, longer-lived or easier to live with.'},

    {t:'callout',tone:'warn',title:'The premium points the wrong way',text:'Dapple carries the largest colour surcharge in the breed, at $500–$1,000. It is also the pattern the Dachshund Club of America warns about: a dapple × dapple mating produces roughly 25% double-dapple puppies, which the DCA says are more likely to carry deafness, reduced eye size or missing eyes. The market is paying most for the pattern the parent club flags hardest.'},

    {t:'p',text:'The same inversion applies to dilutes. Blue and Isabella are on the DCA’s accepted colour list and are marketed as rare, but the DCA warns of thin coats, skin sensitivity, vaccine failures and reduced lifespan, and colour dilution alopecia — genetic, recessive, incurable, with signs from about six months — lists dachshunds as susceptible. You are paying a premium for a documented liability. That is worth saying out loud before a deposit moves.'},

    {t:'h2',text:'Does price tell you anything about quality?'},

    {t:'p',text:'Less than you would hope. The reputable breeder band runs $1,000–$3,000 and the online marketplace band runs $500–$2,000. <strong>They overlap.</strong> A broker can price a puppy squarely inside breeder territory, and a good breeder in the Midwest can sit below a broker on the coast.'},

    {t:'p',text:'What separates them is not the number. It is verifiable health testing on both parents, and a face-to-face sale. <a href="/guides/questions-to-ask-a-dachshund-breeder">The breeder questions guide</a> sets out what to ask and which answers should end the conversation.'},

    {t:'h2',text:'What does the first year cost?'},

    {t:'p',text:'Rover priced bringing home a new dog in 2025 at <strong>$1,150–$4,420</strong> — a spread of more than three thousand dollars for the same animal, most of it settled in the first two hours of shopping. Treat spending rose 85% year over year, and veterinary fees rose 11%.'},

    {t:'table',
      head:['First-year item','US cost','Source'],
      rows:[
        ['Setup, equipment and initial care','$1,150–$4,420','Rover, 2025'],
        ['Spay','$455 average ($361–$829)','2025 Synchrony Average Procedural Cost Study'],
        ['Neuter','$487 average ($385–$885)','2025 Synchrony Average Procedural Cost Study'],
        ['Pet insurance','$749.29/yr average premium (data year 2024)','NAPHIA State of the Industry 2025'],
        ['Pet insurance, reported annual spend','$198–$313','Synchrony 2025 Pet Lifetime of Care Study'],
        ['Wellness plan','$422–$701/yr','Synchrony 2025 Pet Lifetime of Care Study']
      ],
      caption:'The two insurance rows measure different things: NAPHIA reports average premiums written, Synchrony reports owner spend inside a lifetime model.'},

    {t:'p',text:'We do not publish a single headline first-year figure. The commonly circulated one could not be traced to a live source, and adding unverified numbers together produces a number that looks authoritative and is not.'},

    {t:'h2',text:'What does a dachshund cost over a lifetime?'},

    {t:'stat',figure:'$22,125–$60,602',label:'lifetime cost of a dog over 15 years',source:'Synchrony 2025 Pet Lifetime of Care Study'},

    {t:'p',text:'Synchrony’s 2025 study puts the fifteen-year figure at <strong>$22,125–$60,602</strong>, and reports that dog owners typically guess <strong>$8,000</strong>. The gap between the guess and the low end of the range is about fourteen thousand dollars. Rover’s ten-year figure lands at roughly <strong>$34,550</strong>, inside the Synchrony range once you adjust for the shorter horizon.'},

    {t:'p',text:'Those are all-breed figures. Nothing in them is dachshund-specific, and the breed’s defining condition sits outside them.'},

    {t:'h2',text:'The line item that dominates everything'},

    {t:'p',text:'One IVDD episode can cost more than a decade of routine ownership. Swedish insurance data puts lifetime disc disease risk at <strong>24.4% in miniatures</strong> and 13.0% in standards, against 3.5% across all breeds — so this is not a remote contingency you are budgeting for out of superstition.'},

    {t:'table',
      head:['IVDD item','US cost','Source'],
      rows:[
        ['Emergency exam','$135 (range $107–$246)','Synchrony 2025'],
        ['Neurologic exam','$195','University of Missouri VHC'],
        ['MRI','$2,285 average (range $1,811–$4,140)','Synchrony 2025'],
        ['ER hospitalization','$1,323 per day','Synchrony 2025'],
        ['Spinal surgery','$3,000–$8,000','PetMD, vet-reviewed'],
        ['All-in surgical episode','$10,000–$15,000','Southeast Veterinary Neurology']
      ],
      caption:'The all-in figure covers consult, imaging, surgery, three to four nights, rehabilitation and recheck.'},

    {t:'p',text:'Set the top of that table against the top of Synchrony’s lifetime range and the arithmetic is stark: a single surgical episode can represent a quarter of everything else you will ever spend on the dog. Two episodes are possible. And no sourced US range exists for conservative, non-surgical management, so build that estimate from the components — exam, imaging, four weeks of medication, rechecks — and label it an estimate when you do.'},

    {t:'h2',text:'How do you actually budget for this?'},

    {t:'ul',items:[
      '<strong>Decide the insurance question in the first fortnight, not the fifth year.</strong> Under the NAIC model definitions anything showing signs before the effective date or during a waiting period is preexisting, and at least one major insurer applies a 180-day orthopedic waiting period with IVDD classified as orthopedic. See <a href="/guides/pet-insurance-for-dachshunds">the insurance guide</a>.',
      '<strong>If you self-fund, fund it properly.</strong> A reserve that will not cover the low end of $10,000–$15,000 is not a plan, it is a hope.',
      '<strong>Budget the routine separately.</strong> Dental cleaning under anesthesia averages $388, and a dog who lives fifteen years will need more than one.',
      '<strong>Expect the numbers to move.</strong> Veterinary fees rose 11% year over year in Rover’s 2025 data. A budget built on today’s prices will be wrong by the time the dog is five.',
      '<strong>Do not treat prevention as optional spending.</strong> The Companion Animal Parasite Council advises year-round broad-spectrum control against heartworm, intestinal parasites, fleas and ticks, plus at least four fecal exams in the first year and two a year thereafter. It is a recurring line, every year, for fifteen years.'
    ]},

    {t:'p',text:'The dachshund is the fifth most popular breed in the United States for 2025, up from sixth, and a great many people are buying one this year on the strength of the purchase price alone. The purchase price is not the cost of the dog.'},

    {t:'callout',tone:'note',title:'What the manual adds',text:'The $45 manual includes the full fifteen-year budget worksheet, the insure-versus-self-fund comparison run at real premiums, and the cost conversation to have with a neurologist at two in the morning when the decision is not financial yet but is about to be.'}
  ],
  facts:[
    ['Reputable breeder price','$1,000–$3,000','iHeartDogs, 2026'],
    ['Rescue adoption fee','$200–$500','iHeartDogs, 2026'],
    ['Dapple premium','Adds $500–$1,000','iHeartDogs, 2026'],
    ['Bringing home a new dog','$1,150–$4,420','Rover, 2025'],
    ['Lifetime cost, 15 years','$22,125–$60,602 (owners guess $8,000)','Synchrony 2025 Pet Lifetime of Care Study'],
    ['All-in IVDD surgical episode','$10,000–$15,000','Southeast Veterinary Neurology']
  ],
  faq:[
    {q:'How much is a dachshund puppy in the US?',
     a:'Between $1,000 and $3,000 from a reputable breeder, $1,800 to $4,000 or more from a pet store, $500 to $2,000 through an online marketplace and $200 to $500 from rescue, on iHeartDogs 2026 figures. Regionally, the Northeast and West run $1,500–$3,000 and the Midwest $1,000–$2,200.'},
    {q:'Why are dapple dachshunds more expensive?',
     a:'Scarcity and appearance, not health. Dapple adds $500–$1,000. The Dachshund Club of America warns that dapple-to-dapple matings produce about 25% double-dapple puppies, more likely to carry deafness, reduced eye size or missing eyes. The largest colour premium in the breed attaches to the pattern the parent club warns about most.'},
    {q:'What is the lifetime cost of owning a dachshund?',
     a:'Synchrony’s 2025 study puts a dog’s fifteen-year cost at $22,125–$60,602, and found owners typically guess $8,000. Rover’s ten-year figure is about $34,550. Those are all-breed numbers. A single IVDD surgical episode, at $10,000–$15,000 all in, sits on top of them.'},
    {q:'Is a rescue dachshund cheaper than a puppy?',
     a:'Yes, substantially. Dachshund Rescue of North America charges $350 under a year down to $150 at eight and over. Coast to Coast Dachshund Rescue includes exam, vaccines, spay or neuter, parasite treatment, heartworm test and treatment and microchip in fees of $200 to $400. A spay alone averages $455.'},
    {q:'How much should I save for a dachshund emergency?',
     a:'Enough to reach the low end of $10,000–$15,000, which is what one referral practice publishes as an all-in IVDD surgical episode. MRI alone averages $2,285 and ER hospitalization runs $1,323 a day. Lifetime disc disease risk is 24.4% in miniatures on Swedish insurance data, so this is a likely expense, not a remote one.'},
    {q:'Does a higher price mean a better dachshund breeder?',
     a:'No. The reputable breeder band of $1,000–$3,000 overlaps the online marketplace band of $500–$2,000, so price alone cannot separate a breeder from a broker. What separates them is verifiable health testing on both parents at ofa.org and a face-to-face sale. Photos and video calls do not count as face-to-face.'}
  ],
  related:['questions-to-ask-a-dachshund-breeder','pet-insurance-for-dachshunds','dachshund-back-problems-ivdd']
}

];
