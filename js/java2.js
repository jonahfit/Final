document.querySelector("#bb").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "visible";
    document.querySelector(".tvpic").src = "img/bb1.jpg";
    document.querySelector(".tvpic").style.width = "20%";
   

})

document.querySelector("#bb").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "hidden";


})

document.querySelector("#ss").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "visible";
    document.querySelector(".tvpic").src = "img/succession.jpg";
    document.querySelector(".tvpic").style.width = "20%";
    document.querySelector(".tvpic").style.margin = "auto";
})

document.querySelector("#ss").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "hidden";


})




document.querySelector("#Sopr").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "visible";
    document.querySelector(".tvpic").src = "img/sopranos.jpg";
    document.querySelector(".tvpic").style.width = "20%";
    document.querySelector(".tvpic").style.margin = "auto";
})

document.querySelector("#Sopr").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "hidden";


})




document.querySelector("#GoT").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "visible";
    document.querySelector(".tvpic").src = "img/got.jpg";
    document.querySelector(".tvpic").style.width = "20%";
    document.querySelector(".tvpic").style.margin = "auto";
})

document.querySelector("#GoT").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "hidden";


})




document.querySelector("#BCS").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "visible";
    document.querySelector(".tvpic").src = "img/bcs.jpg";
    document.querySelector(".tvpic").style.width = "20%";
    document.querySelector(".tvpic").style.margin = "auto";
})

document.querySelector("#BCS").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".tvpic").style.visibility = "hidden";


})



document.querySelector("#tv1").addEventListener("click", function() {
	
	
	if (document.querySelector("#tv1").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#tv1").textContent = "Show Less"

        document.querySelector("#bb2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tv1").textContent = "Show More"
        document.querySelector("#bb2").style.display = "none";
	}
	
	




});

document.querySelector("#tv2").addEventListener("click", function() {
	
	
	if (document.querySelector("#tv2").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#tv2").textContent = "Show Less"

        document.querySelector("#ss2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tv2").textContent = "Show More"
        document.querySelector("#ss2").style.display = "none";
	}
	
	




});

document.querySelector("#tv3").addEventListener("click", function() {
	
	
	if (document.querySelector("#tv3").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#tv3").textContent = "Show Less"

        document.querySelector("#sopr2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tv3").textContent = "Show More"
        document.querySelector("#sopr2").style.display = "none";
	}
	
	




});

document.querySelector("#tv4").addEventListener("click", function() {
	
	
	if (document.querySelector("#tv4").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#tv4").textContent = "Show Less"

        document.querySelector("#got2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tv4").textContent = "Show More"
        document.querySelector("#got2").style.display = "none";
	}
	
	




});

document.querySelector("#tv5").addEventListener("click", function() {
	
	
	if (document.querySelector("#tv5").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#tv5").textContent = "Show Less"

        document.querySelector("#bcs2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#tv5").textContent = "Show More"
        document.querySelector("#bcs2").style.display = "none";
	}
	
	




});

