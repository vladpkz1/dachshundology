/* PART II — CHOOSING AND BUYING
   17 pages · sections 2.1–2.7 · Tools 4, 5, 6
   Every figure traceable to SOURCES.md. */

module.exports = [

/* ══════════════════════════ 2.1 ══════════════════════════ */
{
  id: '2.1',
  title: 'The puppy market, mapped',
  sub: 'five doors, and only two of them open onto a whelping box',
  pages: 3,
  blocks: [
    {t:'first',text:'Five doors open onto the puppy market: a breeder, a broker, an online marketplace, a pet store, a rescue. At eight weeks old the dog behind each looks the same. The paperwork is not, the price is not, and the odds are not.'},

    {t:'h3', text:'The five doors'},

    {t:'matrix', title:'What each door actually is', head:['Door','What it actually is','What you can verify'], rows:[
      ['Breeder','A person who owns the dam, whelped the litter, and lives with it','Everything — the dam, the premises, the records, the contract'],
      ['Broker','A middleman who buys litters and resells them, sometimes with a website that reads exactly like a breeder’s','Nothing at source. You meet the dog, not the litter'],
      ['Online marketplace','A listings platform. The platform is not the seller and does not whelp anything','Only what the seller chooses to upload'],
      ['Pet store','Retail. Supplied by brokers and commercial kennels, banned outright in a growing list of jurisdictions','The store, not the origin'],
      ['Rescue','A foster network or shelter placing dogs it did not breed','Temperament in a home, health as far as the vet got'],
    ], hi:[[0,2]], note:'A broker site and a breeder site can be indistinguishable on a phone. The difference shows up the moment you ask to come over.'},

    {t:'decision', title:'Which door are you standing at?', items:[
      ['Can you come to the place the litter was born and meet the dam?','Not a video call. The US regulator does not count photos or video as face to face.',
        [['Yes → question 2',''],['No → the door is not a breeder’s','a']]],
      ['Was the person selling you the dog standing there when it was born?','A breeder owns the dam, whelped the litter, and lives with it.',
        [['Yes → breeder',''],['No → broker, marketplace or retail','a']]],
    ]},

    {t:'cards', title:'The two US exemptions, read together', items:[
      ['EXEMPTION ONE','Four or fewer females','“If you maintain four or fewer breeding females … you do not have to be USDA licensed.”',''],
      ['EXEMPTION TWO','Face-to-face sales','“If you always sell pets to new owners in face-to-face transactions, you do not have to be USDA licensed, no matter how many breeding females you have.” Photos, videos and video calls do not count.','b'],
    ]},

    {t:'evidence', badge:'myth', paras:[
      '<strong>A commercial breeding license is not a quality mark. The US rules show why, and the logic travels.</strong>',
      'Read the two USDA/APHIS exemptions together. A serious small breeder who sells to you in person is exempt twice over. The license does not mark quality — it marks <em>sight-unseen commercial volume</em>.',
      'The same logic holds elsewhere: the trading license a seller advertises tells you how he sells, not how he breeds. Ask your own regulator which license his operation needs, and what it certifies.',
    ], source:'USDA/APHIS regulatory guidance, via AKC (2022 update)'},

    {t:'p',text:'The online marketplace prices lowest of the four commercial channels, which is where a first-time buyer starts looking and where the fraud concentrates. The listing is an advertisement written by a stranger.'},

    {t:'signals', title:'How a broker listing reads', items:[
      'Several litters available now, in more than one color, sometimes in more than one breed.',
      'Ages staggered so something is always ready.',
      'Stock photography of puppies in baskets alongside two real snapshots.',
      'No dam named.',
      'No mention of which screens were run on which parent.',
      'Delivery offered as a convenience — often to an airport, sometimes to a parking lot halfway.',
      'A deposit “holds” the puppy within twenty-four hours.',
    ],role:'g'},

    {t:'tiles', title:'Retail is closing', items:[
      ['10','US states','Ban puppy sales in pet stores outright. California was first, in 2017; Colorado’s ban took effect in 2026; Delaware became the tenth.'],
      ['530','US localities','In 31 states, with bans of their own.'],
    ], src:'Check what your own jurisdiction permits'},

    {t:'h3', text:'The scam layer sitting on top of all of it'},

    {t:'p',text:'Puppy fraud is a standing industry with seasonal peaks, and dachshunds are a preferred product. The Better Business Bureau tracks it in the US; find your own country’s equivalent.'},

    {t:'matrix', title:'Puppy fraud reports, BBB Scam Tracker', head:['Year','Reports','Median loss (2022 = 100)'], rows:[
      ['2022','680','100'],
      ['2023','2,899','93'],
      ['2024','2,278','91'],
      ['2025 (through September)','1,632','80'],
    ], hi:[[1,1]], note:'Individual losses of three to six times the median appear in the same US file.'},

    {t:'p',text:'Reports quadrupled between 2022 and 2023, then fell — which is not the same as the fraud falling, only the reporting. The dachshund moved to fifth on the AKC’s US popularity ranking for 2025, up from sixth. Popularity is a supply signal both the honest and the dishonest read.'},

    {t:'keyfig', title:'Why those counts are not the size of the problem', items:[
      ['EVER REPORT','4.8%','Of mass-market fraud victims, on FTC data cited by the BBB. The reported numbers are roughly one twentieth of reality.'],
      ['TRUE VOLUME','~20×','What the table shows. The median loss stays modest for a reason: the sum is set low enough that most people write it off rather than fight. That is the design, not an accident.'],
    ]},

    {t:'note', title:'The one test that survives every disguise', paras:[
      'Every scam and every broker has the same structural weakness: the dog cannot be produced, in that house, with that mother, today.',
      'So the request is always the same, and you make it early: <em>I would like to come and see the puppy with its mother, at the place it was born.</em> Not a video call. The US regulator does not count video as face to face, and neither should you. Everything else — the website, the testimonials, the registry logo in the footer, the vet reference — can be manufactured in an afternoon.',
    ]},

    {t:'script', text:'the dam, in her own kitchen, is the whole audit'},

    {t:'photo', n:12, note:'A woman kneeling on a kitchen floor beside a nursing smooth dachshund dam and a litter of four, daylight from a window, domestic clutter deliberately left in frame.', caption:'Whatever else you verify, verify this: the mother, the litter, and the room they live in.'},
  ]
},

/* ══════════════════════════ 2.2 ══════════════════════════ */
{
  id: '2.2',
  title: 'What it costs, and what makes it cost that',
  sub: 'the price tells you less than the receipt does',
  pages: 3,
  blocks: [
    {t:'first',text:'A dachshund puppy can cost several times what another costs in the same country, and the number alone tells you almost nothing. One price buys a health-screened litter; the same buys a truck-delivered puppy you will never see.'},

    {t:'h3', text:'The bands, as they actually stand'},

    {t:'matrix', title:'Where the four channels sit on price', head:['Source','Where its prices sit'], rows:[
      ['Reputable breeder','Middle, and the widest band of the four'],
      ['Pet store','Highest of the four, by a clear margin'],
      ['Online marketplace','Lowest of the commercial channels'],
      ['Rescue / adoption','Lowest overall, and by a long way'],
    ], hi:[[1,1]], note:'Prices vary hugely by country and region; read the order of the bands, not the numbers. US bands: iHeartDogs, March 2026, updated September 2026.'},

    {t:'p',text:'The marketplace band and the breeder band overlap across a wide stretch, and that overlap is where most dachshunds are actually sold. Inside it, <strong>price cannot tell a breeder from a broker.</strong>'},

    {t:'evidence', badge:'myth', paras:[
      '<strong>“You get what you pay for” is the most expensive sentence in the puppy market.</strong>',
      'The published bands overlap across a wide stretch. A pet store — the one channel legislators have moved to ban outright — carries the <em>highest</em> band of all. Paying more there buys retail markup and a broker’s cut, not health screening.',
      'What does separate the sources is not price but two things a broker structurally cannot supply: <em>documentation</em> — certificates, in the parents’ names, from named examiners — and a <em>face-to-face sale</em> at the place the litter was whelped. Both are free to verify. Neither appears on a price tag.',
    ], source:'iHeartDogs price survey 2026; USDA/APHIS exemption criteria'},

    {t:'h3', text:'What legitimately raises a price'},

    {t:'list', ordered:false, items:[
      'Health screening on both parents — the AKC parent-club screens are a patella evaluation, a cardiac exam and an ophthalmologist evaluation, each by a qualified examiner, each producing paper. Ask your own registry’s breed club for its list.',
      'A DNA panel run on the parents, with the lab named and the results shown, not summarized.',
      'Spinal radiographs, if you can find a breeder who does them. Outside Denmark and Britain almost nobody does; see 2.4.',
      'Titles and time. AKC Breeder of Merit status requires at least five years in AKC events, club membership, titles on four or more dogs bred, and certification that parent-club screens are performed. It is a participation credential, not an independent health audit — but it costs years to earn. Ask what your registry’s equivalent tier certifies.',
      'Support after the sale: a contract, a lifetime return clause, a phone that gets answered at month nine when the dog stops eating.',
    ]},

    {t:'h3', text:'What illegitimately raises it'},

    {t:'cards', title:'Two premiums, read against the parent club', items:[
      ['FASHION','Longhaired and wirehaired','Coat varieties, shown separately and entirely unremarkable. If people will pay more for a beard, that is fashion, and fashion is allowed.','b'],
      ['THE WARNED ONES','Dapple and dilute','Dapple carries the largest premium of all — roughly double the longhaired premium. Wirehaired commands one of its own. Dapple is a different matter, and so is dilute.','a'],
    ]},

    {t:'p',text:'The Dachshund Club of America warns that dapple bred to dapple produces roughly <strong>25 percent double-dapple puppies</strong>, “more likely to carry health issues such as deafness, reduced eye size or missing eyes.” Red dapples can be visually ambiguous, so accidental matings are a documented risk. Dilutes — blue and isabella — are accepted, but the DCA warns of thin coats, skin sensitivity, vaccine failures and reduced lifespan. Color dilution alopecia is genetic, recessive, lists the dachshund as susceptible, shows from around six months, and is not curable.'},

    {t:'keyfig', title:'Geography, and the trap inside it', items:[
      ['REGIONAL SPREAD','+50%','The dearest US regions run half as much again as the cheapest. A gap like that tempts buyers into long-distance purchases — precisely the transaction that forfeits the one check that works.'],
      ['WHAT IT COSTS YOU','Six hours','Driving six hours each way to see a litter is cheap. Shipping a puppy you have never seen, to save the difference, is how the median fraud loss happens.'],
    ]},

    {t:'p',text:'The last legitimate premium is the one nobody itemizes: the breeder who answers the phone in year three. She has seen the thing frightening you at 11 p.m. and will tell you whether it waits until morning.'},

    {t:'matrix', title:'Year one, built from components', head:['Line','Relative to the purchase price','Source'], rows:[
      ['The dog','A rescue costs roughly a fifth of a breeder puppy','—'],
      ['Setup and first months','The biggest line of the year; at the top end it exceeds the puppy','Rover'],
      ['Spay or neuter','A fifth to a quarter of a mid-band puppy, and dearer than most people budget','—'],
      ['Accident-and-illness insurance','Half as much again as a spay; wellness plans add most of that again','NAPHIA 2025 report, 2024 data'],
    ], hi:[[1,1]], note:'Year one lands at a multiple of the purchase price at both ends of the range, and the purchase price is the smallest part of it. An estimate assembled from the sources named — not a survey.'},

    {t:'note', title:'The figure we would not print', paras:[
      'A first-year total circulates under the ASPCA’s name. We could not trace it to a live source, so it is not in this book. The arithmetic is in the table instead, in your local currency, from figures that are sourced.',
      'Hold this next to it: Synchrony puts the lifetime cost of a dog over fifteen years far above what dog owners typically guess. The guess is off by a factor of three to seven.',
    ]},

    {t:'p',text:'A deposit is normal and a waitlist is a good sign — the litters are planned rather than produced. Urgency is the one sales tool that works on everybody.'},

    {t:'signals', title:'A deposit that is not normal', items:[
      'Taken before you have seen anything.',
      'Refunded only as credit toward a future puppy.',
      'Demanded inside twenty-four hours because “someone else is interested.”',
    ]},

    {t:'script', text:'the premium goes to the pattern the club warns about — read that twice'},
  ]
},

/* ══════════════════════════ 2.3 ══════════════════════════ */
{
  id: '2.3',
  title: 'Twenty-two questions for a breeder',
  sub: 'a good one answers all of them, then starts asking you',
  pages: 3,
  blocks: [
    {t:'first',text:'You are not being rude. You are buying an animal that will live with you for a decade and a half, from a stranger, on the strength of a phone call and some photographs.'},

    {t:'cards', title:'Two conversations, not one', items:[
      ['CALL ONE','On the phone, before the puppies','Questions one through eleven: the dam, the screens, the line, and what has gone wrong. Refusal costs you nothing but a Tuesday evening.',''],
      ['CALL TWO','At the house, in the room','You ask the rest, and watch how the answers match what is in front of you.','b'],
    ]},

    {t:'p',text:'Splitting them matters, because the first call is the only point at which you are still capable of leaving.'},

    {t:'tool', n:4, title:'The Twenty-Two Questions', intro:'Ask them in any order, across two conversations if you like. Write the answers down while you are still in the car — memory reorganizes itself in favor of the puppy you have just held.'},

    {t:'check', title:'Tool 4 · Breeder interview', items:[
      'How many litters has this dam had, and how many will she have in her life?',
      'May I come and see her with the litter, at the place they were born?',
      'Which of the three parent-club screens — patella, cardiac, ophthalmologist — have both parents had?',
      'May I see those certificates, in the parents’ registered names, with the examiners’ names on them?',
      'Has either parent been X-rayed for spinal calcification? If not, why not?',
      'What DNA panel was run, on which parent, and by which laboratory?',
      'Is either parent a dapple? Is either one carrying dapple you cannot see?',
      'Is either parent a dilute — blue or isabella?',
      'What are you breeding for, in one sentence?',
      'What faults run in this line?',
      'What has gone wrong in your last three litters?',
      'At what age do the puppies go home, and what happens between now and then?',
      'What have these puppies already met — surfaces, sounds, strangers, handling, car?',
      'What are they eating, how much, and how many times a day?',
      'What veterinary care have they had, and may I have the records?',
      'Do you register the litter, and with which registry — AKC, The Kennel Club, an FCI member?',
      'What is in your contract, and may I read it before I decide?',
      'What does your health guarantee exclude, and what does it require me to do?',
      'Will you take this dog back at any point in his life, for any reason?',
      'Do you require spay or neuter, and at what age — and are you aware of the dachshund neutering data?',
      'Who else has a puppy from this line, and may I call two of them?',
      'What do you want to know about me?',
    ]},

    {t:'p',text:'Question twenty-two grades the other twenty-one. A breeder who has spent nine weeks on a litter wants to know your work hours, your stairs, your children, your last dog and how it died.'},

    {t:'check', title:'Count these on your side of the call', items:[
      'Your work hours, and who is home in the middle of the day.',
      'Whether you have stairs, and how many.',
      'What your furniture situation is, because this breed will be on the sofa.',
      'Whether there are children, and how old.',
      'Whether you have owned a dog before, and what happened to it.',
      'What you plan to do about insurance — and she should have an opinion about the answer.',
      'Whether anyone in the house has strong feelings about barking.',
    ]},

    {t:'p',text:'If she asks none of it, you are not being interviewed. You are being invoiced.'},

    {t:'h3', text:'Six answers that end the conversation'},

    {t:'matrix', title:'What you hear, and why you leave', head:['What you hear','Why you leave'], rows:[
      ['“Both parents are dapple — that’s how we get the really striking ones.”','About a quarter of that litter can be double dapple. The DCA links double dapples to deafness, reduced eye size and missing eyes. This is a known outcome, not bad luck.'],
      ['“We don’t health test. Our lines are clean.”','The parent-club list is three items long: patella, cardiac, eyes. An operation that will not spend on three exams is telling you what it spends on everything else.'],
      ['“I can ship him out Friday — just send the deposit.”','A sale that is not in person is not a face-to-face sale, and the US regulator does not count photos or video calls as one either. It is also the exact shape of every case in the fraud file.'],
      ['“He can leave at six weeks.”','The socialization window is the first three months of life, and part of it belongs to the breeder. Early release is turnover, not generosity.'],
      ['“Our lines are IVDD-free.” / “The parents are CDDY clear.”','93 percent of dachshunds carry two copies of the CDDY variant; the allele frequency is 0.98. There is no IVDD-free line, and no national dataset that could establish one. See 2.4.'],
      ['“They’re registered, so they’re health tested.”','Registration is a pedigree record — at the AKC, at The Kennel Club, at any FCI member. Even Breeder of Merit status only certifies that screens are <em>performed</em>: a participation credential, not an audit.'],
    ]},

    {t:'p',text:'Ask plainly, then stop talking. The useful information is in what comes after the pause — whether she volunteers the litter that went wrong, whether she says “I don’t know” at all. Certainty across twenty-two questions is a script, not expertise.'},

    {t:'script', text:'ask twenty-two before you hold one'},

    {t:'photo', n:13, note:'Close overhead of a kitchen table: a printed checklist with pen ticks, a phone face-down, a mug, a folded health certificate. No dog in frame.', caption:'The interview happens before the visit. The visit is for confirming what you were told.'},
  ]
},

/* ══════════════════════════ 2.4 ══════════════════════════ */
{
  id: '2.4',
  title: 'The health tests to ask for',
  sub: 'three official tests, one useless one, and a scheme most countries do not run',
  pages: 3,
  blocks: [
    {t:'first',text:'The AKC parent-club health testing requirement for the dachshund is three items long: a patella evaluation, a cardiac exam, an ophthalmologist evaluation. The KC and FCI equivalents are set by their own clubs, so ask which list applies where you buy.'},

    {t:'tool', n:5, title:'The Health-Testing Ask', intro:'What to request, in what order, and what each result actually rules out. Bring this to the first phone call, not the visit.'},

    {t:'h3', text:'Tier one — the parent-club screens'},

    {t:'cards', title:'The three, on both parents', items:[
      ['PATELLA','A hands-on exam','For luxating kneecaps, graded by an examiner. On both parents.',''],
      ['CARDIAC','Auscultation at minimum','By a qualified examiner. On both parents.',''],
      ['EYES','Ophthalmologist','A board-certified eye exam, not a glance from the family vet. On both parents.',''],
    ]},

    {t:'p',text:'Three exams is a low bar. Ask for the certificates in the parents’ registered names, with the examiners’ names printed on them: “yes, all clear” is a claim, paper is a record.'},

    {t:'matrix', title:'What each screen actually rules out', head:['Screen','What it describes','What it does not'], rows:[
      ['Patella evaluation','Two knees, on the day they were handled','Anything about the knees after that day'],
      ['Cardiac exam','A listen, at one point in a dog’s life','Anything about the heart after that point'],
      ['Ophthalmologist evaluation','Eyes on the date of the certificate','Most schemes require re-examination, so a certificate from four years ago describes a dog who no longer exists'],
      ['All three together','A floor','Nothing about the back — the disease that defines this breed and drives its costs'],
    ], hi:[[3,2]], note:'Be precise about this, because breeders and buyers both overstate it. Clear parents are a floor. They are not a forecast.'},

    {t:'plate',name:'spine',title:'What no screen looks at',tag:'T12–T13',
      caption:'Patella, cardiac and eyes are the whole official list. The back — the disease that defines this breed and drives its costs — is not on it.'},

    {t:'h3', text:'Tier two — the DNA panel'},

    {t:'matrix', title:'The panel, and who should insist', head:['Test','What it is for','Who should insist'], rows:[
      ['Lafora disease (NHLRC1)','A seizure disorder concentrated in the breed','Anyone buying a <strong>miniature wirehaired</strong> — non-negotiable'],
      ['PRA crd4/cord1 (RPGRIP1)','Progressive retinal atrophy','Every buyer'],
      ['Degenerative myelopathy','Progressive spinal cord disease','Every buyer'],
      ['Osteogenesis imperfecta','Brittle bone disease','Every buyer'],
      ['LGMD 2D','Muscular dystrophy','Miniature buyers'],
      ['MPS IIIA','A storage disease','Every buyer'],
      ['Narcolepsy, NCL1, NCL2','Neurological conditions on the standard panel','Every buyer'],
    ], hi:[[0,2]], note:'Panel as offered by Embark. Ask which lab ran it and ask to see the report, not a summary.'},

    {t:'tiles', title:'What screening did to Lafora in the UK', items:[
      ['10.4%','Affected dogs, 2012'],
      ['2.7%','Affected dogs, 2017'],
    ], roles:['b','g'], src:'UK screening; the DNA test is established and commercially available'},

    {t:'p',text:'Lafora is the one to be immovable about. It is concentrated in miniature wirehaired dachshunds, and screening works. A miniature wire breeder who has not run it is either unaware of her variety’s literature or hoping you are.'},

    {t:'duo', title:'What the CDDY test is sold as / what it can do',
      a:['Sold as','A screening tool. “CDDY clear” parents, advertised as a mark of a better back.'],
      b:['Dachshund Health UK','“We do not currently recommend the use of the UC Davis DNA Test (CDDY).” Selecting on it “will have an irreversible effect on the Dachshund breed excluding almost all dogs from breeding.”'],
      note:'93 percent of dachshunds carry two copies of the variant, and the allele frequency is 0.98. A test on which almost every dog returns the same result cannot rank dogs.'},

    {t:'evidence', badge:'myth', paras:[
      '<strong>The CDDY/FGF4 test is sold to buyers as a screening tool. It cannot function as one.</strong>',
      'The FGF4 retrogene is the genetic basis of the breed’s disc disease — Brown and colleagues established that in PNAS in 2017, and it is why disc degeneration begins around four months and about 90 percent of discs show change by a year old. That part is settled.',
      'So: a breeder who runs it has wasted some money. A breeder who advertises “CDDY clear” parents is selling you a result that, at a 0.98 allele frequency, should make you ask hard questions about what was actually tested. Neither tells you anything useful about this puppy’s back.',
    ], source:'Dachshund Health UK; Brown et al., PNAS 2017'},

    {t:'p',text:'Whatever a breeder hands you, look the parents up yourself in the public database under their registered names. A certificate is a photograph of a claim; a database entry is the claim as the registry holds it.'},

    {t:'h3', text:'Tier three — the test almost nobody runs'},

    {t:'matrix', title:'Radiographic back scoring, by country', head:['Country','Status','What it requires'], rows:[
      ['Denmark','Scoring spines for roughly twenty years','Since 2019 both parents must be X-rayed, and only dogs graded K0 to K2 may be bred'],
      ['Britain','Royal Kennel Club IVDD scheme, launched 2021','Breeders can be asked for a score, and the ask is a normal one rather than a novelty'],
      ['Finland','Compulsory before breeding since 2025','—'],
      ['Norway','Recommended','—'],
      ['Sweden','A voluntary scheme','—'],
      ['United States','Neither the AKC nor the DCA recommends the procedure','Only about <em>three</em> US breeders have been confirmed to X-ray for spinal calcification at all'],
    ], hi:[[0,2],[5,2]], note:'Ask anyway. Ask every breeder you speak to whether the parents have been radiographed, and note the answer. Almost all will say no, and that is not, by itself, disqualifying where no scheme exists. But the question travels: enough buyers asking it is how a scheme starts.'},

    {t:'evidence', badge:'contested', paras:[
      '<strong>Radiographic back scoring works, exists, and is unavailable to buyers in most countries.</strong>',
      'Where a scheme exists, your position on the back is materially better: radiographic back scores exist, breeders can be asked for them, and the ask is a normal one.',
      'Dachshund Health UK’s guidance on the CDDY test is the statement this section is built on, and it binds breeders in its own country directly. Where a breeder in a country with no scheme can reasonably say none exists, a Danish or British breeder cannot.',
    ], source:'Danish and Royal Kennel Club screening schemes; US breeder survey; Dachshund Health UK on the Nordic programmes'},

    {t:'note', title:'Verify this list against the source, not against us', paras:[
      'Health-testing requirements change, and the CHIC database is the authority on what the AKC currently requires for certification. We could not retrieve the dachshund CHIC page at the time of writing, so this book does not print one.',
      'Go to <strong>ofa.org</strong> for the breed’s current CHIC requirements, and ask your own registry for its equivalent list. Hold the breeder to that rather than to ours, then look the parents up by name.',
    ]},

    {t:'check', title:'The ask, in four items', items:[
      'The three parent-club screens on both parents, with certificates in the parents’ registered names and the examiners’ names printed on them.',
      'The DNA panel, with the laboratory named and the report shown rather than summarized.',
      'Lafora without exception if the puppy is a miniature wirehaired.',
      'The spinal radiograph question, asked even though the answer will almost certainly be no.',
    ]},

    {t:'script', text:'the paper, in the parents’ names, with the examiner’s name on it'},
  ]
},

/* ══════════════════════════ 2.5 ══════════════════════════ */
{
  id: '2.5',
  title: 'Your rights when you buy',
  sub: 'the law will refund you; it will not fix the dog',
  pages: 2,
  blocks: [
    {t:'first',text:'Twenty-two US states have consumer laws written specifically for puppy sales. They share a shape worth knowing wherever you buy: a short window for infectious illness, a longer one for congenital or hereditary defects, and a remedy of refund, exchange, or reimbursement of veterinary costs.'},

    {t:'table', head:['State','Illness window','Congenital / hereditary','Remedy note'], rows:[
      ['California','15 days','1 year','Retention remedy up to <strong>150% of purchase price</strong>'],
      ['Florida','14 days','1 year','Refund, exchange, or vet cost reimbursement'],
      ['Illinois','21 days','—','Among the longer illness windows'],
      ['Vermont','7 days','—','Among the shortest'],
    ], note:'US examples. Windows and remedies vary; several of the twenty-two have provisions this book does not print because they could not be verified. Check what your own jurisdiction gives you before you rely on it.'},

    {t:'cards', title:'Two limits, and both cut against the buyer', items:[
      ['LIMIT ONE','They bind dealers, not every breeder','The statutes were written with pet stores and commercial sellers in view. The woman with one dam and two litters a year may fall entirely outside them.','a'],
      ['LIMIT TWO','Remedies cap at the purchase price','California’s 150 percent provision is the generous outlier. At one specialty neurology practice an all-in IVDD surgery runs five to seven times the price of a mid-band puppy.','a'],
    ]},

    {t:'p',text:'Your legal protection is strongest against the channel you should not be buying from and weakest against the channel you should. From a small breeder, your protection is the contract, not the statute.'},

    {t:'p',text:'PetMD puts spinal surgery lower than the specialty figure but still in multiples, and an MRI alone averages roughly a puppy’s price. The law returns your money; it does not return your dog.'},

    {t:'h3', text:'What the contract has to contain'},

    {t:'check', title:'Read for these before you sign', items:[
      'The names and registration numbers of both parents, and the puppy’s date of birth.',
      'Every health screen performed on the parents, named individually — not “fully health tested.”',
      'What the health guarantee covers, what it excludes, and its duration in months.',
      'What <em>you</em> must do to keep it valid: a vet exam within a stated number of days, vaccinations, diet requirements.',
      'The spay or neuter clause, including the required age — negotiate it if it conflicts with the neutering-timing data in Part V.',
      'A lifetime return clause: this breeder takes this dog back at any age, for any reason, rather than letting him reach a shelter.',
      'What happens if a congenital defect appears: refund, replacement, or veterinary reimbursement — and whether you must return the dog to collect.',
      'A clause requiring you to return the dog in order to be paid is not a guarantee. It is a trade, and you will not make it.',
    ]},

    {t:'p',text:'Your statutory rights are the weaker half. The stronger half is a policy bought before anything is wrong, and the window opens on purchase day.'},

    {t:'phases', title:'The insurance clock, from purchase day', items:[
      ['Day 0','Policy bought, before anything is wrong'],
      ['Days 1–14','An orthopedic exam collapses the wait'],
      ['Day 180','Otherwise, orthopedic cover starts here'],
    ]},

    {t:'note', title:'The clock that starts the day you buy', paras:[
      'At least one major insurer applies a <strong>180-day waiting period for orthopedic conditions and classifies IVDD as orthopedic</strong>. That period can be collapsed by an orthopedic exam — an “Orthopedic Report Card” — performed within the <strong>first 14 days</strong> of the policy. Done later and clean, it collapses to the exam date instead. Terms vary by insurer and by country.',
      'Note also how the NAIC model act, the US insurance regulators’ template, defines a preexisting condition: anything a vet advised on, treated, or saw signs of before the effective date <em>or during any waiting period</em>. A limp in week three of a 180-day window can become permanently uncovered.',
    ]},

    {t:'signals', title:'Keep every one of these', role:'g', items:[
      'The bill of sale.',
      'The vaccination record.',
      'The health certificates.',
      'The messages.',
    ]},

    {t:'p',text:'If the dog develops something covered by your contract or by a statute where you live, the claim is won or lost on whether you can produce a date.'},

    {t:'script', text:'the contract is the protection; the statute is the backstop'},
  ]
},

/* ══════════════════════════ 2.6 ══════════════════════════ */
{
  id: '2.6',
  title: 'Scoring a kennel visit',
  sub: 'ten things to look at while you are being charmed',
  pages: 1,
  blocks: [
    {t:'first',text:'Score it in the car, before you drive away, while you can still see the place. Ten criteria, zero to three each, thirty points available.'},

    {t:'tool', n:6, title:'The Kennel Visit Scorecard', intro:'0 = absent or refused · 1 = partial · 2 = adequate · 3 = what good looks like.'},

    {t:'table', head:['What you are scoring','0','3'], rows:[
      ['The dam','Not produced, or “at the vet”','Present, relaxed, clearly lives there'],
      ['The premises','You meet outside, or at one room','You are walked through where the litter lives'],
      ['Smell and cleanliness','Ammonia, wet bedding','Clean, ordinary house smell'],
      ['The litter','Timid, scattering, penned in isolation','Underfoot, curious, handled by the household'],
      ['Certificates','None offered','Originals produced unasked, parents’ names on them'],
      ['Answers to the 22','Deflection, irritation','Answered plainly, including the failures'],
      ['Questions asked of you','None','Detailed, and she is clearly weighing them'],
      ['Contract','Verbal only','Written, handed over to read before deciding'],
      ['Socialization evidence','Bare pen','Surfaces, noise, crate, car, visitors — described specifically'],
      ['Other litters / breeds on site','Several litters, multiple breeds','One litter, one breed, one household'],
    ]},

    {t:'p',text:'Score it alone and fast — five minutes, from memory, before you discuss the visit with anyone. Social occasions are graded generously in hindsight.'},

    {t:'gauge', title:'Reading the score, out of thirty', items:[
      ['27–30',100,'Proceed. Expect to wait for a litter; that is a good sign, not an obstacle.',''],
      ['21–26',72,'Something is missing. Identify exactly which criteria lost points and ask about those before any money moves.','mid'],
      ['BELOW 21',45,'Leave, politely, without a deposit. The dog in that room is not the last dachshund in the country.','hot'],
    ]},

    {t:'signals', title:'Disqualifying regardless of total', items:[
      'A zero on the dam.',
      'A zero on the premises.',
      'A zero on the certificates.',
    ]},

    {t:'p',text:'A 28 built on a missing mother is a 0. If you see three litters in a month, compare the sheets rather than the puppies. The puppies will all have been wonderful.'},

    {t:'script', text:'score it in the car, not in the kitchen'},
  ]
},

/* ══════════════════════════ 2.7 ══════════════════════════ */
{
  id: '2.7',
  title: 'Adopting an adult',
  sub: 'someone else raised him, and that cuts both ways',
  pages: 2,
  blocks: [
    {t:'first',text:'A grown dachshund arrives with his temperament already visible. You can meet him, walk him, watch him with a stranger, and know in an hour what a puppy takes eight months to reveal.'},

    {t:'plate',name:'bcs',title:'What an adult shows you',tag:'SCORE 1–9',
      caption:'Condition is one of the things you can read on the day. The target is 4 to 5 on the nine-point scale.'},

    {t:'table', head:['Rescue','Age','Fee'], rows:[
      ['Dachshund Rescue of North America','Under 1 year','Highest — the puppy fee'],
      ['','1–7 years','About three quarters of it'],
      ['','8 years and over','About two fifths'],
      ['Coast to Coast Dachshund Rescue','Under 1 year','Highest, plus an alteration deposit'],
      ['','1–4 years','Just under the puppy fee'],
      ['','4–8 years','About three quarters'],
      ['','8 years and over','Half'],
    ], note:'Coast to Coast states its fee includes the veterinary exam, vaccines, spay or neuter, parasite treatment, heartworm test and treatment, and microchip. Both are US groups; find the dachshund rescue for your own country and ask what its fee covers. Amounts differ everywhere; the pattern — fees falling with age — does not.'},

    {t:'p',text:'A puppy with a spay or neuter on top comes to several times any of these fees. An adoption fee is a dog with the first round of veterinary spending already behind him.'},

    {t:'h3', text:'What an unknown history actually changes'},

    {t:'duo', title:'Less than people assume / more than people assume',
      a:['The back — less','Disc degeneration begins at around four months, and roughly 90 percent of discs show change by a year old. By the time any dachshund is an adult, that process has already happened, whether you watched it or not. Buying a puppy does not let you supervise it.'],
      b:['The record — more','What you do lose is the parents’ paperwork and the early socialization record, and those are real losses.'],
      note:'Behavior is where the unknown history actually costs you, not the spine.'},

    {t:'tiles', title:'When disc disease presents', items:[
      ['3–6 yrs','Typical presentation','Chondrodystrophoid breeds typically present with disc disease inside this window.'],
      ['76%','Diagnosed at 4 to 8 years','Of cases. A five-year-old rescue is being adopted inside that window.'],
    ]},

    {t:'p',text:'This is not an argument against adopting one. It is an argument for adopting one with insurance arranged before the paperwork is signed.'},

    {t:'h3', text:'The first two weeks'},

    {t:'signals', title:'Decompression is mostly subtraction', role:'g', items:[
      'No visitors.',
      'No dog park.',
      'No long outings.',
      'No testing what he can handle.',
      'An open crate he can retreat into.',
      'A leash on indoors at first, so you guide rather than grab.',
      'Outings every one to two waking hours — assume he is not house-trained, whatever the listing said.',
      'Reward outside and immediately. Never punish an accident: punishment teaches a dog to hide the act, not to stop it.',
    ]},

    {t:'check', title:'Questions for the foster', items:[
      'How is he alone? For how long, and what have you actually observed?',
      'What does he do when a stranger comes to the door?',
      'How is he with the resident dogs, and how was that introduced?',
      'Has he shown any guarding — food, bed, a person, a stolen sock?',
      'What frightens him? Surfaces, noise, men, the car?',
      'Has he had any back episode, any yelp on being lifted, any reluctance on stairs?',
      'What does he weigh, and what is his body condition score?',
      'What is he eating, how much, and when?',
      'What is house-training really like in your house — not on the profile?',
      'If this placement fails, what happens to him?',
    ]},

    {t:'p',text:'Ask the last one plainly. A rescue that takes the dog back without argument is a rescue that placed him carefully.'},

    {t:'photo', n:14, note:'An adult smooth dachshund, grizzled muzzle, curled in an open crate in a quiet room, half in shadow, no person in frame.', caption:'The first fortnight is subtraction: fewer people, shorter outings, one quiet room he can leave.'},

    {t:'remember', items:[
      ['A trading license is not a quality mark','Under the US rules, four or fewer breeding females — or face-to-face sales at any scale — are both exempt. A license like that marks sight-unseen volume. Ask what yours certifies.'],
      ['Price cannot separate a breeder from a broker','The bands overlap across a wide stretch, and pet stores carry the highest band of all. Documentation and a face-to-face sale separate them. Price does not.'],
      ['The official test list is three items long','Patella, cardiac, ophthalmologist. Verify the current CHIC requirements at ofa.org and your own registry’s list, and demand the certificates in the parents’ names.'],
      ['“CDDY clear” means nothing','93 percent of dachshunds carry two copies; the allele frequency is 0.98. Dachshund Health UK advises against using it for selection. No breeder has an IVDD-free line.'],
      ['Lemon laws refund the purchase price, and stop there','Where they exist they bind dealers rather than every hobby breeder, and the cap sits far below a spinal surgery costing several times the puppy. Your protection is the contract and the insurance.'],
    ]},

    {t:'quiz', items:[
      'A breeder’s website advertises its commercial breeding license as its lead credential. What does that tell you about how she sells puppies?',
      'Two listings at the same price: one from a breeder two hours away, one from a marketplace seller who will ship. What single piece of information settles it, and why is it not the price?',
      'A seller tells you both parents tested CDDY clear and the line is IVDD-free. Give the two numbers that make this claim unsafe.',
    ], answers:[
      'That she sells sight-unseen and at volume. Under the US rules, breeders with four or fewer breeding females are exempt from licensing, and so is anyone who sells face to face — at any scale. Needing the license means neither exemption applies.',
      'Whether you can see the dog with its mother at the place it was whelped. Price cannot separate the two: the breeder band and the marketplace band overlap across the range where most dachshunds are sold.',
      '93 percent of dachshunds carry two copies of the CDDY variant and the allele frequency is 0.98 — so the test cannot rank dogs, and Dachshund Health UK advises against using it for selection. There is also no national dataset that could establish an IVDD-free line.',
    ]},
  ]
},

];
