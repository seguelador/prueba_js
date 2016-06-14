$(function(){
	$(".container").click(function(e){
		//e.stopPropagation(); no me funcionó, investigando descubri algunas razones, pero decidí usar esta alternativa :)
		if(e.target == this) {
			$(".container ol").append("<li>Elemento "+ ($(".container ol li").length + 1) +"</li>");
		} 
	});
});