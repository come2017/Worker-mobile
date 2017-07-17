var root = $('#order-wait-send');
 $('.history-back').click(function(event) {
   history.go(-1);
 });
 $('nav li',root).click(function(event) {
  $(this).addClass('active').siblings().removeClass('active');
 });