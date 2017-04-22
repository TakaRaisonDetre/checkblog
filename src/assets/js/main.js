(function ($) {
 "use strict";
/*--
 Bootstrap Menu Fix For Mobile
-----------------------------------*/
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
}); 

/* headerStickys */ 
var $window = $(window);
$window.on('scroll',function() {
	var headerSticky = 	$(".header-sticky");
	var scroll = $window.scrollTop();
	if (scroll < 245) {
		headerSticky.removeClass("sticky");
	}else{
		headerSticky.addClass("sticky");
	}
}); 
  
/* one page nav */
var top_offset = $('.header-area').height() - 0;  // get height of fixed navbar
$('#nav').onePageNav({
    scrollOffset: top_offset,
	 scrollSpeed: 750,
	 easing: 'swing',
	 currentClass: 'active',
});

/* imagesLoaded */
$('.grid').imagesLoaded( function() {
	// filter items on button click
	$('.portfolio-menu').on( 'click', 'button', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});	
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
});
/* portfolio-menu active class */
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
/* slider active  */ 
$('.slider-active').owlCarousel({
    loop:true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items:1,
    dots:false,
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/* portfolio active  */ 
$('.portfolio-slider').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',	
    nav:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/* testimonial active  */ 
$('.testimonial-active').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
/*--
Magnific Popup
------------------------*/
$('.img-poppu').magnificPopup({
    type: 'image',
    gallery:{
        enabled:true
    }
});
/*--------------------------
    scrollUp
---------------------------- */
var toTop = $("#toTop");
$window.on('scroll',function () {
	if($window.scrollTop()>200) {
		toTop.fadeIn();
	} else {
		toTop.fadeOut();
	}
});
toTop.on('click', function() {
	$("html,body").animate({
		scrollTop:0
	}, 500)
}); 
/*---------------------
   Circular Bars - Knob
--------------------- */	
if(typeof($.fn.knob) != 'undefined') {
	$('.knob').each(function () {
		var $this = $(this),
			knobVal = $this.attr('data-rel');
		$this.knob({
			'draw' : function () { 
				$(this.i).val(this.cv + '%')
			}
		});
		$this.appear(function() {
			$({
				value: 0
			}).animate({
				value: knobVal
			}, {
				duration : 2000,
				easing   : 'swing',
				step     : function () {
					$this.val(Math.ceil(this.value)).trigger('change');
				}
			});
		}, {accX: 0, accY: -150});
	});
}
 
})(jQuery);  