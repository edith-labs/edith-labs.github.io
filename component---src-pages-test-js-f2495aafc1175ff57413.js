(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"8oxB":function(e,t){var n,r,o=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,u=[],l=!1,m=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):m=-1,u.length&&d())}function d(){if(!l){var e=i(f);l=!0;for(var t=u.length;t;){for(c=u,u=[];++m<t;)c&&c[m].run();m=-1,t=u.length}c=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new p(e,t)),1!==u.length||l||i(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var r=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",u=t.name||c+o++,l=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,f=encodeURIComponent,d=document.getElementsByTagName("script")[0]||document.head;m&&(i=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){s.parentNode&&s.parentNode.removeChild(s),window[u]=a,i&&clearTimeout(i)}return window[u]=function(e){r("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+f(u)).replace("?&","?"),r('jsonp req "%s"',e),(s=document.createElement("script")).src=e,d.parentNode.insertBefore(s,d),function(){window[u]&&p()}};var o=0;function a(){}},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("8ujH"),a=(r=o)&&r.__esModule?r:{default:r},s=n("H/qo");var i=function(e){return new Promise((function(t,n){return(0,a.default)(e,{param:"c",timeout:3500},(function(e,r){e&&n(e),r&&t(r)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+r+"="+e[n])}return t};t.default=function(e,t,n){var r=(0,s.validate)(e),o=encodeURIComponent(e);if(!r)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var a="https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972";arguments.length<3&&"string"==typeof t?a=t:"string"==typeof n&&(a=n),a=a.replace(/\/post/g,"/post-json");var u="&EMAIL="+o+c(t),l=""+a+u;return i(l)}},GTTd:function(e,t,n){(function(r){function o(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==r&&"env"in r&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var o=0,a=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(o++,"%c"===e&&(a=o))})),e.splice(a,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=o,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(o())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var r=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!r.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},QXP7:function(e,t){var n=1e3,r=60*n,o=60*r,a=24*o,s=365.25*a;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*o;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?i(c=e,a,"day")||i(c,o,"hour")||i(c,r,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=a)return Math.round(e/a)+"d";if(e>=o)return Math.round(e/o)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},bRoh:function(e,t,n){var r;function o(e){function n(){if(n.enabled){var e=n,o=+new Date,a=o-(r||o);e.diff=a,e.prev=r,e.curr=o,r=o;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,r){if("%%"===n)return n;c++;var o=t.formatters[r];if("function"==typeof o){var a=s[c];n=o.call(e,a),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=o.debug=o.default=o).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,o=0;o<r;o++)n[o]&&("-"===(e=n[o].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},h5Py:function(e,t,n){"use strict";n.r(t);var r=n("G04T"),o=n.n(r),a=n("q1tI"),s=n.n(a),i=n("zWRy"),c=n.n(i),u=n("7oih"),l=n("EYWl"),m=n("p3AD");n("bN3s");t.default=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],r=Object(a.useState)(!1),i=r[0],f=r[1];return s.a.createElement(u.a,null,s.a.createElement(l.a,{title:"Waitlist"}),s.a.createElement("div",{className:"container",style:{marginTop:Object(m.a)(3)}},s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-one-third"},s.a.createElement("img",{alt:"logo",src:c.a,style:{marginTop:"auto",marginBottom:"auto",display:"flex",alignItems:"center"}}))),s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-half",style:{marginLeft:Object(m.a)(.25),marginRight:Object(m.a)(.25)}},s.a.createElement("p",null,"Hi there! Our mission at Edith Labs is to connect students with people who will invest in their future and help them succeed. As COVID-19 continues to impact universities around the world, we believe access to mentorship is more important than ever."),s.a.createElement("br",null),s.a.createElement("p",null,"We're launching Edith to give students access to our growing network of mentors. They come from companies like Apple, Citadel, Morgan Stanley, and McKinsey. You can ask mentors individual questions, or post general asks such as resume reviews or requests for referrals."),s.a.createElement("br",null),s.a.createElement("p",null,"If you want to ask college-specific questions, our mentors are graduates from UChicago, UC Berkeley, and UCLA and current students at places like Stanford Medical School."),s.a.createElement("br",null),s.a.createElement("p",null,"While we want to help as many students as possible, we're limiting the first batch to 50 students – please sign up for the waitlist and we’ll add you as soon as possible. Welcome to Edith!"),s.a.createElement("br",null),s.a.createElement("p",null,"Nick & Kevin"),s.a.createElement("p",null,"  Edith Co-founders"))),s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"column is-one-third",style:{textAlign:"center",marginRight:Object(m.a)(.25),marginLeft:Object(m.a)(.25)}},s.a.createElement("form",{onSubmit:function(e){e.preventDefault();o()(t,{"group[26469][8]":"8"}).then((function(){n(""),f(!0)}))}},s.a.createElement("input",{style:{marginBottom:Object(m.a)(1)},placeholder:"Email",type:"email",value:t,name:"EMAIL",className:"input",id:"mce-EMAIL",onChange:function(e){return n(e.target.value)},required:!0}),s.a.createElement("button",{className:"button is-fullwidth is-primary",type:"submit",style:{marginBottom:Object(m.a)(2)}},"Join the Waitlist"),i&&s.a.createElement("h3",{className:"subtitle"},"Thank you! We'll be reaching out shortly"))))))}},zWRy:function(e,t,n){e.exports=n.p+"static/logo-text-e0e6c7b039ca4b625eae01068a512c10.png"}}]);
//# sourceMappingURL=component---src-pages-test-js-f2495aafc1175ff57413.js.map