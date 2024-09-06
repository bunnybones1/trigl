var fM=Object.defineProperty;var dM=(t,e,n)=>e in t?fM(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var ve=(t,e,n)=>dM(t,typeof e!="symbol"?e+"":e,n);function hM(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function pM(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function zr(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(n,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),n}var c_={exports:{}},Ac={},f_={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),mM=Symbol.for("react.portal"),gM=Symbol.for("react.fragment"),vM=Symbol.for("react.strict_mode"),_M=Symbol.for("react.profiler"),yM=Symbol.for("react.provider"),xM=Symbol.for("react.context"),SM=Symbol.for("react.forward_ref"),MM=Symbol.for("react.suspense"),EM=Symbol.for("react.memo"),wM=Symbol.for("react.lazy"),gg=Symbol.iterator;function TM(t){return t===null||typeof t!="object"?null:(t=gg&&t[gg]||t["@@iterator"],typeof t=="function"?t:null)}var d_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h_=Object.assign,p_={};function ko(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}ko.prototype.isReactComponent={};ko.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ko.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function m_(){}m_.prototype=ko.prototype;function Np(t,e,n){this.props=t,this.context=e,this.refs=p_,this.updater=n||d_}var Dp=Np.prototype=new m_;Dp.constructor=Np;h_(Dp,ko.prototype);Dp.isPureReactComponent=!0;var vg=Array.isArray,g_=Object.prototype.hasOwnProperty,Up={current:null},v_={key:!0,ref:!0,__self:!0,__source:!0};function __(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)g_.call(e,i)&&!v_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:nl,type:t,key:s,ref:o,props:r,_owner:Up.current}}function AM(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Op(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function bM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _g=/\/+/g;function Lf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bM(""+t.key):e.toString(36)}function mu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case mM:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Lf(o,0):i,vg(r)?(n="",t!=null&&(n=t.replace(_g,"$&/")+"/"),mu(r,e,n,"",function(u){return u})):r!=null&&(Op(r)&&(r=AM(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_g,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Lf(s,a);o+=mu(s,e,n,l,r)}else if(l=TM(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Lf(s,a++),o+=mu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ml(t,e,n){if(t==null)return t;var i=[],r=0;return mu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function CM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},gu={transition:null},RM={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:gu,ReactCurrentOwner:Up};function y_(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:Ml,forEach:function(t,e,n){Ml(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ml(t,function(){e++}),e},toArray:function(t){return Ml(t,function(e){return e})||[]},only:function(t){if(!Op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=ko;Xe.Fragment=gM;Xe.Profiler=_M;Xe.PureComponent=Np;Xe.StrictMode=vM;Xe.Suspense=MM;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=RM;Xe.act=y_;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=h_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Up.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)g_.call(e,l)&&!v_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:nl,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:xM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yM,_context:t},t.Consumer=t};Xe.createElement=__;Xe.createFactory=function(t){var e=__.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:SM,render:t}};Xe.isValidElement=Op;Xe.lazy=function(t){return{$$typeof:wM,_payload:{_status:-1,_result:t},_init:CM}};Xe.memo=function(t,e){return{$$typeof:EM,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=gu.transition;gu.transition={};try{t()}finally{gu.transition=e}};Xe.unstable_act=y_;Xe.useCallback=function(t,e){return gn.current.useCallback(t,e)};Xe.useContext=function(t){return gn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return gn.current.useEffect(t,e)};Xe.useId=function(){return gn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return gn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Xe.useRef=function(t){return gn.current.useRef(t)};Xe.useState=function(t){return gn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return gn.current.useTransition()};Xe.version="18.3.1";f_.exports=Xe;var Te=f_.exports;const x_=pM(Te),yg=hM({__proto__:null,default:x_},[Te]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PM=Te,LM=Symbol.for("react.element"),IM=Symbol.for("react.fragment"),NM=Object.prototype.hasOwnProperty,DM=PM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,UM={key:!0,ref:!0,__self:!0,__source:!0};function S_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)NM.call(e,i)&&!UM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:LM,type:t,key:s,ref:o,props:r,_owner:DM.current}}Ac.Fragment=IM;Ac.jsx=S_;Ac.jsxs=S_;c_.exports=Ac;var Fe=c_.exports,$d={},M_={exports:{}},Hn={},E_={exports:{}},w_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,K){var J=I.length;I.push(K);e:for(;0<J;){var ae=J-1>>>1,Ae=I[ae];if(0<r(Ae,K))I[ae]=K,I[J]=Ae,J=ae;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var K=I[0],J=I.pop();if(J!==K){I[0]=J;e:for(var ae=0,Ae=I.length,He=Ae>>>1;ae<He;){var $=2*(ae+1)-1,ie=I[$],ge=$+1,he=I[ge];if(0>r(ie,J))ge<Ae&&0>r(he,ie)?(I[ae]=he,I[ge]=J,ae=ge):(I[ae]=ie,I[$]=J,ae=$);else if(ge<Ae&&0>r(he,J))I[ae]=he,I[ge]=J,ae=ge;else break e}}return K}function r(I,K){var J=I.sortIndex-K.sortIndex;return J!==0?J:I.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(I){for(var K=n(u);K!==null;){if(K.callback===null)i(u);else if(K.startTime<=I)i(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function x(I){if(g=!1,y(I),!v)if(n(l)!==null)v=!0,Y(b);else{var K=n(u);K!==null&&X(x,K.startTime-I)}}function b(I,K){v=!1,g&&(g=!1,h(P),P=-1),p=!0;var J=d;try{for(y(K),f=n(l);f!==null&&(!(f.expirationTime>K)||I&&!R());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,d=f.priorityLevel;var Ae=ae(f.expirationTime<=K);K=t.unstable_now(),typeof Ae=="function"?f.callback=Ae:f===n(l)&&i(l),y(K)}else i(l);f=n(l)}if(f!==null)var He=!0;else{var $=n(u);$!==null&&X(x,$.startTime-K),He=!1}return He}finally{f=null,d=J,p=!1}}var A=!1,E=null,P=-1,T=5,S=-1;function R(){return!(t.unstable_now()-S<T)}function z(){if(E!==null){var I=t.unstable_now();S=I;var K=!0;try{K=E(!0,I)}finally{K?O():(A=!1,E=null)}}else A=!1}var O;if(typeof _=="function")O=function(){_(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,H=j.port2;j.port1.onmessage=z,O=function(){H.postMessage(null)}}else O=function(){m(z,0)};function Y(I){E=I,A||(A=!0,O())}function X(I,K){P=m(function(){I(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,Y(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(d){case 1:case 2:case 3:var K=3;break;default:K=d}var J=d;d=K;try{return I()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=d;d=I;try{return K()}finally{d=J}},t.unstable_scheduleCallback=function(I,K,J){var ae=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ae+J:ae):J=ae,I){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=J+Ae,I={id:c++,callback:K,priorityLevel:I,startTime:J,expirationTime:Ae,sortIndex:-1},J>ae?(I.sortIndex=J,e(u,I),n(l)===null&&I===n(u)&&(g?(h(P),P=-1):g=!0,X(x,J-ae))):(I.sortIndex=Ae,e(l,I),v||p||(v=!0,Y(b))),I},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(I){var K=d;return function(){var J=d;d=K;try{return I.apply(this,arguments)}finally{d=J}}}})(w_);E_.exports=w_;var OM=E_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var FM=Te,Bn=OM;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var T_=new Set,Ia={};function _s(t,e){To(t,e),To(t+"Capture",e)}function To(t,e){for(Ia[t]=e,t=0;t<e.length;t++)T_.add(e[t])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xd=Object.prototype.hasOwnProperty,kM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,xg={},Sg={};function zM(t){return Xd.call(Sg,t)?!0:Xd.call(xg,t)?!1:kM.test(t)?Sg[t]=!0:(xg[t]=!0,!1)}function BM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HM(t,e,n,i){if(e===null||typeof e>"u"||BM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Fp=/[\-:]([a-z])/g;function kp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Jt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Fp,kp);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Fp,kp);Jt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function zp(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(HM(e,n,r,i)&&(n=null),i||r===null?zM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ar=FM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,El=Symbol.for("react.element"),Zs=Symbol.for("react.portal"),Qs=Symbol.for("react.fragment"),Bp=Symbol.for("react.strict_mode"),jd=Symbol.for("react.profiler"),A_=Symbol.for("react.provider"),b_=Symbol.for("react.context"),Hp=Symbol.for("react.forward_ref"),Yd=Symbol.for("react.suspense"),qd=Symbol.for("react.suspense_list"),Vp=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),C_=Symbol.for("react.offscreen"),Mg=Symbol.iterator;function qo(t){return t===null||typeof t!="object"?null:(t=Mg&&t[Mg]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,If;function fa(t){if(If===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);If=e&&e[1]||""}return`
`+If+t}var Nf=!1;function Df(t,e){if(!t||Nf)return"";Nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Nf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fa(t):""}function VM(t){switch(t.tag){case 5:return fa(t.type);case 16:return fa("Lazy");case 13:return fa("Suspense");case 19:return fa("SuspenseList");case 0:case 2:case 15:return t=Df(t.type,!1),t;case 11:return t=Df(t.type.render,!1),t;case 1:return t=Df(t.type,!0),t;default:return""}}function Kd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qs:return"Fragment";case Zs:return"Portal";case jd:return"Profiler";case Bp:return"StrictMode";case Yd:return"Suspense";case qd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case b_:return(t.displayName||"Context")+".Consumer";case A_:return(t._context.displayName||"Context")+".Provider";case Hp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vp:return e=t.displayName||null,e!==null?e:Kd(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Kd(t(e))}catch{}}return null}function GM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kd(e);case 8:return e===Bp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function R_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function WM(t){var e=R_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function wl(t){t._valueTracker||(t._valueTracker=WM(t))}function P_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=R_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zd(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Eg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function L_(t,e){e=e.checked,e!=null&&zp(t,"checked",e,!1)}function Qd(t,e){L_(t,e);var n=Or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jd(t,e.type,Or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jd(t,e,n){(e!=="number"||Vu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var da=Array.isArray;function fo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function eh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(da(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Or(n)}}function I_(t,e){var n=Or(e.value),i=Or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ag(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function N_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function th(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?N_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,D_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Na(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$M=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(t){$M.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_a[e]=_a[t]})});function U_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_a.hasOwnProperty(t)&&_a[t]?(""+e).trim():e+"px"}function O_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=U_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var XM=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nh(t,e){if(e){if(XM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function ih(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rh=null;function Gp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sh=null,ho=null,po=null;function bg(t){if(t=sl(t)){if(typeof sh!="function")throw Error(se(280));var e=t.stateNode;e&&(e=Lc(e),sh(t.stateNode,t.type,e))}}function F_(t){ho?po?po.push(t):po=[t]:ho=t}function k_(){if(ho){var t=ho,e=po;if(po=ho=null,bg(t),e)for(t=0;t<e.length;t++)bg(e[t])}}function z_(t,e){return t(e)}function B_(){}var Uf=!1;function H_(t,e,n){if(Uf)return t(e,n);Uf=!0;try{return z_(t,e,n)}finally{Uf=!1,(ho!==null||po!==null)&&(B_(),k_())}}function Da(t,e){var n=t.stateNode;if(n===null)return null;var i=Lc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var oh=!1;if(Ji)try{var Ko={};Object.defineProperty(Ko,"passive",{get:function(){oh=!0}}),window.addEventListener("test",Ko,Ko),window.removeEventListener("test",Ko,Ko)}catch{oh=!1}function jM(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ya=!1,Gu=null,Wu=!1,ah=null,YM={onError:function(t){ya=!0,Gu=t}};function qM(t,e,n,i,r,s,o,a,l){ya=!1,Gu=null,jM.apply(YM,arguments)}function KM(t,e,n,i,r,s,o,a,l){if(qM.apply(this,arguments),ya){if(ya){var u=Gu;ya=!1,Gu=null}else throw Error(se(198));Wu||(Wu=!0,ah=u)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function V_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Cg(t){if(ys(t)!==t)throw Error(se(188))}function ZM(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Cg(r),t;if(s===i)return Cg(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function G_(t){return t=ZM(t),t!==null?W_(t):null}function W_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=W_(t);if(e!==null)return e;t=t.sibling}return null}var $_=Bn.unstable_scheduleCallback,Rg=Bn.unstable_cancelCallback,QM=Bn.unstable_shouldYield,JM=Bn.unstable_requestPaint,Pt=Bn.unstable_now,e1=Bn.unstable_getCurrentPriorityLevel,Wp=Bn.unstable_ImmediatePriority,X_=Bn.unstable_UserBlockingPriority,$u=Bn.unstable_NormalPriority,t1=Bn.unstable_LowPriority,j_=Bn.unstable_IdlePriority,bc=null,Ii=null;function n1(t){if(Ii&&typeof Ii.onCommitFiberRoot=="function")try{Ii.onCommitFiberRoot(bc,t,void 0,(t.current.flags&128)===128)}catch{}}var xi=Math.clz32?Math.clz32:s1,i1=Math.log,r1=Math.LN2;function s1(t){return t>>>=0,t===0?32:31-(i1(t)/r1|0)|0}var Al=64,bl=4194304;function ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ha(a):(s&=o,s!==0&&(i=ha(s)))}else o=n&~r,o!==0?i=ha(o):s!==0&&(i=ha(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-xi(e),r=1<<n,i|=t[n],e&=~r;return i}function o1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=o1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function lh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Y_(){var t=Al;return Al<<=1,!(Al&4194240)&&(Al=64),t}function Of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function il(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xi(e),t[e]=n}function l1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-xi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function $p(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-xi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function q_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var K_,Xp,Z_,Q_,J_,uh=!1,Cl=[],Ar=null,br=null,Cr=null,Ua=new Map,Oa=new Map,xr=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pg(t,e){switch(t){case"focusin":case"focusout":Ar=null;break;case"dragenter":case"dragleave":br=null;break;case"mouseover":case"mouseout":Cr=null;break;case"pointerover":case"pointerout":Ua.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Oa.delete(e.pointerId)}}function Zo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=sl(e),e!==null&&Xp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function c1(t,e,n,i,r){switch(e){case"focusin":return Ar=Zo(Ar,t,e,n,i,r),!0;case"dragenter":return br=Zo(br,t,e,n,i,r),!0;case"mouseover":return Cr=Zo(Cr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ua.set(s,Zo(Ua.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Oa.set(s,Zo(Oa.get(s)||null,t,e,n,i,r)),!0}return!1}function ey(t){var e=rs(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=V_(n),e!==null){t.blockedOn=e,J_(t.priority,function(){Z_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ch(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);rh=i,n.target.dispatchEvent(i),rh=null}else return e=sl(n),e!==null&&Xp(e),t.blockedOn=n,!1;e.shift()}return!0}function Lg(t,e,n){vu(t)&&n.delete(e)}function f1(){uh=!1,Ar!==null&&vu(Ar)&&(Ar=null),br!==null&&vu(br)&&(br=null),Cr!==null&&vu(Cr)&&(Cr=null),Ua.forEach(Lg),Oa.forEach(Lg)}function Qo(t,e){t.blockedOn===e&&(t.blockedOn=null,uh||(uh=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,f1)))}function Fa(t){function e(r){return Qo(r,t)}if(0<Cl.length){Qo(Cl[0],t);for(var n=1;n<Cl.length;n++){var i=Cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ar!==null&&Qo(Ar,t),br!==null&&Qo(br,t),Cr!==null&&Qo(Cr,t),Ua.forEach(e),Oa.forEach(e),n=0;n<xr.length;n++)i=xr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<xr.length&&(n=xr[0],n.blockedOn===null);)ey(n),n.blockedOn===null&&xr.shift()}var mo=ar.ReactCurrentBatchConfig,ju=!0;function d1(t,e,n,i){var r=ut,s=mo.transition;mo.transition=null;try{ut=1,jp(t,e,n,i)}finally{ut=r,mo.transition=s}}function h1(t,e,n,i){var r=ut,s=mo.transition;mo.transition=null;try{ut=4,jp(t,e,n,i)}finally{ut=r,mo.transition=s}}function jp(t,e,n,i){if(ju){var r=ch(t,e,n,i);if(r===null)Xf(t,e,i,Yu,n),Pg(t,i);else if(c1(r,t,e,n,i))i.stopPropagation();else if(Pg(t,i),e&4&&-1<u1.indexOf(t)){for(;r!==null;){var s=sl(r);if(s!==null&&K_(s),s=ch(t,e,n,i),s===null&&Xf(t,e,i,Yu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Xf(t,e,i,null,n)}}var Yu=null;function ch(t,e,n,i){if(Yu=null,t=Gp(i),t=rs(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=V_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yu=t,null}function ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(e1()){case Wp:return 1;case X_:return 4;case $u:case t1:return 16;case j_:return 536870912;default:return 16}default:return 16}}var Mr=null,Yp=null,_u=null;function ny(){if(_u)return _u;var t,e=Yp,n=e.length,i,r="value"in Mr?Mr.value:Mr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _u=r.slice(t,1<i?1-i:void 0)}function yu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function Ig(){return!1}function Vn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:Ig,this.isPropagationStopped=Ig,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qp=Vn(zo),rl=Et({},zo,{view:0,detail:0}),p1=Vn(rl),Ff,kf,Jo,Cc=Et({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Jo&&(Jo&&t.type==="mousemove"?(Ff=t.screenX-Jo.screenX,kf=t.screenY-Jo.screenY):kf=Ff=0,Jo=t),Ff)},movementY:function(t){return"movementY"in t?t.movementY:kf}}),Ng=Vn(Cc),m1=Et({},Cc,{dataTransfer:0}),g1=Vn(m1),v1=Et({},rl,{relatedTarget:0}),zf=Vn(v1),_1=Et({},zo,{animationName:0,elapsedTime:0,pseudoElement:0}),y1=Vn(_1),x1=Et({},zo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),S1=Vn(x1),M1=Et({},zo,{data:0}),Dg=Vn(M1),E1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=T1[t])?!!e[t]:!1}function Kp(){return A1}var b1=Et({},rl,{key:function(t){if(t.key){var e=E1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=yu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kp,charCode:function(t){return t.type==="keypress"?yu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?yu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),C1=Vn(b1),R1=Et({},Cc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ug=Vn(R1),P1=Et({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kp}),L1=Vn(P1),I1=Et({},zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),N1=Vn(I1),D1=Et({},Cc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),U1=Vn(D1),O1=[9,13,27,32],Zp=Ji&&"CompositionEvent"in window,xa=null;Ji&&"documentMode"in document&&(xa=document.documentMode);var F1=Ji&&"TextEvent"in window&&!xa,iy=Ji&&(!Zp||xa&&8<xa&&11>=xa),Og=" ",Fg=!1;function ry(t,e){switch(t){case"keyup":return O1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Js=!1;function k1(t,e){switch(t){case"compositionend":return sy(e);case"keypress":return e.which!==32?null:(Fg=!0,Og);case"textInput":return t=e.data,t===Og&&Fg?null:t;default:return null}}function z1(t,e){if(Js)return t==="compositionend"||!Zp&&ry(t,e)?(t=ny(),_u=Yp=Mr=null,Js=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iy&&e.locale!=="ko"?null:e.data;default:return null}}var B1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B1[t.type]:e==="textarea"}function oy(t,e,n,i){F_(i),e=qu(e,"onChange"),0<e.length&&(n=new qp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Sa=null,ka=null;function H1(t){vy(t,0)}function Rc(t){var e=no(t);if(P_(e))return t}function V1(t,e){if(t==="change")return e}var ay=!1;if(Ji){var Bf;if(Ji){var Hf="oninput"in document;if(!Hf){var zg=document.createElement("div");zg.setAttribute("oninput","return;"),Hf=typeof zg.oninput=="function"}Bf=Hf}else Bf=!1;ay=Bf&&(!document.documentMode||9<document.documentMode)}function Bg(){Sa&&(Sa.detachEvent("onpropertychange",ly),ka=Sa=null)}function ly(t){if(t.propertyName==="value"&&Rc(ka)){var e=[];oy(e,ka,t,Gp(t)),H_(H1,e)}}function G1(t,e,n){t==="focusin"?(Bg(),Sa=e,ka=n,Sa.attachEvent("onpropertychange",ly)):t==="focusout"&&Bg()}function W1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Rc(ka)}function $1(t,e){if(t==="click")return Rc(e)}function X1(t,e){if(t==="input"||t==="change")return Rc(e)}function j1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Mi=typeof Object.is=="function"?Object.is:j1;function za(t,e){if(Mi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Xd.call(e,r)||!Mi(t[r],e[r]))return!1}return!0}function Hg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vg(t,e){var n=Hg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hg(n)}}function uy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?uy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function cy(){for(var t=window,e=Vu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vu(t.document)}return e}function Qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Y1(t){var e=cy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&uy(n.ownerDocument.documentElement,n)){if(i!==null&&Qp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Vg(n,s);var o=Vg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var q1=Ji&&"documentMode"in document&&11>=document.documentMode,eo=null,fh=null,Ma=null,dh=!1;function Gg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;dh||eo==null||eo!==Vu(i)||(i=eo,"selectionStart"in i&&Qp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ma&&za(Ma,i)||(Ma=i,i=qu(fh,"onSelect"),0<i.length&&(e=new qp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=eo)))}function Pl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var to={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},Vf={},fy={};Ji&&(fy=document.createElement("div").style,"AnimationEvent"in window||(delete to.animationend.animation,delete to.animationiteration.animation,delete to.animationstart.animation),"TransitionEvent"in window||delete to.transitionend.transition);function Pc(t){if(Vf[t])return Vf[t];if(!to[t])return t;var e=to[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in fy)return Vf[t]=e[n];return t}var dy=Pc("animationend"),hy=Pc("animationiteration"),py=Pc("animationstart"),my=Pc("transitionend"),gy=new Map,Wg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(t,e){gy.set(t,e),_s(e,[t])}for(var Gf=0;Gf<Wg.length;Gf++){var Wf=Wg[Gf],K1=Wf.toLowerCase(),Z1=Wf[0].toUpperCase()+Wf.slice(1);Br(K1,"on"+Z1)}Br(dy,"onAnimationEnd");Br(hy,"onAnimationIteration");Br(py,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(my,"onTransitionEnd");To("onMouseEnter",["mouseout","mouseover"]);To("onMouseLeave",["mouseout","mouseover"]);To("onPointerEnter",["pointerout","pointerover"]);To("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q1=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function $g(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,KM(i,e,void 0,t),t.currentTarget=null}function vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;$g(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;$g(r,a,u),s=l}}}if(Wu)throw t=ah,Wu=!1,ah=null,t}function pt(t,e){var n=e[vh];n===void 0&&(n=e[vh]=new Set);var i=t+"__bubble";n.has(i)||(_y(e,t,2,!1),n.add(i))}function $f(t,e,n){var i=0;e&&(i|=4),_y(n,t,i,e)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function Ba(t){if(!t[Ll]){t[Ll]=!0,T_.forEach(function(n){n!=="selectionchange"&&(Q1.has(n)||$f(n,!1,t),$f(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ll]||(e[Ll]=!0,$f("selectionchange",!1,e))}}function _y(t,e,n,i){switch(ty(e)){case 1:var r=d1;break;case 4:r=h1;break;default:r=jp}n=r.bind(null,e,n,t),r=void 0,!oh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Xf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}H_(function(){var u=s,c=Gp(n),f=[];e:{var d=gy.get(t);if(d!==void 0){var p=qp,v=t;switch(t){case"keypress":if(yu(n)===0)break e;case"keydown":case"keyup":p=C1;break;case"focusin":v="focus",p=zf;break;case"focusout":v="blur",p=zf;break;case"beforeblur":case"afterblur":p=zf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Ng;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=g1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=L1;break;case dy:case hy:case py:p=y1;break;case my:p=N1;break;case"scroll":p=p1;break;case"wheel":p=U1;break;case"copy":case"cut":case"paste":p=S1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ug}var g=(e&4)!==0,m=!g&&t==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var _=u,y;_!==null;){y=_;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Da(_,h),x!=null&&g.push(Ha(_,x,y)))),m)break;_=_.return}0<g.length&&(d=new p(d,v,null,n,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==rh&&(v=n.relatedTarget||n.fromElement)&&(rs(v)||v[er]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?rs(v):null,v!==null&&(m=ys(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(g=Ng,x="onMouseLeave",h="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(g=Ug,x="onPointerLeave",h="onPointerEnter",_="pointer"),m=p==null?d:no(p),y=v==null?d:no(v),d=new g(x,_+"leave",p,n,c),d.target=m,d.relatedTarget=y,x=null,rs(c)===u&&(g=new g(h,_+"enter",v,n,c),g.target=y,g.relatedTarget=m,x=g),m=x,p&&v)t:{for(g=p,h=v,_=0,y=g;y;y=As(y))_++;for(y=0,x=h;x;x=As(x))y++;for(;0<_-y;)g=As(g),_--;for(;0<y-_;)h=As(h),y--;for(;_--;){if(g===h||h!==null&&g===h.alternate)break t;g=As(g),h=As(h)}g=null}else g=null;p!==null&&Xg(f,d,p,g,!1),v!==null&&m!==null&&Xg(f,m,v,g,!0)}}e:{if(d=u?no(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=V1;else if(kg(d))if(ay)b=X1;else{b=W1;var A=G1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=$1);if(b&&(b=b(t,u))){oy(f,b,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Jd(d,"number",d.value)}switch(A=u?no(u):window,t){case"focusin":(kg(A)||A.contentEditable==="true")&&(eo=A,fh=u,Ma=null);break;case"focusout":Ma=fh=eo=null;break;case"mousedown":dh=!0;break;case"contextmenu":case"mouseup":case"dragend":dh=!1,Gg(f,n,c);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":Gg(f,n,c)}var E;if(Zp)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Js?ry(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(iy&&n.locale!=="ko"&&(Js||P!=="onCompositionStart"?P==="onCompositionEnd"&&Js&&(E=ny()):(Mr=c,Yp="value"in Mr?Mr.value:Mr.textContent,Js=!0)),A=qu(u,P),0<A.length&&(P=new Dg(P,t,null,n,c),f.push({event:P,listeners:A}),E?P.data=E:(E=sy(n),E!==null&&(P.data=E)))),(E=F1?k1(t,n):z1(t,n))&&(u=qu(u,"onBeforeInput"),0<u.length&&(c=new Dg("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=E))}vy(f,e)})}function Ha(t,e,n){return{instance:t,listener:e,currentTarget:n}}function qu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Da(t,n),s!=null&&i.unshift(Ha(t,s,r)),s=Da(t,e),s!=null&&i.push(Ha(t,s,r))),t=t.return}return i}function As(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Da(n,s),l!=null&&o.unshift(Ha(n,l,a))):r||(l=Da(n,s),l!=null&&o.push(Ha(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var J1=/\r\n?/g,eE=/\u0000|\uFFFD/g;function jg(t){return(typeof t=="string"?t:""+t).replace(J1,`
`).replace(eE,"")}function Il(t,e,n){if(e=jg(e),jg(t)!==e&&n)throw Error(se(425))}function Ku(){}var hh=null,ph=null;function mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var gh=typeof setTimeout=="function"?setTimeout:void 0,tE=typeof clearTimeout=="function"?clearTimeout:void 0,Yg=typeof Promise=="function"?Promise:void 0,nE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yg<"u"?function(t){return Yg.resolve(null).then(t).catch(iE)}:gh;function iE(t){setTimeout(function(){throw t})}function jf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function Rr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function qg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bo=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Bo,Va="__reactProps$"+Bo,er="__reactContainer$"+Bo,vh="__reactEvents$"+Bo,rE="__reactListeners$"+Bo,sE="__reactHandles$"+Bo;function rs(t){var e=t[Ri];if(e)return e;for(var n=t.parentNode;n;){if(e=n[er]||n[Ri]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=qg(t);t!==null;){if(n=t[Ri])return n;t=qg(t)}return e}t=n,n=t.parentNode}return null}function sl(t){return t=t[Ri]||t[er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function no(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function Lc(t){return t[Va]||null}var _h=[],io=-1;function Hr(t){return{current:t}}function gt(t){0>io||(t.current=_h[io],_h[io]=null,io--)}function ht(t,e){io++,_h[io]=t.current,t.current=e}var Fr={},ln=Hr(Fr),Sn=Hr(!1),cs=Fr;function Ao(t,e){var n=t.type.contextTypes;if(!n)return Fr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Zu(){gt(Sn),gt(ln)}function Kg(t,e,n){if(ln.current!==Fr)throw Error(se(168));ht(ln,e),ht(Sn,n)}function yy(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,GM(t)||"Unknown",r));return Et({},n,i)}function Qu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fr,cs=ln.current,ht(ln,t),ht(Sn,Sn.current),!0}function Zg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=yy(t,e,cs),i.__reactInternalMemoizedMergedChildContext=t,gt(Sn),gt(ln),ht(ln,t)):gt(Sn),ht(Sn,n)}var Wi=null,Ic=!1,Yf=!1;function xy(t){Wi===null?Wi=[t]:Wi.push(t)}function oE(t){Ic=!0,xy(t)}function Vr(){if(!Yf&&Wi!==null){Yf=!0;var t=0,e=ut;try{var n=Wi;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Wi=null,Ic=!1}catch(r){throw Wi!==null&&(Wi=Wi.slice(t+1)),$_(Wp,Vr),r}finally{ut=e,Yf=!1}}return null}var ro=[],so=0,Ju=null,ec=0,qn=[],Kn=0,fs=null,ji=1,Yi="";function Qr(t,e){ro[so++]=ec,ro[so++]=Ju,Ju=t,ec=e}function Sy(t,e,n){qn[Kn++]=ji,qn[Kn++]=Yi,qn[Kn++]=fs,fs=t;var i=ji;t=Yi;var r=32-xi(i)-1;i&=~(1<<r),n+=1;var s=32-xi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ji=1<<32-xi(e)+r|n<<r|i,Yi=s+t}else ji=1<<s|n<<r|i,Yi=t}function Jp(t){t.return!==null&&(Qr(t,1),Sy(t,1,0))}function em(t){for(;t===Ju;)Ju=ro[--so],ro[so]=null,ec=ro[--so],ro[so]=null;for(;t===fs;)fs=qn[--Kn],qn[Kn]=null,Yi=qn[--Kn],qn[Kn]=null,ji=qn[--Kn],qn[Kn]=null}var kn=null,Un=null,yt=!1,vi=null;function My(t,e){var n=ei(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Qg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,Un=Rr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fs!==null?{id:ji,overflow:Yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ei(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,Un=null,!0):!1;default:return!1}}function yh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function xh(t){if(yt){var e=Un;if(e){var n=e;if(!Qg(t,e)){if(yh(t))throw Error(se(418));e=Rr(n.nextSibling);var i=kn;e&&Qg(t,e)?My(i,n):(t.flags=t.flags&-4097|2,yt=!1,kn=t)}}else{if(yh(t))throw Error(se(418));t.flags=t.flags&-4097|2,yt=!1,kn=t}}}function Jg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function Nl(t){if(t!==kn)return!1;if(!yt)return Jg(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!mh(t.type,t.memoizedProps)),e&&(e=Un)){if(yh(t))throw Ey(),Error(se(418));for(;e;)My(t,e),e=Rr(e.nextSibling)}if(Jg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=Rr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=kn?Rr(t.stateNode.nextSibling):null;return!0}function Ey(){for(var t=Un;t;)t=Rr(t.nextSibling)}function bo(){Un=kn=null,yt=!1}function tm(t){vi===null?vi=[t]:vi.push(t)}var aE=ar.ReactCurrentBatchConfig;function ea(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function Dl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function e0(t){var e=t._init;return e(t._payload)}function wy(t){function e(h,_){if(t){var y=h.deletions;y===null?(h.deletions=[_],h.flags|=16):y.push(_)}}function n(h,_){if(!t)return null;for(;_!==null;)e(h,_),_=_.sibling;return null}function i(h,_){for(h=new Map;_!==null;)_.key!==null?h.set(_.key,_):h.set(_.index,_),_=_.sibling;return h}function r(h,_){return h=Nr(h,_),h.index=0,h.sibling=null,h}function s(h,_,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<_?(h.flags|=2,_):y):(h.flags|=2,_)):(h.flags|=1048576,_)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,_,y,x){return _===null||_.tag!==6?(_=td(y,h.mode,x),_.return=h,_):(_=r(_,y),_.return=h,_)}function l(h,_,y,x){var b=y.type;return b===Qs?c(h,_,y.props.children,x,y.key):_!==null&&(_.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&e0(b)===_.type)?(x=r(_,y.props),x.ref=ea(h,_,y),x.return=h,x):(x=Au(y.type,y.key,y.props,null,h.mode,x),x.ref=ea(h,_,y),x.return=h,x)}function u(h,_,y,x){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=nd(y,h.mode,x),_.return=h,_):(_=r(_,y.children||[]),_.return=h,_)}function c(h,_,y,x,b){return _===null||_.tag!==7?(_=ls(y,h.mode,x,b),_.return=h,_):(_=r(_,y),_.return=h,_)}function f(h,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=td(""+_,h.mode,y),_.return=h,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case El:return y=Au(_.type,_.key,_.props,null,h.mode,y),y.ref=ea(h,null,_),y.return=h,y;case Zs:return _=nd(_,h.mode,y),_.return=h,_;case _r:var x=_._init;return f(h,x(_._payload),y)}if(da(_)||qo(_))return _=ls(_,h.mode,y,null),_.return=h,_;Dl(h,_)}return null}function d(h,_,y,x){var b=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return b!==null?null:a(h,_,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case El:return y.key===b?l(h,_,y,x):null;case Zs:return y.key===b?u(h,_,y,x):null;case _r:return b=y._init,d(h,_,b(y._payload),x)}if(da(y)||qo(y))return b!==null?null:c(h,_,y,x,null);Dl(h,y)}return null}function p(h,_,y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(_,h,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case El:return h=h.get(x.key===null?y:x.key)||null,l(_,h,x,b);case Zs:return h=h.get(x.key===null?y:x.key)||null,u(_,h,x,b);case _r:var A=x._init;return p(h,_,y,A(x._payload),b)}if(da(x)||qo(x))return h=h.get(y)||null,c(_,h,x,b,null);Dl(_,x)}return null}function v(h,_,y,x){for(var b=null,A=null,E=_,P=_=0,T=null;E!==null&&P<y.length;P++){E.index>P?(T=E,E=null):T=E.sibling;var S=d(h,E,y[P],x);if(S===null){E===null&&(E=T);break}t&&E&&S.alternate===null&&e(h,E),_=s(S,_,P),A===null?b=S:A.sibling=S,A=S,E=T}if(P===y.length)return n(h,E),yt&&Qr(h,P),b;if(E===null){for(;P<y.length;P++)E=f(h,y[P],x),E!==null&&(_=s(E,_,P),A===null?b=E:A.sibling=E,A=E);return yt&&Qr(h,P),b}for(E=i(h,E);P<y.length;P++)T=p(E,h,P,y[P],x),T!==null&&(t&&T.alternate!==null&&E.delete(T.key===null?P:T.key),_=s(T,_,P),A===null?b=T:A.sibling=T,A=T);return t&&E.forEach(function(R){return e(h,R)}),yt&&Qr(h,P),b}function g(h,_,y,x){var b=qo(y);if(typeof b!="function")throw Error(se(150));if(y=b.call(y),y==null)throw Error(se(151));for(var A=b=null,E=_,P=_=0,T=null,S=y.next();E!==null&&!S.done;P++,S=y.next()){E.index>P?(T=E,E=null):T=E.sibling;var R=d(h,E,S.value,x);if(R===null){E===null&&(E=T);break}t&&E&&R.alternate===null&&e(h,E),_=s(R,_,P),A===null?b=R:A.sibling=R,A=R,E=T}if(S.done)return n(h,E),yt&&Qr(h,P),b;if(E===null){for(;!S.done;P++,S=y.next())S=f(h,S.value,x),S!==null&&(_=s(S,_,P),A===null?b=S:A.sibling=S,A=S);return yt&&Qr(h,P),b}for(E=i(h,E);!S.done;P++,S=y.next())S=p(E,h,P,S.value,x),S!==null&&(t&&S.alternate!==null&&E.delete(S.key===null?P:S.key),_=s(S,_,P),A===null?b=S:A.sibling=S,A=S);return t&&E.forEach(function(z){return e(h,z)}),yt&&Qr(h,P),b}function m(h,_,y,x){if(typeof y=="object"&&y!==null&&y.type===Qs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case El:e:{for(var b=y.key,A=_;A!==null;){if(A.key===b){if(b=y.type,b===Qs){if(A.tag===7){n(h,A.sibling),_=r(A,y.props.children),_.return=h,h=_;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===_r&&e0(b)===A.type){n(h,A.sibling),_=r(A,y.props),_.ref=ea(h,A,y),_.return=h,h=_;break e}n(h,A);break}else e(h,A);A=A.sibling}y.type===Qs?(_=ls(y.props.children,h.mode,x,y.key),_.return=h,h=_):(x=Au(y.type,y.key,y.props,null,h.mode,x),x.ref=ea(h,_,y),x.return=h,h=x)}return o(h);case Zs:e:{for(A=y.key;_!==null;){if(_.key===A)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(h,_.sibling),_=r(_,y.children||[]),_.return=h,h=_;break e}else{n(h,_);break}else e(h,_);_=_.sibling}_=nd(y,h.mode,x),_.return=h,h=_}return o(h);case _r:return A=y._init,m(h,_,A(y._payload),x)}if(da(y))return v(h,_,y,x);if(qo(y))return g(h,_,y,x);Dl(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(h,_.sibling),_=r(_,y),_.return=h,h=_):(n(h,_),_=td(y,h.mode,x),_.return=h,h=_),o(h)):n(h,_)}return m}var Co=wy(!0),Ty=wy(!1),tc=Hr(null),nc=null,oo=null,nm=null;function im(){nm=oo=nc=null}function rm(t){var e=tc.current;gt(tc),t._currentValue=e}function Sh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function go(t,e){nc=t,nm=oo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(xn=!0),t.firstContext=null)}function si(t){var e=t._currentValue;if(nm!==t)if(t={context:t,memoizedValue:e,next:null},oo===null){if(nc===null)throw Error(se(308));oo=t,nc.dependencies={lanes:0,firstContext:t}}else oo=oo.next=t;return e}var ss=null;function sm(t){ss===null?ss=[t]:ss.push(t)}function Ay(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,sm(e)):(n.next=r.next,r.next=n),e.interleaved=n,tr(t,i)}function tr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function om(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function by(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,tr(t,n)}return r=i.interleaved,r===null?(e.next=e,sm(i)):(e.next=r.next,r.next=e),i.interleaved=e,tr(t,n)}function xu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$p(t,n)}}function t0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ic(t,e,n,i){var r=t.updateQueue;yr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,g=a;switch(d=e,p=n,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Et({},f,d);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);hs|=o,t.lanes=o,t.memoizedState=f}}function n0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ol={},Ni=Hr(ol),Ga=Hr(ol),Wa=Hr(ol);function os(t){if(t===ol)throw Error(se(174));return t}function am(t,e){switch(ht(Wa,e),ht(Ga,t),ht(Ni,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:th(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=th(e,t)}gt(Ni),ht(Ni,e)}function Ro(){gt(Ni),gt(Ga),gt(Wa)}function Cy(t){os(Wa.current);var e=os(Ni.current),n=th(e,t.type);e!==n&&(ht(Ga,t),ht(Ni,n))}function lm(t){Ga.current===t&&(gt(Ni),gt(Ga))}var St=Hr(0);function rc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var qf=[];function um(){for(var t=0;t<qf.length;t++)qf[t]._workInProgressVersionPrimary=null;qf.length=0}var Su=ar.ReactCurrentDispatcher,Kf=ar.ReactCurrentBatchConfig,ds=0,Mt=null,zt=null,$t=null,sc=!1,Ea=!1,$a=0,lE=0;function en(){throw Error(se(321))}function cm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Mi(t[n],e[n]))return!1;return!0}function fm(t,e,n,i,r,s){if(ds=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Su.current=t===null||t.memoizedState===null?dE:hE,t=n(i,r),Ea){s=0;do{if(Ea=!1,$a=0,25<=s)throw Error(se(301));s+=1,$t=zt=null,e.updateQueue=null,Su.current=pE,t=n(i,r)}while(Ea)}if(Su.current=oc,e=zt!==null&&zt.next!==null,ds=0,$t=zt=Mt=null,sc=!1,e)throw Error(se(300));return t}function dm(){var t=$a!==0;return $a=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Mt.memoizedState=$t=t:$t=$t.next=t,$t}function oi(){if(zt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=zt.next;var e=$t===null?Mt.memoizedState:$t.next;if(e!==null)$t=e,zt=t;else{if(t===null)throw Error(se(310));zt=t,t={memoizedState:zt.memoizedState,baseState:zt.baseState,baseQueue:zt.baseQueue,queue:zt.queue,next:null},$t===null?Mt.memoizedState=$t=t:$t=$t.next=t}return $t}function Xa(t,e){return typeof e=="function"?e(t):e}function Zf(t){var e=oi(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=zt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ds&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Mt.lanes|=c,hs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Mi(i,e.memoizedState)||(xn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,hs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Qf(t){var e=oi(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Mi(s,e.memoizedState)||(xn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ry(){}function Py(t,e){var n=Mt,i=oi(),r=e(),s=!Mi(i.memoizedState,r);if(s&&(i.memoizedState=r,xn=!0),i=i.queue,hm(Ny.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,ja(9,Iy.bind(null,n,i,r,e),void 0,null),jt===null)throw Error(se(349));ds&30||Ly(n,e,r)}return r}function Ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Iy(t,e,n,i){e.value=n,e.getSnapshot=i,Dy(e)&&Uy(t)}function Ny(t,e,n){return n(function(){Dy(e)&&Uy(t)})}function Dy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Mi(t,n)}catch{return!0}}function Uy(t){var e=tr(t,1);e!==null&&Si(e,t,1,-1)}function i0(t){var e=Ti();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=fE.bind(null,Mt,t),[e.memoizedState,t]}function ja(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Oy(){return oi().memoizedState}function Mu(t,e,n,i){var r=Ti();Mt.flags|=t,r.memoizedState=ja(1|e,n,void 0,i===void 0?null:i)}function Nc(t,e,n,i){var r=oi();i=i===void 0?null:i;var s=void 0;if(zt!==null){var o=zt.memoizedState;if(s=o.destroy,i!==null&&cm(i,o.deps)){r.memoizedState=ja(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=ja(1|e,n,s,i)}function r0(t,e){return Mu(8390656,8,t,e)}function hm(t,e){return Nc(2048,8,t,e)}function Fy(t,e){return Nc(4,2,t,e)}function ky(t,e){return Nc(4,4,t,e)}function zy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function By(t,e,n){return n=n!=null?n.concat([t]):null,Nc(4,4,zy.bind(null,e,t),n)}function pm(){}function Hy(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Vy(t,e){var n=oi();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&cm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Gy(t,e,n){return ds&21?(Mi(n,e)||(n=Y_(),Mt.lanes|=n,hs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,xn=!0),t.memoizedState=n)}function uE(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Kf.transition;Kf.transition={};try{t(!1),e()}finally{ut=n,Kf.transition=i}}function Wy(){return oi().memoizedState}function cE(t,e,n){var i=Ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},$y(t))Xy(e,n);else if(n=Ay(t,e,n,i),n!==null){var r=pn();Si(n,t,i,r),jy(n,e,i)}}function fE(t,e,n){var i=Ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if($y(t))Xy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Mi(a,o)){var l=e.interleaved;l===null?(r.next=r,sm(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ay(t,e,r,i),n!==null&&(r=pn(),Si(n,t,i,r),jy(n,e,i))}}function $y(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Xy(t,e){Ea=sc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function jy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,$p(t,n)}}var oc={readContext:si,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},dE={readContext:si,useCallback:function(t,e){return Ti().memoizedState=[t,e===void 0?null:e],t},useContext:si,useEffect:r0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,zy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=Ti();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ti();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=cE.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=Ti();return t={current:t},e.memoizedState=t},useState:i0,useDebugValue:pm,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=i0(!1),e=t[0];return t=uE.bind(null,t[1]),Ti().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=Ti();if(yt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),jt===null)throw Error(se(349));ds&30||Ly(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,r0(Ny.bind(null,i,s,t),[t]),i.flags|=2048,ja(9,Iy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ti(),e=jt.identifierPrefix;if(yt){var n=Yi,i=ji;n=(i&~(1<<32-xi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},hE={readContext:si,useCallback:Hy,useContext:si,useEffect:hm,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:ky,useMemo:Vy,useReducer:Zf,useRef:Oy,useState:function(){return Zf(Xa)},useDebugValue:pm,useDeferredValue:function(t){var e=oi();return Gy(e,zt.memoizedState,t)},useTransition:function(){var t=Zf(Xa)[0],e=oi().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Wy,unstable_isNewReconciler:!1},pE={readContext:si,useCallback:Hy,useContext:si,useEffect:hm,useImperativeHandle:By,useInsertionEffect:Fy,useLayoutEffect:ky,useMemo:Vy,useReducer:Qf,useRef:Oy,useState:function(){return Qf(Xa)},useDebugValue:pm,useDeferredValue:function(t){var e=oi();return zt===null?e.memoizedState=t:Gy(e,zt.memoizedState,t)},useTransition:function(){var t=Qf(Xa)[0],e=oi().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:Py,useId:Wy,unstable_isNewReconciler:!1};function mi(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Mh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dc={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Ir(t),s=Zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Si(e,t,r,i),xu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Ir(t),s=Zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Pr(t,s,r),e!==null&&(Si(e,t,r,i),xu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Ir(t),r=Zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Pr(t,r,i),e!==null&&(Si(e,t,i,n),xu(e,t,i))}};function s0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,i)||!za(r,s):!0}function Yy(t,e,n){var i=!1,r=Fr,s=e.contextType;return typeof s=="object"&&s!==null?s=si(s):(r=Mn(e)?cs:ln.current,i=e.contextTypes,s=(i=i!=null)?Ao(t,r):Fr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function o0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Dc.enqueueReplaceState(e,e.state,null)}function Eh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},om(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=si(s):(s=Mn(e)?cs:ln.current,r.context=Ao(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Mh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Dc.enqueueReplaceState(r,r.state,null),ic(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Po(t,e){try{var n="",i=e;do n+=VM(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Jf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mE=typeof WeakMap=="function"?WeakMap:Map;function qy(t,e,n){n=Zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){lc||(lc=!0,Dh=i),wh(t,e)},n}function Ky(t,e,n){n=Zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){wh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){wh(t,e),typeof i!="function"&&(Lr===null?Lr=new Set([this]):Lr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function a0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=RE.bind(null,t,e,n),e.then(t,t))}function l0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function u0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zi(-1,1),e.tag=2,Pr(n,e,1))),n.lanes|=1),t)}var gE=ar.ReactCurrentOwner,xn=!1;function fn(t,e,n,i){e.child=t===null?Ty(e,null,n,i):Co(e,t.child,n,i)}function c0(t,e,n,i,r){n=n.render;var s=e.ref;return go(e,r),i=fm(t,e,n,i,s,r),n=dm(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,nr(t,e,r)):(yt&&n&&Jp(e),e.flags|=1,fn(t,e,i,r),e.child)}function f0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Mm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zy(t,e,s,i,r)):(t=Au(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,i)&&t.ref===e.ref)return nr(t,e,r)}return e.flags|=1,t=Nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(za(s,i)&&t.ref===e.ref)if(xn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(xn=!0);else return e.lanes=t.lanes,nr(t,e,r)}return Th(t,e,n,i,r)}function Qy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(lo,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(lo,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(lo,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(lo,Nn),Nn|=i;return fn(t,e,r,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Th(t,e,n,i,r){var s=Mn(n)?cs:ln.current;return s=Ao(e,s),go(e,r),n=fm(t,e,n,i,s,r),i=dm(),t!==null&&!xn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,nr(t,e,r)):(yt&&i&&Jp(e),e.flags|=1,fn(t,e,n,r),e.child)}function d0(t,e,n,i,r){if(Mn(n)){var s=!0;Qu(e)}else s=!1;if(go(e,r),e.stateNode===null)Eu(t,e),Yy(e,n,i),Eh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=si(u):(u=Mn(n)?cs:ln.current,u=Ao(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&o0(e,o,i,u),yr=!1;var d=e.memoizedState;o.state=d,ic(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Sn.current||yr?(typeof c=="function"&&(Mh(e,n,c,i),l=e.memoizedState),(a=yr||s0(e,n,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,by(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=si(l):(l=Mn(n)?cs:ln.current,l=Ao(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&o0(e,o,i,l),yr=!1,d=e.memoizedState,o.state=d,ic(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||Sn.current||yr?(typeof p=="function"&&(Mh(e,n,p,i),v=e.memoizedState),(u=yr||s0(e,n,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ah(t,e,n,i,s,r)}function Ah(t,e,n,i,r,s){Jy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Zg(e,n,!1),nr(t,e,s);i=e.stateNode,gE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Co(e,t.child,null,s),e.child=Co(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Zg(e,n,!0),e.child}function ex(t){var e=t.stateNode;e.pendingContext?Kg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Kg(t,e.context,!1),am(t,e.containerInfo)}function h0(t,e,n,i,r){return bo(),tm(r),e.flags|=256,fn(t,e,n,i),e.child}var bh={dehydrated:null,treeContext:null,retryLane:0};function Ch(t){return{baseLanes:t,cachePool:null,transitions:null}}function tx(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(St,r&1),t===null)return xh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Fc(o,i,0,null),t=ls(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ch(n),e.memoizedState=bh,t):mm(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vE(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Nr(a,s):(s=ls(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ch(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=bh,i}return s=t.child,t=s.sibling,i=Nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function mm(t,e){return e=Fc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ul(t,e,n,i){return i!==null&&tm(i),Co(e,t.child,null,n),t=mm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vE(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Jf(Error(se(422))),Ul(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Fc({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Co(e,t.child,null,o),e.child.memoizedState=Ch(o),e.memoizedState=bh,s);if(!(e.mode&1))return Ul(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=Jf(s,i,void 0),Ul(t,e,o,i)}if(a=(o&t.childLanes)!==0,xn||a){if(i=jt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,tr(t,r),Si(i,t,r,-1))}return Sm(),i=Jf(Error(se(421))),Ul(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=PE.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=Rr(r.nextSibling),kn=e,yt=!0,vi=null,t!==null&&(qn[Kn++]=ji,qn[Kn++]=Yi,qn[Kn++]=fs,ji=t.id,Yi=t.overflow,fs=e),e=mm(e,i.children),e.flags|=4096,e)}function p0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Sh(t.return,e,n)}function ed(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function nx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&p0(t,n,e);else if(t.tag===19)p0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&rc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),ed(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&rc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}ed(e,!0,n,null,s);break;case"together":ed(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function nr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _E(t,e,n){switch(e.tag){case 3:ex(e),bo();break;case 5:Cy(e);break;case 1:Mn(e.type)&&Qu(e);break;case 4:am(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(tc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?tx(t,e,n):(ht(St,St.current&1),t=nr(t,e,n),t!==null?t.sibling:null);ht(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return nx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Qy(t,e,n)}return nr(t,e,n)}var ix,Rh,rx,sx;ix=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Rh=function(){};rx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,os(Ni.current);var s=null;switch(n){case"input":r=Zd(t,r),i=Zd(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=eh(t,r),i=eh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Ku)}nh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ia.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ia.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};sx=function(t,e,n,i){n!==i&&(e.flags|=4)};function ta(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function yE(t,e,n){var i=e.pendingProps;switch(em(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&Zu(),tn(e),null;case 3:return i=e.stateNode,Ro(),gt(Sn),gt(ln),um(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Nl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,vi!==null&&(Fh(vi),vi=null))),Rh(t,e),tn(e),null;case 5:lm(e);var r=os(Wa.current);if(n=e.type,t!==null&&e.stateNode!=null)rx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return tn(e),null}if(t=os(Ni.current),Nl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[Va]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<pa.length;r++)pt(pa[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":Eg(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":Tg(i,s),pt("invalid",i)}nh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Il(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Il(i.textContent,a,t),r=["children",""+a]):Ia.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":wl(i),wg(i,s,!0);break;case"textarea":wl(i),Ag(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ku)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=N_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ri]=e,t[Va]=i,ix(t,e,!1,!1),e.stateNode=t;e:{switch(o=ih(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<pa.length;r++)pt(pa[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":Eg(t,i),r=Zd(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),pt("invalid",t);break;case"textarea":Tg(t,i),r=eh(t,i),pt("invalid",t);break;default:r=i}nh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?O_(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D_(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Na(t,l):typeof l=="number"&&Na(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ia.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&zp(t,s,l,o))}switch(n){case"input":wl(t),wg(t,i,!1);break;case"textarea":wl(t),Ag(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?fo(t,!!i.multiple,s,!1):i.defaultValue!=null&&fo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Ku)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)sx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=os(Wa.current),os(Ni.current),Nl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:Il(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Il(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return tn(e),null;case 13:if(gt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&Un!==null&&e.mode&1&&!(e.flags&128))Ey(),bo(),e.flags|=98560,s=!1;else if(s=Nl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ri]=e}else bo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else vi!==null&&(Fh(vi),vi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Bt===0&&(Bt=3):Sm())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return Ro(),Rh(t,e),t===null&&Ba(e.stateNode.containerInfo),tn(e),null;case 10:return rm(e.type._context),tn(e),null;case 17:return Mn(e.type)&&Zu(),tn(e),null;case 19:if(gt(St),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)ta(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=rc(t),o!==null){for(e.flags|=128,ta(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Lo&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304)}else{if(!i)if(t=rc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ta(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return tn(e),null}else 2*Pt()-s.renderingStartTime>Lo&&n!==1073741824&&(e.flags|=128,i=!0,ta(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=St.current,ht(St,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return xm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function xE(t,e){switch(em(e),e.tag){case 1:return Mn(e.type)&&Zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ro(),gt(Sn),gt(ln),um(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return lm(e),null;case 13:if(gt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));bo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(St),null;case 4:return Ro(),null;case 10:return rm(e.type._context),null;case 22:case 23:return xm(),null;case 24:return null;default:return null}}var Ol=!1,on=!1,SE=typeof WeakSet=="function"?WeakSet:Set,Se=null;function ao(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Rt(t,e,i)}else n.current=null}function Ph(t,e,n){try{n()}catch(i){Rt(t,e,i)}}var m0=!1;function ME(t,e){if(hh=ju,t=cy(),Qp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ph={focusedElem:t,selectionRange:n},ju=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,h=e.stateNode,_=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:mi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(x){Rt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return v=m0,m0=!1,v}function wa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Ph(e,n,s)}r=r.next}while(r!==i)}}function Uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Lh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function ox(t){var e=t.alternate;e!==null&&(t.alternate=null,ox(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ri],delete e[Va],delete e[vh],delete e[rE],delete e[sE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ax(t){return t.tag===5||t.tag===3||t.tag===4}function g0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ax(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ku));else if(i!==4&&(t=t.child,t!==null))for(Ih(t,e,n),t=t.sibling;t!==null;)Ih(t,e,n),t=t.sibling}function Nh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Nh(t,e,n),t=t.sibling;t!==null;)Nh(t,e,n),t=t.sibling}var Kt=null,gi=!1;function cr(t,e,n){for(n=n.child;n!==null;)lx(t,e,n),n=n.sibling}function lx(t,e,n){if(Ii&&typeof Ii.onCommitFiberUnmount=="function")try{Ii.onCommitFiberUnmount(bc,n)}catch{}switch(n.tag){case 5:on||ao(n,e);case 6:var i=Kt,r=gi;Kt=null,cr(t,e,n),Kt=i,gi=r,Kt!==null&&(gi?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(gi?(t=Kt,n=n.stateNode,t.nodeType===8?jf(t.parentNode,n):t.nodeType===1&&jf(t,n),Fa(t)):jf(Kt,n.stateNode));break;case 4:i=Kt,r=gi,Kt=n.stateNode.containerInfo,gi=!0,cr(t,e,n),Kt=i,gi=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ph(n,e,o),r=r.next}while(r!==i)}cr(t,e,n);break;case 1:if(!on&&(ao(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Rt(n,e,a)}cr(t,e,n);break;case 21:cr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,cr(t,e,n),on=i):cr(t,e,n);break;default:cr(t,e,n)}}function v0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new SE),e.forEach(function(i){var r=LE.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function fi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,gi=!1;break e;case 3:Kt=a.stateNode.containerInfo,gi=!0;break e;case 4:Kt=a.stateNode.containerInfo,gi=!0;break e}a=a.return}if(Kt===null)throw Error(se(160));lx(s,o,r),Kt=null,gi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Rt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ux(e,t),e=e.sibling}function ux(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(fi(e,t),wi(t),i&4){try{wa(3,t,t.return),Uc(3,t)}catch(g){Rt(t,t.return,g)}try{wa(5,t,t.return)}catch(g){Rt(t,t.return,g)}}break;case 1:fi(e,t),wi(t),i&512&&n!==null&&ao(n,n.return);break;case 5:if(fi(e,t),wi(t),i&512&&n!==null&&ao(n,n.return),t.flags&32){var r=t.stateNode;try{Na(r,"")}catch(g){Rt(t,t.return,g)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&L_(r,s),ih(a,o);var u=ih(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?O_(r,f):c==="dangerouslySetInnerHTML"?D_(r,f):c==="children"?Na(r,f):zp(r,c,f,u)}switch(a){case"input":Qd(r,s);break;case"textarea":I_(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?fo(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?fo(r,!!s.multiple,s.defaultValue,!0):fo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Va]=s}catch(g){Rt(t,t.return,g)}}break;case 6:if(fi(e,t),wi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(g){Rt(t,t.return,g)}}break;case 3:if(fi(e,t),wi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(g){Rt(t,t.return,g)}break;case 4:fi(e,t),wi(t);break;case 13:fi(e,t),wi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(_m=Pt())),i&4&&v0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||c,fi(e,t),on=u):fi(e,t),wi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Se=t,c=t.child;c!==null;){for(f=Se=c;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:wa(4,d,d.return);break;case 1:ao(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Rt(i,n,g)}}break;case 5:ao(d,d.return);break;case 22:if(d.memoizedState!==null){y0(f);continue}}p!==null?(p.return=d,Se=p):y0(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=U_("display",o))}catch(g){Rt(t,t.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Rt(t,t.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:fi(e,t),wi(t),i&4&&v0(t);break;case 21:break;default:fi(e,t),wi(t)}}function wi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ax(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=g0(t);Nh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=g0(t);Ih(t,a,o);break;default:throw Error(se(161))}}catch(l){Rt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function EE(t,e,n){Se=t,cx(t)}function cx(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ol;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Ol;var u=on;if(Ol=o,(on=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?x0(r):l!==null?(l.return=o,Se=l):x0(r);for(;s!==null;)Se=s,cx(s),s=s.sibling;Se=r,Ol=a,on=u}_0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):_0(t)}}function _0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||Uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:mi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&n0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}n0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}on||e.flags&512&&Lh(e)}catch(d){Rt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function y0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function x0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uc(4,e)}catch(l){Rt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Rt(e,r,l)}}var s=e.return;try{Lh(e)}catch(l){Rt(e,s,l)}break;case 5:var o=e.return;try{Lh(e)}catch(l){Rt(e,o,l)}}}catch(l){Rt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var wE=Math.ceil,ac=ar.ReactCurrentDispatcher,gm=ar.ReactCurrentOwner,ii=ar.ReactCurrentBatchConfig,Ke=0,jt=null,Ot=null,Qt=0,Nn=0,lo=Hr(0),Bt=0,Ya=null,hs=0,Oc=0,vm=0,Ta=null,yn=null,_m=0,Lo=1/0,Gi=null,lc=!1,Dh=null,Lr=null,Fl=!1,Er=null,uc=0,Aa=0,Uh=null,wu=-1,Tu=0;function pn(){return Ke&6?Pt():wu!==-1?wu:wu=Pt()}function Ir(t){return t.mode&1?Ke&2&&Qt!==0?Qt&-Qt:aE.transition!==null?(Tu===0&&(Tu=Y_()),Tu):(t=ut,t!==0||(t=window.event,t=t===void 0?16:ty(t.type)),t):1}function Si(t,e,n,i){if(50<Aa)throw Aa=0,Uh=null,Error(se(185));il(t,n,i),(!(Ke&2)||t!==jt)&&(t===jt&&(!(Ke&2)&&(Oc|=n),Bt===4&&Sr(t,Qt)),En(t,i),n===1&&Ke===0&&!(e.mode&1)&&(Lo=Pt()+500,Ic&&Vr()))}function En(t,e){var n=t.callbackNode;a1(t,e);var i=Xu(t,t===jt?Qt:0);if(i===0)n!==null&&Rg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rg(n),e===1)t.tag===0?oE(S0.bind(null,t)):xy(S0.bind(null,t)),nE(function(){!(Ke&6)&&Vr()}),n=null;else{switch(q_(i)){case 1:n=Wp;break;case 4:n=X_;break;case 16:n=$u;break;case 536870912:n=j_;break;default:n=$u}n=_x(n,fx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function fx(t,e){if(wu=-1,Tu=0,Ke&6)throw Error(se(327));var n=t.callbackNode;if(vo()&&t.callbackNode!==n)return null;var i=Xu(t,t===jt?Qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=cc(t,i);else{e=i;var r=Ke;Ke|=2;var s=hx();(jt!==t||Qt!==e)&&(Gi=null,Lo=Pt()+500,as(t,e));do try{bE();break}catch(a){dx(t,a)}while(!0);im(),ac.current=s,Ke=r,Ot!==null?e=0:(jt=null,Qt=0,e=Bt)}if(e!==0){if(e===2&&(r=lh(t),r!==0&&(i=r,e=Oh(t,r))),e===1)throw n=Ya,as(t,0),Sr(t,i),En(t,Pt()),n;if(e===6)Sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!TE(r)&&(e=cc(t,i),e===2&&(s=lh(t),s!==0&&(i=s,e=Oh(t,s))),e===1))throw n=Ya,as(t,0),Sr(t,i),En(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Jr(t,yn,Gi);break;case 3:if(Sr(t,i),(i&130023424)===i&&(e=_m+500-Pt(),10<e)){if(Xu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=gh(Jr.bind(null,t,yn,Gi),e);break}Jr(t,yn,Gi);break;case 4:if(Sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-xi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wE(i/1960))-i,10<i){t.timeoutHandle=gh(Jr.bind(null,t,yn,Gi),i);break}Jr(t,yn,Gi);break;case 5:Jr(t,yn,Gi);break;default:throw Error(se(329))}}}return En(t,Pt()),t.callbackNode===n?fx.bind(null,t):null}function Oh(t,e){var n=Ta;return t.current.memoizedState.isDehydrated&&(as(t,e).flags|=256),t=cc(t,e),t!==2&&(e=yn,yn=n,e!==null&&Fh(e)),t}function Fh(t){yn===null?yn=t:yn.push.apply(yn,t)}function TE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Mi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Sr(t,e){for(e&=~vm,e&=~Oc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xi(e),i=1<<n;t[n]=-1,e&=~i}}function S0(t){if(Ke&6)throw Error(se(327));vo();var e=Xu(t,0);if(!(e&1))return En(t,Pt()),null;var n=cc(t,e);if(t.tag!==0&&n===2){var i=lh(t);i!==0&&(e=i,n=Oh(t,i))}if(n===1)throw n=Ya,as(t,0),Sr(t,e),En(t,Pt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Jr(t,yn,Gi),En(t,Pt()),null}function ym(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(Lo=Pt()+500,Ic&&Vr())}}function ps(t){Er!==null&&Er.tag===0&&!(Ke&6)&&vo();var e=Ke;Ke|=1;var n=ii.transition,i=ut;try{if(ii.transition=null,ut=1,t)return t()}finally{ut=i,ii.transition=n,Ke=e,!(Ke&6)&&Vr()}}function xm(){Nn=lo.current,gt(lo)}function as(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tE(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(em(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Zu();break;case 3:Ro(),gt(Sn),gt(ln),um();break;case 5:lm(i);break;case 4:Ro();break;case 13:gt(St);break;case 19:gt(St);break;case 10:rm(i.type._context);break;case 22:case 23:xm()}n=n.return}if(jt=t,Ot=t=Nr(t.current,null),Qt=Nn=e,Bt=0,Ya=null,vm=Oc=hs=0,yn=Ta=null,ss!==null){for(e=0;e<ss.length;e++)if(n=ss[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ss=null}return t}function dx(t,e){do{var n=Ot;try{if(im(),Su.current=oc,sc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}sc=!1}if(ds=0,$t=zt=Mt=null,Ea=!1,$a=0,gm.current=null,n===null||n.return===null){Bt=1,Ya=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=l0(o);if(p!==null){p.flags&=-257,u0(p,o,a,s,e),p.mode&1&&a0(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){a0(s,u,e),Sm();break e}l=Error(se(426))}}else if(yt&&a.mode&1){var m=l0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),u0(m,o,a,s,e),tm(Po(l,a));break e}}s=l=Po(l,a),Bt!==4&&(Bt=2),Ta===null?Ta=[s]:Ta.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=qy(s,l,e);t0(s,h);break e;case 1:a=l;var _=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Lr===null||!Lr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Ky(s,a,e);t0(s,x);break e}}s=s.return}while(s!==null)}mx(n)}catch(b){e=b,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function hx(){var t=ac.current;return ac.current=oc,t===null?oc:t}function Sm(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),jt===null||!(hs&268435455)&&!(Oc&268435455)||Sr(jt,Qt)}function cc(t,e){var n=Ke;Ke|=2;var i=hx();(jt!==t||Qt!==e)&&(Gi=null,as(t,e));do try{AE();break}catch(r){dx(t,r)}while(!0);if(im(),Ke=n,ac.current=i,Ot!==null)throw Error(se(261));return jt=null,Qt=0,Bt}function AE(){for(;Ot!==null;)px(Ot)}function bE(){for(;Ot!==null&&!QM();)px(Ot)}function px(t){var e=vx(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?mx(t):Ot=e,gm.current=null}function mx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=xE(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ot=null;return}}else if(n=yE(n,e,Nn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Bt===0&&(Bt=5)}function Jr(t,e,n){var i=ut,r=ii.transition;try{ii.transition=null,ut=1,CE(t,e,n,i)}finally{ii.transition=r,ut=i}return null}function CE(t,e,n,i){do vo();while(Er!==null);if(Ke&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(l1(t,s),t===jt&&(Ot=jt=null,Qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,_x($u,function(){return vo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ii.transition,ii.transition=null;var o=ut;ut=1;var a=Ke;Ke|=4,gm.current=null,ME(t,n),ux(n,t),Y1(ph),ju=!!hh,ph=hh=null,t.current=n,EE(n),JM(),Ke=a,ut=o,ii.transition=s}else t.current=n;if(Fl&&(Fl=!1,Er=t,uc=r),s=t.pendingLanes,s===0&&(Lr=null),n1(n.stateNode),En(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(lc)throw lc=!1,t=Dh,Dh=null,t;return uc&1&&t.tag!==0&&vo(),s=t.pendingLanes,s&1?t===Uh?Aa++:(Aa=0,Uh=t):Aa=0,Vr(),null}function vo(){if(Er!==null){var t=q_(uc),e=ii.transition,n=ut;try{if(ii.transition=null,ut=16>t?16:t,Er===null)var i=!1;else{if(t=Er,Er=null,uc=0,Ke&6)throw Error(se(331));var r=Ke;for(Ke|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:wa(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var d=c.sibling,p=c.return;if(ox(c),c===u){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Se=y;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Uc(9,a)}}catch(b){Rt(a,a.return,b)}if(a===o){Se=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Se=x;break e}Se=a.return}}if(Ke=r,Vr(),Ii&&typeof Ii.onPostCommitFiberRoot=="function")try{Ii.onPostCommitFiberRoot(bc,t)}catch{}i=!0}return i}finally{ut=n,ii.transition=e}}return!1}function M0(t,e,n){e=Po(n,e),e=qy(t,e,1),t=Pr(t,e,1),e=pn(),t!==null&&(il(t,1,e),En(t,e))}function Rt(t,e,n){if(t.tag===3)M0(t,t,n);else for(;e!==null;){if(e.tag===3){M0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Lr===null||!Lr.has(i))){t=Po(n,t),t=Ky(e,t,1),e=Pr(e,t,1),t=pn(),e!==null&&(il(e,1,t),En(e,t));break}}e=e.return}}function RE(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,jt===t&&(Qt&n)===n&&(Bt===4||Bt===3&&(Qt&130023424)===Qt&&500>Pt()-_m?as(t,0):vm|=n),En(t,e)}function gx(t,e){e===0&&(t.mode&1?(e=bl,bl<<=1,!(bl&130023424)&&(bl=4194304)):e=1);var n=pn();t=tr(t,e),t!==null&&(il(t,e,n),En(t,n))}function PE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),gx(t,n)}function LE(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),gx(t,n)}var vx;vx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)xn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return xn=!1,_E(t,e,n);xn=!!(t.flags&131072)}else xn=!1,yt&&e.flags&1048576&&Sy(e,ec,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Eu(t,e),t=e.pendingProps;var r=Ao(e,ln.current);go(e,n),r=fm(null,e,i,t,r,n);var s=dm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Qu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,om(e),r.updater=Dc,e.stateNode=r,r._reactInternals=e,Eh(e,i,t,n),e=Ah(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&Jp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=NE(i),t=mi(i,t),r){case 0:e=Th(null,e,i,t,n);break e;case 1:e=d0(null,e,i,t,n);break e;case 11:e=c0(null,e,i,t,n);break e;case 14:e=f0(null,e,i,mi(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Th(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),d0(t,e,i,r,n);case 3:e:{if(ex(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,by(t,e),ic(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Po(Error(se(423)),e),e=h0(t,e,i,n,r);break e}else if(i!==r){r=Po(Error(se(424)),e),e=h0(t,e,i,n,r);break e}else for(Un=Rr(e.stateNode.containerInfo.firstChild),kn=e,yt=!0,vi=null,n=Ty(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bo(),i===r){e=nr(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Cy(e),t===null&&xh(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,mh(i,r)?o=null:s!==null&&mh(i,s)&&(e.flags|=32),Jy(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&xh(e),null;case 13:return tx(t,e,n);case 4:return am(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Co(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),c0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(tc,i._currentValue),i._currentValue=o,s!==null)if(Mi(s.value,o)){if(s.children===r.children&&!Sn.current){e=nr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Sh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,go(e,n),r=si(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=mi(i,e.pendingProps),r=mi(i.type,r),f0(t,e,i,r,n);case 15:return Zy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:mi(i,r),Eu(t,e),e.tag=1,Mn(i)?(t=!0,Qu(e)):t=!1,go(e,n),Yy(e,i,r),Eh(e,i,r,n),Ah(null,e,i,!0,t,n);case 19:return nx(t,e,n);case 22:return Qy(t,e,n)}throw Error(se(156,e.tag))};function _x(t,e){return $_(t,e)}function IE(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(t,e,n,i){return new IE(t,e,n,i)}function Mm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function NE(t){if(typeof t=="function")return Mm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Hp)return 11;if(t===Vp)return 14}return 2}function Nr(t,e){var n=t.alternate;return n===null?(n=ei(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Mm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Qs:return ls(n.children,r,s,e);case Bp:o=8,r|=8;break;case jd:return t=ei(12,n,e,r|2),t.elementType=jd,t.lanes=s,t;case Yd:return t=ei(13,n,e,r),t.elementType=Yd,t.lanes=s,t;case qd:return t=ei(19,n,e,r),t.elementType=qd,t.lanes=s,t;case C_:return Fc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case A_:o=10;break e;case b_:o=9;break e;case Hp:o=11;break e;case Vp:o=14;break e;case _r:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=ei(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ls(t,e,n,i){return t=ei(7,t,i,e),t.lanes=n,t}function Fc(t,e,n,i){return t=ei(22,t,i,e),t.elementType=C_,t.lanes=n,t.stateNode={isHidden:!1},t}function td(t,e,n){return t=ei(6,t,null,e),t.lanes=n,t}function nd(t,e,n){return e=ei(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DE(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Of(0),this.expirationTimes=Of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Of(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Em(t,e,n,i,r,s,o,a,l){return t=new DE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ei(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},om(s),t}function UE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function yx(t){if(!t)return Fr;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(Mn(n))return yy(t,n,e)}return e}function xx(t,e,n,i,r,s,o,a,l){return t=Em(n,i,!0,t,r,s,o,a,l),t.context=yx(null),n=t.current,i=pn(),r=Ir(n),s=Zi(i,r),s.callback=e??null,Pr(n,s,r),t.current.lanes=r,il(t,r,i),En(t,i),t}function kc(t,e,n,i){var r=e.current,s=pn(),o=Ir(r);return n=yx(n),e.context===null?e.context=n:e.pendingContext=n,e=Zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Pr(r,e,o),t!==null&&(Si(t,r,o,s),xu(t,r,o)),o}function fc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function E0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function wm(t,e){E0(t,e),(t=t.alternate)&&E0(t,e)}function OE(){return null}var Sx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Tm(t){this._internalRoot=t}zc.prototype.render=Tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));kc(t,e,null,null)};zc.prototype.unmount=Tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ps(function(){kc(null,t,null,null)}),e[er]=null}};function zc(t){this._internalRoot=t}zc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Q_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xr.length&&e!==0&&e<xr[n].priority;n++);xr.splice(n,0,t),n===0&&ey(t)}};function Am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function w0(){}function FE(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fc(o);s.call(u)}}var o=xx(e,i,t,0,null,!1,!1,"",w0);return t._reactRootContainer=o,t[er]=o.current,Ba(t.nodeType===8?t.parentNode:t),ps(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=fc(l);a.call(u)}}var l=Em(t,0,!1,null,null,!1,!1,"",w0);return t._reactRootContainer=l,t[er]=l.current,Ba(t.nodeType===8?t.parentNode:t),ps(function(){kc(e,l,n,i)}),l}function Hc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=fc(o);a.call(l)}}kc(e,o,t,r)}else o=FE(n,e,t,r,i);return fc(o)}K_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ha(e.pendingLanes);n!==0&&($p(e,n|1),En(e,Pt()),!(Ke&6)&&(Lo=Pt()+500,Vr()))}break;case 13:ps(function(){var i=tr(t,1);if(i!==null){var r=pn();Si(i,t,1,r)}}),wm(t,1)}};Xp=function(t){if(t.tag===13){var e=tr(t,134217728);if(e!==null){var n=pn();Si(e,t,134217728,n)}wm(t,134217728)}};Z_=function(t){if(t.tag===13){var e=Ir(t),n=tr(t,e);if(n!==null){var i=pn();Si(n,t,e,i)}wm(t,e)}};Q_=function(){return ut};J_=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};sh=function(t,e,n){switch(e){case"input":if(Qd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Lc(i);if(!r)throw Error(se(90));P_(i),Qd(i,r)}}}break;case"textarea":I_(t,n);break;case"select":e=n.value,e!=null&&fo(t,!!n.multiple,e,!1)}};z_=ym;B_=ps;var kE={usingClientEntryPoint:!1,Events:[sl,no,Lc,F_,k_,ym]},na={findFiberByHostInstance:rs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zE={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=G_(t),t===null?null:t.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||OE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{bc=kl.inject(zE),Ii=kl}catch{}}Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kE;Hn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Am(e))throw Error(se(200));return UE(t,e,null,n)};Hn.createRoot=function(t,e){if(!Am(t))throw Error(se(299));var n=!1,i="",r=Sx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Em(t,1,!1,null,null,n,!1,i,r),t[er]=e.current,Ba(t.nodeType===8?t.parentNode:t),new Tm(e)};Hn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=G_(e),t=t===null?null:t.stateNode,t};Hn.flushSync=function(t){return ps(t)};Hn.hydrate=function(t,e,n){if(!Bc(e))throw Error(se(200));return Hc(null,t,e,!0,n)};Hn.hydrateRoot=function(t,e,n){if(!Am(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Sx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xx(e,null,t,1,n??null,r,!1,s,o),t[er]=e.current,Ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zc(e)};Hn.render=function(t,e,n){if(!Bc(e))throw Error(se(200));return Hc(null,t,e,!1,n)};Hn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(se(40));return t._reactRootContainer?(ps(function(){Hc(null,null,t,!1,function(){t._reactRootContainer=null,t[er]=null})}),!0):!1};Hn.unstable_batchedUpdates=ym;Hn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Hc(t,e,n,!1,i)};Hn.version="18.3.1-next-f1338f8080-20240426";function Mx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mx)}catch(t){console.error(t)}}Mx(),M_.exports=Hn;var BE=M_.exports,T0=BE;$d.createRoot=T0.createRoot,$d.hydrateRoot=T0.hydrateRoot;function HE(t,e,n){const i=n-e;return((t-e)%i+i)%i+e}function VE(t,e,n){return Math.min(e,Math.max(t,n))}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="167",GE=0,A0=1,WE=2,Ex=1,$E=2,Vi=3,kr=0,wn=1,Pi=2,Dr=0,_o=1,b0=2,C0=3,R0=4,XE=5,ns=100,jE=101,YE=102,qE=103,KE=104,ZE=200,QE=201,JE=202,ew=203,kh=204,zh=205,tw=206,nw=207,iw=208,rw=209,sw=210,ow=211,aw=212,lw=213,uw=214,cw=0,fw=1,dw=2,dc=3,hw=4,pw=5,mw=6,gw=7,wx=0,vw=1,_w=2,Ur=0,yw=1,xw=2,Sw=3,Mw=4,Ew=5,ww=6,Tw=7,Tx=300,Io=301,No=302,Bh=303,Hh=304,Gc=306,hc=1e3,wr=1001,pc=1002,On=1003,Ax=1004,ma=1005,Jn=1006,bu=1007,Tr=1008,ir=1009,bx=1010,Cx=1011,qa=1012,bm=1013,ms=1014,qi=1015,al=1016,Cm=1017,Rm=1018,Do=1020,Rx=35902,Px=1021,Lx=1022,ti=1023,Ix=1024,Nx=1025,yo=1026,Uo=1027,Dx=1028,Pm=1029,Ux=1030,Lm=1031,Im=1033,Cu=33776,Ru=33777,Pu=33778,Lu=33779,Vh=35840,Gh=35841,Wh=35842,$h=35843,Xh=36196,jh=37492,Yh=37496,qh=37808,Kh=37809,Zh=37810,Qh=37811,Jh=37812,ep=37813,tp=37814,np=37815,ip=37816,rp=37817,sp=37818,op=37819,ap=37820,lp=37821,Iu=36492,up=36494,cp=36495,Ox=36283,fp=36284,dp=36285,hp=36286,Aw=2300,bw=2301,Cw=3200,Rw=3201,Pw=0,Lw=1,$i="",Yn="srgb",Gr="srgb-linear",Nm="display-p3",Wc="display-p3-linear",mc="linear",mt="srgb",gc="rec709",vc="p3",bs=7680,P0=519,Iw=512,Nw=513,Dw=514,Fx=515,Uw=516,Ow=517,Fw=518,kw=519,pp=35044,L0="300 es",Ki=2e3,_c=2001;class Ho{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let I0=1234567;const ba=Math.PI/180,Ka=180/Math.PI;function Qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function Dm(t,e){return(t%e+e)%e}function zw(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Bw(t,e,n){return t!==e?(n-t)/(e-t):0}function Ca(t,e,n){return(1-n)*t+n*e}function Hw(t,e,n,i){return Ca(t,e,1-Math.exp(-n*i))}function Vw(t,e=1){return e-Math.abs(Dm(t,e*2)-e)}function Gw(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Ww(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function $w(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Xw(t,e){return t+Math.random()*(e-t)}function jw(t){return t*(.5-Math.random())}function Yw(t){t!==void 0&&(I0=t);let e=I0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qw(t){return t*ba}function Kw(t){return t*Ka}function Zw(t){return(t&t-1)===0&&t!==0}function Qw(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Jw(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function eT(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),v=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*v,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*v,a*u);break;case"ZYZ":t.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function lt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const mp={DEG2RAD:ba,RAD2DEG:Ka,generateUUID:Qi,clamp:dn,euclideanModulo:Dm,mapLinear:zw,inverseLerp:Bw,lerp:Ca,damp:Hw,pingpong:Vw,smoothstep:Gw,smootherstep:Ww,randInt:$w,randFloat:Xw,randFloatSpread:jw,seededRandom:Yw,degToRad:qw,radToDeg:Kw,isPowerOfTwo:Zw,ceilPowerOfTwo:Qw,floorPowerOfTwo:Jw,setQuaternionFromProperEuler:eT,normalize:lt,denormalize:_i};class Ze{constructor(e=0,n=0){Ze.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],v=i[8],g=r[0],m=r[3],h=r[6],_=r[1],y=r[4],x=r[7],b=r[2],A=r[5],E=r[8];return s[0]=o*g+a*_+l*b,s[3]=o*m+a*y+l*A,s[6]=o*h+a*x+l*E,s[1]=u*g+c*_+f*b,s[4]=u*m+c*y+f*A,s[7]=u*h+c*x+f*E,s[2]=d*g+p*_+v*b,s[5]=d*m+p*y+v*A,s[8]=d*h+p*x+v*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,v=n*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*n-r*l)*g,e[5]=(r*s-a*n)*g,e[6]=p*g,e[7]=(i*l-u*n)*g,e[8]=(o*n-i*s)*g,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(id.makeScale(e,n)),this}rotate(e){return this.premultiply(id.makeRotation(-e)),this}translate(e,n){return this.premultiply(id.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const id=new We;function kx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function yc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function tT(){const t=yc("canvas");return t.style.display="block",t}const N0={};function xo(t){t in N0||(N0[t]=!0,console.warn(t))}function nT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const D0=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),U0=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ia={[Gr]:{transfer:mc,primaries:gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Yn]:{transfer:mt,primaries:gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Wc]:{transfer:mc,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(U0),fromReference:t=>t.applyMatrix3(D0)},[Nm]:{transfer:mt,primaries:vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(U0),fromReference:t=>t.applyMatrix3(D0).convertLinearToSRGB()}},iT=new Set([Gr,Wc]),ot={enabled:!0,_workingColorSpace:Gr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!iT.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ia[e].toReference,r=ia[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ia[t].primaries},getTransfer:function(t){return t===$i?mc:ia[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ia[e].luminanceCoefficients)}};function So(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function rd(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Cs;class rT{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cs===void 0&&(Cs=yc("canvas")),Cs.width=e.width,Cs.height=e.height;const i=Cs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Cs}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=yc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=So(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(So(n[i]/255)*255):n[i]=So(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sT=0;class Um{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(sd(r[o].image)):s.push(sd(r[o]))}else s=sd(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function sd(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oT=0;class an extends Ho{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=wr,r=wr,s=Jn,o=Tr,a=ti,l=ir,u=an.DEFAULT_ANISOTROPY,c=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oT++}),this.uuid=Qi(),this.name="",this.source=new Um(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hc:e.x=e.x-Math.floor(e.x);break;case wr:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hc:e.y=e.y-Math.floor(e.y);break;case wr:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Tx;an.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,n=0,i=0,r=1){Xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,x=(p+1)/2,b=(h+1)/2,A=(c+d)/4,E=(f+g)/4,P=(v+m)/4;return y>x&&y>b?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=A/i,s=E/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=P/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=E/s,r=P/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(f-g)/_,this.z=(d-c)/_,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aT extends Ho{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Xt(0,0,e,n),this.scissorTest=!1,this.viewport=new Xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Um(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gs extends aT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class zx extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lT extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=wr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=v,e[n+3]=g;return}if(f!==g||l!==d||u!==p||c!==v){let m=1-a;const h=l*d+u*p+c*v+f*g,_=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,h*_);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*_;if(l=l*m+d*x,u=u*m+p*x,c=c*m+v*x,f=f*m+g*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[n]=a*v+c*f+l*p-u*d,e[n+1]=l*v+c*d+u*f-a*p,e[n+2]=u*v+c*p+a*d-l*f,e[n+3]=c*v-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"YXZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"ZXY":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"ZYX":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"YZX":this._x=d*c*f+u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f-d*p*v;break;case"XZY":this._x=d*c*f-u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(O0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new k,O0=new Vo;class ll{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(di.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(di.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=di.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,di):di.fromBufferAttribute(s,o),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),zl.copy(i.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Bl.subVectors(this.max,ra),Rs.subVectors(e.a,ra),Ps.subVectors(e.b,ra),Ls.subVectors(e.c,ra),fr.subVectors(Ps,Rs),dr.subVectors(Ls,Ps),$r.subVectors(Rs,Ls);let n=[0,-fr.z,fr.y,0,-dr.z,dr.y,0,-$r.z,$r.y,fr.z,0,-fr.x,dr.z,0,-dr.x,$r.z,0,-$r.x,-fr.y,fr.x,0,-dr.y,dr.x,0,-$r.y,$r.x,0];return!ad(n,Rs,Ps,Ls,Bl)||(n=[1,0,0,0,1,0,0,0,1],!ad(n,Rs,Ps,Ls,Bl))?!1:(Hl.crossVectors(fr,dr),n=[Hl.x,Hl.y,Hl.z],ad(n,Rs,Ps,Ls,Bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],di=new k,zl=new ll,Rs=new k,Ps=new k,Ls=new k,fr=new k,dr=new k,$r=new k,ra=new k,Bl=new k,Hl=new k,Xr=new k;function ad(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Xr.fromArray(t,s);const a=r.x*Math.abs(Xr.x)+r.y*Math.abs(Xr.y)+r.z*Math.abs(Xr.z),l=e.dot(Xr),u=n.dot(Xr),c=i.dot(Xr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const uT=new ll,sa=new k,ld=new k;class Om{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):uT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const n=sa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(sa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ld.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(ld)),this.expandByPoint(sa.copy(e.center).sub(ld))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new k,ud=new k,Vl=new k,hr=new k,cd=new k,Gl=new k,fd=new k;class Bx{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ud.copy(e).add(n).multiplyScalar(.5),Vl.copy(n).sub(e).normalize(),hr.copy(this.origin).sub(ud);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Vl),a=hr.dot(this.direction),l=-hr.dot(Vl),u=hr.lengthSq(),c=Math.abs(1-o*o);let f,d,p,v;if(c>0)if(f=o*l-a,d=o*a-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const g=1/c;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ud).addScaledVector(Vl,d),p}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const i=ki.dot(this.direction),r=ki.dot(ki)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,i,r,s){cd.subVectors(n,e),Gl.subVectors(i,e),fd.crossVectors(cd,Gl);let o=this.direction.dot(fd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,e);const l=a*this.direction.dot(Gl.crossVectors(hr,Gl));if(l<0)return null;const u=a*this.direction.dot(cd.cross(hr));if(u<0||l+u>o)return null;const c=-a*hr.dot(fd);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,u,c,f,d,p,v,g,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,d,p,v,g,m)}set(e,n,i,r,s,o,a,l,u,c,f,d,p,v,g,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,v=a*c,g=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+v*u,n[5]=d-g*u,n[9]=-a*l,n[2]=g-d*u,n[6]=v+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,v=u*c,g=u*f;n[0]=d+g*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=g+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,v=u*c,g=u*f;n[0]=d-g*a,n[4]=-o*f,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=g-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,v=a*c,g=a*f;n[0]=l*c,n[4]=v*u-p,n[8]=d*u+g,n[1]=l*f,n[5]=g*u+d,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,g=a*u;n[0]=l*c,n[4]=g-d*f,n[8]=v*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+v,n[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,g=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+g,n[5]=o*c,n[9]=p*f-v,n[2]=v*f-p,n[6]=a*c,n[10]=g*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cT,e,fT)}lookAt(e,n,i){const r=this.elements;return Ln.subVectors(e,n),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),pr.crossVectors(i,Ln),pr.lengthSq()===0&&(Math.abs(i.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),pr.crossVectors(i,Ln)),pr.normalize(),Wl.crossVectors(Ln,pr),r[0]=pr.x,r[4]=Wl.x,r[8]=Ln.x,r[1]=pr.y,r[5]=Wl.y,r[9]=Ln.y,r[2]=pr.z,r[6]=Wl.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],v=i[2],g=i[6],m=i[10],h=i[14],_=i[3],y=i[7],x=i[11],b=i[15],A=r[0],E=r[4],P=r[8],T=r[12],S=r[1],R=r[5],z=r[9],O=r[13],j=r[2],H=r[6],Y=r[10],X=r[14],I=r[3],K=r[7],J=r[11],ae=r[15];return s[0]=o*A+a*S+l*j+u*I,s[4]=o*E+a*R+l*H+u*K,s[8]=o*P+a*z+l*Y+u*J,s[12]=o*T+a*O+l*X+u*ae,s[1]=c*A+f*S+d*j+p*I,s[5]=c*E+f*R+d*H+p*K,s[9]=c*P+f*z+d*Y+p*J,s[13]=c*T+f*O+d*X+p*ae,s[2]=v*A+g*S+m*j+h*I,s[6]=v*E+g*R+m*H+h*K,s[10]=v*P+g*z+m*Y+h*J,s[14]=v*T+g*O+m*X+h*ae,s[3]=_*A+y*S+x*j+b*I,s[7]=_*E+y*R+x*H+b*K,s[11]=_*P+y*z+x*Y+b*J,s[15]=_*T+y*O+x*X+b*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-n*l*f+n*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],h=e[15],_=f*m*u-g*d*u+g*l*p-a*m*p-f*l*h+a*d*h,y=v*d*u-c*m*u-v*l*p+o*m*p+c*l*h-o*d*h,x=c*g*u-v*f*u+v*a*p-o*g*p-c*a*h+o*f*h,b=v*f*l-c*g*l-v*a*d+o*g*d+c*a*m-o*f*m,A=n*_+i*y+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=_*E,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*E,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*E,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*E,e[4]=y*E,e[5]=(c*m*s-v*d*s+v*r*p-n*m*p-c*r*h+n*d*h)*E,e[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*h-n*l*h)*E,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*E,e[8]=x*E,e[9]=(v*f*s-c*g*s-v*i*p+n*g*p+c*i*h-n*f*h)*E,e[10]=(o*g*s-v*a*s+v*i*u-n*g*u-o*i*h+n*a*h)*E,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*E,e[12]=b*E,e[13]=(c*g*r-v*f*r+v*i*d-n*g*d-c*i*m+n*f*m)*E,e[14]=(v*a*r-o*g*r-v*i*l+n*g*l+o*i*m-n*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*d+n*a*d)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,v=s*f,g=o*c,m=o*f,h=a*f,_=l*u,y=l*c,x=l*f,b=i.x,A=i.y,E=i.z;return r[0]=(1-(g+h))*b,r[1]=(p+x)*b,r[2]=(v-y)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+h))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(v+y)*E,r[9]=(m-_)*E,r[10]=(1-(d+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Is.set(r[0],r[1],r[2]).length();const o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hi.copy(this);const u=1/s,c=1/o,f=1/a;return hi.elements[0]*=u,hi.elements[1]*=u,hi.elements[2]*=u,hi.elements[4]*=c,hi.elements[5]*=c,hi.elements[6]*=c,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,n.setFromRotationMatrix(hi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ki){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let p,v;if(a===Ki)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===_c)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ki){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),d=(n+e)*u,p=(i+r)*c;let v,g;if(a===Ki)v=(o+s)*f,g=-2*f;else if(a===_c)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Is=new k,hi=new xt,cT=new k(0,0,0),fT=new k(1,1,1),pr=new k,Wl=new k,Ln=new k,F0=new xt,k0=new Vo;class rr{constructor(e=0,n=0,i=0,r=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return F0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(F0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return k0.setFromEuler(this),this.setFromQuaternion(k0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class Fm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dT=0;const z0=new k,Ns=new Vo,zi=new xt,$l=new k,oa=new k,hT=new k,pT=new Vo,B0=new k(1,0,0),H0=new k(0,1,0),V0=new k(0,0,1),G0={type:"added"},mT={type:"removed"},Ds={type:"childadded",child:null},dd={type:"childremoved",child:null};class mn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dT++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mn.DEFAULT_UP.clone();const e=new k,n=new rr,i=new Vo,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(B0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(V0,e)}translateOnAxis(e,n){return z0.copy(e).applyQuaternion(this.quaternion),this.position.add(z0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(B0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(V0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$l.copy(e):$l.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(oa,$l,this.up):zi.lookAt($l,oa,this.up),this.quaternion.setFromRotationMatrix(zi),r&&(zi.extractRotation(r.matrixWorld),Ns.setFromRotationMatrix(zi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(G0),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mT),dd.child=e,this.dispatchEvent(dd),dd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(G0),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,hT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,pT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mn.DEFAULT_UP=new k(0,1,0);mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pi=new k,Bi=new k,hd=new k,Hi=new k,Us=new k,Os=new k,W0=new k,pd=new k,md=new k,gd=new k;class Li{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pi.subVectors(e,n),r.cross(pi);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pi.subVectors(r,n),Bi.subVectors(i,n),hd.subVectors(e,n);const o=pi.dot(pi),a=pi.dot(Bi),l=pi.dot(hd),u=Bi.dot(Bi),c=Bi.dot(hd),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l)}static isFrontFacing(e,n,i,r){return pi.subVectors(i,n),Bi.subVectors(e,n),pi.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),pi.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Li.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Li.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Us.subVectors(r,i),Os.subVectors(s,i),pd.subVectors(e,i);const l=Us.dot(pd),u=Os.dot(pd);if(l<=0&&u<=0)return n.copy(i);md.subVectors(e,r);const c=Us.dot(md),f=Os.dot(md);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(Us,o);gd.subVectors(e,s);const p=Us.dot(gd),v=Os.dot(gd);if(v>=0&&p<=v)return n.copy(s);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(Os,a);const m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return W0.subVectors(s,r),a=(f-c)/(f-c+(p-v)),n.copy(r).addScaledVector(W0,a);const h=1/(m+g+d);return o=g*h,a=d*h,n.copy(i).addScaledVector(Us,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Hx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mr={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function vd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=Dm(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=vd(o,s,e+1/3),this.g=vd(o,s,e),this.b=vd(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Yn){const i=Hx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=So(e.r),this.g=So(e.g),this.b=So(e.b),this}copyLinearToSRGB(e){return this.r=rd(e.r),this.g=rd(e.g),this.b=rd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yn){return ot.fromWorkingColorSpace(rn.copy(this),e),Math.round(dn(rn.r*255,0,255))*65536+Math.round(dn(rn.g*255,0,255))*256+Math.round(dn(rn.b*255,0,255))}getHexString(e=Yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Yn){ot.fromWorkingColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mr),this.setHSL(mr.h+e,mr.s+n,mr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mr),e.getHSL(Xl);const i=Ca(mr.h,Xl.h,n),r=Ca(mr.s,Xl.s,n),s=Ca(mr.l,Xl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Je;Je.NAMES=Hx;let gT=0;class $c extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gT++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=_o,this.side=kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=zh,this.blendEquation=ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=dc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==_o&&(i.blending=this.blending),this.side!==kr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kh&&(i.blendSrc=this.blendSrc),this.blendDst!==zh&&(i.blendDst=this.blendDst),this.blendEquation!==ns&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==dc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class km extends $c{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rr,this.combine=wx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new k,jl=new Ze;class Ht{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xo("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)jl.fromBufferAttribute(this,n),jl.applyMatrix3(e),this.setXY(n,jl.x,jl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=_i(n,this.array)),n}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=_i(n,this.array)),n}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=_i(n,this.array)),n}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=_i(n,this.array)),n}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pp&&(e.usage=this.usage),e}}class zm extends Ht{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vx extends Ht{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class us extends Ht{constructor(e,n,i){super(new Float32Array(e),n,i)}}let vT=0;const $n=new xt,_d=new mn,Fs=new k,In=new ll,aa=new ll,Wt=new k;class sr extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vT++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kx(e)?Vx:zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return $n.makeRotationFromQuaternion(e),this.applyMatrix4($n),this}rotateX(e){return $n.makeRotationX(e),this.applyMatrix4($n),this}rotateY(e){return $n.makeRotationY(e),this.applyMatrix4($n),this}rotateZ(e){return $n.makeRotationZ(e),this.applyMatrix4($n),this}translate(e,n,i){return $n.makeTranslation(e,n,i),this.applyMatrix4($n),this}scale(e,n,i){return $n.makeScale(e,n,i),this.applyMatrix4($n),this}lookAt(e){return _d.lookAt(e),_d.updateMatrix(),this.applyMatrix4(_d.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new us(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ll);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Om);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(In.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];aa.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(In.min,aa.min),In.expandByPoint(Wt),Wt.addVectors(In.max,aa.max),In.expandByPoint(Wt)):(In.expandByPoint(aa.min),In.expandByPoint(aa.max))}In.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Wt.fromBufferAttribute(a,u),l&&(Fs.fromBufferAttribute(e,u),Wt.add(Fs)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new k,l[P]=new k;const u=new k,c=new k,f=new k,d=new Ze,p=new Ze,v=new Ze,g=new k,m=new k;function h(P,T,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,T),v.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(d),v.sub(d);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(R),a[P].add(g),a[T].add(g),a[S].add(g),l[P].add(m),l[T].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let P=0,T=_.length;P<T;++P){const S=_[P],R=S.start,z=S.count;for(let O=R,j=R+z;O<j;O+=3)h(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new k,x=new k,b=new k,A=new k;function E(P){b.fromBufferAttribute(r,P),A.copy(b);const T=a[P];y.copy(T),y.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(A,T);const R=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,T=_.length;P<T;++P){const S=_[P],R=S.start,z=S.count;for(let O=R,j=R+z;O<j;O+=3)E(e.getX(O+0)),E(e.getX(O+1)),E(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ht(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,g),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)d[v++]=u[p++]}return new Ht(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $0=new xt,jr=new Bx,Yl=new Om,X0=new k,ks=new k,zs=new k,Bs=new k,yd=new k,ql=new k,Kl=new Ze,Zl=new Ze,Ql=new Ze,j0=new k,Y0=new k,q0=new k,Jl=new k,eu=new k;class yi extends mn{constructor(e=new sr,n=new km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(yd.fromBufferAttribute(f,e),o?ql.addScaledVector(yd,c):ql.addScaledVector(yd.sub(n),c))}n.add(ql)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Yl.copy(i.boundingSphere),Yl.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Yl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Yl,X0)===null||jr.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&($0.copy(s).invert(),jr.copy(e.ray).applyMatrix4($0),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=a.getX(x),E=a.getX(x+1),P=a.getX(x+2);r=tu(this,h,e,i,u,c,f,A,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=tu(this,o,e,i,u,c,f,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=o[m.materialIndex],_=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=_,b=y;x<b;x+=3){const A=x,E=x+1,P=x+2;r=tu(this,h,e,i,u,c,f,A,E,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const _=m,y=m+1,x=m+2;r=tu(this,o,e,i,u,c,f,_,y,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function _T(t,e,n,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===kr,a),l===null)return null;eu.copy(a),eu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(eu);return u<n.near||u>n.far?null:{distance:u,point:eu.clone(),object:t}}function tu(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,ks),t.getVertexPosition(l,zs),t.getVertexPosition(u,Bs);const c=_T(t,e,n,i,ks,zs,Bs,Jl);if(c){r&&(Kl.fromBufferAttribute(r,a),Zl.fromBufferAttribute(r,l),Ql.fromBufferAttribute(r,u),c.uv=Li.getInterpolation(Jl,ks,zs,Bs,Kl,Zl,Ql,new Ze)),s&&(Kl.fromBufferAttribute(s,a),Zl.fromBufferAttribute(s,l),Ql.fromBufferAttribute(s,u),c.uv1=Li.getInterpolation(Jl,ks,zs,Bs,Kl,Zl,Ql,new Ze)),o&&(j0.fromBufferAttribute(o,a),Y0.fromBufferAttribute(o,l),q0.fromBufferAttribute(o,u),c.normal=Li.getInterpolation(Jl,ks,zs,Bs,j0,Y0,q0,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new k,materialIndex:0};Li.getNormal(ks,zs,Bs,f.normal),c.face=f}return c}class ul extends sr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,n,e,o,s,0),v("z","y","x",1,-1,i,n,-e,o,s,1),v("x","z","y",1,1,e,i,n,r,o,2),v("x","z","y",1,-1,e,i,-n,r,o,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new us(u,3)),this.setAttribute("normal",new us(c,3)),this.setAttribute("uv",new us(f,2));function v(g,m,h,_,y,x,b,A,E,P,T){const S=x/E,R=b/P,z=x/2,O=b/2,j=A/2,H=E+1,Y=P+1;let X=0,I=0;const K=new k;for(let J=0;J<Y;J++){const ae=J*R-O;for(let Ae=0;Ae<H;Ae++){const He=Ae*S-z;K[g]=He*_,K[m]=ae*y,K[h]=j,u.push(K.x,K.y,K.z),K[g]=0,K[m]=0,K[h]=A>0?1:-1,c.push(K.x,K.y,K.z),f.push(Ae/E),f.push(1-J/P),X+=1}}for(let J=0;J<P;J++)for(let ae=0;ae<E;ae++){const Ae=d+ae+H*J,He=d+ae+H*(J+1),$=d+(ae+1)+H*(J+1),ie=d+(ae+1)+H*J;l.push(Ae,He,ie),l.push(He,$,ie),I+=6}a.addGroup(p,I,T),p+=I,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Oo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Oo(t[n]);for(const r in i)e[r]=i[r]}return e}function yT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const xT={clone:Oo,merge:cn};var ST=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class or extends $c{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ST,this.fragmentShader=MT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Oo(e.uniforms),this.uniformsGroups=yT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wx extends mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Ki}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gr=new k,K0=new Ze,Z0=new Ze;class Zn extends Wx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ka*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ka*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gr.x,gr.y).multiplyScalar(-e/gr.z),gr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gr.x,gr.y).multiplyScalar(-e/gr.z)}getViewSize(e,n){return this.getViewBounds(e,K0,Z0),n.subVectors(Z0,K0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Hs=-90,Vs=1;class ET extends mn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Zn(Hs,Vs,e,n);r.layers=this.layers,this.add(r);const s=new Zn(Hs,Vs,e,n);s.layers=this.layers,this.add(s);const o=new Zn(Hs,Vs,e,n);o.layers=this.layers,this.add(o);const a=new Zn(Hs,Vs,e,n);a.layers=this.layers,this.add(a);const l=new Zn(Hs,Vs,e,n);l.layers=this.layers,this.add(l);const u=new Zn(Hs,Vs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Ki)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $x extends an{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Io,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wT extends gs{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $x(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Jn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ul(5,5,5),s=new or({name:"CubemapFromEquirect",uniforms:Oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Dr});s.uniforms.tEquirect.value=n;const o=new yi(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Jn),new ET(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const xd=new k,TT=new k,AT=new We;class es{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xd.subVectors(i,n).cross(TT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xd),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||AT.getNormalMatrix(e),r=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yr=new Om,nu=new k;class Xx{constructor(e=new es,n=new es,i=new es,r=new es,s=new es,o=new es){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ki){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],h=r[12],_=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-h).normalize(),i[1].setComponents(l+s,d+u,m+p,x+h).normalize(),i[2].setComponents(l+o,d+c,m+v,x+_).normalize(),i[3].setComponents(l-o,d-c,m-v,x-_).normalize(),i[4].setComponents(l-a,d-f,m-g,x-y).normalize(),n===Ki)i[5].setComponents(l+a,d+f,m+g,x+y).normalize();else if(n===_c)i[5].setComponents(a,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yr)}intersectsSprite(e){return Yr.center.set(0,0,0),Yr.radius=.7071067811865476,Yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(nu.x=r.normal.x>0?e.max.x:e.min.x,nu.y=r.normal.y>0?e.max.y:e.min.y,nu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(nu)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jx(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function bT(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,d=l.updateRanges;if(t.bindBuffer(u,a),f.count===-1&&d.length===0&&t.bufferSubData(u,0,c),d.length!==0){for(let p=0,v=d.length;p<v;p++){const g=d[p];t.bufferSubData(u,g.start*c.BYTES_PER_ELEMENT,c,g.start,g.count)}l.clearUpdateRanges()}f.count!==-1&&(t.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class cl extends sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=n/l,p=[],v=[],g=[],m=[];for(let h=0;h<c;h++){const _=h*d-o;for(let y=0;y<u;y++){const x=y*f-s;v.push(x,-_,0),g.push(0,0,1),m.push(y/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let _=0;_<a;_++){const y=_+u*h,x=_+u*(h+1),b=_+1+u*(h+1),A=_+1+u*h;p.push(y,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new us(v,3)),this.setAttribute("normal",new us(g,3)),this.setAttribute("uv",new us(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}var CT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
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
#endif`,PT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,DT=`#ifdef USE_AOMAP
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
#endif`,UT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
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
#endif`,FT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HT=`#ifdef USE_IRIDESCENCE
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
#endif`,VT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,KT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZT=`#define PI 3.141592653589793
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
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
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
#endif`,eA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,iA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rA="gl_FragColor = linearToOutputTexel( gl_FragColor );",sA=`
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
}`,oA=`#ifdef USE_ENVMAP
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
#endif`,aA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lA=`#ifdef USE_ENVMAP
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
#endif`,uA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cA=`#ifdef USE_ENVMAP
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
#endif`,fA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mA=`#ifdef USE_GRADIENTMAP
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
}`,gA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yA=`uniform bool receiveShadow;
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
#endif`,xA=`#ifdef USE_ENVMAP
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
#endif`,SA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,MA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,EA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,TA=`PhysicalMaterial material;
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
#endif`,AA=`struct PhysicalMaterial {
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
}`,bA=`
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
#endif`,CA=`#if defined( RE_IndirectDiffuse )
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
#endif`,RA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,DA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,UA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,OA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,FA=`#if defined( USE_POINTS_UV )
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
#endif`,kA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,VA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GA=`#ifdef USE_MORPHTARGETS
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
#endif`,WA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$A=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,KA=`#ifdef USE_NORMALMAP
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
#endif`,ZA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ib=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ab=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ub=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,db=`float getShadowMask() {
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
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pb=`#ifdef USE_SKINNING
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
#endif`,mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gb=`#ifdef USE_SKINNING
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
#endif`,vb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_b=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sb=`#ifdef USE_TRANSMISSION
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
#endif`,Mb=`#ifdef USE_TRANSMISSION
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
#endif`,Eb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
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
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nb=`#include <common>
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
}`,Db=`#if DEPTH_PACKING == 3200
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
}`,Ub=`#define DISTANCE
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
}`,Ob=`#define DISTANCE
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
}`,Fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zb=`uniform float scale;
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
}`,Bb=`uniform vec3 diffuse;
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
}`,Hb=`#include <common>
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Gb=`#define LAMBERT
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
}`,Wb=`#define LAMBERT
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
}`,$b=`#define MATCAP
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
}`,Xb=`#define MATCAP
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
}`,jb=`#define NORMAL
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
}`,Yb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,Kb=`#define PHONG
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
}`,Zb=`#define STANDARD
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
}`,Qb=`#define STANDARD
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
}`,Jb=`#define TOON
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
}`,eC=`#define TOON
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
}`,tC=`uniform float size;
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#include <common>
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
}`,rC=`uniform vec3 color;
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
}`,sC=`uniform float rotation;
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
}`,oC=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:CT,alphahash_pars_fragment:RT,alphamap_fragment:PT,alphamap_pars_fragment:LT,alphatest_fragment:IT,alphatest_pars_fragment:NT,aomap_fragment:DT,aomap_pars_fragment:UT,batching_pars_vertex:OT,batching_vertex:FT,begin_vertex:kT,beginnormal_vertex:zT,bsdfs:BT,iridescence_fragment:HT,bumpmap_pars_fragment:VT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:WT,clipping_planes_pars_vertex:$T,clipping_planes_vertex:XT,color_fragment:jT,color_pars_fragment:YT,color_pars_vertex:qT,color_vertex:KT,common:ZT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:JT,displacementmap_pars_vertex:eA,displacementmap_vertex:tA,emissivemap_fragment:nA,emissivemap_pars_fragment:iA,colorspace_fragment:rA,colorspace_pars_fragment:sA,envmap_fragment:oA,envmap_common_pars_fragment:aA,envmap_pars_fragment:lA,envmap_pars_vertex:uA,envmap_physical_pars_fragment:xA,envmap_vertex:cA,fog_vertex:fA,fog_pars_vertex:dA,fog_fragment:hA,fog_pars_fragment:pA,gradientmap_pars_fragment:mA,lightmap_pars_fragment:gA,lights_lambert_fragment:vA,lights_lambert_pars_fragment:_A,lights_pars_begin:yA,lights_toon_fragment:SA,lights_toon_pars_fragment:MA,lights_phong_fragment:EA,lights_phong_pars_fragment:wA,lights_physical_fragment:TA,lights_physical_pars_fragment:AA,lights_fragment_begin:bA,lights_fragment_maps:CA,lights_fragment_end:RA,logdepthbuf_fragment:PA,logdepthbuf_pars_fragment:LA,logdepthbuf_pars_vertex:IA,logdepthbuf_vertex:NA,map_fragment:DA,map_pars_fragment:UA,map_particle_fragment:OA,map_particle_pars_fragment:FA,metalnessmap_fragment:kA,metalnessmap_pars_fragment:zA,morphinstance_vertex:BA,morphcolor_vertex:HA,morphnormal_vertex:VA,morphtarget_pars_vertex:GA,morphtarget_vertex:WA,normal_fragment_begin:$A,normal_fragment_maps:XA,normal_pars_fragment:jA,normal_pars_vertex:YA,normal_vertex:qA,normalmap_pars_fragment:KA,clearcoat_normal_fragment_begin:ZA,clearcoat_normal_fragment_maps:QA,clearcoat_pars_fragment:JA,iridescence_pars_fragment:eb,opaque_fragment:tb,packing:nb,premultiplied_alpha_fragment:ib,project_vertex:rb,dithering_fragment:sb,dithering_pars_fragment:ob,roughnessmap_fragment:ab,roughnessmap_pars_fragment:lb,shadowmap_pars_fragment:ub,shadowmap_pars_vertex:cb,shadowmap_vertex:fb,shadowmask_pars_fragment:db,skinbase_vertex:hb,skinning_pars_vertex:pb,skinning_vertex:mb,skinnormal_vertex:gb,specularmap_fragment:vb,specularmap_pars_fragment:_b,tonemapping_fragment:yb,tonemapping_pars_fragment:xb,transmission_fragment:Sb,transmission_pars_fragment:Mb,uv_pars_fragment:Eb,uv_pars_vertex:wb,uv_vertex:Tb,worldpos_vertex:Ab,background_vert:bb,background_frag:Cb,backgroundCube_vert:Rb,backgroundCube_frag:Pb,cube_vert:Lb,cube_frag:Ib,depth_vert:Nb,depth_frag:Db,distanceRGBA_vert:Ub,distanceRGBA_frag:Ob,equirect_vert:Fb,equirect_frag:kb,linedashed_vert:zb,linedashed_frag:Bb,meshbasic_vert:Hb,meshbasic_frag:Vb,meshlambert_vert:Gb,meshlambert_frag:Wb,meshmatcap_vert:$b,meshmatcap_frag:Xb,meshnormal_vert:jb,meshnormal_frag:Yb,meshphong_vert:qb,meshphong_frag:Kb,meshphysical_vert:Zb,meshphysical_frag:Qb,meshtoon_vert:Jb,meshtoon_frag:eC,points_vert:tC,points_frag:nC,shadow_vert:iC,shadow_frag:rC,sprite_vert:sC,sprite_frag:oC},me={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ai={basic:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:cn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:cn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:cn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:cn([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:cn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:cn([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:cn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:cn([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:cn([me.common,me.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:cn([me.lights,me.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Ai.physical={uniforms:cn([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const iu={r:0,b:0,g:0},qr=new rr,aC=new xt;function lC(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function v(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?n:e).get(y)),y}function g(_){let y=!1;const x=v(_);x===null?h(a,l):x&&x.isColor&&(h(x,1),y=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,y){const x=v(y);x&&(x.isCubeTexture||x.mapping===Gc)?(c===void 0&&(c=new yi(new ul(1,1,1),new or({name:"BackgroundCubeMaterial",uniforms:Oo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),qr.copy(y.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(aC.makeRotationFromEuler(qr)),c.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,(f!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new yi(new cl(2,2),new or({name:"BackgroundMaterial",uniforms:Oo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:kr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.toneMapped=ot.getTransfer(x.colorSpace)!==mt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),_.unshift(u,u.geometry,u.material,0,0,null))}function h(_,y){_.getRGB(iu,Gx(t)),i.buffers.color.setClear(iu.r,iu.g,iu.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,h(a,l)},render:g,addToRenderList:m}}function uC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,R,z,O,j){let H=!1;const Y=f(O,z,R);s!==Y&&(s=Y,u(s.object)),H=p(S,O,z,j),H&&v(S,O,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(S,R,z,O),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,R,z){const O=z.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let H=j[R.id];H===void 0&&(H={},j[R.id]=H);let Y=H[O];return Y===void 0&&(Y=d(l()),H[O]=Y),Y}function d(S){const R=[],z=[],O=[];for(let j=0;j<n;j++)R[j]=0,z[j]=0,O[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,R,z,O){const j=s.attributes,H=R.attributes;let Y=0;const X=z.getAttributes();for(const I in X)if(X[I].location>=0){const J=j[I];let ae=H[I];if(ae===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function v(S,R,z,O){const j={},H=R.attributes;let Y=0;const X=z.getAttributes();for(const I in X)if(X[I].location>=0){let J=H[I];J===void 0&&(I==="instanceMatrix"&&S.instanceMatrix&&(J=S.instanceMatrix),I==="instanceColor"&&S.instanceColor&&(J=S.instanceColor));const ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),j[I]=ae,Y++}s.attributes=j,s.attributesNum=Y,s.index=O}function g(){const S=s.newAttributes;for(let R=0,z=S.length;R<z;R++)S[R]=0}function m(S){h(S,0)}function h(S,R){const z=s.newAttributes,O=s.enabledAttributes,j=s.attributeDivisors;z[S]=1,O[S]===0&&(t.enableVertexAttribArray(S),O[S]=1),j[S]!==R&&(t.vertexAttribDivisor(S,R),j[S]=R)}function _(){const S=s.newAttributes,R=s.enabledAttributes;for(let z=0,O=R.length;z<O;z++)R[z]!==S[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function y(S,R,z,O,j,H,Y){Y===!0?t.vertexAttribIPointer(S,R,z,j,H):t.vertexAttribPointer(S,R,z,O,j,H)}function x(S,R,z,O){g();const j=O.attributes,H=z.getAttributes(),Y=R.defaultAttributeValues;for(const X in H){const I=H[X];if(I.location>=0){let K=j[X];if(K===void 0&&(X==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),X==="instanceColor"&&S.instanceColor&&(K=S.instanceColor)),K!==void 0){const J=K.normalized,ae=K.itemSize,Ae=e.get(K);if(Ae===void 0)continue;const He=Ae.buffer,$=Ae.type,ie=Ae.bytesPerElement,ge=$===t.INT||$===t.UNSIGNED_INT||K.gpuType===bm;if(K.isInterleavedBufferAttribute){const he=K.data,Ue=he.stride,Be=K.offset;if(he.isInstancedInterleavedBuffer){for(let Ve=0;Ve<I.locationSize;Ve++)h(I.location+Ve,he.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ve=0;Ve<I.locationSize;Ve++)m(I.location+Ve);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Ve=0;Ve<I.locationSize;Ve++)y(I.location+Ve,ae/I.locationSize,$,J,Ue*ie,(Be+ae/I.locationSize*Ve)*ie,ge)}else{if(K.isInstancedBufferAttribute){for(let he=0;he<I.locationSize;he++)h(I.location+he,K.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<I.locationSize;he++)m(I.location+he);t.bindBuffer(t.ARRAY_BUFFER,He);for(let he=0;he<I.locationSize;he++)y(I.location+he,ae/I.locationSize,$,J,ae*ie,ae/I.locationSize*he*ie,ge)}}else if(Y!==void 0){const J=Y[X];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}_()}function b(){P();for(const S in i){const R=i[S];for(const z in R){const O=R[z];for(const j in O)c(O[j].object),delete O[j];delete R[z]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const R=i[S.id];for(const z in R){const O=R[z];for(const j in O)c(O[j].object),delete O[j];delete R[z]}delete i[S.id]}function E(S){for(const R in i){const z=i[R];if(z[S.id]===void 0)continue;const O=z[S.id];for(const j in O)c(O[j].object),delete O[j];delete z[S.id]}}function P(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:_}}function cC(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let v=0;v<f;v++)p+=c[v];n.update(p,i,1)}function l(u,c,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],d[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let v=0;for(let g=0;g<f;g++)v+=c[g];for(let g=0;g<d.length;g++)n.update(v,i,d[g])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function fC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==ti&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const E=A===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ir&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==qi&&!E)}function l(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),h=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,b=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:h,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,maxSamples:b}}function dC(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new es,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=t.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,y=_*4;let x=h.clippingState||null;l.value=x,x=c(v,d,y,p);for(let b=0;b!==y;++b)x[b]=n[b];h.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=p+g*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<h)&&(m=new Float32Array(h));for(let y=0,x=p;y!==g;++y,x+=4)o.copy(f[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function hC(t){let e=new WeakMap;function n(o,a){return a===Bh?o.mapping=Io:a===Hh&&(o.mapping=No),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bh||a===Hh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new wT(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Yx extends Wx{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const uo=4,Q0=[.125,.215,.35,.446,.526,.582],is=20,Sd=new Yx,J0=new Je;let Md=null,Ed=0,wd=0,Td=!1;const ts=(1+Math.sqrt(5))/2,Gs=1/ts,ev=[new k(-ts,Gs,0),new k(ts,Gs,0),new k(-Gs,0,ts),new k(Gs,0,ts),new k(0,ts,-Gs),new k(0,ts,Gs),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class tv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,wd),this._renderer.xr.enabled=Td,e.scissorTest=!1,ru(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Io||e.mapping===No?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),wd=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jn,minFilter:Jn,generateMipmaps:!1,type:al,format:ti,colorSpace:Gr,depthBuffer:!1},r=nv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nv(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pC(s)),this._blurMaterial=mC(s,e,n)}return r}_compileMaterial(e){const n=new yi(this._lodPlanes[0],e);this._renderer.compile(n,Sd)}_sceneToCubeUV(e,n,i,r){const a=new Zn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(J0),c.toneMapping=Ur,c.autoClear=!1;const p=new km({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),v=new yi(new ul,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(J0),g=!0);for(let h=0;h<6;h++){const _=h%3;_===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):_===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const y=this._cubeSize;ru(r,_*y,h>2?y:0,y,y),c.setRenderTarget(r),g&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Io||e.mapping===No;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=rv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iv());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new yi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ru(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Sd)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ev[(r-s-1)%ev.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new yi(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):is;m>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${is}`);const h=[];let _=0;for(let E=0;E<is;++E){const P=E/g,T=Math.exp(-P*P/2);h.push(T),E===0?_+=T:E<m&&(_+=2*T)}for(let E=0;E<h.length;E++)h[E]=h[E]/_;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const x=this._sizeLods[r],b=3*x*(r>y-uo?r-y+uo:0),A=4*(this._cubeSize-x);ru(n,b,A,3*x,2*x),l.setRenderTarget(n),l.render(f,Sd)}}function pC(t){const e=[],n=[],i=[];let r=t;const s=t-uo+1+Q0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-uo?l=Q0[o-t+uo-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,g=3,m=2,h=1,_=new Float32Array(g*v*p),y=new Float32Array(m*v*p),x=new Float32Array(h*v*p);for(let A=0;A<p;A++){const E=A%3*2/3-1,P=A>2?0:-1,T=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];_.set(T,g*v*A),y.set(d,m*v*A);const S=[A,A,A,A,A,A];x.set(S,h*v*A)}const b=new sr;b.setAttribute("position",new Ht(_,g)),b.setAttribute("uv",new Ht(y,m)),b.setAttribute("faceIndex",new Ht(x,h)),e.push(b),r>uo&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function nv(t,e,n){const i=new gs(t,e,n);return i.texture.mapping=Gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ru(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function mC(t,e,n){const i=new Float32Array(is),r=new k(0,1,0);return new or({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bm(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function iv(){return new or({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bm(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function rv(){return new or({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Bm(){return`

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
	`}function gC(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Bh||l===Hh,c=l===Io||l===No;if(u||c){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new tv(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new tv(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function vC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&xo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _C(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,h=g.length;m<h;m++)e.update(g[m],t.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let y=0,x=_.length;y<x;y+=3){const b=_[y+0],A=_[y+1],E=_[y+2];d.push(b,A,A,E,E,b)}}else if(v!==void 0){const _=v.array;g=v.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const b=y+0,A=y+1,E=y+2;d.push(b,A,A,E,E,b)}}else return;const m=new(kx(d)?Vx:zm)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function yC(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,v){v!==0&&(t.drawElementsInstanced(i,p,s,d*o,v),n.update(p,i,v))}function c(d,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,v);let m=0;for(let h=0;h<v;h++)m+=p[h];n.update(m,i,1)}function f(d,p,v,g){if(v===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)u(d[h]/o,p[h],g[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,g,0,v);let h=0;for(let _=0;_<v;_++)h+=p[_];for(let _=0;_<g.length;_++)n.update(h,i,g[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function xC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function SC(t,e,n){const i=new WeakMap,r=new Xt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,h=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;v===!0&&(x=1),g===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*A*4*f),P=new zx(E,b,A,f);P.type=qi,P.needsUpdate=!0;const T=x*4;for(let R=0;R<f;R++){const z=h[R],O=_[R],j=y[R],H=b*A*4*R;for(let Y=0;Y<z.count;Y++){const X=Y*T;v===!0&&(r.fromBufferAttribute(z,Y),E[H+X+0]=r.x,E[H+X+1]=r.y,E[H+X+2]=r.z,E[H+X+3]=0),g===!0&&(r.fromBufferAttribute(O,Y),E[H+X+4]=r.x,E[H+X+5]=r.y,E[H+X+6]=r.z,E[H+X+7]=0),m===!0&&(r.fromBufferAttribute(j,Y),E[H+X+8]=r.x,E[H+X+9]=r.y,E[H+X+10]=r.z,E[H+X+11]=j.itemSize===4?r.w:1)}}d={count:f,texture:P,size:new Ze(b,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const g=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function MC(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class qx extends an{constructor(e,n,i,r,s,o,a,l,u,c=yo){if(c!==yo&&c!==Uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===yo&&(i=ms),i===void 0&&c===Uo&&(i=Do),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kx=new an,sv=new qx(1,1),Zx=new zx,Qx=new lT,Jx=new $x,ov=[],av=[],lv=new Float32Array(16),uv=new Float32Array(9),cv=new Float32Array(4);function Go(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ov[r];if(s===void 0&&(s=new Float32Array(r),ov[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xc(t,e){let n=av[e];n===void 0&&(n=new Int32Array(e),av[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function AC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function bC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;cv.set(i),t.uniformMatrix2fv(this.addr,!1,cv),Gt(n,i)}}function CC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;uv.set(i),t.uniformMatrix3fv(this.addr,!1,uv),Gt(n,i)}}function RC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;lv.set(i),t.uniformMatrix4fv(this.addr,!1,lv),Gt(n,i)}}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function NC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function DC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function FC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function kC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(sv.compareFunction=Fx,s=sv):s=Kx,n.setTexture2D(e||s,r)}function zC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qx,r)}function BC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Jx,r)}function HC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zx,r)}function VC(t){switch(t){case 5126:return EC;case 35664:return wC;case 35665:return TC;case 35666:return AC;case 35674:return bC;case 35675:return CC;case 35676:return RC;case 5124:case 35670:return PC;case 35667:case 35671:return LC;case 35668:case 35672:return IC;case 35669:case 35673:return NC;case 5125:return DC;case 36294:return UC;case 36295:return OC;case 36296:return FC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return HC}}function GC(t,e){t.uniform1fv(this.addr,e)}function WC(t,e){const n=Go(e,this.size,2);t.uniform2fv(this.addr,n)}function $C(t,e){const n=Go(e,this.size,3);t.uniform3fv(this.addr,n)}function XC(t,e){const n=Go(e,this.size,4);t.uniform4fv(this.addr,n)}function jC(t,e){const n=Go(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YC(t,e){const n=Go(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function qC(t,e){const n=Go(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function KC(t,e){t.uniform1iv(this.addr,e)}function ZC(t,e){t.uniform2iv(this.addr,e)}function QC(t,e){t.uniform3iv(this.addr,e)}function JC(t,e){t.uniform4iv(this.addr,e)}function eR(t,e){t.uniform1uiv(this.addr,e)}function tR(t,e){t.uniform2uiv(this.addr,e)}function nR(t,e){t.uniform3uiv(this.addr,e)}function iR(t,e){t.uniform4uiv(this.addr,e)}function rR(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Kx,s[o])}function sR(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qx,s[o])}function oR(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Jx,s[o])}function aR(t,e,n){const i=this.cache,r=e.length,s=Xc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Zx,s[o])}function lR(t){switch(t){case 5126:return GC;case 35664:return WC;case 35665:return $C;case 35666:return XC;case 35674:return jC;case 35675:return YC;case 35676:return qC;case 5124:case 35670:return KC;case 35667:case 35671:return ZC;case 35668:case 35672:return QC;case 35669:case 35673:return JC;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return rR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return oR;case 36289:case 36303:case 36311:case 36292:return aR}}class uR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=VC(n.type)}}class cR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=lR(n.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ad=/(\w+)(\])?(\[|\.)?/g;function fv(t,e){t.seq.push(e),t.map[e.id]=e}function dR(t,e,n){const i=t.name,r=i.length;for(Ad.lastIndex=0;;){const s=Ad.exec(i),o=Ad.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){fv(n,u===void 0?new uR(a,t,e):new cR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new fR(a),fv(n,f)),n=f}}}class Nu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);dR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function dv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hR=37297;let pR=0;function mR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function gR(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===vc&&n===gc?i="LinearDisplayP3ToLinearSRGB":e===gc&&n===vc&&(i="LinearSRGBToLinearDisplayP3"),t){case Gr:case Wc:return[i,"LinearTransferOETF"];case Yn:case Nm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function hv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+mR(t.getShaderSource(e),o)}else return r}function vR(t,e){const n=gR(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _R(t,e){let n;switch(e){case yw:n="Linear";break;case xw:n="Reinhard";break;case Sw:n="OptimizedCineon";break;case Mw:n="ACESFilmic";break;case ww:n="AgX";break;case Tw:n="Neutral";break;case Ew:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const su=new k;function yR(){ot.getLuminanceCoefficients(su);const t=su.x.toFixed(4),e=su.y.toFixed(4),n=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function SR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function MR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ga(t){return t!==""}function pv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function gp(t){return t.replace(ER,TR)}const wR=new Map;function TR(t,e){let n=Ge[e];if(n===void 0){const i=wR.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return gp(n)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gv(t){return t.replace(AR,bR)}function bR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vv(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function CR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ex?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===$E?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function RR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Io:case No:e="ENVMAP_TYPE_CUBE";break;case Gc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case No:e="ENVMAP_MODE_REFRACTION";break}return e}function LR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case wx:e="ENVMAP_BLENDING_MULTIPLY";break;case vw:e="ENVMAP_BLENDING_MIX";break;case _w:e="ENVMAP_BLENDING_ADD";break}return e}function IR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function NR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=CR(n),u=RR(n),c=PR(n),f=LR(n),d=IR(n),p=xR(n),v=SR(s),g=r.createProgram();let m,h,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ga).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ga).join(`
`),h.length>0&&(h+=`
`)):(m=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),h=[vv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ur?"#define TONE_MAPPING":"",n.toneMapping!==Ur?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Ur?_R("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,vR("linearToOutputTexel",n.outputColorSpace),yR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),o=gp(o),o=pv(o,n),o=mv(o,n),a=gp(a),a=pv(a,n),a=mv(a,n),o=gv(o),a=gv(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===L0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===L0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=_+m+o,x=_+h+a,b=dv(r,r.VERTEX_SHADER,y),A=dv(r,r.FRAGMENT_SHADER,x);r.attachShader(g,b),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function E(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(g).trim(),O=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(A).trim();let H=!0,Y=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,A);else{const X=hv(r,b,"vertex"),I=hv(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+X+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||j==="")&&(Y=!1);Y&&(R.diagnostics={runnable:H,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:j,prefix:h}})}r.deleteShader(b),r.deleteShader(A),P=new Nu(r,g),T=MR(r,g)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let T;this.getAttributes=function(){return T===void 0&&E(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(g,hR)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=A,this}let DR=0;class UR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OR(e),n.set(e,i)),i}}class OR{constructor(e){this.id=DR++,this.code=e,this.usedTimes=0}}function FR(t,e,n,i,r,s,o){const a=new Fm,l=new UR,u=new Set,c=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,R,z,O){const j=z.fog,H=O.geometry,Y=T.isMeshStandardMaterial?z.environment:null,X=(T.isMeshStandardMaterial?n:e).get(T.envMap||Y),I=X&&X.mapping===Gc?X.image.height:null,K=v[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const J=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=J!==void 0?J.length:0;let Ae=0;H.morphAttributes.position!==void 0&&(Ae=1),H.morphAttributes.normal!==void 0&&(Ae=2),H.morphAttributes.color!==void 0&&(Ae=3);let He,$,ie,ge;if(K){const qe=Ai[K];He=qe.vertexShader,$=qe.fragmentShader}else He=T.vertexShader,$=T.fragmentShader,l.update(T),ie=l.getVertexShaderID(T),ge=l.getFragmentShaderID(T);const he=t.getRenderTarget(),Ue=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,Ve=!!T.map,dt=!!T.matcap,L=!!X,nt=!!T.aoMap,Le=!!T.lightMap,Ie=!!T.bumpMap,Me=!!T.normalMap,at=!!T.displacementMap,be=!!T.emissiveMap,ze=!!T.metalnessMap,C=!!T.roughnessMap,M=T.anisotropy>0,V=T.clearcoat>0,te=T.dispersion>0,re=T.iridescence>0,ee=T.sheen>0,Re=T.transmission>0,de=M&&!!T.anisotropyMap,B=V&&!!T.clearcoatMap,Q=V&&!!T.clearcoatNormalMap,W=V&&!!T.clearcoatRoughnessMap,ne=re&&!!T.iridescenceMap,xe=re&&!!T.iridescenceThicknessMap,fe=ee&&!!T.sheenColorMap,pe=ee&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,ye=!!T.specularColorMap,je=!!T.specularIntensityMap,N=Re&&!!T.transmissionMap,oe=Re&&!!T.thicknessMap,q=!!T.gradientMap,Z=!!T.alphaMap,le=T.alphaTest>0,Ne=!!T.alphaHash,Ye=!!T.extensions;let vt=Ur;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(vt=t.toneMapping);const Ft={shaderID:K,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:$,defines:T.defines,customVertexShaderID:ie,customFragmentShaderID:ge,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&O.instanceColor!==null,instancingMorph:Ue&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:he===null?t.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Gr,alphaToCoverage:!!T.alphaToCoverage,map:Ve,matcap:dt,envMap:L,envMapMode:L&&X.mapping,envMapCubeUVHeight:I,aoMap:nt,lightMap:Le,bumpMap:Ie,normalMap:Me,displacementMap:d&&at,emissiveMap:be,normalMapObjectSpace:Me&&T.normalMapType===Lw,normalMapTangentSpace:Me&&T.normalMapType===Pw,metalnessMap:ze,roughnessMap:C,anisotropy:M,anisotropyMap:de,clearcoat:V,clearcoatMap:B,clearcoatNormalMap:Q,clearcoatRoughnessMap:W,dispersion:te,iridescence:re,iridescenceMap:ne,iridescenceThicknessMap:xe,sheen:ee,sheenColorMap:fe,sheenRoughnessMap:pe,specularMap:Pe,specularColorMap:ye,specularIntensityMap:je,transmission:Re,transmissionMap:N,thicknessMap:oe,gradientMap:q,opaque:T.transparent===!1&&T.blending===_o&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:le,alphaHash:Ne,combine:T.combine,mapUv:Ve&&g(T.map.channel),aoMapUv:nt&&g(T.aoMap.channel),lightMapUv:Le&&g(T.lightMap.channel),bumpMapUv:Ie&&g(T.bumpMap.channel),normalMapUv:Me&&g(T.normalMap.channel),displacementMapUv:at&&g(T.displacementMap.channel),emissiveMapUv:be&&g(T.emissiveMap.channel),metalnessMapUv:ze&&g(T.metalnessMap.channel),roughnessMapUv:C&&g(T.roughnessMap.channel),anisotropyMapUv:de&&g(T.anisotropyMap.channel),clearcoatMapUv:B&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(T.sheenRoughnessMap.channel),specularMapUv:Pe&&g(T.specularMap.channel),specularColorMapUv:ye&&g(T.specularColorMap.channel),specularIntensityMapUv:je&&g(T.specularIntensityMap.channel),transmissionMapUv:N&&g(T.transmissionMap.channel),thicknessMapUv:oe&&g(T.thicknessMap.channel),alphaMapUv:Z&&g(T.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Me||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!H.attributes.uv&&(Ve||Z),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ve&&T.map.isVideoTexture===!0&&ot.getTransfer(T.map.colorSpace)===mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pi,flipSided:T.side===wn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ye&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&T.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ft.vertexUv1s=u.has(1),Ft.vertexUv2s=u.has(2),Ft.vertexUv3s=u.has(3),u.clear(),Ft}function h(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const R in T.defines)S.push(R),S.push(T.defines[R]);return T.isRawShaderMaterial===!1&&(_(S,T),y(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function _(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function y(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.doubleSided&&a.enable(10),S.flipSided&&a.enable(11),S.useDepthPacking&&a.enable(12),S.dithering&&a.enable(13),S.transmission&&a.enable(14),S.sheen&&a.enable(15),S.opaque&&a.enable(16),S.pointsUvs&&a.enable(17),S.decodeVideoTexture&&a.enable(18),S.alphaToCoverage&&a.enable(19),T.push(a.mask)}function x(T){const S=v[T.type];let R;if(S){const z=Ai[S];R=xT.clone(z.uniforms)}else R=T.uniforms;return R}function b(T,S){let R;for(let z=0,O=c.length;z<O;z++){const j=c[z];if(j.cacheKey===S){R=j,++R.usedTimes;break}}return R===void 0&&(R=new NR(t,S,T,s),c.push(R)),R}function A(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function E(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:P}}function kR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function zR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function _v(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,p,v,g,m){let h=t[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},t[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,v,g,m){const h=o(f,d,p,v,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(f,d,p,v,g,m){const h=o(f,d,p,v,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function u(f,d){n.length>1&&n.sort(f||zR),i.length>1&&i.sort(d||_v),r.length>1&&r.sort(d||_v)}function c(){for(let f=e,d=t.length;f<d;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function BR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yv,t.set(i,[o])):r>=s.length?(o=new yv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function HR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new Je};break;case"SpotLight":n={position:new k,direction:new k,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function VR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let GR=0;function WR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $R(t){const e=new HR,n=VR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new xt,o=new xt;function a(u){let c=0,f=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,v=0,g=0,m=0,h=0,_=0,y=0,x=0,b=0,A=0,E=0;u.sort(WR);for(let T=0,S=u.length;T<S;T++){const R=u[T],z=R.color,O=R.intensity,j=R.distance,H=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)c+=z.r*O,f+=z.g*O,d+=z.b*O;else if(R.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(R.sh.coefficients[Y],O);E++}else if(R.isDirectionalLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const X=R.shadow,I=n.get(R);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=H,i.directionalShadowMatrix[p]=R.shadow.matrix,_++}i.directional[p]=Y,p++}else if(R.isSpotLight){const Y=e.get(R);Y.position.setFromMatrixPosition(R.matrixWorld),Y.color.copy(z).multiplyScalar(O),Y.distance=j,Y.coneCos=Math.cos(R.angle),Y.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),Y.decay=R.decay,i.spot[g]=Y;const X=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,X.updateMatrices(R),R.castShadow&&A++),i.spotLightMatrix[g]=X.matrix,R.castShadow){const I=n.get(R);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,i.spotShadow[g]=I,i.spotShadowMap[g]=H,x++}g++}else if(R.isRectAreaLight){const Y=e.get(R);Y.color.copy(z).multiplyScalar(O),Y.halfWidth.set(R.width*.5,0,0),Y.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=Y,m++}else if(R.isPointLight){const Y=e.get(R);if(Y.color.copy(R.color).multiplyScalar(R.intensity),Y.distance=R.distance,Y.decay=R.decay,R.castShadow){const X=R.shadow,I=n.get(R);I.shadowIntensity=X.intensity,I.shadowBias=X.bias,I.shadowNormalBias=X.normalBias,I.shadowRadius=X.radius,I.shadowMapSize=X.mapSize,I.shadowCameraNear=X.camera.near,I.shadowCameraFar=X.camera.far,i.pointShadow[v]=I,i.pointShadowMap[v]=H,i.pointShadowMatrix[v]=R.shadow.matrix,y++}i.point[v]=Y,v++}else if(R.isHemisphereLight){const Y=e.get(R);Y.skyColor.copy(R.color).multiplyScalar(O),Y.groundColor.copy(R.groundColor).multiplyScalar(O),i.hemi[h]=Y,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==v||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==h||P.numDirectionalShadows!==_||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==b||P.numLightProbes!==E)&&(i.directional.length=p,i.spot.length=g,i.rectArea.length=m,i.point.length=v,i.hemi.length=h,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=E,P.directionalLength=p,P.pointLength=v,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=h,P.numDirectionalShadows=_,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=b,P.numLightProbes=E,i.version=GR++)}function l(u,c){let f=0,d=0,p=0,v=0,g=0;const m=c.matrixWorldInverse;for(let h=0,_=u.length;h<_;h++){const y=u[h];if(y.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const x=i.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),v++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[g];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:i}}function xv(t){const e=new $R(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function XR(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new xv(t),e.set(r,[a])):s>=o.length?(a=new xv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class jR extends $c{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YR extends $c{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KR=`uniform sampler2D shadow_pass;
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
}`;function ZR(t,e,n){let i=new Xx;const r=new Ze,s=new Ze,o=new Xt,a=new jR({depthPacking:Rw}),l=new YR,u={},c=n.maxTextureSize,f={[kr]:wn,[wn]:kr,[Pi]:Pi},d=new or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:qR,fragmentShader:KR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new sr;v.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new yi(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ex;let h=this.type;this.render=function(A,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Dr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=h!==Vi&&this.type===Vi,j=h===Vi&&this.type!==Vi;for(let H=0,Y=A.length;H<Y;H++){const X=A[H],I=X.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const K=I.getFrameExtents();if(r.multiply(K),s.copy(I.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/K.x),r.x=s.x*K.x,I.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/K.y),r.y=s.y*K.y,I.mapSize.y=s.y)),I.map===null||O===!0||j===!0){const ae=this.type!==Vi?{minFilter:On,magFilter:On}:{};I.map!==null&&I.map.dispose(),I.map=new gs(r.x,r.y,ae),I.map.texture.name=X.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let ae=0;ae<J;ae++){const Ae=I.getViewport(ae);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),z.viewport(o),I.updateMatrices(X,ae),i=I.getFrustum(),x(E,P,I.camera,X,this.type)}I.isPointLightShadow!==!0&&this.type===Vi&&_(I,P),I.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,R)};function _(A,E){const P=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new gs(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(E,null,P,d,g,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(E,null,P,p,g,null)}function y(A,E,P,T){let S=null;const R=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=S.uuid,O=E.uuid;let j=u[z];j===void 0&&(j={},u[z]=j);let H=j[O];H===void 0&&(H=S.clone(),j[O]=H,E.addEventListener("dispose",b)),S=H}if(S.visible=E.visible,S.wireframe=E.wireframe,T===Vi?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=t.properties.get(S);z.light=P}return S}function x(A,E,P,T,S){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const O=e.update(A),j=A.material;if(Array.isArray(j)){const H=O.groups;for(let Y=0,X=H.length;Y<X;Y++){const I=H[Y],K=j[I.materialIndex];if(K&&K.visible){const J=y(A,K,T,S);A.onBeforeShadow(t,A,E,P,O,J,I),t.renderBufferDirect(P,null,O,J,A,I),A.onAfterShadow(t,A,E,P,O,J,I)}}}else if(j.visible){const H=y(A,j,T,S);A.onBeforeShadow(t,A,E,P,O,H,null),t.renderBufferDirect(P,null,O,H,A,null),A.onAfterShadow(t,A,E,P,O,H,null)}}const z=A.children;for(let O=0,j=z.length;O<j;O++)x(z[O],E,P,T,S)}function b(A){A.target.removeEventListener("dispose",b);for(const P in u){const T=u[P],S=A.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}function QR(t){function e(){let N=!1;const oe=new Xt;let q=null;const Z=new Xt(0,0,0,0);return{setMask:function(le){q!==le&&!N&&(t.colorMask(le,le,le,le),q=le)},setLocked:function(le){N=le},setClear:function(le,Ne,Ye,vt,Ft){Ft===!0&&(le*=vt,Ne*=vt,Ye*=vt),oe.set(le,Ne,Ye,vt),Z.equals(oe)===!1&&(t.clearColor(le,Ne,Ye,vt),Z.copy(oe))},reset:function(){N=!1,q=null,Z.set(-1,0,0,0)}}}function n(){let N=!1,oe=null,q=null,Z=null;return{setTest:function(le){le?ge(t.DEPTH_TEST):he(t.DEPTH_TEST)},setMask:function(le){oe!==le&&!N&&(t.depthMask(le),oe=le)},setFunc:function(le){if(q!==le){switch(le){case cw:t.depthFunc(t.NEVER);break;case fw:t.depthFunc(t.ALWAYS);break;case dw:t.depthFunc(t.LESS);break;case dc:t.depthFunc(t.LEQUAL);break;case hw:t.depthFunc(t.EQUAL);break;case pw:t.depthFunc(t.GEQUAL);break;case mw:t.depthFunc(t.GREATER);break;case gw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=le}},setLocked:function(le){N=le},setClear:function(le){Z!==le&&(t.clearDepth(le),Z=le)},reset:function(){N=!1,oe=null,q=null,Z=null}}}function i(){let N=!1,oe=null,q=null,Z=null,le=null,Ne=null,Ye=null,vt=null,Ft=null;return{setTest:function(qe){N||(qe?ge(t.STENCIL_TEST):he(t.STENCIL_TEST))},setMask:function(qe){oe!==qe&&!N&&(t.stencilMask(qe),oe=qe)},setFunc:function(qe,Cn,_n){(q!==qe||Z!==Cn||le!==_n)&&(t.stencilFunc(qe,Cn,_n),q=qe,Z=Cn,le=_n)},setOp:function(qe,Cn,_n){(Ne!==qe||Ye!==Cn||vt!==_n)&&(t.stencilOp(qe,Cn,_n),Ne=qe,Ye=Cn,vt=_n)},setLocked:function(qe){N=qe},setClear:function(qe){Ft!==qe&&(t.clearStencil(qe),Ft=qe)},reset:function(){N=!1,oe=null,q=null,Z=null,le=null,Ne=null,Ye=null,vt=null,Ft=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,h=null,_=null,y=null,x=null,b=null,A=new Je(0,0,0),E=0,P=!1,T=null,S=null,R=null,z=null,O=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,Y=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=Y>=1):X.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=Y>=2);let I=null,K={};const J=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),Ae=new Xt().fromArray(J),He=new Xt().fromArray(ae);function $(N,oe,q,Z){const le=new Uint8Array(4),Ne=t.createTexture();t.bindTexture(N,Ne),t.texParameteri(N,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(N,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ye=0;Ye<q;Ye++)N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(oe+Ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return Ne}const ie={};ie[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ge(t.DEPTH_TEST),s.setFunc(dc),Ie(!1),Me(A0),ge(t.CULL_FACE),nt(Dr);function ge(N){u[N]!==!0&&(t.enable(N),u[N]=!0)}function he(N){u[N]!==!1&&(t.disable(N),u[N]=!1)}function Ue(N,oe){return c[N]!==oe?(t.bindFramebuffer(N,oe),c[N]=oe,N===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=oe),N===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=oe),!0):!1}function Be(N,oe){let q=d,Z=!1;if(N){q=f.get(oe),q===void 0&&(q=[],f.set(oe,q));const le=N.textures;if(q.length!==le.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ne=0,Ye=le.length;Ne<Ye;Ne++)q[Ne]=t.COLOR_ATTACHMENT0+Ne;q.length=le.length,Z=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,Z=!0);Z&&t.drawBuffers(q)}function Ve(N){return p!==N?(t.useProgram(N),p=N,!0):!1}const dt={[ns]:t.FUNC_ADD,[jE]:t.FUNC_SUBTRACT,[YE]:t.FUNC_REVERSE_SUBTRACT};dt[qE]=t.MIN,dt[KE]=t.MAX;const L={[ZE]:t.ZERO,[QE]:t.ONE,[JE]:t.SRC_COLOR,[kh]:t.SRC_ALPHA,[sw]:t.SRC_ALPHA_SATURATE,[iw]:t.DST_COLOR,[tw]:t.DST_ALPHA,[ew]:t.ONE_MINUS_SRC_COLOR,[zh]:t.ONE_MINUS_SRC_ALPHA,[rw]:t.ONE_MINUS_DST_COLOR,[nw]:t.ONE_MINUS_DST_ALPHA,[ow]:t.CONSTANT_COLOR,[aw]:t.ONE_MINUS_CONSTANT_COLOR,[lw]:t.CONSTANT_ALPHA,[uw]:t.ONE_MINUS_CONSTANT_ALPHA};function nt(N,oe,q,Z,le,Ne,Ye,vt,Ft,qe){if(N===Dr){v===!0&&(he(t.BLEND),v=!1);return}if(v===!1&&(ge(t.BLEND),v=!0),N!==XE){if(N!==g||qe!==P){if((m!==ns||y!==ns)&&(t.blendEquation(t.FUNC_ADD),m=ns,y=ns),qe)switch(N){case _o:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case b0:t.blendFunc(t.ONE,t.ONE);break;case C0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case R0:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _o:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case b0:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case C0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case R0:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}h=null,_=null,x=null,b=null,A.set(0,0,0),E=0,g=N,P=qe}return}le=le||oe,Ne=Ne||q,Ye=Ye||Z,(oe!==m||le!==y)&&(t.blendEquationSeparate(dt[oe],dt[le]),m=oe,y=le),(q!==h||Z!==_||Ne!==x||Ye!==b)&&(t.blendFuncSeparate(L[q],L[Z],L[Ne],L[Ye]),h=q,_=Z,x=Ne,b=Ye),(vt.equals(A)===!1||Ft!==E)&&(t.blendColor(vt.r,vt.g,vt.b,Ft),A.copy(vt),E=Ft),g=N,P=!1}function Le(N,oe){N.side===Pi?he(t.CULL_FACE):ge(t.CULL_FACE);let q=N.side===wn;oe&&(q=!q),Ie(q),N.blending===_o&&N.transparent===!1?nt(Dr):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Z=N.stencilWrite;o.setTest(Z),Z&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ge(t.SAMPLE_ALPHA_TO_COVERAGE):he(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(N){T!==N&&(N?t.frontFace(t.CW):t.frontFace(t.CCW),T=N)}function Me(N){N!==GE?(ge(t.CULL_FACE),N!==S&&(N===A0?t.cullFace(t.BACK):N===WE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):he(t.CULL_FACE),S=N}function at(N){N!==R&&(H&&t.lineWidth(N),R=N)}function be(N,oe,q){N?(ge(t.POLYGON_OFFSET_FILL),(z!==oe||O!==q)&&(t.polygonOffset(oe,q),z=oe,O=q)):he(t.POLYGON_OFFSET_FILL)}function ze(N){N?ge(t.SCISSOR_TEST):he(t.SCISSOR_TEST)}function C(N){N===void 0&&(N=t.TEXTURE0+j-1),I!==N&&(t.activeTexture(N),I=N)}function M(N,oe,q){q===void 0&&(I===null?q=t.TEXTURE0+j-1:q=I);let Z=K[q];Z===void 0&&(Z={type:void 0,texture:void 0},K[q]=Z),(Z.type!==N||Z.texture!==oe)&&(I!==q&&(t.activeTexture(q),I=q),t.bindTexture(N,oe||ie[N]),Z.type=N,Z.texture=oe)}function V(){const N=K[I];N!==void 0&&N.type!==void 0&&(t.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{t.compressedTexImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function re(){try{t.compressedTexImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{t.texSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{t.texStorage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{t.texStorage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{t.texImage2D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function fe(N){Ae.equals(N)===!1&&(t.scissor(N.x,N.y,N.z,N.w),Ae.copy(N))}function pe(N){He.equals(N)===!1&&(t.viewport(N.x,N.y,N.z,N.w),He.copy(N))}function Pe(N,oe){let q=l.get(oe);q===void 0&&(q=new WeakMap,l.set(oe,q));let Z=q.get(N);Z===void 0&&(Z=t.getUniformBlockIndex(oe,N.name),q.set(N,Z))}function ye(N,oe){const Z=l.get(oe).get(N);a.get(oe)!==Z&&(t.uniformBlockBinding(oe,Z,N.__bindingPointIndex),a.set(oe,Z))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},I=null,K={},c={},f=new WeakMap,d=[],p=null,v=!1,g=null,m=null,h=null,_=null,y=null,x=null,b=null,A=new Je(0,0,0),E=0,P=!1,T=null,S=null,R=null,z=null,O=null,Ae.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:ge,disable:he,bindFramebuffer:Ue,drawBuffers:Be,useProgram:Ve,setBlending:nt,setMaterial:Le,setFlipSided:Ie,setCullFace:Me,setLineWidth:at,setPolygonOffset:be,setScissorTest:ze,activeTexture:C,bindTexture:M,unbindTexture:V,compressedTexImage2D:te,compressedTexImage3D:re,texImage2D:ne,texImage3D:xe,updateUBOMapping:Pe,uniformBlockBinding:ye,texStorage2D:Q,texStorage3D:W,texSubImage2D:ee,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:B,scissor:fe,viewport:pe,reset:je}}function Sv(t,e,n,i){const r=JR(i);switch(n){case Px:return t*e;case Ix:return t*e;case Nx:return t*e*2;case Dx:return t*e/r.components*r.byteLength;case Pm:return t*e/r.components*r.byteLength;case Ux:return t*e*2/r.components*r.byteLength;case Lm:return t*e*2/r.components*r.byteLength;case Lx:return t*e*3/r.components*r.byteLength;case ti:return t*e*4/r.components*r.byteLength;case Im:return t*e*4/r.components*r.byteLength;case Cu:case Ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pu:case Lu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gh:case $h:return Math.max(t,16)*Math.max(e,8)/4;case Vh:case Wh:return Math.max(t,8)*Math.max(e,8)/2;case Xh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ep:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case tp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case np:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case rp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case sp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case op:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case ap:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case lp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Iu:case up:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Ox:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case dp:case hp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function JR(t){switch(t){case ir:case bx:return{byteLength:1,components:1};case qa:case Cx:case al:return{byteLength:2,components:1};case Cm:case Rm:return{byteLength:2,components:4};case ms:case bm:case qi:return{byteLength:4,components:1};case Rx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function eP(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ze,c=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(C,M){return p?new OffscreenCanvas(C,M):yc("canvas")}function g(C,M,V){let te=1;const re=ze(C);if((re.width>V||re.height>V)&&(te=V/Math.max(re.width,re.height)),te<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ee=Math.floor(te*re.width),Re=Math.floor(te*re.height);f===void 0&&(f=v(ee,Re));const de=M?v(ee,Re):f;return de.width=ee,de.height=Re,de.getContext("2d").drawImage(C,0,0,ee,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ee+"x"+Re+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),C;return C}function m(C){return C.generateMipmaps&&C.minFilter!==On&&C.minFilter!==Jn}function h(C){t.generateMipmap(C)}function _(C,M,V,te,re=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ee=M;if(M===t.RED&&(V===t.FLOAT&&(ee=t.R32F),V===t.HALF_FLOAT&&(ee=t.R16F),V===t.UNSIGNED_BYTE&&(ee=t.R8)),M===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.R8UI),V===t.UNSIGNED_SHORT&&(ee=t.R16UI),V===t.UNSIGNED_INT&&(ee=t.R32UI),V===t.BYTE&&(ee=t.R8I),V===t.SHORT&&(ee=t.R16I),V===t.INT&&(ee=t.R32I)),M===t.RG&&(V===t.FLOAT&&(ee=t.RG32F),V===t.HALF_FLOAT&&(ee=t.RG16F),V===t.UNSIGNED_BYTE&&(ee=t.RG8)),M===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(ee=t.RG8UI),V===t.UNSIGNED_SHORT&&(ee=t.RG16UI),V===t.UNSIGNED_INT&&(ee=t.RG32UI),V===t.BYTE&&(ee=t.RG8I),V===t.SHORT&&(ee=t.RG16I),V===t.INT&&(ee=t.RG32I)),M===t.RGB&&V===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),M===t.RGBA){const Re=re?mc:ot.getTransfer(te);V===t.FLOAT&&(ee=t.RGBA32F),V===t.HALF_FLOAT&&(ee=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ee=Re===mt?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function y(C,M){let V;return C?M===null||M===ms||M===Do?V=t.DEPTH24_STENCIL8:M===qi?V=t.DEPTH32F_STENCIL8:M===qa&&(V=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ms||M===Do?V=t.DEPTH_COMPONENT24:M===qi?V=t.DEPTH_COMPONENT32F:M===qa&&(V=t.DEPTH_COMPONENT16),V}function x(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==On&&C.minFilter!==Jn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),E(M),M.isVideoTexture&&c.delete(M)}function A(C){const M=C.target;M.removeEventListener("dispose",A),T(M)}function E(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,te=d.get(V);if(te){const re=te[M.__cacheKey];re.usedTimes--,re.usedTimes===0&&P(C),Object.keys(te).length===0&&d.delete(V)}i.remove(C)}function P(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const V=C.source,te=d.get(V);delete te[M.__cacheKey],o.memory.textures--}function T(C){const M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(M.__webglFramebuffer[te]))for(let re=0;re<M.__webglFramebuffer[te].length;re++)t.deleteFramebuffer(M.__webglFramebuffer[te][re]);else t.deleteFramebuffer(M.__webglFramebuffer[te]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[te])}else{if(Array.isArray(M.__webglFramebuffer))for(let te=0;te<M.__webglFramebuffer.length;te++)t.deleteFramebuffer(M.__webglFramebuffer[te]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let te=0;te<M.__webglColorRenderbuffer.length;te++)M.__webglColorRenderbuffer[te]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[te]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let te=0,re=V.length;te<re;te++){const ee=i.get(V[te]);ee.__webglTexture&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),i.remove(V[te])}i.remove(C)}let S=0;function R(){S=0}function z(){const C=S;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),S+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function j(C,M){const V=i.get(C);if(C.isVideoTexture&&at(C),C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){const te=C.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{He(V,C,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function H(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){He(V,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function Y(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){He(V,C,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function X(C,M){const V=i.get(C);if(C.version>0&&V.__version!==C.version){$(V,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const I={[hc]:t.REPEAT,[wr]:t.CLAMP_TO_EDGE,[pc]:t.MIRRORED_REPEAT},K={[On]:t.NEAREST,[Ax]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[Jn]:t.LINEAR,[bu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},J={[Iw]:t.NEVER,[kw]:t.ALWAYS,[Nw]:t.LESS,[Fx]:t.LEQUAL,[Dw]:t.EQUAL,[Fw]:t.GEQUAL,[Uw]:t.GREATER,[Ow]:t.NOTEQUAL};function ae(C,M){if(M.type===qi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Jn||M.magFilter===bu||M.magFilter===ma||M.magFilter===Tr||M.minFilter===Jn||M.minFilter===bu||M.minFilter===ma||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,I[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,K[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,K[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==ma&&M.minFilter!==Tr||M.type===qi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ae(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const te=M.source;let re=d.get(te);re===void 0&&(re={},d.set(te,re));const ee=O(M);if(ee!==C.__cacheKey){re[ee]===void 0&&(re[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),re[ee].usedTimes++;const Re=re[C.__cacheKey];Re!==void 0&&(re[C.__cacheKey].usedTimes--,Re.usedTimes===0&&P(M)),C.__cacheKey=ee,C.__webglTexture=re[ee].texture}return V}function He(C,M,V){let te=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(te=t.TEXTURE_3D);const re=Ae(C,M),ee=M.source;n.bindTexture(te,C.__webglTexture,t.TEXTURE0+V);const Re=i.get(ee);if(ee.version!==Re.__version||re===!0){n.activeTexture(t.TEXTURE0+V);const de=ot.getPrimaries(ot.workingColorSpace),B=M.colorSpace===$i?null:ot.getPrimaries(M.colorSpace),Q=M.colorSpace===$i||de===B?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let W=g(M.image,!1,r.maxTextureSize);W=be(M,W);const ne=s.convert(M.format,M.colorSpace),xe=s.convert(M.type);let fe=_(M.internalFormat,ne,xe,M.colorSpace,M.isVideoTexture);ae(te,M);let pe;const Pe=M.mipmaps,ye=M.isVideoTexture!==!0,je=Re.__version===void 0||re===!0,N=ee.dataReady,oe=x(M,W);if(M.isDepthTexture)fe=y(M.format===Uo,M.type),je&&(ye?n.texStorage2D(t.TEXTURE_2D,1,fe,W.width,W.height):n.texImage2D(t.TEXTURE_2D,0,fe,W.width,W.height,0,ne,xe,null));else if(M.isDataTexture)if(Pe.length>0){ye&&je&&n.texStorage2D(t.TEXTURE_2D,oe,fe,Pe[0].width,Pe[0].height);for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],ye?N&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,xe,pe.data):n.texImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,ne,xe,pe.data);M.generateMipmaps=!1}else ye?(je&&n.texStorage2D(t.TEXTURE_2D,oe,fe,W.width,W.height),N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,W.width,W.height,ne,xe,W.data)):n.texImage2D(t.TEXTURE_2D,0,fe,W.width,W.height,0,ne,xe,W.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ye&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,fe,Pe[0].width,Pe[0].height,W.depth);for(let q=0,Z=Pe.length;q<Z;q++)if(pe=Pe[q],M.format!==ti)if(ne!==null)if(ye){if(N)if(M.layerUpdates.size>0){const le=Sv(pe.width,pe.height,M.format,M.type);for(const Ne of M.layerUpdates){const Ye=pe.data.subarray(Ne*le/pe.data.BYTES_PER_ELEMENT,(Ne+1)*le/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Ne,pe.width,pe.height,1,ne,Ye,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,W.depth,ne,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,fe,pe.width,pe.height,W.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?N&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,pe.width,pe.height,W.depth,ne,xe,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,fe,pe.width,pe.height,W.depth,0,ne,xe,pe.data)}else{ye&&je&&n.texStorage2D(t.TEXTURE_2D,oe,fe,Pe[0].width,Pe[0].height);for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],M.format!==ti?ne!==null?ye?N&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?N&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,pe.width,pe.height,ne,xe,pe.data):n.texImage2D(t.TEXTURE_2D,q,fe,pe.width,pe.height,0,ne,xe,pe.data)}else if(M.isDataArrayTexture)if(ye){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,oe,fe,W.width,W.height,W.depth),N)if(M.layerUpdates.size>0){const q=Sv(W.width,W.height,M.format,M.type);for(const Z of M.layerUpdates){const le=W.data.subarray(Z*q/W.data.BYTES_PER_ELEMENT,(Z+1)*q/W.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,W.width,W.height,1,ne,xe,le)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,W.width,W.height,W.depth,ne,xe,W.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,fe,W.width,W.height,W.depth,0,ne,xe,W.data);else if(M.isData3DTexture)ye?(je&&n.texStorage3D(t.TEXTURE_3D,oe,fe,W.width,W.height,W.depth),N&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,W.width,W.height,W.depth,ne,xe,W.data)):n.texImage3D(t.TEXTURE_3D,0,fe,W.width,W.height,W.depth,0,ne,xe,W.data);else if(M.isFramebufferTexture){if(je)if(ye)n.texStorage2D(t.TEXTURE_2D,oe,fe,W.width,W.height);else{let q=W.width,Z=W.height;for(let le=0;le<oe;le++)n.texImage2D(t.TEXTURE_2D,le,fe,q,Z,0,ne,xe,null),q>>=1,Z>>=1}}else if(Pe.length>0){if(ye&&je){const q=ze(Pe[0]);n.texStorage2D(t.TEXTURE_2D,oe,fe,q.width,q.height)}for(let q=0,Z=Pe.length;q<Z;q++)pe=Pe[q],ye?N&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ne,xe,pe):n.texImage2D(t.TEXTURE_2D,q,fe,ne,xe,pe);M.generateMipmaps=!1}else if(ye){if(je){const q=ze(W);n.texStorage2D(t.TEXTURE_2D,oe,fe,q.width,q.height)}N&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne,xe,W)}else n.texImage2D(t.TEXTURE_2D,0,fe,ne,xe,W);m(M)&&h(te),Re.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function $(C,M,V){if(M.image.length!==6)return;const te=Ae(C,M),re=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+V);const ee=i.get(re);if(re.version!==ee.__version||te===!0){n.activeTexture(t.TEXTURE0+V);const Re=ot.getPrimaries(ot.workingColorSpace),de=M.colorSpace===$i?null:ot.getPrimaries(M.colorSpace),B=M.colorSpace===$i||Re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,B);const Q=M.isCompressedTexture||M.image[0].isCompressedTexture,W=M.image[0]&&M.image[0].isDataTexture,ne=[];for(let Z=0;Z<6;Z++)!Q&&!W?ne[Z]=g(M.image[Z],!0,r.maxCubemapSize):ne[Z]=W?M.image[Z].image:M.image[Z],ne[Z]=be(M,ne[Z]);const xe=ne[0],fe=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),Pe=_(M.internalFormat,fe,pe,M.colorSpace),ye=M.isVideoTexture!==!0,je=ee.__version===void 0||te===!0,N=re.dataReady;let oe=x(M,xe);ae(t.TEXTURE_CUBE_MAP,M);let q;if(Q){ye&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Pe,xe.width,xe.height);for(let Z=0;Z<6;Z++){q=ne[Z].mipmaps;for(let le=0;le<q.length;le++){const Ne=q[le];M.format!==ti?fe!==null?ye?N&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ne.width,Ne.height,fe,Ne.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Pe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,0,0,Ne.width,Ne.height,fe,pe,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le,Pe,Ne.width,Ne.height,0,fe,pe,Ne.data)}}}else{if(q=M.mipmaps,ye&&je){q.length>0&&oe++;const Z=ze(ne[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,Pe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(W){ye?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ne[Z].width,ne[Z].height,fe,pe,ne[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,ne[Z].width,ne[Z].height,0,fe,pe,ne[Z].data);for(let le=0;le<q.length;le++){const Ye=q[le].image[Z].image;ye?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,Ye.width,Ye.height,fe,pe,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Pe,Ye.width,Ye.height,0,fe,pe,Ye.data)}}else{ye?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,fe,pe,ne[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Pe,fe,pe,ne[Z]);for(let le=0;le<q.length;le++){const Ne=q[le];ye?N&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,0,0,fe,pe,Ne.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,le+1,Pe,fe,pe,Ne.image[Z])}}}m(M)&&h(t.TEXTURE_CUBE_MAP),ee.__version=re.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ie(C,M,V,te,re,ee){const Re=s.convert(V.format,V.colorSpace),de=s.convert(V.type),B=_(V.internalFormat,Re,de,V.colorSpace);if(!i.get(M).__hasExternalTextures){const W=Math.max(1,M.width>>ee),ne=Math.max(1,M.height>>ee);re===t.TEXTURE_3D||re===t.TEXTURE_2D_ARRAY?n.texImage3D(re,ee,B,W,ne,M.depth,0,Re,de,null):n.texImage2D(re,ee,B,W,ne,0,Re,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,re,i.get(V).__webglTexture,0,Ie(M)):(re===t.TEXTURE_2D||re>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,re,i.get(V).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ge(C,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const te=M.depthTexture,re=te&&te.isDepthTexture?te.type:null,ee=y(M.stencilBuffer,re),Re=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=Ie(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,ee,M.width,M.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Re,t.RENDERBUFFER,C)}else{const te=M.textures;for(let re=0;re<te.length;re++){const ee=te[re],Re=s.convert(ee.format,ee.colorSpace),de=s.convert(ee.type),B=_(ee.internalFormat,Re,de,ee.colorSpace),Q=Ie(M);V&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,B,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,B,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,B,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const te=i.get(M.depthTexture).__webglTexture,re=Ie(M);if(M.depthTexture.format===yo)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,te,0);else if(M.depthTexture.format===Uo)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0,re):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Ue(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,C)}else if(V){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=t.createRenderbuffer(),ge(M.__webglDepthbuffer[te],C,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),ge(M.__webglDepthbuffer,C,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,M,V){const te=i.get(C);M!==void 0&&ie(te.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&Ue(C)}function Ve(C){const M=C.texture,V=i.get(C),te=i.get(M);C.addEventListener("dispose",A);const re=C.textures,ee=C.isWebGLCubeRenderTarget===!0,Re=re.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=M.version,o.memory.textures++),ee){V.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[de]=[];for(let B=0;B<M.mipmaps.length;B++)V.__webglFramebuffer[de][B]=t.createFramebuffer()}else V.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)V.__webglFramebuffer[de]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Re)for(let de=0,B=re.length;de<B;de++){const Q=i.get(re[de]);Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Me(C)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let de=0;de<re.length;de++){const B=re[de];V.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[de]);const Q=s.convert(B.format,B.colorSpace),W=s.convert(B.type),ne=_(B.internalFormat,Q,W,B.colorSpace,C.isXRRenderTarget===!0),xe=Ie(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,xe,ne,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,V.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),ge(V.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ee){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ae(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)ie(V.__webglFramebuffer[de][B],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,B);else ie(V.__webglFramebuffer[de],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Re){for(let de=0,B=re.length;de<B;de++){const Q=re[de],W=i.get(Q);n.bindTexture(t.TEXTURE_2D,W.__webglTexture),ae(t.TEXTURE_2D,Q),ie(V.__webglFramebuffer,C,Q,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(Q)&&h(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,te.__webglTexture),ae(de,M),M.mipmaps&&M.mipmaps.length>0)for(let B=0;B<M.mipmaps.length;B++)ie(V.__webglFramebuffer[B],C,M,t.COLOR_ATTACHMENT0,de,B);else ie(V.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&h(de),n.unbindTexture()}C.depthBuffer&&Ue(C)}function dt(C){const M=C.textures;for(let V=0,te=M.length;V<te;V++){const re=M[V];if(m(re)){const ee=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(re).__webglTexture;n.bindTexture(ee,Re),h(ee),n.unbindTexture()}}}const L=[],nt=[];function Le(C){if(C.samples>0){if(Me(C)===!1){const M=C.textures,V=C.width,te=C.height;let re=t.COLOR_BUFFER_BIT;const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(C),de=M.length>1;if(de)for(let B=0;B<M.length;B++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let B=0;B<M.length;B++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(re|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(re|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[B]);const Q=i.get(M[B]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Q,0)}t.blitFramebuffer(0,0,V,te,0,0,V,te,re,t.NEAREST),l===!0&&(L.length=0,nt.length=0,L.push(t.COLOR_ATTACHMENT0+B),C.depthBuffer&&C.resolveDepthBuffer===!1&&(L.push(ee),nt.push(ee),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,nt)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,L))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let B=0;B<M.length;B++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.RENDERBUFFER,Re.__webglColorRenderbuffer[B]);const Q=i.get(M[B]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+B,t.TEXTURE_2D,Q,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ie(C){return Math.min(r.maxSamples,C.samples)}function Me(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function at(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function be(C,M){const V=C.colorSpace,te=C.format,re=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==Gr&&V!==$i&&(ot.getTransfer(V)===mt?(te!==ti||re!==ir)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function ze(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=R,this.setTexture2D=j,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Me}function tP(t,e){function n(i,r=$i){let s;const o=ot.getTransfer(r);if(i===ir)return t.UNSIGNED_BYTE;if(i===Cm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bx)return t.BYTE;if(i===Cx)return t.SHORT;if(i===qa)return t.UNSIGNED_SHORT;if(i===bm)return t.INT;if(i===ms)return t.UNSIGNED_INT;if(i===qi)return t.FLOAT;if(i===al)return t.HALF_FLOAT;if(i===Px)return t.ALPHA;if(i===Lx)return t.RGB;if(i===ti)return t.RGBA;if(i===Ix)return t.LUMINANCE;if(i===Nx)return t.LUMINANCE_ALPHA;if(i===yo)return t.DEPTH_COMPONENT;if(i===Uo)return t.DEPTH_STENCIL;if(i===Dx)return t.RED;if(i===Pm)return t.RED_INTEGER;if(i===Ux)return t.RG;if(i===Lm)return t.RG_INTEGER;if(i===Im)return t.RGBA_INTEGER;if(i===Cu||i===Ru||i===Pu||i===Lu)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vh||i===Gh||i===Wh||i===$h)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$h)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xh||i===jh||i===Yh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Xh||i===jh)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===qh||i===Kh||i===Zh||i===Qh||i===Jh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===qh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Jh)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tp)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===np)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ip)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rp)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sp)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===op)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ap)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lp)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Iu||i===up||i===cp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Iu)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ox||i===fp||i===dp||i===hp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Iu)return s.COMPRESSED_RED_RGTC1_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dp)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===hp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Do?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class nP extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ou extends mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iP={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ou,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ou,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ou,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=n.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ou;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const rP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sP=`
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

}`;class oP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new or({vertexShader:rP,fragmentShader:sP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new yi(new cl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aP extends Ho{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,v=null;const g=new oP,m=n.getContextAttributes();let h=null,_=null;const y=[],x=[],b=new Ze;let A=null;const E=new Zn;E.layers.enable(1),E.viewport=new Xt;const P=new Zn;P.layers.enable(2),P.viewport=new Xt;const T=[E,P],S=new nP;S.layers.enable(1),S.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=y[$];return ie===void 0&&(ie=new bd,y[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=y[$];return ie===void 0&&(ie=new bd,y[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=y[$];return ie===void 0&&(ie=new bd,y[$]=ie),ie.getHandSpace()};function O($){const ie=x.indexOf($.inputSource);if(ie===-1)return;const ge=y[ie];ge!==void 0&&(ge.update($.inputSource,$.frame,u||o),ge.dispatchEvent({type:$.type,data:$.inputSource}))}function j(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",H);for(let $=0;$<y.length;$++){const ie=x[$];ie!==null&&(x[$]=null,y[$].disconnect(ie))}R=null,z=null,g.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,_=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",j),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new gs(p.framebufferWidth,p.framebufferHeight,{format:ti,type:ir,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,ge=null,he=null;m.depth&&(he=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Uo:yo,ge=m.stencil?Do:ms);const Ue={colorFormat:n.RGBA8,depthFormat:he,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new gs(d.textureWidth,d.textureHeight,{format:ti,type:ir,depthTexture:new qx(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function H($){for(let ie=0;ie<$.removed.length;ie++){const ge=$.removed[ie],he=x.indexOf(ge);he>=0&&(x[he]=null,y[he].disconnect(ge))}for(let ie=0;ie<$.added.length;ie++){const ge=$.added[ie];let he=x.indexOf(ge);if(he===-1){for(let Be=0;Be<y.length;Be++)if(Be>=x.length){x.push(ge),he=Be;break}else if(x[Be]===null){x[Be]=ge,he=Be;break}if(he===-1)break}const Ue=y[he];Ue&&Ue.connect(ge)}}const Y=new k,X=new k;function I($,ie,ge){Y.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const he=Y.distanceTo(X),Ue=ie.projectionMatrix.elements,Be=ge.projectionMatrix.elements,Ve=Ue[14]/(Ue[10]-1),dt=Ue[14]/(Ue[10]+1),L=(Ue[9]+1)/Ue[5],nt=(Ue[9]-1)/Ue[5],Le=(Ue[8]-1)/Ue[0],Ie=(Be[8]+1)/Be[0],Me=Ve*Le,at=Ve*Ie,be=he/(-Le+Ie),ze=be*-Le;ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ze),$.translateZ(be),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const C=Ve+be,M=dt+be,V=Me-ze,te=at+(he-ze),re=L*dt/M*C,ee=nt*dt/M*C;$.projectionMatrix.makePerspective(V,te,re,ee,C,M),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function K($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;g.texture!==null&&($.near=g.depthNear,$.far=g.depthFar),S.near=P.near=E.near=$.near,S.far=P.far=E.far=$.far,(R!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far,E.near=R,E.far=z,P.near=R,P.far=z,E.updateProjectionMatrix(),P.updateProjectionMatrix(),$.updateProjectionMatrix());const ie=$.parent,ge=S.cameras;K(S,ie);for(let he=0;he<ge.length;he++)K(ge[he],ie);ge.length===2?I(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),J($,S,ie)};function J($,ie,ge){ge===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(ge.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ka*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(S)};let ae=null;function Ae($,ie){if(c=ie.getViewerPose(u||o),v=ie,c!==null){const ge=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let he=!1;ge.length!==S.cameras.length&&(S.cameras.length=0,he=!0);for(let Be=0;Be<ge.length;Be++){const Ve=ge[Be];let dt=null;if(p!==null)dt=p.getViewport(Ve);else{const nt=f.getViewSubImage(d,Ve);dt=nt.viewport,Be===0&&(e.setRenderTargetTextures(_,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(_))}let L=T[Be];L===void 0&&(L=new Zn,L.layers.enable(Be),L.viewport=new Xt,T[Be]=L),L.matrix.fromArray(Ve.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(Ve.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(dt.x,dt.y,dt.width,dt.height),Be===0&&(S.matrix.copy(L.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),he===!0&&S.cameras.push(L)}const Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")){const Be=f.getDepthInformation(ge[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,r.renderState)}}for(let ge=0;ge<y.length;ge++){const he=x[ge],Ue=y[ge];he!==null&&Ue!==void 0&&Ue.update(he,ie,u||o)}ae&&ae($,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),v=null}const He=new jx;He.setAnimationLoop(Ae),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}}const Kr=new rr,lP=new xt;function uP(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Gx(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,_,y,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,_,y):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===wn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===wn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const _=e.get(h),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Kr.copy(x),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),m.envMapRotation.value.setFromMatrix4(lP.makeRotationFromEuler(Kr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,_,y){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*_,m.scale.value=y*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,_){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===wn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const _=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function cP(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;i.uniformBlockBinding(_,x)}function u(_,y){let x=r[_.id];x===void 0&&(v(_),x=c(_),r[_.id]=x,_.addEventListener("dispose",m));const b=y.program;i.updateUBOMapping(_,b);const A=e.render.frame;s[_.id]!==A&&(d(_),s[_.id]=A)}function c(_){const y=f();_.__bindingPointIndex=y;const x=t.createBuffer(),b=_.__size,A=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,x),x}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=r[_.id],x=_.uniforms,b=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let A=0,E=x.length;A<E;A++){const P=Array.isArray(x[A])?x[A]:[x[A]];for(let T=0,S=P.length;T<S;T++){const R=P[T];if(p(R,A,T,b)===!0){const z=R.__offset,O=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let H=0;H<O.length;H++){const Y=O[H],X=g(Y);typeof Y=="number"||typeof Y=="boolean"?(R.__data[0]=Y,t.bufferSubData(t.UNIFORM_BUFFER,z+j,R.__data)):Y.isMatrix3?(R.__data[0]=Y.elements[0],R.__data[1]=Y.elements[1],R.__data[2]=Y.elements[2],R.__data[3]=0,R.__data[4]=Y.elements[3],R.__data[5]=Y.elements[4],R.__data[6]=Y.elements[5],R.__data[7]=0,R.__data[8]=Y.elements[6],R.__data[9]=Y.elements[7],R.__data[10]=Y.elements[8],R.__data[11]=0):(Y.toArray(R.__data,j),j+=X.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,x,b){const A=_.value,E=y+"_"+x;if(b[E]===void 0)return typeof A=="number"||typeof A=="boolean"?b[E]=A:b[E]=A.clone(),!0;{const P=b[E];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[E]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function v(_){const y=_.uniforms;let x=0;const b=16;for(let E=0,P=y.length;E<P;E++){const T=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,R=T.length;S<R;S++){const z=T[S],O=Array.isArray(z.value)?z.value:[z.value];for(let j=0,H=O.length;j<H;j++){const Y=O[j],X=g(Y),I=x%b,K=I%X.boundary,J=I+K;x+=K,J!==0&&b-J<X.storage&&(x+=b-J),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=X.storage}}}const A=x%b;return A>0&&(x+=b-A),_.__size=x,_.__cache={},this}function g(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class eS{constructor(e={}){const{canvas:n=tT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const h=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yn,this.toneMapping=Ur,this.toneMappingExposure=1;const y=this;let x=!1,b=0,A=0,E=null,P=-1,T=null;const S=new Xt,R=new Xt;let z=null;const O=new Je(0);let j=0,H=n.width,Y=n.height,X=1,I=null,K=null;const J=new Xt(0,0,H,Y),ae=new Xt(0,0,H,Y);let Ae=!1;const He=new Xx;let $=!1,ie=!1;const ge=new xt,he=new k,Ue=new Xt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function dt(){return E===null?X:1}let L=i;function nt(w,D){return n.getContext(w,D)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vc}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",Z,!1),n.addEventListener("webglcontextcreationerror",le,!1),L===null){const D="webgl2";if(L=nt(D,w),L===null)throw nt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Le,Ie,Me,at,be,ze,C,M,V,te,re,ee,Re,de,B,Q,W,ne,xe,fe,pe,Pe,ye,je;function N(){Le=new vC(L),Le.init(),Pe=new tP(L,Le),Ie=new fC(L,Le,e,Pe),Me=new QR(L),at=new xC(L),be=new kR,ze=new eP(L,Le,Me,be,Ie,Pe,at),C=new hC(y),M=new gC(y),V=new bT(L),ye=new uC(L,V),te=new _C(L,V,at,ye),re=new MC(L,te,V,at),xe=new SC(L,Ie,ze),Q=new dC(be),ee=new FR(y,C,M,Le,Ie,ye,Q),Re=new uP(y,be),de=new BR,B=new XR(Le),ne=new lC(y,C,M,Me,re,d,l),W=new ZR(y,re,Ie),je=new cP(L,at,Ie,Me),fe=new cC(L,Le,at),pe=new yC(L,Le,at),at.programs=ee.programs,y.capabilities=Ie,y.extensions=Le,y.properties=be,y.renderLists=de,y.shadowMap=W,y.state=Me,y.info=at}N();const oe=new aP(y,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const w=Le.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Le.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(H,Y,!1))},this.getSize=function(w){return w.set(H,Y)},this.setSize=function(w,D,F=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=w,Y=D,n.width=Math.floor(w*X),n.height=Math.floor(D*X),F===!0&&(n.style.width=w+"px",n.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(H*X,Y*X).floor()},this.setDrawingBufferSize=function(w,D,F){H=w,Y=D,X=F,n.width=Math.floor(w*F),n.height=Math.floor(D*F),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,D,F,G){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,D,F,G),Me.viewport(S.copy(J).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(ae)},this.setScissor=function(w,D,F,G){w.isVector4?ae.set(w.x,w.y,w.z,w.w):ae.set(w,D,F,G),Me.scissor(R.copy(ae).multiplyScalar(X).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Me.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){I=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor.apply(ne,arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha.apply(ne,arguments)},this.clear=function(w=!0,D=!0,F=!0){let G=0;if(w){let U=!1;if(E!==null){const ue=E.texture.format;U=ue===Im||ue===Lm||ue===Pm}if(U){const ue=E.texture.type,_e=ue===ir||ue===ms||ue===qa||ue===Do||ue===Cm||ue===Rm,Ee=ne.getClearColor(),we=ne.getClearAlpha(),Oe=Ee.r,ke=Ee.g,De=Ee.b;_e?(p[0]=Oe,p[1]=ke,p[2]=De,p[3]=we,L.clearBufferuiv(L.COLOR,0,p)):(v[0]=Oe,v[1]=ke,v[2]=De,v[3]=we,L.clearBufferiv(L.COLOR,0,v))}else G|=L.COLOR_BUFFER_BIT}D&&(G|=L.DEPTH_BUFFER_BIT),F&&(G|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",Z,!1),n.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),B.dispose(),be.dispose(),C.dispose(),M.dispose(),re.dispose(),ye.dispose(),je.dispose(),ee.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",_n),oe.removeEventListener("sessionend",yl),Oi.stop()};function q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const w=at.autoReset,D=W.enabled,F=W.autoUpdate,G=W.needsUpdate,U=W.type;N(),at.autoReset=w,W.enabled=D,W.autoUpdate=F,W.needsUpdate=G,W.type=U}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ne(w){const D=w.target;D.removeEventListener("dispose",Ne),Ye(D)}function Ye(w){vt(w),be.remove(w)}function vt(w){const D=be.get(w).programs;D!==void 0&&(D.forEach(function(F){ee.releaseProgram(F)}),w.isShaderMaterial&&ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,F,G,U,ue){D===null&&(D=Be);const _e=U.isMesh&&U.matrixWorld.determinant()<0,Ee=bf(w,D,F,G,U);Me.setMaterial(G,_e);let we=F.index,Oe=1;if(G.wireframe===!0){if(we=te.getWireframeAttribute(F),we===void 0)return;Oe=2}const ke=F.drawRange,De=F.attributes.position;let it=ke.start*Oe,Tt=(ke.start+ke.count)*Oe;ue!==null&&(it=Math.max(it,ue.start*Oe),Tt=Math.min(Tt,(ue.start+ue.count)*Oe)),we!==null?(it=Math.max(it,0),Tt=Math.min(Tt,we.count)):De!=null&&(it=Math.max(it,0),Tt=Math.min(Tt,De.count));const At=Tt-it;if(At<0||At===1/0)return;ye.setup(U,G,Ee,F,we);let Rn,rt=fe;if(we!==null&&(Rn=V.get(we),rt=pe,rt.setIndex(Rn)),U.isMesh)G.wireframe===!0?(Me.setLineWidth(G.wireframeLinewidth*dt()),rt.setMode(L.LINES)):rt.setMode(L.TRIANGLES);else if(U.isLine){let Ce=G.linewidth;Ce===void 0&&(Ce=1),Me.setLineWidth(Ce*dt()),U.isLineSegments?rt.setMode(L.LINES):U.isLineLoop?rt.setMode(L.LINE_LOOP):rt.setMode(L.LINE_STRIP)}else U.isPoints?rt.setMode(L.POINTS):U.isSprite&&rt.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)rt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))rt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ce=U._multiDrawStarts,qt=U._multiDrawCounts,st=U._multiDrawCount,ci=we?V.get(we).bytesPerElement:1,Ts=be.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<st;Pn++)Ts.setValue(L,"_gl_DrawID",Pn),rt.render(Ce[Pn]/ci,qt[Pn])}else if(U.isInstancedMesh)rt.renderInstances(it,At,U.count);else if(F.isInstancedBufferGeometry){const Ce=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,qt=Math.min(F.instanceCount,Ce);rt.renderInstances(it,At,qt)}else rt.render(it,At)};function Ft(w,D,F){w.transparent===!0&&w.side===Pi&&w.forceSinglePass===!1?(w.side=wn,w.needsUpdate=!0,Ms(w,D,F),w.side=kr,w.needsUpdate=!0,Ms(w,D,F),w.side=Pi):Ms(w,D,F)}this.compile=function(w,D,F=null){F===null&&(F=w),m=B.get(F),m.init(D),_.push(m),F.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),w!==F&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return w.traverse(function(U){const ue=U.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Ee=ue[_e];Ft(Ee,F,U),G.add(Ee)}else Ft(ue,F,U),G.add(ue)}),_.pop(),m=null,G},this.compileAsync=function(w,D,F=null){const G=this.compile(w,D,F);return new Promise(U=>{function ue(){if(G.forEach(function(_e){be.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){U(w);return}setTimeout(ue,10)}Le.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let qe=null;function Cn(w){qe&&qe(w)}function _n(){Oi.stop()}function yl(){Oi.start()}const Oi=new jx;Oi.setAnimationLoop(Cn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(w){qe=w,oe.setAnimationLoop(w),w===null?Oi.stop():Oi.start()},oe.addEventListener("sessionstart",_n),oe.addEventListener("sessionend",yl),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(D),D=oe.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,D,E),m=B.get(w,_.length),m.init(D),_.push(m),ge.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),He.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,$=Q.init(this.clippingPlanes,ie),g=de.get(w,h.length),g.init(),h.push(g),oe.enabled===!0&&oe.isPresenting===!0){const ue=y.xr.getDepthSensingMesh();ue!==null&&Yo(ue,D,-1/0,y.sortObjects)}Yo(w,D,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(I,K),Ve=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ve&&ne.addToRenderList(g,w),this.info.render.frame++,$===!0&&Q.beginShadows();const F=m.state.shadowsArray;W.render(F,w,D),$===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,U=g.transmissive;if(m.setupLights(),D.isArrayCamera){const ue=D.cameras;if(U.length>0)for(let _e=0,Ee=ue.length;_e<Ee;_e++){const we=ue[_e];Sl(G,U,w,we)}Ve&&ne.render(w);for(let _e=0,Ee=ue.length;_e<Ee;_e++){const we=ue[_e];xl(g,w,we,we.viewport)}}else U.length>0&&Sl(G,U,w,D),Ve&&ne.render(w),xl(g,w,D);E!==null&&(ze.updateMultisampleRenderTarget(E),ze.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(y,w,D),ye.resetDefaultState(),P=-1,T=null,_.pop(),_.length>0?(m=_[_.length-1],$===!0&&Q.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Yo(w,D,F,G){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)F=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||He.intersectsSprite(w)){G&&Ue.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ge);const _e=re.update(w),Ee=w.material;Ee.visible&&g.push(w,_e,Ee,F,Ue.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||He.intersectsObject(w))){const _e=re.update(w),Ee=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ue.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Ue.copy(_e.boundingSphere.center)),Ue.applyMatrix4(w.matrixWorld).applyMatrix4(ge)),Array.isArray(Ee)){const we=_e.groups;for(let Oe=0,ke=we.length;Oe<ke;Oe++){const De=we[Oe],it=Ee[De.materialIndex];it&&it.visible&&g.push(w,_e,it,F,Ue.z,De)}}else Ee.visible&&g.push(w,_e,Ee,F,Ue.z,null)}}const ue=w.children;for(let _e=0,Ee=ue.length;_e<Ee;_e++)Yo(ue[_e],D,F,G)}function xl(w,D,F,G){const U=w.opaque,ue=w.transmissive,_e=w.transparent;m.setupLightsView(F),$===!0&&Q.setGlobalState(y.clippingPlanes,F),G&&Me.viewport(S.copy(G)),U.length>0&&xs(U,D,F),ue.length>0&&xs(ue,D,F),_e.length>0&&xs(_e,D,F),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Sl(w,D,F,G){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new gs(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?al:ir,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const ue=m.state.transmissionRenderTarget[G.id],_e=G.viewport||S;ue.setSize(_e.z,_e.w);const Ee=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(O),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Ve&&ne.render(F);const we=y.toneMapping;y.toneMapping=Ur;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),$===!0&&Q.setGlobalState(y.clippingPlanes,G),xs(w,F,G),ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue),Le.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let De=0,it=D.length;De<it;De++){const Tt=D[De],At=Tt.object,Rn=Tt.geometry,rt=Tt.material,Ce=Tt.group;if(rt.side===Pi&&At.layers.test(G.layers)){const qt=rt.side;rt.side=wn,rt.needsUpdate=!0,Ss(At,F,G,Rn,rt,Ce),rt.side=qt,rt.needsUpdate=!0,ke=!0}}ke===!0&&(ze.updateMultisampleRenderTarget(ue),ze.updateRenderTargetMipmap(ue))}y.setRenderTarget(Ee),y.setClearColor(O,j),Oe!==void 0&&(G.viewport=Oe),y.toneMapping=we}function xs(w,D,F){const G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,ue=w.length;U<ue;U++){const _e=w[U],Ee=_e.object,we=_e.geometry,Oe=G===null?_e.material:G,ke=_e.group;Ee.layers.test(F.layers)&&Ss(Ee,D,F,we,Oe,ke)}}function Ss(w,D,F,G,U,ue){w.onBeforeRender(y,D,F,G,U,ue),w.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.transparent===!0&&U.side===Pi&&U.forceSinglePass===!1?(U.side=wn,U.needsUpdate=!0,y.renderBufferDirect(F,D,G,U,w,ue),U.side=kr,U.needsUpdate=!0,y.renderBufferDirect(F,D,G,U,w,ue),U.side=Pi):y.renderBufferDirect(F,D,G,U,w,ue),w.onAfterRender(y,D,F,G,U,ue)}function Ms(w,D,F){D.isScene!==!0&&(D=Be);const G=be.get(w),U=m.state.lights,ue=m.state.shadowsArray,_e=U.state.version,Ee=ee.getParameters(w,U.state,ue,D,F),we=ee.getProgramCacheKey(Ee);let Oe=G.programs;G.environment=w.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(w.isMeshStandardMaterial?M:C).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Ne),Oe=new Map,G.programs=Oe);let ke=Oe.get(we);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===_e)return ws(w,Ee),ke}else Ee.uniforms=ee.getUniforms(w),w.onBeforeCompile(Ee,y),ke=ee.acquireProgram(Ee,we),Oe.set(we,ke),G.uniforms=Ee.uniforms;const De=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(De.clippingPlanes=Q.uniform),ws(w,Ee),G.needsLights=kt(w),G.lightsStateVersion=_e,G.needsLights&&(De.ambientLightColor.value=U.state.ambient,De.lightProbe.value=U.state.probe,De.directionalLights.value=U.state.directional,De.directionalLightShadows.value=U.state.directionalShadow,De.spotLights.value=U.state.spot,De.spotLightShadows.value=U.state.spotShadow,De.rectAreaLights.value=U.state.rectArea,De.ltc_1.value=U.state.rectAreaLTC1,De.ltc_2.value=U.state.rectAreaLTC2,De.pointLights.value=U.state.point,De.pointLightShadows.value=U.state.pointShadow,De.hemisphereLights.value=U.state.hemi,De.directionalShadowMap.value=U.state.directionalShadowMap,De.directionalShadowMatrix.value=U.state.directionalShadowMatrix,De.spotShadowMap.value=U.state.spotShadowMap,De.spotLightMatrix.value=U.state.spotLightMatrix,De.spotLightMap.value=U.state.spotLightMap,De.pointShadowMap.value=U.state.pointShadowMap,De.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function Es(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Nu.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function ws(w,D){const F=be.get(w);F.outputColorSpace=D.outputColorSpace,F.batching=D.batching,F.batchingColor=D.batchingColor,F.instancing=D.instancing,F.instancingColor=D.instancingColor,F.instancingMorph=D.instancingMorph,F.skinning=D.skinning,F.morphTargets=D.morphTargets,F.morphNormals=D.morphNormals,F.morphColors=D.morphColors,F.morphTargetsCount=D.morphTargetsCount,F.numClippingPlanes=D.numClippingPlanes,F.numIntersection=D.numClipIntersection,F.vertexAlphas=D.vertexAlphas,F.vertexTangents=D.vertexTangents,F.toneMapping=D.toneMapping}function bf(w,D,F,G,U){D.isScene!==!0&&(D=Be),ze.resetTextureUnits();const ue=D.fog,_e=G.isMeshStandardMaterial?D.environment:null,Ee=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Gr,we=(G.isMeshStandardMaterial?M:C).get(G.envMap||_e),Oe=G.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,ke=!!F.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),De=!!F.morphAttributes.position,it=!!F.morphAttributes.normal,Tt=!!F.morphAttributes.color;let At=Ur;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(At=y.toneMapping);const Rn=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,rt=Rn!==void 0?Rn.length:0,Ce=be.get(G),qt=m.state.lights;if($===!0&&(ie===!0||w!==T)){const Wn=w===T&&G.id===P;Q.setState(G,w,Wn)}let st=!1;G.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==qt.state.version||Ce.outputColorSpace!==Ee||U.isBatchedMesh&&Ce.batching===!1||!U.isBatchedMesh&&Ce.batching===!0||U.isBatchedMesh&&Ce.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ce.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ce.instancing===!1||!U.isInstancedMesh&&Ce.instancing===!0||U.isSkinnedMesh&&Ce.skinning===!1||!U.isSkinnedMesh&&Ce.skinning===!0||U.isInstancedMesh&&Ce.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ce.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ce.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ce.instancingMorph===!1&&U.morphTexture!==null||Ce.envMap!==we||G.fog===!0&&Ce.fog!==ue||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Q.numPlanes||Ce.numIntersection!==Q.numIntersection)||Ce.vertexAlphas!==Oe||Ce.vertexTangents!==ke||Ce.morphTargets!==De||Ce.morphNormals!==it||Ce.morphColors!==Tt||Ce.toneMapping!==At||Ce.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ce.__version=G.version);let ci=Ce.currentProgram;st===!0&&(ci=Ms(G,D,U));let Ts=!1,Pn=!1,Cf=!1;const Nt=ci.getUniforms(),ur=Ce.uniforms;if(Me.useProgram(ci.program)&&(Ts=!0,Pn=!0,Cf=!0),G.id!==P&&(P=G.id,Pn=!0),Ts||T!==w){Nt.setValue(L,"projectionMatrix",w.projectionMatrix),Nt.setValue(L,"viewMatrix",w.matrixWorldInverse);const Wn=Nt.map.cameraPosition;Wn!==void 0&&Wn.setValue(L,he.setFromMatrixPosition(w.matrixWorld)),Ie.logarithmicDepthBuffer&&Nt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Nt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,Pn=!0,Cf=!0)}if(U.isSkinnedMesh){Nt.setOptional(L,U,"bindMatrix"),Nt.setOptional(L,U,"bindMatrixInverse");const Wn=U.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Nt.setValue(L,"boneTexture",Wn.boneTexture,ze))}U.isBatchedMesh&&(Nt.setOptional(L,U,"batchingTexture"),Nt.setValue(L,"batchingTexture",U._matricesTexture,ze),Nt.setOptional(L,U,"batchingIdTexture"),Nt.setValue(L,"batchingIdTexture",U._indirectTexture,ze),Nt.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&Nt.setValue(L,"batchingColorTexture",U._colorsTexture,ze));const Rf=F.morphAttributes;if((Rf.position!==void 0||Rf.normal!==void 0||Rf.color!==void 0)&&xe.update(U,F,ci),(Pn||Ce.receiveShadow!==U.receiveShadow)&&(Ce.receiveShadow=U.receiveShadow,Nt.setValue(L,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ur.envMap.value=we,ur.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(ur.envMapIntensity.value=D.environmentIntensity),Pn&&(Nt.setValue(L,"toneMappingExposure",y.toneMappingExposure),Ce.needsLights&&wt(ur,Cf),ue&&G.fog===!0&&Re.refreshFogUniforms(ur,ue),Re.refreshMaterialUniforms(ur,G,X,Y,m.state.transmissionRenderTarget[w.id]),Nu.upload(L,Es(Ce),ur,ze)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Nu.upload(L,Es(Ce),ur,ze),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Nt.setValue(L,"center",U.center),Nt.setValue(L,"modelViewMatrix",U.modelViewMatrix),Nt.setValue(L,"normalMatrix",U.normalMatrix),Nt.setValue(L,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wn=G.uniformsGroups;for(let Pf=0,cM=Wn.length;Pf<cM;Pf++){const mg=Wn[Pf];je.update(mg,ci),je.bind(mg,ci)}}return ci}function wt(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function kt(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,D,F){be.get(w.texture).__webglTexture=D,be.get(w.depthTexture).__webglTexture=F;const G=be.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=F===void 0,G.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const F=be.get(w);F.__webglFramebuffer=D,F.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,F=0){E=w,b=D,A=F;let G=!0,U=null,ue=!1,_e=!1;if(w){const we=be.get(w);we.__useDefaultFramebuffer!==void 0?(Me.bindFramebuffer(L.FRAMEBUFFER,null),G=!1):we.__webglFramebuffer===void 0?ze.setupRenderTarget(w):we.__hasExternalTextures&&ze.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(_e=!0);const ke=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[D])?U=ke[D][F]:U=ke[D],ue=!0):w.samples>0&&ze.useMultisampledRTT(w)===!1?U=be.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[F]:U=ke,S.copy(w.viewport),R.copy(w.scissor),z=w.scissorTest}else S.copy(J).multiplyScalar(X).floor(),R.copy(ae).multiplyScalar(X).floor(),z=Ae;if(Me.bindFramebuffer(L.FRAMEBUFFER,U)&&G&&Me.drawBuffers(w,U),Me.viewport(S),Me.scissor(R),Me.setScissorTest(z),ue){const we=be.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+D,we.__webglTexture,F)}else if(_e){const we=be.get(w.texture),Oe=D||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,we.__webglTexture,F||0,Oe)}P=-1},this.readRenderTargetPixels=function(w,D,F,G,U,ue,_e){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Me.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const we=w.texture,Oe=we.format,ke=we.type;if(!Ie.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ie.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-G&&F>=0&&F<=w.height-U&&L.readPixels(D,F,G,U,Pe.convert(Oe),Pe.convert(ke),ue)}finally{const we=E!==null?be.get(E).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,D,F,G,U,ue,_e){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(Ee=Ee[_e]),Ee){Me.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const we=w.texture,Oe=we.format,ke=we.type;if(!Ie.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ie.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-G&&F>=0&&F<=w.height-U){const De=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.bufferData(L.PIXEL_PACK_BUFFER,ue.byteLength,L.STREAM_READ),L.readPixels(D,F,G,U,Pe.convert(Oe),Pe.convert(ke),0),L.flush();const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);await nT(L,it,4);try{L.bindBuffer(L.PIXEL_PACK_BUFFER,De),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ue)}finally{L.deleteBuffer(De),L.deleteSync(it)}return ue}}finally{const we=E!==null?be.get(E).__webglFramebuffer:null;Me.bindFramebuffer(L.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,D=null,F=0){w.isTexture!==!0&&(xo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-F),U=Math.floor(w.image.width*G),ue=Math.floor(w.image.height*G),_e=D!==null?D.x:0,Ee=D!==null?D.y:0;ze.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,F,0,0,_e,Ee,U,ue),Me.unbindTexture()},this.copyTextureToTexture=function(w,D,F=null,G=null,U=0){w.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,F=null);let ue,_e,Ee,we,Oe,ke;F!==null?(ue=F.max.x-F.min.x,_e=F.max.y-F.min.y,Ee=F.min.x,we=F.min.y):(ue=w.image.width,_e=w.image.height,Ee=0,we=0),G!==null?(Oe=G.x,ke=G.y):(Oe=0,ke=0);const De=Pe.convert(D.format),it=Pe.convert(D.type);ze.setTexture2D(D,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const Tt=L.getParameter(L.UNPACK_ROW_LENGTH),At=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rn=L.getParameter(L.UNPACK_SKIP_PIXELS),rt=L.getParameter(L.UNPACK_SKIP_ROWS),Ce=L.getParameter(L.UNPACK_SKIP_IMAGES),qt=w.isCompressedTexture?w.mipmaps[U]:w.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,qt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ee),L.pixelStorei(L.UNPACK_SKIP_ROWS,we),w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,Oe,ke,ue,_e,De,it,qt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,Oe,ke,qt.width,qt.height,De,qt.data):L.texSubImage2D(L.TEXTURE_2D,U,Oe,ke,ue,_e,De,it,qt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Tt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rn),L.pixelStorei(L.UNPACK_SKIP_ROWS,rt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ce),U===0&&D.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(w,D,F=null,G=null,U=0){w.isTexture!==!0&&(xo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),F=arguments[0]||null,G=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0);let ue,_e,Ee,we,Oe,ke,De,it,Tt;const At=w.isCompressedTexture?w.mipmaps[U]:w.image;F!==null?(ue=F.max.x-F.min.x,_e=F.max.y-F.min.y,Ee=F.max.z-F.min.z,we=F.min.x,Oe=F.min.y,ke=F.min.z):(ue=At.width,_e=At.height,Ee=At.depth,we=0,Oe=0,ke=0),G!==null?(De=G.x,it=G.y,Tt=G.z):(De=0,it=0,Tt=0);const Rn=Pe.convert(D.format),rt=Pe.convert(D.type);let Ce;if(D.isData3DTexture)ze.setTexture3D(D,0),Ce=L.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)ze.setTexture2DArray(D,0),Ce=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,D.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,D.unpackAlignment);const qt=L.getParameter(L.UNPACK_ROW_LENGTH),st=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),Ts=L.getParameter(L.UNPACK_SKIP_ROWS),Pn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,At.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,At.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,we),L.pixelStorei(L.UNPACK_SKIP_ROWS,Oe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Ce,U,De,it,Tt,ue,_e,Ee,Rn,rt,At.data):D.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,U,De,it,Tt,ue,_e,Ee,Rn,At.data):L.texSubImage3D(Ce,U,De,it,Tt,ue,_e,Ee,Rn,rt,At),L.pixelStorei(L.UNPACK_ROW_LENGTH,qt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,st),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ts),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pn),U===0&&D.generateMipmaps&&L.generateMipmap(Ce),Me.unbindTexture()},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&ze.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ze.setTextureCube(w,0):w.isData3DTexture?ze.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ze.setTexture2DArray(w,0):ze.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){b=0,A=0,E=null,Me.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Nm?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Wc?"display-p3":"srgb"}}class xc extends mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rr,this.environmentIntensity=1,this.environmentRotation=new rr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Mv{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=pp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return xo("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new k;class co{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(e),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(e),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(e),this.setXYZ(n,un.x,un.y,un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=_i(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=_i(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=_i(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=_i(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=_i(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=lt(n,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ht(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new co(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cd extends an{constructor(e,n,i,r,s,o,a,l,u,c,f,d){super(null,o,a,l,u,c,r,s,f,d),this.isCompressedTexture=!0,this.image={width:n,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class fP extends an{constructor(e,n,i,r,s,o,a,l,u){super(e,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}const Hm="\\[\\]\\.:\\/",dP=new RegExp("["+Hm+"]","g"),Vm="[^"+Hm+"]",hP="[^"+Hm.replace("\\.","")+"]",pP=/((?:WC+[\/:])*)/.source.replace("WC",Vm),mP=/(WCOD+)?/.source.replace("WCOD",hP),gP=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vm),vP=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vm),_P=new RegExp("^"+pP+mP+gP+vP+"$"),yP=["material","materials","bones","map"];class xP{constructor(e,n,i){const r=i||Qe.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class Qe{constructor(e,n,i){this.path=n,this.parsedPath=i||Qe.parseTrackName(n),this.node=Qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Qe.Composite(e,n,i):new Qe(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(dP,"")}static parseTrackName(e){const n=_P.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);yP.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Qe.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let u=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===u){u=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[u]}}const o=e[r];if(o===void 0){const u=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Qe.Composite=xP;Qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Qe.prototype.GetterByBindingType=[Qe.prototype._getValue_direct,Qe.prototype._getValue_array,Qe.prototype._getValue_arrayElement,Qe.prototype._getValue_toArray];Qe.prototype.SetterByBindingTypeAndVersioning=[[Qe.prototype._setValue_direct,Qe.prototype._setValue_direct_setNeedsUpdate,Qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_array,Qe.prototype._setValue_array_setNeedsUpdate,Qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_arrayElement,Qe.prototype._setValue_arrayElement_setNeedsUpdate,Qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Qe.prototype._setValue_fromArray,Qe.prototype._setValue_fromArray_setNeedsUpdate,Qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gm{constructor(e){this.value=e}clone(){return new Gm(this.value.clone===void 0?this.value:this.value.clone())}}const Ev=new xt;class SP{constructor(e,n,i=0,r=1/0){this.ray=new Bx(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Fm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Ev.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ev),this}intersectObject(e,n=!0,i=[]){return vp(e,this,i,n),i.sort(wv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)vp(e[r],this,i,n);return i.sort(wv),i}}function wv(t,e){return t.distance-e.distance}function vp(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)vp(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const Wm=new Je,tS=["10%","50%","90%"],nS=new Array(9);for(let t=0;t<9;t++)nS[t]=t;function MP(t,e){return`linear-gradient(${nS.map((i,r)=>Wm.setHSL(1-(r-.5)/7,1-t/-360,1-e/-360).getStyle())})`}function EP(t,e){return`linear-gradient(${tS.map((i,r)=>`${Wm.setHSL(t/360,1-r/2,1-e/-360).getStyle()} ${i}`)})`}function wP(t,e){return`linear-gradient(${tS.map((i,r)=>`${Wm.setHSL(t/360,1-e/-360,1-r/2).getStyle()} ${i}`)})`}function TP(t,e,n,i){switch(t){case"h":return MP(n,i);case"s":return EP(e,i);case"l":return wP(e,n)}}const AP={h:"Hue",s:"Sat",l:"Lum"};function Rd(t){return t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),t.cancelBubble=!0,t.returnValue=!1,!1}function Pd(t){const[e,n]=Te.useState(!1),{hue:i,saturation:r,luminosity:s,setVal:o,type:a}=t,l=a==="h",u=a!=="h",c=`colorSlider-${a}`,[f,d]=Te.useState(!1);let p;const[v,g]=Te.useState(parseFloat(localStorage.getItem(c)||"0")),m=_=>{if(Rd(_),p===void 0)p=_.clientY;else{const y=v+(_.clientY-p)*(u?-1:1),x=l?HE(y,-360,0):VE(-360,0,y);g(x),o(x),localStorage.setItem(c,x.toFixed(0))}},h=_=>{Rd(_),p=void 0,document.removeEventListener("pointermove",m),document.removeEventListener("pointerup",h),d(!1),n(!1)};return Fe.jsx("div",{className:`color button ${a} ${e?"wider":""}`,onPointerDown:f?void 0:_=>{Rd(_.nativeEvent),n(!0),document.addEventListener("pointermove",m),document.addEventListener("pointerup",h),d(!0)},children:Fe.jsxs("div",{className:`mask ${e?"wider widerMask":""}`,children:[Fe.jsx("div",{className:`interior ${t.type} ${e?"wider":""}`,style:{top:v,backgroundImage:TP(a,i,r,s)}}),Fe.jsx("p",{children:AP[t.type]})]})})}function Ld(t,e){return`burgerXDash bd${e} ${t?"open":""}`}function bP(t){return Fe.jsxs("div",{className:"settings button",onClick:t.onClick,children:[Fe.jsx("div",{className:Ld(t.open,1)}),Fe.jsx("div",{className:Ld(t.open,2)}),Fe.jsx("div",{className:Ld(t.open,3)})]})}function ce(){return ce=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ce.apply(null,arguments)}function Xi(t){if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function iS(t){if(!Xi(t))return t;const e={};return Object.keys(t).forEach(n=>{e[n]=iS(t[n])}),e}function ri(t,e,n={clone:!0}){const i=n.clone?ce({},t):t;return Xi(t)&&Xi(e)&&Object.keys(e).forEach(r=>{Xi(e[r])&&Object.prototype.hasOwnProperty.call(t,r)&&Xi(t[r])?i[r]=ri(t[r],e[r],n):n.clone?i[r]=Xi(e[r])?iS(e[r]):e[r]:i[r]=e[r]}),i}const CP=Object.freeze(Object.defineProperty({__proto__:null,default:ri,isPlainObject:Xi},Symbol.toStringTag,{value:"Module"}));function Za(t){let e="https://mui.com/production-error/?code="+t;for(let n=1;n<arguments.length;n+=1)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified MUI error #"+t+"; visit "+e+" for the full message."}const RP=Object.freeze(Object.defineProperty({__proto__:null,default:Za},Symbol.toStringTag,{value:"Module"}));var rS={exports:{}},ct={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m=Symbol.for("react.element"),Xm=Symbol.for("react.portal"),jc=Symbol.for("react.fragment"),Yc=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),Kc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),PP=Symbol.for("react.server_context"),Qc=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),ef=Symbol.for("react.suspense_list"),tf=Symbol.for("react.memo"),nf=Symbol.for("react.lazy"),LP=Symbol.for("react.offscreen"),sS;sS=Symbol.for("react.module.reference");function li(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case $m:switch(t=t.type,t){case jc:case qc:case Yc:case Jc:case ef:return t;default:switch(t=t&&t.$$typeof,t){case PP:case Zc:case Qc:case nf:case tf:case Kc:return t;default:return e}}case Xm:return e}}}ct.ContextConsumer=Zc;ct.ContextProvider=Kc;ct.Element=$m;ct.ForwardRef=Qc;ct.Fragment=jc;ct.Lazy=nf;ct.Memo=tf;ct.Portal=Xm;ct.Profiler=qc;ct.StrictMode=Yc;ct.Suspense=Jc;ct.SuspenseList=ef;ct.isAsyncMode=function(){return!1};ct.isConcurrentMode=function(){return!1};ct.isContextConsumer=function(t){return li(t)===Zc};ct.isContextProvider=function(t){return li(t)===Kc};ct.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===$m};ct.isForwardRef=function(t){return li(t)===Qc};ct.isFragment=function(t){return li(t)===jc};ct.isLazy=function(t){return li(t)===nf};ct.isMemo=function(t){return li(t)===tf};ct.isPortal=function(t){return li(t)===Xm};ct.isProfiler=function(t){return li(t)===qc};ct.isStrictMode=function(t){return li(t)===Yc};ct.isSuspense=function(t){return li(t)===Jc};ct.isSuspenseList=function(t){return li(t)===ef};ct.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===jc||t===qc||t===Yc||t===Jc||t===ef||t===LP||typeof t=="object"&&t!==null&&(t.$$typeof===nf||t.$$typeof===tf||t.$$typeof===Kc||t.$$typeof===Zc||t.$$typeof===Qc||t.$$typeof===sS||t.getModuleId!==void 0)};ct.typeOf=li;rS.exports=ct;var Tv=rS.exports;const IP=/^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;function oS(t){const e=`${t}`.match(IP);return e&&e[1]||""}function aS(t,e=""){return t.displayName||t.name||oS(t)||e}function Av(t,e,n){const i=aS(e);return t.displayName||(i!==""?`${n}(${i})`:n)}function NP(t){if(t!=null){if(typeof t=="string")return t;if(typeof t=="function")return aS(t,"Component");if(typeof t=="object")switch(t.$$typeof){case Tv.ForwardRef:return Av(t,t.render,"ForwardRef");case Tv.Memo:return Av(t,t.type,"memo");default:return}}}const DP=Object.freeze(Object.defineProperty({__proto__:null,default:NP,getFunctionName:oS},Symbol.toStringTag,{value:"Module"}));function hn(t){if(typeof t!="string")throw new Error(Za(7));return t.charAt(0).toUpperCase()+t.slice(1)}const UP=Object.freeze(Object.defineProperty({__proto__:null,default:hn},Symbol.toStringTag,{value:"Module"}));function Du(t){return t&&t.ownerDocument||document}function OP(t,e){typeof t=="function"?t(e):t&&(t.current=e)}const lS=typeof window<"u"?Te.useLayoutEffect:Te.useEffect;function FP({controlled:t,default:e,name:n,state:i="value"}){const{current:r}=Te.useRef(t!==void 0),[s,o]=Te.useState(e),a=r?t:s,l=Te.useCallback(u=>{r||o(u)},[]);return[a,l]}function Id(t){const e=Te.useRef(t);return lS(()=>{e.current=t}),Te.useRef((...n)=>(0,e.current)(...n)).current}function _p(...t){return Te.useMemo(()=>t.every(e=>e==null)?null:e=>{t.forEach(n=>{OP(n,e)})},t)}class jm{constructor(){this.currentId=null,this.clear=()=>{this.currentId!==null&&(clearTimeout(this.currentId),this.currentId=null)},this.disposeEffect=()=>this.clear}static create(){return new jm}start(e,n){this.clear(),this.currentId=setTimeout(()=>{this.currentId=null,n()},e)}}let rf=!0,yp=!1;const kP=new jm,zP={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function BP(t){const{type:e,tagName:n}=t;return!!(n==="INPUT"&&zP[e]&&!t.readOnly||n==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function HP(t){t.metaKey||t.altKey||t.ctrlKey||(rf=!0)}function Nd(){rf=!1}function VP(){this.visibilityState==="hidden"&&yp&&(rf=!0)}function GP(t){t.addEventListener("keydown",HP,!0),t.addEventListener("mousedown",Nd,!0),t.addEventListener("pointerdown",Nd,!0),t.addEventListener("touchstart",Nd,!0),t.addEventListener("visibilitychange",VP,!0)}function WP(t){const{target:e}=t;try{return e.matches(":focus-visible")}catch{}return rf||BP(e)}function $P(){const t=Te.useCallback(r=>{r!=null&&GP(r.ownerDocument)},[]),e=Te.useRef(!1);function n(){return e.current?(yp=!0,kP.start(100,()=>{yp=!1}),e.current=!1,!0):!1}function i(r){return WP(r)?(e.current=!0,!0):!1}return{isFocusVisibleRef:e,onFocus:i,onBlur:n,ref:t}}const XP={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function Sc(t,e){const n=ce({},e);return Object.keys(t).forEach(i=>{if(i.toString().match(/^(components|slots)$/))n[i]=ce({},t[i],n[i]);else if(i.toString().match(/^(componentsProps|slotProps)$/)){const r=t[i]||{},s=e[i];n[i]={},!s||!Object.keys(s)?n[i]=r:!r||!Object.keys(r)?n[i]=s:(n[i]=ce({},s),Object.keys(r).forEach(o=>{n[i][o]=Sc(r[o],s[o])}))}else n[i]===void 0&&(n[i]=t[i])}),n}function Ym(t,e,n=void 0){const i={};return Object.keys(t).forEach(r=>{i[r]=t[r].reduce((s,o)=>{if(o){const a=e(o);a!==""&&s.push(a),n&&n[o]&&s.push(n[o])}return s},[]).join(" ")}),i}const bv=t=>t,jP=()=>{let t=bv;return{configure(e){t=e},generate(e){return t(e)},reset(){t=bv}}},YP=jP(),qP={active:"active",checked:"checked",completed:"completed",disabled:"disabled",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",open:"open",readOnly:"readOnly",required:"required",selected:"selected"};function sf(t,e,n="Mui"){const i=qP[e];return i?`${n}-${i}`:`${YP.generate(t)}-${e}`}function uS(t,e,n="Mui"){const i={};return e.forEach(r=>{i[r]=sf(t,r,n)}),i}function Ks(t,e=Number.MIN_SAFE_INTEGER,n=Number.MAX_SAFE_INTEGER){return Math.max(e,Math.min(t,n))}const KP=Object.freeze(Object.defineProperty({__proto__:null,default:Ks},Symbol.toStringTag,{value:"Module"}));function Tn(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function Ra(t){return typeof t=="string"}function ZP(t,e,n){return t===void 0||Ra(t)?e:ce({},e,{ownerState:ce({},e.ownerState,n)})}function cS(t){var e,n,i="";if(typeof t=="string"||typeof t=="number")i+=t;else if(typeof t=="object")if(Array.isArray(t)){var r=t.length;for(e=0;e<r;e++)t[e]&&(n=cS(t[e]))&&(i&&(i+=" "),i+=n)}else for(n in t)t[n]&&(i&&(i+=" "),i+=n);return i}function Di(){for(var t,e,n=0,i="",r=arguments.length;n<r;n++)(t=arguments[n])&&(e=cS(t))&&(i&&(i+=" "),i+=e);return i}function Uu(t,e=[]){if(t===void 0)return{};const n={};return Object.keys(t).filter(i=>i.match(/^on[A-Z]/)&&typeof t[i]=="function"&&!e.includes(i)).forEach(i=>{n[i]=t[i]}),n}function Cv(t){if(t===void 0)return{};const e={};return Object.keys(t).filter(n=>!(n.match(/^on[A-Z]/)&&typeof t[n]=="function")).forEach(n=>{e[n]=t[n]}),e}function QP(t){const{getSlotProps:e,additionalProps:n,externalSlotProps:i,externalForwardedProps:r,className:s}=t;if(!e){const p=Di(n==null?void 0:n.className,s,r==null?void 0:r.className,i==null?void 0:i.className),v=ce({},n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),g=ce({},n,r,i);return p.length>0&&(g.className=p),Object.keys(v).length>0&&(g.style=v),{props:g,internalRef:void 0}}const o=Uu(ce({},r,i)),a=Cv(i),l=Cv(r),u=e(o),c=Di(u==null?void 0:u.className,n==null?void 0:n.className,s,r==null?void 0:r.className,i==null?void 0:i.className),f=ce({},u==null?void 0:u.style,n==null?void 0:n.style,r==null?void 0:r.style,i==null?void 0:i.style),d=ce({},u,n,l,a);return c.length>0&&(d.className=c),Object.keys(f).length>0&&(d.style=f),{props:d,internalRef:u.ref}}function JP(t,e,n){return typeof t=="function"?t(e,n):t}const e2=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function vr(t){var e;const{elementType:n,externalSlotProps:i,ownerState:r,skipResolvingSlotProps:s=!1}=t,o=Tn(t,e2),a=s?{}:JP(i,r),{props:l,internalRef:u}=QP(ce({},o,{externalSlotProps:a})),c=_p(u,a==null?void 0:a.ref,(e=t.additionalProps)==null?void 0:e.ref);return ZP(n,ce({},l,{ref:c}),r)}const t2=Te.createContext(void 0);function n2(t){const{theme:e,name:n,props:i}=t;if(!e||!e.components||!e.components[n])return i;const r=e.components[n];return r.defaultProps?Sc(r.defaultProps,i):!r.styleOverrides&&!r.variants?Sc(r,i):i}function i2({props:t,name:e}){const n=Te.useContext(t2);return n2({props:t,name:e,theme:{components:n}})}function qm(t){return i2(t)}var fl={},fS={exports:{}};(function(t){function e(n){return n&&n.__esModule?n:{default:n}}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports})(fS);var dS=fS.exports,Dd={exports:{}},Rv;function r2(){return Rv||(Rv=1,function(t){function e(){return t.exports=e=Object.assign?Object.assign.bind():function(n){for(var i=1;i<arguments.length;i++){var r=arguments[i];for(var s in r)({}).hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},t.exports.__esModule=!0,t.exports.default=t.exports,e.apply(null,arguments)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Dd)),Dd.exports}var Ud={exports:{}},Pv;function s2(){return Pv||(Pv=1,function(t){function e(n,i){if(n==null)return{};var r={};for(var s in n)if({}.hasOwnProperty.call(n,s)){if(i.includes(s))continue;r[s]=n[s]}return r}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports}(Ud)),Ud.exports}function hS(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var o2=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,a2=hS(function(t){return o2.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),l2=!1;function u2(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function c2(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var f2=function(){function t(n){var i=this;this._insertTag=function(r){var s;i.tags.length===0?i.insertionPoint?s=i.insertionPoint.nextSibling:i.prepend?s=i.container.firstChild:s=i.before:s=i.tags[i.tags.length-1].nextSibling,i.container.insertBefore(r,s),i.tags.push(r)},this.isSpeedy=n.speedy===void 0?!l2:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(i){i.forEach(this._insertTag)},e.insert=function(i){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(c2(this));var r=this.tags[this.tags.length-1];if(this.isSpeedy){var s=u2(r);try{s.insertRule(i,s.cssRules.length)}catch{}}else r.appendChild(document.createTextNode(i));this.ctr++},e.flush=function(){this.tags.forEach(function(i){var r;return(r=i.parentNode)==null?void 0:r.removeChild(i)}),this.tags=[],this.ctr=0},t}(),sn="-ms-",Mc="-moz-",et="-webkit-",pS="comm",Km="rule",Zm="decl",d2="@import",mS="@keyframes",h2="@layer",p2=Math.abs,of=String.fromCharCode,m2=Object.assign;function g2(t,e){return Zt(t,0)^45?(((e<<2^Zt(t,0))<<2^Zt(t,1))<<2^Zt(t,2))<<2^Zt(t,3):0}function gS(t){return t.trim()}function v2(t,e){return(t=e.exec(t))?t[0]:t}function tt(t,e,n){return t.replace(e,n)}function xp(t,e){return t.indexOf(e)}function Zt(t,e){return t.charCodeAt(e)|0}function Qa(t,e,n){return t.slice(e,n)}function bi(t){return t.length}function Qm(t){return t.length}function au(t,e){return e.push(t),t}function _2(t,e){return t.map(e).join("")}var af=1,Fo=1,vS=0,An=0,Ut=0,Wo="";function lf(t,e,n,i,r,s,o){return{value:t,root:e,parent:n,type:i,props:r,children:s,line:af,column:Fo,length:o,return:""}}function la(t,e){return m2(lf("",null,null,"",null,null,0),t,{length:-t.length},e)}function y2(){return Ut}function x2(){return Ut=An>0?Zt(Wo,--An):0,Fo--,Ut===10&&(Fo=1,af--),Ut}function zn(){return Ut=An<vS?Zt(Wo,An++):0,Fo++,Ut===10&&(Fo=1,af++),Ut}function Ui(){return Zt(Wo,An)}function Ou(){return An}function dl(t,e){return Qa(Wo,t,e)}function Ja(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function _S(t){return af=Fo=1,vS=bi(Wo=t),An=0,[]}function yS(t){return Wo="",t}function Fu(t){return gS(dl(An-1,Sp(t===91?t+2:t===40?t+1:t)))}function S2(t){for(;(Ut=Ui())&&Ut<33;)zn();return Ja(t)>2||Ja(Ut)>3?"":" "}function M2(t,e){for(;--e&&zn()&&!(Ut<48||Ut>102||Ut>57&&Ut<65||Ut>70&&Ut<97););return dl(t,Ou()+(e<6&&Ui()==32&&zn()==32))}function Sp(t){for(;zn();)switch(Ut){case t:return An;case 34:case 39:t!==34&&t!==39&&Sp(Ut);break;case 40:t===41&&Sp(t);break;case 92:zn();break}return An}function E2(t,e){for(;zn()&&t+Ut!==57;)if(t+Ut===84&&Ui()===47)break;return"/*"+dl(e,An-1)+"*"+of(t===47?t:zn())}function w2(t){for(;!Ja(Ui());)zn();return dl(t,An)}function T2(t){return yS(ku("",null,null,null,[""],t=_S(t),0,[0],t))}function ku(t,e,n,i,r,s,o,a,l){for(var u=0,c=0,f=o,d=0,p=0,v=0,g=1,m=1,h=1,_=0,y="",x=r,b=s,A=i,E=y;m;)switch(v=_,_=zn()){case 40:if(v!=108&&Zt(E,f-1)==58){xp(E+=tt(Fu(_),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:E+=Fu(_);break;case 9:case 10:case 13:case 32:E+=S2(v);break;case 92:E+=M2(Ou()-1,7);continue;case 47:switch(Ui()){case 42:case 47:au(A2(E2(zn(),Ou()),e,n),l);break;default:E+="/"}break;case 123*g:a[u++]=bi(E)*h;case 125*g:case 59:case 0:switch(_){case 0:case 125:m=0;case 59+c:h==-1&&(E=tt(E,/\f/g,"")),p>0&&bi(E)-f&&au(p>32?Iv(E+";",i,n,f-1):Iv(tt(E," ","")+";",i,n,f-2),l);break;case 59:E+=";";default:if(au(A=Lv(E,e,n,u,c,r,a,y,x=[],b=[],f),s),_===123)if(c===0)ku(E,e,A,A,x,s,f,a,b);else switch(d===99&&Zt(E,3)===110?100:d){case 100:case 108:case 109:case 115:ku(t,A,A,i&&au(Lv(t,A,A,0,0,r,a,y,r,x=[],f),b),r,b,f,a,i?x:b);break;default:ku(E,A,A,A,[""],b,0,a,b)}}u=c=p=0,g=h=1,y=E="",f=o;break;case 58:f=1+bi(E),p=v;default:if(g<1){if(_==123)--g;else if(_==125&&g++==0&&x2()==125)continue}switch(E+=of(_),_*g){case 38:h=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(bi(E)-1)*h,h=1;break;case 64:Ui()===45&&(E+=Fu(zn())),d=Ui(),c=f=bi(y=E+=w2(Ou())),_++;break;case 45:v===45&&bi(E)==2&&(g=0)}}return s}function Lv(t,e,n,i,r,s,o,a,l,u,c){for(var f=r-1,d=r===0?s:[""],p=Qm(d),v=0,g=0,m=0;v<i;++v)for(var h=0,_=Qa(t,f+1,f=p2(g=o[v])),y=t;h<p;++h)(y=gS(g>0?d[h]+" "+_:tt(_,/&\f/g,d[h])))&&(l[m++]=y);return lf(t,e,n,r===0?Km:a,l,u,c)}function A2(t,e,n){return lf(t,e,n,pS,of(y2()),Qa(t,2,-2),0)}function Iv(t,e,n,i){return lf(t,e,n,Zm,Qa(t,0,i),Qa(t,i+1,-1),i)}function Mo(t,e){for(var n="",i=Qm(t),r=0;r<i;r++)n+=e(t[r],r,t,e)||"";return n}function b2(t,e,n,i){switch(t.type){case h2:if(t.children.length)break;case d2:case Zm:return t.return=t.return||t.value;case pS:return"";case mS:return t.return=t.value+"{"+Mo(t.children,i)+"}";case Km:t.value=t.props.join(",")}return bi(n=Mo(t.children,i))?t.return=t.value+"{"+n+"}":""}function C2(t){var e=Qm(t);return function(n,i,r,s){for(var o="",a=0;a<e;a++)o+=t[a](n,i,r,s)||"";return o}}function R2(t){return function(e){e.root||(e=e.return)&&t(e)}}var P2=function(e,n,i){for(var r=0,s=0;r=s,s=Ui(),r===38&&s===12&&(n[i]=1),!Ja(s);)zn();return dl(e,An)},L2=function(e,n){var i=-1,r=44;do switch(Ja(r)){case 0:r===38&&Ui()===12&&(n[i]=1),e[i]+=P2(An-1,n,i);break;case 2:e[i]+=Fu(r);break;case 4:if(r===44){e[++i]=Ui()===58?"&\f":"",n[i]=e[i].length;break}default:e[i]+=of(r)}while(r=zn());return e},I2=function(e,n){return yS(L2(_S(e),n))},Nv=new WeakMap,N2=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,i=e.parent,r=e.column===i.column&&e.line===i.line;i.type!=="rule";)if(i=i.parent,!i)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!Nv.get(i))&&!r){Nv.set(e,!0);for(var s=[],o=I2(n,s),a=i.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},D2=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function xS(t,e){switch(g2(t,e)){case 5103:return et+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return et+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return et+t+Mc+t+sn+t+t;case 6828:case 4268:return et+t+sn+t+t;case 6165:return et+t+sn+"flex-"+t+t;case 5187:return et+t+tt(t,/(\w+).+(:[^]+)/,et+"box-$1$2"+sn+"flex-$1$2")+t;case 5443:return et+t+sn+"flex-item-"+tt(t,/flex-|-self/,"")+t;case 4675:return et+t+sn+"flex-line-pack"+tt(t,/align-content|flex-|-self/,"")+t;case 5548:return et+t+sn+tt(t,"shrink","negative")+t;case 5292:return et+t+sn+tt(t,"basis","preferred-size")+t;case 6060:return et+"box-"+tt(t,"-grow","")+et+t+sn+tt(t,"grow","positive")+t;case 4554:return et+tt(t,/([^-])(transform)/g,"$1"+et+"$2")+t;case 6187:return tt(tt(tt(t,/(zoom-|grab)/,et+"$1"),/(image-set)/,et+"$1"),t,"")+t;case 5495:case 3959:return tt(t,/(image-set\([^]*)/,et+"$1$`$1");case 4968:return tt(tt(t,/(.+:)(flex-)?(.*)/,et+"box-pack:$3"+sn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+et+t+t;case 4095:case 3583:case 4068:case 2532:return tt(t,/(.+)-inline(.+)/,et+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(bi(t)-1-e>6)switch(Zt(t,e+1)){case 109:if(Zt(t,e+4)!==45)break;case 102:return tt(t,/(.+:)(.+)-([^]+)/,"$1"+et+"$2-$3$1"+Mc+(Zt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~xp(t,"stretch")?xS(tt(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Zt(t,e+1)!==115)break;case 6444:switch(Zt(t,bi(t)-3-(~xp(t,"!important")&&10))){case 107:return tt(t,":",":"+et)+t;case 101:return tt(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+et+(Zt(t,14)===45?"inline-":"")+"box$3$1"+et+"$2$3$1"+sn+"$2box$3")+t}break;case 5936:switch(Zt(t,e+11)){case 114:return et+t+sn+tt(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return et+t+sn+tt(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return et+t+sn+tt(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return et+t+sn+t+t}return t}var U2=function(e,n,i,r){if(e.length>-1&&!e.return)switch(e.type){case Zm:e.return=xS(e.value,e.length);break;case mS:return Mo([la(e,{value:tt(e.value,"@","@"+et)})],r);case Km:if(e.length)return _2(e.props,function(s){switch(v2(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return Mo([la(e,{props:[tt(s,/:(read-\w+)/,":"+Mc+"$1")]})],r);case"::placeholder":return Mo([la(e,{props:[tt(s,/:(plac\w+)/,":"+et+"input-$1")]}),la(e,{props:[tt(s,/:(plac\w+)/,":"+Mc+"$1")]}),la(e,{props:[tt(s,/:(plac\w+)/,sn+"input-$1")]})],r)}return""})}},O2=[U2],SS=function(e){var n=e.key;if(n==="css"){var i=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(i,function(g){var m=g.getAttribute("data-emotion");m.indexOf(" ")!==-1&&(document.head.appendChild(g),g.setAttribute("data-s",""))})}var r=e.stylisPlugins||O2,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(g){for(var m=g.getAttribute("data-emotion").split(" "),h=1;h<m.length;h++)s[m[h]]=!0;a.push(g)});var l,u=[N2,D2];{var c,f=[b2,R2(function(g){c.insert(g)})],d=C2(u.concat(r,f)),p=function(m){return Mo(T2(m),d)};l=function(m,h,_,y){c=_,p(m?m+"{"+h.styles+"}":h.styles),y&&(v.inserted[h.name]=!0)}}var v={key:n,sheet:new f2({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},MS={exports:{}},ft={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yt=typeof Symbol=="function"&&Symbol.for,Jm=Yt?Symbol.for("react.element"):60103,eg=Yt?Symbol.for("react.portal"):60106,uf=Yt?Symbol.for("react.fragment"):60107,cf=Yt?Symbol.for("react.strict_mode"):60108,ff=Yt?Symbol.for("react.profiler"):60114,df=Yt?Symbol.for("react.provider"):60109,hf=Yt?Symbol.for("react.context"):60110,tg=Yt?Symbol.for("react.async_mode"):60111,pf=Yt?Symbol.for("react.concurrent_mode"):60111,mf=Yt?Symbol.for("react.forward_ref"):60112,gf=Yt?Symbol.for("react.suspense"):60113,F2=Yt?Symbol.for("react.suspense_list"):60120,vf=Yt?Symbol.for("react.memo"):60115,_f=Yt?Symbol.for("react.lazy"):60116,k2=Yt?Symbol.for("react.block"):60121,z2=Yt?Symbol.for("react.fundamental"):60117,B2=Yt?Symbol.for("react.responder"):60118,H2=Yt?Symbol.for("react.scope"):60119;function Gn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Jm:switch(t=t.type,t){case tg:case pf:case uf:case ff:case cf:case gf:return t;default:switch(t=t&&t.$$typeof,t){case hf:case mf:case _f:case vf:case df:return t;default:return e}}case eg:return e}}}function ES(t){return Gn(t)===pf}ft.AsyncMode=tg;ft.ConcurrentMode=pf;ft.ContextConsumer=hf;ft.ContextProvider=df;ft.Element=Jm;ft.ForwardRef=mf;ft.Fragment=uf;ft.Lazy=_f;ft.Memo=vf;ft.Portal=eg;ft.Profiler=ff;ft.StrictMode=cf;ft.Suspense=gf;ft.isAsyncMode=function(t){return ES(t)||Gn(t)===tg};ft.isConcurrentMode=ES;ft.isContextConsumer=function(t){return Gn(t)===hf};ft.isContextProvider=function(t){return Gn(t)===df};ft.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jm};ft.isForwardRef=function(t){return Gn(t)===mf};ft.isFragment=function(t){return Gn(t)===uf};ft.isLazy=function(t){return Gn(t)===_f};ft.isMemo=function(t){return Gn(t)===vf};ft.isPortal=function(t){return Gn(t)===eg};ft.isProfiler=function(t){return Gn(t)===ff};ft.isStrictMode=function(t){return Gn(t)===cf};ft.isSuspense=function(t){return Gn(t)===gf};ft.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===uf||t===pf||t===ff||t===cf||t===gf||t===F2||typeof t=="object"&&t!==null&&(t.$$typeof===_f||t.$$typeof===vf||t.$$typeof===df||t.$$typeof===hf||t.$$typeof===mf||t.$$typeof===z2||t.$$typeof===B2||t.$$typeof===H2||t.$$typeof===k2)};ft.typeOf=Gn;MS.exports=ft;var V2=MS.exports,wS=V2,G2={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},W2={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},TS={};TS[wS.ForwardRef]=G2;TS[wS.Memo]=W2;var $2=!0;function X2(t,e,n){var i="";return n.split(" ").forEach(function(r){t[r]!==void 0?e.push(t[r]+";"):i+=r+" "}),i}var AS=function(e,n,i){var r=e.key+"-"+n.name;(i===!1||$2===!1)&&e.registered[r]===void 0&&(e.registered[r]=n.styles)},bS=function(e,n,i){AS(e,n,i);var r=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+r:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function j2(t){for(var e=0,n,i=0,r=t.length;r>=4;++i,r-=4)n=t.charCodeAt(i)&255|(t.charCodeAt(++i)&255)<<8|(t.charCodeAt(++i)&255)<<16|(t.charCodeAt(++i)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(r){case 3:e^=(t.charCodeAt(i+2)&255)<<16;case 2:e^=(t.charCodeAt(i+1)&255)<<8;case 1:e^=t.charCodeAt(i)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Y2={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},q2=!1,K2=/[A-Z]|^ms/g,Z2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,CS=function(e){return e.charCodeAt(1)===45},Dv=function(e){return e!=null&&typeof e!="boolean"},Od=hS(function(t){return CS(t)?t:t.replace(K2,"-$&").toLowerCase()}),Uv=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(Z2,function(i,r,s){return Ci={name:r,styles:s,next:Ci},r})}return Y2[e]!==1&&!CS(e)&&typeof n=="number"&&n!==0?n+"px":n},Q2="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function el(t,e,n){if(n==null)return"";var i=n;if(i.__emotion_styles!==void 0)return i;switch(typeof n){case"boolean":return"";case"object":{var r=n;if(r.anim===1)return Ci={name:r.name,styles:r.styles,next:Ci},r.name;var s=n;if(s.styles!==void 0){var o=s.next;if(o!==void 0)for(;o!==void 0;)Ci={name:o.name,styles:o.styles,next:Ci},o=o.next;var a=s.styles+";";return a}return J2(t,e,n)}case"function":{if(t!==void 0){var l=Ci,u=n(t);return Ci=l,el(t,e,u)}break}}var c=n;if(e==null)return c;var f=e[c];return f!==void 0?f:c}function J2(t,e,n){var i="";if(Array.isArray(n))for(var r=0;r<n.length;r++)i+=el(t,e,n[r])+";";else for(var s in n){var o=n[s];if(typeof o!="object"){var a=o;e!=null&&e[a]!==void 0?i+=s+"{"+e[a]+"}":Dv(a)&&(i+=Od(s)+":"+Uv(s,a)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&q2)throw new Error(Q2);if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var l=0;l<o.length;l++)Dv(o[l])&&(i+=Od(s)+":"+Uv(s,o[l])+";");else{var u=el(t,e,o);switch(s){case"animation":case"animationName":{i+=Od(s)+":"+u+";";break}default:i+=s+"{"+u+"}"}}}}return i}var Ov=/label:\s*([^\s;\n{]+)\s*(;|$)/g,Ci;function ng(t,e,n){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var i=!0,r="";Ci=void 0;var s=t[0];if(s==null||s.raw===void 0)i=!1,r+=el(n,e,s);else{var o=s;r+=o[0]}for(var a=1;a<t.length;a++)if(r+=el(n,e,t[a]),i){var l=s;r+=l[a]}Ov.lastIndex=0;for(var u="",c;(c=Ov.exec(r))!==null;)u+="-"+c[1];var f=j2(r)+u;return{name:f,styles:r,next:Ci}}var eL=function(e){return e()},RS=yg.useInsertionEffect?yg.useInsertionEffect:!1,tL=RS||eL,Fv=RS||Te.useLayoutEffect,PS=Te.createContext(typeof HTMLElement<"u"?SS({key:"css"}):null),nL=PS.Provider,LS=function(e){return Te.forwardRef(function(n,i){var r=Te.useContext(PS);return e(n,r,i)})},yf=Te.createContext({}),iL=LS(function(t,e){var n=t.styles,i=ng([n],void 0,Te.useContext(yf)),r=Te.useRef();return Fv(function(){var s=e.key+"-global",o=new e.sheet.constructor({key:s,nonce:e.sheet.nonce,container:e.sheet.container,speedy:e.sheet.isSpeedy}),a=!1,l=document.querySelector('style[data-emotion="'+s+" "+i.name+'"]');return e.sheet.tags.length&&(o.before=e.sheet.tags[0]),l!==null&&(a=!0,l.setAttribute("data-emotion",s),o.hydrate([l])),r.current=[o,a],function(){o.flush()}},[e]),Fv(function(){var s=r.current,o=s[0],a=s[1];if(a){s[1]=!1;return}if(i.next!==void 0&&bS(e,i.next,!0),o.tags.length){var l=o.tags[o.tags.length-1].nextElementSibling;o.before=l,o.flush()}e.insert("",i,o,!1)},[e,i.name]),null});function IS(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return ng(e)}var rL=function(){var e=IS.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},sL=a2,oL=function(e){return e!=="theme"},kv=function(e){return typeof e=="string"&&e.charCodeAt(0)>96?sL:oL},zv=function(e,n,i){var r;if(n){var s=n.shouldForwardProp;r=e.__emotion_forwardProp&&s?function(o){return e.__emotion_forwardProp(o)&&s(o)}:s}return typeof r!="function"&&i&&(r=e.__emotion_forwardProp),r},aL=!1,lL=function(e){var n=e.cache,i=e.serialized,r=e.isStringTag;return AS(n,i,r),tL(function(){return bS(n,i,r)}),null},uL=function t(e,n){var i=e.__emotion_real===e,r=i&&e.__emotion_base||e,s,o;n!==void 0&&(s=n.label,o=n.target);var a=zv(e,n,i),l=a||kv(r),u=!l("as");return function(){var c=arguments,f=i&&e.__emotion_styles!==void 0?e.__emotion_styles.slice(0):[];if(s!==void 0&&f.push("label:"+s+";"),c[0]==null||c[0].raw===void 0)f.push.apply(f,c);else{f.push(c[0][0]);for(var d=c.length,p=1;p<d;p++)f.push(c[p],c[0][p])}var v=LS(function(g,m,h){var _=u&&g.as||r,y="",x=[],b=g;if(g.theme==null){b={};for(var A in g)b[A]=g[A];b.theme=Te.useContext(yf)}typeof g.className=="string"?y=X2(m.registered,x,g.className):g.className!=null&&(y=g.className+" ");var E=ng(f.concat(x),m.registered,b);y+=m.key+"-"+E.name,o!==void 0&&(y+=" "+o);var P=u&&a===void 0?kv(_):l,T={};for(var S in g)u&&S==="as"||P(S)&&(T[S]=g[S]);return T.className=y,h&&(T.ref=h),Te.createElement(Te.Fragment,null,Te.createElement(lL,{cache:m,serialized:E,isStringTag:typeof _=="string"}),Te.createElement(_,T))});return v.displayName=s!==void 0?s:"Styled("+(typeof r=="string"?r:r.displayName||r.name||"Component")+")",v.defaultProps=e.defaultProps,v.__emotion_real=v,v.__emotion_base=r,v.__emotion_styles=f,v.__emotion_forwardProp=a,Object.defineProperty(v,"toString",{value:function(){return o===void 0&&aL?"NO_COMPONENT_SELECTOR":"."+o}}),v.withComponent=function(g,m){return t(g,ce({},n,m,{shouldForwardProp:zv(v,m,!0)})).apply(void 0,f)},v}},cL=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],Mp=uL.bind();cL.forEach(function(t){Mp[t]=Mp(t)});let Ep;typeof document=="object"&&(Ep=SS({key:"css",prepend:!0}));function fL(t){const{injectFirst:e,children:n}=t;return e&&Ep?Fe.jsx(nL,{value:Ep,children:n}):n}function dL(t){return t==null||Object.keys(t).length===0}function hL(t){const{styles:e,defaultTheme:n={}}=t,i=typeof e=="function"?r=>e(dL(r)?n:r):e;return Fe.jsx(iL,{styles:i})}function NS(t,e){return Mp(t,e)}const DS=(t,e)=>{Array.isArray(t.__emotion_styles)&&(t.__emotion_styles=e(t.__emotion_styles))},pL=Object.freeze(Object.defineProperty({__proto__:null,GlobalStyles:hL,StyledEngineProvider:fL,ThemeContext:yf,css:IS,default:NS,internal_processStyles:DS,keyframes:rL},Symbol.toStringTag,{value:"Module"})),mL=zr(pL),gL=zr(CP),vL=zr(UP),_L=zr(DP),yL=["values","unit","step"],xL=t=>{const e=Object.keys(t).map(n=>({key:n,val:t[n]}))||[];return e.sort((n,i)=>n.val-i.val),e.reduce((n,i)=>ce({},n,{[i.key]:i.val}),{})};function US(t){const{values:e={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:n="px",step:i=5}=t,r=Tn(t,yL),s=xL(e),o=Object.keys(s);function a(d){return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n})`}function l(d){return`@media (max-width:${(typeof e[d]=="number"?e[d]:d)-i/100}${n})`}function u(d,p){const v=o.indexOf(p);return`@media (min-width:${typeof e[d]=="number"?e[d]:d}${n}) and (max-width:${(v!==-1&&typeof e[o[v]]=="number"?e[o[v]]:p)-i/100}${n})`}function c(d){return o.indexOf(d)+1<o.length?u(d,o[o.indexOf(d)+1]):a(d)}function f(d){const p=o.indexOf(d);return p===0?a(o[1]):p===o.length-1?l(o[p]):u(d,o[o.indexOf(d)+1]).replace("@media","@media not all and")}return ce({keys:o,values:s,up:a,down:l,between:u,only:c,not:f,unit:n},r)}const SL={borderRadius:4};function Pa(t,e){return e?ri(t,e,{clone:!1}):t}const ig={xs:0,sm:600,md:900,lg:1200,xl:1536},Bv={keys:["xs","sm","md","lg","xl"],up:t=>`@media (min-width:${ig[t]}px)`};function Ei(t,e,n){const i=t.theme||{};if(Array.isArray(e)){const s=i.breakpoints||Bv;return e.reduce((o,a,l)=>(o[s.up(s.keys[l])]=n(e[l]),o),{})}if(typeof e=="object"){const s=i.breakpoints||Bv;return Object.keys(e).reduce((o,a)=>{if(Object.keys(s.values||ig).indexOf(a)!==-1){const l=s.up(a);o[l]=n(e[a],a)}else{const l=a;o[l]=e[l]}return o},{})}return n(e)}function OS(t={}){var e;return((e=t.keys)==null?void 0:e.reduce((i,r)=>{const s=t.up(r);return i[s]={},i},{}))||{}}function FS(t,e){return t.reduce((n,i)=>{const r=n[i];return(!r||Object.keys(r).length===0)&&delete n[i],n},e)}function ML(t,...e){const n=OS(t),i=[n,...e].reduce((r,s)=>ri(r,s),{});return FS(Object.keys(n),i)}function EL(t,e){if(typeof t!="object")return{};const n={},i=Object.keys(e);return Array.isArray(t)?i.forEach((r,s)=>{s<t.length&&(n[r]=!0)}):i.forEach(r=>{t[r]!=null&&(n[r]=!0)}),n}function Fd({values:t,breakpoints:e,base:n}){const i=n||EL(t,e),r=Object.keys(i);if(r.length===0)return t;let s;return r.reduce((o,a,l)=>(Array.isArray(t)?(o[a]=t[l]!=null?t[l]:t[s],s=l):typeof t=="object"?(o[a]=t[a]!=null?t[a]:t[s],s=a):o[a]=t,o),{})}function xf(t,e,n=!0){if(!e||typeof e!="string")return null;if(t&&t.vars&&n){const i=`vars.${e}`.split(".").reduce((r,s)=>r&&r[s]?r[s]:null,t);if(i!=null)return i}return e.split(".").reduce((i,r)=>i&&i[r]!=null?i[r]:null,t)}function Ec(t,e,n,i=n){let r;return typeof t=="function"?r=t(n):Array.isArray(t)?r=t[n]||i:r=xf(t,n)||i,e&&(r=e(r,i,t)),r}function Lt(t){const{prop:e,cssProperty:n=t.prop,themeKey:i,transform:r}=t,s=o=>{if(o[e]==null)return null;const a=o[e],l=o.theme,u=xf(l,i)||{};return Ei(o,a,f=>{let d=Ec(u,r,f);return f===d&&typeof f=="string"&&(d=Ec(u,r,`${e}${f==="default"?"":hn(f)}`,f)),n===!1?d:{[n]:d}})};return s.propTypes={},s.filterProps=[e],s}function wL(t){const e={};return n=>(e[n]===void 0&&(e[n]=t(n)),e[n])}const TL={m:"margin",p:"padding"},AL={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},Hv={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},bL=wL(t=>{if(t.length>2)if(Hv[t])t=Hv[t];else return[t];const[e,n]=t.split(""),i=TL[e],r=AL[n]||"";return Array.isArray(r)?r.map(s=>i+s):[i+r]}),rg=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],sg=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"];[...rg,...sg];function hl(t,e,n,i){var r;const s=(r=xf(t,e,!1))!=null?r:n;return typeof s=="number"?o=>typeof o=="string"?o:s*o:Array.isArray(s)?o=>typeof o=="string"?o:s[o]:typeof s=="function"?s:()=>{}}function og(t){return hl(t,"spacing",8)}function vs(t,e){if(typeof e=="string"||e==null)return e;const n=Math.abs(e),i=t(n);return e>=0?i:typeof i=="number"?-i:`-${i}`}function CL(t,e){return n=>t.reduce((i,r)=>(i[r]=vs(e,n),i),{})}function RL(t,e,n,i){if(e.indexOf(n)===-1)return null;const r=bL(n),s=CL(r,i),o=t[n];return Ei(t,o,s)}function kS(t,e){const n=og(t.theme);return Object.keys(t).map(i=>RL(t,e,i,n)).reduce(Pa,{})}function bt(t){return kS(t,rg)}bt.propTypes={};bt.filterProps=rg;function Ct(t){return kS(t,sg)}Ct.propTypes={};Ct.filterProps=sg;function PL(t=8){if(t.mui)return t;const e=og({spacing:t}),n=(...i)=>(i.length===0?[1]:i).map(s=>{const o=e(s);return typeof o=="number"?`${o}px`:o}).join(" ");return n.mui=!0,n}function Sf(...t){const e=t.reduce((i,r)=>(r.filterProps.forEach(s=>{i[s]=r}),i),{}),n=i=>Object.keys(i).reduce((r,s)=>e[s]?Pa(r,e[s](i)):r,{});return n.propTypes={},n.filterProps=t.reduce((i,r)=>i.concat(r.filterProps),[]),n}function Qn(t){return typeof t!="number"?t:`${t}px solid`}function ui(t,e){return Lt({prop:t,themeKey:"borders",transform:e})}const LL=ui("border",Qn),IL=ui("borderTop",Qn),NL=ui("borderRight",Qn),DL=ui("borderBottom",Qn),UL=ui("borderLeft",Qn),OL=ui("borderColor"),FL=ui("borderTopColor"),kL=ui("borderRightColor"),zL=ui("borderBottomColor"),BL=ui("borderLeftColor"),HL=ui("outline",Qn),VL=ui("outlineColor"),Mf=t=>{if(t.borderRadius!==void 0&&t.borderRadius!==null){const e=hl(t.theme,"shape.borderRadius",4),n=i=>({borderRadius:vs(e,i)});return Ei(t,t.borderRadius,n)}return null};Mf.propTypes={};Mf.filterProps=["borderRadius"];Sf(LL,IL,NL,DL,UL,OL,FL,kL,zL,BL,Mf,HL,VL);const Ef=t=>{if(t.gap!==void 0&&t.gap!==null){const e=hl(t.theme,"spacing",8),n=i=>({gap:vs(e,i)});return Ei(t,t.gap,n)}return null};Ef.propTypes={};Ef.filterProps=["gap"];const wf=t=>{if(t.columnGap!==void 0&&t.columnGap!==null){const e=hl(t.theme,"spacing",8),n=i=>({columnGap:vs(e,i)});return Ei(t,t.columnGap,n)}return null};wf.propTypes={};wf.filterProps=["columnGap"];const Tf=t=>{if(t.rowGap!==void 0&&t.rowGap!==null){const e=hl(t.theme,"spacing",8),n=i=>({rowGap:vs(e,i)});return Ei(t,t.rowGap,n)}return null};Tf.propTypes={};Tf.filterProps=["rowGap"];const GL=Lt({prop:"gridColumn"}),WL=Lt({prop:"gridRow"}),$L=Lt({prop:"gridAutoFlow"}),XL=Lt({prop:"gridAutoColumns"}),jL=Lt({prop:"gridAutoRows"}),YL=Lt({prop:"gridTemplateColumns"}),qL=Lt({prop:"gridTemplateRows"}),KL=Lt({prop:"gridTemplateAreas"}),ZL=Lt({prop:"gridArea"});Sf(Ef,wf,Tf,GL,WL,$L,XL,jL,YL,qL,KL,ZL);function Eo(t,e){return e==="grey"?e:t}const QL=Lt({prop:"color",themeKey:"palette",transform:Eo}),JL=Lt({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette",transform:Eo}),eI=Lt({prop:"backgroundColor",themeKey:"palette",transform:Eo});Sf(QL,JL,eI);function Dn(t){return t<=1&&t!==0?`${t*100}%`:t}const tI=Lt({prop:"width",transform:Dn}),ag=t=>{if(t.maxWidth!==void 0&&t.maxWidth!==null){const e=n=>{var i,r;const s=((i=t.theme)==null||(i=i.breakpoints)==null||(i=i.values)==null?void 0:i[n])||ig[n];return s?((r=t.theme)==null||(r=r.breakpoints)==null?void 0:r.unit)!=="px"?{maxWidth:`${s}${t.theme.breakpoints.unit}`}:{maxWidth:s}:{maxWidth:Dn(n)}};return Ei(t,t.maxWidth,e)}return null};ag.filterProps=["maxWidth"];const nI=Lt({prop:"minWidth",transform:Dn}),iI=Lt({prop:"height",transform:Dn}),rI=Lt({prop:"maxHeight",transform:Dn}),sI=Lt({prop:"minHeight",transform:Dn});Lt({prop:"size",cssProperty:"width",transform:Dn});Lt({prop:"size",cssProperty:"height",transform:Dn});const oI=Lt({prop:"boxSizing"});Sf(tI,ag,nI,iI,rI,sI,oI);const pl={border:{themeKey:"borders",transform:Qn},borderTop:{themeKey:"borders",transform:Qn},borderRight:{themeKey:"borders",transform:Qn},borderBottom:{themeKey:"borders",transform:Qn},borderLeft:{themeKey:"borders",transform:Qn},borderColor:{themeKey:"palette"},borderTopColor:{themeKey:"palette"},borderRightColor:{themeKey:"palette"},borderBottomColor:{themeKey:"palette"},borderLeftColor:{themeKey:"palette"},outline:{themeKey:"borders",transform:Qn},outlineColor:{themeKey:"palette"},borderRadius:{themeKey:"shape.borderRadius",style:Mf},color:{themeKey:"palette",transform:Eo},bgcolor:{themeKey:"palette",cssProperty:"backgroundColor",transform:Eo},backgroundColor:{themeKey:"palette",transform:Eo},p:{style:Ct},pt:{style:Ct},pr:{style:Ct},pb:{style:Ct},pl:{style:Ct},px:{style:Ct},py:{style:Ct},padding:{style:Ct},paddingTop:{style:Ct},paddingRight:{style:Ct},paddingBottom:{style:Ct},paddingLeft:{style:Ct},paddingX:{style:Ct},paddingY:{style:Ct},paddingInline:{style:Ct},paddingInlineStart:{style:Ct},paddingInlineEnd:{style:Ct},paddingBlock:{style:Ct},paddingBlockStart:{style:Ct},paddingBlockEnd:{style:Ct},m:{style:bt},mt:{style:bt},mr:{style:bt},mb:{style:bt},ml:{style:bt},mx:{style:bt},my:{style:bt},margin:{style:bt},marginTop:{style:bt},marginRight:{style:bt},marginBottom:{style:bt},marginLeft:{style:bt},marginX:{style:bt},marginY:{style:bt},marginInline:{style:bt},marginInlineStart:{style:bt},marginInlineEnd:{style:bt},marginBlock:{style:bt},marginBlockStart:{style:bt},marginBlockEnd:{style:bt},displayPrint:{cssProperty:!1,transform:t=>({"@media print":{display:t}})},display:{},overflow:{},textOverflow:{},visibility:{},whiteSpace:{},flexBasis:{},flexDirection:{},flexWrap:{},justifyContent:{},alignItems:{},alignContent:{},order:{},flex:{},flexGrow:{},flexShrink:{},alignSelf:{},justifyItems:{},justifySelf:{},gap:{style:Ef},rowGap:{style:Tf},columnGap:{style:wf},gridColumn:{},gridRow:{},gridAutoFlow:{},gridAutoColumns:{},gridAutoRows:{},gridTemplateColumns:{},gridTemplateRows:{},gridTemplateAreas:{},gridArea:{},position:{},zIndex:{themeKey:"zIndex"},top:{},right:{},bottom:{},left:{},boxShadow:{themeKey:"shadows"},width:{transform:Dn},maxWidth:{style:ag},minWidth:{transform:Dn},height:{transform:Dn},maxHeight:{transform:Dn},minHeight:{transform:Dn},boxSizing:{},fontFamily:{themeKey:"typography"},fontSize:{themeKey:"typography"},fontStyle:{themeKey:"typography"},fontWeight:{themeKey:"typography"},letterSpacing:{},textTransform:{},lineHeight:{},textAlign:{},typography:{cssProperty:!1,themeKey:"typography"}};function aI(...t){const e=t.reduce((i,r)=>i.concat(Object.keys(r)),[]),n=new Set(e);return t.every(i=>n.size===Object.keys(i).length)}function lI(t,e){return typeof t=="function"?t(e):t}function zS(){function t(n,i,r,s){const o={[n]:i,theme:r},a=s[n];if(!a)return{[n]:i};const{cssProperty:l=n,themeKey:u,transform:c,style:f}=a;if(i==null)return null;if(u==="typography"&&i==="inherit")return{[n]:i};const d=xf(r,u)||{};return f?f(o):Ei(o,i,v=>{let g=Ec(d,c,v);return v===g&&typeof v=="string"&&(g=Ec(d,c,`${n}${v==="default"?"":hn(v)}`,v)),l===!1?g:{[l]:g}})}function e(n){var i;const{sx:r,theme:s={}}=n||{};if(!r)return null;const o=(i=s.unstable_sxConfig)!=null?i:pl;function a(l){let u=l;if(typeof l=="function")u=l(s);else if(typeof l!="object")return l;if(!u)return null;const c=OS(s.breakpoints),f=Object.keys(c);let d=c;return Object.keys(u).forEach(p=>{const v=lI(u[p],s);if(v!=null)if(typeof v=="object")if(o[p])d=Pa(d,t(p,v,s,o));else{const g=Ei({theme:s},v,m=>({[p]:m}));aI(g,v)?d[p]=e({sx:v,theme:s}):d=Pa(d,g)}else d=Pa(d,t(p,v,s,o))}),FS(f,d)}return Array.isArray(r)?r.map(a):a(r)}return e}const ml=zS();ml.filterProps=["sx"];function BS(t,e){const n=this;return n.vars&&typeof n.getColorSchemeSelector=="function"?{[n.getColorSchemeSelector(t).replace(/(\[[^\]]+\])/,"*:where($1)")]:e}:n.palette.mode===t?e:{}}const uI=["breakpoints","palette","spacing","shape"];function gl(t={},...e){const{breakpoints:n={},palette:i={},spacing:r,shape:s={}}=t,o=Tn(t,uI),a=US(n),l=PL(r);let u=ri({breakpoints:a,direction:"ltr",components:{},palette:ce({mode:"light"},i),spacing:l,shape:ce({},SL,s)},o);return u.applyStyles=BS,u=e.reduce((c,f)=>ri(c,f),u),u.unstable_sxConfig=ce({},pl,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(f){return ml({sx:f,theme:this})},u}const cI=Object.freeze(Object.defineProperty({__proto__:null,default:gl,private_createBreakpoints:US,unstable_applyStyles:BS},Symbol.toStringTag,{value:"Module"})),fI=zr(cI),dI=["sx"],hI=t=>{var e,n;const i={systemProps:{},otherProps:{}},r=(e=t==null||(n=t.theme)==null?void 0:n.unstable_sxConfig)!=null?e:pl;return Object.keys(t).forEach(s=>{r[s]?i.systemProps[s]=t[s]:i.otherProps[s]=t[s]}),i};function HS(t){const{sx:e}=t,n=Tn(t,dI),{systemProps:i,otherProps:r}=hI(n);let s;return Array.isArray(e)?s=[i,...e]:typeof e=="function"?s=(...o)=>{const a=e(...o);return Xi(a)?ce({},i,a):i}:s=ce({},i,e),ce({},r,{sx:s})}const pI=Object.freeze(Object.defineProperty({__proto__:null,default:ml,extendSxProp:HS,unstable_createStyleFunctionSx:zS,unstable_defaultSxConfig:pl},Symbol.toStringTag,{value:"Module"})),mI=zr(pI);var $o=dS;Object.defineProperty(fl,"__esModule",{value:!0});var gI=fl.default=RI;fl.shouldForwardProp=zu;fl.systemDefaultTheme=void 0;var jn=$o(r2()),wp=$o(s2()),Vv=EI(mL),vI=gL;$o(vL);$o(_L);var _I=$o(fI),yI=$o(mI);const xI=["ownerState"],SI=["variants"],MI=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function VS(t){if(typeof WeakMap!="function")return null;var e=new WeakMap,n=new WeakMap;return(VS=function(i){return i?n:e})(t)}function EI(t,e){if(t&&t.__esModule)return t;if(t===null||typeof t!="object"&&typeof t!="function")return{default:t};var n=VS(e);if(n&&n.has(t))return n.get(t);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in t)if(s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)){var o=r?Object.getOwnPropertyDescriptor(t,s):null;o&&(o.get||o.set)?Object.defineProperty(i,s,o):i[s]=t[s]}return i.default=t,n&&n.set(t,i),i}function wI(t){return Object.keys(t).length===0}function TI(t){return typeof t=="string"&&t.charCodeAt(0)>96}function zu(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const AI=fl.systemDefaultTheme=(0,_I.default)(),bI=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function lu({defaultTheme:t,theme:e,themeId:n}){return wI(e)?t:e[n]||e}function CI(t){return t?(e,n)=>n[t]:null}function Bu(t,e){let{ownerState:n}=e,i=(0,wp.default)(e,xI);const r=typeof t=="function"?t((0,jn.default)({ownerState:n},i)):t;if(Array.isArray(r))return r.flatMap(s=>Bu(s,(0,jn.default)({ownerState:n},i)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:s=[]}=r;let a=(0,wp.default)(r,SI);return s.forEach(l=>{let u=!0;typeof l.props=="function"?u=l.props((0,jn.default)({ownerState:n},i,n)):Object.keys(l.props).forEach(c=>{(n==null?void 0:n[c])!==l.props[c]&&i[c]!==l.props[c]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style((0,jn.default)({ownerState:n},i,n)):l.style))}),a}return r}function RI(t={}){const{themeId:e,defaultTheme:n=AI,rootShouldForwardProp:i=zu,slotShouldForwardProp:r=zu}=t,s=o=>(0,yI.default)((0,jn.default)({},o,{theme:lu((0,jn.default)({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{(0,Vv.internal_processStyles)(o,b=>b.filter(A=>!(A!=null&&A.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=CI(bI(u))}=a,p=(0,wp.default)(a,MI),v=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,g=f||!1;let m,h=zu;u==="Root"||u==="root"?h=i:u?h=r:TI(o)&&(h=void 0);const _=(0,Vv.default)(o,(0,jn.default)({shouldForwardProp:h,label:m},p)),y=b=>typeof b=="function"&&b.__emotion_real!==b||(0,vI.isPlainObject)(b)?A=>Bu(b,(0,jn.default)({},A,{theme:lu({theme:A.theme,defaultTheme:n,themeId:e})})):b,x=(b,...A)=>{let E=y(b);const P=A?A.map(y):[];l&&d&&P.push(R=>{const z=lu((0,jn.default)({},R,{defaultTheme:n,themeId:e}));if(!z.components||!z.components[l]||!z.components[l].styleOverrides)return null;const O=z.components[l].styleOverrides,j={};return Object.entries(O).forEach(([H,Y])=>{j[H]=Bu(Y,(0,jn.default)({},R,{theme:z}))}),d(R,j)}),l&&!v&&P.push(R=>{var z;const O=lu((0,jn.default)({},R,{defaultTheme:n,themeId:e})),j=O==null||(z=O.components)==null||(z=z[l])==null?void 0:z.variants;return Bu({variants:j},(0,jn.default)({},R,{theme:O}))}),g||P.push(s);const T=P.length-A.length;if(Array.isArray(b)&&T>0){const R=new Array(T).fill("");E=[...b,...R],E.raw=[...b.raw,...R]}const S=_(E,...P);return o.muiName&&(S.muiName=o.muiName),S};return _.withConfig&&(x.withConfig=_.withConfig),x}}function PI(t,e){return ce({toolbar:{minHeight:56,[t.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[t.up("sm")]:{minHeight:64}}},e)}var It={};const LI=zr(RP),II=zr(KP);var GS=dS;Object.defineProperty(It,"__esModule",{value:!0});var Gv=It.alpha=jS;It.blend=GI;It.colorChannel=void 0;var Tp=It.darken=ug;It.decomposeColor=ai;It.emphasize=YS;var NI=It.getContrastRatio=kI;It.getLuminance=wc;It.hexToRgb=WS;It.hslToRgb=XS;var Ap=It.lighten=cg;It.private_safeAlpha=zI;It.private_safeColorChannel=void 0;It.private_safeDarken=BI;It.private_safeEmphasize=VI;It.private_safeLighten=HI;It.recomposeColor=Xo;It.rgbToHex=FI;var Wv=GS(LI),DI=GS(II);function lg(t,e=0,n=1){return(0,DI.default)(t,e,n)}function WS(t){t=t.slice(1);const e=new RegExp(`.{1,${t.length>=6?2:1}}`,"g");let n=t.match(e);return n&&n[0].length===1&&(n=n.map(i=>i+i)),n?`rgb${n.length===4?"a":""}(${n.map((i,r)=>r<3?parseInt(i,16):Math.round(parseInt(i,16)/255*1e3)/1e3).join(", ")})`:""}function UI(t){const e=t.toString(16);return e.length===1?`0${e}`:e}function ai(t){if(t.type)return t;if(t.charAt(0)==="#")return ai(WS(t));const e=t.indexOf("("),n=t.substring(0,e);if(["rgb","rgba","hsl","hsla","color"].indexOf(n)===-1)throw new Error((0,Wv.default)(9,t));let i=t.substring(e+1,t.length-1),r;if(n==="color"){if(i=i.split(" "),r=i.shift(),i.length===4&&i[3].charAt(0)==="/"&&(i[3]=i[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(r)===-1)throw new Error((0,Wv.default)(10,r))}else i=i.split(",");return i=i.map(s=>parseFloat(s)),{type:n,values:i,colorSpace:r}}const $S=t=>{const e=ai(t);return e.values.slice(0,3).map((n,i)=>e.type.indexOf("hsl")!==-1&&i!==0?`${n}%`:n).join(" ")};It.colorChannel=$S;const OI=(t,e)=>{try{return $S(t)}catch{return t}};It.private_safeColorChannel=OI;function Xo(t){const{type:e,colorSpace:n}=t;let{values:i}=t;return e.indexOf("rgb")!==-1?i=i.map((r,s)=>s<3?parseInt(r,10):r):e.indexOf("hsl")!==-1&&(i[1]=`${i[1]}%`,i[2]=`${i[2]}%`),e.indexOf("color")!==-1?i=`${n} ${i.join(" ")}`:i=`${i.join(", ")}`,`${e}(${i})`}function FI(t){if(t.indexOf("#")===0)return t;const{values:e}=ai(t);return`#${e.map((n,i)=>UI(i===3?Math.round(255*n):n)).join("")}`}function XS(t){t=ai(t);const{values:e}=t,n=e[0],i=e[1]/100,r=e[2]/100,s=i*Math.min(r,1-r),o=(u,c=(u+n/30)%12)=>r-s*Math.max(Math.min(c-3,9-c,1),-1);let a="rgb";const l=[Math.round(o(0)*255),Math.round(o(8)*255),Math.round(o(4)*255)];return t.type==="hsla"&&(a+="a",l.push(e[3])),Xo({type:a,values:l})}function wc(t){t=ai(t);let e=t.type==="hsl"||t.type==="hsla"?ai(XS(t)).values:t.values;return e=e.map(n=>(t.type!=="color"&&(n/=255),n<=.03928?n/12.92:((n+.055)/1.055)**2.4)),Number((.2126*e[0]+.7152*e[1]+.0722*e[2]).toFixed(3))}function kI(t,e){const n=wc(t),i=wc(e);return(Math.max(n,i)+.05)/(Math.min(n,i)+.05)}function jS(t,e){return t=ai(t),e=lg(e),(t.type==="rgb"||t.type==="hsl")&&(t.type+="a"),t.type==="color"?t.values[3]=`/${e}`:t.values[3]=e,Xo(t)}function zI(t,e,n){try{return jS(t,e)}catch{return t}}function ug(t,e){if(t=ai(t),e=lg(e),t.type.indexOf("hsl")!==-1)t.values[2]*=1-e;else if(t.type.indexOf("rgb")!==-1||t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]*=1-e;return Xo(t)}function BI(t,e,n){try{return ug(t,e)}catch{return t}}function cg(t,e){if(t=ai(t),e=lg(e),t.type.indexOf("hsl")!==-1)t.values[2]+=(100-t.values[2])*e;else if(t.type.indexOf("rgb")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(255-t.values[n])*e;else if(t.type.indexOf("color")!==-1)for(let n=0;n<3;n+=1)t.values[n]+=(1-t.values[n])*e;return Xo(t)}function HI(t,e,n){try{return cg(t,e)}catch{return t}}function YS(t,e=.15){return wc(t)>.5?ug(t,e):cg(t,e)}function VI(t,e,n){try{return YS(t,e)}catch{return t}}function GI(t,e,n,i=1){const r=(l,u)=>Math.round((l**(1/i)*(1-n)+u**(1/i)*n)**i),s=ai(t),o=ai(e),a=[r(s.values[0],o.values[0]),r(s.values[1],o.values[1]),r(s.values[2],o.values[2])];return Xo({type:"rgb",values:a})}const tl={black:"#000",white:"#fff"},WI={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Ws={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},$s={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},ua={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},Xs={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},js={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},Ys={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},$I=["mode","contrastThreshold","tonalOffset"],$v={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:tl.white,default:tl.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},kd={text:{primary:tl.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:tl.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Xv(t,e,n,i){const r=i.light||i,s=i.dark||i*1.5;t[e]||(t.hasOwnProperty(n)?t[e]=t[n]:e==="light"?t.light=Ap(t.main,r):e==="dark"&&(t.dark=Tp(t.main,s)))}function XI(t="light"){return t==="dark"?{main:Xs[200],light:Xs[50],dark:Xs[400]}:{main:Xs[700],light:Xs[400],dark:Xs[800]}}function jI(t="light"){return t==="dark"?{main:Ws[200],light:Ws[50],dark:Ws[400]}:{main:Ws[500],light:Ws[300],dark:Ws[700]}}function YI(t="light"){return t==="dark"?{main:$s[500],light:$s[300],dark:$s[700]}:{main:$s[700],light:$s[400],dark:$s[800]}}function qI(t="light"){return t==="dark"?{main:js[400],light:js[300],dark:js[700]}:{main:js[700],light:js[500],dark:js[900]}}function KI(t="light"){return t==="dark"?{main:Ys[400],light:Ys[300],dark:Ys[700]}:{main:Ys[800],light:Ys[500],dark:Ys[900]}}function ZI(t="light"){return t==="dark"?{main:ua[400],light:ua[300],dark:ua[700]}:{main:"#ed6c02",light:ua[500],dark:ua[900]}}function QI(t){const{mode:e="light",contrastThreshold:n=3,tonalOffset:i=.2}=t,r=Tn(t,$I),s=t.primary||XI(e),o=t.secondary||jI(e),a=t.error||YI(e),l=t.info||qI(e),u=t.success||KI(e),c=t.warning||ZI(e);function f(g){return NI(g,kd.text.primary)>=n?kd.text.primary:$v.text.primary}const d=({color:g,name:m,mainShade:h=500,lightShade:_=300,darkShade:y=700})=>{if(g=ce({},g),!g.main&&g[h]&&(g.main=g[h]),!g.hasOwnProperty("main"))throw new Error(Za(11,m?` (${m})`:"",h));if(typeof g.main!="string")throw new Error(Za(12,m?` (${m})`:"",JSON.stringify(g.main)));return Xv(g,"light",_,i),Xv(g,"dark",y,i),g.contrastText||(g.contrastText=f(g.main)),g},p={dark:kd,light:$v};return ri(ce({common:ce({},tl),mode:e,primary:d({color:s,name:"primary"}),secondary:d({color:o,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:d({color:a,name:"error"}),warning:d({color:c,name:"warning"}),info:d({color:l,name:"info"}),success:d({color:u,name:"success"}),grey:WI,contrastThreshold:n,getContrastText:f,augmentColor:d,tonalOffset:i},p[e]),r)}const JI=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function e3(t){return Math.round(t*1e5)/1e5}const jv={textTransform:"uppercase"},Yv='"Roboto", "Helvetica", "Arial", sans-serif';function t3(t,e){const n=typeof e=="function"?e(t):e,{fontFamily:i=Yv,fontSize:r=14,fontWeightLight:s=300,fontWeightRegular:o=400,fontWeightMedium:a=500,fontWeightBold:l=700,htmlFontSize:u=16,allVariants:c,pxToRem:f}=n,d=Tn(n,JI),p=r/14,v=f||(h=>`${h/u*p}rem`),g=(h,_,y,x,b)=>ce({fontFamily:i,fontWeight:h,fontSize:v(_),lineHeight:y},i===Yv?{letterSpacing:`${e3(x/_)}em`}:{},b,c),m={h1:g(s,96,1.167,-1.5),h2:g(s,60,1.2,-.5),h3:g(o,48,1.167,0),h4:g(o,34,1.235,.25),h5:g(o,24,1.334,0),h6:g(a,20,1.6,.15),subtitle1:g(o,16,1.75,.15),subtitle2:g(a,14,1.57,.1),body1:g(o,16,1.5,.15),body2:g(o,14,1.43,.15),button:g(a,14,1.75,.4,jv),caption:g(o,12,1.66,.4),overline:g(o,12,2.66,1,jv),inherit:{fontFamily:"inherit",fontWeight:"inherit",fontSize:"inherit",lineHeight:"inherit",letterSpacing:"inherit"}};return ri(ce({htmlFontSize:u,pxToRem:v,fontFamily:i,fontSize:r,fontWeightLight:s,fontWeightRegular:o,fontWeightMedium:a,fontWeightBold:l},m),d,{clone:!1})}const n3=.2,i3=.14,r3=.12;function _t(...t){return[`${t[0]}px ${t[1]}px ${t[2]}px ${t[3]}px rgba(0,0,0,${n3})`,`${t[4]}px ${t[5]}px ${t[6]}px ${t[7]}px rgba(0,0,0,${i3})`,`${t[8]}px ${t[9]}px ${t[10]}px ${t[11]}px rgba(0,0,0,${r3})`].join(",")}const s3=["none",_t(0,2,1,-1,0,1,1,0,0,1,3,0),_t(0,3,1,-2,0,2,2,0,0,1,5,0),_t(0,3,3,-2,0,3,4,0,0,1,8,0),_t(0,2,4,-1,0,4,5,0,0,1,10,0),_t(0,3,5,-1,0,5,8,0,0,1,14,0),_t(0,3,5,-1,0,6,10,0,0,1,18,0),_t(0,4,5,-2,0,7,10,1,0,2,16,1),_t(0,5,5,-3,0,8,10,1,0,3,14,2),_t(0,5,6,-3,0,9,12,1,0,3,16,2),_t(0,6,6,-3,0,10,14,1,0,4,18,3),_t(0,6,7,-4,0,11,15,1,0,4,20,3),_t(0,7,8,-4,0,12,17,2,0,5,22,4),_t(0,7,8,-4,0,13,19,2,0,5,24,4),_t(0,7,9,-4,0,14,21,2,0,5,26,4),_t(0,8,9,-5,0,15,22,2,0,6,28,5),_t(0,8,10,-5,0,16,24,2,0,6,30,5),_t(0,8,11,-5,0,17,26,2,0,6,32,5),_t(0,9,11,-5,0,18,28,2,0,7,34,6),_t(0,9,12,-6,0,19,29,2,0,7,36,6),_t(0,10,13,-6,0,20,31,3,0,8,38,7),_t(0,10,13,-6,0,21,33,3,0,8,40,7),_t(0,10,14,-6,0,22,35,3,0,8,42,7),_t(0,11,14,-7,0,23,36,3,0,9,44,8),_t(0,11,15,-7,0,24,38,3,0,9,46,8)],o3=["duration","easing","delay"],a3={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},l3={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function qv(t){return`${Math.round(t)}ms`}function u3(t){if(!t)return 0;const e=t/36;return Math.round((4+15*e**.25+e/5)*10)}function c3(t){const e=ce({},a3,t.easing),n=ce({},l3,t.duration);return ce({getAutoHeightDuration:u3,create:(r=["all"],s={})=>{const{duration:o=n.standard,easing:a=e.easeInOut,delay:l=0}=s;return Tn(s,o3),(Array.isArray(r)?r:[r]).map(u=>`${u} ${typeof o=="string"?o:qv(o)} ${a} ${typeof l=="string"?l:qv(l)}`).join(",")}},t,{easing:e,duration:n})}const f3={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},d3=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function h3(t={},...e){const{mixins:n={},palette:i={},transitions:r={},typography:s={}}=t,o=Tn(t,d3);if(t.vars)throw new Error(Za(18));const a=QI(i),l=gl(t);let u=ri(l,{mixins:PI(l.breakpoints,n),palette:a,shadows:s3.slice(),typography:t3(a,s),transitions:c3(r),zIndex:ce({},f3)});return u=ri(u,o),u=e.reduce((c,f)=>ri(c,f),u),u.unstable_sxConfig=ce({},pl,o==null?void 0:o.unstable_sxConfig),u.unstable_sx=function(f){return ml({sx:f,theme:this})},u}const p3=h3(),m3="$$material";function fg(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const g3=t=>fg(t)&&t!=="classes",lr=gI({themeId:m3,defaultTheme:p3,rootShouldForwardProp:g3});function v3(t){return sf("MuiSvgIcon",t)}uS("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const _3=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],y3=t=>{const{color:e,fontSize:n,classes:i}=t,r={root:["root",e!=="inherit"&&`color${hn(e)}`,`fontSize${hn(n)}`]};return Ym(r,v3,i)},x3=lr("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,n.color!=="inherit"&&e[`color${hn(n.color)}`],e[`fontSize${hn(n.fontSize)}`]]}})(({theme:t,ownerState:e})=>{var n,i,r,s,o,a,l,u,c,f,d,p,v;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:e.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=t.transitions)==null||(i=n.create)==null?void 0:i.call(n,"fill",{duration:(r=t.transitions)==null||(r=r.duration)==null?void 0:r.shorter}),fontSize:{inherit:"inherit",small:((s=t.typography)==null||(o=s.pxToRem)==null?void 0:o.call(s,20))||"1.25rem",medium:((a=t.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,24))||"1.5rem",large:((u=t.typography)==null||(c=u.pxToRem)==null?void 0:c.call(u,35))||"2.1875rem"}[e.fontSize],color:(f=(d=(t.vars||t).palette)==null||(d=d[e.color])==null?void 0:d.main)!=null?f:{action:(p=(t.vars||t).palette)==null||(p=p.action)==null?void 0:p.active,disabled:(v=(t.vars||t).palette)==null||(v=v.action)==null?void 0:v.disabled,inherit:void 0}[e.color]}}),bp=Te.forwardRef(function(e,n){const i=qm({props:e,name:"MuiSvgIcon"}),{children:r,className:s,color:o="inherit",component:a="svg",fontSize:l="medium",htmlColor:u,inheritViewBox:c=!1,titleAccess:f,viewBox:d="0 0 24 24"}=i,p=Tn(i,_3),v=Te.isValidElement(r)&&r.type==="svg",g=ce({},i,{color:o,component:a,fontSize:l,instanceFontSize:e.fontSize,inheritViewBox:c,viewBox:d,hasSvgAsChild:v}),m={};c||(m.viewBox=d);const h=y3(g);return Fe.jsxs(x3,ce({as:a,className:Di(h.root,s),focusable:"false",color:u,"aria-hidden":f?void 0:!0,role:f?"img":void 0,ref:n},m,p,v&&r.props,{ownerState:g,children:[v?r.props.children:r,f?Fe.jsx("title",{children:f}):null]}))});bp.muiName="SvgIcon";function qS(t,e){function n(i,r){return Fe.jsx(bp,ce({"data-testid":`${e}Icon`,ref:r},i,{children:t}))}return n.muiName=bp.muiName,Te.memo(Te.forwardRef(n))}const S3=qS(Fe.jsx("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3z"}),"AddToQueue"),M3=qS(Fe.jsx("path",{d:"M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2m0 14H3V5h18zm-5-7v2H8v-2z"}),"RemoveFromQueue");function E3(t){return Object.keys(t).length===0}function w3(t=null){const e=Te.useContext(yf);return!e||E3(e)?t:e}const T3=gl();function A3(t=T3){return w3(t)}const b3=["ownerState"],C3=["variants"],R3=["name","slot","skipVariantsResolver","skipSx","overridesResolver"];function P3(t){return Object.keys(t).length===0}function L3(t){return typeof t=="string"&&t.charCodeAt(0)>96}function zd(t){return t!=="ownerState"&&t!=="theme"&&t!=="sx"&&t!=="as"}const I3=gl(),N3=t=>t&&t.charAt(0).toLowerCase()+t.slice(1);function uu({defaultTheme:t,theme:e,themeId:n}){return P3(e)?t:e[n]||e}function D3(t){return t?(e,n)=>n[t]:null}function Hu(t,e){let{ownerState:n}=e,i=Tn(e,b3);const r=typeof t=="function"?t(ce({ownerState:n},i)):t;if(Array.isArray(r))return r.flatMap(s=>Hu(s,ce({ownerState:n},i)));if(r&&typeof r=="object"&&Array.isArray(r.variants)){const{variants:s=[]}=r;let a=Tn(r,C3);return s.forEach(l=>{let u=!0;typeof l.props=="function"?u=l.props(ce({ownerState:n},i,n)):Object.keys(l.props).forEach(c=>{(n==null?void 0:n[c])!==l.props[c]&&i[c]!==l.props[c]&&(u=!1)}),u&&(Array.isArray(a)||(a=[a]),a.push(typeof l.style=="function"?l.style(ce({ownerState:n},i,n)):l.style))}),a}return r}function U3(t={}){const{themeId:e,defaultTheme:n=I3,rootShouldForwardProp:i=zd,slotShouldForwardProp:r=zd}=t,s=o=>ml(ce({},o,{theme:uu(ce({},o,{defaultTheme:n,themeId:e}))}));return s.__mui_systemSx=!0,(o,a={})=>{DS(o,b=>b.filter(A=>!(A!=null&&A.__mui_systemSx)));const{name:l,slot:u,skipVariantsResolver:c,skipSx:f,overridesResolver:d=D3(N3(u))}=a,p=Tn(a,R3),v=c!==void 0?c:u&&u!=="Root"&&u!=="root"||!1,g=f||!1;let m,h=zd;u==="Root"||u==="root"?h=i:u?h=r:L3(o)&&(h=void 0);const _=NS(o,ce({shouldForwardProp:h,label:m},p)),y=b=>typeof b=="function"&&b.__emotion_real!==b||Xi(b)?A=>Hu(b,ce({},A,{theme:uu({theme:A.theme,defaultTheme:n,themeId:e})})):b,x=(b,...A)=>{let E=y(b);const P=A?A.map(y):[];l&&d&&P.push(R=>{const z=uu(ce({},R,{defaultTheme:n,themeId:e}));if(!z.components||!z.components[l]||!z.components[l].styleOverrides)return null;const O=z.components[l].styleOverrides,j={};return Object.entries(O).forEach(([H,Y])=>{j[H]=Hu(Y,ce({},R,{theme:z}))}),d(R,j)}),l&&!v&&P.push(R=>{var z;const O=uu(ce({},R,{defaultTheme:n,themeId:e})),j=O==null||(z=O.components)==null||(z=z[l])==null?void 0:z.variants;return Hu({variants:j},ce({},R,{theme:O}))}),g||P.push(s);const T=P.length-A.length;if(Array.isArray(b)&&T>0){const R=new Array(T).fill("");E=[...b,...R],E.raw=[...b.raw,...R]}const S=_(E,...P);return o.muiName&&(S.muiName=o.muiName),S};return _.withConfig&&(x.withConfig=_.withConfig),x}}const O3=U3();function F3(t){const{theme:e,name:n,props:i}=t;return!e||!e.components||!e.components[n]||!e.components[n].defaultProps?i:Sc(e.components[n].defaultProps,i)}function k3({props:t,name:e,defaultTheme:n,themeId:i}){let r=A3(n);return i&&(r=r[i]||r),F3({theme:r,name:e,props:t})}const z3=Te.createContext(),B3=()=>{const t=Te.useContext(z3);return t??!1},H3=["component","direction","spacing","divider","children","className","useFlexGap"],V3=gl(),G3=O3("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function W3(t){return k3({props:t,name:"MuiStack",defaultTheme:V3})}function $3(t,e){const n=Te.Children.toArray(t).filter(Boolean);return n.reduce((i,r,s)=>(i.push(r),s<n.length-1&&i.push(Te.cloneElement(e,{key:`separator-${s}`})),i),[])}const X3=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],j3=({ownerState:t,theme:e})=>{let n=ce({display:"flex",flexDirection:"column"},Ei({theme:e},Fd({values:t.direction,breakpoints:e.breakpoints.values}),i=>({flexDirection:i})));if(t.spacing){const i=og(e),r=Object.keys(e.breakpoints.values).reduce((l,u)=>((typeof t.spacing=="object"&&t.spacing[u]!=null||typeof t.direction=="object"&&t.direction[u]!=null)&&(l[u]=!0),l),{}),s=Fd({values:t.direction,base:r}),o=Fd({values:t.spacing,base:r});typeof s=="object"&&Object.keys(s).forEach((l,u,c)=>{if(!s[l]){const d=u>0?s[c[u-1]]:"column";s[l]=d}}),n=ri(n,Ei({theme:e},o,(l,u)=>t.useFlexGap?{gap:vs(i,l)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${X3(u?s[u]:t.direction)}`]:vs(i,l)}}))}return n=ML(e.breakpoints,n),n};function Y3(t={}){const{createStyledComponent:e=G3,useThemeProps:n=W3,componentName:i="MuiStack"}=t,r=()=>Ym({root:["root"]},l=>sf(i,l),{}),s=e(j3);return Te.forwardRef(function(l,u){const c=n(l),f=HS(c),{component:d="div",direction:p="column",spacing:v=0,divider:g,children:m,className:h,useFlexGap:_=!1}=f,y=Tn(f,H3),x={direction:p,spacing:v,useFlexGap:_},b=r();return Fe.jsx(s,ce({as:d,ownerState:x,ref:u,className:Di(b.root,h)},y,{children:g?$3(m,g):m}))})}const q3=Y3({createStyledComponent:lr("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>qm({props:t,name:"MuiStack"})});function K3(t,e,n=(i,r)=>i===r){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}const Z3=2;function KS(t,e){return t-e}function Kv(t,e){var n;const{index:i}=(n=t.reduce((r,s,o)=>{const a=Math.abs(e-s);return r===null||a<r.distance||a===r.distance?{distance:a,index:o}:r},null))!=null?n:{};return i}function cu(t,e){if(e.current!==void 0&&t.changedTouches){const n=t;for(let i=0;i<n.changedTouches.length;i+=1){const r=n.changedTouches[i];if(r.identifier===e.current)return{x:r.clientX,y:r.clientY}}return!1}return{x:t.clientX,y:t.clientY}}function Tc(t,e,n){return(t-e)*100/(n-e)}function Q3(t,e,n){return(n-e)*t+e}function J3(t){if(Math.abs(t)<1){const n=t.toExponential().split("e-"),i=n[0].split(".")[1];return(i?i.length:0)+parseInt(n[1],10)}const e=t.toString().split(".")[1];return e?e.length:0}function eN(t,e,n){const i=Math.round((t-n)/e)*e+n;return Number(i.toFixed(J3(e)))}function Zv({values:t,newValue:e,index:n}){const i=t.slice();return i[n]=e,i.sort(KS)}function fu({sliderRef:t,activeIndex:e,setActive:n}){var i,r;const s=Du(t.current);if(!((i=t.current)!=null&&i.contains(s.activeElement))||Number(s==null||(r=s.activeElement)==null?void 0:r.getAttribute("data-index"))!==e){var o;(o=t.current)==null||o.querySelector(`[type="range"][data-index="${e}"]`).focus()}n&&n(e)}function du(t,e){return typeof t=="number"&&typeof e=="number"?t===e:typeof t=="object"&&typeof e=="object"?K3(t,e):!1}const tN={horizontal:{offset:t=>({left:`${t}%`}),leap:t=>({width:`${t}%`})},"horizontal-reverse":{offset:t=>({right:`${t}%`}),leap:t=>({width:`${t}%`})},vertical:{offset:t=>({bottom:`${t}%`}),leap:t=>({height:`${t}%`})}},nN=t=>t;let hu;function Qv(){return hu===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?hu=CSS.supports("touch-action","none"):hu=!0),hu}function iN(t){const{"aria-labelledby":e,defaultValue:n,disabled:i=!1,disableSwap:r=!1,isRtl:s=!1,marks:o=!1,max:a=100,min:l=0,name:u,onChange:c,onChangeCommitted:f,orientation:d="horizontal",rootRef:p,scale:v=nN,step:g=1,shiftStep:m=10,tabIndex:h,value:_}=t,y=Te.useRef(),[x,b]=Te.useState(-1),[A,E]=Te.useState(-1),[P,T]=Te.useState(!1),S=Te.useRef(0),[R,z]=FP({controlled:_,default:n??l,name:"Slider"}),O=c&&((B,Q,W)=>{const ne=B.nativeEvent||B,xe=new ne.constructor(ne.type,ne);Object.defineProperty(xe,"target",{writable:!0,value:{value:Q,name:u}}),c(xe,Q,W)}),j=Array.isArray(R);let H=j?R.slice().sort(KS):[R];H=H.map(B=>B==null?l:Ks(B,l,a));const Y=o===!0&&g!==null?[...Array(Math.floor((a-l)/g)+1)].map((B,Q)=>({value:l+g*Q})):o||[],X=Y.map(B=>B.value),{isFocusVisibleRef:I,onBlur:K,onFocus:J,ref:ae}=$P(),[Ae,He]=Te.useState(-1),$=Te.useRef(),ie=_p(ae,$),ge=_p(p,ie),he=B=>Q=>{var W;const ne=Number(Q.currentTarget.getAttribute("data-index"));J(Q),I.current===!0&&He(ne),E(ne),B==null||(W=B.onFocus)==null||W.call(B,Q)},Ue=B=>Q=>{var W;K(Q),I.current===!1&&He(-1),E(-1),B==null||(W=B.onBlur)==null||W.call(B,Q)},Be=(B,Q)=>{const W=Number(B.currentTarget.getAttribute("data-index")),ne=H[W],xe=X.indexOf(ne);let fe=Q;if(Y&&g==null){const pe=X[X.length-1];fe>pe?fe=pe:fe<X[0]?fe=X[0]:fe=fe<ne?X[xe-1]:X[xe+1]}if(fe=Ks(fe,l,a),j){r&&(fe=Ks(fe,H[W-1]||-1/0,H[W+1]||1/0));const pe=fe;fe=Zv({values:H,newValue:fe,index:W});let Pe=W;r||(Pe=fe.indexOf(pe)),fu({sliderRef:$,activeIndex:Pe})}z(fe),He(W),O&&!du(fe,R)&&O(B,fe,W),f&&f(B,fe)},Ve=B=>Q=>{var W;if(g!==null){const ne=Number(Q.currentTarget.getAttribute("data-index")),xe=H[ne];let fe=null;(Q.key==="ArrowLeft"||Q.key==="ArrowDown")&&Q.shiftKey||Q.key==="PageDown"?fe=Math.max(xe-m,l):((Q.key==="ArrowRight"||Q.key==="ArrowUp")&&Q.shiftKey||Q.key==="PageUp")&&(fe=Math.min(xe+m,a)),fe!==null&&(Be(Q,fe),Q.preventDefault())}B==null||(W=B.onKeyDown)==null||W.call(B,Q)};lS(()=>{if(i&&$.current.contains(document.activeElement)){var B;(B=document.activeElement)==null||B.blur()}},[i]),i&&x!==-1&&b(-1),i&&Ae!==-1&&He(-1);const dt=B=>Q=>{var W;(W=B.onChange)==null||W.call(B,Q),Be(Q,Q.target.valueAsNumber)},L=Te.useRef();let nt=d;s&&d==="horizontal"&&(nt+="-reverse");const Le=({finger:B,move:Q=!1})=>{const{current:W}=$,{width:ne,height:xe,bottom:fe,left:pe}=W.getBoundingClientRect();let Pe;nt.indexOf("vertical")===0?Pe=(fe-B.y)/xe:Pe=(B.x-pe)/ne,nt.indexOf("-reverse")!==-1&&(Pe=1-Pe);let ye;if(ye=Q3(Pe,l,a),g)ye=eN(ye,g,l);else{const N=Kv(X,ye);ye=X[N]}ye=Ks(ye,l,a);let je=0;if(j){Q?je=L.current:je=Kv(H,ye),r&&(ye=Ks(ye,H[je-1]||-1/0,H[je+1]||1/0));const N=ye;ye=Zv({values:H,newValue:ye,index:je}),r&&Q||(je=ye.indexOf(N),L.current=je)}return{newValue:ye,activeIndex:je}},Ie=Id(B=>{const Q=cu(B,y);if(!Q)return;if(S.current+=1,B.type==="mousemove"&&B.buttons===0){Me(B);return}const{newValue:W,activeIndex:ne}=Le({finger:Q,move:!0});fu({sliderRef:$,activeIndex:ne,setActive:b}),z(W),!P&&S.current>Z3&&T(!0),O&&!du(W,R)&&O(B,W,ne)}),Me=Id(B=>{const Q=cu(B,y);if(T(!1),!Q)return;const{newValue:W}=Le({finger:Q,move:!0});b(-1),B.type==="touchend"&&E(-1),f&&f(B,W),y.current=void 0,be()}),at=Id(B=>{if(i)return;Qv()||B.preventDefault();const Q=B.changedTouches[0];Q!=null&&(y.current=Q.identifier);const W=cu(B,y);if(W!==!1){const{newValue:xe,activeIndex:fe}=Le({finger:W});fu({sliderRef:$,activeIndex:fe,setActive:b}),z(xe),O&&!du(xe,R)&&O(B,xe,fe)}S.current=0;const ne=Du($.current);ne.addEventListener("touchmove",Ie,{passive:!0}),ne.addEventListener("touchend",Me,{passive:!0})}),be=Te.useCallback(()=>{const B=Du($.current);B.removeEventListener("mousemove",Ie),B.removeEventListener("mouseup",Me),B.removeEventListener("touchmove",Ie),B.removeEventListener("touchend",Me)},[Me,Ie]);Te.useEffect(()=>{const{current:B}=$;return B.addEventListener("touchstart",at,{passive:Qv()}),()=>{B.removeEventListener("touchstart",at),be()}},[be,at]),Te.useEffect(()=>{i&&be()},[i,be]);const ze=B=>Q=>{var W;if((W=B.onMouseDown)==null||W.call(B,Q),i||Q.defaultPrevented||Q.button!==0)return;Q.preventDefault();const ne=cu(Q,y);if(ne!==!1){const{newValue:fe,activeIndex:pe}=Le({finger:ne});fu({sliderRef:$,activeIndex:pe,setActive:b}),z(fe),O&&!du(fe,R)&&O(Q,fe,pe)}S.current=0;const xe=Du($.current);xe.addEventListener("mousemove",Ie,{passive:!0}),xe.addEventListener("mouseup",Me)},C=Tc(j?H[0]:l,l,a),M=Tc(H[H.length-1],l,a)-C,V=(B={})=>{const Q=Uu(B),W={onMouseDown:ze(Q||{})},ne=ce({},Q,W);return ce({},B,{ref:ge},ne)},te=B=>Q=>{var W;(W=B.onMouseOver)==null||W.call(B,Q);const ne=Number(Q.currentTarget.getAttribute("data-index"));E(ne)},re=B=>Q=>{var W;(W=B.onMouseLeave)==null||W.call(B,Q),E(-1)};return{active:x,axis:nt,axisProps:tN,dragging:P,focusedThumbIndex:Ae,getHiddenInputProps:(B={})=>{var Q;const W=Uu(B),ne={onChange:dt(W||{}),onFocus:he(W||{}),onBlur:Ue(W||{}),onKeyDown:Ve(W||{})},xe=ce({},W,ne);return ce({tabIndex:h,"aria-labelledby":e,"aria-orientation":d,"aria-valuemax":v(a),"aria-valuemin":v(l),name:u,type:"range",min:t.min,max:t.max,step:t.step===null&&t.marks?"any":(Q=t.step)!=null?Q:void 0,disabled:i},B,xe,{style:ce({},XP,{direction:s?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:V,getThumbProps:(B={})=>{const Q=Uu(B),W={onMouseOver:te(Q||{}),onMouseLeave:re(Q||{})};return ce({},B,Q,W)},marks:Y,open:A,range:j,rootRef:ge,trackLeap:M,trackOffset:C,values:H,getThumbStyle:B=>({pointerEvents:x!==-1&&x!==B?"none":void 0})}}const rN=t=>!t||!Ra(t);function sN(t){return sf("MuiSlider",t)}const ni=uS("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),oN=t=>{const{open:e}=t;return{offset:Di(e&&ni.valueLabelOpen),circle:ni.valueLabelCircle,label:ni.valueLabelLabel}};function aN(t){const{children:e,className:n,value:i}=t,r=oN(t);return e?Te.cloneElement(e,{className:Di(e.props.className)},Fe.jsxs(Te.Fragment,{children:[e.props.children,Fe.jsx("span",{className:Di(r.offset,n),"aria-hidden":!0,children:Fe.jsx("span",{className:r.circle,children:Fe.jsx("span",{className:r.label,children:i})})})]})):null}const lN=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function Jv(t){return t}const uN=lr("span",{name:"MuiSlider",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.root,e[`color${hn(n.color)}`],n.size!=="medium"&&e[`size${hn(n.size)}`],n.marked&&e.marked,n.orientation==="vertical"&&e.vertical,n.track==="inverted"&&e.trackInverted,n.track===!1&&e.trackFalse]}})(({theme:t})=>{var e;return{borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${ni.disabled}`]:{pointerEvents:"none",cursor:"default",color:(t.vars||t).palette.grey[400]},[`&.${ni.dragging}`]:{[`& .${ni.thumb}, & .${ni.track}`]:{transition:"none"}},variants:[...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n},style:{color:(t.vars||t).palette[n].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}}),cN=lr("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(t,e)=>e.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),fN=lr("span",{name:"MuiSlider",slot:"Track",overridesResolver:(t,e)=>e.track})(({theme:t})=>{var e;return{display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:t.transitions.create(["left","width","bottom","height"],{duration:t.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n,track:"inverted"},style:ce({},t.vars?{backgroundColor:t.vars.palette.Slider[`${n}Track`],borderColor:t.vars.palette.Slider[`${n}Track`]}:ce({backgroundColor:Ap(t.palette[n].main,.62),borderColor:Ap(t.palette[n].main,.62)},t.applyStyles("dark",{backgroundColor:Tp(t.palette[n].main,.5)}),t.applyStyles("dark",{borderColor:Tp(t.palette[n].main,.5)})))}))]}}),dN=lr("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(t,e)=>{const{ownerState:n}=t;return[e.thumb,e[`thumbColor${hn(n.color)}`],n.size!=="medium"&&e[`thumbSize${hn(n.size)}`]]}})(({theme:t})=>{var e;return{position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:t.transitions.create(["box-shadow","left","bottom"],{duration:t.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(t.vars||t).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${ni.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.keys(((e=t.vars)!=null?e:t).palette).filter(n=>{var i;return((i=t.vars)!=null?i:t).palette[n].main}).map(n=>({props:{color:n},style:{[`&:hover, &.${ni.focusVisible}`]:ce({},t.vars?{boxShadow:`0px 0px 0px 8px rgba(${t.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${Gv(t.palette[n].main,.16)}`},{"@media (hover: none)":{boxShadow:"none"}}),[`&.${ni.active}`]:ce({},t.vars?{boxShadow:`0px 0px 0px 14px rgba(${t.vars.palette[n].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${Gv(t.palette[n].main,.16)}`})}}))]}}),hN=lr(aN,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(t,e)=>e.valueLabel})(({theme:t})=>ce({zIndex:1,whiteSpace:"nowrap"},t.typography.body2,{fontWeight:500,transition:t.transitions.create(["transform"],{duration:t.transitions.duration.shortest}),position:"absolute",backgroundColor:(t.vars||t).palette.grey[600],borderRadius:2,color:(t.vars||t).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${ni.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${ni.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:t.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]})),pN=lr("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:t=>fg(t)&&t!=="markActive",overridesResolver:(t,e)=>{const{markActive:n}=t;return[e.mark,n&&e.markActive]}})(({theme:t})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(t.vars||t).palette.background.paper,opacity:.8}}]})),mN=lr("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:t=>fg(t)&&t!=="markLabelActive",overridesResolver:(t,e)=>e.markLabel})(({theme:t})=>ce({},t.typography.body2,{color:(t.vars||t).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(t.vars||t).palette.text.primary}}]})),gN=t=>{const{disabled:e,dragging:n,marked:i,orientation:r,track:s,classes:o,color:a,size:l}=t,u={root:["root",e&&"disabled",n&&"dragging",i&&"marked",r==="vertical"&&"vertical",s==="inverted"&&"trackInverted",s===!1&&"trackFalse",a&&`color${hn(a)}`,l&&`size${hn(l)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",e&&"disabled",l&&`thumbSize${hn(l)}`,a&&`thumbColor${hn(a)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return Ym(u,sN,o)},vN=({children:t})=>t,_N=Te.forwardRef(function(e,n){var i,r,s,o,a,l,u,c,f,d,p,v,g,m,h,_,y,x,b,A,E,P,T,S;const R=qm({props:e,name:"MuiSlider"}),z=B3(),{"aria-label":O,"aria-valuetext":j,"aria-labelledby":H,component:Y="span",components:X={},componentsProps:I={},color:K="primary",classes:J,className:ae,disableSwap:Ae=!1,disabled:He=!1,getAriaLabel:$,getAriaValueText:ie,marks:ge=!1,max:he=100,min:Ue=0,orientation:Be="horizontal",shiftStep:Ve=10,size:dt="medium",step:L=1,scale:nt=Jv,slotProps:Le,slots:Ie,track:Me="normal",valueLabelDisplay:at="off",valueLabelFormat:be=Jv}=R,ze=Tn(R,lN),C=ce({},R,{isRtl:z,max:he,min:Ue,classes:J,disabled:He,disableSwap:Ae,orientation:Be,marks:ge,color:K,size:dt,step:L,shiftStep:Ve,scale:nt,track:Me,valueLabelDisplay:at,valueLabelFormat:be}),{axisProps:M,getRootProps:V,getHiddenInputProps:te,getThumbProps:re,open:ee,active:Re,axis:de,focusedThumbIndex:B,range:Q,dragging:W,marks:ne,values:xe,trackOffset:fe,trackLeap:pe,getThumbStyle:Pe}=iN(ce({},C,{rootRef:n}));C.marked=ne.length>0&&ne.some(wt=>wt.label),C.dragging=W,C.focusedThumbIndex=B;const ye=gN(C),je=(i=(r=Ie==null?void 0:Ie.root)!=null?r:X.Root)!=null?i:uN,N=(s=(o=Ie==null?void 0:Ie.rail)!=null?o:X.Rail)!=null?s:cN,oe=(a=(l=Ie==null?void 0:Ie.track)!=null?l:X.Track)!=null?a:fN,q=(u=(c=Ie==null?void 0:Ie.thumb)!=null?c:X.Thumb)!=null?u:dN,Z=(f=(d=Ie==null?void 0:Ie.valueLabel)!=null?d:X.ValueLabel)!=null?f:hN,le=(p=(v=Ie==null?void 0:Ie.mark)!=null?v:X.Mark)!=null?p:pN,Ne=(g=(m=Ie==null?void 0:Ie.markLabel)!=null?m:X.MarkLabel)!=null?g:mN,Ye=(h=(_=Ie==null?void 0:Ie.input)!=null?_:X.Input)!=null?h:"input",vt=(y=Le==null?void 0:Le.root)!=null?y:I.root,Ft=(x=Le==null?void 0:Le.rail)!=null?x:I.rail,qe=(b=Le==null?void 0:Le.track)!=null?b:I.track,Cn=(A=Le==null?void 0:Le.thumb)!=null?A:I.thumb,_n=(E=Le==null?void 0:Le.valueLabel)!=null?E:I.valueLabel,yl=(P=Le==null?void 0:Le.mark)!=null?P:I.mark,Oi=(T=Le==null?void 0:Le.markLabel)!=null?T:I.markLabel,Yo=(S=Le==null?void 0:Le.input)!=null?S:I.input,xl=vr({elementType:je,getSlotProps:V,externalSlotProps:vt,externalForwardedProps:ze,additionalProps:ce({},rN(je)&&{as:Y}),ownerState:ce({},C,vt==null?void 0:vt.ownerState),className:[ye.root,ae]}),Sl=vr({elementType:N,externalSlotProps:Ft,ownerState:C,className:ye.rail}),xs=vr({elementType:oe,externalSlotProps:qe,additionalProps:{style:ce({},M[de].offset(fe),M[de].leap(pe))},ownerState:ce({},C,qe==null?void 0:qe.ownerState),className:ye.track}),Ss=vr({elementType:q,getSlotProps:re,externalSlotProps:Cn,ownerState:ce({},C,Cn==null?void 0:Cn.ownerState),className:ye.thumb}),Ms=vr({elementType:Z,externalSlotProps:_n,ownerState:ce({},C,_n==null?void 0:_n.ownerState),className:ye.valueLabel}),Es=vr({elementType:le,externalSlotProps:yl,ownerState:C,className:ye.mark}),ws=vr({elementType:Ne,externalSlotProps:Oi,ownerState:C,className:ye.markLabel}),bf=vr({elementType:Ye,getSlotProps:te,externalSlotProps:Yo,ownerState:C});return Fe.jsxs(je,ce({},xl,{children:[Fe.jsx(N,ce({},Sl)),Fe.jsx(oe,ce({},xs)),ne.filter(wt=>wt.value>=Ue&&wt.value<=he).map((wt,kt)=>{const w=Tc(wt.value,Ue,he),D=M[de].offset(w);let F;return Me===!1?F=xe.indexOf(wt.value)!==-1:F=Me==="normal"&&(Q?wt.value>=xe[0]&&wt.value<=xe[xe.length-1]:wt.value<=xe[0])||Me==="inverted"&&(Q?wt.value<=xe[0]||wt.value>=xe[xe.length-1]:wt.value>=xe[0]),Fe.jsxs(Te.Fragment,{children:[Fe.jsx(le,ce({"data-index":kt},Es,!Ra(le)&&{markActive:F},{style:ce({},D,Es.style),className:Di(Es.className,F&&ye.markActive)})),wt.label!=null?Fe.jsx(Ne,ce({"aria-hidden":!0,"data-index":kt},ws,!Ra(Ne)&&{markLabelActive:F},{style:ce({},D,ws.style),className:Di(ye.markLabel,ws.className,F&&ye.markLabelActive),children:wt.label})):null]},kt)}),xe.map((wt,kt)=>{const w=Tc(wt,Ue,he),D=M[de].offset(w),F=at==="off"?vN:Z;return Fe.jsx(F,ce({},!Ra(F)&&{valueLabelFormat:be,valueLabelDisplay:at,value:typeof be=="function"?be(nt(wt),kt):be,index:kt,open:ee===kt||Re===kt||at==="on",disabled:He},Ms,{children:Fe.jsx(q,ce({"data-index":kt},Ss,{className:Di(ye.thumb,Ss.className,Re===kt&&ye.active,B===kt&&ye.focusVisible),style:ce({},D,Pe(kt),Ss.style),children:Fe.jsx(Ye,ce({"data-index":kt,"aria-label":$?$(kt):O,"aria-valuenow":nt(wt),"aria-labelledby":H,"aria-valuetext":ie?ie(nt(wt),kt):j,value:xe[kt]},bf))}))}),kt)})]}))});function yN(t){return Fe.jsx("div",{className:"settingsMenuTitle",children:t.label})}class xN{constructor(){ve(this,"width",1920);ve(this,"height",1080);ve(this,"aspect",1);ve(this,"deviceWidth");ve(this,"deviceHeight");ve(this,"deviceAspect");ve(this,"orientation");ve(this,"pixelRatio");ve(this,"fps",0);ve(this,"targetFPS",60);ve(this,"useTouch",!1);ve(this,"type");ve(this,"listeners",new Set);ve(this,"cachedPPCm",-1);ve(this,"_overrideWidth");ve(this,"_overrideHeight");ve(this,"physicalDeviceHeight");ve(this,"physicalDeviceWidth");ve(this,"handleChange",()=>{const e=this._overrideWidth===void 0?window.innerWidth:this._overrideWidth,n=this._overrideHeight===void 0?window.innerHeight:this._overrideHeight;if(!(this.width===e&&this.height===n)){this.useTouch=/Mobi|Android|iPhone|iPad|BlackBerry|Windows Phone|webOS/i.test(navigator.userAgent),this.width=e,this.height=n,this.aspect=this.width/this.height,this.deviceHeight=Math.min(this.width,this.height),this.deviceWidth=Math.max(this.width,this.height),this.deviceAspect=this.deviceWidth/this.deviceHeight,this.pixelRatio=window.devicePixelRatio,this.physicalDeviceHeight=this.deviceHeight*this.pixelRatio,this.physicalDeviceWidth=this.deviceWidth*this.pixelRatio,this.orientation=this.aspect<1?"portrait":"landscape",this.type=this.useTouch?this.deviceWidth<1024&&this.deviceAspect>1.6?"mobile":"tablet":"desktop";for(const i of this.listeners)i()}});const e=()=>{this.handleChange(),setTimeout(this.handleChange,50)};window.addEventListener("resize",e),window.addEventListener("fullscreenchange",e),this.handleChange()}trackCanvas(e){setInterval(()=>{this._overrideWidth=e.clientWidth,this._overrideHeight=e.clientHeight,this.handleChange()},100)}onChange(e,n=!1){return this.listeners.add(e),n&&e(),()=>this.listeners.delete(e)}get isMobile(){return this.type==="mobile"}get isTablet(){return this.type==="tablet"}get isDesktop(){return this.type==="desktop"}get isIOS(){const e=navigator.appVersion,n=e.includes("iPhone"),i=e.includes("iPad"),r=/^(iPhone|iPad|iPod)/.test(navigator.platform);return n||i||r}get isIpadOS(){const e=navigator.appVersion,n=e.includes("iPad"),i=e.includes("Version/13.")&&e.includes("Safari"),r=e.includes("Mac OS X");return n||i&&r}get pixelsPerCm(){if(this.cachedPPCm===-1){const e=document.createElement("div");e.style.height="1in";const n=document.getElementsByTagName("body")[0];n.appendChild(e);const i=getComputedStyle(e,null).getPropertyValue("height");n.removeChild(e),this.cachedPPCm=Number.parseFloat(i)*2.54}return this.cachedPPCm}get screenHeightCms(){return this.height/this.pixelsPerCm}get screenWidthCms(){return this.width/this.pixelsPerCm}get screenShorterCms(){return Math.min(this.width,this.height)/this.pixelsPerCm}get performance(){return this.fps<this.targetFPS*.4?"low":this.fps<this.targetFPS*.8?"medium":"high"}}const Cp=new xN,ZS={graphicsResolution:()=>Number.parseInt(localStorage.getItem("graphicsResolution")||"1")};function SN(t,e=300){let n=!1,i=!1,r;const s=(...o)=>{n?(i=!0,r=o):(t.apply(this,o),n=!0,setTimeout(()=>{n=!1,i&&(i=!1,s.apply(this,r))},e))};return s}class QS{constructor(){ve(this,"listeners",[]);ve(this,"oneTimeListeners",[])}listen(e){this.listeners.push(e)}listenOnce(e){this.oneTimeListeners.push(e)}emit(e){for(const n of this.listeners)n(e);for(const n of this.oneTimeListeners)n(e);this.oneTimeListeners.length=0}}class MN extends QS{constructor(e){super(),this._value=e}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.emit(e))}}const Rp=new Set;function EN(t,e=!1){return Rp.add(t),e&&t(wo.width.value,wo.height.value),()=>Rp.delete(t)}function bn(t){return new MN(t)}const Wr=bn(1920),jo=bn(1080),JS=bn(1920),eM=bn(1080),vl=bn(window.devicePixelRatio),_l=bn(1),dg=bn(ZS.graphicsResolution()),Pp=bn(1),tM=bn(1),nM=bn(1920/2),wN=bn(1),TN=bn(1),iM=bn(16/9),Af=bn(1);function AN(){for(const t of Rp)t(Wr.value,jo.value);Lp=!1}let Lp=!1;function bN(){Lp||(Lp=!0,setTimeout(AN,10))}function hg(){Pp.value=vl.value/(4-dg.value),_l.value=Pp.value*window.outerHeight/window.innerHeight}vl.listen(hg);dg.listen(hg);_l.listen(t=>{tM.value=t/vl.value});function rM(){vl.value=window.devicePixelRatio,hg(),bN()}Wr.listen(rM);jo.listen(rM);function sM(){JS.value=Wr.value/Af.value}function oM(){eM.value=jo.value/Af.value}Wr.listen(sM);jo.listen(oM);Af.listen(()=>{sM(),oM()});function aM(){nM.value=_l.value*Wr.value*.5}Wr.listen(aM);_l.listen(aM);const CN=()=>{const t=Cp.width,e=Cp.height;Wr.value=t,jo.value=e,iM.value=t/e},RN=SN(CN);Cp.onChange(RN,!0);const wo={width:Wr,height:jo,uiWidth:JS,uiHeight:eM,devicePixelRatio:vl,finalDevicePixelRatio:_l,pixelDownsample:dg,virtualPixelRatio:Pp,finalPointScale:tM,halfScreenWidthPixels:nM,pixelWidthInClipSpace:wN,pixelHeightInClipSpace:TN,aspect:iM,uiScale:Af,onSizeChange:EN},PN=[{value:1,label:"low"},{value:2,label:"medium"},{value:3,label:"high"}];function LN(){const[t,e]=Te.useState(ZS.graphicsResolution());return Fe.jsxs("div",{className:"settingsMenuContent",children:[Fe.jsx(yN,{label:"Settings"}),"Graphics Resolution",Fe.jsxs(q3,{spacing:2,direction:"row",sx:{mb:1},alignItems:"center",children:[Fe.jsx(M3,{}),Fe.jsx(_N,{"aria-label":"Graphics Resolution",value:t,step:null,marks:PN,min:1,max:3,onChange:(n,i)=>{typeof i=="number"&&(localStorage.setItem("graphicsResolution",i.toString()),e(i),wo.pixelDownsample.value=i)}}),Fe.jsx(S3,{})]})]})}let ca,Bd,qs,pu;function Hd(t,e=1/0,n=null){Bd||(Bd=new cl(2,2,1,1)),qs||(qs=new or({uniforms:{blitTexture:new Gm(t)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),qs.uniforms.blitTexture.value=t,qs.defines.IS_SRGB=t.colorSpace==Yn,qs.needsUpdate=!0,pu||(pu=new yi(Bd,qs),pu.frustumCulled=!1);const i=new Zn,r=new xc;r.add(pu),n===null&&(n=ca=new eS({antialias:!1}));const s=Math.min(t.image.width,e),o=Math.min(t.image.height,e);n.setSize(s,o),n.clear(),n.render(r,i);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=s,a.height=o,l.drawImage(n.domElement,0,0,s,o);const u=new fP(a);return u.minFilter=t.minFilter,u.magFilter=t.magFilter,u.wrapS=t.wrapS,u.wrapT=t.wrapT,u.name=t.name,ca&&(ca.forceContextLoss(),ca.dispose(),ca=null),u}const e_={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class pg{constructor(){this.pluginCallbacks=[],this.register(function(e){return new HN(e)}),this.register(function(e){return new VN(e)}),this.register(function(e){return new XN(e)}),this.register(function(e){return new jN(e)}),this.register(function(e){return new YN(e)}),this.register(function(e){return new qN(e)}),this.register(function(e){return new GN(e)}),this.register(function(e){return new WN(e)}),this.register(function(e){return new $N(e)}),this.register(function(e){return new KN(e)}),this.register(function(e){return new ZN(e)}),this.register(function(e){return new QN(e)}),this.register(function(e){return new JN(e)}),this.register(function(e){return new eD(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,r){const s=new BN,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](s));s.setPlugins(o),s.write(e,n,r).catch(i)}parseAsync(e,n){const i=this;return new Promise(function(r,s){i.parse(e,r,s,n)})}}const $e={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Vd="KHR_mesh_quantization",Fn={};Fn[On]=$e.NEAREST;Fn[Ax]=$e.NEAREST_MIPMAP_NEAREST;Fn[ma]=$e.NEAREST_MIPMAP_LINEAR;Fn[Jn]=$e.LINEAR;Fn[bu]=$e.LINEAR_MIPMAP_NEAREST;Fn[Tr]=$e.LINEAR_MIPMAP_LINEAR;Fn[wr]=$e.CLAMP_TO_EDGE;Fn[hc]=$e.REPEAT;Fn[pc]=$e.MIRRORED_REPEAT;const t_={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},IN=new Je,n_=12,NN=1179937895,DN=2,i_=8,UN=1313821514,ON=5130562;function va(t,e){return t.length===e.length&&t.every(function(n,i){return n===e[i]})}function FN(t){return new TextEncoder().encode(t).buffer}function kN(t){return va(t.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function zN(t,e,n){const i={min:new Array(t.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(t.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let r=e;r<e+n;r++)for(let s=0;s<t.itemSize;s++){let o;t.itemSize>4?o=t.array[r*t.itemSize+s]:(s===0?o=t.getX(r):s===1?o=t.getY(r):s===2?o=t.getZ(r):s===3&&(o=t.getW(r)),t.normalized===!0&&(o=mp.normalize(o,t.array))),i.min[s]=Math.min(i.min[s],o),i.max[s]=Math.max(i.max[s],o)}return i}function lM(t){return Math.ceil(t/4)*4}function Gd(t,e=0){const n=lM(t.byteLength);if(n!==t.byteLength){const i=new Uint8Array(n);if(i.set(new Uint8Array(t)),e!==0)for(let r=t.byteLength;r<n;r++)i[r]=e;return i.buffer}return t}function r_(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function s_(t,e){if(t.toBlob!==void 0)return new Promise(i=>t.toBlob(i,e));let n;return e==="image/jpeg"?n=.92:e==="image/webp"&&(n=.8),t.convertToBlob({type:e,quality:n})}class BN{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter r"+Vc}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,n,i={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},i),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const r=this,s=r.buffers,o=r.json;i=r.options;const a=r.extensionsUsed,l=r.extensionsRequired,u=new Blob(s,{type:"application/octet-stream"}),c=Object.keys(a),f=Object.keys(l);if(c.length>0&&(o.extensionsUsed=c),f.length>0&&(o.extensionsRequired=f),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=u.size),i.binary===!0){const d=new FileReader;d.readAsArrayBuffer(u),d.onloadend=function(){const p=Gd(d.result),v=new DataView(new ArrayBuffer(i_));v.setUint32(0,p.byteLength,!0),v.setUint32(4,ON,!0);const g=Gd(FN(JSON.stringify(o)),32),m=new DataView(new ArrayBuffer(i_));m.setUint32(0,g.byteLength,!0),m.setUint32(4,UN,!0);const h=new ArrayBuffer(n_),_=new DataView(h);_.setUint32(0,NN,!0),_.setUint32(4,DN,!0);const y=n_+m.byteLength+g.byteLength+v.byteLength+p.byteLength;_.setUint32(8,y,!0);const x=new Blob([h,m,g,v,p],{type:"application/octet-stream"}),b=new FileReader;b.readAsArrayBuffer(x),b.onloadend=function(){n(b.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(u),d.onloadend=function(){const p=d.result;o.buffers[0].uri=p,n(o)}}else n(o)}serializeUserData(e,n){if(Object.keys(e.userData).length===0)return;const i=this.options,r=this.extensionsUsed;try{const s=JSON.parse(JSON.stringify(e.userData));if(i.includeCustomExtensions&&s.gltfExtensions){n.extensions===void 0&&(n.extensions={});for(const o in s.gltfExtensions)n.extensions[o]=s.gltfExtensions[o],r[o]=!0;delete s.gltfExtensions}Object.keys(s).length>0&&(n.extras=s)}catch(s){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+s.message)}}getUID(e,n=!1){if(this.uids.has(e)===!1){const r=new Map;r.set(!0,this.uid++),r.set(!1,this.uid++),this.uids.set(e,r)}return this.uids.get(e).get(n)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const i=new k;for(let r=0,s=e.count;r<s;r++)if(Math.abs(i.fromBufferAttribute(e,r).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const n=this.cache;if(n.attributesNormalized.has(e))return n.attributesNormalized.get(e);const i=e.clone(),r=new k;for(let s=0,o=i.count;s<o;s++)r.fromBufferAttribute(i,s),r.x===0&&r.y===0&&r.z===0?r.setX(1):r.normalize(),i.setXYZ(s,r.x,r.y,r.z);return n.attributesNormalized.set(e,i),i}applyTextureTransform(e,n){let i=!1;const r={};(n.offset.x!==0||n.offset.y!==0)&&(r.offset=n.offset.toArray(),i=!0),n.rotation!==0&&(r.rotation=n.rotation,i=!0),(n.repeat.x!==1||n.repeat.y!==1)&&(r.scale=n.repeat.toArray(),i=!0),i&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=r,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,n){if(e===n)return e;function i(p){return p.colorSpace===Yn?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof Cd&&(e=Hd(e)),n instanceof Cd&&(n=Hd(n));const r=e?e.image:null,s=n?n.image:null,o=Math.max(r?r.width:0,s?s.width:0),a=Math.max(r?r.height:0,s?s.height:0),l=r_();l.width=o,l.height=a;const u=l.getContext("2d",{willReadFrequently:!0});u.fillStyle="#00ffff",u.fillRect(0,0,o,a);const c=u.getImageData(0,0,o,a);if(r){u.drawImage(r,0,0,o,a);const p=i(e),v=u.getImageData(0,0,o,a).data;for(let g=2;g<v.length;g+=4)c.data[g]=p(v[g]/256)*256}if(s){u.drawImage(s,0,0,o,a);const p=i(n),v=u.getImageData(0,0,o,a).data;for(let g=1;g<v.length;g+=4)c.data[g]=p(v[g]/256)*256}u.putImageData(c,0,0);const d=(e||n).clone();return d.source=new Um(l),d.colorSpace=$i,d.channel=(e||n).channel,e&&n&&e.channel!==n.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){const n=this.json,i=this.buffers;return n.buffers||(n.buffers=[{byteLength:0}]),i.push(e),0}processBufferView(e,n,i,r,s){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(n){case $e.BYTE:case $e.UNSIGNED_BYTE:a=1;break;case $e.SHORT:case $e.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;s===$e.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const u=lM(r*l),c=new DataView(new ArrayBuffer(u));let f=0;for(let v=i;v<i+r;v++){for(let g=0;g<e.itemSize;g++){let m;e.itemSize>4?m=e.array[v*e.itemSize+g]:(g===0?m=e.getX(v):g===1?m=e.getY(v):g===2?m=e.getZ(v):g===3&&(m=e.getW(v)),e.normalized===!0&&(m=mp.normalize(m,e.array))),n===$e.FLOAT?c.setFloat32(f,m,!0):n===$e.INT?c.setInt32(f,m,!0):n===$e.UNSIGNED_INT?c.setUint32(f,m,!0):n===$e.SHORT?c.setInt16(f,m,!0):n===$e.UNSIGNED_SHORT?c.setUint16(f,m,!0):n===$e.BYTE?c.setInt8(f,m):n===$e.UNSIGNED_BYTE&&c.setUint8(f,m),f+=a}f%l!==0&&(f+=l-f%l)}const d={buffer:this.processBuffer(c.buffer),byteOffset:this.byteOffset,byteLength:u};return s!==void 0&&(d.target=s),s===$e.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=u,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const n=this,i=n.json;return i.bufferViews||(i.bufferViews=[]),new Promise(function(r){const s=new FileReader;s.readAsArrayBuffer(e),s.onloadend=function(){const o=Gd(s.result),a={buffer:n.processBuffer(o),byteOffset:n.byteOffset,byteLength:o.byteLength};n.byteOffset+=o.byteLength,r(i.bufferViews.push(a)-1)}})}processAccessor(e,n,i,r){const s=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=$e.FLOAT;else if(e.array.constructor===Int32Array)a=$e.INT;else if(e.array.constructor===Uint32Array)a=$e.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=$e.SHORT;else if(e.array.constructor===Uint16Array)a=$e.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=$e.BYTE;else if(e.array.constructor===Uint8Array)a=$e.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(i===void 0&&(i=0),(r===void 0||r===1/0)&&(r=e.count),r===0)return null;const l=zN(e,i,r);let u;n!==void 0&&(u=e===n.index?$e.ELEMENT_ARRAY_BUFFER:$e.ARRAY_BUFFER);const c=this.processBufferView(e,a,i,r,u),f={bufferView:c.id,byteOffset:c.byteOffset,componentType:a,count:r,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(f.normalized=!0),s.accessors||(s.accessors=[]),s.accessors.push(f)-1}processImage(e,n,i,r="image/png"){if(e!==null){const s=this,o=s.cache,a=s.json,l=s.options,u=s.pending;o.images.has(e)||o.images.set(e,{});const c=o.images.get(e),f=r+":flipY/"+i.toString();if(c[f]!==void 0)return c[f];a.images||(a.images=[]);const d={mimeType:r},p=r_();p.width=Math.min(e.width,l.maxTextureSize),p.height=Math.min(e.height,l.maxTextureSize);const v=p.getContext("2d",{willReadFrequently:!0});if(i===!0&&(v.translate(0,p.height),v.scale(1,-1)),e.data!==void 0){n!==ti&&console.error("GLTFExporter: Only RGBAFormat is supported.",n),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const m=new Uint8ClampedArray(e.height*e.width*4);for(let h=0;h<m.length;h+=4)m[h+0]=e.data[h+0],m[h+1]=e.data[h+1],m[h+2]=e.data[h+2],m[h+3]=e.data[h+3];v.putImageData(new ImageData(m,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)v.drawImage(e,0,0,p.width,p.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?u.push(s_(p,r).then(m=>s.processBufferViewImage(m)).then(m=>{d.bufferView=m})):p.toDataURL!==void 0?d.uri=p.toDataURL(r):u.push(s_(p,r).then(m=>new FileReader().readAsDataURL(m)).then(m=>{d.uri=m}));const g=a.images.push(d)-1;return c[f]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const n=this.json;n.samplers||(n.samplers=[]);const i={magFilter:Fn[e.magFilter],minFilter:Fn[e.minFilter],wrapS:Fn[e.wrapS],wrapT:Fn[e.wrapT]};return n.samplers.push(i)-1}processTexture(e){const i=this.options,r=this.cache,s=this.json;if(r.textures.has(e))return r.textures.get(e);s.textures||(s.textures=[]),e instanceof Cd&&(e=Hd(e,i.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),this._invokeAll(function(u){u.writeTexture&&u.writeTexture(e,a)});const l=s.textures.push(a)-1;return r.textures.set(e,l),l}processMaterial(e){const n=this.cache,i=this.json;if(n.materials.has(e))return n.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;i.materials||(i.materials=[]);const r={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const s=e.color.toArray().concat([e.opacity]);if(va(s,[1,1,1,1])||(r.pbrMetallicRoughness.baseColorFactor=s),e.isMeshStandardMaterial?(r.pbrMetallicRoughness.metallicFactor=e.metalness,r.pbrMetallicRoughness.roughnessFactor=e.roughness):(r.pbrMetallicRoughness.metallicFactor=.5,r.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(l,a),r.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),r.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(r.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const u={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(u,e.emissiveMap),r.emissiveTexture=u}}if(e.normalMap){const a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),r.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),r.occlusionTexture=a}e.transparent?r.alphaMode="BLEND":e.alphaTest>0&&(r.alphaMode="MASK",r.alphaCutoff=e.alphaTest),e.side===Pi&&(r.doubleSided=!0),e.name!==""&&(r.name=e.name),this.serializeUserData(e,r),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,r)});const o=i.materials.push(r)-1;return n.materials.set(e,o),o}processMesh(e){const n=this.cache,i=this.json,r=[e.geometry.uuid];if(Array.isArray(e.material))for(let x=0,b=e.material.length;x<b;x++)r.push(e.material[x].uuid);else r.push(e.material.uuid);const s=r.join(":");if(n.meshes.has(s))return n.meshes.get(s);const o=e.geometry;let a;e.isLineSegments?a=$e.LINES:e.isLineLoop?a=$e.LINE_LOOP:e.isLine?a=$e.LINE_STRIP:e.isPoints?a=$e.POINTS:a=e.material.wireframe?$e.LINES:$e.TRIANGLES;const l={},u={},c=[],f=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},p=o.getAttribute("normal");p!==void 0&&!this.isNormalizedNormalAttribute(p)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(p)));let v=null;for(let x in o.attributes){if(x.slice(0,5)==="morph")continue;const b=o.attributes[x];if(x=d[x]||x.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(x)||(x="_"+x),n.attributes.has(this.getUID(b))){u[x]=n.attributes.get(this.getUID(b));continue}v=null;const E=b.array;x==="JOINTS_0"&&!(E instanceof Uint16Array)&&!(E instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),v=new Ht(new Uint16Array(E),b.itemSize,b.normalized));const P=this.processAccessor(v||b,o);P!==null&&(x.startsWith("_")||this.detectMeshQuantization(x,b),u[x]=P,n.attributes.set(this.getUID(b),P))}if(p!==void 0&&o.setAttribute("normal",p),Object.keys(u).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const x=[],b=[],A={};if(e.morphTargetDictionary!==void 0)for(const E in e.morphTargetDictionary)A[e.morphTargetDictionary[E]]=E;for(let E=0;E<e.morphTargetInfluences.length;++E){const P={};let T=!1;for(const S in o.morphAttributes){if(S!=="position"&&S!=="normal"){T||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),T=!0);continue}const R=o.morphAttributes[S][E],z=S.toUpperCase(),O=o.attributes[S];if(n.attributes.has(this.getUID(R,!0))){P[z]=n.attributes.get(this.getUID(R,!0));continue}const j=R.clone();if(!o.morphTargetsRelative)for(let H=0,Y=R.count;H<Y;H++)for(let X=0;X<R.itemSize;X++)X===0&&j.setX(H,R.getX(H)-O.getX(H)),X===1&&j.setY(H,R.getY(H)-O.getY(H)),X===2&&j.setZ(H,R.getZ(H)-O.getZ(H)),X===3&&j.setW(H,R.getW(H)-O.getW(H));P[z]=this.processAccessor(j,o),n.attributes.set(this.getUID(O,!0),P[z])}f.push(P),x.push(e.morphTargetInfluences[E]),e.morphTargetDictionary!==void 0&&b.push(A[E])}l.weights=x,b.length>0&&(l.extras={},l.extras.targetNames=b)}const g=Array.isArray(e.material);if(g&&o.groups.length===0)return null;let m=!1;if(g&&o.index===null){const x=[];for(let b=0,A=o.attributes.position.count;b<A;b++)x[b]=b;o.setIndex(x),m=!0}const h=g?e.material:[e.material],_=g?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let x=0,b=_.length;x<b;x++){const A={mode:a,attributes:u};if(this.serializeUserData(o,A),f.length>0&&(A.targets=f),o.index!==null){let P=this.getUID(o.index);(_[x].start!==void 0||_[x].count!==void 0)&&(P+=":"+_[x].start+":"+_[x].count),n.attributes.has(P)?A.indices=n.attributes.get(P):(A.indices=this.processAccessor(o.index,o,_[x].start,_[x].count),n.attributes.set(P,A.indices)),A.indices===null&&delete A.indices}const E=this.processMaterial(h[_[x].materialIndex]);E!==null&&(A.material=E),c.push(A)}m===!0&&o.setIndex(null),l.primitives=c,i.meshes||(i.meshes=[]),this._invokeAll(function(x){x.writeMesh&&x.writeMesh(e,l)});const y=i.meshes.push(l)-1;return n.meshes.set(s,y),y}detectMeshQuantization(e,n){if(this.extensionsUsed[Vd])return;let i;switch(n.array.constructor){case Int8Array:i="byte";break;case Uint8Array:i="unsigned byte";break;case Int16Array:i="short";break;case Uint16Array:i="unsigned short";break;default:return}n.normalized&&(i+=" normalized");const r=e.split("_",1)[0];e_[r]&&e_[r].includes(i)&&(this.extensionsUsed[Vd]=!0,this.extensionsRequired[Vd]=!0)}processCamera(e){const n=this.json;n.cameras||(n.cameras=[]);const i=e.isOrthographicCamera,r={type:i?"orthographic":"perspective"};return i?r.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:r.perspective={aspectRatio:e.aspect,yfov:mp.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(r.name=e.type),n.cameras.push(r)-1}processAnimation(e,n){const i=this.json,r=this.nodeMap;i.animations||(i.animations=[]),e=pg.Utils.mergeMorphTargetTracks(e.clone(),n);const s=e.tracks,o=[],a=[];for(let l=0;l<s.length;++l){const u=s[l],c=Qe.parseTrackName(u.name);let f=Qe.findNode(n,c.nodeName);const d=t_[c.propertyName];if(c.objectName==="bones"&&(f.isSkinnedMesh===!0?f=f.skeleton.getBoneByName(c.objectIndex):f=void 0),!f||!d){console.warn('THREE.GLTFExporter: Could not export animation track "%s".',u.name);continue}const p=1;let v=u.values.length/u.times.length;d===t_.morphTargetInfluences&&(v/=f.morphTargetInfluences.length);let g;u.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",v/=3):u.getInterpolation()===Aw?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new Ht(u.times,p)),output:this.processAccessor(new Ht(u.values,v)),interpolation:g}),o.push({sampler:a.length-1,target:{node:r.get(f),path:d}})}return i.animations.push({name:e.name||"clip_"+i.animations.length,samplers:a,channels:o}),i.animations.length-1}processSkin(e){const n=this.json,i=this.nodeMap,r=n.nodes[i.get(e)],s=e.skeleton;if(s===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(s.bones.length*16),u=new xt;for(let f=0;f<s.bones.length;++f)a.push(i.get(s.bones[f])),u.copy(s.boneInverses[f]),u.multiply(e.bindMatrix).toArray(l,f*16);return n.skins===void 0&&(n.skins=[]),n.skins.push({inverseBindMatrices:this.processAccessor(new Ht(l,16)),joints:a,skeleton:i.get(o)}),r.skin=n.skins.length-1}processNode(e){const n=this.json,i=this.options,r=this.nodeMap;n.nodes||(n.nodes=[]);const s={};if(i.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),u=e.scale.toArray();va(a,[0,0,0,1])||(s.rotation=a),va(l,[0,0,0])||(s.translation=l),va(u,[1,1,1])||(s.scale=u)}else e.matrixAutoUpdate&&e.updateMatrix(),kN(e.matrix)===!1&&(s.matrix=e.matrix.elements);if(e.name!==""&&(s.name=String(e.name)),this.serializeUserData(e,s),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(s.mesh=a)}else e.isCamera&&(s.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,u=e.children.length;l<u;l++){const c=e.children[l];if(c.visible||i.onlyVisible===!1){const f=this.processNode(c);f!==null&&a.push(f)}}a.length>0&&(s.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,s)});const o=n.nodes.push(s)-1;return r.set(e,o),o}processScene(e){const n=this.json,i=this.options;n.scenes||(n.scenes=[],n.scene=0);const r={};e.name!==""&&(r.name=e.name),n.scenes.push(r);const s=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||i.onlyVisible===!1){const u=this.processNode(l);u!==null&&s.push(u)}}s.length>0&&(r.nodes=s),this.serializeUserData(e,r)}processObjects(e){const n=new xc;n.name="AuxScene";for(let i=0;i<e.length;i++)n.children.push(e[i]);this.processScene(n)}processInput(e){const n=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(r){r.beforeParse&&r.beforeParse(e)});const i=[];for(let r=0;r<e.length;r++)e[r]instanceof xc?this.processScene(e[r]):i.push(e[r]);i.length>0&&this.processObjects(i);for(let r=0;r<this.skins.length;++r)this.processSkin(this.skins[r]);for(let r=0;r<n.animations.length;++r)this.processAnimation(n.animations[r],e[0]);this._invokeAll(function(r){r.afterParse&&r.afterParse(e)})}_invokeAll(e){for(let n=0,i=this.plugins.length;n<i;n++)e(this.plugins[n])}}class HN{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,n){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const i=this.writer,r=i.json,s=i.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),s[this.name]||(r.extensions=r.extensions||{},r.extensions[this.name]={lights:[]},s[this.name]=!0);const a=r.extensions[this.name].lights;a.push(o),n.extensions=n.extensions||{},n.extensions[this.name]={light:a.length-1}}}class VN{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,n){if(!e.isMeshBasicMaterial)return;const r=this.writer.extensionsUsed;n.extensions=n.extensions||{},n.extensions[this.name]={},r[this.name]=!0,n.pbrMetallicRoughness.metallicFactor=0,n.pbrMetallicRoughness.roughnessFactor=.9}}class GN{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const i=this.writer,r=i.extensionsUsed,s={};if(s.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:i.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};i.applyTextureTransform(o,e.clearcoatMap),s.clearcoatTexture=o}if(s.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:i.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};i.applyTextureTransform(o,e.clearcoatRoughnessMap),s.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:i.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};e.clearcoatNormalScale.x!==1&&(o.scale=e.clearcoatNormalScale.x),i.applyTextureTransform(o,e.clearcoatNormalMap),s.clearcoatNormalTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class WN{constructor(e){this.writer=e,this.name="KHR_materials_dispersion"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.dispersion===0)return;const r=this.writer.extensionsUsed,s={};s.dispersion=e.dispersion,n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class $N{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const i=this.writer,r=i.extensionsUsed,s={};if(s.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:i.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};i.applyTextureTransform(o,e.iridescenceMap),s.iridescenceTexture=o}if(s.iridescenceIor=e.iridescenceIOR,s.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],s.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:i.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};i.applyTextureTransform(o,e.iridescenceThicknessMap),s.iridescenceThicknessTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class XN{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,r=i.extensionsUsed,s={};if(s.transmissionFactor=e.transmission,e.transmissionMap){const o={index:i.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};i.applyTextureTransform(o,e.transmissionMap),s.transmissionTexture=o}n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class jN{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const i=this.writer,r=i.extensionsUsed,s={};if(s.thicknessFactor=e.thickness,e.thicknessMap){const o={index:i.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};i.applyTextureTransform(o,e.thicknessMap),s.thicknessTexture=o}s.attenuationDistance=e.attenuationDistance,s.attenuationColor=e.attenuationColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class YN{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const r=this.writer.extensionsUsed,s={};s.ior=e.ior,n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class qN{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(IN)&&!e.specularIntensityMap&&!e.specularColorMap)return;const i=this.writer,r=i.extensionsUsed,s={};if(e.specularIntensityMap){const o={index:i.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};i.applyTextureTransform(o,e.specularIntensityMap),s.specularTexture=o}if(e.specularColorMap){const o={index:i.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};i.applyTextureTransform(o,e.specularColorMap),s.specularColorTexture=o}s.specularFactor=e.specularIntensity,s.specularColorFactor=e.specularColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class KN{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const i=this.writer,r=i.extensionsUsed,s={};if(e.sheenRoughnessMap){const o={index:i.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};i.applyTextureTransform(o,e.sheenRoughnessMap),s.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:i.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};i.applyTextureTransform(o,e.sheenColorMap),s.sheenColorTexture=o}s.sheenRoughnessFactor=e.sheenRoughness,s.sheenColorFactor=e.sheenColor.toArray(),n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class ZN{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,n){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const i=this.writer,r=i.extensionsUsed,s={};if(e.anisotropyMap){const o={index:i.processTexture(e.anisotropyMap)};i.applyTextureTransform(o,e.anisotropyMap),s.anisotropyTexture=o}s.anisotropyStrength=e.anisotropy,s.anisotropyRotation=e.anisotropyRotation,n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class QN{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,n){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const r=this.writer.extensionsUsed,s={};s.emissiveStrength=e.emissiveIntensity,n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class JN{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,n){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const i=this.writer,r=i.extensionsUsed,s={};if(e.bumpMap){const o={index:i.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};i.applyTextureTransform(o,e.bumpMap),s.bumpTexture=o}s.bumpFactor=e.bumpScale,n.extensions=n.extensions||{},n.extensions[this.name]=s,r[this.name]=!0}}class eD{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,n){if(!e.isInstancedMesh)return;const i=this.writer,r=e,s=new Float32Array(r.count*3),o=new Float32Array(r.count*4),a=new Float32Array(r.count*3),l=new xt,u=new k,c=new Vo,f=new k;for(let p=0;p<r.count;p++)r.getMatrixAt(p,l),l.decompose(u,c,f),u.toArray(s,p*3),c.toArray(o,p*4),f.toArray(a,p*3);const d={TRANSLATION:i.processAccessor(new Ht(s,3)),ROTATION:i.processAccessor(new Ht(o,4)),SCALE:i.processAccessor(new Ht(a,3))};r.instanceColor&&(d._COLOR_0=i.processAccessor(r.instanceColor)),n.extensions=n.extensions||{},n.extensions[this.name]={attributes:d},i.extensionsUsed[this.name]=!0,i.extensionsRequired[this.name]=!0}}pg.Utils={insertKeyframe:function(t,e){const i=t.getValueSize(),r=new t.TimeBufferType(t.times.length+1),s=new t.ValueBufferType(t.values.length+i),o=t.createInterpolant(new t.ValueBufferType(i));let a;if(t.times.length===0){r[0]=e;for(let l=0;l<i;l++)s[l]=0;a=0}else if(e<t.times[0]){if(Math.abs(t.times[0]-e)<.001)return 0;r[0]=e,r.set(t.times,1),s.set(o.evaluate(e),0),s.set(t.values,i),a=0}else if(e>t.times[t.times.length-1]){if(Math.abs(t.times[t.times.length-1]-e)<.001)return t.times.length-1;r[r.length-1]=e,r.set(t.times,0),s.set(t.values,0),s.set(o.evaluate(e),t.values.length),a=r.length-1}else for(let l=0;l<t.times.length;l++){if(Math.abs(t.times[l]-e)<.001)return l;if(t.times[l]<e&&t.times[l+1]>e){r.set(t.times.slice(0,l+1),0),r[l+1]=e,r.set(t.times.slice(l+1),l+2),s.set(t.values.slice(0,(l+1)*i),0),s.set(o.evaluate(e),(l+1)*i),s.set(t.values.slice((l+1)*i),(l+2)*i),a=l+1;break}}return t.times=r,t.values=s,a},mergeMorphTargetTracks:function(t,e){const n=[],i={},r=t.tracks;for(let s=0;s<r.length;++s){let o=r[s];const a=Qe.parseTrackName(o.name),l=Qe.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){n.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(bw)}const u=l.morphTargetInfluences.length,c=l.morphTargetDictionary[a.propertyIndex];if(c===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let f;if(i[l.uuid]===void 0){f=o.clone();const p=new f.ValueBufferType(u*f.times.length);for(let v=0;v<f.times.length;v++)p[v*u+c]=f.values[v];f.name=(a.nodeName||"")+".morphTargetInfluences",f.values=p,i[l.uuid]=f,n.push(f);continue}const d=o.createInterpolant(new o.ValueBufferType(1));f=i[l.uuid];for(let p=0;p<f.times.length;p++)f.values[p*u+c]=d.evaluate(f.times[p]);for(let p=0;p<o.times.length;p++){const v=this.insertKeyframe(f,o.times[p]);f.values[v*u+c]=o.values[p]}}return t.tracks=n,t}};const uM={KeyA:"strafeLeft",KeyD:"strafeRight",KeyW:"forward",KeyS:"back",KeyE:"up",KeyQ:"down",ShiftLeft:"run"},tD=Object.keys(uM);function nD(t){return tD.includes(t)}class iD{constructor(){ve(this,"intention",{forward:!1,back:!1,strafeLeft:!1,strafeRight:!1,up:!1,down:!1,run:!1});ve(this,"onKeyDown",e=>{this.changeIntention(e.code,!0)});ve(this,"onKeyUp",e=>{this.changeIntention(e.code,!1)});window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}changeIntention(e,n){nD(e)&&(this.intention[uM[e]]=n)}}const o_=new k(0,0,-1),a_=new k;class rD{constructor(e,n,i=1){ve(this,"lastMouseX",null);ve(this,"lastMouseY",null);ve(this,"keyNav");ve(this,"movement",new k);ve(this,"touchMovementIntention",new k);ve(this,"movementEased",new k);ve(this,"movementEasedRotated",new k);ve(this,"mouseDown",!1);ve(this,"touchesJobs",new Map);ve(this,"touchesDown",new Map);ve(this,"lastTouchesX",new Map);ve(this,"lastTouchesY",new Map);ve(this,"paused",!1);ve(this,"onWheel",e=>{if(this.paused)return;const n=1+e.deltaY*.001;this.adjustZoom(n,e.clientX,e.clientY)});ve(this,"onMouseDown",e=>{this.paused||(this.mouseDown=!0,this.lastMouseX=e.clientX,this.lastMouseY=e.clientY,window.addEventListener("mousemove",this.onMouseMove))});ve(this,"onTouchStart",e=>{if(!this.paused)for(const n of e.touches){const i=n.identifier;this.touchesDown.set(i,!0),this.lastTouchesX.set(i,n.clientX),this.lastTouchesY.set(i,n.clientY),n.clientX<window.innerWidth*.15||n.clientX>window.innerWidth*.85?this.touchesJobs.set(i,"fly"):n.clientY>window.innerHeight*.5?this.touchesJobs.set(i,"move"):this.touchesJobs.set(i,"look")}});ve(this,"onMouseUp",()=>{this.paused||(this.mouseDown=!1,this.lastMouseX=null,this.lastMouseY=null,window.removeEventListener("mousemove",this.onMouseMove))});ve(this,"onTouchEnd",e=>{if(this.paused)return;const n=Array.from(this.touchesDown.keys()),i=[];for(const r of e.touches){const s=r.identifier;i.push(s)}for(const r of n)if(!i.includes(r)){switch(this.touchesDown.delete(r),this.touchesJobs.get(r)){case"move":{this.touchMovementIntention.x=0,this.touchMovementIntention.z=0;break}case"fly":{this.touchMovementIntention.y=0;break}}this.touchesJobs.delete(r),this.lastTouchesX.delete(r),this.lastTouchesY.delete(r)}});ve(this,"onMouseMove",e=>{if(!this.paused){if(this.lastMouseX!==null&&this.lastMouseY!==null){const n=e.clientX-this.lastMouseX,i=e.clientY-this.lastMouseY;this.panCamera(n,i)}this.lastMouseX=e.clientX,this.lastMouseY=e.clientY}});ve(this,"onTouchMove",e=>{if(!this.paused)for(const n of e.touches){const i=n.identifier;if(this.touchesDown.has(i)&&this.lastTouchesX.has(i)&&this.lastTouchesY.has(i)){const r=n.clientX-this.lastTouchesX.get(i),s=n.clientY-this.lastTouchesY.get(i);switch(this.lastTouchesX.set(i,n.clientX),this.lastTouchesY.set(i,n.clientY),this.touchesJobs.get(i)){case"look":{this.panCamera(r,s);break}case"move":{this.touchMovementIntention.x+=r,this.touchMovementIntention.z+=s;break}case"fly":{this.touchMovementIntention.y-=s;break}}}}});this._camera=e,this._canvas=n,this._speed=i,this.keyNav=new iD,this.adjustZoom(1,0,0),n.addEventListener("mousedown",this.onMouseDown),n.addEventListener("touchstart",this.onTouchStart),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onTouchEnd),document.addEventListener("mouseup",this.onMouseUp),document.addEventListener("wheel",this.onWheel)}stopLookingAround(){this.onMouseUp()}adjustZoom(e,n,i){const r=this._camera,s=r.right-r.left,o=r.left+s*n/window.innerWidth;r.left-=o,r.left*=e,r.left+=o,r.right-=o,r.right*=e,r.right+=o;const a=r.top-r.bottom,l=r.top-a*i/window.innerHeight;r.bottom-=l,r.bottom*=e,r.bottom+=l,r.top-=l,r.top*=e,r.top+=l;const u=a*.5;r.near=-u*.99,r.far=u*200,r.position.z=-u,r.updateMatrixWorld(),this._camera.updateProjectionMatrix()}panCamera(e,n){const i=this._camera,r=e/window.innerWidth*(i.right-i.left);i.left-=r,i.right-=r;const s=n/window.innerHeight*(i.top-i.bottom);i.top+=s,i.bottom+=s,i.updateProjectionMatrix()}simulate(){const e=this.keyNav.intention;this.movement.x=(e.strafeLeft?-1:0)+(e.strafeRight?1:0),this.movement.y=(e.down?-1:0)+(e.up?1:0),this.movement.z=(e.forward?-1:0)+(e.back?1:0),a_.copy(this.touchMovementIntention).normalize(),this.movement.add(a_),this.movement.multiplyScalar((e.run?.2:.1)*this._speed),this.movementEased.lerp(this.movement,.1),this.movementEasedRotated.copy(this.movementEased).applyQuaternion(this._camera.quaternion),this._camera.position.add(this.movementEasedRotated),this._camera.updateMatrix(),o_.set(0,0,-1).applyMatrix4(this._camera.matrix),this._camera.lookAt(o_),this._camera.updateMatrix(),this._camera.updateMatrixWorld()}cleanup(){this._canvas.removeEventListener("mousedown",this.onMouseDown),this._canvas.removeEventListener("touchstart",this.onTouchStart),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onTouchEnd),document.removeEventListener("mouseup",this.onMouseUp),document.removeEventListener("wheel",this.onWheel)}}const l_=new Ze,u_=new Ze,sD=new Map;for(let t=-1;t<=1;t++)for(let e=-1;e<=1;e++)for(let n=-1;n<=1;n++)if(Math.abs(n)===1||Math.abs(e)===1||Math.abs(t)===1){const i=new k(n,e,t).normalize(),r=t*100+e*10+n;sD.set(r,i)}class oD{constructor(e,n,i){ve(this,"mvPlayerPos");ve(this,"viewControls");ve(this,"playerIntentSignal",new QS);ve(this,"lastTimeClicked",0);ve(this,"editting",!1);ve(this,"startWorldEdit",e=>{const n=e.timeStamp-this.lastTimeClicked;this.lastTimeClicked=e.timeStamp,!(n>300)&&(this.editting=!0,this.viewControls.stopLookingAround(),this.makeCubeAtMouseEvent(e,"editStart"))});ve(this,"raycaster",new SP);ve(this,"onMoveWorldEdit",e=>{this.editting&&this.makeCubeAtMouseEvent(e,"editMove")});ve(this,"stopWorldEdit",e=>{this.editting&&(this.editting=!1,this.makeCubeAtMouseEvent(e,"editEnd"))});ve(this,"time",0);ve(this,"simulate",e=>{this.time+=e,this.viewControls.simulate()});ve(this,"cleanup",()=>{document.removeEventListener("mousedown",this.startWorldEdit),document.removeEventListener("mousemove",this.onMoveWorldEdit),document.removeEventListener("mouseup",this.stopWorldEdit),this.viewControls.cleanup()});this._game=e,this._camera=n,n.name="player",this.viewControls=new rD(n,i,.8);const r=new k;this.mvPlayerPos=r,document.addEventListener("mousedown",this.startWorldEdit),document.addEventListener("mousemove",this.onMoveWorldEdit),document.addEventListener("mouseup",this.stopWorldEdit)}makeCubeAtMouseEvent(e,n){l_.set(e.clientX/window.innerWidth*2-1,e.clientY/window.innerHeight*-2+1),u_.set(e.clientX,e.clientY),this.raycaster.setFromCamera(l_,this._camera);const i=this.raycaster.ray.origin.clone().add(this.raycaster.ray.direction);this.playerIntentSignal.emit({intent:n,position:i,screenPos:u_})}}function Xn(t){return t*(.5-Math.random())}const La=document.createElement("a");La.style.display="none";document.body.appendChild(La);function aD(t,e){La.href=URL.createObjectURL(t),La.download=e,La.click()}function lD(t,e){aD(new Blob([t],{type:"application/octet-stream"}),e)}const uD=new xt,Zr=new k;class cD{constructor(e,n,i){ve(this,"worldContainer");ve(this,"_paused",!1);ve(this,"_player");ve(this,"onKeyDown",e=>{e.code==="KeyX"&&(console.log("export"),new pg().parse(this.pivot.parent,i=>{i instanceof ArrayBuffer&&lD(i,"test.glb")},i=>{console.error(i)},{binary:!0}))});ve(this,"oldCubes",[]);ve(this,"currentInvMat",new xt);ve(this,"currentMesh");ve(this,"currentGeo");ve(this,"lastScreenPos",new Ze);ve(this,"ribbonMaterial",new km({vertexColors:!0}));ve(this,"color",new Je);ve(this,"onPlayerIntent",e=>{var a;const i=e.position,r=e.screenPos,s=(this.camera.top-this.camera.bottom)*.1,o=this.color;switch(e.intent){case"editStart":{o.set(Math.random(),Math.random(),Math.random()),o.convertSRGBToLinear();const l=new sr;this.currentGeo=l;const u=new Float32Array(2**16);u[0]=0,u[1]=0,u[2]=0,u[6]=0,u[7]=0,u[8]=0,u[12]=0,u[13]=0,u[14]=0,u[3]=o.r*(1+Xn(1)),u[4]=o.g*(1+Xn(1)),u[5]=o.b*(1+Xn(1)),u[9]=o.r*(1+Xn(1)),u[10]=o.g*(1+Xn(1)),u[11]=o.b*(1+Xn(1)),u[15]=o.r*(1+Xn(1)),u[16]=o.g*(1+Xn(1)),u[17]=o.b*(1+Xn(1));const c=new Mv(u,6);l.attributes.position=new co(c,3,0),l.attributes.color=new co(c,3,3);const f=new Uint16Array(2**16);f[0]=0,f[1]=1,f[2]=2,l.drawRange.count=3,l.setIndex(new Ht(f,1));const d=new yi(l,this.ribbonMaterial);d.scale.set(s,s,1),d.position.copy(i),d.position.z=this.camera.position.z,this.lastScreenPos.copy(r),this.addStatic(d),this.currentInvMat.copy(d.matrixWorld).invert(),this.oldCubes.push(d),this.currentMesh=d;break}case"editMove":{if(!this.currentGeo||this.lastScreenPos.distanceTo(r)<10)return;const l=this.currentGeo.attributes.position.data,u=this.currentGeo.drawRange.count,c=u/3+2,f=c*6,d=l.array,p=c%2===0?-1:1,v=Math.atan2(this.lastScreenPos.y-r.y,r.x-this.lastScreenPos.x)+p*Math.PI*.5;Zr.copy(i),Zr.x+=Math.cos(v)*s,Zr.y+=Math.sin(v)*s,Zr.applyMatrix4(this.currentInvMat),d[f+0]=Zr.x,d[f+1]=Zr.y,d[f+2]=0,d[f+3]=o.r*(1+Xn(1)),d[f+4]=o.g*(1+Xn(1)),d[f+5]=o.b*(1+Xn(1)),l.addUpdateRange(f,6),l.needsUpdate=!0,this.currentGeo.drawRange.count=u+3;const g=this.currentGeo.getIndex(),m=g.array;p===1?(m[u]=c-2,m[u+1]=c-1):(m[u+1]=c-2,m[u]=c-1),m[u+2]=c,g.addUpdateRange(u,3),g.needsUpdate=!0,(a=this.currentGeo.boundingBox)==null||a.expandByPoint(Zr),this.currentGeo.computeBoundingSphere(),this.lastScreenPos.copy(r);break}case"editEnd":{if(!this.currentMesh||!this.currentGeo)return;const l=this.currentMesh,u=this.currentGeo,c=new sr;c.setIndex(new zm(u.getIndex().array.slice(0,u.drawRange.count),1));const f=u.attributes.position.data.array.slice(0,(u.drawRange.count/3+2)*6),d=new Mv(f,6);c.attributes.position=new co(d,3,0),c.attributes.color=new co(d,3,3),l.geometry=c;break}}});ve(this,"simulate",e=>{this._paused||this._player.simulate(e)});ve(this,"cleanup",()=>{this._player.cleanup()});this.pivot=e,this.camera=n;const r=new mn;this.worldContainer=r,this.pivot.add(r),this._player=new oD(this,n,i.domElement),this._player.playerIntentSignal.listen(this.onPlayerIntent),window.addEventListener("keydown",this.onKeyDown)}get paused(){return this._paused}set paused(e){this._paused=e,this._player.viewControls.paused=e}addStatic(e){this.worldContainer.add(e),e.updateMatrixWorld()}removeStatic(e){this.worldContainer.remove(e)}render(){this._paused||(performance.now()*.001,this._player.mvPlayerPos.copy(this.camera.position).applyMatrix4(uD))}}function fD(t,e){function n(){const i=window.innerWidth/window.innerHeight;for(const r of t){const o=(r.top-r.bottom)*.5*i;r.left=-o,r.right=o,r.updateProjectionMatrix()}e.setSize(window.innerWidth,window.innerHeight)}window.addEventListener("resize",n),n()}let Wd;function Ip(){if(!Wd){let t=function(){a.setPixelRatio(wo.finalDevicePixelRatio.value),a.setSize(window.innerWidth,window.innerHeight,!1)},e=function(){const p=performance.now();for(;u<p;)l&&l(.016666666666666666),u+=16.666666666666668},n=function(){a.clearColor(),a.render(i,o),a.clearDepth(),f.render()};const i=new xc;i.matrixAutoUpdate=!1,i.matrixWorldAutoUpdate=!1;const r=1920*.5,s=1080*.5,o=new Yx(-r,r,s,-s,-1e4,1e4);i.add(o),i.background=new Je(5609898),o.updateMatrixWorld();const a=new eS({logarithmicDepthBuffer:!0});a.autoClear=!1,a.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(a.domElement);for(const p of["-moz-crisp-edges","-webkit-crisp-edges","crisp-edges","pixelated"])a.domElement.style.setProperty("image-rendering",p);wo.finalDevicePixelRatio.listen(t),wo.onSizeChange(t);let l,u=performance.now();setInterval(e,10),a.setAnimationLoop(n),fD([o],a);const c=new mn;i.add(c);let f=new cD(c,o,a);const d={renderer:a,game:f};l=f.simulate,Wd=d}return Wd}function dD(){const[t,e]=Te.useState(!1);return Ip().renderer.domElement.className=t?"blur":"",Fe.jsxs("div",{className:`${t?"settingsOpen":"settingsClosed"} panel`,children:[Fe.jsx(bP,{open:t,onClick:()=>{e(!t),Ip().game.paused=!t}}),t&&Fe.jsx(LN,{})]})}function hD(t,e){localStorage.setItem(t,e.toString())}function pD(t,e=0){const n=localStorage.getItem(t);return n?parseFloat(n):e}function mD(){function t(a,l=0){const u=`color-${a}`,[c,f]=Te.useState(pD(u,l));return[c,p=>{f(p);const v=p.valueOf();typeof v=="number"&&(hD(u,v),console.log(v))}]}const[e,n]=t("hue"),[i,r]=t("saturation"),[s,o]=t("value");return Fe.jsxs(Fe.Fragment,{children:[Fe.jsx(dD,{}),Fe.jsx(Pd,{type:"h",hue:e,saturation:i,luminosity:s,setVal:n}),Fe.jsx(Pd,{type:"s",hue:e,saturation:i,luminosity:s,setVal:r}),Fe.jsx(Pd,{type:"l",hue:e,saturation:i,luminosity:s,setVal:o})]})}const gD=$d.createRoot(document.getElementById("root"));gD.render(Fe.jsx(x_.StrictMode,{children:Fe.jsx(mD,{})}));Ip();
//# sourceMappingURL=index-Bww2UoBr.js.map
