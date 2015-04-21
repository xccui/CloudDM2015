$(document).ready(function() {
	var current = $('a.item').eq(0);
	current.addClass('selected');
	$('a.item').on('click', function(event) {
		
		if($(this) == current){
			return ;
		}else{
			current.removeClass('selected');
			$(this).addClass('selected');
			current = $(this);
		}
	});
});