function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{i as u,j as w,k as f,l as E,m as x,d as y,b as R,_ as t,E as V,o as P,c as T,a as _,n as D,t as I,f as b,w as m,q as v,s as O,u as A,x as h}from"./index-Cz5PLutD.js";import{a as L}from"./result_hash-CFfFGu58.js";const S=(e,s)=>{const o=e[s];return o?typeof o=="function"?o():Promise.resolve(o):new Promise((a,r)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(r.bind(null,new Error("Unknown variable dynamic import: "+s)))})},k="/assets/title-ChYzw3bu.png";function g(e){return typeof e=="function"?e():u(e)}const M=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const C=M?window.navigator:void 0;function B(){const e=f(!1),s=x();return s&&E(()=>{e.value=!0},s),e}function z(e){const s=B();return w(()=>(s.value,!!e()))}function N(e={},s={}){const{navigator:o=C}=s,a=o,r=z(()=>a&&"canShare"in a);return{isSupported:r,share:async(d={})=>{if(r.value){const l={...g(e),...g(d)};let c=!0;if(l.files&&a.canShare&&(c=a.canShare({files:l.files})),c)return a.share(l)}}}}const j={class:"bg-gradient-to-br from-white to-[#F6F800] h-lvh"},q=_("img",{src:k,class:"w-48 pl-5 pt-3"},null,-1),F={class:"mx-8 h-[calc(85dvh-52px)] flex flex-col justify-center items-center"},G=["src"],H={class:"fixed bottom-[calc(12dvh-20px)] right-6"},U=y({__name:"ResultView",setup(e){const s=O(),o=A(),a=f(""),r=f({}),{isSupported:n,share:d}=N(r),l=async()=>{n.value&&await d()};return R(async()=>{const c=s.hash.slice(1);if(L.result.every(i=>i.hash!==c)&&o.push({path:"/404"}),a.value=(await S(Object.assign({"../assets/results/023e71de8f1023cda4f92935f11f8878.png":()=>t(()=>import("./023e71de8f1023cda4f92935f11f8878-CJCAVImz.js"),__vite__mapDeps([])),"../assets/results/20ec3ffc00ed5c4a820b316f2bcb4af1.png":()=>t(()=>import("./20ec3ffc00ed5c4a820b316f2bcb4af1-tgmNhly7.js"),__vite__mapDeps([])),"../assets/results/2c401c3b998488b6675c42b8631139ba.png":()=>t(()=>import("./2c401c3b998488b6675c42b8631139ba-D-PNTWpN.js"),__vite__mapDeps([])),"../assets/results/3660b03b6bc97e063188939d7a8f49b1.png":()=>t(()=>import("./3660b03b6bc97e063188939d7a8f49b1-Cm01u4-R.js"),__vite__mapDeps([])),"../assets/results/4b23c2be801c4f60570960821471c192.png":()=>t(()=>import("./4b23c2be801c4f60570960821471c192-CfIzc1fG.js"),__vite__mapDeps([])),"../assets/results/560dc8f7dc86805c76a975b55921ee85.png":()=>t(()=>import("./560dc8f7dc86805c76a975b55921ee85-DjqQQjwd.js"),__vite__mapDeps([])),"../assets/results/6993009354b9e8452b734accc0bb7f45.png":()=>t(()=>import("./6993009354b9e8452b734accc0bb7f45-CiRAzAbM.js"),__vite__mapDeps([])),"../assets/results/8e985b0abc6a60d5611a7ec299880a9a.png":()=>t(()=>import("./8e985b0abc6a60d5611a7ec299880a9a-DH6Tq4Kp.js"),__vite__mapDeps([])),"../assets/results/aa065e0c6d79e97431537290138acab8.png":()=>t(()=>import("./aa065e0c6d79e97431537290138acab8-DmHf695S.js"),__vite__mapDeps([])),"../assets/results/bafc70e37c5a1856d47ae06de3020b4a.png":()=>t(()=>import("./bafc70e37c5a1856d47ae06de3020b4a-ChbC8Gj-.js"),__vite__mapDeps([])),"../assets/results/bbe39eea86b9ef7b66d6aad825570593.png":()=>t(()=>import("./bbe39eea86b9ef7b66d6aad825570593-CVJXWDrv.js"),__vite__mapDeps([])),"../assets/results/c8c6a04f4865b55dbab087496748030e.png":()=>t(()=>import("./c8c6a04f4865b55dbab087496748030e-4t7crxUO.js"),__vite__mapDeps([]))}),`../assets/results/${c}.png`)).default,n.value){const i=await fetch(a.value).then(p=>p.blob());r.value.files=[new File([i],"result.png",{type:i.type})]}}),E(()=>{n.value||V.warning({message:"內嵌瀏覽器無法長按下載及分享",center:!0,duration:7e3})}),(c,i)=>(P(),T("div",j,[q,_("div",F,[_("img",{src:a.value,class:"max-h-[70dvh]"},null,8,G),_("div",{class:D(["text-base animate-pulse",u(n)?"text-yellow-700":"text-red-700"])},I(u(n)?"長按圖片可以下載":"內嵌瀏覽器無法長按下載"),3)]),_("div",H,[b(u(h),{color:"#000000",size:"large",round:"",disabled:!u(n),class:"*:text-lg *:text-center *:font-bold *:text-white *:hover:text-yellow-500",onClick:i[0]||(i[0]=p=>l())},{default:m(()=>[v(" 分享 ")]),_:1},8,["disabled"]),b(u(h),{color:"#000000",size:"large",round:"",tag:"a",href:"https://ntuartfest.com/",target:"_blank",rel:"noopener noreferrer",class:"*:text-lg *:text-center *:font-bold *:text-white *:hover:text-yellow-500"},{default:m(()=>[v(" 回到藝術季官網 ")]),_:1})])]))}});export{U as default};
