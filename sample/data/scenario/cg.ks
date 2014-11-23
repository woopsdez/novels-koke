;=========================================
; CG モード　画面作成
;=========================================
*start
[cm]




[chara_new name="bgCommon" storage="bgCommon.png"]

[chara_show name="bgCommon" layer=4 left=0 top=0]

[layopt layer=5 visible=true]
[ptext name="h1Style" layer=5 page=fore text="CGモード" x=0 y=20 visible=true]


[iscript]
    
    tf.page = 0;
    tf.cg_index = 0; 
    
    tf.cg_length = tf.cg_array.length;
    
    tf.selected_cg_image = ""; //選択されたCGを一時的に保管
    
[endscript]



*cgpage
[layopt layer=6 visible=true]
[cm]
[button graphic="menu_button_close.png" target="*backtitle" x=840 y=0 ]




[iscript]
    tf.tmp_index = 0;
    tf.cg_index = 8 * tf.page;
    tf.top = 100;
    tf.left = 100;
    
[endscript]

*cgview

[if exp ="sf.cg_viewd[tf.cg_array[tf.cg_index]]" ]

    [button graphic=&tf.cg_array[tf.cg_index] x=&tf.left y=&tf.top width=240 height=135 exp="tf.selected_cg_image = tf.cg_array[preexp]" target="*clickcg" folder="bgimage" preexp="tf.cg_index" ]
    
[else]

    [button graphic=noise.png x=&tf.left y=&tf.top width=240 height=135 folder="bgimage" target="*no_image"]
    
[endif]

[iscript]

    tf.tmp_index++;
    tf.cg_index++;
    tf.left += 240 + 10;

[endscript]

;1ページに8 枚

[if exp=" tf.tmp_index == 8 || tf.cg_index >= tf.cg_length"]
    @jump target="*endpage"
[endif]

[if exp="tf.tmp_index % 3 == 0 "]
    [iscript]
        tf.top += 135 + 10;
        tf.left = 100;
    [endscript]
[endif]

@jump target="*cgview"

*endpage

[if exp="tf.page !=0"]
    
    [button target="*backpage" graphic=backpage.gif x=640 y=600  ]
            
[endif]

[if exp="tf.cg_length > tf.cg_index"]

    [button target="*nextpage" graphic=nextpage.gif x=800 y=600  ]

[endif]


[s]


*backtitle
[cm]

[freeimage layer=5]
[freeimage layer=6]
[chara_hide layer=4 name="bgCommon"]
;@jump storage=title.ks
[jump storage=title.ks target=*title]


*nextpage
[emb exp="tf.page++;"]
@jump target="*cgpage"


*backpage
[emb exp="tf.page--;"]
@jump target="*cgpage"

*clickcg
[cm]
[image storage=&tf.selected_cg_image folder="bgimage"  layer=6 ]
[l]
[freeimage layer=6]
@jump  target=*cgpage
[s]

*no_image

@jump  target=*cgpage



