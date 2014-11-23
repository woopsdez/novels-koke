*start

;メッセージレイヤを非表示にしておく
@layopt layer=message0 visible=false

;背景画像を設定 
[image layer="base" page="fore" storage=title.jpg]

;スタートボタン
[locate x=200 y=300 ]
[button graphic="btn-start.png" target=*first]
[locate x=200 y=380 ]
[button graphic="btn-load.png" target=*loadmenu]

;押されるまでスタートしない
[s]

;つづきからボタンが押された場合。ロード画面を表示
*loadmenu
[cm]
[showload]

[jump target=*title]
[s]

;最初から
*first
[cm]

[wait time=0]
[position height=160 top=300]

[call target=*start storage="tyrano.ks"]

;背景画像の切り替え実行
[back storage=building.jpg time=3000]

;キャラクター登場
[charaset layer=0 right=0 top=0 time= 1000 storage = yamazaki.png] 

[playbgm storage=n25.mp3]

@layopt layer=message0 visible=true

誰と話しますか？[r][l]
[link storage=watamura.ks]【1】綿村[endlink][r]
[link storage=yuki.ks]【2】ゆきちゃん[endlink][r]
[link storage=mame.ks]【3】まめ[endlink][r]
[link storage=taiju.ks]【4】武藤さん[endlink][r]
[link storage=yamazaki.ks]【5】山崎さん[endlink][r]
[link storage=fujinon.ks]【6】ふじのさん[endlink][r]
[link storage=masato.ks]【7】まさとくん[endlink][r]
[link storage=hamada.ks]【8】はまだくん[endlink][r]
[link target=*common]【9】通常ルート[endlink][r]
[s]

*common 
[cm] 

コワーキングスペース「こけむさズ」…。[l][cm]
フリーランスの人たちが集まって一緒に仕事したりしてるって聞いて[l][r] 
営業のつもりできちゃった、、、、。[l][cm]

「えっと…ここのビルだよね…」[l][cm]

[wait time=200]
[call target=*start storage="tyrano.ks"]

;背景画像の切り替え実行
[back storage=door.jpg time=3000]

なんだか入りづらいところだなぁ…。[l][r]
本当にいいのかな。[l][r]

ううん、怖気づいちゃダメ！[l][cm]

いろんな人と知り合いになって、[l][r]
ギークに愛される[l][r]
ゆるふわキャラになるんだから！[l][cm]

「えいっ」[l][cm]

[chararemove layer=0]

[wait time=200]
[call target=*start storage="tyrano.ks"]

;背景画像の切り替え実行
[back storage=koke-all.jpg time=3000]

ギィーーーーーー…。バタン！[l][r][cm]

「いらっしゃいませー」[l][r]
「らっしゃいー」[l][r]
「ませませー！」[l][r][cm]

なんか変な掛け声だなぁ。[l][cm]

…。[l][cm]

あれ？、声は聞こえるけど…。[l][r]

これ、このまま進んでいいのかな…。[l][r][cm]

[call target=*start storage="tyrano.ks"]

;キャラクター登場
[charaset layer=0 left=0 top=0 time= 1000 storage = hamada.png] 

「あ、い、いらっしゃいませ。」[l][r][cm]

わ、なんかステキな人…。[l][r][cm]
ってちがうちがう！ そうじゃなくって[l][r][cm]

「えっと。はじめてなんですけど…。」[l][r][cm]

「あ、そうですか…」[l][r][cm]

「…」[l][r]
「…」[l][r][cm]

あ、あんまり話すの得意じゃない人なのかな…。[l][r][cm]

「ま、まずはここで靴を抜いでもらって…」[l][r]
「電源はデスクにあるのを自由に使えます。」[l][r]
「wi-fiは…。あそこの黒板にある…でパスワードは…」[l][r][cm]

;キャラクター登場
[chararemove layer=0]
[charaset layer=0 right=0 top=0 time= 1000 storage = masato.png] 

「あ、はまだ大丈夫？」[l][r][cm]

あ、誰か来た。[l][r][cm]

