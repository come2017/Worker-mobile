define("http://core.h5.lietou-static.com/v1/dialogs/minidialog.js", [ "http://core.h5.lietou-static.com/v1/zepto/zepto.js", "http://core.h5.lietou-static.com/v1/dialogs/mask.js" ], function(require, exports) {
    var $ = require("http://core.h5.lietou-static.com/v1/zepto/zepto.js");
    var mask = require("http://core.h5.lietou-static.com/v1/dialogs/mask.js");
    var doc = document;
    function dialog(option) {
        this.option = {
            autoHide: 0,
            html: "",
            tapRemove: true,
            modal: false,
            noTouch: true,
            modalCallback: function() {}
        };
        $.extend(this.option, option, true);
        this.init();
    }
    dialog.prototype.init = function() {
        var self = this;
        this.modal = this.option.modal ? new mask({
            el: $("body"),
            click: function() {
                self.option.modalCallback.call(self);
            },
            noTouch: this.option.noTouch,
            css: {
                "z-index": 1e3
            }
        }).show() : $("<div>");
        this.dialog = $('<div class="js_minidialog"></div>');
        this.dialog.append(this.option.html);
        $(document.body).append(this.dialog);
        if (this.option.autoHide) {
            setTimeout(function() {
                self.remove();
            }, this.option.autoHide);
        }
        this.dialog.css({
            "z-index": 1010,
            top: $(window).height() / 2 - this.dialog[0].clientHeight / 2 + document.body.scrollTop + "px"
        });
        if (this.option.tapRemove) {
            this.handleEvents();
        }
    };
    dialog.prototype.tapEvent = function(e) {
        var self = this;
        return function() {
            self.remove();
        };
    };
    dialog.prototype.handleEvents = function() {
        if (this.option.modal) {
            this.tapEl = this.modal.mask;
        } else {
            this.tapEl = doc;
        }
        this.tapfunc = this.tapEvent();
        $(this.tapEl).on("click", this.tapfunc);
    };
    dialog.prototype.hide = function() {
        this.dialog.hide();
        this.modal.hide();
    };
    dialog.prototype.remove = function() {
        this.hide();
        this.dialog.remove();
        this.modal.remove();
        if (this.option.tapRemove) {
            $(this.tapEl).off("click", this.tapfunc);
        }
    };
    return dialog;
});