$(function(){
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	//返回顶部
	$('.backTop').click(function(e) {
		$('body,html').animate({'scrollTop':'0'},500)
	});
	
	var iH = $(window).height()-180;
	$('#wrapper').css('height',iH+'px');
	$('#wrapper_aa').css('height',iH-39+'px');
	
	var h = $(window).height();
	$('.shu_list').css('height',h);

	//右侧弹出层
	$('.list').click(function(){
		$('.bg').css('display','block');
		$('.shu_list').css('display','block');
	})
	$('.bg').click(function(){
		$('.shu_list').css('display','none');
		$('.bg').css('display','none');
	})
	//城市选择
	$('.address_top').click(function(){
		var oUl = $('.address ul');
		if (oUl.hasClass('dn')) {
			oUl.removeClass('dn');
		} else{
			oUl.addClass('dn');
		}
	})
	
	$('.address li').click(function(){
		var address = $(this).text();
		$('.address_top').text(address);
		$('.address ul').addClass('dn');
	})
})













