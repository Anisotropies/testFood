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
		$("div.demo-container").html( "<p>Thank you for registering!</p>" );
			});
	$("#submit").hover(function(){
        $(this).css({"background-color": "rgb(8,144,179)", "cursor": "pointer"});
		}, function(){
		$(this).css("background-color", "rgb(12, 186, 255)");
  	  });

})
