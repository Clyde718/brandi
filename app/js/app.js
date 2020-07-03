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




  $('.features__row').slick({
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: $('.features__dots'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.team__row').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    appendDots: $('.team__dots'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });




  $('.filter__item').on('click', function (event) {
    let i = $(this).data('filter');

    console.log(i);

    if (i == 1) {
      $('.works__column').show();
    } else {
      $('.works__column').hide();
      $('.works__column.f_' + i).show();
    }

    $('.filter__item').removeClass('active');
    $(this).addClass('active')
  })





  function countup(className) {
    var countBlockTop = $("." + className).offset().top;
    var windowHeight = window.innerHeight;
    var show = true;

    $(window).scroll(function () {
      if (show && (countBlockTop < $(window).scrollTop() + windowHeight)) {
        show = false;

        $('.' + className).spincrement({
          from: 1,
          duration: 4000,
        });
      }
    })
  }


  $(function () {
    countup("facts__number", $(".facts__number").text());
  });











});
