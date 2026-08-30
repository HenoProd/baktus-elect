const body=document.body;
const themeBtn=document.getElementById('themeBtn');
const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('nav');

if(localStorage.getItem('baktus-theme')==='dark'){body.classList.add('dark');themeBtn.textContent='☀';}
themeBtn.addEventListener('click',()=>{
  body.classList.toggle('dark');
  const dark=body.classList.contains('dark');
  localStorage.setItem('baktus-theme',dark?'dark':'light');
  themeBtn.textContent=dark?'☀':'☾';
});
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=new FormData(e.currentTarget);
  const msg=`Bonjour BAKTUS ÉLECT,\n\nJe souhaite demander un devis.\nNom: ${form.get('nom')}\nTéléphone: ${form.get('telephone')}\nEntreprise: ${form.get('entreprise')||'Non précisée'}\nService: ${form.get('service')}\nDescription: ${form.get('description')}`;
  const url='https://wa.me/243996539590?text='+encodeURIComponent(msg);
  document.getElementById('formStatus').textContent='Votre demande est prête. Ouverture de WhatsApp…';
  window.open(url,'_blank','noopener');
});
