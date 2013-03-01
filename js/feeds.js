$(document).ready(function(){

//Show Feed-Actions

	$(".feeds-item").mouseenter(function(){
		$(this).addClass("item-activated");
		$(".item-activated .feeds-actions").css("visibility","visible");
	});


	$(".feeds-item").mouseleave(function(){
		$(".item-activated .feeds-actions").css("visibility","hidden");
		$(this).removeClass("item-activated");
	});
	
	



//New Feeds Click
	$(".new-feeds-bar").click(function(){
		$(this).hide();
		$(".new-feeds").show();
	});


//坑爹的图标切换我怎么要用这么蠢的办法。。。。

	$(".feeds-comment-container").mouseenter(function(){
		$(this).addClass("feeds-activating");
		$(".feeds-activating .ui-icon-comment").addClass("ui-icon-comment-hover");
		$(".feeds-activating .ui-icon-comment-hover").removeClass("ui-icon-comment");
	});


	$(".feeds-comment-container").mouseleave(function(){
		$(".feeds-activating .ui-icon-comment-hover").addClass("ui-icon-comment");
		$(".feeds-activating .ui-icon-comment").removeClass("ui-icon-comment-hover");
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
	$(".feeds-favorite-button").click(function(){
		$(".feeds-activating .feeds-favorite-button-done").removeClass("hide");
		$(".feeds-activating .feeds-favorite-button").addClass("hide");
	});



//取消收藏
	$(".feeds-favorite-button-done").click(function(){
		$(".feeds-activating .feeds-favorite-button-done").addClass("hide");
		$(".feeds-activating .feeds-favorite-button").removeClass("hide");
	});


// Seperate Single Feed
// If the first feed is clicked


	$(".feeds-item:first").click(function(){
		$(".item-activated").toggleClass("first-feed-item-click");
	});

	
// If not the first feed is clicked	
	$(".feeds-item").click(function(){
		$(".item-activated").toggleClass("feeds-item-click");
		$(".item-activated").prev(".feeds-item").toggleClass("sep-prev-feed");
		$(".item-activated").next(".feeds-item").toggleClass("sep-next-feed");
	});


});




