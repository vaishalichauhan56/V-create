// JavaScript Document




var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}



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
		items: 3,
		nav: true,	 
        loop:true,
        margin:20,   
		navigation:true, 
		   mouseDrag: false,
		 autoHeight : true,
         stopOnHover: true,
   		 autoplay:true,		
      autoplayTimeout:3500,
      autoplayHoverPause:true,      
      autoplaySpeed:1300,	
	    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }  
	});
});


/* owl-carousel_slider */
$(document).ready(function(){
    $('.owl-one').owlCarousel({
		 items: 1,
        loop:true,        
		nav: true,
    stopOnHover: true,
    autoplay:true,
	 autoHeight : false,      
      autoplayHoverPause:true,      
      autoplaySpeed:1300,       
    });
});



/* owl-carousel_shop */
$(document).ready(function(){
    $('.owl-three').owlCarousel({
		items: 3,
		nav: true,	 
        loop:true,
        margin:20,   
		navigation:true, 
		   mouseDrag: false,
		 autoHeight : true,
         stopOnHover: true,
   		 autoplay:true,		
      autoplayTimeout:3500,
      autoplayHoverPause:true,      
      autoplaySpeed:1300,	
	    responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }  
	});
});



function openShop(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
	
	
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
   
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
   
}






