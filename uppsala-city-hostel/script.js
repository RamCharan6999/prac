const revealItems=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  });
},{threshold:.1});
revealItems.forEach((item)=>observer.observe(item));

const toggle=document.querySelector('.lang-toggle');
const current=document.querySelector('.lang-current');
let lang=(navigator.language||'en').toLowerCase().startsWith('sv')?'sv':'en';

function applyLanguage(next){
  lang=next;
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-sv][data-en]').forEach((el)=>{
    const value=el.dataset[lang];
    if(value.includes('<br>')||value.includes('<em>')) el.innerHTML=value;
    else el.textContent=value;
  });
  current.textContent=lang.toUpperCase();
  toggle.querySelector('span:last-child').textContent=lang==='en'?'/SV':'/EN';
}
toggle.addEventListener('click',()=>applyLanguage(lang==='en'?'sv':'en'));
applyLanguage(lang);
window.addEventListener('load',()=>document.querySelectorAll('.hero .reveal').forEach(x=>x.classList.add('visible')));
