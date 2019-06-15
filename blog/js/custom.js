// JavaScript Document


$(document).ready(function() {
		$('.pop').on('click', function() {
			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
			$('#imagemodal').modal('show');   
		});		
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



$(window).on("scroll", function() {
    if($(window).scrollTop() > 400) {
        $(".header").addClass("header_active");
    } else {        
       $(".header").removeClass("header_active");
    }
});





$(document).ready(function() {
              var owl = $('.owl-main');
              owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true
				
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })


$(document).ready(function() {
              var owl = $('.owl-news');
              owl.owlCarousel({               
                loop: true,
                margin: 0,
                autoplay: true,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
				 responsive:{      
        
						   0:{
							items:1
						},
						600:{
							items:3
						},
						1200:{
							items:6
						}
					  }         
              });
              $('.play').on('click', function() {
                owl.trigger('play.owl.autoplay', [1000])
              })
              $('.stop').on('click', function() {
                owl.trigger('stop.owl.autoplay')
              })
            })
			
/*-------------------------------------------------------------start portfolio sliders -------------------------------------------------------*/		
			
$(document).ready(function() {
  var owl = $('.owl_port_sli');
  owl.owlCarousel({
	items: 1,
	loop: true,
	dots: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 2050,
	autoplayHoverPause: true
	
  });

})

$(document).ready(function() {
  var owl = $('.owl_port_sli2');
  owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 2100,
	autoplayHoverPause: true
	
  });

})


$(document).ready(function() {
  var owl = $('.owl_port_sli3');
  owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 1800,
	autoplayHoverPause: true
	
  });

})

$(document).ready(function() {
  var owl = $('.owl_port_sli4');
  owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 2450,
	autoplayHoverPause: true
	
  });

})

$(document).ready(function() {
  var owl = $('.owl_port_sli5');
  owl.owlCarousel({
	items: 1,
	loop: true,
	margin: 0,
	autoplay: true,
	autoplayTimeout: 2200,
	autoplayHoverPause: true
	
  });

})

         
    
	
	
	
	
	$(function () {
    "use strict";
    
    $(".popup img").click(function () {
        var $src = $(this).attr("src");
        $(".show").fadeIn();
        $(".img-show img").attr("src", $src);
    });
    
    $("span, .overlay").click(function () {
        $(".show").fadeOut();
    });
    
});
	
	
	
	
	
	
	
