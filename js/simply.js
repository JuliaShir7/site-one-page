window.addEventListener("load",function(event) {
	for(x=0; x<3;x++) 
	{
		var simply = document.createElement("div");
		simply.className = "simply";
		var d = document.createElement("div");
		d.className = "information";
		var h = document.createElement("h4");
		h.textContent="Lorem Ipsum is simply";
		var t = document.createElement("p");
		t.textContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";
	  	var elem = document.createElement("img");
	  	elem.src = 'img/picture.png';
	  	elem.alt ="people";
	  	
	  	d.appendChild(h);
	  	d.appendChild(t);
	  	simply.appendChild(elem);
	  	simply.appendChild(d);
	  	document.getElementById("about").appendChild(simply);
	}
}, false);