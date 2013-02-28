$(document).ready(function(){

//坑爹的图标切换我怎么要用这么蠢的办法。。。。

	$(".feeds-reply-container").mouseenter(function(){
		$(this).addClass("feeds-activating");
		$(".feeds-activating .icon-arrow-left").removeClass("icon-grey");
	});
	
	$(".feeds-reply-container").mouseleave(function(){
		$(".feeds-activating .icon-arrow-left").addClass("icon-grey");
		$(this).removeClass("feeds-activating");
	});
	
	
	
	$(".feeds-share-container").mouseenter(function(){
		$(this).addClass("feeds-activating");
		$(".feeds-activating .icon-share-alt").removeClass("icon-grey");
	});
	
	$(".feeds-share-container").mouseleave(function(){
		$(".feeds-activating .icon-share-alt").addClass("icon-grey");
		$(this).removeClass("feeds-activating");
	});
	
	
	
	$(".feeds-favorite-container").mouseenter(function(){
		$(this).addClass("feeds-activating");
		$(".feeds-activating .icon-star-empty").removeClass("icon-grey");
	});
	
	$(".feeds-favorite-container").mouseleave(function(){
		$(".feeds-activating .icon-star-empty").addClass("icon-grey");
		$(this).removeClass("feeds-activating");
	});
	
//点击收藏	
	$(".feeds-favorite-container").click(function(){
		$(this).addClass("feeds-favorited");
		$(".feeds-favorited i").removeClass("icon-grey icon-star-empty");
		$(".feeds-favorited i").addClass("icon-star");
		$(".feeds-activating .notfavorited").css("display","none");
		$(".feeds-activating .favorited").css("display","inline");
		
	});


});
