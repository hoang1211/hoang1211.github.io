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
