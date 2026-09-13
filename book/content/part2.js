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
    {t:'first', text:'There are five doors into the puppy market. A breeder. A broker. An online marketplace. A pet store. A rescue. At eight weeks old the dog behind each door looks the same — same ears, same feet, same smell. The paperwork is not the same, the price is not the same, and the odds are not the same. Learning to tell the doors apart is the single highest-value hour you will spend before the dog arrives.'},

    {t:'h3', text:'The five doors'},

    {t:'table', head:['Door','What it actually is','What you can verify'], rows:[
      ['Breeder','A person who owns the dam, whelped the litter, and lives with it','Everything — the dam, the premises, the records, the contract'],
      ['Broker','A middleman who buys litters and resells them, sometimes with a website that reads exactly like a breeder’s','Nothing at source. You meet the dog, not the litter'],
      ['Online marketplace','A listings platform. The platform is not the seller and does not whelp anything','Only what the seller chooses to upload'],
      ['Pet store','Retail. Supplied by brokers and commercial kennels, banned outright in a growing list of jurisdictions','The store, not the origin'],
      ['Rescue','A foster network or shelter placing dogs it did not breed','Temperament in a home, health as far as the vet got'],
    ], note:'A broker site and a breeder site can be indistinguishable on a phone. The difference shows up the moment you ask to come over.'},

    {t:'p', text:'The distinction that matters is not kind-hearted versus greedy. It is whether the person selling you the dog was standing there when it was born. A breeder can show you the dam, the room, the other littermates, and the vaccination card in the same visit. A broker cannot show you any of it, because none of it happened where he lives. Everything in this part is built to force that distinction into the open early, while it is still cheap to walk away.'},

    {t:'evidence', badge:'myth', paras:[
      '<strong>A commercial breeding license is not a quality mark. The US rules show why, and the logic travels.</strong>',
      'USDA/APHIS, the US federal regulator, states plainly: “If you maintain four or fewer breeding females … you do not have to be USDA licensed.” And: “If you always sell pets to new owners in face-to-face transactions, you do not have to be USDA licensed, no matter how many breeding females you have.” Photos, videos and video calls do not count as face to face.',
      'Read those two exemptions together. A serious small breeder who sells to you in person is exempt twice over. The license does not mark quality — it marks <em>sight-unseen commercial volume</em>. The same logic holds elsewhere: the trading license a seller advertises tells you how he sells, not how he breeds. Ask your own regulator which license his operation needs, and what it certifies.',
    ], source:'USDA/APHIS regulatory guidance, via AKC (2022 update)'},

    {t:'p', text:'The online marketplace needs separating out, because buyers routinely misread it. A listings platform is not a seller. It whelps nothing, owns nothing, examines nothing, and in most cases verifies nothing beyond a payment method. Its asking prices are the lowest of the four commercial channels, which is exactly why it is where a first-time buyer starts looking and where the fraud concentrates. The listing is an advertisement written by a stranger. Treat it as the beginning of an investigation, never as a description.'},

    {t:'brief', title:'How a broker listing reads', paras:[
      'Several litters available now, in more than one color, sometimes in more than one breed. Ages staggered so something is always ready. Stock photography of puppies in baskets alongside two real snapshots.',
      'No dam named. No mention of which screens were run on which parent. Delivery offered as a convenience — often to an airport, sometimes to a parking lot halfway. A deposit “holds” the puppy within twenty-four hours.',
      'Every element of that is a solution to one problem: the seller cannot let you stand in the room where the litter was born.',
    ]},

    {t:'p', text:'Retail is closing. In the US, ten states now ban puppy sales in pet stores — California was first, in 2017; Colorado’s ban took effect in 2026; Delaware became the tenth — and 530 localities in 31 states have their own bans. The direction of travel is one-way, and it tells you what legislators concluded about where store puppies come from. Check what your own jurisdiction permits.'},

    {t:'stats', items:[
      ['10','US states ban retail puppy sales outright'],
      ['530','US localities in 31 states with their own bans'],
      ['4.8%','of mass-market fraud victims ever report it'],
    ]},

    {t:'h3', text:'The scam layer sitting on top of all of it'},

    {t:'p', text:'Puppy fraud is not a rare misfortune. It is a standing industry with seasonal peaks, and dachshunds — fifth on the AKC’s US popularity list — are a preferred product because demand is high and buyers travel. The Better Business Bureau tracks it in the US; find your own country’s equivalent.'},

    {t:'table', head:['Year','Reports to BBB Scam Tracker','Median loss (2022 = 100)'], rows:[
      ['2022','680','100'],
      ['2023','2,899','93'],
      ['2024','2,278','91'],
      ['2025 (through September)','1,632','80'],
    ], note:'Individual losses of three to six times the median appear in the same US file.'},

    {t:'p', text:'Read the 2023 line against 2022. Reports quadrupled in a year. Then they fell — which is not the same as the fraud falling, only the reporting. Demand explains part of the pattern: the dachshund moved to fifth on the AKC’s US popularity ranking for 2025, up from sixth, displacing the poodle from the top five. Popularity is a supply signal, and both the honest and the dishonest read it.'},

    {t:'p', text:'Now the important part. Those counts are not the size of the problem. The BBB cites FTC data showing that only <strong>4.8 percent</strong> of mass-market fraud victims ever report — so the reported numbers are roughly one twentieth of reality, and the true volume is on the order of twenty times what the table shows. The median loss stays modest for a reason: the sum is set low enough that most people write it off rather than fight. That is the design, not an accident.'},

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
    {t:'first', text:'A dachshund puppy can cost several times what another costs in the same country, whatever your currency, and the number alone tells you almost nothing. One price buys a health-screened litter from a woman with five years of show records; the same buys a truck-delivered puppy from a kennel you will never see. This section is about reading the price apart: what the money is buying, what raises it honestly, and what raises it for reasons that should make you close the tab.'},

    {t:'h3', text:'The bands, as they actually stand'},

    {t:'table', head:['Source','Where its prices sit'], rows:[
      ['Reputable breeder','Middle, and the widest band of the four'],
      ['Pet store','Highest of the four, by a clear margin'],
      ['Online marketplace','Lowest of the commercial channels'],
      ['Rescue / adoption','Lowest overall, and by a long way'],
    ], note:'Prices vary hugely by country and region; read the order of the bands, not the numbers. US bands: iHeartDogs, March 2026, updated September 2026.'},

    {t:'p', text:'Look at where those bands sit relative to each other. The marketplace band and the breeder band overlap across a wide stretch, and that overlap is where most dachshunds are actually sold. Inside it, <strong>price cannot tell a breeder from a broker.</strong> It never could. A broker pricing at the top of the marketplace band reads as a bargain breeder; a breeder pricing low because she does not need the money reads as suspicious. Buyers who use price as a proxy for quality get this exactly backwards about half the time.'},

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

    {t:'p', text:'Coat and color premiums. Dapple carries the largest of them — roughly double the longhaired premium. Wirehaired commands one of its own. Longhaired and wirehaired are simply coat varieties, shown separately and entirely unremarkable — if people will pay more for a beard, that is fashion, and fashion is allowed. Dapple is a different matter, and so is dilute.'},

    {t:'p', text:'The Dachshund Club of America, the breed’s US parent club, warns that dapple bred to dapple produces roughly <strong>25 percent double-dapple puppies</strong>, which “are more likely to carry health issues such as deafness, reduced eye size or missing eyes.” Red dapples can be visually ambiguous, so accidental dapple-to-dapple matings are a real and documented risk. Dilutes — blue and isabella — are on the accepted color list, but the DCA warns in the same breath of thin coats, skin sensitivity, vaccine failures and reduced lifespan. Color dilution alopecia is genetic, recessive, lists the dachshund as susceptible, shows from around six months, and is not curable.'},

    {t:'p', text:'Geography is the other legitimate mover, and it is worth doing arithmetic on. In the US survey the dearest regions run half as much again as the cheapest. A gap like that tempts buyers into long-distance purchases — which is precisely the transaction that forfeits the one check that works. Driving six hours each way to see a litter is cheap. Shipping a puppy you have never seen, to save the difference, is how the median fraud loss happens.'},

    {t:'p', text:'The last legitimate premium is the one nobody itemizes: the breeder who answers the phone in year three. Support is worth more than any single test result, because it is the difference between a bad night and an emergency-clinic visit where the examination alone is billed before anyone touches the dog. A breeder who has produced forty dachshunds has seen the thing frightening you at 11 p.m. She will tell you whether it waits until morning. That service does not appear on an invoice and cannot be bought later.'},

    {t:'p', text:'So the market pays its two largest premiums for the two patterns the breed’s own parent club warns about. That is the perverse incentive at the center of dachshund pricing, and once you have seen it you cannot unsee it in a listing.'},

    {t:'note', title:'Year one, built from components', paras:[
      'A first-year total circulates under the ASPCA’s name. We could not trace it to a live source, so it is not in this book. Here is the arithmetic instead, in your local currency, from figures that are sourced.',
      '<strong>The dog:</strong> a rescue costs roughly a fifth of a breeder puppy. <strong>Setup and first months:</strong> Rover puts this at the biggest line of the year — at the top end it exceeds the puppy. <strong>Spay or neuter:</strong> about a fifth to a quarter of a mid-band puppy, and dearer than most people budget. <strong>Insurance:</strong> in NAPHIA’s 2025 report, on 2024 data, a year of accident-and-illness cover cost half as much again as a spay; wellness plans add most of that again.',
      'Year one lands at a multiple of the purchase price at both ends of the range, and the purchase price is the smallest part of it. And hold this next to it: Synchrony puts the lifetime cost of a dog over fifteen years far above what dog owners typically guess. The guess is off by a factor of three to seven. This is an estimate assembled from the sources named — not a survey.',
    ]},

    {t:'p', text:'A last note on deposits. A deposit is normal, and a waitlist is a good sign — it means the litters are planned rather than produced. What is not normal is a deposit taken before you have seen anything, refunded only as credit toward a future puppy, or demanded inside twenty-four hours because “someone else is interested.” Urgency is the one sales tool that works on everybody, which is why it is the one every bad seller reaches for first.'},

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
    {t:'first', text:'You are not being rude. You are buying an animal that will live with you for a decade and a half, from a stranger, usually on the strength of a phone call and some photographs. A breeder worth your money has been waiting for someone to ask properly. The ones who bristle are telling you something, and they are telling you early, which is a kindness.'},

    {t:'p', text:'Run it as two conversations, not one. The first is a phone call, before you have seen the puppies, when refusal costs you nothing but a Tuesday evening. Questions one through eleven belong there — the ones about the dam, the screens, the line and what has gone wrong. The second conversation happens at the house, standing in the room, where you ask the rest and watch how the answers match what is in front of you. Splitting them matters, because the first call is the only point at which you are still capable of leaving.'},

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

    {t:'p', text:'Question twenty-two is the one that grades the other twenty-one. A breeder who has spent nine weeks on a litter wants to know your work hours, your stairs, your children, your last dog and how it died. If she sends a puppy to anyone with a deposit, she will send one to anyone with a deposit — and one day that will be a person who returns him at fourteen months because he barks.'},

    {t:'note', title:'What she should be asking you', paras:[
      'Count these on your side of the call. A breeder placing a dachshund into a fifteen-year home wants to know your work hours and who is home in the middle of the day; whether you have stairs, and how many; what your furniture situation is, because this breed will be on the sofa; whether there are children, and how old; whether you have owned a dog before and what happened to it.',
      'She should ask what you plan to do about insurance, and she should have an opinion about the answer. She should ask whether anyone in the house has strong feelings about barking.',
      'If she asks none of it, you are not being interviewed. You are being invoiced.',
    ]},

    {t:'h3', text:'Six answers that end the conversation'},

    {t:'table', head:['What you hear','Why you leave'], rows:[
      ['“Both parents are dapple — that’s how we get the really striking ones.”','About a quarter of that litter can be double dapple. The DCA links double dapples to deafness, reduced eye size and missing eyes. This is a known outcome, not bad luck.'],
      ['“We don’t health test. Our lines are clean.”','The parent-club list is three items long: patella, cardiac, eyes. An operation that will not spend on three exams is telling you what it spends on everything else.'],
      ['“I can ship him out Friday — just send the deposit.”','A sale that is not in person is not a face-to-face sale, and the US regulator does not count photos or video calls as one either. It is also the exact shape of every case in the fraud file.'],
      ['“He can leave at six weeks.”','The socialization window is the first three months of life, and part of it belongs to the breeder. Early release is turnover, not generosity.'],
      ['“Our lines are IVDD-free.” / “The parents are CDDY clear.”','93 percent of dachshunds carry two copies of the CDDY variant; the allele frequency is 0.98. There is no IVDD-free line, and no national dataset that could establish one. See 2.4.'],
      ['“They’re registered, so they’re health tested.”','Registration is a pedigree record — at the AKC, at The Kennel Club, at any FCI member. Even Breeder of Merit status only certifies that screens are <em>performed</em>: a participation credential, not an audit.'],
    ]},

    {t:'p', text:'Tone does the work here. You are not cross-examining anyone; you are asking a person about something she has spent nine weeks doing, and most breeders enjoy the conversation because almost nobody has it with them. Ask plainly and then stop talking. The useful information is in what comes after the pause — whether she volunteers the litter that went wrong, whether she corrects you when you get something backwards, whether she says “I don’t know” about anything at all. Certainty across twenty-two questions is not expertise. It is a script.'},

    {t:'p', text:'None of the six requires expertise to catch. They require you to have written the questions down beforehand and to ask them before you meet the puppy, because after you meet the puppy your judgment is compromised and both of you know it.'},

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
    {t:'first', text:'Say this out loud, because it changes what you can reasonably demand: the AKC parent-club health testing requirement for the dachshund is three items long. A patella evaluation. A cardiac exam. An ophthalmologist evaluation. That is the list. The KC and FCI equivalents are set by their own clubs, so ask which list applies where you are buying. Not the back. Not the spine. Nothing about the one condition that defines the breed.'},

    {t:'tool', n:5, title:'The Health-Testing Ask', intro:'What to request, in what order, and what each result actually rules out. Bring this to the first phone call, not the visit.'},

    {t:'h3', text:'Tier one — the parent-club screens'},

    {t:'list', ordered:true, items:[
      '<strong>Patella evaluation.</strong> A hands-on exam for luxating kneecaps, graded by an examiner. On both parents.',
      '<strong>Cardiac exam.</strong> Auscultation at minimum, by a qualified examiner. On both parents.',
      '<strong>Ophthalmologist evaluation.</strong> A board-certified eye exam, not a glance from the family vet. On both parents.',
    ]},

    {t:'p', text:'Three exams is a low bar, and a breeder who clears it has done what her national parent club asks and no more, under whichever registry she breeds. That is the honest framing. The good breeders you will meet go well past it, and they will tell you so without being asked. Ask for the certificates in the parents’ registered names with the examiners’ names printed on them. A breeder saying “yes, all clear” is a claim; paper is a record.'},

    {t:'p', text:'Be precise about what the three rule out, because breeders and buyers both overstate it. A patella evaluation describes two knees on the day they were handled. A cardiac exam is a listen, at one point in a dog’s life. An eye certification expires — most schemes require re-examination, so a certificate from four years ago describes a dog who no longer exists. None of the three says anything about the back, the disease that defines this breed and drives its costs. Clear parents are a floor. They are not a forecast.'},

    {t:'h3', text:'Tier two — the DNA panel'},

    {t:'table', head:['Test','What it is for','Who should insist'], rows:[
      ['Lafora disease (NHLRC1)','A seizure disorder concentrated in the breed','Anyone buying a <strong>miniature wirehaired</strong> — non-negotiable'],
      ['PRA crd4/cord1 (RPGRIP1)','Progressive retinal atrophy','Every buyer'],
      ['Degenerative myelopathy','Progressive spinal cord disease','Every buyer'],
      ['Osteogenesis imperfecta','Brittle bone disease','Every buyer'],
      ['LGMD 2D','Muscular dystrophy','Miniature buyers'],
      ['MPS IIIA','A storage disease','Every buyer'],
      ['Narcolepsy, NCL1, NCL2','Neurological conditions on the standard panel','Every buyer'],
    ], note:'Panel as offered by Embark. Ask which lab ran it and ask to see the report, not a summary.'},

    {t:'p', text:'Lafora is the one to be immovable about. It is concentrated in miniature wirehaired dachshunds, the DNA test is established and commercially available, and screening works: in the UK, screening cut the proportion of affected dogs from <strong>10.4 percent in 2012 to 2.7 percent in 2017</strong>. A miniature wire breeder who has not run it is either unaware of her own variety’s literature or hoping you are.'},

    {t:'evidence', badge:'myth', paras:[
      '<strong>The CDDY/FGF4 test is sold to buyers as a screening tool. It cannot function as one.</strong>',
      'The FGF4 retrogene is the genetic basis of the breed’s disc disease — Brown and colleagues established that in PNAS in 2017, and it is why disc degeneration begins around four months and about 90 percent of discs show change by a year old. That part is settled.',
      'The problem is arithmetic. <strong>93 percent of dachshunds carry two copies of the variant, and the allele frequency is 0.98.</strong> A test on which almost every dog returns the same result cannot rank dogs. Dachshund Health UK is explicit: “we do not currently recommend the use of the UC Davis DNA Test (CDDY),” and warns that selecting on it “will have an irreversible effect on the Dachshund breed excluding almost all dogs from breeding.”',
      'So: a breeder who runs it has wasted some money. A breeder who advertises “CDDY clear” parents is selling you a result that, at a 0.98 allele frequency, should make you ask hard questions about what was actually tested. Neither tells you anything useful about this puppy’s back.',
    ], source:'Dachshund Health UK; Brown et al., PNAS 2017'},

    {t:'p', text:'One habit is worth building now. Whatever a breeder hands you, look the parents up yourself in the public database under their registered names. A certificate is a photograph of a claim; a database entry is the claim as the registry holds it. Two minutes on a phone, in the driveway, settles more than an hour of conversation.'},

    {t:'h3', text:'Tier three — the test almost nobody runs'},

    {t:'evidence', badge:'contested', paras:[
      '<strong>Radiographic back scoring works, exists, and is unavailable to buyers in most countries.</strong>',
      'Denmark has scored dachshund spines for roughly twenty years; since 2019 the rules require both parents to be X-rayed, and only dogs graded K0 to K2 may be bred. Britain launched a Royal Kennel Club IVDD screening scheme in 2021.',
      'In the United States, neither the AKC nor the Dachshund Club of America recommends the procedure, and only about <em>three</em> US breeders have been confirmed to X-ray for spinal calcification at all. Finland made it compulsory before breeding in 2025; Norway recommends it and Sweden runs a voluntary scheme.',
      'Ask anyway. Ask every breeder you speak to whether the parents have been radiographed, and note the answer. Almost all will say no, and that is not, by itself, disqualifying where no scheme exists. But the question travels: enough buyers asking it is how a scheme starts.',
    ], source:'Danish and Royal Kennel Club screening schemes; US breeder survey; Dachshund Health UK on the Nordic programmes'},

    {t:'note', title:'Where a back-scoring scheme does exist', paras:[
      'Where a scheme exists, your position on the back is materially better. The Royal Kennel Club has run an IVDD screening scheme since 2021 and Denmark has graded spines for two decades, so radiographic back scores exist, breeders can be asked for them, and the ask is a normal one rather than a novelty.',
      'Dachshund Health UK’s guidance on the CDDY test is the statement this section is built on, and it binds breeders in its own country directly. Where a breeder in a country with no scheme can reasonably say none exists, a Danish or British breeder cannot.',
    ]},

    {t:'note', title:'Verify this list against the source, not against us', paras:[
      'Health-testing requirements change, and the CHIC database is the authority on what the AKC currently requires for certification. We could not retrieve the dachshund CHIC page at the time of writing, so this book does not print one.',
      'Go to <strong>ofa.org</strong> for the breed’s current CHIC requirements, and ask your own registry for its equivalent list. Hold the breeder to that rather than to ours, then look the parents up by name.',
    ]},

    {t:'p', text:'Put together, the ask is short enough to say in one breath: the three parent-club screens on both parents with certificates, the DNA panel with the laboratory named, Lafora without exception if the puppy is a miniature wirehaired, and the spinal radiograph question asked even though the answer will almost certainly be no. Four items. A breeder who meets the first three and answers the fourth honestly is doing more than her national club requires of her.'},

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
    {t:'first', text:'Some markets have consumer laws written specifically for puppy sales — twenty-two US states have them, California, Florida, Illinois and Vermont among them. They share a shape worth knowing wherever you buy: a short window for infectious illness, a longer one for congenital or hereditary defects, and a remedy of refund, exchange, or reimbursement of veterinary costs. Ask your own seller, and your own consumer regulator, which of the three you are actually owed.'},

    {t:'table', head:['State','Illness window','Congenital / hereditary','Remedy note'], rows:[
      ['California','15 days','1 year','Retention remedy up to <strong>150% of purchase price</strong>'],
      ['Florida','14 days','1 year','Refund, exchange, or vet cost reimbursement'],
      ['Illinois','21 days','—','Among the longer illness windows'],
      ['Vermont','7 days','—','Among the shortest'],
    ], note:'US examples. Windows and remedies vary; several of the twenty-two have provisions this book does not print because they could not be verified. Check what your own jurisdiction gives you before you rely on it.'},

    {t:'p', text:'Two limits matter more than any of the details, and both of them cut against the buyer.'},

    {t:'p', text:'<strong>First, these laws bind dealers and retailers — not every hobby breeder.</strong> The statutes were written with pet stores and commercial sellers in view. The woman with one dam and two litters a year may fall entirely outside them, which produces the awkward result that your legal protection is strongest against the channel you should not be buying from and weakest against the channel you should. If you buy from a small breeder, your protection is the contract, not the statute.'},

    {t:'p', text:'<strong>Second, remedies are usually capped at the purchase price.</strong> California’s 150 percent provision is the generous outlier. Set that cap against what this breed can cost: at one specialty neurology practice an all-in IVDD surgery runs <strong>five to seven times the price of a mid-band puppy</strong>; PetMD puts spinal surgery lower but still in multiples, and an MRI alone averages roughly a puppy’s price. A full refund does not touch it. The law returns your money. It does not return your dog, and it was never built to fund fifteen years of care.'},

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

    {t:'note', title:'The clock that starts the day you buy', paras:[
      'Your statutory rights are the weaker half of your protection. The stronger half is a policy bought before anything is wrong — and the purchase week is when it is worth the most.',
      'At least one major insurer applies a <strong>180-day waiting period for orthopedic conditions and classifies IVDD as orthopedic</strong>. That period can be collapsed by an orthopedic exam — an “Orthopedic Report Card” — performed within the <strong>first 14 days</strong> of the policy. Done later and clean, it collapses to the exam date instead. Terms vary by insurer and by country.',
      'Note also how the NAIC model act, the US insurance regulators’ template, defines a preexisting condition: anything a vet advised on, treated, or saw signs of before the effective date <em>or during any waiting period</em>. A limp in week three of a 180-day window can become permanently uncovered. Part IV works through this properly; the point here is that the window opens on purchase day, not when you get round to it.',
    ]},

    {t:'p', text:'Keep everything. The bill of sale, the vaccination record, the health certificates, the messages. If the dog develops something covered by your contract or by a statute where you live, the claim is won or lost on whether you can produce a date.'},

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
    {t:'first', text:'Score it in the car, before you drive away, while you can still see the place. Ten criteria, zero to three each, thirty points available.'},

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

    {t:'p', text:'Score it alone, and score it fast — five minutes, from memory, before you discuss the visit with anyone. A visit is a social occasion, and social occasions are graded generously in hindsight. The scorecard exists to hold the numbers still while your goodwill catches up.'},

    {t:'note', title:'Reading the score', paras:[
      '<strong>27–30.</strong> Proceed. Expect to wait for a litter; that is a good sign, not an obstacle.',
      '<strong>21–26.</strong> Something is missing. Identify exactly which criteria lost points and ask about those before any money moves.',
      '<strong>Below 21.</strong> Leave, politely, without a deposit. The dog in that room is not the last dachshund in the country.',
      '<strong>Any zero on the dam, the premises, or the certificates is disqualifying regardless of total.</strong> A 28 built on a missing mother is a 0.',
    ]},

    {t:'p', text:'One visit, one scorecard. If you see three litters in a month, score all three and compare the sheets rather than the puppies. The puppies will all have been wonderful.'},

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
    {t:'first', text:'A grown dachshund arrives with his temperament already visible. You can meet him, walk him, watch him with a stranger, and know within an hour most of what a puppy will take eight months to reveal. That is the trade: you give up the blank page and you get information.'},

    {t:'table', head:['Rescue','Age','Fee'], rows:[
      ['Dachshund Rescue of North America','Under 1 year','Highest — the puppy fee'],
      ['','1–7 years','About three quarters of it'],
      ['','8 years and over','About two fifths'],
      ['Coast to Coast Dachshund Rescue','Under 1 year','Highest, plus an alteration deposit'],
      ['','1–4 years','Just under the puppy fee'],
      ['','4–8 years','About three quarters'],
      ['','8 years and over','Half'],
    ], note:'Coast to Coast states its fee includes the veterinary exam, vaccines, spay or neuter, parasite treatment, heartworm test and treatment, and microchip. Both are US groups; find the dachshund rescue for your own country and ask what its fee covers. Amounts differ everywhere; the pattern — fees falling with age — does not.'},

    {t:'p', text:'Set that against the price of a puppy with a spay or neuter on top: together, several times any of these fees. An adoption fee is not a discount on a dog; it is a dog with the first round of veterinary spending already behind him.'},

    {t:'h3', text:'What an unknown history actually changes'},

    {t:'p', text:'Less than people assume about the back, and more than people assume about behavior. Disc degeneration begins at around four months, and roughly 90 percent of discs show change by a year old — so by the time any dachshund is an adult, that process has already happened, whether you watched it or not. Buying a puppy does not let you supervise it. What you do lose is the parents’ paperwork and the early socialization record, and those are real losses.'},

    {t:'p', text:'Be clear-eyed about age. Chondrodystrophoid breeds typically present with disc disease between three and six years, and 76 percent of cases are diagnosed between four and eight. A five-year-old rescue is being adopted inside that window. This is not an argument against adopting one — it is an argument for adopting one with insurance arranged before the paperwork is signed, and for reading Part IV before you do.'},

    {t:'h3', text:'The first two weeks'},

    {t:'p', text:'Decompression is mostly subtraction. No visitors, no dog park, no long outings, no testing what he can handle. An open crate he can retreat into. A leash on indoors at first, so you guide rather than grab. Assume he is not house-trained whatever the listing said: outings every one to two waking hours, reward outside and immediately, and never punish an accident — punishment teaches a dog to hide the act, not to stop it.'},

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

    {t:'p', text:'Ask the last one plainly. A rescue that takes the dog back without argument is a rescue that placed him carefully, and you want to have heard the answer before you need it.'},

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
