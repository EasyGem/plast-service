$(document).ready(function() {
	$(".news-block .row.news-wrapper .item a.read-more").click(function() {
		$(this).siblings('p.text').show();
		$(this).hide();
	});
});