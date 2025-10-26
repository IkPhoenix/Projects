
document.addEventListener('DOMContentLoaded',()=>{
  const root=document.documentElement;
  const saved=localStorage.getItem('theme');
  if(saved==='light'||saved==='dark'){ root.setAttribute('data-theme', saved); }
  const btn=document.getElementById('themeToggle');
  const ico=document.getElementById('themeIcon');
  function setIcon(){ if(ico){ ico.textContent = (root.getAttribute('data-theme')==='dark' ? '🌙' : '☀️'); } }
  setIcon();
  if(btn){
    btn.addEventListener('click',()=>{
      const cur=root.getAttribute('data-theme')|| (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      const next= (cur==='dark') ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      setIcon();
    });
  }
});
