$(document).ready(function(){
    $('.testimonials_card').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500
    });


    //smooth scroll
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        },700);

   })


   //----scroll up
   var btn = $('#buttonScrollUp ');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});





  });