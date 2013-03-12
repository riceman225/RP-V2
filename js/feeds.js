$(document).ready(function(){

//Account Group
	$(".account-group").hover(function(){
		$(".username", this).toggleClass("username-hover");
	});




//Show Feed-Actions

	$(".feeds-item").mouseenter(function(){
		$(this).addClass("item-activated");
		$(".feeds-actions",this).css("visibility","visible");
	});


	$(".feeds-item").mouseleave(function(){
		if ($(".feed-replies", this).is(':visible')) {
			$(this).removeClass("item-activated");
		} else {
			$(".feeds-actions", this).css("visibility","hidden");
			$(this).removeClass("item-activated");
		};
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
		$(".item-activated .feed-replies").slideToggle(200);	
	});
	
//点击feed中其他元素不要触发上面这个feed click事件
   $(".feeds-item-header > a, .feed-replies, .feeds-item-content > .feeds-text > #user-id").click(function(e) {
        e.stopPropagation();
   });




// Reply-box Textarea 高度自适应
	$('.mini-reply-box').tah({
		moreSpace:1,   //输入框底部预留的空白, 默认10, 单位像素
		maxHeight:100,  //指定Textarea的最大高度, 默认600, 单位像素
		animateDur:200  //调整高度时的动画过渡时间, 默认200, 单位毫秒
	});
	
// 回复评论
	$('.replies-actions').click(function(){
		var userName = $(this).parents(".replies-item").find(".username").html();
		$(".item-activated textarea").text("@" + userName + " ");
	});
	
});