「すいません、[l][r]
イキナリびっくりしますよね。[l][r]
俺まさと、[l][r]
ここのスタッフとデザイナーしてます。」[l][r][cm]

なんかチャラい人だよぅうううう。[l][r]
どうしよどうしよ。[l][r]
でも、さっきの人より話しやすいかも…。[l][r][cm]

「ドリンクはこの冷蔵庫にあるんで[l][r]
好きなのとって、お金をこのビンに入れればOKっす。」[l][r][cm]

「席は空いてるところならどこでも使ってください。」[l][r][cm]

「仕事をする気分なら、こっちのデスクスペース。」[l][r]
「だらだらするなら芝が引いてあるフリースペースがいいですね。」[l][r][cm]

あ、ハンモックがある！ こういうの憧れてたんだよねー。[l][r][cm]

って、言うか…。落ち着いてみたらなんか…。[l][r][cm]

こたつ…？ 楽器…？ ここって本当に仕事場なの？[l][r][cm]

「あの、お金は…」[l][r][cm]

「今の時間を覚えておいてもらって、[l][r]
出るときに『おびざいじかん』をもとに清算します。」[l][r][cm]

「おびざい時間？」[l][r][cm]

[chararemove layer=0]
[charaset layer=0 right=0 top=0 time= 1000 storage = hamada.png] 

「滞在時間だってw」[l][r]
「なんで滞を帯って読むんだよ。」[l][r][cm]

…。[l][r]
なんだか変な人たち…。[l][r][cm]

えっと、どうしようかな…。[l][r]
キョロキョロ。[l][r][cm]

うわっ[l][r][cm]

「ふんっ はっ ふんっ はっ」[l][r][cm]

わっ、腕立してる！[l][r][cm]

「あの…、すいません…、ちょっと通してもらっていいですか？」[l][r][cm]

「おっと、失礼しました！」[l][r]
「腕立てに夢中で…。」[l][r]
「ここの共同オーナーの綿村です」[l][r][cm]

って、えええ！[l][r]
この人がオーナーなの！？[l][r]
さっきの人より変！[l][r][cm]

「あ、ここ座りますか」[l][r][cm]

そういって綿村さんは入口近くの席を片付けてくれた。[l][r][cm]

なんでデスクに枝豆が置いてあったんだろう…。[l][r][cm]

「ちょっとー綿村さん」[l][r]
「ダイエット中だからって」[l][r]
「枝豆ばっかり食べてちゃダメだよー。」[l][r][cm]

やっとまともそうな人が…。[l][r]
ちょっとホッとしたかな。[l][r][cm]

「この人がもう一人の共同オーナーのユキちゃん。」[l][r][cm]

「どーもー、はじめまして。スズキユキです！」[l][r]
「ちょうど野菜炒め作ったんですけど食べますか？」[l][r][cm]

ふぇっ？ 野菜炒め？[l][r][cm]

「みんなでランチしようと思って作ってるんですよ。」[l][r]
「あと少しでご飯も炊けそう」[l][r][cm]

「やったー！エサだー！」[l][r][cm]

なんだか仕事場っていうか、人の家みたいなところだなぁ。[l][r][cm]

「綿村さん、[l][r]
「ユキさんが作ってくださったんですから[l][r]
「エサっていうのやめません？[l][r][cm]

「ふじのん。ごはんこれくらいでいい？」[l][r][cm]

「いいんすか、いただいちゃって」[l][r][cm]

あ、なんか美味しそう…。[l][r]
ちょうどごはんもまだだったし、[l][r]
わたしもいただいちゃおうかな。[l][r][cm]

「いっただっきまーす！」[l][r][cm]

もぐもぐ…。[l][r][cm]

あっおいしい！[l][r][cm]

「これうまいっすわー」[l][r][cm]

もぐもぐ。[l][r]
もぐもぐ。[l][r][cm]

さっきの人がおいしそうに食べてる。[l][r][cm]

「ふじのんはうちの会社の社員なんです」[l][r][cm]

