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


});