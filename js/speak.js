$(document).ready(function(){
	$('#mini-speak-box').focus(function(){
        $(".mini-speak-box").addClass("hide");
        $(".rich-speak-box").removeClass("hide");
        $(this).blur()
        $(".rich-speak-text").focus();
    });


	$('.rich-speak-text').blur(function(){
		if ($('.rich-speak-text').val() === "") {
			$(".mini-speak-box").removeClass("hide");
	        $(".rich-speak-box").addClass("hide");
		}
	});

	var maxLength = 225; // max number of allowed characters
	$('.rich-speak-text').keyup(function() {
		$(this).val($(this).val().substr(0, maxLength));
		$('.speak-word-counter').text(maxLength - $(this).val().length);
	});

});





