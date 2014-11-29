*common 
[cm]

;=========================
; シナリオ初期設定
;=========================

;ゲームに必要なライブラリ読み込み
[call storage="tyrano.ks"]
[call storage="novel_booster.ks"]

;レイヤーの非表示
[layopt layer="message0" visible=false]

;=========================
; キャラ定義
;=========================

;/// 主人公
[chara_new name="aoi" storage="heroine-normal.png" jname="あおい"]
[chara_face name="aoi" face="angry" storage="heroine-angry.png"]
[chara_face name="aoi" face="smile" storage="heroine-smile.png"]
[chara_face name="aoi" face="happy" storage="heroine-happy.png"]
[chara_face name="aoi" face="sad" storage="heroine-sad.png"]
[chara_face name="aoi" face="tired" storage="heroine-tired.png"]

;/// 綿村
[chara_new name="watamura" storage="watamura.png" jname="綿村さん"]

;/// ゆき
[chara_new name="yuki" storage="yuki.png" jname="ゆきちゃん"]

;/// イシジマ
[chara_new name="ishijima" storage="ishijima.png" jname="イシジマさん"]

;/// 武藤
[chara_new name="muto" storage="muto.png" jname="武藤さん"]

;/// 山崎
[chara_new name="yamazaki" storage="yamazaki.png" jname="山崎さん"]

;/// ふじのん
[chara_new name="fujinon" storage="fujinon.png" jname="ふじのんさん"]

;/// ハマダ
[chara_new name="hamada" storage="hamada.png" jname="ハマダくん"]

;/// まさと
[chara_new name="masato" storage="masato.png" jname="まさとくん"]

;メッセージ非表示にしておく
;@layopt layer=message0 visible=false

;メッセージレイヤの定義
[position layer=message0 width=640 height=187 top=293 left=0 page=fore frame="frame.png" margint="40" marginl="20" marginr="40" marginb="20"]

;キャラクタ名定義
[ptext name="chara_name_area" layer=message0 width="200" color=white x=95 y=297 size=24]
[chara_config ptext="chara_name_area"]

;=========================
; シナリオ開始
;=========================

;背景画像の切り替え実行
[back storage=building.jpg time=1000]

;キャラクター登場
[chara_show name="aoi" page="back" left="350"]

[wait time=500]

;メッセージ表示
@layopt layer=message0 visible=true
;ボタン定義
[button name="role_button" role="skip" graphic="button/skip.png" x=320 y=292]
[button name="role_button" role="save" graphic="button/save.png" x=390 y=292]
[button name="role_button" role="load" graphic="button/load.png" x=460 y=292]
[button name="role_button" role="backlog" graphic="button/log.png" x=530 y=292]
 
#主人公
コワーキングスペース「こけむさズ…。[l][cm]
フリーランスの人たちが集まって一緒に仕事したりしてるって聞いて[l][r] 
営業のつもりできちゃった、、、、。[l][cm]

「えっと…ここのビルだよね…[l][cm]

;背景画像の切り替え実行
[back storage=koke-entrance.jpg time=1000]

;キャラクター登場
[chara_mod name="aoi" storage="heroine-tired.png"]

なんだか入りづらいところだなぁ…。[l][r]
本当にいいのかな。[l][r]

[wait time=10]
[chara_mod name="aoi" storage="heroine-angry.png"]

ううん、怖気づいちゃダメ！[l][cm]

いろんな人と知り合いになって、[l][r]
ギークに愛される[l][r]
ゆるふわキャラになるんだから！[l][cm]

「えいっ[l][cm]

[chararemove layer=0]

[wait time=200]

;背景画像の切り替え実行
[back storage=koke-all-new.jpg time=1000]

#
ガラガラガラ…。[l][r][cm]

#???
「いらっしゃいませー[l][r]
「らっしゃいー[l][r]
「ませませー！[l][r][cm]

#主人公
なんか変な掛け声だなぁ。[l][cm]

…。[l][cm]

あれ？、声は聞こえるけど…。[l][r]

これ、このまま進んでいいのかな…。[l][r][cm]

;=========================
; ハマダ登場
;=========================

;レイヤー表示
@layopt layer=message0 visible=false

