var root = $('#integral-buy');
 $('.history-back').click(function(event) {
   history.go(-1);
 });


 //立即购买
$('[data-selector="once-buy"]',root).click(function(event) {
  new dialog({
      html: '<p style="text-align:left;">确定以100积分兑换“中国移动话费10元”吗？</p>',
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
            },
            {
              text: '确定',
              callback: function () {
                this.remove();
                //失败回执
                /*new dialog({
                    html: '<p style="text-align:left;">抱歉，您的积分余额不足，兑换失败</p>',
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
                          },
                          {
                            text: '购物获积分',
                            callback: function () {
                              this.remove();
                              
                            }
                          }]
                  });*/
                //成功回执
                new dialog({
                    html: '<p style="text-align:left;">恭喜您兑换成功，请去订单详情页为您的手机充值</p>',
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
                          },
                          {
                            text: '去充值',
                            callback: function () {
                              this.remove();
                              window.location.href="http://baidu.com"
                            }
                          }]
                  });
              }
            }]
    });
});