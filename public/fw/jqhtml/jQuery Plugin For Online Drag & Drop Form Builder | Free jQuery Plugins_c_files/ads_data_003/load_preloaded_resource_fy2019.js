(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';/* 
 
 SPDX-License-Identifier: Apache-2.0 
*/ 
let e=[];const f=()=>{const a=e;e=[];for(const b of a)try{b()}catch(c){}};function g(a=document){return a.createElement("img")};function k(a=null){return a&&"26"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="26"]')};var l=document;var m=()=>{var a=l.head,b=a.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]");for(var c=0;c<b.length;c++){const p=b[c];var d="link",h=document;d=String(d);"application/xhtml+xml"===h.contentType&&(d=d.toLowerCase());d=h.createElement(d);d.setAttribute("rel","stylesheet");d.setAttribute("href",p.getAttribute("href"));a.appendChild(d)}if(0<b.length&&!(.01<Math.random())){a=k(document.currentScript);a=`https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=jca&jc=${26}&version=${a&& 
a.getAttribute("data-jc-version")||"unknown"}&sample=${.01}`;b=window;if(c=b.navigator)c=b.navigator.userAgent,c=/Chrome/.test(c)&&!/Edge/.test(c)?!0:!1;c&&b.navigator.sendBeacon?b.navigator.sendBeacon(a):(b.google_image_requests||(b.google_image_requests=[]),c=g(b.document),c.src=a,b.google_image_requests.push(c))}};var n=document;"complete"===n.readyState||"interactive"===n.readyState?(e.push(m),1==e.length&&(window.Promise?Promise.resolve().then(f):window.setImmediate?setImmediate(f):setTimeout(f,0))):n.addEventListener("DOMContentLoaded",m);}).call(this);
