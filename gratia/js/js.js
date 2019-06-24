
$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        center:true,
        loop:true,
        nav:false,
        items: 1,
        loop:true,
        dots:false,
        // autoplay:true,
        // autoplayTimeout: 5000,
        
    });
    $('.nav_toggle').on('click', function(){
            $(this).toggleClass('active');
            $('.menu').toggleClass('mob');

    });



});