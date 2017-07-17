var root = $('#safe-test');
var currentTime = 60;
function setTime(val) {
  if (currentTime == 0) {
    val.removeClass("gray");
    val.val("再次获取验证码");
    currentTime = 60;
    return;
  } else {
    val.addClass("gray");
    val.val("" + currentTime + "秒");
    currentTime--;
  }
  auto = setTimeout(function () {
    setTime(val);
  }, 1e3);
}
$('[data-selector="getcandelCode"]',root).click(function(event) {
  var that = $(this);
  if(that.hasClass('gray')) return;
  setTime(that);
  $.ajax({
    url: '',
    type: "POST",
    dataType: "json",
    cache: false,
    success: function (data) {
      if (data.flag == 1) {
        $.errorTip(data.data.msg);
      }else{
        $.errorTip(data.msg);
      }
    }
  });
});

$('[data-selector="safe-next"]',root).click(function(event) {
  var code = $('input[name="cancelcode"]').val();
  if(!code){
    $.errorTip('验证码不能为空');
    return false;
  }
});

//重新绑定的号码
$('[data-selector="getmodifyCode"]',root).click(function(event) {
  var that = $(this),
      mobile = $('input[name="mobile"]').val(),
      phone = /^1\d{10}$/;
  if(!mobile){
    $.errorTip('请输入手机号码');
    return false;
  }
  if(!phone.test(mobile)){
    $.errorTip('手机号格式不正确');
    return false;
  }
  if(that.hasClass('gray')) return;
  setTime(that);
  $.ajax({
    url: '',
    type: "POST",
    dataType: "json",
    cache: false,
    data: {
      mobile: mobile
    },
    success: function (data) {
      if (data.flag == 1) {
        $.errorTip(data.data.msg);
      }else{
        $.errorTip(data.msg);
      }
    }
  });
});

$('[data-selector="submit"]',root).click(function(event) {
  var code = $('input[name="modifycode"]').val(),
      mobile = $('input[name="mobile"]').val();
  if(!code){
    $.errorTip('验证码不能为空');
    return false;
  }
  $.ajax({
    url: '',
    type: "POST",
    dataType: "json",
    cache: false,
    data: {
      mobile: mobile,
      code : code
    },
    success: function (data) {
      if (data.flag == 1) {
        $.errorTip(data.data.msg);
      }else{
        $.errorTip(data.msg);
      }
    }
  });
});