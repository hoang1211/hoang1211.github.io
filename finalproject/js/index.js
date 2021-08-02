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
