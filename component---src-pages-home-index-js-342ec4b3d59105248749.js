(window.webpackJsonp=window.webpackJsonp||[]).push([[9,8,12,13,14],{"3Aql":function(e,t,n){e.exports=n.p+"static/logo-white-27fbc9b16482a523ea246eb0764d3092.png"},"7WN3":function(e,t,n){"use strict";n.r(t);n("tUrg");var a=n("q1tI"),r=n.n(a),s=n("p3AD");t.default=function(e){var t=e.title,n=e.logos,a=void 0===n?[]:n;return r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{class:"columns is-centered",style:{marginTop:Object(s.a)(2),marginBottom:Object(s.a)(2)}},r.a.createElement("div",{class:"column is-four-fifths",style:{textAlign:"center"}},r.a.createElement("h1",{class:"title is-4"},t),r.a.createElement("div",{class:"columns is-centered is-multiline"},a.map((function(e){var t=e.src,n=e.link,a=e.alt;return r.a.createElement("div",{class:"column is-one-third",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("a",{href:n},r.a.createElement("img",{src:t,alt:a,style:{maxHeight:"50px"}})))}))))))}},"8oxB":function(e,t){var n,a,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var i,l=[],u=!1,m=-1;function d(){u&&i&&(u=!1,i.length?l=i.concat(l):m=-1,l.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=l.length;t;){for(i=l,l=[];++m<t;)i&&i[m].run();m=-1,t=l.length}i=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var a=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var o,c,i=t.prefix||"__jp",l=t.name||i+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){o.parentNode&&o.parentNode.removeChild(o),window[l]=s,c&&clearTimeout(c)}return window[l]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),a('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[l]&&p()}};var r=0;function s(){}},C6lc:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),s=n("NkvD"),o=n.n(s),c=n("oG7D"),i=n.n(c),l=n("W7iR"),u=n.n(l),m=n("cZXg"),d=n.n(m),f=n("VSla"),p=n.n(f),h=n("shqH"),g=n.n(h),v=n("7WN3");t.default=function(e){!function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e);var t=[{src:o.a,alt:"berkeley",link:"https://www.berkeley.edu"},{src:i.a,alt:"duke",link:"https://duke.edu"},{src:u.a,alt:"santa-clara",link:"https://www.scu.edu"},{src:d.a,alt:"stanford",link:"https://www.stanford.edu"},{src:p.a,alt:"uchicago",link:"https://www.uchicago.edu"},{src:g.a,alt:"ucla",link:"http://www.ucla.edu"}];return r.a.createElement(v.default,{title:"Where Our Mentors Studied",logos:t})}},C72o:function(e,t,n){e.exports=n.p+"static/mckinsey-80784f21d6481a2a013590e539458cd4.png"},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("8ujH"),s=(a=r)&&a.__esModule?a:{default:a},o=n("H/qo");var c=function(e){return new Promise((function(t,n){return(0,s.default)(e,{param:"c",timeout:3500},(function(e,a){e&&n(e),a&&t(a)}))}))},i=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+a+"="+e[n])}return t};t.default=function(e,t,n){var a=(0,o.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof n&&(s=n),s=s.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+i(t),u=""+s+l;return c(u)}},GTTd:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},K424:function(e,t,n){e.exports=n.p+"static/mockup-1f1c57079d398d051bcc8071d6908cc7.png"},KhM5:function(e,t,n){e.exports=n.p+"static/credit-suisse-6c9346fb303224fd48b54d0a6a125816.png"},NkvD:function(e,t,n){e.exports=n.p+"static/berkeley-de27f5945bd51856ef9e353420f96a80.png"},QXP7:function(e,t){var n=1e3,a=60*n,r=60*a,s=24*r,o=365.25*s;function c(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var i,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*o;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*a;case"seconds":case"second":case"secs":case"sec":case"s":return c*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?c(i=e,s,"day")||c(i,r,"hour")||c(i,a,"minute")||c(i,n,"second")||i+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"STA+":function(e,t,n){"use strict";n.r(t);var a=n("a97E");t.default=a.default},VSla:function(e,t,n){e.exports=n.p+"static/uchicago-66481b76d9e1498b4e2a95d299dcea47.png"},Vez2:function(e,t,n){e.exports=n.p+"static/isa-mockup-cfdbac3cc6d6edba42dbaf759082e4a6.png"},W7iR:function(e,t,n){e.exports=n.p+"static/santa-clara-00b9d2c9a045ec31ebc9e8e90c754c6e.png"},"X/rp":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),s=n("oXqz"),o=n.n(s),c=n("sair"),i=n.n(c),l=n("KhM5"),u=n.n(l),m=n("C72o"),d=n.n(m),f=n("cFZm"),p=n.n(f),h=n("lQlm"),g=n.n(h),v=n("7WN3");t.default=function(){var e=[{src:i.a,link:"https://www.apple.com",alt:"apple"},{src:o.a,link:"https://www.citadel.com",alt:"citadel"},{src:p.a,link:"https://www.morganstanley.com",alt:"morgan-stanley"},{src:d.a,link:"https://www.mckinsey.com",alt:"mckinsey"},{src:g.a,link:"https://www.servicenow.com",alt:"service-now"},{src:u.a,link:"https://www.credit-suisse.com/us/en.html",alt:"credit-suisse"}];return r.a.createElement(v.default,{title:"Where Our Mentors Worked",logos:e})}},a97E:function(e,t,n){"use strict";n.r(t);var a=n("Wbzz"),r=n("q1tI"),s=n.n(r),o=(n("bN3s"),n("7oih")),c=n("EYWl"),i=n("3Aql"),l=n.n(i),u=n("K424"),m=n.n(u),d=n("Vez2"),f=n.n(d),p=n("p3AD"),h=n("X/rp"),g=n("C6lc"),v=n("G04T"),y=n.n(v);var w=function(){var e=Object(r.useState)(""),t=e[0],n=e[1],a=Object(r.useState)(!1),o=a[0],c=a[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{marginTop:Object(p.a)(2)},className:"columns"},s.a.createElement("div",{class:"column"},s.a.createElement("input",{className:"cta-input",placeholder:"Enter Email",type:"email",id:"mce-EMAIL",onChange:function(e){return n(e.target.value)},value:t,required:!0})),s.a.createElement("div",{class:"column"},s.a.createElement("button",{className:"button is-primary",onClick:function(e){e.preventDefault();y()(t,{"group[26469][16]":"16"}).then((function(){n(""),c(!0)}))},style:{fontSize:"100%"}},"Request Access"))),s.a.createElement("div",null,o&&"Thank you! We'll be reaching out shortly"))};t.default=function(){return s.a.createElement(o.a,null,s.a.createElement(c.a,{title:"Home"}),s.a.createElement("section",{className:"hero",style:{position:"relative"}},s.a.createElement("div",{class:"skewed"}),s.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:Object(p.a)(1)}},s.a.createElement(a.Link,{to:"/"},s.a.createElement("img",{alt:"logo",src:l.a,style:{maxWidth:250,display:"flex",alignItems:"center",marginTop:Object(p.a)(.5),marginBottom:Object(p.a)(.5)}}))),s.a.createElement("div",{className:"columns is-hidden-touch"},s.a.createElement("div",{className:"column",style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},s.a.createElement("div",{style:{textAlign:"left",marginBottom:Object(p.a)(3)}},s.a.createElement("h1",{class:"title",style:{fontSize:"225%",whiteSpace:"nowrap"}},"One conversation with a mentor"),s.a.createElement("h1",{class:"title",style:{fontSize:"225%"}},"can change your career"),s.a.createElement(w,null))),s.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0}},s.a.createElement("img",{style:{marginLeft:"130px",maxWidth:"800px"},alt:"mockup",src:m.a}))),s.a.createElement("div",{className:"columns is-hidden-desktop"},s.a.createElement("div",{className:"column",style:{padding:0,marginLeft:Object(p.a)(.25),marginRight:Object(p.a)(.25)}},s.a.createElement("div",{style:{textAlign:"left",marginBottom:Object(p.a)(3)}},s.a.createElement("p",{class:"title is-4",style:{whiteSpace:"nowrap",overflow:"hidden"}},"One conversation with a mentor"),s.a.createElement("p",{class:"title is-4"},"can change your career"),s.a.createElement(w,null))),s.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0,marginLeft:Object(p.a)(.5),marginRight:Object(p.a)(.5)}},s.a.createElement("img",{alt:"mockup",src:m.a})))),s.a.createElement(h.default,null),s.a.createElement(g.default,null),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{class:"columns is-centered",style:{minHeight:"500px"}},s.a.createElement("div",{class:"column is-two-third",style:{overflow:"hidden",marginBottom:"0.75em"}},s.a.createElement("div",{class:"skewedImage"})),s.a.createElement("div",{class:"column is-one-third",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,margin:Object(p.a)(1)}},s.a.createElement("h1",{class:"title is-4"},"Connect personally with mentors"),s.a.createElement("p",{style:{textAlign:"left"}},"Our goal at Edith Labs is to expand access to mentorship and create partnerships between mentors and students. On Edith, students can either make public requests to all mentors, or they can ask specific mentors a private question."),s.a.createElement("br",null),s.a.createElement("p",{style:{textAlign:"left"}},"Currently, we support the following requests: general questions, resume reviews, requests to chat, mock interviews, referrals, and warm introductions. The mentors on Edith were recently in your shoes, so they can provide the most relevant advice as you plan your career.")))),s.a.createElement("section",{className:"hero is-info"},s.a.createElement("div",{class:"columns is-centered",style:{padding:0,marginTop:Object(p.a)(1),marginBottom:Object(p.a)(1)}},s.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0}},s.a.createElement("img",{alt:"isa-mockup",src:f.a})),s.a.createElement("div",{class:"column",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,margin:Object(p.a)(1),marginBottom:Object(p.a)(2)}},s.a.createElement("h1",{class:"title is-4"},"The Future of Edith"),s.a.createElement("p",{style:{textAlign:"left"}},"Expanding access to mentorship is a great first step, but in order to truly scale we have to do more. Eventually, we want to help you pay for college as well. U.S. student loans have passed $1.6 trillion in value and the current system is obviously not working. Combining mentorship and capital is the future."),s.a.createElement("br",null),s.a.createElement("p",{style:{textAlign:"left"}},"By connecting students and mentors through Income Share Agreements, we create value-add partnerships that benefit both sides. We’ve gone more in-depth in our ",s.a.createElement("a",{href:"/what-is-an-isa",style:{color:"rgb(86, 178, 229)"}},"blog posts"),", but mentors are incentive aligned to help you because they only succeed when you do. This is a massive improvement over student debt, and we are excited to fund our first students in the fall.")))))}},bRoh:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,s=r-(a||r);e.diff=s,e.prev=a,e.curr=r,a=r;for(var o=new Array(arguments.length),c=0;c<o.length;c++)o[c]=arguments[c];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var i=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;i++;var r=t.formatters[a];if("function"==typeof r){var s=o[i];n=r.call(e,s),o.splice(i,1),i--}return n})),t.formatArgs.call(e,o),(n.log||t.log||console.log.bind(console)).apply(e,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},cFZm:function(e,t,n){e.exports=n.p+"static/morgan-stanley-99744fbd67c32834beba89c1873b71d0.png"},cZXg:function(e,t,n){e.exports=n.p+"static/stanford-dd2f77b0e7910a8472932f732eed3be7.png"},lQlm:function(e,t,n){e.exports=n.p+"static/service-now-e1122603742773f36858a8aceb62e2e3.jpeg"},oG7D:function(e,t,n){e.exports=n.p+"static/duke-3b1ca2f065706be8009b71d2d6cae846.png"},oXqz:function(e,t,n){e.exports=n.p+"static/citadel-d7ca22dc4fccccef4331b239feb5b52c.png"},sair:function(e,t,n){e.exports=n.p+"static/apple-5eb27b6765b5a8a884699f2ca4da76e6.png"},shqH:function(e,t,n){e.exports=n.p+"static/ucla-b9e9d7e4087d794000704c63abbdbb35.png"},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))}}]);
//# sourceMappingURL=component---src-pages-home-index-js-342ec4b3d59105248749.js.map