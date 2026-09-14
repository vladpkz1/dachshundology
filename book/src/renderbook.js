const {chromium}=require('playwright');
(async()=>{
  const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:2});
  p.on('pageerror',e=>console.log('PAGEERROR:',e.message));
  await p.goto('file:///home/claude/dachshundology/build/book.html',{waitUntil:'networkidle'});
  await p.waitForTimeout(2000);
  const stats=await p.evaluate(()=>{
    const r=[]; document.querySelectorAll('.page').forEach((pg,i)=>{
      const body=pg.querySelector('.body'); if(!body) return;
      const pad=(pg.querySelector('.pad2')||pg.querySelector('.pad'));
      const avail=pad.getBoundingClientRect().bottom-body.getBoundingClientRect().top;
      const m=body.querySelector('.main'), g=body.querySelector('.marg');
      r.push({i:i+1, fillMain:+(m.scrollHeight/avail).toFixed(2), fillMarg:+(g.scrollHeight/avail).toFixed(2),
              over: m.scrollHeight>avail+2||g.scrollHeight>avail+2});
    }); return r;});
  const under=stats.filter(s=>s.fillMain<0.55).length, over=stats.filter(s=>s.over).length;
  console.log('content pages:',stats.length,'| under 55% filled:',under,'| overflowing:',over);
  console.log('avg fill:',(stats.reduce((a,s)=>a+s.fillMain,0)/stats.length).toFixed(2));
  const idx=process.argv[2]? process.argv[2].split(',').map(Number):[];
  const els=await p.$$('.page');
  for(const i of idx){ if(els[i-1]) await els[i-1].screenshot({path:`build/bp${i}.png`}); }
  await p.pdf({path:'build/book.pdf',format:'A4',printBackground:true});
  await b.close();
})();
