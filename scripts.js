// Custom scripts.js
// 10.10.19 jQuery Tutorial 

$(document).ready(function()  {
    
    //hover effect for H1 element
    $(".jumbotron h1").mouseenter(function() {
    	$(this).css({
    		"background-color": "transparent",
    		"color": "gold",
    		"text-decoration": "none"
    	});
    	// body...
    });

    $("div.jumbotron").click(function() {
    	$(this).find("p").css("color","rea")
    })

    $("card-image-top").click(function() {
    	$(this).parents(".card").find(".card-body").toggle()
    });

    $("card-image-top").click(function() {
    	$(this).parents(".card").find(".card-body").fadeout()
    });
    
    $("card-image-top").click(function() {
    	$(this).parents(".card").find(".card-body").fadetoggle(10000) whichisveryslow
    });

    $(".card button").click(function() {
    	$(this).parents(".card").fadeout()
    });

    $("#more-cats").click(function() {
    	$("#cats-container").append(".card").fadeout()
    });





});