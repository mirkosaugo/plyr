var Hogan={};!function(t){function n(t,n,e){var s;return n&&"object"==typeof n&&(void 0!==n[t]?s=n[t]:e&&n.get&&"function"==typeof n.get&&(s=n.get(t))),s}function e(t,n,e,s,i,r){function a(){}function o(){}a.prototype=t,o.prototype=t.subs;var l,u=new a;u.subs=new o,u.subsText={},u.buf="",s=s||{},u.stackSubs=s,u.subsText=r;for(l in n)s[l]||(s[l]=n[l]);for(l in s)u.subs[l]=s[l];i=i||{},u.stackPartials=i;for(l in e)i[l]||(i[l]=e[l]);for(l in i)u.partials[l]=i[l];return u}function s(t){return String(null===t||void 0===t?"":t)}function i(t){return t=s(t),c.test(t)?t.replace(r,"&amp;").replace(a,"&lt;").replace(o,"&gt;").replace(l,"&#39;").replace(u,"&quot;"):t}t.Template=function(t,n,e,s){t=t||{},this.r=t.code||this.r,this.c=e,this.options=s||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(){return""},v:i,t:s,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var s=this.partials[t],i=n[s.name];if(s.instance&&s.base==i)return s.instance;if("string"==typeof i){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}if(!i)return null;if(this.partials[t].base=i,s.subs){n.stackText||(n.stackText={});for(key in s.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);i=e(i,s.subs,s.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=i,i},rp:function(t,n,e,s){var i=this.ep(t,e);return i?i.ri(n,e,s):""},rs:function(t,n,e){var s=t[t.length-1];if(!p(s))return e(t,n,this),void 0;for(var i=0;i<s.length;i++)t.push(s[i]),e(t,n,this),t.pop()},s:function(t,n,e,s,i,r,a){var o;return p(t)&&0===t.length?!1:("function"==typeof t&&(t=this.ms(t,n,e,s,i,r,a)),o=!!t,!s&&o&&n&&n.push("object"==typeof t?t:n[n.length-1]),o)},d:function(t,e,s,i){var r,a=t.split("."),o=this.f(a[0],e,s,i),l=this.options.modelGet,u=null;if("."===t&&p(e[e.length-2]))o=e[e.length-1];else for(var c=1;c<a.length;c++)r=n(a[c],o,l),void 0!==r?(u=o,o=r):o="";return i&&!o?!1:(i||"function"!=typeof o||(e.push(u),o=this.mv(o,e,s),e.pop()),o)},f:function(t,e,s,i){for(var r=!1,a=null,o=!1,l=this.options.modelGet,u=e.length-1;u>=0;u--)if(a=e[u],r=n(t,a,l),void 0!==r){o=!0;break}return o?(i||"function"!=typeof r||(r=this.mv(r,e,s)),r):i?!1:""},ls:function(t,n,e,i,r){var a=this.options.delimiters;return this.options.delimiters=r,this.b(this.ct(s(t.call(n,i)),n,e)),this.options.delimiters=a,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,s,i,r,a){var o,l=n[n.length-1],u=t.call(l);return"function"==typeof u?s?!0:(o=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(u,l,e,o.substring(i,r),a)):u},mv:function(t,n,e){var i=n[n.length-1],r=t.call(i);return"function"==typeof r?this.ct(s(r.call(i)),i,e):r},sub:function(t,n,e,s){var i=this.subs[t];i&&(this.activeSub=t,i(n,e,this,s),this.activeSub=!1)}};var r=/&/g,a=/</g,o=/>/g,l=/\'/g,u=/\"/g,c=/[&<>\"\']/,p=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof exports?exports:Hogan),function(t){function n(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function e(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function s(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var s=1,i=t.length;i>s;s++)if(n.charAt(e+s)!=t.charAt(s))return!1;return!0}function i(n,e,s,o){var l=[],u=null,c=null,p=null;for(c=s[s.length-1];n.length>0;){if(p=n.shift(),c&&"<"==c.tag&&!(p.tag in w))throw new Error("Illegal content in < super tag.");if(t.tags[p.tag]<=t.tags.$||r(p,o))s.push(p),p.nodes=i(n,p.tag,s,o);else{if("/"==p.tag){if(0===s.length)throw new Error("Closing tag without opener: /"+p.n);if(u=s.pop(),p.n!=u.n&&!a(p.n,u.n,o))throw new Error("Nesting error: "+u.n+" vs. "+p.n);return u.end=p.i,l}"\n"==p.tag&&(p.last=0==n.length||"\n"==n[0].tag)}l.push(p)}if(s.length>0)throw new Error("missing closing tag: "+s.pop().n);return l}function r(t,n){for(var e=0,s=n.length;s>e;e++)if(n[e].o==t.n)return t.tag="#",!0}function a(t,n,e){for(var s=0,i=e.length;i>s;s++)if(e[s].c==t&&e[s].o==n)return!0}function o(t){var n=[];for(var e in t)n.push('"'+u(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}function l(t){var n=[];for(var e in t.partials)n.push('"'+u(e)+'":{name:"'+u(t.partials[e].name)+'", '+l(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+o(t.subs)}function u(t){return t.replace(m,"\\\\").replace(d,'\\"').replace(v,"\\n").replace(g,"\\r").replace(x,"\\u2028").replace(y,"\\u2029")}function c(t){return~t.indexOf(".")?"d":"f"}function p(t,n){var e="<"+(n.prefix||""),s=e+t.n+k++;return n.partials[s]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+u(s)+'",c,p,"'+(t.indent||"")+'"));',s}function b(t,n){n.code+="t.b(t.t(t."+c(t.n)+'("'+u(t.n)+'",c,p,0)));'}function f(t){return"t.b("+t+");"}var h=/\S/,d=/\"/g,v=/\n/g,g=/\r/g,m=/\\/g,x=/\u2028/,y=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(i,r){function a(){m.length>0&&(x.push({tag:"_t",text:new String(m)}),m="")}function o(){for(var n=!0,e=k;e<x.length;e++)if(n=t.tags[x[e].tag]<t.tags._v||"_t"==x[e].tag&&null===x[e].text.match(h),!n)return!1;return n}function l(t,n){if(a(),t&&o())for(var e,s=k;s<x.length;s++)x[s].text&&((e=x[s+1])&&">"==e.tag&&(e.indent=x[s].text.toString()),x.splice(s,1));else n||x.push({tag:"\n"});y=!1,k=x.length}function u(t,n){var s="="+S,i=t.indexOf(s,n),r=e(t.substring(t.indexOf("=",n)+1,i)).split(" ");return T=r[0],S=r[r.length-1],i+s.length-1}var c=i.length,p=0,b=1,f=2,d=p,v=null,g=null,m="",x=[],y=!1,w=0,k=0,T="{{",S="}}";for(r&&(r=r.split(" "),T=r[0],S=r[1]),w=0;c>w;w++)d==p?s(T,i,w)?(--w,a(),d=b):"\n"==i.charAt(w)?l(y):m+=i.charAt(w):d==b?(w+=T.length-1,g=t.tags[i.charAt(w+1)],v=g?i.charAt(w+1):"_v","="==v?(w=u(i,w),d=p):(g&&w++,d=f),y=w):s(S,i,w)?(x.push({tag:v,n:e(m),otag:T,ctag:S,i:"/"==v?y-T.length:w+S.length}),m="",w+=S.length-1,d=p,"{"==v&&("}}"==S?w++:n(x[x.length-1]))):m+=i.charAt(w);return l(y,!0),x};var w={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=function(n){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+l(n)+"}"};var k=0;t.generate=function(n,e,s){k=0;var i={code:"",subs:{},partials:{}};return t.walk(n,i),s.asString?this.stringify(i,e,s):this.makeTemplate(i,e,s)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var s=this.makePartials(t);return s.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(s,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+c(n.n)+'("'+u(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+c(n.n)+'("'+u(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":p,"<":function(n,e){var s={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,s);var i=e.partials[p(n,e)];i.subs=s.subs,i.partials=s.partials},$:function(n,e){var s={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,s),e.subs[n.n]=s.code,e.inPartial||(e.code+='t.sub("'+u(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=f('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+c(t.n)+'("'+u(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=f('"'+u(t.text)+'"')},"{":b,"&":b},t.walk=function(n,e){for(var s,i=0,r=n.length;r>i;i++)s=t.codegen[n[i].tag],s&&s(n[i],e);return e},t.parse=function(t,n,e){return e=e||{},i(t,"",[],e.sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var s=t.cacheKey(n,e),i=this.cache[s];if(i){var r=i.partials;for(var a in r)delete r[a].instance;return i}return i=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[s]=i}}("undefined"!=typeof exports?exports:Hogan);var Mustache=function(t){function n(n,e,s,i){var r=this.f(n,e,s,0),a=e;return r&&(a=a.concat(r)),t.Template.prototype.rp.call(this,n,a,s,i)}var e=function(e,s,i){this.rp=n,t.Template.call(this,e,s,i)};e.prototype=t.Template.prototype;var s,i=function(){this.cache={},this.generate=function(t,n){return new e(new Function("c","p","i",t),n,s)}};return i.prototype=t,s=new i,{to_html:function(t,n,e,i){var r=s.compile(t),a=r.render(n,e);return i?(i(a),void 0):a}}}(Hogan),templates={};templates.controls=new Hogan.Template({code:function(t,n,e){var s=this;return s.b(e=e||""),s.b('<div class="controls">'),s.b("\n"+e),s.b('	<progress class="px-video-progress" max="100" value="0"><span>0</span>% played</progress>'),s.b("\n"),s.b("\n"+e),s.b('	<div class="play-controls">'),s.b("\n"+e),s.b('		<button class="px-video-restart" data-player="restart">'),s.b("\n"+e),s.b('			<svg><use xlink:href="#icon-refresh"></use></svg>'),s.b("\n"+e),s.b('			<span class="sr-only">Restart</span>'),s.b("\n"+e),s.b("		</button>"),s.b("\n"+e),s.b('		<button class="px-video-rewind" data-player="rewind">'),s.b("\n"+e),s.b('			<svg><use xlink:href="#icon-rewind"></use></svg>'),s.b("\n"+e),s.b('			<span class="sr-only">Rewind <span class="px-seconds">10</span> seconds</span>'),s.b("\n"+e),s.b("		</button>"),s.b("\n"+e),s.b('		<button class="px-video-play" aria-label="{aria-label}" data-player="play">'),s.b("\n"+e),s.b('			<svg><use xlink:href="#icon-play"></use></svg>'),s.b("\n"+e),s.b('			<span class="sr-only">Play</span>'),s.b("\n"+e),s.b("		</button>"),s.b("\n"+e),s.b('		<button class="px-video-pause hide" data-player="pause">'),s.b("\n"+e),s.b('			<svg><use xlink:href="#icon-pause"></use></svg>'),s.b("\n"+e),s.b('			<span class="sr-only">Pause</span>'),s.b("\n"+e),s.b("		</button>"),s.b("\n"+e),s.b('		<button class="px-video-forward" data-player="fast-forward">'),s.b("\n"+e),s.b('			<svg><use xlink:href="#icon-fast-forward"></use></svg>'),s.b("\n"+e),s.b('			<span class="sr-only">Fast forward <span class="px-seconds">10</span> seconds</span>'),s.b("\n"+e),s.b("		</button>"),s.b("\n"+e),s.b('		<div class="px-video-time">'),s.b("\n"+e),s.b('			<span class="sr-only">Time</span>'),s.b("\n"+e),s.b('			<span class="px-video-duration">00:00</span>'),s.b("\n"+e),s.b("		</div>"),s.b("\n"+e),s.b("	</div>"),s.b("\n"),s.b("\n"+e),s.b('	<div class="sound-controls">'),s.b("\n"+e),s.b('		<!--<div class="px-video-mute-btn-container">-->'),s.b("\n"+e),s.b('			<input class="px-video-mute sr-only" id="btnMute{id}" type="checkbox">'),s.b("\n"+e),s.b('			<label id="labelMute{id}" for="btnMute{id}">'),s.b("\n"+e),s.b('				<svg><use xlink:href="#icon-sound"></use></svg>'),s.b("\n"+e),s.b('				<span class="sr-only">Mute</span>'),s.b("\n"+e),s.b("			</label>"),s.b("\n"+e),s.b("		<!--</div>-->"),s.b("\n"),s.b("\n"+e),s.b('		<label for="volume{id}" class="sr-only">Volume:</label>'),s.b("\n"+e),s.b('		<input id="volume{id}" class="px-video-volume" type="range" min="0" max="10" value="5">'),s.b("\n"),s.b("\n"+e),s.b('		<!--<div class="px-video-captions-btn-container hide">-->'),s.b("\n"+e),s.b('			<input class="px-video-btnCaptions sr-only" id="btnCaptions{id}" type="checkbox">'),s.b("\n"+e),s.b('			<label for="btnCaptions{id}">'),s.b("\n"+e),s.b('				<svg><use xlink:href="#icon-film"></use></svg>'),s.b("\n"+e),s.b('				<span class="sr-only">Captions</span>'),s.b("\n"+e),s.b("			</label>"),s.b("\n"+e),s.b("		<!--</div>-->"),s.b("\n"+e),s.b("	</div>"),s.b("\n"+e),s.b("</div>"),s.b("\n"),s.fl()},partials:{},subs:{}});var video=new InitPxVideo({videoId:"myvid",captionsOnDefault:!0,seekInterval:20,videoTitle:"PayPal Austin promo",debug:!0,html:templates.controls.render({})});console.log(video);