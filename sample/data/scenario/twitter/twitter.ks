;
; Twitter関連プラグイン v1.00
; シケモクMK
;
; ＜導入すると、以下の機能が追加されます＞
;-------------------------------
;
;　☆[tweet]タグ
;
;　Twitterで好きな文章のつぶやきを促すことができます。
;　つまり、ゲーム中にツイートボタンを出現させることができます。
;　ゲーム終了後などに、ツイートしてもらうことで、沢山の人にゲームを遊んでもらえるようになるでしょう。
;
;<パラメータ>
;　message(必須): 呟いてもらう文章を指定します
;　storage(必須)：つぶやきボタンの画像を指定します。ファイルはimageフォルダ以下に配置して下さい
;　left  :つぶやきボタンの横位置
;　top   :つぶやきボタンの縦位置
;　close_left:閉じるボタンの横位置
;　close_top:閉じるボタンと縦位置

; ＜使い方＞
;;twitterプラグインの呼び出し
;[call storage="twitter/twitter.ks"]
;[tweet message="ティラノスクリプト　ツイッターブラグインのサンプル http://tyrano.jp/demo"  top=100 left=100 close_top=100 close_left=100]
;
;--------------------------------
;
; 　☆[followme]タグ
;　
;　特定アカウントのフォローを促すことができます。
;　今後の更新情報などを発信する場合にべんりですね
;
;
;<パラメータ>
;　account(必須): フォローを促したいTwitterアカウントを指定
;　storage(必須)：フォロミーボタンの画像を指定します。ファイルはimageフォルダ以下に配置して下さい
;　left  :フォロミーボタンの横位置
;　top   :フォロミーボタンの縦位置
;　close_left:閉じるボタンの横位置
;　close_top:閉じるボタンと縦位置
;
; ＜使い方＞
;
;[followme account="shikemokumk"  top=100 left=100 close_top=100 close_left=100]
;
;
;
; ＜注意点＞
;   ティラノスクリプトVer2.0.1 で動作保証
;
;
;
;tweetボタン
[macro name="tweet"]


[locate x=%left|0 y=%top|0]
[button name="button_tweet" target=*clicktweet graphic=%storage|tweet/tweet.png]

[locate x=%close_left|0 y=%close_top|0]
[button name="button_tweet_close" target=*closetweet graphic=%storage_close|tweet/close.png]

[s]

*clicktweet
[cm]
[iscript]

var tweetUrl = "https://twitter.com/intent/tweet?text="+mp.message;
window.open(tweetUrl);
[endscript]

*closetweet
[cm]


[endmacro]

;フォローミーボタン
[macro name="followme"]

[locate x=%left|0 y=%top|0]
[button name="button_tweet" target=*clickfollowme graphic=%storage|tweet/followme.png]

[locate x=%close_left|0 y=%close_top|0]
[button name="button_tweet_close" target=*closefollowme graphic=%storage_close|tweet/close.png]

[s]

*clickfollowme
[cm]
[iscript]
window.open('https://twitter.com/[emb exp=mp.account]');
[endscript]

*closefollowme
[cm]

[endmacro]
