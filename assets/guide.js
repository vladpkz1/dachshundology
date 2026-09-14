/* Rail de lecture des guides : barre de progression et section active.
   Pas de dépendance, pas d'observateur coûteux — un seul écouteur throttlé. */
(function(){
  var bar = document.querySelector('.readbar i');
  var links = [].slice.call(document.querySelectorAll('.toc-rail a'));
  var art = document.querySelector('.guide-body');
  if(!art) return;
  var heads = links.map(function(a){ return document.getElementById(a.getAttribute('href').slice(1)); });
  var ticking = false;

  function update(){
    ticking = false;
    if(bar){
      var top = art.offsetTop;
      var h = art.offsetHeight - window.innerHeight;
      var p = h > 0 ? (window.scrollY - top) / h : 0;
      bar.style.width = Math.max(0, Math.min(1, p)) * 100 + '%';
    }
    var mark = window.scrollY + 140, active = -1;
    for(var i = 0; i < heads.length; i++){
      if(heads[i] && heads[i].offsetTop <= mark) active = i;
    }
    for(var j = 0; j < links.length; j++){
      links[j].parentNode.classList.toggle('on', j === active);
    }
  }
  function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll, {passive:true});
  update();
})();
