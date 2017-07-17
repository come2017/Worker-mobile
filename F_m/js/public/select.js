
    var $body = $(document.body);
    function select(option) {
        this.op = {
            area: document,
            el: null
        };
        if (option) {
            $.extend(this.op, option);
        }
        this.init();
    }
    select.prototype = {
        init: function() {
            if (!this.op.el) {
                return;
            }
            var self = this;
            var selects = this.getSelets();
            self.packItem(this.op.el);
            this.mask = new mask({
                click: function() {
                    self.hide();
                    this.hide();
                },
                css: {
                    zIndex: 1e3
                },
                el: $(document.body)
            }).show();
            this.locate();
            this.closeDialog();
        },
        packItem: function(v) {
            var self = this;
            var el = this.packCon(v);
            var options = $("option", v);
            var html = "";
            options.forEach(function(v, i) {
                html += self.packp(v);
            });
            el.inner.html(html);
            el.input.insertBefore(v);
            $body.append(el.con);
            $(v).remove();
            this.addEvents();
            this.addSelfDefine();
        },
        getSelets: function() {
            return $("select", this.op.area);
        },
        packCon: function(select) {
            var $select = $(select);
            var con = $('<div class="js_util_select js_city_menu " />');
            var inner = $('<div class="js_util_select_inner">');
            var close = $('<em></em>');
            var titletext= $('<span>'+resulttxt+'</span>');
            inner.css({
                position: "absolute",
                width: "80%",
                background: "#f7f7f7",
                left:"50%",
                marginLeft:"-40%",
                borderRadius:"5px",
                zIndex: 1001,
                maxHeight: '320px',
                'overflow-y': 'scroll'
            });
            close.css({
                position:'absolute',
                width:'28px',
                height:'28px',
                display:'inline-block',
                'background':'url(../images/icons/close-dialog.png)',
                zIndex: 1002,
                right:'7%'
            })
            titletext.css({
                position:'absolute',
                display:'inline-block',
                left:'50%',
                fontSize:'1.5rem',
                lineHeight:'20px',
                zIndex: 1002
            })
            con.append(close);
            con.append(inner);
            con.append(titletext);
            var input = this.getSeletData($select);
            this.con = con;
            this.close = close;
            this.inner = inner;
            this.titletext = titletext;
            this.input = input;
            return {
                con: con,
                close:close,
                inner: inner,
                titletext:titletext,
                input: input
            };
        },
        packp: function(option) {
            option = $(option);
            if (!option.html().trim().length) {
                return "";
            }
            var strs;
            if(option.html().indexOf('|') > 0){
                strs = option.html().split("|");
                return "<p val='" + option.attr("value") + "'>" + strs[0] + "<span>" + strs[1] + "</span></p>";
            }else{
                strs = option.html();
                return "<p val='" + option.attr("value") + "'>" + strs + "</p>";
            }
            
        },
        getSeletData: function($select) {
            var input = $('<input type="hidden" lock="false">');
            input.attr("id", $select.attr("id"));
            input.attr("name", $select.attr("name"));
            input.val($select.val());
            return input;
        },
        addEvents: function() {
            var self = this;
            this.con.delegate("p", "click", function(e) {
                var val = $(this).attr("val");
                var txt = $(this).html();
                self.fireEvent("select", {
                    data: {
                        val: val,
                        txt: txt
                    }
                });
                
                if(txt.indexOf('span') > 0){
                    var discouttxt = parseFloat(txt.split('.')[0].replace(/[^0-9]/ig,"")),
                        carmoneytxt = parseFloat($('.order-pay .each-right').attr('data-allmoney'));
                        
                    /*$.ajax({
                  url:"",
                  type:"GET",
                  data:{},
                  cache:false,
                  dataType:"json",
                  success:function(data){
                    if(data.flag == 1){*/
                      $('.order-pay .each-right em').text((carmoneytxt-discouttxt).toFixed(2));
                    /*}
                  }
                });*/
                }
                
            });
            
        },
        addSelfDefine: function() {
            var self = this;
            this.addEvent("select", function(e, data) {
                self.input.val(data.data.val);
                self.hide();
            });
        },
        addEvent: function(name, func) {
            this.con.on(name, func);
        },
        fireEvent: function(name, data) {
            this.con.trigger(name, data);
        },
        locate: function() {
            var top = $(window).height() / 2 - this.inner[0].clientHeight / 2 + document.body.scrollTop;
            var closetop = $(window).height() / 2 - this.inner[0].clientHeight / 2 + document.body.scrollTop-this.close[0].clientHeight/2;
            var titletop = $(window).height() / 2 - this.inner[0].clientHeight / 2 + document.body.scrollTop+9;
            var titleleft = this.titletext.width();
            if (top < 0) top = 0;
            this.inner.css({
                top: top + "px"
            });
            this.close.css({
                top: closetop + "px"
            });
            this.titletext.css({
                top: titletop + "px",
                marginLeft : -titleleft/2+"px"
            });
        },
        hide: function() {
            this.con.css({
                display: "none"
            });
            this.mask.hide();
        },
        show: function() {
            this.mask.show();
            this.con.css({
                display: "block"
            });
        },
        goTop: function() {
            var goTopTimer;
            if (!document.body.scrollTop) return;
            goTopTimer = setInterval(function() {
                if (document.body.scrollTop > 0) {
                    document.body.scrollTop = document.body.scrollTop - 150;
                } else {
                    if (goTopTimer) {
                        clearInterval(goTopTimer);
                        goTopTimer = null;
                    }
                }
            }, 50);
        },
        closeDialog: function(){
            var that = this;
            this.close.click(function(event) {
               that.hide();
            });
        }
    };
    $("select").hide();
    var newselects = {};
    $(".item").click(function() {
        var that = this;
        var $this = $(".link", that);
        if (!$this.length) {
            return;
        }
        var $select = $this.parent().find("select");
        if (!$select.length && !$this.attr("inited")) {
            return;
        }
        if(that.getAttribute('data-title')){
            resulttxt = that.getAttribute('data-title');
        }else{
            resulttxt = ''
        }
        if (!$this.attr("inited")) {
            $this.attr("inited", "1");
            var timeid = new Date().getTime();
            $this.attr("timeid", timeid);
            newselects[timeid] = new select({
                el: $select
            });
            if($(that).next().hasClass('select-result')){
                var res = $(".select-result");
            }else{
                var res = $(".select-result",that);
            }
            
            newselects[timeid].addEvent("select", function(e, data) {
                res.html(data.data.txt);
            });
        } else {
            timeid = $this.attr("timeid");
            newselects[timeid].show();
        }
    });

    

