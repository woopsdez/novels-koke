*start

;=============================================
;シナリオその１　ゲームの本編を記述して行きましょう
;=============================================


[cm]
;背景素材のプリロード

[iscript]
f.preload_images_bg = ["data/bgimage/mapImage.gif","data/bgimage/bg01.jpg"];

[endscript]
[preload storage=&f.preload_images_bg]



[chara_new name="wrap" storage="wrap.gif" jname="わく"]
[chara_show name="wrap" layer=2 top=0 left=0]

;背景変更
[back storage="rename.jpg" time=1000]
[cg storage="rename.jpg" ]

;登場キャラクターの定義
[chara_new name="kanaup" storage="kanaup/kana00.png"]
[chara_new name="kanaup_face" storage="none.gif"]
[chara_new name="title" storage="bg/bg00-01.png"]



;登場キャラクターの表情リロード
[iscript]
f.preload_images_kanaup = ["data/fgimage/kanaup/kana01.png","data/fgimage/kanaup/kana02.png","data/fgimage/kanaup/kana03.png","data/fgimage/kanaup/kana04.png","data/fgimage/kanaup/kana05.png","data/fgimage/kanaup/kana06.png","data/fgimage/kanaup/kana07.png","data/fgimage/kanaup/kana08.png","data/fgimage/kanaup/kana09.png","data/fgimage/kanaup/kana10.png","data/fgimage/kanaup/kana11.png","data/fgimage/kanaup/kana12.png","data/fgimage/kanaup/kana13.png"];
[endscript]
[preload storage=&f.preload_images_kanaup]


;章セーブストレージが空の場合、全てのフラグに0をセットする。
[iscript]

var sentenceSave
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))==""||JSON.parse(localStorage.getItem("sentenceSaveSet"))==null){
sentenceSave = {title01:0,title02:0,title03:0,title04:0,title05:0,title06:0,title07:0,title08:0};
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]







;決定ボタンを隠す
[macro name="hide_ok_button"]

    [anim name="bt_ok" x=500 y=250 opacity=0 time=600]
;[wait time=60]
    [wa]

[endmacro]


;=================名前入力ここから====================
;自分の名前を登録済みの場合、メインメニューへジャンプ

;テキストボックスの表示
*show_input_yourname

[edit left=500 top=150 width=150 size="25px" name="sf.myouji"]
[edit left=680 top=150 width=150 size="25px" name="sf.namae"]
[locate x=500 y=250]
[button name="bt_ok" graphic="bt_ok.gif" target="*sbm_commit"]

[iscript]
if(JSON.parse($.getStorage("tyranoproject_sf")).myouji==""||JSON.parse($.getStorage("tyranoproject_sf")).myouji==null){$(".text_box").eq(0).val("初期値");}
else{
$(".text_box").eq(0).val(JSON.parse($.getStorage("tyranoproject_sf")).myouji);
}
if(JSON.parse($.getStorage("tyranoproject_sf")).namae==""||JSON.parse($.getStorage("tyranoproject_sf")).namae==null){$(".text_box").eq(1).val("名前子");}
else{
$(".text_box").eq(1).val(JSON.parse($.getStorage("tyranoproject_sf")).namae);
}
[endscript]
[s]

*sbm_commit
[hide_ok_button]
[iscript]
setTimeout(scrollTo, 100, 0, 1);
[endscript]
[commit]
[cm]

[p]
;名前が未入力の場合(現在未使用)

;[if exp="sf.myouji==''"]
;    苗字が未入力です。[l]
;    @jump target=*show_input_yourname
;[endif]
;[if exp="sf.namae==''"]
;    名前が未入力です。[l]
;    @jump target=*show_input_yourname
;[endif]

;=================名前入力ここまで====================
;==============================
; タイトル画面へもどる
;==============================

;タイトルのボタンを隠す
[macro name="hide_title_button"]

    [anim name="button_title_restart" left=200 top=405 opacity=0 time=600 ]
    [anim name="button_title_data" left=500 top=381 opacity=0 time=600 ]
    [wa]

[endmacro]

