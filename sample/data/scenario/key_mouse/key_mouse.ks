;
; キーボード＆マウス操作 対応プラグイン v2.72.1
; keito http://keito-works.com/
;
; ＜導入すると、以下の機能が追加されます＞
;   1.キーボード対応
;     ・[ENTER]や[SPACE]で、次のメッセージへ
;     ・[ESC]でシステムを開く
;
;   2.マウス右クリック対応
;     ・マウス右でシステムを開く
;
;
; ＜使い方＞
;   最初に、key_mouse.ksと[key_mouse]を読み込んでください。
;   [call storage="key_mouse/key_mouse.ks"]
;   [key_mouse]
;
;
; ＜注意点＞
;   ティラノスクリプトVer2.72 で動作確認
;
[macro name="key_mouse"]
[iscript]
var KeyMouse = {
    addShiftKey: false,
    ctrlKey: false,
    system: null,

    canOpenTMenu: function() {
        if ($(".layer_free").css("display") == "none") {
            return true;
        }
        return false;
    },
    openTMenu: function() {
        if (this.canOpenTMenu()) {
            if ($(".menu_close").size() > 0 && $(".layer_menu").css("display") != "none") {
                $(".menu_close").click();
            } else {
                if (this.system == "hidemessage") {
                    tyrano.plugin.kag.ftag.startTag("hidemessage");
                } else {
                    tyrano.plugin.kag.ftag.startTag("showmenu");
                }
            }
        }
    },
    canClick: function() {
        if ($(".layer_event_click").css("display") != "none") {
            return true;
        }
        return false;
    }
};
if (mp.system != null) {
    KeyMouse.system = mp.system;
}

$(window).keyup(function(e){
    switch(e.keyCode) {
        case 13:
        case 32:
            if (KeyMouse.canClick()) {
                $(".layer_event_click").click();
            }
            break;
        case 27:
            KeyMouse.openTMenu();
            break;
    }
});

$(window).on("mousedown", function(e){
    if (e.which == 3) {
        KeyMouse.openTMenu();
    }
});

$(window).on("contextmenu",function(e){
    return false;
});
[endscript]
[endmacro]
