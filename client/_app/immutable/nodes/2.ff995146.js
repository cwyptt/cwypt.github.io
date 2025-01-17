import{s as Y,f as p,a as D,l as N,g as _,h as k,d as h,c as I,m as O,G as Z,j as f,B as Q,i as C,r as u,u as B,n as x,v as X,x as rt,H as st,k as ce,w as ue,z as Te,C as He,D as Ve,E as Se,I as we,e as te,o as Ae,J as at,K as it,L as G,M as qe,N as lt,O as ot}from"../chunks/scheduler.055b1430.js";import{S as W,i as K,b as M,d as L,m as P,a as V,t as A,e as j,g as Me,c as Le,f as Ue}from"../chunks/index.ca9cb631.js";import{p as ct}from"../chunks/stores.b54e8791.js";import{c as Be}from"../chunks/cursorStore.b18ebb6d.js";function Ge(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}const ft=!1,ut=!0,os=Object.freeze(Object.defineProperty({__proto__:null,csr:ut,ssr:ft},Symbol.toStringTag,{value:"Module"}));function ht(n){let e,t,s,l,r,i,c,a,o,d;return{c(){e=p("li"),t=p("button"),s=p("div"),l=p("img"),i=D(),c=p("h5"),a=N(n[0]),this.h()},l(v){e=_(v,"LI",{class:!0});var g=k(e);t=_(g,"BUTTON",{class:!0});var w=k(t);s=_(w,"DIV",{class:!0});var H=k(s);l=_(H,"IMG",{src:!0,alt:!0,class:!0}),H.forEach(h),i=I(w),c=_(w,"H5",{class:!0});var m=k(c);a=O(m,n[0]),m.forEach(h),w.forEach(h),g.forEach(h),this.h()},h(){Z(l.src,r="icons/"+(n[0]==="/"?"home":n[0])+".svg")||f(l,"src",r),f(l,"alt",n[0]),f(l,"class","svelte-1l3g7ha"),f(s,"class","icon-container svelte-1l3g7ha"),f(c,"class","svelte-1l3g7ha"),f(t,"class","svelte-1l3g7ha"),f(e,"class","svelte-1l3g7ha"),Q(e,"selected",n[1])},m(v,g){C(v,e,g),u(e,t),u(t,s),u(s,l),u(t,i),u(t,c),u(c,a),o||(d=B(t,"click",n[2]),o=!0)},p(v,[g]){g&1&&!Z(l.src,r="icons/"+(v[0]==="/"?"home":v[0])+".svg")&&f(l,"src",r),g&1&&f(l,"alt",v[0]),g&1&&x(a,v[0]),g&2&&Q(e,"selected",v[1])},i:X,o:X,d(v){v&&h(e),o=!1,d()}}}function dt(n,e,t){let s;rt(n,ct,o=>t(4,s=o));let{href:l="#"}=e,{section:r="home"}=e,{isSelected:i}=e,c=s.url.pathname;async function a(){c!=="/"&&(window.location.href="/");const o=document.querySelector(l);o&&o.scrollIntoView(!0)}return n.$$set=o=>{"href"in o&&t(3,l=o.href),"section"in o&&t(0,r=o.section),"isSelected"in o&&t(1,i=o.isSelected)},[r,i,a,l]}class Ce extends W{constructor(e){super(),K(this,e,dt,ht,Y,{href:3,section:0,isSelected:1})}}function mt(n){let e=!1,t=()=>{e=!1},s,l,r,i,c,a,o,d,v,g,w,H;return st(n[1]),c=new Ce({props:{href:"#home",section:"/",isSelected:n[0]<350}}),o=new Ce({props:{href:"#about",section:"about",isSelected:n[0]>350&&n[0]<675}}),v=new Ce({props:{href:"#work",section:"work",isSelected:n[0]>675}}),{c(){l=p("nav"),r=p("div"),i=p("ul"),M(c.$$.fragment),a=D(),M(o.$$.fragment),d=D(),M(v.$$.fragment),this.h()},l(m){l=_(m,"NAV",{class:!0});var y=k(l);r=_(y,"DIV",{class:!0});var b=k(r);i=_(b,"UL",{class:!0});var $=k(i);L(c.$$.fragment,$),a=I($),L(o.$$.fragment,$),d=I($),L(v.$$.fragment,$),$.forEach(h),b.forEach(h),y.forEach(h),this.h()},h(){f(i,"class","svelte-1rmippg"),f(r,"class","svelte-1rmippg"),Q(r,"scrolled",n[0]>20),f(l,"class","svelte-1rmippg")},m(m,y){C(m,l,y),u(l,r),u(r,i),P(c,i,null),u(i,a),P(o,i,null),u(i,d),P(v,i,null),g=!0,w||(H=B(window,"scroll",()=>{e=!0,clearTimeout(s),s=setTimeout(t,100),n[1]()}),w=!0)},p(m,[y]){y&1&&!e&&(e=!0,clearTimeout(s),scrollTo(window.pageXOffset,m[0]),s=setTimeout(t,100));const b={};y&1&&(b.isSelected=m[0]<350),c.$set(b);const $={};y&1&&($.isSelected=m[0]>350&&m[0]<675),o.$set($);const E={};y&1&&(E.isSelected=m[0]>675),v.$set(E),(!g||y&1)&&Q(r,"scrolled",m[0]>20)},i(m){g||(V(c.$$.fragment,m),V(o.$$.fragment,m),V(v.$$.fragment,m),g=!0)},o(m){A(c.$$.fragment,m),A(o.$$.fragment,m),A(v.$$.fragment,m),g=!1},d(m){m&&h(l),j(c),j(o),j(v),w=!1,H()}}}function vt(n,e,t){let s;function l(){t(0,s=window.pageYOffset)}return[s,l]}class pt extends W{constructor(e){super(),K(this,e,vt,mt,Y,{})}}function _t(n){let e,t,s=`perspective(500px) ${n[0]?"scale(0.9)":""} rotateX(${n[1]}deg) rotateY(${n[2]}deg)`,l,r;return{c(){e=p("div"),t=p("div"),this.h()},l(i){e=_(i,"DIV",{class:!0});var c=k(e);t=_(c,"DIV",{role:!0,"aria-label":!0,class:!0}),k(t).forEach(h),c.forEach(h),this.h()},h(){f(t,"role","img"),f(t,"aria-label","Cat looking out the window as it rains"),f(t,"class","img svelte-1g8zu2z"),ce(t,"background-image","url(cat_window_rain.gif)"),ce(t,"transform",s),f(e,"class","img-container svelte-1g8zu2z")},m(i,c){C(i,e,c),u(e,t),l||(r=[B(t,"mousemove",n[3]),B(t,"mouseleave",n[4])],l=!0)},p(i,[c]){c&7&&s!==(s=`perspective(500px) ${i[0]?"scale(0.9)":""} rotateX(${i[1]}deg) rotateY(${i[2]}deg)`)&&ce(t,"transform",s)},i:X,o:X,d(i){i&&h(e),l=!1,ue(r)}}}function gt(n,e,t){let s,l,r;function i(a){t(0,s=!0);let o=a.target;t(2,r=13*((a.offsetX-o.clientHeight/2)/o.clientWidth)),t(1,l=-13*((a.offsetY-o.clientWidth/2)/o.clientHeight))}function c(){t(0,s=!1),t(2,r=0),t(1,l=0)}return[s,l,r,i,c]}class $t extends W{constructor(e){super(),K(this,e,gt,_t,Y,{})}}function wt(n){let e,t,s,l,r,i;const c=n[2].default,a=Te(c,n,n[1],null);return{c(){e=p("button"),t=p("div"),s=D(),a&&a.c(),this.h()},l(o){e=_(o,"BUTTON",{class:!0});var d=k(e);t=_(d,"DIV",{class:!0}),k(t).forEach(h),s=I(d),a&&a.l(d),d.forEach(h),this.h()},h(){f(t,"class","svelte-10il5k0"),Q(t,"side",n[0]),f(e,"class","svelte-10il5k0"),Q(e,"button-with-side",n[0])},m(o,d){C(o,e,d),u(e,t),u(e,s),a&&a.m(e,null),l=!0,r||(i=[B(e,"click",n[3]),B(e,"keypress",n[4])],r=!0)},p(o,[d]){(!l||d&1)&&Q(t,"side",o[0]),a&&a.p&&(!l||d&2)&&He(a,c,o,o[1],l?Se(c,o[1],d,null):Ve(o[1]),null),(!l||d&1)&&Q(e,"button-with-side",o[0])},i(o){l||(V(a,o),l=!0)},o(o){A(a,o),l=!1},d(o){o&&h(e),a&&a.d(o),r=!1,ue(i)}}}function bt(n,e,t){let{$$slots:s={},$$scope:l}=e,{side:r=!1}=e;function i(a){we.call(this,n,a)}function c(a){we.call(this,n,a)}return n.$$set=a=>{"side"in a&&t(0,r=a.side),"$$scope"in a&&t(1,l=a.$$scope)},[r,l,s,i,c]}class kt extends W{constructor(e){super(),K(this,e,bt,wt,Y,{side:0})}}function Et(n){let e;const t=n[4].default,s=Te(t,n,n[3],null);return{c(){s&&s.c()},l(l){s&&s.l(l)},m(l,r){s&&s.m(l,r),e=!0},p(l,r){s&&s.p&&(!e||r&8)&&He(s,t,l,l[3],e?Se(t,l[3],r,null):Ve(l[3]),null)},i(l){e||(V(s,l),e=!0)},o(l){A(s,l),e=!1},d(l){s&&s.d(l)}}}function yt(n){let e,t,s,l,r,i;const c=n[4].default,a=Te(c,n,n[3],null);return{c(){e=p("div"),t=p("span"),s=N(n[0]),l=D(),r=p("span"),a&&a.c(),this.h()},l(o){e=_(o,"DIV",{class:!0});var d=k(e);t=_(d,"SPAN",{class:!0});var v=k(t);s=O(v,n[0]),v.forEach(h),l=I(d),r=_(d,"SPAN",{class:!0});var g=k(r);a&&a.l(g),g.forEach(h),d.forEach(h),this.h()},h(){f(t,"class","tooltip svelte-wno0w5"),Q(t,"active",n[1]),f(r,"class","tooltip-slot"),f(e,"class","tooltip-wrapper svelte-wno0w5")},m(o,d){C(o,e,d),u(e,t),u(t,s),u(e,l),u(e,r),a&&a.m(r,null),i=!0},p(o,d){(!i||d&1)&&x(s,o[0]),(!i||d&2)&&Q(t,"active",o[1]),a&&a.p&&(!i||d&8)&&He(a,c,o,o[3],i?Se(c,o[3],d,null):Ve(o[3]),null)},i(o){i||(V(a,o),i=!0)},o(o){A(a,o),i=!1},d(o){o&&h(e),a&&a.d(o)}}}function Dt(n){let e,t,s,l;const r=[yt,Et],i=[];function c(a,o){return a[2]&&a[0]?0:1}return e=c(n),t=i[e]=r[e](n),{c(){t.c(),s=te()},l(a){t.l(a),s=te()},m(a,o){i[e].m(a,o),C(a,s,o),l=!0},p(a,[o]){let d=e;e=c(a),e===d?i[e].p(a,o):(Me(),A(i[d],1,1,()=>{i[d]=null}),Le(),t=i[e],t?t.p(a,o):(t=i[e]=r[e](a),t.c()),V(t,1),t.m(s.parentNode,s))},i(a){l||(V(t),l=!0)},o(a){A(t),l=!1},d(a){a&&h(s),i[e].d(a)}}}function It(n,e,t){let{$$slots:s={},$$scope:l}=e,{tip:r=""}=e,{active:i=!1}=e,c=!1;return Ae(()=>t(2,c=!0)),n.$$set=a=>{"tip"in a&&t(0,r=a.tip),"active"in a&&t(1,i=a.active),"$$scope"in a&&t(3,l=a.$$scope)},[r,i,c,l,s]}class fe extends W{constructor(e){super(),K(this,e,It,Dt,Y,{tip:0,active:1})}}function Ye(n,{delay:e=0,duration:t=400,easing:s=at}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:r=>`opacity: ${r*l}`}}function We(n){let e,t,s,l='<h2 id="modal-title" class="sr-only svelte-h0qck2">Resume Viewer</h2>',r,i,c,a,o,d,v,g="Download Resume",w,H,m,y;return{c(){e=p("button"),t=p("article"),s=p("header"),s.innerHTML=l,r=D(),i=p("div"),c=p("iframe"),o=D(),d=p("footer"),v=p("button"),v.textContent=g,this.h()},l(b){e=_(b,"BUTTON",{class:!0,type:!0,"aria-label":!0});var $=k(e);t=_($,"ARTICLE",{class:!0,"aria-labelledby":!0,role:!0});var E=k(t);s=_(E,"HEADER",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-1nkturg"&&(s.innerHTML=l),r=I(E),i=_(E,"DIV",{class:!0,role:!0,"aria-label":!0});var S=k(i);c=_(S,"IFRAME",{title:!0,src:!0,width:!0,height:!0,class:!0}),k(c).forEach(h),S.forEach(h),o=I(E),d=_(E,"FOOTER",{class:!0});var T=k(d);v=_(T,"BUTTON",{type:!0,class:!0,"data-svelte-h":!0}),G(v)!=="svelte-1qmdnwa"&&(v.textContent=g),T.forEach(h),E.forEach(h),$.forEach(h),this.h()},h(){f(s,"class","svelte-h0qck2"),f(c,"title","Resume PDF Viewer"),Z(c.src,a=`${n[1]}`)||f(c,"src",a),f(c,"width","100%"),f(c,"height","100%"),f(c,"class","svelte-h0qck2"),f(i,"class","pdf-wrapper svelte-h0qck2"),f(i,"role","region"),f(i,"aria-label","PDF Document Viewer"),f(v,"type","button"),f(v,"class","download-button svelte-h0qck2"),f(d,"class","svelte-h0qck2"),f(t,"class","modal svelte-h0qck2"),f(t,"aria-labelledby","modal-title"),f(t,"role","main"),f(e,"class","backdrop svelte-h0qck2"),f(e,"type","button"),f(e,"aria-label","Close modal")},m(b,$){C(b,e,$),u(e,t),u(t,s),u(t,r),u(t,i),u(i,c),u(t,o),u(t,d),u(d,v),H=!0,m||(y=[B(i,"mouseenter",n[2]),B(i,"mouseleave",n[3]),B(v,"click",n[5]),B(e,"click",n[4])],m=!0)},p(b,$){(!H||$&2&&!Z(c.src,a=`${b[1]}`))&&f(c,"src",a)},i(b){H||(b&&st(()=>{H&&(w||(w=Ue(e,Ye,{duration:200},!0)),w.run(1))}),H=!0)},o(b){b&&(w||(w=Ue(e,Ye,{duration:200},!1)),w.run(0)),H=!1},d(b){b&&h(e),b&&w&&w.end(),m=!1,ue(y)}}}function Ct(n){let e,t=n[0]&&We(n);return{c(){t&&t.c(),e=te()},l(s){t&&t.l(s),e=te()},m(s,l){t&&t.m(s,l),C(s,e,l)},p(s,[l]){s[0]?t?(t.p(s,l),l&1&&V(t,1)):(t=We(s),t.c(),V(t,1),t.m(e.parentNode,e)):t&&(Me(),A(t,1,1,()=>{t=null}),Le())},i(s){V(t)},o(s){A(t)},d(s){s&&h(e),t&&t.d(s)}}}function Ke(n){{n.preventDefault();return}}function Tt(n,e,t){const s=it();let{isOpen:l=!1}=e,{pdfUrl:r="/api/v1/resume"}=e,i=null,c=0;function a(m){const y=["Space","ArrowUp","ArrowDown","PageUp","PageDown","Home","End"];{y.includes(m.code)&&m.preventDefault();return}}function o(){c=window.scrollY,document.documentElement.classList.add("modal-open"),window.addEventListener("wheel",Ke,{passive:!1}),window.addEventListener("keydown",a)}function d(){document.documentElement.classList.remove("modal-open"),window.removeEventListener("wheel",Ke),window.removeEventListener("keydown",a),window.scrollTo(0,c)}function v(){Be.set(!1)}function g(){Be.set(!0)}function w(){s("close"),d(),i&&i.focus()}async function H(){try{const y=await(await fetch(r)).blob(),b=window.URL.createObjectURL(y),$=document.createElement("a");$.href=b,$.download="alex-hanson-resume.pdf",document.body.appendChild($),$.click(),document.body.removeChild($),window.URL.revokeObjectURL(b)}catch(m){console.error("Error downloading PDF:",m),alert("Failed to download resume. Please try again.")}}return Ae(()=>()=>{l&&d()}),n.$$set=m=>{"isOpen"in m&&t(0,l=m.isOpen),"pdfUrl"in m&&t(1,r=m.pdfUrl)},n.$$.update=()=>{n.$$.dirty&1&&l&&(i=document.activeElement,o())},[l,r,v,g,w,H]}class Ht extends W{constructor(e){super(),K(this,e,Tt,Ct,Y,{isOpen:0,pdfUrl:1})}}function Vt(n){let e,t,s,l,r,i,c;return{c(){e=p("div"),t=p("a"),s=p("img"),this.h()},l(a){e=_(a,"DIV",{class:!0});var o=k(e);t=_(o,"A",{href:!0,target:!0,rel:!0,draggable:!0,class:!0});var d=k(t);s=_(d,"IMG",{src:!0,alt:!0,class:!0}),d.forEach(h),o.forEach(h),this.h()},h(){Z(s.src,l="icons/"+n[0]+".svg")||f(s,"src",l),f(s,"alt",n[0]),f(s,"class","svelte-1ov8zhe"),f(t,"href",n[1]),f(t,"target","_blank"),f(t,"rel","noreferrer"),f(t,"draggable","false"),f(t,"class",r=qe(n[3])+" svelte-1ov8zhe"),f(e,"class","svelte-1ov8zhe")},m(a,o){C(a,e,o),u(e,t),u(t,s),i||(c=[B(t,"dragstart",lt(n[6])),B(t,"mousedown",At),B(t,"click",n[5])],i=!0)},p(a,o){o&1&&!Z(s.src,l="icons/"+a[0]+".svg")&&f(s,"src",l),o&1&&f(s,"alt",a[0]),o&2&&f(t,"href",a[1]),o&8&&r!==(r=qe(a[3])+" svelte-1ov8zhe")&&f(t,"class",r)},d(a){a&&h(e),i=!1,ue(c)}}}function Xe(n){let e,t;return e=new Ht({props:{isOpen:n[4]}}),e.$on("close",n[7]),{c(){M(e.$$.fragment)},l(s){L(e.$$.fragment,s)},m(s,l){P(e,s,l),t=!0},p(s,l){const r={};l&16&&(r.isOpen=s[4]),e.$set(r)},i(s){t||(V(e.$$.fragment,s),t=!0)},o(s){A(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function St(n){let e,t,s,l;e=new fe({props:{tip:n[2],$$slots:{default:[Vt]},$$scope:{ctx:n}}});let r=n[4]&&Xe(n);return{c(){M(e.$$.fragment),t=D(),r&&r.c(),s=te()},l(i){L(e.$$.fragment,i),t=I(i),r&&r.l(i),s=te()},m(i,c){P(e,i,c),C(i,t,c),r&&r.m(i,c),C(i,s,c),l=!0},p(i,[c]){const a={};c&4&&(a.tip=i[2]),c&267&&(a.$$scope={dirty:c,ctx:i}),e.$set(a),i[4]?r?(r.p(i,c),c&16&&V(r,1)):(r=Xe(i),r.c(),V(r,1),r.m(s.parentNode,s)):r&&(Me(),A(r,1,1,()=>{r=null}),Le())},i(i){l||(V(e.$$.fragment,i),V(r),l=!0)},o(i){A(e.$$.fragment,i),A(r),l=!1},d(i){i&&(h(t),h(s)),j(e,i),r&&r.d(i)}}}function At(n){n.detail>1&&n.preventDefault()}function Mt(n,e,t){let{icon:s="Github"}=e,{link:l=""}=e,{tip:r=""}=e,{size:i="normal"}=e,c=!1;function a(v){s.toLowerCase()==="resume"&&(v.preventDefault(),t(4,c=!0))}function o(v){we.call(this,n,v)}const d=()=>t(4,c=!1);return n.$$set=v=>{"icon"in v&&t(0,s=v.icon),"link"in v&&t(1,l=v.link),"tip"in v&&t(2,r=v.tip),"size"in v&&t(3,i=v.size)},[s,l,r,i,c,a,o,d]}class $e extends W{constructor(e){super(),K(this,e,Mt,St,Y,{icon:0,link:1,tip:2,size:3})}}function Lt(n){let e,t,s,l,r,i,c,a,o,d="|",v,g,w,H;return s=new $e({props:{icon:"github",tip:"cwyptt",link:"https://github.com/cwyptt",size:n[0]}}),r=new $e({props:{icon:"linkedin",tip:"alexdavidhanson",link:"https://linkedin.com/in/alexdavidhanson",size:n[0]}}),c=new $e({props:{icon:"email",tip:"alex.d.hanson@outlook.com",link:"mailto:alex.d.hanson@outlook.com",size:n[0]}}),w=new $e({props:{icon:"resume",tip:"View Resume",link:"/api/v1/resume",size:n[0]}}),{c(){e=p("div"),t=p("div"),M(s.$$.fragment),l=D(),M(r.$$.fragment),i=D(),M(c.$$.fragment),a=D(),o=p("div"),o.textContent=d,v=D(),g=p("div"),M(w.$$.fragment),this.h()},l(m){e=_(m,"DIV",{class:!0});var y=k(e);t=_(y,"DIV",{class:!0});var b=k(t);L(s.$$.fragment,b),l=I(b),L(r.$$.fragment,b),i=I(b),L(c.$$.fragment,b),b.forEach(h),a=I(y),o=_(y,"DIV",{class:!0,"aria-hidden":!0,"data-svelte-h":!0}),G(o)!=="svelte-kpl3u1"&&(o.textContent=d),v=I(y),g=_(y,"DIV",{class:!0});var $=k(g);L(w.$$.fragment,$),$.forEach(h),y.forEach(h),this.h()},h(){f(t,"class","main-socials svelte-1aq6saw"),f(o,"class","separator svelte-1aq6saw"),f(o,"aria-hidden","true"),f(g,"class","resume-icon svelte-1aq6saw"),f(e,"class","socials-container svelte-1aq6saw")},m(m,y){C(m,e,y),u(e,t),P(s,t,null),u(t,l),P(r,t,null),u(t,i),P(c,t,null),u(e,a),u(e,o),u(e,v),u(e,g),P(w,g,null),H=!0},p(m,[y]){const b={};y&1&&(b.size=m[0]),s.$set(b);const $={};y&1&&($.size=m[0]),r.$set($);const E={};y&1&&(E.size=m[0]),c.$set(E);const S={};y&1&&(S.size=m[0]),w.$set(S)},i(m){H||(V(s.$$.fragment,m),V(r.$$.fragment,m),V(c.$$.fragment,m),V(w.$$.fragment,m),H=!0)},o(m){A(s.$$.fragment,m),A(r.$$.fragment,m),A(c.$$.fragment,m),A(w.$$.fragment,m),H=!1},d(m){m&&h(e),j(s),j(r),j(c),j(w)}}}function Pt(n,e,t){let{size:s="normal"}=e;return n.$$set=l=>{"size"in l&&t(0,s=l.size)},[s]}class nt extends W{constructor(e){super(),K(this,e,Pt,Lt,Y,{size:0})}}function jt(n){let e;return{c(){e=N("Check out my work ↓")},l(t){e=O(t,"Check out my work ↓")},m(t,s){C(t,e,s)},d(t){t&&h(e)}}}function zt(n){let e,t,s,l='<span class="glitch svelte-fxsscf" data-text="¢">¢</span>wypt',r,i,c="Salesforce Developer | Software Developer | IT Support",a,o,d="Linux, Windows, &amp; Database Administration, <br/>Software Development, Audio Engineering, and more.",v,g,w,H,m,y,b,$;return w=new nt({}),m=new kt({props:{side:!0,$$slots:{default:[jt]},$$scope:{ctx:n}}}),m.$on("click",Je),m.$on("keypress",Je),b=new $t({}),{c(){e=p("section"),t=p("div"),s=p("h1"),s.innerHTML=l,r=D(),i=p("h4"),i.textContent=c,a=D(),o=p("h5"),o.innerHTML=d,v=D(),g=p("div"),M(w.$$.fragment),H=D(),M(m.$$.fragment),y=D(),M(b.$$.fragment),this.h()},l(E){e=_(E,"SECTION",{id:!0,class:!0});var S=k(e);t=_(S,"DIV",{});var T=k(t);s=_(T,"H1",{class:!0,"data-svelte-h":!0}),G(s)!=="svelte-wghrt6"&&(s.innerHTML=l),r=I(T),i=_(T,"H4",{"data-svelte-h":!0}),G(i)!=="svelte-7bw84s"&&(i.textContent=c),a=I(T),o=_(T,"H5",{"data-svelte-h":!0}),G(o)!=="svelte-ev9jue"&&(o.innerHTML=d),v=I(T),g=_(T,"DIV",{class:!0});var F=k(g);L(w.$$.fragment,F),F.forEach(h),H=I(T),L(m.$$.fragment,T),T.forEach(h),y=I(S),L(b.$$.fragment,S),S.forEach(h),this.h()},h(){f(s,"class","svelte-fxsscf"),f(g,"class","socials svelte-fxsscf"),f(e,"id","home"),f(e,"class","wrapper svelte-fxsscf")},m(E,S){C(E,e,S),u(e,t),u(t,s),u(t,r),u(t,i),u(t,a),u(t,o),u(t,v),u(t,g),P(w,g,null),u(t,H),P(m,t,null),u(e,y),P(b,e,null),$=!0},p(E,[S]){const T={};S&1&&(T.$$scope={dirty:S,ctx:E}),m.$set(T)},i(E){$||(V(w.$$.fragment,E),V(m.$$.fragment,E),V(b.$$.fragment,E),$=!0)},o(E){A(w.$$.fragment,E),A(m.$$.fragment,E),A(b.$$.fragment,E),$=!1},d(E){E&&h(e),j(w),j(m),j(b)}}}function Je(){const n=document.querySelector("#work");n&&n.scrollIntoView(!0)}class Nt extends W{constructor(e){super(),K(this,e,null,zt,Y,{})}}function Ot(n){let e,t=Math.floor(Number(n[0]))+"",s;return{c(){e=p("span"),s=N(t),this.h()},l(l){e=_(l,"SPAN",{class:!0});var r=k(e);s=O(r,t),r.forEach(h),this.h()},h(){f(e,"class","svelte-kvci40")},m(l,r){C(l,e,r),u(e,s)},p(l,r){r&1&&t!==(t=Math.floor(Number(l[0]))+"")&&x(s,t)},d(l){l&&h(e)}}}function Ft(n){let e,t='<span class="svelte-kvci40">CompTIA ITF+</span>';return{c(){e=p("a"),e.innerHTML=t,this.h()},l(s){e=_(s,"A",{href:!0,class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1rfv9w4"&&(e.innerHTML=t),this.h()},h(){f(e,"href","https://i.ibb.co/HHM70K5/Alex-Hanson-Comp-TIA-IT-Fundamentals-ITF-Certification-certificate.png"),f(e,"class","svelte-kvci40")},m(s,l){C(s,e,l)},p:X,d(s){s&&h(e)}}}function Rt(n){let e,t='<span class="svelte-kvci40">Caddo Career &amp; Technology Center</span>';return{c(){e=p("a"),e.innerHTML=t,this.h()},l(s){e=_(s,"A",{href:!0,target:!0,class:!0,"data-svelte-h":!0}),G(e)!=="svelte-18h8qzt"&&(e.innerHTML=t),this.h()},h(){f(e,"href","https://caddocareer.com/"),f(e,"target","_blank"),f(e,"class","svelte-kvci40")},m(s,l){C(s,e,l)},p:X,d(s){s&&h(e)}}}function qt(n){let e,t,s,l="Bio",r,i,c,a,o,d,v="2023",g,w,H,m,y,b;return a=new fe({props:{tip:n[0],$$slots:{default:[Ot]},$$scope:{ctx:n}}}),w=new fe({props:{tip:"Proof of certification",$$slots:{default:[Ft]},$$scope:{ctx:n}}}),m=new fe({props:{tip:"Click to visit their website",$$slots:{default:[Rt]},$$scope:{ctx:n}}}),{c(){e=p("section"),t=p("div"),s=p("h3"),s.textContent=l,r=D(),i=p("p"),c=N("Hey, my name is Alex and I'm "),M(a.$$.fragment),o=N(` years old.
			I graduated from Bossier Parish Community College in December of `),d=p("span"),d.textContent=v,g=N(` with a degree in
			Cybersecurity, maintaining a 3.8 GPA throughout my studies. My passion for technology started early,
			fueled by a fascination with computers and the concept of programming. This interest
			deepened in high school as I earned my
			`),M(w.$$.fragment),H=N(`
			certification, alongside Java Programming
			and IT Fundamentals classes at the
			`),M(m.$$.fragment),y=N(`
			— experiences that solidified my choice of a career in computer science.`),this.h()},l($){e=_($,"SECTION",{id:!0,class:!0});var E=k(e);t=_(E,"DIV",{class:!0});var S=k(t);s=_(S,"H3",{"data-svelte-h":!0}),G(s)!=="svelte-cpebvc"&&(s.textContent=l),r=I(S),i=_(S,"P",{});var T=k(i);c=O(T,"Hey, my name is Alex and I'm "),L(a.$$.fragment,T),o=O(T,` years old.
			I graduated from Bossier Parish Community College in December of `),d=_(T,"SPAN",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-zjoe4f"&&(d.textContent=v),g=O(T,` with a degree in
			Cybersecurity, maintaining a 3.8 GPA throughout my studies. My passion for technology started early,
			fueled by a fascination with computers and the concept of programming. This interest
			deepened in high school as I earned my
			`),L(w.$$.fragment,T),H=O(T,`
			certification, alongside Java Programming
			and IT Fundamentals classes at the
			`),L(m.$$.fragment,T),y=O(T,`
			— experiences that solidified my choice of a career in computer science.`),T.forEach(h),S.forEach(h),E.forEach(h),this.h()},h(){f(d,"class","svelte-kvci40"),f(t,"class","text svelte-kvci40"),f(e,"id","about"),f(e,"class","wrapper svelte-kvci40")},m($,E){C($,e,E),u(e,t),u(t,s),u(t,r),u(t,i),u(i,c),P(a,i,null),u(i,o),u(i,d),u(i,g),P(w,i,null),u(i,H),P(m,i,null),u(i,y),b=!0},p($,[E]){const S={};E&1&&(S.tip=$[0]),E&5&&(S.$$scope={dirty:E,ctx:$}),a.$set(S);const T={};E&4&&(T.$$scope={dirty:E,ctx:$}),w.$set(T);const F={};E&4&&(F.$$scope={dirty:E,ctx:$}),m.$set(F)},i($){b||(V(a.$$.fragment,$),V(w.$$.fragment,$),V(m.$$.fragment,$),b=!0)},o($){A(a.$$.fragment,$),A(w.$$.fragment,$),A(m.$$.fragment,$),b=!1},d($){$&&h(e),j(a),j(w),j(m)}}}function Ut(n,e,t){let s=()=>{let r=new Date("2001/09/17");return((Date.now()-r.getTime())/31536e6).toFixed(8)},l=s();return setInterval(()=>{t(0,l=s())},1e3),[l]}class Bt extends W{constructor(e){super(),K(this,e,Ut,qt,Y,{})}}function Qe(n,e,t){const s=n.slice();return s[2]=e[t].link,s[3]=e[t].owner,s[4]=e[t].repo,s[5]=e[t].description,s[6]=e[t].languageColor,s[7]=e[t].language,s[8]=e[t].stars,s[9]=e[t].forks,s}function Gt(n){let e,t,s,l,r,i,c;return{c(){e=p("div"),t=D(),s=p("div"),l=D(),r=p("div"),i=D(),c=p("div"),this.h()},l(a){e=_(a,"DIV",{class:!0}),k(e).forEach(h),t=I(a),s=_(a,"DIV",{class:!0}),k(s).forEach(h),l=I(a),r=_(a,"DIV",{class:!0}),k(r).forEach(h),i=I(a),c=_(a,"DIV",{class:!0}),k(c).forEach(h),this.h()},h(){f(e,"class","repo-card shimmer svelte-jh6r80"),f(s,"class","repo-card shimmer svelte-jh6r80"),f(r,"class","repo-card shimmer svelte-jh6r80"),f(c,"class","repo-card shimmer svelte-jh6r80")},m(a,o){C(a,e,o),C(a,t,o),C(a,s,o),C(a,l,o),C(a,r,o),C(a,i,o),C(a,c,o)},p:X,d(a){a&&(h(e),h(t),h(s),h(l),h(r),h(i),h(c))}}}function Yt(n){let e,t=Ge(n[0]),s=[];for(let l=0;l<t.length;l+=1)s[l]=et(Qe(n,t,l));return{c(){for(let l=0;l<s.length;l+=1)s[l].c();e=te()},l(l){for(let r=0;r<s.length;r+=1)s[r].l(l);e=te()},m(l,r){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(l,r);C(l,e,r)},p(l,r){if(r&1){t=Ge(l[0]);let i;for(i=0;i<t.length;i+=1){const c=Qe(l,t,i);s[i]?s[i].p(c,r):(s[i]=et(c),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=t.length}},d(l){l&&h(e),ot(s,l)}}}function Ze(n){let e,t,s,l,r=n[8]+"",i;return{c(){e=p("img"),s=D(),l=p("h6"),i=N(r),this.h()},l(c){e=_(c,"IMG",{src:!0,id:!0,alt:!0,class:!0}),s=I(c),l=_(c,"H6",{});var a=k(l);i=O(a,r),a.forEach(h),this.h()},h(){Z(e.src,t="icons/star.svg")||f(e,"src",t),f(e,"id","star"),f(e,"alt","star"),f(e,"class","svelte-jh6r80")},m(c,a){C(c,e,a),C(c,s,a),C(c,l,a),u(l,i)},p(c,a){a&1&&r!==(r=c[8]+"")&&x(i,r)},d(c){c&&(h(e),h(s),h(l))}}}function xe(n){let e,t,s,l,r=n[9]+"",i;return{c(){e=p("img"),s=D(),l=p("h6"),i=N(r),this.h()},l(c){e=_(c,"IMG",{src:!0,id:!0,alt:!0,class:!0}),s=I(c),l=_(c,"H6",{});var a=k(l);i=O(a,r),a.forEach(h),this.h()},h(){Z(e.src,t="icons/fork.svg")||f(e,"src",t),f(e,"id","fork"),f(e,"alt","fork"),f(e,"class","svelte-jh6r80")},m(c,a){C(c,e,a),C(c,s,a),C(c,l,a),u(l,i)},p(c,a){a&1&&r!==(r=c[9]+"")&&x(i,r)},d(c){c&&(h(e),h(s),h(l))}}}function et(n){let e,t,s,l,r,i,c,a,o,d=n[3]+"",v,g,w,H='<img src="icons/open.svg" alt="open in new tab" id="open" class="svelte-jh6r80"/>',m,y,b,$=n[4]+"",E,S,T,F=n[5]+"",he,be,J,ee,se,ke,ie,oe=n[7]+"",de,Ee,le,ye,ne,De,me,Ie,Pe,R=n[8]&&Ze(n),q=n[9]&&xe(n);return{c(){e=p("a"),t=p("div"),s=p("div"),l=p("div"),r=p("img"),a=D(),o=p("h6"),v=N(d),g=D(),w=p("div"),w.innerHTML=H,m=D(),y=p("div"),b=p("h3"),E=N($),S=D(),T=p("h6"),he=N(F),be=D(),J=p("div"),ee=p("div"),se=p("span"),ke=D(),ie=p("h6"),de=N(oe),Ee=D(),le=p("div"),R&&R.c(),ye=D(),ne=p("div"),q&&q.c(),De=D(),this.h()},l(z){e=_(z,"A",{href:!0,target:!0,rel:!0,draggable:!0,class:!0});var U=k(e);t=_(U,"DIV",{class:!0});var re=k(t);s=_(re,"DIV",{id:!0,class:!0});var ve=k(s);l=_(ve,"DIV",{class:!0});var pe=k(l);r=_(pe,"IMG",{src:!0,alt:!0,id:!0,class:!0}),a=I(pe),o=_(pe,"H6",{});var je=k(o);v=O(je,d),je.forEach(h),pe.forEach(h),g=I(ve),w=_(ve,"DIV",{"data-svelte-h":!0}),G(w)!=="svelte-77178t"&&(w.innerHTML=H),ve.forEach(h),m=I(re),y=_(re,"DIV",{});var _e=k(y);b=_(_e,"H3",{});var ze=k(b);E=O(ze,$),ze.forEach(h),S=I(_e),T=_(_e,"H6",{});var Ne=k(T);he=O(Ne,F),Ne.forEach(h),_e.forEach(h),be=I(re),J=_(re,"DIV",{class:!0});var ae=k(J);ee=_(ae,"DIV",{class:!0});var ge=k(ee);se=_(ge,"SPAN",{class:!0,style:!0}),k(se).forEach(h),ke=I(ge),ie=_(ge,"H6",{});var Oe=k(ie);de=O(Oe,oe),Oe.forEach(h),ge.forEach(h),Ee=I(ae),le=_(ae,"DIV",{class:!0});var Fe=k(le);R&&R.l(Fe),Fe.forEach(h),ye=I(ae),ne=_(ae,"DIV",{class:!0});var Re=k(ne);q&&q.l(Re),Re.forEach(h),ae.forEach(h),re.forEach(h),De=I(U),U.forEach(h),this.h()},h(){Z(r.src,i="https://github.com/"+n[3]+".png")||f(r,"src",i),f(r,"alt",c=n[3]+"'s profile picture"),f(r,"id","pfp"),f(r,"class","svelte-jh6r80"),f(l,"class","info svelte-jh6r80"),f(s,"id","top-part"),f(s,"class","svelte-jh6r80"),f(se,"class","dot svelte-jh6r80"),ce(se,"background-color",n[6]),f(ee,"class","info svelte-jh6r80"),f(le,"class","info svelte-jh6r80"),f(ne,"class","info svelte-jh6r80"),f(J,"class","info-container svelte-jh6r80"),f(t,"class","repo-card svelte-jh6r80"),f(e,"href",me=n[2]),f(e,"target","_blank"),f(e,"rel","noreferrer"),f(e,"draggable","false"),f(e,"class","svelte-jh6r80")},m(z,U){C(z,e,U),u(e,t),u(t,s),u(s,l),u(l,r),u(l,a),u(l,o),u(o,v),u(s,g),u(s,w),u(t,m),u(t,y),u(y,b),u(b,E),u(y,S),u(y,T),u(T,he),u(t,be),u(t,J),u(J,ee),u(ee,se),u(ee,ke),u(ee,ie),u(ie,de),u(J,Ee),u(J,le),R&&R.m(le,null),u(J,ye),u(J,ne),q&&q.m(ne,null),u(e,De),Ie||(Pe=[B(e,"dragstart",lt(n[1])),B(e,"mousedown",Kt)],Ie=!0)},p(z,U){U&1&&!Z(r.src,i="https://github.com/"+z[3]+".png")&&f(r,"src",i),U&1&&c!==(c=z[3]+"'s profile picture")&&f(r,"alt",c),U&1&&d!==(d=z[3]+"")&&x(v,d),U&1&&$!==($=z[4]+"")&&x(E,$),U&1&&F!==(F=z[5]+"")&&x(he,F),U&1&&ce(se,"background-color",z[6]),U&1&&oe!==(oe=z[7]+"")&&x(de,oe),z[8]?R?R.p(z,U):(R=Ze(z),R.c(),R.m(le,null)):R&&(R.d(1),R=null),z[9]?q?q.p(z,U):(q=xe(z),q.c(),q.m(ne,null)):q&&(q.d(1),q=null),U&1&&me!==(me=z[2])&&f(e,"href",me)},d(z){z&&h(e),R&&R.d(),q&&q.d(),Ie=!1,ue(Pe)}}}function Wt(n){let e,t,s='<h2 class="svelte-jh6r80"><span class="svelte-jh6r80">code</span>:projects</h2>',l,r;function i(o,d){return o[0]?Yt:Gt}let c=i(n),a=c(n);return{c(){e=p("section"),t=p("div"),t.innerHTML=s,l=D(),r=p("div"),a.c(),this.h()},l(o){e=_(o,"SECTION",{class:!0,id:!0});var d=k(e);t=_(d,"DIV",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-dn5b2d"&&(t.innerHTML=s),l=I(d),r=_(d,"DIV",{class:!0});var v=k(r);a.l(v),v.forEach(h),d.forEach(h),this.h()},h(){f(t,"class","title svelte-jh6r80"),f(r,"class","grid svelte-jh6r80"),f(e,"class","wrapper"),f(e,"id","work")},m(o,d){C(o,e,d),u(e,t),u(e,l),u(e,r),a.m(r,null)},p(o,[d]){c===(c=i(o))&&a?a.p(o,d):(a.d(1),a=c(o),a&&(a.c(),a.m(r,null)))},i:X,o:X,d(o){o&&h(e),a.d()}}}function Kt(n){n.detail>1&&n.preventDefault()}function tt(n){return(n==null?void 0:n.trim().replace(/\s+/g," "))??""}function Xt(n){return(n==null?void 0:n.replace(/\s+/g,""))??""}function Jt(n){return{...n,repo:tt(n.repo),link:Xt(n.link),description:tt(n.description)}}function Qt(n,e,t){let s;Ae(async()=>{try{const i=await(await fetch("https://gh-pinned-repos.egoist.dev/?username=cwyptt")).json();t(0,s=i.map(Jt))}catch(r){console.error("Error fetching repository data:",r)}});function l(r){we.call(this,n,r)}return[s,l]}class Zt extends W{constructor(e){super(),K(this,e,Qt,Wt,Y,{})}}function xt(n){let e,t="V1";return{c(){e=p("span"),e.textContent=t,this.h()},l(s){e=_(s,"SPAN",{class:!0,"data-svelte-h":!0}),G(e)!=="svelte-1qkh7q3"&&(e.textContent=t),this.h()},h(){f(e,"class","svelte-ghty30")},m(s,l){C(s,e,l)},p:X,d(s){s&&h(e)}}}function es(n){let e,t,s,l,r,i,c,a,o,d,v,g,w,H,m,y;return r=new nt({props:{size:"small"}}),o=new fe({props:{tip:"Why, hello there.",$$slots:{default:[xt]},$$scope:{ctx:n}}}),{c(){e=p("hr"),t=D(),s=p("footer"),l=p("div"),M(r.$$.fragment),i=D(),c=p("h6"),a=N(`Cwypt | ADH <3
			`),M(o.$$.fragment),d=D(),v=p("div"),g=p("p"),w=N("© "),H=N(n[0]),m=N(" Alex Hanson. All rights reserved."),this.h()},l(b){e=_(b,"HR",{class:!0}),t=I(b),s=_(b,"FOOTER",{class:!0});var $=k(s);l=_($,"DIV",{class:!0});var E=k(l);L(r.$$.fragment,E),i=I(E),c=_(E,"H6",{class:!0});var S=k(c);a=O(S,`Cwypt | ADH <3
			`),L(o.$$.fragment,S),S.forEach(h),E.forEach(h),d=I($),v=_($,"DIV",{class:!0});var T=k(v);g=_(T,"P",{class:!0});var F=k(g);w=O(F,"© "),H=O(F,n[0]),m=O(F," Alex Hanson. All rights reserved."),F.forEach(h),T.forEach(h),$.forEach(h),this.h()},h(){f(e,"class","svelte-ghty30"),f(c,"class","svelte-ghty30"),f(l,"class","footer-main svelte-ghty30"),f(g,"class","svelte-ghty30"),f(v,"class","copyright svelte-ghty30"),f(s,"class","wrapper svelte-ghty30")},m(b,$){C(b,e,$),C(b,t,$),C(b,s,$),u(s,l),P(r,l,null),u(l,i),u(l,c),u(c,a),P(o,c,null),u(s,d),u(s,v),u(v,g),u(g,w),u(g,H),u(g,m),y=!0},p(b,[$]){const E={};$&2&&(E.$$scope={dirty:$,ctx:b}),o.$set(E)},i(b){y||(V(r.$$.fragment,b),V(o.$$.fragment,b),y=!0)},o(b){A(r.$$.fragment,b),A(o.$$.fragment,b),y=!1},d(b){b&&(h(e),h(t),h(s)),j(r),j(o)}}}function ts(n){return[new Date().getFullYear()]}class ss extends W{constructor(e){super(),K(this,e,ts,es,Y,{})}}function ls(n){let e,t,s,l,r,i,c,a,o,d,v;return e=new pt({}),l=new Nt({}),i=new Bt({}),a=new Zt({}),d=new ss({}),{c(){M(e.$$.fragment),t=D(),s=p("main"),M(l.$$.fragment),r=D(),M(i.$$.fragment),c=D(),M(a.$$.fragment),o=D(),M(d.$$.fragment)},l(g){L(e.$$.fragment,g),t=I(g),s=_(g,"MAIN",{});var w=k(s);L(l.$$.fragment,w),r=I(w),L(i.$$.fragment,w),c=I(w),L(a.$$.fragment,w),o=I(w),L(d.$$.fragment,w),w.forEach(h)},m(g,w){P(e,g,w),C(g,t,w),C(g,s,w),P(l,s,null),u(s,r),P(i,s,null),u(s,c),P(a,s,null),u(s,o),P(d,s,null),v=!0},p:X,i(g){v||(V(e.$$.fragment,g),V(l.$$.fragment,g),V(i.$$.fragment,g),V(a.$$.fragment,g),V(d.$$.fragment,g),v=!0)},o(g){A(e.$$.fragment,g),A(l.$$.fragment,g),A(i.$$.fragment,g),A(a.$$.fragment,g),A(d.$$.fragment,g),v=!1},d(g){g&&(h(t),h(s)),j(e,g),j(l),j(i),j(a),j(d)}}}class cs extends W{constructor(e){super(),K(this,e,null,ls,Y,{})}}export{cs as component,os as universal};
