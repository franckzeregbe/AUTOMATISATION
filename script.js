document.addEventListener("DOMContentLoaded", function () {
  console.log('Automatisation: script chargé');
});

function ouvrir(url) {
  window.location.href = url;
}

function rechercher() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
    const texte = section.textContent.toLowerCase();
    section.style.display = texte.includes(input) ? "block" : "none";
  });
}

/* Ouvrir une "view" — mappe certains noms vers des pages existantes */
function openView(name){
  if(!name) return;
  const key = String(name).toLowerCase();
  const map = {
    'prieres': 'sections/prieres.html',
    'prières': 'sections/prieres.html',
    'videos': 'sections/videos.html',
    'jeux': 'sections/jeux.html',
    'bible': 'sections/bible.html',
    'dons': 'sections/dons.html',
    'agent': 'sections/agent.html'
  };
  const url = map[key] || `sections/${key}.html`;
  // navigation directe vers l'URL (plus fiable en contexte local)
  try{
    ouvrir(url);
  }catch(e){
    alert('Impossible d\'ouvrir la page: ' + url);
  }
}

/* Drawer helpers */
function toggleDrawer(){
  const d = document.getElementById('app-drawer');
  if(!d) return;
  const open = d.classList.toggle('open');
  d.setAttribute('aria-hidden', !open);
  // gestion du focus pour accessibilité
  if(open){
    // focus sur le bouton de fermeture si présent
    const close = d.querySelector('.drawer-close');
    if(close) close.focus();
    // écouter Escape
    document.addEventListener('keydown', _drawerKeydown);
  } else {
    document.removeEventListener('keydown', _drawerKeydown);
    // remettre le focus sur le bouton Plus
    const plus = document.querySelector('.view-bar .vb-btn[aria-haspopup]');
    if(plus) plus.focus();
  }
}

function _drawerKeydown(e){
  if(e.key === 'Escape' || e.key === 'Esc'){
    const d = document.getElementById('app-drawer');
    if(d && d.classList.contains('open')) toggleDrawer();
  }
}
