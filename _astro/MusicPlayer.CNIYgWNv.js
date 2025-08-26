import{o as Ta,b as Pa,i as Ra,a as N,s as rt,e as Me}from"./props.DLehaskQ.js";import{a3 as za,ao as Ia,au as Wa,av as $a,o as Na,u as Ya,aw as qa,ax as Re,ay as Ga,v as Oa,az as ht,k as st,i as tt,a as Y,p as Ua,b as Ha,s as l,m as k,ar as O,g as t,f as vt,d as v,c as r,r as i,n as Ka,t as Tt,j as h}from"./utils.BJHMmq1a.js";import{a as Xa,s as V}from"./render.BYi1qR_C.js";import{i as R,I as f}from"./Icon.CK1nA5-y.js";import{e as Va,i as Ja}from"./each.CR_iVSS0.js";import{b as Se}from"./this.Dz1M-yaH.js";import{m as xt}from"./config.CXCwjNk2.js";import{I as Qa}from"./zh_TW.CqrCsd4X.js";import{i as Za}from"./translation.XGvbsbKv.js";const ti=()=>performance.now(),J={tick:c=>requestAnimationFrame(c),now:()=>ti(),tasks:new Set};function ze(){const c=J.now();J.tasks.forEach(s=>{s.c(c)||(J.tasks.delete(s),s.f())}),J.tasks.size!==0&&J.tick(ze)}function ei(c){let s;return J.tasks.size===0&&J.tick(ze),{promise:new Promise(w=>{J.tasks.add(s={c,f:w})}),abort(){J.tasks.delete(s)}}}function Pt(c,s){Re(()=>{c.dispatchEvent(new CustomEvent(s))})}function ai(c){if(c==="float")return"cssFloat";if(c==="offset")return"cssOffset";if(c.startsWith("--"))return c;const s=c.split("-");return s.length===1?s[0]:s[0]+s.slice(1).map(w=>w[0].toUpperCase()+w.slice(1)).join("")}function Te(c){const s={},w=c.split(";");for(const E of w){const[L,A]=E.split(":");if(!L||A===void 0)break;const z=ai(L.trim());s[z]=A.trim()}return s}const ii=c=>c;function ri(c,s,w,E){var L=(c&qa)!==0,A="both",z,x=s.inert,B=s.style.overflow,d,b;function P(){return Re(()=>z??=w()(s,E?.()??{},{direction:A}))}var F={is_global:L,in(){s.inert=x,Pt(s,"introstart"),d=ae(s,P(),b,1,()=>{Pt(s,"introend"),d?.abort(),d=z=void 0,s.style.overflow=B})},out(S){s.inert=!0,Pt(s,"outrostart"),b=ae(s,P(),d,0,()=>{Pt(s,"outroend"),S?.()})},stop:()=>{d?.abort(),b?.abort()}},j=za;if((j.transitions??=[]).push(F),Xa){var M=L;if(!M){for(var u=j.parent;u&&(u.f&Ia)!==0;)for(;(u=u.parent)&&(u.f&Wa)===0;);M=!u||(u.f&$a)!==0}M&&Na(()=>{Ya(()=>F.in())})}}function ae(c,s,w,E,L){var A=E===1;if(Ga(s)){var z,x=!1;return Oa(()=>{if(!x){var S=s({direction:A?"in":"out"});z=ae(c,S,w,E,L)}}),{abort:()=>{x=!0,z?.abort()},deactivate:()=>z.deactivate(),reset:()=>z.reset(),t:()=>z.t()}}if(w?.deactivate(),!s?.duration)return L(),{abort:ht,deactivate:ht,reset:ht,t:()=>E};const{delay:B=0,css:d,tick:b,easing:P=ii}=s;var F=[];if(A&&w===void 0&&(b&&b(0,1),d)){var j=Te(d(0,1));F.push(j,j)}var M=()=>1-E,u=c.animate(F,{duration:B,fill:"forwards"});return u.onfinish=()=>{u.cancel();var S=w?.t()??1-E;w?.abort();var g=E-S,et=s.duration*Math.abs(g),at=[];if(et>0){var I=!1;if(d)for(var p=Math.ceil(et/16.666666666666668),y=0;y<=p;y+=1){var a=S+g*P(y/p),Q=Te(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(c.style.overflow="hidden"),M=()=>{var U=u.currentTime;return S+g*P(U/et)},b&&ei(()=>{if(u.playState!=="running")return!1;var U=M();return b(U,1-U),!0})}u=c.animate(at,{duration:et,fill:"forwards"}),u.onfinish=()=>{M=()=>E,b?.(E,1-E),L()}},{abort:()=>{u&&(u.cancel(),u.effect=null,u.onfinish=ht)},deactivate:()=>{L=ht},reset:()=>{E===0&&b?.(1,0)},t:()=>M()}}function Pe(c){return function(...s){var w=s[0];return w.stopPropagation(),c?.apply(this,s)}}function si(c){const s=c-1;return s*s*s+1}function ni(c,{delay:s=0,duration:w=400,easing:E=si,axis:L="y"}={}){const A=getComputedStyle(c),z=+A.opacity,x=L==="y"?"height":"width",B=parseFloat(A[x]),d=L==="y"?["top","bottom"]:["left","right"],b=d.map(g=>`${g[0].toUpperCase()}${g.slice(1)}`),P=parseFloat(A[`padding${b[0]}`]),F=parseFloat(A[`padding${b[1]}`]),j=parseFloat(A[`margin${b[0]}`]),M=parseFloat(A[`margin${b[1]}`]),u=parseFloat(A[`border${b[0]}Width`]),S=parseFloat(A[`border${b[1]}Width`]);return{delay:s,duration:w,easing:E,css:g=>`overflow: hidden;opacity: ${Math.min(g*20,1)*z};${x}: ${g*B}px;padding-${d[0]}: ${g*P}px;padding-${d[1]}: ${g*F}px;margin-${d[0]}: ${g*j}px;margin-${d[1]}: ${g*M}px;border-${d[0]}-width: ${g*u}px;border-${d[1]}-width: ${g*S}px;min-${x}: 0`}}var oi=vt('<div class="fixed bottom-20 left-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),li=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),ui=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),ci=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),di=vt('<div class="playlist-panel float-panel fixed bottom-20 left-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),vi=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    left: 0;
}
.expanded-player {
    width: 320px;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        left: 8px !important;
        bottom: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        left: 8px !important;
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        left: 8px !important;
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function wi(c,s){Ha(s,!1);let w=xt.mode??"local",E=xt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",L=xt.id??"14164869977",A=xt.server??"netease",z=xt.type??"playlist",x=k(!1),B=k(!1),d=k(!1),b=k(!1),P=k(0),F=k(0),j=k(.7),M=k(!1),u=k(!1),S=k(!1),g=k(0),et=k(""),at=k(!1),I=k({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),p=k([]),y=k(0),a=k(),Q=k(),U=k();const Ie=[{id:1,title:"イチリンソウ",artist:"山本彩",cover:"assets/music/cover/山本彩 - イチリンソウ.jpg",url:"assets/music/url/山本彩 - イチリンソウ.mp3",duration:240},{id:2,title:"Go to the Sea",artist:"bassy,茶太,chata",cover:"assets/music/cover/bassy,茶太,chata - Go to the Sea.jpg",url:"assets/music/url/bassy,茶太,chata - Go to the Sea.mp3",duration:180},{id:3,title:"僕らの手には何もないけど、",artist:"RAM WIRE",cover:"assets/music/cover/RAM WIRE - 僕らの手には何もないけど、.jpg",url:"assets/music/url/RAM WIRE - 僕らの手には何もないけど、.mp3",duration:200},{id:4,title:"愛の賞味期限 - Love Expiration Date",artist:"tuki",cover:"assets/music/cover/tuki. - 愛の賞味期限 - Love Expiration Date.jpg",url:"assets/music/url/tuki. - 愛の賞味期限 - Love Expiration Date.mp3",duration:200},{id:5,title:"あいつら全員同窓会",artist:"ずっと真夜中でいいのに。",cover:"assets/music/cover/ずっと真夜中でいいのに。 - あいつら全員同窓会.jpg",url:"assets/music/url/ずっと真夜中でいいのに。 - あいつら全員同窓会.mp3",duration:200},{id:6,title:"夏速",artist:"ナツノセ",cover:"assets/music/cover/ナツノセ - 夏速.jpg",url:"assets/music/url/ナツノセ - 夏速.mp3",duration:200},{id:7,title:"叶わぬ恋じゃ終われない！",artist:"ハコニワリリィ",cover:"assets/music/cover/ハコニワリリィ - 叶わぬ恋じゃ終われない！.jpg",url:"assets/music/url/ハコニワリリィ - 叶わぬ恋じゃ終われない！.mp3",duration:200}];async function We(){if(!E||!L)return;l(u,!0);const n=E.replace(":server",A).replace(":type",z).replace(":id",L).replace(":auth","").replace(":r",Date.now().toString());try{const T=await fetch(n);if(!T.ok)throw new Error("meting api error");const H=await T.json();l(p,H.map($=>{let ft=$.name??$.title??"未知歌曲",Ft=$.artist??$.author??"未知艺术家",W=$.duration??0;return W>1e4&&(W=Math.floor(W/1e3)),(!Number.isFinite(W)||W<=0)&&(W=0),{id:$.id,title:ft,artist:Ft,cover:$.pic??"",url:$.url??"",duration:W}})),t(p).length>0&&zt(t(p)[0]),l(u,!1)}catch{It("Meting 歌单获取失败"),l(u,!1)}}function $e(){!t(a)||!t(I).url||(t(x)?t(a).pause():t(a).play())}function yt(){l(B,!t(B)),t(B)&&(l(b,!1),l(d,!1))}function _t(){l(d,!t(d)),t(d)&&(l(B,!1),l(b,!1))}function ie(){l(b,!t(b))}function Ne(){l(S,!t(S))}function Ye(){l(g,(t(g)+1)%3)}function qe(){if(t(p).length<=1)return;const n=t(y)>0?t(y)-1:t(p).length-1;wt(n)}function Rt(){if(t(p).length<=1)return;let n;if(t(S))do n=Math.floor(Math.random()*t(p).length);while(n===t(y)&&t(p).length>1);else n=t(y)<t(p).length-1?t(y)+1:0;wt(n)}function wt(n){if(n<0||n>=t(p).length)return;const T=t(x);l(y,n),t(a)&&t(a).pause(),zt(t(p)[t(y)]),(T||!t(x))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function Et(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function zt(n){!n||!t(a)||(l(I,{...n}),n.url?(l(u,!0),t(a).pause(),O(a,t(a).currentTime=0),l(P,0),l(F,n.duration??0),t(a).removeEventListener("loadeddata",re),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",re,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),O(a,t(a).src=Et(n.url)),t(a).load()):l(u,!1))}function re(){l(u,!1),t(a)?.duration&&t(a).duration>1&&(l(F,Math.floor(t(a).duration)),t(p)[t(y)]&&O(p,t(p)[t(y)].duration=t(F)),O(I,t(I).duration=t(F)))}function se(n){l(u,!1),It(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(p).length>1?setTimeout(()=>Rt(),1e3):It("播放列表中没有可用的歌曲")}function ne(){}function It(n){l(et,n),l(at,!0),setTimeout(()=>{l(at,!1)},3e3)}function Ge(){l(at,!1)}function Oe(n){if(!t(a)||!t(Q))return;const T=t(Q).getBoundingClientRect(),$=(n.clientX-T.left)/T.width*t(F);O(a,t(a).currentTime=$),l(P,$)}function Ue(n){if(!t(a)||!t(U))return;const T=t(U).getBoundingClientRect(),H=Math.max(0,Math.min(1,(n.clientX-T.left)/T.width));l(j,H),O(a,t(a).volume=t(j)),l(M,t(j)===0)}function oe(){t(a)&&(l(M,!t(M)),O(a,t(a).muted=t(M)))}function le(n){if(!Number.isFinite(n)||n<0)return"0:00";const T=Math.floor(n/60),H=Math.floor(n%60);return`${T}:${H.toString().padStart(2,"0")}`}function He(){t(a)&&(t(a).addEventListener("play",()=>{l(x,!0)}),t(a).addEventListener("pause",()=>{l(x,!1)}),t(a).addEventListener("timeupdate",()=>{l(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(g)===1?(O(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(g)===2||t(y)<t(p).length-1||t(S)?Rt():l(x,!1)}),t(a).addEventListener("error",n=>{l(u,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ta(()=>{l(a,new Audio),O(a,t(a).volume=t(j)),He(),w==="meting"?We():(l(p,Ie),t(p).length>0&&zt(t(p)[0]))}),Pa(()=>{t(a)&&(t(a).pause(),O(a,t(a).src=""))}),Ra();var ue=st(),Ke=tt(ue);{var Xe=n=>{var T=vi(),H=tt(T);{var $=e=>{var m=oi(),_=r(m),C=r(_);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var D=v(C,2),o=r(D,!0);i(D);var K=v(D,2),ct=r(K);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(K),i(_),i(m),Tt(()=>V(o,t(et))),h("click",K,Ge),Y(e,m)};R(H,e=>{t(at)&&e($)})}var ft=v(H,2);let Ft;var W=r(ft);let ce;var Ve=r(W);{var Je=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},Qe=e=>{var m=st(),_=tt(m);{var C=o=>{var K=li();Y(o,K)},D=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};R(_,o=>{t(x)?o(C):o(D,!1)},!0)}Y(e,m)};R(Ve,e=>{t(u)?e(Je):e(Qe,!1)})}i(W);var nt=v(W,2);let de;var ve=r(nt),Wt=r(ve),$t=r(Wt);let fe;var pe=v($t,2),Ze=r(pe);{var ta=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ea=e=>{var m=st(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},D=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};R(_,o=>{t(x)?o(C):o(D,!1)},!0)}Y(e,m)};R(Ze,e=>{t(u)?e(ta):e(ea,!1)})}i(pe),i(Wt);var Nt=v(Wt,2),Yt=r(Nt),aa=r(Yt,!0);i(Yt);var me=v(Yt,2),ia=r(me,!0);i(me),i(Nt);var be=v(Nt,2),kt=r(be),ra=r(kt);f(ra,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(kt);var qt=v(kt,2),sa=r(qt);f(sa,{icon:"material-symbols:expand-less",class:"text-lg"}),i(qt),i(be),i(ve),i(nt);var At=v(nt,2);let ge;var Gt=r(At),Ot=r(Gt),he=r(Ot);let xe;i(Ot);var Ut=v(Ot,2),Ht=r(Ut),na=r(Ht,!0);i(Ht);var Kt=v(Ht,2),oa=r(Kt,!0);i(Kt);var ye=v(Kt,2),la=r(ye);i(ye),i(Ut);var _e=v(Ut,2),Ct=r(_e),ua=r(Ct);f(ua,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ct);var Xt=v(Ct,2),ca=r(Xt);f(ca,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Xt),i(_e),i(Gt);var Vt=v(Gt,2),ot=r(Vt),da=r(ot);i(ot),Se(ot,e=>l(Q,e),()=>t(Q)),i(Vt);var Jt=v(Vt,2),lt=r(Jt);let we;var va=r(lt);f(va,{icon:"material-symbols:shuffle",class:"text-lg"}),i(lt);var pt=v(lt,2),fa=r(pt);f(fa,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let Ee;var pa=r(ut);{var ma=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ba=e=>{var m=st(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},D=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};R(_,o=>{t(x)?o(C):o(D,!1)},!0)}Y(e,m)};R(pa,e=>{t(u)?e(ma):e(ba,!1)})}i(ut);var mt=v(ut,2),ga=r(mt);f(ga,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Bt=v(mt,2);let Fe;var ha=r(Bt);{var xa=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},ya=e=>{var m=st(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},D=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};R(_,o=>{t(g)===2?o(C):o(D,!1)},!0)}Y(e,m)};R(ha,e=>{t(g)===1?e(xa):e(ya,!1)})}i(Bt),i(Jt);var ke=v(Jt,2),Dt=r(ke),_a=r(Dt);{var wa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ea=e=>{var m=st(),_=tt(m);{var C=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},D=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};R(_,o=>{t(j)<.5?o(C):o(D,!1)},!0)}Y(e,m)};R(_a,e=>{t(M)||t(j)===0?e(wa):e(Ea,!1)})}i(Dt);var it=v(Dt,2),Fa=r(it);i(it),Se(it,e=>l(U,e),()=>t(U));var Lt=v(it,2);let Ae;var ka=r(Lt);f(ka,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Lt),i(ke),i(At);var Aa=v(At,2);{var Ca=e=>{var m=di(),_=r(m),C=r(_),D=r(C,!0);i(C);var o=v(C,2),K=r(o);f(K,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(_);var ct=v(_,2);Va(ct,5,()=>t(p),Ja,(bt,Z,q)=>{var X=ci();let jt;var gt=r(X),Ba=r(gt);{var Da=G=>{f(G,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},La=G=>{var St=st(),te=tt(St);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},Sa=dt=>{var je=ui();je.textContent=q+1,Y(dt,je)};R(te,dt=>{q===t(y)?dt(ee):dt(Sa,!1)},!0)}Y(G,St)};R(Ba,G=>{q===t(y)&&t(x)?G(Da):G(La,!1)})}i(gt);var Qt=v(gt,2),Ce=r(Qt);i(Qt);var Be=v(Qt,2),Mt=r(Be);let De;var ja=r(Mt,!0);i(Mt);var Zt=v(Mt,2);let Le;var Ma=r(Zt,!0);i(Zt),i(Be),i(X),Tt((G,St,te,ee)=>{jt=N(X,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,jt,G),rt(X,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),rt(Ce,"src",St),rt(Ce,"alt",t(Z).title),De=N(Mt,1,"font-medium truncate",null,De,te),V(ja,t(Z).title),Le=N(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Le,ee),V(Ma,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":q===t(y),"text-[var(--primary)]":q===t(y)}),()=>Et(t(Z).cover),()=>({"text-[var(--primary)]":q===t(y),"text-90":q!==t(y)}),()=>({"text-[var(--primary)]":q===t(y)})]),h("click",X,()=>wt(q)),h("keydown",X,G=>{(G.key==="Enter"||G.key===" ")&&(G.preventDefault(),wt(q))}),Y(bt,X)}),i(ct),i(m),Tt(bt=>V(D,bt),[()=>Za(Qa.playlist)]),h("click",o,ie),ri(3,m,()=>ni,()=>({duration:300,axis:"y"})),Y(e,m)};R(Aa,e=>{t(b)&&e(Ca)})}i(ft),Ka(2),Tt((e,m,_,C,D,o,K,ct,bt,Z,q,X,jt,gt)=>{Ft=N(ft,1,"music-player fixed bottom-4 left-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=N(W,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,m),de=N(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,_),rt($t,"src",C),fe=N($t,1,"w-full h-full object-cover transition-transform duration-300",null,fe,D),V(aa,t(I).title),V(ia,t(I).artist),ge=N(At,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,o),rt(he,"src",K),xe=N(he,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),V(na,t(I).title),V(oa,t(I).artist),V(la,`${bt??""} / ${Z??""}`),rt(ot,"aria-valuenow",t(F)>0?t(P)/t(F)*100:0),Me(da,`width: ${t(F)>0?t(P)/t(F)*100:0}%`),we=N(lt,1,"w-10 h-10 rounded-lg",null,we,q),lt.disabled=t(p).length<=1,pt.disabled=t(p).length<=1,Ee=N(ut,1,"btn-regular w-12 h-12 rounded-full",null,Ee,X),ut.disabled=t(u),mt.disabled=t(p).length<=1,Fe=N(Bt,1,"w-10 h-10 rounded-lg",null,Fe,jt),rt(it,"aria-valuenow",t(j)*100),Me(Fa,`width: ${t(j)*100}%`),Ae=N(Lt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,gt)},[()=>({expanded:t(B),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(B)||t(d),"scale-95":t(B)||t(d),"pointer-events-none":t(B)||t(d)}),()=>Et(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>({"opacity-0":!t(B),"scale-95":!t(B),"pointer-events-none":!t(B)}),()=>Et(t(I).cover),()=>({spinning:t(x)&&!t(u),"animate-pulse":t(u)}),()=>le(t(P)),()=>le(t(F)),()=>({"btn-regular":t(S),"btn-plain":!t(S)}),()=>({"opacity-50":t(u)}),()=>({"btn-regular":t(g)>0,"btn-plain":t(g)===0}),()=>({"text-[var(--primary)]":t(b)})]),h("click",W,_t),h("keydown",W,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),h("click",kt,Pe(_t)),h("click",qt,Pe(yt)),h("click",nt,yt),h("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),h("click",Ct,_t),h("click",Xt,yt),h("click",ot,Oe),h("keydown",ot,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const _=.5*t(F);t(a)&&(O(a,t(a).currentTime=_),l(P,_))}}),h("click",lt,Ne),h("click",pt,qe),h("click",ut,$e),h("click",mt,Rt),h("click",Bt,Ye),h("click",Dt,oe),h("click",it,Ue),h("keydown",it,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&oe())}),h("click",Lt,ie),Y(n,T)};R(Ke,n=>{n(Xe)})}Y(c,ue),Ua()}export{wi as default};