;キャラクター登場
[charaset layer=0 left=0 top=0 time= 1 storage = hamada.png] 

[wait time=3]

;レイヤー表示
@layopt layer=message0 visible=true

#ハマダくん
「あ、い、いらっしゃいませ。[l][r][cm]

#主人公
わ、なんかステキな人…。[l][r][cm]
ってちがうちがう！ そうじゃなくって[l][r][cm]

「えっと。はじめてなんですけど…。[l][r][cm]

#ハマダくん
「あ、そうですか…[l][r][cm]

#ハマダくん
「…[l][r]
「…[l][r][cm]

#主人公
あんまり話すの得意じゃない人なのかな…。[l][r][cm]

#ハマダくん
「…まずはここで靴を抜いでもらって…[l][r]
「電源はデスクにあるのを自由に使えます。[l][r]
「wi-fiは…黒板にあるので…パスワードは…[l][r][cm]

;=========================
; まさと登場
;=========================

;レイヤー表示
@layopt layer=message0 visible=false

;キャラクター登場
[chararemove layer=0]
[charaset layer=1 left=400 top=0 time= 1 storage = masato.png] 

;レイヤー表示
@layopt layer=message0 visible=true

#まさとくん
「あ、はまだ大丈夫？[l][r][cm]

#主人公
あ、誰か来た。[l][r][cm]

#まさとくん
「すいません、[l][r]
「イキナリびっくりしますよね。[l][r]
[cm]

#まさとくん
「俺まさと、[l][r]
「ここのスタッフとデザイナーしてます。[l][r][cm]

#主人公
なんかチャラい人だよぅうううう。[l][r]
どうしよどうしよ。[l][r]
でも、さっきの人より話しやすいかも…。[l][r][cm]

#まさとくん
「ドリンクはこの冷蔵庫にあるんで[l][r]
「好きなのとって、[r]
「お金をこのビンに入れればOKっす。[l][r][cm]

「席は空いてるところなら[r]
「どこでも使ってください。[l][r][cm]

「仕事をする気分なら、こっちのデスクスペース。[l][r]
「だらだらするなら芝が引いてあるフリースペース
「がいいですね。[l][r][cm]

#主人公
あ、ハンモックがある！[r]
こういうの憧れてたんだよねー。[l][r][cm]

って、言うか…。[r]
落ち着いてみたらなんか…。[l][r][cm]

こたつ…？ 楽器…？[r]
ここって本当に仕事場なの？[l][r][cm]

「あの、お金は…[l][r][cm]

#まさとくん
「今の時間を覚えておいてもらって、[l][r]
「出るときに『おびざいじかん』を[r]
「もとに清算します。[l][r][cm]

#主人公
「おびざい時間？[l][r][cm]

;レイヤー表示
@layopt layer=message0 visible=false

[chararemove layer=1]
[charaset layer=0 left=0 top=0 time= 1 storage = hamada.png] 

;レイヤー表示
@layopt layer=message0 visible=true

#ハマダくん
「滞在時間だってw[l][r]
「なんで滞を『おび』って読むんだよ。[l][r][cm]

#主人公
…。[l][r]
なんだか変な人たち…。[l][r][cm]

[chararemove layer=0]

えっと、どうしようかな…。[l][r]
キョロキョロ。[l][r][cm]

;=========================
; 綿村さん登場
;=========================

うわっ[l][r][cm]

#???
「ふんっ はっ ふんっ はっ[l][r][cm]

#主人公 
わっ、腕立してる！[l][r][cm]

「あの…、すいません…、[l][r]
「ちょっと通してもらっていいですか？[l][r][cm]

;レイヤー表示
@layopt layer=message0 visible=false

[chararemove layer=0]
[charaset layer=0 left=0 top=0 time= 1 storage = watamura.png] 

;レイヤー表示
@layopt layer=message0 visible=true

#綿村さん
「おっと、失礼しました！[l][r]
「腕立てに夢中で…。[l][r]
「ここの共同オーナーの綿村です[l][r][cm]

#主人公
って、えええ！[l][r]
この人がオーナーなの！？[l][r]
さっきの人より変！[l][r][cm]

#綿村さん
「あ、ここ座りますか[l][r][cm]

