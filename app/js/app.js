$(document).ready(function () {
  // header-slider
  $('.slider').slick({
    dots: true,
    arrows: false,
    appendDots: $('.header__content'),
    // autoplay: true
  });

  // burger-menu
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__nav').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
