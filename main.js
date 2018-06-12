$(document).ready(function(){
  $(window).scorll(function(){
	  var barra = $(window)scrollTop();
	  var pocision = barra * 0.10;
	  
	  $('body').css({
		  'background-position': '0 -' + pocision + 'px'
		  background-position: 0 -100px;
	  });
  });
});	