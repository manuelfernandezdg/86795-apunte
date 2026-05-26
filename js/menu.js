const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.menu-boton');
const closeAll = document.querySelector('.contenido');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);

  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
})

closeAll.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);
  }
})

/* Links para el menú principal */
const menuItems = [
  { href: "clase1.html", texto: "Clase 1"},
  { href: "clase2.html", texto: "Clase 2"},
  { href: "clase3.html", texto: "Clase 3"},
  { href: "clase4.html", texto: "Clase 4"},
  { href: "clase5.html", texto: "Clase 5"},
  { href: "clase6.html", texto: "Clase 6"},
  { href: "clase7.html", texto: "Clase 7"},
  { href: "clase8.html", texto: "Clase 8"},
  { href: "clase9.html", texto: "Clase 9"},
  { href: "clase10.html", texto: "Clase 10"},
  { href: "clase11.html", texto: "Clase 11"},
  { href: "clase12.html", texto: "Clase 12"},
  { href: "clase13.html", texto: "Clase 13"},
  { href: "clase14.html", texto: "Clase 14"},
  { href: "clase15.html", texto: "Clase 15"},
  { href: "clase16.html", texto: "Clase 16"}
]

document.getElementById('nav-links').innerHTML = 
  menuItems.map(
    item => `<li><a href="${item.href}">${item.texto}</a></li>`
  ).join('');



/* Tema claro/oscuro */
const btn = document.getElementById('theme-toggle');
const label = document.getElementById('mode-label');

// Clave que usamos en localStorage
const STORAGE_KEY = 'theme';

// Aplica el tema al <html> y actualiza la etiqueta
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  label.textContent = theme === 'dark' ? 'Modo oscuro' : 'Modo claro';
}

// Al cargar: leemos lo guardado, o usamos la preferencia del sistema
const saved = localStorage.getItem(STORAGE_KEY);
const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
  ? 'dark'
  : 'light';

applyTheme(saved ?? preferred);

// Al hacer click: alternamos y guardamos
btn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem(STORAGE_KEY, next);
});