/* ═══════════════════════════════════════════════════════════════
   PART VI — HEALTH, FOOD AND WEIGHT
   Sections 6.1 – 6.9 · 19 pages · Tools 18, 19, 20, 21, 22
   ═══════════════════════════════════════════════════════════════ */

module.exports = [

/* ───────────────────────── 6.1 ───────────────────────── */
{ id:'6.1', title:'The year in health care', sub:'six fixed points, and memory holds five', pages:3, blocks:[

  {t:'first',text:'A dachshund’s medical year has about six fixed points, and most owners run them from memory. That is how a leptospirosis booster slides by eighteen months, and how a rabies certificate turns out to have expired the week a boarding kennel asks to see it.'},

  {t:'tiles',title:'Three fixed points to start from',items:[
    ['2024','The year leptospirosis moved to core','AAHA, for all dogs regardless of breed or size.'],
    ['50 of 50','US states with diagnosed heartworm','American Heartworm Society.'],
    ['6 · 12 · annual','The heartworm testing cadence','Months, months, then every year for life.']
  ]},

  {t:'p',text:'Three bodies publish the schedules here: the American Animal Hospital Association for canine vaccination (2022, updated 2024), the Companion Animal Parasite Council for parasites, the American Heartworm Society for heartworm. Your country may run a different schedule; know what the tailoring departs from.'},

  {t:'h3',text:'What “core” means now'},

  {t:'cards',title:'Core, and everything else',items:[
    ['CORE · EVERY DOG','DAP or DAPP, <em>Leptospira</em>, rabies','Core means every dog, not every dog with a particular lifestyle.|Rabies is given, in AAHA’s own phrase, “as required by law.”|The core three are not a conversation.',''],
    ['BY EXPOSURE · A JUDGMENT CALL','Kennel cough, canine influenza, Lyme, rattlesnake','The list differs by region and by what your dog actually does.|Those are worth a conversation.','b']
  ]},

  {t:'evidence',badge:'settled',paras:[
    'For years leptospirosis was noncore. It went to dogs who swam, hunted or lived rurally, and it was routinely skipped for small dogs in cities — which is to say, for most dachshunds.',
    'In 2024 AAHA moved it to core <strong>for all dogs, regardless of breed or size</strong>. The stated reasons were rising prevalence, urban exposure, and the fact that the disease is zoonotic: it moves from dog to person.',
    'So if your dog’s record shows DAPP and rabies and nothing else, that record is not wrong. It is out of date. Raise it at the next visit rather than treating it as an emergency.'
  ],source:'AAHA 2022 Canine Vaccination Guidelines, updated 2024 · AAHA NEWStat, leptospirosis recommended as core for most dogs'},

  {t:'h3',text:'The puppy series, and why it is a series'},

  {t:'steps',items:[
    ['6–16 weeks','DAPP, at least three doses','Two to four weeks apart, with the last dose at sixteen weeks or later. The series is not three shots because three is lucky. It is three because maternal antibody blocks the vaccine for an unknown number of weeks, and nobody knows which dose was the one that took.','×3 DOSES'],
    ['From 12 weeks','Leptospira, two doses','Two to four weeks apart. This is the one most likely to be missing from a puppy bought before 2024.','×2 DOSES'],
    ['3–6 months','Rabies','Four months is the commonest first dose. Local law governs the age and the interval, not your veterinarian’s preference.','LOCAL LAW'],
    ['Within 1 year','Boost DAPP and Leptospira','Then DAPP every three years for life; leptospirosis every year, without exception.','THEN FOR LIFE']
  ]},

  {t:'h3',text:'Rabies is local law, and it varies'},

  {t:'keyfig',title:'One country, no single rule',items:[
    ['UNITED STATES','~40 states','Mandate vaccination. About ten set none of their own, and several delegate the question to counties.'],
    ['AFTER THE FIRST DOSE','1 or 3 years','Depending on the product and the statute. Elsewhere the rule may be national, regional or absent.']
  ]},

  {t:'p',text:'There is no international rabies rule. The states setting none of their own are Colorado, Hawaii, Idaho, Kansas, Minnesota, Missouri, Montana, North Dakota, Ohio, South Dakota and Utah — and a local ordinance may bind you where the state does not. Ask the authority where you live; these rules change.'},

  {t:'p',text:'“No legal requirement” is not the same as “no reason.” Kennels, groomers, daycare, training classes and border crossings ask for the certificate. So does any bite investigation.'},

  {t:'h3',text:'Parasites: year-round, not seasonal'},

  {t:'signals',title:'CAPC, in four lines',items:[
    'Broad-spectrum parasite control every month, all year',
    'Heartworm, intestinal parasites, fleas and ticks covered together',
    'Fecal examinations at least four times in the first year, at least twice a year after that',
    'Puppies dewormed from two weeks of age, and every two weeks thereafter'
  ],role:'g'},

  {t:'h3',text:'Heartworm, done properly'},

  {t:'p',text:'Ask your veterinarian whether heartworm is endemic where you live. The adult worm is about twelve inches long (30 cm), lives in the heart and pulmonary arteries, and survives five to seven years. It arrives by mosquito, which is why geography and season are weaker protection than they sound.'},

  {t:'phases',title:'The half owners forget: testing',items:[
    ['6 months','First heartworm test'],
    ['12 months','Second test, with the boosters'],
    ['Every year after','For life, on prevention, forever']
  ]},

  {t:'p',text:'The protocol has two halves and owners keep only the first. Prevention runs monthly, year-round; a puppy under seven months can start without a test, after that you test first. Preventives are highly effective, not one hundred percent — the annual test audits a year of your own compliance.'},

  {t:'note',title:'Whether this section applies to you',paras:[
    'Books written where heartworm is rare give it a paragraph, or nothing. Do not read across.',
    'The American Heartworm Society reports diagnoses in every US state, and its schedule — year-round prevention plus testing at six months, twelve months and annually — is the most explicit one published. Ask whether it applies where you live.'
  ]},

  {t:'tool',n:18,title:'The dachshund year',intro:'One page, two halves: the first year, then every year after it. Copy it, write the dates in, and put it where the food is kept — not in a drawer with the paperwork.'},

  {t:'table',head:['When','What','Notes'],rows:[
    ['From 2 weeks','Deworming, every 2 weeks','CAPC'],
    ['6–16 weeks','DAPP, ≥3 doses, 2–4 weeks apart','Last dose at 16 weeks or later'],
    ['From 12 weeks','Leptospira ×2, 2–4 weeks apart','Core since 2024'],
    ['3–6 months','Rabies','4 months is commonest; local law governs'],
    ['Under 7 months','Start heartworm prevention','No test required to start'],
    ['6 months','First heartworm test',''],
    ['Year one','Fecal exam ×4','CAPC minimum'],
    ['12 months','DAPP booster · lepto booster · heartworm test','Both boosters fall inside the first year'],
    ['Every month, for life','Broad-spectrum parasite preventive','Year-round, not April to October'],
    ['Every year','Exam · heartworm test · lepto booster · fecal ×2',''],
    ['Every 3 years','DAPP',''],
    ['Per local law','Rabies, 1 or 3 years','Set locally — some places require none']
  ],note:'Leave the blanks until they are dated. An undated calendar is a wish.'},

  {t:'script',text:'the year has six fixed points. memory reliably holds five'},

  {t:'photo',n:40,note:'Vaccination record card and a wall calendar on a kitchen counter, dates written in pen, dog’s tail just out of frame. Natural window light, shallow depth of field.',caption:'The whole system, and it costs four minutes once a year.'}
]},

/* ───────────────────────── 6.2 ───────────────────────── */
{ id:'6.2', title:'The ideal-weight check', sub:'two hands, one minute, once a month', pages:3, blocks:[

  {t:'first',text:'The scale is not the test. A sixteen-pound (7 kg) dachshund can be lean, correct or overweight, and the number will not tell you which. What tells you is the nine-point body condition score — both hands, about a minute.'},

  {t:'gauge',title:'Where he should sit on the nine-point scale',items:[
    ['1–3',22,'Under. Ribs visible with no fat cover, bones prominent.','mid'],
    ['4–5',55,'Target. Ribs felt under a thin layer, clear waist, belly rises to the groin.',''],
    ['6',72,'Over. Waist faint, tuck reduced; pressure needed to find the ribs.','mid'],
    ['7',85,'Over. Fat over the spine — roughly 30 percent body fat.','hot'],
    ['8–9',100,'Well over. Ribs not palpable, wider at the loin than at the ribs.','hot']
  ]},

  {t:'h3',text:'Why a breed standard cannot give you a target'},

  {t:'p',text:'The AKC divides dachshunds by weight into exactly two classes, with no rabbit size. The KC and FCI standards draw the lines differently, and the FCI adds a third, rabbit size; section 1.2 puts the three systems side by side. “Tweenie” has no official status anywhere.'},

  {t:'plate',name:'sizes',title:'Three registries, three measures',tag:'AKC · KC · FCI',caption:'The AKC and the Kennel Club divide by weight. The FCI measures the chest. Section 1.2 puts the three side by side.'},

  {t:'p',text:'They are entry classes for a show ring, not health targets, and a sixteen-pound (7 kg) standard is not a failed miniature. Your dog’s correct weight is whatever puts him at a 4 or 5 on the body condition scale.'},

  {t:'evidence',badge:'contested',paras:[
    'Every dachshund owner has been told that a fat dachshund gets a slipped disc. It is the most repeated claim in this breed, and the evidence for it is not there.',
    'DachsLife 2015 surveyed 2,031 owners on exercise, stairs, furniture and body condition, then looked for associations with IVDD. Exercise appeared: under thirty minutes a day went with higher risk, over an hour with lower. Furniture appeared, in the direction nobody expected — dogs <em>prevented</em> from using furniture had higher risk, not lower. Body condition did not appear at all. <strong>No significant association.</strong>',
    'That is an owner survey, and association is not causation in either direction. But it is the largest dataset of its kind, and it does not support the claim. Keep him lean for his joints, his teeth, his heart and his years. Do not tell yourself it is armor for his back.'
  ],source:'DachsLife 2015, 2,031 owners, Royal Veterinary College analysis · dachshund-ivdd.uk, lifestyle advice'},

  {t:'keyfig',title:'The case for lean, and what it is not',items:[
    ['WHAT LEAN BUYS','1.8 years','Median lifespan added by restricting calories twenty-five percent, in a lifetime study of 48 Labradors.'],
    ['WHAT IT DOES NOT BUY','No link found','DachsLife found no significant association between body condition score and IVDD.']
  ]},

  {t:'plate',name:'bcs',title:'The score, on a long dog',tag:'TARGET 4–5',caption:'At 4–5 the last two ribs show faintly in a smooth coat, the waist is visible from above, and the belly rises from ribcage to groin.'},

  {t:'h3',text:'The hands-on test'},

  {t:'p',text:'Do it with your hands, not your eyes, and the same way every time. A longhaired or wirehaired dachshund can hide two pounds under coat. Flat palm, light pressure, three checks.'},

  {t:'steps',items:[
    ['Check 1','Ribs','Lay a flat hand along his side with no pressure at all. You should feel the ribs under a thin layer, the way you feel the backs of your own fingers through skin. If you have to press to find them, he is over. If they feel like knuckles, he is under.','FLAT PALM'],
    ['Check 2','Waist, from above','Stand over him and look down. There should be a visible narrowing behind the ribcage. A straight line from ribs to hips is a 6 or worse; a bulge is a 7.','FROM ABOVE'],
    ['Check 3','Tuck, from the side','At his level, the underline should rise from the back of the ribcage toward the groin. Flat or dropping is over.','AT HIS LEVEL']
  ]},

  {t:'note',title:'Weighing a small dog at home',paras:[
    'Stand on the bathroom scale, note the number, pick him up, note it again, subtract. Repeat it once — cheap scales drift by half a pound (200 g) and you are tracking changes smaller than that.',
    'Same scale, same day of the month, before breakfast. A clinic scale once or twice a year keeps the home number honest.'
  ]},

  {t:'tool',n:19,title:'The body condition check and the twelve-month log',intro:'The scale, the two AKC divisions for reference, and a year of blank rows. Score first, weigh second, and write both down — the pair together is the signal, either one alone is noise.'},

  {t:'table',head:['Score','Ribs','From above','From the side'],rows:[
    ['1–3','Visible, no fat cover','Severe hourglass','Severe tuck, bones prominent'],
    ['4–5','Easily felt, thin cover','Clear waist behind ribs','Belly rises to the groin'],
    ['6','Felt with slight pressure','Waist present but faint','Tuck reduced'],
    ['7','Pressure needed; fat over the spine','Waist gone, sides straight','Little or no tuck'],
    ['8–9','Not palpable','Wider at the loin than the ribs','Underline flat or hanging']
  ],note:'Target 4–5. A 7 is roughly thirty percent body fat.'},

  {t:'matrix',title:'The AKC divisions, and what they are not',head:['AKC division','Definition','What it is'],rows:[
    ['Miniature','11 lb (5 kg) and under at 12 months and older','A show-class division'],
    ['Standard','Usually 16 to 32 lb (7–15 kg)','A show-class division'],
    ['“Tweenie”','12–15 lb (5.5–7 kg)','No official status at all']
  ],hi:[[2,2]],note:'Neither line is a health target, and the KC and FCI draw them differently. The score is the target; the weight is only how you track it.'},

  {t:'table',head:['Month','Weight','Score','Ribs easily felt?','Change'],rows:[
    ['Jan','','','',''],['Feb','','','',''],['Mar','','','',''],
    ['Apr','','','',''],['May','','','',''],['Jun','','','',''],
    ['Jul','','','',''],['Aug','','','',''],['Sep','','','',''],
    ['Oct','','','',''],['Nov','','','',''],['Dec','','','','']
  ],note:'Two consecutive months in the wrong direction is the trigger to change the ration — not one, and not six.'},

  {t:'script',text:'you cannot see a pound on a dog this shape. you can feel it in four seconds'}
]},

/* ───────────────────────── 6.3 ───────────────────────── */
{ id:'6.3', title:'How much to feed', sub:'arithmetic the bag will not do for you', pages:2, blocks:[

  {t:'first',text:'The feeding chart on the bag is a range built for a population, printed by a company with an interest in the upper end of it. It does not know whether your dog is neutered, or what he scores on the body condition scale.'},

  {t:'h3',text:'Resting energy, then a multiplier'},

  {t:'p',text:'Resting energy requirement is <strong>RER = 70 × (body weight in kilograms)<sup>0.75</sup></strong> — what he burns doing nothing. Maintenance energy requirement is RER multiplied by a factor for what he actually is. Pounds divided by 2.2 gives kilograms; the three worked cases below cover most of this breed.'},

  {t:'matrix',title:'Maintenance multipliers',head:['Situation','Multiply RER by'],rows:[
    ['Neutered adult','1.6'],
    ['Intact adult','1.8'],
    ['Weight loss','1.0'],
    ['Prone to obesity','1.2–1.4'],
    ['Growth','2–3']
  ],hi:[[0,1]]},

  {t:'tool',n:20,title:'The three worked cases',intro:'A miniature at the AKC ceiling, a typical tweenie-to-small standard, and a solid standard. Find the line nearest your dog, then adjust it — the number is a starting point, not a prescription.'},

  {t:'matrix',title:'Three worked cases',head:['Dog','Kilograms','RER','Neutered adult, ×1.6'],rows:[
    ['11 lb miniature','5.0','234 kcal','≈ 375 kcal/day'],
    ['16 lb','7.3','301 kcal','≈ 482 kcal/day'],
    ['25 lb standard','11.3','424 kcal','≈ 678 kcal/day']
  ],hi:[[1,3]],note:'Intact, multiply the RER by 1.8 instead. On a weight-loss plan, feed the RER itself and reassess monthly.'},

  {t:'h3',text:'Then correct it against the dog'},

  {t:'tiles',title:'How far the formula can be off',items:[
    ['± 50%','Individual variation on these numbers','Not a rounding error.'],
    ['240 – 720','Kilocalories, the same 16 lb (7 kg) dog','Two littermates at the same weight can need ration sizes that look like a mistake side by side.']
  ]},

  {t:'p',text:'The formula gives you where to start; the body condition score, checked monthly with Tool 19, tells you where to go. Adjust in increments of ten percent, then wait four weeks before judging.'},

  {t:'h3',text:'Calories into cups, for your actual bag'},

  {t:'steps',items:[
    ['1','Find the kilocalories per cup','It is on the bag, usually near the feeding chart, given as metabolizable energy per cup or per 100 grams. It is not the same across two bags of the same brand, and it changes when a formula is reformulated.','ON THE BAG'],
    ['2','Divide','Daily calories ÷ kcal per cup = cups per day, or ÷ kcal per 100 g × 100 = grams. Say the bag reads 380 kcal per cup and your dog’s number is 482: that is 1.27 cups, two-thirds of a cup twice a day. A cup is a volume, not a weight — read your own bag.','ARITHMETIC'],
    ['3','Weigh it once','Fill your measuring cup the way you normally would and put it on a kitchen scale. Scoop-to-scoop variation of twenty grams is ordinary, and on a 482-calorie dog that is real food. Note the grams and use the scale from then on.','ONCE'],
    ['4','Subtract the treats','Training rewards come out of this number, not in addition to it. Section 6.6 does that arithmetic.','EVERY DAY']
  ]},

  {t:'h3',text:'Two meals, and a claim attached to them'},

  {t:'duo',title:'Myth / what the at-risk list actually says',
    a:['The claim','Two meals a day prevents bloat in a dachshund.'],
    b:['Merck Veterinary Manual','Gastric dilatation and volvulus is a disease of deep, narrow chests: Great Dane, German Shepherd, the Setters, Weimaraner, St Bernard, Standard Poodle, Basset. The dachshund is <strong>not a listed at-risk breed</strong>.'],
    note:'Merck Veterinary Manual — gastric dilation and volvulus in small animals.'},

  {t:'p',text:'Split the ration into two meals anyway — steadier portions, easier to spot the day he goes off his food, a simpler structure to train around. Just not for bloat: the thing that matters is the ration size.'},

  {t:'note',title:'When the bag changes',paras:[
    'Re-check the kilocalories per cup every time you buy a different formula, a different life stage, or the same food in a new bag design. Cups are a volume; calories are the thing you are actually feeding.'
  ]},

  {t:'script',text:'the chart on the bag is written by the people who sell the bag'}
]},

/* ───────────────────────── 6.4 ───────────────────────── */
{ id:'6.4', title:'Kibble, home-cooked, raw', sub:'three arguments, one standard', pages:3, blocks:[

  {t:'first',text:'This is the subject where owners lose their manners, and almost none of the argument is about evidence. Ask a narrower question of each: does this food meet a published nutrient standard, who verified it, and what can go wrong with it in my kitchen.'},

  {t:'h3',text:'What AAFCO is, and what it is not'},

  {t:'duo',title:'Myth / what AAFCO actually is',
    a:['“AAFCO approved”','You will see it on packaging, in store displays and in half the blog posts written about pet food. There is no such thing.'],
    b:['The Association of American Feed Control Officials','A voluntary membership body that writes model regulations and nutrient profiles. <strong>It has no regulatory authority.</strong> It approves nothing, certifies nothing, and inspects nothing. Enforcement sits with state feed control officials, working from laws their own states adopted.'],
    note:'AAFCO — “AAFCO’s role,” consumer guidance on understanding pet food.'},

  {t:'p',text:'“Complete and balanced” is a defined claim: the formula meets an AAFCO nutrient profile, or the food passed an AAFCO feeding trial, and it lives in the nutritional adequacy statement. Two canine profiles exist — growth and reproduction, and adult maintenance. Europe runs the same claim under the FEDIAF Nutritional Guidelines, which approve nothing either.'},

  {t:'tiles',title:'What the FDA measured, and when it last spoke',items:[
    ['7.7%','Raw samples positive for <em>Salmonella</em>','196 raw pet food samples tested by the FDA.'],
    ['16.3%','The same samples, <em>Listeria monocytogenes</em>','Against zero or minimal contamination in the other pet food types sampled.'],
    ['Dec 2022','The FDA’s last word on grain-free and DCM','No causal relationship established, and no recall issued.']
  ]},

  {t:'h3',text:'Three foods, one question each'},

  {t:'cards',title:'Does this food answer the adequacy question, and who verified it',items:[
    ['KIBBLE','Answered on the label','The default for a reason: calories per cup are printed, so portioning a cup-and-a-quarter dog is trivial.|Easy to overfeed by volume.|Tells you nothing about ingredient quality beyond the ingredient list itself.',''],
    ['HOME-COOKED','Answered only if someone formulated it','The failure mode is the arithmetic, not the ingredients.|Have the diet formulated by a board-certified veterinary nutritionist and follow it.|Including the supplement, which is usually the part that gets dropped.','b'],
    ['RAW','Answered the same way any other food is','A contamination finding, not a nutrition finding.|7.7 percent of FDA samples positive for <em>Salmonella</em>, 16.3 percent for <em>Listeria monocytogenes</em>.|Enough to require handling discipline rather than enthusiasm.','a']
  ]},

  {t:'p',text:'Whether a bowl of chicken, rice and carrots meets a nutrient profile across calcium, phosphorus, trace minerals and the fat-soluble vitamins is a question the recipe has to answer — and a recipe pulled off a website carries no adequacy statement, because nobody formulated it against one.'},

  {t:'flag',title:'Who is actually at risk in the raw scenario',paras:[
    'The pathogens do not stay in the bowl. They reach the counter, the sink, the bowl you wash with your other dishes, and the dog’s face.',
    'Households with infants, anyone pregnant, anyone over seventy or anyone immunosuppressed — including on chemotherapy or long-term steroids — carry the risk of the handling error, not just the dog. An IVDD dog on a course of prednisone is himself in that category.',
    'If you feed raw: dedicated board and bowl, hot soapy water immediately, hands washed before you touch anything else, and thaw in the refrigerator rather than the sink.'
  ]},

  {t:'h3',text:'Grain-free, and the DCM investigation as it actually stands'},

  {t:'evidence',badge:'contested',paras:[
    'Both of the things you will be told about this are wrong. Grain-free food has not been shown to cause dilated cardiomyopathy. The FDA has also not cleared it.',
    'The facts are narrow. The FDA received 524 reports between January 2014 and April 2019 and opened an investigation into a potential link between certain diets and canine DCM. <strong>No causal relationship has been established and no recall has been issued.</strong> The agency’s last public statement, on December 23, 2022, said it “does not intend to release further public updates until there is meaningful new scientific information to share.”',
    'So the investigation is open and dormant at once. That is an uncomfortable answer, and it is the true one. If your dog is on a grain-free diet with no medical reason for it, there is no urgency and no vindication either — raise it at the annual exam and decide there.'
  ],source:'FDA — investigation into a potential link between certain diets and canine dilated cardiomyopathy, last update December 23, 2022'},

  {t:'p',text:'Grain-free began as a marketing answer to a problem most dogs do not have. Genuine grain allergy exists and is uncommon; itching or chronic ear trouble is a diagnostic question for your veterinarian, not a reason to change bags on your own.'},

  {t:'brief',title:'Deciding, in one paragraph',paras:[
    'Take any of the three that answers the adequacy question. Complete-and-balanced kibble answers it on the label. A home-cooked diet answers it only if a board-certified veterinary nutritionist formulated it and you follow the supplement. Raw answers it the same way any other food does, and adds a handling problem the FDA has measured.',
    'Then judge the dog, not the philosophy: coat, stool, energy and a monthly weight over eight to twelve weeks. Change one thing at a time, over a week or so rather than overnight, and keep the old bag until the new one has proved itself.'
  ]},

  {t:'photo',n:41,note:'Back panel of a dry food bag photographed flat, close on the guaranteed analysis and nutritional adequacy statement, one finger resting beside the adequacy line. Even overhead light, no branding legible.',caption:'The two sentences that decide it are both on the back.'}
]},

/* ───────────────────────── 6.5 ───────────────────────── */
{ id:'6.5', title:'Reading a label in ninety seconds', sub:'four things, in this order', pages:1, blocks:[

  {t:'first',text:'Turn the bag over. The front is advertising. Everything that carries a legal meaning is on the back, and only four parts of it are worth your time in a store aisle.'},

  {t:'tool',n:21,title:'The ninety-second label check',intro:'In this order, every time. If a bag fails step one, you can put it down without reading the rest.'},

  {t:'steps',items:[
    ['1','The nutritional adequacy statement','Find the sentence that says the food is complete and balanced — formulated to meet an AAFCO nutrient profile, or the equivalent where you buy, or substantiated by a feeding trial. No statement means no claim.','PASS OR STOP'],
    ['2','The life stage','Two canine profiles exist: growth and reproduction, and adult maintenance. A food for “all life stages” meets the growth profile, which is the richer of the two. For an adult dachshund with a weight to hold, that is a reason to read the calories carefully rather than a reason to avoid it.','WHICH PROFILE'],
    ['3','The guaranteed analysis','Minimum crude protein, minimum crude fat, maximum crude fiber, maximum moisture. Four numbers, and they are floors and ceilings rather than actual contents.','FOUR NUMBERS'],
    ['4','The ingredient list','Listed in descending order by weight, as the ingredients went into the batch.','BY WEIGHT']
  ]},

  {t:'cards',title:'Two words on that label that get misread',items:[
    ['“CRUDE”','It names a method, not a grade','It does not mean coarse, unrefined or low-grade.|It names the analytical method used to measure the nutrient.|Crude protein tells you how much nitrogen was found, not what the protein was or how well a dog can use it.','b'],
    ['“DESCENDING ORDER”','Weight as it went into the batch','A fresh meat listed first carries its water with it.|After cooking it may contribute less dry matter than an item further down.|A reason to read the whole list rather than the first word of it.','b']
  ]},

  {t:'note',title:'Two things the label will not tell you',paras:[
    'Ingredient quality. The list gives you names and an order, not grades.',
    'Whether your dog does well on it. That takes eight to twelve weeks of coat, stool, energy and a monthly weight, and no bag can supply it.'
  ]}
]},

/* ───────────────────────── 6.6 ───────────────────────── */
{ id:'6.6', title:'Treats, and the ten percent rule', sub:'forty-eight calories, and where they go', pages:1, blocks:[

  {t:'first',text:'The commonest way an owner ruins a dachshund is not the food. It is everything given outside the bowl, by four people in a household, none of whom is counting.'},

  {t:'tiles',title:'The whole treat budget, for the whole household',items:[
    ['482','Calories a day','A sixteen-pound (7 kg) neutered adult, from Tool 20.'],
    ['48','Calories of treats','Ten percent — the entire training and affection budget, for the whole day, for everyone in the house.'],
    ['2 tbsp','Or one stick of cheese split forty ways','Roughly two tablespoons of his own kibble. Not one commercial biscuit and a corner of toast.']
  ]},

  {t:'p',text:'The ten percent comes <em>out</em> of the ration, not on top of it. Weigh the day’s food into one container in the morning; anything used for training comes from that container, and dinner is whatever is left. The budget then enforces itself.'},

  {t:'signals',title:'What the forty-eight calories should be spent on',items:[
    'His own kibble, counted, for everything he already knows',
    'One high-value tier reserved for recall, nail trims and the veterinarian',
    'A pea-sized piece of plain chicken — reserved means reserved',
    'Green beans, carrot, cucumber, plain and unseasoned, when you want volume for very few calories',
    'Break everything smaller than feels reasonable — he is working for the event, not the portion'
  ],role:'g'},

  {t:'flag',title:'Xylitol, and where it hides',paras:[
    'Xylitol causes hypoglycemia above 100 mg/kg and liver injury above 500 mg/kg. Signs can appear within thirty minutes, or be delayed twelve to eighteen hours when the source is gum. Of dogs showing signs of liver injury, <strong>62.5 percent died or were euthanized.</strong>',
    'It is in sugar-free peanut butter, mints, and chewable vitamins — and in some liquid gabapentin formulations, which matters enormously in this breed, because gabapentin is a standard drug for a dog in a disc episode. Read the label on the bottle, and ask the pharmacy for a xylitol-free preparation.',
    'Exposure: call the animal poison line where you live, before symptoms rather than after. In North America, ASPCA Animal Poison Control Center (888) 426-4435, or Pet Poison Helpline (855) 764-7661.'
  ]},

  {t:'script',text:'four people, one dog, nobody counting. that is the whole mechanism'}
]},

/* ───────────────────────── 6.7 ───────────────────────── */
{ id:'6.7', title:'Teeth', sub:'the problem nobody photographs', pages:2, blocks:[

  {t:'first',text:'Dental disease is the most under-rated problem in small dogs, and the dachshund gets a full set of teeth in a jaw drawn long and narrow for other reasons. Crowding follows, and it runs silently for years — a dog in pain from his mouth does not stop eating, he chews on the other side. No dachshund-specific prevalence figure is worth quoting.'},

  {t:'signals',title:'The tell is not the tooth',items:[
    'Breath that has changed',
    'A dog who drops a chew and picks it up differently',
    'A face rubbed on the carpet after meals',
    'A quantity of tartar you notice when you finally look'
  ],role:'g'},

  {t:'p',text:'By the time you notice any of those, the process below the gum line has been running a while. The teeth are close to full size while the jaw is not, so they sit tight with less bone between them — and small dogs live long enough for a slow process to finish.'},

  {t:'h3',text:'The thing that is sold to avoid the anesthetic'},

  {t:'duo',title:'Myth / the position statement',
    a:['Anesthesia-free cleaning','Offered at groomers, pet stores and mobile clinics, and sold on exactly the fear you already have: that the anesthetic is the risky part.'],
    b:['American Veterinary Dental College','“Access to the subgingival area of every tooth is impossible in an unanesthetized patient.” Removing the tartar you can see “has little effect on a pet’s health, and provides a false sense of accomplishment. The effect is purely cosmetic.”'],
    note:'AVDC — Dental Scaling Without Anesthesia, position statement.'},

  {t:'p',text:'The objection is not that it is second best. Disease lives under the gum, the procedure cannot go there, and a clean-looking mouth buys another year of not investigating.'},

  {t:'h3',text:'Home care that actually does something'},

  {t:'p',text:'Brushing is the only home measure that addresses the gum line directly, and it works on frequency rather than effort: thirty seconds daily beats ten minutes on a Sunday. Use a toothpaste made for dogs — human paste is not formulated to be swallowed.'},

  {t:'steps',items:[
    ['Days 1–3','Just the flavor','Let him lick dog toothpaste off your finger. That is the entire session. Stop while he wants more.','LICK ONLY'],
    ['Days 4–7','Lift the lip','Finger with paste along the outside of the canines and the big cheek teeth, three seconds, then done. The inside surfaces do not matter much; his tongue handles them.','3 SECONDS'],
    ['Days 8–14','Introduce the brush','A finger brush or a small soft brush, same three seconds, same spot, building to both sides.','SAME 3 SEC'],
    ['Then, daily','Thirty seconds, outside surfaces only','Same time of day, ideally before something he likes. Daily is the target; every other day still works. Weekly does not.','30 SECONDS']
  ]},

  {t:'note',title:'Chews, and what they are worth',paras:[
    'Chews and dental diets are supporting acts, not substitutes for the brush. Ask your veterinarian which products they accept, and look for evidence of tested effect rather than a picture of a clean tooth.',
    'Hard is the enemy. If you cannot dent it with a thumbnail, it can fracture a tooth — bones, antlers, hooves and hard nylon all qualify. A slab fracture on a carnassial is a far worse day than a soft chew.'
  ]},

  {t:'h3',text:'The professional clean, and what it costs'},

  {t:'keyfig',title:'A plannable expense, not a surprise',items:[
    ['CHEAPEST TO DEAREST','About 2 : 1','Get a quote in your local currency rather than a number from a book. Extractions, if teeth are already lost, sit on top of that.'],
    ['HOW OFTEN TO BUDGET','Every 1–2 years','Once the dog is middle-aged. Treat it as a line item.']
  ]},

  {t:'photo',n:42,note:'Owner’s hand lifting the lip of a smooth dachshund to expose the upper cheek teeth, finger brush visible in the other hand, dog relaxed. Soft daylight, tight crop, no clinical setting.',caption:'Thirty seconds a day, on the outside surfaces. That is the whole protocol.'}
]},

/* ───────────────────────── 6.8 ───────────────────────── */
{ id:'6.8', title:'Everything else that runs in this breed', sub:'the short list, and where to check it', pages:2, blocks:[

  {t:'first',text:'Disc disease takes up so much oxygen in this breed that the rest of the list goes unread. It is short, and most of it is either testable before you buy or visible if you know the age at which to start looking.'},

  {t:'h3',text:'Lafora disease — miniature wirehaireds'},

  {t:'tiles',title:'Lafora — what screening did in Britain',items:[
    ['10.4%','Affected dogs, 2012'],
    ['2.7%','Affected dogs, 2017']
  ],roles:['b','g'],src:'UK screening, miniature wirehaired dachshunds · DNA test on NHLRC1'},

  {t:'p',text:'Lafora is an inherited late-onset epilepsy caused by a mutation in NHLRC1, concentrated in the <strong>miniature wirehaired</strong>. The DNA test is established and commercially available, and as those two numbers show, screening works. If you are buying one, ask this first.'},

  {t:'h3',text:'Eyes — PRA cord1'},

  {t:'p',text:'The cord1 form of progressive retinal atrophy, associated with the RPGRIP1 gene, is on the standard commercial DNA panels. An <strong>ophthalmologist evaluation</strong> is separately one of the three AKC parent-club screens. Genotype and eye exam answer different questions; a serious breeder has both.'},

  {t:'h3',text:'Knees, coat, and the rest'},

  {t:'p',text:'Patellar luxation — the kneecap slipping out of its groove — is the second parent-club screen, and a cardiac exam is the third. Clubs under the KC and the FCI publish their own lists, so ask which one applies where you are buying.'},

  {t:'p',text:'Color dilution alopecia is genetic and recessive, and dachshunds are listed among the susceptible breeds. The coat is normal at birth; thinning appears from around <strong>six months</strong>, and there is no cure — only management of the skin that is left. It attaches to the dilute colors, blue and Isabella, which the Dachshund Club of America accepts while warning of “thin coats, skin sensitivity, vaccine failures and reduced lifespan.” Dapple carries the largest color surcharge of any pattern — premiums attached to precisely the patterns the parent club warns about.'},

  {t:'cards',title:'Sort the list by when you can act on it',items:[
    ['BEFORE YOU BUY','Lafora and PRA','Answered by a DNA test on the parents.|They cost you nothing afterward if you asked in time.',''],
    ['AT THE ANNUAL EXAM','Patella and cardiac','Found on examination — a reason to keep the exam even in the years the dog seems perfectly well.','b'],
    ['THE DAY YOU CHOOSE','Color, and then the teeth','Color dilution alopecia is decided the day you choose a color.|Dental disease is the only item you can actively lower, with thirty seconds a day.','a']
  ]},

  {t:'matrix',title:'The short list, and where to check it',head:['Condition','Test or screen','What you would see, and when'],rows:[
    ['Lafora','DNA test, NHLRC1','Late-onset seizure activity; miniature wirehaireds'],
    ['PRA cord1','DNA test, RPGRIP1 · eye exam','Night vision loss first, progressive'],
    ['Patellar luxation','Patella evaluation','Skipping step, held-up hind leg'],
    ['Cardiac disease','Cardiac exam','Murmur found on a routine exam'],
    ['Color dilution alopecia','None — coat color predicts it','Thinning from ~6 months, dilutes only'],
    ['Dental disease','Oral exam at every visit','Breath, tartar, chewing on one side']
  ],hi:[[0,1],[1,1]],note:'Other tests exist on commercial panels — degenerative myelopathy, osteogenesis imperfecta, LGMD 2D in minis, MPS IIIA, narcolepsy, NCL1 and NCL2. Ask which of them a given breeder runs.'},

  {t:'brief',title:'Verify it yourself, at the source',paras:[
    'The AKC parent-club screening list for the dachshund is three items long: patella evaluation, cardiac exam, ophthalmologist evaluation.',
    'Health testing claims belong in a database, not in a conversation. Look the parents up in the registry that holds the result — ofa.org in the US, the equivalent elsewhere — rather than accepting a number over the phone, and ask to see the DNA certificates as documents.'
  ]},

  {t:'script',text:'the short list is short. that is the good news, and nobody reads it'}
]},

/* ───────────────────────── 6.9 ───────────────────────── */
{ id:'6.9', title:'Pet insurance, and the trap in the fine print', sub:'read the waiting periods before the premium', pages:2, blocks:[

  {t:'first',text:'Insurance is the one purchase in this book where the decision has a deadline attached that nobody mentions at the point of sale. For most breeds the fine print is tedious. For a dachshund it is the entire product.'},

  {t:'tiles',title:'Three numbers that decide the purchase',items:[
    ['13–20×','A surgical episode, in annual premiums','NAPHIA State of the Industry, data year 2024. The advanced imaging alone costs about three years of premium.'],
    ['180 days','Orthopedic waiting period at one major insurer','Not the fourteen-day illness wait you were quoted.'],
    ['14 days','The window that collapses it','An orthopedic examination completed inside the first fourteen days waives the remainder.']
  ]},

  {t:'p',text:'Premiums are not comparable across countries, so the useful figure is a ratio. Price your own policy against your own surgical quote, in your local currency.'},

  {t:'h3',text:'Two definitions that decide every claim'},

  {t:'p',text:'The definition that decides every claim is “preexisting condition.” The US model act written by the NAIC gives the shape of it: a condition for which a veterinarian gave advice, the pet received treatment, or the pet showed signs — “prior to the effective date <strong>or during any waiting period</strong>.” That final clause is the one that costs people money. Whether you get a free-look period to read the issued policy depends on your market, so ask in writing.'},

  {t:'flag',title:'The 180-day orthopedic clock',paras:[
    'At least one major insurer applies a <strong>180-day waiting period to orthopedic conditions and classifies IVDD as orthopedic.</strong> Not the fourteen-day illness wait you were quoted. One hundred and eighty days.',
    'It can be collapsed. An orthopedic examination — filed under names like an “Orthopedic Report Card” — completed within the <strong>first 14 days</strong> of the policy waives the remainder. Done later and clean, it collapses the wait to the date of that exam instead.',
    'It varies by insurer and by market, so the only answer that counts is the one in your own policy document. Ask before you buy, book the exam the week the policy starts, and keep the paperwork. A disc episode in month four with this clause unaddressed is the single most expensive oversight available to a dachshund owner.'
  ]},

  {t:'h3',text:'How they pay, which is not one question'},

  {t:'cards',title:'Two ways a policy pays',items:[
    ['ON YOUR ACTUAL BILL','Reimbursement calculated on the invoice','A published claim example returned <strong>77 percent</strong> of the bill.|Eighty percent cover, applied after a deductible worth about three percent of the invoice.',''],
    ['ON A BENEFIT SCHEDULE','A fixed payout per condition, or “usual and customary” charges for your area','The gap between the schedule and your invoice is yours.|In a specialty neurology hospital that gap is not small.','a']
  ]},

  {t:'p',text:'Modern accident-and-illness policies generally do cover hereditary and breed-related conditions, IVDD included, provided no sign or diagnosis predates coverage. Which of the two columns above you are buying is a separate question, and it is not always on the quote.'},

  {t:'tool',n:22,title:'The comparison grid, and the questions to ask first',intro:'Three quotes, one page. Fill the grid from the policy document rather than the sales page, and ask every question below in writing before you sign anything.'},

  {t:'table',head:['','Policy A','Policy B','Policy C'],rows:[
    ['Monthly premium','','',''],
    ['Annual limit','','',''],
    ['Deductible — annual or per condition','','',''],
    ['Reimbursement percentage','','',''],
    ['Actual bill or benefit schedule?','','',''],
    ['Illness waiting period','','',''],
    ['Orthopedic waiting period','','',''],
    ['Is IVDD classified as orthopedic?','','',''],
    ['Exam that waives it — and by when','','',''],
    ['Hereditary conditions covered?','','',''],
    ['Rehabilitation covered?','','',''],
    ['Premium at age 8, in writing','','','']
  ],note:'If your market gives a free-look period, use it — read the issued policy, not the quote.'},

  {t:'check',title:'Ask these before you sign',items:[
    'Is IVDD classified as orthopedic under this policy, in writing?',
    'What is the orthopedic waiting period on this policy, where I live?',
    'Can an examination waive it, what is it called, and by what date must it be completed?',
    'Is reimbursement on my actual invoice or on a benefit schedule?',
    'Is the deductible annual or per condition, and does it reset each policy year?',
    'Are advanced imaging, surgery, hospitalization and rehabilitation all covered?',
    'What would the premium be at age eight, and how is it recalculated?',
    'What in my dog’s existing records could be read as a preexisting sign?'
  ]},

  {t:'p',text:'If a surgical episode would come out of savings, you may not need a policy. If it would come out of a credit card at speed, you do — and the day to buy it is before the first yelp.'},

  {t:'remember',items:[
    ['Leptospirosis is core now','AAHA moved it in 2024, for all dogs regardless of breed or size — rising prevalence, urban exposure, zoonotic risk. A record showing only DAPP and rabies is out of date, not wrong.'],
    ['Heartworm is the geography item','Diagnosed in all fifty US states; ask whether it is endemic where you live. Year-round prevention, and testing at six months, twelve months, then annually for life. Preventives are highly effective, not perfect, which is exactly why the testing continues.'],
    ['Lean is worth doing — but not for his back','Target 4–5 on the nine-point scale. Calorie restriction of twenty-five percent added about 1.8 years of median lifespan in the Labrador study. DachsLife found no significant association between body condition and IVDD.'],
    ['Anesthesia-free cleaning is cosmetic','The AVDC: subgingival access is impossible in an unanesthetized patient, and removing visible tartar “provides a false sense of accomplishment.” A professional clean under anesthesia is a plannable, mid-sized bill.'],
    ['The orthopedic clock starts the day you sign','At least one major insurer applies a 180-day orthopedic waiting period and classifies IVDD as orthopedic — collapsible by an orthopedic exam inside the first fourteen days. It varies by insurer and market. Ask in writing.']
  ]},

  {t:'quiz',items:[
    'A store clerk tells you the food is “AAFCO approved” and the bag says “complete and balanced for adult maintenance.” Which half of that means anything, and what does it mean?',
    'Your dog is a 6 out of 9 and a neighbor tells you the diet will protect his back. What does the evidence actually support, and what does it not?',
    'You buy a policy on the first of the month and your dachshund goes down in week nine. What should you have done in the first fourteen days, and which clause decides how the claim reads?'
  ],answers:[
    'The adequacy statement is the meaningful half. “Complete and balanced” requires meeting an AAFCO nutrient profile or passing an AAFCO feeding trial, and names a life stage — here, adult maintenance rather than growth. “AAFCO approved” does not exist: AAFCO has no regulatory authority, approves nothing, and enforcement sits with state feed control officials.',
    'It supports getting him to a 4 or 5. Restricting calories by twenty-five percent added about 1.8 years of median lifespan in a lifetime study of 48 Labradors. It does not support the spine claim — DachsLife 2015, across 2,031 owners, found no significant association between body condition and IVDD, while exercise under thirty minutes a day did show higher risk.',
    'Booked the orthopedic examination that collapses a 180-day orthopedic waiting period, inside the first fourteen days. The clause that decides the claim is the preexisting-condition definition: advice, treatment or signs before the effective date <em>or during any waiting period</em>. A sign noted in week three sits inside that window.'
  ]}
]}

];
