var _JUPYTERLAB;(()=>{"use strict";var e,r,t,n,a,o,i,f,l,u,d,s,c,h,p,v,g,b,m,w={9970:(e,r,t)=>{var n={"./index":()=>Promise.all([t.e(325),t.e(49)]).then((()=>()=>t(1568))),"./extension":()=>Promise.all([t.e(325),t.e(49),t.e(133)]).then((()=>()=>t(2133))),"./style":()=>t.e(776).then((()=>()=>t(3776)))},a=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),o=(e,r)=>{if(t.S){var n="default",a=t.S[n];if(a&&a!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>a,init:()=>o})}},y={};function j(e){var r=y[e];if(void 0!==r)return r.exports;var t=y[e]={id:e,loaded:!1,exports:{}};return w[e].call(t.exports,t,t.exports,j),t.loaded=!0,t.exports}j.m=w,j.c=y,j.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return j.d(r,{a:r}),r},j.d=(e,r)=>{for(var t in r)j.o(r,t)&&!j.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},j.f={},j.e=e=>Promise.all(Object.keys(j.f).reduce(((r,t)=>(j.f[t](e,r),r)),[])),j.u=e=>e+"."+{49:"d8a8f78b5983efa4c3e4",133:"eab98c9010d15ddc85d6",325:"2ed817f5edde10e76332",664:"a90016a2b8ba2a8abaa7",755:"1649f5e96d950e194209",776:"30f23230d52e3bc86b60",794:"686d8975f7655ed407e0"}[e]+".js?v="+{49:"d8a8f78b5983efa4c3e4",133:"eab98c9010d15ddc85d6",325:"2ed817f5edde10e76332",664:"a90016a2b8ba2a8abaa7",755:"1649f5e96d950e194209",776:"30f23230d52e3bc86b60",794:"686d8975f7655ed407e0"}[e],j.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),j.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="nglview-js-widgets:",j.l=(t,n,a,o)=>{if(e[t])e[t].push(n);else{var i,f;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==r+a){i=d;break}}i||(f=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,j.nc&&i.setAttribute("nonce",j.nc),i.setAttribute("data-webpack",r+a),i.src=t),e[t]=[n];var s=(r,n)=>{i.onerror=i.onload=null,clearTimeout(c);var a=e[t];if(delete e[t],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),r)return r(n)},c=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),f&&document.head.appendChild(i)}},j.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},j.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{j.S={};var e={},r={};j.I=(t,n)=>{n||(n=[]);var a=r[t];if(a||(a=r[t]={}),!(n.indexOf(a)>=0)){if(n.push(a),e[t])return e[t];j.o(j.S,t)||(j.S[t]={});var o=j.S[t],i="nglview-js-widgets",f=(e,r,t,n)=>{var a=o[e]=o[e]||{},f=a[r];(!f||!f.loaded&&(!n!=!f.eager?n:i>f.from))&&(a[r]={get:t,from:i,eager:!!n})},l=[];return"default"===t&&(f("jquery","3.7.0",(()=>j.e(755).then((()=>()=>j(9755))))),f("ngl","2.0.0-dev.39",(()=>j.e(664).then((()=>()=>j(664))))),f("nglview-js-widgets","3.0.5",(()=>Promise.all([j.e(325),j.e(49)]).then((()=>()=>j(1568))))),f("underscore","1.13.6",(()=>j.e(794).then((()=>()=>j(7794)))))),e[t]=l.length?Promise.all(l).then((()=>e[t]=1)):1}}})(),(()=>{var e;j.g.importScripts&&(e=j.g.location+"");var r=j.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),j.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var a=e[n],o=(typeof a)[0];if(n>=r.length)return"u"==o;var i=r[n],f=(typeof i)[0];if(o!=f)return"o"==o&&"n"==f||"s"==f||"u"==o;if("o"!=o&&"u"!=o&&a!=i)return a<i;n++}},a=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,o=1;o<e.length;o++)n--,t+="u"==(typeof(f=e[o]))[0]?"-":(n>0?".":"")+(n=2,f);return t}var i=[];for(o=1;o<e.length;o++){var f=e[o];i.push(0===f?"not("+l()+")":1===f?"("+l()+" || "+l()+")":2===f?i.pop()+" "+i.pop():a(f))}return l();function l(){return i.pop().replace(/^\((.+)\)$/,"$1")}},o=(e,r)=>{if(0 in e){r=t(r);var n=e[0],a=n<0;a&&(n=-n-1);for(var i=0,f=1,l=!0;;f++,i++){var u,d,s=f<e.length?(typeof e[f])[0]:"";if(i>=r.length||"o"==(d=(typeof(u=r[i]))[0]))return!l||("u"==s?f>n&&!a:""==s!=a);if("u"==d){if(!l||"u"!=s)return!1}else if(l)if(s==d)if(f<=n){if(u!=e[f])return!1}else{if(a?u>e[f]:u<e[f])return!1;u!=e[f]&&(l=!1)}else if("s"!=s&&"n"!=s){if(a||f<=n)return!1;l=!1,f--}else{if(f<=n||d<s!=a)return!1;l=!1}else"s"!=s&&"n"!=s&&(l=!1,f--)}}var c=[],h=c.pop.bind(c);for(i=1;i<e.length;i++){var p=e[i];c.push(1==p?h()|h():2==p?h()&h():p?o(p,r):!h())}return!!h()},i=(e,r)=>{var t=j.S[e];if(!t||!j.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},f=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},l=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+a(n)+")",u=(e,r,t,n)=>{var a=f(e,t);return o(n,a)||s(l(e,t,a,n)),c(e[t][a])},d=(e,r,t)=>{var a=e[r];return(r=Object.keys(a).reduce(((e,r)=>!o(t,r)||e&&!n(e,r)?e:r),0))&&a[r]},s=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},c=e=>(e.loaded=1,e.get()),p=(h=e=>function(r,t,n,a){var o=j.I(r);return o&&o.then?o.then(e.bind(e,r,j.S[r],t,n,a)):e(r,j.S[r],t,n,a)})(((e,r,t,n)=>(i(e,t),u(r,0,t,n)))),v=h(((e,r,t,n,a)=>{var o=r&&j.o(r,t)&&d(r,t,n);return o?c(o):a()})),g={},b={2914:()=>v("default","jquery",[1,3,2,1],(()=>j.e(755).then((()=>()=>j(9755))))),6441:()=>v("default","jquery",[,[-1,4,0,0],[0,1,8,0],2],(()=>j.e(755).then((()=>()=>j(9755))))),6728:()=>p("default","@jupyter-widgets/base",[1,4,0,0]),8731:()=>v("default","underscore",[1,1,8,3],(()=>j.e(794).then((()=>()=>j(7794))))),9068:()=>v("default","ngl",[7,2,0,0,,"dev",39],(()=>j.e(664).then((()=>()=>j(664)))))},m={49:[2914,6441,6728,8731,9068]},j.f.consumes=(e,r)=>{j.o(m,e)&&m[e].forEach((e=>{if(j.o(g,e))return r.push(g[e]);var t=r=>{g[e]=0,j.m[e]=t=>{delete j.c[e],t.exports=r()}},n=r=>{delete g[e],j.m[e]=t=>{throw delete j.c[e],r}};try{var a=b[e]();a.then?r.push(g[e]=a.then(t).catch(n)):t(a)}catch(e){n(e)}}))},(()=>{var e={760:0};j.f.j=(r,t)=>{var n=j.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(((t,a)=>n=e[r]=[t,a]));t.push(n[2]=a);var o=j.p+j.u(r),i=new Error;j.l(o,(t=>{if(j.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+r+" failed.\n("+a+": "+o+")",i.name="ChunkLoadError",i.type=a,i.request=o,n[1](i)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,a,[o,i,f]=t,l=0;if(o.some((r=>0!==e[r]))){for(n in i)j.o(i,n)&&(j.m[n]=i[n]);f&&f(j)}for(r&&r(t);l<o.length;l++)a=o[l],j.o(e,a)&&e[a]&&e[a][0](),e[a]=0},t=self.webpackChunknglview_js_widgets=self.webpackChunknglview_js_widgets||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var S=j(9970);(_JUPYTERLAB=void 0===_JUPYTERLAB?{}:_JUPYTERLAB)["nglview-js-widgets"]=S})();