import{g as _,k as s,o,c as i,s as m,Y as v,b as t,t as r,F as h,X as g}from"./index-Coaezwra.js";const d=t("h1",null,"글자수세기",-1),f={__name:"CalculatorCharacters",setup(c){const e=_(""),a=s(()=>(console.log(e.value),e.value.length)),u=s(()=>{const l=e.value.split(`
`).length;return e.value.replace(" ","").length-l+1});return(l,n)=>(o(),i(h,null,[d,m(t("textarea",{"onUpdate:modelValue":n[0]||(n[0]=p=>e.value=p)},null,512),[[v,e.value]]),t("p",null,"전체 글자수 : "+r(a.value),1),t("p",null,"공백 제외한 글자수 : "+r(u.value),1)],64))}},k={__name:"UtilsPage",setup(c){return(e,a)=>(o(),g(f))}};export{k as default};
