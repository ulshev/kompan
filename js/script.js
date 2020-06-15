$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	

	// 
	$('.main_menu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	// 
	if ( window.innerWidth < 1001 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	
	// 
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1001) {
			//$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	// 
	$('.menu_button').click(function(){
		$(".main_menu").toggleClass("show");
		$(this).toggleClass('active');
		$("#logo").toggleClass("toleft");
	});
	
	// animation
	if ( window.innerWidth>0 ) {
		$('.main_section').toggleClass("hidden");
		$('#index #header').addClass('hidden');
		$('#main_slide').addClass('animated');
		//$('#header').addClass('animated');
	};
	setTimeout (function(){
	 	$('#index #header').addClass('animated');
		
	}, 0); 
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
	    });
	});
	
	// tab switching
	$('.tab_buttons span').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons span', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	
	
	$('.directions.slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1000 && $('.tabs_container .production_slider').hasClass('slick-initialized') ) {
		  $('.tabs_container .production_slider').slick('unslick');
		} else if ( window.innerWidth<=1000 && !$('.tabs_container .production_slider').hasClass('slick-initialized') ) {
		  $('.tabs_container .production_slider').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 4,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 801,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 641,
					settings: {
					  slidesToShow: 2,
					  vertical: false,
					}
				  },
				{
					breakpoint: 481,
					settings: {
					  slidesToShow: 2,
					  vertical: false,
					}
				  },
				]
		  });
		}
	});


	$('.our_work_slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1001,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 801,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.advantages').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
			{
				breakpoint: 1101,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 601,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('.projects').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	 
	$('.promotions_more').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.promotions_images',
	    vertical: true,
	    swipe: false,
	    responsive: [
		{
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 1,
		      vertical: false,
		      swipe: true,
		    }
		},
	    ]
	});
	$('.promotions_images').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    fade: true,
	    asNavFor: '.promotions_more',
	    swipe: false,
	    
	    responsive: [
		{
		    breakpoint: 801,
		    settings: {
		      swipe: true,
		      arrows: true,
		      fade: false,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		},
	    ]
	    
	});
	
	$('.promotions_block.slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	
	$('.advantages_menu').slick({
	    slidesToShow: 12,
	    slidesToScroll: 12,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.advantages_more',
	    //vertical: true,
	    swipe: false,
	    responsive: [
		{
		    breakpoint: 601,
		    settings: {
		      slidesToShow: 1,
		      slidesToScroll: 1,
		      //vertical: false,
		      swipe: true,
		    }
		},
	    ]
	});
	$('.advantages_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: true,
	    fade: true,
	    asNavFor: '.advantages_menu',
	    swipe: false,
	    
	    responsive: [
		{
		    breakpoint: 601,
		    settings: {
		      swipe: true,
		      arrows: true,
		      fade: false,
		      dots: false,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		},
	    ]
	    
	});
	
	
	$('.clients_slider').slick({
	    slidesToShow: 5,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    centerMode: false,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    responsive: [
		  {
		    breakpoint: 1501,
		    settings: {
		      vertical: false,
		      slidesToShow: 4,
		    }
		  },
		  {
		    breakpoint: 1201,
		    settings: {
		      slidesToShow: 3,
		      vertical: false,
		    }
		  },
		  {
		    breakpoint: 901,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		  
		  {
		    breakpoint: 451,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	});
	
	
	$('.sertificates_block .slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	
	$('.reviews_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    dots: false,
	    focusOnSelect: true,
	    asNavFor: '.reviews_image',
	    fade: true,
	});
	$('.reviews_image').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    dots: false,
	    fade: true,
	    asNavFor: '.reviews_more',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    
	});
	
	$('.galery').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	$('.catalog.slider').slick({
	    dots: false,
	    arrows: true,
	    infinite: true,
            speed: 1000,
	    slidesToShow: 4,
	    slidesToScroll: 1,
		//centerMode: true,
	    //variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1501,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  
		  {
		    breakpoint: 1151,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 701,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	
	$('.articles.slider').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //infinite: true,
	    vertical: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	$('.products_images .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.products_images .small_images',
	    responsive: [
		  {
		    breakpoint: 451,
		    settings: {
		      arrows: true,
		      prevArrow: '<span class="slick-prev">&nbsp;</span>',
		      nextArrow: '<span class="slick-next">&nbsp;</span>',
		    }
		  },
		]
	  });
	$('.products_images .small_images').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.products_images .main_img',
	    dots: false,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 801,
		    settings: {
		      vertical: false,
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      vertical: true,
		      slidesToShow: 3,
		    }
		  },
		]
	});
	


	// jQuery("#parallax").mousemove(
	// 	function(e){
	// 		var offset = jQuery(this).offset();
	// 		var xPos = e.pageX - offset.left;
	// 		var yPos = e.pageY - offset.top;
	// 		var mouseXPercent = Math.round(xPos / jQuery(this).width() * 100);
	// 		var mouseYPercent = Math.round(yPos / jQuery(this).height() * 100);
	// 		jQuery(this).children('.layer3').each(
	// 			function(){
	// 				var diffX = jQuery('#Parallax').width() - jQuery(this).width();
	// 				var diffY = jQuery('#Parallax').height() - jQuery(this).height();
	// 				var myX = diffX * (mouseXPercent / 500);
	// 				var myY = diffY * (mouseYPercent / 1080);
	// 				var cssObj = {
	// 					'left': myX + 'px',
	// 					'top': myY + 'px'
	// 				}
	// 				jQuery(this).animate({left: myX, top: myY},{duration: 50, queue: false, easing: 'linear'});
	// 			}
	// 		);
	// 	}
	// );

   
});