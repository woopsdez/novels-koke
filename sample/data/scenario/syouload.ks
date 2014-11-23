;==============================
; タイトル画面
;==============================
[macro name="charaNewMacro"]


[chara_new name="kanaup" storage="kanaup/kana00.png"]
[chara_new name="kanaup_face" storage="none.gif"]
[chara_new name="title" storage="bg/bg00-01.png"]


[endmacro]

[cm]

[html name=dataBg]




<div class="dataStyleWrap">
  <div class="dataStyle pink">
    <h1>章の頭からスタート</h1>
    <div class="columWrap">
      <div class="colum">
        <ul><li class="title01"><h2>概要</h2></li>
        <li class="title02"><h2>バックログ</h2></li>
        <li class="title03"><h2>章の頭からロード</h2></li>
        <li class="title04"><h2>マップ解説機能</h2></li></ul>
        
        
        
      </div>
      <div class="colum">
      
      
        <ul><li class="title05"><h2>終わりに</h2></li></ul>
      </div>
    </div>
  <p class="close">&nbsp;</p>
  </div>
</div>





[locate x=840 y=0]
[button name="button_title_start" graphic="none.gif" width="120" height="120" target="*close"]


[locate x=72 y=115]
[button name="button_title01_start" graphic="none.gif" width="362" height="60" target="*title01"]
[locate x=72 y=202]
[button name="button_title02_start" graphic="none.gif" width="362" height="60" target="*title02"]
[locate x=72 y=289]
[button name="button_title03_start" graphic="none.gif" width="362" height="60" target="*title03"]
[locate x=72 y=376]
[button name="button_title04_start" graphic="none.gif" width="362" height="60" target="*title04"]
[locate x=527 y=115]
[button name="button_title05_start" graphic="none.gif" width="362" height="60" target="*title05"]





[endhtml]

[iscript]
$(".button_title01_start,.button_title02_start,.button_title03_start,.button_title04_start,.button_title05_start,.button_title06_start").hide();

$(".columWrap ul li h2").hide();
if(JSON.parse(localStorage.getItem("sentenceSaveSet"))!=""&&JSON.parse(localStorage.getItem("sentenceSaveSet"))!=null){
sentenceSave = JSON.parse(localStorage.getItem("sentenceSaveSet"));

if(sentenceSave.title01 == 1){
$(".columWrap ul li.title01 h2").show();
$(".button_title01_start").show();
}

if(sentenceSave.title02 == 1){
$(".columWrap ul li.title02 h2").show();
$(".button_title02_start").show();
}

if(sentenceSave.title03 == 1){
$(".columWrap ul li.title03 h2").show();
$(".button_title03_start").show();
}


if(sentenceSave.title04 == 1){
$(".columWrap ul li.title04 h2").show();
$(".button_title04_start").show();
}

if(sentenceSave.title05 == 1){
$(".columWrap ul li.title05 h2").show();
$(".button_title05_start").show();
}



}
[endscript]
[s]
;-------ボタンが押されたときの処理

*close

[cm]
[jump storage=title.ks target=*fromData]
;------シナリオの最初にジャンプする

*title01
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]
[charaNewMacro]
[showmenubutton]


[cm]
;------title01にジャンプする
[jump storage=scene1.ks target=*title01Link]


*title02
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]
[charaNewMacro]
[showmenubutton]


[cm]
;------title02にジャンプする
[jump storage=scene1.ks target=*title02Link]


*title03
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]
[charaNewMacro]
[showmenubutton]


[cm]
;------title03にジャンプする
[jump storage=scene1.ks target=*title03Link]


*title04
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]
[charaNewMacro]
[showmenubutton]


[cm]
;------title04にジャンプする
[jump storage=scene1.ks target=*title04Link]


*title05
[iscript]
localStorage.setItem("backLogFlag" , 1);
[endscript]
[charaNewMacro]
[showmenubutton]


[cm]
;------title05にジャンプする
[jump storage=scene1.ks target=*title05Link]




[s]
