$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".logo").addClass("hide-logo");
    else $(".logo").removeClass("hide-logo");
  });
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".header").addClass("fixed-header");
    else $(".header").removeClass("fixed-header");
  });
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".quote").addClass("hide-quote");
    else $(".quote").removeClass("hide-quote");
  });
  $(".image").click(function () {
    $(this).toggleClass("fullsize");
  });
});
