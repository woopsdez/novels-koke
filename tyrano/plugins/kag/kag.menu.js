tyrano.plugin.kag.menu = {
    tyrano: null,
    kag: null,
    snap: null,
    init: function() {},
    showMenu: function(call_back) {
        var that = this;
        this.kag.stat.is_skip = false;
        var layer_menu = this.kag.layer.getMenuLayer();
        layer_menu.html("");
        var menu_html = "" + '<div class="display_menu" style="z-index: 10000; width:100%; height:100%; position: absolute; display:block;" align="center">' + '    <div class="menu_item menu_close" style="float:right;width:64px;"><img src="tyrano/images/kag/menu_button_close.png" /></div>' + '    <div style="clear:both"></div>' +
            '    <div class="menu_item menu_save"><img src="tyrano/images/kag/menu_button_save.gif" /></div>' + '    <div class="menu_item menu_load"><img src="tyrano/images/kag/menu_button_load.gif" /></div>' + '    <div class="menu_item menu_window_close"><img src="tyrano/images/kag/menu_message_close.gif" /></div>' + '    <div class="menu_item menu_skip"><img src="tyrano/images/kag/menu_button_skip.gif" /></div>' + '    <div class="menu_item menu_back_title"><img src="tyrano/images/kag/menu_button_title.gif" /></div>' +
            "</div>";
        var j_menu_img = $("<img src='tyrano/images/kag/menu_bg.jpg' style=left:0px;top:0px;position:absolute;z-index:100' />");
        j_menu_img.css("width", this.kag.config.scWidth);
        j_menu_img.css("height", this.kag.config.scHeight);
        layer_menu.append(j_menu_img);
        var j_menu = $(menu_html);
        layer_menu.append(j_menu);
        layer_menu.find(".menu_skip").click(function() {
            layer_menu.html("");
            layer_menu.hide();
            $(".button_menu").show();
            that.kag.stat.is_skip = true;
            that.kag.ftag.nextOrder()
        });
        layer_menu.find(".menu_close").click(function() {
            layer_menu.hide();
            $(".button_menu").show()
        });
        layer_menu.find(".menu_window_close").click(function() {
            that.kag.layer.hideMessageLayers();
            layer_menu.hide();
            $(".button_menu").show()
        });
        layer_menu.find(".menu_save").click(function() {
            that.displaySave()
        });
        layer_menu.find(".menu_load").click(function() {
            that.displayLoad()
        });
        layer_menu.find(".menu_back_title").click(function() {
            location.reload()
        });
        layer_menu.show();
        $(".button_menu").hide()
    },
    displaySave: function() {
        var that = this;
        this.kag.stat.is_skip = false;
        var array_save = that.getSaveData();
        var array = array_save.data;
        var j_save = $("<div></div>");
        for (var i = 0; i < array.length; i++)(function() {
            var _data = array[i];
            var _i = i;
            var html = "<div class='save_display_area' style=''><span class='save_menu_date_font' style=''>\u3010" + (i + 1) + "\u3011" + _data.save_date + "</span><br/><span class='save_menu_text_font' style=''>" + _data.title + "</span></div>";
            var save = $(html);
            j_save.append(save);
            save.css("cursor", "pointer");
            save.click(function() {
                that.snap = null;
                that.doSave(_i);
                var layer_menu = that.kag.layer.getMenuLayer();
                layer_menu.hide();
                $(".button_menu").show()
            })
        })();
        var j_menu_save_img = $("<img src='tyrano/images/kag/menu_save_bg.jpg' style='z-index:-1;left:0px;top:0px;position:absolute;' />");
        j_menu_save_img.css("width", this.kag.config.scWidth);
        j_menu_save_img.css("height", this.kag.config.scHeight);
        j_save.append(j_menu_save_img);
        that.setMenu(j_save)
    },
    doSave: function(num) {
        var array_save = this.getSaveData();
        var data = {};
        if (this.snap == null) this.snapSave(this.kag.stat.current_message_str);
        if (this.snap.stat.is_strong_stop ==
            true) {
            alert("\u3053\u3053\u3067\u306f\u30bb\u30fc\u30d6\u3067\u304d\u307e\u305b\u3093");
            return false
        }
        data = this.snap;
        data.save_date = $.getNowDate() + "\u3000" + $.getNowTime();
        array_save.data[num] = data;
        $.setStorage(this.kag.config.projectID + "_tyrano_data", array_save)
    },
    snapSave: function(title, scenario, order_index) {
        scenario = scenario || "";
        order_index = order_index || "";
        var data = {};
        data.title = title;
        data.stat = this.kag.stat;
        data.current_order_index = this.kag.ftag.current_order_index;
        data.save_date = $.getNowDate() +
            "\u3000" + $.getNowTime();
        var layer_obj = this.kag.layer.getLayeyHtml();
        data.layer = layer_obj;
        this.snap = $.extend(true, {}, $.cloneObject(data));
        if (scenario != "") this.snap.stat.current_scenario = scenario;
        if (order_index != "") this.snap.current_order_index = order_index
    },
    displayLoad: function() {
        var that = this;
        this.kag.stat.is_skip = false;
        var array_save = that.getSaveData();
        var array = array_save.data;
        var j_save = $("<div></div>");
        for (var i = 0; i < array.length; i++)(function() {
            var _data = array[i];
            var _i = i;
            var html = "<div class='save_display_area' style=''><span class='save_menu_date_font' style=''>\u3010" +
                (i + 1) + "\u3011" + _data.save_date + "</span><br/><span class='save_menu_text_font' style=''>" + _data.title + "</span></div>";
            var save = $(html);
            j_save.append(save);
            save.css("cursor", "pointer");
            save.click(function() {
                that.loadGame(_i);
                var layer_menu = that.kag.layer.getMenuLayer();
                layer_menu.hide();
                $(".button_menu").show()
            })
        })();
        var j_menu_save_img = $("<img src='tyrano/images/kag/menu_load_bg.jpg' style='z-index:-1;left:0px;top:0px;position:absolute;' />");
        j_menu_save_img.css("width", this.kag.config.scWidth);
        j_menu_save_img.css("height",
            this.kag.config.scHeight);
        j_save.append(j_menu_save_img);
        that.setMenu(j_save)
    },
    loadGame: function(num) {
        var array_save = this.getSaveData();
        var array = array_save.data;
        var auto_next = "yes";
        data = $.extend(true, {}, array[num]);
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
        layer_menu.html("");
        var menu_html = "" + "<div class='menu_item menu_close' style='float:right;'><img src='tyrano/images/kag/menu_button_close.png' /></div>" + "<div style='clear:both'></div>" +
            "";
        var j_menu = $(menu_html);
        layer_menu.append(j_menu);
        layer_menu.find(".menu_close").click(function() {
            layer_menu.hide();
            $(".button_menu").show();
            that.kag.ftag.nextOrder()
        });
        layer_menu.show();
        layer_menu.append(j_obj)
    },
    hideMenu: function() {},
    getSaveData: function() {
        var tmp_array = $.getStorage(this.kag.config.projectID + "_tyrano_data");
        if (tmp_array) return eval("(" + tmp_array + ")");
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
                json.stat = {};
                tmp_array.push(json)
            }
            root.data = tmp_array;
            return root
        }
    },
    test: function() {}
};