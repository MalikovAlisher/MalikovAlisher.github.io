$(document).ready(function(){
    M.AutoInit();
    $('.sidenav').sidenav();


    $('.bg_home img').each(function() {
        var src = $(this).attr('src');
        $(this).parent().css({
            'background-image' : 'url(' + src + ')',
        });
        $(this).remove();
    });


    



});