$(document).ready(function() {
  $(window).scroll(function () {
    console.log($(window).scrollTop())
    if ($(window).scrollTop() > $(window).height() ) {
      $('#nav_bar').addClass('navbar-fixed');
      document.getElementById("about").style.paddingTop = "50px";

    }
    if ($(window).scrollTop() < $(window).height() ) {
      $('#nav_bar').removeClass('navbar-fixed');
      document.getElementById("about").style.paddingTop = "0px";
    }
  });
});
