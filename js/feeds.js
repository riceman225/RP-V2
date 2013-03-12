$(document).ready(function(){

//Account Group
	$(".account-group").hover(function(){
		$(".username", this).toggleClass("username-hover");
	});



//Show Feed-Actions
	$(".feeds-actions").hide();
	$(".feeds-item").hover(function(){
		$(this).toggleClass("item-activated");
		$(".feeds-actions",this).toggle();
	});
	
	

//New Feeds Click
	$(".new-feeds-bar").click(function(){
		$(this).hide();
		$(".new-feeds").show();
	});


//坑爹的Feeds-Action图标切换
	$(".feeds-comment-container").hover(function(){
		$("i",this).toggleClass("ui-icon-comment-hover");
	});

	$(".feeds-share-container").hover(function(){
		$("i",this).toggleClass("icon-grey");
	});

	$(".feeds-favorite-button").hover(function(){
		if ($(this).hasClass("hide")){
			return;
		} else {
			$("i",this).toggleClass("icon-grey");
		};
	});


//点击收藏
	$(".feeds-favorite-button").click(function(event){
		event.stopImmediatePropagation();
		$(".item-activated .feeds-favorite-button").addClass("hide");
		$(".item-activated .feeds-favorite-button-done").removeClass("hide");
	});

//取消收藏
	$(".feeds-favorite-button-done").click(function(event){
		event.stopImmediatePropagation();
		$(".item-activated .feeds-favorite-button-done").addClass("hide");
		$(".item-activated .feeds-favorite-button").removeClass("hide");
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


//Share-Feed-Button Click事件
	$(".feeds-share-button").click(function(event){
		event.stopImmediatePropagation();
		var $ShareModalTitle = $(".item-activated .feeds-item-header .username").text();
		var $OriginalHeader = $(".item-activated .feeds-item-header").html();
		var $OriginalContent = $(".item-activated .feeds-item-content").html();
		
		$("#ShareModal .original-feed-header").html($OriginalHeader);
		$("#ShareModal .original-feed-content").html($OriginalContent);
		$("#ShareModal").modal();
	});


// Reply-box Textarea 高度自适应
	$('.mini-reply-box').tah({
		moreSpace:1,   //输入框底部预留的空白, 默认10, 单位像素
		maxHeight:200,  //指定Textarea的最大高度, 默认600, 单位像素
		animateDur:200  //调整高度时的动画过渡时间, 默认200, 单位毫秒
	});
	
	
// 回复评论
	$('.replies-actions').click(function(){
		var userName = $(this).parents(".replies-item").find(".username").text();
		$(".item-activated textarea").text("@" + userName + " ");
	});
	
});





