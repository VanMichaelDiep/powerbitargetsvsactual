!function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var u=r+i>>>1;n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1;n*t%1;)t*=10;return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===bo||n[0]===_o?_o+n:n}function s(n){return(n+="")[0]===_o?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[];for(var t in this._)n.push(s(t));return n}function v(){var n=0;for(var t in this._)++n;return n}function d(){for(var n in this._)return!1;return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function x(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=wo.length;r>e;++e){var i=wo[e]+t;if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length;++i<u;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new c;return t.on=function(t,i){var u,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event;n=t.sourceEvent;)t=n;return t}function N(n){for(var t=new _,e=0,r=arguments.length;++e<r;)t[arguments[e]]=w(t);return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event;i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return ko(n,Co),n}function A(n){return"function"==typeof n?n:function(){return No(n,this)}}function C(n){return"function"==typeof n?n:function(){return Eo(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=T(n).map(D);var i=n.length;return"function"==typeof t?r:e}function D(n){var t=q(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e===zo&&t.documentElement.namespaceURI===zo?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode;n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return Ao(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,u=n[e],o=0,a=u.length;a>o;o++)(i=u[o])&&t(i,o,e);return n}function Z(n){return ko(n,qo),n}function V(n){var t,e;return function(r,i,u){var o,a=n[u].update,l=a.length;for(u!=e&&(e=u,t=0),i>=t&&(t=i+1);!(o=a[t])&&++t<l;);return o}}function X(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$;a>0&&(n=n.slice(0,a));var c=To.get(n);return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event;ao.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++Do,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S);if(null==Ro&&(Ro="onselectstart"in e?!1:x(e.style,"userSelect")),Ro){var o=n(e).style,a=o[Ro];o[Ro]="none"}return function(n){if(u.on(r,null),Ro&&(o[Ro]=a),n){var t=function(){u.on(i,null)};u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0]);var r=n.ownerSVGElement||n;if(r.createSVGPoint){var i=r.createSVGPoint();if(0>Po){var u=t(n);if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var o=r[0][0].getScreenCTM();Po=!(o.f||o.e),r.remove()}}return Po?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect();return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:0>n?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:-1>n?Fo:Math.acos(n)}function tn(n){return n>1?Io:-1>n?-Io:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?u+(o-u)*n/60:180>n?o:240>n?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Yo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200;return i=vn(i)*na,r=vn(r)*ta,u=vn(u)*ea,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ua.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o=o>>4|o,a=240&u,a=a>>4|a,l=15&u,l=l<<4|l):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2;return a?(i=.5>l?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(e>t?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&1>l?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e);var r=dn((.4124564*n+.3575761*t+.1804375*e)/na),i=dn((.2126729*n+.7151522*t+.072175*e)/ta),u=dn((.0193339*n+.119192*t+.9503041*e)/ea);return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status;if(!t&&Ln(l)||t>=200&&300>t||304===t){try{n=e.call(u,l)}catch(r){return void o.error.call(u,r)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null;return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event;ao.event=n;try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f]);return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,u={c:n,t:i,n:null};return aa?aa.n=u:oa=u,aa=u,la||(ca=clearTimeout(ca),la=1,fa(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n;t>24?(isFinite(t)&&(clearTimeout(ca),ca=setTimeout(Tn,t)),la=0):(la=1,fa(Tn))}function Rn(){for(var n=Date.now(),t=oa;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function Dn(){for(var n,t=oa,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:oa=t.n;return aa=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*xo(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0;i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t));)a=r[o=(o+1)%r.length];return u.reverse().join(e)}:m;return function(n){var e=ha.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0;switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g";break;case"%":g=100,d="%",p="f";break;case"p":g=100,d="%",p="r";break;case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase());case"c":m=!1;case"d":y=!0,h=0;break;case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=pa.get(p)||Fn;var M=c&&s;return function(n){var e=d;if(y&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===a?"":a;if(0>g){var l=ao.formatPrefix(n,h);n=l.scale(n),e=l.symbol+d}else n*=g;n=p(n,h);var x,b,_=n.lastIndexOf(".");if(0>_){var w=m?n.lastIndexOf("e"):-1;0>w?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1);!c&&s&&(x=u(x,1/0));var S=v.length+x.length+b.length+(M?0:i.length),k=f>S?new Array(S=f-S+1).join(r):"";return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new va(e-1)),1),e}function u(n,e){return t(n=new va(+n),e),n}function o(n,r,u){var o=i(n),a=[];if(u>1)for(;r>o;)e(o)%u||a.push(new Date(+o)),t(o,1);else for(;r>o;)a.push(new Date(+o)),t(o,1);return a}function a(n,t,e){try{va=Hn;var r=new Hn;return r._=n,o(r,t,e)}finally{va=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o;var l=n.utc=In(n);return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{va=Hn;var r=new Hn;return r._=t,n(r,e)._}finally{va=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0;++a<r;)37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=ya[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1);return o.push(n.slice(l,a)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var u=null!=r.Z&&va!==Hn,o=new(u?Hn:va);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length;l>a;){if(r>=c)return-1;if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in ya?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0;var r=x.exec(t.slice(e));return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0;var r=N.exec(t.slice(e));return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths;t.utc=function(n){function e(n){try{va=Hn;var t=new va;return t._=n,r(t)}finally{va=Date}}var r=t(n);return e.parse=function(n){try{va=Hn;var t=r.parse(n);return t&&t._}finally{va=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct;var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m);g.forEach(function(n,t){M.set(n.toLowerCase(),t)});var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ga.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ga.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ga.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt};return t}function Zn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",u=i.length;return r+(e>u?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function $n(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){ma.lastIndex=0;var r=ma.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=xo(t)/60|0,i=xo(t)%60;return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){Ma.lastIndex=0;var r=Ma.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i;e.t=n-u+(t-i)}function ht(n,t){n&&wa.hasOwnProperty(n.type)&&wa[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e;for(t.lineStart();++i<u;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function gt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)pt(n[e],t,1);t.polygonEnd()}function vt(){function n(n,t){n*=Yo,t=t*Yo/2+Fo/4;var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a);ka.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u;Na.point=function(o,a){Na.point=n,r=(t=o)*Yo,i=Math.cos(a=(e=a)*Yo/2+Fo/4),u=Math.sin(a)},Na.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return xo(n[0]-t[0])<Uo&&xo(n[1]-t[1])<Uo}function St(n,t){n*=Yo;var e=Math.cos(t*=Yo);kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++Ea,Ca+=(n-Ca)/Ea,za+=(t-za)/Ea,La+=(e-La)/Ea}function Nt(){function n(n,i){n*=Yo;var u=Math.cos(i*=Yo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l);Aa+=c,qa+=c*(t+(t=o)),Ta+=c*(e+(e=a)),Ra+=c*(r+(r=l)),kt(t,e,r)}var t,e,r;ja.point=function(i,u){i*=Yo;var o=Math.cos(u*=Yo);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),ja.point=n,kt(t,e,r)}}function Et(){ja.point=St}function At(){function n(n,t){n*=Yo;var e=Math.cos(t*=Yo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p);Da+=g*c,Pa+=g*f,Ua+=g*s,Aa+=v,qa+=v*(r+(r=o)),Ta+=v*(i+(i=a)),Ra+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u;ja.point=function(o,a){t=o,e=a,ja.point=n,o*=Yo;var l=Math.cos(a*=Yo);r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},ja.lineEnd=function(){n(t,e),ja.lineEnd=Et,ja.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(wt(e,r)){i.lineStart();for(var a=0;t>a;++a)i.point((e=n[a])[0],e[1]);return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1);l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length;c>a;++a)o[a].e=l=!l;for(var f,s,h=u[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;f=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length;c>a;++a)i.point((s=f[a])[0],s[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){f=p.p.z;for(var a=f.length-1;a>=0;--a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,f=p.z,g=!g}while(!p.v);i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t);d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t]);var e=i(n,t);x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd();var n,t=x.clean(),e=M.buffer(),r=e.length;if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart();++o<r;)u.point((i=n[o])[0],i[1]);u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p);var n=Ot(y,g);p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1;return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Io-Uo:Io-n[1])-((t=t.x)[0]<0?t[1]-Io-Uo:Io-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Fo:-Fo,l=xo(u-e);xo(l-Fo)<Uo?(n.point(e,r=(r+o)/2>0?Io:-Io),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Fo&&(xo(e-i)<Uo&&(e-=i*Uo),xo(u-a)<Uo&&(u-=a*Uo),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e);return xo(o)>Uo?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i;if(null==n)i=e*Io,r.point(-Fo,i),r.point(0,i),r.point(Fo,i),r.point(Fo,0),r.point(Fo,-i),r.point(0,-i),r.point(-Fo,-i),r.point(-Fo,0),r.point(-Fo,i);else if(xo(n[0]-t[0])>Uo){var u=n[0]<t[0]?Fo:-Fo;i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0;ka.reset();for(var a=0,l=t.length;l>a;++a){var c=t[a],f=c.length;if(f)for(var s=c[0],h=s[0],p=s[1]/2+Fo/4,g=Math.sin(p),v=Math.cos(p),d=1;;){d===f&&(d=0),n=c[d];var y=n[0],m=n[1]/2+Fo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Fo,k=g*M;if(ka.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*Ho:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n));bt(N);var E=mt(i,N);bt(E);var A=(S^b>=0?-1:1)*tn(E[2]);(r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break;h=y,g=M,v=x,s=n}}return(-Uo>u||Uo>u&&-Uo>ka)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f;return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(0>s?Fo:-Fo),h):0;if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Uo,g[1]+=Uo,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(a&&e&&o^v){var y;d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c;if(!f)return!e&&n;var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h);Mt(g,v);var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1);if(!(0>M)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m);if(Mt(b,g),b=_t(b),!e)return b;var _,w=n[0],S=t[0],k=n[1],N=t[1];w>S&&(_=w,w=S,S=_);var E=S-w,A=xo(E-Fo)<Uo,C=A||Uo>E;if(!A&&k>N&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(xo(b[0]-w)<Uo?k:N):k<=b[1]&&b[1]<=N:E>Fo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m);return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Fo-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=xo(u)>Uo,l=ve(n,6*Yo);return Rt(t,e,l,o?[0,-n]:[-Fo,n-Fo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c;if(u=n-l,g||!(u>0)){if(u/=g,0>g){if(h>u)return;p>u&&(p=u)}else if(g>0){if(u>p)return;u>h&&(h=u)}if(u=e-l,g||!(0>u)){if(u/=g,0>g){if(u>p)return;u>h&&(h=u)}else if(g>0){if(h>u)return;p>u&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,0>v){if(h>u)return;p>u&&(p=u)}else if(v>0){if(u>p)return;u>h&&(h=u)}if(u=r-c,v||!(0>u)){if(u/=v,0>v){if(u>p)return;u>h&&(h=u)}else if(v>0){if(h>u)return;p>u&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),1>p&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return xo(r[0]-n)<Uo?i>0?0:3:xo(r[0]-e)<Uo?i>0?2:1:xo(r[1]-t)<Uo?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0;e>i;++i)for(var u,o=1,a=d[i],l=a.length,c=a[0];l>o;++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u;return 0!==t}function c(u,a,l,c){var f=0,s=0;if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t);while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return i>=n&&e>=i&&u>=t&&r>=u}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-Ha,Math.min(Ha,n)),t=Math.max(-Ha,Math.min(Ha,t));var e=f(n,t);if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t));else if(e&&w)a.point(n,t);else{var r={a:{x:b,y:_},b:{x:n,y:t}};A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v);var t=l([n,r]),e=k&&t,i=v.length;(e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}};return C}}function Vt(n){var t=0,e=Fo/3,r=ae(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Fo/180,e=n[1]*Fo/180):[t/Fo*180,e/Fo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ia+=i*n-r*t,r=n,i=t}var t,e,r,i;$a.point=function(u,o){$a.point=n,t=r=u,e=i=o},$a.lineEnd=function(){n(t,e)}}function Bt(n,t){Ya>n&&(Ya=n),n>Va&&(Va=n),Za>t&&(Za=t),t>Xa&&(Xa=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ca+=n,za+=t,++La}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u);qa+=o*(t+n)/2,Ta+=o*(e+r)/2,Ra+=o,Gt(t=n,e=r)}var t,e;Wa.point=function(r,i){Wa.point=n,Gt(t=r,e=i)}}function Qt(){Wa.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u);qa+=o*(r+n)/2,Ta+=o*(i+t)/2,Ra+=o,o=i*n-r*t,Da+=o*(r+n),Pa+=o*(i+t),Ua+=3*o,Gt(r=n,i=t)}var t,e,r,i;Wa.point=function(u,o){Wa.point=n,Gt(t=r=u,e=i=o)},Wa.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Ho)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b};return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r);i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}};return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M;if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=xo(xo(w)-1)<Uo||xo(r-h)<Uo?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L;(q*q/x>u||xo((m*z+M*L)/x-.5)>.3||o>a*p+l*g+c*v)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Yo),a=16;return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Zo,e*Zo])});return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Yo,n[1]*Yo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){a=Ct(o=se(y,M,x),u);var n=u(v,d);return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Fa,_=m,w=null,S=null;return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Fa):It((w=+n)*Yo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Yo,d=n[1]%360*Yo,r()):[v*Zo,d*Zo]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Yo,M=n[1]%360*Yo,x=n.length>2?n[2]%360*Yo:0,r()):[y*Zo,M*Zo,x*Zo]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Yo,e*Yo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Fo?n-Ho:-Fo>n?n+Ho:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Fo?t-Ho:-Fo>t?t+Ho:t,e]}}function pe(n){var t=he(n);return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i;return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o;return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,u,o,a){var l=o*t;null!=i?(i=de(e,i),u=de(e,u),(o>0?u>i:i>u)&&(i+=o*Ho)):(i=n+o*Ho,u=n-.5*l);for(var c,f=i;o>0?f>u:u>f;f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t);e[0]-=n,bt(e);var r=nn(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Uo)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Uo,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Yo),o=Math.cos(i),a=xo((n*=Yo)-t),l=Math.cos(a);Ja+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r;Ga.point=function(i,u){t=i*Yo,e=Math.sin(u*=Yo),r=Math.cos(u),Ga.point=n},Ga.lineEnd=function(){Ga.point=Ga.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i);return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?-Io+Uo>t&&(t=-Io+Uo):t>Io-Uo&&(t=Io-Uo);var e=o/Math.pow(i(t),u);return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Fo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u;return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Io]},e):Ne}function ke(n,t){function e(n,t){var e=u-t;return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n;return xo(i)<Uo?ce:(e.invert=function(n,t){var e=u-t;return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Fo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments);if(o===e){if(t=null==n){var a=Fo*r(),l=i();u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null);return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Fo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f);return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=cl.pop()||new Pe;return t.site=n,t}function je(n){Be(n),ol.remove(n),cl.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n];je(n);for(var l=u;l.circle&&xo(e-l.circle.x)<Uo&&xo(r-l.circle.cy)<Uo;)u=l.P,a.unshift(l),je(l),l=u;a.unshift(l),Be(l);for(var c=o;c.circle&&xo(e-c.circle.x)<Uo&&xo(r-c.circle.cy)<Uo;)o=c.N,a.push(c),je(c),c=o;a.push(c),Be(c);var f,s=a.length;for(f=1;s>f;++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i);l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=ol._;a;)if(r=Oe(a,o)-u,r>Uo)a=a.L;else{if(i=u-Ie(a,o),!(i>Uo)){r>-Uo?(t=a.P,e=a):i>-Uo?(t=a,e=a.N):t=e=a;break}if(!a.R){t=a;break}a=a.R}var l=Ue(n);if(ol.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),ol.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e);if(!e)return void(l.edge=Ke(t.site,l.site));Be(t),Be(e);var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s};nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t;if(!u)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var a=e.x,l=e.y,c=l-t;if(!c)return a;var f=a-r,s=1/u-1/c,h=f/c;return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N;if(e)return Oe(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=ul,d=v.length;d--;)if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0;l>o;)f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(xo(r-t)>Uo||xo(i-e)>Uo)&&(a.splice(o,0,new tr(Qe(u.site,f,xo(r-s)<Uo&&g-i>Uo?{x:s,y:xo(t-s)<Uo?e:g}:xo(i-g)<Uo&&h-r>Uo?{x:xo(e-g)<Uo?t:h,y:g}:xo(r-h)<Uo&&i-p>Uo?{x:h,y:xo(t-h)<Uo?e:p}:xo(i-p)<Uo&&r-s>Uo?{x:xo(e-p)<Uo?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,u=e.site;if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f);if(!(h>=-jo)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=fl.pop()||new Xe;y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y;for(var m=null,M=ll._;M;)if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P;break}M=M.L}else{if(!M.R){m=M;break}M=M.R}ll.insert(m,y),m||(al=y)}}}}function Be(n){var t=n.circle;t&&(t.P||(al=t.N),ll.remove(t),fl.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=il,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!Je(t,n)||!r(t)||xo(t.a.x-t.b.x)<Uo&&xo(t.a.y-t.b.y)<Uo)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b;if(e)return!0;var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2;if(v===p){if(o>d||d>=a)return;if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l};e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c};e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,-1>r||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l};e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c};e={x:(l-i)/r,y:l}}else if(v>p){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i};e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i};e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t);return il.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),ul[n.i].edges.push(new tr(i,n,t)),ul[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null);return r.a=t,r.b=e,il.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(;n.L;)n=n.L;return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop();for(il=[],ul=new Array(n.length),ol=new er,ll=new er;;)if(i=al,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(ul[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop();else{if(!i)break;Fe(i.arc)}t&&(We(t),Ze(t));var o={cells:ul,edges:il};return ol=ll=il=ul=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes;l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0;return function c(n,f,s,h,p){if(!(f>u||s>o||r>h||i>p)){if(g=n.point){var g,v=t-n.x,d=e-n.y,y=v*v+d*d;if(l>y){var m=Math.sqrt(l=y);r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=n.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4;k>S;++S)if(n=M[3&S])switch(3&S){case 0:c(n,f,s,x,b);break;case 1:c(n,x,s,h,b);break;case 2:c(n,f,b,x,p);break;case 3:c(n,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t);var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i;return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=hl.lastIndex=pl.lastIndex=0,o=-1,a=[],l=[];for(n+="",t+="";(e=hl.exec(n))&&(r=pl.exec(t));)(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=pl.lastIndex;return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0;t>r;++r)a[(e=l[r]).i]=e.x(n);return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length;--r>=0&&!(e=ao.interpolators[r](n,t)););return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length);for(e=0;a>e;++e)r.push(Mr(n[e],t[e]));for(;u>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;a>e;++e)i[e]=r[e](n);return i}}function br(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Io)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Ho*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Ho/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t);var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t);var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:-180>u&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t);var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i;return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Zo:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")");r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[];return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length;++i<u;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var u=i.length;e!==r;)i.splice(u,0,e),e=e.parent;return i}function Gr(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function Kr(n,t){if(n===t)return n;for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null;i===u;)o=i,i=e.pop(),u=r.pop();return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1;++l<a;)u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var c=t*e[n.point.index];n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function oi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1;++o<i;)e.push(u[o]);for(;null!=(n=r.pop());)t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length;u>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[];++e<=t;)u[e]=i*e+r;return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0);if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3;c>o;o++){zi(r,i,u=e[o]);var g=0,v=1,d=1;for(a=i._pack_next;a!==i;a=a._pack_next,v++)if(ki(a,u)){g=1;break}if(1==g)for(l=r._pack_prev;l!==a._pack_prev&&!ki(l,u);l=l._pack_prev,d++);g?(d>v||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0;for(o=0;c>o;o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y));n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length;++u<o;)Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y;if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u;o*=o,r*=r;var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a);e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children;return t.length?t[0]:n.t}function Ti(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length;--u>=0;)t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children;return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children;return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>u&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1]);return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i];return u>o&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Sl}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1;for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=a;)i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]));return function(t){var e=ao.bisect(n,t,1,a)-1;return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br;return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a;return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10);var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i;return.15>=u?i*=10:.35>=u?i*=5:.75>=u&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t);if(e){var i=ha.exec(e);if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(xo(r[0]),xo(r[1])));return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f";return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2]);return n in kl?Math.abs(e-tu(Math.max(xo(t[0]),xo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:El);return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t;if(isFinite(f-c)){if(e){for(;f>c;c++)for(var h=1;s>h;h++)o.push(u(c)*h);o.push(u(c))}else for(o.push(u(c));c++<f;)for(var h=s-1;h>0;h--)o.push(u(c)*h);for(c=0;o[c]<a;c++);for(f=o.length;o[f-1]>l;f--);o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Nl;arguments.length<2?e=Nl:"function"!=typeof e&&(e=ao.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/u(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t);return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new c;for(var u,o=-1,a=r.length;++o<a;)i.has(u=r[o])||i.set(u,n.push(u));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a);return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0);var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0;return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l);return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a);var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l));return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length;for(a=[];++e<r;)a[e-1]=ao.quantile(n,e/r);return o}function o(n){return isNaN(n=+n)?void 0:t[ao.bisect(a,n)]}var a;return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){return e>=e?t[ao.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(0>y?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v;return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r);++s<h;)i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[]);return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Tl.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n);var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1;if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1];for(var c=2;c<t.length;c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l];r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length;++a<l;)e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function zu(n){if(n.length<3)return xu(n);var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Pl,o),",",Ru(Pl,a)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a);return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n);for(var t,e=[],r=-1,i=n.length,u=[0],o=[0];++r<3;)t=n[r],u.push(t[0]),o.push(t[1]);for(e.push(Ru(Pl,u)+","+Ru(Pl,o)),--r;++r<i;)t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o);return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[];++r<4;)e=n[r%i],o.push(e[0]),a.push(e[1]);for(t=[Ru(Pl,o),",",Ru(Pl,a)],--r;++r<u;)e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a);return t.join("")}function Tu(n,t){var e=n.length-1;if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1;++c<=e;)r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l);return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(Rl,t),",",Ru(Rl,e),",",Ru(Dl,t),",",Ru(Dl,e),",",Ru(Pl,t),",",Ru(Pl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u);++t<e;)r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2;return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1;++a<l;)t=Pu(n[a],n[a+1]),xo(t)<Uo?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r));for(a=-1;++a<=l;)i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0]);return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length;++i<u;)t=n[i],e=t[0],r=t[1]-Io,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
return p}:En(r),w=i===u?function(){return g}:En(u);++m<M;)o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[]);return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Tl.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Io;return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Fo);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return ko(n,Yl),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace;return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay;return f.t=t+l,n>=t?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i];u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index));for(var o in g)if(r>+o){var c=g[o];c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length;a>0;)p[--a].call(n,o);return u>=1?(v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1):void 0}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r];v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Kl,i);return u==Kl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Kl[u-1]<Kl[u]/i?u-1:u]:[tc,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n);return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=io(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=io(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange();return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document;if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(so){co=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(ho){var po=this.Element.prototype,go=po.setAttribute,vo=po.setAttributeNS,yo=this.CSSStyleDeclaration.prototype,mo=yo.setProperty;po.setAttribute=function(n,t){go.call(this,n,t+"")},po.setAttributeNS=function(n,t,e){vo.call(this,n,t,e+"")},yo.setProperty=function(n,t,e){mo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length;if(1===arguments.length){for(;++i<u;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<u;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<u;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<u;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length;if(1===arguments.length){for(;++u<o;)if(null!=(r=n[u])&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=n[u])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++u<o;)if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r;break}for(;++u<o;)null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1;if(1===arguments.length)for(;++o<u;)i(e=+n[o])&&(r+=e);else for(;++o<u;)i(e=+t.call(n,n[o],o))&&(r+=e);return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o;if(1===arguments.length)for(;++a<o;)i(e=r(n[a]))?u+=e:--l;else for(;++a<o;)i(e=r(t.call(n,n[a],a)))?u+=e:--l;return l?u/l:void 0},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r;return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1;if(1===arguments.length)for(;++l<a;)i(u=r(n[l]))&&o.push(u);else for(;++l<a;)i(u=r(t.call(n,n[l],l)))&&o.push(u);return o.length?ao.quantile(o.sort(e),.5):void 0},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0;if(1===arguments.length)for(;++c<o;)i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a));else for(;++c<o;)i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a));return f>1?l/(f-1):void 0},ao.deviation=function(){var n=ao.variance.apply(this,arguments);return n?Math.sqrt(n):n};var Mo=u(e);ao.bisectLeft=Mo.left,ao.bisect=ao.bisectRight=Mo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,2>u&&(t=0));for(var r,i,u=e-t;u;)i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r;return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(0>r?0:r);r>e;)u[e]=[t=i,i=n[++e]];return u},ao.transpose=function(n){if(!(i=n.length))return[];for(var t=-1,e=ao.min(n,o),r=new Array(e);++t<e;)for(var i,u=-1,a=r[t]=new Array(i);++u<i;)a[u]=n[u][t];return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ao.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ao.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0;++u<i;)o+=n[u].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var xo=Math.abs;ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],u=a(xo(e)),o=-1;if(n*=u,t*=u,e*=u,0>e)for(;(r=n+e*++o)>t;)i.push(r/u);else for(;(r=n+e*++o)<t;)i.push(r/u);return i},ao.map=function(n,t){var e=new c;if(n instanceof c)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,u=n.length;if(1===arguments.length)for(;++i<u;)e.set(i,n[i]);else for(;++i<u;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var bo="__proto__",_o="\x00";l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:s(t),value:this._[t]});return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o;for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c;++p<g;)(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f]);return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=M(n,t,t[e]);return n};var wo=["webkit","ms","moz","Moz","o","O"];ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=w(n);return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ao.event=null,ao.requote=function(n){return n.replace(So,"\\$&")};var So=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,ko={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},No=function(n,t){return t.querySelector(n)},Eo=function(n,t){return t.querySelectorAll(n)},Ao=function(n,t){var e=n.matches||n[x(n,"matchesSelector")];return(Ao=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(No=function(n,t){return Sizzle(n,t)[0]||null},Eo=Sizzle,Ao=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)};var Co=ao.selection.prototype=[];Co.select=function(n){var t,e,r,i,u=[];n=A(n);for(var o=-1,a=this.length;++o<a;){u.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var l=-1,c=r.length;++l<c;)(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Co.selectAll=function(n){var t,e,r=[];n=C(n);for(var i=-1,u=this.length;++i<u;)for(var o=this[i],a=-1,l=o.length;++a<l;)(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e);return E(r)};var zo="http://www.w3.org/1999/xhtml",Lo={svg:"http://www.w3.org/2000/svg",xhtml:zo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ao.ns={prefix:Lo,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Lo.hasOwnProperty(e)?{space:Lo[e],local:n}:n}},Co.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]));return this}return this.each(z(n,t))},Co.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!q(n[i]).test(t))return!1;return!0}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},Co.style=function(n,e,r){var i=arguments.length;if(3>i){if("string"!=typeof n){2>i&&(e="");for(r in n)this.each(P(r,n[r],e));return this}if(2>i){var u=this.node();return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Co.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(U(t,n[t]));return this}return this.each(U(n,t))},Co.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Co.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Co.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Co.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Co.remove=function(){return this.each(F)},Co.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o);if(t){var d,y=new c,m=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d);for(r=-1;++r<s;)(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0);for(r=-1;++r<o;)r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1;++r<h;)i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u);for(;s>r;++r)g[r]=H(e[r]);for(;o>r;++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++u<o;)(i=r[u])&&(n[u]=i.__data__);return n}var a=Z([]),l=E([]),f=E([]);if("function"==typeof n)for(;++u<o;)e(r=this[u],n.call(r,r.parentNode.__data__,u));else for(;++u<o;)e(r=this[u],n);return l.enter=function(){return a},l.exit=function(){return f},l},Co.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Co.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode;for(var a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Co.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,u=r[i];--i>=0;)(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e);return this},Co.sort=function(n){n=I.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},Co.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Co.call=function(n){var t=co(arguments);return n.apply(t[0]=this,t),this},Co.empty=function(){return!this.node()},Co.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var u=e[r];if(u)return u}return null},Co.size=function(){var n=0;return Y(this,function(){++n}),n};var qo=[];ao.selection.enter=Z,ao.selection.enter.prototype=qo,qo.append=Co.append,qo.empty=Co.empty,qo.node=Co.node,qo.call=Co.call,qo.size=Co.size,qo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length;++a<l;){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var c=-1,f=i.length;++c<f;)(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},qo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Co.insert.call(this,n,t)},ao.select=function(t){var e;return"string"==typeof t?(e=[No(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t;return"string"==typeof n?(t=co(Eo(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Co.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each(X(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each(X(n,t,e))};var To=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"});fo&&To.forEach(function(n){"on"+n in fo&&To.remove(n)});var Ro,Do=0;ao.mouse=function(n){return J(n,k())};var Po=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length;u>i;++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v);r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v);i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend");return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t);return e.identifier=t.identifier,e}):[]};var Uo=1e-6,jo=Uo*Uo,Fo=Math.PI,Ho=2*Fo,Oo=Ho-Uo,Io=Fo/2,Yo=Fo/180,Zo=180/Fo,Vo=Math.SQRT2,Xo=2,$o=4;ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s;if(jo>h)r=Math.log(c/o)/Vo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Vo*n*r)]};else{var p=Math.sqrt(h),g=(c*c-o*o+$o*h)/(2*o*Xo*p),v=(c*c-o*o-$o*h)/(2*c*Xo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v);r=(y-d)/Vo,e=function(n){var t=n*r,e=rn(d),a=o/(Xo*p)*(e*un(Vo*t+d)-en(d));return[i+a*f,u+a*s,o*e/rn(Vo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on(Wo+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i);Il.call(i),l(o)}function h(){function n(){var n=ao.touches(g);return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target;ao.select(t).on(x,r).on(b,a),_.push(t);for(var e=ao.event.changedTouches,i=0,u=e.length;u>i;++i)d[e[i].identifier]=null;var l=n(),c=Date.now();if(1===l.length){if(500>c-M){var f=l[0];o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1];y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g);Il.call(g);for(var a=0,l=o.length;l>a;++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break;n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length;r>e;++e)delete d[t[e].identifier];for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g);t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments);m?clearTimeout(m):(Il.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Bo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2;o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Jo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend");return Wo||(Wo="onwheel"in fo?(Bo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Bo=function(){return ao.event.wheelDelta},"mousewheel"):(Bo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k;Hl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k]);return function(t){var r=o(t),a=e/r[2];this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Jo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")};var Bo,Wo,Jo=[0,1/0];ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln;var Go=ln.prototype=new an;Go.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Go.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Go.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn;var Ko=fn.prototype=new an;Ko.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Qo*(arguments.length?n:1)))},Ko.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Qo*(arguments.length?n:1)))},Ko.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn;var Qo=18,na=.95047,ta=1,ea=1.08883,ra=hn.prototype=new an;ra.brighter=function(n){return new hn(Math.min(100,this.l+Qo*(arguments.length?n:1)),this.a,this.b)},ra.darker=function(n){return new hn(Math.max(0,this.l-Qo*(arguments.length?n:1)),this.a,this.b)},ra.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn;var ia=mn.prototype=new an;ia.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ia.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ia.hsl=function(){return wn(this.r,this.g,this.b)},ia.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)};var ua=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});ua.forEach(function(n,t){ua.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null);var o=Cn(n,t,null==e?r:i(e),u);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o;if(i)return i=!1,u;var t=f;if(34===n.charCodeAt(t)){for(var e=t;e++<c;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}f=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;c>f;){var r=n.charCodeAt(f++),a=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a);else if(r!==l)continue;return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0;(r=e())!==o;){for(var h=[];r!==u&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new y,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("	","text/tab-separated-values");var oa,aa,la,ca,fa=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var sa=["y","z","a","f","p","n","\xb5","m","","k","M","G","T","P","E","Z","Y"].map(Un);ao.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),sa[8+e/3]};var ha=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,pa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ga=ao.time={},va=Date;Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){da.setUTCDate.apply(this._,arguments)},setDay:function(){da.setUTCDay.apply(this._,arguments)},setFullYear:function(){da.setUTCFullYear.apply(this._,arguments)},setHours:function(){da.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){da.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){da.setUTCMinutes.apply(this._,arguments)},setMonth:function(){da.setUTCMonth.apply(this._,arguments)},setSeconds:function(){da.setUTCSeconds.apply(this._,arguments)},setTime:function(){da.setTime.apply(this._,arguments)}};var da=Date.prototype;ga.year=On(function(n){return n=ga.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ga.years=ga.year.range,ga.years.utc=ga.year.utc.range,ga.day=On(function(n){var t=new va(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ga.days=ga.day.range,ga.days.utc=ga.day.utc.range,ga.dayOfYear=function(n){var t=ga.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=ga[n]=On(function(n){return(n=ga.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});ga[n+"s"]=e.range,ga[n+"s"].utc=e.utc.range,ga[n+"OfYear"]=function(n){var e=ga.year(n).getDay();return Math.floor((ga.dayOfYear(n)+(e+t)%7)/7)}}),ga.week=ga.sunday,ga.weeks=ga.sunday.range,ga.weeks.utc=ga.sunday.utc.range,ga.weekOfYear=ga.sundayOfYear;var ya={"-":"",_:" ",0:"0"},ma=/^\s*\d+/,Ma=/^%/;ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}};var xa=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ao.format=xa.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,ba),st(ba.s,this.s,this),this.s?this.t+=ba.t:this.s=ba.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var ba=new ft;ao.geo.stream=function(n,t){n&&_a.hasOwnProperty(n.type)?_a[n.type](n,t):ht(n,t)};var _a={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)ht(e[r].geometry,t)}},wa={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)ht(e[r],t)}};ao.geo.area=function(n){return Sa=0,ao.geo.stream(n,Na),Sa};var Sa,ka=new ft,Na={sphere:function(){Sa+=4*Fo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){ka.reset(),Na.lineStart=vt},polygonEnd:function(){var n=2*ka;Sa+=0>n?4*Fo+n:n,Na.lineStart=Na.lineEnd=Na.point=b}};ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),s>t&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Yo,e*Yo]);if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i);bt(o),o=_t(o);var l=t-g,c=l>0?1:-1,v=o[0]*Zo*c,d=xo(l)>180;if(d^(v>c*g&&c*t>v)){var m=o[1]*Zo;m>p&&(p=m)}else if(v=(v+360)%360-180,d^(v>c*g&&c*t>v)){var m=-o[1]*Zo;s>m&&(s=m)}else s>e&&(s=e),e>p&&(p=e);d?g>t?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(f>t&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e);y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g;m+=xo(r)>180?r+(r>0?360:-360):r}else v=n,d=e;Na.point(n,e),t(n,e)}function u(){Na.lineStart()}function o(){i(v,d),Na.lineEnd(),xo(m)>Uo&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Na.polygonStart()},polygonEnd:function(){Na.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,0>ka?(f=-(h=180),s=-(p=90)):m>Uo?p=90:-Uo>m&&(s=-90),x[0]=f,x[1]=h}};return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b);var t=M.length;if(t){M.sort(l);for(var e,r=1,i=M[0],u=[i];t>r;++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e);for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t];t>=r;i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,ja);var t=Da,e=Pa,r=Ua,i=t*t+e*e+r*r;return jo>i&&(t=qa,e=Ta,r=Ra,Uo>Aa&&(t=Ca,e=za,r=La),i=t*t+e*e+r*r,jo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,tn(r/Math.sqrt(i))*Zo]};var Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa,Ua,ja={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){ja.lineStart=At},polygonEnd:function(){ja.lineStart=Nt}},Fa=Rt(zt,jt,Ht,[-Fo,-Fo/2]),Ha=1e9;ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1];return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate();var c=u.scale(),f=+t[0],s=+t[1];return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Uo,s+.12*c+Uo],[f-.214*c-Uo,s+.234*c-Uo]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Uo,s+.166*c+Uo],[f-.115*c-Uo,s+.234*c-Uo]]).stream(l).point,n},n.scale(1070)};var Oa,Ia,Ya,Za,Va,Xa,$a={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ia=0,$a.lineStart=$t},polygonEnd:function(){$a.lineStart=$a.lineEnd=$a.point=b,Oa+=xo(Ia/2)}},Ba={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},Wa={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){Wa.lineStart=ne},polygonEnd:function(){Wa.point=Gt,Wa.lineStart=Kt,Wa.lineEnd=Qt}};ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5;return n.area=function(n){return Oa=0,ao.geo.stream(n,i($a)),Oa},n.centroid=function(n){return Ca=za=La=qa=Ta=Ra=Da=Pa=Ua=0,ao.geo.stream(n,i(Wa)),Ua?[Da/Ua,Pa/Ua]:Ra?[qa/Ra,Ta/Ra]:La?[Ca/La,za/La]:[NaN,NaN]},n.bounds=function(n){return Va=Xa=-(Ya=Za=1/0),ao.geo.stream(n,i(Ba)),[[Ya,Za],[Va,Xa]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t);for(var r in n)e[r]=n[r];return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t}return n=se(n[0]%360*Yo,n[1]*Yo,n.length>2?n[2]*Yo:0),t.invert=function(t){return t=n.invert(t[0]*Yo,t[1]*Yo),t[0]*=Zo,t[1]*=Zo,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Yo,-n[1]*Yo,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Yo,i*Yo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Yo,(i=+r)*Yo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Yo,i=n[1]*Yo,u=t[1]*Yo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u);return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return xo(n%d)>Uo}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return xo(n%y)>Uo}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Uo],[180,90-Uo]]).minorExtent([[-180,-80-Uo],[180,80+Uo]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe;return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Yo,n[1]*Yo,t[0]*Yo,t[1]*Yo)},ao.geo.length=function(n){return Ja=0,ao.geo.stream(n,Ga),Ja};var Ja,Ga={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ka=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ao.geo.azimuthalEqualArea=function(){return oe(Ka)}).raw=Ka;var Qa=we(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},m);(ao.geo.azimuthalEquidistant=function(){return oe(Qa)}).raw=Qa,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke;var nl=we(function(n){return 1/n},Math.atan);(ao.geo.gnomonic=function(){return oe(nl)}).raw=nl,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Io]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne;var tl=we(function(){return 1},Math.asin);(ao.geo.orthographic=function(){return oe(tl)}).raw=tl;var el=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ao.geo.stereographic=function(){return oe(el)}).raw=el,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Io]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=En(e),u=En(r),o=n.length,a=[],l=[];for(t=0;o>t;t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t]);for(a.sort(qe),t=0;o>t;t++)l.push([a[t][0],-a[t][1]]);var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[];for(t=c.length-1;t>=0;--t)p.push(n[a[c[t]][2]]);for(t=+s;t<f.length-h;++t)p.push(n[a[f[t]][2]]);return p}var e=Ce,r=ze;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return ko(n,rl),n};var rl=ao.geom.polygon.prototype=[];rl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},rl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e;return[u*n,o*n]},rl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1];++l<c;){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1;++e<r;)o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o;a&&n.push(n[0]),f=i}return n};var il,ul,ol,al,ll,cl=[],fl=[];Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,u=n.L,o=n.R;if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1];return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start();return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[];f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Uo)*Uo,y:Math.round(o(n,t)/Uo)*Uo,i:t}})}var r=Ce,i=ze,u=r,o=i,a=sl;return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l;++l<c;)i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?sl:n,t):a===sl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===sl?null:a&&a[1]},t)};var sl=[[-1e6,-1e6],[1e6,1e6]];ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y;if(null!=l)if(xo(l-e)+xo(f-r)<.01)c(n,t,e,r,i,u,o,a);else{var s=n.point;n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l);if(null!=t)v=t,d=e,y=r,m=i;else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0;g>p;++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y);else for(p=0;g>p;++p){var b=+M(f=n[p],p),_=+x(f,p);v>b&&(v=b),d>_&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d;w>S?m=d+w:y=v+S;var k=hr();if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(;++p<g;)u(k,n[p],s[p],h[p],v,d,y,m);--p}else n.forEach(k.add);return s=h=n=f=null,k}var o,a=Ce,l=ze;return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr;var hl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,pl=new RegExp(hl.source,"g");ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t;return("string"===e?ua.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr;var gl=function(){return m},vl=ao.map({linear:gl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),dl=ao.map({"in":m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}});ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=vl.get(e)||gl,r=dl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g");return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:yl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var yl={a:1,b:0,c:0,d:1,e:0,f:0};ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(Jr(n[e]));return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[];for(e=[],r=[],n=0,h=-1;++h<u;){for(c=0,p=-1;++p<u;)c+=i[h][p];v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(Ho-f*u)/n,c=0,h=-1;++h<u;){for(s=c,p=-1;++p<u;){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n;g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1;++h<u;)for(p=h-1;++p<u;){var w=g[h+"-"+p],S=g[p+"-"+h];(w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0;return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o;if(l>a*a/y){if(v>l){var c=t.charge/l;n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&v>l){var c=t.pointCharge/l;n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=ml,p=Ml,g=-30,v=xl,d=.1,y=.64,M=[],x=[];return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0;var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length;for(r=0;w>r;++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y);if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(;++r<_;)l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y;if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1;++r<_;)(l=M[r]).fixed||t.visit(n(l));for(r=-1;++r<_;)l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s);c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0;i>l;++l)e[l]=[];for(l=0;c>l;++l){var u=x[l];e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length;++l<f;)if(!isNaN(o=a[l][n]))return o;return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1];for(t=0;i>t;++t)(r=M[t]).index=t,r.weight=0;for(t=0;c>t;++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(u=[],"function"==typeof h)for(t=0;c>t;++t)u[t]=+h.call(this,x[t],t);else for(t=0;c>t;++t)u[t]=h;if(o=[],"function"==typeof p)for(t=0;c>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;c>t;++t)o[t]=p;if(a=[],"function"==typeof g)for(t=0;i>t;++t)a[t]=+g.call(this,M[t],t);else for(t=0;i>t;++t)a[t]=g;return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")};var ml=20,Ml=1,xl=1/0;ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[];for(i.depth=0;null!=(u=o.pop());)if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f;--l>=0;)o.push(f=c[l]),f.parent=u,f.depth=u.depth+1;r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children;return oi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1;for(r=t.value?r/t.value:0;++c<o;)n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,u=-1;++u<i;)r=Math.max(r,t(e[u]));return 1+r}function e(e,u){var o=r.call(this,e,u);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(0>s?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[];return null!=e&&d.sort(e===bl?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=bl,r=0,i=Ho,u=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n};var bl={};ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a;var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l);c=ao.permute(c,s),f=ao.permute(f,s);var h,p,g,v,d=r.call(n,f,l),y=c[0].length;for(g=0;y>g;++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1;h>p;++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1]);return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:_l.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:wl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var _l=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[];for(t=0;r>t;++t)e=o[t],l>a?(a+=u[e],c.push(e)):(l+=u[e],f.push(e));return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},"default":gi}),wl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>a&&(a=r),o.push(r)}for(e=0;u>e;++e)l[e]=(a-o[e])/2;return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[];for(p[0]=l=c=0,e=1;h>e;++e){for(t=0,i=0;f>t;++t)i+=n[t][e][1];for(t=0,u=0,a=s[e][0]-s[e-1][0];f>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/a;u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,c>l&&(c=l)}for(e=0;h>e;++e)p[e]-=c;return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[];for(e=0;u>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;u>e;++e)a[e]=0;return a},zero:vi});ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h;++u<p;)o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0;if(p>0)for(u=-1;++u<h;)a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]));return l}var t=!0,e=Number,r=bi,i=Mi;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2;oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s);if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u);else{var p=s,g=s,v=s;ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)});var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1);ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,u=t.children,o=0,a=u.length;a>o;++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){Di(n);var u=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m;o=Ti(o),i=qi(i),o&&i;)l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m;o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null;return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0;oi(l,function(n){var t=n.children;t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)});var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2;return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length;++i<u;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var u=e.children;if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy);for(n(h,c.dx*c.dy/e.value),f.area=0;(l=h.length)>0;)f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0);f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var u,o=s(t),a=r.slice(),l=[];for(n(a,o.dx*o.dy/t.value),l.area=0;u=a.pop();)l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length;++o<a;)(e=n[o].area)&&(u>e&&(u=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0;
if(t==e.dx){for((r||f>e.dy)&&(f=e.dy);++u<o;)i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0);i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx);++u<o;)i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0);i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0];return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth);return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f;var r;return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ao.scale={};var Sl={floor:m,ceil:m};ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)};var kl={s:1,g:1,p:1,r:1,e:1};ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])};var Nl=ao.format(".0e"),El={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20=function(){return ao.scale.ordinal().range(Cl)},ao.scale.category20b=function(){return ao.scale.ordinal().range(zl)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Ll)};var Al=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),Cl=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),zl=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Ll=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn);ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Io,s=a.apply(this,arguments)-Io,h=Math.abs(s-f),p=f>s?0:1;if(n>c&&(g=c,c=n,n=g),h>=Oo)return t(c,p)+(n?t(n,1-p):"")+"Z";var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[];if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===ql?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E);var C=Math.abs(s-f-2*E)<=Fo?0:1;if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2;m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0;if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N);var L=Math.abs(f-s+2*N)<=Fo?0:1;if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2;_=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0;if(h>Uo&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=c>n^p?0:1;var T=g,R=g;if(Fo>h){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1]);R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p);g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M);if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p);g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k);return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=ql,o=gu,a=vu,l=du;return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==ql?ql:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Io;return[Math.cos(t)*n,Math.sin(t)*n]},n};var ql="auto";ao.svg.line=function(){return Mu(m)};var Tl=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu});Tl.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Rl=[0,2/3,1/3,0],Dl=[0,1/3,2/3,0],Pl=[0,1/6,2/3,1/6];ao.svg.line.radial=function(){var n=Mu(Hu);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a);return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Io,f=c.call(n,i,r)-Io;return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Fo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu;return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o];return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu;return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection;return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Ul.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu;return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n};var Ul=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Fl)),e=t*Fl;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/jl),e=t*jl/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ao.svg.symbolTypes=Ul.keys();var jl=Math.sqrt(3),Fl=Math.tan(30*Yo);Co.transition=function(n){for(var t,e,r=Hl||++Zl,i=Ku(n),u=[],o=Ol||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length;++a<l;){u.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Co.interrupt=function(n){return this.each(null==n?Il:Bu(Ku(n)))};var Hl,Ol,Il=Bu(Ku()),Yl=[],Zl=0;Yl.call=Co.call,Yl.empty=Co.empty,Yl.node=Co.node,Yl.size=Co.size,ao.transition=function(n,t){return n&&n.transition?Hl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Yl,Yl.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[];n=A(n);for(var a=-1,l=this.length;++a<l;){o.push(t=[]);for(var c=this[a],f=-1,s=c.length;++f<s;)(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Yl.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[];n=C(n);for(var c=-1,f=this.length;++c<f;)for(var s=this[c],h=-1,p=s.length;++h<p;)if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[]);for(var g=-1,v=e.length;++g<v;)(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Yl.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=O(n));for(var u=0,o=this.length;o>u;u++){i.push(t=[]);for(var e=this[u],a=0,l=e.length;l>a;a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Yl.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Yl.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a);return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n);return Ju(this,"attr."+n,t,a.local?u:i)},Yl.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Yl.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n);return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length;if(3>o){if("string"!=typeof n){2>o&&(e="");for(r in n)this.style(r,n[r],e);return this}r=""}return Ju(this,"style."+n,e,u)},Yl.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n));return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Yl.text=function(n){return Ju(this,"text",n,Gu)},Yl.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Yl.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Yl.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Yl.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Yl.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ol,u=Hl;try{Hl=e,Y(this,function(t,i,u){Ol=t[r][e],n.call(t,t.__data__,i,u)})}finally{Ol=i,Hl=u}}else Y(this,function(i){var u=i[r][e];(u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)});return this},Yl.transition=function(){for(var n,t,e,r,i=this.id,u=++Zl,o=this.namespace,a=[],l=0,c=this.length;c>l;l++){a.push(n=[]);for(var t=this[l],f=0,s=t.length;s>f;f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Uo),d=ao.transition(g.exit()).style("opacity",Uo).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b));v.append("line"),v.append("text");var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",0>q?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",0>q?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2;f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f);v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Vl,i=6,u=6,o=3,a=[10],l=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Xl?t+"":Vl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Vl="bottom",Xl={top:1,right:1,bottom:1,left:1};ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var a=t.selectAll(".resize").data(v,m);a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $l[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null);var l,s=ao.transition(t),h=ao.transition(o);c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1;x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0];return C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),r>f?(i=r,r=f):i=f),v[0]!=r||v[1]!=i?(e?a=null:o=null,v[0]=r,v[1]=i,!0):void 0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v);if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1];else if(N){var T=+/w$/.test(N),R=+/^n/.test(N);x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice());k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Bl[0];return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t;this.__chart__=t,Hl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y);return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Bl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Bl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l;return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),e>r&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),i>u&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),e>r&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),i>u&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")};var $l={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Bl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Wl=ga.format=xa.timeFormat,Jl=Wl.utc,Gl=Jl("%Y-%m-%dT%H:%M:%S.%LZ");Wl.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Gl,eo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},eo.toString=Gl.toString,ga.second=On(function(n){return new va(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ga.seconds=ga.second.range,ga.seconds.utc=ga.second.utc.range,ga.minute=On(function(n){return new va(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ga.minutes=ga.minute.range,ga.minutes.utc=ga.minute.utc.range,ga.hour=On(function(n){var t=n.getTimezoneOffset()/60;return new va(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ga.hours=ga.hour.range,ga.hours.utc=ga.hour.utc.range,ga.month=On(function(n){return n=ga.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ga.months=ga.month.range,ga.months.utc=ga.month.utc.range;var Kl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Ql=[[ga.second,1],[ga.second,5],[ga.second,15],[ga.second,30],[ga.minute,1],[ga.minute,5],[ga.minute,15],[ga.minute,30],[ga.hour,1],[ga.hour,3],[ga.hour,6],[ga.hour,12],[ga.day,1],[ga.day,2],[ga.week,1],[ga.month,1],[ga.month,3],[ga.year,1]],nc=Wl.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),tc={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m};Ql.year=ga.year,ga.scale=function(){return ro(ao.scale.linear(),Ql,nc)};var ec=Ql.map(function(n){return[n[0].utc,n[1]]}),rc=Jl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]]);ec.year=ga.year.utc,ga.scale.utc=function(){return ro(ao.scale.linear(),ec,rc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)):"object"==typeof module&&module.exports?module.exports=ao:this.d3=ao}();
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // TODO: refactor & focus DataViewTransform into a service with well-defined dependencies.
                var DataViewTransform;
                (function (DataViewTransform) {
                    // TODO: refactor this, setGrouped, and groupValues to a test helper to stop using it in the product
                    function createValueColumns(values, valueIdentityFields, source) {
                        if (values === void 0) { values = []; }
                        var result = values;
                        setGrouped(result);
                        if (valueIdentityFields) {
                            result.identityFields = valueIdentityFields;
                        }
                        if (source) {
                            result.source = source;
                        }
                        return result;
                    }
                    DataViewTransform.createValueColumns = createValueColumns;
                    function setGrouped(values, groupedResult) {
                        values.grouped = groupedResult
                            ? function () { return groupedResult; }
                            : function () { return groupValues(values); };
                    }
                    DataViewTransform.setGrouped = setGrouped;
                    /** Group together the values with a common identity. */
                    function groupValues(values) {
                        var groups = [], currentGroup;
                        for (var i = 0, len = values.length; i < len; i++) {
                            var value = values[i];
                            if (!currentGroup || currentGroup.identity !== value.identity) {
                                currentGroup = {
                                    values: []
                                };
                                if (value.identity) {
                                    currentGroup.identity = value.identity;
                                    var source = value.source;
                                    // allow null, which will be formatted as (Blank).
                                    if (source.groupName !== undefined) {
                                        currentGroup.name = source.groupName;
                                    }
                                    else if (source.displayName) {
                                        currentGroup.name = source.displayName;
                                    }
                                }
                                groups.push(currentGroup);
                            }
                            currentGroup.values.push(value);
                        }
                        return groups;
                    }
                    DataViewTransform.groupValues = groupValues;
                })(DataViewTransform = dataview.DataViewTransform || (dataview.DataViewTransform = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataRoleHelper;
                (function (DataRoleHelper) {
                    function getMeasureIndexOfRole(grouped, roleName) {
                        if (!grouped || !grouped.length) {
                            return -1;
                        }
                        var firstGroup = grouped[0];
                        if (firstGroup.values && firstGroup.values.length > 0) {
                            for (var i = 0, len = firstGroup.values.length; i < len; ++i) {
                                var value = firstGroup.values[i];
                                if (value && value.source) {
                                    if (hasRole(value.source, roleName)) {
                                        return i;
                                    }
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getMeasureIndexOfRole = getMeasureIndexOfRole;
                    function getCategoryIndexOfRole(categories, roleName) {
                        if (categories && categories.length) {
                            for (var i = 0, ilen = categories.length; i < ilen; i++) {
                                if (hasRole(categories[i].source, roleName)) {
                                    return i;
                                }
                            }
                        }
                        return -1;
                    }
                    DataRoleHelper.getCategoryIndexOfRole = getCategoryIndexOfRole;
                    function hasRole(column, name) {
                        var roles = column.roles;
                        return roles && roles[name];
                    }
                    DataRoleHelper.hasRole = hasRole;
                    function hasRoleInDataView(dataView, name) {
                        return dataView != null
                            && dataView.metadata != null
                            && dataView.metadata.columns
                            && dataView.metadata.columns.some(function (c) { return c.roles && c.roles[name] !== undefined; }); // any is an alias of some
                    }
                    DataRoleHelper.hasRoleInDataView = hasRoleInDataView;
                    function hasRoleInValueColumn(valueColumn, name) {
                        return valueColumn
                            && valueColumn.source
                            && valueColumn.source.roles
                            && (valueColumn.source.roles[name] === true);
                    }
                    DataRoleHelper.hasRoleInValueColumn = hasRoleInValueColumn;
                })(DataRoleHelper = dataview.DataRoleHelper || (dataview.DataRoleHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObject;
                (function (DataViewObject) {
                    function getValue(object, propertyName, defaultValue) {
                        if (!object) {
                            return defaultValue;
                        }
                        var propertyValue = object[propertyName];
                        if (propertyValue === undefined) {
                            return defaultValue;
                        }
                        return propertyValue;
                    }
                    DataViewObject.getValue = getValue;
                    /** Gets the solid color from a fill property using only a propertyName */
                    function getFillColorByPropertyName(object, propertyName, defaultColor) {
                        var value = getValue(object, propertyName);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObject.getFillColorByPropertyName = getFillColorByPropertyName;
                })(DataViewObject = dataview.DataViewObject || (dataview.DataViewObject = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjects;
                (function (DataViewObjects) {
                    /** Gets the value of the given object/property pair. */
                    function getValue(objects, propertyId, defaultValue) {
                        if (!objects) {
                            return defaultValue;
                        }
                        return dataview.DataViewObject.getValue(objects[propertyId.objectName], propertyId.propertyName, defaultValue);
                    }
                    DataViewObjects.getValue = getValue;
                    /** Gets an object from objects. */
                    function getObject(objects, objectName, defaultValue) {
                        if (objects && objects[objectName]) {
                            return objects[objectName];
                        }
                        return defaultValue;
                    }
                    DataViewObjects.getObject = getObject;
                    /** Gets the solid color from a fill property. */
                    function getFillColor(objects, propertyId, defaultColor) {
                        var value = getValue(objects, propertyId);
                        if (!value || !value.solid) {
                            return defaultColor;
                        }
                        return value.solid.color;
                    }
                    DataViewObjects.getFillColor = getFillColor;
                    function getCommonValue(objects, propertyId, defaultValue) {
                        var value = getValue(objects, propertyId, defaultValue);
                        if (value && value.solid) {
                            return value.solid.color;
                        }
                        if (value === undefined
                            || value === null
                            || (typeof value === "object" && !value.solid)) {
                            return defaultValue;
                        }
                        return value;
                    }
                    DataViewObjects.getCommonValue = getCommonValue;
                })(DataViewObjects = dataview.DataViewObjects || (dataview.DataViewObjects = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                // powerbi.extensibility.utils.dataview
                var DataRoleHelper = powerbi.extensibility.utils.dataview.DataRoleHelper;
                var converterHelper;
                (function (converterHelper) {
                    function categoryIsAlsoSeriesRole(dataView, seriesRoleName, categoryRoleName) {
                        if (dataView.categories && dataView.categories.length > 0) {
                            // Need to pivot data if our category soure is a series role
                            var category = dataView.categories[0];
                            return category.source &&
                                DataRoleHelper.hasRole(category.source, seriesRoleName) &&
                                DataRoleHelper.hasRole(category.source, categoryRoleName);
                        }
                        return false;
                    }
                    converterHelper.categoryIsAlsoSeriesRole = categoryIsAlsoSeriesRole;
                    function getSeriesName(source) {
                        return (source.groupName !== undefined)
                            ? source.groupName
                            : source.queryName;
                    }
                    converterHelper.getSeriesName = getSeriesName;
                    function isImageUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.imageUrl === true;
                    }
                    converterHelper.isImageUrlColumn = isImageUrlColumn;
                    function isWebUrlColumn(column) {
                        var misc = getMiscellaneousTypeDescriptor(column);
                        return misc != null && misc.webUrl === true;
                    }
                    converterHelper.isWebUrlColumn = isWebUrlColumn;
                    function getMiscellaneousTypeDescriptor(column) {
                        return column
                            && column.type
                            && column.type.misc;
                    }
                    converterHelper.getMiscellaneousTypeDescriptor = getMiscellaneousTypeDescriptor;
                    function hasImageUrlColumn(dataView) {
                        if (!dataView || !dataView.metadata || !dataView.metadata.columns || !dataView.metadata.columns.length) {
                            return false;
                        }
                        return dataView.metadata.columns.some(function (column) { return isImageUrlColumn(column) === true; });
                    }
                    converterHelper.hasImageUrlColumn = hasImageUrlColumn;
                })(converterHelper = dataview.converterHelper || (dataview.converterHelper = {}));
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var dataview;
            (function (dataview) {
                var DataViewObjectsParser = (function () {
                    function DataViewObjectsParser() {
                    }
                    DataViewObjectsParser.getDefault = function () {
                        return new this();
                    };
                    DataViewObjectsParser.createPropertyIdentifier = function (objectName, propertyName) {
                        return {
                            objectName: objectName,
                            propertyName: propertyName
                        };
                    };
                    DataViewObjectsParser.parse = function (dataView) {
                        var dataViewObjectParser = this.getDefault(), properties;
                        if (!dataView || !dataView.metadata || !dataView.metadata.objects) {
                            return dataViewObjectParser;
                        }
                        properties = dataViewObjectParser.getProperties();
                        for (var objectName in properties) {
                            for (var propertyName in properties[objectName]) {
                                var defaultValue = dataViewObjectParser[objectName][propertyName];
                                dataViewObjectParser[objectName][propertyName] = dataview.DataViewObjects.getCommonValue(dataView.metadata.objects, properties[objectName][propertyName], defaultValue);
                            }
                        }
                        return dataViewObjectParser;
                    };
                    DataViewObjectsParser.isPropertyEnumerable = function (propertyName) {
                        return !DataViewObjectsParser.InnumerablePropertyPrefix.test(propertyName);
                    };
                    DataViewObjectsParser.enumerateObjectInstances = function (dataViewObjectParser, options) {
                        var dataViewProperties = dataViewObjectParser && dataViewObjectParser[options.objectName];
                        if (!dataViewProperties) {
                            return [];
                        }
                        var instance = {
                            objectName: options.objectName,
                            selector: null,
                            properties: {}
                        };
                        for (var key in dataViewProperties) {
                            if (dataViewProperties.hasOwnProperty(key)) {
                                instance.properties[key] = dataViewProperties[key];
                            }
                        }
                        return {
                            instances: [instance]
                        };
                    };
                    DataViewObjectsParser.prototype.getProperties = function () {
                        var _this = this;
                        var properties = {}, objectNames = Object.keys(this);
                        objectNames.forEach(function (objectName) {
                            if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                var propertyNames = Object.keys(_this[objectName]);
                                properties[objectName] = {};
                                propertyNames.forEach(function (propertyName) {
                                    if (DataViewObjectsParser.isPropertyEnumerable(objectName)) {
                                        properties[objectName][propertyName] =
                                            DataViewObjectsParser.createPropertyIdentifier(objectName, propertyName);
                                    }
                                });
                            }
                        });
                        return properties;
                    };
                    return DataViewObjectsParser;
                }());
                DataViewObjectsParser.InnumerablePropertyPrefix = /^_/;
                dataview.DataViewObjectsParser = DataViewObjectsParser;
            })(dataview = utils.dataview || (utils.dataview = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                /**
                 * Module Double contains a set of constants and precision based utility methods
                 * for dealing with doubles and their decimal garbage in the javascript.
                 */
                var Double;
                (function (Double) {
                    // Constants.
                    Double.MIN_VALUE = -Number.MAX_VALUE;
                    Double.MAX_VALUE = Number.MAX_VALUE;
                    Double.MIN_EXP = -308;
                    Double.MAX_EXP = 308;
                    Double.EPSILON = 1E-323;
                    Double.DEFAULT_PRECISION = 0.0001;
                    Double.DEFAULT_PRECISION_IN_DECIMAL_DIGITS = 12;
                    Double.LOG_E_10 = Math.log(10);
                    Double.POSITIVE_POWERS = [
                        1E0, 1E1, 1E2, 1E3, 1E4, 1E5, 1E6, 1E7, 1E8, 1E9, 1E10, 1E11, 1E12, 1E13, 1E14, 1E15, 1E16, 1E17, 1E18, 1E19, 1E20, 1E21, 1E22, 1E23, 1E24, 1E25, 1E26, 1E27, 1E28, 1E29, 1E30, 1E31, 1E32, 1E33, 1E34, 1E35, 1E36, 1E37, 1E38, 1E39, 1E40, 1E41, 1E42, 1E43, 1E44, 1E45, 1E46, 1E47, 1E48, 1E49, 1E50, 1E51, 1E52, 1E53, 1E54, 1E55, 1E56, 1E57, 1E58, 1E59, 1E60, 1E61, 1E62, 1E63, 1E64, 1E65, 1E66, 1E67, 1E68, 1E69, 1E70, 1E71, 1E72, 1E73, 1E74, 1E75, 1E76, 1E77, 1E78, 1E79, 1E80, 1E81, 1E82, 1E83, 1E84, 1E85, 1E86, 1E87, 1E88, 1E89, 1E90, 1E91, 1E92, 1E93, 1E94, 1E95, 1E96, 1E97, 1E98, 1E99,
                        1E100, 1E101, 1E102, 1E103, 1E104, 1E105, 1E106, 1E107, 1E108, 1E109, 1E110, 1E111, 1E112, 1E113, 1E114, 1E115, 1E116, 1E117, 1E118, 1E119, 1E120, 1E121, 1E122, 1E123, 1E124, 1E125, 1E126, 1E127, 1E128, 1E129, 1E130, 1E131, 1E132, 1E133, 1E134, 1E135, 1E136, 1E137, 1E138, 1E139, 1E140, 1E141, 1E142, 1E143, 1E144, 1E145, 1E146, 1E147, 1E148, 1E149, 1E150, 1E151, 1E152, 1E153, 1E154, 1E155, 1E156, 1E157, 1E158, 1E159, 1E160, 1E161, 1E162, 1E163, 1E164, 1E165, 1E166, 1E167, 1E168, 1E169, 1E170, 1E171, 1E172, 1E173, 1E174, 1E175, 1E176, 1E177, 1E178, 1E179, 1E180, 1E181, 1E182, 1E183, 1E184, 1E185, 1E186, 1E187, 1E188, 1E189, 1E190, 1E191, 1E192, 1E193, 1E194, 1E195, 1E196, 1E197, 1E198, 1E199,
                        1E200, 1E201, 1E202, 1E203, 1E204, 1E205, 1E206, 1E207, 1E208, 1E209, 1E210, 1E211, 1E212, 1E213, 1E214, 1E215, 1E216, 1E217, 1E218, 1E219, 1E220, 1E221, 1E222, 1E223, 1E224, 1E225, 1E226, 1E227, 1E228, 1E229, 1E230, 1E231, 1E232, 1E233, 1E234, 1E235, 1E236, 1E237, 1E238, 1E239, 1E240, 1E241, 1E242, 1E243, 1E244, 1E245, 1E246, 1E247, 1E248, 1E249, 1E250, 1E251, 1E252, 1E253, 1E254, 1E255, 1E256, 1E257, 1E258, 1E259, 1E260, 1E261, 1E262, 1E263, 1E264, 1E265, 1E266, 1E267, 1E268, 1E269, 1E270, 1E271, 1E272, 1E273, 1E274, 1E275, 1E276, 1E277, 1E278, 1E279, 1E280, 1E281, 1E282, 1E283, 1E284, 1E285, 1E286, 1E287, 1E288, 1E289, 1E290, 1E291, 1E292, 1E293, 1E294, 1E295, 1E296, 1E297, 1E298, 1E299,
                        1E300, 1E301, 1E302, 1E303, 1E304, 1E305, 1E306, 1E307, 1E308
                    ];
                    Double.NEGATIVE_POWERS = [
                        1E0, 1E-1, 1E-2, 1E-3, 1E-4, 1E-5, 1E-6, 1E-7, 1E-8, 1E-9, 1E-10, 1E-11, 1E-12, 1E-13, 1E-14, 1E-15, 1E-16, 1E-17, 1E-18, 1E-19, 1E-20, 1E-21, 1E-22, 1E-23, 1E-24, 1E-25, 1E-26, 1E-27, 1E-28, 1E-29, 1E-30, 1E-31, 1E-32, 1E-33, 1E-34, 1E-35, 1E-36, 1E-37, 1E-38, 1E-39, 1E-40, 1E-41, 1E-42, 1E-43, 1E-44, 1E-45, 1E-46, 1E-47, 1E-48, 1E-49, 1E-50, 1E-51, 1E-52, 1E-53, 1E-54, 1E-55, 1E-56, 1E-57, 1E-58, 1E-59, 1E-60, 1E-61, 1E-62, 1E-63, 1E-64, 1E-65, 1E-66, 1E-67, 1E-68, 1E-69, 1E-70, 1E-71, 1E-72, 1E-73, 1E-74, 1E-75, 1E-76, 1E-77, 1E-78, 1E-79, 1E-80, 1E-81, 1E-82, 1E-83, 1E-84, 1E-85, 1E-86, 1E-87, 1E-88, 1E-89, 1E-90, 1E-91, 1E-92, 1E-93, 1E-94, 1E-95, 1E-96, 1E-97, 1E-98, 1E-99,
                        1E-100, 1E-101, 1E-102, 1E-103, 1E-104, 1E-105, 1E-106, 1E-107, 1E-108, 1E-109, 1E-110, 1E-111, 1E-112, 1E-113, 1E-114, 1E-115, 1E-116, 1E-117, 1E-118, 1E-119, 1E-120, 1E-121, 1E-122, 1E-123, 1E-124, 1E-125, 1E-126, 1E-127, 1E-128, 1E-129, 1E-130, 1E-131, 1E-132, 1E-133, 1E-134, 1E-135, 1E-136, 1E-137, 1E-138, 1E-139, 1E-140, 1E-141, 1E-142, 1E-143, 1E-144, 1E-145, 1E-146, 1E-147, 1E-148, 1E-149, 1E-150, 1E-151, 1E-152, 1E-153, 1E-154, 1E-155, 1E-156, 1E-157, 1E-158, 1E-159, 1E-160, 1E-161, 1E-162, 1E-163, 1E-164, 1E-165, 1E-166, 1E-167, 1E-168, 1E-169, 1E-170, 1E-171, 1E-172, 1E-173, 1E-174, 1E-175, 1E-176, 1E-177, 1E-178, 1E-179, 1E-180, 1E-181, 1E-182, 1E-183, 1E-184, 1E-185, 1E-186, 1E-187, 1E-188, 1E-189, 1E-190, 1E-191, 1E-192, 1E-193, 1E-194, 1E-195, 1E-196, 1E-197, 1E-198, 1E-199,
                        1E-200, 1E-201, 1E-202, 1E-203, 1E-204, 1E-205, 1E-206, 1E-207, 1E-208, 1E-209, 1E-210, 1E-211, 1E-212, 1E-213, 1E-214, 1E-215, 1E-216, 1E-217, 1E-218, 1E-219, 1E-220, 1E-221, 1E-222, 1E-223, 1E-224, 1E-225, 1E-226, 1E-227, 1E-228, 1E-229, 1E-230, 1E-231, 1E-232, 1E-233, 1E-234, 1E-235, 1E-236, 1E-237, 1E-238, 1E-239, 1E-240, 1E-241, 1E-242, 1E-243, 1E-244, 1E-245, 1E-246, 1E-247, 1E-248, 1E-249, 1E-250, 1E-251, 1E-252, 1E-253, 1E-254, 1E-255, 1E-256, 1E-257, 1E-258, 1E-259, 1E-260, 1E-261, 1E-262, 1E-263, 1E-264, 1E-265, 1E-266, 1E-267, 1E-268, 1E-269, 1E-270, 1E-271, 1E-272, 1E-273, 1E-274, 1E-275, 1E-276, 1E-277, 1E-278, 1E-279, 1E-280, 1E-281, 1E-282, 1E-283, 1E-284, 1E-285, 1E-286, 1E-287, 1E-288, 1E-289, 1E-290, 1E-291, 1E-292, 1E-293, 1E-294, 1E-295, 1E-296, 1E-297, 1E-298, 1E-299,
                        1E-300, 1E-301, 1E-302, 1E-303, 1E-304, 1E-305, 1E-306, 1E-307, 1E-308, 1E-309, 1E-310, 1E-311, 1E-312, 1E-313, 1E-314, 1E-315, 1E-316, 1E-317, 1E-318, 1E-319, 1E-320, 1E-321, 1E-322, 1E-323, 1E-324
                    ];
                    /**
                     * Returns powers of 10.
                     * Unlike the Math.pow this function produces no decimal garbage.
                     * @param exp Exponent.
                     */
                    function pow10(exp) {
                        // Positive & zero
                        if (exp >= 0) {
                            if (exp < Double.POSITIVE_POWERS.length) {
                                return Double.POSITIVE_POWERS[exp];
                            }
                            else {
                                return Infinity;
                            }
                        }
                        // Negative
                        exp = -exp;
                        if (exp > 0 && exp < Double.NEGATIVE_POWERS.length) {
                            return Double.NEGATIVE_POWERS[exp];
                        }
                        else {
                            return 0;
                        }
                    }
                    Double.pow10 = pow10;
                    /**
                     * Returns the 10 base logarithm of the number.
                     * Unlike Math.log function this produces integer results with no decimal garbage.
                     * @param val Positive value or zero.
                     */
                    function log10(val) {
                        // Fast Log10() algorithm
                        if (val > 1 && val < 1E16) {
                            if (val < 1E8) {
                                if (val < 1E4) {
                                    if (val < 1E2) {
                                        if (val < 1E1) {
                                            return 0;
                                        }
                                        else {
                                            return 1;
                                        }
                                    }
                                    else {
                                        if (val < 1E3) {
                                            return 2;
                                        }
                                        else {
                                            return 3;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E6) {
                                        if (val < 1E5) {
                                            return 4;
                                        }
                                        else {
                                            return 5;
                                        }
                                    }
                                    else {
                                        if (val < 1E7) {
                                            return 6;
                                        }
                                        else {
                                            return 7;
                                        }
                                    }
                                }
                            }
                            else {
                                if (val < 1E12) {
                                    if (val < 1E10) {
                                        if (val < 1E9) {
                                            return 8;
                                        }
                                        else {
                                            return 9;
                                        }
                                    }
                                    else {
                                        if (val < 1E11) {
                                            return 10;
                                        }
                                        else {
                                            return 11;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E14) {
                                        if (val < 1E13) {
                                            return 12;
                                        }
                                        else {
                                            return 13;
                                        }
                                    }
                                    else {
                                        if (val < 1E15) {
                                            return 14;
                                        }
                                        else {
                                            return 15;
                                        }
                                    }
                                }
                            }
                        }
                        if (val > 1E-16 && val < 1) {
                            if (val < 1E-8) {
                                if (val < 1E-12) {
                                    if (val < 1E-14) {
                                        if (val < 1E-15) {
                                            return -16;
                                        }
                                        else {
                                            return -15;
                                        }
                                    }
                                    else {
                                        if (val < 1E-13) {
                                            return -14;
                                        }
                                        else {
                                            return -13;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E-10) {
                                        if (val < 1E-11) {
                                            return -12;
                                        }
                                        else {
                                            return -11;
                                        }
                                    }
                                    else {
                                        if (val < 1E-9) {
                                            return -10;
                                        }
                                        else {
                                            return -9;
                                        }
                                    }
                                }
                            }
                            else {
                                if (val < 1E-4) {
                                    if (val < 1E-6) {
                                        if (val < 1E-7) {
                                            return -8;
                                        }
                                        else {
                                            return -7;
                                        }
                                    }
                                    else {
                                        if (val < 1E-5) {
                                            return -6;
                                        }
                                        else {
                                            return -5;
                                        }
                                    }
                                }
                                else {
                                    if (val < 1E-2) {
                                        if (val < 1E-3) {
                                            return -4;
                                        }
                                        else {
                                            return -3;
                                        }
                                    }
                                    else {
                                        if (val < 1E-1) {
                                            return -2;
                                        }
                                        else {
                                            return -1;
                                        }
                                    }
                                }
                            }
                        }
                        // JS Math provides only natural log function so we need to calc the 10 base logarithm:
                        // logb(x) = logk(x)/logk(b);
                        var log10 = Math.log(val) / Double.LOG_E_10;
                        return Double.floorWithPrecision(log10);
                    }
                    Double.log10 = log10;
                    /**
                     * Returns a power of 10 representing precision of the number based on the number of meaningful decimal digits.
                     * For example the precision of 56,263.3767 with the 6 meaningful decimal digit is 0.1.
                     * @param x Value.
                     * @param decimalDigits How many decimal digits are meaningfull.
                     */
                    function getPrecision(x, decimalDigits) {
                        if (decimalDigits === undefined) {
                            decimalDigits = Double.DEFAULT_PRECISION_IN_DECIMAL_DIGITS;
                        }
                        if (!x || !isFinite(x)) {
                            return undefined;
                        }
                        var exp = Double.log10(Math.abs(x));
                        if (exp < Double.MIN_EXP) {
                            return 0;
                        }
                        var precisionExp = Math.max(exp - decimalDigits, -Double.NEGATIVE_POWERS.length + 1);
                        return Double.pow10(precisionExp);
                    }
                    Double.getPrecision = getPrecision;
                    /**
                     * Checks if a delta between 2 numbers is less than provided precision.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function equalWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x === y || Math.abs(x - y) < precision;
                    }
                    Double.equalWithPrecision = equalWithPrecision;
                    /**
                     * Checks if a first value is less than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function lessWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x < y && Math.abs(x - y) > precision;
                    }
                    Double.lessWithPrecision = lessWithPrecision;
                    /**
                     * Checks if a first value is less or equal than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function lessOrEqualWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x < y || Math.abs(x - y) < precision;
                    }
                    Double.lessOrEqualWithPrecision = lessOrEqualWithPrecision;
                    /**
                     * Checks if a first value is greater than another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function greaterWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x > y && Math.abs(x - y) > precision;
                    }
                    Double.greaterWithPrecision = greaterWithPrecision;
                    /**
                     * Checks if a first value is greater or equal to another taking
                     * into account the loose precision based equality.
                     * @param x One value.
                     * @param y Another value.
                     * @param precision Precision value.
                     */
                    function greaterOrEqualWithPrecision(x, y, precision) {
                        precision = detectPrecision(precision, x, y);
                        return x > y || Math.abs(x - y) < precision;
                    }
                    Double.greaterOrEqualWithPrecision = greaterOrEqualWithPrecision;
                    /**
                     * Floors the number unless it's withing the precision distance from the higher int.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function floorWithPrecision(x, precision) {
                        precision = precision != null ? precision : Double.DEFAULT_PRECISION;
                        var roundX = Math.round(x);
                        if (Math.abs(x - roundX) < precision) {
                            return roundX;
                        }
                        else {
                            return Math.floor(x);
                        }
                    }
                    Double.floorWithPrecision = floorWithPrecision;
                    /**
                     * Ceils the number unless it's withing the precision distance from the lower int.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function ceilWithPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        var roundX = Math.round(x);
                        if (Math.abs(x - roundX) < precision) {
                            return roundX;
                        }
                        else {
                            return Math.ceil(x);
                        }
                    }
                    Double.ceilWithPrecision = ceilWithPrecision;
                    /**
                     * Floors the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 234,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function floorToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        return Math.floor(x / precision) * precision;
                    }
                    Double.floorToPrecision = floorToPrecision;
                    /**
                     * Ceils the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 235,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function ceilToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        return Math.ceil(x / precision) * precision;
                    }
                    Double.ceilToPrecision = ceilToPrecision;
                    /**
                     * Rounds the number to the provided precision.
                     * For example 234,578 floored to 1,000 precision is 235,000.
                     * @param x One value.
                     * @param precision Precision value.
                     */
                    function roundToPrecision(x, precision) {
                        precision = detectPrecision(precision, Double.DEFAULT_PRECISION);
                        if (precision === 0 || x === 0) {
                            return x;
                        }
                        // Precision must be a Power of 10
                        var result = Math.round(x / precision) * precision;
                        var decimalDigits = Math.round(Double.log10(Math.abs(x)) - Double.log10(precision)) + 1;
                        if (decimalDigits > 0 && decimalDigits < 16) {
                            result = parseFloat(result.toPrecision(decimalDigits));
                        }
                        return result;
                    }
                    Double.roundToPrecision = roundToPrecision;
                    /**
                     * Returns the value making sure that it's restricted to the provided range.
                     * @param x One value.
                     * @param min Range min boundary.
                     * @param max Range max boundary.
                     */
                    function ensureInRange(x, min, max) {
                        if (x === undefined || x === null) {
                            return x;
                        }
                        if (x < min) {
                            return min;
                        }
                        if (x > max) {
                            return max;
                        }
                        return x;
                    }
                    Double.ensureInRange = ensureInRange;
                    /**
                     * Rounds the value - this method is actually faster than Math.round - used in the graphics utils.
                     * @param x Value to round.
                     */
                    function round(x) {
                        return (0.5 + x) << 0;
                    }
                    Double.round = round;
                    /**
                     * Projects the value from the source range into the target range.
                     * @param value Value to project.
                     * @param fromMin Minimum of the source range.
                     * @param toMin Minimum of the target range.
                     * @param toMax Maximum of the target range.
                     */
                    function project(value, fromMin, fromSize, toMin, toSize) {
                        if (fromSize === 0 || toSize === 0) {
                            if (fromMin <= value && value <= fromMin + fromSize) {
                                return toMin;
                            }
                            else {
                                return NaN;
                            }
                        }
                        var relativeX = (value - fromMin) / fromSize;
                        var projectedX = toMin + relativeX * toSize;
                        return projectedX;
                    }
                    Double.project = project;
                    /**
                     * Removes decimal noise.
                     * @param value Value to be processed.
                     */
                    function removeDecimalNoise(value) {
                        return roundToPrecision(value, getPrecision(value));
                    }
                    Double.removeDecimalNoise = removeDecimalNoise;
                    /**
                     * Checks whether the number is integer.
                     * @param value Value to be checked.
                     */
                    function isInteger(value) {
                        return value !== null && value % 1 === 0;
                    }
                    Double.isInteger = isInteger;
                    /**
                     * Dividing by increment will give us count of increments
                     * Round out the rough edges into even integer
                     * Multiply back by increment to get rounded value
                     * e.g. Rounder.toIncrement(0.647291, 0.05) => 0.65
                     * @param value - value to round to nearest increment
                     * @param increment - smallest increment to round toward
                     */
                    function toIncrement(value, increment) {
                        return Math.round(value / increment) * increment;
                    }
                    Double.toIncrement = toIncrement;
                    /**
                     * Overrides the given precision with defaults if necessary. Exported only for tests
                     *
                     * precision defined returns precision
                     * x defined with y undefined returns twelve digits of precision based on x
                     * x defined but zero with y defined; returns twelve digits of precision based on y
                     * x and y defined retursn twelve digits of precision based on the minimum of the two
                     * if no applicable precision is found based on those (such as x and y being zero), the default precision is used
                     */
                    function detectPrecision(precision, x, y) {
                        if (precision !== undefined) {
                            return precision;
                        }
                        var calculatedPrecision;
                        if (!y) {
                            calculatedPrecision = Double.getPrecision(x);
                        }
                        else if (!x) {
                            calculatedPrecision = Double.getPrecision(y);
                        }
                        else {
                            calculatedPrecision = Double.getPrecision(Math.min(Math.abs(x), Math.abs(y)));
                        }
                        return calculatedPrecision || Double.DEFAULT_PRECISION;
                    }
                    Double.detectPrecision = detectPrecision;
                })(Double = type.Double || (type.Double = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Prototype;
                (function (Prototype) {
                    /**
                     * Returns a new object with the provided obj as its prototype.
                     */
                    function inherit(obj, extension) {
                        function wrapCtor() { }
                        wrapCtor.prototype = obj;
                        var inherited = new wrapCtor();
                        if (extension)
                            extension(inherited);
                        return inherited;
                    }
                    Prototype.inherit = inherit;
                    /**
                     * Returns a new object with the provided obj as its prototype
                     * if, and only if, the prototype has not been previously set
                     */
                    function inheritSingle(obj) {
                        var proto = Object.getPrototypeOf(obj);
                        if (proto === Object.prototype || proto === Array.prototype)
                            obj = inherit(obj);
                        return obj;
                    }
                    Prototype.inheritSingle = inheritSingle;
                    /**
                     * Uses the provided callback function to selectively replace contents in the provided array.
                     * @return A new array with those values overriden
                     * or undefined if no overrides are necessary.
                     */
                    function overrideArray(prototype, override) {
                        if (!prototype)
                            return;
                        var overwritten;
                        for (var i = 0, len = prototype.length; i < len; i++) {
                            var value = override(prototype[i]);
                            if (value) {
                                if (!overwritten)
                                    overwritten = inherit(prototype);
                                overwritten[i] = value;
                            }
                        }
                        return overwritten;
                    }
                    Prototype.overrideArray = overrideArray;
                })(Prototype = type.Prototype || (type.Prototype = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var ArrayExtensions;
                (function (ArrayExtensions) {
                    /**
                     * Returns items that exist in target and other.
                     */
                    function intersect(target, other) {
                        var result = [];
                        for (var i = target.length - 1; i >= 0; --i) {
                            if (other.indexOf(target[i]) !== -1) {
                                result.push(target[i]);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.intersect = intersect;
                    /**
                     * Return elements exists in target but not exists in other.
                     */
                    function diff(target, other) {
                        var result = [];
                        for (var i = target.length - 1; i >= 0; --i) {
                            var value = target[i];
                            if (other.indexOf(value) === -1) {
                                result.push(value);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.diff = diff;
                    /**
                     * Return an array with only the distinct items in the source.
                     */
                    function distinct(source) {
                        var result = [];
                        for (var i = 0, len = source.length; i < len; i++) {
                            var value = source[i];
                            if (result.indexOf(value) === -1) {
                                result.push(value);
                            }
                        }
                        return result;
                    }
                    ArrayExtensions.distinct = distinct;
                    /**
                     * Pushes content of source onto target,
                     * for parts of course that do not already exist in target.
                     */
                    function union(target, source) {
                        for (var i = 0, len = source.length; i < len; ++i) {
                            unionSingle(target, source[i]);
                        }
                    }
                    ArrayExtensions.union = union;
                    /**
                     * Pushes value onto target, if value does not already exist in target.
                     */
                    function unionSingle(target, value) {
                        if (target.indexOf(value) < 0) {
                            target.push(value);
                        }
                    }
                    ArrayExtensions.unionSingle = unionSingle;
                    /**
                     * Returns an array with a range of items from source,
                     * including the startIndex & endIndex.
                     */
                    function range(source, startIndex, endIndex) {
                        var result = [];
                        for (var i = startIndex; i <= endIndex; ++i) {
                            result.push(source[i]);
                        }
                        return result;
                    }
                    ArrayExtensions.range = range;
                    /**
                     * Returns an array that includes items from source, up to the specified count.
                     */
                    function take(source, count) {
                        var result = [];
                        for (var i = 0; i < count; ++i) {
                            result.push(source[i]);
                        }
                        return result;
                    }
                    ArrayExtensions.take = take;
                    function copy(source) {
                        return take(source, source.length);
                    }
                    ArrayExtensions.copy = copy;
                    /**
                      * Returns a value indicating whether the arrays have the same values in the same sequence.
                      */
                    function sequenceEqual(left, right, comparison) {
                        // Normalize falsy to null
                        if (!left) {
                            left = null;
                        }
                        if (!right) {
                            right = null;
                        }
                        // T can be same as U, and it is possible for left and right to be the same array object...
                        if (left === right) {
                            return true;
                        }
                        if (!!left !== !!right) {
                            return false;
                        }
                        var len = left.length;
                        if (len !== right.length) {
                            return false;
                        }
                        var i = 0;
                        while (i < len && comparison(left[i], right[i])) {
                            ++i;
                        }
                        return i === len;
                    }
                    ArrayExtensions.sequenceEqual = sequenceEqual;
                    /**
                     * Returns null if the specified array is empty.
                     * Otherwise returns the specified array.
                     */
                    function emptyToNull(array) {
                        if (array && array.length === 0) {
                            return null;
                        }
                        return array;
                    }
                    ArrayExtensions.emptyToNull = emptyToNull;
                    function indexOf(array, predicate) {
                        for (var i = 0, len = array.length; i < len; ++i) {
                            if (predicate(array[i])) {
                                return i;
                            }
                        }
                        return -1;
                    }
                    ArrayExtensions.indexOf = indexOf;
                    /**
                     * Returns a copy of the array rotated by the specified offset.
                     */
                    function rotate(array, offset) {
                        if (offset === 0)
                            return array.slice();
                        var rotated = array.slice(offset);
                        Array.prototype.push.apply(rotated, array.slice(0, offset));
                        return rotated;
                    }
                    ArrayExtensions.rotate = rotate;
                    function createWithId() {
                        return extendWithId([]);
                    }
                    ArrayExtensions.createWithId = createWithId;
                    function extendWithId(array) {
                        var extended = array;
                        extended.withId = withId;
                        return extended;
                    }
                    ArrayExtensions.extendWithId = extendWithId;
                    /**
                     * Finds and returns the first item with a matching ID.
                     */
                    function findWithId(array, id) {
                        for (var i = 0, len = array.length; i < len; i++) {
                            var item = array[i];
                            if (item.id === id)
                                return item;
                        }
                    }
                    ArrayExtensions.findWithId = findWithId;
                    function withId(id) {
                        return ArrayExtensions.findWithId(this, id);
                    }
                    function createWithName() {
                        return extendWithName([]);
                    }
                    ArrayExtensions.createWithName = createWithName;
                    function extendWithName(array) {
                        var extended = array;
                        extended.withName = withName;
                        return extended;
                    }
                    ArrayExtensions.extendWithName = extendWithName;
                    function findItemWithName(array, name) {
                        var index = indexWithName(array, name);
                        if (index >= 0)
                            return array[index];
                    }
                    ArrayExtensions.findItemWithName = findItemWithName;
                    function indexWithName(array, name) {
                        for (var i = 0, len = array.length; i < len; i++) {
                            var item = array[i];
                            if (item.name === name)
                                return i;
                        }
                        return -1;
                    }
                    ArrayExtensions.indexWithName = indexWithName;
                    /**
                     * Inserts a number in sorted order into a list of numbers already in sorted order.
                     * @returns True if the item was added, false if it already existed.
                     */
                    function insertSorted(list, value) {
                        var len = list.length;
                        // NOTE: iterate backwards because incoming values tend to be sorted already.
                        for (var i = len - 1; i >= 0; i--) {
                            var diff_1 = list[i] - value;
                            if (diff_1 === 0)
                                return false;
                            if (diff_1 > 0)
                                continue;
                            // diff < 0
                            list.splice(i + 1, 0, value);
                            return true;
                        }
                        list.unshift(value);
                        return true;
                    }
                    ArrayExtensions.insertSorted = insertSorted;
                    /**
                     * Removes the first occurrence of a value from a list if it exists.
                     * @returns True if the value was removed, false if it did not exist in the list.
                     */
                    function removeFirst(list, value) {
                        var index = list.indexOf(value);
                        if (index < 0)
                            return false;
                        list.splice(index, 1);
                        return true;
                    }
                    ArrayExtensions.removeFirst = removeFirst;
                    /**
                     * Finds and returns the first item with a matching name.
                     */
                    function withName(name) {
                        var array = this;
                        return findItemWithName(array, name);
                    }
                    /**
                     * Deletes all items from the array.
                     */
                    function clear(array) {
                        if (!array)
                            return;
                        while (array.length > 0)
                            array.pop();
                    }
                    ArrayExtensions.clear = clear;
                    function isUndefinedOrEmpty(array) {
                        if (!array || array.length === 0) {
                            return true;
                        }
                        return false;
                    }
                    ArrayExtensions.isUndefinedOrEmpty = isUndefinedOrEmpty;
                    function swap(array, firstIndex, secondIndex) {
                        var temp = array[firstIndex];
                        array[firstIndex] = array[secondIndex];
                        array[secondIndex] = temp;
                    }
                    ArrayExtensions.swap = swap;
                    function isInArray(array, lookupItem, compareCallback) {
                        return array.some(function (item) { return compareCallback(item, lookupItem); });
                    }
                    ArrayExtensions.isInArray = isInArray;
                    /** Checks if the given object is an Array, and looking all the way up the prototype chain. */
                    function isArrayOrInheritedArray(obj) {
                        var nextPrototype = obj;
                        while (nextPrototype != null) {
                            if (Array.isArray(nextPrototype))
                                return true;
                            nextPrototype = Object.getPrototypeOf(nextPrototype);
                        }
                        return false;
                    }
                    ArrayExtensions.isArrayOrInheritedArray = isArrayOrInheritedArray;
                    /**
                     * Returns true if the specified values array is sorted in an order as determined by the specified compareFunction.
                     */
                    function isSorted(values, compareFunction) {
                        var ilen = values.length;
                        if (ilen >= 2) {
                            for (var i = 1; i < ilen; i++) {
                                if (compareFunction(values[i - 1], values[i]) > 0) {
                                    return false;
                                }
                            }
                        }
                        return true;
                    }
                    ArrayExtensions.isSorted = isSorted;
                    /**
                     * Returns true if the specified number values array is sorted in ascending order
                     * (or descending order if the specified descendingOrder is truthy).
                     */
                    function isSortedNumeric(values, descendingOrder) {
                        var compareFunction = descendingOrder ?
                            function (a, b) { return b - a; } :
                            function (a, b) { return a - b; };
                        return isSorted(values, compareFunction);
                    }
                    ArrayExtensions.isSortedNumeric = isSortedNumeric;
                    /**
                     * Ensures that the given T || T[] is in array form, either returning the array or
                     * converting single items into an array of length one.
                     */
                    function ensureArray(value) {
                        if (Array.isArray(value)) {
                            return value;
                        }
                        return [value];
                    }
                    ArrayExtensions.ensureArray = ensureArray;
                })(ArrayExtensions = type.ArrayExtensions || (type.ArrayExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var Double = powerbi.extensibility.utils.type.Double;
                /**
                 * Extensions for Enumerations.
                 */
                var EnumExtensions;
                (function (EnumExtensions) {
                    /**
                     * Gets a value indicating whether the value has the bit flags set.
                     */
                    function hasFlag(value, flag) {
                        return (value & flag) === flag;
                    }
                    EnumExtensions.hasFlag = hasFlag;
                    /**
                     * Sets a value of a flag without modifying any other flags.
                     */
                    function setFlag(value, flag) {
                        return value |= flag;
                    }
                    EnumExtensions.setFlag = setFlag;
                    /**
                     * Resets a value of a flag without modifying any other flags.
                     */
                    function resetFlag(value, flag) {
                        return value &= ~flag;
                    }
                    EnumExtensions.resetFlag = resetFlag;
                    /**
                     * According to the TypeScript Handbook, this is safe to do.
                     */
                    function toString(enumType, value) {
                        return enumType[value];
                    }
                    EnumExtensions.toString = toString;
                    /**
                     * Returns the number of 1's in the specified value that is a set of binary bit flags.
                     */
                    function getBitCount(value) {
                        if (!Double.isInteger(value))
                            return 0;
                        var bitCount = 0;
                        var shiftingValue = value;
                        while (shiftingValue !== 0) {
                            if ((shiftingValue & 1) === 1) {
                                bitCount++;
                            }
                            shiftingValue = shiftingValue >>> 1;
                        }
                        return bitCount;
                    }
                    EnumExtensions.getBitCount = getBitCount;
                })(EnumExtensions = type.EnumExtensions || (type.EnumExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumericSequenceRange = (function () {
                    function NumericSequenceRange() {
                    }
                    NumericSequenceRange.prototype._ensureIncludeZero = function () {
                        if (this.includeZero) {
                            // fixed min and max has higher priority than includeZero
                            if (this.min > 0 && !this.hasFixedMin) {
                                this.min = 0;
                            }
                            if (this.max < 0 && !this.hasFixedMax) {
                                this.max = 0;
                            }
                        }
                    };
                    NumericSequenceRange.prototype._ensureNotEmpty = function () {
                        if (this.min === this.max) {
                            if (!this.min) {
                                this.min = 0;
                                this.max = NumericSequenceRange.DEFAULT_MAX;
                                this.hasFixedMin = true;
                                this.hasFixedMax = true;
                            }
                            else {
                                // We are dealing with a single data value (includeZero is not set)
                                // In order to fix the range we need to extend it in both directions by half of the interval.
                                // Interval is calculated based on the number:
                                // 1. Integers below 10,000 are extended by 0.5: so the [2006-2006] empty range is extended to [2005.5-2006.5] range and the ForsedSingleStop=2006
                                // 2. Other numbers are extended by half of their power: [700,001-700,001] => [650,001-750,001] and the ForsedSingleStop=null as we want the intervals to be calculated to cover the range.
                                var value = this.min;
                                var exp = Double.log10(Math.abs(value));
                                var step = void 0;
                                if (exp >= 0 && exp < 4) {
                                    step = 0.5;
                                    this.forcedSingleStop = value;
                                }
                                else {
                                    step = Double.pow10(exp) / 2;
                                    this.forcedSingleStop = null;
                                }
                                this.min = value - step;
                                this.max = value + step;
                            }
                        }
                    };
                    NumericSequenceRange.prototype._ensureDirection = function () {
                        if (this.min > this.max) {
                            var temp = this.min;
                            this.min = this.max;
                            this.max = temp;
                        }
                    };
                    NumericSequenceRange.prototype.getSize = function () {
                        return this.max - this.min;
                    };
                    NumericSequenceRange.prototype.shrinkByStep = function (range, step) {
                        var oldCount = this.min / step;
                        var newCount = range.min / step;
                        var deltaCount = Math.floor(newCount - oldCount);
                        this.min += deltaCount * step;
                        oldCount = this.max / step;
                        newCount = range.max / step;
                        deltaCount = Math.ceil(newCount - oldCount);
                        this.max += deltaCount * step;
                    };
                    NumericSequenceRange.calculate = function (dataMin, dataMax, fixedMin, fixedMax, includeZero) {
                        var result = new NumericSequenceRange();
                        result.includeZero = includeZero ? true : false;
                        result.hasDataRange = ValueUtil.hasValue(dataMin) && ValueUtil.hasValue(dataMax);
                        result.hasFixedMin = ValueUtil.hasValue(fixedMin);
                        result.hasFixedMax = ValueUtil.hasValue(fixedMax);
                        dataMin = Double.ensureInRange(dataMin, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
                        dataMax = Double.ensureInRange(dataMax, NumericSequenceRange.MIN_SUPPORTED_DOUBLE, NumericSequenceRange.MAX_SUPPORTED_DOUBLE);
                        // Calculate the range using the min, max, dataRange
                        if (result.hasFixedMin && result.hasFixedMax) {
                            result.min = fixedMin;
                            result.max = fixedMax;
                        }
                        else if (result.hasFixedMin) {
                            result.min = fixedMin;
                            result.max = dataMax > fixedMin ? dataMax : fixedMin;
                        }
                        else if (result.hasFixedMax) {
                            result.min = dataMin < fixedMax ? dataMin : fixedMax;
                            result.max = fixedMax;
                        }
                        else if (result.hasDataRange) {
                            result.min = dataMin;
                            result.max = dataMax;
                        }
                        else {
                            result.min = 0;
                            result.max = 0;
                        }
                        result._ensureIncludeZero();
                        result._ensureNotEmpty();
                        result._ensureDirection();
                        if (result.min === 0) {
                            result.hasFixedMin = true; // If the range starts from zero we should prevent extending the intervals into the negative range
                        }
                        else if (result.max === 0) {
                            result.hasFixedMax = true; // If the range ends at zero we should prevent extending the intervals into the positive range
                        }
                        return result;
                    };
                    NumericSequenceRange.calculateDataRange = function (dataMin, dataMax, includeZero) {
                        if (!ValueUtil.hasValue(dataMin) || !ValueUtil.hasValue(dataMax)) {
                            return NumericSequenceRange.calculateFixedRange(0, NumericSequenceRange.DEFAULT_MAX);
                        }
                        else {
                            return NumericSequenceRange.calculate(dataMin, dataMax, null, null, includeZero);
                        }
                    };
                    NumericSequenceRange.calculateFixedRange = function (fixedMin, fixedMax, includeZero) {
                        var result = new NumericSequenceRange();
                        result.hasDataRange = false;
                        result.includeZero = includeZero;
                        result.min = fixedMin;
                        result.max = fixedMax;
                        result._ensureIncludeZero();
                        result._ensureNotEmpty();
                        result._ensureDirection();
                        result.hasFixedMin = true;
                        result.hasFixedMax = true;
                        return result;
                    };
                    return NumericSequenceRange;
                }());
                NumericSequenceRange.DEFAULT_MAX = 10;
                NumericSequenceRange.MIN_SUPPORTED_DOUBLE = -1E307;
                NumericSequenceRange.MAX_SUPPORTED_DOUBLE = 1E307;
                type.NumericSequenceRange = NumericSequenceRange;
                /** Note: Exported for testability */
                var ValueUtil;
                (function (ValueUtil) {
                    function hasValue(value) {
                        return value !== undefined && value !== null;
                    }
                    ValueUtil.hasValue = hasValue;
                })(ValueUtil = type.ValueUtil || (type.ValueUtil = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumericSequenceRange = powerbi.extensibility.utils.type.NumericSequenceRange;
                var NumericSequence = (function () {
                    function NumericSequence() {
                    }
                    NumericSequence.calculate = function (range, expectedCount, maxAllowedMargin, minPower, useZeroRefPoint, steps) {
                        var result = new NumericSequence();
                        if (expectedCount === undefined)
                            expectedCount = 10;
                        else
                            expectedCount = Double.ensureInRange(expectedCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
                        if (minPower === undefined)
                            minPower = Double.MIN_EXP;
                        if (useZeroRefPoint === undefined)
                            useZeroRefPoint = false;
                        if (maxAllowedMargin === undefined)
                            maxAllowedMargin = 1;
                        if (steps === undefined)
                            steps = [1, 2, 5];
                        // Handle single stop case
                        if (range.forcedSingleStop) {
                            result.interval = range.getSize();
                            result.intervalOffset = result.interval - (range.forcedSingleStop - range.min);
                            result.min = range.min;
                            result.max = range.max;
                            result.sequence = [range.forcedSingleStop];
                            return result;
                        }
                        var interval = 0;
                        var min = 0;
                        var max = 9;
                        var canExtendMin = maxAllowedMargin > 0 && !range.hasFixedMin;
                        var canExtendMax = maxAllowedMargin > 0 && !range.hasFixedMax;
                        var size = range.getSize();
                        var exp = Double.log10(size);
                        // Account for Exp of steps
                        var stepExp = Double.log10(steps[0]);
                        exp = exp - stepExp;
                        // Account for MaxCount
                        var expectedCountExp = Double.log10(expectedCount);
                        exp = exp - expectedCountExp;
                        // Account for MinPower
                        exp = Math.max(exp, minPower - stepExp + 1);
                        var count = undefined;
                        // Create array of "good looking" numbers
                        if (interval !== 0) {
                            // If explicit interval is defined - use it instead of the steps array.
                            var power = Double.pow10(exp);
                            var roundMin = Double.floorToPrecision(range.min, power);
                            var roundMax = Double.ceilToPrecision(range.max, power);
                            var roundRange = NumericSequenceRange.calculateFixedRange(roundMin, roundMax);
                            roundRange.shrinkByStep(range, interval);
                            min = roundRange.min;
                            max = roundRange.max;
                            count = Math.floor(roundRange.getSize() / interval);
                        }
                        else {
                            // No interval defined -> find optimal interval
                            var dexp = void 0;
                            for (dexp = 0; dexp < 3; dexp++) {
                                var e = exp + dexp;
                                var power = Double.pow10(e);
                                var roundMin = Double.floorToPrecision(range.min, power);
                                var roundMax = Double.ceilToPrecision(range.max, power);
                                // Go throught the steps array looking for the smallest step that produces the right interval count.
                                var stepsCount = steps.length;
                                var stepPower = Double.pow10(e - 1);
                                for (var i = 0; i < stepsCount; i++) {
                                    var step = steps[i] * stepPower;
                                    var roundRange = NumericSequenceRange.calculateFixedRange(roundMin, roundMax, useZeroRefPoint);
                                    roundRange.shrinkByStep(range, step);
                                    // If the range is based on Data we might need to extend it to provide nice data margins.
                                    if (canExtendMin && range.min === roundRange.min && maxAllowedMargin >= 1)
                                        roundRange.min -= step;
                                    if (canExtendMax && range.max === roundRange.max && maxAllowedMargin >= 1)
                                        roundRange.max += step;
                                    // Count the intervals
                                    count = Double.ceilWithPrecision(roundRange.getSize() / step, Double.DEFAULT_PRECISION);
                                    if (count <= expectedCount || (dexp === 2 && i === stepsCount - 1) || (expectedCount === 1 && count === 2 && (step > range.getSize() || (range.min < 0 && range.max > 0 && step * 2 >= range.getSize())))) {
                                        interval = step;
                                        min = roundRange.min;
                                        max = roundRange.max;
                                        break;
                                    }
                                }
                                // Increase the scale power until the interval is found
                                if (interval !== 0)
                                    break;
                            }
                        }
                        // Avoid extreme count cases (>1000 ticks)
                        if (count > expectedCount * 32 || count > NumericSequence.MAX_COUNT) {
                            count = Math.min(expectedCount * 32, NumericSequence.MAX_COUNT);
                            interval = (max - min) / count;
                        }
                        result.min = min;
                        result.max = max;
                        result.interval = interval;
                        result.intervalOffset = min - range.min;
                        result.maxAllowedMargin = maxAllowedMargin;
                        result.canExtendMin = canExtendMin;
                        result.canExtendMax = canExtendMax;
                        // Fill in the Sequence
                        var precision = Double.getPrecision(interval, 0);
                        result.precision = precision;
                        var sequence = [];
                        var x = Double.roundToPrecision(min, precision);
                        sequence.push(x);
                        for (var i = 0; i < count; i++) {
                            x = Double.roundToPrecision(x + interval, precision);
                            sequence.push(x);
                        }
                        result.sequence = sequence;
                        result.trimMinMax(range.min, range.max);
                        return result;
                    };
                    /**
                     * Calculates the sequence of int numbers which are mapped to the multiples of the units grid.
                     * @min - The minimum of the range.
                     * @max - The maximum of the range.
                     * @maxCount - The max count of intervals.
                     * @steps - array of intervals.
                     */
                    NumericSequence.calculateUnits = function (min, max, maxCount, steps) {
                        // Initialization actions
                        maxCount = Double.ensureInRange(maxCount, NumericSequence.MIN_COUNT, NumericSequence.MAX_COUNT);
                        if (min === max) {
                            max = min + 1;
                        }
                        var stepCount = 0;
                        var step = 0;
                        // Calculate step
                        for (var i = 0; i < steps.length; i++) {
                            step = steps[i];
                            var maxStepCount = Double.ceilWithPrecision(max / step);
                            var minStepCount = Double.floorWithPrecision(min / step);
                            stepCount = maxStepCount - minStepCount;
                            if (stepCount <= maxCount) {
                                break;
                            }
                        }
                        // Calculate the offset
                        var offset = -min;
                        offset = offset % step;
                        // Create sequence
                        var result = new NumericSequence();
                        result.sequence = [];
                        for (var x = min + offset;; x += step) {
                            result.sequence.push(x);
                            if (x >= max)
                                break;
                        }
                        result.interval = step;
                        result.intervalOffset = offset;
                        result.min = result.sequence[0];
                        result.max = result.sequence[result.sequence.length - 1];
                        return result;
                    };
                    NumericSequence.prototype.trimMinMax = function (min, max) {
                        var minMargin = (min - this.min) / this.interval;
                        var maxMargin = (this.max - max) / this.interval;
                        var marginPrecision = 0.001;
                        if (!this.canExtendMin || (minMargin > this.maxAllowedMargin && minMargin > marginPrecision)) {
                            this.min = min;
                        }
                        if (!this.canExtendMax || (maxMargin > this.maxAllowedMargin && maxMargin > marginPrecision)) {
                            this.max = max;
                        }
                    };
                    return NumericSequence;
                }());
                NumericSequence.MIN_COUNT = 1;
                NumericSequence.MAX_COUNT = 1000;
                type.NumericSequence = NumericSequence;
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                var PixelConverter;
                (function (PixelConverter) {
                    var PxPtRatio = 4 / 3;
                    var PixelString = "px";
                    /**
                     * Appends 'px' to the end of number value for use as pixel string in styles
                     */
                    function toString(px) {
                        return px + PixelString;
                    }
                    PixelConverter.toString = toString;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a string for font-size property
                     * e.g. fromPoint(8) => '24px'
                     */
                    function fromPoint(pt) {
                        return toString(fromPointToPixel(pt));
                    }
                    PixelConverter.fromPoint = fromPoint;
                    /**
                     * Converts point value (pt) to pixels
                     * Returns a number for font-size property
                     * e.g. fromPoint(8) => 24px
                     */
                    function fromPointToPixel(pt) {
                        return (PxPtRatio * pt);
                    }
                    PixelConverter.fromPointToPixel = fromPointToPixel;
                    /**
                     * Converts pixel value (px) to pt
                     * e.g. toPoint(24) => 8
                     */
                    function toPoint(px) {
                        return px / PxPtRatio;
                    }
                    PixelConverter.toPoint = toPoint;
                })(PixelConverter = type.PixelConverter || (type.PixelConverter = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var RegExpExtensions;
                (function (RegExpExtensions) {
                    /**
                     * Runs exec on regex starting from 0 index
                     * This is the expected behavior but RegExp actually remember
                     * the last index they stopped at (found match at) and will
                     * return unexpected results when run in sequence.
                     * @param regex - regular expression object
                     * @param value - string to search wiht regex
                     * @param start - index within value to start regex
                     */
                    function run(regex, value, start) {
                        regex.lastIndex = start || 0;
                        return regex.exec(value);
                    }
                    RegExpExtensions.run = run;
                })(RegExpExtensions = type.RegExpExtensions || (type.RegExpExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                /**
                 * Extensions to String class.
                 */
                var StringExtensions;
                (function (StringExtensions) {
                    /**
                     * Checks if a string ends with a sub-string.
                     */
                    function endsWith(str, suffix) {
                        return str.indexOf(suffix, str.length - suffix.length) !== -1;
                    }
                    StringExtensions.endsWith = endsWith;
                })(StringExtensions = type.StringExtensions || (type.StringExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var LogicExtensions;
                (function (LogicExtensions) {
                    function XOR(a, b) {
                        return (a || b) && !(a && b);
                    }
                    LogicExtensions.XOR = XOR;
                })(LogicExtensions = type.LogicExtensions || (type.LogicExtensions = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                var JsonComparer;
                (function (JsonComparer) {
                    /**
                     * Performs JSON-style comparison of two objects.
                     */
                    function equals(x, y) {
                        if (x === y)
                            return true;
                        return JSON.stringify(x) === JSON.stringify(y);
                    }
                    JsonComparer.equals = equals;
                })(JsonComparer = type.JsonComparer || (type.JsonComparer = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // NOTE: this file includes standalone utilities that should have no dependencies on external libraries, including jQuery.
                /**
                 * Values are in terms of 'pt'
                 * Convert to pixels using PixelConverter.fromPoint
                 */
                var TextSizeDefaults;
                (function (TextSizeDefaults) {
                    /**
                     * Stored in terms of 'pt'
                     * Convert to pixels using PixelConverter.fromPoint
                     */
                    TextSizeDefaults.TextSizeMin = 8;
                    /**
                     * Stored in terms of 'pt'
                     * Convert to pixels using PixelConverter.fromPoint
                     */
                    TextSizeDefaults.TextSizeMax = 40;
                    var TextSizeRange = TextSizeDefaults.TextSizeMax - TextSizeDefaults.TextSizeMin;
                    /**
                     * Returns the percentage of this value relative to the TextSizeMax
                     * @param textSize - should be given in terms of 'pt'
                     */
                    function getScale(textSize) {
                        return (textSize - TextSizeDefaults.TextSizeMin) / TextSizeRange;
                    }
                    TextSizeDefaults.getScale = getScale;
                })(TextSizeDefaults = type.TextSizeDefaults || (type.TextSizeDefaults = {}));
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var type;
            (function (type) {
                // powerbi.extensibility.utils.type
                var EnumExtensions = powerbi.extensibility.utils.type.EnumExtensions;
                /** Describes a data value type, including a primitive type and extended type if any (derived from data category). */
                var ValueType = (function () {
                    /** Do not call the ValueType constructor directly. Use the ValueType.fromXXX methods. */
                    function ValueType(underlyingType, category, enumType, variantTypes) {
                        this.underlyingType = underlyingType;
                        this.category = category;
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Temporal)) {
                            this.temporalType = new TemporalType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Geography)) {
                            this.geographyType = new GeographyType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Miscellaneous)) {
                            this.miscType = new MiscellaneousType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Formatting)) {
                            this.formattingType = new FormattingType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Enumeration)) {
                            this.enumType = enumType;
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Scripting)) {
                            this.scriptingType = new ScriptType(underlyingType);
                        }
                        if (EnumExtensions.hasFlag(underlyingType, ExtendedType.Variant)) {
                            this.variationTypes = variantTypes;
                        }
                    }
                    /** Creates or retrieves a ValueType object based on the specified ValueTypeDescriptor. */
                    ValueType.fromDescriptor = function (descriptor) {
                        descriptor = descriptor || {};
                        // Simplified primitive types
                        if (descriptor.text)
                            return ValueType.fromExtendedType(ExtendedType.Text);
                        if (descriptor.integer)
                            return ValueType.fromExtendedType(ExtendedType.Integer);
                        if (descriptor.numeric)
                            return ValueType.fromExtendedType(ExtendedType.Double);
                        if (descriptor.bool)
                            return ValueType.fromExtendedType(ExtendedType.Boolean);
                        if (descriptor.dateTime)
                            return ValueType.fromExtendedType(ExtendedType.DateTime);
                        if (descriptor.duration)
                            return ValueType.fromExtendedType(ExtendedType.Duration);
                        if (descriptor.binary)
                            return ValueType.fromExtendedType(ExtendedType.Binary);
                        if (descriptor.none)
                            return ValueType.fromExtendedType(ExtendedType.None);
                        // Extended types
                        if (descriptor.scripting) {
                            if (descriptor.scripting.source)
                                return ValueType.fromExtendedType(ExtendedType.ScriptSource);
                        }
                        if (descriptor.enumeration)
                            return ValueType.fromEnum(descriptor.enumeration);
                        if (descriptor.temporal) {
                            if (descriptor.temporal.year)
                                return ValueType.fromExtendedType(ExtendedType.Years_Integer);
                            if (descriptor.temporal.quarter)
                                return ValueType.fromExtendedType(ExtendedType.Quarters_Integer);
                            if (descriptor.temporal.month)
                                return ValueType.fromExtendedType(ExtendedType.Months_Integer);
                            if (descriptor.temporal.day)
                                return ValueType.fromExtendedType(ExtendedType.DayOfMonth_Integer);
                            if (descriptor.temporal.paddedDateTableDate)
                                return ValueType.fromExtendedType(ExtendedType.PaddedDateTableDates);
                        }
                        if (descriptor.geography) {
                            if (descriptor.geography.address)
                                return ValueType.fromExtendedType(ExtendedType.Address);
                            if (descriptor.geography.city)
                                return ValueType.fromExtendedType(ExtendedType.City);
                            if (descriptor.geography.continent)
                                return ValueType.fromExtendedType(ExtendedType.Continent);
                            if (descriptor.geography.country)
                                return ValueType.fromExtendedType(ExtendedType.Country);
                            if (descriptor.geography.county)
                                return ValueType.fromExtendedType(ExtendedType.County);
                            if (descriptor.geography.region)
                                return ValueType.fromExtendedType(ExtendedType.Region);
                            if (descriptor.geography.postalCode)
                                return ValueType.fromExtendedType(ExtendedType.PostalCode_Text);
                            if (descriptor.geography.stateOrProvince)
                                return ValueType.fromExtendedType(ExtendedType.StateOrProvince);
                            if (descriptor.geography.place)
                                return ValueType.fromExtendedType(ExtendedType.Place);
                            if (descriptor.geography.latitude)
                                return ValueType.fromExtendedType(ExtendedType.Latitude_Double);
                            if (descriptor.geography.longitude)
                                return ValueType.fromExtendedType(ExtendedType.Longitude_Double);
                        }
                        if (descriptor.misc) {
                            if (descriptor.misc.image)
                                return ValueType.fromExtendedType(ExtendedType.Image);
                            if (descriptor.misc.imageUrl)
                                return ValueType.fromExtendedType(ExtendedType.ImageUrl);
                            if (descriptor.misc.webUrl)
                                return ValueType.fromExtendedType(ExtendedType.WebUrl);
                            if (descriptor.misc.barcode)
                                return ValueType.fromExtendedType(ExtendedType.Barcode_Text);
                        }
                        if (descriptor.formatting) {
                            if (descriptor.formatting.color)
                                return ValueType.fromExtendedType(ExtendedType.Color);
                            if (descriptor.formatting.formatString)
                                return ValueType.fromExtendedType(ExtendedType.FormatString);
                            if (descriptor.formatting.alignment)
                                return ValueType.fromExtendedType(ExtendedType.Alignment);
                            if (descriptor.formatting.labelDisplayUnits)
                                return ValueType.fromExtendedType(ExtendedType.LabelDisplayUnits);
                            if (descriptor.formatting.fontSize)
                                return ValueType.fromExtendedType(ExtendedType.FontSize);
                            if (descriptor.formatting.labelDensity)
                                return ValueType.fromExtendedType(ExtendedType.LabelDensity);
                        }
                        if (descriptor.extendedType) {
                            return ValueType.fromExtendedType(descriptor.extendedType);
                        }
                        if (descriptor.operations) {
                            if (descriptor.operations.searchEnabled)
                                return ValueType.fromExtendedType(ExtendedType.SearchEnabled);
                        }
                        if (descriptor.variant) {
                            var variantTypes = descriptor.variant.map(function (variantType) { return ValueType.fromDescriptor(variantType); });
                            return ValueType.fromVariant(variantTypes);
                        }
                        return ValueType.fromExtendedType(ExtendedType.Null);
                    };
                    /** Advanced: Generally use fromDescriptor instead. Creates or retrieves a ValueType object for the specified ExtendedType. */
                    ValueType.fromExtendedType = function (extendedType) {
                        extendedType = extendedType || ExtendedType.Null;
                        var primitiveType = getPrimitiveType(extendedType), category = getCategoryFromExtendedType(extendedType);
                        return ValueType.fromPrimitiveTypeAndCategory(primitiveType, category);
                    };
                    /** Creates or retrieves a ValueType object for the specified PrimitiveType and data category. */
                    ValueType.fromPrimitiveTypeAndCategory = function (primitiveType, category) {
                        primitiveType = primitiveType || PrimitiveType.Null;
                        category = category || null;
                        var id = primitiveType.toString();
                        if (category)
                            id += "|" + category;
                        return ValueType.typeCache[id] || (ValueType.typeCache[id] = new ValueType(toExtendedType(primitiveType, category), category));
                    };
                    /** Creates a ValueType to describe the given IEnumType. */
                    ValueType.fromEnum = function (enumType) {
                        return new ValueType(ExtendedType.Enumeration, null, enumType);
                    };
                    /** Creates a ValueType to describe the given Variant type. */
                    ValueType.fromVariant = function (variantTypes) {
                        return new ValueType(ExtendedType.Variant, /* category */ null, /* enumType */ null, variantTypes);
                    };
                    /** Determines if the specified type is compatible from at least one of the otherTypes. */
                    ValueType.isCompatibleTo = function (typeDescriptor, otherTypes) {
                        var valueType = ValueType.fromDescriptor(typeDescriptor);
                        for (var _i = 0, otherTypes_1 = otherTypes; _i < otherTypes_1.length; _i++) {
                            var otherType = otherTypes_1[_i];
                            var otherValueType = ValueType.fromDescriptor(otherType);
                            if (otherValueType.isCompatibleFrom(valueType))
                                return true;
                        }
                        return false;
                    };
                    /** Determines if the instance ValueType is convertable from the 'other' ValueType. */
                    ValueType.prototype.isCompatibleFrom = function (other) {
                        var otherPrimitiveType = other.primitiveType;
                        if (this === other ||
                            this.primitiveType === otherPrimitiveType ||
                            otherPrimitiveType === PrimitiveType.Null ||
                            // Return true if both types are numbers
                            (this.numeric && other.numeric))
                            return true;
                        return false;
                    };
                    /**
                     * Determines if the instance ValueType is equal to the 'other' ValueType
                     * @param {ValueType} other the other ValueType to check equality against
                     * @returns True if the instance ValueType is equal to the 'other' ValueType
                     */
                    ValueType.prototype.equals = function (other) {
                        return type.JsonComparer.equals(this, other);
                    };
                    Object.defineProperty(ValueType.prototype, "primitiveType", {
                        /** Gets the exact primitive type of this ValueType. */
                        get: function () {
                            return getPrimitiveType(this.underlyingType);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "extendedType", {
                        /** Gets the exact extended type of this ValueType. */
                        get: function () {
                            return this.underlyingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "categoryString", {
                        /** Gets the data category string (if any) for this ValueType. */
                        get: function () {
                            return this.category;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "text", {
                        // Simplified primitive types
                        /** Indicates whether the type represents text values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Text;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "numeric", {
                        /** Indicates whether the type represents any numeric value. */
                        get: function () {
                            return EnumExtensions.hasFlag(this.underlyingType, ExtendedType.Numeric);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "integer", {
                        /** Indicates whether the type represents integer numeric values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Integer;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "bool", {
                        /** Indicates whether the type represents Boolean values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Boolean;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "dateTime", {
                        /** Indicates whether the type represents any date/time values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.DateTime ||
                                this.primitiveType === PrimitiveType.Date ||
                                this.primitiveType === PrimitiveType.Time;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "duration", {
                        /** Indicates whether the type represents duration values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Duration;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "binary", {
                        /** Indicates whether the type represents binary values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.Binary;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "none", {
                        /** Indicates whether the type represents none values. */
                        get: function () {
                            return this.primitiveType === PrimitiveType.None;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "temporal", {
                        // Extended types
                        /** Returns an object describing temporal values represented by the type, if it represents a temporal type. */
                        get: function () {
                            return this.temporalType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "geography", {
                        /** Returns an object describing geographic values represented by the type, if it represents a geographic type. */
                        get: function () {
                            return this.geographyType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "misc", {
                        /** Returns an object describing the specific values represented by the type, if it represents a miscellaneous extended type. */
                        get: function () {
                            return this.miscType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "formatting", {
                        /** Returns an object describing the formatting values represented by the type, if it represents a formatting type. */
                        get: function () {
                            return this.formattingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "enumeration", {
                        /** Returns an object describing the enum values represented by the type, if it represents an enumeration type. */
                        get: function () {
                            return this.enumType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "scripting", {
                        get: function () {
                            return this.scriptingType;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(ValueType.prototype, "variant", {
                        /** Returns an array describing the variant values represented by the type, if it represents an Variant type. */
                        get: function () {
                            return this.variationTypes;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return ValueType;
                }());
                ValueType.typeCache = {};
                type.ValueType = ValueType;
                var ScriptType = (function () {
                    function ScriptType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(ScriptType.prototype, "source", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ScriptSource);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return ScriptType;
                }());
                type.ScriptType = ScriptType;
                var TemporalType = (function () {
                    function TemporalType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(TemporalType.prototype, "year", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Years);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "quarter", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Quarters);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "month", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Months);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "day", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.DayOfMonth);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(TemporalType.prototype, "paddedDateTableDate", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PaddedDateTableDates);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return TemporalType;
                }());
                type.TemporalType = TemporalType;
                var GeographyType = (function () {
                    function GeographyType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(GeographyType.prototype, "address", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Address);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "city", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.City);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "continent", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Continent);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "country", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Country);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "county", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.County);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "region", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Region);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "postalCode", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.PostalCode);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "stateOrProvince", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.StateOrProvince);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "place", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Place);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "latitude", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Latitude);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(GeographyType.prototype, "longitude", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Longitude);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return GeographyType;
                }());
                type.GeographyType = GeographyType;
                var MiscellaneousType = (function () {
                    function MiscellaneousType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(MiscellaneousType.prototype, "image", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Image);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "imageUrl", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.ImageUrl);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "webUrl", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.WebUrl);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(MiscellaneousType.prototype, "barcode", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Barcode);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return MiscellaneousType;
                }());
                type.MiscellaneousType = MiscellaneousType;
                var FormattingType = (function () {
                    function FormattingType(underlyingType) {
                        this.underlyingType = underlyingType;
                    }
                    Object.defineProperty(FormattingType.prototype, "color", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Color);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "formatString", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FormatString);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "alignment", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.Alignment);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "labelDisplayUnits", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDisplayUnits);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "fontSize", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.FontSize);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(FormattingType.prototype, "labelDensity", {
                        get: function () {
                            return matchesExtendedTypeWithAnyPrimitive(this.underlyingType, ExtendedType.LabelDensity);
                        },
                        enumerable: true,
                        configurable: true
                    });
                    return FormattingType;
                }());
                type.FormattingType = FormattingType;
                /** Defines primitive value types. Must be consistent with types defined by server conceptual schema. */
                var PrimitiveType;
                (function (PrimitiveType) {
                    PrimitiveType[PrimitiveType["Null"] = 0] = "Null";
                    PrimitiveType[PrimitiveType["Text"] = 1] = "Text";
                    PrimitiveType[PrimitiveType["Decimal"] = 2] = "Decimal";
                    PrimitiveType[PrimitiveType["Double"] = 3] = "Double";
                    PrimitiveType[PrimitiveType["Integer"] = 4] = "Integer";
                    PrimitiveType[PrimitiveType["Boolean"] = 5] = "Boolean";
                    PrimitiveType[PrimitiveType["Date"] = 6] = "Date";
                    PrimitiveType[PrimitiveType["DateTime"] = 7] = "DateTime";
                    PrimitiveType[PrimitiveType["DateTimeZone"] = 8] = "DateTimeZone";
                    PrimitiveType[PrimitiveType["Time"] = 9] = "Time";
                    PrimitiveType[PrimitiveType["Duration"] = 10] = "Duration";
                    PrimitiveType[PrimitiveType["Binary"] = 11] = "Binary";
                    PrimitiveType[PrimitiveType["None"] = 12] = "None";
                    PrimitiveType[PrimitiveType["Variant"] = 13] = "Variant";
                })(PrimitiveType = type.PrimitiveType || (type.PrimitiveType = {}));
                var PrimitiveTypeStrings;
                (function (PrimitiveTypeStrings) {
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Null"] = 0] = "Null";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Text"] = 1] = "Text";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Decimal"] = 2] = "Decimal";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Double"] = 3] = "Double";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Integer"] = 4] = "Integer";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Boolean"] = 5] = "Boolean";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Date"] = 6] = "Date";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTime"] = 7] = "DateTime";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["DateTimeZone"] = 8] = "DateTimeZone";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Time"] = 9] = "Time";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Duration"] = 10] = "Duration";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Binary"] = 11] = "Binary";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["None"] = 12] = "None";
                    PrimitiveTypeStrings[PrimitiveTypeStrings["Variant"] = 13] = "Variant";
                })(PrimitiveTypeStrings || (PrimitiveTypeStrings = {}));
                /** Defines extended value types, which include primitive types and known data categories constrained to expected primitive types. */
                var ExtendedType;
                (function (ExtendedType) {
                    // Flags (1 << 8-15 range [0xFF00])
                    // Important: Enum members must be declared before they are used in TypeScript.
                    ExtendedType[ExtendedType["Numeric"] = 256] = "Numeric";
                    ExtendedType[ExtendedType["Temporal"] = 512] = "Temporal";
                    ExtendedType[ExtendedType["Geography"] = 1024] = "Geography";
                    ExtendedType[ExtendedType["Miscellaneous"] = 2048] = "Miscellaneous";
                    ExtendedType[ExtendedType["Formatting"] = 4096] = "Formatting";
                    ExtendedType[ExtendedType["Scripting"] = 8192] = "Scripting";
                    // Primitive types (0-255 range [0xFF] | flags)
                    // The member names and base values must match those in PrimitiveType.
                    ExtendedType[ExtendedType["Null"] = 0] = "Null";
                    ExtendedType[ExtendedType["Text"] = 1] = "Text";
                    ExtendedType[ExtendedType["Decimal"] = 258] = "Decimal";
                    ExtendedType[ExtendedType["Double"] = 259] = "Double";
                    ExtendedType[ExtendedType["Integer"] = 260] = "Integer";
                    ExtendedType[ExtendedType["Boolean"] = 5] = "Boolean";
                    ExtendedType[ExtendedType["Date"] = 518] = "Date";
                    ExtendedType[ExtendedType["DateTime"] = 519] = "DateTime";
                    ExtendedType[ExtendedType["DateTimeZone"] = 520] = "DateTimeZone";
                    ExtendedType[ExtendedType["Time"] = 521] = "Time";
                    ExtendedType[ExtendedType["Duration"] = 10] = "Duration";
                    ExtendedType[ExtendedType["Binary"] = 11] = "Binary";
                    ExtendedType[ExtendedType["None"] = 12] = "None";
                    ExtendedType[ExtendedType["Variant"] = 13] = "Variant";
                    // Extended types (0-32767 << 16 range [0xFFFF0000] | corresponding primitive type | flags)
                    // Temporal
                    ExtendedType[ExtendedType["Years"] = 66048] = "Years";
                    ExtendedType[ExtendedType["Years_Text"] = 66049] = "Years_Text";
                    ExtendedType[ExtendedType["Years_Integer"] = 66308] = "Years_Integer";
                    ExtendedType[ExtendedType["Years_Date"] = 66054] = "Years_Date";
                    ExtendedType[ExtendedType["Years_DateTime"] = 66055] = "Years_DateTime";
                    ExtendedType[ExtendedType["Months"] = 131584] = "Months";
                    ExtendedType[ExtendedType["Months_Text"] = 131585] = "Months_Text";
                    ExtendedType[ExtendedType["Months_Integer"] = 131844] = "Months_Integer";
                    ExtendedType[ExtendedType["Months_Date"] = 131590] = "Months_Date";
                    ExtendedType[ExtendedType["Months_DateTime"] = 131591] = "Months_DateTime";
                    ExtendedType[ExtendedType["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
                    ExtendedType[ExtendedType["Quarters"] = 262656] = "Quarters";
                    ExtendedType[ExtendedType["Quarters_Text"] = 262657] = "Quarters_Text";
                    ExtendedType[ExtendedType["Quarters_Integer"] = 262916] = "Quarters_Integer";
                    ExtendedType[ExtendedType["Quarters_Date"] = 262662] = "Quarters_Date";
                    ExtendedType[ExtendedType["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
                    ExtendedType[ExtendedType["DayOfMonth"] = 328192] = "DayOfMonth";
                    ExtendedType[ExtendedType["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
                    ExtendedType[ExtendedType["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
                    ExtendedType[ExtendedType["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
                    ExtendedType[ExtendedType["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
                    // Geography
                    ExtendedType[ExtendedType["Address"] = 6554625] = "Address";
                    ExtendedType[ExtendedType["City"] = 6620161] = "City";
                    ExtendedType[ExtendedType["Continent"] = 6685697] = "Continent";
                    ExtendedType[ExtendedType["Country"] = 6751233] = "Country";
                    ExtendedType[ExtendedType["County"] = 6816769] = "County";
                    ExtendedType[ExtendedType["Region"] = 6882305] = "Region";
                    ExtendedType[ExtendedType["PostalCode"] = 6947840] = "PostalCode";
                    ExtendedType[ExtendedType["PostalCode_Text"] = 6947841] = "PostalCode_Text";
                    ExtendedType[ExtendedType["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
                    ExtendedType[ExtendedType["StateOrProvince"] = 7013377] = "StateOrProvince";
                    ExtendedType[ExtendedType["Place"] = 7078913] = "Place";
                    ExtendedType[ExtendedType["Latitude"] = 7144448] = "Latitude";
                    ExtendedType[ExtendedType["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
                    ExtendedType[ExtendedType["Latitude_Double"] = 7144707] = "Latitude_Double";
                    ExtendedType[ExtendedType["Longitude"] = 7209984] = "Longitude";
                    ExtendedType[ExtendedType["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
                    ExtendedType[ExtendedType["Longitude_Double"] = 7210243] = "Longitude_Double";
                    // Miscellaneous
                    ExtendedType[ExtendedType["Image"] = 13109259] = "Image";
                    ExtendedType[ExtendedType["ImageUrl"] = 13174785] = "ImageUrl";
                    ExtendedType[ExtendedType["WebUrl"] = 13240321] = "WebUrl";
                    ExtendedType[ExtendedType["Barcode"] = 13305856] = "Barcode";
                    ExtendedType[ExtendedType["Barcode_Text"] = 13305857] = "Barcode_Text";
                    ExtendedType[ExtendedType["Barcode_Integer"] = 13306116] = "Barcode_Integer";
                    // Formatting
                    ExtendedType[ExtendedType["Color"] = 19664897] = "Color";
                    ExtendedType[ExtendedType["FormatString"] = 19730433] = "FormatString";
                    ExtendedType[ExtendedType["Alignment"] = 20058113] = "Alignment";
                    ExtendedType[ExtendedType["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
                    ExtendedType[ExtendedType["FontSize"] = 20189443] = "FontSize";
                    ExtendedType[ExtendedType["LabelDensity"] = 20254979] = "LabelDensity";
                    // Enumeration
                    ExtendedType[ExtendedType["Enumeration"] = 26214401] = "Enumeration";
                    // Scripting
                    ExtendedType[ExtendedType["ScriptSource"] = 32776193] = "ScriptSource";
                    // NOTE: To avoid confusion, underscores should be used only to delimit primitive type variants of an extended type
                    // (e.g. Year_Integer or Latitude_Double above)
                    // Operations
                    ExtendedType[ExtendedType["SearchEnabled"] = 65541] = "SearchEnabled";
                })(ExtendedType = type.ExtendedType || (type.ExtendedType = {}));
                var ExtendedTypeStrings;
                (function (ExtendedTypeStrings) {
                    ExtendedTypeStrings[ExtendedTypeStrings["Numeric"] = 256] = "Numeric";
                    ExtendedTypeStrings[ExtendedTypeStrings["Temporal"] = 512] = "Temporal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Geography"] = 1024] = "Geography";
                    ExtendedTypeStrings[ExtendedTypeStrings["Miscellaneous"] = 2048] = "Miscellaneous";
                    ExtendedTypeStrings[ExtendedTypeStrings["Formatting"] = 4096] = "Formatting";
                    ExtendedTypeStrings[ExtendedTypeStrings["Scripting"] = 8192] = "Scripting";
                    ExtendedTypeStrings[ExtendedTypeStrings["Null"] = 0] = "Null";
                    ExtendedTypeStrings[ExtendedTypeStrings["Text"] = 1] = "Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Decimal"] = 258] = "Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Double"] = 259] = "Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Integer"] = 260] = "Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Boolean"] = 5] = "Boolean";
                    ExtendedTypeStrings[ExtendedTypeStrings["Date"] = 518] = "Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["DateTime"] = 519] = "DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["DateTimeZone"] = 520] = "DateTimeZone";
                    ExtendedTypeStrings[ExtendedTypeStrings["Time"] = 521] = "Time";
                    ExtendedTypeStrings[ExtendedTypeStrings["Duration"] = 10] = "Duration";
                    ExtendedTypeStrings[ExtendedTypeStrings["Binary"] = 11] = "Binary";
                    ExtendedTypeStrings[ExtendedTypeStrings["None"] = 12] = "None";
                    ExtendedTypeStrings[ExtendedTypeStrings["Variant"] = 13] = "Variant";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years"] = 66048] = "Years";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Text"] = 66049] = "Years_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Integer"] = 66308] = "Years_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_Date"] = 66054] = "Years_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Years_DateTime"] = 66055] = "Years_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months"] = 131584] = "Months";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Text"] = 131585] = "Months_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Integer"] = 131844] = "Months_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_Date"] = 131590] = "Months_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Months_DateTime"] = 131591] = "Months_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["PaddedDateTableDates"] = 197127] = "PaddedDateTableDates";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters"] = 262656] = "Quarters";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Text"] = 262657] = "Quarters_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Integer"] = 262916] = "Quarters_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_Date"] = 262662] = "Quarters_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["Quarters_DateTime"] = 262663] = "Quarters_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth"] = 328192] = "DayOfMonth";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Text"] = 328193] = "DayOfMonth_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Integer"] = 328452] = "DayOfMonth_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_Date"] = 328198] = "DayOfMonth_Date";
                    ExtendedTypeStrings[ExtendedTypeStrings["DayOfMonth_DateTime"] = 328199] = "DayOfMonth_DateTime";
                    ExtendedTypeStrings[ExtendedTypeStrings["Address"] = 6554625] = "Address";
                    ExtendedTypeStrings[ExtendedTypeStrings["City"] = 6620161] = "City";
                    ExtendedTypeStrings[ExtendedTypeStrings["Continent"] = 6685697] = "Continent";
                    ExtendedTypeStrings[ExtendedTypeStrings["Country"] = 6751233] = "Country";
                    ExtendedTypeStrings[ExtendedTypeStrings["County"] = 6816769] = "County";
                    ExtendedTypeStrings[ExtendedTypeStrings["Region"] = 6882305] = "Region";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode"] = 6947840] = "PostalCode";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Text"] = 6947841] = "PostalCode_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["PostalCode_Integer"] = 6948100] = "PostalCode_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["StateOrProvince"] = 7013377] = "StateOrProvince";
                    ExtendedTypeStrings[ExtendedTypeStrings["Place"] = 7078913] = "Place";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude"] = 7144448] = "Latitude";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Decimal"] = 7144706] = "Latitude_Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Latitude_Double"] = 7144707] = "Latitude_Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude"] = 7209984] = "Longitude";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Decimal"] = 7210242] = "Longitude_Decimal";
                    ExtendedTypeStrings[ExtendedTypeStrings["Longitude_Double"] = 7210243] = "Longitude_Double";
                    ExtendedTypeStrings[ExtendedTypeStrings["Image"] = 13109259] = "Image";
                    ExtendedTypeStrings[ExtendedTypeStrings["ImageUrl"] = 13174785] = "ImageUrl";
                    ExtendedTypeStrings[ExtendedTypeStrings["WebUrl"] = 13240321] = "WebUrl";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode"] = 13305856] = "Barcode";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Text"] = 13305857] = "Barcode_Text";
                    ExtendedTypeStrings[ExtendedTypeStrings["Barcode_Integer"] = 13306116] = "Barcode_Integer";
                    ExtendedTypeStrings[ExtendedTypeStrings["Color"] = 19664897] = "Color";
                    ExtendedTypeStrings[ExtendedTypeStrings["FormatString"] = 19730433] = "FormatString";
                    ExtendedTypeStrings[ExtendedTypeStrings["Alignment"] = 20058113] = "Alignment";
                    ExtendedTypeStrings[ExtendedTypeStrings["LabelDisplayUnits"] = 20123649] = "LabelDisplayUnits";
                    ExtendedTypeStrings[ExtendedTypeStrings["FontSize"] = 20189443] = "FontSize";
                    ExtendedTypeStrings[ExtendedTypeStrings["LabelDensity"] = 20254979] = "LabelDensity";
                    ExtendedTypeStrings[ExtendedTypeStrings["Enumeration"] = 26214401] = "Enumeration";
                    ExtendedTypeStrings[ExtendedTypeStrings["ScriptSource"] = 32776193] = "ScriptSource";
                    ExtendedTypeStrings[ExtendedTypeStrings["SearchEnabled"] = 65541] = "SearchEnabled";
                })(ExtendedTypeStrings || (ExtendedTypeStrings = {}));
                var PrimitiveTypeMask = 0xFF;
                var PrimitiveTypeWithFlagsMask = 0xFFFF;
                var PrimitiveTypeFlagsExcludedMask = 0xFFFF0000;
                function getPrimitiveType(extendedType) {
                    return extendedType & PrimitiveTypeMask;
                }
                function isPrimitiveType(extendedType) {
                    return (extendedType & PrimitiveTypeWithFlagsMask) === extendedType;
                }
                function getCategoryFromExtendedType(extendedType) {
                    if (isPrimitiveType(extendedType))
                        return null;
                    var category = ExtendedTypeStrings[extendedType];
                    if (category) {
                        // Check for ExtendedType declaration without a primitive type.
                        // If exists, use it as category (e.g. Longitude rather than Longitude_Double)
                        // Otherwise use the ExtendedType declaration with a primitive type (e.g. Address)
                        var delimIdx = category.lastIndexOf("_");
                        if (delimIdx > 0) {
                            var baseCategory = category.slice(0, delimIdx);
                            if (ExtendedTypeStrings[baseCategory]) {
                                category = baseCategory;
                            }
                        }
                    }
                    return category || null;
                }
                function toExtendedType(primitiveType, category) {
                    var primitiveString = PrimitiveTypeStrings[primitiveType];
                    var t = ExtendedTypeStrings[primitiveString];
                    if (t == null) {
                        t = ExtendedType.Null;
                    }
                    if (primitiveType && category) {
                        var categoryType = ExtendedTypeStrings[category];
                        if (categoryType) {
                            var categoryPrimitiveType = getPrimitiveType(categoryType);
                            if (categoryPrimitiveType === PrimitiveType.Null) {
                                // Category supports multiple primitive types, check if requested primitive type is supported
                                // (note: important to use t here rather than primitiveType as it may include primitive type flags)
                                categoryType = t | categoryType;
                                if (ExtendedTypeStrings[categoryType]) {
                                    t = categoryType;
                                }
                            }
                            else if (categoryPrimitiveType === primitiveType) {
                                // Primitive type matches the single supported type for the category
                                t = categoryType;
                            }
                        }
                    }
                    return t;
                }
                function matchesExtendedTypeWithAnyPrimitive(a, b) {
                    return (a & PrimitiveTypeFlagsExcludedMask) === (b & PrimitiveTypeFlagsExcludedMask);
                }
            })(type = utils.type || (utils.type = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Rect = (function () {
                    // Constructor
                    function Rect(left, top, width, height) {
                        this.left = left || 0;
                        this.top = top || 0;
                        this.width = width || 0;
                        this.height = height || 0;
                    }
                    return Rect;
                }());
                svg.Rect = Rect;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Double = powerbi.extensibility.utils.type.Double;
                var shapes;
                (function (shapes) {
                    var Rect;
                    (function (Rect) {
                        function getOffset(rect) {
                            return { x: rect.left, y: rect.top };
                        }
                        Rect.getOffset = getOffset;
                        function getSize(rect) {
                            return { width: rect.width, height: rect.height };
                        }
                        Rect.getSize = getSize;
                        function setSize(rect, value) {
                            rect.width = value.width;
                            rect.height = value.height;
                        }
                        Rect.setSize = setSize;
                        function right(rect) {
                            return rect.left + rect.width;
                        }
                        Rect.right = right;
                        function bottom(rect) {
                            return rect.top + rect.height;
                        }
                        Rect.bottom = bottom;
                        function topLeft(rect) {
                            return { x: rect.left, y: rect.top };
                        }
                        Rect.topLeft = topLeft;
                        function topRight(rect) {
                            return { x: rect.left + rect.width, y: rect.top };
                        }
                        Rect.topRight = topRight;
                        function bottomLeft(rect) {
                            return { x: rect.left, y: rect.top + rect.height };
                        }
                        Rect.bottomLeft = bottomLeft;
                        function bottomRight(rect) {
                            return { x: rect.left + rect.width, y: rect.top + rect.height };
                        }
                        Rect.bottomRight = bottomRight;
                        function equals(rect, other) {
                            return other !== undefined && other !== null &&
                                rect.left === other.left && rect.top === other.top && rect.width === other.width && rect.height === other.height;
                        }
                        Rect.equals = equals;
                        function clone(rect) {
                            return (rect !== null) ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null;
                        }
                        Rect.clone = clone;
                        function toString(rect) {
                            return "{left:" + rect.left + ", top:" + rect.top + ", width:" + rect.width + ", height:" + rect.height + "}";
                        }
                        Rect.toString = toString;
                        function offset(rect, offsetX, offsetY) {
                            var newLeft = ((rect.left + offsetX) >= 0) ? rect.left + offsetX : 0;
                            var newTop = ((rect.top + offsetY) >= 0) ? rect.top + offsetY : 0;
                            return { left: newLeft, top: newTop, width: rect.width, height: rect.height };
                        }
                        Rect.offset = offset;
                        function add(rect, rect2) {
                            return {
                                left: rect.left + rect2.left,
                                top: rect.top + rect2.top,
                                height: rect.height + rect2.height,
                                width: rect.width + rect2.width
                            };
                        }
                        Rect.add = add;
                        function subtract(rect, rect2) {
                            return {
                                left: rect.left - rect2.left,
                                top: rect.top - rect2.top,
                                height: rect.height - rect2.height,
                                width: rect.width - rect2.width
                            };
                        }
                        Rect.subtract = subtract;
                        function inflate(rect, padding) {
                            var result = clone(rect);
                            if (padding) {
                                result.left -= padding.left;
                                result.top -= padding.top;
                                result.width += padding.left + padding.right;
                                result.height += padding.top + padding.bottom;
                            }
                            return result;
                        }
                        Rect.inflate = inflate;
                        function deflate(rect, padding) {
                            var result = clone(rect);
                            if (padding) {
                                result.left += padding.left;
                                result.top += padding.top;
                                result.width -= padding.left + padding.right;
                                result.height -= padding.top + padding.bottom;
                            }
                            return result;
                        }
                        Rect.deflate = deflate;
                        function inflateBy(rect, padding) {
                            return { left: rect.left - padding, top: rect.top - padding, width: rect.width + padding + padding, height: rect.height + padding + padding };
                        }
                        Rect.inflateBy = inflateBy;
                        function deflateBy(rect, padding) {
                            return { left: rect.left + padding, top: rect.top + padding, width: rect.width - padding - padding, height: rect.height - padding - padding };
                        }
                        Rect.deflateBy = deflateBy;
                        /**
                         * Get closest point.
                         *
                         * @return the closest point on the rect to the (x,y) point given.
                         * In case the (x,y) given is inside the rect, (x,y) will be returned.
                         * Otherwise, a point on a border will be returned.
                         */
                        function getClosestPoint(rect, x, y) {
                            return {
                                x: Math.min(Math.max(rect.left, x), rect.left + rect.width),
                                y: Math.min(Math.max(rect.top, y), rect.top + rect.height)
                            };
                        }
                        Rect.getClosestPoint = getClosestPoint;
                        function equal(rect1, rect2) {
                            return rect1 === rect2 ||
                                (rect1 !== undefined && rect2 !== undefined && rect1.left === rect2.left && rect1.top === rect2.top && rect1.width === rect2.width && rect1.height === rect2.height);
                        }
                        Rect.equal = equal;
                        function equalWithPrecision(rect1, rect2) {
                            return rect1 === rect2 ||
                                (rect1 !== undefined && rect2 !== undefined &&
                                    Double.equalWithPrecision(rect1.left, rect2.left) && Double.equalWithPrecision(rect1.top, rect2.top) &&
                                    Double.equalWithPrecision(rect1.width, rect2.width) && Double.equalWithPrecision(rect1.height, rect2.height));
                        }
                        Rect.equalWithPrecision = equalWithPrecision;
                        function isEmpty(rect) {
                            return rect === undefined || rect === null || (rect.width === 0 && rect.height === 0);
                        }
                        Rect.isEmpty = isEmpty;
                        function containsPoint(rect, point) {
                            if ((rect === null) || (point === null)) {
                                return false;
                            }
                            return Double.lessOrEqualWithPrecision(rect.left, point.x) &&
                                Double.lessOrEqualWithPrecision(point.x, rect.left + rect.width) &&
                                Double.lessOrEqualWithPrecision(rect.top, point.y) &&
                                Double.lessOrEqualWithPrecision(point.y, rect.top + rect.height);
                        }
                        Rect.containsPoint = containsPoint;
                        function isIntersecting(rect1, rect2) {
                            if (!rect1 || !rect2) {
                                return false;
                            }
                            var left = Math.max(rect1.left, rect2.left);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            if (left > right) {
                                return false;
                            }
                            var top = Math.max(rect1.top, rect2.top);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
                            return top <= bottom;
                        }
                        Rect.isIntersecting = isIntersecting;
                        function intersect(rect1, rect2) {
                            if (!rect1) {
                                return rect2;
                            }
                            if (!rect2) {
                                return rect1;
                            }
                            var left = Math.max(rect1.left, rect2.left);
                            var top = Math.max(rect1.top, rect2.top);
                            var right = Math.min(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.min(rect1.top + rect1.height, rect2.top + rect2.height);
                            if (left <= right && top <= bottom) {
                                return { left: left, top: top, width: right - left, height: bottom - top };
                            }
                            else {
                                return { left: 0, top: 0, width: 0, height: 0 };
                            }
                        }
                        Rect.intersect = intersect;
                        function combine(rect1, rect2) {
                            if (!rect1) {
                                return rect2;
                            }
                            if (!rect2) {
                                return rect1;
                            }
                            var left = Math.min(rect1.left, rect2.left);
                            var top = Math.min(rect1.top, rect2.top);
                            var right = Math.max(rect1.left + rect1.width, rect2.left + rect2.width);
                            var bottom = Math.max(rect1.top + rect1.height, rect2.top + rect2.height);
                            return { left: left, top: top, width: right - left, height: bottom - top };
                        }
                        Rect.combine = combine;
                        function getCentroid(rect) {
                            return {
                                x: rect.left + (rect.width / 2),
                                y: rect.top + (rect.height / 2)
                            };
                        }
                        Rect.getCentroid = getCentroid;
                    })(Rect = shapes.Rect || (shapes.Rect = {}));
                })(shapes = svg.shapes || (svg.shapes = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var Point = (function () {
                    function Point(x, y) {
                        this.x = x || 0;
                        this.y = y || 0;
                    }
                    return Point;
                }());
                svg.Point = Point;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * CSS constants.
                 */
                var CssConstants;
                (function (CssConstants) {
                    function createClassAndSelector(className) {
                        return {
                            className: className,
                            selectorName: "." + className,
                        };
                    }
                    CssConstants.createClassAndSelector = createClassAndSelector;
                    CssConstants.styleAttribute = "style";
                    CssConstants.pixelUnits = "px";
                    CssConstants.heightProperty = "height";
                    CssConstants.widthProperty = "width";
                    CssConstants.topProperty = "top";
                    CssConstants.bottomProperty = "bottom";
                    CssConstants.leftProperty = "left";
                    CssConstants.rightProperty = "right";
                    CssConstants.marginTopProperty = "margin-top";
                    CssConstants.marginLeftProperty = "margin-left";
                    CssConstants.displayProperty = "display";
                    CssConstants.backgroundProperty = "background";
                    CssConstants.backgroundColorProperty = "background-color";
                    CssConstants.backgroundRepeatProperty = "background-repeat";
                    CssConstants.backgroundSizeProperty = "background-size";
                    CssConstants.backgroundImageProperty = "background-image";
                    CssConstants.textShadowProperty = "text-shadow";
                    CssConstants.textAlignProperty = "text-align";
                    CssConstants.borderProperty = "border";
                    CssConstants.borderTopWidthProperty = "border-top-width";
                    CssConstants.borderBottomWidthProperty = "border-bottom-width";
                    CssConstants.borderLeftWidthProperty = "border-left-width";
                    CssConstants.borderRightWidthProperty = "border-right-width";
                    CssConstants.fontSizeProperty = "font-size";
                    CssConstants.fontWeightProperty = "font-weight";
                    CssConstants.colorProperty = "color";
                    CssConstants.opacityProperty = "opacity";
                    CssConstants.paddingLeftProperty = "padding-left";
                    CssConstants.paddingRightProperty = "padding-right";
                    CssConstants.positionProperty = "position";
                    CssConstants.maxWidthProperty = "max-width";
                    CssConstants.minWidthProperty = "min-width";
                    CssConstants.overflowProperty = "overflow";
                    CssConstants.overflowXProperty = "overflow-x";
                    CssConstants.overflowYProperty = "overflow-y";
                    CssConstants.transformProperty = "transform";
                    CssConstants.webkitTransformProperty = "-webkit-transform";
                    CssConstants.cursorProperty = "cursor";
                    CssConstants.visibilityProperty = "visibility";
                    CssConstants.absoluteValue = "absolute";
                    CssConstants.zeroPixelValue = "0px";
                    CssConstants.autoValue = "auto";
                    CssConstants.hiddenValue = "hidden";
                    CssConstants.noneValue = "none";
                    CssConstants.blockValue = "block";
                    CssConstants.inlineBlockValue = "inline-block";
                    CssConstants.transparentValue = "transparent";
                    CssConstants.boldValue = "bold";
                    CssConstants.visibleValue = "visible";
                    CssConstants.tableRowValue = "table-row";
                    CssConstants.coverValue = "cover";
                    CssConstants.pointerValue = "pointer";
                    CssConstants.scrollValue = "scroll";
                })(CssConstants = svg.CssConstants || (svg.CssConstants = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    var Point = (function () {
                        function Point(x, y) {
                            this.x = x || 0;
                            this.y = y || 0;
                        }
                        Point.prototype.offset = function (offsetX, offsetY) {
                            this.x += offsetX;
                            this.y += offsetY;
                        };
                        return Point;
                    }());
                    touch.Point = Point;
                    var Rectangle = (function (_super) {
                        __extends(Rectangle, _super);
                        function Rectangle(x, y, width, height) {
                            var _this = _super.call(this, x, y) || this;
                            _this.width = width || 0;
                            _this.height = height || 0;
                            return _this;
                        }
                        Object.defineProperty(Rectangle.prototype, "point", {
                            get: function () {
                                return new Point(this.x, this.y);
                            },
                            enumerable: true,
                            configurable: true
                        });
                        Rectangle.prototype.contains = function (p) {
                            return Rectangle.contains(this, p);
                        };
                        Rectangle.contains = function (rect, p) {
                            if (p && !Rectangle.isEmpty(rect)) {
                                return rect.x <= p.x && p.x < rect.x + rect.width && rect.y <= p.y && p.y < rect.y + rect.height;
                            }
                            return false;
                        };
                        Rectangle.isEmpty = function (rect) {
                            return !(rect !== undefined && rect.width >= 0 && rect.height >= 0);
                        };
                        return Rectangle;
                    }(Point));
                    touch.Rectangle = Rectangle;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var touch;
                (function (touch) {
                    function touchStartEventName() {
                        var eventName = "touchstart";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerdown";
                        }
                        return eventName;
                    }
                    touch.touchStartEventName = touchStartEventName;
                    function touchMoveEventName() {
                        var eventName = "touchmove";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointermove";
                        }
                        return eventName;
                    }
                    touch.touchMoveEventName = touchMoveEventName;
                    function touchEndEventName() {
                        var eventName = "touchend";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerup";
                        }
                        return eventName;
                    }
                    touch.touchEndEventName = touchEndEventName;
                    function usePointerEvents() {
                        var eventName = touchStartEventName();
                        return eventName === "pointerdown" || eventName === "MSPointerDown";
                    }
                    touch.usePointerEvents = usePointerEvents;
                })(touch = svg.touch || (svg.touch = {}));
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                function getCoordinates(rootNode, isPointerEvent) {
                    var coordinates;
                    if (isPointerEvent) {
                        // DO NOT USE - WebKit bug in getScreenCTM with nested SVG results in slight negative coordinate shift
                        // Also, IE will incorporate transform scale but WebKit does not, forcing us to detect browser and adjust appropriately.
                        // Just use non-scaled coordinates for all browsers, and adjust for the transform scale later (see lineChart.findIndex)
                        // coordinates = d3.mouse(rootNode);
                        // copied from d3_eventSource (which is not exposed)
                        var e = d3.event, s = void 0;
                        while (s = e.sourceEvent)
                            e = s;
                        var rect = rootNode.getBoundingClientRect();
                        coordinates = [e.clientX - rect.left - rootNode.clientLeft, e.clientY - rect.top - rootNode.clientTop];
                    }
                    else {
                        var touchCoordinates = d3.touches(rootNode);
                        if (touchCoordinates && touchCoordinates.length > 0) {
                            coordinates = touchCoordinates[0];
                        }
                    }
                    return coordinates;
                }
                svg.getCoordinates = getCoordinates;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                /**
                 * Very small values, when stringified, may be converted to scientific notation and cause a temporarily
                 * invalid attribute or style property value.
                 * For example, the number 0.0000001 is converted to the string "1e-7".
                 * This is particularly noticeable when interpolating opacity values.
                 * To avoid scientific notation, start or end the transition at 1e-6,
                 * which is the smallest value that is not stringified in exponential notation.
                 */
                svg.AlmostZero = 1e-6;
                /**
                     * Creates a translate string for use with the SVG transform call.
                     */
                function translate(x, y) {
                    return "translate(" + x + "," + y + ")";
                }
                svg.translate = translate;
                /**
                 * Creates a translateX string for use with the SVG transform call.
                 */
                function translateXWithPixels(x) {
                    return "translateX(" + x + "px)";
                }
                svg.translateXWithPixels = translateXWithPixels;
                function translateWithPixels(x, y) {
                    return "translate(" + x + "px," + y + "px)";
                }
                svg.translateWithPixels = translateWithPixels;
                /**
                 * Creates a translate + rotate string for use with the SVG transform call.
                 */
                function translateAndRotate(x, y, px, py, angle) {
                    return "translate("
                        + x + "," + y + ")"
                        + " rotate(" + angle + "," + px + "," + py + ")";
                }
                svg.translateAndRotate = translateAndRotate;
                /**
                 * Creates a scale string for use in a CSS transform property.
                 */
                function scale(scale) {
                    return "scale(" + scale + ")";
                }
                svg.scale = scale;
                /**
                 * Creates a translate + scale string for use with the SVG transform call.
                 */
                function translateAndScale(x, y, ratio) {
                    return "translate("
                        + x + "," + y + ")"
                        + " scale(" + ratio + ")";
                }
                svg.translateAndScale = translateAndScale;
                /**
                 * Creates a transform origin string for use in a CSS transform-origin property.
                 */
                function transformOrigin(xOffset, yOffset) {
                    return xOffset + " " + yOffset;
                }
                svg.transformOrigin = transformOrigin;
                /**
                 * Forces all D3 transitions to complete.
                 * Normally, zero-delay transitions are executed after an instantaneous delay (<10ms).
                 * This can cause a brief flicker if the browser renders the page twice: once at the end of the first event loop,
                 * then again immediately on the first timer callback. By flushing the timer queue at the end of the first event loop,
                 * you can run any zero-delay transitions immediately and avoid the flicker.
                 *
                 * These flickers are noticable on IE, and with a large number of webviews(not recommend you ever do this) on iOS.
                 */
                function flushAllD3Transitions() {
                    var now = Date.now;
                    Date.now = function () { return Infinity; };
                    d3.timer.flush();
                    Date.now = now;
                }
                svg.flushAllD3Transitions = flushAllD3Transitions;
                /**
                 * Wrapper for flushAllD3Transitions.
                 */
                function flushAllD3TransitionsIfNeeded(options) {
                    if (!options)
                        return;
                    var animationOptions = options;
                    if (animationOptions && animationOptions.transitionImmediate) {
                        flushAllD3Transitions();
                    }
                }
                svg.flushAllD3TransitionsIfNeeded = flushAllD3TransitionsIfNeeded;
                /**
                 * There is a known bug in IE10 that causes cryptic crashes for SVG elements with a null "d" attribute:
                 * https://github.com/mbostock/d3/issues/1737
                 */
                function ensureDAttribute(pathElement) {
                    if (!pathElement.getAttribute("d")) {
                        pathElement.setAttribute("d", "");
                    }
                }
                svg.ensureDAttribute = ensureDAttribute;
                /**
                 * In IE10, it is possible to return SVGPoints with NaN members.
                 */
                function ensureValidSVGPoint(point) {
                    if (isNaN(point.x)) {
                        point.x = 0;
                    }
                    if (isNaN(point.y)) {
                        point.y = 0;
                    }
                }
                svg.ensureValidSVGPoint = ensureValidSVGPoint;
                /**
                 * Parse the Transform string with value "translate(x,y)".
                 * In Chrome for the translate(position) string the delimiter
                 * is a comma and in IE it is a spaceso checking for both.
                 */
                function parseTranslateTransform(input) {
                    if (!input || input.length === 0) {
                        return {
                            x: "0",
                            y: "0",
                        };
                    }
                    var translateCoordinates = input.split(/[\s,]+/);
                    var yValue = "0";
                    var xValue;
                    var xCoord = translateCoordinates[0];
                    // Y coordinate is ommited in I.E if it is 0, so need to check against that
                    if (translateCoordinates.length === 1) {
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length - 1);
                    }
                    else {
                        var yCoord = translateCoordinates[1];
                        yValue = yCoord.substring(0, yCoord.length - 1);
                        // 10 refers to the length of "translate("
                        xValue = xCoord.substring(10, xCoord.length);
                    }
                    return {
                        x: xValue,
                        y: yValue
                    };
                }
                svg.parseTranslateTransform = parseTranslateTransform;
                /**
                 * Create an arrow.
                 */
                function createArrow(width, height, rotate) {
                    var transform = "rotate(" + rotate + " " + width / 2 + " " + height / 2 + ")";
                    var path = "M0 0";
                    path += "L0 " + height;
                    path += "L" + width + " " + height / 2 + " Z";
                    return {
                        path: path,
                        transform: transform
                    };
                }
                svg.createArrow = createArrow;
                /**
                 * Use the ratio of the scaled bounding rect and the SVG DOM bounding box to get the x and y transform scale values
                 * @deprecated This function is unreliable across browser implementations, prefer to use SVGScaleDetector if needed.
                 */
                function getTransformScaleRatios(svgElement) {
                    if (svgElement != null) {
                        var scaledRect = svgElement.getBoundingClientRect();
                        var domRect = svgElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                    }
                    return { x: 1, y: 1 };
                }
                svg.getTransformScaleRatios = getTransformScaleRatios;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var svg;
            (function (svg) {
                var SVGScaleDetector = (function () {
                    function SVGScaleDetector(svgElement) {
                        this.scaleDetectorElement = svgElement
                            .append("rect") // Using a <rect> which should have a reliable bounding box across browser implementations.
                            .classed("scale-detector", true)
                            .attr({
                            width: 1,
                            height: 1,
                            "stroke-width": "0px",
                            fill: "none",
                        })
                            .node();
                    }
                    SVGScaleDetector.prototype.getScale = function () {
                        var scaledRect = this.scaleDetectorElement.getBoundingClientRect();
                        var domRect = this.scaleDetectorElement.getBBox();
                        if (domRect.height > 0 && domRect.width > 0) {
                            return {
                                x: scaledRect.width / domRect.width,
                                y: scaledRect.height / domRect.height
                            };
                        }
                        return {
                            x: 1,
                            y: 1
                        };
                    };
                    return SVGScaleDetector;
                }());
                svg.SVGScaleDetector = SVGScaleDetector;
            })(svg = utils.svg || (utils.svg = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var filter;
            (function (filter) {
                var SQExprKind;
                (function (SQExprKind) {
                    SQExprKind[SQExprKind["Entity"] = 0] = "Entity";
                    SQExprKind[SQExprKind["SubqueryRef"] = 1] = "SubqueryRef";
                    SQExprKind[SQExprKind["ColumnRef"] = 2] = "ColumnRef";
                    SQExprKind[SQExprKind["MeasureRef"] = 3] = "MeasureRef";
                    SQExprKind[SQExprKind["Aggregation"] = 4] = "Aggregation";
                    SQExprKind[SQExprKind["PropertyVariationSource"] = 5] = "PropertyVariationSource";
                    SQExprKind[SQExprKind["Hierarchy"] = 6] = "Hierarchy";
                    SQExprKind[SQExprKind["HierarchyLevel"] = 7] = "HierarchyLevel";
                    SQExprKind[SQExprKind["And"] = 8] = "And";
                    SQExprKind[SQExprKind["Between"] = 9] = "Between";
                    SQExprKind[SQExprKind["In"] = 10] = "In";
                    SQExprKind[SQExprKind["Or"] = 11] = "Or";
                    SQExprKind[SQExprKind["Contains"] = 12] = "Contains";
                    SQExprKind[SQExprKind["Compare"] = 13] = "Compare";
                    SQExprKind[SQExprKind["StartsWith"] = 14] = "StartsWith";
                    SQExprKind[SQExprKind["Exists"] = 15] = "Exists";
                    SQExprKind[SQExprKind["Not"] = 16] = "Not";
                    SQExprKind[SQExprKind["Constant"] = 17] = "Constant";
                    SQExprKind[SQExprKind["DateSpan"] = 18] = "DateSpan";
                    SQExprKind[SQExprKind["DateAdd"] = 19] = "DateAdd";
                    SQExprKind[SQExprKind["Now"] = 20] = "Now";
                    SQExprKind[SQExprKind["AnyValue"] = 21] = "AnyValue";
                    SQExprKind[SQExprKind["DefaultValue"] = 22] = "DefaultValue";
                    SQExprKind[SQExprKind["Arithmetic"] = 23] = "Arithmetic";
                    SQExprKind[SQExprKind["FillRule"] = 24] = "FillRule";
                    SQExprKind[SQExprKind["ResourcePackageItem"] = 25] = "ResourcePackageItem";
                    SQExprKind[SQExprKind["ScopedEval"] = 26] = "ScopedEval";
                    SQExprKind[SQExprKind["WithRef"] = 27] = "WithRef";
                    SQExprKind[SQExprKind["Percentile"] = 28] = "Percentile";
                    SQExprKind[SQExprKind["SelectRef"] = 29] = "SelectRef";
                    SQExprKind[SQExprKind["TransformTableRef"] = 30] = "TransformTableRef";
                    SQExprKind[SQExprKind["TransformOutputRoleRef"] = 31] = "TransformOutputRoleRef";
                    SQExprKind[SQExprKind["ThemeDataColor"] = 32] = "ThemeDataColor";
                    SQExprKind[SQExprKind["GroupRef"] = 33] = "GroupRef";
                    SQExprKind[SQExprKind["Floor"] = 34] = "Floor";
                    SQExprKind[SQExprKind["RoleRef"] = 35] = "RoleRef";
                    SQExprKind[SQExprKind["Discretize"] = 36] = "Discretize";
                    SQExprKind[SQExprKind["NamedQueryRef"] = 37] = "NamedQueryRef";
                    SQExprKind[SQExprKind["Member"] = 38] = "Member";
                    SQExprKind[SQExprKind["FilteredEval"] = 39] = "FilteredEval";
                    SQExprKind[SQExprKind["Conditional"] = 40] = "Conditional";
                })(SQExprKind = filter.SQExprKind || (filter.SQExprKind = {}));
                var QueryComparisonKind;
                (function (QueryComparisonKind) {
                    QueryComparisonKind[QueryComparisonKind["Equal"] = 0] = "Equal";
                    QueryComparisonKind[QueryComparisonKind["GreaterThan"] = 1] = "GreaterThan";
                    QueryComparisonKind[QueryComparisonKind["GreaterThanOrEqual"] = 2] = "GreaterThanOrEqual";
                    QueryComparisonKind[QueryComparisonKind["LessThan"] = 3] = "LessThan";
                    QueryComparisonKind[QueryComparisonKind["LessThanOrEqual"] = 4] = "LessThanOrEqual";
                    QueryComparisonKind[QueryComparisonKind["Contains"] = 12] = "Contains";
                    QueryComparisonKind[QueryComparisonKind["Is"] = 13] = "Is";
                    QueryComparisonKind[QueryComparisonKind["StartsWith"] = 14] = "StartsWith";
                    QueryComparisonKind[QueryComparisonKind["DoesNotContain"] = 16] = "DoesNotContain";
                })(QueryComparisonKind = filter.QueryComparisonKind || (filter.QueryComparisonKind = {}));
            })(filter = utils.filter || (utils.filter = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var filter;
            (function (filter_1) {
                var FilterManager = (function () {
                    function FilterManager() {
                    }
                    FilterManager.restoreFilter = function (filter) {
                        if (!filter
                            || !filter.whereItems
                            || !filter.whereItems[0]
                            || !filter.whereItems[0].condition) {
                            return undefined;
                        }
                        var expr = filter.whereItems[0].condition;
                        var basicFilterOperator = FilterManager.getBasicFilterOperator(expr._kind);
                        if ((expr.values || expr.arg && expr.arg.values) &&
                            (basicFilterOperator === "In" ||
                                basicFilterOperator === "All" ||
                                basicFilterOperator === "NotIn")) {
                            return FilterManager.restoreBasicFilter(expr);
                        }
                        return FilterManager.restoreAdvancedFilter(expr);
                    };
                    /*
                        Restores AdvancedFilter instance from filter
                    */
                    FilterManager.restoreAdvancedFilter = function (expr) {
                        var logicalOperator = FilterManager.getLogicalOperatorNameByKind(expr._kind);
                        var conditions;
                        if (logicalOperator === "And" || logicalOperator === "Or") {
                            conditions = FilterManager.getConditions([expr.left, expr.right]);
                        }
                        else {
                            logicalOperator = "And";
                            conditions = FilterManager.getConditions([expr]);
                        }
                        var advancedFilter = new window["powerbi-models"].AdvancedFilter(null, logicalOperator, conditions);
                        return advancedFilter.toJSON();
                    };
                    /*
                        Restores BasicFilter instance from filter
                    */
                    FilterManager.restoreBasicFilter = function (expr) {
                        var basicFilterOperator = FilterManager.getBasicFilterOperator(expr._kind);
                        var basicFilter = new window["powerbi-models"].BasicFilter(null, basicFilterOperator, expr.values || expr.arg && expr.arg.values);
                        return basicFilter.toJSON();
                    };
                    FilterManager.getConditions = function (exprs) {
                        var conditions = [];
                        exprs.forEach(function (expr) {
                            if (expr) {
                                if ((expr.left && expr.right || expr.arg) &&
                                    typeof expr.comparison === "undefined" &&
                                    (expr._kind === filter_1.QueryComparisonKind.Contains ||
                                        expr._kind === filter_1.QueryComparisonKind.Is ||
                                        expr._kind === filter_1.QueryComparisonKind.DoesNotContain ||
                                        expr._kind === filter_1.QueryComparisonKind.StartsWith)) {
                                    var internal = FilterManager
                                        .getConditions([expr.left, expr.right, expr.arg]
                                        .filter(function (expr) { return expr; }))
                                        .filter(function (con) { return typeof con.value !== "undefined"; }); // null must be considered as value
                                    internal.forEach(function (con) {
                                        if (con.operator === "None") {
                                            con.operator = FilterManager.getCondictionOperatorByComparison(expr._kind);
                                        }
                                        // IsBlank stores inside semantic filter as "value is null"
                                        if (con.value === null && con.operator === "Is") {
                                            con.operator = "IsBlank";
                                        }
                                        if (con.value === null && con.operator === "DoesNotContain") {
                                            con.operator = "IsNotBlank";
                                        }
                                    });
                                    // check DoesNotStartsWith as  DoesNotContain values as StartsWith value
                                    if (internal.every(function (con) { return con.operator === "StartsWith"; }) && expr._kind === filter_1.QueryComparisonKind.DoesNotContain) {
                                        internal.forEach(function (con) {
                                            con.operator = "DoesNotStartWith";
                                        });
                                    }
                                    if (internal.every(function (con) { return con.operator === "Contains"; }) && expr._kind === filter_1.QueryComparisonKind.DoesNotContain) {
                                        internal.forEach(function (con) {
                                            con.operator = "DoesNotContain";
                                        });
                                    }
                                    if (internal.every(function (con) { return con.operator === "Is"; }) && expr._kind === filter_1.QueryComparisonKind.DoesNotContain) {
                                        internal.forEach(function (con) {
                                            con.operator = "IsNot";
                                        });
                                    }
                                    if (internal.every(function (con) { return con.operator === "IsBlank"; }) && expr._kind === filter_1.QueryComparisonKind.DoesNotContain) {
                                        internal.forEach(function (con) {
                                            con.operator = "IsNotBlank";
                                        });
                                    }
                                    conditions = conditions.concat(internal);
                                    return;
                                }
                                conditions.push(FilterManager.getCondition(expr));
                            }
                        });
                        return conditions;
                    };
                    FilterManager.getValue = function (expr) {
                        if (!expr) {
                            return undefined;
                        }
                        if (expr._kind === filter_1.SQExprKind.Constant) {
                            return expr.value;
                        }
                        if (expr._kind === filter_1.SQExprKind.Contains) {
                            return expr.value;
                        }
                        var exprs = [
                            expr.left,
                            expr.right,
                            expr.arg,
                        ];
                        for (var _i = 0, exprs_1 = exprs; _i < exprs_1.length; _i++) {
                            var currentExpr = exprs_1[_i];
                            var value = FilterManager.getValue(currentExpr);
                            if (value !== undefined) {
                                return value;
                            }
                        }
                    };
                    FilterManager.getCondition = function (expr) {
                        return {
                            value: FilterManager.getValue(expr),
                            operator: FilterManager.getCondictionOperatorByComparison(expr.comparison),
                        };
                    };
                    FilterManager.getBasicFilterOperator = function (kind) {
                        switch (kind) {
                            case filter_1.SQExprKind.In: {
                                return "In";
                            }
                            case filter_1.SQExprKind.And: {
                                return "All";
                            }
                            case filter_1.SQExprKind.Not: {
                                return "NotIn";
                            }
                            default:
                                return null;
                        }
                    };
                    FilterManager.getLogicalOperatorNameByKind = function (kind) {
                        switch (kind) {
                            case filter_1.SQExprKind.And: {
                                return "And";
                            }
                            case filter_1.SQExprKind.Or: {
                                return "Or";
                            }
                            default:
                                return null;
                        }
                    };
                    FilterManager.getCondictionOperatorByComparison = function (comparison) {
                        switch (comparison) {
                            case filter_1.QueryComparisonKind.Equal: {
                                return "Is";
                            }
                            case filter_1.QueryComparisonKind.Is: {
                                return "Is";
                            }
                            case filter_1.QueryComparisonKind.GreaterThan: {
                                return "GreaterThan";
                            }
                            case filter_1.QueryComparisonKind.GreaterThanOrEqual: {
                                return "GreaterThanOrEqual";
                            }
                            case filter_1.QueryComparisonKind.LessThan: {
                                return "LessThan";
                            }
                            case filter_1.QueryComparisonKind.LessThanOrEqual: {
                                return "LessThanOrEqual";
                            }
                            case filter_1.QueryComparisonKind.Contains: {
                                return "Contains";
                            }
                            case filter_1.QueryComparisonKind.DoesNotContain: {
                                return "DoesNotContain";
                            }
                            case filter_1.QueryComparisonKind.StartsWith: {
                                return "StartsWith";
                            }
                        }
                        return "None";
                    };
                    return FilterManager;
                }());
                filter_1.FilterManager = FilterManager;
            })(filter = utils.filter || (utils.filter = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var interactivity;
            (function (interactivity) {
                // powerbi.extensibility.utils.type
                var ArrayExtensions = powerbi.extensibility.utils.type.ArrayExtensions;
                /**
                 * Factory method to create an IInteractivityService instance.
                 */
                function createInteractivityService(hostServices) {
                    return new InteractivityService(hostServices);
                }
                interactivity.createInteractivityService = createInteractivityService;
                /**
                * Creates a clear an svg rect to catch clear clicks.
                */
                function appendClearCatcher(selection) {
                    return selection
                        .append("rect")
                        .classed("clearCatcher", true)
                        .attr({ width: "100%", height: "100%" });
                }
                interactivity.appendClearCatcher = appendClearCatcher;
                function dataHasSelection(data) {
                    for (var i = 0, ilen = data.length; i < ilen; i++) {
                        if (data[i].selected)
                            return true;
                    }
                    return false;
                }
                interactivity.dataHasSelection = dataHasSelection;
                // It's a temporary function for compatibility with API 2.1
                // It will probably be removed after API 2.2 release
                function checkDatapointAgainstSelectedIds(dataPoint, selectedIds) {
                    return selectedIds.some(function (selectionId) {
                        var measuredSelectionId = selectionId;
                        var otherSelectionId = dataPoint.identity;
                        // if the first selectionId is built only from measures then compare measures
                        if (!measuredSelectionId.dataMap && measuredSelectionId.compareMeasures(measuredSelectionId.measures, otherSelectionId.measures)) {
                            return true;
                        }
                        var selectorOne = measuredSelectionId.getSelector();
                        var selectorTwo = otherSelectionId.getSelector();
                        // if the first or the second selectionId doesn't have data then return false
                        if (!selectorOne.data || !selectorTwo.data) {
                            return false;
                        }
                        var _loop_1 = function (dataRepition) {
                            if (!selectorTwo.data.some(function (dataI) { return JSON.stringify(dataI) === JSON.stringify(dataRepition); })) {
                                return { value: false };
                            }
                        };
                        // At this point both CVSelectionId's got data, we see if the first selectionId data is a subset of the second selectionId data, if not return false
                        for (var _i = 0, _a = selectorOne.data; _i < _a.length; _i++) {
                            var dataRepition = _a[_i];
                            var state_1 = _loop_1(dataRepition);
                            if (typeof state_1 === "object")
                                return state_1.value;
                        }
                        return true;
                    });
                }
                interactivity.checkDatapointAgainstSelectedIds = checkDatapointAgainstSelectedIds;
                var InteractivityService = (function () {
                    function InteractivityService(hostServices) {
                        var _this = this;
                        // References
                        this.renderSelectionInVisual = function () { };
                        this.renderSelectionInLegend = function () { };
                        this.renderSelectionInLabels = function () { };
                        // Selection state
                        this.selectedIds = [];
                        this.isInvertedSelectionMode = false;
                        this.selectionManager = hostServices.createSelectionManager();
                        if (this.selectionManager.registerOnSelectCallback) {
                            this.selectionManager.registerOnSelectCallback(function () {
                                _this.restoreSelection(_this.selectionManager.getSelectionIds().slice());
                            });
                        }
                    }
                    // IInteractivityService Implementation
                    /** Binds the visual to the interactivityService */
                    InteractivityService.prototype.bind = function (dataPoints, behavior, behaviorOptions, options) {
                        var _this = this;
                        // Bind the data
                        if (options && options.overrideSelectionFromData) {
                            // Override selection state from data points if needed
                            this.takeSelectionStateFromDataPoints(dataPoints);
                        }
                        if (options) {
                            if (options.isLegend) {
                                // Bind to legend data instead of normal data if isLegend
                                this.selectableLegendDataPoints = dataPoints;
                                this.renderSelectionInLegend = function () { return behavior.renderSelection(_this.legendHasSelection()); };
                            }
                            else if (options.isLabels) {
                                // Bind to label data instead of normal data if isLabels
                                this.selectableLabelsDataPoints = dataPoints;
                                this.renderSelectionInLabels = function () { return behavior.renderSelection(_this.labelsHasSelection()); };
                            }
                            else {
                                this.selectableDataPoints = dataPoints;
                                this.renderSelectionInVisual = function () { return behavior.renderSelection(_this.hasSelection()); };
                            }
                        }
                        else {
                            this.selectableDataPoints = dataPoints;
                            this.renderSelectionInVisual = function () { return behavior.renderSelection(_this.hasSelection()); };
                        }
                        behavior.bindEvents(behaviorOptions, this);
                        // Sync data points with current selection state
                        this.syncSelectionState();
                    };
                    InteractivityService.prototype.clearSelectedIds = function () {
                        ArrayExtensions.clear(this.selectedIds);
                    };
                    /**
                     * Sets the selected state of all selectable data points to false and invokes the behavior's select command.
                     */
                    InteractivityService.prototype.clearSelection = function () {
                        this.clearSelectedIds();
                        this.applyToAllSelectableDataPoints(function (dataPoint) { return dataPoint.selected = false; });
                        this.renderAll();
                    };
                    InteractivityService.prototype.applySelectionStateToData = function (dataPoints, hasHighlights) {
                        if (hasHighlights && this.hasSelection()) {
                            var selectionIds = (this.selectionManager.getSelectionIds() || []);
                            ArrayExtensions.clear(this.selectedIds);
                            ArrayExtensions.clear(selectionIds);
                        }
                        for (var _i = 0, dataPoints_1 = dataPoints; _i < dataPoints_1.length; _i++) {
                            var dataPoint = dataPoints_1[_i];
                            dataPoint.selected = checkDatapointAgainstSelectedIds(dataPoint, this.selectedIds);
                        }
                        return this.hasSelection();
                    };
                    /**
                     * Apply new selections to change internal state of interactivity service
                     */
                    InteractivityService.prototype.restoreSelection = function (selectionIds) {
                        this.clearSelection();
                        this.selectedIds = selectionIds;
                        this.syncSelectionState();
                        this.renderAll();
                    };
                    /**
                     * Checks whether there is at least one item selected.
                     */
                    InteractivityService.prototype.hasSelection = function () {
                        return this.selectedIds.length > 0;
                    };
                    InteractivityService.prototype.legendHasSelection = function () {
                        return this.selectableLegendDataPoints ? dataHasSelection(this.selectableLegendDataPoints) : false;
                    };
                    InteractivityService.prototype.labelsHasSelection = function () {
                        return this.selectableLabelsDataPoints ? dataHasSelection(this.selectableLabelsDataPoints) : false;
                    };
                    InteractivityService.prototype.isSelectionModeInverted = function () {
                        return this.isInvertedSelectionMode;
                    };
                    // ISelectionHandler Implementation
                    InteractivityService.prototype.applySelectionFilter = function () {
                        if (!this.selectionManager) {
                            return;
                        }
                        this.selectionManager.applySelectionFilter();
                    };
                    InteractivityService.prototype.handleSelection = function (dataPoints, multiSelect) {
                        // defect 7067397: should not happen so assert but also don't continue as it's
                        // causing a lot of error telemetry in desktop.
                        if (!dataPoints) {
                            return;
                        }
                        this.select(dataPoints, multiSelect);
                        this.sendSelectionToHost();
                        this.renderAll();
                    };
                    InteractivityService.prototype.handleClearSelection = function () {
                        this.clearSelection();
                        this.sendSelectionToHost();
                    };
                    /**
                     * Syncs the selection state for all data points that have the same category. Returns
                     * true if the selection state was out of sync and corrections were made; false if
                     * the data is already in sync with the service.
                     *
                     * If the data is not compatible with the current service's current selection state,
                     * the state is cleared and the cleared selection is sent to the host.
                     *
                     * Ignores series for now, since we don't support series selection at the moment.
                     */
                    InteractivityService.prototype.syncSelectionState = function () {
                        if (this.isInvertedSelectionMode) {
                            return this.syncSelectionStateInverted();
                        }
                        if (!this.selectableDataPoints && !this.selectableLegendDataPoints) {
                            return;
                        }
                        if (this.selectableDataPoints) {
                            InteractivityService.updateSelectableDataPointsBySelectedIds(this.selectableDataPoints, this.selectedIds);
                        }
                        if (this.selectableLegendDataPoints) {
                            InteractivityService.updateSelectableDataPointsBySelectedIds(this.selectableLegendDataPoints, this.selectedIds);
                        }
                        if (this.selectableLabelsDataPoints) {
                            var _loop_2 = function (labelsDataPoint) {
                                labelsDataPoint.selected = this_1.selectedIds.some(function (value) {
                                    return value.includes(labelsDataPoint.identity);
                                });
                            };
                            var this_1 = this;
                            for (var _i = 0, _a = this.selectableLabelsDataPoints; _i < _a.length; _i++) {
                                var labelsDataPoint = _a[_i];
                                _loop_2(labelsDataPoint);
                            }
                        }
                    };
                    InteractivityService.prototype.syncSelectionStateInverted = function () {
                        var selectedIds = this.selectedIds;
                        var selectableDataPoints = this.selectableDataPoints;
                        if (!selectableDataPoints)
                            return;
                        if (selectedIds.length === 0) {
                            for (var _i = 0, selectableDataPoints_1 = selectableDataPoints; _i < selectableDataPoints_1.length; _i++) {
                                var dataPoint = selectableDataPoints_1[_i];
                                dataPoint.selected = false;
                            }
                        }
                        else {
                            var _loop_3 = function (dataPoint) {
                                if (selectedIds.some(function (value) { return value.includes(dataPoint.identity); })) {
                                    dataPoint.selected = true;
                                }
                                else if (dataPoint.selected) {
                                    dataPoint.selected = false;
                                }
                            };
                            for (var _a = 0, selectableDataPoints_2 = selectableDataPoints; _a < selectableDataPoints_2.length; _a++) {
                                var dataPoint = selectableDataPoints_2[_a];
                                _loop_3(dataPoint);
                            }
                        }
                    };
                    // Private utility methods
                    InteractivityService.prototype.renderAll = function () {
                        this.renderSelectionInVisual();
                        this.renderSelectionInLegend();
                        this.renderSelectionInLabels();
                    };
                    /** Marks a data point as selected and syncs selection with the host. */
                    InteractivityService.prototype.select = function (dataPoints, multiSelect) {
                        var _this = this;
                        var selectableDataPoints = [].concat(dataPoints);
                        var originalSelectedIds = this.selectedIds.slice();
                        if (!multiSelect || !selectableDataPoints.length) {
                            this.clearSelectedIds();
                        }
                        selectableDataPoints.forEach(function (dataPoint) {
                            var shouldDataPointBeSelected = !checkDatapointAgainstSelectedIds(dataPoint, originalSelectedIds);
                            _this.selectSingleDataPoint(dataPoint, shouldDataPointBeSelected);
                        });
                        this.syncSelectionState();
                    };
                    InteractivityService.prototype.selectSingleDataPoint = function (dataPoint, shouldDataPointBeSelected) {
                        if (!dataPoint || !dataPoint.identity) {
                            return;
                        }
                        var identity = dataPoint.identity;
                        if (shouldDataPointBeSelected) {
                            dataPoint.selected = true;
                            this.selectedIds.push(identity);
                            if (identity.hasIdentity()) {
                                this.removeSelectionIdsWithOnlyMeasures();
                            }
                            else {
                                this.removeSelectionIdsExceptOnlyMeasures();
                            }
                        }
                        else {
                            dataPoint.selected = false;
                            this.removeId(identity);
                        }
                    };
                    InteractivityService.prototype.removeId = function (toRemove) {
                        var selectedIds = this.selectedIds;
                        for (var i = selectedIds.length - 1; i > -1; i--) {
                            var currentId = selectedIds[i];
                            if (toRemove.includes(currentId))
                                selectedIds.splice(i, 1);
                        }
                    };
                    InteractivityService.prototype.sendSelectionToHost = function () {
                        if (!this.selectionManager) {
                            return;
                        }
                        if (this.selectedIds && this.selectedIds.length) {
                            this.selectionManager.select(this.selectedIds.slice());
                        }
                        else {
                            this.selectionManager.clear();
                        }
                    };
                    InteractivityService.prototype.takeSelectionStateFromDataPoints = function (dataPoints) {
                        var selectedIds = this.selectedIds;
                        // Replace the existing selectedIds rather than merging.
                        ArrayExtensions.clear(selectedIds);
                        for (var _i = 0, dataPoints_2 = dataPoints; _i < dataPoints_2.length; _i++) {
                            var dataPoint = dataPoints_2[_i];
                            if (dataPoint.selected) {
                                selectedIds.push(dataPoint.identity);
                            }
                        }
                    };
                    InteractivityService.prototype.applyToAllSelectableDataPoints = function (action) {
                        var selectableDataPoints = this.selectableDataPoints;
                        var selectableLegendDataPoints = this.selectableLegendDataPoints;
                        var selectableLabelsDataPoints = this.selectableLabelsDataPoints;
                        if (selectableDataPoints) {
                            for (var _i = 0, selectableDataPoints_3 = selectableDataPoints; _i < selectableDataPoints_3.length; _i++) {
                                var dataPoint = selectableDataPoints_3[_i];
                                action(dataPoint);
                            }
                        }
                        if (selectableLegendDataPoints) {
                            for (var _a = 0, selectableLegendDataPoints_1 = selectableLegendDataPoints; _a < selectableLegendDataPoints_1.length; _a++) {
                                var dataPoint = selectableLegendDataPoints_1[_a];
                                action(dataPoint);
                            }
                        }
                        if (selectableLabelsDataPoints) {
                            for (var _b = 0, selectableLabelsDataPoints_1 = selectableLabelsDataPoints; _b < selectableLabelsDataPoints_1.length; _b++) {
                                var dataPoint = selectableLabelsDataPoints_1[_b];
                                action(dataPoint);
                            }
                        }
                    };
                    InteractivityService.updateSelectableDataPointsBySelectedIds = function (selectableDataPoints, selectedIds) {
                        var foundMatchingId = false;
                        for (var _i = 0, selectableDataPoints_4 = selectableDataPoints; _i < selectableDataPoints_4.length; _i++) {
                            var dataPoint = selectableDataPoints_4[_i];
                            dataPoint.selected = checkDatapointAgainstSelectedIds(dataPoint, selectedIds);
                            if (dataPoint.selected)
                                foundMatchingId = true;
                        }
                        return foundMatchingId;
                    };
                    InteractivityService.prototype.removeSelectionIdsWithOnlyMeasures = function () {
                        this.selectedIds = this.selectedIds.filter(function (identity) { return identity.hasIdentity(); });
                    };
                    InteractivityService.prototype.removeSelectionIdsExceptOnlyMeasures = function () {
                        this.selectedIds = this.selectedIds.filter(function (identity) { return !identity.hasIdentity(); });
                    };
                    return InteractivityService;
                }());
                interactivity.InteractivityService = InteractivityService;
            })(interactivity = utils.interactivity || (utils.interactivity = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var interactivity;
            (function (interactivity) {
                var interactivityUtils;
                (function (interactivityUtils) {
                    function getPositionOfLastInputEvent() {
                        return {
                            x: d3.event.clientX,
                            y: d3.event.clientY
                        };
                    }
                    interactivityUtils.getPositionOfLastInputEvent = getPositionOfLastInputEvent;
                    function registerStandardSelectionHandler(selection, selectionHandler) {
                        selection.on("click", function (d) { return handleSelection(d, selectionHandler); });
                    }
                    interactivityUtils.registerStandardSelectionHandler = registerStandardSelectionHandler;
                    function registerGroupSelectionHandler(group, selectionHandler) {
                        group.on("click", function () {
                            var target = d3.event.target, d = d3.select(target).datum();
                            handleSelection(d, selectionHandler);
                        });
                    }
                    interactivityUtils.registerGroupSelectionHandler = registerGroupSelectionHandler;
                    function handleSelection(d, selectionHandler) {
                        selectionHandler.handleSelection(d, d3.event.ctrlKey);
                    }
                })(interactivityUtils = interactivity.interactivityUtils || (interactivity.interactivityUtils = {}));
            })(interactivity = utils.interactivity || (utils.interactivity = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Custom implementation of Globalize from PowerView team
// The public implementation from https://github.com/borisyankov/DefinitelyTyped/tree/master/globalize doesn't work
/* tslint:disable:no-var-keyword */
var Globalize = Globalize || window["Globalize"];
/* tslint:enable */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var LocalStorageService = (function () {
                    function LocalStorageService() {
                    }
                    LocalStorageService.prototype.getData = function (key) {
                        try {
                            if (localStorage) {
                                var value = localStorage[key];
                                if (value) {
                                    return JSON.parse(value);
                                }
                            }
                        }
                        catch (exception) { }
                        return null;
                    };
                    LocalStorageService.prototype.setData = function (key, data) {
                        try {
                            if (localStorage) {
                                localStorage[key] = JSON.stringify(data);
                            }
                        }
                        catch (e) { }
                    };
                    return LocalStorageService;
                }());
                formatting.LocalStorageService = LocalStorageService;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var EphemeralStorageService = (function () {
                    function EphemeralStorageService(clearCacheInterval) {
                        this.cache = {};
                        this.clearCacheInterval = (clearCacheInterval != null)
                            ? clearCacheInterval
                            : EphemeralStorageService.defaultClearCacheInterval;
                        this.clearCache();
                    }
                    EphemeralStorageService.prototype.getData = function (key) {
                        return this.cache[key];
                    };
                    EphemeralStorageService.prototype.setData = function (key, data) {
                        var _this = this;
                        this.cache[key] = data;
                        if (this.clearCacheTimerId == null) {
                            this.clearCacheTimerId = setTimeout(function () { return _this.clearCache(); }, this.clearCacheInterval);
                        }
                    };
                    EphemeralStorageService.prototype.clearCache = function () {
                        this.cache = {};
                        this.clearCacheTimerId = undefined;
                    };
                    return EphemeralStorageService;
                }());
                EphemeralStorageService.defaultClearCacheInterval = (1000 * 60 * 60 * 24); // 1 day
                formatting.EphemeralStorageService = EphemeralStorageService;
                formatting.ephemeralStorageService = new EphemeralStorageService();
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /**
                 * Extensions to String class.
                 */
                var stringExtensions;
                (function (stringExtensions) {
                    var HtmlTagRegex = new RegExp("[<>]", "g");
                    /**
                     * Checks if a string ends with a sub-string.
                     */
                    function endsWith(str, suffix) {
                        return str.indexOf(suffix, str.length - suffix.length) !== -1;
                    }
                    stringExtensions.endsWith = endsWith;
                    function format() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var s = args[0];
                        if (isNullOrUndefinedOrWhiteSpaceString(s))
                            return s;
                        for (var i = 0; i < args.length - 1; i++) {
                            var reg = new RegExp("\\{" + i + "\\}", "gm");
                            s = s.replace(reg, args[i + 1]);
                        }
                        return s;
                    }
                    stringExtensions.format = format;
                    /**
                     * Compares two strings for equality, ignoring case.
                     */
                    function equalIgnoreCase(a, b) {
                        return stringExtensions.normalizeCase(a) === stringExtensions.normalizeCase(b);
                    }
                    stringExtensions.equalIgnoreCase = equalIgnoreCase;
                    function startsWithIgnoreCase(a, b) {
                        var normalizedSearchString = stringExtensions.normalizeCase(b);
                        return stringExtensions.normalizeCase(a).indexOf(normalizedSearchString) === 0;
                    }
                    stringExtensions.startsWithIgnoreCase = startsWithIgnoreCase;
                    function startsWith(a, b) {
                        return a.indexOf(b) === 0;
                    }
                    stringExtensions.startsWith = startsWith;
                    /** Determines whether a string contains a specified substring (by case-sensitive comparison). */
                    function contains(source, substring) {
                        if (source == null)
                            return false;
                        return source.indexOf(substring) !== -1;
                    }
                    stringExtensions.contains = contains;
                    /** Determines whether a string contains a specified substring (while ignoring case). */
                    function containsIgnoreCase(source, substring) {
                        if (source == null)
                            return false;
                        return contains(normalizeCase(source), normalizeCase(substring));
                    }
                    stringExtensions.containsIgnoreCase = containsIgnoreCase;
                    /**
                     * Normalizes case for a string.
                     * Used by equalIgnoreCase method.
                     */
                    function normalizeCase(value) {
                        return value.toUpperCase();
                    }
                    stringExtensions.normalizeCase = normalizeCase;
                    /**
                     * Receives a string and returns an ArrayBuffer of its characters.
                     * @return An ArrayBuffer of the string's characters.
                     * If the string is empty or null or undefined - returns null.
                     */
                    function stringToArrayBuffer(str) {
                        if (isNullOrEmpty(str)) {
                            return null;
                        }
                        var buffer = new ArrayBuffer(str.length);
                        var bufferView = new Uint8Array(buffer);
                        for (var i = 0, strLen = str.length; i < strLen; i++) {
                            bufferView[i] = str.charCodeAt(i);
                        }
                        return bufferView;
                    }
                    stringExtensions.stringToArrayBuffer = stringToArrayBuffer;
                    /**
                     * Is string null or empty or undefined?
                     * @return True if the value is null or undefined or empty string,
                     * otherwise false.
                     */
                    function isNullOrEmpty(value) {
                        return (value == null) || (value.length === 0);
                    }
                    stringExtensions.isNullOrEmpty = isNullOrEmpty;
                    /**
                     * Returns true if the string is null, undefined, empty, or only includes white spaces.
                     * @return True if the str is null, undefined, empty, or only includes white spaces,
                     * otherwise false.
                     */
                    function isNullOrUndefinedOrWhiteSpaceString(str) {
                        return stringExtensions.isNullOrEmpty(str) || stringExtensions.isNullOrEmpty(str.trim());
                    }
                    stringExtensions.isNullOrUndefinedOrWhiteSpaceString = isNullOrUndefinedOrWhiteSpaceString;
                    /**
                     * Returns a value indicating whether the str contains any whitespace.
                     */
                    function containsWhitespace(str) {
                        var expr = /\s/;
                        return expr.test(str);
                    }
                    stringExtensions.containsWhitespace = containsWhitespace;
                    /**
                     * Returns a value indicating whether the str is a whitespace string.
                     */
                    function isWhitespace(str) {
                        return str.trim() === "";
                    }
                    stringExtensions.isWhitespace = isWhitespace;
                    /**
                     * Returns the string with any trailing whitespace from str removed.
                     */
                    function trimTrailingWhitespace(str) {
                        return str.replace(/\s+$/, "");
                    }
                    stringExtensions.trimTrailingWhitespace = trimTrailingWhitespace;
                    /**
                     * Returns the string with any leading and trailing whitespace from str removed.
                     */
                    function trimWhitespace(str) {
                        return str.replace(/^\s+/, "").replace(/\s+$/, "");
                    }
                    stringExtensions.trimWhitespace = trimWhitespace;
                    /**
                     * Returns length difference between the two provided strings.
                     */
                    function getLengthDifference(left, right) {
                        return Math.abs(left.length - right.length);
                    }
                    stringExtensions.getLengthDifference = getLengthDifference;
                    /**
                     * Repeat char or string several times.
                     * @param char The string to repeat.
                     * @param count How many times to repeat the string.
                     */
                    function repeat(char, count) {
                        var result = "";
                        for (var i = 0; i < count; i++) {
                            result += char;
                        }
                        return result;
                    }
                    stringExtensions.repeat = repeat;
                    /**
                     * Replace all the occurrences of the textToFind in the text with the textToReplace.
                     * @param text The original string.
                     * @param textToFind Text to find in the original string.
                     * @param textToReplace New text replacing the textToFind.
                     */
                    function replaceAll(text, textToFind, textToReplace) {
                        if (!textToFind)
                            return text;
                        var pattern = escapeStringForRegex(textToFind);
                        return text.replace(new RegExp(pattern, "gi"), textToReplace);
                    }
                    stringExtensions.replaceAll = replaceAll;
                    function ensureUniqueNames(names) {
                        var usedNames = {};
                        // Make sure we are giving fair chance for all columns to stay with their original name
                        // First we fill the used names map to contain all the original unique names from the list.
                        for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
                            var name_1 = names_1[_i];
                            usedNames[name_1] = false;
                        }
                        var uniqueNames = [];
                        // Now we go over all names and find a unique name for each
                        for (var _a = 0, names_2 = names; _a < names_2.length; _a++) {
                            var name_2 = names_2[_a];
                            var uniqueName = name_2;
                            // If the (original) column name is already taken lets try to find another name
                            if (usedNames[uniqueName]) {
                                var counter = 0;
                                // Find a name that is not already in the map
                                while (usedNames[uniqueName] !== undefined) {
                                    uniqueName = name_2 + "." + (++counter);
                                }
                            }
                            uniqueNames.push(uniqueName);
                            usedNames[uniqueName] = true;
                        }
                        return uniqueNames;
                    }
                    stringExtensions.ensureUniqueNames = ensureUniqueNames;
                    /**
                     * Returns a name that is not specified in the values.
                     */
                    function findUniqueName(usedNames, baseName) {
                        // Find a unique name
                        var i = 0, uniqueName = baseName;
                        while (usedNames[uniqueName]) {
                            uniqueName = baseName + (++i);
                        }
                        return uniqueName;
                    }
                    stringExtensions.findUniqueName = findUniqueName;
                    function constructNameFromList(list, separator, maxCharacter) {
                        var labels = [];
                        var exceeded;
                        var length = 0;
                        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                            var item = list_1[_i];
                            if (length + item.length > maxCharacter && labels.length > 0) {
                                exceeded = true;
                                break;
                            }
                            labels.push(item);
                            length += item.length;
                        }
                        var separatorWithSpace = " " + separator + " ";
                        var name = labels.join(separatorWithSpace);
                        if (exceeded)
                            name += separatorWithSpace + "...";
                        return name;
                    }
                    stringExtensions.constructNameFromList = constructNameFromList;
                    function escapeStringForRegex(s) {
                        return s.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1");
                    }
                    stringExtensions.escapeStringForRegex = escapeStringForRegex;
                    /**
                     * Remove file name reserved characters <>:"/\|?* from input string.
                     */
                    function normalizeFileName(fileName) {
                        return fileName.replace(/[\<\>\:"\/\\\|\?*]/g, "");
                    }
                    stringExtensions.normalizeFileName = normalizeFileName;
                    /**
                     * Similar to JSON.stringify, but strips away escape sequences so that the resulting
                     * string is human-readable (and parsable by JSON formatting/validating tools).
                     */
                    function stringifyAsPrettyJSON(object) {
                        // let specialCharacterRemover = (key: string, value: string) => value.replace(/[^\w\s]/gi, "");
                        return JSON.stringify(object /*, specialCharacterRemover*/);
                    }
                    stringExtensions.stringifyAsPrettyJSON = stringifyAsPrettyJSON;
                    /**
                     * Derive a CLS-compliant name from a specified string.  If no allowed characters are present, return a fallback string instead.
                     * TODO (6708134): this should have a fully Unicode-aware implementation
                     */
                    function deriveClsCompliantName(input, fallback) {
                        var result = input.replace(/^[^A-Za-z]*/g, "").replace(/[ :\.\/\\\-\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000]/g, "_").replace(/[\W]/g, "");
                        return result.length > 0 ? result : fallback;
                    }
                    stringExtensions.deriveClsCompliantName = deriveClsCompliantName;
                    /** Performs cheap sanitization by stripping away HTML tag (<>) characters. */
                    function stripTagDelimiters(s) {
                        return s.replace(HtmlTagRegex, "");
                    }
                    stringExtensions.stripTagDelimiters = stripTagDelimiters;
                })(stringExtensions = formatting.stringExtensions || (formatting.stringExtensions = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var wordBreaker;
                (function (wordBreaker) {
                    var SPACE = " ";
                    var BREAKERS_REGEX = /[\s\n]+/g;
                    function search(index, content, backward) {
                        if (backward) {
                            for (var i = index - 1; i > -1; i--) {
                                if (hasBreakers(content[i]))
                                    return i + 1;
                            }
                        }
                        else {
                            for (var i = index, ilen = content.length; i < ilen; i++) {
                                if (hasBreakers(content[i]))
                                    return i;
                            }
                        }
                        return backward ? 0 : content.length;
                    }
                    /**
                     * Find the word nearest the cursor specified within content
                     * @param index - point within content to search forward/backward from
                     * @param content - string to search
                    */
                    function find(index, content) {
                        var result = { start: 0, end: 0 };
                        if (content.length === 0) {
                            return result;
                        }
                        result.start = search(index, content, true);
                        result.end = search(index, content, false);
                        return result;
                    }
                    wordBreaker.find = find;
                    /**
                     * Test for presence of breakers within content
                     * @param content - string to test
                    */
                    function hasBreakers(content) {
                        BREAKERS_REGEX.lastIndex = 0;
                        return BREAKERS_REGEX.test(content);
                    }
                    wordBreaker.hasBreakers = hasBreakers;
                    /**
                     * Count the number of pieces when broken by BREAKERS_REGEX
                     * ~2.7x faster than WordBreaker.split(content).length
                     * @param content - string to break and count
                    */
                    function wordCount(content) {
                        var count = 1;
                        BREAKERS_REGEX.lastIndex = 0;
                        BREAKERS_REGEX.exec(content);
                        while (BREAKERS_REGEX.lastIndex !== 0) {
                            count++;
                            BREAKERS_REGEX.exec(content);
                        }
                        return count;
                    }
                    wordBreaker.wordCount = wordCount;
                    function getMaxWordWidth(content, textWidthMeasurer, properties) {
                        var words = split(content);
                        var maxWidth = 0;
                        for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
                            var w = words_1[_i];
                            properties.text = w;
                            maxWidth = Math.max(maxWidth, textWidthMeasurer(properties));
                        }
                        return maxWidth;
                    }
                    wordBreaker.getMaxWordWidth = getMaxWordWidth;
                    function split(content) {
                        return content.split(BREAKERS_REGEX);
                    }
                    function getWidth(content, properties, textWidthMeasurer) {
                        properties.text = content;
                        return textWidthMeasurer(properties);
                    }
                    function truncate(content, properties, truncator, maxWidth) {
                        properties.text = content;
                        return truncator(properties, maxWidth);
                    }
                    /**
                     * Split content by breakers (words) and greedy fit as many words
                     * into each index in the result based on max width and number of lines
                     * e.g. Each index in result corresponds to a line of content
                     *      when used by AxisHelper.LabelLayoutStrategy.wordBreak
                     * @param content - string to split
                     * @param properties - text properties to be used by @param:textWidthMeasurer
                     * @param textWidthMeasurer - function to calculate width of given text content
                     * @param maxWidth - maximum allowed width of text content in each result
                     * @param maxNumLines - maximum number of results we will allow, valid values must be greater than 0
                     * @param truncator - (optional) if specified, used as a function to truncate content to a given width
                    */
                    function splitByWidth(content, properties, textWidthMeasurer, maxWidth, maxNumLines, truncator) {
                        // Default truncator returns string as-is
                        truncator = truncator ? truncator : function (properties, maxWidth) { return properties.text; };
                        var result = [];
                        var words = split(content);
                        var usedWidth = 0;
                        var wordsInLine = [];
                        for (var _i = 0, words_2 = words; _i < words_2.length; _i++) {
                            var word = words_2[_i];
                            // Last line? Just add whatever is left
                            if ((maxNumLines > 0) && (result.length >= maxNumLines - 1)) {
                                wordsInLine.push(word);
                                continue;
                            }
                            // Determine width if we add this word
                            // Account for SPACE we will add when joining...
                            var wordWidth = wordsInLine.length === 0
                                ? getWidth(word, properties, textWidthMeasurer)
                                : getWidth(SPACE + word, properties, textWidthMeasurer);
                            // If width would exceed max width,
                            // then push used words and start new split result
                            if (usedWidth + wordWidth > maxWidth) {
                                // Word alone exceeds max width, just add it.
                                if (wordsInLine.length === 0) {
                                    result.push(truncate(word, properties, truncator, maxWidth));
                                    usedWidth = 0;
                                    wordsInLine = [];
                                    continue;
                                }
                                result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
                                usedWidth = 0;
                                wordsInLine = [];
                            }
                            // ...otherwise, add word and continue
                            wordsInLine.push(word);
                            usedWidth += wordWidth;
                        }
                        // Push remaining words onto result (if any)
                        if (wordsInLine && wordsInLine.length) {
                            result.push(truncate(wordsInLine.join(SPACE), properties, truncator, maxWidth));
                        }
                        return result;
                    }
                    wordBreaker.splitByWidth = splitByWidth;
                })(wordBreaker = formatting.wordBreaker || (formatting.wordBreaker = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** Enumeration of DateTimeUnits */
                var DateTimeUnit;
                (function (DateTimeUnit) {
                    DateTimeUnit[DateTimeUnit["Year"] = 0] = "Year";
                    DateTimeUnit[DateTimeUnit["Month"] = 1] = "Month";
                    DateTimeUnit[DateTimeUnit["Week"] = 2] = "Week";
                    DateTimeUnit[DateTimeUnit["Day"] = 3] = "Day";
                    DateTimeUnit[DateTimeUnit["Hour"] = 4] = "Hour";
                    DateTimeUnit[DateTimeUnit["Minute"] = 5] = "Minute";
                    DateTimeUnit[DateTimeUnit["Second"] = 6] = "Second";
                    DateTimeUnit[DateTimeUnit["Millisecond"] = 7] = "Millisecond";
                })(DateTimeUnit = formatting.DateTimeUnit || (formatting.DateTimeUnit = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var PixelConverter = powerbi.extensibility.utils.type.PixelConverter;
                var Prototype = powerbi.extensibility.utils.type.Prototype;
                // powerbi.extensibility.utils.formatting
                var wordBreaker = powerbi.extensibility.utils.formatting.wordBreaker;
                var textMeasurementService;
                (function (textMeasurementService) {
                    var ellipsis = "...";
                    var spanElement;
                    var svgTextElement;
                    var canvasCtx;
                    var fallbackFontFamily;
                    /**
                     * Idempotent function for adding the elements to the DOM.
                     */
                    function ensureDOM() {
                        if (spanElement) {
                            return;
                        }
                        spanElement = document.createElement("span");
                        document.body.appendChild(spanElement);
                        // The style hides the svg element from the canvas, preventing canvas from scrolling down to show svg black square.
                        var svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        svgElement.setAttribute("height", "0");
                        svgElement.setAttribute("width", "0");
                        svgElement.setAttribute("position", "absolute");
                        svgTextElement = document.createElementNS("http://www.w3.org/2000/svg", "text");
                        svgElement.appendChild(svgTextElement);
                        document.body.appendChild(svgElement);
                        var canvasElement = document.createElement("canvas");
                        canvasCtx = canvasElement.getContext("2d");
                        var style = window.getComputedStyle(svgTextElement);
                        if (style) {
                            fallbackFontFamily = style.fontFamily;
                        }
                        else {
                            fallbackFontFamily = "";
                        }
                    }
                    /**
                     * Removes spanElement from DOM.
                     */
                    function removeSpanElement() {
                        if (spanElement && spanElement.remove) {
                            spanElement.remove();
                        }
                        spanElement = null;
                    }
                    textMeasurementService.removeSpanElement = removeSpanElement;
                    /**
                     * This method measures the width of the text with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextWidth(textProperties, text) {
                        ensureDOM();
                        canvasCtx.font =
                            (textProperties.fontStyle || "") + " " +
                                (textProperties.fontVariant || "") + " " +
                                (textProperties.fontWeight || "") + " " +
                                textProperties.fontSize + " " +
                                (textProperties.fontFamily || fallbackFontFamily);
                        return canvasCtx.measureText(text || textProperties.text).width;
                    }
                    textMeasurementService.measureSvgTextWidth = measureSvgTextWidth;
                    /**
                     * This method return the rect with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextRect(textProperties, text) {
                        ensureDOM();
                        // Removes DOM elements faster than innerHTML
                        while (svgTextElement.firstChild) {
                            svgTextElement.removeChild(svgTextElement.firstChild);
                        }
                        svgTextElement.setAttribute("style", null);
                        svgTextElement.style.visibility = "hidden";
                        svgTextElement.style.fontFamily = textProperties.fontFamily || fallbackFontFamily;
                        svgTextElement.style.fontVariant = textProperties.fontVariant;
                        svgTextElement.style.fontSize = textProperties.fontSize;
                        svgTextElement.style.fontWeight = textProperties.fontWeight;
                        svgTextElement.style.fontStyle = textProperties.fontStyle;
                        svgTextElement.style.whiteSpace = textProperties.whiteSpace || "nowrap";
                        svgTextElement.appendChild(document.createTextNode(text || textProperties.text));
                        // We're expecting the browser to give a synchronous measurement here
                        // We're using SVGTextElement because it works across all browsers
                        return svgTextElement.getBBox();
                    }
                    textMeasurementService.measureSvgTextRect = measureSvgTextRect;
                    /**
                     * This method measures the height of the text with the given SVG text properties.
                     * @param textProperties The text properties to use for text measurement.
                     * @param text The text to measure.
                     */
                    function measureSvgTextHeight(textProperties, text) {
                        return measureSvgTextRect(textProperties, text).height;
                    }
                    textMeasurementService.measureSvgTextHeight = measureSvgTextHeight;
                    /**
                     * This method returns the text Rect with the given SVG text properties.
                     * Does NOT return text width; obliterates text value
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextRect(textProperties) {
                        var propertiesKey = textProperties.fontFamily + textProperties.fontSize;
                        var rect = formatting.ephemeralStorageService.getData(propertiesKey);
                        if (rect == null) {
                            // To estimate we check the height of a particular character, once it is cached, subsequent
                            // calls should always get the height from the cache (regardless of the text).
                            var estimatedTextProperties = {
                                fontFamily: textProperties.fontFamily,
                                fontSize: textProperties.fontSize,
                                text: "M",
                            };
                            rect = textMeasurementService.measureSvgTextRect(estimatedTextProperties);
                            // NOTE: In some cases (disconnected/hidden DOM) we may provide incorrect measurement results (zero sized bounding-box), so
                            // we only store values in the cache if we are confident they are correct.
                            if (rect.height > 0)
                                formatting.ephemeralStorageService.setData(propertiesKey, rect);
                        }
                        return rect;
                    }
                    /**
                     * This method returns the text Rect with the given SVG text properties.
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextBaselineDelta(textProperties) {
                        var rect = estimateSvgTextRect(textProperties);
                        return rect.y + rect.height;
                    }
                    textMeasurementService.estimateSvgTextBaselineDelta = estimateSvgTextBaselineDelta;
                    /**
                     * This method estimates the height of the text with the given SVG text properties.
                     * @param {TextProperties} textProperties - The text properties to use for text measurement
                     */
                    function estimateSvgTextHeight(textProperties, tightFightForNumeric) {
                        if (tightFightForNumeric === void 0) { tightFightForNumeric = false; }
                        var height = estimateSvgTextRect(textProperties).height;
                        // TODO: replace it with new baseline calculation
                        if (tightFightForNumeric)
                            height *= 0.7;
                        return height;
                    }
                    textMeasurementService.estimateSvgTextHeight = estimateSvgTextHeight;
                    /**
                     * This method measures the width of the svgElement.
                     * @param svgElement The SVGTextElement to be measured.
                     */
                    function measureSvgTextElementWidth(svgElement) {
                        return measureSvgTextWidth(getSvgMeasurementProperties(svgElement));
                    }
                    textMeasurementService.measureSvgTextElementWidth = measureSvgTextElementWidth;
                    /**
                     * This method fetches the text measurement properties of the given DOM element.
                     * @param element The selector for the DOM Element.
                     */
                    function getMeasurementProperties(element) {
                        var style = window.getComputedStyle(element);
                        return {
                            text: element.value || element.textContent,
                            fontFamily: style.fontFamily,
                            fontSize: style.fontSize,
                            fontWeight: style.fontWeight,
                            fontStyle: style.fontStyle,
                            fontVariant: style.fontVariant,
                            whiteSpace: style.whiteSpace
                        };
                    }
                    textMeasurementService.getMeasurementProperties = getMeasurementProperties;
                    /**
                     * This method fetches the text measurement properties of the given SVG text element.
                     * @param element The SVGTextElement to be measured.
                     */
                    function getSvgMeasurementProperties(element) {
                        var style = window.getComputedStyle(element);
                        if (style) {
                            return {
                                text: element.textContent,
                                fontFamily: style.fontFamily,
                                fontSize: style.fontSize,
                                fontWeight: style.fontWeight,
                                fontStyle: style.fontStyle,
                                fontVariant: style.fontVariant,
                                whiteSpace: style.whiteSpace
                            };
                        }
                        else {
                            return {
                                text: element.textContent,
                                fontFamily: "",
                                fontSize: "0",
                            };
                        }
                    }
                    textMeasurementService.getSvgMeasurementProperties = getSvgMeasurementProperties;
                    /**
                     * This method returns the width of a div element.
                     * @param element The div element.
                     */
                    function getDivElementWidth(element) {
                        var style = window.getComputedStyle(element);
                        if (style)
                            return style.width;
                        else
                            return "0";
                    }
                    textMeasurementService.getDivElementWidth = getDivElementWidth;
                    /**
                     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
                     * @param textProperties The text properties (including text content) to use for text measurement.
                     * @param maxWidth The maximum width available for rendering the text.
                     */
                    function getTailoredTextOrDefault(textProperties, maxWidth) {
                        ensureDOM();
                        var strLength = textProperties.text.length;
                        if (strLength === 0) {
                            return textProperties.text;
                        }
                        var width = measureSvgTextWidth(textProperties);
                        if (width < maxWidth) {
                            return textProperties.text;
                        }
                        // Create a copy of the textProperties so we don't modify the one that's passed in.
                        var copiedTextProperties = Prototype.inherit(textProperties);
                        // Take the properties and apply them to svgTextElement
                        // Then, do the binary search to figure out the substring we want
                        // Set the substring on textElement argument
                        var text = copiedTextProperties.text = ellipsis + copiedTextProperties.text;
                        var min = 1;
                        var max = text.length;
                        var i = ellipsis.length;
                        while (min <= max) {
                            // num | 0 prefered to Math.floor(num) for performance benefits
                            i = (min + max) / 2 | 0;
                            copiedTextProperties.text = text.substr(0, i);
                            width = measureSvgTextWidth(copiedTextProperties);
                            if (maxWidth > width) {
                                min = i + 1;
                            }
                            else if (maxWidth < width) {
                                max = i - 1;
                            }
                            else {
                                break;
                            }
                        }
                        // Since the search algorithm almost never finds an exact match,
                        // it will pick one of the closest two, which could result in a
                        // value bigger with than 'maxWidth' thus we need to go back by
                        // one to guarantee a smaller width than 'maxWidth'.
                        copiedTextProperties.text = text.substr(0, i);
                        width = measureSvgTextWidth(copiedTextProperties);
                        if (width > maxWidth) {
                            i--;
                        }
                        return text.substr(ellipsis.length, i - ellipsis.length) + ellipsis;
                    }
                    textMeasurementService.getTailoredTextOrDefault = getTailoredTextOrDefault;
                    /**
                     * Compares labels text size to the available size and renders ellipses when the available size is smaller.
                     * @param textElement The SVGTextElement containing the text to render.
                     * @param maxWidth The maximum width available for rendering the text.
                     */
                    function svgEllipsis(textElement, maxWidth) {
                        var properties = getSvgMeasurementProperties(textElement);
                        var originalText = properties.text;
                        var tailoredText = getTailoredTextOrDefault(properties, maxWidth);
                        if (originalText !== tailoredText) {
                            textElement.textContent = tailoredText;
                        }
                    }
                    textMeasurementService.svgEllipsis = svgEllipsis;
                    /**
                     * Word break textContent of <text> SVG element into <tspan>s
                     * Each tspan will be the height of a single line of text
                     * @param textElement - the SVGTextElement containing the text to wrap
                     * @param maxWidth - the maximum width available
                     * @param maxHeight - the maximum height available (defaults to single line)
                     * @param linePadding - (optional) padding to add to line height
                     */
                    function wordBreak(textElement, maxWidth, maxHeight, linePadding) {
                        if (linePadding === void 0) { linePadding = 0; }
                        var properties = getSvgMeasurementProperties(textElement);
                        var height = estimateSvgTextHeight(properties) + linePadding;
                        var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
                        // Save y of parent textElement to apply as first tspan dy
                        var firstDY = textElement ? textElement.getAttribute("y") : null;
                        // Store and clear text content
                        var labelText = textElement ? textElement.textContent : null;
                        textElement.textContent = null;
                        // Append a tspan for each word broken section
                        var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
                        var fragment = document.createDocumentFragment();
                        for (var i = 0, ilen = words.length; i < ilen; i++) {
                            var dy = i === 0 ? firstDY : height;
                            properties.text = words[i];
                            var textElement_1 = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
                            textElement_1.setAttribute("x", "0");
                            textElement_1.setAttribute("dy", dy ? dy.toString() : null);
                            textElement_1.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
                            fragment.appendChild(textElement_1);
                        }
                        textElement.appendChild(fragment);
                    }
                    textMeasurementService.wordBreak = wordBreak;
                    /**
                     * Word break textContent of span element into <span>s
                     * Each span will be the height of a single line of text
                     * @param textElement - the element containing the text to wrap
                     * @param maxWidth - the maximum width available
                     * @param maxHeight - the maximum height available (defaults to single line)
                     * @param linePadding - (optional) padding to add to line height
                     */
                    function wordBreakOverflowingText(textElement, maxWidth, maxHeight, linePadding) {
                        if (linePadding === void 0) { linePadding = 0; }
                        var properties = getSvgMeasurementProperties(textElement);
                        var height = estimateSvgTextHeight(properties) + linePadding;
                        var maxNumLines = Math.max(1, Math.floor(maxHeight / height));
                        // Store and clear text content
                        var labelText = textElement.textContent;
                        textElement.textContent = null;
                        // Append a span for each word broken section
                        var words = wordBreaker.splitByWidth(labelText, properties, measureSvgTextWidth, maxWidth, maxNumLines);
                        var fragment = document.createDocumentFragment();
                        for (var i = 0; i < words.length; i++) {
                            var span = document.createElement("span");
                            span.classList.add("overflowingText");
                            span.style.width = PixelConverter.toString(maxWidth);
                            span.appendChild(document.createTextNode(words[i]));
                            span.appendChild(document.createTextNode(getTailoredTextOrDefault(properties, maxWidth)));
                            fragment.appendChild(span);
                        }
                        textElement.appendChild(fragment);
                    }
                    textMeasurementService.wordBreakOverflowingText = wordBreakOverflowingText;
                })(textMeasurementService = formatting.textMeasurementService || (formatting.textMeasurementService = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** dateUtils module provides DateTimeSequence with set of additional date manipulation routines */
                var dateUtils;
                (function (dateUtils) {
                    var MonthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    var MonthDaysLeap = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                    /**
                     * Returns bool indicating weither the provided year is a leap year.
                     * @param year - year value
                     */
                    function isLeap(year) {
                        return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
                    }
                    /**
                     * Returns number of days in the provided year/month.
                     * @param year - year value
                     * @param month - month value
                     */
                    function getMonthDays(year, month) {
                        return isLeap(year) ? MonthDaysLeap[month] : MonthDays[month];
                    }
                    /**
                     * Adds a specified number of years to the provided date.
                     * @param date - date value
                     * @param yearDelta - number of years to add
                     */
                    function addYears(date, yearDelta) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var isLeapDay = month === 2 && day === 29;
                        var result = new Date(date.getTime());
                        year = year + yearDelta;
                        if (isLeapDay && !isLeap(year)) {
                            day = 28;
                        }
                        result.setFullYear(year, month, day);
                        return result;
                    }
                    dateUtils.addYears = addYears;
                    /**
                     * Adds a specified number of months to the provided date.
                     * @param date - date value
                     * @param monthDelta - number of months to add
                     */
                    function addMonths(date, monthDelta) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var result = new Date(date.getTime());
                        year += (monthDelta - (monthDelta % 12)) / 12;
                        month += monthDelta % 12;
                        // VSTS 1325771: Certain column charts don't display any data
                        // Wrap arround the month if is after december (value 11)
                        if (month > 11) {
                            month = month % 12;
                            year++;
                        }
                        day = Math.min(day, getMonthDays(year, month));
                        result.setFullYear(year, month, day);
                        return result;
                    }
                    dateUtils.addMonths = addMonths;
                    /**
                     * Adds a specified number of weeks to the provided date.
                     * @param date - date value
                     * @param weeks - number of weeks to add
                     */
                    function addWeeks(date, weeks) {
                        return addDays(date, weeks * 7);
                    }
                    dateUtils.addWeeks = addWeeks;
                    /**
                     * Adds a specified number of days to the provided date.
                     * @param date - date value
                     * @param days - number of days to add
                     */
                    function addDays(date, days) {
                        var year = date.getFullYear();
                        var month = date.getMonth();
                        var day = date.getDate();
                        var result = new Date(date.getTime());
                        result.setFullYear(year, month, day + days);
                        return result;
                    }
                    dateUtils.addDays = addDays;
                    /**
                     * Adds a specified number of hours to the provided date.
                     * @param date - date value
                     * @param hours - number of hours to add
                     */
                    function addHours(date, hours) {
                        return new Date(date.getTime() + hours * 3600000);
                    }
                    dateUtils.addHours = addHours;
                    /**
                     * Adds a specified number of minutes to the provided date.
                     * @param date - date value
                     * @param minutes - number of minutes to add
                     */
                    function addMinutes(date, minutes) {
                        return new Date(date.getTime() + minutes * 60000);
                    }
                    dateUtils.addMinutes = addMinutes;
                    /**
                     * Adds a specified number of seconds to the provided date.
                     * @param date - date value
                     * @param seconds - number of seconds to add
                     */
                    function addSeconds(date, seconds) {
                        return new Date(date.getTime() + seconds * 1000);
                    }
                    dateUtils.addSeconds = addSeconds;
                    /**
                     * Adds a specified number of milliseconds to the provided date.
                     * @param date - date value
                     * @param milliseconds - number of milliseconds to add
                     */
                    function addMilliseconds(date, milliseconds) {
                        return new Date(date.getTime() + milliseconds);
                    }
                    dateUtils.addMilliseconds = addMilliseconds;
                })(dateUtils = formatting.dateUtils || (formatting.dateUtils = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var NumericSequenceRange = powerbi.extensibility.utils.type.NumericSequenceRange;
                var NumericSequence = powerbi.extensibility.utils.type.NumericSequence;
                var Double = powerbi.extensibility.utils.type.Double;
                // powerbi.extensibility.utils.formatting
                var DateTimeUnit = powerbi.extensibility.utils.formatting.DateTimeUnit;
                /** Repreasents the sequence of the dates/times */
                var DateTimeSequence = (function () {
                    // Constructors
                    /** Creates new instance of the DateTimeSequence */
                    function DateTimeSequence(unit) {
                        this.unit = unit;
                        this.sequence = [];
                        this.min = new Date("9999-12-31T23:59:59.999");
                        this.max = new Date("0001-01-01T00:00:00.000");
                    }
                    // Methods
                    /**
                     * Add a new Date to a sequence.
                     * @param date - date to add
                     */
                    DateTimeSequence.prototype.add = function (date) {
                        if (date < this.min) {
                            this.min = date;
                        }
                        if (date > this.max) {
                            this.max = date;
                        }
                        this.sequence.push(date);
                    };
                    // Methods
                    /**
                     * Extends the sequence to cover new date range
                     * @param min - new min to be covered by sequence
                     * @param max - new max to be covered by sequence
                     */
                    DateTimeSequence.prototype.extendToCover = function (min, max) {
                        var x = this.min;
                        while (min < x) {
                            x = DateTimeSequence.addInterval(x, -this.interval, this.unit);
                            this.sequence.splice(0, 0, x);
                        }
                        this.min = x;
                        x = this.max;
                        while (x < max) {
                            x = DateTimeSequence.addInterval(x, this.interval, this.unit);
                            this.sequence.push(x);
                        }
                        this.max = x;
                    };
                    /**
                     * Move the sequence to cover new date range
                     * @param min - new min to be covered by sequence
                     * @param max - new max to be covered by sequence
                     */
                    DateTimeSequence.prototype.moveToCover = function (min, max) {
                        var delta = DateTimeSequence.getDelta(min, max, this.unit);
                        var count = Math.floor(delta / this.interval);
                        this.min = DateTimeSequence.addInterval(this.min, count * this.interval, this.unit);
                        this.sequence = [];
                        this.sequence.push(this.min);
                        this.max = this.min;
                        while (this.max < max) {
                            this.max = DateTimeSequence.addInterval(this.max, this.interval, this.unit);
                            this.sequence.push(this.max);
                        }
                    };
                    // Static
                    /**
                     * Calculate a new DateTimeSequence
                     * @param dataMin - Date representing min of the data range
                     * @param dataMax - Date representing max of the data range
                     * @param expectedCount - expected number of intervals in the sequence
                     * @param unit - of the intervals in the sequence
                     */
                    DateTimeSequence.calculate = function (dataMin, dataMax, expectedCount, unit) {
                        if (!unit) {
                            unit = DateTimeSequence.getIntervalUnit(dataMin, dataMax, expectedCount);
                        }
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return DateTimeSequence.calculateYears(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Month:
                                return DateTimeSequence.calculateMonths(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Week:
                                return DateTimeSequence.calculateWeeks(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Day:
                                return DateTimeSequence.calculateDays(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Hour:
                                return DateTimeSequence.calculateHours(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Minute:
                                return DateTimeSequence.calculateMinutes(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Second:
                                return DateTimeSequence.calculateSeconds(dataMin, dataMax, expectedCount);
                            case DateTimeUnit.Millisecond:
                                return DateTimeSequence.calculateMilliseconds(dataMin, dataMax, expectedCount);
                        }
                    };
                    DateTimeSequence.calculateYears = function (dataMin, dataMax, expectedCount) {
                        // Calculate range and sequence
                        var yearsRange = NumericSequenceRange.calculateDataRange(dataMin.getFullYear(), dataMax.getFullYear(), false);
                        // Calculate year sequence
                        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(0, yearsRange.max - yearsRange.min), expectedCount, 0, null, null, [1, 2, 5]);
                        var newMinYear = Math.floor(yearsRange.min / sequence.interval) * sequence.interval;
                        var date = new Date(newMinYear, 0, 1);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Year);
                        return result;
                    };
                    DateTimeSequence.calculateMonths = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var minYear = dataMin.getFullYear();
                        var maxYear = dataMax.getFullYear();
                        var minMonth = dataMin.getMonth();
                        var maxMonth = (maxYear - minYear) * 12 + dataMax.getMonth();
                        var date = new Date(minYear, 0, 1);
                        // Calculate month sequence
                        var sequence = NumericSequence.calculateUnits(minMonth, maxMonth, expectedCount, [1, 2, 3, 6, 12]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Month);
                        return result;
                    };
                    DateTimeSequence.calculateWeeks = function (dataMin, dataMax, expectedCount) {
                        var firstDayOfWeek = 0;
                        var minDayOfWeek = dataMin.getDay();
                        var dayOffset = (minDayOfWeek - firstDayOfWeek + 7) % 7;
                        var minDay = dataMin.getDate() - dayOffset;
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), minDay);
                        var min = 0;
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Week));
                        // Calculate week sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 4, 8]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Week);
                        return result;
                    };
                    DateTimeSequence.calculateDays = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
                        var min = 0;
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(dataMin, dataMax, DateTimeUnit.Day));
                        // Calculate day sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 7, 14]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Day);
                        return result;
                    };
                    DateTimeSequence.calculateHours = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Hour));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Hour));
                        // Calculate hour sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 3, 6, 12, 24]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Hour);
                        return result;
                    };
                    DateTimeSequence.calculateMinutes = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Minute));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Minute));
                        // Calculate minutes numeric sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 3, 60 * 6, 60 * 12, 60 * 24]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Minute);
                        return result;
                    };
                    DateTimeSequence.calculateSeconds = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes());
                        var min = Double.floorWithPrecision(DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Second));
                        var max = Double.ceilWithPrecision(DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Second));
                        // Calculate minutes numeric sequence
                        var sequence = NumericSequence.calculateUnits(min, max, expectedCount, [1, 2, 5, 10, 15, 30, 60, 60 * 2, 60 * 5, 60 * 10, 60 * 15, 60 * 30, 60 * 60]);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Second);
                        return result;
                    };
                    DateTimeSequence.calculateMilliseconds = function (dataMin, dataMax, expectedCount) {
                        // Calculate range
                        var date = new Date(dataMin.getFullYear(), dataMin.getMonth(), dataMin.getDate(), dataMin.getHours(), dataMin.getMinutes(), dataMin.getSeconds());
                        var min = DateTimeSequence.getDelta(date, dataMin, DateTimeUnit.Millisecond);
                        var max = DateTimeSequence.getDelta(date, dataMax, DateTimeUnit.Millisecond);
                        // Calculate milliseconds numeric sequence
                        var sequence = NumericSequence.calculate(NumericSequenceRange.calculate(min, max), expectedCount, 0);
                        // Convert to date sequence
                        var result = DateTimeSequence.fromNumericSequence(date, sequence, DateTimeUnit.Millisecond);
                        return result;
                    };
                    DateTimeSequence.addInterval = function (value, interval, unit) {
                        interval = Math.round(interval);
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return formatting.dateUtils.addYears(value, interval);
                            case DateTimeUnit.Month:
                                return formatting.dateUtils.addMonths(value, interval);
                            case DateTimeUnit.Week:
                                return formatting.dateUtils.addWeeks(value, interval);
                            case DateTimeUnit.Day:
                                return formatting.dateUtils.addDays(value, interval);
                            case DateTimeUnit.Hour:
                                return formatting.dateUtils.addHours(value, interval);
                            case DateTimeUnit.Minute:
                                return formatting.dateUtils.addMinutes(value, interval);
                            case DateTimeUnit.Second:
                                return formatting.dateUtils.addSeconds(value, interval);
                            case DateTimeUnit.Millisecond:
                                return formatting.dateUtils.addMilliseconds(value, interval);
                        }
                    };
                    DateTimeSequence.fromNumericSequence = function (date, sequence, unit) {
                        var result = new DateTimeSequence(unit);
                        for (var i = 0; i < sequence.sequence.length; i++) {
                            var x = sequence.sequence[i];
                            var d = DateTimeSequence.addInterval(date, x, unit);
                            result.add(d);
                        }
                        result.interval = sequence.interval;
                        result.intervalOffset = sequence.intervalOffset;
                        return result;
                    };
                    DateTimeSequence.getDelta = function (min, max, unit) {
                        var delta = 0;
                        switch (unit) {
                            case DateTimeUnit.Year:
                                delta = max.getFullYear() - min.getFullYear();
                                break;
                            case DateTimeUnit.Month:
                                delta = (max.getFullYear() - min.getFullYear()) * 12 + max.getMonth() - min.getMonth();
                                break;
                            case DateTimeUnit.Week:
                                delta = (max.getTime() - min.getTime()) / (7 * 24 * 3600000);
                                break;
                            case DateTimeUnit.Day:
                                delta = (max.getTime() - min.getTime()) / (24 * 3600000);
                                break;
                            case DateTimeUnit.Hour:
                                delta = (max.getTime() - min.getTime()) / 3600000;
                                break;
                            case DateTimeUnit.Minute:
                                delta = (max.getTime() - min.getTime()) / 60000;
                                break;
                            case DateTimeUnit.Second:
                                delta = (max.getTime() - min.getTime()) / 1000;
                                break;
                            case DateTimeUnit.Millisecond:
                                delta = max.getTime() - min.getTime();
                                break;
                        }
                        return delta;
                    };
                    DateTimeSequence.getIntervalUnit = function (min, max, maxCount) {
                        maxCount = Math.max(maxCount, 2);
                        var totalDays = DateTimeSequence.getDelta(min, max, DateTimeUnit.Day);
                        if (totalDays > 356 && totalDays >= 30 * 6 * maxCount)
                            return DateTimeUnit.Year;
                        if (totalDays > 60 && totalDays > 7 * maxCount)
                            return DateTimeUnit.Month;
                        if (totalDays > 14 && totalDays > 2 * maxCount)
                            return DateTimeUnit.Week;
                        var totalHours = DateTimeSequence.getDelta(min, max, DateTimeUnit.Hour);
                        if (totalDays > 2 && totalHours > 12 * maxCount)
                            return DateTimeUnit.Day;
                        if (totalHours >= 24 && totalHours >= maxCount)
                            return DateTimeUnit.Hour;
                        var totalMinutes = DateTimeSequence.getDelta(min, max, DateTimeUnit.Minute);
                        if (totalMinutes > 2 && totalMinutes >= maxCount)
                            return DateTimeUnit.Minute;
                        var totalSeconds = DateTimeSequence.getDelta(min, max, DateTimeUnit.Second);
                        if (totalSeconds > 2 && totalSeconds >= 0.8 * maxCount)
                            return DateTimeUnit.Second;
                        var totalMilliseconds = DateTimeSequence.getDelta(min, max, DateTimeUnit.Millisecond);
                        if (totalMilliseconds > 0)
                            return DateTimeUnit.Millisecond;
                        // If the size of the range is 0 we need to guess the unit based on the date's non-zero values starting with milliseconds
                        var date = min;
                        if (date.getMilliseconds() !== 0)
                            return DateTimeUnit.Millisecond;
                        if (date.getSeconds() !== 0)
                            return DateTimeUnit.Second;
                        if (date.getMinutes() !== 0)
                            return DateTimeUnit.Minute;
                        if (date.getHours() !== 0)
                            return DateTimeUnit.Hour;
                        if (date.getDate() !== 1)
                            return DateTimeUnit.Day;
                        if (date.getMonth() !== 0)
                            return DateTimeUnit.Month;
                        return DateTimeUnit.Year;
                    };
                    return DateTimeSequence;
                }());
                // Constants
                DateTimeSequence.MIN_COUNT = 1;
                DateTimeSequence.MAX_COUNT = 1000;
                formatting.DateTimeSequence = DateTimeSequence;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var regexCache;
                /**
                 * Translate .NET format into something supported by jQuery.Globalize.
                 */
                function findDateFormat(value, format, cultureName) {
                    switch (format) {
                        case "m":
                            // Month + day
                            format = "M";
                            break;
                        case "O":
                        case "o":
                            // Roundtrip
                            format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss'.'fff'0000'";
                            break;
                        case "R":
                        case "r":
                            // RFC1123 pattern - - time must be converted to UTC before formatting
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'";
                            break;
                        case "s":
                            // Sortable - should use invariant culture
                            format = "S";
                            break;
                        case "u":
                            // Universal sortable - should convert to UTC before applying the "yyyy'-'MM'-'dd HH':'mm':'ss'Z' format.
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "yyyy'-'MM'-'dd HH':'mm':'ss'Z'";
                            break;
                        case "U":
                            // Universal full - the pattern is same as F but the time must be converted to UTC before formatting
                            value = new Date(value.getUTCFullYear(), value.getUTCMonth(), value.getUTCDate(), value.getUTCHours(), value.getUTCMinutes(), value.getUTCSeconds(), value.getUTCMilliseconds());
                            format = "F";
                            break;
                        case "y":
                        case "Y":
                            // Year and month
                            switch (cultureName) {
                                case "default":
                                case "en":
                                case "en-US":
                                    format = "MMMM, yyyy"; // Fix the default year-month pattern for english
                                    break;
                                default:
                                    format = "Y"; // For other cultures - use the localized pattern
                            }
                            break;
                    }
                    return { value: value, format: format };
                }
                formatting.findDateFormat = findDateFormat;
                /**
                 * Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize.
                 */
                function fixDateTimeFormat(format) {
                    // Fix for the "K" format (timezone):
                    // T he js dates don't have a kind property so we'll support only local kind which is equavalent to zzz format.
                    format = format.replace(/%K/g, "zzz");
                    format = format.replace(/K/g, "zzz");
                    format = format.replace(/fffffff/g, "fff0000");
                    format = format.replace(/ffffff/g, "fff000");
                    format = format.replace(/fffff/g, "fff00");
                    format = format.replace(/ffff/g, "fff0");
                    // Fix for the 5 digit year: "yyyyy" format.
                    // The Globalize doesn't support dates greater than 9999 so we replace the "yyyyy" with "0yyyy".
                    format = format.replace(/yyyyy/g, "0yyyy");
                    // Fix for the 3 digit year: "yyy" format.
                    // The Globalize doesn't support this formatting so we need to replace it with the 4 digit year "yyyy" format.
                    format = format.replace(/(^y|^)yyy(^y|$)/g, "yyyy");
                    if (!regexCache) {
                        // Creating Regexes for cases "Using single format specifier"
                        // - http://msdn.microsoft.com/en-us/library/8kb3ddd4.aspx#UsingSingleSpecifiers
                        // This is not supported from The Globalize.
                        // The case covers all single "%" lead specifier (like "%d" but not %dd)
                        // The cases as single "%d" are filtered in if the bellow.
                        // (?!S) where S is the specifier make sure that we only one symbol for specifier.
                        regexCache = ["d", "f", "F", "g", "h", "H", "K", "m", "M", "s", "t", "y", "z", ":", "/"].map(function (s) {
                            return { r: new RegExp("\%" + s + "(?!" + s + ")", "g"), s: s };
                        });
                    }
                    if (format.indexOf("%") !== -1 && format.length > 2) {
                        for (var i = 0; i < regexCache.length; i++) {
                            format = format.replace(regexCache[i].r, regexCache[i].s);
                        }
                    }
                    return format;
                }
                formatting.fixDateTimeFormat = fixDateTimeFormat;
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var font;
                (function (font_1) {
                    var FamilyInfo = (function () {
                        function FamilyInfo(families) {
                            this.families = families;
                        }
                        Object.defineProperty(FamilyInfo.prototype, "family", {
                            /**
                             * Gets the first font "wf_" font family since it will always be loaded.
                             */
                            get: function () {
                                return this.getFamily();
                            },
                            enumerable: true,
                            configurable: true
                        });
                        /**
                        * Gets the first font family that matches regex (if provided).
                        * Default regex looks for "wf_" fonts which are always loaded.
                        */
                        FamilyInfo.prototype.getFamily = function (regex) {
                            if (regex === void 0) { regex = /^wf_/; }
                            if (!this.families) {
                                return null;
                            }
                            if (regex) {
                                for (var _i = 0, _a = this.families; _i < _a.length; _i++) {
                                    var fontFamily = _a[_i];
                                    if (regex.test(fontFamily)) {
                                        return fontFamily;
                                    }
                                }
                            }
                            return this.families[0];
                        };
                        Object.defineProperty(FamilyInfo.prototype, "css", {
                            /**
                             * Gets the CSS string for the "font-family" CSS attribute.
                             */
                            get: function () {
                                return this.getCSS();
                            },
                            enumerable: true,
                            configurable: true
                        });
                        /**
                         * Gets the CSS string for the "font-family" CSS attribute.
                         */
                        FamilyInfo.prototype.getCSS = function () {
                            return this.families ? this.families.map((function (font) { return font.indexOf(" ") > 0 ? "'" + font + "'" : font; })).join(", ") : null;
                        };
                        return FamilyInfo;
                    }());
                    font_1.FamilyInfo = FamilyInfo;
                })(font = formatting.font || (formatting.font = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var font;
                (function (font) {
                    font.fallbackFonts = ["helvetica", "arial", "sans-serif"];
                    font.Family = {
                        light: new font.FamilyInfo(font.fallbackFonts),
                        semilight: new font.FamilyInfo(font.fallbackFonts),
                        regular: new font.FamilyInfo(font.fallbackFonts),
                        semibold: new font.FamilyInfo(font.fallbackFonts),
                        bold: new font.FamilyInfo(font.fallbackFonts),
                        lightSecondary: new font.FamilyInfo(font.fallbackFonts),
                        regularSecondary: new font.FamilyInfo(font.fallbackFonts),
                        boldSecondary: new font.FamilyInfo(font.fallbackFonts)
                    };
                })(font = formatting.font || (formatting.font = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var Double = powerbi.extensibility.utils.type.Double;
                var RegExpExtensions = powerbi.extensibility.utils.type.RegExpExtensions;
                // powerbi.extensibility.utils.formatting
                var stringExtensions = powerbi.extensibility.utils.formatting.stringExtensions;
                var findDateFormat = powerbi.extensibility.utils.formatting.findDateFormat;
                var fixDateTimeFormat = powerbi.extensibility.utils.formatting.fixDateTimeFormat;
                var DateTimeUnit = powerbi.extensibility.utils.formatting.DateTimeUnit;
                /** Formatting Encoder */
                var formattingEncoder;
                (function (formattingEncoder) {
                    // quoted and escaped literal patterns
                    // NOTE: the final three cases match .NET behavior
                    var literalPatterns = [
                        "'[^']*'",
                        "\"[^\"]*\"",
                        "\\\\.",
                        "'[^']*$",
                        "\"[^\"]*$",
                        "\\\\$",
                    ];
                    var literalMatcher = new RegExp(literalPatterns.join("|"), "g");
                    // Unicode U+E000 - U+F8FF is a private area and so we can use the chars from the range to encode the escaped sequences
                    function removeLiterals(format) {
                        literalMatcher.lastIndex = 0;
                        // just in case consecutive non-literals have some meaning
                        return format.replace(literalMatcher, "\uE100");
                    }
                    formattingEncoder.removeLiterals = removeLiterals;
                    function preserveLiterals(format, literals) {
                        literalMatcher.lastIndex = 0;
                        for (;;) {
                            var match = literalMatcher.exec(format);
                            if (!match)
                                break;
                            var literal = match[0];
                            var literalOffset = literalMatcher.lastIndex - literal.length;
                            var token = String.fromCharCode(0xE100 + literals.length);
                            literals.push(literal);
                            format = format.substr(0, literalOffset) + token + format.substr(literalMatcher.lastIndex);
                            // back to avoid skipping due to removed literal substring
                            literalMatcher.lastIndex = literalOffset + 1;
                        }
                        return format;
                    }
                    formattingEncoder.preserveLiterals = preserveLiterals;
                    function restoreLiterals(format, literals, quoted) {
                        if (quoted === void 0) { quoted = true; }
                        var count = literals.length;
                        for (var i = 0; i < count; i++) {
                            var token = String.fromCharCode(0xE100 + i);
                            var literal = literals[i];
                            if (!quoted) {
                                // caller wants literals to be re-inserted without escaping
                                var firstChar = literal[0];
                                if (firstChar === "\\" || literal.length === 1 || literal[literal.length - 1] !== firstChar) {
                                    // either escaped literal OR quoted literal that's missing the trailing quote
                                    // in either case we only remove the leading character
                                    literal = literal.substring(1);
                                }
                                else {
                                    // so must be a quoted literal with both starting and ending quote
                                    literal = literal.substring(1, literal.length - 1);
                                }
                            }
                            format = format.replace(token, literal);
                        }
                        return format;
                    }
                    formattingEncoder.restoreLiterals = restoreLiterals;
                })(formattingEncoder || (formattingEncoder = {}));
                var IndexedTokensRegex = /({{)|(}})|{(\d+[^}]*)}/g;
                var ZeroPlaceholder = "0";
                var DigitPlaceholder = "#";
                var ExponentialFormatChar = "E";
                var NumericPlaceholders = [ZeroPlaceholder, DigitPlaceholder];
                var NumericPlaceholderRegex = new RegExp(NumericPlaceholders.join("|"), "g");
                /** Formatting Service */
                var FormattingService = (function () {
                    function FormattingService() {
                    }
                    FormattingService.prototype.formatValue = function (value, format, cultureSelector) {
                        // Handle special cases
                        if (value === undefined || value === null) {
                            return "";
                        }
                        var gculture = this.getCulture(cultureSelector);
                        if (dateTimeFormat.canFormat(value)) {
                            // Dates
                            return dateTimeFormat.format(value, format, gculture);
                        }
                        else if (numberFormat.canFormat(value)) {
                            // Numbers
                            return numberFormat.format(value, format, gculture);
                        }
                        // Other data types - return as string
                        return value.toString();
                    };
                    FormattingService.prototype.format = function (formatWithIndexedTokens, args, culture) {
                        var _this = this;
                        if (!formatWithIndexedTokens) {
                            return "";
                        }
                        var result = formatWithIndexedTokens.replace(IndexedTokensRegex, function (match, left, right, argToken) {
                            if (left) {
                                return "{";
                            }
                            else if (right) {
                                return "}";
                            }
                            else {
                                var parts = argToken.split(":");
                                var argIndex = parseInt(parts[0], 10);
                                var argFormat = parts[1];
                                return _this.formatValue(args[argIndex], argFormat, culture);
                            }
                        });
                        return result;
                    };
                    FormattingService.prototype.isStandardNumberFormat = function (format) {
                        return numberFormat.isStandardFormat(format);
                    };
                    FormattingService.prototype.formatNumberWithCustomOverride = function (value, format, nonScientificOverrideFormat, culture) {
                        var gculture = this.getCulture(culture);
                        return numberFormat.formatWithCustomOverride(value, format, nonScientificOverrideFormat, gculture);
                    };
                    FormattingService.prototype.dateFormatString = function (unit) {
                        if (!this._dateTimeScaleFormatInfo)
                            this.initialize();
                        return this._dateTimeScaleFormatInfo.getFormatString(unit);
                    };
                    /**
                     * Sets the current localization culture
                     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
                     */
                    FormattingService.prototype.setCurrentCulture = function (cultureSelector) {
                        if (this._currentCultureSelector !== cultureSelector) {
                            this._currentCulture = this.getCulture(cultureSelector);
                            this._currentCultureSelector = cultureSelector;
                            this._dateTimeScaleFormatInfo = new DateTimeScaleFormatInfo(this._currentCulture);
                        }
                    };
                    /**
                     * Gets the culture assotiated with the specified cultureSelector ("en", "en-US", "fr-FR" etc).
                     * @param cultureSelector - name of a culture: "en", "en-UK", "fr-FR" etc. (See National Language Support (NLS) for full lists. Use "default" for invariant culture).
                     * Exposing this function for testability of unsupported cultures
                     */
                    FormattingService.prototype.getCulture = function (cultureSelector) {
                        if (cultureSelector == null) {
                            if (this._currentCulture == null) {
                                this.initialize();
                            }
                            return this._currentCulture;
                        }
                        else {
                            var culture = Globalize.findClosestCulture(cultureSelector);
                            if (!culture)
                                culture = Globalize.culture("en-US");
                            return culture;
                        }
                    };
                    /** By default the Globalization module initializes to the culture/calendar provided in the language/culture URL params */
                    FormattingService.prototype.initialize = function () {
                        var cultureName = this.getCurrentCulture();
                        this.setCurrentCulture(cultureName);
                        var calendarName = this.getUrlParam("calendar");
                        if (calendarName) {
                            var culture = this._currentCulture;
                            var c = culture.calendars[calendarName];
                            if (c) {
                                culture.calendar = c;
                            }
                        }
                    };
                    /**
                     *  Exposing this function for testability
                     */
                    FormattingService.prototype.getCurrentCulture = function () {
                        var urlParam = this.getUrlParam("language");
                        if (urlParam) {
                            return urlParam;
                        }
                        if (powerbi && powerbi.common && powerbi.common.cultureInfo) {
                            // Get cultureInfo set in powerbi
                            return powerbi.common.cultureInfo;
                        }
                        return window.navigator.userLanguage || window.navigator["language"] || Globalize.culture().name;
                    };
                    /**
                     *  Exposing this function for testability
                     *  @param name: queryString name
                     */
                    FormattingService.prototype.getUrlParam = function (name) {
                        var param = window.location.search.match(RegExp("[?&]" + name + "=([^&]*)"));
                        return param ? param[1] : undefined;
                    };
                    return FormattingService;
                }());
                formatting.FormattingService = FormattingService;
                /**
                 * DateTimeFormat module contains the static methods for formatting the DateTimes.
                 * It extends the JQuery.Globalize functionality to support complete set of .NET
                 * formatting expressions for dates.
                 */
                var dateTimeFormat;
                (function (dateTimeFormat) {
                    var _currentCachedFormat;
                    var _currentCachedProcessedFormat;
                    /** Evaluates if the value can be formatted using the NumberFormat */
                    function canFormat(value) {
                        var result = value instanceof Date;
                        return result;
                    }
                    dateTimeFormat.canFormat = canFormat;
                    /** Formats the date using provided format and culture */
                    function format(value, format, culture) {
                        format = format || "G";
                        var isStandard = format.length === 1;
                        try {
                            if (isStandard) {
                                return formatDateStandard(value, format, culture);
                            }
                            else {
                                return formatDateCustom(value, format, culture);
                            }
                        }
                        catch (e) {
                            return formatDateStandard(value, "G", culture);
                        }
                    }
                    dateTimeFormat.format = format;
                    /** Formats the date using standard format expression */
                    function formatDateStandard(value, format, culture) {
                        // In order to provide parity with .NET we have to support additional set of DateTime patterns.
                        var patterns = culture.calendar.patterns;
                        // Extend supported set of patterns
                        ensurePatterns(culture.calendar);
                        // Handle extended set of formats
                        var output = findDateFormat(value, format, culture.name);
                        if (output.format.length === 1)
                            format = patterns[output.format];
                        else
                            format = output.format;
                        // need to revisit when globalization is enabled
                        if (!culture) {
                            culture = Globalize.culture("en-US");
                        }
                        return Globalize.format(output.value, format, culture);
                    }
                    /** Formats the date using custom format expression */
                    function formatDateCustom(value, format, culture) {
                        var result;
                        var literals = [];
                        format = formattingEncoder.preserveLiterals(format, literals);
                        if (format.indexOf("F") > -1) {
                            // F is not supported so we need to replace the F with f based on the milliseconds
                            // Replace all sequences of F longer than 3 with "FFF"
                            format = stringExtensions.replaceAll(format, "FFFF", "FFF");
                            // Based on milliseconds update the format to use fff
                            var milliseconds = value.getMilliseconds();
                            if (milliseconds % 10 >= 1) {
                                format = stringExtensions.replaceAll(format, "FFF", "fff");
                            }
                            format = stringExtensions.replaceAll(format, "FFF", "FF");
                            if ((milliseconds % 100) / 10 >= 1) {
                                format = stringExtensions.replaceAll(format, "FF", "ff");
                            }
                            format = stringExtensions.replaceAll(format, "FF", "F");
                            if ((milliseconds % 1000) / 100 >= 1) {
                                format = stringExtensions.replaceAll(format, "F", "f");
                            }
                            format = stringExtensions.replaceAll(format, "F", "");
                            if (format === "" || format === "%")
                                return "";
                        }
                        format = processCustomDateTimeFormat(format);
                        result = Globalize.format(value, format, culture);
                        result = localize(result, culture.calendar);
                        result = formattingEncoder.restoreLiterals(result, literals, false);
                        return result;
                    }
                    /** Translates unsupported .NET custom format expressions to the custom expressions supported by JQuery.Globalize */
                    function processCustomDateTimeFormat(format) {
                        if (format === _currentCachedFormat) {
                            return _currentCachedProcessedFormat;
                        }
                        _currentCachedFormat = format;
                        format = fixDateTimeFormat(format);
                        _currentCachedProcessedFormat = format;
                        return format;
                    }
                    /** Localizes the time separator symbol */
                    function localize(value, dictionary) {
                        var timeSeparator = dictionary[":"];
                        if (timeSeparator === ":") {
                            return value;
                        }
                        var result = "";
                        var count = value.length;
                        for (var i = 0; i < count; i++) {
                            var char = value.charAt(i);
                            switch (char) {
                                case ":":
                                    result += timeSeparator;
                                    break;
                                default:
                                    result += char;
                                    break;
                            }
                        }
                        return result;
                    }
                    function ensurePatterns(calendar) {
                        var patterns = calendar.patterns;
                        if (patterns["g"] === undefined) {
                            patterns["g"] = patterns["f"].replace(patterns["D"], patterns["d"]); // Generic: Short date, short time
                            patterns["G"] = patterns["F"].replace(patterns["D"], patterns["d"]); // Generic: Short date, long time
                        }
                    }
                })(dateTimeFormat || (dateTimeFormat = {}));
                /**
                 * NumberFormat module contains the static methods for formatting the numbers.
                 * It extends the JQuery.Globalize functionality to support complete set of .NET
                 * formatting expressions for numeric types including custom formats.
                 */
                var numberFormat;
                (function (numberFormat) {
                    var NonScientificFormatRegex = /^\{.+\}.*/;
                    var NumericalPlaceHolderRegex = /\{.+\}/;
                    var ScientificFormatRegex = /e[+-]*[0#]+/i;
                    var StandardFormatRegex = /^[a-z]\d{0,2}$/i; // a letter + up to 2 digits for precision specifier
                    var TrailingZerosRegex = /0+$/;
                    var DecimalFormatRegex = /\.([0#]*)/g;
                    var NumericFormatRegex = /[0#,\.]+[0,#]*/g;
                    // (?=...) is a positive lookahead assertion. The RE is asking for the last digit placeholder, [0#],
                    // which is followed by non-digit placeholders and the end of string, [^0#]*$. But it only matches
                    // the last digit placeholder, not anything that follows because the positive lookahead isn"t included
                    // in the match - it is only a condition.
                    var LastNumericPlaceholderRegex = /([0#])(?=[^0#]*$)/;
                    var DecimalFormatCharacter = ".";
                    numberFormat.NumberFormatComponentsDelimeter = ";";
                    function getNonScientificFormatWithPrecision(baseFormat, numericFormat) {
                        if (!numericFormat || baseFormat === undefined)
                            return baseFormat;
                        var newFormat = "{0:" + numericFormat + "}";
                        return baseFormat.replace("{0}", newFormat);
                    }
                    function getNumericFormat(value, baseFormat) {
                        if (baseFormat == null)
                            return baseFormat;
                        if (hasFormatComponents(baseFormat)) {
                            var _a = numberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                            if (value > 0)
                                return getNumericFormatFromComponent(value, positive);
                            else if (value === 0)
                                return getNumericFormatFromComponent(value, zero);
                            return getNumericFormatFromComponent(value, negative);
                        }
                        return getNumericFormatFromComponent(value, baseFormat);
                    }
                    numberFormat.getNumericFormat = getNumericFormat;
                    function getNumericFormatFromComponent(value, format) {
                        var match = RegExpExtensions.run(NumericFormatRegex, format);
                        if (match)
                            return match[0];
                        return format;
                    }
                    function addDecimalsToFormat(baseFormat, decimals, trailingZeros) {
                        if (decimals == null)
                            return baseFormat;
                        // Default format string
                        if (baseFormat == null)
                            baseFormat = ZeroPlaceholder;
                        if (hasFormatComponents(baseFormat)) {
                            var _a = numberFormat.getComponents(baseFormat), positive = _a.positive, negative = _a.negative, zero = _a.zero;
                            var formats = [positive, negative, zero];
                            for (var i = 0; i < formats.length; i++) {
                                // Update format in formats array
                                formats[i] = addDecimalsToFormatComponent(formats[i], decimals, trailingZeros);
                            }
                            return formats.join(numberFormat.NumberFormatComponentsDelimeter);
                        }
                        return addDecimalsToFormatComponent(baseFormat, decimals, trailingZeros);
                    }
                    numberFormat.addDecimalsToFormat = addDecimalsToFormat;
                    function addDecimalsToFormatComponent(format, decimals, trailingZeros) {
                        decimals = Math.abs(decimals);
                        if (decimals >= 0) {
                            var literals = [];
                            format = formattingEncoder.preserveLiterals(format, literals);
                            var placeholder = trailingZeros ? ZeroPlaceholder : DigitPlaceholder;
                            var decimalPlaceholders = stringExtensions.repeat(placeholder, Math.abs(decimals));
                            var match = RegExpExtensions.run(DecimalFormatRegex, format);
                            if (match) {
                                var beforeDecimal = format.substr(0, match.index);
                                var formatDecimal = format.substr(match.index + 1, match[1].length);
                                var afterDecimal = format.substr(match.index + match[0].length);
                                if (trailingZeros)
                                    // Use explicit decimals argument as placeholders
                                    formatDecimal = decimalPlaceholders;
                                else {
                                    var decimalChange = decimalPlaceholders.length - formatDecimal.length;
                                    if (decimalChange > 0)
                                        // Append decimalPlaceholders to existing decimal portion of format string
                                        formatDecimal = formatDecimal + decimalPlaceholders.slice(-decimalChange);
                                    else if (decimalChange < 0)
                                        // Remove decimals from formatDecimal
                                        formatDecimal = formatDecimal.slice(0, decimalChange);
                                }
                                if (formatDecimal.length > 0)
                                    formatDecimal = DecimalFormatCharacter + formatDecimal;
                                format = beforeDecimal + formatDecimal + afterDecimal;
                            }
                            else if (decimalPlaceholders.length > 0) {
                                // Replace last numeric placeholder with decimal portion
                                format = format.replace(LastNumericPlaceholderRegex, "$1" + DecimalFormatCharacter + decimalPlaceholders);
                            }
                            if (literals.length !== 0)
                                format = formattingEncoder.restoreLiterals(format, literals);
                        }
                        return format;
                    }
                    function hasFormatComponents(format) {
                        return formattingEncoder.removeLiterals(format).indexOf(numberFormat.NumberFormatComponentsDelimeter) !== -1;
                    }
                    numberFormat.hasFormatComponents = hasFormatComponents;
                    function getComponents(format) {
                        var signFormat = {
                            hasNegative: false,
                            positive: format,
                            negative: format,
                            zero: format,
                        };
                        // escape literals so semi-colon in a literal isn't interpreted as a delimiter
                        // NOTE: OK to use the literals extracted here for all three components before since the literals are indexed.
                        // For example, "'pos-lit';'neg-lit'" will get preserved as "\uE000;\uE001" and the literal array will be
                        // ['pos-lit', 'neg-lit']. When the negative components is restored, its \uE001 will select the second
                        // literal.
                        var literals = [];
                        format = formattingEncoder.preserveLiterals(format, literals);
                        var signSpecificFormats = format.split(numberFormat.NumberFormatComponentsDelimeter);
                        var formatCount = signSpecificFormats.length;
                        if (formatCount > 1) {
                            if (literals.length !== 0)
                                signSpecificFormats = signSpecificFormats.map(function (signSpecificFormat) { return formattingEncoder.restoreLiterals(signSpecificFormat, literals); });
                            signFormat.hasNegative = true;
                            signFormat.positive = signFormat.zero = signSpecificFormats[0];
                            signFormat.negative = signSpecificFormats[1];
                            if (formatCount > 2)
                                signFormat.zero = signSpecificFormats[2];
                        }
                        return signFormat;
                    }
                    numberFormat.getComponents = getComponents;
                    var _lastCustomFormatMeta;
                    /** Evaluates if the value can be formatted using the NumberFormat */
                    function canFormat(value) {
                        var result = typeof (value) === "number";
                        return result;
                    }
                    numberFormat.canFormat = canFormat;
                    function isStandardFormat(format) {
                        return StandardFormatRegex.test(format);
                    }
                    numberFormat.isStandardFormat = isStandardFormat;
                    /** Formats the number using specified format expression and culture */
                    function format(value, format, culture) {
                        format = format || "G";
                        try {
                            if (isStandardFormat(format))
                                return formatNumberStandard(value, format, culture);
                            return formatNumberCustom(value, format, culture);
                        }
                        catch (e) {
                            return Globalize.format(value, undefined, culture);
                        }
                    }
                    numberFormat.format = format;
                    /** Performs a custom format with a value override.  Typically used for custom formats showing scaled values. */
                    function formatWithCustomOverride(value, format, nonScientificOverrideFormat, culture) {
                        return formatNumberCustom(value, format, culture, nonScientificOverrideFormat);
                    }
                    numberFormat.formatWithCustomOverride = formatWithCustomOverride;
                    /** Formats the number using standard format expression */
                    function formatNumberStandard(value, format, culture) {
                        var result;
                        var precision = (format.length > 1 ? parseInt(format.substr(1, format.length - 1), 10) : undefined);
                        var numberFormatInfo = culture.numberFormat;
                        var formatChar = format.charAt(0);
                        switch (formatChar) {
                            case "e":
                            case "E":
                                if (precision === undefined) {
                                    precision = 6;
                                }
                                var mantissaDecimalDigits = stringExtensions.repeat("0", precision);
                                format = "0." + mantissaDecimalDigits + formatChar + "+000";
                                result = formatNumberCustom(value, format, culture);
                                break;
                            case "f":
                            case "F":
                                result = precision !== undefined ? value.toFixed(precision) : value.toFixed(numberFormatInfo.decimals);
                                result = localize(result, numberFormatInfo);
                                break;
                            case "g":
                            case "G":
                                var abs = Math.abs(value);
                                if (abs === 0 || (1E-4 <= abs && abs < 1E15)) {
                                    // For the range of 0.0001 to 1,000,000,000,000,000 - use the normal form
                                    result = precision !== undefined ? value.toPrecision(precision) : value.toString();
                                }
                                else {
                                    // Otherwise use exponential
                                    // Assert that value is a number and fall back on returning value if it is not
                                    if (typeof (value) !== "number")
                                        return String(value);
                                    result = precision !== undefined ? value.toExponential(precision) : value.toExponential();
                                    result = result.replace("e", "E");
                                }
                                result = localize(result, numberFormatInfo);
                                break;
                            case "r":
                            case "R":
                                result = value.toString();
                                result = localize(result, numberFormatInfo);
                                break;
                            case "x":
                            case "X":
                                result = value.toString(16);
                                if (formatChar === "X") {
                                    result = result.toUpperCase();
                                }
                                if (precision !== undefined) {
                                    var actualPrecision = result.length;
                                    var isNegative = value < 0;
                                    if (isNegative) {
                                        actualPrecision--;
                                    }
                                    var paddingZerosCount = precision - actualPrecision;
                                    var paddingZeros = undefined;
                                    if (paddingZerosCount > 0) {
                                        paddingZeros = stringExtensions.repeat("0", paddingZerosCount);
                                    }
                                    if (isNegative) {
                                        result = "-" + paddingZeros + result.substr(1);
                                    }
                                    else {
                                        result = paddingZeros + result;
                                    }
                                }
                                result = localize(result, numberFormatInfo);
                                break;
                            default:
                                result = Globalize.format(value, format, culture);
                        }
                        return result;
                    }
                    /** Formats the number using custom format expression */
                    function formatNumberCustom(value, format, culture, nonScientificOverrideFormat) {
                        var result;
                        var numberFormatInfo = culture.numberFormat;
                        if (isFinite(value)) {
                            // Split format by positive[;negative;zero] pattern
                            var formatComponents = getComponents(format);
                            // Pick a format based on the sign of value
                            if (value > 0) {
                                format = formatComponents.positive;
                            }
                            else if (value === 0) {
                                format = formatComponents.zero;
                            }
                            else {
                                format = formatComponents.negative;
                            }
                            // Normalize value if we have an explicit negative format
                            if (formatComponents.hasNegative)
                                value = Math.abs(value);
                            // Get format metadata
                            var formatMeta = getCustomFormatMetadata(format, true /*calculatePrecision*/);
                            // Preserve literals and escaped chars
                            var literals = [];
                            if (formatMeta.hasLiterals) {
                                format = formattingEncoder.preserveLiterals(format, literals);
                            }
                            // Scientific format
                            if (formatMeta.hasE && !nonScientificOverrideFormat) {
                                var scientificMatch = RegExpExtensions.run(ScientificFormatRegex, format);
                                if (scientificMatch) {
                                    // Case 2.1. Scientific custom format
                                    var formatM = format.substr(0, scientificMatch.index);
                                    var formatE = format.substr(scientificMatch.index + 2); // E(+|-)
                                    var precision = getCustomFormatPrecision(formatM, formatMeta);
                                    var scale = getCustomFormatScale(formatM, formatMeta);
                                    if (scale !== 1) {
                                        value = value * scale;
                                    }
                                    // Assert that value is a number and fall back on returning value if it is not
                                    if (typeof (value) !== "number")
                                        return String(value);
                                    var s = value.toExponential(precision);
                                    var indexOfE = s.indexOf("e");
                                    var mantissa = s.substr(0, indexOfE);
                                    var exp = s.substr(indexOfE + 1);
                                    var resultM = fuseNumberWithCustomFormat(mantissa, formatM, numberFormatInfo);
                                    var resultE = fuseNumberWithCustomFormat(exp, formatE, numberFormatInfo);
                                    if (resultE.charAt(0) === "+" && scientificMatch[0].charAt(1) !== "+") {
                                        resultE = resultE.substr(1);
                                    }
                                    var e = scientificMatch[0].charAt(0);
                                    result = resultM + e + resultE;
                                }
                            }
                            // Non scientific format
                            if (result === undefined) {
                                var valueFormatted = void 0;
                                var isValueGlobalized = false;
                                var precision = getCustomFormatPrecision(format, formatMeta);
                                var scale = getCustomFormatScale(format, formatMeta);
                                if (scale !== 1)
                                    value = value * scale;
                                // Rounding
                                value = parseFloat(toNonScientific(value, precision));
                                if (!isFinite(value)) {
                                    // very large and small finite values can become infinite by parseFloat(toNonScientific())
                                    return Globalize.format(value, undefined);
                                }
                                if (nonScientificOverrideFormat) {
                                    // Get numeric format from format string
                                    var numericFormat = numberFormat.getNumericFormat(value, format);
                                    // Add separators and decimalFormat to nonScientificFormat
                                    nonScientificOverrideFormat = getNonScientificFormatWithPrecision(nonScientificOverrideFormat, numericFormat);
                                    // Format the value
                                    valueFormatted = formatting.formattingService.format(nonScientificOverrideFormat, [value], culture.name);
                                    isValueGlobalized = true;
                                }
                                else
                                    valueFormatted = toNonScientific(value, precision);
                                result = fuseNumberWithCustomFormat(valueFormatted, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized);
                            }
                            if (formatMeta.hasLiterals) {
                                result = formattingEncoder.restoreLiterals(result, literals, false);
                            }
                            _lastCustomFormatMeta = formatMeta;
                        }
                        else {
                            return Globalize.format(value, undefined);
                        }
                        return result;
                    }
                    /** Returns string with the fixed point respresentation of the number */
                    function toNonScientific(value, precision) {
                        var result = "";
                        var precisionZeros = 0;
                        // Double precision numbers support actual 15-16 decimal digits of precision.
                        if (precision > 16) {
                            precisionZeros = precision - 16;
                            precision = 16;
                        }
                        var digitsBeforeDecimalPoint = Double.log10(Math.abs(value));
                        if (digitsBeforeDecimalPoint < 16) {
                            if (digitsBeforeDecimalPoint > 0) {
                                var maxPrecision = 16 - digitsBeforeDecimalPoint;
                                if (precision > maxPrecision) {
                                    precisionZeros += precision - maxPrecision;
                                    precision = maxPrecision;
                                }
                            }
                            result = value.toFixed(precision);
                        }
                        else if (digitsBeforeDecimalPoint === 16) {
                            result = value.toFixed(0);
                            precisionZeros += precision;
                            if (precisionZeros > 0) {
                                result += ".";
                            }
                        }
                        else {
                            // Different browsers have different implementations of the toFixed().
                            // In IE it returns fixed format no matter what's the number. In FF and Chrome the method returns exponential format for numbers greater than 1E21.
                            // So we need to check for range and convert the to exponential with the max precision.
                            // Then we convert exponential string to fixed by removing the dot and padding with "power" zeros.
                            // Assert that value is a number and fall back on returning value if it is not
                            if (typeof (value) !== "number")
                                return String(value);
                            result = value.toExponential(15);
                            var indexOfE = result.indexOf("e");
                            if (indexOfE > 0) {
                                var indexOfDot = result.indexOf(".");
                                var mantissa = result.substr(0, indexOfE);
                                var exp = result.substr(indexOfE + 1);
                                var powerZeros = parseInt(exp, 10) - (mantissa.length - indexOfDot - 1);
                                result = mantissa.replace(".", "") + stringExtensions.repeat("0", powerZeros);
                                if (precision > 0) {
                                    result = result + "." + stringExtensions.repeat("0", precision);
                                }
                            }
                        }
                        if (precisionZeros > 0) {
                            result = result + stringExtensions.repeat("0", precisionZeros);
                        }
                        return result;
                    }
                    /**
                     * Returns the formatMetadata of the format
                     * When calculating precision and scale, if format string of
                     * positive[;negative;zero] => positive format will be used
                     * @param (required) format - format string
                     * @param (optional) calculatePrecision - calculate precision of positive format
                     * @param (optional) calculateScale - calculate scale of positive format
                     */
                    function getCustomFormatMetadata(format, calculatePrecision, calculateScale, calculatePartsPerScale) {
                        if (_lastCustomFormatMeta !== undefined && format === _lastCustomFormatMeta.format) {
                            return _lastCustomFormatMeta;
                        }
                        var literals = [];
                        var escaped = formattingEncoder.preserveLiterals(format, literals);
                        var result = {
                            format: format,
                            hasLiterals: literals.length !== 0,
                            hasE: false,
                            hasCommas: false,
                            hasDots: false,
                            hasPercent: false,
                            hasPermile: false,
                            precision: undefined,
                            scale: undefined,
                            partsPerScale: undefined,
                        };
                        for (var i = 0, length_1 = escaped.length; i < length_1; i++) {
                            var c = escaped.charAt(i);
                            switch (c) {
                                case "e":
                                case "E":
                                    result.hasE = true;
                                    break;
                                case ",":
                                    result.hasCommas = true;
                                    break;
                                case ".":
                                    result.hasDots = true;
                                    break;
                                case "%":
                                    result.hasPercent = true;
                                    break;
                                case "\u2030":
                                    result.hasPermile = true;
                                    break;
                            }
                        }
                        // Use positive format for calculating these values
                        var formatComponents = getComponents(format);
                        if (calculatePrecision)
                            result.precision = getCustomFormatPrecision(formatComponents.positive, result);
                        if (calculatePartsPerScale)
                            result.partsPerScale = getCustomFormatPartsPerScale(formatComponents.positive, result);
                        if (calculateScale)
                            result.scale = getCustomFormatScale(formatComponents.positive, result);
                        return result;
                    }
                    numberFormat.getCustomFormatMetadata = getCustomFormatMetadata;
                    /** Returns the decimal precision of format based on the number of # and 0 chars after the decimal point
                      * Important: The input format string needs to be split to the appropriate pos/neg/zero portion to work correctly */
                    function getCustomFormatPrecision(format, formatMeta) {
                        if (formatMeta.precision > -1) {
                            return formatMeta.precision;
                        }
                        var result = 0;
                        if (formatMeta.hasDots) {
                            if (formatMeta.hasLiterals) {
                                format = formattingEncoder.removeLiterals(format);
                            }
                            var dotIndex = format.indexOf(".");
                            if (dotIndex > -1) {
                                var count = format.length;
                                for (var i = dotIndex; i < count; i++) {
                                    var char = format.charAt(i);
                                    if (char.match(NumericPlaceholderRegex))
                                        result++;
                                    // 0.00E+0 :: Break before counting 0 in
                                    // exponential portion of format string
                                    if (char === ExponentialFormatChar)
                                        break;
                                }
                                result = Math.min(19, result);
                            }
                        }
                        formatMeta.precision = result;
                        return result;
                    }
                    function getCustomFormatPartsPerScale(format, formatMeta) {
                        if (formatMeta.partsPerScale != null)
                            return formatMeta.partsPerScale;
                        var result = 1;
                        if (formatMeta.hasPercent && format.indexOf("%") > -1) {
                            result = result * 100;
                        }
                        if (formatMeta.hasPermile && format.indexOf(/* ‰ */ "\u2030") > -1) {
                            result = result * 1000;
                        }
                        formatMeta.partsPerScale = result;
                        return result;
                    }
                    /** Returns the scale factor of the format based on the "%" and scaling "," chars in the format */
                    function getCustomFormatScale(format, formatMeta) {
                        if (formatMeta.scale > -1) {
                            return formatMeta.scale;
                        }
                        var result = getCustomFormatPartsPerScale(format, formatMeta);
                        if (formatMeta.hasCommas) {
                            var dotIndex = format.indexOf(".");
                            if (dotIndex === -1) {
                                dotIndex = format.length;
                            }
                            for (var i = dotIndex - 1; i > -1; i--) {
                                var char = format.charAt(i);
                                if (char === ",") {
                                    result = result / 1000;
                                }
                                else {
                                    break;
                                }
                            }
                        }
                        formatMeta.scale = result;
                        return result;
                    }
                    function fuseNumberWithCustomFormat(value, format, numberFormatInfo, nonScientificOverrideFormat, isValueGlobalized) {
                        var suppressModifyValue = !!nonScientificOverrideFormat;
                        var formatParts = format.split(".", 2);
                        if (formatParts.length === 2) {
                            var wholeFormat = formatParts[0];
                            var fractionFormat = formatParts[1];
                            var displayUnit = "";
                            // Remove display unit from value before splitting on "." as localized display units sometimes end with "."
                            if (nonScientificOverrideFormat) {
                                displayUnit = nonScientificOverrideFormat.replace(NumericalPlaceHolderRegex, "");
                                value = value.replace(displayUnit, "");
                            }
                            var globalizedDecimalSeparator = numberFormatInfo["."];
                            var decimalSeparator = isValueGlobalized ? globalizedDecimalSeparator : ".";
                            var valueParts = value.split(decimalSeparator, 2);
                            var wholeValue = valueParts.length === 1 ? valueParts[0] + displayUnit : valueParts[0];
                            var fractionValue = valueParts.length === 2 ? valueParts[1] + displayUnit : "";
                            fractionValue = fractionValue.replace(TrailingZerosRegex, "");
                            var wholeFormattedValue = fuseNumberWithCustomFormatLeft(wholeValue, wholeFormat, numberFormatInfo, suppressModifyValue);
                            var fractionFormattedValue = fuseNumberWithCustomFormatRight(fractionValue, fractionFormat, suppressModifyValue);
                            if (fractionFormattedValue.fmtOnly || fractionFormattedValue.value === "")
                                return wholeFormattedValue + fractionFormattedValue.value;
                            return wholeFormattedValue + globalizedDecimalSeparator + fractionFormattedValue.value;
                        }
                        return fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue);
                    }
                    function fuseNumberWithCustomFormatLeft(value, format, numberFormatInfo, suppressModifyValue) {
                        var groupSymbolIndex = format.indexOf(",");
                        var enableGroups = groupSymbolIndex > -1 && groupSymbolIndex < Math.max(format.lastIndexOf("0"), format.lastIndexOf("#")) && numberFormatInfo[","];
                        var groupDigitCount = 0;
                        var groupIndex = 0;
                        var groupSizes = numberFormatInfo.groupSizes || [3];
                        var groupSize = groupSizes[0];
                        var groupSeparator = numberFormatInfo[","];
                        var sign = "";
                        var firstChar = value.charAt(0);
                        if (firstChar === "+" || firstChar === "-") {
                            sign = numberFormatInfo[firstChar];
                            value = value.substr(1);
                        }
                        var isZero = value === "0";
                        var result = "";
                        var leftBuffer = "";
                        var vi = value.length - 1;
                        var fmtOnly = true;
                        // Iterate through format chars and replace 0 and # with the digits from the value string
                        for (var fi = format.length - 1; fi > -1; fi--) {
                            var formatChar = format.charAt(fi);
                            switch (formatChar) {
                                case ZeroPlaceholder:
                                case DigitPlaceholder:
                                    fmtOnly = false;
                                    if (leftBuffer !== "") {
                                        result = leftBuffer + result;
                                        leftBuffer = "";
                                    }
                                    if (!suppressModifyValue) {
                                        if (vi > -1 || formatChar === ZeroPlaceholder) {
                                            if (enableGroups) {
                                                // If the groups are enabled we'll need to keep track of the current group index and periodically insert group separator,
                                                if (groupDigitCount === groupSize) {
                                                    result = groupSeparator + result;
                                                    groupIndex++;
                                                    if (groupIndex < groupSizes.length) {
                                                        groupSize = groupSizes[groupIndex];
                                                    }
                                                    groupDigitCount = 1;
                                                }
                                                else {
                                                    groupDigitCount++;
                                                }
                                            }
                                        }
                                        if (vi > -1) {
                                            if (isZero && formatChar === DigitPlaceholder) {
                                                // Special case - if we need to format a zero value and the # symbol is used - we don't copy it into the result)
                                            }
                                            else {
                                                result = value.charAt(vi) + result;
                                            }
                                            vi--;
                                        }
                                        else if (formatChar !== DigitPlaceholder) {
                                            result = formatChar + result;
                                        }
                                    }
                                    break;
                                case ",":
                                    // We should skip all the , chars
                                    break;
                                default:
                                    leftBuffer = formatChar + leftBuffer;
                                    break;
                            }
                        }
                        // If the value didn't fit into the number of zeros provided in the format then we should insert the missing part of the value into the result
                        if (!suppressModifyValue) {
                            if (vi > -1 && result !== "") {
                                if (enableGroups) {
                                    while (vi > -1) {
                                        if (groupDigitCount === groupSize) {
                                            result = groupSeparator + result;
                                            groupIndex++;
                                            if (groupIndex < groupSizes.length) {
                                                groupSize = groupSizes[groupIndex];
                                            }
                                            groupDigitCount = 1;
                                        }
                                        else {
                                            groupDigitCount++;
                                        }
                                        result = value.charAt(vi) + result;
                                        vi--;
                                    }
                                }
                                else {
                                    result = value.substr(0, vi + 1) + result;
                                }
                            }
                            // Insert sign in front of the leftBuffer and result
                            return sign + leftBuffer + result;
                        }
                        if (fmtOnly)
                            // If the format doesn't specify any digits to be displayed, then just return the format we've parsed up until now.
                            return sign + leftBuffer + result;
                        return sign + leftBuffer + value + result;
                    }
                    function fuseNumberWithCustomFormatRight(value, format, suppressModifyValue) {
                        var vi = 0;
                        var fCount = format.length;
                        var vCount = value.length;
                        if (suppressModifyValue) {
                            var lastChar = format.charAt(fCount - 1);
                            if (!lastChar.match(NumericPlaceholderRegex))
                                return {
                                    value: value + lastChar,
                                    fmtOnly: value === "",
                                };
                            return {
                                value: value,
                                fmtOnly: value === "",
                            };
                        }
                        var result = "", fmtOnly = true;
                        for (var fi = 0; fi < fCount; fi++) {
                            var formatChar = format.charAt(fi);
                            if (vi < vCount) {
                                switch (formatChar) {
                                    case ZeroPlaceholder:
                                    case DigitPlaceholder:
                                        result += value[vi++];
                                        fmtOnly = false;
                                        break;
                                    default:
                                        result += formatChar;
                                }
                            }
                            else {
                                if (formatChar !== DigitPlaceholder) {
                                    result += formatChar;
                                    fmtOnly = fmtOnly && (formatChar !== ZeroPlaceholder);
                                }
                            }
                        }
                        return {
                            value: result,
                            fmtOnly: fmtOnly,
                        };
                    }
                    function localize(value, dictionary) {
                        var plus = dictionary["+"];
                        var minus = dictionary["-"];
                        var dot = dictionary["."];
                        var comma = dictionary[","];
                        if (plus === "+" && minus === "-" && dot === "." && comma === ",") {
                            return value;
                        }
                        var count = value.length;
                        var result = "";
                        for (var i = 0; i < count; i++) {
                            var char = value.charAt(i);
                            switch (char) {
                                case "+":
                                    result = result + plus;
                                    break;
                                case "-":
                                    result = result + minus;
                                    break;
                                case ".":
                                    result = result + dot;
                                    break;
                                case ",":
                                    result = result + comma;
                                    break;
                                default:
                                    result = result + char;
                                    break;
                            }
                        }
                        return result;
                    }
                })(numberFormat = formatting.numberFormat || (formatting.numberFormat = {}));
                /** DateTimeScaleFormatInfo is used to calculate and keep the Date formats used for different units supported by the DateTimeScaleModel */
                var DateTimeScaleFormatInfo = (function () {
                    // Constructor
                    /**
                     * Creates new instance of the DateTimeScaleFormatInfo class.
                     * @param culture - culture which calendar info is going to be used to derive the formats.
                     */
                    function DateTimeScaleFormatInfo(culture) {
                        var calendar = culture.calendar;
                        var patterns = calendar.patterns;
                        var monthAbbreviations = calendar["months"]["namesAbbr"];
                        var cultureHasMonthAbbr = monthAbbreviations && monthAbbreviations[0];
                        var yearMonthPattern = patterns["Y"];
                        var monthDayPattern = patterns["M"];
                        var fullPattern = patterns["f"];
                        var longTimePattern = patterns["T"];
                        var shortTimePattern = patterns["t"];
                        var separator = fullPattern.indexOf(",") > -1 ? ", " : " ";
                        var hasYearSymbol = yearMonthPattern.indexOf("yyyy'") === 0 && yearMonthPattern.length > 6 && yearMonthPattern[6] === "\'";
                        this.YearPattern = hasYearSymbol ? yearMonthPattern.substr(0, 7) : "yyyy";
                        var yearPos = fullPattern.indexOf("yy");
                        var monthPos = fullPattern.indexOf("MMMM");
                        this.MonthPattern = cultureHasMonthAbbr && monthPos > -1 ? (yearPos > monthPos ? "MMM yyyy" : "yyyy MMM") : yearMonthPattern;
                        this.DayPattern = cultureHasMonthAbbr ? monthDayPattern.replace("MMMM", "MMM") : monthDayPattern;
                        var minutePos = fullPattern.indexOf("mm");
                        var pmPos = fullPattern.indexOf("tt");
                        var shortHourPattern = pmPos > -1 ? shortTimePattern.replace(":mm ", "") : shortTimePattern;
                        this.HourPattern = yearPos < minutePos ? this.DayPattern + separator + shortHourPattern : shortHourPattern + separator + this.DayPattern;
                        this.MinutePattern = shortTimePattern;
                        this.SecondPattern = longTimePattern;
                        this.MillisecondPattern = longTimePattern.replace("ss", "ss.fff");
                        // Special cases
                        switch (culture.name) {
                            case "fi-FI":
                                this.DayPattern = this.DayPattern.replace("'ta'", ""); // Fix for finish 'ta' suffix for month names.
                                this.HourPattern = this.HourPattern.replace("'ta'", "");
                                break;
                        }
                    }
                    // Methods
                    /**
                     * Returns the format string of the provided DateTimeUnit.
                     * @param unit - date or time unit
                     */
                    DateTimeScaleFormatInfo.prototype.getFormatString = function (unit) {
                        switch (unit) {
                            case DateTimeUnit.Year:
                                return this.YearPattern;
                            case DateTimeUnit.Month:
                                return this.MonthPattern;
                            case DateTimeUnit.Week:
                            case DateTimeUnit.Day:
                                return this.DayPattern;
                            case DateTimeUnit.Hour:
                                return this.HourPattern;
                            case DateTimeUnit.Minute:
                                return this.MinutePattern;
                            case DateTimeUnit.Second:
                                return this.SecondPattern;
                            case DateTimeUnit.Millisecond:
                                return this.MillisecondPattern;
                        }
                    };
                    return DateTimeScaleFormatInfo;
                }());
                formatting.formattingService = new FormattingService();
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                /** The system used to determine display units used during formatting */
                var DisplayUnitSystemType;
                (function (DisplayUnitSystemType) {
                    /** Default display unit system, which saves space by using units such as K, M, bn with PowerView rules for when to pick a unit. Suitable for chart axes. */
                    DisplayUnitSystemType[DisplayUnitSystemType["Default"] = 0] = "Default";
                    /** A verbose display unit system that will only respect the formatting defined in the model. Suitable for explore mode single-value cards. */
                    DisplayUnitSystemType[DisplayUnitSystemType["Verbose"] = 1] = "Verbose";
                    /**
                     * A display unit system that uses units such as K, M, bn if we have at least one of those units (e.g. 0.9M is not valid as it's less than 1 million).
                     * Suitable for dashboard tile cards
                     */
                    DisplayUnitSystemType[DisplayUnitSystemType["WholeUnits"] = 2] = "WholeUnits";
                    /**A display unit system that also contains Auto and None units for data labels*/
                    DisplayUnitSystemType[DisplayUnitSystemType["DataLabels"] = 3] = "DataLabels";
                })(DisplayUnitSystemType = formatting.DisplayUnitSystemType || (formatting.DisplayUnitSystemType = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var Double = powerbi.extensibility.utils.type.Double;
                var NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                var formattingService = powerbi.extensibility.utils.formatting.formattingService;
                // Constants
                var maxExponent = 24;
                var defaultScientificBigNumbersBoundary = 1E15;
                var scientificSmallNumbersBoundary = 1E-4;
                var PERCENTAGE_FORMAT = "%";
                var SCIENTIFIC_FORMAT = "E+0";
                var DEFAULT_SCIENTIFIC_FORMAT = "0.##" + SCIENTIFIC_FORMAT;
                // Regular expressions
                /**
                 * This regex looks for strings that match one of the following conditions:
                 *   - Optionally contain "0", "#", followed by a period, followed by at least one "0" or "#" (Ex. ###,000.###)
                 *   - Contains at least one of "0", "#", or "," (Ex. ###,000)
                 *   - Contain a "g" (indicates to use the general .NET numeric format string)
                 * The entire string (start to end) must match, and the match is not case-sensitive.
                 */
                var SUPPORTED_SCIENTIFIC_FORMATS = /^([0\#,]*\.[0\#]+|[0\#,]+|g)$/i;
                var DisplayUnit = (function () {
                    function DisplayUnit() {
                    }
                    // Methods
                    DisplayUnit.prototype.project = function (value) {
                        if (this.value) {
                            return Double.removeDecimalNoise(value / this.value);
                        }
                        else {
                            return value;
                        }
                    };
                    DisplayUnit.prototype.reverseProject = function (value) {
                        if (this.value) {
                            return value * this.value;
                        }
                        else {
                            return value;
                        }
                    };
                    DisplayUnit.prototype.isApplicableTo = function (value) {
                        value = Math.abs(value);
                        var precision = Double.getPrecision(value, 3);
                        return Double.greaterOrEqualWithPrecision(value, this.applicableRangeMin, precision) && Double.lessWithPrecision(value, this.applicableRangeMax, precision);
                    };
                    DisplayUnit.prototype.isScaling = function () {
                        return this.value > 1;
                    };
                    return DisplayUnit;
                }());
                formatting.DisplayUnit = DisplayUnit;
                var DisplayUnitSystem = (function () {
                    // Constructor
                    function DisplayUnitSystem(units) {
                        this.units = units ? units : [];
                    }
                    Object.defineProperty(DisplayUnitSystem.prototype, "title", {
                        // Properties
                        get: function () {
                            return this.displayUnit ? this.displayUnit.title : undefined;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    // Methods
                    DisplayUnitSystem.prototype.update = function (value) {
                        if (value === undefined)
                            return;
                        this.unitBaseValue = value;
                        this.displayUnit = this.findApplicableDisplayUnit(value);
                    };
                    DisplayUnitSystem.prototype.findApplicableDisplayUnit = function (value) {
                        for (var _i = 0, _a = this.units; _i < _a.length; _i++) {
                            var unit = _a[_i];
                            if (unit.isApplicableTo(value))
                                return unit;
                        }
                        return undefined;
                    };
                    DisplayUnitSystem.prototype.format = function (value, format, decimals, trailingZeros, cultureSelector) {
                        decimals = this.getNumberOfDecimalsForFormatting(format, decimals);
                        var nonScientificFormat = "";
                        if (this.isFormatSupported(format)
                            && !this.hasScientitifcFormat(format)
                            && this.isScalingUnit()
                            && this.shouldRespectScalingUnit(format)) {
                            value = this.displayUnit.project(value);
                            nonScientificFormat = this.displayUnit.labelFormat;
                        }
                        return this.formatHelper({
                            value: value,
                            nonScientificFormat: nonScientificFormat,
                            format: format,
                            decimals: decimals,
                            trailingZeros: trailingZeros,
                            cultureSelector: cultureSelector
                        });
                    };
                    DisplayUnitSystem.prototype.isFormatSupported = function (format) {
                        return !DisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
                    };
                    DisplayUnitSystem.prototype.isPercentageFormat = function (format) {
                        return format && format.indexOf(PERCENTAGE_FORMAT) >= 0;
                    };
                    DisplayUnitSystem.prototype.shouldRespectScalingUnit = function (format) {
                        return true;
                    };
                    DisplayUnitSystem.prototype.getNumberOfDecimalsForFormatting = function (format, decimals) {
                        return decimals;
                    };
                    DisplayUnitSystem.prototype.isScalingUnit = function () {
                        return this.displayUnit && this.displayUnit.isScaling();
                    };
                    DisplayUnitSystem.prototype.formatHelper = function (options) {
                        var value = options.value, nonScientificFormat = options.nonScientificFormat, cultureSelector = options.cultureSelector, format = options.format, decimals = options.decimals, trailingZeros = options.trailingZeros;
                        // If the format is "general" and we want to override the number of decimal places then use the default numeric format string.
                        if ((format === "g" || format === "G") && decimals != null) {
                            format = "#,0.00";
                        }
                        format = NumberFormat.addDecimalsToFormat(format, decimals, trailingZeros);
                        if (format && !formattingService.isStandardNumberFormat(format))
                            return formattingService.formatNumberWithCustomOverride(value, format, nonScientificFormat, cultureSelector);
                        if (!format) {
                            format = "G";
                        }
                        if (!nonScientificFormat) {
                            nonScientificFormat = "{0}";
                        }
                        var text = formattingService.formatValue(value, format, cultureSelector);
                        return formattingService.format(nonScientificFormat, [text]);
                    };
                    /** Formats a single value by choosing an appropriate base for the DisplayUnitSystem before formatting. */
                    DisplayUnitSystem.prototype.formatSingleValue = function (value, format, decimals, trailingZeros, cultureSelector) {
                        // Change unit base to a value appropriate for this value
                        this.update(this.shouldUseValuePrecision(value) ? Double.getPrecision(value, 8) : value);
                        return this.format(value, format, decimals, trailingZeros, cultureSelector);
                    };
                    DisplayUnitSystem.prototype.shouldUseValuePrecision = function (value) {
                        if (this.units.length === 0)
                            return true;
                        // Check if the value is big enough to have a valid unit by checking against the smallest unit (that it's value bigger than 1).
                        var applicableRangeMin = 0;
                        for (var i = 0; i < this.units.length; i++) {
                            if (this.units[i].isScaling()) {
                                applicableRangeMin = this.units[i].applicableRangeMin;
                                break;
                            }
                        }
                        return Math.abs(value) < applicableRangeMin;
                    };
                    DisplayUnitSystem.prototype.isScientific = function (value) {
                        return value < -defaultScientificBigNumbersBoundary || value > defaultScientificBigNumbersBoundary ||
                            (-scientificSmallNumbersBoundary < value && value < scientificSmallNumbersBoundary && value !== 0);
                    };
                    DisplayUnitSystem.prototype.hasScientitifcFormat = function (format) {
                        return format && format.toUpperCase().indexOf("E") !== -1;
                    };
                    DisplayUnitSystem.prototype.supportsScientificFormat = function (format) {
                        if (format)
                            return SUPPORTED_SCIENTIFIC_FORMATS.test(format);
                        return true;
                    };
                    DisplayUnitSystem.prototype.shouldFallbackToScientific = function (value, format) {
                        return !this.hasScientitifcFormat(format)
                            && this.supportsScientificFormat(format)
                            && this.isScientific(value);
                    };
                    DisplayUnitSystem.prototype.getScientificFormat = function (data, format, decimals, trailingZeros) {
                        // Use scientific format outside of the range
                        if (this.isFormatSupported(format) && this.shouldFallbackToScientific(data, format)) {
                            var numericFormat = NumberFormat.getNumericFormat(data, format);
                            if (decimals)
                                numericFormat = NumberFormat.addDecimalsToFormat(numericFormat ? numericFormat : "0", Math.abs(decimals), trailingZeros);
                            if (numericFormat)
                                return numericFormat + SCIENTIFIC_FORMAT;
                            else
                                return DEFAULT_SCIENTIFIC_FORMAT;
                        }
                        return format;
                    };
                    return DisplayUnitSystem;
                }());
                DisplayUnitSystem.UNSUPPORTED_FORMATS = /^(p\d*)|(e\d*)$/i;
                formatting.DisplayUnitSystem = DisplayUnitSystem;
                /** Provides a unit system that is defined by formatting in the model, and is suitable for visualizations shown in single number visuals in explore mode. */
                var NoDisplayUnitSystem = (function (_super) {
                    __extends(NoDisplayUnitSystem, _super);
                    // Constructor
                    function NoDisplayUnitSystem() {
                        return _super.call(this, []) || this;
                    }
                    return NoDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.NoDisplayUnitSystem = NoDisplayUnitSystem;
                /** Provides a unit system that creates a more concise format for displaying values. This is suitable for most of the cases where
                    we are showing values (chart axes) and as such it is the default unit system. */
                var DefaultDisplayUnitSystem = (function (_super) {
                    __extends(DefaultDisplayUnitSystem, _super);
                    // Constructor
                    function DefaultDisplayUnitSystem(unitLookup) {
                        return _super.call(this, DefaultDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    // Methods
                    DefaultDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    DefaultDisplayUnitSystem.reset = function () {
                        DefaultDisplayUnitSystem.units = null;
                    };
                    DefaultDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!DefaultDisplayUnitSystem.units) {
                            DefaultDisplayUnitSystem.units = createDisplayUnits(unitLookup, function (value, previousUnitValue, min) {
                                // When dealing with millions/billions/trillions we need to switch to millions earlier: for example instead of showing 100K 200K 300K we should show 0.1M 0.2M 0.3M etc
                                if (value - previousUnitValue >= 1000) {
                                    return value / 10;
                                }
                                return min;
                            });
                            // Ensure last unit has max of infinity
                            DefaultDisplayUnitSystem.units[DefaultDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return DefaultDisplayUnitSystem.units;
                    };
                    return DefaultDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.DefaultDisplayUnitSystem = DefaultDisplayUnitSystem;
                /** Provides a unit system that creates a more concise format for displaying values, but only allows showing a unit if we have at least
                    one of those units (e.g. 0.9M is not allowed since it's less than 1 million). This is suitable for cases such as dashboard tiles
                    where we have restricted space but do not want to show partial units. */
                var WholeUnitsDisplayUnitSystem = (function (_super) {
                    __extends(WholeUnitsDisplayUnitSystem, _super);
                    // Constructor
                    function WholeUnitsDisplayUnitSystem(unitLookup) {
                        return _super.call(this, WholeUnitsDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    WholeUnitsDisplayUnitSystem.reset = function () {
                        WholeUnitsDisplayUnitSystem.units = null;
                    };
                    WholeUnitsDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!WholeUnitsDisplayUnitSystem.units) {
                            WholeUnitsDisplayUnitSystem.units = createDisplayUnits(unitLookup);
                            // Ensure last unit has max of infinity
                            WholeUnitsDisplayUnitSystem.units[WholeUnitsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return WholeUnitsDisplayUnitSystem.units;
                    };
                    WholeUnitsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    return WholeUnitsDisplayUnitSystem;
                }(DisplayUnitSystem));
                formatting.WholeUnitsDisplayUnitSystem = WholeUnitsDisplayUnitSystem;
                var DataLabelsDisplayUnitSystem = (function (_super) {
                    __extends(DataLabelsDisplayUnitSystem, _super);
                    function DataLabelsDisplayUnitSystem(unitLookup) {
                        return _super.call(this, DataLabelsDisplayUnitSystem.getUnits(unitLookup)) || this;
                    }
                    DataLabelsDisplayUnitSystem.prototype.isFormatSupported = function (format) {
                        return !DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS.test(format);
                    };
                    DataLabelsDisplayUnitSystem.getUnits = function (unitLookup) {
                        if (!DataLabelsDisplayUnitSystem.units) {
                            var units = [];
                            var adjustMinBasedOnPreviousUnit = function (value, previousUnitValue, min) {
                                // Never returns true, we are always ignoring
                                // We do not early switch (e.g. 100K instead of 0.1M)
                                // Intended? If so, remove this function, otherwise, remove if statement
                                if (value === -1)
                                    if (value - previousUnitValue >= 1000) {
                                        return value / 10;
                                    }
                                return min;
                            };
                            // Add Auto & None
                            var names = unitLookup(-1);
                            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                            names = unitLookup(0);
                            addUnitIfNonEmpty(units, DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE, names.title, names.format, adjustMinBasedOnPreviousUnit);
                            // Add normal units
                            DataLabelsDisplayUnitSystem.units = units.concat(createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit));
                            // Ensure last unit has max of infinity
                            DataLabelsDisplayUnitSystem.units[DataLabelsDisplayUnitSystem.units.length - 1].applicableRangeMax = Infinity;
                        }
                        return DataLabelsDisplayUnitSystem.units;
                    };
                    DataLabelsDisplayUnitSystem.prototype.format = function (data, format, decimals, trailingZeros, cultureSelector) {
                        format = this.getScientificFormat(data, format, decimals, trailingZeros);
                        return _super.prototype.format.call(this, data, format, decimals, trailingZeros, cultureSelector);
                    };
                    return DataLabelsDisplayUnitSystem;
                }(DisplayUnitSystem));
                // Constants
                DataLabelsDisplayUnitSystem.AUTO_DISPLAYUNIT_VALUE = 0;
                DataLabelsDisplayUnitSystem.NONE_DISPLAYUNIT_VALUE = 1;
                DataLabelsDisplayUnitSystem.UNSUPPORTED_FORMATS = /^(e\d*)$/i;
                formatting.DataLabelsDisplayUnitSystem = DataLabelsDisplayUnitSystem;
                function createDisplayUnits(unitLookup, adjustMinBasedOnPreviousUnit) {
                    var units = [];
                    for (var i = 3; i < maxExponent; i++) {
                        var names = unitLookup(i);
                        if (names)
                            addUnitIfNonEmpty(units, Double.pow10(i), names.title, names.format, adjustMinBasedOnPreviousUnit);
                    }
                    return units;
                }
                function addUnitIfNonEmpty(units, value, title, labelFormat, adjustMinBasedOnPreviousUnit) {
                    if (title || labelFormat) {
                        var min = value;
                        if (units.length > 0) {
                            var previousUnit = units[units.length - 1];
                            if (adjustMinBasedOnPreviousUnit)
                                min = adjustMinBasedOnPreviousUnit(value, previousUnit.value, min);
                            previousUnit.applicableRangeMax = min;
                        }
                        var unit = new DisplayUnit();
                        unit.value = value;
                        unit.applicableRangeMin = min;
                        unit.applicableRangeMax = min * 1000;
                        unit.title = title;
                        unit.labelFormat = labelFormat;
                        units.push(unit);
                    }
                }
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/**
 * Contains functions/constants to aid in text manupilation.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                var textUtil;
                (function (textUtil) {
                    /**
                     * Remove breaking spaces from given string and replace by none breaking space (&nbsp).
                     */
                    function removeBreakingSpaces(str) {
                        return str.toString().replace(new RegExp(" ", "g"), "&nbsp");
                    }
                    textUtil.removeBreakingSpaces = removeBreakingSpaces;
                    /**
                     * Remove ellipses from a given string
                     */
                    function removeEllipses(str) {
                        return str.replace(/(…)|(\.\.\.)/g, "");
                    }
                    textUtil.removeEllipses = removeEllipses;
                    /**
                    * Replace every whitespace (0x20) with Non-Breaking Space (0xA0)
                     * @param {string} txt String to replace White spaces
                     * @returns Text after replcing white spaces
                     */
                    function replaceSpaceWithNBSP(txt) {
                        if (txt != null) {
                            return txt.replace(/ /g, "\xA0");
                        }
                    }
                    textUtil.replaceSpaceWithNBSP = replaceSpaceWithNBSP;
                })(textUtil = formatting.textUtil || (formatting.textUtil = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var formatting;
            (function (formatting) {
                // powerbi.extensibility.utils.type
                var ValueType = powerbi.extensibility.utils.type.ValueType;
                var PrimitiveType = powerbi.extensibility.utils.type.PrimitiveType;
                var Double = powerbi.extensibility.utils.type.Double;
                // powerbi.extensibility.utils.formatting
                var stringExtensions = powerbi.extensibility.utils.formatting.stringExtensions;
                var DisplayUnitSystemType = powerbi.extensibility.utils.formatting.DisplayUnitSystemType;
                var DefaultDisplayUnitSystem = powerbi.extensibility.utils.formatting.DefaultDisplayUnitSystem;
                var NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                var WholeUnitsDisplayUnitSystem = powerbi.extensibility.utils.formatting.WholeUnitsDisplayUnitSystem;
                var DateTimeSequence = powerbi.extensibility.utils.formatting.DateTimeSequence;
                var NoDisplayUnitSystem = powerbi.extensibility.utils.formatting.NoDisplayUnitSystem;
                var DataLabelsDisplayUnitSystem = powerbi.extensibility.utils.formatting.DataLabelsDisplayUnitSystem;
                var formattingService = powerbi.extensibility.utils.formatting.formattingService;
                // powerbi.extensibility.utils.dataview
                var DataViewObjects = powerbi.extensibility.utils.dataview.DataViewObjects;
                var valueFormatter;
                (function (valueFormatter) {
                    var StringExtensions = stringExtensions;
                    var BeautifiedFormat = {
                        "0.00 %;-0.00 %;0.00 %": "Percentage",
                        "0.0 %;-0.0 %;0.0 %": "Percentage1",
                    };
                    valueFormatter.DefaultIntegerFormat = "g";
                    valueFormatter.DefaultNumericFormat = "#,0.00";
                    valueFormatter.DefaultDateFormat = "d";
                    var defaultLocalizedStrings = {
                        "NullValue": "(Blank)",
                        "BooleanTrue": "True",
                        "BooleanFalse": "False",
                        "NaNValue": "NaN",
                        "InfinityValue": "+Infinity",
                        "NegativeInfinityValue": "-Infinity",
                        "RestatementComma": "{0}, {1}",
                        "RestatementCompoundAnd": "{0} and {1}",
                        "RestatementCompoundOr": "{0} or {1}",
                        "DisplayUnitSystem_EAuto_Title": "Auto",
                        "DisplayUnitSystem_E0_Title": "None",
                        "DisplayUnitSystem_E3_LabelFormat": "{0}K",
                        "DisplayUnitSystem_E3_Title": "Thousands",
                        "DisplayUnitSystem_E6_LabelFormat": "{0}M",
                        "DisplayUnitSystem_E6_Title": "Millions",
                        "DisplayUnitSystem_E9_LabelFormat": "{0}bn",
                        "DisplayUnitSystem_E9_Title": "Billions",
                        "DisplayUnitSystem_E12_LabelFormat": "{0}T",
                        "DisplayUnitSystem_E12_Title": "Trillions",
                        "Percentage": "#,0.##%",
                        "Percentage1": "#,0.#%",
                        "TableTotalLabel": "Total",
                        "Tooltip_HighlightedValueDisplayName": "Highlighted",
                        "Funnel_PercentOfFirst": "Percent of first",
                        "Funnel_PercentOfPrevious": "Percent of previous",
                        "Funnel_PercentOfFirst_Highlight": "Percent of first (highlighted)",
                        "Funnel_PercentOfPrevious_Highlight": "Percent of previous (highlighted)",
                        // Geotagging strings
                        "GeotaggingString_Continent": "continent",
                        "GeotaggingString_Continents": "continents",
                        "GeotaggingString_Country": "country",
                        "GeotaggingString_Countries": "countries",
                        "GeotaggingString_State": "state",
                        "GeotaggingString_States": "states",
                        "GeotaggingString_City": "city",
                        "GeotaggingString_Cities": "cities",
                        "GeotaggingString_Town": "town",
                        "GeotaggingString_Towns": "towns",
                        "GeotaggingString_Province": "province",
                        "GeotaggingString_Provinces": "provinces",
                        "GeotaggingString_County": "county",
                        "GeotaggingString_Counties": "counties",
                        "GeotaggingString_Village": "village",
                        "GeotaggingString_Villages": "villages",
                        "GeotaggingString_Post": "post",
                        "GeotaggingString_Zip": "zip",
                        "GeotaggingString_Code": "code",
                        "GeotaggingString_Place": "place",
                        "GeotaggingString_Places": "places",
                        "GeotaggingString_Address": "address",
                        "GeotaggingString_Addresses": "addresses",
                        "GeotaggingString_Street": "street",
                        "GeotaggingString_Streets": "streets",
                        "GeotaggingString_Longitude": "longitude",
                        "GeotaggingString_Longitude_Short": "lon",
                        "GeotaggingString_Longitude_Short2": "long",
                        "GeotaggingString_Latitude": "latitude",
                        "GeotaggingString_Latitude_Short": "lat",
                        "GeotaggingString_PostalCode": "postal code",
                        "GeotaggingString_PostalCodes": "postal codes",
                        "GeotaggingString_ZipCode": "zip code",
                        "GeotaggingString_ZipCodes": "zip codes",
                        "GeotaggingString_Territory": "territory",
                        "GeotaggingString_Territories": "territories",
                    };
                    function beautify(format) {
                        var key = BeautifiedFormat[format];
                        if (key)
                            return defaultLocalizedStrings[key] || format;
                        return format;
                    }
                    function describeUnit(exponent) {
                        var exponentLookup = (exponent === -1) ? "Auto" : exponent.toString();
                        var title = defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_Title"];
                        var format = (exponent <= 0) ? "{0}" : defaultLocalizedStrings["DisplayUnitSystem_E" + exponentLookup + "_LabelFormat"];
                        if (title || format)
                            return { title: title, format: format };
                    }
                    function getLocalizedString(stringId) {
                        return defaultLocalizedStrings[stringId];
                    }
                    valueFormatter.getLocalizedString = getLocalizedString;
                    // NOTE: Define default locale options, but these can be overriden by setLocaleOptions.
                    var localizationOptions = {
                        nullValue: defaultLocalizedStrings["NullValue"],
                        trueValue: defaultLocalizedStrings["BooleanTrue"],
                        falseValue: defaultLocalizedStrings["BooleanFalse"],
                        NaN: defaultLocalizedStrings["NaNValue"],
                        infinity: defaultLocalizedStrings["InfinityValue"],
                        negativeInfinity: defaultLocalizedStrings["NegativeInfinityValue"],
                        beautify: function (format) { return beautify(format); },
                        describe: function (exponent) { return describeUnit(exponent); },
                        restatementComma: defaultLocalizedStrings["RestatementComma"],
                        restatementCompoundAnd: defaultLocalizedStrings["RestatementCompoundAnd"],
                        restatementCompoundOr: defaultLocalizedStrings["RestatementCompoundOr"],
                    };
                    var MaxScaledDecimalPlaces = 2;
                    var MaxValueForDisplayUnitRounding = 1000;
                    var MinIntegerValueForDisplayUnits = 10000;
                    var MinPrecisionForDisplayUnits = 2;
                    var DateTimeMetadataColumn = {
                        displayName: "",
                        type: ValueType.fromPrimitiveTypeAndCategory(PrimitiveType.DateTime),
                    };
                    function getFormatMetadata(format) {
                        return NumberFormat.getCustomFormatMetadata(format);
                    }
                    valueFormatter.getFormatMetadata = getFormatMetadata;
                    function setLocaleOptions(options) {
                        localizationOptions = options;
                        DefaultDisplayUnitSystem.reset();
                        WholeUnitsDisplayUnitSystem.reset();
                    }
                    valueFormatter.setLocaleOptions = setLocaleOptions;
                    function createDefaultFormatter(formatString, allowFormatBeautification, cultureSelector) {
                        var formatBeautified = allowFormatBeautification
                            ? localizationOptions.beautify(formatString)
                            : formatString;
                        return {
                            format: function (value) {
                                if (value == null) {
                                    return localizationOptions.nullValue;
                                }
                                return formatCore({
                                    value: value,
                                    cultureSelector: cultureSelector,
                                    format: formatBeautified
                                });
                            }
                        };
                    }
                    valueFormatter.createDefaultFormatter = createDefaultFormatter;
                    /** Creates an IValueFormatter to be used for a range of values. */
                    function create(options) {
                        var format = !!options.allowFormatBeautification
                            ? localizationOptions.beautify(options.format)
                            : options.format;
                        var cultureSelector = options.cultureSelector;
                        if (shouldUseNumericDisplayUnits(options)) {
                            var displayUnitSystem_1 = createDisplayUnitSystem(options.displayUnitSystemType);
                            var singleValueFormattingMode_1 = !!options.formatSingleValues;
                            displayUnitSystem_1.update(Math.max(Math.abs(options.value || 0), Math.abs(options.value2 || 0)));
                            var forcePrecision_1 = options.precision != null;
                            var decimals_1;
                            if (forcePrecision_1)
                                decimals_1 = -options.precision;
                            else if (displayUnitSystem_1.displayUnit && displayUnitSystem_1.displayUnit.value > 1)
                                decimals_1 = -MaxScaledDecimalPlaces;
                            return {
                                format: function (value) {
                                    var formattedValue = getStringFormat(value, true /*nullsAreBlank*/);
                                    if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                                        return formattedValue;
                                    }
                                    // Round to Double.DEFAULT_PRECISION
                                    if (value
                                        && !displayUnitSystem_1.isScalingUnit()
                                        && Math.abs(value) < MaxValueForDisplayUnitRounding
                                        && !forcePrecision_1) {
                                        value = Double.roundToPrecision(value);
                                    }
                                    return singleValueFormattingMode_1
                                        ? displayUnitSystem_1.formatSingleValue(value, format, decimals_1, forcePrecision_1, cultureSelector)
                                        : displayUnitSystem_1.format(value, format, decimals_1, forcePrecision_1, cultureSelector);
                                },
                                displayUnit: displayUnitSystem_1.displayUnit,
                                options: options
                            };
                        }
                        if (shouldUseDateUnits(options.value, options.value2, options.tickCount)) {
                            var unit_1 = DateTimeSequence.getIntervalUnit(options.value /* minDate */, options.value2 /* maxDate */, options.tickCount);
                            return {
                                format: function (value) {
                                    if (value == null) {
                                        return localizationOptions.nullValue;
                                    }
                                    var formatString = formattingService.dateFormatString(unit_1);
                                    return formatCore({
                                        value: value,
                                        cultureSelector: cultureSelector,
                                        format: formatString,
                                    });
                                },
                                options: options
                            };
                        }
                        return createDefaultFormatter(format, false, cultureSelector);
                    }
                    valueFormatter.create = create;
                    function format(value, format, allowFormatBeautification, cultureSelector) {
                        if (value == null) {
                            return localizationOptions.nullValue;
                        }
                        var formatString = !!allowFormatBeautification
                            ? localizationOptions.beautify(format)
                            : format;
                        return formatCore({
                            value: value,
                            cultureSelector: cultureSelector,
                            format: formatString
                        });
                    }
                    valueFormatter.format = format;
                    /**
                     * Value formatting function to handle variant measures.
                     * For a Date/Time value within a non-date/time field, it's formatted with the default date/time formatString instead of as a number
                     * @param {any} value Value to be formatted
                     * @param {DataViewMetadataColumn} column Field which the value belongs to
                     * @param {DataViewObjectPropertyIdentifier} formatStringProp formatString Property ID
                     * @param {boolean} nullsAreBlank? Whether to show "(Blank)" instead of empty string for null values
                     * @returns Formatted value
                     */
                    function formatVariantMeasureValue(value, column, formatStringProp, nullsAreBlank, cultureSelector) {
                        // If column type is not datetime, but the value is of time datetime,
                        // then use the default date format string
                        if (!(column && column.type && column.type.dateTime) && value instanceof Date) {
                            var valueFormat = getFormatString(DateTimeMetadataColumn, null, false);
                            return formatCore({
                                value: value,
                                nullsAreBlank: nullsAreBlank,
                                cultureSelector: cultureSelector,
                                format: valueFormat
                            });
                        }
                        else {
                            var valueFormat = getFormatString(column, formatStringProp);
                            return formatCore({
                                value: value,
                                nullsAreBlank: nullsAreBlank,
                                cultureSelector: cultureSelector,
                                format: valueFormat
                            });
                        }
                    }
                    valueFormatter.formatVariantMeasureValue = formatVariantMeasureValue;
                    function createDisplayUnitSystem(displayUnitSystemType) {
                        if (displayUnitSystemType == null)
                            return new DefaultDisplayUnitSystem(localizationOptions.describe);
                        switch (displayUnitSystemType) {
                            case DisplayUnitSystemType.Default:
                                return new DefaultDisplayUnitSystem(localizationOptions.describe);
                            case DisplayUnitSystemType.WholeUnits:
                                return new WholeUnitsDisplayUnitSystem(localizationOptions.describe);
                            case DisplayUnitSystemType.Verbose:
                                return new NoDisplayUnitSystem();
                            case DisplayUnitSystemType.DataLabels:
                                return new DataLabelsDisplayUnitSystem(localizationOptions.describe);
                            default:
                                return new DefaultDisplayUnitSystem(localizationOptions.describe);
                        }
                    }
                    valueFormatter.createDisplayUnitSystem = createDisplayUnitSystem;
                    function shouldUseNumericDisplayUnits(options) {
                        var value = options.value;
                        var value2 = options.value2;
                        var format = options.format;
                        // For singleValue visuals like card, gauge we don't want to roundoff data to the nearest thousands so format the whole number / integers below 10K to not use display units
                        if (options.formatSingleValues && format) {
                            if (Math.abs(value) < MinIntegerValueForDisplayUnits) {
                                var isCustomFormat = !NumberFormat.isStandardFormat(format);
                                if (isCustomFormat) {
                                    var precision = NumberFormat.getCustomFormatMetadata(format, true /*calculatePrecision*/).precision;
                                    if (precision < MinPrecisionForDisplayUnits)
                                        return false;
                                }
                                else if (Double.isInteger(value))
                                    return false;
                            }
                        }
                        if ((typeof value === "number") || (typeof value2 === "number")) {
                            return true;
                        }
                    }
                    function shouldUseDateUnits(value, value2, tickCount) {
                        // must check both value and value2 because we'll need to get an interval for date units
                        return (value instanceof Date) && (value2 instanceof Date) && (tickCount !== undefined && tickCount !== null);
                    }
                    /*
                     * Get the column format. Order of precendence is:
                     *  1. Column format
                     *  2. Default PowerView policy for column type
                     */
                    function getFormatString(column, formatStringProperty, suppressTypeFallback) {
                        if (column) {
                            if (formatStringProperty) {
                                var propertyValue = DataViewObjects.getValue(column.objects, formatStringProperty);
                                if (propertyValue)
                                    return propertyValue;
                            }
                            if (!suppressTypeFallback) {
                                var columnType = column.type;
                                if (columnType) {
                                    if (columnType.dateTime)
                                        return valueFormatter.DefaultDateFormat;
                                    if (columnType.integer) {
                                        if (columnType.temporal && columnType.temporal.year)
                                            return "0";
                                        return valueFormatter.DefaultIntegerFormat;
                                    }
                                    if (columnType.numeric)
                                        return valueFormatter.DefaultNumericFormat;
                                }
                            }
                        }
                    }
                    valueFormatter.getFormatString = getFormatString;
                    function getFormatStringByColumn(column, suppressTypeFallback) {
                        if (column) {
                            if (column.format) {
                                return column.format;
                            }
                            if (!suppressTypeFallback) {
                                var columnType = column.type;
                                if (columnType) {
                                    if (columnType.dateTime) {
                                        return valueFormatter.DefaultDateFormat;
                                    }
                                    if (columnType.integer) {
                                        if (columnType.temporal && columnType.temporal.year) {
                                            return "0";
                                        }
                                        return valueFormatter.DefaultIntegerFormat;
                                    }
                                    if (columnType.numeric) {
                                        return valueFormatter.DefaultNumericFormat;
                                    }
                                }
                            }
                        }
                        return undefined;
                    }
                    valueFormatter.getFormatStringByColumn = getFormatStringByColumn;
                    function formatListCompound(strings, conjunction) {
                        var result;
                        if (!strings) {
                            return null;
                        }
                        var length = strings.length;
                        if (length > 0) {
                            result = strings[0];
                            var lastIndex = length - 1;
                            for (var i = 1, len = lastIndex; i < len; i++) {
                                var value = strings[i];
                                result = StringExtensions.format(localizationOptions.restatementComma, result, value);
                            }
                            if (length > 1) {
                                var value = strings[lastIndex];
                                result = StringExtensions.format(conjunction, result, value);
                            }
                        }
                        else {
                            result = null;
                        }
                        return result;
                    }
                    /** The returned string will look like 'A, B, ..., and C'  */
                    function formatListAnd(strings) {
                        return formatListCompound(strings, localizationOptions.restatementCompoundAnd);
                    }
                    valueFormatter.formatListAnd = formatListAnd;
                    /** The returned string will look like 'A, B, ..., or C' */
                    function formatListOr(strings) {
                        return formatListCompound(strings, localizationOptions.restatementCompoundOr);
                    }
                    valueFormatter.formatListOr = formatListOr;
                    function formatCore(options) {
                        var value = options.value, format = options.format, nullsAreBlank = options.nullsAreBlank, cultureSelector = options.cultureSelector;
                        var formattedValue = getStringFormat(value, nullsAreBlank ? nullsAreBlank : false);
                        if (!StringExtensions.isNullOrUndefinedOrWhiteSpaceString(formattedValue)) {
                            return formattedValue;
                        }
                        return formattingService.formatValue(value, format, cultureSelector);
                    }
                    function getStringFormat(value, nullsAreBlank) {
                        if (value == null && nullsAreBlank) {
                            return localizationOptions.nullValue;
                        }
                        if (value === true) {
                            return localizationOptions.trueValue;
                        }
                        if (value === false) {
                            return localizationOptions.falseValue;
                        }
                        if (typeof value === "number" && isNaN(value)) {
                            return localizationOptions.NaN;
                        }
                        if (value === Number.NEGATIVE_INFINITY) {
                            return localizationOptions.negativeInfinity;
                        }
                        if (value === Number.POSITIVE_INFINITY) {
                            return localizationOptions.infinity;
                        }
                        return "";
                    }
                    function getDisplayUnits(displayUnitSystemType) {
                        var displayUnitSystem = createDisplayUnitSystem(displayUnitSystemType);
                        return displayUnitSystem.units;
                    }
                    valueFormatter.getDisplayUnits = getDisplayUnits;
                })(valueFormatter = formatting.valueFormatter || (formatting.valueFormatter = {}));
            })(formatting = utils.formatting || (utils.formatting = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));

/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var axis;
                (function (axis) {
                    var scale;
                    (function (scale) {
                        scale.linear = "linear";
                        scale.log = "log";
                    })(scale = axis.scale || (axis.scale = {}));
                })(axis = chart.axis || (chart.axis = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var axis;
                (function (axis) {
                    var style;
                    (function (style) {
                        style.showBoth = "showBoth";
                        style.showTitleOnly = "showTitleOnly";
                        style.showUnitOnly = "showUnitOnly";
                    })(style = axis.style || (axis.style = {}));
                })(axis = chart.axis || (chart.axis = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var axis;
                (function (axis) {
                    var AxisOrientation;
                    (function (AxisOrientation) {
                        // Names of these enums match the values passed into axis.orient([orientation])
                        AxisOrientation[AxisOrientation["top"] = 0] = "top";
                        AxisOrientation[AxisOrientation["bottom"] = 1] = "bottom";
                        AxisOrientation[AxisOrientation["left"] = 2] = "left";
                        AxisOrientation[AxisOrientation["right"] = 3] = "right";
                    })(AxisOrientation = axis.AxisOrientation || (axis.AxisOrientation = {}));
                })(axis = chart.axis || (chart.axis = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var axis;
                (function (axis_1) {
                    // powerbi.extensibility.utils.type
                    var ValueType = powerbi.extensibility.utils.type.ValueType;
                    var Double = powerbi.extensibility.utils.type.Double;
                    // powerbi.extensibility.utils.formatting
                    var DateTimeSequence = powerbi.extensibility.utils.formatting.DateTimeSequence;
                    var wordBreaker = powerbi.extensibility.utils.formatting.wordBreaker;
                    var valueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;
                    var numberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                    var textUtil = powerbi.extensibility.utils.formatting.textUtil;
                    var textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
                    // powerbi.extensibility.utils.chart
                    var axisScale = powerbi.extensibility.utils.chart.axis.scale;
                    var axisStyle = powerbi.extensibility.utils.chart.axis.style;
                    var XLabelMaxAllowedOverflow = 35;
                    var TextHeightConstant = 10;
                    var MinTickCount = 2;
                    var DefaultBestTickCount = 3;
                    var LeftPadding = 10;
                    var ScalarTickLabelPadding = 3;
                    var TickLabelPadding = 2;
                    var MinOrdinalRectThickness = 20;
                    /**
                     * Default ranges are for when we have a field chosen for the axis,
                     * but no values are returned by the query.
                     */
                    axis_1.emptyDomain = [0, 0];
                    axis_1.stackedAxisPadding = 5;
                    function getRecommendedNumberOfTicksForXAxis(availableWidth) {
                        if (availableWidth < 300) {
                            return 3;
                        }
                        if (availableWidth < 500) {
                            return 5;
                        }
                        return 8;
                    }
                    axis_1.getRecommendedNumberOfTicksForXAxis = getRecommendedNumberOfTicksForXAxis;
                    function getRecommendedNumberOfTicksForYAxis(availableWidth) {
                        if (availableWidth < 150) {
                            return 3;
                        }
                        if (availableWidth < 300) {
                            return 5;
                        }
                        return 8;
                    }
                    axis_1.getRecommendedNumberOfTicksForYAxis = getRecommendedNumberOfTicksForYAxis;
                    /**
                     * Get the best number of ticks based on minimum value, maximum value,
                     * measure metadata and max tick count.
                     *
                     * @param min The minimum of the data domain.
                     * @param max The maximum of the data domain.
                     * @param valuesMetadata The measure metadata array.
                     * @param maxTickCount The max count of intervals.
                     * @param isDateTime - flag to show single tick when min is equal to max.
                     */
                    function getBestNumberOfTicks(min, max, valuesMetadata, maxTickCount, isDateTime) {
                        if (isNaN(min) || isNaN(max)) {
                            return DefaultBestTickCount;
                        }
                        if (maxTickCount <= 1 || (max <= 1 && min >= -1)) {
                            return maxTickCount;
                        }
                        if (min === max) {
                            // datetime needs to only show one tick value in this case so formatting works correctly
                            if (!!isDateTime) {
                                return 1;
                            }
                            return DefaultBestTickCount;
                        }
                        if (hasNonIntegerData(valuesMetadata)) {
                            return maxTickCount;
                        }
                        // e.g. 5 - 2 + 1 = 4, => [2,3,4,5]
                        return Math.min(max - min + 1, maxTickCount);
                    }
                    axis_1.getBestNumberOfTicks = getBestNumberOfTicks;
                    function hasNonIntegerData(valuesMetadata) {
                        for (var i = 0, len = valuesMetadata.length; i < len; i++) {
                            var currentMetadata = valuesMetadata[i];
                            if (currentMetadata && currentMetadata.type && !currentMetadata.type.integer) {
                                return true;
                            }
                        }
                        return false;
                    }
                    axis_1.hasNonIntegerData = hasNonIntegerData;
                    function getRecommendedTickValues(maxTicks, scale, axisType, isScalar, minTickInterval) {
                        if (!isScalar || isOrdinalScale(scale)) {
                            return getRecommendedTickValuesForAnOrdinalRange(maxTicks, scale.domain());
                        }
                        else if (isDateTime(axisType)) {
                            return getRecommendedTickValuesForADateTimeRange(maxTicks, scale.domain());
                        }
                        return getRecommendedTickValuesForAQuantitativeRange(maxTicks, scale, minTickInterval);
                    }
                    axis_1.getRecommendedTickValues = getRecommendedTickValues;
                    function getRecommendedTickValuesForAnOrdinalRange(maxTicks, labels) {
                        var tickLabels = [];
                        // return no ticks in this case
                        if (maxTicks <= 0)
                            return tickLabels;
                        var len = labels.length;
                        if (maxTicks > len)
                            return labels;
                        for (var i = 0, step = Math.ceil(len / maxTicks); i < len; i += step) {
                            tickLabels.push(labels[i]);
                        }
                        return tickLabels;
                    }
                    axis_1.getRecommendedTickValuesForAnOrdinalRange = getRecommendedTickValuesForAnOrdinalRange;
                    function getRecommendedTickValuesForAQuantitativeRange(maxTicks, scale, minInterval) {
                        var tickLabels = [];
                        // if maxticks is zero return none
                        if (maxTicks === 0)
                            return tickLabels;
                        var quantitiveScale = scale;
                        if (quantitiveScale.ticks) {
                            tickLabels = quantitiveScale.ticks(maxTicks);
                            if (tickLabels.length > maxTicks && maxTicks > 1)
                                tickLabels = quantitiveScale.ticks(maxTicks - 1);
                            if (tickLabels.length < MinTickCount) {
                                tickLabels = quantitiveScale.ticks(maxTicks + 1);
                            }
                            tickLabels = createTrueZeroTickLabel(tickLabels);
                            if (minInterval && tickLabels.length > 1) {
                                var tickInterval = tickLabels[1] - tickLabels[0];
                                while (tickInterval > 0 && tickInterval < minInterval) {
                                    for (var i = 1; i < tickLabels.length; i++) {
                                        tickLabels.splice(i, 1);
                                    }
                                    tickInterval = tickInterval * 2;
                                }
                                // keep at least two labels - the loop above may trim all but one if we have odd # of tick labels and dynamic range < minInterval
                                if (tickLabels.length === 1) {
                                    tickLabels.push(tickLabels[0] + minInterval);
                                }
                            }
                            return tickLabels;
                        }
                        return tickLabels;
                    }
                    axis_1.getRecommendedTickValuesForAQuantitativeRange = getRecommendedTickValuesForAQuantitativeRange;
                    /**
                     * Round out very small zero tick values (e.g. -1e-33 becomes 0).
                     *
                     * @param ticks Array of numbers (from d3.scale.ticks([maxTicks])).
                     * @param epsilon Max ratio of calculated tick interval which we will recognize as zero.
                     *
                     * e.g.
                     *     ticks = [-2, -1, 1e-10, 3, 4]; epsilon = 1e-5;
                     *     closeZero = 1e-5 * | 2 - 1 | = 1e-5
                     *     // Tick values <= 1e-5 replaced with 0
                     *     return [-2, -1, 0, 3, 4];
                     */
                    function createTrueZeroTickLabel(ticks, epsilon) {
                        if (epsilon === void 0) { epsilon = 1e-5; }
                        if (!ticks || ticks.length < 2)
                            return ticks;
                        var closeZero = epsilon * Math.abs(ticks[1] - ticks[0]);
                        return ticks.map(function (tick) { return Math.abs(tick) <= closeZero ? 0 : tick; });
                    }
                    function getRecommendedTickValuesForADateTimeRange(maxTicks, dataDomain) {
                        var tickLabels = [];
                        if (dataDomain[0] === 0 && dataDomain[1] === 0)
                            return [];
                        var dateTimeTickLabels = DateTimeSequence.calculate(new Date(dataDomain[0]), new Date(dataDomain[1]), maxTicks).sequence;
                        tickLabels = dateTimeTickLabels.map(function (d) { return d.getTime(); });
                        tickLabels = ensureValuesInRange(tickLabels, dataDomain[0], dataDomain[1]);
                        return tickLabels;
                    }
                    function normalizeLinearDomain(domain) {
                        if (isNaN(domain.min) || isNaN(domain.max)) {
                            domain.min = axis_1.emptyDomain[0];
                            domain.max = axis_1.emptyDomain[1];
                        }
                        else if (domain.min === domain.max) {
                            // d3 linear scale will give zero tickValues if max === min, so extend a little
                            domain.min = domain.min < 0 ? domain.min * 1.2 : domain.min * 0.8;
                            domain.max = domain.max < 0 ? domain.max * 0.8 : domain.max * 1.2;
                        }
                        else {
                            // Check that min is very small and is a negligable portion of the whole domain.
                            // (fix floating pt precision bugs)
                            // sometimes highlight value math causes small negative numbers which makes the axis add
                            // a large tick interval instead of just rendering at zero.
                            if (Math.abs(domain.min) < 0.0001 && domain.min / (domain.max - domain.min) < 0.0001) {
                                domain.min = 0;
                            }
                        }
                        return domain;
                    }
                    function getMargin(availableWidth, availableHeight, xMargin, yMargin) {
                        return {
                            top: 20,
                            right: 30,
                            bottom: 40,
                            left: 30
                        };
                    }
                    axis_1.getMargin = getMargin;
                    // TODO: Put the parameters into one object
                    function getTickLabelMargins(viewport, yMarginLimit, textWidthMeasurer, textHeightMeasurer, axes, bottomMarginLimit, properties, scrollbarVisible, showOnRight, renderXAxis, renderY1Axis, renderY2Axis) {
                        var xAxisProperties = axes.x;
                        var y1AxisProperties = axes.y1;
                        var y2AxisProperties = axes.y2;
                        var xLabels = xAxisProperties.values;
                        var y1Labels = y1AxisProperties.values;
                        var leftOverflow = 0;
                        var rightOverflow = 0;
                        var maxWidthY1 = 0;
                        var maxWidthY2 = 0;
                        var xMax = 0; // bottom margin
                        var ordinalLabelOffset = xAxisProperties.categoryThickness ? xAxisProperties.categoryThickness / 2 : 0;
                        var scaleIsOrdinal = isOrdinalScale(xAxisProperties.scale);
                        var hasHierarchy = !arrayIsEmpty(axes.xStack);
                        var xLabelOuterPadding = 0;
                        if (xAxisProperties.outerPadding !== undefined) {
                            xLabelOuterPadding = xAxisProperties.outerPadding;
                        }
                        else if (xAxisProperties.xLabelMaxWidth !== undefined) {
                            xLabelOuterPadding = Math.max(0, (viewport.width - xAxisProperties.xLabelMaxWidth * xLabels.length) / 2);
                        }
                        var textHeight;
                        var rotation;
                        if (scrollbarVisible || hasHierarchy)
                            rotation = LabelLayoutStrategy.DefaultRotationWithScrollbar;
                        else
                            rotation = LabelLayoutStrategy.DefaultRotation;
                        if (renderY1Axis) {
                            for (var i = 0, len = y1Labels.length; i < len; i++) {
                                properties.text = y1Labels[i];
                                maxWidthY1 = Math.max(maxWidthY1, textWidthMeasurer(properties));
                            }
                        }
                        if (y2AxisProperties && renderY2Axis) {
                            var y2Labels = y2AxisProperties.values;
                            for (var i = 0, len = y2Labels.length; i < len; i++) {
                                properties.text = y2Labels[i];
                                maxWidthY2 = Math.max(maxWidthY2, textWidthMeasurer(properties));
                            }
                        }
                        textHeight = textHeightMeasurer(properties);
                        var maxNumLines = Math.floor(bottomMarginLimit / textHeight);
                        var xScale = xAxisProperties.scale;
                        var xDomain = xScale.domain();
                        if (renderXAxis && xLabels.length > 0) {
                            for (var i = 0, len = xLabels.length; i < len; i++) {
                                // find the max height of the x-labels, perhaps rotated or wrapped
                                var height = void 0;
                                properties.text = xLabels[i];
                                var width = textWidthMeasurer(properties);
                                if (xAxisProperties.willLabelsWordBreak) {
                                    // Split label and count rows
                                    var wordBreaks = wordBreaker.splitByWidth(properties.text, properties, textWidthMeasurer, xAxisProperties.xLabelMaxWidth, maxNumLines);
                                    height = wordBreaks.length * textHeight;
                                    // word wrapping will truncate at xLabelMaxWidth
                                    width = xAxisProperties.xLabelMaxWidth;
                                }
                                else if (!xAxisProperties.willLabelsFit && scaleIsOrdinal) {
                                    height = width * rotation.sine;
                                    width = width * rotation.cosine;
                                }
                                else {
                                    height = TextHeightConstant;
                                }
                                // calculate left and right overflow due to wide X labels
                                // (Note: no right overflow when rotated)
                                if (i === 0) {
                                    if (scaleIsOrdinal) {
                                        if (!xAxisProperties.willLabelsFit /*rotated text*/)
                                            leftOverflow = width - ordinalLabelOffset - xLabelOuterPadding;
                                        else
                                            leftOverflow = (width / 2) - ordinalLabelOffset - xLabelOuterPadding;
                                        leftOverflow = Math.max(leftOverflow, 0);
                                    }
                                    else if (xDomain.length > 1) {
                                        // Scalar - do some math
                                        var xPos = xScale(xDomain[0]);
                                        // xPos already incorporates xLabelOuterPadding, don't subtract it twice
                                        leftOverflow = (width / 2) - xPos;
                                        leftOverflow = Math.max(leftOverflow, 0);
                                    }
                                }
                                else if (i === len - 1) {
                                    if (scaleIsOrdinal) {
                                        // if we are rotating text (!willLabelsFit) there won't be any right overflow
                                        if (xAxisProperties.willLabelsFit || xAxisProperties.willLabelsWordBreak) {
                                            // assume this label is placed near the edge
                                            rightOverflow = (width / 2) - ordinalLabelOffset - xLabelOuterPadding;
                                            rightOverflow = Math.max(rightOverflow, 0);
                                        }
                                    }
                                    else if (xDomain.length > 1) {
                                        // Scalar - do some math
                                        var xPos = xScale(xDomain[1]);
                                        // xPos already incorporates xLabelOuterPadding, don't subtract it twice
                                        rightOverflow = (width / 2) - (viewport.width - xPos);
                                        rightOverflow = Math.max(rightOverflow, 0);
                                    }
                                }
                                xMax = Math.max(xMax, height);
                            }
                            // trim any actual overflow to the limit
                            leftOverflow = Math.min(leftOverflow, XLabelMaxAllowedOverflow);
                            rightOverflow = Math.min(rightOverflow, XLabelMaxAllowedOverflow);
                        }
                        var rightMargin = 0, leftMargin = 0, bottomMargin = Math.min(Math.ceil(xMax), bottomMarginLimit);
                        if (showOnRight) {
                            leftMargin = Math.min(Math.max(leftOverflow, maxWidthY2), yMarginLimit);
                            rightMargin = Math.min(Math.max(rightOverflow, maxWidthY1), yMarginLimit);
                        }
                        else {
                            leftMargin = Math.min(Math.max(leftOverflow, maxWidthY1), yMarginLimit);
                            rightMargin = Math.min(Math.max(rightOverflow, maxWidthY2), yMarginLimit);
                        }
                        if (hasHierarchy) {
                            bottomMargin += (textHeight + axis_1.stackedAxisPadding) * (axes.xStack.length - 1);
                        }
                        return {
                            xMax: Math.ceil(bottomMargin),
                            yLeft: Math.ceil(leftMargin),
                            yRight: Math.ceil(rightMargin),
                            stackHeight: textHeight + axis_1.stackedAxisPadding,
                        };
                    }
                    axis_1.getTickLabelMargins = getTickLabelMargins;
                    function columnDataTypeHasValue(dataType) {
                        return dataType && (dataType.bool || dataType.numeric || dataType.text || dataType.dateTime);
                    }
                    axis_1.columnDataTypeHasValue = columnDataTypeHasValue;
                    function createOrdinalType() {
                        return ValueType.fromDescriptor({ text: true });
                    }
                    axis_1.createOrdinalType = createOrdinalType;
                    function isOrdinal(dataType) {
                        return !!(dataType && (dataType.text || dataType.bool || (dataType.misc && dataType.misc.barcode) || (dataType.geography && dataType.geography.postalCode)));
                    }
                    axis_1.isOrdinal = isOrdinal;
                    function isOrdinalScale(scale) {
                        return typeof scale.rangePoints === "function";
                    }
                    axis_1.isOrdinalScale = isOrdinalScale;
                    function isDateTime(dataType) {
                        return !!(dataType && dataType.dateTime);
                    }
                    axis_1.isDateTime = isDateTime;
                    function invertScale(scale, x) {
                        if (isOrdinalScale(scale)) {
                            return invertOrdinalScale(scale, x);
                        }
                        return scale.invert(x);
                    }
                    axis_1.invertScale = invertScale;
                    function extent(scale) {
                        if (isOrdinalScale(scale)) {
                            return scale.rangeExtent();
                        }
                        return scale.range();
                    }
                    axis_1.extent = extent;
                    /**
                     * Uses the D3 scale to get the actual category thickness.
                     * @return The difference between the 1st and 2nd items in the range if there are 2 or more items in the range.
                     * Otherwise, the length of the entire range.
                     */
                    function getCategoryThickness(scale) {
                        var leftEdges = scale.range();
                        if (leftEdges.length < 2) {
                            // We have 1 item if we don't have 2 edges. If we have 1 item, just use the entire axis length as the thickness.
                            if (isOrdinalScale(scale)) {
                                // We should only hit this if we have an ordinal scale. Other scales should always have 2 items in their range.
                                var rangeExtent = scale.rangeExtent();
                                return rangeExtent[1] - rangeExtent[0];
                            }
                        }
                        return leftEdges[1] - leftEdges[0];
                    }
                    axis_1.getCategoryThickness = getCategoryThickness;
                    /**
                     * Inverts the ordinal scale. If x < scale.range()[0], then scale.domain()[0] is returned.
                     * Otherwise, it returns the greatest item in scale.domain() that's <= x.
                     */
                    function invertOrdinalScale(scale, x) {
                        var leftEdges = scale.range();
                        if (leftEdges.length < 2) {
                            return 0;
                        }
                        var width = scale.rangeBand();
                        var halfInnerPadding = (leftEdges[1] - leftEdges[0] - width) / 2;
                        var range = scale.range();
                        var domain = scale.domain();
                        // If x is less than the range, just return the 1st item in the domain
                        if (range[0] > x) {
                            return domain[0];
                        }
                        // d3.bisect returns the index at which we can insert something so that everything before it is lesser and everything after it is greater.
                        // The leftEdges don't include the inner padding, so we need to shift x over by halfInnerPadding to account it.
                        // We want index - 1 since that's the greatest value less than x, meaning that's the band we're in.
                        // Use that index to find the right value in the domain.
                        return domain[d3.bisect(range, x + halfInnerPadding) - 1];
                    }
                    axis_1.invertOrdinalScale = invertOrdinalScale;
                    function findClosestXAxisIndex(categoryValue, categoryAxisValues) {
                        var closestValueIndex = -1, minDistance = Number.MAX_VALUE;
                        for (var i in categoryAxisValues) {
                            var distance = Math.abs(categoryValue - categoryAxisValues[i].categoryValue);
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestValueIndex = parseInt(i, 10);
                            }
                        }
                        return closestValueIndex;
                    }
                    axis_1.findClosestXAxisIndex = findClosestXAxisIndex;
                    function lookupOrdinalIndex(scale, pixelValue) {
                        var closestValueIndex = -1;
                        var minDistance = Number.MAX_VALUE;
                        var domain = scale.domain();
                        if (domain.length < 2) {
                            return 0;
                        }
                        var halfWidth = (scale(1) - scale(0)) / 2;
                        for (var idx in domain) {
                            var leftEdgeInPixels = scale(idx);
                            var midPoint = leftEdgeInPixels + halfWidth;
                            var distance = Math.abs(pixelValue - midPoint);
                            if (distance < minDistance) {
                                minDistance = distance;
                                closestValueIndex = parseInt(idx, 10);
                            }
                        }
                        return closestValueIndex;
                    }
                    axis_1.lookupOrdinalIndex = lookupOrdinalIndex;
                    /** scale(value1) - scale(value2) with zero checking and min(+/-1, result) */
                    function diffScaled(scale, value1, value2) {
                        var value = scale(value1) - scale(value2);
                        if (value === 0) {
                            return 0;
                        }
                        if (value < 0) {
                            return Math.min(value, -1);
                        }
                        return Math.max(value, 1);
                    }
                    axis_1.diffScaled = diffScaled;
                    function createDomain(data, axisType, isScalar, forcedScalarDomain, ensureDomain) {
                        if (isScalar && !isOrdinal(axisType)) {
                            var userMin = void 0, userMax = void 0;
                            if (forcedScalarDomain && forcedScalarDomain.length === 2) {
                                userMin = forcedScalarDomain[0];
                                userMax = forcedScalarDomain[1];
                            }
                            return createScalarDomain(data, userMin, userMax, axisType, ensureDomain);
                        }
                        return createOrdinalDomain(data);
                    }
                    axis_1.createDomain = createDomain;
                    function ensureValuesInRange(values, min, max) {
                        var filteredValues = values.filter(function (v) { return v >= min && v <= max; });
                        if (filteredValues.length < 2) {
                            filteredValues = [min, max];
                        }
                        return filteredValues;
                    }
                    axis_1.ensureValuesInRange = ensureValuesInRange;
                    /**
                     * Gets the ValueType of a category column, defaults to Text if the type is not present.
                     */
                    function getCategoryValueType(metadataColumn, isScalar) {
                        if (metadataColumn && columnDataTypeHasValue(metadataColumn.type)) {
                            return metadataColumn.type;
                        }
                        if (isScalar) {
                            return ValueType.fromDescriptor({ numeric: true });
                        }
                        return ValueType.fromDescriptor({ text: true });
                    }
                    axis_1.getCategoryValueType = getCategoryValueType;
                    /**
                     * Create a D3 axis including scale. Can be vertical or horizontal, and either datetime, numeric, or text.
                     * @param options The properties used to create the axis.
                     */
                    function createAxis(options) {
                        var pixelSpan = options.pixelSpan, dataDomain = options.dataDomain, metaDataColumn = options.metaDataColumn, formatString = options.formatString, outerPadding = options.outerPadding || 0, isCategoryAxis = !!options.isCategoryAxis, isScalar = !!options.isScalar, isVertical = !!options.isVertical, useTickIntervalForDisplayUnits = !!options.useTickIntervalForDisplayUnits, // DEPRECATE: same meaning as isScalar?
                        getValueFn = options.getValueFn, categoryThickness = options.categoryThickness, axisDisplayUnits = options.axisDisplayUnits, axisPrecision = options.axisPrecision, is100Pct = !!options.is100Pct, disableNice = options.disableNice;
                        var dataType = getCategoryValueType(metaDataColumn, isScalar);
                        // Create the Scale
                        var scaleResult = createScale(options);
                        var scale = scaleResult.scale;
                        var bestTickCount = scaleResult.bestTickCount;
                        var scaleDomain = scale.domain();
                        var isLogScaleAllowed = isLogScalePossible(dataDomain, dataType);
                        // fix categoryThickness if scalar and the domain was adjusted when making the scale "nice"
                        if (categoryThickness && isScalar && dataDomain && dataDomain.length === 2) {
                            var oldSpan = dataDomain[1] - dataDomain[0];
                            var newSpan = scaleDomain[1] - scaleDomain[0];
                            if (oldSpan > 0 && newSpan > 0) {
                                categoryThickness = categoryThickness * oldSpan / newSpan;
                            }
                        }
                        // Prepare Tick Values for formatting
                        var tickValues;
                        if (isScalar && bestTickCount === 1 && !arrayIsEmpty(dataDomain)) {
                            tickValues = [dataDomain[0]];
                        }
                        else {
                            var minTickInterval = isScalar ? getMinTickValueInterval(formatString, dataType, is100Pct) : undefined;
                            tickValues = getRecommendedTickValues(bestTickCount, scale, dataType, isScalar, minTickInterval);
                        }
                        if (options.scaleType && options.scaleType === axisScale.log && isLogScaleAllowed) {
                            tickValues = tickValues.filter(function (d) { return powerOfTen(d); });
                        }
                        var formatter = createFormatter(scaleDomain, dataDomain, dataType, isScalar, formatString, bestTickCount, tickValues, getValueFn, useTickIntervalForDisplayUnits, axisDisplayUnits, axisPrecision);
                        // sets default orientation only, cartesianChart will fix y2 for comboChart
                        // tickSize(pixelSpan) is used to create gridLines
                        var axis = d3.svg.axis()
                            .scale(scale)
                            .tickSize(6, 0)
                            .orient(isVertical ? "left" : "bottom")
                            .ticks(bestTickCount)
                            .tickValues(tickValues);
                        var formattedTickValues = [];
                        if (metaDataColumn)
                            formattedTickValues = formatAxisTickValues(axis, tickValues, formatter, dataType, getValueFn);
                        var xLabelMaxWidth;
                        // Use category layout of labels if specified, otherwise use scalar layout of labels
                        if (!isScalar && categoryThickness) {
                            xLabelMaxWidth = Math.max(1, categoryThickness - TickLabelPadding * 2);
                        }
                        else {
                            // When there are 0 or 1 ticks, then xLabelMaxWidth = pixelSpan
                            xLabelMaxWidth = tickValues.length > 1 ? getScalarLabelMaxWidth(scale, tickValues) : pixelSpan;
                            xLabelMaxWidth = xLabelMaxWidth - ScalarTickLabelPadding * 2;
                        }
                        return {
                            scale: scale,
                            axis: axis,
                            formatter: formatter,
                            values: formattedTickValues,
                            axisType: dataType,
                            axisLabel: null,
                            isCategoryAxis: isCategoryAxis,
                            xLabelMaxWidth: xLabelMaxWidth,
                            categoryThickness: categoryThickness,
                            outerPadding: outerPadding,
                            usingDefaultDomain: scaleResult.usingDefaultDomain,
                            isLogScaleAllowed: isLogScaleAllowed,
                            dataDomain: dataDomain,
                        };
                    }
                    axis_1.createAxis = createAxis;
                    /**
                     * Creates a D3 axis for stacked axis usage. `options.innerTickSize` and `options.outerTickSize` will be defaulted to 0 if not set.
                     * `options.orientation` will be defaulted to "bottom" if not specified.
                     */
                    function createStackedAxis(options) {
                        var axis = options.axis;
                        var orientation = options.orient != null ? axis_1.AxisOrientation[options.orient] : axis_1.AxisOrientation[axis_1.AxisOrientation.bottom];
                        return d3.svg.axis()
                            .scale(options.scale)
                            .tickSize(options.innerTickSize || 0, options.outerTickSize || 0)
                            .orient(orientation)
                            .ticks(axis.ticks())
                            .tickValues(axis.tickValues())
                            .tickFormat(options.tickFormat);
                    }
                    axis_1.createStackedAxis = createStackedAxis;
                    function getScalarLabelMaxWidth(scale, tickValues) {
                        // find the distance between two ticks. scalar ticks can be anywhere, such as:
                        // |---50----------100--------|
                        if (scale && !arrayIsEmpty(tickValues)) {
                            return Math.abs(scale(tickValues[1]) - scale(tickValues[0]));
                        }
                        return 1;
                    }
                    function createScale(options) {
                        var pixelSpan = options.pixelSpan, dataDomain = options.dataDomain, metaDataColumn = options.metaDataColumn, outerPadding = options.outerPadding || 0, isScalar = !!options.isScalar, isVertical = !!options.isVertical, forcedTickCount = options.forcedTickCount, categoryThickness = options.categoryThickness, shouldClamp = !!options.shouldClamp, maxTickCount = options.maxTickCount, disableNice = options.disableNice, disableNiceOnlyForScale = options.disableNiceOnlyForScale, innerPadding = options.innerPadding, useRangePoint = options.useRangePoints;
                        var dataType = getCategoryValueType(metaDataColumn, isScalar);
                        var maxTicks = isVertical ? getRecommendedNumberOfTicksForYAxis(pixelSpan) : getRecommendedNumberOfTicksForXAxis(pixelSpan);
                        if (maxTickCount &&
                            maxTicks > maxTickCount)
                            maxTicks = maxTickCount;
                        var scalarDomain = dataDomain ? dataDomain.slice() : null;
                        var bestTickCount = maxTicks;
                        if (disableNice) {
                            bestTickCount = null;
                        }
                        var scale;
                        var usingDefaultDomain = false;
                        if (dataDomain == null || (dataDomain.length === 2 && dataDomain[0] == null && dataDomain[1] == null) || (dataDomain.length !== 2 && isScalar)) {
                            usingDefaultDomain = true;
                            if (dataType.dateTime || !isOrdinal(dataType))
                                dataDomain = axis_1.emptyDomain;
                            else
                                dataDomain = [];
                            if (isOrdinal(dataType)) {
                                scale = createOrdinalScale(pixelSpan, dataDomain, categoryThickness ? outerPadding / categoryThickness : 0, innerPadding, useRangePoint);
                            }
                            else {
                                scale = createNumericalScale(options.scaleType, pixelSpan, dataDomain, dataType, outerPadding, bestTickCount);
                            }
                        }
                        else {
                            if (isScalar && dataDomain.length > 0) {
                                if (!disableNice) {
                                    bestTickCount = forcedTickCount !== undefined
                                        ? (maxTicks !== 0 ? forcedTickCount : 0)
                                        : getBestNumberOfTicks(dataDomain[0], dataDomain[dataDomain.length - 1], [metaDataColumn], maxTicks, dataType.dateTime);
                                }
                                var normalizedRange = normalizeLinearDomain({ min: dataDomain[0], max: dataDomain[dataDomain.length - 1] });
                                scalarDomain = [normalizedRange.min, normalizedRange.max];
                            }
                            if (isScalar && dataType.numeric && !dataType.dateTime) {
                                if (scalarDomain && scalarDomain.length === 2 && scalarDomain[0] === 0 && scalarDomain[1] === 0 && options.zeroScalarDomain) {
                                    scalarDomain[0] = options.zeroScalarDomain[0];
                                    scalarDomain[1] = options.zeroScalarDomain[1];
                                }
                                var bestTickCountForNumericalScale = bestTickCount;
                                if (disableNiceOnlyForScale) {
                                    bestTickCountForNumericalScale = null;
                                }
                                scale = createNumericalScale(options.scaleType, pixelSpan, scalarDomain, dataType, outerPadding, bestTickCountForNumericalScale, shouldClamp);
                            }
                            else if (isScalar && dataType.dateTime) {
                                // Use of a linear scale, instead of a D3.time.scale, is intentional since we want
                                // to control the formatting of the time values, since d3's implementation isn't
                                // in accordance to our design.
                                //     scalarDomain: should already be in long-int time (via category.values[0].getTime())
                                scale = createLinearScale(pixelSpan, scalarDomain, outerPadding, null, shouldClamp); // DO NOT PASS TICKCOUNT
                            }
                            else if (dataType.text || dataType.dateTime || dataType.numeric || dataType.bool) {
                                scale = createOrdinalScale(pixelSpan, scalarDomain, categoryThickness ? outerPadding / categoryThickness : 0, innerPadding, useRangePoint);
                                bestTickCount = maxTicks === 0 ? 0
                                    : Math.min(scalarDomain.length, (pixelSpan - outerPadding * 2) / MinOrdinalRectThickness);
                            }
                        }
                        // vertical ordinal axis (e.g. categorical bar chart) does not need to reverse
                        if (isVertical && isScalar) {
                            scale.range(scale.range().reverse());
                        }
                        normalizeInfinityInScale(scale);
                        return {
                            scale: scale,
                            bestTickCount: bestTickCount,
                            usingDefaultDomain: usingDefaultDomain,
                        };
                    }
                    axis_1.createScale = createScale;
                    function normalizeInfinityInScale(scale) {
                        // When large values (eg Number.MAX_VALUE) are involved, a call to scale.nice occasionally
                        // results in infinite values being included in the domain. To correct for that, we need to
                        // re-normalize the domain now to not include infinities.
                        var scaledDomain = scale.domain();
                        for (var i = 0, len = scaledDomain.length; i < len; ++i) {
                            if (scaledDomain[i] === Number.POSITIVE_INFINITY) {
                                scaledDomain[i] = Number.MAX_VALUE;
                            }
                            else if (scaledDomain[i] === Number.NEGATIVE_INFINITY) {
                                scaledDomain[i] = -Number.MAX_VALUE;
                            }
                        }
                        scale.domain(scaledDomain);
                    }
                    axis_1.normalizeInfinityInScale = normalizeInfinityInScale;
                    function createFormatter(scaleDomain, dataDomain, dataType, isScalar, formatString, bestTickCount, tickValues, getValueFn, useTickIntervalForDisplayUnits, axisDisplayUnits, axisPrecision) {
                        if (useTickIntervalForDisplayUnits === void 0) { useTickIntervalForDisplayUnits = false; }
                        var formatter;
                        if (dataType.dateTime) {
                            if (isScalar) {
                                var value = new Date(scaleDomain[0]);
                                var value2 = new Date(scaleDomain[1]);
                                // datetime with only one value needs to pass the same value
                                // (from the original dataDomain value, not the adjusted scaleDomain)
                                // so formatting works correctly.
                                if (bestTickCount === 1)
                                    value = value2 = new Date(dataDomain[0]);
                                // this will ignore the formatString and create one based on the smallest non-zero portion of the values supplied.
                                formatter = valueFormatter.create({
                                    format: formatString,
                                    value: value,
                                    value2: value2,
                                    tickCount: bestTickCount,
                                });
                            }
                            else {
                                // Use the model formatString for ordinal datetime
                                formatter = valueFormatter.createDefaultFormatter(formatString, true);
                            }
                        }
                        else {
                            if (useTickIntervalForDisplayUnits && isScalar && tickValues.length > 1) {
                                var value1 = axisDisplayUnits ? axisDisplayUnits : tickValues[1] - tickValues[0];
                                var options = {
                                    format: formatString,
                                    value: value1,
                                    value2: 0,
                                    allowFormatBeautification: true,
                                };
                                if (axisPrecision)
                                    options.precision = axisPrecision;
                                else
                                    options.precision = calculateAxisPrecision(tickValues[0], tickValues[1], axisDisplayUnits, formatString);
                                formatter = valueFormatter.create(options);
                            }
                            else {
                                // do not use display units, just the basic value formatter
                                // datetime is handled above, so we are ordinal and either boolean, numeric, or text.
                                formatter = valueFormatter.createDefaultFormatter(formatString, true);
                            }
                        }
                        return formatter;
                    }
                    axis_1.createFormatter = createFormatter;
                    // returns # of decimal places necessary to distinguish between tick mark values
                    function calculateAxisPrecision(tickValue0, tickValue1, axisDisplayUnits, formatString) {
                        if (!axisDisplayUnits) {
                            var displayUnitSystem = valueFormatter.createDisplayUnitSystem();
                            displayUnitSystem.update(tickValue1 - tickValue0);
                            axisDisplayUnits = displayUnitSystem.displayUnit && displayUnitSystem.displayUnit.value || 1;
                        }
                        var value0 = (tickValue0 || 0) / axisDisplayUnits;
                        var value1 = (tickValue1 || 0) / axisDisplayUnits;
                        if (formatString) {
                            var partsPerScale = numberFormat.getCustomFormatMetadata(formatString, false, false, true).partsPerScale;
                            value0 *= partsPerScale;
                            value1 *= partsPerScale;
                        }
                        return Math.max(calculateAxisPrecisionForValue(value0), calculateAxisPrecisionForValue(value1));
                    }
                    axis_1.calculateAxisPrecision = calculateAxisPrecision;
                    function calculateAxisPrecisionForValue(value) {
                        if (value === 0)
                            return 0;
                        if (value < 0)
                            value = -value;
                        // calculate place of of the most significant decimal digit.
                        // 1 means tens digit
                        // 0 means the ones digit
                        // -1 means tenths digit
                        var mostSignificantDigit = Math.floor(Double.log10(value));
                        // rounding in various calculations can introduce extraneous amounts of precision in the number
                        // no need in an axis label to allow more than this number of digits as the *difference* between
                        // ticks
                        var MaxDigits = 5;
                        if (mostSignificantDigit >= 0) {
                            // value has an integer part but may also have a fraction part. get the number of significant
                            // digits in the integer part then see how many that leaves us for the fractional part
                            var integerSignificantDigits = mostSignificantDigit + 1;
                            var maxFractionDigits = MaxDigits - integerSignificantDigits;
                            if (maxFractionDigits <= 0) {
                                // the value's integer part has at least MaxDigits of precision
                                // so there aren't any left for the fractional part
                                return 0;
                            }
                            return numberOfDecimalPlaces(value, maxFractionDigits);
                        }
                        else {
                            // the interval has no integer part - it is a pure decimal fraction. we want the number
                            // of decimal places we have to allow so the precision doesn't exceed MaxDigits.
                            // knowing where there most significant digit is in the fraction, we can scale
                            // the number to the range [0.1, 1)
                            var rescaledValue = value / Double.pow10(mostSignificantDigit + 1);
                            // get the actual number of significant digits respecting the maximum
                            var fractionSignificantDigits = numberOfDecimalPlaces(rescaledValue, MaxDigits);
                            // this is the number of zeroes that are required due to the true scale of the decimal fraction
                            var fractionScaleDigits = -mostSignificantDigit - 1;
                            // number of decimal places is the number of zeros plus the limited number of significant digits
                            return fractionScaleDigits + fractionSignificantDigits;
                        }
                    }
                    // if we're limiting the decimal places to maxDecimalPlaces, how many decimal places do
                    // we actually need to avoid trailing zeroes? for example, if the value is 1.500001 and
                    // we want a maximum of three decimal places, the number rounded to three places is 1.500
                    // so only one decimal place is necessary.
                    function numberOfDecimalPlaces(value, maxDecimalPlaces) {
                        var formattedValue = value.toFixed(maxDecimalPlaces);
                        var decimalPoint = formattedValue.indexOf(".");
                        if (decimalPoint !== -1) {
                            for (var i = formattedValue.length; i-- > decimalPoint;) {
                                if (formattedValue[i] !== "0") {
                                    return i - decimalPoint;
                                }
                            }
                        }
                        return 0;
                    }
                    /**
                     * Format the linear tick labels or the category labels.
                     */
                    function formatAxisTickValues(axis, tickValues, formatter, dataType, getValueFn) {
                        var formattedTickValues = [];
                        if (!getValueFn)
                            getValueFn = function (data) { return data; };
                        if (formatter) {
                            axis.tickFormat(function (d) { return formatter.format(getValueFn(d, dataType)); });
                            formattedTickValues = tickValues.map(function (d) { return formatter.format(getValueFn(d, dataType)); });
                        }
                        else {
                            formattedTickValues = tickValues.map(function (d) { return getValueFn(d, dataType); });
                        }
                        return formattedTickValues;
                    }
                    function getMinTickValueInterval(formatString, columnType, is100Pct) {
                        var isCustomFormat = formatString && !numberFormat.isStandardFormat(formatString);
                        if (isCustomFormat) {
                            var precision = numberFormat.getCustomFormatMetadata(formatString, true /*calculatePrecision*/).precision;
                            if (formatString.indexOf("%") > -1)
                                precision += 2; // percent values are multiplied by 100 during formatting
                            return Math.pow(10, -precision);
                        }
                        else if (is100Pct) {
                            return 0.01;
                        }
                        else if (columnType.integer) {
                            return 1;
                        }
                        return 0;
                    }
                    axis_1.getMinTickValueInterval = getMinTickValueInterval;
                    function createScalarDomain(data, userMin, userMax, axisType, ensureDomain) {
                        if (data.length === 0) {
                            return null;
                        }
                        var defaultMinX = d3.min(data, function (kv) { return d3.min(kv.data, function (d) { return d && d.categoryValue; }); });
                        var defaultMaxX = d3.max(data, function (kv) { return d3.max(kv.data, function (d) { return d && d.categoryValue; }); });
                        return combineDomain([userMin, userMax], [defaultMinX, defaultMaxX], ensureDomain);
                    }
                    /**
                     * Creates a [min,max] from your Cartiesian data values.
                     *
                     * @param data The series array of CartesianDataPoints.
                     * @param includeZero Columns and bars includeZero, line and scatter do not.
                     */
                    function createValueDomain(data, includeZero) {
                        if (data.length === 0)
                            return null;
                        var minY = d3.min(data, function (kv) { return d3.min(kv.data, function (d) { return d && d.value; }); });
                        var maxY = d3.max(data, function (kv) { return d3.max(kv.data, function (d) { return d && d.value; }); });
                        if (includeZero) {
                            return [Math.min(minY, 0), Math.max(maxY, 0)];
                        }
                        return [minY, maxY];
                    }
                    axis_1.createValueDomain = createValueDomain;
                    function createOrdinalDomain(data) {
                        if (arrayIsEmpty(data)) {
                            return [];
                        }
                        // each series shares the same categories for oridinal axes (even if a series has some nulls)
                        var domain = [];
                        var firstSeries = data[0];
                        for (var _i = 0, _a = firstSeries.data; _i < _a.length; _i++) {
                            var dp = _a[_i];
                            if (!dp.highlight) {
                                domain.push(dp.categoryIndex);
                            }
                        }
                        return domain;
                    }
                    var LabelLayoutStrategy;
                    (function (LabelLayoutStrategy) {
                        function willLabelsFit(axisProperties, availableWidth, textMeasurer, properties) {
                            var labels = axisProperties.values;
                            if (labels.length === 0)
                                return false;
                            var labelMaxWidth = axisProperties.xLabelMaxWidth !== undefined
                                ? axisProperties.xLabelMaxWidth
                                : availableWidth / labels.length;
                            return !labels.some(function (d) {
                                properties.text = d;
                                return textMeasurer(properties) > labelMaxWidth;
                            });
                        }
                        LabelLayoutStrategy.willLabelsFit = willLabelsFit;
                        function willLabelsWordBreak(axisProperties, margin, availableWidth, textWidthMeasurer, textHeightMeasurer, textTruncator, properties) {
                            var labels = axisProperties.values;
                            var labelMaxWidth = axisProperties.xLabelMaxWidth !== undefined
                                ? axisProperties.xLabelMaxWidth
                                : availableWidth / labels.length;
                            var maxRotatedLength = margin.bottom / LabelLayoutStrategy.DefaultRotation.sine;
                            var height = textHeightMeasurer(properties);
                            var maxNumLines = Math.max(1, Math.floor(margin.bottom / height));
                            if (labels.length === 0)
                                return false;
                            // If no break character and exceeds max width, word breaking will not work, return false
                            var mustRotate = labels.some(function (label) {
                                // Detect must rotate and return immediately
                                properties.text = label;
                                return !wordBreaker.hasBreakers(label) && textWidthMeasurer(properties) > labelMaxWidth;
                            });
                            if (mustRotate) {
                                return false;
                            }
                            var moreWordBreakChars = labels.filter(function (label, index) {
                                // ...otherwise compare rotation versus word breaking
                                var allowedLengthProjectedOnXAxis = 
                                // Left margin is the width of Y axis.
                                margin.left
                                    + axisProperties.outerPadding
                                    + axisProperties.categoryThickness * (index + 0.5)
                                    - LeftPadding;
                                var allowedLength = allowedLengthProjectedOnXAxis / LabelLayoutStrategy.DefaultRotation.cosine;
                                var rotatedLength = Math.min(allowedLength, maxRotatedLength);
                                // Which shows more characters? Rotated or maxNumLines truncated to labelMaxWidth?
                                var wordBreakChars = wordBreaker.splitByWidth(label, properties, textWidthMeasurer, labelMaxWidth, maxNumLines, textTruncator).join(" ");
                                properties.text = label;
                                var rotateChars = textTruncator(properties, rotatedLength);
                                // prefer word break (>=) as it takes up less plot area
                                return textUtil.removeEllipses(wordBreakChars).length >= textUtil.removeEllipses(rotateChars).length;
                            });
                            // prefer word break (>=) as it takes up less plot area
                            return moreWordBreakChars.length >= Math.floor(labels.length / 2);
                        }
                        LabelLayoutStrategy.willLabelsWordBreak = willLabelsWordBreak;
                        LabelLayoutStrategy.DefaultRotation = {
                            sine: Math.sin(Math.PI * (35 / 180)),
                            cosine: Math.cos(Math.PI * (35 / 180)),
                            tangent: Math.tan(Math.PI * (35 / 180)),
                            transform: "rotate(-35)",
                            dy: "-0.5em",
                        };
                        LabelLayoutStrategy.DefaultRotationWithScrollbar = {
                            sine: Math.sin(Math.PI * (90 / 180)),
                            cosine: Math.cos(Math.PI * (90 / 180)),
                            tangent: Math.tan(Math.PI * (90 / 180)),
                            transform: "rotate(-90)",
                            dy: "-0.8em",
                        };
                        // NOTE: the above rotations are matched to D3 tickSize(6,0) and do not work with other tick sizes.
                        // we hide these default ticks anyway (on category axes that require rotation), we should make this work
                        // with any tick size. For now just hardcode a TickSizeZero structure
                        LabelLayoutStrategy.DefaultRotationWithScrollbarTickSizeZero = {
                            sine: Math.sin(Math.PI * (90 / 180)),
                            cosine: Math.cos(Math.PI * (90 / 180)),
                            tangent: Math.tan(Math.PI * (90 / 180)),
                            transform: "rotate(-90)",
                            dy: "-0.3em",
                        };
                        /**
                         * Perform rotation and/or truncation of axis tick labels (SVG text) with ellipsis
                         */
                        function rotate(labelSelection, maxBottomMargin, textTruncator, textProperties, needRotate, needEllipsis, axisProperties, margin, scrollbarVisible) {
                            var rotatedLength;
                            var defaultRotation;
                            var tickSize = axisProperties.axis.tickSize();
                            if (scrollbarVisible) {
                                if (!tickSize)
                                    defaultRotation = LabelLayoutStrategy.DefaultRotationWithScrollbarTickSizeZero;
                                else
                                    defaultRotation = LabelLayoutStrategy.DefaultRotationWithScrollbar;
                            }
                            else {
                                defaultRotation = LabelLayoutStrategy.DefaultRotation;
                            }
                            if (needRotate) {
                                rotatedLength = maxBottomMargin / defaultRotation.sine;
                            }
                            labelSelection.each(function (datum) {
                                var axisLabel = d3.select(this);
                                var labelText = axisLabel.text();
                                textProperties.text = labelText;
                                if (needRotate) {
                                    var textContentIndex = axisProperties.values.indexOf(this.textContent);
                                    var allowedLengthProjectedOnXAxis = 
                                    // Left margin is the width of Y axis.
                                    margin.left
                                        + axisProperties.outerPadding
                                        + axisProperties.categoryThickness * (textContentIndex + 0.5);
                                    // Subtracting the left padding space from the allowed length.
                                    if (!scrollbarVisible)
                                        allowedLengthProjectedOnXAxis -= LeftPadding;
                                    // Truncate if scrollbar is visible or rotatedLength exceeds allowedLength
                                    var allowedLength = allowedLengthProjectedOnXAxis / defaultRotation.cosine;
                                    if (scrollbarVisible || needEllipsis || (allowedLength < rotatedLength)) {
                                        labelText = textTruncator(textProperties, Math.min(allowedLength, rotatedLength));
                                        axisLabel.text(labelText);
                                    }
                                    // NOTE: see note above - rotation only lines up with default d3 tickSize(6,0)
                                    // TODO don't do these rotations if we already did them
                                    axisLabel.style("text-anchor", "end")
                                        .attr({
                                        "dx": "-0.5em",
                                        "dy": defaultRotation.dy,
                                        "transform": defaultRotation.transform
                                    });
                                }
                                else {
                                    var maxLabelWidth = !arrayIsEmpty(axisProperties.xLabelMaxWidths) ? axisProperties.xLabelMaxWidths[datum] : axisProperties.xLabelMaxWidth;
                                    var newLabelText = textTruncator(textProperties, maxLabelWidth);
                                    if (newLabelText !== labelText)
                                        axisLabel.text(newLabelText);
                                    // TODO don't do these rotations if we already did them
                                    axisLabel.style("text-anchor", "middle")
                                        .attr({
                                        "dx": "0em",
                                        "dy": "1em",
                                        "transform": "rotate(0)"
                                    });
                                }
                            });
                        }
                        LabelLayoutStrategy.rotate = rotate;
                        function wordBreak(text, axisProperties, maxHeight) {
                            var allowedLength = axisProperties.xLabelMaxWidth;
                            text.each(function () {
                                var node = d3.select(this);
                                // Reset style of text node
                                node
                                    .style("text-anchor", "middle")
                                    .attr({
                                    "dx": "0em",
                                    "dy": "1em",
                                    "transform": "rotate(0)"
                                });
                                textMeasurementService.wordBreak(this, allowedLength, maxHeight);
                            });
                        }
                        LabelLayoutStrategy.wordBreak = wordBreak;
                        function clip(text, availableWidth, svgEllipsis) {
                            if (text.size() === 0) {
                                return;
                            }
                            text.each(function () {
                                var text = d3.select(this);
                                svgEllipsis(text[0][0], availableWidth);
                            });
                        }
                        LabelLayoutStrategy.clip = clip;
                    })(LabelLayoutStrategy = axis_1.LabelLayoutStrategy || (axis_1.LabelLayoutStrategy = {}));
                    function createOrdinalScale(pixelSpan, dataDomain, outerPaddingRatio, innerPaddingRatio, useRangePoints) {
                        if (outerPaddingRatio === void 0) { outerPaddingRatio = 0; }
                        if (innerPaddingRatio === void 0) { innerPaddingRatio = 0.2; }
                        if (useRangePoints === void 0) { useRangePoints = false; }
                        if (useRangePoints === true) {
                            return d3.scale.ordinal()
                                .rangePoints([0, pixelSpan], outerPaddingRatio)
                                .domain(dataDomain);
                        }
                        return d3.scale.ordinal()
                            .rangeBands([0, pixelSpan], innerPaddingRatio, outerPaddingRatio)
                            .domain(dataDomain);
                    }
                    axis_1.createOrdinalScale = createOrdinalScale;
                    function isLogScalePossible(domain, axisType) {
                        if (domain == null) {
                            return false;
                        }
                        if (isDateTime(axisType)) {
                            return false;
                        }
                        return (domain[0] > 0 && domain[1] > 0) || (domain[0] < 0 && domain[1] < 0); // doman must exclude 0
                    }
                    axis_1.isLogScalePossible = isLogScalePossible;
                    // this function can return different scales e.g. log, linear
                    // NOTE: export only for testing, do not access directly
                    function createNumericalScale(axisScaleType, pixelSpan, dataDomain, dataType, outerPadding, niceCount, shouldClamp) {
                        if (outerPadding === void 0) { outerPadding = 0; }
                        if (axisScaleType === axisScale.log && isLogScalePossible(dataDomain, dataType)) {
                            return createLogScale(pixelSpan, dataDomain, outerPadding, niceCount);
                        }
                        return createLinearScale(pixelSpan, dataDomain, outerPadding, niceCount, shouldClamp);
                    }
                    axis_1.createNumericalScale = createNumericalScale;
                    function createLogScale(pixelSpan, dataDomain, outerPadding, niceCount) {
                        if (outerPadding === void 0) { outerPadding = 0; }
                        var scale = d3.scale.log()
                            .range([outerPadding, pixelSpan - outerPadding])
                            .domain([dataDomain[0], dataDomain[1]])
                            .clamp(true);
                        if (niceCount) {
                            scale.nice(niceCount);
                        }
                        return scale;
                    }
                    // NOTE: export only for testing, do not access directly
                    function createLinearScale(pixelSpan, dataDomain, outerPadding, niceCount, shouldClamp) {
                        if (outerPadding === void 0) { outerPadding = 0; }
                        var scale = d3.scale.linear()
                            .range([outerPadding, pixelSpan - outerPadding])
                            .domain([dataDomain[0], dataDomain[1]])
                            .clamp(shouldClamp);
                        // .nice(undefined) still modifies the scale boundaries, and for datetime this messes things up.
                        // we use millisecond ticks since epoch for datetime, so we don't want any "nice" with numbers like 17398203392.
                        if (niceCount) {
                            scale.nice(niceCount);
                        }
                        return scale;
                    }
                    axis_1.createLinearScale = createLinearScale;
                    function getRangeForColumn(sizeColumn) {
                        var result = {};
                        if (sizeColumn) {
                            result.min = (sizeColumn.min == null
                                ? sizeColumn.minLocal == null ? d3.min(sizeColumn.values) : sizeColumn.minLocal
                                : sizeColumn.min);
                            result.max = (sizeColumn.max == null
                                ? sizeColumn.maxLocal == null ? d3.max(sizeColumn.values) : sizeColumn.maxLocal
                                : sizeColumn.max);
                        }
                        return result;
                    }
                    axis_1.getRangeForColumn = getRangeForColumn;
                    /**
                     * Set customized domain, but don't change when nothing is set
                     */
                    function applyCustomizedDomain(customizedDomain, forcedDomain) {
                        var domain = [undefined, undefined];
                        if (forcedDomain && forcedDomain.length === 2) {
                            domain = [forcedDomain[0], forcedDomain[1]];
                        }
                        if (customizedDomain && customizedDomain.length === 2) {
                            if (customizedDomain[0] != null) {
                                domain[0] = customizedDomain[0];
                            }
                            if (customizedDomain[1] != null) {
                                domain[1] = customizedDomain[1];
                            }
                        }
                        if (domain[0] == null && domain[1] == null) {
                            return forcedDomain; // return untouched object
                        }
                        // do extra check to see if the user input was valid with the merged axis values.
                        if (domain[0] != null && domain[1] != null) {
                            if (domain[0] > domain[1]) {
                                return forcedDomain;
                            }
                        }
                        return domain;
                    }
                    axis_1.applyCustomizedDomain = applyCustomizedDomain;
                    /**
                     * Combine the forced domain with the actual domain if one of the values was set.
                     * The forcedDomain is in 1st priority. Extends the domain if the any reference point requires it.
                     */
                    function combineDomain(forcedDomain, domain, ensureDomain) {
                        var combinedDomain = domain ? [domain[0], domain[1]] : [];
                        if (ensureDomain) {
                            if (combinedDomain[0] == null || ensureDomain.min < combinedDomain[0])
                                combinedDomain[0] = ensureDomain.min;
                            if (combinedDomain[1] == null || ensureDomain.max > combinedDomain[1])
                                combinedDomain[1] = ensureDomain.max;
                        }
                        var domainBeforeForced = [combinedDomain[0], combinedDomain[1]];
                        if (forcedDomain && forcedDomain.length === 2) {
                            if (forcedDomain[0] != null) {
                                combinedDomain[0] = forcedDomain[0];
                            }
                            if (forcedDomain[1] != null) {
                                combinedDomain[1] = forcedDomain[1];
                            }
                            if (combinedDomain[0] > combinedDomain[1]) {
                                combinedDomain = domainBeforeForced; // this is invalid, so take the original domain considering the values and the reference line
                            }
                        }
                        return combinedDomain;
                    }
                    axis_1.combineDomain = combineDomain;
                    function createAxisLabel(properties, label, unitType, y2) {
                        if (y2 === void 0) { y2 = false; }
                        var propertyName = y2 ? "secAxisStyle" : "axisStyle";
                        if (!properties || !properties[propertyName]) {
                            return label;
                        }
                        var modifiedLabel;
                        if (properties[propertyName] === axisStyle.showBoth) {
                            modifiedLabel = label + " (" + unitType + ")";
                        }
                        else if (properties[propertyName] === axisStyle.showUnitOnly) {
                            modifiedLabel = unitType;
                        }
                        else {
                            modifiedLabel = label;
                        }
                        return modifiedLabel;
                    }
                    axis_1.createAxisLabel = createAxisLabel;
                    function scaleShouldClamp(combinedDomain, domain) {
                        if (!combinedDomain || !domain || combinedDomain.length < 2 || domain.length < 2) {
                            return false;
                        }
                        // when the start or end is different, clamp it
                        return combinedDomain[0] !== domain[0] || combinedDomain[1] !== domain[1];
                    }
                    axis_1.scaleShouldClamp = scaleShouldClamp;
                    function normalizeNonFiniteNumber(value) {
                        if (isNaN(value)) {
                            return null;
                        }
                        else if (value === Number.POSITIVE_INFINITY) {
                            return Number.MAX_VALUE;
                        }
                        else if (value === Number.NEGATIVE_INFINITY) {
                            return -Number.MAX_VALUE;
                        }
                        return value;
                    }
                    axis_1.normalizeNonFiniteNumber = normalizeNonFiniteNumber;
                    /**
                     * Indicates whether the number is power of 10.
                     */
                    function powerOfTen(d) {
                        var value = Math.abs(d);
                        // formula log2(Y)/log2(10) = log10(Y)
                        // because double issues this won't return exact value
                        // we need to ceil it to nearest number.
                        var log10 = Math.log(value) / Math.LN10;
                        log10 = Math.ceil(log10 - 1e-12);
                        return value / Math.pow(10, log10) === 1;
                    }
                    axis_1.powerOfTen = powerOfTen;
                    function arrayIsEmpty(array) {
                        return !(array && array.length);
                    }
                })(axis = chart.axis || (chart.axis = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    var LegendIcon;
                    (function (LegendIcon) {
                        LegendIcon[LegendIcon["Box"] = 0] = "Box";
                        LegendIcon[LegendIcon["Circle"] = 1] = "Circle";
                        LegendIcon[LegendIcon["Line"] = 2] = "Line";
                    })(LegendIcon = legend.LegendIcon || (legend.LegendIcon = {}));
                    var LegendPosition;
                    (function (LegendPosition) {
                        LegendPosition[LegendPosition["Top"] = 0] = "Top";
                        LegendPosition[LegendPosition["Bottom"] = 1] = "Bottom";
                        LegendPosition[LegendPosition["Right"] = 2] = "Right";
                        LegendPosition[LegendPosition["Left"] = 3] = "Left";
                        LegendPosition[LegendPosition["None"] = 4] = "None";
                        LegendPosition[LegendPosition["TopCenter"] = 5] = "TopCenter";
                        LegendPosition[LegendPosition["BottomCenter"] = 6] = "BottomCenter";
                        LegendPosition[LegendPosition["RightCenter"] = 7] = "RightCenter";
                        LegendPosition[LegendPosition["LeftCenter"] = 8] = "LeftCenter";
                    })(LegendPosition = legend.LegendPosition || (legend.LegendPosition = {}));
                    legend.legendProps = {
                        show: "show",
                        position: "position",
                        titleText: "titleText",
                        showTitle: "showTitle",
                        labelColor: "labelColor",
                        fontSize: "fontSize",
                    };
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    var interactivityUtils = powerbi.extensibility.utils.interactivity.interactivityUtils;
                    var LegendBehavior = (function () {
                        function LegendBehavior() {
                        }
                        LegendBehavior.prototype.bindEvents = function (options, selectionHandler) {
                            var legendItems = options.legendItems;
                            this.legendIcons = options.legendIcons;
                            var clearCatcher = options.clearCatcher;
                            interactivityUtils.registerStandardSelectionHandler(legendItems, selectionHandler);
                            clearCatcher.on("click", function () {
                                selectionHandler.handleClearSelection();
                            });
                        };
                        LegendBehavior.prototype.renderSelection = function (hasSelection) {
                            if (hasSelection) {
                                this.legendIcons.style({
                                    "fill": function (d) {
                                        if (!d.selected) {
                                            return LegendBehavior.dimmedLegendColor;
                                        }
                                        else {
                                            return d.color;
                                        }
                                    }
                                });
                            }
                            else {
                                this.legendIcons.style({
                                    "fill": function (d) {
                                        return d.color;
                                    }
                                });
                            }
                        };
                        return LegendBehavior;
                    }());
                    LegendBehavior.dimmedLegendColor = "#A6A6A6";
                    legend.LegendBehavior = LegendBehavior;
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    var position;
                    (function (position) {
                        position.top = "Top";
                        position.bottom = "Bottom";
                        position.left = "Left";
                        position.right = "Right";
                        position.topCenter = "TopCenter";
                        position.bottomCenter = "BottomCenter";
                        position.leftCenter = "LeftCenter";
                        position.rightCenter = "RightCenter";
                    })(position = legend.position || (legend.position = {}));
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend_1) {
                    function createLegend(legendParentElement, interactive, interactivityService, isScrollable, legendPosition) {
                        if (isScrollable === void 0) { isScrollable = false; }
                        if (legendPosition === void 0) { legendPosition = legend_1.LegendPosition.Top; }
                        if (interactive) {
                            return new legend_1.InteractiveLegend(legendParentElement);
                        }
                        return new legend_1.SVGLegend(legendParentElement, legendPosition, interactivityService, isScrollable);
                    }
                    legend_1.createLegend = createLegend;
                    function isLeft(orientation) {
                        switch (orientation) {
                            case legend_1.LegendPosition.Left:
                            case legend_1.LegendPosition.LeftCenter:
                                return true;
                            default:
                                return false;
                        }
                    }
                    legend_1.isLeft = isLeft;
                    function isTop(orientation) {
                        switch (orientation) {
                            case legend_1.LegendPosition.Top:
                            case legend_1.LegendPosition.TopCenter:
                                return true;
                            default:
                                return false;
                        }
                    }
                    legend_1.isTop = isTop;
                    function positionChartArea(chartArea, legend) {
                        var legendMargins = legend.getMargins(), legendOrientation = legend.getOrientation();
                        chartArea.style({
                            "margin-left": isLeft(legendOrientation)
                                ? legendMargins.width + "px"
                                : null,
                            "margin-top": isTop(legendOrientation)
                                ? legendMargins.height + "px"
                                : null,
                        });
                    }
                    legend_1.positionChartArea = positionChartArea;
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    var data;
                    (function (data) {
                        data.DefaultLegendLabelFillColor = "#666666";
                        function update(legendData, legendObject) {
                            if (legendObject[legend.legendProps.show] == null) {
                                legendObject[legend.legendProps.show] = true;
                            }
                            if (legendObject[legend.legendProps.show] === false) {
                                legendData.dataPoints = [];
                            }
                            if (legendObject[legend.legendProps.show] === true && legendObject[legend.legendProps.position] == null) {
                                legendObject[legend.legendProps.position] = legend.position.top;
                            }
                            if (legendObject[legend.legendProps.fontSize] !== undefined) {
                                legendData.fontSize = legendObject[legend.legendProps.fontSize];
                            }
                            if (legendObject[legend.legendProps.labelColor] !== undefined) {
                                var fillColor = legendObject[legend.legendProps.labelColor];
                                if (fillColor != null) {
                                    legendData.labelColor = fillColor.solid.color;
                                }
                            }
                            if (legendObject[legend.legendProps.showTitle] === false) {
                                legendData.title = "";
                            }
                            else if (legendObject[legend.legendProps.titleText] !== undefined) {
                                legendData.title = legendObject[legend.legendProps.titleText];
                            }
                        }
                        data.update = update;
                    })(data = legend.data || (legend.data = {}));
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    // powerbi.extensibility.utils.formatting
                    var textUtil = powerbi.extensibility.utils.formatting.textUtil;
                    // powerbi.extensibility.utils.svg
                    var translateXWithPixels = powerbi.extensibility.utils.svg.translateXWithPixels;
                    var InteractiveLegend = (function () {
                        function InteractiveLegend(element) {
                            this.legendContainerParent = d3.select(element);
                        }
                        InteractiveLegend.prototype.getMargins = function () {
                            return {
                                height: InteractiveLegend.LegendHeight,
                                width: 0
                            };
                        };
                        InteractiveLegend.prototype.drawLegend = function (legendData) {
                            var data = legendData.dataPoints;
                            if (data.length < 1) {
                                return;
                            }
                            var legendContainerDiv = this.legendContainerParent.select(InteractiveLegend.LegendContainerSelector);
                            if (legendContainerDiv.empty()) {
                                if (!data.length) {
                                    return;
                                }
                                legendContainerDiv = this.legendContainerParent
                                    .insert("div", ":first-child")
                                    .style("height", this.getMargins().height)
                                    .classed(InteractiveLegend.LegendContainerClass, true);
                            }
                            this.legendContainerDiv = legendContainerDiv;
                            // Construct the legend title and items.
                            this.drawTitle(data);
                            this.drawLegendItems(data);
                        };
                        InteractiveLegend.prototype.reset = function () {
                            if (this.legendContainerDiv) {
                                this.legendContainerDiv.remove();
                                this.legendContainerDiv = null;
                            }
                        };
                        InteractiveLegend.prototype.isVisible = function () {
                            return true;
                        };
                        /**
                         * Not supported
                         */
                        InteractiveLegend.prototype.changeOrientation = function (orientation) { };
                        InteractiveLegend.prototype.getOrientation = function () {
                            return legend.LegendPosition.Top;
                        };
                        /**
                         * Draw the legend title
                         */
                        InteractiveLegend.prototype.drawTitle = function (data) {
                            var titleDiv = this.legendContainerDiv.selectAll("div." + InteractiveLegend.LegendTitleClass), item = titleDiv.data([data[0]]);
                            // Enter
                            var itemEnter = item.enter(), titleDivEnter = itemEnter
                                .append("div")
                                .attr("class", InteractiveLegend.LegendTitleClass);
                            titleDivEnter
                                .filter(function (d) { return d.iconOnlyOnLabel; })
                                .append("span")
                                .attr("class", InteractiveLegend.legendIconClass)
                                .html(InteractiveLegend.legendPlaceSelector);
                            titleDivEnter.append("span");
                            // Update
                            item.filter(function (d) { return d.iconOnlyOnLabel; })
                                .select("span." + InteractiveLegend.legendIconClass)
                                .style(InteractiveLegend.legendColorCss, function (d) { return d.color; });
                            item.select("span:last-child").text(function (d) { return d.category; });
                        };
                        /**
                         * Draw the legend items
                         */
                        InteractiveLegend.prototype.drawLegendItems = function (data) {
                            // Add Mesaures - the items of the category in the legend
                            this.ensureLegendTableCreated();
                            var dataPointsMatrix = [data];
                            var legendItemsContainer = this.legendContainerDiv
                                .select("tbody")
                                .selectAll("tr")
                                .data(dataPointsMatrix);
                            // Enter
                            var legendItemsEnter = legendItemsContainer.enter(), rowEnter = legendItemsEnter.append("tr");
                            var cellEnter = rowEnter
                                .selectAll("td")
                                .data(function (d) { return d; }, function (d) { return d.label; })
                                .enter()
                                .append("td")
                                .attr("class", InteractiveLegend.LegendItem);
                            var cellSpanEnter = cellEnter.append("span");
                            cellSpanEnter.filter(function (d) { return !d.iconOnlyOnLabel; })
                                .append("span")
                                .html(InteractiveLegend.legendPlaceSelector)
                                .attr("class", InteractiveLegend.legendIconClass)
                                .attr("white-space", "nowrap")
                                .style({
                                "font-size": "20px",
                                "margin-bottom": "7px"
                            });
                            cellSpanEnter
                                .append("span")
                                .attr("class", InteractiveLegend.legendItemNameClass);
                            cellSpanEnter
                                .append("span")
                                .attr("class", InteractiveLegend.legendItemMeasureClass);
                            // Update
                            var legendCells = legendItemsContainer
                                .selectAll("td")
                                .data(function (d) { return d; }, function (d) { return d.label; });
                            legendCells
                                .select("span." + InteractiveLegend.legendItemNameClass)
                                .html(function (d) { return textUtil.removeBreakingSpaces(d.label); });
                            legendCells
                                .select("span." + InteractiveLegend.legendItemMeasureClass)
                                .html(function (d) { return "&nbsp;" + d.measure; });
                            legendCells
                                .select("span." + InteractiveLegend.legendIconClass)
                                .style("color", function (d) { return d.color; });
                            // Exit
                            legendCells
                                .exit()
                                .remove();
                        };
                        /**
                         * Ensure legend table is created and set horizontal pan gestures on it
                         */
                        InteractiveLegend.prototype.ensureLegendTableCreated = function () {
                            if (this.legendContainerDiv.select("div table").empty()) {
                                var legendTable = this.legendContainerDiv
                                    .append("div")
                                    .append("table");
                                legendTable.style("table-layout", "fixed").append("tbody");
                                // Setup Pan Gestures of the legend
                                this.setPanGestureOnLegend(legendTable);
                            }
                        };
                        /**
                         * Set Horizontal Pan gesture for the legend
                         */
                        InteractiveLegend.prototype.setPanGestureOnLegend = function (legendTable) {
                            var parentNode = this.legendContainerParent.node();
                            var viewportWidth = parentNode.getBoundingClientRect().width;
                            var xscale = d3.scale.linear()
                                .domain([0, viewportWidth])
                                .range([0, viewportWidth]);
                            var zoom = d3.behavior.zoom()
                                .scaleExtent([1, 1]) // disable scaling
                                .x(xscale)
                                .on("zoom", function () {
                                // horizontal pan is valid only in case the legend items width are bigger than the viewport width
                                if ($(legendTable[0]).width() > viewportWidth) {
                                    var t = zoom.translate();
                                    var tx_1 = t[0];
                                    var ty = t[1];
                                    tx_1 = Math.min(tx_1, 0);
                                    tx_1 = Math.max(tx_1, viewportWidth - $(legendTable[0]).width());
                                    zoom.translate([tx_1, ty]);
                                    legendTable.style("-ms-transform", function () {
                                        return translateXWithPixels(tx_1);
                                    });
                                    legendTable.style("-webkit-transform", function () {
                                        return translateXWithPixels(tx_1);
                                    });
                                    legendTable.style("transform", function () {
                                        return translateXWithPixels(tx_1);
                                    });
                                }
                            });
                            if (this.legendContainerDiv) {
                                this.legendContainerDiv.call(zoom);
                            }
                            else {
                                legendTable.call(zoom);
                            }
                        };
                        return InteractiveLegend;
                    }());
                    InteractiveLegend.LegendHeight = 70;
                    InteractiveLegend.LegendContainerClass = "interactive-legend";
                    InteractiveLegend.LegendContainerSelector = ".interactive-legend";
                    InteractiveLegend.LegendTitleClass = "title";
                    InteractiveLegend.LegendItem = "item";
                    InteractiveLegend.legendPlaceSelector = "\u25CF";
                    InteractiveLegend.legendIconClass = "icon";
                    InteractiveLegend.legendColorCss = "color";
                    InteractiveLegend.legendItemNameClass = "itemName";
                    InteractiveLegend.legendItemMeasureClass = "itemMeasure";
                    legend.InteractiveLegend = InteractiveLegend;
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var legend;
                (function (legend) {
                    var textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
                    var font = powerbi.extensibility.utils.formatting.font;
                    // powerbi.extensibility.utils.type
                    var PixelConverter = powerbi.extensibility.utils.type.PixelConverter;
                    var Prototype = powerbi.extensibility.utils.type.Prototype;
                    var createClassAndSelector = powerbi.extensibility.utils.svg.CssConstants.createClassAndSelector;
                    var translate = powerbi.extensibility.utils.svg.translate;
                    var createArrow = powerbi.extensibility.utils.svg.createArrow;
                    var appendClearCatcher = powerbi.extensibility.utils.interactivity.appendClearCatcher;
                    var dataHasSelection = powerbi.extensibility.utils.interactivity.dataHasSelection;
                    var SVGLegend = (function () {
                        function SVGLegend(element, legendPosition, interactivityService, isScrollable) {
                            this.legendDataStartIndex = 0;
                            this.arrowPosWindow = 1;
                            this.lastCalculatedWidth = 0;
                            this.visibleLegendWidth = 0;
                            this.visibleLegendHeight = 0;
                            this.legendFontSizeMarginDifference = 0;
                            this.legendFontSizeMarginValue = 0;
                            this.svg = d3.select(element)
                                .append("svg")
                                .style("position", "absolute");
                            this.svg.style("display", "inherit");
                            this.svg.classed("legend", true);
                            if (interactivityService) {
                                this.clearCatcher = appendClearCatcher(this.svg);
                            }
                            this.group = this.svg
                                .append("g")
                                .attr("id", "legendGroup");
                            this.interactivityService = interactivityService;
                            this.isScrollable = isScrollable;
                            this.element = element;
                            this.changeOrientation(legendPosition);
                            this.parentViewport = { height: 0, width: 0 };
                            this.calculateViewport();
                            this.updateLayout();
                        }
                        SVGLegend.prototype.updateLayout = function () {
                            var legendViewport = this.viewport;
                            var orientation = this.orientation;
                            this.svg.attr({
                                "height": legendViewport.height || (orientation === legend.LegendPosition.None ? 0 : this.parentViewport.height),
                                "width": legendViewport.width || (orientation === legend.LegendPosition.None ? 0 : this.parentViewport.width)
                            });
                            var isRight = orientation === legend.LegendPosition.Right || orientation === legend.LegendPosition.RightCenter, isBottom = orientation === legend.LegendPosition.Bottom || orientation === legend.LegendPosition.BottomCenter;
                            this.svg.style({
                                "margin-left": isRight ? (this.parentViewport.width - legendViewport.width) + "px" : null,
                                "margin-top": isBottom ? (this.parentViewport.height - legendViewport.height) + "px" : null,
                            });
                        };
                        SVGLegend.prototype.calculateViewport = function () {
                            switch (this.orientation) {
                                case legend.LegendPosition.Top:
                                case legend.LegendPosition.Bottom:
                                case legend.LegendPosition.TopCenter:
                                case legend.LegendPosition.BottomCenter:
                                    var pixelHeight = PixelConverter.fromPointToPixel(this.data && this.data.fontSize
                                        ? this.data.fontSize
                                        : SVGLegend.DefaultFontSizeInPt);
                                    var fontHeightSize = SVGLegend.TopLegendHeight + (pixelHeight - SVGLegend.DefaultFontSizeInPt);
                                    this.viewport = { height: fontHeightSize, width: 0 };
                                    return;
                                case legend.LegendPosition.Right:
                                case legend.LegendPosition.Left:
                                case legend.LegendPosition.RightCenter:
                                case legend.LegendPosition.LeftCenter:
                                    var width = this.lastCalculatedWidth
                                        ? this.lastCalculatedWidth
                                        : this.parentViewport.width * SVGLegend.LegendMaxWidthFactor;
                                    this.viewport = { height: 0, width: width };
                                    return;
                                case legend.LegendPosition.None:
                                    this.viewport = { height: 0, width: 0 };
                            }
                        };
                        SVGLegend.prototype.getMargins = function () {
                            return this.viewport;
                        };
                        SVGLegend.prototype.isVisible = function () {
                            return this.orientation !== legend.LegendPosition.None;
                        };
                        SVGLegend.prototype.changeOrientation = function (orientation) {
                            if (orientation) {
                                this.orientation = orientation;
                            }
                            else {
                                this.orientation = legend.LegendPosition.Top;
                            }
                            this.svg.attr("orientation", orientation);
                        };
                        SVGLegend.prototype.getOrientation = function () {
                            return this.orientation;
                        };
                        SVGLegend.prototype.drawLegend = function (data, viewport) {
                            // clone because we modify legend item label with ellipsis if it is truncated
                            var clonedData = Prototype.inherit(data), newDataPoints = [];
                            for (var _i = 0, _a = data.dataPoints; _i < _a.length; _i++) {
                                var dp = _a[_i];
                                newDataPoints.push(Prototype.inherit(dp));
                            }
                            clonedData.dataPoints = newDataPoints;
                            this.setTooltipToLegendItems(clonedData);
                            this.drawLegendInternal(clonedData, viewport, true /* perform auto width */);
                        };
                        SVGLegend.prototype.drawLegendInternal = function (data, viewport, autoWidth) {
                            this.parentViewport = viewport;
                            this.data = data;
                            if (this.interactivityService)
                                this.interactivityService.applySelectionStateToData(data.dataPoints);
                            if (data.dataPoints.length === 0) {
                                this.changeOrientation(legend.LegendPosition.None);
                            }
                            if (this.getOrientation() === legend.LegendPosition.None) {
                                data.dataPoints = [];
                            }
                            // Adding back the workaround for Legend Left/Right position for Map
                            var mapControls = this.element.getElementsByClassName("mapControl");
                            if (mapControls.length > 0 && !this.isTopOrBottom(this.orientation)) {
                                for (var i = 0; i < mapControls.length; ++i) {
                                    var element = mapControls[i];
                                    element.style.display = "inline-block";
                                }
                            }
                            this.calculateViewport();
                            var layout = this.calculateLayout(data, autoWidth);
                            var titleLayout = layout.title;
                            var titleData = titleLayout ? [titleLayout] : [];
                            var hasSelection = this.interactivityService && dataHasSelection(data.dataPoints);
                            var group = this.group;
                            // transform the wrapping group if position is centered
                            if (this.isCentered(this.orientation)) {
                                var centerOffset = 0;
                                if (this.isTopOrBottom(this.orientation)) {
                                    centerOffset = Math.max(0, (this.parentViewport.width - this.visibleLegendWidth) / 2);
                                    group.attr("transform", translate(centerOffset, 0));
                                }
                                else {
                                    centerOffset = Math.max((this.parentViewport.height - this.visibleLegendHeight) / 2);
                                    group.attr("transform", translate(0, centerOffset));
                                }
                            }
                            else {
                                group.attr("transform", null);
                            }
                            var legendTitle = group
                                .selectAll(SVGLegend.LegendTitle.selectorName)
                                .data(titleData);
                            legendTitle.enter()
                                .append("text")
                                .classed(SVGLegend.LegendTitle.className, true);
                            legendTitle
                                .style({
                                "fill": data.labelColor,
                                "font-size": PixelConverter.fromPoint(data.fontSize),
                                "font-family": SVGLegend.DefaultTitleFontFamily
                            })
                                .text(function (d) { return d.text; })
                                .attr({
                                "x": function (d) { return d.x; },
                                "y": function (d) { return d.y; }
                            })
                                .append("title")
                                .text(data.title);
                            legendTitle
                                .exit()
                                .remove();
                            var virtualizedDataPoints = data.dataPoints.slice(this.legendDataStartIndex, this.legendDataStartIndex + layout.numberOfItems);
                            var iconRadius = textMeasurementService.estimateSvgTextHeight(SVGLegend.getTextProperties(false, "", this.data.fontSize)) / SVGLegend.LegendIconRadiusFactor;
                            iconRadius = (this.legendFontSizeMarginValue > SVGLegend.DefaultTextMargin) && iconRadius > SVGLegend.LegendIconRadius
                                ? iconRadius :
                                SVGLegend.LegendIconRadius;
                            var legendItems = group
                                .selectAll(SVGLegend.LegendItem.selectorName)
                                .data(virtualizedDataPoints, function (d) {
                                return d.identity.getKey() + (d.layerNumber != null ? d.layerNumber : "");
                            });
                            var itemsEnter = legendItems.enter()
                                .append("g")
                                .classed(SVGLegend.LegendItem.className, true);
                            itemsEnter
                                .append("circle")
                                .classed(SVGLegend.LegendIcon.className, true);
                            itemsEnter
                                .append("text")
                                .classed(SVGLegend.LegendText.className, true);
                            itemsEnter
                                .append("title")
                                .text(function (d) { return d.tooltip; });
                            legendItems
                                .select(SVGLegend.LegendIcon.selectorName)
                                .attr({
                                "cx": function (d, i) { return d.glyphPosition.x; },
                                "cy": function (d) { return d.glyphPosition.y; },
                                "r": iconRadius,
                            })
                                .style({
                                "fill": function (d) {
                                    if (hasSelection && !d.selected)
                                        return legend.LegendBehavior.dimmedLegendColor;
                                    else
                                        return d.color;
                                }
                            });
                            legendItems
                                .select("title")
                                .text(function (d) { return d.tooltip; });
                            legendItems
                                .select(SVGLegend.LegendText.selectorName)
                                .attr({
                                "x": function (d) { return d.textPosition.x; },
                                "y": function (d) { return d.textPosition.y; },
                            })
                                .text(function (d) { return d.label; })
                                .style({
                                "fill": data.labelColor,
                                "font-size": PixelConverter.fromPoint(data.fontSize)
                            });
                            if (this.interactivityService) {
                                var iconsSelection = legendItems.select(SVGLegend.LegendIcon.selectorName);
                                var behaviorOptions = {
                                    legendItems: legendItems,
                                    legendIcons: iconsSelection,
                                    clearCatcher: this.clearCatcher,
                                };
                                this.interactivityService.bind(data.dataPoints, new legend.LegendBehavior(), behaviorOptions, { isLegend: true });
                            }
                            legendItems.exit().remove();
                            this.drawNavigationArrows(layout.navigationArrows);
                            this.updateLayout();
                        };
                        SVGLegend.prototype.normalizePosition = function (points) {
                            if (this.legendDataStartIndex >= points.length) {
                                this.legendDataStartIndex = points.length - 1;
                            }
                            if (this.legendDataStartIndex < 0) {
                                this.legendDataStartIndex = 0;
                            }
                        };
                        SVGLegend.prototype.calculateTitleLayout = function (title) {
                            var width = 0, hasTitle = !!title;
                            if (hasTitle) {
                                var isHorizontal = this.isTopOrBottom(this.orientation), maxMeasureLength = void 0;
                                var textProperties = SVGLegend.getTextProperties(true, title, this.data.fontSize);
                                var text = title;
                                width = textMeasurementService.measureSvgTextWidth(textProperties);
                                if (isHorizontal) {
                                    width += SVGLegend.TitlePadding;
                                }
                                else {
                                    text = textMeasurementService.getTailoredTextOrDefault(textProperties, this.viewport.width);
                                }
                                return {
                                    x: 0,
                                    y: 0,
                                    text: text,
                                    width: width,
                                    height: textMeasurementService.estimateSvgTextHeight(textProperties)
                                };
                            }
                            return null;
                        };
                        /** Performs layout offline for optimal perfomance */
                        SVGLegend.prototype.calculateLayout = function (data, autoWidth) {
                            var dataPoints = data.dataPoints;
                            if (data.dataPoints.length === 0) {
                                return {
                                    numberOfItems: 0,
                                    title: null,
                                    navigationArrows: []
                                };
                            }
                            this.legendFontSizeMarginValue = PixelConverter.fromPointToPixel(this.data && this.data.fontSize !== undefined ? this.data.fontSize : SVGLegend.DefaultFontSizeInPt);
                            this.legendFontSizeMarginDifference = (this.legendFontSizeMarginValue - SVGLegend.DefaultTextMargin);
                            this.normalizePosition(dataPoints);
                            if (this.legendDataStartIndex < dataPoints.length) {
                                dataPoints = dataPoints.slice(this.legendDataStartIndex);
                            }
                            var title = this.calculateTitleLayout(data.title);
                            var navArrows;
                            var numberOfItems;
                            if (this.isTopOrBottom(this.orientation)) {
                                navArrows = this.isScrollable ? this.calculateHorizontalNavigationArrowsLayout(title) : [];
                                numberOfItems = this.calculateHorizontalLayout(dataPoints, title, navArrows);
                            }
                            else {
                                navArrows = this.isScrollable ? this.calculateVerticalNavigationArrowsLayout(title) : [];
                                numberOfItems = this.calculateVerticalLayout(dataPoints, title, navArrows, autoWidth);
                            }
                            return {
                                numberOfItems: numberOfItems,
                                title: title,
                                navigationArrows: navArrows
                            };
                        };
                        SVGLegend.prototype.updateNavigationArrowLayout = function (navigationArrows, remainingDataLength, visibleDataLength) {
                            if (this.legendDataStartIndex === 0) {
                                navigationArrows.shift();
                            }
                            var lastWindow = this.arrowPosWindow;
                            this.arrowPosWindow = visibleDataLength;
                            if (navigationArrows && navigationArrows.length > 0 && this.arrowPosWindow === remainingDataLength) {
                                this.arrowPosWindow = lastWindow;
                                navigationArrows.length = navigationArrows.length - 1;
                            }
                        };
                        SVGLegend.prototype.calculateHorizontalNavigationArrowsLayout = function (title) {
                            var height = SVGLegend.LegendArrowHeight;
                            var width = SVGLegend.LegendArrowWidth;
                            var translateY = (this.viewport.height / 2) - (height / 2);
                            var data = [];
                            var rightShift = title ? title.x + title.width : 0;
                            var arrowLeft = createArrow(width, height, 180 /*angle*/);
                            var arrowRight = createArrow(width, height, 0 /*angle*/);
                            data.push({
                                x: rightShift,
                                y: translateY,
                                path: arrowLeft.path,
                                rotateTransform: arrowLeft.transform,
                                dataType: 1 /* Decrease */
                            });
                            data.push({
                                x: this.parentViewport.width - width,
                                y: translateY,
                                path: arrowRight.path,
                                rotateTransform: arrowRight.transform,
                                dataType: 0 /* Increase */
                            });
                            return data;
                        };
                        SVGLegend.prototype.calculateVerticalNavigationArrowsLayout = function (title) {
                            var height = SVGLegend.LegendArrowHeight;
                            var width = SVGLegend.LegendArrowWidth;
                            var verticalCenter = this.viewport.height / 2;
                            var data = [];
                            var rightShift = verticalCenter + height / 2;
                            var arrowTop = createArrow(width, height, 270 /*angle*/);
                            var arrowBottom = createArrow(width, height, 90 /*angle*/);
                            var titleHeight = title ? title.height : 0;
                            data.push({
                                x: rightShift,
                                y: width + titleHeight,
                                path: arrowTop.path,
                                rotateTransform: arrowTop.transform,
                                dataType: 1 /* Decrease */
                            });
                            data.push({
                                x: rightShift,
                                y: this.parentViewport.height - height,
                                path: arrowBottom.path,
                                rotateTransform: arrowBottom.transform,
                                dataType: 0 /* Increase */
                            });
                            return data;
                        };
                        /**
                         * Calculates the widths for each horizontal legend item.
                         */
                        SVGLegend.calculateHorizontalLegendItemsWidths = function (dataPoints, availableWidth, iconPadding, fontSize) {
                            var dataPointsLength = dataPoints.length;
                            // Set the maximum amount of space available to each item. They can use less, but can't go over this number.
                            var maxItemWidth = dataPointsLength > 0 ? availableWidth / dataPointsLength | 0 : 0;
                            var maxItemTextWidth = maxItemWidth - iconPadding;
                            // Makes sure the amount of space available to each item is at least SVGLegend.MaxTextLength wide.
                            // If you had many items and/or a narrow amount of available width, the availableTextWidthPerItem would be small, essentially making everything ellipsis.
                            // This prevents that from happening by giving each item at least SVGLegend.MaxTextLength of space.
                            if (maxItemTextWidth < SVGLegend.MaxTextLength) {
                                maxItemTextWidth = SVGLegend.MaxTextLength;
                                maxItemWidth = maxItemTextWidth + iconPadding;
                            }
                            // Make sure the availableWidthPerItem is less than the availableWidth. This lets the long text properly add ellipsis when we're displaying one item at a time.
                            if (maxItemWidth > availableWidth) {
                                maxItemWidth = availableWidth;
                                maxItemTextWidth = maxItemWidth - iconPadding;
                            }
                            var occupiedWidth = 0;
                            var legendItems = [];
                            // Add legend items until we can't fit any more (the last one doesn't fit) or we've added all of them
                            for (var _i = 0, dataPoints_1 = dataPoints; _i < dataPoints_1.length; _i++) {
                                var dataPoint = dataPoints_1[_i];
                                var textProperties = SVGLegend.getTextProperties(false, dataPoint.label, fontSize);
                                var itemTextWidth = textMeasurementService.measureSvgTextWidth(textProperties);
                                var desiredWidth = itemTextWidth + iconPadding;
                                var overMaxWidth = desiredWidth > maxItemWidth;
                                var actualWidth = overMaxWidth ? maxItemWidth : desiredWidth;
                                occupiedWidth += actualWidth;
                                if (occupiedWidth >= availableWidth) {
                                    // Always add at least 1 element
                                    if (legendItems.length === 0) {
                                        legendItems.push({
                                            dataPoint: dataPoint,
                                            textProperties: textProperties,
                                            desiredWidth: desiredWidth,
                                            desiredOverMaxWidth: true,
                                            width: desiredWidth
                                        });
                                        // Set the width to the amount of space we actually have
                                        occupiedWidth = availableWidth;
                                    }
                                    else {
                                        // Subtract the width from what was just added since it won't fit
                                        occupiedWidth -= actualWidth;
                                    }
                                    break;
                                }
                                legendItems.push({
                                    dataPoint: dataPoint,
                                    textProperties: textProperties,
                                    desiredWidth: desiredWidth,
                                    desiredOverMaxWidth: overMaxWidth,
                                    width: desiredWidth
                                });
                            }
                            // If there are items at max width, evenly redistribute the extra space to them
                            var itemsOverMax = legendItems.filter(function (li) { return li.desiredOverMaxWidth; });
                            var numItemsOverMax = itemsOverMax.length;
                            if (numItemsOverMax > 0) {
                                var extraWidth = availableWidth - occupiedWidth;
                                for (var _a = 0, itemsOverMax_1 = itemsOverMax; _a < itemsOverMax_1.length; _a++) {
                                    var item = itemsOverMax_1[_a];
                                    // Divvy up the extra space and add it to the max
                                    // We need to do this calculation in every loop since the remainingWidth may not be changed by the same amount every time
                                    var extraWidthPerItem = extraWidth / numItemsOverMax;
                                    var newMaxItemWidth = maxItemWidth + extraWidthPerItem;
                                    var usedExtraWidth = void 0;
                                    if (item.desiredWidth <= newMaxItemWidth) {
                                        // If the item doesn't need all the extra space, it's not at max anymore
                                        item.desiredOverMaxWidth = false;
                                        usedExtraWidth = item.desiredWidth - maxItemWidth;
                                    }
                                    else {
                                        // Otherwise the item is taking up all the extra space so update the actual width to indicate that
                                        item.width = newMaxItemWidth;
                                        usedExtraWidth = newMaxItemWidth - maxItemWidth;
                                    }
                                    extraWidth -= usedExtraWidth;
                                    numItemsOverMax--;
                                }
                            }
                            return legendItems;
                        };
                        SVGLegend.prototype.calculateHorizontalLayout = function (dataPoints, title, navigationArrows) {
                            // calculate the text shift
                            var HorizontalTextShift = 4 + SVGLegend.LegendIconRadius;
                            // check if we need more space for the margin, or use the default text padding
                            var fontSizeBiggerThanDefault = this.legendFontSizeMarginDifference > 0;
                            var fontSizeMargin = fontSizeBiggerThanDefault ? SVGLegend.TextAndIconPadding + this.legendFontSizeMarginDifference : SVGLegend.TextAndIconPadding;
                            var fixedTextShift = (fontSizeMargin / (SVGLegend.LegendIconRadiusFactor / 2)) + HorizontalTextShift;
                            var occupiedWidth = 0;
                            // calculate the size of the space for both sides of the radius
                            var iconTotalItemPadding = SVGLegend.LegendIconRadius * 2 + fontSizeMargin * 1.5;
                            var numberOfItems = dataPoints.length;
                            // get the Y coordinate which is the middle of the container + the middle of the text height - the delta of the text
                            var defaultTextProperties = SVGLegend.getTextProperties(false, "", this.data.fontSize);
                            var verticalCenter = this.viewport.height / 2;
                            var textYCoordinate = verticalCenter + textMeasurementService.estimateSvgTextHeight(defaultTextProperties) / 2
                                - textMeasurementService.estimateSvgTextBaselineDelta(defaultTextProperties);
                            if (title) {
                                occupiedWidth += title.width;
                                // get the Y coordinate which is the middle of the container + the middle of the text height - the delta of the text
                                title.y = verticalCenter + title.height / 2 - textMeasurementService.estimateSvgTextBaselineDelta(SVGLegend.getTextProperties(true, title.text, this.data.fontSize));
                            }
                            // if an arrow should be added, we add space for it
                            if (this.legendDataStartIndex > 0) {
                                occupiedWidth += SVGLegend.LegendArrowOffset;
                            }
                            // Calculate the width for each of the legend items
                            var dataPointsLength = dataPoints.length;
                            var availableWidth = this.parentViewport.width - occupiedWidth;
                            var legendItems = SVGLegend.calculateHorizontalLegendItemsWidths(dataPoints, availableWidth, iconTotalItemPadding, this.data.fontSize);
                            numberOfItems = legendItems.length;
                            // If we can't show all the legend items, subtract the "next" arrow space from the available space and re-run the width calculations
                            if (numberOfItems !== dataPointsLength) {
                                availableWidth -= SVGLegend.LegendArrowOffset;
                                legendItems = SVGLegend.calculateHorizontalLegendItemsWidths(dataPoints, availableWidth, iconTotalItemPadding, this.data.fontSize);
                                numberOfItems = legendItems.length;
                            }
                            for (var _i = 0, legendItems_1 = legendItems; _i < legendItems_1.length; _i++) {
                                var legendItem = legendItems_1[_i];
                                var dataPoint = legendItem.dataPoint;
                                dataPoint.glyphPosition = {
                                    // the space taken so far + the radius + the margin / radiusFactor to prevent huge spaces
                                    x: occupiedWidth + SVGLegend.LegendIconRadius + (this.legendFontSizeMarginDifference / SVGLegend.LegendIconRadiusFactor),
                                    // The middle of the container but a bit lower due to text not being in the middle (qP for example making middle between q and P)
                                    y: (this.viewport.height * SVGLegend.LegendIconYRatio),
                                };
                                dataPoint.textPosition = {
                                    x: occupiedWidth + fixedTextShift,
                                    y: textYCoordinate,
                                };
                                // If we're over the max width, process it so it fits
                                if (legendItem.desiredOverMaxWidth) {
                                    var textWidth = legendItem.width - iconTotalItemPadding;
                                    var text = textMeasurementService.getTailoredTextOrDefault(legendItem.textProperties, textWidth);
                                    dataPoint.label = text;
                                }
                                occupiedWidth += legendItem.width;
                            }
                            this.visibleLegendWidth = occupiedWidth;
                            this.updateNavigationArrowLayout(navigationArrows, dataPointsLength, numberOfItems);
                            return numberOfItems;
                        };
                        SVGLegend.prototype.calculateVerticalLayout = function (dataPoints, title, navigationArrows, autoWidth) {
                            var _this = this;
                            // check if we need more space for the margin, or use the default text padding
                            var fontSizeBiggerThenDefault = this.legendFontSizeMarginDifference > 0;
                            var fontFactor = fontSizeBiggerThenDefault ? this.legendFontSizeMarginDifference : 0;
                            // calculate the size needed after font size change
                            var verticalLegendHeight = 20 + fontFactor;
                            var spaceNeededByTitle = 15 + fontFactor;
                            var extraShiftForTextAlignmentToIcon = 4 + fontFactor;
                            var totalSpaceOccupiedThusFar = verticalLegendHeight;
                            // the default space for text and icon radius + the margin after the font size change
                            var fixedHorizontalIconShift = SVGLegend.TextAndIconPadding + SVGLegend.LegendIconRadius + (this.legendFontSizeMarginDifference / SVGLegend.LegendIconRadiusFactor);
                            var fixedHorizontalTextShift = fixedHorizontalIconShift * 2;
                            // check how much space is needed
                            var maxHorizontalSpaceAvaliable = autoWidth
                                ? this.parentViewport.width * SVGLegend.LegendMaxWidthFactor
                                    - fixedHorizontalTextShift - SVGLegend.LegendEdgeMariginWidth
                                : this.lastCalculatedWidth
                                    - fixedHorizontalTextShift - SVGLegend.LegendEdgeMariginWidth;
                            var numberOfItems = dataPoints.length;
                            var maxHorizontalSpaceUsed = 0;
                            var parentHeight = this.parentViewport.height;
                            if (title) {
                                totalSpaceOccupiedThusFar += spaceNeededByTitle;
                                title.x = SVGLegend.TextAndIconPadding;
                                title.y = spaceNeededByTitle;
                                maxHorizontalSpaceUsed = title.width || 0;
                            }
                            // if an arrow should be added, we add space for it
                            if (this.legendDataStartIndex > 0)
                                totalSpaceOccupiedThusFar += SVGLegend.LegendArrowOffset;
                            var dataPointsLength = dataPoints.length;
                            for (var i = 0; i < dataPointsLength; i++) {
                                var dp = dataPoints[i];
                                var textProperties = SVGLegend.getTextProperties(false, dp.label, this.data.fontSize);
                                dp.glyphPosition = {
                                    x: fixedHorizontalIconShift,
                                    y: (totalSpaceOccupiedThusFar + extraShiftForTextAlignmentToIcon) - textMeasurementService.estimateSvgTextBaselineDelta(textProperties)
                                };
                                dp.textPosition = {
                                    x: fixedHorizontalTextShift,
                                    y: totalSpaceOccupiedThusFar + extraShiftForTextAlignmentToIcon
                                };
                                // TODO: [PERF] Get rid of this extra measurement, and modify
                                // getTailoredTextToReturnWidth + Text
                                var width = textMeasurementService.measureSvgTextWidth(textProperties);
                                if (width > maxHorizontalSpaceUsed) {
                                    maxHorizontalSpaceUsed = width;
                                }
                                if (width > maxHorizontalSpaceAvaliable) {
                                    var text = textMeasurementService.getTailoredTextOrDefault(textProperties, maxHorizontalSpaceAvaliable);
                                    dp.label = text;
                                }
                                totalSpaceOccupiedThusFar += verticalLegendHeight;
                                if (totalSpaceOccupiedThusFar > parentHeight) {
                                    numberOfItems = i;
                                    break;
                                }
                            }
                            if (autoWidth) {
                                if (maxHorizontalSpaceUsed < maxHorizontalSpaceAvaliable) {
                                    this.lastCalculatedWidth = this.viewport.width = Math.ceil(maxHorizontalSpaceUsed + fixedHorizontalTextShift + SVGLegend.LegendEdgeMariginWidth);
                                }
                                else {
                                    this.lastCalculatedWidth = this.viewport.width = Math.ceil(this.parentViewport.width * SVGLegend.LegendMaxWidthFactor);
                                }
                            }
                            else {
                                this.viewport.width = this.lastCalculatedWidth;
                            }
                            this.visibleLegendHeight = totalSpaceOccupiedThusFar;
                            navigationArrows.forEach(function (d) { return d.x = _this.lastCalculatedWidth / 2; });
                            this.updateNavigationArrowLayout(navigationArrows, dataPointsLength, numberOfItems);
                            return numberOfItems;
                        };
                        SVGLegend.prototype.drawNavigationArrows = function (layout) {
                            var _this = this;
                            var arrows = this.group.selectAll(SVGLegend.NavigationArrow.selectorName)
                                .data(layout);
                            arrows
                                .enter()
                                .append("g")
                                .on("click", function (d) {
                                var pos = _this.legendDataStartIndex;
                                _this.legendDataStartIndex = d.dataType === 0 /* Increase */
                                    ? pos + _this.arrowPosWindow : pos - _this.arrowPosWindow;
                                _this.drawLegendInternal(_this.data, _this.parentViewport, false);
                            })
                                .classed(SVGLegend.NavigationArrow.className, true)
                                .append("path");
                            arrows
                                .attr("transform", function (d) { return translate(d.x, d.y); })
                                .select("path")
                                .attr({
                                "d": function (d) { return d.path; },
                                "transform": function (d) { return d.rotateTransform; }
                            });
                            arrows
                                .exit()
                                .remove();
                        };
                        SVGLegend.prototype.isTopOrBottom = function (orientation) {
                            switch (orientation) {
                                case legend.LegendPosition.Top:
                                case legend.LegendPosition.Bottom:
                                case legend.LegendPosition.BottomCenter:
                                case legend.LegendPosition.TopCenter:
                                    return true;
                                default:
                                    return false;
                            }
                        };
                        SVGLegend.prototype.isCentered = function (orientation) {
                            switch (orientation) {
                                case legend.LegendPosition.BottomCenter:
                                case legend.LegendPosition.LeftCenter:
                                case legend.LegendPosition.RightCenter:
                                case legend.LegendPosition.TopCenter:
                                    return true;
                                default:
                                    return false;
                            }
                        };
                        SVGLegend.prototype.reset = function () { };
                        SVGLegend.getTextProperties = function (isTitle, text, fontSize) {
                            return {
                                text: text,
                                fontFamily: isTitle
                                    ? SVGLegend.DefaultTitleFontFamily
                                    : SVGLegend.DefaultFontFamily,
                                fontSize: PixelConverter.fromPoint(fontSize || SVGLegend.DefaultFontSizeInPt)
                            };
                        };
                        SVGLegend.prototype.setTooltipToLegendItems = function (data) {
                            // we save the values to tooltip before cut
                            for (var _i = 0, _a = data.dataPoints; _i < _a.length; _i++) {
                                var dataPoint = _a[_i];
                                dataPoint.tooltip = dataPoint.label;
                            }
                        };
                        return SVGLegend;
                    }());
                    SVGLegend.DefaultFontSizeInPt = 8;
                    SVGLegend.LegendIconRadius = 5;
                    SVGLegend.LegendIconRadiusFactor = 5;
                    SVGLegend.MaxTextLength = 60;
                    SVGLegend.TextAndIconPadding = 5;
                    SVGLegend.TitlePadding = 15;
                    SVGLegend.LegendEdgeMariginWidth = 10;
                    SVGLegend.LegendMaxWidthFactor = 0.3;
                    SVGLegend.TopLegendHeight = 24;
                    SVGLegend.DefaultTextMargin = PixelConverter.fromPointToPixel(SVGLegend.DefaultFontSizeInPt);
                    SVGLegend.LegendIconYRatio = 0.52;
                    // Navigation Arrow constants
                    SVGLegend.LegendArrowOffset = 10;
                    SVGLegend.LegendArrowHeight = 15;
                    SVGLegend.LegendArrowWidth = 7.5;
                    SVGLegend.DefaultFontFamily = font.Family.regular.css;
                    SVGLegend.DefaultTitleFontFamily = font.Family.semibold.css;
                    SVGLegend.LegendItem = createClassAndSelector("legendItem");
                    SVGLegend.LegendText = createClassAndSelector("legendText");
                    SVGLegend.LegendIcon = createClassAndSelector("legendIcon");
                    SVGLegend.LegendTitle = createClassAndSelector("legendTitle");
                    SVGLegend.NavigationArrow = createClassAndSelector("navArrow");
                    legend.SVGLegend = SVGLegend;
                })(legend = chart.legend || (chart.legend = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var dataLabel;
                (function (dataLabel) {
                    /** Defines possible content positions.  */
                    var ContentPositions;
                    (function (ContentPositions) {
                        /** Content position is not defined. */
                        ContentPositions[ContentPositions["None"] = 0] = "None";
                        /** Content aligned top left. */
                        ContentPositions[ContentPositions["TopLeft"] = 1] = "TopLeft";
                        /** Content aligned top center. */
                        ContentPositions[ContentPositions["TopCenter"] = 2] = "TopCenter";
                        /** Content aligned top right. */
                        ContentPositions[ContentPositions["TopRight"] = 4] = "TopRight";
                        /** Content aligned middle left. */
                        ContentPositions[ContentPositions["MiddleLeft"] = 8] = "MiddleLeft";
                        /** Content aligned middle center. */
                        ContentPositions[ContentPositions["MiddleCenter"] = 16] = "MiddleCenter";
                        /** Content aligned middle right. */
                        ContentPositions[ContentPositions["MiddleRight"] = 32] = "MiddleRight";
                        /** Content aligned bottom left. */
                        ContentPositions[ContentPositions["BottomLeft"] = 64] = "BottomLeft";
                        /** Content aligned bottom center. */
                        ContentPositions[ContentPositions["BottomCenter"] = 128] = "BottomCenter";
                        /** Content aligned bottom right. */
                        ContentPositions[ContentPositions["BottomRight"] = 256] = "BottomRight";
                        /** Content is placed inside the bounding rectangle in the center. */
                        ContentPositions[ContentPositions["InsideCenter"] = 512] = "InsideCenter";
                        /** Content is placed inside the bounding rectangle at the base. */
                        ContentPositions[ContentPositions["InsideBase"] = 1024] = "InsideBase";
                        /** Content is placed inside the bounding rectangle at the end. */
                        ContentPositions[ContentPositions["InsideEnd"] = 2048] = "InsideEnd";
                        /** Content is placed outside the bounding rectangle at the base. */
                        ContentPositions[ContentPositions["OutsideBase"] = 4096] = "OutsideBase";
                        /** Content is placed outside the bounding rectangle at the end. */
                        ContentPositions[ContentPositions["OutsideEnd"] = 8192] = "OutsideEnd";
                        /** Content supports all possible positions. */
                        ContentPositions[ContentPositions["All"] = 16383] = "All";
                    })(ContentPositions = dataLabel.ContentPositions || (dataLabel.ContentPositions = {}));
                    /**
                     * Rectangle orientation. Rectangle orientation is used to define vertical or horizontal orientation
                     * and starting/ending side of the rectangle.
                     */
                    var RectOrientation;
                    (function (RectOrientation) {
                        /** Rectangle with no specific orientation. */
                        RectOrientation[RectOrientation["None"] = 0] = "None";
                        /** Vertical rectangle with base at the bottom. */
                        RectOrientation[RectOrientation["VerticalBottomTop"] = 1] = "VerticalBottomTop";
                        /** Vertical rectangle with base at the top. */
                        RectOrientation[RectOrientation["VerticalTopBottom"] = 2] = "VerticalTopBottom";
                        /** Horizontal rectangle with base at the left. */
                        RectOrientation[RectOrientation["HorizontalLeftRight"] = 3] = "HorizontalLeftRight";
                        /** Horizontal rectangle with base at the right. */
                        RectOrientation[RectOrientation["HorizontalRightLeft"] = 4] = "HorizontalRightLeft";
                    })(RectOrientation = dataLabel.RectOrientation || (dataLabel.RectOrientation = {}));
                    /**
                     * Defines if panel elements are allowed to be positioned
                     * outside of the panel boundaries.
                     */
                    var OutsidePlacement;
                    (function (OutsidePlacement) {
                        /** Elements can be positioned outside of the panel. */
                        OutsidePlacement[OutsidePlacement["Allowed"] = 0] = "Allowed";
                        /** Elements can not be positioned outside of the panel. */
                        OutsidePlacement[OutsidePlacement["Disallowed"] = 1] = "Disallowed";
                        /** Elements can be partially outside of the panel. */
                        OutsidePlacement[OutsidePlacement["Partial"] = 2] = "Partial";
                    })(OutsidePlacement = dataLabel.OutsidePlacement || (dataLabel.OutsidePlacement = {}));
                    var labelStyle;
                    (function (labelStyle) {
                        labelStyle.category = "Category";
                        labelStyle.data = "Data";
                        labelStyle.both = "Both";
                    })(labelStyle = dataLabel.labelStyle || (dataLabel.labelStyle = {}));
                    var PointLabelPosition;
                    (function (PointLabelPosition) {
                        PointLabelPosition[PointLabelPosition["Above"] = 0] = "Above";
                        PointLabelPosition[PointLabelPosition["Below"] = 1] = "Below";
                    })(PointLabelPosition = dataLabel.PointLabelPosition || (dataLabel.PointLabelPosition = {}));
                })(dataLabel = chart.dataLabel || (chart.dataLabel = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var dataLabel;
                (function (dataLabel) {
                    var locationConverter;
                    (function (locationConverter) {
                        function topInside(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0,
                                top: rect.top + offset,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.topInside = topInside;
                        function bottomInside(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0,
                                top: (rect.top + rect.height) - size.height - offset,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.bottomInside = bottomInside;
                        function rightInside(size, rect, offset) {
                            return {
                                left: (rect.left + rect.width) - size.width - offset,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.rightInside = rightInside;
                        function leftInside(size, rect, offset) {
                            return {
                                left: rect.left + offset,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.leftInside = leftInside;
                        function topOutside(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0,
                                top: rect.top - size.height - offset,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.topOutside = topOutside;
                        function bottomOutside(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0,
                                top: (rect.top + rect.height) + offset,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.bottomOutside = bottomOutside;
                        function rightOutside(size, rect, offset) {
                            return {
                                left: (rect.left + rect.width) + offset,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.rightOutside = rightOutside;
                        function leftOutside(size, rect, offset) {
                            return {
                                left: rect.left - size.width - offset,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.leftOutside = leftOutside;
                        function middleHorizontal(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0 + offset,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.middleHorizontal = middleHorizontal;
                        function middleVertical(size, rect, offset) {
                            return {
                                left: rect.left + rect.width / 2.0 - size.width / 2.0,
                                top: rect.top + rect.height / 2.0 - size.height / 2.0 + offset,
                                width: size.width,
                                height: size.height
                            };
                        }
                        locationConverter.middleVertical = middleVertical;
                    })(locationConverter = dataLabel.locationConverter || (dataLabel.locationConverter = {}));
                })(dataLabel = chart.dataLabel || (chart.dataLabel = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var dataLabel;
                (function (dataLabel) {
                    var Rect = powerbi.extensibility.utils.svg.shapes.Rect;
                    // powerbi.extensibility.utils.type
                    var Double = powerbi.extensibility.utils.type.Double;
                    /**
                    * Arranges label elements using the anchor point or rectangle. Collisions
                    * between elements can be automatically detected and as a result elements
                    * can be repositioned or get hidden.
                    */
                    var DataLabelManager = (function () {
                        function DataLabelManager() {
                            this.movingStep = 3;
                            this.hideOverlapped = true;
                            // The global settings for all labels.
                            // They can be oweridden by each label we add into the panel, because contains same properties.
                            this.defaultDataLabelSettings = {
                                anchorMargin: DataLabelManager.DefaultAnchorMargin,
                                anchorRectOrientation: dataLabel.RectOrientation.None,
                                contentPosition: dataLabel.ContentPositions.BottomCenter,
                                outsidePlacement: dataLabel.OutsidePlacement.Disallowed,
                                maximumMovingDistance: DataLabelManager.DefaultMaximumMovingDistance,
                                minimumMovingDistance: DataLabelManager.DefaultMinimumMovingDistance,
                                validContentPositions: dataLabel.ContentPositions.BottomCenter,
                                opacity: 1
                            };
                        }
                        Object.defineProperty(DataLabelManager.prototype, "defaultSettings", {
                            get: function () {
                                return this.defaultDataLabelSettings;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        /** Arranges the lables position and visibility*/
                        DataLabelManager.prototype.hideCollidedLabels = function (viewport, data, layout, addTransform, hideCollidedLabels) {
                            if (addTransform === void 0) { addTransform = false; }
                            if (hideCollidedLabels === void 0) { hideCollidedLabels = true; }
                            // Split size into a grid
                            var arrangeGrid = new dataLabel.DataLabelArrangeGrid(viewport, data, layout);
                            var filteredData = [];
                            var transform = { x: 0, y: 0 };
                            if (addTransform) {
                                transform.x = viewport.width / 2;
                                transform.y = viewport.height / 2;
                            }
                            for (var i = 0, len = data.length; i < len; i++) {
                                // Filter unwanted data points
                                if (!layout.filter(data[i])) {
                                    continue;
                                }
                                // Set default values where properties values are undefined
                                var info = this.getLabelInfo(data[i]);
                                info.anchorPoint = {
                                    x: layout.labelLayout.x(data[i]) + transform.x,
                                    y: layout.labelLayout.y(data[i]) + transform.y,
                                };
                                var position = this.calculateContentPosition(info, info.contentPosition, data[i].size, info.anchorMargin);
                                if (DataLabelManager.isValid(position) && (!this.hasCollisions(arrangeGrid, info, position, viewport) || !hideCollidedLabels)) {
                                    data[i].labelX = position.left - transform.x;
                                    data[i].labelY = position.top - transform.y;
                                    // Keep track of all panel elements positions.
                                    arrangeGrid.add(info, position);
                                    // Save all data points to display
                                    filteredData.push(data[i]);
                                }
                            }
                            return filteredData;
                        };
                        /**
                         * Merges the label element info with the panel element info and returns correct label info.
                         * @param source The label info.
                         */
                        DataLabelManager.prototype.getLabelInfo = function (source) {
                            var settings = this.defaultDataLabelSettings;
                            source.anchorMargin = source.anchorMargin !== undefined
                                ? source.anchorMargin
                                : settings.anchorMargin;
                            source.anchorRectOrientation = source.anchorRectOrientation !== undefined
                                ? source.anchorRectOrientation
                                : settings.anchorRectOrientation;
                            source.contentPosition = source.contentPosition !== undefined
                                ? source.contentPosition
                                : settings.contentPosition;
                            source.maximumMovingDistance = source.maximumMovingDistance !== undefined
                                ? source.maximumMovingDistance
                                : settings.maximumMovingDistance;
                            source.minimumMovingDistance = source.minimumMovingDistance !== undefined
                                ? source.minimumMovingDistance
                                : settings.minimumMovingDistance;
                            source.outsidePlacement = source.outsidePlacement !== undefined
                                ? source.outsidePlacement
                                : settings.outsidePlacement;
                            source.validContentPositions = source.validContentPositions !== undefined
                                ? source.validContentPositions
                                : settings.validContentPositions;
                            source.opacity = source.opacity !== undefined
                                ? source.opacity
                                : settings.opacity;
                            source.maximumMovingDistance += source.anchorMargin;
                            return source;
                        };
                        /**
                        * (Private) Calculates element position using anchor point..
                        */
                        DataLabelManager.prototype.calculateContentPositionFromPoint = function (anchorPoint, contentPosition, contentSize, offset) {
                            var position = { x: 0, y: 0 };
                            if (anchorPoint) {
                                if (anchorPoint.x !== undefined && isFinite(anchorPoint.x)) {
                                    position.x = anchorPoint.x;
                                    switch (contentPosition) {
                                        // D3 positions the label in the middle by default.
                                        // The algorithem asumed the label was positioned in right so this is why we add/substract half width
                                        case dataLabel.ContentPositions.TopLeft:
                                        case dataLabel.ContentPositions.MiddleLeft:
                                        case dataLabel.ContentPositions.BottomLeft:
                                            position.x -= contentSize.width / 2.0;
                                            break;
                                        case dataLabel.ContentPositions.TopRight:
                                        case dataLabel.ContentPositions.MiddleRight:
                                        case dataLabel.ContentPositions.BottomRight:
                                            position.x += contentSize.width / 2.0;
                                            break;
                                    }
                                }
                                if (anchorPoint.y !== undefined && isFinite(anchorPoint.y)) {
                                    position.y = anchorPoint.y;
                                    switch (contentPosition) {
                                        case dataLabel.ContentPositions.MiddleLeft:
                                        case dataLabel.ContentPositions.MiddleCenter:
                                        case dataLabel.ContentPositions.MiddleRight:
                                            position.y -= contentSize.height / 2.0;
                                            break;
                                        case dataLabel.ContentPositions.TopRight:
                                        case dataLabel.ContentPositions.TopLeft:
                                        case dataLabel.ContentPositions.TopCenter:
                                            position.y -= contentSize.height;
                                            break;
                                    }
                                }
                                if (offset !== undefined && isFinite(offset)) {
                                    switch (contentPosition) {
                                        case dataLabel.ContentPositions.TopLeft:
                                            position.x -= offset;
                                            position.y -= offset;
                                            break;
                                        case dataLabel.ContentPositions.MiddleLeft:
                                            position.x -= offset;
                                            break;
                                        case dataLabel.ContentPositions.BottomLeft:
                                            position.x -= offset;
                                            position.y += offset;
                                            break;
                                        case dataLabel.ContentPositions.TopCenter:
                                            position.y -= offset;
                                            break;
                                        case dataLabel.ContentPositions.MiddleCenter:
                                            // Offset is not applied
                                            break;
                                        case dataLabel.ContentPositions.BottomCenter:
                                            position.y += offset;
                                            break;
                                        case dataLabel.ContentPositions.TopRight:
                                            position.x += offset;
                                            position.y -= offset;
                                            break;
                                        case dataLabel.ContentPositions.MiddleRight:
                                            position.x += offset;
                                            break;
                                        case dataLabel.ContentPositions.BottomRight:
                                            position.x += offset;
                                            position.y += offset;
                                            break;
                                    }
                                }
                            }
                            return {
                                left: position.x,
                                top: position.y,
                                width: contentSize.width,
                                height: contentSize.height
                            };
                        };
                        /** (Private) Calculates element position using anchor rect. */
                        DataLabelManager.prototype.calculateContentPositionFromRect = function (anchorRect, anchorRectOrientation, contentPosition, contentSize, offset) {
                            switch (contentPosition) {
                                case dataLabel.ContentPositions.InsideCenter:
                                    return this.handleInsideCenterPosition(anchorRectOrientation, contentSize, anchorRect, offset);
                                case dataLabel.ContentPositions.InsideEnd:
                                    return this.handleInsideEndPosition(anchorRectOrientation, contentSize, anchorRect, offset);
                                case dataLabel.ContentPositions.InsideBase:
                                    return this.handleInsideBasePosition(anchorRectOrientation, contentSize, anchorRect, offset);
                                case dataLabel.ContentPositions.OutsideEnd:
                                    return this.handleOutsideEndPosition(anchorRectOrientation, contentSize, anchorRect, offset);
                                case dataLabel.ContentPositions.OutsideBase:
                                    return this.handleOutsideBasePosition(anchorRectOrientation, contentSize, anchorRect, offset);
                            }
                            return { left: 0, top: 0, width: -1, height: -1 };
                        };
                        /** (Private) Calculates element inside center position using anchor rect. */
                        DataLabelManager.prototype.handleInsideCenterPosition = function (anchorRectOrientation, contentSize, anchorRect, offset) {
                            switch (anchorRectOrientation) {
                                case dataLabel.RectOrientation.VerticalBottomTop:
                                case dataLabel.RectOrientation.VerticalTopBottom:
                                    return dataLabel.locationConverter.middleVertical(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalLeftRight:
                                case dataLabel.RectOrientation.HorizontalRightLeft:
                                default:
                                    return dataLabel.locationConverter.middleHorizontal(contentSize, anchorRect, offset);
                            }
                        };
                        /** (Private) Calculates element inside end position using anchor rect. */
                        DataLabelManager.prototype.handleInsideEndPosition = function (anchorRectOrientation, contentSize, anchorRect, offset) {
                            switch (anchorRectOrientation) {
                                case dataLabel.RectOrientation.VerticalBottomTop:
                                    return dataLabel.locationConverter.topInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.VerticalTopBottom:
                                    return dataLabel.locationConverter.bottomInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalRightLeft:
                                    return dataLabel.locationConverter.leftInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalLeftRight:
                                default:
                                    return dataLabel.locationConverter.rightInside(contentSize, anchorRect, offset);
                            }
                        };
                        /** (Private) Calculates element inside base position using anchor rect. */
                        DataLabelManager.prototype.handleInsideBasePosition = function (anchorRectOrientation, contentSize, anchorRect, offset) {
                            switch (anchorRectOrientation) {
                                case dataLabel.RectOrientation.VerticalBottomTop:
                                    return dataLabel.locationConverter.bottomInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.VerticalTopBottom:
                                    return dataLabel.locationConverter.topInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalRightLeft:
                                    return dataLabel.locationConverter.rightInside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalLeftRight:
                                default:
                                    return dataLabel.locationConverter.leftInside(contentSize, anchorRect, offset);
                            }
                        };
                        /** (Private) Calculates element outside end position using anchor rect. */
                        DataLabelManager.prototype.handleOutsideEndPosition = function (anchorRectOrientation, contentSize, anchorRect, offset) {
                            switch (anchorRectOrientation) {
                                case dataLabel.RectOrientation.VerticalBottomTop:
                                    return dataLabel.locationConverter.topOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.VerticalTopBottom:
                                    return dataLabel.locationConverter.bottomOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalRightLeft:
                                    return dataLabel.locationConverter.leftOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalLeftRight:
                                default:
                                    return dataLabel.locationConverter.rightOutside(contentSize, anchorRect, offset);
                            }
                        };
                        /** (Private) Calculates element outside base position using anchor rect. */
                        DataLabelManager.prototype.handleOutsideBasePosition = function (anchorRectOrientation, contentSize, anchorRect, offset) {
                            switch (anchorRectOrientation) {
                                case dataLabel.RectOrientation.VerticalBottomTop:
                                    return dataLabel.locationConverter.bottomOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.VerticalTopBottom:
                                    return dataLabel.locationConverter.topOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalRightLeft:
                                    return dataLabel.locationConverter.rightOutside(contentSize, anchorRect, offset);
                                case dataLabel.RectOrientation.HorizontalLeftRight:
                                default:
                                    return dataLabel.locationConverter.leftOutside(contentSize, anchorRect, offset);
                            }
                        };
                        /**  (Private) Calculates element position. */
                        DataLabelManager.prototype.calculateContentPosition = function (anchoredElementInfo, contentPosition, contentSize, offset) {
                            if (contentPosition !== dataLabel.ContentPositions.InsideEnd &&
                                contentPosition !== dataLabel.ContentPositions.InsideCenter &&
                                contentPosition !== dataLabel.ContentPositions.InsideBase &&
                                contentPosition !== dataLabel.ContentPositions.OutsideBase &&
                                contentPosition !== dataLabel.ContentPositions.OutsideEnd) {
                                // Determine position using anchor point.
                                return this.calculateContentPositionFromPoint(anchoredElementInfo.anchorPoint, contentPosition, contentSize, offset);
                            }
                            // Determine position using anchor rectangle.
                            return this.calculateContentPositionFromRect(anchoredElementInfo.anchorRect, anchoredElementInfo.anchorRectOrientation, contentPosition, contentSize, offset);
                        };
                        /** (Private) Check for collisions. */
                        DataLabelManager.prototype.hasCollisions = function (arrangeGrid, info, position, size) {
                            if (arrangeGrid.hasConflict(position)) {
                                return true;
                            }
                            // Since we divide the height by 2 we add it back to the top of the view port so labels won't be cut off
                            var intersection = { left: 0, top: position.height / 2, width: size.width, height: size.height };
                            intersection = Rect.inflate(intersection, { left: DataLabelManager.InflateAmount, top: 0, right: DataLabelManager.InflateAmount, bottom: 0 });
                            intersection = Rect.intersect(intersection, position);
                            if (Rect.isEmpty(intersection)) {
                                // Empty rectangle means there is a collision
                                return true;
                            }
                            switch (info.outsidePlacement) {
                                // D3 positions the label in the middle by default.
                                // The algorithem asumed the label was positioned in right so this is why we devide by 2 or 4
                                case dataLabel.OutsidePlacement.Disallowed:
                                    return Double.lessWithPrecision(intersection.width, position.width) ||
                                        Double.lessWithPrecision(intersection.height, position.height / 2);
                                case dataLabel.OutsidePlacement.Partial:
                                    return Double.lessWithPrecision(intersection.width, position.width / 2) ||
                                        Double.lessWithPrecision(intersection.height, position.height / 4);
                            }
                            return false;
                        };
                        DataLabelManager.isValid = function (rect) {
                            return !Rect.isEmpty(rect) && (rect.width > 0 && rect.height > 0);
                        };
                        return DataLabelManager;
                    }());
                    DataLabelManager.DefaultAnchorMargin = 0; // For future use
                    DataLabelManager.DefaultMaximumMovingDistance = 12;
                    DataLabelManager.DefaultMinimumMovingDistance = 3;
                    DataLabelManager.InflateAmount = 5;
                    dataLabel.DataLabelManager = DataLabelManager;
                })(dataLabel = chart.dataLabel || (chart.dataLabel = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils) {
            var chart;
            (function (chart) {
                var dataLabel;
                (function (dataLabel) {
                    var Rect = powerbi.extensibility.utils.svg.shapes.Rect;
                    // powerbi.extensibility.utils.type
                    var Prototype = powerbi.extensibility.utils.type.Prototype;
                    var textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
                    /**
                     * Utility class to speed up the conflict detection by collecting the arranged items in the DataLabelsPanel.
                     */
                    var DataLabelArrangeGrid = (function () {
                        /**
                         * Creates new ArrangeGrid.
                         * @param size The available size
                         */
                        function DataLabelArrangeGrid(size, elements, layout) {
                            this.grid = [];
                            if (size.width === 0 || size.height === 0) {
                                this.cellSize = size;
                                this.rowCount = this.colCount = 0;
                            }
                            var baseProperties = {
                                fontFamily: dataLabel.utils.LabelTextProperties.fontFamily,
                                fontSize: dataLabel.utils.LabelTextProperties.fontSize,
                                fontWeight: dataLabel.utils.LabelTextProperties.fontWeight,
                            };
                            // sets the cell size to be twice of the Max with and Max height of the elements
                            this.cellSize = { width: 0, height: 0 };
                            for (var i = 0, len = elements.length; i < len; i++) {
                                var child = elements[i];
                                // Fill label field
                                child.labeltext = layout.labelText(child);
                                var properties = Prototype.inherit(baseProperties);
                                properties.text = child.labeltext;
                                properties.fontSize = child.data
                                    ? child.data.labelFontSize
                                    : child.labelFontSize
                                        ? child.labelFontSize
                                        : dataLabel.utils.LabelTextProperties.fontSize;
                                child.size = {
                                    width: textMeasurementService.measureSvgTextWidth(properties),
                                    height: textMeasurementService.estimateSvgTextHeight(properties),
                                };
                                var w = child.size.width * 2, h = child.size.height * 2;
                                if (w > this.cellSize.width) {
                                    this.cellSize.width = w;
                                }
                                if (h > this.cellSize.height) {
                                    this.cellSize.height = h;
                                }
                            }
                            if (this.cellSize.width === 0) {
                                this.cellSize.width = size.width;
                            }
                            if (this.cellSize.height === 0) {
                                this.cellSize.height = size.height;
                            }
                            this.colCount = this.getGridRowColCount(this.cellSize.width, size.width, DataLabelArrangeGrid.ARRANGEGRID_MIN_COUNT, DataLabelArrangeGrid.ARRANGEGRID_MAX_COUNT);
                            this.rowCount = this.getGridRowColCount(this.cellSize.height, size.height, DataLabelArrangeGrid.ARRANGEGRID_MIN_COUNT, DataLabelArrangeGrid.ARRANGEGRID_MAX_COUNT);
                            this.cellSize.width = size.width / this.colCount;
                            this.cellSize.height = size.height / this.rowCount;
                            var grid = this.grid;
                            for (var x = 0; x < this.colCount; x++) {
                                grid[x] = [];
                                for (var y = 0; y < this.rowCount; y++) {
                                    grid[x][y] = [];
                                }
                            }
                        }
                        /**
                         * Register a new label element.
                         * @param element The label element to register.
                         * @param rect The label element position rectangle.
                         */
                        DataLabelArrangeGrid.prototype.add = function (element, rect) {
                            var indexRect = this.getGridIndexRect(rect), grid = this.grid;
                            for (var x = indexRect.left; x < indexRect.right; x++) {
                                for (var y = indexRect.top; y < indexRect.bottom; y++) {
                                    grid[x][y].push({ element: element, rect: rect });
                                }
                            }
                        };
                        /**
                         * Checks for conflict of given rectangle in registered elements.
                         * @param rect The rectengle to check.
                         * @return True if conflict is detected.
                         */
                        DataLabelArrangeGrid.prototype.hasConflict = function (rect) {
                            var indexRect = this.getGridIndexRect(rect), grid = this.grid, isIntersecting = Rect.isIntersecting;
                            for (var x = indexRect.left; x < indexRect.right; x++) {
                                for (var y = indexRect.top; y < indexRect.bottom; y++) {
                                    for (var z = 0; z < grid[x][y].length; z++) {
                                        var item = grid[x][y][z];
                                        if (isIntersecting(item.rect, rect)) {
                                            return true;
                                        }
                                    }
                                }
                            }
                            return false;
                        };
                        /**
                         * Calculates the number of rows or columns in a grid
                         * @param step is the largest label size (width or height)
                         * @param length is the grid size (width or height)
                         * @param minCount is the minimum allowed size
                         * @param maxCount is the maximum allowed size
                         * @return the number of grid rows or columns
                         */
                        DataLabelArrangeGrid.prototype.getGridRowColCount = function (step, length, minCount, maxCount) {
                            return Math.min(Math.max(Math.ceil(length / step), minCount), maxCount);
                        };
                        /**
                         * Returns the grid index of a given recangle
                         * @param rect The rectengle to check.
                         * @return grid index as a thickness object.
                         */
                        DataLabelArrangeGrid.prototype.getGridIndexRect = function (rect) {
                            var restrict = function (n, min, max) { return Math.min(Math.max(n, min), max); };
                            return {
                                left: restrict(Math.floor(rect.left / this.cellSize.width), 0, this.colCount),
                                top: restrict(Math.floor(rect.top / this.cellSize.height), 0, this.rowCount),
                                right: restrict(Math.ceil((rect.left + rect.width) / this.cellSize.width), 0, this.colCount),
                                bottom: restrict(Math.ceil((rect.top + rect.height) / this.cellSize.height), 0, this.rowCount)
                            };
                        };
                        return DataLabelArrangeGrid;
                    }());
                    DataLabelArrangeGrid.ARRANGEGRID_MIN_COUNT = 1;
                    DataLabelArrangeGrid.ARRANGEGRID_MAX_COUNT = 100;
                    dataLabel.DataLabelArrangeGrid = DataLabelArrangeGrid;
                })(dataLabel = chart.dataLabel || (chart.dataLabel = {}));
            })(chart = utils.chart || (utils.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
/*
 *  Power BI Visualizations
 *
 *  Copyright (c) Microsoft Corporation
 *  All rights reserved.
 *  MIT License
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the ""Software""), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED *AS IS*, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 */
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var utils;
        (function (utils_1) {
            var chart;
            (function (chart) {
                var dataLabel;
                (function (dataLabel) {
                    var utils;
                    (function (utils) {
                        var font = powerbi.extensibility.utils.formatting.font;
                        var numberFormat = powerbi.extensibility.utils.formatting.numberFormat;
                        var formattingService = powerbi.extensibility.utils.formatting.formattingService;
                        var textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
                        var valueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;
                        var DisplayUnitSystemType = powerbi.extensibility.utils.formatting.DisplayUnitSystemType;
                        // powerbi.extensibility.utils.type
                        var PixelConverter = powerbi.extensibility.utils.type.PixelConverter;
                        var createClassAndSelector = powerbi.extensibility.utils.svg.CssConstants.createClassAndSelector;
                        utils.maxLabelWidth = 50;
                        utils.defaultLabelDensity = "50";
                        utils.DefaultDy = "-0.15em";
                        utils.DefaultFontSizeInPt = 9;
                        utils.StandardFontFamily = font.Family.regular.css;
                        utils.LabelTextProperties = {
                            fontFamily: font.Family.regularSecondary.css,
                            fontSize: PixelConverter.fromPoint(utils.DefaultFontSizeInPt),
                            fontWeight: "normal",
                        };
                        utils.defaultLabelColor = "#777777";
                        utils.defaultInsideLabelColor = "#ffffff";
                        utils.hundredPercentFormat = "0.00 %;-0.00 %;0.00 %";
                        utils.defaultLabelPrecision = undefined;
                        var defaultCountLabelPrecision = 0;
                        var labelGraphicsContextClass = createClassAndSelector("labels");
                        var linesGraphicsContextClass = createClassAndSelector("lines");
                        var labelsClass = createClassAndSelector("data-labels");
                        var lineClass = createClassAndSelector("line-label");
                        var DimmedOpacity = 0.4;
                        var DefaultOpacity = 1.0;
                        function getFillOpacity(selected, highlight, hasSelection, hasPartialHighlights) {
                            if ((hasPartialHighlights && !highlight) || (hasSelection && !selected)) {
                                return DimmedOpacity;
                            }
                            return DefaultOpacity;
                        }
                        function updateLabelSettingsFromLabelsObject(labelsObj, labelSettings) {
                            if (labelsObj) {
                                if (labelsObj.show !== undefined) {
                                    labelSettings.show = labelsObj.show;
                                }
                                if (labelsObj.showSeries !== undefined) {
                                    labelSettings.show = labelsObj.showSeries;
                                }
                                if (labelsObj.color !== undefined) {
                                    labelSettings.labelColor = labelsObj.color.solid.color;
                                }
                                if (labelsObj.labelDisplayUnits !== undefined) {
                                    labelSettings.displayUnits = labelsObj.labelDisplayUnits;
                                }
                                if (labelsObj.labelPrecision !== undefined) {
                                    labelSettings.precision = (labelsObj.labelPrecision >= 0)
                                        ? labelsObj.labelPrecision
                                        : utils.defaultLabelPrecision;
                                }
                                if (labelsObj.fontSize !== undefined) {
                                    labelSettings.fontSize = labelsObj.fontSize;
                                }
                                if (labelsObj.showAll !== undefined) {
                                    labelSettings.showLabelPerSeries = labelsObj.showAll;
                                }
                                if (labelsObj.labelStyle !== undefined) {
                                    labelSettings.labelStyle = labelsObj.labelStyle;
                                }
                                if (labelsObj.labelPosition) {
                                    labelSettings.position = labelsObj.labelPosition;
                                }
                            }
                        }
                        utils.updateLabelSettingsFromLabelsObject = updateLabelSettingsFromLabelsObject;
                        function getDefaultLabelSettings(show, labelColor, fontSize) {
                            if (show === void 0) { show = false; }
                            return {
                                show: show,
                                position: dataLabel.PointLabelPosition.Above,
                                displayUnits: 0,
                                precision: utils.defaultLabelPrecision,
                                labelColor: labelColor || utils.defaultLabelColor,
                                fontSize: fontSize || utils.DefaultFontSizeInPt,
                            };
                        }
                        utils.getDefaultLabelSettings = getDefaultLabelSettings;
                        function getDefaultColumnLabelSettings(isLabelPositionInside) {
                            var labelSettings = getDefaultLabelSettings(false, undefined);
                            labelSettings.position = null;
                            labelSettings.labelColor = undefined;
                            return labelSettings;
                        }
                        utils.getDefaultColumnLabelSettings = getDefaultColumnLabelSettings;
                        function getDefaultPointLabelSettings() {
                            return {
                                show: false,
                                position: dataLabel.PointLabelPosition.Above,
                                displayUnits: 0,
                                precision: utils.defaultLabelPrecision,
                                labelColor: utils.defaultLabelColor,
                                fontSize: utils.DefaultFontSizeInPt,
                            };
                        }
                        utils.getDefaultPointLabelSettings = getDefaultPointLabelSettings;
                        function getLabelPrecision(precision, format) {
                            if (precision !== utils.defaultLabelPrecision) {
                                return precision;
                            }
                            if (format === "g" || format === "G") {
                                return;
                            }
                            if (format) {
                                // Calculate precision from positive format by default
                                var positiveFormat = numberFormat.getComponents(format).positive, formatMetadata = numberFormat.getCustomFormatMetadata(positiveFormat, true /*calculatePrecision*/);
                                if (formatMetadata.hasDots) {
                                    return formatMetadata.precision;
                                }
                            }
                            // For count fields we do not want a precision by default
                            return defaultCountLabelPrecision;
                        }
                        utils.getLabelPrecision = getLabelPrecision;
                        function drawDefaultLabelsForDataPointChart(data, context, layout, viewport, isAnimator, animationDuration, hasSelection, hideCollidedLabels) {
                            if (isAnimator === void 0) { isAnimator = false; }
                            if (hideCollidedLabels === void 0) { hideCollidedLabels = true; }
                            // Hide and reposition labels that overlap
                            var dataLabelManager = new dataLabel.DataLabelManager();
                            var filteredData = dataLabelManager.hideCollidedLabels(viewport, data, layout, false, hideCollidedLabels);
                            var hasAnimation = isAnimator && !!animationDuration;
                            var labels = selectLabels(filteredData, context, false, hasAnimation);
                            if (!labels) {
                                return;
                            }
                            if (hasAnimation) {
                                labels
                                    .text(function (d) { return d.labeltext; })
                                    .transition()
                                    .duration(animationDuration)
                                    .style(layout.style)
                                    .style("opacity", (hasSelection ? function (d) { return getFillOpacity(d.selected, false, hasSelection, false); } : 1))
                                    .attr({
                                    x: function (d) { return d.labelX; },
                                    y: function (d) { return d.labelY; }
                                });
                                labels
                                    .exit()
                                    .transition()
                                    .duration(animationDuration)
                                    .style("opacity", 0) // fade out labels that are removed
                                    .remove();
                            }
                            else {
                                labels
                                    .attr({ x: function (d) { return d.labelX; }, y: function (d) { return d.labelY; } })
                                    .text(function (d) { return d.labeltext; })
                                    .style(layout.style);
                                labels
                                    .exit()
                                    .remove();
                            }
                            return labels;
                        }
                        utils.drawDefaultLabelsForDataPointChart = drawDefaultLabelsForDataPointChart;
                        function selectLabels(filteredData, context, isDonut, forAnimation) {
                            if (isDonut === void 0) { isDonut = false; }
                            if (forAnimation === void 0) { forAnimation = false; }
                            // Check for a case where resizing leaves no labels - then we need to remove the labels "g"
                            if (filteredData.length === 0) {
                                cleanDataLabels(context, true);
                                return null;
                            }
                            if (context.select(labelGraphicsContextClass.selectorName).empty()) {
                                context.append("g").classed(labelGraphicsContextClass.className, true);
                            }
                            // line chart ViewModel has a special "key" property for point identification since the "identity" field is set to the series identity
                            var hasKey = filteredData[0].key != null;
                            var hasDataPointIdentity = filteredData[0].identity != null;
                            var getIdentifier = hasKey ?
                                function (d) { return d.key; }
                                : hasDataPointIdentity ?
                                    function (d) { return d.identity.getKey(); }
                                    : undefined;
                            var labels = isDonut ?
                                context.select(labelGraphicsContextClass.selectorName).selectAll(labelsClass.selectorName).data(filteredData, function (d) { return d.data.identity.getKey(); })
                                : getIdentifier != null ?
                                    context.select(labelGraphicsContextClass.selectorName).selectAll(labelsClass.selectorName).data(filteredData, getIdentifier)
                                    : context.select(labelGraphicsContextClass.selectorName).selectAll(labelsClass.selectorName).data(filteredData);
                            var newLabels = labels.enter()
                                .append("text")
                                .classed(labelsClass.className, true);
                            if (forAnimation) {
                                newLabels.style("opacity", 0);
                            }
                            return labels;
                        }
                        function cleanDataLabels(context, removeLines) {
                            if (removeLines === void 0) { removeLines = false; }
                            var empty = [], labels = context.selectAll(labelsClass.selectorName).data(empty);
                            labels
                                .exit()
                                .remove();
                            context
                                .selectAll(labelGraphicsContextClass.selectorName)
                                .remove();
                            if (removeLines) {
                                var lines = context
                                    .selectAll(lineClass.selectorName)
                                    .data(empty);
                                lines
                                    .exit()
                                    .remove();
                                context
                                    .selectAll(linesGraphicsContextClass.selectorName)
                                    .remove();
                            }
                        }
                        utils.cleanDataLabels = cleanDataLabels;
                        function setHighlightedLabelsOpacity(context, hasSelection, hasHighlights) {
                            context
                                .selectAll(labelsClass.selectorName)
                                .style("fill-opacity", function (d) {
                                var labelOpacity = getFillOpacity(d.selected, d.highlight, !d.highlight && hasSelection, !d.selected && hasHighlights) < 1 ? 0 : 1;
                                return labelOpacity;
                            });
                        }
                        utils.setHighlightedLabelsOpacity = setHighlightedLabelsOpacity;
                        function getLabelFormattedText(options) {
                            var properties = {
                                text: options.formatter
                                    ? options.formatter.format(options.label)
                                    : formattingService.formatValue(options.label, options.format),
                                fontFamily: utils.LabelTextProperties.fontFamily,
                                fontSize: PixelConverter.fromPoint(options.fontSize),
                                fontWeight: utils.LabelTextProperties.fontWeight,
                            };
                            return textMeasurementService.getTailoredTextOrDefault(properties, options.maxWidth
                                ? options.maxWidth
                                : utils.maxLabelWidth);
                        }
                        utils.getLabelFormattedText = getLabelFormattedText;
                        function enumerateDataLabels(options) {
                            if (!options.dataLabelsSettings) {
                                return;
                            }
                            var instance = {
                                objectName: "labels",
                                selector: options.selector,
                                properties: {},
                            };
                            if (options.show && options.selector) {
                                instance.properties["showSeries"] = options.dataLabelsSettings.show;
                            }
                            else if (options.show) {
                                instance.properties["show"] = options.dataLabelsSettings.show;
                            }
                            instance.properties["color"] = options.dataLabelsSettings.labelColor || utils.defaultLabelColor;
                            if (options.displayUnits) {
                                instance.properties["labelDisplayUnits"] = options.dataLabelsSettings.displayUnits;
                            }
                            if (options.precision) {
                                var precision = options.dataLabelsSettings.precision;
                                instance.properties["labelPrecision"] = precision === utils.defaultLabelPrecision ? null : precision;
                            }
                            if (options.position) {
                                instance.properties["labelPosition"] = options.dataLabelsSettings.position;
                                if (options.positionObject) {
                                    instance.validValues = { "labelPosition": options.positionObject };
                                }
                            }
                            if (options.labelStyle) {
                                instance.properties["labelStyle"] = options.dataLabelsSettings.labelStyle;
                            }
                            if (options.fontSize) {
                                instance.properties["fontSize"] = options.dataLabelsSettings.fontSize;
                            }
                            if (options.labelDensity) {
                                var lineChartSettings = options.dataLabelsSettings;
                                if (lineChartSettings) {
                                    instance.properties["labelDensity"] = lineChartSettings.labelDensity;
                                }
                            }
                            // Keep show all as the last property of the instance.
                            if (options.showAll) {
                                instance.properties["showAll"] = options.dataLabelsSettings.showLabelPerSeries;
                            }
                            options.instances.push(instance);
                            return instance;
                        }
                        utils.enumerateDataLabels = enumerateDataLabels;
                        function enumerateCategoryLabels(enumeration, dataLabelsSettings, withFill, isShowCategory, fontSize) {
                            if (isShowCategory === void 0) { isShowCategory = false; }
                            var labelSettings = (dataLabelsSettings)
                                ? dataLabelsSettings
                                : getDefaultPointLabelSettings();
                            var instance = {
                                objectName: "categoryLabels",
                                selector: null,
                                properties: {
                                    show: isShowCategory
                                        ? labelSettings.showCategory
                                        : labelSettings.show,
                                    fontSize: dataLabelsSettings ? dataLabelsSettings.fontSize : utils.DefaultFontSizeInPt,
                                },
                            };
                            if (withFill) {
                                instance.properties["color"] = labelSettings.categoryLabelColor
                                    ? labelSettings.categoryLabelColor
                                    : labelSettings.labelColor;
                            }
                            if (fontSize) {
                                instance.properties["fontSize"] = fontSize;
                            }
                            enumeration.instances.push(instance);
                        }
                        utils.enumerateCategoryLabels = enumerateCategoryLabels;
                        function getDisplayUnitValueFromAxisFormatter(axisFormatter, labelSettings) {
                            if (axisFormatter && axisFormatter.displayUnit && labelSettings.displayUnits === 0) {
                                return axisFormatter.displayUnit.value;
                            }
                            return null;
                        }
                        function createColumnFormatterCacheManager() {
                            return {
                                cache: { defaultFormatter: null },
                                getOrCreate: function (formatString, labelSetting, value2) {
                                    if (formatString) {
                                        var cacheKeyObject = {
                                            formatString: formatString,
                                            displayUnits: labelSetting.displayUnits,
                                            precision: getLabelPrecision(labelSetting.precision, formatString),
                                            value2: value2
                                        };
                                        var cacheKey = JSON.stringify(cacheKeyObject);
                                        if (!this.cache[cacheKey]) {
                                            this.cache[cacheKey] = valueFormatter.create(getOptionsForLabelFormatter(labelSetting, formatString, value2, cacheKeyObject.precision));
                                        }
                                        return this.cache[cacheKey];
                                    }
                                    if (!this.cache.defaultFormatter) {
                                        this.cache.defaultFormatter = valueFormatter.create(getOptionsForLabelFormatter(labelSetting, formatString, value2, labelSetting.precision));
                                    }
                                    return this.cache.defaultFormatter;
                                }
                            };
                        }
                        utils.createColumnFormatterCacheManager = createColumnFormatterCacheManager;
                        function getOptionsForLabelFormatter(labelSetting, formatString, value2, precision) {
                            return {
                                displayUnitSystemType: DisplayUnitSystemType.DataLabels,
                                format: formatString,
                                precision: precision,
                                value: labelSetting.displayUnits,
                                value2: value2,
                                allowFormatBeautification: true,
                            };
                        }
                        utils.getOptionsForLabelFormatter = getOptionsForLabelFormatter;
                        function isTextWidthOverflows(textWidth, maxTextWidth) {
                            return textWidth > maxTextWidth;
                        }
                        utils.isTextWidthOverflows = isTextWidthOverflows;
                        function isTextHeightOverflows(textHeight, innerChordLength) {
                            return textHeight > innerChordLength;
                        }
                        utils.isTextHeightOverflows = isTextHeightOverflows;
                    })(utils = dataLabel.utils || (dataLabel.utils = {}));
                })(dataLabel = chart.dataLabel || (chart.dataLabel = {}));
            })(chart = utils_1.chart || (utils_1.chart = {}));
        })(utils = extensibility.utils || (extensibility.utils = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var LegendModule = powerbi.extensibility.utils.chart.legend;
var LegendPosition = powerbi.extensibility.utils.chart.legend.LegendPosition;
var LegendIcon = powerbi.extensibility.utils.chart.legend.LegendIcon;
var InteractivityModule = powerbi.extensibility.utils.interactivity;
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7;
            (function (targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7) {
                var VisualBehavior = (function () {
                    function VisualBehavior() {
                    }
                    VisualBehavior.prototype.bindEvents = function (options, selectionHandler) {
                        var clearCatcher = options.clearCatcher;
                        this.selection = options.selection;
                        this.hasHighlights = options.hasHighlights;
                        this.selection.on("click", function (dataPoint) {
                            var mouseEvent = d3.event;
                            selectionHandler.handleSelection(dataPoint, mouseEvent.ctrlKey);
                            mouseEvent.stopPropagation();
                        });
                        clearCatcher.on("click", function () {
                            selectionHandler.handleClearSelection();
                        });
                    };
                    VisualBehavior.prototype.renderSelection = function (hasSelection) {
                        var _this = this;
                        this.selection.style("opacity", function (dataPoint) {
                            return getFillOpacity(dataPoint.selected, dataPoint.highlight, !dataPoint.highlight && hasSelection, !dataPoint.selected && _this.hasHighlights);
                        });
                    };
                    return VisualBehavior;
                }());
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.VisualBehavior = VisualBehavior;
                function appendLegendMargins(legend, margins) {
                    if (legend) {
                        var legendViewPort = legend.getMargins();
                        var legendOrientation = legend.getOrientation();
                        if (legend.isVisible()) {
                            if (legendOrientation == LegendPosition.Top || legendOrientation == LegendPosition.TopCenter) {
                                margins.top += legendViewPort.height;
                            }
                            else if (legendOrientation == LegendPosition.Left || legendOrientation == LegendPosition.LeftCenter) {
                                margins.left += legendViewPort.width;
                            }
                            else if (legendOrientation == LegendPosition.Right || legendOrientation == LegendPosition.RightCenter) {
                                margins.right += legendViewPort.width + 20;
                            }
                            else {
                                margins.bottom += legendViewPort.height;
                            }
                        }
                    }
                    return margins;
                }
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.appendLegendMargins = appendLegendMargins;
                function getFillOpacity(selected, highlight, hasSelection, hasPartialHighlights) {
                    if ((hasPartialHighlights && !highlight) || (hasSelection && !selected))
                        return 0.3;
                    return 1;
                }
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.getFillOpacity = getFillOpacity;
                function replaceLegendIconsWithCustom(itemsWithCustomIcons) {
                    if (itemsWithCustomIcons.length > 0) {
                        var group = d3.select('#legendGroup');
                        group.selectAll('.legendItem').each(function (d, i) {
                            var el = d3.select(this);
                            var text = el.select('.legendText');
                            for (var i_1 = 0; i_1 < itemsWithCustomIcons.length; i_1++) {
                                var item = itemsWithCustomIcons[i_1];
                                var changeIcon = (item.identity ? item.identity.equals(el.datum().identity) : false);
                                if (changeIcon) {
                                    var icon = el.select('.legendIcon');
                                    var x = parseInt(icon.attr('cx'));
                                    var y = parseInt(icon.attr('cy'));
                                    var r = parseInt(icon.attr('r'));
                                    if (item.icon == 'circle') {
                                        icon.style('fill', item.color);
                                    }
                                    else if (item.icon == 'square') {
                                        icon.style('display', 'none');
                                        el.selectAll('rect').remove();
                                        el
                                            .append('rect')
                                            .attr('x', x - r)
                                            .attr('width', r * 2)
                                            .attr('y', y - r)
                                            .attr('height', r * 2);
                                    }
                                    else if (item.icon == 'line') {
                                        icon.style('display', 'none');
                                        el.selectAll('line').remove();
                                        el
                                            .append('line')
                                            .attr('x1', x)
                                            .attr('x2', x)
                                            .attr('y1', y - r)
                                            .attr('y2', y + r)
                                            .style({
                                            'stroke': item.color,
                                            'stroke-width': r / 2,
                                        });
                                    }
                                    else if (item.icon == 'cross') {
                                        icon.style('display', 'none');
                                        el.selectAll('line').remove();
                                        el
                                            .append('line')
                                            .attr('x1', x + r)
                                            .attr('x2', x - r)
                                            .attr('y1', y - r)
                                            .attr('y2', y + r)
                                            .style({
                                            'stroke': item.color,
                                            'stroke-width': r / 2
                                        });
                                        el
                                            .append('line')
                                            .attr('x1', x - r)
                                            .attr('x2', x + r)
                                            .attr('y1', y - r)
                                            .attr('y2', y + r)
                                            .style({
                                            'stroke': item.color,
                                            'stroke-width': r / 2
                                        });
                                    }
                                    break;
                                }
                            }
                        });
                    }
                }
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.replaceLegendIconsWithCustom = replaceLegendIconsWithCustom;
            })(targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 || (visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7;
            (function (targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7) {
                var DefaultHandleTouchDelay = 1000;
                function createTooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay) {
                    if (handleTouchDelay === void 0) { handleTouchDelay = DefaultHandleTouchDelay; }
                    return new TooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay);
                }
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.createTooltipServiceWrapper = createTooltipServiceWrapper;
                var TooltipServiceWrapper = (function () {
                    function TooltipServiceWrapper(tooltipService, rootElement, handleTouchDelay) {
                        this.visualHostTooltipService = tooltipService;
                        this.handleTouchDelay = handleTouchDelay;
                        this.rootElement = rootElement;
                    }
                    TooltipServiceWrapper.prototype.addTooltip = function (selection, getTooltipInfoDelegate, getDataPointIdentity, reloadTooltipDataOnMouseMove) {
                        var _this = this;
                        if (!selection || !this.visualHostTooltipService.enabled()) {
                            return;
                        }
                        var rootNode = this.rootElement;
                        // Mouse events
                        selection.on("mouseover.tooltip", function () {
                            // Ignore mouseover while handling touch events
                            if (!_this.canDisplayTooltip(d3.event))
                                return;
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, true, false);
                            if (!tooltipEventArgs)
                                return;
                            var tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs);
                            if (tooltipInfo == null)
                                return;
                            var selectionId = getDataPointIdentity(tooltipEventArgs);
                            _this.visualHostTooltipService.show({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: false,
                                dataItems: tooltipInfo,
                                identities: selectionId ? [selectionId] : [],
                            });
                        });
                        selection.on("mouseout.tooltip", function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: false,
                                immediately: false,
                            });
                        });
                        selection.on("mousemove.tooltip", function () {
                            // Ignore mousemove while handling touch events
                            if (!_this.canDisplayTooltip(d3.event))
                                return;
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, true, false);
                            if (!tooltipEventArgs)
                                return;
                            var tooltipInfo;
                            if (reloadTooltipDataOnMouseMove) {
                                tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs);
                                if (tooltipInfo == null)
                                    return;
                            }
                            var selectionId = getDataPointIdentity(tooltipEventArgs);
                            _this.visualHostTooltipService.move({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: false,
                                dataItems: tooltipInfo,
                                identities: selectionId ? [selectionId] : [],
                            });
                        });
                        // --- Touch events ---
                        var touchStartEventName = TooltipServiceWrapper.touchStartEventName();
                        var touchEndEventName = TooltipServiceWrapper.touchEndEventName();
                        var isPointerEvent = TooltipServiceWrapper.usePointerEvents();
                        selection.on(touchStartEventName + '.tooltip', function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: true,
                                immediately: true,
                            });
                            var tooltipEventArgs = _this.makeTooltipEventArgs(rootNode, isPointerEvent, true);
                            if (!tooltipEventArgs)
                                return;
                            var tooltipInfo = getTooltipInfoDelegate(tooltipEventArgs);
                            var selectionId = getDataPointIdentity(tooltipEventArgs);
                            _this.visualHostTooltipService.show({
                                coordinates: tooltipEventArgs.coordinates,
                                isTouchEvent: true,
                                dataItems: tooltipInfo,
                                identities: selectionId ? [selectionId] : [],
                            });
                        });
                        selection.on(touchEndEventName + '.tooltip', function () {
                            _this.visualHostTooltipService.hide({
                                isTouchEvent: true,
                                immediately: false,
                            });
                            if (_this.handleTouchTimeoutId)
                                clearTimeout(_this.handleTouchTimeoutId);
                            // At the end of touch action, set a timeout that will let us ignore the incoming mouse events for a small amount of time
                            // TODO: any better way to do this?
                            _this.handleTouchTimeoutId = setTimeout(function () {
                                _this.handleTouchTimeoutId = undefined;
                            }, _this.handleTouchDelay);
                        });
                    };
                    TooltipServiceWrapper.prototype.hide = function () {
                        this.visualHostTooltipService.hide({ immediately: true, isTouchEvent: false });
                    };
                    TooltipServiceWrapper.prototype.makeTooltipEventArgs = function (rootNode, isPointerEvent, isTouchEvent) {
                        var target = d3.event.target;
                        var data = d3.select(target).datum();
                        var mouseCoordinates = this.getCoordinates(rootNode, isPointerEvent);
                        var elementCoordinates = this.getCoordinates(target, isPointerEvent);
                        var tooltipEventArgs = {
                            data: data,
                            coordinates: mouseCoordinates,
                            elementCoordinates: elementCoordinates,
                            context: target,
                            isTouchEvent: isTouchEvent
                        };
                        return tooltipEventArgs;
                    };
                    TooltipServiceWrapper.prototype.canDisplayTooltip = function (d3Event) {
                        var canDisplay = true;
                        var mouseEvent = d3Event;
                        if (mouseEvent.buttons !== undefined) {
                            // Check mouse buttons state
                            var hasMouseButtonPressed = mouseEvent.buttons !== 0;
                            canDisplay = !hasMouseButtonPressed;
                        }
                        // Make sure we are not ignoring mouse events immediately after touch end.
                        canDisplay = canDisplay && (this.handleTouchTimeoutId == null);
                        return canDisplay;
                    };
                    TooltipServiceWrapper.prototype.getCoordinates = function (rootNode, isPointerEvent) {
                        var coordinates;
                        if (isPointerEvent) {
                            // DO NOT USE - WebKit bug in getScreenCTM with nested SVG results in slight negative coordinate shift
                            // Also, IE will incorporate transform scale but WebKit does not, forcing us to detect browser and adjust appropriately.
                            // Just use non-scaled coordinates for all browsers, and adjust for the transform scale later (see lineChart.findIndex)
                            //coordinates = d3.mouse(rootNode);
                            // copied from d3_eventSource (which is not exposed)
                            var e = d3.event, s = void 0;
                            while (s = e.sourceEvent)
                                e = s;
                            var rect = rootNode.getBoundingClientRect();
                            coordinates = [e.clientX - rect.left - rootNode.clientLeft, e.clientY - rect.top - rootNode.clientTop];
                        }
                        else {
                            var touchCoordinates = d3.touches(rootNode);
                            if (touchCoordinates && touchCoordinates.length > 0) {
                                coordinates = touchCoordinates[0];
                            }
                        }
                        return coordinates;
                    };
                    TooltipServiceWrapper.touchStartEventName = function () {
                        var eventName = "touchstart";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerdown";
                        }
                        return eventName;
                    };
                    TooltipServiceWrapper.touchMoveEventName = function () {
                        var eventName = "touchmove";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointermove";
                        }
                        return eventName;
                    };
                    TooltipServiceWrapper.touchEndEventName = function () {
                        var eventName = "touchend";
                        if (window["PointerEvent"]) {
                            // IE11
                            eventName = "pointerup";
                        }
                        return eventName;
                    };
                    TooltipServiceWrapper.usePointerEvents = function () {
                        var eventName = TooltipServiceWrapper.touchStartEventName();
                        return eventName === "pointerdown" || eventName === "MSPointerDown";
                    };
                    return TooltipServiceWrapper;
                }());
            })(targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 || (visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var DataViewObjects = powerbi.extensibility.utils.dataview.DataViewObjects;
var textMeasurementService = powerbi.extensibility.utils.formatting.textMeasurementService;
var ValueFormatter = powerbi.extensibility.utils.formatting.valueFormatter;
var NumberFormat = powerbi.extensibility.utils.formatting.numberFormat;
var powerbi;
(function (powerbi) {
    var extensibility;
    (function (extensibility) {
        var visual;
        (function (visual) {
            var targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7;
            (function (targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7) {
                ;
                ;
                ;
                function defaultSettings() {
                    return {
                        yAxis: {
                            show: true,
                            textColor: { solid: { color: "#777777" } },
                            fontSize: 16,
                            maxWidth: 50,
                        },
                        xAxis: {
                            show: false,
                            textColor: { solid: { color: "#777777" } },
                            fontSize: 12,
                        },
                        barSettings: {
                            actualsColor: { solid: { color: "#01B8AA" } },
                            targetsColor: { solid: { color: "#FD625E" } },
                            targetsLineStroke: 2,
                            setMinBarHeight: false,
                            height: 30,
                        },
                        dataLabels: {
                            show: true,
                            fontSize: 11,
                            actualsTextColor: { solid: { color: "#FFFFFF" } },
                            targetsTextColor: { solid: { color: "#FD625E" } },
                            targetsAlignBarLabels: false,
                        },
                        units: {
                            show: true,
                            decimalPlaces: 0,
                        },
                        legend: {
                            show: false,
                            position: 'Top',
                            showTitle: false,
                            titleText: '',
                            labelColor: { solid: { color: "#666" } },
                            fontSize: 8,
                        },
                    };
                }
                function visualTransform(options, host) {
                    var dataViews = options.dataViews;
                    var hasDataViews = (dataViews && dataViews[0]);
                    var hasCategoricalData = (hasDataViews && dataViews[0].categorical && dataViews[0].categorical.values);
                    var hasSettings = (hasDataViews && dataViews[0].metadata && dataViews[0].metadata.objects);
                    var dataPoints = [];
                    var maxValue = 0;
                    var highlights = false;
                    var hasCategories = false;
                    var legendDataPoints = [];
                    var legendDataPointsWithCustomIcons = [];
                    var settings = defaultSettings();
                    if (hasSettings) {
                        var metadata = dataViews[0].metadata;
                        var objects = metadata.objects;
                        settings = {
                            yAxis: {
                                show: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "show" }, settings.yAxis.show),
                                textColor: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "textColor" }, settings.yAxis.textColor),
                                fontSize: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "fontSize" }, settings.yAxis.fontSize),
                                maxWidth: DataViewObjects.getValue(objects, { objectName: "yAxis", propertyName: "maxWidth" }, settings.yAxis.maxWidth),
                            },
                            xAxis: {
                                show: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "show" }, settings.xAxis.show),
                                textColor: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "textColor" }, settings.xAxis.textColor),
                                fontSize: DataViewObjects.getValue(objects, { objectName: "xAxis", propertyName: "fontSize" }, settings.xAxis.fontSize),
                            },
                            barSettings: {
                                actualsColor: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "actualsColor" }, settings.barSettings.actualsColor),
                                targetsColor: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "targetsColor" }, settings.barSettings.targetsColor),
                                targetsLineStroke: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "targetsLineStroke" }, settings.barSettings.targetsLineStroke),
                                setMinBarHeight: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "setMinBarHeight" }, settings.barSettings.setMinBarHeight),
                                height: DataViewObjects.getValue(objects, { objectName: "barSettings", propertyName: "height" }, settings.barSettings.height),
                            },
                            dataLabels: {
                                show: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "show" }, settings.dataLabels.show),
                                fontSize: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "fontSize" }, settings.dataLabels.fontSize),
                                actualsTextColor: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "actualsTextColor" }, settings.dataLabels.actualsTextColor),
                                targetsTextColor: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "targetsTextColor" }, settings.dataLabels.targetsTextColor),
                                targetsAlignBarLabels: DataViewObjects.getValue(objects, { objectName: "dataLabels", propertyName: "targetsAlignBarLabels" }, settings.dataLabels.targetsAlignBarLabels),
                            },
                            units: {
                                show: DataViewObjects.getValue(objects, { objectName: "units", propertyName: "show" }, settings.units.show),
                                decimalPlaces: DataViewObjects.getValue(objects, { objectName: "units", propertyName: "decimalPlaces" }, settings.units.decimalPlaces),
                            },
                            legend: {
                                show: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "show" }, settings.legend.show),
                                position: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "position" }, settings.legend.position),
                                showTitle: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "showTitle" }, settings.legend.showTitle),
                                titleText: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "titleText" }, settings.legend.titleText),
                                labelColor: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "labelColor" }, settings.legend.labelColor),
                                fontSize: DataViewObjects.getValue(objects, { objectName: "legend", propertyName: "fontSize" }, settings.legend.fontSize),
                            },
                        };
                    }
                    if (hasCategoricalData) {
                        var categorical = dataViews[0].categorical;
                        var categories = categorical.categories ? categorical.categories[categorical.categories.length - 1] : null;
                        var categoriesValues = categories ? categories.values : [''];
                        for (var i = 0; i < categoriesValues.length; i++) {
                            var dataPoint = {
                                category: null,
                                actuals: 0,
                                actualsHighlighted: 0,
                                targets: 0,
                                targetsHighlighted: 0,
                                actualVsTarget: "",
                                actualVsTargetHighlighted: "",
                                actualsIdentity: null,
                                targetsIdentity: null,
                                tooltip: [],
                            };
                            for (var k = 0; k < categorical.values.length; k++) {
                                var dataValue = categorical.values[k];
                                var value = dataValue.values[i];
                                var addToLegend = (i == 0);
                                var displayName = dataValue.source.displayName;
                                if (categories) {
                                    dataPoint.category = String(categoriesValues[i]);
                                    hasCategories = true;
                                }
                                else {
                                    dataPoint.category = displayName;
                                }
                                if (dataValue.source.roles['actuals']) {
                                    dataPoint.actuals = value ? value : 0;
                                    dataPoint.actualsIdentity = host.createSelectionIdBuilder()
                                        .withCategory(categories, i)
                                        .withMeasure(dataValue.source.queryName)
                                        .createSelectionId();
                                    var color = settings.barSettings.actualsColor.solid.color;
                                    if (addToLegend) {
                                        legendDataPoints.push({
                                            label: displayName,
                                            color: color,
                                            icon: LegendIcon.Circle,
                                            identity: dataPoint.actualsIdentity,
                                            selected: false
                                        });
                                    }
                                    dataPoint.tooltip.push({
                                        displayName: displayName,
                                        value: (dataPoint.actuals == undefined ? '(Blank)' : dataPoint.actuals)
                                    });
                                    if (dataValue.highlights) {
                                        dataPoint.actualsHighlighted = dataValue.highlights[i];
                                        highlights = true;
                                        dataPoint.tooltip.push({
                                            displayName: displayName + ' Highlighted',
                                            value: (dataPoint.actualsHighlighted == undefined ? '(Blank)' : dataPoint.actualsHighlighted)
                                        });
                                    }
                                }
                                if (dataValue.source.roles['targets']) {
                                    dataPoint.targets = value ? value : 0;
                                    dataPoint.targetsIdentity = host.createSelectionIdBuilder()
                                        .withCategory(categories, i)
                                        .withMeasure(dataValue.source.queryName)
                                        .createSelectionId();
                                    var color = settings.barSettings.targetsColor.solid.color;
                                    if (addToLegend) {
                                        legendDataPoints.push({
                                            label: displayName,
                                            color: color,
                                            icon: LegendIcon.Box,
                                            identity: dataPoint.targetsIdentity,
                                            selected: false
                                        });
                                        legendDataPointsWithCustomIcons.push({
                                            icon: 'line',
                                            color: color,
                                            identity: dataPoint.targetsIdentity
                                        });
                                    }
                                    dataPoint.tooltip.push({
                                        displayName: displayName,
                                        value: (dataPoint.targets == undefined ? '(Blank)' : dataPoint.targets)
                                    });
                                    if (dataValue.highlights) {
                                        dataPoint.targetsHighlighted = dataValue.highlights[i];
                                        highlights = true;
                                        dataPoint.tooltip.push({
                                            displayName: displayName + ' Highlighted',
                                            value: (dataPoint.targetsHighlighted == undefined ? '(Blank)' : dataPoint.targetsHighlighted)
                                        });
                                    }
                                }
                                if (dataValue.source.roles['tooltips']) {
                                    if (value !== null) {
                                        dataPoint.tooltip.push({
                                            displayName: displayName,
                                            value: (value == undefined ? '(Blank)' : value)
                                        });
                                    }
                                }
                            }
                            dataPoints.push({
                                category: dataPoint.category,
                                actuals: dataPoint.actuals,
                                actualsHighlighted: dataPoint.actualsHighlighted,
                                targets: dataPoint.targets,
                                targetsHighlighted: dataPoint.targetsHighlighted,
                                actualVsTarget: dataPoint.targets > 0 ? String(" (" + Math.floor(dataPoint.actuals / dataPoint.targets * 100) + "%)") : "",
                                actualVsTargetHighlighted: dataPoint.targetsHighlighted > 0 ? String(" (" + Math.floor(dataPoint.actualsHighlighted / dataPoint.targetsHighlighted * 100) + "%)") : "",
                                actualsIdentity: dataPoint.actualsIdentity,
                                targetsIdentity: dataPoint.targetsIdentity,
                                tooltip: dataPoint.tooltip,
                            });
                        }
                    }
                    maxValue = d3.max(dataPoints, function (x) { return Math.max(x.targets, x.actuals /* , <number>x.actuals2 */); });
                    return {
                        dataPoints: dataPoints,
                        maxValue: maxValue,
                        highlights: highlights,
                        hasCategories: hasCategories,
                        legendDataPoints: legendDataPoints,
                        legendDataPointsWithCustomIcons: legendDataPointsWithCustomIcons,
                        settings: settings,
                    };
                }
                var Visual = (function () {
                    function Visual(options) {
                        this.host = options.host;
                        this.selectionManager = options.host.createSelectionManager();
                        this.tooltipServiceWrapper = targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.createTooltipServiceWrapper(options.host.tooltipService, options.element);
                        this.legend = LegendModule.createLegend(options.element, false, null, true, LegendPosition.Top);
                        this.svg = d3.select(options.element)
                            .append('div')
                            .classed('divContainer', true)
                            .append("svg")
                            .classed("Visual", true);
                        this.barContainer = this.svg
                            .append("g")
                            .classed("barContainer", true);
                        this.yAxisGroup = this.svg
                            .append("g")
                            .classed("yAxis", true);
                        this.xAxisGroup = this.svg
                            .append("g")
                            .classed("xAxis", true);
                        this.divContainer = d3.select('.divContainer');
                    }
                    Visual.prototype.update = function (options) {
                        var _this = this;
                        var viewModel = visualTransform(options, this.host);
                        var settings = this.VisualSettings = viewModel.settings;
                        var margin = { top: 0, left: 0, bottom: 0, right: 0 };
                        if (settings.legend.show && viewModel.legendDataPoints.length > 0) {
                            this.legend.changeOrientation(LegendPosition[settings.legend.position]);
                            this.legend.drawLegend({
                                title: settings.legend.titleText,
                                dataPoints: viewModel.legendDataPoints,
                                labelColor: settings.legend.labelColor.solid.color,
                                fontSize: settings.legend.fontSize
                            }, options.viewport);
                            targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.replaceLegendIconsWithCustom(viewModel.legendDataPointsWithCustomIcons);
                            targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.appendLegendMargins(this.legend, margin);
                        }
                        else {
                            this.legend.drawLegend({ dataPoints: [] }, options.viewport);
                        }
                        var width = options.viewport.width - margin.left - margin.right;
                        var height = options.viewport.height;
                        var yAxisPadding = settings.dataLabels.show ? Visual.Config.yAxisPadding : Visual.Config.minYAxisPadding;
                        var xAxisPadding = settings.xAxis.show ? Visual.Config.xAxisPadding : 0;
                        var xdMax = height / Visual.Config.maxHeightScale;
                        var xdMin = Visual.Config.xdMin;
                        if (settings.barSettings.setMinBarHeight) {
                            xdMin = settings.barSettings.height;
                        }
                        else
                            xdMin = Visual.Config.xdMin;
                        var outerPadding = Visual.Config.outerPadding;
                        var calcX = height / (2 * Visual.Config.outerPaddingScale - Visual.Config.xPadding + viewModel.dataPoints.length);
                        var calcHeight = (-2 * outerPadding - Visual.Config.xPadding + viewModel.dataPoints.length) * xdMin;
                        if (calcX > xdMax) {
                            if (xdMax >= xdMin) {
                                var tempouterPadding = (height - (-Visual.Config.xPadding + viewModel.dataPoints.length) * xdMax) / (2 * xdMax);
                                if (tempouterPadding > 0)
                                    outerPadding = tempouterPadding;
                            }
                            else {
                                var tempOuterPadding = (height - (-Visual.Config.xPadding + viewModel.dataPoints.length) * xdMin) / (2 * xdMin);
                                if (tempOuterPadding > 0)
                                    outerPadding = tempOuterPadding;
                            }
                        }
                        else {
                            if (calcX < xdMin && calcHeight > height) {
                                height = calcHeight;
                            }
                        }
                        var h = options.viewport.height - margin.top - margin.bottom;
                        var w = options.viewport.width - margin.left - margin.right;
                        this.divContainer.attr({
                            style: 'width:' + w + 'px;height:' + h + 'px;overflow-y:auto;overflow-x:hidden;'
                        });
                        this.divContainer.style({
                            'position': 'absolute',
                            'top': margin.top + 'px',
                            'left': margin.left + 'px',
                            'right': margin.right + 'px',
                            'bottom': margin.bottom + 'px',
                        });
                        this.svg.attr({
                            width: width,
                            height: height,
                        });
                        var y = d3.scale.ordinal()
                            .domain(viewModel.dataPoints.map(function (d) { return d.category; }))
                            .rangeBands([xAxisPadding, height], Visual.Config.barPadding, outerPadding);
                        var labelsFontSize = settings.dataLabels.show ? settings.dataLabels.fontSize : y.rangeBand() / Visual.Config.fontScaleFactor;
                        if (labelsFontSize < Visual.Config.minFontSize && !settings.dataLabels.show)
                            labelsFontSize = Visual.Config.minFontSize;
                        if (labelsFontSize > Visual.Config.maxFontSize && !settings.dataLabels.show)
                            labelsFontSize = Visual.Config.maxFontSize;
                        var indexForDataMax = getIndexForDataMax(viewModel.dataPoints);
                        var targetsString = String(viewModel.dataPoints[indexForDataMax].targets + viewModel.dataPoints[indexForDataMax].actualVsTarget);
                        var labelsTextProperties = {
                            text: targetsString,
                            fontFamily: Visual.Config.fontFamily,
                            fontSize: labelsFontSize + 'px',
                        };
                        var categoryLongest = d3.max(viewModel.dataPoints, function (d) { return 5 + textMeasurementService.measureSvgTextWidth({
                            text: String(d.category),
                            fontFamily: Visual.Config.fontFamily,
                            fontSize: settings.yAxis.fontSize + 'px'
                        }); });
                        var maxYAxisPadding = settings.yAxis.show ? settings.yAxis.maxWidth : 0.5;
                        var yAxisTickSize = Math.min(w * maxYAxisPadding / 100, categoryLongest);
                        var dataLabelsPadding = textMeasurementService.measureSvgTextWidth(labelsTextProperties);
                        var x = d3.scale.linear()
                            .domain([0, viewModel.maxValue])
                            .range([yAxisTickSize, width - dataLabelsPadding - yAxisPadding]);
                        var yAxis = d3.svg.axis()
                            .scale(y)
                            .orient("left")
                            .tickSize(0)
                            .tickPadding(5);
                        var wrap = function () {
                            var self = d3.select(this);
                            var node = self.node();
                            var textLength = node.getComputedTextLength();
                            var text = self.text();
                            while (textLength > (yAxisTickSize) && text.length > 0) {
                                text = text.slice(1);
                                self.text('...' + text);
                                textLength = node.getComputedTextLength();
                            }
                        };
                        this.yAxisGroup
                            .call(yAxis)
                            .attr({
                            transform: "translate(" + yAxisTickSize + ", 0)",
                        })
                            .style({
                            fill: settings.yAxis.textColor.solid.color,
                        })
                            .selectAll("text")
                            .style({
                            "font-size": settings.yAxis.fontSize,
                        })
                            .each(wrap);
                        var xAxis = d3.svg.axis()
                            .scale(x)
                            .orient("top")
                            .tickSize(5);
                        this.xAxisGroup
                            .call(xAxis)
                            .attr({
                            transform: "translate(0, " + (xAxisPadding) + ")",
                        })
                            .style({
                            fill: settings.xAxis.textColor.solid.color,
                        })
                            .selectAll("text")
                            .style({
                            "text-anchor": "left",
                            "font-size": settings.xAxis.fontSize,
                        });
                        var bars = this.barContainer.selectAll("g.bar").data(viewModel.dataPoints);
                        bars
                            .enter()
                            .append("g")
                            .classed("bar", true);
                        bars
                            .attr({
                            x: yAxisTickSize,
                            y: function (d) { return y(d.category); },
                            height: y.rangeBand(),
                            width: function (d) { return x(d.targets) - yAxisTickSize; },
                        });
                        var actualsRects = bars.selectAll("rect.actualsBar").data(function (d) { return [d]; });
                        var actualsLabelsText = bars.selectAll('text.actualsLabelsText').data(function (d) { return [d]; });
                        var actualsRectsHi = bars.selectAll("rect.actualsBarHi").data(function (d) { return [d]; });
                        var actualsLabelsTextHi = bars.selectAll('text.actualsLabelsTextHi').data(function (d) { return [d]; });
                        actualsRects
                            .enter()
                            .append("rect")
                            .classed("actualsBar", true);
                        actualsRects
                            .attr({
                            x: yAxisTickSize,
                            y: function (d) { return y(d.category); },
                            height: y.rangeBand(),
                            width: function (d) { return x(d.actuals) - yAxisTickSize; },
                            "fill-opacity": viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                        })
                            .style({
                            fill: settings.barSettings.actualsColor.solid.color,
                        });
                        if (settings.dataLabels.show) {
                            actualsLabelsText
                                .enter()
                                .append('text')
                                .classed("actualsLabelsText", true);
                            actualsLabelsText
                                .attr({
                                x: function (d) { return x(d.actuals / 2); },
                                y: function (d) { return getTextPositionY(d.category, labelsTextProperties); },
                                height: y.rangeBand(),
                                'font-size': labelsFontSize,
                                fill: settings.dataLabels.actualsTextColor.solid.color,
                                'fill-opacity': viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                            })
                                .text(function (d) { return String(d.actuals ? d.actuals : ""); })
                                .style({
                                "text-anchor": "middle",
                            });
                        }
                        else {
                            actualsLabelsText.remove();
                        }
                        ;
                        if (viewModel.highlights) {
                            actualsRectsHi
                                .enter()
                                .append("rect")
                                .classed("actualsBarHi", true);
                            actualsRectsHi
                                .attr({
                                x: yAxisTickSize,
                                y: function (d) { return y(d.category); },
                                height: y.rangeBand(),
                                width: function (d) { return x(d.actualsHighlighted) - yAxisTickSize; },
                            })
                                .style({
                                fill: settings.barSettings.actualsColor.solid.color,
                            });
                            if (settings.dataLabels.show) {
                                actualsLabelsTextHi
                                    .enter()
                                    .append('text');
                                actualsLabelsTextHi
                                    .attr({
                                    x: function (d) { return x(d.actualsHighlighted / 2); },
                                    y: function (d) { return getTextPositionY(d.category, labelsTextProperties); },
                                    height: y.rangeBand(),
                                    'font-size': labelsFontSize,
                                    fill: settings.dataLabels.actualsTextColor.solid.color,
                                })
                                    .classed('actualsLabelsTextHi', true)
                                    .text(function (d) { return String(d.actualsHighlighted ? d.actualsHighlighted : ""); })
                                    .style({
                                    "text-anchor": "middle",
                                });
                            }
                            else {
                                actualsLabelsTextHi.remove();
                            }
                            ;
                        }
                        else {
                            actualsRectsHi.remove();
                            actualsLabelsTextHi.remove();
                        }
                        ;
                        var targetRects = bars.selectAll("rect.targetBar").data(function (d) { return [d]; });
                        targetRects
                            .enter()
                            .append("rect")
                            .classed("targetBar", true);
                        targetRects
                            .attr({
                            x: yAxisTickSize,
                            y: function (d) { return y(d.category); },
                            height: y.rangeBand(),
                            width: function (d) { return x(d.targets) - yAxisTickSize; },
                            fill: "none",
                            "stroke-width": settings.barSettings.targetsLineStroke,
                            "stroke": settings.barSettings.targetsColor.solid.color,
                            "stroke-opacity": viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity,
                        });
                        var targetLabelsText = bars.selectAll('text.targetLabelsText').data(function (d) { return [d]; });
                        if (settings.dataLabels.show) {
                            targetLabelsText
                                .enter()
                                .append('text')
                                .classed('targetLabelsText', true);
                            targetLabelsText
                                .attr({
                                x: function (d) {
                                    return settings.dataLabels.targetsAlignBarLabels ? getTextPositionX(viewModel.maxValue, null) : getTextPositionX(Math.max(d.targets, d.actuals /* +<number>d.actuals2 */), null);
                                },
                                y: function (d) { return getTextPositionY(d.category, labelsTextProperties); },
                                height: y.rangeBand(),
                                'font-size': labelsFontSize,
                                fill: settings.dataLabels.targetsTextColor.solid.color,
                                'fill-opacity': function (d) { return d.targets > 0 ? viewModel.highlights ? Visual.Config.transparentOpacity : Visual.Config.solidOpacity : 0; },
                            })
                                .text(function (d) { return String((d.targets ? d.targets : "") + d.actualVsTarget); });
                        }
                        else {
                            targetLabelsText.remove();
                        }
                        ;
                        var targetRectsHi = bars.selectAll("rect.targetBarHi").data(function (d) { return [d]; });
                        var targetLabelsRectHi = bars.selectAll("rect.targetLabelsRectHi").data(function (d) { return [d]; });
                        var targetLabelsTextHi = bars.selectAll('text.targetLabelsTextHi').data(function (d) { return [d]; });
                        if (viewModel.highlights) {
                            targetRectsHi
                                .enter()
                                .append("rect")
                                .classed("targetBarHi", true);
                            targetRectsHi
                                .attr({
                                x: yAxisTickSize,
                                y: function (d) { return y(d.category); },
                                height: y.rangeBand(),
                                width: function (d) { return x(d.targetsHighlighted) - yAxisTickSize; },
                                fill: "none",
                                "stroke-width": settings.barSettings.targetsLineStroke,
                                "stroke": settings.barSettings.targetsColor.solid.color,
                            });
                            if (settings.dataLabels.show) {
                                targetLabelsTextHi
                                    .enter()
                                    .append('text')
                                    .classed('targetLabelsTextHi', true);
                                targetLabelsTextHi
                                    .attr({
                                    x: function (d) {
                                        return settings.dataLabels.targetsAlignBarLabels ? getTextPositionX(viewModel.maxValue, null) : getTextPositionX(Math.max(d.targetsHighlighted, d.actualsHighlighted /* +<number>d.actuals2Highlighted */), null);
                                    },
                                    y: function (d) { return getTextPositionY(d.category, labelsTextProperties); },
                                    height: y.rangeBand(),
                                    'font-size': labelsFontSize,
                                    fill: settings.dataLabels.targetsTextColor.solid.color,
                                })
                                    .text(function (d) { return String((d.targetsHighlighted ? d.targetsHighlighted : "") + d.actualVsTargetHighlighted); });
                            }
                            else {
                                targetLabelsTextHi.remove();
                                targetLabelsRectHi.remove();
                            }
                            ;
                        }
                        else {
                            targetRectsHi.remove();
                            targetLabelsRectHi.remove();
                            targetLabelsTextHi.remove();
                        }
                        ;
                        this.svg.on('contextmenu', function () {
                            var mouseEvent = d3.event;
                            var eventTarget = mouseEvent.target;
                            var dataPoint = d3.select(eventTarget).datum();
                            _this.selectionManager.showContextMenu(dataPoint ? dataPoint.identity : {}, {
                                x: mouseEvent.clientX,
                                y: mouseEvent.clientY,
                            });
                            mouseEvent.preventDefault();
                        });
                        actualsRects.on('contextmenu', function () {
                            var mouseEvent = d3.event;
                            var eventTarget = mouseEvent.target;
                            var dataPoint = d3.select(eventTarget).datum();
                            _this.selectionManager.showContextMenu(dataPoint ? dataPoint.actualsIdentity : {}, {
                                x: mouseEvent.clientX,
                                y: mouseEvent.clientY,
                            });
                            mouseEvent.preventDefault();
                        });
                        actualsRectsHi.on('contextmenu', function () {
                            var mouseEvent = d3.event;
                            var eventTarget = mouseEvent.target;
                            var dataPoint = d3.select(eventTarget).datum();
                            _this.selectionManager.showContextMenu(dataPoint ? dataPoint.actualsIdentity : {}, {
                                x: mouseEvent.clientX,
                                y: mouseEvent.clientY,
                            });
                            mouseEvent.preventDefault();
                        });
                        targetLabelsText.on('contextmenu', function () {
                            var mouseEvent = d3.event;
                            var eventTarget = mouseEvent.target;
                            var dataPoint = d3.select(eventTarget).datum();
                            _this.selectionManager.showContextMenu(dataPoint ? dataPoint.targetsIdentity : {}, {
                                x: mouseEvent.clientX,
                                y: mouseEvent.clientY,
                            });
                            mouseEvent.preventDefault();
                        });
                        targetLabelsTextHi.on('contextmenu', function () {
                            var mouseEvent = d3.event;
                            var eventTarget = mouseEvent.target;
                            var dataPoint = d3.select(eventTarget).datum();
                            _this.selectionManager.showContextMenu(dataPoint ? dataPoint.targetsIdentity : {}, {
                                x: mouseEvent.clientX,
                                y: mouseEvent.clientY,
                            });
                            mouseEvent.preventDefault();
                        });
                        this.syncSelectionState(actualsRects, this.selectionManager.getSelectionIds());
                        this.syncSelectionState(actualsLabelsText, this.selectionManager.getSelectionIds());
                        this.syncSelectionState(targetRects, this.selectionManager.getSelectionIds());
                        this.syncSelectionState(targetLabelsText, this.selectionManager.getSelectionIds());
                        var self = this;
                        bars
                            .on('click', function (d) {
                            _this.selectionManager
                                .select(d.actualsIdentity, d3.event.ctrlKey)
                                .then(function (ids) {
                                self.syncSelectionState(actualsRects, ids);
                                self.syncSelectionState(actualsLabelsText, ids);
                                self.syncSelectionState(targetRects, ids);
                                self.syncSelectionState(targetLabelsText, ids);
                            });
                        });
                        this.tooltipServiceWrapper.addTooltip(this.barContainer.selectAll('.bar'), function (tooltipEvent) { return _this.getTooltipData(tooltipEvent.data); }, function (tooltipEvent) { return tooltipEvent.data.actualsIdentity; });
                        bars
                            .exit()
                            .remove();
                        function getTextPositionX(value, width) {
                            return x(value) > width ? x(value) + 8 : width + 12;
                        }
                        ;
                        function getTextPositionY(category, textProperties) {
                            return y(category) + y.rangeBand() / 2 + textMeasurementService.measureSvgTextHeight(textProperties) / 4;
                        }
                        ;
                    };
                    Visual.prototype.enumerateObjectInstances = function (options) {
                        var objectName = options.objectName;
                        var objectEnumeration = [];
                        switch (objectName) {
                            case "yAxis":
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.VisualSettings.yAxis.show,
                                        textColor: this.VisualSettings.yAxis.textColor,
                                        fontSize: this.VisualSettings.yAxis.fontSize,
                                        maxWidth: this.VisualSettings.yAxis.maxWidth,
                                    },
                                    validValues: {
                                        maxWidth: {
                                            numberRange: {
                                                min: 10,
                                                max: 50,
                                            }
                                        }
                                    },
                                    selector: null,
                                });
                                break;
                            case "xAxis":
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.VisualSettings.xAxis.show,
                                        textColor: this.VisualSettings.xAxis.textColor,
                                        fontSize: this.VisualSettings.xAxis.fontSize,
                                    },
                                    selector: null,
                                });
                                break;
                            case "barSettings":
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        actualsColor: this.VisualSettings.barSettings.actualsColor,
                                        targetsLineStroke: this.VisualSettings.barSettings.targetsLineStroke,
                                        targetsColor: this.VisualSettings.barSettings.targetsColor,
                                        setMinBarHeight: this.VisualSettings.barSettings.setMinBarHeight,
                                    },
                                    validValues: {
                                        targetsLineStroke: {
                                            numberRange: {
                                                min: 1,
                                                max: 5,
                                            },
                                        },
                                    },
                                    selector: null,
                                });
                                if (this.VisualSettings.barSettings.setMinBarHeight) {
                                    objectEnumeration.push({
                                        objectName: objectName,
                                        properties: {
                                            height: this.VisualSettings.barSettings.height,
                                        },
                                        validValues: {
                                            height: {
                                                numberRange: {
                                                    min: 20,
                                                    max: 200,
                                                },
                                            },
                                        },
                                        selector: null,
                                    });
                                }
                                break;
                            case "dataLabels":
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.VisualSettings.dataLabels.show,
                                        fontSize: this.VisualSettings.dataLabels.fontSize,
                                        actualsTextColor: this.VisualSettings.dataLabels.actualsTextColor,
                                        targetsTextColor: this.VisualSettings.dataLabels.targetsTextColor,
                                        targetsAlignBarLabels: this.VisualSettings.dataLabels.targetsAlignBarLabels,
                                    },
                                    validValues: {
                                        targetsLineStroke: {
                                            numberRange: {
                                                min: 1,
                                                max: 5,
                                            },
                                        },
                                    },
                                    selector: null,
                                });
                                break;
                            case 'units':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        show: this.VisualSettings.units.show,
                                        decimalPlaces: this.VisualSettings.units.decimalPlaces,
                                    },
                                    selector: null,
                                });
                                break;
                            case 'legend':
                                objectEnumeration.push({
                                    objectName: objectName,
                                    properties: {
                                        "show": this.VisualSettings.legend.show,
                                        "position": this.VisualSettings.legend.position,
                                        "showTitle": this.VisualSettings.legend.showTitle,
                                        "titleText": this.VisualSettings.legend.titleText,
                                        "labelColor": this.VisualSettings.legend.labelColor,
                                        "fontSize": this.VisualSettings.legend.fontSize
                                    },
                                    selector: null
                                });
                                break;
                        }
                        ;
                        return objectEnumeration;
                    };
                    Visual.prototype.isSelectionIdInArray = function (selectionIds, selectionId) {
                        if (!selectionIds || !selectionId) {
                            return false;
                        }
                        return selectionIds.some(function (currentSelectionId) {
                            return currentSelectionId.includes(selectionId);
                        });
                    };
                    Visual.prototype.syncSelectionState = function (selection, selectionIds) {
                        if (!selection || !selectionIds) {
                            return;
                        }
                        if (!selectionIds.length) {
                            selection.style("fill-opacity", null);
                            selection.style("stroke-opacity", null);
                            return;
                        }
                        var self = this;
                        selection.each(function (barDataPoint) {
                            var isSelected = self.isSelectionIdInArray(selectionIds, barDataPoint.actualsIdentity);
                            d3.select(this)
                                .style("fill-opacity", isSelected
                                ? Visual.Config.solidOpacity
                                : Visual.Config.transparentOpacity)
                                .style("stroke-opacity", isSelected
                                ? Visual.Config.solidOpacity
                                : Visual.Config.transparentOpacity);
                        });
                    };
                    Visual.prototype.getTooltipData = function (value) {
                        var _this = this;
                        var tooltip = [];
                        tooltip.push({
                            displayName: value.category,
                            value: value.formattedValue,
                        });
                        value.tooltip.forEach(function (element) {
                            tooltip.push({ displayName: element.displayName, value: (typeof (element.value) === "string" ? (element.value || 0).toString() : (_this.VisualSettings.units.decimalPlaces != null ? parseFloat(element.value).toFixed(_this.VisualSettings.units.decimalPlaces) : element.value)) });
                        });
                        return tooltip;
                    };
                    return Visual;
                }());
                Visual.Config = {
                    solidOpacity: 1.0,
                    transparentOpacity: 0.25,
                    barPadding: 0.3,
                    yAxisPadding: 30,
                    minYAxisPadding: 10,
                    xAxisPadding: 30,
                    maxHeightScale: 3,
                    xdMin: 30,
                    outerPadding: 0.1,
                    outerPaddingScale: 0.5,
                    xPadding: 0.3,
                    fontScaleFactor: 2.5,
                    minFontSize: 8.5,
                    maxFontSize: 30,
                    fontFamily: "Segoe UI",
                };
                targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.Visual = Visual;
                function getIndexForDataMax(arr) {
                    var i = 0;
                    var p = 0;
                    var max = arr[i].value;
                    for (i = 1; i < arr.length; i++) {
                        if (arr[i].value > max) {
                            max = arr[i].value;
                            p = i;
                        }
                    }
                    return p;
                }
            })(targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 || (visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7 = {}));
        })(visual = extensibility.visual || (extensibility.visual = {}));
    })(extensibility = powerbi.extensibility || (powerbi.extensibility = {}));
})(powerbi || (powerbi = {}));
var powerbi;
(function (powerbi) {
    var visuals;
    (function (visuals) {
        var plugins;
        (function (plugins) {
            plugins.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7_DEBUG = {
                name: 'targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7_DEBUG',
                displayName: 'targetsVsActuals',
                class: 'Visual',
                version: '1.0.0',
                apiVersion: '2.3.0',
                create: function (options) { return new powerbi.extensibility.visual.targetsVsActuals6B2DE8CAFFA3417997A32E35E26567E7.Visual(options); },
                custom: true
            };
        })(plugins = visuals.plugins || (visuals.plugins = {}));
    })(visuals = powerbi.visuals || (powerbi.visuals = {}));
})(powerbi || (powerbi = {}));
//# sourceMappingURL=visual.js.map