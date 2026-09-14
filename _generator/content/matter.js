/* ═══════════════════════════════════════════════════════════════
   FRONT AND BACK MATTER
   Editor’s note · How to use this manual · FAQ · Toxic doses ·
   Glossary · Contacts · Quiz answers · Sources
   ═══════════════════════════════════════════════════════════════ */

module.exports = {

/* ─────────────────────────────────────────────────────────────
   1 · EDITOR’S NOTE
   ───────────────────────────────────────────────────────────── */
author: {
  title: 'Why this book exists',
  paras: [

    'This started as a reading list, not a book. Three questions about a dachshund — what a disc episode costs, whether the furniture ban does anything, when to spay a female of this breed. A month later: forty tabs open, and no answer I would have put my name to.',

    'The research exists. It is simply not where owners look. DachsLife 2015 put questions to the owners of 2,031 dachshunds and was analyzed at the Royal Veterinary College. The lifetime risk figures come from Swedish insurance records. The back-scoring schemes are Danish and British. Owner guides rarely cite any of it, and the fragments that reach you arrive stripped of the caveats that made them worth reading.',

    'So this book follows one rule, and the rest of it falls out of that rule.'

  ],
  /* le problème, en trois blocs */
  problem: [
    ['The free material', 'The top twenty search results give you the same eight facts, reworded and uncited, copied forward until the origin is gone. Where the evidence is mixed, the mixture has been ironed flat — a clean sentence performs better than an honest one.'],
    ['The paid material', 'Most dachshund books in English are written by nobody in particular and read like the blogs with a cover price. The serious exception is narrow by design: written for the owner of a dog already diagnosed.'],
    ['The research', 'British, Swedish and Danish, and almost never quoted to the people it was meant for.']
  ],
  /* la règle, en quatre points */
  rule: [
    'Every number carries its source, in the sentence or in the block beside it.',
    'Settled evidence is marked settled. Disputed evidence is marked contested, and you get both positions with names attached.',
    'A claim that does not survive contact with the data is marked myth, and you get the study that broke it.',
    'Where a figure could not be verified, it is not in the book. The gaps are printed, not papered over.'
  ],
  /* ce qui va vous contrarier */
  contradict: [
    'The furniture ban.',
    'The story about weight and the back.',
    'The five-minutes-per-month walking rule.',
    'The timing of the spay.',
    'The DNA test a breeder offered as proof.'
  ],
  closing: [
    'Each of those is set against the best available evidence, and in each case the evidence is weaker, or points differently, than the advice implies. None of it has been softened.',

    'That is not an instruction to argue with your veterinarian. It is an instruction to bring the section and the source with you and ask. A good professional will engage with a citation and tell you what they see in your dog that the study did not measure. That conversation is what the book is for.'
  ],
  limits: [
    ['Not veterinary advice', 'This does not replace an examination. Nothing here is a diagnosis, a prescription, or a reason to wait. Part V opens with an instruction to pick up the phone.'],
    ['The photographs are generated', 'Directed with an image model, then checked against the breed standard. None is a photograph of a real animal, and none is evidence of anything. The diagrams, the spine drawing and the body-condition silhouettes are ours.'],
    ['The figures carry the argument', 'Not the pictures. Every one of them is in the bibliography at the back, which is the part you are meant to check.']
  ]
},

/* ─────────────────────────────────────────────────────────────
   2 · HOW TO USE THIS MANUAL
   ───────────────────────────────────────────────────────────── */
howto: {
  title: 'How to use this manual',
  paras: [
    'Eight parts, in the order a dachshund arrives in a life: what the breed is, how to buy one, the first month, training, the back, health and food, a real life, the last years. Each part ends with a Checkpoint — what you should now be able to do, and the mistakes to avoid. Read it straight through once. After that it is a reference.',

    'Every page is built out of the same handful of blocks, and each one tells you how much weight to put on what it holds. Learn the eight below and you can skim any page in the book and know what you are looking at.',

    'Two sections do not wait their turn: read 5.4 and 5.5 before you need them. The first hour of a disc episode is not the hour to be reading about disc episodes.'
  ],
  modules: [
    ['What the evidence says', 'The badged block. A claim that is genuinely disputed, the study behind it, and a verdict. At most two in a section — if everything is contested, nothing is.'],
    ['Red flag', 'Red list, × markers. The dog is at risk and something has to happen now. If you see one on a page, read it before you finish the page.'],
    ['Green list', 'Black ✓ markers. What good looks like, and what to do rather than what to fear.'],
    ['Tool', 'A numbered instrument — a checklist, a script, a scorecard, a calendar, a log. There are twenty-four, and they are the pages you will print or hand to somebody else.'],
    ['Key figure', 'One number, large, with its source under it. If a figure is worth remembering it is set like this.'],
    ['Matrix / decision', 'A grid or a branch. Read the row that matches your dog, or follow the branch to the end. The highlighted cell is the answer.'],
    ['Phases', 'A numbered sequence with a time or a trigger on each step. Work it in order — in the emergency sections the order is the content.'],
    ['Plate', 'A drawn diagram. Where a plate carries an instruction — how to lift him, what a 4 out of 9 looks like — the instruction is in the text as well.']
  ],
  levels: [
    ['Settled', 'A named body or a body of evidence agrees, and no serious counter-position exists. You can act on it without hedging. Example: AAHA moved leptospirosis to its core vaccine list in 2024, for all dogs regardless of size.'],
    ['Contested', 'Good sources disagree, or a strong finding sits against strong general guidance. Both positions are given with their evidence, and the book says which way it leans and why. Example: the timing of a spay, where AAHA’s small-dog guidance and the dachshund neutering data pull against each other.'],
    ['Myth', 'A claim in wide circulation that the available evidence does not support, or contradicts outright. The block names the claim, then the data. Example: the universal instruction to ban a dachshund from the furniture.']
  ],
  tools: [
    [1, 'Which dachshund do you actually have?', '1.2'],
    [2, 'Color, status, and the question that settles it', '1.3'],
    [3, 'Twelve questions, scored', '1.5'],
    [4, 'The Twenty-Two Questions', '2.3'],
    [5, 'The Health-Testing Ask', '2.4'],
    [6, 'The Kennel Visit Scorecard', '2.6'],
    [7, 'The Kit, Sorted', '3.1'],
    [8, 'The Room-by-Room Sweep', '3.2'],
    [9, 'The Three-Week House Protocol', '3.4'],
    [10, 'The Four-Week Calendar', '3.6'],
    [11, 'The sixty-item exposure list', '4.2'],
    [12, 'The eight-behavior curriculum', '4.3'],
    [13, 'The twelve-week training log', '4.7'],
    [14, 'Reading a crisis', '5.4'],
    [15, 'The first sixty minutes', '5.5'],
    [16, 'The confinement calendar', '5.7'],
    [17, 'The emergency page', '5.8'],
    [18, 'The dachshund year', '6.1'],
    [19, 'The body condition check and the twelve-month log', '6.2'],
    [20, 'The three worked cases', '6.3'],
    [21, 'The ninety-second label check', '6.5'],
    [22, 'The comparison grid, and the questions to ask first', '6.9'],
    [23, 'Three scent games', '7.2'],
    [24, 'The travel and emergency kit', '7.7']
  ]
},

/* ─────────────────────────────────────────────────────────────
   3 · FREQUENTLY ASKED QUESTIONS — 40
   ───────────────────────────────────────────────────────────── */
faq: [

  /* — the back — */
  { q: 'Do all dachshunds get back problems?',
    a: 'No, but the risk is unlike any other breed. Swedish insurance records put lifetime risk at 24.4 percent for miniatures and 13.0 percent for standards, against 3.5 percent across all breeds. A British survey of 2,031 owners found 15.7 percent had already had an episode. Most dachshunds never have one. Section 5.1 explains why those two figures differ.' },

  { q: 'What are the first signs of IVDD in a dachshund?',
    a: 'A dog who will not jump onto furniture he used yesterday, a hunched or arched back, trembling, yelping when lifted, reluctance to turn his head, a wobbly or crossing hind end, or dragging a foot. The change is usually sudden. Section 5.4 walks the whole picture and tells you which signs put you in the car tonight.' },

  { q: 'My dachshund is trembling and will not jump on the couch — is this an emergency?',
    a: 'Treat it as one until a veterinarian says otherwise. Confine him at floor level first, then call — even at nine at night, and even if you are offered a morning appointment. Give nothing from your own medicine cabinet and do not take him out to test him. Section 5.5 is the first-sixty-minutes protocol, with the words to open the call.' },

  { q: 'Can a dachshund recover from IVDD without surgery?',
    a: 'Often, depending on grade. The ACVS reports that dogs with deep pain sensation intact regain walking in 60 to 80 percent of medically managed cases against about 90 percent with surgery; with deep pain absent it is under 10 percent medically against 50 to 60 percent surgically. Conservative management means a minimum of four weeks of strict confinement. Section 5.6.' },

  { q: 'Should I keep my dachshund off the couch?',
    a: 'The evidence does not support the ban. In DachsLife 2015, dogs prevented from using furniture showed a higher reported prevalence of disc disease, not lower — an association, most likely because bans follow diagnoses rather than prevent them. Change the landing instead of the permission: a ramp, a step, a lower sofa. Section 5.2.' },

  { q: 'Are stairs bad for dachshunds?',
    a: 'There is no evidence that they are. DachsLife found a protective trend for stair use that did not reach statistical significance, which means only this: nothing in the largest relevant dataset shows stairs harming dachshund backs, and nothing shows them helping either. Gate them for a puppy who cannot judge them. Section 5.2.' },

  { q: 'Is there a DNA test that tells me if my dachshund will get IVDD?',
    a: 'There is a test, and it cannot do that job. About 93 percent of dachshunds carry two copies of the CDDY variant and the allele frequency is 0.98, so almost every dog tests the same way. Dachshund Health UK explicitly does not recommend it for selection. Ask instead about radiographic back scoring. Section 2.4.' },

  /* — cost and insurance — */
  { q: 'How much does IVDD surgery cost?',
    a: 'The largest single bill in this book. A specialty neurology practice quotes an all-in figure — consult, imaging, surgery, three or four nights, rehabilitation. The procedure alone is a fraction of it; a diagnostic MRI is a line of its own. Those are American figures; price it in your local currency. Section 5.6 breaks the bill into its parts.' },

  { q: 'How much does a dachshund puppy cost?',
    a: 'Four bands, in your local currency, and they overlap. A pet store sits highest, a reputable breeder and an online marketplace overlap across most of their range, and rescue sits well below all three. Dapple carries a premium. Note the overlap: price alone cannot tell a breeder from a broker. Section 2.2.' },

  { q: 'Is pet insurance worth it for a dachshund?',
    a: 'The arithmetic is unusually clear in this breed. Against the average US accident-and-illness premium in NAPHIA’s 2025 report on 2024 data, one surgical episode costs between thirteen and twenty years of premiums. Run the same division on your own quote. Buy it before anything appears on the record. Section 6.9.' },

  { q: 'Does pet insurance cover IVDD?',
    a: 'Modern accident-and-illness policies generally do cover hereditary and breed-linked conditions including IVDD, provided no signs or diagnosis predate the coverage. One published claim example: 80 percent coverage after a deductible returned about 77 percent of the bill. Cover varies by market, so read your own wording. The exclusions that matter are in the waiting periods. Section 6.9.' },

  { q: 'How long is the waiting period on pet insurance?',
    a: 'Longer than the fourteen days you were quoted. At least one major insurer applies a 180-day waiting period to orthopedic conditions and classifies IVDD as orthopedic. An orthopedic exam inside the first fourteen days collapses it. The trap alongside it, in the US model act: signs seen “during any waiting period” count as preexisting. Ask your insurer which clock applies. Section 6.9.' },

  /* — food and weight — */
  { q: 'How much should I feed my dachshund?',
    a: 'Start from resting energy requirement — 70 multiplied by body weight in kilograms to the power 0.75 — then apply a factor: 1.6 for a neutered adult. An 11 lb (5 kg) dog lands near 375 kcal a day, a 16 lb (7 kg) dog near 482, a 25 lb (11 kg) dog near 678. Individual variation runs to plus or minus 50 percent. Section 6.3.' },

  { q: 'How do I know if my dachshund is overweight?',
    a: 'Use the nine-point body condition score, not the scale. Target 4 to 5: ribs easily felt under light pressure, a visible waist from above, a tuck from the side. A 7 out of 9 is roughly 30 percent body fat. Section 6.2 has the hands-on check and a twelve-month log.' },

  { q: 'Will keeping my dachshund thin protect his back?',
    a: 'Probably not, and the reason to do it anyway is strong. DachsLife found no significant association between body condition score and IVDD. But restricting calories by 25 percent added about 1.8 years of median lifespan in a lifetime study of 48 Labradors, and a lean dog is a safer anesthetic risk. Section 6.2.' },

  { q: 'How many treats can a dachshund have per day?',
    a: 'No more than 10 percent of daily calories, which for a 16 lb (7 kg) dachshund is roughly 48 kcal — about the calories in one small commercial biscuit. Everything the dog is paid with during training comes out of that budget, including the cheese the neighbor gives him. Section 6.6.' },

  { q: 'Is grain-free dog food bad for dogs?',
    a: 'Nobody can tell you that honestly yet. The US Food and Drug Administration opened an investigation into a possible link with dilated cardiomyopathy, logged 524 reports between 2014 and 2019, established no causation, issued no recall, and stated on December 23, 2022 that it would publish nothing further without meaningful new science. Section 6.4.' },

  { q: 'Is raw feeding safe for a dachshund?',
    a: 'It carries a documented contamination risk. In a US FDA survey of 196 raw pet food samples, 7.7 percent tested positive for Salmonella and 16.3 percent for Listeria monocytogenes, against zero or minimal in other food types. That is a household risk as well as a dog risk. Section 6.4 sets it against the claimed benefits.' },

  { q: 'What does “AAFCO approved” mean on a dog food bag?',
    a: 'Nothing — there is no such thing. AAFCO is American, has no regulatory authority and approves no product; state feed control officials do the enforcing. The phrase that means something is “complete and balanced,” which requires meeting an AAFCO nutrient profile or passing a feeding trial, for a named life stage. Section 6.5.' },

  /* — training and behavior — */
  { q: 'How do I stop my dachshund barking at everything?',
    a: 'Work out which bark it is first. Most window barking is territorial and is solved by geography — frosted film, a moved sofa, the blind down — not by training. Alert barking at the door needs a taught alternative. This breed was bred to give voice underground, so the target is volume and duration, not silence. Section 4.5.' },

  { q: 'Do dachshunds have “small dog syndrome”?',
    a: 'Not as the phrase is used. Across 8,301 dogs of 49 breeds, reported problem behaviors did rise as height fell — but follow-up work ties that to owner behavior: less shared activity, less consistency, more punitive methods. It is an upbringing effect, not a temperament that comes in the box. Section 4.1.' },

  { q: 'Why won’t my dachshund come when he is called?',
    a: 'Usually because a scent outbid you. This is a dog selected to follow a trail underground and keep going without you. Never repeat the cue, never reel him in on a cue he ignored, and pay recalls before the scent registers rather than after. Section 4.4 builds it against competition.' },

  { q: 'Are dachshunds easy to house-train?',
    a: 'They are slower than average, and most of the difficulty is schedule rather than stubbornness. Outings every one to two waking hours, reward immediately outside, play only after he eliminates, night outings possibly to five months, and eight to twelve weeks accident-free before widening his freedom. Never punish an accident. Section 3.4.' },

  { q: 'Can I leave a dachshund alone all day?',
    a: 'Not eight hours from day one, and not without building it. Absence is trained in seconds and minutes, starting in the first week. Separation-related behavior runs at about 6 percent in the largest canine behavior survey, well below the 20 to 30 percent popular writing quotes — but prevention is cheap either way. Section 3.5.' },

  /* — buying — */
  { q: 'How do I find a good dachshund breeder?',
    a: 'Insist on seeing the puppy with its mother at the place it was whelped — that single condition removes most of the market. Then ask for the parent-club health screens in writing, meet both parents where possible, and read the contract before you pay a deposit. Section 2.3 gives you twenty-two questions and the answers to listen for.' },

  { q: 'What health tests should a dachshund breeder have done?',
    a: 'The AKC parent-club list for the breed is short: patella evaluation, cardiac exam, ophthalmologist evaluation. That is the whole list. Useful DNA tests beyond it include PRA, degenerative myelopathy and — for miniature wirehaireds — Lafora disease. Check it at ofa.org, and ask your own national breed club what it requires. Section 2.4.' },

  { q: 'Is it safe to buy a dachshund puppy online?',
    a: 'It is where the fraud lives. BBB Scam Tracker logged 2,278 puppy scam reports in 2024, and cites FTC data that only 4.8 percent of fraud victims report at all. Those are American counts; the method travels. Photos, videos and video calls do not count as seeing a dog. Section 2.1.' },

  { q: 'What are my rights if the puppy turns out to be sick?',
    a: 'In the United States, twenty-two states have puppy lemon laws: a short window for infectious illness, a longer one for congenital defects — California 15 days and one year, Florida 14 days and one year, Illinois 21 days, Vermont 7 days. They bind dealers, not every hobby breeder, and remedies are usually capped at the purchase price. Elsewhere, ask your consumer law first. Section 2.5.' },

  /* — color and coat — */
  { q: 'What is a tweenie dachshund?',
    a: 'A nickname with no official standing anywhere. The AKC divides by weight: Standard usually 16 to 32 lb (7 to 14.5 kg), Miniature 11 lb (5 kg) and under at 12 months. The Kennel Club registers the two as separate breeds. The FCI uses chest circumference at 15 months and recognizes three sizes. A “tweenie” is simply a dog between them. Section 1.2.' },

  { q: 'Are dapple dachshunds healthy?',
    a: 'A single dapple is an accepted pattern and unremarkable. The problem is dapple bred to dapple, which produces roughly 25 percent double-dapple puppies, and the Dachshund Club of America states these are more likely to carry deafness, reduced eye size or missing eyes. Red dapples can be visually ambiguous, so accidental pairings happen. Section 1.3.' },

  { q: 'Why are blue and Isabella dachshunds controversial?',
    a: 'They are on the DCA’s accepted color list, and the same club warns of thin coats, skin sensitivity, vaccine failures and reduced lifespan. Behind that sits color dilution alopecia — genetic, recessive, with dachshunds explicitly listed as susceptible. The coat is normal at birth and signs start from about six months. No cure. Section 1.3.' },

  { q: 'How much grooming does a dachshund need?',
    a: 'It depends entirely on the coat. A smooth needs a rubber brush and very little. A longhair needs combing two or three times a week, with the feathering behind the ears and elbows as the places mats start. A wirehair needs its jacket managed rather than clipped. Section 7.4.' },

  { q: 'What is hand-stripping, and does my wirehaired dachshund need it?',
    a: 'A wire jacket is a harsh outer coat designed to be plucked rather than cut. Hand-stripping pulls the dead outer hairs out at the root so the follicle grows a new harsh one behind it — usually two or three times a year with tidying between. Clipping softens and fades the coat instead. Section 7.4.' },

  /* — exercise, life, the years — */
  { q: 'How much exercise does a dachshund need?',
    a: 'More than you have been told. DachsLife found higher IVDD risk in dogs walked under thirty minutes a day and lower risk in those walked over an hour. It is an owner survey, so association rather than proof, but it is the only evidence there is and it points away from the short-walk advice. Section 7.1.' },

  { q: 'When should I spay or neuter my dachshund?',
    a: 'This is the one place the guidance genuinely conflicts. AAHA advises castration at six months and spaying before the first heat for dogs under 45 lb (20 kg). Dorn and Seath, on 1,073 dachshunds, found a relative risk of 2.12 for females spayed before twelve months, with no significant difference after. Section 5.3 sets them side by side.' },

  { q: 'How long do dachshunds live?',
    a: 'Longer than most owners plan for, and the sources in this book do not publish a breed-specific figure, so none is quoted here. What is measurable is the lever: a 25 percent calorie restriction added about 1.8 years of median lifespan in a lifetime study of 48 Labradors. Part VIII covers the later years.' },

  { q: 'Can a dachshund live in an apartment?',
    a: 'Yes, and the constraint is noise rather than space. This is a dog bred to bark at things underground, in a building where neighbors share a wall. Plan the barking before you move in, not after the first complaint, and remember the exercise finding — an hour a day is not an apartment-sized amount of walking. Section 7.5.' },

  { q: 'Are dachshunds good with kids?',
    a: 'With children old enough to learn two rules, yes. The rules are that the dog is never woken in his crate and never picked up by a child under ten — a dachshund lifted under the belly with the back end swinging is the single most avoidable household risk to his spine. Sections 1.5 and 3.7.' },

  { q: 'Can I fly with my dachshund in the cabin?',
    a: 'A miniature generally fits, a standard generally does not. Published US carrier caps run roughly 17 to 18.5 inches (43 to 47 cm) long, and most have dropped explicit weight limits, so length decides it. That is reasoning from published dimensions, not an airline statement about the breed — check your own carrier before booking. Section 7.6.' },

  { q: 'How hot is too hot to walk my dachshund?',
    a: 'The AVMA gives no number, only the rule that if you are warm the dog is much warmer, and that grass beats pavement on hot days. Ignore the seven-second hand test; it is not from the AVMA. The real risk is the walk itself: 74.2 percent of heatstroke episodes are exercise-induced and only 5.2 percent involve a car. Section 7.6.' }

],

/* ─────────────────────────────────────────────────────────────
   4 · TOXIC DOSES
   ───────────────────────────────────────────────────────────── */
toxic: {
  intro: 'These are the doses the Merck Veterinary Manual gives for the toxic principle, not for the food it sits in — which is why the type of chocolate matters more than the size of the bar. The worked example throughout is a 16 lb dachshund, which is 7.3 kg, sitting in the middle of the standard range. Scale it for your own dog before you need it, write the number on the fridge, and call your own poison line before you drive rather than from the parking lot.',
  rows: [
    ['Milk chocolate',
     '64 mg theobromine per oz. Mild GI signs from 20 mg/kg — about 2.3 oz for a 16 lb dog. Cardiotoxic 40–50 mg/kg; seizures at 60 and above.',
     'Vomiting, diarrhea and thirst first; then racing or irregular heart rate; then tremors and seizures at the top of the range.',
     'Signs typically within hours of ingestion.'],

    ['Dark, semisweet and baker’s chocolate',
     'Semisweet and dark 150–160 mg per oz. Unsweetened baker’s 440 mg per oz — a 16 lb dog reaches the mild-GI threshold on under 0.4 oz.',
     'The same progression as milk chocolate, reached on a fraction of the quantity. A single baking square is a serious exposure in this breed.',
     'Signs typically within hours of ingestion.'],

    ['Xylitol',
     'Hypoglycemia above 100 mg/kg. Liver injury above 500 mg/kg. Hidden in sugar-free peanut butter, mints, chewable vitamins and some liquid gabapentin formulations.',
     'Collapse from low blood sugar, then in the worse cases liver failure. Of dogs showing signs of liver injury, 62.5 percent died or were euthanized.',
     'Hypoglycemia within 30 minutes, or delayed 12–18 hours with gum.'],

    ['Grapes and raisins',
     'More than one grape or raisin per 10 lb of dog may carry enough tartaric acid to pose a risk — so roughly two for a 16 lb dachshund.',
     'Vomiting and diarrhea first, then acute kidney failure. The dose-response is unpredictable, which is why the threshold is set so low.',
     'GI signs 6–12 hours; renal failure 24–72 hours.'],

    ['Onion and garlic',
     'Clinical signs produced at 15–30 g/kg of raw onion. Cooked, powdered and dehydrated forms all count, which is how leftovers and baby food get people.',
     'Destruction of red blood cells. Pale gums, weakness, dark urine, collapse — and by then the exposure is days behind you.',
     'Hemolysis typically 3–5 days after exposure. The delay is why owners miss the cause.'],

    ['Macadamia nuts',
     'Signs reported after 2.4 g/kg — a small handful for a dog this size.',
     'Weakness, especially in the hind legs, tremors, vomiting and fever. Alarming to watch and rarely dangerous.',
     'Onset within 12 hours, resolving in 12–48 hours. Prognosis good.']
  ],
  hotlines: [
    ['ASPCA Animal Poison Control Center · United States', '(888) 426-4435', 'Consultation fee about $95'],
    ['Pet Poison Helpline · United States', '(855) 764-7661', '$89, follow-up calls included']
  ],
  note: 'Call first, then travel. The two lines above are American — elsewhere, find your own poison line before tonight. All run 24 hours, give a case number your veterinarian can use, and would rather talk you out of a drive than have you arrive without a history. Have the packaging in your hand, the dog’s current weight, and the time of ingestion. One item on this table deserves a second look if your dog has a disc history: xylitol appears in some liquid gabapentin formulations, and gabapentin is one of the drugs most often sent home after an IVDD diagnosis. Ask the pharmacy which formulation you are being given. Nothing here is a reason to induce vomiting at home — that decision belongs to the person on the phone.'
},

/* ─────────────────────────────────────────────────────────────
   5 · GLOSSARY — 25
   ───────────────────────────────────────────────────────────── */
glossary: [
  ['IVDD', 'Intervertebral disc disease — degeneration of the cushioning discs between the vertebrae, which can bulge or extrude into the spinal canal and press on the cord, producing pain, weakness or paralysis.'],
  ['Chondrodystrophy', 'A skeletal condition in which the long bones stop growing early, producing the short, curved legs that define this breed and several others — and, in the same dogs, premature degeneration of the spinal discs.'],
  ['FGF4 / CDDY', 'The retrogene insertion identified by Brown and colleagues as the cause of both chondrodystrophy and early disc degeneration; roughly 93 percent of dachshunds carry two copies, with an allele frequency of 0.98.'],
  ['Hemilaminectomy', 'The commonest surgical decompression for disc extrusion in this breed: a window is cut in the side of the vertebral arch so the extruded disc material can be removed from the spinal canal.'],
  ['Deep pain sensation', 'The deepest reflex pathway the spinal cord carries, tested by firm pressure on a toe; its presence or absence is the single strongest predictor of whether a paralyzed dog will walk again.'],
  ['Conservative management', 'Non-surgical treatment of a disc episode — a minimum of four weeks of strict confinement, leashed bathroom breaks only, a harness rather than a collar, and medication for pain and inflammation.'],
  ['Body condition score', 'A nine-point visual and hands-on assessment of fat cover, on which 4 to 5 is the target and 7 corresponds to roughly 30 percent body fat; it replaces the bathroom scale as the working measure.'],
  ['RER and MER', 'Resting energy requirement, calculated as 70 multiplied by body weight in kilograms to the power 0.75, and maintenance energy requirement, which multiplies it by a life-stage factor — 1.6 for a neutered adult.'],
  ['AAFCO', 'The Association of American Feed Control Officials, which writes the nutrient profiles and feeding-trial protocols used on pet food labels in the United States, but has no regulatory authority and approves nothing.'],
  ['Guaranteed analysis', 'The panel on a pet food bag giving minimum crude protein and fat and maximum crude fiber and moisture; “crude” describes the analytical method used, not the quality of the ingredient.'],
  ['AKC', 'The American Kennel Club, the principal US registry — it writes its own breed standard, runs events and operates breeder programs, and it classifies dachshunds by weight into two divisions.'],
  ['Kennel Club (The)', 'The principal UK registry — it registers Miniature and Standard dachshunds as separate breeds, on separate registers, rather than as two divisions of one breed as the AKC does.'],
  ['FCI', 'The Fédération Cynologique Internationale, the international federation of kennel clubs, which classifies dachshunds by chest circumference at 15 months into three sizes: Standard, Miniature and Rabbit.'],
  ['OFA', 'The Orthopedic Foundation for Animals, the US registry that collects and publishes health screening results submitted by breeders; searchable by dog at ofa.org.'],
  ['CHIC', 'The Canine Health Information Center, a database run with OFA that issues a number to a dog once its parent club’s required screens have been completed and the results made public — the results, not the outcomes, are what it certifies.'],
  ['Breeder of Merit', 'An AKC participation credential requiring five years in AKC events, club membership, titles on at least four dogs bred, certification that parent-club health screens are performed, and full registration of puppies — not an independent health audit.'],
  ['USDA licensed breeder', 'A breeder required to hold a US federal license because they keep more than four breeding females and sell sight-unseen; anyone selling face to face is exempt at any scale, so the license marks commercial volume rather than quality.'],
  ['Lemon law', 'In the United States, a state pet purchaser protection act giving a buyer a remedy — refund, exchange or veterinary reimbursement — when a puppy is found ill or defective within a set window; twenty-two states have one.'],
  ['Preexisting condition', 'In insurance, any condition for which a veterinarian gave advice, the pet received treatment, or the pet showed signs, before the policy’s effective date or during any waiting period.'],
  ['Waiting period', 'The interval after purchase during which a new policy pays nothing for a given category; illness waits are usually short, but at least one insurer applies 180 days to orthopedic conditions and classifies IVDD among them; ask yours which applies.'],
  ['Benefit schedule', 'A reimbursement method that pays a fixed amount per condition or procedure rather than a percentage of the actual bill, leaving the owner to cover the difference when local prices run higher.'],
  ['Dapple', 'The pattern known elsewhere as merle — irregular lighter patches over the base color; accepted by the DCA, and the one pattern in which blue eyes do not disqualify a dog in the show ring.'],
  ['Double dapple', 'The result of breeding dapple to dapple, producing roughly 25 percent double-dapple puppies, which the DCA states are more likely to carry deafness, reduced eye size or missing eyes.'],
  ['Piebald', 'A pattern of white areas over the base color, accepted by the DCA — but a piebald with partially or wholly blue eyes, a head more than 50 percent white, or white around the eyes or ears is disqualified.'],
  ['Hand-stripping', 'The grooming method for a wire coat, in which dead outer hairs are pulled out at the root a few at a time so the follicle produces a new harsh hair, keeping the jacket crisp and correctly colored.']
],

/* ─────────────────────────────────────────────────────────────
   6 · CONTACTS — 19
   ───────────────────────────────────────────────────────────── */
contacts: [
  ['Before you need it', 'Your own three numbers',
   'Find the veterinary poison line that covers where you live, the emergency clinic that answers at night, and the nearest referral center with a neurologist. Do it this week, while nothing is wrong, and save all three in your phone under names you can find at two in the morning.'],

  ['Emergency · United States', 'ASPCA Animal Poison Control Center',
   '(888) 426-4435 · consultation fee about $95 · 24 hours. Call the moment you know what he ate and roughly how much, before you get in the car.'],

  ['Emergency · United States', 'Pet Poison Helpline',
   '(855) 764-7661 · $89 including follow-up calls · petpoisonhelpline.com. The same job as the ASPCA line at a fixed fee; use whichever answers first.'],

  ['Emergency · United Kingdom', 'Animal PoisonLine',
   '01202 509 000 · 24 hours · animalpoisonline.co.uk. Operated by the Veterinary Poisons Information Service, and charged per call: £35 from 8 a.m. to 8 p.m. Monday to Friday, £45 at every other hour.'],

  ['Emergency · Australia', 'Animal Poisons Helpline',
   '1300 869 738 · 24/7 · animalpoisons.com.au. Call with the packaging in your hand, before you get in the car.'],

  ['Emergency · New Zealand', 'Animal Poisons Helpline',
   '0800 869 738 · 24/7. The same service that answers the Australian line, on a New Zealand number.'],

  ['Emergency · elsewhere', 'Ireland, Canada and anywhere else',
   'We could not find a dedicated national animal poison line for Ireland or for Canada. Ask your own veterinarian which service they call out of hours, and write the number in this margin.'],

  ['Registries and standards', 'American Kennel Club',
   'akc.org · breed standard at images.akc.org/pdf/breeds/standards/Official_Standard_Dachshund.pdf. For the written standard, the weight divisions, and to check whether a breeder’s claimed credentials exist.'],

  ['Registries and standards', 'The Kennel Club',
   'The principal UK registry. Miniature and Standard dachshunds are registered here as two separate breeds, on separate registers — so what is a class division at the AKC is a breed of its own.'],

  ['Registries and standards', 'Fédération Cynologique Internationale',
   'fci.be · standard 148 at fci.be/nomenclature/Standards/148g04-en.pdf. The standard most of the rest of the world works to: chest circumference at 15 months, and three sizes rather than two.'],

  ['Registries and standards', 'Dachshund Club of America',
   'dachshundclubofamerica.org · colors and patterns at dachshundclubofamerica.org/wp-content/uploads/2022/02/Dachshund-Colors-and-Patterns.pdf. The US parent club, and the authority to quote back at a seller pricing a double dapple as a rarity.'],

  ['Health screening', 'Orthopedic Foundation for Animals',
   'ofa.org, the US screening database. Search a named dog before you buy and confirm the parent-club screens directly — do not accept a printed list from a breeder or from any book, including this one.'],

  ['Health screening', 'Dachshund Health UK (IVDD resource)',
   'dachshund-ivdd.uk. The best English-language resource on disc disease anywhere: the clinical grading scale, the lifestyle findings, and why the CDDY DNA test is not a selection tool.'],

  ['Preventive care', 'American Animal Hospital Association',
   'aaha.org/resources/2022-aaha-canine-vaccination-guidelines/. American guidelines, and the ones most often quoted — check what core means where you live before you decline anything.'],

  ['Preventive care', 'American Heartworm Society',
   'heartwormsociety.org/heartworms-in-dogs. Heartworm is diagnosed in all fifty US states; this is where the year-round prevention and the six-month, twelve-month, annual testing schedule come from. Whether it reaches your own region is a local question.'],

  ['Preventive care', 'Companion Animal Parasite Council',
   'capcvet.org/guidelines/general-guidelines/. Year-round broad-spectrum parasite guidance, fecal testing frequency, and regional parasite maps for wherever you are traveling.'],

  ['Behavior and training', 'American Veterinary Society of Animal Behavior',
   'avsab.org. The position statements on humane training and on puppy socialization — print both and hand them to any trainer who proposes a prong or electronic collar.'],

  ['Rescue and rehoming · United States', 'Dachshund Rescue of North America',
   'drna.org/Adoption_Process. Placement network across the United States; adoption fees run $350 under a year, $275 for one to seven years, and $150 for eight and over.'],

  ['Rescue and rehoming · United States', 'Coast to Coast Dachshund Rescue',
   'c2cdr.org/adoption-information. Fees from $400 under a year down to $200 for eight and over, covering exam, vaccines, spay or neuter, parasite and heartworm treatment and microchip.']
],

/* ─────────────────────────────────────────────────────────────
   7 · QUIZ ANSWERS
   ───────────────────────────────────────────────────────────── */
answers: [
  { part: 'I', items: [
    'The AKC sorts by <strong>weight</strong> into two: Standard usually 16 to 32 lb (7 to 14.5 kg), Miniature 11 lb (5 kg) and under at 12 months. The Kennel Club does neither — two separate breeds. The FCI sorts by <strong>chest circumference at 15 months</strong> into three: Standard, Miniature, Rabbit. Rabbit is an FCI size; neither the AKC nor The Kennel Club recognizes it.',
    'You leave. Dapple bred to dapple produces roughly 25 percent double-dapple puppies, and the DCA states those dogs are more likely to carry deafness, reduced eye size or missing eyes. Offering that as a selling point tells you what you needed to know.',
    'False. In DachsLife 2015 the dogs prevented from using furniture showed a <em>higher</em> reported prevalence of disc disease — an association rather than a cause, most likely because the ban follows the diagnosis. The finding with a usable direction was exercise.'
  ]},

  { part: 'II', items: [
    'That she sells sight-unseen and at volume. Under the US rules, breeders with four or fewer breeding females are exempt from licensing, and so is anyone who sells face to face at any scale; needing the license means neither exemption applies.',
    'Whether you can see the puppy with its mother at the place it was whelped. Price cannot separate them — whatever your currency, the breeder band and the online marketplace band overlap across most of their range.',
    '93 percent of dachshunds carry two copies of the CDDY variant and the allele frequency is 0.98, so the test cannot rank dogs and Dachshund Health UK advises against using it for selection. There is also no dataset, in any country, that could establish an IVDD-free line.'
  ]},

  { part: 'III', items: [
    'Under 0.4 of an ounce. Baker’s chocolate carries 440 mg of theobromine per ounce against 64 mg in milk chocolate, and the mild-GI threshold is 20 mg/kg for a 7.3 kg dog. Call the poison line with the wrapper in your hand before you drive.',
    'No. The standard is eight to twelve weeks with no accidents, and then one room at a time. Three clean weeks means the schedule is working, not that the dog is finished.',
    'False, or at least unproven. Buy the ramp for his joints and your carpet — DachsLife found a furniture ban associated with <em>higher</em> risk and stair use a protective trend that never reached significance.'
  ]},

  { part: 'IV', items: [
    'AVSAB holds that socialization begins before the vaccine series is complete and calls that the standard of care; class can start at seven to eight weeks with one vaccination seven days prior. Manage the infectious risk by location, not by delay.',
    'Stand still, give your trade cue, produce something better and pay him. Chasing him is what guarantees he swallows it — it turns theft into a game a fast, low dog always wins.',
    'Do not repeat the cue and never reel him in on a cue he ignored; shorten the line and go back to easier ground. That is evidence you raised the difficulty a stage too early, not disobedience.'
  ]},

  { part: 'V', items: [
    'Almost none of it is possible. Roughly 93 percent of dachshunds carry two copies of the FGF4 retrogene and the allele frequency is 0.98, and Dachshund Health UK does not recommend the test for selection. Ask instead whether either parent has been X-rayed for spinal calcification.',
    'Confine him at floor level first, then call tonight and open with the words in Tool 15 — suspected acute IVDD, still walking, onset at this time. Give him nothing from your own medicine cabinet, do not take him out to assess him, and make the call even if you are offered a morning appointment.',
    'That you would like to discuss timing rather than whether, and that Dorn and Seath reported a relative risk of 2.12 for females spayed before twelve months with no significant difference after. You are not claiming AAHA is wrong — its guidance covers all small dogs and balances other risks.'
  ]},

  { part: 'VI', items: [
    'The adequacy statement is the meaningful half: “complete and balanced” requires meeting an AAFCO nutrient profile or passing a feeding trial, and names a life stage. “AAFCO approved” does not exist — AAFCO has no regulatory authority and approves nothing.',
    'It supports getting him to a 4 or 5: restricting calories by 25 percent added about 1.8 years of median lifespan in 48 Labradors. It does not support the spine claim — DachsLife found no significant association between body condition and IVDD.',
    'Booked the orthopedic examination that collapses a 180-day orthopedic waiting period, inside the first fourteen days. The preexisting-condition definition decides the claim: advice, treatment or signs before the effective date <em>or during any waiting period</em>.'
  ]},

  { part: 'VII', items: [
    'DachsLife found higher IVDD risk in dogs exercised under thirty minutes a day and lower risk over an hour — the opposite direction from the advice. The caveat is that it is a British owner survey: association, not causation, and a dog with a sore back is walked less.',
    'Not the car. Only 5.2 percent of heatstroke episodes are vehicle-related while 74.2 percent are exercise-induced. Skip the walk, take him out to eliminate and come back in, and move the real outing to after dark — he will not stop on his own.',
    'Published US carrier caps run roughly 17 to 18.5 inches (43 to 47 cm) long and most airlines have dropped weight limits, so length decides it and a standard generally does not fit. That is arithmetic from published dimensions, not an airline statement — check your own carrier before booking.'
  ]},

  { part: 'VIII', items: [
    'Age explains nothing on its own, and a new reluctance is a clinical finding — dental disease and joints are the usual culprits, and both are treatable. This month: weigh him, run your hands over the topline and hindquarters, lift the lip, film him walking, and ask your veterinarian directly whether he is in pain.',
    'DachsLife found dogs prevented from using furniture at higher risk of disc disease, not lower, so a blanket ban has no support behind it. The better plan is a controlled route — a low, wide, grippy ramp taught with food, a lower bed, runners on slick floors and short nails.',
    'Well: ask your veterinarian for a quality-of-life scale, score it weekly and write it down, and set your limits in plain language on an ordinary afternoon. Badly: making the decision for the first time at eleven at night in an emergency room, with no scale, no record and no limits agreed in advance.'
  ]}
],

/* ─────────────────────────────────────────────────────────────
   8 · SOURCES
   ───────────────────────────────────────────────────────────── */
sources: [

  { group: 'Breed standard and registries', items: [
    'American Kennel Club, “Official Standard of the Dachshund.” https://images.akc.org/pdf/breeds/standards/Official_Standard_Dachshund.pdf',
    'Fédération Cynologique Internationale, “FCI Standard No. 148 — Dachshund.” https://www.fci.be/nomenclature/Standards/148g04-en.pdf',
    'The Kennel Club, breed standard, Dachshund (Miniature Smooth-Haired). https://www.royalkennelclub.com/breed-standards/hound/dachshund-miniature-smooth-haired',
    'Dachshund Club of America, “Dachshund Colors and Patterns,” 2022. https://www.dachshundclubofamerica.org/wp-content/uploads/2022/02/Dachshund-Colors-and-Patterns.pdf',
    'American Kennel Club, “Most Popular Dog Breeds of 2025.” https://www.akc.org/expert-advice/dog-breeds/most-popular-dog-breeds-2025/',
    'American Kennel Club, “Hound Group Health Testing Requirements.” https://www.akc.org/breeder-programs/breed-health-testing-requirements/hound-group-health-testing-requirements/',
    'American Kennel Club, “AKC Breeder of Merit Program.” https://www.akc.org/breeder-programs/akc-breeder-of-merit-program/',
    'VCA Animal Hospitals, “Color Dilution Alopecia in Dogs.” https://vcahospitals.com/know-your-pet/color-dilution-alopecia-in-dogs'
  ]},

  { group: 'Disc disease', items: [
    'Bergknut, N., et al., lifetime risk of intervertebral disc disease in insured Swedish dogs, 2012. Miniature 24.4%, standard 13.0%, all breeds 3.5%.',
    'DachsLife 2015, 2,031 owners, analyzed at the Royal Veterinary College, Canine Genetics and Epidemiology, 2016. https://link.springer.com/article/10.1186/s40575-016-0039-8',
    'Dachshund Health UK, “Lifestyle advice” — the DachsLife findings on exercise, furniture, stairs and body condition. https://www.dachshund-ivdd.uk/lifestyle-advice/',
    'American College of Veterinary Surgeons, “Intervertebral Disc Disease.” https://www.acvs.org/small-animal/intervertebral-disc-disease/',
    'Brown, E. A., et al., FGF4 retrogene as the cause of chondrodystrophy and intervertebral disc disease in dogs, PNAS, 2017.',
    'Dachshund Health UK, “Clinical IVDD grading scale.” https://www.dachshund-ivdd.uk/symptoms-treatment/clinical-diagnosis/clinical-ivdd-grading-scale/',
    'Dachshund Health UK, “DNA test for IVDD” — why the UC Davis CDDY test is not recommended for selection. https://www.dachshund-ivdd.uk/screening-for-ivdd/dna-test-for-ivdd/',
    'Dorn, M., and Seath, I. J., neuter status as a risk factor for intervertebral disc herniation in dachshunds, 1,073 dogs, Canine Genetics and Epidemiology, 2018. https://link.springer.com/article/10.1186/s40575-018-0067-7',
    'Remedy Veterinary Specialists, conservative management of IVDD — confinement, duration and medication. https://www.remedyvets.com/conservative-ivdd',
    '“Breeders in the US that X-ray for spinal calcification in dachshunds,” youdidwhatwithyourweiner.com. https://youdidwhatwithyourweiner.com/breeders-in-the-us-that-x-ray-for-spinal-calcification-in-dachshunds/',
    'Dachshund Health UK, “Update on the Nordic countries’ IVDD reduction programmes” — mandatory screening in Denmark and Finland, recommended in Norway, voluntary in Sweden. https://www.dachshundhealth.org.uk/welcome/update-on-the-nordic-countries-ivdd-reduction-programmes'
  ]},

  { group: 'Costs and insurance', items: [
    'Synchrony, 2025 Average Procedural Cost Study, published via CareCredit — MRI, CT, emergency exam, bloodwork, hospitalization, spay, neuter and dental figures. https://www.carecredit.com/vetmed/costs/',
    'University of Missouri Veterinary Health Center, Neurology and Neurosurgery FAQs. https://vhc.missouri.edu/small-animal-hospital/neurology-neurosurgery/faqs/',
    'Southeast Veterinary Neurology, “IVDD surgery cost” — the $10,000–$15,000 all-in figure. https://sevneurology.com/blog/ivdd-surgery-cost',
    'PetMD (veterinarian-reviewed), “Spinal Surgery in Dogs.” https://www.petmd.com/dog/procedure/spinal-surgery-in-dogs',
    'Synchrony, Pet Lifetime of Care Study, 2025 — lifetime cost $22,125–$60,602 against an owner estimate of $8,000. https://www.synchrony.com/contenthub/newsroom/new-synchrony-study-finds-nearly-8-out-of-10-pet-owners.html',
    'Rover, Cost of Pet Parenthood 2025. https://www.rover.com/blog/press-release/cost-of-pet-parenthood-2025/',
    'NAPHIA, State of the Industry 2025 (data year 2024) — average dog accident-and-illness premium $749.29 a year. https://naphia.org/industry-data/',
    'National Association of Insurance Commissioners, Pet Insurance Model Act #633 — preexisting condition, waiting period and disclosure definitions. https://content.naic.org/sites/default/files/model-law-633.pdf',
    'Embrace Pet Insurance, “What is the waiting period for orthopedic conditions?” — the 180-day orthopedic clock and the exam that collapses it. https://www.embracepetinsurance.com/help/article/what-is-the-waiting-period-for-orthopedic-conditions',
    'Healthy Paws, hereditary and congenital conditions in pets, with a worked claim example. https://www.healthypawspetinsurance.com/hereditary-and-congenital-conditions-in-pets.html',
    'California Department of Insurance, pet insurance consumer guide, 2023 — reimbursement on benefit schedules and usual and customary charges. https://www.insurance.ca.gov/01-consumers/105-type/95-guides/15-gen/upload/Pet-Insurance-Updated-062623.pdf'
  ]},

  { group: 'Preventive care', items: [
    'American Animal Hospital Association, 2022 Canine Vaccination Guidelines, updated 2024. https://www.aaha.org/resources/2022-aaha-canine-vaccination-guidelines/',
    'AAHA NEWStat, “Leptospirosis vaccination recommended to be core for most dogs,” 2024. https://www.aaha.org/newstat/publications/leptospirosis-vaccination-recommended-to-be-core-for-most-dogs/',
    'Animal Legal and Historical Center, Table of State Rabies Vaccination Laws. https://www.animallaw.info/topic/table-rabies-vaccination-laws',
    'Companion Animal Parasite Council, General Guidelines — year-round broad-spectrum control and fecal testing frequency. https://capcvet.org/guidelines/general-guidelines/',
    'American Heartworm Society, “Heartworms in Dogs” — all fifty states, and the 6-month, 12-month, annual testing schedule. https://www.heartwormsociety.org/heartworms-in-dogs',
    'American Animal Hospital Association, 2019 Canine Life Stage Guidelines — spay and neuter timing for dogs under 45 lb. https://www.aaha.org/resources/life-stage-canine-2019/spay-and-neuter-timing/',
    'American Veterinary Dental College, “Dental Scaling Without Anesthesia.” https://avdc.org/PDF/Dental_Scaling_Without_Anesthesia.pdf',
    'Pet microchipping laws by state. https://petregistrationandrecovery.com/resources/microchip-guides/pet-microchipping-laws-by-state-is-it-required-where-you-live'
  ]},

  { group: 'Nutrition and toxicology', items: [
    'Pet Nutrition Alliance, RER and MER calculation and life-stage factors. https://petnutritionalliance.org/wp-content/uploads/2023/03/MER.RER_.PNA_.pdf',
    'VCA Animal Hospitals, “Body Condition Scores” — the nine-point scale. https://vcahospitals.com/know-your-pet/body-condition-scores',
    'Tufts Petfoodology, “Treat options for dogs and cats without unbalancing their diet,” 2021 — the 10 percent rule. https://sites.tufts.edu/petfoodology/2021/10/21/treat-options-for-dogs-and-cats-without-unbalancing-their-diet/',
    'Kealy, R. D., et al., effects of diet restriction on lifespan in dogs, 48 Labradors, lifetime study, 2002. https://pubmed.ncbi.nlm.nih.gov/11991408/',
    'AAFCO, “AAFCO’s role” — no regulatory authority, no product approval. https://www.aafco.org/consumers/understanding-pet-food/aafcos-role/',
    'US Food and Drug Administration, “Complete and Balanced Pet Food” — adequacy statements, guaranteed analysis, ingredient order. https://www.fda.gov/animal-veterinary/animal-health-literacy/complete-and-balanced-pet-food',
    'US Food and Drug Administration, “Get the Facts: Raw Pet Food Diets Can Be Dangerous to You and Your Pet” — 196 samples, 7.7% Salmonella, 16.3% Listeria. https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet',
    'US Food and Drug Administration, investigation into a potential link between certain diets and canine dilated cardiomyopathy; last public statement December 23, 2022. https://www.fda.gov/animal-veterinary/outbreaks-and-advisories/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
    'Merck Veterinary Manual, toxic doses for chocolate, xylitol, grapes and raisins, onion and garlic, and macadamia nuts.',
    'Merck Veterinary Manual, gastric dilatation and volvulus in small animals — the at-risk breed list, which does not include dachshunds. https://www.merckvetmanual.com/digestive-system/surgical-problems-of-the-gastrointestinal-tract-in-small-animals/gastric-dilation-and-volvulus-in-small-animals',
    'Pet Poison Helpline. https://www.petpoisonhelpline.com/',
    'FEDIAF, Nutritional Guidelines — the European reference for “complete and balanced,” self-regulatory rather than statutory. https://europeanpetfood.org/self-regulation/nutritional-guidelines/',
    'Animal PoisonLine (United Kingdom) and the Animal Poisons Helpline (Australia and New Zealand) — the national services listed in Appendix E. https://www.animalpoisonline.co.uk/ · https://www.animalpoisons.com.au/contact/'
  ]},

  { group: 'Behavior and training', items: [
    'American Veterinary Society of Animal Behavior, Humane Dog Training Position Statement, 2021. https://avsab.org/wp-content/uploads/2021/08/AVSAB-Humane-Dog-Training-Position-Statement-2021.pdf',
    'Aversive-based training and companion dog welfare — lip licking, salivary cortisol and cognitive bias in dogs from aversive and reward-based schools, PLOS ONE. https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0225023',
    'American Veterinary Society of Animal Behavior, Position Statement on Puppy Socialization. https://avsab.org/wp-content/uploads/2018/03/Puppy_Socialization_Position_Statement_Download_-_10-3-14.pdf',
    'VCA Animal Hospitals, “House Training Your Puppy.” https://vcahospitals.com/know-your-pet/house-training-your-puppy',
    'Salonen, M., et al., prevalence and comorbidity of canine anxiety in 13,715 pet dogs, Scientific Reports, 2020. https://www.nature.com/articles/s41598-020-59837-z',
    'McGreevy, P., et al., dog behavior co-varies with height, bodyweight and skull shape, C-BARQ, 8,301 dogs across 49 breeds, PLOS ONE. https://journals.plos.org/plosone/article?id=10.1371%2Fjournal.pone.0080529',
    'Arhant, C., et al., behaviour of smaller and larger dogs — training methods, inconsistency of owner behaviour and level of engagement, Applied Animal Behaviour Science. https://www.sciencedirect.com/science/article/abs/pii/S0168159110000262',
    'Expert-panel consensus definition of canine resource guarding, 85 experts, Frontiers in Veterinary Science, 2018. https://www.frontiersin.org/journals/veterinary-science/articles/10.3389/fvets.2018.00115/full',
    '“Let me sniff!” — nosework and judgement bias in pet dogs. https://psychology.barnard.edu/sites/default/files/inline-files/Let%20me%20sniff.pdf',
    'Heatstroke in dogs under primary veterinary care, VetCompass, 1,259 episodes among 905,543 dogs, Animals. https://www.mdpi.com/2076-2615/10/8/1324',
    'American Veterinary Medical Association, cold weather animal safety. https://www.avma.org/resources-tools/pet-owners/petcare/cold-weather-animal-safety'
  ]},

  { group: 'Buying and consumer law', items: [
    'USDA/APHIS regulations for dog breeders, licensing thresholds and the face-to-face exemption, 2022 update. https://www.akc.org/wp-content/uploads/2022/03/USDAAPHIS-Regulations-Information_2022-update-two-sided1.pdf',
    '“10 US states now ban the sale of puppy mill puppies in pet shops,” humaneaction.org, 2026 — plus 530 localities in 31 states. https://humaneaction.org/blog/2026/08/big-win-10-us-states-now-ban-sale-puppy-mill-puppies-pet-shops',
    'Animal Legal and Historical Center, Table of Pet Purchaser Protection Acts — the twenty-two state puppy lemon laws. https://www.animallaw.info/topic/table-pet-purchaser-protection-acts',
    'BBB Scam Tracker, Puppy Scams — 2025 study update, with 2022–2025 report counts and median losses. https://www.bbb.org/all/scamstudies/puppy-scams/2025-study-update-puppy-scams',
    'iHeartDogs, cost of a dachshund puppy by US region, March 2026, updated September 2026. https://iheartdogs.com/cost-of-a-daschund-puppy-by-us-region/',
    'Embark, genetic health testing for dachshunds — the available DNA panel. https://embarkvet.com/resources/genetic-health-testing-for-dachshunds/',
    'Dachshund Rescue of North America, adoption process and fee schedule. https://www.drna.org/Adoption_Process',
    'Coast to Coast Dachshund Rescue, adoption information and fee schedule. https://www.c2cdr.org/adoption-information',
    'US Department of Justice, ADA service animal FAQs — service animals, emotional support animals, and the two questions staff may ask. https://www.ada.gov/resources/service-animals-faqs/'
  ]}

]

};
