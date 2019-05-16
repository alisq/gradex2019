url = "/data";

$.ajax({
	dataType:'JSON',
	url:url,
	success:function(e){

		for (i=0;i<e.nodes.length;i++){
			let v = e.nodes[i].node,
			lead_img = "";
			if (v.images != '') {
				lead_img = "<img src='"+v.images.split(",")[0]+"' />";
			}
			


			let r = Math.floor(Math.random()*2)

				r = "c"+r;


			$("<div></div>")
				.addClass("student link "+r)
				.attr("data-nid",v.nid)
				.html("<a href=page.html?nid="+v.nid+">"+lead_img+"</a><a href=page.html?nid="+v.nid+"><h3>"+v.name+"</h3></a>")
				.append("<div class='square top-left'></div><div class='square top-middle'></div><div class='square top-right'></div><div class='square middle-left'></div><div class='square middle-right'></div><div class='square bottom-left'></div><div class='square bottom-middle'></div><div class='square bottom-right'></div>")
				.appendTo("#contain")
				// .click(function(e){
				// 	n = $(this).data("nid")
				// 	$("#contain").fadeOut(200);
				// 	setTimeout(function(){
				// 		window.location.href="page.html?nid="+n;
				// 	},200)
					
				// })
				

		}

		setTimeout(function(){

			$('#contain').isotope({
			  // options
			  itemSelector: '.student',
			  layoutMode: 'masonry'
			}).css("opacity",1)
			
		},1000)


	}
})