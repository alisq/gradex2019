nid = getUrlVars()["nid"]

if (nid == undefined) {
	window.location.href="/test";
}


url = "/data/"+nid;

$.ajax({
	dataType:'JSON',
	url:url,
	success:function(e){

		x = e.nodes[0].node;

		console.log(x)

		
		let k= x.images_big.split(",");
		
		let allPics ="";
		for (j=0;j<k.length;j++) {
			
			allPics+="<div class='cell'><img src='"+k[j]+"'/></div>";
		}

		if (k.length > 1) {
			allPics = "<div class='main-carousel'>"+allPics+"</div>";
		}
//		desc,email,images,instructor, link, name, profile, project, tags


		if (x.instructor == "aliPatricio") { x.instructor = "Ali & Patricio" }



		$("#student-contain")
			.append("<h1>"+x.name+"</h1>")
			.append("<p>"+x.profile+"</p>")
			.append("<h2>"+x.project+"</h2>")
			.append("<p>"+x.email+"</p>")
			.append(allPics)
			.append("<p>"+x.link+"</p>")
			.append("<p>"+x.desc+"</p>")
			.append("<p>"+x.instructor+"</p>")
			.append("<p>"+x.tags+"</p>")
			
setTimeout(function(){
$('.main-carousel').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
},500);



	}
})


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
