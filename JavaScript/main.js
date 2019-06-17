$(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();


    $('.bg_home .portfolio_item, img' ).each(function() {
        var src = $(this).attr('src');
        $(this).parent().css({
            'background-image' : 'url(' + src + ')',
        });
        $(this).remove();
    });
    

    

    let skills = $('.skills'),
        skillsTop = skills.offset().top;
    $(window).bind('scroll', function(){
        let windowTop = $(this).scrollTop();
        if(windowTop > skillsTop - 100){
            $(function() {
                $('.chart').easyPieChart({
                    barColor: '#000',
                    scaleColor: false,
                    size: 100,
                    lineWidth: 10,
                    trackColor: '#e1e1e1'
                });
            });
        };
    })    

    $(".portfolio_mask a").click(function(event){
        event.preventDefault();
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

});