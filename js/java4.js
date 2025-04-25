document.querySelector("#cudi").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "visible";
    document.querySelector(".musicpic").src = "img/cudi.jpg";
    document.querySelector(".musicpic").style.width = "20%";
    document.querySelector(".musicpic").style.margin = "auto";
})

document.querySelector("#cudi").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "hidden";


})




document.querySelector("#posty").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "visible";
    document.querySelector(".musicpic").src = "img/posty.jpg";
    document.querySelector(".musicpic").style.width = "20%";
    document.querySelector(".musicpic").style.margin = "auto";
})

document.querySelector("#posty").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "hidden";


})




document.querySelector("#clairo").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "visible";
    document.querySelector(".musicpic").src = "img/imbd.jpg";
    document.querySelector(".musicpic").style.width = "20%";
    document.querySelector(".musicpic").style.margin = "auto";
})

document.querySelector("#clairo").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "hidden";


})




document.querySelector("#shake").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "visible";
    document.querySelector(".musicpic").src = "img/shake.jpg";
    document.querySelector(".musicpic").style.width = "20%";
    document.querySelector(".musicpic").style.margin = "auto";
})

document.querySelector("#shake").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "hidden";


})




document.querySelector("#zach").addEventListener("mouseover", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "visible";
    document.querySelector(".musicpic").src = "img/zacht.jpg";
    document.querySelector(".musicpic").style.width = "20%";
    document.querySelector(".musicpic").style.margin = "auto";
})

document.querySelector("#zach").addEventListener("mouseout", function() {

    console.log("hover1");
    document.querySelector(".musicpic").style.visibility = "hidden";


})



document.querySelector("#mus1").addEventListener("click", function() {
	
	
	if (document.querySelector("#mus1").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mus1").textContent = "Show Less"

        document.querySelector("#cudi2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mus1").textContent = "Show More"
        document.querySelector("#cudi2").style.display = "none";
	}
	
	




});

document.querySelector("#mus2").addEventListener("click", function() {
	
	
	if (document.querySelector("#mus2").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mus2").textContent = "Show Less"

        document.querySelector("#posty2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mus1").textContent = "Show More"
        document.querySelector("#posty2").style.display = "none";
	}
	
	




});

document.querySelector("#mus3").addEventListener("click", function() {
	
	
	if (document.querySelector("#mus3").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mus3").textContent = "Show Less"

        document.querySelector("#clairo2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mus3").textContent = "Show More"
        document.querySelector("#clairo2").style.display = "none";
	}
	
	




});

document.querySelector("#mus4").addEventListener("click", function() {
	
	
	if (document.querySelector("#mus4").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mus4").textContent = "Show Less"

        document.querySelector("#shake2").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mus4").textContent = "Show More"
        document.querySelector("#shake2").style.display = "none";
	}
	
	




});

document.querySelector("#mus5").addEventListener("click", function() {
	
	
	if (document.querySelector("#mus5").textContent == "Show More"){

		
		console.log("showing tv rank");
		document.querySelector("#mus5").textContent = "Show Less"

        document.querySelector("#bryan").style.display = "block";

	}
	else{
		
		console.log("hiding tv rank");
		document.querySelector("#mus5").textContent = "Show More"
        document.querySelector("#bryan2").style.display = "none";
	}
	
	




});

