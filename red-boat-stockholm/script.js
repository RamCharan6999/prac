const items=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});
items.forEach((item)=>observer.observe(item));
const toggle=document.querySelector('.lang-toggle'); const current=document.querySelector('.lang-current'); let lang='en';
function applyLanguage(next){lang=next;document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-sv]').forEach(el=>{const v=el.dataset[lang];if(v.includes('<br>')||v.includes('<em>'))el.innerHTML=v;else el.textContent=v;});current.textContent=lang.toUpperCase();toggle.querySelector('span:last-child').textContent=lang==='en'?'/SV':'/EN';}
toggle.addEventListener('click',()=>applyLanguage(lang==='en'?'sv':'en'));applyLanguage(lang);
window.addEventListener('load',()=>document.querySelectorAll('.hero .reveal').forEach(x=>x.classList.add('visible')));