#主人公
そういって綿村さんは[r]
入口近くの席を片付けてくれた。[l][r][cm]

なんでデスクに枝豆が置いてあったんだろう…。[l][r][cm]

;=========================
; ゆきちゃん登場
;=========================

;レイヤー表示
@layopt layer=message0 visible=false

[charaset layer=1 left=350 top=0 time= 1 storage = yuki.png] 

;レイヤー表示
@layopt layer=message0 visible=true

#???
「ちょっとー綿村さん[l][r]
「ダイエット中だからって[r]
「枝豆ばっかり食べてちゃダメだよー。[l][r][cm]

#主人公
やっとまともそうな人が…。[l][r]
ちょっとホッとしたかな。[l][r][cm]

#綿村さん
「この人がもう一人の共同オーナーのユキちゃん。[l][r][cm]

#ゆきちゃん
「どーもー、はじめまして。スズキユキです！[l][r]
「ちょうど野菜炒め作ったんですけど食べますか？[l][r][cm]

#主人公
ふぇっ？ 野菜炒め？[l][r][cm]

[chararemove layer=0]
[chararemove layer=1]
[back storage ="kitchen.jpg"]


#ゆきちゃん
「みんなでランチしようと思って作ってるんです[l][r]
「あと少しでご飯も炊けそう[l][r][cm]

[charaset layer=0 left=0 top=0 time= 1 storage = watamura.png] 

#綿村さん
「やったー！エサだー！[l][r][cm]

#主人公
なんだか仕事場っていうか、[l][r]
人の家みたいなところだなぁ。[l][r][cm]

;=========================
; ふじのん登場
;=========================

#???
;レイヤー表示
@layopt layer=message0 visible=false

[charaset layer=1 left=350 top=0 time= 1 storage = fujinon.png] 

;レイヤー表示
@layopt layer=message0 visible=true

「綿村さん、[l][r]
「ユキさんが作ってくださったんですから[l][r]
「エサっていうのやめません？[l][r][cm]

@layopt layer=message0 visible=false

[chararemove layer=0]
[charaset layer=0 left=0 top=0 time= 1 storage = yuki.png] 

;レイヤー表示
@layopt layer=message0 visible=true

#ゆきちゃん
「ふじのん。ごはんこれくらいでいい？[l][r][cm]

#ふじのん
「いいんすか、いただいちゃって[l][r][cm]

#主人公
あ、なんか美味しそう…。[l][r]
ちょうどごはんもまだだったし、[l][r]
わたしもいただいちゃおうかな。[l][r][cm]

[chararemove layer=0]
[chararemove layer=1]
[back storage ="gohan.jpg"]
#みんな
「いっただっきまーす！[l][r][cm]

#主人公
もぐもぐ…。[l][r][cm]

あっおいしい！[l][r][cm]

[chararemove layer=0]
[chararemove layer=1]
[charaset layer=0 left=0 top=0 time= 1 storage = fujinon.png] 
#ふじのん
「これうまいっすわー[l][r][cm]

#主人公
もぐもぐ。[l][r]
もぐもぐ。[l][r][cm]

さっきの人がおいしそうに食べてる。[l][r][cm]

[charaset layer=1 left=350 top=0 time= 1 storage = watamura.png] 
#綿村さん
「ふじのんはうちの会社の社員なんです[l][r][cm]

#主人公
あ、綿村さんとふじのんは同じ会社で働いてるのね。[l][r][cm]
コワーキングスペースって会社単位でも使ったりするんだぁ。[l][r][cm]

#ふじのん
「どーも、ふじのです。[l][r][cm]

#主人公
「皆さんはお仕事何してるんですか？[l][r][cm]

#綿村さん
「俺とふじのはSEですね。[l][r][cm]

「Amazonで大量に出品している人に向けて[l][r]
「使いやすいツールを作ってたりします。[l][r][cm]

#主人公
「SE…。プログラマーさんですか？[l][r][cm]

#ふじのん
「そんな感じです。[l][r]
「いや、でもまだ2年くらいなんで、[l][r]
「駆け出しっす。[l][r][cm]

;レイヤーの非表示
[layopt layer="message0" visible=false]