あ、綿村さんとふじのんは同じ会社で働いてるのね。[l][r][cm]
コワーキングスペースって会社単位でも使ったりするんだぁ。[l][r][cm]

「どーも、ふじのです。」[l][r][cm]

「皆さんはお仕事何してるんですか？」[l][r][cm]

「俺とふじのはSEですね。」[l][r][cm]

「Amazonで大量に出品している人に向けて[l][r]
「使いやすいツールを作ってたりします。」[l][r][cm]

「SE…。プログラマーさんですか？」[l][r][cm]

「そんな感じです。」[l][r]
「いや、でもまだ2年くらいなんで、[l][r]
「駆け出しっす。」[l][r][cm]

「あたしは、フリーランスでUI/UXデザイナーをしています。」[l][r][cm]
「もともとサイボウズに居て、[l][r]
「グループウェアとか作っていたから[l][r]
「管理画面とか作るの大好きなんですよ。」[l][r][cm]

デザイナーさん！[l][r]
カッコいいなぁ。[l][r]
管理画面が大好きって変わってる。[l][r][cm]

変な人が多いと思ってたけど、[l][r]
仕事もしっかりしてておもしろい人たちかも。[l][r][cm]

「それと、あそこでゲームしてる人が、[l][r]
「お客さんの山崎さん」[l][r][cm]

ずっとピコピコ音してるなって[l][r]
思ってたけどゲームの音だったのね。[l][r][cm]

なんかルパンみたいな背格好の人。[l][r]
コワーキングスペースに来て、[l][r]
仕事しない人もいるのね。[l][r]
みんな思い思いに時間を過ごしてるんだ。[l][r][cm]

なんだか、大学時代の部室を思い出すなぁ…。[l][r][cm]

おもしろい本とかゲームや楽器が置いてあって、[l][r]
誰かいるかな？って用がなくても遊びに行っちゃう感じ。[l][r]
懐しいなぁ…。[l][r][cm]

「ちっくしょー！」[l][r]
「またゲームオーバーだ。[l][r]
「これすっげぇ難しい」[l][r][cm]

「山崎さん最近ずっとそのゲームしてるね」[l][r][cm]

「いや、だってマジ難しいんだもんこれー。」[l][r][cm]

「山崎さん、またタバコ消し忘れてるっすよ」[l][r][cm]

「あっ ごめんごめん。」[l][r][cm]

…。[l][r][cm]

ちょっとルーズな人なのかな…。[l][r][cm]

ギィーーーーーー、バタン。[l][r][cm]

あ、誰か来た？[l][r][cm]

「うぃーす」[l][r]
「おはよー」[l][r]

またお客さんかな？[l][r][cm]

「おはよー。まめちゃん。」[l][r]
「今日は早いね。」[l][r]
「最近めっちゃ早起きなんだよー。」[l][r][cm]

え？もう14時くらいだよね。[l][r]
早起きって…。[l][r][cm]

「あ、どうもー。こんにちわー。」[l][r][cm]

「こんにちわー」[l][r][cm]

「ここの共同オーナーのイシジマです。」[l][r][cm]

ここって3人もオーナーがいるんだ。[l][r][cm]

って、さっき最初に話したはまださんとまさとさんがスタッフでしょ？[l][r][cm]
共同オーナーの綿村さんとその社員のふじのさん。[l][r]
そして同じく共同オーナーのスズキユキさん、[l][r]
最後の今来たこれまた共同オーナーのイシジマさん。[l][r][cm]

ほとんど身内ばっかりじゃん！[l][r][cm]

そうだよね。[l][r]
知らない人同士でこんなに仲良くしてる訳ないか…。[l][r][cm]

「[emb exp="f.username"]さんは今日何で知ってここに来てくれたんですか？」[l][r][cm]
「オーナーが言うのもなんだけど、ここってほら、アレでしょ？」[l][r][cm]

自覚はしてるんだ。[l][r][cm]

「Facebookとか、インターネットで見たことがあって、」[l][r]
「フリーランスもやってみたいと思ってるし、」[l][r]
「どんなところかなーって思って興味があったので」[l][r][cm]

