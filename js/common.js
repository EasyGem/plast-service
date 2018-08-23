$(document).ready(function() {

	$(".hint-trigger").parent().hover(function() {
		$(this).children('.hint').toggle();
	});

	if($(document).width() >= 1200 || $(document).width() <= 576)
		$(".sticky").sticky();

	// MENU HINTS

	function showMenu(name) {
		$(".header .menu-panel .row .logo-and-menu .menu-wrapper li#"+name).click(function() {
			$(this).parent().children().removeClass('active');
			$(this).addClass('active');
			$(".dark.menu").show();
			$(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper").hide();
			$(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu."+name).parent().parent().show();
			let show = function () {$(document).click(function(event) {
				if (($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu").length) 
					|| ($(event.target).closest(".header .menu-panel .row .logo-and-menu .menu-wrapper li").length)) return;
					$(".header .menu-panel .row .logo-and-menu .menu-wrapper .s-wrapper .submenu."+name).parent().parent().hide();
				$(".dark.menu").hide();
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
	
	//search form

	$('.show-top-search-form').click(function() {
		$('.top-search-form').show();
		$('.dark.search').show();
		$('.dark.search').click(function() {
			$('.top-search-form').hide();
			$('.dark.search').hide();
		});
	});

	$('.deploy-parent').click(function() {
		$(this).children('.deploy-child').toggle();
	});

	$("#show-nav").click(function() {
		$("#slide-menu").css('left', '0px');
		$(document).click(function(event) {
			if (($(event.target).closest("#slide-menu").length) 
				|| ($(event.target).closest("#show-nav").length)) {
		}else{
			$("#slide-menu").css('left', '-300px');
		}
	});
});
});