import{o as Ia,a as Ra,i as Na}from"./lifecycle.BU5EzDCk.js";import{$ as Wa,a8 as Oa,aJ as Ya,aK as qa,aL as je,u as ze,aM as Ua,ac as $e,aN as Ka,U as Ie,aO as mt,a5 as Ha,aP as Xa,c as rt,f as V,a as W,p as Ga,b as Ja,s as u,m as C,ak as q,g as t,d as dt,h as v,e as n,r as i,n as Va,t as Mt}from"./template.B636veSp.js";import{a as Qa,s as X}from"./render.BJQeV6x7.js";import{i as z}from"./if.C0Gox2Ch.js";import{e as Za,i as tr}from"./each.QYvFpfTn.js";import{a as O,s as it,c as Te}from"./props.O7IL6jnX.js";import{e as y}from"./utils.DBGfbq-9.js";import{I as f}from"./Icon.xTzJJthP.js";import{m as bt}from"./config.SYwuRD3w.js";import{I as er}from"./zh_TW.Cjjw3Vy_.js";import{i as ar}from"./translation.I8X3MHOT.js";const rr=()=>performance.now(),G={tick:l=>requestAnimationFrame(l),now:()=>rr(),tasks:new Set};function Re(){const l=G.now();G.tasks.forEach(r=>{r.c(l)||(G.tasks.delete(r),r.f())}),G.tasks.size!==0&&G.tick(Re)}function ir(l){let r;return G.tasks.size===0&&G.tick(Re),{promise:new Promise(h=>{G.tasks.add(r={c:l,f:h})}),abort(){G.tasks.delete(r)}}}function St(l,r){$e(()=>{l.dispatchEvent(new CustomEvent(r))})}function nr(l){if(l==="float")return"cssFloat";if(l==="offset")return"cssOffset";if(l.startsWith("--"))return l;const r=l.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(h=>h[0].toUpperCase()+h.slice(1)).join("")}function Me(l){const r={},h=l.split(";");for(const F of h){const[_,p]=F.split(":");if(!_||p===void 0)break;const $=nr(_.trim());r[$]=p.trim()}return r}const sr=l=>l;function lr(l,r,h,F){var _=(l&Ua)!==0,p="both",$,w=r.inert,L=r.style.overflow,d,g;function P(){return $e(()=>$??=h()(r,F?.()??{},{direction:p}))}var A={is_global:_,in(){r.inert=w,St(r,"introstart"),d=Qt(r,P(),g,1,()=>{St(r,"introend"),d?.abort(),d=$=void 0,r.style.overflow=L})},out(S){r.inert=!0,St(r,"outrostart"),g=Qt(r,P(),d,0,()=>{St(r,"outroend"),S?.()})},stop:()=>{d?.abort(),g?.abort()}},T=Wa;if((T.transitions??=[]).push(A),Qa){var M=_;if(!M){for(var c=T.parent;c&&(c.f&Oa)!==0;)for(;(c=c.parent)&&(c.f&Ya)===0;);M=!c||(c.f&qa)!==0}M&&je(()=>{ze(()=>A.in())})}}function Qt(l,r,h,F,_){var p=F===1;if(Ka(r)){var $,w=!1;return Ie(()=>{if(!w){var S=r({direction:p?"in":"out"});$=Qt(l,S,h,F,_)}}),{abort:()=>{w=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(h?.deactivate(),!r?.duration)return _(),{abort:mt,deactivate:mt,reset:mt,t:()=>F};const{delay:L=0,css:d,tick:g,easing:P=sr}=r;var A=[];if(p&&h===void 0&&(g&&g(0,1),d)){var T=Me(d(0,1));A.push(T,T)}var M=()=>1-F,c=l.animate(A,{duration:L,fill:"forwards"});return c.onfinish=()=>{c.cancel();var S=h?.t()??1-F;h?.abort();var x=F-S,Q=r.duration*Math.abs(x),Z=[];if(Q>0){var I=!1;if(d)for(var m=Math.ceil(Q/16.666666666666668),k=0;k<=m;k+=1){var a=S+x*P(k/m),J=Me(d(a,1-a));Z.push(J),I||=J.overflow==="hidden"}I&&(l.style.overflow="hidden"),M=()=>{var K=c.currentTime;return S+x*P(K/Q)},g&&ir(()=>{if(c.playState!=="running")return!1;var K=M();return g(K,1-K),!0})}c=l.animate(Z,{duration:Q,fill:"forwards"}),c.onfinish=()=>{M=()=>F,g?.(F,1-F),_()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=mt)},deactivate:()=>{_=mt},reset:()=>{F===0&&g?.(1,0)},t:()=>M()}}function Se(l,r){return l===r||l?.[Xa]===r}function De(l={},r,h,F){return je(()=>{var _,p;return Ha(()=>{_=p,p=[],ze(()=>{l!==h(...p)&&(r(l,...p),_&&Se(h(..._),l)&&r(null,..._))})}),()=>{Ie(()=>{p&&Se(h(...p),l)&&r(null,...p)})}}),l}function Pe(l){return function(...r){var h=r[0];return h.stopPropagation(),l?.apply(this,r)}}function or(l){const r=l-1;return r*r*r+1}function ur(l,{delay:r=0,duration:h=400,easing:F=or,axis:_="y"}={}){const p=getComputedStyle(l),$=+p.opacity,w=_==="y"?"height":"width",L=parseFloat(p[w]),d=_==="y"?["top","bottom"]:["left","right"],g=d.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),P=parseFloat(p[`padding${g[0]}`]),A=parseFloat(p[`padding${g[1]}`]),T=parseFloat(p[`margin${g[0]}`]),M=parseFloat(p[`margin${g[1]}`]),c=parseFloat(p[`border${g[0]}Width`]),S=parseFloat(p[`border${g[1]}Width`]);return{delay:r,duration:h,easing:F,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*$};${w}: ${x*L}px;padding-${d[0]}: ${x*P}px;padding-${d[1]}: ${x*A}px;margin-${d[0]}: ${x*T}px;margin-${d[1]}: ${x*M}px;border-${d[0]}-width: ${x*c}px;border-${d[1]}-width: ${x*S}px;min-${w}: 0`}}var cr=dt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),dr=dt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),vr=dt('<span class="text-sm text-[var(--content-meta)]"></span>'),fr=dt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),pr=dt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),mr=dt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
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
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
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
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
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
}</style>`,1);function Cr(l,r){Ja(r,!1);let h=bt.mode??"local",F=bt.meting_api??"https://www.bilibili.uno/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",_=bt.id??"14164869977",p=bt.server??"netease",$=bt.type??"playlist",w=C(!1),L=C(!1),d=C(!1),g=C(!1),P=C(0),A=C(0),T=C(.4),M=C(!1),c=C(!1),S=C(!1),x=C(0),Q=C(""),Z=C(!1),I=C({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),m=C([]),k=C(0),a=C(),J=C(),K=C();const Ne=[{id:1,title:"イチリンソウ",artist:"山本彩 ",cover:"assets/music/cover/山本彩 - イチリンソウ.jpg",url:"assets/music/url/山本彩 - イチリンソウ.mp3",duration:240}];async function We(){if(!F||!_)return;u(c,!0);const s=F.replace(":server",p).replace(":type",$).replace(":id",_).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(s);if(!D.ok)throw new Error("meting api error");const H=await D.json();u(m,H.map(N=>{let vt=N.name??N.title??"未知歌曲",wt=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:vt,artist:wt,cover:N.pic??"",url:N.url??"",duration:R}})),t(m).length>0&&Pt(t(m)[0]),u(c,!1)}catch{_t("Meting 歌单获取失败"),u(c,!1)}}function Oe(){!t(a)||!t(I).url||(t(w)?t(a).pause():t(a).play())}function ht(){u(L,!t(L)),t(L)&&(u(g,!1),u(d,!1))}function gt(){u(d,!t(d)),t(d)&&(u(L,!1),u(g,!1))}function Zt(){u(g,!t(g))}function Ye(){u(S,!t(S))}function qe(){u(x,(t(x)+1)%3)}function Ue(){if(t(m).length<=1)return;const s=t(k)>0?t(k)-1:t(m).length-1;xt(s)}function Dt(){if(t(m).length<=1)return;let s;if(t(S))do s=Math.floor(Math.random()*t(m).length);while(s===t(k)&&t(m).length>1);else s=t(k)<t(m).length-1?t(k)+1:0;xt(s)}function xt(s){if(s<0||s>=t(m).length)return;const D=t(w);u(k,s),t(a)&&t(a).pause(),Pt(t(m)[t(k)]),(D||!t(w))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function yt(s){return s.startsWith("http://")||s.startsWith("https://")||s.startsWith("/")?s:`/${s}`}function Pt(s){!s||!t(a)||(u(I,{...s}),s.url?(u(c,!0),t(a).pause(),q(a,t(a).currentTime=0),u(P,0),u(A,s.duration??0),t(a).removeEventListener("loadeddata",te),t(a).removeEventListener("error",ee),t(a).removeEventListener("loadstart",ae),t(a).addEventListener("loadeddata",te,{once:!0}),t(a).addEventListener("error",ee,{once:!0}),t(a).addEventListener("loadstart",ae,{once:!0}),q(a,t(a).src=yt(s.url)),t(a).load()):u(c,!1))}function te(){u(c,!1),t(a)?.duration&&t(a).duration>1&&(u(A,Math.floor(t(a).duration)),t(m)[t(k)]&&q(m,t(m)[t(k)].duration=t(A)),q(I,t(I).duration=t(A)))}function ee(s){u(c,!1),_t(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>Dt(),1e3):_t("播放列表中没有可用的歌曲")}function ae(){}function _t(s){u(Q,s),u(Z,!0),setTimeout(()=>{u(Z,!1)},3e3)}function Ke(){u(Z,!1)}function He(s){if(!t(a)||!t(J))return;const D=t(J).getBoundingClientRect(),N=(s.clientX-D.left)/D.width*t(A);q(a,t(a).currentTime=N),u(P,N)}function Xe(s){if(!t(a)||!t(K))return;const D=t(K).getBoundingClientRect(),H=Math.max(0,Math.min(1,(s.clientX-D.left)/D.width));u(T,H),q(a,t(a).volume=t(T)),u(M,t(T)===0)}function re(){t(a)&&(u(M,!t(M)),q(a,t(a).muted=t(M)))}function ie(s){if(!Number.isFinite(s)||s<0)return"0:00";const D=Math.floor(s/60),H=Math.floor(s%60);return`${D}:${H.toString().padStart(2,"0")}`}function Ge(){t(a)&&(t(a).addEventListener("play",()=>{u(w,!0)}),t(a).addEventListener("pause",()=>{u(w,!1)}),t(a).addEventListener("timeupdate",()=>{u(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(x)===1?(q(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(x)===2||t(k)<t(m).length-1||t(S)?Dt():u(w,!1)}),t(a).addEventListener("error",s=>{u(c,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ia(()=>{u(a,new Audio),q(a,t(a).volume=t(T)),Ge(),h==="meting"?We():(u(m,[...Ne]),t(m).length>0?Pt(t(m)[0]):_t("本地播放列表为空"))}),Ra(()=>{t(a)&&(t(a).pause(),q(a,t(a).src=""))}),Na();var ne=rt(),Je=V(ne);{var Ve=s=>{var D=mr(),H=V(D);{var N=e=>{var b=cr(),E=n(b),B=n(E);f(B,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var j=v(B,2),o=n(j,!0);i(j);var et=v(j,2),Lt=n(et);f(Lt,{icon:"material-symbols:close",class:"text-lg"}),i(et),i(E),i(b),Mt(()=>X(o,t(Q))),y("click",et,Ke),W(e,b)};z(H,e=>{t(Z)&&e(N)})}var vt=v(H,2);let wt;var R=n(vt);let se;var Qe=n(R);{var Ze=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},ta=e=>{var b=rt(),E=V(b);{var B=o=>{var et=dr();W(o,et)},j=o=>{f(o,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(E,o=>{t(w)?o(B):o(j,!1)},!0)}W(e,b)};z(Qe,e=>{t(c)?e(Ze):e(ta,!1)})}i(R);var nt=v(R,2);let le;var oe=n(nt),jt=n(oe),zt=n(jt);let ue;var ce=v(zt,2),ea=n(ce);{var aa=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},ra=e=>{var b=rt(),E=V(b);{var B=o=>{f(o,{icon:"material-symbols:pause",class:"text-white text-xl"})},j=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(E,o=>{t(w)?o(B):o(j,!1)},!0)}W(e,b)};z(ea,e=>{t(c)?e(aa):e(ra,!1)})}i(ce),i(jt);var $t=v(jt,2),It=n($t),ia=n(It,!0);i(It);var de=v(It,2),na=n(de,!0);i(de),i($t);var ve=v($t,2),kt=n(ve),sa=n(kt);f(sa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(kt);var Rt=v(kt,2),la=n(Rt);f(la,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Rt),i(ve),i(oe),i(nt);var Et=v(nt,2);let fe;var Nt=n(Et),Wt=n(Nt),pe=n(Wt);let me;i(Wt);var Ot=v(Wt,2),Yt=n(Ot),oa=n(Yt,!0);i(Yt);var qt=v(Yt,2),ua=n(qt,!0);i(qt);var be=v(qt,2),ca=n(be);i(be),i(Ot);var he=v(Ot,2),Ft=n(he),da=n(Ft);f(da,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ft);var Ut=v(Ft,2),va=n(Ut);f(va,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Ut),i(he),i(Nt);var Kt=v(Nt,2),st=n(Kt),fa=n(st);i(st),De(st,e=>u(J,e),()=>t(J)),i(Kt);var Ht=v(Kt,2),lt=n(Ht);let ge;var pa=n(lt);f(pa,{icon:"material-symbols:shuffle",class:"text-lg"}),i(lt);var ft=v(lt,2),ma=n(ft);f(ma,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(ft);var ot=v(ft,2);let xe;var ba=n(ot);{var ha=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ga=e=>{var b=rt(),E=V(b);{var B=o=>{f(o,{icon:"material-symbols:pause",class:"text-xl"})},j=o=>{f(o,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(E,o=>{t(w)?o(B):o(j,!1)},!0)}W(e,b)};z(ba,e=>{t(c)?e(ha):e(ga,!1)})}i(ot);var pt=v(ot,2),xa=n(pt);f(xa,{icon:"material-symbols:skip-next",class:"text-xl"}),i(pt);var At=v(pt,2);let ye;var ya=n(At);{var _a=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},wa=e=>{var b=rt(),E=V(b);{var B=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg"})},j=o=>{f(o,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(E,o=>{t(x)===2?o(B):o(j,!1)},!0)}W(e,b)};z(ya,e=>{t(x)===1?e(_a):e(wa,!1)})}i(At),i(Ht);var _e=v(Ht,2),Ct=n(_e),ka=n(Ct);{var Ea=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Fa=e=>{var b=rt(),E=V(b);{var B=o=>{f(o,{icon:"material-symbols:volume-down",class:"text-lg"})},j=o=>{f(o,{icon:"material-symbols:volume-up",class:"text-lg"})};z(E,o=>{t(T)<.5?o(B):o(j,!1)},!0)}W(e,b)};z(ka,e=>{t(M)||t(T)===0?e(Ea):e(Fa,!1)})}i(Ct);var tt=v(Ct,2),Aa=n(tt);i(tt),De(tt,e=>u(K,e),()=>t(K));var Bt=v(tt,2);let we;var Ca=n(Bt);f(Ca,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Bt),i(_e),i(Et);var Ba=v(Et,2);{var La=e=>{var b=pr(),E=n(b),B=n(E),j=n(B,!0);i(B);var o=v(B,2),et=n(o);f(et,{icon:"material-symbols:close",class:"text-lg"}),i(o),i(E);var Lt=v(E,2);Za(Lt,5,()=>t(m),tr,(Xt,ut,U)=>{var at=fr();let ke;var Gt=n(at),Ta=n(Gt);{var Ma=Y=>{f(Y,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Sa=Y=>{var Be=rt(),ja=V(Be);{var za=ct=>{f(ct,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},$a=ct=>{var Le=vr();Le.textContent=U+1,W(ct,Le)};z(ja,ct=>{U===t(k)?ct(za):ct($a,!1)},!0)}W(Y,Be)};z(Ta,Y=>{U===t(k)&&t(w)?Y(Ma):Y(Sa,!1)})}i(Gt);var Jt=v(Gt,2),Ee=n(Jt);i(Jt);var Fe=v(Jt,2),Tt=n(Fe);let Ae;var Da=n(Tt,!0);i(Tt);var Vt=v(Tt,2);let Ce;var Pa=n(Vt,!0);i(Vt),i(Fe),i(at),Mt(Y=>{ke=O(at,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,ke,{"bg-[var(--btn-plain-bg)]":U===t(k),"text-[var(--primary)]":U===t(k)}),it(at,"aria-label",`播放 ${t(ut).title??""} - ${t(ut).artist??""}`),it(Ee,"src",Y),it(Ee,"alt",t(ut).title),Ae=O(Tt,1,"font-medium truncate",null,Ae,{"text-[var(--primary)]":U===t(k),"text-90":U!==t(k)}),X(Da,t(ut).title),Ce=O(Vt,1,"text-sm text-[var(--content-meta)] truncate",null,Ce,{"text-[var(--primary)]":U===t(k)}),X(Pa,t(ut).artist)},[()=>yt(t(ut).cover)]),y("click",at,()=>xt(U)),y("keydown",at,Y=>{(Y.key==="Enter"||Y.key===" ")&&(Y.preventDefault(),xt(U))}),W(Xt,at)}),i(Lt),i(b),Mt(Xt=>X(j,Xt),[()=>ar(er.playlist)]),y("click",o,Zt),lr(3,b,()=>ur,()=>({duration:300,axis:"y"})),W(e,b)};z(Ba,e=>{t(g)&&e(La)})}i(vt),Va(2),Mt((e,b,E,B)=>{wt=O(vt,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,wt,{expanded:t(L),"hidden-mode":t(d)}),se=O(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,se,{"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),le=O(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,le,{"opacity-0":t(L)||t(d),"scale-95":t(L)||t(d),"pointer-events-none":t(L)||t(d)}),it(zt,"src",e),ue=O(zt,1,"w-full h-full object-cover transition-transform duration-300",null,ue,{spinning:t(w)&&!t(c),"animate-pulse":t(c)}),X(ia,t(I).title),X(na,t(I).artist),fe=O(Et,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,fe,{"opacity-0":!t(L),"scale-95":!t(L),"pointer-events-none":!t(L)}),it(pe,"src",b),me=O(pe,1,"w-full h-full object-cover transition-transform duration-300",null,me,{spinning:t(w)&&!t(c),"animate-pulse":t(c)}),X(oa,t(I).title),X(ua,t(I).artist),X(ca,`${E??""} / ${B??""}`),it(st,"aria-valuenow",t(A)>0?t(P)/t(A)*100:0),Te(fa,`width: ${t(A)>0?t(P)/t(A)*100:0}%`),ge=O(lt,1,"w-10 h-10 rounded-lg",null,ge,{"btn-regular":t(S),"btn-plain":!t(S)}),lt.disabled=t(m).length<=1,ft.disabled=t(m).length<=1,xe=O(ot,1,"btn-regular w-12 h-12 rounded-full",null,xe,{"opacity-50":t(c)}),ot.disabled=t(c),pt.disabled=t(m).length<=1,ye=O(At,1,"w-10 h-10 rounded-lg",null,ye,{"btn-regular":t(x)>0,"btn-plain":t(x)===0}),it(tt,"aria-valuenow",t(T)*100),Te(Aa,`width: ${t(T)*100}%`),we=O(Bt,1,"btn-plain w-8 h-8 rounded-lg",null,we,{"text-[var(--primary)]":t(g)})},[()=>yt(t(I).cover),()=>yt(t(I).cover),()=>ie(t(P)),()=>ie(t(A))]),y("click",R,gt),y("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),gt())}),y("click",kt,Pe(gt)),y("click",Rt,Pe(ht)),y("click",nt,ht),y("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),ht())}),y("click",Ft,gt),y("click",Ut,ht),y("click",st,He),y("keydown",st,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(J).getBoundingClientRect();const E=.5*t(A);t(a)&&(q(a,t(a).currentTime=E),u(P,E))}}),y("click",lt,Ye),y("click",ft,Ue),y("click",ot,Oe),y("click",pt,Dt),y("click",At,qe),y("click",Ct,re),y("click",tt,Xe),y("keydown",tt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&re())}),y("click",Bt,Zt),W(s,D)};z(Je,s=>{s(Ve)})}W(l,ne),Ga()}export{Cr as default};
