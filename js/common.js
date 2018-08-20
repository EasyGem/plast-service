$(document).ready(function() {

	$(".hint-trigger").parent().hover(function() {
		$(this).children('.hint').toggle();
	});

	if($(document).width() >= 1200)
		$(".sticky").sticky();

	$('.owl-carousel.slider').owlCarousel({
		loop:true,
		margin: 2,
		items: 1,
		dots: true,
		dotClass: "dot",
		autoplay: false,
		autoplayTimeout:7500,
		URLhashListener:true
	});

	$('.catalogue-carousel').owlCarousel({
		loop: true,
	    margin: 1,
	    nav: false,
	    responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1200:{
	            items:3
	        }
	    }
	});

	$(".carousel .nav-prev").click(function() {
		$(".carousel .owl-nav .owl-prev").trigger('click');
	});
	$(".carousel .nav-next").click(function() {
		$(".carousel .owl-nav .owl-next").trigger('click');
	});

	$(".catalogue-news .nav-prev").click(function() {
		$(".catalogue-carousel .owl-nav .owl-prev").trigger('click');
	});
	$(".catalogue-news .nav-next").click(function() {
		$(".catalogue-carousel .owl-nav .owl-next").trigger('click');
	});

	$('.news .row .item p').equalHeights();

	// MENU HINTS

	function showMenu(name) {
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper li#"+name).click(function() {
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			$("#dark").show();
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper").hide();
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu."+name).parent().parent().show();
		let show = function () {$(document).click(function(event) {
		    if (($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu").length) 
		    	|| ($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper li").length)) return;
			    $(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu."+name).parent().parent().hide();
				$("#dark").hide();
				$(".header .menu-panel .row .logo-and-menu .menu-wrapper li").removeClass('active');
			    event.stopPropagation();
			    return;
			})
		}
		show();
		});
	}

	//activating
	showMenu('company');
	showMenu('catalogue');
	showMenu('partners');

	$(".header .black-panel .row .location-info .town").click(function () {
		$(".header .black-panel .row .location-info .town .choice").toggle();
	});
	
});