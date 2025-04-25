document.querySelector("#Mir").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "visible";
    document.querySelector(".moviepic").src = "img/miracle.jpg";
    document.querySelector(".moviepic").style.width = "20%";
    document.querySelector(".moviepic").style.margin = "auto";
})

document.querySelector("#Mir").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "hidden";


})

document.querySelector("#lalaland").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "visible";
    document.querySelector(".moviepic").src = "img/lala.jpg";
    document.querySelector(".moviepic").style.width = "20%";
    document.querySelector(".moviepic").style.margin = "auto";
})

document.querySelector("#lalaland").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "hidden";


})




document.querySelector("#carrr").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "visible";
    document.querySelector(".moviepic").src = "img/cars.jpg";
    document.querySelector(".moviepic").style.width = "20%";
    document.querySelector(".moviepic").style.margin = "auto";
})

document.querySelector("#carrr").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "hidden";


})




document.querySelector("#gout").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "visible";
    document.querySelector(".moviepic").src = "img/getout.jpg";
    document.querySelector(".moviepic").style.width = "20%";
    document.querySelector(".moviepic").style.margin = "auto";
})

document.querySelector("#gout").addEventListener("mouseout", function() {

    console.log("gout");
    document.querySelector(".moviepic").style.visibility = "hidden";


})




document.querySelector("#forrest").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "visible";
    document.querySelector(".moviepic").src = "img/gump.jpg";
    document.querySelector(".moviepic").style.width = "20%";
    document.querySelector(".moviepic").style.margin = "auto";
})

document.querySelector("#forrest").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".moviepic").style.visibility = "hidden";


})


document.querySelector("#mov2").addEventListener("click", function() {
	
	
	if (document.querySelector("#mov1").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mov1").textContent = "Show Less"

        document.querySelector("#mir2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mov1").textContent = "Show More"
        document.querySelector("#mir2").style.display = "none";
	}
	
	




});

document.querySelector("#mov2").addEventListener("click", function() {
	
	
	if (document.querySelector("#mov2").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mov2").textContent = "Show Less"

        document.querySelector("#lala2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mov2").textContent = "Show More"
        document.querySelector("#lala2").style.display = "none";
	}
	
	




});

document.querySelector("#mov3").addEventListener("click", function() {
	
	
	if (document.querySelector("#mov3").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mov3").textContent = "Show Less"

        document.querySelector("#cars2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mov3").textContent = "Show More"
        document.querySelector("#cars2").style.display = "none";
	}
	
	




});

document.querySelector("#mov4").addEventListener("click", function() {
	
	
	if (document.querySelector("#mov4").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mov4").textContent = "Show Less"

        document.querySelector("#gout2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mov4").textContent = "Show More"
        document.querySelector("#gout2").style.display = "none";
	}
	
	




});

document.querySelector("#mov5").addEventListener("click", function() {
	
	
	if (document.querySelector("#mov5").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mov5").textContent = "Show Less"

        document.querySelector("#gump2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mov5").textContent = "Show More"
        document.querySelector("#gump2").style.display = "none";
	}
	
	




});


