tyrano.plugin.kag.tag.loadjs={vital:["storage"],pm:{storage:""},start:function(e){var t=this;$.getScript("./data/others/"+e.storage,function(){t.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.movie={vital:["storage"],pm:{storage:"",skip:!1},start:function(e){var t=this;if($.userenv()!="pc"){this.kag.layer.showEventLayer();$(".tyrano_base").bind("click.movie",function(n){t.playVideo(e);$(".tyrano_base").unbind("click.movie")})}else{if($.getBrowser()=="firefox"){alert("ご利用のブラウザでは、ムービーを再生できません。飛ばします。");t.kag.ftag.nextOrder();return}t.playVideo(e)}},playVideo:function(e){var t=this,n="./data/video/"+e.storage,r=document.createElement("video");r.src=n;r.style.backgroundColor="black";r.style.zIndex=199999;r.style.position="absolute";r.style.top="0px";r.style.left="0px";r.style.width="100%";r.style.height="100%";r.autoplay=!0;r.autobuffer=!0;r.addEventListener("ended",function(e){$(".tyrano_base").find("video").remove();t.kag.ftag.nextOrder()});e.skip=="true"&&r.addEventListener("click",function(e){$(".tyrano_base").find("video").remove();t.kag.ftag.nextOrder()});document.getElementById("tyrano_base").appendChild(r);r.load();r.play()}};tyrano.plugin.kag.tag.showsave={pm:{},start:function(e){this.kag.menu.displaySave();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.showload={pm:{},start:function(e){this.kag.menu.displayLoad();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.showmenu={pm:{},start:function(e){this.kag.menu.showMenu();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.showmenubutton={pm:{},start:function(e){$(".button_menu").show();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.hidemenubutton={pm:{},start:function(e){$(".button_menu").hide();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.skipstart={pm:{},start:function(e){this.kag.stat.is_skip=!0;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.skipstop={pm:{},start:function(e){this.kag.stat.is_skip=!1;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.anim={pm:{name:"",layer:"",left:"",top:"",width:"",height:"",opacity:"",color:"",time:"2000",effect:""},start:function(e){var t=this,n={};e.left!=""&&(n.left=e.left);e.top!=""&&(n.top=e.top);e.width!=""&&(n.width=e.width);e.height!=""&&(n.height=e.height);e.opacity!=""&&(n.opacity=$.convertOpacity(e.opacity));e.color!=""&&(n.color=$.convertColor(e.color));var r="";if(e.name!=""){t.kag.pushAnimStack();$("."+e.name).animate(n,parseInt(e.time),e.effect,function(){t.kag.popAnimStack()})}else if(e.layer!=""){var i=e.layer+"_fore";e.layer=="free"&&(i="layer_free");var s=$("."+i).children();s.each(function(){t.kag.pushAnimStack();$(this).animate(n,parseInt(e.time),e.effect,function(){t.kag.popAnimStack()})})}this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.wa={start:function(e){this.kag.tmp.num_anim>0?this.kag.layer.hideEventLayer():this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.stopanim={vital:["name"],pm:{name:""},start:function(e){$("."+e.name).stop();this.kag.popAnimStack();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.keyframe={vital:["name"],pm:{name:""},start:function(e){this.kag.stat.current_keyframe=e.name;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.endkeyframe={pm:{},start:function(e){this.kag.stat.current_keyframe="";this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.frame={vital:["p"],pm:{p:""},master_trans:{x:"",y:"",z:"",translate:"",translate3d:"",translateX:"",translateY:"",translateZ:"",scale:"",scale3d:"",scaleX:"",scaleY:"",scaleZ:"",rotate:"",rotate3d:"",rotateX:"",rotateY:"",rotateZ:"",skew:"",skewX:"",skewY:"",perspective:""},start:function(e){var t=e.p;delete e.p;if(!this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]){this.kag.stat.map_keyframe[this.kag.stat.current_keyframe]={};this.kag.stat.map_keyframe[this.kag.stat.current_keyframe].frames={};this.kag.stat.map_keyframe[this.kag.stat.current_keyframe].styles={}}var n={},r={};for(key in e)this.master_trans[key]==""?n[key]=e[key]:r[key]=e[key];this.kag.stat.map_keyframe[this.kag.stat.current_keyframe].frames[t]={trans:n,styles:r};this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.kanim={vital:["keyframe"],pm:{name:"",layer:"",keyframe:""},start:function(e){var t=this,n=this.kag.stat.map_keyframe[e.keyframe],r="."+e.name;n.config=e;e.time&&(e.duration=parseInt(e.time)+"ms");n.complete=function(){t.kag.popAnimStack()};if(e.name!=""){delete e.name;delete e.keyframe;t.kag.pushAnimStack();$(r).a3d(n)}else if(e.layer!=""){var i=e.layer+"_fore";e.layer=="free"&&(i="layer_free");delete e.name;delete e.keyframe;delete e.layer;var s=$("."+i).children();s.each(function(){t.kag.pushAnimStack();$(this).a3d(n)})}this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_ptext={pm:{name:"",face:""},start:function(e){if(e.name=="")$("."+this.kag.stat.chara_ptext).html("");else{var t=this.kag.stat.charas[e.name];t?$("."+this.kag.stat.chara_ptext).html(t.jname):$("."+this.kag.stat.chara_ptext).html(e.name)}if(e.face!=""){if(!this.kag.stat.charas[e.name].map_face[e.face]){this.kag.error("指定されたキャラクター「"+e.name+"」もしくはface:「"+e.face+"」は定義されていません。もう一度確認をお願いします");return}var n=this.kag.stat.charas[e.name].map_face[e.face];$("."+e.name).attr("src",n)}this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_config={pm:{pos_mode:"true",effect:"swing",ptext:"",time:"600",memory:"false",anim:"true"},start:function(e){this.kag.stat.chara_pos_mode=e.pos_mode;this.kag.stat.chara_effect=e.effect;this.kag.stat.chara_ptext=e.ptext;this.kag.stat.chara_time=e.time;this.kag.stat.chara_memory=e.memory;this.kag.stat.chara_anim=e.anim;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_new={vital:["name","storage"],pm:{name:"",storage:"",width:"",height:"",jname:"",visible:"false",map_face:{}},start:function(e){var t="./data/fgimage/"+e.storage;$.isHTTP(e.storage)&&(t=e.storage);e.map_face["default"]=e.storage;this.kag.preload(t);e.visible=="true";this.kag.stat.charas[e.name]=e;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_show={vital:["name"],pm:{name:"",page:"fore",layer:"0",wait:"true",left:"0",top:"0",time:1e3},start:function(e){var t=this,n=this.kag.stat.charas[e.name];if(n==null){this.kag.error("指定されたキャラクター「"+e.name+"」は定義されていません。[chara_new]で定義してください");return}var r="./data/fgimage/"+n.storage;$.isHTTP(n.storage)&&(r=n.storage);var i=$("<img />");i.attr("src",r);i.css("position","absolute");i.css("display","none");this.kag.preload(r,function(){var r=t.kag.layer.getLayer(e.layer,e.page);r.append(i).show();var s=1;t.kag.layer.hideEventLayer();if(t.kag.stat.chara_pos_mode=="true"&&e.top=="0"&&e.left=="0"){i.css("bottom","0px");var o=r.find(".tyrano_chara").length,u=parseInt(t.kag.config.scWidth),a=parseInt(t.kag.config.scHeight),f=Math.floor(parseInt(i.css("width"))/2),l=Math.floor(u/(o+2)),c=l,h=l-f;i.css("left",h+"px");r.find(".tyrano_chara").each(function(){s++;c+=l;var n=$(this);f=Math.floor(parseInt(n.css("width"))/2);var r=c-f;t.kag.stat.chara_anim=="false"?n.fadeTo(parseInt(e.time),0,function(){n.css("left",r);n.fadeTo(parseInt(e.time),1,function(){s--;if(s==0){t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()}})}):n.animate({left:r},parseInt(e.time),t.kag.stat.chara_effect,function(){s--;if(s==0){t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()}})})}else{i.css("top",e.top+"px");i.css("left",e.left+"px")}$.setName(i,n.name);i.addClass("tyrano_chara");n.width!=""&&i.css("width",n.width+"px");n.height!=""&&i.css("height",n.height+"px");e.wait!="true"&&t.kag.ftag.nextOrder();i.animate({opacity:"show"},{duration:parseInt(e.time),easing:t.kag.stat.chara_effect,complete:function(){s--;if(s==0){t.kag.layer.showEventLayer();e.wait=="true"&&t.kag.ftag.nextOrder()}}})})}};tyrano.plugin.kag.tag.chara_hide={vital:["name"],pm:{page:"fore",layer:"0",name:"",wait:"true",time:1e3},start:function(e){var t=this,n=this.kag.layer.getLayer(e.layer,e.page),r=n.find("."+e.name),i=0;t.kag.layer.hideEventLayer();r.animate({opacity:"hide"},{duration:e.time,easing:"linear",complete:function(){r.remove();if(t.kag.stat.chara_pos_mode=="true"){var s=n.find(".tyrano_chara").length,o=parseInt(t.kag.config.scWidth),u=parseInt(t.kag.config.scHeight),a=Math.floor(o/(s+1)),f=0;if(s==0){t.kag.layer.showEventLayer();t.kag.ftag.nextOrder();return}n.find(".tyrano_chara").each(function(){i++;f+=a;var n=$(this),r=Math.floor(parseInt(n.css("width"))/2),s=f-r;t.kag.stat.chara_anim=="false"?n.fadeTo(parseInt(e.time),0,function(){n.css("left",s);n.fadeTo(parseInt(e.time),1,function(){i--;if(i==0){t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()}})}):n.animate({left:s},parseInt(e.time),t.kag.stat.chara_effect,function(){i--;if(i==0){t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()}})})}else t.kag.layer.showEventLayer()}});this.kag.stat.chara_memory=="false"&&(this.kag.stat.charas[e.name].storage=this.kag.stat.charas[e.name].map_face["default"]);e.wait!="true"&&this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_delete={vital:["name"],pm:{name:""},start:function(e){delete this.kag.stat.charas[e.name];this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.chara_mod={vital:["name"],pm:{name:"",face:"",storage:"",time:""},start:function(e){var t=this,n="";if(e.face!=""){if(!this.kag.stat.charas[e.name].map_face[e.face]){this.kag.error("指定されたキャラクター「"+e.name+"」もしくはface:「"+e.face+"」は定義されていません。もう一度確認をお願いします");return}n=this.kag.stat.charas[e.name].map_face[e.face]}else $.isHTTP(e.storage)?n=e.storage:n=e.storage;if($(".layer_fore").find("."+e.name).size()==0){this.kag.stat.charas[e.name].storage=n;this.kag.ftag.nextOrder();return}var r=this.kag.stat.chara_time;e.time!=""&&(r=e.time);$(".layer_fore").find("."+e.name).attr("src")=="./data/fgimage/"+n&&(r="0");if(r!="0"){var i=$(".layer_fore").find("."+e.name).clone();i.attr("src","./data/fgimage/"+n);i.css("opacity",0);var s=$(".layer_fore").find("."+e.name);s.after(i);s.fadeTo(parseInt(r),0,function(){});i.fadeTo(parseInt(r),1,function(){s.remove();t.kag.ftag.nextOrder()})}else{$(".layer_fore").find("."+e.name).attr("src","./data/fgimage/"+n);this.kag.ftag.nextOrder()}this.kag.stat.charas[e.name].storage=n}};tyrano.plugin.kag.tag.chara_face={vital:["name","face","storage"],pm:{name:"",face:"",storage:""},start:function(e){var t="";$.isHTTP(e.storage)?t=e.storage:t=e.storage;this.kag.stat.charas[e.name].map_face[e.face]=t;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.showlog={pm:{},start:function(e){this.kag.menu.displayLog();this.kag.ftag.nextOrder()}};