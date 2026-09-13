(function(){
'use strict';
var S={weight:16,unit:'lb',months:24,sex:'m',fixed:'no',fixedAge:'',ribs:'',waist:'',tuck:'',mins:45,kcalCup:380};
var STEP=0, STEPS=['Your dog','Body condition','Daily life','Food','Results'];

function $(s,r){return (r||document).querySelector(s);}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}
var lb2kg=function(lb){return lb/2.2046;};          /* RER — ne pas toucher */
var KGLB=0.4536;                                    /* affichage et saisie : 1 lb = 0.4536 kg */
function kgShow(lb){return Math.round(lb*KGLB*10)/10;}
function lbFromKg(kg){return Math.round((kg/KGLB)*10)/10;}
function wBoth(lb){return lb+' lb ('+kgShow(lb)+' kg)';}
function rer(lb){return 70*Math.pow(lb2kg(lb),0.75);}
function merFactor(){ if(S.months<12) return 2.2; return S.fixed==='yes'?1.6:1.8; }

function division(){
  /* Trois systèmes, à égalité : AKC (poids), The Kennel Club (races distinctes), FCI (tour de poitrine). */
  var reg=' All of that is the AKC system, which classifies by weight. The Kennel Club registers miniature and '+
    'standard as separate breeds, each on its own register, and draws its line by weight as well — its miniature '+
    'standard gives an ideal of 10 lb (4.5 kg) and a desired maximum of 11 lb (5 kg), naming no age at which the '+
    'dog is weighed. The FCI, standard 148, classifies by chest circumference measured at 15 months '+
    'into three sizes — standard, miniature and rabbit — which this tool does not measure. The same dog can be a '+
    'miniature under one system and not under another.';
  if(S.months>=12 && S.weight<=11) return {name:'Miniature',note:'11 lb (5 kg) and under at 12 months or older.'+reg};
  if(S.weight>=16 && S.weight<=32) return {name:'Standard',note:'The AKC puts the standard at roughly 16 to 32 lb (7 to 15 kg).'+reg};
  if(S.months<12) return {name:'Too young to classify',note:'The miniature ceiling only applies from 12 months. Weigh again at his first birthday.'+reg};
  return {name:'Between the two divisions',note:'Owners call this a “tweenie.” It has no official status — the AKC recognizes two divisions only.'+reg};
}
function bcs(){
  var yes=['ribs','waist','tuck'].filter(function(k){return S[k]==='y';}).length;
  var no=['ribs','waist','tuck'].filter(function(k){return S[k]==='n';}).length;
  if(yes===3) return {band:'4 – 5 of 9',verdict:'Ideal',tone:'good',
    text:'Ribs felt under a thin layer, a waist from above, a tuck from the side. This is where you keep him.'};
  if(no>=2) return {band:'6 – 8 of 9',verdict:'Likely carrying extra',tone:'warn',
    text:'Two or three of the three checks failed. That usually means weight, not muscle. Work to a target with your veterinarian rather than guessing.'};
  if(yes===0) return {band:'Unclear',verdict:'Answer the three checks',tone:'note',text:'Run the hands-on test and come back.'};
  return {band:'5 – 7 of 9',verdict:'Borderline',tone:'warn',
    text:'One check is failing. That is the point at which a small correction is easy and a large one is not yet needed.'};
}
function risk(){
  var items=[];
  if(S.fixed==='yes' && S.fixedAge==='under12')
    items.push({lvl:'known',t:'Neutered before twelve months',
      d:'In a British study of 1,073 dachshunds, dogs spayed or neutered under twelve months carried roughly twice the relative risk of disc disease (RR 2.12 for females, 1.5 for males). This is history, not a forecast — it raises the value of everything else on this list.'});
  if(S.fixed==='no' && S.months<12)
    items.push({lvl:'action',t:'He is not neutered yet, and he is under a year',
      d:'This is the one decision with breed-specific evidence attached. Dorn and Seath (2018), working in Britain, found lower disc-disease risk in dogs neutered after twelve months. AAHA’s general guidance in the United States, for dogs under 45 lb (20 kg), says five to six months. Print both and take them to your veterinarian, wherever you are treated.'});
  if(S.mins<30)
    items.push({lvl:'action',t:'Under thirty minutes of walking a day',
      d:'The British DachsLife 2015 survey found dogs walked less than thirty minutes daily had higher odds of disc disease, and dogs walked over an hour had lower odds. Association, not proof — but it points the opposite way from “keep him still to protect his back.”'});
  else if(S.mins>=60)
    items.push({lvl:'good',t:'An hour or more a day',
      d:'This sits in the band the British DachsLife 2015 survey associated with lower odds of disc disease. Keep it varied: leash work and free running both counted.'});
  var b=bcs();
  if(b.tone==='warn')
    items.push({lvl:'action',t:'Body condition is worth correcting',
      d:'Be careful how you justify it: the British DachsLife survey found no significant association between body condition and disc disease. Weight still costs him joints, teeth, heart and years — a 25% calorie restriction added about 1.8 years of median lifespan in Purina’s lifetime study of 48 Labradors.'});
  items.push({lvl:'note',t:'Check the orthopedic clause before you insure him',
    d:'Waiting periods are where cover for a disc episode is won or lost. In the US market, at least one major insurer applies a 180-day orthopedic waiting period and classifies IVDD as orthopedic — a clock that can often be collapsed by an orthopedic exam in the first 14 days of the policy. The mechanism travels even where that insurer does not: ask your own insurer, in writing and before you sign, how it classifies IVDD, how long the wait runs, and what shortens it.'});
  return items;
}
function money(){
  /* Pas de montants : les prix sont locaux. On garde la structure — les postes, leur ordre,
     celui qui domine — et les seules études publiées derrière cet ordre sont américaines, dites comme telles. */
  return {order:['the purchase or adoption fee','the one-time setup when he arrives',
                 'the recurring yearly total','the episode you hope never comes'],
          episode:['the emergency exam','the MRI','the surgery','three to four nights of hospitalization',
                   'rehabilitation and rechecks']};
}

/* ---------- rendering ---------- */
function radio(name,val,label,cur){
  return '<label class="opt'+(cur===val?' on':'')+'"><input type="radio" name="'+name+'" value="'+val+'"'+(cur===val?' checked':'')+'><span>'+label+'</span></label>';
}
function view(){
  var root=$('#checkup'); if(!root) return;
  var h='';
  h+='<ol class="cu-steps">'+STEPS.map(function(s,i){
      return '<li class="'+(i===STEP?'on':(i<STEP?'done':''))+'"><span>'+(i+1)+'</span>'+s+'</li>';}).join('')+'</ol>';
  h+='<div class="cu-card">';
  if(STEP===0){
    h+='<h3>Start with the dog</h3><p class="cu-help">Nothing here is stored or sent anywhere. It runs in your browser.</p>';
    h+='<div class="cu-row"><label class="cu-lab">Weight <b id="wv">'+wBoth(S.weight)+'</b></label>'+
       '<div class="cu-opts" style="margin-bottom:12px">'+radio('unit','lb','Pounds',S.unit)+
       radio('unit','kg','Kilograms',S.unit)+'</div>'+
       (S.unit==='kg'
         ? '<input type="range" id="weight" min="2.3" max="18.1" step="0.1" value="'+kgShow(S.weight)+'">'
         : '<input type="range" id="weight" min="5" max="40" step="0.5" value="'+S.weight+'">')+
       '</div>';
    h+='<div class="cu-row"><label class="cu-lab">Age <b id="mv">'+ageLabel()+'</b></label>'+
       '<input type="range" id="months" min="2" max="180" step="1" value="'+S.months+'"></div>';
    h+='<div class="cu-row"><label class="cu-lab">Sex</label><div class="cu-opts">'+
       radio('sex','m','Male',S.sex)+radio('sex','f','Female',S.sex)+'</div></div>';
    h+='<div class="cu-row"><label class="cu-lab">Spayed or neutered</label><div class="cu-opts">'+
       radio('fixed','no','Not yet',S.fixed)+radio('fixed','yes','Yes',S.fixed)+'</div></div>';
    if(S.fixed==='yes') h+='<div class="cu-row"><label class="cu-lab">At what age</label><div class="cu-opts">'+
       radio('fixedAge','under12','Before 12 months',S.fixedAge)+radio('fixedAge','over12','After 12 months',S.fixedAge)+
       radio('fixedAge','unknown','Not sure',S.fixedAge)+'</div></div>';
  }
  if(STEP===1){
    h+='<h3>The twenty-second hands-on test</h3><p class="cu-help">Do it now, on the dog. Guessing defeats the point.</p>';
    h+=q('ribs','Slide both palms down his ribcage. Do the ribs feel like the knuckles on the <em>back</em> of your hand?');
    h+=q('waist','Look down at him standing. Is there a visible waist behind the ribs?');
    h+=q('tuck','Look at him side-on. Does the belly line rise toward the back legs?');
  }
  if(STEP===2){
    h+='<h3>How he actually lives</h3>';
    h+='<div class="cu-row"><label class="cu-lab">Walking, per day <b id="mm">'+S.mins+' min</b></label>'+
       '<input type="range" id="mins" min="0" max="150" step="5" value="'+S.mins+'"></div>';
    h+='<p class="cu-help">Walking is the one lifestyle input here with a published association behind it — from the British DachsLife 2015 survey of 2,031 owners.</p>';
  }
  if(STEP===3){
    h+='<h3>What is in the bowl</h3><p class="cu-help">Find “kcal/cup” on the bag — it is usually near the feeding chart.</p>';
    h+='<div class="cu-row"><label class="cu-lab">Calories per cup <b id="kv">'+S.kcalCup+' kcal</b></label>'+
       '<input type="range" id="kcalCup" min="250" max="550" step="5" value="'+S.kcalCup+'"></div>';
    h+='<p class="cu-help">Typical dry foods run 330 to 480 kcal per cup. If the bag gives kcal per kilogram instead, divide by about 10 — an approximation, because a cup is a volume and kibble density varies from food to food. The figure on your own bag is the one to use.</p>';
  }
  if(STEP===4) h+=results();
  h+='</div>';
  h+='<div class="cu-nav">'+
     (STEP>0?'<button class="btn ghost" id="back">Back</button>':'<span></span>')+
     (STEP<4?'<button class="btn" id="next">'+(STEP===3?'See the result':'Continue')+'</button>':
              '<button class="btn" id="restart">Start over</button>')+'</div>';
  root.innerHTML=h;
  bind();
}
function ageLabel(){ return S.months<24? S.months+' months' : (S.months/12).toFixed(S.months%12?1:0)+' years'; }
function q(k,t){ return '<div class="cu-q"><p>'+t+'</p><div class="cu-opts">'+
  radio(k,'y','Yes',S[k])+radio(k,'n','No',S[k])+'</div></div>'; }

function results(){
  var d=division(), b=bcs(), R=rer(S.weight), M=R*merFactor(), cups=M/S.kcalCup, treats=M*0.10, m=money(), rk=risk();
  var out='<h3>Your dog’s numbers</h3>';
  out+='<div class="cu-grid">';
  out+=tile(d.name,'Size — AKC weight division',d.note);
  out+=tile(b.band,'Body condition — '+b.verdict,b.text);
  out+=tile(Math.round(M)+' kcal','A day, as a starting point','Resting need '+Math.round(R)+' kcal × '+merFactor().toFixed(1)+
      '. Individual dogs vary by up to 50 percent either way. Adjust to the dog, not to this number.');
  out+=tile(cups.toFixed(2)+' cups','At '+S.kcalCup+' kcal per cup','Split into two meals. Treats come out of this total, not on top of it. A cup is a volume, not a weight, and kcal per cup varies from food to food — use the figure printed on your own bag.');
  out+=tile(Math.round(treats)+' kcal','Treat allowance','Ten percent of the day’s calories. Training rewards count.');
  out+=tile('Four lines, one order','The budget, in your local currency',
      'In order: '+m.order.join(', then ')+'. The last line is the one that moves the total — on the published '+
      'US figures (Synchrony’s 2025 Lifetime of Care study against a US referral practice’s all-in surgical '+
      'figure), a single surgical disc episode can come to roughly a quarter of everything else you will ever '+
      'spend on the dog. No comparable figures are published outside the US, so use them for the ratio, not the '+
      'amount: price each line in your own currency, and the order still does not move.');
  out+='</div>';
  out+='<h3 style="margin-top:38px">What the evidence says about his back</h3>';
  out+='<p class="cu-help">This is not a diagnosis and it cannot predict an episode. It lists the levers that have published evidence behind them, and where you currently sit on each.</p>';
  out+='<div class="cu-risks">'+rk.map(function(r){
    return '<div class="cu-risk '+r.lvl+'"><div class="t">'+r.t+'</div><p>'+r.d+'</p></div>';}).join('')+'</div>';
  out+='<div class="callout warn" style="margin-top:30px"><div class="t">The bill worth knowing about</div>'+
       '<p>If it does happen, it arrives in parts, in this order: '+m.episode.join(', ')+'. The only published '+
       'all-in figures for that sequence are American, with no equivalent published elsewhere, and they are large '+
       'enough that one episode can run to roughly a quarter of what the whole dog costs over a lifetime. Read '+
       'them for the shape of the bill rather than its size, and ask your own referral hospital what the '+
       'sequence costs before you need it — that is the arithmetic behind the insurance question above.</p></div>';
  out+='<div class="cu-actions"><button class="btn ghost" id="copy">Copy this summary</button>'+
       '<button class="btn ghost" id="print">Print it</button>'+
       '<a class="btn" href="'+(window.BUY||'#')+'">Get the full manual</a></div>';
  out+='<p class="cu-help" style="margin-top:22px">Educational only. It does not replace an examination, and no online tool can assess a spine.</p>';
  return out;
}
function tile(fig,lab,note){ return '<div class="cu-tile"><div class="fig">'+fig+'</div><div class="lab">'+lab+'</div><p>'+note+'</p></div>'; }

function summaryText(){
  var d=division(),b=bcs(),R=rer(S.weight),M=R*merFactor();
  return 'Dachshundology Check-Up\n'+
    'Weight '+wBoth(S.weight)+' · age '+ageLabel()+' · '+(S.fixed==='yes'?'neutered':'intact')+'\n'+
    'Size, AKC weight division: '+d.name+' (The Kennel Club and the FCI classify differently)\n'+
    'Body condition: '+b.band+' ('+b.verdict+')\n'+
    'Daily energy: about '+Math.round(M)+' kcal · treats up to '+Math.round(M*0.1)+' kcal\n'+
    'Walking: '+S.mins+' min/day\n\nGenerated at dachshundology.com/check-up — educational only.';
}
function bind(){
  var n=$('#next'),b=$('#back'),r=$('#restart');
  if(n)n.onclick=function(){ if(STEP===1&&!(S.ribs&&S.waist&&S.tuck)){alert('Answer all three checks first.');return;} STEP++;view();window.scrollTo({top:$('#checkup').offsetTop-90,behavior:'smooth'});};
  if(b)b.onclick=function(){STEP--;view();};
  if(r)r.onclick=function(){STEP=0;view();};
  ['weight','months','mins','kcalCup'].forEach(function(id){
    var e=$('#'+id); if(!e)return;
    e.oninput=function(){ var v=parseFloat(e.value);
      if(id==='weight'){ S.weight = S.unit==='kg' ? lbFromKg(v) : v;   /* stocké en livres */
        $('#wv').textContent=wBoth(S.weight); return; }
      S[id]=v;
      if(id==='months')$('#mv').textContent=ageLabel();
      if(id==='mins')$('#mm').textContent=S.mins+' min';
      if(id==='kcalCup')$('#kv').textContent=S.kcalCup+' kcal'; };
  });
  Array.prototype.forEach.call(document.querySelectorAll('#checkup input[type=radio]'),function(i){
    i.onchange=function(){ S[i.name]=i.value; view(); };
  });
  var c=$('#copy'); if(c)c.onclick=function(){
    var t=summaryText();
    if(navigator.clipboard){navigator.clipboard.writeText(t).then(function(){c.textContent='Copied';setTimeout(function(){c.textContent='Copy this summary';},1800);});}
    else{ window.prompt('Copy this:',t); } };
  var p=$('#print'); if(p)p.onclick=function(){window.print();};
}
document.addEventListener('DOMContentLoaded',view);
})();
