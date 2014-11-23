tyrano.plugin.kag = {
    tyrano: null,
    kag: null,
    sound_swf: null,
    config: {
        defaultStorageExtension: "jpg",
        projectID: "tyranoproject",
        preload: "on"
    },
    define: {
        TYRANO_ENGINE_VERSION: 0.3,
        "BASE_DIV_NAME": "tyrano_base",
        FLAG_APRI: false,
        "www": ""
    },
    options: {
        modules: ["order", "parser", "tag", "layer", "menu", "tag_audio", "tag_system", "tag_ext"]
    },
    variable: {
        sf: {},
        tf: {}
    },
    tmp: {
        checking_macro: false,
        num_anim: 0,
        map_bgm: {},
        map_se: {}
    },
    stat: {
        map_label: {},
        map_macro: {},
        vertical: "false",
        f: {},
        mp: {},
        current_layer: "message0",
        current_page: "fore",
        is_stop: false,
        is_strong_stop: false,
        is_nowait: false,
        current_message_str: "\u30b2\u30fc\u30e0\u30b9\u30bf\u30fc\u30c8",
        current_keyframe: "",
        map_keyframe: {},
        is_script: false,
        buff_script: "",
        is_html: false,
        map_html: {},
        stack: {
            "if": [],
            "call": [],
            "macro": []
        },
        set_text_span: false,
        current_scenario: "first.ks",
        is_skip: {},
        current_bgm: "",
        current_line: 0,
        is_hide_message: false,
        is_click_text: false,
        is_adding_text: false,
        flag_ref_page: false,
        ruby_str: "",
        ch_speed: 30,
        flag_glyph: "false",
        font: {
            enable: false,
            color: "",
            bold: "",
            size: "",
            face: ""
        },
        locate: {
            x: 0,
            y: 0
        },
        default_font: {
            color: "",
            bold: "",
            size: ""
        },
        chara_pos_mode: "true",
        chara_effect: "swing",
        chara_ptext: "",
        charas: {},
        play_bgm: true,
        play_se: true,
        title: ""
    },
    init: function () {
        this.kag = this;
        var that = this;
        this.tyrano.test();
        this.parser.loadConfig(function (map_config) {
            that.config = $.extend(true, that.config, map_config);
            that.init_game()
        });
        $("script").each(function () {
            if ($(this).attr("src"))
                if ($(this).attr("src").indexOf("cordova") != -1) that.define.FLAG_APRI = true
        });
        try {
            var browser = $.getBrowser();
            if (browser == "firefox" || browser == "opera" || browser == "safari" && $.userenv() == "pc")
                if ($.isFlashInstalled() != true) alert("FLASH\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u306a\u3044\u305f\u3081\u3001\u97f3\u697d\u304c\u518d\u751f\u3055\u308c\u307e\u305b\u3093\u3002");
                else this.kag.sound_swf = $.swfName("externalnovelsound")
        } catch (e) {
            console.log(e)
        }
    },
    evalScript: function (str) {
        var TG = this;
        var f = this.stat.f;
        var sf = this.variable.sf;
        var tf = this.variable.tf;
        var mp = this.stat.mp;
        eval(str);
        this.saveSystemVariable()
    },
    embScript: function (str, preexp) {
        var f = this.stat.f;
        var sf = this.variable.sf;
        var tf = this.variable.tf;
        var mp = this.stat.mp;
        return eval(str)
    },
    saveSystemVariable: function () {
        $.setStorage(this.kag.config.projectID + "_sf", this.variable.sf)
    },
    clearVariable: function () {
        this.stat.f = {};
        this.variable.sf = {};
        this.variable.tf = {};
        this.saveSystemVariable()
    },
    pushStack: function (name, flag) {
        this.stat.stack[name].push(flag)
    },
    popStack: function (name) {
        return this.stat.stack[name].pop()
    },
    getStack: function (name) {
        return this.stat.stack[name][this.stat.stack[name].length -
            1
        ]
    },
    setStack: function (name, flag) {
        this.stat.stack[name][this.stat.stack[name].length - 1] = flag
    },
    endStorage: function () {
        var pm = this.kag.getStack("call");
        if (pm == null) return false;
        this.kag.ftag.nextOrderWithIndex(pm.index, pm.storage);
        this.kag.popStack("call")
    },
    init_game: function () {
        var that = this;
        this.parser = object(tyrano.plugin.kag.parser);
        this.parser.kag = that;
        this.ftag = object(tyrano.plugin.kag.ftag);
        this.ftag.kag = that;
        this.ftag.init();
        this.layer = object(tyrano.plugin.kag.layer);
        this.layer.kag = that;
        this.layer.init();
        this.menu = object(tyrano.plugin.kag.menu);
        this.menu.kag = that;
        this.menu.init();
        var tmpsf = $.getStorage(this.kag.config.projectID + "_sf");
        if (tmpsf == null) this.variable.sf = {};
        else this.variable.sf = eval("(" + tmpsf + ")");
        var button_menu_obj = $("<div class='button_menu'><img class='button_menuImg' src='./tyrano/images/kag/button_menu.png'  /><div class='menu_chara'><a></a></div><div class='menu_map'><a></a></div><div class='menu_window_close'><a></a></div></div>");
        if (this.kag.config.configLeft != "-1" && this.kag.config.configTop != "-1") {
            button_menu_obj.css("left", parseInt(this.kag.config.configLeft));
            button_menu_obj.css("top", parseInt(this.kag.config.configTop))
        } else {
            button_menu_obj.css("right",
                "0px");
            button_menu_obj.css("top", "0px")
        }
		button_menu_obj.children(".menu_chara").click(function () {
			$("#tyrano_base").toggleClass("hiddenChara");
			return false;
        });
		button_menu_obj.children(".menu_map").click(function () {
			button_menu_obj.after('<div id="mapAreaWrap"><div id="mapArea"><div class="mapLink"><span class="ryousyu"></span><span class="kancyu"></span><span class="yucyu"></span><span class="cyouan"></span><span class="rakuyou"></span><span class="kyoto"></span><span class="gyou"></span><span class="seisyu"></span><span class="gappi"></span><span class="cyugen"></span><span class="ekisyu"></span><span class="keisyu"></span><span class="yousyu"></span></div><ul class="wrapMapList"><li class="first"><dl><dd>\u30de\u30c3\u30d7\u306e\u9ed2\u7e01\u6587\u5b57\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u304f\u3060\u3055\u3044\u3002</dd></dl></li><li class="ryousyu"><dl><dt>\u6dbc\u5dde</dt><dd>\u6dbc\u5dde\u306e\u8aac\u660e</dd></dl></li><li class="kancyu"><dl><dt>\u6f22\u4e2d</dt><dd>\u6f22\u4e2d\u306e\u8aac\u660e\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8</dd></dl></li><li class="yucyu"><dl><dt>\u5df4\u4e2d</dt><dd>\u5df4\u4e2d\u306e\u8aac\u660e</dd></dl></li><li class="cyouan"><dl><dt>\u9577\u5b89</dt><dd>\u9577\u5b89\u306e\u8aac\u660e</dd></dl></li><li class="rakuyou"><dl><dt>\u6d1b\u967d</dt><dd>\u6d1b\u967d\u306e\u8aac\u660e</dd></dl></li><li class="kyoto"><dl><dt>\u8a31\u90fd</dt><dd>\u8a31\u90fd\u306e\u8aac\u660e</dd></dl></li><li class="gyou"><dl><dt>\u9134</dt><dd>\u9134\u306e\u8aac\u660e</dd></dl></li><li class="seisyu"><dl><dt>\u9752\u6d32</dt><dd>\u9752\u6d32\u306e\u8aac\u660e</dd></dl></li><li class="gappi"><dl><dt>\u5408\u80a5</dt><dd>\u5408\u80a5\u306e\u8aac\u660e</dd></dl></li><li class="cyugen"><dl><dt>\u4e2d\u539f</dt><dd>\u4e2d\u539f\u306e\u8aac\u660e\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8</dd></dl></li><li class="ekisyu"><dl><dt>\u76ca\u5dde</dt><dd>\u76ca\u5dde\u306e\u8aac\u660e\u30c6\u30ad\u30b9\u30c8\u30c6\u30ad\u30b9\u30c8</dd></dl></li><li class="keisyu"><dl><dt>\u834a\u5dde</dt><dd>\u834a\u5dde\u306e\u8aac\u660e</dd></dl></li><li class="yousyu"><dl><dt>\u63da\u5dde</dt><dd>\u63da\u5dde\u306e\u8aac\u660e</dd></dl></li></ul></div><div class="menu_item menu_close" style="cursor:pointer;position:absolute;top:0;right:0;"><img src="tyrano/images/kag/menu_button_close.png"/></div></div>');
			$("#mapAreaWrap").hide();
			$("#mapAreaWrap").fadeIn();
            doScroll();
			$(".button_menu").hide();
			$(".wrapMapList li").hide();
			$(".wrapMapList li.first").show();
			return false;
        });
		$(".mapLink span").live({"touchstart mousedown": function() {
				$(".mapLink span").removeClass("select");
				 $(".wrapMapList li").hide();
				 $(".wrapMapList li." + $(this).attr("class")).show();
				$(this).addClass("select");
		}});
		$(".menu_close").live("click", function(){
			if(localStorage.getItem("backLogFlag")=="1"){
            	$(".button_menu").show();
			}
			$("#mapAreaWrap").remove();
		});
		button_menu_obj.children(".menu_window_close").click(function () {
            //that.menu.showMenu();
			$(this).hide().addClass("menu_window_closeOFF");
			$(".menu_map").hide();
			$(".menu_chara").hide();
            that.kag.layer.hideMessageLayers();
            doScroll();
			return false;
        });
        button_menu_obj.children(".button_menuImg").click(function () {
            that.menu.showMenu();
            doScroll();
        });
        if (this.kag.config.configVisible == "false") button_menu_obj.hide();
        $("." + this.kag.define.BASE_DIV_NAME).append(button_menu_obj);
        this.tyrano.base.setBaseSize(this.config.scWidth, this.config.scHeight);
        if ($.userenv() != "pc") {
            this.tyrano.base.fitBaseSize(that.config.scWidth, that.config.scHeight);
            $(window).bind("load orientationchange resize", function () {
                if (Math.abs(window.orientation) ===
                    90) {
                    if (window.pageYOffset === 0) window.scrollTo(0, 1);
                    that.tyrano.base.fitBaseSize(that.config.scWidth, that.config.scHeight)
                } else {
                    if (window.pageYOffset === 0) window.scrollTo(0, 1);
                    that.tyrano.base.fitBaseSize(that.config.scWidth, that.config.scHeight)
                }
            })
        }
        this.layer.addLayer("base");
        this.layer.addLayer("message0");
        var j_message = $("<div class='message_outer'></div>");
        j_message.css("background-color", $.convertColor(this.config.frameColor)).css("opacity", $.convertOpacity(this.config.frameOpacity)).css("left",
            eval(this.config.ml)).css("top", eval(this.config.mt)).css("width", eval(this.config.mw)).css("height", eval(this.config.mh)).css("z-index", 100);
        j_message.l_visible;
        this.layer.appendObj("message0", "fore", j_message);
        var j_message_inner = $("<div class='message_inner' style='z-index:1001'></div>");
        if (this.config.defaultAutoReturn != "false") j_message_inner.css("word-break", "break-all");
        this.layer.appendObj("message0", "fore", j_message_inner);
        var num_message_layer = parseInt(this.config.numMessageLayers);
        for (var i =
            1; i < num_message_layer; i++) {
            var message_layer_name = "message" + i;
            this.layer.addLayer(message_layer_name);
            this.layer.getLayer(message_layer_name).attr("l_visible", "false");
            this.layer.getLayer(message_layer_name).hide();
            var j_message1 = j_message.clone(false);
            this.layer.appendObj(message_layer_name, "fore", j_message1);
            var j_message_inner1 = j_message_inner.clone(false);
            this.layer.appendObj(message_layer_name, "fore", j_message_inner1)
        }
        this.layer.refMessageLayer();
        var fore_layer_num = parseInt(this.config.numCharacterLayers);
        for (var i = 0; i < fore_layer_num; i++) {
            this.layer.addLayer("" + i);
            this.layer.getLayer("" + i, "fore").css("display", "none").css("z-index", 10)
        }
        this.stat.default_font.color = $.convertColor(this.kag.config.defaultChColor);
        this.stat.default_font.bold = $.convertBold(this.kag.config.defaultBold);
        this.stat.default_font.size = this.kag.config.defaultFontSize;
        this.stat.vertical = this.kag.config.vertical;
        this.kag.stat.font = $.extend(true, $.cloneObject(this.kag.stat.font), this.stat.default_font);
        this.setTitle(this.config["System.title"]);
        this.loadScenario("first.ks", function (array_tag) {
            that.ftag.buildTag(array_tag)
        })
    },
    setTitle: function (title) {
        this.stat.title = title;
        document.title = title
    },
    pushAnimStack: function () {
        this.kag.tmp.num_anim++
    },
    popAnimStack: function () {
        this.kag.tmp.num_anim--;
        if (this.kag.tmp.num_anim == 0)
            if (this.kag.stat.is_stop == true) {
                this.kag.layer.showEventLayer();
                this.kag.ftag.nextOrder()
            }
    },
    loadScenario: function (file_name, call_back) {
        var that = this;
        this.stat.current_scenario = file_name;
        $.loadText("./data/scenario/" + file_name,
            function (text_str) {
                var result_obj = that.parser.parseScenario(text_str);
                var tag_obj = result_obj.array_s;
                var map_label = result_obj.map_label;
                that.stat.map_label = map_label;
                if (call_back) call_back(tag_obj)
            })
    },
    getMessageInnerLayer: function () {
        return this.layer.getLayer(this.stat.current_layer, this.stat.current_page).find(".message_inner")
    },
    getMessageOuterLayer: function () {
        return this.layer.getLayer(this.stat.current_layer, this.stat.current_page).find(".message_outer")
    },
    getMessageCurrentSpan: function () {
        var j_obj =
            this.layer.getLayer(this.stat.current_layer, this.stat.current_page).find(".message_inner").find("p").find(".current_span");
        return j_obj
    },
    setMessageCurrentSpan: function () {
        var jtext = this.getMessageInnerLayer();
        if (jtext.find("p").length == 0)
            if (this.stat.vertical == "true") jtext.append($("<p class='vertical_text'></p>"));
            else jtext.append($("<p class=''></p>"));
        if (jtext.find("p").find(".current_span").length > 0) {
            jtext.find("p").find(".current_span").removeClass("current_span");
            this.stat.set_text_span = false
        }
        var j_span =
            $("<span class='current_span'></span>");
        jtext.find("p").append(j_span);
        return j_span
    },
    checkMessage: function (jtext) {
        if (this.stat.set_text_span == true) {
            jtext.find("p").find(".current_span").removeClass("current_span");
            this.stat.set_text_span = false
        }
        if (jtext.find(".current_span").length == 0) jtext.find("p").append($("<span class='current_span'></span>"));
    },
    appendMessage: function (jtext, str) {
		jtext.find("p").find(".current_span").html(str)
    },
    preload: function (src, callbk) {
        var that = this;
        $("<img />").attr("src",
            src).load(function (e) {
            if (callbk) callbk()
        }).error(function (e) {
            that.kag.error("\u753b\u50cf\u30d5\u30a1\u30a4\u30eb\u300c" + src + "\u300d\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3002\u5834\u6240\u306f\u30d5\u30eb\u30d1\u30b9\u3067\u6307\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f (\u4f8b)data/fgimage/file.png");
            if (callbk) callbk()
        })
    },
    setStyles: function (j_obj, array_style) {
        for (key in array_style)
            if (array_style[key])
                if (array_style[key] == "");
                else j_obj.css(key, array_style[key]);
        return j_obj
    },
    error: function (str) {
        if (this.kag.config["debugMenu.visible"] == "true") {
            var current_storage = this.kag.stat.current_scenario;
            var line = parseInt(this.kag.stat.current_line) + 1;
            var err = "Error:" + current_storage + ":" + line + "\u884c\u76ee:" + str;
            alert(err)
        }
    },
    warning: function (str) {
        if (this.kag.config["debugMenu.visible"] == "true") alert(str)
    },
    log: function (obj) {
        if (this.kag.config["debugMenu.visible"] == "true"){console.log(obj)
		//バックログ
		var chara_nameLog =$(".chara_name_area").html();
		var current_spanLog 
		
		if($(".message0_fore").css("display")=="block"){
			current_spanLog = $(".message0_fore .current_span").html();
		}
		else if($(".message1_fore").css("display")=="block"){
			current_spanLog = $(".message1_fore .current_span").html();
		}
		
		
		var backLogMin = {chara_nameLogItem:chara_nameLog , current_spanLogItem:current_spanLog}
		var backLogList
		if(JSON.parse(localStorage.getItem("backLog"))!="" && JSON.parse(localStorage.getItem("backLog"))!=null){
			backLogList = JSON.parse(localStorage.getItem("backLog"));
		}
		else{
			backLogList = [];
		}
		if(localStorage.getItem("backLogFlag")==1){
			if(current_spanLog !=""&&current_spanLog !=null){
				if(backLogList[backLogList.length-1]!=JSON.stringify(backLogMin)){
					if(backLogList[backLogList.length-1]!=null&&backLogList[backLogList.length-1]!=""){
						//ひとつ前に保存された文章から"}を取り除いたものが次に保存された文章の中に完全に入っていた場合
						if(JSON.stringify(backLogMin).search(backLogList[backLogList.length-1].replace( /("})/, '' ))==0){
							backLogList.pop();
						}
					}
					backLogList.push(JSON.stringify(backLogMin));
					if(backLogList.length >= 50){
						backLogList.shift();
					}
					localStorage.setItem("backLog" , JSON.stringify(backLogList));
				}
			}
		}
	}
    },
    test: function () {}
};
tyrano.plugin.kag.tag = {};