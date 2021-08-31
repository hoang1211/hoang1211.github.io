let header = document.querySelector(".header-nav");
let logoHeader = document.querySelector(".logo");
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  let scrollTopPosition = window.scrollY;
  let header = document.querySelector(".header-nav");
  let logoHeader = document.querySelector(".logo");
  if (scrollTopPosition > 0) {
    header.classList.add("header-nav-fix");
    logoHeader.classList.add("logo-fix");
  } else {
    header.classList.remove("header-nav-fix");
    logoHeader.classList.remove("logo-fix");
  }
});
$(document).ready(() => {
  let scrollCheck = window.scrollY;
  if (scrollCheck > 0) {
    header.classList.add("header-nav-fix");
    logoHeader.classList.add("logo-fix");
  } else {
    header.classList.remove("header-nav-fix");
    logoHeader.classList.remove("logo-fix");
  }
});
