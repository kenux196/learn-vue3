import{g as p,i as r,o,c as i,n as m,_ as v,b as t,t as s,F as h,A as g}from"./index-4YiyT363.js";const d=t("h1",null,"글자수세기",-1),f={__name:"CalculatorCharacters",setup(c){const e=p(""),a=r(()=>(console.log(e.value),e.value.length)),u=r(()=>{const l=e.value.split(`
`).length;return e.value.replace(" ","").length-l+1});return(l,n)=>(o(),i(h,null,[d,m(t("textarea",{"onUpdate:modelValue":n[0]||(n[0]=_=>e.value=_)},null,512),[[v,e.value]]),t("p",null,"전체 글자수 : "+s(a.value),1),t("p",null,"공백 제외한 글자수 : "+s(u.value),1)],64))}},B={__name:"UtilsPage",setup(c){return(e,a)=>(o(),g(f))}};export{B as default};
