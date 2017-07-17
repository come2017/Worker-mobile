var root = $('#index');
//广告图l轮播
if(document.getElementById('position')){
  var bullets = document.getElementById('position').getElementsByTagName('li');

  window.mySwipe = Swipe(document.getElementById("slider"), {
        auto: 3000,
        continuous: true,
        callback: function(pos) {
          var i = bullets.length;
          while (i--) {
            bullets[i].className = ' ';
          }
          bullets[pos].className = 'on';

        }

    });
}

if($('.swiper-wrapper .swiper-slide').length != 0){
var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        // centeredSlides: true,
        spaceBetween: 0,
        // grabCursor: true
    });
  
var slides = $('.swiper-wrapper .swiper-slide');
 slides.click(function() {
    slides.removeClass("active");
    $(this).addClass("active");
  });

}

//选购水果：
(function(){
  $('.list-right .num').each(function(index,val){
    if(parseFloat($(this).text()) != 0){
      $(this).show();
      $(this).parents('dd').find('.reduction').show();
    }
  });
  if(parseFloat($('.footer-right .fruits-num').text()) == 0){
    $('.footer-right .fruits-num').hide();
  } 
  $('.list-right .add',root).on('click',function(event) {
    var that = $(this),
        parent = that.closest('.list-right'),
        money = parseFloat(parent.find('.fruits-price').text()),
        carmoney = parseFloat($('.car-money').text()),
        carnum = parseFloat($('.fruits-num').text()),
         num = parseFloat($('.num',parent).text());
    /*$.ajax({
      url:"http://baidu.com",
      type:"GET",
      data:{},
      cache:false,
      dataType:"json",
      success:function(data){
        if(data.flag == 1){*/
          $('.footer-right .fruits-num').fadeIn();
          $('.car-money').text((carmoney+money).toFixed(2));
          $('.fruits-num').text(++carnum);
          $('.num',parent).text(++num);
          if(num == 1){
            $('.num',parent).fadeIn();
            $('.reduction',parent).fadeIn();
          }
        /*}else{
          alert(data.msg)
        }
      }
    });*/
  });
  $('.list-right .reduction',root).on('click',function(event) {
    var that = $(this),
        parent = that.closest('.list-right'),
        money = parseFloat(parent.find('.fruits-price').text()),
        carmoney = parseFloat($('.car-money').text()),
        carnum = parseFloat($('.fruits-num').text()),
         num = parseFloat($('.num',parent).text());
        /*$.ajax({
          url:"http://baidu.com",
          type:"GET",
          data:{},
          cache:false,
          dataType:"json",
          success:function(data){
            if(data.flag == 1){*/
              if(parseFloat($('.footer-right .fruits-num').text()) == 1){
                $('.footer-right .fruits-num').fadeOut();
              } 
              if(num == 1){
                $('.num',parent).fadeOut();
                $('.reduction',parent).fadeOut();
              } 
              if(num == 0 ) return ;
              $('.car-money').text((carmoney-money).toFixed(2));
              $('.fruits-num').text(--carnum);
              $('.num',parent).text(--num);
            /*}else{
              alert(data.msg);
            }
          }
        });*/
  });
})()




//导航滑动:
/*if($('.nav').length != 0){
  var nav = $('.nav-box');
  var navul = $('.nav-box ul');
  var navli = navul.find('li');
  var h = 0;
  for (var i = 0; i < navli.length; i++) {
      h += navli.eq(i).width();
  }
  navul.width(h);
  navli.click(function() {
    navli.removeClass("active");
    $(this).addClass("active");
  });

  var self = {
        touch: {}
      };
  var maxleft = navul[0].offsetWidth - parseInt(nav.width(), 10);
  var touchDown = false;
  //导航滚动:
  navul.on("touchstart", function(e) {
      //电脑上触发了两个时间 Touchevent 和Event ,Event没有e.touches
      if (!e.touches) {
          return;
      }
      var touch = e.touches[0];
      self.touch.x1 = touch.clientX;
      touchDown = true;
  }).on("touchmove", function(e) {
      if (!touchDown) {
          return;
      }
      if (!e.touches) {
          return;
      }
      var touch = e.touches[0];
      self.touch.x2 = touch.clientX;
      var left = parseInt(navul.css("left"), 10) + (self.touch.x2 - self.touch.x1) / 14;
      if (left >= 0) {
          return;
      }
      if (left < -maxleft) {
          return;
      }
      navul.css({
          left: left + "px"
      });
  }).on("touchend", function(e) {
      touchDown = false;
  });
}*/




  //滑动加载数据
  var body = document.body,
      historyWrap = $('.fruits-list',root),
      loadStatus = true,
      page = 0;
  function ajaxFun() {
    $.ajax({
      url: '/cdk/recommendhistory/', //加载接口
      type: 'GET',
      data: {
        curPage: page
      },
      cache: false,
      dataType: 'json',
      beforeSend: function () {
        historyWrap.append('<p class="loading"><i class="icon-loading"></i>加载中...</p>');
      },
      success: function (data) {
        $('.loading').length > 0 && $('.loading').remove();
        if (data.flag == 1) {
          if (!data.data.nextFlag) {
            $(body).unbind('touchmove');
            loadStatus = false;
          } else {
            loadStatus = true;
          }
          var html = '';
          for (var i = 0; i < data.data.messageList.length; i++) {
            html += '<div class="clearfix list-box">'+
                      '<div class="list-left">'+
                        '<img src="../images/img2.jpg" />'+
                      '</div>'+
                      '<div class="list-right">'+
                      '  <h2>烟台红富士苹果1<span>500g</span></h2>'+
                        '<dl>'+
                          '<dt><h3>团购价:<span class="fruits-price">20</span></h3><h4>原价:25</h4></dt>'+
                          '<dd>'+
                            '<span class="icon-num reduction"><img src="../images/icons/del.png" /></span>'+
                            '<span class="num">0</span>'+
                            '<span class="icon-num add"><img src="../images/icons/add.png" /></span>'+
                          '</dd>'+
                        '</dl>'+
                      '</div>'+
                    '</div>';
          }
          historyWrap.append(html);
          page++;
        }
      }
    });
  }


  $('.fruits-list').bind('touchmove', function (event) {
    if (body.scrollHeight - document.documentElement.clientHeight - body.scrollTop < 50) {
      $('.loading').length > 0 && $('.loading').remove();
      if (loadStatus) {
        loadStatus = false;
        ajaxFun();
      }
    }
  });

//搜索
if($('.header-search .search-input',root).length > 0){
  $('.header-search .search-input',root).searchInput({
      position: 'top',
      placeholder: '请输入职位名称'
    });
}
