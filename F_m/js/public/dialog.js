    function dialog(option) {
        this.option = {
            unique: false,
            title:'温馨提示',
            html: "<h4></h4>",
            preventHide: false,
            modal: true,
            modalCallback: function() {},
            css: {},
            modalcss: {
                "z-index": 1e3
            },
            buttons: [ {
                text: "确定",
                callback: function() {}
            } ]
        };
        $.extend(this.option, option, true);
        this.init();
    }
    dialog.prototype.init = function() {
        var self = this;
        this.modal = this.option.modal ? new mask({
            el: $("body"),
            css: self.option.modalcss,
            click: function() {
                self.option.modalCallback.call(self);
            }
        }).show() : $("<div>");
        this.dialog = $('<div class="js_dialog"></div>').css(self.option.css);
        var html = '<section class="popup">' + '<h3>' + this.option.title + '</h3><div class="info">' + this.option.html + '</div>' + '<div class="btn-group"></div>' + "</section>";
        this.dialog.append(html);
        var btnCon = $(".btn-group", this.dialog[0]);
        if (this.option.buttons.length) {
            this.option.buttons.forEach(function(v, i) {
                $('<div class="btn">').html('<span>'+v.text+'</span>').click(function() {
                    v.callback = v.callback || function() {};
                    v.callback.call(self);
                    if (!self.option.preventHide) {
                        self.remove();
                    }
                }).appendTo(btnCon);
            });
        }
        btnCon.addClass("btn" + this.option.buttons.length);
        $(document.body).append(this.dialog);
        self.locate();
    };
    dialog.prototype.preventHide = function() {
        this.option.preventHide = true;
    };
    dialog.prototype.locate = function(top) {
        top = top || $(window).height() / 2 - this.dialog[0].clientHeight / 2 + document.documentElement.scrollTop + "px";
        this.dialog.css({
            top: top
        });
    };
    dialog.prototype.hide = function() {
        this.dialog.hide();
        this.modal.hide();
    };
    dialog.prototype.remove = function() {
        this.hide();
        this.dialog.remove();
        this.modal.remove();
    };
    var alert = function(html, callback) {
        var _callback = callback || function() {};
        return new dialog({
            html: html,
            unique: true,
            buttons: [ {
                text: "确定",
                callback: function() {
                    this.hide();
                    _callback();
                }
            } ]
        });
    };
/*    return {
        dialog: dialog,
        alert: alert
    };*/
