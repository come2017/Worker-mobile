$(function(){
	//第一个	
	$('.star_container1').find('li').mouseenter(function(){	//鼠标悬停状态时
		$(this).addClass('on');			//高亮
		$(this).prevAll().addClass('on');//他前面的兄弟元素高亮
		$(this).nextAll().removeClass('on');//他后面的兄弟元素变灰
	})
	
	$('.star_container1').mouseleave(function(){
		$(this).find('li').removeClass('on');
	})


	$('.star_container1').find('li').click(function(){//鼠标点击时
//		alert(1);
		$(this).addClass('on');//高亮
		$(this).prevAll().addClass('on');//他前面的兄弟元素高亮
		$(this).nextAll().removeClass('on');//他后面的兄弟元素变灰

		var len1=$('.star_container1').find('.on').length;//获取高亮的星星长度
		$('.star_container1').find('.final_score').html(len1+'分');//赋值给结果
		$('.star_container1').find('li').off('mouseenter');//点击后关掉鼠标悬停效果
		$('.star_container1').off('mouseleave');
	})
	
	
	/*--------------注释同上-----------------*/
	//第二个
	$('.star_container2').find('li').mouseenter(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');
	})
	
	$('.star_container2').mouseleave(function(){
		$(this).find('li').removeClass('on');
	})


	$('.star_container2').find('li').click(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');

		var len2=$('.star_container2').find('.on').length;
		$('.star_container2').find('.final_score').html(len2+'分');


		$('.star_container2').find('li').off('mouseenter');
		$('.star_container2').off('mouseleave');
	})


//		//第三个
	$('.star_container3').find('li').mouseenter(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');
	})
	
	$('.star_container3').mouseleave(function(){
		$(this).find('li').removeClass('on');
	})


	$('.star_container3').find('li').click(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');

		var len3=$('.star_container3').find('.on').length;
		$('.star_container3').find('.final_score').html(len3+'分');

		$('.star_container3').find('li').off('mouseenter');
		$('.star_container3').off('mouseleave');
	})

//		//第四个
	$('.star_container4').find('li').mouseenter(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');
	})
	
	$('.star_container4').mouseleave(function(){
		$(this).find('li').removeClass('on');
	})


	$('.star_container4').find('li').click(function(){
		$(this).addClass('on');
		$(this).prevAll().addClass('on');
		$(this).nextAll().removeClass('on');

		var len3=$('.star_container4').find('.on').length;
		$('.star_container4').find('.final_score').html(len3+'分');

		$('.star_container4').find('li').off('mouseenter');
		$('.star_container4').off('mouseleave');
	})


})


