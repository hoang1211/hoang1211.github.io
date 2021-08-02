// menu fixed desk
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $("header").addClass("header--fixMenu");
    } else {
      $("header").removeClass("header--fixMenu");
    }
  });
});
//menu fixed mobile
$(document).ready(function () {
  $(window).scroll(function () {
    let headerMobile = $(".header--mobile");
    if ($(this).scrollTop()) {
      headerMobile.addClass("header--fixMenu--mobile");
    } else {
      headerMobile.removeClass("header--fixMenu--mobile");
    }
  });
});
//togger button mobile
$(document).ready(function () {
  $("#nav__btnMenu").click(function () {
    $(".wrap__nav--mobile").slideToggle();
  });
});
$(document).ready(function () {
  $("#nav__btnSearch").click(function () {
    $(".wrap__search--mobile").slideToggle();
  });
});

// -----------------------
// Swiper slide desk
const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next--desktop",
    prevEl: ".swiper-button-prev--desktop",
  },
  thumbs: {
    swiper: swiper,
  },
});
// Swiper slide mobile
const swiperMobile = new Swiper(".mySwiper--mobile", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2Mobile = new Swiper(".mySwiper2--mobile", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next--mobile",
    prevEl: ".swiper-button-prev--mobile",
  },
  thumbs: {
    swiper: swiperMobile,
  },
});
//-----------------------
