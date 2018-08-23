$(document).ready(function() {

	$(".hint-trigger-click").click(function() {
		$(this).parent().children('.hint').show();
		var target = this;
		let hide = function () {$(document).click(function(event) {
				if (($(event.target).closest(target).length) 
					|| $(target).parent().children('.hint').css('display') == 'none') {
				}else{
					$(target).parent().children('.hint').hide();
				}
			})
		}
		hide();
	});

	$("#show-filters").click(function() {
		$('.filters').slideToggle();
	});

});