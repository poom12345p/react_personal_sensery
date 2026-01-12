import{R as xt,r as R,j as ct,aQ as rr}from"./index-CehiIN8E.js";function er(t){if(t.sheet)return t.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===t)return document.styleSheets[r]}function ar(t){var r=document.createElement("style");return r.setAttribute("data-emotion",t.key),t.nonce!==void 0&&r.setAttribute("nonce",t.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var nr=(function(){function t(e){var a=this;this._insertTag=function(n){var s;a.tags.length===0?a.insertionPoint?s=a.insertionPoint.nextSibling:a.prepend?s=a.container.firstChild:s=a.before:s=a.tags[a.tags.length-1].nextSibling,a.container.insertBefore(n,s),a.tags.push(n)},this.isSpeedy=e.speedy===void 0?!0:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var r=t.prototype;return r.hydrate=function(a){a.forEach(this._insertTag)},r.insert=function(a){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ar(this));var n=this.tags[this.tags.length-1];if(this.isSpeedy){var s=er(n);try{s.insertRule(a,s.cssRules.length)}catch{}}else n.appendChild(document.createTextNode(a));this.ctr++},r.flush=function(){this.tags.forEach(function(a){var n;return(n=a.parentNode)==null?void 0:n.removeChild(a)}),this.tags=[],this.ctr=0},t})(),P="-ms-",Q="-moz-",v="-webkit-",kt="comm",pt="rule",yt="decl",sr="@import",_t="@keyframes",or="@layer",ir=Math.abs,tt=String.fromCharCode,cr=Object.assign;function fr(t,r){return T(t,0)^45?(((r<<2^T(t,0))<<2^T(t,1))<<2^T(t,2))<<2^T(t,3):0}function Mt(t){return t.trim()}function dr(t,r){return(t=r.exec(t))?t[0]:t}function x(t,r,e){return t.replace(r,e)}function ft(t,r){return t.indexOf(r)}function T(t,r){return t.charCodeAt(r)|0}function L(t,r,e){return t.slice(r,e)}function M(t){return t.length}function ht(t){return t.length}function U(t,r){return r.push(t),t}function lr(t,r){return t.map(r).join("")}var rt=1,j=1,zt=0,k=0,I=0,F="";function et(t,r,e,a,n,s,i){return{value:t,root:r,parent:e,type:a,props:n,children:s,line:rt,column:j,length:i,return:""}}function V(t,r){return cr(et("",null,null,"",null,null,0),t,{length:-t.length},r)}function ur(){return I}function mr(){return I=k>0?T(F,--k):0,j--,I===10&&(j=1,rt--),I}function _(){return I=k<zt?T(F,k++):0,j++,I===10&&(j=1,rt++),I}function Y(){return T(F,k)}function J(){return k}function q(t,r){return L(F,t,r)}function D(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Yt(t){return rt=j=1,zt=M(F=t),k=0,[]}function Xt(t){return F="",t}function K(t){return Mt(q(k-1,dt(t===91?t+2:t===40?t+1:t)))}function pr(t){for(;(I=Y())&&I<33;)_();return D(t)>2||D(I)>3?"":" "}function yr(t,r){for(;--r&&_()&&!(I<48||I>102||I>57&&I<65||I>70&&I<97););return q(t,J()+(r<6&&Y()==32&&_()==32))}function dt(t){for(;_();)switch(I){case t:return k;case 34:case 39:t!==34&&t!==39&&dt(I);break;case 40:t===41&&dt(t);break;case 92:_();break}return k}function hr(t,r){for(;_()&&t+I!==57;)if(t+I===84&&Y()===47)break;return"/*"+q(r,k-1)+"*"+tt(t===47?t:_())}function gr(t){for(;!D(Y());)_();return q(t,k)}function br(t){return Xt(Z("",null,null,null,[""],t=Yt(t),0,[0],t))}function Z(t,r,e,a,n,s,i,f,d){for(var l=0,u=0,p=i,C=0,S=0,y=0,m=1,O=1,b=1,h=0,g="",N=n,c=s,E=a,$=g;O;)switch(y=h,h=_()){case 40:if(y!=108&&T($,p-1)==58){ft($+=x(K(h),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:$+=K(h);break;case 9:case 10:case 13:case 32:$+=pr(y);break;case 92:$+=yr(J()-1,7);continue;case 47:switch(Y()){case 42:case 47:U(vr(hr(_(),J()),r,e),d);break;default:$+="/"}break;case 123*m:f[l++]=M($)*b;case 125*m:case 59:case 0:switch(h){case 0:case 125:O=0;case 59+u:b==-1&&($=x($,/\f/g,"")),S>0&&M($)-p&&U(S>32?St($+";",a,e,p-1):St(x($," ","")+";",a,e,p-2),d);break;case 59:$+=";";default:if(U(E=wt($,r,e,l,u,n,f,g,N=[],c=[],p),s),h===123)if(u===0)Z($,r,E,E,N,s,p,f,c);else switch(C===99&&T($,3)===110?100:C){case 100:case 108:case 109:case 115:Z(t,E,E,a&&U(wt(t,E,E,0,0,n,f,g,n,N=[],p),c),n,c,p,f,a?N:c);break;default:Z($,E,E,E,[""],c,0,f,c)}}l=u=S=0,m=b=1,g=$="",p=i;break;case 58:p=1+M($),S=y;default:if(m<1){if(h==123)--m;else if(h==125&&m++==0&&mr()==125)continue}switch($+=tt(h),h*m){case 38:b=u>0?1:($+="\f",-1);break;case 44:f[l++]=(M($)-1)*b,b=1;break;case 64:Y()===45&&($+=K(_())),C=Y(),u=p=M(g=$+=gr(J())),h++;break;case 45:y===45&&M($)==2&&(m=0)}}return s}function wt(t,r,e,a,n,s,i,f,d,l,u){for(var p=n-1,C=n===0?s:[""],S=ht(C),y=0,m=0,O=0;y<a;++y)for(var b=0,h=L(t,p+1,p=ir(m=i[y])),g=t;b<S;++b)(g=Mt(m>0?C[b]+" "+h:x(h,/&\f/g,C[b])))&&(d[O++]=g);return et(t,r,e,n===0?pt:f,d,l,u)}function vr(t,r,e){return et(t,r,e,kt,tt(ur()),L(t,2,-2),0)}function St(t,r,e,a){return et(t,r,e,yt,L(t,0,a),L(t,a+1,-1),a)}function X(t,r){for(var e="",a=ht(t),n=0;n<a;n++)e+=r(t[n],n,t,r)||"";return e}function xr(t,r,e,a){switch(t.type){case or:if(t.children.length)break;case sr:case yt:return t.return=t.return||t.value;case kt:return"";case _t:return t.return=t.value+"{"+X(t.children,a)+"}";case pt:t.value=t.props.join(",")}return M(e=X(t.children,a))?t.return=t.value+"{"+e+"}":""}function wr(t){var r=ht(t);return function(e,a,n,s){for(var i="",f=0;f<r;f++)i+=t[f](e,a,n,s)||"";return i}}function Sr(t){return function(r){r.root||(r=r.return)&&t(r)}}function $r(t){var r=Object.create(null);return function(e){return r[e]===void 0&&(r[e]=t(e)),r[e]}}var Cr=function(r,e,a){for(var n=0,s=0;n=s,s=Y(),n===38&&s===12&&(e[a]=1),!D(s);)_();return q(r,k)},Or=function(r,e){var a=-1,n=44;do switch(D(n)){case 0:n===38&&Y()===12&&(e[a]=1),r[a]+=Cr(k-1,e,a);break;case 2:r[a]+=K(n);break;case 4:if(n===44){r[++a]=Y()===58?"&\f":"",e[a]=r[a].length;break}default:r[a]+=tt(n)}while(n=_());return r},Rr=function(r,e){return Xt(Or(Yt(r),e))},$t=new WeakMap,Er=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var e=r.value,a=r.parent,n=r.column===a.column&&r.line===a.line;a.type!=="rule";)if(a=a.parent,!a)return;if(!(r.props.length===1&&e.charCodeAt(0)!==58&&!$t.get(a))&&!n){$t.set(r,!0);for(var s=[],i=Rr(e,s),f=a.props,d=0,l=0;d<i.length;d++)for(var u=0;u<f.length;u++,l++)r.props[l]=s[d]?i[d].replace(/&\f/g,f[u]):f[u]+" "+i[d]}}},Ir=function(r){if(r.type==="decl"){var e=r.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(r.return="",r.value="")}};function jt(t,r){switch(fr(t,r)){case 5103:return v+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return v+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return v+t+Q+t+P+t+t;case 6828:case 4268:return v+t+P+t+t;case 6165:return v+t+P+"flex-"+t+t;case 5187:return v+t+x(t,/(\w+).+(:[^]+)/,v+"box-$1$2"+P+"flex-$1$2")+t;case 5443:return v+t+P+"flex-item-"+x(t,/flex-|-self/,"")+t;case 4675:return v+t+P+"flex-line-pack"+x(t,/align-content|flex-|-self/,"")+t;case 5548:return v+t+P+x(t,"shrink","negative")+t;case 5292:return v+t+P+x(t,"basis","preferred-size")+t;case 6060:return v+"box-"+x(t,"-grow","")+v+t+P+x(t,"grow","positive")+t;case 4554:return v+x(t,/([^-])(transform)/g,"$1"+v+"$2")+t;case 6187:return x(x(x(t,/(zoom-|grab)/,v+"$1"),/(image-set)/,v+"$1"),t,"")+t;case 5495:case 3959:return x(t,/(image-set\([^]*)/,v+"$1$`$1");case 4968:return x(x(t,/(.+:)(flex-)?(.*)/,v+"box-pack:$3"+P+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+v+t+t;case 4095:case 3583:case 4068:case 2532:return x(t,/(.+)-inline(.+)/,v+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(M(t)-1-r>6)switch(T(t,r+1)){case 109:if(T(t,r+4)!==45)break;case 102:return x(t,/(.+:)(.+)-([^]+)/,"$1"+v+"$2-$3$1"+Q+(T(t,r+3)==108?"$3":"$2-$3"))+t;case 115:return~ft(t,"stretch")?jt(x(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(T(t,r+1)!==115)break;case 6444:switch(T(t,M(t)-3-(~ft(t,"!important")&&10))){case 107:return x(t,":",":"+v)+t;case 101:return x(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+v+(T(t,14)===45?"inline-":"")+"box$3$1"+v+"$2$3$1"+P+"$2box$3")+t}break;case 5936:switch(T(t,r+11)){case 114:return v+t+P+x(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return v+t+P+x(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return v+t+P+x(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return v+t+P+t+t}return t}var Ar=function(r,e,a,n){if(r.length>-1&&!r.return)switch(r.type){case yt:r.return=jt(r.value,r.length);break;case _t:return X([V(r,{value:x(r.value,"@","@"+v)})],n);case pt:if(r.length)return lr(r.props,function(s){switch(dr(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return X([V(r,{props:[x(s,/:(read-\w+)/,":"+Q+"$1")]})],n);case"::placeholder":return X([V(r,{props:[x(s,/:(plac\w+)/,":"+v+"input-$1")]}),V(r,{props:[x(s,/:(plac\w+)/,":"+Q+"$1")]}),V(r,{props:[x(s,/:(plac\w+)/,P+"input-$1")]})],n)}return""})}},Nr=[Ar],Tr=function(r){var e=r.key;if(e==="css"){var a=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(a,function(m){var O=m.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var n=r.stylisPlugins||Nr,s={},i,f=[];i=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(m){for(var O=m.getAttribute("data-emotion").split(" "),b=1;b<O.length;b++)s[O[b]]=!0;f.push(m)});var d,l=[Er,Ir];{var u,p=[xr,Sr(function(m){u.insert(m)})],C=wr(l.concat(n,p)),S=function(O){return X(br(O),C)};d=function(O,b,h,g){u=h,S(O?O+"{"+b.styles+"}":b.styles),g&&(y.inserted[b.name]=!0)}}var y={key:e,sheet:new nr({key:e,container:i,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:s,registered:{},insert:d};return y.sheet.hydrate(f),y},nt={exports:{}},w={};var Ct;function Pr(){if(Ct)return w;Ct=1;var t=typeof Symbol=="function"&&Symbol.for,r=t?Symbol.for("react.element"):60103,e=t?Symbol.for("react.portal"):60106,a=t?Symbol.for("react.fragment"):60107,n=t?Symbol.for("react.strict_mode"):60108,s=t?Symbol.for("react.profiler"):60114,i=t?Symbol.for("react.provider"):60109,f=t?Symbol.for("react.context"):60110,d=t?Symbol.for("react.async_mode"):60111,l=t?Symbol.for("react.concurrent_mode"):60111,u=t?Symbol.for("react.forward_ref"):60112,p=t?Symbol.for("react.suspense"):60113,C=t?Symbol.for("react.suspense_list"):60120,S=t?Symbol.for("react.memo"):60115,y=t?Symbol.for("react.lazy"):60116,m=t?Symbol.for("react.block"):60121,O=t?Symbol.for("react.fundamental"):60117,b=t?Symbol.for("react.responder"):60118,h=t?Symbol.for("react.scope"):60119;function g(c){if(typeof c=="object"&&c!==null){var E=c.$$typeof;switch(E){case r:switch(c=c.type,c){case d:case l:case a:case s:case n:case p:return c;default:switch(c=c&&c.$$typeof,c){case f:case u:case y:case S:case i:return c;default:return E}}case e:return E}}}function N(c){return g(c)===l}return w.AsyncMode=d,w.ConcurrentMode=l,w.ContextConsumer=f,w.ContextProvider=i,w.Element=r,w.ForwardRef=u,w.Fragment=a,w.Lazy=y,w.Memo=S,w.Portal=e,w.Profiler=s,w.StrictMode=n,w.Suspense=p,w.isAsyncMode=function(c){return N(c)||g(c)===d},w.isConcurrentMode=N,w.isContextConsumer=function(c){return g(c)===f},w.isContextProvider=function(c){return g(c)===i},w.isElement=function(c){return typeof c=="object"&&c!==null&&c.$$typeof===r},w.isForwardRef=function(c){return g(c)===u},w.isFragment=function(c){return g(c)===a},w.isLazy=function(c){return g(c)===y},w.isMemo=function(c){return g(c)===S},w.isPortal=function(c){return g(c)===e},w.isProfiler=function(c){return g(c)===s},w.isStrictMode=function(c){return g(c)===n},w.isSuspense=function(c){return g(c)===p},w.isValidElementType=function(c){return typeof c=="string"||typeof c=="function"||c===a||c===l||c===s||c===n||c===p||c===C||typeof c=="object"&&c!==null&&(c.$$typeof===y||c.$$typeof===S||c.$$typeof===i||c.$$typeof===f||c.$$typeof===u||c.$$typeof===O||c.$$typeof===b||c.$$typeof===h||c.$$typeof===m)},w.typeOf=g,w}var Ot;function kr(){return Ot||(Ot=1,nt.exports=Pr()),nt.exports}var st,Rt;function _r(){if(Rt)return st;Rt=1;var t=kr(),r={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};s[t.ForwardRef]=a,s[t.Memo]=n;function i(y){return t.isMemo(y)?n:s[y.$$typeof]||r}var f=Object.defineProperty,d=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,C=Object.prototype;function S(y,m,O){if(typeof m!="string"){if(C){var b=p(m);b&&b!==C&&S(y,b,O)}var h=d(m);l&&(h=h.concat(l(m)));for(var g=i(y),N=i(m),c=0;c<h.length;++c){var E=h[c];if(!e[E]&&!(O&&O[E])&&!(N&&N[E])&&!(g&&g[E])){var $=u(m,E);try{f(y,E,$)}catch{}}}}return y}return st=S,st}_r();var Mr=!0;function Ft(t,r,e){var a="";return e.split(" ").forEach(function(n){t[n]!==void 0?r.push(t[n]+";"):n&&(a+=n+" ")}),a}var gt=function(r,e,a){var n=r.key+"-"+e.name;(a===!1||Mr===!1)&&r.registered[n]===void 0&&(r.registered[n]=e.styles)},Vt=function(r,e,a){gt(r,e,a);var n=r.key+"-"+e.name;if(r.inserted[e.name]===void 0){var s=e;do r.insert(e===s?"."+n:"",s,r.sheet,!0),s=s.next;while(s!==void 0)}};function zr(t){for(var r=0,e,a=0,n=t.length;n>=4;++a,n-=4)e=t.charCodeAt(a)&255|(t.charCodeAt(++a)&255)<<8|(t.charCodeAt(++a)&255)<<16|(t.charCodeAt(++a)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(e&65535)*1540483477+((e>>>16)*59797<<16)^(r&65535)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(t.charCodeAt(a+2)&255)<<16;case 2:r^=(t.charCodeAt(a+1)&255)<<8;case 1:r^=t.charCodeAt(a)&255,r=(r&65535)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,r=(r&65535)*1540483477+((r>>>16)*59797<<16),((r^r>>>15)>>>0).toString(36)}var Yr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xr=/[A-Z]|^ms/g,jr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Lt=function(r){return r.charCodeAt(1)===45},Et=function(r){return r!=null&&typeof r!="boolean"},ot=$r(function(t){return Lt(t)?t:t.replace(Xr,"-$&").toLowerCase()}),It=function(r,e){switch(r){case"animation":case"animationName":if(typeof e=="string")return e.replace(jr,function(a,n,s){return z={name:n,styles:s,next:z},n})}return Yr[r]!==1&&!Lt(r)&&typeof e=="number"&&e!==0?e+"px":e};function B(t,r,e){if(e==null)return"";var a=e;if(a.__emotion_styles!==void 0)return a;switch(typeof e){case"boolean":return"";case"object":{var n=e;if(n.anim===1)return z={name:n.name,styles:n.styles,next:z},n.name;var s=e;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)z={name:i.name,styles:i.styles,next:z},i=i.next;var f=s.styles+";";return f}return Fr(t,r,e)}case"function":{if(t!==void 0){var d=z,l=e(t);return z=d,B(t,r,l)}break}}var u=e;if(r==null)return u;var p=r[u];return p!==void 0?p:u}function Fr(t,r,e){var a="";if(Array.isArray(e))for(var n=0;n<e.length;n++)a+=B(t,r,e[n])+";";else for(var s in e){var i=e[s];if(typeof i!="object"){var f=i;r!=null&&r[f]!==void 0?a+=s+"{"+r[f]+"}":Et(f)&&(a+=ot(s)+":"+It(s,f)+";")}else if(Array.isArray(i)&&typeof i[0]=="string"&&(r==null||r[i[0]]===void 0))for(var d=0;d<i.length;d++)Et(i[d])&&(a+=ot(s)+":"+It(s,i[d])+";");else{var l=B(t,r,i);switch(s){case"animation":case"animationName":{a+=ot(s)+":"+l+";";break}default:a+=s+"{"+l+"}"}}}return a}var At=/label:\s*([^\s;{]+)\s*(;|$)/g,z;function bt(t,r,e){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var a=!0,n="";z=void 0;var s=t[0];if(s==null||s.raw===void 0)a=!1,n+=B(e,r,s);else{var i=s;n+=i[0]}for(var f=1;f<t.length;f++)if(n+=B(e,r,t[f]),a){var d=s;n+=d[f]}At.lastIndex=0;for(var l="",u;(u=At.exec(n))!==null;)l+="-"+u[1];var p=zr(n)+l;return{name:p,styles:n,next:z}}var Vr=function(r){return r()},Lr=xt.useInsertionEffect?xt.useInsertionEffect:!1,Dt=Lr||Vr,Bt=R.createContext(typeof HTMLElement<"u"?Tr({key:"css"}):null);Bt.Provider;var Wt=function(r){return R.forwardRef(function(e,a){var n=R.useContext(Bt);return r(e,n,a)})},qt=R.createContext({}),at={}.hasOwnProperty,lt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ut=function(r,e){var a={};for(var n in e)at.call(e,n)&&(a[n]=e[n]);return a[lt]=r,a},Dr=function(r){var e=r.cache,a=r.serialized,n=r.isStringTag;return gt(e,a,n),Dt(function(){return Vt(e,a,n)}),null},Br=Wt(function(t,r,e){var a=t.css;typeof a=="string"&&r.registered[a]!==void 0&&(a=r.registered[a]);var n=t[lt],s=[a],i="";typeof t.className=="string"?i=Ft(r.registered,s,t.className):t.className!=null&&(i=t.className+" ");var f=bt(s,void 0,R.useContext(qt));i+=r.key+"-"+f.name;var d={};for(var l in t)at.call(t,l)&&l!=="css"&&l!==lt&&(d[l]=t[l]);return d.className=i,e&&(d.ref=e),R.createElement(R.Fragment,null,R.createElement(Dr,{cache:r,serialized:f,isStringTag:typeof n=="string"}),R.createElement(n,d))}),Gt=Br,Wr=ct.Fragment,A=function(r,e,a){return at.call(e,"css")?ct.jsx(Gt,Ut(r,e),a):ct.jsx(r,e,a)},Nt=function(r,e){var a=arguments;if(e==null||!at.call(e,"css"))return R.createElement.apply(void 0,a);var n=a.length,s=new Array(n);s[0]=Gt,s[1]=Ut(r,e);for(var i=2;i<n;i++)s[i]=a[i];return R.createElement.apply(null,s)};(function(t){var r;r||(r=t.JSX||(t.JSX={}))})(Nt||(Nt={}));function Ht(){for(var t=arguments.length,r=new Array(t),e=0;e<t;e++)r[e]=arguments[e];return bt(r)}function o(){var t=Ht.apply(void 0,arguments),r="animation-"+t.name;return{name:r,styles:"@keyframes "+r+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var qr=function t(r){for(var e=r.length,a=0,n="";a<e;a++){var s=r[a];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var f in s)s[f]&&f&&(i&&(i+=" "),i+=f)}break}default:i=s}i&&(n&&(n+=" "),n+=i)}}return n};function Ur(t,r,e){var a=[],n=Ft(t,a,e);return a.length<2?e:n+r(a)}var Gr=function(r){var e=r.cache,a=r.serializedArr;return Dt(function(){for(var n=0;n<a.length;n++)Vt(e,a[n],!1)}),null},it=Wt(function(t,r){var e=[],a=function(){for(var d=arguments.length,l=new Array(d),u=0;u<d;u++)l[u]=arguments[u];var p=bt(l,r.registered);return e.push(p),gt(r,p,!1),r.key+"-"+p.name},n=function(){for(var d=arguments.length,l=new Array(d),u=0;u<d;u++)l[u]=arguments[u];return Ur(r.registered,a,qr(l))},s={css:a,cx:n,theme:R.useContext(qt)},i=t.children(s);return R.createElement(R.Fragment,null,R.createElement(Gr,{cache:r,serializedArr:e}),i)}),Hr=Object.defineProperty,Jr=(t,r,e)=>r in t?Hr(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,G=(t,r,e)=>Jr(t,typeof r!="symbol"?r+"":r,e),ut=new Map,H=new WeakMap,Tt=0,Kr=void 0;function Zr(t){return t?(H.has(t)||(Tt+=1,H.set(t,Tt.toString())),H.get(t)):"0"}function Qr(t){return Object.keys(t).sort().filter(r=>t[r]!==void 0).map(r=>`${r}_${r==="root"?Zr(t.root):t[r]}`).toString()}function te(t){const r=Qr(t);let e=ut.get(r);if(!e){const a=new Map;let n;const s=new IntersectionObserver(i=>{i.forEach(f=>{var d;const l=f.isIntersecting&&n.some(u=>f.intersectionRatio>=u);t.trackVisibility&&typeof f.isVisible>"u"&&(f.isVisible=l),(d=a.get(f.target))==null||d.forEach(u=>{u(l,f)})})},t);n=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),e={id:r,observer:s,elements:a},ut.set(r,e)}return e}function Jt(t,r,e={},a=Kr){if(typeof window.IntersectionObserver>"u"&&a!==void 0){const d=t.getBoundingClientRect();return r(a,{isIntersecting:a,target:t,intersectionRatio:typeof e.threshold=="number"?e.threshold:0,time:0,boundingClientRect:d,intersectionRect:d,rootBounds:d}),()=>{}}const{id:n,observer:s,elements:i}=te(e),f=i.get(t)||[];return i.has(t)||i.set(t,f),f.push(r),s.observe(t),function(){f.splice(f.indexOf(r),1),f.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),ut.delete(n))}}function re(t){return typeof t.children!="function"}var Pt=class extends R.Component{constructor(t){super(t),G(this,"node",null),G(this,"_unobserveCb",null),G(this,"handleNode",r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()}),G(this,"handleChange",(r,e)=>{r&&this.props.triggerOnce&&this.unobserve(),re(this.props)||this.setState({inView:r,entry:e}),this.props.onChange&&this.props.onChange(r,e)}),this.state={inView:!!t.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n,fallbackInView:s}=this.props;this._unobserveCb=Jt(this.node,this.handleChange,{threshold:t,root:r,rootMargin:e,trackVisibility:a,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if(typeof t=="function"){const{inView:S,entry:y}=this.state;return t({inView:S,entry:y,ref:this.handleNode})}const{as:r,triggerOnce:e,threshold:a,root:n,rootMargin:s,onChange:i,skip:f,trackVisibility:d,delay:l,initialInView:u,fallbackInView:p,...C}=this.props;return R.createElement(r||"div",{ref:this.handleNode,...C},t)}};function Kt({threshold:t,delay:r,trackVisibility:e,rootMargin:a,root:n,triggerOnce:s,skip:i,initialInView:f,fallbackInView:d,onChange:l}={}){var u;const[p,C]=R.useState(null),S=R.useRef(l),[y,m]=R.useState({inView:!!f,entry:void 0});S.current=l,R.useEffect(()=>{if(i||!p)return;let g;return g=Jt(p,(N,c)=>{m({inView:N,entry:c}),S.current&&S.current(N,c),c.isIntersecting&&s&&g&&(g(),g=void 0)},{root:n,rootMargin:a,threshold:t,trackVisibility:e,delay:r},d),()=>{g&&g()}},[Array.isArray(t)?t.toString():t,p,n,a,s,i,e,d,r]);const O=(u=y.entry)==null?void 0:u.target,b=R.useRef(void 0);!p&&O&&!s&&!i&&b.current!==O&&(b.current=O,m({inView:!!f,entry:void 0}));const h=[C,y.inView,y.entry];return h.ref=h[0],h.inView=h[1],h.entry=h[2],h}o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;const ee=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,ae=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ne=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,oe=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,vt=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ie=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ce=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fe=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,de=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,le=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ue=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,me=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function pe({duration:t=1e3,delay:r=0,timingFunction:e="ease",keyframes:a=vt,iterationCount:n=1}){return Ht`
    animation-duration: ${t}ms;
    animation-timing-function: ${e};
    animation-delay: ${r}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function ye(t){return t==null}function he(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Zt(t,r){return e=>e?t():r()}function W(t){return Zt(t,()=>null)}function mt(t){return W(()=>({opacity:0}))(t)}const Qt=t=>{const{cascade:r=!1,damping:e=.5,delay:a=0,duration:n=1e3,fraction:s=0,keyframes:i=vt,triggerOnce:f=!1,className:d,style:l,childClassName:u,childStyle:p,children:C,onVisibilityChange:S}=t,y=R.useMemo(()=>pe({keyframes:i,duration:n}),[n,i]);return ye(C)?null:he(C)?A(be,{...t,animationStyles:y,children:String(C)}):rr.isFragment(C)?A(tr,{...t,animationStyles:y}):A(Wr,{children:R.Children.map(C,(m,O)=>{if(!R.isValidElement(m))return null;const b=a+(r?O*n*e:0);switch(m.type){case"ol":case"ul":return A(it,{children:({cx:h})=>A(m.type,{...m.props,className:h(d,m.props.className),style:Object.assign({},l,m.props.style),children:A(Qt,{...t,children:m.props.children})})});case"li":return A(Pt,{threshold:s,triggerOnce:f,onChange:S,children:({inView:h,ref:g})=>A(it,{children:({cx:N})=>A(m.type,{...m.props,ref:g,className:N(u,m.props.className),css:W(()=>y)(h),style:Object.assign({},p,m.props.style,mt(!h),{animationDelay:b+"ms"})})})});default:return A(Pt,{threshold:s,triggerOnce:f,onChange:S,children:({inView:h,ref:g})=>A("div",{ref:g,className:d,css:W(()=>y)(h),style:Object.assign({},l,mt(!h),{animationDelay:b+"ms"}),children:A(it,{children:({cx:N})=>A(m.type,{...m.props,className:N(u,m.props.className),style:Object.assign({},p,m.props.style)})})})})}})})},ge={display:"inline-block",whiteSpace:"pre"},be=t=>{const{animationStyles:r,cascade:e=!1,damping:a=.5,delay:n=0,duration:s=1e3,fraction:i=0,triggerOnce:f=!1,className:d,style:l,children:u,onVisibilityChange:p}=t,{ref:C,inView:S}=Kt({triggerOnce:f,threshold:i,onChange:p});return Zt(()=>A("div",{ref:C,className:d,style:Object.assign({},l,ge),children:u.split("").map((y,m)=>A("span",{css:W(()=>r)(S),style:{animationDelay:n+m*s*a+"ms"},children:y},m))}),()=>A(tr,{...t,children:u}))(e)},tr=t=>{const{animationStyles:r,fraction:e=0,triggerOnce:a=!1,className:n,style:s,children:i,onVisibilityChange:f}=t,{ref:d,inView:l}=Kt({triggerOnce:a,threshold:e,onChange:f});return A("div",{ref:d,className:n,css:W(()=>r)(l),style:Object.assign({},s,mt(!l)),children:i})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;const ve=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,xe=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,we=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Se=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,$e=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Ce=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Oe=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Re=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Ee=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Ie=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Ae=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Ne=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Te=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function Pe(t,r,e){switch(e){case"bottom-left":return r?xe:ae;case"bottom-right":return r?we:ne;case"down":return t?r?$e:oe:r?Se:se;case"left":return t?r?Oe:ie:r?Ce:vt;case"right":return t?r?Ee:fe:r?Re:ce;case"top-left":return r?Ie:de;case"top-right":return r?Ae:le;case"up":return t?r?Te:me:r?Ne:ue;default:return r?ve:ee}}const Me=t=>{const{big:r=!1,direction:e,reverse:a=!1,...n}=t,s=R.useMemo(()=>Pe(r,a,e),[r,e,a]);return A(Qt,{keyframes:s,...n})};o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;export{Me as F,qt as T,Ht as c,Ft as g,Vt as i,o as k,$r as m,gt as r,bt as s,Dt as u,Wt as w};
