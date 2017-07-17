window.onload = function(){Oloadjs();}
window.onresize = function(){Oloadjs();}

function Oloadjs(){
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	//康复案例
	$('.KexampleT').width($('.Kexample a').width()-93);
	$('.Kexamplein:last-child a').css('border-bottom','none');
	
	$('.ZexampleT').width($('.Zexample a').width()-113);
	$('.Zexample:last-child a').css('border-bottom','none');
	
	//首页专家团队固定图片宽高
	var poc_Width_sj = $('.idx_TDlist img').width()/85*100+'px';
	$('.idx_TDlist img').height(poc_Width_sj)
	
	//首页康复案例固定图片宽高
	var poc_Width_kf = $('.idxKF_img img').width()/5*4+'px';
	$('.idxKF_img img').height(poc_Width_kf)
	
	//专家团队
	$('.TexampleT').width($('.Texample a').width()-88);
	
	//医院环境
	$('.EnvImg li:nth-child(3n)').css('margin-right','0px');
	$('.EnvImg li').width(($('.EnvImg').width()-10)/3);
	$('.EnvImg li').height(($('.EnvImg').width()-10)/3);
	
	$('.Tu').height($(window).height());
	
	$('.num i:last-child').css('margin-right','0px');
	
	$('.tan').css('display','none');
	$('.EnvImg li').click(function(){
		$('body').css('background-color','#000');
		$('.tan').css('display','block');
		$('.all').css('display','none');
		var oH = $('.tan').height()/2;
		$('.tan').css('margin-top',-oH+'px');
	})
	
	$('.bg,.swiper-slide,.Tu').click(function(){
		$('body').css('background-color','#F5F5F9');
		$('.tan').css('display','none');
		$('.all').css('display','block');
	})
	
}













