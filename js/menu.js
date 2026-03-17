const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.menu-boton');
const closeAll = document.querySelector('.contenido');

navToggle.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true)
    navToggle.setAttribute('aria-expanded', true)
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})

closeAll.addEventListener('click', () => {
  const visibility = primaryNav.getAttribute('data-visible')
  if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false)
    navToggle.setAttribute('aria-expanded', false)
  }
})