/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={192:(e,t,o)=>{o.d(t,{Z:()=>x});var n=o(81),r=o.n(n),i=o(645),a=o.n(i),s=o(667),l=o.n(s),c=new URL(o(312),o.b),d=new URL(o(150),o.b),p=new URL(o(915),o.b),h=new URL(o(333),o.b),u=new URL(o(85),o.b),f=a()(r()),g=l()(c),b=l()(d),y=l()(p),m=l()(h),v=l()(u);f.push([e.id,':root{--size: 20px}@font-face{font-family:"Arcade";src:url('+g+') format("woff2"),url('+b+') format("woff");font-weight:normal;font-style:normal}progress,sub,sup{vertical-align:baseline}button,hr,input{overflow:visible}html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}figcaption,menu,article,aside,details,figure,footer,header,main,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent;-webkit-text-decoration-skip:objects}a:active,a:hover{outline-width:0}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}svg:not(:root){overflow:hidden}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}figure{margin:1em 40px}hr{box-sizing:content-box;height:0}button,input,select,textarea{font:inherit;margin:0}optgroup{font-weight:700}button,select{text-transform:none}[type=submit],[type=reset],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:ButtonText dotted 1px}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-input-placeholder{color:inherit;opacity:.54}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}html{box-sizing:border-box;background:#32822b}*,*:before,*:after{box-sizing:inherit}html,body{height:100%;width:100%;color:#001f3f;font-family:"Courier New",Courier,monospace}#garden{background-image:url('+y+');position:absolute;top:10%;left:10%;right:10%;bottom:10%;border:1px solid #000;overflow:hidden}.score{font-family:"Arcade";color:#fff;font-size:70px;text-align:center;display:grid;grid-template-columns:6fr 6fr}.score #points{padding:10px;text-align:right;z-index:10;opacity:.8}.score #top{text-align:left;padding:10px;z-index:10;opacity:.8}.score #start{background:#3f9939;color:#001f3f;padding:5px 10px;border:1px solid #001f3f;margin:5px;font-size:20px}.footer{position:absolute;bottom:0;width:100%;text-align:center;padding:10px;color:#f5f5f5;font-size:12px}kbd{background-color:#eee;border-radius:3px;border:1px solid #b4b4b4;box-shadow:0 1px 1px rgba(0,0,0,.2),0 2px 0 0 rgba(255,255,255,.7) inset;color:#333;display:inline-block;font-size:.85em;font-weight:700;line-height:1;padding:2px 4px;white-space:nowrap}.splash{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.5);z-index:100;font-size:70px;color:#fff;font-family:"Arcade";display:flex;justify-content:center;align-items:center}.vanish{width:calc(var(--size) + 20px) !important;height:calc(var(--size) + 20px) !important;margin:-10 !important;opacity:0;transition:all ease 250ms}.cell{position:absolute;height:var(--size);width:var(--size);background:#89c430;text-align:center;color:#6c9b26;line-height:var(--size);z-index:2;display:flex;align-items:center;justify-content:center}.cell:before{color:#c5f7a4;content:"⡱";font-size:calc(var(--size)/2)}.wall{border:none;background:#83382c;border-radius:2px;z-index:1}.wall::before{content:"⣿";color:#db563e}.food,.golden{z-index:1;background:transparent;border-radius:1em;color:transparent;font-size:calc(var(--size) + 10px)}.food::before,.golden::before{height:var(--size);width:var(--size);content:"";filter:drop-shadow(0px 0px 6px gold);background-size:contain;image-rendering:pixelated;background-image:url('+m+")}.golden::before{filter:drop-shadow(0px 0px 6px black);background-image:url("+v+')}.body{border-top:2px solid green;border-bottom:2px solid green}.tail{border-radius:1em 0 0 1em;border-top:2px solid green;border-bottom:2px solid green;border-left:2px solid green}.tail::before{content:"⢾"}.gulp{border-radius:5px;width:calc(var(--size) + 10px);height:calc(var(--size) + 10px);margin:-5px}.gulp::before{font-size:calc(var(--size) + 5px)}.noclip .head,.noclip .body,.noclip .tail{opacity:.8}.head{background:#1a1818;border-radius:0 1em 1em 0;border:2px solid green;border-left:none;color:#000}.head:before{content:"⢈";color:#f5f5f5}.UP-LEFT,.RIGHT-UP{border-bottom:none;border-right:none;border-left:2px solid green;border-top:2px solid green;border-radius:50% 0 0}.LEFT-UP,.UP-RIGHT{border-bottom:2px solid green;border-right:none;border-left:2px solid green;border-top:none;border-radius:0 0 0 50%}.RIGHT-DOWN,.DOWN-LEFT{border-bottom:2px solid green;border-left:2px solid green;border-right:none;border-top:none;border-radius:0 0 0 50%}.DOWN-RIGHT,.LEFT-DOWN{border-bottom:none;border-left:2px solid green;border-right:none;border-top:2px solid green;border-radius:50% 0 0 0}.UP{transform:rotate(-90deg)}.LEFT{transform:rotate(-180deg)}.DOWN{transform:rotate(-270deg)}.RIGHT{transform:rotate(0deg)}.horizontal-grid,.vertical-grid{position:absolute;outline:1px solid rgba(0,0,0,.2);z-index:0}.horizontal-grid{right:0}.vertical-grid{bottom:0}.hitbox{position:absolute;outline:1px dashed rgba(0,0,0,.5);height:var(--size);width:var(--size);z-index:10;background:rgba(255,255,255,.3)}',""]);const x=f},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var o="",n=void 0!==t[5];return t[4]&&(o+="@supports (".concat(t[4],") {")),t[2]&&(o+="@media ".concat(t[2]," {")),n&&(o+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),o+=e(t),n&&(o+="}"),t[2]&&(o+="}"),t[4]&&(o+="}"),o})).join("")},t.i=function(e,o,n,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);n&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),o&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=o):d[2]=o),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function o(e){for(var o=-1,n=0;n<t.length;n++)if(t[n].identifier===e){o=n;break}return o}function n(e,n){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=n.base?l[0]+n.base:l[0],d=i[c]||0,p="".concat(c," ").concat(d);i[c]=d+1;var h=o(p),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)t[h].references++,t[h].updater(u);else{var f=r(u,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function r(e,t){var o=t.domAPI(t);return o.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;o.update(e=t)}else o.remove()}}e.exports=function(e,r){var i=n(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=o(i[a]);t[s].references--}for(var l=n(e,r),c=0;c<i.length;c++){var d=o(i[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=l}}},569:e=>{var t={};e.exports=function(e,o){var n=function(e){if(void 0===t[e]){var o=document.querySelector(e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[e]=o}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(o)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,o)=>{e.exports=function(e){var t=o.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(o){!function(e,t,o){var n="";o.supports&&(n+="@supports (".concat(o.supports,") {")),o.media&&(n+="@media ".concat(o.media," {"));var r=void 0!==o.layer;r&&(n+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),n+=o.css,r&&(n+="}"),o.media&&(n+="}"),o.supports&&(n+="}");var i=o.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,o)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},333:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAD1BMVEVHcEyjHBAAAADoPCn///8cxLM9AAAAAXRSTlMAQObYZgAAAFVJREFUeNqNz1EOQBEQQ1E19r/m19JUXubHjSAnJAwHjNajTkX1xgY29yhQbYprsaOyYprXkp6Dlag6GrsaTB3VO4LYFHlnR/W7HTXZ7u832cKhMAt95CQCgwwgxuAAAAAASUVORK5CYII="},85:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAElBMVEVHcEzetDVuWBaZfSjUrzf////CVzsZAAAAAXRSTlMAQObYZgAAAFhJREFUeNqNz0EKACEMQ1Fr6/2vPImGyNCNf6HyqKBDRYzWo04G1UGWaEZgr4TKGPZCR2mFuK5FPYPloBy1XTW6juwdE9g0/c6O7HfbKpLd32+SmU1mZPoAtRsDrII18DgAAAAASUVORK5CYII="},915:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAAEYAQMAAAC9QHvPAAAABlBMVEU+YyFThSxH3YrQAAAAzklEQVR4Ae3ZAQbDQBAF0E8OsEeaq++R5gDLbzDQaQz4qup/1NC3IEl2Motvxon8qPTGhrtXpW1UZsg6NjoTCXDj4tOlsZEZrAPuddq6+rGRGVwk8/ktYyMyw64JG6UZF3LbiAzWGW7ySBuR8aOuN84vpVrBddTGpvd+t4mE2NhE6/0WWZXS2FQuokdvbBzn7zJMnZTGpv4pLTA2wwC1ojQ2fYCqNzaRbYAqNTbzMVd9MyJSYGzGbfI23JAbm3XezrZIAmpjM3Z8emOjj/MC7DVwnN4PbsAAAAAASUVORK5CYII="},150:(e,t,o)=>{e.exports=o.p+"b22cbce873041887b549.woff"},312:(e,t,o)=>{e.exports=o.p+"61827c7e27cf83769418.woff2"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,o),i.exports}o.m=e,o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),o.b=document.baseURI||self.location.href,(()=>{var e,t=o(379),n=o.n(t),r=o(795),i=o.n(r),a=o(569),s=o.n(a),l=o(565),c=o.n(l),d=o(216),p=o.n(d),h=o(589),u=o.n(h),f=o(192),g={};g.styleTagTransform=u(),g.setAttributes=c(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),n()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,function(e){e[e.RETURN=13]="RETURN",e[e.SPACE=32]="SPACE",e[e.LEFT=37]="LEFT",e[e.UP=38]="UP",e[e.RIGHT=39]="RIGHT",e[e.DOWN=40]="DOWN",e[e.C=67]="C",e[e.G=71]="G",e[e.J=74]="J",e[e.K=75]="K"}(e||(e={}));var b,y=40,m=(b=function(e,t){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},b(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function o(){this.constructor=e}b(e,t),e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)});const v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return m(t,e),t.rand=function(e,t,o){void 0===o&&(o=y);var n=Math.floor(Math.random()*(t-e))+e;return n-n%o},t.snap=function(e,t){void 0===t&&(t=y);var o=e-e%t,n=o+t;return e-o<=n-e?o:n},t.removeNode=function(e){e.remove()},t}(function(){function e(){}return e.bound=function(e,t,o){return Math.max(t,Math.min(e,o))},e.debounce=function(e,t){var o;return function(){for(var n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];clearTimeout(o),o=setTimeout((function(){return e.apply(void 0,n)}),t)}},e}());var x;!function(e){var t=new Map;e.set=function(e,o,n){void 0===n&&(n=!0),t.set("".concat(e,":").concat(o),n)},e.remove=function(e,o){t.delete("".concat(e,":").concat(o))},e.has=function(e,o){return t.has("".concat(e,":").concat(o))},e.get=function(e,o){return t.get("".concat(e,":").concat(o))},e.getAll=function(){return t}}(x||(x={}));const A=x,w=function(){function e(e){var t=e.x,o=e.y,n=e.type,r=void 0===n?"body":n,i=e.direction,a=void 0===i?"RIGHT":i,s=e.next,l=void 0===s?null:s,c=e.prev,d=void 0===c?null:c;this.direction=a,this.type=r,this.x=t,this.y=o,this.el=document.createElement("div"),this.next=l,this.prev=d,this.setType(r),this.setPos(this.x,this.y),this.garden=document.getElementById("garden"),this.garden.appendChild(this.el)}return e.prototype.setType=function(e){this.type=e,this.applyClass()},e.prototype.applyClass=function(){this.el.className="",this.el.classList.add("cell",this.type,this.direction)},e.prototype.isCollidingWith=function(e){return!!e&&this.x==e.x&&this.y==e.y},e.prototype.bend=function(e){this.direction!==e&&(this.el.className="",this.el.classList.add("cell",this.type,e,"".concat(e,"-").concat(this.direction)),this.direction=e)},e.prototype.setPos=function(e,t){this.el.style.top="".concat(t,"px"),this.el.style.left="".concat(e,"px"),this.applyClass(),"head"!==this.type&&"food"!==this.type&&"golden"!==this.type&&A.set(e,t)},e.prototype.move=function(e,t,o){void 0===o&&(o="RIGHT");var n=e,r=t;e<0?n=v.snap(this.garden.clientWidth)-y:t<0?r=v.snap(this.garden.clientHeight)-y:e>=v.snap(this.garden.clientWidth)?n=0:t>=v.snap(this.garden.clientHeight)&&(r=0);var i=this.direction;this.direction=o,this.setPos(n,r),null!==this.next?this.next.move(this.x,this.y,"head"===this.type?this.direction:i):A.remove(this.x,this.y),null===this.next&&"body"===this.type&&this.el.classList.add("tail"),null!==this.next&&this.next.x===n&&this.next.y===r&&this.next.el.classList.add("gulp"),null!==this.next&&this.direction!==this.next.direction&&this.el.classList.add("".concat(this.direction,"-").concat(this.next.direction)),this.x=n,this.y=r},e.prototype.remove=function(){v.removeNode(this.el),A.remove(this.x,this.y),this.next&&(this.next.remove(),this.next=null)},e}();var T;!function(t){var o=[],n=e.RIGHT;t.set=function(e){o.push(e)},t.get=function(){return n},t.pop=function(){return o.length>0&&(n=o.shift()),t.get()},t.flush=function(){o=[],n=e.RIGHT},t.peek=function(){return o.length>0?o[o.length-1]:n}}(T||(T={}));const k=T;var E=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();const z=function(t){function o(e){var o=t.call(this)||this;return o.levels=e,o.head=new w({x:80,y:80,type:"head"}),o.tail=o.resetHead(),o.garden=document.getElementById("garden"),o.renderGarden(),o.handleFood(),o.setEvents(),o}return E(o,t),Object.defineProperty(o.prototype,"highScore",{get:function(){return parseInt(localStorage.getItem("high-score")||"0",10)||0},set:function(e){localStorage.setItem("high-score",e.toString())},enumerable:!1,configurable:!0}),o.prototype.getRandomLevel=function(){return this.levels[Math.floor(this.levels.length*Math.random())]},o.prototype.removeGrid=function(){Array.from(document.querySelectorAll(".vertical-grid, .horizontal-grid")).forEach((function(e){v.removeNode(e)})),this.gridVisible=!1},o.prototype.mayIHaveGoldenApple=function(){return 100*Math.random()<5},o.prototype.renderGarden=function(){var e=document.body,t=e.clientHeight,o=e.clientWidth,n=Math.max(60,Math.floor(.1*t)),r=Math.max(60,Math.floor(.1*o)),i=o-2*r,a=t-2*n;i+=y-i%y,a+=y-a%y,this.garden.style.top="".concat(n,"px"),this.garden.style.left="".concat(r,"px"),this.garden.style.width="".concat(i,"px"),this.garden.style.height="".concat(a,"px"),document.documentElement.style.setProperty("--size","".concat(y,"px")),this.showTopScore(),this.showScore()},o.prototype.resetHead=function(){this.head.next&&(this.head.next.remove(),this.head.next=null),this.length=6;var e=this.head;this.head.move(280,200);for(var t=1;t<=6;t+=1)e.next=new w({x:280-y*t+2,y:200,prev:e}),e=e.next;return e.setType("tail"),e},o.prototype.start=function(){!1===this.moving&&(this.tail=this.resetHead(),this.debugSpeed=0,this.keyHeld=0,this.score=0,k.flush(),this.showScore(),this.moving=!0,this.splashToggle(!1),requestAnimationFrame(this.frame.bind(this)))},o.prototype.over=function(){this.moving=!1;var e=function(t){null!==t&&(t.el.classList.add("vanish"),setTimeout((function(){return e(t.prev)}),20))};e(this.tail),this.showTopScore(),this.splashToggle(!0)},o.prototype.showTopScore=function(){var e=document.getElementById("top");this.highScore=this.highScore<this.score?this.score:this.highScore,e.innerHTML="TOP: ".concat(this.highScore)},o.prototype.splashToggle=function(e){document.querySelector(".splash").style.display=e?"":"none"},o.prototype.getFoodLocation=function(){var e,t=v.rand(60,this.garden.clientWidth-60,y),o=v.rand(60,this.garden.clientHeight-60,y);return A.has(t,o)&&(t=(e=this.getFoodLocation())[0],o=e[1]),[t,o]},o.prototype.handleFood=function(){if(null==this.food){var e=this.getFoodLocation(),t=e[0],o=e[1];this.food=new w({x:t,y:o,type:"food"})}if(this.head.isCollidingWith(this.food)||this.head.isCollidingWith(this.goldenApple)){var n=this.head.isCollidingWith(this.food)?"food":"golden";this.swallowFood(n),!1===this.noClip&&(this.growth+=1),this.updateScore("food"===n?10:50),this.showScore()}},o.prototype.handleGoldenApple=function(){if(null===this.goldenApple){var e=this.getFoodLocation(),t=e[0],o=e[1];this.goldenApple=new w({x:t,y:o,type:"golden"})}},o.prototype.swallowFood=function(e){return t=this,o=void 0,r=function(){var t,o=this;return function(e,t){var o,n,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(o)throw new TypeError("Generator is already executing.");for(;a;)try{if(o=1,n&&(r=2&i[0]?n.return:i[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,i[1])).done)return r;switch(n=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{o=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(n){if("food"===e){if(null==this.food)return[2];this.tail.next=this.food,this.food.prev=this.tail,this.tail=this.food,this.food=null}else if("golden"===e){if(null==this.goldenApple)return[2];this.tail.next=this.goldenApple,this.goldenApple.prev=this.tail,this.tail=this.goldenApple,this.goldenApple=null}return(t=function(e){if(null!==e&&null!==e.next){if(null!==e.prev&&e.prev.el.classList.remove("gulp"),e.el.classList.add("gulp"),o.paused||!o.moving)return;setTimeout((function(){requestAnimationFrame((function(){t(e.next)}))}),o.getSpeed()/2)}})(this.head.next),this.mayIHaveGoldenApple()&&this.handleGoldenApple(),[2]}))},new((n=void 0)||(n=Promise))((function(e,i){function a(e){try{l(r.next(e))}catch(e){i(e)}}function s(e){try{l(r.throw(e))}catch(e){i(e)}}function l(t){var o;t.done?e(t.value):(o=t.value,o instanceof n?o:new n((function(e){e(o)}))).then(a,s)}l((r=r.apply(t,o||[])).next())}));var t,o,n,r},o.prototype.getSpeed=function(){var e=200-.5*this.growth+this.debugSpeed+this.keyHeld;return v.bound(e,0,250)},o.prototype.updateScore=function(e){return!0===this.noClip||(this.score+=e),this.score},o.prototype.showScore=function(){document.getElementById("points").innerHTML="".concat(this.score)},o.prototype.frame=function(){var t,o=this;if(this.moving&&setTimeout((function(){requestAnimationFrame(o.frame.bind(o))}),this.getSpeed()),!this.paused){if(A.has(this.head.x,this.head.y)&&!1===this.noClip)return this.over();var n=k.pop();switch(A.remove(this.tail.x,this.tail.y),A.set(this.head.x,this.head.y),this.tail.setType("head"),n){case e.RIGHT:this.tail.move(this.head.x+y,this.head.y,e[n]);break;case e.LEFT:this.tail.move(this.head.x-y,this.head.y,e[n]);break;case e.DOWN:this.tail.move(this.head.x,this.head.y+y,e[n]);break;case e.UP:this.tail.move(this.head.x,this.head.y-y,e[n])}var r=this.head;t=[this.tail,this.tail.prev],this.head=t[0],this.tail=t[1],this.tail.next=null,this.tail.setType("tail"),r.setType("body"),r.prev=this.head,r.bend(this.head.direction),A.set(r.x,r.y),this.head.prev=null,this.head.next=r,this.head.setType("head"),this.handleFood()}},o.prototype.notBackwards=function(t){var o=k.peek();return!(o===e.UP&&t===e.DOWN||o===e.DOWN&&t===e.UP||o===e.LEFT&&t===e.RIGHT||o===e.RIGHT&&t===e.LEFT)},o.prototype.setEvents=function(){var t=this;document.addEventListener("keydown",(function(o){switch(o.keyCode){case e.G:t.gridVisible?t.removeGrid():t.drawGrid();break;case e.C:t.noClip=!t.noClip,t.garden.classList.toggle("noclip");break;case e.J:t.debugSpeed+=10;break;case e.K:t.debugSpeed-=10;break;case e.SPACE:t.moving?t.paused=!t.paused:t.start(),o.preventDefault();break;case e.RETURN:t.start();break;default:if(o.keyCode>=48&&o.keyCode<=57){var n=o.keyCode-48;0===n?t.currentLevel&&(t.currentLevel.remove(),t.currentLevel=null):n-1 in t.levels&&(t.currentLevel&&t.currentLevel.remove(),t.currentLevel=t.levels[n-1],t.currentLevel.render())}o.keyCode in e&&t.notBackwards(o.keyCode)&&(k.peek()!==o.keyCode&&k.set(o.keyCode),o.preventDefault())}})),document.addEventListener("keyup",(function(){t.keyHeld=0})),document.addEventListener("click",(function(e){"start"===e.target.id&&t.start()})),window.addEventListener("resize",v.debounce((function(){t.renderGarden(),t.currentLevel&&(t.currentLevel.remove(),t.currentLevel.render()),t.gridVisible&&(t.removeGrid(),t.drawGrid()),null!==t.food&&(t.food.remove(),t.food=null,t.handleFood()),null!==t.goldenApple&&(t.goldenApple.remove(),t.goldenApple=null,t.handleGoldenApple())}),100))},o.prototype.drawGrid=function(){for(var e=0;e<this.garden.clientWidth;e+=y)(t=document.createElement("div")).style.top="0px",t.style.left="".concat(e,"px"),t.classList.add("vertical-grid"),this.garden.appendChild(t);for(e=0;e<this.garden.clientHeight;e+=y){var t;(t=document.createElement("div")).style.left="0px",t.style.top="".concat(e,"px"),t.classList.add("horizontal-grid"),this.garden.appendChild(t)}this.gridVisible=!0},o.prototype.drawHitboxes=function(){var e=this;document.querySelectorAll(".hitbox").forEach(v.removeNode),A.getAll().forEach((function(t,o){var n=o.split(":"),r=n[0],i=n[1],a=document.createElement("div");a.classList.add("hitbox"),a.style.top="".concat(i,"px"),a.style.left="".concat(r,"px"),e.garden.append(a)}))},o}((function(){this.moving=!1,this.paused=!1,this.gridVisible=!1,this.debugSpeed=0,this.keyHeld=0,this.noClip=!1,this.food=null,this.goldenApple=null,this.length=0,this.growth=0,this.score=0,this.currentLevel=null})),C=function(){function e(e){this.generatorFunction=e,this.pieces=[],this.generatorFunction=e,this.garden=document.getElementById("garden")}return e.prototype.translate=function(e,t){return[Math.floor(e)*y,Math.floor(t)*y]},e.prototype.remove=function(){this.pieces.forEach((function(e){e.remove()}))},e.prototype.line=function(e,t,o,n){for(var r=Math.abs(o-e),i=Math.abs(n-t),a=e<o?1:-1,s=t<n?1:-1,l=r-i;;){var c=this.translate(e,t),d=c[0],p=c[1];if(this.pieces.push(new w({x:d,y:p,type:"wall"})),Math.abs(e-o)<=.5&&Math.abs(t-n)<=.5)break;var h=2*l;h>-i&&(l-=i,e+=a),h<r&&(l+=r,t+=s)}},e.prototype.render=function(){var e=this,t=Math.floor(this.garden.clientHeight/y),o=Math.floor(this.garden.clientWidth/y);this.generatorFunction(o,t).forEach((function(t){var o=t[0],n=o[0],r=o[1],i=t[1],a=i[0],s=i[1];e.line(n,r,a,s)}))},e}();new z([new C((function(e,t){var o=[t/2,e/2],n=o[0],r=o[1];return[[[3,3],[r-3,3]],[[r+3,3],[e-3,3]],[[e-3,3],[e-3,n-3]],[[e-3,n+3],[e-3,t-3]],[[e-3,t-3],[r+3,t-3]],[[r-3,t-3],[3,t-3]],[[3,t-3],[3,n+3]],[[3,n-3],[3,3]]]})),new C((function(e,t){var o=[e/2,t/2],n=o[0],r=o[1];return[[[n-2,r],[n+2,r]],[[n,r-2],[n,r+2]],[[n-8,r-8],[n-3,r-3]],[[n+3,r+3],[n+8,r+8]],[[n+8,r-8],[n+3,r-3]],[[n-3,r+3],[n-8,r+8]]]})),new C((function(e,t){var o=[e/2,t/2],n=o[0],r=o[1];return[[[3,3],[n-3,3]],[[n+3,3],[e-3,3]],[[e-3,3],[e-3,r-3]],[[e-3,r+3],[e-3,t-3]],[[e-3,t-3],[n+3,t-3]],[[n-3,t-3],[3,t-3]],[[3,t-3],[3,r+3]],[[3,r-3],[3,3]],[[9,9],[n-6,9]],[[n+6,9],[e-9,9]],[[e-9,9],[e-9,r-6]],[[e-9,r+6],[e-9,t-9]],[[e-9,t-9],[n+6,t-9]],[[n-6,t-9],[9,t-9]],[[9,t-9],[9,r+6]],[[9,r-6],[9,9]]]})),new C((function(e,t){return[[[3,3],[e-3,t-3]],[[e-3,3],[3,t-3]]]})),new C((function(e,t){return[[[0,0],[e,0]],[[0,t],[e,t]],[[0,1],[0,t-1]],[[e,1],[e,t-1]]]}))])})()})();