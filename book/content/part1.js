/* PART I — THE BREED, DECODED
   13 pages. Every figure traceable to SOURCES.md. */

module.exports = [

/* ═══════════════════ 1.1 ═══════════════════ */
{
  id:'1.1',
  title:'What a dachshund actually is',
  sub:'the dog is a consequence of the skeleton',
  pages:4,
  blocks:[
    {t:'first',text:'Every argument you will ever have about this breed starts in the same place. The furniture. The stairs. The weight. The recall. A dachshund is not a small dog with short legs. He is a normally proportioned dog whose leg bones stopped growing early, and almost everything that follows — the shape, the gait, the back, the way he gets onto your couch — is downstream of that one fact.'},

    {t:'p',text:'The AKC standard opens by naming it: <em>“Low to ground, long in body and short of leg, with robust muscular development.”</em> That is a description of a tool. The dog was built to go down a hole after an animal that did not want him there, and the shape is the reason he fits. You bought the tool. The tool came with terms.'},

    {t:'h3',text:'Why the legs are short'},

    {t:'p',text:'Long bones lengthen at growth plates near each end, where cartilage is laid down and steadily converted into bone. In a chondrodystrophic dog that conversion runs early and stops early. The legs finish short. The spine does not get the same instruction, so it keeps its length. What you end up with is a dog of ordinary body length standing on legs that quit at a fraction of their intended height.'},

    {t:'p',text:'This is not a defect that crept into the breed. It is the breed. It was selected for, deliberately, over generations, because it worked. The cost was not visible for a very long time, because nobody was looking at discs.'},

    {t:'evidence',badge:'settled',
      paras:[
        'The short legs and the bad discs are not two separate problems that happen to occur in the same dog. They are one mutation with two outputs. Brown and colleagues identified an FGF4 retrogene — the variant now called CDDY — as the cause of both the shortened long bones and the premature disc degeneration that goes with them.',
        'This matters more than it sounds. Roughly 93 percent of dachshunds carry two copies, and the allele frequency in the breed is 0.98. The trait is not a minority problem inside the breed. It is very nearly the whole population.',
        'Which is why you cannot shop your way out of it. There is no line of dachshunds with normal discs and normal legs, because a dachshund with normal discs would not look like a dachshund.'
      ],
      source:'Brown et al., PNAS 2017 (FGF4 retrogene / CDDY); carrier frequency via Dachshund Health UK'},

    {t:'h3',text:'What it does to the discs'},

    {t:'p',text:'A healthy intervertebral disc is a tough outer ring around a soft, water-rich center that behaves like a hydraulic cushion. In a chondrodystrophic dog that center converts early to a drier, more brittle material that does not absorb load the same way. Degeneration begins at about four months of age. By the first birthday, around 90 percent of discs show the change.'},

    {t:'illus',name:'spine',caption:'A normal disc, and one that has extruded upward into the spinal cord. The gap it fills is narrower than the width of a pencil.'},

    {t:'p',text:'Read that timeline again, because it changes what prevention means. The material in your dog’s back was already different before he was old enough to jump off anything. A disc episode at five is not the result of one bad landing. It is the result of a structure that has been changing since he was a puppy, meeting a load on a particular day.'},

    {t:'stats',items:[
      ['45–70%','of all canine IVDD cases are dachshunds (ACVS, US)'],
      ['10–12×','the disc risk carried by other breeds'],
      ['~4 months','when disc degeneration begins']
    ]},

    {t:'p',text:'Where it happens is predictable too. About 94 percent of cases are in the back and 6 percent in the neck, and the single most affected disc is T12–T13 — roughly where the ribcage stops supporting the spine and the unsupported span begins. Lifetime risk figures come from Swedish insurance records: 24.4 percent for miniatures, 13.0 percent for standards, against 3.5 percent for all breeds. <strong>There is no dataset from most countries, and none at all from many.</strong> Every prevalence number in this book is Swedish, British or Danish, and the book says which, every time.'},

    {t:'h3',text:'The ratio that defines him'},

    {t:'p',text:'The show ring describes proportion in words rather than numbers, and the number most often quoted online does not appear in the AKC standard. The 2:1 length-to-height ratio in circulation could not be found in the AKC standard or in Dachshund Club of America material, so treat it as folklore, not as a measurement.'},

    {t:'p',text:'The ratio that governs your week is a different one, and you can measure it tonight. Take the height of his chest off the floor. Now take the height of your couch, your bed, the lip of the car. Divide. For a miniature that couch is four or five times his standing clearance. He will still get up there. The question is what the landing costs.'},

    {t:'h3',text:'The joints, and the way he moves'},

    {t:'p',text:'A dachshund carries a disproportionate share of his weight over the front end, on legs with a pronounced turn and wrists that take the load at an angle. The AKC standard treats failure here as serious: <em>knuckling over</em> of the front legs is an outright disqualification, not a fault to be weighed against something else.'},

    {t:'p',text:'The gait you want is low, long and level, with the back holding a straight line while the legs do the work underneath it. What you do not want to see is the topline flexing up and down with each stride, or a dog who sits down early on walks he used to finish. Watch him from the side once a month. You will notice a change in the gait before you notice anything else.'},

    {t:'note',title:'He is the dog the AVMA describes',
      paras:[
        'The AVMA names this exact build in its cold weather guidance: short-haired pets “feel the cold faster,” and short-legged dogs have the belly and body in contact with snow. Both are true of a smooth dachshund in winter.',
        'The advice is to consider a sweater or coat if the dog has a short coat or seems bothered, and to keep a spare — a wet coat makes a dog colder, not warmer. The AVMA gives no temperature cutoff, and neither will we.'
      ]},

    {t:'h3',text:'Getting on and off things'},

    {t:'p',text:'Going up is a scramble. Coming down is a drop, and the front legs absorb it. This is the part of ownership people get most confident about, usually in the direction of banning everything — and here the evidence does something unhelpful.'},

    {t:'evidence',badge:'contested',
      paras:[
        'In DachsLife 2015, a survey of 2,031 owners analyzed by the Royal Veterinary College, dogs that were <strong>prevented</strong> from using furniture showed a higher prevalence of disc disease, not lower. Stairs showed a protective trend that did not reach significance. Body condition score showed no significant association at all.',
        'These are associations, not causes, and the obvious reading is that the arrow points backward: owners restrict the dog that has already had a problem. But you should know that the single most repeated piece of dachshund advice anywhere has never been shown to help, and the one large owner study that looked found it pointing the other way.',
        'Two findings in the same study did have a direction worth acting on. Under 30 minutes of exercise a day was associated with higher risk. Over an hour a day was associated with lower risk.'
      ],
      source:'DachsLife 2015 (n=2,031), RVC analysis; point prevalence 15.7% (95% CI 14.1–17.3)'},

    {t:'p',text:'So the practical position is unglamorous. A ramp is a small one-time purchase, asks nothing of the dog, and removes the drop. Walking him properly has evidence behind it. Turning your living room into a series of prohibitions does not, and it costs you the exercise you were supposed to be giving him.'},

    {t:'h3',text:'What the body imposes on your week'},

    {t:'p',text:'The skeleton makes a handful of decisions for you, permanently, and they are not negotiable by temperament or training. They are cheap to comply with. The cost of ignoring them arrives all at once, years later, on a weekday afternoon.'},

    {t:'check',title:'Five things the build decides, not you',
      items:[
        'A harness, never a collar, for every walk of his life. The pulling load belongs on the chest, not on the neck of a dog whose worst disc sits behind the ribs.',
        'Two hands to lift him. One under the chest, one under the rear, back held level. Never under the front legs, never dangling.',
        'A ramp at every drop he uses daily — the couch, the bed, the tailgate. Buy it before he needs it, and train him onto it while nothing hurts.',
        'A body condition of 4 to 5 on the 9-point scale. Note the caveat honestly: DachsLife found no significant association between body condition and disc disease. Keep him lean for his joints, his heart and his years, not because it will save his back.',
        'An hour of walking a day if you can manage it. That is the one lifestyle variable in the survey that pointed the right way.'
      ]},

    {t:'script',text:'the sofa is not the enemy. the eighteen inches (45 cm) of air under it are.'},

    {t:'photo',n:4,
      note:'Standard smooth photographed from floor level, side on, standing square on a hard floor. Show the length of the span and the clearance under the chest. Natural window light, no props.',
      caption:'The span between the two pairs of legs is the whole design, and the whole problem.'}
  ]
},

/* ═══════════════════ 1.2 ═══════════════════ */
{
  id:'1.2',
  title:'Sizes, coats, and three rulebooks that disagree',
  sub:'three registries, and they do not agree on size',
  pages:3,
  blocks:[
    {t:'first',text:'Ask a breeder working under the AKC how big your puppy will get and the answer comes in pounds. Ask one working under the FCI and it comes in centimeters of chest. Under The Kennel Club the two sizes are two breeds. They are not disagreeing about the dog. They are measuring different things, and the gaps between the three systems are where most of the confusion in dachshund buying lives.'},

    {t:'h3',text:'What the AKC does'},

    {t:'p',text:'The AKC divides dachshunds by <strong>weight</strong>, into <strong>two</strong> divisions and no more. A Standard is described as usually between 16 and 32 lb (7 to 14.5 kg). Miniature is a class division for dogs of 11 lb (5 kg) and under at 12 months and older. Note the wording: it is a show-class division, not a separate variety. On paper a miniature and a standard are the same dog, sorted at a weigh-in.'},

    {t:'note',title:'What The Kennel Club does',
      paras:[
        'The Kennel Club takes a third route: Miniature and Standard are separate breeds, with separate registers, which is closer to the FCI position than to the AKC one. Where it draws the line is its own figure: an ideal miniature weight of 4.5 kg (10 lb), a desired maximum of 5 kg (11 lb), and no assessment age in the standard.'
      ]},

    {t:'h3',text:'What the FCI does'},

    {t:'p',text:'The FCI, which governs most of the rest of the world, divides by <strong>chest circumference at 15 months</strong>, into <strong>three</strong> classes: Standard above 37 to 47 cm (14.6 to 18.5 in), Miniature above 32 to 37 cm (12.6 to 14.6 in), and Rabbit — Kaninchen — at 27 to 32 cm (10.6 to 12.6 in). The logic is the job. A burrow has a diameter. What decides whether the dog fits is the widest part of him, which is his chest, not what he weighs. The tape measure is the test. The scale never was.'},

    {t:'evidence',badge:'myth',
      paras:[
        'Rabbit is an FCI size. Neither the AKC nor The Kennel Club recognizes it. A dog bred to the FCI rabbit standard is, under AKC rules, simply a miniature — or a standard, if he is over 11 lb (5 kg) at a year.',
        '“Tweenie,” for the dog of roughly 12 to 15 lb (5.5 to 7 kg), has no official status in any of the three. It is a useful word between owners and nothing else. No registry has a box for it.',
        'So when a listing advertises a “rabbit dachshund” or a “tweenie” at a premium, ask which registry recognizes that category, then check for yourself. That does not make the dog worse. It tells you something about the seller.'
      ],
      source:'AKC breed standard and class divisions; FCI standard 148'},

    {t:'tool',n:1,title:'Which dachshund do you actually have?',
      intro:'Ten minutes, a kitchen scale or a bathroom scale, and a soft tape measure. Do it once at 12 months and once at 15 months and write both down. You will need the numbers for dosing, for carrier sizing, and for any conversation with a breeder in another registry.'},

    {t:'steps',items:[
      ['Step 1','Weigh him','Hold him, stand on the bathroom scale, subtract yourself. Do it before breakfast. Record to the nearest half pound (quarter kilo).'],
      ['Step 2','Measure the chest','Dog standing, weight on all four feet. Run a soft tape around the deepest part of the ribcage, just behind the elbows, snug enough that it will not slide and loose enough to slip a finger under. Record in both centimeters and inches.'],
      ['Step 3','Note the date and his age','The systems assess at different ages — 12 months for the AKC division, 15 months for the FCI class. A measurement at seven months tells you nothing official.'],
      ['Step 4','Read across','Find his chest band below, then his weight. If the systems put him in different places, that is normal and it is not an error.']
    ]},

    {t:'table',
      head:['Chest at 15 months','In inches','FCI class','AKC status at 12 months'],
      rows:[
        ['27–32 cm','10.6–12.6 in','Rabbit (Kaninchen)','No equivalent. Shown as Miniature if 11 lb (5 kg) or under'],
        ['above 32–37 cm','12.6–14.6 in','Miniature (Zwerg)','Miniature class if 11 lb (5 kg) or under, else Standard'],
        ['above 37–47 cm','14.6–18.5 in','Standard','Standard, usually 16–32 lb (7–14.5 kg)'],
        ['Over 47 cm','Over 18.5 in','Outside the FCI standard','Standard by weight if over 11 lb (5 kg)']
      ],
      note:'Chest bands are FCI figures assessed at 15 months; the AKC weight division at 12 months and older. The Kennel Club uses neither column — it registers the two sizes as separate breeds. A dog can sit differently in each, and none of the three is wrong.'},

    {t:'h3',text:'Three coats, and what actually differs'},

    {t:'p',text:'Smooth, Wirehaired and Longhaired are shown separately under the AKC. The wire is the one with the beard and eyebrows. Every breeder will tell you the wires are the clowns, the longs are the gentle ones and the smooths are the velcro dogs. Some of that will match your dog. None of it is documented.'},

    {t:'table',
      head:['Coat','Upkeep','Commonly claimed','What is documented'],
      rows:[
        ['Smooth','Minimal. A rubber curry once a week. Feels the cold first, and the AVMA says so','Most affectionate, most demanding of contact','Nothing behavioral. But standard smooths carried the highest IVDD prevalence in DachsLife, at 24.4%'],
        ['Wirehaired','Highest. Hand-stripping or clipping every few months, plus beard maintenance after every meal','Busiest, most terrier-like, loudest','Nothing behavioral. Standard wires carried the lowest prevalence in the same survey, at 7.1%. Lafora disease is concentrated in Miniature Wirehaireds'],
        ['Longhaired','Moderate. Brushing two or three times a week, feathering behind the ears and legs mats first','Calmest, softest temperament','Nothing behavioral. Commands a modest price premium in most markets']
      ],
      note:'Prevalence figures are British point prevalence from DachsLife 2015, overall 15.7%. They are not causal claims about coat type, and the sample was owner-reported.'},

    {t:'p',text:'The honest summary: pick the coat for the grooming you are willing to do and the shedding you are willing to live with. Do not pick it for a temperament that has never been measured. If you are drawn to a Miniature Wirehaired, ask about Lafora disease — the DNA test exists and is commercially available, and UK screening cut affected dogs from 10.4 percent in 2012 to 2.7 percent in 2017.'},

    {t:'h3',text:'Why the size answer is worth pinning down'},

    {t:'p',text:'It is not a trivia question. Three practical things hang off it. Drug dosing is calculated by weight, and the difference between an 11 lb (5 kg) dog and a 28 lb (13 kg) dog is the difference between two very different prescriptions — your vet needs a current number, not the one from his puppy visit.'},

    {t:'p',text:'Air travel is decided by the bag, not the dog. Major US airlines cap the in-cabin carrier at roughly 17 to 18.5 in (43 to 47 cm) long, and most have dropped explicit weight limits; airlines in other countries publish their own. A miniature generally fits. A standard generally does not. That is reasoning from published carrier dimensions rather than an airline statement about the breed, and dimensions change — check yours before you book.'},

    {t:'p',text:'And the back. Swedish insurance data put lifetime disc disease risk at 24.4 percent for miniatures against 13.0 percent for standards. That is close to double, in the direction most buyers would not guess, and it belongs in the decision before the deposit rather than after it.'},

    {t:'script',text:'the beard is charming for about a week. then it is a dishcloth that lives in your house.'}
  ]
},

/* ═══════════════════ 1.3 ═══════════════════ */
{
  id:'1.3',
  title:'Color, pattern, and the ones that cost more than money',
  sub:'the priciest patterns are the ones the club warns about',
  pages:2,
  blocks:[
    {t:'first',text:'The Dachshund Club of America publishes a short list. Accepted colors: Red, Cream, Black and Tan, Chocolate and Tan, Wild Boar, Gray — which the breed calls Blue — and Fawn, which it calls Isabella. Accepted patterns: Dapple, Piebald, Sable and Brindle. Anything outside that list is a disqualification under the AKC standard, which reads simply “colors or patterns other than those specified.”'},

    {t:'p',text:'Two things about that list are worth more than the list itself. The first is an inconsistency the AKC standard never explains. The second is that the two patterns carrying the biggest price premiums are the two the parent club writes warnings about.'},

    {t:'h3',text:'The asymmetry nobody mentions'},

    {t:'p',text:'Under the AKC standard a piebald dachshund is disqualified for eyes partially or wholly blue, for a head more than 50 percent white, and for white around the eyes or ears. A dapple with blue eyes is disqualified for none of those things. Same trait, same feature, two verdicts, one rulebook. If a breeder tells you blue eyes are “fine in the standard,” the question is: fine in which pattern, and in whose standard?'},

    {t:'flag',title:'Double dapple',
      paras:[
        'Breeding dapple to dapple produces roughly 25 percent double-dapple puppies. The DCA states these dogs “are more likely to carry health issues such as deafness, reduced eye size or missing eyes.”',
        'The trap is that a red dapple can be visually ambiguous — the pattern is hard to see in a red coat — so accidental dapple-to-dapple matings are a real and documented risk, not only a deliberate one.',
        'What to do: ask for the registered color of both parents, in writing, before you see the puppies. If the breeder cannot tell you, or describes a double-dapple litter as rare and special, you are done. Leave.'
      ]},

    {t:'h3',text:'Blue, Isabella, and the coat that falls out'},

    {t:'p',text:'Gray and Fawn are on the accepted list, and they are also the two the DCA singles out for caution, citing thin coats, skin sensitivity, vaccine failures and reduced lifespan. Behind that sits color dilution alopecia — genetic, recessive, and dachshunds are explicitly listed among the susceptible breeds. The puppy is born with a normal coat. Signs start from around six months. There is no cure.'},

    {t:'p',text:'Now the money. A dapple carries the largest premium of any pattern — roughly <strong>twice</strong> what a longhaired coat adds, in whatever your currency, and prices move with the country you are buying in. Wirehaired commands a premium of its own. Read that against the paragraph above and the incentive structure is plain: the market pays most for exactly what the parent club warns about. That is not an accusation against breeders. It is a description of what buyers reward, and you are the buyer.'},

    {t:'tool',n:2,title:'Color, status, and the question that settles it',
      intro:'Take this to the conversation. One question per row, asked before you meet the puppy, and get the answer in writing.'},

    {t:'table',
      head:['Color or pattern','Status','What it can carry','Ask the breeder'],
      rows:[
        ['Red, Cream, Black &amp; Tan, Chocolate &amp; Tan, Wild Boar','Accepted','Nothing pattern-specific','Nothing extra — move to health testing'],
        ['Dapple','Accepted. Blue eyes not a disqualification','Safe from one dapple parent. Dapple × dapple is the problem','“What is the registered color of <em>both</em> parents?”'],
        ['Double dapple','Not a recognized color — the result of dapple × dapple','Deafness, reduced eye size, missing eyes (DCA)','“Has this litter had a hearing and eye exam, and by whom?”'],
        ['Piebald','Accepted, with strict limits','Disqualified for blue eyes, head over 50% white, white around eyes or ears','“Has the litter been assessed against the piebald disqualifications?”'],
        ['Gray (Blue)','Accepted, with a DCA caution','Thin coat, skin sensitivity, vaccine failures, reduced lifespan','“What happened to the coats of the dilute puppies from your last litter, at a year old?”'],
        ['Fawn (Isabella)','Accepted, with a DCA caution','Color dilution alopecia — signs from about 6 months, not curable','“Can I contact the owner of a dilute puppy you bred two years ago?”'],
        ['Anything not on the DCA list','Disqualification','Usually a sign of outcrossing or invented marketing names','“Which of the DCA colors is this dog registered as?”']
      ],
      note:'A premium price is not evidence of quality. In this breed the two largest premiums attach to the two patterns with published warnings against them.'},

    {t:'script',text:'nobody has ever been talked out of a merle puppy by a paragraph. ask for the parents’ papers anyway.'}
  ]
},

/* ═══════════════════ 1.4 ═══════════════════ */
{
  id:'1.4',
  title:'A hunting brain in a family dog',
  sub:'he was never supposed to be able to hear you',
  pages:2,
  blocks:[
    {t:'first',text:'Picture the job. A dog goes into a hole in the ground, alone, after an animal heavier and better armed than he is. He is out of sight within seconds and out of earshot shortly after. Nobody can help him, correct him, or call him off. Every decision down there is his. The dogs that came back were the ones who kept going without instruction, and those are the dogs you are descended from.'},

    {t:'p',text:'The AKC standard still asks for it in plain language: <em>“clever, lively and courageous to the point of rashness, persevering in above- and below-ground work, with all the senses well-developed.”</em> Shyness is a serious fault. That is a written request for a dog who does not check in with you before acting.'},

    {t:'h3',text:'What that looks like in a living room'},

    {t:'list',ordered:false,items:[
      '<strong>Tenacity read as stubbornness.</strong> He does not quit when a thing stops working. He does it harder. That was the point.',
      '<strong>Digging.</strong> The couch cushions, the blanket, the flowerbed, the gap behind the fence. This is not boredom, or not only boredom.',
      '<strong>Alert barking.</strong> Underground, voice was how the handler located the dog. You have bred a dog to announce things, then asked him to stop announcing things.',
      '<strong>Independent decisions.</strong> He will hear the cue, weigh it, and pick. This is not defiance. It is the job description.',
      '<strong>Prey drive.</strong> Squirrels, rabbits, the neighbor’s cat, anything that moves fast and low. A dachshund on a scent is a dachshund who has genuinely stopped processing your voice.',
      '<strong>A structurally weak recall.</strong> Everything above adds up to a dog whose default, under stimulation, is to continue.'
    ]},

    {t:'p',text:'None of this is a behavior problem. It is a working dog doing the work in the only environment available to him, which is your house. The mismatch is not in the dog.'},

    {t:'evidence',badge:'myth',
      paras:[
        'The phrase you will hear is “small dog syndrome” — the idea that little dogs are inherently bossy, yappy and difficult. As stated, it is wrong.',
        'The data underneath it is real: in a C-BARQ analysis of 8,301 dogs across 49 breeds, reported problem behaviors increased as height decreased (p&lt;0.001). But Arhant and colleagues tied that pattern to the owners, not the dogs — less shared activity, less consistency in training, and more punitive methods applied to small dogs.',
        'It is an upbringing effect wearing a temperament costume. Which is good news, because upbringing is the variable you control.'
      ],
      source:'C-BARQ analysis, PLOS ONE (n=8,301, 49 breeds); Arhant et al., Applied Animal Behaviour Science'},

    {t:'p',text:'For calibration, in a survey of 13,715 dogs of all breeds the reported prevalences were: noise sensitivity 32 percent, fearfulness 29 percent, hyperactivity and impulsivity 15 percent, aggressiveness 14 percent, and separation-related behavior 6 percent. That last figure is far below the 20 to 30 percent quoted in most popular writing, which counts any owner-reported distress rather than a defined behavioral criterion. None of these are dachshund-specific numbers, and no dachshund-specific set exists.'},

    {t:'note',title:'Use the nose, it is the tool you were given',
      paras:[
        'In a controlled comparison, two weeks of scent work produced a measurably more optimistic judgment bias in dogs than an equivalent period of heelwork training.',
        'A dachshund given a job that uses his nose is a dachshund who is not inventing one. This is the cheapest behavioral intervention in the book, and Part IV builds it into a routine.'
      ]},

    {t:'h3',text:'What it means for training him'},

    {t:'p',text:'Three things follow, and Part IV does the work. First, the recall you want is built with management and long lines, not with a better cue — you are asking a dog to override the one trait he was selected for. Second, reward-based methods are not a preference here. The AVSAB position is that only reward-based methods should be used for all dog training, and the experimental evidence is one-directional: dogs in aversive-method schools showed 55.9 lip licks per session against 4.1, salivary cortisol of 0.26 against 0.13, and a more pessimistic outlook outside training altogether.'},

    {t:'p',text:'Third, and least obvious: a dachshund who has been given something legitimate to be persistent about is an easier dog than one who has not. Do not try to train the tenacity out. Aim it.'},

    {t:'script',text:'he is not ignoring you. he has made a decision and it was not the one you wanted.'},

    {t:'photo',n:5,
      note:'Wirehaired dachshund mid-dig in soil or sand, front feet blurred with motion, eyes down and fully committed. Shot low, daylight.',
      caption:'The behavior you will spend money correcting is the behavior somebody spent centuries installing.'}
  ]
},

/* ═══════════════════ 1.5 ═══════════════════ */
{
  id:'1.5',
  title:'Is this the right dog for you?',
  sub:'including the answer where you do not get one',
  pages:2,
  blocks:[
    {t:'first',text:'This is the only section in the book with an outcome that ends the transaction. A dachshund is the fifth most registered breed in AKC data, up from sixth in 2024, and popularity is a poor proxy for fit. Answer the following honestly, in private, before a puppy is in front of you and honesty gets expensive.'},

    {t:'p',text:'Two costs first. Over a fifteen-year life a dachshund costs several times what owners guess — three to seven times the figure they name, whatever your currency. One US neurology practice quotes all-in IVDD surgery, consult through rehab, at the order of a lifetime of routine care. The cheaper path is harder: four weeks of strict rest, a confined space around three by four feet (1 by 1.2 m), three ten-minute leashed bathroom breaks a day. Somebody has to be there to do them.'},

    {t:'tool',n:3,title:'Twelve questions, scored',
      intro:'Score each answer 0, 1 or 2 as marked. Add them up. Maximum 24. There is no partial credit and no averaging with your partner — if you disagree on a question, take the lower score, because the lower score is the one that will be true at 6 a.m. on a Tuesday.'},

    {t:'list',ordered:true,items:[
      '<strong>Four weeks of crate rest starting tomorrow, with no notice.</strong> Someone home or able to be home (2) · manageable with paid help (1) · nobody available (0)',
      '<strong>A surgery-sized veterinary bill, payable in one week.</strong> Insured before any signs, or cash on hand (2) · credit you could service (1) · it would not happen (0)',
      '<strong>Hours the dog is alone on a normal weekday.</strong> Under four (2) · four to eight (1) · over eight (0)',
      '<strong>Stairs between him and the door, the bed, or the yard.</strong> None, or a ramp goes in before he arrives (2) · a few, and you will carry him (1) · a full flight, several times a day (0)',
      '<strong>Barking at the door, the mail, the hallway, the vacuum.</strong> Fine, and the neighbors are fine (2) · tolerable with training (1) · a lease or a household says no (0)',
      '<strong>A dog who hears a cue, considers it, and picks.</strong> Funny (2) · frustrating but survivable (1) · you want a dog who complies (0)',
      '<strong>Digging in the yard, the bed, the couch.</strong> There is a place he is allowed to dig (2) · you will manage it (1) · the yard is not yours to damage (0)',
      '<strong>A harness rather than a collar, and a ramp, for his whole life.</strong> Yes, without negotiating (2) · probably (1) · you prefer a collar (0)',
      '<strong>Exercise.</strong> Over an hour of walking a day, most days (2) · thirty to sixty minutes (1) · under thirty (0)',
      '<strong>What you want to do with him.</strong> Walks, scent games, trails at his pace (2) · mostly home life (1) · running partner, agility, jumping in and out of a truck (0)',
      '<strong>Small children, or frequent visitors who pick dogs up.</strong> No, or everyone can be taught to support the back (2) · one child old enough to learn (1) · toddlers and a lot of lifting (0)',
      '<strong>Neutering timing.</strong> Willing to have a real conversation with your vet about delaying it, and to accept the trade-offs (2) · open to it (1) · you want it done at six months and closed (0)'
    ]},

    {t:'table',
      head:['Score','Verdict','What to do next'],
      rows:[
        ['18–24','Go ahead','You have the time, the money and the tolerance. Go to Part II and buy carefully. Insure before the puppy comes home, and ask your insurer what it counts as pre-existing.'],
        ['10–17','Not yet','Nothing here is fatal, but at least two answers are load-bearing. Fix the money, the hours alone, or the stairs first. A dachshund bought into an unready household is the one who ends up in rescue at two.'],
        ['0–9','Choose another breed','This is a real answer and it is the right one. The combination you are describing — long hours alone, no financial cushion, a preference for a compliant dog — will make you miserable and will make him worse. There are two hundred other breeds and several of them want the life you actually have.']
      ],
      note:'Anyone scoring 0 on question 1 or question 2 should treat the total as capped at 17, whatever the other answers say. Those two carry the crisis.'},

    {t:'p',text:'We do not get paid more if you buy a dachshund. The book is worth what it costs only if it is willing to tell you the thing a breeder will not.'},

    {t:'remember',items:[
      ['One mutation, two consequences','The FGF4 retrogene that gives the breed its short legs is the same variant that degenerates the discs. Around 93 percent of dachshunds carry two copies. You cannot shop around it.'],
      ['The clock starts at four months','Disc degeneration begins around four months of age, with about 90 percent of discs changed by the first birthday. Prevention is about load and timing, not about avoiding one bad jump.'],
      ['Three systems, three answers','The AKC divides by weight into two divisions. The Kennel Club registers Miniature and Standard as separate breeds. The FCI divides by chest circumference at 15 months into three. Rabbit is an FCI size only.'],
      ['The premiums are backwards','Dapple carries the largest price premium of any pattern, and dapple is exactly what the DCA publishes warnings about. Ask for the registered color of both parents before you meet the litter.'],
      ['The stubbornness is the product','Tenacity, digging, barking and a weak recall are one trait seen from four angles, selected for deliberately. Aim it. Do not try to remove it.']
    ]},

    {t:'quiz',
      items:[
        'The AKC, The Kennel Club and the FCI sort dachshunds three different ways. Which is which, and how many size classes does each recognize?',
        'A breeder tells you both parents are dapple and this makes the litter extra special. What do you say?',
        'True or false: keeping a dachshund off the furniture is the best-supported thing you can do for his back.'
      ],
      answers:[
        'The AKC sorts by <strong>weight</strong>, into two: Standard, usually 16 to 32 lb (7 to 14.5 kg), and a Miniature class for dogs 11 lb (5 kg) and under at 12 months. The FCI sorts by <strong>chest circumference at 15 months</strong>, into three: Standard above 37 to 47 cm, Miniature above 32 to 37 cm, Rabbit 27 to 32 cm. The Kennel Club does neither — two separate breeds. No tweenie in any of them.',
        'You leave. Dapple bred to dapple produces roughly 25 percent double-dapple puppies, and the DCA states those dogs are more likely to carry deafness, reduced eye size or missing eyes. A breeder who presents that as a selling point has told you everything you need.',
        'False. In DachsLife 2015 the dogs prevented from using furniture had a <em>higher</em> prevalence of disc disease, not lower — an association, not proof of cause, and most likely owners restricting dogs already affected. The finding with a usable direction was exercise: under 30 minutes a day associated with higher risk, over an hour with lower.'
      ]}
  ]
}

];
