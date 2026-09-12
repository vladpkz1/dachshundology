(function(){
'use strict';
var S={weight:16,months:24,sex:'m',fixed:'no',fixedAge:'',ribs:'',waist:'',tuck:'',mins:45,kcalCup:380,region:'mid'};
var STEP=0, STEPS=['Your dog','Body condition','Daily life','Food','Results'];

function $(s,r){return (r||document).querySelector(s);}
function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e;}
var lb2kg=function(lb){return lb/2.2046;};
function rer(lb){return 70*Math.pow(lb2kg(lb),0.75);}
function merFactor(){ if(S.months<12) return 2.2; return S.fixed==='yes'?1.6:1.8; }

function division(){
  if(S.months>=12 && S.weight<=11) return {name:'Miniature',note:'11 lb and under at 12 months or older — the AKC class division.'};
  if(S.weight>=16 && S.weight<=32) return {name:'Standard',note:'The AKC puts the standard at roughly 16 to 32 pounds.'};
  if(S.months<12) return {name:'Too young to classify',note:'The miniature ceiling only applies from 12 months. Weigh again at his first birthday.'};
  return {name:'Between the two divisions',note:'Owners call this a “tweenie.” It has no official status — the AKC recognizes two divisions only.'};
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
      d:'In a study of 1,073 dachshunds, dogs spayed or neutered under twelve months carried roughly twice the relative risk of disc disease (RR 2.12 for females, 1.5 for males). This is history, not a forecast — it raises the value of everything else on this list.'});
  if(S.fixed==='no' && S.months<12)
    items.push({lvl:'action',t:'He is not neutered yet, and he is under a year',
      d:'This is the one decision with breed-specific evidence attached. Dorn and Seath (2018) found lower disc-disease risk in dogs neutered after twelve months. AAHA’s general guidance for dogs under 45 lb says five to six months. Print both and take them to your veterinarian.'});
  if(S.mins<30)
    items.push({lvl:'action',t:'Under thirty minutes of walking a day',
      d:'DachsLife 2015 found dogs walked less than thirty minutes daily had higher odds of disc disease, and dogs walked over an hour had lower odds. Association, not proof — but it points the opposite way from “keep him still to protect his back.”'});
  else if(S.mins>=60)
    items.push({lvl:'good',t:'An hour or more a day',
      d:'This sits in the band DachsLife associated with lower odds of disc disease. Keep it varied: leash work and free running both counted.'});
  var b=bcs();
  if(b.tone==='warn')
    items.push({lvl:'action',t:'Body condition is worth correcting',
      d:'Be careful how you justify it: DachsLife found no significant association between body condition and disc disease. Weight still costs him joints, teeth, heart and years — a 25% calorie restriction added about 1.8 years of median lifespan in the Purina lifetime study.'});
  items.push({lvl:'note',t:'Check the orthopedic clause before you insure him',
    d:'At least one major US insurer applies a 180-day orthopedic waiting period and classifies IVDD as orthopedic. It can often be collapsed by an orthopedic exam in the first 14 days of the policy. Ask in writing, before you sign.'});
  return items;
}
function money(){
  // Chiffres publiés uniquement — aucune estimation maison.
  var puppy={ne:'$1,500 – $3,000',west:'$1,500 – $3,000',mid:'$1,000 – $2,200',
              south:'$1,000 – $2,400',se:'$1,200 – $2,500'}[S.region]||'$1,000 – $3,000';
  return {puppy:puppy, homeLo:1150, homeHi:4420, lifeLo:22125, lifeHi:60602,
          mri:2285, surgLo:3000, surgHi:8000};
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
    h+='<div class="cu-row"><label class="cu-lab">Weight <b id="wv">'+S.weight+' lb</b></label>'+
       '<input type="range" id="weight" min="5" max="40" step="0.5" value="'+S.weight+'"></div>';
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
    h+='<div class="cu-row"><label class="cu-lab">Where you live</label><div class="cu-opts">'+
       radio('region','ne','Northeast',S.region)+radio('region','se','Southeast',S.region)+
       radio('region','mid','Midwest',S.region)+radio('region','south','South',S.region)+
       radio('region','west','West',S.region)+'</div></div>';
  }
  if(STEP===3){
    h+='<h3>What is in the bowl</h3><p class="cu-help">Find “kcal/cup” on the bag — it is usually near the feeding chart.</p>';
    h+='<div class="cu-row"><label class="cu-lab">Calories per cup <b id="kv">'+S.kcalCup+' kcal</b></label>'+
       '<input type="range" id="kcalCup" min="250" max="550" step="5" value="'+S.kcalCup+'"></div>';
    h+='<p class="cu-help">Typical dry foods run 330 to 480 kcal per cup. If the bag gives kcal per kilogram instead, divide by about 10.</p>';
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
  out+=tile(d.name,'AKC division',d.note);
  out+=tile(b.band,'Body condition — '+b.verdict,b.text);
  out+=tile(Math.round(M)+' kcal','A day, as a starting point','Resting need '+Math.round(R)+' kcal × '+merFactor().toFixed(1)+
      '. Individual dogs vary by up to 50 percent either way. Adjust to the dog, not to this number.');
  out+=tile(cups.toFixed(2)+' cups','At '+S.kcalCup+' kcal per cup','Split into two meals. Treats come out of this total, not on top of it.');
  out+=tile(Math.round(treats)+' kcal','Treat allowance','Ten percent of the day’s calories. Training rewards count.');
  out+=tile('$'+m.lifeLo.toLocaleString('en-US')+' – $'+m.lifeHi.toLocaleString('en-US'),'Lifetime, fifteen years',
      'Synchrony’s 2025 Lifetime of Care study. Dog owners typically guess $8,000. Bringing a dog home costs $'+
      m.homeLo.toLocaleString('en-US')+' to $'+m.homeHi.toLocaleString('en-US')+' up front — Rover, 2025.');
  out+=tile(m.puppy,'Puppy, from a breeder in your region',
      'Reputable breeders nationally run $1,000 to $3,000; a dapple pattern adds $500 to $1,000. iHeartDogs, 2026.');
  out+='</div>';
  out+='<h3 style="margin-top:38px">What the evidence says about his back</h3>';
  out+='<p class="cu-help">This is not a diagnosis and it cannot predict an episode. It lists the levers that have published evidence behind them, and where you currently sit on each.</p>';
  out+='<div class="cu-risks">'+rk.map(function(r){
    return '<div class="cu-risk '+r.lvl+'"><div class="t">'+r.t+'</div><p>'+r.d+'</p></div>';}).join('')+'</div>';
  out+='<div class="callout warn" style="margin-top:30px"><div class="t">The number worth knowing</div>'+
       '<p>If it does happen: an MRI averages $'+m.mri.toLocaleString('en-US')+' nationally, and spinal surgery runs $'+
       m.surgLo.toLocaleString('en-US')+' to $'+m.surgHi.toLocaleString('en-US')+' before hospitalization. One specialty group publishes an all-in figure of $10,000 to $15,000. '+
       'That is the arithmetic behind the insurance question above.</p></div>';
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
    'Weight '+S.weight+' lb · age '+ageLabel()+' · '+(S.fixed==='yes'?'neutered':'intact')+'\n'+
    'AKC division: '+d.name+'\nBody condition: '+b.band+' ('+b.verdict+')\n'+
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
    e.oninput=function(){ S[id]=parseFloat(e.value);
      if(id==='weight')$('#wv').textContent=S.weight+' lb';
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
