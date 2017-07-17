var root = $('#order-confirm');
 $('.history-back').click(function(event) {
   history.go(-1);
 });
 
//微信支付前确认
$('[data-selector="wechat-pay"]',root).click(function(event) {
  /*new dialog({
      html: '<p style="text-align:left;">目前水果仅支持北京的配送，请确认将订单配送至北京地区。</p>',
      modal: true,
      modalCallback: function () {
        this.remove();
      },
      preventHide: true,
      buttons: [{
              text: '确定',
              callback: function () {
                this.remove();
                
              }
            }]
    });*/
  var address = $('div[data-address]').attr('data-address');
  if(address == 'false'){
    $.errorTip('请输入收货地址');
    return false;
  }
  /*$.ajax({
    url:"",
    type:"GET",
    data:{},
    cache:false,
    dataType:"json",
    success:function(data){
      if(data.flag == 1){
        
      }
    }
  });*/

});

