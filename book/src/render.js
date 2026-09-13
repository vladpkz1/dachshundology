const {chromium}=require('playwright');
const f=process.argv[2], out=process.argv[3];
(async()=>{
  const b=await chromium.launch();
  const p=await b.newPage({viewport:{width:794,height:1123},deviceScaleFactor:2});
  await p.goto('file://'+f,{waitUntil:'networkidle'});
  // détection de débordement
  const over = await p.evaluate(()=>{
    const r=[];
    document.querySelectorAll('.page').forEach((pg,i)=>{
      const pad=pg.querySelector('.pad'); if(!pad) return;
      const pb=pad.getBoundingClientRect();
      pg.querySelectorAll('.pad > *').forEach(el=>{
        if(getComputedStyle(el).position==='absolute') return;
        const b=el.getBoundingClientRect();
        if(b.bottom > pb.bottom+1 || b.right > pb.right+1)
          r.push({page:i+1, tag:el.className||el.tagName, over:Math.round(Math.max(b.bottom-pb.bottom, b.right-pb.right))});
      });
      if(pg.scrollHeight>pg.clientHeight+2) r.push({page:i+1,tag:'PAGE-SCROLL',over:pg.scrollHeight-pg.clientHeight});
    });
    return r;
  });
  console.log(over.length? JSON.stringify(over,null,0) : 'aucun débordement');
  await p.pdf({path:out,format:'A4',printBackground:true});
  const els=await p.$$('.page');
  for(let i=0;i<els.length;i++) await els[i].screenshot({path:out.replace('.pdf','')+'_p'+i+'.png'});
  await b.close();
})();
