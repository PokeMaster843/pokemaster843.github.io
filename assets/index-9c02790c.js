var ht=Object.defineProperty;var ft=(i,t,e)=>t in i?ht(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var q=(i,t,e)=>(ft(i,typeof t!="symbol"?t+"":t,e),e);import{createApp as ut}from"https://unpkg.com/vue@3/dist/vue.esm-browser.js";import{createRouter as pt,createWebHashHistory as _t}from"https://unpkg.com/vue-router@4.1.6/dist/vue-router.global.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(r){if(r.ep)return;r.ep=!0;const a=e(r);fetch(r.href,a)}})();function U(i){if(x(i)){const t={};for(let e=0;e<i.length;e++){const l=i[e],r=I(l)?vt(l):U(l);if(r)for(const a in r)t[a]=r[a]}return t}else{if(I(i))return i;if(O(i))return i}}const gt=/;(?![^(]*\))/g,yt=/:([^]+)/,bt=/\/\*.*?\*\//gs;function vt(i){const t={};return i.replace(bt,"").split(gt).forEach(e=>{if(e){const l=e.split(yt);l.length>1&&(t[l[0].trim()]=l[1].trim())}}),t}function H(i){let t="";if(I(i))t=i;else if(x(i))for(let e=0;e<i.length;e++){const l=H(i[e]);l&&(t+=l+" ")}else if(O(i))for(const e in i)i[e]&&(t+=e+" ");return t.trim()}const mt=[],It=()=>!1,xt=/^on[^a-z]/,kt=i=>xt.test(i),R=Object.assign,x=Array.isArray,$=i=>typeof i=="function",I=i=>typeof i=="string",St=i=>typeof i=="symbol",O=i=>i!==null&&typeof i=="object",tt=i=>{const t=Object.create(null);return e=>t[e]||(t[e]=i(e))},Et=/-(\w)/g,D=tt(i=>i.replace(Et,(t,e)=>e?e.toUpperCase():"")),et=tt(i=>i.charAt(0).toUpperCase()+i.slice(1));new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(St));function it(i){return nt(i)?it(i.__v_raw):!!(i&&i.__v_isReactive)}function nt(i){return!!(i&&i.__v_isReadonly)}function lt(i){return it(i)||nt(i)}function rt(i){return!!(i&&i.__v_isRef===!0)}function d(i){return rt(i)?i.value:i}let y=null,at=null;function C(i){const t=y;return y=i,at=i&&i.type.__scopeId||null,t}function A(i,t=y,e){if(!t||i._n)return i;const l=(...r)=>{l._d&&Q(-1);const a=C(t);let s;try{s=i(...r)}finally{C(a),l._d&&Q(1)}return s};return l._n=!0,l._c=!0,l._d=!0,l}const Tt=i=>i.__isSuspense,ot="components";function J(i,t){return $t(ot,i,!0,t)||i}const Mt=Symbol();function $t(i,t,e=!0,l=!1){const r=y||Ut;if(r){const a=r.type;if(i===ot){const c=Ht(a,!1);if(c&&(c===t||c===D(t)||c===et(D(t))))return a}const s=K(r[i]||a[i],t)||K(r.appContext[i],t);return!s&&l?a:s}}function K(i,t){return i&&(i[t]||i[D(t)]||i[et(D(t))])}function At(){return{app:null,config:{isNativeTag:It,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}const Lt=i=>i.__isTeleport,z=Symbol(void 0),Bt=Symbol(void 0),Ot=Symbol(void 0),Dt=Symbol(void 0),L=[];let _=null;function k(i=!1){L.push(_=i?null:[])}function Ft(){L.pop(),_=L[L.length-1]||null}let M=1;function Q(i){M+=i}function Nt(i){return i.dynamicChildren=M>0?_||mt:null,Ft(),M>0&&_&&_.push(i),i}function S(i,t,e,l,r,a){return Nt(n(i,t,e,l,r,a,!0))}function Vt(i){return i?i.__v_isVNode===!0:!1}const st="__vInternal",ct=({key:i})=>i??null,B=({ref:i,ref_key:t,ref_for:e})=>i!=null?I(i)||rt(i)||$(i)?{i:y,r:i,k:t,f:!!e}:i:null;function n(i,t=null,e=null,l=0,r=null,a=i===z?0:1,s=!1,c=!1){const f={__v_isVNode:!0,__v_skip:!0,type:i,props:t,key:t&&ct(t),ref:t&&B(t),scopeId:at,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:l,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:y};return c?(X(f,e),a&128&&i.normalize(f)):e&&(f.shapeFlag|=I(e)?8:16),M>0&&!s&&_&&(f.patchFlag>0||a&6)&&f.patchFlag!==32&&_.push(f),f}const m=Pt;function Pt(i,t=null,e=null,l=0,r=null,a=!1){if((!i||i===Mt)&&(i=Ot),Vt(i)){const c=P(i,t,!0);return e&&X(c,e),M>0&&!a&&_&&(c.shapeFlag&6?_[_.indexOf(i)]=c:_.push(c)),c.patchFlag|=-2,c}if(zt(i)&&(i=i.__vccOpts),t){t=jt(t);let{class:c,style:f}=t;c&&!I(c)&&(t.class=H(c)),O(f)&&(lt(f)&&!x(f)&&(f=R({},f)),t.style=U(f))}const s=I(i)?1:Tt(i)?128:Lt(i)?64:O(i)?4:$(i)?2:0;return n(i,t,e,l,r,s,a,!0)}function jt(i){return i?lt(i)||st in i?R({},i):i:null}function P(i,t,e=!1){const{props:l,ref:r,patchFlag:a,children:s}=i,c=t?Wt(l||{},t):l;return{__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&ct(c),ref:t&&t.ref?e&&r?x(r)?r.concat(B(t)):[r,B(t)]:B(t):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:s,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:t&&i.type!==z?a===-1?16:a|16:a,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:i.transition,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&P(i.ssContent),ssFallback:i.ssFallback&&P(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx}}function j(i=" ",t=0){return m(Bt,null,i,t)}function F(i,t){const e=m(Dt,null,i);return e.staticCount=t,e}function X(i,t){let e=0;const{shapeFlag:l}=i;if(t==null)t=null;else if(x(t))e=16;else if(typeof t=="object")if(l&65){const r=t.default;r&&(r._c&&(r._d=!1),X(i,r()),r._c&&(r._d=!0));return}else{e=32;const r=t._;!r&&!(st in t)?t._ctx=y:r===3&&y&&(y.slots._===1?t._=1:(t._=2,i.patchFlag|=1024))}else $(t)?(t={default:t,_ctx:y},e=32):(t=String(t),l&64?(e=16,t=[j(t)]):e=8);i.children=t,i.shapeFlag|=e}function Wt(...i){const t={};for(let e=0;e<i.length;e++){const l=i[e];for(const r in l)if(r==="class")t.class!==l.class&&(t.class=H([t.class,l.class]));else if(r==="style")t.style=U([t.style,l.style]);else if(kt(r)){const a=t[r],s=l[r];s&&a!==s&&!(x(a)&&a.includes(s))&&(t[r]=a?[].concat(a,s):s)}else r!==""&&(t[r]=l[r])}return t}At();let Ut=null;function Ht(i,t=!0){return $(i)?i.displayName||i.name:i.name||t&&i.__name}function zt(i){return $(i)&&"__vccOpts"in i}const Xt="/assets/menu-de1e5f70.svg",Y=(i,t)=>{const e=i.__vccOpts||i;for(const[l,r]of t)e[l]=r;return e},Yt={name:"App"},Gt={id:"navMenu"},qt=n("li",{id:"menuIcon"},[n("img",{src:Xt})],-1),Ct={id:"pages"},Jt=n("li",null,[n("a",null,"About Me")],-1),Kt=n("li",null,[n("a",null,"Experience")],-1),Qt=n("li",null,[n("a",null,"Motivation")],-1),Zt=n("li",null,[n("a",null,"Code Demos")],-1);function wt(i,t,e,l,r,a){const s=J("router-link"),c=J("router-view");return k(),S(z,null,[n("ul",Gt,[qt,n("div",Ct,[m(s,{to:"/about"},{default:A(()=>[Jt]),_:1}),m(s,{to:"/experience"},{default:A(()=>[Kt]),_:1}),m(s,{to:"/motivation"},{default:A(()=>[Qt]),_:1}),m(s,{to:"/demos"},{default:A(()=>[Zt]),_:1})])]),m(c)],64)}const Rt=Y(Yt,[["render",wt]]),te={},ee={id:"parent",style:{visibility:"hidden"}},ie=n("div",{class:"pageTitle"},[n("h1",null,"Welcome to my page!")],-1),ne=n("div",{class:"pageBody"},[n("p",{id:"welcomeText"},"Welcome to my demo site! I hope you find it useful in some capacity!")],-1),le=[ie,ne];function re(i,t){return k(),S("div",ee,le)}const ae=Y(te,[["render",re]]),oe="/assets/job_profile-d5236380.jpg";const se={id:"parent",style:{visibility:"hidden"}},ce=n("div",{class:"pageTitle"},[n("h1",null,"About Me")],-1),de=n("div",{class:"pageBody"},[n("img",{id:"profile",src:oe}),n("p",{id:"aboutText"},[j("Hello, my name is John Knickerbocker! I am currently a Third Year at the University of Virginia majoring in Computer Science and minoring in Japanese. Originating from my desire to make mods for "),n("i",null,"Minecraft"),j(" when I was in middle school, I have been programming in various languages for the better part of a decade now. What started as a hobby has turned into an intense passion that I am looking to make a career out of. I am highly driven, and very goal-oriented. I also enjoy tackling challenging problems, and try my utmost to maintain clean, readable, and manageable code in all of my projects. Thank you for your time, and please, look around as much as you like!")])],-1),he=[ce,de],fe={__name:"About",setup(i){return(t,e)=>(k(),S("div",se,he))}};function ue(i){let t=document.getElementById(i);t.style.display=t.style.display!=="block"?"block":"none"}const g={_toggleVisible:ue},pe={id:"parent",style:{visibility:"hidden"}},_e=n("div",{class:"pageTitle"},[n("h1",null,"Experience")],-1),ge={class:"pageBody"},ye=n("p",{id:"introText"},"Throughout the years, I have used a variety of different languages. However, I do not claim equal mastery over all of them. To see the details of my proficiency, click on a particular language. To hide details, click again.",-1),be={id:"langs"},ve=n("a",null,"Assembly",-1),me=n("ul",{id:"asm",class:"langDetails"},[n("li",null,[n("a",null,"Used for class")]),n("li",null,[n("a",null,"Little personal experience")])],-1),Ie=[ve,me],xe=n("a",null,"C++",-1),ke=n("ul",{id:"cpp",class:"langDetails"},[n("li",null,[n("a",null,"Used for classes very frequently")]),n("li",null,[n("a",null,"Used occasionally for personal projects")])],-1),Se=[xe,ke],Ee=n("a",null,"Git",-1),Te=n("ul",{id:"git",class:"langDetails"},[n("li",null,[n("a",null,"Little experience (less than a year)")])],-1),Me=[Ee,Te],$e=n("a",null,"HTML",-1),Ae=n("ul",{id:"html",class:"langDetails"},[n("li",null,[n("a",null,"Well-accustomed to language")]),n("li",null,[n("a",null,"Used frequently for personal projects")]),n("li",null,[n("a",null,"Confident in abilities")]),n("li",null,[n("a",null,"Used in the making of this website")])],-1),Le=[$e,Ae],Be=n("a",null,"Java",-1),Oe=n("ul",{id:"java",class:"langDetails"},[n("li",null,[n("a",null,"First language learned - fairly well-accustomed to it")]),n("li",null,[n("a",null,"Used occasionally for personal projects")]),n("li",null,[n("a",null,"Confident in abilities")])],-1),De=[Be,Oe],Fe=n("a",null,"JavaScript",-1),Ne=n("ul",{id:"js",class:"langDetails"},[n("li",null,[n("a",null,"Well-accustomed to language")]),n("li",null,[n("a",null,"Used frequently for personal projects")]),n("li",null,[n("a",null,"Confident in abilities")]),n("li",null,[n("a",null,"Used in the making of this website")])],-1),Ve=[Fe,Ne],Pe=n("a",null,"Python",-1),je=n("ul",{id:"py",class:"langDetails"},[n("li",null,[n("a",null,"Little experience (less than a year)")])],-1),We=[Pe,je],Ue=n("a",null,"Ruby on Rails/Ruby",-1),He=n("ul",{id:"rb",class:"langDetails"},[n("li",null,[n("a",null,"Little experience (less than a year)")]),n("li",null,[n("a",null,"Used occasionally for personal projects")])],-1),ze=[Ue,He],Xe=n("a",null,"SCSS/CSS",-1),Ye=n("ul",{id:"scss",class:"langDetails"},[n("li",null,[n("a",null,"Some experience (1-2 years)")]),n("li",null,[n("a",null,"Used occasionally for personal projects")]),n("li",null,[n("a",null,"Used in the making of this website")])],-1),Ge=[Xe,Ye],qe=n("a",null,"SQL",-1),Ce=n("ul",{id:"sql",class:"langDetails"},[n("li",null,[n("a",null,"Little experience (less than a year)")])],-1),Je=[qe,Ce],Ke=n("a",null,"Vite/Vue",-1),Qe=n("ul",{id:"vite",class:"langDetails"},[n("li",null,[n("a",null,"Little experience (less than a year)")]),n("li",null,[n("a",null,"Used in the making of this website")])],-1),Ze=[Ke,Qe],we={__name:"Experience",setup(i){return(t,e)=>(k(),S("div",pe,[_e,n("div",ge,[ye,n("ul",be,[n("li",{onClick:e[0]||(e[0]=l=>d(g)._toggleVisible("asm"))},Ie),n("li",{onClick:e[1]||(e[1]=l=>d(g)._toggleVisible("cpp"))},Se),n("li",{onClick:e[2]||(e[2]=l=>d(g)._toggleVisible("git"))},Me),n("li",{onClick:e[3]||(e[3]=l=>t._toggleVisible("html"))},Le),n("li",{onClick:e[4]||(e[4]=l=>d(g)._toggleVisible("java"))},De),n("li",{onClick:e[5]||(e[5]=l=>d(g)._toggleVisible("js"))},Ve),n("li",{onClick:e[6]||(e[6]=l=>d(g)._toggleVisible("py"))},We),n("li",{onClick:e[7]||(e[7]=l=>d(g)._toggleVisible("rb"))},ze),n("li",{onClick:e[8]||(e[8]=l=>d(g)._toggleVisible("scss"))},Ge),n("li",{onClick:e[9]||(e[9]=l=>d(g)._toggleVisible("sql"))},Je),n("li",{onClick:e[10]||(e[10]=l=>d(g)._toggleVisible("vite"))},Ze)])])]))}},Re={},ti={id:"parent",style:{visibility:"hidden"}},ei=n("div",{class:"pageTitle"},[n("h1",null,"Motivation")],-1),ii=n("div",{class:"pageBody"},[n("p",{id:"introText"},"Welcome to the motivation page!")],-1),ni=[ei,ii];function li(i,t){return k(),S("div",ti,ni)}const ri=Y(Re,[["render",li]]);const o={TIME:1/60,SCALE:100,W:500,H:500,get ORIGIN_X(){return this.W/2},get ORIGIN_Y(){return this.H/2},g:9.807};class Z{constructor(t,e,l,r){q(this,"MAX_POINTS",60);this.points=[],this.startIndex=0,this.elements=0,this.r=t,this.g=e,this.b=l,this.ctx=r,this.rgb="rgba("+t+","+e+","+l+","}add(t){this.elements<this.MAX_POINTS?(this.points[this.elements]=t,this.elements++):(this.points[this.startIndex]=t,this.startIndex=(this.startIndex+1)%this.MAX_POINTS)}draw(){if(this.elements>=2){this.ctx.strokeStyle=this.rgb+"1)",this.ctx.beginPath(),this.ctx.moveTo(this.points[this.startIndex][0],this.points[this.startIndex][1]);for(let t=1;t<this.elements;t++){let e=this.points[(this.startIndex+t)%this.MAX_POINTS];this.ctx.lineTo(e[0],e[1])}this.ctx.stroke()}}drawFaded(){if(this.elements>=2){let t=this.points[this.startIndex%this.MAX_POINTS],e;for(let l=1;l<this.elements;l++)this.ctx.strokeStyle=this.rgb+l/this.elements+")",this.ctx.beginPath(),this.ctx.moveTo(t[0],t[1]),e=this.points[(this.startIndex+l)%this.MAX_POINTS],this.ctx.lineTo(e[0],e[1]),this.ctx.stroke(),t=e}}}class ai{constructor(t,e,l,r,a,s,c){this.l1=t,this.l2=e,this.m1=l,this.m2=r,this.t1=a,this.t2=s,this.ctx=c,this.m12=this.m1+this.m2,this.dt1=0,this.dt2=0,this.p1=0,this.p2=0,this.dp1=0,this.dp2=0,this.tracker1=new Z(0,0,255,this.ctx),this.tracker2=new Z(255,0,0,this.ctx),this.render()}update(){let t=Math.sin(this.t1-this.t2),e=Math.cos(this.t1-this.t2),l=this.l1*this.l2*(this.m1+this.m2*t*t),r=this.p1*this.p2*t/l,a=Math.sin(2*(this.t1-this.t2))*(this.l2*this.l2*this.m2*this.p1*this.p1+this.l1*this.l1*this.m12*this.p2*this.p2-this.l1*this.l2*this.p1*this.p2*e)/(2*l*l);this.dt1=(this.l2*this.p1-this.l1*this.p2*e)/(this.l1*l),this.dt2=(this.l1*this.m12*this.p2-this.l2*this.m2*this.p1*e)/(this.l2*l),this.dp1=-this.m12*o.g*this.l1*Math.sin(this.t1)-r+a,this.dp2=-this.m2*o.g*this.l2*Math.sin(this.t2)+r-a,this.t1+=this.dt1*o.TIME,this.t2+=this.dt2*o.TIME,this.p1+=this.dp1*o.TIME,this.p2+=this.dp2*o.TIME}render(){this.update(),this.ctx.clearRect(0,0,o.W,o.H);let t=o.ORIGIN_X+this.l1*o.SCALE*Math.sin(this.t1),e=o.ORIGIN_Y+this.l1*o.SCALE*Math.cos(this.t1),l=t+this.l2*o.SCALE*Math.sin(this.t2),r=e+this.l2*o.SCALE*Math.cos(this.t2);this.tracker1.add([t,e]),this.tracker2.add([l,r]),this.tracker1.drawFaded(),this.tracker2.drawFaded(),this.ctx.strokeStyle="#ffffff",this.ctx.beginPath(),this.ctx.moveTo(o.ORIGIN_X,o.ORIGIN_Y),this.ctx.lineTo(t,e),this.ctx.moveTo(t,e),this.ctx.lineTo(l,r),this.ctx.stroke()}}const oi=0;class si{constructor(t,e,l){this.difficulty=t,this.rows=e,this.cols=l,this.attempted=[];for(let r=0;r<e;r++)this.attempted[r]=[]}findBestMove(t){let e=[],l=[];for(let a=0;a<this.rows;a++){e[a]=0;for(let s=0;s<this.cols;s++)a===0&&(l[s]=0),t[a][s]!==oi&&(e[a]++,l[s]++)}if(e[0]===1&&l[0]===1)return[0,0];let r=this.findStrategy(e,l);if(r[0]===0&&r[1]===0){let a=0;for(let s=0;s<this.rows;s++)a+=e[s];return this.avoidBadMove(e,l,a)}return r}findStrategy(t,e){if(this.difficulty>=0){if(t[0]>1&&t[1]===0)return[0,1];if(e[0]>1&&e[1]===0)return[1,0];if(t[0]!==e[0]&&t[1]===1)return t[0]>e[0]?[0,e[0]]:[t[0],0];if(t[0]===e[0]&&t[1]>1)return[1,1];if(t[0]===t[1]+1&&t[2]!==0)return[2,0];if(e[0]===e[1]+1&&e[2]!==0)return[0,2];if(t[2]===0&&t[0]-t[1]!==1)return t[0]>t[1]?[0,t[1]+1]:[1,t[1]-1];if(e[2]===0&&e[0]-e[1]!==1)return e[0]>e[1]?[e[1]+1,0]:[e[1]-1,1];if(t[0]-e[0]>1&&t[1]===2&&e[1]===2)return[0,e[0]+1];if(e[0]-t[0]>1&&t[1]===2&&e[1]===2)return[t[0]+1,0];if(Math.abs(t[0]-e[0])===1&&t[1]===2&&t[2]===2)return[2,1];if(Math.abs(t[0]-e[0])===1&&e[1]===2&&e[2]===2)return[1,2]}if(this.difficulty>=1){if(t[0]===4&&e[0]===3&&e[1]===3&&t[1]>2)return[1,2];if(e[0]===4&&t[1]===3&&t[0]===3&&e[1]>2)return[2,1];if(t[0]>4&&e[0]===3&&e[1]===3&&t[1]===2)return[0,4];if(e[0]>4&&t[0]===3&&t[1]===3&&e[1]===2)return[4,0];if(t[0]===4&&e[1]>3&&t[1]===2)return[3,0];if(e[0]===4&&t[1]>3&&e[1]===2)return[0,3];if(t[0]>6&&e[0]===4&&e[1]===4&&t[1]===2)return[0,6];if(e[0]>6&&t[0]===4&&t[1]===4&&e[1]===2)return[6,0];if(t[0]===6&&e[0]===4&&e[1]===4&&t[1]>2)return[1,2];if(e[0]===6&&t[0]===4&&t[1]===4&&e[1]>2)return[2,1];if(t[0]===6&&e[1]>4&&t[1]===2)return[4,0];if(e[0]===6&&t[1]>4&&e[1]===2)return[0,4];if(t[0]>5&&t[1]===3&&t[2]===2&&e[0]===3)return[0,5];if(e[0]>5&&e[1]===3&&e[2]===2&&t[0]===3)return[5,0];if(t[0]===5&&t[1]===5&&t[2]===2&&e[0]===3)return[1,3];if(e[0]===5&&e[1]===5&&e[2]===2&&t[0]===3)return[3,1];if(t[0]===5&&t[1]===3&&t[2]===3&&e[0]===3)return[2,2];if(e[0]===5&&e[1]===3&&e[2]===3&&t[0]===3)return[2,2];if(t[0]===5&&t[1]===3&&t[2]===2&&e[1]>3)return[3,0];if(e[0]===5&&e[1]===3&&e[2]===2&&t[1]>3)return[0,3];if(t[0]>6&&t[1]===4&&t[2]===2&&e[0]===3)return[0,6];if(e[0]>6&&e[1]===4&&e[2]===2&&t[0]===3)return[6,0];if(t[0]===6&&t[1]===6&&t[2]===2&&e[0]===3)return[1,4];if(e[0]===6&&e[1]===6&&e[2]===2&&t[0]===3)return[4,1];if(t[0]===6&&t[1]===4&&t[2]===4&&e[0]===3)return[2,2];if(e[0]===6&&e[1]===4&&e[2]===4&&t[0]===3)return[2,2];if(t[0]===6&&t[1]===4&&t[2]===2&&e[1]>3)return[3,0];if(e[0]===6&&e[1]===4&&e[2]===2&&t[1]>3)return[0,3];if(t[0]>7&&t[1]===4&&t[2]===3&&e[0]===3)return[0,7];if(e[0]>7&&e[1]===4&&e[2]===3&&t[0]===3)return[7,0];if(t[0]===7&&t[1]>4&&t[2]===3&&e[0]===3)return[1,4];if(e[0]===7&&e[1]>4&&e[2]===3&&t[0]===3)return[4,1];if(t[0]===7&&t[1]===4&&t[2]===4&&e[0]===3)return[2,3];if(e[0]===7&&e[1]===4&&e[2]===4&&t[0]===3)return[3,2];if(t[0]===7&&t[1]===4&&t[2]===3&&e[0]>3)return[3,0];if(e[0]===7&&e[1]===4&&e[2]===3&&t[0]>3)return[0,3];if(t[0]>6&&t[1]===3&&t[2]===3&&e[0]===3)return[0,6];if(e[0]>6&&e[1]===3&&e[2]===3&&t[0]===3)return[6,0];if(t[0]===6&&t[1]>3&&t[3]>=3&&e[0]===3)return[1,3];if(e[0]===6&&e[1]>3&&e[3]>=3&&t[0]===3)return[3,1];if(t[0]===6&&t[1]===3&&t[2]===3&&e[0]>3)return[3,0];if(e[0]===6&&e[1]===3&&e[2]===3&&t[0]>3)return[0,3]}return this.difficulty>=2,this.difficulty>=3,[0,0]}avoidBadMove(t,e,l){let r,a;do Math.random()<.5?(r=Math.floor(Math.random()*e[0])+Math.floor(Math.random()*e[0]/2),r=r>=e[0]?e[0]-1:r,a=Math.floor(Math.random()*t[r])+Math.floor(Math.random()*t[r]/2),a=a>=t[r]?t[r]-1:a):(a=Math.floor(Math.random()*t[0])+Math.floor(Math.random()*t[0]/2),a=a>=t[0]?t[0]-1:a,r=Math.floor(Math.random()*e[a])+Math.floor(Math.random()*e[a]/2),r=r>=e[a]?e[a]-1:r);while(this.attempted[r][a]===!0&&l>0);if(l===0)return[r,a];let s=[],c=[];for(let h=0;h<this.rows;h++)h<r?s[h]=t[h]:s[h]=a<t[h]?a:t[h];for(let h=0;h<this.cols;h++)h<a?c[h]=e[h]:c[h]=r<e[h]?r:e[h];let f=this.findStrategy(s,c);if(f[0]!==0||f[1]!==0)return this.attempted[r][a]=!0,this.avoidBadMove(t,e,l-1);for(let h=0;h<this.rows;h++)this.attempted[h]=[];return[r,a]}}const E=0,ci=1,w=2;class di{constructor(t,e,l,r,a){this.rows=t,this.cols=e,this.grid=[],this.playersTurn=l,this.ai=new si(r,t,e),this.gameOver=!1,this.currentTurn=1,this.ctx=a,this.reset()}reset(){for(let e=0;e<this.rows;e++){this.grid[e]=[];for(let l=0;l<this.cols;l++)this.grid[e][l]=ci}this.grid[0][0]=w,this.gameOver=!1,this.currentTurn=2;let t=this.playersTurn?"Player":"A.I.";document.getElementById("turnText").innerText="Turn 1 - "+t+"'s turn"}bite(t=null,e=null){if(this.gameOver)return!1;if(t===null){let l=this.ai.findBestMove(this.grid);t=l[0],e=l[1]}if(t<0||t>=this.rows||e<0||e>=this.cols||this.grid[t][e]===E)return alert("Please select a valid move."),!1;{for(let r=t;r<this.rows;r++)for(let a=e;a<this.cols;a++)this.grid[r][a]=E;if(this.grid[0][0]===E)return this.declareWinner(),!1;let l=this.playersTurn?"A.I.":"Player";return this.currentTurn++,document.getElementById("turnText").innerText="Turn "+(this.currentTurn>>1)+" - "+l+"'s turn",this.playersTurn=!this.playersTurn,!0}}declareWinner(){this.gameOver=!0,this.playersTurn?document.getElementById("turnText").innerText="A.I. wins! Better luck next time!":document.getElementById("turnText").innerText="Player wins!"}draw(t=1/0,e=1/0){this.ctx.clearRect(0,0,o.W,o.H),this.ctx.strokeStyle="#000000";for(let l=0;l<this.rows;l++)for(let r=0;r<this.cols;r++)this.grid[l][r]===E?this.ctx.fillStyle="#999999":this.ctx.fillStyle="#74594f",this.ctx.fillRect(r*o.SCALE,l*o.SCALE,o.SCALE,o.SCALE),this.grid[l][r]===w&&(this.ctx.strokeStyle="#f5e84f",this.ctx.beginPath(),this.ctx.moveTo(r*o.SCALE,l*o.SCALE),this.ctx.lineTo((r+1)*o.SCALE,(l+1)*o.SCALE),this.ctx.stroke(),this.ctx.beginPath(),this.ctx.moveTo((r+1)*o.SCALE,l*o.SCALE),this.ctx.lineTo(r*o.SCALE,(l+1)*o.SCALE),this.ctx.stroke(),this.ctx.strokeStyle="#000000"),this.grid[l][r]!==E&&l>=t&&r>=e&&(this.ctx.fillStyle="rgba(250,0,0,0.3)",this.ctx.fillRect(r*o.SCALE,l*o.SCALE,o.SCALE,o.SCALE)),this.ctx.strokeRect(r*o.SCALE,l*o.SCALE,o.SCALE,o.SCALE)}}const hi="rgba(26,0,51,1)",fi="This is the double pendulum simulation I have programmed. Click on the canvas to pause it!",ui="This is the chomp demo I have programmed. Select various A.I. difficulty levels to test your skills against!",pi="This is the third demo!";var b=null,p=null,v=null,T=!1,N=1/0,V=1/0,W="home";function _i(){let i=document.getElementsByClassName("demo"),t=document.getElementsByClassName("demoDiv");for(let e=0;e<i.length;e++)i[e].style.backgroundColor="rgba(0,0,0,0)",t[e].style.display="none";p!==null&&(clearInterval(p),p=null,v=null,document.getElementById("turnText").innerText="")}function dt(){p!==null&&clearInterval(p),p=setInterval(v,1e3*o.TIME)}function G(){o.SCALE=document.getElementById("drawScale").value,o.TIME=1/document.getElementById("timeScale").value,v!==null&&(clearInterval(p),p=setInterval(v,1e3*o.TIME))}function gi(i){_i(),document.getElementById(i).style.backgroundColor=hi,document.getElementById(i+"Demo").style.display="inline-block",document.getElementById("cnv").style.top="1vmin",document.getElementById("cnv").style.display="none",document.getElementById("turnText").style.display="none";let t;i==="dp"?t=fi:i==="chomp"?(t=ui,document.getElementById("turnText").style.display="block",document.getElementById("cnv").style.top="24pt"):i==="third"&&(t=pi),document.getElementById("textBlurb").innerText=t,W=i}function yi(){G();let i=document.getElementById("cnv");i.style.display="block",i.width=o.W,i.height=o.H,b=new ai(parseFloat(document.getElementById("l1").value),parseFloat(document.getElementById("l2").value),parseFloat(document.getElementById("m1").value),parseFloat(document.getElementById("m2").value),parseFloat(document.getElementById("t1").value),parseFloat(document.getElementById("t2").value),i.getContext("2d")),v=function(){b.render()},dt()}function bi(){G();let i=document.getElementById("cnv"),t=document.getElementById("aiDiff");b=new di(parseInt(document.getElementById("rows").value),parseInt(document.getElementById("cols").value),!document.getElementById("aiFirst").checked,parseInt(t.options[t.selectedIndex].id),i.getContext("2d")),i.style.display="block",i.width=o.SCALE*b.cols,i.height=o.SCALE*b.rows,v=function(){b.draw(Math.floor(V/o.SCALE),Math.floor(N/o.SCALE))},dt()}function vi(i){N=i.offsetX,V=i.offsetY}function mi(){N=1/0,V=1/0}function Ii(){W==="dp"?v!==null&&(p!==null?(clearInterval(p),p=null):p=setInterval(v,1e3*o.TIME)):W==="chomp"&&b.playersTurn&&!b.gameOver&&(b.bite(Math.floor(V/o.SCALE),Math.floor(N/o.SCALE)),setTimeout(function(){b.bite()},3e3))}function xi(){T=!T,T?document.getElementById("aiFirst").style.backgroundColor="#111422":document.getElementById("aiFirst").style.backgroundColor="#3c4777"}function ki(){T||(document.getElementById("aiFirst").style.backgroundColor="#3c4777")}function Si(){T?document.getElementById("aiFirst").style.backgroundColor="#111422":document.getElementById("aiFirst").style.backgroundColor="#4d5b99"}const u={_selectTab:gi,_changeScales:G,_newDP:yi,_newChomp:bi,_trackMouse:vi,_exitCanvas:mi,_clickFn:Ii,_toggleCheck:xi,_hoverIn:ki,_hoverOut:Si},Ei={id:"parent",style:{visibility:"hidden"}},Ti=n("div",{class:"pageTitle"},[n("h1",null,"Code Demos")],-1),Mi={class:"pageBody"},$i={id:"tabContainer"},Ai=n("a",null,"Double Pendulum",-1),Li=[Ai],Bi=n("a",null,"Chomp",-1),Oi=[Bi],Di=n("a",null,"3rd Demo",-1),Fi=[Di],Ni={id:"contentContainer"},Vi=n("p",{style:{visibility:"visible","padding-top":"1vmin"},id:"textBlurb"},"Welcome to the code demo page!",-1),Pi={class:"demoContainer"},ji={id:"misc"},Wi=F('<label class="idLabel" for="drawScale">Scale:</label><input class="numVal" type="number" id="drawScale" value="100"><label class="unitLabel" for="drawScale">px/m</label><label class="idLabel" for="timeScale">Frames:</label><input class="numVal" type="number" id="timeScale" value="60"><label class="unitLabel" for="drawScale">frames/sec</label>',6),Ui={class:"demoDiv",id:"dpDemo"},Hi=F('<div class="inputDiv" id="dp1"><label class="idLabel" for="l1">Pendulum 1:</label><input class="numVal" type="number" id="l1" value="1"><label class="unitLabel" for="l1">m</label><input class="numVal" type="number" id="m1" value="1"><label class="unitLabel" for="m1">kg</label><input class="numVal" type="number" id="t1" value="3"><label class="unitLabel" for="t1">rad</label></div><div class="inputDiv" id="dp2"><label class="idLabel" for="l2">Pendulum 2:</label><input class="numVal" type="number" id="l2" value="1"><label class="unitLabel" for="l2">m</label><input class="numVal" type="number" id="m2" value="1"><label class="unitLabel" for="m2">kg</label><input class="numVal" type="number" id="t2" value="4"><label class="unitLabel" for="t2">rad</label></div>',2),zi={class:"demoDiv",id:"chompDemo"},Xi=F('<div class="inputDiv" id="gridOptions"><label class="idLabel" for="rows">Grid Size:</label><input class="numVal" type="number" id="rows" value="4"><label class="unitLabel" for="rows">rows</label><a>×</a><input class="numVal" type="number" id="cols" value="7"><label class="unitLabel" for="cols">columns</label></div>',1),Yi={class:"inputDiv",id:"aiOptions"},Gi=F('<label class="idLabel" for="l1">A.I. Settings:</label><select class="listVal" id="aiDiff"><option id="0diff">Simple</option><option id="1diff">Easy</option><option id="2diff">Average</option><option id="3diff">Hard</option><option id="4diff">Expert</option></select><label>A.I. goes first?</label>',3),qi=n("div",{class:"demoDiv",id:"thirdDemo"},[n("p",null,"Demo Third content")],-1),Ci=n("p",{style:{display:"none"},id:"turnText"},null,-1),Ji={__name:"Demos",setup(i){return(t,e)=>(k(),S("div",Ei,[Ti,n("div",Mi,[n("div",$i,[n("ul",null,[n("li",{class:"demo",id:"dp",onClick:e[0]||(e[0]=l=>d(u)._selectTab("dp"))},Li),n("li",{class:"demo",id:"chomp",onClick:e[1]||(e[1]=l=>d(u)._selectTab("chomp"))},Oi),n("li",{class:"demo",id:"third",style:{display:"none"},onClick:e[2]||(e[2]=l=>d(u)._selectTab("third"))},Fi)])]),n("div",Ni,[Vi,n("div",Pi,[n("div",ji,[Wi,n("input",{type:"button",id:"applyChanges",value:"Apply",onClick:e[3]||(e[3]=l=>d(u)._changeScales())})]),n("div",Ui,[Hi,n("input",{class:"newDemo",type:"button",id:"newDP",value:"Run New Simulation",onClick:e[4]||(e[4]=l=>d(u)._newDP())})]),n("div",zi,[Xi,n("div",Yi,[Gi,n("div",{id:"aiFirst",onClick:e[5]||(e[5]=l=>d(u)._toggleCheck()),onMouseenter:e[6]||(e[6]=l=>d(u)._hoverIn()),onMouseleave:e[7]||(e[7]=l=>d(u)._hoverOut())},null,32)]),n("input",{class:"newDemo",type:"button",id:"newChomp",value:"New Chomp Game",onClick:e[8]||(e[8]=l=>d(u)._newChomp())})]),qi,Ci,n("canvas",{id:"cnv",width:"100",height:"100",onMousemove:e[9]||(e[9]=(...l)=>d(u)._trackMouse&&d(u)._trackMouse(...l)),onMouseleave:e[10]||(e[10]=l=>d(u)._exitCanvas()),onClick:e[11]||(e[11]=l=>d(u)._clickFn())},null,32)])])])]))}},Ki=pt({history:_t(),routes:[{path:"/",component:ae},{path:"/about",component:fe},{path:"/experience",component:we},{path:"/motivation",component:ri},{path:"/demos",component:Ji}]}),Qi=ut(Rt).use(Ki);Qi.mount("#app");
