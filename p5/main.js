$(function(){
	$("body").keydown(function(e) {
	  if(e.keyCode == 37) {
	    $(".box").animate({
	      marginLeft: "-=50"
	    });
	  }
	  else if(e.keyCode == 39) {
	    $(".box").animate({
	      marginLeft: "+=50"
	    });
	  }
	});
});