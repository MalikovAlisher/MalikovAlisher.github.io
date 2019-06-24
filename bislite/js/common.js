$(function() {
$(document).ready(function(){
  $("#owl-slider").owlCarousel({
  		items : 1,
  		dots : true,
  		center : true,
  		mergeFit: true,
  		autoHeight: true,

  });	
    $("#mini-carousel").owlCarousel({
  		items : 4,
  		dots : true,
  		center : true,
  		loop : true,
  		margin : 40,
  		nav : true,
  		navClass : ['class="circle-btn"','.circle-btn'],



  });	

});

});
