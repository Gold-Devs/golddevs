function ResumeError(){return!0}function showtab(e,t,n){for(i=1;i<=n;i++)document.getElementById(t+"_btn"+i).className="tabpane",document.getElementById(t+"_sub"+i).style.display="none";document.getElementById(t+"_btn"+e).className="current-tab",document.getElementById(t+"_sub"+e).style.display=""}window.onerror=ResumeError,function(e){e.fn.scrollToTop=function(t){var i={speed:800};return t&&e.extend(i,{speed:t}),this.each(function(){var t=e(this);e(window).scroll(function(){100<e(this).scrollTop()?t.fadeIn():t.fadeOut()}),t.click(function(t){t.preventDefault(),e("body, html").animate({scrollTop:0},i.speed)})})}}(jQuery),$(function(){$("#toTop").scrollToTop(500)}),jQuery(document).ready(function(){var e=jQuery;e(".jqoverlay .vlightbox3").mouseenter(function(){var t=e("div.vlb_zoom",this);t.length||(t=e('<div class="vlb_zoom" style="position:absolute">').hide().appendTo(this),e("img:first",t).detach()),t.fadeIn("fast")}).mouseleave(function(){e("div",this).fadeOut("fast")})}),jQuery(document).ready(function(){window.Lightbox=(new jQuery).visualLightbox({autoPlay:!1,borderSize:10,classNames:"vlightbox3",closeLocation:"top",descSliding:!0,enableRightClick:!1,enableSlideshow:!1,resizeSpeed:7,slideTime:4,startZoom:!0,prefix:"pref2_"})}),jQuery(document).ready(function(){var e=jQuery;e(".jqoverlay2 .vlightbox2").mouseenter(function(){var t=e("div.vlb_zoom",this);t.length||(t=e('<div class="vlb_zoom" style="position:absolute">').hide().appendTo(this),e("img:first",t).detach()),t.fadeIn("fast")}).mouseleave(function(){e("div",this).fadeOut("fast")})}),jQuery(document).ready(function(){window.Lightbox=(new jQuery).visualLightbox({autoPlay:!1,borderSize:10,classNames:"vlightbox2",closeLocation:"top",descSliding:!0,enableRightClick:!1,enableSlideshow:!1,resizeSpeed:7,slideTime:4,startZoom:!0,prefix:"pref2_"})}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(){var t=function(t){if(!(t=e(t)).data("timeago")){t.data("timeago",{datetime:n.datetime(t)});var i=e.trim(t.text());n.settings.localeTitle?t.attr("title",t.data("timeago").datetime.toLocaleString()):!(i.length>0)||n.isTime(t)&&t.attr("title")||t.attr("title",i)}return t.data("timeago")}(this);return isNaN(t.datetime)||e(this).text(i(t.datetime)),this}function i(e){return n.inWords(function(e){return(new Date).getTime()-e.getTime()}(e))}e.timeago=function(t){return i(t instanceof Date?t:"string"==typeof t?e.timeago.parse(t):"number"==typeof t?new Date(t):e.timeago.datetime(t))};var n=e.timeago;e.extend(e.timeago,{settings:{refreshMillis:6e4,allowFuture:!1,localeTitle:!1,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){function i(i,o){var a=e.isFunction(i)?i(o,t):i,r=n.numbers&&n.numbers[o]||o;return a.replace(/%d/i,r)}var n=this.settings.strings,o=n.prefixAgo,a=n.suffixAgo;this.settings.allowFuture&&0>t&&(o=n.prefixFromNow,a=n.suffixFromNow);var r=Math.abs(t)/1e3,s=r/60,l=s/60,d=l/24,c=d/365,h=45>r&&i(n.seconds,Math.round(r))||90>r&&i(n.minute,1)||45>s&&i(n.minutes,Math.round(s))||90>s&&i(n.hour,1)||24>l&&i(n.hours,Math.round(l))||42>l&&i(n.day,1)||30>d&&i(n.days,Math.round(d))||45>d&&i(n.month,1)||365>d&&i(n.months,Math.round(d/30))||1.5>c&&i(n.year,1)||i(n.years,Math.round(c)),u=n.wordSeparator||"";return void 0===n.wordSeparator&&(u=" "),e.trim([o,h,a].join(u))},parse:function(t){var i=e.trim(t);return i=(i=(i=(i=i.replace(/\.\d+/,"")).replace(/-/,"/").replace(/-/,"/")).replace(/T/," ").replace(/Z/," UTC")).replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(i)},datetime:function(t){var i=n.isTime(t)?e(t).attr("datetime"):e(t).attr("title");return n.parse(i)},isTime:function(t){return"time"===e(t).get(0).tagName.toLowerCase()}});var o={init:function(){var i=e.proxy(t,this);i();var o=n.settings;o.refreshMillis>0&&setInterval(i,o.refreshMillis)},update:function(i){e(this).data("timeago",{datetime:n.parse(i)}),t.apply(this)}};e.fn.timeago=function(e,t){var i=e?o[e]:o.init;if(!i)throw new Error("Unknown function name '"+e+"' for timeago");return this.each(function(){i.call(this,t)}),this},document.createElement("abbr"),document.createElement("time")}),function(e){e.fn.visualLightbox=function(t){function i(t,i,n){e("#"+t).unbind()[i](n)}function n(){i(E("overlay"),"click",C),t.openByHover?A("lightbox").unbind().hover(function(){Ce.start()},function(){Ce.stop()}):i(E("lightbox"),"click",C),i(E("prevLinkDetails"),"click",y),i(E("slideShowControl"),"click",f),i(E("closeLink"),"click",C),i(E("nextLinkDetails"),"click",v),t.enableRightClick||(i(E("hoverNav"),"mousemove",k),i(E("hoverNav"),"mouseout",L)),i(E("prevLinkImg"),"click",y),i(E("nextLinkImg"),"click",v),i(E("loadingLink"),"click",C)}function o(t){return"a"!=t.tagName.toLowerCase()&&(t=e("A:first",t)),e(t).attr("href")}function a(e){D=e,w(),p(),function(){clearTimeout(M);var e=A("loading");e.show(),e.css({visibility:"hidden"}),M=setTimeout(function(){A("loading").css({visibility:"visible"})},300)}(),t.startZoom||A("lightboxImage").hide(),A("prevLinkImg").hide(),A("nextLinkImg").hide(),t.descSliding&&A("imageDataContainer").hide(),(N=new Image).onload=function(){j[D].link=N.src,j[D].width=N.width,j[D].height=N.height,r(!1)},t.startZoom&&!A("lightboxImage").attr("src")&&(j[D].width=320,j[D].height=240,r(!1,!0)),N.src=j[D].link,t.googleAnalytics&&urchinTracker(j[D].link)}function r(i,n){var o,a,r,c,h=j[D].width,u=j[D].height,m=function(){var e,t;return self.innerHeight?(e=self.innerWidth,t=self.innerHeight):document.documentElement&&document.documentElement.clientHeight?(e=document.documentElement.clientWidth,t=document.documentElement.clientHeight):document.body&&(e=document.body.clientWidth,t=document.body.clientHeight),{winWidth:e,winHeight:t}}(),g=h/u;if(t.featBrowser){var f=m.winWidth/m.winHeight;if((h+2*t.borderSize+2*t.breathingSize)/(u+2*t.borderSize+2*t.breathingSize+Z)>f)var p=m.winWidth-2*t.borderSize-2*t.breathingSize,v=Math.round(p/g);else v=m.winHeight-2*t.borderSize-2*t.breathingSize-Z,p=Math.round(v*g);(h>p||u>v)&&(h=p,u=v)}r=h+2*t.borderSize,c=u+Z+2*t.borderSize;var b=T();t.openByHover?(a=Math.min(Math.max(e(O).offset().left+e(O).width()/2-r/2,b.x),b.x+m.winWidth-r),o=Math.min(Math.max(e(O).offset().top+e(O).height()/2-c/2,b.y),b.y+m.winHeight-c)):(o=b.y+(m.winHeight-c)/2,a=b.x),(c=Math.max(c,parseInt(A("lightbox").height())))>m.winHeight&&(o=Math.max(Math.min(A("lightbox").offset().top,b.y),b.y+m.winHeight-c));var y=t.openByHover?r+"px":/mobile.+safari/i.test(navigator.userAgent)?m.winWidth+"px":"100%",w=A("imageContainer");if(1==i)w.css({height:u+"px",width:h+"px"}),t.floating?l(A("lightbox"),a,o,y):A("lightbox").css({top:o+"px",left:a+"px"});else{var x,C=A("lightboxImage");w.stop(!0,!1),C.stop(!0,!1),t.startZoom&&C.attr("src")?(x=C).attr({id:E("lightboxImage2")}):C.remove(),n||((C=e(N)).hide(),C.attr({id:E("lightboxImage")}),w.append(C));var S=g/(w.width()/w.height());if(!n){if(t.startZoom){x&&A("lightboxImage2").stop(!0,!0);var I=x?120:100;x&&x.css({width:1>S?"auto":x.width()/x.parent().width()*100+"%",height:1>S?x.height()/x.parent().height()*100+"%":"auto",left:0,top:0}),C.css({opacity:0,display:"block",position:"absolute",width:1>S?I+"%":"auto",height:1>S?"auto":I+"%",left:(100-I*(1>S?1:S))/2+"%",top:(100-I*(1>S?1/S:1))/2+"%"})}t.startZoom&&d()}s(a,o,h,u,y,S,n)}"absolute"!=A("imageDataContainer").css("position")&&A("imageDataContainer").css({width:h+"px"}),t.enableRightClick&&(A("lightboxImage").mousemove(k),A("lightboxImage").mouseout(L))}function s(i,n,o,a,r,s,d){var h=A("imageContainer"),u=A("lightboxImage"),m=A("lightbox");if(!d)var g=A("lightboxImage2");t.startZoom&&(u.fadeTo(1e3*R,1),document.all||A("outerImageContainer").fadeTo(1e3*R,1)),l(m,i,n,r),t.startZoom&&!d&&(g.animate(e.extend({opacity:0},1>s?{height:"120%",top:"-10%",left:(100-120/s)/2+"%"}:{width:"120%",left:"-10%",top:(100-120*s)/2+"%"}),{queue:!1,duration:1e3*R,complete:function(){e(this).remove()}}),u.animate(e.extend({left:0,top:0},1>s?{width:"100%"}:{height:"100%"}),{queue:!1,duration:1e3*R})),h.animate({width:o+"px",height:a+"px"},{queue:!1,duration:1e3*R,complete:d?null:function(){c()}})}function l(e,t,i,n){e.stop(!0,!1);var o={top:i,left:t};n!=e.get(0).style.width&&(o.width=n),e.animate(o,{queue:!1,duration:1e3*R})}function d(){clearTimeout(M),A("loading").hide()}function c(){d(),t.startZoom?(A("overlay:hidden").css({opacity:0}).show().fadeTo(1e3*Q,t.overlayOpacity),h()):A("lightboxImage").css({opacity:0}).show().fadeTo(500,1,function(){h()}),function(){var e=j.length-1==D?0:D+1;(new Image).src=j[e].link;var t=0==D?j.length-1:D-1;(new Image).src=j[t].link}()}function h(){(function(){if(A("caption").html((j[D].title||"").replace(/\n/g,"<br>")),j[D].title?A("caption").show():A("caption").hide(),j.length>1){var e=t.strings.numDisplayPrefix+" "+parseInt(D+1)+" "+t.strings.numDisplaySeparator+" "+j.length;t.showGroupName&&H&&(e+=" "+t.strings.numDisplaySeparator+" "+H),A("numberDisplay").text(e),A("slideShowControl").css({display:_?"":"none"})}})(),t.descSliding?A("imageDataContainer").animate({height:"show",opacity:"show"},650,null,function(){u()}):u()}function u(){var e=1/j.length;Z=Z*(1-e)+A("imageDataContainer").height()*e,j.length>1?(A("prevLinkImg").show(),A("nextLinkImg").show(),_&&(F?m():g())):(A("prevLinkImg").hide(),A("nextLinkImg").hide()),document.onkeydown=x}function m(){A("lightbox:hidden").length||(p(),F=!0,B=setTimeout(function(){v()},1e3*t.slideTime),A("slideShowControl").text(t.strings.stopSlideshow),A("slideShowControl").addClass("started"))}function g(){F=!1,p(),A("slideShowControl").text(t.strings.startSlideshow),A("slideShowControl").removeClass("started")}function f(){F?g():m()}function p(){B&&(B=clearTimeout(B))}function v(){if(j.length>1){if(p(),!t.loop&&(D==j.length-1&&0==W||D+1==W))return void C();b(D==j.length-1?0:D+1)}}function b(e){t.descSliding?A("imageDataContainer").animate({height:"hide",opacity:"hide"},650,null,function(){a(e)}):a(e)}function y(){j.length>1&&b(0==D?j.length-1:D-1)}function w(){document.onkeydown=""}function x(e){keycode=null==e?event.keyCode:e.which,key=String.fromCharCode(keycode).toLowerCase(),"x"==key||"o"==key||"c"==key||27==keycode?C():"p"==key||"%"==key?y():"n"==key||"'"==key?v():"f"==key?j.length>1&&b(0):"l"==key?j.length>1&&b(j.length-1):"s"==key&&j.length>0&&t.enableSlideshow&&f()}function C(i){if(i){var n=e(i.target).attr("id");if(E("closeLink")!=n&&E("lightbox")!=n&&E("overlay")!=n)return}A("imageContainer").stop(!0,!1),A("lightboxImage").stop(!0,!1),N.onload=null,w(),p(),A("lightbox").hide(),function(){for(var t,i=z,n=0;n<i.length;n++){t=document.getElementsByTagName(i[n]);for(var o=0;o<t.length;o++)e(t[o]).css({visibility:"visible"})}}(),t.overlayOpacity?A("overlay").fadeOut(1e3*Q):A("overlay").hide(),e(window).unbind("resize",S),e(window).unbind("scroll",S),e(window).unbind("resize",I),e(window).unbind("scroll",I)}function k(e){e.pageX-A("imageContainer").offset().left<A("imageContainer").width()/2?(A("prevLinkImg").addClass("hover"),A("nextLinkImg").removeClass("hover")):(A("prevLinkImg").removeClass("hover"),A("nextLinkImg").addClass("hover"))}function L(){A("prevLinkImg").removeClass("hover"),A("nextLinkImg").removeClass("hover")}function S(){r(!0)}function I(){var e,t,i,n;A("overlay").css({left:T().x+"px",top:0,width:"100%",height:(e=document.body,t=document.documentElement,i=0,n=0,t&&(i=Math.max(i,t.scrollWidth,t.offsetWidth),n=Math.max(n,t.scrollHeight,t.offsetHeight)),e&&(i=Math.max(i,e.scrollWidth,e.offsetWidth),n=Math.max(n,e.scrollHeight,e.offsetHeight),window.innerWidth&&(i=Math.max(i,window.innerWidth),n=Math.max(n,window.innerHeight))),[i,n])[1]+"px"})}function T(){var e,t;return self.pageYOffset||self.pageXOffset?(e=self.pageXOffset,t=self.pageYOffset):document.documentElement&&(document.documentElement.scrollTop||document.documentElement.scrollLeft)?(e=document.documentElement.scrollLeft,t=document.documentElement.scrollTop):document.body&&(e=document.body.scrollLeft,t=document.body.scrollTop),{x:e,y:t}}function E(e){return t.prefix+e}function A(t){return e("#"+E(t))}var N,M,D=null,z=["select","object","embed"],H=null,j=[],B=null,W=null,O=0,Z=50;if(document.getElementsByTagName){if((t=e.extend({animate:!0,autoPlay:!0,borderSize:39,containerID:document,enableSlideshow:!0,googleAnalytics:!1,descSliding:!0,imageDataLocation:"south",shadowLocation:"",closeLocation:"",initImage:"",loop:!0,overlayDuration:.2,overlayOpacity:.7,prefix:"",classNames:"vlightbox",resizeSpeed:7,showGroupName:!1,slideTime:4,strings:{closeLink:"",loadingMsg:"loading",nextLink:"",prevLink:"",startSlideshow:"",stopSlideshow:"",numDisplayPrefix:"",numDisplaySeparator:"/"},openByHover:!1,enableRightClick:!1,featBrowser:!0,breathingSize:10,startZoom:!1,floating:!0},t)).animate){var Q=Math.max(t.overlayDuration,0);t.resizeSpeed=Math.max(Math.min(t.resizeSpeed,10),1);var R=.15*(11-t.resizeSpeed)}else Q=0,R=0;var _=t.enableSlideshow;t.overlayOpacity=Math.max(Math.min(t.overlayOpacity,1),0);var F=t.autoPlay,q=e(t.containerID),P=t.classNames;e("."+P.replace(/\,/g,",."),q).each(function(){o(this)&&(t.openByHover?e(this).hover(function(){Ce.start(this)},function(){Ce.stop(this)}):e(this).click(function(e){return e.preventDefault(),ke(this),!1}))});var $=q.length&&q.get(0)!=document?q.get(0):document.getElementsByTagName("body").item(0);if($.childNodes.length&&(e($.childNodes[0]).before(e("<div></div>")),$=$.childNodes[0]),!document.getElementById(E("overlay"))){var X=document.createElement("div");X.setAttribute("id",E("overlay")),X.style.display="none",$.appendChild(X);var G=document.createElement("div");G.setAttribute("id",E("lightbox")),G.style.display="none",$.appendChild(G);var U=document.createElement("div");U.setAttribute("id",E("imageDataContainer")),U.className=E("clearfix");var Y=document.createElement("table");Y.setAttribute("id",E("outerImageContainer")),Y.cellSpacing=0,G.appendChild(Y);var J=Y.insertRow(-1);J.insertCell(-1).className="tl",J.insertCell(-1).className="tc";var K=J.insertCell(-1);K.className="tr";var V=Y.insertRow(-1);V.insertCell(-1).className="ml";var ee=V.insertCell(-1);ee.setAttribute("id",E("lightboxFrameBody")),V.insertCell(-1).className="mr";var te=Y.insertRow(-1);te.insertCell(-1).className="bl";var ie=te.insertCell(-1);ie.className="bc",te.insertCell(-1).className="br","north"==t.imageDataLocation&&ee.appendChild(U);var ne=document.createElement("div");ne.setAttribute("id",E("imageData")),U.appendChild(ne);var oe=document.createElement("div");oe.setAttribute("id",E("imageDetails")),ne.appendChild(oe);var ae=document.createElement("div");ae.setAttribute("id",E("caption")),oe.appendChild(ae),ae.style.display="none";var re=document.createElement("span");re.setAttribute("id",E("numberDisplay")),oe.appendChild(re);var se=document.createElement("span");se.setAttribute("id",E("detailsNav")),oe.appendChild(se);var le=document.createElement("a");le.setAttribute("id",E("prevLinkDetails")),le.setAttribute("href","javascript:void(0);"),le.innerHTML=t.strings.prevLink,se.appendChild(le);var de=document.createElement("a");de.setAttribute("id",E("slideShowControl")),de.setAttribute("href","javascript:void(0);"),se.appendChild(de);var ce=document.createElement("a");if(ce.setAttribute("id",E("closeLink")),ce.setAttribute("href","javascript:void(0);"),ce.innerHTML=t.strings.closeLink,"nav"==t.closeLocation)se.appendChild(ce);else{var he=document.createElement("div");he.setAttribute("id",E("close")),"top"==t.closeLocation?K.appendChild(he):ne.appendChild(he),he.appendChild(ce)}var ue=document.createElement("a");ue.setAttribute("id",E("nextLinkDetails")),ue.setAttribute("href","javascript:void(0);"),ue.innerHTML=t.strings.nextLink,se.appendChild(ue);var me=document.createElement("div");me.setAttribute("id",E("imageContainerMain")),ee.appendChild(me);var ge=document.createElement("div");ge.setAttribute("id",E("imageContainer")),me.appendChild(ge);var fe=document.createElement("img");if(fe.setAttribute("id",E("lightboxImage")),ge.appendChild(fe),!t.enableRightClick){var pe=document.createElement("div");pe.setAttribute("id",E("hoverNav")),pe.style.background="white",pe.style.opacity=0,pe.style.filter="alpha(opacity=0)",ge.appendChild(pe)}var ve=document.createElement("a");ve.setAttribute("id",E("prevLinkImg")),ve.setAttribute("href","javascript:void(0);"),me.appendChild(ve);var be=document.createElement("a");be.setAttribute("id",E("nextLinkImg")),be.setAttribute("href","javascript:void(0);"),me.appendChild(be);var ye=document.createElement("div");ye.setAttribute("id",E("loading")),ge.appendChild(ye);var we=document.createElement("a");we.setAttribute("id",E("loadingLink")),we.setAttribute("href","javascript:void(0);"),we.innerHTML=t.strings.loadingMsg,ye.appendChild(we),"north"!=t.imageDataLocation&&ee.appendChild(U);var xe=document.createElement("div");xe.setAttribute("id",E("shadow")),(t.shadowLocation?document.getElementById(E(t.shadowLocation)):ie).appendChild(xe)}var Ce=new function(e,t,i,n){var o,a,r;this.start=function(n){r&&clearTimeout(r),r=0,n&&n!=o&&(o&&(a?clearTimeout(a):i(o),a=0),o=n,a=setTimeout(function(){a=0,e(n)},t))},this.stop=function(e){!o||e&&o!=e||(a&&clearTimeout(a),a=0,r||(r=setTimeout(function(){r=0,i(e||o),o=0},n)))}}(function(e){ke(e)},400,function(){C()},300);""!=t.initImage&&ke("#"+t.initImage);var ke=this.start=function(i){(function(){for(var t=z,i=0;i<t.length;i++)e(t[i]).css({visibility:"hidden"})})(),i=e(i),O=i.get(0),A("overlay").css({height:"100%",left:T().x+"px"}),t.descSliding&&A("imageDataContainer").hide(),A("lightboxImage").hide().attr({src:""}),t.startZoom?(A("imageContainer").css({width:i.width()+"px",height:i.height()+"px"}),document.all||A("outerImageContainer").css({opacity:.1}),A("lightbox").css({left:i.offset().left-t.borderSize+"px",top:i.offset().top-t.borderSize+"px",width:i.width()+2*t.borderSize+"px",height:"auto"})):(A("overlay").css({opacity:0}).show().fadeTo(1e3*Q,t.overlayOpacity),A("lightbox").css({left:0,width:"100%"})),n(),A("lightbox").show(),j=[],H=null,W=0,e("."+(i.attr("className")||i.get(0).className),q).each(function(){var t;o(this)&&(j.push({link:o(this),title:(t=this,/^a$/i.test(t.tagName)?e(t).attr("title")||t.title:e(">div:first",t).html())}),this==i.get(0)&&(W=j.length-1))}),j.length>1&&(H=i.attr("className")),t.featBrowser&&e(window).resize(S),t.floating&&e(window).scroll(S),e(window).resize(I),e(window).scroll(I),a(W)};return this}}}(jQuery);