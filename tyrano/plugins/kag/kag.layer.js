tyrano.plugin.kag.layer = {
    tyrano: null,
    kag: null,
    layer_event: {},
    layer_menu: {},
    layer_free: {},
    map_layer_fore: {},
    map_layer_back: {},
    init: function() {
        var that = this;
        var layer_obj_click = $("<div class='layer layer_event_click' style='z-index:9999;display:none'></div>");
        layer_obj_click.css("width", this.kag.config.scWidth).css("height", this.kag.config.scHeight).css("position", "absolute");
        layer_obj_click.click(function(e) {
            if (that.kag.stat.is_skip == true) that.kag.stat.is_skip = false;
            if (that.kag.stat.is_adding_text ==
                true) {
                that.kag.stat.is_click_text = true;
                return
            }
            if (that.kag.stat.is_click_text == true) return;
            if (that.kag.stat.is_stop == true) return;
            if (that.kag.stat.is_hide_message == true) that.showMessageLayers();
            that.kag.ftag.nextOrder()
        });
        this.layer_event = layer_obj_click;
        this.appendLayer(this.layer_event);
        var layer_menu = $("<div class='layer layer_menu' style='z-index:100000000;display:none'  align='center'></div>");
        layer_menu.css("width", this.kag.config.scWidth).css("height", this.kag.config.scHeight).css("position",
            "absolute");
        this.layer_menu = layer_menu;
        this.appendLayer(this.layer_menu);
        var layer_free = $("<div class='layer layer_free' style='z-index:9998;display:none' ></div>");
        layer_free.css("width", this.kag.config.scWidth).css("height", this.kag.config.scHeight).css("position", "absolute");
        this.layer_free = layer_free;
        this.appendLayer(this.layer_free)
    },
    getMenuLayer: function() {
        return this.layer_menu
    },
    getFreeLayer: function() {
        return this.layer_free
    },
    addLayer: function(layer_name) {
        var layer_obj_fore = $("<div class='" +
            layer_name + "_fore'></div>");
        var layer_obj_back = $("<div class='" + layer_name + "_back' style='display:none'></div>");
        layer_obj_fore.css("width", this.kag.config.scWidth).css("height", this.kag.config.scHeight).css("position", "absolute");
        layer_obj_back.css("width", this.kag.config.scWidth).css("height", this.kag.config.scHeight).css("position", "absolute");
        this.map_layer_fore[layer_name] = layer_obj_fore;
        this.map_layer_back[layer_name] = layer_obj_back;
        this.map_layer_fore[layer_name].attr("l_visible", "true");
        this.map_layer_back[layer_name].attr("l_visible",
            "true");
        this.appendLayer(this.map_layer_fore[layer_name]);
        this.appendLayer(this.map_layer_back[layer_name])
    },
    appendLayer: function(layer_obj) {
        $("." + this.kag.define.BASE_DIV_NAME).append(layer_obj)
    },
    appendImage: function(image_obj) {
        $("." + this.kag.define.BASE_DIV_NAME).append(layer_obj)
    },
    getLayer: function(layer_name, page) {
        if (layer_name == "fix") return $("#tyrano_base");
        page = page || "fore";
        if (page == "fore") return this.map_layer_fore[layer_name];
        else return this.map_layer_back[layer_name]
    },
    updateLayer: function(layer_name,
        page, layer_obj) {
        page = page || "fore";
        if (page == "fore") this.map_layer_fore[layer_name] = layer_obj;
        else this.map_layer_back[layer_name] = layer_obj
    },
    hideMessageLayers: function() {
        this.kag.stat.is_hide_message = true;
        var num_message_layer = parseInt(this.kag.config.numMessageLayers);
        for (var i = 0; i < num_message_layer; i++) this.getLayer("message" + i).hide()
    },
    showMessageLayers: function() {
        this.kag.stat.is_hide_message = false;
        var num_message_layer = parseInt(this.kag.config.numMessageLayers);
        for (var i = 0; i < num_message_layer; i++) {
            var j_layer =
                this.getLayer("message" + i);
            if (j_layer.attr("l_visible") == "true") j_layer.show()
        }
    },
    appendObj: function(layer_name, page, obj) {
        obj.css("position", "absolute");
        this.getLayer(layer_name, page).append(obj)
    },
    refMessageLayer: function() {
        var num = 0;
        while (true) {
            if (this.map_layer_fore["message" + num]) {
                var j_message_outer = this.map_layer_fore["message" + num].find(".message_outer");
                var j_message_inner = this.map_layer_fore["message" + num].find(".message_inner");
                j_message_inner.css("left", parseInt(j_message_outer.css("left")) +
                    10).css("top", parseInt(j_message_outer.css("top")) + 10).css("width", parseInt(j_message_outer.css("width")) - 10).css("height", parseInt(j_message_outer.css("height")) - 10)
            } else break;
            num++
        }
    },
    getLayeyHtml: function() {
        var layer_info = {
            map_layer_fore: {},
            map_layer_back: {},
            layer_free: {},
            layer_fix: {}
        };
        for (key in this.map_layer_fore) layer_info["map_layer_fore"][key] = this.map_layer_fore[key].outerHTML();
        for (key in this.map_layer_back) layer_info["map_layer_fore"][key] = this.map_layer_fore[key].outerHTML();
        layer_info["layer_free"] =
            this.layer_free.outerHTML();
        var n = 0;
        $(".fixlayer").each(function() {
            layer_info["layer_fix"][n] = $(this).outerHTML();
            n++
        });
        return layer_info
    },
    setLayerHtml: function(layer) {
        for (key in layer.map_layer_fore) {
            this["map_layer_fore"][key].remove();
            delete this["map_layer_fore"][key];
            this["map_layer_fore"][key] = $(layer["map_layer_fore"][key]);
            this.appendLayer(this["map_layer_fore"][key])
        }
        for (key in layer.map_layer_back) {
            this["map_layer_back"][key].remove();
            delete this["map_layer_back"][key];
            this["map_layer_back"][key] =
                $(layer["map_layer_back"][key]);
            this.appendLayer(this["map_layer_back"][key])
        }
        $(".fixlayer").each(function() {
            $(this).remove()
        });
        this.layer_free.remove();
        delete this.layer_free;
        this.layer_free = $(layer.layer_free);
        this.appendLayer(this.layer_free)
    },
    clearMessageInnerLayerAll: function() {
        for (key in this.map_layer_fore)
            if (key.indexOf("message") != -1) this.map_layer_fore[key].find(".message_inner").html("")
    },
    backlay: function(layer) {
        layer = layer || "";
        for (key in this.map_layer_fore)
            if (layer == "" || layer == key) {
                var fore_class_name =
                    this.map_layer_fore[key].attr("class");
                var back_class_name = this.map_layer_back[key].attr("class");
                this.map_layer_back[key] = this.map_layer_fore[key].clone();
                this.map_layer_back[key].removeClass(fore_class_name);
                this.map_layer_back[key].addClass(back_class_name);
                $("." + back_class_name).remove();
                this.map_layer_back[key].hide();
                this.appendLayer(this.map_layer_back[key])
            }
    },
    showEventLayer: function() {
        this.kag.stat.is_stop = false;
        this.layer_event.show()
    },
    hideEventLayer: function() {
        this.kag.stat.is_stop = true;
        this.layer_event.hide()
    },
    forelay: function(layer) {
        layer = layer || "";
        for (key in this.map_layer_back)
            if (layer == "" || layer == key) {
                var fore_class_name = this.map_layer_fore[key].attr("class");
                var back_class_name = this.map_layer_back[key].attr("class");
                this.map_layer_fore[key] = this.map_layer_back[key].clone(true);
                this.map_layer_fore[key].removeClass(back_class_name);
                this.map_layer_fore[key].addClass(fore_class_name);
                $("." + fore_class_name).remove();
                this.appendLayer(this.map_layer_fore[key]);
                this.map_layer_back[key].css("display",
                    "none");
                if (key.indexOf("message") != -1) this.map_layer_fore[key].css("opacity", "")
            }
    },
    test: function() {}
};