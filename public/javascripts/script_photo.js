var scw=function(e){if(jQuery(window).width()>=e){return true}else{return false}};var mediaquerywidth=767+1;var iphonewidth=480+1;var optioncurtain=0;var defaultexecuted=0;var musicplayer=null;var mppaused=false;jQuery(document).ready(function(e){var t=e("#mplist");if(t.length>0){e(".openplaylist").click(function(){e(t).fadeIn();return false});e(".mpcls").click(function(){e(t).fadeOut();return false})}});var mpnotifbox=function(e){jQuery(".mpnotif").html(e);jQuery(".mpnotif").fadeIn();setTimeout(function(){jQuery(".mpnotif").fadeOut()},3e3)};var muteplayer=function(){if(typeof mplang!="undefined"){mpnotifbox(mplang.playlistmuted);jQuery("#jquery_jplayer").jPlayer("mute")}};var unmuteplayer=function(){if(typeof mplang!="undefined"){jQuery("#jquery_jplayer").jPlayer("unmute")}};(function(e){e.fn.outerHTML=function(){return e(this).clone().wrap("<div></div>").parent().html()}})(jQuery);var notifbox=function(e,t){var n=undefined;var r=jQuery(".notification");var i=jQuery(r).css("top");var s=80;if(jQuery(r).attr("data-small-menu")==1){s=40}jQuery(r).show();jQuery(r).addClass("unfolded");var o=function(){var e=(jQuery(window).width()-jQuery(r).width())/2;jQuery(r).css({left:e})};o();jQuery(window).resize(function(){o()});var u=function(e){clearTimeout(n);jQuery(r).animate({top:0},"fast",function(){jQuery(r).hide().removeClass("unfolded");e=e||jQuery.noop;e()})};var a=function(){jQuery(".notification-content",r).html(e);jQuery(r).show().animate({top:s},"fast");jQuery(r).addClass("unfolded");if(t>0){clearTimeout(n);n=setTimeout(function(){u()},t)}};jQuery(".closeme",r).click(function(){u()});jQuery(window).bind("jmainremove",function(){jQuery(r).hide()});if(!jQuery(r).hasClass("unfolded")){a()}else{u(a)}};jQuery(document).ready(function(e){var t;var n=45;var r=40;var i=undefined;var s=false;if(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)){s=true}e("nav li").each(function(){var t=e(this);e(t).find("li").each(function(){if(!e(this).hasClass("haschild")){var t=e(this).children("ul");if(t.length>0){e(this).addClass("haschild");e(this).children("a").prepend('<div class="icon-white"></div>')}}})});var o=function(n){var r=e(n);var i=e(n).parent().position().left;var s=e(n).parent().width();i=i+s/2;var o=e(window).width();var u=0;e(n).children("li").each(function(){u+=e(this).width()});t=i-u/2;if(t<0){t=1}else if(t+u>o){t=o-u-1}return t};var u=function(t){var n=e(t).children("ul").length;if(n==0){if(s){var r=e(t).find("a").attr("href");tourl(r,true)}}else{e(t).children("ul").stop().slideDown("fast",function(){var t=o(this);e(this).animate({"padding-left":t},function(){e(this).width(e(window).width()-t)})})}};var a=function(t){var n=function(){if(t.parent().hasClass("menu")){e(t).find(".bgmenu").stop().animate({height:0},150,function(){e(t).find("a").removeClass("whitecolor");if(s){setTimeout(function(){var n=e(t).parent().outerHTML();e(t).parent().parent().html("").append(n);l()},1200)}e(this).remove()})}};if(s){var r=e(t).children("ul");if(r.length>0){n()}else{setTimeout(function(){n()},500)}}else{n()}};var f=function(t){var n=e(t).children("ul");if(n.length>0){e(t).children("ul").stop().slideUp("fast",function(){a(t);e(this).css({overflow:"",height:"auto"})})}else{a(t)}};var l=function(){e("header nav li").hoverIntent({over:function(){if(scw(mediaquerywidth)){var t=e(this);i=t;e(t).find("a").addClass("whitecolor");if(t.parent().hasClass("menu")){var n="<div class='bgmenu'></div>";e(t).prepend(n);u(t);e(t).find(".bgmenu").css({width:e(t).width()}).stop().animate({height:e(t).height()},150,function(){})}else{u(t)}}},out:function(){if(scw(mediaquerywidth)){var t=e(this);f(t)}},timeout:250})};l();var c=function(t){if(e(t).parent().hasClass("menu")){return e(t)}else{return c(e(t).parent())}};var h=function(t){var n=e(t).children("ul");if(n.length>0){e(n).slideUp("fast");e(n).children("li").each(function(){h(e(this))})}};var p=function(e){var t=c(e);a(t);h(t)};e(window).bind("menuslideup",function(){if(i!==undefined){p(i)}})});var checktourl=function(e){var t=base_url;var n=document.URL;var r=e;var i=r.indexOf(t);if(i==0){var s=n.split("#");var o=r.split("#");if(s[0]==o[0]){var u=r.indexOf("#");if(u==-1){return false}else{return true}}else{if(n==r){return true}else{return false}}}else{return true}};String.prototype.unescapeHtml=function(){var e=document.createElement("div");e.innerHTML=this;var t=e.childNodes[0].nodeValue;e.removeChild(e.firstChild);return t};var ajax_request=undefined;var tourl=function(e,t){var n=document.URL;if(!scw(iphonewidth)){window.location=e}else{if((Modernizr.history&&jcurtain)!=0){if(!checktourl(e)){if(t){history.pushState({href:e},"",e)}jQuery("html, body").animate({scrollTop:0},function(){});var r=jQuery(window).height();jQuery(window).trigger("menuslideup");unmuteplayer();function i(){jQuery("#main").remove();jQuery(window).trigger("jmainremove");var t=function(t){jQuery("div[role=main]").empty().append(t);if(jQuery(".pagemetawrapper").length==0)window.location=e;document.title=jQuery(".pagemetawrapper .pagemetatitle").text().unescapeHtml();if(curtainstyle=="fade"){jQuery(".curtain").fadeOut("slow")}else{jQuery(".curtain-loader").fadeOut();jQuery(".curtain").animate({height:0},1500,function(){})}};if(ajax_request!==undefined){ajax_request.abort()}ajax_request=jQuery.ajax({url:e,type:"POST",dataType:"html",success:function(e){t(e)},error:function(n,r,i){if(n.status=="404"){t(n.responseText)}else{window.location=e}}})}if(curtainstyle=="fade"){jQuery(".curtain").fadeIn(500,function(){i()})}else{jQuery(".curtain").animate({height:"100%"},300,function(){jQuery(".curtain-loader").fadeIn();i()})}return false}return true}else{window.location=e}}};window.tourl=tourl;jQuery(document).ready(function(e){if(Modernizr.history){window.onpopstate=function(e){if(e.state!==null){return tourl(e.state.href,false)}}}if(curtainstyle=="fade"){e(".curtain").addClass("curtainfade")}e(".navselect select").change(function(){tourl(e(this).val(),true)})});(function(e){e.fn.jegdefault=function(t){var n={curtain:false,rightclick:true,clickmsg:""};if(t){var t=e.extend(n,t)}else{var t=e.extend(n)}if(!t.rightclick&&defaultexecuted==0){e(document).mousedown(function(e){if(e.button==2){alert(t.clickmsg);return false}return true})}if(Modernizr.history){e("a").not('[data-tourl="false"]').unbind("click");if(t.curtain){e("a").not('[data-tourl="false"]').bind("click",function(){if(!e(this).parents("#wpadminbar").length){return tourl(this.href,true)}else{return true}})}}e('[data-dismiss="alert"]').click(function(){e(this).parent().fadeOut()});e('[data-tab="tab"]').each(function(){var t=e(this),n=[e("> .nav-tabs > li",t),e("> .tab-content > .tab-pane",t)];e(n).each(function(){e(this).parent().children(":first").addClass("active")});e("> .nav-tabs li",t).click(function(){if(!e(this).hasClass("active")){var t="active";e(n).each(function(){e(this).removeClass(t)});e(this).addClass(t);e(n[1].get(n[0].index(this))).addClass(t);e(window,document).trigger("resize")}return false})});e('[data-accordion="accordion"]').each(function(){var t=e(this);var n="> .accordion-body",r="> .accordion-group";var i=function(t){if(e(t).hasClass("active")){s(t)}else{e(n,t).slideDown("fast");e(t).addClass("active")}};var s=function(t){e(n,t).slideUp("fast");e(t).removeClass("active")};i(e(r,t).get(0));s(e(r,t).not(":eq(0)"));e(r,t).click(function(n){var o=e(r,t).index(this);i(e(r,t).get(o));s(e(r,t).not(":eq("+o+")"));return false})});e('[data-rel="tooltip"]').tipTip({maxWidth:"auto",edgeOffset:10,defaultPosition:"top",delay:100});e(".removeme").remove();e("html").css("overflow-y","").css("overflow-x","").css("overflow","");defaultexecuted++}})(jQuery)