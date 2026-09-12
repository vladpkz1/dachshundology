const fs=require('fs'), path=require('path');
const SRC=path.join(__dirname,'dist'), OUT=path.join(__dirname,'flat');
fs.rmSync(OUT,{recursive:true,force:true}); fs.mkdirSync(OUT,{recursive:true});
function walk(d,b=''){let r=[];for(const e of fs.readdirSync(d,{withFileTypes:true})){
  const p=path.join(d,e.name),n=b?b+'/'+e.name:e.name;
  if(e.isDirectory())r=r.concat(walk(p,n));else r.push(n);}return r;}
const files=walk(SRC);
const map={};                                  // ancien chemin -> nouveau
for(const f of files){
  if(f==='index.html'){map[f]=f;continue;}
  map[f]= f.endsWith('/index.html') ? f.slice(0,-'/index.html'.length)+'.html' : f;
}
for(const f of files){
  let buf=fs.readFileSync(path.join(SRC,f));
  if(/\.(html|xml|txt|json|md)$/.test(f)){
    let t=buf.toString('utf8');
    // liens internes : /x/ -> /x   (on ne touche ni à "/" ni aux fichiers)
    t=t.replace(/(href|src)="\/([^"#]+)\/"/g,'$1="/$2"');
    t=t.replace(/<loc>([^<]+?)\/<\/loc>/g,'<loc>$1</loc>');
    t=t.replace(/\]\((https:\/\/[^)]+?)\/\)/g,'](-$1-)').replace(/\]\(-(https:\/\/[^)]+?)-\)/g,']($1)');
    buf=Buffer.from(t,'utf8');
  }
  const dest=path.join(OUT,map[f]);
  fs.mkdirSync(path.dirname(dest),{recursive:true});
  fs.writeFileSync(dest,buf);
}
// vercel.json : plus de trailing slash
const vj=JSON.parse(fs.readFileSync(path.join(OUT,'vercel.json'),'utf8'));
vj.trailingSlash=false; vj.cleanUrls=true;
fs.writeFileSync(path.join(OUT,'vercel.json'),JSON.stringify(vj,null,2));
console.log('flat files:',Object.values(map).length);
console.log(Object.values(map).sort().join('\n'));
