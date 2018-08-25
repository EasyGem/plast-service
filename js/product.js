$(document).ready(function() {

	$('.product-carousel').owlCarousel({
		loop: false,
	    margin: 1,
	    nav: false,
	    items: 1,
	    thumbs: true,
	    thumbsPrerendered: true,
	    thumbImage: true,
	});
	
	$('.info-carousel').owlCarousel({
		loop: false,
	    margin: 1,
	    nav: false,
	    items: 1,
	    thumbs: true,
	    URLhashListener:true,
	    mouseDrag: false,
	});

	setTimeout(function() {
		$(".popup.lower-price").css('display', 'flex');
	}, 7500);


	$(".product-carousel-wrapper  .nav-prev").click(function() {
		$(".product-carousel .owl-nav .owl-prev").trigger('click');
	});
	$(".product-carousel-wrapper  .nav-next").click(function() {
		$(".product-carousel .owl-nav .owl-next").trigger('click');
	});
	
	$(".info-carousel-nav li a").click(function() {
		$(this).parent().parent().children().removeClass('active');
		$(this).parent().addClass('active');
	})
});