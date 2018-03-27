  $(document).ready(function() {

$('#submit').click(function()
{
    console.log("YUP");
   $.ajax({
        url: '/post-feedback',
        type: 'POST',
        data: {
	'client-first-name': $('input[name=client-first-name]').val(),

        }
    }

    );

})

})
