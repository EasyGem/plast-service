$(document).ready(function() {

	$('.owl-carousel.slider').owlCarousel({
		loop:true,
		margin: 2,
		items: 1,
		dots: true,
		dotClass: "dot",
		autoplay: true,
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
	
});