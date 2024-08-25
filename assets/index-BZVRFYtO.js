var FS=Object.defineProperty;var kS=(t,e,n)=>e in t?FS(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Me=(t,e,n)=>kS(t,typeof e!="symbol"?e+"":e,n);function zS(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const o=Object.getOwnPropertyDescriptor(i,r);o&&Object.defineProperty(t,r,o.get?o:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function BS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function Pr(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var Fv={exports:{}},ac={},kv={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),HS=Symbol.for("react.portal"),VS=Symbol.for("react.fragment"),GS=Symbol.for("react.strict_mode"),WS=Symbol.for("react.profiler"),$S=Symbol.for("react.provider"),XS=Symbol.for("react.context"),jS=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),qS=Symbol.for("react.memo"),KS=Symbol.for("react.lazy"),Ym=Symbol.iterator;function ZS(t){return t===null||typeof t!="object"?null:(t=Ym&&t[Ym]||t["@@iterator"],typeof t=="function"?t:null)}var zv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Bv=Object.assign,Hv={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||zv}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vv(){}Vv.prototype=Cs.prototype;function gp(t,e,n){this.props=t,this.context=e,this.refs=Hv,this.updater=n||zv}var vp=gp.prototype=new Vv;vp.constructor=gp;Bv(vp,Cs.prototype);vp.isPureReactComponent=!0;var qm=Array.isArray,Gv=Object.prototype.hasOwnProperty,_p={current:null},Wv={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var i,r={},o=null,s=null;if(e!=null)for(i in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)Gv.call(e,i)&&!Wv.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:za,type:t,key:o,ref:s,props:r,_owner:_p.current}}function QS(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function JS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Km=/\/+/g;function df(t,e){return typeof t=="object"&&t!==null&&t.key!=null?JS(""+t.key):e.toString(36)}function Jl(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case za:case HS:s=!0}}if(s)return s=t,r=r(s),t=i===""?"."+df(s,0):i,qm(r)?(n="",t!=null&&(n=t.replace(Km,"$&/")+"/"),Jl(r,e,n,"",function(u){return u})):r!=null&&(yp(r)&&(r=QS(r,n+(!r.key||s&&s.key===r.key?"":(""+r.key).replace(Km,"$&/")+"/")+t)),e.push(r)),1;if(s=0,i=i===""?".":i+":",qm(t))for(var a=0;a<t.length;a++){o=t[a];var l=i+df(o,a);s+=Jl(o,e,n,l,r)}else if(l=ZS(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=i+df(o,a++),s+=Jl(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function sl(t,e,n){if(t==null)return t;var i=[],r=0;return Jl(t,i,"","",function(o){return e.call(n,o,r++)}),i}function eM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var un={current:null},eu={transition:null},tM={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:eu,ReactCurrentOwner:_p};function Xv(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:sl,forEach:function(t,e,n){sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sl(t,function(){e++}),e},toArray:function(t){return sl(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Cs;$e.Fragment=VS;$e.Profiler=WS;$e.PureComponent=gp;$e.StrictMode=GS;$e.Suspense=YS;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tM;$e.act=Xv;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Bv({},t.props),r=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=_p.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gv.call(e,l)&&!Wv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:za,type:t.type,key:r,ref:o,props:i,_owner:s}};$e.createContext=function(t){return t={$$typeof:XS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$S,_context:t},t.Consumer=t};$e.createElement=$v;$e.createFactory=function(t){var e=$v.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:jS,render:t}};$e.isValidElement=yp;$e.lazy=function(t){return{$$typeof:KS,_payload:{_status:-1,_result:t},_init:eM}};$e.memo=function(t,e){return{$$typeof:qS,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=eu.transition;eu.transition={};try{t()}finally{eu.transition=e}};$e.unstable_act=Xv;$e.useCallback=function(t,e){return un.current.useCallback(t,e)};$e.useContext=function(t){return un.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return un.current.useDeferredValue(t)};$e.useEffect=function(t,e){return un.current.useEffect(t,e)};$e.useId=function(){return un.current.useId()};$e.useImperativeHandle=function(t,e,n){return un.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return un.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return un.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return un.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return un.current.useReducer(t,e,n)};$e.useRef=function(t){return un.current.useRef(t)};$e.useState=function(t){return un.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return un.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return un.current.useTransition()};$e.version="18.3.1";kv.exports=$e;var Ae=kv.exports;const jv=BS(Ae),Zm=zS({__proto__:null,default:jv},[Ae]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nM=Ae,iM=Symbol.for("react.element"),rM=Symbol.for("react.fragment"),oM=Object.prototype.hasOwnProperty,sM=nM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,aM={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var i,r={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(i in e)oM.call(e,i)&&!aM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:iM,type:t,key:o,ref:s,props:r,_owner:sM.current}}ac.Fragment=rM;ac.jsx=Yv;ac.jsxs=Yv;Fv.exports=ac;var Fe=Fv.exports,Cd={},qv={exports:{}},On={},Kv={exports:{}},Zv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,K){var J=D.length;D.push(K);e:for(;0<J;){var ae=J-1>>>1,Te=D[ae];if(0<r(Te,K))D[ae]=K,D[J]=Te,J=ae;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var K=D[0],J=D.pop();if(J!==K){D[0]=J;e:for(var ae=0,Te=D.length,He=Te>>>1;ae<He;){var W=2*(ae+1)-1,ie=D[W],ge=W+1,he=D[ge];if(0>r(ie,J))ge<Te&&0>r(he,ie)?(D[ae]=he,D[ge]=J,ae=ge):(D[ae]=ie,D[W]=J,ae=W);else if(ge<Te&&0>r(he,J))D[ae]=he,D[ge]=J,ae=ge;else break e}}return K}function r(D,K){var J=D.sortIndex-K.sortIndex;return J!==0?J:D.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],f=1,h=null,d=3,p=!1,y=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=D)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function S(D){if(v=!1,_(D),!y)if(n(l)!==null)y=!0,X(C);else{var K=n(u);K!==null&&j(S,K.startTime-D)}}function C(D,K){y=!1,v&&(v=!1,c(P),P=-1),p=!0;var J=d;try{for(_(K),h=n(l);h!==null&&(!(h.expirationTime>K)||D&&!R());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,d=h.priorityLevel;var Te=ae(h.expirationTime<=K);K=t.unstable_now(),typeof Te=="function"?h.callback=Te:h===n(l)&&i(l),_(K)}else i(l);h=n(l)}if(h!==null)var He=!0;else{var W=n(u);W!==null&&j(S,W.startTime-K),He=!1}return He}finally{h=null,d=J,p=!1}}var A=!1,w=null,P=-1,T=5,x=-1;function R(){return!(t.unstable_now()-x<T)}function z(){if(w!==null){var D=t.unstable_now();x=D;var K=!0;try{K=w(!0,D)}finally{K?O():(A=!1,w=null)}}else A=!1}var O;if(typeof g=="function")O=function(){g(z)};else if(typeof MessageChannel<"u"){var Y=new MessageChannel,$=Y.port2;Y.port1.onmessage=z,O=function(){$.postMessage(null)}}else O=function(){m(z,0)};function X(D){w=D,A||(A=!0,O())}function j(D,K){P=m(function(){D(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||p||(y=!0,X(C))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var J=d;d=K;try{return D()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,K){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var J=d;d=D;try{return K()}finally{d=J}},t.unstable_scheduleCallback=function(D,K,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,D){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=J+Te,D={id:f++,callback:K,priorityLevel:D,startTime:J,expirationTime:Te,sortIndex:-1},J>ae?(D.sortIndex=J,e(u,D),n(l)===null&&D===n(u)&&(v?(c(P),P=-1):v=!0,j(S,J-ae))):(D.sortIndex=Te,e(l,D),y||p||(y=!0,X(C))),D},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(D){var K=d;return function(){var J=d;d=K;try{return D.apply(this,arguments)}finally{d=J}}}})(Zv);Kv.exports=Zv;var lM=Kv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uM=Ae,Un=lM;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,ga={};function co(t,e){ps(t,e),ps(t+"Capture",e)}function ps(t,e){for(ga[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bd=Object.prototype.hasOwnProperty,cM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qm={},Jm={};function fM(t){return bd.call(Jm,t)?!0:bd.call(Qm,t)?!1:cM.test(t)?Jm[t]=!0:(Qm[t]=!0,!1)}function dM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hM(t,e,n,i){if(e===null||typeof e>"u"||dM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var xp=/[\-:]([a-z])/g;function Sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(xp,Sp);qt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(xp,Sp);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(xp,Sp);qt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Mp(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hM(e,n,r,i)&&(n=null),i||r===null?fM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Qi=uM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Go=Symbol.for("react.portal"),Wo=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Rd=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),e_=Symbol.for("react.context"),wp=Symbol.for("react.forward_ref"),Pd=Symbol.for("react.suspense"),Ld=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),t_=Symbol.for("react.offscreen"),eg=Symbol.iterator;function Fs(t){return t===null||typeof t!="object"?null:(t=eg&&t[eg]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,hf;function Js(t){if(hf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hf=e&&e[1]||""}return`
`+hf+t}var pf=!1;function mf(t,e){if(!t||pf)return"";pf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),s=r.length-1,a=o.length-1;1<=s&&0<=a&&r[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(r[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||r[s]!==o[a]){var l=`
`+r[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{pf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function pM(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=mf(t.type,!1),t;case 11:return t=mf(t.type.render,!1),t;case 1:return t=mf(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Wo:return"Fragment";case Go:return"Portal";case Rd:return"Profiler";case Ep:return"StrictMode";case Pd:return"Suspense";case Ld:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e_:return(t.displayName||"Context")+".Consumer";case Jv:return(t._context.displayName||"Context")+".Provider";case wp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case ur:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function mM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===Ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function gM(t){var e=n_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(s){i=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(s){i=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ll(t){t._valueTracker||(t._valueTracker=gM(t))}function i_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Tu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Id(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r_(t,e){e=e.checked,e!=null&&Mp(t,"checked",e,!1)}function Nd(t,e){r_(t,e);var n=Ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Ud(t,e.type,n):e.hasOwnProperty("defaultValue")&&Ud(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Ud(t,e,n){(e!=="number"||Tu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function ns(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ig(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ea(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function o_(t,e){var n=Ar(e.value),i=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function rg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function s_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?s_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,a_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function va(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ra={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vM=["Webkit","ms","Moz","O"];Object.keys(ra).forEach(function(t){vM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ra[e]=ra[t]})});function l_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ra.hasOwnProperty(t)&&ra[t]?(""+e).trim():e+"px"}function u_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var _M=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kd(t,e){if(e){if(_M[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bd=null;function Ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hd=null,is=null,rs=null;function og(t){if(t=Va(t)){if(typeof Hd!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=dc(e),Hd(t.stateNode,t.type,e))}}function c_(t){is?rs?rs.push(t):rs=[t]:is=t}function f_(){if(is){var t=is,e=rs;if(rs=is=null,og(t),e)for(t=0;t<e.length;t++)og(e[t])}}function d_(t,e){return t(e)}function h_(){}var gf=!1;function p_(t,e,n){if(gf)return t(e,n);gf=!0;try{return d_(t,e,n)}finally{gf=!1,(is!==null||rs!==null)&&(h_(),f_())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=dc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Vd=!1;if(Xi)try{var ks={};Object.defineProperty(ks,"passive",{get:function(){Vd=!0}}),window.addEventListener("test",ks,ks),window.removeEventListener("test",ks,ks)}catch{Vd=!1}function yM(t,e,n,i,r,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var oa=!1,Au=null,Cu=!1,Gd=null,xM={onError:function(t){oa=!0,Au=t}};function SM(t,e,n,i,r,o,s,a,l){oa=!1,Au=null,yM.apply(xM,arguments)}function MM(t,e,n,i,r,o,s,a,l){if(SM.apply(this,arguments),oa){if(oa){var u=Au;oa=!1,Au=null}else throw Error(oe(198));Cu||(Cu=!0,Gd=u)}}function fo(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function sg(t){if(fo(t)!==t)throw Error(oe(188))}function EM(t){var e=t.alternate;if(!e){if(e=fo(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return sg(r),t;if(o===i)return sg(r),e;o=o.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=o;else{for(var s=!1,a=r.child;a;){if(a===n){s=!0,n=r,i=o;break}if(a===i){s=!0,i=r,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,i=r;break}if(a===i){s=!0,i=o,n=r;break}a=a.sibling}if(!s)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function g_(t){return t=EM(t),t!==null?v_(t):null}function v_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v_(t);if(e!==null)return e;t=t.sibling}return null}var __=Un.unstable_scheduleCallback,ag=Un.unstable_cancelCallback,wM=Un.unstable_shouldYield,TM=Un.unstable_requestPaint,At=Un.unstable_now,AM=Un.unstable_getCurrentPriorityLevel,Cp=Un.unstable_ImmediatePriority,y_=Un.unstable_UserBlockingPriority,bu=Un.unstable_NormalPriority,CM=Un.unstable_LowPriority,x_=Un.unstable_IdlePriority,lc=null,wi=null;function bM(t){if(wi&&typeof wi.onCommitFiberRoot=="function")try{wi.onCommitFiberRoot(lc,t,void 0,(t.current.flags&128)===128)}catch{}}var di=Math.clz32?Math.clz32:LM,RM=Math.log,PM=Math.LN2;function LM(t){return t>>>=0,t===0?32:31-(RM(t)/PM|0)|0}var cl=64,fl=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ru(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~r;a!==0?i=ta(a):(o&=s,o!==0&&(i=ta(o)))}else s=n&~r,s!==0?i=ta(s):o!==0&&(i=ta(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-di(e),r=1<<n,i|=t[n],e&=~r;return i}function DM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-di(o),a=1<<s,l=r[s];l===-1?(!(a&n)||a&i)&&(r[s]=DM(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S_(){var t=cl;return cl<<=1,!(cl&4194240)&&(cl=64),t}function vf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-di(e),t[e]=n}function NM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-di(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function bp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-di(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var st=0;function M_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var E_,Rp,w_,T_,A_,$d=!1,dl=[],gr=null,vr=null,_r=null,ya=new Map,xa=new Map,fr=[],UM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lg(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":ya.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function zs(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Va(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function OM(t,e,n,i,r){switch(e){case"focusin":return gr=zs(gr,t,e,n,i,r),!0;case"dragenter":return vr=zs(vr,t,e,n,i,r),!0;case"mouseover":return _r=zs(_r,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return ya.set(o,zs(ya.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,xa.set(o,zs(xa.get(o)||null,t,e,n,i,r)),!0}return!1}function C_(t){var e=qr(t.target);if(e!==null){var n=fo(e);if(n!==null){if(e=n.tag,e===13){if(e=m_(n),e!==null){t.blockedOn=e,A_(t.priority,function(){w_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function tu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Bd=i,n.target.dispatchEvent(i),Bd=null}else return e=Va(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function ug(t,e,n){tu(t)&&n.delete(e)}function FM(){$d=!1,gr!==null&&tu(gr)&&(gr=null),vr!==null&&tu(vr)&&(vr=null),_r!==null&&tu(_r)&&(_r=null),ya.forEach(ug),xa.forEach(ug)}function Bs(t,e){t.blockedOn===e&&(t.blockedOn=null,$d||($d=!0,Un.unstable_scheduleCallback(Un.unstable_NormalPriority,FM)))}function Sa(t){function e(r){return Bs(r,t)}if(0<dl.length){Bs(dl[0],t);for(var n=1;n<dl.length;n++){var i=dl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(gr!==null&&Bs(gr,t),vr!==null&&Bs(vr,t),_r!==null&&Bs(_r,t),ya.forEach(e),xa.forEach(e),n=0;n<fr.length;n++)i=fr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)C_(n),n.blockedOn===null&&fr.shift()}var os=Qi.ReactCurrentBatchConfig,Pu=!0;function kM(t,e,n,i){var r=st,o=os.transition;os.transition=null;try{st=1,Pp(t,e,n,i)}finally{st=r,os.transition=o}}function zM(t,e,n,i){var r=st,o=os.transition;os.transition=null;try{st=4,Pp(t,e,n,i)}finally{st=r,os.transition=o}}function Pp(t,e,n,i){if(Pu){var r=Xd(t,e,n,i);if(r===null)Cf(t,e,i,Lu,n),lg(t,i);else if(OM(r,t,e,n,i))i.stopPropagation();else if(lg(t,i),e&4&&-1<UM.indexOf(t)){for(;r!==null;){var o=Va(r);if(o!==null&&E_(o),o=Xd(t,e,n,i),o===null&&Cf(t,e,i,Lu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else Cf(t,e,i,null,n)}}var Lu=null;function Xd(t,e,n,i){if(Lu=null,t=Ap(i),t=qr(t),t!==null)if(e=fo(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lu=t,null}function b_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AM()){case Cp:return 1;case y_:return 4;case bu:case CM:return 16;case x_:return 536870912;default:return 16}default:return 16}}var pr=null,Lp=null,nu=null;function R_(){if(nu)return nu;var t,e=Lp,n=e.length,i,r="value"in pr?pr.value:pr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var s=n-t;for(i=1;i<=s&&e[n-i]===r[o-i];i++);return nu=r.slice(t,1<i?1-i:void 0)}function iu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function hl(){return!0}function cg(){return!1}function Fn(t){function e(n,i,r,o,s){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?hl:cg,this.isPropagationStopped=cg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dp=Fn(bs),Ha=yt({},bs,{view:0,detail:0}),BM=Fn(Ha),_f,yf,Hs,uc=yt({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hs&&(Hs&&t.type==="mousemove"?(_f=t.screenX-Hs.screenX,yf=t.screenY-Hs.screenY):yf=_f=0,Hs=t),_f)},movementY:function(t){return"movementY"in t?t.movementY:yf}}),fg=Fn(uc),HM=yt({},uc,{dataTransfer:0}),VM=Fn(HM),GM=yt({},Ha,{relatedTarget:0}),xf=Fn(GM),WM=yt({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),$M=Fn(WM),XM=yt({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jM=Fn(XM),YM=yt({},bs,{data:0}),dg=Fn(YM),qM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function QM(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZM[t])?!!e[t]:!1}function Ip(){return QM}var JM=yt({},Ha,{key:function(t){if(t.key){var e=qM[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=iu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KM[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(t){return t.type==="keypress"?iu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?iu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),e1=Fn(JM),t1=yt({},uc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hg=Fn(t1),n1=yt({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),i1=Fn(n1),r1=yt({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=Fn(r1),s1=yt({},uc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),a1=Fn(s1),l1=[9,13,27,32],Np=Xi&&"CompositionEvent"in window,sa=null;Xi&&"documentMode"in document&&(sa=document.documentMode);var u1=Xi&&"TextEvent"in window&&!sa,P_=Xi&&(!Np||sa&&8<sa&&11>=sa),pg=" ",mg=!1;function L_(t,e){switch(t){case"keyup":return l1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $o=!1;function c1(t,e){switch(t){case"compositionend":return D_(e);case"keypress":return e.which!==32?null:(mg=!0,pg);case"textInput":return t=e.data,t===pg&&mg?null:t;default:return null}}function f1(t,e){if($o)return t==="compositionend"||!Np&&L_(t,e)?(t=R_(),nu=Lp=pr=null,$o=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P_&&e.locale!=="ko"?null:e.data;default:return null}}var d1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!d1[t.type]:e==="textarea"}function I_(t,e,n,i){c_(i),e=Du(e,"onChange"),0<e.length&&(n=new Dp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var aa=null,Ma=null;function h1(t){W_(t,0)}function cc(t){var e=Yo(t);if(i_(e))return t}function p1(t,e){if(t==="change")return e}var N_=!1;if(Xi){var Sf;if(Xi){var Mf="oninput"in document;if(!Mf){var vg=document.createElement("div");vg.setAttribute("oninput","return;"),Mf=typeof vg.oninput=="function"}Sf=Mf}else Sf=!1;N_=Sf&&(!document.documentMode||9<document.documentMode)}function _g(){aa&&(aa.detachEvent("onpropertychange",U_),Ma=aa=null)}function U_(t){if(t.propertyName==="value"&&cc(Ma)){var e=[];I_(e,Ma,t,Ap(t)),p_(h1,e)}}function m1(t,e,n){t==="focusin"?(_g(),aa=e,Ma=n,aa.attachEvent("onpropertychange",U_)):t==="focusout"&&_g()}function g1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return cc(Ma)}function v1(t,e){if(t==="click")return cc(e)}function _1(t,e){if(t==="input"||t==="change")return cc(e)}function y1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pi=typeof Object.is=="function"?Object.is:y1;function Ea(t,e){if(pi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!bd.call(e,r)||!pi(t[r],e[r]))return!1}return!0}function yg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function xg(t,e){var n=yg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yg(n)}}function O_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F_(){for(var t=window,e=Tu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tu(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function x1(t){var e=F_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O_(n.ownerDocument.documentElement,n)){if(i!==null&&Up(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=xg(n,o);var s=xg(n,i);r&&s&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var S1=Xi&&"documentMode"in document&&11>=document.documentMode,Xo=null,jd=null,la=null,Yd=!1;function Sg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yd||Xo==null||Xo!==Tu(i)||(i=Xo,"selectionStart"in i&&Up(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),la&&Ea(la,i)||(la=i,i=Du(jd,"onSelect"),0<i.length&&(e=new Dp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xo)))}function pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jo={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},Ef={},k_={};Xi&&(k_=document.createElement("div").style,"AnimationEvent"in window||(delete jo.animationend.animation,delete jo.animationiteration.animation,delete jo.animationstart.animation),"TransitionEvent"in window||delete jo.transitionend.transition);function fc(t){if(Ef[t])return Ef[t];if(!jo[t])return t;var e=jo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k_)return Ef[t]=e[n];return t}var z_=fc("animationend"),B_=fc("animationiteration"),H_=fc("animationstart"),V_=fc("transitionend"),G_=new Map,Mg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(t,e){G_.set(t,e),co(e,[t])}for(var wf=0;wf<Mg.length;wf++){var Tf=Mg[wf],M1=Tf.toLowerCase(),E1=Tf[0].toUpperCase()+Tf.slice(1);Lr(M1,"on"+E1)}Lr(z_,"onAnimationEnd");Lr(B_,"onAnimationIteration");Lr(H_,"onAnimationStart");Lr("dblclick","onDoubleClick");Lr("focusin","onFocus");Lr("focusout","onBlur");Lr(V_,"onTransitionEnd");ps("onMouseEnter",["mouseout","mouseover"]);ps("onMouseLeave",["mouseout","mouseover"]);ps("onPointerEnter",["pointerout","pointerover"]);ps("onPointerLeave",["pointerout","pointerover"]);co("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));co("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));co("onBeforeInput",["compositionend","keypress","textInput","paste"]);co("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));co("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));co("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w1=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Eg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,MM(i,e,void 0,t),t.currentTarget=null}function W_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var s=i.length-1;0<=s;s--){var a=i[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&r.isPropagationStopped())break e;Eg(r,a,u),o=l}else for(s=0;s<i.length;s++){if(a=i[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&r.isPropagationStopped())break e;Eg(r,a,u),o=l}}}if(Cu)throw t=Gd,Cu=!1,Gd=null,t}function ft(t,e){var n=e[Jd];n===void 0&&(n=e[Jd]=new Set);var i=t+"__bubble";n.has(i)||($_(e,t,2,!1),n.add(i))}function Af(t,e,n){var i=0;e&&(i|=4),$_(n,t,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[ml]){t[ml]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(w1.has(n)||Af(n,!1,t),Af(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ml]||(e[ml]=!0,Af("selectionchange",!1,e))}}function $_(t,e,n,i){switch(b_(e)){case 1:var r=kM;break;case 4:r=zM;break;default:r=Pp}n=r.bind(null,e,n,t),r=void 0,!Vd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var s=i.tag;if(s===3||s===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(s===4)for(s=i.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;s=s.return}for(;a!==null;){if(s=qr(a),s===null)return;if(l=s.tag,l===5||l===6){i=o=s;continue e}a=a.parentNode}}i=i.return}p_(function(){var u=o,f=Ap(n),h=[];e:{var d=G_.get(t);if(d!==void 0){var p=Dp,y=t;switch(t){case"keypress":if(iu(n)===0)break e;case"keydown":case"keyup":p=e1;break;case"focusin":y="focus",p=xf;break;case"focusout":y="blur",p=xf;break;case"beforeblur":case"afterblur":p=xf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=fg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=i1;break;case z_:case B_:case H_:p=$M;break;case V_:p=o1;break;case"scroll":p=BM;break;case"wheel":p=a1;break;case"copy":case"cut":case"paste":p=jM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=hg}var v=(e&4)!==0,m=!v&&t==="scroll",c=v?d!==null?d+"Capture":null:d;v=[];for(var g=u,_;g!==null;){_=g;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,c!==null&&(S=_a(g,c),S!=null&&v.push(Ta(g,S,_)))),m)break;g=g.return}0<v.length&&(d=new p(d,y,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Bd&&(y=n.relatedTarget||n.fromElement)&&(qr(y)||y[ji]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?qr(y):null,y!==null&&(m=fo(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=fg,S="onMouseLeave",c="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(v=hg,S="onPointerLeave",c="onPointerEnter",g="pointer"),m=p==null?d:Yo(p),_=y==null?d:Yo(y),d=new v(S,g+"leave",p,n,f),d.target=m,d.relatedTarget=_,S=null,qr(f)===u&&(v=new v(c,g+"enter",y,n,f),v.target=_,v.relatedTarget=m,S=v),m=S,p&&y)t:{for(v=p,c=y,g=0,_=v;_;_=yo(_))g++;for(_=0,S=c;S;S=yo(S))_++;for(;0<g-_;)v=yo(v),g--;for(;0<_-g;)c=yo(c),_--;for(;g--;){if(v===c||c!==null&&v===c.alternate)break t;v=yo(v),c=yo(c)}v=null}else v=null;p!==null&&wg(h,d,p,v,!1),y!==null&&m!==null&&wg(h,m,y,v,!0)}}e:{if(d=u?Yo(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var C=p1;else if(gg(d))if(N_)C=_1;else{C=g1;var A=m1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(C=v1);if(C&&(C=C(t,u))){I_(h,C,n,f);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Ud(d,"number",d.value)}switch(A=u?Yo(u):window,t){case"focusin":(gg(A)||A.contentEditable==="true")&&(Xo=A,jd=u,la=null);break;case"focusout":la=jd=Xo=null;break;case"mousedown":Yd=!0;break;case"contextmenu":case"mouseup":case"dragend":Yd=!1,Sg(h,n,f);break;case"selectionchange":if(S1)break;case"keydown":case"keyup":Sg(h,n,f)}var w;if(Np)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $o?L_(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(P_&&n.locale!=="ko"&&($o||P!=="onCompositionStart"?P==="onCompositionEnd"&&$o&&(w=R_()):(pr=f,Lp="value"in pr?pr.value:pr.textContent,$o=!0)),A=Du(u,P),0<A.length&&(P=new dg(P,t,null,n,f),h.push({event:P,listeners:A}),w?P.data=w:(w=D_(n),w!==null&&(P.data=w)))),(w=u1?c1(t,n):f1(t,n))&&(u=Du(u,"onBeforeInput"),0<u.length&&(f=new dg("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=w))}W_(h,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Du(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=_a(t,n),o!=null&&i.unshift(Ta(t,o,r)),o=_a(t,e),o!=null&&i.push(Ta(t,o,r))),t=t.return}return i}function yo(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wg(t,e,n,i,r){for(var o=e._reactName,s=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=_a(n,o),l!=null&&s.unshift(Ta(n,l,a))):r||(l=_a(n,o),l!=null&&s.push(Ta(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var T1=/\r\n?/g,A1=/\u0000|\uFFFD/g;function Tg(t){return(typeof t=="string"?t:""+t).replace(T1,`
`).replace(A1,"")}function gl(t,e,n){if(e=Tg(e),Tg(t)!==e&&n)throw Error(oe(425))}function Iu(){}var qd=null,Kd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qd=typeof setTimeout=="function"?setTimeout:void 0,C1=typeof clearTimeout=="function"?clearTimeout:void 0,Ag=typeof Promise=="function"?Promise:void 0,b1=typeof queueMicrotask=="function"?queueMicrotask:typeof Ag<"u"?function(t){return Ag.resolve(null).then(t).catch(R1)}:Qd;function R1(t){setTimeout(function(){throw t})}function bf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Sa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Sa(e)}function yr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Rs,Aa="__reactProps$"+Rs,ji="__reactContainer$"+Rs,Jd="__reactEvents$"+Rs,P1="__reactListeners$"+Rs,L1="__reactHandles$"+Rs;function qr(t){var e=t[Mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ji]||n[Mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cg(t);t!==null;){if(n=t[Mi])return n;t=Cg(t)}return e}t=n,n=t.parentNode}return null}function Va(t){return t=t[Mi]||t[ji],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function dc(t){return t[Aa]||null}var eh=[],qo=-1;function Dr(t){return{current:t}}function ht(t){0>qo||(t.current=eh[qo],eh[qo]=null,qo--)}function ct(t,e){qo++,eh[qo]=t.current,t.current=e}var Cr={},rn=Dr(Cr),gn=Dr(!1),no=Cr;function ms(t,e){var n=t.type.contextTypes;if(!n)return Cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function vn(t){return t=t.childContextTypes,t!=null}function Nu(){ht(gn),ht(rn)}function bg(t,e,n){if(rn.current!==Cr)throw Error(oe(168));ct(rn,e),ct(gn,n)}function X_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,mM(t)||"Unknown",r));return yt({},n,i)}function Uu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Cr,no=rn.current,ct(rn,t),ct(gn,gn.current),!0}function Rg(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=X_(t,e,no),i.__reactInternalMemoizedMergedChildContext=t,ht(gn),ht(rn),ct(rn,t)):ht(gn),ct(gn,n)}var ki=null,hc=!1,Rf=!1;function j_(t){ki===null?ki=[t]:ki.push(t)}function D1(t){hc=!0,j_(t)}function Ir(){if(!Rf&&ki!==null){Rf=!0;var t=0,e=st;try{var n=ki;for(st=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}ki=null,hc=!1}catch(r){throw ki!==null&&(ki=ki.slice(t+1)),__(Cp,Ir),r}finally{st=e,Rf=!1}}return null}var Ko=[],Zo=0,Ou=null,Fu=0,Vn=[],Gn=0,io=null,Hi=1,Vi="";function Gr(t,e){Ko[Zo++]=Fu,Ko[Zo++]=Ou,Ou=t,Fu=e}function Y_(t,e,n){Vn[Gn++]=Hi,Vn[Gn++]=Vi,Vn[Gn++]=io,io=t;var i=Hi;t=Vi;var r=32-di(i)-1;i&=~(1<<r),n+=1;var o=32-di(e)+r;if(30<o){var s=r-r%5;o=(i&(1<<s)-1).toString(32),i>>=s,r-=s,Hi=1<<32-di(e)+r|n<<r|i,Vi=o+t}else Hi=1<<o|n<<r|i,Vi=t}function Op(t){t.return!==null&&(Gr(t,1),Y_(t,1,0))}function Fp(t){for(;t===Ou;)Ou=Ko[--Zo],Ko[Zo]=null,Fu=Ko[--Zo],Ko[Zo]=null;for(;t===io;)io=Vn[--Gn],Vn[Gn]=null,Vi=Vn[--Gn],Vn[Gn]=null,Hi=Vn[--Gn],Vn[Gn]=null}var In=null,Dn=null,gt=!1,li=null;function q_(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,In=t,Dn=yr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,In=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=io!==null?{id:Hi,overflow:Vi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,In=t,Dn=null,!0):!1;default:return!1}}function th(t){return(t.mode&1)!==0&&(t.flags&128)===0}function nh(t){if(gt){var e=Dn;if(e){var n=e;if(!Pg(t,e)){if(th(t))throw Error(oe(418));e=yr(n.nextSibling);var i=In;e&&Pg(t,e)?q_(i,n):(t.flags=t.flags&-4097|2,gt=!1,In=t)}}else{if(th(t))throw Error(oe(418));t.flags=t.flags&-4097|2,gt=!1,In=t}}}function Lg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;In=t}function vl(t){if(t!==In)return!1;if(!gt)return Lg(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=Dn)){if(th(t))throw K_(),Error(oe(418));for(;e;)q_(t,e),e=yr(e.nextSibling)}if(Lg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=yr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=In?yr(t.stateNode.nextSibling):null;return!0}function K_(){for(var t=Dn;t;)t=yr(t.nextSibling)}function gs(){Dn=In=null,gt=!1}function kp(t){li===null?li=[t]:li.push(t)}var I1=Qi.ReactCurrentBatchConfig;function Vs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=r.refs;s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function _l(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dg(t){var e=t._init;return e(t._payload)}function Z_(t){function e(c,g){if(t){var _=c.deletions;_===null?(c.deletions=[g],c.flags|=16):_.push(g)}}function n(c,g){if(!t)return null;for(;g!==null;)e(c,g),g=g.sibling;return null}function i(c,g){for(c=new Map;g!==null;)g.key!==null?c.set(g.key,g):c.set(g.index,g),g=g.sibling;return c}function r(c,g){return c=Er(c,g),c.index=0,c.sibling=null,c}function o(c,g,_){return c.index=_,t?(_=c.alternate,_!==null?(_=_.index,_<g?(c.flags|=2,g):_):(c.flags|=2,g)):(c.flags|=1048576,g)}function s(c){return t&&c.alternate===null&&(c.flags|=2),c}function a(c,g,_,S){return g===null||g.tag!==6?(g=Of(_,c.mode,S),g.return=c,g):(g=r(g,_),g.return=c,g)}function l(c,g,_,S){var C=_.type;return C===Wo?f(c,g,_.props.children,S,_.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&Dg(C)===g.type)?(S=r(g,_.props),S.ref=Vs(c,g,_),S.return=c,S):(S=cu(_.type,_.key,_.props,null,c.mode,S),S.ref=Vs(c,g,_),S.return=c,S)}function u(c,g,_,S){return g===null||g.tag!==4||g.stateNode.containerInfo!==_.containerInfo||g.stateNode.implementation!==_.implementation?(g=Ff(_,c.mode,S),g.return=c,g):(g=r(g,_.children||[]),g.return=c,g)}function f(c,g,_,S,C){return g===null||g.tag!==7?(g=to(_,c.mode,S,C),g.return=c,g):(g=r(g,_),g.return=c,g)}function h(c,g,_){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Of(""+g,c.mode,_),g.return=c,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return _=cu(g.type,g.key,g.props,null,c.mode,_),_.ref=Vs(c,null,g),_.return=c,_;case Go:return g=Ff(g,c.mode,_),g.return=c,g;case ur:var S=g._init;return h(c,S(g._payload),_)}if(ea(g)||Fs(g))return g=to(g,c.mode,_,null),g.return=c,g;_l(c,g)}return null}function d(c,g,_,S){var C=g!==null?g.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(c,g,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return _.key===C?l(c,g,_,S):null;case Go:return _.key===C?u(c,g,_,S):null;case ur:return C=_._init,d(c,g,C(_._payload),S)}if(ea(_)||Fs(_))return C!==null?null:f(c,g,_,S,null);_l(c,_)}return null}function p(c,g,_,S,C){if(typeof S=="string"&&S!==""||typeof S=="number")return c=c.get(_)||null,a(g,c,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case al:return c=c.get(S.key===null?_:S.key)||null,l(g,c,S,C);case Go:return c=c.get(S.key===null?_:S.key)||null,u(g,c,S,C);case ur:var A=S._init;return p(c,g,_,A(S._payload),C)}if(ea(S)||Fs(S))return c=c.get(_)||null,f(g,c,S,C,null);_l(g,S)}return null}function y(c,g,_,S){for(var C=null,A=null,w=g,P=g=0,T=null;w!==null&&P<_.length;P++){w.index>P?(T=w,w=null):T=w.sibling;var x=d(c,w,_[P],S);if(x===null){w===null&&(w=T);break}t&&w&&x.alternate===null&&e(c,w),g=o(x,g,P),A===null?C=x:A.sibling=x,A=x,w=T}if(P===_.length)return n(c,w),gt&&Gr(c,P),C;if(w===null){for(;P<_.length;P++)w=h(c,_[P],S),w!==null&&(g=o(w,g,P),A===null?C=w:A.sibling=w,A=w);return gt&&Gr(c,P),C}for(w=i(c,w);P<_.length;P++)T=p(w,c,P,_[P],S),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?P:T.key),g=o(T,g,P),A===null?C=T:A.sibling=T,A=T);return t&&w.forEach(function(R){return e(c,R)}),gt&&Gr(c,P),C}function v(c,g,_,S){var C=Fs(_);if(typeof C!="function")throw Error(oe(150));if(_=C.call(_),_==null)throw Error(oe(151));for(var A=C=null,w=g,P=g=0,T=null,x=_.next();w!==null&&!x.done;P++,x=_.next()){w.index>P?(T=w,w=null):T=w.sibling;var R=d(c,w,x.value,S);if(R===null){w===null&&(w=T);break}t&&w&&R.alternate===null&&e(c,w),g=o(R,g,P),A===null?C=R:A.sibling=R,A=R,w=T}if(x.done)return n(c,w),gt&&Gr(c,P),C;if(w===null){for(;!x.done;P++,x=_.next())x=h(c,x.value,S),x!==null&&(g=o(x,g,P),A===null?C=x:A.sibling=x,A=x);return gt&&Gr(c,P),C}for(w=i(c,w);!x.done;P++,x=_.next())x=p(w,c,P,x.value,S),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?P:x.key),g=o(x,g,P),A===null?C=x:A.sibling=x,A=x);return t&&w.forEach(function(z){return e(c,z)}),gt&&Gr(c,P),C}function m(c,g,_,S){if(typeof _=="object"&&_!==null&&_.type===Wo&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case al:e:{for(var C=_.key,A=g;A!==null;){if(A.key===C){if(C=_.type,C===Wo){if(A.tag===7){n(c,A.sibling),g=r(A,_.props.children),g.return=c,c=g;break e}}else if(A.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ur&&Dg(C)===A.type){n(c,A.sibling),g=r(A,_.props),g.ref=Vs(c,A,_),g.return=c,c=g;break e}n(c,A);break}else e(c,A);A=A.sibling}_.type===Wo?(g=to(_.props.children,c.mode,S,_.key),g.return=c,c=g):(S=cu(_.type,_.key,_.props,null,c.mode,S),S.ref=Vs(c,g,_),S.return=c,c=S)}return s(c);case Go:e:{for(A=_.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===_.containerInfo&&g.stateNode.implementation===_.implementation){n(c,g.sibling),g=r(g,_.children||[]),g.return=c,c=g;break e}else{n(c,g);break}else e(c,g);g=g.sibling}g=Ff(_,c.mode,S),g.return=c,c=g}return s(c);case ur:return A=_._init,m(c,g,A(_._payload),S)}if(ea(_))return y(c,g,_,S);if(Fs(_))return v(c,g,_,S);_l(c,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,g!==null&&g.tag===6?(n(c,g.sibling),g=r(g,_),g.return=c,c=g):(n(c,g),g=Of(_,c.mode,S),g.return=c,c=g),s(c)):n(c,g)}return m}var vs=Z_(!0),Q_=Z_(!1),ku=Dr(null),zu=null,Qo=null,zp=null;function Bp(){zp=Qo=zu=null}function Hp(t){var e=ku.current;ht(ku),t._currentValue=e}function ih(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ss(t,e){zu=t,zp=Qo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},Qo===null){if(zu===null)throw Error(oe(308));Qo=t,zu.dependencies={lanes:0,firstContext:t}}else Qo=Qo.next=t;return e}var Kr=null;function Vp(t){Kr===null?Kr=[t]:Kr.push(t)}function J_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Vp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Yi(t,i)}function Yi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var cr=!1;function Gp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ey(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function $i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function xr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(t,n)}return r=i.interleaved,r===null?(e.next=e,Vp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(t,n)}function ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}function Ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Bu(t,e,n,i){var r=t.updateQueue;cr=!1;var o=r.firstBaseUpdate,s=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==s&&(a===null?f.firstBaseUpdate=u:a.next=u,f.lastBaseUpdate=l))}if(o!==null){var h=r.baseState;s=0,f=u=l=null,a=o;do{var d=a.lane,p=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,v=a;switch(d=e,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){h=y.call(p,h,d);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(p,h,d):y,d==null)break e;h=yt({},h,d);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(u=f=p,l=h):f=f.next=p,s|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do s|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);oo|=s,t.lanes=s,t.memoizedState=h}}function Ng(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ga={},Ti=Dr(Ga),Ca=Dr(Ga),ba=Dr(Ga);function Zr(t){if(t===Ga)throw Error(oe(174));return t}function Wp(t,e){switch(ct(ba,e),ct(Ca,t),ct(Ti,Ga),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Fd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Fd(e,t)}ht(Ti),ct(Ti,e)}function _s(){ht(Ti),ht(Ca),ht(ba)}function ty(t){Zr(ba.current);var e=Zr(Ti.current),n=Fd(e,t.type);e!==n&&(ct(Ca,t),ct(Ti,n))}function $p(t){Ca.current===t&&(ht(Ti),ht(Ca))}var vt=Dr(0);function Hu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pf=[];function Xp(){for(var t=0;t<Pf.length;t++)Pf[t]._workInProgressVersionPrimary=null;Pf.length=0}var ou=Qi.ReactCurrentDispatcher,Lf=Qi.ReactCurrentBatchConfig,ro=0,_t=null,Ot=null,Ht=null,Vu=!1,ua=!1,Ra=0,N1=0;function Kt(){throw Error(oe(321))}function jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pi(t[n],e[n]))return!1;return!0}function Yp(t,e,n,i,r,o){if(ro=o,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ou.current=t===null||t.memoizedState===null?k1:z1,t=n(i,r),ua){o=0;do{if(ua=!1,Ra=0,25<=o)throw Error(oe(301));o+=1,Ht=Ot=null,e.updateQueue=null,ou.current=B1,t=n(i,r)}while(ua)}if(ou.current=Gu,e=Ot!==null&&Ot.next!==null,ro=0,Ht=Ot=_t=null,Vu=!1,e)throw Error(oe(300));return t}function qp(){var t=Ra!==0;return Ra=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?_t.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Zn(){if(Ot===null){var t=_t.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Ht===null?_t.memoizedState:Ht.next;if(e!==null)Ht=e,Ot=t;else{if(t===null)throw Error(oe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Ht===null?_t.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Pa(t,e){return typeof e=="function"?e(t):e}function Df(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var s=r.next;r.next=o.next,o.next=s}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var a=s=null,l=null,u=o;do{var f=u.lane;if((ro&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,s=i):l=l.next=h,_t.lanes|=f,oo|=f}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=a,pi(i,e.memoizedState)||(mn=!0),e.memoizedState=i,e.baseState=s,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,_t.lanes|=o,oo|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function If(t){var e=Zn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var s=r=r.next;do o=t(o,s.action),s=s.next;while(s!==r);pi(o,e.memoizedState)||(mn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function ny(){}function iy(t,e){var n=_t,i=Zn(),r=e(),o=!pi(i.memoizedState,r);if(o&&(i.memoizedState=r,mn=!0),i=i.queue,Kp(sy.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ht!==null&&Ht.memoizedState.tag&1){if(n.flags|=2048,La(9,oy.bind(null,n,i,r,e),void 0,null),Gt===null)throw Error(oe(349));ro&30||ry(n,e,r)}return r}function ry(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oy(t,e,n,i){e.value=n,e.getSnapshot=i,ay(e)&&ly(t)}function sy(t,e,n){return n(function(){ay(e)&&ly(t)})}function ay(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pi(t,n)}catch{return!0}}function ly(t){var e=Yi(t,1);e!==null&&hi(e,t,1,-1)}function Ug(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=F1.bind(null,_t,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function uy(){return Zn().memoizedState}function su(t,e,n,i){var r=vi();_t.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function pc(t,e,n,i){var r=Zn();i=i===void 0?null:i;var o=void 0;if(Ot!==null){var s=Ot.memoizedState;if(o=s.destroy,i!==null&&jp(i,s.deps)){r.memoizedState=La(e,n,o,i);return}}_t.flags|=t,r.memoizedState=La(1|e,n,o,i)}function Og(t,e){return su(8390656,8,t,e)}function Kp(t,e){return pc(2048,8,t,e)}function cy(t,e){return pc(4,2,t,e)}function fy(t,e){return pc(4,4,t,e)}function dy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hy(t,e,n){return n=n!=null?n.concat([t]):null,pc(4,4,dy.bind(null,e,t),n)}function Zp(){}function py(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function my(t,e){var n=Zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&jp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function gy(t,e,n){return ro&21?(pi(n,e)||(n=S_(),_t.lanes|=n,oo|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mn=!0),t.memoizedState=n)}function U1(t,e){var n=st;st=n!==0&&4>n?n:4,t(!0);var i=Lf.transition;Lf.transition={};try{t(!1),e()}finally{st=n,Lf.transition=i}}function vy(){return Zn().memoizedState}function O1(t,e,n){var i=Mr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_y(t))yy(e,n);else if(n=J_(t,e,n,i),n!==null){var r=ln();hi(n,t,i,r),xy(n,e,i)}}function F1(t,e,n){var i=Mr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_y(t))yy(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(r.hasEagerState=!0,r.eagerState=a,pi(a,s)){var l=e.interleaved;l===null?(r.next=r,Vp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=J_(t,e,r,i),n!==null&&(r=ln(),hi(n,t,i,r),xy(n,e,i))}}function _y(t){var e=t.alternate;return t===_t||e!==null&&e===_t}function yy(t,e){ua=Vu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,bp(t,n)}}var Gu={readContext:Kn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},k1={readContext:Kn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:Og,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,su(4194308,4,dy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return su(4194308,4,t,e)},useInsertionEffect:function(t,e){return su(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=O1.bind(null,_t,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:Ug,useDebugValue:Zp,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=Ug(!1),e=t[0];return t=U1.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=_t,r=vi();if(gt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Gt===null)throw Error(oe(349));ro&30||ry(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Og(sy.bind(null,i,o,t),[t]),i.flags|=2048,La(9,oy.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=vi(),e=Gt.identifierPrefix;if(gt){var n=Vi,i=Hi;n=(i&~(1<<32-di(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ra++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=N1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},z1={readContext:Kn,useCallback:py,useContext:Kn,useEffect:Kp,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:Df,useRef:uy,useState:function(){return Df(Pa)},useDebugValue:Zp,useDeferredValue:function(t){var e=Zn();return gy(e,Ot.memoizedState,t)},useTransition:function(){var t=Df(Pa)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:vy,unstable_isNewReconciler:!1},B1={readContext:Kn,useCallback:py,useContext:Kn,useEffect:Kp,useImperativeHandle:hy,useInsertionEffect:cy,useLayoutEffect:fy,useMemo:my,useReducer:If,useRef:uy,useState:function(){return If(Pa)},useDebugValue:Zp,useDeferredValue:function(t){var e=Zn();return Ot===null?e.memoizedState=t:gy(e,Ot.memoizedState,t)},useTransition:function(){var t=If(Pa)[0],e=Zn().memoizedState;return[t,e]},useMutableSource:ny,useSyncExternalStore:iy,useId:vy,unstable_isNewReconciler:!1};function si(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function rh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mc={isMounted:function(t){return(t=t._reactInternals)?fo(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Mr(t),o=$i(i,r);o.payload=e,n!=null&&(o.callback=n),e=xr(t,o,r),e!==null&&(hi(e,t,r,i),ru(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=ln(),r=Mr(t),o=$i(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=xr(t,o,r),e!==null&&(hi(e,t,r,i),ru(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ln(),i=Mr(t),r=$i(n,i);r.tag=2,e!=null&&(r.callback=e),e=xr(t,r,i),e!==null&&(hi(e,t,i,n),ru(e,t,i))}};function Fg(t,e,n,i,r,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,o):!0}function Sy(t,e,n){var i=!1,r=Cr,o=e.contextType;return typeof o=="object"&&o!==null?o=Kn(o):(r=vn(e)?no:rn.current,i=e.contextTypes,o=(i=i!=null)?ms(t,r):Cr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function kg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mc.enqueueReplaceState(e,e.state,null)}function oh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Gp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Kn(o):(o=vn(e)?no:rn.current,r.context=ms(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(rh(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mc.enqueueReplaceState(r,r.state,null),Bu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=pM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function Nf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function My(t,e,n){n=$i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){$u||($u=!0,gh=i),sh(t,e)},n}function Ey(t,e,n){n=$i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sh(t,e),typeof i!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function zg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new H1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=tE.bind(null,t,e,n),e.then(t,t))}function Bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Hg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=$i(-1,1),e.tag=2,xr(n,e,1))),n.lanes|=1),t)}var V1=Qi.ReactCurrentOwner,mn=!1;function sn(t,e,n,i){e.child=t===null?Q_(e,null,n,i):vs(e,t.child,n,i)}function Vg(t,e,n,i,r){n=n.render;var o=e.ref;return ss(e,r),i=Yp(t,e,n,i,o,r),n=qp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&n&&Op(e),e.flags|=1,sn(t,e,i,r),e.child)}function Gg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!om(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,wy(t,e,o,i,r)):(t=cu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(s,i)&&t.ref===e.ref)return qi(t,e,r)}return e.flags|=1,t=Er(o,i),t.ref=e.ref,t.return=e,e.child=t}function wy(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ea(o,i)&&t.ref===e.ref)if(mn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(mn=!0);else return e.lanes=t.lanes,qi(t,e,r)}return ah(t,e,n,i,r)}function Ty(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ct(es,Rn),Rn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ct(es,Rn),Rn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,ct(es,Rn),Rn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,ct(es,Rn),Rn|=i;return sn(t,e,r,n),e.child}function Ay(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ah(t,e,n,i,r){var o=vn(n)?no:rn.current;return o=ms(e,o),ss(e,r),n=Yp(t,e,n,i,o,r),i=qp(),t!==null&&!mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,qi(t,e,r)):(gt&&i&&Op(e),e.flags|=1,sn(t,e,n,r),e.child)}function Wg(t,e,n,i,r){if(vn(n)){var o=!0;Uu(e)}else o=!1;if(ss(e,r),e.stateNode===null)au(t,e),Sy(e,n,i),oh(e,n,i,r),i=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kn(u):(u=vn(n)?no:rn.current,u=ms(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==i||l!==u)&&kg(e,s,i,u),cr=!1;var d=e.memoizedState;s.state=d,Bu(e,i,s,r),l=e.memoizedState,a!==i||d!==l||gn.current||cr?(typeof f=="function"&&(rh(e,n,f,i),l=e.memoizedState),(a=cr||Fg(e,n,a,i,d,l,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),s.props=i,s.state=l,s.context=u,i=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,ey(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:si(e.type,a),s.props=u,h=e.pendingProps,d=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=vn(n)?no:rn.current,l=ms(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==h||d!==l)&&kg(e,s,i,l),cr=!1,d=e.memoizedState,s.state=d,Bu(e,i,s,r);var y=e.memoizedState;a!==h||d!==y||gn.current||cr?(typeof p=="function"&&(rh(e,n,p,i),y=e.memoizedState),(u=cr||Fg(e,n,u,i,d,y,l)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,y,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,y,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),s.props=i,s.state=y,s.context=l,i=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return lh(t,e,n,i,o,r)}function lh(t,e,n,i,r,o){Ay(t,e);var s=(e.flags&128)!==0;if(!i&&!s)return r&&Rg(e,n,!1),qi(t,e,o);i=e.stateNode,V1.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&s?(e.child=vs(e,t.child,null,o),e.child=vs(e,null,a,o)):sn(t,e,a,o),e.memoizedState=i.state,r&&Rg(e,n,!0),e.child}function Cy(t){var e=t.stateNode;e.pendingContext?bg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bg(t,e.context,!1),Wp(t,e.containerInfo)}function $g(t,e,n,i,r){return gs(),kp(r),e.flags|=256,sn(t,e,n,i),e.child}var uh={dehydrated:null,treeContext:null,retryLane:0};function ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function by(t,e,n){var i=e.pendingProps,r=vt.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ct(vt,r&1),t===null)return nh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=i.children,t=i.fallback,o?(i=e.mode,o=e.child,s={mode:"hidden",children:s},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=_c(s,i,0,null),t=to(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=ch(n),e.memoizedState=uh,t):Qp(e,s));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return G1(t,e,s,i,a,r,n);if(o){o=i.fallback,s=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(s&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?o=Er(a,o):(o=to(o,s,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,s=t.child.memoizedState,s=s===null?ch(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=uh,i}return o=t.child,t=o.sibling,i=Er(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Qp(t,e){return e=_c({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yl(t,e,n,i){return i!==null&&kp(i),vs(e,t.child,null,n),t=Qp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G1(t,e,n,i,r,o,s){if(n)return e.flags&256?(e.flags&=-257,i=Nf(Error(oe(422))),yl(t,e,s,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=_c({mode:"visible",children:i.children},r,0,null),o=to(o,r,s,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&vs(e,t.child,null,s),e.child.memoizedState=ch(s),e.memoizedState=uh,o);if(!(e.mode&1))return yl(t,e,s,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,o=Error(oe(419)),i=Nf(o,i,void 0),yl(t,e,s,i)}if(a=(s&t.childLanes)!==0,mn||a){if(i=Gt,i!==null){switch(s&-s){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|s)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Yi(t,r),hi(i,t,r,-1))}return rm(),i=Nf(Error(oe(421))),yl(t,e,s,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=nE.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Dn=yr(r.nextSibling),In=e,gt=!0,li=null,t!==null&&(Vn[Gn++]=Hi,Vn[Gn++]=Vi,Vn[Gn++]=io,Hi=t.id,Vi=t.overflow,io=e),e=Qp(e,i.children),e.flags|=4096,e)}function Xg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ih(t.return,e,n)}function Uf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Ry(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(sn(t,e,i.children,n),i=vt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Xg(t,n,e);else if(t.tag===19)Xg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ct(vt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Uf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Uf(e,!0,n,null,o);break;case"together":Uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function au(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function qi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oo|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function W1(t,e,n){switch(e.tag){case 3:Cy(e),gs();break;case 5:ty(e);break;case 1:vn(e.type)&&Uu(e);break;case 4:Wp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ct(ku,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ct(vt,vt.current&1),e.flags|=128,null):n&e.child.childLanes?by(t,e,n):(ct(vt,vt.current&1),t=qi(t,e,n),t!==null?t.sibling:null);ct(vt,vt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Ry(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ct(vt,vt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ty(t,e,n)}return qi(t,e,n)}var Py,fh,Ly,Dy;Py=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};fh=function(){};Ly=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Zr(Ti.current);var o=null;switch(n){case"input":r=Id(t,r),i=Id(t,i),o=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),o=[];break;case"textarea":r=Od(t,r),i=Od(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Iu)}kd(n,i);var s;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ga.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ga.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Dy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Gs(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $1(t,e,n){var i=e.pendingProps;switch(Fp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return vn(e.type)&&Nu(),Zt(e),null;case 3:return i=e.stateNode,_s(),ht(gn),ht(rn),Xp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(vl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,li!==null&&(yh(li),li=null))),fh(t,e),Zt(e),null;case 5:$p(e);var r=Zr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)Ly(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=Zr(Ti.current),vl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Mi]=e,i[Aa]=o,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)ft(na[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":tg(i,o),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ft("invalid",i);break;case"textarea":ig(i,o),ft("invalid",i)}kd(n,o),r=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?i.textContent!==a&&(o.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&gl(i.textContent,a,t),r=["children",""+a]):ga.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&ft("scroll",i)}switch(n){case"input":ll(i),ng(i,o,!0);break;case"textarea":ll(i),rg(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Iu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{s=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=s_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=s.createElement(n,{is:i.is}):(t=s.createElement(n),n==="select"&&(s=t,i.multiple?s.multiple=!0:i.size&&(s.size=i.size))):t=s.createElementNS(t,n),t[Mi]=e,t[Aa]=i,Py(t,e,!1,!1),e.stateNode=t;e:{switch(s=zd(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)ft(na[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":tg(t,i),r=Id(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":ig(t,i),r=Od(t,i),ft("invalid",t);break;default:r=i}kd(n,r),a=r;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?u_(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&a_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(t,l):typeof l=="number"&&va(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ga.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ft("scroll",t):l!=null&&Mp(t,o,l,s))}switch(n){case"input":ll(t),ng(t,i,!1);break;case"textarea":ll(t),rg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ar(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ns(t,!!i.multiple,o,!1):i.defaultValue!=null&&ns(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Iu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)Dy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Zr(ba.current),Zr(Ti.current),vl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Mi]=e,(o=i.nodeValue!==n)&&(t=In,t!==null))switch(t.tag){case 3:gl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&gl(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return Zt(e),null;case 13:if(ht(vt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Dn!==null&&e.mode&1&&!(e.flags&128))K_(),gs(),e.flags|=98560,o=!1;else if(o=vl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(oe(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(oe(317));o[Mi]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),o=!1}else li!==null&&(yh(li),li=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||vt.current&1?Ft===0&&(Ft=3):rm())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return _s(),fh(t,e),t===null&&wa(e.stateNode.containerInfo),Zt(e),null;case 10:return Hp(e.type._context),Zt(e),null;case 17:return vn(e.type)&&Nu(),Zt(e),null;case 19:if(ht(vt),o=e.memoizedState,o===null)return Zt(e),null;if(i=(e.flags&128)!==0,s=o.rendering,s===null)if(i)Gs(o,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Hu(t),s!==null){for(e.flags|=128,Gs(o,!1),i=s.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ct(vt,vt.current&1|2),e.child}t=t.sibling}o.tail!==null&&At()>xs&&(e.flags|=128,i=!0,Gs(o,!1),e.lanes=4194304)}else{if(!i)if(t=Hu(s),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!gt)return Zt(e),null}else 2*At()-o.renderingStartTime>xs&&n!==1073741824&&(e.flags|=128,i=!0,Gs(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=At(),e.sibling=null,n=vt.current,ct(vt,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return im(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function X1(t,e){switch(Fp(e),e.tag){case 1:return vn(e.type)&&Nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ht(gn),ht(rn),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(ht(vt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ht(vt),null;case 4:return _s(),null;case 10:return Hp(e.type._context),null;case 22:case 23:return im(),null;case 24:return null;default:return null}}var xl=!1,tn=!1,j1=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Jo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function dh(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var jg=!1;function Y1(t,e){if(qd=Pu,t=F_(),Up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,f=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=s+r),h!==o||i!==0&&h.nodeType!==3||(l=s+i),h.nodeType===3&&(s+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=s),d===o&&++f===i&&(l=s),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Kd={focusedElem:t,selectionRange:n},Pu=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,m=y.memoizedState,c=e.stateNode,g=c.getSnapshotBeforeUpdate(e.elementType===e.type?v:si(e.type,v),m);c.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return y=jg,jg=!1,y}function ca(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&dh(e,n,o)}r=r.next}while(r!==i)}}function gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Iy(t){var e=t.alternate;e!==null&&(t.alternate=null,Iy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mi],delete e[Aa],delete e[Jd],delete e[P1],delete e[L1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Ny(t){return t.tag===5||t.tag===3||t.tag===4}function Yg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ny(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ph(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Iu));else if(i!==4&&(t=t.child,t!==null))for(ph(t,e,n),t=t.sibling;t!==null;)ph(t,e,n),t=t.sibling}function mh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(mh(t,e,n),t=t.sibling;t!==null;)mh(t,e,n),t=t.sibling}var Xt=null,ai=!1;function tr(t,e,n){for(n=n.child;n!==null;)Uy(t,e,n),n=n.sibling}function Uy(t,e,n){if(wi&&typeof wi.onCommitFiberUnmount=="function")try{wi.onCommitFiberUnmount(lc,n)}catch{}switch(n.tag){case 5:tn||Jo(n,e);case 6:var i=Xt,r=ai;Xt=null,tr(t,e,n),Xt=i,ai=r,Xt!==null&&(ai?(t=Xt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Xt.removeChild(n.stateNode));break;case 18:Xt!==null&&(ai?(t=Xt,n=n.stateNode,t.nodeType===8?bf(t.parentNode,n):t.nodeType===1&&bf(t,n),Sa(t)):bf(Xt,n.stateNode));break;case 4:i=Xt,r=ai,Xt=n.stateNode.containerInfo,ai=!0,tr(t,e,n),Xt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!tn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dh(n,e,s),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!tn&&(Jo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(tn=(i=tn)||n.memoizedState!==null,tr(t,e,n),tn=i):tr(t,e,n);break;default:tr(t,e,n)}}function qg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j1),e.forEach(function(i){var r=iE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ni(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:Xt=a.stateNode,ai=!1;break e;case 3:Xt=a.stateNode.containerInfo,ai=!0;break e;case 4:Xt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Xt===null)throw Error(oe(160));Uy(o,s,r),Xt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Oy(e,t),e=e.sibling}function Oy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ni(e,t),gi(t),i&4){try{ca(3,t,t.return),gc(3,t)}catch(v){Tt(t,t.return,v)}try{ca(5,t,t.return)}catch(v){Tt(t,t.return,v)}}break;case 1:ni(e,t),gi(t),i&512&&n!==null&&Jo(n,n.return);break;case 5:if(ni(e,t),gi(t),i&512&&n!==null&&Jo(n,n.return),t.flags&32){var r=t.stateNode;try{va(r,"")}catch(v){Tt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&r_(r,o),zd(a,s);var u=zd(a,o);for(s=0;s<l.length;s+=2){var f=l[s],h=l[s+1];f==="style"?u_(r,h):f==="dangerouslySetInnerHTML"?a_(r,h):f==="children"?va(r,h):Mp(r,f,h,u)}switch(a){case"input":Nd(r,o);break;case"textarea":o_(r,o);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ns(r,!!o.multiple,p,!1):d!==!!o.multiple&&(o.defaultValue!=null?ns(r,!!o.multiple,o.defaultValue,!0):ns(r,!!o.multiple,o.multiple?[]:"",!1))}r[Aa]=o}catch(v){Tt(t,t.return,v)}}break;case 6:if(ni(e,t),gi(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){Tt(t,t.return,v)}}break;case 3:if(ni(e,t),gi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(v){Tt(t,t.return,v)}break;case 4:ni(e,t),gi(t);break;case 13:ni(e,t),gi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(tm=At())),i&4&&qg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tn=(u=tn)||f,ni(e,t),tn=u):ni(e,t),gi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(xe=t,f=t.child;f!==null;){for(h=xe=f;xe!==null;){switch(d=xe,p=d.child,d.tag){case 0:case 11:case 14:case 15:ca(4,d,d.return);break;case 1:Jo(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Tt(i,n,v)}}break;case 5:Jo(d,d.return);break;case 22:if(d.memoizedState!==null){Zg(h);continue}}p!==null?(p.return=d,xe=p):Zg(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=h.stateNode,l=h.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=l_("display",s))}catch(v){Tt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){Tt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ni(e,t),gi(t),i&4&&qg(t);break;case 21:break;default:ni(e,t),gi(t)}}function gi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Ny(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(va(r,""),i.flags&=-33);var o=Yg(t);mh(t,o,r);break;case 3:case 4:var s=i.stateNode.containerInfo,a=Yg(t);ph(t,a,s);break;default:throw Error(oe(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function q1(t,e,n){xe=t,Fy(t)}function Fy(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,o=r.child;if(r.tag===22&&i){var s=r.memoizedState!==null||xl;if(!s){var a=r.alternate,l=a!==null&&a.memoizedState!==null||tn;a=xl;var u=tn;if(xl=s,(tn=l)&&!u)for(xe=r;xe!==null;)s=xe,l=s.child,s.tag===22&&s.memoizedState!==null?Qg(r):l!==null?(l.return=s,xe=l):Qg(r);for(;o!==null;)xe=o,Fy(o),o=o.sibling;xe=r,xl=a,tn=u}Kg(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,xe=o):Kg(t)}}function Kg(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tn||gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!tn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:si(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&Ng(e,o,i);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ng(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Sa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}tn||e.flags&512&&hh(e)}catch(d){Tt(e,e.return,d)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Zg(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Qg(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var o=e.return;try{hh(e)}catch(l){Tt(e,o,l)}break;case 5:var s=e.return;try{hh(e)}catch(l){Tt(e,s,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){xe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,xe=a;break}xe=e.return}}var K1=Math.ceil,Wu=Qi.ReactCurrentDispatcher,Jp=Qi.ReactCurrentOwner,Yn=Qi.ReactCurrentBatchConfig,qe=0,Gt=null,It=null,Yt=0,Rn=0,es=Dr(0),Ft=0,Da=null,oo=0,vc=0,em=0,fa=null,hn=null,tm=0,xs=1/0,Fi=null,$u=!1,gh=null,Sr=null,Sl=!1,mr=null,Xu=0,da=0,vh=null,lu=-1,uu=0;function ln(){return qe&6?At():lu!==-1?lu:lu=At()}function Mr(t){return t.mode&1?qe&2&&Yt!==0?Yt&-Yt:I1.transition!==null?(uu===0&&(uu=S_()),uu):(t=st,t!==0||(t=window.event,t=t===void 0?16:b_(t.type)),t):1}function hi(t,e,n,i){if(50<da)throw da=0,vh=null,Error(oe(185));Ba(t,n,i),(!(qe&2)||t!==Gt)&&(t===Gt&&(!(qe&2)&&(vc|=n),Ft===4&&dr(t,Yt)),_n(t,i),n===1&&qe===0&&!(e.mode&1)&&(xs=At()+500,hc&&Ir()))}function _n(t,e){var n=t.callbackNode;IM(t,e);var i=Ru(t,t===Gt?Yt:0);if(i===0)n!==null&&ag(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&ag(n),e===1)t.tag===0?D1(Jg.bind(null,t)):j_(Jg.bind(null,t)),b1(function(){!(qe&6)&&Ir()}),n=null;else{switch(M_(i)){case 1:n=Cp;break;case 4:n=y_;break;case 16:n=bu;break;case 536870912:n=x_;break;default:n=bu}n=$y(n,ky.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function ky(t,e){if(lu=-1,uu=0,qe&6)throw Error(oe(327));var n=t.callbackNode;if(as()&&t.callbackNode!==n)return null;var i=Ru(t,t===Gt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ju(t,i);else{e=i;var r=qe;qe|=2;var o=By();(Gt!==t||Yt!==e)&&(Fi=null,xs=At()+500,eo(t,e));do try{J1();break}catch(a){zy(t,a)}while(!0);Bp(),Wu.current=o,qe=r,It!==null?e=0:(Gt=null,Yt=0,e=Ft)}if(e!==0){if(e===2&&(r=Wd(t),r!==0&&(i=r,e=_h(t,r))),e===1)throw n=Da,eo(t,0),dr(t,i),_n(t,At()),n;if(e===6)dr(t,i);else{if(r=t.current.alternate,!(i&30)&&!Z1(r)&&(e=ju(t,i),e===2&&(o=Wd(t),o!==0&&(i=o,e=_h(t,o))),e===1))throw n=Da,eo(t,0),dr(t,i),_n(t,At()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Wr(t,hn,Fi);break;case 3:if(dr(t,i),(i&130023424)===i&&(e=tm+500-At(),10<e)){if(Ru(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){ln(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Qd(Wr.bind(null,t,hn,Fi),e);break}Wr(t,hn,Fi);break;case 4:if(dr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var s=31-di(i);o=1<<s,s=e[s],s>r&&(r=s),i&=~o}if(i=r,i=At()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*K1(i/1960))-i,10<i){t.timeoutHandle=Qd(Wr.bind(null,t,hn,Fi),i);break}Wr(t,hn,Fi);break;case 5:Wr(t,hn,Fi);break;default:throw Error(oe(329))}}}return _n(t,At()),t.callbackNode===n?ky.bind(null,t):null}function _h(t,e){var n=fa;return t.current.memoizedState.isDehydrated&&(eo(t,e).flags|=256),t=ju(t,e),t!==2&&(e=hn,hn=n,e!==null&&yh(e)),t}function yh(t){hn===null?hn=t:hn.push.apply(hn,t)}function Z1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!pi(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function dr(t,e){for(e&=~em,e&=~vc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-di(e),i=1<<n;t[n]=-1,e&=~i}}function Jg(t){if(qe&6)throw Error(oe(327));as();var e=Ru(t,0);if(!(e&1))return _n(t,At()),null;var n=ju(t,e);if(t.tag!==0&&n===2){var i=Wd(t);i!==0&&(e=i,n=_h(t,i))}if(n===1)throw n=Da,eo(t,0),dr(t,e),_n(t,At()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,hn,Fi),_n(t,At()),null}function nm(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(xs=At()+500,hc&&Ir())}}function so(t){mr!==null&&mr.tag===0&&!(qe&6)&&as();var e=qe;qe|=1;var n=Yn.transition,i=st;try{if(Yn.transition=null,st=1,t)return t()}finally{st=i,Yn.transition=n,qe=e,!(qe&6)&&Ir()}}function im(){Rn=es.current,ht(es)}function eo(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,C1(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Fp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Nu();break;case 3:_s(),ht(gn),ht(rn),Xp();break;case 5:$p(i);break;case 4:_s();break;case 13:ht(vt);break;case 19:ht(vt);break;case 10:Hp(i.type._context);break;case 22:case 23:im()}n=n.return}if(Gt=t,It=t=Er(t.current,null),Yt=Rn=e,Ft=0,Da=null,em=vc=oo=0,hn=fa=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var s=o.next;o.next=r,i.next=s}n.pending=i}Kr=null}return t}function zy(t,e){do{var n=It;try{if(Bp(),ou.current=Gu,Vu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Vu=!1}if(ro=0,Ht=Ot=_t=null,ua=!1,Ra=0,Jp.current=null,n===null||n.return===null){Ft=1,Da=e,It=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Bg(s);if(p!==null){p.flags&=-257,Hg(p,s,a,o,e),p.mode&1&&zg(o,u,e),e=p,l=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(l),e.updateQueue=v}else y.add(l);break e}else{if(!(e&1)){zg(o,u,e),rm();break e}l=Error(oe(426))}}else if(gt&&a.mode&1){var m=Bg(s);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Hg(m,s,a,o,e),kp(ys(l,a));break e}}o=l=ys(l,a),Ft!==4&&(Ft=2),fa===null?fa=[o]:fa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var c=My(o,l,e);Ig(o,c);break e;case 1:a=l;var g=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Sr===null||!Sr.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var S=Ey(o,a,e);Ig(o,S);break e}}o=o.return}while(o!==null)}Vy(n)}catch(C){e=C,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function By(){var t=Wu.current;return Wu.current=Gu,t===null?Gu:t}function rm(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Gt===null||!(oo&268435455)&&!(vc&268435455)||dr(Gt,Yt)}function ju(t,e){var n=qe;qe|=2;var i=By();(Gt!==t||Yt!==e)&&(Fi=null,eo(t,e));do try{Q1();break}catch(r){zy(t,r)}while(!0);if(Bp(),qe=n,Wu.current=i,It!==null)throw Error(oe(261));return Gt=null,Yt=0,Ft}function Q1(){for(;It!==null;)Hy(It)}function J1(){for(;It!==null&&!wM();)Hy(It)}function Hy(t){var e=Wy(t.alternate,t,Rn);t.memoizedProps=t.pendingProps,e===null?Vy(t):It=e,Jp.current=null}function Vy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=X1(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,It=null;return}}else if(n=$1(n,e,Rn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ft===0&&(Ft=5)}function Wr(t,e,n){var i=st,r=Yn.transition;try{Yn.transition=null,st=1,eE(t,e,n,i)}finally{Yn.transition=r,st=i}return null}function eE(t,e,n,i){do as();while(mr!==null);if(qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(NM(t,o),t===Gt&&(It=Gt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Sl||(Sl=!0,$y(bu,function(){return as(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Yn.transition,Yn.transition=null;var s=st;st=1;var a=qe;qe|=4,Jp.current=null,Y1(t,n),Oy(n,t),x1(Kd),Pu=!!qd,Kd=qd=null,t.current=n,q1(n),TM(),qe=a,st=s,Yn.transition=o}else t.current=n;if(Sl&&(Sl=!1,mr=t,Xu=r),o=t.pendingLanes,o===0&&(Sr=null),bM(n.stateNode),_n(t,At()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if($u)throw $u=!1,t=gh,gh=null,t;return Xu&1&&t.tag!==0&&as(),o=t.pendingLanes,o&1?t===vh?da++:(da=0,vh=t):da=0,Ir(),null}function as(){if(mr!==null){var t=M_(Xu),e=Yn.transition,n=st;try{if(Yn.transition=null,st=16>t?16:t,mr===null)var i=!1;else{if(t=mr,mr=null,Xu=0,qe&6)throw Error(oe(331));var r=qe;for(qe|=4,xe=t.current;xe!==null;){var o=xe,s=o.child;if(xe.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(xe=u;xe!==null;){var f=xe;switch(f.tag){case 0:case 11:case 15:ca(8,f,o)}var h=f.child;if(h!==null)h.return=f,xe=h;else for(;xe!==null;){f=xe;var d=f.sibling,p=f.return;if(Iy(f),f===u){xe=null;break}if(d!==null){d.return=p,xe=d;break}xe=p}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}xe=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,xe=s;else e:for(;xe!==null;){if(o=xe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ca(9,o,o.return)}var c=o.sibling;if(c!==null){c.return=o.return,xe=c;break e}xe=o.return}}var g=t.current;for(xe=g;xe!==null;){s=xe;var _=s.child;if(s.subtreeFlags&2064&&_!==null)_.return=s,xe=_;else e:for(s=g;xe!==null;){if(a=xe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gc(9,a)}}catch(C){Tt(a,a.return,C)}if(a===s){xe=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,xe=S;break e}xe=a.return}}if(qe=r,Ir(),wi&&typeof wi.onPostCommitFiberRoot=="function")try{wi.onPostCommitFiberRoot(lc,t)}catch{}i=!0}return i}finally{st=n,Yn.transition=e}}return!1}function e0(t,e,n){e=ys(n,e),e=My(t,e,1),t=xr(t,e,1),e=ln(),t!==null&&(Ba(t,1,e),_n(t,e))}function Tt(t,e,n){if(t.tag===3)e0(t,t,n);else for(;e!==null;){if(e.tag===3){e0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sr===null||!Sr.has(i))){t=ys(n,t),t=Ey(e,t,1),e=xr(e,t,1),t=ln(),e!==null&&(Ba(e,1,t),_n(e,t));break}}e=e.return}}function tE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=ln(),t.pingedLanes|=t.suspendedLanes&n,Gt===t&&(Yt&n)===n&&(Ft===4||Ft===3&&(Yt&130023424)===Yt&&500>At()-tm?eo(t,0):em|=n),_n(t,e)}function Gy(t,e){e===0&&(t.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var n=ln();t=Yi(t,e),t!==null&&(Ba(t,e,n),_n(t,n))}function nE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Gy(t,n)}function iE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),Gy(t,n)}var Wy;Wy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gn.current)mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mn=!1,W1(t,e,n);mn=!!(t.flags&131072)}else mn=!1,gt&&e.flags&1048576&&Y_(e,Fu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;au(t,e),t=e.pendingProps;var r=ms(e,rn.current);ss(e,n),r=Yp(null,e,i,t,r,n);var o=qp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,vn(i)?(o=!0,Uu(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Gp(e),r.updater=mc,e.stateNode=r,r._reactInternals=e,oh(e,i,t,n),e=lh(null,e,i,!0,o,n)):(e.tag=0,gt&&o&&Op(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(au(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oE(i),t=si(i,t),r){case 0:e=ah(null,e,i,t,n);break e;case 1:e=Wg(null,e,i,t,n);break e;case 11:e=Vg(null,e,i,t,n);break e;case 14:e=Gg(null,e,i,si(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),ah(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Wg(t,e,i,r,n);case 3:e:{if(Cy(e),t===null)throw Error(oe(387));i=e.pendingProps,o=e.memoizedState,r=o.element,ey(t,e),Bu(e,i,null,n);var s=e.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=ys(Error(oe(423)),e),e=$g(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(oe(424)),e),e=$g(t,e,i,n,r);break e}else for(Dn=yr(e.stateNode.containerInfo.firstChild),In=e,gt=!0,li=null,n=Q_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=qi(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return ty(e),t===null&&nh(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,s=r.children,Zd(i,r)?s=null:o!==null&&Zd(i,o)&&(e.flags|=32),Ay(t,e),sn(t,e,s,n),e.child;case 6:return t===null&&nh(e),null;case 13:return by(t,e,n);case 4:return Wp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Vg(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,s=r.value,ct(ku,i._currentValue),i._currentValue=s,o!==null)if(pi(o.value,s)){if(o.children===r.children&&!gn.current){e=qi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=$i(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ih(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(oe(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ih(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ss(e,n),r=Kn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Gg(t,e,i,r,n);case 15:return wy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),au(t,e),e.tag=1,vn(i)?(t=!0,Uu(e)):t=!1,ss(e,n),Sy(e,i,r),oh(e,i,r,n),lh(null,e,i,!0,t,n);case 19:return Ry(t,e,n);case 22:return Ty(t,e,n)}throw Error(oe(156,e.tag))};function $y(t,e){return __(t,e)}function rE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new rE(t,e,n,i)}function om(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oE(t){if(typeof t=="function")return om(t)?1:0;if(t!=null){if(t=t.$$typeof,t===wp)return 11;if(t===Tp)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cu(t,e,n,i,r,o){var s=2;if(i=t,typeof t=="function")om(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Wo:return to(n.children,r,o,e);case Ep:s=8,r|=8;break;case Rd:return t=$n(12,n,e,r|2),t.elementType=Rd,t.lanes=o,t;case Pd:return t=$n(13,n,e,r),t.elementType=Pd,t.lanes=o,t;case Ld:return t=$n(19,n,e,r),t.elementType=Ld,t.lanes=o,t;case t_:return _c(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jv:s=10;break e;case e_:s=9;break e;case wp:s=11;break e;case Tp:s=14;break e;case ur:s=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=$n(s,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function to(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function _c(t,e,n,i){return t=$n(22,t,i,e),t.elementType=t_,t.lanes=n,t.stateNode={isHidden:!1},t}function Of(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function Ff(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vf(0),this.expirationTimes=vf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,i,r,o,s,a,l){return t=new sE(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=$n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Gp(o),t}function aE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Go,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Xy(t){if(!t)return Cr;t=t._reactInternals;e:{if(fo(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(vn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(vn(n))return X_(t,n,e)}return e}function jy(t,e,n,i,r,o,s,a,l){return t=sm(n,i,!0,t,r,o,s,a,l),t.context=Xy(null),n=t.current,i=ln(),r=Mr(n),o=$i(i,r),o.callback=e??null,xr(n,o,r),t.current.lanes=r,Ba(t,r,i),_n(t,i),t}function yc(t,e,n,i){var r=e.current,o=ln(),s=Mr(r);return n=Xy(n),e.context===null?e.context=n:e.pendingContext=n,e=$i(o,s),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=xr(r,e,s),t!==null&&(hi(t,r,s,o),ru(t,r,s)),s}function Yu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function t0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function am(t,e){t0(t,e),(t=t.alternate)&&t0(t,e)}function lE(){return null}var Yy=typeof reportError=="function"?reportError:function(t){console.error(t)};function lm(t){this._internalRoot=t}xc.prototype.render=lm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));yc(t,e,null,null)};xc.prototype.unmount=lm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;so(function(){yc(null,t,null,null)}),e[ji]=null}};function xc(t){this._internalRoot=t}xc.prototype.unstable_scheduleHydration=function(t){if(t){var e=T_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&C_(t)}};function um(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function n0(){}function uE(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=Yu(s);o.call(u)}}var s=jy(e,i,t,0,null,!1,!1,"",n0);return t._reactRootContainer=s,t[ji]=s.current,wa(t.nodeType===8?t.parentNode:t),so(),s}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Yu(l);a.call(u)}}var l=sm(t,0,!1,null,null,!1,!1,"",n0);return t._reactRootContainer=l,t[ji]=l.current,wa(t.nodeType===8?t.parentNode:t),so(function(){yc(e,l,n,i)}),l}function Mc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var s=o;if(typeof r=="function"){var a=r;r=function(){var l=Yu(s);a.call(l)}}yc(e,s,t,r)}else s=uE(n,e,t,r,i);return Yu(s)}E_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(bp(e,n|1),_n(e,At()),!(qe&6)&&(xs=At()+500,Ir()))}break;case 13:so(function(){var i=Yi(t,1);if(i!==null){var r=ln();hi(i,t,1,r)}}),am(t,1)}};Rp=function(t){if(t.tag===13){var e=Yi(t,134217728);if(e!==null){var n=ln();hi(e,t,134217728,n)}am(t,134217728)}};w_=function(t){if(t.tag===13){var e=Mr(t),n=Yi(t,e);if(n!==null){var i=ln();hi(n,t,e,i)}am(t,e)}};T_=function(){return st};A_=function(t,e){var n=st;try{return st=t,e()}finally{st=n}};Hd=function(t,e,n){switch(e){case"input":if(Nd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=dc(i);if(!r)throw Error(oe(90));i_(i),Nd(i,r)}}}break;case"textarea":o_(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};d_=nm;h_=so;var cE={usingClientEntryPoint:!1,Events:[Va,Yo,dc,c_,f_,nm]},Ws={findFiberByHostInstance:qr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fE={bundleType:Ws.bundleType,version:Ws.version,rendererPackageName:Ws.rendererPackageName,rendererConfig:Ws.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ws.findFiberByHostInstance||lE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{lc=Ml.inject(fE),wi=Ml}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;On.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!um(e))throw Error(oe(200));return aE(t,e,null,n)};On.createRoot=function(t,e){if(!um(t))throw Error(oe(299));var n=!1,i="",r=Yy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,i,r),t[ji]=e.current,wa(t.nodeType===8?t.parentNode:t),new lm(e)};On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=g_(e),t=t===null?null:t.stateNode,t};On.flushSync=function(t){return so(t)};On.hydrate=function(t,e,n){if(!Sc(e))throw Error(oe(200));return Mc(null,t,e,!0,n)};On.hydrateRoot=function(t,e,n){if(!um(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",s=Yy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=jy(e,null,t,1,n??null,r,!1,o,s),t[ji]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new xc(e)};On.render=function(t,e,n){if(!Sc(e))throw Error(oe(200));return Mc(null,t,e,!1,n)};On.unmountComponentAtNode=function(t){if(!Sc(t))throw Error(oe(40));return t._reactRootContainer?(so(function(){Mc(null,null,t,!1,function(){t._reactRootContainer=null,t[ji]=null})}),!0):!1};On.unstable_batchedUpdates=nm;On.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Sc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Mc(t,e,n,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function qy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qy)}catch(t){console.error(t)}}qy(),qv.exports=On;var dE=qv.exports,i0=dE;Cd.createRoot=i0.createRoot,Cd.hydrateRoot=i0.hydrateRoot;function hE(t,e,n){const i=n-e;return((t-e)%i+i)%i+e}function kf(t){return t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1}function zf(t){const[e,n]=Ae.useState(!1);let i;const[r,o]=Ae.useState(0),s=l=>{kf(l),i===void 0?i=l.clientY:o(r+l.clientY-i),console.log(i)},a=l=>{kf(l),i=void 0,document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",a),n(!1)};return Fe.jsx("div",{className:`color button ${t.type}`,onPointerDown:e?void 0:l=>{kf(l.nativeEvent),console.log("down"),document.addEventListener("pointermove",s),document.addEventListener("pointerup",a),n(!0)},children:Fe.jsxs("div",{className:"mask",children:[Fe.jsx("div",{className:"interior",style:{top:hE(r,-360,0)}}),Fe.jsx("p",{children:t.type.toLocaleUpperCase()})]})})}function Bf(t,e){return`burgerXDash bd${e} ${t?"open":""}`}function pE(t){return Fe.jsxs("div",{className:"settings button",onClick:t.onClick,children:[Fe.jsx("div",{className:Bf(t.open,1)}),Fe.jsx("div",{className:Bf(t.open,2)}),Fe.jsx("div",{className:Bf(t.open,3)})]})}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ce.apply(null,arguments)}function zi(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function Ky(t){if(!zi(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=Ky(t[n])}),e}function qn(t,e,n={clone:!0}){const i=n.clone?ce({},t):t;return zi(t)&&zi(e)&&Object.keys(e).forEach(r=>{zi(e[r])&&Object.prototype.hasOwnProperty.call(t,r)&&zi(t[r])?i[r]=qn(t[r],e[r],n):n.clone?i[r]=zi(e[r])?Ky(e[r]):e[r]:i[r]=e[r]}),i}const mE=Object.freeze(Object.defineProperty({__proto__:null,default:qn,isPlainObject:zi},Symbol.toStringTag,{value:"Module"}));function Ia(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const gE=Object.freeze(Object.defineProperty({__proto__:null,default:Ia},Symbol.toStringTag,{value:"Module"}));var Zy={exports:{}},at={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm=Symbol.for("react.element"),fm=Symbol.for("react.portal"),Ec=Symbol.for("react.fragment"),wc=Symbol.for("react.strict_mode"),Tc=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),Cc=Symbol.for("react.context"),vE=Symbol.for("react.server_context"),bc=Symbol.for("react.forward_ref"),Rc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),Lc=Symbol.for("react.memo"),Dc=Symbol.for("react.lazy"),_E=Symbol.for("react.offscreen"),Qy;Qy=Symbol.for("react.module.reference");function Jn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case cm:switch(t=t.type,t){case Ec:case Tc:case wc:case Rc:case Pc:return t;default:switch(t=t&&t.$$typeof,t){case vE:case Cc:case bc:case Dc:case Lc:case Ac:return t;default:return e}}case fm:return e}}}at.ContextConsumer=Cc;at.ContextProvider=Ac;at.Element=cm;at.ForwardRef=bc;at.Fragment=Ec;at.Lazy=Dc;at.Memo=Lc;at.Portal=fm;at.Profiler=Tc;at.StrictMode=wc;at.Suspense=Rc;at.SuspenseList=Pc;at.isAsyncMode=function(){return!1};at.isConcurrentMode=function(){return!1};at.isContextConsumer=function(t){return Jn(t)===Cc};at.isContextProvider=function(t){return Jn(t)===Ac};at.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===cm};at.isForwardRef=function(t){return Jn(t)===bc};at.isFragment=function(t){return Jn(t)===Ec};at.isLazy=function(t){return Jn(t)===Dc};at.isMemo=function(t){return Jn(t)===Lc};at.isPortal=function(t){return Jn(t)===fm};at.isProfiler=function(t){return Jn(t)===Tc};at.isStrictMode=function(t){return Jn(t)===wc};at.isSuspense=function(t){return Jn(t)===Rc};at.isSuspenseList=function(t){return Jn(t)===Pc};at.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Ec||t===Tc||t===wc||t===Rc||t===Pc||t===_E||typeof t=="object"&&t!==null&&(t.$$typeof===Dc||t.$$typeof===Lc||t.$$typeof===Ac||t.$$typeof===Cc||t.$$typeof===bc||t.$$typeof===Qy||t.getModuleId!==void 0)};at.typeOf=Jn;Zy.exports=at;var r0=Zy.exports;const yE=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function Jy(t){const e=`${t}`.match(yE);return e&&e[1]||""}function ex(t,e=""){return t.displayName||t.name||Jy(t)||e}function o0(t,e,n){const i=ex(e);return t.displayName||(i!==""?`${n}(${i})`:n)}function xE(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return ex(t,"Component");if(typeof t=="object")switch(t.$$typeof){case r0.ForwardRef:return o0(t,t.render,"ForwardRef");case r0.Memo:return o0(t,t.type,"memo");default:return}}}const SE=Object.freeze(Object.defineProperty({__proto__:null,default:xE,getFunctionName:Jy},Symbol.toStringTag,{value:"Module"}));function an(t){if(typeof t!="string")throw new Error(Ia(7));return t.charAt(0).toUpperCase()+t.slice(1)}const ME=Object.freeze(Object.defineProperty({__proto__:null,default:an},Symbol.toStringTag,{value:"Module"}));function fu(t){return t&&t.ownerDocument||document}function EE(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const tx=typeof window<"u"?Ae.useLayoutEffect:Ae.useEffect;function wE({controlled:t,default:e,name:n,state:i="value"}){const{current:r}=Ae.useRef(t!==void 0),[o,s]=Ae.useState(e),a=r?t:o,l=Ae.useCallback(u=>{r||s(u)},[]);return[a,l]}function Hf(t){const e=Ae.useRef(t);return tx(()=>{e.current=t}),Ae.useRef((...n)=>(0,e.current)(...n)).current}function xh(...t){return Ae.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{EE(n,e)})},t)}class dm{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new dm}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}let Ic=!0,Sh=!1;const TE=new dm,AE={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function CE(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&AE[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function bE(t){t.metaKey||t.altKey||t.ctrlKey||(Ic=!0)}function Vf(){Ic=!1}function RE(){this.visibilityState==="hidden"&&Sh&&(Ic=!0)}function PE(t){t.addEventListener("keydown",bE,!0),t.addEventListener("mousedown",Vf,!0),t.addEventListener("pointerdown",Vf,!0),t.addEventListener("touchstart",Vf,!0),t.addEventListener("visibilitychange",RE,!0)}function LE(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return Ic||CE(e)}function DE(){const t=Ae.useCallback(r=>{r!=null&&PE(r.ownerDocument)},[]),e=Ae.useRef(!1);function n(){return e.current?(Sh=!0,TE.start(100,()=>{Sh=!1}),e.current=!1,!0):!1}function i(r){return LE(r)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:i,onBlur:n,ref:t}}const IE={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function qu(t,e){const n=ce({},e);return Object.keys(t).forEach(i=>{if(i.toString().match(/^(components|slots)$/))n[i]=ce({},t[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const r=t[i]||{},o=e[i];n[i]={},!o||!Object.keys(o)?n[i]=r:!r||!Object.keys(r)?n[i]=o:(n[i]=ce({},o),Object.keys(r).forEach(s=>{n[i][s]=qu(r[s],o[s])}))}else n[i]===void 0&&(n[i]=t[i])}),n}function hm(t,e,n=void 0){const i={};return Object.keys(t).forEach(r=>{i[r]=t[r].reduce((o,s)=>{if(s){const a=e(s);a!==""&&o.push(a),n&&n[s]&&o.push(n[s])}return o},[]).join(" ")}),i}const s0=t=>t,NE=()=>{let t=s0;return{configure(e){t=e},generate(e){return t(e)},reset(){t=s0}}},UE=NE(),OE={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function Nc(t,e,n="Mui"){const i=OE[e];return i?`${n}-${i}`:`${UE.generate(t)}-${e}`}function nx(t,e,n="Mui"){const i={};return e.forEach(r=>{i[r]=Nc(t,r,n)}),i}function Vo(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const FE=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"}));function Sn(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function ha(t){return typeof t=="string"}function kE(t,e,n){return t===void 0||ha(t)?e:ce({},e,{ownerState:ce({},e.ownerState,n)})}function ix(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=ix(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Ai(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=ix(t))&&(i&&(i+=" "),i+=e);return i}function du(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!e.includes(i)).forEach(i=>{n[i]=t[i]}),n}function a0(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function zE(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:i,externalForwardedProps:r,className:o}=t;if(!e){const p=Ai(n==null?void 0:n.className,o,r==null?void 0:r.className,i==null?void 0:i.className),y=ce({},n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),v=ce({},n,r,i);return p.length>0&&(v.className=p),Object.keys(y).length>0&&(v.style=y),{props:v,internalRef:void 0}}const s=du(ce({},r,i)),a=a0(i),l=a0(r),u=e(s),f=Ai(u==null?void 0:u.className,n==null?void 0:n.className,o,r==null?void 0:r.className,i==null?void 0:i.className),h=ce({},u==null?void 0:u.style,n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),d=ce({},u,n,l,a);return f.length>0&&(d.className=f),Object.keys(h).length>0&&(d.style=h),{props:d,internalRef:u.ref}}function BE(t,e,n){return typeof t=="function"?t(e,n):t}const HE=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function nr(t){var e;const{elementType:n,externalSlotProps:i,ownerState:r,skipResolvingSlotProps:o=!1}=t,s=Sn(t,HE),a=o?{}:BE(i,r),{props:l,internalRef:u}=zE(ce({},s,{externalSlotProps:a})),f=xh(u,a==null?void 0:a.ref,(e=t.additionalProps)==null?void 0:e.ref);return kE(n,ce({},l,{ref:f}),r)}const VE=Ae.createContext(void 0);function GE(t){const{theme:e,name:n,props:i}=t;if(!e||!e.components||!e.components[n])return i;const r=e.components[n];return r.defaultProps?qu(r.defaultProps,i):!r.styleOverrides&&!r.variants?qu(r,i):i}function WE({props:t,name:e}){const n=Ae.useContext(VE);return GE({props:t,name:e,theme:{components:n}})}function pm(t){return WE(t)}var Wa={},rx={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(rx);var ox=rx.exports,Gf={exports:{}},l0;function $E(){return l0||(l0=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var o in r)({}).hasOwnProperty.call(r,o)&&(n[o]=r[o])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Gf)),Gf.exports}var Wf={exports:{}},u0;function XE(){return u0||(u0=1,function(t){function e(n,i){if(n==null)return{};var r={};for(var o in n)if({}.hasOwnProperty.call(n,o)){if(i.includes(o))continue;r[o]=n[o]}return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Wf)),Wf.exports}function sx(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var jE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,YE=sx(function(t){return jE.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),qE=!1;function KE(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function ZE(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var QE=function(){function t(n){var i=this;this._insertTag=function(r){var o;i.tags.length===0?i.insertionPoint?o=i.insertionPoint.nextSibling:i.prepend?o=i.container.firstChild:o=i.before:o=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,o),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!qE:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(ZE(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=KE(r);try{o.insertRule(i,o.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),en="-ms-",Ku="-moz-",Ze="-webkit-",ax="comm",mm="rule",gm="decl",JE="@import",lx="@keyframes",ew="@layer",tw=Math.abs,Uc=String.fromCharCode,nw=Object.assign;function iw(t,e){return jt(t,0)^45?(((e<<2^jt(t,0))<<2^jt(t,1))<<2^jt(t,2))<<2^jt(t,3):0}function ux(t){return t.trim()}function rw(t,e){return(t=e.exec(t))?t[0]:t}function Qe(t,e,n){return t.replace(e,n)}function Mh(t,e){return t.indexOf(e)}function jt(t,e){return t.charCodeAt(e)|0}function Na(t,e,n){return t.slice(e,n)}function yi(t){return t.length}function vm(t){return t.length}function El(t,e){return e.push(t),t}function ow(t,e){return t.map(e).join("")}var Oc=1,Ss=1,cx=0,Mn=0,Dt=0,Ps="";function Fc(t,e,n,i,r,o,s){return{value:t,root:e,parent:n,type:i,props:r,children:o,line:Oc,column:Ss,length:s,return:""}}function $s(t,e){return nw(Fc("",null,null,"",null,null,0),t,{length:-t.length},e)}function sw(){return Dt}function aw(){return Dt=Mn>0?jt(Ps,--Mn):0,Ss--,Dt===10&&(Ss=1,Oc--),Dt}function Nn(){return Dt=Mn<cx?jt(Ps,Mn++):0,Ss++,Dt===10&&(Ss=1,Oc++),Dt}function Ci(){return jt(Ps,Mn)}function hu(){return Mn}function $a(t,e){return Na(Ps,t,e)}function Ua(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function fx(t){return Oc=Ss=1,cx=yi(Ps=t),Mn=0,[]}function dx(t){return Ps="",t}function pu(t){return ux($a(Mn-1,Eh(t===91?t+2:t===40?t+1:t)))}function lw(t){for(;(Dt=Ci())&&Dt<33;)Nn();return Ua(t)>2||Ua(Dt)>3?"":" "}function uw(t,e){for(;--e&&Nn()&&!(Dt<48||Dt>102||Dt>57&&Dt<65||Dt>70&&Dt<97););return $a(t,hu()+(e<6&&Ci()==32&&Nn()==32))}function Eh(t){for(;Nn();)switch(Dt){case t:return Mn;case 34:case 39:t!==34&&t!==39&&Eh(Dt);break;case 40:t===41&&Eh(t);break;case 92:Nn();break}return Mn}function cw(t,e){for(;Nn()&&t+Dt!==57;)if(t+Dt===84&&Ci()===47)break;return"/*"+$a(e,Mn-1)+"*"+Uc(t===47?t:Nn())}function fw(t){for(;!Ua(Ci());)Nn();return $a(t,Mn)}function dw(t){return dx(mu("",null,null,null,[""],t=fx(t),0,[0],t))}function mu(t,e,n,i,r,o,s,a,l){for(var u=0,f=0,h=s,d=0,p=0,y=0,v=1,m=1,c=1,g=0,_="",S=r,C=o,A=i,w=_;m;)switch(y=g,g=Nn()){case 40:if(y!=108&&jt(w,h-1)==58){Mh(w+=Qe(pu(g),"&","&\f"),"&\f")!=-1&&(c=-1);break}case 34:case 39:case 91:w+=pu(g);break;case 9:case 10:case 13:case 32:w+=lw(y);break;case 92:w+=uw(hu()-1,7);continue;case 47:switch(Ci()){case 42:case 47:El(hw(cw(Nn(),hu()),e,n),l);break;default:w+="/"}break;case 123*v:a[u++]=yi(w)*c;case 125*v:case 59:case 0:switch(g){case 0:case 125:m=0;case 59+f:c==-1&&(w=Qe(w,/\f/g,"")),p>0&&yi(w)-h&&El(p>32?f0(w+";",i,n,h-1):f0(Qe(w," ","")+";",i,n,h-2),l);break;case 59:w+=";";default:if(El(A=c0(w,e,n,u,f,r,a,_,S=[],C=[],h),o),g===123)if(f===0)mu(w,e,A,A,S,o,h,a,C);else switch(d===99&&jt(w,3)===110?100:d){case 100:case 108:case 109:case 115:mu(t,A,A,i&&El(c0(t,A,A,0,0,r,a,_,r,S=[],h),C),r,C,h,a,i?S:C);break;default:mu(w,A,A,A,[""],C,0,a,C)}}u=f=p=0,v=c=1,_=w="",h=s;break;case 58:h=1+yi(w),p=y;default:if(v<1){if(g==123)--v;else if(g==125&&v++==0&&aw()==125)continue}switch(w+=Uc(g),g*v){case 38:c=f>0?1:(w+="\f",-1);break;case 44:a[u++]=(yi(w)-1)*c,c=1;break;case 64:Ci()===45&&(w+=pu(Nn())),d=Ci(),f=h=yi(_=w+=fw(hu())),g++;break;case 45:y===45&&yi(w)==2&&(v=0)}}return o}function c0(t,e,n,i,r,o,s,a,l,u,f){for(var h=r-1,d=r===0?o:[""],p=vm(d),y=0,v=0,m=0;y<i;++y)for(var c=0,g=Na(t,h+1,h=tw(v=s[y])),_=t;c<p;++c)(_=ux(v>0?d[c]+" "+g:Qe(g,/&\f/g,d[c])))&&(l[m++]=_);return Fc(t,e,n,r===0?mm:a,l,u,f)}function hw(t,e,n){return Fc(t,e,n,ax,Uc(sw()),Na(t,2,-2),0)}function f0(t,e,n,i){return Fc(t,e,n,gm,Na(t,0,i),Na(t,i+1,-1),i)}function ls(t,e){for(var n="",i=vm(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function pw(t,e,n,i){switch(t.type){case ew:if(t.children.length)break;case JE:case gm:return t.return=t.return||t.value;case ax:return"";case lx:return t.return=t.value+"{"+ls(t.children,i)+"}";case mm:t.value=t.props.join(",")}return yi(n=ls(t.children,i))?t.return=t.value+"{"+n+"}":""}function mw(t){var e=vm(t);return function(n,i,r,o){for(var s="",a=0;a<e;a++)s+=t[a](n,i,r,o)||"";return s}}function gw(t){return function(e){e.root||(e=e.return)&&t(e)}}var vw=function(e,n,i){for(var r=0,o=0;r=o,o=Ci(),r===38&&o===12&&(n[i]=1),!Ua(o);)Nn();return $a(e,Mn)},_w=function(e,n){var i=-1,r=44;do switch(Ua(r)){case 0:r===38&&Ci()===12&&(n[i]=1),e[i]+=vw(Mn-1,n,i);break;case 2:e[i]+=pu(r);break;case 4:if(r===44){e[++i]=Ci()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=Uc(r)}while(r=Nn());return e},yw=function(e,n){return dx(_w(fx(e),n))},d0=new WeakMap,xw=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!d0.get(i))&&!r){d0.set(e,!0);for(var o=[],s=yw(n,o),a=i.props,l=0,u=0;l<s.length;l++)for(var f=0;f<a.length;f++,u++)e.props[u]=o[l]?s[l].replace(/&\f/g,a[f]):a[f]+" "+s[l]}}},Sw=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function hx(t,e){switch(iw(t,e)){case 5103:return Ze+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ze+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return Ze+t+Ku+t+en+t+t;case 6828:case 4268:return Ze+t+en+t+t;case 6165:return Ze+t+en+"flex-"+t+t;case 5187:return Ze+t+Qe(t,/(\w+).+(:[^]+)/,Ze+"box-$1$2"+en+"flex-$1$2")+t;case 5443:return Ze+t+en+"flex-item-"+Qe(t,/flex-|-self/,"")+t;case 4675:return Ze+t+en+"flex-line-pack"+Qe(t,/align-content|flex-|-self/,"")+t;case 5548:return Ze+t+en+Qe(t,"shrink","negative")+t;case 5292:return Ze+t+en+Qe(t,"basis","preferred-size")+t;case 6060:return Ze+"box-"+Qe(t,"-grow","")+Ze+t+en+Qe(t,"grow","positive")+t;case 4554:return Ze+Qe(t,/([^-])(transform)/g,"$1"+Ze+"$2")+t;case 6187:return Qe(Qe(Qe(t,/(zoom-|grab)/,Ze+"$1"),/(image-set)/,Ze+"$1"),t,"")+t;case 5495:case 3959:return Qe(t,/(image-set\([^]*)/,Ze+"$1$`$1");case 4968:return Qe(Qe(t,/(.+:)(flex-)?(.*)/,Ze+"box-pack:$3"+en+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ze+t+t;case 4095:case 3583:case 4068:case 2532:return Qe(t,/(.+)-inline(.+)/,Ze+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(yi(t)-1-e>6)switch(jt(t,e+1)){case 109:if(jt(t,e+4)!==45)break;case 102:return Qe(t,/(.+:)(.+)-([^]+)/,"$1"+Ze+"$2-$3$1"+Ku+(jt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mh(t,"stretch")?hx(Qe(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(jt(t,e+1)!==115)break;case 6444:switch(jt(t,yi(t)-3-(~Mh(t,"!important")&&10))){case 107:return Qe(t,":",":"+Ze)+t;case 101:return Qe(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ze+(jt(t,14)===45?"inline-":"")+"box$3$1"+Ze+"$2$3$1"+en+"$2box$3")+t}break;case 5936:switch(jt(t,e+11)){case 114:return Ze+t+en+Qe(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return Ze+t+en+Qe(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return Ze+t+en+Qe(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return Ze+t+en+t+t}return t}var Mw=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case gm:e.return=hx(e.value,e.length);break;case lx:return ls([$s(e,{value:Qe(e.value,"@","@"+Ze)})],r);case mm:if(e.length)return ow(e.props,function(o){switch(rw(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ls([$s(e,{props:[Qe(o,/:(read-\w+)/,":"+Ku+"$1")]})],r);case"::placeholder":return ls([$s(e,{props:[Qe(o,/:(plac\w+)/,":"+Ze+"input-$1")]}),$s(e,{props:[Qe(o,/:(plac\w+)/,":"+Ku+"$1")]}),$s(e,{props:[Qe(o,/:(plac\w+)/,en+"input-$1")]})],r)}return""})}},Ew=[Mw],px=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(v){var m=v.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var r=e.stylisPlugins||Ew,o={},s,a=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var m=v.getAttribute("data-emotion").split(" "),c=1;c<m.length;c++)o[m[c]]=!0;a.push(v)});var l,u=[xw,Sw];{var f,h=[pw,gw(function(v){f.insert(v)})],d=mw(u.concat(r,h)),p=function(m){return ls(dw(m),d)};l=function(m,c,g,_){f=g,p(m?m+"{"+c.styles+"}":c.styles),_&&(y.inserted[c.name]=!0)}}var y={key:n,sheet:new QE({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:l};return y.sheet.hydrate(a),y},mx={exports:{}},lt={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wt=typeof Symbol=="function"&&Symbol.for,_m=Wt?Symbol.for("react.element"):60103,ym=Wt?Symbol.for("react.portal"):60106,kc=Wt?Symbol.for("react.fragment"):60107,zc=Wt?Symbol.for("react.strict_mode"):60108,Bc=Wt?Symbol.for("react.profiler"):60114,Hc=Wt?Symbol.for("react.provider"):60109,Vc=Wt?Symbol.for("react.context"):60110,xm=Wt?Symbol.for("react.async_mode"):60111,Gc=Wt?Symbol.for("react.concurrent_mode"):60111,Wc=Wt?Symbol.for("react.forward_ref"):60112,$c=Wt?Symbol.for("react.suspense"):60113,ww=Wt?Symbol.for("react.suspense_list"):60120,Xc=Wt?Symbol.for("react.memo"):60115,jc=Wt?Symbol.for("react.lazy"):60116,Tw=Wt?Symbol.for("react.block"):60121,Aw=Wt?Symbol.for("react.fundamental"):60117,Cw=Wt?Symbol.for("react.responder"):60118,bw=Wt?Symbol.for("react.scope"):60119;function kn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case _m:switch(t=t.type,t){case xm:case Gc:case kc:case Bc:case zc:case $c:return t;default:switch(t=t&&t.$$typeof,t){case Vc:case Wc:case jc:case Xc:case Hc:return t;default:return e}}case ym:return e}}}function gx(t){return kn(t)===Gc}lt.AsyncMode=xm;lt.ConcurrentMode=Gc;lt.ContextConsumer=Vc;lt.ContextProvider=Hc;lt.Element=_m;lt.ForwardRef=Wc;lt.Fragment=kc;lt.Lazy=jc;lt.Memo=Xc;lt.Portal=ym;lt.Profiler=Bc;lt.StrictMode=zc;lt.Suspense=$c;lt.isAsyncMode=function(t){return gx(t)||kn(t)===xm};lt.isConcurrentMode=gx;lt.isContextConsumer=function(t){return kn(t)===Vc};lt.isContextProvider=function(t){return kn(t)===Hc};lt.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===_m};lt.isForwardRef=function(t){return kn(t)===Wc};lt.isFragment=function(t){return kn(t)===kc};lt.isLazy=function(t){return kn(t)===jc};lt.isMemo=function(t){return kn(t)===Xc};lt.isPortal=function(t){return kn(t)===ym};lt.isProfiler=function(t){return kn(t)===Bc};lt.isStrictMode=function(t){return kn(t)===zc};lt.isSuspense=function(t){return kn(t)===$c};lt.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===kc||t===Gc||t===Bc||t===zc||t===$c||t===ww||typeof t=="object"&&t!==null&&(t.$$typeof===jc||t.$$typeof===Xc||t.$$typeof===Hc||t.$$typeof===Vc||t.$$typeof===Wc||t.$$typeof===Aw||t.$$typeof===Cw||t.$$typeof===bw||t.$$typeof===Tw)};lt.typeOf=kn;mx.exports=lt;var Rw=mx.exports,vx=Rw,Pw={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Lw={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_x={};_x[vx.ForwardRef]=Pw;_x[vx.Memo]=Lw;var Dw=!0;function Iw(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var yx=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||Dw===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},xx=function(e,n,i){yx(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+r:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function Nw(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Uw={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Ow=!1,Fw=/[A-Z]|^ms/g,kw=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Sx=function(e){return e.charCodeAt(1)===45},h0=function(e){return e!=null&&typeof e!="boolean"},$f=sx(function(t){return Sx(t)?t:t.replace(Fw,"-$&").toLowerCase()}),p0=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(kw,function(i,r,o){return xi={name:r,styles:o,next:xi},r})}return Uw[e]!==1&&!Sx(e)&&typeof n=="number"&&n!==0?n+"px":n},zw="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function Oa(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return xi={name:r.name,styles:r.styles,next:xi},r.name;var o=n;if(o.styles!==void 0){var s=o.next;if(s!==void 0)for(;s!==void 0;)xi={name:s.name,styles:s.styles,next:xi},s=s.next;var a=o.styles+";";return a}return Bw(t,e,n)}case"function":{if(t!==void 0){var l=xi,u=n(t);return xi=l,Oa(t,e,u)}break}}var f=n;if(e==null)return f;var h=e[f];return h!==void 0?h:f}function Bw(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=Oa(t,e,n[r])+";";else for(var o in n){var s=n[o];if(typeof s!="object"){var a=s;e!=null&&e[a]!==void 0?i+=o+"{"+e[a]+"}":h0(a)&&(i+=$f(o)+":"+p0(o,a)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&Ow)throw new Error(zw);if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)h0(s[l])&&(i+=$f(o)+":"+p0(o,s[l])+";");else{var u=Oa(t,e,s);switch(o){case"animation":case"animationName":{i+=$f(o)+":"+u+";";break}default:i+=o+"{"+u+"}"}}}}return i}var m0=/label:\s*([^\s;\n{]+)\s*(;|$)/g,xi;function Sm(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";xi=void 0;var o=t[0];if(o==null||o.raw===void 0)i=!1,r+=Oa(n,e,o);else{var s=o;r+=s[0]}for(var a=1;a<t.length;a++)if(r+=Oa(n,e,t[a]),i){var l=o;r+=l[a]}m0.lastIndex=0;for(var u="",f;(f=m0.exec(r))!==null;)u+="-"+f[1];var h=Nw(r)+u;return{name:h,styles:r,next:xi}}var Hw=function(e){return e()},Mx=Zm.useInsertionEffect?Zm.useInsertionEffect:!1,Vw=Mx||Hw,g0=Mx||Ae.useLayoutEffect,Ex=Ae.createContext(typeof HTMLElement<"u"?px({key:"css"}):null),Gw=Ex.Provider,wx=function(e){return Ae.forwardRef(function(n,i){var r=Ae.useContext(Ex);return e(n,r,i)})},Yc=Ae.createContext({}),Ww=wx(function(t,e){var n=t.styles,i=Sm([n],void 0,Ae.useContext(Yc)),r=Ae.useRef();return g0(function(){var o=e.key+"-global",s=new e.sheet.constructor({key:o,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+o+" "+i.name+'"]');return e.sheet.tags.length&&(s.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",o),s.hydrate([l])),r.current=[s,a],function(){s.flush()}},[e]),g0(function(){var o=r.current,s=o[0],a=o[1];if(a){o[1]=!1;return}if(i.next!==void 0&&xx(e,i.next,!0),s.tags.length){var l=s.tags[s.tags.length-1].nextElementSibling;s.before=l,s.flush()}e.insert("",i,s,!1)},[e,i.name]),null});function Tx(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Sm(e)}var $w=function(){var e=Tx.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Xw=YE,jw=function(e){return e!=="theme"},v0=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?Xw:jw},_0=function(e,n,i){var r;if(n){var o=n.shouldForwardProp;r=e.__emotion_forwardProp&&o?function(s){return e.__emotion_forwardProp(s)&&o(s)}:o}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},Yw=!1,qw=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return yx(n,i,r),Vw(function(){return xx(n,i,r)}),null},Kw=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,o,s;n!==void 0&&(o=n.label,s=n.target);var a=_0(e,n,i),l=a||v0(r),u=!l("as");return function(){var f=arguments,h=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(o!==void 0&&h.push("label:"+o+";"),f[0]==null||f[0].raw===void 0)h.push.apply(h,f);else{h.push(f[0][0]);for(var d=f.length,p=1;p<d;p++)h.push(f[p],f[0][p])}var y=wx(function(v,m,c){var g=u&&v.as||r,_="",S=[],C=v;if(v.theme==null){C={};for(var A in v)C[A]=v[A];C.theme=Ae.useContext(Yc)}typeof v.className=="string"?_=Iw(m.registered,S,v.className):v.className!=null&&(_=v.className+" ");var w=Sm(h.concat(S),m.registered,C);_+=m.key+"-"+w.name,s!==void 0&&(_+=" "+s);var P=u&&a===void 0?v0(g):l,T={};for(var x in v)u&&x==="as"||P(x)&&(T[x]=v[x]);return T.className=_,c&&(T.ref=c),Ae.createElement(Ae.Fragment,null,Ae.createElement(qw,{cache:m,serialized:w,isStringTag:typeof g=="string"}),Ae.createElement(g,T))});return y.displayName=o!==void 0?o:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",y.defaultProps=e.defaultProps,y.__emotion_real=y,y.__emotion_base=r,y.__emotion_styles=h,y.__emotion_forwardProp=a,Object.defineProperty(y,"toString",{value:function(){return s===void 0&&Yw?"NO_COMPONENT_SELECTOR":"."+s}}),y.withComponent=function(v,m){return t(v,ce({},n,m,{shouldForwardProp:_0(y,m,!0)})).apply(void 0,h)},y}},Zw=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],wh=Kw.bind();Zw.forEach(function(t){wh[t]=wh(t)});let Th;typeof document=="object"&&(Th=px({key:"css",prepend:!0}));function Qw(t){const{injectFirst:e,children:n}=t;return e&&Th?Fe.jsx(Gw,{value:Th,children:n}):n}function Jw(t){return t==null||Object.keys(t).length===0}function eT(t){const{styles:e,defaultTheme:n={}}=t,i=typeof e=="function"?r=>e(Jw(r)?n:r):e;return Fe.jsx(Ww,{styles:i})}function Ax(t,e){return wh(t,e)}const Cx=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},tT=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:eT,StyledEngineProvider:Qw,ThemeContext:Yc,css:Tx,default:Ax,internal_processStyles:Cx,keyframes:$w},Symbol.toStringTag,{value:"Module"})),nT=Pr(tT),iT=Pr(mE),rT=Pr(ME),oT=Pr(SE),sT=["values","unit","step"],aT=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,i)=>n.val-i.val),e.reduce((n,i)=>ce({},n,{[i.key]:i.val}),{})};function bx(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5}=t,r=Sn(t,sT),o=aT(e),s=Object.keys(o);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${n})`}function u(d,p){const y=s.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(y!==-1&&typeof e[s[y]]=="number"?e[s[y]]:p)-i/100}${n})`}function f(d){return s.indexOf(d)+1<s.length?u(d,s[s.indexOf(d)+1]):a(d)}function h(d){const p=s.indexOf(d);return p===0?a(s[1]):p===s.length-1?l(s[p]):u(d,s[s.indexOf(d)+1]).replace("@media","@media not all and")}return ce({keys:s,values:o,up:a,down:l,between:u,only:f,not:h,unit:n},r)}const lT={borderRadius:4};function pa(t,e){return e?qn(t,e,{clone:!1}):t}const Mm={xs:0,sm:600,md:900,lg:1200,xl:1536},y0={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${Mm[t]}px)`};function mi(t,e,n){const i=t.theme||{};if(Array.isArray(e)){const o=i.breakpoints||y0;return e.reduce((s,a,l)=>(s[o.up(o.keys[l])]=n(e[l]),s),{})}if(typeof e=="object"){const o=i.breakpoints||y0;return Object.keys(e).reduce((s,a)=>{if(Object.keys(o.values||Mm).indexOf(a)!==-1){const l=o.up(a);s[l]=n(e[a],a)}else{const l=a;s[l]=e[l]}return s},{})}return n(e)}function Rx(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((i,r)=>{const o=t.up(r);return i[o]={},i},{}))||{}}function Px(t,e){return t.reduce((n,i)=>{const r=n[i];return(!r||Object.keys(r).length===0)&&delete n[i],n},e)}function uT(t,...e){const n=Rx(t),i=[n,...e].reduce((r,o)=>qn(r,o),{});return Px(Object.keys(n),i)}function cT(t,e){if(typeof t!="object")return{};const n={},i=Object.keys(e);return Array.isArray(t)?i.forEach((r,o)=>{o<t.length&&(n[r]=!0)}):i.forEach(r=>{t[r]!=null&&(n[r]=!0)}),n}function Xf({values:t,breakpoints:e,base:n}){const i=n||cT(t,e),r=Object.keys(i);if(r.length===0)return t;let o;return r.reduce((s,a,l)=>(Array.isArray(t)?(s[a]=t[l]!=null?t[l]:t[o],o=l):typeof t=="object"?(s[a]=t[a]!=null?t[a]:t[o],o=a):s[a]=t,s),{})}function qc(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const i=`vars.${e}`.split(".").reduce((r,o)=>r&&r[o]?r[o]:null,t);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,t)}function Zu(t,e,n,i=n){let r;return typeof t=="function"?r=t(n):Array.isArray(t)?r=t[n]||i:r=qc(t,n)||i,e&&(r=e(r,i,t)),r}function bt(t){const{prop:e,cssProperty:n=t.prop,themeKey:i,transform:r}=t,o=s=>{if(s[e]==null)return null;const a=s[e],l=s.theme,u=qc(l,i)||{};return mi(s,a,h=>{let d=Zu(u,r,h);return h===d&&typeof h=="string"&&(d=Zu(u,r,`${e}${h==="default"?"":an(h)}`,h)),n===!1?d:{[n]:d}})};return o.propTypes={},o.filterProps=[e],o}function fT(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const dT={m:"margin",p:"padding"},hT={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},x0={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},pT=fT(t=>{if(t.length>2)if(x0[t])t=x0[t];else return[t];const[e,n]=t.split(""),i=dT[e],r=hT[n]||"";return Array.isArray(r)?r.map(o=>i+o):[i+r]}),Em=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],wm=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...Em,...wm];function Xa(t,e,n,i){var r;const o=(r=qc(t,e,!1))!=null?r:n;return typeof o=="number"?s=>typeof s=="string"?s:o*s:Array.isArray(o)?s=>typeof s=="string"?s:o[s]:typeof o=="function"?o:()=>{}}function Tm(t){return Xa(t,"spacing",8)}function ao(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),i=t(n);return e>=0?i:typeof i=="number"?-i:`-${i}`}function mT(t,e){return n=>t.reduce((i,r)=>(i[r]=ao(e,n),i),{})}function gT(t,e,n,i){if(e.indexOf(n)===-1)return null;const r=pT(n),o=mT(r,i),s=t[n];return mi(t,s,o)}function Lx(t,e){const n=Tm(t.theme);return Object.keys(t).map(i=>gT(t,e,i,n)).reduce(pa,{})}function Et(t){return Lx(t,Em)}Et.propTypes={};Et.filterProps=Em;function wt(t){return Lx(t,wm)}wt.propTypes={};wt.filterProps=wm;function vT(t=8){if(t.mui)return t;const e=Tm({spacing:t}),n=(...i)=>(i.length===0?[1]:i).map(o=>{const s=e(o);return typeof s=="number"?`${s}px`:s}).join(" ");return n.mui=!0,n}function Kc(...t){const e=t.reduce((i,r)=>(r.filterProps.forEach(o=>{i[o]=r}),i),{}),n=i=>Object.keys(i).reduce((r,o)=>e[o]?pa(r,e[o](i)):r,{});return n.propTypes={},n.filterProps=t.reduce((i,r)=>i.concat(r.filterProps),[]),n}function Wn(t){return typeof t!="number"?t:`${t}px solid`}function ei(t,e){return bt({prop:t,themeKey:"borders",transform:e})}const _T=ei("border",Wn),yT=ei("borderTop",Wn),xT=ei("borderRight",Wn),ST=ei("borderBottom",Wn),MT=ei("borderLeft",Wn),ET=ei("borderColor"),wT=ei("borderTopColor"),TT=ei("borderRightColor"),AT=ei("borderBottomColor"),CT=ei("borderLeftColor"),bT=ei("outline",Wn),RT=ei("outlineColor"),Zc=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=Xa(t.theme,"shape.borderRadius",4),n=i=>({borderRadius:ao(e,i)});return mi(t,t.borderRadius,n)}return null};Zc.propTypes={};Zc.filterProps=["borderRadius"];Kc(_T,yT,xT,ST,MT,ET,wT,TT,AT,CT,Zc,bT,RT);const Qc=t=>{if(t.gap!==void 0&&t.gap!==null){const e=Xa(t.theme,"spacing",8),n=i=>({gap:ao(e,i)});return mi(t,t.gap,n)}return null};Qc.propTypes={};Qc.filterProps=["gap"];const Jc=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=Xa(t.theme,"spacing",8),n=i=>({columnGap:ao(e,i)});return mi(t,t.columnGap,n)}return null};Jc.propTypes={};Jc.filterProps=["columnGap"];const ef=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=Xa(t.theme,"spacing",8),n=i=>({rowGap:ao(e,i)});return mi(t,t.rowGap,n)}return null};ef.propTypes={};ef.filterProps=["rowGap"];const PT=bt({prop:"gridColumn"}),LT=bt({prop:"gridRow"}),DT=bt({prop:"gridAutoFlow"}),IT=bt({prop:"gridAutoColumns"}),NT=bt({prop:"gridAutoRows"}),UT=bt({prop:"gridTemplateColumns"}),OT=bt({prop:"gridTemplateRows"}),FT=bt({prop:"gridTemplateAreas"}),kT=bt({prop:"gridArea"});Kc(Qc,Jc,ef,PT,LT,DT,IT,NT,UT,OT,FT,kT);function us(t,e){return e==="grey"?e:t}const zT=bt({prop:"color",themeKey:"palette",transform:us}),BT=bt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:us}),HT=bt({prop:"backgroundColor",themeKey:"palette",transform:us});Kc(zT,BT,HT);function Ln(t){return t<=1&&t!==0?`${t*100}%`:t}const VT=bt({prop:"width",transform:Ln}),Am=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,r;const o=((i=t.theme)==null||(i=i.breakpoints)==null||(i=i.values)==null?void 0:i[n])||Mm[n];return o?((r=t.theme)==null||(r=r.breakpoints)==null?void 0:r.unit)!=="px"?{maxWidth:`${o}${t.theme.breakpoints.unit}`}:{maxWidth:o}:{maxWidth:Ln(n)}};return mi(t,t.maxWidth,e)}return null};Am.filterProps=["maxWidth"];const GT=bt({prop:"minWidth",transform:Ln}),WT=bt({prop:"height",transform:Ln}),$T=bt({prop:"maxHeight",transform:Ln}),XT=bt({prop:"minHeight",transform:Ln});bt({prop:"size",cssProperty:"width",transform:Ln});bt({prop:"size",cssProperty:"height",transform:Ln});const jT=bt({prop:"boxSizing"});Kc(VT,Am,GT,WT,$T,XT,jT);const ja={border:{themeKey:"borders",transform:Wn},borderTop:{themeKey:"borders",transform:Wn},borderRight:{themeKey:"borders",transform:Wn},borderBottom:{themeKey:"borders",transform:Wn},borderLeft:{themeKey:"borders",transform:Wn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Wn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Zc},color:{themeKey:"palette",transform:us},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:us},backgroundColor:{themeKey:"palette",transform:us},p:{style:wt},pt:{style:wt},pr:{style:wt},pb:{style:wt},pl:{style:wt},px:{style:wt},py:{style:wt},padding:{style:wt},paddingTop:{style:wt},paddingRight:{style:wt},paddingBottom:{style:wt},paddingLeft:{style:wt},paddingX:{style:wt},paddingY:{style:wt},paddingInline:{style:wt},paddingInlineStart:{style:wt},paddingInlineEnd:{style:wt},paddingBlock:{style:wt},paddingBlockStart:{style:wt},paddingBlockEnd:{style:wt},m:{style:Et},mt:{style:Et},mr:{style:Et},mb:{style:Et},ml:{style:Et},mx:{style:Et},my:{style:Et},margin:{style:Et},marginTop:{style:Et},marginRight:{style:Et},marginBottom:{style:Et},marginLeft:{style:Et},marginX:{style:Et},marginY:{style:Et},marginInline:{style:Et},marginInlineStart:{style:Et},marginInlineEnd:{style:Et},marginBlock:{style:Et},marginBlockStart:{style:Et},marginBlockEnd:{style:Et},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Qc},rowGap:{style:ef},columnGap:{style:Jc},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Ln},maxWidth:{style:Am},minWidth:{transform:Ln},height:{transform:Ln},maxHeight:{transform:Ln},minHeight:{transform:Ln},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function YT(...t){const e=t.reduce((i,r)=>i.concat(Object.keys(r)),[]),n=new Set(e);return t.every(i=>n.size===Object.keys(i).length)}function qT(t,e){return typeof t=="function"?t(e):t}function Dx(){function t(n,i,r,o){const s={[n]:i,theme:r},a=o[n];if(!a)return{[n]:i};const{cssProperty:l=n,themeKey:u,transform:f,style:h}=a;if(i==null)return null;if(u==="typography"&&i==="inherit")return{[n]:i};const d=qc(r,u)||{};return h?h(s):mi(s,i,y=>{let v=Zu(d,f,y);return y===v&&typeof y=="string"&&(v=Zu(d,f,`${n}${y==="default"?"":an(y)}`,y)),l===!1?v:{[l]:v}})}function e(n){var i;const{sx:r,theme:o={}}=n||{};if(!r)return null;const s=(i=o.unstable_sxConfig)!=null?i:ja;function a(l){let u=l;if(typeof l=="function")u=l(o);else if(typeof l!="object")return l;if(!u)return null;const f=Rx(o.breakpoints),h=Object.keys(f);let d=f;return Object.keys(u).forEach(p=>{const y=qT(u[p],o);if(y!=null)if(typeof y=="object")if(s[p])d=pa(d,t(p,y,o,s));else{const v=mi({theme:o},y,m=>({[p]:m}));YT(v,y)?d[p]=e({sx:y,theme:o}):d=pa(d,v)}else d=pa(d,t(p,y,o,s))}),Px(h,d)}return Array.isArray(r)?r.map(a):a(r)}return e}const Ya=Dx();Ya.filterProps=["sx"];function Ix(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const KT=["breakpoints","palette","spacing","shape"];function qa(t={},...e){const{breakpoints:n={},palette:i={},spacing:r,shape:o={}}=t,s=Sn(t,KT),a=bx(n),l=vT(r);let u=qn({breakpoints:a,direction:"ltr",components:{},palette:ce({mode:"light"},i),spacing:l,shape:ce({},lT,o)},s);return u.applyStyles=Ix,u=e.reduce((f,h)=>qn(f,h),u),u.unstable_sxConfig=ce({},ja,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(h){return Ya({sx:h,theme:this})},u}const ZT=Object.freeze(Object.defineProperty({__proto__:null,default:qa,private_createBreakpoints:bx,unstable_applyStyles:Ix},Symbol.toStringTag,{value:"Module"})),QT=Pr(ZT),JT=["sx"],eA=t=>{var e,n;const i={systemProps:{},otherProps:{}},r=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:ja;return Object.keys(t).forEach(o=>{r[o]?i.systemProps[o]=t[o]:i.otherProps[o]=t[o]}),i};function Nx(t){const{sx:e}=t,n=Sn(t,JT),{systemProps:i,otherProps:r}=eA(n);let o;return Array.isArray(e)?o=[i,...e]:typeof e=="function"?o=(...s)=>{const a=e(...s);return zi(a)?ce({},i,a):i}:o=ce({},i,e),ce({},r,{sx:o})}const tA=Object.freeze(Object.defineProperty({__proto__:null,default:Ya,extendSxProp:Nx,unstable_createStyleFunctionSx:Dx,unstable_defaultSxConfig:ja},Symbol.toStringTag,{value:"Module"})),nA=Pr(tA);var Ls=ox;Object.defineProperty(Wa,"__esModule",{value:!0});var iA=Wa.default=gA;Wa.shouldForwardProp=gu;Wa.systemDefaultTheme=void 0;var Hn=Ls($E()),Ah=Ls(XE()),S0=cA(nT),rA=iT;Ls(rT);Ls(oT);var oA=Ls(QT),sA=Ls(nA);const aA=["ownerState"],lA=["variants"],uA=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function Ux(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(Ux=function(i){return i?n:e})(t)}function cA(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=Ux(e);if(n&&n.has(t))return n.get(t);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(o!=="default"&&Object.prototype.hasOwnProperty.call(t,o)){var s=r?Object.getOwnPropertyDescriptor(t,o):null;s&&(s.get||s.set)?Object.defineProperty(i,o,s):i[o]=t[o]}return i.default=t,n&&n.set(t,i),i}function fA(t){return Object.keys(t).length===0}function dA(t){return typeof t=="string"&&t.charCodeAt(0)>96}function gu(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const hA=Wa.systemDefaultTheme=(0,oA.default)(),pA=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function wl({defaultTheme:t,theme:e,themeId:n}){return fA(e)?t:e[n]||e}function mA(t){return t?(e,n)=>n[t]:null}function vu(t,e){let{ownerState:n}=e,i=(0,Ah.default)(e,aA);const r=typeof t=="function"?t((0,Hn.default)({ownerState:n},i)):t;if(Array.isArray(r))return r.flatMap(o=>vu(o,(0,Hn.default)({ownerState:n},i)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:o=[]}=r;let a=(0,Ah.default)(r,lA);return o.forEach(l=>{let u=!0;typeof l.props=="function"?u=l.props((0,Hn.default)({ownerState:n},i,n)):Object.keys(l.props).forEach(f=>{(n==null?void 0:n[f])!==l.props[f]&&i[f]!==l.props[f]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,Hn.default)({ownerState:n},i,n)):l.style))}),a}return r}function gA(t={}){const{themeId:e,defaultTheme:n=hA,rootShouldForwardProp:i=gu,slotShouldForwardProp:r=gu}=t,o=s=>(0,sA.default)((0,Hn.default)({},s,{theme:wl((0,Hn.default)({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{(0,S0.internal_processStyles)(s,C=>C.filter(A=>!(A!=null&&A.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:f,skipSx:h,overridesResolver:d=mA(pA(u))}=a,p=(0,Ah.default)(a,uA),y=f!==void 0?f:u&&u!=="Root"&&u!=="root"||!1,v=h||!1;let m,c=gu;u==="Root"||u==="root"?c=i:u?c=r:dA(s)&&(c=void 0);const g=(0,S0.default)(s,(0,Hn.default)({shouldForwardProp:c,label:m},p)),_=C=>typeof C=="function"&&C.__emotion_real!==C||(0,rA.isPlainObject)(C)?A=>vu(C,(0,Hn.default)({},A,{theme:wl({theme:A.theme,defaultTheme:n,themeId:e})})):C,S=(C,...A)=>{let w=_(C);const P=A?A.map(_):[];l&&d&&P.push(R=>{const z=wl((0,Hn.default)({},R,{defaultTheme:n,themeId:e}));if(!z.components||!z.components[l]||!z.components[l].styleOverrides)return null;const O=z.components[l].styleOverrides,Y={};return Object.entries(O).forEach(([$,X])=>{Y[$]=vu(X,(0,Hn.default)({},R,{theme:z}))}),d(R,Y)}),l&&!y&&P.push(R=>{var z;const O=wl((0,Hn.default)({},R,{defaultTheme:n,themeId:e})),Y=O==null||(z=O.components)==null||(z=z[l])==null?void 0:z.variants;return vu({variants:Y},(0,Hn.default)({},R,{theme:O}))}),v||P.push(o);const T=P.length-A.length;if(Array.isArray(C)&&T>0){const R=new Array(T).fill("");w=[...C,...R],w.raw=[...C.raw,...R]}const x=g(w,...P);return s.muiName&&(x.muiName=s.muiName),x};return g.withConfig&&(S.withConfig=g.withConfig),S}}function vA(t,e){return ce({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}var Rt={};const _A=Pr(gE),yA=Pr(FE);var Ox=ox;Object.defineProperty(Rt,"__esModule",{value:!0});var M0=Rt.alpha=Bx;Rt.blend=PA;Rt.colorChannel=void 0;var Ch=Rt.darken=bm;Rt.decomposeColor=Qn;Rt.emphasize=Hx;var xA=Rt.getContrastRatio=TA;Rt.getLuminance=Qu;Rt.hexToRgb=Fx;Rt.hslToRgb=zx;var bh=Rt.lighten=Rm;Rt.private_safeAlpha=AA;Rt.private_safeColorChannel=void 0;Rt.private_safeDarken=CA;Rt.private_safeEmphasize=RA;Rt.private_safeLighten=bA;Rt.recomposeColor=Ds;Rt.rgbToHex=wA;var E0=Ox(_A),SA=Ox(yA);function Cm(t,e=0,n=1){return(0,SA.default)(t,e,n)}function Fx(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function MA(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function Qn(t){if(t.type)return t;if(t.charAt(0)==="#")return Qn(Fx(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,E0.default)(9,t));let i=t.substring(e+1,t.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error((0,E0.default)(10,r))}else i=i.split(",");return i=i.map(o=>parseFloat(o)),{type:n,values:i,colorSpace:r}}const kx=t=>{const e=Qn(t);return e.values.slice(0,3).map((n,i)=>e.type.indexOf("hsl")!==-1&&i!==0?`${n}%`:n).join(" ")};Rt.colorChannel=kx;const EA=(t,e)=>{try{return kx(t)}catch{return t}};Rt.private_safeColorChannel=EA;function Ds(t){const{type:e,colorSpace:n}=t;let{values:i}=t;return e.indexOf("rgb")!==-1?i=i.map((r,o)=>o<3?parseInt(r,10):r):e.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function wA(t){if(t.indexOf("#")===0)return t;const{values:e}=Qn(t);return`#${e.map((n,i)=>MA(i===3?Math.round(255*n):n)).join("")}`}function zx(t){t=Qn(t);const{values:e}=t,n=e[0],i=e[1]/100,r=e[2]/100,o=i*Math.min(r,1-r),s=(u,f=(u+n/30)%12)=>r-o*Math.max(Math.min(f-3,9-f,1),-1);let a="rgb";const l=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Ds({type:a,values:l})}function Qu(t){t=Qn(t);let e=t.type==="hsl"||t.type==="hsla"?Qn(zx(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function TA(t,e){const n=Qu(t),i=Qu(e);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function Bx(t,e){return t=Qn(t),e=Cm(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Ds(t)}function AA(t,e,n){try{return Bx(t,e)}catch{return t}}function bm(t,e){if(t=Qn(t),e=Cm(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Ds(t)}function CA(t,e,n){try{return bm(t,e)}catch{return t}}function Rm(t,e){if(t=Qn(t),e=Cm(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Ds(t)}function bA(t,e,n){try{return Rm(t,e)}catch{return t}}function Hx(t,e=.15){return Qu(t)>.5?bm(t,e):Rm(t,e)}function RA(t,e,n){try{return Hx(t,e)}catch{return t}}function PA(t,e,n,i=1){const r=(l,u)=>Math.round((l**(1/i)*(1-n)+u**(1/i)*n)**i),o=Qn(t),s=Qn(e),a=[r(o.values[0],s.values[0]),r(o.values[1],s.values[1]),r(o.values[2],s.values[2])];return Ds({type:"rgb",values:a})}const Fa={black:"#000",white:"#fff"},LA={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},xo={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},So={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},Xs={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Mo={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},Eo={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},wo={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},DA=["mode","contrastThreshold","tonalOffset"],w0={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Fa.white,default:Fa.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},jf={text:{primary:Fa.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Fa.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function T0(t,e,n,i){const r=i.light||i,o=i.dark||i*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=bh(t.main,r):e==="dark"&&(t.dark=Ch(t.main,o)))}function IA(t="light"){return t==="dark"?{main:Mo[200],light:Mo[50],dark:Mo[400]}:{main:Mo[700],light:Mo[400],dark:Mo[800]}}function NA(t="light"){return t==="dark"?{main:xo[200],light:xo[50],dark:xo[400]}:{main:xo[500],light:xo[300],dark:xo[700]}}function UA(t="light"){return t==="dark"?{main:So[500],light:So[300],dark:So[700]}:{main:So[700],light:So[400],dark:So[800]}}function OA(t="light"){return t==="dark"?{main:Eo[400],light:Eo[300],dark:Eo[700]}:{main:Eo[700],light:Eo[500],dark:Eo[900]}}function FA(t="light"){return t==="dark"?{main:wo[400],light:wo[300],dark:wo[700]}:{main:wo[800],light:wo[500],dark:wo[900]}}function kA(t="light"){return t==="dark"?{main:Xs[400],light:Xs[300],dark:Xs[700]}:{main:"#ed6c02",light:Xs[500],dark:Xs[900]}}function zA(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:i=.2}=t,r=Sn(t,DA),o=t.primary||IA(e),s=t.secondary||NA(e),a=t.error||UA(e),l=t.info||OA(e),u=t.success||FA(e),f=t.warning||kA(e);function h(v){return xA(v,jf.text.primary)>=n?jf.text.primary:w0.text.primary}const d=({color:v,name:m,mainShade:c=500,lightShade:g=300,darkShade:_=700})=>{if(v=ce({},v),!v.main&&v[c]&&(v.main=v[c]),!v.hasOwnProperty("main"))throw new Error(Ia(11,m?` (${m})`:"",c));if(typeof v.main!="string")throw new Error(Ia(12,m?` (${m})`:"",JSON.stringify(v.main)));return T0(v,"light",g,i),T0(v,"dark",_,i),v.contrastText||(v.contrastText=h(v.main)),v},p={dark:jf,light:w0};return qn(ce({common:ce({},Fa),mode:e,primary:d({color:o,name:"primary"}),secondary:d({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:f,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:LA,contrastThreshold:n,getContrastText:h,augmentColor:d,tonalOffset:i},p[e]),r)}const BA=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function HA(t){return Math.round(t*1e5)/1e5}const A0={textTransform:"uppercase"},C0='"Roboto", "Helvetica", "Arial", sans-serif';function VA(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:i=C0,fontSize:r=14,fontWeightLight:o=300,fontWeightRegular:s=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:f,pxToRem:h}=n,d=Sn(n,BA),p=r/14,y=h||(c=>`${c/u*p}rem`),v=(c,g,_,S,C)=>ce({fontFamily:i,fontWeight:c,fontSize:y(g),lineHeight:_},i===C0?{letterSpacing:`${HA(S/g)}em`}:{},C,f),m={h1:v(o,96,1.167,-1.5),h2:v(o,60,1.2,-.5),h3:v(s,48,1.167,0),h4:v(s,34,1.235,.25),h5:v(s,24,1.334,0),h6:v(a,20,1.6,.15),subtitle1:v(s,16,1.75,.15),subtitle2:v(a,14,1.57,.1),body1:v(s,16,1.5,.15),body2:v(s,14,1.43,.15),button:v(a,14,1.75,.4,A0),caption:v(s,12,1.66,.4),overline:v(s,12,2.66,1,A0),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return qn(ce({htmlFontSize:u,pxToRem:y,fontFamily:i,fontSize:r,fontWeightLight:o,fontWeightRegular:s,fontWeightMedium:a,fontWeightBold:l},m),d,{clone:!1})}const GA=.2,WA=.14,$A=.12;function mt(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${GA})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${WA})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${$A})`].join(",")}const XA=["none",mt(0,2,1,-1,0,1,1,0,0,1,3,0),mt(0,3,1,-2,0,2,2,0,0,1,5,0),mt(0,3,3,-2,0,3,4,0,0,1,8,0),mt(0,2,4,-1,0,4,5,0,0,1,10,0),mt(0,3,5,-1,0,5,8,0,0,1,14,0),mt(0,3,5,-1,0,6,10,0,0,1,18,0),mt(0,4,5,-2,0,7,10,1,0,2,16,1),mt(0,5,5,-3,0,8,10,1,0,3,14,2),mt(0,5,6,-3,0,9,12,1,0,3,16,2),mt(0,6,6,-3,0,10,14,1,0,4,18,3),mt(0,6,7,-4,0,11,15,1,0,4,20,3),mt(0,7,8,-4,0,12,17,2,0,5,22,4),mt(0,7,8,-4,0,13,19,2,0,5,24,4),mt(0,7,9,-4,0,14,21,2,0,5,26,4),mt(0,8,9,-5,0,15,22,2,0,6,28,5),mt(0,8,10,-5,0,16,24,2,0,6,30,5),mt(0,8,11,-5,0,17,26,2,0,6,32,5),mt(0,9,11,-5,0,18,28,2,0,7,34,6),mt(0,9,12,-6,0,19,29,2,0,7,36,6),mt(0,10,13,-6,0,20,31,3,0,8,38,7),mt(0,10,13,-6,0,21,33,3,0,8,40,7),mt(0,10,14,-6,0,22,35,3,0,8,42,7),mt(0,11,14,-7,0,23,36,3,0,9,44,8),mt(0,11,15,-7,0,24,38,3,0,9,46,8)],jA=["duration","easing","delay"],YA={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qA={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function b0(t){return`${Math.round(t)}ms`}function KA(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function ZA(t){const e=ce({},YA,t.easing),n=ce({},qA,t.duration);return ce({getAutoHeightDuration:KA,create:(r=["all"],o={})=>{const{duration:s=n.standard,easing:a=e.easeInOut,delay:l=0}=o;return Sn(o,jA),(Array.isArray(r)?r:[r]).map(u=>`${u} ${typeof s=="string"?s:b0(s)} ${a} ${typeof l=="string"?l:b0(l)}`).join(",")}},t,{easing:e,duration:n})}const QA={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},JA=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function eC(t={},...e){const{mixins:n={},palette:i={},transitions:r={},typography:o={}}=t,s=Sn(t,JA);if(t.vars)throw new Error(Ia(18));const a=zA(i),l=qa(t);let u=qn(l,{mixins:vA(l.breakpoints,n),palette:a,shadows:XA.slice(),typography:VA(a,o),transitions:ZA(r),zIndex:ce({},QA)});return u=qn(u,s),u=e.reduce((f,h)=>qn(f,h),u),u.unstable_sxConfig=ce({},ja,s==null?void 0:s.unstable_sxConfig),u.unstable_sx=function(h){return Ya({sx:h,theme:this})},u}const tC=eC(),nC="$$material";function Pm(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const iC=t=>Pm(t)&&t!=="classes",Ji=iA({themeId:nC,defaultTheme:tC,rootShouldForwardProp:iC});function rC(t){return Nc("MuiSvgIcon",t)}nx("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const oC=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],sC=t=>{const{color:e,fontSize:n,classes:i}=t,r={root:["root",e!=="inherit"&&`color${an(e)}`,`fontSize${an(n)}`]};return hm(r,rC,i)},aC=Ji("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${an(n.color)}`],e[`fontSize${an(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,i,r,o,s,a,l,u,f,h,d,p,y;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(r=t.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((o=t.typography)==null||(s=o.pxToRem)==null?void 0:s.call(o,20))||"1.25rem",medium:((a=t.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=t.typography)==null||(f=u.pxToRem)==null?void 0:f.call(u,35))||"2.1875rem"}[e.fontSize],color:(h=(d=(t.vars||t).palette)==null||(d=d[e.color])==null?void 0:d.main)!=null?h:{action:(p=(t.vars||t).palette)==null||(p=p.action)==null?void 0:p.active,disabled:(y=(t.vars||t).palette)==null||(y=y.action)==null?void 0:y.disabled,inherit:void 0}[e.color]}}),Rh=Ae.forwardRef(function(e,n){const i=pm({props:e,name:"MuiSvgIcon"}),{children:r,className:o,color:s="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:f=!1,titleAccess:h,viewBox:d="0 0 24 24"}=i,p=Sn(i,oC),y=Ae.isValidElement(r)&&r.type==="svg",v=ce({},i,{color:s,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:d,hasSvgAsChild:y}),m={};f||(m.viewBox=d);const c=sC(v);return Fe.jsxs(aC,ce({as:a,className:Ai(c.root,o),focusable:"false",color:u,"aria-hidden":h?void 0:!0,role:h?"img":void 0,ref:n},m,p,y&&r.props,{ownerState:v,children:[y?r.props.children:r,h?Fe.jsx("title",{children:h}):null]}))});Rh.muiName="SvgIcon";function Vx(t,e){function n(i,r){return Fe.jsx(Rh,ce({"data-testid":`${e}Icon`,ref:r},i,{children:t}))}return n.muiName=Rh.muiName,Ae.memo(Ae.forwardRef(n))}const lC=Vx(Fe.jsx("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3z"}),"AddToQueue"),uC=Vx(Fe.jsx("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-7v2H8v-2z"}),"RemoveFromQueue");function cC(t){return Object.keys(t).length===0}function fC(t=null){const e=Ae.useContext(Yc);return!e||cC(e)?t:e}const dC=qa();function hC(t=dC){return fC(t)}const pC=["ownerState"],mC=["variants"],gC=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function vC(t){return Object.keys(t).length===0}function _C(t){return typeof t=="string"&&t.charCodeAt(0)>96}function Yf(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const yC=qa(),xC=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function Tl({defaultTheme:t,theme:e,themeId:n}){return vC(e)?t:e[n]||e}function SC(t){return t?(e,n)=>n[t]:null}function _u(t,e){let{ownerState:n}=e,i=Sn(e,pC);const r=typeof t=="function"?t(ce({ownerState:n},i)):t;if(Array.isArray(r))return r.flatMap(o=>_u(o,ce({ownerState:n},i)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:o=[]}=r;let a=Sn(r,mC);return o.forEach(l=>{let u=!0;typeof l.props=="function"?u=l.props(ce({ownerState:n},i,n)):Object.keys(l.props).forEach(f=>{(n==null?void 0:n[f])!==l.props[f]&&i[f]!==l.props[f]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style(ce({ownerState:n},i,n)):l.style))}),a}return r}function MC(t={}){const{themeId:e,defaultTheme:n=yC,rootShouldForwardProp:i=Yf,slotShouldForwardProp:r=Yf}=t,o=s=>Ya(ce({},s,{theme:Tl(ce({},s,{defaultTheme:n,themeId:e}))}));return o.__mui_systemSx=!0,(s,a={})=>{Cx(s,C=>C.filter(A=>!(A!=null&&A.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:f,skipSx:h,overridesResolver:d=SC(xC(u))}=a,p=Sn(a,gC),y=f!==void 0?f:u&&u!=="Root"&&u!=="root"||!1,v=h||!1;let m,c=Yf;u==="Root"||u==="root"?c=i:u?c=r:_C(s)&&(c=void 0);const g=Ax(s,ce({shouldForwardProp:c,label:m},p)),_=C=>typeof C=="function"&&C.__emotion_real!==C||zi(C)?A=>_u(C,ce({},A,{theme:Tl({theme:A.theme,defaultTheme:n,themeId:e})})):C,S=(C,...A)=>{let w=_(C);const P=A?A.map(_):[];l&&d&&P.push(R=>{const z=Tl(ce({},R,{defaultTheme:n,themeId:e}));if(!z.components||!z.components[l]||!z.components[l].styleOverrides)return null;const O=z.components[l].styleOverrides,Y={};return Object.entries(O).forEach(([$,X])=>{Y[$]=_u(X,ce({},R,{theme:z}))}),d(R,Y)}),l&&!y&&P.push(R=>{var z;const O=Tl(ce({},R,{defaultTheme:n,themeId:e})),Y=O==null||(z=O.components)==null||(z=z[l])==null?void 0:z.variants;return _u({variants:Y},ce({},R,{theme:O}))}),v||P.push(o);const T=P.length-A.length;if(Array.isArray(C)&&T>0){const R=new Array(T).fill("");w=[...C,...R],w.raw=[...C.raw,...R]}const x=g(w,...P);return s.muiName&&(x.muiName=s.muiName),x};return g.withConfig&&(S.withConfig=g.withConfig),S}}const EC=MC();function wC(t){const{theme:e,name:n,props:i}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?i:qu(e.components[n].defaultProps,i)}function TC({props:t,name:e,defaultTheme:n,themeId:i}){let r=hC(n);return i&&(r=r[i]||r),wC({theme:r,name:e,props:t})}const AC=Ae.createContext(),CC=()=>{const t=Ae.useContext(AC);return t??!1},bC=["component","direction","spacing","divider","children","className","useFlexGap"],RC=qa(),PC=EC("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function LC(t){return TC({props:t,name:"MuiStack",defaultTheme:RC})}function DC(t,e){const n=Ae.Children.toArray(t).filter(Boolean);return n.reduce((i,r,o)=>(i.push(r),o<n.length-1&&i.push(Ae.cloneElement(e,{key:`separator-${o}`})),i),[])}const IC=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],NC=({ownerState:t,theme:e})=>{let n=ce({display:"flex",flexDirection:"column"},mi({theme:e},Xf({values:t.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i})));if(t.spacing){const i=Tm(e),r=Object.keys(e.breakpoints.values).reduce((l,u)=>((typeof t.spacing=="object"&&t.spacing[u]!=null||typeof t.direction=="object"&&t.direction[u]!=null)&&(l[u]=!0),l),{}),o=Xf({values:t.direction,base:r}),s=Xf({values:t.spacing,base:r});typeof o=="object"&&Object.keys(o).forEach((l,u,f)=>{if(!o[l]){const d=u>0?o[f[u-1]]:"column";o[l]=d}}),n=qn(n,mi({theme:e},s,(l,u)=>t.useFlexGap?{gap:ao(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${IC(u?o[u]:t.direction)}`]:ao(i,l)}}))}return n=uT(e.breakpoints,n),n};function UC(t={}){const{createStyledComponent:e=PC,useThemeProps:n=LC,componentName:i="MuiStack"}=t,r=()=>hm({root:["root"]},l=>Nc(i,l),{}),o=e(NC);return Ae.forwardRef(function(l,u){const f=n(l),h=Nx(f),{component:d="div",direction:p="column",spacing:y=0,divider:v,children:m,className:c,useFlexGap:g=!1}=h,_=Sn(h,bC),S={direction:p,spacing:y,useFlexGap:g},C=r();return Fe.jsx(o,ce({as:d,ownerState:S,ref:u,className:Ai(C.root,c)},_,{children:v?DC(m,v):m}))})}const OC=UC({createStyledComponent:Ji("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>pm({props:t,name:"MuiStack"})});function FC(t,e,n=(i,r)=>i===r){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}const kC=2;function Gx(t,e){return t-e}function R0(t,e){var n;const{index:i}=(n=t.reduce((r,o,s)=>{const a=Math.abs(e-o);return r===null||a<r.distance||a===r.distance?{distance:a,index:s}:r},null))!=null?n:{};return i}function Al(t,e){if(e.current!==void 0&&t.changedTouches){const n=t;for(let i=0;i<n.changedTouches.length;i+=1){const r=n.changedTouches[i];if(r.identifier===e.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:t.clientX,y:t.clientY}}function Ju(t,e,n){return(t-e)*100/(n-e)}function zC(t,e,n){return(n-e)*t+e}function BC(t){if(Math.abs(t)<1){const n=t.toExponential().split("e-"),i=n[0].split(".")[1];return(i?i.length:0)+parseInt(n[1],10)}const e=t.toString().split(".")[1];return e?e.length:0}function HC(t,e,n){const i=Math.round((t-n)/e)*e+n;return Number(i.toFixed(BC(e)))}function P0({values:t,newValue:e,index:n}){const i=t.slice();return i[n]=e,i.sort(Gx)}function Cl({sliderRef:t,activeIndex:e,setActive:n}){var i,r;const o=fu(t.current);if(!((i=t.current)!=null&&i.contains(o.activeElement))||Number(o==null||(r=o.activeElement)==null?void 0:r.getAttribute("data-index"))!==e){var s;(s=t.current)==null||s.querySelector(`[type="range"][data-index="${e}"]`).focus()}n&&n(e)}function bl(t,e){return typeof t=="number"&&typeof e=="number"?t===e:typeof t=="object"&&typeof e=="object"?FC(t,e):!1}const VC={horizontal:{offset:t=>({left:`${t}%`}),leap:t=>({width:`${t}%`})},"horizontal-reverse":{offset:t=>({right:`${t}%`}),leap:t=>({width:`${t}%`})},vertical:{offset:t=>({bottom:`${t}%`}),leap:t=>({height:`${t}%`})}},GC=t=>t;let Rl;function L0(){return Rl===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Rl=CSS.supports("touch-action","none"):Rl=!0),Rl}function WC(t){const{"aria-labelledby":e,defaultValue:n,disabled:i=!1,disableSwap:r=!1,isRtl:o=!1,marks:s=!1,max:a=100,min:l=0,name:u,onChange:f,onChangeCommitted:h,orientation:d="horizontal",rootRef:p,scale:y=GC,step:v=1,shiftStep:m=10,tabIndex:c,value:g}=t,_=Ae.useRef(),[S,C]=Ae.useState(-1),[A,w]=Ae.useState(-1),[P,T]=Ae.useState(!1),x=Ae.useRef(0),[R,z]=wE({controlled:g,default:n??l,name:"Slider"}),O=f&&((B,Q,G)=>{const ne=B.nativeEvent||B,ye=new ne.constructor(ne.type,ne);Object.defineProperty(ye,"target",{writable:!0,value:{value:Q,name:u}}),f(ye,Q,G)}),Y=Array.isArray(R);let $=Y?R.slice().sort(Gx):[R];$=$.map(B=>B==null?l:Vo(B,l,a));const X=s===!0&&v!==null?[...Array(Math.floor((a-l)/v)+1)].map((B,Q)=>({value:l+v*Q})):s||[],j=X.map(B=>B.value),{isFocusVisibleRef:D,onBlur:K,onFocus:J,ref:ae}=DE(),[Te,He]=Ae.useState(-1),W=Ae.useRef(),ie=xh(ae,W),ge=xh(p,ie),he=B=>Q=>{var G;const ne=Number(Q.currentTarget.getAttribute("data-index"));J(Q),D.current===!0&&He(ne),w(ne),B==null||(G=B.onFocus)==null||G.call(B,Q)},Ue=B=>Q=>{var G;K(Q),D.current===!1&&He(-1),w(-1),B==null||(G=B.onBlur)==null||G.call(B,Q)},Be=(B,Q)=>{const G=Number(B.currentTarget.getAttribute("data-index")),ne=$[G],ye=j.indexOf(ne);let fe=Q;if(X&&v==null){const pe=j[j.length-1];fe>pe?fe=pe:fe<j[0]?fe=j[0]:fe=fe<ne?j[ye-1]:j[ye+1]}if(fe=Vo(fe,l,a),Y){r&&(fe=Vo(fe,$[G-1]||-1/0,$[G+1]||1/0));const pe=fe;fe=P0({values:$,newValue:fe,index:G});let Pe=G;r||(Pe=fe.indexOf(pe)),Cl({sliderRef:W,activeIndex:Pe})}z(fe),He(G),O&&!bl(fe,R)&&O(B,fe,G),h&&h(B,fe)},Ve=B=>Q=>{var G;if(v!==null){const ne=Number(Q.currentTarget.getAttribute("data-index")),ye=$[ne];let fe=null;(Q.key==="ArrowLeft"||Q.key==="ArrowDown")&&Q.shiftKey||Q.key==="PageDown"?fe=Math.max(ye-m,l):((Q.key==="ArrowRight"||Q.key==="ArrowUp")&&Q.shiftKey||Q.key==="PageUp")&&(fe=Math.min(ye+m,a)),fe!==null&&(Be(Q,fe),Q.preventDefault())}B==null||(G=B.onKeyDown)==null||G.call(B,Q)};tx(()=>{if(i&&W.current.contains(document.activeElement)){var B;(B=document.activeElement)==null||B.blur()}},[i]),i&&S!==-1&&C(-1),i&&Te!==-1&&He(-1);const ut=B=>Q=>{var G;(G=B.onChange)==null||G.call(B,Q),Be(Q,Q.target.valueAsNumber)},L=Ae.useRef();let et=d;o&&d==="horizontal"&&(et+="-reverse");const Le=({finger:B,move:Q=!1})=>{const{current:G}=W,{width:ne,height:ye,bottom:fe,left:pe}=G.getBoundingClientRect();let Pe;et.indexOf("vertical")===0?Pe=(fe-B.y)/ye:Pe=(B.x-pe)/ne,et.indexOf("-reverse")!==-1&&(Pe=1-Pe);let _e;if(_e=zC(Pe,l,a),v)_e=HC(_e,v,l);else{const I=R0(j,_e);_e=j[I]}_e=Vo(_e,l,a);let Xe=0;if(Y){Q?Xe=L.current:Xe=R0($,_e),r&&(_e=Vo(_e,$[Xe-1]||-1/0,$[Xe+1]||1/0));const I=_e;_e=P0({values:$,newValue:_e,index:Xe}),r&&Q||(Xe=_e.indexOf(I),L.current=Xe)}return{newValue:_e,activeIndex:Xe}},De=Hf(B=>{const Q=Al(B,_);if(!Q)return;if(x.current+=1,B.type==="mousemove"&&B.buttons===0){Se(B);return}const{newValue:G,activeIndex:ne}=Le({finger:Q,move:!0});Cl({sliderRef:W,activeIndex:ne,setActive:C}),z(G),!P&&x.current>kC&&T(!0),O&&!bl(G,R)&&O(B,G,ne)}),Se=Hf(B=>{const Q=Al(B,_);if(T(!1),!Q)return;const{newValue:G}=Le({finger:Q,move:!0});C(-1),B.type==="touchend"&&w(-1),h&&h(B,G),_.current=void 0,Ce()}),ot=Hf(B=>{if(i)return;L0()||B.preventDefault();const Q=B.changedTouches[0];Q!=null&&(_.current=Q.identifier);const G=Al(B,_);if(G!==!1){const{newValue:ye,activeIndex:fe}=Le({finger:G});Cl({sliderRef:W,activeIndex:fe,setActive:C}),z(ye),O&&!bl(ye,R)&&O(B,ye,fe)}x.current=0;const ne=fu(W.current);ne.addEventListener("touchmove",De,{passive:!0}),ne.addEventListener("touchend",Se,{passive:!0})}),Ce=Ae.useCallback(()=>{const B=fu(W.current);B.removeEventListener("mousemove",De),B.removeEventListener("mouseup",Se),B.removeEventListener("touchmove",De),B.removeEventListener("touchend",Se)},[Se,De]);Ae.useEffect(()=>{const{current:B}=W;return B.addEventListener("touchstart",ot,{passive:L0()}),()=>{B.removeEventListener("touchstart",ot),Ce()}},[Ce,ot]),Ae.useEffect(()=>{i&&Ce()},[i,Ce]);const ze=B=>Q=>{var G;if((G=B.onMouseDown)==null||G.call(B,Q),i||Q.defaultPrevented||Q.button!==0)return;Q.preventDefault();const ne=Al(Q,_);if(ne!==!1){const{newValue:fe,activeIndex:pe}=Le({finger:ne});Cl({sliderRef:W,activeIndex:pe,setActive:C}),z(fe),O&&!bl(fe,R)&&O(Q,fe,pe)}x.current=0;const ye=fu(W.current);ye.addEventListener("mousemove",De,{passive:!0}),ye.addEventListener("mouseup",Se)},b=Ju(Y?$[0]:l,l,a),M=Ju($[$.length-1],l,a)-b,H=(B={})=>{const Q=du(B),G={onMouseDown:ze(Q||{})},ne=ce({},Q,G);return ce({},B,{ref:ge},ne)},te=B=>Q=>{var G;(G=B.onMouseOver)==null||G.call(B,Q);const ne=Number(Q.currentTarget.getAttribute("data-index"));w(ne)},re=B=>Q=>{var G;(G=B.onMouseLeave)==null||G.call(B,Q),w(-1)};return{active:S,axis:et,axisProps:VC,dragging:P,focusedThumbIndex:Te,getHiddenInputProps:(B={})=>{var Q;const G=du(B),ne={onChange:ut(G||{}),onFocus:he(G||{}),onBlur:Ue(G||{}),onKeyDown:Ve(G||{})},ye=ce({},G,ne);return ce({tabIndex:c,"aria-labelledby":e,"aria-orientation":d,"aria-valuemax":y(a),"aria-valuemin":y(l),name:u,type:"range",min:t.min,max:t.max,step:t.step===null&&t.marks?"any":(Q=t.step)!=null?Q:void 0,disabled:i},B,ye,{style:ce({},IE,{direction:o?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:H,getThumbProps:(B={})=>{const Q=du(B),G={onMouseOver:te(Q||{}),onMouseLeave:re(Q||{})};return ce({},B,Q,G)},marks:X,open:A,range:Y,rootRef:ge,trackLeap:M,trackOffset:b,values:$,getThumbStyle:B=>({pointerEvents:S!==-1&&S!==B?"none":void 0})}}const $C=t=>!t||!ha(t);function XC(t){return Nc("MuiSlider",t)}const Xn=nx("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),jC=t=>{const{open:e}=t;return{offset:Ai(e&&Xn.valueLabelOpen),circle:Xn.valueLabelCircle,label:Xn.valueLabelLabel}};function YC(t){const{children:e,className:n,value:i}=t,r=jC(t);return e?Ae.cloneElement(e,{className:Ai(e.props.className)},Fe.jsxs(Ae.Fragment,{children:[e.props.children,Fe.jsx("span",{className:Ai(r.offset,n),"aria-hidden":!0,children:Fe.jsx("span",{className:r.circle,children:Fe.jsx("span",{className:r.label,children:i})})})]})):null}const qC=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function D0(t){return t}const KC=Ji("span",{name:"MuiSlider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`color${an(n.color)}`],n.size!=="medium"&&e[`size${an(n.size)}`],n.marked&&e.marked,n.orientation==="vertical"&&e.vertical,n.track==="inverted"&&e.trackInverted,n.track===!1&&e.trackFalse]}})(({theme:t})=>{var e;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${Xn.disabled}`]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},[`&.${Xn.dragging}`]:{[`& .${Xn.thumb}, & .${Xn.track}`]:{transition:"none"}},variants:[...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),ZC=Ji("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(t,e)=>e.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),QC=Ji("span",{name:"MuiSlider",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t})=>{var e;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n,track:"inverted"},style:ce({},t.vars?{backgroundColor:t.vars.palette.Slider[`${n}Track`],borderColor:t.vars.palette.Slider[`${n}Track`]}:ce({backgroundColor:bh(t.palette[n].main,.62),borderColor:bh(t.palette[n].main,.62)},t.applyStyles("dark",{backgroundColor:Ch(t.palette[n].main,.5)}),t.applyStyles("dark",{borderColor:Ch(t.palette[n].main,.5)})))}))]}}),JC=Ji("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.thumb,e[`thumbColor${an(n.color)}`],n.size!=="medium"&&e[`thumbSize${an(n.size)}`]]}})(({theme:t})=>{var e;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${Xn.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n},style:{[`&:hover, &.${Xn.focusVisible}`]:ce({},t.vars?{boxShadow:`0px 0px 0px 8px rgba(${t.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${M0(t.palette[n].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${Xn.active}`]:ce({},t.vars?{boxShadow:`0px 0px 0px 14px rgba(${t.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${M0(t.palette[n].main,.16)}`})}}))]}}),eb=Ji(YC,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(t,e)=>e.valueLabel})(({theme:t})=>ce({zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${Xn.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${Xn.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),tb=Ji("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:t=>Pm(t)&&t!=="markActive",overridesResolver:(t,e)=>{const{markActive:n}=t;return[e.mark,n&&e.markActive]}})(({theme:t})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8}}]})),nb=Ji("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:t=>Pm(t)&&t!=="markLabelActive",overridesResolver:(t,e)=>e.markLabel})(({theme:t})=>ce({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(t.vars||t).palette.text.primary}}]})),ib=t=>{const{disabled:e,dragging:n,marked:i,orientation:r,track:o,classes:s,color:a,size:l}=t,u={root:["root",e&&"disabled",n&&"dragging",i&&"marked",r==="vertical"&&"vertical",o==="inverted"&&"trackInverted",o===!1&&"trackFalse",a&&`color${an(a)}`,l&&`size${an(l)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",e&&"disabled",l&&`thumbSize${an(l)}`,a&&`thumbColor${an(a)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return hm(u,XC,s)},rb=({children:t})=>t,ob=Ae.forwardRef(function(e,n){var i,r,o,s,a,l,u,f,h,d,p,y,v,m,c,g,_,S,C,A,w,P,T,x;const R=pm({props:e,name:"MuiSlider"}),z=CC(),{"aria-label":O,"aria-valuetext":Y,"aria-labelledby":$,component:X="span",components:j={},componentsProps:D={},color:K="primary",classes:J,className:ae,disableSwap:Te=!1,disabled:He=!1,getAriaLabel:W,getAriaValueText:ie,marks:ge=!1,max:he=100,min:Ue=0,orientation:Be="horizontal",shiftStep:Ve=10,size:ut="medium",step:L=1,scale:et=D0,slotProps:Le,slots:De,track:Se="normal",valueLabelDisplay:ot="off",valueLabelFormat:Ce=D0}=R,ze=Sn(R,qC),b=ce({},R,{isRtl:z,max:he,min:Ue,classes:J,disabled:He,disableSwap:Te,orientation:Be,marks:ge,color:K,size:ut,step:L,shiftStep:Ve,scale:et,track:Se,valueLabelDisplay:ot,valueLabelFormat:Ce}),{axisProps:M,getRootProps:H,getHiddenInputProps:te,getThumbProps:re,open:ee,active:Re,axis:de,focusedThumbIndex:B,range:Q,dragging:G,marks:ne,values:ye,trackOffset:fe,trackLeap:pe,getThumbStyle:Pe}=WC(ce({},b,{rootRef:n}));b.marked=ne.length>0&&ne.some(xt=>xt.label),b.dragging=G,b.focusedThumbIndex=B;const _e=ib(b),Xe=(i=(r=De==null?void 0:De.root)!=null?r:j.Root)!=null?i:KC,I=(o=(s=De==null?void 0:De.rail)!=null?s:j.Rail)!=null?o:ZC,se=(a=(l=De==null?void 0:De.track)!=null?l:j.Track)!=null?a:QC,q=(u=(f=De==null?void 0:De.thumb)!=null?f:j.Thumb)!=null?u:JC,Z=(h=(d=De==null?void 0:De.valueLabel)!=null?d:j.ValueLabel)!=null?h:eb,le=(p=(y=De==null?void 0:De.mark)!=null?y:j.Mark)!=null?p:tb,Ie=(v=(m=De==null?void 0:De.markLabel)!=null?m:j.MarkLabel)!=null?v:nb,je=(c=(g=De==null?void 0:De.input)!=null?g:j.Input)!=null?c:"input",pt=(_=Le==null?void 0:Le.root)!=null?_:D.root,Nt=(S=Le==null?void 0:Le.rail)!=null?S:D.rail,Ye=(C=Le==null?void 0:Le.track)!=null?C:D.track,wn=(A=Le==null?void 0:Le.thumb)!=null?A:D.thumb,fn=(w=Le==null?void 0:Le.valueLabel)!=null?w:D.valueLabel,il=(P=Le==null?void 0:Le.mark)!=null?P:D.mark,Pi=(T=Le==null?void 0:Le.markLabel)!=null?T:D.markLabel,Os=(x=Le==null?void 0:Le.input)!=null?x:D.input,rl=nr({elementType:Xe,getSlotProps:H,externalSlotProps:pt,externalForwardedProps:ze,additionalProps:ce({},$C(Xe)&&{as:X}),ownerState:ce({},b,pt==null?void 0:pt.ownerState),className:[_e.root,ae]}),ol=nr({elementType:I,externalSlotProps:Nt,ownerState:b,className:_e.rail}),ho=nr({elementType:se,externalSlotProps:Ye,additionalProps:{style:ce({},M[de].offset(fe),M[de].leap(pe))},ownerState:ce({},b,Ye==null?void 0:Ye.ownerState),className:_e.track}),po=nr({elementType:q,getSlotProps:re,externalSlotProps:wn,ownerState:ce({},b,wn==null?void 0:wn.ownerState),className:_e.thumb}),mo=nr({elementType:Z,externalSlotProps:fn,ownerState:ce({},b,fn==null?void 0:fn.ownerState),className:_e.valueLabel}),go=nr({elementType:le,externalSlotProps:il,ownerState:b,className:_e.mark}),vo=nr({elementType:Ie,externalSlotProps:Pi,ownerState:b,className:_e.markLabel}),lf=nr({elementType:je,getSlotProps:te,externalSlotProps:Os,ownerState:b});return Fe.jsxs(Xe,ce({},rl,{children:[Fe.jsx(I,ce({},ol)),Fe.jsx(se,ce({},ho)),ne.filter(xt=>xt.value>=Ue&&xt.value<=he).map((xt,Ut)=>{const E=Ju(xt.value,Ue,he),N=M[de].offset(E);let F;return Se===!1?F=ye.indexOf(xt.value)!==-1:F=Se==="normal"&&(Q?xt.value>=ye[0]&&xt.value<=ye[ye.length-1]:xt.value<=ye[0])||Se==="inverted"&&(Q?xt.value<=ye[0]||xt.value>=ye[ye.length-1]:xt.value>=ye[0]),Fe.jsxs(Ae.Fragment,{children:[Fe.jsx(le,ce({"data-index":Ut},go,!ha(le)&&{markActive:F},{style:ce({},N,go.style),className:Ai(go.className,F&&_e.markActive)})),xt.label!=null?Fe.jsx(Ie,ce({"aria-hidden":!0,"data-index":Ut},vo,!ha(Ie)&&{markLabelActive:F},{style:ce({},N,vo.style),className:Ai(_e.markLabel,vo.className,F&&_e.markLabelActive),children:xt.label})):null]},Ut)}),ye.map((xt,Ut)=>{const E=Ju(xt,Ue,he),N=M[de].offset(E),F=ot==="off"?rb:Z;return Fe.jsx(F,ce({},!ha(F)&&{valueLabelFormat:Ce,valueLabelDisplay:ot,value:typeof Ce=="function"?Ce(et(xt),Ut):Ce,index:Ut,open:ee===Ut||Re===Ut||ot==="on",disabled:He},mo,{children:Fe.jsx(q,ce({"data-index":Ut},po,{className:Ai(_e.thumb,po.className,Re===Ut&&_e.active,B===Ut&&_e.focusVisible),style:ce({},N,Pe(Ut),po.style),children:Fe.jsx(je,ce({"data-index":Ut,"aria-label":W?W(Ut):O,"aria-valuenow":et(xt),"aria-labelledby":$,"aria-valuetext":ie?ie(et(xt),Ut):Y,value:ye[Ut]},lf))}))}),Ut)})]}))});function sb(t){return Fe.jsx("div",{className:"settingsMenuTitle",children:t.label})}class ab{constructor(){Me(this,"width",1920);Me(this,"height",1080);Me(this,"aspect",1);Me(this,"deviceWidth");Me(this,"deviceHeight");Me(this,"deviceAspect");Me(this,"orientation");Me(this,"pixelRatio");Me(this,"fps",0);Me(this,"targetFPS",60);Me(this,"useTouch",!1);Me(this,"type");Me(this,"listeners",new Set);Me(this,"cachedPPCm",-1);Me(this,"_overrideWidth");Me(this,"_overrideHeight");Me(this,"physicalDeviceHeight");Me(this,"physicalDeviceWidth");Me(this,"handleChange",()=>{const e=this._overrideWidth===void 0?window.innerWidth:this._overrideWidth,n=this._overrideHeight===void 0?window.innerHeight:this._overrideHeight;if(!(this.width===e&&this.height===n)){this.useTouch=/Mobi|Android|iPhone|iPad|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent),this.width=e,this.height=n,this.aspect=this.width/this.height,this.deviceHeight=Math.min(this.width,this.height),this.deviceWidth=Math.max(this.width,this.height),this.deviceAspect=this.deviceWidth/this.deviceHeight,this.pixelRatio=window.devicePixelRatio,this.physicalDeviceHeight=this.deviceHeight*this.pixelRatio,this.physicalDeviceWidth=this.deviceWidth*this.pixelRatio,this.orientation=this.aspect<1?"portrait":"landscape",this.type=this.useTouch?this.deviceWidth<1024&&this.deviceAspect>1.6?"mobile":"tablet":"desktop";for(const i of this.listeners)i()}});const e=()=>{this.handleChange(),setTimeout(this.handleChange,50)};window.addEventListener("resize",e),window.addEventListener("fullscreenchange",e),this.handleChange()}trackCanvas(e){setInterval(()=>{this._overrideWidth=e.clientWidth,this._overrideHeight=e.clientHeight,this.handleChange()},100)}onChange(e,n=!1){return this.listeners.add(e),n&&e(),()=>this.listeners.delete(e)}get isMobile(){return this.type==="mobile"}get isTablet(){return this.type==="tablet"}get isDesktop(){return this.type==="desktop"}get isIOS(){const e=navigator.appVersion,n=e.includes("iPhone"),i=e.includes("iPad"),r=/^(iPhone|iPad|iPod)/.test(navigator.platform);return n||i||r}get isIpadOS(){const e=navigator.appVersion,n=e.includes("iPad"),i=e.includes("Version/13.")&&e.includes("Safari"),r=e.includes("Mac OS X");return n||i&&r}get pixelsPerCm(){if(this.cachedPPCm===-1){const e=document.createElement("div");e.style.height="1in";const n=document.getElementsByTagName("body")[0];n.appendChild(e);const i=getComputedStyle(e,null).getPropertyValue("height");n.removeChild(e),this.cachedPPCm=Number.parseFloat(i)*2.54}return this.cachedPPCm}get screenHeightCms(){return this.height/this.pixelsPerCm}get screenWidthCms(){return this.width/this.pixelsPerCm}get screenShorterCms(){return Math.min(this.width,this.height)/this.pixelsPerCm}get performance(){return this.fps<this.targetFPS*.4?"low":this.fps<this.targetFPS*.8?"medium":"high"}}const Ph=new ab,Wx={graphicsResolution:()=>Number.parseInt(localStorage.getItem("graphicsResolution")||"1")};function lb(t,e=300){let n=!1,i=!1,r;const o=(...s)=>{n?(i=!0,r=s):(t.apply(this,s),n=!0,setTimeout(()=>{n=!1,i&&(i=!1,o.apply(this,r))},e))};return o}class $x{constructor(){Me(this,"listeners",[]);Me(this,"oneTimeListeners",[])}listen(e){this.listeners.push(e)}listenOnce(e){this.oneTimeListeners.push(e)}emit(e){for(const n of this.listeners)n(e);for(const n of this.oneTimeListeners)n(e);this.oneTimeListeners.length=0}}class ub extends $x{constructor(e){super(),this._value=e}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.emit(e))}}const Lh=new Set;function cb(t,e=!1){return Lh.add(t),e&&t(cs.width.value,cs.height.value),()=>Lh.delete(t)}function En(t){return new ub(t)}const Nr=En(1920),Is=En(1080),Xx=En(1920),jx=En(1080),Ka=En(window.devicePixelRatio),Za=En(1),Lm=En(Wx.graphicsResolution()),Dh=En(1),Yx=En(1),qx=En(1920/2),fb=En(1),db=En(1),Kx=En(16/9),tf=En(1);function hb(){for(const t of Lh)t(Nr.value,Is.value);Ih=!1}let Ih=!1;function pb(){Ih||(Ih=!0,setTimeout(hb,10))}function Dm(){Dh.value=Ka.value/(4-Lm.value),Za.value=Dh.value*window.outerHeight/window.innerHeight}Ka.listen(Dm);Lm.listen(Dm);Za.listen(t=>{Yx.value=t/Ka.value});function Zx(){Ka.value=window.devicePixelRatio,Dm(),pb()}Nr.listen(Zx);Is.listen(Zx);function Qx(){Xx.value=Nr.value/tf.value}function Jx(){jx.value=Is.value/tf.value}Nr.listen(Qx);Is.listen(Jx);tf.listen(()=>{Qx(),Jx()});function eS(){qx.value=Za.value*Nr.value*.5}Nr.listen(eS);Za.listen(eS);const mb=()=>{const t=Ph.width,e=Ph.height;Nr.value=t,Is.value=e,Kx.value=t/e},gb=lb(mb);Ph.onChange(gb,!0);const cs={width:Nr,height:Is,uiWidth:Xx,uiHeight:jx,devicePixelRatio:Ka,finalDevicePixelRatio:Za,pixelDownsample:Lm,virtualPixelRatio:Dh,finalPointScale:Yx,halfScreenWidthPixels:qx,pixelWidthInClipSpace:fb,pixelHeightInClipSpace:db,aspect:Kx,uiScale:tf,onSizeChange:cb},vb=[{value:1,label:"low"},{value:2,label:"medium"},{value:3,label:"high"}];function _b(){const[t,e]=Ae.useState(Wx.graphicsResolution());return Fe.jsxs("div",{className:"settingsMenuContent",children:[Fe.jsx(sb,{label:"Settings"}),"Graphics Resolution",Fe.jsxs(OC,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[Fe.jsx(uC,{}),Fe.jsx(ob,{"aria-label":"Graphics Resolution",value:t,step:null,marks:vb,min:1,max:3,onChange:(n,i)=>{typeof i=="number"&&(localStorage.setItem("graphicsResolution",i.toString()),e(i),cs.pixelDownsample.value=i)}}),Fe.jsx(lC,{})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Im="167",yb=0,I0=1,xb=2,tS=1,nS=2,Oi=3,br=0,yn=1,Bi=2,wr=0,fs=1,N0=2,U0=3,O0=4,Sb=5,jr=100,Mb=101,Eb=102,wb=103,Tb=104,Ab=200,Cb=201,bb=202,Rb=203,Nh=204,Uh=205,Pb=206,Lb=207,Db=208,Ib=209,Nb=210,Ub=211,Ob=212,Fb=213,kb=214,zb=0,Bb=1,Hb=2,ec=3,Vb=4,Gb=5,Wb=6,$b=7,iS=0,Xb=1,jb=2,Tr=0,Yb=1,qb=2,Kb=3,Zb=4,Qb=5,Jb=6,eR=7,rS=300,Ms=301,Es=302,Oh=303,Fh=304,nf=306,kh=1e3,Qr=1001,zh=1002,jn=1003,tR=1004,Pl=1005,ui=1006,qf=1007,Jr=1008,Ki=1009,oS=1010,sS=1011,ka=1012,Nm=1013,lo=1014,Gi=1015,Qa=1016,Um=1017,Om=1018,ws=1020,aS=35902,lS=1021,uS=1022,ci=1023,cS=1024,fS=1025,ds=1026,Ts=1027,dS=1028,Fm=1029,hS=1030,km=1031,zm=1033,yu=33776,xu=33777,Su=33778,Mu=33779,Bh=35840,Hh=35841,Vh=35842,Gh=35843,Wh=36196,$h=37492,Xh=37496,jh=37808,Yh=37809,qh=37810,Kh=37811,Zh=37812,Qh=37813,Jh=37814,ep=37815,tp=37816,np=37817,ip=37818,rp=37819,op=37820,sp=37821,Eu=36492,ap=36494,lp=36495,pS=36283,up=36284,cp=36285,fp=36286,nR=3200,iR=3201,rR=0,oR=1,hr="",_i="srgb",Ur="srgb-linear",Bm="display-p3",rf="display-p3-linear",tc="linear",dt="srgb",nc="rec709",ic="p3",To=7680,F0=519,sR=512,aR=513,lR=514,mS=515,uR=516,cR=517,fR=518,dR=519,k0=35044,z0="300 es",Wi=2e3,rc=2001;class Ns{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,s=r.length;o<s;o++)r[o].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kf=Math.PI/180,dp=180/Math.PI;function Ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function pn(t,e,n){return Math.max(e,Math.min(n,t))}function hR(t,e){return(t%e+e)%e}function Zf(t,e,n){return(1-n)*t+n*e}function js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function dn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,s=this.y-e.y;return this.x=o*i-s*r+e.x,this.y=o*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,s,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u)}set(e,n,i,r,o,s,a,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=o,f[5]=l,f[6]=i,f[7]=s,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[3],l=i[6],u=i[1],f=i[4],h=i[7],d=i[2],p=i[5],y=i[8],v=r[0],m=r[3],c=r[6],g=r[1],_=r[4],S=r[7],C=r[2],A=r[5],w=r[8];return o[0]=s*v+a*g+l*C,o[3]=s*m+a*_+l*A,o[6]=s*c+a*S+l*w,o[1]=u*v+f*g+h*C,o[4]=u*m+f*_+h*A,o[7]=u*c+f*S+h*w,o[2]=d*v+p*g+y*C,o[5]=d*m+p*_+y*A,o[8]=d*c+p*S+y*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8];return n*s*f-n*a*u-i*o*f+i*a*l+r*o*u-r*s*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=f*s-a*u,d=a*l-f*o,p=u*o-s*l,y=n*h+i*d+r*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/y;return e[0]=h*v,e[1]=(r*u-f*i)*v,e[2]=(a*i-r*s)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*o-a*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(s*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,s,a){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*s+u*a)+s+e,-r*u,r*l,-r*(-u*s+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Qf.makeScale(e,n)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,n){return this.premultiply(Qf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new We;function gS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function pR(){const t=oc("canvas");return t.style.display="block",t}const B0={};function ma(t){t in B0||(B0[t]=!0,console.warn(t))}function mR(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const H0=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),V0=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ys={[Ur]:{transfer:tc,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[_i]:{transfer:dt,primaries:nc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[rf]:{transfer:tc,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(V0),fromReference:t=>t.applyMatrix3(H0)},[Bm]:{transfer:dt,primaries:ic,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(V0),fromReference:t=>t.applyMatrix3(H0).convertLinearToSRGB()}},gR=new Set([Ur,rf]),rt={enabled:!0,_workingColorSpace:Ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!gR.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ys[e].toReference,r=Ys[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ys[t].primaries},getTransfer:function(t){return t===hr?tc:Ys[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ys[e].luminanceCoefficients)}};function hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Jf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ao;class vR{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ao===void 0&&(Ao=oc("canvas")),Ao.width=e.width,Ao.height=e.height;const i=Ao.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ao}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let s=0;s<o.length;s++)o[s]=hs(o[s]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(hs(n[i]/255)*255):n[i]=hs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _R=0;class vS{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?o.push(ed(r[s].image)):o.push(ed(r[s]))}else o=ed(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function ed(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vR.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yR=0;class xn extends Ns{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Qr,r=Qr,o=ui,s=Jr,a=ci,l=Ki,u=xn.DEFAULT_ANISOTROPY,f=hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=Ja(),this.name="",this.source=new vS(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=s,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kh:e.x=e.x-Math.floor(e.x);break;case Qr:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kh:e.y=e.y-Math.floor(e.y);break;case Qr:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=rS;xn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,n=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r+s[12]*o,this.y=s[1]*n+s[5]*i+s[9]*r+s[13]*o,this.z=s[2]*n+s[6]*i+s[10]*r+s[14]*o,this.w=s[3]*n+s[7]*i+s[11]*r+s[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],f=l[4],h=l[8],d=l[1],p=l[5],y=l[9],v=l[2],m=l[6],c=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(y+m)<.1&&Math.abs(u+p+c-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,S=(p+1)/2,C=(c+1)/2,A=(f+d)/4,w=(h+v)/4,P=(y+m)/4;return _>S&&_>C?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=A/i,o=w/i):S>C?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=A/r,o=P/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=w/o,r=P/o),this.set(i,r,o,n),this}let g=Math.sqrt((m-y)*(m-y)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(g)<.001&&(g=1),this.x=(m-y)/g,this.y=(h-v)/g,this.z=(d-f)/g,this.w=Math.acos((u+p+c-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xR extends Ns{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Vt(0,0,e,n),this.scissorTest=!1,this.viewport=new Vt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ui,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let a=0;a<s;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new vS(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uo extends xR{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class _S extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class SR extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=jn,this.minFilter=jn,this.wrapR=Qr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,s,a){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const d=o[s+0],p=o[s+1],y=o[s+2],v=o[s+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=y,e[n+3]=v;return}if(h!==v||l!==d||u!==p||f!==y){let m=1-a;const c=l*d+u*p+f*y+h*v,g=c>=0?1:-1,_=1-c*c;if(_>Number.EPSILON){const C=Math.sqrt(_),A=Math.atan2(C,c*g);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}const S=a*g;if(l=l*m+d*S,u=u*m+p*S,f=f*m+y*S,h=h*m+v*S,m===1-a){const C=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=C,u*=C,f*=C,h*=C}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,o,s){const a=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=o[s],d=o[s+1],p=o[s+2],y=o[s+3];return e[n]=a*y+f*h+l*p-u*d,e[n+1]=l*y+f*d+u*h-a*p,e[n+2]=u*y+f*p+a*d-l*h,e[n+3]=f*y-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,s=e._order,a=Math.cos,l=Math.sin,u=a(i/2),f=a(r/2),h=a(o/2),d=l(i/2),p=l(r/2),y=l(o/2);switch(s){case"XYZ":this._x=d*f*h+u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h-d*p*y;break;case"YXZ":this._x=d*f*h+u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h+d*p*y;break;case"ZXY":this._x=d*f*h-u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h-d*p*y;break;case"ZYX":this._x=d*f*h-u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h+d*p*y;break;case"YZX":this._x=d*f*h+u*p*y,this._y=u*p*h+d*f*y,this._z=u*f*y-d*p*h,this._w=u*f*h-d*p*y;break;case"XZY":this._x=d*f*h-u*p*y,this._y=u*p*h-d*f*y,this._z=u*f*y+d*p*h,this._w=u*f*h+d*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],s=n[1],a=n[5],l=n[9],u=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-u)*p,this._z=(s-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(f-l)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(o+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(o-u)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(s-r)/p,this._x=(o+u)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,s=e._w,a=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+s*a+r*u-o*l,this._y=r*f+s*l+o*a-i*u,this._z=o*f+s*u+i*l-r*a,this._w=s*f-i*a-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,s=this._w;let a=s*e._w+i*e._x+r*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=s,this._x=i,this._y=r,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*s+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,a),h=Math.sin((1-n)*f)/u,d=Math.sin(n*f)/u;return this._w=s*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=o*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(G0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,s=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*s,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*s,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*s,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,s=e.y,a=e.z,l=e.w,u=2*(s*r-a*i),f=2*(a*n-o*r),h=2*(o*i-s*n);return this.x=n+l*u+s*h-a*f,this.y=i+l*f+a*u-o*h,this.z=r+l*h+o*f-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,s=n.x,a=n.y,l=n.z;return this.x=r*l-o*a,this.y=o*s-i*l,this.z=i*a-r*s,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return td.copy(this).projectOnVector(e),this.sub(td)}reflect(e){return this.sub(td.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const td=new k,G0=new el;class tl{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ii.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ii.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ii.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,a=o.count;s<a;s++)e.isMesh===!0?e.getVertexPosition(s,ii):ii.fromBufferAttribute(o,s),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ll.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ll.copy(i.boundingBox)),Ll.applyMatrix4(e.matrixWorld),this.union(Ll)}const r=e.children;for(let o=0,s=r.length;o<s;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),Dl.subVectors(this.max,qs),Co.subVectors(e.a,qs),bo.subVectors(e.b,qs),Ro.subVectors(e.c,qs),ir.subVectors(bo,Co),rr.subVectors(Ro,bo),Fr.subVectors(Co,Ro);let n=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Fr.z,Fr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Fr.z,0,-Fr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Fr.y,Fr.x,0];return!nd(n,Co,bo,Ro,Dl)||(n=[1,0,0,0,1,0,0,0,1],!nd(n,Co,bo,Ro,Dl))?!1:(Il.crossVectors(ir,rr),n=[Il.x,Il.y,Il.z],nd(n,Co,bo,Ro,Dl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new k,new k,new k,new k,new k,new k,new k,new k],ii=new k,Ll=new tl,Co=new k,bo=new k,Ro=new k,ir=new k,rr=new k,Fr=new k,qs=new k,Dl=new k,Il=new k,kr=new k;function nd(t,e,n,i,r){for(let o=0,s=t.length-3;o<=s;o+=3){kr.fromArray(t,o);const a=r.x*Math.abs(kr.x)+r.y*Math.abs(kr.y)+r.z*Math.abs(kr.z),l=e.dot(kr),u=n.dot(kr),f=i.dot(kr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>a)return!1}return!0}const MR=new tl,Ks=new k,id=new k;class Hm{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):MR.setFromPoints(e).getCenter(i);let r=0;for(let o=0,s=e.length;o<s;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ks.subVectors(e,this.center);const n=Ks.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ks,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(id.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ks.copy(e.center).add(id)),this.expandByPoint(Ks.copy(e.center).sub(id))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new k,rd=new k,Nl=new k,or=new k,od=new k,Ul=new k,sd=new k;class yS{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){rd.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),or.copy(this.origin).sub(rd);const o=e.distanceTo(n)*.5,s=-this.direction.dot(Nl),a=or.dot(this.direction),l=-or.dot(Nl),u=or.lengthSq(),f=Math.abs(1-s*s);let h,d,p,y;if(f>0)if(h=s*l-a,d=s*a-l,y=o*f,h>=0)if(d>=-y)if(d<=y){const v=1/f;h*=v,d*=v,p=h*(h+s*d+2*a)+d*(s*h+d+2*l)+u}else d=o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d=-o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-y?(h=Math.max(0,-(-s*o+a)),d=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u):d<=y?(h=0,d=Math.min(Math.max(-o,-l),o),p=d*(d+2*l)+u):(h=Math.max(0,-(s*o+a)),d=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+d*(d+2*l)+u);else d=s>0?-o:o,h=Math.max(0,-(s*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(rd).addScaledVector(Nl,d),p}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,o=e.radius*e.radius;if(r>o)return null;const s=Math.sqrt(o-r),a=i-s,l=i+s;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,s,a,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),f>=0?(o=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(o=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),i>s||o>r||((o>i||isNaN(i))&&(i=o),(s<r||isNaN(r))&&(r=s),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,o){od.subVectors(n,e),Ul.subVectors(i,e),sd.crossVectors(od,Ul);let s=this.direction.dot(sd),a;if(s>0){if(r)return null;a=1}else if(s<0)a=-1,s=-s;else return null;or.subVectors(this.origin,e);const l=a*this.direction.dot(Ul.crossVectors(or,Ul));if(l<0)return null;const u=a*this.direction.dot(od.cross(or));if(u<0||l+u>s)return null;const f=-a*or.dot(sd);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,n,i,r,o,s,a,l,u,f,h,d,p,y,v,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,s,a,l,u,f,h,d,p,y,v,m)}set(e,n,i,r,o,s,a,l,u,f,h,d,p,y,v,m){const c=this.elements;return c[0]=e,c[4]=n,c[8]=i,c[12]=r,c[1]=o,c[5]=s,c[9]=a,c[13]=l,c[2]=u,c[6]=f,c[10]=h,c[14]=d,c[3]=p,c[7]=y,c[11]=v,c[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Po.setFromMatrixColumn(e,0).length(),o=1/Po.setFromMatrixColumn(e,1).length(),s=1/Po.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*s,n[9]=i[9]*s,n[10]=i[10]*s,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,s=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(o),h=Math.sin(o);if(e.order==="XYZ"){const d=s*f,p=s*h,y=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=p+y*u,n[5]=d-v*u,n[9]=-a*l,n[2]=v-d*u,n[6]=y+p*u,n[10]=s*l}else if(e.order==="YXZ"){const d=l*f,p=l*h,y=u*f,v=u*h;n[0]=d+v*a,n[4]=y*a-p,n[8]=s*u,n[1]=s*h,n[5]=s*f,n[9]=-a,n[2]=p*a-y,n[6]=v+d*a,n[10]=s*l}else if(e.order==="ZXY"){const d=l*f,p=l*h,y=u*f,v=u*h;n[0]=d-v*a,n[4]=-s*h,n[8]=y+p*a,n[1]=p+y*a,n[5]=s*f,n[9]=v-d*a,n[2]=-s*u,n[6]=a,n[10]=s*l}else if(e.order==="ZYX"){const d=s*f,p=s*h,y=a*f,v=a*h;n[0]=l*f,n[4]=y*u-p,n[8]=d*u+v,n[1]=l*h,n[5]=v*u+d,n[9]=p*u-y,n[2]=-u,n[6]=a*l,n[10]=s*l}else if(e.order==="YZX"){const d=s*l,p=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=v-d*h,n[8]=y*h+p,n[1]=h,n[5]=s*f,n[9]=-a*f,n[2]=-u*f,n[6]=p*h+y,n[10]=d-v*h}else if(e.order==="XZY"){const d=s*l,p=s*u,y=a*l,v=a*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=d*h+v,n[5]=s*f,n[9]=p*h-y,n[2]=y*h-p,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ER,e,wR)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),sr.crossVectors(i,Cn),sr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),sr.crossVectors(i,Cn)),sr.normalize(),Ol.crossVectors(Cn,sr),r[0]=sr.x,r[4]=Ol.x,r[8]=Cn.x,r[1]=sr.y,r[5]=Ol.y,r[9]=Cn.y,r[2]=sr.z,r[6]=Ol.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,s=i[0],a=i[4],l=i[8],u=i[12],f=i[1],h=i[5],d=i[9],p=i[13],y=i[2],v=i[6],m=i[10],c=i[14],g=i[3],_=i[7],S=i[11],C=i[15],A=r[0],w=r[4],P=r[8],T=r[12],x=r[1],R=r[5],z=r[9],O=r[13],Y=r[2],$=r[6],X=r[10],j=r[14],D=r[3],K=r[7],J=r[11],ae=r[15];return o[0]=s*A+a*x+l*Y+u*D,o[4]=s*w+a*R+l*$+u*K,o[8]=s*P+a*z+l*X+u*J,o[12]=s*T+a*O+l*j+u*ae,o[1]=f*A+h*x+d*Y+p*D,o[5]=f*w+h*R+d*$+p*K,o[9]=f*P+h*z+d*X+p*J,o[13]=f*T+h*O+d*j+p*ae,o[2]=y*A+v*x+m*Y+c*D,o[6]=y*w+v*R+m*$+c*K,o[10]=y*P+v*z+m*X+c*J,o[14]=y*T+v*O+m*j+c*ae,o[3]=g*A+_*x+S*Y+C*D,o[7]=g*w+_*R+S*$+C*K,o[11]=g*P+_*z+S*X+C*J,o[15]=g*T+_*O+S*j+C*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],s=e[1],a=e[5],l=e[9],u=e[13],f=e[2],h=e[6],d=e[10],p=e[14],y=e[3],v=e[7],m=e[11],c=e[15];return y*(+o*l*h-r*u*h-o*a*d+i*u*d+r*a*p-i*l*p)+v*(+n*l*p-n*u*d+o*s*d-r*s*p+r*u*f-o*l*f)+m*(+n*u*h-n*a*p-o*s*h+i*s*p+o*a*f-i*u*f)+c*(-r*a*f-n*l*h+n*a*d+r*s*h-i*s*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],s=e[4],a=e[5],l=e[6],u=e[7],f=e[8],h=e[9],d=e[10],p=e[11],y=e[12],v=e[13],m=e[14],c=e[15],g=h*m*u-v*d*u+v*l*p-a*m*p-h*l*c+a*d*c,_=y*d*u-f*m*u-y*l*p+s*m*p+f*l*c-s*d*c,S=f*v*u-y*h*u+y*a*p-s*v*p-f*a*c+s*h*c,C=y*h*l-f*v*l-y*a*d+s*v*d+f*a*m-s*h*m,A=n*g+i*_+r*S+o*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=g*w,e[1]=(v*d*o-h*m*o-v*r*p+i*m*p+h*r*c-i*d*c)*w,e[2]=(a*m*o-v*l*o+v*r*u-i*m*u-a*r*c+i*l*c)*w,e[3]=(h*l*o-a*d*o-h*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(f*m*o-y*d*o+y*r*p-n*m*p-f*r*c+n*d*c)*w,e[6]=(y*l*o-s*m*o-y*r*u+n*m*u+s*r*c-n*l*c)*w,e[7]=(s*d*o-f*l*o+f*r*u-n*d*u-s*r*p+n*l*p)*w,e[8]=S*w,e[9]=(y*h*o-f*v*o-y*i*p+n*v*p+f*i*c-n*h*c)*w,e[10]=(s*v*o-y*a*o+y*i*u-n*v*u-s*i*c+n*a*c)*w,e[11]=(f*a*o-s*h*o-f*i*u+n*h*u+s*i*p-n*a*p)*w,e[12]=C*w,e[13]=(f*v*r-y*h*r+y*i*d-n*v*d-f*i*m+n*h*m)*w,e[14]=(y*a*r-s*v*r-y*i*l+n*v*l+s*i*m-n*a*m)*w,e[15]=(s*h*r-f*a*r+f*i*l-n*h*l-s*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,s=e.x,a=e.y,l=e.z,u=o*s,f=o*a;return this.set(u*s+i,u*a-r*l,u*l+r*a,0,u*a+r*l,f*a+i,f*l-r*s,0,u*l-r*a,f*l+r*s,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,s){return this.set(1,i,o,0,e,1,s,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,s=n._y,a=n._z,l=n._w,u=o+o,f=s+s,h=a+a,d=o*u,p=o*f,y=o*h,v=s*f,m=s*h,c=a*h,g=l*u,_=l*f,S=l*h,C=i.x,A=i.y,w=i.z;return r[0]=(1-(v+c))*C,r[1]=(p+S)*C,r[2]=(y-_)*C,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(d+c))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(y+_)*w,r[9]=(m-g)*w,r[10]=(1-(d+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=Po.set(r[0],r[1],r[2]).length();const s=Po.set(r[4],r[5],r[6]).length(),a=Po.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const u=1/o,f=1/s,h=1/a;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=f,ri.elements[5]*=f,ri.elements[6]*=f,ri.elements[8]*=h,ri.elements[9]*=h,ri.elements[10]*=h,n.setFromRotationMatrix(ri),i.x=o,i.y=s,i.z=a,this}makePerspective(e,n,i,r,o,s,a=Wi){const l=this.elements,u=2*o/(n-e),f=2*o/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,y;if(a===Wi)p=-(s+o)/(s-o),y=-2*s*o/(s-o);else if(a===rc)p=-s/(s-o),y=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,s,a=Wi){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(s-o),d=(n+e)*u,p=(i+r)*f;let y,v;if(a===Wi)y=(s+o)*h,v=-2*h;else if(a===rc)y=o*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Po=new k,ri=new Ct,ER=new k(0,0,0),wR=new k(1,1,1),sr=new k,Ol=new k,Cn=new k,W0=new Ct,$0=new el;class Zi{constructor(e=0,n=0,i=0,r=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],s=r[4],a=r[8],l=r[1],u=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(pn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-pn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(pn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(pn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-pn(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return W0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(W0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $0.setFromEuler(this),this.setFromQuaternion($0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class Vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TR=0;const X0=new k,Lo=new el,Ii=new Ct,Fl=new k,Zs=new k,AR=new k,CR=new el,j0=new k(1,0,0),Y0=new k(0,1,0),q0=new k(0,0,1),K0={type:"added"},bR={type:"removed"},Do={type:"childadded",child:null},ad={type:"childremoved",child:null};class nn extends Ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TR++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new k,n=new Zi,i=new el,r=new k(1,1,1);function o(){i.setFromEuler(n,!1)}function s(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new We}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.multiply(Lo),this}rotateOnWorldAxis(e,n){return Lo.setFromAxisAngle(e,n),this.quaternion.premultiply(Lo),this}rotateX(e){return this.rotateOnAxis(j0,e)}rotateY(e){return this.rotateOnAxis(Y0,e)}rotateZ(e){return this.rotateOnAxis(q0,e)}translateOnAxis(e,n){return X0.copy(e).applyQuaternion(this.quaternion),this.position.add(X0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(j0,e)}translateY(e){return this.translateOnAxis(Y0,e)}translateZ(e){return this.translateOnAxis(q0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Zs,Fl,this.up):Ii.lookAt(Fl,Zs,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Lo.setFromRotationMatrix(Ii),this.quaternion.premultiply(Lo.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K0),Do.child=e,this.dispatchEvent(Do),Do.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bR),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K0),Do.child=e,this.dispatchEvent(Do),Do.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,AR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,CR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,s=r.length;o<s;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];o(e.shapes,h)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(o(e.materials,this.material[l]));r.material=a}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(o(e.animations,l))}}if(n){const a=s(e.geometries),l=s(e.materials),u=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),y=s(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),y.length>0&&(i.nodes=y)}return i.object=r,i;function s(a){const l=[];for(const u in a){const f=a[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new k(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new k,Ni=new k,ld=new k,Ui=new k,Io=new k,No=new k,Z0=new k,ud=new k,cd=new k,fd=new k;class Ei{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),oi.subVectors(e,n),r.cross(oi);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){oi.subVectors(r,n),Ni.subVectors(i,n),ld.subVectors(e,n);const s=oi.dot(oi),a=oi.dot(Ni),l=oi.dot(ld),u=Ni.dot(Ni),f=Ni.dot(ld),h=s*u-a*a;if(h===0)return o.set(0,0,0),null;const d=1/h,p=(u*l-a*f)*d,y=(s*f-a*l)*d;return o.set(1-p-y,y,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,n,i,r,o,s,a,l){return this.getBarycoord(e,n,i,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ui.x),l.addScaledVector(s,Ui.y),l.addScaledVector(a,Ui.z),l)}static isFrontFacing(e,n,i,r){return oi.subVectors(i,n),Ni.subVectors(e,n),oi.cross(Ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ei.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return Ei.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let s,a;Io.subVectors(r,i),No.subVectors(o,i),ud.subVectors(e,i);const l=Io.dot(ud),u=No.dot(ud);if(l<=0&&u<=0)return n.copy(i);cd.subVectors(e,r);const f=Io.dot(cd),h=No.dot(cd);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*u;if(d<=0&&l>=0&&f<=0)return s=l/(l-f),n.copy(i).addScaledVector(Io,s);fd.subVectors(e,o);const p=Io.dot(fd),y=No.dot(fd);if(y>=0&&p<=y)return n.copy(o);const v=p*u-l*y;if(v<=0&&u>=0&&y<=0)return a=u/(u-y),n.copy(i).addScaledVector(No,a);const m=f*y-p*h;if(m<=0&&h-f>=0&&p-y>=0)return Z0.subVectors(o,r),a=(h-f)/(h-f+(p-y)),n.copy(r).addScaledVector(Z0,a);const c=1/(m+v+d);return s=v*c,a=d*c,n.copy(i).addScaledVector(Io,s).addScaledVector(No,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const xS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},kl={h:0,s:0,l:0};function dd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_i){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=hR(e,1),n=pn(n,0,1),i=pn(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,s=2*i-o;this.r=dd(s,o,e+1/3),this.g=dd(s,o,e),this.b=dd(s,o,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,n=_i){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(s===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_i){const i=xS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=Jf(e.r),this.g=Jf(e.g),this.b=Jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_i){return rt.fromWorkingColorSpace(Jt.copy(this),e),Math.round(pn(Jt.r*255,0,255))*65536+Math.round(pn(Jt.g*255,0,255))*256+Math.round(pn(Jt.b*255,0,255))}getHexString(e=_i){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,o=Jt.b,s=Math.max(i,r,o),a=Math.min(i,r,o);let l,u;const f=(a+s)/2;if(a===s)l=0,u=0;else{const h=s-a;switch(u=f<=.5?h/(s+a):h/(2-s-a),s){case i:l=(r-o)/h+(r<o?6:0);break;case r:l=(o-i)/h+2;break;case o:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=rt.workingColorSpace){return rt.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=_i){rt.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==_i?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(kl);const i=Zf(ar.h,kl.h,n),r=Zf(ar.s,kl.s,n),o=Zf(ar.l,kl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=xS;let RR=0;class of extends Ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RR++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=fs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Uh,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=F0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nh&&(i.blendSrc=this.blendSrc),this.blendDst!==Uh&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ec&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==F0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==To&&(i.stencilFail=this.stencilFail),this.stencilZFail!==To&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==To&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const s=[];for(const a in o){const l=o[a];delete l.metadata,s.push(l)}return s}if(n){const o=r(e.textures),s=r(e.images);o.length>0&&(i.textures=o),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class sc extends of{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=iS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Lt=new k,zl=new Je;class bi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=k0,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ma("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)zl.fromBufferAttribute(this,n),zl.applyMatrix3(e),this.setXY(n,zl.x,zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=dn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=js(n,this.array)),n}setX(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=js(n,this.array)),n}setY(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=js(n,this.array)),n}setW(e,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=dn(n,this.array),i=dn(i,this.array),r=dn(r,this.array),o=dn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k0&&(e.usage=this.usage),e}}class SS extends bi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class MS extends bi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ri extends bi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let PR=0;const Bn=new Ct,hd=new nn,Uo=new k,bn=new tl,Qs=new tl,Bt=new k;class Or extends Ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PR++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gS(e)?MS:SS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,n,i){return Bn.makeTranslation(e,n,i),this.applyMatrix4(Bn),this}scale(e,n,i){return Bn.makeScale(e,n,i),this.applyMatrix4(Bn),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Ri(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];bn.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hm);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),n)for(let o=0,s=n.length;o<s;o++){const a=n[o];Qs.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(bn.min,Qs.min),bn.expandByPoint(Bt),Bt.addVectors(bn.max,Qs.max),bn.expandByPoint(Bt)):(bn.expandByPoint(Qs.min),bn.expandByPoint(Qs.max))}bn.getCenter(i);let r=0;for(let o=0,s=e.count;o<s;o++)Bt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let o=0,s=n.length;o<s;o++){const a=n[o],l=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Bt.fromBufferAttribute(a,u),l&&(Uo.fromBufferAttribute(e,u),Bt.add(Uo)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const u=new k,f=new k,h=new k,d=new Je,p=new Je,y=new Je,v=new k,m=new k;function c(P,T,x){u.fromBufferAttribute(i,P),f.fromBufferAttribute(i,T),h.fromBufferAttribute(i,x),d.fromBufferAttribute(o,P),p.fromBufferAttribute(o,T),y.fromBufferAttribute(o,x),f.sub(u),h.sub(u),p.sub(d),y.sub(d);const R=1/(p.x*y.y-y.x*p.y);isFinite(R)&&(v.copy(f).multiplyScalar(y.y).addScaledVector(h,-p.y).multiplyScalar(R),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(R),a[P].add(v),a[T].add(v),a[x].add(v),l[P].add(m),l[T].add(m),l[x].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,T=g.length;P<T;++P){const x=g[P],R=x.start,z=x.count;for(let O=R,Y=R+z;O<Y;O+=3)c(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const _=new k,S=new k,C=new k,A=new k;function w(P){C.fromBufferAttribute(r,P),A.copy(C);const T=a[P];_.copy(T),_.sub(C.multiplyScalar(C.dot(T))).normalize(),S.crossVectors(A,T);const R=S.dot(l[P])<0?-1:1;s.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,T=g.length;P<T;++P){const x=g[P],R=x.start,z=x.count;for(let O=R,Y=R+z;O<Y;O+=3)w(e.getX(O+0)),w(e.getX(O+1)),w(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,o=new k,s=new k,a=new k,l=new k,u=new k,f=new k,h=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const y=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,y),o.fromBufferAttribute(n,v),s.fromBufferAttribute(n,m),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),a.fromBufferAttribute(i,y),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),a.add(f),l.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),o.fromBufferAttribute(n,d+1),s.fromBufferAttribute(n,d+2),f.subVectors(s,o),h.subVectors(r,o),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const u=a.array,f=a.itemSize,h=a.normalized,d=new u.constructor(l.length*f);let p=0,y=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*f;for(let c=0;c<f;c++)d[y++]=u[p++]}return new bi(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Or,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const o=this.morphAttributes;for(const a in o){const l=[],u=o[a];for(let f=0,h=u.length;f<h;f++){const d=u[f],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const u=s[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const o=e.morphAttributes;for(const u in o){const f=[],h=o[u];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,f=s.length;u<f;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Q0=new Ct,zr=new yS,Bl=new Hm,J0=new k,Oo=new k,Fo=new k,ko=new k,pd=new k,Hl=new k,Vl=new Je,Gl=new Je,Wl=new Je,ev=new k,tv=new k,nv=new k,$l=new k,Xl=new k;class fi extends nn{constructor(e=new Or,n=new sc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=r.length;o<s;o++){const a=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,s=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(o&&a){Hl.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const f=a[l],h=o[l];f!==0&&(pd.fromBufferAttribute(h,e),s?Hl.addScaledVector(pd,f):Hl.addScaledVector(pd.sub(n),f))}n.add(Hl)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(o),zr.copy(e.ray).recast(e.near),!(Bl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Bl,J0)===null||zr.origin.distanceToSquared(J0)>(e.far-e.near)**2))&&(Q0.copy(o).invert(),zr.copy(e.ray).applyMatrix4(Q0),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const o=this.geometry,s=this.material,a=o.index,l=o.attributes.position,u=o.attributes.uv,f=o.attributes.uv1,h=o.attributes.normal,d=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(s))for(let y=0,v=d.length;y<v;y++){const m=d[y],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=_;S<C;S+=3){const A=a.getX(S),w=a.getX(S+1),P=a.getX(S+2);r=jl(this,c,e,i,u,f,h,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=y,c=v;m<c;m+=3){const g=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=jl(this,s,e,i,u,f,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,v=d.length;y<v;y++){const m=d[y],c=s[m.materialIndex],g=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=g,C=_;S<C;S+=3){const A=S,w=S+1,P=S+2;r=jl(this,c,e,i,u,f,h,A,w,P),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=y,c=v;m<c;m+=3){const g=m,_=m+1,S=m+2;r=jl(this,s,e,i,u,f,h,g,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function LR(t,e,n,i,r,o,s,a){let l;if(e.side===yn?l=i.intersectTriangle(s,o,r,!0,a):l=i.intersectTriangle(r,o,s,e.side===br,a),l===null)return null;Xl.copy(a),Xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Xl);return u<n.near||u>n.far?null:{distance:u,point:Xl.clone(),object:t}}function jl(t,e,n,i,r,o,s,a,l,u){t.getVertexPosition(a,Oo),t.getVertexPosition(l,Fo),t.getVertexPosition(u,ko);const f=LR(t,e,n,i,Oo,Fo,ko,$l);if(f){r&&(Vl.fromBufferAttribute(r,a),Gl.fromBufferAttribute(r,l),Wl.fromBufferAttribute(r,u),f.uv=Ei.getInterpolation($l,Oo,Fo,ko,Vl,Gl,Wl,new Je)),o&&(Vl.fromBufferAttribute(o,a),Gl.fromBufferAttribute(o,l),Wl.fromBufferAttribute(o,u),f.uv1=Ei.getInterpolation($l,Oo,Fo,ko,Vl,Gl,Wl,new Je)),s&&(ev.fromBufferAttribute(s,a),tv.fromBufferAttribute(s,l),nv.fromBufferAttribute(s,u),f.normal=Ei.getInterpolation($l,Oo,Fo,ko,ev,tv,nv,new k),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new k,materialIndex:0};Ei.getNormal(Oo,Fo,ko,h.normal),f.face=h}return f}class nl extends Or{constructor(e=1,n=1,i=1,r=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:s};const a=this;r=Math.floor(r),o=Math.floor(o),s=Math.floor(s);const l=[],u=[],f=[],h=[];let d=0,p=0;y("z","y","x",-1,-1,i,n,e,s,o,0),y("z","y","x",1,-1,i,n,-e,s,o,1),y("x","z","y",1,1,e,i,n,r,s,2),y("x","z","y",1,-1,e,i,-n,r,s,3),y("x","y","z",1,-1,e,n,i,r,o,4),y("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Ri(u,3)),this.setAttribute("normal",new Ri(f,3)),this.setAttribute("uv",new Ri(h,2));function y(v,m,c,g,_,S,C,A,w,P,T){const x=S/w,R=C/P,z=S/2,O=C/2,Y=A/2,$=w+1,X=P+1;let j=0,D=0;const K=new k;for(let J=0;J<X;J++){const ae=J*R-O;for(let Te=0;Te<$;Te++){const He=Te*x-z;K[v]=He*g,K[m]=ae*_,K[c]=Y,u.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[c]=A>0?1:-1,f.push(K.x,K.y,K.z),h.push(Te/w),h.push(1-J/P),j+=1}}for(let J=0;J<P;J++)for(let ae=0;ae<w;ae++){const Te=d+ae+$*J,He=d+ae+$*(J+1),W=d+(ae+1)+$*(J+1),ie=d+(ae+1)+$*J;l.push(Te,He,ie),l.push(He,W,ie),D+=6}a.addGroup(p,D,T),p+=D,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function DR(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function ES(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const IR={clone:As,merge:on};var NR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends of{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NR,this.fragmentShader=UR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=DR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?n.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?n.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?n.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?n.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?n.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?n.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?n.uniforms[r]={type:"m4",value:s.toArray()}:n.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wS extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new k,iv=new Je,rv=new Je;class Pn extends wS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Kf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Kf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,n){return this.getViewBounds(e,iv,rv),n.subVectors(rv,iv)}setViewOffset(e,n,i,r,o,s){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Kf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;o+=s.offsetX*r/l,n-=s.offsetY*i/u,r*=s.width/l,i*=s.height/u}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const zo=-90,Bo=1;class OR extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Pn(zo,Bo,e,n);r.layers=this.layers,this.add(r);const o=new Pn(zo,Bo,e,n);o.layers=this.layers,this.add(o);const s=new Pn(zo,Bo,e,n);s.layers=this.layers,this.add(s);const a=new Pn(zo,Bo,e,n);a.layers=this.layers,this.add(a);const l=new Pn(zo,Bo,e,n);l.layers=this.layers,this.add(l);const u=new Pn(zo,Bo,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,s,a,l]=n;for(const u of n)this.remove(u);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,a,l,u,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,s),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,p),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class TS extends xn{constructor(e,n,i,r,o,s,a,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Ms,super(e,n,i,r,o,s,a,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class FR extends uo{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new TS(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ui}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new nl(5,5,5),o=new Rr({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:yn,blending:wr});o.uniforms.tEquirect.value=n;const s=new fi(r,o),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=ui),new OR(1,10,this).update(e,s),n.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(n,i,r);e.setRenderTarget(o)}}const md=new k,kR=new k,zR=new We;class $r{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=md.subVectors(i,n).cross(kR.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(md),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||zR.getNormalMatrix(e),r=this.coplanarPoint(md).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Br=new Hm,Yl=new k;class AS{constructor(e=new $r,n=new $r,i=new $r,r=new $r,o=new $r,s=new $r){this.planes=[e,n,i,r,o,s]}set(e,n,i,r,o,s){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(o),a[5].copy(s),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Wi){const i=this.planes,r=e.elements,o=r[0],s=r[1],a=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],p=r[8],y=r[9],v=r[10],m=r[11],c=r[12],g=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-o,d-u,m-p,S-c).normalize(),i[1].setComponents(l+o,d+u,m+p,S+c).normalize(),i[2].setComponents(l+s,d+f,m+y,S+g).normalize(),i[3].setComponents(l-s,d-f,m-y,S-g).normalize(),i[4].setComponents(l-a,d-h,m-v,S-_).normalize(),n===Wi)i[5].setComponents(l+a,d+h,m+v,S+_).normalize();else if(n===rc)i[5].setComponents(a,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Br.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Br)}intersectsSprite(e){return Br.center.set(0,0,0),Br.radius=.7071067811865476,Br.applyMatrix4(e.matrixWorld),this.intersectsSphere(Br)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Yl.x=r.normal.x>0?e.max.x:e.min.x,Yl.y=r.normal.y>0?e.max.y:e.min.y,Yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function CS(){let t=null,e=!1,n=null,i=null;function r(o,s){n(o,s),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function BR(t){const e=new WeakMap;function n(a,l){const u=a.array,f=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,f),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const f=l.array,h=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),h.count===-1&&d.length===0&&t.bufferSubData(u,0,f),d.length!==0){for(let p=0,y=d.length;p<y;p++){const v=d[p];t.bufferSubData(u,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(t.bufferSubData(u,h.offset*f.BYTES_PER_ELEMENT,f,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:o,update:s}}class sf extends Or{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,s=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,f=l+1,h=e/a,d=n/l,p=[],y=[],v=[],m=[];for(let c=0;c<f;c++){const g=c*d-s;for(let _=0;_<u;_++){const S=_*h-o;y.push(S,-g,0),v.push(0,0,1),m.push(_/a),m.push(1-c/l)}}for(let c=0;c<l;c++)for(let g=0;g<a;g++){const _=g+u*c,S=g+u*(c+1),C=g+1+u*(c+1),A=g+1+u*c;p.push(_,S,A),p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Ri(y,3)),this.setAttribute("normal",new Ri(v,3)),this.setAttribute("uv",new Ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.width,e.height,e.widthSegments,e.heightSegments)}}var HR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$R=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,XR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,KR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,QR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,JR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,eP=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,tP=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,iP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,aP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,lP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,uP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,cP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,dP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,hP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vP="gl_FragColor = linearToOutputTexel( gl_FragColor );",_P=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,xP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,SP=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,RP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,OP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zP=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,HP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,VP=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GP=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WP=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$P=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XP=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ZP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,e2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,t2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,i2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,a2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,d2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,h2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,p2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,m2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,g2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,y2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,M2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,E2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,w2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,T2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,A2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,R2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,P2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,U2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,z2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const B2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,H2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Y2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,q2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Z2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eL=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tL=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nL=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,iL=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rL=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oL=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sL=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aL=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lL=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uL=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cL=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fL=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dL=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hL=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pL=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gL=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vL=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_L=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yL=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:HR,alphahash_pars_fragment:VR,alphamap_fragment:GR,alphamap_pars_fragment:WR,alphatest_fragment:$R,alphatest_pars_fragment:XR,aomap_fragment:jR,aomap_pars_fragment:YR,batching_pars_vertex:qR,batching_vertex:KR,begin_vertex:ZR,beginnormal_vertex:QR,bsdfs:JR,iridescence_fragment:eP,bumpmap_pars_fragment:tP,clipping_planes_fragment:nP,clipping_planes_pars_fragment:iP,clipping_planes_pars_vertex:rP,clipping_planes_vertex:oP,color_fragment:sP,color_pars_fragment:aP,color_pars_vertex:lP,color_vertex:uP,common:cP,cube_uv_reflection_fragment:fP,defaultnormal_vertex:dP,displacementmap_pars_vertex:hP,displacementmap_vertex:pP,emissivemap_fragment:mP,emissivemap_pars_fragment:gP,colorspace_fragment:vP,colorspace_pars_fragment:_P,envmap_fragment:yP,envmap_common_pars_fragment:xP,envmap_pars_fragment:SP,envmap_pars_vertex:MP,envmap_physical_pars_fragment:IP,envmap_vertex:EP,fog_vertex:wP,fog_pars_vertex:TP,fog_fragment:AP,fog_pars_fragment:CP,gradientmap_pars_fragment:bP,lightmap_pars_fragment:RP,lights_lambert_fragment:PP,lights_lambert_pars_fragment:LP,lights_pars_begin:DP,lights_toon_fragment:NP,lights_toon_pars_fragment:UP,lights_phong_fragment:OP,lights_phong_pars_fragment:FP,lights_physical_fragment:kP,lights_physical_pars_fragment:zP,lights_fragment_begin:BP,lights_fragment_maps:HP,lights_fragment_end:VP,logdepthbuf_fragment:GP,logdepthbuf_pars_fragment:WP,logdepthbuf_pars_vertex:$P,logdepthbuf_vertex:XP,map_fragment:jP,map_pars_fragment:YP,map_particle_fragment:qP,map_particle_pars_fragment:KP,metalnessmap_fragment:ZP,metalnessmap_pars_fragment:QP,morphinstance_vertex:JP,morphcolor_vertex:e2,morphnormal_vertex:t2,morphtarget_pars_vertex:n2,morphtarget_vertex:i2,normal_fragment_begin:r2,normal_fragment_maps:o2,normal_pars_fragment:s2,normal_pars_vertex:a2,normal_vertex:l2,normalmap_pars_fragment:u2,clearcoat_normal_fragment_begin:c2,clearcoat_normal_fragment_maps:f2,clearcoat_pars_fragment:d2,iridescence_pars_fragment:h2,opaque_fragment:p2,packing:m2,premultiplied_alpha_fragment:g2,project_vertex:v2,dithering_fragment:_2,dithering_pars_fragment:y2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:S2,shadowmap_pars_fragment:M2,shadowmap_pars_vertex:E2,shadowmap_vertex:w2,shadowmask_pars_fragment:T2,skinbase_vertex:A2,skinning_pars_vertex:C2,skinning_vertex:b2,skinnormal_vertex:R2,specularmap_fragment:P2,specularmap_pars_fragment:L2,tonemapping_fragment:D2,tonemapping_pars_fragment:I2,transmission_fragment:N2,transmission_pars_fragment:U2,uv_pars_fragment:O2,uv_pars_vertex:F2,uv_vertex:k2,worldpos_vertex:z2,background_vert:B2,background_frag:H2,backgroundCube_vert:V2,backgroundCube_frag:G2,cube_vert:W2,cube_frag:$2,depth_vert:X2,depth_frag:j2,distanceRGBA_vert:Y2,distanceRGBA_frag:q2,equirect_vert:K2,equirect_frag:Z2,linedashed_vert:Q2,linedashed_frag:J2,meshbasic_vert:eL,meshbasic_frag:tL,meshlambert_vert:nL,meshlambert_frag:iL,meshmatcap_vert:rL,meshmatcap_frag:oL,meshnormal_vert:sL,meshnormal_frag:aL,meshphong_vert:lL,meshphong_frag:uL,meshphysical_vert:cL,meshphysical_frag:fL,meshtoon_vert:dL,meshtoon_frag:hL,points_vert:pL,points_frag:mL,shadow_vert:gL,shadow_frag:vL,sprite_vert:_L,sprite_frag:yL},me={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Si={basic:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:on([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:on([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:on([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:on([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:on([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:on([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:on([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:on([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:on([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:on([me.lights,me.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Si.physical={uniforms:on([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const ql={r:0,b:0,g:0},Hr=new Zi,xL=new Ct;function SL(t,e,n,i,r,o,s){const a=new Ke(0);let l=o===!0?0:1,u,f,h=null,d=0,p=null;function y(g){let _=g.isScene===!0?g.background:null;return _&&_.isTexture&&(_=(g.backgroundBlurriness>0?n:e).get(_)),_}function v(g){let _=!1;const S=y(g);S===null?c(a,l):S&&S.isColor&&(c(S,1),_=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,_){const S=y(_);S&&(S.isCubeTexture||S.mapping===nf)?(f===void 0&&(f=new fi(new nl(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:As(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Hr.copy(_.backgroundRotation),Hr.x*=-1,Hr.y*=-1,Hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Hr.y*=-1,Hr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(xL.makeRotationFromEuler(Hr)),f.material.toneMapped=rt.getTransfer(S.colorSpace)!==dt,(h!==S||d!==S.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(u===void 0&&(u=new fi(new sf(2,2),new Rr({name:"BackgroundMaterial",uniforms:As(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=S,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=rt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),u.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function c(g,_){g.getRGB(ql,ES(t)),i.buffers.color.setClear(ql.r,ql.g,ql.b,_,s)}return{getClearColor:function(){return a},setClearColor:function(g,_=1){a.set(g),l=_,c(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,c(a,l)},render:v,addToRenderList:m}}function ML(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let o=r,s=!1;function a(x,R,z,O,Y){let $=!1;const X=h(O,z,R);o!==X&&(o=X,u(o.object)),$=p(x,O,z,Y),$&&y(x,O,z,Y),Y!==null&&e.update(Y,t.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,S(x,R,z,O),Y!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(Y).buffer))}function l(){return t.createVertexArray()}function u(x){return t.bindVertexArray(x)}function f(x){return t.deleteVertexArray(x)}function h(x,R,z){const O=z.wireframe===!0;let Y=i[x.id];Y===void 0&&(Y={},i[x.id]=Y);let $=Y[R.id];$===void 0&&($={},Y[R.id]=$);let X=$[O];return X===void 0&&(X=d(l()),$[O]=X),X}function d(x){const R=[],z=[],O=[];for(let Y=0;Y<n;Y++)R[Y]=0,z[Y]=0,O[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:O,object:x,attributes:{},index:null}}function p(x,R,z,O){const Y=o.attributes,$=R.attributes;let X=0;const j=z.getAttributes();for(const D in j)if(j[D].location>=0){const J=Y[D];let ae=$[D];if(ae===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;X++}return o.attributesNum!==X||o.index!==O}function y(x,R,z,O){const Y={},$=R.attributes;let X=0;const j=z.getAttributes();for(const D in j)if(j[D].location>=0){let J=$[D];J===void 0&&(D==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),D==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),Y[D]=ae,X++}o.attributes=Y,o.attributesNum=X,o.index=O}function v(){const x=o.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function m(x){c(x,0)}function c(x,R){const z=o.newAttributes,O=o.enabledAttributes,Y=o.attributeDivisors;z[x]=1,O[x]===0&&(t.enableVertexAttribArray(x),O[x]=1),Y[x]!==R&&(t.vertexAttribDivisor(x,R),Y[x]=R)}function g(){const x=o.newAttributes,R=o.enabledAttributes;for(let z=0,O=R.length;z<O;z++)R[z]!==x[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function _(x,R,z,O,Y,$,X){X===!0?t.vertexAttribIPointer(x,R,z,Y,$):t.vertexAttribPointer(x,R,z,O,Y,$)}function S(x,R,z,O){v();const Y=O.attributes,$=z.getAttributes(),X=R.defaultAttributeValues;for(const j in $){const D=$[j];if(D.location>=0){let K=Y[j];if(K===void 0&&(j==="instanceMatrix"&&x.instanceMatrix&&(K=x.instanceMatrix),j==="instanceColor"&&x.instanceColor&&(K=x.instanceColor)),K!==void 0){const J=K.normalized,ae=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const He=Te.buffer,W=Te.type,ie=Te.bytesPerElement,ge=W===t.INT||W===t.UNSIGNED_INT||K.gpuType===Nm;if(K.isInterleavedBufferAttribute){const he=K.data,Ue=he.stride,Be=K.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<D.locationSize;Ve++)c(D.location+Ve,he.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<D.locationSize;Ve++)m(D.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ve=0;Ve<D.locationSize;Ve++)_(D.location+Ve,ae/D.locationSize,W,J,Ue*ie,(Be+ae/D.locationSize*Ve)*ie,ge)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<D.locationSize;he++)c(D.location+he,K.meshPerAttribute);x.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<D.locationSize;he++)m(D.location+he);t.bindBuffer(t.ARRAY_BUFFER,He);for(let he=0;he<D.locationSize;he++)_(D.location+he,ae/D.locationSize,W,J,ae*ie,ae/D.locationSize*he*ie,ge)}}else if(X!==void 0){const J=X[j];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(D.location,J);break;case 3:t.vertexAttrib3fv(D.location,J);break;case 4:t.vertexAttrib4fv(D.location,J);break;default:t.vertexAttrib1fv(D.location,J)}}}}g()}function C(){P();for(const x in i){const R=i[x];for(const z in R){const O=R[z];for(const Y in O)f(O[Y].object),delete O[Y];delete R[z]}delete i[x]}}function A(x){if(i[x.id]===void 0)return;const R=i[x.id];for(const z in R){const O=R[z];for(const Y in O)f(O[Y].object),delete O[Y];delete R[z]}delete i[x.id]}function w(x){for(const R in i){const z=i[R];if(z[x.id]===void 0)continue;const O=z[x.id];for(const Y in O)f(O[Y].object),delete O[Y];delete z[x.id]}}function P(){T(),s=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:g}}function EL(t,e,n){let i;function r(u){i=u}function o(u,f){t.drawArrays(i,u,f),n.update(f,i,1)}function s(u,f,h){h!==0&&(t.drawArraysInstanced(i,u,f,h),n.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let p=0;for(let y=0;y<h;y++)p+=f[y];n.update(p,i,1)}function l(u,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<u.length;y++)s(u[y],f[y],d[y]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,f,0,d,0,h);let y=0;for(let v=0;v<h;v++)y+=f[v];for(let v=0;v<d.length;v++)n.update(y,i,d[v])}}this.setMode=r,this.render=o,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function wL(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(A){return!(A!==ci&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const w=A===Qa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ki&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Gi&&!w)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),c=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),g=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),S=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:c,maxVaryings:g,maxFragmentUniforms:_,vertexTextures:S,maxSamples:C}}function TL(t){const e=this;let n=null,i=0,r=!1,o=!1;const s=new $r,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,p){const y=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,c=t.get(h);if(!r||y===null||y.length===0||o&&!m)o?f(null):u();else{const g=o?0:i,_=g*4;let S=c.clippingState||null;l.value=S,S=f(y,d,_,p);for(let C=0;C!==_;++C)S[C]=n[C];c.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,p,y){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,y!==!0||m===null){const c=p+v*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<c)&&(m=new Float32Array(c));for(let _=0,S=p;_!==v;++_,S+=4)s.copy(h[_]).applyMatrix4(g,a),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function AL(t){let e=new WeakMap;function n(s,a){return a===Oh?s.mapping=Ms:a===Fh&&(s.mapping=Es),s}function i(s){if(s&&s.isTexture){const a=s.mapping;if(a===Oh||a===Fh)if(e.has(s)){const l=e.get(s).texture;return n(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new FR(l.height);return u.fromEquirectangularTexture(t,s),e.set(s,u),s.addEventListener("dispose",r),n(u.texture,s.mapping)}else return null}}return s}function r(s){const a=s.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class CL extends wS{constructor(e=-1,n=1,i=1,r=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,s=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,s=o+u*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=4,ov=[.125,.215,.35,.446,.526,.582],Yr=20,gd=new CL,sv=new Ke;let vd=null,_d=0,yd=0,xd=!1;const Xr=(1+Math.sqrt(5))/2,Ho=1/Xr,av=[new k(-Xr,Ho,0),new k(Xr,Ho,0),new k(-Ho,0,Xr),new k(Ho,0,Xr),new k(0,Xr,-Ho),new k(0,Xr,Ho),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class lv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vd,_d,yd),this._renderer.xr.enabled=xd,e.scissorTest=!1,Kl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vd=this._renderer.getRenderTarget(),_d=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ui,minFilter:ui,generateMipmaps:!1,type:Qa,format:ci,colorSpace:Ur,depthBuffer:!1},r=uv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bL(o)),this._blurMaterial=RL(o,e,n)}return r}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,gd)}_sceneToCubeUV(e,n,i,r){const a=new Pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(sv),f.toneMapping=Tr,f.autoClear=!1;const p=new sc({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),y=new fi(new nl,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(sv),v=!0);for(let c=0;c<6;c++){const g=c%3;g===0?(a.up.set(0,l[c],0),a.lookAt(u[c],0,0)):g===1?(a.up.set(0,0,l[c]),a.lookAt(0,u[c],0)):(a.up.set(0,l[c],0),a.lookAt(0,0,u[c]));const _=this._cubeSize;Kl(r,g*_,c>2?_:0,_,_),f.setRenderTarget(r),v&&f.render(y,a),f.render(e,a)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ms||e.mapping===Es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cv());const o=r?this._cubemapMaterial:this._equirectMaterial,s=new fi(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Kl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(s,gd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=av[(r-o-1)%av.length];this._blur(e,o-1,o,s,a)}n.autoClear=i}_blur(e,n,i,r,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,n,i,r,"latitudinal",o),this._halfBlur(s,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,s,a){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new fi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,y=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Yr-1),v=o/y,m=isFinite(o)?1+Math.floor(f*v):Yr;m>Yr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const c=[];let g=0;for(let w=0;w<Yr;++w){const P=w/v,T=Math.exp(-P*P/2);c.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<c.length;w++)c[w]=c[w]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=c,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=y,d.mipInt.value=_-i;const S=this._sizeLods[r],C=3*S*(r>_-ts?r-_+ts:0),A=4*(this._cubeSize-S);Kl(n,C,A,3*S,2*S),l.setRenderTarget(n),l.render(h,gd)}}function bL(t){const e=[],n=[],i=[];let r=t;const o=t-ts+1+ov.length;for(let s=0;s<o;s++){const a=Math.pow(2,r);n.push(a);let l=1/a;s>t-ts?l=ov[s-t+ts-1]:s===0&&(l=0),i.push(l);const u=1/(a-2),f=-u,h=1+u,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,y=6,v=3,m=2,c=1,g=new Float32Array(v*y*p),_=new Float32Array(m*y*p),S=new Float32Array(c*y*p);for(let A=0;A<p;A++){const w=A%3*2/3-1,P=A>2?0:-1,T=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];g.set(T,v*y*A),_.set(d,m*y*A);const x=[A,A,A,A,A,A];S.set(x,c*y*A)}const C=new Or;C.setAttribute("position",new bi(g,v)),C.setAttribute("uv",new bi(_,m)),C.setAttribute("faceIndex",new bi(S,c)),e.push(C),r>ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function uv(t,e,n){const i=new uo(t,e,n);return i.texture.mapping=nf,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Kl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function RL(t,e,n){const i=new Float32Array(Yr),r=new k(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function cv(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function fv(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wr,depthTest:!1,depthWrite:!1})}function Gm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PL(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Oh||l===Fh,f=l===Ms||l===Es;if(u||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new lv(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new lv(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",o),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&l++;return l===u}function o(a){const l=a.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:s}}function LL(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ma("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DL(t,e,n,i){const r={},o=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const y in d.attributes)e.remove(d.attributes[y]);for(const y in d.morphAttributes){const v=d.morphAttributes[y];for(let m=0,c=v.length;m<c;m++)e.remove(v[m])}d.removeEventListener("dispose",s),delete r[d.id];const p=o.get(d);p&&(e.remove(p),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const y in d)e.update(d[y],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const y in p){const v=p[y];for(let m=0,c=v.length;m<c;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,y=h.attributes.position;let v=0;if(p!==null){const g=p.array;v=p.version;for(let _=0,S=g.length;_<S;_+=3){const C=g[_+0],A=g[_+1],w=g[_+2];d.push(C,A,A,w,w,C)}}else if(y!==void 0){const g=y.array;v=y.version;for(let _=0,S=g.length/3-1;_<S;_+=3){const C=_+0,A=_+1,w=_+2;d.push(C,A,A,w,w,C)}}else return;const m=new(gS(d)?MS:SS)(d,1);m.version=v;const c=o.get(h);c&&e.remove(c),o.set(h,m)}function f(h){const d=o.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return o.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function IL(t,e,n){let i;function r(d){i=d}let o,s;function a(d){o=d.type,s=d.bytesPerElement}function l(d,p){t.drawElements(i,p,o,d*s),n.update(p,i,1)}function u(d,p,y){y!==0&&(t.drawElementsInstanced(i,p,o,d*s,y),n.update(p,i,y))}function f(d,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,d,0,y);let m=0;for(let c=0;c<y;c++)m+=p[c];n.update(m,i,1)}function h(d,p,y,v){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let c=0;c<d.length;c++)u(d[c]/s,p[c],v[c]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,d,0,v,0,y);let c=0;for(let g=0;g<y;g++)c+=p[g];for(let g=0;g<v.length;g++)n.update(c,i,v[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function NL(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,s,a){switch(n.calls++,s){case t.TRIANGLES:n.triangles+=a*(o/3);break;case t.LINES:n.lines+=a*(o/2);break;case t.LINE_STRIP:n.lines+=a*(o-1);break;case t.LINE_LOOP:n.lines+=a*o;break;case t.POINTS:n.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function UL(t,e,n){const i=new WeakMap,r=new Vt;function o(s,a,l){const u=s.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let x=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;d!==void 0&&d.texture.dispose();const y=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,c=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let S=0;y===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let C=a.attributes.position.count*S,A=1;C>e.maxTextureSize&&(A=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const w=new Float32Array(C*A*4*h),P=new _S(w,C,A,h);P.type=Gi,P.needsUpdate=!0;const T=S*4;for(let R=0;R<h;R++){const z=c[R],O=g[R],Y=_[R],$=C*A*4*R;for(let X=0;X<z.count;X++){const j=X*T;y===!0&&(r.fromBufferAttribute(z,X),w[$+j+0]=r.x,w[$+j+1]=r.y,w[$+j+2]=r.z,w[$+j+3]=0),v===!0&&(r.fromBufferAttribute(O,X),w[$+j+4]=r.x,w[$+j+5]=r.y,w[$+j+6]=r.z,w[$+j+7]=0),m===!0&&(r.fromBufferAttribute(Y,X),w[$+j+8]=r.x,w[$+j+9]=r.y,w[$+j+10]=r.z,w[$+j+11]=Y.itemSize===4?r.w:1)}}d={count:h,texture:P,size:new Je(C,A)},i.set(a,d),a.addEventListener("dispose",x)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",s.morphTexture,n);else{let y=0;for(let m=0;m<u.length;m++)y+=u[m];const v=a.morphTargetsRelative?1:1-y;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:o}}function OL(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function s(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:s}}class bS extends xn{constructor(e,n,i,r,o,s,a,l,u,f=ds){if(f!==ds&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===ds&&(i=lo),i===void 0&&f===Ts&&(i=ws),super(null,r,o,s,a,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:jn,this.minFilter=l!==void 0?l:jn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const RS=new xn,dv=new bS(1,1),PS=new _S,LS=new SR,DS=new TS,hv=[],pv=[],mv=new Float32Array(16),gv=new Float32Array(9),vv=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=hv[r];if(o===void 0&&(o=new Float32Array(r),hv[r]=o),e!==0){i.toArray(o,0);for(let s=1,a=0;s!==e;++s)a+=n,t[s].toArray(o,a)}return o}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function af(t,e){let n=pv[e];n===void 0&&(n=new Int32Array(e),pv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function FL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function zL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function BL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function HL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;vv.set(i),t.uniformMatrix2fv(this.addr,!1,vv),zt(n,i)}}function VL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;gv.set(i),t.uniformMatrix3fv(this.addr,!1,gv),zt(n,i)}}function GL(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;mv.set(i),t.uniformMatrix4fv(this.addr,!1,mv),zt(n,i)}}function WL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function $L(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function XL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function jL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function YL(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function KL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function ZL(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function QL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(dv.compareFunction=mS,o=dv):o=RS,n.setTexture2D(e||o,r)}function JL(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||LS,r)}function e3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||DS,r)}function t3(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||PS,r)}function n3(t){switch(t){case 5126:return FL;case 35664:return kL;case 35665:return zL;case 35666:return BL;case 35674:return HL;case 35675:return VL;case 35676:return GL;case 5124:case 35670:return WL;case 35667:case 35671:return $L;case 35668:case 35672:return XL;case 35669:case 35673:return jL;case 5125:return YL;case 36294:return qL;case 36295:return KL;case 36296:return ZL;case 35678:case 36198:case 36298:case 36306:case 35682:return QL;case 35679:case 36299:case 36307:return JL;case 35680:case 36300:case 36308:case 36293:return e3;case 36289:case 36303:case 36311:case 36292:return t3}}function i3(t,e){t.uniform1fv(this.addr,e)}function r3(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function o3(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function s3(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function a3(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function l3(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function u3(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function c3(t,e){t.uniform1iv(this.addr,e)}function f3(t,e){t.uniform2iv(this.addr,e)}function d3(t,e){t.uniform3iv(this.addr,e)}function h3(t,e){t.uniform4iv(this.addr,e)}function p3(t,e){t.uniform1uiv(this.addr,e)}function m3(t,e){t.uniform2uiv(this.addr,e)}function g3(t,e){t.uniform3uiv(this.addr,e)}function v3(t,e){t.uniform4uiv(this.addr,e)}function _3(t,e,n){const i=this.cache,r=e.length,o=af(n,r);kt(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let s=0;s!==r;++s)n.setTexture2D(e[s]||RS,o[s])}function y3(t,e,n){const i=this.cache,r=e.length,o=af(n,r);kt(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let s=0;s!==r;++s)n.setTexture3D(e[s]||LS,o[s])}function x3(t,e,n){const i=this.cache,r=e.length,o=af(n,r);kt(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let s=0;s!==r;++s)n.setTextureCube(e[s]||DS,o[s])}function S3(t,e,n){const i=this.cache,r=e.length,o=af(n,r);kt(i,o)||(t.uniform1iv(this.addr,o),zt(i,o));for(let s=0;s!==r;++s)n.setTexture2DArray(e[s]||PS,o[s])}function M3(t){switch(t){case 5126:return i3;case 35664:return r3;case 35665:return o3;case 35666:return s3;case 35674:return a3;case 35675:return l3;case 35676:return u3;case 5124:case 35670:return c3;case 35667:case 35671:return f3;case 35668:case 35672:return d3;case 35669:case 35673:return h3;case 5125:return p3;case 36294:return m3;case 36295:return g3;case 36296:return v3;case 35678:case 36198:case 36298:case 36306:case 35682:return _3;case 35679:case 36299:case 36307:return y3;case 35680:case 36300:case 36308:case 36293:return x3;case 36289:case 36303:case 36311:case 36292:return S3}}class E3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=n3(n.type)}}class w3{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=M3(n.type)}}class T3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,s=r.length;o!==s;++o){const a=r[o];a.setValue(e,n[a.id],i)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function _v(t,e){t.seq.push(e),t.map[e.id]=e}function A3(t,e,n){const i=t.name,r=i.length;for(Sd.lastIndex=0;;){const o=Sd.exec(i),s=Sd.lastIndex;let a=o[1];const l=o[2]==="]",u=o[3];if(l&&(a=a|0),u===void 0||u==="["&&s+2===r){_v(n,u===void 0?new E3(a,t,e):new w3(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new T3(a),_v(n,h)),n=h}}}class wu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),s=e.getUniformLocation(n,o.name);A3(o,s,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,s=n.length;o!==s;++o){const a=n[o],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const s=e[r];s.id in n&&i.push(s)}return i}}function yv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const C3=37297;let b3=0;function R3(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let s=r;s<o;s++){const a=s+1;i.push(`${a===e?">":" "} ${a}: ${n[s]}`)}return i.join(`
`)}function P3(t){const e=rt.getPrimaries(rt.workingColorSpace),n=rt.getPrimaries(t);let i;switch(e===n?i="":e===ic&&n===nc?i="LinearDisplayP3ToLinearSRGB":e===nc&&n===ic&&(i="LinearSRGBToLinearDisplayP3"),t){case Ur:case rf:return[i,"LinearTransferOETF"];case _i:case Bm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function xv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const s=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+R3(t.getShaderSource(e),s)}else return r}function L3(t,e){const n=P3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function D3(t,e){let n;switch(e){case Yb:n="Linear";break;case qb:n="Reinhard";break;case Kb:n="OptimizedCineon";break;case Zb:n="ACESFilmic";break;case Jb:n="AgX";break;case eR:n="Neutral";break;case Qb:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Zl=new k;function I3(){rt.getLuminanceCoefficients(Zl);const t=Zl.x.toFixed(4),e=Zl.y.toFixed(4),n=Zl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function U3(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function O3(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),s=o.name;let a=1;o.type===t.FLOAT_MAT2&&(a=2),o.type===t.FLOAT_MAT3&&(a=3),o.type===t.FLOAT_MAT4&&(a=4),n[s]={type:o.type,location:t.getAttribLocation(e,s),locationSize:a}}return n}function ia(t){return t!==""}function Sv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const F3=/^[ \t]*#include +<([\w\d./]+)>/gm;function hp(t){return t.replace(F3,z3)}const k3=new Map;function z3(t,e){let n=Ge[e];if(n===void 0){const i=k3.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return hp(n)}const B3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ev(t){return t.replace(B3,H3)}function H3(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function wv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function V3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===tS?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===nS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function G3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case nf:e="ENVMAP_TYPE_CUBE_UV";break}return e}function W3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function $3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case iS:e="ENVMAP_BLENDING_MULTIPLY";break;case Xb:e="ENVMAP_BLENDING_MIX";break;case jb:e="ENVMAP_BLENDING_ADD";break}return e}function X3(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function j3(t,e,n,i){const r=t.getContext(),o=n.defines;let s=n.vertexShader,a=n.fragmentShader;const l=V3(n),u=G3(n),f=W3(n),h=$3(n),d=X3(n),p=N3(n),y=U3(o),v=r.createProgram();let m,c,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ia).join(`
`),m.length>0&&(m+=`
`),c=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(ia).join(`
`),c.length>0&&(c+=`
`)):(m=[wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),c=[wv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Tr?"#define TONE_MAPPING":"",n.toneMapping!==Tr?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Tr?D3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,L3("linearToOutputTexel",n.outputColorSpace),I3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),s=hp(s),s=Sv(s,n),s=Mv(s,n),a=hp(a),a=Sv(a,n),a=Mv(a,n),s=Ev(s),a=Ev(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,c=["#define varying in",n.glslVersion===z0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===z0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+c);const _=g+m+s,S=g+c+a,C=yv(r,r.VERTEX_SHADER,_),A=yv(r,r.FRAGMENT_SHADER,S);r.attachShader(v,C),r.attachShader(v,A),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(C).trim(),Y=r.getShaderInfoLog(A).trim();let $=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,A);else{const j=xv(r,C,"vertex"),D=xv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+j+`
`+D)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||Y==="")&&(X=!1);X&&(R.diagnostics={runnable:$,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:Y,prefix:c}})}r.deleteShader(C),r.deleteShader(A),P=new wu(r,v),T=O3(r,v)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(v,C3)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=b3++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=A,this}let Y3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new K3(e),n.set(e,i)),i}}class K3{constructor(e){this.id=Y3++,this.code=e,this.usedTimes=0}}function Z3(t,e,n,i,r,o,s){const a=new Vm,l=new q3,u=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,x,R,z,O){const Y=z.fog,$=O.geometry,X=T.isMeshStandardMaterial?z.environment:null,j=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),D=j&&j.mapping===nf?j.image.height:null,K=y[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const J=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=J!==void 0?J.length:0;let Te=0;$.morphAttributes.position!==void 0&&(Te=1),$.morphAttributes.normal!==void 0&&(Te=2),$.morphAttributes.color!==void 0&&(Te=3);let He,W,ie,ge;if(K){const Ye=Si[K];He=Ye.vertexShader,W=Ye.fragmentShader}else He=T.vertexShader,W=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const he=t.getRenderTarget(),Ue=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,Ve=!!T.map,ut=!!T.matcap,L=!!j,et=!!T.aoMap,Le=!!T.lightMap,De=!!T.bumpMap,Se=!!T.normalMap,ot=!!T.displacementMap,Ce=!!T.emissiveMap,ze=!!T.metalnessMap,b=!!T.roughnessMap,M=T.anisotropy>0,H=T.clearcoat>0,te=T.dispersion>0,re=T.iridescence>0,ee=T.sheen>0,Re=T.transmission>0,de=M&&!!T.anisotropyMap,B=H&&!!T.clearcoatMap,Q=H&&!!T.clearcoatNormalMap,G=H&&!!T.clearcoatRoughnessMap,ne=re&&!!T.iridescenceMap,ye=re&&!!T.iridescenceThicknessMap,fe=ee&&!!T.sheenColorMap,pe=ee&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,_e=!!T.specularColorMap,Xe=!!T.specularIntensityMap,I=Re&&!!T.transmissionMap,se=Re&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,le=T.alphaTest>0,Ie=!!T.alphaHash,je=!!T.extensions;let pt=Tr;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(pt=t.toneMapping);const Nt={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:W,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ur,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:ut,envMap:L,envMapMode:L&&j.mapping,envMapCubeUVHeight:D,aoMap:et,lightMap:Le,bumpMap:De,normalMap:Se,displacementMap:d&&ot,emissiveMap:Ce,normalMapObjectSpace:Se&&T.normalMapType===oR,normalMapTangentSpace:Se&&T.normalMapType===rR,metalnessMap:ze,roughnessMap:b,anisotropy:M,anisotropyMap:de,clearcoat:H,clearcoatMap:B,clearcoatNormalMap:Q,clearcoatRoughnessMap:G,dispersion:te,iridescence:re,iridescenceMap:ne,iridescenceThicknessMap:ye,sheen:ee,sheenColorMap:fe,sheenRoughnessMap:pe,specularMap:Pe,specularColorMap:_e,specularIntensityMap:Xe,transmission:Re,transmissionMap:I,thicknessMap:se,gradientMap:q,opaque:T.transparent===!1&&T.blending===fs&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:Ie,combine:T.combine,mapUv:Ve&&v(T.map.channel),aoMapUv:et&&v(T.aoMap.channel),lightMapUv:Le&&v(T.lightMap.channel),bumpMapUv:De&&v(T.bumpMap.channel),normalMapUv:Se&&v(T.normalMap.channel),displacementMapUv:ot&&v(T.displacementMap.channel),emissiveMapUv:Ce&&v(T.emissiveMap.channel),metalnessMapUv:ze&&v(T.metalnessMap.channel),roughnessMapUv:b&&v(T.roughnessMap.channel),anisotropyMapUv:de&&v(T.anisotropyMap.channel),clearcoatMapUv:B&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:pe&&v(T.sheenRoughnessMap.channel),specularMapUv:Pe&&v(T.specularMap.channel),specularColorMapUv:_e&&v(T.specularColorMap.channel),specularIntensityMapUv:Xe&&v(T.specularIntensityMap.channel),transmissionMapUv:I&&v(T.transmissionMap.channel),thicknessMapUv:se&&v(T.thicknessMap.channel),alphaMapUv:Z&&v(T.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Se||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Ve||Z),fog:!!Y,useFog:T.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Te,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:pt,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&rt.getTransfer(T.map.colorSpace)===dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Bi,flipSided:T.side===yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:je&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function c(T){const x=[];if(T.shaderID?x.push(T.shaderID):(x.push(T.customVertexShaderID),x.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)x.push(R),x.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(g(x,T),_(x,T),x.push(t.outputColorSpace)),x.push(T.customProgramCacheKey),x.join()}function g(T,x){T.push(x.precision),T.push(x.outputColorSpace),T.push(x.envMapMode),T.push(x.envMapCubeUVHeight),T.push(x.mapUv),T.push(x.alphaMapUv),T.push(x.lightMapUv),T.push(x.aoMapUv),T.push(x.bumpMapUv),T.push(x.normalMapUv),T.push(x.displacementMapUv),T.push(x.emissiveMapUv),T.push(x.metalnessMapUv),T.push(x.roughnessMapUv),T.push(x.anisotropyMapUv),T.push(x.clearcoatMapUv),T.push(x.clearcoatNormalMapUv),T.push(x.clearcoatRoughnessMapUv),T.push(x.iridescenceMapUv),T.push(x.iridescenceThicknessMapUv),T.push(x.sheenColorMapUv),T.push(x.sheenRoughnessMapUv),T.push(x.specularMapUv),T.push(x.specularColorMapUv),T.push(x.specularIntensityMapUv),T.push(x.transmissionMapUv),T.push(x.thicknessMapUv),T.push(x.combine),T.push(x.fogExp2),T.push(x.sizeAttenuation),T.push(x.morphTargetsCount),T.push(x.morphAttributeCount),T.push(x.numDirLights),T.push(x.numPointLights),T.push(x.numSpotLights),T.push(x.numSpotLightMaps),T.push(x.numHemiLights),T.push(x.numRectAreaLights),T.push(x.numDirLightShadows),T.push(x.numPointLightShadows),T.push(x.numSpotLightShadows),T.push(x.numSpotLightShadowsWithMaps),T.push(x.numLightProbes),T.push(x.shadowMapType),T.push(x.toneMapping),T.push(x.numClippingPlanes),T.push(x.numClipIntersection),T.push(x.depthPacking)}function _(T,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),T.push(a.mask)}function S(T){const x=y[T.type];let R;if(x){const z=Si[x];R=IR.clone(z.uniforms)}else R=T.uniforms;return R}function C(T,x){let R;for(let z=0,O=f.length;z<O;z++){const Y=f[z];if(Y.cacheKey===x){R=Y,++R.usedTimes;break}}return R===void 0&&(R=new j3(t,x,T,o),f.push(R)),R}function A(T){if(--T.usedTimes===0){const x=f.indexOf(T);f[x]=f[f.length-1],f.pop(),T.destroy()}}function w(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:c,getUniforms:S,acquireProgram:C,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:P}}function Q3(){let t=new WeakMap;function e(o){let s=t.get(o);return s===void 0&&(s={},t.set(o,s)),s}function n(o){t.delete(o)}function i(o,s,a){t.get(o)[s]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function J3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Av(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function s(h,d,p,y,v,m){let c=t[e];return c===void 0?(c={id:h.id,object:h,geometry:d,material:p,groupOrder:y,renderOrder:h.renderOrder,z:v,group:m},t[e]=c):(c.id=h.id,c.object=h,c.geometry=d,c.material=p,c.groupOrder=y,c.renderOrder=h.renderOrder,c.z=v,c.group=m),e++,c}function a(h,d,p,y,v,m){const c=s(h,d,p,y,v,m);p.transmission>0?i.push(c):p.transparent===!0?r.push(c):n.push(c)}function l(h,d,p,y,v,m){const c=s(h,d,p,y,v,m);p.transmission>0?i.unshift(c):p.transparent===!0?r.unshift(c):n.unshift(c)}function u(h,d){n.length>1&&n.sort(h||J3),i.length>1&&i.sort(d||Tv),r.length>1&&r.sort(d||Tv)}function f(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:a,unshift:l,finish:f,sort:u}}function eD(){let t=new WeakMap;function e(i,r){const o=t.get(i);let s;return o===void 0?(s=new Av,t.set(i,[s])):r>=o.length?(s=new Av,o.push(s)):s=o[r],s}function n(){t=new WeakMap}return{get:e,dispose:n}}function tD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Ke};break;case"SpotLight":n={position:new k,direction:new k,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function nD(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let iD=0;function rD(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oD(t){const e=new tD,n=nD(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,o=new Ct,s=new Ct;function a(u){let f=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,y=0,v=0,m=0,c=0,g=0,_=0,S=0,C=0,A=0,w=0;u.sort(rD);for(let T=0,x=u.length;T<x;T++){const R=u[T],z=R.color,O=R.intensity,Y=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=z.r*O,h+=z.g*O,d+=z.b*O;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],O);w++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const j=R.shadow,D=n.get(R);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=R.shadow.matrix,g++}i.directional[p]=X,p++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(z).multiplyScalar(O),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[v]=X;const j=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,j.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[v]=j.matrix,R.castShadow){const D=n.get(R);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,i.spotShadow[v]=D,i.spotShadowMap[v]=$,S++}v++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(z).multiplyScalar(O),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=X,m++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const j=R.shadow,D=n.get(R);D.shadowIntensity=j.intensity,D.shadowBias=j.bias,D.shadowNormalBias=j.normalBias,D.shadowRadius=j.radius,D.shadowMapSize=j.mapSize,D.shadowCameraNear=j.camera.near,D.shadowCameraFar=j.camera.far,i.pointShadow[y]=D,i.pointShadowMap[y]=$,i.pointShadowMatrix[y]=R.shadow.matrix,_++}i.point[y]=X,y++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(O),X.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[c]=X,c++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==y||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==c||P.numDirectionalShadows!==g||P.numPointShadows!==_||P.numSpotShadows!==S||P.numSpotMaps!==C||P.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=y,i.hemi.length=c,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+C-A,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=w,P.directionalLength=p,P.pointLength=y,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=c,P.numDirectionalShadows=g,P.numPointShadows=_,P.numSpotShadows=S,P.numSpotMaps=C,P.numLightProbes=w,i.version=iD++)}function l(u,f){let h=0,d=0,p=0,y=0,v=0;const m=f.matrixWorldInverse;for(let c=0,g=u.length;c<g;c++){const _=u[c];if(_.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[y];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(_.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),y++}else if(_.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Cv(t){const e=new oD(t),n=[],i=[];function r(f){u.camera=f,n.length=0,i.length=0}function o(f){n.push(f)}function s(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:s}}function sD(t){let e=new WeakMap;function n(r,o=0){const s=e.get(r);let a;return s===void 0?(a=new Cv(t),e.set(r,[a])):o>=s.length?(a=new Cv(t),s.push(a)):a=s[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class aD extends of{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nR,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lD extends of{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uD=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function fD(t,e,n){let i=new AS;const r=new Je,o=new Je,s=new Vt,a=new aD({depthPacking:iR}),l=new lD,u={},f=n.maxTextureSize,h={[br]:yn,[yn]:br,[Bi]:Bi},d=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:uD,fragmentShader:cD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const y=new Or;y.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new fi(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=tS;let c=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),x=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(wr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=c!==Oi&&this.type===Oi,Y=c===Oi&&this.type!==Oi;for(let $=0,X=A.length;$<X;$++){const j=A[$],D=j.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const K=D.getFrameExtents();if(r.multiply(K),o.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(o.x=Math.floor(f/K.x),r.x=o.x*K.x,D.mapSize.x=o.x),r.y>f&&(o.y=Math.floor(f/K.y),r.y=o.y*K.y,D.mapSize.y=o.y)),D.map===null||O===!0||Y===!0){const ae=this.type!==Oi?{minFilter:jn,magFilter:jn}:{};D.map!==null&&D.map.dispose(),D.map=new uo(r.x,r.y,ae),D.map.texture.name=j.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const J=D.getViewportCount();for(let ae=0;ae<J;ae++){const Te=D.getViewport(ae);s.set(o.x*Te.x,o.y*Te.y,o.x*Te.z,o.y*Te.w),z.viewport(s),D.updateMatrices(j,ae),i=D.getFrustum(),S(w,P,D.camera,j,this.type)}D.isPointLightShadow!==!0&&this.type===Oi&&g(D,P),D.needsUpdate=!1}c=this.type,m.needsUpdate=!1,t.setRenderTarget(T,x,R)};function g(A,w){const P=e.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new uo(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,P,d,v,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,P,p,v,null)}function _(A,w,P,T){let x=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=x.uuid,O=w.uuid;let Y=u[z];Y===void 0&&(Y={},u[z]=Y);let $=Y[O];$===void 0&&($=x.clone(),Y[O]=$,w.addEventListener("dispose",C)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,T===Oi?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=P}return x}function S(A,w,P,T,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Oi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),Y=A.material;if(Array.isArray(Y)){const $=O.groups;for(let X=0,j=$.length;X<j;X++){const D=$[X],K=Y[D.materialIndex];if(K&&K.visible){const J=_(A,K,T,x);A.onBeforeShadow(t,A,w,P,O,J,D),t.renderBufferDirect(P,null,O,J,A,D),A.onAfterShadow(t,A,w,P,O,J,D)}}}else if(Y.visible){const $=_(A,Y,T,x);A.onBeforeShadow(t,A,w,P,O,$,null),t.renderBufferDirect(P,null,O,$,A,null),A.onAfterShadow(t,A,w,P,O,$,null)}}const z=A.children;for(let O=0,Y=z.length;O<Y;O++)S(z[O],w,P,T,x)}function C(A){A.target.removeEventListener("dispose",C);for(const P in u){const T=u[P],x=A.target.uuid;x in T&&(T[x].dispose(),delete T[x])}}}function dD(t){function e(){let I=!1;const se=new Vt;let q=null;const Z=new Vt(0,0,0,0);return{setMask:function(le){q!==le&&!I&&(t.colorMask(le,le,le,le),q=le)},setLocked:function(le){I=le},setClear:function(le,Ie,je,pt,Nt){Nt===!0&&(le*=pt,Ie*=pt,je*=pt),se.set(le,Ie,je,pt),Z.equals(se)===!1&&(t.clearColor(le,Ie,je,pt),Z.copy(se))},reset:function(){I=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let I=!1,se=null,q=null,Z=null;return{setTest:function(le){le?ge(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(le){se!==le&&!I&&(t.depthMask(le),se=le)},setFunc:function(le){if(q!==le){switch(le){case zb:t.depthFunc(t.NEVER);break;case Bb:t.depthFunc(t.ALWAYS);break;case Hb:t.depthFunc(t.LESS);break;case ec:t.depthFunc(t.LEQUAL);break;case Vb:t.depthFunc(t.EQUAL);break;case Gb:t.depthFunc(t.GEQUAL);break;case Wb:t.depthFunc(t.GREATER);break;case $b:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=le}},setLocked:function(le){I=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){I=!1,se=null,q=null,Z=null}}}function i(){let I=!1,se=null,q=null,Z=null,le=null,Ie=null,je=null,pt=null,Nt=null;return{setTest:function(Ye){I||(Ye?ge(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(Ye){se!==Ye&&!I&&(t.stencilMask(Ye),se=Ye)},setFunc:function(Ye,wn,fn){(q!==Ye||Z!==wn||le!==fn)&&(t.stencilFunc(Ye,wn,fn),q=Ye,Z=wn,le=fn)},setOp:function(Ye,wn,fn){(Ie!==Ye||je!==wn||pt!==fn)&&(t.stencilOp(Ye,wn,fn),Ie=Ye,je=wn,pt=fn)},setLocked:function(Ye){I=Ye},setClear:function(Ye){Nt!==Ye&&(t.clearStencil(Ye),Nt=Ye)},reset:function(){I=!1,se=null,q=null,Z=null,le=null,Ie=null,je=null,pt=null,Nt=null}}}const r=new e,o=new n,s=new i,a=new WeakMap,l=new WeakMap;let u={},f={},h=new WeakMap,d=[],p=null,y=!1,v=null,m=null,c=null,g=null,_=null,S=null,C=null,A=new Ke(0,0,0),w=0,P=!1,T=null,x=null,R=null,z=null,O=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=X>=1):j.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=X>=2);let D=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Te=new Vt().fromArray(J),He=new Vt().fromArray(ae);function W(I,se,q,Z){const le=new Uint8Array(4),Ie=t.createTexture();t.bindTexture(I,Ie),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let je=0;je<q;je++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(se+je,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Ie}const ie={};ie[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),s.setClear(0),ge(t.DEPTH_TEST),o.setFunc(ec),De(!1),Se(I0),ge(t.CULL_FACE),et(wr);function ge(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function he(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function Ue(I,se){return f[I]!==se?(t.bindFramebuffer(I,se),f[I]=se,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Be(I,se){let q=d,Z=!1;if(I){q=h.get(se),q===void 0&&(q=[],h.set(se,q));const le=I.textures;if(q.length!==le.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ie=0,je=le.length;Ie<je;Ie++)q[Ie]=t.COLOR_ATTACHMENT0+Ie;q.length=le.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function Ve(I){return p!==I?(t.useProgram(I),p=I,!0):!1}const ut={[jr]:t.FUNC_ADD,[Mb]:t.FUNC_SUBTRACT,[Eb]:t.FUNC_REVERSE_SUBTRACT};ut[wb]=t.MIN,ut[Tb]=t.MAX;const L={[Ab]:t.ZERO,[Cb]:t.ONE,[bb]:t.SRC_COLOR,[Nh]:t.SRC_ALPHA,[Nb]:t.SRC_ALPHA_SATURATE,[Db]:t.DST_COLOR,[Pb]:t.DST_ALPHA,[Rb]:t.ONE_MINUS_SRC_COLOR,[Uh]:t.ONE_MINUS_SRC_ALPHA,[Ib]:t.ONE_MINUS_DST_COLOR,[Lb]:t.ONE_MINUS_DST_ALPHA,[Ub]:t.CONSTANT_COLOR,[Ob]:t.ONE_MINUS_CONSTANT_COLOR,[Fb]:t.CONSTANT_ALPHA,[kb]:t.ONE_MINUS_CONSTANT_ALPHA};function et(I,se,q,Z,le,Ie,je,pt,Nt,Ye){if(I===wr){y===!0&&(he(t.BLEND),y=!1);return}if(y===!1&&(ge(t.BLEND),y=!0),I!==Sb){if(I!==v||Ye!==P){if((m!==jr||_!==jr)&&(t.blendEquation(t.FUNC_ADD),m=jr,_=jr),Ye)switch(I){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.ONE,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case N0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case O0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}c=null,g=null,S=null,C=null,A.set(0,0,0),w=0,v=I,P=Ye}return}le=le||se,Ie=Ie||q,je=je||Z,(se!==m||le!==_)&&(t.blendEquationSeparate(ut[se],ut[le]),m=se,_=le),(q!==c||Z!==g||Ie!==S||je!==C)&&(t.blendFuncSeparate(L[q],L[Z],L[Ie],L[je]),c=q,g=Z,S=Ie,C=je),(pt.equals(A)===!1||Nt!==w)&&(t.blendColor(pt.r,pt.g,pt.b,Nt),A.copy(pt),w=Nt),v=I,P=!1}function Le(I,se){I.side===Bi?he(t.CULL_FACE):ge(t.CULL_FACE);let q=I.side===yn;se&&(q=!q),De(q),I.blending===fs&&I.transparent===!1?et(wr):et(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const Z=I.stencilWrite;s.setTest(Z),Z&&(s.setMask(I.stencilWriteMask),s.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),s.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ce(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function Se(I){I!==yb?(ge(t.CULL_FACE),I!==x&&(I===I0?t.cullFace(t.BACK):I===xb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),x=I}function ot(I){I!==R&&($&&t.lineWidth(I),R=I)}function Ce(I,se,q){I?(ge(t.POLYGON_OFFSET_FILL),(z!==se||O!==q)&&(t.polygonOffset(se,q),z=se,O=q)):he(t.POLYGON_OFFSET_FILL)}function ze(I){I?ge(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function b(I){I===void 0&&(I=t.TEXTURE0+Y-1),D!==I&&(t.activeTexture(I),D=I)}function M(I,se,q){q===void 0&&(D===null?q=t.TEXTURE0+Y-1:q=D);let Z=K[q];Z===void 0&&(Z={type:void 0,texture:void 0},K[q]=Z),(Z.type!==I||Z.texture!==se)&&(D!==q&&(t.activeTexture(q),D=q),t.bindTexture(I,se||ie[I]),Z.type=I,Z.texture=se)}function H(){const I=K[D];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function B(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ne(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function fe(I){Te.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Te.copy(I))}function pe(I){He.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),He.copy(I))}function Pe(I,se){let q=l.get(se);q===void 0&&(q=new WeakMap,l.set(se,q));let Z=q.get(I);Z===void 0&&(Z=t.getUniformBlockIndex(se,I.name),q.set(I,Z))}function _e(I,se){const Z=l.get(se).get(I);a.get(se)!==Z&&(t.uniformBlockBinding(se,Z,I.__bindingPointIndex),a.set(se,Z))}function Xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},D=null,K={},f={},h=new WeakMap,d=[],p=null,y=!1,v=null,m=null,c=null,g=null,_=null,S=null,C=null,A=new Ke(0,0,0),w=0,P=!1,T=null,x=null,R=null,z=null,O=null,Te.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),s.reset()}return{buffers:{color:r,depth:o,stencil:s},enable:ge,disable:he,bindFramebuffer:Ue,drawBuffers:Be,useProgram:Ve,setBlending:et,setMaterial:Le,setFlipSided:De,setCullFace:Se,setLineWidth:ot,setPolygonOffset:Ce,setScissorTest:ze,activeTexture:b,bindTexture:M,unbindTexture:H,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ne,texImage3D:ye,updateUBOMapping:Pe,uniformBlockBinding:_e,texStorage2D:Q,texStorage3D:G,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:B,scissor:fe,viewport:pe,reset:Xe}}function bv(t,e,n,i){const r=hD(i);switch(n){case lS:return t*e;case cS:return t*e;case fS:return t*e*2;case dS:return t*e/r.components*r.byteLength;case Fm:return t*e/r.components*r.byteLength;case hS:return t*e*2/r.components*r.byteLength;case km:return t*e*2/r.components*r.byteLength;case uS:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case zm:return t*e*4/r.components*r.byteLength;case yu:case xu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Su:case Mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hh:case Gh:return Math.max(t,16)*Math.max(e,8)/4;case Bh:case Vh:return Math.max(t,8)*Math.max(e,8)/2;case Wh:case $h:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case op:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Eu:case ap:case lp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case pS:case up:return Math.ceil(t/4)*Math.ceil(e/4)*8;case cp:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hD(t){switch(t){case Ki:case oS:return{byteLength:1,components:1};case ka:case sS:case Qa:return{byteLength:2,components:1};case Um:case Om:return{byteLength:2,components:4};case lo:case Nm:case Gi:return{byteLength:4,components:1};case aS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pD(t,e,n,i,r,o,s){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Je,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,M){return p?new OffscreenCanvas(b,M):oc("canvas")}function v(b,M,H){let te=1;const re=ze(b);if((re.width>H||re.height>H)&&(te=H/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ee=Math.floor(te*re.width),Re=Math.floor(te*re.height);h===void 0&&(h=y(ee,Re));const de=M?y(ee,Re):h;return de.width=ee,de.height=Re,de.getContext("2d").drawImage(b,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Re+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==jn&&b.minFilter!==ui}function c(b){t.generateMipmap(b)}function g(b,M,H,te,re=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=M;if(M===t.RED&&(H===t.FLOAT&&(ee=t.R32F),H===t.HALF_FLOAT&&(ee=t.R16F),H===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.R8UI),H===t.UNSIGNED_SHORT&&(ee=t.R16UI),H===t.UNSIGNED_INT&&(ee=t.R32UI),H===t.BYTE&&(ee=t.R8I),H===t.SHORT&&(ee=t.R16I),H===t.INT&&(ee=t.R32I)),M===t.RG&&(H===t.FLOAT&&(ee=t.RG32F),H===t.HALF_FLOAT&&(ee=t.RG16F),H===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(H===t.UNSIGNED_BYTE&&(ee=t.RG8UI),H===t.UNSIGNED_SHORT&&(ee=t.RG16UI),H===t.UNSIGNED_INT&&(ee=t.RG32UI),H===t.BYTE&&(ee=t.RG8I),H===t.SHORT&&(ee=t.RG16I),H===t.INT&&(ee=t.RG32I)),M===t.RGB&&H===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Re=re?tc:rt.getTransfer(te);H===t.FLOAT&&(ee=t.RGBA32F),H===t.HALF_FLOAT&&(ee=t.RGBA16F),H===t.UNSIGNED_BYTE&&(ee=Re===dt?t.SRGB8_ALPHA8:t.RGBA8),H===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),H===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function _(b,M){let H;return b?M===null||M===lo||M===ws?H=t.DEPTH24_STENCIL8:M===Gi?H=t.DEPTH32F_STENCIL8:M===ka&&(H=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===lo||M===ws?H=t.DEPTH_COMPONENT24:M===Gi?H=t.DEPTH_COMPONENT32F:M===ka&&(H=t.DEPTH_COMPONENT16),H}function S(b,M){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==jn&&b.minFilter!==ui?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function C(b){const M=b.target;M.removeEventListener("dispose",C),w(M),M.isVideoTexture&&f.delete(M)}function A(b){const M=b.target;M.removeEventListener("dispose",A),T(M)}function w(b){const M=i.get(b);if(M.__webglInit===void 0)return;const H=b.source,te=d.get(H);if(te){const re=te[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(b),Object.keys(te).length===0&&d.delete(H)}i.remove(b)}function P(b){const M=i.get(b);t.deleteTexture(M.__webglTexture);const H=b.source,te=d.get(H);delete te[M.__cacheKey],s.memory.textures--}function T(b){const M=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let re=0;re<M.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[te][re]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const H=b.textures;for(let te=0,re=H.length;te<re;te++){const ee=i.get(H[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(H[te])}i.remove(b)}let x=0;function R(){x=0}function z(){const b=x;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),x+=1,b}function O(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function Y(b,M){const H=i.get(b);if(b.isVideoTexture&&ot(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const te=b.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(H,b,M);return}}n.bindTexture(t.TEXTURE_2D,H.__webglTexture,t.TEXTURE0+M)}function $(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){He(H,b,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,H.__webglTexture,t.TEXTURE0+M)}function X(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){He(H,b,M);return}n.bindTexture(t.TEXTURE_3D,H.__webglTexture,t.TEXTURE0+M)}function j(b,M){const H=i.get(b);if(b.version>0&&H.__version!==b.version){W(H,b,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture,t.TEXTURE0+M)}const D={[kh]:t.REPEAT,[Qr]:t.CLAMP_TO_EDGE,[zh]:t.MIRRORED_REPEAT},K={[jn]:t.NEAREST,[tR]:t.NEAREST_MIPMAP_NEAREST,[Pl]:t.NEAREST_MIPMAP_LINEAR,[ui]:t.LINEAR,[qf]:t.LINEAR_MIPMAP_NEAREST,[Jr]:t.LINEAR_MIPMAP_LINEAR},J={[sR]:t.NEVER,[dR]:t.ALWAYS,[aR]:t.LESS,[mS]:t.LEQUAL,[lR]:t.EQUAL,[fR]:t.GEQUAL,[uR]:t.GREATER,[cR]:t.NOTEQUAL};function ae(b,M){if(M.type===Gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ui||M.magFilter===qf||M.magFilter===Pl||M.magFilter===Jr||M.minFilter===ui||M.minFilter===qf||M.minFilter===Pl||M.minFilter===Jr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,D[M.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,D[M.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,D[M.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===jn||M.minFilter!==Pl&&M.minFilter!==Jr||M.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Te(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",C));const te=M.source;let re=d.get(te);re===void 0&&(re={},d.set(te,re));const ee=O(M);if(ee!==b.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},s.memory.textures++,H=!0),re[ee].usedTimes++;const Re=re[b.__cacheKey];Re!==void 0&&(re[b.__cacheKey].usedTimes--,Re.usedTimes===0&&P(M)),b.__cacheKey=ee,b.__webglTexture=re[ee].texture}return H}function He(b,M,H){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const re=Te(b,M),ee=M.source;n.bindTexture(te,b.__webglTexture,t.TEXTURE0+H);const Re=i.get(ee);if(ee.version!==Re.__version||re===!0){n.activeTexture(t.TEXTURE0+H);const de=rt.getPrimaries(rt.workingColorSpace),B=M.colorSpace===hr?null:rt.getPrimaries(M.colorSpace),Q=M.colorSpace===hr||de===B?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let G=v(M.image,!1,r.maxTextureSize);G=Ce(M,G);const ne=o.convert(M.format,M.colorSpace),ye=o.convert(M.type);let fe=g(M.internalFormat,ne,ye,M.colorSpace,M.isVideoTexture);ae(te,M);let pe;const Pe=M.mipmaps,_e=M.isVideoTexture!==!0,Xe=Re.__version===void 0||re===!0,I=ee.dataReady,se=S(M,G);if(M.isDepthTexture)fe=_(M.format===Ts,M.type),Xe&&(_e?n.texStorage2D(t.TEXTURE_2D,1,fe,G.width,G.height):n.texImage2D(t.TEXTURE_2D,0,fe,G.width,G.height,0,ne,ye,null));else if(M.isDataTexture)if(Pe.length>0){_e&&Xe&&n.texStorage2D(t.TEXTURE_2D,se,fe,Pe[0].width,Pe[0].height);for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],_e?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,ye,pe.data):n.texImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,ne,ye,pe.data);M.generateMipmaps=!1}else _e?(Xe&&n.texStorage2D(t.TEXTURE_2D,se,fe,G.width,G.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,G.width,G.height,ne,ye,G.data)):n.texImage2D(t.TEXTURE_2D,0,fe,G.width,G.height,0,ne,ye,G.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){_e&&Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,fe,Pe[0].width,Pe[0].height,G.depth);for(let q=0,Z=Pe.length;q<Z;q++)if(pe=Pe[q],M.format!==ci)if(ne!==null)if(_e){if(I)if(M.layerUpdates.size>0){const le=bv(pe.width,pe.height,M.format,M.type);for(const Ie of M.layerUpdates){const je=pe.data.subarray(Ie*le/pe.data.BYTES_PER_ELEMENT,(Ie+1)*le/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Ie,pe.width,pe.height,1,ne,je,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,G.depth,ne,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,fe,pe.width,pe.height,G.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _e?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,G.depth,ne,ye,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,fe,pe.width,pe.height,G.depth,0,ne,ye,pe.data)}else{_e&&Xe&&n.texStorage2D(t.TEXTURE_2D,se,fe,Pe[0].width,Pe[0].height);for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],M.format!==ci?ne!==null?_e?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,ye,pe.data):n.texImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,ne,ye,pe.data)}else if(M.isDataArrayTexture)if(_e){if(Xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,fe,G.width,G.height,G.depth),I)if(M.layerUpdates.size>0){const q=bv(G.width,G.height,M.format,M.type);for(const Z of M.layerUpdates){const le=G.data.subarray(Z*q/G.data.BYTES_PER_ELEMENT,(Z+1)*q/G.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,G.width,G.height,1,ne,ye,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,G.width,G.height,G.depth,ne,ye,G.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,G.width,G.height,G.depth,0,ne,ye,G.data);else if(M.isData3DTexture)_e?(Xe&&n.texStorage3D(t.TEXTURE_3D,se,fe,G.width,G.height,G.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,G.width,G.height,G.depth,ne,ye,G.data)):n.texImage3D(t.TEXTURE_3D,0,fe,G.width,G.height,G.depth,0,ne,ye,G.data);else if(M.isFramebufferTexture){if(Xe)if(_e)n.texStorage2D(t.TEXTURE_2D,se,fe,G.width,G.height);else{let q=G.width,Z=G.height;for(let le=0;le<se;le++)n.texImage2D(t.TEXTURE_2D,le,fe,q,Z,0,ne,ye,null),q>>=1,Z>>=1}}else if(Pe.length>0){if(_e&&Xe){const q=ze(Pe[0]);n.texStorage2D(t.TEXTURE_2D,se,fe,q.width,q.height)}for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],_e?I&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ne,ye,pe):n.texImage2D(t.TEXTURE_2D,q,fe,ne,ye,pe);M.generateMipmaps=!1}else if(_e){if(Xe){const q=ze(G);n.texStorage2D(t.TEXTURE_2D,se,fe,q.width,q.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne,ye,G)}else n.texImage2D(t.TEXTURE_2D,0,fe,ne,ye,G);m(M)&&c(te),Re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function W(b,M,H){if(M.image.length!==6)return;const te=Te(b,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+H);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+H);const Re=rt.getPrimaries(rt.workingColorSpace),de=M.colorSpace===hr?null:rt.getPrimaries(M.colorSpace),B=M.colorSpace===hr||Re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const Q=M.isCompressedTexture||M.image[0].isCompressedTexture,G=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let Z=0;Z<6;Z++)!Q&&!G?ne[Z]=v(M.image[Z],!0,r.maxCubemapSize):ne[Z]=G?M.image[Z].image:M.image[Z],ne[Z]=Ce(M,ne[Z]);const ye=ne[0],fe=o.convert(M.format,M.colorSpace),pe=o.convert(M.type),Pe=g(M.internalFormat,fe,pe,M.colorSpace),_e=M.isVideoTexture!==!0,Xe=ee.__version===void 0||te===!0,I=re.dataReady;let se=S(M,ye);ae(t.TEXTURE_CUBE_MAP,M);let q;if(Q){_e&&Xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Pe,ye.width,ye.height);for(let Z=0;Z<6;Z++){q=ne[Z].mipmaps;for(let le=0;le<q.length;le++){const Ie=q[le];M.format!==ci?fe!==null?_e?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ie.width,Ie.height,fe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Pe,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ie.width,Ie.height,fe,pe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Pe,Ie.width,Ie.height,0,fe,pe,Ie.data)}}}else{if(q=M.mipmaps,_e&&Xe){q.length>0&&se++;const Z=ze(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,se,Pe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(G){_e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ne[Z].width,ne[Z].height,fe,pe,ne[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,ne[Z].width,ne[Z].height,0,fe,pe,ne[Z].data);for(let le=0;le<q.length;le++){const je=q[le].image[Z].image;_e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,je.width,je.height,fe,pe,je.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Pe,je.width,je.height,0,fe,pe,je.data)}}else{_e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe,pe,ne[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,fe,pe,ne[Z]);for(let le=0;le<q.length;le++){const Ie=q[le];_e?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,fe,pe,Ie.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Pe,fe,pe,Ie.image[Z])}}}m(M)&&c(t.TEXTURE_CUBE_MAP),ee.__version=re.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ie(b,M,H,te,re,ee){const Re=o.convert(H.format,H.colorSpace),de=o.convert(H.type),B=g(H.internalFormat,Re,de,H.colorSpace);if(!i.get(M).__hasExternalTextures){const G=Math.max(1,M.width>>ee),ne=Math.max(1,M.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,B,G,ne,M.depth,0,Re,de,null):n.texImage2D(re,ee,B,G,ne,0,Re,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(H).__webglTexture,0,De(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(H).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(b,M,H){if(t.bindRenderbuffer(t.RENDERBUFFER,b),M.depthBuffer){const te=M.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=_(M.stencilBuffer,re),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=De(M);Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ee,M.width,M.height):H?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,b)}else{const te=M.textures;for(let re=0;re<te.length;re++){const ee=te[re],Re=o.convert(ee.format,ee.colorSpace),de=o.convert(ee.type),B=g(ee.internalFormat,Re,de,ee.colorSpace),Q=De(M);H&&Se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,B,M.width,M.height):Se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,B,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,B,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,re=De(M);if(M.depthTexture.format===ds)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Ts)Se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ue(b){const M=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),ge(M.__webglDepthbuffer[te],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ge(M.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(b,M,H){const te=i.get(b);M!==void 0&&ie(te.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),H!==void 0&&Ue(b)}function Ve(b){const M=b.texture,H=i.get(b),te=i.get(M);b.addEventListener("dispose",A);const re=b.textures,ee=b.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,s.memory.textures++),ee){H.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[de]=[];for(let B=0;B<M.mipmaps.length;B++)H.__webglFramebuffer[de][B]=t.createFramebuffer()}else H.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)H.__webglFramebuffer[de]=t.createFramebuffer()}else H.__webglFramebuffer=t.createFramebuffer();if(Re)for(let de=0,B=re.length;de<B;de++){const Q=i.get(re[de]);Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture(),s.memory.textures++)}if(b.samples>0&&Se(b)===!1){H.__webglMultisampledFramebuffer=t.createFramebuffer(),H.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){const B=re[de];H.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const Q=o.convert(B.format,B.colorSpace),G=o.convert(B.type),ne=g(B.internalFormat,Q,G,B.colorSpace,b.isXRRenderTarget===!0),ye=De(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,ne,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,H.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(H.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)ie(H.__webglFramebuffer[de][B],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,B);else ie(H.__webglFramebuffer[de],b,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&c(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let de=0,B=re.length;de<B;de++){const Q=re[de],G=i.get(Q);n.bindTexture(t.TEXTURE_2D,G.__webglTexture),ae(t.TEXTURE_2D,Q),ie(H.__webglFramebuffer,b,Q,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Q)&&c(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,te.__webglTexture),ae(de,M),M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)ie(H.__webglFramebuffer[B],b,M,t.COLOR_ATTACHMENT0,de,B);else ie(H.__webglFramebuffer,b,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&c(de),n.unbindTexture()}b.depthBuffer&&Ue(b)}function ut(b){const M=b.textures;for(let H=0,te=M.length;H<te;H++){const re=M[H];if(m(re)){const ee=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(re).__webglTexture;n.bindTexture(ee,Re),c(ee),n.unbindTexture()}}}const L=[],et=[];function Le(b){if(b.samples>0){if(Se(b)===!1){const M=b.textures,H=b.width,te=b.height;let re=t.COLOR_BUFFER_BIT;const ee=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(b),de=M.length>1;if(de)for(let B=0;B<M.length;B++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let B=0;B<M.length;B++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[B]);const Q=i.get(M[B]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,H,te,0,0,H,te,re,t.NEAREST),l===!0&&(L.length=0,et.length=0,L.push(t.COLOR_ATTACHMENT0+B),b.depthBuffer&&b.resolveDepthBuffer===!1&&(L.push(ee),et.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,et)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let B=0;B<M.length;B++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,Re.__webglColorRenderbuffer[B]);const Q=i.get(M[B]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const M=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function De(b){return Math.min(r.maxSamples,b.samples)}function Se(b){const M=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ot(b){const M=s.render.frame;f.get(b)!==M&&(f.set(b,M),b.update())}function Ce(b,M){const H=b.colorSpace,te=b.format,re=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||H!==Ur&&H!==hr&&(rt.getTransfer(H)===dt?(te!==ci||re!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Se}function mD(t,e){function n(i,r=hr){let o;const s=rt.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===Um)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Om)return t.UNSIGNED_SHORT_5_5_5_1;if(i===aS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===oS)return t.BYTE;if(i===sS)return t.SHORT;if(i===ka)return t.UNSIGNED_SHORT;if(i===Nm)return t.INT;if(i===lo)return t.UNSIGNED_INT;if(i===Gi)return t.FLOAT;if(i===Qa)return t.HALF_FLOAT;if(i===lS)return t.ALPHA;if(i===uS)return t.RGB;if(i===ci)return t.RGBA;if(i===cS)return t.LUMINANCE;if(i===fS)return t.LUMINANCE_ALPHA;if(i===ds)return t.DEPTH_COMPONENT;if(i===Ts)return t.DEPTH_STENCIL;if(i===dS)return t.RED;if(i===Fm)return t.RED_INTEGER;if(i===hS)return t.RG;if(i===km)return t.RG_INTEGER;if(i===zm)return t.RGBA_INTEGER;if(i===yu||i===xu||i===Su||i===Mu)if(s===dt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===yu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Su)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===yu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Su)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Mu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bh||i===Hh||i===Vh||i===Gh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Bh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wh||i===$h||i===Xh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Wh||i===$h)return s===dt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===Xh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===jh||i===Yh||i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===op||i===sp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===jh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Qh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jh)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ep)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tp)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===np)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ip)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===rp)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===op)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sp)return s===dt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eu||i===ap||i===lp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Eu)return s===dt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ap)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===pS||i===up||i===cp||i===fp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===Eu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===up)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===cp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ws?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class gD extends Pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ql extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vD={type:"move"};class Md{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,s=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),c=this._getHandJoint(u,v);m!==null&&(c.matrix.fromArray(m.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,c.jointRadius=m.radius),c.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,y=.005;u.inputState.pinching&&d>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const _D=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Rr({vertexShader:_D,fragmentShader:yD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new sf(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SD extends Ns{constructor(e,n){super();const i=this;let r=null,o=1,s=null,a="local-floor",l=1,u=null,f=null,h=null,d=null,p=null,y=null;const v=new xD,m=n.getContextAttributes();let c=null,g=null;const _=[],S=[],C=new Je;let A=null;const w=new Pn;w.layers.enable(1),w.viewport=new Vt;const P=new Pn;P.layers.enable(2),P.viewport=new Vt;const T=[w,P],x=new gD;x.layers.enable(1),x.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=_[W];return ie===void 0&&(ie=new Md,_[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=_[W];return ie===void 0&&(ie=new Md,_[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=_[W];return ie===void 0&&(ie=new Md,_[W]=ie),ie.getHandSpace()};function O(W){const ie=S.indexOf(W.inputSource);if(ie===-1)return;const ge=_[ie];ge!==void 0&&(ge.update(W.inputSource,W.frame,u||s),ge.dispatchEvent({type:W.type,data:W.inputSource}))}function Y(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let W=0;W<_.length;W++){const ie=S[W];ie!==null&&(S[W]=null,_[W].disconnect(ie))}R=null,z=null,v.reset(),e.setRenderTarget(c),p=null,d=null,h=null,r=null,g=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(c=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new uo(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ge=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Ts:ds,ge=m.stencil?ws:lo);const Ue={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:o};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new uo(d.textureWidth,d.textureHeight,{format:ci,type:Ki,depthTexture:new bS(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(W){for(let ie=0;ie<W.removed.length;ie++){const ge=W.removed[ie],he=S.indexOf(ge);he>=0&&(S[he]=null,_[he].disconnect(ge))}for(let ie=0;ie<W.added.length;ie++){const ge=W.added[ie];let he=S.indexOf(ge);if(he===-1){for(let Be=0;Be<_.length;Be++)if(Be>=S.length){S.push(ge),he=Be;break}else if(S[Be]===null){S[Be]=ge,he=Be;break}if(he===-1)break}const Ue=_[he];Ue&&Ue.connect(ge)}}const X=new k,j=new k;function D(W,ie,ge){X.setFromMatrixPosition(ie.matrixWorld),j.setFromMatrixPosition(ge.matrixWorld);const he=X.distanceTo(j),Ue=ie.projectionMatrix.elements,Be=ge.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),ut=Ue[14]/(Ue[10]+1),L=(Ue[9]+1)/Ue[5],et=(Ue[9]-1)/Ue[5],Le=(Ue[8]-1)/Ue[0],De=(Be[8]+1)/Be[0],Se=Ve*Le,ot=Ve*De,Ce=he/(-Le+De),ze=Ce*-Le;ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ze),W.translateZ(Ce),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const b=Ve+Ce,M=ut+Ce,H=Se-ze,te=ot+(he-ze),re=L*ut/M*b,ee=et*ut/M*b;W.projectionMatrix.makePerspective(H,te,re,ee,b,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function K(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;v.texture!==null&&(W.near=v.depthNear,W.far=v.depthFar),x.near=P.near=w.near=W.near,x.far=P.far=w.far=W.far,(R!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far,w.near=R,w.far=z,P.near=R,P.far=z,w.updateProjectionMatrix(),P.updateProjectionMatrix(),W.updateProjectionMatrix());const ie=W.parent,ge=x.cameras;K(x,ie);for(let he=0;he<ge.length;he++)K(ge[he],ie);ge.length===2?D(x,w,P):x.projectionMatrix.copy(w.projectionMatrix),J(W,x,ie)};function J(W,ie,ge){ge===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(ge.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=dp*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ae=null;function Te(W,ie){if(f=ie.getViewerPose(u||s),y=ie,f!==null){const ge=f.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let he=!1;ge.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let Be=0;Be<ge.length;Be++){const Ve=ge[Be];let ut=null;if(p!==null)ut=p.getViewport(Ve);else{const et=h.getViewSubImage(d,Ve);ut=et.viewport,Be===0&&(e.setRenderTargetTextures(g,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),e.setRenderTarget(g))}let L=T[Be];L===void 0&&(L=new Pn,L.layers.enable(Be),L.viewport=new Vt,T[Be]=L),L.matrix.fromArray(Ve.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ve.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(ut.x,ut.y,ut.width,ut.height),Be===0&&(x.matrix.copy(L.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(L)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Be=h.getDepthInformation(ge[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,r.renderState)}}for(let ge=0;ge<_.length;ge++){const he=S[ge],Ue=_[ge];he!==null&&Ue!==void 0&&Ue.update(he,ie,u||s)}ae&&ae(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),y=null}const He=new CS;He.setAnimationLoop(Te),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}const Vr=new Zi,MD=new Ct;function ED(t,e){function n(m,c){m.matrixAutoUpdate===!0&&m.updateMatrix(),c.value.copy(m.matrix)}function i(m,c){c.color.getRGB(m.fogColor.value,ES(t)),c.isFog?(m.fogNear.value=c.near,m.fogFar.value=c.far):c.isFogExp2&&(m.fogDensity.value=c.density)}function r(m,c,g,_,S){c.isMeshBasicMaterial||c.isMeshLambertMaterial?o(m,c):c.isMeshToonMaterial?(o(m,c),h(m,c)):c.isMeshPhongMaterial?(o(m,c),f(m,c)):c.isMeshStandardMaterial?(o(m,c),d(m,c),c.isMeshPhysicalMaterial&&p(m,c,S)):c.isMeshMatcapMaterial?(o(m,c),y(m,c)):c.isMeshDepthMaterial?o(m,c):c.isMeshDistanceMaterial?(o(m,c),v(m,c)):c.isMeshNormalMaterial?o(m,c):c.isLineBasicMaterial?(s(m,c),c.isLineDashedMaterial&&a(m,c)):c.isPointsMaterial?l(m,c,g,_):c.isSpriteMaterial?u(m,c):c.isShadowMaterial?(m.color.value.copy(c.color),m.opacity.value=c.opacity):c.isShaderMaterial&&(c.uniformsNeedUpdate=!1)}function o(m,c){m.opacity.value=c.opacity,c.color&&m.diffuse.value.copy(c.color),c.emissive&&m.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity),c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.bumpMap&&(m.bumpMap.value=c.bumpMap,n(c.bumpMap,m.bumpMapTransform),m.bumpScale.value=c.bumpScale,c.side===yn&&(m.bumpScale.value*=-1)),c.normalMap&&(m.normalMap.value=c.normalMap,n(c.normalMap,m.normalMapTransform),m.normalScale.value.copy(c.normalScale),c.side===yn&&m.normalScale.value.negate()),c.displacementMap&&(m.displacementMap.value=c.displacementMap,n(c.displacementMap,m.displacementMapTransform),m.displacementScale.value=c.displacementScale,m.displacementBias.value=c.displacementBias),c.emissiveMap&&(m.emissiveMap.value=c.emissiveMap,n(c.emissiveMap,m.emissiveMapTransform)),c.specularMap&&(m.specularMap.value=c.specularMap,n(c.specularMap,m.specularMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest);const g=e.get(c),_=g.envMap,S=g.envMapRotation;_&&(m.envMap.value=_,Vr.copy(S),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),m.envMapRotation.value.setFromMatrix4(MD.makeRotationFromEuler(Vr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=c.reflectivity,m.ior.value=c.ior,m.refractionRatio.value=c.refractionRatio),c.lightMap&&(m.lightMap.value=c.lightMap,m.lightMapIntensity.value=c.lightMapIntensity,n(c.lightMap,m.lightMapTransform)),c.aoMap&&(m.aoMap.value=c.aoMap,m.aoMapIntensity.value=c.aoMapIntensity,n(c.aoMap,m.aoMapTransform))}function s(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform))}function a(m,c){m.dashSize.value=c.dashSize,m.totalSize.value=c.dashSize+c.gapSize,m.scale.value=c.scale}function l(m,c,g,_){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.size.value=c.size*g,m.scale.value=_*.5,c.map&&(m.map.value=c.map,n(c.map,m.uvTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function u(m,c){m.diffuse.value.copy(c.color),m.opacity.value=c.opacity,m.rotation.value=c.rotation,c.map&&(m.map.value=c.map,n(c.map,m.mapTransform)),c.alphaMap&&(m.alphaMap.value=c.alphaMap,n(c.alphaMap,m.alphaMapTransform)),c.alphaTest>0&&(m.alphaTest.value=c.alphaTest)}function f(m,c){m.specular.value.copy(c.specular),m.shininess.value=Math.max(c.shininess,1e-4)}function h(m,c){c.gradientMap&&(m.gradientMap.value=c.gradientMap)}function d(m,c){m.metalness.value=c.metalness,c.metalnessMap&&(m.metalnessMap.value=c.metalnessMap,n(c.metalnessMap,m.metalnessMapTransform)),m.roughness.value=c.roughness,c.roughnessMap&&(m.roughnessMap.value=c.roughnessMap,n(c.roughnessMap,m.roughnessMapTransform)),c.envMap&&(m.envMapIntensity.value=c.envMapIntensity)}function p(m,c,g){m.ior.value=c.ior,c.sheen>0&&(m.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),m.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(m.sheenColorMap.value=c.sheenColorMap,n(c.sheenColorMap,m.sheenColorMapTransform)),c.sheenRoughnessMap&&(m.sheenRoughnessMap.value=c.sheenRoughnessMap,n(c.sheenRoughnessMap,m.sheenRoughnessMapTransform))),c.clearcoat>0&&(m.clearcoat.value=c.clearcoat,m.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(m.clearcoatMap.value=c.clearcoatMap,n(c.clearcoatMap,m.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,n(c.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(m.clearcoatNormalMap.value=c.clearcoatNormalMap,n(c.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===yn&&m.clearcoatNormalScale.value.negate())),c.dispersion>0&&(m.dispersion.value=c.dispersion),c.iridescence>0&&(m.iridescence.value=c.iridescence,m.iridescenceIOR.value=c.iridescenceIOR,m.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(m.iridescenceMap.value=c.iridescenceMap,n(c.iridescenceMap,m.iridescenceMapTransform)),c.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=c.iridescenceThicknessMap,n(c.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),c.transmission>0&&(m.transmission.value=c.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),c.transmissionMap&&(m.transmissionMap.value=c.transmissionMap,n(c.transmissionMap,m.transmissionMapTransform)),m.thickness.value=c.thickness,c.thicknessMap&&(m.thicknessMap.value=c.thicknessMap,n(c.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=c.attenuationDistance,m.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(m.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(m.anisotropyMap.value=c.anisotropyMap,n(c.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=c.specularIntensity,m.specularColor.value.copy(c.specularColor),c.specularColorMap&&(m.specularColorMap.value=c.specularColorMap,n(c.specularColorMap,m.specularColorMapTransform)),c.specularIntensityMap&&(m.specularIntensityMap.value=c.specularIntensityMap,n(c.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,c){c.matcap&&(m.matcap.value=c.matcap)}function v(m,c){const g=e.get(c).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wD(t,e,n,i){let r={},o={},s=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,_){const S=_.program;i.uniformBlockBinding(g,S)}function u(g,_){let S=r[g.id];S===void 0&&(y(g),S=f(g),r[g.id]=S,g.addEventListener("dispose",m));const C=_.program;i.updateUBOMapping(g,C);const A=e.render.frame;o[g.id]!==A&&(d(g),o[g.id]=A)}function f(g){const _=h();g.__bindingPointIndex=_;const S=t.createBuffer(),C=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function h(){for(let g=0;g<a;g++)if(s.indexOf(g)===-1)return s.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const _=r[g.id],S=g.uniforms,C=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,w=S.length;A<w;A++){const P=Array.isArray(S[A])?S[A]:[S[A]];for(let T=0,x=P.length;T<x;T++){const R=P[T];if(p(R,A,T,C)===!0){const z=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let Y=0;for(let $=0;$<O.length;$++){const X=O[$],j=v(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,z+Y,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,_,S,C){const A=g.value,w=_+"_"+S;if(C[w]===void 0)return typeof A=="number"||typeof A=="boolean"?C[w]=A:C[w]=A.clone(),!0;{const P=C[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function y(g){const _=g.uniforms;let S=0;const C=16;for(let w=0,P=_.length;w<P;w++){const T=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,R=T.length;x<R;x++){const z=T[x],O=Array.isArray(z.value)?z.value:[z.value];for(let Y=0,$=O.length;Y<$;Y++){const X=O[Y],j=v(X),D=S%C,K=D%j.boundary,J=D+K;S+=K,J!==0&&C-J<j.storage&&(S+=C-J),z.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=j.storage}}}const A=S%C;return A>0&&(S+=C-A),g.__size=S,g.__cache={},this}function v(g){const _={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(_.boundary=4,_.storage=4):g.isVector2?(_.boundary=8,_.storage=8):g.isVector3||g.isColor?(_.boundary=16,_.storage=12):g.isVector4?(_.boundary=16,_.storage=16):g.isMatrix3?(_.boundary=48,_.storage=48):g.isMatrix4?(_.boundary=64,_.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),_}function m(g){const _=g.target;_.removeEventListener("dispose",m);const S=s.indexOf(_.__bindingPointIndex);s.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function c(){for(const g in r)t.deleteBuffer(r[g]);s=[],r={},o={}}return{bind:l,update:u,dispose:c}}class TD{constructor(e={}){const{canvas:n=pR(),context:i=null,depth:r=!0,stencil:o=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=s;const p=new Uint32Array(4),y=new Int32Array(4);let v=null,m=null;const c=[],g=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_i,this.toneMapping=Tr,this.toneMappingExposure=1;const _=this;let S=!1,C=0,A=0,w=null,P=-1,T=null;const x=new Vt,R=new Vt;let z=null;const O=new Ke(0);let Y=0,$=n.width,X=n.height,j=1,D=null,K=null;const J=new Vt(0,0,$,X),ae=new Vt(0,0,$,X);let Te=!1;const He=new AS;let W=!1,ie=!1;const ge=new Ct,he=new k,Ue=new Vt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function ut(){return w===null?j:1}let L=i;function et(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Im}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",le,!1),L===null){const N="webgl2";if(L=et(N,E),L===null)throw et(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Le,De,Se,ot,Ce,ze,b,M,H,te,re,ee,Re,de,B,Q,G,ne,ye,fe,pe,Pe,_e,Xe;function I(){Le=new LL(L),Le.init(),Pe=new mD(L,Le),De=new wL(L,Le,e,Pe),Se=new dD(L),ot=new NL(L),Ce=new Q3,ze=new pD(L,Le,Se,Ce,De,Pe,ot),b=new AL(_),M=new PL(_),H=new BR(L),_e=new ML(L,H),te=new DL(L,H,ot,_e),re=new OL(L,te,H,ot),ye=new UL(L,De,ze),Q=new TL(Ce),ee=new Z3(_,b,M,Le,De,_e,Q),Re=new ED(_,Ce),de=new eD,B=new sD(Le),ne=new SL(_,b,M,Se,re,d,l),G=new fD(_,re,De),Xe=new wD(L,ot,De,Se),fe=new EL(L,Le,ot),pe=new IL(L,Le,ot),ot.programs=ee.programs,_.capabilities=De,_.extensions=Le,_.properties=Ce,_.renderLists=de,_.shadowMap=G,_.state=Se,_.info=ot}I();const se=new SD(_,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=Le.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Le.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(E){E!==void 0&&(j=E,this.setSize($,X,!1))},this.getSize=function(E){return E.set($,X)},this.setSize=function(E,N,F=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,X=N,n.width=Math.floor(E*j),n.height=Math.floor(N*j),F===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set($*j,X*j).floor()},this.setDrawingBufferSize=function(E,N,F){$=E,X=N,j=F,n.width=Math.floor(E*F),n.height=Math.floor(N*F),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(J)},this.setViewport=function(E,N,F,V){E.isVector4?J.set(E.x,E.y,E.z,E.w):J.set(E,N,F,V),Se.viewport(x.copy(J).multiplyScalar(j).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,N,F,V){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,N,F,V),Se.scissor(R.copy(ae).multiplyScalar(j).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(E){Se.setScissorTest(Te=E)},this.setOpaqueSort=function(E){D=E},this.setTransparentSort=function(E){K=E},this.getClearColor=function(E){return E.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(E=!0,N=!0,F=!0){let V=0;if(E){let U=!1;if(w!==null){const ue=w.texture.format;U=ue===zm||ue===km||ue===Fm}if(U){const ue=w.texture.type,ve=ue===Ki||ue===lo||ue===ka||ue===ws||ue===Um||ue===Om,Ee=ne.getClearColor(),we=ne.getClearAlpha(),Oe=Ee.r,ke=Ee.g,Ne=Ee.b;ve?(p[0]=Oe,p[1]=ke,p[2]=Ne,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(y[0]=Oe,y[1]=ke,y[2]=Ne,y[3]=we,L.clearBufferiv(L.COLOR,0,y))}else V|=L.COLOR_BUFFER_BIT}N&&(V|=L.DEPTH_BUFFER_BIT),F&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),B.dispose(),Ce.dispose(),b.dispose(),M.dispose(),re.dispose(),_e.dispose(),Xe.dispose(),ee.dispose(),se.dispose(),se.removeEventListener("sessionstart",fn),se.removeEventListener("sessionend",il),Pi.stop()};function q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ot.autoReset,N=G.enabled,F=G.autoUpdate,V=G.needsUpdate,U=G.type;I(),ot.autoReset=E,G.enabled=N,G.autoUpdate=F,G.needsUpdate=V,G.type=U}function le(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const N=E.target;N.removeEventListener("dispose",Ie),je(N)}function je(E){pt(E),Ce.remove(E)}function pt(E){const N=Ce.get(E).programs;N!==void 0&&(N.forEach(function(F){ee.releaseProgram(F)}),E.isShaderMaterial&&ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,F,V,U,ue){N===null&&(N=Be);const ve=U.isMesh&&U.matrixWorld.determinant()<0,Ee=lf(E,N,F,V,U);Se.setMaterial(V,ve);let we=F.index,Oe=1;if(V.wireframe===!0){if(we=te.getWireframeAttribute(F),we===void 0)return;Oe=2}const ke=F.drawRange,Ne=F.attributes.position;let tt=ke.start*Oe,St=(ke.start+ke.count)*Oe;ue!==null&&(tt=Math.max(tt,ue.start*Oe),St=Math.min(St,(ue.start+ue.count)*Oe)),we!==null?(tt=Math.max(tt,0),St=Math.min(St,we.count)):Ne!=null&&(tt=Math.max(tt,0),St=Math.min(St,Ne.count));const Mt=St-tt;if(Mt<0||Mt===1/0)return;_e.setup(U,V,Ee,F,we);let Tn,nt=fe;if(we!==null&&(Tn=H.get(we),nt=pe,nt.setIndex(Tn)),U.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*ut()),nt.setMode(L.LINES)):nt.setMode(L.TRIANGLES);else if(U.isLine){let be=V.linewidth;be===void 0&&(be=1),Se.setLineWidth(be*ut()),U.isLineSegments?nt.setMode(L.LINES):U.isLineLoop?nt.setMode(L.LINE_LOOP):nt.setMode(L.LINE_STRIP)}else U.isPoints?nt.setMode(L.POINTS):U.isSprite&&nt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)nt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))nt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,$t=U._multiDrawCounts,it=U._multiDrawCount,ti=we?H.get(we).bytesPerElement:1,_o=Ce.get(V).currentProgram.getUniforms();for(let An=0;An<it;An++)_o.setValue(L,"_gl_DrawID",An),nt.render(be[An]/ti,$t[An])}else if(U.isInstancedMesh)nt.renderInstances(tt,Mt,U.count);else if(F.isInstancedBufferGeometry){const be=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,$t=Math.min(F.instanceCount,be);nt.renderInstances(tt,Mt,$t)}else nt.render(tt,Mt)};function Nt(E,N,F){E.transparent===!0&&E.side===Bi&&E.forceSinglePass===!1?(E.side=yn,E.needsUpdate=!0,mo(E,N,F),E.side=br,E.needsUpdate=!0,mo(E,N,F),E.side=Bi):mo(E,N,F)}this.compile=function(E,N,F=null){F===null&&(F=E),m=B.get(F),m.init(N),g.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),E!==F&&E.traverseVisible(function(U){U.isLight&&U.layers.test(N.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const V=new Set;return E.traverse(function(U){const ue=U.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){const Ee=ue[ve];Nt(Ee,F,U),V.add(Ee)}else Nt(ue,F,U),V.add(ue)}),g.pop(),m=null,V},this.compileAsync=function(E,N,F=null){const V=this.compile(E,N,F);return new Promise(U=>{function ue(){if(V.forEach(function(ve){Ce.get(ve).currentProgram.isReady()&&V.delete(ve)}),V.size===0){U(E);return}setTimeout(ue,10)}Le.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ye=null;function wn(E){Ye&&Ye(E)}function fn(){Pi.stop()}function il(){Pi.start()}const Pi=new CS;Pi.setAnimationLoop(wn),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(E){Ye=E,se.setAnimationLoop(E),E===null?Pi.stop():Pi.start()},se.addEventListener("sessionstart",fn),se.addEventListener("sessionend",il),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(N),N=se.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,N,w),m=B.get(E,g.length),m.init(N),g.push(m),ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),He.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,W=Q.init(this.clippingPlanes,ie),v=de.get(E,c.length),v.init(),c.push(v),se.enabled===!0&&se.isPresenting===!0){const ue=_.xr.getDepthSensingMesh();ue!==null&&Os(ue,N,-1/0,_.sortObjects)}Os(E,N,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(D,K),Ve=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,Ve&&ne.addToRenderList(v,E),this.info.render.frame++,W===!0&&Q.beginShadows();const F=m.state.shadowsArray;G.render(F,E,N),W===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,U=v.transmissive;if(m.setupLights(),N.isArrayCamera){const ue=N.cameras;if(U.length>0)for(let ve=0,Ee=ue.length;ve<Ee;ve++){const we=ue[ve];ol(V,U,E,we)}Ve&&ne.render(E);for(let ve=0,Ee=ue.length;ve<Ee;ve++){const we=ue[ve];rl(v,E,we,we.viewport)}}else U.length>0&&ol(V,U,E,N),Ve&&ne.render(E),rl(v,E,N);w!==null&&(ze.updateMultisampleRenderTarget(w),ze.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(_,E,N),_e.resetDefaultState(),P=-1,T=null,g.pop(),g.length>0?(m=g[g.length-1],W===!0&&Q.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,c.pop(),c.length>0?v=c[c.length-1]:v=null};function Os(E,N,F,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)F=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||He.intersectsSprite(E)){V&&Ue.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ge);const ve=re.update(E),Ee=E.material;Ee.visible&&v.push(E,ve,Ee,F,Ue.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||He.intersectsObject(E))){const ve=re.update(E),Ee=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ue.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ue.copy(ve.boundingSphere.center)),Ue.applyMatrix4(E.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){const we=ve.groups;for(let Oe=0,ke=we.length;Oe<ke;Oe++){const Ne=we[Oe],tt=Ee[Ne.materialIndex];tt&&tt.visible&&v.push(E,ve,tt,F,Ue.z,Ne)}}else Ee.visible&&v.push(E,ve,Ee,F,Ue.z,null)}}const ue=E.children;for(let ve=0,Ee=ue.length;ve<Ee;ve++)Os(ue[ve],N,F,V)}function rl(E,N,F,V){const U=E.opaque,ue=E.transmissive,ve=E.transparent;m.setupLightsView(F),W===!0&&Q.setGlobalState(_.clippingPlanes,F),V&&Se.viewport(x.copy(V)),U.length>0&&ho(U,N,F),ue.length>0&&ho(ue,N,F),ve.length>0&&ho(ve,N,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function ol(E,N,F,V){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[V.id]===void 0&&(m.state.transmissionRenderTarget[V.id]=new uo(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Qa:Ki,minFilter:Jr,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const ue=m.state.transmissionRenderTarget[V.id],ve=V.viewport||x;ue.setSize(ve.z,ve.w);const Ee=_.getRenderTarget();_.setRenderTarget(ue),_.getClearColor(O),Y=_.getClearAlpha(),Y<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&ne.render(F);const we=_.toneMapping;_.toneMapping=Tr;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),m.setupLightsView(V),W===!0&&Q.setGlobalState(_.clippingPlanes,V),ho(E,F,V),ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Ne=0,tt=N.length;Ne<tt;Ne++){const St=N[Ne],Mt=St.object,Tn=St.geometry,nt=St.material,be=St.group;if(nt.side===Bi&&Mt.layers.test(V.layers)){const $t=nt.side;nt.side=yn,nt.needsUpdate=!0,po(Mt,F,V,Tn,nt,be),nt.side=$t,nt.needsUpdate=!0,ke=!0}}ke===!0&&(ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue))}_.setRenderTarget(Ee),_.setClearColor(O,Y),Oe!==void 0&&(V.viewport=Oe),_.toneMapping=we}function ho(E,N,F){const V=N.isScene===!0?N.overrideMaterial:null;for(let U=0,ue=E.length;U<ue;U++){const ve=E[U],Ee=ve.object,we=ve.geometry,Oe=V===null?ve.material:V,ke=ve.group;Ee.layers.test(F.layers)&&po(Ee,N,F,we,Oe,ke)}}function po(E,N,F,V,U,ue){E.onBeforeRender(_,N,F,V,U,ue),E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),U.transparent===!0&&U.side===Bi&&U.forceSinglePass===!1?(U.side=yn,U.needsUpdate=!0,_.renderBufferDirect(F,N,V,U,E,ue),U.side=br,U.needsUpdate=!0,_.renderBufferDirect(F,N,V,U,E,ue),U.side=Bi):_.renderBufferDirect(F,N,V,U,E,ue),E.onAfterRender(_,N,F,V,U,ue)}function mo(E,N,F){N.isScene!==!0&&(N=Be);const V=Ce.get(E),U=m.state.lights,ue=m.state.shadowsArray,ve=U.state.version,Ee=ee.getParameters(E,U.state,ue,N,F),we=ee.getProgramCacheKey(Ee);let Oe=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?M:b).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Ie),Oe=new Map,V.programs=Oe);let ke=Oe.get(we);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===ve)return vo(E,Ee),ke}else Ee.uniforms=ee.getUniforms(E),E.onBeforeCompile(Ee,_),ke=ee.acquireProgram(Ee,we),Oe.set(we,ke),V.uniforms=Ee.uniforms;const Ne=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=Q.uniform),vo(E,Ee),V.needsLights=Ut(E),V.lightsStateVersion=ve,V.needsLights&&(Ne.ambientLightColor.value=U.state.ambient,Ne.lightProbe.value=U.state.probe,Ne.directionalLights.value=U.state.directional,Ne.directionalLightShadows.value=U.state.directionalShadow,Ne.spotLights.value=U.state.spot,Ne.spotLightShadows.value=U.state.spotShadow,Ne.rectAreaLights.value=U.state.rectArea,Ne.ltc_1.value=U.state.rectAreaLTC1,Ne.ltc_2.value=U.state.rectAreaLTC2,Ne.pointLights.value=U.state.point,Ne.pointLightShadows.value=U.state.pointShadow,Ne.hemisphereLights.value=U.state.hemi,Ne.directionalShadowMap.value=U.state.directionalShadowMap,Ne.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Ne.spotShadowMap.value=U.state.spotShadowMap,Ne.spotLightMatrix.value=U.state.spotLightMatrix,Ne.spotLightMap.value=U.state.spotLightMap,Ne.pointShadowMap.value=U.state.pointShadowMap,Ne.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function go(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=wu.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function vo(E,N){const F=Ce.get(E);F.outputColorSpace=N.outputColorSpace,F.batching=N.batching,F.batchingColor=N.batchingColor,F.instancing=N.instancing,F.instancingColor=N.instancingColor,F.instancingMorph=N.instancingMorph,F.skinning=N.skinning,F.morphTargets=N.morphTargets,F.morphNormals=N.morphNormals,F.morphColors=N.morphColors,F.morphTargetsCount=N.morphTargetsCount,F.numClippingPlanes=N.numClippingPlanes,F.numIntersection=N.numClipIntersection,F.vertexAlphas=N.vertexAlphas,F.vertexTangents=N.vertexTangents,F.toneMapping=N.toneMapping}function lf(E,N,F,V,U){N.isScene!==!0&&(N=Be),ze.resetTextureUnits();const ue=N.fog,ve=V.isMeshStandardMaterial?N.environment:null,Ee=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ur,we=(V.isMeshStandardMaterial?M:b).get(V.envMap||ve),Oe=V.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ke=!!F.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!F.morphAttributes.position,tt=!!F.morphAttributes.normal,St=!!F.morphAttributes.color;let Mt=Tr;V.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Mt=_.toneMapping);const Tn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,nt=Tn!==void 0?Tn.length:0,be=Ce.get(V),$t=m.state.lights;if(W===!0&&(ie===!0||E!==T)){const zn=E===T&&V.id===P;Q.setState(V,E,zn)}let it=!1;V.version===be.__version?(be.needsLights&&be.lightsStateVersion!==$t.state.version||be.outputColorSpace!==Ee||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==we||V.fog===!0&&be.fog!==ue||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Q.numPlanes||be.numIntersection!==Q.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==ke||be.morphTargets!==Ne||be.morphNormals!==tt||be.morphColors!==St||be.toneMapping!==Mt||be.morphTargetsCount!==nt)&&(it=!0):(it=!0,be.__version=V.version);let ti=be.currentProgram;it===!0&&(ti=mo(V,N,U));let _o=!1,An=!1,uf=!1;const Pt=ti.getUniforms(),er=be.uniforms;if(Se.useProgram(ti.program)&&(_o=!0,An=!0,uf=!0),V.id!==P&&(P=V.id,An=!0),_o||T!==E){Pt.setValue(L,"projectionMatrix",E.projectionMatrix),Pt.setValue(L,"viewMatrix",E.matrixWorldInverse);const zn=Pt.map.cameraPosition;zn!==void 0&&zn.setValue(L,he.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&Pt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Pt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),T!==E&&(T=E,An=!0,uf=!0)}if(U.isSkinnedMesh){Pt.setOptional(L,U,"bindMatrix"),Pt.setOptional(L,U,"bindMatrixInverse");const zn=U.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Pt.setValue(L,"boneTexture",zn.boneTexture,ze))}U.isBatchedMesh&&(Pt.setOptional(L,U,"batchingTexture"),Pt.setValue(L,"batchingTexture",U._matricesTexture,ze),Pt.setOptional(L,U,"batchingIdTexture"),Pt.setValue(L,"batchingIdTexture",U._indirectTexture,ze),Pt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Pt.setValue(L,"batchingColorTexture",U._colorsTexture,ze));const cf=F.morphAttributes;if((cf.position!==void 0||cf.normal!==void 0||cf.color!==void 0)&&ye.update(U,F,ti),(An||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,Pt.setValue(L,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(er.envMap.value=we,er.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(er.envMapIntensity.value=N.environmentIntensity),An&&(Pt.setValue(L,"toneMappingExposure",_.toneMappingExposure),be.needsLights&&xt(er,uf),ue&&V.fog===!0&&Re.refreshFogUniforms(er,ue),Re.refreshMaterialUniforms(er,V,j,X,m.state.transmissionRenderTarget[E.id]),wu.upload(L,go(be),er,ze)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(wu.upload(L,go(be),er,ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Pt.setValue(L,"center",U.center),Pt.setValue(L,"modelViewMatrix",U.modelViewMatrix),Pt.setValue(L,"normalMatrix",U.normalMatrix),Pt.setValue(L,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const zn=V.uniformsGroups;for(let ff=0,OS=zn.length;ff<OS;ff++){const jm=zn[ff];Xe.update(jm,ti),Xe.bind(jm,ti)}}return ti}function xt(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Ut(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,F){Ce.get(E.texture).__webglTexture=N,Ce.get(E.depthTexture).__webglTexture=F;const V=Ce.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=F===void 0,V.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const F=Ce.get(E);F.__webglFramebuffer=N,F.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,F=0){w=E,C=N,A=F;let V=!0,U=null,ue=!1,ve=!1;if(E){const we=Ce.get(E);we.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(L.FRAMEBUFFER,null),V=!1):we.__webglFramebuffer===void 0?ze.setupRenderTarget(E):we.__hasExternalTextures&&ze.rebindTextures(E,Ce.get(E.texture).__webglTexture,Ce.get(E.depthTexture).__webglTexture);const Oe=E.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ve=!0);const ke=Ce.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ke[N])?U=ke[N][F]:U=ke[N],ue=!0):E.samples>0&&ze.useMultisampledRTT(E)===!1?U=Ce.get(E).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[F]:U=ke,x.copy(E.viewport),R.copy(E.scissor),z=E.scissorTest}else x.copy(J).multiplyScalar(j).floor(),R.copy(ae).multiplyScalar(j).floor(),z=Te;if(Se.bindFramebuffer(L.FRAMEBUFFER,U)&&V&&Se.drawBuffers(E,U),Se.viewport(x),Se.scissor(R),Se.setScissorTest(z),ue){const we=Ce.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,F)}else if(ve){const we=Ce.get(E.texture),Oe=N||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,F||0,Oe)}P=-1},this.readRenderTargetPixels=function(E,N,F,V,U,ue,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const we=E.texture,Oe=we.format,ke=we.type;if(!De.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&F>=0&&F<=E.height-U&&L.readPixels(N,F,V,U,Pe.convert(Oe),Pe.convert(ke),ue)}finally{const we=w!==null?Ce.get(w).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,N,F,V,U,ue,ve){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ce.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Se.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const we=E.texture,Oe=we.format,ke=we.type;if(!De.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&F>=0&&F<=E.height-U){const Ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(N,F,V,U,Pe.convert(Oe),Pe.convert(ke),0),L.flush();const tt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await mR(L,tt,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,Ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(Ne),L.deleteSync(tt)}return ue}}finally{const we=w!==null?Ce.get(w).__webglFramebuffer:null;Se.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(E,N=null,F=0){E.isTexture!==!0&&(ma("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-F),U=Math.floor(E.image.width*V),ue=Math.floor(E.image.height*V),ve=N!==null?N.x:0,Ee=N!==null?N.y:0;ze.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,ve,Ee,U,ue),Se.unbindTexture()},this.copyTextureToTexture=function(E,N,F=null,V=null,U=0){E.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],U=arguments[3]||0,F=null);let ue,ve,Ee,we,Oe,ke;F!==null?(ue=F.max.x-F.min.x,ve=F.max.y-F.min.y,Ee=F.min.x,we=F.min.y):(ue=E.image.width,ve=E.image.height,Ee=0,we=0),V!==null?(Oe=V.x,ke=V.y):(Oe=0,ke=0);const Ne=Pe.convert(N.format),tt=Pe.convert(N.type);ze.setTexture2D(N,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const St=L.getParameter(L.UNPACK_ROW_LENGTH),Mt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Tn=L.getParameter(L.UNPACK_SKIP_PIXELS),nt=L.getParameter(L.UNPACK_SKIP_ROWS),be=L.getParameter(L.UNPACK_SKIP_IMAGES),$t=E.isCompressedTexture?E.mipmaps[U]:E.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,$t.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$t.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Oe,ke,ue,ve,Ne,tt,$t.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Oe,ke,$t.width,$t.height,Ne,$t.data):L.texSubImage2D(L.TEXTURE_2D,U,Oe,ke,ue,ve,Ne,tt,$t),L.pixelStorei(L.UNPACK_ROW_LENGTH,St),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Tn),L.pixelStorei(L.UNPACK_SKIP_ROWS,nt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),U===0&&N.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(E,N,F=null,V=null,U=0){E.isTexture!==!0&&(ma("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],U=arguments[4]||0);let ue,ve,Ee,we,Oe,ke,Ne,tt,St;const Mt=E.isCompressedTexture?E.mipmaps[U]:E.image;F!==null?(ue=F.max.x-F.min.x,ve=F.max.y-F.min.y,Ee=F.max.z-F.min.z,we=F.min.x,Oe=F.min.y,ke=F.min.z):(ue=Mt.width,ve=Mt.height,Ee=Mt.depth,we=0,Oe=0,ke=0),V!==null?(Ne=V.x,tt=V.y,St=V.z):(Ne=0,tt=0,St=0);const Tn=Pe.convert(N.format),nt=Pe.convert(N.type);let be;if(N.isData3DTexture)ze.setTexture3D(N,0),be=L.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)ze.setTexture2DArray(N,0),be=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,N.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=L.getParameter(L.UNPACK_ROW_LENGTH),it=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ti=L.getParameter(L.UNPACK_SKIP_PIXELS),_o=L.getParameter(L.UNPACK_SKIP_ROWS),An=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),E.isDataTexture||E.isData3DTexture?L.texSubImage3D(be,U,Ne,tt,St,ue,ve,Ee,Tn,nt,Mt.data):N.isCompressedArrayTexture?L.compressedTexSubImage3D(be,U,Ne,tt,St,ue,ve,Ee,Tn,Mt.data):L.texSubImage3D(be,U,Ne,tt,St,ue,ve,Ee,Tn,nt,Mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,$t),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,it),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ti),L.pixelStorei(L.UNPACK_SKIP_ROWS,_o),L.pixelStorei(L.UNPACK_SKIP_IMAGES,An),U===0&&N.generateMipmaps&&L.generateMipmap(be),Se.unbindTexture()},this.initRenderTarget=function(E){Ce.get(E).__webglFramebuffer===void 0&&ze.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?ze.setTextureCube(E,0):E.isData3DTexture?ze.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?ze.setTexture2DArray(E,0):ze.setTexture2D(E,0),Se.unbindTexture()},this.resetState=function(){C=0,A=0,w=null,Se.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Bm?"display-p3":"srgb",n.unpackColorSpace=rt.workingColorSpace===rf?"display-p3":"srgb"}}class Wm{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ke(e),this.density=n}clone(){return new Wm(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rv extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class $m extends Or{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,s=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:s,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(s+a,Math.PI);let u=0;const f=[],h=new k,d=new k,p=[],y=[],v=[],m=[];for(let c=0;c<=i;c++){const g=[],_=c/i;let S=0;c===0&&s===0?S=.5/n:c===i&&l===Math.PI&&(S=-.5/n);for(let C=0;C<=n;C++){const A=C/n;h.x=-e*Math.cos(r+A*o)*Math.sin(s+_*a),h.y=e*Math.cos(s+_*a),h.z=e*Math.sin(r+A*o)*Math.sin(s+_*a),y.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(A+S,1-_),g.push(u++)}f.push(g)}for(let c=0;c<i;c++)for(let g=0;g<n;g++){const _=f[c][g+1],S=f[c][g],C=f[c+1][g],A=f[c+1][g+1];(c!==0||s>0)&&p.push(_,S,A),(c!==i-1||l<Math.PI)&&p.push(S,C,A)}this.setIndex(p),this.setAttribute("position",new Ri(y,3)),this.setAttribute("normal",new Ri(v,3)),this.setAttribute("uv",new Ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $m(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Pv=new Ct;class AD{constructor(e,n,i=0,r=1/0){this.ray=new yS(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Pv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Pv),this}intersectObject(e,n=!0,i=[]){return pp(e,this,i,n),i.sort(Lv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)pp(e[r],this,i,n);return i.sort(Lv),i}}function Lv(t,e){return t.distance-e.distance}function pp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const o=t.children;for(let s=0,a=o.length;s<a;s++)pp(o[s],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Im}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Im);const IS={KeyA:"strafeLeft",KeyD:"strafeRight",KeyW:"forward",KeyS:"back",KeyE:"up",KeyQ:"down",ShiftLeft:"run"},CD=Object.keys(IS);function bD(t){return CD.includes(t)}class RD{constructor(){Me(this,"intention",{forward:!1,back:!1,strafeLeft:!1,strafeRight:!1,up:!1,down:!1,run:!1});Me(this,"onKeyDown",e=>{this.changeIntention(e.code,!0)});Me(this,"onKeyUp",e=>{this.changeIntention(e.code,!1)});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}changeIntention(e,n){bD(e)&&(this.intention[IS[e]]=n)}}function PD(t){return Math.min(1,Math.max(0,t))}function LD(t,e,n){return t+n*(e-t)}function DD(t,e,n){return(n-t)/(e-t)}const Dv=new k(0,0,-1),Iv=new k,Ed=30,Nv=90;class ID{constructor(e,n,i=1){Me(this,"lastMouseX",null);Me(this,"lastMouseY",null);Me(this,"keyNav");Me(this,"movement",new k);Me(this,"touchMovementIntention",new k);Me(this,"movementEased",new k);Me(this,"movementEasedRotated",new k);Me(this,"mouseDown",!1);Me(this,"touchesJobs",new Map);Me(this,"touchesDown",new Map);Me(this,"lastTouchesX",new Map);Me(this,"lastTouchesY",new Map);Me(this,"paused",!1);Me(this,"fovSlider",Ed);Me(this,"onWheel",e=>{this.paused||(this.fovSlider=PD(this.fovSlider+e.deltaY*.01),this._camera.fov=LD(Ed,Nv,this.fovSlider),this._camera.updateProjectionMatrix())});Me(this,"onMouseDown",e=>{this.paused||(this.mouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,window.addEventListener("mousemove",this.onMouseMove))});Me(this,"onTouchStart",e=>{if(!this.paused)for(const n of e.touches){const i=n.identifier;this.touchesDown.set(i,!0),this.lastTouchesX.set(i,n.clientX),this.lastTouchesY.set(i,n.clientY),n.clientX<window.innerWidth*.15||n.clientX>window.innerWidth*.85?this.touchesJobs.set(i,"fly"):n.clientY>window.innerHeight*.5?this.touchesJobs.set(i,"move"):this.touchesJobs.set(i,"look")}});Me(this,"onMouseUp",()=>{this.paused||(this.mouseDown=!1,this.lastMouseX=null,this.lastMouseY=null,window.removeEventListener("mousemove",this.onMouseMove))});Me(this,"onTouchEnd",e=>{if(this.paused)return;const n=Array.from(this.touchesDown.keys()),i=[];for(const r of e.touches){const o=r.identifier;i.push(o)}for(const r of n)if(!i.includes(r)){switch(this.touchesDown.delete(r),this.touchesJobs.get(r)){case"move":{this.touchMovementIntention.x=0,this.touchMovementIntention.z=0;break}case"fly":{this.touchMovementIntention.y=0;break}}this.touchesJobs.delete(r),this.lastTouchesX.delete(r),this.lastTouchesY.delete(r)}});Me(this,"onMouseMove",e=>{if(!this.paused){if(this.lastMouseX!==null&&this.lastMouseY!==null){const n=e.clientX-this.lastMouseX,i=e.clientY-this.lastMouseY;this.orbitCamera(n,i)}this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}});Me(this,"onTouchMove",e=>{if(!this.paused)for(const n of e.touches){const i=n.identifier;if(this.touchesDown.has(i)&&this.lastTouchesX.has(i)&&this.lastTouchesY.has(i)){const r=n.clientX-this.lastTouchesX.get(i),o=n.clientY-this.lastTouchesY.get(i);switch(this.lastTouchesX.set(i,n.clientX),this.lastTouchesY.set(i,n.clientY),this.touchesJobs.get(i)){case"look":{this.orbitCamera(r,o);break}case"move":{this.touchMovementIntention.x+=r,this.touchMovementIntention.z+=o;break}case"fly":{this.touchMovementIntention.y-=o;break}}}}});this._camera=e,this._canvas=n,this._speed=i,this.keyNav=new RD,n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("touchstart",this.onTouchStart),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mouseup",this.onMouseUp),this.fovSlider=DD(Ed,Nv,e.fov),document.addEventListener("wheel",this.onWheel)}stopLookingAround(){this.onMouseUp()}orbitCamera(e,n){this._camera.rotateX(n*-.01),this._camera.rotateY(e*-.01)}simulate(){const e=this.keyNav.intention;this.movement.x=(e.strafeLeft?-1:0)+(e.strafeRight?1:0),this.movement.y=(e.down?-1:0)+(e.up?1:0),this.movement.z=(e.forward?-1:0)+(e.back?1:0),Iv.copy(this.touchMovementIntention).normalize(),this.movement.add(Iv),this.movement.multiplyScalar((e.run?.2:.1)*this._speed),this.movementEased.lerp(this.movement,.1),this.movementEasedRotated.copy(this.movementEased).applyQuaternion(this._camera.quaternion),this._camera.position.add(this.movementEasedRotated),this._camera.updateMatrix(),Dv.set(0,0,-1).applyMatrix4(this._camera.matrix),this._camera.lookAt(Dv),this._camera.updateMatrix(),this._camera.updateMatrixWorld()}cleanup(){this._canvas.removeEventListener("mousedown",this.onMouseDown),this._canvas.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("wheel",this.onWheel)}}const Uv=new Je,ND=new Map;for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)if(Math.abs(n)===1||Math.abs(e)===1||Math.abs(t)===1){const i=new k(n,e,t).normalize(),r=t*100+e*10+n;ND.set(r,i)}class UD{constructor(e,n,i){Me(this,"mvPlayerPos");Me(this,"viewControls");Me(this,"playerIntentSignal",new $x);Me(this,"lastTimeClicked",0);Me(this,"editting",!1);Me(this,"startWorldEdit",e=>{const n=e.timeStamp-this.lastTimeClicked;this.lastTimeClicked=e.timeStamp,!(n>300)&&(this.editting=!0,this.viewControls.stopLookingAround(),this.makeCubeAtMouseEvent(e,"editStart"))});Me(this,"raycaster",new AD);Me(this,"onMoveWorldEdit",e=>{this.editting&&this.makeCubeAtMouseEvent(e,"editMove")});Me(this,"stopWorldEdit",e=>{this.editting&&(this.editting=!1,this.makeCubeAtMouseEvent(e,"editEnd"))});Me(this,"time",0);Me(this,"simulate",e=>{this.time+=e,this.viewControls.simulate()});Me(this,"cleanup",()=>{document.removeEventListener("mousedown",this.startWorldEdit),document.removeEventListener("mousemove",this.onMoveWorldEdit),document.removeEventListener("mouseup",this.stopWorldEdit),this.viewControls.cleanup()});this._game=e,this._camera=n,n.name="player",this.viewControls=new ID(n,i,.8);const r=new k;this.mvPlayerPos=r,document.addEventListener("mousedown",this.startWorldEdit),document.addEventListener("mousemove",this.onMoveWorldEdit),document.addEventListener("mouseup",this.stopWorldEdit)}makeCubeAtMouseEvent(e,n){Uv.set(e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*-2+1),this.raycaster.setFromCamera(Uv,this._camera);const i=this.raycaster.ray.origin.clone().add(this.raycaster.ray.direction);this.playerIntentSignal.emit({intent:n,position:i})}}var NS={},US={},Xm={};Xm.__esModule=!0;var OD=function(){function t(e,n){this.memoizationEntryCollection={},this.noKeysValue=t.NoValue,this.equalityComparers=e,this.addSelector=n}return t.prototype.getOrAdd=function(e){return e.length===0?this.noKeysValue!==t.NoValue?this.noKeysValue:this.noKeysValue=this.addSelector(e):this.getOrAddInternal(this.memoizationEntryCollection,e,0)},t.prototype.getOrAddInternal=function(e,n,i){var r=n[i],o=this.equalityComparers[i]||t.DefaultEqualityComparer,s=o.getHashCode(r),a=this.getOrAddForHashCode(e,s),l=this.getOrAddByKey(a,r,o);return i+1<n.length?this.getOrAddInternal(l.nextKeys,n,i+1):(l.result===t.NoValue&&(l.result=this.addSelector(n)),l.result)},t.prototype.getOrAddForHashCode=function(e,n){var i=e[n];return i||(i=[],e[n]=i),i},t.prototype.getOrAddByKey=function(e,n,i){for(var r=0,o=e;r<o.length;r++){var s=o[r];if(i.equals(n,s.key))return s}var a={key:n,nextKeys:{},result:t.NoValue};return e.push(a),a},t.NoValue={},t.DefaultEqualityComparer={getHashCode:function(e){return+e},equals:function(e,n){return e===n}},t}();Xm.MemoizationLookup=OD;(function(t){t.__esModule=!0;var e=Xm;(function(n){function i(r){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];var a=new e.MemoizationLookup(o||[],function(u){return r.apply(void 0,u)}),l=function(){return a.getOrAdd(Array.prototype.slice.call(arguments,[]))};return l}n.makeMemoized=i})(t.Memoizer||(t.Memoizer={}))})(US);(function(t){function e(n){for(var i in n)t.hasOwnProperty(i)||(t[i]=n[i])}t.__esModule=!0,e(US)})(NS);function wd(t,e=1e-5){return t<-e?-1:t>e?1:0}function FD(t,e,n,i=.005){const r=new $m(.02,8,5,Math.PI*.125),o=r.attributes.position.array,s=r.attributes.normal.array,a=new k,l=new k,u=t*.5-i,f=e*.5-i,h=n*.5-i;for(let d=0;d<s.length;d+=3)a.fromArray(s,d),l.fromArray(o,d),a.round(),a.y===1&&a.set(0,1,0),a.y===-1&&a.set(0,-1,0),a.toArray(s,d),a.multiplyScalar(i),a.x+=u*wd(l.x),a.y+=f*wd(l.y),a.z+=h*wd(l.z),a.toArray(o,d);return r}const Ov=NS.Memoizer.makeMemoized(FD);function Td(t){return t*(.5-Math.random())}const kD=new Ct;class zD{constructor(e,n,i){Me(this,"worldContainer");Me(this,"_paused",!1);Me(this,"_player");Me(this,"oldCubes",new Map);Me(this,"onPlayerIntent",e=>{const n=e.position,i=`${n.x};${n.y};${n.z}`;if(this.oldCubes.has(i))return;const r=.1,o=new Ke(Math.random(),Math.random(),Math.random()),s=new fi(Ov(r,r,r,.02),new sc({color:o}));s.castShadow=!0,s.receiveShadow=!0,s.position.copy(n),this.addStatic(s),this.oldCubes.set(i,s)});Me(this,"simulate",e=>{this._paused||this._player.simulate(e)});Me(this,"cleanup",()=>{this._player.cleanup()});this.pivot=e,this.camera=n;const r=new nn;this.worldContainer=r,this.pivot.add(r);for(let o=0;o<100;o++){const s=new fi(Ov(1,1,1,.05),new sc({color:new Ke(Math.random(),Math.random(),Math.random())}));s.position.set(Td(50),Td(50),Td(50)),this.addStatic(s)}this._player=new UD(this,n,i.domElement),this._player.playerIntentSignal.listen(this.onPlayerIntent)}get paused(){return this._paused}set paused(e){this._paused=e,this._player.viewControls.paused=e}addStatic(e){this.worldContainer.add(e),e.updateMatrixWorld()}removeStatic(e){this.worldContainer.remove(e)}render(){this._paused||(performance.now()*.001,this._player.mvPlayerPos.copy(this.camera.position).applyMatrix4(kD))}}function BD(t,e){function n(){for(const i of t)i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix();e.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",n)}let Ad;function mp(){if(!Ad){let t=function(){u.setPixelRatio(cs.finalDevicePixelRatio.value),u.setSize(window.innerWidth,window.innerHeight,!1)},e=function(){const m=performance.now();for(;h<m;)f&&f(.016666666666666666),h+=16.666666666666668},n=function(){u.clearColor(),u.render(i,s),u.clearDepth(),u.render(r,a),y.render()};const i=new Rv;i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1;const r=new Rv;r.matrixAutoUpdate=!1,r.matrixWorldAutoUpdate=!1;const o=16*4*32,s=new Pn(75,window.innerWidth/window.innerHeight,.01,o),a=new Pn(30,window.innerWidth/window.innerHeight,.05,200),l=new URLSearchParams(window.location.search);i.add(s),i.background=new Ke(5609898),r.add(a),i.fog=new Wm(7838139,.001),s.position.set(Number.parseFloat(l.get("x")||"0"),Number.parseFloat(l.get("y")||"0")+1.15,Number.parseFloat(l.get("z")||"0")),s.updateMatrixWorld(),a.position.set(0,0,100),a.updateMatrixWorld();const u=new TD({logarithmicDepthBuffer:!0});u.shadowMap.enabled=!0,u.shadowMap.type=nS,u.autoClear=!1,u.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(u.domElement);for(const m of["-moz-crisp-edges","-webkit-crisp-edges","crisp-edges","pixelated"])u.domElement.style.setProperty("image-rendering",m);cs.finalDevicePixelRatio.listen(t),cs.onSizeChange(t);let f,h=performance.now();setInterval(e,10),u.setAnimationLoop(n),BD([s,a],u);const d=new nn;i.add(d);const p=new nn;r.add(p);let y=new zD(d,s,u);const v={renderer:u,game:y};f=y.simulate,Ad=v}return Ad}function HD(){const[t,e]=Ae.useState(!1);return mp().renderer.domElement.className=t?"blur":"",Fe.jsxs("div",{className:`${t?"settingsOpen":"settingsClosed"} panel`,children:[Fe.jsx(pE,{open:t,onClick:()=>{e(!t),mp().game.paused=!t}}),t&&Fe.jsx(_b,{})]})}function VD(){return Fe.jsxs(Fe.Fragment,{children:[Fe.jsx(HD,{}),Fe.jsx(zf,{type:"h"}),Fe.jsx(zf,{type:"s"}),Fe.jsx(zf,{type:"v"})]})}const GD=Cd.createRoot(document.getElementById("root"));GD.render(Fe.jsx(jv.StrictMode,{children:Fe.jsx(VD,{})}));mp();
//# sourceMappingURL=index-BZVRFYtO.js.map