;タイトルボタンを表示する
[macro name="show_title_button"]

    [anim name="button_title_restart" left=200 top=405 opacity=255 time=600 effect=easeOutQuad]

    [anim name="button_title_data" left=500 top=381 opacity=255 time=600 effect=easeOutQuad]


    [wa]

[endmacro]

;=================タイトル画面ここまで====================





;メッセージエリアの表示
@layopt layer="message0" visible=true
;バックログ取得開始のフラグ1で取得開始0は取得しない
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]


#
[emb exp=sf.myouji]　[emb exp=sf.namae]さん。御覧下さりありがとう御座います。[r]こちらは、ティラノスクリプトのjs改造・タグの使用方法見本になります。[p]

#
私がティラノスクリプトを使用した際に、下の名前だけ入力させる方法はサンプルでわかったけど、じゃあ苗字を入力させるにはどうしたらいいのだろう、と、そんな箇所でもいちいち躓きました。[p]
#
ティラノスクリプト開発者様とは一切関係がない為、使用方法など、正しくないかもしれないことを前提に、使用方法見本の１例として製作における躓きを飛び越える一助になれば嬉しいです。[p]
#
では、この後、章立てを分けて、いくつか追加した機能の説明をしていきたいと思いますが、その前にいくつか注意点です。[p]
#
まず、私が追加したスクリプト部分に関して、基本的に元々のjsに直に変更・追加してしまっています。[p]
#
その為、バージョンアップ時に、バージョンアップもしたいし私が追加した機能も使いたいという場合、移植・改変しなくてはなりません。[p]
#
追加したスクリプトの機能を使われる場合は、そういった不利益があることをあらかじめご了承下さい。[l]
因みに、爆速☆ノベルゲーム開発ブースターパック（V1.00） を基にしています。[p]

#
追加スクリプトのライセンスはティラノスクリプト本体と同じMITライセンスに準拠していただければと思います。[p]
#
著作の表示はどこかに”スクリプト追加(201310)：紫藤薫”とでも入れておいてください。マクロ化で汎用的にして下さる方など大歓迎です。[p]

#
スクリプト以外の画像部分に関しては、スクリプトの挙動を見る以外での使用は不可です。背景は勿論、ボタンやアイコン画像なども再配布不可です。[p]
#
では、機能の説明スタートです。[p]


[chara_hide name="wrap" layer=2]



@layopt layer=message0 visible=false


*title01Link

[chara_show name="title" layer=3 left=0]
[backlay]
[html top=150 left=100 name="secTitle01"]
<p class="secTitle">
概要
</p>
[endhtml]
[wait time=2000]
[cm]
[backlay]

;章セーブ。1で取得。
[iscript]
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));
sentenceSave.title01 = 1;
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]



[showmenubutton]
*mainmenu


[back storage="bg01.jpg" time=1000]
[cg storage="bg01.jpg" ]


[chara_hide layer=3 name="title"]


@layopt layer=message1 visible=false
@layopt layer=message0 visible=true
[current layer="message0"]


[chara_show name="kanaup" layer=8 left=20]
[chara_show name="kanaup_face" layer=9 left=20]
[chara_mod name="kanaup_face" storage="kanaup/kana06.png"]




#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
とりあえず追加・改変した機能を思い出せる範囲で上げます。[p]

[chara_mod name="kanaup_face" storage="none.gif"]
[chara_hide layer=8 name="kanaup"]

@layopt layer=message0 visible=false
@layopt layer=message1 visible=true
[current layer="message1"]

#
1.バックログ[l][r]
2.セーブスロットへのキャラ名の表示[l][r]
3.章の頭からロード[l][r]
4.立ち絵のオンオフ[l][r]
5.マップ解説機能[l][r]
6.名前入力時の初期値表示および二回目以降の入力値保持。[l][r]
7.メニューを引き出し式に。[l][r]
8.スマホなどでURLバーが出たときに画面クリックでバーを引っ込ませる。[p]

@layopt layer=message1 visible=false
@layopt layer=message0 visible=true
[current layer="message0"]

