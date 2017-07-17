var root = $('#wait-send');
 $('.history-back').click(function(event) {
   history.go(-1);
 });
$('[data-selector="income-confirm"]',root) && $('[data-selector="income-confirm"]',root).click(function(event) {
  new dialog({
      html: '<p style="text-align:left;">确认已经收到此订单商品？</p>',
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
                
              }
            }]
    });
});