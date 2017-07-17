window.onload = function(){Oloadjs();}
window.onresize = function(){Oloadjs();}

function Oloadjs(){
	var touchY = 0;
	$(document).on('touchstart',function(){touchY = event.touches['0'].clientY;});
	$(document).on('touchmove',function(){if($(document).scrollTop()==0 && event.touches['0'].clientY - touchY > 0)event.preventDefault();});
	
	//康复案例
	$('.AnexampleT').width($('.Anexample a').width()-115);
	
	//有问必答
	$('.Bi_example li:last-child a').css('border-bottom','none');
	
	//我要提问
	$('.sex li').click(function(){
		$(this).addClass('Sexcur').siblings().removeClass('Sexcur');
	})
	
	//医院环境
	$('.Enexample li:even').css('float','left');
	$('.Enexample li:odd').css('float','right');
	
	$('.Enexample li .EnImg').height($('.Enexample li').width()/320*179);
	
	//医院科室
	$('.Kexample li a').width(($('.Kexample li').width()-10)/4);
	$('.Kexample li a:nth-child(4n+1)').css('margin-right','0px');
	
	//专家详情页
	$('.ZJR').width($('.ZJS').width()-73-25);
	$('.ZJR a:last-child').css('margin-right','0px');
	$('.ZJintro span').width($('.ZJintro li').width()-90);
	
	//专家团队
	$('.ZjexampleR').width($('.Zjexample li').width()-82-24);
	
	$('.IAnexampleT').width($('.IAnexample a').width()-100);
	$('.IAnexample:last-child a').css('border-bottom','none');	

	//医院环境图片浏览
	
	$('.tanbg').css('display','none');
	$('.Enexample li').click(function(){
		$('.tk_listIn').css('display','block');
		$('.tanbg').css('display','block');
	})
	
	var OH = $(window).height();
	var Hmr = OH*0.8;
	var IHB = $('.tk_listIn .Tubigbox').height();
	var IHS = $('.tk_listIn .Tusmallbox').height();
	var JL = OH-Hmr-IHB-IHS;
	$('.tk_listIn .Tusmallbox').css('bottom',-JL+'px');

	$('.tanbg').height($(window).height());
	
	$('.Tubigbox').click(function(){
		$('.tk_listIn').css('display','none');
		$('.tanbg').css('display','none');
	})
	
	
	$('.shu_list ul').height($(window).height());
	//右侧弹出层
	$('.list').click(function(){
		$('.bg').css('display','block');
		$('.shu_list').css('display','block');
	})
	$('.bg,.Sclose').click(function(){
		$('.shu_list').css('display','none');
		$('.bg').css('display','none');
	})


}













