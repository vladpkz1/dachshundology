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
    {t:'first',text:'A dachshund is not a small dog with short legs. He is a normally proportioned dog whose leg bones stopped growing early. The gait, the back, the way he gets onto your couch: all of it follows from that.'},

    {t:'p',text:'The AKC standard names it: <em>“Low to ground, long in body and short of leg, with robust muscular development.”</em> That is a description of a tool. It came with terms.'},

    {t:'h3',text:'Why the legs are short'},

    {t:'p',text:'Long bones lengthen at growth plates near each end. In a chondrodystrophic dog that conversion runs early and stops early, so the legs finish short; the spine keeps its full length. This is not a defect that crept into the breed. It is the breed, selected for deliberately.'},

    {t:'keyfig',title:'One mutation, two outputs',
      items:[
        ['THE VARIANT','FGF4 / CDDY','A retrogene identified by Brown and colleagues as the cause of both the shortened long bones and the premature disc degeneration that goes with them.'],
        ['CARRIED BY','93%','Of dachshunds carry two copies. The allele frequency in the breed is 0.98.']
      ]},

    {t:'evidence',badge:'settled',
      paras:[
        'The short legs and the bad discs are not two separate problems that happen to occur in the same dog. They are one mutation with two outputs.',
        'This matters more than it sounds. The trait is not a minority problem inside the breed. It is very nearly the whole population.',
        'Which is why you cannot shop your way out of it. There is no line of dachshunds with normal discs and normal legs, because a dachshund with normal discs would not look like a dachshund.'
      ],
      source:'Brown et al., PNAS 2017 (FGF4 retrogene / CDDY); carrier frequency via Dachshund Health UK'},

    {t:'h3',text:'What it does to the discs'},

    {t:'p',text:'A healthy intervertebral disc is a tough ring around a water-rich center that works like a hydraulic cushion. In a chondrodystrophic dog it converts early to a drier, brittle material that no longer absorbs load.'},

    {t:'phases',title:'The clock on the discs',
      items:[
        ['4 months','Degeneration begins'],
        ['12 months','About 90% of discs changed'],
        ['Age five, say','A changed structure meets a load']
      ]},

    {t:'illus',name:'spine',caption:'A normal disc, and one that has extruded upward into the spinal cord. The gap it fills is narrower than the width of a pencil.'},

    {t:'p',text:'The material in his back was already different before he was old enough to jump off anything. A disc episode at five is not one bad landing; it is a structure changing since puppyhood, meeting a load.'},

    {t:'tiles',title:'What the breed carries',
      items:[
        ['45–70%','Of all canine IVDD cases','Are dachshunds.'],
        ['10–12×','The disc risk carried by other breeds','His, against theirs.']
      ],
      src:'ACVS, United States'},

    {t:'keyfig',title:'Where it happens',
      items:[
        ['MOST AFFECTED DISC','T12–T13','Roughly where the ribcage stops supporting the spine and the unsupported span begins.'],
        ['BACK VERSUS NECK','94 / 6','About 94 percent of cases are in the back, 6 percent in the neck.']
      ]},

    {t:'tiles',title:'Lifetime risk of disc disease',
      items:[
        ['24.4%','Lifetime risk · miniature'],
        ['13.0%','Lifetime risk · standard'],
        ['3.5%','Lifetime risk · all breeds']
      ],
      src:'Bergknut et al., insured Swedish dogs, 2012'},

    {t:'p',text:'<strong>There is no dataset from most countries, and none at all from many.</strong> Every prevalence number in this book is Swedish, British or Danish, and the book says which, every time.'},

    {t:'h3',text:'The ratio that defines him'},

    {t:'duo',title:'The ratio in circulation / the ratio that governs your week',
      a:['Quoted everywhere','A 2:1 length-to-height ratio. It could not be found in the AKC standard or in Dachshund Club of America material. The show ring describes proportion in words rather than numbers.'],
      b:['Measurable tonight','The height of his chest off the floor, against the height of your couch, your bed, the lip of the car.'],
      note:'Treat the 2:1 figure as folklore, not as a measurement.'},

    {t:'plate',name:'drop',title:'Clearance against the drop',tag:'MEASURE BOTH TONIGHT',
      caption:'The height of his chest off the floor, standing square, against your couch, your bed, the lip of the car. For a miniature that couch is four or five times his standing clearance.'},

    {t:'h3',text:'The joints, and the way he moves'},

    {t:'cards',title:'The front end takes it',
      items:[
        ['THE LOAD','Weight over the front','A dachshund carries a disproportionate share of his weight over the front end. The legs have a pronounced turn, and the wrists take the load at an angle.',''],
        ['THE FAULT','Knuckling over','The AKC standard treats failure here as serious. <em>Knuckling over</em> of the front legs is an outright disqualification, not a fault to be weighed against something else.','a']
      ]},

    {t:'p',text:'The gait you want is low, long and level, the back holding a straight line. Watch him from the side once a month.'},

    {t:'signals',title:'What you do not want to see',
      items:[
        'The topline flexing up and down with each stride.',
        'A dog who sits down early on walks he used to finish.'
      ]},

    {t:'note',title:'He is the dog the AVMA describes',
      paras:[
        'The AVMA names this exact build in its cold weather guidance: short-haired pets “feel the cold faster,” and short-legged dogs have the belly and body in contact with snow. Both are true of a smooth dachshund in winter.',
        'The advice is to consider a sweater or coat if the dog has a short coat or seems bothered, and to keep a spare — a wet coat makes a dog colder, not warmer. The AVMA gives no temperature cutoff, and neither will we.'
      ]},

    {t:'h3',text:'Getting on and off things'},

    {t:'duo',title:'Myth / what the survey found',
      a:['The instruction','Never let a dachshund on the furniture. It is the single most repeated piece of dachshund advice anywhere.'],
      b:['DachsLife 2015, n=2,031','Dogs that were <strong>prevented</strong> from using furniture showed a higher prevalence of disc disease, not lower. Stairs showed a protective trend that did not reach significance. Body condition score showed no significant association at all.'],
      note:'Associations, not causes. Survey of 2,031 owners, analyzed by the Royal Veterinary College.'},

    {t:'evidence',badge:'contested',
      paras:[
        'The obvious reading of the furniture finding is that the arrow points backward: owners restrict the dog that has already had a problem.',
        'But you should know that the single most repeated piece of dachshund advice anywhere has never been shown to help, and the one large owner study that looked found it pointing the other way.',
        'Two findings in the same study did have a direction worth acting on, and both are about exercise rather than furniture.'
      ],
      source:'DachsLife 2015 (n=2,031), RVC analysis; point prevalence 15.7% (95% CI 14.1–17.3)'},

    {t:'gauge',title:'Daily walking, and which way the risk pointed',
      items:[
        ['OVER 1 HR',100,'Associated with lower risk. The one lifestyle variable in the survey that pointed the right way.',''],
        ['UNDER 30 MIN',28,'Associated with higher risk.','hot']
      ]},

    {t:'p',text:'A ramp is a small one-time purchase, asks nothing of the dog, and removes the drop. Walking him has evidence behind it. A living room full of prohibitions does not, and it costs him the exercise.'},

    {t:'h3',text:'What the body imposes on your week'},

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
    {t:'first',text:'Ask a breeder working under the AKC how big your puppy will get and the answer comes in pounds; under the FCI, in centimeters of chest. They are measuring different things.'},

    {t:'plate',name:'sizes',title:'Three rulebooks, three measures',tag:'AKC · KC · FCI',
      caption:'The AKC and The Kennel Club weigh the dog. The FCI measures the chest at 15 months, because a burrow has a diameter and the widest part of him is what has to fit.'},

    {t:'h3',text:'What the AKC does'},

    {t:'p',text:'The AKC divides by <strong>weight</strong>, into <strong>two</strong> divisions and no more, from 12 months and older: Miniature at 11 lb (5 kg) and under, Standard above it. A show-class division, not a separate variety.'},

    {t:'note',title:'What The Kennel Club does',
      paras:[
        'The Kennel Club takes a third route: Miniature and Standard are separate breeds, with separate registers, which is closer to the FCI position than to the AKC one. Where it draws the line is its own figure: an ideal miniature weight of 4.5 kg (10 lb), a desired maximum of 5 kg (11 lb), and no assessment age in the standard.'
      ]},

    {t:'h3',text:'What the FCI does'},

    {t:'p',text:'The FCI, which governs most of the rest of the world, divides by <strong>chest circumference at 15 months</strong>, into <strong>three</strong> classes, Rabbit — Kaninchen — included. The tape measure is the test.'},

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
      ['Step 1','Weigh him','Hold him, stand on the bathroom scale, subtract yourself. Do it before breakfast. Record to the nearest half pound (quarter kilo).','3 MIN'],
      ['Step 2','Measure the chest','Dog standing, weight on all four feet. Run a soft tape around the deepest part of the ribcage, just behind the elbows, snug enough that it will not slide and loose enough to slip a finger under. Record in both centimeters and inches.','4 MIN'],
      ['Step 3','Note the date and his age','The systems assess at different ages — 12 months for the AKC division, 15 months for the FCI class. A measurement at seven months tells you nothing official.','1 MIN'],
      ['Step 4','Read across','Find his chest band below, then his weight. If the systems put him in different places, that is normal and it is not an error.','2 MIN']
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

    {t:'p',text:'Smooth, Wirehaired and Longhaired are shown separately under the AKC. Every breeder will tell you the wires are the clowns and the longs the gentle ones. None of it is documented.'},

    {t:'cards',title:'Three coats, and what each one asks of you',
      items:[
        ['SMOOTH','Minimal upkeep','A rubber curry once a week. Feels the cold first, and the AVMA says so.|Claimed: most affectionate, most demanding of contact.',''],
        ['WIREHAIRED','Highest upkeep','Hand-stripping or clipping every few months, plus beard maintenance after every meal.|Claimed: busiest, most terrier-like, loudest.','a'],
        ['LONGHAIRED','Moderate upkeep','Brushing two or three times a week. The feathering behind the ears and legs mats first.|Claimed: calmest, softest temperament.','b']
      ]},

    {t:'tiles',title:'What is documented is prevalence, not temperament',
      items:[
        ['24.4%','Standard smooth','The highest of the varieties in DachsLife.'],
        ['7.1%','Standard wirehaired','The lowest in the same survey.'],
        ['15.7%','All dachshunds','Overall point prevalence, 95% CI 14.1–17.3.']
      ],
      roles:['b','g','s'],
      src:'DachsLife 2015 · British point prevalence · owner-reported · not a causal claim about coat type'},

    {t:'p',text:'Longhaired commands a modest price premium; Lafora disease is concentrated in Miniature Wirehaireds. Pick the coat for the grooming you are willing to do.'},

    {t:'p',text:'If you are drawn to a Miniature Wirehaired, ask about Lafora disease — the DNA test exists and is commercially available, and UK screening cut affected dogs from 10.4 percent in 2012 to 2.7 percent in 2017.'},

    {t:'h3',text:'Why the size answer is worth pinning down'},

    {t:'cards',title:'Three things hang off the number',
      items:[
        ['DOSING','By weight','Drug dosing is calculated by weight. An 11 lb (5 kg) dog and a 28 lb (13 kg) dog need two very different prescriptions.',''],
        ['AIR TRAVEL','By the bag','Major US airlines cap the in-cabin carrier at roughly 17 to 18.5 in (43 to 47 cm) long. Most have dropped explicit weight limits.','b'],
        ['THE BACK','Close to double','Swedish insurance data put lifetime disc disease risk at 24.4 percent for miniatures against 13.0 percent for standards.','a']
      ]},

    {t:'p',text:'Your vet needs a current number, not the one from his puppy visit. On the carrier, a miniature generally fits and a standard generally does not — reasoning from published carrier dimensions, not an airline statement about the breed. Check yours before you book.'},

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
    {t:'first',text:'The Dachshund Club of America publishes a short list of colors and patterns. Two things matter more than the list: an inconsistency the AKC standard never explains, and the two patterns carrying the biggest premiums are the two the club warns about.'},

    {t:'cards',title:'What the DCA accepts',
      items:[
        ['COLORS','Seven of them','Red, Cream, Black and Tan, Chocolate and Tan, Wild Boar, Gray — which the breed calls Blue — and Fawn, which it calls Isabella.',''],
        ['PATTERNS','Four of them','Dapple, Piebald, Sable and Brindle.','b']
      ]},

    {t:'p',text:'Anything outside that list is a disqualification under the AKC standard: “colors or patterns other than those specified.”'},

    {t:'h3',text:'The asymmetry nobody mentions'},

    {t:'matrix',title:'Blue eyes: one rulebook, two verdicts',
      head:['Under the AKC standard','If he is a dapple','If he is a piebald'],
      rows:[
        ['Eyes partially or wholly blue','Not a disqualification','Disqualification'],
        ['A head more than 50 percent white','Not a disqualification','Disqualification'],
        ['White around the eyes or ears','Not a disqualification','Disqualification']
      ],
      hi:[[0,2],[1,2],[2,2]],
      note:'Same trait, same feature, two verdicts, one rulebook. If a breeder tells you blue eyes are “fine in the standard,” the question is: fine in which pattern, and in whose standard?'},

    {t:'flag',title:'Double dapple',
      paras:[
        'Breeding dapple to dapple produces roughly 25 percent double-dapple puppies. The DCA states these dogs “are more likely to carry health issues such as deafness, reduced eye size or missing eyes.”',
        'The trap is that a red dapple can be visually ambiguous — the pattern is hard to see in a red coat — so accidental dapple-to-dapple matings are a real and documented risk, not only a deliberate one.',
        'What to do: ask for the registered color of both parents, in writing, before you see the puppies. If the breeder cannot tell you, or describes a double-dapple litter as rare and special, you are done. Leave.'
      ]},

    {t:'h3',text:'Blue, Isabella, and the coat that falls out'},

    {t:'p',text:'Gray and Fawn are on the accepted list and are the two the DCA singles out for caution. Behind that sits color dilution alopecia — genetic, recessive, dachshunds listed among the susceptible breeds.'},

    {t:'signals',title:'What the DCA cautions about in the dilutes',
      items:[
        'Thin coats.',
        'Skin sensitivity.',
        'Vaccine failures.',
        'Reduced lifespan.',
        'Color dilution alopecia: genetic and recessive.',
        'The puppy is born with a normal coat.',
        'Signs start from around six months.',
        'There is no cure.'
      ],role:'g'},

    {t:'duo',title:'What the market pays for / what the club warns about',
      a:['The premium','A dapple carries the largest premium of any pattern — roughly twice what a longhaired coat adds, in whatever your currency. Wirehaired commands a premium of its own, and prices move with the country you are buying in.'],
      b:['The warning','Dapple is one of the two things the DCA publishes cautions about. Dilute — Gray and Fawn — is the other.'],
      note:'The market pays most for exactly what the parent club warns about. That is not an accusation against breeders. It is a description of what buyers reward, and you are the buyer.'},

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
    {t:'first',text:'A dog goes into a hole in the ground, alone, after an animal heavier and better armed than he is. Every decision down there was his. Yours is descended from the dogs that kept going without instruction.'},

    {t:'p',text:'The AKC standard still asks for it: <em>“clever, lively and courageous to the point of rashness, persevering in above- and below-ground work, with all the senses well-developed.”</em> Shyness is a serious fault.'},

    {t:'h3',text:'What that looks like in a living room'},

    {t:'cards',title:'The job description, seen from your sofa',
      items:[
        ['TENACITY','Read as stubbornness','He does not quit when a thing stops working. He does it harder. That was the point.',''],
        ['INDEPENDENCE','He hears, then picks','He will hear the cue, weigh it, and pick. This is not defiance. It is the job description.','b'],
        ['PREY DRIVE','He stops hearing you','Squirrels, rabbits, the neighbor’s cat, anything that moves fast and low. A dachshund on a scent has genuinely stopped processing your voice.','a']
      ]},

    {t:'signals',title:'Three more, from the same trait',role:'g',
      items:[
        'Digging: the couch cushions, the blanket, the flowerbed, the gap behind the fence. This is not boredom, or not only boredom.',
        'Alert barking. Underground, voice was how the handler located the dog. You have bred a dog to announce things, then asked him to stop announcing things.',
        'A structurally weak recall. Everything above adds up to a dog whose default, under stimulation, is to continue.'
      ]},

    {t:'p',text:'None of this is a behavior problem. It is a working dog doing the work in the only environment available to him — your house.'},

    {t:'evidence',badge:'myth',
      paras:[
        'The phrase you will hear is “small dog syndrome” — the idea that little dogs are inherently bossy, yappy and difficult. As stated, it is wrong.',
        'The data underneath it is real: in a C-BARQ analysis of 8,301 dogs across 49 breeds, reported problem behaviors increased as height decreased (p&lt;0.001). But Arhant and colleagues tied that pattern to the owners, not the dogs — less shared activity, less consistency in training, and more punitive methods applied to small dogs.',
        'It is an upbringing effect wearing a temperament costume. Which is good news, because upbringing is the variable you control.'
      ],
      source:'C-BARQ analysis, PLOS ONE (n=8,301, 49 breeds); Arhant et al., Applied Animal Behaviour Science'},

    {t:'tiles',title:'For calibration — all breeds, not dachshunds',
      items:[
        ['32%','Noise sensitivity'],
        ['29%','Fearfulness'],
        ['15%','Hyperactivity and impulsivity'],
        ['14%','Aggressiveness']
      ],
      src:'Salonen et al., survey of 13,715 dogs of all breeds'},

    {t:'duo',title:'Separation-related behavior: the quoted figure against the survey',
      a:['What gets quoted','20 to 30 percent, in most popular writing. It counts any owner-reported distress rather than a defined behavioral criterion.'],
      b:['What the survey found','6 percent, in the same 13,715 dogs, against a defined behavioral criterion.'],
      note:'None of these are dachshund-specific numbers, and no dachshund-specific set exists.'},

    {t:'note',title:'Use the nose, it is the tool you were given',
      paras:[
        'In a controlled comparison, two weeks of scent work produced a measurably more optimistic judgment bias in dogs than an equivalent period of heelwork training.',
        'A dachshund given a job that uses his nose is a dachshund who is not inventing one. This is the cheapest behavioral intervention in the book, and Part IV builds it into a routine.'
      ]},

    {t:'h3',text:'What it means for training him'},

    {t:'p',text:'Three things follow, and Part IV does the work. First, recall is built with management and long lines, not a better cue. Second, the AVSAB position is that only reward-based methods should be used for all dog training.'},

    {t:'matrix',title:'Aversive schools against reward-based schools, measured',
      head:['Measured','Aversive methods','Reward-based methods'],
      rows:[
        ['Lip licks per session','55.9','4.1'],
        ['Salivary cortisol','0.26','0.13'],
        ['Outlook outside training altogether','More pessimistic','Baseline']
      ],
      hi:[[0,2],[1,2],[2,2]]},

    {t:'p',text:'Third: a dachshund given something legitimate to be persistent about is easier than one who has not. Do not train the tenacity out. Aim it.'},

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
    {t:'first',text:'This is the only section with an outcome that ends the transaction. A dachshund is the fifth most registered breed in AKC data, up from sixth in 2024, and popularity is a poor proxy for fit.'},

    {t:'keyfig',title:'Two costs, before you score anything',
      items:[
        ['OVER FIFTEEN YEARS','3 to 7×','What owners guess a dachshund costs. One US neurology practice quotes all-in IVDD surgery, consult through rehab, at the order of a lifetime of routine care.'],
        ['THE CHEAPER PATH','4 weeks','Of strict rest, in a confined space around three by four feet (1 by 1.2 m), with three ten-minute leashed bathroom breaks a day. Somebody has to be there to do them.']
      ]},

    {t:'plate',name:'crate',title:'Four weeks, at this size',tag:'3 × 4 FT',
      caption:'What strict rest actually looks like. Question one is asking whether somebody can be home to run it.'},

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

    {t:'gauge',title:'Twenty-four points, three answers',
      items:[
        ['18–24',100,'Go ahead. You have the time, the money and the tolerance.',''],
        ['10–17',62,'Not yet. Nothing here is fatal, but at least two answers are load-bearing.','mid'],
        ['0–9',30,'Choose another breed. This is a real answer and it is the right one.','hot']
      ]},

    {t:'cards',title:'What to do next',
      items:[
        ['18–24','Go ahead','Go to Part II and buy carefully. Insure before the puppy comes home, and ask your insurer what it counts as pre-existing.',''],
        ['10–17','Not yet','Fix the money, the hours alone, or the stairs first. A dachshund bought into an unready household is the one who ends up in rescue at two.','s'],
        ['0–9','Choose another breed','The combination you are describing — long hours alone, no financial cushion, a preference for a compliant dog — will make you miserable and will make him worse. There are two hundred other breeds and several of them want the life you actually have.','a']
      ]},

    {t:'note',title:'The two that cap the total',
      paras:[
        'Anyone scoring 0 on question 1 or question 2 should treat the total as capped at 17, whatever the other answers say. Those two carry the crisis.'
      ]},

    {t:'p',text:'We do not get paid more if you buy a dachshund. The book is worth its price only if it tells you the thing a breeder will not.'},

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
