$(function(){
	$("#txt_texto").keyup(function() {
	    $("#p_texto").text($(this).val());
	});
	$("#txt_color").change(function(){
		$("#p_texto").css("color", $(this).val());
	});
	$("#txt_size").change(function(){
		$("#p_texto").css("font-size", $(this).val() + "px");		
	});
	$("#select_font").change(function(){
		$("#p_texto").css("font-family", $(this).val());		
	});
});