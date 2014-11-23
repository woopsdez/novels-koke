;=========================
; 選択画面
;=========================

;ゲームに必要なライブラリ読み込み
[call storage="tyrano.ks"]
[call storage="novel_booster.ks"]

[cm]

;メッセージレイヤを消去
@layopt layer=message0 visible=false

;そしてレイヤ表示
[layopt layer="message0" visible=true]
[position layer=message0 width=620 height=460 top=10 left=10 page=fore frame="none" margint="20" marginl="20" marginr="20" marginb="20"]

誰と話しますか？[r]
[link storage=watamura.ks]【1】綿村[endlink][r]
[link storage=yuki.ks]【2】ゆきちゃん[endlink][r]
[link storage=mame.ks]【3】まめ[endlink][r]
[link storage=taiju.ks]【4】武藤さん[endlink][r]
[link storage=yamazaki.ks]【5】山崎さん[endlink][r]
[link storage=fujinon.ks]【6】ふじのさん[endlink][r]
[link storage=masato.ks]【7】まさとくん[endlink][r]
[link storage=hamada.ks]【8】はまだくん[endlink][r]
[link storage=allster.ks]【9】通常ルート[endlink][r]
[s]