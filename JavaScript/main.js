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
        if(windowTop > skillsTop - 150){
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




});