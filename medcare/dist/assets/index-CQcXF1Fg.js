function hb(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function w1(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var E1={exports:{}},dc={},S1={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ya=Symbol.for("react.element"),pb=Symbol.for("react.portal"),mb=Symbol.for("react.fragment"),gb=Symbol.for("react.strict_mode"),vb=Symbol.for("react.profiler"),yb=Symbol.for("react.provider"),_b=Symbol.for("react.context"),wb=Symbol.for("react.forward_ref"),Eb=Symbol.for("react.suspense"),Sb=Symbol.for("react.memo"),Ib=Symbol.for("react.lazy"),Kg=Symbol.iterator;function Tb(t){return t===null||typeof t!="object"?null:(t=Kg&&t[Kg]||t["@@iterator"],typeof t=="function"?t:null)}var I1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T1=Object.assign,b1={};function Co(t,e,n){this.props=t,this.context=e,this.refs=b1,this.updater=n||I1}Co.prototype.isReactComponent={};Co.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Co.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function C1(){}C1.prototype=Co.prototype;function Ep(t,e,n){this.props=t,this.context=e,this.refs=b1,this.updater=n||I1}var Sp=Ep.prototype=new C1;Sp.constructor=Ep;T1(Sp,Co.prototype);Sp.isPureReactComponent=!0;var qg=Array.isArray,k1=Object.prototype.hasOwnProperty,Ip={current:null},P1={key:!0,ref:!0,__self:!0,__source:!0};function A1(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)k1.call(e,r)&&!P1.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ya,type:t,key:o,ref:s,props:i,_owner:Ip.current}}function bb(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function Cb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yg=/\/+/g;function Tf(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cb(""+t.key):e.toString(36)}function Dl(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case ya:case pb:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Tf(s,0):r,qg(i)?(n="",t!=null&&(n=t.replace(Yg,"$&/")+"/"),Dl(i,e,n,"",function(u){return u})):i!=null&&(Tp(i)&&(i=bb(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Yg,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",qg(t))for(var l=0;l<t.length;l++){o=t[l];var a=r+Tf(o,l);s+=Dl(o,e,n,a,i)}else if(a=Tb(t),typeof a=="function")for(t=a.call(t),l=0;!(o=t.next()).done;)o=o.value,a=r+Tf(o,l++),s+=Dl(o,e,n,a,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Ka(t,e,n){if(t==null)return t;var r=[],i=0;return Dl(t,r,"","",function(o){return e.call(n,o,i++)}),r}function kb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _t={current:null},Ml={transition:null},Pb={ReactCurrentDispatcher:_t,ReactCurrentBatchConfig:Ml,ReactCurrentOwner:Ip};Y.Children={map:Ka,forEach:function(t,e,n){Ka(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ka(t,function(){e++}),e},toArray:function(t){return Ka(t,function(e){return e})||[]},only:function(t){if(!Tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=Co;Y.Fragment=mb;Y.Profiler=vb;Y.PureComponent=Ep;Y.StrictMode=gb;Y.Suspense=Eb;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pb;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=T1({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ip.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)k1.call(e,a)&&!P1.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ya,type:t.type,key:i,ref:o,props:r,_owner:s}};Y.createContext=function(t){return t={$$typeof:_b,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:yb,_context:t},t.Consumer=t};Y.createElement=A1;Y.createFactory=function(t){var e=A1.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:wb,render:t}};Y.isValidElement=Tp;Y.lazy=function(t){return{$$typeof:Ib,_payload:{_status:-1,_result:t},_init:kb}};Y.memo=function(t,e){return{$$typeof:Sb,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=Ml.transition;Ml.transition={};try{t()}finally{Ml.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return _t.current.useCallback(t,e)};Y.useContext=function(t){return _t.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return _t.current.useDeferredValue(t)};Y.useEffect=function(t,e){return _t.current.useEffect(t,e)};Y.useId=function(){return _t.current.useId()};Y.useImperativeHandle=function(t,e,n){return _t.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return _t.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return _t.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return _t.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return _t.current.useReducer(t,e,n)};Y.useRef=function(t){return _t.current.useRef(t)};Y.useState=function(t){return _t.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return _t.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return _t.current.useTransition()};Y.version="18.2.0";S1.exports=Y;var E=S1.exports;const _n=w1(E),Pd=hb({__proto__:null,default:_n},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ab=E,Rb=Symbol.for("react.element"),xb=Symbol.for("react.fragment"),Ob=Object.prototype.hasOwnProperty,Nb=Ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Db={key:!0,ref:!0,__self:!0,__source:!0};function R1(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)Ob.call(e,r)&&!Db.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Rb,type:t,key:o,ref:s,props:i,_owner:Nb.current}}dc.Fragment=xb;dc.jsx=R1;dc.jsxs=R1;E1.exports=dc;var S=E1.exports,Ad={},x1={exports:{}},Lt={},O1={exports:{}},N1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(R,U){var H=R.length;R.push(U);e:for(;0<H;){var se=H-1>>>1,q=R[se];if(0<i(q,U))R[se]=U,R[H]=q,H=se;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var U=R[0],H=R.pop();if(H!==U){R[0]=H;e:for(var se=0,q=R.length,Fe=q>>>1;se<Fe;){var qe=2*(se+1)-1,jt=R[qe],De=qe+1,At=R[De];if(0>i(jt,H))De<q&&0>i(At,jt)?(R[se]=At,R[De]=H,se=De):(R[se]=jt,R[qe]=H,se=qe);else if(De<q&&0>i(At,H))R[se]=At,R[De]=H,se=De;else break e}}return U}function i(R,U){var H=R.sortIndex-U.sortIndex;return H!==0?H:R.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,f=null,d=3,m=!1,y=!1,v=!1,_=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(R){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=R)r(u),U.sortIndex=U.expirationTime,e(a,U);else break;U=n(u)}}function w(R){if(v=!1,g(R),!y)if(n(a)!==null)y=!0,ge(I);else{var U=n(u);U!==null&&Et(w,U.startTime-R)}}function I(R,U){y=!1,v&&(v=!1,h(C),C=-1),m=!0;var H=d;try{for(g(U),f=n(a);f!==null&&(!(f.expirationTime>U)||R&&!oe());){var se=f.callback;if(typeof se=="function"){f.callback=null,d=f.priorityLevel;var q=se(f.expirationTime<=U);U=t.unstable_now(),typeof q=="function"?f.callback=q:f===n(a)&&r(a),g(U)}else r(a);f=n(a)}if(f!==null)var Fe=!0;else{var qe=n(u);qe!==null&&Et(w,qe.startTime-U),Fe=!1}return Fe}finally{f=null,d=H,m=!1}}var b=!1,T=null,C=-1,L=5,V=-1;function oe(){return!(t.unstable_now()-V<L)}function Ee(){if(T!==null){var R=t.unstable_now();V=R;var U=!0;try{U=T(!0,R)}finally{U?mt():(b=!1,T=null)}}else b=!1}var mt;if(typeof p=="function")mt=function(){p(Ee)};else if(typeof MessageChannel<"u"){var Ut=new MessageChannel,ke=Ut.port2;Ut.port1.onmessage=Ee,mt=function(){ke.postMessage(null)}}else mt=function(){_(Ee,0)};function ge(R){T=R,b||(b=!0,mt())}function Et(R,U){C=_(function(){R(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(R){R.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ge(I))},t.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<R?Math.floor(1e3/R):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(R){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var H=d;d=U;try{return R()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(R,U){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var H=d;d=R;try{return U()}finally{d=H}},t.unstable_scheduleCallback=function(R,U,H){var se=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?se+H:se):H=se,R){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=H+q,R={id:c++,callback:U,priorityLevel:R,startTime:H,expirationTime:q,sortIndex:-1},H>se?(R.sortIndex=H,e(u,R),n(a)===null&&R===n(u)&&(v?(h(C),C=-1):v=!0,Et(w,H-se))):(R.sortIndex=q,e(a,R),y||m||(y=!0,ge(I))),R},t.unstable_shouldYield=oe,t.unstable_wrapCallback=function(R){var U=d;return function(){var H=d;d=U;try{return R.apply(this,arguments)}finally{d=H}}}})(N1);O1.exports=N1;var Mb=O1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D1=E,Dt=Mb;function P(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M1=new Set,ks={};function Si(t,e){lo(t,e),lo(t+"Capture",e)}function lo(t,e){for(ks[t]=e,t=0;t<e.length;t++)M1.add(e[t])}var $n=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rd=Object.prototype.hasOwnProperty,Lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Qg={},Xg={};function Vb(t){return Rd.call(Xg,t)?!0:Rd.call(Qg,t)?!1:Lb.test(t)?Xg[t]=!0:(Qg[t]=!0,!1)}function Fb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $b(t,e,n,r){if(e===null||typeof e>"u"||Fb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function wt(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var rt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rt[t]=new wt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rt[e]=new wt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rt[t]=new wt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rt[t]=new wt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rt[t]=new wt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rt[t]=new wt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rt[t]=new wt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rt[t]=new wt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rt[t]=new wt(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Cp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Cp);rt[e]=new wt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Cp);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Cp);rt[e]=new wt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!1,!1)});rt.xlinkHref=new wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rt[t]=new wt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kp(t,e,n,r){var i=rt.hasOwnProperty(e)?rt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($b(e,n,i,r)&&(n=null),r||i===null?Vb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=D1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qa=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),Di=Symbol.for("react.fragment"),Pp=Symbol.for("react.strict_mode"),xd=Symbol.for("react.profiler"),L1=Symbol.for("react.provider"),V1=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),Od=Symbol.for("react.suspense"),Nd=Symbol.for("react.suspense_list"),Rp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),F1=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function $o(t){return t===null||typeof t!="object"?null:(t=Jg&&t[Jg]||t["@@iterator"],typeof t=="function"?t:null)}var we=Object.assign,bf;function Zo(t){if(bf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bf=e&&e[1]||""}return`
`+bf+t}var Cf=!1;function kf(t,e){if(!t||Cf)return"";Cf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var a=`
`+i[s].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=s&&0<=l);break}}}finally{Cf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function Ub(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=kf(t.type,!1),t;case 11:return t=kf(t.type.render,!1),t;case 1:return t=kf(t.type,!0),t;default:return""}}function Dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Di:return"Fragment";case Ni:return"Portal";case xd:return"Profiler";case Pp:return"StrictMode";case Od:return"Suspense";case Nd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V1:return(t.displayName||"Context")+".Consumer";case L1:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Rp:return e=t.displayName||null,e!==null?e:Dd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return Dd(t(e))}catch{}}return null}function jb(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Dd(e);case 8:return e===Pp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $1(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function zb(t){var e=$1(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ya(t){t._valueTracker||(t._valueTracker=zb(t))}function U1(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=$1(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function iu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return we({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Zg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function j1(t,e){e=e.checked,e!=null&&kp(t,"checked",e,!1)}function Ld(t,e){j1(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Vd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Vd(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ev(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Vd(t,e,n){(e!=="number"||iu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var es=Array.isArray;function Qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Fd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(P(91));return we({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tv(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(P(92));if(es(n)){if(1<n.length)throw Error(P(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function z1(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function nv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function B1(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $d(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?B1(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,H1=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ps(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Bb=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){Bb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function W1(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function G1(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=W1(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Hb=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(Hb[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(P(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(P(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(P(61))}if(e.style!=null&&typeof e.style!="object")throw Error(P(62))}}function jd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zd=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,Xi=null,Ji=null;function rv(t){if(t=Ea(t)){if(typeof Bd!="function")throw Error(P(280));var e=t.stateNode;e&&(e=vc(e),Bd(t.stateNode,t.type,e))}}function K1(t){Xi?Ji?Ji.push(t):Ji=[t]:Xi=t}function q1(){if(Xi){var t=Xi,e=Ji;if(Ji=Xi=null,rv(t),e)for(t=0;t<e.length;t++)rv(e[t])}}function Y1(t,e){return t(e)}function Q1(){}var Pf=!1;function X1(t,e,n){if(Pf)return t(e,n);Pf=!0;try{return Y1(t,e,n)}finally{Pf=!1,(Xi!==null||Ji!==null)&&(Q1(),q1())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var r=vc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(P(231,e,typeof n));return n}var Hd=!1;if($n)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Hd=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Hd=!1}function Wb(t,e,n,r,i,o,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var cs=!1,ou=null,su=!1,Wd=null,Gb={onError:function(t){cs=!0,ou=t}};function Kb(t,e,n,r,i,o,s,l,a){cs=!1,ou=null,Wb.apply(Gb,arguments)}function qb(t,e,n,r,i,o,s,l,a){if(Kb.apply(this,arguments),cs){if(cs){var u=ou;cs=!1,ou=null}else throw Error(P(198));su||(su=!0,Wd=u)}}function Ii(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function J1(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function iv(t){if(Ii(t)!==t)throw Error(P(188))}function Yb(t){var e=t.alternate;if(!e){if(e=Ii(t),e===null)throw Error(P(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return iv(i),t;if(o===r)return iv(i),e;o=o.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?t:e}function Z1(t){return t=Yb(t),t!==null?e_(t):null}function e_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=e_(t);if(e!==null)return e;t=t.sibling}return null}var t_=Dt.unstable_scheduleCallback,ov=Dt.unstable_cancelCallback,Qb=Dt.unstable_shouldYield,Xb=Dt.unstable_requestPaint,Ce=Dt.unstable_now,Jb=Dt.unstable_getCurrentPriorityLevel,Op=Dt.unstable_ImmediatePriority,n_=Dt.unstable_UserBlockingPriority,au=Dt.unstable_NormalPriority,Zb=Dt.unstable_LowPriority,r_=Dt.unstable_IdlePriority,hc=null,wn=null;function eC(t){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(hc,t,void 0,(t.current.flags&128)===128)}catch{}}var on=Math.clz32?Math.clz32:rC,tC=Math.log,nC=Math.LN2;function rC(t){return t>>>=0,t===0?32:31-(tC(t)/nC|0)|0}var Xa=64,Ja=4194304;function ts(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function lu(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=ts(l):(o&=s,o!==0&&(r=ts(o)))}else s=n&~i,s!==0?r=ts(s):o!==0&&(r=ts(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-on(e),i=1<<n,r|=t[n],e&=~i;return r}function iC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function oC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-on(o),l=1<<s,a=i[s];a===-1?(!(l&n)||l&r)&&(i[s]=iC(l,e)):a<=e&&(t.expiredLanes|=l),o&=~l}}function Gd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i_(){var t=Xa;return Xa<<=1,!(Xa&4194240)&&(Xa=64),t}function Af(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _a(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-on(e),t[e]=n}function sC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-on(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Np(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-on(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function o_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s_,Dp,a_,l_,u_,Kd=!1,Za=[],gr=null,vr=null,yr=null,Rs=new Map,xs=new Map,sr=[],aC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(e.pointerId)}}function jo(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=Ea(e),e!==null&&Dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function lC(t,e,n,r,i){switch(e){case"focusin":return gr=jo(gr,t,e,n,r,i),!0;case"dragenter":return vr=jo(vr,t,e,n,r,i),!0;case"mouseover":return yr=jo(yr,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return Rs.set(o,jo(Rs.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,xs.set(o,jo(xs.get(o)||null,t,e,n,r,i)),!0}return!1}function c_(t){var e=qr(t.target);if(e!==null){var n=Ii(e);if(n!==null){if(e=n.tag,e===13){if(e=J1(n),e!==null){t.blockedOn=e,u_(t.priority,function(){a_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=qd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);zd=r,n.target.dispatchEvent(r),zd=null}else return e=Ea(n),e!==null&&Dp(e),t.blockedOn=n,!1;e.shift()}return!0}function av(t,e,n){Ll(t)&&n.delete(e)}function uC(){Kd=!1,gr!==null&&Ll(gr)&&(gr=null),vr!==null&&Ll(vr)&&(vr=null),yr!==null&&Ll(yr)&&(yr=null),Rs.forEach(av),xs.forEach(av)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Kd||(Kd=!0,Dt.unstable_scheduleCallback(Dt.unstable_NormalPriority,uC)))}function Os(t){function e(i){return zo(i,t)}if(0<Za.length){zo(Za[0],t);for(var n=1;n<Za.length;n++){var r=Za[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&zo(gr,t),vr!==null&&zo(vr,t),yr!==null&&zo(yr,t),Rs.forEach(e),xs.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)c_(n),n.blockedOn===null&&sr.shift()}var Zi=Yn.ReactCurrentBatchConfig,uu=!0;function cC(t,e,n,r){var i=ne,o=Zi.transition;Zi.transition=null;try{ne=1,Mp(t,e,n,r)}finally{ne=i,Zi.transition=o}}function fC(t,e,n,r){var i=ne,o=Zi.transition;Zi.transition=null;try{ne=4,Mp(t,e,n,r)}finally{ne=i,Zi.transition=o}}function Mp(t,e,n,r){if(uu){var i=qd(t,e,n,r);if(i===null)$f(t,e,r,cu,n),sv(t,r);else if(lC(i,t,e,n,r))r.stopPropagation();else if(sv(t,r),e&4&&-1<aC.indexOf(t)){for(;i!==null;){var o=Ea(i);if(o!==null&&s_(o),o=qd(t,e,n,r),o===null&&$f(t,e,r,cu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else $f(t,e,r,null,n)}}var cu=null;function qd(t,e,n,r){if(cu=null,t=xp(r),t=qr(t),t!==null)if(e=Ii(t),e===null)t=null;else if(n=e.tag,n===13){if(t=J1(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cu=t,null}function f_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jb()){case Op:return 1;case n_:return 4;case au:case Zb:return 16;case r_:return 536870912;default:return 16}default:return 16}}var dr=null,Lp=null,Vl=null;function d_(){if(Vl)return Vl;var t,e=Lp,n=e.length,r,i="value"in dr?dr.value:dr.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return Vl=i.slice(t,1<r?1-r:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function el(){return!0}function lv(){return!1}function Vt(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?el:lv,this.isPropagationStopped=lv,this}return we(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vp=Vt(ko),wa=we({},ko,{view:0,detail:0}),dC=Vt(wa),Rf,xf,Bo,pc=we({},wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Bo&&(Bo&&t.type==="mousemove"?(Rf=t.screenX-Bo.screenX,xf=t.screenY-Bo.screenY):xf=Rf=0,Bo=t),Rf)},movementY:function(t){return"movementY"in t?t.movementY:xf}}),uv=Vt(pc),hC=we({},pc,{dataTransfer:0}),pC=Vt(hC),mC=we({},wa,{relatedTarget:0}),Of=Vt(mC),gC=we({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),vC=Vt(gC),yC=we({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_C=Vt(yC),wC=we({},ko,{data:0}),cv=Vt(wC),EC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=IC[t])?!!e[t]:!1}function Fp(){return TC}var bC=we({},wa,{key:function(t){if(t.key){var e=EC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?SC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fp,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CC=Vt(bC),kC=we({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),fv=Vt(kC),PC=we({},wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fp}),AC=Vt(PC),RC=we({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),xC=Vt(RC),OC=we({},pc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NC=Vt(OC),DC=[9,13,27,32],$p=$n&&"CompositionEvent"in window,fs=null;$n&&"documentMode"in document&&(fs=document.documentMode);var MC=$n&&"TextEvent"in window&&!fs,h_=$n&&(!$p||fs&&8<fs&&11>=fs),dv=" ",hv=!1;function p_(t,e){switch(t){case"keyup":return DC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function m_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mi=!1;function LC(t,e){switch(t){case"compositionend":return m_(e);case"keypress":return e.which!==32?null:(hv=!0,dv);case"textInput":return t=e.data,t===dv&&hv?null:t;default:return null}}function VC(t,e){if(Mi)return t==="compositionend"||!$p&&p_(t,e)?(t=d_(),Vl=Lp=dr=null,Mi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return h_&&e.locale!=="ko"?null:e.data;default:return null}}var FC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!FC[t.type]:e==="textarea"}function g_(t,e,n,r){K1(r),e=fu(e,"onChange"),0<e.length&&(n=new Vp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,Ns=null;function $C(t){k_(t,0)}function mc(t){var e=Fi(t);if(U1(e))return t}function UC(t,e){if(t==="change")return e}var v_=!1;if($n){var Nf;if($n){var Df="oninput"in document;if(!Df){var mv=document.createElement("div");mv.setAttribute("oninput","return;"),Df=typeof mv.oninput=="function"}Nf=Df}else Nf=!1;v_=Nf&&(!document.documentMode||9<document.documentMode)}function gv(){ds&&(ds.detachEvent("onpropertychange",y_),Ns=ds=null)}function y_(t){if(t.propertyName==="value"&&mc(Ns)){var e=[];g_(e,Ns,t,xp(t)),X1($C,e)}}function jC(t,e,n){t==="focusin"?(gv(),ds=e,Ns=n,ds.attachEvent("onpropertychange",y_)):t==="focusout"&&gv()}function zC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return mc(Ns)}function BC(t,e){if(t==="click")return mc(e)}function HC(t,e){if(t==="input"||t==="change")return mc(e)}function WC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ln=typeof Object.is=="function"?Object.is:WC;function Ds(t,e){if(ln(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rd.call(e,i)||!ln(t[i],e[i]))return!1}return!0}function vv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function yv(t,e){var n=vv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vv(n)}}function __(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?__(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function w_(){for(var t=window,e=iu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=iu(t.document)}return e}function Up(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GC(t){var e=w_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&__(n.ownerDocument.documentElement,n)){if(r!==null&&Up(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=yv(n,o);var s=yv(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var KC=$n&&"documentMode"in document&&11>=document.documentMode,Li=null,Yd=null,hs=null,Qd=!1;function _v(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qd||Li==null||Li!==iu(r)||(r=Li,"selectionStart"in r&&Up(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hs&&Ds(hs,r)||(hs=r,r=fu(Yd,"onSelect"),0<r.length&&(e=new Vp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function tl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:tl("Animation","AnimationEnd"),animationiteration:tl("Animation","AnimationIteration"),animationstart:tl("Animation","AnimationStart"),transitionend:tl("Transition","TransitionEnd")},Mf={},E_={};$n&&(E_=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function gc(t){if(Mf[t])return Mf[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in E_)return Mf[t]=e[n];return t}var S_=gc("animationend"),I_=gc("animationiteration"),T_=gc("animationstart"),b_=gc("transitionend"),C_=new Map,wv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){C_.set(t,e),Si(e,[t])}for(var Lf=0;Lf<wv.length;Lf++){var Vf=wv[Lf],qC=Vf.toLowerCase(),YC=Vf[0].toUpperCase()+Vf.slice(1);Fr(qC,"on"+YC)}Fr(S_,"onAnimationEnd");Fr(I_,"onAnimationIteration");Fr(T_,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(b_,"onTransitionEnd");lo("onMouseEnter",["mouseout","mouseover"]);lo("onMouseLeave",["mouseout","mouseover"]);lo("onPointerEnter",["pointerout","pointerover"]);lo("onPointerLeave",["pointerout","pointerover"]);Si("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Si("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Si("onBeforeInput",["compositionend","keypress","textInput","paste"]);Si("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Si("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("cancel close invalid load scroll toggle".split(" ").concat(ns));function Ev(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qb(r,e,void 0,t),t.currentTarget=null}function k_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==o&&i.isPropagationStopped())break e;Ev(i,l,u),o=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==o&&i.isPropagationStopped())break e;Ev(i,l,u),o=a}}}if(su)throw t=Wd,su=!1,Wd=null,t}function ue(t,e){var n=e[th];n===void 0&&(n=e[th]=new Set);var r=t+"__bubble";n.has(r)||(P_(e,t,2,!1),n.add(r))}function Ff(t,e,n){var r=0;e&&(r|=4),P_(n,t,r,e)}var nl="_reactListening"+Math.random().toString(36).slice(2);function Ms(t){if(!t[nl]){t[nl]=!0,M1.forEach(function(n){n!=="selectionchange"&&(QC.has(n)||Ff(n,!1,t),Ff(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[nl]||(e[nl]=!0,Ff("selectionchange",!1,e))}}function P_(t,e,n,r){switch(f_(e)){case 1:var i=cC;break;case 4:i=fC;break;default:i=Mp}n=i.bind(null,e,n,t),i=void 0,!Hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function $f(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;s=s.return}for(;l!==null;){if(s=qr(l),s===null)return;if(a=s.tag,a===5||a===6){r=o=s;continue e}l=l.parentNode}}r=r.return}X1(function(){var u=o,c=xp(n),f=[];e:{var d=C_.get(t);if(d!==void 0){var m=Vp,y=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":m=CC;break;case"focusin":y="focus",m=Of;break;case"focusout":y="blur",m=Of;break;case"beforeblur":case"afterblur":m=Of;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=pC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=AC;break;case S_:case I_:case T_:m=vC;break;case b_:m=xC;break;case"scroll":m=dC;break;case"wheel":m=NC;break;case"copy":case"cut":case"paste":m=_C;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=fv}var v=(e&4)!==0,_=!v&&t==="scroll",h=v?d!==null?d+"Capture":null:d;v=[];for(var p=u,g;p!==null;){g=p;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,h!==null&&(w=As(p,h),w!=null&&v.push(Ls(p,w,g)))),_)break;p=p.return}0<v.length&&(d=new m(d,y,null,n,c),f.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==zd&&(y=n.relatedTarget||n.fromElement)&&(qr(y)||y[Un]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?qr(y):null,y!==null&&(_=Ii(y),y!==_||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(v=uv,w="onMouseLeave",h="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(v=fv,w="onPointerLeave",h="onPointerEnter",p="pointer"),_=m==null?d:Fi(m),g=y==null?d:Fi(y),d=new v(w,p+"leave",m,n,c),d.target=_,d.relatedTarget=g,w=null,qr(c)===u&&(v=new v(h,p+"enter",y,n,c),v.target=g,v.relatedTarget=_,w=v),_=w,m&&y)t:{for(v=m,h=y,p=0,g=v;g;g=Ai(g))p++;for(g=0,w=h;w;w=Ai(w))g++;for(;0<p-g;)v=Ai(v),p--;for(;0<g-p;)h=Ai(h),g--;for(;p--;){if(v===h||h!==null&&v===h.alternate)break t;v=Ai(v),h=Ai(h)}v=null}else v=null;m!==null&&Sv(f,d,m,v,!1),y!==null&&_!==null&&Sv(f,_,y,v,!0)}}e:{if(d=u?Fi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var I=UC;else if(pv(d))if(v_)I=HC;else{I=zC;var b=jC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=BC);if(I&&(I=I(t,u))){g_(f,I,n,c);break e}b&&b(t,d,u),t==="focusout"&&(b=d._wrapperState)&&b.controlled&&d.type==="number"&&Vd(d,"number",d.value)}switch(b=u?Fi(u):window,t){case"focusin":(pv(b)||b.contentEditable==="true")&&(Li=b,Yd=u,hs=null);break;case"focusout":hs=Yd=Li=null;break;case"mousedown":Qd=!0;break;case"contextmenu":case"mouseup":case"dragend":Qd=!1,_v(f,n,c);break;case"selectionchange":if(KC)break;case"keydown":case"keyup":_v(f,n,c)}var T;if($p)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Mi?p_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(h_&&n.locale!=="ko"&&(Mi||C!=="onCompositionStart"?C==="onCompositionEnd"&&Mi&&(T=d_()):(dr=c,Lp="value"in dr?dr.value:dr.textContent,Mi=!0)),b=fu(u,C),0<b.length&&(C=new cv(C,t,null,n,c),f.push({event:C,listeners:b}),T?C.data=T:(T=m_(n),T!==null&&(C.data=T)))),(T=MC?LC(t,n):VC(t,n))&&(u=fu(u,"onBeforeInput"),0<u.length&&(c=new cv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}k_(f,e)})}function Ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function fu(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=As(t,n),o!=null&&r.unshift(Ls(t,o,i)),o=As(t,e),o!=null&&r.push(Ls(t,o,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sv(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=As(n,o),a!=null&&s.unshift(Ls(n,a,l))):i||(a=As(n,o),a!=null&&s.push(Ls(n,a,l)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var XC=/\r\n?/g,JC=/\u0000|\uFFFD/g;function Iv(t){return(typeof t=="string"?t:""+t).replace(XC,`
`).replace(JC,"")}function rl(t,e,n){if(e=Iv(e),Iv(t)!==e&&n)throw Error(P(425))}function du(){}var Xd=null,Jd=null;function Zd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var eh=typeof setTimeout=="function"?setTimeout:void 0,ZC=typeof clearTimeout=="function"?clearTimeout:void 0,Tv=typeof Promise=="function"?Promise:void 0,ek=typeof queueMicrotask=="function"?queueMicrotask:typeof Tv<"u"?function(t){return Tv.resolve(null).then(t).catch(tk)}:eh;function tk(t){setTimeout(function(){throw t})}function Uf(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Os(e)}function _r(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Po=Math.random().toString(36).slice(2),pn="__reactFiber$"+Po,Vs="__reactProps$"+Po,Un="__reactContainer$"+Po,th="__reactEvents$"+Po,nk="__reactListeners$"+Po,rk="__reactHandles$"+Po;function qr(t){var e=t[pn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Un]||n[pn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bv(t);t!==null;){if(n=t[pn])return n;t=bv(t)}return e}t=n,n=t.parentNode}return null}function Ea(t){return t=t[pn]||t[Un],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Fi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(P(33))}function vc(t){return t[Vs]||null}var nh=[],$i=-1;function $r(t){return{current:t}}function de(t){0>$i||(t.current=nh[$i],nh[$i]=null,$i--)}function le(t,e){$i++,nh[$i]=t.current,t.current=e}var Rr={},pt=$r(Rr),Tt=$r(!1),li=Rr;function uo(t,e){var n=t.type.contextTypes;if(!n)return Rr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function hu(){de(Tt),de(pt)}function Cv(t,e,n){if(pt.current!==Rr)throw Error(P(168));le(pt,e),le(Tt,n)}function A_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(P(108,jb(t)||"Unknown",i));return we({},n,r)}function pu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Rr,li=pt.current,le(pt,t),le(Tt,Tt.current),!0}function kv(t,e,n){var r=t.stateNode;if(!r)throw Error(P(169));n?(t=A_(t,e,li),r.__reactInternalMemoizedMergedChildContext=t,de(Tt),de(pt),le(pt,t)):de(Tt),le(Tt,n)}var An=null,yc=!1,jf=!1;function R_(t){An===null?An=[t]:An.push(t)}function ik(t){yc=!0,R_(t)}function Ur(){if(!jf&&An!==null){jf=!0;var t=0,e=ne;try{var n=An;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}An=null,yc=!1}catch(i){throw An!==null&&(An=An.slice(t+1)),t_(Op,Ur),i}finally{ne=e,jf=!1}}return null}var Ui=[],ji=0,mu=null,gu=0,zt=[],Bt=0,ui=null,Rn=1,xn="";function Hr(t,e){Ui[ji++]=gu,Ui[ji++]=mu,mu=t,gu=e}function x_(t,e,n){zt[Bt++]=Rn,zt[Bt++]=xn,zt[Bt++]=ui,ui=t;var r=Rn;t=xn;var i=32-on(r)-1;r&=~(1<<i),n+=1;var o=32-on(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Rn=1<<32-on(e)+i|n<<i|r,xn=o+t}else Rn=1<<o|n<<i|r,xn=t}function jp(t){t.return!==null&&(Hr(t,1),x_(t,1,0))}function zp(t){for(;t===mu;)mu=Ui[--ji],Ui[ji]=null,gu=Ui[--ji],Ui[ji]=null;for(;t===ui;)ui=zt[--Bt],zt[Bt]=null,xn=zt[--Bt],zt[Bt]=null,Rn=zt[--Bt],zt[Bt]=null}var Ot=null,xt=null,me=!1,Zt=null;function O_(t,e){var n=Wt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ot=t,xt=_r(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ot=t,xt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:Rn,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ot=t,xt=null,!0):!1;default:return!1}}function rh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ih(t){if(me){var e=xt;if(e){var n=e;if(!Pv(t,e)){if(rh(t))throw Error(P(418));e=_r(n.nextSibling);var r=Ot;e&&Pv(t,e)?O_(r,n):(t.flags=t.flags&-4097|2,me=!1,Ot=t)}}else{if(rh(t))throw Error(P(418));t.flags=t.flags&-4097|2,me=!1,Ot=t}}}function Av(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ot=t}function il(t){if(t!==Ot)return!1;if(!me)return Av(t),me=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Zd(t.type,t.memoizedProps)),e&&(e=xt)){if(rh(t))throw N_(),Error(P(418));for(;e;)O_(t,e),e=_r(e.nextSibling)}if(Av(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(P(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xt=_r(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xt=null}}else xt=Ot?_r(t.stateNode.nextSibling):null;return!0}function N_(){for(var t=xt;t;)t=_r(t.nextSibling)}function co(){xt=Ot=null,me=!1}function Bp(t){Zt===null?Zt=[t]:Zt.push(t)}var ok=Yn.ReactCurrentBatchConfig;function Xt(t,e){if(t&&t.defaultProps){e=we({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var vu=$r(null),yu=null,zi=null,Hp=null;function Wp(){Hp=zi=yu=null}function Gp(t){var e=vu.current;de(vu),t._currentValue=e}function oh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function eo(t,e){yu=t,Hp=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function Kt(t){var e=t._currentValue;if(Hp!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(yu===null)throw Error(P(308));zi=t,yu.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var Yr=null;function Kp(t){Yr===null?Yr=[t]:Yr.push(t)}function D_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Kp(e)):(n.next=i.next,i.next=n),e.interleaved=n,jn(t,r)}function jn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var or=!1;function qp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,jn(t,n)}return i=r.interleaved,i===null?(e.next=e,Kp(r)):(e.next=i.next,i.next=e),r.interleaved=e,jn(t,n)}function $l(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}function Rv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _u(t,e,n,r){var i=t.updateQueue;or=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?o=u:s.next=u,s=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(o!==null){var f=i.baseState;s=0,c=u=a=null,l=o;do{var d=l.lane,m=l.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,v=l;switch(d=e,m=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){f=y.call(m,f,d);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,d=typeof y=="function"?y.call(m,f,d):y,d==null)break e;f=we({},f,d);break e;case 2:or=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else m={eventTime:m,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=f):c=c.next=m,s|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(a=f),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);fi|=s,t.lanes=s,t.memoizedState=f}}function xv(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var L_=new D1.Component().refs;function sh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:we({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var _c={isMounted:function(t){return(t=t._reactInternals)?Ii(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Sr(t),o=Mn(r,i);o.payload=e,n!=null&&(o.callback=n),e=wr(t,o,i),e!==null&&(sn(e,t,i,r),$l(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=yt(),i=Sr(t),o=Mn(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=wr(t,o,i),e!==null&&(sn(e,t,i,r),$l(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yt(),r=Sr(t),i=Mn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(sn(e,t,r,n),$l(e,t,r))}};function Ov(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,o):!0}function V_(t,e,n){var r=!1,i=Rr,o=e.contextType;return typeof o=="object"&&o!==null?o=Kt(o):(i=bt(e)?li:pt.current,r=e.contextTypes,o=(r=r!=null)?uo(t,i):Rr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=_c,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Nv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&_c.enqueueReplaceState(e,e.state,null)}function ah(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=L_,qp(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=Kt(o):(o=bt(e)?li:pt.current,i.context=uo(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(sh(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&_c.enqueueReplaceState(i,i.state,null),_u(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ho(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var l=i.refs;l===L_&&(l=i.refs={}),s===null?delete l[o]:l[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,t))}return t}function ol(t,e){throw t=Object.prototype.toString.call(e),Error(P(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dv(t){var e=t._init;return e(t._payload)}function F_(t){function e(h,p){if(t){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!t)return null;for(;p!==null;)e(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function i(h,p){return h=Ir(h,p),h.index=0,h.sibling=null,h}function o(h,p,g){return h.index=g,t?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,w){return p===null||p.tag!==6?(p=qf(g,h.mode,w),p.return=h,p):(p=i(p,g),p.return=h,p)}function a(h,p,g,w){var I=g.type;return I===Di?c(h,p,g.props.children,w,g.key):p!==null&&(p.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ir&&Dv(I)===p.type)?(w=i(p,g.props),w.ref=Ho(h,p,g),w.return=h,w):(w=Wl(g.type,g.key,g.props,null,h.mode,w),w.ref=Ho(h,p,g),w.return=h,w)}function u(h,p,g,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Yf(g,h.mode,w),p.return=h,p):(p=i(p,g.children||[]),p.return=h,p)}function c(h,p,g,w,I){return p===null||p.tag!==7?(p=ii(g,h.mode,w,I),p.return=h,p):(p=i(p,g),p.return=h,p)}function f(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=qf(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case qa:return g=Wl(p.type,p.key,p.props,null,h.mode,g),g.ref=Ho(h,null,p),g.return=h,g;case Ni:return p=Yf(p,h.mode,g),p.return=h,p;case ir:var w=p._init;return f(h,w(p._payload),g)}if(es(p)||$o(p))return p=ii(p,h.mode,g,null),p.return=h,p;ol(h,p)}return null}function d(h,p,g,w){var I=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return I!==null?null:l(h,p,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case qa:return g.key===I?a(h,p,g,w):null;case Ni:return g.key===I?u(h,p,g,w):null;case ir:return I=g._init,d(h,p,I(g._payload),w)}if(es(g)||$o(g))return I!==null?null:c(h,p,g,w,null);ol(h,g)}return null}function m(h,p,g,w,I){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(g)||null,l(p,h,""+w,I);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case qa:return h=h.get(w.key===null?g:w.key)||null,a(p,h,w,I);case Ni:return h=h.get(w.key===null?g:w.key)||null,u(p,h,w,I);case ir:var b=w._init;return m(h,p,g,b(w._payload),I)}if(es(w)||$o(w))return h=h.get(g)||null,c(p,h,w,I,null);ol(p,w)}return null}function y(h,p,g,w){for(var I=null,b=null,T=p,C=p=0,L=null;T!==null&&C<g.length;C++){T.index>C?(L=T,T=null):L=T.sibling;var V=d(h,T,g[C],w);if(V===null){T===null&&(T=L);break}t&&T&&V.alternate===null&&e(h,T),p=o(V,p,C),b===null?I=V:b.sibling=V,b=V,T=L}if(C===g.length)return n(h,T),me&&Hr(h,C),I;if(T===null){for(;C<g.length;C++)T=f(h,g[C],w),T!==null&&(p=o(T,p,C),b===null?I=T:b.sibling=T,b=T);return me&&Hr(h,C),I}for(T=r(h,T);C<g.length;C++)L=m(T,h,C,g[C],w),L!==null&&(t&&L.alternate!==null&&T.delete(L.key===null?C:L.key),p=o(L,p,C),b===null?I=L:b.sibling=L,b=L);return t&&T.forEach(function(oe){return e(h,oe)}),me&&Hr(h,C),I}function v(h,p,g,w){var I=$o(g);if(typeof I!="function")throw Error(P(150));if(g=I.call(g),g==null)throw Error(P(151));for(var b=I=null,T=p,C=p=0,L=null,V=g.next();T!==null&&!V.done;C++,V=g.next()){T.index>C?(L=T,T=null):L=T.sibling;var oe=d(h,T,V.value,w);if(oe===null){T===null&&(T=L);break}t&&T&&oe.alternate===null&&e(h,T),p=o(oe,p,C),b===null?I=oe:b.sibling=oe,b=oe,T=L}if(V.done)return n(h,T),me&&Hr(h,C),I;if(T===null){for(;!V.done;C++,V=g.next())V=f(h,V.value,w),V!==null&&(p=o(V,p,C),b===null?I=V:b.sibling=V,b=V);return me&&Hr(h,C),I}for(T=r(h,T);!V.done;C++,V=g.next())V=m(T,h,C,V.value,w),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?C:V.key),p=o(V,p,C),b===null?I=V:b.sibling=V,b=V);return t&&T.forEach(function(Ee){return e(h,Ee)}),me&&Hr(h,C),I}function _(h,p,g,w){if(typeof g=="object"&&g!==null&&g.type===Di&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case qa:e:{for(var I=g.key,b=p;b!==null;){if(b.key===I){if(I=g.type,I===Di){if(b.tag===7){n(h,b.sibling),p=i(b,g.props.children),p.return=h,h=p;break e}}else if(b.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===ir&&Dv(I)===b.type){n(h,b.sibling),p=i(b,g.props),p.ref=Ho(h,b,g),p.return=h,h=p;break e}n(h,b);break}else e(h,b);b=b.sibling}g.type===Di?(p=ii(g.props.children,h.mode,w,g.key),p.return=h,h=p):(w=Wl(g.type,g.key,g.props,null,h.mode,w),w.ref=Ho(h,p,g),w.return=h,h=w)}return s(h);case Ni:e:{for(b=g.key;p!==null;){if(p.key===b)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=i(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else e(h,p);p=p.sibling}p=Yf(g,h.mode,w),p.return=h,h=p}return s(h);case ir:return b=g._init,_(h,p,b(g._payload),w)}if(es(g))return y(h,p,g,w);if($o(g))return v(h,p,g,w);ol(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=i(p,g),p.return=h,h=p):(n(h,p),p=qf(g,h.mode,w),p.return=h,h=p),s(h)):n(h,p)}return _}var fo=F_(!0),$_=F_(!1),Sa={},En=$r(Sa),Fs=$r(Sa),$s=$r(Sa);function Qr(t){if(t===Sa)throw Error(P(174));return t}function Yp(t,e){switch(le($s,e),le(Fs,t),le(En,Sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:$d(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=$d(e,t)}de(En),le(En,e)}function ho(){de(En),de(Fs),de($s)}function U_(t){Qr($s.current);var e=Qr(En.current),n=$d(e,t.type);e!==n&&(le(Fs,t),le(En,n))}function Qp(t){Fs.current===t&&(de(En),de(Fs))}var ye=$r(0);function wu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var zf=[];function Xp(){for(var t=0;t<zf.length;t++)zf[t]._workInProgressVersionPrimary=null;zf.length=0}var Ul=Yn.ReactCurrentDispatcher,Bf=Yn.ReactCurrentBatchConfig,ci=0,_e=null,Me=null,Ue=null,Eu=!1,ps=!1,Us=0,sk=0;function it(){throw Error(P(321))}function Jp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ln(t[n],e[n]))return!1;return!0}function Zp(t,e,n,r,i,o){if(ci=o,_e=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?ck:fk,t=n(r,i),ps){o=0;do{if(ps=!1,Us=0,25<=o)throw Error(P(301));o+=1,Ue=Me=null,e.updateQueue=null,Ul.current=dk,t=n(r,i)}while(ps)}if(Ul.current=Su,e=Me!==null&&Me.next!==null,ci=0,Ue=Me=_e=null,Eu=!1,e)throw Error(P(300));return t}function em(){var t=Us!==0;return Us=0,t}function fn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t,Ue}function qt(){if(Me===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Ue===null?_e.memoizedState:Ue.next;if(e!==null)Ue=e,Me=t;else{if(t===null)throw Error(P(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ue===null?_e.memoizedState=Ue=t:Ue=Ue.next=t}return Ue}function js(t,e){return typeof e=="function"?e(t):e}function Hf(t){var e=qt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,a=null,u=o;do{var c=u.lane;if((ci&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,_e.lanes|=c,fi|=c}u=u.next}while(u!==null&&u!==o);a===null?s=r:a.next=l,ln(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,_e.lanes|=o,fi|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wf(t){var e=qt(),n=e.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);ln(o,e.memoizedState)||(It=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function j_(){}function z_(t,e){var n=_e,r=qt(),i=e(),o=!ln(r.memoizedState,i);if(o&&(r.memoizedState=i,It=!0),r=r.queue,tm(W_.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,zs(9,H_.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(P(349));ci&30||B_(n,e,i)}return i}function B_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function H_(t,e,n,r){e.value=n,e.getSnapshot=r,G_(e)&&K_(t)}function W_(t,e,n){return n(function(){G_(e)&&K_(t)})}function G_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ln(t,n)}catch{return!0}}function K_(t){var e=jn(t,1);e!==null&&sn(e,t,1,-1)}function Mv(t){var e=fn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:js,lastRenderedState:t},e.queue=t,t=t.dispatch=uk.bind(null,_e,t),[e.memoizedState,t]}function zs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=_e.updateQueue,e===null?(e={lastEffect:null,stores:null},_e.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function q_(){return qt().memoizedState}function jl(t,e,n,r){var i=fn();_e.flags|=t,i.memoizedState=zs(1|e,n,void 0,r===void 0?null:r)}function wc(t,e,n,r){var i=qt();r=r===void 0?null:r;var o=void 0;if(Me!==null){var s=Me.memoizedState;if(o=s.destroy,r!==null&&Jp(r,s.deps)){i.memoizedState=zs(e,n,o,r);return}}_e.flags|=t,i.memoizedState=zs(1|e,n,o,r)}function Lv(t,e){return jl(8390656,8,t,e)}function tm(t,e){return wc(2048,8,t,e)}function Y_(t,e){return wc(4,2,t,e)}function Q_(t,e){return wc(4,4,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,wc(4,4,X_.bind(null,e,t),n)}function nm(){}function Z_(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function ew(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function tw(t,e,n){return ci&21?(ln(n,e)||(n=i_(),_e.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function ak(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Bf.transition;Bf.transition={};try{t(!1),e()}finally{ne=n,Bf.transition=r}}function nw(){return qt().memoizedState}function lk(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rw(t))iw(e,n);else if(n=D_(t,e,n,r),n!==null){var i=yt();sn(n,t,r,i),ow(n,e,r)}}function uk(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rw(t))iw(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,ln(l,s)){var a=e.interleaved;a===null?(i.next=i,Kp(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=D_(t,e,i,r),n!==null&&(i=yt(),sn(n,t,r,i),ow(n,e,r))}}function rw(t){var e=t.alternate;return t===_e||e!==null&&e===_e}function iw(t,e){ps=Eu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function ow(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Np(t,n)}}var Su={readContext:Kt,useCallback:it,useContext:it,useEffect:it,useImperativeHandle:it,useInsertionEffect:it,useLayoutEffect:it,useMemo:it,useReducer:it,useRef:it,useState:it,useDebugValue:it,useDeferredValue:it,useTransition:it,useMutableSource:it,useSyncExternalStore:it,useId:it,unstable_isNewReconciler:!1},ck={readContext:Kt,useCallback:function(t,e){return fn().memoizedState=[t,e===void 0?null:e],t},useContext:Kt,useEffect:Lv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,jl(4194308,4,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return jl(4194308,4,t,e)},useInsertionEffect:function(t,e){return jl(4,2,t,e)},useMemo:function(t,e){var n=fn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=lk.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var e=fn();return t={current:t},e.memoizedState=t},useState:Mv,useDebugValue:nm,useDeferredValue:function(t){return fn().memoizedState=t},useTransition:function(){var t=Mv(!1),e=t[0];return t=ak.bind(null,t[1]),fn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=_e,i=fn();if(me){if(n===void 0)throw Error(P(407));n=n()}else{if(n=e(),ze===null)throw Error(P(349));ci&30||B_(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Lv(W_.bind(null,r,o,t),[t]),r.flags|=2048,zs(9,H_.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=fn(),e=ze.identifierPrefix;if(me){var n=xn,r=Rn;n=(r&~(1<<32-on(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Us++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fk={readContext:Kt,useCallback:Z_,useContext:Kt,useEffect:tm,useImperativeHandle:J_,useInsertionEffect:Y_,useLayoutEffect:Q_,useMemo:ew,useReducer:Hf,useRef:q_,useState:function(){return Hf(js)},useDebugValue:nm,useDeferredValue:function(t){var e=qt();return tw(e,Me.memoizedState,t)},useTransition:function(){var t=Hf(js)[0],e=qt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:z_,useId:nw,unstable_isNewReconciler:!1},dk={readContext:Kt,useCallback:Z_,useContext:Kt,useEffect:tm,useImperativeHandle:J_,useInsertionEffect:Y_,useLayoutEffect:Q_,useMemo:ew,useReducer:Wf,useRef:q_,useState:function(){return Wf(js)},useDebugValue:nm,useDeferredValue:function(t){var e=qt();return Me===null?e.memoizedState=t:tw(e,Me.memoizedState,t)},useTransition:function(){var t=Wf(js)[0],e=qt().memoizedState;return[t,e]},useMutableSource:j_,useSyncExternalStore:z_,useId:nw,unstable_isNewReconciler:!1};function po(t,e){try{var n="",r=e;do n+=Ub(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function Gf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hk=typeof WeakMap=="function"?WeakMap:Map;function sw(t,e,n){n=Mn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Tu||(Tu=!0,yh=r),lh(t,e)},n}function aw(t,e,n){n=Mn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){lh(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){lh(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Vv(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kk.bind(null,t,e,n),e.then(t,t))}function Fv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $v(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var pk=Yn.ReactCurrentOwner,It=!1;function gt(t,e,n,r){e.child=t===null?$_(e,null,n,r):fo(e,t.child,n,r)}function Uv(t,e,n,r,i){n=n.render;var o=e.ref;return eo(e,i),r=Zp(t,e,n,r,o,i),n=em(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(me&&n&&jp(e),e.flags|=1,gt(t,e,r,i),e.child)}function jv(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!cm(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,lw(t,e,o,r,i)):(t=Wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(s,r)&&t.ref===e.ref)return zn(t,e,i)}return e.flags|=1,t=Ir(o,r),t.ref=e.ref,t.return=e,e.child=t}function lw(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(Ds(o,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,zn(t,e,i)}return uh(t,e,n,r,i)}function uw(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Hi,Rt),Rt|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Hi,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,le(Hi,Rt),Rt|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,le(Hi,Rt),Rt|=r;return gt(t,e,i,n),e.child}function cw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function uh(t,e,n,r,i){var o=bt(n)?li:pt.current;return o=uo(e,o),eo(e,i),n=Zp(t,e,n,r,o,i),r=em(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,zn(t,e,i)):(me&&r&&jp(e),e.flags|=1,gt(t,e,n,i),e.child)}function zv(t,e,n,r,i){if(bt(n)){var o=!0;pu(e)}else o=!1;if(eo(e,i),e.stateNode===null)zl(t,e),V_(e,n,r),ah(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,l=e.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Kt(u):(u=bt(n)?li:pt.current,u=uo(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&Nv(e,s,r,u),or=!1;var d=e.memoizedState;s.state=d,_u(e,r,s,i),a=e.memoizedState,l!==r||d!==a||Tt.current||or?(typeof c=="function"&&(sh(e,n,c,r),a=e.memoizedState),(l=or||Ov(e,n,l,r,d,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,M_(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:Xt(e.type,l),s.props=u,f=e.pendingProps,d=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=Kt(a):(a=bt(n)?li:pt.current,a=uo(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||d!==a)&&Nv(e,s,r,a),or=!1,d=e.memoizedState,s.state=d,_u(e,r,s,i);var y=e.memoizedState;l!==f||d!==y||Tt.current||or?(typeof m=="function"&&(sh(e,n,m,r),y=e.memoizedState),(u=or||Ov(e,n,u,r,d,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return ch(t,e,n,r,o,i)}function ch(t,e,n,r,i,o){cw(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&kv(e,n,!1),zn(t,e,o);r=e.stateNode,pk.current=e;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=fo(e,t.child,null,o),e.child=fo(e,null,l,o)):gt(t,e,l,o),e.memoizedState=r.state,i&&kv(e,n,!0),e.child}function fw(t){var e=t.stateNode;e.pendingContext?Cv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Cv(t,e.context,!1),Yp(t,e.containerInfo)}function Bv(t,e,n,r,i){return co(),Bp(i),e.flags|=256,gt(t,e,n,r),e.child}var fh={dehydrated:null,treeContext:null,retryLane:0};function dh(t){return{baseLanes:t,cachePool:null,transitions:null}}function dw(t,e,n){var r=e.pendingProps,i=ye.current,o=!1,s=(e.flags&128)!==0,l;if((l=s)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ye,i&1),t===null)return ih(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Ic(s,r,0,null),t=ii(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=dh(n),e.memoizedState=fh,t):rm(e,s));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return mk(t,e,s,r,l,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=Ir(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Ir(l,o):(o=ii(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?dh(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=fh,r}return o=t.child,t=o.sibling,r=Ir(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rm(t,e){return e=Ic({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function sl(t,e,n,r){return r!==null&&Bp(r),fo(e,t.child,null,n),t=rm(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function mk(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=Gf(Error(P(422))),sl(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=Ic({mode:"visible",children:r.children},i,0,null),o=ii(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&fo(e,t.child,null,s),e.child.memoizedState=dh(s),e.memoizedState=fh,o);if(!(e.mode&1))return sl(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(P(419)),r=Gf(o,r,void 0),sl(t,e,s,r)}if(l=(s&t.childLanes)!==0,It||l){if(r=ze,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,jn(t,i),sn(r,t,i,-1))}return um(),r=Gf(Error(P(421))),sl(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Pk.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,xt=_r(i.nextSibling),Ot=e,me=!0,Zt=null,t!==null&&(zt[Bt++]=Rn,zt[Bt++]=xn,zt[Bt++]=ui,Rn=t.id,xn=t.overflow,ui=e),e=rm(e,r.children),e.flags|=4096,e)}function Hv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),oh(t.return,e,n)}function Kf(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function hw(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(gt(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hv(t,n,e);else if(t.tag===19)Hv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&wu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Kf(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&wu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Kf(e,!0,n,null,o);break;case"together":Kf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function zl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(P(153));if(e.child!==null){for(t=e.child,n=Ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function gk(t,e,n){switch(e.tag){case 3:fw(e),co();break;case 5:U_(e);break;case 1:bt(e.type)&&pu(e);break;case 4:Yp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(vu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?dw(t,e,n):(le(ye,ye.current&1),t=zn(t,e,n),t!==null?t.sibling:null);le(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return hw(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,uw(t,e,n)}return zn(t,e,n)}var pw,hh,mw,gw;pw=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hh=function(){};mw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(En.current);var o=null;switch(n){case"input":i=Md(t,i),r=Md(t,r),o=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),o=[];break;case"textarea":i=Fd(t,i),r=Fd(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=du)}Ud(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ks.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(o||(o=[]),o.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(o=o||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(o=o||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ks.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&ue("scroll",t),o||l===a||(o=[])):(o=o||[]).push(u,a))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};gw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Wo(t,e){if(!me)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ot(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function vk(t,e,n){var r=e.pendingProps;switch(zp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(e),null;case 1:return bt(e.type)&&hu(),ot(e),null;case 3:return r=e.stateNode,ho(),de(Tt),de(pt),Xp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(il(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zt!==null&&(Eh(Zt),Zt=null))),hh(t,e),ot(e),null;case 5:Qp(e);var i=Qr($s.current);if(n=e.type,t!==null&&e.stateNode!=null)mw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(P(166));return ot(e),null}if(t=Qr(En.current),il(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[pn]=e,r[Vs]=o,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<ns.length;i++)ue(ns[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Zg(r,o),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ue("invalid",r);break;case"textarea":tv(r,o),ue("invalid",r)}Ud(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&rl(r.textContent,l,t),i=["children",""+l]):ks.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ya(r),ev(r,o,!0);break;case"textarea":Ya(r),nv(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=du)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=B1(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[pn]=e,t[Vs]=r,pw(t,e,!1,!1),e.stateNode=t;e:{switch(s=jd(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ns.length;i++)ue(ns[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Zg(t,r),i=Md(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),ue("invalid",t);break;case"textarea":tv(t,r),i=Fd(t,r),ue("invalid",t);break;default:i=r}Ud(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var a=l[o];o==="style"?G1(t,a):o==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&H1(t,a)):o==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Ps(t,a):typeof a=="number"&&Ps(t,""+a):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ks.hasOwnProperty(o)?a!=null&&o==="onScroll"&&ue("scroll",t):a!=null&&kp(t,o,a,s))}switch(n){case"input":Ya(t),ev(t,r,!1);break;case"textarea":Ya(t),nv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?Qi(t,!!r.multiple,o,!1):r.defaultValue!=null&&Qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=du)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ot(e),null;case 6:if(t&&e.stateNode!=null)gw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(P(166));if(n=Qr($s.current),Qr(En.current),il(e)){if(r=e.stateNode,n=e.memoizedProps,r[pn]=e,(o=r.nodeValue!==n)&&(t=Ot,t!==null))switch(t.tag){case 3:rl(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&rl(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=e,e.stateNode=r}return ot(e),null;case 13:if(de(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(me&&xt!==null&&e.mode&1&&!(e.flags&128))N_(),co(),e.flags|=98560,o=!1;else if(o=il(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(P(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(P(317));o[pn]=e}else co(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ot(e),o=!1}else Zt!==null&&(Eh(Zt),Zt=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?Le===0&&(Le=3):um())),e.updateQueue!==null&&(e.flags|=4),ot(e),null);case 4:return ho(),hh(t,e),t===null&&Ms(e.stateNode.containerInfo),ot(e),null;case 10:return Gp(e.type._context),ot(e),null;case 17:return bt(e.type)&&hu(),ot(e),null;case 19:if(de(ye),o=e.memoizedState,o===null)return ot(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Wo(o,!1);else{if(Le!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=wu(t),s!==null){for(e.flags|=128,Wo(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ye,ye.current&1|2),e.child}t=t.sibling}o.tail!==null&&Ce()>mo&&(e.flags|=128,r=!0,Wo(o,!1),e.lanes=4194304)}else{if(!r)if(t=wu(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!me)return ot(e),null}else 2*Ce()-o.renderingStartTime>mo&&n!==1073741824&&(e.flags|=128,r=!0,Wo(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Ce(),e.sibling=null,n=ye.current,le(ye,r?n&1|2:n&1),e):(ot(e),null);case 22:case 23:return lm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(ot(e),e.subtreeFlags&6&&(e.flags|=8192)):ot(e),null;case 24:return null;case 25:return null}throw Error(P(156,e.tag))}function yk(t,e){switch(zp(e),e.tag){case 1:return bt(e.type)&&hu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ho(),de(Tt),de(pt),Xp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Qp(e),null;case 13:if(de(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(P(340));co()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ye),null;case 4:return ho(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return lm(),null;case 24:return null;default:return null}}var al=!1,ut=!1,_k=typeof WeakSet=="function"?WeakSet:Set,D=null;function Bi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Se(t,e,r)}else n.current=null}function ph(t,e,n){try{n()}catch(r){Se(t,e,r)}}var Wv=!1;function wk(t,e){if(Xd=uu,t=w_(),Up(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==o||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)d=f,f=m;for(;;){if(f===t)break t;if(d===n&&++u===i&&(l=s),d===o&&++c===r&&(a=s),(m=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jd={focusedElem:t,selectionRange:n},uu=!1,D=e;D!==null;)if(e=D,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,D=t;else for(;D!==null;){e=D;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,_=y.memoizedState,h=e.stateNode,p=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:Xt(e.type,v),_);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(w){Se(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,D=t;break}D=e.return}return y=Wv,Wv=!1,y}function ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&ph(e,n,o)}i=i.next}while(i!==r)}}function Ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function vw(t){var e=t.alternate;e!==null&&(t.alternate=null,vw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[pn],delete e[Vs],delete e[th],delete e[nk],delete e[rk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function yw(t){return t.tag===5||t.tag===3||t.tag===4}function Gv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||yw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function gh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=du));else if(r!==4&&(t=t.child,t!==null))for(gh(t,e,n),t=t.sibling;t!==null;)gh(t,e,n),t=t.sibling}function vh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(vh(t,e,n),t=t.sibling;t!==null;)vh(t,e,n),t=t.sibling}var Ye=null,Jt=!1;function er(t,e,n){for(n=n.child;n!==null;)_w(t,e,n),n=n.sibling}function _w(t,e,n){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(hc,n)}catch{}switch(n.tag){case 5:ut||Bi(n,e);case 6:var r=Ye,i=Jt;Ye=null,er(t,e,n),Ye=r,Jt=i,Ye!==null&&(Jt?(t=Ye,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Jt?(t=Ye,n=n.stateNode,t.nodeType===8?Uf(t.parentNode,n):t.nodeType===1&&Uf(t,n),Os(t)):Uf(Ye,n.stateNode));break;case 4:r=Ye,i=Jt,Ye=n.stateNode.containerInfo,Jt=!0,er(t,e,n),Ye=r,Jt=i;break;case 0:case 11:case 14:case 15:if(!ut&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&ph(n,e,s),i=i.next}while(i!==r)}er(t,e,n);break;case 1:if(!ut&&(Bi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Se(n,e,l)}er(t,e,n);break;case 21:er(t,e,n);break;case 22:n.mode&1?(ut=(r=ut)||n.memoizedState!==null,er(t,e,n),ut=r):er(t,e,n);break;default:er(t,e,n)}}function Kv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _k),e.forEach(function(r){var i=Ak.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Qt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Jt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Jt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Jt=!0;break e}l=l.return}if(Ye===null)throw Error(P(160));_w(o,s,i),Ye=null,Jt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){Se(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ww(e,t),e=e.sibling}function ww(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Qt(e,t),cn(t),r&4){try{ms(3,t,t.return),Ec(3,t)}catch(v){Se(t,t.return,v)}try{ms(5,t,t.return)}catch(v){Se(t,t.return,v)}}break;case 1:Qt(e,t),cn(t),r&512&&n!==null&&Bi(n,n.return);break;case 5:if(Qt(e,t),cn(t),r&512&&n!==null&&Bi(n,n.return),t.flags&32){var i=t.stateNode;try{Ps(i,"")}catch(v){Se(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&j1(i,o),jd(l,s);var u=jd(l,o);for(s=0;s<a.length;s+=2){var c=a[s],f=a[s+1];c==="style"?G1(i,f):c==="dangerouslySetInnerHTML"?H1(i,f):c==="children"?Ps(i,f):kp(i,c,f,u)}switch(l){case"input":Ld(i,o);break;case"textarea":z1(i,o);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m!=null?Qi(i,!!o.multiple,m,!1):d!==!!o.multiple&&(o.defaultValue!=null?Qi(i,!!o.multiple,o.defaultValue,!0):Qi(i,!!o.multiple,o.multiple?[]:"",!1))}i[Vs]=o}catch(v){Se(t,t.return,v)}}break;case 6:if(Qt(e,t),cn(t),r&4){if(t.stateNode===null)throw Error(P(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(v){Se(t,t.return,v)}}break;case 3:if(Qt(e,t),cn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Os(e.containerInfo)}catch(v){Se(t,t.return,v)}break;case 4:Qt(e,t),cn(t);break;case 13:Qt(e,t),cn(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(sm=Ce())),r&4&&Kv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(ut=(u=ut)||c,Qt(e,t),ut=u):Qt(e,t),cn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(D=t,c=t.child;c!==null;){for(f=D=c;D!==null;){switch(d=D,m=d.child,d.tag){case 0:case 11:case 14:case 15:ms(4,d,d.return);break;case 1:Bi(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(v){Se(r,n,v)}}break;case 5:Bi(d,d.return);break;case 22:if(d.memoizedState!==null){Yv(f);continue}}m!==null?(m.return=d,D=m):Yv(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=W1("display",s))}catch(v){Se(t,t.return,v)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(v){Se(t,t.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Qt(e,t),cn(t),r&4&&Kv(t);break;case 21:break;default:Qt(e,t),cn(t)}}function cn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(yw(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ps(i,""),r.flags&=-33);var o=Gv(t);vh(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Gv(t);gh(t,l,s);break;default:throw Error(P(161))}}catch(a){Se(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ek(t,e,n){D=t,Ew(t)}function Ew(t,e,n){for(var r=(t.mode&1)!==0;D!==null;){var i=D,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||al;if(!s){var l=i.alternate,a=l!==null&&l.memoizedState!==null||ut;l=al;var u=ut;if(al=s,(ut=a)&&!u)for(D=i;D!==null;)s=D,a=s.child,s.tag===22&&s.memoizedState!==null?Qv(i):a!==null?(a.return=s,D=a):Qv(i);for(;o!==null;)D=o,Ew(o),o=o.sibling;D=i,al=l,ut=u}qv(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,D=o):qv(t)}}function qv(t){for(;D!==null;){var e=D;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ut||Ec(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ut)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Xt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&xv(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xv(e,s,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Os(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}ut||e.flags&512&&mh(e)}catch(d){Se(e,e.return,d)}}if(e===t){D=null;break}if(n=e.sibling,n!==null){n.return=e.return,D=n;break}D=e.return}}function Yv(t){for(;D!==null;){var e=D;if(e===t){D=null;break}var n=e.sibling;if(n!==null){n.return=e.return,D=n;break}D=e.return}}function Qv(t){for(;D!==null;){var e=D;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ec(4,e)}catch(a){Se(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){Se(e,i,a)}}var o=e.return;try{mh(e)}catch(a){Se(e,o,a)}break;case 5:var s=e.return;try{mh(e)}catch(a){Se(e,s,a)}}}catch(a){Se(e,e.return,a)}if(e===t){D=null;break}var l=e.sibling;if(l!==null){l.return=e.return,D=l;break}D=e.return}}var Sk=Math.ceil,Iu=Yn.ReactCurrentDispatcher,im=Yn.ReactCurrentOwner,Gt=Yn.ReactCurrentBatchConfig,Z=0,ze=null,xe=null,tt=0,Rt=0,Hi=$r(0),Le=0,Bs=null,fi=0,Sc=0,om=0,gs=null,St=null,sm=0,mo=1/0,Pn=null,Tu=!1,yh=null,Er=null,ll=!1,hr=null,bu=0,vs=0,_h=null,Bl=-1,Hl=0;function yt(){return Z&6?Ce():Bl!==-1?Bl:Bl=Ce()}function Sr(t){return t.mode&1?Z&2&&tt!==0?tt&-tt:ok.transition!==null?(Hl===0&&(Hl=i_()),Hl):(t=ne,t!==0||(t=window.event,t=t===void 0?16:f_(t.type)),t):1}function sn(t,e,n,r){if(50<vs)throw vs=0,_h=null,Error(P(185));_a(t,n,r),(!(Z&2)||t!==ze)&&(t===ze&&(!(Z&2)&&(Sc|=n),Le===4&&ar(t,tt)),Ct(t,r),n===1&&Z===0&&!(e.mode&1)&&(mo=Ce()+500,yc&&Ur()))}function Ct(t,e){var n=t.callbackNode;oC(t,e);var r=lu(t,t===ze?tt:0);if(r===0)n!==null&&ov(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ov(n),e===1)t.tag===0?ik(Xv.bind(null,t)):R_(Xv.bind(null,t)),ek(function(){!(Z&6)&&Ur()}),n=null;else{switch(o_(r)){case 1:n=Op;break;case 4:n=n_;break;case 16:n=au;break;case 536870912:n=r_;break;default:n=au}n=Aw(n,Sw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Sw(t,e){if(Bl=-1,Hl=0,Z&6)throw Error(P(327));var n=t.callbackNode;if(to()&&t.callbackNode!==n)return null;var r=lu(t,t===ze?tt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Cu(t,r);else{e=r;var i=Z;Z|=2;var o=Tw();(ze!==t||tt!==e)&&(Pn=null,mo=Ce()+500,ri(t,e));do try{bk();break}catch(l){Iw(t,l)}while(!0);Wp(),Iu.current=o,Z=i,xe!==null?e=0:(ze=null,tt=0,e=Le)}if(e!==0){if(e===2&&(i=Gd(t),i!==0&&(r=i,e=wh(t,i))),e===1)throw n=Bs,ri(t,0),ar(t,r),Ct(t,Ce()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ik(i)&&(e=Cu(t,r),e===2&&(o=Gd(t),o!==0&&(r=o,e=wh(t,o))),e===1))throw n=Bs,ri(t,0),ar(t,r),Ct(t,Ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(P(345));case 2:Wr(t,St,Pn);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=sm+500-Ce(),10<e)){if(lu(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){yt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=eh(Wr.bind(null,t,St,Pn),e);break}Wr(t,St,Pn);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-on(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sk(r/1960))-r,10<r){t.timeoutHandle=eh(Wr.bind(null,t,St,Pn),r);break}Wr(t,St,Pn);break;case 5:Wr(t,St,Pn);break;default:throw Error(P(329))}}}return Ct(t,Ce()),t.callbackNode===n?Sw.bind(null,t):null}function wh(t,e){var n=gs;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=Cu(t,e),t!==2&&(e=St,St=n,e!==null&&Eh(e)),t}function Eh(t){St===null?St=t:St.push.apply(St,t)}function Ik(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!ln(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~om,e&=~Sc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-on(e),r=1<<n;t[n]=-1,e&=~r}}function Xv(t){if(Z&6)throw Error(P(327));to();var e=lu(t,0);if(!(e&1))return Ct(t,Ce()),null;var n=Cu(t,e);if(t.tag!==0&&n===2){var r=Gd(t);r!==0&&(e=r,n=wh(t,r))}if(n===1)throw n=Bs,ri(t,0),ar(t,e),Ct(t,Ce()),n;if(n===6)throw Error(P(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,St,Pn),Ct(t,Ce()),null}function am(t,e){var n=Z;Z|=1;try{return t(e)}finally{Z=n,Z===0&&(mo=Ce()+500,yc&&Ur())}}function di(t){hr!==null&&hr.tag===0&&!(Z&6)&&to();var e=Z;Z|=1;var n=Gt.transition,r=ne;try{if(Gt.transition=null,ne=1,t)return t()}finally{ne=r,Gt.transition=n,Z=e,!(Z&6)&&Ur()}}function lm(){Rt=Hi.current,de(Hi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ZC(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(zp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&hu();break;case 3:ho(),de(Tt),de(pt),Xp();break;case 5:Qp(r);break;case 4:ho();break;case 13:de(ye);break;case 19:de(ye);break;case 10:Gp(r.type._context);break;case 22:case 23:lm()}n=n.return}if(ze=t,xe=t=Ir(t.current,null),tt=Rt=e,Le=0,Bs=null,om=Sc=fi=0,St=gs=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Yr=null}return t}function Iw(t,e){do{var n=xe;try{if(Wp(),Ul.current=Su,Eu){for(var r=_e.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Eu=!1}if(ci=0,Ue=Me=_e=null,ps=!1,Us=0,im.current=null,n===null||n.return===null){Le=1,Bs=e,xe=null;break}e:{var o=t,s=n.return,l=n,a=e;if(e=tt,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Fv(s);if(m!==null){m.flags&=-257,$v(m,s,l,o,e),m.mode&1&&Vv(o,u,e),e=m,a=u;var y=e.updateQueue;if(y===null){var v=new Set;v.add(a),e.updateQueue=v}else y.add(a);break e}else{if(!(e&1)){Vv(o,u,e),um();break e}a=Error(P(426))}}else if(me&&l.mode&1){var _=Fv(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),$v(_,s,l,o,e),Bp(po(a,l));break e}}o=a=po(a,l),Le!==4&&(Le=2),gs===null?gs=[o]:gs.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=sw(o,a,e);Rv(o,h);break e;case 1:l=a;var p=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Er===null||!Er.has(g)))){o.flags|=65536,e&=-e,o.lanes|=e;var w=aw(o,l,e);Rv(o,w);break e}}o=o.return}while(o!==null)}Cw(n)}catch(I){e=I,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function Tw(){var t=Iu.current;return Iu.current=Su,t===null?Su:t}function um(){(Le===0||Le===3||Le===2)&&(Le=4),ze===null||!(fi&268435455)&&!(Sc&268435455)||ar(ze,tt)}function Cu(t,e){var n=Z;Z|=2;var r=Tw();(ze!==t||tt!==e)&&(Pn=null,ri(t,e));do try{Tk();break}catch(i){Iw(t,i)}while(!0);if(Wp(),Z=n,Iu.current=r,xe!==null)throw Error(P(261));return ze=null,tt=0,Le}function Tk(){for(;xe!==null;)bw(xe)}function bk(){for(;xe!==null&&!Qb();)bw(xe)}function bw(t){var e=Pw(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?Cw(t):xe=e,im.current=null}function Cw(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yk(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Le=6,xe=null;return}}else if(n=vk(n,e,Rt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Le===0&&(Le=5)}function Wr(t,e,n){var r=ne,i=Gt.transition;try{Gt.transition=null,ne=1,Ck(t,e,n,r)}finally{Gt.transition=i,ne=r}return null}function Ck(t,e,n,r){do to();while(hr!==null);if(Z&6)throw Error(P(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(P(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(sC(t,o),t===ze&&(xe=ze=null,tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ll||(ll=!0,Aw(au,function(){return to(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Gt.transition,Gt.transition=null;var s=ne;ne=1;var l=Z;Z|=4,im.current=null,wk(t,n),ww(n,t),GC(Jd),uu=!!Xd,Jd=Xd=null,t.current=n,Ek(n),Xb(),Z=l,ne=s,Gt.transition=o}else t.current=n;if(ll&&(ll=!1,hr=t,bu=i),o=t.pendingLanes,o===0&&(Er=null),eC(n.stateNode),Ct(t,Ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Tu)throw Tu=!1,t=yh,yh=null,t;return bu&1&&t.tag!==0&&to(),o=t.pendingLanes,o&1?t===_h?vs++:(vs=0,_h=t):vs=0,Ur(),null}function to(){if(hr!==null){var t=o_(bu),e=Gt.transition,n=ne;try{if(Gt.transition=null,ne=16>t?16:t,hr===null)var r=!1;else{if(t=hr,hr=null,bu=0,Z&6)throw Error(P(331));var i=Z;for(Z|=4,D=t.current;D!==null;){var o=D,s=o.child;if(D.flags&16){var l=o.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(D=u;D!==null;){var c=D;switch(c.tag){case 0:case 11:case 15:ms(8,c,o)}var f=c.child;if(f!==null)f.return=c,D=f;else for(;D!==null;){c=D;var d=c.sibling,m=c.return;if(vw(c),c===u){D=null;break}if(d!==null){d.return=m,D=d;break}D=m}}}var y=o.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var _=v.sibling;v.sibling=null,v=_}while(v!==null)}}D=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,D=s;else e:for(;D!==null;){if(o=D,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ms(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,D=h;break e}D=o.return}}var p=t.current;for(D=p;D!==null;){s=D;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,D=g;else e:for(s=p;D!==null;){if(l=D,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ec(9,l)}}catch(I){Se(l,l.return,I)}if(l===s){D=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,D=w;break e}D=l.return}}if(Z=i,Ur(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(hc,t)}catch{}r=!0}return r}finally{ne=n,Gt.transition=e}}return!1}function Jv(t,e,n){e=po(n,e),e=sw(t,e,1),t=wr(t,e,1),e=yt(),t!==null&&(_a(t,1,e),Ct(t,e))}function Se(t,e,n){if(t.tag===3)Jv(t,t,n);else for(;e!==null;){if(e.tag===3){Jv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=po(n,t),t=aw(e,t,1),e=wr(e,t,1),t=yt(),e!==null&&(_a(e,1,t),Ct(e,t));break}}e=e.return}}function kk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=yt(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(tt&n)===n&&(Le===4||Le===3&&(tt&130023424)===tt&&500>Ce()-sm?ri(t,0):om|=n),Ct(t,e)}function kw(t,e){e===0&&(t.mode&1?(e=Ja,Ja<<=1,!(Ja&130023424)&&(Ja=4194304)):e=1);var n=yt();t=jn(t,e),t!==null&&(_a(t,e,n),Ct(t,n))}function Pk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),kw(t,n)}function Ak(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(e),kw(t,n)}var Pw;Pw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tt.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,gk(t,e,n);It=!!(t.flags&131072)}else It=!1,me&&e.flags&1048576&&x_(e,gu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;zl(t,e),t=e.pendingProps;var i=uo(e,pt.current);eo(e,n),i=Zp(null,e,r,t,i,n);var o=em();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(o=!0,pu(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,qp(e),i.updater=_c,e.stateNode=i,i._reactInternals=e,ah(e,r,t,n),e=ch(null,e,r,!0,o,n)):(e.tag=0,me&&o&&jp(e),gt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(zl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=xk(r),t=Xt(r,t),i){case 0:e=uh(null,e,r,t,n);break e;case 1:e=zv(null,e,r,t,n);break e;case 11:e=Uv(null,e,r,t,n);break e;case 14:e=jv(null,e,r,Xt(r.type,t),n);break e}throw Error(P(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),uh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),zv(t,e,r,i,n);case 3:e:{if(fw(e),t===null)throw Error(P(387));r=e.pendingProps,o=e.memoizedState,i=o.element,M_(t,e),_u(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=po(Error(P(423)),e),e=Bv(t,e,r,n,i);break e}else if(r!==i){i=po(Error(P(424)),e),e=Bv(t,e,r,n,i);break e}else for(xt=_r(e.stateNode.containerInfo.firstChild),Ot=e,me=!0,Zt=null,n=$_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(co(),r===i){e=zn(t,e,n);break e}gt(t,e,r,n)}e=e.child}return e;case 5:return U_(e),t===null&&ih(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Zd(r,i)?s=null:o!==null&&Zd(r,o)&&(e.flags|=32),cw(t,e),gt(t,e,s,n),e.child;case 6:return t===null&&ih(e),null;case 13:return dw(t,e,n);case 4:return Yp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fo(e,null,r,n):gt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),Uv(t,e,r,i,n);case 7:return gt(t,e,e.pendingProps,n),e.child;case 8:return gt(t,e,e.pendingProps.children,n),e.child;case 12:return gt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,le(vu,r._currentValue),r._currentValue=s,o!==null)if(ln(o.value,s)){if(o.children===i.children&&!Tt.current){e=zn(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(o.tag===1){a=Mn(-1,n&-n),a.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),oh(o.return,n,e),l.lanes|=n;break}a=a.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(P(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),oh(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}gt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,eo(e,n),i=Kt(i),r=r(i),e.flags|=1,gt(t,e,r,n),e.child;case 14:return r=e.type,i=Xt(r,e.pendingProps),i=Xt(r.type,i),jv(t,e,r,i,n);case 15:return lw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Xt(r,i),zl(t,e),e.tag=1,bt(r)?(t=!0,pu(e)):t=!1,eo(e,n),V_(e,r,i),ah(e,r,i,n),ch(null,e,r,!0,t,n);case 19:return hw(t,e,n);case 22:return uw(t,e,n)}throw Error(P(156,e.tag))};function Aw(t,e){return t_(t,e)}function Rk(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wt(t,e,n,r){return new Rk(t,e,n,r)}function cm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function xk(t){if(typeof t=="function")return cm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Rp)return 14}return 2}function Ir(t,e){var n=t.alternate;return n===null?(n=Wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Wl(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")cm(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case Di:return ii(n.children,i,o,e);case Pp:s=8,i|=8;break;case xd:return t=Wt(12,n,e,i|2),t.elementType=xd,t.lanes=o,t;case Od:return t=Wt(13,n,e,i),t.elementType=Od,t.lanes=o,t;case Nd:return t=Wt(19,n,e,i),t.elementType=Nd,t.lanes=o,t;case F1:return Ic(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case L1:s=10;break e;case V1:s=9;break e;case Ap:s=11;break e;case Rp:s=14;break e;case ir:s=16,r=null;break e}throw Error(P(130,t==null?t:typeof t,""))}return e=Wt(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function ii(t,e,n,r){return t=Wt(7,t,r,e),t.lanes=n,t}function Ic(t,e,n,r){return t=Wt(22,t,r,e),t.elementType=F1,t.lanes=n,t.stateNode={isHidden:!1},t}function qf(t,e,n){return t=Wt(6,t,null,e),t.lanes=n,t}function Yf(t,e,n){return e=Wt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ok(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Af(0),this.expirationTimes=Af(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Af(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,r,i,o,s,l,a){return t=new Ok(t,e,n,l,a),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Wt(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},qp(o),t}function Nk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Rw(t){if(!t)return Rr;t=t._reactInternals;e:{if(Ii(t)!==t||t.tag!==1)throw Error(P(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(P(171))}if(t.tag===1){var n=t.type;if(bt(n))return A_(t,n,e)}return e}function xw(t,e,n,r,i,o,s,l,a){return t=fm(n,r,!0,t,i,o,s,l,a),t.context=Rw(null),n=t.current,r=yt(),i=Sr(n),o=Mn(r,i),o.callback=e??null,wr(n,o,i),t.current.lanes=i,_a(t,i,r),Ct(t,r),t}function Tc(t,e,n,r){var i=e.current,o=yt(),s=Sr(i);return n=Rw(n),e.context===null?e.context=n:e.pendingContext=n,e=Mn(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,s),t!==null&&(sn(t,i,s,o),$l(t,i,s)),s}function ku(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Zv(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dm(t,e){Zv(t,e),(t=t.alternate)&&Zv(t,e)}function Dk(){return null}var Ow=typeof reportError=="function"?reportError:function(t){console.error(t)};function hm(t){this._internalRoot=t}bc.prototype.render=hm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(P(409));Tc(t,e,null,null)};bc.prototype.unmount=hm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;di(function(){Tc(null,t,null,null)}),e[Un]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=l_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&c_(t)}};function pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Cc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ey(){}function Mk(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=ku(s);o.call(u)}}var s=xw(e,r,t,0,null,!1,!1,"",ey);return t._reactRootContainer=s,t[Un]=s.current,Ms(t.nodeType===8?t.parentNode:t),di(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ku(a);l.call(u)}}var a=fm(t,0,!1,null,null,!1,!1,"",ey);return t._reactRootContainer=a,t[Un]=a.current,Ms(t.nodeType===8?t.parentNode:t),di(function(){Tc(e,a,n,r)}),a}function kc(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var a=ku(s);l.call(a)}}Tc(e,s,t,i)}else s=Mk(n,e,t,i,r);return ku(s)}s_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ts(e.pendingLanes);n!==0&&(Np(e,n|1),Ct(e,Ce()),!(Z&6)&&(mo=Ce()+500,Ur()))}break;case 13:di(function(){var r=jn(t,1);if(r!==null){var i=yt();sn(r,t,1,i)}}),dm(t,1)}};Dp=function(t){if(t.tag===13){var e=jn(t,134217728);if(e!==null){var n=yt();sn(e,t,134217728,n)}dm(t,134217728)}};a_=function(t){if(t.tag===13){var e=Sr(t),n=jn(t,e);if(n!==null){var r=yt();sn(n,t,e,r)}dm(t,e)}};l_=function(){return ne};u_=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};Bd=function(t,e,n){switch(e){case"input":if(Ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=vc(r);if(!i)throw Error(P(90));U1(r),Ld(r,i)}}}break;case"textarea":z1(t,n);break;case"select":e=n.value,e!=null&&Qi(t,!!n.multiple,e,!1)}};Y1=am;Q1=di;var Lk={usingClientEntryPoint:!1,Events:[Ea,Fi,vc,K1,q1,am]},Go={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vk={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Z1(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||Dk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ul.isDisabled&&ul.supportsFiber)try{hc=ul.inject(Vk),wn=ul}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lk;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pm(e))throw Error(P(200));return Nk(t,e,null,n)};Lt.createRoot=function(t,e){if(!pm(t))throw Error(P(299));var n=!1,r="",i=Ow;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,r,i),t[Un]=e.current,Ms(t.nodeType===8?t.parentNode:t),new hm(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(P(188)):(t=Object.keys(t).join(","),Error(P(268,t)));return t=Z1(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return di(t)};Lt.hydrate=function(t,e,n){if(!Cc(e))throw Error(P(200));return kc(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!pm(t))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Ow;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=xw(e,null,t,1,n??null,i,!1,o,s),t[Un]=e.current,Ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new bc(e)};Lt.render=function(t,e,n){if(!Cc(e))throw Error(P(200));return kc(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!Cc(t))throw Error(P(40));return t._reactRootContainer?(di(function(){kc(null,null,t,!1,function(){t._reactRootContainer=null,t[Un]=null})}),!0):!1};Lt.unstable_batchedUpdates=am;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Cc(n))throw Error(P(200));if(t==null||t._reactInternals===void 0)throw Error(P(38));return kc(t,e,n,!1,r)};Lt.version="18.2.0-next-9e3b772b8-20220608";function Nw(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nw)}catch(t){console.error(t)}}Nw(),x1.exports=Lt;var Dw=x1.exports,ty=Dw;Ad.createRoot=ty.createRoot,Ad.hydrateRoot=ty.hydrateRoot;/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hs.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const ny="popstate";function Fk(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:l}=r.location;return Sh("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Pu(i)}return Uk(e,n,null,t)}function Oe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mw(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $k(){return Math.random().toString(36).substr(2,8)}function ry(t,e){return{usr:t.state,key:t.key,idx:e}}function Sh(t,e,n,r){return n===void 0&&(n=null),Hs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ao(e):e,{state:n,key:e&&e.key||r||$k()})}function Pu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ao(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Uk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=pr.Pop,a=null,u=c();u==null&&(u=0,s.replaceState(Hs({},s.state,{idx:u}),""));function c(){return(s.state||{idx:null}).idx}function f(){l=pr.Pop;let _=c(),h=_==null?null:_-u;u=_,a&&a({action:l,location:v.location,delta:h})}function d(_,h){l=pr.Push;let p=Sh(v.location,_,h);n&&n(p,_),u=c()+1;let g=ry(p,u),w=v.createHref(p);try{s.pushState(g,"",w)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(w)}o&&a&&a({action:l,location:v.location,delta:1})}function m(_,h){l=pr.Replace;let p=Sh(v.location,_,h);n&&n(p,_),u=c();let g=ry(p,u),w=v.createHref(p);s.replaceState(g,"",w),o&&a&&a({action:l,location:v.location,delta:0})}function y(_){let h=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof _=="string"?_:Pu(_);return p=p.replace(/ $/,"%20"),Oe(h,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,h)}let v={get action(){return l},get location(){return t(i,s)},listen(_){if(a)throw new Error("A history only accepts one active listener");return i.addEventListener(ny,f),a=_,()=>{i.removeEventListener(ny,f),a=null}},createHref(_){return e(i,_)},createURL:y,encodeLocation(_){let h=y(_);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:m,go(_){return s.go(_)}};return v}var iy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(iy||(iy={}));function jk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ao(e):e,i=mm(r.pathname||"/",n);if(i==null)return null;let o=Lw(t);zk(o);let s=null;for(let l=0;s==null&&l<o.length;++l){let a=eP(i);s=Xk(o[l],a)}return s}function Lw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let a={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};a.relativePath.startsWith("/")&&(Oe(a.relativePath.startsWith(r),'Absolute route path "'+a.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),a.relativePath=a.relativePath.slice(r.length));let u=Tr([r,a.relativePath]),c=n.concat(a);o.children&&o.children.length>0&&(Oe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Lw(o.children,e,c,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:Yk(u,o.index),routesMeta:c})};return t.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let a of Vw(o.path))i(o,s,a)}),e}function Vw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Vw(r.join("/")),l=[];return l.push(...s.map(a=>a===""?o:[o,a].join("/"))),i&&l.push(...s),l.map(a=>t.startsWith("/")&&a===""?"/":a)}function zk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qk(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bk=/^:[\w-]+$/,Hk=3,Wk=2,Gk=1,Kk=10,qk=-2,oy=t=>t==="*";function Yk(t,e){let n=t.split("/"),r=n.length;return n.some(oy)&&(r+=qk),e&&(r+=Wk),n.filter(i=>!oy(i)).reduce((i,o)=>i+(Bk.test(o)?Hk:o===""?Gk:Kk),r)}function Qk(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Xk(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let l=n[s],a=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=Jk({path:l.relativePath,caseSensitive:l.caseSensitive,end:a},u);if(!c)return null;Object.assign(r,c.params);let f=l.route;o.push({params:r,pathname:Tr([i,c.pathname]),pathnameBase:iP(Tr([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=Tr([i,c.pathnameBase]))}return o}function Jk(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Zk(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:m}=c;if(d==="*"){let v=l[f]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const y=l[f];return m&&!y?u[d]=void 0:u[d]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:t}}function Zk(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mw(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,a)=>(r.push({paramName:l,isOptional:a!=null}),a?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function eP(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Mw(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function mm(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function tP(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ao(t):t;return{pathname:n?n.startsWith("/")?n:nP(n,e):e,search:oP(r),hash:sP(i)}}function nP(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Qf(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rP(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Fw(t,e){let n=rP(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $w(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ao(t):(i=Hs({},t),Oe(!i.pathname||!i.pathname.includes("?"),Qf("?","pathname","search",i)),Oe(!i.pathname||!i.pathname.includes("#"),Qf("#","pathname","hash",i)),Oe(!i.search||!i.search.includes("#"),Qf("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let f=e.length-1;if(!r&&s.startsWith("..")){let d=s.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}l=f>=0?e[f]:"/"}let a=tP(i,l),u=s&&s!=="/"&&s.endsWith("/"),c=(o||s===".")&&n.endsWith("/");return!a.pathname.endsWith("/")&&(u||c)&&(a.pathname+="/"),a}const Tr=t=>t.join("/").replace(/\/\/+/g,"/"),iP=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),oP=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,sP=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function aP(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Uw=["post","put","patch","delete"];new Set(Uw);const lP=["get",...Uw];new Set(lP);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ws(){return Ws=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ws.apply(this,arguments)}const gm=E.createContext(null),uP=E.createContext(null),Ti=E.createContext(null),Pc=E.createContext(null),bi=E.createContext({outlet:null,matches:[],isDataRoute:!1}),jw=E.createContext(null);function cP(t,e){let{relative:n}=e===void 0?{}:e;Ia()||Oe(!1);let{basename:r,navigator:i}=E.useContext(Ti),{hash:o,pathname:s,search:l}=Bw(t,{relative:n}),a=s;return r!=="/"&&(a=s==="/"?r:Tr([r,s])),i.createHref({pathname:a,search:l,hash:o})}function Ia(){return E.useContext(Pc)!=null}function Ac(){return Ia()||Oe(!1),E.useContext(Pc).location}function zw(t){E.useContext(Ti).static||E.useLayoutEffect(t)}function vm(){let{isDataRoute:t}=E.useContext(bi);return t?IP():fP()}function fP(){Ia()||Oe(!1);let t=E.useContext(gm),{basename:e,future:n,navigator:r}=E.useContext(Ti),{matches:i}=E.useContext(bi),{pathname:o}=Ac(),s=JSON.stringify(Fw(i,n.v7_relativeSplatPath)),l=E.useRef(!1);return zw(()=>{l.current=!0}),E.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let f=$w(u,JSON.parse(s),o,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Tr([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,s,o,t])}function Bw(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=E.useContext(Ti),{matches:i}=E.useContext(bi),{pathname:o}=Ac(),s=JSON.stringify(Fw(i,r.v7_relativeSplatPath));return E.useMemo(()=>$w(t,JSON.parse(s),o,n==="path"),[t,s,o,n])}function dP(t,e){return hP(t,e)}function hP(t,e,n,r){Ia()||Oe(!1);let{navigator:i}=E.useContext(Ti),{matches:o}=E.useContext(bi),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let u=Ac(),c;if(e){var f;let _=typeof e=="string"?Ao(e):e;a==="/"||(f=_.pathname)!=null&&f.startsWith(a)||Oe(!1),c=_}else c=u;let d=c.pathname||"/",m=d;if(a!=="/"){let _=a.replace(/^\//,"").split("/");m="/"+d.replace(/^\//,"").split("/").slice(_.length).join("/")}let y=jk(t,{pathname:m}),v=yP(y&&y.map(_=>Object.assign({},_,{params:Object.assign({},l,_.params),pathname:Tr([a,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Tr([a,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),o,n,r);return e&&v?E.createElement(Pc.Provider,{value:{location:Ws({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:pr.Pop}},v):v}function pP(){let t=SP(),e=aP(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const mP=E.createElement(pP,null);class gP extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(bi.Provider,{value:this.props.routeContext},E.createElement(jw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vP(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(gm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(bi.Provider,{value:e},r)}function yP(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var o;if((o=n)!=null&&o.errors)t=n.matches;else return null}let s=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let c=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id]));c>=0||Oe(!1),s=s.slice(0,Math.min(s.length,c+1))}let a=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<s.length;c++){let f=s[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:m}=n,y=f.route.loader&&d[f.route.id]===void 0&&(!m||m[f.route.id]===void 0);if(f.route.lazy||y){a=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((c,f,d)=>{let m,y=!1,v=null,_=null;n&&(m=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||mP,a&&(u<0&&d===0?(TP("route-fallback",!1),y=!0,_=null):u===d&&(y=!0,_=f.route.hydrateFallbackElement||null)));let h=e.concat(s.slice(0,d+1)),p=()=>{let g;return m?g=v:y?g=_:f.route.Component?g=E.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=c,E.createElement(vP,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?E.createElement(gP,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Hw=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Hw||{}),Au=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Au||{});function _P(t){let e=E.useContext(gm);return e||Oe(!1),e}function wP(t){let e=E.useContext(uP);return e||Oe(!1),e}function EP(t){let e=E.useContext(bi);return e||Oe(!1),e}function Ww(t){let e=EP(),n=e.matches[e.matches.length-1];return n.route.id||Oe(!1),n.route.id}function SP(){var t;let e=E.useContext(jw),n=wP(Au.UseRouteError),r=Ww(Au.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function IP(){let{router:t}=_P(Hw.UseNavigateStable),e=Ww(Au.UseNavigateStable),n=E.useRef(!1);return zw(()=>{n.current=!0}),E.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ws({fromRouteId:e},o)))},[t,e])}const sy={};function TP(t,e,n){!e&&!sy[t]&&(sy[t]=!0)}function rr(t){Oe(!1)}function bP(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:o,static:s=!1,future:l}=t;Ia()&&Oe(!1);let a=e.replace(/^\/*/,"/"),u=E.useMemo(()=>({basename:a,navigator:o,static:s,future:Ws({v7_relativeSplatPath:!1},l)}),[a,l,o,s]);typeof r=="string"&&(r=Ao(r));let{pathname:c="/",search:f="",hash:d="",state:m=null,key:y="default"}=r,v=E.useMemo(()=>{let _=mm(c,a);return _==null?null:{location:{pathname:_,search:f,hash:d,state:m,key:y},navigationType:i}},[a,c,f,d,m,y,i]);return v==null?null:E.createElement(Ti.Provider,{value:u},E.createElement(Pc.Provider,{children:n,value:v}))}function CP(t){let{children:e,location:n}=t;return dP(Ih(e),n)}new Promise(()=>{});function Ih(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let o=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Ih(r.props.children,o));return}r.type!==rr&&Oe(!1),!r.props.index||!r.props.children||Oe(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Ih(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Th(){return Th=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Th.apply(this,arguments)}function kP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PP(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function AP(t,e){return t.button===0&&(!e||e==="_self")&&!PP(t)}const RP=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xP="6";try{window.__reactRouterVersion=xP}catch{}const OP="startTransition",ay=Pd[OP];function NP(t){let{basename:e,children:n,future:r,window:i}=t,o=E.useRef();o.current==null&&(o.current=Fk({window:i,v5Compat:!0}));let s=o.current,[l,a]=E.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},c=E.useCallback(f=>{u&&ay?ay(()=>a(f)):a(f)},[a,u]);return E.useLayoutEffect(()=>s.listen(c),[s,c]),E.createElement(bP,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const DP=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",MP=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ym=E.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:a,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=kP(e,RP),{basename:m}=E.useContext(Ti),y,v=!1;if(typeof u=="string"&&MP.test(u)&&(y=u,DP))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),I=mm(w.pathname,m);w.origin===g.origin&&I!=null?u=I+w.search+w.hash:v=!0}catch{}let _=cP(u,{relative:i}),h=LP(u,{replace:s,state:l,target:a,preventScrollReset:c,relative:i,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||h(g)}return E.createElement("a",Th({},d,{href:y||_,onClick:v||o?r:p,ref:n,target:a}))});var ly;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(ly||(ly={}));var uy;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(uy||(uy={}));function LP(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l}=e===void 0?{}:e,a=vm(),u=Ac(),c=Bw(t,{relative:s});return E.useCallback(f=>{if(AP(f,n)){f.preventDefault();let d=r!==void 0?r:Pu(u)===Pu(c);a(t,{replace:d,state:i,preventScrollReset:o,relative:s,unstable_viewTransition:l})}},[u,a,c,r,i,n,t,o,s,l])}var Gw={exports:{}},VP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",FP=VP,$P=FP;function Kw(){}function qw(){}qw.resetWarningCache=Kw;var UP=function(){function t(r,i,o,s,l,a){if(a!==$P){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:qw,resetWarningCache:Kw};return n.PropTypes=n,n};Gw.exports=UP();var jP=Gw.exports;const j=w1(jP),zP="/assets/Designer-CSJrhW2Z.png";function Yw({doctor:t}){return S.jsx("div",{className:"docCardBox",children:S.jsxs("div",{children:[S.jsx("div",{className:"docimgcontainer",children:S.jsx("img",{className:"docimg",src:zP,alt:"Profile"})}),S.jsx("h3",{children:t.name}),S.jsxs("p",{children:[S.jsx("strong",{children:"Address:"})," ",t.address]}),S.jsxs("p",{children:[S.jsx("strong",{children:"City:"})," ",t.city]}),S.jsx(ym,{className:"fakebutton",to:{pathname:"/bookApp",state:{doctorName:t.name}},children:"Book an Appointment"})]})})}Yw.propTypes={doctor:j.shape({name:j.string.isRequired,address:j.string.isRequired,city:j.string.isRequired,speciality:j.string.isRequired}).isRequired};function Qw({doctors:t,selectedCity:e,selectedSpecialty:n}){const r=t.filter(i=>(!e||i.city===e)&&(!n||i.speciality===n));return S.jsxs("div",{className:"bookDocBottom",children:[S.jsx("h2",{children:"Available Doctors"}),S.jsx("div",{className:"doctorlist",children:r.length>0?r.map(i=>S.jsx(Yw,{doctor:i},i.name)):e===""||n===""?S.jsx("p",{children:"Please Select An Option"}):S.jsx("p",{children:"No doctors found matching the selected criteria."})})]})}Qw.propTypes={doctors:j.arrayOf(j.shape({name:j.string.isRequired,address:j.string.isRequired,city:j.string.isRequired,speciality:j.string.isRequired}).isRequired).isRequired,selectedCity:j.string.isRequired,selectedSpecialty:j.string.isRequired};const BP=[{name:"Dr. John Smith",address:"123 Main St, Delhi",city:"Delhi",speciality:"Physician"},{name:"Dr. Emily Johnson",address:"456 Elm St, Mumbai",city:"Mumbai",speciality:"Physician"},{name:"Dr. Michael Lee",address:"789 Oak St, Chennai",city:"Chennai",speciality:"Physician"},{name:"Dr. Sarah Patel",address:"321 Maple Ave, Delhi",city:"Delhi",speciality:"HeartSpecialist"},{name:"Dr. David Brown",address:"567 Pine St, Mumbai",city:"Mumbai",speciality:"HeartSpecialist"},{name:"Dr. Priya Gupta",address:"890 Cedar St, Chennai",city:"Chennai",speciality:"HeartSpecialist"},{name:"Ram Babu",address:"456 Elm St, Mumbai",city:"Mumbai",speciality:"Physician"},{name:"Ali brother",address:"456 Elm St, Mumbai",city:"Mumbai",speciality:"Physician"},{name:"Ayush",address:"456 Elm St, Mumbai",city:"Mumbai",speciality:"Physician"}],HP={doctors:BP};function WP(){const[t,e]=E.useState(""),[n,r]=E.useState(""),[i,o]=E.useState(HP.doctors),[s,l]=E.useState([]);E.useEffect(()=>{a()},[i,t,n]);function a(){const f=i.filter(d=>d.city===t&&d.speciality===n);l(f)}E.useEffect(()=>{console.log({filteredDoctors:s})},[s]);function u(f){e(f.target.value)}console.log(t),console.log(n);function c(f){r(f.target.value)}return S.jsxs("div",{className:"bookDocPage",children:[S.jsxs("div",{className:"bookDocTop",children:[S.jsxs("div",{className:"bookDocTop-info",children:[S.jsx("h1",{children:"Find Your Doctor"}),S.jsx("p",{children:"Welcome to our convenient online booking platform! Whether you're seeking specialized care or a routine check-up, our extensive database of qualified doctors is here to serve you. Simply select your city and preferred specialty to discover available practitioners near you. With easy booking and seamless appointment scheduling, taking charge of your health has never been simpler. Start your journey to wellness today!"})]}),S.jsxs("div",{className:"bookDocTop-select",children:[S.jsx("label",{htmlFor:"selectCity"}),S.jsxs("select",{id:"selectCity",onChange:u,value:t,children:[S.jsx("option",{value:"",children:"-- Select City --"}),S.jsx("option",{value:"Mumbai",children:"Mumbai"}),S.jsx("option",{value:"Delhi",children:"Delhi"})]}),S.jsx("label",{htmlFor:"selectSpeciality"}),S.jsxs("select",{id:"selectSpeciality",onChange:c,value:n,children:[S.jsx("option",{value:"",children:"-- Select Specialty --"}),S.jsx("option",{value:"Physician",children:"Physician"}),S.jsx("option",{value:"HeartSpecialist",children:"Heart Specialist"})]})]})]}),S.jsx("div",{className:"doctorlist",children:S.jsx(Qw,{doctors:s})})]})}const GP=()=>{const[t,e]=E.useState({firstName:"",lastName:"",phoneNumber:"",date:"",time:"",message:""}),n=i=>{const{name:o,value:s}=i.target;e(l=>({...l,[o]:s}))},r=async i=>{i.preventDefault();try{const o=await fetch("http://localhost:5000/appointments",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(o.ok)console.log("Form submitted successfully:",t);else{const s=await o.json();console.error("Failed to submit form:",s.error)}}catch(o){console.error("Error submitting form:",o)}};return S.jsx("div",{className:"bookFormBox",children:S.jsxs("form",{onSubmit:r,children:[S.jsxs("div",{className:"fnln",children:[S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"firstName",children:"First Name:"}),S.jsx("input",{type:"text",id:"firstName",name:"firstName",value:t.firstName,onChange:n,required:!0})]}),S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"lastName",children:"Last Name:"}),S.jsx("input",{type:"text",id:"lastName",name:"lastName",value:t.lastName,onChange:n,required:!0})]})]}),S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"phoneNumber",children:"Phone Number:"}),S.jsx("input",{className:"phninput",type:"text",id:"phoneNumber",name:"phoneNumber",value:t.phoneNumber,onChange:n,required:!0})]}),S.jsxs("div",{className:"fnln",children:[S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"date",children:"Date:"}),S.jsx("input",{type:"date",id:"date",name:"date",value:t.date,onChange:n,required:!0})]}),S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"time",children:"Time:"}),S.jsx("input",{type:"time",id:"time",name:"time",value:t.time,onChange:n,required:!0})]})]}),S.jsxs("div",{className:"fn",children:[S.jsx("label",{htmlFor:"message",children:"Message:"}),S.jsx("textarea",{className:"textarea",id:"message",name:"message",value:t.message,onChange:n,required:!0})]}),S.jsx("button",{type:"submit",className:"bookappbutton",children:"Book Appointment"})]})})},KP=()=>{const[t,e]=E.useState([]);return E.useEffect(()=>{(async()=>{try{const r=await fetch("http://localhost:5000/appointments");if(r.ok){const i=await r.json();e(i)}else console.error("Failed to fetch appointments")}catch(r){console.error("Error fetching appointments:",r)}})()},[]),S.jsxs("div",{children:[S.jsx("h2",{className:"h2booked",children:"Booked Appointments"}),S.jsxs("table",{className:"apptb",children:[S.jsx("thead",{children:S.jsxs("tr",{children:[S.jsx("th",{children:"Name"}),S.jsx("th",{children:"Date"}),S.jsx("th",{children:"Time"}),S.jsx("th",{children:"Message"})]})}),S.jsx("tbody",{children:t.map((n,r)=>S.jsxs("tr",{children:[S.jsxs("td",{children:[n.firstName," ",n.lastName]}),S.jsx("td",{children:new Date(n.date).toLocaleDateString()}),S.jsx("td",{children:n.time}),S.jsx("td",{children:n.message})]},r))})]})]})};function hi(t){"@babel/helpers - typeof";return hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hi(t)}function qP(t,e){if(hi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(hi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Xw(t){var e=qP(t,"string");return hi(e)=="symbol"?e:String(e)}function rs(t,e,n){return e=Xw(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function cy(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?cy(Object(n),!0).forEach(function(r){rs(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):cy(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function YP(t){if(Array.isArray(t))return t}function QP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,o,s,l=[],a=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;a=!1}else for(;!(a=(r=o.call(n)).done)&&(l.push(r.value),l.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{if(!a&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function bh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Jw(t,e){if(t){if(typeof t=="string")return bh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return bh(t,e)}}function XP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ln(t,e){return YP(t)||QP(t,e)||Jw(t,e)||XP()}function JP(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Qn(t,e){if(t==null)return{};var n=JP(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var ZP=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function eA(t){var e=t.defaultInputValue,n=e===void 0?"":e,r=t.defaultMenuIsOpen,i=r===void 0?!1:r,o=t.defaultValue,s=o===void 0?null:o,l=t.inputValue,a=t.menuIsOpen,u=t.onChange,c=t.onInputChange,f=t.onMenuClose,d=t.onMenuOpen,m=t.value,y=Qn(t,ZP),v=E.useState(l!==void 0?l:n),_=Ln(v,2),h=_[0],p=_[1],g=E.useState(a!==void 0?a:i),w=Ln(g,2),I=w[0],b=w[1],T=E.useState(m!==void 0?m:s),C=Ln(T,2),L=C[0],V=C[1],oe=E.useCallback(function(R,U){typeof u=="function"&&u(R,U),V(R)},[u]),Ee=E.useCallback(function(R,U){var H;typeof c=="function"&&(H=c(R,U)),p(H!==void 0?H:R)},[c]),mt=E.useCallback(function(){typeof d=="function"&&d(),b(!0)},[d]),Ut=E.useCallback(function(){typeof f=="function"&&f(),b(!1)},[f]),ke=l!==void 0?l:h,ge=a!==void 0?a:I,Et=m!==void 0?m:L;return $($({},y),{},{inputValue:ke,menuIsOpen:ge,onChange:oe,onInputChange:Ee,onMenuClose:Ut,onMenuOpen:mt,value:Et})}function z(){return z=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},z.apply(this,arguments)}function tA(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fy(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,Xw(r.key),r)}}function nA(t,e,n){return e&&fy(t.prototype,e),n&&fy(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ch(t,e){return Ch=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ch(t,e)}function rA(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ch(t,e)}function Ru(t){return Ru=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ru(t)}function Zw(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Zw=function(){return!!t})()}function iA(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oA(t,e){if(e&&(hi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return iA(t)}function sA(t){var e=Zw();return function(){var r=Ru(t),i;if(e){var o=Ru(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return oA(this,i)}}function aA(t){if(Array.isArray(t))return bh(t)}function lA(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uA(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _m(t){return aA(t)||lA(t)||Jw(t)||uA()}function cA(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function fA(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var dA=function(){function t(n){var r=this;this._insertTag=function(i){var o;r.tags.length===0?r.insertionPoint?o=r.insertionPoint.nextSibling:r.prepend?o=r.container.firstChild:o=r.before:o=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,o),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(fA(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var o=cA(i);try{o.insertRule(r,o.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),at="-ms-",xu="-moz-",ee="-webkit-",eE="comm",wm="rule",Em="decl",hA="@import",tE="@keyframes",pA="@layer",mA=Math.abs,Rc=String.fromCharCode,gA=Object.assign;function vA(t,e){return Je(t,0)^45?(((e<<2^Je(t,0))<<2^Je(t,1))<<2^Je(t,2))<<2^Je(t,3):0}function nE(t){return t.trim()}function yA(t,e){return(t=e.exec(t))?t[0]:t}function te(t,e,n){return t.replace(e,n)}function kh(t,e){return t.indexOf(e)}function Je(t,e){return t.charCodeAt(e)|0}function Gs(t,e,n){return t.slice(e,n)}function dn(t){return t.length}function Sm(t){return t.length}function cl(t,e){return e.push(t),t}function _A(t,e){return t.map(e).join("")}var xc=1,go=1,rE=0,kt=0,Ae=0,Ro="";function Oc(t,e,n,r,i,o,s){return{value:t,root:e,parent:n,type:r,props:i,children:o,line:xc,column:go,length:s,return:""}}function Ko(t,e){return gA(Oc("",null,null,"",null,null,0),t,{length:-t.length},e)}function wA(){return Ae}function EA(){return Ae=kt>0?Je(Ro,--kt):0,go--,Ae===10&&(go=1,xc--),Ae}function Nt(){return Ae=kt<rE?Je(Ro,kt++):0,go++,Ae===10&&(go=1,xc++),Ae}function Sn(){return Je(Ro,kt)}function Gl(){return kt}function Ta(t,e){return Gs(Ro,t,e)}function Ks(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function iE(t){return xc=go=1,rE=dn(Ro=t),kt=0,[]}function oE(t){return Ro="",t}function Kl(t){return nE(Ta(kt-1,Ph(t===91?t+2:t===40?t+1:t)))}function SA(t){for(;(Ae=Sn())&&Ae<33;)Nt();return Ks(t)>2||Ks(Ae)>3?"":" "}function IA(t,e){for(;--e&&Nt()&&!(Ae<48||Ae>102||Ae>57&&Ae<65||Ae>70&&Ae<97););return Ta(t,Gl()+(e<6&&Sn()==32&&Nt()==32))}function Ph(t){for(;Nt();)switch(Ae){case t:return kt;case 34:case 39:t!==34&&t!==39&&Ph(Ae);break;case 40:t===41&&Ph(t);break;case 92:Nt();break}return kt}function TA(t,e){for(;Nt()&&t+Ae!==57;)if(t+Ae===84&&Sn()===47)break;return"/*"+Ta(e,kt-1)+"*"+Rc(t===47?t:Nt())}function bA(t){for(;!Ks(Sn());)Nt();return Ta(t,kt)}function CA(t){return oE(ql("",null,null,null,[""],t=iE(t),0,[0],t))}function ql(t,e,n,r,i,o,s,l,a){for(var u=0,c=0,f=s,d=0,m=0,y=0,v=1,_=1,h=1,p=0,g="",w=i,I=o,b=r,T=g;_;)switch(y=p,p=Nt()){case 40:if(y!=108&&Je(T,f-1)==58){kh(T+=te(Kl(p),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:T+=Kl(p);break;case 9:case 10:case 13:case 32:T+=SA(y);break;case 92:T+=IA(Gl()-1,7);continue;case 47:switch(Sn()){case 42:case 47:cl(kA(TA(Nt(),Gl()),e,n),a);break;default:T+="/"}break;case 123*v:l[u++]=dn(T)*h;case 125*v:case 59:case 0:switch(p){case 0:case 125:_=0;case 59+c:h==-1&&(T=te(T,/\f/g,"")),m>0&&dn(T)-f&&cl(m>32?hy(T+";",r,n,f-1):hy(te(T," ","")+";",r,n,f-2),a);break;case 59:T+=";";default:if(cl(b=dy(T,e,n,u,c,i,l,g,w=[],I=[],f),o),p===123)if(c===0)ql(T,e,b,b,w,o,f,l,I);else switch(d===99&&Je(T,3)===110?100:d){case 100:case 108:case 109:case 115:ql(t,b,b,r&&cl(dy(t,b,b,0,0,i,l,g,i,w=[],f),I),i,I,f,l,r?w:I);break;default:ql(T,b,b,b,[""],I,0,l,I)}}u=c=m=0,v=h=1,g=T="",f=s;break;case 58:f=1+dn(T),m=y;default:if(v<1){if(p==123)--v;else if(p==125&&v++==0&&EA()==125)continue}switch(T+=Rc(p),p*v){case 38:h=c>0?1:(T+="\f",-1);break;case 44:l[u++]=(dn(T)-1)*h,h=1;break;case 64:Sn()===45&&(T+=Kl(Nt())),d=Sn(),c=f=dn(g=T+=bA(Gl())),p++;break;case 45:y===45&&dn(T)==2&&(v=0)}}return o}function dy(t,e,n,r,i,o,s,l,a,u,c){for(var f=i-1,d=i===0?o:[""],m=Sm(d),y=0,v=0,_=0;y<r;++y)for(var h=0,p=Gs(t,f+1,f=mA(v=s[y])),g=t;h<m;++h)(g=nE(v>0?d[h]+" "+p:te(p,/&\f/g,d[h])))&&(a[_++]=g);return Oc(t,e,n,i===0?wm:l,a,u,c)}function kA(t,e,n){return Oc(t,e,n,eE,Rc(wA()),Gs(t,2,-2),0)}function hy(t,e,n,r){return Oc(t,e,n,Em,Gs(t,0,r),Gs(t,r+1,-1),r)}function no(t,e){for(var n="",r=Sm(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function PA(t,e,n,r){switch(t.type){case pA:if(t.children.length)break;case hA:case Em:return t.return=t.return||t.value;case eE:return"";case tE:return t.return=t.value+"{"+no(t.children,r)+"}";case wm:t.value=t.props.join(",")}return dn(n=no(t.children,r))?t.return=t.value+"{"+n+"}":""}function AA(t){var e=Sm(t);return function(n,r,i,o){for(var s="",l=0;l<e;l++)s+=t[l](n,r,i,o)||"";return s}}function RA(t){return function(e){e.root||(e=e.return)&&t(e)}}function xA(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var OA=function(e,n,r){for(var i=0,o=0;i=o,o=Sn(),i===38&&o===12&&(n[r]=1),!Ks(o);)Nt();return Ta(e,kt)},NA=function(e,n){var r=-1,i=44;do switch(Ks(i)){case 0:i===38&&Sn()===12&&(n[r]=1),e[r]+=OA(kt-1,n,r);break;case 2:e[r]+=Kl(i);break;case 4:if(i===44){e[++r]=Sn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Rc(i)}while(i=Nt());return e},DA=function(e,n){return oE(NA(iE(e),n))},py=new WeakMap,MA=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!py.get(r))&&!i){py.set(e,!0);for(var o=[],s=DA(n,o),l=r.props,a=0,u=0;a<s.length;a++)for(var c=0;c<l.length;c++,u++)e.props[u]=o[a]?s[a].replace(/&\f/g,l[c]):l[c]+" "+s[a]}}},LA=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function sE(t,e){switch(vA(t,e)){case 5103:return ee+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ee+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return ee+t+xu+t+at+t+t;case 6828:case 4268:return ee+t+at+t+t;case 6165:return ee+t+at+"flex-"+t+t;case 5187:return ee+t+te(t,/(\w+).+(:[^]+)/,ee+"box-$1$2"+at+"flex-$1$2")+t;case 5443:return ee+t+at+"flex-item-"+te(t,/flex-|-self/,"")+t;case 4675:return ee+t+at+"flex-line-pack"+te(t,/align-content|flex-|-self/,"")+t;case 5548:return ee+t+at+te(t,"shrink","negative")+t;case 5292:return ee+t+at+te(t,"basis","preferred-size")+t;case 6060:return ee+"box-"+te(t,"-grow","")+ee+t+at+te(t,"grow","positive")+t;case 4554:return ee+te(t,/([^-])(transform)/g,"$1"+ee+"$2")+t;case 6187:return te(te(te(t,/(zoom-|grab)/,ee+"$1"),/(image-set)/,ee+"$1"),t,"")+t;case 5495:case 3959:return te(t,/(image-set\([^]*)/,ee+"$1$`$1");case 4968:return te(te(t,/(.+:)(flex-)?(.*)/,ee+"box-pack:$3"+at+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ee+t+t;case 4095:case 3583:case 4068:case 2532:return te(t,/(.+)-inline(.+)/,ee+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(dn(t)-1-e>6)switch(Je(t,e+1)){case 109:if(Je(t,e+4)!==45)break;case 102:return te(t,/(.+:)(.+)-([^]+)/,"$1"+ee+"$2-$3$1"+xu+(Je(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~kh(t,"stretch")?sE(te(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Je(t,e+1)!==115)break;case 6444:switch(Je(t,dn(t)-3-(~kh(t,"!important")&&10))){case 107:return te(t,":",":"+ee)+t;case 101:return te(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+ee+(Je(t,14)===45?"inline-":"")+"box$3$1"+ee+"$2$3$1"+at+"$2box$3")+t}break;case 5936:switch(Je(t,e+11)){case 114:return ee+t+at+te(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return ee+t+at+te(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return ee+t+at+te(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return ee+t+at+t+t}return t}var VA=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case Em:e.return=sE(e.value,e.length);break;case tE:return no([Ko(e,{value:te(e.value,"@","@"+ee)})],i);case wm:if(e.length)return _A(e.props,function(o){switch(yA(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return no([Ko(e,{props:[te(o,/:(read-\w+)/,":"+xu+"$1")]})],i);case"::placeholder":return no([Ko(e,{props:[te(o,/:(plac\w+)/,":"+ee+"input-$1")]}),Ko(e,{props:[te(o,/:(plac\w+)/,":"+xu+"$1")]}),Ko(e,{props:[te(o,/:(plac\w+)/,at+"input-$1")]})],i)}return""})}},FA=[VA],$A=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var _=v.getAttribute("data-emotion");_.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var i=e.stylisPlugins||FA,o={},s,l=[];s=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var _=v.getAttribute("data-emotion").split(" "),h=1;h<_.length;h++)o[_[h]]=!0;l.push(v)});var a,u=[MA,LA];{var c,f=[PA,RA(function(v){c.insert(v)})],d=AA(u.concat(i,f)),m=function(_){return no(CA(_),d)};a=function(_,h,p,g){c=p,m(_?_+"{"+h.styles+"}":h.styles),g&&(y.inserted[h.name]=!0)}}var y={key:n,sheet:new dA({key:n,container:s,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return y.sheet.hydrate(l),y},aE={exports:{}},ie={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge=typeof Symbol=="function"&&Symbol.for,Im=Ge?Symbol.for("react.element"):60103,Tm=Ge?Symbol.for("react.portal"):60106,Nc=Ge?Symbol.for("react.fragment"):60107,Dc=Ge?Symbol.for("react.strict_mode"):60108,Mc=Ge?Symbol.for("react.profiler"):60114,Lc=Ge?Symbol.for("react.provider"):60109,Vc=Ge?Symbol.for("react.context"):60110,bm=Ge?Symbol.for("react.async_mode"):60111,Fc=Ge?Symbol.for("react.concurrent_mode"):60111,$c=Ge?Symbol.for("react.forward_ref"):60112,Uc=Ge?Symbol.for("react.suspense"):60113,UA=Ge?Symbol.for("react.suspense_list"):60120,jc=Ge?Symbol.for("react.memo"):60115,zc=Ge?Symbol.for("react.lazy"):60116,jA=Ge?Symbol.for("react.block"):60121,zA=Ge?Symbol.for("react.fundamental"):60117,BA=Ge?Symbol.for("react.responder"):60118,HA=Ge?Symbol.for("react.scope"):60119;function Ft(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Im:switch(t=t.type,t){case bm:case Fc:case Nc:case Mc:case Dc:case Uc:return t;default:switch(t=t&&t.$$typeof,t){case Vc:case $c:case zc:case jc:case Lc:return t;default:return e}}case Tm:return e}}}function lE(t){return Ft(t)===Fc}ie.AsyncMode=bm;ie.ConcurrentMode=Fc;ie.ContextConsumer=Vc;ie.ContextProvider=Lc;ie.Element=Im;ie.ForwardRef=$c;ie.Fragment=Nc;ie.Lazy=zc;ie.Memo=jc;ie.Portal=Tm;ie.Profiler=Mc;ie.StrictMode=Dc;ie.Suspense=Uc;ie.isAsyncMode=function(t){return lE(t)||Ft(t)===bm};ie.isConcurrentMode=lE;ie.isContextConsumer=function(t){return Ft(t)===Vc};ie.isContextProvider=function(t){return Ft(t)===Lc};ie.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Im};ie.isForwardRef=function(t){return Ft(t)===$c};ie.isFragment=function(t){return Ft(t)===Nc};ie.isLazy=function(t){return Ft(t)===zc};ie.isMemo=function(t){return Ft(t)===jc};ie.isPortal=function(t){return Ft(t)===Tm};ie.isProfiler=function(t){return Ft(t)===Mc};ie.isStrictMode=function(t){return Ft(t)===Dc};ie.isSuspense=function(t){return Ft(t)===Uc};ie.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===Nc||t===Fc||t===Mc||t===Dc||t===Uc||t===UA||typeof t=="object"&&t!==null&&(t.$$typeof===zc||t.$$typeof===jc||t.$$typeof===Lc||t.$$typeof===Vc||t.$$typeof===$c||t.$$typeof===zA||t.$$typeof===BA||t.$$typeof===HA||t.$$typeof===jA)};ie.typeOf=Ft;aE.exports=ie;var WA=aE.exports,uE=WA,GA={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},KA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cE={};cE[uE.ForwardRef]=GA;cE[uE.Memo]=KA;var qA=!0;function YA(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var fE=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||qA===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},QA=function(e,n,r){fE(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var o=n;do e.insert(n===o?"."+i:"",o,e.sheet,!0),o=o.next;while(o!==void 0)}};function XA(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var JA={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ZA=/[A-Z]|^ms/g,e2=/_EMO_([^_]+?)_([^]*?)_EMO_/g,dE=function(e){return e.charCodeAt(1)===45},my=function(e){return e!=null&&typeof e!="boolean"},Xf=xA(function(t){return dE(t)?t:t.replace(ZA,"-$&").toLowerCase()}),gy=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(e2,function(r,i,o){return hn={name:i,styles:o,next:hn},i})}return JA[e]!==1&&!dE(e)&&typeof n=="number"&&n!==0?n+"px":n};function qs(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return hn={name:n.name,styles:n.styles,next:hn},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)hn={name:r.name,styles:r.styles,next:hn},r=r.next;var i=n.styles+";";return i}return t2(t,e,n)}case"function":{if(t!==void 0){var o=hn,s=n(t);return hn=o,qs(t,e,s)}break}}if(e==null)return n;var l=e[n];return l!==void 0?l:n}function t2(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=qs(t,e,n[i])+";";else for(var o in n){var s=n[o];if(typeof s!="object")e!=null&&e[s]!==void 0?r+=o+"{"+e[s]+"}":my(s)&&(r+=Xf(o)+":"+gy(o,s)+";");else if(Array.isArray(s)&&typeof s[0]=="string"&&(e==null||e[s[0]]===void 0))for(var l=0;l<s.length;l++)my(s[l])&&(r+=Xf(o)+":"+gy(o,s[l])+";");else{var a=qs(t,e,s);switch(o){case"animation":case"animationName":{r+=Xf(o)+":"+a+";";break}default:r+=o+"{"+a+"}"}}}return r}var vy=/label:\s*([^\s;\n{]+)\s*(;|$)/g,hn,hE=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,o="";hn=void 0;var s=e[0];s==null||s.raw===void 0?(i=!1,o+=qs(r,n,s)):o+=s[0];for(var l=1;l<e.length;l++)o+=qs(r,n,e[l]),i&&(o+=s[l]);vy.lastIndex=0;for(var a="",u;(u=vy.exec(o))!==null;)a+="-"+u[1];var c=XA(o)+a;return{name:c,styles:o,next:hn}},n2=function(e){return e()},r2=Pd.useInsertionEffect?Pd.useInsertionEffect:!1,i2=r2||n2,Cm={}.hasOwnProperty,pE=E.createContext(typeof HTMLElement<"u"?$A({key:"css"}):null);pE.Provider;var o2=function(e){return E.forwardRef(function(n,r){var i=E.useContext(pE);return e(n,i,r)})},s2=E.createContext({}),Ah="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",a2=function(e,n){var r={};for(var i in n)Cm.call(n,i)&&(r[i]=n[i]);return r[Ah]=e,r},l2=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return fE(n,r,i),i2(function(){return QA(n,r,i)}),null},u2=o2(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Ah],o=[r],s="";typeof t.className=="string"?s=YA(e.registered,o,t.className):t.className!=null&&(s=t.className+" ");var l=hE(o,void 0,E.useContext(s2));s+=e.key+"-"+l.name;var a={};for(var u in t)Cm.call(t,u)&&u!=="css"&&u!==Ah&&(a[u]=t[u]);return a.ref=n,a.className=s,E.createElement(E.Fragment,null,E.createElement(l2,{cache:e,serialized:l,isStringTag:typeof i=="string"}),E.createElement(i,a))}),c2=u2,F=function(e,n){var r=arguments;if(n==null||!Cm.call(n,"css"))return E.createElement.apply(void 0,r);var i=r.length,o=new Array(i);o[0]=c2,o[1]=a2(e,n);for(var s=2;s<i;s++)o[s]=r[s];return E.createElement.apply(null,o)};function km(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return hE(e)}var f2=function(){var e=km.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function d2(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const h2=Math.min,p2=Math.max,Ou=Math.round,fl=Math.floor,Nu=t=>({x:t,y:t});function m2(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function mE(t){return vE(t)?(t.nodeName||"").toLowerCase():"#document"}function an(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function gE(t){var e;return(e=(vE(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function vE(t){return t instanceof Node||t instanceof an(t).Node}function Rh(t){return t instanceof Element||t instanceof an(t).Element}function Pm(t){return t instanceof HTMLElement||t instanceof an(t).HTMLElement}function yy(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof an(t).ShadowRoot}function yE(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=Am(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function g2(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function v2(t){return["html","body","#document"].includes(mE(t))}function Am(t){return an(t).getComputedStyle(t)}function y2(t){if(mE(t)==="html")return t;const e=t.assignedSlot||t.parentNode||yy(t)&&t.host||gE(t);return yy(e)?e.host:e}function _E(t){const e=y2(t);return v2(e)?t.ownerDocument?t.ownerDocument.body:t.body:Pm(e)&&yE(e)?e:_E(e)}function Du(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=_E(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),s=an(i);return o?e.concat(s,s.visualViewport||[],yE(i)?i:[],s.frameElement&&n?Du(s.frameElement):[]):e.concat(i,Du(i,[],n))}function _2(t){const e=Am(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=Pm(t),o=i?t.offsetWidth:n,s=i?t.offsetHeight:r,l=Ou(n)!==o||Ou(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function Rm(t){return Rh(t)?t:t.contextElement}function Jf(t){const e=Rm(t);if(!Pm(e))return Nu(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=_2(e);let s=(o?Ou(n.width):n.width)/r,l=(o?Ou(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const w2=Nu(0);function E2(t){const e=an(t);return!g2()||!e.visualViewport?w2:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function S2(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==an(t)?!1:e}function _y(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=Rm(t);let s=Nu(1);e&&(r?Rh(r)&&(s=Jf(r)):s=Jf(t));const l=S2(o,n,r)?E2(o):Nu(0);let a=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,c=i.width/s.x,f=i.height/s.y;if(o){const d=an(o),m=r&&Rh(r)?an(r):r;let y=d,v=y.frameElement;for(;v&&r&&m!==y;){const _=Jf(v),h=v.getBoundingClientRect(),p=Am(v),g=h.left+(v.clientLeft+parseFloat(p.paddingLeft))*_.x,w=h.top+(v.clientTop+parseFloat(p.paddingTop))*_.y;a*=_.x,u*=_.y,c*=_.x,f*=_.y,a+=g,u+=w,y=an(v),v=y.frameElement}}return m2({width:c,height:f,x:a,y:u})}function I2(t,e){let n=null,r;const i=gE(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),o();const{left:u,top:c,width:f,height:d}=t.getBoundingClientRect();if(l||e(),!f||!d)return;const m=fl(c),y=fl(i.clientWidth-(u+f)),v=fl(i.clientHeight-(c+d)),_=fl(u),p={rootMargin:-m+"px "+-y+"px "+-v+"px "+-_+"px",threshold:p2(0,h2(1,a))||1};let g=!0;function w(I){const b=I[0].intersectionRatio;if(b!==a){if(!g)return s();b?s(!1,b):r=setTimeout(()=>{s(!1,1e-7)},100)}g=!1}try{n=new IntersectionObserver(w,{...p,root:i.ownerDocument})}catch{n=new IntersectionObserver(w,p)}n.observe(t)}return s(!0),o}function T2(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=r,u=Rm(t),c=i||o?[...u?Du(u):[],...Du(e)]:[];c.forEach(h=>{i&&h.addEventListener("scroll",n,{passive:!0}),o&&h.addEventListener("resize",n)});const f=u&&l?I2(u,n):null;let d=-1,m=null;s&&(m=new ResizeObserver(h=>{let[p]=h;p&&p.target===u&&m&&(m.unobserve(e),cancelAnimationFrame(d),d=requestAnimationFrame(()=>{var g;(g=m)==null||g.observe(e)})),n()}),u&&!a&&m.observe(u),m.observe(e));let y,v=a?_y(t):null;a&&_();function _(){const h=_y(t);v&&(h.x!==v.x||h.y!==v.y||h.width!==v.width||h.height!==v.height)&&n(),v=h,y=requestAnimationFrame(_)}return n(),()=>{var h;c.forEach(p=>{i&&p.removeEventListener("scroll",n),o&&p.removeEventListener("resize",n)}),f==null||f(),(h=m)==null||h.disconnect(),m=null,a&&cancelAnimationFrame(y)}}var xh=E.useLayoutEffect,b2=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Mu=function(){};function C2(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function k2(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=[].concat(r);if(e&&t)for(var s in e)e.hasOwnProperty(s)&&e[s]&&o.push("".concat(C2(t,s)));return o.filter(function(l){return l}).map(function(l){return String(l).trim()}).join(" ")}var wy=function(e){return L2(e)?e.filter(Boolean):hi(e)==="object"&&e!==null?[e]:[]},wE=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=Qn(e,b2);return $({},n)},Te=function(e,n,r){var i=e.cx,o=e.getStyles,s=e.getClassNames,l=e.className;return{css:o(n,e),className:i(r??{},s(n,e),l)}};function Bc(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function P2(t){return Bc(t)?window.innerHeight:t.clientHeight}function EE(t){return Bc(t)?window.pageYOffset:t.scrollTop}function Lu(t,e){if(Bc(t)){window.scrollTo(0,e);return}t.scrollTop=e}function A2(t){var e=getComputedStyle(t),n=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var i=t;i=i.parentElement;)if(e=getComputedStyle(i),!(n&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return i;return document.documentElement}function R2(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function dl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Mu,i=EE(t),o=e-i,s=10,l=0;function a(){l+=s;var u=R2(l,i,o,n);Lu(t,u),l<n?window.requestAnimationFrame(a):r(t)}a()}function Ey(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=e.offsetHeight/3;r.bottom+i>n.bottom?Lu(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+i,t.scrollHeight)):r.top-i<n.top&&Lu(t,Math.max(e.offsetTop-i,0))}function x2(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function Sy(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function O2(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var SE=!1,N2={get passive(){return SE=!0}},hl=typeof window<"u"?window:{};hl.addEventListener&&hl.removeEventListener&&(hl.addEventListener("p",Mu,N2),hl.removeEventListener("p",Mu,!1));var D2=SE;function M2(t){return t!=null}function L2(t){return Array.isArray(t)}function pl(t,e,n){return t?e:n}var V2=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var o=Object.entries(e).filter(function(s){var l=Ln(s,1),a=l[0];return!r.includes(a)});return o.reduce(function(s,l){var a=Ln(l,2),u=a[0],c=a[1];return s[u]=c,s},{})},F2=["children","innerProps"],$2=["children","innerProps"];function U2(t){var e=t.maxHeight,n=t.menuEl,r=t.minHeight,i=t.placement,o=t.shouldScroll,s=t.isFixedPosition,l=t.controlHeight,a=A2(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var c=a.getBoundingClientRect(),f=c.height,d=n.getBoundingClientRect(),m=d.bottom,y=d.height,v=d.top,_=n.offsetParent.getBoundingClientRect(),h=_.top,p=s?window.innerHeight:P2(a),g=EE(a),w=parseInt(getComputedStyle(n).marginBottom,10),I=parseInt(getComputedStyle(n).marginTop,10),b=h-I,T=p-v,C=b+g,L=f-g-v,V=m-p+g+w,oe=g+v-I,Ee=160;switch(i){case"auto":case"bottom":if(T>=y)return{placement:"bottom",maxHeight:e};if(L>=y&&!s)return o&&dl(a,V,Ee),{placement:"bottom",maxHeight:e};if(!s&&L>=r||s&&T>=r){o&&dl(a,V,Ee);var mt=s?T-w:L-w;return{placement:"bottom",maxHeight:mt}}if(i==="auto"||s){var Ut=e,ke=s?b:C;return ke>=r&&(Ut=Math.min(ke-w-l,e)),{placement:"top",maxHeight:Ut}}if(i==="bottom")return o&&Lu(a,V),{placement:"bottom",maxHeight:e};break;case"top":if(b>=y)return{placement:"top",maxHeight:e};if(C>=y&&!s)return o&&dl(a,oe,Ee),{placement:"top",maxHeight:e};if(!s&&C>=r||s&&b>=r){var ge=e;return(!s&&C>=r||s&&b>=r)&&(ge=s?b-I:C-I),o&&dl(a,oe,Ee),{placement:"top",maxHeight:ge}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function j2(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var IE=function(e){return e==="auto"?"bottom":e},z2=function(e,n){var r,i=e.placement,o=e.theme,s=o.borderRadius,l=o.spacing,a=o.colors;return $((r={label:"menu"},rs(r,j2(i),"100%"),rs(r,"position","absolute"),rs(r,"width","100%"),rs(r,"zIndex",1),r),n?{}:{backgroundColor:a.neutral0,borderRadius:s,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:l.menuGutter,marginTop:l.menuGutter})},TE=E.createContext(null),B2=function(e){var n=e.children,r=e.minMenuHeight,i=e.maxMenuHeight,o=e.menuPlacement,s=e.menuPosition,l=e.menuShouldScrollIntoView,a=e.theme,u=E.useContext(TE)||{},c=u.setPortalPlacement,f=E.useRef(null),d=E.useState(i),m=Ln(d,2),y=m[0],v=m[1],_=E.useState(null),h=Ln(_,2),p=h[0],g=h[1],w=a.spacing.controlHeight;return xh(function(){var I=f.current;if(I){var b=s==="fixed",T=l&&!b,C=U2({maxHeight:i,menuEl:I,minHeight:r,placement:o,shouldScroll:T,isFixedPosition:b,controlHeight:w});v(C.maxHeight),g(C.placement),c==null||c(C.placement)}},[i,o,s,l,r,c,w]),n({ref:f,placerProps:$($({},e),{},{placement:p||IE(o),maxHeight:y})})},H2=function(e){var n=e.children,r=e.innerRef,i=e.innerProps;return F("div",z({},Te(e,"menu",{menu:!0}),{ref:r},i),n)},W2=H2,G2=function(e,n){var r=e.maxHeight,i=e.theme.spacing.baseUnit;return $({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},K2=function(e){var n=e.children,r=e.innerProps,i=e.innerRef,o=e.isMulti;return F("div",z({},Te(e,"menuList",{"menu-list":!0,"menu-list--is-multi":o}),{ref:i},r),n)},bE=function(e,n){var r=e.theme,i=r.spacing.baseUnit,o=r.colors;return $({textAlign:"center"},n?{}:{color:o.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},q2=bE,Y2=bE,Q2=function(e){var n=e.children,r=n===void 0?"No options":n,i=e.innerProps,o=Qn(e,F2);return F("div",z({},Te($($({},o),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},X2=function(e){var n=e.children,r=n===void 0?"Loading...":n,i=e.innerProps,o=Qn(e,$2);return F("div",z({},Te($($({},o),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},J2=function(e){var n=e.rect,r=e.offset,i=e.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},Z2=function(e){var n=e.appendTo,r=e.children,i=e.controlElement,o=e.innerProps,s=e.menuPlacement,l=e.menuPosition,a=E.useRef(null),u=E.useRef(null),c=E.useState(IE(s)),f=Ln(c,2),d=f[0],m=f[1],y=E.useMemo(function(){return{setPortalPlacement:m}},[]),v=E.useState(null),_=Ln(v,2),h=_[0],p=_[1],g=E.useCallback(function(){if(i){var T=x2(i),C=l==="fixed"?0:window.pageYOffset,L=T[d]+C;(L!==(h==null?void 0:h.offset)||T.left!==(h==null?void 0:h.rect.left)||T.width!==(h==null?void 0:h.rect.width))&&p({offset:L,rect:T})}},[i,l,d,h==null?void 0:h.offset,h==null?void 0:h.rect.left,h==null?void 0:h.rect.width]);xh(function(){g()},[g]);var w=E.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&a.current&&(u.current=T2(i,a.current,g,{elementResize:"ResizeObserver"in window}))},[i,g]);xh(function(){w()},[w]);var I=E.useCallback(function(T){a.current=T,w()},[w]);if(!n&&l!=="fixed"||!h)return null;var b=F("div",z({ref:I},Te($($({},e),{},{offset:h.offset,position:l,rect:h.rect}),"menuPortal",{"menu-portal":!0}),o),r);return F(TE.Provider,{value:y},n?Dw.createPortal(b,n):b)},eR=function(e){var n=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},tR=function(e){var n=e.children,r=e.innerProps,i=e.isDisabled,o=e.isRtl;return F("div",z({},Te(e,"container",{"--is-disabled":i,"--is-rtl":o}),r),n)},nR=function(e,n){var r=e.theme.spacing,i=e.isMulti,o=e.hasValue,s=e.selectProps.controlShouldRenderValue;return $({alignItems:"center",display:i&&o&&s?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},rR=function(e){var n=e.children,r=e.innerProps,i=e.isMulti,o=e.hasValue;return F("div",z({},Te(e,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":o}),r),n)},iR=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},oR=function(e){var n=e.children,r=e.innerProps;return F("div",z({},Te(e,"indicatorsContainer",{indicators:!0}),r),n)},Iy,sR=["size"],aR=["innerProps","isRtl","size"],lR={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},CE=function(e){var n=e.size,r=Qn(e,sR);return F("svg",z({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:lR},r))},xm=function(e){return F(CE,z({size:20},e),F("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},kE=function(e){return F(CE,z({size:20},e),F("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},PE=function(e,n){var r=e.isFocused,i=e.theme,o=i.spacing.baseUnit,s=i.colors;return $({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?s.neutral60:s.neutral20,padding:o*2,":hover":{color:r?s.neutral80:s.neutral40}})},uR=PE,cR=function(e){var n=e.children,r=e.innerProps;return F("div",z({},Te(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||F(kE,null))},fR=PE,dR=function(e){var n=e.children,r=e.innerProps;return F("div",z({},Te(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||F(xm,null))},hR=function(e,n){var r=e.isDisabled,i=e.theme,o=i.spacing.baseUnit,s=i.colors;return $({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?s.neutral10:s.neutral20,marginBottom:o*2,marginTop:o*2})},pR=function(e){var n=e.innerProps;return F("span",z({},n,Te(e,"indicatorSeparator",{"indicator-separator":!0})))},mR=f2(Iy||(Iy=d2([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),gR=function(e,n){var r=e.isFocused,i=e.size,o=e.theme,s=o.colors,l=o.spacing.baseUnit;return $({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?s.neutral60:s.neutral20,padding:l*2})},Zf=function(e){var n=e.delay,r=e.offset;return F("span",{css:km({animation:"".concat(mR," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},vR=function(e){var n=e.innerProps,r=e.isRtl,i=e.size,o=i===void 0?4:i,s=Qn(e,aR);return F("div",z({},Te($($({},s),{},{innerProps:n,isRtl:r,size:o}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),F(Zf,{delay:0,offset:r}),F(Zf,{delay:160,offset:!0}),F(Zf,{delay:320,offset:!r}))},yR=function(e,n){var r=e.isDisabled,i=e.isFocused,o=e.theme,s=o.colors,l=o.borderRadius,a=o.spacing;return $({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:a.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?s.neutral5:s.neutral0,borderColor:r?s.neutral10:i?s.primary:s.neutral20,borderRadius:l,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(s.primary):void 0,"&:hover":{borderColor:i?s.primary:s.neutral30}})},_R=function(e){var n=e.children,r=e.isDisabled,i=e.isFocused,o=e.innerRef,s=e.innerProps,l=e.menuIsOpen;return F("div",z({ref:o},Te(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":l}),s,{"aria-disabled":r||void 0}),n)},wR=_R,ER=["data"],SR=function(e,n){var r=e.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},IR=function(e){var n=e.children,r=e.cx,i=e.getStyles,o=e.getClassNames,s=e.Heading,l=e.headingProps,a=e.innerProps,u=e.label,c=e.theme,f=e.selectProps;return F("div",z({},Te(e,"group",{group:!0}),a),F(s,z({},l,{selectProps:f,theme:c,getStyles:i,getClassNames:o,cx:r}),u),F("div",null,n))},TR=function(e,n){var r=e.theme,i=r.colors,o=r.spacing;return $({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:o.baseUnit*3,paddingRight:o.baseUnit*3,textTransform:"uppercase"})},bR=function(e){var n=wE(e);n.data;var r=Qn(n,ER);return F("div",z({},Te(e,"groupHeading",{"group-heading":!0}),r))},CR=IR,kR=["innerRef","isDisabled","isHidden","inputClassName"],PR=function(e,n){var r=e.isDisabled,i=e.value,o=e.theme,s=o.spacing,l=o.colors;return $($({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},AR),n?{}:{margin:s.baseUnit/2,paddingBottom:s.baseUnit/2,paddingTop:s.baseUnit/2,color:l.neutral80})},AE={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},AR={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":$({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},AE)},RR=function(e){return $({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},AE)},xR=function(e){var n=e.cx,r=e.value,i=wE(e),o=i.innerRef,s=i.isDisabled,l=i.isHidden,a=i.inputClassName,u=Qn(i,kR);return F("div",z({},Te(e,"input",{"input-container":!0}),{"data-value":r||""}),F("input",z({className:n({input:!0},a),ref:o,style:RR(l),disabled:s},u)))},OR=xR,NR=function(e,n){var r=e.theme,i=r.spacing,o=r.borderRadius,s=r.colors;return $({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:s.neutral10,borderRadius:o/2,margin:i.baseUnit/2})},DR=function(e,n){var r=e.theme,i=r.borderRadius,o=r.colors,s=e.cropWithEllipsis;return $({overflow:"hidden",textOverflow:s||s===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:o.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},MR=function(e,n){var r=e.theme,i=r.spacing,o=r.borderRadius,s=r.colors,l=e.isFocused;return $({alignItems:"center",display:"flex"},n?{}:{borderRadius:o/2,backgroundColor:l?s.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:s.dangerLight,color:s.danger}})},RE=function(e){var n=e.children,r=e.innerProps;return F("div",r,n)},LR=RE,VR=RE;function FR(t){var e=t.children,n=t.innerProps;return F("div",z({role:"button"},n),e||F(xm,{size:14}))}var $R=function(e){var n=e.children,r=e.components,i=e.data,o=e.innerProps,s=e.isDisabled,l=e.removeProps,a=e.selectProps,u=r.Container,c=r.Label,f=r.Remove;return F(u,{data:i,innerProps:$($({},Te(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":s})),o),selectProps:a},F(c,{data:i,innerProps:$({},Te(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:a},n),F(f,{data:i,innerProps:$($({},Te(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},l),selectProps:a}))},UR=$R,jR=function(e,n){var r=e.isDisabled,i=e.isFocused,o=e.isSelected,s=e.theme,l=s.spacing,a=s.colors;return $({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:o?a.primary:i?a.primary25:"transparent",color:r?a.neutral20:o?a.neutral0:"inherit",padding:"".concat(l.baseUnit*2,"px ").concat(l.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:o?a.primary:a.primary50}})},zR=function(e){var n=e.children,r=e.isDisabled,i=e.isFocused,o=e.isSelected,s=e.innerRef,l=e.innerProps;return F("div",z({},Te(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":o}),{ref:s,"aria-disabled":r},l),n)},BR=zR,HR=function(e,n){var r=e.theme,i=r.spacing,o=r.colors;return $({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:o.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},WR=function(e){var n=e.children,r=e.innerProps;return F("div",z({},Te(e,"placeholder",{placeholder:!0}),r),n)},GR=WR,KR=function(e,n){var r=e.isDisabled,i=e.theme,o=i.spacing,s=i.colors;return $({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?s.neutral40:s.neutral80,marginLeft:o.baseUnit/2,marginRight:o.baseUnit/2})},qR=function(e){var n=e.children,r=e.isDisabled,i=e.innerProps;return F("div",z({},Te(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},YR=qR,QR={ClearIndicator:dR,Control:wR,DropdownIndicator:cR,DownChevron:kE,CrossIcon:xm,Group:CR,GroupHeading:bR,IndicatorsContainer:oR,IndicatorSeparator:pR,Input:OR,LoadingIndicator:vR,Menu:W2,MenuList:K2,MenuPortal:Z2,LoadingMessage:X2,NoOptionsMessage:Q2,MultiValue:UR,MultiValueContainer:LR,MultiValueLabel:VR,MultiValueRemove:FR,Option:BR,Placeholder:GR,SelectContainer:tR,SingleValue:YR,ValueContainer:rR},XR=function(e){return $($({},QR),e.components)},Ty=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function JR(t,e){return!!(t===e||Ty(t)&&Ty(e))}function ZR(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!JR(t[n],e[n]))return!1;return!0}function ex(t,e){e===void 0&&(e=ZR);var n=null;function r(){for(var i=[],o=0;o<arguments.length;o++)i[o]=arguments[o];if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;var s=t.apply(this,i);return n={lastResult:s,lastArgs:i,lastThis:this},s}return r.clear=function(){n=null},r}var tx={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},nx=function(e){return F("span",z({css:tx},e))},by=nx,rx={guidance:function(e){var n=e.isSearchable,r=e.isMulti,i=e.tabSelectsValue,o=e.context,s=e.isInitialFocus;switch(o){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return s?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,r=e.label,i=r===void 0?"":r,o=e.labels,s=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(o.length>1?"s":""," ").concat(o.join(","),", selected.");case"select-option":return s?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(e){var n=e.context,r=e.focused,i=e.options,o=e.label,s=o===void 0?"":o,l=e.selectValue,a=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,f=function(v,_){return v&&v.length?"".concat(v.indexOf(_)+1," of ").concat(v.length):""};if(n==="value"&&l)return"value ".concat(s," focused, ").concat(f(l,r),".");if(n==="menu"&&c){var d=a?" disabled":"",m="".concat(u?" selected":"").concat(d);return"".concat(s).concat(m,", ").concat(f(i,r),".")}return""},onFilter:function(e){var n=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},ix=function(e){var n=e.ariaSelection,r=e.focusedOption,i=e.focusedValue,o=e.focusableOptions,s=e.isFocused,l=e.selectValue,a=e.selectProps,u=e.id,c=e.isAppleDevice,f=a.ariaLiveMessages,d=a.getOptionLabel,m=a.inputValue,y=a.isMulti,v=a.isOptionDisabled,_=a.isSearchable,h=a.menuIsOpen,p=a.options,g=a.screenReaderStatus,w=a.tabSelectsValue,I=a.isLoading,b=a["aria-label"],T=a["aria-live"],C=E.useMemo(function(){return $($({},rx),f||{})},[f]),L=E.useMemo(function(){var ke="";if(n&&C.onChange){var ge=n.option,Et=n.options,R=n.removedValue,U=n.removedValues,H=n.value,se=function(kn){return Array.isArray(kn)?null:kn},q=R||ge||se(H),Fe=q?d(q):"",qe=Et||U||void 0,jt=qe?qe.map(d):[],De=$({isDisabled:q&&v(q,l),label:Fe,labels:jt},n);ke=C.onChange(De)}return ke},[n,C,v,l,d]),V=E.useMemo(function(){var ke="",ge=r||i,Et=!!(r&&l&&l.includes(r));if(ge&&C.onFocus){var R={focused:ge,label:d(ge),isDisabled:v(ge,l),isSelected:Et,options:o,context:ge===r?"menu":"value",selectValue:l,isAppleDevice:c};ke=C.onFocus(R)}return ke},[r,i,d,v,C,o,l,c]),oe=E.useMemo(function(){var ke="";if(h&&p.length&&!I&&C.onFilter){var ge=g({count:o.length});ke=C.onFilter({inputValue:m,resultsMessage:ge})}return ke},[o,m,h,C,p,g,I]),Ee=(n==null?void 0:n.action)==="initial-input-focus",mt=E.useMemo(function(){var ke="";if(C.guidance){var ge=i?"value":h?"menu":"input";ke=C.guidance({"aria-label":b,context:ge,isDisabled:r&&v(r,l),isMulti:y,isSearchable:_,tabSelectsValue:w,isInitialFocus:Ee})}return ke},[b,r,i,y,v,_,h,C,l,w,Ee]),Ut=F(E.Fragment,null,F("span",{id:"aria-selection"},L),F("span",{id:"aria-focused"},V),F("span",{id:"aria-results"},oe),F("span",{id:"aria-guidance"},mt));return F(E.Fragment,null,F(by,{id:u},Ee&&Ut),F(by,{"aria-live":T,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},s&&!Ee&&Ut))},ox=ix,Oh=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],sx=new RegExp("["+Oh.map(function(t){return t.letters}).join("")+"]","g"),xE={};for(var ed=0;ed<Oh.length;ed++)for(var td=Oh[ed],nd=0;nd<td.letters.length;nd++)xE[td.letters[nd]]=td.base;var OE=function(e){return e.replace(sx,function(n){return xE[n]})},ax=ex(OE),Cy=function(e){return e.replace(/^\s+|\s+$/g,"")},lx=function(e){return"".concat(e.label," ").concat(e.value)},ux=function(e){return function(n,r){if(n.data.__isNew__)return!0;var i=$({ignoreCase:!0,ignoreAccents:!0,stringify:lx,trim:!0,matchFrom:"any"},e),o=i.ignoreCase,s=i.ignoreAccents,l=i.stringify,a=i.trim,u=i.matchFrom,c=a?Cy(r):r,f=a?Cy(l(n)):l(n);return o&&(c=c.toLowerCase(),f=f.toLowerCase()),s&&(c=ax(c),f=OE(f)),u==="start"?f.substr(0,c.length)===c:f.indexOf(c)>-1}},cx=["innerRef"];function fx(t){var e=t.innerRef,n=Qn(t,cx),r=V2(n,"onExited","in","enter","exit","appear");return F("input",z({ref:e},r,{css:km({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var dx=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function hx(t){var e=t.isEnabled,n=t.onBottomArrive,r=t.onBottomLeave,i=t.onTopArrive,o=t.onTopLeave,s=E.useRef(!1),l=E.useRef(!1),a=E.useRef(0),u=E.useRef(null),c=E.useCallback(function(_,h){if(u.current!==null){var p=u.current,g=p.scrollTop,w=p.scrollHeight,I=p.clientHeight,b=u.current,T=h>0,C=w-I-g,L=!1;C>h&&s.current&&(r&&r(_),s.current=!1),T&&l.current&&(o&&o(_),l.current=!1),T&&h>C?(n&&!s.current&&n(_),b.scrollTop=w,L=!0,s.current=!0):!T&&-h>g&&(i&&!l.current&&i(_),b.scrollTop=0,L=!0,l.current=!0),L&&dx(_)}},[n,r,i,o]),f=E.useCallback(function(_){c(_,_.deltaY)},[c]),d=E.useCallback(function(_){a.current=_.changedTouches[0].clientY},[]),m=E.useCallback(function(_){var h=a.current-_.changedTouches[0].clientY;c(_,h)},[c]),y=E.useCallback(function(_){if(_){var h=D2?{passive:!1}:!1;_.addEventListener("wheel",f,h),_.addEventListener("touchstart",d,h),_.addEventListener("touchmove",m,h)}},[m,d,f]),v=E.useCallback(function(_){_&&(_.removeEventListener("wheel",f,!1),_.removeEventListener("touchstart",d,!1),_.removeEventListener("touchmove",m,!1))},[m,d,f]);return E.useEffect(function(){if(e){var _=u.current;return y(_),function(){v(_)}}},[e,y,v]),function(_){u.current=_}}var ky=["boxSizing","height","overflow","paddingRight","position"],Py={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function Ay(t){t.preventDefault()}function Ry(t){t.stopPropagation()}function xy(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function Oy(){return"ontouchstart"in window||navigator.maxTouchPoints}var Ny=!!(typeof window<"u"&&window.document&&window.document.createElement),qo=0,Ri={capture:!1,passive:!1};function px(t){var e=t.isEnabled,n=t.accountForScrollbars,r=n===void 0?!0:n,i=E.useRef({}),o=E.useRef(null),s=E.useCallback(function(a){if(Ny){var u=document.body,c=u&&u.style;if(r&&ky.forEach(function(y){var v=c&&c[y];i.current[y]=v}),r&&qo<1){var f=parseInt(i.current.paddingRight,10)||0,d=document.body?document.body.clientWidth:0,m=window.innerWidth-d+f||0;Object.keys(Py).forEach(function(y){var v=Py[y];c&&(c[y]=v)}),c&&(c.paddingRight="".concat(m,"px"))}u&&Oy()&&(u.addEventListener("touchmove",Ay,Ri),a&&(a.addEventListener("touchstart",xy,Ri),a.addEventListener("touchmove",Ry,Ri))),qo+=1}},[r]),l=E.useCallback(function(a){if(Ny){var u=document.body,c=u&&u.style;qo=Math.max(qo-1,0),r&&qo<1&&ky.forEach(function(f){var d=i.current[f];c&&(c[f]=d)}),u&&Oy()&&(u.removeEventListener("touchmove",Ay,Ri),a&&(a.removeEventListener("touchstart",xy,Ri),a.removeEventListener("touchmove",Ry,Ri)))}},[r]);return E.useEffect(function(){if(e){var a=o.current;return s(a),function(){l(a)}}},[e,s,l]),function(a){o.current=a}}var mx=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},gx={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function vx(t){var e=t.children,n=t.lockEnabled,r=t.captureEnabled,i=r===void 0?!0:r,o=t.onBottomArrive,s=t.onBottomLeave,l=t.onTopArrive,a=t.onTopLeave,u=hx({isEnabled:i,onBottomArrive:o,onBottomLeave:s,onTopArrive:l,onTopLeave:a}),c=px({isEnabled:n}),f=function(m){u(m),c(m)};return F(E.Fragment,null,n&&F("div",{onClick:mx,css:gx}),e(f))}var yx={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},_x=function(e){var n=e.name,r=e.onFocus;return F("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:yx,value:"",onChange:function(){}})},wx=_x;function Om(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Ex(){return Om(/^iPhone/i)}function NE(){return Om(/^Mac/i)}function Sx(){return Om(/^iPad/i)||NE()&&navigator.maxTouchPoints>1}function Ix(){return Ex()||Sx()}function Tx(){return NE()||Ix()}var bx=function(e){return e.label},Cx=function(e){return e.label},kx=function(e){return e.value},Px=function(e){return!!e.isDisabled},Ax={clearIndicator:fR,container:eR,control:yR,dropdownIndicator:uR,group:SR,groupHeading:TR,indicatorsContainer:iR,indicatorSeparator:hR,input:PR,loadingIndicator:gR,loadingMessage:Y2,menu:z2,menuList:G2,menuPortal:J2,multiValue:NR,multiValueLabel:DR,multiValueRemove:MR,noOptionsMessage:q2,option:jR,placeholder:HR,singleValue:KR,valueContainer:nR},Rx={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},xx=4,DE=4,Ox=38,Nx=DE*2,Dx={baseUnit:DE,controlHeight:Ox,menuGutter:Nx},rd={borderRadius:xx,colors:Rx,spacing:Dx},Mx={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:Sy(),captureMenuScroll:!Sy(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:ux(),formatGroupLabel:bx,getOptionLabel:Cx,getOptionValue:kx,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:Px,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!O2(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function Dy(t,e,n,r){var i=VE(t,e,n),o=FE(t,e,n),s=LE(t,e),l=Vu(t,e);return{type:"option",data:e,isDisabled:i,isSelected:o,label:s,value:l,index:r}}function Yl(t,e){return t.options.map(function(n,r){if("options"in n){var i=n.options.map(function(s,l){return Dy(t,s,e,l)}).filter(function(s){return Ly(t,s)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var o=Dy(t,n,e,r);return Ly(t,o)?o:void 0}).filter(M2)}function ME(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,_m(n.options.map(function(r){return r.data}))):e.push(n.data),e},[])}function My(t,e){return t.reduce(function(n,r){return r.type==="group"?n.push.apply(n,_m(r.options.map(function(i){return{data:i.data,id:"".concat(e,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),n},[])}function Lx(t,e){return ME(Yl(t,e))}function Ly(t,e){var n=t.inputValue,r=n===void 0?"":n,i=e.data,o=e.isSelected,s=e.label,l=e.value;return(!UE(t)||!o)&&$E(t,{label:s,value:l,data:i},r)}function Vx(t,e){var n=t.focusedValue,r=t.selectValue,i=r.indexOf(n);if(i>-1){var o=e.indexOf(n);if(o>-1)return n;if(i<e.length)return e[i]}return null}function Fx(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var id=function(e,n){var r,i=(r=e.find(function(o){return o.data===n}))===null||r===void 0?void 0:r.id;return i||null},LE=function(e,n){return e.getOptionLabel(n)},Vu=function(e,n){return e.getOptionValue(n)};function VE(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function FE(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var r=Vu(t,e);return n.some(function(i){return Vu(t,i)===r})}function $E(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var UE=function(e){var n=e.hideSelectedOptions,r=e.isMulti;return n===void 0?r:n},$x=1,jE=function(t){rA(n,t);var e=sA(n);function n(r){var i;if(tA(this,n),i=e.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=Tx(),i.controlRef=null,i.getControlRef=function(a){i.controlRef=a},i.focusedOptionRef=null,i.getFocusedOptionRef=function(a){i.focusedOptionRef=a},i.menuListRef=null,i.getMenuListRef=function(a){i.menuListRef=a},i.inputRef=null,i.getInputRef=function(a){i.inputRef=a},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(a,u){var c=i.props,f=c.onChange,d=c.name;u.name=d,i.ariaOnChange(a,u),f(a,u)},i.setValue=function(a,u,c){var f=i.props,d=f.closeMenuOnSelect,m=f.isMulti,y=f.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:y}),d&&(i.setState({inputIsHiddenAfterUpdate:!m}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(a,{action:u,option:c})},i.selectOption=function(a){var u=i.props,c=u.blurInputOnSelect,f=u.isMulti,d=u.name,m=i.state.selectValue,y=f&&i.isOptionSelected(a,m),v=i.isOptionDisabled(a,m);if(y){var _=i.getOptionValue(a);i.setValue(m.filter(function(h){return i.getOptionValue(h)!==_}),"deselect-option",a)}else if(!v)f?i.setValue([].concat(_m(m),[a]),"select-option",a):i.setValue(a,"select-option");else{i.ariaOnChange(a,{action:"select-option",option:a,name:d});return}c&&i.blurInput()},i.removeValue=function(a){var u=i.props.isMulti,c=i.state.selectValue,f=i.getOptionValue(a),d=c.filter(function(y){return i.getOptionValue(y)!==f}),m=pl(u,d,d[0]||null);i.onChange(m,{action:"remove-value",removedValue:a}),i.focusInput()},i.clearValue=function(){var a=i.state.selectValue;i.onChange(pl(i.props.isMulti,[],null),{action:"clear",removedValues:a})},i.popValue=function(){var a=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],f=u.slice(0,u.length-1),d=pl(a,f,f[0]||null);i.onChange(d,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(a){return id(i.state.focusableOptionsWithIds,a)},i.getFocusableOptionsWithIds=function(){return My(Yl(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var a=arguments.length,u=new Array(a),c=0;c<a;c++)u[c]=arguments[c];return k2.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(a){return LE(i.props,a)},i.getOptionValue=function(a){return Vu(i.props,a)},i.getStyles=function(a,u){var c=i.props.unstyled,f=Ax[a](u,c);f.boxSizing="border-box";var d=i.props.styles[a];return d?d(f,u):f},i.getClassNames=function(a,u){var c,f;return(c=(f=i.props.classNames)[a])===null||c===void 0?void 0:c.call(f,u)},i.getElementId=function(a){return"".concat(i.state.instancePrefix,"-").concat(a)},i.getComponents=function(){return XR(i.props)},i.buildCategorizedOptions=function(){return Yl(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return ME(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(a,u){i.setState({ariaSelection:$({value:a},u)})},i.onMenuMouseDown=function(a){a.button===0&&(a.stopPropagation(),a.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(a){i.blockOptionHover=!1},i.onControlMouseDown=function(a){if(!a.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),a.target.tagName!=="INPUT"&&a.target.tagName!=="TEXTAREA"&&a.preventDefault()}},i.onDropdownIndicatorMouseDown=function(a){if(!(a&&a.type==="mousedown"&&a.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,f=u.menuIsOpen;i.focusInput(),f?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),a.preventDefault()}},i.onClearIndicatorMouseDown=function(a){a&&a.type==="mousedown"&&a.button!==0||(i.clearValue(),a.preventDefault(),i.openAfterFocus=!1,a.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(a){typeof i.props.closeMenuOnScroll=="boolean"?a.target instanceof HTMLElement&&Bc(a.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(a)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(a){var u=a.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(a){var u=a.touches,c=u&&u.item(0);if(c){var f=Math.abs(c.clientX-i.initialTouchX),d=Math.abs(c.clientY-i.initialTouchY),m=5;i.userIsDragging=f>m||d>m}},i.onTouchEnd=function(a){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(a.target)&&i.menuListRef&&!i.menuListRef.contains(a.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(a){i.userIsDragging||i.onControlMouseDown(a)},i.onClearIndicatorTouchEnd=function(a){i.userIsDragging||i.onClearIndicatorMouseDown(a)},i.onDropdownIndicatorTouchEnd=function(a){i.userIsDragging||i.onDropdownIndicatorMouseDown(a)},i.handleInputChange=function(a){var u=i.props.inputValue,c=a.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(a){i.props.onFocus&&i.props.onFocus(a),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(a){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(a),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(a){if(!(i.blockOptionHover||i.state.focusedOption===a)){var u=i.getFocusableOptions(),c=u.indexOf(a);i.setState({focusedOption:a,focusedOptionId:c>-1?i.getFocusedOptionId(a):null})}},i.shouldHideSelectedOptions=function(){return UE(i.props)},i.onValueInputFocus=function(a){a.preventDefault(),a.stopPropagation(),i.focus()},i.onKeyDown=function(a){var u=i.props,c=u.isMulti,f=u.backspaceRemovesValue,d=u.escapeClearsValue,m=u.inputValue,y=u.isClearable,v=u.isDisabled,_=u.menuIsOpen,h=u.onKeyDown,p=u.tabSelectsValue,g=u.openMenuOnFocus,w=i.state,I=w.focusedOption,b=w.focusedValue,T=w.selectValue;if(!v&&!(typeof h=="function"&&(h(a),a.defaultPrevented))){switch(i.blockOptionHover=!0,a.key){case"ArrowLeft":if(!c||m)return;i.focusValue("previous");break;case"ArrowRight":if(!c||m)return;i.focusValue("next");break;case"Delete":case"Backspace":if(m)return;if(b)i.removeValue(b);else{if(!f)return;c?i.popValue():y&&i.clearValue()}break;case"Tab":if(i.isComposing||a.shiftKey||!_||!p||!I||g&&i.isOptionSelected(I,T))return;i.selectOption(I);break;case"Enter":if(a.keyCode===229)break;if(_){if(!I||i.isComposing)return;i.selectOption(I);break}return;case"Escape":_?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:m}),i.onMenuClose()):y&&d&&i.clearValue();break;case" ":if(m)return;if(!_){i.openMenu("first");break}if(!I)return;i.selectOption(I);break;case"ArrowUp":_?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":_?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!_)return;i.focusOption("pageup");break;case"PageDown":if(!_)return;i.focusOption("pagedown");break;case"Home":if(!_)return;i.focusOption("first");break;case"End":if(!_)return;i.focusOption("last");break;default:return}a.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++$x),i.state.selectValue=wy(r.value),r.menuIsOpen&&i.state.selectValue.length){var o=i.getFocusableOptionsWithIds(),s=i.buildFocusableOptions(),l=s.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=o,i.state.focusedOption=s[l],i.state.focusedOptionId=id(o,s[l])}return i}return nA(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&Ey(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var o=this.props,s=o.isDisabled,l=o.menuIsOpen,a=this.state.isFocused;(a&&!s&&i.isDisabled||a&&l&&!i.menuIsOpen)&&this.focusInput(),a&&s&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!a&&!s&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(Ey(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,o){this.props.onInputChange(i,o)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var o=this,s=this.state,l=s.selectValue,a=s.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var f=u.indexOf(l[0]);f>-1&&(c=f)}this.scrollToFocusedOptionOnUpdate=!(a&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return o.onMenuOpen()})}},{key:"focusValue",value:function(i){var o=this.state,s=o.selectValue,l=o.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var a=s.indexOf(l);l||(a=-1);var u=s.length-1,c=-1;if(s.length){switch(i){case"previous":a===0?c=0:a===-1?c=u:c=a-1;break;case"next":a>-1&&a<u&&(c=a+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:s[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",o=this.props.pageSize,s=this.state.focusedOption,l=this.getFocusableOptions();if(l.length){var a=0,u=l.indexOf(s);s||(u=-1),i==="up"?a=u>0?u-1:l.length-1:i==="down"?a=(u+1)%l.length:i==="pageup"?(a=u-o,a<0&&(a=0)):i==="pagedown"?(a=u+o,a>l.length-1&&(a=l.length-1)):i==="last"&&(a=l.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:l[a],focusedValue:null,focusedOptionId:this.getFocusedOptionId(l[a])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(rd):$($({},rd),this.props.theme):rd}},{key:"getCommonProps",value:function(){var i=this.clearValue,o=this.cx,s=this.getStyles,l=this.getClassNames,a=this.getValue,u=this.selectOption,c=this.setValue,f=this.props,d=f.isMulti,m=f.isRtl,y=f.options,v=this.hasValue();return{clearValue:i,cx:o,getStyles:s,getClassNames:l,getValue:a,hasValue:v,isMulti:d,isRtl:m,options:y,selectOption:u,selectProps:f,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,o=i.isClearable,s=i.isMulti;return o===void 0?s:o}},{key:"isOptionDisabled",value:function(i,o){return VE(this.props,i,o)}},{key:"isOptionSelected",value:function(i,o){return FE(this.props,i,o)}},{key:"filterOption",value:function(i,o){return $E(this.props,i,o)}},{key:"formatOptionLabel",value:function(i,o){if(typeof this.props.formatOptionLabel=="function"){var s=this.props.inputValue,l=this.state.selectValue;return this.props.formatOptionLabel(i,{context:o,inputValue:s,selectValue:l})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,o=i.isDisabled,s=i.isSearchable,l=i.inputId,a=i.inputValue,u=i.tabIndex,c=i.form,f=i.menuIsOpen,d=i.required,m=this.getComponents(),y=m.Input,v=this.state,_=v.inputIsHidden,h=v.ariaSelection,p=this.commonProps,g=l||this.getElementId("input"),w=$($($({"aria-autocomplete":"list","aria-expanded":f,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":d,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},f&&{"aria-controls":this.getElementId("listbox")}),!s&&{"aria-readonly":!0}),this.hasValue()?(h==null?void 0:h.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return s?E.createElement(y,z({},p,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:g,innerRef:this.getInputRef,isDisabled:o,isHidden:_,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:a},w)):E.createElement(fx,z({id:g,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Mu,onFocus:this.onInputFocus,disabled:o,tabIndex:u,inputMode:"none",form:c,value:""},w))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,o=this.getComponents(),s=o.MultiValue,l=o.MultiValueContainer,a=o.MultiValueLabel,u=o.MultiValueRemove,c=o.SingleValue,f=o.Placeholder,d=this.commonProps,m=this.props,y=m.controlShouldRenderValue,v=m.isDisabled,_=m.isMulti,h=m.inputValue,p=m.placeholder,g=this.state,w=g.selectValue,I=g.focusedValue,b=g.isFocused;if(!this.hasValue()||!y)return h?null:E.createElement(f,z({},d,{key:"placeholder",isDisabled:v,isFocused:b,innerProps:{id:this.getElementId("placeholder")}}),p);if(_)return w.map(function(C,L){var V=C===I,oe="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return E.createElement(s,z({},d,{components:{Container:l,Label:a,Remove:u},isFocused:V,isDisabled:v,key:oe,index:L,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(mt){mt.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(h)return null;var T=w[0];return E.createElement(c,z({},d,{data:T,isDisabled:v}),this.formatOptionLabel(T,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),o=i.ClearIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!this.isClearable()||!o||a||!this.hasValue()||u)return null;var f={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return E.createElement(o,z({},s,{innerProps:f,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),o=i.LoadingIndicator,s=this.commonProps,l=this.props,a=l.isDisabled,u=l.isLoading,c=this.state.isFocused;if(!o||!u)return null;var f={"aria-hidden":"true"};return E.createElement(o,z({},s,{innerProps:f,isDisabled:a,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator,s=i.IndicatorSeparator;if(!o||!s)return null;var l=this.commonProps,a=this.props.isDisabled,u=this.state.isFocused;return E.createElement(s,z({},l,{isDisabled:a,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),o=i.DropdownIndicator;if(!o)return null;var s=this.commonProps,l=this.props.isDisabled,a=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return E.createElement(o,z({},s,{innerProps:u,isDisabled:l,isFocused:a}))}},{key:"renderMenu",value:function(){var i=this,o=this.getComponents(),s=o.Group,l=o.GroupHeading,a=o.Menu,u=o.MenuList,c=o.MenuPortal,f=o.LoadingMessage,d=o.NoOptionsMessage,m=o.Option,y=this.commonProps,v=this.state.focusedOption,_=this.props,h=_.captureMenuScroll,p=_.inputValue,g=_.isLoading,w=_.loadingMessage,I=_.minMenuHeight,b=_.maxMenuHeight,T=_.menuIsOpen,C=_.menuPlacement,L=_.menuPosition,V=_.menuPortalTarget,oe=_.menuShouldBlockScroll,Ee=_.menuShouldScrollIntoView,mt=_.noOptionsMessage,Ut=_.onMenuScrollToTop,ke=_.onMenuScrollToBottom;if(!T)return null;var ge=function(Fe,qe){var jt=Fe.type,De=Fe.data,At=Fe.isDisabled,kn=Fe.isSelected,Ga=Fe.label,cb=Fe.value,Hg=v===De,Wg=At?void 0:function(){return i.onOptionHover(De)},fb=At?void 0:function(){return i.selectOption(De)},Gg="".concat(i.getElementId("option"),"-").concat(qe),db={id:Gg,onClick:fb,onMouseMove:Wg,onMouseOver:Wg,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:kn};return E.createElement(m,z({},y,{innerProps:db,data:De,isDisabled:At,isSelected:kn,key:Gg,label:Ga,type:jt,value:cb,isFocused:Hg,innerRef:Hg?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Fe.data,"menu"))},Et;if(this.hasOptions())Et=this.getCategorizedOptions().map(function(q){if(q.type==="group"){var Fe=q.data,qe=q.options,jt=q.index,De="".concat(i.getElementId("group"),"-").concat(jt),At="".concat(De,"-heading");return E.createElement(s,z({},y,{key:De,data:Fe,options:qe,Heading:l,headingProps:{id:At,data:q.data},label:i.formatGroupLabel(q.data)}),q.options.map(function(kn){return ge(kn,"".concat(jt,"-").concat(kn.index))}))}else if(q.type==="option")return ge(q,"".concat(q.index))});else if(g){var R=w({inputValue:p});if(R===null)return null;Et=E.createElement(f,y,R)}else{var U=mt({inputValue:p});if(U===null)return null;Et=E.createElement(d,y,U)}var H={minMenuHeight:I,maxMenuHeight:b,menuPlacement:C,menuPosition:L,menuShouldScrollIntoView:Ee},se=E.createElement(B2,z({},y,H),function(q){var Fe=q.ref,qe=q.placerProps,jt=qe.placement,De=qe.maxHeight;return E.createElement(a,z({},y,H,{innerRef:Fe,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:g,placement:jt}),E.createElement(vx,{captureEnabled:h,onTopArrive:Ut,onBottomArrive:ke,lockEnabled:oe},function(At){return E.createElement(u,z({},y,{innerRef:function(Ga){i.getMenuListRef(Ga),At(Ga)},innerProps:{role:"listbox","aria-multiselectable":y.isMulti,id:i.getElementId("listbox")},isLoading:g,maxHeight:De,focusedOption:v}),Et)}))});return V||L==="fixed"?E.createElement(c,z({},y,{appendTo:V,controlElement:this.controlRef,menuPlacement:C,menuPosition:L}),se):se}},{key:"renderFormField",value:function(){var i=this,o=this.props,s=o.delimiter,l=o.isDisabled,a=o.isMulti,u=o.name,c=o.required,f=this.state.selectValue;if(c&&!this.hasValue()&&!l)return E.createElement(wx,{name:u,onFocus:this.onValueInputFocus});if(!(!u||l))if(a)if(s){var d=f.map(function(v){return i.getOptionValue(v)}).join(s);return E.createElement("input",{name:u,type:"hidden",value:d})}else{var m=f.length>0?f.map(function(v,_){return E.createElement("input",{key:"i-".concat(_),name:u,type:"hidden",value:i.getOptionValue(v)})}):E.createElement("input",{name:u,type:"hidden",value:""});return E.createElement("div",null,m)}else{var y=f[0]?this.getOptionValue(f[0]):"";return E.createElement("input",{name:u,type:"hidden",value:y})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,o=this.state,s=o.ariaSelection,l=o.focusedOption,a=o.focusedValue,u=o.isFocused,c=o.selectValue,f=this.getFocusableOptions();return E.createElement(ox,z({},i,{id:this.getElementId("live-region"),ariaSelection:s,focusedOption:l,focusedValue:a,isFocused:u,selectValue:c,focusableOptions:f,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),o=i.Control,s=i.IndicatorsContainer,l=i.SelectContainer,a=i.ValueContainer,u=this.props,c=u.className,f=u.id,d=u.isDisabled,m=u.menuIsOpen,y=this.state.isFocused,v=this.commonProps=this.getCommonProps();return E.createElement(l,z({},v,{className:c,innerProps:{id:f,onKeyDown:this.onKeyDown},isDisabled:d,isFocused:y}),this.renderLiveRegion(),E.createElement(o,z({},v,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:d,isFocused:y,menuIsOpen:m}),E.createElement(a,z({},v,{isDisabled:d}),this.renderPlaceholderOrValue(),this.renderInput()),E.createElement(s,z({},v,{isDisabled:d}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,o){var s=o.prevProps,l=o.clearFocusValueOnUpdate,a=o.inputIsHiddenAfterUpdate,u=o.ariaSelection,c=o.isFocused,f=o.prevWasFocused,d=o.instancePrefix,m=i.options,y=i.value,v=i.menuIsOpen,_=i.inputValue,h=i.isMulti,p=wy(y),g={};if(s&&(y!==s.value||m!==s.options||v!==s.menuIsOpen||_!==s.inputValue)){var w=v?Lx(i,p):[],I=v?My(Yl(i,p),"".concat(d,"-option")):[],b=l?Vx(o,p):null,T=Fx(o,w),C=id(I,T);g={selectValue:p,focusedOption:T,focusedOptionId:C,focusableOptionsWithIds:I,focusedValue:b,clearFocusValueOnUpdate:!1}}var L=a!=null&&i!==s?{inputIsHidden:a,inputIsHiddenAfterUpdate:void 0}:{},V=u,oe=c&&f;return c&&!oe&&(V={value:pl(h,p,p[0]||null),options:p,action:"initial-input-focus"},oe=!f),(u==null?void 0:u.action)==="initial-input-focus"&&(V=null),$($($({},g),L),{},{prevProps:i,ariaSelection:V,prevWasFocused:oe})}}]),n}(E.Component);jE.defaultProps=Mx;var Ux=E.forwardRef(function(t,e){var n=eA(t);return E.createElement(jE,z({ref:e},n))}),jx=Ux;const zx=["back_pain","constipation","abdominal_pain","diarrhoea","mild_fever","yellow_urine","yellowing_of_eyes","acute_liver_failure","fluid_overload","swelling_of_stomach","swelled_lymph_nodes","malaise","blurred_and_distorted_vision","phlegm","throat_irritation","redness_of_eyes","sinus_pressure","runny_nose","congestion","chest_pain","weakness_in_limbs","fast_heart_rate","pain_during_bowel_movements","pain_in_anal_region","bloody_stool","irritation_in_anus","neck_pain","dizziness","cramps","bruising","obesity","swollen_legs","swollen_blood_vessels","puffy_face_and_eyes","enlarged_thyroid","brittle_nails","swollen_extremeties","excessive_hunger","extra_marital_contacts","drying_and_tingling_lips","slurred_speech","knee_pain","hip_joint_pain","muscle_weakness","stiff_neck","swelling_joints","movement_stiffness","spinning_movements","loss_of_balance","unsteadiness","weakness_of_one_body_side","loss_of_smell","bladder_discomfort","foul_smell_of_urine","continuous_feel_of_urine","passage_of_gases","internal_itching","toxic_look_(typhos)","depression","irritability","muscle_pain","altered_sensorium","red_spots_over_body","belly_pain","abnormal_menstruation","dischromic _patches","watering_from_eyes","increased_appetite","polyuria","family_history","mucoid_sputum","rusty_sputum","lack_of_concentration","visual_disturbances","receiving_blood_transfusion","receiving_unsterile_injections","coma","stomach_bleeding","distention_of_abdomen","history_of_alcohol_consumption","blood_in_sputum","prominent_veins_on_calf","palpitations","painful_walking","pus_filled_pimples","blackheads","scurring","skin_peeling","silver_like_dusting","small_dents_in_nails","inflammatory_nails","blister","red_sore_around_nose","yellow_crust_ooze"],Bx={symptoms:zx},Hx=()=>{const[t,e]=E.useState([]),[n,r]=E.useState("prognosis"),i=a=>{const u=a?a.map(c=>c.value):[];e(u)},o=a=>{r(a)},s=Bx.symptoms.map(a=>({value:a,label:a})),l=async()=>{try{const a=await fetch("http://localhost:5000/store_symptoms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({symptoms:t})});if(a.ok){const u=await a.json();console.log(u)}else console.error("Failed to fetch data:",a.statusText)}catch(a){console.error("Error fetching data:",a)}};return S.jsxs("div",{className:"symptom-checker-container",children:[S.jsx("h2",{children:"Symptom Checker"}),S.jsx(jx,{className:"selectbox",options:s,isMulti:!0,value:t.map(a=>({value:a,label:a})),onChange:i,placeholder:"Select Symptoms"}),S.jsx("button",{onClick:l,children:"Submit"}),S.jsxs("div",{children:[S.jsx("h3",{children:"Selected Symptoms:"}),S.jsx("ul",{children:t.map((a,u)=>S.jsx("li",{children:a},u))})]}),S.jsxs("nav",{className:"navbar",children:[S.jsx("button",{className:n==="prognosis"?"active":"",onClick:()=>o("prognosis"),children:"Prognosis"}),S.jsx("button",{className:n==="medication"?"active":"",onClick:()=>o("medication"),children:"Medication"}),S.jsx("button",{className:n==="precautions"?"active":"",onClick:()=>o("precautions"),children:"Precautions"})]}),n==="prognosis"&&S.jsxs("div",{className:"tab-content",children:[S.jsx("h2",{children:"Disease"}),S.jsx("p",{children:"This is Supposed to be the information about the disease"})]}),n==="medication"&&S.jsxs("div",{className:"tab-content",children:[S.jsx("h2",{children:"Recommended Medicines"}),S.jsxs("ul",{children:[S.jsx("li",{children:"Something 1"}),S.jsx("li",{children:"Something 2"}),S.jsx("li",{children:"Something 3"})]})]}),n==="precautions"&&S.jsxs("div",{className:"tab-content",children:[S.jsx("h2",{children:"Precautions"}),S.jsxs("ul",{children:[S.jsx("li",{children:"Precaution 1"}),S.jsx("li",{children:"Precaution 2"}),S.jsx("li",{children:"Precaution 3"})]})]})]})};var Vy={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Wx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],l=t[n++],a=((i&7)<<18|(o&63)<<12|(s&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},BE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,l=s?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=o>>2,f=(o&3)<<4|l>>4;let d=(l&15)<<2|u>>6,m=u&63;a||(m=64,s||(d=64)),r.push(n[c],n[f],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Wx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||l==null||u==null||f==null)throw new Gx;const d=o<<2|l>>4;if(r.push(d),u!==64){const m=l<<4&240|u>>2;if(r.push(m),f!==64){const y=u<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kx=function(t){const e=zE(t);return BE.encodeByteArray(e,!0)},Fu=function(t){return Kx(t).replace(/\./g,"")},HE=function(t){try{return BE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx=()=>qx().__FIREBASE_DEFAULTS__,Qx=()=>{if(typeof process>"u"||typeof Vy>"u")return;const t=Vy.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Xx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&HE(t[1]);return e&&JSON.parse(e)},Hc=()=>{try{return Yx()||Qx()||Xx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},WE=t=>{var e,n;return(n=(e=Hc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jx=t=>{const e=WE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},GE=()=>{var t;return(t=Hc())===null||t===void 0?void 0:t.config},KE=t=>{var e;return(e=Hc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eO(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,o=t.sub||t.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fu(JSON.stringify(n)),Fu(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tO(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ne())}function nO(){var t;const e=(t=Hc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function rO(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function iO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oO(){const t=Ne();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sO(){return!nO()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qE(){try{return typeof indexedDB=="object"}catch{return!1}}function aO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lO="FirebaseError";class Xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lO,Object.setPrototypeOf(this,Xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ba.prototype.create)}}class ba{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?uO(o,r):"Error",l=`${this.serviceName}: ${s} (${i}).`;return new Xn(i,l,r)}}function uO(t,e){return t.replace(cO,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cO=/\{\$([^}]+)}/g;function fO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function $u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(Fy(o)&&Fy(s)){if(!$u(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Fy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function dO(t,e){const n=new hO(t,e);return n.subscribe.bind(n)}class hO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pO(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=od),i.error===void 0&&(i.error=od),i.complete===void 0&&(i.complete=od);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function od(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t){return t&&t._delegate?t._delegate:t}class pi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Zx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vO(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(o);r===l&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gO(t){return t===Gr?void 0:t}function vO(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Q||(Q={}));const _O={debug:Q.DEBUG,verbose:Q.VERBOSE,info:Q.INFO,warn:Q.WARN,error:Q.ERROR,silent:Q.SILENT},wO=Q.INFO,EO={[Q.DEBUG]:"log",[Q.VERBOSE]:"log",[Q.INFO]:"info",[Q.WARN]:"warn",[Q.ERROR]:"error"},SO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=EO[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nm{constructor(e){this.name=e,this._logLevel=wO,this._logHandler=SO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_O[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Q.DEBUG,...e),this._logHandler(this,Q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Q.VERBOSE,...e),this._logHandler(this,Q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Q.INFO,...e),this._logHandler(this,Q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Q.WARN,...e),this._logHandler(this,Q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Q.ERROR,...e),this._logHandler(this,Q.ERROR,...e)}}const IO=(t,e)=>e.some(n=>t instanceof n);let $y,Uy;function TO(){return $y||($y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bO(){return Uy||(Uy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const YE=new WeakMap,Nh=new WeakMap,QE=new WeakMap,sd=new WeakMap,Dm=new WeakMap;function CO(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(br(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&YE.set(n,t)}).catch(()=>{}),Dm.set(e,t),e}function kO(t){if(Nh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});Nh.set(t,e)}let Dh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return br(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function PO(t){Dh=t(Dh)}function AO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ad(this),e,...n);return QE.set(r,e.sort?e.sort():[e]),br(r)}:bO().includes(t)?function(...e){return t.apply(ad(this),e),br(YE.get(this))}:function(...e){return br(t.apply(ad(this),e))}}function RO(t){return typeof t=="function"?AO(t):(t instanceof IDBTransaction&&kO(t),IO(t,TO())?new Proxy(t,Dh):t)}function br(t){if(t instanceof IDBRequest)return CO(t);if(sd.has(t))return sd.get(t);const e=RO(t);return e!==t&&(sd.set(t,e),Dm.set(e,t)),e}const ad=t=>Dm.get(t);function xO(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),l=br(s);return r&&s.addEventListener("upgradeneeded",a=>{r(br(s.result),a.oldVersion,a.newVersion,br(s.transaction),a)}),n&&s.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{o&&a.addEventListener("close",()=>o()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const OO=["get","getKey","getAll","getAllKeys","count"],NO=["put","add","delete","clear"],ld=new Map;function jy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ld.get(e))return ld.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=NO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OO.includes(n)))return;const o=async function(s,...l){const a=this.transaction(s,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ld.set(e,o),o}PO(t=>({...t,get:(e,n,r)=>jy(e,n)||t.get(e,n,r),has:(e,n)=>!!jy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mh="@firebase/app",zy="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new Nm("@firebase/app"),LO="@firebase/app-compat",VO="@firebase/analytics-compat",FO="@firebase/analytics",$O="@firebase/app-check-compat",UO="@firebase/app-check",jO="@firebase/auth",zO="@firebase/auth-compat",BO="@firebase/database",HO="@firebase/database-compat",WO="@firebase/functions",GO="@firebase/functions-compat",KO="@firebase/installations",qO="@firebase/installations-compat",YO="@firebase/messaging",QO="@firebase/messaging-compat",XO="@firebase/performance",JO="@firebase/performance-compat",ZO="@firebase/remote-config",eN="@firebase/remote-config-compat",tN="@firebase/storage",nN="@firebase/storage-compat",rN="@firebase/firestore",iN="@firebase/firestore-compat",oN="firebase",sN="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="[DEFAULT]",aN={[Mh]:"fire-core",[LO]:"fire-core-compat",[FO]:"fire-analytics",[VO]:"fire-analytics-compat",[UO]:"fire-app-check",[$O]:"fire-app-check-compat",[jO]:"fire-auth",[zO]:"fire-auth-compat",[BO]:"fire-rtdb",[HO]:"fire-rtdb-compat",[WO]:"fire-fn",[GO]:"fire-fn-compat",[KO]:"fire-iid",[qO]:"fire-iid-compat",[YO]:"fire-fcm",[QO]:"fire-fcm-compat",[XO]:"fire-perf",[JO]:"fire-perf-compat",[ZO]:"fire-rc",[eN]:"fire-rc-compat",[tN]:"fire-gcs",[nN]:"fire-gcs-compat",[rN]:"fire-fst",[iN]:"fire-fst-compat","fire-js":"fire-js",[oN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uu=new Map,Vh=new Map;function lN(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vo(t){const e=t.name;if(Vh.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;Vh.set(e,t);for(const n of Uu.values())lN(n,t);return!0}function Mm(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Cr=new ba("app","Firebase",uN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo=sN;function XE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Cr.create("bad-app-name",{appName:String(i)});if(n||(n=GE()),!n)throw Cr.create("no-options");const o=Uu.get(i);if(o){if($u(n,o.options)&&$u(r,o.config))return o;throw Cr.create("duplicate-app",{appName:i})}const s=new yO(i);for(const a of Vh.values())s.addComponent(a);const l=new cN(n,r,s);return Uu.set(i,l),l}function JE(t=Lh){const e=Uu.get(t);if(!e&&t===Lh&&GE())return XE();if(!e)throw Cr.create("no-app",{appName:t});return e}function kr(t,e,n){var r;let i=(r=aN[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const l=[`Unable to register library "${i}" with version "${e}":`];o&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&l.push("and"),s&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(l.join(" "));return}vo(new pi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fN="firebase-heartbeat-database",dN=1,Ys="firebase-heartbeat-store";let ud=null;function ZE(){return ud||(ud=xO(fN,dN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw Cr.create("idb-open",{originalErrorMessage:t.message})})),ud}async function hN(t){try{const n=(await ZE()).transaction(Ys),r=await n.objectStore(Ys).get(eS(t));return await n.done,r}catch(e){if(e instanceof Xn)mi.warn(e.message);else{const n=Cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function By(t,e){try{const r=(await ZE()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,eS(t)),await r.done}catch(n){if(n instanceof Xn)mi.warn(n.message);else{const r=Cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(r.message)}}}function eS(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pN=1024,mN=30*24*60*60*1e3;class gN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Hy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(s=>s.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const l=new Date(s.date).valueOf();return Date.now()-l<=mN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hy(),{heartbeatsToSend:r,unsentEntries:i}=vN(this._heartbeatsCache.heartbeats),o=Fu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Hy(){return new Date().toISOString().substring(0,10)}function vN(t,e=pN){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Wy(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qE()?aO().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return By(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Wy(t){return Fu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(t){vo(new pi("platform-logger",e=>new DO(e),"PRIVATE")),vo(new pi("heartbeat",e=>new gN(e),"PRIVATE")),kr(Mh,zy,t),kr(Mh,zy,"esm2017"),kr("fire-js","")}_N("");function Lm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function tS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wN=tS,nS=new ba("auth","Firebase",tS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Nm("@firebase/auth");function EN(t,...e){ju.logLevel<=Q.WARN&&ju.warn(`Auth (${xo}): ${t}`,...e)}function Ql(t,...e){ju.logLevel<=Q.ERROR&&ju.error(`Auth (${xo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Vm(t,...e)}function In(t,...e){return Vm(t,...e)}function SN(t,e,n){const r=Object.assign(Object.assign({},wN()),{[e]:n});return new ba("auth","Firebase",r).create(e,{appName:t.name})}function Vm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return nS.create(t,...e)}function W(t,e,...n){if(!t)throw Vm(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ql(e),new Error(e)}function Bn(t,e){t||On(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function IN(){return Gy()==="http:"||Gy()==="https:"}function Gy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(IN()||rO()||"connection"in navigator)?navigator.onLine:!0}function bN(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n){this.shortDelay=e,this.longDelay=n,Bn(n>e,"Short delay should be less than long delay!"),this.isMobile=tO()||iO()}get(){return TN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fm(t,e){Bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=new ka(3e4,6e4);function jr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,i={}){return iS(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const l=Ca(Object.assign({key:t.config.apiKey},s)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),rS.fetch()(oS(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},o))})}async function iS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},CN),e);try{const i=new AN(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw ml(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const l=o.ok?s.errorMessage:s.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ml(t,"credential-already-in-use",s);if(a==="EMAIL_EXISTS")throw ml(t,"email-already-in-use",s);if(a==="USER_DISABLED")throw ml(t,"user-disabled",s);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw SN(t,c,u);un(t,c)}}catch(i){if(i instanceof Xn)throw i;un(t,"network-request-failed",{message:String(i)})}}async function Pa(t,e,n,r,i={}){const o=await Jn(t,e,n,r,i);return"mfaPendingCredential"in o&&un(t,"multi-factor-auth-required",{_serverResponse:o}),o}function oS(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fm(t.config,i):`${t.config.apiScheme}://${i}`}function PN(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class AN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(In(this.auth,"network-request-failed")),kN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ml(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=In(t,e,r);return i.customData._tokenResponse=n,i}function Ky(t){return t!==void 0&&t.enterprise!==void 0}class RN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return PN(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function xN(t,e){return Jn(t,"GET","/v2/recaptchaConfig",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ON(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function NN(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DN(t,e=!1){const n=Yt(t),r=await n.getIdToken(e),i=$m(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ys(cd(i.auth_time)),issuedAtTime:ys(cd(i.iat)),expirationTime:ys(cd(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function cd(t){return Number(t)*1e3}function $m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ql("JWT malformed, contained fewer than 3 sections"),null;try{const i=HE(n);return i?JSON.parse(i):(Ql("Failed to decode base64 JWT payload"),null)}catch(i){return Ql("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function MN(t){const e=$m(t);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Xn&&LN(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function LN({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ys(this.lastLoginAt),this.creationTime=ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await yo(t,NN(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?UN(o.providerUserInfo):[],l=$N(t.providerData,s),a=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new sS(o.createdAt,o.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function FN(t){const e=Yt(t);await zu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $N(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function UN(t){return t.map(e=>{var{providerId:n}=e,r=Lm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jN(t,e){const n=await iS(t,{},async()=>{const r=Ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=oS(t,i,"/v1/token",`key=${o}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",rS.fetch()(s,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zN(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):MN(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return W(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await jN(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Qs;return r&&(W(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(W(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qs,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tr(t,e){W(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class oi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Lm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VN(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new sS(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await yo(this,this.stsTokenManager.getToken(this.auth,e));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DN(this,e)}reload(){return FN(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await zu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yo(this,ON(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,l,a,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,y=(s=n.photoURL)!==null&&s!==void 0?s:void 0,v=(l=n.tenantId)!==null&&l!==void 0?l:void 0,_=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:w,isAnonymous:I,providerData:b,stsTokenManager:T}=n;W(g&&T,e,"internal-error");const C=Qs.fromJSON(this.name,T);W(typeof g=="string",e,"internal-error"),tr(f,e.name),tr(d,e.name),W(typeof w=="boolean",e,"internal-error"),W(typeof I=="boolean",e,"internal-error"),tr(m,e.name),tr(y,e.name),tr(v,e.name),tr(_,e.name),tr(h,e.name),tr(p,e.name);const L=new oi({uid:g,auth:e,email:d,emailVerified:w,displayName:f,isAnonymous:I,photoURL:y,phoneNumber:m,tenantId:v,stsTokenManager:C,createdAt:h,lastLoginAt:p});return b&&Array.isArray(b)&&(L.providerData=b.map(V=>Object.assign({},V))),_&&(L._redirectEventId=_),L}static async _fromIdTokenResponse(e,n,r=!1){const i=new Qs;i.updateFromServerResponse(n);const o=new oi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await zu(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qy=new Map;function Nn(t){Bn(t instanceof Function,"Expected a class definition");let e=qy.get(t);return e?(Bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}aS.type="NONE";const Yy=aS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e,n){return`firebase:${t}:${e}:${n}`}class ro{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=Xl(this.userKey,i.apiKey,o),this.fullPersistenceKey=Xl("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ro(Nn(Yy),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Nn(Yy);const s=Xl(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(s);if(c){const f=oi._fromJSON(e,c);u!==o&&(l=f),o=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!a.length?new ro(o,e,r):(o=a[0],l&&await o._set(s,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new ro(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dS(e))return"Blackberry";if(hS(e))return"Webos";if(Um(e))return"Safari";if((e.includes("chrome/")||uS(e))&&!e.includes("edge/"))return"Chrome";if(fS(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function lS(t=Ne()){return/firefox\//i.test(t)}function Um(t=Ne()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function uS(t=Ne()){return/crios\//i.test(t)}function cS(t=Ne()){return/iemobile/i.test(t)}function fS(t=Ne()){return/android/i.test(t)}function dS(t=Ne()){return/blackberry/i.test(t)}function hS(t=Ne()){return/webos/i.test(t)}function Wc(t=Ne()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BN(t=Ne()){var e;return Wc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function HN(){return oO()&&document.documentMode===10}function pS(t=Ne()){return Wc(t)||fS(t)||hS(t)||dS(t)||/windows phone/i.test(t)||cS(t)}function WN(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mS(t,e=[]){let n;switch(t){case"Browser":n=Qy(Ne());break;case"Worker":n=`${Qy(Ne())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${xo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,l)=>{try{const a=e(o);s(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KN(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",jr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qN=6;class YN{constructor(e){var n,r,i,o;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=s.minPasswordLength)!==null&&n!==void 0?n:qN,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),s.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),s.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),s.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),s.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(o=e.forceUpgradeOnSignin)!==null&&o!==void 0?o:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,o,s,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(o=a.containsUppercaseLetter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(s=a.containsNumericCharacter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,o){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xy(this),this.idTokenSubscription=new Xy(this),this.beforeStateQueue=new GN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=nS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Nn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ro.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!s||s===l)&&(a!=null&&a.user)&&(i=a.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await zu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=bN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Yt(e):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Nn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await KN(this),n=new YN(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ba("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zN(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Nn(e)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await ro.create(this,[Nn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n);let s=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{s||o(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{s=!0,a()}}else{const a=e.addObserver(n);return()=>{s=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&EN(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return Yt(t)}class Xy{constructor(e){this.auth=e,this.observer=null,this.addObserver=dO(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function XN(t){Gc=t}function gS(t){return Gc.loadJS(t)}function JN(){return Gc.recaptchaEnterpriseScript}function ZN(){return Gc.gapiScript}function eD(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const tD="recaptcha-enterprise",nD="NO_RECAPTCHA";class rD{constructor(e){this.type=tD,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,l)=>{xN(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const u=new RN(a);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(a=>{l(a)})})}function i(o,s,l){const a=window.grecaptcha;Ky(a)?a.enterprise.ready(()=>{a.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(nD)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(l=>{if(!n&&Ky(window.grecaptcha))i(l,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}let a=JN();a.length!==0&&(a+=l),gS(a).then(()=>{i(l,o,s)}).catch(u=>{s(u)})}}).catch(l=>{s(l)})})}}async function Jy(t,e,n,r=!1){const i=new rD(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}async function $h(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Jy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const s=await Jy(t,e,n,n==="getOobCode");return r(t,s)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t,e){const n=Mm(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if($u(o,e??{}))return i;un(i,"already-initialized")}return n.initialize({options:e})}function oD(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Nn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sD(t,e,n){const r=Ci(t);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=vS(e),{host:s,port:l}=aD(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${o}//${s}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:l,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||lD()}function vS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function aD(t){const e=vS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Zy(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Zy(s)}}}function Zy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function lD(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}async function uD(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t,e){return Pa(t,"POST","/v1/accounts:signInWithPassword",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fD(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}async function dD(t,e){return Pa(t,"POST","/v1/accounts:signInWithEmailLink",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs extends jm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Xs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Xs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,n,"signInWithPassword",cD);case"emailLink":return fD(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return $h(e,r,"signUpPassword",uD);case"emailLink":return dD(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io(t,e){return Pa(t,"POST","/v1/accounts:signInWithIdp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD="http://localhost";class gi extends jm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Lm(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new gi(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return io(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,io(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,io(e,n)}buildRequest(){const e={requestUri:hD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pD(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function mD(t){const e=is(os(t)).link,n=e?is(os(e)).deep_link_id:null,r=is(os(t)).deep_link_id;return(r?is(os(r)).link:null)||r||n||e||t}class zm{constructor(e){var n,r,i,o,s,l;const a=is(os(e)),u=(n=a.apiKey)!==null&&n!==void 0?n:null,c=(r=a.oobCode)!==null&&r!==void 0?r:null,f=pD((i=a.mode)!==null&&i!==void 0?i:null);W(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(o=a.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=a.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=mD(e);try{return new zm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(){this.providerId=Oo.PROVIDER_ID}static credential(e,n){return Xs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zm.parseLink(n);return W(r,"argument-error"),Xs._fromEmailAndCode(e,r.code,r.tenantId)}}Oo.PROVIDER_ID="password";Oo.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Oo.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa extends yS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr extends Aa{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur extends Aa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Aa{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Aa{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gD(t,e){return Pa(t,"POST","/v1/accounts:signUp",jr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await oi._fromIdTokenResponse(e,r,i),s=e0(r);return new vi({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=e0(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function e0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu extends Xn{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Bu.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Bu(e,n,r,i)}}function _S(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Bu._fromErrorAndOperation(t,o,e,r):o})}async function vD(t,e,n=!1){const r=await yo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yD(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await yo(t,_S(r,i,e,t),n);W(o.idToken,r,"internal-error");const s=$m(o.idToken);W(s,r,"internal-error");const{sub:l}=s;return W(t.uid===l,r,"user-mismatch"),vi._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&un(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wS(t,e,n=!1){const r="signIn",i=await _S(t,r,e),o=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function _D(t,e){return wS(Ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ES(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function wD(t,e,n){const r=Ci(t),s=await $h(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gD).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&ES(t),a}),l=await vi._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(l.user),l}function ED(t,e,n){return _D(Yt(t),Oo.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ES(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ID(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Yt(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await yo(r,SD(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const l=r.providerData.find(({providerId:a})=>a==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function TD(t,e,n,r){return Yt(t).onIdTokenChanged(e,n,r)}function bD(t,e,n){return Yt(t).beforeAuthStateChanged(e,n)}const Hu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hu,"1"),this.storage.removeItem(Hu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CD(){const t=Ne();return Um(t)||Wc(t)}const kD=1e3,PD=10;class IS extends SS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CD()&&WN(),this.fallbackToPolling=pS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,l,a)=>{this.notifyListeners(s,a)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);HN()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,PD):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},kD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}IS.type="LOCAL";const AD=IS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TS extends SS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}TS.type="SESSION";const bS=TS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RD(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(s).map(async u=>u(n.origin,o)),a=await RD(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xD{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((l,a)=>{const u=Bm("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),o=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),l(d.data.response);break;default:clearTimeout(c),clearTimeout(o),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(){return window}function OD(t){Tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(){return typeof Tn().WorkerGlobalScope<"u"&&typeof Tn().importScripts=="function"}async function ND(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function MD(){return CS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kS="firebaseLocalStorageDb",LD=1,Wu="firebaseLocalStorage",PS="fbase_key";class Ra{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([Wu],e?"readwrite":"readonly").objectStore(Wu)}function VD(){const t=indexedDB.deleteDatabase(kS);return new Ra(t).toPromise()}function Uh(){const t=indexedDB.open(kS,LD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wu,{keyPath:PS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wu)?e(r):(r.close(),await VD(),e(await Uh()))})})}async function t0(t,e,n){const r=qc(t,!0).put({[PS]:e,value:n});return new Ra(r).toPromise()}async function FD(t,e){const n=qc(t,!1).get(e),r=await new Ra(n).toPromise();return r===void 0?null:r.value}function n0(t,e){const n=qc(t,!0).delete(e);return new Ra(n).toPromise()}const $D=800,UD=3;class AS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>UD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return CS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(MD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await ND(),!this.activeServiceWorker)return;this.sender=new xD(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uh();return await t0(e,Hu,"1"),await n0(e,Hu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>t0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>FD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>n0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=qc(i,!1).getAll();return new Ra(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),$D)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}AS.type="LOCAL";const jD=AS;new ka(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zD(t,e){return e?Nn(e):(W(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm extends jm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return io(e,this._buildIdpRequest())}_linkToIdToken(e,n){return io(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return io(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BD(t){return wS(t.auth,new Hm(t),t.bypassAuthState)}function HD(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),yD(n,new Hm(t),t.bypassAuthState)}async function WD(t){const{auth:e,user:n}=t;return W(n,e,"internal-error"),vD(n,new Hm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:l}=e;if(s){this.reject(s);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BD;case"linkViaPopup":case"linkViaRedirect":return WD;case"reauthViaPopup":case"reauthViaRedirect":return HD;default:un(this.auth,"internal-error")}}resolve(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GD=new ka(2e3,1e4);class Wi extends RS{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Bn(this.filter.length===1,"Popup operations only handle one event");const e=Bm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(In(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(In(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(In(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,GD.get())};e()}}Wi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD="pendingRedirect",Jl=new Map;class qD extends RS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Jl.get(this.auth._key());if(!e){try{const r=await YD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Jl.set(this.auth._key(),e)}return this.bypassAuthState||Jl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YD(t,e){const n=JD(e),r=XD(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QD(t,e){Jl.set(t._key(),e)}function XD(t){return Nn(t._redirectPersistence)}function JD(t){return Xl(KD,t.config.apiKey,t.name)}async function ZD(t,e,n=!1){const r=Ci(t),i=zD(r,e),s=await new qD(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=10*60*1e3;class tM{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!nM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(In(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=eM&&this.cachedEventUids.clear(),this.cachedEventUids.has(r0(e))}saveEventToCache(e){this.cachedEventUids.add(r0(e)),this.lastProcessedEventTime=Date.now()}}function r0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function nM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oM=/^https?/;async function sM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await rM(t);for(const n of e)try{if(aM(n))return}catch{}un(t,"unauthorized-domain")}function aM(t){const e=Fh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!oM.test(n))return!1;if(iM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lM=new ka(3e4,6e4);function i0(){const t=Tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function uM(t){return new Promise((e,n)=>{var r,i,o;function s(){i0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{i0(),n(In(t,"network-request-failed"))},timeout:lM.get()})}if(!((i=(r=Tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=Tn().gapi)===null||o===void 0)&&o.load)s();else{const l=eD("iframefcb");return Tn()[l]=()=>{gapi.load?s():n(In(t,"network-request-failed"))},gS(`${ZN()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Zl=null,e})}let Zl=null;function cM(t){return Zl=Zl||uM(t),Zl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fM=new ka(5e3,15e3),dM="__/auth/iframe",hM="emulator/auth/iframe",pM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gM(t){const e=t.config;W(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fm(e,hM):`https://${t.config.authDomain}/${dM}`,r={apiKey:e.apiKey,appName:t.name,v:xo},i=mM.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Ca(r).slice(1)}`}async function vM(t){const e=await cM(t),n=Tn().gapi;return W(n,t,"internal-error"),e.open({where:document.body,url:gM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:pM,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=In(t,"network-request-failed"),l=Tn().setTimeout(()=>{o(s)},fM.get());function a(){Tn().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},_M=500,wM=600,EM="_blank",SM="http://localhost";class o0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function IM(t,e,n,r=_M,i=wM){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},yM),{width:r.toString(),height:i.toString(),top:o,left:s}),u=Ne().toLowerCase();n&&(l=uS(u)?EM:n),lS(u)&&(e=e||SM,a.scrollbars="yes");const c=Object.entries(a).reduce((d,[m,y])=>`${d}${m}=${y},`,"");if(BN(u)&&l!=="_self")return TM(e||"",l),new o0(null);const f=window.open(e||"",l,c);W(f,t,"popup-blocked");try{f.focus()}catch{}return new o0(f)}function TM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bM="__/auth/handler",CM="emulator/auth/handler",kM=encodeURIComponent("fac");async function s0(t,e,n,r,i,o){W(t.config.authDomain,t,"auth-domain-config-required"),W(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:xo,eventId:i};if(e instanceof yS){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",fO(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(o||{}))s[c]=f}if(e instanceof Aa){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(s.scopes=c.join(","))}t.tenantId&&(s.tid=t.tenantId);const l=s;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${kM}=${encodeURIComponent(a)}`:"";return`${PM(t)}?${Ca(l).slice(1)}${u}`}function PM({config:t}){return t.emulator?Fm(t,CM):`https://${t.authDomain}/${bM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd="webStorageSupport";class AM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bS,this._completeRedirectFn=ZD,this._overrideRedirectResult=QD}async _openPopup(e,n,r,i){var o;Bn((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await s0(e,n,r,Fh(),i);return IM(e,s,Bm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await s0(e,n,r,Fh(),i);return OD(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Bn(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vM(e),r=new tM(e);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fd,{type:fd},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[fd];s!==void 0&&n(!!s),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pS()||Um()||Wc()}}const RM=AM;var a0="@firebase/auth",l0="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NM(t){vo(new pi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:l}=r.options;W(s&&!s.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:s,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mS(t)},u=new QN(r,i,o,a);return oD(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vo(new pi("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new xM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),kr(a0,l0,OM(t)),kr(a0,l0,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM=5*60,MM=KE("authIdTokenMaxAge")||DM;let u0=null;const LM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>MM)return;const i=n==null?void 0:n.token;u0!==i&&(u0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function VM(t=JE()){const e=Mm(t,"auth");if(e.isInitialized())return e.getImmediate();const n=iD(t,{popupRedirectResolver:RM,persistence:[jD,AD,bS]}),r=KE("authTokenSyncURL");if(r){const o=LM(r);bD(n,o,()=>o(n.currentUser)),TD(n,s=>o(s))}const i=WE("auth");return i&&sD(n,`http://${i}`),n}function FM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}XN({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=In("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",FM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NM("Browser");var $M="firebase",UM="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kr($M,UM,"app");var jM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Wm=Wm||{},G=jM||self;function Yc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zM(t){return Object.prototype.hasOwnProperty.call(t,dd)&&t[dd]||(t[dd]=++BM)}var dd="closure_uid_"+(1e9*Math.random()>>>0),BM=0;function HM(t,e,n){return t.call.apply(t.bind,arguments)}function WM(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function ft(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ft=HM:ft=WM,ft.apply(null,arguments)}function gl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ke(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,o){for(var s=Array(arguments.length-2),l=2;l<arguments.length;l++)s[l-2]=arguments[l];return e.prototype[i].apply(r,s)}}function zr(){this.s=this.s,this.o=this.o}var GM=0;zr.prototype.s=!1;zr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),GM!=0)&&zM(this)};zr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const OS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function c0(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yc(r)){const i=t.length||0,o=r.length||0;t.length=i+o;for(let s=0;s<o;s++)t[i+s]=r[s]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var KM=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};G.addEventListener("test",n,e),G.removeEventListener("test",n,e)}catch{}return t}();function Js(t){return/^[\s\xa0]*$/.test(t)}function Qc(){var t=G.navigator;return t&&(t=t.userAgent)?t:""}function mn(t){return Qc().indexOf(t)!=-1}function Km(t){return Km[" "](t),t}Km[" "]=function(){};function qM(t,e){var n=U4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var YM=mn("Opera"),_o=mn("Trident")||mn("MSIE"),NS=mn("Edge"),jh=NS||_o,DS=mn("Gecko")&&!(Qc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge"))&&!(mn("Trident")||mn("MSIE"))&&!mn("Edge"),QM=Qc().toLowerCase().indexOf("webkit")!=-1&&!mn("Edge");function MS(){var t=G.document;return t?t.documentMode:void 0}var zh;e:{var hd="",pd=function(){var t=Qc();if(DS)return/rv:([^\);]+)(\)|;)/.exec(t);if(NS)return/Edge\/([\d\.]+)/.exec(t);if(_o)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(QM)return/WebKit\/(\S+)/.exec(t);if(YM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(pd&&(hd=pd?pd[1]:""),_o){var md=MS();if(md!=null&&md>parseFloat(hd)){zh=String(md);break e}}zh=hd}var Bh;if(G.document&&_o){var f0=MS();Bh=f0||parseInt(zh,10)||void 0}else Bh=void 0;var XM=Bh;function Zs(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(DS){e:{try{Km(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:JM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zs.$.h.call(this)}}Ke(Zs,dt);var JM={2:"touch",3:"pen",4:"mouse"};Zs.prototype.h=function(){Zs.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Oa="closure_listenable_"+(1e6*Math.random()|0),ZM=0;function e4(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++ZM,this.fa=this.ia=!1}function Xc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function qm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function t4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function LS(t){const e={};for(const n in t)e[n]=t[n];return e}const d0="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function VS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let o=0;o<d0.length;o++)n=d0[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Jc(t){this.src=t,this.g={},this.h=0}Jc.prototype.add=function(t,e,n,r,i){var o=t.toString();t=this.g[o],t||(t=this.g[o]=[],this.h++);var s=Wh(t,e,r,i);return-1<s?(e=t[s],n||(e.ia=!1)):(e=new e4(e,this.src,o,!!r,i),e.ia=n,t.push(e)),e};function Hh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=OS(r,e),o;(o=0<=i)&&Array.prototype.splice.call(r,i,1),o&&(Xc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wh(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i];if(!o.fa&&o.listener==e&&o.capture==!!n&&o.la==r)return i}return-1}var Ym="closure_lm_"+(1e6*Math.random()|0),gd={};function FS(t,e,n,r,i){if(r&&r.once)return US(t,e,n,r,i);if(Array.isArray(e)){for(var o=0;o<e.length;o++)FS(t,e[o],n,r,i);return null}return n=Jm(n),t&&t[Oa]?t.O(e,n,xa(r)?!!r.capture:!!r,i):$S(t,e,n,!1,r,i)}function $S(t,e,n,r,i,o){if(!e)throw Error("Invalid event type");var s=xa(i)?!!i.capture:!!i,l=Xm(t);if(l||(t[Ym]=l=new Jc(t)),n=l.add(e,n,r,s,o),n.proxy)return n;if(r=n4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)KM||(i=s),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(zS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function n4(){function t(n){return e.call(t.src,t.listener,n)}const e=r4;return t}function US(t,e,n,r,i){if(Array.isArray(e)){for(var o=0;o<e.length;o++)US(t,e[o],n,r,i);return null}return n=Jm(n),t&&t[Oa]?t.P(e,n,xa(r)?!!r.capture:!!r,i):$S(t,e,n,!0,r,i)}function jS(t,e,n,r,i){if(Array.isArray(e))for(var o=0;o<e.length;o++)jS(t,e[o],n,r,i);else r=xa(r)?!!r.capture:!!r,n=Jm(n),t&&t[Oa]?(t=t.i,e=String(e).toString(),e in t.g&&(o=t.g[e],n=Wh(o,n,r,i),-1<n&&(Xc(o[n]),Array.prototype.splice.call(o,n,1),o.length==0&&(delete t.g[e],t.h--)))):t&&(t=Xm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wh(e,n,r,i)),(n=-1<t?e[t]:null)&&Qm(n))}function Qm(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Oa])Hh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(zS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Xm(e))?(Hh(n,t),n.h==0&&(n.src=null,e[Ym]=null)):Xc(t)}}}function zS(t){return t in gd?gd[t]:gd[t]="on"+t}function r4(t,e){if(t.fa)t=!0;else{e=new Zs(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Qm(t),t=n.call(r,e)}return t}function Xm(t){return t=t[Ym],t instanceof Jc?t:null}var vd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jm(t){return typeof t=="function"?t:(t[vd]||(t[vd]=function(e){return t.handleEvent(e)}),t[vd])}function He(){zr.call(this),this.i=new Jc(this),this.S=this,this.J=null}Ke(He,zr);He.prototype[Oa]=!0;He.prototype.removeEventListener=function(t,e,n,r){jS(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var i=e;e=new dt(r,t),VS(e,i)}if(i=!0,n)for(var o=n.length-1;0<=o;o--){var s=e.g=n[o];i=vl(s,r,!0,e)&&i}if(s=e.g=t,i=vl(s,r,!0,e)&&i,i=vl(s,r,!1,e)&&i,n)for(o=0;o<n.length;o++)s=e.g=n[o],i=vl(s,r,!1,e)&&i}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Xc(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function vl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,o=0;o<e.length;++o){var s=e[o];if(s&&!s.fa&&s.capture==n){var l=s.listener,a=s.la||s.src;s.ia&&Hh(t.i,s),i=l.call(a,r)!==!1&&i}}return i&&!r.defaultPrevented}var Zm=G.JSON.stringify;class i4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function o4(){var t=eg;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class s4{constructor(){this.h=this.g=null}add(e,n){const r=BS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var BS=new i4(()=>new a4,t=>t.reset());class a4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function l4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function u4(t){G.setTimeout(()=>{throw t},0)}let ea,ta=!1,eg=new s4,HS=()=>{const t=G.Promise.resolve(void 0);ea=()=>{t.then(c4)}};var c4=()=>{for(var t;t=o4();){try{t.h.call(t.g)}catch(n){u4(n)}var e=BS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ta=!1};function Zc(t,e){He.call(this),this.h=t||1,this.g=e||G,this.j=ft(this.qb,this),this.l=Date.now()}Ke(Zc,He);x=Zc.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(tg(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function tg(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Zc.$.N.call(this),tg(this),delete this.g};function ng(t,e,n){if(typeof t=="function")n&&(t=ft(t,n));else if(t&&typeof t.handleEvent=="function")t=ft(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function WS(t){t.g=ng(()=>{t.g=null,t.i&&(t.i=!1,WS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class f4 extends zr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:WS(this)}N(){super.N(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function na(t){zr.call(this),this.h=t,this.g={}}Ke(na,zr);var h0=[];function GS(t,e,n,r){Array.isArray(n)||(n&&(h0[0]=n.toString()),n=h0);for(var i=0;i<n.length;i++){var o=FS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}}function KS(t){qm(t.g,function(e,n){this.g.hasOwnProperty(n)&&Qm(e)},t),t.g={}}na.prototype.N=function(){na.$.N.call(this),KS(this)};na.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ef(){this.g=!0}ef.prototype.Ea=function(){this.g=!1};function d4(t,e,n,r,i,o){t.info(function(){if(t.g)if(o)for(var s="",l=o.split("&"),a=0;a<l.length;a++){var u=l[a].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");s=2<=f.length&&f[1]=="type"?s+(c+"="+u+"&"):s+(c+"=redacted&")}}else s=null;else s=o;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+s})}function h4(t,e,n,r,i,o,s){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+o+" "+s})}function Gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+m4(t,n)+(r?" "+r:"")})}function p4(t,e){t.info(function(){return"TIMEOUT: "+e})}ef.prototype.info=function(){};function m4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var o=i[0];if(o!="noop"&&o!="stop"&&o!="close")for(var s=1;s<i.length;s++)i[s]=""}}}}return Zm(n)}catch{return e}}var ki={},p0=null;function tf(){return p0=p0||new He}ki.Ta="serverreachability";function qS(t){dt.call(this,ki.Ta,t)}Ke(qS,dt);function ra(t){const e=tf();nt(e,new qS(e))}ki.STAT_EVENT="statevent";function YS(t,e){dt.call(this,ki.STAT_EVENT,t),this.stat=e}Ke(YS,dt);function vt(t){const e=tf();nt(e,new YS(e,t))}ki.Ua="timingevent";function QS(t,e){dt.call(this,ki.Ua,t),this.size=e}Ke(QS,dt);function Na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var nf={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},XS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function rg(){}rg.prototype.h=null;function m0(t){return t.h||(t.h=t.i())}function JS(){}var Da={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ig(){dt.call(this,"d")}Ke(ig,dt);function og(){dt.call(this,"c")}Ke(og,dt);var Gh;function rf(){}Ke(rf,rg);rf.prototype.g=function(){return new XMLHttpRequest};rf.prototype.i=function(){return{}};Gh=new rf;function Ma(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new na(this),this.P=g4,t=jh?125:void 0,this.V=new Zc(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ZS}function ZS(){this.i=null,this.g="",this.h=!1}var g4=45e3,eI={},Kh={};x=Ma.prototype;x.setTimeout=function(t){this.P=t};function qh(t,e,n){t.L=1,t.A=sf(Hn(e)),t.u=n,t.S=!0,tI(t,null)}function tI(t,e){t.G=Date.now(),La(t),t.B=Hn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),uI(n.i,"t",r),t.o=0,n=t.l.J,t.h=new ZS,t.g=RI(t.l,n?e:null,!t.u),0<t.O&&(t.M=new f4(ft(t.Pa,t,t.g),t.O)),GS(t.U,t.g,"readystatechange",t.nb),e=t.I?LS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),ra(),d4(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&gn(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const c=gn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||jh||this.g&&(this.h.h||this.g.ja()||_0(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?ra(3):ra(2)),of(this);var n=this.g.da();this.ca=n;t:if(nI(this)){var r=_0(this.g);t="";var i=r.length,o=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xr(this),_s(this);var s="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:o&&e==i-1});r.length=0,this.h.g+=t,this.o=0,s=this.h.g}else s=this.g.ja();if(this.i=n==200,h4(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var l,a=this.g;if((l=a.g?a.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Js(l)){var u=l;break t}}u=null}if(n=u)Gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Yh(this,n);else{this.i=!1,this.s=3,vt(12),Xr(this),_s(this);break e}}this.S?(rI(this,c,s),jh&&this.i&&c==3&&(GS(this.U,this.V,"tick",this.mb),this.V.start())):(Gi(this.j,this.m,s,null),Yh(this,s)),c==4&&Xr(this),this.i&&!this.J&&(c==4?CI(this.l,this):(this.i=!1,La(this)))}else V4(this.g),n==400&&0<s.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Xr(this),_s(this)}}}catch{}finally{}};function nI(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function rI(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=v4(t,n),i==Kh){e==4&&(t.s=4,vt(14),r=!1),Gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==eI){t.s=4,vt(15),Gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gi(t.j,t.m,i,null),Yh(t,i);nI(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,vt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),fg(e),e.M=!0,vt(11))):(Gi(t.j,t.m,n,"[Invalid Chunked Response]"),Xr(t),_s(t))}x.mb=function(){if(this.g){var t=gn(this.g),e=this.g.ja();this.o<e.length&&(of(this),rI(this,t,e),this.i&&t!=4&&La(this))}};function v4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Kh:(n=Number(e.substring(n,r)),isNaN(n)?eI:(r+=1,r+n>e.length?Kh:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,Xr(this)};function La(t){t.Y=Date.now()+t.P,iI(t,t.P)}function iI(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Na(ft(t.lb,t),e)}function of(t){t.C&&(G.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(p4(this.j,this.B),this.L!=2&&(ra(),vt(17)),Xr(this),this.s=2,_s(this)):iI(this,this.Y-t)};function _s(t){t.l.H==0||t.J||CI(t.l,t)}function Xr(t){of(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,tg(t.V),KS(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Yh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qh(n.i,t))){if(!t.K&&Qh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)qu(n),cf(n);else break e;cg(n),vt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Na(ft(n.ib,n),6e3));if(1>=dI(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jr(n,11)}else if((t.K||n.g==t)&&qu(n),!Js(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const y=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var o=r.i;o.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(o.j=o.l,o.g=new Set,o.h&&(sg(o,o.h),o.h=null))}if(r.F){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,fe(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var s=t;if(r.wa=AI(r,r.J?r.pa:null,r.Y),s.K){hI(r.i,s);var l=s,a=r.L;a&&l.setTimeout(a),l.C&&(of(l),La(l)),r.g=s}else TI(r);0<n.j.length&&ff(n)}else u[0]!="stop"&&u[0]!="close"||Jr(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jr(n,7):ug(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ra(4)}catch{}}function y4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function _4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function oI(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=_4(t),r=y4(t),i=r.length,o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}var sI=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function w4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var o=t[n].substring(0,r);i=t[n].substring(r+1)}else o=t[n];e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=t.h,Gu(this,t.j),this.s=t.s,this.g=t.g,Ku(this,t.m),this.l=t.l;var e=t.i,n=new ia;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),g0(this,n),this.o=t.o}else t&&(e=String(t).match(sI))?(this.h=!1,Gu(this,e[1]||"",!0),this.s=ss(e[2]||""),this.g=ss(e[3]||"",!0),Ku(this,e[4]),this.l=ss(e[5]||"",!0),g0(this,e[6]||"",!0),this.o=ss(e[7]||"")):(this.h=!1,this.i=new ia(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(as(e,v0,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(as(e,v0,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(as(n,n.charAt(0)=="/"?I4:S4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",as(n,b4)),t.join("")};function Hn(t){return new si(t)}function Gu(t,e,n){t.j=n?ss(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ku(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function g0(t,e,n){e instanceof ia?(t.i=e,C4(t.i,t.h)):(n||(e=as(e,T4)),t.i=new ia(e,t.h))}function fe(t,e,n){t.i.set(e,n)}function sf(t){return fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ss(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function as(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,E4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function E4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var v0=/[#\/\?@]/g,S4=/[#\?:]/g,I4=/[#\?]/g,T4=/[#\?@]/g,b4=/#/g;function ia(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Br(t){t.g||(t.g=new Map,t.h=0,t.i&&w4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=ia.prototype;x.add=function(t,e){Br(this),this.i=null,t=No(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function aI(t,e){Br(t),e=No(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function lI(t,e){return Br(t),e=No(t,e),t.g.has(e)}x.forEach=function(t,e){Br(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};x.ta=function(){Br(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let o=0;o<i.length;o++)n.push(e[r])}return n};x.Z=function(t){Br(this);let e=[];if(typeof t=="string")lI(this,t)&&(e=e.concat(this.g.get(No(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return Br(this),this.i=null,t=No(this,t),lI(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function uI(t,e,n){aI(t,e),0<n.length&&(t.i=null,t.g.set(No(t,e),Gm(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const o=encodeURIComponent(String(r)),s=this.Z(r);for(r=0;r<s.length;r++){var i=o;s[r]!==""&&(i+="="+encodeURIComponent(String(s[r]))),t.push(i)}}return this.i=t.join("&")};function No(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function C4(t,e){e&&!t.j&&(Br(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(aI(this,r),uI(this,i,n))},t)),t.j=e}var k4=class{constructor(t,e){this.g=t,this.map=e}};function cI(t){this.l=t||P4,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ka&&G.g.Ka()&&G.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P4=10;function fI(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dI(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function sg(t,e){t.g?t.g.add(e):t.h=e}function hI(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}cI.prototype.cancel=function(){if(this.i=pI(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function pI(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gm(t.i)}var A4=class{stringify(t){return G.JSON.stringify(t,void 0)}parse(t){return G.JSON.parse(t,void 0)}};function R4(){this.g=new A4}function x4(t,e,n){const r=n||"";try{oI(t,function(i,o){let s=i;xa(i)&&(s=Zm(i)),e.push(r+o+"="+encodeURIComponent(s))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function O4(t,e){const n=new ef;if(G.Image){const r=new Image;r.onload=gl(yl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=gl(yl,n,r,"TestLoadImage: error",!1,e),r.onabort=gl(yl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=gl(yl,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function af(t){this.l=t.ec||null,this.j=t.ob||!1}Ke(af,rg);af.prototype.g=function(){return new lf(this.l,this.j)};af.prototype.i=function(t){return function(){return t}}({});function lf(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ag,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ke(lf,He);var ag=0;x=lf.prototype;x.open=function(t,e){if(this.readyState!=ag)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,oa(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||G).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Va(this)),this.readyState=ag};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,oa(this)),this.g&&(this.readyState=3,oa(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof G.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;mI(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function mI(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Va(this):oa(this),this.readyState==3&&mI(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Va(this))};x.Ya=function(t){this.g&&(this.response=t,Va(this))};x.ka=function(){this.g&&Va(this)};function Va(t){t.readyState=4,t.l=null,t.j=null,t.A=null,oa(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function oa(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(lf.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var N4=G.JSON.parse;function be(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=gI,this.L=this.M=!1}Ke(be,He);var gI="",D4=/^https?$/i,M4=["POST","PUT"];x=be.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Gh.g(),this.C=this.u?m0(this.u):m0(Gh),this.g.onreadystatechange=ft(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(o){y0(this,o);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const o of r.keys())n.set(o,r.get(o));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(o=>o.toLowerCase()=="content-type"),i=G.FormData&&t instanceof G.FormData,!(0<=OS(M4,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,s]of n)this.g.setRequestHeader(o,s);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{_I(this),0<this.B&&((this.L=L4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ft(this.ua,this)):this.A=ng(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(o){y0(this,o)}};function L4(t){return _o&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Wm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function y0(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,vI(t),uf(t)}function vI(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),uf(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),uf(this,!0)),be.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?yI(this):this.kb())};x.kb=function(){yI(this)};function yI(t){if(t.h&&typeof Wm<"u"&&(!t.C[1]||gn(t)!=4||t.da()!=2)){if(t.v&&gn(t)==4)ng(t.La,0,t);else if(nt(t,"readystatechange"),gn(t)==4){t.h=!1;try{const s=t.da();e:switch(s){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=s===0){var i=String(t.I).match(sI)[1]||null;!i&&G.self&&G.self.location&&(i=G.self.location.protocol.slice(0,-1)),r=!D4.test(i?i.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var o=2<gn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.da()+"]",vI(t)}}finally{uf(t)}}}}function uf(t,e){if(t.g){_I(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function _I(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function gn(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),N4(e)}};function _0(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case gI:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function V4(t){const e={};t=(t.g&&2<=gn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Js(t[r]))continue;var n=l4(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const o=e[i]||[];e[i]=o,o.push(n)}t4(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function wI(t){let e="";return qm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=wI(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):fe(t,e,n))}function Yo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function EI(t){this.Ga=0,this.j=[],this.l=new ef,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Yo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Yo("baseRetryDelayMs",5e3,t),this.hb=Yo("retryDelaySeedMs",1e4,t),this.eb=Yo("forwardChannelMaxRetries",2,t),this.xa=Yo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cI(t&&t.concurrentRequestLimit),this.Ja=new R4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=EI.prototype;x.ra=8;x.H=1;function ug(t){if(SI(t),t.H==3){var e=t.W++,n=Hn(t.I);if(fe(n,"SID",t.K),fe(n,"RID",e),fe(n,"TYPE","terminate"),Fa(t,n),e=new Ma(t,t.l,e),e.L=2,e.A=sf(Hn(n)),n=!1,G.navigator&&G.navigator.sendBeacon)try{n=G.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&G.Image&&(new Image().src=e.A,n=!0),n||(e.g=RI(e.l,null),e.g.ha(e.A)),e.G=Date.now(),La(e)}PI(t)}function cf(t){t.g&&(fg(t),t.g.cancel(),t.g=null)}function SI(t){cf(t),t.u&&(G.clearTimeout(t.u),t.u=null),qu(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function ff(t){if(!fI(t.i)&&!t.m){t.m=!0;var e=t.Na;ea||HS(),ta||(ea(),ta=!0),eg.add(e,t),t.C=0}}function F4(t,e){return dI(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Na(ft(t.Na,t,e),kI(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new Ma(this,this.l,t);let o=this.s;if(this.U&&(o?(o=LS(o),VS(o,this.U)):o=this.U),this.o!==null||this.O||(i.I=o,o=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=II(this,i,e),n=Hn(this.I),fe(n,"RID",t),fe(n,"CVER",22),this.F&&fe(n,"X-HTTP-Session-Id",this.F),Fa(this,n),o&&(this.O?e="headers="+encodeURIComponent(String(wI(o)))+"&"+e:this.o&&lg(n,this.o,o)),sg(this.i,i),this.bb&&fe(n,"TYPE","init"),this.P?(fe(n,"$req",e),fe(n,"SID","null"),i.aa=!0,qh(i,n,null)):qh(i,n,e),this.H=2}}else this.H==3&&(t?w0(this,t):this.j.length==0||fI(this.i)||w0(this))};function w0(t,e){var n;e?n=e.m:n=t.W++;const r=Hn(t.I);fe(r,"SID",t.K),fe(r,"RID",n),fe(r,"AID",t.V),Fa(t,r),t.o&&t.s&&lg(r,t.o,t.s),n=new Ma(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=II(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),sg(t.i,n),qh(n,r,e)}function Fa(t,e){t.na&&qm(t.na,function(n,r){fe(e,r,n)}),t.h&&oI({},function(n,r){fe(e,r,n)})}function II(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ft(t.h.Va,t.h,t):null;e:{var i=t.j;let o=-1;for(;;){const s=["count="+n];o==-1?0<n?(o=i[0].g,s.push("ofs="+o)):o=0:s.push("ofs="+o);let l=!0;for(let a=0;a<n;a++){let u=i[a].g;const c=i[a].map;if(u-=o,0>u)o=Math.max(0,i[a].g-100),l=!1;else try{x4(c,s,"req"+u+"_")}catch{r&&r(c)}}if(l){r=s.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function TI(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ea||HS(),ta||(ea(),ta=!0),eg.add(e,t),t.A=0}}function cg(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Na(ft(t.Ma,t),kI(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,bI(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Na(ft(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,vt(10),cf(this),bI(this))};function fg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function bI(t){t.g=new Ma(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Hn(t.wa);fe(e,"RID","rpc"),fe(e,"SID",t.K),fe(e,"AID",t.V),fe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&fe(e,"TO",t.qa),fe(e,"TYPE","xmlhttp"),Fa(t,e),t.o&&t.s&&lg(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=sf(Hn(e)),n.u=null,n.S=!0,tI(n,t)}x.ib=function(){this.v!=null&&(this.v=null,cf(this),cg(this),vt(19))};function qu(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function CI(t,e){var n=null;if(t.g==e){qu(t),fg(t),t.g=null;var r=2}else if(Qh(t.i,e))n=e.F,hI(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=tf(),nt(r,new QS(r,n)),ff(t)}else TI(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&F4(t,e)||r==2&&cg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jr(t,5);break;case 4:Jr(t,10);break;case 3:Jr(t,6);break;default:Jr(t,2)}}}function kI(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ft(t.pb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||Gu(n,"https"),sf(n)),O4(n.toString(),r)}else vt(2);t.H=0,t.h&&t.h.za(e),PI(t),SI(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),vt(2)):(this.l.info("Failed to ping google.com"),vt(1))};function PI(t){if(t.H=0,t.ma=[],t.h){const e=pI(t.i);(e.length!=0||t.j.length!=0)&&(c0(t.ma,e),c0(t.ma,t.j),t.i.i.length=0,Gm(t.j),t.j.length=0),t.h.ya()}}function AI(t,e,n){var r=n instanceof si?Hn(n):new si(n);if(r.g!="")e&&(r.g=e+"."+r.g),Ku(r,r.m);else{var i=G.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var o=new si(null);r&&Gu(o,r),e&&(o.g=e),i&&Ku(o,i),n&&(o.l=n),r=o}return n=t.F,e=t.Da,n&&e&&fe(r,n,e),fe(r,"VER",t.ra),Fa(t,r),r}function RI(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new be(new af({ob:n})):new be(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function xI(){}x=xI.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function Yu(){if(_o&&!(10<=Number(XM)))throw Error("Environmental error: no available transport.")}Yu.prototype.g=function(t,e){return new Mt(t,e)};function Mt(t,e){He.call(this),this.g=new EI(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Js(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Js(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Do(this)}Ke(Mt,He);Mt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;vt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=AI(t,null,t.Y),ff(t)};Mt.prototype.close=function(){ug(this.g)};Mt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Zm(t),t=n);e.j.push(new k4(e.fb++,t)),e.H==3&&ff(e)};Mt.prototype.N=function(){this.g.h=null,delete this.j,ug(this.g),delete this.g,Mt.$.N.call(this)};function OI(t){ig.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ke(OI,ig);function NI(){og.call(this),this.status=1}Ke(NI,og);function Do(t){this.g=t}Ke(Do,xI);Do.prototype.Ba=function(){nt(this.g,"a")};Do.prototype.Aa=function(t){nt(this.g,new OI(t))};Do.prototype.za=function(t){nt(this.g,new NI)};Do.prototype.ya=function(){nt(this.g,"b")};function $4(){this.blockSize=-1}function bn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ke(bn,$4);bn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function yd(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var o=t.g[3],s=e+(o^n&(i^o))+r[0]+3614090360&4294967295;e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[1]+3905402710&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[2]+606105819&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[3]+3250441966&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[4]+4118548399&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[5]+1200080426&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[6]+2821735955&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[7]+4249261313&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[8]+1770035416&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[9]+2336552879&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[10]+4294925233&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[11]+2304563134&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(o^n&(i^o))+r[12]+1804603682&4294967295,e=n+(s<<7&4294967295|s>>>25),s=o+(i^e&(n^i))+r[13]+4254626195&4294967295,o=e+(s<<12&4294967295|s>>>20),s=i+(n^o&(e^n))+r[14]+2792965006&4294967295,i=o+(s<<17&4294967295|s>>>15),s=n+(e^i&(o^e))+r[15]+1236535329&4294967295,n=i+(s<<22&4294967295|s>>>10),s=e+(i^o&(n^i))+r[1]+4129170786&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[6]+3225465664&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[11]+643717713&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[0]+3921069994&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[5]+3593408605&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[10]+38016083&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[15]+3634488961&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[4]+3889429448&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[9]+568446438&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[14]+3275163606&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[3]+4107603335&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[8]+1163531501&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(i^o&(n^i))+r[13]+2850285829&4294967295,e=n+(s<<5&4294967295|s>>>27),s=o+(n^i&(e^n))+r[2]+4243563512&4294967295,o=e+(s<<9&4294967295|s>>>23),s=i+(e^n&(o^e))+r[7]+1735328473&4294967295,i=o+(s<<14&4294967295|s>>>18),s=n+(o^e&(i^o))+r[12]+2368359562&4294967295,n=i+(s<<20&4294967295|s>>>12),s=e+(n^i^o)+r[5]+4294588738&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[8]+2272392833&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[11]+1839030562&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[14]+4259657740&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[1]+2763975236&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[4]+1272893353&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[7]+4139469664&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[10]+3200236656&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[13]+681279174&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[0]+3936430074&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[3]+3572445317&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[6]+76029189&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(n^i^o)+r[9]+3654602809&4294967295,e=n+(s<<4&4294967295|s>>>28),s=o+(e^n^i)+r[12]+3873151461&4294967295,o=e+(s<<11&4294967295|s>>>21),s=i+(o^e^n)+r[15]+530742520&4294967295,i=o+(s<<16&4294967295|s>>>16),s=n+(i^o^e)+r[2]+3299628645&4294967295,n=i+(s<<23&4294967295|s>>>9),s=e+(i^(n|~o))+r[0]+4096336452&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[7]+1126891415&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[14]+2878612391&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[5]+4237533241&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[12]+1700485571&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[3]+2399980690&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[10]+4293915773&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[1]+2240044497&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[8]+1873313359&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[15]+4264355552&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[6]+2734768916&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[13]+1309151649&4294967295,n=i+(s<<21&4294967295|s>>>11),s=e+(i^(n|~o))+r[4]+4149444226&4294967295,e=n+(s<<6&4294967295|s>>>26),s=o+(n^(e|~i))+r[11]+3174756917&4294967295,o=e+(s<<10&4294967295|s>>>22),s=i+(e^(o|~n))+r[2]+718787259&4294967295,i=o+(s<<15&4294967295|s>>>17),s=n+(o^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(s<<21&4294967295|s>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+o&4294967295}bn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,o=0;o<e;){if(i==0)for(;o<=n;)yd(this,t,o),o+=this.blockSize;if(typeof t=="string"){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){yd(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){yd(this,r),i=0;break}}this.h=i,this.i+=e};bn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function re(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var o=t[i]|0;r&&o==e||(n[i]=o,r=!1)}this.g=n}var U4={};function dg(t){return-128<=t&&128>t?qM(t,function(e){return new re([e|0],0>e?-1:0)}):new re([t|0],0>t?-1:0)}function vn(t){if(isNaN(t)||!isFinite(t))return oo;if(0>t)return Ze(vn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Xh;return new re(e,0)}function DI(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(DI(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=vn(Math.pow(e,8)),r=oo,i=0;i<t.length;i+=8){var o=Math.min(8,t.length-i),s=parseInt(t.substring(i,i+o),e);8>o?(o=vn(Math.pow(e,o)),r=r.R(o).add(vn(s))):(r=r.R(n),r=r.add(vn(s)))}return r}var Xh=4294967296,oo=dg(0),Jh=dg(1),E0=dg(16777216);x=re.prototype;x.ea=function(){if(Ht(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Xh+r)*e,e*=Xh}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Dn(this))return"0";if(Ht(this))return"-"+Ze(this).toString(t);for(var e=vn(Math.pow(t,6)),n=this,r="";;){var i=Xu(n,e).g;n=Qu(n,i.R(e));var o=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Dn(n))return o+r;for(;6>o.length;)o="0"+o;r=o+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Dn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ht(t){return t.h==-1}x.X=function(t){return t=Qu(this,t),Ht(t)?-1:Dn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new re(n,~t.h).add(Jh)}x.abs=function(){return Ht(this)?Ze(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var o=r+(this.D(i)&65535)+(t.D(i)&65535),s=(o>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=s>>>16,o&=65535,s&=65535,n[i]=s<<16|o}return new re(n,n[n.length-1]&-2147483648?-1:0)};function Qu(t,e){return t.add(Ze(e))}x.R=function(t){if(Dn(this)||Dn(t))return oo;if(Ht(this))return Ht(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(Ht(t))return Ze(this.R(Ze(t)));if(0>this.X(E0)&&0>t.X(E0))return vn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var o=this.D(r)>>>16,s=this.D(r)&65535,l=t.D(i)>>>16,a=t.D(i)&65535;n[2*r+2*i]+=s*a,_l(n,2*r+2*i),n[2*r+2*i+1]+=o*a,_l(n,2*r+2*i+1),n[2*r+2*i+1]+=s*l,_l(n,2*r+2*i+1),n[2*r+2*i+2]+=o*l,_l(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new re(n,0)};function _l(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Qo(t,e){this.g=t,this.h=e}function Xu(t,e){if(Dn(e))throw Error("division by zero");if(Dn(t))return new Qo(oo,oo);if(Ht(t))return e=Xu(Ze(t),e),new Qo(Ze(e.g),Ze(e.h));if(Ht(e))return e=Xu(t,Ze(e)),new Qo(Ze(e.g),e.h);if(30<t.g.length){if(Ht(t)||Ht(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Jh,r=e;0>=r.X(t);)n=S0(n),r=S0(r);var i=xi(n,1),o=xi(r,1);for(r=xi(r,2),n=xi(n,2);!Dn(r);){var s=o.add(r);0>=s.X(t)&&(i=i.add(n),o=s),r=xi(r,1),n=xi(n,1)}return e=Qu(t,i.R(e)),new Qo(i,e)}for(i=oo;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),o=vn(n),s=o.R(e);Ht(s)||0<s.X(t);)n-=r,o=vn(n),s=o.R(e);Dn(o)&&(o=Jh),i=i.add(o),t=Qu(t,s)}return new Qo(i,t)}x.gb=function(t){return Xu(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new re(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new re(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new re(n,this.h^t.h)};function S0(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new re(n,t.h)}function xi(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],o=0;o<r;o++)i[o]=0<e?t.D(o+n)>>>e|t.D(o+n+1)<<32-e:t.D(o+n);return new re(i,t.h)}Yu.prototype.createWebChannel=Yu.prototype.g;Mt.prototype.send=Mt.prototype.u;Mt.prototype.open=Mt.prototype.m;Mt.prototype.close=Mt.prototype.close;nf.NO_ERROR=0;nf.TIMEOUT=8;nf.HTTP_ERROR=6;XS.COMPLETE="complete";JS.EventType=Da;Da.OPEN="a";Da.CLOSE="b";Da.ERROR="c";Da.MESSAGE="d";He.prototype.listen=He.prototype.O;be.prototype.listenOnce=be.prototype.P;be.prototype.getLastError=be.prototype.Sa;be.prototype.getLastErrorCode=be.prototype.Ia;be.prototype.getStatus=be.prototype.da;be.prototype.getResponseJson=be.prototype.Wa;be.prototype.getResponseText=be.prototype.ja;be.prototype.send=be.prototype.ha;be.prototype.setWithCredentials=be.prototype.Oa;bn.prototype.digest=bn.prototype.l;bn.prototype.reset=bn.prototype.reset;bn.prototype.update=bn.prototype.j;re.prototype.add=re.prototype.add;re.prototype.multiply=re.prototype.R;re.prototype.modulo=re.prototype.gb;re.prototype.compare=re.prototype.X;re.prototype.toNumber=re.prototype.ea;re.prototype.toString=re.prototype.toString;re.prototype.getBits=re.prototype.D;re.fromNumber=vn;re.fromString=DI;var j4=function(){return new Yu},z4=function(){return tf()},_d=nf,B4=XS,H4=ki,I0={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},wl=JS,W4=be,G4=re;const T0="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo="10.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=new Nm("@firebase/firestore");function Xo(){return yi.logLevel}function O(t,...e){if(yi.logLevel<=Q.DEBUG){const n=e.map(hg);yi.debug(`Firestore (${Mo}): ${t}`,...n)}}function xr(t,...e){if(yi.logLevel<=Q.ERROR){const n=e.map(hg);yi.error(`Firestore (${Mo}): ${t}`,...n)}}function Ju(t,...e){if(yi.logLevel<=Q.WARN){const n=e.map(hg);yi.warn(`Firestore (${Mo}): ${t}`,...n)}}function hg(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw xr(e),new Error(e)}function We(t,e){t||X()}function pe(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class B extends Xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class K4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class q4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Y4{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=a=>this.i!==r?(r=this.i,n(a)):Promise.resolve();let o=new Pr;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Pr,e.enqueueRetryable(()=>i(this.currentUser))};const s=()=>{const a=o;e.enqueueRetryable(async()=>{await a.promise,await i(this.currentUser)})},l=a=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=a,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(a=>l(a)),setTimeout(()=>{if(!this.auth){const a=this.t.getImmediate({optional:!0});a?l(a):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Pr)}},0),s()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(We(typeof r.accessToken=="string"),new MI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return We(e===null||typeof e=="string"),new lt(e)}}class Q4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X4{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Q4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J4{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z4{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const s=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${s?"new":"existing"} token.`),s?n(o.token):Promise.resolve()};this.o=o=>{e.enqueueRetryable(()=>r(o))};const i=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>i(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?i(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(We(typeof n.token=="string"),this.R=n.token,new J4(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=eL(40);for(let o=0;o<i.length;++o)r.length<20&&i[o]<n&&(r+=e.charAt(i[o]%e.length))}return r}}function ae(t,e){return t<e?-1:t>e?1:0}function wo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new B(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new B(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Be.fromMillis(Date.now())}static fromDate(e){return Be.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Be(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ae(this.nanoseconds,e.nanoseconds):ae(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ve(e)}static min(){return new ve(new Be(0,0))}static max(){return new ve(new Be(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sa.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sa?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const o=e.get(i),s=n.get(i);if(o<s)return-1;if(o>s)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends sa{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new B(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const tL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends sa{construct(e,n,r){return new et(e,n,r)}static isValidIdentifier(e){return tL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new et(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const o=()=>{if(r.length===0)throw new B(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let s=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new B(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const a=e[i+1];if(a!=="\\"&&a!=="."&&a!=="`")throw new B(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=a,i+=2}else l==="`"?(s=!s,i++):l!=="."||s?(r+=l,i++):(o(),i++)}if(o(),s)throw new B(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(n)}static emptyPath(){return new et([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Re.fromString(e))}static fromName(e){return new K(Re.fromString(e).popFirst(5))}static empty(){return new K(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Re(e.slice()))}}function nL(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=ve.fromTimestamp(r===1e9?new Be(n+1,0):new Be(n,r));return new Or(i,K.empty(),e)}function rL(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(ve.min(),K.empty(),-1)}static max(){return new Or(ve.max(),K.empty(),-1)}}function iL(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ae(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class sL{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==oL)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new k((r,i)=>{this.nextCallback=o=>{this.wrapSuccess(e,o).next(r,i)},this.catchCallback=o=>{this.wrapFailure(n,o).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof k?n:k.resolve(n)}catch(n){return k.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):k.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):k.reject(n)}static resolve(e){return new k((n,r)=>{n(e)})}static reject(e){return new k((n,r)=>{r(e)})}static waitFor(e){return new k((n,r)=>{let i=0,o=0,s=!1;e.forEach(l=>{++i,l.next(()=>{++o,s&&o===i&&n()},a=>r(a))}),s=!0,o===i&&n()})}static or(e){let n=k.resolve(!1);for(const r of e)n=n.next(i=>i?k.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,o)=>{r.push(n.call(this,i,o))}),this.waitFor(r)}static mapArray(e,n){return new k((r,i)=>{const o=e.length,s=new Array(o);let l=0;for(let a=0;a<o;a++){const u=a;n(e[u]).next(c=>{s[u]=c,++l,l===o&&r(s)},c=>i(c))}})}static doWhile(e,n){return new k((r,i)=>{const o=()=>{e()===!0?n().next(()=>{o()},i):r()};o()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new Pr,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ws(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const i=mg(r.target.error);this.V.reject(new ws(e,i))}}static open(e,n,r,i){try{return new pg(n,e.transaction(i,r))}catch(o){throw new ws(n,o)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(O("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new lL(n)}}class Zr{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Zr.S(Ne())===12.2&&xr("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return O("SimpleDb","Removing database:",e),Kr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!qE())return!1;if(Zr.C())return!0;const e=Ne(),n=Zr.S(e),r=0<n&&n<10,i=Zr.v(e),o=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(O("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=o=>{const s=o.target.result;n(s)},i.onblocked=()=>{r(new ws(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=o=>{const s=o.target.error;s.name==="VersionError"?r(new B(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):s.name==="InvalidStateError"?r(new B(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+s)):r(new ws(e,s))},i.onupgradeneeded=o=>{O("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',o.oldVersion);const s=o.target.result;this.p.N(s,i.transaction,o.oldVersion,this.version).next(()=>{O("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.B&&(this.db.onversionchange=n=>this.B(n)),this.db}L(e){this.B=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const o=n==="readonly";let s=0;for(;;){++s;try{this.db=await this.O(e);const l=pg.open(this.db,e,o?"readonly":"readwrite",r),a=i(l).next(u=>(l.g(),u)).catch(u=>(l.abort(u),k.reject(u))).toPromise();return a.catch(()=>{}),await l.m,a}catch(l){const a=l,u=a.name!=="FirebaseError"&&s<3;if(O("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class aL{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Kr(this.k.delete())}}class ws extends B{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function df(t){return t.name==="IndexedDbTransactionError"}class lL{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(O("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(O("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Kr(r)}add(e){return O("SimpleDb","ADD",this.store.name,e,e),Kr(this.store.add(e))}get(e){return Kr(this.store.get(e)).next(n=>(n===void 0&&(n=null),O("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return O("SimpleDb","DELETE",this.store.name,e),Kr(this.store.delete(e))}count(){return O("SimpleDb","COUNT",this.store.name),Kr(this.store.count())}W(e,n){const r=this.options(e,n),i=r.index?this.store.index(r.index):this.store;if(typeof i.getAll=="function"){const o=i.getAll(r.range);return new k((s,l)=>{o.onerror=a=>{l(a.target.error)},o.onsuccess=a=>{s(a.target.result)}})}{const o=this.cursor(r),s=[];return this.G(o,(l,a)=>{s.push(a)}).next(()=>s)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new k((i,o)=>{r.onerror=s=>{o(s.target.error)},r.onsuccess=s=>{i(s.target.result)}})}H(e,n){O("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const i=this.cursor(r);return this.G(i,(o,s,l)=>l.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.G(i,n)}Z(e){const n=this.cursor({});return new k((r,i)=>{n.onerror=o=>{const s=mg(o.target.error);i(s)},n.onsuccess=o=>{const s=o.target.result;s?e(s.primaryKey,s.value).next(l=>{l?s.continue():r()}):r()}})}G(e,n){const r=[];return new k((i,o)=>{e.onerror=s=>{o(s.target.error)},e.onsuccess=s=>{const l=s.target.result;if(!l)return void i();const a=new aL(l),u=n(l.primaryKey,l.value,a);if(u instanceof k){const c=u.catch(f=>(a.done(),k.reject(f)));r.push(c)}a.isDone?i():a.$===null?l.continue():l.continue(a.$)}}).next(()=>k.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Kr(t){return new k((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=mg(r.target.error);n(i)}})}let b0=!1;function mg(t){const e=Zr.S(Ne());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new B("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return b0||(b0=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}FI._e=-1;function gg(t){return t==null}function Zu(t){return t===0&&1/t==-1/0}function uL(t){return typeof t=="number"&&Number.isInteger(t)&&!Zu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C0(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function $a(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function $I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new Pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new Pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new El(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new El(this.root,e,this.comparator,!1)}getReverseIterator(){return new El(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new El(this.root,e,this.comparator,!0)}}class El{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!e.isEmpty();)if(o=n?r(e.key,n):1,n&&i&&(o*=-1),o<0)e=this.isReverse?e.left:e.right;else{if(o===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,i,o){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=i??Qe.EMPTY,this.right=o??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,o){return new Qe(e??this.key,n??this.value,r??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const o=r(e,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(e,n,r),null):o===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,i,o){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new k0(this.data.getIterator())}getIteratorFrom(e){return new k0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,o=r.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class k0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new nn([])}unionWith(e){let n=new ht(et.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new nn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cL extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new cL("Invalid base64 string: "+o):o}}(e);return new Wn(n)}static fromUint8Array(e){const n=function(i){let o="";for(let s=0;s<i.length;++s)o+=String.fromCharCode(i[s]);return o}(e);return new Wn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ae(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Wn.EMPTY_BYTE_STRING=new Wn("");const fL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function _i(t){if(We(!!t),typeof t=="string"){let e=0;const n=fL.exec(t);if(We(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Xe(t.seconds),nanos:Xe(t.nanos)}}function Xe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function aa(t){return typeof t=="string"?Wn.fromBase64String(t):Wn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function UI(t){const e=t.mapValue.fields.__previous_value__;return vg(e)?UI(e):e}function ec(t){const e=_i(t.mapValue.fields.__local_write_time__.timestampValue);return new Be(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,n,r,i,o,s,l,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=o,this.forceLongPolling=s,this.autoDetectLongPolling=l,this.longPollingOptions=a,this.useFetchStreams=u}}class tc{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tc("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tc&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Eo(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vg(t)?4:hL(t)?9007199254740991:10:X()}function Cn(t,e){if(t===e)return!0;const n=Eo(t);if(n!==Eo(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ec(t).isEqual(ec(e));case 3:return function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const s=_i(i.timestampValue),l=_i(o.timestampValue);return s.seconds===l.seconds&&s.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,o){return aa(i.bytesValue).isEqual(aa(o.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,o){return Xe(i.geoPointValue.latitude)===Xe(o.geoPointValue.latitude)&&Xe(i.geoPointValue.longitude)===Xe(o.geoPointValue.longitude)}(t,e);case 2:return function(i,o){if("integerValue"in i&&"integerValue"in o)return Xe(i.integerValue)===Xe(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const s=Xe(i.doubleValue),l=Xe(o.doubleValue);return s===l?Zu(s)===Zu(l):isNaN(s)&&isNaN(l)}return!1}(t,e);case 9:return wo(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:return function(i,o){const s=i.mapValue.fields||{},l=o.mapValue.fields||{};if(C0(s)!==C0(l))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(l[a]===void 0||!Cn(s[a],l[a])))return!1;return!0}(t,e);default:return X()}}function la(t,e){return(t.values||[]).find(n=>Cn(n,e))!==void 0}function So(t,e){if(t===e)return 0;const n=Eo(t),r=Eo(e);if(n!==r)return ae(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ae(t.booleanValue,e.booleanValue);case 2:return function(o,s){const l=Xe(o.integerValue||o.doubleValue),a=Xe(s.integerValue||s.doubleValue);return l<a?-1:l>a?1:l===a?0:isNaN(l)?isNaN(a)?0:-1:1}(t,e);case 3:return P0(t.timestampValue,e.timestampValue);case 4:return P0(ec(t),ec(e));case 5:return ae(t.stringValue,e.stringValue);case 6:return function(o,s){const l=aa(o),a=aa(s);return l.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(o,s){const l=o.split("/"),a=s.split("/");for(let u=0;u<l.length&&u<a.length;u++){const c=ae(l[u],a[u]);if(c!==0)return c}return ae(l.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(o,s){const l=ae(Xe(o.latitude),Xe(s.latitude));return l!==0?l:ae(Xe(o.longitude),Xe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(o,s){const l=o.values||[],a=s.values||[];for(let u=0;u<l.length&&u<a.length;++u){const c=So(l[u],a[u]);if(c)return c}return ae(l.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(o,s){if(o===Sl.mapValue&&s===Sl.mapValue)return 0;if(o===Sl.mapValue)return 1;if(s===Sl.mapValue)return-1;const l=o.fields||{},a=Object.keys(l),u=s.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let f=0;f<a.length&&f<c.length;++f){const d=ae(a[f],c[f]);if(d!==0)return d;const m=So(l[a[f]],u[c[f]]);if(m!==0)return m}return ae(a.length,c.length)}(t.mapValue,e.mapValue);default:throw X()}}function P0(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ae(t,e);const n=_i(t),r=_i(e),i=ae(n.seconds,r.seconds);return i!==0?i:ae(n.nanos,r.nanos)}function Io(t){return Zh(t)}function Zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=_i(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return aa(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const o of n.values||[])i?i=!1:r+=",",r+=Zh(o);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",o=!0;for(const s of r)o?o=!1:i+=",",i+=`${s}:${Zh(n.fields[s])}`;return i+"}"}(t.mapValue):X()}function ep(t){return!!t&&"integerValue"in t}function yg(t){return!!t&&"arrayValue"in t}function eu(t){return!!t&&"mapValue"in t}function Es(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return $a(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Es(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Es(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hL(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.value=e}static empty(){return new tn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!eu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Es(n)}setAll(e){let n=et.emptyPath(),r={},i=[];e.forEach((s,l)=>{if(!n.isImmediateParentOf(l)){const a=this.getFieldsMap(n);this.applyChanges(a,r,i),r={},i=[],n=l.popLast()}s?r[l.lastSegment()]=Es(s):i.push(l.lastSegment())});const o=this.getFieldsMap(n);this.applyChanges(o,r,i)}delete(e){const n=this.field(e.popLast());eu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];eu(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){$a(n,(i,o)=>e[i]=o);for(const i of r)delete e[i]}clone(){return new tn(Es(this.value))}}function jI(t){const e=[];return $a(t.fields,(n,r)=>{const i=new et([n]);if(eu(r)){const o=jI(r.mapValue).fields;if(o.length===0)e.push(i);else for(const s of o)e.push(i.child(s))}else e.push(i)}),new nn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e,n,r,i,o,s,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=o,this.data=s,this.documentState=l}static newInvalidDocument(e){return new en(e,0,ve.min(),ve.min(),ve.min(),tn.empty(),0)}static newFoundDocument(e,n,r,i){return new en(e,1,n,ve.min(),r,i,0)}static newNoDocument(e,n){return new en(e,2,n,ve.min(),ve.min(),tn.empty(),0)}static newUnknownDocument(e,n){return new en(e,3,n,ve.min(),ve.min(),tn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ve.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=tn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=tn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,n){this.position=e,this.inclusive=n}}function A0(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const o=e[i],s=t.position[i];if(o.field.isKeyField()?r=K.comparator(K.fromName(s.referenceValue),n.key):r=So(s,n.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function R0(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(e,n="asc"){this.field=e,this.dir=n}}function pL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{}class je extends zI{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gL(e,n,r):n==="array-contains"?new _L(e,r):n==="in"?new wL(e,r):n==="not-in"?new EL(e,r):n==="array-contains-any"?new SL(e,r):new je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new vL(e,r):new yL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(So(n,this.value)):n!==null&&Eo(this.value)===Eo(n)&&this.matchesComparison(So(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Nr extends zI{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Nr(e,n)}matches(e){return BI(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function BI(t){return t.op==="and"}function HI(t){return mL(t)&&BI(t)}function mL(t){for(const e of t.filters)if(e instanceof Nr)return!1;return!0}function tp(t){if(t instanceof je)return t.field.canonicalString()+t.op.toString()+Io(t.value);if(HI(t))return t.filters.map(e=>tp(e)).join(",");{const e=t.filters.map(n=>tp(n)).join(",");return`${t.op}(${e})`}}function WI(t,e){return t instanceof je?function(r,i){return i instanceof je&&r.op===i.op&&r.field.isEqual(i.field)&&Cn(r.value,i.value)}(t,e):t instanceof Nr?function(r,i){return i instanceof Nr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((o,s,l)=>o&&WI(s,i.filters[l]),!0):!1}(t,e):void X()}function GI(t){return t instanceof je?function(n){return`${n.field.canonicalString()} ${n.op} ${Io(n.value)}`}(t):t instanceof Nr?function(n){return n.op.toString()+" {"+n.getFilters().map(GI).join(" ,")+"}"}(t):"Filter"}class gL extends je{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class vL extends je{constructor(e,n){super(e,"in",n),this.keys=KI("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yL extends je{constructor(e,n){super(e,"not-in",n),this.keys=KI("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function KI(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class _L extends je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yg(n)&&la(n.arrayValue,this.value)}}class wL extends je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&la(this.value.arrayValue,n)}}class EL extends je{constructor(e,n){super(e,"not-in",n)}matches(e){if(la(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!la(this.value.arrayValue,n)}}class SL extends je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yg(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>la(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IL{constructor(e,n=null,r=[],i=[],o=null,s=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=o,this.startAt=s,this.endAt=l,this.ce=null}}function x0(t,e=null,n=[],r=[],i=null,o=null,s=null){return new IL(t,e,n,r,i,o,s)}function _g(t){const e=pe(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tp(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),gg(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Io(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Io(r)).join(",")),e.ce=n}return e.ce}function wg(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!WI(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!R0(t.startAt,e.startAt)&&R0(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,n=null,r=[],i=[],o=null,s="F",l=null,a=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=o,this.limitType=s,this.startAt=l,this.endAt=a,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function TL(t,e,n,r,i,o,s,l){return new hf(t,e,n,r,i,o,s,l)}function bL(t){return new hf(t)}function O0(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function CL(t){return t.collectionGroup!==null}function Ss(t){const e=pe(t);if(e.le===null){e.le=[];const n=new Set;for(const o of e.explicitOrderBy)e.le.push(o),n.add(o.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(s){let l=new ht(et.comparator);return s.filters.forEach(a=>{a.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(o=>{n.has(o.canonicalString())||o.isKeyField()||e.le.push(new rc(o,r))}),n.has(et.keyField().canonicalString())||e.le.push(new rc(et.keyField(),r))}return e.le}function ai(t){const e=pe(t);return e.he||(e.he=kL(e,Ss(t))),e.he}function kL(t,e){if(t.limitType==="F")return x0(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const o=i.dir==="desc"?"asc":"desc";return new rc(i.field,o)});const n=t.endAt?new nc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nc(t.startAt.position,t.startAt.inclusive):null;return x0(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function np(t,e,n){return new hf(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function qI(t,e){return wg(ai(t),ai(e))&&t.limitType===e.limitType}function YI(t){return`${_g(ai(t))}|lt:${t.limitType}`}function Jo(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>GI(i)).join(", ")}]`),gg(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Io(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Io(i)).join(",")),`Target(${r})`}(ai(t))}; limitType=${t.limitType})`}function Eg(t,e){return e.isFoundDocument()&&function(r,i){const o=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):K.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(t,e)&&function(r,i){for(const o of Ss(r))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const o of r.filters)if(!o.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(s,l,a){const u=A0(s,l,a);return s.inclusive?u<=0:u<0}(r.startAt,Ss(r),i)||r.endAt&&!function(s,l,a){const u=A0(s,l,a);return s.inclusive?u>=0:u>0}(r.endAt,Ss(r),i))}(t,e)}function PL(t){return(e,n)=>{let r=!1;for(const i of Ss(t)){const o=AL(i,e,n);if(o!==0)return o;r=r||i.field.isKeyField()}return 0}}function AL(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(o,s,l){const a=s.data.field(o),u=l.data.field(o);return a!==null&&u!==null?So(a,u):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,o]of r)if(this.equalsFn(i,e))return o}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],e))return void(i[o]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){$a(this.inner,(n,r)=>{for(const[i,o]of r)e(i,o)})}isEmpty(){return $I(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RL=new Pt(K.comparator);function ic(){return RL}const QI=new Pt(K.comparator);function Il(...t){let e=QI;for(const n of t)e=e.insert(n.key,n);return e}function XI(t){let e=QI;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ei(){return Is()}function JI(){return Is()}function Is(){return new Lo(t=>t.toString(),(t,e)=>t.isEqual(e))}const xL=new Pt(K.comparator),OL=new ht(K.comparator);function ct(...t){let e=OL;for(const n of t)e=e.add(n);return e}const NL=new ht(ae);function DL(){return NL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zu(e)?"-0":e}}function eT(t){return{integerValue:""+t}}function ML(t,e){return uL(e)?eT(e):ZI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(){this._=void 0}}function LL(t,e,n){return t instanceof oc?function(i,o){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&vg(o)&&(o=UI(o)),o&&(s.fields.__previous_value__=o),{mapValue:s}}(n,e):t instanceof ua?nT(t,e):t instanceof ca?rT(t,e):function(i,o){const s=tT(i,o),l=N0(s)+N0(i.Ie);return ep(s)&&ep(i.Ie)?eT(l):ZI(i.serializer,l)}(t,e)}function VL(t,e,n){return t instanceof ua?nT(t,e):t instanceof ca?rT(t,e):n}function tT(t,e){return t instanceof sc?function(r){return ep(r)||function(o){return!!o&&"doubleValue"in o}(r)}(e)?e:{integerValue:0}:null}class oc extends pf{}class ua extends pf{constructor(e){super(),this.elements=e}}function nT(t,e){const n=iT(e);for(const r of t.elements)n.some(i=>Cn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ca extends pf{constructor(e){super(),this.elements=e}}function rT(t,e){let n=iT(e);for(const r of t.elements)n=n.filter(i=>!Cn(i,r));return{arrayValue:{values:n}}}class sc extends pf{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function N0(t){return Xe(t.integerValue||t.doubleValue)}function iT(t){return yg(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function FL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof ua&&i instanceof ua||r instanceof ca&&i instanceof ca?wo(r.elements,i.elements,Cn):r instanceof sc&&i instanceof sc?Cn(r.Ie,i.Ie):r instanceof oc&&i instanceof oc}(t.transform,e.transform)}class $L{constructor(e,n){this.version=e,this.transformResults=n}}class Vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Vn}static exists(e){return new Vn(void 0,e)}static updateTime(e){return new Vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function tu(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class mf{}function oT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new aT(t.key,Vn.none()):new Ua(t.key,t.data,Vn.none());{const n=t.data,r=tn.empty();let i=new ht(et.comparator);for(let o of e.fields)if(!i.has(o)){let s=n.field(o);s===null&&o.length>1&&(o=o.popLast(),s=n.field(o)),s===null?r.delete(o):r.set(o,s),i=i.add(o)}return new Pi(t.key,r,new nn(i.toArray()),Vn.none())}}function UL(t,e,n){t instanceof Ua?function(i,o,s){const l=i.value.clone(),a=M0(i.fieldTransforms,o,s.transformResults);l.setAll(a),o.convertToFoundDocument(s.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Pi?function(i,o,s){if(!tu(i.precondition,o))return void o.convertToUnknownDocument(s.version);const l=M0(i.fieldTransforms,o,s.transformResults),a=o.data;a.setAll(sT(i)),a.setAll(l),o.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(i,o,s){o.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Ts(t,e,n,r){return t instanceof Ua?function(o,s,l,a){if(!tu(o.precondition,s))return l;const u=o.value.clone(),c=L0(o.fieldTransforms,a,s);return u.setAll(c),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pi?function(o,s,l,a){if(!tu(o.precondition,s))return l;const u=L0(o.fieldTransforms,a,s),c=s.data;return c.setAll(sT(o)),c.setAll(u),s.convertToFoundDocument(s.version,c).setHasLocalMutations(),l===null?null:l.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(o,s,l){return tu(o.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):l}(t,e,n)}function jL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),o=tT(r.transform,i||null);o!=null&&(n===null&&(n=tn.empty()),n.set(r.field,o))}return n||null}function D0(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wo(r,i,(o,s)=>FL(o,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ua extends mf{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pi extends mf{constructor(e,n,r,i,o=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function sT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function M0(t,e,n){const r=new Map;We(t.length===n.length);for(let i=0;i<n.length;i++){const o=t[i],s=o.transform,l=e.data.field(o.field);r.set(o.field,VL(s,l,n[i]))}return r}function L0(t,e,n){const r=new Map;for(const i of t){const o=i.transform,s=n.data.field(i.field);r.set(i.field,LL(o,s,e))}return r}class aT extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zL extends mf{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(e.key)&&UL(o,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ts(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ts(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=JI();return this.mutations.forEach(i=>{const o=e.get(i.key),s=o.overlayedDocument;let l=this.applyToLocalView(s,o.mutatedFields);l=n.has(i.key)?null:l;const a=oT(s,l);a!==null&&r.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(ve.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ct())}isEqual(e){return this.batchId===e.batchId&&wo(this.mutations,e.mutations,(n,r)=>D0(n,r))&&wo(this.baseMutations,e.baseMutations,(n,r)=>D0(n,r))}}class Sg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){We(e.mutations.length===r.length);let i=function(){return xL}();const o=e.mutations;for(let s=0;s<o.length;s++)i=i.insert(o[s].key,r[s].version);return new Sg(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pe,J;function WL(t){switch(t){default:return X();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function GL(t){if(t===void 0)return xr("GRPC error has no .code"),A.UNKNOWN;switch(t){case Pe.OK:return A.OK;case Pe.CANCELLED:return A.CANCELLED;case Pe.UNKNOWN:return A.UNKNOWN;case Pe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Pe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Pe.INTERNAL:return A.INTERNAL;case Pe.UNAVAILABLE:return A.UNAVAILABLE;case Pe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Pe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Pe.NOT_FOUND:return A.NOT_FOUND;case Pe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Pe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Pe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Pe.ABORTED:return A.ABORTED;case Pe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Pe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Pe.DATA_LOSS:return A.DATA_LOSS;default:return X()}}(J=Pe||(Pe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new G4([4294967295,4294967295],0);class KL{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rp(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qL(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function YL(t,e){return rp(t,e.toTimestamp())}function so(t){return We(!!t),ve.fromTimestamp(function(n){const r=_i(n);return new Be(r.seconds,r.nanos)}(t))}function lT(t,e){return ip(t,e).canonicalString()}function ip(t,e){const n=function(i){return new Re(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function QL(t){const e=Re.fromString(t);return We(iV(e)),e}function op(t,e){return lT(t.databaseId,e.path)}function XL(t){const e=QL(t);return e.length===4?Re.emptyPath():ZL(e)}function JL(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ZL(t){return We(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function V0(t,e,n){return{name:op(t,e),fields:n.value.mapValue.fields}}function eV(t,e){let n;if(e instanceof Ua)n={update:V0(t,e.key,e.value)};else if(e instanceof aT)n={delete:op(t,e.key)};else if(e instanceof Pi)n={update:V0(t,e.key,e.data),updateMask:rV(e.fieldMask)};else{if(!(e instanceof zL))return X();n={verify:op(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(o,s){const l=s.transform;if(l instanceof oc)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ua)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ca)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof sc)return{fieldPath:s.field.canonicalString(),increment:l.Ie};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,o){return o.updateTime!==void 0?{updateTime:YL(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:X()}(t,e.precondition)),n}function tV(t,e){return t&&t.length>0?(We(e!==void 0),t.map(n=>function(i,o){let s=i.updateTime?so(i.updateTime):so(o);return s.isEqual(ve.min())&&(s=so(o)),new $L(s,i.transformResults||[])}(n,e))):[]}function nV(t){let e=XL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){We(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let o=[];n.where&&(o=function(f){const d=uT(f);return d instanceof Nr&&HI(d)?d.getFilters():[d]}(n.where));let s=[];n.orderBy&&(s=function(f){return f.map(d=>function(y){return new rc(Oi(y.field),function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let l=null;n.limit&&(l=function(f){let d;return d=typeof f=="object"?f.value:f,gg(d)?null:d}(n.limit));let a=null;n.startAt&&(a=function(f){const d=!!f.before,m=f.values||[];return new nc(m,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,m=f.values||[];return new nc(m,d)}(n.endAt)),TL(e,i,s,o,l,"F",a,u)}function uT(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Oi(n.unaryFilter.field);return je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Oi(n.unaryFilter.field);return je.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Oi(n.unaryFilter.field);return je.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Oi(n.unaryFilter.field);return je.create(s,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return je.create(Oi(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Nr.create(n.compositeFilter.filters.map(r=>uT(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function Oi(t){return et.fromServerFormat(t.fieldPath)}function rV(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iV(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.ct=e}}function sV(t){const e=nV({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?np(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(){this._n=new lV}addToCollectionParentIndex(e,n){return this._n.add(n),k.resolve()}getCollectionParents(e,n){return k.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return k.resolve()}deleteFieldIndex(e,n){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,n){return k.resolve()}getDocumentsMatchingTarget(e,n){return k.resolve(null)}getIndexType(e,n){return k.resolve(0)}getFieldIndexes(e,n){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,n){return k.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return k.resolve(Or.min())}updateCollectionGroup(e,n,r){return k.resolve()}updateIndexEntries(e,n){return k.resolve()}}class lV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ht(Re.comparator),o=!i.has(r);return this.index[n]=i.add(r),o}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ht(Re.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new To(0)}static Bn(){return new To(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(){this.changes=new Lo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?k.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Ts(r.mutation,i,nn.empty(),Be.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ct()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ct()){const i=ei();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(o=>{let s=Il();return o.forEach((l,a)=>{s=s.insert(l,a.overlayedDocument)}),s}))}getOverlayedDocuments(e,n){const r=ei();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ct()))}populateOverlays(e,n,r){const i=[];return r.forEach(o=>{n.has(o)||i.push(o)}),this.documentOverlayCache.getOverlays(e,i).next(o=>{o.forEach((s,l)=>{n.set(s,l)})})}computeViews(e,n,r,i){let o=ic();const s=Is(),l=function(){return Is()}();return n.forEach((a,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pi)?o=o.insert(u.key,u):c!==void 0?(s.set(u.key,c.mutation.getFieldMask()),Ts(c.mutation,u,c.mutation.getFieldMask(),Be.now())):s.set(u.key,nn.empty())}),this.recalculateAndSaveOverlays(e,o).next(a=>(a.forEach((u,c)=>s.set(u,c)),n.forEach((u,c)=>{var f;return l.set(u,new cV(c,(f=s.get(u))!==null&&f!==void 0?f:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Is();let i=new Pt((s,l)=>s-l),o=ct();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(s=>{for(const l of s)l.keys().forEach(a=>{const u=n.get(a);if(u===null)return;let c=r.get(a)||nn.empty();c=l.applyToLocalView(u,c),r.set(a,c);const f=(i.get(l.batchId)||ct()).add(a);i=i.insert(l.batchId,f)})}).next(()=>{const s=[],l=i.getReverseIterator();for(;l.hasNext();){const a=l.getNext(),u=a.key,c=a.value,f=JI();c.forEach(d=>{if(!o.has(d)){const m=oT(n.get(d),r.get(d));m!==null&&f.set(d,m),o=o.add(d)}}),s.push(this.documentOverlayCache.saveOverlays(e,u,f))}return k.waitFor(s)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(s){return K.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):CL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(o=>{const s=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-o.size):k.resolve(ei());let l=-1,a=o;return s.next(u=>k.forEach(u,(c,f)=>(l<f.largestBatchId&&(l=f.largestBatchId),o.get(c)?k.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{a=a.insert(c,d)}))).next(()=>this.populateOverlays(e,u,o)).next(()=>this.computeViews(e,a,u,ct())).next(c=>({batchId:l,changes:XI(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let i=Il();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const o=n.collectionGroup;let s=Il();return this.indexManager.getCollectionParents(e,o).next(l=>k.forEach(l,a=>{const u=function(f,d){return new hf(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,a.child(o));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,d)=>{s=s.insert(f,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r,i){let o;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(o=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,o,i))).next(s=>{o.forEach((a,u)=>{const c=u.getKey();s.get(c)===null&&(s=s.insert(c,en.newInvalidDocument(c)))});let l=Il();return s.forEach((a,u)=>{const c=o.get(a);c!==void 0&&Ts(c.mutation,u,nn.empty(),Be.now()),Eg(n,u)&&(l=l.insert(a,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return k.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:so(i.createTime)}}(n)),k.resolve()}getNamedQuery(e,n){return k.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:sV(i.bundledQuery),readTime:so(i.readTime)}}(n)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.overlays=new Pt(K.comparator),this.hr=new Map}getOverlay(e,n){return k.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ei();return k.forEach(n,i=>this.getOverlay(e,i).next(o=>{o!==null&&r.set(i,o)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,o)=>{this.ht(e,n,o)}),k.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),k.resolve()}getOverlaysForCollection(e,n,r){const i=ei(),o=n.length+1,s=new K(n.child("")),l=this.overlays.getIteratorFrom(s);for(;l.hasNext();){const a=l.getNext().value,u=a.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===o&&a.largestBatchId>r&&i.set(a.getKey(),a)}return k.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let o=new Pt((u,c)=>u-c);const s=this.overlays.getIterator();for(;s.hasNext();){const u=s.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=o.get(u.largestBatchId);c===null&&(c=ei(),o=o.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const l=ei(),a=o.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((u,c)=>l.set(u,c)),!(l.size()>=i)););return k.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const s=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,s)}this.overlays=this.overlays.insert(r.key,new HL(n,r));let o=this.hr.get(n);o===void 0&&(o=ct(),this.hr.set(n,o)),this.hr.set(n,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(){this.Pr=new ht($e.Ir),this.Tr=new ht($e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new $e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new $e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Re([])),r=new $e(n,e),i=new $e(n,e+1),o=[];return this.Tr.forEachInRange([r,i],s=>{this.Ar(s),o.push(s.key)}),o}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Re([])),r=new $e(n,e),i=new $e(n,e+1);let o=ct();return this.Tr.forEachInRange([r,i],s=>{o=o.add(s.key)}),o}containsKey(e){const n=new $e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ae(e.pr,n.pr)}static Er(e,n){return ae(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new ht($e.Ir)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new BL(o,n,r,i);this.mutationQueue.push(s);for(const l of i)this.wr=this.wr.add(new $e(l.key,o)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return k.resolve(s)}lookupMutationBatch(e,n){return k.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),o=i<0?0:i;return k.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new $e(n,0),i=new $e(n,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,i],s=>{const l=this.Sr(s.pr);o.push(l)}),k.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(ae);return n.forEach(i=>{const o=new $e(i,0),s=new $e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,s],l=>{r=r.add(l.pr)})}),k.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let o=r;K.isDocumentKey(o)||(o=o.child(""));const s=new $e(new K(o),0);let l=new ht(ae);return this.wr.forEachWhile(a=>{const u=a.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(l=l.add(a.pr)),!0)},s),k.resolve(this.Dr(l))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){We(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return k.forEach(n.mutations,i=>{const o=new $e(i.key,n.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new $e(n,0),i=this.wr.firstAfterOrEqual(r);return k.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mV{constructor(e){this.vr=e,this.docs=function(){return new Pt(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),o=i?i.size:0,s=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:s}),this.size+=s-o,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return k.resolve(r?r.document.mutableCopy():en.newInvalidDocument(n))}getEntries(e,n){let r=ic();return n.forEach(i=>{const o=this.docs.get(i);r=r.insert(i,o?o.document.mutableCopy():en.newInvalidDocument(i))}),k.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let o=ic();const s=n.path,l=new K(s.child("")),a=this.docs.getIteratorFrom(l);for(;a.hasNext();){const{key:u,value:{document:c}}=a.getNext();if(!s.isPrefixOf(u.path))break;u.path.length>s.length+1||iL(rL(c),r)<=0||(i.has(c.key)||Eg(n,c))&&(o=o.insert(c.key,c.mutableCopy()))}return k.resolve(o)}getAllFromCollectionGroup(e,n,r,i){X()}Fr(e,n){return k.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new gV(this)}getSize(e){return k.resolve(this.size)}}class gV extends uV{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),k.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vV{constructor(e){this.persistence=e,this.Mr=new Lo(n=>_g(n),wg),this.lastRemoteSnapshotVersion=ve.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ig,this.targetCount=0,this.Br=To.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),k.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new To(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,k.resolve()}updateTargetData(e,n){return this.qn(n),k.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,n,r){let i=0;const o=[];return this.Mr.forEach((s,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Mr.delete(s),o.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),k.waitFor(o).next(()=>i)}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return k.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),k.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,o=[];return i&&n.forEach(s=>{o.push(i.markPotentiallyOrphaned(e,s))}),k.waitFor(o)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),k.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return k.resolve(r)}containsKey(e,n){return k.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yV{constructor(e,n){this.Lr={},this.overlays={},this.kr=new FI(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new vV(this),this.indexManager=new aV,this.remoteDocumentCache=function(i){return new mV(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new oV(n),this.$r=new dV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new hV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new pV(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new _V(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(o=>this.referenceDelegate.Wr(i).next(()=>o)).toPromise().then(o=>(i.raiseOnCommittedEvent(),o))}Gr(e,n){return k.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class _V extends sL{constructor(e){super(),this.currentSequenceNumber=e}}class Tg{constructor(e){this.persistence=e,this.zr=new Ig,this.jr=null}static Hr(e){return new Tg(e)}get Jr(){if(this.jr)return this.jr;throw X()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),k.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),k.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),k.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.Jr,r=>{const i=K.fromPath(r);return this.Yr(e,i).next(o=>{o||n.removeEntry(i,ve.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return k.or([()=>k.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=ct(),i=ct();for(const o of n.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new bg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EV{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return sO()?8:Zr.v(Ne())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const o={result:null};return this.ji(e,n).next(s=>{o.result=s}).next(()=>{if(!o.result)return this.Hi(e,n,i,r).next(s=>{o.result=s})}).next(()=>{if(o.result)return;const s=new wV;return this.Ji(e,n,s).next(l=>{if(o.result=l,this.Ui)return this.Yi(e,n,s,l.size)})}).next(()=>o.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Xo()<=Q.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Jo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),k.resolve()):(Xo()<=Q.DEBUG&&O("QueryEngine","Query:",Jo(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Xo()<=Q.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Jo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(n))):k.resolve())}ji(e,n){if(O0(n))return k.resolve(null);let r=ai(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=np(n,null,"F"),r=ai(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(o=>{const s=ct(...o);return this.zi.getDocuments(e,s).next(l=>this.indexManager.getMinOffset(e,r).next(a=>{const u=this.Zi(n,l);return this.Xi(n,u,s,a.readTime)?this.ji(e,np(n,null,"F")):this.es(e,u,n,a)}))})))}Hi(e,n,r,i){return O0(n)||i.isEqual(ve.min())?k.resolve(null):this.zi.getDocuments(e,r).next(o=>{const s=this.Zi(n,o);return this.Xi(n,s,r,i)?k.resolve(null):(Xo()<=Q.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jo(n)),this.es(e,s,n,nL(i,-1)).next(l=>l))})}Zi(e,n){let r=new ht(PL(e));return n.forEach((i,o)=>{Eg(e,o)&&(r=r.add(o))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const o=e.limitType==="F"?n.last():n.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}Ji(e,n,r){return Xo()<=Q.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Jo(n)),this.zi.getDocumentsMatchingQuery(e,n,Or.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(o=>(n.forEach(s=>{o=o.insert(s.key,s)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SV{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new Pt(ae),this.rs=new Lo(o=>_g(o),wg),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fV(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function IV(t,e,n,r){return new SV(t,e,n,r)}async function cT(t,e){const n=pe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(o=>(i=o,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(o=>{const s=[],l=[];let a=ct();for(const u of i){s.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}for(const u of o){l.push(u.batchId);for(const c of u.mutations)a=a.add(c.key)}return n.localDocuments.getDocuments(r,a).next(u=>({us:u,removedBatchIds:s,addedBatchIds:l}))})})}function TV(t,e){const n=pe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),o=n.os.newChangeBuffer({trackRemovals:!0});return function(l,a,u,c){const f=u.batch,d=f.keys();let m=k.resolve();return d.forEach(y=>{m=m.next(()=>c.getEntry(a,y)).next(v=>{const _=u.docVersions.get(y);We(_!==null),v.version.compareTo(_)<0&&(f.applyToRemoteDocument(v,u),v.isValidDocument()&&(v.setReadTime(u.commitVersion),c.addEntry(v)))})}),m.next(()=>l.mutationQueue.removeMutationBatch(a,f))}(n,r,e,o).next(()=>o.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let a=ct();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(a=a.add(l.batch.mutations[u].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function bV(t){const e=pe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function CV(t,e){const n=pe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class F0{constructor(){this.activeTargetIds=DL()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kV{constructor(){this.no=new F0,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new F0,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl=null;function wd(){return Tl===null?Tl=function(){return 268435456+Math.round(2147483648*Math.random())}():Tl++,"0x"+Tl.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RV{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class xV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${o}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${o}`}get wo(){return!1}So(n,r,i,o,s){const l=wd(),a=this.bo(n,r.toUriEncodedString());O("RestConnection",`Sending RPC '${n}' ${l}:`,a,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,o,s),this.Co(n,a,u,i).then(c=>(O("RestConnection",`Received RPC '${n}' ${l}: `,c),c),c=>{throw Ju("RestConnection",`RPC '${n}' ${l} failed with error: `,c,"url: ",a,"request:",i),c})}vo(n,r,i,o,s,l){return this.So(n,r,i,o,s)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,s)=>n[s]=o),i&&i.headers.forEach((o,s)=>n[s]=o)}bo(n,r){const i=AV[n];return`${this.fo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const o=wd();return new Promise((s,l)=>{const a=new W4;a.setWithCredentials(!0),a.listenOnce(B4.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case _d.NO_ERROR:const c=a.getResponseJson();O(st,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(c)),s(c);break;case _d.TIMEOUT:O(st,`RPC '${e}' ${o} timed out`),l(new B(A.DEADLINE_EXCEEDED,"Request time out"));break;case _d.HTTP_ERROR:const f=a.getStatus();if(O(st,`RPC '${e}' ${o} failed with status:`,f,"response text:",a.getResponseText()),f>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const y=function(_){const h=_.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(h)>=0?h:A.UNKNOWN}(m.status);l(new B(y,m.message))}else l(new B(A.UNKNOWN,"Server responded with status "+a.getStatus()))}else l(new B(A.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{O(st,`RPC '${e}' ${o} completed.`)}});const u=JSON.stringify(i);O(st,`RPC '${e}' ${o} sending request:`,i),a.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=wd(),o=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=j4(),l=z4(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.Do(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const c=o.join("");O(st,`Creating RPC '${e}' stream ${i}: ${c}`,a);const f=s.createWebChannel(c,a);let d=!1,m=!1;const y=new RV({lo:_=>{m?O(st,`Not sending because RPC '${e}' stream ${i} is closed:`,_):(d||(O(st,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),O(st,`RPC '${e}' stream ${i} sending:`,_),f.send(_))},ho:()=>f.close()}),v=(_,h,p)=>{_.listen(h,g=>{try{p(g)}catch(w){setTimeout(()=>{throw w},0)}})};return v(f,wl.EventType.OPEN,()=>{m||O(st,`RPC '${e}' stream ${i} transport opened.`)}),v(f,wl.EventType.CLOSE,()=>{m||(m=!0,O(st,`RPC '${e}' stream ${i} transport closed`),y.Vo())}),v(f,wl.EventType.ERROR,_=>{m||(m=!0,Ju(st,`RPC '${e}' stream ${i} transport errored:`,_),y.Vo(new B(A.UNAVAILABLE,"The operation could not be completed")))}),v(f,wl.EventType.MESSAGE,_=>{var h;if(!m){const p=_.data[0];We(!!p);const g=p,w=g.error||((h=g[0])===null||h===void 0?void 0:h.error);if(w){O(st,`RPC '${e}' stream ${i} received error:`,w);const I=w.status;let b=function(L){const V=Pe[L];if(V!==void 0)return GL(V)}(I),T=w.message;b===void 0&&(b=A.INTERNAL,T="Unknown error status: "+I+" with message "+w.message),m=!0,y.Vo(new B(b,T)),f.close()}else O(st,`RPC '${e}' stream ${i} received:`,p),y.mo(p)}}),v(l,H4.STAT_EVENT,_=>{_.stat===I0.PROXY?O(st,`RPC '${e}' stream ${i} detected buffering proxy`):_.stat===I0.NOPROXY&&O(st,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ro()},0),y}}function Ed(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){return new KL(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,n,r=1e3,i=1.5,o=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=o,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OV{constructor(e,n,r,i,o,s,l,a){this.oi=e,this.$o=r,this.Uo=i,this.connection=o,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=l,this.listener=a,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new fT(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(xr(n.toString()),xr("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new B(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NV extends OV{constructor(e,n,r,i,o,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,s),this.serializer=o,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(We(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=tV(e.writeResults,e.commitTime),r=so(e.commitTime);return this.listener.T_(r,n)}return We(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=JL(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>eV(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,s])=>this.connection.So(e,ip(n,r),i,o,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new B(A.UNKNOWN,o.toString())})}vo(e,n,r,i,o){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,l])=>this.connection.vo(e,ip(n,r),i,s,l,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new B(A.UNKNOWN,s.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class MV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(xr(n),this.g_=!1):O("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LV{constructor(e,n,r,i,o){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=o,this.M_.io(s=>{r.enqueueAndForget(async()=>{za(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=pe(a);u.v_.add(4),await ja(u),u.x_.set("Unknown"),u.v_.delete(4),await vf(u)}(this))})}),this.x_=new MV(r,i)}}async function vf(t){if(za(t))for(const e of t.F_)await e(!0)}async function ja(t){for(const e of t.F_)await e(!1)}function za(t){return pe(t).v_.size===0}async function dT(t,e,n){if(!df(e))throw e;t.v_.add(1),await ja(t),t.x_.set("Offline"),n||(n=()=>bV(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await vf(t)})}function hT(t,e){return e().catch(n=>dT(t,n,e))}async function yf(t){const e=pe(t),n=Dr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;VV(e);)try{const i=await CV(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,FV(e,i)}catch(i){await dT(e,i)}pT(e)&&mT(e)}function VV(t){return za(t)&&t.D_.length<10}function FV(t,e){t.D_.push(e);const n=Dr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function pT(t){return za(t)&&!Dr(t).Ho()&&t.D_.length>0}function mT(t){Dr(t).start()}async function $V(t){Dr(t).d_()}async function UV(t){const e=Dr(t);for(const n of t.D_)e.I_(n.mutations)}async function jV(t,e,n){const r=t.D_.shift(),i=Sg.from(r,e,n);await hT(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yf(t)}async function zV(t,e){e&&Dr(t).P_&&await async function(r,i){if(function(s){return WL(s)&&s!==A.ABORTED}(i.code)){const o=r.D_.shift();Dr(r).Zo(),await hT(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,i)),await yf(r)}}(t,e),pT(t)&&mT(t)}async function U0(t,e){const n=pe(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=za(n);n.v_.add(3),await ja(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await vf(n)}async function BV(t,e){const n=pe(t);e?(n.v_.delete(2),await vf(n)):e||(n.v_.add(2),await ja(n),n.x_.set("Unknown"))}function Dr(t){return t.B_||(t.B_=function(n,r,i){const o=pe(n);return o.R_(),new NV(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)}(t.datastore,t.asyncQueue,{Po:$V.bind(null,t),To:zV.bind(null,t),E_:UV.bind(null,t),T_:jV.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await yf(t)):(await t.B_.stop(),t.D_.length>0&&(O("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(e,n,r,i,o){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=o,this.deferred=new Pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(s=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,o){const s=Date.now()+r,l=new Cg(e,n,s,i,o);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new B(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gT(t,e){if(xr("AsyncQueue",`${e}: ${t}`),df(t))return new B(A.UNAVAILABLE,`${e}: ${t}`);throw t}class HV{constructor(){this.queries=new Lo(e=>YI(e),qI),this.onlineState="Unknown",this.K_=new Set}}function WV(t){t.K_.forEach(e=>{e.next()})}class GV{constructor(e,n,r,i,o,s){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new Lo(l=>YI(l),qI),this.pa=new Map,this.ya=new Set,this.wa=new Pt(K.comparator),this.Sa=new Map,this.ba=new Ig,this.Da={},this.Ca=new Map,this.va=To.Bn(),this.onlineState="Unknown",this.Fa=void 0}get isPrimaryClient(){return this.Fa===!0}}async function KV(t,e,n){const r=XV(t);try{const i=await function(s,l){const a=pe(s),u=Be.now(),c=l.reduce((m,y)=>m.add(y.key),ct());let f,d;return a.persistence.runTransaction("Locally write mutations","readwrite",m=>{let y=ic(),v=ct();return a.os.getEntries(m,c).next(_=>{y=_,y.forEach((h,p)=>{p.isValidDocument()||(v=v.add(h))})}).next(()=>a.localDocuments.getOverlayedDocuments(m,y)).next(_=>{f=_;const h=[];for(const p of l){const g=jL(p,f.get(p.key).overlayedDocument);g!=null&&h.push(new Pi(p.key,g,jI(g.value.mapValue),Vn.exists(!0)))}return a.mutationQueue.addMutationBatch(m,u,h,l)}).next(_=>{d=_;const h=_.applyToLocalDocumentSet(f,v);return a.documentOverlayCache.saveOverlays(m,_.batchId,h)})}).then(()=>({batchId:d.batchId,changes:XI(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,l,a){let u=s.Da[s.currentUser.toKey()];u||(u=new Pt(ae)),u=u.insert(l,a),s.Da[s.currentUser.toKey()]=u}(r,i.batchId,n),await _f(r,i.changes),await yf(r.remoteStore)}catch(i){const o=gT(i,"Failed to persist write");n.reject(o)}}function j0(t,e,n){const r=pe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ga.forEach((o,s)=>{const l=s.view.U_(e);l.snapshot&&i.push(l.snapshot)}),function(s,l){const a=pe(s);a.onlineState=l;let u=!1;a.queries.forEach((c,f)=>{for(const d of f.Q_)d.U_(l)&&(u=!0)}),u&&WV(a)}(r.eventManager,e),i.length&&r.fa.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function qV(t,e){const n=pe(t),r=e.batch.batchId;try{const i=await TV(n.localStore,e);yT(n,r,null),vT(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await _f(n,i)}catch(i){await VI(i)}}async function YV(t,e,n){const r=pe(t);try{const i=await function(s,l){const a=pe(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,l).next(f=>(We(f!==null),c=f.keys(),a.mutationQueue.removeMutationBatch(u,f))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,l)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(r.localStore,e);yT(r,e,n),vT(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await _f(r,i)}catch(i){await VI(i)}}function vT(t,e){(t.Ca.get(e)||[]).forEach(n=>{n.resolve()}),t.Ca.delete(e)}function yT(t,e,n){const r=pe(t);let i=r.Da[r.currentUser.toKey()];if(i){const o=i.get(e);o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Da[r.currentUser.toKey()]=i}}async function _f(t,e,n){const r=pe(t),i=[],o=[],s=[];r.ga.isEmpty()||(r.ga.forEach((l,a)=>{s.push(r.Ma(a,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=bg.Ki(a.targetId,u);o.push(c)}}))}),await Promise.all(s),r.fa.u_(i),await async function(a,u){const c=pe(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>k.forEach(u,d=>k.forEach(d.qi,m=>c.persistence.referenceDelegate.addReference(f,d.targetId,m)).next(()=>k.forEach(d.Qi,m=>c.persistence.referenceDelegate.removeReference(f,d.targetId,m)))))}catch(f){if(!df(f))throw f;O("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const m=c.ns.get(d),y=m.snapshotVersion,v=m.withLastLimboFreeSnapshotVersion(y);c.ns=c.ns.insert(d,v)}}}(r.localStore,o))}async function QV(t,e){const n=pe(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await cT(n.localStore,e);n.currentUser=e,function(o,s){o.Ca.forEach(l=>{l.forEach(a=>{a.reject(new B(A.CANCELLED,s))})}),o.Ca.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _f(n,r.us)}}function XV(t){const e=pe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=qV.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YV.bind(null,e),e}class z0{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gf(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return IV(this.persistence,new EV,e.initialUser,this.serializer)}createPersistence(e){return new yV(Tg.Hr,this.serializer)}createSharedClientState(e){return new kV}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JV{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>j0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=QV.bind(null,this.syncEngine),await BV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HV}()}createDatastore(e){const n=gf(e.databaseInfo.databaseId),r=function(o){return new xV(o)}(e.databaseInfo);return function(o,s,l,a){return new DV(o,s,l,a)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,o,s,l){return new LV(r,i,o,s,l)}(this.localStore,this.datastore,e.asyncQueue,n=>j0(this.syncEngine,n,0),function(){return $0.D()?new $0:new PV}())}createSyncEngine(e,n){return function(i,o,s,l,a,u,c){const f=new GV(i,o,s,l,a,u);return c&&(f.Fa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const i=pe(r);O("RemoteStore","RemoteStore shutting down."),i.v_.add(5),await ja(i),i.M_.shutdown(),i.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZV{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=lt.UNAUTHENTICATED,this.clientId=LI.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new B(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=gT(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cT(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function B0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await t3(t);O("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>U0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>U0(e.remoteStore,i)),t._onlineComponents=e}function e3(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function t3(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!e3(n))throw n;Ju("Error using user provided cache. Falling back to memory cache: "+n),await Sd(t,new z0)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await Sd(t,new z0);return t._offlineComponents}async function n3(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await B0(t,t._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await B0(t,new JV))),t._onlineComponents}function r3(t){return n3(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _T(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H0=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i3(t,e,n){if(!n)throw new B(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function o3(t,e,n,r){if(e===!0&&r===!0)throw new B(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W0(t){if(!K.isDocumentKey(t))throw new B(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kg(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function sp(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new B(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kg(t);throw new B(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new B(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new B(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}o3("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=_T((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new B(A.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new B(A.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new B(A.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Pg{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new G0({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new B(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new B(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new G0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new K4;switch(r.type){case"firstParty":return new X4(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new B(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=H0.get(n);r&&(O("ComponentProvider","Removing Datastore"),H0.delete(n),r.terminate())}(this),Promise.resolve()}}function s3(t,e,n,r={}){var i;const o=(t=sp(t,Pg))._getSettings(),s=`${e}:${n}`;if(o.host!=="firestore.googleapis.com"&&o.host!==s&&Ju("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},o),{host:s,ssl:!1})),r.mockUserToken){let l,a;if(typeof r.mockUserToken=="string")l=r.mockUserToken,a=lt.MOCK_USER;else{l=eO(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new B(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new lt(u)}t._authCredentials=new q4(new MI(l,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ag(this.firestore,e,this._query)}}class Fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Fn(this.firestore,e,this._key)}}class fa extends Ag{constructor(e,n,r){super(e,n,bL(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Fn(this.firestore,null,new K(e))}withConverter(e){return new fa(this.firestore,e,this._path)}}function a3(t,e,...n){if(t=Yt(t),arguments.length===1&&(e=LI.newId()),i3("doc","path",e),t instanceof Pg){const r=Re.fromString(e,...n);return W0(r),new Fn(t,null,new K(r))}{if(!(t instanceof Fn||t instanceof fa))throw new B(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return W0(r),new Fn(t.firestore,t instanceof fa?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l3{constructor(){this.Xa=Promise.resolve(),this.eu=[],this.tu=!1,this.nu=[],this.ru=null,this.iu=!1,this.su=!1,this.ou=[],this.jo=new fT(this,"async_queue_retry"),this._u=()=>{const n=Ed();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Ed();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this._u)}get isShuttingDown(){return this.tu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.au(),this.uu(e)}enterRestrictedMode(e){if(!this.tu){this.tu=!0,this.su=e||!1;const n=Ed();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._u)}}enqueue(e){if(this.au(),this.tu)return new Promise(()=>{});const n=new Pr;return this.uu(()=>this.tu&&this.su?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.eu.push(e),this.cu()))}async cu(){if(this.eu.length!==0){try{await this.eu[0](),this.eu.shift(),this.jo.reset()}catch(e){if(!df(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.eu.length>0&&this.jo.qo(()=>this.cu())}}uu(e){const n=this.Xa.then(()=>(this.iu=!0,e().catch(r=>{this.ru=r,this.iu=!1;const i=function(s){let l=s.message||"";return s.stack&&(l=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),l}(r);throw xr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.iu=!1,r))));return this.Xa=n,n}enqueueAfterDelay(e,n,r){this.au(),this.ou.indexOf(e)>-1&&(n=0);const i=Cg.createAndSchedule(this,e,n,r,o=>this.lu(o));return this.nu.push(i),i}au(){this.ru&&X()}verifyOperationInProgress(){}async hu(){let e;do e=this.Xa,await e;while(e!==this.Xa)}Pu(e){for(const n of this.nu)if(n.timerId===e)return!0;return!1}Iu(e){return this.hu().then(()=>{this.nu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.nu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.hu()})}Tu(e){this.ou.push(e)}lu(e){const n=this.nu.indexOf(e);this.nu.splice(n,1)}}class wT extends Pg{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new l3}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ET(this),this._firestoreClient.terminate()}}function u3(t,e){const n=typeof t=="object"?t:JE(),r=typeof t=="string"?t:e||"(default)",i=Mm(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const o=Jx("firestore");o&&s3(i,...o)}return i}function c3(t){return t._firestoreClient||ET(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ET(t){var e,n,r;const i=t._freezeSettings(),o=function(l,a,u,c){return new dL(l,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,_T(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new ZV(t._authCredentials,t._appCheckCredentials,t._queue,o),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e){this._byteString=e}static fromBase64String(e){try{return new da(Wn.fromBase64String(e))}catch(n){throw new B(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new da(Wn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new B(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new B(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new B(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ae(this._lat,e._lat)||ae(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f3=/^__.*__$/;class d3{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ua(e,this.data,n,this.fieldTransforms)}}function bT(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Rg{constructor(e,n,r,i,o,s){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,o===void 0&&this.Eu(),this.fieldTransforms=o||[],this.fieldMask=s||[]}get path(){return this.settings.path}get du(){return this.settings.du}Au(e){return new Rg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.mu(e),i}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Au({path:r,Vu:!1});return i.Eu(),i}gu(e){return this.Au({path:void 0,Vu:!0})}pu(e){return ac(e,this.settings.methodName,this.settings.yu||!1,this.path,this.settings.wu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Eu(){if(this.path)for(let e=0;e<this.path.length;e++)this.mu(this.path.get(e))}mu(e){if(e.length===0)throw this.pu("Document fields must not be empty");if(bT(this.du)&&f3.test(e))throw this.pu('Document fields cannot begin and end with "__"')}}class h3{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gf(e)}Su(e,n,r,i=!1){return new Rg({du:e,methodName:n,wu:r,path:et.emptyPath(),Vu:!1,yu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function p3(t){const e=t._freezeSettings(),n=gf(t._databaseId);return new h3(t._databaseId,!!e.ignoreUndefinedProperties,n)}function m3(t,e,n,r,i,o={}){const s=t.Su(o.merge||o.mergeFields?2:0,e,n,i);AT("Data must be an object, but it was:",s,r);const l=kT(r,s);let a,u;if(o.merge)a=new nn(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const c=[];for(const f of o.mergeFields){const d=g3(e,f,n);if(!s.contains(d))throw new B(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);_3(c,d)||c.push(d)}a=new nn(c),u=s.fieldTransforms.filter(f=>a.covers(f.field))}else a=null,u=s.fieldTransforms;return new d3(new tn(l),a,u)}function CT(t,e){if(PT(t=Yt(t)))return AT("Unsupported field value:",e,t),kT(t,e);if(t instanceof IT)return function(r,i){if(!bT(i.du))throw i.pu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.pu(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Vu&&e.du!==4)throw e.pu("Nested arrays are not supported");return function(r,i){const o=[];let s=0;for(const l of r){let a=CT(l,i.gu(s));a==null&&(a={nullValue:"NULL_VALUE"}),o.push(a),s++}return{arrayValue:{values:o}}}(t,e)}return function(r,i){if((r=Yt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ML(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=Be.fromDate(r);return{timestampValue:rp(i.serializer,o)}}if(r instanceof Be){const o=new Be(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:rp(i.serializer,o)}}if(r instanceof TT)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof da)return{bytesValue:qL(i.serializer,r._byteString)};if(r instanceof Fn){const o=i.databaseId,s=r.firestore._databaseId;if(!s.isEqual(o))throw i.pu(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:lT(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.pu(`Unsupported field value: ${kg(r)}`)}(t,e)}function kT(t,e){const n={};return $I(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):$a(t,(r,i)=>{const o=CT(i,e.Ru(r));o!=null&&(n[r]=o)}),{mapValue:{fields:n}}}function PT(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Be||t instanceof TT||t instanceof da||t instanceof Fn||t instanceof IT)}function AT(t,e,n){if(!PT(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=kg(n);throw r==="an object"?e.pu(t+" a custom object"):e.pu(t+" "+r)}}function g3(t,e,n){if((e=Yt(e))instanceof ST)return e._internalPath;if(typeof e=="string")return y3(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const v3=new RegExp("[~\\*/\\[\\]]");function y3(t,e,n){if(e.search(v3)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ST(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,r,i){const o=r&&!r.isEmpty(),s=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let a="";return(o||s)&&(a+=" (found",o&&(a+=` in field ${r}`),s&&(a+=` in document ${i}`),a+=")"),new B(A.INVALID_ARGUMENT,l+t+a)}function _3(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w3(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function E3(t,e,n){t=sp(t,Fn);const r=sp(t.firestore,wT),i=w3(t.converter,e,n);return S3(r,[m3(p3(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Vn.none())])}function S3(t,e){return function(r,i){const o=new Pr;return r.asyncQueue.enqueueAndForget(async()=>KV(await r3(r),i,o)),o.promise}(c3(t),e)}(function(e,n=!0){(function(i){Mo=i})(xo),vo(new pi("firestore",(r,{instanceIdentifier:i,options:o})=>{const s=r.getProvider("app").getImmediate(),l=new wT(new Y4(r.getProvider("auth-internal")),new Z4(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new B(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tc(u.options.projectId,c)}(s,i),s);return o=Object.assign({useFetchStreams:n},o),l._setSettings(o),l},"PUBLIC").setMultipleInstances(!0)),kr(T0,"4.4.3",e),kr(T0,"4.4.3","esm2017")})();const I3={apiKey:"AIzaSyD4373GSOWxaXrRVyQ5fAE3JRADjBvndhI",authDomain:"chatapp-5a5fc.firebaseapp.com",projectId:"chatapp-5a5fc",storageBucket:"chatapp-5a5fc.appspot.com",messagingSenderId:"606107620021",appId:"1:606107620021:web:e02c93d07fa887728824fc",measurementId:"G-CZ93LMGEE1"};XE(I3);const RT=VM(),T3=u3();function K0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?K0(Object(n),!0).forEach(function(r){Ve(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):K0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function lc(t){"@babel/helpers - typeof";return lc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},lc(t)}function b3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C3(t,e,n){return e&&q0(t.prototype,e),n&&q0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ve(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function xg(t,e){return P3(t)||R3(t,e)||xT(t,e)||O3()}function Ba(t){return k3(t)||A3(t)||xT(t)||x3()}function k3(t){if(Array.isArray(t))return ap(t)}function P3(t){if(Array.isArray(t))return t}function A3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function R3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,s,l;try{for(n=n.call(t);!(i=(s=n.next()).done)&&(r.push(s.value),!(e&&r.length===e));i=!0);}catch(a){o=!0,l=a}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function xT(t,e){if(t){if(typeof t=="string")return ap(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ap(t,e)}}function ap(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function x3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function O3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Y0=function(){},Og={},OT={},NT=null,DT={mark:Y0,measure:Y0};try{typeof window<"u"&&(Og=window),typeof document<"u"&&(OT=document),typeof MutationObserver<"u"&&(NT=MutationObserver),typeof performance<"u"&&(DT=performance)}catch{}var N3=Og.navigator||{},Q0=N3.userAgent,X0=Q0===void 0?"":Q0,Mr=Og,he=OT,J0=NT,bl=DT;Mr.document;var Zn=!!he.documentElement&&!!he.head&&typeof he.addEventListener=="function"&&typeof he.createElement=="function",MT=~X0.indexOf("MSIE")||~X0.indexOf("Trident/"),Cl,kl,Pl,Al,Rl,Gn="___FONT_AWESOME___",lp=16,LT="fa",VT="svg-inline--fa",wi="data-fa-i2svg",up="data-fa-pseudo-element",D3="data-fa-pseudo-element-pending",Ng="data-prefix",Dg="data-icon",Z0="fontawesome-i2svg",M3="async",L3=["HTML","HEAD","STYLE","SCRIPT"],FT=function(){try{return!0}catch{return!1}}(),ce="classic",Ie="sharp",Mg=[ce,Ie];function Ha(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ce]}})}var ha=Ha((Cl={},Ve(Cl,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ve(Cl,Ie,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),Cl)),pa=Ha((kl={},Ve(kl,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ve(kl,Ie,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),kl)),ma=Ha((Pl={},Ve(Pl,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ve(Pl,Ie,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Pl)),V3=Ha((Al={},Ve(Al,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ve(Al,Ie,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Al)),F3=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,$T="fa-layers-text",$3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,U3=Ha((Rl={},Ve(Rl,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ve(Rl,Ie,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Rl)),UT=[1,2,3,4,5,6,7,8,9,10],j3=UT.concat([11,12,13,14,15,16,17,18,19,20]),z3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ti={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ga=new Set;Object.keys(pa[ce]).map(ga.add.bind(ga));Object.keys(pa[Ie]).map(ga.add.bind(ga));var B3=[].concat(Mg,Ba(ga),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ti.GROUP,ti.SWAP_OPACITY,ti.PRIMARY,ti.SECONDARY]).concat(UT.map(function(t){return"".concat(t,"x")})).concat(j3.map(function(t){return"w-".concat(t)})),bs=Mr.FontAwesomeConfig||{};function H3(t){var e=he.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function W3(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(he&&typeof he.querySelector=="function"){var G3=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];G3.forEach(function(t){var e=xg(t,2),n=e[0],r=e[1],i=W3(H3(n));i!=null&&(bs[r]=i)})}var jT={styleDefault:"solid",familyDefault:"classic",cssPrefix:LT,replacementClass:VT,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};bs.familyPrefix&&(bs.cssPrefix=bs.familyPrefix);var bo=N(N({},jT),bs);bo.autoReplaceSvg||(bo.observeMutations=!1);var M={};Object.keys(jT).forEach(function(t){Object.defineProperty(M,t,{enumerable:!0,set:function(n){bo[t]=n,Cs.forEach(function(r){return r(M)})},get:function(){return bo[t]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(e){bo.cssPrefix=e,Cs.forEach(function(n){return n(M)})},get:function(){return bo.cssPrefix}});Mr.FontAwesomeConfig=M;var Cs=[];function K3(t){return Cs.push(t),function(){Cs.splice(Cs.indexOf(t),1)}}var nr=lp,yn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function q3(t){if(!(!t||!Zn)){var e=he.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=he.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],s=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(r=o)}return he.head.insertBefore(e,r),t}}var Y3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function va(){for(var t=12,e="";t-- >0;)e+=Y3[Math.random()*62|0];return e}function Vo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Lg(t){return t.classList?Vo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Q3(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zT(t[n]),'" ')},"").trim()}function wf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Vg(t){return t.size!==yn.size||t.x!==yn.x||t.y!==yn.y||t.rotate!==yn.rotate||t.flipX||t.flipY}function X3(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),s="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(o," ").concat(s," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:a,path:u}}function J3(t){var e=t.transform,n=t.width,r=n===void 0?lp:n,i=t.height,o=i===void 0?lp:i,s=t.startCentered,l=s===void 0?!1:s,a="";return l&&MT?a+="translate(".concat(e.x/nr-r/2,"em, ").concat(e.y/nr-o/2,"em) "):l?a+="translate(calc(-50% + ".concat(e.x/nr,"em), calc(-50% + ").concat(e.y/nr,"em)) "):a+="translate(".concat(e.x/nr,"em, ").concat(e.y/nr,"em) "),a+="scale(".concat(e.size/nr*(e.flipX?-1:1),", ").concat(e.size/nr*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var Z3=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function BT(){var t=LT,e=VT,n=M.cssPrefix,r=M.replacementClass,i=Z3;if(n!==t||r!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),s=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(o,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var e1=!1;function Id(){M.autoAddCss&&!e1&&(q3(BT()),e1=!0)}var eF={mixout:function(){return{dom:{css:BT,insertCss:Id}}},hooks:function(){return{beforeDOMElementCreation:function(){Id()},beforeI2svg:function(){Id()}}}},Kn=Mr||{};Kn[Gn]||(Kn[Gn]={});Kn[Gn].styles||(Kn[Gn].styles={});Kn[Gn].hooks||(Kn[Gn].hooks={});Kn[Gn].shims||(Kn[Gn].shims=[]);var rn=Kn[Gn],HT=[],tF=function t(){he.removeEventListener("DOMContentLoaded",t),uc=1,HT.map(function(e){return e()})},uc=!1;Zn&&(uc=(he.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(he.readyState),uc||he.addEventListener("DOMContentLoaded",tF));function nF(t){Zn&&(uc?setTimeout(t,0):HT.push(t))}function Wa(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,o=i===void 0?[]:i;return typeof t=="string"?zT(t):"<".concat(e," ").concat(Q3(r),">").concat(o.map(Wa).join(""),"</").concat(e,">")}function t1(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var rF=function(e,n){return function(r,i,o,s){return e.call(n,r,i,o,s)}},Td=function(e,n,r,i){var o=Object.keys(e),s=o.length,l=i!==void 0?rF(n,i):n,a,u,c;for(r===void 0?(a=1,c=e[o[0]]):(a=0,c=r);a<s;a++)u=o[a],c=l(c,e[u],u,e);return c};function iF(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((i&1023)<<10)+(o&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function cp(t){var e=iF(t);return e.length===1?e[0].toString(16):null}function oF(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function n1(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function fp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=n1(e);typeof rn.hooks.addPack=="function"&&!i?rn.hooks.addPack(t,n1(e)):rn.styles[t]=N(N({},rn.styles[t]||{}),o),t==="fas"&&fp("fa",e)}var xl,Ol,Nl,Ki=rn.styles,sF=rn.shims,aF=(xl={},Ve(xl,ce,Object.values(ma[ce])),Ve(xl,Ie,Object.values(ma[Ie])),xl),Fg=null,WT={},GT={},KT={},qT={},YT={},lF=(Ol={},Ve(Ol,ce,Object.keys(ha[ce])),Ve(Ol,Ie,Object.keys(ha[Ie])),Ol);function uF(t){return~B3.indexOf(t)}function cF(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!uF(i)?i:null}var QT=function(){var e=function(o){return Td(Ki,function(s,l,a){return s[a]=Td(l,o,{}),s},{})};WT=e(function(i,o,s){if(o[3]&&(i[o[3]]=s),o[2]){var l=o[2].filter(function(a){return typeof a=="number"});l.forEach(function(a){i[a.toString(16)]=s})}return i}),GT=e(function(i,o,s){if(i[s]=s,o[2]){var l=o[2].filter(function(a){return typeof a=="string"});l.forEach(function(a){i[a]=s})}return i}),YT=e(function(i,o,s){var l=o[2];return i[s]=s,l.forEach(function(a){i[a]=s}),i});var n="far"in Ki||M.autoFetchSvg,r=Td(sF,function(i,o){var s=o[0],l=o[1],a=o[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(i.names[s]={prefix:l,iconName:a}),typeof s=="number"&&(i.unicodes[s.toString(16)]={prefix:l,iconName:a}),i},{names:{},unicodes:{}});KT=r.names,qT=r.unicodes,Fg=Ef(M.styleDefault,{family:M.familyDefault})};K3(function(t){Fg=Ef(t.styleDefault,{family:M.familyDefault})});QT();function $g(t,e){return(WT[t]||{})[e]}function fF(t,e){return(GT[t]||{})[e]}function ni(t,e){return(YT[t]||{})[e]}function XT(t){return KT[t]||{prefix:null,iconName:null}}function dF(t){var e=qT[t],n=$g("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Lr(){return Fg}var Ug=function(){return{prefix:null,iconName:null,rest:[]}};function Ef(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ce:n,i=ha[r][t],o=pa[r][t]||pa[r][i],s=t in rn.styles?t:null;return o||s||null}var r1=(Nl={},Ve(Nl,ce,Object.keys(ma[ce])),Ve(Nl,Ie,Object.keys(ma[Ie])),Nl);function Sf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(e={},Ve(e,ce,"".concat(M.cssPrefix,"-").concat(ce)),Ve(e,Ie,"".concat(M.cssPrefix,"-").concat(Ie)),e),s=null,l=ce;(t.includes(o[ce])||t.some(function(u){return r1[ce].includes(u)}))&&(l=ce),(t.includes(o[Ie])||t.some(function(u){return r1[Ie].includes(u)}))&&(l=Ie);var a=t.reduce(function(u,c){var f=cF(M.cssPrefix,c);if(Ki[c]?(c=aF[l].includes(c)?V3[l][c]:c,s=c,u.prefix=c):lF[l].indexOf(c)>-1?(s=c,u.prefix=Ef(c,{family:l})):f?u.iconName=f:c!==M.replacementClass&&c!==o[ce]&&c!==o[Ie]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=s==="fa"?XT(u.iconName):{},m=ni(u.prefix,u.iconName);d.prefix&&(s=null),u.iconName=d.iconName||m||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ki.far&&Ki.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},Ug());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&l===Ie&&(Ki.fass||M.autoFetchSvg)&&(a.prefix="fass",a.iconName=ni(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||s==="fa")&&(a.prefix=Lr()||"fas"),a}var hF=function(){function t(){b3(this,t),this.definitions={}}return C3(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=N(N({},n.definitions[l]||{}),s[l]),fp(l,s[l]);var a=ma[ce][l];a&&fp(a,s[l]),QT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var s=i[o],l=s.prefix,a=s.iconName,u=s.icon,c=u[2];n[l]||(n[l]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[l][f]=u)}),n[l][a]=u}),n}}]),t}(),i1=[],qi={},ao={},pF=Object.keys(ao);function mF(t,e){var n=e.mixoutsTo;return i1=t,qi={},Object.keys(ao).forEach(function(r){pF.indexOf(r)===-1&&delete ao[r]}),i1.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(s){typeof i[s]=="function"&&(n[s]=i[s]),lc(i[s])==="object"&&Object.keys(i[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=i[s][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(s){qi[s]||(qi[s]=[]),qi[s].push(o[s])})}r.provides&&r.provides(ao)}),n}function dp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=qi[t]||[];return o.forEach(function(s){e=s.apply(null,[e].concat(r))}),e}function Ei(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=qi[t]||[];i.forEach(function(o){o.apply(null,n)})}function qn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ao[t]?ao[t].apply(null,e):void 0}function hp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Lr();if(e)return e=ni(n,e)||e,t1(JT.definitions,n,e)||t1(rn.styles,n,e)}var JT=new hF,gF=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Ei("noAuto")},vF={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Zn?(Ei("beforeI2svg",e),qn("pseudoElements2svg",e),qn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,nF(function(){_F({autoReplaceSvgRoot:n}),Ei("watch",e)})}},yF={icon:function(e){if(e===null)return null;if(lc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:ni(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Ef(e[0]);return{prefix:r,iconName:ni(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(M.cssPrefix,"-"))>-1||e.match(F3))){var i=Sf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Lr(),iconName:ni(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var o=Lr();return{prefix:o,iconName:ni(o,e)||e}}}},$t={noAuto:gF,config:M,dom:vF,parse:yF,library:JT,findIconDefinition:hp,toHtml:Wa},_F=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?he:n;(Object.keys(rn.styles).length>0||M.autoFetchSvg)&&Zn&&M.autoReplaceSvg&&$t.dom.i2svg({node:r})};function If(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Wa(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Zn){var r=he.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function wF(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,o=t.styles,s=t.transform;if(Vg(s)&&n.found&&!r.found){var l=n.width,a=n.height,u={x:l/a/2,y:.5};i.style=wf(N(N({},o),{},{"transform-origin":"".concat(u.x+s.x/16,"em ").concat(u.y+s.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function EF(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,o=t.symbol,s=o===!0?"".concat(e,"-").concat(M.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:s}),children:r}]}]}function jg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,o=t.iconName,s=t.transform,l=t.symbol,a=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,m=d===void 0?!1:d,y=r.found?r:n,v=y.width,_=y.height,h=i==="fak",p=[M.replacementClass,o?"".concat(M.cssPrefix,"-").concat(o):""].filter(function(L){return f.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(f.classes).join(" "),g={children:[],attributes:N(N({},f.attributes),{},{"data-prefix":i,"data-icon":o,class:p,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(_)})},w=h&&!~f.classes.indexOf("fa-fw")?{width:"".concat(v/_*16*.0625,"em")}:{};m&&(g.attributes[wi]=""),a&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(c||va())},children:[a]}),delete g.attributes.title);var I=N(N({},g),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:s,symbol:l,styles:N(N({},w),f.styles)}),b=r.found&&n.found?qn("generateAbstractMask",I)||{children:[],attributes:{}}:qn("generateAbstractIcon",I)||{children:[],attributes:{}},T=b.children,C=b.attributes;return I.children=T,I.attributes=C,l?EF(I):wF(I)}function o1(t){var e=t.content,n=t.width,r=t.height,i=t.transform,o=t.title,s=t.extra,l=t.watchable,a=l===void 0?!1:l,u=N(N(N({},s.attributes),o?{title:o}:{}),{},{class:s.classes.join(" ")});a&&(u[wi]="");var c=N({},s.styles);Vg(i)&&(c.transform=J3({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=wf(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}function SF(t){var e=t.content,n=t.title,r=t.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=wf(r.styles);o.length>0&&(i.style=o);var s=[];return s.push({tag:"span",attributes:i,children:[e]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var bd=rn.styles;function pp(t){var e=t[0],n=t[1],r=t.slice(4),i=xg(r,1),o=i[0],s=null;return Array.isArray(o)?s={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(ti.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ti.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(ti.PRIMARY),fill:"currentColor",d:o[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:s}}var IF={found:!1,width:512,height:512};function TF(t,e){!FT&&!M.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function mp(t,e){var n=e;return e==="fa"&&M.styleDefault!==null&&(e=Lr()),new Promise(function(r,i){if(qn("missingIconAbstract"),n==="fa"){var o=XT(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&bd[e]&&bd[e][t]){var s=bd[e][t];return r(pp(s))}TF(t,e),r(N(N({},IF),{},{icon:M.showMissingIcons&&t?qn("missingIconAbstract")||{}:{}}))})}var s1=function(){},gp=M.measurePerformance&&bl&&bl.mark&&bl.measure?bl:{mark:s1,measure:s1},ls='FA "6.5.1"',bF=function(e){return gp.mark("".concat(ls," ").concat(e," begins")),function(){return ZT(e)}},ZT=function(e){gp.mark("".concat(ls," ").concat(e," ends")),gp.measure("".concat(ls," ").concat(e),"".concat(ls," ").concat(e," begins"),"".concat(ls," ").concat(e," ends"))},zg={begin:bF,end:ZT},nu=function(){};function a1(t){var e=t.getAttribute?t.getAttribute(wi):null;return typeof e=="string"}function CF(t){var e=t.getAttribute?t.getAttribute(Ng):null,n=t.getAttribute?t.getAttribute(Dg):null;return e&&n}function kF(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(M.replacementClass)}function PF(){if(M.autoReplaceSvg===!0)return ru.replace;var t=ru[M.autoReplaceSvg];return t||ru.replace}function AF(t){return he.createElementNS("http://www.w3.org/2000/svg",t)}function RF(t){return he.createElement(t)}function eb(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?AF:RF:n;if(typeof t=="string")return he.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(s){i.setAttribute(s,t.attributes[s])});var o=t.children||[];return o.forEach(function(s){i.appendChild(eb(s,{ceFn:r}))}),i}function xF(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ru={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(eb(i),n)}),n.getAttribute(wi)===null&&M.keepOriginalSource){var r=he.createComment(xF(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Lg(n).indexOf(M.replacementClass))return ru.replace(e);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,a){return a===M.replacementClass||a.match(i)?l.toSvg.push(a):l.toNode.push(a),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var s=r.map(function(l){return Wa(l)}).join(`
`);n.setAttribute(wi,""),n.innerHTML=s}};function l1(t){t()}function tb(t,e){var n=typeof e=="function"?e:nu;if(t.length===0)n();else{var r=l1;M.mutateApproach===M3&&(r=Mr.requestAnimationFrame||l1),r(function(){var i=PF(),o=zg.begin("mutate");t.map(i),o(),n()})}}var Bg=!1;function nb(){Bg=!0}function vp(){Bg=!1}var cc=null;function u1(t){if(J0&&M.observeMutations){var e=t.treeCallback,n=e===void 0?nu:e,r=t.nodeCallback,i=r===void 0?nu:r,o=t.pseudoElementsCallback,s=o===void 0?nu:o,l=t.observeMutationsRoot,a=l===void 0?he:l;cc=new J0(function(u){if(!Bg){var c=Lr();Vo(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!a1(f.addedNodes[0])&&(M.searchPseudoElements&&s(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&M.searchPseudoElements&&s(f.target.parentNode),f.type==="attributes"&&a1(f.target)&&~z3.indexOf(f.attributeName))if(f.attributeName==="class"&&CF(f.target)){var d=Sf(Lg(f.target)),m=d.prefix,y=d.iconName;f.target.setAttribute(Ng,m||c),y&&f.target.setAttribute(Dg,y)}else kF(f.target)&&i(f.target)})}}),Zn&&cc.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function OF(){cc&&cc.disconnect()}function NF(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var o=i.split(":"),s=o[0],l=o.slice(1);return s&&l.length>0&&(r[s]=l.join(":").trim()),r},{})),n}function DF(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Sf(Lg(t));return i.prefix||(i.prefix=Lr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=fF(i.prefix,t.innerText)||$g(i.prefix,cp(t.innerText))),!i.iconName&&M.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function MF(t){var e=Vo(t.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return M.autoA11y&&(n?e["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||va()):(e["aria-hidden"]="true",e.focusable="false")),e}function LF(){return{iconName:null,title:null,titleId:null,prefix:null,transform:yn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function c1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=DF(t),r=n.iconName,i=n.prefix,o=n.rest,s=MF(t),l=dp("parseNodeAttributes",{},t),a=e.styleParser?NF(t):[];return N({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:yn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:a,attributes:s}},l)}var VF=rn.styles;function rb(t){var e=M.autoReplaceSvg==="nest"?c1(t,{styleParser:!1}):c1(t);return~e.extra.classes.indexOf($T)?qn("generateLayersText",t,e):qn("generateSvgReplacementMutation",t,e)}var Vr=new Set;Mg.map(function(t){Vr.add("fa-".concat(t))});Object.keys(ha[ce]).map(Vr.add.bind(Vr));Object.keys(ha[Ie]).map(Vr.add.bind(Vr));Vr=Ba(Vr);function f1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Zn)return Promise.resolve();var n=he.documentElement.classList,r=function(f){return n.add("".concat(Z0,"-").concat(f))},i=function(f){return n.remove("".concat(Z0,"-").concat(f))},o=M.autoFetchSvg?Vr:Mg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(VF));o.includes("fa")||o.push("fa");var s=[".".concat($T,":not([").concat(wi,"])")].concat(o.map(function(c){return".".concat(c,":not([").concat(wi,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Vo(t.querySelectorAll(s))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var a=zg.begin("onTree"),u=l.reduce(function(c,f){try{var d=rb(f);d&&c.push(d)}catch(m){FT||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){tb(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),a(),c()})}).catch(function(d){a(),f(d)})})}function FF(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;rb(t).then(function(n){n&&tb([n],e)})}function $F(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:hp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:hp(i||{})),t(r,N(N({},n),{},{mask:i}))}}var UF=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?yn:r,o=n.symbol,s=o===void 0?!1:o,l=n.mask,a=l===void 0?null:l,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,m=n.titleId,y=m===void 0?null:m,v=n.classes,_=v===void 0?[]:v,h=n.attributes,p=h===void 0?{}:h,g=n.styles,w=g===void 0?{}:g;if(e){var I=e.prefix,b=e.iconName,T=e.icon;return If(N({type:"icon"},e),function(){return Ei("beforeDOMElementCreation",{iconDefinition:e,params:n}),M.autoA11y&&(d?p["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(y||va()):(p["aria-hidden"]="true",p.focusable="false")),jg({icons:{main:pp(T),mask:a?pp(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:b,transform:N(N({},yn),i),symbol:s,title:d,maskId:c,titleId:y,extra:{attributes:p,styles:w,classes:_}})})}},jF={mixout:function(){return{icon:$F(UF)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=f1,n.nodeCallback=FF,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?he:r,o=n.callback,s=o===void 0?function(){}:o;return f1(i,s)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,s=r.titleId,l=r.prefix,a=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(m,y){Promise.all([mp(i,l),c.iconName?mp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var _=xg(v,2),h=_[0],p=_[1];m([n,jg({icons:{main:h,mask:p},prefix:l,iconName:i,transform:a,symbol:u,maskId:f,title:o,titleId:s,extra:d,watchable:!0})])}).catch(y)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.transform,l=n.styles,a=wf(l);a.length>0&&(i.style=a);var u;return Vg(s)&&(u=qn("generateAbstractTransformGrouping",{main:o,transform:s,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},zF={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return If({type:"layer"},function(){Ei("beforeDOMElementCreation",{assembler:n,params:r});var s=[];return n(function(l){Array.isArray(l)?l.map(function(a){s=s.concat(a.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Ba(o)).join(" ")},children:s}]})}}}},BF={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,s=r.classes,l=s===void 0?[]:s,a=r.attributes,u=a===void 0?{}:a,c=r.styles,f=c===void 0?{}:c;return If({type:"counter",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),SF({content:n.toString(),title:o,extra:{attributes:u,styles:f,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Ba(l))}})})}}}},HF={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?yn:i,s=r.title,l=s===void 0?null:s,a=r.classes,u=a===void 0?[]:a,c=r.attributes,f=c===void 0?{}:c,d=r.styles,m=d===void 0?{}:d;return If({type:"text",content:n},function(){return Ei("beforeDOMElementCreation",{content:n,params:r}),o1({content:n,transform:N(N({},yn),o),title:l,extra:{attributes:f,styles:m,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Ba(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,o=r.transform,s=r.extra,l=null,a=null;if(MT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();l=c.width/u,a=c.height/u}return M.autoA11y&&!i&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,o1({content:n.innerHTML,width:l,height:a,transform:o,title:i,extra:s,watchable:!0})])}}},WF=new RegExp('"',"ug"),d1=[1105920,1112319];function GF(t){var e=t.replace(WF,""),n=oF(e,0),r=n>=d1[0]&&n<=d1[1],i=e.length===2?e[0]===e[1]:!1;return{value:cp(i?e[0]:e),isSecondary:r||i}}function h1(t,e){var n="".concat(D3).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var o=Vo(t.children),s=o.filter(function(T){return T.getAttribute(up)===e})[0],l=Mr.getComputedStyle(t,e),a=l.getPropertyValue("font-family").match($3),u=l.getPropertyValue("font-weight"),c=l.getPropertyValue("content");if(s&&!a)return t.removeChild(s),r();if(a&&c!=="none"&&c!==""){var f=l.getPropertyValue("content"),d=~["Sharp"].indexOf(a[2])?Ie:ce,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?pa[d][a[2].toLowerCase()]:U3[d][u],y=GF(f),v=y.value,_=y.isSecondary,h=a[0].startsWith("FontAwesome"),p=$g(m,v),g=p;if(h){var w=dF(v);w.iconName&&w.prefix&&(p=w.iconName,m=w.prefix)}if(p&&!_&&(!s||s.getAttribute(Ng)!==m||s.getAttribute(Dg)!==g)){t.setAttribute(n,g),s&&t.removeChild(s);var I=LF(),b=I.extra;b.attributes[up]=e,mp(p,m).then(function(T){var C=jg(N(N({},I),{},{icons:{main:T,mask:Ug()},prefix:m,iconName:g,extra:b,watchable:!0})),L=he.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(L,t.firstChild):t.appendChild(L),L.outerHTML=C.map(function(V){return Wa(V)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function KF(t){return Promise.all([h1(t,"::before"),h1(t,"::after")])}function qF(t){return t.parentNode!==document.head&&!~L3.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(up)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function p1(t){if(Zn)return new Promise(function(e,n){var r=Vo(t.querySelectorAll("*")).filter(qF).map(KF),i=zg.begin("searchPseudoElements");nb(),Promise.all(r).then(function(){i(),vp(),e()}).catch(function(){i(),vp(),n()})})}var YF={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=p1,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?he:r;M.searchPseudoElements&&p1(i)}}},m1=!1,QF={mixout:function(){return{dom:{unwatch:function(){nb(),m1=!0}}}},hooks:function(){return{bootstrap:function(){u1(dp("mutationObserverCallbacks",{}))},noAuto:function(){OF()},watch:function(n){var r=n.observeMutationsRoot;m1?vp():u1(dp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},g1=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),s=o[0],l=o.slice(1).join("-");if(s&&l==="h")return r.flipX=!0,r;if(s&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(s){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},XF={mixout:function(){return{parse:{transform:function(n){return g1(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=g1(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(a," ").concat(u," ").concat(c)},d={transform:"translate(".concat(s/2*-1," -256)")},m={outer:l,inner:f,path:d};return{tag:"g",attributes:N({},m.outer),children:[{tag:"g",attributes:N({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),m.path)}]}]}}}},Cd={x:0,y:0,width:"100%",height:"100%"};function v1(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function JF(t){return t.tag==="g"?t.children:[t]}var ZF={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Sf(i.split(" ").map(function(s){return s.trim()})):Ug();return o.prefix||(o.prefix=Lr()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,s=n.mask,l=n.maskId,a=n.transform,u=o.width,c=o.icon,f=s.width,d=s.icon,m=X3({transform:a,containerWidth:f,iconWidth:u}),y={tag:"rect",attributes:N(N({},Cd),{},{fill:"white"})},v=c.children?{children:c.children.map(v1)}:{},_={tag:"g",attributes:N({},m.inner),children:[v1(N({tag:c.tag,attributes:N(N({},c.attributes),m.path)},v))]},h={tag:"g",attributes:N({},m.outer),children:[_]},p="mask-".concat(l||va()),g="clip-".concat(l||va()),w={tag:"mask",attributes:N(N({},Cd),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,h]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:JF(d)},w]};return r.push(I,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(p,")")},Cd)}),{children:r,attributes:i}}}},e5={provides:function(e){var n=!1;Mr.matchMedia&&(n=Mr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=N(N({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:N(N({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},s),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},t5={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},n5=[eF,jF,zF,BF,HF,YF,QF,XF,ZF,e5,t5];mF(n5,{mixoutsTo:$t});$t.noAuto;$t.config;$t.library;$t.dom;var yp=$t.parse;$t.findIconDefinition;$t.toHtml;var r5=$t.icon;$t.layer;$t.text;$t.counter;function y1(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?y1(Object(n),!0).forEach(function(r){Yi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y1(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function fc(t){"@babel/helpers - typeof";return fc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},fc(t)}function Yi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i5(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function o5(t,e){if(t==null)return{};var n=i5(t,e),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)r=o[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function _p(t){return s5(t)||a5(t)||l5(t)||u5()}function s5(t){if(Array.isArray(t))return wp(t)}function a5(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function l5(t,e){if(t){if(typeof t=="string")return wp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return wp(t,e)}}function wp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function u5(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function c5(t){var e,n=t.beat,r=t.fade,i=t.beatFade,o=t.bounce,s=t.shake,l=t.flash,a=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,m=t.inverse,y=t.border,v=t.listItem,_=t.flip,h=t.size,p=t.rotation,g=t.pull,w=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":s,"fa-flash":l,"fa-spin":a,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":m,"fa-border":y,"fa-li":v,"fa-flip":_===!0,"fa-flip-horizontal":_==="horizontal"||_==="both","fa-flip-vertical":_==="vertical"||_==="both"},Yi(e,"fa-".concat(h),typeof h<"u"&&h!==null),Yi(e,"fa-rotate-".concat(p),typeof p<"u"&&p!==null&&p!==0),Yi(e,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Yi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(w).map(function(I){return w[I]?I:null}).filter(function(I){return I})}function f5(t){return t=t-0,t===t}function ib(t){return f5(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var d5=["style"];function h5(t){return t.charAt(0).toUpperCase()+t.slice(1)}function p5(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ib(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?e[h5(i)]=o:e[i]=o,e},{})}function ob(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(a){return ob(t,a)}),i=Object.keys(e.attributes||{}).reduce(function(a,u){var c=e.attributes[u];switch(u){case"class":a.attrs.className=c,delete e.attributes.class;break;case"style":a.attrs.style=p5(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?a.attrs[u.toLowerCase()]=c:a.attrs[ib(u)]=c}return a},{attrs:{}}),o=n.style,s=o===void 0?{}:o,l=o5(n,d5);return i.attrs.style=mr(mr({},i.attrs.style),s),t.apply(void 0,[e.tag,mr(mr({},i.attrs),l)].concat(_p(r)))}var sb=!1;try{sb=!0}catch{}function m5(){if(!sb&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function _1(t){if(t&&fc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(yp.icon)return yp.icon(t);if(t===null)return null;if(t&&fc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function kd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Yi({},t,e):{}}var Fo=_n.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,o=t.className,s=t.title,l=t.titleId,a=t.maskId,u=_1(n),c=kd("classes",[].concat(_p(c5(t)),_p(o.split(" ")))),f=kd("transform",typeof t.transform=="string"?yp.transform(t.transform):t.transform),d=kd("mask",_1(r)),m=r5(u,mr(mr(mr(mr({},c),f),d),{},{symbol:i,title:s,titleId:l,maskId:a}));if(!m)return m5("Could not find icon",u),null;var y=m.abstract,v={ref:e};return Object.keys(t).forEach(function(_){Fo.defaultProps.hasOwnProperty(_)||(v[_]=t[_])}),g5(y[0],v)});Fo.displayName="FontAwesomeIcon";Fo.propTypes={beat:j.bool,border:j.bool,beatFade:j.bool,bounce:j.bool,className:j.string,fade:j.bool,flash:j.bool,mask:j.oneOfType([j.object,j.array,j.string]),maskId:j.string,fixedWidth:j.bool,inverse:j.bool,flip:j.oneOf([!0,!1,"horizontal","vertical","both"]),icon:j.oneOfType([j.object,j.array,j.string]),listItem:j.bool,pull:j.oneOf(["right","left"]),pulse:j.bool,rotation:j.oneOf([0,90,180,270]),shake:j.bool,size:j.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:j.bool,spinPulse:j.bool,spinReverse:j.bool,symbol:j.oneOfType([j.bool,j.string]),title:j.string,titleId:j.string,transform:j.oneOfType([j.string,j.object]),swapOpacity:j.bool};Fo.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var g5=ob.bind(null,_n.createElement),ab={prefix:"fas",iconName:"eye-slash",icon:[640,512,[],"f070","M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]},lb={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]};const ub="/assets/registerimg-eNUWWuIE.png";function v5(){const[t,e]=_n.useState({email:"",password:""}),[n,r]=_n.useState(!1),[i,o]=_n.useState(!1),s=vm();function l(c){e(f=>({...f,[c.target.name]:c.target.value}))}async function a(c){c.preventDefault();const f=t.email,d=t.password;try{await ED(RT,f,d),s("/home")}catch(m){r(!0),console.error("Login failed:",m.message)}}function u(){o(c=>!c)}return S.jsxs("div",{className:"formpage",children:[S.jsx("img",{className:"registerimg",src:ub,alt:"Profile"}),S.jsxs("div",{className:"formbox",children:[S.jsxs("div",{className:"pageinfo",children:[S.jsx("span",{className:"logo",children:"SneekyChats"}),S.jsx("span",{className:"info",children:"Welcome to Chatting with full privacy"})]}),S.jsxs("form",{className:"form",onSubmit:a,children:[S.jsx("input",{type:"email",onChange:l,name:"email",placeholder:"Your Email"}),S.jsxs("div",{className:"password-input-container",children:[S.jsx("input",{type:i?"text":"password",onChange:l,name:"password",placeholder:"Your Password"}),S.jsx(Fo,{icon:i?ab:lb,className:"password-toggle-icon",onClick:u})]}),S.jsx("div",{className:"alreadylogin",children:S.jsxs("div",{children:["Do not have an account?",S.jsx(ym,{to:"/",children:"Register-Here"})]})}),n&&S.jsx("span",{children:"No account detected"}),S.jsx("button",{className:"registerbutton",children:"Login"})]})]})]})}function y5(){const[t,e]=_n.useState({name:"",email:"",password:""}),[n,r]=_n.useState(!1),[i,o]=_n.useState(!1),s=vm();function l(c){e(f=>({...f,[c.target.name]:c.target.value}))}async function a(c){c.preventDefault();const{name:f,email:d,password:m}=t;try{const y=await wD(RT,d,m);console.log(y.user),await ID(y.user,{displayName:f}),s("/login"),await E3(a3(T3,"users",y.user.uid),{uid:y.user.uid,name:f,email:d})}catch{r(!0)}}function u(){o(c=>!c)}return S.jsxs("div",{className:"formpage",children:[S.jsx("img",{className:"registerimg",src:ub,alt:"Profile"}),S.jsxs("div",{className:"formbox",children:[S.jsxs("div",{className:"pageinfo",children:[S.jsx("span",{className:"logo",children:"Register"}),S.jsx("span",{className:"info",children:"Welcome to Chatting with full privacy"})]}),S.jsxs("form",{className:"form",onSubmit:a,children:[S.jsx("input",{type:"text",onChange:l,name:"name",placeholder:"Name"}),S.jsx("input",{type:"email",onChange:l,name:"email",placeholder:"Email"}),S.jsxs("div",{className:"password-input-container",children:[S.jsx("input",{type:i?"text":"password",onChange:l,name:"password",placeholder:"Password"}),S.jsx(Fo,{icon:i?ab:lb,className:"password-toggle-icon",onClick:u})]}),S.jsx("div",{className:"alreadylogin",children:S.jsxs("div",{children:["Already have an account?",S.jsx(ym,{to:"/login",children:"Login-Here"})]})}),S.jsx("button",{className:"registerbutton",children:"Register"}),n&&S.jsx("span",{children:"Something went wrong"})]})]})]})}function _5(){return S.jsx(NP,{children:S.jsx(CP,{children:S.jsxs(rr,{path:"/",children:[S.jsx(rr,{path:"register",element:S.jsx(y5,{})}),S.jsx(rr,{path:"login",element:S.jsx(v5,{})}),S.jsx(rr,{path:"bookDoc",element:S.jsx(WP,{})}),S.jsx(rr,{path:"bookApp",element:S.jsx(GP,{})}),S.jsx(rr,{path:"showApp",element:S.jsx(KP,{})}),S.jsx(rr,{path:"symptom",element:S.jsx(Hx,{})})]})})})}Ad.createRoot(document.getElementById("root")).render(S.jsx(_n.StrictMode,{children:S.jsx(_5,{})}));
