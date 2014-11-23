
;ティラノスクリプト　ブースターパック


;メニューボタン非表示
[hidemenubutton]


;ゲームに必要なライブラリ読み込み
[call storage="tyrano.ks"]
[call storage="novel_booster.ks"]

;メッセージレイヤの定義
[position layer=message0 width=960 height=240 top=340 left=0 page=fore frame="frame.png"]

[ptext name="chara_name_area" layer="message0" color="white" size=24 x=0 y=340]
[chara_config ptext="chara_name_area"]

[layopt layer="message0" visible=false]

[position layer=message1 width=860 height=440 top=50 left=50 position layer=message1 frame="none"]
[layopt layer=message1 color=black opacity=255 visible=false]


;タイトルの設定
[title name="タイトル"]

;タイトル画面表示
[call storage="title.ks"]


[s]
