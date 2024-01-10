import{c}from"./currency.js@2.0.4--or6eeOG.js";import"./dayjs@1.11.10-A-QuG2Ol.js";import{u as g,a as S}from"./hooks-GPnuRIeB.js";import"./awesome-qr@2.1.5-rc.0-UnPo3EFD.js";import"./vue-hooks-plus@1.8.5_vue@3.4.0-UGgZVZ2w.js";import"./lodash@4.17.21-yUHHMES2.js";import"./js-cookie@3.0.5-bc0KQLgp.js";import"./screenfull@5.2.0-q9gEF-YC.js";import"./qs@6.11.2-wwOruwhc.js";import"./print-js@1.6.0-gYKv6oGQ.js";import{c as h}from"./lodash-es@4.17.21-xgd1l9mE.js";var b={VITE_APP_URL:"/",VITE_APP_OFFICE_PROXY_URL:"https://office.yka.one/",VITE_APP_OFFICE_SCRIPT_URL:"https://office.yka.one/web-apps/apps/api/documents/api.js",BASE_URL:"/ray-template/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const B=()=>b,E=(e,r)=>{const t=document.createElement("a");t.href=e,t.download=r,t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},p=(e,r)=>Object.prototype.toString.call(e).includes(r),T=(e=16,r=62)=>{const t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),n=[],s=window.crypto||window.msCrypto;let i=0;for(i=0;i<e;i++){const o=new Uint32Array(1);s.getRandomValues(o);const a=o[0]%r;n.push(t[a])}return n.join("")},j=(e,r)=>new Promise((t,n)=>{let s;try{if(typeof e=="string")return E(e,r),t();if(e instanceof ArrayBuffer)s=new Blob([new Uint8Array(e)],{type:"application/octet-stream"});else if(e instanceof File||e instanceof Blob)s=e;else return n(new Error("downloadAnyFile: Unsupported data type."));const i=URL.createObjectURL(s),o=document.createElement("a");o.href=i,o.download=r,o.style.display="none";const a=()=>{URL.revokeObjectURL(i),document.body.removeChild(o)};o.addEventListener("load",()=>(a(),t())),o.addEventListener("error",d=>(a(),n(d))),document.body.appendChild(o),o.click()}catch(i){return n(i)}}),v=(e,r)=>{if(!e)return{};const t=Array.isArray(r)?r:[r];return t.length&&t.forEach(n=>{delete e[n]}),e},O=(e,r)=>{if(!e)return{};const t=Array.isArray(r)?r:[r],n={};return t.length&&t.forEach(s=>{n[s]=e[s]}),n};function q(e,r,t="sessionStorage"){if(!e){console.error("Failed to set stored data: key is empty or undefined");return}try{const n=JSON.stringify(r);t==="localStorage"?window.localStorage.setItem(e,n):window.sessionStorage.setItem(e,n)}catch(n){console.error(`Failed to set stored data for key '${e}'`,n)}}function N(e,r="sessionStorage",t){try{const n=r==="localStorage"?window.localStorage.getItem(e):window.sessionStorage.getItem(e);return n===null?t??null:JSON.parse(n)}catch(n){return console.error(`Failed to get stored data for key '${e}'`,n),t??null}}function W(e,r="sessionStorage"){switch(e){case"all":window.window.localStorage.clear(),window.sessionStorage.clear();break;case"all-sessionStorage":window.sessionStorage.clear();break;case"all-localStorage":window.localStorage.clear();break;default:if(!e){console.error("Failed to remove stored data: key is empty or undefined");return}r==="localStorage"?window.localStorage.removeItem(e):window.sessionStorage.removeItem(e)}}const J=(e,r)=>{var i;const{domToImageOptions:t,printOptions:n}=r??{},{create:s}=S(e,t);window==null||window.$loadingBar.start(),(i=s("jpeg"))==null||i.then(o=>{const{print:a}=g(o,{type:"image",base64:!0,targetStyles:["*"],...v(n,["type","base64"])});a()}).catch(()=>{window==null||window.$loadingBar.error()}).finally(()=>{window==null||window.$loadingBar.finish()})},A={validCSSUnit:/^\d+(\.\d+)?(px|em|rem|%|vw|vh|vmin|vmax|cm|mm|in|pt|pc|ch|ex|q|s|ms|deg|rad|turn|grad|hz|khz|dpi|dpcm|dppx|fr|auto)$/},X=(e,r)=>{const t=()=>{const s=u(e);s&&r.trim().split(" ").forEach(o=>{o&&s.classList.add(o)})},n=Vue.watch(()=>u(e),t,{immediate:!0});f(n)},G=(e,r)=>{const t=()=>{const s=u(e);if(s)if(r==="removeAllClass"){const i=s.classList;i.forEach(o=>i.remove(o))}else r.trim().split(" ").forEach(o=>{o&&s.classList.remove(o)})},n=Vue.watch(()=>u(e),t,{immediate:!0});f(n)},M=(e,r)=>{const t=Vue.ref(!1),n=()=>{const i=u(e);if(!i)t.value=!1;else{const o=i.className,a=r.trim().split(" ").filter(d=>d!=="");t.value=o.includes(a.join(" "))}},s=Vue.watch(()=>u(e),n,{immediate:!0});return f(s),t},Y=(e,r)=>{let t;const n=()=>{const i=u(e);i&&(p(r,"String")?t=r.split(";").reduce((o,a)=>{const[d,w]=a.split(":").map(y=>y.trim());return d&&w&&(o[d]=w),o},{}):t=r,Object.keys(t).forEach(o=>{const a=t[o];o in i.style&&(i.style[o]=a)}))},s=Vue.watch(()=>u(e),n,{immediate:!0});f(s)},H=(e,r=1)=>{const t=/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i,n=/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/i,s=/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(?:\.\d+)?)\)$/i;let i;if(t.test(e)){const o=e.substring(1);i="rgb("+[parseInt(o.substring(0,2),16),parseInt(o.substring(2,4),16),parseInt(o.substring(4,6),16)].join(", ")+")"}else return n.test(e)||s.test(e),e;return i&&!i.startsWith("rgba")&&(i=i.replace("rgb","rgba").replace(")",`, ${r})`)),i},Q=e=>{if(!e)return null;const r=e.startsWith("attr:")?`[${e.replace("attr:","")}]`:e;try{return Array.from(document.querySelectorAll(r))}catch(t){return console.error(`Failed to get elements for selector '${e}'`,t),null}},Z=(e,r="px")=>typeof e=="number"?e.toString()+r:p(e,"String")&&A.validCSSUnit.test(e)?e:e+r,l={precision:8,decimal:"."},m=(e,r,t)=>e!=null&&e.length?e.length===1?c(e[0],l):e.reduce((s,i,o,a)=>(s=t==null?void 0:t(s,i,o,a),s),r):0,C=(e,r,t="number")=>{const n=Object.assign({},l,r),s=c(e,n);return t==="number"?s.value:s.toString()},z=(...e)=>e.length===1?c(e[0],l).add(0):m(e,0,(r,t)=>c(r,l).add(t)),K=(...e)=>{if(e.length===1)return c(e[0],l).subtract(0);if(e.length===2){const[n,s]=e;return c(n,l).subtract(s)}const r=h(e),t=r.shift();return r.length?m(r,t,(n,s)=>c(n,l).subtract(s)):t},ee=(...e)=>e.length===1?c(e[0],l).multiply(1):m(e,1,(r,t)=>c(r,l).multiply(t)),te=(...e)=>{if(e.length===1)return c(e[0],l).divide(1);if(e.length===2){const[n,s]=e;return c(n,l).divide(s)}const r=h(e),t=r.shift();return m(r,t,(n,s)=>c(n,l).divide(s))},re=(e,r)=>r<=1?[e||0]:e?c(e,l).distribute(r).map(n=>C(n)):new Array(r).fill(0);function I(e,...r){if(Array.isArray(e))e.forEach(t=>I(t,...r));else return e(...r)}function u(e,r){var n;if(!e)return r;let t;return typeof e=="function"?t=e():Vue.isRef(e)?t=((n=e.value)==null?void 0:n.$el)??e.value:t=e,t}function ne(e,r){if(!e){const{defaultElement:t=null}=r??{};return typeof t=="function"?t:()=>t}if(typeof e=="string"||p(e,"Object"))return()=>e;if(typeof e=="function")return e}function f(e){return Vue.getCurrentScope()?(Vue.onScopeDispose(e),!0):!1}function se(e,r){const t=Vue.watchEffect(e,r);f(t)}export{ee as A,te as B,Z as a,I as b,H as c,E as d,T as e,j as f,N as g,O as h,p as i,W as j,B as k,G as l,X as m,M as n,f as o,J as p,Q as q,ne as r,q as s,Y as t,u,C as v,se as w,re as x,z as y,K as z};