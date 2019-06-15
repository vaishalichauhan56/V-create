// JavaScript Document



function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


/* owl-carousel_shop */
$(document).ready(function(){
    $('.owl-two').owlCarousel({
		items: 1,
		nav: true,	 
        loop:true,
        margin:0,   
		navigation:true, 
		   mouseDrag: false,
		 autoHeight : true,
         stopOnHover: true,
   		 autoplay:false,		
      autoplayTimeout:3500,
      autoplayHoverPause:true,      
      autoplaySpeed:1300,	
	   
	});
});

$(document).ready(function(){
    $('.owl-one').owlCarousel({
		
		nav: true,	 
        loop:true,
        margin:0,   
		navigation:true, 
		   mouseDrag: false,
		 autoHeight : true,
         stopOnHover: true,
   		 autoplay:false,		
      autoplayTimeout:3500,
      autoplayHoverPause:true,      
      autoplaySpeed:1300,	
	  responsive:{
           0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
	  }
	  
	});
});



$(function() { 
	$("#top").on('click', function() 
	{ 
		$("HTML, BODY").animate({ scrollTop: 0 }, 1000);
	 }); 
 });



 $(window).on("scroll", function() {
    if($(window).scrollTop() > 40) {
        $(".bottom_menu").addClass("header_active");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $(".bottom_menu").removeClass("header_active");
    }
});



function openWeb(evt, website) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(website).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




  

