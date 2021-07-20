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
// -----------------------
