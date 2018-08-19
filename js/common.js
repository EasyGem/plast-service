$(document).ready(function() {

	$(".hint-trigger").parent().hover(function() {
		$(this).children('.hint').toggle();
	});

	$('.owl-carousel.slider').owlCarousel({
		loop:true,
		margin: 2,
		items: 1,
		dots: true,
		dotClass: "dot",
		URLhashListener:true
	});

	$('.catalogue-carousel').owlCarousel({
		loop: true,
	    margin: 0,
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
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper .submenu."+name).css('display', 'flex');
		
		setTimeout(function () {$(document).click(function(event) {
		    if (($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper .submenu."+name).length) 
		    	|| ($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper li#"+name).length)) return;
			    $(".header .menu-panel .row .logo-and-menu .menu-wrapper .submenu."+name).hide();
			    event.stopPropagation();
			})
		}, 100);
		});
	}

	//activating
	showMenu('company');
	showMenu('catalogue');
	showMenu('partners');

	//show group
	$(".header .menu-panel .row .logo-and-menu .menu-wrapper .submenu ul li:not(.link)").click(function() {
		let index = $(this).index();
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper .submenu .variety .items-wrapper")
			.hide();
		$(this).parent().parent().children('.variety').find('.items-wrapper').eq(index).css('display', 'flex');
	});
	
});