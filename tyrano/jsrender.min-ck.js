/*! JsRender v1.0.0-beta: http://github.com/BorisMoore/jsrender and http://jsviews.com/jsviews
informal pre V1.0 commit counter: 47 */(function(e,t,n){"use strict";function r(e,t){t&&t.onError&&t.onError(e)===!1||(this.name="JsRender Error",this.message=e||"JsRender error")}function i(e,t){var n;e=e||{};for(n in t)e[n]=t[n];return e}function s(e,t,n){return(!it.rTag||e)&&(_=e?e.charAt(0):_,D=e?e.charAt(1):D,P=t?t.charAt(0):P,H=t?t.charAt(1):H,B=n||B,e="\\"+_+"(\\"+B+")?\\"+D,t="\\"+P+"\\"+H,O="(?:(?:(\\w+(?=[\\/\\s\\"+P+"]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\"+P+"]|\\"+P+"(?!\\"+H+"))*?)",it.rTag=O+")",O=new RegExp(e+O+"(\\/)?|(?:\\/(\\w+)))"+t,"g"),M=new RegExp("<.*>|([^\\\\]|^)[{}]|"+e+".*"+t)),[_,D,P,H,B]}function o(e,t){t||(t=e,e=n);var r,i,s,o,u=this,a=!t||t==="root";if(e){if(o=u.type===t?u:n,!o)if(r=u.views,u._.useKey){for(i in r)if(o=r[i].get(e,t))break}else for(i=0,s=r.length;!o&&i<s;i++)o=r[i].get(e,t)}else if(a)while(u.parent.parent)o=u=u.parent;else while(u&&!o)o=u.type===t?u:n,u=u.parent;return o}function u(){var e=this.get("item");return e?e.index:n}function a(){return this.index}function f(e){var t,r=this,s=r.linkCtx,o=(r.ctx||{})[e];return o===n&&s&&s.ctx&&(o=s.ctx[e]),o===n&&(o=nt[e]),o&&typeof o=="function"&&(t=function(){return o.apply(this||r,arguments)},i(t,o)),t||o}function l(e,t,r){var i,s,o,u=+r===r&&r,a=t.linkCtx;return u&&(r=(u=t.tmpl.bnds[u-1])(t.data,t,Z)),o=r.args[0],(e||u)&&(s=a&&a.tag||{_:{inline:!a,bnd:u},tagName:e+":",flow:!0,_is:"tag"},a&&(a.tag=s,s.linkCtx=s.linkCtx||a,r.ctx=N(r.ctx,a.view.ctx)),s.tagCtx=r,r.view=t,s.ctx=r.ctx||{},delete r.ctx,t._.tag=s,e=e!=="true"&&e,e&&((i=t.getRsc("converters",e))||w("Unknown converter: {{"+e+":"))&&(s.depends=i.depends,o=i.apply(s,r.args)),o=u&&t._.onRender?t._.onRender(o,t,u):o,t._.tag=n),o}function c(e,t){for(var r,i,s=this;r===n&&s;)i=s.tmpl[e],r=i&&i[t],s=s.parent;return r||Z[e][t]}function h(e,t,r,s,o){var u,a,f,l,c,h,p,d,v,m,g,y,E,S,x="",T=+s===s&&s,C=t.linkCtx||0,k=t.ctx,L=r||t.tmpl,A=t._;for(e._is==="tag"&&(a=e,e=a.tagName),T&&(s=(y=L.bnds[T-1])(t.data,t,Z)),p=s.length,a=a||C.tag,h=0;h<p;h++)v=s[h],g=v.tmpl,g=v.content=g&&L.tmpls[g-1],r=v.props.tmpl,h||r&&a||(E=t.getRsc("tags",e)||w("Unknown tag: {{"+e+"}}")),r=r||(a?a:E).template||g,r=""+r===r?t.getRsc("templates",r)||et(r):r,i(v,{tmpl:r,render:b,index:h,view:t,ctx:N(v.ctx,k)}),a||(E._ctr?(a=new E._ctr,S=!!a.init,a.attr=a.attr||E.attr||n):a={render:E.render},a._={inline:!C},C&&(C.attr=a.attr=C.attr||a.attr,C.tag=a,a.linkCtx=C),(a._.bnd=y||C.fn)?a._.arrVws={}:a.dataBoundOnly&&w("{^{"+e+"}} tag must be data-bound"),a.tagName=e,a.parent=c=k&&k.tag,a._is="tag",a._def=E),A.tag=a,v.tag=a,a.tagCtxs=s,a.flow||(m=v.ctx=v.ctx||{},f=a.parents=m.parentTags=k&&N(m.parentTags,k.parentTags)||{},c&&(f[c.tagName]=c),m.tag=a);for(a.rendering={},h=0;h<p;h++)v=a.tagCtx=s[h],a.ctx=v.ctx,!h&&S&&(a.init(v,C,a.ctx),S=n),d=n,(u=a.render)&&(d=u.apply(a,v.args)),d=d!==n?d:v.tmpl&&v.render()||(o?n:""),x=x?x+(d||""):d;return delete a.rendering,a.tagCtx=a.tagCtxs[0],a.ctx=a.tagCtx.ctx,a._.inline&&(l=a.attr)&&l!=="html"&&(x=l==="text"?tt.html(x):""),T&&t._.onRender?t._.onRender(x,t,T):x}function p(e,t,n,r,i,s,l,h){var p,d,v,m=t==="array",g={key:0,useKey:m?0:1,id:""+J++,onRender:h,bnds:{}},y={data:r,tmpl:i,content:l,views:m?[]:{},parent:n,type:t,get:o,getIndex:a,getRsc:c,hlp:f,_:g,_is:"view"};return n?(p=n.views,d=n._,d.useKey?(p[g.key="_"+d.useKey++]=y,y.index=st.debugMode?ot:"",y.getIndex=u,v=d.tag,g.bnd=m&&(!v||!!v._.bnd&&v)):p.splice(g.key=y.index=s,0,y),y.ctx=e||n.ctx):y.ctx=e,y}function d(e){var t,n,r,i,s;for(t in Y)if(i=Y[t],(s=i.compile)&&(n=e[t+"s"]))for(r in n)n[r]=s(r,n[r],e,t,i)}function v(e,t,n){var r,i;return typeof t=="function"?t={depends:t.depends,render:t}:((i=t.template)&&(t.template=""+i===i?et[i]||et(i):i),t.init!==!1&&(r=t._ctr=function(){},(r.prototype=t).constructor=r)),n&&(t._parentTmpl=n),t}function m(r,i,s,o,u,a){function f(n){if(""+n===n||n.nodeType>0){try{c=n.nodeType>0?n:!M.test(n)&&t&&t(e.document).find(n)[0]}catch(i){}return c&&(n=c.getAttribute(Q),r=r||n,n=et[n],n||(r=r||"_"+$++,c.setAttribute(Q,r),n=et[r]=m(r,c.innerHTML,s,o,u,a))),n}}var l,c;return i=i||"",l=f(i),a=a||(i.markup?i:{}),a.tmplName=r,s&&(a._parentTmpl=s),!l&&i.markup&&(l=f(i.markup))&&l.fn&&(l.debug!==i.debug||l.allowCode!==i.allowCode)&&(l=l.markup),l!==n?(r&&!s&&(G[r]=function(){return i.render.apply(i,arguments)}),l.fn||i.fn?l.fn&&(i=r&&r!==l.tmplName?N(a,l):l):(i=g(l,a),S(l.replace(R,"\\$&"),i)),d(a),i):void 0}function g(e,t){var n,r=st.wrapMap||{},s=i({markup:e,tmpls:[],links:{},tags:{},bnds:[],_is:"template",render:b},t);return t.htmlTag||(n=W.exec(e),s.htmlTag=n?n[1].toLowerCase():""),n=r[s.htmlTag],n&&n!==r.div&&(s.markup=L.trim(s.markup)),s}function y(e,t){function r(s,o,u){var a,f,l,c;if(s&&""+s!==s&&!s.nodeType&&!s.markup){for(l in s)r(l,s[l],o);return Z}return o===n&&(o=s,s=n),s&&""+s!==s&&(u=o,o=s,s=n),c=u?u[i]=u[i]||{}:r,f=t.compile,(a=it.onBeforeStoreItem)&&(f=a(c,s,o,f)||f),s?o===null?delete c[s]:c[s]=f?o=f(s,o,u,e,t):o:o=f(n,o),f&&o&&(o._is=e),(a=it.onStoreItem)&&a(c,s,o,f),o}var i=e+"s";Z[i]=r;Y[e]=t}function b(e,t,r,i,s,o){var u,a,f,l,c,h,d,v,m,g,y,b,E,S=this,x=!S.attr||S.attr==="html",T="";if(i===!0&&(d=!0,i=0),S.tag?(v=S,S=S.tag,g=S._,b=S.tagName,E=v.tmpl,t=N(t,S.ctx),m=v.content,v.props.link===!1&&(t=t||{},t.link=!1),r=r||v.view,e=e===n?r:e):E=S.jquery&&(S[0]||w('Unknown template: "'+S.selector+'"'))||S,E&&(!r&&e&&e._is==="view"&&(r=e),r&&(m=m||r.content,o=o||r._.onRender,e===r&&(e=r.data,s=!0),t=N(t,r.ctx)),r&&r.data!==n||((t=t||{}).root=e),E.fn||(E=et[E]||et(E)),E)){if(o=(t&&t.link)!==!1&&x&&o,y=o,o===!0&&(y=n,o=r._.onRender),t=E.helpers?N(E.helpers,t):t,L.isArray(e)&&!s)for(l=d?r:i!==n&&r||p(t,"array",r,e,E,i,m,o),u=0,a=e.length;u<a;u++)f=e[u],c=p(t,"item",l,f,E,(i||0)+u,m,o),h=E.fn(f,c,Z),T+=l._.onRender?l._.onRender(h,c):h;else l=d?r:p(t,b||"data",r,e,E,i,m,o),g&&!S.flow&&(l.tag=S),T+=E.fn(e,l,Z);return y?y(T,l):T}return""}function w(e){throw new it.Error(e)}function E(e){w("Syntax error\n"+e)}function S(e,t,n,r){function i(t){t-=l;t&&h.push(e.substr(l,t).replace(I,"\\n"))}function s(t){t&&E('Unmatched or missing tag: "{{/'+t+'}}" in template:\n'+e)}function o(o,f,d,v,m,g,y,b,w,S,x,N){g&&(m=":",v="html");S=S||n;var C,k,L=f&&[],A="",O="",M="",_=!S&&!m&&!y;d=d||m;i(N);l=N+o.length;b?a&&h.push(["*","\n"+w.replace(q,"$1")+"\n"]):d?(d==="else"&&(z.test(w)&&E('for "{{else if expr}}" use "{{else expr}}"'),L=p[6],p[7]=e.substring(p[7],N),p=c.pop(),h=p[3],_=!0),w&&(w=w.replace(I," "),A=T(w,L,t).replace(U,function(e,t,n){return t?M+=n+",":O+=n+",",""})),O=O.slice(0,-1),A=A.slice(0,-1),C=O&&O.indexOf("noerror:true")+1&&O||"",u=[d,v||!!r||"",A,_&&[],'params:"'+w+'",props:{'+O+"}"+(M?",ctx:{"+M.slice(0,-1)+"}":""),C,L||0],h.push(u),_&&(c.push(p),p=u,p[7]=l)):x&&(k=p[0],s(x!==k&&k!=="else"&&x),p[7]=e.substring(p[7],N),p=c.pop());s(!p&&x);h=p[3]}var u,a=t&&t.allowCode,f=[],l=0,c=[],h=f,p=[,,,f];return s(c[0]&&c[0][3].pop()[0]),e.replace(O,o),i(e.length),(l=f[f.length-1])&&s(""+l!==l&&+l[7]===l[7]&&l[0]),x(f,n?e:t,n)}function x(e,n,r){var i,s,o,u,a,f,l,c,h,p,d,v,m,y,b,w,S,T,N,C,k,L,A,O,M,_=0,D="",P="",H={},B=e.length;for(""+n===n?(b=r?'data-link="'+n.replace(I," ").slice(1,-1)+'"':n,n=0):(b=n.tmplName||"unnamed",n.allowCode&&(H.allowCode=!0),n.debug&&(H.debug=!0),v=n.bnds,y=n.tmpls),i=0;i<B;i++)if(s=e[i],""+s===s)D+='\nret+="'+s+'";';else if(o=s[0],o==="*")D+=""+s[1];else{if(u=s[1],a=s[2],T=s[3],f=s[4],P=s[5],N=s[7],(L=o==="else")||(_=0,v&&(m=s[6])&&(_=v.push(m))),(A=o===":")?(u&&(o=u==="html"?">":u+o),P&&(O="prm"+i,P="try{var "+O+"=["+a+"][0];}catch(e){"+O+'="";}\n',a=O)):(T&&(w=g(N,H),w.tmplName=b+"/"+o,x(T,w),y.push(w)),L||(S=o,k=D,D=""),C=e[i+1],C=C&&C[0]==="else"),f+=",args:["+a+"]}",A&&m||u&&o!==">"){if(M=new Function("data,view,j,u"," // "+b+" "+_+" "+o+"\n"+P+"return {"+f+";"),M.paths=m,M._ctxs=o,r)return M;d=1}if(D+=A?"\n"+(m?"":P)+(r?"return ":"ret+=")+(d?(d=0,p=!0,'c("'+u+'",view,'+(m?(v[_-1]=M,_):"{"+f)+");"):o===">"?(c=!0,"h("+a+");"):(h=!0,"(v="+a+")!="+(r?"=":"")+'u?v:"";')):(l=!0,"{view:view,tmpl:"+(T?y.length:"0")+","+f+","),S&&!C){if(D="["+D.slice(0,-1)+"]",(r||m)&&(D=new Function("data,view,j,u"," // "+b+" "+_+" "+S+"\nreturn "+D+";"),m&&((v[_-1]=D).paths=m),D._ctxs=o,r))return D;D=k+'\nret+=t("'+S+'",view,this,'+(_||D)+");";m=0;S=0}}D="// "+b+"\nvar j=j||"+(t?"jQuery.":"js")+"views"+(h?",v":"")+(l?",t=j._tag":"")+(p?",c=j._cnvt":"")+(c?",h=j.converters.html":"")+(r?";\n":',ret="";\n')+(st.tryCatch?"try{\n":"")+(H.debug?"debugger;":"")+D+(r?"\n":"\nreturn ret;\n")+(st.tryCatch?"\n}catch(e){return j._err(e);}":"");try{D=new Function("data,view,j,u",D)}catch(j){E("Compiled template code:\n\n"+D,j)}return n&&(n.fn=D),D}function T(e,t,n){function r(r,p,d,v,m,g,y,b,w,x,N,C,k,L,A,O,M,B,F,I){function q(e,n,r,u,a,f,l,c){if(r&&(t&&(i==="linkTo"&&(s=t._jsvto=t._jsvto||[],s.push(m)),(!i||o)&&t.push(m.slice(n.length))),r!==".")){var h=(u?'view.hlp("'+u+'")':a?"view":"data")+(c?(f?"."+f:u?"":a?"":"."+r)+(l||""):(c=u?"":a?f||"":r,""));return h+=c?"."+c:"",n+(h.slice(0,9)==="view.data"?h.slice(5):h)}return e}var R;if(g=g||"",d=d||p||C,m=m||w,x=x||M||"",!y)return t&&O&&!h&&!c&&(!i||o||s)&&(R=f[l],I.length-1>F-R&&(R=I.slice(R,F+1),O=D+":"+R+P,O=u[O]=u[O]||S(_+O+H,n,!0),O.paths||T(R,O.paths=[],n),(s||t).push({_jsvOb:O}))),h?(h=!k,h?r:'"'):c?(c=!L,c?r:'"'):(d?(l++,f[l]=F++,d):"")+(B?l?"":i?(i=o=s=!1,"\b"):",":b?(l&&E(e),i=m,o=v,"\b"+m+":"):m?m.split("^").join(".").replace(j,q)+(x?(a[++l]=!0,m.charAt(0)!=="."&&(f[l]=F),x):g):g?g:A?(a[l--]=!1,A)+(x?(a[++l]=!0,x):""):N?(a[l]||E(e),","):p?"":(h=k,c=L,'"'));E(e)}var i,s,o,u=n.links,a={},f={0:-1},l=0,c=!1,h=!1;return(e+" ").replace(/\)\^/g,").").replace(F,r)}function N(e,t){return e&&e!==t?t?i(i({},t),e):e:t&&i({},t)}function C(e){return K[e]||(K[e]="&#"+e.charCodeAt(0)+";")}function k(e){var t=this,r=t.tagCtx,i=!arguments.length,s="",o=i||0;return t.rendering.done||(i?s=n:e!==n&&(e=t.prep?t.prep(e):e,s+=r.render(e),o+=L.isArray(e)?e.length:1),(t.rendering.done=o)&&(t.selected=r.index)),s}if((!t||!t.views)&&!e.jsviews){var L,A,O,M,_="{",D="{",P="}",H="}",B="^",j=/^(!*?)(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,F=/(\()(?=\s*\()|(?:([([])\s*)?(?:(\^?)(!*?[#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*:?\/]|(=))\s*|(!*?[#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^|\s*$)|[)\]])([([]?))|(\s+)/g,I=/[ \t]*(\r\n|\n|\r)/g,q=/\\(['"])/g,R=/['"\\]/g,U=/\x08(~)?([^\x08]+)\x08/g,z=/^if\s/,W=/<(\w+)[>\s]/,X=/[\x00`><"'&]/g,V=X,$=0,J=0,K={"&":"&amp;","<":"&lt;",">":"&gt;","\0":"&#0;","'":"&#39;",'"':"&#34;","`":"&#96;"},Q="data-jsv-tmpl",G={},Y={template:{compile:m},tag:{compile:v},helper:{},converter:{}},Z={jsviews:"v1.0.0-beta",render:G,settings:{delimiters:s,debugMode:!0,tryCatch:!0},sub:{View:p,Error:r,tmplFn:S,parse:T,extend:i,error:w,syntaxError:E},_cnvt:l,_tag:h,_err:function(e){return st.debugMode?"Error: "+(e.message||e)+". ":""}};(r.prototype=new Error).constructor=r;u.depends=function(){return[this.get("item"),"index"]};a.depends=function(){return["index"]};for(A in Y)y(A,Y[A]);var et=Z.templates,tt=Z.converters,nt=Z.helpers,rt=Z.tags,it=Z.sub,st=Z.settings,ot="Error: #index in nested view: use #getIndex()";t?(L=t,L.fn.render=b):(L=e.jsviews={},L.isArray=Array&&Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"});L.render=G;L.views=Z;L.templates=et=Z.templates;rt({"else":function(){},"if":{render:function(e){var t=this;return t.rendering.done||!e&&(arguments.length||!t.tagCtx.index)?"":(t.rendering.done=!0,t.selected=t.tagCtx.index,t.tagCtx.render())},onUpdate:function(e,t,n){for(var r,i,s=0;(r=this.tagCtxs[s])&&r.args.length;s++)if(r=r.args[0],i=!r!=!n[s].args[0],!!r||i)return i;return!1},flow:!0},"for":{render:k,onArrayChange:function(e,t){var n,r=this,i=t.change;if(this.tagCtxs[1]&&(i==="insert"&&e.target.length===t.items.length||i==="remove"&&!e.target.length||i==="refresh"&&!t.oldItems.length!=!e.target.length))this.refresh();else for(n in r._.arrVws)n=r._.arrVws[n],n.data===e.target&&n._.onArrayChange.apply(n,arguments);e.done=!0},flow:!0},props:{prep:function(e){var t,n=[];for(t in e)n.push({key:t,prop:e[t]});return n},render:k,flow:!0},include:{flow:!0},"*":{render:function(e){return e},flow:!0}});tt({html:function(e){return e!=n?String(e).replace(V,C):""},attr:function(e){return e!=n?String(e).replace(X,C):e===null?e:""},url:function(e){return e!=n?encodeURI(String(e)):e===null?e:""}});s()}})(this,this.jQuery);