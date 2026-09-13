/* ═══════════════════════════════════════════════════════════════
   PART V — THE BACK
   Sections 5.1 – 5.8 · 19 pages · Tools 14, 15, 16, 17
   ═══════════════════════════════════════════════════════════════ */

module.exports = [

/* ───────────────────────── 5.1 ───────────────────────── */
{ id:'5.1', title:'What the numbers actually say', sub:'two right answers to two different questions', pages:3, blocks:[

  {t:'first',text:'Two figures get quoted about this breed, and they do not agree. One says a quarter of miniature dachshunds will have a disc episode. The other says about one in six has had one. Both are correct. They answer different questions, and knowing which question you are asking is the difference between reading the research and being frightened by it.'},

  {t:'p',text:'The first is a <strong>lifetime</strong> figure. Swedish insurance records, analyzed by Bergknut and colleagues, follow insured dogs across their lives and ask whether a disc event ever happens at all: <strong>24.4 percent</strong> of miniatures, <strong>13.0 percent</strong> of standards, against <strong>3.5 percent</strong> for all breeds pooled. That is a cumulative risk. It belongs to a whole life, not to this afternoon.'},

  {t:'p',text:'The second is a <strong>point prevalence</strong>. DachsLife 2015 surveyed 2,031 owners and asked, in effect, has it happened yet — a snapshot of dogs of every age on a single day. The answer was <strong>15.7 percent</strong>, with a confidence interval of 14.1 to 17.3. A snapshot taken across a population full of two- and three-year-olds will always sit below a lifetime figure, because most of those dogs have not finished being at risk.'},

  {t:'stats',items:[
    ['24.4%','lifetime risk, miniatures — Swedish insurance'],
    ['15.7%','point prevalence, British owner survey'],
    ['45–70%','of all canine IVDD cases are dachshunds — ACVS']
  ]},

  {t:'p',text:'Hold them side by side and the picture is coherent rather than contradictory. Will it ever happen: about one in four for a miniature, one in eight for a standard. Has it happened to this dog, by today: about one in six across all ages. Neither number tells you your dog’s odds this year. No honest source will give you that figure, because nobody has calculated it.'},

  {t:'brief',title:'Where these numbers come from',paras:[
    'There is no epidemiological dataset on dachshund IVDD from most countries, and none at all from many. Every prevalence figure in this chapter is Swedish, British or Danish, taken from the few countries that keep national pet-insurance records or run organized breed health surveys. Most keep neither.',
    'The one large number that is neither Nordic nor British is not a prevalence at all. The American College of Veterinary Surgeons reports that dachshunds account for <strong>45 to 70 percent of all canine IVDD cases</strong>. That is a share of a caseload — a statement about what fills the neurology schedule, not about what will happen to your dog.'
  ]},

  {t:'h3',text:'What the Swedish and British data can and cannot do'},

  {t:'p',text:'Both sources have shapes worth knowing. The Swedish figures come from insurance claims, so they count dogs whose owners bought and kept a policy, and they count events that generated a claim. That is a rigorous denominator — you know exactly how many dogs were being watched, and for how long — but it under-counts anything treated at home and never billed.'},

  {t:'p',text:'The British figures come from an owner survey, so they count what owners reported and understood. That catches mild episodes an insurer never sees, and it also catches the occasional back that was never actually a disc. Different biases, pointing different ways, arriving at a consistent story. That agreement is worth more than either study alone.'},

  {t:'note',title:'Where the screening schemes are',paras:[
    'DachsLife was run through the Dachshund Breed Council and analyzed at the Royal Veterinary College, and it remains the largest lifestyle dataset on the breed anywhere. British readers are reading their own figures here; everyone else is borrowing them.',
    'Two countries screen breeding stock: the Royal Kennel Club IVDD scheme, launched in 2021, and roughly twenty years of Danish radiographic back scoring. Ask any breeder for scores. In most countries the question gets a blank look. Ask it anyway.'
  ]},

  {t:'h3',text:'The varieties, and one coincidence worth catching'},

  {t:'p',text:'DachsLife also split its sample by variety, and the spread is wider than most owners expect. The <strong>standard smooth</strong> carried the highest reported prevalence at 24.4 percent. The <strong>standard wirehaired</strong> carried the lowest at 7.1 percent. That is a factor of three inside one breed, and it should make you cautious about any sentence that begins “dachshunds have a” and ends in a single number.'},

  {t:'p',text:'Notice, too, that 24.4 has now appeared twice on this page meaning entirely different things — once as the Swedish lifetime risk for miniatures, once as the British point prevalence for standard smooths. It is a coincidence of arithmetic and nothing more. It is also exactly the kind of collision that produces confident, wrong sentences on the internet.'},

  {t:'h3',text:'Why it is close to the whole breed'},

  {t:'p',text:'Dachshunds are chondrodystrophic: the long bones stop growing early, which is what produces the leg you bought the dog for. Brown and colleagues traced that to an <strong>FGF4 retrogene</strong>, the variant now called CDDY, and showed that the same insertion drives premature degeneration of the intervertebral discs. One mutation, two outputs. The short legs and the brittle discs arrive together because they are the same event.'},

  {t:'p',text:'That is why this is not a problem carried by an unlucky minority. Roughly <strong>93 percent</strong> of dachshunds carry two copies, and the allele frequency in the breed is 0.98. There is no line of dachshunds with ordinary discs, because a dachshund with ordinary discs would not be shaped like a dachshund.'},

  {t:'illus',name:'spine',caption:'The disc as a hydraulic cushion, and the same disc after extrusion. The cord it presses on runs through a canal narrower than a pencil.'},

  {t:'p',text:'It is also why the caseload figure gets misused. When someone tells you that dachshunds are 45 to 70 percent of IVDD cases, they are describing a neurology waiting room, not a probability. A breed can dominate a caseload for two reasons at once: a high per-dog risk, and a great many dogs. This breed has both. It ranked fifth in the AKC’s 2025 popularity ranking, up from sixth the year before — one country’s list among many. A common breed with elevated risk fills a specialty schedule wherever it is common, even if most individual dogs never go near one.'},

  {t:'p',text:'The timeline matters more than the mechanism. Degeneration begins at about <strong>four months of age</strong>, and by the first birthday roughly 90 percent of discs show the change. The material in your puppy’s back was already different before he was old enough to jump off anything. Read that twice, because it quietly rewrites what the word prevention can mean in this breed.'},

  {t:'p',text:'Presentation follows a pattern as well. The ACVS puts the typical age for chondrodystrophoid breeds at <strong>three to six years</strong>; the survey data has 76 percent of cases diagnosed between four and eight. <strong>94 percent</strong> are in the back and 6 percent in the neck, and the single most affected disc is T12–T13, which accounts for about a third of cases — the point where the ribcage stops bracing the spine and the unsupported span begins.'},

  {t:'script',text:'the disc that eventually goes was already changing while he was teething'},

  {t:'p',text:'None of which is a forecast. It is a baseline. The rest of this chapter is about the two things that sit on top of it: the handful of lifestyle factors that have actually been measured, and what to do in the hour when the measurement stops being theoretical.'}
]},

/* ───────────────────────── 5.2 ───────────────────────── */
{ id:'5.2', title:'What protects the back — and what doesn’t', sub:'what the study found, including the parts nobody repeats', pages:4, blocks:[

  {t:'first',text:'The advice you have already been given is confident and specific. No jumping. No stairs. Off the couch. Keep him thin. Buy a ramp. One large survey has tested most of that against real dogs, and the results do not say what the advice says they do. This section is where the book earns its price, so read it slowly and read it to the end, because the honest answer is neither “the advice is wrong” nor “the advice is proven.”'},

  {t:'p',text:'DachsLife 2015 collected lifestyle information on 2,031 dachshunds alongside their owners’ reports of back disease. It is cross-sectional — everything was measured at one moment — and the exposures are owner-reported. Those two facts govern how far any of it can be pushed, and the authors say so in plain language themselves. What follows is what they found.'},

  {t:'evidence',badge:'myth',paras:[
    'The instruction is universal: never let a dachshund on the furniture. The survey looked, and found the opposite association. Dogs who were <strong>prevented</strong> from using furniture had a <strong>higher</strong> reported prevalence of IVDD than dogs who were allowed on it.',
    'That is not a finding that jumping onto sofas protects the spine, and nobody should read it that way. It is a finding that the ban has never been shown to protect, and that in the one dataset large enough to look, the raw association points the wrong way for it.',
    'The most likely explanation is the order of events. Households ban the couch <em>after</em> something happens — an episode, a scare, a warning from a veterinarian. Then the survey arrives and records a restricted dog with a back history, and the restriction looks like a cause.'
  ],source:'DachsLife 2015, Dachshund Health UK lifestyle findings — association, not causation'},

  {t:'h3',text:'Exercise, in both directions'},

  {t:'p',text:'The clearest signal in the data is the one that runs against the instinct to wrap the dog in cotton. Dachshunds getting <strong>under thirty minutes</strong> of exercise a day showed higher risk. Dachshunds getting <strong>over an hour</strong> a day showed lower risk. Two ends of the same variable, pointing in opposite directions, which is the pattern you want to see before you take an association seriously.'},

  {t:'p',text:'Reverse causation is still available as an explanation here — a dog with a sore back walks less — but it does less work than it does for the furniture finding. A dog restricted after an episode explains the low-exercise end. It does not explain why the hour-plus group sits below the middle of the range as well.'},

  {t:'h3',text:'Stairs, and the weight question'},

  {t:'p',text:'Stairs showed a <strong>protective trend that did not reach statistical significance</strong>. The correct reading of that sentence is narrow: there is no evidence in this dataset that stairs harm dachshund backs. It is not evidence that stairs help. A non-significant trend is a result you note and do not build a rule on.'},

  {t:'evidence',badge:'contested',paras:[
    'Every owner is told that a fat dachshund is a broken dachshund. DachsLife found <strong>no significant association between body condition score and IVDD</strong>. That is a real result from the largest relevant sample anyone has assembled, and it deserves to be stated rather than quietly dropped.',
    'It does not license a fat dog. Keeping a dog lean has strong support on other grounds entirely: in Purina’s lifetime study of 48 Labradors, restricting calories by 25 percent added about <strong>1.8 years</strong> of median lifespan. Leanness also cuts anesthetic risk, which matters enormously in a breed that may need spinal surgery.',
    'So keep him at 4 or 5 on the nine-point scale. Just keep him there for his years and his anesthesia, and stop telling other owners that their dog’s weight caused his disc.'
  ],source:'DachsLife 2015 · Kealy et al., Purina lifetime study of calorie restriction'},

  {t:'p',text:'One more thing the survey could not do: it did not measure jumping. Not off the bed, not out of the car, not off the arm of the sofa. The exposure everybody worries about most is the one nobody has quantified, which is worth remembering before you accept a confident claim in either direction about it.'},

  {t:'h3',text:'Reverse causation, in one paragraph'},

  {t:'p',text:'A cross-sectional survey photographs the household and the history at the same instant, so it cannot see which came first. A dog who had an episode two years ago now lives in a home with a furniture ban, short walks, a ramp at the couch and a gate at the stairs. The survey records all of that next to a positive IVDD history. Every protective measure the family adopted now reads statistically as a risk factor. This is not a flaw the authors missed; it is the limitation they state, and it is why the correct summary of the whole study is that these are associations and not causes.'},

  {t:'h3',text:'What a reasonable owner does anyway'},

  {t:'p',text:'You are not going to get a randomized trial. Nobody is going to assign four hundred puppies to a furniture ban for eight years. So the question is not what has been proven but what is sensible under real uncertainty, cheap to do, and unlikely to cost the dog anything if it turns out not to help.'},

  {t:'list',ordered:false,items:[
    'Walk him more than an hour a day once he is grown, on the flat, at his own pace, with time to use his nose. It is the only exposure in the study that pointed consistently in both directions.',
    'Let him keep the couch, and change the <em>landing</em> rather than the permission. A ramp, a low step, an ottoman at half height.',
    'Carry him with one hand under the chest and one under the rear, so the spine stays level. Never scooped up under the belly with the back end swinging.',
    'Use a Y-front harness for anything that attaches to a leash. Nothing on the neck, ever.',
    'Keep nails short and put runners on slick floors. A dog scrabbling for grip loads his back in ways nobody has measured and nobody wants to.',
    'Keep him at body condition 4 or 5 of 9 — for his lifespan and his anesthesia, not because the back study found a link. It did not.'
  ]},

  {t:'p',text:'Notice what that list does and does not do. It changes the physics of the landings you can change, and it leaves the dog a life. A dachshund who is carried everywhere, banned from every surface and walked ten minutes a day is being managed according to a theory that the only relevant study contradicts — and he is paying for it in muscle, in weight and in the sort of boredom that turns into barking.'},

  {t:'h3',text:'Why buy a ramp at all'},

  {t:'p',text:'Be clear about what a ramp is. It is not armor. No study has shown that a ramp prevents intervertebral disc disease, and a manufacturer who implies otherwise is selling past the evidence. What a ramp does is reduce the number of hard landings a spine absorbs over a decade, on a mechanism that is entirely plausible and entirely unmeasured.'},

  {t:'p',text:'Buy it anyway, for two reasons. The first is that the cost of being wrong is the price of a ramp and some floor space. The second is better: the ramp you will actually need is the one on the day after a diagnosis, when the dog is on strict rest, the couch is still where he wants to be, and you have four weeks to get through. A dog who learned the ramp at one year old will use it at seven. A dog meeting his first ramp while in pain will not.'},

  {t:'note',title:'Getting a ramp used',paras:[
    'Start it flat on the floor as a plank and feed him along it. Raise the angle over a week, never faster than he will walk it for food.',
    'Anchor it. A ramp that shifts underfoot once will be refused for months.',
    'Put it where he already jumps. A ramp on the wrong side of the sofa is furniture.'
  ]},

  {t:'photo',n:23,note:'Adult smooth dachshund mid-stride walking down a low upholstered ramp from a sofa, natural window light, house plainly lived in, no props.',caption:'Taught at a year old, used at seven. The ramp is not protection; it is a habit you cannot build in a crisis.'},

  {t:'script',text:'the couch ban is the most repeated piece of dachshund advice that has never been tested and won'},

  {t:'p',text:'The honest summary is short. Exercise him properly rather than imprisoning him. Reduce hard landings where it is cheap to do so. Keep him lean for reasons that have nothing to do with his discs. And understand that none of it is a seatbelt. What you are buying is a smaller number of hard events across a life, against a disc that started changing at four months and will not be talked out of it.'}
]},

/* ───────────────────────── 5.3 ───────────────────────── */
{ id:'5.3', title:'Spay, neuter, and the study nobody quotes', sub:'the strongest lever in the chapter is a date', pages:2, blocks:[

  {t:'first',text:'The largest modifiable association anyone has found in this breed is not a ramp, a stair gate or a diet. It is the month the surgery is booked. It is also the finding least likely to come up at your appointment, because the guidance most veterinarians work from was not written about dachshunds.'},

  {t:'stats',items:[
    ['1.81','relative risk, spayed females'],
    ['2.12','spayed before 12 months'],
    ['1.5','males neutered before 12 months']
  ]},

  {t:'p',text:'Dorn and Seath looked at 1,073 dachshunds, of which 274 had IVDD. Spayed females carried a relative risk of <strong>1.81</strong> (95% CI 1.28–2.54). Females spayed <strong>before twelve months</strong> carried <strong>2.12</strong> (1.44–3.11). Males neutered before twelve months carried <strong>1.5</strong> (1.05–2.15). Dogs neutered <em>after</em> twelve months were not significantly different from intact dogs.'},

  {t:'p',text:'Read the intervals, not just the point estimates. None of those confidence intervals crosses 1.0, which is what separates a finding from a rumor. And read the scale correctly: a relative risk of 2.12 means roughly twice the baseline risk, not a two-in-one certainty. Twice a one-in-four lifetime risk is still a number most dogs land on the safe side of.'},

  {t:'p',text:'Take the study at its true weight. It is observational, so it shows association rather than cause, and the mechanism is not established — nobody has demonstrated why the timing of gonadal hormone removal would change a disc. What it has is a clean dose-response shape: earlier is worse, later is not distinguishable from intact, in both sexes, with intervals that hold.'},

  {t:'h3',text:'The conflict, stated plainly'},

  {t:'p',text:'AAHA’s 2019 canine life stage guidance for dogs under 45 pounds (20 kg) recommends castration at six months, and ovariohysterectomy before the first heat, at five to six months. That is sensible, mainstream, and the schedule a great many practices run on. It is also, for this breed, the exact window the dachshund data flags.'},

  {t:'p',text:'One of those is general small-dog guidance built to balance mammary tumors, pyometra and unwanted litters across every small breed there is. The other is breed-specific, and it is about the single disease that defines this breed. That distinction is the whole argument, and it is worth making calmly: your veterinarian is not behind the times for following AAHA. They are following guidance that was never written with a chondrodystrophic spine in mind.'},

  {t:'p',text:'What you should not do is decide this alone from a book. The counterweights are real. An intact female carries a pyometra risk and a mammary risk that rise with each heat cycle, and an intact male in a household that cannot manage him is its own problem. This is a conversation with a professional who knows your dog, not a rule you enforce.'},

  {t:'p',text:'Note also that the finding is not only about females. Males neutered before twelve months carried 1.5, with an interval that clears 1.0. The conversation is the same one for a male dog, and it is usually a much easier conversation to have, because almost none of the standard reasons to hurry a castration are urgent.'},

  {t:'brief',title:'The words to use',paras:[
    '“I’d like to talk about timing rather than whether. Is there a reason in <em>this</em> dog to do it before twelve months?”',
    '“There’s a dachshund-specific paper — Dorn and Seath, 2018 — that found a relative risk of 2.12 for females spayed under twelve months, and no significant difference after. Have you seen it?”',
    '“I understand AAHA says five to six months for small dogs. I’m trying to weigh that against the breed data. How would you balance those for him?”',
    '“If we wait until fourteen or eighteen months, what are we accepting in exchange?”'
  ]},

  {t:'p',text:'If you land on waiting, then wait properly. An intact female comes into heat roughly twice a year, for around three weeks, and an intact male will find her from a surprising distance. Waiting past twelve months is a management commitment, not a passive one, and half-doing it is how unplanned dapple-to-dapple litters get made.'},

  {t:'script',text:'ask about the month, not the operation. the month is the part that is still open'},

  {t:'p',text:'Print the citation and take it with you. A named study with a date and an interval reads as a question; a half-remembered thing from the internet reads as a fight, and you will lose the room. Most veterinarians will engage with the paper readily. If yours will not discuss timing at all, that is worth knowing about the relationship, quite apart from this decision.'}
]},

/* ───────────────────────── 5.4 ───────────────────────── */
{ id:'5.4', title:'Reading a crisis', sub:'the eight seconds that change the conversation', pages:3, blocks:[

  {t:'first',text:'The most valuable thing you will ever do for this dog takes about eight seconds and costs nothing. You will press on a back toe, watch his face, and write down the time. That single observation, timed, changes what a neurologist can tell you and what the surgery is worth. Almost nobody records it.'},

  {t:'p',text:'Before that, you have to notice. Disc disease rarely announces itself as paralysis; it announces itself as a dog who is slightly off, and the earliest signs are the ones owners explain away as a bad night or a cold floor. The list below runs from earliest to most urgent. Learn the top half. The bottom half will not need learning.'},

  {t:'tool',n:14,title:'Reading a crisis',intro:'Twelve signs in order of urgency, the clinical grades, and how to test deep pain. Photograph this page and keep it on your phone. You will not be thinking clearly when you need it.'},

  {t:'list',ordered:true,items:[
    'Hesitating at a jump he has always taken without thinking.',
    'A shorter, slower stride; he stops trotting out ahead of you.',
    'Trembling or panting at rest, with no heat and no exercise to explain it.',
    'A hunched topline or a tucked abdomen; the back looks arched from the side.',
    'Head carried low and still — he turns his whole body rather than his neck.',
    'A yelp when he is lifted, or when he shifts position on his own.',
    'Tight muscle either side of the spine; he flinches at a light touch along it.',
    'Refusing food, or eating only from a raised bowl.',
    'Scuffed nails on the back feet, or a paw that knuckles over and rights itself.',
    'Swaying, crossing or staggering behind — the legs no longer land where he aims them.',
    'Rear legs that will not hold weight; he drags, or hops with both together.',
    'No voluntary movement behind, and no response to deep pain.'
  ]},

  {t:'p',text:'Signs one through eight are pain. They warrant a call today, not an observation period. Nine onward are neurological, and they are an emergency tonight — including at two in the morning, including on a holiday. In this disease the clock and the outcome are attached to each other.'},

  {t:'p',text:'The neck is the exception to the list. About 6 percent of cases are cervical, and they look different: a dog who holds his head rigidly low, will not turn to look at you, cries when he shifts, and often carries one front leg. Cervical disease tends to be painful out of proportion to the neurological signs, so a dog screaming in the night with four working legs is not necessarily a mild case.'},

  {t:'h3',text:'The grades, and what conservative treatment returns'},

  {t:'table',head:['Grade','What you see','Recovery, conservative'],rows:[
    ['1','Pain only. Walking normally.','70–100%'],
    ['2','Walking, but wobbling, crossing or scuffing behind.','55–100%'],
    ['3','Cannot walk unaided; still moves the rear legs voluntarily.','55–80%'],
    ['4','Paralyzed behind, no bladder control; deep pain still present.','40–80%'],
    ['5','Paralyzed behind, deep pain absent.','about 30%']
  ],note:'Grades and conservative recovery rates from the UK IVDD clinical grading scale. “Conservative” means medical management and strict rest, not surgery.'},

  {t:'p',text:'Set those against the surgical figures and the shape of the decision appears. The ACVS reports that where <strong>deep pain is present</strong>, about <strong>90 percent</strong> of dogs walk again with surgery, against <strong>60 to 80 percent</strong> managed medically. Where <strong>deep pain is absent</strong>, it is <strong>50 to 60 percent</strong> with surgery against <strong>under 10 percent</strong> without. The first gap is meaningful. The second is the difference between a dog who walks and a dog who does not.'},

  {t:'p',text:'Two cautions about the table. Those ranges are wide because the underlying studies are small and defined recovery differently, and a range of 55 to 100 percent is not a prediction you can plan around. And grade is a snapshot, not a verdict — a dog can move from grade 2 to grade 4 in an afternoon, which is exactly why the times you write down are worth more than the grade you assign.'},

  {t:'p',text:'Grade 4 has a detail owners are rarely warned about: the bladder. A paralyzed dog usually cannot empty on his own, and a bladder left full leaks a little at a time, which looks reassuringly like urination and is not. Overflow like that leads to infection and to permanent bladder damage. If he is down, assume he needs help emptying until a veterinarian tells you otherwise, and ask to be shown how before you take him home.'},

  {t:'h3',text:'How to test deep pain'},

  {t:'p',text:'Deep pain is not skin sensation, and this is the single most misread thing in the disease. Take a back toe and apply firm, sustained pressure across the nail bed or the web — with your fingers, or with the handle of a pen if your hands are shaking. Then watch <strong>his face</strong>. You are looking for a conscious response: turning to look, crying out, pulling his head around, trying to bite you.'},

  {t:'p',text:'The leg pulling back is <em>not</em> the answer. That is a withdrawal reflex, it lives in the spinal cord below the injury, and it is fully present in dogs with no deep pain at all. An owner who reports “he still feels it, he pulled his foot away” has told the neurologist nothing, and may have told them something wrong.'},

  {t:'flag',title:'Two ways this test goes wrong',paras:[
    'A dog in spinal pain will bite, including a dog who has never bitten anyone. Have a second person steady his head, or improvise a muzzle from a leash, before you touch the foot.',
    'Do not repeat it every ten minutes on the way to the hospital. Test it once, well, and note the time. Then test it again only if something visibly changes.',
    'Write down what you saw, not what you concluded. “Pressed left hind toe 9:15 p.m., no turn of the head, leg withdrew” is usable. “No deep pain” is your interpretation, and you may be wrong.'
  ]},

  {t:'p',text:'Deep pain present at 7:40 and absent at 9:15 is information no scan can reconstruct after the fact. It tells a surgeon the direction and the speed of the injury, and it is the sort of thing that moves a dog up a surgical list at midnight. You are the only person who can collect it.'},

  {t:'photo',n:24,note:'Two hands carrying a calm dachshund level along the forearm: one palm flat under the chest, the hindquarters resting in the crook of the elbow, the back straight and parallel to the floor.',caption:'One hand under the chest, the hindquarters in the crook of the elbow, the back level. Never under the belly alone — that is the hold that lets the spine sag.'},

  {t:'script',text:'watch the face, not the foot. the foot lies'}
]},

/* ───────────────────────── 5.5 ───────────────────────── */
{ id:'5.5', title:'The first sixty minutes', sub:'what to do while your hands are shaking', pages:2, blocks:[

  {t:'first',text:'You will not improvise this well. Everything in the next hour that matters is boring, and everything that feels like helping — picking him up to comfort him, walking him to see if it loosens, rubbing the sore spot — makes it worse. Work the list. Feelings afterward.'},

  {t:'tool',n:15,title:'The first sixty minutes',intro:'Four things, in order. Nothing on this list requires equipment you do not already own.'},

  {t:'steps',items:[
    ['Minute 0','Confine him before anything else','Put him in the crate, or a puppy pen, or a bathroom with the door shut. Floor level. No bedding he has to climb. If he is already down and you must move him, slide a rigid tray, a baking sheet or a stiff cardboard panel under him and lift the panel, keeping the spine level. Do this first, before you call, before you look anything up. Every extra minute of movement is load on a disc that has already failed.'],
    ['Minute 1','Call — and use these words','Phone your veterinarian, or the nearest emergency hospital if it is out of hours, and open with this: “I have a dachshund with suspected acute intervertebral disc disease. He is [walking / wobbling / not standing]. Deep pain is [present / absent / I am about to test it]. It started at [time]. Do you have neurology on site tonight, or should I go straight to a referral hospital?” That sentence gets you triaged as a spinal case in about fifteen seconds. “My dog seems sore” does not.'],
    ['Minute 5','Test deep pain, and write down the time','Only if he is not standing. Follow Tool 14 exactly — firm pressure across a back toe, and watch his face, not his foot. Write the time, the toe, and what you saw. Repeat only if something changes. If he is still walking, skip this entirely and keep him confined.'],
    ['Minute 10','Travel flat','Carry the crate rather than the dog. If there is no crate, use a stiff panel, a baking tray or a board, with a towel on it and a second towel over his hips to stop him shifting. On the seat or the floor, never a lap, never carried against a chest. One person drives and one stays with him. Bring the medication bottles, the insurance policy number, and Tool 17 if you have filled it in.'],
    ['On arrival','Hand over the page, then stop talking','Give them the times. Onset, deep pain test, last dose of anything. Precision now buys you credibility for the rest of the night, and it saves the fifteen minutes they would otherwise spend reconstructing a history from a frightened owner.']
  ]},

  {t:'flag',title:'Never, in the first hour',paras:[
    '<strong>No human painkillers.</strong> Not ibuprofen, not acetaminophen, not naproxen, not aspirin. These are not weaker versions of dog drugs; in dogs they cause gastrointestinal ulceration, kidney injury and liver injury, and a dog dosed with one of them may be barred from the steroid or the NSAID he actually needs for days.',
    '<strong>No leftover prescriptions.</strong> Not the NSAID from his last episode, not the other dog’s prednisone. Giving a steroid and an NSAID close together is one of the few ways to make this markedly worse, and only the clinician who is about to treat him can sequence that safely.',
    '<strong>No walking it off.</strong> Do not take him outside to see whether it loosens up. Do not encourage him to use the stairs to demonstrate the problem. Film him from six feet (two metres) away if you want a record.',
    '<strong>No massage, no heat pad, no chiropractic, no stretching.</strong> The problem is inside the spinal canal. Nothing applied to the outside of the dog reaches it.',
    '<strong>Do not wait for morning.</strong> If he cannot stand, or cannot feel his feet, the interval between onset and surgery is part of the prognosis.'
  ]},

  {t:'p',text:'If you are more than an hour from a hospital with neurology on site, say so on the first call. A general emergency practice can stabilize, medicate and image to a point, and it can tell you whether the drive is worth starting tonight. That question is much easier to ask at the beginning of a conversation than at the end of one.'},

  {t:'p',text:'One more thing, on the phone: ask whether to withhold food. If surgery is a realistic possibility tonight, they will usually say yes, and a dog who ate on the way in can lose hours to an anesthesia delay.'}
]},

/* ───────────────────────── 5.6 ───────────────────────── */
{ id:'5.6', title:'Crate rest or surgery', sub:'the decision, and what each side actually costs', pages:2, blocks:[

  {t:'first',text:'Both roads are real medicine. Conservative management is not the cheap option chosen by owners who love their dogs less, and surgery is not the option chosen by owners who love them more. For most grade 1 and grade 2 dogs, strict rest is a legitimate first treatment with good published numbers behind it. What it is not is rest in the ordinary sense.'},

  {t:'h3',text:'What conservative management actually involves'},

  {t:'p',text:'A <strong>minimum of four weeks</strong> of strict confinement. For a small dog, that means a space of roughly <strong>three by four feet (about 90 × 120 cm)</strong> — a pen or a crate, not a room, not a kitchen with a gate. Out of it <strong>three times a day for ten minutes</strong>, on a leash, to eliminate and nothing else. Attached to a <strong>harness, never a collar</strong>. No stairs, no sofa, no greeting at the door, no children, no wrestling with the other dog.'},

  {t:'p',text:'The usual failure is week three. The dog feels better, he looks normal, and the household relaxes a week early. The disc has not finished doing anything by week three. If you want one rule to hold onto: the rest period is measured from the day he stops looking sick, not from the day he started.'},

  {t:'p',text:'The drugs come in four jobs. <strong>One anti-inflammatory</strong> — prednisone <em>or</em> an NSAID, <strong>never both</strong>. Something for nerve pain: gabapentin, tramadol or amantadine. Often <strong>methocarbamol</strong> for muscle spasm, which is a large part of what he is actually feeling. And frequently <strong>trazodone</strong>, not because he is anxious by nature but because four weeks in a pen is an unreasonable thing to ask of a hunting dog.'},

  {t:'flag',title:'Two drug rules',paras:[
    'A steroid and an NSAID together, or within days of one another without explicit instruction, risks gastrointestinal ulceration and bleeding. If a second clinician prescribes, tell them exactly what he is already on and when the last dose was.',
    'Check any <strong>liquid gabapentin</strong> for xylitol. Some human formulations contain it as a sweetener, and xylitol causes hypoglycemia in dogs above 100 mg/kg and liver injury above 500 mg/kg — in reported cases with liver injury, 62.5 percent of dogs died or were euthanized. Ask for a xylitol-free compounded liquid, or use capsules.'
  ]},

  {t:'p',text:'Conservative management also asks something of you that surgery does not: six weeks of holding a line inside your own house, against a dog who is bored and a family who feels cruel. Decide before you start who enforces it, and agree that a single person owns the decision to let him out. Households that split that responsibility tend to discover, around week three, that everyone has been making small exceptions nobody else knew about.'},

  {t:'h3',text:'What it costs, honestly'},

  {t:'table',head:['Item','Multiple of an emergency exam'],rows:[
    ['Emergency exam','1× — the unit here'],
    ['Neurologic exam, university hospital','about 1.5×'],
    ['X-rays, 2–3 views','about 2.5×'],
    ['CT','about 12×'],
    ['MRI, average','about 17× (range 13–31×)'],
    ['MRI or CT with anesthesia, bloodwork, radiographs, CSF','about 22–30×'],
    ['Spinal surgery (procedure)','about 22–60×'],
    ['Hospitalization, emergency, per day','about 10× per day'],
    ['Full surgical episode, specialty neurology, all-in','about 75–110×']
  ],note:'Ratios from published figures: 2025 Synchrony Average Procedural Cost Study; University of Missouri VHC; PetMD (vet-reviewed); Southeast Veterinary Neurology. The amounts vary enormously by country; the order of the rows does not.'},

  {t:'p',text:'The spread between the last two rows confuses people, and it should not. Twenty to sixty times an exam is the <em>operation</em>. Seventy-five to a hundred and ten is the <em>episode</em>: consultation, imaging billed separately, surgery, three or four nights in hospital, rehabilitation and a recheck. Both figures are accurate. They answer different questions, which is a theme in this chapter.'},

  {t:'note',title:'Costing the conservative road',paras:[
    'We have not printed a figure for conservative management, because no verified one exists in any country. Build your own, in your local currency, from the rows above: an emergency exam, radiographs, four to six weeks of three or four medications, and one or two rechecks.',
    'Treat it as an estimate, and add a pen and a ramp. Strict rest is cheaper than surgery but is not the economical option: a case that fails and converts in week two pays for both. And any of it swings between a two a.m. admission and a booked referral.'
  ]},

  {t:'p',text:'How the decision is actually made is simpler than the budget suggests. <strong>Grade and deep pain drive it, and time drives it.</strong> Pain only, or mild wobble: rest and medication first, and most such dogs do well. Down but with deep pain intact: surgery moves the odds from 60–80 percent to around 90. Deep pain absent: the conversation is about hours, and the choice is between 50–60 percent and under 10. Money is real — a surgical episode is the largest single bill most dachshunds ever generate — and specialty medicine is genuinely out of reach for many families, but it is the third input, not the first, and any surgeon worth seeing will tell you the same.'}
]},

/* ───────────────────────── 5.7 ───────────────────────── */
{ id:'5.7', title:'Six weeks, day by day', sub:'the plan that keeps week three honest', pages:1, blocks:[

  {t:'tool',n:16,title:'The confinement calendar',intro:'Four weeks is the published minimum. Six is what most dogs are given, because the tail of the recovery is where the relapses live. Print this, tape it to the pen, and initial each day.'},

  {t:'table',head:['Week','Confined space','Out of the pen','Clear this before you progress'],rows:[
    ['1','3×4 ft (90×120 cm) pen, floor level','3 × 10 min, leashed, harness, to eliminate only','Eating, drinking, urinating without help'],
    ['2','Unchanged','3 × 10 min, same route, no sniffing detours','No yelping on position change for 5 straight days'],
    ['3','Unchanged — this is the week people cheat','3 × 10 min','Normal posture at rest; no hunching, no trembling'],
    ['4','Unchanged','3 × 10 min, plus one 5 min slow walk on flat ground','Walking without scuffing or crossing behind'],
    ['5','Pen plus one small gated room, supervised only','2 × 10 min walks, flat, leashed','No deterioration after week 4’s added walk'],
    ['6','Gated room, still no stairs, no furniture, no jumping','2 × 15 min walks','Recheck with your veterinarian before any change']
  ],note:'Any backward step — a yelp, a scuff, a refusal to eat, a foot that knuckles — returns him to week one and starts a phone call. Do not negotiate with an improving dog.'},

  {t:'p',text:'Two things make the six weeks survivable. Feed every meal out of a puzzle or a snuffle mat inside the pen, so his brain works while his back does not. And do five minutes of nosework a day at floor level — three cardboard boxes, one with a treat, set down in front of him. Scent work measurably improves mood in dogs, and it is the one enrichment that costs a spine nothing.'},

  {t:'check',title:'Daily, for six weeks',items:[
    'Confirm he urinated, and that the stream was normal.',
    'Watch him stand up once from rest — that is where a relapse shows first.',
    'Run a hand down either side of the spine and note any flinch.',
    'Initial the day on the calendar. Unmarked days are the ones that get invented later.'
  ]},

  {t:'script',text:'week three is when the dog looks cured and isn’t. that is the whole reason this table exists'}
]},

/* ───────────────────────── 5.8 ───────────────────────── */
{ id:'5.8', title:'One page for your vet and your sitter', sub:'fill it in tonight, while nothing is wrong', pages:2, blocks:[

  {t:'first',text:'Fill this in tonight and put a copy on the refrigerator, one in the car, and a photograph of it on the phone of anyone who ever watches your dog. Its whole value is that it exists before it is needed. An hour into a crisis nobody remembers a policy number, and a sitter who has never heard the word knuckling will call it clumsiness.'},

  {t:'tool',n:17,title:'The emergency page',intro:'One sheet. Print it, complete it by hand, and update it whenever the medication or the insurance changes.'},

  {t:'table',head:['This dog','Fill in'],rows:[
    ['Name, age, weight, variety',''],
    ['Microchip number',''],
    ['Normal walk','Trots ahead, takes the ramp, jumps ___'],

    ['Normal appetite and posture','Eats in ___ min; flat topline at rest'],
    ['Medications, doses, allergies',''],
    ['Previous episodes, with dates','']
  ],note:'The baseline rows are the ones everybody skips and the ones a sitter needs most. “Off” only means something against a written normal.'},

  {t:'check',title:'Call immediately if you see',items:[
    'Hesitating at a jump he normally takes, or a shorter stride.',
    'Trembling or panting at rest, with no heat and no exercise.',
    'A hunched back, a tucked belly, or a low, stiff head.',
    'A yelp on being lifted or on changing position.',
    'Scuffed back nails, or a paw that knuckles over.',
    'Swaying or staggering behind — call tonight, not tomorrow.',
    'Rear legs that will not hold weight — emergency, now.'
  ]},

  {t:'brief',title:'Who to call, in order',paras:[
    'Primary veterinarian: ______________  phone __________',
    'After-hours emergency: ______________  phone __________  drive time ______',
    'Nearest hospital with <strong>neurology on site</strong> — named differently country to country, so find yours tonight: ______________  phone __________  drive time ______',
    'Poison control where you live: ______________  phone __________. North America: ASPCA APCC <strong>(888) 426-4435</strong>, Pet Poison Helpline <strong>(855) 764-7661</strong> — both charge.',
    'Insurance: insurer ________  policy ________  deductible ____  reimbursement ____% — and whether any orthopedic waiting period in this policy has been served.'
  ]},

  {t:'check',title:'What nobody is to do',items:[
    'No ibuprofen, acetaminophen, naproxen or aspirin. Ever, for any reason.',
    'No leftover prescriptions, from this dog or another one.',
    'No walking him to see whether it improves.',
    'No massage, heat pad, stretching or chiropractic.',
    'No lifting under the belly — chest and rear, spine level.',
    'No waiting until morning if he cannot stand.'
  ]},

  {t:'p',text:'Add one line at the bottom in your own handwriting: <em>if he cannot stand, test deep pain once, write the time, and drive.</em> It is the most useful sentence on the page.'},

  {t:'remember',items:[
    ['Two numbers, two questions','Swedish insurance gives a lifetime risk: 24.4 percent for miniatures, 13.0 for standards, 3.5 across all breeds. The British survey gives a point prevalence of 15.7 percent. One asks whether it will ever happen, the other whether it has happened yet. Most countries have no dataset of their own.'],
    ['The furniture ban has never been shown to work','In DachsLife, dogs prevented from using furniture had higher reported prevalence, not lower. Under thirty minutes of exercise a day went with higher risk, over an hour with lower. Stairs showed a non-significant protective trend; body condition showed no significant association. Associations, not causes — the authors say so.'],
    ['The month of the surgery is the strongest lever','Spayed females RR 1.81; before twelve months 2.12; males under twelve months 1.5; later neutering not significantly different. AAHA’s five-to-six-month guidance is for all small dogs. This is about dachshunds.'],
    ['Watch the face, not the foot','Deep pain is a conscious response — turning, crying, trying to bite. A leg pulling back is a spinal reflex, present in dogs with none. Test once, record the time, hand it to the hospital.'],
    ['Grade and deep pain decide it, not money','Deep pain present: about 90 percent walk again with surgery, against 60–80 medically. Deep pain absent: 50–60 against under 10. Conservative management means four weeks minimum at three by four feet, three ten-minute leashed breaks, harness only.']
  ]},

  {t:'quiz',items:[
    'A breeder tells you her line is clear of back problems because both parents tested negative for CDDY. What is wrong with that sentence?',
    'Your five-year-old is hunched, trembling and will not take the couch. He is walking, just slowly. It is nine at night. What do you do, and what do you not do?',
    'Your veterinarian recommends spaying at six months. What do you say, and what are you not claiming?'
  ],answers:[
    'Almost nothing about it is possible. Roughly 93 percent of dachshunds carry two copies of the FGF4 retrogene and the allele frequency is 0.98 — a clear pair would be extraordinary, and Dachshund Health UK explicitly does not recommend using the DNA test for selection, because doing so would exclude nearly the whole breed. Ask instead whether either parent has been X-rayed for spinal calcification — routine in Denmark and Britain, rare almost everywhere else.',
    'Confine him at floor level before anything else, then call and open with the words in Tool 15 — suspected acute IVDD, still walking, onset at this time. He is grade 1, so there is no deep pain test to run; a walking dog does not need one. Give him nothing from your own medicine cabinet, do not take him out to assess him, do not massage him, and make the call tonight even if you are then offered a morning appointment.',
    'That you would like to discuss timing rather than whether, and that Dorn and Seath, 2018, reported a relative risk of 2.12 for females spayed before twelve months, with no significant difference after. You are not claiming AAHA is wrong: its guidance covers all small dogs and balances pyometra, mammary tumors and litters. You are asking how to weigh it against breed-specific data in this dog.'
  ]}
]}

];
