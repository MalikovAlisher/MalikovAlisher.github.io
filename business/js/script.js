$(document).ready(function(){
    $('.sidenav').sidenav();


  //  from the <img> to the backgroundImage
      $('.work_block_img img').each(function() {
        var src = $(this).attr('src');
        $(this).parent().css({
            'background-image' : 'url(' + src + ')',
        });
        $(this).remove();
    });
   //--------  
   $('.modal').modal();

   $('.my_btn_trigger').click(function(){
       $('.material-icons').toggleClass('expand_more');


    $('.myForm').fadeToggle( 700, "linear");
   
       

   });
   /**smooth scroll */

   $("[data-scroll]").on("click", function(event){
        event.preventDefault();
        var blockId = $(this).data('scroll'),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
            scrollTop: blockOffset
        },700);

   })


  });
      