[chararemove layer=0]
[chararemove layer=1]
[charaset layer=0 left=0 top=0 time= 1 storage = yuki.png] 

;レイヤーの非表示
[layopt layer="message0" visible=true]

#ゆきちゃん
「あたしは、フリーランスでUI/UXデザイナーをしています。[l][r][cm]

「もともとサイボウズに居て、[l][r]
「グループウェアとか作っていたから[l][r]
「管理画面とか作るの大好きなんですよ。[l][r][cm]

#主人公
デザイナーさん！[l][r]
カッコいいなぁ。[l][r]
管理画面が大好きって変わってる。[l][r][cm]

変な人が多いと思ってたけど、[l][r]
仕事もしっかりしてておもしろい人たちかも。[l][r][cm]

;=========================
; 山崎さん登場
;=========================

#ゆきちゃん
「それと、あそこでゲームしてる人が、[l][r]
「お客さんの山崎さん[l][r][cm]

[back storage ="gameing.jpg"]

#主人公
ずっとピコピコ音してるなって[l][r]
思ってたけどゲームの音だったのね。[l][r][cm]

なんかルパンみたいな背格好の人。[l][r]
コワーキングスペースに来て、[l][r]
仕事しない人もいるのね。[l][r]
[cm]

みんな思い思いに時間を過ごしてるんだ。[l][r]
なんだか、大学時代の部室を思い出すなぁ…。[l][r][cm]

おもしろい本とかゲームや楽器が置いてあって、[l][r]
誰かいるかな？って用がなくても遊びに行っちゃう感じ。[l]
懐しいなぁ…。[l][r][cm]

#山崎さん
「ちっくしょー！[l][r]
「またゲームオーバーだ。[l][r]
「これすっげぇ難しい[l][r][cm]

#ゆきちゃん
「山崎さん最近ずっとそのゲームしてるね[l][r][cm]

#山崎さん
「いや、だってマジ難しいんだもんこれー。[l][r][cm]

#ふじのん
「山崎さん、またタバコ消し忘れてるっすよ[l][r][cm]

#山崎さん
「あっ ごめんごめん。[l][r][cm]

#主人公
…。[l][r][cm]

ちょっとルーズな人なのかな…。[l][r][cm]

;=========================
; 石嶋さん登場
;=========================

#
ガラガラガラ…。[l][r][cm]

#主人公
あ、誰か来た？[l][r][cm]

#???
「うぃーす[l][r]
「おはよー[l][r]

#主人公
またお客さんかな？[l][r][cm]

#綿村さん
「おはよー。まめちゃん。[l][r]
「今日は早いね。[l][r]
[cm]

#まめちゃん？
「最近めっちゃ早起きなんだよー。[l][r][cm]

#主人公
え？もう14時くらいだよね。[l][r]
早起きって…。[l][r][cm]

#まめちゃん？
「あ、どうもー。こんにちわー。[l][r][cm]

#主人公
「こんにちわー[l][r][cm]

#イシジマさん
「ここの共同オーナーのイシジマです。[l][r][cm]

#主人公
ここって3人もオーナーがいるんだ。[l][r][cm]

って、さっき最初に話した[r]
はまださんとまさとさんがスタッフでしょ？[l][r][cm]
共同オーナーの綿村さんとその社員のふじのさん[l][r]
そして同じく共同オーナーのスズキユキさん、[l][r]
最後の今来たこれまた共同オーナーのイシジマさん[l][r][cm]

ほとんど身内ばっかりじゃん！[l][r][cm]

そうだよね。[l][r]
知らない人同士でこんなに仲良くしてる訳ないか…[l][r][cm]

#イシジマさん
「[emb exp="f.username"]さんは今日何で知って[r]
「ここに来てくれたんですか？[l][r][cm]

「オーナーが言うのもなんだけど、[l][r]
「ここってほら、アレでしょ？[l][r][cm]

#主人公
自覚はしてるんだ。[l][r][cm]

「Facebookとか、[r]
「インターネットで見たことがあって、[l][r]
[cm]

「フリーランスもやってみたいと思ってるし、[l][r]
「どんなところかなーって思って興味があったので[l][r][cm]

