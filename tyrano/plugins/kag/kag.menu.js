tyrano.plugin.kag.menu = {
    tyrano: null,
    kag: null,
    snap: null,
    init: function() {},
    showMenu: function(call_back) {
        if (this.kag.layer.layer_event.css("display") == "none") return false;
        if (this.kag.stat.is_strong_stop == true) return false;
        var that = this;
        this.kag.stat.is_skip = false;
        var layer_menu = this.kag.layer.getMenuLayer();
        layer_menu.empty();
        this.kag.html("menu", {}, function(html_str) {
            var j_menu = $(html_str);
            layer_menu.append(j_menu);
            layer_menu.find(".menu_skip").click(function() {
                layer_menu.html("");
                layer_menu.hide();
                $(".button_menu").show();
                that.kag.stat.is_skip = true;
                if (that.kag.layer.layer_event.css("display") == "none");
                else that.kag.ftag.nextOrder()
            });
            layer_menu.find(".menu_close").click(function(e) {
                layer_menu.hide();
                $(".button_menu").show()
            });
            layer_menu.find(".menu_window_close").click(function(e) {
                that.kag.layer.hideMessageLayers();
                layer_menu.hide();
                $(".button_menu").show()
            });
            layer_menu.find(".menu_save").click(function(e) {
                that.displaySave()
            });
            layer_menu.find(".menu_load").click(function(e) {
                that.displayLoad()
            });
            layer_menu.find(".menu_back_title").click(function() {
                if (!confirm("\u30bf\u30a4\u30c8\u30eb\u306b\u623b\u308a\u307e\u3059\u3002\u3088\u308d\u3057\u3044\u3067\u3059\u306d\uff1f")) return false;
                location.reload()
            });
            layer_menu.show();
            $(".button_menu").hide()
        })
    },
    displaySave: function() {
        var that = this;
        this.kag.stat.is_skip = false;
        var array_save = that.getSaveData();
        var array = array_save.data;
        var layer_menu = that.kag.layer.getMenuLayer();
        for (var i = 0; i < array.length; i++) array[i].num = i;
        this.kag.html("save", {
                array_save: array
            },
            function(html_str) {
                var j_save = $(html_str);
                j_save.find(".save_display_area").each(function() {
                    $(this).click(function(e) {
                        var num = $(this).attr("data-num");
                        that.snap = null;
                        that.doSave(num);
                        var layer_menu = that.kag.layer.getMenuLayer();
                        layer_menu.hide();
                        layer_menu.empty();
                        $(".button_menu").show()
                    })
                });
                var layer_menu = that.kag.layer.getMenuLayer();
                that.setMenu(j_save)
            })
    },
    doSave: function(num) {
        var array_save = this.getSaveData();
        var data = {};
        var that = this;
        if (this.snap == null) this.snapSave(this.kag.stat.current_message_str,
            function() {
                if (that.snap.stat.is_strong_stop == true) {
                    alert("\u3053\u3053\u3067\u306f\u30bb\u30fc\u30d6\u3067\u304d\u307e\u305b\u3093");
                    return false
                }
                data = that.snap;
                data.save_date = $.getNowDate() + "\u3000" + $.getNowTime();
                array_save.data[num] = data;
                $.setStorage(that.kag.config.projectID + "_tyrano_data", array_save)
            })
    },
    doSetAutoSave: function() {
        var data = this.snap;
        data.save_date = $.getNowDate() + "\u3000" + $.getNowTime();
        $.setStorage(this.kag.config.projectID + "_tyrano_auto_save", data)
    },
    loadAutoSave: function() {
        var data =
            $.getStorage(this.kag.config.projectID + "_tyrano_auto_save");
        if (data) data = eval("(" + data + ")");
        else return false;
        this.loadGameData($.extend(true, {}, data))
    },
    snapSave: function(title, call_back) {
        var that = this;
        var _current_order_index = that.kag.ftag.current_order_index;
        var _stat = $.extend(true, {}, $.cloneObject(that.kag.stat));
        if (this.kag.config.configThumbnail == "false") {
            var img_code = "";
            var data = {};
            data.title = title;
            data.stat = _stat;
            data.current_order_index = _current_order_index - 1;
            data.save_date = $.getNowDate() +
                "\u3000" + $.getNowTime();
            data.img_data = img_code;
            var layer_obj = that.kag.layer.getLayeyHtml();
            data.layer = layer_obj;
            that.snap = $.extend(true, {}, $.cloneObject(data));
            if (call_back) call_back()
        } else html2canvas($("#tyrano_base").get(0), {
            onrendered: function(canvas) {
                var img_code = canvas.toDataURL();
                var data = {};
                data.title = title;
                data.stat = _stat;
                data.current_order_index = _current_order_index - 1;
                data.save_date = $.getNowDate() + "\u3000" + $.getNowTime();
                data.img_data = img_code;
                var layer_obj = that.kag.layer.getLayeyHtml();
                data.layer = layer_obj;
                that.snap = $.extend(true, {}, $.cloneObject(data));
                if (call_back) call_back()
            }
        })
    },
    displayLoad: function() {
        var that = this;
        this.kag.stat.is_skip = false;
        var array_save = that.getSaveData();
        var array = array_save.data;
        var layer_menu = that.kag.layer.getMenuLayer();
        for (var i = 0; i < array.length; i++) array[i].num = i;
        this.kag.html("load", {
            array_save: array
        }, function(html_str) {
            var j_save = $(html_str);
            j_save.find(".save_display_area").each(function() {
                $(this).click(function(e) {
                    var num = $(this).attr("data-num");
                    that.snap = null;
                    that.loadGame(num);
                    var layer_menu = that.kag.layer.getMenuLayer();
                    layer_menu.hide();
                    layer_menu.empty();
                    $(".button_menu").show()
                })
            });
            var layer_menu = that.kag.layer.getMenuLayer();
            that.setMenu(j_save)
        })
    },
    loadGame: function(num) {
        var array_save = this.getSaveData();
        var array = array_save.data;
        this.loadGameData($.extend(true, {}, array[num]))
    },
    loadGameData: function(data) {
        var auto_next = "yes";
        this.kag.layer.setLayerHtml(data.layer);
        this.kag.stat = data.stat;
        this.kag.stat.is_strong_stop = false;
        this.kag.ftag.startTag("stopbgm", {
            stop: "true"
        });
        this.kag.ftag.startTag("stopse", {
            stop: "true"
        });
        if (this.kag.stat.current_bgm != "") {
            var mstorage = this.kag.stat.current_bgm;
            var pm = {
                loop: "true",
                storage: mstorage,
                stop: "true"
            };
            this.kag.ftag.startTag("playbgm", pm)
        }
        this.kag.setCursor(this.kag.stat.current_cursor);
        var insert = {
            name: "call",
            pm: {
                storage: "make.ks"
            },
            val: ""
        };
        this.kag.ftag.nextOrderWithIndex(data.current_order_index, data.stat.current_scenario, true, insert, auto_next)
    },
    setMenu: function(j_obj) {
        var that = this;
        var layer_menu = this.kag.layer.getMenuLayer();
        layer_menu.empty();
        var menu_html = "" + "<div class='menu_item menu_close' style='float:right;'><img src='tyrano/images/kag/menu_button_close.png' /></div>" + "<div style='clear:both'></div>" + "";
        var j_menu = $(menu_html);
        layer_menu.append(j_menu);
        layer_menu.find(".menu_close").click(function(e) {
            layer_menu.hide();
            $(".button_menu").show()
        });
        layer_menu.append(j_obj);
        layer_menu.show()
    },
    hideMenu: function() {},
    getSaveData: function() {
        var tmp_array = $.getStorage(this.kag.config.projectID + "_tyrano_data");
        if (tmp_array) return eval("(" +
            tmp_array + ")");
        else {
            tmp_array = new Array;
            var root = {
                kind: "save"
            };
            for (var i = 0; i < 5; i++) {
                var json = {};
                json.title = "\u307e\u3060\u3001\u4fdd\u5b58\u3055\u308c\u3066\u3044\u308b\u30c7\u30fc\u30bf\u304c\u3042\u308a\u307e\u305b\u3093";
                json.current_order_index = 0;
                json.save_date = "\u3000";
                json.img_data = "";
                json.stat = {};
                tmp_array.push(json)
            }
            root.data = tmp_array;
            return root
        }
    },
    displayLog: function() {
        var that = this;
        this.kag.stat.is_skip = false;
        var j_save = $("<div></div>");
        this.kag.html("backlog", {}, function(html_str) {
            var j_menu =
                $(html_str);
            var layer_menu = that.kag.layer.getMenuLayer();
            layer_menu.empty();
            layer_menu.append(j_menu);
            layer_menu.find(".menu_close").click(function() {
                layer_menu.hide();
                $(".button_menu").show()
            });
            var log_str = "";
            var array_log = that.kag.variable.tf.system.backlog;
            for (var i = 0; i < array_log.length; i++) log_str += array_log[i] + "<br />";
            layer_menu.find(".log_body").html(log_str);
            layer_menu.show();
            layer_menu.find(".log_body").scrollTop(9999999999);
            $(".button_menu").hide()
        })
    },
    test: function() {}
};