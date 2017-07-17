var root= $('#apply-return');
$('[data-selector="return-submit"]',root).click(function(event) {
  var ways = $('input[name="ways"]').val(),
      returns = $('input[name="return"]').val(),
      mobile = $('input[name="mobile"]').val(),
      message = $('input[name="message"]').val();
  if(ways == undefined){
    $.errorTip('请选择处理方式');
    return false;
  }
  if(returns == undefined){
    $.errorTip('请选择退换原因');
    return false;
  }
  if(!mobile){
    $.errorTip('请输入手机号码');
    return false;
  }
  $.ajax({
    url:"",
    type:"GET",
    data:{
      
    },
    cache:false,
    dataType:"json",
    success:function(data){
      if(data.flag == 1){
        
      }
    }
  });
});