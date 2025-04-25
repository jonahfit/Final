document.querySelector("#tvbutton").addEventListener("click", function() {
	
	
	if (document.querySelector("#tvbutton").textContent == "Show TV Show Rankings"){

		
		console.log("showing tv rank");
		document.querySelector("#tvbutton").textContent = "Hide TV Show Rankings"

        document.querySelector("#tvrank").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tvbutton").textContent = "Show TV Show Rankings"
        document.querySelector("#tvrank").style.display = "none";
	}
	
	




});

document.querySelector("#movbutton").addEventListener("click", function() {
	
	
	if (document.querySelector("#movbutton").textContent == "Show Movie Rankings"){

		
		console.log("showing mov rank");
		document.querySelector("#movbutton").textContent = "Hide Movie Rankings"

        document.querySelector("#movrank").style.display = "block";

	}
	else{
		
		console.log("hiding mov rank");
		document.querySelector("#movbutton").textContent = "Show Movie Rankings"
        document.querySelector("#movrank").style.display = "none";
	}
	
	




});

document.querySelector("#musbutton").addEventListener("click", function() {
	
	
	if (document.querySelector("#musbutton").textContent == "Show Music Artist Rankings"){

		
		console.log("showing mus rank");
		document.querySelector("#musbutton").textContent = "Hide Music Artist Rankings"

        document.querySelector("#MusicRank").style.display = "block";

	}
	else{
		
		console.log("hiding mus rank");
		document.querySelector("#musbutton").textContent = "Show Music Artist Rankings"
        document.querySelector("#MusicRank").style.display = "none";
	}
	
	




});

