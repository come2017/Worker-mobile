$(function(){
//首页baner轮播
	//ol位置
	var olW = $('.banner_ol').width();
	var olP = -olW/2;
	$('.banner_ol').css('margin-left',olP +'px');
	
	var timer = null;
	var num = 0;
	var fnTimer = function(){
		num++;
		if(num == $('.banner ul li').length){
			num = 0;
		}
		$('.banner ul li:eq('+num+')').fadeIn(2000).siblings().fadeOut(2000);
		$('.banner ol li:eq('+num+')').addClass('current').siblings().removeClass('current');
	};

	$('.banner ul li:first').show();
	
	$('.banner ol li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		var thisIdx = $(this).index();
		$('.banner ul li:eq('+thisIdx+')').fadeOut().stop().fadeIn().siblings().fadeOut();
		num = thisIdx;
	});
	timer = setInterval(fnTimer,3000);
	

	
	$('.banner').mouseover(function(e) {
		clearInterval(timer);
	}).mouseout(function(e) {
		clearInterval(timer);
		timer = setInterval(fnTimer,3000);
	});
	
	//idx_con01
	$(".mr_frbox").slide({
		titCell:"",
		mainCell:".mr_frUl .mr_frUl01",
		autoPage:true,
		effect:"leftLoop",
		autoPlay:true,
		vis:4,
		buttons:true
	});		
	
	
	$('.mr_frUl02 li').hover(function(){
		$(this).stop().animate({'margin-left':'-266px'},200);
	},function(){
		$(this).stop().animate({'margin-left':'0px'},200);
	});	
	
		
})