[chara_show name="kanaup" layer=8 left=20]
[chara_show name="kanaup_face" layer=9 left=20]
[chara_mod name="kanaup_face" storage="kanaup/kana04.png"]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
こんなところでしょうか[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
あ、今、先ほど入力した名前がキャラ名欄に出ているかと思いますが、この名前欄への表示は”質問用スレッド”2013/03/28 投稿のkeito@様の記事を使用させていただいております。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
因みに、今は名前だけですが、苗字と名前を表示させたい場合は…[p]

#
[iscript]
$(".chara_name_area").text(sf.myouji + " "+sf.namae);
[endscript]
こんな感じかな[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
また、キーボードでの文字送りのプラグインも同製作者様のもの入れさせていただいています。大変重宝しております。ありがとう御座います。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana09.png"]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
えー…では、自作部分の説明に入りますね。[p]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
まず、【1.バックログ】です。バックログは画面右上のメニューボタンからバックログボタンをおしてみてください。使用方法と注意点はおいおい説明しますが、いかがでしょうか、確認できましたか？[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
次に【2.セーブスロットへのキャラ名の表示】…これは、とりあえずセーブしていただければどんなものか一目瞭然だと思います。バックログと共通の管理方法をとっている為、注意点は後々。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
【3.章の頭からロード】実は先ほど、【概要】というタイトルが出てきたかと思いますが、そこでフラグを立てておきました。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
トップに戻って章の頭からをクリック頂くと、先ほどのタイトルからスタートできるタイトルバナーが出現しているはずです。ご確認下さい。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
【4.立ち絵のオンオフ】は、画面右にある人型のアイコンをクリックしてみて下さい。立ち絵消えましたか？もう一度クリック頂くと出現します。電車などで文字のデバック時に使っていて、残しています。[p]


#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
こちらは特に注意点はないので、この説明で終わりです。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
【5.マップ解説機能】は、画面右にあるマップ型のアイコンをクリックしてみてください。マップはでましたか？黒縁の文字部分もおせば説明が出るような仕組みになっています。これは後ほど説明します。[p]


#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
【6.名前入力時の初期値表示および二回目以降の入力値保持】先ほど、名前を入力して頂いた時に、初期状態で名前が入っていましたよね。二度目は今入力して頂いた名前が初期値で入るようにしています。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
こちらは特に注意点はないので、この説明で終わりです。ソースをみれば初期値の場所もわかると思います。[p]


#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
【7.メニューを引き出し式に。】【8.スマホなどでURLバーが出たときに画面クリックでバーを引っ込ませる。】こちらも特に説明はないです[p]


[chara_mod name="kanaup_face" storage="kanaup/kana08.png"]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
ここまで見てみて、この機能は必要ない！というものもあるかと思います。その際はどうぞ各自改造して下さい。連絡などは不要です。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana05.png"]


#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
一部機能を付け加えたいけど、どの部分のjsを追加したらいいかわからない場合は、元になっているブースターパックと私が記述したjsを文章比較ツールなどで比較してみてください。[p]


[chara_mod name="kanaup_face" storage="none.gif"]
[chara_hide layer=9 name="kanaup_face"]
[chara_hide layer=8 name="kanaup"]



@layopt layer=message0 visible=false
*title02Link
[chara_show name="title" layer=3 left=0]
[backlay]
[html top=150 left=100 name="secTitle01"]
<p class="secTitle">
バックログ
</p>
[endhtml]
[wait time=2000]
[cm]
[backlay]
;章セーブ。1で取得。
[iscript]
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));
sentenceSave.title02 = 1;
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]


[back storage="bg01.jpg" time=1000]



[chara_hide layer=3 name="title"]

@layopt layer=message1 visible=true
[current layer="message1"]



#
まずは【1.バックログ】ですね。[l][r]
バックログはストーリーなどの取得したい部分と説明文などの必要ない部分とがありますよね。バックログを取得する部分には…背景変えますよ[p]


[back storage="sample01.jpg" time=1000]
[cg storage="sample01.jpg" ]

