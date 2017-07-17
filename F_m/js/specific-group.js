var root = $('#specific-group');
$('[ data-selector="invite-friends"]',root).click(function(event) {
  new dialog({
      html: '<p style="text-align:left;">点击右上角<br/>分享给朋友一起团购吧！</p>',
      modal: true,
      modalCallback: function () {
        this.remove();
      },
      preventHide: true,
      buttons: [{
              text: '我知道了',
              callback: function () {
                this.remove();
                
              }
            }]
    });
});

//开团提示：
$('[data-selector="send-goods"]',root).click(function(event) {
  new dialog({
      html: '<p style="text-align:left;">您的参团人数未满，现在发货可以获得返现5元，且好友无法再加入。是否确认开团发货？</p>',
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
              text: '确认',
              callback: function () {
                this.remove();
                
              }
            }]
    });
});