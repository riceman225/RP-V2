$(document).ready(function(){


//Account Group
	$(".account-group").hover(function(){
		$(".username", this).toggleClass("username-hover");
	});



//Show Feed-Actions
	$(".feeds-actions").hide();

	$(".feeds-item").hover(function(){
		$(this).toggleClass("item-activated");
		if($(this).hasClass("open-reply-box")){
			return;
		}
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

	$(".feeds-item").click(function(){
		$(this).toggleClass("open-reply-box"); //帮助判断Show Feed Actions是否要进行toggle
	// If the first feed is clicked
    	index = $(this).index();
		if (index === 0) {
			$(this).toggleClass("first-feed-item-click");
		}
	// If not the first feed
		$(this).toggleClass("feeds-item-click");
		$(this).prev(".feeds-item").toggleClass("sep-prev-feed");
		$(this).next(".feeds-item").toggleClass("sep-next-feed");
		
	// Toggle feed-replies and expanded content	
	//	$(".feed-replies, .expanded-content",this).slideToggle(200);
		$(".feed-replies",this).slideToggle(200);
	});


	
//点击feed中其他元素不要触发上面这个feed click事件
   $(".feeds-item-header > a, .feed-replies, .feeds-item-content > .feeds-text > #user-id").click(function(e) {
        e.stopPropagation();
   });


//feeds-comment-button Click事件

	$(".feeds-comment-container").click(function(event){
		event.stopImmediatePropagation();
		$currentItem = $(this).parents(".feeds-item");
		$currentItem.toggleClass("open-reply-box"); //帮助判断Show Feed Actions是否要进行toggle
		// If the first feed is clicked
	    	index = $currentItem.index();
			if (index === 0) {
				$currentItem.toggleClass("first-feed-item-click");
			}
		// If not the first feed
			$currentItem.toggleClass("feeds-item-click");
			$currentItem.prev(".feeds-item").toggleClass("sep-prev-feed");
			$currentItem.next(".feeds-item").toggleClass("sep-next-feed");
			
		// Toggle feed-replies and expanded content	
		//	$(".feed-replies, .expanded-content",$currentItem).slideToggle(200);
			$(".feed-replies",$currentItem).slideToggle(200);
			
		// Reply box get focus
			var userName = $currentItem.find(".feeds-item-header .username").text();
			var $replyBox = $currentItem.find("textarea");
			$replyBox.focus().val("@" + userName + " ");
	});



//feeds-share-button Click事件
	$(".feeds-share-button").click(function(event){
		event.stopImmediatePropagation();
		var $ShareModalTitle = $(".item-activated .feeds-item-header .username").text();
		var $OriginalHeader = $(".item-activated .feeds-item-header").html();
		var $OriginalContent = $(".item-activated .feeds-item-content").html();
		
		$("#ShareModal .original-feed-header").html($OriginalHeader);
		$("#ShareModal .original-feed-content").html($OriginalContent);
		$("#ShareModal").modal();
	});


// 回复评论
	$('.replies-actions').click(function(){
		var userName = $(this).parents(".replies-item").find(".username").text();
		var $replyBox = $(this).parents(".feed-replies").find("textarea");
		$replyBox.focus().val("@" + userName + " ");
	});


// 图片放大缩小
	$('.feeds-image').mouseover(function() {
		$(this).css("cursor","pointer");
	});
	
	$(".feeds-image").click(function(event){
		event.stopImmediatePropagation();
		$(this).toggleClass("zoom-image");
	});
	
});





