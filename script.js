const menuOpenIcon = document.getElementById('menu-open-icon');
const meunCloseIcon = document.getElementById('menu-close-icon');
const cover = document.getElementById('cover');
const navLinks = document.getElementById('nav-links-mobile');
const body = document.body;

function clickHandler() {
  menuOpenIcon.classList.toggle('show');
  meunCloseIcon.classList.toggle('show');
  navLinks.classList.toggle('hidden');
  cover.classList.toggle('hidden');
  body.classList.toggle('stoned');
}

menuOpenIcon.addEventListener('click', () => clickHandler());
meunCloseIcon.addEventListener('click', () => clickHandler());