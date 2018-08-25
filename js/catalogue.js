$(document).ready(function() {

	$(".hint-trigger-click").click(function() {
		$(this).parent().children('.hint').show();
		var ctarget = this;
    var hint = $(this).parent().children('.hint');
		let hide = function () {$(document).click(function(event) {
				if (($(event.target).closest(ctarget).length) 
					|| ($(event.target).closest(hint).length)) {
				}else{
					$(ctarget).parent().children('.hint').hide();
				}
			})
		}
		hide();
	});

	$("#show-filters").click(function() {
		$('.filters').slideToggle();
	});

});