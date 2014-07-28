!function(t,s,e){"use strict";Foundation.libs.topbar={name:"topbar",version:"4.3.2",settings:{index:0,stickyClass:"sticky",custom_back_text:!0,back_text:"Back",is_hover:!0,mobile_show_parent_link:!1,scrolltop:!0,init:!1},init:function(e,a,i){Foundation.inherit(this,"data_options addCustomRule");var n=this;return"object"==typeof a?t.extend(!0,this.settings,a):"undefined"!=typeof i&&t.extend(!0,this.settings,i),"string"!=typeof a?(t(".top-bar, [data-topbar]").each(function(){t.extend(!0,n.settings,n.data_options(t(this))),n.settings.$w=t(s),n.settings.$topbar=t(this),n.settings.$section=n.settings.$topbar.find("section"),n.settings.$titlebar=n.settings.$topbar.children("ul").first(),n.settings.$topbar.data("index",0);var e=n.settings.$topbar.parent();e.hasClass("fixed")||e.hasClass(n.settings.stickyClass)?(n.settings.$topbar.data("height",n.outerHeight(e)),n.settings.$topbar.data("stickyoffset",e.offset().top)):n.settings.$topbar.data("height",n.outerHeight(n.settings.$topbar));var a=t("<div class='top-bar-js-breakpoint'/>").insertAfter(n.settings.$topbar);n.settings.breakPoint=a.width(),a.remove(),n.assemble(),n.settings.is_hover&&n.settings.$topbar.find(".has-dropdown").addClass("not-click"),n.addCustomRule(".f-topbar-fixed { padding-top: "+n.settings.$topbar.data("height")+"px }"),n.settings.$topbar.parent().hasClass("fixed")&&t("body").addClass("f-topbar-fixed")}),n.settings.init||this.events(),this.settings.init):this[a].call(this,i)},toggle:function(){var e=this,a=t(".top-bar, [data-topbar]"),i=a.find("section, .section");e.breakpoint()&&(e.rtl?(i.css({right:"0%"}),i.find(">.name").css({right:"100%"})):(i.css({left:"0%"}),i.find(">.name").css({left:"100%"})),i.find("li.moved").removeClass("moved"),a.data("index",0),a.toggleClass("expanded").css("height","")),e.settings.scrolltop?a.hasClass("expanded")?a.parent().hasClass("fixed")&&(e.settings.scrolltop?(a.parent().removeClass("fixed"),a.addClass("fixed"),t("body").removeClass("f-topbar-fixed"),s.scrollTo(0,0)):a.parent().removeClass("expanded")):a.hasClass("fixed")&&(a.parent().addClass("fixed"),a.removeClass("fixed"),t("body").addClass("f-topbar-fixed")):(a.parent().hasClass(e.settings.stickyClass)&&a.parent().addClass("fixed"),a.parent().hasClass("fixed")&&(a.hasClass("expanded")?(a.addClass("fixed"),a.parent().addClass("expanded")):(a.removeClass("fixed"),a.parent().removeClass("expanded"),e.updateStickyPositioning())))},timer:null,events:function(){var a=this;t(this.scope).off(".fndtn.topbar").on("click.fndtn.topbar",".top-bar .toggle-topbar, [data-topbar] .toggle-topbar",function(t){t.preventDefault(),a.toggle()}).on("click.fndtn.topbar",".top-bar li.has-dropdown",function(s){{var e=t(this),i=t(s.target),n=e.closest("[data-topbar], .top-bar");n.data("topbar")}return i.data("revealId")?void a.toggle():void(a.breakpoint()||(!a.settings.is_hover||Modernizr.touch)&&(s.stopImmediatePropagation(),"A"===i[0].nodeName&&i.parent().hasClass("has-dropdown")&&s.preventDefault(),e.hasClass("hover")?(e.removeClass("hover").find("li").removeClass("hover"),e.parents("li.hover").removeClass("hover")):e.addClass("hover")))}).on("click.fndtn.topbar",".top-bar .has-dropdown>a, [data-topbar] .has-dropdown>a",function(e){if(a.breakpoint()&&t(s).width()!=a.settings.breakPoint){e.preventDefault();var i=t(this),n=i.closest(".top-bar, [data-topbar]"),o=n.find("section, .section"),d=(i.next(".dropdown").outerHeight(),i.closest("li"));n.data("index",n.data("index")+1),d.addClass("moved"),a.rtl?(o.css({right:-(100*n.data("index"))+"%"}),o.find(">.name").css({right:100*n.data("index")+"%"})):(o.css({left:-(100*n.data("index"))+"%"}),o.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",a.outerHeight(i.siblings("ul"),!0)+a.settings.$topbar.data("height"))}}),t(s).on("resize.fndtn.topbar",function(){if("undefined"!=typeof a.settings.$topbar){var s,i=a.settings.$topbar.parent("."+this.settings.stickyClass);if(!a.breakpoint()){var n=a.settings.$topbar.hasClass("expanded");t(".top-bar, [data-topbar]").css("height","").removeClass("expanded").find("li").removeClass("hover"),n&&a.toggle()}i.length>0&&(i.hasClass("fixed")?(i.removeClass("fixed"),s=i.offset().top,t(e.body).hasClass("f-topbar-fixed")&&(s-=a.settings.$topbar.data("height")),a.settings.$topbar.data("stickyoffset",s),i.addClass("fixed")):(s=i.offset().top,a.settings.$topbar.data("stickyoffset",s)))}}.bind(this)),t("body").on("click.fndtn.topbar",function(s){var e=t(s.target).closest("li").closest("li.hover");e.length>0||t(".top-bar li, [data-topbar] li").removeClass("hover")}),t(this.scope).on("click.fndtn",".top-bar .has-dropdown .back, [data-topbar] .has-dropdown .back",function(s){s.preventDefault();var e=t(this),i=e.closest(".top-bar, [data-topbar]"),n=i.find("section, .section"),o=e.closest("li.moved"),d=o.parent();i.data("index",i.data("index")-1),a.rtl?(n.css({right:-(100*i.data("index"))+"%"}),n.find(">.name").css({right:100*i.data("index")+"%"})):(n.css({left:-(100*i.data("index"))+"%"}),n.find(">.name").css({left:100*i.data("index")+"%"})),0===i.data("index")?i.css("height",""):i.css("height",a.outerHeight(d,!0)+a.settings.$topbar.data("height")),setTimeout(function(){o.removeClass("moved")},300)})},breakpoint:function(){return t(e).width()<=this.settings.breakPoint||t("html").hasClass("lt-ie9")},assemble:function(){var s=this;this.settings.$section.detach(),this.settings.$section.find(".has-dropdown>a").each(function(){var e=t(this),a=e.siblings(".dropdown"),i=e.attr("href");if(s.settings.mobile_show_parent_link&&i&&i.length>1)var n=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li><li><a class="parent-link js-generated" href="'+i+'">'+e.text()+"</a></li>");else var n=t('<li class="title back js-generated"><h5><a href="#"></a></h5></li>');n.find("h5>a").html(1==s.settings.custom_back_text?s.settings.back_text:"&laquo; "+e.html()),a.prepend(n)}),this.settings.$section.appendTo(this.settings.$topbar),this.sticky()},height:function(s){var e=0,a=this;return s.find("> li").each(function(){e+=a.outerHeight(t(this),!0)}),e},sticky:function(){var e=t(s),a=this;e.scroll(function(){a.updateStickyPositioning()})},updateStickyPositioning:function(){var e="."+this.settings.stickyClass,a=t(s);if(t(e).length>0){var i=this.settings.$topbar.data("stickyoffset");t(e).hasClass("expanded")||(a.scrollTop()>i?t(e).hasClass("fixed")||(t(e).addClass("fixed"),t("body").addClass("f-topbar-fixed")):a.scrollTop()<=i&&t(e).hasClass("fixed")&&(t(e).removeClass("fixed"),t("body").removeClass("f-topbar-fixed")))}},off:function(){t(this.scope).off(".fndtn.topbar"),t(s).off(".fndtn.topbar")},reflow:function(){}}}(Foundation.zj,this,this.document);