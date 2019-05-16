


$("<img id='cursor' src='img/cursors/default-yellow-fill.png' />")
	.appendTo("body");




$("body").mousemove(function(e){
	$("#cursor")
		.css({
			"left":e.clientX,
			"top":e.clientY
		})
})







setTimeout(function(){


	$("a, h3").on("mouseover",function(){
		
		
		if ($(this).parent().hasClass("c0")) {
			cursorSRC = "img/cursors/pointer-yellow-fill.png";
			
		} else {
			cursorSRC = "img/cursors/pointer-pink-fill.png"
			
		}

		$("#cursor")
			.attr("src",cursorSRC)
			.addClass("pointer")
			
			

	})


	$("a, h3").on("mouseout",function(){
		
		

		$("#cursor")
			.attr("src","img/cursors/default-yellow-fill.png")
			.removeClass("pointer")
			
			

	})


	



},1500)