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
    
    $(function() {
        $('.chart').easyPieChart({
            barColor: '#000',
            scaleColor: false,
            size: 100,
            lineWidth: 10,
            trackColor: '#e1e1e1'
        });
    });
    

    



});