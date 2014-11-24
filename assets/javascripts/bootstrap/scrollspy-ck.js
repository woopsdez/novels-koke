/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function(e){"use strict";function t(n,r){var i=e.proxy(this.process,this);this.$body=e("body");this.$scrollElement=e(n).is("body")?e(window):e(n);this.options=e.extend({},t.DEFAULTS,r);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",i);this.refresh();this.process()}function n(n){return this.each(function(){var r=e(this),i=r.data("bs.scrollspy"),s=typeof n=="object"&&n;i||r.data("bs.scrollspy",i=new t(this,s));typeof n=="string"&&i[n]()})}t.VERSION="3.3.1";t.DEFAULTS={offset:10};t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};t.prototype.refresh=function(){var t="offset",n=0;if(!e.isWindow(this.$scrollElement[0])){t="position";n=this.$scrollElement.scrollTop()}this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();var r=this;this.$body.find(this.selector).map(function(){var r=e(this),i=r.data("target")||r.attr("href"),s=/^#./.test(i)&&e(i);return s&&s.length&&s.is(":visible")&&[[s[t]().top+n,i]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){r.offsets.push(this[0]);r.targets.push(this[1])})};t.prototype.process=function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.getScrollHeight(),n=this.options.offset+t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;this.scrollHeight!=t&&this.refresh();if(e>=n)return s!=(o=i[i.length-1])&&this.activate(o);if(s&&e<r[0]){this.activeTarget=null;return this.clear()}for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])};t.prototype.activate=function(t){this.activeTarget=t;this.clear();var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',r=e(n).parents("li").addClass("active");r.parent(".dropdown-menu").length&&(r=r.closest("li.dropdown").addClass("active"));r.trigger("activate.bs.scrollspy")};t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var r=e.fn.scrollspy;e.fn.scrollspy=n;e.fn.scrollspy.Constructor=t;e.fn.scrollspy.noConflict=function(){e.fn.scrollspy=r;return this};e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);n.call(t,t.data())})})}(jQuery);