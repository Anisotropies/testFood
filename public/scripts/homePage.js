$(document).ready(function() {

	$('#submit').click(function()
	{
	  	$.ajax({
			url: '/post-feedback',
			type: 'POST',
			data: {
			'client-first-name': $('input[name=client-first-name]').val(),
			'client-last-name': $('input[name=client-last-name]').val(),
			'client-email': $('input[name=client-email]').val(),
			}
	 	});  
	});
	$("#submit").hover(function(){
        $(this).css({"background-color": "lightgrey", "cursor": "pointer"});
		}, function(){
		$(this).css("background-color", "grey");
  	  });

})
