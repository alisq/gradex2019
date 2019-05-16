

url = "../data.json";

a1 = [];
a2 = [];
a3 = [];

$.ajax({
	dataType:'JSON',
	url:url,
	success:function(e){



// Used like so

e.nodes = shuffle(e.nodes);

	
	setLength = (Math.floor(e.nodes.length / 3));



		for (i=0;i<e.nodes.length;i++){
			let v = e.nodes[i].node,
			lead_img = "";
			if (v.images != '') {
				lead_img = "<img src='"+v.images.split(",")[0]+"' />";
			}
			


			let r = Math.floor(Math.random()*2)

				r = "c"+r;



				l = "<div class='student link "+r+"' data-nid='"+v.nid+"'>";
				l += "<a href=page.html?nid="+v.nid+">"+lead_img+"</a><a href=page.html?nid="+v.nid+"><h3>"+v.name+"</h3></a>";
				l += "<div class='square top-left'></div><div class='square top-middle'></div><div class='square top-right'></div><div class='square middle-left'></div><div class='square middle-right'></div><div class='square bottom-left'></div><div class='square bottom-middle'></div><div class='square bottom-right'></div>";
				l+="</div>";



				if (i < setLength) {
					a1.push(l)
				} else if ((i <= setLength*2) && (i>setLength)) {
					a2.push(l)
				} else {
					a3.push(l)
				}

			


		}



					for (j=0;j<a1.length;j++) {
								console.log(j)
								$("#contain1").append(a1[j])
							}
				
				for (j=0;j<a2.length;j++) {
					$("#contain2").append(a2[j])
				}

				for (j=0;j<a3.length;j++) {
					$("#contain3").append(a3[j])
				}
	}
})



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
