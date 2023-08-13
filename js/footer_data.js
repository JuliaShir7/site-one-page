window.addEventListener("load",function(event) {
	try 
	{
		let data = 
		[
	 		["Android","Apps","Articles","Backgrounds","Blogger","Books","Coding"],
		  	["Freebies","Greetings","Icons","Illustrator","Inspiration","iPad","iPhone"],
		  	["Drupal","Fonts","Freebies","Greetings","Icons","Illustrator","Inspiration"],
		  	["JQuery","Magento","Mobile","Photoshop","Plugins","Resource","Templates"]
		];
	 	for (let item of data) 
	 	{
	 		var sub = document.createElement("div");
	 		sub.className = "submenu";
	 		var h = document.createElement("h5");
			h.textContent="Sub Menu";
			var ul = document.createElement("ul");
	 		sub.appendChild(h);
	 		for(let i of item)
	  		{
	  			var li = document.createElement("li");
	  			li.appendChild(document.createTextNode(i));
	  			ul.appendChild(li);
	  		}
	  		/*console.log(ul);*/
	  		sub.appendChild(ul);
	  		document.getElementsByClassName('submenus')[0].appendChild(sub);
		} 	
	} 
	catch (err) 
	{
	  	console.error(err);
	}
}, false);