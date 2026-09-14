/* ═══════════════════════════════════════════════════════════════
   PART IV — TRAINING A STUBBORN DOG
   Sections 4.1 – 4.7 · 19 pages · Tools 11, 12, 13
   ═══════════════════════════════════════════════════════════════ */

module.exports = [

/* ───────────────────────── 4.1 ───────────────────────── */
{ id:'4.1', title:'The method, and the evidence for it', sub:'why the shortcut costs more than it saves', pages:3, blocks:[

  {t:'first',text:'Every book about this breed opens with the same word. <em>Stubborn.</em> It is the wrong word, and it does damage, because it tells you the dog is refusing you.'},

  {t:'duo',title:'Stubborn, or self-employed',
    a:['What the word says','He is refusing you, and the job is to break the refusal.'],
    b:['What is actually happening','He is weighing your instruction against something more interesting and deciding for himself — which is precisely the trait he was selected for.'],
    note:'The training problem is not how to break that. It is how to become the better offer.'},

  {t:'p',text:'The American Veterinary Society of Animal Behavior holds that “only reward-based training methods are used for all dog training, including the treatment of behavior problems.”'},

  {t:'signals',title:'What the same statement names to avoid',items:[
    'Choke collars.',
    'Prong collars.',
    'Electronic collars.',
    'Intimidation.',
    'Physical correction.',
    'Flooding.'
  ],role:'g'},

  {t:'tiles',title:'What the comparison measured',items:[
    ['55.9','Lip licks per session · aversive schools','Against 4.1 ± 0.4 in reward-based schools. The aversive figure is 55.9 ± 4.4.'],
    ['0.26','Salivary cortisol · aversive schools','Against 0.13.'],
    ['Pessimistic','Judgment bias, measured away from training','A different place, no trainer, no collar, no cues — and the aversive-school dogs were measurably more pessimistic about an ambiguous outcome.']
  ],roles:['b','b','s'],src:'PLOS ONE — companion dogs from aversive-based and reward-based training schools, Porto'},

  {t:'evidence',badge:'settled',paras:[
    'The trade sells a middle position: rewards for what you like, a correction for what you don’t. “Balanced training” is a marketing phrase. It has never been a finding.',
    'Researchers in Porto compared companion dogs enrolled in aversive-based and reward-based schools. Stress signals in session: <strong>55.9 ± 4.4 lip licks against 4.1 ± 0.4</strong>. Salivary cortisol <strong>0.26 against 0.13</strong>. Then they moved the dogs to a different place with no trainer, no collar and no cues, and ran a judgment-bias test. The aversive-school dogs were measurably more pessimistic about an ambiguous outcome.',
    'That last finding is the one that matters to you. The cost did not stay in the training session. It followed the dog home.'
  ],source:'PLOS ONE — dogs from aversive-based and reward-based training schools · AVSAB Humane Dog Training Position Statement, 2021'},

  {t:'h3',text:'A dog bred to make the call himself'},

  {t:'p',text:'The AKC standard — The Kennel Club and the FCI publish their own — asks for a dog who is “clever, lively and courageous to the point of rashness, persevering in above- and below-ground work, with all the senses well-developed.” Shyness is a serious fault. That work happened in the dark, out of the handler’s reach.'},

  {t:'p',text:'Coercion gets compliance from a dog whose first strategy is to consult his handler. This one consults his nose. Punish him and you get a dog who offers less and hides the early warnings you need to read.'},

  {t:'script',text:'he isn’t defying you. he has found a better offer, and it smells like a rabbit'},

  {t:'p',text:'Reward-based training is not the absence of rules; it is the absence of pain and fear as teaching tools. Arrange the situation so the right answer is the easy one, then pay for it until it is his default.'},

  {t:'h3',text:'The marker, and why the timing beats the treat'},

  {t:'steps',items:[
    ['Why you need one','The window is shorter than your arm','Dogs learn what happened in the half-second before the good thing arrived. Your hand cannot reach his mouth that fast, so you need a signal that can.','½ SEC'],
    ['What it is','One short word, or a clicker','“Yes.” Said the same way every time.',''],
    ['When it fires','The exact instant the rear end touches the floor','Then take as long as you like to deliver the food.',''],
    ['What happens without it','You pay whatever he did next','Usually standing up again — which is why the sit keeps dissolving, and why the owner cannot work out where it went.','']
  ]},

  {t:'h3',text:'What you are paying with'},

  {t:'tiles',title:'The treat budget',items:[
    ['48 kcal','A 16 lb (7.3 kg) dachshund’s daily allowance','About two tablespoons of kibble, or one stick of cheese split forty ways.'],
    ['10%','Ceiling, as a share of daily calories','Treats stay at or under it.']
  ],src:'Do the arithmetic before you decide to pay in cheddar'},

  {t:'note',title:'Paying him without fattening him',paras:[
    'Weigh the day’s ration in the morning and train out of it. What he earns comes off dinner.',
    'Keep a high-value tier — a pea-sized piece of chicken — reserved for recall, nail trims and the veterinarian. If the good stuff is everywhere, it is worth nothing anywhere.',
    'Break everything smaller than you think. He is working for the event, not the volume.'
  ]},

  {t:'h3',text:'Sessions, and the nose as a paycheck'},

  {t:'cards',title:'Rank the rewards before you need them',items:[
    ['TIER ONE','Kibble','For what he already knows.','b'],
    ['TIER TWO','Something soft and smelly','For new work.','a'],
    ['TIER THREE','Roast chicken, cheap hot dog','One item at the top. It appears for recall and for the veterinarian and nowhere else.','']
  ]},

  {t:'keyfig',title:'The shape of a session',items:[
    ['LENGTH','2–3 min','Five to ten repetitions, twice a day. Two short sessions will outrun one long one every time.'],
    ['WHO ENDS IT','You, not him','Stop while he still wants another one. A session that ends because the dog quit has taught him that quitting ends work — so end it yourself, on a rep he got right, and walk away first.']
  ]},

  {t:'brief',title:'Stop fighting the nose. Hire it.',paras:[
    'A controlled trial gave one group of dogs two weeks of nosework and a comparison group two weeks of heelwork. The nosework dogs came out measurably more optimistic on a judgment-bias test. Sniffing is not a lapse in concentration. It is doing something for him.',
    'So use it as wages. Scatter a handful of kibble in long grass and release him to it after a hard repetition. For this breed, three minutes of searching is a bigger paycheck than any biscuit you can buy.'
  ]},

  {t:'photo',n:18,note:'Miniature wirehaired at eye level in long grass, nose down, tail up, mid-search. Late afternoon side light, shallow depth of field.',caption:'Paid in the only currency he never gets tired of.'}
]},

/* ───────────────────────── 4.2 ───────────────────────── */
{ id:'4.2', title:'The window that does not reopen', sub:'three months, and no extensions', pages:4, blocks:[

  {t:'first',text:'There is exactly one deadline in this book: the sensitive period for socialization runs through the first three months of life. Everything else here can be started late and still work.'},

  {t:'tiles',title:'The one deadline',items:[
    ['3 months','The sensitive period — all of it','It closes on schedule whether or not you used it.'],
    ['7–8 weeks','Earliest puppy class','Provided the puppy has had one vaccination at least seven days before.'],
    ['Leading','Cause of death in dogs under three','Behavior problems. Not disc disease. Not cancer. Behavior.']
  ],src:'AVSAB Position Statement on Puppy Socialization'},

  {t:'evidence',badge:'myth',paras:[
    '“Keep him home until he’s fully vaccinated.” You will be told this, sometimes by people with a license on the wall, and it is the single most expensive piece of advice in dog ownership.',
    'The infectious risk is real and it is managed by <em>where</em> you socialize, not by <em>whether</em> you do. Clean surfaces, known dogs, carried across parking lots. The behavioral risk of waiting is managed by nothing, because by the time the last shot goes in, the window has closed.',
    'AVSAB’s puppy socialization statement says the process should begin before the series is finished and calls this the standard of care.'
  ],source:'AVSAB Position Statement on Puppy Socialization'},

  {t:'flag',title:'Where not to take him before the series is done',paras:[
    'No dog parks. No pet-store floors. No highway rest stops or any ground where unknown dogs eliminate.',
    'Carry him across those surfaces. A puppy in your arms outside a hardware store is socializing; a puppy sniffing the sidewalk there is sampling.',
    'Choose dogs whose vaccination status you can personally verify. One healthy, tolerant adult dog in a friend’s yard does more for him than a dozen strangers ever will.'
  ]},

  {t:'h3',text:'Exposure is not socialization'},

  {t:'p',text:'Socialization is the pairing of a new thing with a good outcome, at a distance the puppy can handle. Exposure is just the new thing — a nine-week-old frozen against your chest at a farmers market is being taught that the world arrives faster than he can cope with.'},

  {t:'decision',title:'Read the response, then act on it',items:[
    ['Does he approach and investigate?','',[['Yes → let him, and pay him',''],['No → read the next question','o']]],
    ['Does he notice it and carry on?','Neutral is a win.',[['Yes → stay exactly where you are',''],['No → read the next question','o']]],
    ['Does he freeze, tuck, back away, or stop taking food?','The food test is the reliable one. A puppy who will not eat is not learning anything you want him to learn.',[['Yes → increase the distance until he eats, then stay there','a']]]
  ]},

  {t:'script',text:'if he won’t take the chicken, the chicken isn’t the problem'},

  {t:'h3',text:'Flooding, and why it looks like it worked'},

  {t:'p',text:'Flooding means holding a frightened dog in the thing that frightens him until he stops reacting; AVSAB lists it among the methods to avoid. A dog who has stopped struggling has not decided the vacuum is fine, he has stopped trying. Do it to a dachshund and you pay later in growling, because you taught him that signaling gets him nowhere.'},

  {t:'cards',title:'The stakes are breed-specific',items:[
    ['A FEARFUL RETRIEVER','Tends to withdraw','He hides behind the couch, and the household calls him shy.','b'],
    ['A FEARFUL DACHSHUND','Loud, forward, and certain','He has the confidence the AKC standard asks for — courageous to the point of rashness — so the same underlying fear barks at the window for six years and lunges at a Labrador on a sidewalk.','a']
  ]},

  {t:'h3',text:'Choosing the class'},

  {t:'matrix',title:'Vetting a puppy class, in six questions',head:['Ask them','The answer you want','If you do not get it'],rows:[
    ['Entry requirements','Proof of one vaccination and a clean health history','Ask harder'],
    ['Group size','Small','Ask harder'],
    ['Time split','At least as much on handling, settling and owner questions as on free play','Ask harder'],
    ['A frightened puppy','A barrier, more distance and food','Walk out'],
    ['Equipment used on the premises','Nothing aversive, anywhere','Walk out'],
    ['How they group the puppies','By size','Walk out']
  ],hi:[[3,2],[4,2],[5,2]],note:'Only the equipment question is absolute: if prong collars or e-collars appear anywhere on the premises, leave — 4.1 gives the reason. The answer on a frightened puppy should never be “letting him work it out.” And a ten-pound (4.5 kg) puppy learning that dogs are terrifying because he spent six weeks being flattened by adolescent Labradors is a socialization failure wearing a certificate.'},

  {t:'tool',n:11,title:'The sixty-item exposure list',intro:'Seven categories, sixty entries, one deadline. Aim to clear the list by sixteen weeks and then run the categories again through his first year — a tick is not a certificate. A box counts as ticked only if he stayed loose and took food. If he took nothing, it did not happen, and you should repeat it further away.'},

  {t:'signals',title:'Seven categories, sixty boxes',items:[
    'Surfaces — 9',
    'Sounds — 11',
    'People — 11',
    'Dogs — 7',
    'Handling — 12',
    'Car — 6',
    'Alone — 4'
  ],role:'g'},

  {t:'check',title:'Tool 11 · Sixty exposures before sixteen weeks',items:[
    'Surfaces — grass, wet and dry',
    'Surfaces — gravel',
    'Surfaces — sand or wood chips',
    'Surfaces — tile and polished wood',
    'Surfaces — a metal grate or manhole cover',
    'Surfaces — a wobble board or a sofa cushion on the floor',
    'Surfaces — three carpeted steps, carried down, never jumped',
    'Surfaces — a clinic scale',
    'Surfaces — snow, ice, or cold concrete, where you have it',
    'Sounds — vacuum running in the next room',
    'Sounds — blender or coffee grinder',
    'Sounds — doorbell, then a knock',
    'Sounds — smoke-alarm test chirp',
    'Sounds — thunder, recorded, low volume',
    'Sounds — fireworks, recorded, low volume',
    'Sounds — traffic, from a bench thirty feet (10 m) back',
    'Sounds — a garbage truck working the street',
    'Sounds — a baby crying',
    'Sounds — a dog barking behind a fence',
    'Sounds — hair dryer, pointed away',
    'People — men with deep voices',
    'People — a hat and sunglasses together',
    'People — a hood, or a heavy winter coat',
    'People — a beard',
    'People — a uniform: delivery driver, postal worker',
    'People — a cane, a walker, or a wheelchair',
    'People — a toddler, seated and supervised',
    'People — a child of six to ten, feeding from a flat palm',
    'People — a crowd seen from thirty feet (10 m), no greeting',
    'People — someone jogging past',
    'People — a stranger who ignores him completely',
    'Dogs — one calm vaccinated adult, in a private yard',
    'Dogs — a dog ten times his weight, at distance, on leash',
    'Dogs — a puppy his own size, five minutes, then done',
    'Dogs — a dog who has no interest in him',
    'Dogs — dogs behind a fence, walking past',
    'Dogs — a puppy class of mixed breeds and sizes',
    'Dogs — a cat, behind a baby gate',
    'Handling — each paw held three seconds',
    'Handling — clippers touched to a nail, nothing cut',
    'Handling — one nail cut, then paid and finished',
    'Handling — both ears looked into',
    'Handling — lips lifted, teeth touched',
    'Handling — toothbrush along the outside of the teeth',
    'Handling — lifted with two hands, chest and hindquarters supported',
    'Handling — held on his side across your lap, ten seconds',
    'Handling — brushed along the back and flanks',
    'Handling — harness on and off, paid both times',
    'Handling — a stranger runs both hands over him, vet-style',
    'Handling — a towel rubbed over a wet dog',
    'Car — sitting in a parked car, engine off, fed',
    'Car — engine running, no movement',
    'Car — a two-minute drive that ends somewhere good',
    'Car — a twenty-minute drive',
    'Car — a trip to the clinic for a weigh-in and a cookie, nothing else',
    'Car — carrier or crate strapped down, used every time',
    'Alone — crate shut, you in the room',
    'Alone — crate shut, you out of sight thirty seconds',
    'Alone — five minutes behind a closed door',
    'Alone — thirty minutes, filmed on your phone'
  ]},

  {t:'photo',n:19,note:'Eight-week-old smooth puppy carried in the crook of an arm outside a busy hardware store, looking out calmly at middle distance. Handler cropped at the shoulder.',caption:'Carried, not walked. At this age the parking lot is the risk and the view is the point.'}
]},

/* ───────────────────────── 4.3 ───────────────────────── */
{ id:'4.3', title:'Eight things he needs to know', sub:'the entire curriculum, and where people break it', pages:5, blocks:[

  {t:'first',text:'Eight behaviors cover almost everything this dog has to do in a life with you. Two of them — go to bed and drop it — solve more household problems than the rest combined.'},

  {t:'tiles',title:'The whole curriculum, in three numbers',items:[
    ['8','Behaviors, total','Name, sit, recall, loose leash, stay, go to bed, drop it, crate.'],
    ['2','Run at a time','In two- to three-minute sessions, twice a day.'],
    ['1','Criterion raised at a time','Duration, or distance, or distraction — never two together.']
  ]},

  {t:'p',text:'Work one stage at a time. A stage that fails twice in a row means you went too fast: drop back to the last one he owned.'},

  {t:'evidence',badge:'myth',paras:[
    '“Small dog syndrome.” The claim is that little dogs come with bossy temperaments. The data look, at first, like they agree: across 8,301 dogs of 49 breeds scored on C-BARQ, reported problem behaviors rose as height fell (p&lt;0.001).',
    'The follow-up work is where it falls apart. Arhant and colleagues tied the pattern to <strong>owner behavior</strong> — less shared activity, less consistency in training, and more punitive handling of the small dogs. Nobody trains a Rottweiler to jump on visitors by picking him up.',
    'It is an upbringing effect, not a temperament. Which is good news, because it is yours to change.'
  ],source:'C-BARQ analysis, 8,301 dogs across 49 breeds · Arhant et al.'},

  {t:'brief',title:'Two rules that apply to all eight',paras:[
    'Cue once. A word repeated four times becomes a word that means “ignore me three times, then move.” If he does not respond, the answer is easier conditions, not a louder voice.',
    'Pay in place. Deliver the food where you want the behavior to happen — between the front paws for a down, at your trouser seam for heel position. Food thrown out in front of a sit teaches a dog to stand up and travel.'
  ]},

  {t:'tool',n:12,title:'The eight-behavior curriculum',intro:'Name, sit, recall, loose leash, stay, go to bed, drop it, crate. Log it with Tool 13 at the end of this part.'},

  {t:'matrix',title:'The eight, at a glance',head:['Behavior','What clears it','Where people break it'],rows:[
    ['His name','Head turn 9/10, three rooms and the yard','Using it to scold, or twice in a row'],
    ['Sit','8/10 on the word alone, in two rooms','Pushing down on the hindquarters'],
    ['Recall','10/10 indoors with a person moving','Calling him to things he dislikes'],
    ['Loose leash','Fifty yards (45 m) past one mild distraction','Running the walk as exercise first'],
    ['Stay','30 sec, ten feet (3 m), one distraction','Raising two criteria at once'],
    ['Go to bed','Holds the mat while somebody knocks','Using the mat as a punishment'],
    ['Drop it','A stolen sock, first time asked','Chasing him'],
    ['The crate','An hour, settled, on one cue','Stopping the week house-training ends']
  ],hi:[[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1]],note:'Run two at a time. The detail, stage by stage, is on the pages that follow.'},

  {t:'h3',text:'1 · His name'},

  {t:'steps',items:[
    ['Sessions 1–5','Charge it','Say the name once in a quiet room. The instant his head turns, mark it — “yes” — and feed. Twenty repetitions a day, no cue attached to it yet. The name means only one thing: look at me, something good follows.','20 REPS'],
    ['Week 1','Add difficulty','Say it when he is mildly occupied: sniffing the rug, watching out the window. Pay heavily. If he does not turn, you are too far or he is too busy; make it easier rather than repeating it louder.',''],
    ['Criterion','Head snap, then move on','An immediate head turn in three different rooms and once in the yard. Only then take it outdoors.','9/10']
  ]},

  {t:'signals',title:'Where it goes wrong · the name',items:['It gets used to scold, to interrupt, and as a general-purpose noise. Within a month it means nothing at all.','Use it to buy attention, never to express irritation, and never twice in a row.'],role:'g'},

  {t:'h3',text:'2 · Sit'},

  {t:'steps',items:[
    ['Sessions 1–3','Lure','Hold food at his nose, move it slowly back over his head. The rear end drops as the nose rises. Mark the moment it lands, feed while he is sitting.',''],
    ['Sessions 4–8','Lose the food','Same hand motion, empty hand, food delivered from the other hand afterward. Do this by the third session or the food becomes part of the cue.',''],
    ['Criterion','Name it','Add the word only when the behavior is reliable without it: say “sit”, pause one second, then give the hand signal. On the word alone, in two rooms.','8/10']
  ]},

  {t:'signals',title:'Where it goes wrong · sit',items:['Pushing down on the hindquarters. Never do it with this breed: you are loading a spine that is already the weak point of the design.','It also teaches him to brace against pressure rather than to sit.'],role:'g'},

  {t:'h3',text:'3 · Recall, the household version'},

  {t:'steps',items:[
    ['Week 1','Indoors, unmissable','Two people, ten feet (3 m) apart, in a hallway. Each calls once, in a bright voice, and pays with something better than kibble. He should be running before you finish the word.','10 FT'],
    ['Week 2','One room to another','Call from out of sight. Pay for arrival every single time, for months. This cue never goes on a variable schedule.',''],
    ['Criterion','Take it outside','Instant turn and return indoors, with a person moving in the room. Then it goes on a long line outdoors, and section 4.4 takes over.','10/10']
  ]},

  {t:'signals',title:'Where it goes wrong · recall',items:['Calling him to things he dislikes — the bath, the crate at bedtime, the end of the walk. Go and get him for those.','A recall cue is a promise, and this breed audits it.'],role:'g'},

  {t:'h3',text:'4 · Loose-leash walking'},

  {t:'steps',items:[
    ['Before you start','Harness, not collar','Walk this dog on a harness. A neck that takes repeated jerks belongs to a body already carrying the highest disc-disease risk of any breed, and the harness is standard equipment for a reason.',''],
    ['Week 1','Pay the position','Indoors, no destination. Every time the leash goes slack and he is beside your left leg, feed at the seam of your trousers. You are building a place, not a punishment.',''],
    ['Week 2','Stop being towed','Outdoors, the moment the leash tightens, stop. Do not pull back. Wait for slack, then move. Turn and walk the other way when stopping does nothing.',''],
    ['Criterion','Fifty yards','Loose leash past one mild distraction before you extend the route.','50 YD']
  ]},

  {t:'signals',title:'Where it goes wrong · loose leash',items:['Treating the walk as exercise first and training second, so he is dragged along on a tight line for twenty minutes a day and rehearses pulling four hundred times a week.','Split them: a short training walk, and a separate long sniffing walk on a loose line, where pulling is not on the menu because you are going wherever the nose goes anyway.'],role:'g'},

  {t:'plate',name:'harness',title:'Where the leash pulls from',tag:'4 · Loose leash',caption:'A neck that takes repeated jerks belongs to the body carrying the highest disc-disease risk of any breed.'},

  {t:'h3',text:'5 · Stay'},

  {t:'steps',items:[
    ['Duration first','Count, do not move','Ask for a sit, count one second, mark and feed while he is still in position. Build to thirty seconds with your feet planted.','30 SEC'],
    ['Distance second','Back to five seconds','Reset the clock when you add steps. One step back, return, pay. Two steps. Always return to him — never call him out of a stay in the teaching phase.',''],
    ['Distraction third','Reset again','Drop a treat a yard (1 m) away. Have someone walk past. Open the front door. Each new distraction starts at one second.','1 SEC'],
    ['Criterion','Thirty seconds, ten feet (3 m), one distraction','Then add a release word, used every time, so he learns the stay ends when you say so and not when he guesses.','']
  ]},

  {t:'signals',title:'Where it goes wrong · stay',items:['Raising two criteria at once — walking away <em>and</em> waiting longer.','The dog breaks, the owner repeats the cue more firmly, and the whole thing sours inside a week.'],role:'g'},

  {t:'h3',text:'6 · Go to bed'},

  {t:'steps',items:[
    ['Sessions 1–4','Make the mat pay','Put a bed down. Mark and feed any interaction with it — a paw, a sniff, standing on it. Say nothing. Let him work out that the mat prints money.',''],
    ['Sessions 5–10','Add the down','Wait for him to lie down on it before paying. Feed between the front paws so the position gets reinforced where it happens.',''],
    ['Week 2','Name it and send it','“Bed,” then toss a treat onto the mat. Build distance until you can send him from the kitchen.',''],
    ['Criterion','The doorbell test','He goes to the mat and stays there while somebody knocks. This is the single most useful behavior in the book for a barker.','ONE CUE']
  ]},

  {t:'signals',title:'Where it goes wrong · go to bed',items:['The mat gets used as a punishment when guests arrive and the dog is being a nuisance. Then it stops being a good place.','Pay him there generously, especially when nothing is happening.'],role:'g'},

  {t:'h3',text:'7 · Drop it'},

  {t:'steps',items:[
    ['Sessions 1–5','Trade, boring for good','Give him a dull toy. Offer a piece of chicken. He opens his mouth, the toy drops, he eats — then give the toy back. The return is what makes the whole thing work.',''],
    ['Week 2','Name it','Say “drop” as he releases, not before. Once the pattern is automatic, say it first and pay the release.',''],
    ['Week 3','Raise the stakes','Practise with things he actually cares about. Pay above market rate. A dog who has been robbed once will swallow the next thing he finds.',''],
    ['Criterion','A sock, in the hallway','Test it on something he stole, not something you handed him.','FIRST ASK']
  ]},

  {t:'signals',title:'Where it goes wrong · drop it',items:['Chasing him. Every chase teaches a fast, low, hard-to-catch dog that stolen goods start a game he always wins.','Stand still, open the refrigerator, and let him come to you.'],role:'g'},

  {t:'h3',text:'8 · The crate'},

  {t:'steps',items:[
    ['Days 1–3','Feed him in it, door open','Every meal goes in the back of the crate. He walks in, eats, walks out. No door, no fuss, no lifting him in.',''],
    ['Days 4–7','Close it for seconds','Shut the door while he chews something good. Open it before he finishes. Build to five minutes with you sitting there.','5 MIN'],
    ['Week 2','Leave the room','Thirty seconds, then two minutes, then ten, then film yourself leaving the house. Watch the footage rather than guessing.',''],
    ['Criterion','Settled, on cue','He goes in on cue, lies down, and sleeps. Keep it that way for life with the occasional paid session, even when you no longer need it.','1 HOUR']
  ]},

  {t:'signals',title:'Where it goes wrong · the crate',items:['Owners stop crate training the week the house-training finishes — and then face the one situation where it is not optional.','Conservative management of a disc episode calls for at least four weeks of strict rest in a space about three by four feet (90 × 120 cm).','A dog who already loves his crate rests. A dog meeting it for the first time in pain does not.'],role:'g'},

  {t:'plate',name:'crate',title:'The space he will need later',tag:'8 · The crate',caption:'Buy the pen, not the room. This is the footprint conservative disc management asks for, and it is a bad week to be meeting it for the first time.'},

  {t:'note',title:'House-training, in one panel',paras:[
    'Out every one to two waking hours, and after sleeping, eating and playing. Reward the instant he finishes, outside, not when he comes back in.',
    'Play <em>after</em> elimination, never before — otherwise he learns that emptying out ends the fun and starts holding it.',
    'Night outings may be needed until about five months. Widen his freedom in the house only after eight to twelve weeks with no accidents.',
    'Never punish an accident. All it teaches is not to eliminate in front of you, which turns into puddles behind the couch and a dog who will not perform on leash.'
  ]},

  {t:'script',text:'two minutes, twice a day. the dog who trains for an hour on sunday learns nothing at all'},

  {t:'photo',n:20,note:'Overhead shot of a smooth standard lying square on a defined mat in a kitchen doorway, human feet blurred passing behind. Natural light.',caption:'Go to bed, held while the doorbell rings. Everything else is easier once this is solid.'}
]},

/* ───────────────────────── 4.4 ───────────────────────── */
{ id:'4.4', title:'Recall against a scent', sub:'the one that decides whether he ever runs free', pages:2, blocks:[

  {t:'first',text:'A recall that works in the kitchen is not a recall. The question is what happens when he crosses a fresh trail at forty yards (35 m) and your voice arrives second.'},

  {t:'p',text:'You are competing with the part of the dog that was deliberately amplified: the AKC standard asks for a dog with “all the senses well-developed,” and scenting drive was the product. When he locks on he is not ignoring you — he has stopped processing you.'},

  {t:'h3',text:'Build it where the nose is quiet, then move'},

  {t:'steps',items:[
    ['Stage 1','Long line, boring ground','Fifteen to thirty feet (4.5 to 9 m) of line on a harness, in a mown field with nothing to find. Call once. Pay with something he never gets otherwise. Ten repetitions, then stop.','10 REPS'],
    ['Stage 2','Pay before he decides','Call while he is still moving toward you anyway, or before the interesting thing registers. You are banking successes, not testing him.',''],
    ['Stage 3','Add scent deliberately','Move to rougher ground with real smells. Let him find a trail, let him work it, then call. If he does not turn, shorten the line and lower the difficulty. Never reel him in on a cue he ignored.','10 SEC'],
    ['Stage 4','Emergency cue','Pick a second word used only for genuine recalls to safety. Pay it with something absurd — half a hot dog — every time, so it never gets cheap.','ONCE A MONTH']
  ]},

  {t:'signals',title:'Three rules that hold the whole thing together',items:[
    'Call once, never twice.',
    'Never call him for something he dislikes.',
    'Never, under any circumstances, be annoyed with the dog who came back late — the last thing that happened before the punishment was the coming back, and he will remember which one you paid.'
  ],role:'g'},

  {t:'evidence',badge:'contested',paras:[
    'You will be told that any dog can be trained to a reliable off-leash recall. There is no dataset on recall reliability in dachshunds against a live trail; nobody has run that study anywhere.',
    'What we do have is the job description — a dog selected over centuries to keep working, alone, out of contact with a handler who could not see or reach him.',
    'So the honest position is this: many dachshunds never earn full off-leash freedom in open, unfenced country, and a long line for life is a management decision rather than a training failure. Plenty of experienced trainers with excellent dogs make exactly that call.'
  ],source:'AKC Official Standard for the Dachshund · no published recall-reliability data for the breed'},

  {t:'decision',title:'Long line, or off the leash?',items:[
    ['Is the ground fenced?','Check the perimeter at ground level rather than at eye level.',[['Yes → let him run, and watch the back corner',''],['No → read the next question','o']]],
    ['Does he turn off a live trail on the first call, reliably?','Stage 3 is where you find this out, and the long line is what makes finding out safe.',[['Yes → open country, with the emergency cue held in reserve',''],['No → long line','o']]],
    ['Have you rebuilt it for a season and still not got that answer?','Many dachshunds never earn full off-leash freedom in open, unfenced country.',[['Then the long line is the plan, not the failure','a']]]
  ]},

  {t:'p',text:'Recall is the first thing to rot, and it decays quietly: he comes back for eleven months, then not on the one hillside with a deer track across it. A dog paid ten thousand times has a habit; a dog paid for six weeks in 2024 has a memory.'},

  {t:'script',text:'a long line is not an admission of defeat. it is a seatbelt'},

  {t:'signals',title:'The fence, checked the way he checks it',items:[
    'Walk the perimeter at ground level, not at eye level.',
    'Watch for fresh excavation at the back corner.',
    'A gap he can get his head through is a gap he can get through.',
    'A fenced yard is worth more to a dachshund owner than to almost anyone else — it is where the off-leash running happens for the dogs who will never have it anywhere else.'
  ],role:'g'},

  {t:'note',title:'The line itself',paras:[
    'Fifteen feet (4.5 m) for teaching, thirty (9 m) for freedom. Biothane rather than rope — it does not soak, and it will not take the skin off your hands.',
    'Clip to a harness, never a collar. A dog hitting the end of thirty feet at a collar is a neck injury waiting for a bad day.',
    'Let it drag on open ground, wear gloves, and never tie it to anything.'
  ]},

  {t:'photo',n:21,note:'Standard wirehaired on a long biothane line in an open meadow, line trailing across the frame, dog looking back toward the camera. Low angle, early evening.',caption:'Thirty feet of line buys him the country and buys you the veto.'}
]},

/* ───────────────────────── 4.5 ───────────────────────── */
{ id:'4.5', title:'Barking', sub:'the feature you are trying to return as a defect', pages:2, blocks:[

  {t:'first',text:'He barks because barking was the job: a dog working a tunnel is located by his voice, and the handler digs to the sound. Nothing about him has been recalled.'},

  {t:'p',text:'The goal is not silence but an off switch. Name the trigger class first: the six need entirely different handling.'},

  {t:'signals',title:'Six trigger classes — name yours before you treat it',items:[
    'Alarm at the window — movement outside, self-rewarding because whoever is out there always leaves.',
    'Arrival — doorbell, knock, someone coming up the path.',
    'Demand — directed at you, for food, a lap, or a game, and it works often enough to persist.',
    'Frustration — behind a barrier, in a car, or on a leash he cannot get past.',
    'Distress at being left — starts within minutes of the door closing and does not settle.',
    'Under-occupation — the bored dog narrating an empty afternoon to nobody in particular.'
  ],role:'g'},

  {t:'tiles',title:'What the Finnish survey actually found',items:[
    ['32%','Noise sensitivity',''],
    ['29%','Fearfulness',''],
    ['6%','Separation-related behavior','Against the 20 to 30 percent routinely quoted in popular writing.']
  ],roles:['s','s','g'],src:'Finnish survey of 13,715 dogs — Salonen et al., Scientific Reports 2020'},

  {t:'p',text:'Most barking when you leave is not separation anxiety but boredom, or the street outside. One needs a behavior plan and sometimes a veterinarian; the other needs a frosted window and something to chew.'},

  {t:'h3',text:'Manage first, then teach'},

  {t:'steps',items:[
    ['First','Change the environment','Frosted film on the lower half of the window. A radio between him and the hallway. The bed moved away from the front door. Every bark he does not rehearse is a bark you never have to untrain.',''],
    ['Second','Give him a job at the trigger','Doorbell means go to bed — the behavior you built in 4.3. The doorbell now predicts a mat and a stuffed chew rather than an intruder.',''],
    ['Third','Pay the quiet you want','Reinforce the pause, not the silence after a scolding. Mark the second head-turn away from the window, before the bark. You are paying the decision, not the outcome.','']
  ]},

  {t:'decision',title:'Demand, or distress?',items:[
    ['Does it stop instantly the moment he gets what he wants?','Demand barking does. Distress does not.',[['Yes → demand. Look away: no speech, no eye contact, no touch',''],['No → read the next question','o']]],
    ['Did it start within minutes of the door closing, and never settle?','Film it before you treat it.',[['Yes → distress. A behavior plan, and sometimes a veterinarian','a'],['No → boredom, or the street outside','o']]],
    ['Has it got worse over two or three days of being ignored?','That spike is the behavior being tested.',[['Then hold. Caving during it teaches him that persistence pays','']]]
  ]},

  {t:'evidence',badge:'settled',paras:[
    'Anti-bark collars — citronella, static, ultrasonic — are off the table here, and not on grounds of sentiment.',
    'AVSAB names electronic collars among the tools to avoid, and the Porto comparison is the reason: aversive methods produced the stress markers in 4.1 and a pessimistic judgment bias measured away from the training context altogether.',
    'There is a practical objection as well. The collar punishes the alarm without touching the thing that caused it. You end up with a dog who is still frightened of the street, now silent about it, and out of warnings.'
  ],source:'AVSAB Humane Dog Training Position Statement, 2021 · PLOS ONE, aversive- and reward-based training schools'},

  {t:'cards',title:'Two practical notes for the people downstairs',items:[
    ['FILM IT FIRST','Flat for an hour, or bursts every twenty minutes?','Barking that starts the moment you leave and runs flat for an hour is a different problem from barking in bursts.|The footage settles in one evening what guessing will not settle in a month.','b'],
    ['THE 2 A.M. ALARM','Go and look, say nothing, come back to bed','A dog whose alarm is investigated stops escalating.|A dog who is shouted at from another room learns that barking produces your voice, which was the general idea.','']
  ]},

  {t:'note',title:'Demand barking is the exception',paras:[
    'This is the one class where doing nothing is the treatment. Look away, no speech, no eye contact, no touch. Reward the moment he gives up and settles.',
    'Expect it to get worse for two or three days before it stops. That spike is the behavior being tested, and caving during it teaches him that persistence pays.'
  ]},

  {t:'photo',n:22,note:'Longhaired dachshund standing on the back of a sofa looking out a front window, seen from behind, street softly out of focus beyond.',caption:'The back of the sofa, claimed. The height he jumps down from is the part worth thinking about.'}
]},

/* ───────────────────────── 4.6 ───────────────────────── */
{ id:'4.6', title:'Growling, guarding, and the leash', sub:'the warnings you want him to keep', pages:2, blocks:[

  {t:'first',text:'A growl is information, delivered free, by a dog trying very hard not to bite you. Punish it and you remove the sentence, not the feeling — and what you own next is a dog who goes from still to teeth with nothing in between.'},

  {t:'keyfig',title:'What counts as resource guarding',items:[
    ['THE DEFINITION','85 experts','“The use of avoidance, threatening, or aggressive behaviors by a dog to retain control of food or non-food items in the presence of a person or other animal.”'],
    ['WHAT THAT INCLUDES','Avoidance','The dog who picks up a chew and carries it behind the couch is already guarding, months before anybody hears a growl.']
  ]},

  {t:'evidence',badge:'myth',paras:[
    '“Take his bowl away while he eats, so he learns you own the food.” It is still the most commonly repeated advice on the subject, and it manufactures the problem it claims to prevent.',
    'From the dog’s side the lesson is exact: a hand approaching the bowl means the food leaves. A dog who has learned that defends earlier and harder next time.',
    'Do the reverse. Walk past the bowl and drop something better in it. Within a fortnight your approach predicts an upgrade, and the guarding has nothing left to do.'
  ],source:'Resource-guarding definition, expert panel of 85 · AVSAB Humane Dog Training Position Statement, 2021'},

  {t:'steps',items:[
    ['Immediately','Manage','Pick up the contested items. Feed him where nobody walks past. You cannot counter-condition a dog who is rehearsing the guarding daily.','TODAY'],
    ['Weeks 1–3','Trade, never take','Approach, toss something better, walk away without touching the object. Repeat until he looks up hopefully when you appear.','FORTNIGHT'],
    ['Ongoing','Pay the approach','Your hand near his food, his bed, or his chew reliably predicts something good arriving. Never take the object by force — a forced removal wins the object and loses the dog’s willingness to let you near the next one.','FOR LIFE']
  ]},

  {t:'signals',title:'Two dachshunds and one bully stick is a rehearsal, not a lesson in sharing',items:[
    'Feed in separate rooms.',
    'Hand out chews in crates.',
    'Take the high-value items away when the session is over, rather than letting them be negotiated.'
  ],role:'g'},

  {t:'h3',text:'The leash, and the Labrador across the street'},

  {t:'tiles',title:'The arithmetic on the sidewalk',items:[
    ['12×','His weight, against the dog across the street','A confident dog, restrained, facing something twelve times his size, with no option to leave.'],
    ['14%','Dogs reported aggressive, Finnish survey','You are dealing with a common problem, not a broken animal.']
  ],src:'Finnish survey of 13,715 dogs — Salonen et al., Scientific Reports 2020'},

  {t:'p',text:'Leash reactivity toward bigger dogs is close to house style here, and distance is the currency. Work at the range where he can still eat, pay him for looking at the other dog and back at you, and turn away before threshold.'},

  {t:'flag',title:'Stop training and hire someone now',paras:[
    'A bite that breaks skin. Guarding around children. Growling that has stopped coming before the snap. A dog who redirects onto you when he cannot reach the trigger.',
    'These are not stages to be worked through with a book. Get a credentialed professional involved this week, and keep the dog managed — leashed, gated, separated — until you have one.'
  ]},

  {t:'h3',text:'What the letters actually mean'},

  {t:'cards',title:'Three tiers, under different names in different markets',items:[
    ['VETERINARY BEHAVIORIST','A veterinarian with a board specialty in behavior','The only tier that can diagnose and prescribe.',''],
    ['APPLIED ANIMAL BEHAVIORIST','A graduate-degree route with supervised case work','Certified, and not a veterinarian.','a'],
    ['TRAINER CERTIFICATIONS','Knowledge tested, continuing education required','No legal force. Whether “dog trainer” is a protected title depends on where you live, and in many markets it is not: anybody can print it on a card tomorrow.','b']
  ]},

  {t:'p',text:'Ask what each tier is called where you live and which body awards it. Then ask any candidate: what happens when my dog gets it wrong? If the answer involves a correction, a prong, or e-collar “stim,” keep looking.'},

  {t:'script',text:'thank him for the growl. you will miss it when it stops'}
]},

/* ───────────────────────── 4.7 ───────────────────────── */
{ id:'4.7', title:'Twelve weeks of training, logged', sub:'because memory flatters everybody', pages:1, blocks:[

  {t:'tool',n:13,title:'The twelve-week training log',intro:'Two sessions a day, two or three minutes each. Mark it honestly — the value is in seeing that week six never happened.'},

  {t:'gauge',title:'Where the twelve weeks go',items:[
    ['WEEKS 1–3',25,'Name, crate meals, sit, recall indoors, the mat.',''],
    ['WEEKS 4–6',50,'Drop it, stay, loose leash indoors, the first long-line work.','mid'],
    ['WEEKS 7–9',75,'Outdoors, handling, mild scent, the doorbell drill, stolen items.','mid'],
    ['WEEKS 10–12',100,'Emergency cue, an hour in the crate, live scent, three locations.','']
  ]},

  {t:'table',head:['Week','Focus','Reps/day','Criterion to clear'],rows:[
    ['1','Name · crate meals','20 · 2','Head turn 9/10; eats in crate'],
    ['2','Sit · crate door shut','15 · 3','Hand signal; 5 min shut'],
    ['3','Recall indoors · mat','20 · 15','Runs from another room'],
    ['4','Drop it, traded · stay 10 sec','10 · 8','Releases a dull toy'],
    ['5','Loose leash indoors · bed','10 min · 10','Slack 20 ft (6 m); bed on cue'],
    ['6','Long line, empty field · stay','12 · 8','First call; 30 sec at 3 ft (1 m)'],
    ['7','Loose leash outdoors · handling','10 min · 5','Fifty yards (45 m); nails touched'],
    ['8','Mild scent · doorbell drill','12 · 6','Leaves a cold trail'],
    ['9','Stolen item · stay at 10 ft (3 m)','8 · 6','Drops a sock, first ask'],
    ['10','Emergency cue · crate 1 hr','3 · 1','Settles an hour, filmed'],
    ['11','Live scent, long line','10','Turns off a fresh trail 7/10'],
    ['12','Proof it, new places','2 sessions','Every cue, three locations']
  ],note:'Blank weeks are data too. Two missed in a row is the usual reason a dog “just won’t learn recall.”'},

  {t:'p',text:'Re-run weeks 11 and 12 every spring, for life.'},

  {t:'remember',items:[
    ['The method is settled','AVSAB’s position is reward-based training for everything, behavior problems included. The Porto comparison: 55.9 lip licks a session against 4.1, cortisol 0.26 against 0.13, and a pessimism that followed the dogs out of the classroom.'],
    ['The window shuts at three months','Socialization begins before the vaccine series is finished — the standard of care, not a risk you are running. Behavior problems are the leading cause of death in dogs under three.'],
    ['Exposure is not socialization','A puppy who will not take food is learning nothing you intended. Add distance until he eats, then work there.'],
    ['Small dog syndrome is upbringing','Problem behaviors rise as height falls across 8,301 dogs — and the follow-up work puts it on owner behavior: less consistency, less shared activity, more punishment.'],
    ['The long line may be permanent','Many dachshunds never earn off-leash freedom in open country. That is a management decision, not a failure, and experienced handlers make it on purpose.']
  ]},

  {t:'quiz',items:[
    'You are told to keep the ten-week-old home until his last shot. What is AVSAB’s position, and how do you manage the infectious risk meanwhile?',
    'He picks up a chicken bone in the street. What do you do in the next ten seconds — and what would guarantee he swallows it?',
    'He hits a fresh rabbit trail on a thirty-foot line and ignores his recall word. What now, and what does it tell you about the stage you are at?'
  ],answers:[
    'AVSAB holds that socialization begins before the series is complete, and calls that the standard of care; class can start at seven to eight weeks with one vaccination seven days prior. Manage risk by location, not delay — carried across parking lots, no dog parks, verified dogs only.',
    'Stand still, give your trade cue, produce something better, pay him. Do not walk at him or reach for his mouth. Chasing is what guarantees he swallows it: it turns theft into a game a fast, low dog always wins.',
    'Do not repeat the cue, and never reel him in on a cue he ignored. Shorten the line, go back to easier ground, and pay recalls before the scent registers. That is not disobedience — it is evidence you raised the difficulty a stage too early.'
  ]}
]}

];
