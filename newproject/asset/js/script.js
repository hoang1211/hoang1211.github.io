//Menu fix
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

//Banner slider

$(".banner-slider").slick({
  autoplay: true,
  autoplaySpeed: 1000,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: "linear",
  arrows: false,
});

//Tab about
$(document).ready(function () {
  $("#tab-item-1").click(function () {
    $("#tab-item-1").addClass("tab-item-active");
    $("#tab-item-2").removeClass("tab-item-active");
    $("#tab-item-3").removeClass("tab-item-active");
    $("#tab-item-4").removeClass("tab-item-active");
    $("#tab-content-1").css("display", "block");
    $("#tab-content-2").css("display", "none");
    $("#tab-content-3").css("display", "none");
    $("#tab-content-4").css("display", "none");
  });
  $("#tab-item-2").click(function () {
    $("#tab-item-2").addClass("tab-item-active");
    $("#tab-item-1").removeClass("tab-item-active");
    $("#tab-item-3").removeClass("tab-item-active");
    $("#tab-item-4").removeClass("tab-item-active");
    $("#tab-content-2").css("display", "block");
    $("#tab-content-1").css("display", "none");
    $("#tab-content-3").css("display", "none");
    $("#tab-content-4").css("display", "none");
  });
  $("#tab-item-3").click(function () {
    $("#tab-item-3").addClass("tab-item-active");
    $("#tab-item-2").removeClass("tab-item-active");
    $("#tab-item-1").removeClass("tab-item-active");
    $("#tab-item-4").removeClass("tab-item-active");
    $("#tab-content-3").css("display", "block");
    $("#tab-content-2").css("display", "none");
    $("#tab-content-1").css("display", "none");
    $("#tab-content-4").css("display", "none");
  });
  $("#tab-item-4").click(function () {
    $("#tab-item-4").addClass("tab-item-active");
    $("#tab-item-2").removeClass("tab-item-active");
    $("#tab-item-3").removeClass("tab-item-active");
    $("#tab-item-1").removeClass("tab-item-active");
    $("#tab-content-4").css("display", "block");
    $("#tab-content-2").css("display", "none");
    $("#tab-content-3").css("display", "none");
    $("#tab-content-1").css("display", "none");
  });
});
