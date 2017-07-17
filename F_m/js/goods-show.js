 //返回到上一页面
var root = $('#goods-show');
 $('.history-back').click(function(event) {
   history.go(-1);
 });
 if(document.getElementById('position')){
  var bullets = document.getElementById('position').getElementsByTagName('li');
}
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

//参团：
$('.once-group',root).click(function(event) {
    //仅配送到北京区域的提示
    new dialog({
      html: '<p style="text-align:left;font-size:1.4rem;">目前水果仅支持北京的配送，请确认将订单配送至北京地区。</p>',
      modal: true,
      modalCallback: function () {
        this.remove();
      },
      preventHide: true,
      buttons: [{
              text: '取消',
              callback: function () {
                this.remove();
                
              }
            }, {
              text: '配送到北京',
              callback: function () {
                this.remove();
                
              }
            }]
    });
    
});

//发起团购:
$('.start-buy',root).click(function(event) {
    new dialog({
      html: '<p style="text-align:left;">参团时按售价支付，参团人数越多返现越多，快呼朋唤友参团吧！详见团购细则</p>',
      modal: true,
      modalCallback: function () {
        this.remove();
      },
      preventHide: true,
      buttons: [{
              text: '取消',
              callback: function () {
                this.remove();
                
              }
            }, {
              text: '继续支付',
              callback: function () {
                this.remove();
                
              }
            }]
    });
});