(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5,8,9,10],{"7WN3":function(e,t,a){"use strict";a.r(t);a("tUrg");var n=a("q1tI"),r=a.n(n),s=a("p3AD");t.default=function(e){var t=e.title,a=e.logos,n=void 0===a?[]:a;return r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{className:"columns is-centered",style:{marginTop:Object(s.a)(2),marginBottom:Object(s.a)(2)}},r.a.createElement("div",{className:"column is-four-fifths",style:{textAlign:"center"}},r.a.createElement("h1",{className:"title is-4"},t),r.a.createElement("div",{className:"columns is-centered is-multiline"},n.map((function(e){var t=e.src,a=e.link,n=e.alt;return r.a.createElement("div",{className:"column is-one-third",style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement("a",{href:a},r.a.createElement("img",{src:t,alt:n,style:{maxHeight:"50px"}})))}))))))}},"8oxB":function(e,t){var a,n,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(a===setTimeout)return setTimeout(e,0);if((a===s||!a)&&setTimeout)return a=setTimeout,setTimeout(e,0);try{return a(e,0)}catch(t){try{return a.call(null,e,0)}catch(t){return a.call(this,e,0)}}}!function(){try{a="function"==typeof setTimeout?setTimeout:s}catch(e){a=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var o,l=[],u=!1,m=-1;function d(){u&&o&&(u=!1,o.length?l=o.concat(l):m=-1,l.length&&f())}function f(){if(!u){var e=c(d);u=!0;for(var t=l.length;t;){for(o=l,l=[];++m<t;)o&&o[m].run();m=-1,t=l.length}o=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];l.push(new p(e,t)),1!==l.length||u||c(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"8ujH":function(e,t,a){a("pIFo"),a("V+eJ"),a("f3/d");var n=a("GTTd")("jsonp");e.exports=function(e,t,a){"function"==typeof t&&(a=t,t={});t||(t={});var i,c,o=t.prefix||"__jp",l=t.name||o+r++,u=t.param||"callback",m=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,f=document.getElementsByTagName("script")[0]||document.head;m&&(c=setTimeout((function(){p(),a&&a(new Error("Timeout"))}),m));function p(){i.parentNode&&i.parentNode.removeChild(i),window[l]=s,c&&clearTimeout(c)}return window[l]=function(e){n("jsonp got",e),p(),a&&a(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+u+"="+d(l)).replace("?&","?"),n('jsonp req "%s"',e),(i=document.createElement("script")).src=e,f.parentNode.insertBefore(i,f),function(){window[l]&&p()}};var r=0;function s(){}},C6lc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("NkvD"),i=a.n(s),c=a("oG7D"),o=a.n(c),l=a("W7iR"),u=a.n(l),m=a("cZXg"),d=a.n(m),f=a("VSla"),p=a.n(f),h=a("shqH"),g=a.n(h),v=a("7WN3");t.default=function(){var e=[{src:i.a,alt:"berkeley",link:"https://www.berkeley.edu"},{src:o.a,alt:"duke",link:"https://duke.edu"},{src:u.a,alt:"santa-clara",link:"https://www.scu.edu"},{src:d.a,alt:"stanford",link:"https://www.stanford.edu"},{src:p.a,alt:"uchicago",link:"https://www.uchicago.edu"},{src:g.a,alt:"ucla",link:"http://www.ucla.edu"}];return r.a.createElement(v.default,{title:"Where Our Mentors Studied",logos:e})}},C72o:function(e,t,a){e.exports=a.p+"static/mckinsey-80784f21d6481a2a013590e539458cd4.png"},G04T:function(e,t,a){"use strict";a("pIFo"),a("VRzm"),a("Btvt"),Object.defineProperty(t,"__esModule",{value:!0});var n,r=a("8ujH"),s=(n=r)&&n.__esModule?n:{default:n},i=a("H/qo");var c=function(e){return new Promise((function(t,a){return(0,s.default)(e,{param:"c",timeout:3500},(function(e,n){e&&a(e),n&&t(n)}))}))},o=function(e){var t="";for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=a.substring(0,6)?a:a.toUpperCase();t=t.concat("&"+n+"="+e[a])}return t};t.default=function(e,t,a){var n=(0,i.validate)(e),r=encodeURIComponent(e);if(!n)return Promise.resolve({result:"error",msg:"The email you entered is not valid."});var s="https://gmail.us3.list-manage.com/subscribe/post?u=be923548dcbeefc0055295a56&amp;id=77ed274972";arguments.length<3&&"string"==typeof t?s=t:"string"==typeof a&&(s=a),s=s.replace(/\/post/g,"/post-json");var l="&EMAIL="+r+o(t),u=""+s+l;return c(u)}},GTTd:function(e,t,a){(function(n){function r(){var e;try{e=t.storage.debug}catch(a){}return!e&&void 0!==n&&"env"in n&&(e={}.DEBUG),e}a("pIFo"),a("Oyvg"),a("SRfc"),(t=e.exports=a("bRoh")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var a=this.useColors;if(e[0]=(a?"%c":"")+this.namespace+(a?" %c":" ")+e[0]+(a?"%c ":" ")+"+"+t.humanize(this.diff),!a)return;var n="color: "+this.color;e.splice(1,0,n,"color: inherit");var r=0,s=0;e[0].replace(/%[a-zA-Z%]/g,(function(e){"%%"!==e&&(r++,"%c"===e&&(s=r))})),e.splice(s,0,n)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(a){}},t.load=r,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},t.enable(r())}).call(this,a("8oxB"))},"H/qo":function(e,t,a){"use strict";a("dZ+Y"),a("KKXr");var n=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;t.validate=function(e){if(!e)return!1;if(e.length>254)return!1;if(!n.test(e))return!1;var t=e.split("@");return!(t[0].length>64)&&!t[1].split(".").some((function(e){return e.length>63}))}},K424:function(e,t,a){e.exports=a.p+"static/mockup-1f1c57079d398d051bcc8071d6908cc7.png"},KhM5:function(e,t,a){e.exports=a.p+"static/credit-suisse-6c9346fb303224fd48b54d0a6a125816.png"},NkvD:function(e,t,a){e.exports=a.p+"static/berkeley-de27f5945bd51856ef9e353420f96a80.png"},QXP7:function(e,t){var a=1e3,n=60*a,r=60*n,s=24*r,i=365.25*s;function c(e,t,a){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+a:Math.ceil(e/t)+" "+a+"s"}e.exports=function(e,t){t=t||{};var o,l=typeof e;if("string"===l&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*i;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*r;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*a;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===l&&!1===isNaN(e))return t.long?c(o=e,s,"day")||c(o,r,"hour")||c(o,n,"minute")||c(o,a,"second")||o+" ms":function(e){if(e>=s)return Math.round(e/s)+"d";if(e>=r)return Math.round(e/r)+"h";if(e>=n)return Math.round(e/n)+"m";if(e>=a)return Math.round(e/a)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},"Rs+l":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("p3AD");t.default=function(){return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns is-centered",style:{minHeight:"500px"}},r.a.createElement("div",{className:"column is-one-third",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,margin:Object(s.a)(2)}},r.a.createElement("div",{"data-sal":"slide-up","data-sal-duration":"500","data-sal-delay":"200","data-sal-easing":"ease"},r.a.createElement("h1",{className:"title is-4"},"The Edith Blog"),r.a.createElement("p",{style:{textAlign:"left",marginBottom:Object(s.a)(1)}},"Learn more about what we’re building at Edith, our research on the future of financing education, and how to be an effective student or mentor on our platform.")),r.a.createElement("a",{className:"button is-primary",href:"/learn"},"Read More")),r.a.createElement("div",{className:"column is-two-third",style:{overflow:"hidden",marginBottom:"0.75em"}},r.a.createElement("div",{className:"skewedImageBlog"}))))}},VSla:function(e,t,a){e.exports=a.p+"static/uchicago-66481b76d9e1498b4e2a95d299dcea47.png"},Vez2:function(e,t,a){e.exports=a.p+"static/isa-mockup-cfdbac3cc6d6edba42dbaf759082e4a6.png"},W7iR:function(e,t,a){e.exports=a.p+"static/santa-clara-00b9d2c9a045ec31ebc9e8e90c754c6e.png"},"X/rp":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=a("oXqz"),i=a.n(s),c=a("sair"),o=a.n(c),l=a("KhM5"),u=a.n(l),m=a("C72o"),d=a.n(m),f=a("cFZm"),p=a.n(f),h=a("lQlm"),g=a.n(h),v=a("7WN3");t.default=function(){var e=[{src:o.a,link:"https://www.apple.com",alt:"apple"},{src:i.a,link:"https://www.citadel.com",alt:"citadel"},{src:p.a,link:"https://www.morganstanley.com",alt:"morgan-stanley"},{src:d.a,link:"https://www.mckinsey.com",alt:"mckinsey"},{src:g.a,link:"https://www.servicenow.com",alt:"service-now"},{src:u.a,link:"https://www.credit-suisse.com/us/en.html",alt:"credit-suisse"}];return r.a.createElement(v.default,{title:"Where Our Mentors Worked",logos:e})}},a97E:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),s=(a("bN3s"),a("7oih")),i=a("EYWl"),c=a("K424"),o=a.n(c),l=a("Vez2"),u=a.n(l),m=a("p3AD"),d=a("G04T"),f=a.n(d);var p=function(e){var t=e.visible,a=e.defaultEmail,s=e.setIsVisible,i=e.clearParentEmail,c=Object(n.useState)(""),o=c[0],l=c[1],u=Object(n.useState)(""),d=u[0],p=u[1],h=Object(n.useState)(a),g=h[0],v=h[1],y=Object(n.useState)(!1),b=y[0],w=y[1];return Object(n.useEffect)((function(){v(a)}),[a]),r.a.createElement("div",{class:"modal "+(t?"is-active":"")},r.a.createElement("div",{class:"modal-background",onClick:function(){v(""),l(""),p(""),w(!1),s(!1),i()}}),r.a.createElement("div",{class:"modal-card"},r.a.createElement("section",{class:"modal-card-body"},r.a.createElement("div",{class:"container is-fluid"},b?r.a.createElement("div",{style:{margin:Object(m.a)(1.5),fontSize:"125%"}},r.a.createElement("p",null,"Hi ",o," 👋!"),r.a.createElement("br",null),r.a.createElement("p",null,"Thanks for signing up for the waitlist. You should receive an email at "+g+". See you on Edith soon!"),r.a.createElement("br",null),r.a.createElement("p",null,"Nick & Kevin")):r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),f()(g,{FNAME:o,SCHOOL:d,"group[26469][16]":"16"}).then((function(){w(!0)}))}},r.a.createElement("div",{class:"field",style:{margin:Object(m.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"First Name",onChange:function(e){return l(e.target.value)},value:o,required:!0})),r.a.createElement("div",{class:"field",style:{margin:Object(m.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"School",onChange:function(e){return p(e.target.value)},value:d,required:!0})),r.a.createElement("div",{class:"field",style:{margin:Object(m.a)(1.5)}},r.a.createElement("input",{className:"modal-input",placeholder:"Enter Email",type:"email",onChange:function(e){return v(e.target.value)},value:a,required:!0})),r.a.createElement("div",{class:"field",style:{margin:Object(m.a)(1.5)}},r.a.createElement("button",{class:"button is-primary",type:"submit"},"Join the Waitlist")))))))};var h=function(){var e=Object(n.useState)(""),t=e[0],a=e[1],s=Object(n.useState)(!1),i=s[0],c=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:Object(m.a)(2)},className:"columns"},r.a.createElement("div",{className:"column"},r.a.createElement("input",{className:"cta-input",placeholder:"Enter Email",type:"email",onChange:function(e){return a(e.target.value)},value:t})),r.a.createElement("div",{className:"column"},r.a.createElement("button",{className:"button is-primary",onClick:function(){return c(!0)},style:{fontSize:"100%"},type:"button"},"Join the Waitlist"))),r.a.createElement(p,{visible:i,defaultEmail:t,setIsVisible:c,clearParentEmail:function(){return a("")}}))},g=a("U5tq"),v=a("X/rp"),y=a("C6lc"),b=a("Rs+l");t.default=function(){return r.a.createElement(s.a,null,r.a.createElement(i.a,{title:"Home"}),r.a.createElement("section",{className:"hero",style:{position:"relative"}},r.a.createElement("div",{className:"skewed"}),r.a.createElement(g.a,{showLogin:!0}),r.a.createElement("div",{className:"columns is-hidden-touch"},r.a.createElement("div",{className:"column",style:{padding:0,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",marginLeft:Object(m.a)(.5)}},r.a.createElement("div",{style:{textAlign:"left",marginBottom:Object(m.a)(3)}},r.a.createElement("div",{"data-sal":"slide-up","data-sal-duration":"500","data-sal-delay":"200","data-sal-easing":"ease"},r.a.createElement("h1",{className:"subtitle",style:{fontSize:"250%",whiteSpace:"nowrap"}},"One conversation with a mentor"),r.a.createElement("h1",{className:"subtitle",style:{fontSize:"250%"}},"can change your career")),r.a.createElement(h,null))),r.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0}},r.a.createElement("img",{style:{marginLeft:"130px",maxWidth:"800px"},alt:"mockup",src:o.a}))),r.a.createElement("div",{className:"columns is-hidden-desktop"},r.a.createElement("div",{className:"column",style:{padding:0,margin:Object(m.a)(.5)}},r.a.createElement("div",{style:{textAlign:"left",marginBottom:Object(m.a)(3)}},r.a.createElement("div",{"data-sal":"slide-up","data-sal-duration":"500","data-sal-delay":"200","data-sal-easing":"ease"},r.a.createElement("p",{className:"title is-4",style:{whiteSpace:"nowrap",overflow:"hidden"}},"One conversation with a mentor"),r.a.createElement("p",{className:"title is-4"},"can change your career")),r.a.createElement(h,null))),r.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0,marginLeft:Object(m.a)(.5),marginRight:Object(m.a)(.5)}},r.a.createElement("img",{alt:"mockup",src:o.a})))),r.a.createElement(v.default,null),r.a.createElement(y.default,null),r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns is-centered",style:{minHeight:"500px"}},r.a.createElement("div",{className:"column is-two-third",style:{overflow:"hidden",marginBottom:"0.75em"}},r.a.createElement("div",{className:"skewedImage"})),r.a.createElement("div",{className:"column is-one-third",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,margin:Object(m.a)(1)},"data-sal":"slide-up","data-sal-duration":"500","data-sal-delay":"200","data-sal-easing":"ease"},r.a.createElement("h1",{className:"title is-4"},"Connect personally with mentors"),r.a.createElement("p",{style:{textAlign:"left"}},"Our goal at Edith Labs is to expand access to mentorship and create partnerships between mentors and students. On Edith, students can either make public requests to all mentors, or they can ask specific mentors a private question."),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"left"}},"Currently, we support the following requests: general questions, resume reviews, requests to chat, mock interviews, referrals, and warm introductions. The mentors on Edith were recently in your shoes, so they can provide the most relevant advice as you plan your career.")))),r.a.createElement("section",{className:"hero is-info"},r.a.createElement("div",{className:"columns is-centered",style:{padding:0,margin:Object(m.a)(2)}},r.a.createElement("div",{className:"column",style:{overflow:"hidden",padding:0}},r.a.createElement("img",{alt:"isa-mockup",src:u.a})),r.a.createElement("div",{className:"column",style:{textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:0,marginBottom:Object(m.a)(2)},"data-sal":"slide-up","data-sal-duration":"500","data-sal-delay":"200","data-sal-easing":"ease"},r.a.createElement("h1",{className:"title is-4"},"The Future of Edith"),r.a.createElement("p",{style:{textAlign:"left"}},"Expanding access to mentorship is a great first step, but in order to truly scale we have to do more. Eventually, we want to help you pay for college as well. U.S. student loans have passed $1.6 trillion in value and the current system is obviously not working. Combining mentorship and capital is the future."),r.a.createElement("br",null),r.a.createElement("p",{style:{textAlign:"left"}},"By connecting students and mentors through Income Share Agreements, we create value-add partnerships that benefit both sides. We’ve gone more in-depth in our"," ",r.a.createElement("a",{href:"/what-is-an-isa",style:{color:"rgb(86, 178, 229)"}},"blog posts"),", but mentors are incentive aligned to help you because they only succeed when you do. This is a massive improvement over student debt, and we are excited to fund our first students in the fall.")))),r.a.createElement(b.default,null))}},bRoh:function(e,t,a){var n;function r(e){function a(){if(a.enabled){var e=a,r=+new Date,s=r-(n||r);e.diff=s,e.prev=n,e.curr=r,n=r;for(var i=new Array(arguments.length),c=0;c<i.length;c++)i[c]=arguments[c];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var o=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,(function(a,n){if("%%"===a)return a;o++;var r=t.formatters[n];if("function"==typeof r){var s=i[o];a=r.call(e,s),i.splice(o,1),o--}return a})),t.formatArgs.call(e,i),(a.log||t.log||console.log.bind(console)).apply(e,i)}}return a.namespace=e,a.enabled=t.enabled(e),a.useColors=t.useColors(),a.color=function(e){var a,n=0;for(a in e)n=(n<<5)-n+e.charCodeAt(a),n|=0;return t.colors[Math.abs(n)%t.colors.length]}(e),"function"==typeof t.init&&t.init(a),a}a("Oyvg"),a("KKXr"),a("2Spj"),a("pIFo"),(t=e.exports=r.debug=r.default=r).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var a=("string"==typeof e?e:"").split(/[\s,]+/),n=a.length,r=0;r<n;r++)a[r]&&("-"===(e=a[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var a,n;for(a=0,n=t.skips.length;a<n;a++)if(t.skips[a].test(e))return!1;for(a=0,n=t.names.length;a<n;a++)if(t.names[a].test(e))return!0;return!1},t.humanize=a("QXP7"),t.names=[],t.skips=[],t.formatters={}},cFZm:function(e,t,a){e.exports=a.p+"static/morgan-stanley-99744fbd67c32834beba89c1873b71d0.png"},cZXg:function(e,t,a){e.exports=a.p+"static/stanford-dd2f77b0e7910a8472932f732eed3be7.png"},lQlm:function(e,t,a){e.exports=a.p+"static/service-now-e1122603742773f36858a8aceb62e2e3.jpeg"},oG7D:function(e,t,a){e.exports=a.p+"static/duke-3b1ca2f065706be8009b71d2d6cae846.png"},oXqz:function(e,t,a){e.exports=a.p+"static/citadel-d7ca22dc4fccccef4331b239feb5b52c.png"},sair:function(e,t,a){e.exports=a.p+"static/apple-5eb27b6765b5a8a884699f2ca4da76e6.png"},shqH:function(e,t,a){e.exports=a.p+"static/ucla-b9e9d7e4087d794000704c63abbdbb35.png"}}]);
//# sourceMappingURL=component---src-pages-home-home-js-c96dd626efc7ed9a74ea.js.map