「わあ、そうなんですねー。」[l][r]
「大丈夫？ちゃんと仕事できてますか？」[l][r]
「ここ、うるさいからw」[l][r][cm]

そ、そういえば全然仕事してなかった。[l][r][cm]

「フリーランスに興味があるんですね。」[l][r]
「楽しいですよー。」[l][r]
「あ、ゆきちゃんと話しました？」[l][r]
「彼女、ここに来てフリーランスになるって決めたんですよ？」[l][r][cm]

そうだったんだ！[l][r]
こんなにみんなが自由にしてたら[l][r]
フリーランスって楽しそうだなって思っちゃうかも。[l][r][cm]

「入った会社に馴染めなくてね。」[l][r]
「辞めるー！って言いながら遊びにきてくれてたから」[l][r]
「なっちゃえなっちゃえってw」[l][r][cm]

なんて気軽なノリなの…。[l][r]
あたしにはムリそうだなー。[l][r][cm]

「もちろんいいコトばかりじゃないですよ。」[l][r]
「全部自分でやらないといけないし」[l][r]
「病気とかしても有給出ないですからね。」[l][r]
「土日や深夜も忙しかったら関係ないし。」[l][r][cm]

やっぱり甘くはないんだ。[l][r][cm]

「それでもやっぱり自分でやる方が楽しいよ」[l][r]
「迷ったらここでいろんな人に話し聞くといいですよ」[l][r]
「はまだくんとまさとくんは、」[l][r][cm]

「会社員とかより自分で仕事がしたいとか、」[l][r]
「デザインのスキルを覚えたいって言って」[l][r]
「うちの会社のバイトをやりながら」[l][r][cm]

「こけむさズのスタッフも兼任してるからね」[l][r][cm]

イシジマさんのところもデザインの会社なんだ。[l][r]
確かに友達の中にフリーランスの人っていないかも。[l][r]
いろんな人の話を聞いてみるものおもしろそうね。[l][r]

「ね、武藤さん。」[l][r][cm]

え、武藤さん？[l][r]
ここには誰もいないし…。[l][r]
誰に言ったんだろう。[l][r][cm]

ん？[l][r][cm]

「…」[l][r][cm]
「…」[l][r][cm]
「…」[l][r][cm]

あれ？[l][r]
さっきまでここに人はいなかったのに。[l][r]
目を凝らしてみると何か見える…。[l][r][cm]

「そうですね。」[l][r][cm]

！！！[l][r][cm]

「わっ！武藤さんいつの間に来てたの！」[l][r][cm]

「なんでいつもそういう事言うんですか」[l][r]
「ずっとここに居ましたよ。」[l][r][cm]

「気付かなかったー。」[l][r]
「俺もビックリしたー。」[l][r][cm]

みんなもビックリしてる。[l][r]
これもいつものことなのね。[l][r]
なんだかちょっぴりかわいそう。[l][r][cm]

「この人は武藤さん、フリーランスのプログラマーさんね」[l][r]
「いつもはよく見えないけど」[l][r]
「目を凝らせばちゃんといるからね」[l][r]
「Androidのアプリとか作ったり」[l][r]
「スゴくできるプログラマーなんだよ」[l][r][cm]

「武藤さんはフリーランスになりたい訳じゃなかったけど」[l][r]
「結果的にそうなっててもう数年やってるから」[l][r]
「彼の話もまたおもしろいと思うよ」[l][r]
「気が向いたらでいいから、みんなと話してみてね」[l][r][cm]


*ending
[cm]

最初は変なところだし、不安もたくさんだったけど[l][r]
ただ仕事しごとするんじゃなくて[l][r]
誰かに話しかけてみて本当によかった。[l][r][cm]

アナタも、[l][r]
近くにコワーキングスペースがあるなら[l][r]
勇気を出して覗いてみると何かあるかも！[l][cm]

そう…。[l]おもちゃ箱をひっくり返したような[l][r]
そんなワクワクが。[l][cm]

おしまい。END。