#イシジマさん
「わあ、そうなんですねー。[l][r]
「大丈夫？ちゃんと仕事できてますか？[l][r]
「ここ、うるさいからw[l][r][cm]

#主人公
そ、そういえば全然仕事してなかった。[l][r][cm]

#イシジマさん
「フリーランスに興味があるんですね。[l][r]
「楽しいですよー。[l][r]
[cm]

「あ、ゆきちゃんと話しました？[l][r]
「彼女、ここに来て[r]
「フリーランスになるって決めたんですよ？[l][r][cm]

#主人公
そうだったんだ！[l][r]
こんなにみんなが自由にしてたら[l][r]
フリーランスって楽しそうだなって思っちゃうかも[l][r][cm]

#イシジマさん
「入った会社に馴染めなくてね。[l][r]
「辞めるー！って言いながら[r]
「遊びにきてくれてたから[l][r]
[cm]

「みんなで口揃えて[r]
「なっちゃえなっちゃえってw[l][r]
[cm]

#主人公
なんて気軽なノリなの…。[l][r]
あたしにはムリそうだなー。[l][r][cm]

#イシジマさん
「もちろんいいコトばかりじゃないですよ。[l][r]
[cm]

「全部自分でやらないといけないし[l][r]
「病気とかしても有給出ないですからね。[l][r]
「土日や深夜も忙しかったら関係ないし。[l][r][cm]

#主人公
やっぱり甘くはないんだ。[l][r][cm]

#イシジマさん
「それでも、自分でやるの、楽しいよ[l][r]
「迷ったらここで[r]
「いろんな人に話し聞くといい。[l][r]
[cm]

「はまだくんとまさとくんは、[l][r][cm]
「会社員とかより自分で仕事がしたいとか、[l][r]
「デザインのスキルを覚えたいって言って[l][r]
[cm]

「うちの会社のバイトをやりながら[l][r]
「こけむさズのスタッフも兼任してたからね[l][r]
[cm]

#主人公
イシジマさんのところもデザインの会社なんだ[l][r]
そういえば、周りにフリーランスっていないかも[l][r]
いろんな人の話を聞いてみるものおもしろそう[l][r]
[cm]

;=========================
; 武藤さん登場
;=========================

#イシジマさん
「ね、武藤さん。[l][r][cm]

#主人公
え、武藤さん？[l][r]
ここには誰もいないし…。[l][r]
誰に言ったんだろう。[l][r][cm]

ん？[l][r][cm]

「…[l][r]
「…[l][r]
「…[l][r]
[cm]

あれ？[l][r]
さっきまでここに人はいなかったのに。[l][r]
目を凝らしてみると何か見える…。[l][r][cm]

#武藤さん
「そうですね。[l][r][cm]

#主人公
！！！[l][r][cm]

#山崎さん
「わっ！武藤さんいつの間に来てたの！[l][r][cm]

#武藤さん
「なんでいつもそういう事言うんですか[l][r]
「ずっとここに居ましたよ。[l][r][cm]

#みんな
「気付かなかったー。[l][r]
「俺もビックリしたー。[l][r][cm]

#主人公
みんなもビックリしてる。[l][r]
これもいつものことなのね。[l][r]
なんだかちょっぴりかわいそう。[l][r][cm]

#イシジマさん
「この人は武藤さん、[l][r]
「フリーランスのプログラマーさんね[l][r]
[cm]

「いつもはよく見えないけど[l][r]
「目を凝らせばちゃんといるからね[l][r]
[cm]

「Androidのアプリとか作ったり[l][r]
「スゴくできるプログラマーなんだよ[l][r][cm]

「彼はフリーランスになりたい訳じゃなかったけど[l][r]
「結果的にそうなっててもう数年やってるから[l][r]
「その話もまたおもしろいと思うよ[l][r]
[cm]

「気が向いたらでいいから、みんなと話してみてね[l][r][cm]

「あ、ありがとうございます。[l][r]
[cm]

「そうか、そうだよね[l][r]
「せっかくだもん、話してみよう！[l][r]
[cm]

;=========================
; 分岐
;=========================

[wait time=1000]

;レイヤー表示
@layopt layer=message0 visible=true

;キャラクタ名非表示
#

@jump storage=selection.ks