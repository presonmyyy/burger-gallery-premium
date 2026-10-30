const toggle=document.querySelector('.menu-toggle'),menu=document.querySelector('#menu');
toggle?.addEventListener('click',()=>{const open=menu.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Fechar menu':'Abrir menu')});
document.querySelectorAll('#menu a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');toggle?.setAttribute('aria-expanded','false');toggle?.setAttribute('aria-label','Abrir menu')}));
document.querySelector('#year').textContent=new Date().getFullYear();
