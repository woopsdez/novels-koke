;==============================
; タイトル画面
;==============================

;タイトルのボタンを隠す
[macro name="hide_title_button"]
    
    [anim name="button_title_start" left=1000 time=600 ]
;[wait time=60]
    
    [anim name="button_title_load" left=1000 time=600 ]
;[wait time=60]

    [anim name="button_title_syouload" left=1000 time=600 ]
;[wait time=60]
    
    [anim name="button_title_replay" left=1000 time=600 ]
;[wait time=60]
    
    
    [anim name="button_title_data" left=1000 time=600 ]
    [wait time=60]
    [wa]

[endmacro]

;タイトルボタンを表示する
[macro name="show_title_button"]
    
    [anim name="button_title_start" left=630 time=600 ]
;[wait time=60]
    
    [anim name="button_title_load" left=630 time=600 target="*load"]
;[wait time=60]
    
    [anim name="button_title_syouload" left=630 time=600 target="*syouload"]
;[wait time=60]

    [anim name="button_title_replay" left=630 time=600 target="*replay" ]
;[wait time=60]
    
    
    [anim name="button_title_data" left=630 time=600 target="*data" ]
;[wait time=60]
    
    
    [wa]

[endmacro]

;マウス操作
[call storage="key_mouse/key_mouse.ks"]
[key_mouse]
;標準のメッセージレイヤを非表示
@layopt layer=message0 visible = false

;タイトル画像の先読み
[iscript]
f.preload_images_titlebg = ["data/bgimage/bg.jpg","data/image/button_title_start.png","data/image/button_title_load.png","data/image/button_title_syouload.png","data/image/button_title_replay.png","data/image/button_title_data.png","data/fgimage/wrap.gif","data/fgimage/bgCommon.png"];

[endscript]
[preload storage=&f.preload_images_titlebg ]



;タイトル表示
[back storage ="bg.jpg"]


[iscript]
    tf.flag_replay = false;
[endscript]


*fromData
*title

;バックログ取得開始のフラグ1で取得開始0は取得しない
[iscript]
localStorage.setItem("backLogFlag" , 0);
localStorage.removeItem("backLog");
[endscript]



;タイトル各種ボタン
[locate x=1000 y=0]
[button name="button_title_start" graphic="button_title_start.png" target="*start"]

[locate x=1000 y=108]
[button name="button_title_load" graphic="button_title_load.png" target="*load"]
[locate x=1000 y=216]
[button name="button_title_syouload" graphic="button_title_syouload.png" target="*syouload"]

[locate x=1000 y=324]
[button name="button_title_replay" graphic="button_title_replay.png" target="*replay" ]


[locate x=1000 y=432]
[button name="button_title_data" graphic="button_title_data.png" target="*data" ]

[show_title_button]



[s]

;-------ボタンが押されたときの処理
*start

[hide_title_button]



;------シナリオの最初にジャンプする
@jump storage="scene1.ks"

[s]

;--------ロードが押された時の処理
*load

;もしゲーム内のメニューボタンが存在していたら
[iscript]
if($(".button_menu").size() !=0 ){
$(".button_menu").hide();
}
[endscript]

[hide_title_button]


[cm]
[showload]
[jump target=*title]
[cm]

[s]


;----------章の頭からが選択された時
*syouload
[hide_title_button]
[jump storage="syouload.ks"]
[s]

;----------回想モードが選択された時
*replay
[hide_title_button]
[jump storage="cg.ks"]
[s]



;----------キャッシュが選択された時
*data

[hide_title_button]
[jump storage="data.ks"]

[s]