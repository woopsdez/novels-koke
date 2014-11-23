;==============================
; タイトル画面
;==============================

[cm]

[html name=dataBg]

<div class="dataStyleWrap">
  <div class="dataStyle">
    <h1>このゲームについて</h1>
    <p class="txt">ここに本文が入ります。</p>

    <div class="columWrap">
      <div class="colum">
        <h2>タイトル</h2>
        <p class="txt">ここに本文が入ります。</p>
        
        <h2>タイトル</h2>
        <p class="txt">ここに本文が入ります。</p>


        <h2>タイトル</h2>
        <p class="txt">ここに本文が入ります。</p>
      </div>
      <div class="colum">
        
        <h2>タイトル</h2>
        <p class="txt">ここに本文が入ります。</p>
  
      </div>
    </div>
  <p class="close"></p>
  </div>
</div>






[locate x=840 y=0]
[button name="button_title_start" graphic="none.gif" width="120" height="120" target="*close"]





[endhtml]
[s]
;-------ボタンが押されたときの処理

*close

[cm]
;シナリオの最初にジャンプする
[jump storage=title.ks target=*fromData]

[s]
