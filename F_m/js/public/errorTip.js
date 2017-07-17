  $.errorTip = function (msg, options) {
    if (!msg) {
      return false;
    }
    if ($("#error-wrap").length) {
      $("#error-wrap").remove();
    }
    var localNavHeight = 0,
      styleoptions = {},
      times = 2e3;
    for (var i = 1; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        styleoptions = arguments[i];
        continue;
      }
      if (typeof arguments[i] == "number") {
        times = arguments[i];
        continue;
      }
    }
    var errorWrap = $('<p id="error-wrap" style="position:absolute;top:' + localNavHeight + 'px;left:0;width:96%;padding:9px 2%;-webkit-box-sizing:padding-box;box-sizing:padding-box;line-height:2rem;background:#ed117f;color:#ffffff;font-size:1.6rem;text-align:center;z-index:9;"></p>');
    for (var i in styleoptions) {
      errorWrap.css(i, styleoptions[i]);
    }
    errorWrap.html(msg).appendTo("body");
    $(window).unbind("scroll.errorTip").bind("scroll.errorTip", function () {
      if ($(window).scrollTop() >= localNavHeight) {
        errorWrap.css({
          position: "fixed",
          top: "0"
        });
      } else if (hasNav) {
        errorWrap.css({
          position: "absolute",
          top: "44px"
        });
      } else {
        errorWrap.css({
          position: "fixed",
          top: "0"
        });
      }
    });
    var timerError = setTimeout(function () {
      errorWrap.css({
        top: $(window).scrollTop() < localNavHeight ? localNavHeight : $(window).scrollTop()
      });
      clearTimeout(timerError);
    }, 100);
    var timer = window.setTimeout(function () {
      errorWrap.fadeOut();
      clearTimeout(timer);
    }, times);
  };