#
背景、見えますかね。こんな記述をストーリー導入前のタイトルページに入れてやります。[l][r]
何をやっているのかというと、バックログの中身を空にしています。[l][r]
二回目以降の閲覧向けの仕様ですね。[l][r]
ではバックログ取得の起点はどう設定するのか。[p]



[back storage="sample02.jpg" time=1000]
[cg storage="sample02.jpg" ]


#
こんな感じの設定を入れてやります。入れる場所は物語に入る入り口ですね。シナリオの頭は勿論、ロードボタンがおされたら、章セーブがおされたら、など様々な場所に入れています。[l][r]
懸念点としては…[l][r]
…とたとた
[font size=30 bold=true]どたどた[resetfont][font size=40 bold=true]どた[resetfont][p]

#
こんな感じでフォント表示の表示形式を変えるなどすると…ちょっとバックログ見てみてください。改行されてますね。[l][r]
こちらは私の記述方法での限界です。[l][r]
わかる人が見ると卒倒しそうな書き方になっているので、直してくださる方いらっしゃいましたらよろしくお願いします。[l][r]
なお、この問題は同一方法の管理をしているセーブスロット（改）でもおこります。【序章】であげたセーブスロットの注意点はこの事です[l][r]
バックログの使用方法・セーブスロットについての注意点の説明もこれで終わりです。[p]
#
因みに初期値としては50セリフ分まで表示するようにしていて、古いものから消えていきます。[l][r]
行が多くなると、スクロールバーが出るのですが、こちらで使用しているスクロールバー部分に関しましては下記からお借りしています。[r]
http://www.baijs.nl/tinyscrollbar/[l][r]
マウスホイール、スマホのタッチも対応したすばらしいものです。[l][r]
こちらはMITとGPLのデュアルライセンスなのでそのまま同梱しています。ありがたいですね。[l][r]

@layopt layer=message1 visible=false
*title03Link
[chara_show name="title" layer=3 left=0]
[backlay]
[html top=150 left=100 name="secTitle01"]
<p class="secTitle">
章の頭からロード
</p>
[endhtml]
[wait time=2000]
[cm]
[backlay]
;章セーブ。1で取得。
[iscript]
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));
sentenceSave.title03 = 1;
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]


[back storage="bg01.jpg" time=1000]

[chara_hide layer=3 name="title"]
@layopt layer=message0 visible=true
[current layer="message0"]

[chara_show name="kanaup" layer=8 left=20]
[chara_show name="kanaup_face" layer=9 left=20]
[chara_mod name="kanaup_face" storage="kanaup/kana09.png"]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
次は【3.章の頭からロード】ですね。こちらはシナリオの頭で今まで読んだ事がなかったら、空の値をセット。[p]


[back storage="sample03.jpg" time=1000]
[cg storage="sample03.jpg" ]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
ある地点を通過した時点で通過しましたよとフラグを立てています。[p]

[back storage="sample04.jpg" time=1000]
[cg storage="sample04.jpg" ]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
章の頭からの実際のページの内容はsyouload.ksに記述しているので見てみてくださいね。[p]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
syouload.ksにもchara_newを記述してやる必要がありますのでご注意下さい。[p]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
章の頭からのロードは単純にリンクで飛ばしているだけなので、シナリオ更新時にもロードデータがずれることはありません。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana04.png"]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
因みに、先ほどから背景に表示されているスクリプトの位置を示した画像に関しては、タイトル画面のCG回想から確認できます。ご活用ください。[p]


[chara_mod name="kanaup_face" storage="none.gif"]
[chara_hide layer=9 name="kanaup_face"]
[chara_hide layer=8 name="kanaup"]



@layopt layer=message0 visible=false
*title04Link
[chara_show name="title" layer=3 left=0]
[backlay]
[html top=150 left=100 name="secTitle01"]
<p class="secTitle">
マップ解説機能
</p>
[endhtml]
[wait time=2000]
[cm]
[backlay]
;章セーブ。1で取得。
[iscript]
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));
sentenceSave.title04 = 1;
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]



[back storage="bg01.jpg" time=1000]


