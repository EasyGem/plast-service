$(document).ready(function() {
	$(".products-list .items-wrapper .item-p .counter .part.plus").click(function() {
		let val = parseInt($(this).siblings('.number').val());
		console.log(val);
		(val >= 0) ?
			$(this).siblings('.number').val(val+1) :
			$(this).siblings('.number').val(0)
	});
	$(".products-list .items-wrapper .item-p .counter .part.minus").click(function() {
		let val = parseInt($(this).siblings('.number').val());
		console.log(val);
		(val > 0) ?
			$(this).siblings('.number').val(val-1) :
			$(this).siblings('.number').val(0)
	});
});