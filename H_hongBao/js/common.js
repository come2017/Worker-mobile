$(function(){
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	//100首页
	//首页中间导航宽高一致
	var oW = $('.nav_con ul').children('li').width();
	$('.nav_con ul').children('li').css('height',oW+'px');
	//500消息中心
	$('.m_example').eq(0).css('margin-top','45px');
	
	//492关于我们
	$('.Aboutus li:last-child a').css('border-bottom','none');
	
	//450抢到红包
	$('.q_example:last-child a').css('border-bottom','none');
	
	//450分享详情
	$('.s_example:last-child').css('border-bottom','none');
	
	//450充值记录
	$('.ch_example:last-child').css('border-bottom','none');
	
	//431充值余额
	$('.chyu_example').eq(0).css({'padding-bottom':'15px'});
	$('.chyu_example').eq(1).css({'padding-left':'20px','padding-bottom':'15px','border-right':'none'});
	$('.chyu_example').eq(2).css({'padding-top':'15px','border-bottom':'none'});	
	$('.chyu_example').eq(3).css({'padding-left':'20px','padding-top':'15px','border':'none'});	

	//430账户总额
	$('.z_example:last-child').css({'padding-left':'20px','border-right':'none'});
	
	//红包余额
	$('.hongyu .chyu_example').eq(1).css({'padding-left':'16px','padding-bottom':'15px','border-right':'none'});
	$('.hongyu .chyu_example').eq(3).css({'padding-left':'16px','padding-top':'15px','border':'none'});		
	
	//201红包弹出层
	$('.bg').click(function(){
			$('.bg').css('display','none');
			$('.big-red').css('display','none');
		})
		$('.red-tan').click(function(){
			$('.bg').css('display','block');
			$('.big-red').css('display','block');
	})
	
	//451抢到红包详情页
	$('.ad_qiang li:last-child').css({'border-right':'none','padding-left':'6%'});
	
	//430-2支付
	$('.NZhifu li:last-child').css({'border-bottom':'none'});
	$('.NZhifu li').click(function(){
		$(this).addClass('true').siblings().removeClass('true');
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//493意见反馈textarea
	
	$("#advice").keyup(function(){
		var len = $(this).val().length;
		if(len > 499){
			$(this).val($(this).val().substring(0,500));
		}
		$("#word").text(len);
	});

})