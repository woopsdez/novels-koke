tyrano.plugin.kag.tag.eval={vital:["exp"],pm:{exp:""},start:function(e){this.kag.evalScript(e.exp);this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.clearvar={pm:{},start:function(e){this.kag.clearVariable();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.clearsysvar={start:function(){this.kag.variable.sf={};this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.close={pm:{ask:"true"},start:function(e){e.ask=="true"?confirm("ウィンドウを閉じて終了します。よろしいですね？")&&window.close():window.close()}};tyrano.plugin.kag.tag.trace={pm:{exp:""},start:function(e){var t=this.kag.embScript(e.exp);this.kag.log("trace出力："+t)}};tyrano.plugin.kag.tag.title={vital:["name"],pm:{name:""},start:function(e){if(e.name!=""){this.kag.setTitle(e.name);this.kag.ftag.nextOrder()}}};tyrano.plugin.kag.tag.iscript={start:function(e){this.kag.stat.is_script=!0;this.kag.stat.buff_script="";this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.endscript={start:function(e){this.kag.evalScript(this.kag.stat.buff_script);this.kag.stat.is_script=!1;this.kag.stat.buff_script="";this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.html={pm:{layer:"",top:0,left:0},start:function(e){this.kag.stat.is_html=!0;this.kag.stat.map_html={};this.kag.stat.map_html.buff_html="";this.kag.stat.map_html.buff_pm=e;this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.endhtml={start:function(e){var t=this,n=this.kag.stat.map_html.buff_pm,r=this.kag.stat.map_html.buff_html,i=$("<div></div>");i.css("position","absolute");i.css("top",n.top+"px");i.css("left",n.left+"px");$.setName(i,n.name);i.append($(r));var s=this.kag.layer.getFreeLayer();s.css("z-index",9999999);s.append(i);s.show();this.kag.stat.is_html=!1;this.kag.stat.map_html={};this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.emb={vital:["exp"],pm:{exp:""},start:function(e){var t=""+this.kag.embScript(e.exp);this.kag.ftag.startTag("text",{val:t})}};tyrano.plugin.kag.tag["if"]={vital:["exp"],pm:{exp:""},start:function(e){if(this.kag.embScript(e.exp)){this.kag.pushStack("if",!0);this.kag.ftag.nextOrder()}else{this.kag.pushStack("if",!1);for(var t=0;t<2e3;t++){var n=this.kag.ftag.nextOrderWithTag({"else":"",elsif:"",endif:""});if(n==1)break}t>1900&&this.kag.error("If文に誤りがあります")}}};tyrano.plugin.kag.tag.elsif={vital:["exp"],pm:{exp:""},start:function(e){if(this.kag.getStack("if")==0&&this.kag.embScript(e.exp)){this.kag.setStack("if",!0);this.kag.ftag.nextOrder()}else{for(var t=0;t<2e3;t++){var n=this.kag.ftag.nextOrderWithTag({"else":"",elsif:"",endif:""});if(n==1)break}t>1900&&this.kag.error("If文に誤りがあります")}}};tyrano.plugin.kag.tag["else"]={pm:{exp:""},start:function(e){if(this.kag.getStack("if")==0){this.kag.setStack("if",!0);this.kag.ftag.nextOrder()}else{for(var t=0;t<2e3;t++){var n=this.kag.ftag.nextOrderWithTag({endif:""});if(n==1)break}t>1900&&this.kag.error("If文に誤りがあります")}}};tyrano.plugin.kag.tag.endif={start:function(){this.kag.popStack("if");this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.call={pm:{storage:null,target:null,countpage:!0},start:function(e){var t={};t.index=this.kag.ftag.current_order_index;t.storage=this.kag.stat.current_scenario;this.kag.pushStack("call",t);e.target==null&&e.storage!=null?this.kag.ftag.nextOrderWithIndex(-1,e.storage):this.kag.ftag.nextOrderWithLabel(e.target,e.storage)}};tyrano.plugin.kag.tag["return"]={start:function(){var e=this.kag.getStack("call");this.kag.ftag.nextOrderWithIndex(e.index,e.storage);this.kag.popStack("call")}};tyrano.plugin.kag.tag.macro={vital:["name"],pm:{name:""},start:function(e){var t=this.kag.ftag.current_order_index,n=this.kag.stat.current_scenario;this.kag.stat.map_macro[e.name]={storage:n,index:t};this.kag.tmp.checking_macro=!0;for(var r=0;r<2e3;r++){var i=this.kag.ftag.nextOrderWithTag({endmacro:""});if(i==1)break}r>1900&&this.kag.error("マクロが閉じていません")}};tyrano.plugin.kag.tag.endmacro={start:function(e){if(this.kag.tmp.checking_macro==1){this.kag.tmp.checking_macro=!1;this.kag.ftag.nextOrder();return}var t=this.kag.getStack("macro");if(t){this.kag.ftag.nextOrderWithIndex(t.index,t.storage,!0);this.kag.popStack("macro");this.kag.stat.mp=this.kag.getStack("macro")}}};tyrano.plugin.kag.tag.erasemacro={vital:["name"],pm:{name:""},start:function(e){delete this.kag.stat.map_macro[e.name]}};tyrano.plugin.kag.tag.savesnap={vital:["title"],pm:{title:""},start:function(e){this.kag.menu.snapSave(e.title)}};tyrano.plugin.kag.tag.autosave={vital:[],pm:{title:""},start:function(e){var t=this;e.title==""&&(e.title=this.kag.stat.current_message_str);this.kag.menu.snapSave(e.title,function(){t.kag.menu.doSetAutoSave();t.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.autoload={vital:[],pm:{title:""},start:function(e){var t=$.getStorage(this.kag.config.projectID+"_tyrano_auto_save");this.kag.menu.loadAutoSave()}};tyrano.plugin.kag.tag.ignore={vital:["exp"],pm:{exp:""},start:function(e){if(this.kag.embScript(e.exp)){for(var t=0;t<2e3;t++){var n=this.kag.ftag.nextOrderWithTag({endignore:""});if(n==1)break}t>1900&&this.kag.error("ignoreが閉じていません")}else this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.endignore={start:function(){this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.edit={vital:["name"],pm:{name:"",length:"",color:"black",left:"0",top:"0",size:"20px",width:"200",height:"40",maxchars:"1000"},start:function(e){var t=$("<input class='text_box form' name='"+e.name+"' type='text' value='' />");e=$.minifyObject(e);var n={color:$.convertColor(e.color),left:parseInt(e.left),top:parseInt(e.top),width:e.width,height:e.height,"font-size":e.size};t.css(n);t.css("position","absolute");t.attr("maxlength",e.maxchars);this.kag.layer.getFreeLayer().append(t);this.kag.layer.getFreeLayer().show();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.preload={vital:["storage"],pm:{storage:"",wait:"false"},start:function(e){var t=this;e.wait=="true"&&this.kag.layer.hideEventLayer();var n=e.storage;if(typeof n=="object"&&n.length>0){var r=0;for(var i=0;i<n.length;i++)t.kag.preload(n[i],function(){r++;if(n.length==r){e.wait=="true"&&t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()}})}else this.kag.preload(e.storage,function(){e.wait=="true"&&t.kag.layer.showEventLayer();t.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.clearfix={pm:{name:""},start:function(e){e.name!=""?$(".fixlayer."+e.name).remove():$(".fixlayer").remove();this.kag.ftag.nextOrder()}};tyrano.plugin.kag.tag.commit={start:function(){var e=this;this.kag.layer.getFreeLayer().find(".form").each(function(){var t=$(this).attr("name"),n=$(this).val(),r=t+" = '"+n+"'";e.kag.evalScript(r);e.kag.ftag.nextOrder()})}};tyrano.plugin.kag.tag.cursor={vital:["storage"],pm:{storage:"default"},start:function(e){this.kag.setCursor(e.storage);this.kag.ftag.nextOrder()}};