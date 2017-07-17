var root = $('#shopping-car');
//选购水果：
(function(){
  $('.list-right .num').each(function(index,val){
    if(parseFloat($(this).text()) != 0){
      $(this).show();
      $(this).parents('.list-right').find('.reduction').show();
    }
  });
  if(parseFloat($('.footer-right .fruits-num').text()) == 0){
    $('.footer-right .fruits-num').hide();
  } 
  $('.list-right .add',root).on('click',function(event) {
    var that = $(this),
        parent = that.closest('.list-box'),
        data_id = parent.find('.checkboxlist').attr('data-id'),
        money = parseFloat(parent.find('.fruits-price').text()),
        carmoney = parseFloat($('.car-money').text()),
         num = parseFloat($('.num',parent).text());
    /*$.ajax({
      url:"",
      type:"GET",
      data:{data_id:data_id},
      cache:false,
      dataType:"json",
      success:function(data){
        if(data.flag == 1){*/
          $('.car-money').text((carmoney+money).toFixed(2));
          $('.num',parent).text(++num);
          if(num == 1){
            $('.num',parent).fadeIn();
            $('.reduction',parent).fadeIn();
          }
        /*}else{
          alert(data.msg);
        }
      }
    });*/
  });
  $('.list-right .reduction',root).on('click',function(event) {
    var that = $(this),
        parent = that.closest('.list-box'),
        data_id = parent.find('.checkboxlist').attr('data-id'),
        money = parseFloat(parent.find('.fruits-price').text()),
        carmoney = parseFloat($('.car-money').text()),
         num = parseFloat($('.num',parent).text());
    /*$.ajax({
      url:"",
      type:"GET",
      data:{data_id : data_id},
      cache:false,
      dataType:"json",
      success:function(data){
        if(data.flag == 1){*/
          if(num == 1){
            $('.num',parent).fadeOut();
            $('.reduction',parent).fadeOut();
          } 
          if(num == 0 ) return ;
          $('.car-money').text((carmoney-money).toFixed(2));
          $('.num',parent).text(--num);
        /*}else{
          alert(data.msg)
        }
      }
    });*/

  });
})()

//购物车选中：
 /*$('.allcheckbox').click(function(){
  var _this=this;
  $('.checkboxlist').each(function(){
   this.checked=_this.checked;
  })
 })*/

 $('.checkboxlist').click(function(event) {
  $('.footer-left .select-all-num').text($('.checkboxlist:checked').length)
  if($('.checkboxlist:checked').length > 0){
      $('.footer-right').removeClass('gray').attr('data-selector','balancing');
      $('.allcheckbox').attr({
        checked: this.checked
      });
  }else{
    $('.allcheckbox').removeAttr('checked');
    $('.footer-right').addClass('gray').removeAttr('data-selector');
  }
 });

 //返回到上一页面
 $('.history-back').click(function(event) {
   history.go(-1);
 });

 //结算：
 $('[data-selector="balancing"]').click(function(e) {
  var data = $(".fruits-list .checkboxlist:checked").map(function(){
          return $(this).attr('data-id');
      }).get();

  $.ajax({
    url:"",
    type:"GET",
    data:{'data':data},
    cache:false,
    dataType:"json",
    success:function(data){
      if(data.flag == 1){
        window.location.href=""
      }
    }
  });
 });

