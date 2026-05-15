import{$ as Pe,$a as D,$b as ei,A as Zi,Aa as ln,Ab as w,B as st,Ba as Ki,Bb as me,C as So,Ca as cn,Cb as P,D as ko,Da as dn,Db as Ke,E as an,Ea as Ns,Eb as nt,F as St,Fa as Ls,Fb as U,G as Ao,Ga as js,Gb as H,H as Io,Ha as Bs,Hb as Zs,I as Ms,Ia as Vs,Ib as Ys,J as To,Ja as zs,Jb as Bo,K as Ss,Ka as Us,Kb as mn,L as kt,La as Ve,Lb as It,M as je,Ma as vt,Mb as j,N as ce,Na as Hs,Nb as Tt,O as Se,Oa as u,Ob as v,P as O,Pa as un,Pb as I,Q as qn,Qa as $s,Qb as Rt,R as zt,Ra as Qi,Rb as pe,S as p,Sa as Fo,Sb as Xi,T as V,Ta as bt,Tb as Vo,U as ks,Ua as ze,Ub as Ks,V as b,Va as ve,Vb as Q,W as T,Wa as K,Wb as xe,X as l,Xa as Po,Xb as Qs,Y as Ut,Ya as Kn,Yb as Ji,Z as As,Za as Gs,Zb as Xs,_ as Be,_a as No,_b as hn,a as g,aa as Ze,ab as z,ac as Js,b as ee,ba as Ye,bb as A,bc as Ne,ca as ke,cb as ae,cc as el,d as pt,da as de,db as Qn,dc as be,e as ws,ea as F,eb as Lo,ec as tl,f as qe,fa as lt,fb as jo,fc as nl,g as L,ga as Is,gb as Xn,gc as il,h as Oe,ha as oe,hb as Ws,i as Fe,ia as N,ib as $t,j as Me,ja as Ht,jb as q,k,ka as Zn,kb as y,l as $i,la as Ts,lb as x,m as Gi,ma as C,mb as qs,n as Cs,na as Rs,nb as et,o as W,oa as Ro,ob as se,p as Ds,pa as sn,pb as le,q as gt,qa as Ae,qb as te,r as Eo,ra as De,rb as m,s as Es,sa as Oo,sb as h,t as Wi,ta as B,tb as Z,u as qi,ua as Os,ub as S,v as nn,va as Fs,vb as E,w as re,wa as Yn,wb as ie,x as Mo,xa as Ps,xb as tt,y as rn,ya as At,yb as Jn,z as on,za as Yi,zb as J}from"./chunk-VIYGDGTQ.js";var rl=null;function Qe(){return rl}function zo(t){rl??=t}var ti=class{},fn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l(ol),providedIn:"platform"})}return t})();var ol=(()=>{class t extends fn{_location;_history;_doc=l(F);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return Qe().getBaseHref(this._doc)}onPopState(e){let n=Qe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=Qe().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function ll(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function al(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Ot(t){return t&&t[0]!=="?"?`?${t}`:t}var pn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l(xu),providedIn:"root"})}return t})(),yu=new b(""),xu=(()=>{class t extends pn{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??l(F).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return ll(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ot(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,o){let a=this.prepareExternalUrl(r+Ot(o));this._platformLocation.pushState(e,n,a)}replaceState(e,n,r,o){let a=this.prepareExternalUrl(r+Ot(o));this._platformLocation.replaceState(e,n,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(T(fn),T(yu,8))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var gn=(()=>{class t{_subject=new L;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Du(al(sl(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Ot(n))}normalize(e){return t.stripTrailingSlash(Cu(this._basePath,sl(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ot(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ot(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=Ot;static joinWithSlash=ll;static stripTrailingSlash=al;static \u0275fac=function(n){return new(n||t)(T(pn))};static \u0275prov=p({token:t,factory:()=>wu(),providedIn:"root"})}return t})();function wu(){return new gn(T(pn))}function Cu(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function sl(t){return t.replace(/\/index.html$/,"")}function Du(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Uo=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;injector=l(de);constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this._getInjector()})}}_getInjector(){return this.ngTemplateOutletInjector==="outlet"?this.injector:this.ngTemplateOutletInjector??void 0}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(K(Kn))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Ae]})}return t})();function ni(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,o]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(o)}return null}var Gt=class{};var Ho="browser";function vn(t){return t===Ho}var ii=class{_doc;constructor(i){this._doc=i}manager},er=(()=>{class t extends ii{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,r,o){return e.addEventListener(n,r,o),()=>this.removeEventListener(e,n,r,o)}removeEventListener(e,n,r,o){return e.removeEventListener(n,r,o)}static \u0275fac=function(n){return new(n||t)(T(F))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),ir=new b(""),qo=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(a=>{a.manager=this});let r=e.filter(a=>!(a instanceof er));this._plugins=r.slice().reverse();let o=e.find(a=>a instanceof er);o&&this._plugins.push(o)}addEventListener(e,n,r,o){return this._findPluginFor(n).addEventListener(e,n,r,o)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(o=>o.supports(e)),!n)throw new O(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(T(ir),T(N))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),$o="ng-app-id";function cl(t){for(let i of t)i.remove()}function dl(t,i){let e=i.createElement("style");return e.textContent=t,e}function Iu(t,i,e,n){let r=t.head?.querySelectorAll(`style[${$o}="${i}"],link[${$o}="${i}"]`);if(r)for(let o of r)o.removeAttribute($o),o instanceof HTMLLinkElement?n.set(o.href.slice(o.href.lastIndexOf("/")+1),{usage:0,elements:[o]}):o.textContent&&e.set(o.textContent,{usage:0,elements:[o]})}function Wo(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var Zo=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,r,o={}){this.doc=e,this.appId=n,this.nonce=r,Iu(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let r of e)this.addUsage(r,this.inline,dl);n?.forEach(r=>this.addUsage(r,this.external,Wo))}removeStyles(e,n){for(let r of e)this.removeUsage(r,this.inline);n?.forEach(r=>this.removeUsage(r,this.external))}addUsage(e,n,r){let o=n.get(e);o?o.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(a=>this.addElement(a,r(e,this.doc)))})}removeUsage(e,n){let r=n.get(e);r&&(r.usage--,r.usage<=0&&(cl(r.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])cl(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:r}]of this.inline)r.push(this.addElement(e,dl(n,this.doc)));for(let[n,{elements:r}]of this.external)r.push(this.addElement(e,Wo(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(T(F),T(Yn),T(ln,8),T(At))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),Go={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Yo=/%COMP%/g;var ml="%COMP%",Tu=`_nghost-${ml}`,Ru=`_ngcontent-${ml}`,Ou=!0,Fu=new b("",{factory:()=>Ou});function Pu(t){return Ru.replace(Yo,t)}function Nu(t){return Tu.replace(Yo,t)}function hl(t,i){return i.map(e=>e.replace(Yo,t))}var ai=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;constructor(e,n,r,o,a,s,c=null,d=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=r,this.removeStylesOnCompDestroy=o,this.doc=a,this.ngZone=s,this.nonce=c,this.tracingService=d,this.defaultRenderer=new ri(e,a,s,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let r=this.getOrCreateRenderer(e,n);return r instanceof nr?r.applyToHost(e):r instanceof oi&&r.applyStyles(),r}getOrCreateRenderer(e,n){let r=this.rendererByCompId,o=r.get(n.id);if(!o){let a=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,f=this.removeStylesOnCompDestroy,_=this.tracingService;switch(n.encapsulation){case Ki.Emulated:o=new nr(c,d,n,this.appId,f,a,s,_);break;case Ki.ShadowDom:return new tr(c,e,n,a,s,this.nonce,_,d);case Ki.ExperimentalIsolatedShadowDom:return new tr(c,e,n,a,s,this.nonce,_);default:o=new oi(c,d,n,f,a,s,_);break}r.set(n.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(T(qo),T(Zo),T(Yn),T(Fu),T(F),T(N),T(ln),T(Qi,8))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),ri=class{eventManager;doc;ngZone;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(Go[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(ul(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(ul(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new O(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,r){if(r){e=r+":"+e;let o=Go[r];o?i.setAttributeNS(o,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let r=Go[n];r?i.removeAttributeNS(r,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,r){r&(un.DashCase|un.Important)?i.style.setProperty(e,n,r&un.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&un.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,r){if(typeof i=="string"&&(i=Qe().getGlobalEventTarget(this.doc,i),!i))throw new O(5102,!1);let o=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(o=this.tracingService.wrapEventListener(i,e,o)),this.eventManager.addEventListener(i,e,o,r)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function ul(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var tr=class extends ri{hostEl;sharedStylesHost;shadowRoot;constructor(i,e,n,r,o,a,s,c){super(i,r,o,s),this.hostEl=e,this.sharedStylesHost=c,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost&&this.sharedStylesHost.addHost(this.shadowRoot);let d=n.styles;d=hl(n.id,d);for(let _ of d){let $=document.createElement("style");a&&$.setAttribute("nonce",a),$.textContent=_,this.shadowRoot.appendChild($)}let f=n.getExternalStyles?.();if(f)for(let _ of f){let $=Wo(_,r);a&&$.setAttribute("nonce",a),this.shadowRoot.appendChild($)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost&&this.sharedStylesHost.removeHost(this.shadowRoot)}},oi=class extends ri{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,r,o,a,s,c){super(i,o,a,s),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=r;let d=n.styles;this.styles=c?hl(c,d):d,this.styleUrls=n.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&$s.size===0&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},nr=class extends oi{contentAttr;hostAttr;constructor(i,e,n,r,o,a,s,c){let d=r+"-"+n.id;super(i,e,n,o,a,s,c,d),this.contentAttr=Pu(d),this.hostAttr=Nu(d)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var rr=class t extends ti{supportsDOMEvents=!0;static makeCurrent(){zo(new t)}onAndCancel(i,e,n,r){return i.addEventListener(e,n,r),()=>{i.removeEventListener(e,n,r)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=ju();return e==null?null:Bu(e)}resetBaseElement(){si=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return ni(document.cookie,i)}},si=null;function ju(){return si=si||document.head.querySelector("base"),si?si.getAttribute("href"):null}function Bu(t){return new URL(t,document.baseURI).pathname}var Vu=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),fl=["alt","control","meta","shift"],zu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Uu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},pl=(()=>{class t extends ii{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,r,o){let a=t.parseEventName(n),s=t.eventCallback(a.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Qe().onAndCancel(e,a.domEventName,s,o))}static parseEventName(e){let n=e.toLowerCase().split("."),r=n.shift();if(n.length===0||!(r==="keydown"||r==="keyup"))return null;let o=t._normalizeKey(n.pop()),a="",s=n.indexOf("code");if(s>-1&&(n.splice(s,1),a="code."),fl.forEach(d=>{let f=n.indexOf(d);f>-1&&(n.splice(f,1),a+=d+".")}),a+=o,n.length!=0||o.length===0)return null;let c={};return c.domEventName=r,c.fullKey=a,c}static matchEventFullKeyCode(e,n){let r=zu[e.key]||e.key,o="";return n.indexOf("code.")>-1&&(r=e.code,o="code."),r==null||!r?!1:(r=r.toLowerCase(),r===" "?r="space":r==="."&&(r="dot"),fl.forEach(a=>{if(a!==r){let s=Uu[a];s(e)&&(o+=a+".")}}),o+=r,o===n)}static eventCallback(e,n,r){return o=>{t.matchEventFullKeyCode(o,e)&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(T(F))};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})();async function Ko(t,i,e){let n=g({rootComponent:t},Hu(i,e));return el(n)}function Hu(t,i){return{platformRef:i?.platformRef,appProviders:[...Zu,...t?.providers??[]],platformProviders:qu}}function $u(){rr.makeCurrent()}function Gu(){return new Ht}function Wu(){return Fs(document),document}var qu=[{provide:At,useValue:Ho},{provide:Ps,useValue:$u,multi:!0},{provide:F,useFactory:Wu}];var Zu=[{provide:As,useValue:"root"},{provide:Ht,useFactory:Gu},{provide:ir,useClass:er,multi:!0},{provide:ir,useClass:pl,multi:!0},ai,Zo,qo,{provide:ze,useExisting:ai},{provide:Gt,useClass:Vu},[]];var Ft=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let r=e.slice(0,n),o=e.slice(n+1).trim();this.addHeaderEntry(r,o)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let r=(i.op==="a"?this.headers.get(e):void 0)||[];r.push(...n),this.headers.set(e,r);break;case"d":let o=i.value;if(!o)this.headers.delete(e),this.normalizedNames.delete(e);else{let a=this.headers.get(e);if(!a)return;a=a.filter(s=>o.indexOf(s)===-1),a.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,a)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(o=>o.toString()),r=i.toLowerCase();this.headers.set(r,n),this.maybeSetNormalizedName(i,r)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var ar=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}},sr=class{encodeKey(i){return gl(i)}encodeValue(i){return gl(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Yu(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(r=>{let o=r.indexOf("="),[a,s]=o==-1?[i.decodeKey(r),""]:[i.decodeKey(r.slice(0,o)),i.decodeValue(r.slice(o+1))],c=e.get(a)||[];c.push(s),e.set(a,c)}),e}var Ku=/%(\d[a-f0-9])/gi,Qu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function gl(t){return encodeURIComponent(t).replace(Ku,(i,e)=>Qu[e]??i)}function or(t){return`${t}`}var _t=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new sr,i.fromString){if(i.fromObject)throw new O(2805,!1);this.map=Yu(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],r=Array.isArray(n)?n.map(or):[or(n)];this.map.set(e,r)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let r=i[n];Array.isArray(r)?r.forEach(o=>{e.push({param:n,value:o,op:"a"})}):e.push({param:n,value:r,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(or(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],r=n.indexOf(or(i.value));r!==-1&&n.splice(r,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};function Xu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function vl(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function bl(t){return typeof Blob<"u"&&t instanceof Blob}function _l(t){return typeof FormData<"u"&&t instanceof FormData}function Ju(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var yl="Content-Type",xl="Accept",wl="text/plain",Cl="application/json",em=`${Cl}, ${wl}, */*`,bn=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;referrer;integrity;referrerPolicy;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,r){this.url=e,this.method=i.toUpperCase();let o;if(Xu(this.method)||r?(this.body=n!==void 0?n:null,o=r):o=n,o){if(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,this.keepalive=!!o.keepalive,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),o.priority&&(this.priority=o.priority),o.cache&&(this.cache=o.cache),o.credentials&&(this.credentials=o.credentials),typeof o.timeout=="number"){if(o.timeout<1||!Number.isInteger(o.timeout))throw new O(2822,"");this.timeout=o.timeout}o.mode&&(this.mode=o.mode),o.redirect&&(this.redirect=o.redirect),o.integrity&&(this.integrity=o.integrity),o.referrer&&(this.referrer=o.referrer),o.referrerPolicy&&(this.referrerPolicy=o.referrerPolicy),this.transferCache=o.transferCache}if(this.headers??=new Ft,this.context??=new ar,!this.params)this.params=new _t,this.urlWithParams=e;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=e;else{let s=e.indexOf("?"),c=s===-1?"?":s<e.length-1?"&":"";this.urlWithParams=e+c+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||vl(this.body)||bl(this.body)||_l(this.body)||Ju(this.body)?this.body:this.body instanceof _t?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||_l(this.body)?null:bl(this.body)?this.body.type||null:vl(this.body)?null:typeof this.body=="string"?wl:this.body instanceof _t?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?Cl:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,r=i.responseType||this.responseType,o=i.keepalive??this.keepalive,a=i.priority||this.priority,s=i.cache||this.cache,c=i.mode||this.mode,d=i.redirect||this.redirect,f=i.credentials||this.credentials,_=i.referrer||this.referrer,$=i.integrity||this.integrity,Ce=i.referrerPolicy||this.referrerPolicy,he=i.transferCache??this.transferCache,ue=i.timeout??this.timeout,G=i.body!==void 0?i.body:this.body,Y=i.withCredentials??this.withCredentials,fe=i.reportProgress??this.reportProgress,Re=i.headers||this.headers,ye=i.params||this.params,Gn=i.context??this.context;return i.setHeaders!==void 0&&(Re=Object.keys(i.setHeaders).reduce((Wn,Vt)=>Wn.set(Vt,i.setHeaders[Vt]),Re)),i.setParams&&(ye=Object.keys(i.setParams).reduce((Wn,Vt)=>Wn.set(Vt,i.setParams[Vt]),ye)),new t(e,n,G,{params:ye,headers:Re,context:Gn,reportProgress:fe,responseType:r,withCredentials:Y,transferCache:he,keepalive:o,cache:s,priority:a,timeout:ue,mode:c,redirect:d,credentials:f,referrer:_,integrity:$,referrerPolicy:Ce})}},Wt=(function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t})(Wt||{}),yn=class{headers;status;statusText;url;ok;type;redirected;responseType;constructor(i,e=200,n="OK"){this.headers=i.headers||new Ft,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.redirected=i.redirected,this.responseType=i.responseType,this.ok=this.status>=200&&this.status<300}},lr=class t extends yn{constructor(i={}){super(i)}type=Wt.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},li=class t extends yn{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Wt.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0,redirected:i.redirected??this.redirected,responseType:i.responseType??this.responseType})}},_n=class extends yn{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},tm=200,nm=204;var im=new b("");var rm=/^\)\]\}',?\n/;var Xo=(()=>{class t{xhrFactory;tracingService=l(Qi,{optional:!0});constructor(e){this.xhrFactory=e}maybePropagateTrace(e){return this.tracingService?.propagate?this.tracingService.propagate(e):e}handle(e){if(e.method==="JSONP")throw new O(-2800,!1);let n=this.xhrFactory;return k(null).pipe(je(()=>new qe(o=>{let a=n.build();if(a.open(e.method,e.urlWithParams),e.withCredentials&&(a.withCredentials=!0),e.headers.forEach((G,Y)=>a.setRequestHeader(G,Y.join(","))),e.headers.has(xl)||a.setRequestHeader(xl,em),!e.headers.has(yl)){let G=e.detectContentTypeHeader();G!==null&&a.setRequestHeader(yl,G)}if(e.timeout&&(a.timeout=e.timeout),e.responseType){let G=e.responseType.toLowerCase();a.responseType=G!=="json"?G:"text"}let s=e.serializeBody(),c=null,d=()=>{if(c!==null)return c;let G=a.statusText||"OK",Y=new Ft(a.getAllResponseHeaders()),fe=a.responseURL||e.url;return c=new lr({headers:Y,status:a.status,statusText:G,url:fe}),c},f=this.maybePropagateTrace(()=>{let{headers:G,status:Y,statusText:fe,url:Re}=d(),ye=null;Y!==nm&&(ye=typeof a.response>"u"?a.responseText:a.response),Y===0&&(Y=ye?tm:0);let Gn=Y>=200&&Y<300;if(e.responseType==="json"&&typeof ye=="string"){let Wn=ye;ye=ye.replace(rm,"");try{ye=ye!==""?JSON.parse(ye):null}catch(Vt){ye=Wn,Gn&&(Gn=!1,ye={error:Vt,text:ye})}}Gn?(o.next(new li({body:ye,headers:G,status:Y,statusText:fe,url:Re||void 0})),o.complete()):o.error(new _n({error:ye,headers:G,status:Y,statusText:fe,url:Re||void 0}))}),_=this.maybePropagateTrace(G=>{let{url:Y}=d(),fe=new _n({error:G,status:a.status||0,statusText:a.statusText||"Unknown Error",url:Y||void 0});o.error(fe)}),$=_;e.timeout&&($=this.maybePropagateTrace(G=>{let{url:Y}=d(),fe=new _n({error:new DOMException("Request timed out","TimeoutError"),status:a.status||0,statusText:a.statusText||"Request timeout",url:Y||void 0});o.error(fe)}));let Ce=!1,he=this.maybePropagateTrace(G=>{Ce||(o.next(d()),Ce=!0);let Y={type:Wt.DownloadProgress,loaded:G.loaded};G.lengthComputable&&(Y.total=G.total),e.responseType==="text"&&a.responseText&&(Y.partialText=a.responseText),o.next(Y)}),ue=this.maybePropagateTrace(G=>{let Y={type:Wt.UploadProgress,loaded:G.loaded};G.lengthComputable&&(Y.total=G.total),o.next(Y)});return a.addEventListener("load",f),a.addEventListener("error",_),a.addEventListener("timeout",$),a.addEventListener("abort",_),e.reportProgress&&(a.addEventListener("progress",he),s!==null&&a.upload&&a.upload.addEventListener("progress",ue)),a.send(s),o.next({type:Wt.Sent}),()=>{a.removeEventListener("error",_),a.removeEventListener("abort",_),a.removeEventListener("load",f),a.removeEventListener("timeout",$),e.reportProgress&&(a.removeEventListener("progress",he),s!==null&&a.upload&&a.upload.removeEventListener("progress",ue)),a.readyState!==a.DONE&&a.abort()}})))}static \u0275fac=function(n){return new(n||t)(T(Gt))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function om(t,i){return i(t)}function am(t,i,e){return(n,r)=>Pe(e,()=>i(n,o=>t(o,r)))}var Dl=new b("",{factory:()=>[]}),El=new b(""),Ml=new b("",{factory:()=>!0});var Jo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=T(Xo),r},providedIn:"root"})}return t})();var cr=(()=>{class t{backend;injector;chain=null;pendingTasks=l(Ro);contributeToStability=l(Ml);constructor(e,n){this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(Dl),...this.injector.get(El,[])]));this.chain=n.reduceRight((r,o)=>am(r,o,this.injector),om)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,r=>this.backend.handle(r)).pipe(an(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(T(Jo),T(Be))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ea=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=T(cr),r},providedIn:"root"})}return t})();function Qo(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,credentials:t.credentials,transferCache:t.transferCache,timeout:t.timeout,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect,integrity:t.integrity,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var xn=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,r={}){let o;if(e instanceof bn)o=e;else{let c;r.headers instanceof Ft?c=r.headers:c=new Ft(r.headers);let d;r.params&&(r.params instanceof _t?d=r.params:d=new _t({fromObject:r.params})),o=new bn(e,n,r.body!==void 0?r.body:null,{headers:c,context:r.context,params:d,reportProgress:r.reportProgress,responseType:r.responseType||"json",withCredentials:r.withCredentials,transferCache:r.transferCache,keepalive:r.keepalive,priority:r.priority,cache:r.cache,mode:r.mode,redirect:r.redirect,credentials:r.credentials,referrer:r.referrer,referrerPolicy:r.referrerPolicy,integrity:r.integrity,timeout:r.timeout})}let a=k(o).pipe(on(c=>this.handler.handle(c)));if(e instanceof bn||r.observe==="events")return a;let s=a.pipe(re(c=>c instanceof li));switch(r.observe||"body"){case"body":switch(o.responseType){case"arraybuffer":return s.pipe(W(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new O(2806,!1);return c.body}));case"blob":return s.pipe(W(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new O(2807,!1);return c.body}));case"text":return s.pipe(W(c=>{if(c.body!==null&&typeof c.body!="string")throw new O(2808,!1);return c.body}));default:return s.pipe(W(c=>c.body))}case"response":return s;default:throw new O(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new _t().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,r={}){return this.request("PATCH",e,Qo(r,n))}post(e,n,r={}){return this.request("POST",e,Qo(r,n))}put(e,n,r={}){return this.request("PUT",e,Qo(r,n))}static \u0275fac=function(n){return new(n||t)(T(ea))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var sm=new b("",{factory:()=>!0}),lm="XSRF-TOKEN",cm=new b("",{factory:()=>lm}),dm="X-XSRF-TOKEN",um=new b("",{factory:()=>dm}),mm=(()=>{class t{cookieName=l(cm);doc=l(F);lastCookieString="";lastToken=null;parseCount=0;getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=ni(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sl=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=T(mm),r},providedIn:"root"})}return t})();function hm(t,i){if(!l(sm)||t.method==="GET"||t.method==="HEAD")return i(t);try{let r=l(fn).href,{origin:o}=new URL(r),{origin:a}=new URL(t.url,o);if(o!==a)return i(t)}catch{return i(t)}let e=l(Sl).getToken(),n=l(um);return e!=null&&!t.headers.has(n)&&(t=t.clone({headers:t.headers.set(n,e)})),i(t)}function ta(...t){let i=[xn,cr,{provide:ea,useExisting:cr},{provide:Jo,useFactory:()=>l(im,{optional:!0})??l(Xo)},{provide:Dl,useValue:hm,multi:!0}];for(let e of t)i.push(...e.\u0275providers);return Ut(i)}var kl=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(T(F))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var na=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:function(n){let r=null;return n?r=new(n||t):r=T(bm),r},providedIn:"root"})}return t})(),bm=(()=>{class t extends na{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case Ve.NONE:return n;case Ve.HTML:return dn(n,"HTML")?cn(n):Us(this._doc,String(n)).toString();case Ve.STYLE:return dn(n,"Style")?cn(n):n;case Ve.SCRIPT:if(dn(n,"Script"))return cn(n);throw new O(5200,!1);case Ve.URL:return dn(n,"URL")?cn(n):zs(String(n));case Ve.RESOURCE_URL:if(dn(n,"ResourceURL"))return cn(n);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return Ns(e)}bypassSecurityTrustStyle(e){return Ls(e)}bypassSecurityTrustScript(e){return js(e)}bypassSecurityTrustUrl(e){return Bs(e)}bypassSecurityTrustResourceUrl(e){return Vs(e)}static \u0275fac=function(n){return new(n||t)(T(F))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var R="primary",Ci=Symbol("RouteTitle"),sa=class{params;constructor(i){this.params=i||{}}has(i){return Object.prototype.hasOwnProperty.call(this.params,i)}get(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e[0]:e}return null}getAll(i){if(this.has(i)){let e=this.params[i];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function Zt(t){return new sa(t)}function ia(t,i,e){for(let n=0;n<t.length;n++){let r=t[n],o=i[n];if(r[0]===":")e[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function Nl(t,i,e){let n=e.path.split("/"),r=n.indexOf("**");if(r===-1){if(n.length>t.length||e.pathMatch==="full"&&(i.hasChildren()||n.length<t.length))return null;let c={},d=t.slice(0,n.length);return ia(n,d,c)?{consumed:d,posParams:c}:null}if(r!==n.lastIndexOf("**"))return null;let o=n.slice(0,r),a=n.slice(r+1);if(o.length+a.length>t.length||e.pathMatch==="full"&&i.hasChildren()&&e.path!=="**")return null;let s={};return!ia(o,t.slice(0,o.length),s)||!ia(a,t.slice(t.length-a.length),s)?null:{consumed:t,posParams:s}}function pr(t){return new Promise((i,e)=>{t.pipe(St()).subscribe({next:n=>i(n),error:n=>e(n)})})}function _m(t,i){if(t.length!==i.length)return!1;for(let e=0;e<t.length;++e)if(!ct(t[e],i[e]))return!1;return!0}function ct(t,i){let e=t?la(t):void 0,n=i?la(i):void 0;if(!e||!n||e.length!=n.length)return!1;let r;for(let o=0;o<e.length;o++)if(r=e[o],!Ll(t[r],i[r]))return!1;return!0}function la(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function Ll(t,i){if(Array.isArray(t)&&Array.isArray(i)){if(t.length!==i.length)return!1;let e=[...t].sort(),n=[...i].sort();return e.every((r,o)=>n[o]===r)}else return t===i}function ym(t){return t.length>0?t[t.length-1]:null}function Qt(t){return Gi(t)?t:Xn(t)?Me(Promise.resolve(t)):k(t)}function jl(t){return Gi(t)?pr(t):Promise.resolve(t)}var xm={exact:Vl,subset:zl},Bl={exact:wm,subset:Cm,ignored:()=>!0},wa={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},fi={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function Ca(t,i,e){let n=t instanceof Ie?t:i.parseUrl(t);return xe(()=>ca(i.lastSuccessfulNavigation()?.finalUrl??new Ie,n,g(g({},fi),e)))}function ca(t,i,e){return xm[e.paths](t.root,i.root,e.matrixParams)&&Bl[e.queryParams](t.queryParams,i.queryParams)&&!(e.fragment==="exact"&&t.fragment!==i.fragment)}function wm(t,i){return ct(t,i)}function Vl(t,i,e){if(!qt(t.segments,i.segments)||!mr(t.segments,i.segments,e)||t.numberOfChildren!==i.numberOfChildren)return!1;for(let n in i.children)if(!t.children[n]||!Vl(t.children[n],i.children[n],e))return!1;return!0}function Cm(t,i){return Object.keys(i).length<=Object.keys(t).length&&Object.keys(i).every(e=>Ll(t[e],i[e]))}function zl(t,i,e){return Ul(t,i,i.segments,e)}function Ul(t,i,e,n){if(t.segments.length>e.length){let r=t.segments.slice(0,e.length);return!(!qt(r,e)||i.hasChildren()||!mr(r,e,n))}else if(t.segments.length===e.length){if(!qt(t.segments,e)||!mr(t.segments,e,n))return!1;for(let r in i.children)if(!t.children[r]||!zl(t.children[r],i.children[r],n))return!1;return!0}else{let r=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!qt(t.segments,r)||!mr(t.segments,r,n)||!t.children[R]?!1:Ul(t.children[R],i,o,n)}}function mr(t,i,e){return i.every((n,r)=>Bl[e](t[r].parameters,n.parameters))}var Ie=class{root;queryParams;fragment;_queryParamMap;constructor(i=new X([],{}),e={},n=null){this.root=i,this.queryParams=e,this.fragment=n}get queryParamMap(){return this._queryParamMap??=Zt(this.queryParams),this._queryParamMap}toString(){return Mm.serialize(this)}},X=class{segments;children;parent=null;constructor(i,e){this.segments=i,this.children=e,Object.values(e).forEach(n=>n.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return hr(this)}},Pt=class{path;parameters;_parameterMap;constructor(i,e){this.path=i,this.parameters=e}get parameterMap(){return this._parameterMap??=Zt(this.parameters),this._parameterMap}toString(){return $l(this)}};function Dm(t,i){return qt(t,i)&&t.every((e,n)=>ct(e.parameters,i[n].parameters))}function qt(t,i){return t.length!==i.length?!1:t.every((e,n)=>e.path===i[n].path)}function Em(t,i){let e=[];return Object.entries(t.children).forEach(([n,r])=>{n===R&&(e=e.concat(i(r,n)))}),Object.entries(t.children).forEach(([n,r])=>{n!==R&&(e=e.concat(i(r,n)))}),e}var In=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>new Nt,providedIn:"root"})}return t})(),Nt=class{parse(i){let e=new ua(i);return new Ie(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(i){let e=`/${ci(i.root,!0)}`,n=Am(i.queryParams),r=typeof i.fragment=="string"?`#${Sm(i.fragment)}`:"";return`${e}${n}${r}`}},Mm=new Nt;function hr(t){return t.segments.map(i=>$l(i)).join("/")}function ci(t,i){if(!t.hasChildren())return hr(t);if(i){let e=t.children[R]?ci(t.children[R],!1):"",n=[];return Object.entries(t.children).forEach(([r,o])=>{r!==R&&n.push(`${r}:${ci(o,!1)}`)}),n.length>0?`${e}(${n.join("//")})`:e}else{let e=Em(t,(n,r)=>r===R?[ci(t.children[R],!1)]:[`${r}:${ci(n,!1)}`]);return Object.keys(t.children).length===1&&t.children[R]!=null?`${hr(t)}/${e[0]}`:`${hr(t)}/(${e.join("//")})`}}function Hl(t){return encodeURIComponent(t).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function dr(t){return Hl(t).replace(/%3B/gi,";")}function Sm(t){return encodeURI(t)}function da(t){return Hl(t).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function fr(t){return decodeURIComponent(t)}function Il(t){return fr(t.replace(/\+/g,"%20"))}function $l(t){return`${da(t.path)}${km(t.parameters)}`}function km(t){return Object.entries(t).map(([i,e])=>`;${da(i)}=${da(e)}`).join("")}function Am(t){let i=Object.entries(t).map(([e,n])=>Array.isArray(n)?n.map(r=>`${dr(e)}=${dr(r)}`).join("&"):`${dr(e)}=${dr(n)}`).filter(e=>e);return i.length?`?${i.join("&")}`:""}var Im=/^[^\/()?;#]+/;function ra(t){let i=t.match(Im);return i?i[0]:""}var Tm=/^[^\/()?;=#]+/;function Rm(t){let i=t.match(Tm);return i?i[0]:""}var Om=/^[^=?&#]+/;function Fm(t){let i=t.match(Om);return i?i[0]:""}var Pm=/^[^&#]+/;function Nm(t){let i=t.match(Pm);return i?i[0]:""}var ua=class{url;remaining;constructor(i){this.url=i,this.remaining=i}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new X([],{}):new X([],this.parseChildren())}parseQueryParams(){let i={};if(this.consumeOptional("?"))do this.parseQueryParam(i);while(this.consumeOptional("&"));return i}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(i=0){if(i>50)throw new O(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let n={};this.peekStartsWith("/(")&&(this.capture("/"),n=this.parseParens(!0,i));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,i)),(e.length>0||Object.keys(n).length>0)&&(r[R]=new X(e,n)),r}parseSegment(){let i=ra(this.remaining);if(i===""&&this.peekStartsWith(";"))throw new O(4009,!1);return this.capture(i),new Pt(fr(i),this.parseMatrixParams())}parseMatrixParams(){let i={};for(;this.consumeOptional(";");)this.parseParam(i);return i}parseParam(i){let e=Rm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let r=ra(this.remaining);r&&(n=r,this.capture(n))}i[fr(e)]=fr(n)}parseQueryParam(i){let e=Fm(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){let a=Nm(this.remaining);a&&(n=a,this.capture(n))}let r=Il(e),o=Il(n);if(i.hasOwnProperty(r)){let a=i[r];Array.isArray(a)||(a=[a],i[r]=a),a.push(o)}else i[r]=o}parseParens(i,e){let n={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=ra(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new O(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):i&&(a=R);let s=this.parseChildren(e+1);n[a??R]=Object.keys(s).length===1&&s[R]?s[R]:new X([],s),this.consumeOptional("//")}return n}peekStartsWith(i){return this.remaining.startsWith(i)}consumeOptional(i){return this.peekStartsWith(i)?(this.remaining=this.remaining.substring(i.length),!0):!1}capture(i){if(!this.consumeOptional(i))throw new O(4011,!1)}};function Gl(t){return t.segments.length>0?new X([],{[R]:t}):t}function Wl(t){let i={};for(let[n,r]of Object.entries(t.children)){let o=Wl(r);if(n===R&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))i[a]=s;else(o.segments.length>0||o.hasChildren())&&(i[n]=o)}let e=new X(t.segments,i);return Lm(e)}function Lm(t){if(t.numberOfChildren===1&&t.children[R]){let i=t.children[R];return new X(t.segments.concat(i.segments),i.children)}return t}function Lt(t){return t instanceof Ie}function ql(t,i,e=null,n=null,r=new Nt){let o=Zl(t);return Yl(o,i,e,n,r)}function Zl(t){let i;function e(o){let a={};for(let c of o.children){let d=e(c);a[c.outlet]=d}let s=new X(o.url,a);return o===t&&(i=s),s}let n=e(t.root),r=Gl(n);return i??r}function Yl(t,i,e,n,r){let o=t;for(;o.parent;)o=o.parent;if(i.length===0)return oa(o,o,o,e,n,r);let a=jm(i);if(a.toRoot())return oa(o,o,new X([],{}),e,n,r);let s=Bm(a,o,t),c=s.processChildren?ui(s.segmentGroup,s.index,a.commands):Ql(s.segmentGroup,s.index,a.commands);return oa(o,s.segmentGroup,c,e,n,r)}function gr(t){return typeof t=="object"&&t!=null&&!t.outlets&&!t.segmentPath}function pi(t){return typeof t=="object"&&t!=null&&t.outlets}function Tl(t,i,e){t||="\u0275";let n=new Ie;return n.queryParams={[t]:i},e.parse(e.serialize(n)).queryParams[t]}function oa(t,i,e,n,r,o){let a={};for(let[d,f]of Object.entries(n??{}))a[d]=Array.isArray(f)?f.map(_=>Tl(d,_,o)):Tl(d,f,o);let s;t===i?s=e:s=Kl(t,i,e);let c=Gl(Wl(s));return new Ie(c,a,r)}function Kl(t,i,e){let n={};return Object.entries(t.children).forEach(([r,o])=>{o===i?n[r]=e:n[r]=Kl(o,i,e)}),new X(t.segments,n)}var vr=class{isAbsolute;numberOfDoubleDots;commands;constructor(i,e,n){if(this.isAbsolute=i,this.numberOfDoubleDots=e,this.commands=n,i&&n.length>0&&gr(n[0]))throw new O(4003,!1);let r=n.find(pi);if(r&&r!==ym(n))throw new O(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function jm(t){if(typeof t[0]=="string"&&t.length===1&&t[0]==="/")return new vr(!0,0,t);let i=0,e=!1,n=t.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?e=!0:s===".."?i++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new vr(e,i,n)}var Cn=class{segmentGroup;processChildren;index;constructor(i,e,n){this.segmentGroup=i,this.processChildren=e,this.index=n}};function Bm(t,i,e){if(t.isAbsolute)return new Cn(i,!0,0);if(!e)return new Cn(i,!1,NaN);if(e.parent===null)return new Cn(e,!0,0);let n=gr(t.commands[0])?0:1,r=e.segments.length-1+n;return Vm(e,r,t.numberOfDoubleDots)}function Vm(t,i,e){let n=t,r=i,o=e;for(;o>r;){if(o-=r,n=n.parent,!n)throw new O(4005,!1);r=n.segments.length}return new Cn(n,!1,r-o)}function zm(t){return pi(t[0])?t[0].outlets:{[R]:t}}function Ql(t,i,e){if(t??=new X([],{}),t.segments.length===0&&t.hasChildren())return ui(t,i,e);let n=Um(t,i,e),r=e.slice(n.commandIndex);if(n.match&&n.pathIndex<t.segments.length){let o=new X(t.segments.slice(0,n.pathIndex),{});return o.children[R]=new X(t.segments.slice(n.pathIndex),t.children),ui(o,0,r)}else return n.match&&r.length===0?new X(t.segments,{}):n.match&&!t.hasChildren()?ma(t,i,e):n.match?ui(t,0,r):ma(t,i,e)}function ui(t,i,e){if(e.length===0)return new X(t.segments,{});{let n=zm(e),r={};if(Object.keys(n).some(o=>o!==R)&&t.children[R]&&t.numberOfChildren===1&&t.children[R].segments.length===0){let o=ui(t.children[R],i,e);return new X(t.segments,o.children)}return Object.entries(n).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=Ql(t.children[o],i,a))}),Object.entries(t.children).forEach(([o,a])=>{n[o]===void 0&&(r[o]=a)}),new X(t.segments,r)}}function Um(t,i,e){let n=0,r=i,o={match:!1,pathIndex:0,commandIndex:0};for(;r<t.segments.length;){if(n>=e.length)return o;let a=t.segments[r],s=e[n];if(pi(s))break;let c=`${s}`,d=n<e.length-1?e[n+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Ol(c,d,a))return o;n+=2}else{if(!Ol(c,{},a))return o;n++}r++}return{match:!0,pathIndex:r,commandIndex:n}}function ma(t,i,e){let n=t.segments.slice(0,i),r=0;for(;r<e.length;){let o=e[r];if(pi(o)){let c=Hm(o.outlets);return new X(n,c)}if(r===0&&gr(e[0])){let c=t.segments[i];n.push(new Pt(c.path,Rl(e[0]))),r++;continue}let a=pi(o)?o.outlets[R]:`${o}`,s=r<e.length-1?e[r+1]:null;a&&s&&gr(s)?(n.push(new Pt(a,Rl(s))),r+=2):(n.push(new Pt(a,{})),r++)}return new X(n,{})}function Hm(t){let i={};return Object.entries(t).forEach(([e,n])=>{typeof n=="string"&&(n=[n]),n!==null&&(i[e]=ma(new X([],{}),0,n))}),i}function Rl(t){let i={};return Object.entries(t).forEach(([e,n])=>i[e]=`${n}`),i}function Ol(t,i,e){return t==e.path&&ct(i,e.parameters)}var mi="imperative",we=(function(t){return t[t.NavigationStart=0]="NavigationStart",t[t.NavigationEnd=1]="NavigationEnd",t[t.NavigationCancel=2]="NavigationCancel",t[t.NavigationError=3]="NavigationError",t[t.RoutesRecognized=4]="RoutesRecognized",t[t.ResolveStart=5]="ResolveStart",t[t.ResolveEnd=6]="ResolveEnd",t[t.GuardsCheckStart=7]="GuardsCheckStart",t[t.GuardsCheckEnd=8]="GuardsCheckEnd",t[t.RouteConfigLoadStart=9]="RouteConfigLoadStart",t[t.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",t[t.ChildActivationStart=11]="ChildActivationStart",t[t.ChildActivationEnd=12]="ChildActivationEnd",t[t.ActivationStart=13]="ActivationStart",t[t.ActivationEnd=14]="ActivationEnd",t[t.Scroll=15]="Scroll",t[t.NavigationSkipped=16]="NavigationSkipped",t})(we||{}),He=class{id;url;constructor(i,e){this.id=i,this.url=e}},Yt=class extends He{type=we.NavigationStart;navigationTrigger;restoredState;constructor(i,e,n="imperative",r=null){super(i,e),this.navigationTrigger=n,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},$e=class extends He{urlAfterRedirects;type=we.NavigationEnd;constructor(i,e,n){super(i,e),this.urlAfterRedirects=n}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},Ee=(function(t){return t[t.Redirect=0]="Redirect",t[t.SupersededByNewNavigation=1]="SupersededByNewNavigation",t[t.NoDataFromResolver=2]="NoDataFromResolver",t[t.GuardRejected=3]="GuardRejected",t[t.Aborted=4]="Aborted",t})(Ee||{}),gi=(function(t){return t[t.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",t[t.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",t})(gi||{}),Xe=class extends He{reason;code;type=we.NavigationCancel;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function Xl(t){return t instanceof Xe&&(t.code===Ee.Redirect||t.code===Ee.SupersededByNewNavigation)}var xt=class extends He{reason;code;type=we.NavigationSkipped;constructor(i,e,n,r){super(i,e),this.reason=n,this.code=r}},Kt=class extends He{error;target;type=we.NavigationError;constructor(i,e,n,r){super(i,e),this.error=n,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},vi=class extends He{urlAfterRedirects;state;type=we.RoutesRecognized;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},br=class extends He{urlAfterRedirects;state;type=we.GuardsCheckStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},_r=class extends He{urlAfterRedirects;state;shouldActivate;type=we.GuardsCheckEnd;constructor(i,e,n,r,o){super(i,e),this.urlAfterRedirects=n,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},yr=class extends He{urlAfterRedirects;state;type=we.ResolveStart;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},xr=class extends He{urlAfterRedirects;state;type=we.ResolveEnd;constructor(i,e,n,r){super(i,e),this.urlAfterRedirects=n,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},wr=class{route;type=we.RouteConfigLoadStart;constructor(i){this.route=i}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},Cr=class{route;type=we.RouteConfigLoadEnd;constructor(i){this.route=i}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},Dr=class{snapshot;type=we.ChildActivationStart;constructor(i){this.snapshot=i}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Er=class{snapshot;type=we.ChildActivationEnd;constructor(i){this.snapshot=i}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Mr=class{snapshot;type=we.ActivationStart;constructor(i){this.snapshot=i}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Sr=class{snapshot;type=we.ActivationEnd;constructor(i){this.snapshot=i}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}};var En=class{},bi=class{},Mn=class{url;navigationBehaviorOptions;constructor(i,e){this.url=i,this.navigationBehaviorOptions=e}};function $m(t){return!(t instanceof En)&&!(t instanceof Mn)&&!(t instanceof bi)}var kr=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(i){this.rootInjector=i,this.children=new Tn(this.rootInjector)}},Tn=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,n){let r=this.getOrCreateContext(e);r.outlet=n,this.contexts.set(e,r)}onChildOutletDestroyed(e){let n=this.getContext(e);n&&(n.outlet=null,n.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let n=this.getContext(e);return n||(n=new kr(this.rootInjector),this.contexts.set(e,n)),n}getContext(e){return this.contexts.get(e)||null}static \u0275fac=function(n){return new(n||t)(T(Be))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Ar=class{_root;constructor(i){this._root=i}get root(){return this._root.value}parent(i){let e=this.pathFromRoot(i);return e.length>1?e[e.length-2]:null}children(i){let e=ha(i,this._root);return e?e.children.map(n=>n.value):[]}firstChild(i){let e=ha(i,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(i){let e=fa(i,this._root);return e.length<2?[]:e[e.length-2].children.map(r=>r.value).filter(r=>r!==i)}pathFromRoot(i){return fa(i,this._root).map(e=>e.value)}};function ha(t,i){if(t===i.value)return i;for(let e of i.children){let n=ha(t,e);if(n)return n}return null}function fa(t,i){if(t===i.value)return[i];for(let e of i.children){let n=fa(t,e);if(n.length)return n.unshift(i),n}return[]}var Ue=class{value;children;constructor(i,e){this.value=i,this.children=e}toString(){return`TreeNode(${this.value})`}};function wn(t){let i={};return t&&t.children.forEach(e=>i[e.value.outlet]=e),i}var _i=class extends Ar{snapshot;constructor(i,e){super(i),this.snapshot=e,Ea(this,i)}toString(){return this.snapshot.toString()}};function Jl(t,i){let e=Gm(t,i),n=new Oe([new Pt("",{})]),r=new Oe({}),o=new Oe({}),a=new Oe({}),s=new Oe(""),c=new wt(n,r,a,s,o,R,t,e.root);return c.snapshot=e.root,new _i(new Ue(c,[]),e)}function Gm(t,i){let e={},n={},r={},a=new Sn([],e,r,"",n,R,t,null,{},i);return new yi("",new Ue(a,[]))}var wt=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(i,e,n,r,o,a,s,c){this.urlSubject=i,this.paramsSubject=e,this.queryParamsSubject=n,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(W(d=>d[Ci]))??k(void 0),this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(W(i=>Zt(i))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(W(i=>Zt(i))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Da(t,i,e="emptyOnly"){let n,{routeConfig:r}=t;return i!==null&&(e==="always"||r?.path===""||!i.component&&!i.routeConfig?.loadComponent)?n={params:g(g({},i.params),t.params),data:g(g({},i.data),t.data),resolve:g(g(g(g({},t.data),i.data),r?.data),t._resolvedData)}:n={params:g({},t.params),data:g({},t.data),resolve:g(g({},t.data),t._resolvedData??{})},r&&tc(r)&&(n.resolve[Ci]=r.title),n}var Sn=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ci]}constructor(i,e,n,r,o,a,s,c,d,f){this.url=i,this.params=e,this.queryParams=n,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=f}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Zt(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Zt(this.queryParams),this._queryParamMap}toString(){let i=this.url.map(n=>n.toString()).join("/"),e=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${i}', path:'${e}')`}},yi=class extends Ar{url;constructor(i,e){super(e),this.url=i,Ea(this,e)}toString(){return ec(this._root)}};function Ea(t,i){i.value._routerState=t,i.children.forEach(e=>Ea(t,e))}function ec(t){let i=t.children.length>0?` { ${t.children.map(ec).join(", ")} } `:"";return`${t.value}${i}`}function aa(t){if(t.snapshot){let i=t.snapshot,e=t._futureSnapshot;t.snapshot=e,ct(i.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),i.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),ct(i.params,e.params)||t.paramsSubject.next(e.params),_m(i.url,e.url)||t.urlSubject.next(e.url),ct(i.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function pa(t,i){let e=ct(t.params,i.params)&&Dm(t.url,i.url),n=!t.parent!=!i.parent;return e&&!n&&(!t.parent||pa(t.parent,i.parent))}function tc(t){return typeof t.title=="string"||t.title===null}var nc=new b(""),Di=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=R;activateEvents=new oe;deactivateEvents=new oe;attachEvents=new oe;detachEvents=new oe;routerOutletData=hn();parentContexts=l(Tn);location=l(Kn);changeDetector=l(Ne);inputBinder=l(Or,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:n,previousValue:r}=e.name;if(n)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new O(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new O(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new O(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,n){this.activated=e,this._activatedRoute=n,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,n){if(this.isActivated)throw new O(4013,!1);this._activatedRoute=e;let r=this.location,a=e.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new ga(e,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:n}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Ae]})}return t})(),ga=class{route;childContexts;parent;outletData;constructor(i,e,n,r){this.route=i,this.childContexts=e,this.parent=n,this.outletData=r}get(i,e){return i===wt?this.route:i===Tn?this.childContexts:i===nc?this.outletData:this.parent.get(i,e)}},Or=new b("");var Ma=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(n,r){n&1&&Z(0,"router-outlet")},dependencies:[Di],encapsulation:2})}return t})();function Sa(t){let i=t.children&&t.children.map(Sa),e=i?ee(g({},t),{children:i}):g({},t);return!e.component&&!e.loadComponent&&(i||e.loadChildren)&&e.outlet&&e.outlet!==R&&(e.component=Ma),e}function Wm(t,i,e){let n=xi(t,i._root,e?e._root:void 0);return new _i(n,i)}function xi(t,i,e){if(e&&t.shouldReuseRoute(i.value,e.value.snapshot)){let n=e.value;n._futureSnapshot=i.value;let r=qm(t,i,e);return new Ue(n,r)}else{if(t.shouldAttach(i.value)){let o=t.retrieve(i.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=i.value,a.children=i.children.map(s=>xi(t,s)),a}}let n=Zm(i.value),r=i.children.map(o=>xi(t,o));return new Ue(n,r)}}function qm(t,i,e){return i.children.map(n=>{for(let r of e.children)if(t.shouldReuseRoute(n.value,r.value.snapshot))return xi(t,n,r);return xi(t,n)})}function Zm(t){return new wt(new Oe(t.url),new Oe(t.params),new Oe(t.queryParams),new Oe(t.fragment),new Oe(t.data),t.outlet,t.component,t)}var kn=class{redirectTo;navigationBehaviorOptions;constructor(i,e){this.redirectTo=i,this.navigationBehaviorOptions=e}},ic="ngNavigationCancelingError";function Ir(t,i){let{redirectTo:e,navigationBehaviorOptions:n}=Lt(i)?{redirectTo:i,navigationBehaviorOptions:void 0}:i,r=rc(!1,Ee.Redirect);return r.url=e,r.navigationBehaviorOptions=n,r}function rc(t,i){let e=new Error(`NavigationCancelingError: ${t||""}`);return e[ic]=!0,e.cancellationCode=i,e}function Ym(t){return oc(t)&&Lt(t.url)}function oc(t){return!!t&&t[ic]}var va=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(i,e,n,r,o){this.routeReuseStrategy=i,this.futureState=e,this.currState=n,this.forwardEvent=r,this.inputBindingEnabled=o}activate(i){let e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,i),aa(this.futureState.root),this.activateChildRoutes(e,n,i)}deactivateChildRoutes(i,e,n){let r=wn(e);i.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],n),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,n)})}deactivateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(r===o)if(r.component){let a=n.getContext(r.outlet);a&&this.deactivateChildRoutes(i,e,a.children)}else this.deactivateChildRoutes(i,e,n);else o&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(i,e){i.value.component&&this.routeReuseStrategy.shouldDetach(i.value.snapshot)?this.detachAndStoreRouteSubtree(i,e):this.deactivateRouteAndOutlet(i,e)}detachAndStoreRouteSubtree(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=wn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(n&&n.outlet){let a=n.outlet.detach(),s=n.children.onOutletDeactivated();this.routeReuseStrategy.store(i.value.snapshot,{componentRef:a,route:i,contexts:s})}}deactivateRouteAndOutlet(i,e){let n=e.getContext(i.value.outlet),r=n&&i.value.component?n.children:e,o=wn(i);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);n&&(n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated()),n.attachRef=null,n.route=null)}activateChildRoutes(i,e,n){let r=wn(e);i.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],n),this.forwardEvent(new Sr(o.value.snapshot))}),i.children.length&&this.forwardEvent(new Er(i.value.snapshot))}activateRoutes(i,e,n){let r=i.value,o=e?e.value:null;if(aa(r),r===o)if(r.component){let a=n.getOrCreateContext(r.outlet);this.activateChildRoutes(i,e,a.children)}else this.activateChildRoutes(i,e,n);else if(r.component){let a=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),aa(s.route.value),this.activateChildRoutes(i,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(i,null,a.children)}else this.activateChildRoutes(i,null,n)}},Tr=class{path;route;constructor(i){this.path=i,this.route=this.path[this.path.length-1]}},Dn=class{component;route;constructor(i,e){this.component=i,this.route=e}};function Km(t,i,e){let n=t._root,r=i?i._root:null;return di(n,r,e,[n.value])}function Qm(t){let i=t.routeConfig?t.routeConfig.canActivateChild:null;return!i||i.length===0?null:{node:t,guards:i}}function Rn(t,i){let e=Symbol(),n=i.get(t,e);return n===e?typeof t=="function"&&!ks(t)?t:i.get(t):n}function di(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=wn(i);return t.children.forEach(a=>{Xm(a,o[a.value.outlet],e,n.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>hi(s,e.getContext(a),r)),r}function Xm(t,i,e,n,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=i?i.value:null,s=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=Jm(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Tr(n)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?di(t,i,s?s.children:null,n,r):di(t,i,e,n,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new Dn(s.outlet.component,a))}else a&&hi(i,s,r),r.canActivateChecks.push(new Tr(n)),o.component?di(t,null,s?s.children:null,n,r):di(t,null,e,n,r);return r}function Jm(t,i,e){if(typeof e=="function")return Pe(i._environmentInjector,()=>e(t,i));switch(e){case"pathParamsChange":return!qt(t.url,i.url);case"pathParamsOrQueryParamsChange":return!qt(t.url,i.url)||!ct(t.queryParams,i.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!pa(t,i)||!ct(t.queryParams,i.queryParams);default:return!pa(t,i)}}function hi(t,i,e){let n=wn(t),r=t.value;Object.entries(n).forEach(([o,a])=>{r.component?i?hi(a,i.children.getContext(o),e):hi(a,null,e):hi(a,i,e)}),r.component?i&&i.outlet&&i.outlet.isActivated?e.canDeactivateChecks.push(new Dn(i.outlet.component,r)):e.canDeactivateChecks.push(new Dn(null,r)):e.canDeactivateChecks.push(new Dn(null,r))}function Ei(t){return typeof t=="function"}function eh(t){return typeof t=="boolean"}function th(t){return t&&Ei(t.canLoad)}function nh(t){return t&&Ei(t.canActivate)}function ih(t){return t&&Ei(t.canActivateChild)}function rh(t){return t&&Ei(t.canDeactivate)}function oh(t){return t&&Ei(t.canMatch)}function ac(t){return t instanceof Cs||t?.name==="EmptyError"}var ur=Symbol("INITIAL_VALUE");function An(){return je(t=>Ds(t.map(i=>i.pipe(st(1),kt(ur)))).pipe(W(i=>{for(let e of i)if(e!==!0){if(e===ur)return ur;if(e===!1||ah(e))return e}return!0}),re(i=>i!==ur),st(1)))}function ah(t){return Lt(t)||t instanceof kn}function sc(t){return t.aborted?k(void 0).pipe(st(1)):new qe(i=>{let e=()=>{i.next(),i.complete()};return t.addEventListener("abort",e),()=>t.removeEventListener("abort",e)})}function lc(t){return ce(sc(t))}function sh(t){return gt(i=>{let{targetSnapshot:e,currentSnapshot:n,guards:{canActivateChecks:r,canDeactivateChecks:o}}=i;return o.length===0&&r.length===0?k(ee(g({},i),{guardsResult:!0})):lh(o,e,n).pipe(gt(a=>a&&eh(a)?ch(e,r,t):k(a)),W(a=>ee(g({},i),{guardsResult:a})))})}function lh(t,i,e){return Me(t).pipe(gt(n=>fh(n.component,n.route,e,i)),St(n=>n!==!0,!0))}function ch(t,i,e){return Me(i).pipe(on(n=>Es(uh(n.route.parent,e),dh(n.route,e),hh(t,n.path),mh(t,n.route))),St(n=>n!==!0,!0))}function dh(t,i){return t!==null&&i&&i(new Mr(t)),k(!0)}function uh(t,i){return t!==null&&i&&i(new Dr(t)),k(!0)}function mh(t,i){let e=i.routeConfig?i.routeConfig.canActivate:null;if(!e||e.length===0)return k(!0);let n=e.map(r=>Wi(()=>{let o=i._environmentInjector,a=Rn(r,o),s=nh(a)?a.canActivate(i,t):Pe(o,()=>a(i,t));return Qt(s).pipe(St())}));return k(n).pipe(An())}function hh(t,i){let e=i[i.length-1],r=i.slice(0,i.length-1).reverse().map(o=>Qm(o)).filter(o=>o!==null).map(o=>Wi(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=Rn(s,c),f=ih(d)?d.canActivateChild(e,t):Pe(c,()=>d(e,t));return Qt(f).pipe(St())});return k(a).pipe(An())}));return k(r).pipe(An())}function fh(t,i,e,n){let r=i&&i.routeConfig?i.routeConfig.canDeactivate:null;if(!r||r.length===0)return k(!0);let o=r.map(a=>{let s=i._environmentInjector,c=Rn(a,s),d=rh(c)?c.canDeactivate(t,i,e,n):Pe(s,()=>c(t,i,e,n));return Qt(d).pipe(St())});return k(o).pipe(An())}function ph(t,i,e,n,r){let o=i.canLoad;if(o===void 0||o.length===0)return k(!0);let a=o.map(s=>{let c=Rn(s,t),d=th(c)?c.canLoad(i,e):Pe(t,()=>c(i,e)),f=Qt(d);return r?f.pipe(lc(r)):f});return k(a).pipe(An(),cc(n))}function cc(t){return ws(Se(i=>{if(typeof i!="boolean")throw Ir(t,i)}),W(i=>i===!0))}function gh(t,i,e,n,r,o){let a=i.canMatch;if(!a||a.length===0)return k(!0);let s=a.map(c=>{let d=Rn(c,t),f=oh(d)?d.canMatch(i,e,r):Pe(t,()=>d(i,e,r));return Qt(f).pipe(lc(o))});return k(s).pipe(An(),cc(n))}var yt=class t extends Error{segmentGroup;constructor(i){super(),this.segmentGroup=i||null,Object.setPrototypeOf(this,t.prototype)}},wi=class t extends Error{urlTree;constructor(i){super(),this.urlTree=i,Object.setPrototypeOf(this,t.prototype)}};function vh(t){throw new O(4e3,!1)}function bh(t){throw rc(!1,Ee.GuardRejected)}var ba=class{urlSerializer;urlTree;constructor(i,e){this.urlSerializer=i,this.urlTree=e}async lineralizeSegments(i,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),r.numberOfChildren===0)return n;if(r.numberOfChildren>1||!r.children[R])throw vh(`${i.redirectTo}`);r=r.children[R]}}async applyRedirectCommands(i,e,n,r,o){let a=await _h(e,r,o);if(a instanceof Ie)throw new wi(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),i,n);if(a[0]==="/")throw new wi(s);return s}applyRedirectCreateUrlTree(i,e,n,r){let o=this.createSegmentGroup(i,e.root,n,r);return new Ie(o,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(i,e){let n={};return Object.entries(i).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);n[r]=e[s]}else n[r]=o}),n}createSegmentGroup(i,e,n,r){let o=this.createSegments(i,e.segments,n,r),a={};return Object.entries(e.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(i,c,n,r)}),new X(o,a)}createSegments(i,e,n,r){return e.map(o=>o.path[0]===":"?this.findPosParam(i,o,r):this.findOrReturn(o,n))}findPosParam(i,e,n){let r=n[e.path.substring(1)];if(!r)throw new O(4001,!1);return r}findOrReturn(i,e){let n=0;for(let r of e){if(r.path===i.path)return e.splice(n),r;n++}return i}};function _h(t,i,e){if(typeof t=="string")return Promise.resolve(t);let n=t;return pr(Qt(Pe(e,()=>n(i))))}function yh(t,i){return t.providers&&!t._injector&&(t._injector=No(t.providers,i,`Route: ${t.path}`)),t._injector??i}function it(t){return t.outlet||R}function xh(t,i){let e=t.filter(n=>it(n)===i);return e.push(...t.filter(n=>it(n)!==i)),e}var _a={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function dc(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function wh(t,i,e,n,r,o,a){let s=uc(t,i,e);if(!s.matched)return k(s);let c=dc(o(s));return n=yh(i,n),gh(n,i,e,r,c,a).pipe(W(d=>d===!0?s:g({},_a)))}function uc(t,i,e){if(i.path==="")return i.pathMatch==="full"&&(t.hasChildren()||e.length>0)?g({},_a):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let r=(i.matcher||Nl)(e,t,i);if(!r)return g({},_a);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?g(g({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:e.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Fl(t,i,e,n,r){return e.length>0&&Eh(t,e,n,r)?{segmentGroup:new X(i,Dh(n,new X(e,t.children))),slicedSegments:[]}:e.length===0&&Mh(t,e,n)?{segmentGroup:new X(t.segments,Ch(t,e,n,t.children)),slicedSegments:e}:{segmentGroup:new X(t.segments,t.children),slicedSegments:e}}function Ch(t,i,e,n){let r={};for(let o of e)if(Fr(t,i,o)&&!n[it(o)]){let a=new X([],{});r[it(o)]=a}return g(g({},n),r)}function Dh(t,i){let e={};e[R]=i;for(let n of t)if(n.path===""&&it(n)!==R){let r=new X([],{});e[it(n)]=r}return e}function Eh(t,i,e,n){return e.some(r=>!Fr(t,i,r)||!(it(r)!==R)?!1:!(n!==void 0&&it(r)===n))}function Mh(t,i,e){return e.some(n=>Fr(t,i,n))}function Fr(t,i,e){return(t.hasChildren()||i.length>0)&&e.pathMatch==="full"?!1:e.path===""}function Sh(t,i,e){return i.length===0&&!t.children[e]}var ya=class{};async function kh(t,i,e,n,r,o,a="emptyOnly",s){return new xa(t,i,e,n,r,a,o,s).recognize()}var Ah=31,xa=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(i,e,n,r,o,a,s,c){this.injector=i,this.configLoader=e,this.rootComponentType=n,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new ba(this.urlSerializer,this.urlTree)}noMatchError(i){return new O(4002,`'${i.segmentGroup}'`)}async recognize(){let i=Fl(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:n}=await this.match(i),r=new Ue(n,e),o=new yi("",r),a=ql(n,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(i){let e=new Sn([],Object.freeze({}),Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),R,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,i,R,e),rootSnapshot:e}}catch(n){if(n instanceof wi)return this.urlTree=n.urlTree,this.match(n.urlTree.root);throw n instanceof yt?this.noMatchError(n):n}}async processSegmentGroup(i,e,n,r,o){if(n.segments.length===0&&n.hasChildren())return this.processChildren(i,e,n,o);let a=await this.processSegment(i,e,n,n.segments,r,!0,o);return a instanceof Ue?[a]:[]}async processChildren(i,e,n,r){let o=[];for(let c of Object.keys(n.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=n.children[c],f=xh(e,c),_=await this.processSegmentGroup(i,f,d,c,r);a.push(..._)}let s=mc(a);return Ih(s),s}async processSegment(i,e,n,r,o,a,s){for(let c of e)try{return await this.processSegmentAgainstRoute(c._injector??i,e,c,n,r,o,a,s)}catch(d){if(d instanceof yt||ac(d))continue;throw d}if(Sh(n,r,o))return new ya;throw new yt(n)}async processSegmentAgainstRoute(i,e,n,r,o,a,s,c){if(it(n)!==a&&(a===R||!Fr(r,o,n)))throw new yt(r);if(n.redirectTo===void 0)return this.matchSegmentAgainstRoute(i,r,n,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(i,r,e,n,o,a,c);throw new yt(r)}async expandSegmentAgainstRouteUsingRedirect(i,e,n,r,o,a,s){let{matched:c,parameters:d,consumedSegments:f,positionalParamSegments:_,remainingSegments:$}=uc(e,r,o);if(!c)throw new yt(e);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>Ah&&(this.allowRedirects=!1));let Ce=this.createSnapshot(i,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let he=await this.applyRedirects.applyRedirectCommands(f,r.redirectTo,_,dc(Ce),i),ue=await this.applyRedirects.lineralizeSegments(r,he);return this.processSegment(i,n,e,ue.concat($),a,!1,s)}createSnapshot(i,e,n,r,o){let a=new Sn(n,r,Object.freeze(g({},this.urlTree.queryParams)),this.urlTree.fragment,Rh(e),it(e),e.component??e._loadedComponent??null,e,Oh(e),i),s=Da(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(i,e,n,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Re=>this.createSnapshot(i,n,Re.consumedSegments,Re.parameters,a),c=await pr(wh(e,n,r,i,this.urlSerializer,s,this.abortSignal));if(n.path==="**"&&(e.children={}),!c?.matched)throw new yt(e);i=n._injector??i;let{routes:d}=await this.getChildConfig(i,n,r),f=n._loadedInjector??i,{parameters:_,consumedSegments:$,remainingSegments:Ce}=c,he=this.createSnapshot(i,n,$,_,a),{segmentGroup:ue,slicedSegments:G}=Fl(e,$,Ce,d,o);if(G.length===0&&ue.hasChildren()){let Re=await this.processChildren(f,d,ue,he);return new Ue(he,Re)}if(d.length===0&&G.length===0)return new Ue(he,[]);let Y=it(n)===o,fe=await this.processSegment(f,d,ue,G,Y?R:o,!0,he);return new Ue(he,fe instanceof Ue?[fe]:[])}async getChildConfig(i,e,n){if(e.children)return{routes:e.children,injector:i};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(i).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await pr(ph(i,e,n,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(i,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw bh(e)}return{routes:[],injector:i}}};function Ih(t){t.sort((i,e)=>i.value.outlet===R?-1:e.value.outlet===R?1:i.value.outlet.localeCompare(e.value.outlet))}function Th(t){let i=t.value.routeConfig;return i&&i.path===""}function mc(t){let i=[],e=new Set;for(let n of t){if(!Th(n)){i.push(n);continue}let r=i.find(o=>n.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...n.children),e.add(r)):i.push(n)}for(let n of e){let r=mc(n.children);i.push(new Ue(n.value,r))}return i.filter(n=>!e.has(n))}function Rh(t){return t.data||{}}function Oh(t){return t.resolve||{}}function Fh(t,i,e,n,r,o,a){return gt(async s=>{let{state:c,tree:d}=await kh(t,i,e,n,s.extractedUrl,r,o,a);return ee(g({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function Ph(t){return gt(i=>{let{targetSnapshot:e,guards:{canActivateChecks:n}}=i;if(!n.length)return k(i);let r=new Set(n.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of hc(s))o.add(c);let a=0;return Me(o).pipe(on(s=>r.has(s)?Nh(s,e,t):(s.data=Da(s,s.parent,t).resolve,k(void 0))),Se(()=>a++),Ao(1),gt(s=>a===o.size?k(i):Fe))})}function hc(t){let i=t.children.map(e=>hc(e)).flat();return[t,...i]}function Nh(t,i,e){let n=t.routeConfig,r=t._resolve;return n?.title!==void 0&&!tc(n)&&(r[Ci]=n.title),Wi(()=>(t.data=Da(t,t.parent,e).resolve,Lh(r,t,i).pipe(W(o=>(t._resolvedData=o,t.data=g(g({},t.data),o),null)))))}function Lh(t,i,e){let n=la(t);if(n.length===0)return k({});let r={};return Me(n).pipe(gt(o=>jh(t[o],i,e).pipe(St(),Se(a=>{if(a instanceof kn)throw Ir(new Nt,a);r[o]=a}))),Ao(1),W(()=>r),rn(o=>ac(o)?Fe:$i(o)))}function jh(t,i,e){let n=i._environmentInjector,r=Rn(t,n),o=r.resolve?r.resolve(i,e):Pe(n,()=>r(i,e));return Qt(o)}function Pl(t){return je(i=>{let e=t(i);return e?Me(e).pipe(W(()=>i)):k(i)})}var ka=(()=>{class t{buildTitle(e){let n,r=e.root;for(;r!==void 0;)n=this.getResolvedTitleForRoute(r)??n,r=r.children.find(o=>o.outlet===R);return n}getResolvedTitleForRoute(e){return e.data[Ci]}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l(fc),providedIn:"root"})}return t})(),fc=(()=>{class t extends ka{title;constructor(e){super(),this.title=e}updateTitle(e){let n=this.buildTitle(e);n!==void 0&&this.title.setTitle(n)}static \u0275fac=function(n){return new(n||t)(T(kl))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),On=new b("",{factory:()=>({})}),Mi=new b(""),pc=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(Ks);async loadComponent(e,n){if(this.componentLoaders.get(n))return this.componentLoaders.get(n);if(n._loadedComponent)return Promise.resolve(n._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await jl(Pe(e,()=>n.loadComponent())),a=await bc(vc(o));return this.onLoadEndListener&&this.onLoadEndListener(n),n._loadedComponent=a,a}finally{this.componentLoaders.delete(n)}})();return this.componentLoaders.set(n,r),r}loadChildren(e,n){if(this.childrenLoaders.get(n))return this.childrenLoaders.get(n);if(n._loadedRoutes)return Promise.resolve({routes:n._loadedRoutes,injector:n._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(n);let r=(async()=>{try{let o=await gc(n,this.compiler,e,this.onLoadEndListener);return n._loadedRoutes=o.routes,n._loadedInjector=o.injector,n._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(n)}})();return this.childrenLoaders.set(n,r),r}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();async function gc(t,i,e,n){let r=await jl(Pe(e,()=>t.loadChildren())),o=await bc(vc(r)),a;o instanceof Gs||Array.isArray(o)?a=o:a=await i.compileModuleAsync(o),n&&n(t);let s,c,d=!1,f;return Array.isArray(a)?(c=a,d=!0):(s=a.create(e).injector,f=a,c=s.get(Mi,[],{optional:!0,self:!0}).flat()),{routes:c.map(Sa),injector:s,factory:f}}function Bh(t){return t&&typeof t=="object"&&"default"in t}function vc(t){return Bh(t)?t.default:t}async function bc(t){return t}var Pr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l(Vh),providedIn:"root"})}return t})(),Vh=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,n){return e}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),_c=new b("");var zh=()=>{},yc=new b(""),xc=(()=>{class t{currentNavigation=C(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=C(null);events=new L;transitionAbortWithErrorSubject=new L;configLoader=l(pc);environmentInjector=l(Be);destroyRef=l(lt);urlSerializer=l(In);rootContexts=l(Tn);location=l(gn);inputBindingEnabled=l(Or,{optional:!0})!==null;titleStrategy=l(ka);options=l(On,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(Pr);createViewTransition=l(_c,{optional:!0});navigationErrorHandler=l(yc,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>k(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=r=>this.events.next(new wr(r)),n=r=>this.events.next(new Cr(r));this.configLoader.onLoadEndListener=n,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let n=++this.navigationId;Q(()=>{this.transitions?.next(ee(g({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:n,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new Oe(null),this.transitions.pipe(re(n=>n!==null),je(n=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===n.id;return k(n).pipe(je(s=>{if(this.navigationId>n.id)return this.cancelNavigationTransition(n,"",Ee.SupersededByNewNavigation),Fe;this.currentTransition=n;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?ee(g({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),f=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!d&&f!=="reload")return this.events.next(new xt(s.id,this.urlSerializer.serialize(s.rawUrl),"",gi.IgnoredSameUrlNavigation)),s.resolve(!1),Fe;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return k(s).pipe(je(_=>(this.events.next(new Yt(_.id,this.urlSerializer.serialize(_.extractedUrl),_.source,_.restoredState)),_.id!==this.navigationId?Fe:Promise.resolve(_))),Fh(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),Se(_=>{n.targetSnapshot=_.targetSnapshot,n.urlAfterRedirects=_.urlAfterRedirects,this.currentNavigation.update($=>($.finalUrl=_.urlAfterRedirects,$)),this.events.next(new bi)}),je(_=>Me(n.routesRecognizeHandler.deferredHandle??k(void 0)).pipe(W(()=>_))),Se(()=>{let _=new vi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:_,extractedUrl:$,source:Ce,restoredState:he,extras:ue}=s,G=new Yt(_,this.urlSerializer.serialize($),Ce,he);this.events.next(G);let Y=Jl(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=n=ee(g({},s),{targetSnapshot:Y,urlAfterRedirects:$,extras:ee(g({},ue),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(fe=>(fe.finalUrl=$,fe)),k(n)}else return this.events.next(new xt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",gi.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Fe}),W(s=>{let c=new br(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=n=ee(g({},s),{guards:Km(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),n}),sh(s=>this.events.next(s)),je(s=>{if(n.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw Ir(this.urlSerializer,s.guardsResult);let c=new _r(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Fe;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",Ee.GuardRejected),Fe;if(s.guards.canActivateChecks.length===0)return k(s);let d=new yr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Fe;let f=!1;return k(s).pipe(Ph(this.paramsInheritanceStrategy),Se({next:()=>{f=!0;let _=new xr(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(_)},complete:()=>{f||this.cancelNavigationTransition(s,"",Ee.NoDataFromResolver)}}))}),Pl(s=>{let c=f=>{let _=[];if(f.routeConfig?._loadedComponent)f.component=f.routeConfig?._loadedComponent;else if(f.routeConfig?.loadComponent){let $=f._environmentInjector;_.push(this.configLoader.loadComponent($,f.routeConfig).then(Ce=>{f.component=Ce}))}for(let $ of f.children)_.push(...c($));return _},d=c(s.targetSnapshot.root);return d.length===0?k(s):Me(Promise.all(d).then(()=>s))}),Pl(()=>this.afterPreactivation()),je(()=>{let{currentSnapshot:s,targetSnapshot:c}=n,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?Me(d).pipe(W(()=>n)):k(n)}),st(1),je(s=>{let c=Wm(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=n=s=ee(g({},s),{targetRouterState:c}),this.currentNavigation.update(f=>(f.targetRouterState=c,f)),this.events.next(new En);let d=n.beforeActivateHandler.deferredHandle;return d?Me(d.then(()=>s)):k(s)}),Se(s=>{new va(e.routeReuseStrategy,n.targetRouterState,n.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=zh,c)),this.lastSuccessfulNavigation.set(Q(this.currentNavigation)),this.events.next(new $e(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),ce(sc(o.signal).pipe(re(()=>!r&&!n.targetRouterState),Se(()=>{this.cancelNavigationTransition(n,o.signal.reason+"",Ee.Aborted)}))),Se({complete:()=>{r=!0}}),ce(this.transitionAbortWithErrorSubject.pipe(Se(s=>{throw s}))),an(()=>{o.abort(),r||this.cancelNavigationTransition(n,"",Ee.SupersededByNewNavigation),this.currentTransition?.id===n.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),rn(s=>{if(r=!0,this.destroyed)return n.resolve(!1),Fe;if(oc(s))this.events.next(new Xe(n.id,this.urlSerializer.serialize(n.extractedUrl),s.message,s.cancellationCode)),Ym(s)?this.events.next(new Mn(s.url,s.navigationBehaviorOptions)):n.resolve(!1);else{let c=new Kt(n.id,this.urlSerializer.serialize(n.extractedUrl),s,n.targetSnapshot??void 0);try{let d=Pe(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof kn){let{message:f,cancellationCode:_}=Ir(this.urlSerializer,d);this.events.next(new Xe(n.id,this.urlSerializer.serialize(n.extractedUrl),f,_)),this.events.next(new Mn(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?n.resolve(!1):n.reject(d)}}return Fe}))}))}cancelNavigationTransition(e,n,r){let o=new Xe(e.id,this.urlSerializer.serialize(e.extractedUrl),n,r);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),n=Q(this.currentNavigation),r=n?.targetBrowserUrl??n?.extractedUrl;return e.toString()!==r?.toString()&&!n?.extras.skipLocationChange}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Uh(t){return t!==mi}var wc=new b("");var Cc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l(Hh),providedIn:"root"})}return t})(),Rr=class{shouldDetach(i){return!1}store(i,e){}shouldAttach(i){return!1}retrieve(i){return null}shouldReuseRoute(i,e){return i.routeConfig===e.routeConfig}shouldDestroyInjector(i){return!0}},Hh=(()=>{class t extends Rr{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Nr=(()=>{class t{urlSerializer=l(In);options=l(On,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(gn);urlHandlingStrategy=l(Pr);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new Ie;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:n,targetBrowserUrl:r}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,n):n,a=r??o;return a instanceof Ie?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:n,initialUrl:r}){n&&e?(this.currentUrlTree=n,this.rawUrlTree=this.urlHandlingStrategy.merge(n,r),this.routerState=e):this.rawUrlTree=r}routerState=Jl(null,l(Be));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:()=>l($h),providedIn:"root"})}return t})(),$h=(()=>{class t extends Nr{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(n=>{n.type==="popstate"&&setTimeout(()=>{e(n.url,n.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(e,n){e instanceof Yt?this.updateStateMemento():e instanceof xt?this.commitTransition(n):e instanceof vi?this.urlUpdateStrategy==="eager"&&(n.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof En?(this.commitTransition(n),this.urlUpdateStrategy==="deferred"&&!n.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(n),n)):e instanceof Xe&&!Xl(e)?this.restoreHistory(n):e instanceof Kt?this.restoreHistory(n,!0):e instanceof $e&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,n){let{extras:r,id:o}=n,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(e)||a){let c=this.browserPageId,d=g(g({},s),this.generateNgRouterState(o,c,n));this.location.replaceState(e,"",d)}else{let c=g(g({},s),this.generateNgRouterState(o,this.browserPageId+1,n));this.location.go(e,"",c)}}restoreHistory(e,n=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(n&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,n,r){return this.canceledNavigationResolution==="computed"?g({navigationId:e,\u0275routerPageId:n},this.routerUrlState(r)):g({navigationId:e},this.routerUrlState(r))}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Aa(t,i){t.events.pipe(re(e=>e instanceof $e||e instanceof Xe||e instanceof Kt||e instanceof xt),W(e=>e instanceof $e||e instanceof xt?0:(e instanceof Xe?e.code===Ee.Redirect||e.code===Ee.SupersededByNewNavigation:!1)?2:1),re(e=>e!==2),st(1)).subscribe(()=>{i()})}var Ct=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Lo);stateManager=l(Nr);options=l(On,{optional:!0})||{};pendingTasks=l(Is);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(xc);urlSerializer=l(In);location=l(gn);urlHandlingStrategy=l(Pr);injector=l(Be);_events=new L;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Cc);injectorCleanup=l(wc,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Mi,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Or,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new pt;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(n=>{try{let r=this.navigationTransitions.currentTransition,o=Q(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(n,o),n instanceof Xe&&n.code!==Ee.Redirect&&n.code!==Ee.SupersededByNewNavigation)this.navigated=!0;else if(n instanceof $e)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(n instanceof Mn){let a=n.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(n.url,r.currentRawUrl),c=g({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Uh(r.source)},a);this.scheduleNavigation(s,mi,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}$m(n)&&this._events.next(n)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),mi,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,n,r,o)=>{this.navigateToSyncWithBrowser(e,r,n,o)})}navigateToSyncWithBrowser(e,n,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??e;if(r?.\u0275routerUrl&&(o=ee(g({},o),{browserUrl:e})),r){let d=g({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,n,a,o).catch(d=>{this.disposed||this.injector.get(Zn)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return Q(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(Sa),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,n={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=n,d=c?this.currentUrlTree.fragment:a,f=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":f=g(g({},this.currentUrlTree.queryParams),o);break;case"preserve":f=this.currentUrlTree.queryParams;break;default:f=o||null}f!==null&&(f=this.removeEmptyProps(f));let _;try{let $=r?r.snapshot:this.routerState.snapshot.root;_=Zl($)}catch{(typeof e[0]!="string"||e[0][0]!=="/")&&(e=[]),_=this.currentUrlTree.root}return Yl(_,e,f,d??null,this.urlSerializer)}navigateByUrl(e,n={skipLocationChange:!1}){let r=Lt(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,mi,null,n)}navigate(e,n={skipLocationChange:!1}){return Gh(e),this.navigateByUrl(this.createUrlTree(e,n),n)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(qn(4018,!1)),this.urlSerializer.parse("/")}}isActive(e,n){let r;if(n===!0?r=g({},wa):n===!1?r=g({},fi):r=g(g({},fi),n),Lt(e))return ca(this.currentUrlTree,e,r);let o=this.parseUrl(e);return ca(this.currentUrlTree,o,r)}removeEmptyProps(e){return Object.entries(e).reduce((n,[r,o])=>(o!=null&&(n[r]=o),n),{})}scheduleNavigation(e,n,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((_,$)=>{s=_,c=$});let f=this.pendingTasks.add();return Aa(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(f))}),this.navigationTransitions.handleNavigationRequest({source:n,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Gh(t){for(let i=0;i<t.length;i++)if(t[i]==null)throw new O(4008,!1)}var qh=(()=>{class t{router=l(Ct);stateManager=l(Nr);fragment=C("");queryParams=C({});path=C("");serializer=l(In);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof $e&&this.updateState()})}updateState(){let{fragment:e,root:n,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(r),this.path.set(this.serializer.serialize(new Ie(n)))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),dt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new Ji("href"),{optional:!0});reactiveHref=Qs(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return Q(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return Q(this._target)}_target=C(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return Q(this._queryParams)}_queryParams=C(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return Q(this._fragment)}_fragment=C(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return Q(this._queryParamsHandling)}_queryParamsHandling=C(void 0);set state(e){this._state.set(e)}get state(){return Q(this._state)}_state=C(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return Q(this._info)}_info=C(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return Q(this._relativeTo)}_relativeTo=C(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return Q(this._preserveFragment)}_preserveFragment=C(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return Q(this._skipLocationChange)}_skipLocationChange=C(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return Q(this._replaceUrl)}_replaceUrl=C(!1);isAnchorElement;onChanges=new L;applicationErrorHandler=l(Zn);options=l(On,{optional:!0});reactiveRouterState=l(qh);constructor(e,n,r,o,a,s){this.router=e,this.route=n,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=C(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Lt(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(e,n,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(e!==0||n||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,n){let r=this.renderer,o=this.el.nativeElement;n!==null?r.setAttribute(o,e,n):r.removeAttribute(o,e)}_urlTree=xe(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r==="preserve"||r==="merge";(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let n=this.routerLinkInput();return n===null||!this.router.createUrlTree?null:Lt(n)?n:this.router.createUrlTree(n,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(e,n)=>this.computeHref(e)===this.computeHref(n)});get urlTree(){return Q(this._urlTree)}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??"":null}static \u0275fac=function(n){return new(n||t)(K(Ct),K(wt),Oo("tabindex"),K(ve),K(B),K(pn))};static \u0275dir=A({type:t,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(n,r){n&1&&J("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),n&2&&q("href",r.reactiveHref(),Hs)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",be],skipLocationChange:[2,"skipLocationChange","skipLocationChange",be],replaceUrl:[2,"replaceUrl","replaceUrl",be],routerLink:"routerLink"},features:[Ae]})}return t})(),Si=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new oe;link=l(dt,{optional:!0});constructor(e,n,r,o){this.router=e,this.element=n,this.renderer=r,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof $e&&this.update()})}ngAfterContentInit(){k(this.links.changes,k(null)).pipe(Eo()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(n=>!!n).map(n=>n.onChanges);this.linkInputChangesSubscription=Me(e).pipe(Eo()).subscribe(n=>{this._isActive!==this.isLinkActive(this.router)(n)&&this.update()})}set routerLinkActive(e){let n=Array.isArray(e)?e:e.split(" ");this.classes=n.filter(r=>!!r)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(n=>{e?this.renderer.addClass(this.element.nativeElement,n):this.renderer.removeClass(this.element.nativeElement,n)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let n=Zh(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?g({},wa):g({},fi);return r=>{let o=r.urlTree;return o?Q(Ca(o,e,n)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static \u0275fac=function(n){return new(n||t)(K(Ct),K(B),K(ve),K(Ne))};static \u0275dir=A({type:t,selectors:[["","routerLinkActive",""]],contentQueries:function(n,r,o){if(n&1&&Ke(o,dt,5),n&2){let a;U(a=H())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Ae]})}return t})();function Zh(t){let i=t;return!!(i.paths||i.matrixParams||i.queryParams||i.fragment)}var Yh=new b("");function Ia(t,...i){return Ut([{provide:Mi,multi:!0,useValue:t},[],{provide:wt,useFactory:Kh},{provide:Ws,multi:!0,useFactory:Qh},i.map(e=>e.\u0275providers)])}function Kh(){return l(Ct).routerState.root}function Qh(){let t=l(de);return i=>{let e=t.get($t);if(i!==e.components[0])return;let n=t.get(Ct),r=t.get(Xh);t.get(Jh)===1&&n.initialNavigation(),t.get(ef,null,{optional:!0})?.setUpPreloading(),t.get(Yh,null,{optional:!0})?.init(),n.resetRootComponentType(e.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Xh=new b("",{factory:()=>new L}),Jh=new b("",{factory:()=>1});var ef=new b("");var tf="@",nf=(()=>{class t{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=null;injector=l(de);loadingSchedulerFn=l(rf,{optional:!0});_engine;constructor(e,n,r,o,a){this.doc=e,this.delegate=n,this.zone=r,this.animationType=o,this.moduleImpl=a}ngOnDestroy(){this._engine?.flush()}loadImpl(){let e=()=>this.moduleImpl??import("./chunk-EWBOQQVX.js").then(r=>r),n;return this.loadingSchedulerFn?n=this.loadingSchedulerFn(e):n=e(),n.catch(r=>{throw new O(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:o})=>{this._engine=r(this.animationType,this.doc);let a=new o(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(e,n){let r=this.delegate.createRenderer(e,n);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let o=new Ta(r);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(a=>{let s=a.createRenderer(e,n);o.use(s),this.scheduler??=this.injector.get(Rs,null,{optional:!0}),this.scheduler?.notify(10)}).catch(a=>{o.use(r)}),o}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}componentReplaced(e){this._engine?.flush(),this.delegate.componentReplaced?.(e)}static \u0275fac=function(n){Po()};static \u0275prov=p({token:t,factory:t.\u0275fac})}return t})(),Ta=class{delegate;replay=[];\u0275type=1;constructor(i){this.delegate=i}use(i){if(this.delegate=i,this.replay!==null){for(let e of this.replay)e(i);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(i,e){return this.delegate.createElement(i,e)}createComment(i){return this.delegate.createComment(i)}createText(i){return this.delegate.createText(i)}get destroyNode(){return this.delegate.destroyNode}appendChild(i,e){this.delegate.appendChild(i,e)}insertBefore(i,e,n,r){this.delegate.insertBefore(i,e,n,r)}removeChild(i,e,n,r){this.delegate.removeChild(i,e,n,r)}selectRootElement(i,e){return this.delegate.selectRootElement(i,e)}parentNode(i){return this.delegate.parentNode(i)}nextSibling(i){return this.delegate.nextSibling(i)}setAttribute(i,e,n,r){this.delegate.setAttribute(i,e,n,r)}removeAttribute(i,e,n){this.delegate.removeAttribute(i,e,n)}addClass(i,e){this.delegate.addClass(i,e)}removeClass(i,e){this.delegate.removeClass(i,e)}setStyle(i,e,n,r){this.delegate.setStyle(i,e,n,r)}removeStyle(i,e,n){this.delegate.removeStyle(i,e,n)}setProperty(i,e,n){this.shouldReplay(e)&&this.replay.push(r=>r.setProperty(i,e,n)),this.delegate.setProperty(i,e,n)}setValue(i,e){this.delegate.setValue(i,e)}listen(i,e,n,r){return this.shouldReplay(e)&&this.replay.push(o=>o.listen(i,e,n,r)),this.delegate.listen(i,e,n,r)}shouldReplay(i){return this.replay!==null&&i.startsWith(tf)}},rf=new b("");function Dc(t="animations"){return Fo("NgAsyncAnimations"),Ut([{provide:ze,useFactory:()=>new nf(l(F),l(ai),l(N),t)},{provide:Yi,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ut={home:"",sobre:"sobre",experiencia:"experiencia",formacao:"formacao",habilidades:"habilidades",projetos:"projetos",contato:"contato"};function Ge(t){let i=ut[t];return i===""?"/":`/${i}`}var Ra={heroEyebrow:"Ol\xE1, sou",highlightsSectionAriaLabel:"Destaques",primaryCtas:[{label:"Contactar-me",route:Ge("contato"),variant:"primary",icon:"mail"},{label:"Ver projetos",route:Ge("projetos"),variant:"ghost",icon:"folder"}],highlights:[{value:"8+",label:"Anos no ramo financeiro e administrativo"},{value:"2018",label:"In\xEDcio da transi\xE7\xE3o para tecnologia"},{value:"P\xF3s-gradua\xE7\xE3o",label:"Tecnologias e Inova\xE7\xF5es Web (em curso)"}],resumePdfUrl:"/cv/CV_Kelly.pdf",profile:{name:"Kelly Michele",lastName:"Torrico Saavedra dos Santos",headline:"Desenvolvedora front-end \xB7 Angular, TypeScript e projetos corporativos",summary:["Sou desenvolvedora frontend, deficiente auditiva, bacharela em Administra\xE7\xE3o pela UNIP, formada em Desenvolvimento Web FullStack Java pela Digital House e em An\xE1lise e Desenvolvimento de Sistemas pela UNIP. Atualmente tamb\xE9m curso p\xF3s-gradua\xE7\xE3o em Tecnologias e Inova\xE7\xF5es Web.","Trabalhei durante mais de 8 anos no ramo financeiro, atuando nas \xE1reas administrativas, organiza\xE7\xE3o de eventos, atendimento de clientes e suporte interno e externo. Em 2018 decidi transformar minha trajet\xF3ria profissional e realizar minha transi\xE7\xE3o de carreira para tecnologia, iniciando minha atua\xE7\xE3o com desenvolvimento web e manuten\xE7\xE3o de sistemas.","Atualmente atuo em projetos corporativos do Ita\xFA, participando da evolu\xE7\xE3o de jornadas modernizadas, implementa\xE7\xE3o de analytics com GA4, documenta\xE7\xE3o t\xE9cnica e melhorias de experi\xEAncia do usu\xE1rio. Tenho experi\xEAncia com Angular, TypeScript, integra\xE7\xE3o com APIs, testes unit\xE1rios, frontend legado e modernizado, al\xE9m de participa\xE7\xE3o em projetos envolvendo modelagem de dados, observabilidade e integra\xE7\xE3o frontend/backend.","Tamb\xE9m venho aprofundando meus conhecimentos em backend, API Gateway e arquitetura de integra\xE7\xE3o entre sistemas. Participei da constru\xE7\xE3o de diagramas e modelagem utilizando DynamoDB e RDS na AWS, contribuindo para organiza\xE7\xE3o de estruturas de dados e evolu\xE7\xE3o de funcionalidades corporativas.","Minha experi\xEAncia anterior na \xE1rea administrativa e financeira fortaleceu habilidades como comunica\xE7\xE3o, organiza\xE7\xE3o, vis\xE3o de neg\xF3cio e trabalho em equipe, que hoje aplico diariamente no desenvolvimento de solu\xE7\xF5es com foco em qualidade, usabilidade e melhoria cont\xEDnua."].join(`

`),location:"Brasil",email:"kellymichelesaavedra@gmail.com",phone:"+55 (11) 96365-5403",linkedin:"https://www.linkedin.com/in/kellysaavedra/",github:"https://github.com/Ksaavedra"},experience:[{company:"Ita\xFA Unibanco",role:"",period:"Out 2021 \u2014 Atualmente \xB7 tempo integral",description:"",subRoles:[{role:"Analista Engenharia de TI JR",period:"Mar 2023 \u2014 Atualmente \xB7 tempo integral",description:["Atuo no desenvolvimento e evolu\xE7\xE3o de projetos corporativos utilizando Angular, TypeScript, HTML, SCSS, integra\xE7\xE3o com APIs REST e moderniza\xE7\xE3o de aplica\xE7\xF5es web.","Em 2026, al\xE9m das atividades no meu time principal, tamb\xE9m passei a apoiar o time Forge em projetos relacionados \xE0 Virtualiza\xE7\xE3o, Performance e IUQuali.","","Atua\xE7\xE3o por projetos:","\u2022 Portal de Massa \u2014 participa\xE7\xE3o na evolu\xE7\xE3o do portal legado e modernizado, incluindo melhorias de frontend, jornadas modernizadas, experi\xEAncia do usu\xE1rio, documenta\xE7\xE3o t\xE9cnica, analytics com GA4, observabilidade, integra\xE7\xE3o frontend/backend e moderniza\xE7\xE3o de telas corporativas.","\u2022 Forge \u2014 Virtualiza\xE7\xE3o \u2014 apoio em iniciativas relacionadas \xE0 virtualiza\xE7\xE3o de servi\xE7os, cria\xE7\xE3o do novo layout da tela de virtualiza\xE7\xE3o, integra\xE7\xE3o com StackSpot e moderniza\xE7\xE3o de fluxos frontend.","\u2022 Forge \u2014 Performance \u2014 atua\xE7\xE3o na integra\xE7\xE3o e chamadas de novas APIs, Graph API no Azure, analytics com GA4, evolu\xE7\xE3o de jornadas frontend corporativas e melhorias de performance de aplica\xE7\xF5es.","\u2022 Forge \u2014 IUQuali \u2014 participa\xE7\xE3o na evolu\xE7\xE3o de jornadas frontend corporativas, implementa\xE7\xE3o de analytics com GA4, melhorias de experi\xEAncia do usu\xE1rio e moderniza\xE7\xE3o de funcionalidades."].join(`
`),highlightsHeading:"Principais conhecimentos e experi\xEAncias:",highlights:["Desenvolvimento frontend corporativo com Angular e TypeScript","Moderniza\xE7\xE3o de sistemas legados e aplica\xE7\xF5es modernizadas","Integra\xE7\xE3o entre frontend, backend e APIs REST","UX, usabilidade e documenta\xE7\xE3o t\xE9cnica","Analytics e implementa\xE7\xE3o de tagueamento com Google Analytics 4 (GA4)","Mapeamento de jornadas do usu\xE1rio e defini\xE7\xE3o de eventos/chaves para GA4","Modelagem de dados relacional (RDS) e NoSQL (DynamoDB)","Modelagem de dados utilizando PowerDesigner","AWS, API Gateway, Graph API (Azure), StackSpot e Terraform","Observabilidade, m\xE9tricas e monitoramento de aplica\xE7\xF5es","Testes unit\xE1rios, qualidade e manuten\xE7\xE3o de c\xF3digo","Sistemas legados utilizando .NET, C# e CSHTML","Ajustes em SharePoint e documenta\xE7\xE3o utilizando Markdown","Apoio em an\xE1lises de backend e banco de dados","Comunica\xE7\xE3o e colabora\xE7\xE3o entre times multidisciplinares","Evolu\xE7\xE3o t\xE9cnica cont\xEDnua e aprendizado constante"],tags:["Angular","TypeScript","GA4","AWS","RDS","DynamoDB","API Gateway","Graph API","Azure","StackSpot","Terraform","REST API","SonarQube","JUnit","Observabilidade"]},{role:"Analista Gest\xE3o de TI JR",period:"Jan 2022 \u2014 Mar 2023 \xB7 tempo integral",description:'Ap\xF3s atuar como Analista Programador Desenvolvedor de TI, fiz a transi\xE7\xE3o para a \xE1rea de gest\xE3o de TI, onde tive a oportunidade de me envolver no projeto de resili\xEAncia do Ita\xFA. Fui respons\xE1vel pela an\xE1lise e desenvolvimento das interfaces de usu\xE1rio para o projeto de "Engenharia do Caos", com foco no frontend para testar a resili\xEAncia dos sistemas do banco. Entre as minhas principais responsabilidades, destaco a cria\xE7\xE3o e desenvolvimento de runbooks, um conjunto de procedimentos documentados para facilitar a execu\xE7\xE3o de testes de estresse e falhas nos sistemas. Esses procedimentos s\xE3o essenciais para garantir a robustez e continuidade das aplica\xE7\xF5es cr\xEDticas do Ita\xFA durante a execu\xE7\xE3o dos testes de resili\xEAncia.',tags:["Angular 13","Amazon RDS","SonarQube","Teste unit\xE1rios (JUnit)","ferramentas de integra\xE7\xE3o cont\xEDnua e an\xE1lise de c\xF3digo."]},{role:"Analista Programa Desenvolvedor de TI",period:"Out 2021 \u2014 Dez 2021 \xB7 tempor\xE1rio",description:"In\xEDcio da carreira no desenvolvimento de solu\xE7\xF5es tecnol\xF3gicas no Ita\xFA, como parte do programa de Forma\xE7\xE3o Tech do banco. Foco no desenvolvimento de cursos internos para a capacita\xE7\xE3o de colaboradores, utilizando tecnologias web modernas para criar interfaces de usu\xE1rio din\xE2micas e responsivas.",tags:["Angular 13","HTML","Javascript","CSS (padr\xE3o de design do Ita\xFA)","ferramentas internas de desenvolvimento do banco."]}]},{company:"Tata Consultancy Services",role:"Analista Desenvolvedor J\xFAnior",period:"Nov 2020 \u2014 Jul 2021 \xB7 9 meses \xB7 tempo integral",description:"An\xE1lise e desenvolvimento das telas para o projeto do LGPD em 10 portais, testes unit\xE1rios, ajustes e melhorias nas plataformas de um grande cliente financeiro.",tags:["Angular 8","JSP","Java","Xml","Jquery","Html","Javascript","Bootstrap","CSS","TortoiseSVN","Virtual Box","Testes unit\xE1rios"]},{company:"Gar\xE7om Digital",role:"Analista Desenvolvedor J\xFAnior",period:"Jun 2020 \u2014 Out 2020 \xB7 5 meses \xB7 freelance",description:"Desenvolvimento de sistemas de card\xE1pio digital, onde o cliente instala o aplicativo e escanea o QRCode disponibilizado na mesa, tem acesso aos valores, card\xE1pios, itens, pode criar o pedido, chamar o gar\xE7om, pedir a conta, adicionar mais itens no pedido, etc.",highlights:["Realizei o desenvolvimento do novo site da empresa em HTML, Javascript, CSS e Bootstrap.","No sistema eu trabalho no frontend, no m\xF3dulo de acompanhamento do pedido, mesas ocupadas, mesas livres, impress\xE3o de Card\xE1pios, impress\xE3o de QRCode, impress\xE3o de contas, impress\xE3o de pedidos, fechamento de contas, fechamento de pedidos."],tags:["AngularJs","Html","Javascript","Bootstrap","FontAwesome","CSS","MongoDB","GraphQL","REST"]},{company:"Casa das Esseciais",role:"Analista Desenvolvedor J\xFAnior",period:"Set 2019 \u2014 Mai 2020 \xB7 9 meses \xB7 tempo integral",description:"Respons\xE1vel pela an\xE1lise e desenvolvimento de novas ferramentas, ajustes e melhorias na plataforma atual do e-commerce desenvolvido com PHP, Angular e MySQL que possui integra\xE7\xF5es com a Cielo, Sistema de Transportadora Jamef e Correios.",highlights:["Monitora\xE7\xE3o do desenvolvimento de funcionalidades da nova plataforma e-commerce, verificando se todas as funcionalidades da plataforma atual est\xE3o sendo desenvolvidas na nova plataforma.","Realiza\xE7\xE3o de testes de comportamento entre as plataformas.","Execu\xE7\xE3o do plano de implanta\xE7\xE3o da nova plataforma."],tags:["PHP","Angular","MySQL","Cielo","Jamef","Correios"]},{company:"Santander Brasil",role:"",period:"Mai 2011 \u2014 Ago 2019 \xB7 8 anos e 4 meses \xB7 tempo integral",description:"",subRoles:[{role:"Assistente de clientes corporativos",period:"Set 2016 \u2014 Ago 2019 \xB7 3 anos \xB7 tempo integral",highlights:["Classifica\xE7\xE3o, sele\xE7\xE3o e an\xFAncios para clientes externos","Atendimento ao cliente via e-mail e chat","Gerenciamento de contatos e suporte \xE0 finaliza\xE7\xE3o de chamados","Reporte di\xE1rio ao gestor da \xE1rea","Elabora\xE7\xE3o de formul\xE1rios e envio de dados computados diariamente"]},{role:"Assistente administrativa",period:"Dez 2011 \u2014 Ago 2016 \xB7 ~4 anos 9 meses \xB7 tempo integral",highlights:["Apoio administrativo e operacional em ambiente banc\xE1rio; organiza\xE7\xE3o de rotinas e suporte a equipes internas"]},{role:"Assistente banc\xE1ria (aprendiz)",period:"Mai 2011 \u2014 Nov 2011 \xB7 7 meses",highlights:["Programa de aprendizagem em opera\xE7\xF5es banc\xE1rias e atendimento."]}],tags:["Excel","Word","PowerPoint","Outlook","Teams","Access","Banco de dados"]}],education:[{institution:"Faculdade Faveni",degree:"P\xF3s-gradua\xE7\xE3o em Tecnologias e Inova\xE7\xF5es Web",period:"Em curso",details:"Aprofundamento em tecnologias e inova\xE7\xE3o aplicadas ao desenvolvimento web."},{institution:"UNIP",degree:"An\xE1lise e Desenvolvimento de Sistemas",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o em tecnologia da informa\xE7\xE3o e desenvolvimento de software."},{institution:"Digital House",degree:"Desenvolvimento Web Full Stack (Java)",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o intensiva em desenvolvimento web full stack."},{institution:"Senai Brasil",degree:"Logica de Programa\xE7\xE3o",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o em L\xF3gica de Programa\xE7\xE3o."},{institution:"Senai Brasil",degree:"Excel Avan\xE7ado",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o em Excel Avan\xE7ado."},{institution:"UNIP",degree:"Bacharelado em Administra\xE7\xE3o",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o em gest\xE3o e neg\xF3cios."},{institution:"Impacta Tecnologia",degree:"Febraban Financials",period:"Conclu\xEDdo",details:"Forma\xE7\xE3o em Febraban Financials."}],skills:["Angular","AngularJS","TypeScript","JavaScript","HTML","SCSS","CSS","Node.js","REST API","Graph API (Azure)","GA4","AWS","API Gateway","DynamoDB","RDS","Terraform","StackSpot","PowerDesigner","Observabilidade","SonarQube","Testes Unit\xE1rios","JUnit","Git","GitHub","Markdown","SharePoint","C#",".NET","CSHTML","Banco de Dados","UX/UI"],projects:[{name:"Site de curr\xEDculo",description:"Portf\xF3lio fullstack com frontend em Angular e API Node.js para formul\xE1rio de contato, incluindo tema escuro, layout responsivo e integra\xE7\xE3o com envio de e-mail.",tech:["Angular","TypeScript","Node.js","Express","REST API"],thumb:"/project-thumb-curriculum.svg",link:"https://github.com/Ksaavedra/curriculum-site",demoUrl:"/"},{name:"API de contato",description:"API REST em Node.js e Express para envio de mensagens do formul\xE1rio de contato, com valida\xE7\xE3o de campos, CORS, Helmet, rate limit e envio por e-mail via SMTP ou Resend.",tech:["Node.js","Express","REST API","Nodemailer","Helmet"],thumb:"/project-thumb-api.svg",link:"https://github.com/Ksaavedra/curriculum-site",status:"Conclu\xEDdo"}]};function Ec(t){return{profile:t.profile,primaryCtas:t.primaryCtas,highlights:t.highlights??[],eyebrow:t.heroEyebrow??"Ol\xE1, sou",highlightsSectionAriaLabel:t.highlightsSectionAriaLabel??"Destaques",resumePdfUrl:t.resumePdfUrl,heroSceneImage:t.heroSceneImage}}var Le=class t{get content(){return Ra}get home(){return Ec(Ra)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};function of(t,i){if(t&1&&(S(0,"p",7),v(1),E()),t&2){let e=i.$implicit,n=i.$index;j("lead",n===0),u(),I(e)}}var Lr=class t{cv=l(Le);profile=this.cv.content.profile;get summaryParagraphs(){return this.profile.summary.split(/\n\n+/).map(i=>i.trim()).filter(Boolean)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-about"]],decls:9,vars:0,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10","cv-page-col"],[1,"cv-section"],["id","page-heading"],[1,"about-summary"],[1,"about-summary__para",3,"lead"],[1,"about-summary__para"]],template:function(e,n){e&1&&(S(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Sobre"),E(),S(6,"div",5),se(7,of,2,3,"p",6,qs),E()()()()()),e&2&&(u(7),le(n.summaryParagraphs))},styles:[".page[_ngcontent-%COMP%]{min-width:0}.about-summary[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cv-space-4)}.about-summary__para[_ngcontent-%COMP%]{margin:0;font-size:var(--cv-type-body);line-height:var(--cv-type-lh-body);color:var(--cv-text);text-align:justify;hyphens:auto;-webkit-hyphens:auto;hyphenate-limit-chars:6 3 3;text-wrap:pretty}.about-summary__para.lead[_ngcontent-%COMP%]{font-size:var(--cv-type-subtitle);line-height:var(--cv-type-lh-body);font-weight:700;color:var(--cv-about-lead)}.meta[_ngcontent-%COMP%]{margin:0}.meta[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{font-size:.75rem;text-transform:uppercase;letter-spacing:.06em;color:var(--cv-muted);margin:0 0 var(--cv-space-1)}.meta[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{margin:0;font-size:1rem}.meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--cv-accent);text-decoration:none}.meta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]})};var Oc=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(K(ve),K(B))};static \u0275dir=A({type:t})}return t})(),af=(()=>{class t extends Oc{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=A({type:t,features:[ae]})}return t})(),Fc=new b("");var sf={provide:Fc,useExisting:zt(()=>qr),multi:!0};function lf(){let t=Qe()?Qe().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var cf=new b(""),qr=(()=>{class t extends Oc{_compositionMode;_composing=!1;constructor(e,n,r){super(e,n),this._compositionMode=r,this._compositionMode==null&&(this._compositionMode=!lf())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(K(ve),K(B),K(cf,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&J("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},standalone:!1,features:[pe([sf]),ae]})}return t})();function La(t){return t==null||ja(t)===0}function ja(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var Ba=new b(""),Va=new b(""),df=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,We=class{static min(i){return uf(i)}static max(i){return mf(i)}static required(i){return hf(i)}static requiredTrue(i){return ff(i)}static email(i){return pf(i)}static minLength(i){return gf(i)}static maxLength(i){return vf(i)}static pattern(i){return bf(i)}static nullValidator(i){return Pc()}static compose(i){return zc(i)}static composeAsync(i){return Uc(i)}};function uf(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e<t?{min:{min:t,actual:i.value}}:null}}function mf(t){return i=>{if(i.value==null||t==null)return null;let e=parseFloat(i.value);return!isNaN(e)&&e>t?{max:{max:t,actual:i.value}}:null}}function hf(t){return La(t.value)?{required:!0}:null}function ff(t){return t.value===!0?null:{required:!0}}function pf(t){return La(t.value)||df.test(t.value)?null:{email:!0}}function gf(t){return i=>{let e=i.value?.length??ja(i.value);return e===null||e===0?null:e<t?{minlength:{requiredLength:t,actualLength:e}}:null}}function vf(t){return i=>{let e=i.value?.length??ja(i.value);return e!==null&&e>t?{maxlength:{requiredLength:t,actualLength:e}}:null}}function bf(t){if(!t)return Pc;let i,e;return typeof t=="string"?(e="",t.charAt(0)!=="^"&&(e+="^"),e+=t,t.charAt(t.length-1)!=="$"&&(e+="$"),i=new RegExp(e)):(e=t.toString(),i=t),n=>{if(La(n.value))return null;let r=n.value;return i.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Pc(t){return null}function Nc(t){return t!=null}function Lc(t){return Xn(t)?Me(t):t}function jc(t){let i={};return t.forEach(e=>{i=e!=null?g(g({},i),e):i}),Object.keys(i).length===0?null:i}function Bc(t,i){return i.map(e=>e(t))}function _f(t){return!t.validate}function Vc(t){return t.map(i=>_f(i)?i:e=>i.validate(e))}function zc(t){if(!t)return null;let i=t.filter(Nc);return i.length==0?null:function(e){return jc(Bc(e,i))}}function za(t){return t!=null?zc(Vc(t)):null}function Uc(t){if(!t)return null;let i=t.filter(Nc);return i.length==0?null:function(e){let n=Bc(e,i).map(Lc);return qi(n).pipe(W(jc))}}function Ua(t){return t!=null?Uc(Vc(t)):null}function Mc(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Hc(t){return t._rawValidators}function $c(t){return t._rawAsyncValidators}function Oa(t){return t?Array.isArray(t)?t:[t]:[]}function Vr(t,i){return Array.isArray(t)?t.includes(i):t===i}function Sc(t,i){let e=Oa(i);return Oa(t).forEach(r=>{Vr(e,r)||e.push(r)}),e}function kc(t,i){return Oa(i).filter(e=>!Vr(t,e))}var zr=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=za(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ua(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control?.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},jt=class extends zr{name;get formDirective(){return null}get path(){return null}},Xt=class extends zr{_parent=null;name=null;valueAccessor=null},Ur=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var Gc=(()=>{class t extends Ur{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(K(Xt,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},standalone:!1,features:[ae]})}return t})(),Wc=(()=>{class t extends Ur{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(K(jt,10))};static \u0275dir=A({type:t,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&j("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},standalone:!1,features:[ae]})}return t})();var ki="VALID",jr="INVALID",Fn="PENDING",Ai="DISABLED",Bt=class{},Hr=class extends Bt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},Ti=class extends Bt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Ri=class extends Bt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},Pn=class extends Bt{status;source;constructor(i,e){super(),this.status=i,this.source=e}},$r=class extends Bt{source;constructor(i){super(),this.source=i}},Oi=class extends Bt{source;constructor(i){super(),this.source=i}};function Ha(t){return(Zr(t)?t.validators:t)||null}function yf(t){return Array.isArray(t)?za(t):t||null}function $a(t,i){return(Zr(i)?i.asyncValidators:t)||null}function xf(t){return Array.isArray(t)?Ua(t):t||null}function Zr(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function qc(t,i,e){let n=t.controls;if(!(i?Object.keys(n):n).length)throw new O(1e3,"");if(!n[e])throw new O(1001,"")}function Zc(t,i,e){t._forEachChild((n,r)=>{if(e[r]===void 0)throw new O(-1002,"")})}var Nn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Q(this.statusReactive)}set status(i){Q(()=>this.statusReactive.set(i))}_status=xe(()=>this.statusReactive());statusReactive=C(void 0);get valid(){return this.status===ki}get invalid(){return this.status===jr}get pending(){return this.status===Fn}get disabled(){return this.status===Ai}get enabled(){return this.status!==Ai}errors;get pristine(){return Q(this.pristineReactive)}set pristine(i){Q(()=>this.pristineReactive.set(i))}_pristine=xe(()=>this.pristineReactive());pristineReactive=C(!0);get dirty(){return!this.pristine}get touched(){return Q(this.touchedReactive)}set touched(i){Q(()=>this.touchedReactive.set(i))}_touched=xe(()=>this.touchedReactive());touchedReactive=C(!1);get untouched(){return!this.touched}_events=new L;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(Sc(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(Sc(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(kc(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(kc(i,this._rawAsyncValidators))}hasValidator(i){return Vr(this._rawValidators,i)}hasAsyncValidator(i){return Vr(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsTouched(ee(g({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Ri(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),i.onlySelf||this._parent?._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Ri(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;i.onlySelf||this._parent?.markAsDirty(ee(g({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Ti(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),i.onlySelf||this._parent?._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new Ti(!0,n))}markAsPending(i={}){this.status=Fn;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Pn(this.status,e)),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.markAsPending(ee(g({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Ai,this.errors=null,this._forEachChild(r=>{r.disable(ee(g({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Hr(this.value,n)),this._events.next(new Pn(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ee(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=ki,this._forEachChild(n=>{n.enable(ee(g({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ee(g({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){i.onlySelf||(this._parent?.updateValueAndValidity(i),i.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===ki||this.status===Fn)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Hr(this.value,e)),this._events.next(new Pn(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),i.onlySelf||this._parent?.updateValueAndValidity(ee(g({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ai:ki}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Fn,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=Lc(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(i,e){let n=e?this.get(e):this;return n?.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new Pn(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new oe,this.statusChanges=new oe}_calculateStatus(){return this._allControlsDisabled()?Ai:this.errors?jr:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Fn)?Fn:this._anyControlsHaveStatus(jr)?jr:ki}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,i.onlySelf||this._parent?._updatePristine(i,e),r&&this._events.next(new Ti(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ri(this.touched,e)),i.onlySelf||this._parent?._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){Zr(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){return!i&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=yf(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=xf(this._rawAsyncValidators)}},Ln=class extends Nn{constructor(i,e,n){super(Ha(e),$a(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(i,e){return this.controls[i]?this.controls[i]:(this.controls[i]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(i,e,n={}){this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(i,e={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(i,e,n={}){this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),delete this.controls[i],e&&this.registerControl(i,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(i){return this.controls.hasOwnProperty(i)&&this.controls[i].enabled}setValue(i,e={}){Zc(this,!0,i),Object.keys(i).forEach(n=>{qc(this,!0,n),this.controls[n].setValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(Object.keys(i).forEach(n=>{let r=this.controls[n];r&&r.patchValue(i[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i={},e={}){this._forEachChild((n,r)=>{n.reset(i?i[r]:null,ee(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Oi(this))}getRawValue(){return this._reduceChildren({},(i,e,n)=>(i[n]=e.getRawValue(),i))}_syncPendingControls(){let i=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&i(n,e)})}_setUpControls(){this._forEachChild(i=>{i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(i){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&i(n))return!0;return!1}_reduceValue(){let i={};return this._reduceChildren(i,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(i,e){let n=i;return this._forEachChild((r,o)=>{n=e(n,r,o)}),n}_allControlsDisabled(){for(let i of Object.keys(this.controls))if(this.controls[i].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(i){return this.controls.hasOwnProperty(i)?this.controls[i]:null}};var Fa=class extends Ln{};var Ga=new b("",{factory:()=>Wa}),Wa="always";function wf(t,i){return[...i.path,t]}function Pa(t,i,e=Wa){qa(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Df(t,i),Mf(t,i),Ef(t,i),Cf(t,i)}function Ac(t,i,e=!0){let n=()=>{};i?.valueAccessor?.registerOnChange(n),i?.valueAccessor?.registerOnTouched(n),Wr(t,i),t&&(i._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function Gr(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Cf(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function qa(t,i){let e=Hc(t);i.validator!==null?t.setValidators(Mc(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=$c(t);i.asyncValidator!==null?t.setAsyncValidators(Mc(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Gr(i._rawValidators,r),Gr(i._rawAsyncValidators,r)}function Wr(t,i){let e=!1;if(t!==null){if(i.validator!==null){let r=Hc(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.validator);o.length!==r.length&&(e=!0,t.setValidators(o))}}if(i.asyncValidator!==null){let r=$c(t);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==i.asyncValidator);o.length!==r.length&&(e=!0,t.setAsyncValidators(o))}}}let n=()=>{};return Gr(i._rawValidators,n),Gr(i._rawAsyncValidators,n),e}function Df(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Yc(t,i)})}function Ef(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Yc(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Yc(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Mf(t,i){let e=(n,r)=>{i.valueAccessor.writeValue(n),r&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Kc(t,i){t==null,qa(t,i)}function Sf(t,i){return Wr(t,i)}function kf(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Af(t){return Object.getPrototypeOf(t.constructor)===af}function Qc(t,i){t._syncPendingControls(),i.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function If(t,i){if(!i)return null;Array.isArray(i);let e,n,r;return i.forEach(o=>{o.constructor===qr?e=o:Af(o)?n=o:r=o}),r||n||e||null}function Tf(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}var Rf={provide:jt,useExisting:zt(()=>Za)},Ii=Promise.resolve(),Za=(()=>{class t extends jt{callSetDisabledState;get submitted(){return Q(this.submittedReactive)}_submitted=xe(()=>this.submittedReactive());submittedReactive=C(!1);_directives=new Set;form;ngSubmit=new oe;options;constructor(e,n,r){super(),this.callSetDisabledState=r,this.form=new Ln({},za(e),Ua(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Ii.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),Pa(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Ii.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Ii.then(()=>{let n=this._findContainer(e.path),r=new Ln({});Kc(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Ii.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){Ii.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Qc(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new $r(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(n){return new(n||t)(K(Ba,10),K(Va,10),K(Ga,8))};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&J("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([Rf]),ae]})}return t})();function Ic(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function Tc(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Br=class extends Nn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Ha(e),$a(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Zr(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Tc(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Oi(this))}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){Ic(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){Ic(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){Tc(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var Of=t=>t instanceof Br;var Xc=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return t})();var Na=class extends Nn{constructor(i,e,n){super(Ha(e),$a(n,e)),this.controls=i,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(i){return this.controls[this._adjustIndex(i)]}push(i,e={}){Array.isArray(i)?i.forEach(n=>{this.controls.push(n),this._registerControl(n)}):(this.controls.push(i),this._registerControl(i)),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(i,e,n={}){this.controls.splice(i,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(i,e={}){let n=this._adjustIndex(i);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(i,e,n={}){let r=this._adjustIndex(i);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(i,e={}){Zc(this,!1,i),i.forEach((n,r)=>{qc(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(i,e={}){i!=null&&(i.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(i=[],e={}){this._forEachChild((n,r)=>{n.reset(i[r],ee(g({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Oi(this))}getRawValue(){return this.controls.map(i=>i.getRawValue())}clear(i={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:i.emitEvent}))}_adjustIndex(i){return i<0?i+this.length:i}_syncPendingControls(){let i=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return i&&this.updateValueAndValidity({onlySelf:!0}),i}_forEachChild(i){this.controls.forEach((e,n)=>{i(e,n)})}_updateValue(){this.value=this.controls.filter(i=>i.enabled||this.disabled).map(i=>i.value)}_anyControls(i){return this.controls.some(e=>e.enabled&&i(e))}_setUpControls(){this._forEachChild(i=>this._registerControl(i))}_allControlsDisabled(){for(let i of this.controls)if(i.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(i){i.setParent(this),i._registerOnCollectionChange(this._onCollectionChange)}_find(i){return this.at(i)??null}};var Ff=(()=>{class t extends jt{callSetDisabledState;get submitted(){return Q(this._submittedReactive)}set submitted(e){this._submittedReactive.set(e)}_submitted=xe(()=>this._submittedReactive());_submittedReactive=C(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,n,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this.onChanges(e)}ngOnDestroy(){this.onDestroy()}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}onDestroy(){this.form&&(Wr(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get path(){return[]}addControl(e){let n=this.form.get(e.path);return Pa(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){Ac(e.control||null,e,!1),Tf(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}getFormArray(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}updateModel(e,n){this.form.get(e.path).setValue(n)}onReset(){this.resetForm()}resetForm(e=void 0,n={}){this.form.reset(e,n),this._submittedReactive.set(!1)}onSubmit(e){return this.submitted=!0,Qc(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new $r(this.control)),e?.target?.method==="dialog"}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(Ac(n||null,e),Of(r)&&(Pa(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Kc(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){let n=this.form?.get(e.path);n&&Sf(n,e)&&n.updateValueAndValidity({emitEvent:!1})}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{})}_updateValidators(){qa(this.form,this),this._oldForm&&Wr(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(n){return new(n||t)(K(Ba,10),K(Va,10),K(Ga,8))};static \u0275dir=A({type:t,features:[ae,Ae]})}return t})();var Jc=new b("");var Pf={provide:Xt,useExisting:zt(()=>Ya)},Ya=(()=>{class t extends Xt{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(e){}model;update=new oe;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,n,r,o,a){super(),this._ngModelWarningConfig=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=If(this,o)}ngOnChanges(e){this._added||this._setUpControl(),kf(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective?.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return wf(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_setUpControl(){this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(n){return new(n||t)(K(jt,13),K(Ba,10),K(Va,10),K(Fc,10),K(Jc,8))};static \u0275dir=A({type:t,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[pe([Pf]),ae,Ae]})}return t})();var Nf={provide:jt,useExisting:zt(()=>Fi)},Fi=(()=>{class t extends Ff{form=null;ngSubmit=new oe;get control(){return this.form}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&J("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([Nf]),ae]})}return t})();var Lf=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({})}return t})();function Rc(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var ed=(()=>{class t{useNonNullable=!1;get nonNullable(){let e=new t;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),o={};return Rc(n)?o=n:n!==null&&(o.validators=n.validator,o.asyncValidators=n.asyncValidator),new Ln(r,o)}record(e,n=null){let r=this._reduceControls(e);return new Fa(r,n)}control(e,n,r){let o={};return this.useNonNullable?(Rc(n)?o=n:(o.validators=n,o.asyncValidators=r),new Br(e,ee(g({},o),{nonNullable:!0}))):new Br(e,n,r)}array(e,n,r){let o=e.map(a=>this._createControl(a));return new Na(o,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof Br)return e;if(e instanceof Nn)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,o=e.length>2?e[2]:null;return this.control(n,r,o)}else return this.control(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var td=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Jc,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:Ga,useValue:e.callSetDisabledState??Wa}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[Lf]})}return t})();function Pi(t){return t.buttons===0||t.detail===0}function Ni(t){let i=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!i&&i.identifier===-1&&(i.radiusX==null||i.radiusX===1)&&(i.radiusY==null||i.radiusY===1)}var Ka;function nd(){if(Ka==null){let t=typeof document<"u"?document.head:null;Ka=!!(t&&(t.createShadowRoot||t.attachShadow))}return Ka}function Qa(t){if(nd()){let i=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&i instanceof ShadowRoot)return i}return null}function rt(t){return t.composedPath?t.composedPath()[0]:t.target}var Xa;try{Xa=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Xa=!1}var ne=(()=>{class t{_platformId=l(At);isBrowser=this._platformId?vn(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Xa)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Li;function id(){if(Li==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Li=!0}))}finally{Li=Li||!1}return Li}function jn(t){return id()?t:!!t.capture}function mt(t,i=0){return rd(t)?Number(t):arguments.length===2?i:0}function rd(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function Te(t){return t instanceof B?t.nativeElement:t}var od=new b("cdk-input-modality-detector-options"),ad={ignoreKeys:[18,17,224,91,16]},sd=650,Ja={passive:!0,capture:!0},ld=(()=>{class t{_platform=l(ne);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Oe(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(n=>n===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=rt(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<sd||(this._modality.next(Pi(e)?"keyboard":"mouse"),this._mostRecentTarget=rt(e))};_onTouchstart=e=>{if(Ni(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=rt(e)};constructor(){let e=l(N),n=l(F),r=l(od,{optional:!0});if(this._options=g(g({},ad),r),this.modalityDetected=this._modality.pipe(Ss(1)),this.modalityChanged=this.modalityDetected.pipe(ko()),this._platform.isBrowser){let o=l(ze).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(n,"keydown",this._onKeydown,Ja),o.listen(n,"mousedown",this._onMousedown,Ja),o.listen(n,"touchstart",this._onTouchstart,Ja)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),ji=(function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t})(ji||{}),cd=new b("cdk-focus-monitor-default-options"),Yr=jn({passive:!0,capture:!0}),Bi=(()=>{class t{_ngZone=l(N);_platform=l(ne);_inputModalityDetector=l(ld);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=l(F);_stopInputModalityDetector=new L;constructor(){let e=l(cd,{optional:!0});this._detectionMode=e?.detectionMode||ji.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let n=rt(e);for(let r=n;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r)};monitor(e,n=!1){let r=Te(e);if(!this._platform.isBrowser||r.nodeType!==1)return k();let o=Qa(r)||this._document,a=this._elementInfo.get(r);if(a)return n&&(a.checkChildren=!0),a.subject;let s={checkChildren:n,subject:new L,rootNode:o};return this._elementInfo.set(r,s),this._registerGlobalListeners(s),s.subject}stopMonitoring(e){let n=Te(e),r=this._elementInfo.get(n);r&&(r.subject.complete(),this._setClasses(n),this._elementInfo.delete(n),this._removeGlobalListeners(r))}focusVia(e,n,r){let o=Te(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([s,c])=>this._originChanged(s,n,c)):(this._setOrigin(n),typeof o.focus=="function"&&o.focus(r))}ngOnDestroy(){this._elementInfo.forEach((e,n)=>this.stopMonitoring(n))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===ji.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,n){e.classList.toggle("cdk-focused",!!n),e.classList.toggle("cdk-touch-focused",n==="touch"),e.classList.toggle("cdk-keyboard-focused",n==="keyboard"),e.classList.toggle("cdk-mouse-focused",n==="mouse"),e.classList.toggle("cdk-program-focused",n==="program")}_setOrigin(e,n=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&n,this._detectionMode===ji.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?sd:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r)}})}_onFocus(e,n){let r=this._elementInfo.get(n),o=rt(e);!r||!r.checkChildren&&n!==o||this._originChanged(n,this._getFocusOrigin(o),r)}_onBlur(e,n){let r=this._elementInfo.get(n);!r||r.checkChildren&&e.relatedTarget instanceof Node&&n.contains(e.relatedTarget)||(this._setClasses(n),this._emitOrigin(r,null))}_emitOrigin(e,n){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(n))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let n=e.rootNode,r=this._rootNodeFocusListenerCount.get(n)||0;r||this._ngZone.runOutsideAngular(()=>{n.addEventListener("focus",this._rootNodeFocusAndBlurListener,Yr),n.addEventListener("blur",this._rootNodeFocusAndBlurListener,Yr)}),this._rootNodeFocusListenerCount.set(n,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ce(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let n=e.rootNode;if(this._rootNodeFocusListenerCount.has(n)){let r=this._rootNodeFocusListenerCount.get(n);r>1?this._rootNodeFocusListenerCount.set(n,r-1):(n.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Yr),n.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Yr),this._rootNodeFocusListenerCount.delete(n))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,n,r){this._setClasses(e,n),this._emitOrigin(r,n),this._lastFocusOrigin=n}_getClosestElementsInfo(e){let n=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&n.push([o,r])}),n}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:n,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!n||n===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(n))return!0}return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Kr=new WeakMap,ot=(()=>{class t{_appRef;_injector=l(de);_environmentInjector=l(Be);load(e){let n=this._appRef=this._appRef||this._injector.get($t),r=Kr.get(n);r||(r={loaders:new Set,refs:[]},Kr.set(n,r),n.onDestroy(()=>{Kr.get(n)?.refs.forEach(o=>o.destroy()),Kr.delete(n)})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(il(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var dd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(n,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return t})(),Qr;function Bf(){if(Qr===void 0&&(Qr=null,typeof window<"u")){let t=window;t.trustedTypes!==void 0&&(Qr=t.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return Qr}function Bn(t){return Bf()?.createHTML(t)||t}var ud=new Set,Jt,es=(()=>{class t{_platform=l(ne);_nonce=l(ln,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):zf}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Vf(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function Vf(t,i){if(!ud.has(t))try{Jt||(Jt=document.createElement("style"),i&&Jt.setAttribute("nonce",i),Jt.setAttribute("type","text/css"),document.head.appendChild(Jt)),Jt.sheet&&(Jt.sheet.insertRule(`@media ${t} {body{ }}`,0),ud.add(t))}catch(e){console.error(e)}}function zf(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}function Uf(t){if(t.type==="characterData"&&t.target instanceof Comment)return!0;if(t.type==="childList"){for(let i=0;i<t.addedNodes.length;i++)if(!(t.addedNodes[i]instanceof Comment))return!1;for(let i=0;i<t.removedNodes.length;i++)if(!(t.removedNodes[i]instanceof Comment))return!1;return!0}return!1}var md=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Hf=(()=>{class t{_mutationObserverFactory=l(md);_observedElements=new Map;_ngZone=l(N);constructor(){}ngOnDestroy(){this._observedElements.forEach((e,n)=>this._cleanupObserver(n))}observe(e){let n=Te(e);return new qe(r=>{let a=this._observeElement(n).pipe(W(s=>s.filter(c=>!Uf(c))),re(s=>!!s.length)).subscribe(s=>{this._ngZone.run(()=>{r.next(s)})});return()=>{a.unsubscribe(),this._unobserveElement(n)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let n=new L,r=this._mutationObserverFactory.create(o=>n.next(o));r&&r.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:r,stream:n,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:n,stream:r}=this._observedElements.get(e);n&&n.disconnect(),r.complete(),this._observedElements.delete(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),hd=(()=>{class t{_contentObserver=l(Hf);_elementRef=l(B);event=new oe;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=mt(e),this._subscribe()}_debounce;_currentSubscription=null;constructor(){}ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(Zi(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdkObserveContent",""]],inputs:{disabled:[2,"cdkObserveContentDisabled","disabled",be],debounce:"debounce"},outputs:{event:"cdkObserveContent"},exportAs:["cdkObserveContent"]})}return t})(),Xr=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({providers:[md]})}return t})();var eo=(()=>{class t{_platform=l(ne);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Gf(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let n=$f(Jf(e));if(n&&(fd(n)===-1||!this.isVisible(n)))return!1;let r=e.nodeName.toLowerCase(),o=fd(e);return e.hasAttribute("contenteditable")?o!==-1:r==="iframe"||r==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Qf(e)?!1:r==="audio"?e.hasAttribute("controls")?o!==-1:!1:r==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,n){return Xf(e)&&!this.isDisabled(e)&&(n?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $f(t){try{return t.frameElement}catch{return null}}function Gf(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Wf(t){let i=t.nodeName.toLowerCase();return i==="input"||i==="select"||i==="button"||i==="textarea"}function qf(t){return Yf(t)&&t.type=="hidden"}function Zf(t){return Kf(t)&&t.hasAttribute("href")}function Yf(t){return t.nodeName.toLowerCase()=="input"}function Kf(t){return t.nodeName.toLowerCase()=="a"}function pd(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let i=t.getAttribute("tabindex");return!!(i&&!isNaN(parseInt(i,10)))}function fd(t){if(!pd(t))return null;let i=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(i)?-1:i}function Qf(t){let i=t.nodeName.toLowerCase(),e=i==="input"&&t.type;return e==="text"||e==="password"||i==="select"||i==="textarea"}function Xf(t){return qf(t)?!1:Wf(t)||Zf(t)||t.hasAttribute("contenteditable")||pd(t)}function Jf(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var Jr=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(i){this._enabled=i,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_enabled=!0;constructor(i,e,n,r,o=!1,a){this._element=i,this._checker=e,this._ngZone=n,this._document=r,this._injector=a,o||this.attachAnchors()}destroy(){let i=this._startAnchor,e=this._endAnchor;i&&(i.removeEventListener("focus",this.startAnchorListener),i.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(i)))})}focusFirstTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(i)))})}focusLastTabbableElementWhenReady(i){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(i)))})}_getRegionBoundary(i){let e=this._element.querySelectorAll(`[cdk-focus-region-${i}], [cdkFocusRegion${i}], [cdk-focus-${i}]`);return i=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(i){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let n=this._getFirstTabbableElement(e);return n?.focus(i),!!n}return e.focus(i),!0}return this.focusFirstTabbableElement(i)}focusFirstTabbableElement(i){let e=this._getRegionBoundary("start");return e&&e.focus(i),!!e}focusLastTabbableElement(i){let e=this._getRegionBoundary("end");return e&&e.focus(i),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=0;n<e.length;n++){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[n]):null;if(r)return r}return null}_getLastTabbableElement(i){if(this._checker.isFocusable(i)&&this._checker.isTabbable(i))return i;let e=i.children;for(let n=e.length-1;n>=0;n--){let r=e[n].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[n]):null;if(r)return r}return null}_createAnchor(){let i=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,i),i.classList.add("cdk-visually-hidden"),i.classList.add("cdk-focus-trap-anchor"),i.setAttribute("aria-hidden","true"),i}_toggleAnchorTabIndex(i,e){i?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(i){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(i,this._startAnchor),this._toggleAnchorTabIndex(i,this._endAnchor))}_executeOnStable(i){this._injector?bt(i,{injector:this._injector}):setTimeout(i)}},ts=(()=>{class t{_checker=l(eo);_ngZone=l(N);_document=l(F);_injector=l(de);constructor(){l(ot).load(dd)}create(e,n=!1){return new Jr(e,this._checker,this._ngZone,this._document,n,this._injector)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function gd(t,...i){return i.length?i.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var ns={},Et=class t{_appId=l(Yn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(i,e=!1){return this._appId!=="ng"&&(i+=this._appId),ns.hasOwnProperty(i)||(ns[i]=0),`${i}${e?t._infix+"-":""}${ns[i]++}`}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};var at=(function(t){return t[t.NORMAL=0]="NORMAL",t[t.NEGATED=1]="NEGATED",t[t.INVERTED=2]="INVERTED",t})(at||{}),to,en;function vd(){if(en==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return en=!1,en;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)en=!0;else{let t=Element.prototype.scrollTo;t?en=!/\{\s*\[native code\]\s*\}/.test(t.toString()):en=!1}}return en}function Vn(){if(typeof document!="object"||!document)return at.NORMAL;if(to==null){let t=document.createElement("div"),i=t.style;t.dir="rtl",i.width="1px",i.overflow="auto",i.visibility="hidden",i.pointerEvents="none",i.position="absolute";let e=document.createElement("div"),n=e.style;n.width="2px",n.height="1px",t.appendChild(e),document.body.appendChild(t),to=at.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,to=t.scrollLeft===0?at.NEGATED:at.INVERTED),t.remove()}return to}var zn,bd=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function is(){if(zn)return zn;if(typeof document!="object"||!document)return zn=new Set(bd),zn;let t=document.createElement("input");return zn=new Set(bd.filter(i=>(t.setAttribute("type",i),t.type===i))),zn}var tp=new b("MATERIAL_ANIMATIONS"),_d=null;function np(){return l(tp,{optional:!0})?.animationsDisabled||l(Yi,{optional:!0})==="NoopAnimations"?"di-disabled":(_d??=l(es).matchMedia("(prefers-reduced-motion)").matches,_d?"reduced-motion":"enabled")}function ht(){return np()!=="enabled"}function _e(t){return t!=null&&`${t}`!="false"}var Je=(function(t){return t[t.FADING_IN=0]="FADING_IN",t[t.VISIBLE=1]="VISIBLE",t[t.FADING_OUT=2]="FADING_OUT",t[t.HIDDEN=3]="HIDDEN",t})(Je||{}),rs=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Je.HIDDEN;constructor(i,e,n,r=!1){this._renderer=i,this.element=e,this.config=n,this._animationForciblyDisabledThroughCss=r}fadeOut(){this._renderer.fadeOutRipple(this)}},yd=jn({passive:!0,capture:!0}),os=class{_events=new Map;addHandler(i,e,n,r){let o=this._events.get(e);if(o){let a=o.get(n);a?a.add(r):o.set(n,new Set([r]))}else this._events.set(e,new Map([[n,new Set([r])]])),i.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,yd)})}removeHandler(i,e,n){let r=this._events.get(i);if(!r)return;let o=r.get(e);o&&(o.delete(n),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(i),document.removeEventListener(i,this._delegateEventHandler,yd)))}_delegateEventHandler=i=>{let e=rt(i);e&&this._events.get(i.type)?.forEach((n,r)=>{(r===e||r.contains(e))&&n.forEach(o=>o.handleEvent(i))})}},Vi={enterDuration:225,exitDuration:150},ip=800,xd=jn({passive:!0,capture:!0}),wd=["mousedown","touchstart"],Cd=["mouseup","mouseleave","touchend","touchcancel"],rp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return t})(),Un=class t{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new os;constructor(i,e,n,r,o){this._target=i,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=Te(n)),o&&o.get(ot).load(rp)}fadeInRipple(i,e,n={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=g(g({},Vi),n.animation);n.centered&&(i=r.left+r.width/2,e=r.top+r.height/2);let a=n.radius||op(i,e,r),s=i-r.left,c=e-r.top,d=o.enterDuration,f=document.createElement("div");f.classList.add("mat-ripple-element"),f.style.left=`${s-a}px`,f.style.top=`${c-a}px`,f.style.height=`${a*2}px`,f.style.width=`${a*2}px`,n.color!=null&&(f.style.backgroundColor=n.color),f.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(f);let _=window.getComputedStyle(f),$=_.transitionProperty,Ce=_.transitionDuration,he=$==="none"||Ce==="0s"||Ce==="0s, 0s"||r.width===0&&r.height===0,ue=new rs(this,f,n,he);f.style.transform="scale3d(1, 1, 1)",ue.state=Je.FADING_IN,n.persistent||(this._mostRecentTransientRipple=ue);let G=null;return!he&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Y=()=>{G&&(G.fallbackTimer=null),clearTimeout(Re),this._finishRippleTransition(ue)},fe=()=>this._destroyRipple(ue),Re=setTimeout(fe,d+100);f.addEventListener("transitionend",Y),f.addEventListener("transitioncancel",fe),G={onTransitionEnd:Y,onTransitionCancel:fe,fallbackTimer:Re}}),this._activeRipples.set(ue,G),(he||!d)&&this._finishRippleTransition(ue),ue}fadeOutRipple(i){if(i.state===Je.FADING_OUT||i.state===Je.HIDDEN)return;let e=i.element,n=g(g({},Vi),i.config.animation);e.style.transitionDuration=`${n.exitDuration}ms`,e.style.opacity="0",i.state=Je.FADING_OUT,(i._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(i)}fadeOutAll(){this._getActiveRipples().forEach(i=>i.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(i=>{i.config.persistent||i.fadeOut()})}setupTriggerEvents(i){let e=Te(i);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,wd.forEach(n=>{t._eventManager.addHandler(this._ngZone,n,e,this)}))}handleEvent(i){i.type==="mousedown"?this._onMousedown(i):i.type==="touchstart"?this._onTouchStart(i):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Cd.forEach(e=>{this._triggerElement.addEventListener(e,this,xd)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(i){i.state===Je.FADING_IN?this._startFadeOutTransition(i):i.state===Je.FADING_OUT&&this._destroyRipple(i)}_startFadeOutTransition(i){let e=i===this._mostRecentTransientRipple,{persistent:n}=i.config;i.state=Je.VISIBLE,!n&&(!e||!this._isPointerDown)&&i.fadeOut()}_destroyRipple(i){let e=this._activeRipples.get(i)??null;this._activeRipples.delete(i),this._activeRipples.size||(this._containerRect=null),i===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),i.state=Je.HIDDEN,e!==null&&(i.element.removeEventListener("transitionend",e.onTransitionEnd),i.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),i.element.remove()}_onMousedown(i){let e=Pi(i),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+ip;!this._target.rippleDisabled&&!e&&!n&&(this._isPointerDown=!0,this.fadeInRipple(i.clientX,i.clientY,this._target.rippleConfig))}_onTouchStart(i){if(!this._target.rippleDisabled&&!Ni(i)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=i.changedTouches;if(e)for(let n=0;n<e.length;n++)this.fadeInRipple(e[n].clientX,e[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(i=>{let e=i.state===Je.VISIBLE||i.config.terminateOnPointerUp&&i.state===Je.FADING_IN;!i.config.persistent&&e&&i.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let i=this._triggerElement;i&&(wd.forEach(e=>t._eventManager.removeHandler(e,i,this)),this._pointerUpEventsRegistered&&(Cd.forEach(e=>i.removeEventListener(e,this,xd)),this._pointerUpEventsRegistered=!1))}};function op(t,i,e){let n=Math.max(Math.abs(t-e.left),Math.abs(t-e.right)),r=Math.max(Math.abs(i-e.top),Math.abs(i-e.bottom));return Math.sqrt(n*n+r*r)}var no=new b("mat-ripple-global-options");var ap={capture:!0},sp=["focus","mousedown","mouseenter","touchstart"],as="mat-ripple-loader-uninitialized",ss="mat-ripple-loader-class-name",Dd="mat-ripple-loader-centered",io="mat-ripple-loader-disabled",Ed=(()=>{class t{_document=l(F);_animationsDisabled=ht();_globalRippleOptions=l(no,{optional:!0});_platform=l(ne);_ngZone=l(N);_injector=l(de);_eventCleanups;_hosts=new Map;constructor(){let e=l(ze).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>sp.map(n=>e.listen(this._document,n,this._onInteraction,ap)))}ngOnDestroy(){let e=this._hosts.keys();for(let n of e)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(e,n){e.setAttribute(as,this._globalRippleOptions?.namespace??""),(n.className||!e.hasAttribute(ss))&&e.setAttribute(ss,n.className||""),n.centered&&e.setAttribute(Dd,""),n.disabled&&e.setAttribute(io,"")}setDisabled(e,n){let r=this._hosts.get(e);r?(r.target.rippleDisabled=n,!n&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):n?e.setAttribute(io,""):e.removeAttribute(io)}_onInteraction=e=>{let n=rt(e);if(n instanceof HTMLElement){let r=n.closest(`[${as}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let n=this._document.createElement("span");n.classList.add("mat-ripple",e.getAttribute(ss)),e.append(n);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??Vi.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??Vi.exitDuration,s={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(io),rippleConfig:{centered:e.hasAttribute(Dd),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new Un(s,this._ngZone,n,this._platform,this._injector),d=!s.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:s,renderer:c,hasSetUpEvents:d}),e.removeAttribute(as)}destroyRipple(e){let n=this._hosts.get(e);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ro=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["structural-styles"]],decls:0,vars:0,template:function(n,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var lp=["mat-icon-button",""],cp=["*"],dp=new b("MAT_BUTTON_CONFIG");function Md(t){return t==null?void 0:tl(t)}var ls=(()=>{class t{_elementRef=l(B);_ngZone=l(N);_animationsDisabled=ht();_config=l(dp,{optional:!0});_focusMonitor=l(Bi);_cleanupClick;_renderer=l(ve);_rippleLoader=l(Ed);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){l(ot).load(ro);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",n){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(n,r){n&2&&(q("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),Tt(r.color?"mat-"+r.color:""),j("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",be],disabled:[2,"disabled","disabled",be],ariaDisabled:[2,"aria-disabled","ariaDisabled",be],disabledInteractive:[2,"disabledInteractive","disabledInteractive",be],tabIndex:[2,"tabIndex","tabIndex",Md],_tabindex:[2,"tabindex","_tabindex",Md]}})}return t})(),cs=(()=>{class t extends ls{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[ae],attrs:lp,ngContentSelectors:cp,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(me(),ie(0,"span",0),P(1),ie(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var up=new b("cdk-dir-doc",{providedIn:"root",factory:()=>l(F)}),mp=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Sd(t){let i=t?.toLowerCase()||"";return i==="auto"&&typeof navigator<"u"&&navigator?.language?mp.test(navigator.language)?"rtl":"ltr":i==="rtl"?"rtl":"ltr"}var tn=(()=>{class t{get value(){return this.valueSignal()}valueSignal=C("ltr");change=new oe;constructor(){let e=l(up,{optional:!0});if(e){let n=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Sd(n||r||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var ge=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({})}return t})();var oo=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ge]})}return t})();var hp=["matButton",""],fp=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],pp=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var kd=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ad=(()=>{class t extends ls{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=gp(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let n=this._elementRef.nativeElement.classList,r=this._appearance?kd.get(this._appearance):null,o=kd.get(e);r&&n.remove(...r),n.add(...o),this._appearance=e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[ae],attrs:hp,ngContentSelectors:pp,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(n,r){n&1&&(me(fp),ie(0,"span",0),P(1),S(2,"span",1),P(3,1),E(),P(4,2),ie(5,"span",2)(6,"span",3)),n&2&&j("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return t})();function gp(t){return t.hasAttribute("mat-raised-button")?"elevated":t.hasAttribute("mat-stroked-button")?"outlined":t.hasAttribute("mat-flat-button")?"filled":t.hasAttribute("mat-button")?"text":null}var ao=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[oo,ge]})}return t})();var ds=class{_box;_destroyed=new L;_resizeSubject=new L;_resizeObserver;_elementObservables=new Map;constructor(i){this._box=i,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(i){return this._elementObservables.has(i)||this._elementObservables.set(i,new qe(e=>{let n=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(i,{box:this._box}),()=>{this._resizeObserver?.unobserve(i),n.unsubscribe(),this._elementObservables.delete(i)}}).pipe(re(e=>e.some(n=>n.target===i)),To({bufferSize:1,refCount:!0}),ce(this._destroyed))),this._elementObservables.get(i)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Td=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=l(N);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,n){let r=n?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new ds(r)),this._observers.get(r).observe(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vp=["notch"],bp=["matFormFieldNotchedOutline",""],_p=["*"],Rd=["iconPrefixContainer"],Od=["textPrefixContainer"],Fd=["iconSuffixContainer"],Pd=["textSuffixContainer"],yp=["textField"],xp=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],wp=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Cp(t,i){t&1&&Z(0,"span",21)}function Dp(t,i){if(t&1&&(m(0,"label",20),P(1,1),y(2,Cp,1,0,"span",21),h()),t&2){let e=w(2);te("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),q("for",e._control.disableAutomaticLabeling?null:e._control.id),u(2),x(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Ep(t,i){if(t&1&&y(0,Dp,3,5,"label",20),t&2){let e=w();x(e._hasFloatingLabel()?0:-1)}}function Mp(t,i){t&1&&Z(0,"div",7)}function Sp(t,i){}function kp(t,i){if(t&1&&Qn(0,Sp,0,0,"ng-template",13),t&2){w(2);let e=mn(1);te("ngTemplateOutlet",e)}}function Ap(t,i){if(t&1&&(m(0,"div",9),y(1,kp,1,1,null,13),h()),t&2){let e=w();te("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),u(),x(e._forceDisplayInfixLabel()?-1:1)}}function Ip(t,i){t&1&&(m(0,"div",10,2),P(2,2),h())}function Tp(t,i){t&1&&(m(0,"div",11,3),P(2,3),h())}function Rp(t,i){}function Op(t,i){if(t&1&&Qn(0,Rp,0,0,"ng-template",13),t&2){w();let e=mn(1);te("ngTemplateOutlet",e)}}function Fp(t,i){t&1&&(m(0,"div",14,4),P(2,4),h())}function Pp(t,i){t&1&&(m(0,"div",15,5),P(2,5),h())}function Np(t,i){t&1&&Z(0,"div",16)}function Lp(t,i){t&1&&(m(0,"div",18),P(1,6),h())}function jp(t,i){if(t&1&&(m(0,"mat-hint",22),v(1),h()),t&2){let e=w(2);te("id",e._hintLabelId),u(),I(e.hintLabel)}}function Bp(t,i){if(t&1&&(m(0,"div",19),y(1,jp,2,2,"mat-hint",22),P(2,7),Z(3,"div",23),P(4,8),h()),t&2){let e=w();u(),x(e.hintLabel?1:-1)}}var zi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-label"]]})}return t})(),Ud=new b("MatError"),us=(()=>{class t{id=l(Et).getId("mat-mdc-error-");constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-error"],["","matError",""]],hostAttrs:[1,"mat-mdc-form-field-error","mat-mdc-form-field-bottom-align"],hostVars:1,hostBindings:function(n,r){n&2&&Jn("id",r.id)},inputs:{id:"id"},features:[pe([{provide:Ud,useExisting:t}])]})}return t})(),Ui=(()=>{class t{align="start";id=l(Et).getId("mat-mdc-hint-");static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(n,r){n&2&&(Jn("id",r.id),q("align",null),j("mat-mdc-form-field-hint-end",r.align==="end"))},inputs:{align:"align",id:"id"}})}return t})(),Vp=new b("MatPrefix");var zp=new b("MatSuffix");var Hd=new b("FloatingLabelParent"),Nd=(()=>{class t{_elementRef=l(B);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=l(Td);_ngZone=l(N);_parent=l(Hd);_resizeSubscription=new pt;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Up(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(n,r){n&2&&j("mdc-floating-label--float-above",r.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return t})();function Up(t){let i=t;if(i.offsetParent!==null)return i.scrollWidth;let e=i.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let n=e.scrollWidth;return e.remove(),n}var Ld="mdc-line-ripple--active",so="mdc-line-ripple--deactivating",jd=(()=>{class t{_elementRef=l(B);_cleanupTransitionEnd;constructor(){let e=l(N),n=l(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=n.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(so),e.add(Ld)}deactivate(){this._elementRef.nativeElement.classList.add(so)}_handleTransitionEnd=e=>{let n=this._elementRef.nativeElement.classList,r=n.contains(so);e.propertyName==="opacity"&&r&&n.remove(Ld,so)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return t})(),Bd=(()=>{class t{_elementRef=l(B);_ngZone=l(N);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,n=e.querySelector(".mdc-floating-label");n?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(n.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>n.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let n=this._notch.nativeElement;!this.open||!e?n.style.width="":n.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(n,r){if(n&1&&nt(vp,5),n&2){let o;U(o=H())&&(r._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(n,r){n&2&&j("mdc-notched-outline--notched",r.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:bp,ngContentSelectors:_p,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(n,r){n&1&&(me(),ie(0,"div",1),S(1,"div",2,0),P(3),E(),ie(4,"div",3))},encapsulation:2,changeDetection:0})}return t})(),ms=(()=>{class t{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t})}return t})();var hs=new b("MatFormField"),Hp=new b("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Vd="fill",$p="auto",zd="fixed",Gp="translateY(-50%)",lo=(()=>{class t{_elementRef=l(B);_changeDetectorRef=l(Ne);_platform=l(ne);_idGenerator=l(Et);_ngZone=l(N);_defaults=l(Hp,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=ei("iconPrefixContainer");_textPrefixContainerSignal=ei("textPrefixContainer");_iconSuffixContainerSignal=ei("iconSuffixContainer");_textSuffixContainerSignal=ei("textSuffixContainer");_prefixSuffixContainers=xe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Js(zi);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=_e(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||$p}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let n=e||this._defaults?.appearance||Vd;this._appearanceSignal.set(n)}_appearanceSignal=C(Vd);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||zd}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||zd}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new L;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ht();constructor(){let e=this._defaults,n=l(tn);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),sn(()=>this._currentDirection=n.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=xe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let n=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),n.controlType&&this._elementRef.nativeElement.classList.add(r+n.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=n.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=n.stateChanges.pipe(kt([void 0,void 0]),W(()=>[n.errorState,n.userAriaDescribedBy]),Io(),re(([[o,a],[s,c]])=>o!==s||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),n.ngControl&&n.ngControl.valueChanges&&(this._valueChanges=n.ngControl.valueChanges.pipe(ce(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),nn(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){nl({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=xe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let n=this._control?this._control.ngControl:null;return n&&n[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(s=>s.align==="start"):null,a=this._hintChildren?this._hintChildren.find(s=>s.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let n=this._control.describedByIds,r;if(n){let o=this._describedByIds||e;r=e.concat(n.filter(a=>a&&!o.includes(a)))}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,n=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,s=n?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,f=this._currentDirection==="rtl"?"-1":"1",_=`${a+s}px`,Ce=`calc(${f} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,he=`var(--mat-mdc-form-field-label-transform, ${Gp} translateX(${Ce}))`,ue=a+s+c+d;return[he,ue]}_writeOutlinedLabelStyles(e){if(e!==null){let[n,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=n),r!==null&&this._notchedOutline?._setMaxWidth(r)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let n=e.getRootNode();return n&&n!==e}return document.documentElement.contains(e)}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-form-field"]],contentQueries:function(n,r,o){if(n&1&&(Zs(o,r._labelChild,zi,5),Ke(o,ms,5)(o,Vp,5)(o,zp,5)(o,Ud,5)(o,Ui,5)),n&2){Bo();let a;U(a=H())&&(r._formFieldControl=a.first),U(a=H())&&(r._prefixChildren=a),U(a=H())&&(r._suffixChildren=a),U(a=H())&&(r._errorChildren=a),U(a=H())&&(r._hintChildren=a)}},viewQuery:function(n,r){if(n&1&&(Ys(r._iconPrefixContainerSignal,Rd,5)(r._textPrefixContainerSignal,Od,5)(r._iconSuffixContainerSignal,Fd,5)(r._textSuffixContainerSignal,Pd,5),nt(yp,5)(Rd,5)(Od,5)(Fd,5)(Pd,5)(Nd,5)(Bd,5)(jd,5)),n&2){Bo(4);let o;U(o=H())&&(r._textField=o.first),U(o=H())&&(r._iconPrefixContainer=o.first),U(o=H())&&(r._textPrefixContainer=o.first),U(o=H())&&(r._iconSuffixContainer=o.first),U(o=H())&&(r._textSuffixContainer=o.first),U(o=H())&&(r._floatingLabel=o.first),U(o=H())&&(r._notchedOutline=o.first),U(o=H())&&(r._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(n,r){n&2&&j("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[pe([{provide:hs,useExisting:t},{provide:Hd,useExisting:t}])],ngContentSelectors:wp,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(n,r){if(n&1&&(me(xp),Qn(0,Ep,1,1,"ng-template",null,0,Vo),m(2,"div",6,1),J("click",function(a){return r._control.onContainerClick(a)}),y(4,Mp,1,0,"div",7),m(5,"div",8),y(6,Ap,2,2,"div",9),y(7,Ip,3,0,"div",10),y(8,Tp,3,0,"div",11),m(9,"div",12),y(10,Op,1,1,null,13),P(11),h(),y(12,Fp,3,0,"div",14),y(13,Pp,3,0,"div",15),h(),y(14,Np,1,0,"div",16),h(),m(15,"div",17),y(16,Lp,2,0,"div",18)(17,Bp,5,1,"div",19),h()),n&2){let o;u(2),j("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),u(2),x(!r._hasOutline()&&!r._control.disabled?4:-1),u(2),x(r._hasOutline()?6:-1),u(),x(r._hasIconPrefix?7:-1),u(),x(r._hasTextPrefix?8:-1),u(2),x(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),u(2),x(r._hasTextSuffix?12:-1),u(),x(r._hasIconSuffix?13:-1),u(),x(r._hasOutline()?-1:14),u(),j("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();u(),x((o=a)==="error"?16:o==="hint"?17:-1)}},dependencies:[Nd,Bd,Uo,jd,Ui],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return t})();var Hi=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[Xr,lo,ge]})}return t})();var qp=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(n,r){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return t})(),Zp={passive:!0},$d=(()=>{class t{_platform=l(ne);_ngZone=l(N);_renderer=l(ze).createRenderer(null,null);_styleLoader=l(ot);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Fe;this._styleLoader.load(qp);let n=Te(e),r=this._monitoredElements.get(n);if(r)return r.subject;let o=new L,a="cdk-text-field-autofilled",s=d=>{d.animationName==="cdk-text-field-autofill-start"&&!n.classList.contains(a)?(n.classList.add(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&n.classList.contains(a)&&(n.classList.remove(a),this._ngZone.run(()=>o.next({target:d.target,isAutofilled:!1})))},c=this._ngZone.runOutsideAngular(()=>(n.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(n,"animationstart",s,Zp)));return this._monitoredElements.set(n,{subject:o,unlisten:c}),o}stopMonitoring(e){let n=Te(e),r=this._monitoredElements.get(n);r&&(r.unlisten(),r.subject.complete(),n.classList.remove("cdk-text-field-autofill-monitored"),n.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(n))}ngOnDestroy(){this._monitoredElements.forEach((e,n)=>this.stopMonitoring(n))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Gd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({})}return t})();var Wd=new b("MAT_INPUT_VALUE_ACCESSOR");var qd=(()=>{class t{isErrorState(e,n){return!!(e&&e.invalid&&(e.touched||n&&n.submitted))}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var co=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(i,e,n,r,o){this._defaultMatcher=i,this.ngControl=e,this._parentFormGroup=n,this._parentForm=r,this._stateChanges=o}updateErrorState(){let i=this.errorState,e=this._parentFormGroup||this._parentForm,n=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=n?.isErrorState(r,e)??!1;o!==i&&(this.errorState=o,this._stateChanges.next())}};var Yp=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Kp=new b("MAT_INPUT_CONFIG"),Zd=(()=>{class t{_elementRef=l(B);_platform=l(ne);ngControl=l(Xt,{optional:!0,self:!0});_autofillMonitor=l($d);_ngZone=l(N);_formField=l(hs,{optional:!0});_renderer=l(ve);_uid=l(Et).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=l(Kp,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new L;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=_e(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(We.required)??!1}set required(e){this._required=_e(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&is().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=_e(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>is().has(e));constructor(){let e=l(Za,{optional:!0}),n=l(Fi,{optional:!0}),r=l(qd),o=l(Wd,{optional:!0,self:!0}),a=this._elementRef.nativeElement,s=a.nodeName.toLowerCase();o?jo(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new co(r,this.ngControl,n,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=s==="select",this._isTextarea=s==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&sn(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let n=this._elementRef.nativeElement;n.type==="number"?(n.type="text",n.setSelectionRange(0,0),n.type="number"):n.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let n=this._elementRef.nativeElement;this._previousPlaceholder=e,e?n.setAttribute("placeholder",e):n.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Yp.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,n=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&n&&n.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let n=this._elementRef.nativeElement;e.length?n.setAttribute("aria-describedby",e.join(" ")):n.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let n=e.target;!n.value&&n.selectionStart===0&&n.selectionEnd===0&&(n.setSelectionRange(1,1),n.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(n,r){n&1&&J("focus",function(){return r._focusChanged(!0)})("blur",function(){return r._focusChanged(!1)})("input",function(){return r._onInput()}),n&2&&(Jn("id",r.id)("disabled",r.disabled&&!r.disabledInteractive)("required",r.required),q("name",r.name||null)("readonly",r._getReadonlyAttribute())("aria-disabled",r.disabled&&r.disabledInteractive?"true":null)("aria-invalid",r.empty&&r.required?null:r.errorState)("aria-required",r.required)("id",r.id),j("mat-input-server",r._isServer)("mat-mdc-form-field-textarea-control",r._isInFormField&&r._isTextarea)("mat-mdc-form-field-input-control",r._isInFormField)("mat-mdc-input-disabled-interactive",r.disabledInteractive)("mdc-text-field__input",r._isInFormField)("mat-mdc-native-select-inline",r._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",be]},exportAs:["matInput"],features:[pe([{provide:ms,useExisting:t}]),Ae]})}return t})(),Yd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[Hi,Hi,Gd,ge]})}return t})();var Kd={production:!0,apiUrl:"http://localhost:3000"};var uo=class t{http=l(xn);url=`${Kd.apiUrl}/api/contact`;send(i){return this.http.post(this.url,i)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};function Xp(t,i){if(t&1){let e=tt();m(0,"p",6),v(1,"Mensagem enviada com sucesso."),h(),m(2,"div",7)(3,"p",8),v(4,"Quer enviar mais uma mensagem de contacto?"),h(),m(5,"button",9),J("click",function(){Ze(e);let r=w();return Ye(r.startNewMessage())}),v(6," Nova mensagem "),h()()}}function Jp(t,i){t&1&&(m(0,"p",10),v(1),h()),t&2&&(u(),I(i))}function eg(t,i){if(t&1){let e=tt();y(0,Jp,2,1,"p",10),m(1,"form",11),J("ngSubmit",function(){Ze(e);let r=w();return Ye(r.submit())}),m(2,"mat-form-field",12)(3,"mat-label"),v(4,"Nome para contacto"),h(),Z(5,"input",13),m(6,"mat-error"),v(7),h()(),m(8,"mat-form-field",12)(9,"mat-label"),v(10,"E-mail"),h(),Z(11,"input",14),m(12,"mat-hint"),v(13,"Usamos s\xF3 para responder a esta mensagem."),h(),m(14,"mat-error"),v(15),h()(),m(16,"mat-form-field",12)(17,"mat-label"),v(18,"Mensagem"),h(),Z(19,"textarea",15),m(20,"mat-hint"),v(21,"M\xEDnimo de 10 caracteres; at\xE9 4000."),h(),m(22,"mat-error"),v(23),h()(),m(24,"button",16),v(25),h()()}if(t&2){let e,n=w();x((e=n.errorMsg())?0:-1,e),u(),te("formGroup",n.form),u(6),I(n.fieldError("name")),u(8),I(n.fieldError("email")),u(8),I(n.fieldError("message")),u(),te("disabled",n.submitting()),u(),Rt(" ",n.submitting()?"Enviando\u2026":"Enviar"," ")}}var mo=class t{fb=l(ed);contactApi=l(uo);submitting=C(!1);success=C(!1);errorMsg=C(null);form=this.fb.nonNullable.group({name:["",[We.required,We.maxLength(120)]],email:["",[We.required,We.email,We.maxLength(254)]],message:["",[We.required,We.minLength(10),We.maxLength(4e3)]]});submit(){if(!this.success()){if(this.form.invalid){this.form.markAllAsTouched();return}this.submitting.set(!0),this.errorMsg.set(null),this.success.set(!1),this.contactApi.send(this.form.getRawValue()).subscribe({next:()=>{this.submitting.set(!1),this.success.set(!0)},error:i=>{this.submitting.set(!1),this.errorMsg.set(i?.error?.message??"N\xE3o foi poss\xEDvel enviar a mensagem. Verifique a liga\xE7\xE3o e tente de novo dentro de instantes.")}})}}fieldError(i){let e=this.form.controls[i];return!e.touched&&!e.dirty?null:e.hasError("required")?"Preencha este campo para continuar.":e.hasError("email")?"Indique um e-mail v\xE1lido (ex.: nome@exemplo.com).":e.hasError("minlength")?`A mensagem precisa de pelo menos ${e.errors?.minlength.requiredLength} caracteres.`:e.hasError("maxlength")?`Este campo aceita no m\xE1ximo ${e.errors?.maxlength.requiredLength} caracteres.`:null}startNewMessage(){this.errorMsg.set(null),this.form.reset({name:"",email:"",message:""},{emitEvent:!1}),this.form.enable({emitEvent:!1}),this.form.markAsUntouched(),this.form.markAsPristine(),this.success.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-contact"]],decls:11,vars:1,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-md-8","col-lg-7","col-xl-6","cv-page-col","cv-page-col--narrow"],[1,"cv-section"],["id","page-heading"],[1,"lead"],["role","status",1,"banner","ok"],["aria-live","polite",1,"contact-again"],[1,"contact-again__text"],["mat-stroked-button","","type","button","color","primary",3,"click"],["role","alert",1,"banner","err"],["novalidate","","aria-label","Formul\xE1rio de contacto",1,"contact-form",3,"ngSubmit","formGroup"],["appearance","outline","subscriptSizing","dynamic",1,"w-100"],["matInput","","id","contact-name","formControlName","name","autocomplete","name"],["matInput","","id","contact-email","type","email","formControlName","email","autocomplete","email","inputmode","email"],["matInput","","id","contact-message","formControlName","message","rows","6"],["mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(e,n){e&1&&(m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Contato"),h(),m(6,"p",5),v(7,"Envie uma mensagem \u2014 retorno o quanto antes poss\xEDvel."),h()(),m(8,"div",3),y(9,Xp,7,0)(10,eg,26,7),h()()()()),e&2&&(u(9),x(n.success()?9:10))},dependencies:[td,Xc,qr,Gc,Wc,Fi,Ya,Hi,lo,zi,Ui,us,Yd,Zd,ao,Ad],styles:[".page[_ngcontent-%COMP%]{min-width:0}.banner[_ngcontent-%COMP%]{padding:var(--cv-space-3) var(--cv-space-4);border-radius:var(--cv-radius-md);margin:0 0 var(--cv-space-4);font-size:var(--cv-type-body);line-height:var(--cv-type-lh-body)}.banner.ok[_ngcontent-%COMP%]{background:color-mix(in oklab,var(--cv-accent) 15%,transparent);border:1px solid color-mix(in oklab,var(--cv-accent) 35%,transparent)}.banner.err[_ngcontent-%COMP%]{background:color-mix(in oklab,var(--cv-danger-text) 14%,transparent);border:1px solid color-mix(in oklab,var(--cv-danger-text) 38%,transparent);color:var(--cv-danger-text);font-weight:500}.contact-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cv-space-4);align-items:stretch}.contact-again[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cv-space-3);align-items:stretch;margin-top:var(--cv-space-2)}.contact-again__text[_ngcontent-%COMP%]{margin:0;font-size:var(--cv-type-body);line-height:var(--cv-type-lh-body);color:var(--cv-muted)}.contact-again[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]{align-self:flex-start;min-height:var(--cv-touch-target-min)}.contact-form[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]{box-sizing:border-box;width:100%;margin-top:var(--cv-space-2);min-height:var(--cv-touch-target-min);padding-inline:var(--cv-space-6)}[_nghost-%COMP%]     .contact-form .mat-mdc-form-field{width:100%}[_nghost-%COMP%]     .contact-form .mat-mdc-text-field-wrapper{background-color:var(--cv-surface);border-radius:var(--cv-radius-sm)}[_nghost-%COMP%]     .contact-form .mat-mdc-notch-piece{border-color:var(--cv-card-border)}[_nghost-%COMP%]     .contact-form .mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused:not(.mdc-text-field--error) .mat-mdc-notch-piece{border-color:var(--cv-accent)}[_nghost-%COMP%]     .contact-form .mdc-text-field--outlined.mat-mdc-text-field-wrapper.mdc-text-field--invalid .mat-mdc-notch-piece{border-color:color-mix(in oklab,var(--cv-danger-text) 75%,var(--cv-border))}[_nghost-%COMP%]     .contact-form input.mat-mdc-input-element, [_nghost-%COMP%]     .contact-form textarea.mat-mdc-input-element{font-size:var(--cv-type-body);line-height:var(--cv-type-lh-body);color:var(--cv-text);caret-color:var(--cv-accent)}[_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mat-mdc-text-field-wrapper{background-color:color-mix(in oklab,var(--cv-surface) 82%,var(--cv-muted));opacity:.92}[_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mat-mdc-notch-piece{border-color:color-mix(in oklab,var(--cv-card-border) 70%,transparent)}[_nghost-%COMP%]     .contact-form .mdc-text-field--disabled input.mat-mdc-input-element, [_nghost-%COMP%]     .contact-form .mdc-text-field--disabled textarea.mat-mdc-input-element{color:var(--cv-muted);caret-color:transparent;cursor:not-allowed}[_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mdc-floating-label, [_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mat-mdc-floating-label{color:var(--cv-muted)}[_nghost-%COMP%]     .contact-form .mdc-text-field--disabled mat-hint, [_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mat-mdc-form-field-hint, [_nghost-%COMP%]     .contact-form .mdc-text-field--disabled .mat-mdc-form-field-hint-wrapper{opacity:.85}[_nghost-%COMP%]     .contact-form input.mat-mdc-input-element{min-height:var(--cv-touch-target-min);padding-block:var(--cv-space-2)}[_nghost-%COMP%]     .contact-form textarea.mat-mdc-input-element{min-height:8.5rem;padding-block:var(--cv-space-3)}[_nghost-%COMP%]     .contact-form .mdc-floating-label, [_nghost-%COMP%]     .contact-form .mat-mdc-floating-label{font-weight:500;color:var(--cv-muted)}[_nghost-%COMP%]     .contact-form .mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:var(--cv-accent)}[_nghost-%COMP%]     .contact-form .mdc-text-field--invalid .mdc-floating-label{color:color-mix(in oklab,var(--cv-danger-text) 90%,var(--cv-text))}[_nghost-%COMP%]     .contact-form mat-hint, [_nghost-%COMP%]     .contact-form .mat-mdc-form-field-hint, [_nghost-%COMP%]     .contact-form .mat-mdc-form-field-hint-wrapper{color:var(--cv-muted);font-size:var(--cv-type-caption);line-height:1.45}[_nghost-%COMP%]     .contact-form mat-error, [_nghost-%COMP%]     .contact-form .mat-mdc-form-field-error, [_nghost-%COMP%]     .contact-form .mat-mdc-form-field-error-wrapper{font-size:var(--cv-type-caption);font-weight:500;color:var(--cv-danger-text);line-height:1.45}[_nghost-%COMP%]     .contact-form .mat-mdc-form-field-subscript-wrapper{margin-top:var(--cv-space-1)}[_nghost-%COMP%]     .contact-form .mat-mdc-text-field-wrapper:not(.mdc-text-field--disabled):has(.mat-mdc-input-element:focus-visible){box-shadow:0 0 0 2px color-mix(in oklab,var(--cv-accent) 28%,transparent);border-radius:var(--cv-radius-sm)}"]})};var tg=(t,i)=>i.institution+i.period;function ng(t,i){if(t&1&&(S(0,"p",12),v(1),E()),t&2){let e=w().$implicit;u(),I(e.details)}}function ig(t,i){if(t&1&&(S(0,"li",8)(1,"article",9)(2,"p",10),v(3),E(),S(4,"h2"),v(5),E(),S(6,"p",11),v(7),E(),y(8,ng,2,1,"p",12),E()()),t&2){let e=i.$implicit;u(3),I(e.period),u(2),I(e.degree),u(2),I(e.institution),u(),x(e.details?8:-1)}}function rg(t,i){if(t&1&&(S(0,"ul",6),se(1,ig,9,4,"li",8,tg),E()),t&2){let e=w();u(),le(e.cv.content.education)}}function og(t,i){t&1&&(S(0,"p",7),v(1,"Nenhuma forma\xE7\xE3o listada no momento."),E())}var ho=class t{cv=l(Le);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-education"]],decls:11,vars:1,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10","cv-page-col"],[1,"cv-section"],["id","page-heading"],[1,"lead"],["aria-label","Lista de forma\xE7\xE3o acad\xE9mica",1,"list","list-unstyled","row","cv-card-grid","g-4","gy-lg-5"],["role","status",1,"empty-state"],[1,"col-12"],[1,"cv-card","h-100","w-100"],[1,"period"],[1,"inst"],[1,"details"]],template:function(e,n){e&1&&(S(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Forma\xE7\xE3o"),E(),S(6,"p",5),v(7,"Forma\xE7\xE3o acad\xEAmica e cursos relevantes."),E()(),S(8,"div",3),y(9,rg,3,0,"ul",6)(10,og,2,0,"p",7),E()()()()),e&2&&(u(9),x(n.cv.content.education.length?9:10))},styles:[".page[_ngcontent-%COMP%]{min-width:0}.list[_ngcontent-%COMP%]{padding:0}.period[_ngcontent-%COMP%]{font-size:.85rem;color:var(--cv-muted);margin:0 0 var(--cv-space-2)}.cv-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-2);font-size:1.1rem;font-weight:600;line-height:var(--cv-type-lh-tight);color:var(--cv-text)}.inst[_ngcontent-%COMP%]{margin:0;color:var(--cv-accent);font-size:var(--cv-type-caption);font-weight:500}.details[_ngcontent-%COMP%]{margin:var(--cv-space-3) 0 0;font-size:var(--cv-type-body);font-weight:400;line-height:var(--cv-type-lh-body);color:var(--cv-muted)}"]})};var ag=(t,i)=>i.company+i.role+i.period+i.tags,sg=(t,i)=>i.role+i.period;function lg(t,i){if(t&1&&(S(0,"p",15),v(1),E()),t&2){let e=w().$implicit;u(),I(e.description)}}function cg(t,i){if(t&1&&(S(0,"p",22),v(1),E()),t&2){let e=w().$implicit;u(),I(e.description)}}function dg(t,i){if(t&1&&(S(0,"h4",24),v(1),E()),t&2){let e=w(2).$implicit;u(),I(e.highlightsHeading)}}function ug(t,i){if(t&1&&(S(0,"li"),v(1),E()),t&2){let e=i.$implicit;u(),I(e)}}function mg(t,i){if(t&1&&(y(0,dg,2,1,"h4",24),S(1,"ul",25),se(2,ug,2,1,"li",null,et),E()),t&2){let e=w().$implicit;x(e.highlightsHeading?0:-1),u(2),le(e.highlights)}}function hg(t,i){if(t&1&&(S(0,"li"),v(1),E()),t&2){let e=i.$implicit;u(),I(e)}}function fg(t,i){if(t&1&&(S(0,"ul",23),se(1,hg,2,1,"li",null,et),E()),t&2){let e=w().$implicit;u(),le(e.tags)}}function pg(t,i){if(t&1&&(S(0,"section",19)(1,"h3",20),v(2),E(),S(3,"p",21),v(4),E(),y(5,cg,2,1,"p",22),ie(6,"br"),y(7,mg,4,1),y(8,fg,3,0,"ul",23),E()),t&2){let e=i.$implicit;u(2),I(e.role),u(2),I(e.period),u(),x(e.description?5:-1),u(2),x(e.highlights!=null&&e.highlights.length?7:-1),u(),x(e.tags!=null&&e.tags.length?8:-1)}}function gg(t,i){if(t&1&&(S(0,"div",16),se(1,pg,9,5,"section",19,sg),E()),t&2){let e=w().$implicit;u(),le(e.subRoles)}}function vg(t,i){if(t&1&&(S(0,"li"),v(1),E()),t&2){let e=i.$implicit;u(),I(e)}}function bg(t,i){if(t&1&&(S(0,"ul",17),se(1,vg,2,1,"li",null,et),E()),t&2){let e=w().$implicit;u(),le(e.highlights)}}function _g(t,i){if(t&1&&(S(0,"li"),v(1),E()),t&2){let e=i.$implicit;u(),I(e)}}function yg(t,i){if(t&1&&(S(0,"ul",18),se(1,_g,2,1,"li",null,et),E()),t&2){let e=w().$implicit;u(),le(e.tags)}}function xg(t,i){if(t&1&&(S(0,"li",7)(1,"div",9),ie(2,"span",10),S(3,"time",11),v(4),E()(),S(5,"article",12)(6,"header",13)(7,"h2"),v(8),E(),S(9,"p",14),v(10),E()(),y(11,lg,2,1,"p",15),y(12,gg,3,0,"div",16),y(13,bg,3,0,"ul",17),y(14,yg,3,0,"ul",18),E()()),t&2){let e=i.$implicit;u(4),I(e.period),u(4),I(e.role),u(2),I(e.company),u(),x(e.description?11:-1),u(),x(e.subRoles!=null&&e.subRoles.length?12:-1),u(),x(!(e.subRoles!=null&&e.subRoles.length)&&(e.highlights!=null&&e.highlights.length)?13:-1),u(),x(e.tags!=null&&e.tags.length?14:-1)}}function wg(t,i){t&1&&(S(0,"li",8)(1,"p",26),v(2,"Nenhuma experi\xEAncia listada no momento."),E()())}var fo=class t{cv=l(Le);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-experience"]],decls:13,vars:1,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10","cv-page-col"],[1,"cv-section"],["id","page-heading"],[1,"lead","lead--experience"],["aria-label","Linha do tempo profissional",1,"timeline"],[1,"item"],[1,"timeline-empty"],[1,"rail"],["aria-hidden","true",1,"rail-marker"],[1,"period"],[1,"body","cv-card","cv-card--timeline"],[1,"card-head"],[1,"company"],[1,"desc"],[1,"job-subroles"],[1,"highlights"],["aria-label","Tecnologias e temas",1,"job-tags"],[1,"job-subrole"],[1,"job-subrole__title"],[1,"job-subrole__period"],[1,"job-subrole__desc"],["aria-label","Tecnologias utilizadas",1,"job-tags","job-subrole__tags"],[1,"job-subrole__highlights-heading"],[1,"highlights","job-subrole__highlights"],["role","status",1,"empty-state"]],template:function(e,n){e&1&&(S(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Experi\xEAncia"),E(),S(6,"p",5),v(7," Trajet\xF3ria profissional: fun\xE7\xF5es, contexto e contributos com maior impacto. "),E()(),S(8,"div",3)(9,"ul",6),se(10,xg,15,7,"li",7,ag,!1,wg,3,0,"li",8),E()()()()()),e&2&&(u(10),le(n.cv.content.experience))},styles:['.page[_ngcontent-%COMP%]{min-width:0}.lead--experience[_ngcontent-%COMP%]{max-width:initial}.timeline[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:var(--cv-space-8)}.timeline-empty[_ngcontent-%COMP%]{list-style:none}.item[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(7.25rem,10.5rem) minmax(0,1fr);gap:0 var(--cv-space-5);align-items:stretch;position:relative}@media(max-width:575.98px){.item[_ngcontent-%COMP%]{grid-template-columns:1fr;gap:var(--cv-space-3)}}.rail[_ngcontent-%COMP%]{position:relative;display:flex;flex-direction:column;align-items:flex-end;text-align:end;padding-right:var(--cv-space-5);border-right:2px solid color-mix(in oklab,var(--cv-accent) 40%,var(--cv-border));min-height:100%}@media(max-width:575.98px){.rail[_ngcontent-%COMP%]{flex-direction:row;align-items:center;justify-content:flex-start;gap:var(--cv-space-3);text-align:start;padding:0 0 var(--cv-space-1);border-right:none;min-height:0}}@media(min-width:576px){.item[_ngcontent-%COMP%]:not(:last-child)   .rail[_ngcontent-%COMP%]:after{content:"";position:absolute;right:-1px;top:1.35rem;bottom:calc(-1 * var(--cv-space-8));width:2px;background:color-mix(in oklab,var(--cv-accent) 40%,var(--cv-border))}}.rail-marker[_ngcontent-%COMP%]{position:absolute;right:-7px;top:.28rem;width:12px;height:12px;border-radius:50%;background:var(--cv-bg);border:2px solid var(--cv-accent);box-shadow:0 0 0 3px var(--cv-bg)}@media(max-width:575.98px){.rail-marker[_ngcontent-%COMP%]{position:static;flex-shrink:0;box-shadow:none;background:var(--cv-surface-2)}}.period[_ngcontent-%COMP%]{display:block;margin:0;padding-top:var(--cv-space-1);font-size:.8125rem;font-weight:500;letter-spacing:.02em;color:var(--cv-muted);line-height:var(--cv-type-lh-tight)}@media(max-width:575.98px){.period[_ngcontent-%COMP%]{padding-top:0}}.body[_ngcontent-%COMP%]{min-width:0}.card-head[_ngcontent-%COMP%]{margin-bottom:var(--cv-space-3)}.card-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-1);font-family:var(--cv-font-sans);font-size:clamp(1.12rem,2.2vw,1.28rem);font-weight:600;letter-spacing:-.02em;line-height:var(--cv-type-lh-tight);color:var(--cv-text)}.company[_ngcontent-%COMP%]{margin:0;font-size:var(--cv-type-caption);font-weight:600;color:var(--cv-accent);letter-spacing:.01em}.desc[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-4);font-size:var(--cv-type-body);font-weight:400;line-height:var(--cv-type-lh-body);color:var(--cv-muted);max-width:62ch;text-wrap:pretty}.highlights[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-4);padding:0;list-style:none;color:var(--cv-muted);font-size:.9375rem;line-height:1.55}.highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{position:relative;padding-left:var(--cv-space-5)}.highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before{content:"";position:absolute;left:.35rem;top:.55em;width:5px;height:5px;border-radius:50%;background:color-mix(in oklab,var(--cv-accent) 75%,var(--cv-muted))}.highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:var(--cv-space-2)}.job-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--cv-space-2);list-style:none;margin:0;padding:0}.job-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:var(--cv-space-1) var(--cv-space-2);border-radius:var(--cv-radius-sm);font-size:.75rem;font-weight:500;letter-spacing:.01em;color:var(--cv-text);background:color-mix(in oklab,var(--cv-surface-2) 88%,var(--cv-accent));border:1px solid color-mix(in oklab,var(--cv-border) 70%,var(--cv-accent));transition:border-color var(--cv-transition-card),background-color var(--cv-transition-card),transform var(--cv-transition-card)}@media(hover:hover)and (pointer:fine){.job-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-color:color-mix(in oklab,var(--cv-border) 45%,var(--cv-accent));background:color-mix(in oklab,var(--cv-surface-2) 78%,var(--cv-accent));transform:translateY(-1px)}}@media(prefers-reduced-motion:reduce){.job-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:border-color var(--cv-transition-hover),background-color var(--cv-transition-hover)}.job-tags[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:none}}.job-subroles[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:var(--cv-space-5);margin-top:var(--cv-space-1)}.job-subrole[_ngcontent-%COMP%]{padding:var(--cv-space-4);border-radius:var(--cv-radius-sm);border:1px solid color-mix(in oklab,var(--cv-border) 80%,transparent);background:color-mix(in oklab,var(--cv-surface-2) 55%,transparent)}.job-subrole__title[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-1);font-family:var(--cv-font-sans);font-size:1rem;font-weight:600;letter-spacing:-.01em;line-height:var(--cv-type-lh-tight);color:var(--cv-text)}.job-subrole__period[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-2);font-size:.8125rem;font-weight:500;color:var(--cv-muted)}.job-subrole__desc[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-3);font-size:.9375rem;line-height:var(--cv-type-lh-body);color:var(--cv-muted);max-width:62ch;white-space:pre-line}.job-subrole__highlights-heading[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-2);font-family:var(--cv-font-sans);font-size:.8125rem;font-weight:600;letter-spacing:.01em;line-height:var(--cv-type-lh-tight);color:var(--cv-text)}.job-subrole__highlights[_ngcontent-%COMP%]{margin-bottom:0}.job-subrole__highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] + li[_ngcontent-%COMP%]{margin-top:var(--cv-space-3)}.job-subrole__highlights[_ngcontent-%COMP%] + .job-subrole__tags[_ngcontent-%COMP%]{margin-top:var(--cv-space-8)}.job-tags.job-subrole__tags[_ngcontent-%COMP%]{gap:var(--cv-space-3);row-gap:var(--cv-space-3)}']})};var fs="cv-theme-preference",Hn=class t{document=l(F);platformId=l(At);preference=C("light");followingSystem=!1;systemSchemeListener=null;constructor(){if(!vn(this.platformId))return;let i=localStorage.getItem(fs);i==="light"||i==="dark"?(this.preference.set(i),this.followingSystem=!1):i==="system"?(localStorage.removeItem(fs),this.attachSystemPreferenceListener()):this.attachSystemPreferenceListener(),this.applyEffectiveTheme()}effectiveTheme(){return vn(this.platformId)?this.preference():"light"}applyEffectiveTheme(){if(!vn(this.platformId))return;let i=this.effectiveTheme();this.document.documentElement.setAttribute("data-theme",i),this.document.documentElement.style.colorScheme=i==="dark"?"dark":"light"}setPreference(i){this.detachSystemPreferenceListener(),this.followingSystem=!1,this.preference.set(i),localStorage.setItem(fs,i),this.applyEffectiveTheme()}cycle(){let i=this.preference()==="light"?"dark":"light";this.setPreference(i)}toggleIcon(){return this.preference()==="light"?"dark_mode":"light_mode"}buttonLabel(){return this.preference()==="light"?"Claro":"Escuro"}ariaLabel(){return this.preference()==="light"?"Tema claro activo. Clicar para mudar para tema escuro.":"Tema escuro activo. Clicar para mudar para tema claro."}attachSystemPreferenceListener(){this.followingSystem=!0,this.applySystemPreference();let i=window.matchMedia("(prefers-color-scheme: dark)");this.systemSchemeListener=()=>this.applySystemPreference(),i.addEventListener("change",this.systemSchemeListener)}detachSystemPreferenceListener(){this.systemSchemeListener&&(window.matchMedia("(prefers-color-scheme: dark)").removeEventListener("change",this.systemSchemeListener),this.systemSchemeListener=null)}applySystemPreference(){let i=window.matchMedia?.("(prefers-color-scheme: dark)")?.matches??!1;this.preference.set(i?"dark":"light"),this.followingSystem&&this.applyEffectiveTheme()}static \u0275fac=function(e){return new(e||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})};function Cg(t,i){t&1&&(ke(),ie(0,"path",3)(1,"polyline",4))}function Dg(t,i){t&1&&(ke(),ie(0,"path",5)(1,"circle",6))}function Eg(t,i){t&1&&(ke(),ie(0,"rect",7)(1,"path",8))}function Mg(t,i){t&1&&(ke(),ie(0,"path",9)(1,"path",10)(2,"path",11))}function Sg(t,i){t&1&&(ke(),ie(0,"path",12)(1,"path",13)(2,"path",14))}function kg(t,i){t&1&&(ke(),ie(0,"path",1))}function Ag(t,i){t&1&&(ke(),ie(0,"rect",15)(1,"path",16))}function Ig(t,i){t&1&&(ke(),ie(0,"path",17)(1,"polyline",18)(2,"line",19))}function Tg(t,i){t&1&&(ke(),ie(0,"circle",20)(1,"path",21)(2,"path",22))}function Rg(t,i){t&1&&(ke(),ie(0,"path",23)(1,"polyline",24)(2,"line",25))}function Og(t,i){t&1&&(ke(),ie(0,"path",26)(1,"rect",27)(2,"circle",28))}function Fg(t,i){t&1&&(ke(),ie(0,"path",2))}var ft=class t{name=hn.required();static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-cv-icon"]],hostAttrs:["role","presentation"],hostVars:1,hostBindings:function(e,n){e&2&&q("aria-hidden",!0)},inputs:{name:[1,"name"]},decls:13,vars:1,consts:[["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round"],["d","M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"],["d","M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"],["d","m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"],["points","9 22 9 12 15 12 15 22"],["d","M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"],["cx","12","cy","7","r","4"],["width","20","height","14","x","2","y","7","rx","2","ry","2"],["d","M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"],["d","M21.42 10.922a1 1 0 0 0-.019-1.838L12 3 2.58 9.082a1 1 0 0 0 0 1.838l9.02 5.18a2 2 0 0 0 1.963 0z"],["d","M22 10v6"],["d","M6 12v5c3.53 2.47 8.47 2.47 12 0v-5"],["d","m18 16 4-4-4-4"],["d","m6 8-4 4 4 4"],["d","m14.5 4-5 16"],["width","20","height","16","x","2","y","4","rx","2"],["d","m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"],["d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"],["points","15 3 21 3 21 9"],["x1","10","x2","21","y1","14","y2","3"],["cx","12","cy","12","r","10"],["d","M2 12h20"],["d","M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"],["d","M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"],["points","7 10 12 15 17 10"],["x1","12","x2","12","y1","15","y2","3"],["d","M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"],["width","4","height","12","x","2","y","9"],["cx","4","cy","4","r","2"]],template:function(e,n){if(e&1&&(ke(),S(0,"svg",0),y(1,Cg,2,0)(2,Dg,2,0)(3,Eg,2,0)(4,Mg,3,0)(5,Sg,3,0)(6,kg,1,0,":svg:path",1)(7,Ag,2,0)(8,Ig,3,0)(9,Tg,3,0)(10,Rg,3,0)(11,Og,3,0)(12,Fg,1,0,":svg:path",2),E()),e&2){let r;u(),x((r=n.name())==="home"?1:r==="user"?2:r==="briefcase"?3:r==="graduation"?4:r==="code"?5:r==="folder"?6:r==="mail"?7:r==="external"?8:r==="globe"?9:r==="download"?10:r==="linkedin"?11:r==="github"?12:-1)}},styles:["[_nghost-%COMP%]{display:inline-block;flex-shrink:0;vertical-align:middle;width:1.125em;height:1.125em;color:inherit}svg[_ngcontent-%COMP%]{display:block;width:100%;height:100%}"],changeDetection:0})};var Pg=(t,i)=>i.id,Ng=(t,i)=>i.label;function Lg(t,i){t&1&&Z(0,"span",6)}function jg(t,i){if(t&1&&(m(0,"li")(1,"span",31)(2,"span",32),Z(3,"span",33),m(4,"span",34),Z(5,"img",35),h()()()()),t&2){let e=i.$implicit,n=w();Tt(n.heroFloatMarkClass(e)),u(4),It("transform",n.heroTechChipParallax(e)),u(),te("src",n.heroTechIconUrl(e),vt),q("width",n.heroTechIconSize(e))("height",n.heroTechIconSize(e))}}function Bg(t,i){if(t&1&&(m(0,"span",20),v(1),h()),t&2){let e=w();u(),I(e.home.profile.lastName)}}function Vg(t,i){t&1&&(m(0,"p",22),v(1),h()),t&2&&(u(),I(i))}function zg(t,i){if(t&1&&(m(0,"a",27),Z(1,"app-cv-icon",36),m(2,"span",37),v(3,"LinkedIn"),h()()),t&2){let e=w();te("href",e.home.profile.linkedin,vt)}}function Ug(t,i){if(t&1&&(m(0,"a",27),Z(1,"app-cv-icon",38),m(2,"span",37),v(3,"GitHub"),h()()),t&2){let e=w();te("href",e.home.profile.github,vt)}}function Hg(t,i){if(t&1&&(m(0,"div",39)(1,"article",40)(2,"p",41),v(3),h(),m(4,"p",42),v(5),h()()()),t&2){let e=i.$implicit;u(3),I(e.value),u(2),I(e.label)}}function $g(t,i){if(t&1&&(m(0,"div",29),se(1,Hg,6,2,"div",39,Ng),h()),t&2){let e=w();u(),le(e.home.highlights)}}function Gg(t,i){t&1&&(m(0,"p",30),v(1," Ainda n\xE3o h\xE1 destaques para mostrar. Quando os dados estiverem dispon\xEDveis, aparecem aqui. "),h())}var po=class t{cv=l(Le);theme=l(Hn);home=this.cv.home;resumeFallbackRoute=Ge("experiencia");heroParticleIndices=Array.from({length:5},(i,e)=>e);spotX=C(50);spotY=C(42);tiltX=C(0);tiltY=C(0);parallaxNx=C(0);parallaxNy=C(0);heroTechChips=[{id:"ts",simpleIcon:"typescript",depth:1.95,plane:"near",layoutColumn:"left"},{id:"nodejs",simpleIcon:"nodedotjs",depth:.8,plane:"mid",layoutColumn:"left"},{id:"mysql",simpleIcon:"mysql",depth:.45,plane:"far",layoutColumn:"left"},{id:"json",simpleIcon:"json",depth:.52,plane:"far",layoutColumn:"left"},{id:"api",simpleIcon:"swagger",depth:.72,plane:"far",layoutColumn:"left"},{id:"terraform",simpleIcon:"terraform",depth:.58,plane:"far",layoutColumn:"left"},{id:"docker",simpleIcon:"docker",depth:.48,plane:"far",layoutColumn:"left"},{id:"angular",simpleIcon:"angular",depth:1.95,plane:"near",layoutColumn:"right"},{id:"sass",simpleIcon:"sass",depth:.62,plane:"far",layoutColumn:"right"},{id:"dotnet",simpleIcon:"dotnet",depth:.5,plane:"far",layoutColumn:"right"},{id:"css",simpleIcon:"css",depth:.92,plane:"mid",layoutColumn:"right"},{id:"markdown",simpleIcon:"markdown",depth:.48,plane:"far",layoutColumn:"right"},{id:"html",simpleIcon:"html5",depth:.82,plane:"mid",layoutColumn:"right"},{id:"postgresql",simpleIcon:"postgresql",depth:.5,plane:"far",layoutColumn:"right"},{id:"ga4",simpleIcon:"googleanalytics",depth:.52,plane:"far",layoutColumn:"right"},{id:"jest",simpleIcon:"jest",depth:1.05,plane:"mid",layoutColumn:"center"}];heroTechIconHex(i){let e=this.theme.effectiveTheme()==="dark";if(i.id==="mysql")return e?"e8ddff":"00758f";switch(i.plane){case"near":return e?"e8ddff":"5a36c4";case"mid":return e?"cbb5ff":"4a2ca3";default:return e?"a890e8":"6b4ab8"}}heroSceneTransform=xe(()=>{let i=this.tiltX(),e=this.tiltY();return`perspective(1320px) rotateX(${i}deg) rotateY(${e}deg) translateZ(0)`});heroSpotX=xe(()=>`${this.spotX()}%`);heroSpotY=xe(()=>`${this.spotY()}%`);onHeroPointerMove(i){if(this.prefersReducedMotion())return;let n=i.currentTarget.getBoundingClientRect(),r=Math.max(n.width,1),o=Math.max(n.height,1);if(this.spotX.set((i.clientX-n.left)/r*100),this.spotY.set((i.clientY-n.top)/o*100),this.prefersCoarsePointer()){this.tiltX.set(0),this.tiltY.set(0),this.parallaxNx.set(0),this.parallaxNy.set(0);return}let a=(i.clientX-n.left)/r-.5,s=(i.clientY-n.top)/o-.5;this.parallaxNx.set(Math.max(-.5,Math.min(.5,a))),this.parallaxNy.set(Math.max(-.5,Math.min(.5,s))),this.tiltY.set(Math.max(-3.5,Math.min(3.5,a*-7))),this.tiltX.set(Math.max(-2.8,Math.min(2.8,s*5.5)))}onHeroPointerLeave(){this.prefersReducedMotion()||(this.spotX.set(50),this.spotY.set(42),this.parallaxNx.set(0),this.parallaxNy.set(0),this.tiltX.set(0),this.tiltY.set(0))}prefersReducedMotion(){return globalThis.matchMedia?.("(prefers-reduced-motion: reduce)").matches??!1}prefersCoarsePointer(){return globalThis.matchMedia?.("(pointer: coarse)").matches??!1}heroTechIconUrl(i){return`https://cdn.simpleicons.org/${i.simpleIcon}/${this.heroTechIconHex(i)}`}heroFloatMarkClass(i){let e=i.id==="ts"||i.id==="angular"?" hero-tech-float__mark--dominant":"";return`hero-tech-float__mark hero-tech-float__mark--${i.id} hero-tech-float__mark--plane-${i.plane} hero-tech-float__mark--col-${i.layoutColumn}${e}`}heroTechIconSize(i){return i.id==="ts"||i.id==="angular"?86:i.id==="jest"?50:i.id==="mysql"?44:i.id==="nodejs"||i.id==="sass"?42:i.id==="postgresql"?36:i.plane==="mid"?50:i.plane==="far"?i.id==="api"||i.id==="ga4"?38:36:48}heroTechChipParallax(i){if(this.prefersReducedMotion())return"translate3d(0, 0, 0)";let e=this.parallaxNx(),n=this.parallaxNy(),r=i.depth*24,o=e*(38+(i.id==="ts"||i.id==="angular"?14:0))*i.depth,a=n*(26+(i.id==="jest"?4:0))*i.depth;return`translate3d(${o}px, ${a}px, ${r}px)`}heroDisplayGivenNames(){let i=this.home.profile.name.trim().split(/\s+/).filter(Boolean);return i.length>=2?`${i[0]} ${i[1]}`:i[0]??""}heroSummaryLead(){let i=this.home.profile.summary?.trim();if(!i)return"";let e=i.indexOf(".");return e>24&&e<=280?i.slice(0,e+1).trim():i.length>200?`${i.slice(0,197).trim()}\u2026`:i}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-home"]],decls:38,vars:17,consts:[[1,"home"],["aria-labelledby","home-title",1,"hero","hero--cinematic","cv-section",3,"mousemove","mouseleave"],["aria-hidden","true",1,"hero-cinematic__aurora"],["aria-hidden","true",1,"hero-cinematic__grid-floor"],["aria-hidden","true",1,"hero-cinematic__spotlight"],["aria-hidden","true",1,"hero-cinematic__particles"],[1,"hero-cinematic__particle"],[1,"hero-tech-field"],["aria-hidden","true",1,"hero-tech-scene__mesh"],["aria-hidden","true",1,"hero-tech-scene__halo"],["aria-hidden","true",1,"hero-scene__grid"],["role","presentation",1,"hero-tech-float"],[3,"class"],[1,"hero-cinematic__bleed"],[1,"row","hero-cinematic__row","justify-content-center"],[1,"col-12","col-lg-9","col-xl-8"],[1,"hero-copy","hero-copy--immersive"],[1,"eyebrow"],["id","home-title",1,"m-0","hero-title"],[1,"hero-name-display"],[1,"hero-name-surname"],[1,"headline"],["id","hero-summary",1,"hero-lead"],["aria-label","A\xE7\xF5es principais do her\xF3i",1,"actions"],["download","CV_Kelly.pdf",1,"cv-btn","cv-btn--primary",3,"href"],["name","download"],["aria-label","Redes sociais",1,"hero-social"],["target","_blank","rel","noopener noreferrer",1,"hero-social__link",3,"href"],[1,"highlights","cv-section"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-xl-3","g-3","g-md-4","justify-content-center"],["role","status",1,"empty-state"],[1,"hero-tech-float__drift"],["aria-hidden","true",1,"hero-tech-float__hit"],["aria-hidden","true",1,"hero-tech-float__bloom"],[1,"hero-tech-float__shift"],["alt","","loading","lazy","decoding","async","referrerpolicy","no-referrer",1,"hero-tech-float__icon",3,"src"],["name","linkedin"],[1,"visually-hidden"],["name","github"],[1,"col","d-flex"],[1,"cv-card","metric","w-100"],[1,"value"],[1,"label"]],template:function(e,n){if(e&1&&(m(0,"div",0)(1,"section",1),J("mousemove",function(o){return n.onHeroPointerMove(o)})("mouseleave",function(){return n.onHeroPointerLeave()}),Z(2,"div",2)(3,"div",3)(4,"div",4),m(5,"div",5),se(6,Lg,1,0,"span",6,et),h(),m(8,"div",7),Z(9,"div",8)(10,"div",9)(11,"div",10),m(12,"ul",11),se(13,jg,6,7,"li",12,Pg),h()(),m(15,"div",13)(16,"div",14)(17,"div",15)(18,"div",16)(19,"p",17),v(20),h(),m(21,"h1",18)(22,"span",19),v(23),h(),y(24,Bg,2,1,"span",20),h(),m(25,"p",21),v(26),h(),y(27,Vg,2,1,"p",22),m(28,"div",23)(29,"a",24),Z(30,"app-cv-icon",25),v(31," Baixar curr\xEDculo "),h()(),m(32,"div",26),y(33,zg,4,1,"a",27),y(34,Ug,4,1,"a",27),h()()()()()(),m(35,"section",28),y(36,$g,3,0,"div",29)(37,Gg,2,0,"p",30),h()()),e&2){let r;u(),It("--hero-spot-x",n.heroSpotX())("--hero-spot-y",n.heroSpotY())("transform",n.heroSceneTransform()),u(5),le(n.heroParticleIndices),u(7),le(n.heroTechChips),u(7),I(n.home.eyebrow),u(3),I(n.heroDisplayGivenNames()),u(),x(n.home.profile.lastName?24:-1),u(2),I(n.home.profile.headline),u(),x((r=n.heroSummaryLead())?27:-1,r),u(),q("aria-describedby",n.heroSummaryLead()?"hero-summary":null),u(),te("href",n.home.resumePdfUrl,vt),u(4),x(n.home.profile.linkedin?33:-1),u(),x(n.home.profile.github?34:-1),u(),q("aria-label",n.home.highlightsSectionAriaLabel),u(),x(n.home.highlights.length?36:37)}},dependencies:[ft],styles:[".home[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0;min-width:0}.hero.hero--cinematic[_ngcontent-%COMP%]{--hero-fg: var(--cv-hero-fg);--hero-muted: var(--cv-hero-muted);--hero-line: var(--cv-hero-line);--hero-surface: var(--cv-hero-surface);--hero-surface-2: var(--cv-hero-surface-2);--hero-surface-hover: var(--cv-hero-surface-hover);--hero-accent-line: var(--cv-hero-accent-line);--hero-highlight: var(--cv-hero-highlight);--hero-ink: var(--cv-hero-ink);--hero-spot-x: 50%;--hero-spot-y: 42%;position:relative;isolation:isolate;width:100%;max-width:100%;margin-inline:0;padding-block:var(--cv-space-6);padding-inline:clamp(var(--cv-space-3),3vw,var(--cv-space-6));border-radius:var(--cv-radius-md);border:1px solid color-mix(in oklab,var(--hero-highlight) 28%,var(--cv-border));color:var(--hero-fg);overflow:clip;background:radial-gradient(circle at 0% 0%,color-mix(in oklab,#6d28d9 24%,transparent) 0%,transparent 46%),radial-gradient(circle at 100% 100%,color-mix(in oklab,#2563eb 20%,transparent) 0%,transparent 50%),linear-gradient(145deg,color-mix(in oklab,var(--cv-surface) 76%,transparent),color-mix(in oklab,var(--cv-surface-2) 58%,transparent) 48%,color-mix(in oklab,var(--cv-surface) 70%,transparent));-webkit-backdrop-filter:blur(18px) saturate(1.2);backdrop-filter:blur(18px) saturate(1.2);box-shadow:var(--cv-shadow-sm),0 0 0 1px color-mix(in oklab,#fff 5%,transparent) inset,0 1.25rem 3.5rem color-mix(in oklab,var(--hero-ink) 22%,transparent),0 0 2.5rem color-mix(in oklab,var(--hero-highlight) 12%,transparent)}@media(prefers-reduced-motion:reduce){.hero.hero--cinematic[_ngcontent-%COMP%]{transition:none}}@media(hover:hover)and (pointer:fine){.hero.hero--cinematic[_ngcontent-%COMP%]:hover{border-color:color-mix(in oklab,var(--hero-highlight) 42%,var(--cv-border));box-shadow:var(--cv-shadow-sm),0 0 0 1px color-mix(in oklab,#fff 7%,transparent) inset,0 1.35rem 3.75rem color-mix(in oklab,var(--hero-ink) 28%,transparent),0 0 3rem color-mix(in oklab,var(--hero-highlight) 18%,transparent)}}.hero.hero--cinematic[_ngcontent-%COMP%]:hover{transform:none}.hero-cinematic__aurora[_ngcontent-%COMP%]{position:absolute;inset:-35% -20%;z-index:0;pointer-events:none;opacity:.38;background:radial-gradient(ellipse 52% 48% at 18% 28%,color-mix(in oklab,var(--hero-highlight) 32%,transparent),transparent 70%),radial-gradient(ellipse 48% 55% at 88% 72%,color-mix(in oklab,var(--cv-accent) 22%,transparent),transparent 72%),radial-gradient(ellipse 40% 42% at 55% 8%,color-mix(in oklab,var(--cv-primary) 14%,transparent),transparent 68%);filter:blur(42px);animation:_ngcontent-%COMP%_hero-cinematic-aurora 22s ease-in-out infinite alternate}@media(prefers-reduced-motion:reduce){.hero-cinematic__aurora[_ngcontent-%COMP%]{animation:none;opacity:.35}}.hero-cinematic__grid-floor[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.07;background-image:linear-gradient(color-mix(in oklab,var(--hero-accent-line) 80%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklab,var(--hero-accent-line) 80%,transparent) 1px,transparent 1px);background-size:20px 20px;-webkit-mask-image:radial-gradient(ellipse 95% 85% at 50% 45%,#000 12%,transparent 78%);mask-image:radial-gradient(ellipse 95% 85% at 50% 45%,#000 12%,transparent 78%)}.hero-cinematic__spotlight[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;pointer-events:none;mix-blend-mode:soft-light;background:radial-gradient(ellipse 72% 58% at var(--hero-spot-x) var(--hero-spot-y),color-mix(in oklab,var(--hero-highlight) 22%,transparent) 0%,transparent 58%);opacity:.85}@media(prefers-reduced-motion:reduce){.hero-cinematic__spotlight[_ngcontent-%COMP%]{opacity:.35;mix-blend-mode:normal;background:radial-gradient(ellipse 80% 65% at 50% 38%,color-mix(in oklab,var(--hero-highlight) 10%,transparent) 0%,transparent 62%)}}.hero-cinematic__particles[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;pointer-events:none;overflow:hidden}.hero-cinematic__particle[_ngcontent-%COMP%]{position:absolute;width:2px;height:2px;border-radius:50%;background:color-mix(in oklab,var(--hero-highlight) 45%,transparent);box-shadow:0 0 10px color-mix(in oklab,var(--hero-highlight) 28%,transparent);opacity:.22;animation:_ngcontent-%COMP%_hero-cinematic-float 16s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.hero-cinematic__particle[_ngcontent-%COMP%]{animation:none;opacity:.12}}.hero-cinematic__particle[_ngcontent-%COMP%]:nth-child(1){left:43%;top:39%;animation-delay:-1.05s}.hero-cinematic__particle[_ngcontent-%COMP%]:nth-child(2){left:80%;top:68%;animation-delay:-2.1s}.hero-cinematic__particle[_ngcontent-%COMP%]:nth-child(3){left:39%;top:35%;animation-delay:-3.15s}.hero-cinematic__particle[_ngcontent-%COMP%]:nth-child(4){left:76%;top:64%;animation-delay:-4.2s}.hero-cinematic__particle[_ngcontent-%COMP%]:nth-child(5){left:35%;top:31%;animation-delay:-5.25s}.hero-cinematic__bleed[_ngcontent-%COMP%]{position:relative;z-index:4;max-width:initial;margin-inline:5px;padding:5px}.hero-copy--immersive[_ngcontent-%COMP%]{position:relative;z-index:5;isolation:isolate;max-width:min(36rem,100%);margin-inline:auto;padding-inline:clamp(.25rem,2.5vw,1.25rem);padding-bottom:clamp(1.25rem,4vh,2.75rem);text-align:center}.hero-cinematic__row[_ngcontent-%COMP%]{min-width:0}.hero-copy[_ngcontent-%COMP%]{min-width:0;text-align:center}.hero-name-display[_ngcontent-%COMP%]{display:block;margin:0 0 var(--cv-space-1);font-family:var(--cv-font-sans);font-weight:700;font-size:clamp(2.15rem,6.5vw,3.35rem);line-height:1.08;letter-spacing:-.02em;text-wrap:balance;text-shadow:0 0 40px color-mix(in oklab,var(--hero-highlight) 12%,transparent);background:linear-gradient(100deg,var(--hero-fg) 0%,color-mix(in oklab,var(--hero-fg) 72%,var(--hero-highlight)) 45%,color-mix(in oklab,var(--hero-highlight) 65%,#93c5fd) 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}@supports not (background-clip: text){.hero-name-display[_ngcontent-%COMP%]{color:var(--hero-fg);-webkit-text-fill-color:var(--hero-fg);background:none}}.hero-lead[_ngcontent-%COMP%]{margin:0 auto var(--cv-space-4);max-width:48ch;font-size:.875rem;font-weight:400;line-height:1.6;letter-spacing:.01em;color:color-mix(in oklab,var(--hero-muted) 96%,var(--hero-fg));text-wrap:pretty}.hero.hero--cinematic[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%]{color:color-mix(in oklab,var(--hero-muted) 88%,var(--hero-highlight));letter-spacing:.22em;font-size:.6875rem;font-weight:500;text-transform:uppercase}.hero.hero--cinematic[_ngcontent-%COMP%]   .headline[_ngcontent-%COMP%]{display:block;margin:0 auto var(--cv-space-3);max-width:38ch;font-family:var(--cv-font-sans);font-size:clamp(.94rem,2.1vw,1.1rem);font-weight:400;line-height:1.5;letter-spacing:-.01em;text-transform:none;text-wrap:balance;color:color-mix(in oklab,var(--hero-fg) 82%,var(--hero-muted))}.hero.hero--cinematic[_ngcontent-%COMP%]   .summary[_ngcontent-%COMP%]{color:var(--hero-muted);margin-bottom:var(--cv-space-6);max-width:48ch;margin-inline:auto}.hero.hero--cinematic[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--cv-space-3);align-items:center;justify-content:center;width:100%;margin-bottom:var(--cv-space-6)}@media(max-width:575.98px){.hero.hero--cinematic[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch}.hero.hero--cinematic[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%]{width:100%;max-width:min(22rem,100%);margin-inline:auto}}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--primary[_ngcontent-%COMP%]{position:relative;background:var(--hero-surface-2);color:var(--cv-hero-on-primary);border-color:color-mix(in oklab,var(--cv-hero-on-primary) 18%,var(--hero-surface));transition:background-color .2s ease,border-color .2s ease,box-shadow .25s ease,transform .2s ease}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled):not([aria-disabled=true]){background:var(--hero-surface-hover);color:var(--cv-hero-on-primary);border-color:color-mix(in oklab,var(--cv-hero-on-primary) 28%,var(--hero-surface));box-shadow:0 0 0 1px color-mix(in oklab,var(--cv-hero-on-primary) 12%,transparent),0 0 1.25rem color-mix(in oklab,var(--hero-highlight) 35%,transparent);transform:translateY(-1px)}@media(prefers-reduced-motion:reduce){.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--primary[_ngcontent-%COMP%]{transition:background-color .15s ease,border-color .15s ease}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--primary[_ngcontent-%COMP%]:hover:not(:disabled):not([aria-disabled=true]){transform:none}}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--outline[_ngcontent-%COMP%]{background:transparent;color:var(--hero-fg);border-color:var(--hero-line)}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn--outline[_ngcontent-%COMP%]:hover:not(:disabled):not([aria-disabled=true]){border-color:var(--hero-fg);color:var(--hero-fg);background:color-mix(in oklab,#fff 6%,transparent)}.hero.hero--cinematic[_ngcontent-%COMP%]   .cv-btn[_ngcontent-%COMP%]:focus-visible{outline-color:var(--hero-highlight)}.hero-social[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--cv-space-4);align-items:center;justify-content:center;position:relative;z-index:6}.hero-social__link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;font-size:1.35rem;color:var(--hero-fg);opacity:.88;transition:opacity .18s ease,color .18s ease,transform .2s ease,filter .2s ease}.hero-social__link[_ngcontent-%COMP%]:hover{opacity:1;color:color-mix(in oklab,var(--hero-fg) 55%,var(--hero-highlight));filter:drop-shadow(0 0 10px color-mix(in oklab,var(--hero-highlight) 45%,transparent));transform:translateY(-2px)}@media(prefers-reduced-motion:reduce){.hero-social__link[_ngcontent-%COMP%]{transition:opacity .15s ease,color .15s ease}.hero-social__link[_ngcontent-%COMP%]:hover{filter:none;transform:none}}.hero-tech-field[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;pointer-events:none;border-radius:inherit}.hero-tech-field[_ngcontent-%COMP%]   .hero-tech-scene__mesh[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:0;pointer-events:none;opacity:.28;background:radial-gradient(circle at 22% 28%,color-mix(in oklab,#6d28d9 18%,transparent) 0%,transparent 48%),radial-gradient(circle at 88% 72%,color-mix(in oklab,#2563eb 14%,transparent) 0%,transparent 52%);mix-blend-mode:soft-light}@media(prefers-reduced-motion:reduce){.hero-tech-field[_ngcontent-%COMP%]   .hero-tech-scene__mesh[_ngcontent-%COMP%]{opacity:.18}}.hero-tech-field[_ngcontent-%COMP%]   .hero-tech-scene__halo[_ngcontent-%COMP%]{position:absolute;inset:-16%;z-index:0;pointer-events:none;background:radial-gradient(ellipse 68% 56% at 48% 36%,color-mix(in oklab,var(--hero-highlight) 10%,transparent) 0%,transparent 74%);filter:blur(44px);opacity:.45}.hero-tech-field[_ngcontent-%COMP%]   .hero-scene__grid[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:1;pointer-events:none;opacity:.06;background-image:linear-gradient(color-mix(in oklab,var(--hero-accent-line) 60%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in oklab,var(--hero-accent-line) 60%,transparent) 1px,transparent 1px);background-size:22px 22px;-webkit-mask-image:radial-gradient(ellipse 100% 85% at 42% 32%,#000 8%,transparent 72%);mask-image:radial-gradient(ellipse 100% 85% at 42% 32%,#000 8%,transparent 72%)}.hero-tech-float[_ngcontent-%COMP%]{position:absolute;inset:0;z-index:2;margin:0;padding:0;list-style:none;pointer-events:none}.hero-tech-float__mark[_ngcontent-%COMP%]{position:absolute;margin:0;padding:0;pointer-events:none;transform-style:preserve-3d;will-change:transform}.hero-tech-float__mark--plane-near[_ngcontent-%COMP%]{z-index:8}.hero-tech-float__mark--plane-mid[_ngcontent-%COMP%]{z-index:5}.hero-tech-float__mark--plane-far[_ngcontent-%COMP%]{z-index:2}.hero-tech-float__mark--dominant[_ngcontent-%COMP%]{z-index:10;filter:drop-shadow(0 0 26px color-mix(in oklab,var(--hero-highlight) 38%,transparent))}.hero-tech-float__mark--dominant[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 22px color-mix(in oklab,var(--hero-highlight) 28%,transparent))}.hero-tech-float__drift[_ngcontent-%COMP%]{display:block;animation:_ngcontent-%COMP%_hero-tech-float-drift 9s ease-in-out infinite}@media(prefers-reduced-motion:reduce){.hero-tech-float__drift[_ngcontent-%COMP%]{animation:none}}.hero-tech-float__mark[_ngcontent-%COMP%]:nth-child(2n)   .hero-tech-float__drift[_ngcontent-%COMP%]{animation-duration:10.5s;animation-delay:-1.8s}.hero-tech-float__mark[_ngcontent-%COMP%]:nth-child(3n)   .hero-tech-float__drift[_ngcontent-%COMP%]{animation-duration:8.2s;animation-delay:-2.6s}.hero-tech-float__hit[_ngcontent-%COMP%]{position:relative;display:inline-flex;align-items:center;justify-content:center;padding:clamp(.35rem,1.2vw,.55rem);border-radius:50%;text-decoration:none;color:inherit;cursor:default;pointer-events:auto;transform-style:preserve-3d;background:transparent;border:none;box-shadow:none;-webkit-backdrop-filter:none;backdrop-filter:none;transition:transform .25s ease}@media(hover:hover)and (pointer:fine){.hero-tech-float__hit[_ngcontent-%COMP%]:hover{transform:scale(1.06)}}@media(prefers-reduced-motion:reduce){.hero-tech-float__hit[_ngcontent-%COMP%]{transition:none}.hero-tech-float__hit[_ngcontent-%COMP%]:hover{transform:none}}.hero-tech-float__hit[href][_ngcontent-%COMP%]{cursor:pointer}.hero-tech-float__mark--plane-far[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:.78;filter:saturate(.88) blur(.4px)}.hero-tech-float__bloom[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;z-index:0;width:165%;height:165%;translate:-50% -50%;border-radius:50%;pointer-events:none;background:radial-gradient(circle,color-mix(in oklab,var(--hero-highlight) 26%,transparent) 0%,color-mix(in oklab,#60a5fa 8%,transparent) 40%,transparent 70%);filter:blur(16px);opacity:.38}.hero-tech-float__mark--plane-far[_ngcontent-%COMP%]   .hero-tech-float__bloom[_ngcontent-%COMP%]{opacity:.22;filter:blur(20px)}.hero-tech-float__mark--col-center[_ngcontent-%COMP%]   .hero-tech-float__bloom[_ngcontent-%COMP%]{width:145%;height:145%;opacity:.32}.hero-tech-float__shift[_ngcontent-%COMP%]{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;transition:transform .2s ease-out}.hero-tech-float__icon[_ngcontent-%COMP%]{display:block;opacity:.92;transition:opacity .2s ease,filter .2s ease;filter:drop-shadow(0 0 14px color-mix(in oklab,var(--hero-highlight) 16%,transparent))}@media(hover:hover)and (pointer:fine){.hero-tech-float__hit[_ngcontent-%COMP%]:hover   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:1;filter:drop-shadow(0 0 20px color-mix(in oklab,var(--hero-highlight) 26%,transparent))}}.hero-tech-float__mark--plane-near[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 18px color-mix(in oklab,var(--hero-highlight) 20%,transparent))}.hero-tech-float__mark--dominant.hero-tech-float__mark--plane-near[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 26px color-mix(in oklab,var(--hero-highlight) 34%,transparent))}[_ngcontent-%COMP%]:root[data-theme=light]   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:.93;filter:drop-shadow(0 0 10px color-mix(in oklab,var(--cv-hero-highlight) 22%,transparent))}[_ngcontent-%COMP%]:root[data-theme=light]   .hero-tech-float__hit[_ngcontent-%COMP%]:hover   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:1;filter:drop-shadow(0 0 14px color-mix(in oklab,var(--cv-hero-highlight) 32%,transparent))}[_ngcontent-%COMP%]:root[data-theme=light]   .hero-tech-float__mark--dominant[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 14px color-mix(in oklab,var(--cv-hero-highlight) 26%,transparent))}.hero-tech-float__mark--col-left[_ngcontent-%COMP%]   .hero-tech-float__drift[_ngcontent-%COMP%], .hero-tech-float__mark--col-right[_ngcontent-%COMP%]   .hero-tech-float__drift[_ngcontent-%COMP%]{animation-duration:11s}.hero-tech-float__mark--col-center[_ngcontent-%COMP%]   .hero-tech-float__drift[_ngcontent-%COMP%]{animation-duration:13s}.hero-tech-float__mark--ts[_ngcontent-%COMP%]{top:2%;left:clamp(.25rem,2.5vw,5%);transform:rotate(-12deg)}.hero-tech-float__mark--mysql[_ngcontent-%COMP%]{top:5%;left:clamp(28%,22vw,52%);transform:rotate(8deg);opacity:.94;filter:drop-shadow(0 0 16px color-mix(in oklab,var(--hero-highlight) 32%,transparent))}.hero-tech-float__mark--mysql[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:1;filter:drop-shadow(0 0 20px color-mix(in oklab,var(--hero-highlight) 28%,transparent))}[_ngcontent-%COMP%]:root[data-theme=light]   .hero-tech-float__mark--mysql[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{filter:drop-shadow(0 0 12px color-mix(in oklab,var(--cv-hero-highlight) 35%,transparent))}.hero-tech-float__mark--nodejs[_ngcontent-%COMP%]{top:25%;left:clamp(18%,10vw,20%);transform:rotate(-5deg);opacity:.88}.hero-tech-float__mark--json[_ngcontent-%COMP%]{top:50%;left:clamp(.5%,30vw,25%);transform:rotate(-4deg);opacity:.62;filter:blur(.5px) drop-shadow(0 0 10px color-mix(in oklab,var(--hero-highlight) 18%,transparent))}.hero-tech-float__mark--api[_ngcontent-%COMP%]{top:46%;left:clamp(0px,1vw,2.5%);transform:rotate(5deg);opacity:.72;filter:blur(.75px) drop-shadow(0 0 12px color-mix(in oklab,var(--hero-highlight) 22%,transparent));clip-path:polygon(0 4%,100% 0,100% 100%,0 96%)}.hero-tech-float__mark--terraform[_ngcontent-%COMP%]{top:62%;left:clamp(10%,10vw,22%);transform:rotate(-7deg);opacity:.68}.hero-tech-float__mark--docker[_ngcontent-%COMP%]{top:80%;left:clamp(-4%,0vw,3%);transform:rotate(9deg) translate(-8%);opacity:.55;filter:blur(1.25px) drop-shadow(0 0 8px color-mix(in oklab,var(--hero-highlight) 18%,transparent));mask-image:linear-gradient(115deg,#000 55%,transparent 100%);-webkit-mask-image:linear-gradient(115deg,#000 55%,transparent 100%)}.hero-tech-float__mark--angular[_ngcontent-%COMP%]{top:1%;right:clamp(2%,5vw,10%);left:auto;transform:rotate(14deg)}.hero-tech-float__mark--sass[_ngcontent-%COMP%]{top:2%;right:clamp(26%,18vw,30%);left:auto;transform:rotate(-6deg);opacity:.62;filter:blur(.45px)}.hero-tech-float__mark--dotnet[_ngcontent-%COMP%]{top:32%;right:clamp(18%,19vw,36%);left:auto;transform:rotate(5deg);opacity:.58;filter:blur(.55px) drop-shadow(0 0 10px color-mix(in oklab,var(--hero-highlight) 16%,transparent))}.hero-tech-float__mark--css[_ngcontent-%COMP%]{top:38%;left:clamp(91%,22vw,34%);right:auto;transform:rotate(-8deg);opacity:.82}.hero-tech-float__mark--markdown[_ngcontent-%COMP%]{top:65%;right:clamp(30%,14vw,26%);left:auto;transform:rotate(-5deg);opacity:.56;filter:blur(.65px) drop-shadow(0 0 9px color-mix(in oklab,var(--hero-highlight) 14%,transparent))}.hero-tech-float__mark--html[_ngcontent-%COMP%]{top:57%;right:clamp(15%,9vw,18%);left:auto;transform:rotate(6deg);mask-image:linear-gradient(245deg,transparent 0%,#000 38%,#000 100%);-webkit-mask-image:linear-gradient(245deg,transparent 0%,#000 38%,#000 100%)}.hero-tech-float__mark--postgresql[_ngcontent-%COMP%]{top:76%;right:clamp(4%,0vw,0%);left:auto;transform:rotate(10deg);opacity:.5;filter:blur(1px) drop-shadow(0 0 8px color-mix(in oklab,var(--hero-highlight) 12%,transparent))}.hero-tech-float__mark--ga4[_ngcontent-%COMP%]{top:85%;right:clamp(10%,21vw,30%);left:auto;transform:rotate(-11deg);opacity:.58;filter:blur(1.1px) drop-shadow(0 0 10px color-mix(in oklab,var(--hero-highlight) 16%,transparent))}.hero-tech-float__mark--jest.hero-tech-float__mark--col-center[_ngcontent-%COMP%]{top:auto;bottom:clamp(1.75rem,5vh,4.5rem);left:25%;right:auto;transform:translate(-50%) rotate(-2deg);opacity:.78;z-index:3}.hero-tech-float__mark--jest[_ngcontent-%COMP%]   .hero-tech-float__icon[_ngcontent-%COMP%]{opacity:.96}@media(max-width:991.98px){.hero-tech-float__mark--ts[_ngcontent-%COMP%]{top:1%;left:1%;transform:rotate(-10deg)}.hero-tech-float__mark--mysql[_ngcontent-%COMP%]{top:7%;left:32%;transform:rotate(6deg)}.hero-tech-float__mark--nodejs[_ngcontent-%COMP%]{top:28%;left:6%;transform:rotate(-5deg)}.hero-tech-float__mark--json[_ngcontent-%COMP%]{top:36%;left:1%;transform:rotate(-3deg)}.hero-tech-float__mark--api[_ngcontent-%COMP%]{top:44%;left:0;transform:rotate(4deg)}.hero-tech-float__mark--terraform[_ngcontent-%COMP%]{top:58%;left:10%;transform:rotate(-6deg)}.hero-tech-float__mark--docker[_ngcontent-%COMP%]{top:74%;left:-2%;transform:rotate(7deg) translate(-5%)}.hero-tech-float__mark--angular[_ngcontent-%COMP%]{top:1%;right:3%;transform:rotate(12deg)}.hero-tech-float__mark--sass[_ngcontent-%COMP%]{top:2%;right:clamp(14%,20vw,32%);transform:rotate(-5deg)}.hero-tech-float__mark--dotnet[_ngcontent-%COMP%]{top:30%;right:clamp(16%,22vw,36%);transform:rotate(4deg)}.hero-tech-float__mark--css[_ngcontent-%COMP%]{top:42%;right:clamp(18%,24vw,38%);transform:rotate(-7deg)}.hero-tech-float__mark--markdown[_ngcontent-%COMP%]{top:50%;right:clamp(8%,12vw,22%);transform:rotate(-4deg)}.hero-tech-float__mark--html[_ngcontent-%COMP%]{top:58%;right:clamp(6%,10vw,18%);transform:rotate(5deg)}.hero-tech-float__mark--postgresql[_ngcontent-%COMP%]{top:72%;right:5%;transform:rotate(8deg)}.hero-tech-float__mark--ga4[_ngcontent-%COMP%]{top:86%;right:clamp(10%,14vw,26%);transform:rotate(-9deg)}.hero-tech-float__mark--jest.hero-tech-float__mark--col-center[_ngcontent-%COMP%]{bottom:clamp(6rem,17vh,9.5rem)}}.highlights[_ngcontent-%COMP%]{max-width:48rem;margin-inline:auto}.home[_ngcontent-%COMP%]   .cv-card.metric[_ngcontent-%COMP%]{gap:var(--cv-space-2);text-align:center;align-items:center;padding-block:var(--cv-space-5);padding-inline:var(--cv-space-4);border-top:2px solid color-mix(in oklab,var(--cv-accent) 55%,transparent)}.home[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]{margin:0 0 var(--cv-space-1);font-size:clamp(1.5rem,3.5vw,1.85rem);font-weight:700;letter-spacing:-.03em;color:var(--cv-accent)}.home[_ngcontent-%COMP%]   .metric[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{margin:0;font-size:.875rem;line-height:1.5;color:var(--cv-muted);max-width:16ch;margin-inline:auto}@keyframes _ngcontent-%COMP%_hero-cinematic-aurora{0%{transform:translate(-3%) scale(1)}50%{transform:translate(2.5%,-2%) scale(1.05)}to{transform:translate(1.5%,2.5%) scale(1.02)}}@keyframes _ngcontent-%COMP%_hero-cinematic-float{0%,to{transform:translateZ(0);opacity:.22}50%{transform:translate3d(0,-10px,0);opacity:.38}}@keyframes _ngcontent-%COMP%_hero-tech-float-drift{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}"]})};var Wg=(t,i)=>i.name;function qg(t,i){if(t&1&&(m(0,"div",10),Z(1,"img",15),h()),t&2){let e=w().$implicit;u(),te("src",e.thumb,vt)("alt","Ilustra\xE7\xE3o decorativa do projeto "+e.name)}}function Zg(t,i){if(t&1&&(m(0,"li"),v(1),h()),t&2){let e=i.$implicit;u(),I(e)}}function Yg(t,i){if(t&1&&(m(0,"ul",13),se(1,Zg,2,1,"li",null,et),h()),t&2){let e=w().$implicit;q("aria-label","Tecnologias: "+e.name),u(),le(e.tech)}}function Kg(t,i){if(t&1&&(m(0,"a",18),Z(1,"app-cv-icon",19),v(2),h()),t&2){let e=i,n=w(4);j("link--github",n.isGitHubRepo(e)),te("href",e,vt),u(2),Rt(" ",n.isGitHubRepo(e)?"GitHub":"Ver projeto"," ")}}function Qg(t,i){if(t&1&&(m(0,"a",20),Z(1,"app-cv-icon",22),v(2," Demo ao vivo "),h()),t&2){let e=w();te("routerLink",e)}}function Xg(t,i){if(t&1&&(m(0,"a",21),Z(1,"app-cv-icon",22),v(2," Demo ao vivo "),h()),t&2){let e=w();te("href",e,vt)}}function Jg(t,i){if(t&1&&y(0,Qg,3,1,"a",20)(1,Xg,3,1,"a",21),t&2){let e=w(4);x(e.isInternalRoute(i)?0:1)}}function ev(t,i){t&1&&(m(0,"span",17),v(1),h()),t&2&&(u(),I(i))}function tv(t,i){if(t&1&&(m(0,"div",14),y(1,Kg,3,4,"a",16),y(2,Jg,2,1),y(3,ev,2,1,"span",17),h()),t&2){let e,n,r,o=w().$implicit;u(),x((e=o.link==null?null:o.link.trim())?1:-1,e),u(),x((n=o.demoUrl==null?null:o.demoUrl.trim())?2:-1,n),u(),x((r=o.status==null?null:o.status.trim())?3:-1,r)}}function nv(t,i){if(t&1&&(m(0,"div",8)(1,"article",9),y(2,qg,2,2,"div",10),m(3,"div",11)(4,"h2"),v(5),h(),m(6,"p",12),v(7),h(),y(8,Yg,3,1,"ul",13),y(9,tv,4,3,"div",14),h()()()),t&2){let e=i.$implicit,n=w(2);u(2),x(e.thumb?2:-1),u(3),I(e.name),u(2),I(e.description),u(),x(e.tech.length?8:-1),u(),x(n.hasActions(e)?9:-1)}}function iv(t,i){if(t&1&&(m(0,"div",6),se(1,nv,10,5,"div",8,Wg),h()),t&2){let e=w();u(),le(e.cv.content.projects)}}function rv(t,i){t&1&&(m(0,"p",7),v(1,"Nenhum projeto em destaque no momento."),h())}var go=class t{cv=l(Le);isGitHubRepo(i){let e=i?.trim();if(!e)return!1;try{let n=new URL(e).hostname.toLowerCase();return n==="github.com"||n==="www.github.com"||n.endsWith(".github.io")}catch{return/^https?:\/\/(www\.)?github\.com\//i.test(e)}}hasActions(i){return!!(i.link?.trim()||i.demoUrl?.trim()||i.status?.trim())}isInternalRoute(i){return i.startsWith("/")&&!i.startsWith("//")}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-projects"]],decls:11,vars:1,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10","cv-page-col"],[1,"cv-section"],["id","page-heading"],[1,"lead","lead--projects"],["role","list",1,"row","cv-card-grid","row-cols-1","row-cols-sm-2","row-cols-xl-3","g-3","g-md-4","gy-xl-4"],["role","status",1,"empty-state"],["role","listitem",1,"col"],[1,"cv-card","project-card","h-100","w-100"],[1,"project-thumb"],[1,"project-inner"],[1,"desc"],[1,"tech"],[1,"project-actions"],["width","800","height","450","loading","lazy","decoding","async",3,"src","alt"],["target","_blank","rel","noopener noreferrer",1,"link",3,"link--github","href"],[1,"status"],["target","_blank","rel","noopener noreferrer",1,"link",3,"href"],["name","external"],[1,"link","link--demo",3,"routerLink"],["target","_blank","rel","noopener noreferrer",1,"link","link--demo",3,"href"],["name","globe"]],template:function(e,n){e&1&&(m(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Projetos"),h(),m(6,"p",5),v(7," Trabalhos selecionados: stack, reposit\xF3rio e demo quando existir. "),h()(),m(8,"div",3),y(9,iv,3,0,"div",6)(10,rv,2,0,"p",7),h()()()()),e&2&&(u(9),x(n.cv.content.projects.length?9:10))},dependencies:[ft,dt],styles:[".page[_ngcontent-%COMP%]{min-width:0}.lead--projects[_ngcontent-%COMP%]{max-width:48ch}.project-card.cv-card[_ngcontent-%COMP%]{padding:0;gap:0;overflow:hidden}.project-thumb[_ngcontent-%COMP%]{margin:0;border-bottom:1px solid var(--cv-card-border);background:color-mix(in oklab,var(--cv-surface-2) 55%,var(--cv-bg))}.project-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:auto;aspect-ratio:16/9;object-fit:cover}.project-inner[_ngcontent-%COMP%]{box-sizing:border-box;display:flex;flex-direction:column;gap:var(--cv-card-inner-gap);flex:1 1 auto;min-height:0;padding:var(--cv-card-padding)}.project-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0;font-size:clamp(1.05rem,2vw,1.2rem);font-weight:600;letter-spacing:-.02em;line-height:var(--cv-type-lh-tight);color:var(--cv-text)}.desc[_ngcontent-%COMP%]{margin:0;flex:1 1 auto;font-size:var(--cv-type-body);font-weight:400;line-height:var(--cv-type-lh-body);color:var(--cv-muted);max-width:65ch;text-wrap:pretty}.tech[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:var(--cv-space-2);list-style:none;margin:0;padding:0}.tech[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;padding:var(--cv-space-1) var(--cv-space-2);border-radius:var(--cv-radius-pill);color:var(--cv-text);background:color-mix(in oklab,var(--cv-surface-2) 88%,var(--cv-accent));border:1px solid color-mix(in oklab,var(--cv-border) 70%,var(--cv-accent));transition:border-color var(--cv-transition-card),background-color var(--cv-transition-card),transform var(--cv-transition-card)}@media(hover:hover)and (pointer:fine){.tech[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{border-color:color-mix(in oklab,var(--cv-border) 45%,var(--cv-accent));background:color-mix(in oklab,var(--cv-surface-2) 78%,var(--cv-accent));transform:translateY(-1px)}}@media(prefers-reduced-motion:reduce){.tech[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{transition:border-color var(--cv-transition-hover),background-color var(--cv-transition-hover)}.tech[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{transform:none}}.project-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;row-gap:var(--cv-space-3);margin-top:auto;padding-top:var(--cv-space-1)}.link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--cv-space-2);font-size:.9rem;font-weight:500;color:var(--cv-accent);text-decoration:none;min-height:var(--cv-touch-target-min);transition:color var(--cv-transition-hover),text-decoration-color var(--cv-transition-hover),opacity var(--cv-transition-hover)}.link[_ngcontent-%COMP%]:hover{text-decoration:underline;text-underline-offset:.12em}.link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--cv-accent);outline-offset:2px;border-radius:var(--cv-radius-sm)}.link--github[_ngcontent-%COMP%]{color:var(--cv-text)}.link--github[_ngcontent-%COMP%]:hover, .link--demo[_ngcontent-%COMP%]{color:var(--cv-accent)}.project-actions[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:var(--cv-space-1) var(--cv-space-2);border-radius:var(--cv-radius-pill);font-size:.75rem;font-weight:600;letter-spacing:.02em;color:var(--cv-muted);background:color-mix(in oklab,var(--cv-surface-2) 70%,var(--cv-border));border:1px solid color-mix(in oklab,var(--cv-border) 85%,transparent)}@media(max-width:575.98px){.project-actions[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;justify-content:flex-start}.project-actions[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{justify-content:center}.project-actions[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]{margin-inline-start:0;align-self:flex-start}}"]})};function ov(t,i){if(t&1&&(S(0,"li"),v(1),E()),t&2){let e=i.$implicit;u(),I(e)}}function av(t,i){if(t&1&&(S(0,"ul",6),se(1,ov,2,1,"li",null,et),E()),t&2){let e=w();u(),le(e.cv.content.skills)}}function sv(t,i){t&1&&(S(0,"p",7),v(1,"Nenhuma habilidade listada no momento."),E())}var vo=class t{cv=l(Le);static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-skills"]],decls:11,vars:1,consts:[["aria-labelledby","page-heading",1,"page"],[1,"row","justify-content-center"],[1,"col-12","col-lg-11","col-xl-10","cv-page-col"],[1,"cv-section"],["id","page-heading"],[1,"lead"],["aria-label","Compet\xEAncias t\xE9cnicas",1,"tags"],["role","status",1,"empty-state"]],template:function(e,n){e&1&&(S(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),v(5,"Habilidades"),E(),S(6,"p",5),v(7,"Tecnologias e ferramentas que utilizo no dia a dia."),E()(),S(8,"div",3),y(9,av,3,0,"ul",6)(10,sv,2,0,"p",7),E()()()()),e&2&&(u(9),x(n.cv.content.skills.length?9:10))},styles:[".page[_ngcontent-%COMP%]{min-width:0}"]})};var Qd=[{path:ut.home,component:po},{path:ut.sobre,component:Lr},{path:ut.experiencia,component:fo},{path:ut.formacao,component:ho},{path:ut.habilidades,component:vo},{path:ut.projetos,component:go},{path:ut.contato,component:mo},{path:"**",redirectTo:ut.home}];var Xd={providers:[Dc(),Ts(),Ia(Qd),ta()]};function Jd(t){t||(t=l(lt));let i=new qe(e=>{if(t.destroyed){e.next();return}return t.onDestroy(e.next.bind(e))});return e=>e.pipe(ce(i))}var eu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ge]})}return t})();var tu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ge]})}return t})();var lv=["*"],cv=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,dv=["unscopedContent"],uv=["text"],mv=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],hv=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var fv=new b("ListOption"),pv=(()=>{class t{_elementRef=l(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return t})(),gv=(()=>{class t{_elementRef=l(B);constructor(){}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return t})(),vv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return t})(),nu=(()=>{class t{_listOption=l(fv,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostVars:4,hostBindings:function(n,r){n&2&&j("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return t})(),bv=(()=>{class t extends nu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[ae]})}return t})(),_v=(()=>{class t extends nu{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275dir=A({type:t,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[ae]})}return t})(),yv=new b("MAT_LIST_CONFIG"),ps=(()=>{class t{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=_e(e)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(_e(e))}_disabled=C(!1);_defaultOptions=l(yv,{optional:!0});static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,hostVars:1,hostBindings:function(n,r){n&2&&q("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return t})(),xv=(()=>{class t{_elementRef=l(B);_ngZone=l(N);_listBase=l(ps,{optional:!0});_platform=l(ne);_hostElement;_isButtonElement;_noopAnimations=ht();_avatars;_icons;set lines(e){this._explicitLines=mt(e,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(e){this._disableRipple=_e(e)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(e){this._disabled.set(_e(e))}_disabled=C(!1);_subscriptions=new pt;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(ot).load(ro);let e=l(no,{optional:!0});this.rippleConfig=e||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Un(this,this._ngZone,this._hostElement,this._platform,l(de)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(nn(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(e){if(!this._lines||!this._titles||!this._unscopedContent)return;e&&this._checkDomForUnscopedTextContent();let n=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",n<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",n===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",n===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&n===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let e=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(e+=1),e}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(e=>e.nodeType!==e.COMMENT_NODE).some(e=>!!(e.textContent&&e.textContent.trim()))}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,contentQueries:function(n,r,o){if(n&1&&Ke(o,bv,4)(o,_v,4),n&2){let a;U(a=H())&&(r._avatars=a),U(a=H())&&(r._icons=a)}},hostVars:4,hostBindings:function(n,r){n&2&&(q("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),j("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return t})();var iu=(()=>{class t extends xv{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(e){this._activated=_e(e)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(n,r,o){if(n&1&&Ke(o,gv,5)(o,pv,5)(o,vv,5),n&2){let a;U(a=H())&&(r._lines=a),U(a=H())&&(r._titles=a),U(a=H())&&(r._meta=a)}},viewQuery:function(n,r){if(n&1&&nt(dv,5)(uv,5),n&2){let o;U(o=H())&&(r._unscopedContent=o.first),U(o=H())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(n,r){n&2&&(q("aria-current",r._getAriaCurrent()),j("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[ae],ngContentSelectors:hv,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(n,r){n&1&&(me(mv),P(0),m(1,"span",1),P(2,1),P(3,2),m(4,"span",2,0),J("cdkObserveContent",function(){return r._updateItemLines(!0)}),P(6,3),h()(),P(7,4),P(8,5),Z(9,"div",3))},dependencies:[hd],encapsulation:2,changeDetection:0})}return t})();var ru=(()=>{class t extends ps{_isNonInteractive=!1;static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[pe([{provide:ps,useExisting:t}]),ae],ngContentSelectors:lv,decls:1,vars:0,template:function(n,r){n&1&&(me(),P(0))},styles:[cv],encapsulation:2,changeDetection:0})}return t})();var ou=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[Xr,oo,tu,ge,eu]})}return t})();var Cv=20,gs=(()=>{class t{_ngZone=l(N);_platform=l(ne);_renderer=l(ze).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new L;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let n=this.scrollContainers.get(e);n&&(n.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Cv){return this._platform.isBrowser?new qe(n=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(Mo(e)).subscribe(n):this._scrolled.subscribe(n);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):k()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,n)=>this.deregister(n)),this._scrolled.complete()}ancestorScrolled(e,n){let r=this.getAncestorScrollContainers(e);return this.scrolled(n).pipe(re(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){let n=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&n.push(o)}),n}_scrollableContainsElement(e,n){let r=Te(n),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),$n=(()=>{class t{elementRef=l(B);scrollDispatcher=l(gs);ngZone=l(N);dir=l(tn,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new L;_renderer=l(ve);_cleanupScroll;_elementScrolled=new L;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let n=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=n.scrollHeight-n.clientHeight-e.bottom),r&&Vn()!=at.NORMAL?(e.left!=null&&(e.right=n.scrollWidth-n.clientWidth-e.left),Vn()==at.INVERTED?e.left=e.right:Vn()==at.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=n.scrollWidth-n.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let n=this.elementRef.nativeElement;vd()?n.scrollTo(e):(e.top!=null&&(n.scrollTop=e.top),e.left!=null&&(n.scrollLeft=e.left))}measureScrollOffset(e){let n="left",r="right",o=this.elementRef.nativeElement;if(e=="top")return o.scrollTop;if(e=="bottom")return o.scrollHeight-o.clientHeight-o.scrollTop;let a=this.dir&&this.dir.value=="rtl";return e=="start"?e=a?r:n:e=="end"&&(e=a?n:r),a&&Vn()==at.INVERTED?e==n?o.scrollWidth-o.clientWidth-o.scrollLeft:o.scrollLeft:a&&Vn()==at.NEGATED?e==n?o.scrollLeft+o.scrollWidth-o.clientWidth:-o.scrollLeft:e==n?o.scrollLeft:o.scrollWidth-o.clientWidth-o.scrollLeft}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return t})(),Dv=20,au=(()=>{class t{_platform=l(ne);_listeners;_viewportSize=null;_change=new L;_document=l(F);constructor(){let e=l(N),n=l(ze).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[n.listen("window","resize",r),n.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:n,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+n,height:r,width:n}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,n=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||n.scrollY||r.scrollTop||0,s=-o.left||e.body?.scrollLeft||n.scrollX||r.scrollLeft||0;return{top:a,left:s}}change(e=Dv){return e>0?this._change.pipe(Mo(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var vs=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({})}return t})();var yo=["*"],Mv=["content"],Sv=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],kv=["mat-drawer","mat-drawer-content","*"];function Av(t,i){if(t&1){let e=tt();m(0,"div",1),J("click",function(){Ze(e);let r=w();return Ye(r._onBackdropClicked())}),h()}if(t&2){let e=w();j("mat-drawer-shown",e._isShowingBackdrop())}}function Iv(t,i){t&1&&(m(0,"mat-drawer-content"),P(1,2),h())}var Tv=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Rv=["mat-sidenav","mat-sidenav-content","*"];function Ov(t,i){if(t&1){let e=tt();m(0,"div",1),J("click",function(){Ze(e);let r=w();return Ye(r._onBackdropClicked())}),h()}if(t&2){let e=w();j("mat-drawer-shown",e._isShowingBackdrop())}}function Fv(t,i){t&1&&(m(0,"mat-sidenav-content"),P(1,2),h())}var Pv=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Nv=new b("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),ys=new b("MAT_DRAWER_CONTAINER"),bo=(()=>{class t extends $n{_platform=l(ne);_changeDetectorRef=l(Ne);_container=l(_s);constructor(){let e=l(B),n=l(gs),r=l(N);super(e,n,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:e,end:n}=this._container;return e!=null&&e.mode!=="over"&&e.opened||n!=null&&n.mode!=="over"&&n.opened}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(n,r){n&2&&(It("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),j("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[pe([{provide:$n,useExisting:t}]),ae],ngContentSelectors:yo,decls:1,vars:0,template:function(n,r){n&1&&(me(),P(0))},encapsulation:2,changeDetection:0})}return t})(),bs=(()=>{class t{_elementRef=l(B);_focusTrapFactory=l(ts);_focusMonitor=l(Bi);_platform=l(ne);_ngZone=l(N);_renderer=l(ve);_interactivityChecker=l(eo);_doc=l(F);_container=l(ys,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(e){e=e==="end"?"end":"start",e!==this._position&&(this._isAttached&&this._updatePositionInParent(e),this._position=e,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(e){this._mode=e,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(e){this._disableClose=_e(e)}_disableClose=!1;get autoFocus(){let e=this._autoFocus;return e??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(e){(e==="true"||e==="false"||e==null)&&(e=_e(e)),this._autoFocus=e}_autoFocus;get opened(){return this._opened()}set opened(e){this.toggle(_e(e))}_opened=C(!1);_openedVia=null;_animationStarted=new L;_animationEnd=new L;openedChange=new oe(!0);_openedStream=this.openedChange.pipe(re(e=>e),W(()=>{}));openedStart=this._animationStarted.pipe(re(()=>this.opened),So(void 0));_closedStream=this.openedChange.pipe(re(e=>!e),W(()=>{}));closedStart=this._animationStarted.pipe(re(()=>!this.opened),So(void 0));_destroyed=new L;onPositionChanged=new oe;_content;_modeChanged=new L;_injector=l(de);_changeDetectorRef=l(Ne);constructor(){this.openedChange.pipe(ce(this._destroyed)).subscribe(e=>{e?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let e=this._renderer,n=this._elementRef.nativeElement;return[e.listen(n,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!gd(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),e.listen(n,"transitionend",this._handleTransitionEvent),e.listen(n,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(e,n){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),e.removeAttribute("tabindex")},o=this._renderer.listen(e,"blur",r),a=this._renderer.listen(e,"mousedown",r)})),e.focus(n)}_focusByCssSelector(e,n){let r=this._elementRef.nativeElement.querySelector(e);r&&this._forceFocus(r,n)}_takeFocus(){if(!this._focusTrap)return;let e=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":bt(()=>{!this._focusTrap.focusInitialElement()&&typeof e.focus=="function"&&e.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(e){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,e):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let e=this._doc.activeElement;return!!e&&this._elementRef.nativeElement.contains(e)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(e=>e()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(e){return this.toggle(!0,e)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(e=!this.opened,n){e&&n&&(this._openedVia=n);let r=this._setOpen(e,!e&&this._isFocusWithinDrawer(),this._openedVia||"program");return e||(this._openedVia=null),r}_setOpen(e,n,r){return e===this.opened?Promise.resolve(e?"open":"close"):(this._opened.set(e),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",e),!e&&n&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(st(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(e){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",e)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(e){if(!this._platform.isBrowser)return;let n=this._elementRef.nativeElement,r=n.parentNode;e==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,n)),r.appendChild(n)):this._anchor&&this._anchor.parentNode.insertBefore(n,this._anchor)}_handleTransitionEvent=e=>{let n=this._elementRef.nativeElement;e.target===n&&this._ngZone.run(()=>{e.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(e)})};static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer"]],viewQuery:function(n,r){if(n&1&&nt(Mv,5),n&2){let o;U(o=H())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(n,r){n&2&&(q("align",null)("tabIndex",r.mode!=="side"?"-1":null),It("visibility",!r._container&&!r.opened?"hidden":null),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:yo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,r){n&1&&(me(),m(0,"div",1,0),P(2),h())},dependencies:[$n],encapsulation:2,changeDetection:0})}return t})(),_s=(()=>{class t{_dir=l(tn,{optional:!0});_element=l(B);_ngZone=l(N);_changeDetectorRef=l(Ne);_animationDisabled=ht();_transitionsEnabled=!1;_allDrawers;_drawers=new Os;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(e){this._autosize=_e(e)}_autosize=l(Nv);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(e){this._backdropOverride=e==null?null:_e(e)}_backdropOverride=null;backdropClick=new oe;_start=null;_end=null;_left=null;_right=null;_destroyed=new L;_doCheckSubject=new L;_contentMargins={left:null,right:null};_contentMarginChanges=new L;get scrollable(){return this._userContent||this._content}_injector=l(de);constructor(){let e=l(ne),n=l(au);this._dir?.change.pipe(ce(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),n.change().pipe(ce(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&e.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(kt(this._allDrawers),ce(this._destroyed)).subscribe(e=>{this._drawers.reset(e.filter(n=>!n._container||n._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(kt(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(e=>{this._watchDrawerToggle(e),this._watchDrawerPosition(e),this._watchDrawerMode(e)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(Zi(10),ce(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(e=>e.open())}close(){this._drawers.forEach(e=>e.close())}updateContentMargins(){let e=0,n=0;if(this._left&&this._left.opened){if(this._left.mode=="side")e+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();e+=r,n-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")n+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();n+=r,e-=r}}e=e||null,n=n||null,(e!==this._contentMargins.left||n!==this._contentMargins.right)&&(this._contentMargins={left:e,right:n},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(e){e._animationStarted.pipe(ce(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),e.mode!=="side"&&e.openedChange.pipe(ce(this._drawers.changes)).subscribe(()=>this._setContainerClass(e.opened))}_watchDrawerPosition(e){e.onPositionChanged.pipe(ce(this._drawers.changes)).subscribe(()=>{bt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(e){e._modeChanged.pipe(ce(nn(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(e){let n=this._element.nativeElement.classList,r="mat-drawer-container-has-open";e?n.add(r):n.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(e=>{e.position=="end"?(this._end!=null,this._end=e):(this._start!=null,this._start=e)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(e=>e&&!e.disableClose&&this._drawerHasBackdrop(e)).forEach(e=>e._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(e){return e!=null&&e.opened}_drawerHasBackdrop(e){return this._backdropOverride==null?!!e&&e.mode!=="side":this._backdropOverride}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-drawer-container"]],contentQueries:function(n,r,o){if(n&1&&Ke(o,bo,5)(o,bs,5),n&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},viewQuery:function(n,r){if(n&1&&nt(bo,5),n&2){let o;U(o=H())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(n,r){n&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[pe([{provide:ys,useExisting:t}])],ngContentSelectors:kv,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,r){n&1&&(me(Sv),y(0,Av,1,2,"div",0),P(1),P(2,1),y(3,Iv,2,0,"mat-drawer-content")),n&2&&(x(r.hasBackdrop?0:-1),u(3),x(r._content?-1:3))},dependencies:[bo],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return t})(),_o=(()=>{class t extends bo{static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[pe([{provide:$n,useExisting:t}]),ae],ngContentSelectors:yo,decls:1,vars:0,template:function(n,r){n&1&&(me(),P(0))},encapsulation:2,changeDetection:0})}return t})(),xs=(()=>{class t extends bs{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(e){this._fixedInViewport=_e(e)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(e){this._fixedTopGap=mt(e)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(e){this._fixedBottomGap=mt(e)}_fixedBottomGap=0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(n,r){n&2&&(q("tabIndex",r.mode!=="side"?"-1":null)("align",null),It("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),j("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[pe([{provide:bs,useExisting:t}]),ae],ngContentSelectors:yo,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(n,r){n&1&&(me(),m(0,"div",1,0),P(2),h())},dependencies:[$n],encapsulation:2,changeDetection:0})}return t})(),su=(()=>{class t extends _s{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let e;return function(r){return(e||(e=De(t)))(r||t)}})();static \u0275cmp=D({type:t,selectors:[["mat-sidenav-container"]],contentQueries:function(n,r,o){if(n&1&&Ke(o,_o,5)(o,xs,5),n&2){let a;U(a=H())&&(r._content=a.first),U(a=H())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(n,r){n&2&&j("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[pe([{provide:ys,useExisting:t},{provide:_s,useExisting:t}]),ae],ngContentSelectors:Rv,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(n,r){n&1&&(me(Tv),y(0,Ov,1,2,"div",0),P(1),P(2,1),y(3,Fv,2,0,"mat-sidenav-content")),n&2&&(x(r.hasBackdrop?0:-1),u(3),x(r._content?-1:3))},dependencies:[_o],styles:[Pv],encapsulation:2,changeDetection:0})}return t})(),lu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[vs,ge,vs]})}return t})();var xo=[{path:Ge("home"),label:"In\xEDcio",exact:!0,icon:"home"},{path:Ge("sobre"),label:"Sobre",exact:!1,icon:"user"},{path:Ge("experiencia"),label:"Experi\xEAncia",exact:!1,icon:"briefcase"},{path:Ge("formacao"),label:"Forma\xE7\xE3o",exact:!1,icon:"graduation"},{path:Ge("habilidades"),label:"Habilidades",exact:!1,icon:"code"},{path:Ge("projetos"),label:"Projetos",exact:!1,icon:"folder"},{path:Ge("contato"),label:"Contato",exact:!1,icon:"mail"}];function cu(t){return Error(`Unable to find icon with the name "${t}"`)}function jv(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.")}function du(t){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${t}".`)}function uu(t){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${t}".`)}var Mt=class{url;svgText;options;svgElement=null;constructor(i,e,n){this.url=i,this.svgText=e,this.options=n}},hu=(()=>{class t{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,n,r,o){this._httpClient=e,this._sanitizer=n,this._errorHandler=o,this._document=r}addSvgIcon(e,n,r){return this.addSvgIconInNamespace("",e,n,r)}addSvgIconLiteral(e,n,r){return this.addSvgIconLiteralInNamespace("",e,n,r)}addSvgIconInNamespace(e,n,r,o){return this._addSvgIconConfig(e,n,new Mt(r,null,o))}addSvgIconResolver(e){return this._resolvers.push(e),this}addSvgIconLiteralInNamespace(e,n,r,o){let a=this._sanitizer.sanitize(Ve.HTML,r);if(!a)throw uu(r);let s=Bn(a);return this._addSvgIconConfig(e,n,new Mt("",s,o))}addSvgIconSet(e,n){return this.addSvgIconSetInNamespace("",e,n)}addSvgIconSetLiteral(e,n){return this.addSvgIconSetLiteralInNamespace("",e,n)}addSvgIconSetInNamespace(e,n,r){return this._addSvgIconSetConfig(e,new Mt(n,null,r))}addSvgIconSetLiteralInNamespace(e,n,r){let o=this._sanitizer.sanitize(Ve.HTML,n);if(!o)throw uu(n);let a=Bn(o);return this._addSvgIconSetConfig(e,new Mt("",a,r))}registerFontClassAlias(e,n=e){return this._fontCssClassesByAlias.set(e,n),this}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(e){let n=this._sanitizer.sanitize(Ve.RESOURCE_URL,e);if(!n)throw du(e);let r=this._cachedIconsByUrl.get(n);return r?k(wo(r)):this._loadSvgIconFromConfig(new Mt(e,null)).pipe(Se(o=>this._cachedIconsByUrl.set(n,o)),W(o=>wo(o)))}getNamedSvgIcon(e,n=""){let r=mu(n,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(n,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(n);return a?this._getSvgFromIconSetConfigs(e,a):$i(cu(r))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(e){return e.svgText?k(wo(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(W(n=>wo(n)))}_getSvgFromIconSetConfigs(e,n){let r=this._extractIconWithNameFromAnySet(e,n);if(r)return k(r);let o=n.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(rn(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Ve.RESOURCE_URL,a.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),k(null)})));return qi(o).pipe(W(()=>{let a=this._extractIconWithNameFromAnySet(e,n);if(!a)throw cu(e);return a}))}_extractIconWithNameFromAnySet(e,n){for(let r=n.length-1;r>=0;r--){let o=n[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(a,e,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Se(n=>e.svgText=n),W(()=>this._svgElementFromConfig(e)))}_loadSvgIconSetFromConfig(e){return e.svgText?k(null):this._fetchIcon(e).pipe(Se(n=>e.svgText=n))}_extractSvgIconFromSet(e,n,r){let o=e.querySelector(`[id="${n}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let s=this._svgElementFromString(Bn("<svg></svg>"));return s.appendChild(a),this._setSvgAttributes(s,r)}_svgElementFromString(e){let n=this._document.createElement("DIV");n.innerHTML=e;let r=n.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r}_toSvgElement(e){let n=this._svgElementFromString(Bn("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:s}=r[o];a!=="id"&&n.setAttribute(a,s)}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&n.appendChild(e.childNodes[o].cloneNode(!0));return n}_setSvgAttributes(e,n){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),n&&n.viewBox&&e.setAttribute("viewBox",n.viewBox),e}_fetchIcon(e){let{url:n,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw jv();if(n==null)throw Error(`Cannot fetch icon from URL "${n}".`);let a=this._sanitizer.sanitize(Ve.RESOURCE_URL,n);if(!a)throw du(n);let s=this._inProgressUrlFetches.get(a);if(s)return s;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(W(d=>Bn(d)),an(()=>this._inProgressUrlFetches.delete(a)),Ms());return this._inProgressUrlFetches.set(a,c),c}_addSvgIconConfig(e,n,r){return this._svgIconConfigs.set(mu(e,n),r),this}_addSvgIconSetConfig(e,n){let r=this._iconSetConfigs.get(e);return r?r.push(n):this._iconSetConfigs.set(e,[n]),this}_svgElementFromConfig(e){if(!e.svgElement){let n=this._svgElementFromString(e.svgText);this._setSvgAttributes(n,e.options),e.svgElement=n}return e.svgElement}_getIconConfigFromResolvers(e,n){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](n,e);if(o)return Bv(o)?new Mt(o.url,null,o.options):new Mt(o,null)}}static \u0275fac=function(n){return new(n||t)(T(xn,8),T(na),T(F,8),T(Ht))};static \u0275prov=p({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function wo(t){return t.cloneNode(!0)}function mu(t,i){return t+":"+i}function Bv(t){return!!(t.url&&t.options)}var Vv=["*"],zv=new b("MAT_ICON_DEFAULT_OPTIONS"),Uv=new b("mat-icon-location",{providedIn:"root",factory:()=>{let t=l(F),i=t?t.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),fu=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Hv=fu.map(t=>`[${t}]`).join(", "),$v=/^url\(['"]?#(.*?)['"]?\)$/,pu=(()=>{class t{_elementRef=l(B);_iconRegistry=l(hu);_location=l(Uv);_errorHandler=l(Ht);_defaultColor;get color(){return this._color||this._defaultColor}set color(e){this._color=e}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(e){let n=this._cleanupFontValue(e);n!==this._fontSet&&(this._fontSet=n,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(e){let n=this._cleanupFontValue(e);n!==this._fontIcon&&(this._fontIcon=n,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=pt.EMPTY;constructor(){let e=l(new Ji("aria-hidden"),{optional:!0}),n=l(zv,{optional:!0});n&&(n.color&&(this.color=this._defaultColor=n.color),n.fontSet&&(this.fontSet=n.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(e){if(!e)return["",""];let n=e.split(":");switch(n.length){case 1:return["",n[0]];case 2:return n;default:throw Error(`Invalid icon name: "${e}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let n=this._location.getPathname();n!==this._previousPath&&(this._previousPath=n,this._prependPathToReferences(n))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(e){this._clearSvgElement();let n=this._location.getPathname();this._previousPath=n,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(n),this._elementRef.nativeElement.appendChild(e)}_clearSvgElement(){let e=this._elementRef.nativeElement,n=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();n--;){let r=e.childNodes[n];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,n=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),n.forEach(r=>e.classList.add(r)),this._previousFontSetClass=n,this.fontIcon!==this._previousFontIconClass&&!n.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e}_prependPathToReferences(e){let n=this._elementsWithExternalReferences;n&&n.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`)})})}_cacheChildrenWithExternalReferences(e){let n=e.querySelectorAll(Hv),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<n.length;o++)fu.forEach(a=>{let s=n[o],c=s.getAttribute(a),d=c?c.match($v):null;if(d){let f=r.get(s);f||(f=[],r.set(s,f)),f.push({name:a,value:d[1]})}})}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[n,r]=this._splitIconName(e);n&&(this._svgNamespace=n),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,n).pipe(st(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${n}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a))})}}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(n,r){n&2&&(q("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),Tt(r.color?"mat-"+r.color:""),j("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"))},inputs:{color:"color",inline:[2,"inline","inline",be],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Vv,decls:1,vars:0,template:function(n,r){n&1&&(me(),P(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0})}return t})(),gu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ge]})}return t})();var Wv=["*",[["mat-toolbar-row"]]],qv=["*","mat-toolbar-row"],Zv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return t})(),vu=(()=>{class t{_elementRef=l(B);_platform=l(ne);_document=l(F);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=D({type:t,selectors:[["mat-toolbar"]],contentQueries:function(n,r,o){if(n&1&&Ke(o,Zv,5),n&2){let a;U(a=H())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(n,r){n&2&&(Tt(r.color?"mat-"+r.color:""),j("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:qv,decls:2,vars:0,template:function(n,r){n&1&&(me(Wv),P(0),P(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return t})();var bu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=V({imports:[ge]})}return t})();var Kv=t=>({exact:t}),Qv=(t,i)=>i.path;function Xv(t,i){if(t&1&&(m(0,"li",5)(1,"a",9),Z(2,"app-cv-icon",10),v(3),h()()),t&2){let e=i.$implicit;u(),te("routerLink",e.path)("routerLinkActiveOptions",Xi(4,Kv,e.exact)),u(),te("name",e.icon),u(),Rt(" ",e.label," ")}}function Jv(t,i){if(t&1){let e=tt();m(0,"nav",1)(1,"div",3)(2,"ul",4),se(3,Xv,4,6,"li",5,Qv),h(),m(5,"div",6)(6,"button",7),J("click",function(){Ze(e);let r=w();return Ye(r.theme.cycle())}),m(7,"mat-icon",8),v(8),h()()()()()}if(t&2){let e=w();u(3),le(e.links),u(3),q("aria-label",e.theme.ariaLabel())("title",e.theme.buttonLabel()),u(2),I(e.theme.toggleIcon())}}function eb(t,i){if(t&1){let e=tt();m(0,"mat-toolbar",2)(1,"button",11),J("click",function(){Ze(e);let r=w();return Ye(r.onToggleMobileMenu())}),m(2,"mat-icon",8),v(3,"menu"),h()(),m(4,"a",12),v(5,"Curr\xEDculo"),h(),Z(6,"span",13),m(7,"button",7),J("click",function(){Ze(e);let r=w();return Ye(r.theme.cycle())}),m(8,"mat-icon",8),v(9),h()()()}if(t&2){let e=w();u(),q("aria-expanded",e.drawerOpened()),u(6),q("aria-label",e.theme.ariaLabel())("title",e.theme.buttonLabel()),u(2),I(e.theme.toggleIcon())}}var _u=768,Co=class t{theme=l(Hn);drawerOpened=hn(!1);toggleMobileNav=Xs();links=xo;isMdUp=C(typeof matchMedia<"u"?matchMedia(`(min-width: ${_u}px)`).matches:!0);mqMd=typeof matchMedia<"u"?matchMedia(`(min-width: ${_u}px)`):null;ngOnInit(){this.mqMd?.addEventListener("change",()=>{this.isMdUp.set(this.mqMd?.matches??!0)})}onToggleMobileMenu(){this.toggleMobileNav.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-header"]],inputs:{drawerOpened:[1,"drawerOpened"]},outputs:{toggleMobileNav:"toggleMobileNav"},decls:3,vars:1,consts:[[1,"header"],["aria-label","Principal",1,"navbar","navbar-expand-md","header-navbar"],[1,"header-mobile-toolbar"],[1,"container-fluid","header-navbar-inner"],[1,"navbar-nav","ms-md-auto","header-nav-list"],[1,"nav-item"],[1,"d-flex","align-items-center","gap-2","ms-md-3","flex-shrink-0"],["type","button","mat-icon-button","",1,"theme-toggle-btn",3,"click"],["aria-hidden","true"],["routerLinkActive","active",1,"nav-link","header-nav-link",3,"routerLink","routerLinkActiveOptions"],[3,"name"],["type","button","mat-icon-button","","aria-controls","mobile-nav-panel","aria-label","Abrir ou fechar menu de navega\xE7\xE3o",3,"click"],["routerLink","/","aria-label","Curr\xEDculo \u2014 p\xE1gina inicial",1,"brand","toolbar-brand"],[1,"toolbar-spacer"]],template:function(e,n){e&1&&(m(0,"header",0),y(1,Jv,9,3,"nav",1)(2,eb,10,4,"mat-toolbar",2),h()),e&2&&(u(),x(n.isMdUp()?1:2))},dependencies:[dt,Si,ft,bu,vu,ao,cs,gu,pu],styles:[".header-navbar[_ngcontent-%COMP%]{padding:0}.header-navbar-inner[_ngcontent-%COMP%]{padding:0;display:flex;align-items:center;flex-wrap:wrap;row-gap:var(--cv-space-2);justify-content:space-between}.theme-toggle-btn[_ngcontent-%COMP%]{color:var(--cv-muted)}.theme-toggle-btn[_ngcontent-%COMP%]:hover{color:var(--cv-text)}.header-mobile-toolbar[_ngcontent-%COMP%]{background:var(--cv-bg);color:var(--cv-text);border-bottom:1px solid var(--cv-border);padding-left:max(0px,env(safe-area-inset-left,0px));padding-right:max(0px,env(safe-area-inset-right,0px))}.header-mobile-toolbar[_ngcontent-%COMP%]   button.mat-mdc-icon-button[_ngcontent-%COMP%]{width:var(--cv-touch-target-min);height:var(--cv-touch-target-min);padding:0}.toolbar-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.toolbar-brand[_ngcontent-%COMP%]{margin-left:var(--cv-space-2);text-decoration:none}.header[_ngcontent-%COMP%]{padding-top:max(var(--cv-space-3),env(safe-area-inset-top,0px));padding-bottom:var(--cv-space-3);padding-left:max(clamp(var(--cv-space-3),4vw,var(--cv-space-5)),env(safe-area-inset-left,0px));padding-right:max(clamp(var(--cv-space-3),4vw,var(--cv-space-5)),env(safe-area-inset-right,0px));border-bottom:1px solid var(--cv-border);background:var(--cv-bg);position:sticky;top:0;z-index:10}.brand[_ngcontent-%COMP%]{font-weight:600;letter-spacing:-.02em;color:var(--cv-text);text-decoration:none}.brand[_ngcontent-%COMP%]:hover{color:var(--cv-accent)}.brand[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--cv-accent);outline-offset:2px;border-radius:var(--cv-radius-sm)}.header-nav-list[_ngcontent-%COMP%]{row-gap:var(--cv-space-1);column-gap:var(--cv-space-2)}.header-nav-list[_ngcontent-%COMP%]{flex-direction:row;flex-wrap:wrap;align-items:center}.header-nav-link[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:var(--cv-space-2);min-height:2.75rem;color:var(--cv-muted)!important;transition:color var(--cv-transition-hover),border-color var(--cv-transition-hover)!important}.header-nav-link[_ngcontent-%COMP%]:hover{color:var(--cv-text)!important}.header-nav-link.active[_ngcontent-%COMP%]{color:var(--cv-accent)!important;font-weight:500;border-bottom:2px solid var(--cv-accent);padding-bottom:calc(.5rem - 2px)}.header-nav-link[_ngcontent-%COMP%]:focus-visible{outline:2px solid var(--cv-accent);outline-offset:2px;border-radius:var(--cv-radius-sm)}"]})};var tb=["navDrawer"],nb=t=>({exact:t}),ib=(t,i)=>i.path;function rb(t,i){if(t&1){let e=tt();m(0,"a",12),J("click",function(){Ze(e),w();let r=mn(4);return Ye(r.close())}),Z(1,"app-cv-icon",13),m(2,"span",14),v(3),h()()}if(t&2){let e=i.$implicit;te("routerLink",e.path)("routerLinkActiveOptions",Xi(4,nb,e.exact)),u(),te("name",e.icon),u(2),I(e.label)}}var Do=class t{title=C("Curr\xEDculo");year=new Date().getFullYear();navLinks=xo;mobileDrawerOpen=C(!1);navDrawer;router=l(Ct);destroyRef=l(lt);onMobileDrawerOpened(i){this.mobileDrawerOpen.set(i)}onMobileNavToggle(){let i=this.navDrawer;i&&i.toggle().then(()=>{this.mobileDrawerOpen.set(i.opened)})}ngAfterViewInit(){this.router.events.pipe(re(i=>i instanceof $e),Jd(this.destroyRef)).subscribe(()=>this.closeMobileDrawer())}closeMobileDrawer(){this.navDrawer?.opened&&this.navDrawer.close(),this.mobileDrawerOpen.set(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=D({type:t,selectors:[["app-root"]],viewQuery:function(e,n){if(e&1&&nt(tb,5),e&2){let r;U(r=H())&&(n.navDrawer=r.first)}},decls:19,vars:4,consts:[["navDrawer","matSidenav"],[1,"app-root-drawer"],["href","#conteudo-principal",1,"cv-skip-link"],["id","mobile-nav-panel","mode","over","position","start","aria-label","Navega\xE7\xE3o em menu lateral para ecr\xE3s pequenos",1,"mobile-nav-drawer",3,"openedChange","fixedInViewport","autoFocus"],["aria-label","Principal",1,"mobile-sidenav-nav"],["mat-list-item","","routerLinkActive","mobile-nav-active",3,"routerLink","routerLinkActiveOptions"],[1,"app-sidenav-content"],[1,"shell"],[3,"toggleMobileNav","drawerOpened"],["id","conteudo-principal","tabindex","-1","aria-label","Conte\xFAdo principal",1,"main"],[1,"container"],["aria-label","Rodap\xE9",1,"footer"],["mat-list-item","","routerLinkActive","mobile-nav-active",3,"click","routerLink","routerLinkActiveOptions"],[3,"name"],[1,"mobile-nav-label"]],template:function(e,n){e&1&&(m(0,"mat-sidenav-container",1)(1,"a",2),v(2,"Saltar para o conte\xFAdo"),h(),m(3,"mat-sidenav",3,0),J("openedChange",function(o){return n.onMobileDrawerOpened(o)}),m(5,"nav",4)(6,"mat-nav-list"),se(7,rb,4,6,"a",5,ib),h()()(),m(9,"mat-sidenav-content",6)(10,"div",7)(11,"app-header",8),J("toggleMobileNav",function(){return n.onMobileNavToggle()}),h(),m(12,"main",9)(13,"div",10),Z(14,"router-outlet"),h()(),m(15,"footer",11)(16,"div",10)(17,"small"),v(18),h()()()()()()),e&2&&(u(3),te("fixedInViewport",!0)("autoFocus",!1),u(4),le(n.navLinks),u(4),te("drawerOpened",n.mobileDrawerOpen()),u(7),Rt("\xA9 ",n.year," \xB7 Desenvolvido por Kelly Michele"))},dependencies:[Di,dt,Si,Co,ft,lu,xs,su,_o,ou,ru,iu],styles:["[_nghost-%COMP%]{display:block;min-height:100dvh}.app-root-drawer[_ngcontent-%COMP%]{min-height:100dvh}.app-sidenav-content[_ngcontent-%COMP%]{min-height:100dvh;display:flex;flex-direction:column}.mobile-nav-drawer[_ngcontent-%COMP%]{width:min(18rem,85vw);border-right:1px solid var(--cv-border);background:var(--cv-surface-2)}.mobile-sidenav-nav[_ngcontent-%COMP%]   a.mobile-nav-active[_ngcontent-%COMP%]{background:color-mix(in oklab,var(--cv-accent) 14%,transparent);color:var(--cv-accent)}.mobile-sidenav-nav[_ngcontent-%COMP%]   .mobile-nav-label[_ngcontent-%COMP%]{margin-left:var(--cv-space-2)}.shell[_ngcontent-%COMP%]{min-height:100dvh;display:flex;flex-direction:column}.shell[_ngcontent-%COMP%]   #conteudo-principal.main[_ngcontent-%COMP%]{flex:1;width:100%;min-width:0;background:var(--cv-main-bg);color:var(--cv-text);padding-top:var(--cv-space-5);padding-bottom:var(--cv-space-6);padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px)}@media(max-width:575.98px){.shell[_ngcontent-%COMP%]   #conteudo-principal.main[_ngcontent-%COMP%]{padding-top:var(--cv-space-4)}}@media(min-width:640px){.shell[_ngcontent-%COMP%]   #conteudo-principal.main[_ngcontent-%COMP%]{padding-top:var(--cv-space-8);padding-bottom:var(--cv-space-8)}}.footer[_ngcontent-%COMP%]{padding-top:var(--cv-space-4);padding-bottom:max(var(--cv-space-4),env(safe-area-inset-bottom,0px));padding-left:env(safe-area-inset-left,0px);padding-right:env(safe-area-inset-right,0px);border-top:1px solid var(--cv-border);background:var(--cv-bg);color:var(--cv-muted);font-size:.85rem;text-align:center}"]})};Ko(Do,Xd).catch(t=>console.error(t));
