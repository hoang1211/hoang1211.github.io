// menu fixed desk
let headerScroll = $(".header");
let scrollTopPost = window.scrollY;
window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  if (scrollTopPost > 0) {
    headerScroll.addClass("header--fixMenu");
  } else {
    headerScroll.removeClass("header--fixMenu");
  }
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
    $(".nav__btn__icon--mobile").toggle();
    $(".nav__btn__icon--mobile__close").toggle();
  });
});
$(document).ready(function () {
  $("#nav__btnSearch").click(function () {
    $(".wrap__search--mobile").slideToggle();
  });
});
//Search info
let searchFunc = () => {
  $("#banner__searchbar__btn").click(function () {
    let regionId = $("#select-search-address").val();
    let typeId = $("#select-search-type").val();
    let priceId = $("#select-search-price").val();
    window.location.href = `search.html?region=${regionId}&type=${typeId}&price=${priceId}`;
    return false;
  });
};
searchFunc();
let searchFuncMobile = () => {
  $("#banner__searchbar__btn-mobile").click(function () {
    let regionId = $("#select-search-address-mobile").val();
    let typeId = $("#select-search-type-mobile").val();
    let priceId = $("#select-search-price-mobile").val();
    window.location.href = `search.html?region=${regionId}&type=${typeId}&price=${priceId}`;
    return false;
  });
};
searchFuncMobile();
//Filter search
