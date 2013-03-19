$(document).ready(function(){

//Speak-Box一个纯粹为了炫的效果。。。

	$('#mini-speak-box').focus(function(){
        $(".mini-speak-box").addClass("hide");
        $(".rich-speak-box").removeClass("hide");
        $(this).blur();
        $(".rich-speak-text").focus();
    });


	$(document).click(function(e){
	    if($(e.target).is('.rich-speak-box, .rich-speak-box *') || $('.rich-speak-text').val() !== "")return;
		$(".mini-speak-box").removeClass("hide");
	    $(".rich-speak-box").addClass("hide");
	});



//左边 我说 的wordcount
	var maxLength = 225; // max number of allowed characters
	$('.rich-speak-text').keyup(function() {
		$(this).val($(this).val().substr(0, maxLength));
		$('.speak-word-counter').text(maxLength - $(this).val().length);
	});
	
//replybox的wordcount
	$('.mini-reply-box').keyup(function() {
		$(this).val($(this).val().substr(0, maxLength));
		$('.reply-word-counter').text(maxLength - $(this).val().length);
	});




});





