window.onload = function(){Oloadjs();}
window.onresize = function(){Oloadjs();}

function Oloadjs(){
	//添加新地址
	$('.add_address input').width($('.add_address').width()-75);
	$('.add_address li:last-child,.chooseAddress li:last-child').css('border-bottom','none');

	//选择地址
	$('.chooseAddress li .sure').width($('.chooseAddress li').width()-50);
	
	//购物车列表
	var carList_con = $('.car_list li').width()-$('.check').width()-$('.car_list img').width() - 34;
	$('.carList_con').width(carList_con);
	
	//我的订单
	var iW01 = $('.O_example li').width()-60-10-80;
	$('.O_exampleC').width(iW01);
	
	//订单详情
	var iW02 = $('.In').width()-60;
	$('.In_R').width(iW02);
	
	//发布评价
	var imgW=$('.valueImg li').width();
	$('.valueImg li').css('height',imgW+'px');
	$('.camera input').css({'width':imgW +'px','height':imgW+'px'});
	
	//配送方式
	$('.tab01 li').click(function(){
//		$('.tab01 li').removeClass('dang');
		var num = $(this).index();
		$(this).addClass('dang').siblings().removeClass('dang');
		$('.change01').addClass('dn');
		$('.change01').eq(num).removeClass('dn').addClass('db');
	})
	$('.change01 li').click(function(){
		$('.change01 li i').removeClass('c_cut');
		$(this).children('i').addClass('c_cut');
	})
	
	//优惠券——线
	$('.Xian i').width(($('.Xian').width()-80)/2);
	
	//优惠券选择
	$('.Quan_R').click(function(){
		$(this).find('.fr').addClass('Quan02');
		$(this).siblings().find('.fr').removeClass('Quan02');
		
	})
	
	//商品详情
	$('.Ccon01 p').width($('.Ccon01').width()-75);
	
	$('.shopF03').width(($('.Ccon01').width()-123)/15*8);
	$('.shopF04').width(($('.Ccon01').width()-123)/15*7);
	
	//首页
	$('.Isearch').width($('header').width()-35-12);
	
	$('.ITit01 i').width(($('.ITit01').width()-95)/2)
	
}
$(function(){
	
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	
//	var myscroll;
//	function loaded(){
//		setTimeout(function(){
//			myscroll = new iScroll('wrapper',{
//				//弹性
//				bounce:true,
//				fixedScrollbar:true,//禁止滚动条超出scroller的可见区域
//				momentum:true//惯性打开
//			});
//		},100);
//	}
//	window.addEventListener("load",loaded,false);
//	//禁止iscroll以外屏幕滑动
//	document.addEventListener('touchmove',function(e){
//		e.preventDefault();
//	},false);
	
	
	
	//返回顶部
	$('.toTop').click(function() {
		$('body,html').animate({'scrollTop':'0'},500)
	});
	
	
	//370意见反馈textarea
	$("#advice").keyup(function(){
		var len = $(this).val().length;
		if(len > 499){
			$(this).val($(this).val().substring(0,500));
		}
		$("#word").text(len);
	});

});