/* La barre d'achat n'apparaît qu'une fois le panneau d'offre du haut dépassé :
   avant ça elle ferait doublon, et elle mangerait le bas de l'écran pour rien. */
(function(){
  var bar = document.querySelector('[data-buybar]');
  var offer = document.querySelector('.offer');
  var end = document.querySelector('.dark');
  if(!bar || !offer) return;
  var ticking = false;
  function update(){
    ticking = false;
    var passed = window.scrollY > offer.offsetTop + offer.offsetHeight - 40;
    var atEnd = end && window.scrollY + window.innerHeight > end.offsetTop + 120;
    bar.classList.toggle('on', passed && !atEnd);
  }
  function onScroll(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll, {passive:true});
  update();
})();