[chara_hide layer=3 name="title"]
@layopt layer=message0 visible=true
[current layer="message0"]

[chara_show name="kanaup" layer=8 left=20]
[chara_show name="kanaup_face" layer=9 left=20]
[chara_mod name="kanaup_face" storage="kanaup/kana08.png"]



#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
この機能はいらないよ！という感じかもしれませんが、他の部分と比較して、jsを直にいじる事に関しちょっと色々書きたい事があるのでのっけます。[p]


[back storage="sample05.jpg" time=1000]
[cg storage="sample05.jpg" ]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
まず、内容を変えたい場合の修正箇所ですが、ここです。[l][r]うわあ……見るのもつらいですね…日本語どこーって感じですね[p]
[cg storage="sample09.jpg" ]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
ここにこういった記述をする手順とツールをざっくり説明しますね。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
まず用意するものは普通のhtmlです。表示させたいhtmlを作ってください。[l][r]ただ、そのままここに入れてしまうと、日本語部分などが文字化けを起こします。その為、コードを変換する必要があります。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
コード変換には、私はこちらを使っています。http://www.crystal-creation.com/web-appli/string/encode-decode/[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
変換対象文字列にhtmlを貼り付けて、Unicodeでかき出されたものをコピーします。コピーしたものを今度はhttp://compressor.ebiene.de/で隙間を詰めて圧縮します。[p]


#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
圧縮したものを黄色い枠の部分と差し替えてください。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
先ほどあげたツールの他に、js圧縮解凍のhttp://jsbeautifier.org/やローカルサーバーのxamppなどあると開発に便利かもしれません。[p]




[chara_mod name="kanaup_face" storage="none.gif"]
[chara_hide layer=9 name="kanaup_face"]
[chara_hide layer=8 name="kanaup"]





@layopt layer=message0 visible=false

*title05Link
[chara_show name="title" layer=3 left=0]

[backlay]
[html top=150 left=100 name="secTitle01"]
<p class="secTitle">
終わりに
</p>
[endhtml]
[wait time=2000]
[cm]
[backlay]
;章セーブ。1で取得。
[iscript]
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));
sentenceSave.title05 = 1;
localStorage.setItem("sentenceSaveSet" , JSON.stringify(sentenceSave));
}
[endscript]

[back storage="bg01.jpg" time=1000]

[chara_hide layer=3 name="title"]
@layopt layer=message0 visible=true
[current layer="message0"]


[chara_show name="kanaup" layer=8 left=20]
[chara_show name="kanaup_face" layer=9 left=20]
[chara_mod name="kanaup_face" storage="kanaup/kana12.png"]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
ここに書き出したこと以外にも改造している箇所は多々あるかと思いますので、ここに書いてある箇所直しても思ったとおりに動かないこともあるかと思います。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana08.png"]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
そんなときはまずブラウザのコンソール機能などを使ってみてください。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana05.png"]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
…そういえばスキップの速度も遅めにしてたり、ちょこっと変えちゃったとこもあります。追加機能とバッティングするのか、エラーが出たからコメントアウトしたとこもあったかな…[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
こちらであげたものは、こんなやり方もあるよというサンプルなので、エラーは各自でトライアンドエラーアンドトライの精神で頑張ってください。[p]

#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
拙い追加のスクリプトですが、説明は以上になります。間違っている、回りくどい、汎用性がない追加分になっているかと思いますので、改変、プラグイン化大歓迎です。[p]

[chara_mod name="kanaup_face" storage="kanaup/kana04.png"]
#
[iscript]
$(".chara_name_area").text(sf.namae);
[endscript]
ここまで御覧下さりありがとうございました。そして、すばらしいキットを作成・公開して下さったシケモクMK様ありがとうございました！[p]


[chara_mod name="kanaup_face" storage="none.gif"]
[chara_hide layer=9 name="kanaup_face"]
[chara_hide layer=8 name="kanaup"]


@layopt layer=message0 visible=false
[back storage="bg.jpg" time=1000]
[cg storage="bg.jpg" ]

[s]
