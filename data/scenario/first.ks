
;ティラノスクリプト こけむさズ

;メニューボタン非表示
[hidemenubutton]

;ゲームに必要なライブラリ読み込み
[call storage="tyrano.ks"]
[call storage="novel_booster.ks"]

;=========================
; タイトル画面
;=========================

*title

;レイヤーの非表示
[layopt layer="message0" visible=false]

;背景画像を設定 
[image layer="base" page="fore" storage=title.jpg]

;スタートボタン
[locate x=200 y=300 ]
[button graphic="btn-start.png" target=*start]
[locate x=200 y=380 ]
[button graphic="btn-load.png" target=*loadmenu]

;押されるまでスタートしない
[s]

;=========================
; はじめる
;=========================
*start
@jump storage=selection.ks

;=========================
; ロード画面
;=========================

;つづきからボタンが押された場合。ロード画面を表示
*loadmenu
[cm]
[showload]

[jump target=*title]
[s]
