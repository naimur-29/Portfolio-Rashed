const navbarMobileMenu = document.querySelector(
  ".navbar__container .mobile__menu"
);
const navbarMenu = document.querySelector(".navbar__container .menu");

const homeMenu = document.querySelector(".home__menu");
const aboutMenu = document.querySelector(".about__menu");
const skillsMenu = document.querySelector(".skills__menu");
const servicesMenu = document.querySelector(".services__menu");
const contactMenu = document.querySelector(".contact__menu");

// TOGGLE MOBILE MENU
navbarMobileMenu.addEventListener("click", () => {
  navbarMobileMenu.classList.toggle("mobile__menu__active");
  navbarMenu.classList.toggle("menu__active");
});

// TOGGLE MOBILE MENU ON CLICK ON MENUS
[homeMenu, aboutMenu, skillsMenu, servicesMenu, contactMenu].forEach(
  (element) => {
    element.addEventListener("click", () => {
      navbarMobileMenu.classList.toggle("mobile__menu__active");
      navbarMenu.classList.toggle("menu__active");
    });
  }
);
