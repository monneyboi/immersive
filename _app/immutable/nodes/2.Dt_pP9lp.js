import{s as V,c as R,u as T,g as U,a as W,n as S}from"../chunks/scheduler.BvLojk_z.js";import{S as k,i as w,e as $,c as v,d as p,g as i,o as _,j as b,t as h,a as d,s as E,h as I,k as g,q as C,n as F,y as G,m as q,u as M,v as N,w as P,x as j}from"../chunks/index.BfxfW9BQ.js";function z(a){return(a==null?void 0:a.length)!==void 0?a:Array.from(a)}function Y(a){let t,c;const s=a[1].default,e=R(s,a,a[0],null);return{c(){t=$("div"),e&&e.c(),this.h()},l(r){t=v(r,"DIV",{class:!0});var l=p(t);e&&e.l(l),l.forEach(i),this.h()},h(){_(t,"class","svelte-1gyce1w")},m(r,l){b(r,t,l),e&&e.m(t,null),c=!0},p(r,[l]){e&&e.p&&(!c||l&1)&&T(e,s,r,r[0],c?W(s,r[0],l,null):U(r[0]),null)},i(r){c||(h(e,r),c=!0)},o(r){d(e,r),c=!1},d(r){r&&i(t),e&&e.d(r)}}}function Z(a,t,c){let{$$slots:s={},$$scope:e}=t;return a.$$set=r=>{"$$scope"in r&&c(0,e=r.$$scope)},[e,s]}class ee extends k{constructor(t){super(),w(this,t,Z,Y,V,{})}}function te(a){let t,c;const s=a[1].default,e=R(s,a,a[0],null);return{c(){t=$("div"),e&&e.c(),this.h()},l(r){t=v(r,"DIV",{class:!0});var l=p(t);e&&e.l(l),l.forEach(i),this.h()},h(){_(t,"class","svelte-1xg327f")},m(r,l){b(r,t,l),e&&e.m(t,null),c=!0},p(r,[l]){e&&e.p&&(!c||l&1)&&T(e,s,r,r[0],c?W(s,r[0],l,null):U(r[0]),null)},i(r){c||(h(e,r),c=!0)},o(r){d(e,r),c=!1},d(r){r&&i(t),e&&e.d(r)}}}function le(a,t,c){let{$$slots:s={},$$scope:e}=t;return a.$$set=r=>{"$$scope"in r&&c(0,e=r.$$scope)},[e,s]}class se extends k{constructor(t){super(),w(this,t,le,te,V,{})}}function ne(a){let t,c,s,e,r,l,o,n,m,u,y,D,A;return{c(){t=$("div"),c=$("div"),s=E(),e=$("div"),r=E(),l=$("div"),o=E(),n=$("div"),m=E(),u=$("div"),y=E(),D=$("div"),this.h()},l(x){t=v(x,"DIV",{class:!0,style:!0});var f=p(t);c=v(f,"DIV",{class:!0}),p(c).forEach(i),s=I(f),e=v(f,"DIV",{class:!0}),p(e).forEach(i),r=I(f),l=v(f,"DIV",{class:!0}),p(l).forEach(i),o=I(f),n=v(f,"DIV",{class:!0}),p(n).forEach(i),m=I(f),u=v(f,"DIV",{class:!0}),p(u).forEach(i),y=I(f),D=v(f,"DIV",{class:!0}),p(D).forEach(i),f.forEach(i),this.h()},h(){_(c,"class","face top svelte-11nhyhs"),_(e,"class","face bottom svelte-11nhyhs"),_(l,"class","face back svelte-11nhyhs"),_(n,"class","face front svelte-11nhyhs"),_(u,"class","face left svelte-11nhyhs"),_(D,"class","face right svelte-11nhyhs"),_(t,"class","block svelte-11nhyhs"),_(t,"style",A=`--size:${a[0]}px;--tx:${a[1]}px;--ty:${a[2]}px;--time:${B}ms;--delay:${Math.random()*B*-1}ms;`)},m(x,f){b(x,t,f),g(t,c),g(t,s),g(t,e),g(t,r),g(t,l),g(t,o),g(t,n),g(t,m),g(t,u),g(t,y),g(t,D)},p(x,[f]){f&7&&A!==(A=`--size:${x[0]}px;--tx:${x[1]}px;--ty:${x[2]}px;--time:${B}ms;--delay:${Math.random()*B*-1}ms;`)&&_(t,"style",A)},i:S,o:S,d(x){x&&i(t)}}}const B=8e3;function ce(a,t,c){let{size:s=100}=t,{tx:e=0}=t,{ty:r=0}=t;return a.$$set=l=>{"size"in l&&c(0,s=l.size),"tx"in l&&c(1,e=l.tx),"ty"in l&&c(2,r=l.ty)},[s,e,r]}class re extends k{constructor(t){super(),w(this,t,ce,ne,V,{size:0,tx:1,ty:2})}}function H(a,t,c){const s=a.slice();return s[7]=t[c],s}function J(a,t,c){const s=a.slice();return s[10]=t[c],s}function K(a,t,c){const s=a.slice();return s[13]=t[c],s}function L(a){let t,c;return t=new re({props:{size:X,tx:a[7],ty:a[10]}}),{c(){M(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,e){P(t,s,e),c=!0},p:S,i(s){c||(h(t.$$.fragment,s),c=!0)},o(s){d(t.$$.fragment,s),c=!1},d(s){j(t,s)}}}function O(a){let t,c,s=z(a[2]),e=[];for(let l=0;l<s.length;l+=1)e[l]=L(K(a,s,l));const r=l=>d(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=q()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=q()},m(l,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,o);b(l,t,o),c=!0},p(l,o){if(o&3){s=z(l[2]);let n;for(n=0;n<s.length;n+=1){const m=K(l,s,n);e[n]?(e[n].p(m,o),h(e[n],1)):(e[n]=L(m),e[n].c(),h(e[n],1),e[n].m(t.parentNode,t))}for(C(),n=s.length;n<e.length;n+=1)r(n);F()}},i(l){if(!c){for(let o=0;o<s.length;o+=1)h(e[o]);c=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)d(e[o]);c=!1},d(l){l&&i(t),G(e,l)}}}function Q(a){let t,c,s=z(a[1]),e=[];for(let l=0;l<s.length;l+=1)e[l]=O(J(a,s,l));const r=l=>d(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=q()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=q()},m(l,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,o);b(l,t,o),c=!0},p(l,o){if(o&7){s=z(l[1]);let n;for(n=0;n<s.length;n+=1){const m=J(l,s,n);e[n]?(e[n].p(m,o),h(e[n],1)):(e[n]=O(m),e[n].c(),h(e[n],1),e[n].m(t.parentNode,t))}for(C(),n=s.length;n<e.length;n+=1)r(n);F()}},i(l){if(!c){for(let o=0;o<s.length;o+=1)h(e[o]);c=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)d(e[o]);c=!1},d(l){l&&i(t),G(e,l)}}}function oe(a){let t,c,s=z(a[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=Q(H(a,s,l));const r=l=>d(e[l],1,1,()=>{e[l]=null});return{c(){t=$("div");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){t=v(l,"DIV",{class:!0});var o=p(t);for(let n=0;n<e.length;n+=1)e[n].l(o);o.forEach(i),this.h()},h(){_(t,"class","svelte-14oqcdn")},m(l,o){b(l,t,o);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(t,null);c=!0},p(l,[o]){if(o&7){s=z(l[0]);let n;for(n=0;n<s.length;n+=1){const m=H(l,s,n);e[n]?(e[n].p(m,o),h(e[n],1)):(e[n]=Q(m),e[n].c(),h(e[n],1),e[n].m(t,null))}for(C(),n=s.length;n<e.length;n+=1)r(n);F()}},i(l){if(!c){for(let o=0;o<s.length;o+=1)h(e[o]);c=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)d(e[o]);c=!1},d(l){l&&i(t),G(e,l)}}}const X=100,ae=100;function fe(a,t,c){let{xs:s=10}=t,{ys:e=10}=t,{zs:r=10}=t;const l=X+ae,o=Array.from({length:s},(u,y)=>y*l-s*l*.5+l*.5),n=Array.from({length:e},(u,y)=>y*l-e*l*.5+l*.5),m=Array.from({length:r},(u,y)=>y*l-r*l*.5+l*.5);return a.$$set=u=>{"xs"in u&&c(3,s=u.xs),"ys"in u&&c(4,e=u.ys),"zs"in u&&c(5,r=u.zs)},[o,n,m,s,e,r]}class ie extends k{constructor(t){super(),w(this,t,fe,oe,V,{xs:3,ys:4,zs:5})}}function ue(a){let t,c;return t=new ie({props:{xs:6,ys:6,zs:3}}),{c(){M(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,e){P(t,s,e),c=!0},p:S,i(s){c||(h(t.$$.fragment,s),c=!0)},o(s){d(t.$$.fragment,s),c=!1},d(s){j(t,s)}}}function he(a){let t,c;return t=new se({props:{$$slots:{default:[ue]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,e){P(t,s,e),c=!0},p(s,e){const r={};e&1&&(r.$$scope={dirty:e,ctx:s}),t.$set(r)},i(s){c||(h(t.$$.fragment,s),c=!0)},o(s){d(t.$$.fragment,s),c=!1},d(s){j(t,s)}}}function me(a){let t,c;return t=new ee({props:{$$slots:{default:[he]},$$scope:{ctx:a}}}),{c(){M(t.$$.fragment)},l(s){N(t.$$.fragment,s)},m(s,e){P(t,s,e),c=!0},p(s,[e]){const r={};e&1&&(r.$$scope={dirty:e,ctx:s}),t.$set(r)},i(s){c||(h(t.$$.fragment,s),c=!0)},o(s){d(t.$$.fragment,s),c=!1},d(s){j(t,s)}}}class ge extends k{constructor(t){super(),w(this,t,null,me,V,{})}}export{ge as component};
