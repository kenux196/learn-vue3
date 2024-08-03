import{i as Ae,e as Y,as as ve,u as T,a as v,W as de,j as $e,z as xe,at as Be,h,au as se,av as Me,aw as De,a2 as H,v as Ee,g as fe,ax as We,ap as Fe,c as be,ay as Qe,az as je,K as W,aA as p,aB as ce,aC as Ke,Z as ze,ad as Ve,ac as Oe,aD as He,b as Ne}from"./index-Bda5IBcs.js";let Ue=0;const Ge=["click","keydown"],Xe={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Ue++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ze(e,P,C,u){const r=Ae(ve,Y);if(r===Y)return console.error("QTab/QRouteTab component needs to be child of QTabs"),Y;const{proxy:M}=fe(),D=T(null),F=T(null),Q=T(null),N=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),A=v(()=>r.currentModel.value===e.name),U=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(A.value===!0?" q-tab--active"+(r.tabProps.value.activeClass?" "+r.tabProps.value.activeClass:"")+(r.tabProps.value.activeColor?` text-${r.tabProps.value.activeColor}`:"")+(r.tabProps.value.activeBgColor?` bg-${r.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&r.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||r.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(u!==void 0?u.linkClass.value:"")),I=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(r.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),g=v(()=>e.disable===!0||r.hasFocus.value===!0||A.value===!1&&r.hasActiveTab.value===!0?-1:e.tabindex||0);function y(l,b){if(b!==!0&&D.value!==null&&D.value.focus(),e.disable===!0){u!==void 0&&u.hasRouterLink.value===!0&&se(l);return}if(u===void 0){r.updateModel({name:e.name}),C("click",l);return}if(u.hasRouterLink.value===!0){const m=(d={})=>{let w;const q=d.to===void 0||We(d.to,e.to)===!0?r.avoidRouteWatcher=Fe():null;return u.navigateToRouterLink(l,{...d,returnRouterError:!0}).catch(_=>{w=_}).then(_=>{if(q===r.avoidRouteWatcher&&(r.avoidRouteWatcher=!1,w===void 0&&(_===void 0||_.message!==void 0&&_.message.startsWith("Avoided redundant navigation")===!0)&&r.updateModel({name:e.name})),d.returnRouterError===!0)return w!==void 0?Promise.reject(w):_})};C("click",l,m),l.defaultPrevented!==!0&&m();return}C("click",l)}function k(l){Me(l,[13,32])?y(l,!0):De(l)!==!0&&l.keyCode>=35&&l.keyCode<=40&&l.altKey!==!0&&l.metaKey!==!0&&r.onKbdNavigate(l.keyCode,M.$el)===!0&&se(l),C("keydown",l)}function E(){const l=r.tabProps.value.narrowIndicator,b=[],m=h("div",{ref:Q,class:["q-tab__indicator",r.tabProps.value.indicatorClass]});e.icon!==void 0&&b.push(h(H,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&b.push(h("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&b.push(e.alertIcon!==void 0?h(H,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):h("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),l===!0&&b.push(m);const d=[h("div",{class:"q-focus-helper",tabindex:-1,ref:D}),h("div",{class:I.value},Ee(P.default,b))];return l===!1&&d.push(m),d}const $={name:v(()=>e.name),rootRef:F,tabIndicatorRef:Q,routeData:u};de(()=>{r.unregisterTab($)}),$e(()=>{r.registerTab($)});function j(l,b){const m={ref:F,class:U.value,tabindex:g.value,role:"tab","aria-selected":A.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:y,onKeydown:k,...b};return xe(h(l,m,E()),[[Be,N.value]])}return{renderTab:j,$tabs:r}}const et=be({name:"QRouteTab",props:{...Qe,...Xe},emits:Ge,setup(e,{slots:P,emit:C}){const u=je({useDisableForRouterLinkProps:!1}),{renderTab:r,$tabs:M}=Ze(e,P,C,{exact:v(()=>e.exact),...u});return W(()=>`${e.name} | ${e.exact} | ${(u.resolvedLink.value||{}).href}`,()=>{M.verifyRouteModel()}),()=>r(u.linkTag.value,u.linkAttrs.value)}});function Je(e,P,C){const u=C===!0?["left","right"]:["top","bottom"];return`absolute-${P===!0?u[0]:u[1]}${e?` text-${e}`:""}`}const Ye=["left","center","right","justify"],tt=be({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Ye.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:P,emit:C}){const{proxy:u}=fe(),{$q:r}=u,{registerTick:M}=p(),{registerTick:D}=p(),{registerTick:F}=p(),{registerTimeout:Q,removeTimeout:N}=ce(),{registerTimeout:A,removeTimeout:U}=ce(),I=T(null),g=T(null),y=T(e.modelValue),k=T(!1),E=T(!0),$=T(!1),j=T(!1),l=[],b=T(0),m=T(!1);let d=null,w=null,q;const _=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:Je(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),he=v(()=>{const t=b.value,a=y.value;for(let n=0;n<t;n++)if(l[n].name.value===a)return!0;return!1}),ge=v(()=>`q-tabs__content--align-${k.value===!0?"left":j.value===!0?"justify":e.align}`),me=v(()=>`q-tabs row no-wrap items-center q-tabs--${k.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Te=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+ge.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),K=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),z=v(()=>e.vertical!==!0&&r.lang.rtl===!0),G=v(()=>Ke===!1&&z.value===!0);W(z,B),W(()=>e.modelValue,t=>{X({name:t,setCurrent:!0,skipEmit:!0})}),W(()=>e.outsideArrows,V);function X({name:t,setCurrent:a,skipEmit:n}){y.value!==t&&(n!==!0&&e["onUpdate:modelValue"]!==void 0&&C("update:modelValue",t),(a===!0||e["onUpdate:modelValue"]===void 0)&&(we(y.value,t),y.value=t))}function V(){M(()=>{ee({width:I.value.offsetWidth,height:I.value.offsetHeight})})}function ee(t){if(K.value===void 0||g.value===null)return;const a=t[K.value.container],n=Math.min(g.value[K.value.scroll],Array.prototype.reduce.call(g.value.children,(c,i)=>c+(i[K.value.content]||0),0)),s=a>0&&n>a;k.value=s,s===!0&&D(B),j.value=a<parseInt(e.breakpoint,10)}function we(t,a){const n=t!=null&&t!==""?l.find(c=>c.name.value===t):null,s=a!=null&&a!==""?l.find(c=>c.name.value===a):null;if(n&&s){const c=n.tabIndicatorRef.value,i=s.tabIndicatorRef.value;d!==null&&(clearTimeout(d),d=null),c.style.transition="none",c.style.transform="none",i.style.transition="none",i.style.transform="none";const o=c.getBoundingClientRect(),f=i.getBoundingClientRect();i.style.transform=e.vertical===!0?`translate3d(0,${o.top-f.top}px,0) scale3d(1,${f.height?o.height/f.height:1},1)`:`translate3d(${o.left-f.left}px,0,0) scale3d(${f.width?o.width/f.width:1},1,1)`,F(()=>{d=setTimeout(()=>{d=null,i.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",i.style.transform="none"},70)})}s&&k.value===!0&&x(s.rootRef.value)}function x(t){const{left:a,width:n,top:s,height:c}=g.value.getBoundingClientRect(),i=t.getBoundingClientRect();let o=e.vertical===!0?i.top-s:i.left-a;if(o<0){g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(o),B();return}o+=e.vertical===!0?i.height-c:i.width-n,o>0&&(g.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(o),B())}function B(){const t=g.value;if(t===null)return;const a=t.getBoundingClientRect(),n=e.vertical===!0?t.scrollTop:Math.abs(t.scrollLeft);z.value===!0?(E.value=Math.ceil(n+a.width)<t.scrollWidth-1,$.value=n>0):(E.value=n>0,$.value=e.vertical===!0?Math.ceil(n+a.height)<t.scrollHeight:Math.ceil(n+a.width)<t.scrollWidth)}function te(t){w!==null&&clearInterval(w),w=setInterval(()=>{qe(t)===!0&&L()},5)}function ae(){te(G.value===!0?Number.MAX_SAFE_INTEGER:0)}function ne(){te(G.value===!0?0:Number.MAX_SAFE_INTEGER)}function L(){w!==null&&(clearInterval(w),w=null)}function Ce(t,a){const n=Array.prototype.filter.call(g.value.children,f=>f===a||f.matches&&f.matches(".q-tab.q-focusable")===!0),s=n.length;if(s===0)return;if(t===36)return x(n[0]),n[0].focus(),!0;if(t===35)return x(n[s-1]),n[s-1].focus(),!0;const c=t===(e.vertical===!0?38:37),i=t===(e.vertical===!0?40:39),o=c===!0?-1:i===!0?1:void 0;if(o!==void 0){const f=z.value===!0?-1:1,R=n.indexOf(a)+o*f;return R>=0&&R<s&&(x(n[R]),n[R].focus({preventScroll:!0})),!0}}const ye=v(()=>G.value===!0?{get:t=>Math.abs(t.scrollLeft),set:(t,a)=>{t.scrollLeft=-a}}:e.vertical===!0?{get:t=>t.scrollTop,set:(t,a)=>{t.scrollTop=a}}:{get:t=>t.scrollLeft,set:(t,a)=>{t.scrollLeft=a}});function qe(t){const a=g.value,{get:n,set:s}=ye.value;let c=!1,i=n(a);const o=t<i?-1:1;return i+=o*5,i<0?(c=!0,i=0):(o===-1&&i<=t||o===1&&i>=t)&&(c=!0,i=t),s(a,i),B(),c}function le(t,a){for(const n in t)if(t[n]!==a[n])return!1;return!0}function Re(){let t=null,a={matchedLen:0,queryDiff:9999,hrefLen:0};const n=l.filter(o=>o.routeData!==void 0&&o.routeData.hasRouterLink.value===!0),{hash:s,query:c}=u.$route,i=Object.keys(c).length;for(const o of n){const f=o.routeData.exact.value===!0;if(o.routeData[f===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:R,query:Z,matched:Pe,href:Ie}=o.routeData.resolvedLink.value,J=Object.keys(Z).length;if(f===!0){if(R!==s||J!==i||le(c,Z)===!1)continue;t=o.name.value;break}if(R!==""&&R!==s||J!==0&&le(Z,c)===!1)continue;const S={matchedLen:Pe.length,queryDiff:i-J,hrefLen:Ie.length-R.length};if(S.matchedLen>a.matchedLen){t=o.name.value,a=S;continue}else if(S.matchedLen!==a.matchedLen)continue;if(S.queryDiff<a.queryDiff)t=o.name.value,a=S;else if(S.queryDiff!==a.queryDiff)continue;S.hrefLen>a.hrefLen&&(t=o.name.value,a=S)}t===null&&l.some(o=>o.routeData===void 0&&o.name.value===y.value)===!0||X({name:t,setCurrent:!0})}function ke(t){if(N(),m.value!==!0&&I.value!==null&&t.target&&typeof t.target.closest=="function"){const a=t.target.closest(".q-tab");a&&I.value.contains(a)===!0&&(m.value=!0,k.value===!0&&x(a))}}function _e(){Q(()=>{m.value=!1},30)}function O(){re.avoidRouteWatcher===!1?A(Re):U()}function oe(){if(q===void 0){const t=W(()=>u.$route.fullPath,O);q=()=>{t(),q=void 0}}}function Le(t){l.push(t),b.value++,V(),t.routeData===void 0||u.$route===void 0?A(()=>{if(k.value===!0){const a=y.value,n=a!=null&&a!==""?l.find(s=>s.name.value===a):null;n&&x(n.rootRef.value)}}):(oe(),t.routeData.hasRouterLink.value===!0&&O())}function Se(t){l.splice(l.indexOf(t),1),b.value--,V(),q!==void 0&&t.routeData!==void 0&&(l.every(a=>a.routeData===void 0)===!0&&q(),O())}const re={currentModel:y,tabProps:_,hasFocus:m,hasActiveTab:he,registerTab:Le,unregisterTab:Se,verifyRouteModel:O,updateModel:X,onKbdNavigate:Ce,avoidRouteWatcher:!1};ze(ve,re);function ie(){d!==null&&clearTimeout(d),L(),q!==void 0&&q()}let ue;return de(ie),Ve(()=>{ue=q!==void 0,ie()}),Oe(()=>{ue===!0&&oe(),V()}),()=>h("div",{ref:I,class:me.value,role:"tablist",onFocusin:ke,onFocusout:_e},[h(He,{onResize:ee}),h("div",{ref:g,class:Te.value,onScroll:B},Ne(P.default)),h(H,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(E.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||r.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:ae,onTouchstartPassive:ae,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L}),h(H,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+($.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||r.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:ne,onTouchstartPassive:ne,onMouseupPassive:L,onMouseleavePassive:L,onTouchendPassive:L})])}});export{et as Q,tt as a};
