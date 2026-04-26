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
  { href: "clase7.html", texto: "Clase 7"}
]

document.getElementById('nav-links').innerHTML = 
  menuItems.map(
    item => `<li><a href="${item.href}">${item.texto}</a></li>`
  ).join('');