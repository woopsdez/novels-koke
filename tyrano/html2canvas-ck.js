/*
  html2canvas 0.4.1 <http://html2canvas.hertzen.com>
  Copyright (c) 2013 Niklas von Hertzen

  Released under MIT License
*/(function(e,t,n){"use strict";function u(e,t,n){var r=e.runtimeStyle&&e.runtimeStyle[t],i,s=e.style;if(!/^-?[0-9]+\.?[0-9]*(?:px)?$/i.test(n)&&/^-?\d/.test(n)){i=s.left;r&&(e.runtimeStyle.left=e.currentStyle.left);s.left=t==="fontSize"?"1em":n||0;n=s.pixelLeft+"px";s.left=i;r&&(e.runtimeStyle.left=r)}return/^(thin|medium|thick)$/i.test(n)?n:Math.round(parseFloat(n))+"px"}function a(e){return parseInt(e,10)}function f(e,t,i,s){e=(e||"").split(",");e=e[s||0]||e[0]||"auto";e=r.Util.trimText(e).split(" ");if(i!=="backgroundSize"||!!e[0]&&!e[0].match(/cover|contain|auto/)){e[0]=e[0].indexOf("%")===-1?u(t,i+"X",e[0]):e[0];if(e[1]===n){if(i==="backgroundSize"){e[1]="auto";return e}e[1]=e[0]}e[1]=e[1].indexOf("%")===-1?u(t,i+"Y",e[1]):e[1]}return e}function l(e,t,n,i,s,o){var u=r.Util.getCSS(t,e,s),a,f,l,c;if(u.length===1){c=u[0];u=[];u[0]=c;u[1]=c}if(u[0].toString().indexOf("%")!==-1){l=parseFloat(u[0])/100;f=n.width*l;e!=="backgroundSize"&&(f-=(o||i).width*l)}else if(e==="backgroundSize")if(u[0]==="auto")f=i.width;else if(/contain|cover/.test(u[0])){var h=r.Util.resizeBounds(i.width,i.height,n.width,n.height,u[0]);f=h.width;a=h.height}else f=parseInt(u[0],10);else f=parseInt(u[0],10);if(u[1]==="auto")a=f/i.width*i.height;else if(u[1].toString().indexOf("%")!==-1){l=parseFloat(u[1])/100;a=n.height*l;e!=="backgroundSize"&&(a-=(o||i).height*l)}else a=parseInt(u[1],10);return[f,a]}function c(e,t){var n=[];return{storage:n,width:e,height:t,clip:function(){n.push({type:"function",name:"clip",arguments:arguments})},translate:function(){n.push({type:"function",name:"translate",arguments:arguments})},fill:function(){n.push({type:"function",name:"fill",arguments:arguments})},save:function(){n.push({type:"function",name:"save",arguments:arguments})},restore:function(){n.push({type:"function",name:"restore",arguments:arguments})},fillRect:function(){n.push({type:"function",name:"fillRect",arguments:arguments})},createPattern:function(){n.push({type:"function",name:"createPattern",arguments:arguments})},drawShape:function(){var e=[];n.push({type:"function",name:"drawShape",arguments:e});return{moveTo:function(){e.push({name:"moveTo",arguments:arguments})},lineTo:function(){e.push({name:"lineTo",arguments:arguments})},arcTo:function(){e.push({name:"arcTo",arguments:arguments})},bezierCurveTo:function(){e.push({name:"bezierCurveTo",arguments:arguments})},quadraticCurveTo:function(){e.push({name:"quadraticCurveTo",arguments:arguments})}}},drawImage:function(){n.push({type:"function",name:"drawImage",arguments:arguments})},fillText:function(){n.push({type:"function",name:"fillText",arguments:arguments})},setVariable:function(e,t){n.push({type:"variable",name:e,arguments:t});return t}}}function h(e){return{zindex:e,children:[]}}var r={},i,s,o;r.Util={};r.Util.log=function(t){r.logging&&e.console&&e.console.log&&e.console.log(t)};r.Util.trimText=function(e){return function(t){return e?e.apply(t):((t||"")+"").replace(/^\s+|\s+$/g,"")}}(String.prototype.trim);r.Util.asFloat=function(e){return parseFloat(e)};(function(){var e=/((rgba|rgb)\([^\)]+\)(\s-?\d+px){0,})/g,t=/(-?\d+px)|(#.+)|(rgb\(.+\))|(rgba\(.+\))/g;r.Util.parseTextShadows=function(n){if(!n||n==="none")return[];var r=n.match(e),i=[];for(var s=0;r&&s<r.length;s++){var o=r[s].match(t);i.push({color:o[0],offsetX:o[1]?o[1].replace("px",""):0,offsetY:o[2]?o[2].replace("px",""):0,blur:o[3]?o[3].replace("px",""):0})}return i}})();r.Util.parseBackgroundImage=function(e){var t=" \r\n	",n,r,i,s,o,u=[],a,f=0,l=0,c,h,p=function(){if(n){r.substr(0,1)==='"'&&(r=r.substr(1,r.length-2));r&&h.push(r);if(n.substr(0,1)==="-"&&(s=n.indexOf("-",1)+1)>0){i=n.substr(0,s);n=n.substr(s)}u.push({prefix:i,method:n.toLowerCase(),value:o,args:h})}h=[];n=i=r=o=""};p();for(var d=0,v=e.length;d<v;d++){a=e[d];if(f===0&&t.indexOf(a)>-1)continue;switch(a){case'"':c?c===a&&(c=null):c=a;break;case"(":if(c)break;if(f===0){f=1;o+=a;continue}l++;break;case")":if(c)break;if(f===1){if(l===0){f=0;o+=a;p();continue}l--}break;case",":if(c)break;if(f===0){p();continue}if(f===1&&l===0&&!n.match(/^url$/i)){h.push(r);r="";o+=a;continue}}o+=a;f===0?n+=a:r+=a}p();return u};r.Util.Bounds=function(e){var t,n={};if(e.getBoundingClientRect){t=e.getBoundingClientRect();n.top=t.top;n.bottom=t.bottom||t.top+t.height;n.left=t.left;n.width=e.offsetWidth;n.height=e.offsetHeight}return n};r.Util.OffsetBounds=function(e){var t=e.offsetParent?r.Util.OffsetBounds(e.offsetParent):{top:0,left:0};return{top:e.offsetTop+t.top,bottom:e.offsetTop+e.offsetHeight+t.top,left:e.offsetLeft+t.left,width:e.offsetWidth,height:e.offsetHeight}};r.Util.getCSS=function(e,n,r){i!==e&&(s=t.defaultView.getComputedStyle(e,null));var o=s[n];if(/^background(Size|Position)$/.test(n))return f(o,e,n,r);if(/border(Top|Bottom)(Left|Right)Radius/.test(n)){var u=o.split(" ");u.length<=1&&(u[1]=u[0]);return u.map(a)}return o};r.Util.resizeBounds=function(e,t,n,r,i){var s=n/r,o=e/t,u,a;if(!i||i==="auto"){u=n;a=r}else if(s<o^i==="contain"){a=r;u=r*o}else{u=n;a=n/o}return{width:u,height:a}};r.Util.BackgroundPosition=function(e,t,n,r,i){var s=l("backgroundPosition",e,t,n,r,i);return{left:s[0],top:s[1]}};r.Util.BackgroundSize=function(e,t,n,r){var i=l("backgroundSize",e,t,n,r);return{width:i[0],height:i[1]}};r.Util.Extend=function(e,t){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t};r.Util.Children=function(e){var t;try{t=e.nodeName&&e.nodeName.toUpperCase()==="IFRAME"?e.contentDocument||e.contentWindow.document:function(e){var t=[];e!==null&&function(e,t){var r=e.length,i=0;if(typeof t.length=="number")for(var s=t.length;i<s;i++)e[r++]=t[i];else while(t[i]!==n)e[r++]=t[i++];e.length=r;return e}(t,e);return t}(e.childNodes)}catch(i){r.Util.log("html2canvas.Util.Children failed with exception: "+i.message);t=[]}return t};r.Util.isTransparent=function(e){return e==="transparent"||e==="rgba(0, 0, 0, 0)"};r.Util.Font=function(){var e={};return function(t,r,i){if(e[t+"-"+r]!==n)return e[t+"-"+r];var s=i.createElement("div"),o=i.createElement("img"),u=i.createElement("span"),a="Hidden Text",f,l,c;s.style.visibility="hidden";s.style.fontFamily=t;s.style.fontSize=r;s.style.margin=0;s.style.padding=0;i.body.appendChild(s);o.src="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACwAAAAAAQABAAACAkQBADs=";o.width=1;o.height=1;o.style.margin=0;o.style.padding=0;o.style.verticalAlign="baseline";u.style.fontFamily=t;u.style.fontSize=r;u.style.margin=0;u.style.padding=0;u.appendChild(i.createTextNode(a));s.appendChild(u);s.appendChild(o);f=o.offsetTop-u.offsetTop+1;s.removeChild(u);s.appendChild(i.createTextNode(a));s.style.lineHeight="normal";o.style.verticalAlign="super";l=o.offsetTop-s.offsetTop+1;c={baseline:f,lineWidth:1,middle:l};e[t+"-"+r]=c;i.body.removeChild(s);return c}}();(function(){function s(t){return function(n){try{t.addColorStop(n.stop,n.color)}catch(r){e.log(["failed to add color stop: ",r,"; tried to add: ",n])}}}var e=r.Util,n={};r.Generate=n;var i=[/^(-webkit-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-linear-gradient)\(([a-z\s]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-gradient)\((linear|radial),\s((?:\d{1,3}%?)\s(?:\d{1,3}%?),\s(?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)\-]+)\)$/,/^(-moz-linear-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?))([\w\d\.\s,%\(\)]+)\)$/,/^(-webkit-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/,/^(-moz-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s?([a-z\-]*)([\w\d\.\s,%\(\)]+)\)$/,/^(-o-radial-gradient)\(((?:\d{1,3}%?)\s(?:\d{1,3}%?)),\s(\w+)\s([a-z\-]+)([\w\d\.\s,%\(\)]+)\)$/];n.parseGradient=function(e,t){var n,r,s=i.length,o,u,a,f,l,c,h,p,d,v;for(r=0;r<s;r+=1){o=e.match(i[r]);if(o)break}if(o)switch(o[1]){case"-webkit-linear-gradient":case"-o-linear-gradient":n={type:"linear",x0:null,y0:null,x1:null,y1:null,colorStops:[]};a=o[2].match(/\w+/g);if(a){f=a.length;for(r=0;r<f;r+=1)switch(a[r]){case"top":n.y0=0;n.y1=t.height;break;case"right":n.x0=t.width;n.x1=0;break;case"bottom":n.y0=t.height;n.y1=0;break;case"left":n.x0=0;n.x1=t.width}}n.x0===null&&n.x1===null&&(n.x0=n.x1=t.width/2);n.y0===null&&n.y1===null&&(n.y0=n.y1=t.height/2);a=o[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);if(a){f=a.length;l=1/Math.max(f-1,1);for(r=0;r<f;r+=1){c=a[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);if(c[2]){u=parseFloat(c[2]);c[3]==="%"?u/=100:u/=t.width}else u=r*l;n.colorStops.push({color:c[1],stop:u})}}break;case"-webkit-gradient":n={type:o[2]==="radial"?"circle":o[2],x0:0,y0:0,x1:0,y1:0,colorStops:[]};a=o[3].match(/(\d{1,3})%?\s(\d{1,3})%?,\s(\d{1,3})%?\s(\d{1,3})%?/);if(a){n.x0=a[1]*t.width/100;n.y0=a[2]*t.height/100;n.x1=a[3]*t.width/100;n.y1=a[4]*t.height/100}a=o[4].match(/((?:from|to|color-stop)\((?:[0-9\.]+,\s)?(?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)\))+/g);if(a){f=a.length;for(r=0;r<f;r+=1){c=a[r].match(/(from|to|color-stop)\(([0-9\.]+)?(?:,\s)?((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\)/);u=parseFloat(c[2]);c[1]==="from"&&(u=0);c[1]==="to"&&(u=1);n.colorStops.push({color:c[3],stop:u})}}break;case"-moz-linear-gradient":n={type:"linear",x0:0,y0:0,x1:0,y1:0,colorStops:[]};a=o[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);if(a){n.x0=a[1]*t.width/100;n.y0=a[2]*t.height/100;n.x1=t.width-n.x0;n.y1=t.height-n.y0}a=o[3].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}%)?)+/g);if(a){f=a.length;l=1/Math.max(f-1,1);for(r=0;r<f;r+=1){c=a[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%)?/);if(c[2]){u=parseFloat(c[2]);c[3]&&(u/=100)}else u=r*l;n.colorStops.push({color:c[1],stop:u})}}break;case"-webkit-radial-gradient":case"-moz-radial-gradient":case"-o-radial-gradient":n={type:"circle",x0:0,y0:0,x1:t.width,y1:t.height,cx:0,cy:0,rx:0,ry:0,colorStops:[]};a=o[2].match(/(\d{1,3})%?\s(\d{1,3})%?/);if(a){n.cx=a[1]*t.width/100;n.cy=a[2]*t.height/100}a=o[3].match(/\w+/);c=o[4].match(/[a-z\-]*/);if(a&&c)switch(c[0]){case"farthest-corner":case"cover":case"":h=Math.sqrt(Math.pow(n.cx,2)+Math.pow(n.cy,2));p=Math.sqrt(Math.pow(n.cx,2)+Math.pow(n.y1-n.cy,2));d=Math.sqrt(Math.pow(n.x1-n.cx,2)+Math.pow(n.y1-n.cy,2));v=Math.sqrt(Math.pow(n.x1-n.cx,2)+Math.pow(n.cy,2));n.rx=n.ry=Math.max(h,p,d,v);break;case"closest-corner":h=Math.sqrt(Math.pow(n.cx,2)+Math.pow(n.cy,2));p=Math.sqrt(Math.pow(n.cx,2)+Math.pow(n.y1-n.cy,2));d=Math.sqrt(Math.pow(n.x1-n.cx,2)+Math.pow(n.y1-n.cy,2));v=Math.sqrt(Math.pow(n.x1-n.cx,2)+Math.pow(n.cy,2));n.rx=n.ry=Math.min(h,p,d,v);break;case"farthest-side":if(a[0]==="circle")n.rx=n.ry=Math.max(n.cx,n.cy,n.x1-n.cx,n.y1-n.cy);else{n.type=a[0];n.rx=Math.max(n.cx,n.x1-n.cx);n.ry=Math.max(n.cy,n.y1-n.cy)}break;case"closest-side":case"contain":if(a[0]==="circle")n.rx=n.ry=Math.min(n.cx,n.cy,n.x1-n.cx,n.y1-n.cy);else{n.type=a[0];n.rx=Math.min(n.cx,n.x1-n.cx);n.ry=Math.min(n.cy,n.y1-n.cy)}}a=o[5].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\)(?:\s\d{1,3}(?:%|px))?)+/g);if(a){f=a.length;l=1/Math.max(f-1,1);for(r=0;r<f;r+=1){c=a[r].match(/((?:rgb|rgba)\(\d{1,3},\s\d{1,3},\s\d{1,3}(?:,\s[0-9\.]+)?\))\s*(\d{1,3})?(%|px)?/);if(c[2]){u=parseFloat(c[2]);c[3]==="%"?u/=100:u/=t.width}else u=r*l;n.colorStops.push({color:c[1],stop:u})}}}return n};n.Gradient=function(e,n){if(n.width===0||n.height===0)return;var i=t.createElement("canvas"),o=i.getContext("2d"),u,a;i.width=n.width;i.height=n.height;u=r.Generate.parseGradient(e,n);if(u)switch(u.type){case"linear":a=o.createLinearGradient(u.x0,u.y0,u.x1,u.y1);u.colorStops.forEach(s(a));o.fillStyle=a;o.fillRect(0,0,n.width,n.height);break;case"circle":a=o.createRadialGradient(u.cx,u.cy,0,u.cx,u.cy,u.rx);u.colorStops.forEach(s(a));o.fillStyle=a;o.fillRect(0,0,n.width,n.height);break;case"ellipse":var f=t.createElement("canvas"),l=f.getContext("2d"),c=Math.max(u.rx,u.ry),h=c*2;f.width=f.height=h;a=l.createRadialGradient(u.rx,u.ry,0,u.rx,u.ry,c);u.colorStops.forEach(s(a));l.fillStyle=a;l.fillRect(0,0,h,h);o.fillStyle=u.colorStops[u.colorStops.length-1].color;o.fillRect(0,0,i.width,i.height);o.drawImage(f,u.cx-u.rx,u.cy-u.ry,2*u.rx,2*u.ry)}return i};n.ListAlpha=function(e){var t="",n;do{n=e%26;t=String.fromCharCode(n+64)+t;e/=26}while(e*26>26);return t};n.ListRoman=function(e){var t=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"],n=[1e3,900,500,400,100,90,50,40,10,9,5,4,1],r="",i,s=t.length;if(e<=0||e>=4e3)return e;for(i=0;i<s;i+=1)while(e>=n[i]){e-=n[i];r+=t[i]}return r}})();r.Parse=function(i,s){function y(){return Math.max(Math.max(a.body.scrollWidth,a.documentElement.scrollWidth),Math.max(a.body.offsetWidth,a.documentElement.offsetWidth),Math.max(a.body.clientWidth,a.documentElement.clientWidth))}function b(){return Math.max(Math.max(a.body.scrollHeight,a.documentElement.scrollHeight),Math.max(a.body.offsetHeight,a.documentElement.offsetHeight),Math.max(a.body.clientHeight,a.documentElement.clientHeight))}function w(e,t){var n=parseInt(v(e,t),10);return isNaN(n)?0:n}function E(e,t,n,r,i,s){if(s!=="transparent"){e.setVariable("fillStyle",s);e.fillRect(t,n,r,i);u+=1}}function S(e,t,n){if(e.length>0)return t+n.toUpperCase()}function x(e,t){switch(t){case"lowercase":return e.toLowerCase();case"capitalize":return e.replace(/(^|\s|:|-|\(|\))([a-z])/g,S);case"uppercase":return e.toUpperCase();default:return e}}function T(e){return/^(normal|none|0px)$/.test(e)}function N(e,t,n,r){if(e!==null&&f.trimText(e).length>0){r.fillText(e,t,n);u+=1}}function C(e,t,n,r){var i=!1,s=v(t,"fontWeight"),o=v(t,"fontFamily"),u=v(t,"fontSize"),l=f.parseTextShadows(v(t,"textShadow"));switch(parseInt(s,10)){case 401:s="bold";break;case 400:s="normal"}e.setVariable("fillStyle",r);e.setVariable("font",[v(t,"fontStyle"),v(t,"fontVariant"),s,u,o].join(" "));e.setVariable("textAlign",i?"right":"left");if(l.length){e.setVariable("shadowColor",l[0].color);e.setVariable("shadowOffsetX",l[0].offsetX);e.setVariable("shadowOffsetY",l[0].offsetY);e.setVariable("shadowBlur",l[0].blur)}if(n!=="none")return f.Font(o,u,a)}function k(e,t,n,r,i){switch(t){case"underline":E(e,n.left,Math.round(n.top+r.baseline+r.lineWidth),n.width,1,i);break;case"overline":E(e,n.left,Math.round(n.top),n.width,1,i);break;case"line-through":E(e,n.left,Math.ceil(n.top+r.middle+r.lineWidth),n.width,1,i)}}function L(e,t,n,r,i){var s;if(l.rangeBounds&&!i){if(n!=="none"||f.trimText(t).length!==0)s=A(t,e.node,e.textOffset);e.textOffset+=t.length}else if(e.node&&typeof e.node.nodeValue=="string"){var o=r?e.node.splitText(t.length):null;s=O(e.node,i);e.node=o}return s}function A(e,t,n){var r=a.createRange();r.setStart(t,n);r.setEnd(t,n+e.length);return r.getBoundingClientRect()}function O(e,t){var n=e.parentNode,r=a.createElement("wrapper"),i=e.cloneNode(!0);r.appendChild(e.cloneNode(!0));n.replaceChild(r,e);var s=t?f.OffsetBounds(r):f.Bounds(r);n.replaceChild(i,r);return s}function M(e,t,n){var r=n.ctx,i=v(e,"color"),o=v(e,"textDecoration"),u=v(e,"textAlign"),a,l,c={node:t,textOffset:0};if(f.trimText(t.nodeValue).length>0){t.nodeValue=x(t.nodeValue,v(e,"textTransform"));u=u.replace(["-webkit-auto"],["auto"]);l=!s.letterRendering&&/^(left|right|justify|auto)$/.test(u)&&T(v(e,"letterSpacing"))?t.nodeValue.split(/(\b| )/):t.nodeValue.split("");a=C(r,e,o,i);s.chinese&&l.forEach(function(e,t){if(/.*[\u4E00-\u9FA5].*$/.test(e)){e=e.split("");e.unshift(t,1);l.splice.apply(l,e)}});l.forEach(function(e,t){var s=L(c,e,o,t<l.length-1,n.transform.matrix);if(s){N(e,s.left,s.bottom,r);k(r,o,s,a,i)}})}}function _(e,t){var n=a.createElement("boundelement"),r,i;n.style.display="inline";r=e.style.listStyleType;e.style.listStyleType="none";n.appendChild(a.createTextNode(t));e.insertBefore(n,e.firstChild);i=f.Bounds(n);e.removeChild(n);e.style.listStyleType=r;return i}function D(e){var t=-1,n=1,r=e.parentNode.childNodes;if(e.parentNode){while(r[++t]!==e)r[t].nodeType===1&&n++;return n}return-1}function P(e,t){var n=D(e),i;switch(t){case"decimal":i=n;break;case"decimal-leading-zero":i=n.toString().length===1?n="0"+n.toString():n.toString();break;case"upper-roman":i=r.Generate.ListRoman(n);break;case"lower-roman":i=r.Generate.ListRoman(n).toLowerCase();break;case"lower-alpha":i=r.Generate.ListAlpha(n).toLowerCase();break;case"upper-alpha":i=r.Generate.ListAlpha(n)}return i+". "}function H(e,t,n){var r,i,s=t.ctx,o=v(e,"listStyleType"),u;if(/^(decimal|decimal-leading-zero|upper-alpha|upper-latin|upper-roman|lower-alpha|lower-greek|lower-latin|lower-roman)$/i.test(o)){i=P(e,o);u=_(e,i);C(s,e,"none",v(e,"color"));if(v(e,"listStylePosition")!=="inside")return;s.setVariable("textAlign","left");r=n.left;N(i,r,u.bottom,s)}}function B(e){var t=i[e];return t&&t.succeeded===!0?t.img:!1}function j(e,t){var n=Math.max(e.left,t.left),r=Math.max(e.top,t.top),i=Math.min(e.left+e.width,t.left+t.width),s=Math.min(e.top+e.height,t.top+t.height);return{left:n,top:r,width:i-n,height:s-r}}function F(e,t,n){var r,i=t.cssPosition!=="static",s=i?v(e,"zIndex"):"auto",o=v(e,"opacity"),u=v(e,"cssFloat")!=="none";t.zIndex=r=h(s);r.isPositioned=i;r.isFloated=u;r.opacity=o;r.ownStacking=s!=="auto"||o<1;n&&n.zIndex.children.push(t)}function I(e,t,n,r,i){var s=w(t,"paddingLeft"),o=w(t,"paddingTop"),u=w(t,"paddingRight"),a=w(t,"paddingBottom");Y(e,n,0,0,n.width,n.height,r.left+s+i[3].width,r.top+o+i[0].width,r.width-(i[1].width+i[3].width+s+u),r.height-(i[0].width+i[2].width+o+a))}function q(e){return["Top","Right","Bottom","Left"].map(function(t){return{width:w(e,"border"+t+"Width"),color:v(e,"border"+t+"Color")}})}function R(e){return["TopLeft","TopRight","BottomRight","BottomLeft"].map(function(t){return v(e,"border"+t+"Radius")})}function z(e,t,n,r){var i=function(e,t,n){return{x:e.x+(t.x-e.x)*n,y:e.y+(t.y-e.y)*n}};return{start:e,startControl:t,endControl:n,end:r,subdivide:function(s){var o=i(e,t,s),u=i(t,n,s),a=i(n,r,s),f=i(o,u,s),l=i(u,a,s),c=i(f,l,s);return[z(e,o,f,c),z(c,l,a,r)]},curveTo:function(e){e.push(["bezierCurve",t.x,t.y,n.x,n.y,r.x,r.y])},curveToReversed:function(r){r.push(["bezierCurve",n.x,n.y,t.x,t.y,e.x,e.y])}}}function W(e,t,n,r,i,s,o){if(t[0]>0||t[1]>0){e.push(["line",r[0].start.x,r[0].start.y]);r[0].curveTo(e);r[1].curveTo(e)}else e.push(["line",s,o]);(n[0]>0||n[1]>0)&&e.push(["line",i[0].start.x,i[0].start.y])}function X(e,t,n,r,i,s,o){var u=[];if(t[0]>0||t[1]>0){u.push(["line",r[1].start.x,r[1].start.y]);r[1].curveTo(u)}else u.push(["line",e.c1[0],e.c1[1]]);if(n[0]>0||n[1]>0){u.push(["line",s[0].start.x,s[0].start.y]);s[0].curveTo(u);u.push(["line",o[0].end.x,o[0].end.y]);o[0].curveToReversed(u)}else{u.push(["line",e.c2[0],e.c2[1]]);u.push(["line",e.c3[0],e.c3[1]])}if(t[0]>0||t[1]>0){u.push(["line",i[1].end.x,i[1].end.y]);i[1].curveToReversed(u)}else u.push(["line",e.c4[0],e.c4[1]]);return u}function V(e,t,n){var r=e.left,i=e.top,s=e.width,o=e.height,u=t[0][0],a=t[0][1],f=t[1][0],l=t[1][1],c=t[2][0],h=t[2][1],p=t[3][0],d=t[3][1],v=s-f,m=o-h,g=s-c,y=o-d;return{topLeftOuter:U(r,i,u,a).topLeft.subdivide(.5),topLeftInner:U(r+n[3].width,i+n[0].width,Math.max(0,u-n[3].width),Math.max(0,a-n[0].width)).topLeft.subdivide(.5),topRightOuter:U(r+v,i,f,l).topRight.subdivide(.5),topRightInner:U(r+Math.min(v,s+n[3].width),i+n[0].width,v>s+n[3].width?0:f-n[3].width,l-n[0].width).topRight.subdivide(.5),bottomRightOuter:U(r+g,i+m,c,h).bottomRight.subdivide(.5),bottomRightInner:U(r+Math.min(g,s+n[3].width),i+Math.min(m,o+n[0].width),Math.max(0,c-n[1].width),Math.max(0,h-n[2].width)).bottomRight.subdivide(.5),bottomLeftOuter:U(r,i+y,p,d).bottomLeft.subdivide(.5),bottomLeftInner:U(r+n[3].width,i+y,Math.max(0,p-n[3].width),Math.max(0,d-n[2].width)).bottomLeft.subdivide(.5)}}function $(e,t,n,r,i){var s=v(e,"backgroundClip"),o=[];switch(s){case"content-box":case"padding-box":W(o,r[0],r[1],t.topLeftInner,t.topRightInner,i.left+n[3].width,i.top+n[0].width);W(o,r[1],r[2],t.topRightInner,t.bottomRightInner,i.left+i.width-n[1].width,i.top+n[0].width);W(o,r[2],r[3],t.bottomRightInner,t.bottomLeftInner,i.left+i.width-n[1].width,i.top+i.height-n[2].width);W(o,r[3],r[0],t.bottomLeftInner,t.topLeftInner,i.left+n[3].width,i.top+i.height-n[2].width);break;default:W(o,r[0],r[1],t.topLeftOuter,t.topRightOuter,i.left,i.top);W(o,r[1],r[2],t.topRightOuter,t.bottomRightOuter,i.left+i.width,i.top);W(o,r[2],r[3],t.bottomRightOuter,t.bottomLeftOuter,i.left+i.width,i.top+i.height);W(o,r[3],r[0],t.bottomLeftOuter,t.topLeftOuter,i.left,i.top+i.height)}return o}function J(e,t,n){var r=t.left,i=t.top,s=t.width,o=t.height,u,a,f,l,c,h,p=R(e),d=V(t,p,n),v={clip:$(e,d,n,p,t),borders:[]};for(u=0;u<4;u++)if(n[u].width>0){a=r;f=i;l=s;c=o-n[2].width;switch(u){case 0:c=n[0].width;h=X({c1:[a,f],c2:[a+l,f],c3:[a+l-n[1].width,f+c],c4:[a+n[3].width,f+c]},p[0],p[1],d.topLeftOuter,d.topLeftInner,d.topRightOuter,d.topRightInner);break;case 1:a=r+s-n[1].width;l=n[1].width;h=X({c1:[a+l,f],c2:[a+l,f+c+n[2].width],c3:[a,f+c],c4:[a,f+n[0].width]},p[1],p[2],d.topRightOuter,d.topRightInner,d.bottomRightOuter,d.bottomRightInner);break;case 2:f=f+o-n[2].width;c=n[2].width;h=X({c1:[a+l,f+c],c2:[a,f+c],c3:[a+n[3].width,f],c4:[a+l-n[3].width,f]},p[2],p[3],d.bottomRightOuter,d.bottomRightInner,d.bottomLeftOuter,d.bottomLeftInner);break;case 3:l=n[3].width;h=X({c1:[a,f+c+n[2].width],c2:[a,f],c3:[a+l,f+n[0].width],c4:[a+l,f+c]},p[3],p[0],d.bottomLeftOuter,d.bottomLeftInner,d.topLeftOuter,d.topLeftInner)}v.borders.push({args:h,color:n[u].color})}return v}function K(e,t){var n=e.drawShape();t.forEach(function(e,t){n[t===0?"moveTo":e[0]+"To"].apply(null,e.slice(1))});return n}function Q(e,t,n){if(n!=="transparent"){e.setVariable("fillStyle",n);K(e,t);e.fill();u+=1}}function G(e,t,n){var r=a.createElement("valuewrap"),i=["lineHeight","textAlign","fontFamily","color","fontSize","paddingLeft","paddingTop","width","height","border","borderLeftWidth","borderTopWidth"],s,o;i.forEach(function(t){try{r.style[t]=v(e,t)}catch(n){f.log("html2canvas: Parse: Exception caught in renderFormValue: "+n.message)}});r.style.borderColor="black";r.style.borderStyle="solid";r.style.display="block";r.style.position="absolute";if(/^(submit|reset|button|text|password)$/.test(e.type)||e.nodeName==="SELECT")r.style.lineHeight=v(e,"height");r.style.top=t.top+"px";r.style.left=t.left+"px";s=e.nodeName==="SELECT"?(e.options[e.selectedIndex]||0).text:e.value;s||(s=e.placeholder);o=a.createTextNode(s);r.appendChild(o);d.appendChild(r);M(e,o,n);d.removeChild(r)}function Y(e){e.drawImage.apply(e,Array.prototype.slice.call(arguments,1));u+=1}function Z(n,r){var i=e.getComputedStyle(n,r);if(!i||!i.content||i.content==="none"||i.content==="-moz-alt-content"||i.display==="none")return;var s=i.content+"",o=s.substr(0,1);o===s.substr(s.length-1)&&o.match(/'|"/)&&(s=s.substr(1,s.length-2));var u=s.substr(0,3)==="url",a=t.createElement(u?"img":"span");a.className=m+"-before "+m+"-after";Object.keys(i).filter(et).forEach(function(e){try{a.style[e]=i[e]}catch(t){f.log(["Tried to assign readonly property ",e,"Error:",t])}});u?a.src=f.parseBackgroundImage(s)[0].args[0]:a.innerHTML=s;return a}function et(t){return isNaN(e.parseInt(t,10))}function tt(e,t){var n=Z(e,":before"),r=Z(e,":after");if(!n&&!r)return;if(n){e.className+=" "+m+"-before";e.parentNode.insertBefore(n,e);gt(n,t,!0);e.parentNode.removeChild(n);e.className=e.className.replace(m+"-before","").trim()}if(r){e.className+=" "+m+"-after";e.appendChild(r);gt(r,t,!0);e.removeChild(r);e.className=e.className.replace(m+"-after","").trim()}}function nt(e,t,n,r){var i=Math.round(r.left+n.left),s=Math.round(r.top+n.top);e.createPattern(t);e.translate(i,s);e.fill();e.translate(-i,-s)}function rt(e,t,n,r,i,s,o,u){var a=[];a.push(["line",Math.round(i),Math.round(s)]);a.push(["line",Math.round(i+o),Math.round(s)]);a.push(["line",Math.round(i+o),Math.round(u+s)]);a.push(["line",Math.round(i),Math.round(u+s)]);K(e,a);e.save();e.clip();nt(e,t,n,r);e.restore()}function it(e,t,n){E(e,t.left,t.top,t.width,t.height,n)}function st(e,t,n,r,i){var s=f.BackgroundSize(e,t,r,i),o=f.BackgroundPosition(e,t,r,i,s),u=v(e,"backgroundRepeat").split(",").map(f.trimText);r=ut(r,s);u=u[i]||u[0];switch(u){case"repeat-x":rt(n,r,o,t,t.left,t.top+o.top,99999,r.height);break;case"repeat-y":rt(n,r,o,t,t.left+o.left,t.top,r.width,99999);break;case"no-repeat":rt(n,r,o,t,t.left+o.left,t.top+o.top,r.width,r.height);break;default:nt(n,r,o,{top:t.top,left:t.left,width:r.width,height:r.height})}}function ot(e,t,n){var r=v(e,"backgroundImage"),i=f.parseBackgroundImage(r),s,o=i.length;while(o--){r=i[o];if(!r.args||r.args.length===0)continue;var u=r.method==="url"?r.args[0]:r.value;s=B(u);s?st(e,t,n,s,o):f.log("html2canvas: Error loading background:",r)}}function ut(e,t){if(e.width===t.width&&e.height===t.height)return e;var n,r=a.createElement("canvas");r.width=t.width;r.height=t.height;n=r.getContext("2d");Y(n,e,0,0,e.width,e.height,0,0,t.width,t.height);return r}function at(e,t,n){return e.setVariable("globalAlpha",v(t,"opacity")*(n?n.opacity:1))}function ft(e){return e.replace("px","")}function ct(e,t){var n=v(e,"transform")||v(e,"-webkit-transform")||v(e,"-moz-transform")||v(e,"-ms-transform")||v(e,"-o-transform"),r=v(e,"transform-origin")||v(e,"-webkit-transform-origin")||v(e,"-moz-transform-origin")||v(e,"-ms-transform-origin")||v(e,"-o-transform-origin")||"0px 0px";r=r.split(" ").map(ft).map(f.asFloat);var i;if(n&&n!=="none"){var s=n.match(lt);if(s)switch(s[1]){case"matrix":i=s[2].split(",").map(f.trimText).map(f.asFloat)}}return{origin:r,matrix:i}}function ht(e,t,n,r){var i=c(t?n.width:y(),t?n.height:b()),o={ctx:i,opacity:at(i,e,t),cssPosition:v(e,"position"),borders:q(e),transform:r,clip:t&&t.clip?f.Extend({},t.clip):null};F(e,o,t);s.useOverflow===!0&&/(hidden|scroll|auto)/.test(v(e,"overflow"))===!0&&/(BODY)/i.test(e.nodeName)===!1&&(o.clip=o.clip?j(o.clip,n):n);return o}function pt(e,t,n){var r={left:t.left+e[3].width,top:t.top+e[0].width,width:t.width-(e[1].width+e[3].width),height:t.height-(e[0].width+e[2].width)};n&&(r=j(r,n));return r}function dt(e,t){var n=t.matrix?f.OffsetBounds(e):f.Bounds(e);t.origin[0]+=n.left;t.origin[1]+=n.top;return n}function vt(e,t,n,r){var i=ct(e,t),s=dt(e,i),o,u=ht(e,t,s,i),a=u.borders,l=u.ctx,c=pt(a,s,u.clip),h=J(e,s,a),d=p.test(e.nodeName)?"#efefef":v(e,"backgroundColor");K(l,h.clip);l.save();l.clip();if(c.height>0&&c.width>0&&!r){it(l,s,d);ot(e,c,l)}else r&&(u.backgroundColor=d);l.restore();h.borders.forEach(function(e){Q(l,e.args,e.color)});n||tt(e,u);switch(e.nodeName){case"IMG":(o=B(e.getAttribute("src")))?I(l,e,o,s,a):f.log("html2canvas: Error loading <img>:"+e.getAttribute("src"));break;case"INPUT":/^(text|url|email|submit|button|reset)$/.test(e.type)&&(e.value||e.placeholder||"").length>0&&G(e,s,u);break;case"TEXTAREA":(e.value||e.placeholder||"").length>0&&G(e,s,u);break;case"SELECT":(e.options||e.placeholder||"").length>0&&G(e,s,u);break;case"LI":H(e,u,c);break;case"CANVAS":I(l,e,e,s,a)}return u}function mt(e){return v(e,"display")!=="none"&&v(e,"visibility")!=="hidden"&&!e.hasAttribute("data-html2canvas-ignore")}function gt(e,t,n){if(mt(e)){t=vt(e,t,n,!1)||t;p.test(e.nodeName)||yt(e,t,n)}}function yt(e,t,n){f.Children(e).forEach(function(r){r.nodeType===r.ELEMENT_NODE?gt(r,t,n):r.nodeType===r.TEXT_NODE&&M(e,r,t)})}function bt(){var e=v(t.documentElement,"backgroundColor"),n=f.isTransparent(e)&&o===t.body,r=vt(o,null,!1,n);yt(o,r);n&&(e=r.backgroundColor);d.removeChild(g);return{backgroundColor:e,stack:r}}e.scroll(0,0);var o=s.elements===n?t.body:s.elements[0],u=0,a=o.ownerDocument,f=r.Util,l=f.Support(s,a),p=new RegExp("("+s.ignoreElements+")"),d=a.body,v=f.getCSS,m="___html2canvas___pseudoelement",g=a.createElement("style");g.innerHTML="."+m+'-before:before { content: "" !important; display: none !important; }'+"."+m+'-after:after { content: "" !important; display: none !important; }';d.appendChild(g);i=i||{};var U=function(e){return function(t,n,r,i){var s=r*e,o=i*e,u=t+r,a=n+i;return{topLeft:z({x:t,y:a},{x:t,y:a-o},{x:u-s,y:n},{x:u,y:n}),topRight:z({x:t,y:n},{x:t+s,y:n},{x:u,y:a-o},{x:u,y:a}),bottomRight:z({x:u,y:n},{x:u,y:n+o},{x:t+s,y:a},{x:t,y:a}),bottomLeft:z({x:u,y:a},{x:u-s,y:a},{x:t,y:n+o},{x:t,y:n})}}}(4*((Math.sqrt(2)-1)/3)),lt=/(matrix)\((.+)\)/;return bt()};r.Preload=function(i){function y(e){v.href=e;v.href=v.href;var t=v.protocol+v.host;return t===o}function b(){u.log("html2canvas: start: images: "+s.numLoaded+" / "+s.numTotal+" (failed: "+s.numFailed+")");if(!s.firstRun&&s.numLoaded>=s.numTotal){u.log("Finished loading images: # "+s.numTotal+" (failed: "+s.numFailed+")");typeof i.complete=="function"&&i.complete(s)}}function w(t,r,o){var u,a=i.proxy,f;v.href=t;t=v.href;u="html2canvas_"+l++;o.callbackname=u;a.indexOf("?")>-1?a+="&":a+="?";a+="url="+encodeURIComponent(t)+"&callback="+u;f=h.createElement("script");e[u]=function(t){if(t.substring(0,6)==="error:"){o.succeeded=!1;s.numLoaded++;s.numFailed++;b()}else{k(r,o);r.src=t}e[u]=n;try{delete e[u]}catch(i){}f.parentNode.removeChild(f);f=null;delete o.script;delete o.callbackname};f.setAttribute("type","text/javascript");f.setAttribute("src",a);o.script=f;e.document.body.appendChild(f)}function E(t,n){var i=e.getComputedStyle(t,n),s=i.content;s.substr(0,3)==="url"&&a.loadImage(r.Util.parseBackgroundImage(s)[0].args[0]);N(i.backgroundImage,t)}function S(e){E(e,":before");E(e,":after")}function x(e,t){var i=r.Generate.Gradient(e,t);if(i!==n){s[e]={img:i,succeeded:!0};s.numTotal++;s.numLoaded++;b()}}function T(e){return e&&e.method&&e.args&&e.args.length>0}function N(e,t){var i;r.Util.parseBackgroundImage(e).filter(T).forEach(function(e){if(e.method==="url")a.loadImage(e.args[0]);else if(e.method.match(/\-?gradient$/)){i===n&&(i=r.Util.Bounds(t));x(e.value,i)}})}function C(e){var t=!1;try{u.Children(e).forEach(C)}catch(r){}try{t=e.nodeType}catch(i){t=!1;u.log("html2canvas: failed to access some element's nodeType - Exception: "+i.message)}if(t===1||t===n){S(e);try{N(u.getCSS(e,"backgroundImage"),e)}catch(r){u.log("html2canvas: failed to get background-image - Exception: "+r.message)}N(e)}}function k(t,r){t.onload=function(){r.timer!==n&&e.clearTimeout(r.timer);s.numLoaded++;r.succeeded=!0;t.onerror=t.onload=null;b()};t.onerror=function(){if(t.crossOrigin==="anonymous"){e.clearTimeout(r.timer);if(i.proxy){var n=t.src;t=new Image;r.img=t;t.src=n;w(t.src,t,r);return}}s.numLoaded++;s.numFailed++;r.succeeded=!1;t.onerror=t.onload=null;b()}}var s={numLoaded:0,numFailed:0,numTotal:0,cleanupDone:!1},o,u=r.Util,a,f,l=0,c=i.elements[0]||t.body,h=c.ownerDocument,p=c.getElementsByTagName("img"),d=p.length,v=h.createElement("a"),m=function(e){return e.crossOrigin!==n}(new Image),g;v.href=e.location.href;o=v.protocol+v.host;a={loadImage:function(e){var t,r;if(e&&s[e]===n){t=new Image;if(e.match(/data:image\/.*;base64,/i)){t.src=e.replace(/url\(['"]{0,}|['"]{0,}\)$/ig,"");r=s[e]={img:t};s.numTotal++;k(t,r)}else if(y(e)||i.allowTaint===!0){r=s[e]={img:t};s.numTotal++;k(t,r);t.src=e}else if(m&&!i.allowTaint&&i.useCORS){t.crossOrigin="anonymous";r=s[e]={img:t};s.numTotal++;k(t,r);t.src=e}else if(i.proxy){r=s[e]={img:t};s.numTotal++;w(e,t,r)}}},cleanupDOM:function(r){var o,a;if(!s.cleanupDone){r&&typeof r=="string"?u.log("html2canvas: Cleanup because: "+r):u.log("html2canvas: Cleanup after timeout: "+i.timeout+" ms.");for(a in s)if(s.hasOwnProperty(a)){o=s[a];if(typeof o=="object"&&o.callbackname&&o.succeeded===n){e[o.callbackname]=n;try{delete e[o.callbackname]}catch(f){}if(o.script&&o.script.parentNode){o.script.setAttribute("src","about:blank");o.script.parentNode.removeChild(o.script)}s.numLoaded++;s.numFailed++;u.log("html2canvas: Cleaned up failed img: '"+a+"' Steps: "+s.numLoaded+" / "+s.numTotal)}}e.stop!==n?e.stop():t.execCommand!==n&&t.execCommand("Stop",!1);t.close!==n&&t.close();s.cleanupDone=!0;(!r||typeof r!="string")&&b()}},renderingDone:function(){g&&e.clearTimeout(g)}};i.timeout>0&&(g=e.setTimeout(a.cleanupDOM,i.timeout));u.log("html2canvas: Preload starts: finding background-images");s.firstRun=!0;C(c);u.log("html2canvas: Preload: Finding images");for(f=0;f<d;f+=1)a.loadImage(p[f].getAttribute("src"));s.firstRun=!1;u.log("html2canvas: Preload: Done.");s.numTotal===s.numLoaded&&b();return a};r.Renderer=function(e,i){function s(e){function i(e){Object.keys(e).sort().forEach(function(n){var r=[],s=[],o=[],u=[];e[n].forEach(function(e){e.node.zIndex.isPositioned||e.node.zIndex.opacity<1?o.push(e):e.node.zIndex.isFloated?s.push(e):r.push(e)});(function a(e){e.forEach(function(e){u.push(e);e.children&&a(e.children)})})(r.concat(s,o));u.forEach(function(e){e.context?i(e.context):t.push(e.node)})})}var t=[],r;r=function(t){function i(e,t,r){var s=t.zIndex.zindex==="auto"?0:Number(t.zIndex.zindex),o=e,u=t.zIndex.isPositioned,a=t.zIndex.isFloated
,f={node:t},l=r;if(t.zIndex.ownStacking){o=f.context={"!":[{node:t,children:[]}]};l=n}else if(u||a)l=f.children=[];if(s===0&&r)r.push(f);else{e[s]||(e[s]=[]);e[s].push(f)}t.zIndex.children.forEach(function(e){i(o,e,l)})}var r={};i(r,t);return r}(e);i(r);return t}function o(e){var t;if(typeof i.renderer=="string"&&r.Renderer[e]!==n)t=r.Renderer[e](i);else{if(typeof e!="function")throw new Error("Unknown renderer");t=e(i)}if(typeof t!="function")throw new Error("Invalid renderer defined");return t}return o(i.renderer)(e,i,t,s(e.stack),r)};r.Util.Support=function(e,t){function i(){var e=new Image,i=t.createElement("canvas"),s=i.getContext===n?!1:i.getContext("2d");if(s===!1)return!1;i.width=i.height=10;e.src=["data:image/svg+xml,","<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'>","<foreignObject width='10' height='10'>","<div xmlns='http://www.w3.org/1999/xhtml' style='width:10;height:10;'>","sup","</div>","</foreignObject>","</svg>"].join("");try{s.drawImage(e,0,0);i.toDataURL()}catch(o){return!1}r.Util.log("html2canvas: Parse: SVG powered rendering available");return!0}function s(){var e,n,r,i,s=!1;if(t.createRange){e=t.createRange();if(e.getBoundingClientRect){n=t.createElement("boundtest");n.style.height="123px";n.style.display="block";t.body.appendChild(n);e.selectNode(n);r=e.getBoundingClientRect();i=r.height;i===123&&(s=!0);t.body.removeChild(n)}}return s}return{rangeBounds:s(),svgRendering:e.svgRendering&&i()}};e.html2canvas=function(t,n){t=t.length?t:[t];var i,s,o={logging:!1,elements:t,background:"#fff",proxy:null,timeout:0,useCORS:!1,allowTaint:!1,svgRendering:!1,ignoreElements:"IFRAME|OBJECT|PARAM",useOverflow:!0,letterRendering:!1,chinese:!1,width:null,height:null,taintTest:!0,renderer:"Canvas"};o=r.Util.Extend(n,o);r.logging=o.logging;o.complete=function(e){if(typeof o.onpreloaded=="function"&&o.onpreloaded(e)===!1)return;i=r.Parse(e,o);if(typeof o.onparsed=="function"&&o.onparsed(i)===!1)return;s=r.Renderer(i,o);typeof o.onrendered=="function"&&o.onrendered(s)};e.setTimeout(function(){r.Preload(o)},0);return{render:function(e,t){return r.Renderer(e,r.Util.Extend(t,o))},parse:function(e,t){return r.Parse(e,r.Util.Extend(t,o))},preload:function(e){return r.Preload(r.Util.Extend(e,o))},log:r.Util.log}};e.html2canvas.log=r.Util.log;e.html2canvas.Renderer={Canvas:n};r.Renderer.Canvas=function(e){function l(e,t){e.beginPath();t.forEach(function(t){e[t.name].apply(e,t.arguments)});e.closePath()}function c(e){if(s.indexOf(e.arguments[0].src)===-1){u.drawImage(e.arguments[0],0,0);try{u.getImageData(0,0,1,1)}catch(t){o=i.createElement("canvas");u=o.getContext("2d");return!1}s.push(e.arguments[0].src)}return!0}function h(t,n){switch(n.type){case"variable":t[n.name]=n.arguments;break;case"function":switch(n.name){case"createPattern":if(n.arguments[0].width>0&&n.arguments[0].height>0)try{t.fillStyle=t.createPattern(n.arguments[0],"repeat")}catch(r){a.log("html2canvas: Renderer: Error creating pattern",r.message)}break;case"drawShape":l(t,n.arguments);break;case"drawImage":n.arguments[8]>0&&n.arguments[7]>0&&(!e.taintTest||e.taintTest&&c(n))&&t.drawImage.apply(t,n.arguments);break;default:t[n.name].apply(t,n.arguments)}}}e=e||{};var i=t,s=[],o=t.createElement("canvas"),u=o.getContext("2d"),a=r.Util,f=e.canvas||i.createElement("canvas");return function(e,t,r,i,s){var o=f.getContext("2d"),u,l,c,p=e.stack;f.width=f.style.width=t.width||p.ctx.width;f.height=f.style.height=t.height||p.ctx.height;c=o.fillStyle;o.fillStyle=a.isTransparent(p.backgroundColor)&&t.background!==n?t.background:e.backgroundColor;o.fillRect(0,0,f.width,f.height);o.fillStyle=c;i.forEach(function(e){o.textBaseline="bottom";o.save();if(e.transform.matrix){o.translate(e.transform.origin[0],e.transform.origin[1]);o.transform.apply(o,e.transform.matrix);o.translate(-e.transform.origin[0],-e.transform.origin[1])}if(e.clip){o.beginPath();o.rect(e.clip.left,e.clip.top,e.clip.width,e.clip.height);o.clip()}e.ctx.storage&&e.ctx.storage.forEach(function(e){h(o,e)});o.restore()});a.log("html2canvas: Renderer: Canvas renderer done - returning canvas obj");if(t.elements.length===1&&typeof t.elements[0]=="object"&&t.elements[0].nodeName!=="BODY"){l=s.Util.Bounds(t.elements[0]);u=r.createElement("canvas");u.width=Math.ceil(l.width);u.height=Math.ceil(l.height);o=u.getContext("2d");o.drawImage(f,l.left,l.top,l.width,l.height,0,0,l.width,l.height);f=null;return u}return f}}})(window,document);