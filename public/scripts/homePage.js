  $(document).ready(function() {

$('#submit').click(function()
{
    console.log("YUP");
   $.ajax({
        url: '/post-feedback',
        type: 'POST',
        data: {
	'client-first-name': $('input[name=client-first-name]').val(),
	'client-last-name': $('input[name=client-last-name]').val(),
	'client-email': $('input[name=client-email]').val(),
        }
    }

    );

})

})
