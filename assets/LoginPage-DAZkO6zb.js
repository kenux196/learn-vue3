import{g as s,o as i,c as d,b as e,n as a,_ as u,F as p}from"./index-4YiyT363.js";import{$ as c}from"./api-CPoMp7TT.js";const _=e("h5",null,"Login Test",-1),m=e("label",null,"ID: ",-1),v=e("label",null,"암호: ",-1),k={__name:"LoginPage",setup(g){const t=s("kenux"),o=s("password1004");function r(){c.auth.login(t.value,o.value)}return(f,l)=>(i(),d(p,null,[_,e("div",null,[m,a(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=n=>t.value=n)},null,512),[[u,t.value]])]),e("div",null,[v,a(e("input",{type:"password","onUpdate:modelValue":l[1]||(l[1]=n=>o.value=n)},null,512),[[u,o.value]])]),e("button",{onClick:r},"로그인")],64))}};export{k as default};
