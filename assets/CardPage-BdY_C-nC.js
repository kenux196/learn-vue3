const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MemberCard-C-NapAuY.js","assets/index-Bda5IBcs.js","assets/index-OaJ1j6W2.css"])))=>i.map(i=>d[i]);
import{Y as b,r as v,o as m,k as d,f as n,m as l,x as h,F as _,n as x,E as I,t as S,ap as M,aq as k,ar as q}from"./index-Bda5IBcs.js";const y=n("div",{class:"text-h3 text-center"},"카드 만들기",-1),B={class:"row justify-end q-pb-sm"},C={class:"row q-col-gutter-lg"},E={class:"bg-grey q-mt-md"},D=n("p",null,[n("b",null,"Member Data")],-1),w={__name:"CardPage",setup(P){const u=k(()=>q(()=>import("./MemberCard-C-NapAuY.js"),__vite__mapDeps([0,1,2]))),a=b(),o=v(a.sessionStorage.getItem("members")||[]),f=()=>{o.unshift({mid:M(),name:"",team:"",contact:""})},g=(e,c)=>{const s=o.find(i=>i.mid===e.mid),r=a.sessionStorage.getItem("members")||[],t=r.find(i=>i.mid===e.mid);s&&(s.name=e.name,s.team=e.team,s.contact=e.contact,t?(t.name=e.name,t.team=e.team,t.contact=e.contact):r.unshift(s)),a.sessionStorage.set("members",r),c()},p=e=>{const c=o.findIndex(t=>t.mid===e),s=a.sessionStorage.getItem("members")||[],r=s.findIndex(t=>t.mid===e);c!==-1&&(o.splice(c,1),r!==-1&&s.splice(r,1)),a.sessionStorage.set("members",s)};return(e,c)=>(m(),d(_,null,[y,n("div",B,[l(h,{dense:"",icon:"add",round:"",color:"positive",onClick:f})]),n("div",C,[(m(!0),d(_,null,x(o,s=>(m(),d("div",{key:s,class:"col-6 col-md-4"},[l(I(u),{data:s,onUpsert:g,onRemove:p},null,8,["data"])]))),128))]),n("div",E,[D,n("p",null,S(o),1)])],64))}};export{w as default};
