(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"8oxB":function(e,t){var n,a,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{a="function"==typeof clearTimeout?clearTimeout:o}catch(e){a=o}}();var c,l=[],u=!1,m=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):m=-1,l.length&&f())}function f(){if(!u){var e=i(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++m<t;)c&&c[m].run();m=-1,t=l.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===o||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new p(e,t)),1!==l.length||u||i(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var a=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var o,i,c=t.prefix||"__jp",l=t.name||c+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;m&&(i=setTimeout((function(){p(),n&&n(new Error("Timeout"))}),m));function p(){o.parentNode&&o.parentNode.removeChild(o),window[l]=s,i&&clearTimeout(i)}return window[l]=function(e){a("jsonp got",e),p(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),a('jsonp req "%s"',e),(o=document.createElement("script")).src=e,f.parentNode.insertBefore(o,f),function(){window[l]&&p()}};var r=0;function s(){}},DFfB:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("ma3e"),o=n("p3AD");t.a=function(e){var t=e.title,n=e.content,i=Object(a.useState)(!1),c=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"row",marginBottom:Object(o.a)(.5)}},r.a.createElement("div",{onClick:function(){return l(!c)},style:{marginRight:Object(o.a)(.5),marginTop:Object(o.a)(.25),cursor:"pointer"}},c?r.a.createElement(s.d,null):r.a.createElement(s.e,null)),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return l(!c)},style:{marginBottom:Object(o.a)(.25),cursor:"pointer"}},r.a.createElement("p",{className:"subtitle is-4"},t)),c&&r.a.createElement("div",null,r.a.createElement("p",null,n)))))}},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("8ujH"),s=(a=r)&&a.__esModule?a:{default:a},o=n("H/qo");var i=function(e){return new Promise((function(t,n){return(0,s.default)(e,{param:"c",timeout:3500},(function(e,a){e&&n(e),a&&t(a)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+a+"="+e[n])}return t};t.default=function(e,t,n){var a=(0,o.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof n&&(s=n),s=s.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+c(t),u=""+s+l;return i(u)}},GTTd:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},QXP7:function(e,t){var n=1e3,a=60*n,r=60*a,s=24*r,o=365.25*s;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*o;case"days":case"day":case"d":return i*s;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*a;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?i(c=e,s,"day")||i(c,r,"hour")||i(c,a,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},RKme:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),s=n("EYWl"),o=n("7oih"),i=n("U5tq"),c=n("DFfB"),l=n("Xsbh"),u=n("G04T"),m=n.n(u),d=n("p3AD");var f=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],s=Object(a.useState)(""),o=s[0],i=s[1],c=Object(a.useState)(""),l=c[0],u=c[1],f=Object(a.useState)(!1),p=f[0],h=f[1],g=Object(a.useState)(!1),v=g[0],y=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"button is-primary",onClick:function(){return h(!0)}},"Get In Touch"),r.a.createElement("div",{className:"modal "+(p?"is-active":"")},r.a.createElement("div",{className:"modal-background",onClick:function(){n(""),i(""),u(""),h(!1),y(!1)}}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"container is-fluid"},v?r.a.createElement("div",{style:{margin:Object(d.a)(1.5),fontSize:"125%"}},r.a.createElement("p",null,"Hi "+t+" 👋!"),r.a.createElement("br",null),r.a.createElement("p",null,"\n                        Thanks for your interest in being an Edith Limited Partner! You should\n                        receive an email at "+l+" to schedule some time to chat so we can get\n                        to know you better. See you soon!\n                      "),r.a.createElement("br",null),r.a.createElement("p",null,"Nick & Kevin")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m()(l,{FNAME:t,LNAME:o,"group[26469][512]":"512"}).then((function(){y(!0)}))}},r.a.createElement("div",{className:"field",style:{margin:Object(d.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"First Name",onChange:function(e){return n(e.target.value)},value:t,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(d.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"Last Name",onChange:function(e){return i(e.target.value)},value:o,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(d.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"Enter Email",type:"email",onChange:function(e){return u(e.target.value)},value:l,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(d.a)(1.5)}},r.a.createElement("button",{className:"button is-primary",type:"submit"},"Submit"))))))))};t.default=function(){return r.a.createElement(o.a,null,r.a.createElement(s.a,{title:"Home"}),r.a.createElement("section",{className:"hero is-info",style:{position:"relative"}},r.a.createElement(i.a,null),r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(d.a)(5),marginBottom:Object(d.a)(5)}},r.a.createElement("div",{className:"column is-four-fifths"},r.a.createElement("h1",{className:"title is-1"},"Support the next generation of students.")))),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(d.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters",style:{textAlign:"center"}},r.a.createElement("h1",{className:"subtitle is-4","data-sal":"slide-up","data-sal-delay":"200","data-sal-easing":"ease"},"While talent may be evenly distributed, capital is not. By funding undercapitalized students that are partnered with successful mentors, Edith Limited Partners (LPs) help talented students reach their full potential. Investing in Edith students isn't like investing in a faceless debt instrument or scholarship, LPs always know exactly who they're helping and receive regular updates on their progress and successes."),r.a.createElement(f,null))),r.a.createElement(l.a,{descriptions:["We find talented and undercapitalized students and partner them with mentors.","We send you monthly updates on student progress.","LPs are repaid quarterly through the Edith SPV."]})),r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(d.a)(2),marginBottom:Object(d.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters"},r.a.createElement("h1",{className:"subtitle is-3"},"FAQ"),[{title:"What does the risk profile look like?",content:"ISAs are still a relatively new financial asset, so any investment is inherently       risky. By investing in a pool of students you reduce your risk, but there is still a chance       your investment can go to zero."},{title:"What type of careers are Edith fellows pursuing?",content:"Edith currently supports Fellows pursuing careers in Product Management,       Data Science, Quantitative Finance, Investment Banking, and Consulting."},{title:"How long does it take to be repaid?",content:"Standard Edith ISAs last for 60 months, so LPs can expect most of the repayments       to be completed by the sixth year. If students pursue a graduate degree or pause their       career, their repayments may be delayed."},{title:"How much do LPs invest?",content:"The minimum LP investment is currently $10,000."},{title:"How does Edith make money?",content:"Edith takes 5% of the student repayments and charges a 1% service fee on invested capital."},{title:"What makes a qualified LP?",content:"Only accredited investors can become Edith LPs."}].map((function(e){return r.a.createElement(c.a,e)}))))))}},Xsbh:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),s=n("p3AD");t.a=function(e){var t=e.descriptions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(s.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters"},r.a.createElement("h1",{className:"subtitle is-3"},"How It Works"))),r.a.createElement("div",{className:"columns is-centered",style:{marginBottom:Object(s.a)(2)}},t.map((function(e,t){return r.a.createElement("div",{className:"column is-one-quarter","data-sal":"slide-up","data-sal-delay":300+100*t,"data-sal-easing":"ease"},r.a.createElement("p",{className:"subtitle"},e))}))))}},bRoh:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,s=r-(a||r);e.diff=s,e.prev=a,e.curr=r,a=r;for(var o=new Array(arguments.length),i=0;i<o.length;i++)o[i]=arguments[i];o[0]=t.coerce(o[0]),"string"!=typeof o[0]&&o.unshift("%O");var c=0;o[0]=o[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;c++;var r=t.formatters[a];if("function"==typeof r){var s=o[c];n=r.call(e,s),o.splice(c,1),c--}return n})),t.formatArgs.call(e,o),(n.log||t.log||console.log.bind(console)).apply(e,o)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}}}]);
//# sourceMappingURL=component---src-pages-lp-js-a8d04eb4d7c5f27e2b96.js.map