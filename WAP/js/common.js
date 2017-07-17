$(function(){
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	//首页中间导航宽高一致
	var oW = $('.nav_con ul').children('li').width();
	$('.nav_con ul').children('li').css('height',oW+'px');
	
	//产品展示、经典案例排列
	$('.w_product ul li:odd').css({'float':'right'});
	$('.w_product ul li:even').css({'float':'left'});
	
	//产片展示、经典案例图片3/2
	var oWLI = $('.w_product li dt').width()/3*2;
	$('.w_product li dt').css('height',oWLI+'px');
	
	//产品列表每行右边距设置
	$('.product_list li:nth-child(3n)').css('margin-right','0px');
	
	//产品列表图片高度设置
	var oli = $('.product_list li').width();
	$('.product_list li').height(oli+'px');
	
	//设计部判断
	var oImg02 = $('.design_s03').width()/3*2;
	$('.design_s03').css('height',oImg02+'px');
	$('.design_s01').css({'width':oImg02+'px','height':oImg02+'px'});
	
	var oWind = $(window).width()-$(window).width()/100*14;
	var oW_01 = $('.design_s01').width();
	var oW_02 = $('.design_s03').width();
	var oW_03 =oWind - oW_01 - oW_02;
	$('.design_s02').css({'height':oImg02+'px','width':oW_03+'px'});
	
	
	//返回顶部
	$('.toTop').click(function(){
		$('html,body').animate({},500);
	});
	
	//右侧弹出层
	$('.list').click(function(){
		$('.bg').css('display','block');
		$('.shu_list').css('display','block');
	})
	$('.bg').click(function(){
		$('.shu_list').css('display','none');
		$('.bg').css('display','none');
		$('.rongyu').css('display','none');
	})
	
	//荣誉弹出层
	$('.close').click(function(){
		$('.bg').css('display','none');
		$('.rongyu').css('display','none');
	})
	
	
	$('.rongyu_example li').click(function(){
		$('.bg').css('display','block');
		$('.rongyu').css('display','block');
	})
	
	//图片滑动
	var myScroll = new IScroll('#wrapper', {
		scrollbars: false,
		mouseWheel: true,
		scrollX:true,
		interactiveScrollbars: true,
		shrinkScrollbars: 'clip',
		fadeScrollbars: true,
		preventDefault: false
	});
		
	$('#wrapper').on('touchmove', function (e) {
		e.preventDefault();
	});
	
	//图片滑动带数字改变
	(function(d, $){
		var scrollPicView = d.getElementById("scroll_pic_view"),
		scrollPicViewDiv = d.getElementById("scroll_pic_view_div"),
		lis = scrollPicViewDiv.querySelectorAll("li"),
		w = scrollPicView.offsetWidth,
		len = lis.length;
		$("b").text(len);
		for(var i=0; i<len; i++){
			lis[i].style.width = w+"px";
			if(i == len-1){
				scrollPicViewDiv.style.width = w * len + "px";
			}
		}

		var scroll_pic_view = new iScroll('scroll_pic_view', { 
			snap: true,
			momentum: true,
			hScrollbar: false,
			useTransition: true,
			onScrollEnd: function() {
				$("#scroll_pic_nav li").removeClass("on").eq(this.currPageX).addClass("on");
				var dangqian=this.currPageX+1;
				$("span").text(dangqian);
			}
		});
		
	})(document, $);
})