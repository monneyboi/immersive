import{s as A,c as st,u as at,g as it,a as ot,n as I}from"../chunks/scheduler.BvLojk_z.js";import{S as D,i as P,e as x,c as w,d as N,g as d,o as b,j as M,t as g,a as m,s as E,h as R,k as _,m as S,q as J,n as W,y as q,u as L,v as V,w as U,x as j}from"../chunks/index.BfxfW9BQ.js";function $(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function bt(t){let e,s;const r=t[1].default,n=st(r,t,t[0],null);return{c(){e=x("div"),n&&n.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var a=N(e);n&&n.l(a),a.forEach(d),this.h()},h(){b(e,"class","svelte-1cg0v7v")},m(i,a){M(i,e,a),n&&n.m(e,null),s=!0},p(i,[a]){n&&n.p&&(!s||a&1)&&at(n,r,i,i[0],s?ot(r,i[0],a,null):it(i[0]),null)},i(i){s||(g(n,i),s=!0)},o(i){m(n,i),s=!1},d(i){i&&d(e),n&&n.d(i)}}}function xt(t,e,s){let{$$slots:r={},$$scope:n}=e;return t.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,r]}class wt extends D{constructor(e){super(),P(this,e,xt,bt,A,{})}}function Nt(t){let e,s;const r=t[1].default,n=st(r,t,t[0],null);return{c(){e=x("div"),n&&n.c(),this.h()},l(i){e=w(i,"DIV",{class:!0});var a=N(e);n&&n.l(a),a.forEach(d),this.h()},h(){b(e,"class","svelte-1xg327f")},m(i,a){M(i,e,a),n&&n.m(e,null),s=!0},p(i,[a]){n&&n.p&&(!s||a&1)&&at(n,r,i,i[0],s?ot(r,i[0],a,null):it(i[0]),null)},i(i){s||(g(n,i),s=!0)},o(i){m(n,i),s=!1},d(i){i&&d(e),n&&n.d(i)}}}function yt(t,e,s){let{$$slots:r={},$$scope:n}=e;return t.$$set=i=>{"$$scope"in i&&s(0,n=i.$$scope)},[n,r]}class St extends D{constructor(e){super(),P(this,e,yt,Nt,A,{})}}function ft(t,e){for(var s=[],r=0;r!=e;++r)s.push(t.unsafeNext());return s}function $t(t,e){var s=t.clone(),r=ft(s,e);return[r,s]}function ut(t,e){for(var s=0;s!=e;++s)t.unsafeNext()}function Mt(t,e){var s=t.clone();return ut(s,e),s}var Et=214013,Rt=2531011,zt=4294967295,At=(1<<31)-1,O=function(t){return t*Et+Rt&zt},K=function(t){return(t&At)>>16},lt=function(){function t(e){this.seed=e}return t.prototype.clone=function(){return new t(this.seed)},t.prototype.next=function(){var e=new t(this.seed),s=e.unsafeNext();return[s,e]},t.prototype.unsafeNext=function(){var e=O(this.seed),s=K(e),r=O(e),n=K(r);this.seed=O(r);var i=K(this.seed),a=i+(n+(s<<15)<<15);return a|0},t.prototype.getState=function(){return[this.seed]},t}();function Dt(t){var e=t.length===1;if(!e)throw new Error("The state must have been produced by a congruential32 RandomGenerator");return new lt(t[0])}var Pt=Object.assign(function(t){return new lt(t)},{fromState:Dt}),Tt=function(t,e){var s=typeof Symbol=="function"&&t[Symbol.iterator];if(!s)return t;var r=s.call(t),n,i=[],a;try{for(;(e===void 0||e-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(o){a={error:o}}finally{try{n&&!n.done&&(s=r.return)&&s.call(r)}finally{if(a)throw a.error}}return i},It=function(t,e,s){if(s||arguments.length===2)for(var r=0,n=e.length,i;r<n;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))},ct=function(){function t(e,s){this.states=e,this.index=s}return t.twist=function(e){for(var s=e.slice(),r=0;r!==t.N-t.M;++r){var n=(s[r]&t.MASK_UPPER)+(s[r+1]&t.MASK_LOWER);s[r]=s[r+t.M]^n>>>1^-(n&1)&t.A}for(var r=t.N-t.M;r!==t.N-1;++r){var i=(s[r]&t.MASK_UPPER)+(s[r+1]&t.MASK_LOWER);s[r]=s[r+t.M-t.N]^i>>>1^-(i&1)&t.A}var a=(s[t.N-1]&t.MASK_UPPER)+(s[0]&t.MASK_LOWER);return s[t.N-1]=s[t.M-1]^a>>>1^-(a&1)&t.A,s},t.seeded=function(e){var s=Array(t.N);s[0]=e;for(var r=1;r!==t.N;++r){var n=s[r-1]^s[r-1]>>>30;s[r]=Math.imul(t.F,n)+r|0}return s},t.from=function(e){return new t(t.twist(t.seeded(e)),0)},t.prototype.clone=function(){return new t(this.states,this.index)},t.prototype.next=function(){var e=new t(this.states,this.index),s=e.unsafeNext();return[s,e]},t.prototype.unsafeNext=function(){var e=this.states[this.index];return e^=this.states[this.index]>>>t.U,e^=e<<t.S&t.B,e^=e<<t.T&t.C,e^=e>>>t.L,++this.index>=t.N&&(this.states=t.twist(this.states),this.index=0),e},t.prototype.getState=function(){return It([this.index],Tt(this.states),!1)},t.fromState=function(e){var s=e.length===t.N+1&&e[0]>=0&&e[0]<t.N;if(!s)throw new Error("The state must have been produced by a mersenne RandomGenerator");return new t(e.slice(1),e[0])},t.N=624,t.M=397,t.R=31,t.A=2567483615,t.F=1812433253,t.U=11,t.S=7,t.B=2636928640,t.T=15,t.C=4022730752,t.L=18,t.MASK_LOWER=Math.pow(2,t.R)-1,t.MASK_UPPER=Math.pow(2,t.R),t}();function Lt(t){return ct.fromState(t)}const Vt=Object.assign(function(t){return ct.from(t)},{fromState:Lt});var ht=function(){function t(e,s,r,n){this.s01=e,this.s00=s,this.s11=r,this.s10=n}return t.prototype.clone=function(){return new t(this.s01,this.s00,this.s11,this.s10)},t.prototype.next=function(){var e=new t(this.s01,this.s00,this.s11,this.s10),s=e.unsafeNext();return[s,e]},t.prototype.unsafeNext=function(){var e=this.s00^this.s00<<23,s=this.s01^(this.s01<<23|this.s00>>>9),r=e^this.s10^(e>>>18|s<<14)^(this.s10>>>5|this.s11<<27),n=s^this.s11^s>>>18^this.s11>>>5,i=this.s00+this.s10|0;return this.s01=this.s11,this.s00=this.s10,this.s11=n,this.s10=r,i},t.prototype.jump=function(){var e=new t(this.s01,this.s00,this.s11,this.s10);return e.unsafeJump(),e},t.prototype.unsafeJump=function(){for(var e=0,s=0,r=0,n=0,i=[1667051007,2321340297,1548169110,304075285],a=0;a!==4;++a)for(var o=1;o;o<<=1)i[a]&o&&(e^=this.s01,s^=this.s00,r^=this.s11,n^=this.s10),this.unsafeNext();this.s01=e,this.s00=s,this.s11=r,this.s10=n},t.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},t}();function Ut(t){var e=t.length===4;if(!e)throw new Error("The state must have been produced by a xorshift128plus RandomGenerator");return new ht(t[0],t[1],t[2],t[3])}var jt=Object.assign(function(t){return new ht(-1,~t,t|0,0)},{fromState:Ut}),vt=function(){function t(e,s,r,n){this.s01=e,this.s00=s,this.s11=r,this.s10=n}return t.prototype.clone=function(){return new t(this.s01,this.s00,this.s11,this.s10)},t.prototype.next=function(){var e=new t(this.s01,this.s00,this.s11,this.s10),s=e.unsafeNext();return[s,e]},t.prototype.unsafeNext=function(){var e=this.s00+this.s10|0,s=this.s10^this.s00,r=this.s11^this.s01,n=this.s00,i=this.s01;return this.s00=n<<24^i>>>8^s^s<<16,this.s01=i<<24^n>>>8^r^(r<<16|s>>>16),this.s10=r<<5^s>>>27,this.s11=s<<5^r>>>27,e},t.prototype.jump=function(){var e=new t(this.s01,this.s00,this.s11,this.s10);return e.unsafeJump(),e},t.prototype.unsafeJump=function(){for(var e=0,s=0,r=0,n=0,i=[3639956645,3750757012,1261568508,386426335],a=0;a!==4;++a)for(var o=1;o;o<<=1)i[a]&o&&(e^=this.s01,s^=this.s00,r^=this.s11,n^=this.s10),this.unsafeNext();this.s01=e,this.s00=s,this.s11=r,this.s10=n},t.prototype.getState=function(){return[this.s01,this.s00,this.s11,this.s10]},t}();function Ot(t){var e=t.length===4;if(!e)throw new Error("The state must have been produced by a xoroshiro128plus RandomGenerator");return new vt(t[0],t[1],t[2],t[3])}var Kt=Object.assign(function(t){return new vt(-1,~t,t|0,0)},{fromState:Ot});function dt(t,e){if(t.sign!==e.sign)return H(t,{sign:-e.sign,data:e.data});for(var s=[],r=0,n=t.data,i=e.data,a=n.length-1,o=i.length-1;a>=0||o>=0;--a,--o){var f=a>=0?n[a]:0,u=o>=0?i[o]:0,h=f+u+r;s.push(h>>>0),r=~~(h/4294967296)}return r!==0&&s.push(r),{sign:t.sign,data:s.reverse()}}function Ct(t){t.sign=1;for(var e=t.data,s=e.length-1;s>=0;--s)if(e[s]===4294967295)e[s]=0;else return e[s]+=1,t;return e.unshift(1),t}function Ft(t,e){for(var s=Math.max(t.length,e.length),r=0;r<s;++r){var n=r+t.length-s,i=r+e.length-s,a=n>=0?t[n]:0,o=i>=0?e[i]:0;if(a<o)return!0;if(a>o)return!1}return!1}function H(t,e){if(t.sign!==e.sign)return dt(t,{sign:-e.sign,data:e.data});var s=t.data,r=e.data;if(Ft(s,r)){var n=H(e,t);return n.sign=-n.sign,n}for(var i=[],a=0,o=s.length-1,f=r.length-1;o>=0||f>=0;--o,--f){var u=o>=0?s[o]:0,h=f>=0?r[f]:0,l=u-h-a;i.push(l>>>0),a=l<0?1:0}return{sign:t.sign,data:i.reverse()}}function Z(t){for(var e=t.data,s=0;s!==e.length&&e[s]===0;++s);return s===e.length?(t.sign=1,t.data=[0],t):(e.splice(0,s),t)}function C(t,e){if(e<0){var s=-e;t.sign=-1,t.data[0]=~~(s/4294967296),t.data[1]=s>>>0}else t.sign=1,t.data[0]=~~(e/4294967296),t.data[1]=e>>>0;return t}function kt(t,e,s){var r=e.data[1],n=e.data[0],i=e.sign,a=s.data[1],o=s.data[0],f=s.sign;if(t.sign=1,i===1&&f===-1){var u=r+a,h=n+o+(u>4294967295?1:0);return t.data[0]=h>>>0,t.data[1]=u>>>0,t}var l=r,v=n,y=a,p=o;i===-1&&(l=a,v=o,y=r,p=n);var c=0,T=l-y;return T<0&&(c=1,T=T>>>0),t.data[0]=v-p-c,t.data[1]=T,t}function gt(t,e){for(var s=t>2?~~(4294967296/t)*t:4294967296,r=e.unsafeNext()+2147483648;r>=s;)r=e.unsafeNext()+2147483648;return r%t}function pt(t,e,s){for(var r=e.length;;){for(var n=0;n!==r;++n){var i=n===0?e[0]+1:4294967296,a=gt(i,s);t[n]=a}for(var n=0;n!==r;++n){var o=t[n],f=e[n];if(o<f)return t;if(o>f)break}}}function k(t,e,s){var r=Z(Ct(H(e,t))),n=r.data.slice(0),i=pt(n,r.data,s);return Z(dt({sign:1,data:i},t))}function Gt(t,e,s){if(s!=null){var r=s.clone();return[k(t,e,r),r]}return function(n){var i=n.clone();return[k(t,e,i),i]}}var z=typeof BigInt<"u"?BigInt:void 0;function G(t,e,s){for(var r=e-t+z(1),n=z(-2147483648),i=z(4294967296),a=i,o=1;a<r;)a*=i,++o;for(var f=a-a%r;;){for(var u=z(0),h=0;h!==o;++h){var l=s.unsafeNext();u=i*u+(z(l)-n)}if(u<f){var v=u%r;return v+t}}}function Xt(t,e,s){if(s!=null){var r=s.clone();return[G(t,e,r),r]}return function(n){var i=n.clone();return[G(t,e,i),i]}}var Jt=Number.MAX_SAFE_INTEGER,Wt={sign:1,data:[0,0]},qt={sign:1,data:[0,0]},Q={sign:1,data:[0,0]},F=[0,0];function Ht(t,e,s,r){var n=s<=Jt?C(Q,s):kt(Q,C(Wt,e),C(qt,t));return n.data[1]===4294967295?(n.data[0]+=1,n.data[1]=0):n.data[1]+=1,pt(F,n.data,r),F[0]*4294967296+F[1]+t}function X(t,e,s){var r=e-t;if(r<=4294967295){var n=gt(r+1,s);return n+t}return Ht(t,e,r,s)}function Zt(t,e,s){if(s!=null){var r=s.clone();return[X(t,e,r),r]}return function(n){var i=n.clone();return[X(t,e,i),i]}}var Qt="module",Yt="6.1.0",Bt="a413dd2b721516be2ef29adffb515c5ae67bfbad";const mt=Object.freeze(Object.defineProperty({__proto__:null,__commitHash:Bt,__type:Qt,__version:Yt,congruential32:Pt,generateN:$t,mersenne:Vt,skipN:Mt,uniformArrayIntDistribution:Gt,uniformBigIntDistribution:Xt,uniformIntDistribution:Zt,unsafeGenerateN:ft,unsafeSkipN:ut,unsafeUniformArrayIntDistribution:k,unsafeUniformBigIntDistribution:G,unsafeUniformIntDistribution:X,xoroshiro128plus:Kt,xorshift128plus:jt},Symbol.toStringTag,{value:"Module"}));function te(t){let e,s,r,n,i,a,o,f,u,h,l,v,y;return{c(){e=x("div"),s=x("div"),r=E(),n=x("div"),i=E(),a=x("div"),o=E(),f=x("div"),u=E(),h=x("div"),l=E(),v=x("div"),this.h()},l(p){e=w(p,"DIV",{class:!0,style:!0});var c=N(e);s=w(c,"DIV",{class:!0}),N(s).forEach(d),r=R(c),n=w(c,"DIV",{class:!0}),N(n).forEach(d),i=R(c),a=w(c,"DIV",{class:!0}),N(a).forEach(d),o=R(c),f=w(c,"DIV",{class:!0}),N(f).forEach(d),u=R(c),h=w(c,"DIV",{class:!0}),N(h).forEach(d),l=R(c),v=w(c,"DIV",{class:!0}),N(v).forEach(d),c.forEach(d),this.h()},h(){b(s,"class","face top svelte-4zdzbi"),b(n,"class","face bottom svelte-4zdzbi"),b(a,"class","face back svelte-4zdzbi"),b(f,"class","face front svelte-4zdzbi"),b(h,"class","face left svelte-4zdzbi"),b(v,"class","face right svelte-4zdzbi"),b(e,"class","block svelte-4zdzbi"),b(e,"style",y=`--size:${t[0]}px;--tx:${t[1]}px;--ty:${t[2]}px;--start:${t[3]}px`)},m(p,c){M(p,e,c),_(e,s),_(e,r),_(e,n),_(e,i),_(e,a),_(e,o),_(e,f),_(e,u),_(e,h),_(e,l),_(e,v)},p(p,[c]){c&15&&y!==(y=`--size:${p[0]}px;--tx:${p[1]}px;--ty:${p[2]}px;--start:${p[3]}px`)&&b(e,"style",y)},i:I,o:I,d(p){p&&d(e)}}}function ee(t,e,s){let{size:r=100}=e,{tx:n=0}=e,{ty:i=0}=e,{start:a}=e;return t.$$set=o=>{"size"in o&&s(0,r=o.size),"tx"in o&&s(1,n=o.tx),"ty"in o&&s(2,i=o.ty),"start"in o&&s(3,a=o.start)},[r,n,i,a]}class ne extends D{constructor(e){super(),P(this,e,ee,te,A,{size:0,tx:1,ty:2,start:3})}}function Y(t,e,s){const r=t.slice();return r[8]=e[s],r}function B(t,e,s){const r=t.slice();return r[11]=e[s],r}function tt(t,e,s){const r=t.slice();return r[14]=e[s],r}function et(t){let e,s;return e=new ne({props:{size:_t,tx:t[8],ty:t[11],start:mt.unsafeUniformIntDistribution(-2e3,0,t[0])}}),{c(){L(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,n){U(e,r,n),s=!0},p:I,i(r){s||(g(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){j(e,r)}}}function nt(t){let e,s,r=$(t[3]),n=[];for(let a=0;a<r.length;a+=1)n[a]=et(tt(t,r,a));const i=a=>m(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=S()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=S()},m(a,o){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(a,o);M(a,e,o),s=!0},p(a,o){if(o&7){r=$(a[3]);let f;for(f=0;f<r.length;f+=1){const u=tt(a,r,f);n[f]?(n[f].p(u,o),g(n[f],1)):(n[f]=et(u),n[f].c(),g(n[f],1),n[f].m(e.parentNode,e))}for(J(),f=r.length;f<n.length;f+=1)i(f);W()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)g(n[o]);s=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)m(n[o]);s=!1},d(a){a&&d(e),q(n,a)}}}function rt(t){let e,s,r=$(t[2]),n=[];for(let a=0;a<r.length;a+=1)n[a]=nt(B(t,r,a));const i=a=>m(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=S()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=S()},m(a,o){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(a,o);M(a,e,o),s=!0},p(a,o){if(o&15){r=$(a[2]);let f;for(f=0;f<r.length;f+=1){const u=B(a,r,f);n[f]?(n[f].p(u,o),g(n[f],1)):(n[f]=nt(u),n[f].c(),g(n[f],1),n[f].m(e.parentNode,e))}for(J(),f=r.length;f<n.length;f+=1)i(f);W()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)g(n[o]);s=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)m(n[o]);s=!1},d(a){a&&d(e),q(n,a)}}}function re(t){let e,s,r=$(t[1]),n=[];for(let a=0;a<r.length;a+=1)n[a]=rt(Y(t,r,a));const i=a=>m(n[a],1,1,()=>{n[a]=null});return{c(){for(let a=0;a<n.length;a+=1)n[a].c();e=S()},l(a){for(let o=0;o<n.length;o+=1)n[o].l(a);e=S()},m(a,o){for(let f=0;f<n.length;f+=1)n[f]&&n[f].m(a,o);M(a,e,o),s=!0},p(a,[o]){if(o&15){r=$(a[1]);let f;for(f=0;f<r.length;f+=1){const u=Y(a,r,f);n[f]?(n[f].p(u,o),g(n[f],1)):(n[f]=rt(u),n[f].c(),g(n[f],1),n[f].m(e.parentNode,e))}for(J(),f=r.length;f<n.length;f+=1)i(f);W()}},i(a){if(!s){for(let o=0;o<r.length;o+=1)g(n[o]);s=!0}},o(a){n=n.filter(Boolean);for(let o=0;o<n.length;o+=1)m(n[o]);s=!1},d(a){a&&d(e),q(n,a)}}}const se=4,_t=100,ae=100;function ie(t,e,s){const r=mt.xoroshiro128plus(se);let{xs:n=10}=e,{ys:i=10}=e,{zs:a=10}=e;const o=_t+ae,f=Array.from({length:n},(l,v)=>v*o-n*o*.5+o*.5),u=Array.from({length:i},(l,v)=>v*o-i*o*.5+o*.5),h=Array.from({length:a},(l,v)=>v*o-a*o*.5+o*.5);return t.$$set=l=>{"xs"in l&&s(4,n=l.xs),"ys"in l&&s(5,i=l.ys),"zs"in l&&s(6,a=l.zs)},[r,f,u,h,n,i,a]}class oe extends D{constructor(e){super(),P(this,e,ie,re,A,{xs:4,ys:5,zs:6})}}function fe(t){let e,s;return e=new oe({props:{xs:6,ys:6,zs:3}}),{c(){L(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,n){U(e,r,n),s=!0},p:I,i(r){s||(g(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){j(e,r)}}}function ue(t){let e,s;return e=new St({props:{$$slots:{default:[fe]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,n){U(e,r,n),s=!0},p(r,n){const i={};n&1&&(i.$$scope={dirty:n,ctx:r}),e.$set(i)},i(r){s||(g(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){j(e,r)}}}function le(t){let e,s;return e=new wt({props:{$$slots:{default:[ue]},$$scope:{ctx:t}}}),{c(){L(e.$$.fragment)},l(r){V(e.$$.fragment,r)},m(r,n){U(e,r,n),s=!0},p(r,[n]){const i={};n&1&&(i.$$scope={dirty:n,ctx:r}),e.$set(i)},i(r){s||(g(e.$$.fragment,r),s=!0)},o(r){m(e.$$.fragment,r),s=!1},d(r){j(e,r)}}}class ve extends D{constructor(e){super(),P(this,e,null,le,A,{})}}export{ve as component};
