/* ========================================================================
 * Bootstrap: affix.js v3.3.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */+function(e){"use strict";function n(n){return this.each(function(){var r=e(this),i=r.data("bs.affix"),s=typeof n=="object"&&n;i||r.data("bs.affix",i=new t(this,s));typeof n=="string"&&i[n]()})}var t=function(n,r){this.options=e.extend({},t.DEFAULTS,r);this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this));this.$element=e(n);this.affixed=this.unpin=this.pinnedOffset=null;this.checkPosition()};t.VERSION="3.3.1";t.RESET="affix affix-top affix-bottom";t.DEFAULTS={offset:0,target:window};t.prototype.getState=function(e,t,n,r){var i=this.$target.scrollTop(),s=this.$element.offset(),o=this.$target.height();if(n!=null&&this.affixed=="top")return i<n?"top":!1;if(this.affixed=="bottom")return n!=null?i+this.unpin<=s.top?!1:"bottom":i+o<=e-r?!1:"bottom";var u=this.affixed==null,a=u?i:s.top,f=u?o:t;return n!=null&&a<=n?"top":r!=null&&a+f>=e-r?"bottom":!1};t.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(t.RESET).addClass("affix");var e=this.$target.scrollTop(),n=this.$element.offset();return this.pinnedOffset=n.top-e};t.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var n=this.$element.height(),r=this.options.offset,i=r.top,s=r.bottom,o=e("body").height();typeof r!="object"&&(s=i=r);typeof i=="function"&&(i=r.top(this.$element));typeof s=="function"&&(s=r.bottom(this.$element));var u=this.getState(o,n,i,s);if(this.affixed!=u){this.unpin!=null&&this.$element.css("top","");var a="affix"+(u?"-"+u:""),f=e.Event(a+".bs.affix");this.$element.trigger(f);if(f.isDefaultPrevented())return;this.affixed=u;this.unpin=u=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(t.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}u=="bottom"&&this.$element.offset({top:o-n-s})};var r=e.fn.affix;e.fn.affix=n;e.fn.affix.Constructor=t;e.fn.affix.noConflict=function(){e.fn.affix=r;return this};e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),r=t.data();r.offset=r.offset||{};r.offsetBottom!=null&&(r.offset.bottom=r.offsetBottom);r.offsetTop!=null&&(r.offset.top=r.offsetTop);n.call(t,r)})})}(jQuery);