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
	// $(window).resize(function(){
	//         var width = $(window).width();
	// 	if (width < 1001) {
	// 		//$('.main_menu').css("display", "none");
	// 	}else{
	// 		$('.main_menu').attr('style', '');
	// 		$('.submenu ul').attr('style', '');
	// 	}
	// });
	
	// 
	$('.menu_button').click(function(){
		$(".main_menu").toggleClass("show");
		$(this).toggleClass('active');
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
		responsive: [
			{
				breakpoint: 1251,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 951,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 501,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('#index .tabs_container .production').hasClass('slick-initialized') ) {
		  $('#index .tabs_container .production').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#index .tabs_container .production').hasClass('slick-initialized') ) {
		  $('#index .tabs_container .production').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 500,
					settings: {
					  slidesToShow: 1,
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
				breakpoint: 1101,
				settings: {
				  slidesToShow: 3,
				}
			},
			{
				breakpoint: 701,
				settings: {
				  slidesToShow: 2,
				}
			},
			{
				breakpoint: 451,
				settings: {
				  slidesToShow: 1,
				}
			},
		]
	});

	$('#advantages .advantages').slick({
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
				  adaptiveHeight: true,
				}
			},
		]
	});

	$('#projects .projects').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    dots: false,
	    focusOnSelect: true,
	    arrows: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});

	$('.projects.slider').slick({
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

	$(window).on('load resize', function(){
		if ( window.innerWidth>1300 && $('#index .news_block').hasClass('slick-initialized') ) {
		  $('#index .news_block').slick('unslick');
		} else if ( window.innerWidth<=1300 && !$('#index .news_block').hasClass('slick-initialized') ) {
		  $('#index .news_block').slick({
		    prevArrow: '<span class="slick-prev"></span>',
		    nextArrow: '<span class="slick-next"></span>',
		    slidesToShow: 3,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 1001,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
					  slidesToShow: 1,
					  vertical: false,
					}
				},
			]
		  });
		}
	});

	
	
	$('.certificates').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //fade: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	

	
	$('.galery').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    dots: false,
	    //fade: true,
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

	
	$('.images_slider .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.images_slider .small_images',
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
	$('.images_slider .small_images').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.images_slider .main_img',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    //focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 801,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 601,
		    settings: {
		      //vertical: true,
		      slidesToShow: 3,
		    }
		  },
		]
	});
	

	$('select').select2();

	$( "#slider-range" ).slider({
		range: true,
		min: 2,
		max: 8,
		values: [ 3, 8 ],
		slide: function( event, ui ) {
		  $( "#amount-min" ).val( ui.values[ 0 ] );
		  $( "#amount-max" ).val( ui.values[ 1 ] + "+" );
		}
	});
	$( "#amount-min" ).val( $( "#slider-range" ).slider( "values", 0 ) );

	$( "#amount-max" ).val( $( "#slider-range" ).slider( "values", 1 ) + "+" );

	

});