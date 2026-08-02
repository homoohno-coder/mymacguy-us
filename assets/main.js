// Shared site behavior
document.addEventListener('DOMContentLoaded', function(){
  var header = document.querySelector('header.site');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 40){ header.classList.add('solid'); } else { header.classList.remove('solid'); }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  var closeX = document.querySelector('.mobile-menu .close-x');
  if(burger && menu){
    burger.addEventListener('click', function(){ menu.classList.add('open'); });
  }
  if(closeX && menu){
    closeX.addEventListener('click', function(){ menu.classList.remove('open'); });
  }
  document.querySelectorAll('.mobile-menu a').forEach(function(a){
    a.addEventListener('click', function(){ menu.classList.remove('open'); });
  });

  // Scroll reveal
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){ entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, {threshold:.15});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  // Active nav link highlight
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.links a, .mobile-menu a').forEach(function(a){
    var href = a.getAttribute('href');
    if(href === path || (path === '' && href === 'index.html')){ a.classList.add('active'); }
  });
});
