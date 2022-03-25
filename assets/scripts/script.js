const navbarMobileMenu = document.querySelector(
  ".navbar__container .mobile__menu"
);
const navbarMenu = document.querySelector(".navbar__container .menu");

navbarMobileMenu.addEventListener("click", () => {
  navbarMobileMenu.classList.toggle("mobile__menu__active");
  navbarMenu.classList.toggle("menu__active");
});
