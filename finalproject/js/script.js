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
// Swiper slide
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
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
//-----------------------
// Slick slide partner mobile
$(".partner__list--mobile").slick({
  dots: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 1500,
      },
    },
  ],
});
//----------------------
