(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8oxB":function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function i(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:s}catch(e){a=s}}();var c,l=[],u=!1,m=-1;function d(){u&&c&&(u=!1,c.length?l=c.concat(l):m=-1,l.length&&f())}function f(){if(!u){var e=i(d);u=!0;for(var t=l.length;t;){for(c=l,l=[];++m<t;)c&&c[m].run();m=-1,t=l.length}c=null,u=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===s||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||u||i(f)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,n){n("pIFo"),n("V+eJ"),n("f3/d");var a=n("GTTd")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var s,i,c=t.prefix||"__jp",l=t.name||c+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;m&&(i=setTimeout((function(){h(),n&&n(new Error("Timeout"))}),m));function h(){s.parentNode&&s.parentNode.removeChild(s),window[l]=o,i&&clearTimeout(i)}return window[l]=function(e){a("jsonp got",e),h(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),a('jsonp req "%s"',e),(s=document.createElement("script")).src=e,f.parentNode.insertBefore(s,f),function(){window[l]&&h()}};var r=0;function o(){}},AsDw:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("EYWl"),s=n("7oih"),i=n("U5tq"),c=n("Xsbh"),l=n("DFfB"),u=n("p3AD"),m=(n("nL54"),n("G04T")),d=n.n(m);var f=function(){var e=Object(a.useState)(""),t=e[0],n=e[1],o=Object(a.useState)(""),s=o[0],i=o[1],c=Object(a.useState)(""),l=c[0],m=c[1],f=Object(a.useState)(!1),h=f[0],p=f[1],g=Object(a.useState)(!1),v=g[0],y=g[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"button is-primary",onClick:function(){return p(!0)}},"Get In Touch"),r.a.createElement("div",{className:"modal "+(h?"is-active":"")},r.a.createElement("div",{className:"modal-background",onClick:function(){n(""),i(""),m(""),p(!1),y(!1)}}),r.a.createElement("div",{className:"modal-card"},r.a.createElement("section",{className:"modal-card-body"},r.a.createElement("div",{className:"container is-fluid"},v?r.a.createElement("div",{style:{margin:Object(u.a)(1.5),fontSize:"125%"}},r.a.createElement("p",null,"Hi "+t+" 👋!"),r.a.createElement("br",null),r.a.createElement("p",null,"\n                        Thanks for your interest in being an Edith General Partner! You should\n                        receive an email at "+l+" to schedule some time to chat so we can get\n                        to know you better. See you soon!\n                      "),r.a.createElement("br",null),r.a.createElement("p",null,"Nick & Kevin")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),d()(l,{FNAME:t,LNAME:s,"group[26469][1024]":"1024"}).then((function(){y(!0)}))}},r.a.createElement("div",{className:"field",style:{margin:Object(u.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"First Name",onChange:function(e){return n(e.target.value)},value:t,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(u.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"Last Name",onChange:function(e){return i(e.target.value)},value:s,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(u.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"Enter Email",type:"email",onChange:function(e){return m(e.target.value)},value:l,required:!0})),r.a.createElement("div",{className:"field",style:{margin:Object(u.a)(1.5)}},r.a.createElement("button",{className:"button is-primary",type:"submit"},"Submit"))))))))},h=n("MG7v"),p=n.n(h),g=n("Cmwq"),v=n.n(g),y=n("uNnP"),b=n.n(y);t.default=function(){return b.a,p.a,v.a,r.a.createElement(s.a,null,r.a.createElement(o.a,{title:"Home"}),r.a.createElement("section",{className:"hero is-info",style:{position:"relative"}},r.a.createElement(i.a,{path:"/gp"}),r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(u.a)(5),marginBottom:Object(u.a)(5)}},r.a.createElement("div",{className:"column is-four-fifths"},r.a.createElement("h1",{className:"title is-1"},"Mentor the next generation.")))),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(u.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters",style:{textAlign:"center"}},r.a.createElement("h1",{className:"subtitle is-4","data-sal":"slide-up","data-sal-delay":"200","data-sal-easing":"ease"},"It takes a team to succeed. By lending their experience, Edith General Partners (GPs) are the mentors that take students to the next level. Instead of one off conversations with many students, Edith GPs can build real relationships the Fellows over a longer period of time. This allows GPs to have a large impact on a student's success, and they share in the success of the Fellows."),r.a.createElement(f,null))),r.a.createElement(c.a,{descriptions:["Partner with an Edith Fellow with similar career interests and invest in their success.","GPs check-in with their Fellow on a bi-weekly basis to build a relationship.","Share in the success of your Edith Fellow once they graduate."]})),r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(u.a)(2),marginBottom:Object(u.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters"},r.a.createElement("h1",{className:"subtitle is-3"},"FAQ"),[{title:"What's the time commitment to be an Edith GP?",content:"We expect Edith GPs to be available on a bi-weekly basis to meet with their       Edith Fellow. There will be times where this isn't feasible, but we believe a regular       cadence is important for building strong relationships."},{title:"Does it cost me anything to be a GP?",content:"We want our GPs to be invested along with the LPs and expect them to invest       $500 - $1,000 into the pool, although they're welcome to put in more. Because GPs spend       time mentoring students, they get a 10% premium on invested capital. For instance, if the       pool of capital was $100 and GPs invested $10, they would receive 11% of the repayments."},{title:"What happens if I don’t want to be a GP anymore?",content:"While we would hate to see a GP leave the program, as long as we could facilitate       an orderly transition of GPs for a student you can leave at any time."},{title:"How does Edith screen Fellows?",content:"We have an application process and interview each prospective Fellow before you       meet them."},{title:"Do I get to choose who I mentor?",content:"Yes. Before partnering them with you, we’ll help facilitate an intro call       with the Edith Fellow candidates you’d like to meet."},{title:"How does Edith make money?",content:"Edith takes 5% of the student repayments and charges a 1% service fee on invested       capital."}].map((function(e){return r.a.createElement(l.a,e)}))))),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(u.a)(2),marginBottom:Object(u.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters",style:{textAlign:"center"}},r.a.createElement("h1",{className:"subtitle is-3"},"Want to help students but don't have time to mentor?"),r.a.createElement("a",{href:"/lp",className:"button is-primary nav-child"},"Become an Edith LP")))))}},Cmwq:function(e,t,n){e.exports=n.p+"static/david-0e40633ccf4f00c3e2f3895dbd6193d0.png"},DFfB:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("ma3e"),s=n("p3AD");t.a=function(e){var t=e.title,n=e.content,i=Object(a.useState)(!1),c=i[0],l=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",justifyContent:"row",marginBottom:Object(s.a)(.5)}},r.a.createElement("div",{onClick:function(){return l(!c)},style:{marginRight:Object(s.a)(.5),marginTop:Object(s.a)(.25),cursor:"pointer"}},c?r.a.createElement(o.d,null):r.a.createElement(o.e,null)),r.a.createElement("div",null,r.a.createElement("div",{onClick:function(){return l(!c)},style:{marginBottom:Object(s.a)(.25),cursor:"pointer"}},r.a.createElement("p",{className:"subtitle is-4"},t)),c&&r.a.createElement("div",null,r.a.createElement("p",null,n)))))}},G04T:function(e,t,n){"use strict";n("pIFo"),n("VRzm"),n("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var a,r=n("8ujH"),o=(a=r)&&a.__esModule?a:{default:a},s=n("H/qo");var i=function(e){return new Promise((function(t,n){return(0,o.default)(e,{param:"c",timeout:3500},(function(e,a){e&&n(e),a&&t(a)}))}))},c=function(e){var t="";for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var a=n.substring(0,6)?n:n.toUpperCase();t=t.concat("&"+a+"="+e[n])}return t};t.default=function(e,t,n){var a=(0,s.validate)(e),r=encodeURIComponent(e);if(!a)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var o="https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972";arguments.length<3&&"string"==typeof t?o=t:"string"==typeof n&&(o=n),o=o.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+c(t),u=""+o+l;return i(u)}},GTTd:function(e,t,n){(function(a){function r(){var e;try{e=t.storage.debug}catch(n){}return!e&&void 0!==a&&"env"in a&&(e={}.DEBUG),e}n("pIFo"),n("Oyvg"),n("SRfc"),(t=e.exports=n("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var a="color: "+this.color;e.splice(1,0,a,"color: inherit");var r=0,o=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(o=r))})),e.splice(o,0,a)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(n){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,n("8oxB"))},"H/qo":function(e,t,n){"use strict";n("dZ+Y"),n("KKXr");var a=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!a.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},MG7v:function(e,t,n){e.exports=n.p+"static/sarah-41bdc01b62fe99244979151d526bd63d.jpeg"},QXP7:function(e,t){var n=1e3,a=60*n,r=60*a,o=24*r,s=365.25*o;function i(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var i=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"days":case"day":case"d":return i*o;case"hours":case"hour":case"hrs":case"hr":case"h":return i*r;case"minutes":case"minute":case"mins":case"min":case"m":return i*a;case"seconds":case"second":case"secs":case"sec":case"s":return i*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?i(c=e,o,"day")||i(c,r,"hour")||i(c,a,"minute")||i(c,n,"second")||c+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=a)return Math.round(e/a)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},Xsbh:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("p3AD");t.a=function(e){var t=e.descriptions;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(o.a)(2)}},r.a.createElement("div",{className:"column is-three-quarters"},r.a.createElement("h1",{className:"subtitle is-3"},"How It Works"))),r.a.createElement("div",{className:"columns is-centered",style:{marginBottom:Object(o.a)(2)}},t.map((function(e,t){return r.a.createElement("div",{className:"column is-one-quarter","data-sal":"slide-up","data-sal-delay":300+100*t,"data-sal-easing":"ease"},r.a.createElement("p",{className:"subtitle"},e))}))))}},bRoh:function(e,t,n){var a;function r(e){function n(){if(n.enabled){var e=n,r=+new Date,o=r-(a||r);e.diff=o,e.prev=a,e.curr=r,a=r;for(var s=new Array(arguments.length),i=0;i<s.length;i++)s[i]=arguments[i];s[0]=t.coerce(s[0]),"string"!=typeof s[0]&&s.unshift("%O");var c=0;s[0]=s[0].replace(/%([a-zA-Z%])/g,(function(n,a){if("%%"===n)return n;c++;var r=t.formatters[a];if("function"==typeof r){var o=s[c];n=r.call(e,o),s.splice(c,1),c--}return n})),t.formatArgs.call(e,s),(n.log||t.log||console.log.bind(console)).apply(e,s)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,a=0;for(n in e)a=(a<<5)-a+e.charCodeAt(n),a|=0;return t.colors[Math.abs(a)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}n("Oyvg"),n("KKXr"),n("2Spj"),n("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),a=n.length,r=0;r<a;r++)n[r]&&("-"===(e=n[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,a;for(n=0,a=t.skips.length;n<a;n++)if(t.skips[n].test(e))return!1;for(n=0,a=t.names.length;n<a;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("QXP7"),t.names=[],t.skips=[],t.formatters={}},nL54:function(e,t,n){"use strict";n("f3/d");var a=n("q1tI"),r=n.n(a),o=n("p3AD");t.a=function(e){var t=e.bio,n=e.profilePic,a=e.name,s=e.company,i=e.delay;return r.a.createElement("div",{className:"column is-one-third","data-sal":"slide-up","data-sal-delay":200+i,"data-sal-easing":"ease",style:{textAlign:"center"}},r.a.createElement("div",{className:"circular-portrait",style:{margin:"auto",width:"100px",height:"100px",overflow:"hidden",borderRadius:"50%",marginBottom:Object(o.a)(.25)}},r.a.createElement("img",{alt:a,style:{width:"100%",height:"auto"},src:n})),r.a.createElement("p",{className:"subtitle is-4",style:{marginBlockEnd:0}},a),r.a.createElement("p",{className:"subtitle",style:{marginBlockEnd:"0.5em"}},s),r.a.createElement("p",null,t))}},uNnP:function(e,t,n){e.exports=n.p+"static/cem-be7f4cc38123ba45468dedc104c686c8.jpeg"}}]);
//# sourceMappingURL=component---src-pages-gp-js-550ee8e0f4cba7fd9f84.js.map