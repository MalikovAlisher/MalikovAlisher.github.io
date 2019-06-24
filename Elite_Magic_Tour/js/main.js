$(document).ready(function(){
  
  $('#header_slider').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slider_dots',
    autoplay: true



});


    $('.gallery').slick({
        arrows: false,
        dots: true,
        dotsClass: 'slider_dots',
        centerMode: true

    });
    $('.reviews_carousel_item').slick({
        slidesToShow: 2,
        arrows: true,
        prevArrow: $('.arrow_left'),
        nextArrow: $('.arrow_right'),
        dots: true,
        dotsClass: 'slider_dots',
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
        
    });

  });