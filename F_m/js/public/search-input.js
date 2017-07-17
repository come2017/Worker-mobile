// 函数节流
  var control = function(fn, delay){
    var timer = null;
    return function(){
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function(){
        fn.apply(context, args);
      }, delay);
    }

  };

  $.fn.searchInput = function(options){

    var defaults = {
      parentId : $('#input-wraper'),
      position : 'static',
      className : $('#input-wraper').attr('class'),
      goButtonCallback : function(input){
        var val = input.val();
        if(val === '') return false;
        location.href = '/so/job/?keyword='+encodeURIComponent(val);
      },
      autoConmplete : null,
      autoConmpleteUrl : null,
      backButtonCallback : function(){
        console.log('quit');
      }
    };

    // 清空表单
    function addClearBtn(){
      var _this = this;
      var $clearDom = $('<i class="text-icon icon-close clear-input-btn"></i>')
              .css('display','none');
      $clearDom.on('tap', function(){
        _this.val('');
        $(this).css('display','none');
      });
      $clearDom.appendTo($('.input-wrap'));
      return $clearDom;
    }

    var opts = $.extend({}, defaults, options);
    return this.each(function(){
      var $this = $('.input-wrap input');
      // 联想结果点击事件
      $('#input-wraper').on('click', 'li', function(){
        var text = $(this).find('span').text();
        $this.val(text);
        $('.autocompletePop').html('').hide();
        // $('.go').trigger('click');
      });

      // 添加清空表单按钮
      var $clearBtn = addClearBtn.call($('.input-wrap input'));

      // 获取焦点处理事件
      $(this).on('click', function(){
        if(opts.position === "top"){
          opts.parentId.removeClass(opts.className).addClass('input-fixed');
        }
        $('.input-wrap input').focus();
        $(window).on('touchmove', function(){
          return false;
        });
        $('body').scrollTop(0);

      });

      // $(this).on('click', function(){
      //  // iphone下首页input会被遮挡，body的scrollTop不为0
      //  // 是否需要在back的时候再重置回原来的scrollTop，如果input focus时srollTop不为0
      //  $('body').scrollTop(0);
      // });

      // 返回函数节流实例
      var input_fn = control(function(ajaxUrl, keyword){
        if($.trim(keyword) === '') return false;
        $.ajax({
          url: ajaxUrl,
          type: 'POST',
          dataType: 'json',
          data: {
            keyword: keyword
          },
          success: function(res){
            var data = res.data;
            var list = '<ul>';
            $.each(data, function(index, value){
              list += '<li><span>'+ value +'</span></li>'
            });
            list += '</ul>';

            var $autocompletePop = $('.autocompletePop');
            if($autocompletePop.length > 0){
              $autocompletePop.html(list).show();
            }else{
              var $autocompletePop = $('<div class="autocompletePop"></div>').append(list);
              opts.parentId.append($autocompletePop);
            }
          }
        });
      }, 300);

      // 输入文字时处理事件
      $('.input-wrap input').on('input', function(){
        var keyword = $(this).val();
        (keyword !== '') && $clearBtn.css('display','block');
        var ajaxUrl = '/company/suggest.json';
        input_fn(ajaxUrl, keyword);
      });

      // 返回按钮处理事件
      $('.back').on('click', function(){
        if(opts.parentId.hasClass('input-fixed')){
          opts.parentId.removeClass('input-fixed').addClass(opts.className);
          $('.autocompletePop').hide().html('');
          $clearBtn.css('display', 'none');
          $(window).off();          
          opts.backButtonCallback.call(opts);
        }else{
          history.back();
        }
      });

      // 搜索按钮处理事件
      $('.go').on('click', function(){
        opts.goButtonCallback.call(opts, $this);
      });
    });

  };

