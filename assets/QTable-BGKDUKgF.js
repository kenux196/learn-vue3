import{j as n,h as N,X as gt,Y as bt,Z as mt,i as v,_ as Se,$ as be,a0 as St,N as H,a1 as he,a2 as ye,a3 as ht,a4 as yt,g as A,a5 as _t,C as V,a6 as wt,a7 as Fe,a8 as De,a as Ee,a9 as qt,aa as Pt,R as je,ab as Ct,k as kt,ac as xt,ad as Le,ae as me,I as Me,af as Rt,E as Ae,ag as Ne,ah as Tt,ai as Q,Q as Bt,l as J}from"./index-DExbjKnZ.js";import{Q as Ot}from"./QLinearProgress-B_aImUGk.js";const Ft=n("div",{key:"svg",class:"q-checkbox__bg absolute"},[n("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24"},[n("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),n("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]),fe=N({name:"QCheckbox",props:gt,emits:bt,setup(e){function a(o,d){const r=v(()=>(o.value===!0?e.checkedIcon:d.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[n("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[n(Se,{class:"q-checkbox__icon",name:r.value})])]:[Ft]}return mt("checkbox",a)}}),Lt=N({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const d=H(),{proxy:{$q:r}}=d,g=s=>{o("click",s)};return()=>{if(e.props===void 0)return n("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:g},be(a.default));let s,u;const c=d.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const l=s.align==="right"?"unshift":"push";u=St(a.default,[]),u[l](n(Se,{class:s.__iconClass,name:r.iconSet.table.arrowUp}))}else u=be(a.default);const S={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:l=>{s.sortable===!0&&e.props.sort(s),g(l)}};return n("th",S,u)}}}),Mt={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},ge={xs:2,sm:4,md:8,lg:16,xl:24},Vt=N({name:"QSeparator",props:{...he,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=H(),o=ye(e,a.proxy.$q),d=v(()=>e.vertical===!0?"vertical":"horizontal"),r=v(()=>` q-separator--${d.value}`),g=v(()=>e.inset!==!1?`${r.value}-${Mt[e.inset]}`:""),s=v(()=>`q-separator${r.value}${g.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),u=v(()=>{const c={};if(e.size!==void 0&&(c[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const S=e.spaced===!0?`${ge.md}px`:e.spaced in ge?`${ge[e.spaced]}px`:e.spaced,l=e.vertical===!0?["Left","Right"]:["Top","Bottom"];c[`margin${l[0]}`]=c[`margin${l[1]}`]=S}return c});return()=>n("hr",{class:s.value,style:u.value,"aria-orientation":d.value})}}),$t=["horizontal","vertical","cell","none"],Dt=N({name:"QMarkupTable",props:{...he,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>$t.includes(e)}},setup(e,{slots:a}){const o=H(),d=ye(e,o.proxy.$q),r=v(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(d.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>n("div",{class:r.value},[n("table",{class:"q-table"},be(a.default))])}});function Qe(e,a){return n("div",e,[n("table",{class:"q-table"},a)])}const Et={list:Ct,table:Dt},jt=["list","table","__qtable"],At=N({name:"QVirtualScroll",props:{...ht,type:{type:String,default:"list",validator:e=>jt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:yt},setup(e,{slots:a,attrs:o}){let d;const r=A(null),g=v(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:u,padVirtualScroll:c,onVirtualScrollEvt:S}=_t({virtualScrollLength:g,getVirtualScrollTarget:C,getVirtualScrollEl:q}),l=v(()=>{if(g.value===0)return[];const O=(F,x)=>({index:s.value.from+x,item:F});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(O):e.itemsFn(s.value.from,s.value.to-s.value.from).map(O)}),m=v(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),w=v(()=>e.scrollTarget!==void 0?{}:{tabindex:0});V(g,()=>{u()}),V(()=>e.scrollTarget,()=>{y(),_()});function q(){return r.value.$el||r.value}function C(){return d}function _(){d=wt(q(),e.scrollTarget),d.addEventListener("scroll",S,Fe.passive)}function y(){d!==void 0&&(d.removeEventListener("scroll",S,Fe.passive),d=void 0)}function B(){let O=c(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(O=a.before().concat(O)),kt(a.after,O)}return De(()=>{u()}),Ee(()=>{_()}),qt(()=>{_()}),Pt(()=>{y()}),je(()=>{y()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:r,class:"q-table__middle "+m.value},B()):n(Et[e.type],{...o,ref:r,class:[o.class,m.value],...w.value},B)}}});let p=0;const Nt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Qt=["update:fullscreen","fullscreen"];function pt(){const e=H(),{props:a,emit:o,proxy:d}=e;let r,g,s;const u=A(!1);xt(e)===!0&&V(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),V(()=>a.fullscreen,m=>{u.value!==m&&c()}),V(u,m=>{o("update:fullscreen",m),o("fullscreen",m)});function c(){u.value===!0?l():S()}function S(){u.value!==!0&&(u.value=!0,s=d.$el.parentNode,s.replaceChild(g,d.$el),document.body.appendChild(d.$el),p++,p===1&&document.body.classList.add("q-body--fullscreen-mixin"),r={handler:l},Le.add(r))}function l(){u.value===!0&&(r!==void 0&&(Le.remove(r),r=void 0),s.replaceChild(d.$el,g),u.value=!1,p=Math.max(0,p-1),p===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return De(()=>{g=document.createElement("span")}),Ee(()=>{a.fullscreen===!0&&S()}),je(l),Object.assign(d,{toggleFullscreen:c,setFullscreen:S,exitFullscreen:l}),{inFullscreen:u,toggleFullscreen:c}}function Ht(e,a){return new Date(e)-new Date(a)}const zt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function It(e,a,o,d){const r=v(()=>{const{sortBy:u}=a.value;return u&&o.value.find(c=>c.name===u)||null}),g=v(()=>e.sortMethod!==void 0?e.sortMethod:(u,c,S)=>{const l=o.value.find(q=>q.name===c);if(l===void 0||l.field===void 0)return u;const m=S===!0?-1:1,w=typeof l.field=="function"?q=>l.field(q):q=>q[l.field];return u.sort((q,C)=>{let _=w(q),y=w(C);return l.rawSort!==void 0?l.rawSort(_,y,q,C)*m:_==null?-1*m:y==null?1*m:l.sort!==void 0?l.sort(_,y,q,C)*m:me(_)===!0&&me(y)===!0?(_-y)*m:Me(_)===!0&&Me(y)===!0?Ht(_,y)*m:typeof _=="boolean"&&typeof y=="boolean"?(_-y)*m:([_,y]=[_,y].map(B=>(B+"").toLocaleString().toLowerCase()),_<y?-1*m:_===y?0:m)})});function s(u){let c=e.columnSortOrder;if(Rt(u)===!0)u.sortOrder&&(c=u.sortOrder),u=u.name;else{const m=o.value.find(w=>w.name===u);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==u?(S=u,l=c==="da"):e.binaryStateSort===!0?l=!l:l===!0?c==="ad"?S=null:l=!1:c==="ad"?l=!0:S=null,d({sortBy:S,descending:l,page:1})}return{columnToSort:r,computedSortMethod:g,sort:s}}const Ut={filter:[String,Object],filterMethod:Function};function Kt(e,a){const o=v(()=>e.filterMethod!==void 0?e.filterMethod:(d,r,g,s)=>{const u=r?r.toLowerCase():"";return d.filter(c=>g.some(S=>{const l=s(S,c)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(u)!==-1}))});return V(()=>e.filter,()=>{Ae(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function Wt(e,a){for(const o in a)if(a[o]!==e[o])return!1;return!0}function Ve(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Gt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Xt(e,a){const{props:o,emit:d}=e,r=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length!==0?o.rowsPerPageOptions[0]:5},o.pagination)),g=v(()=>{const l=o["onUpdate:pagination"]!==void 0?{...r.value,...o.pagination}:r.value;return Ve(l)}),s=v(()=>g.value.rowsNumber!==void 0);function u(l){c({pagination:l,filter:o.filter})}function c(l={}){Ae(()=>{d("request",{pagination:l.pagination||g.value,filter:l.filter||o.filter,getCellValue:a})})}function S(l,m){const w=Ve({...g.value,...l});if(Wt(g.value,w)===!0){s.value===!0&&m===!0&&u(w);return}if(s.value===!0){u(w);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?d("update:pagination",w):r.value=w}return{innerPagination:r,computedPagination:g,isServerSide:s,requestServerInteraction:c,setPagination:S}}function Yt(e,a,o,d,r,g){const{props:s,emit:u,proxy:{$q:c}}=e,S=v(()=>d.value===!0?o.value.rowsNumber||0:g.value),l=v(()=>{const{page:x,rowsPerPage:R}=o.value;return(x-1)*R}),m=v(()=>{const{page:x,rowsPerPage:R}=o.value;return x*R}),w=v(()=>o.value.page===1),q=v(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/o.value.rowsPerPage))),C=v(()=>m.value===0?!0:o.value.page>=q.value),_=v(()=>(s.rowsPerPageOptions.includes(a.value.rowsPerPage)?s.rowsPerPageOptions:[a.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(R=>({label:R===0?c.lang.table.allRows:""+R,value:R})));V(q,(x,R)=>{if(x===R)return;const z=o.value.page;x&&!z?r({page:1}):x<z&&r({page:x})});function y(){r({page:1})}function B(){const{page:x}=o.value;x>1&&r({page:x-1})}function O(){const{page:x,rowsPerPage:R}=o.value;m.value>0&&x*R<S.value&&r({page:x+1})}function F(){r({page:q.value})}return s["onUpdate:pagination"]!==void 0&&u("update:pagination",{...o.value}),{firstRowIndex:l,lastRowIndex:m,isFirstPage:w,isLastPage:C,pagesNumber:q,computedRowsPerPageOptions:_,computedRowsNumber:S,firstPage:y,prevPage:B,nextPage:O,lastPage:F}}const Zt={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},Jt=["update:selected","selection"];function el(e,a,o,d){const r=v(()=>{const C={};return e.selected.map(d.value).forEach(_=>{C[_]=!0}),C}),g=v(()=>e.selection!=="none"),s=v(()=>e.selection==="single"),u=v(()=>e.selection==="multiple"),c=v(()=>o.value.length!==0&&o.value.every(C=>r.value[d.value(C)]===!0)),S=v(()=>c.value!==!0&&o.value.some(C=>r.value[d.value(C)]===!0)),l=v(()=>e.selected.length);function m(C){return r.value[C]===!0}function w(){a("update:selected",[])}function q(C,_,y,B){a("selection",{rows:_,added:y,keys:C,evt:B});const O=s.value===!0?y===!0?_:[]:y===!0?e.selected.concat(_):e.selected.filter(F=>C.includes(d.value(F))===!1);a("update:selected",O)}return{hasSelectionMode:g,singleSelection:s,multipleSelection:u,allRowsSelected:c,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:m,clearSelection:w,updateSelection:q}}function $e(e){return Array.isArray(e)?e.slice():[]}const tl={expanded:Array},ll=["update:expanded"];function al(e,a){const o=A($e(e.expanded));V(()=>e.expanded,s=>{o.value=$e(s)});function d(s){return o.value.includes(s)}function r(s){e.expanded!==void 0?a("update:expanded",s):o.value=s}function g(s,u){const c=o.value.slice(),S=c.indexOf(s);u===!0?S===-1&&(c.push(s),r(c)):S!==-1&&(c.splice(S,1),r(c))}return{isRowExpanded:d,setExpanded:r,updateExpanded:g}}const nl={visibleColumns:Array};function ol(e,a,o){const d=v(()=>{if(e.columns!==void 0)return e.columns;const u=e.rows[0];return u!==void 0?Object.keys(u).map(c=>({name:c,label:c.toUpperCase(),field:c,align:me(u[c])?"right":"left",sortable:!0})):[]}),r=v(()=>{const{sortBy:u,descending:c}=a.value;return(e.visibleColumns!==void 0?d.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):d.value).map(l=>{const m=l.align||"right",w=`text-${m}`;return{...l,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:w+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===u?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>w+" "+l.classes:q=>w+" "+l.classes(q):()=>w}})}),g=v(()=>{const u={};return r.value.forEach(c=>{u[c.name]=c}),u}),s=v(()=>e.tableColspan!==void 0?e.tableColspan:r.value.length+(o.value===!0?1:0));return{colList:d,computedCols:r,computedColsMap:g,computedColspan:s}}const ee="q-table__bottom row items-center",pe={};Ne.forEach(e=>{pe[e]={}});const sl=N({name:"QTable",props:{rows:{type:Array,required:!0},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{},...pe,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,...he,...Nt,...nl,...Ut,...Gt,...tl,...Zt,...zt},emits:["request","virtualScroll",...Qt,...ll,...Jt],setup(e,{slots:a,emit:o}){const d=H(),{proxy:{$q:r}}=d,g=ye(e,r),{inFullscreen:s,toggleFullscreen:u}=pt(),c=v(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),l=A(null),m=v(()=>e.grid!==!0&&e.virtualScroll===!0),w=v(()=>" q-table__card"+(g.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),q=v(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":w.value)+(g.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=v(()=>q.value+(e.loading===!0?" q-table--loading":""));V(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+q.value,()=>{m.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:_,computedPagination:y,isServerSide:B,requestServerInteraction:O,setPagination:F}=Xt(d,E),{computedFilterMethod:x}=Kt(e,F),{isRowExpanded:R,setExpanded:z,updateExpanded:He}=al(e,o),te=v(()=>{let t=e.rows;if(B.value===!0||t.length===0)return t;const{sortBy:i,descending:f}=y.value;return e.filter&&(t=x.value(t,e.filter,L.value,E)),We.value!==null&&(t=Ge.value(e.rows===t?t.slice():t,i,f)),t}),_e=v(()=>te.value.length),$=v(()=>{let t=te.value;if(B.value===!0)return t;const{rowsPerPage:i}=y.value;return i!==0&&(U.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(U.value,K.value)),t}),{hasSelectionMode:D,singleSelection:ze,multipleSelection:we,allRowsSelected:Ie,someRowsSelected:qe,rowsSelectedNumber:le,isRowSelected:ae,clearSelection:Ue,updateSelection:I}=el(e,o,$,c),{colList:Ke,computedCols:L,computedColsMap:Pe,computedColspan:Ce}=ol(e,y,D),{columnToSort:We,computedSortMethod:Ge,sort:ne}=It(e,y,Ke,F),{firstRowIndex:U,lastRowIndex:K,isFirstPage:oe,isLastPage:re,pagesNumber:W,computedRowsPerPageOptions:Xe,computedRowsNumber:G,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce}=Yt(d,_,y,B,F,_e),Ye=v(()=>$.value.length===0),Ze=v(()=>{const t={};return Ne.forEach(i=>{t[i]=e[i]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Je(){m.value===!0&&l.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?Be:null;if(m.value===!0){const f=a["top-row"],b=a["bottom-row"],h={default:k=>xe(k.item,a.body,k.index)};if(f!==void 0){const k=n("tbody",f({cols:L.value}));h.before=t===null?()=>k:()=>[t()].concat(k)}else t!==null&&(h.before=t);return b!==void 0&&(h.after=()=>n("tbody",b({cols:L.value}))),n(At,{ref:l,class:e.tableClass,style:e.tableStyle,...Ze.value,scrollTarget:e.virtualScrollTarget,items:$.value,type:"__qtable",tableColspan:Ce.value,onVirtualScroll:lt},h)}const i=[at()];return t!==null&&i.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},i)}function tt(t,i){if(l.value!==null){l.value.scrollTo(t,i);return}t=parseInt(t,10);const f=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(f!==null){const b=S.value.querySelector(".q-table__middle.scroll"),h=f.offsetTop-e.virtualScrollStickySizeStart,k=h<b.scrollTop?"decrease":"increase";b.scrollTop=h,o("virtualScroll",{index:t,from:0,to:_.value.rowsPerPage-1,direction:k})}}function lt(t){o("virtualScroll",t)}function ke(){return[n(Ot,{class:"q-table__linear-progress",color:e.color,dark:g.value,indeterminate:!0,trackColor:"transparent"})]}function xe(t,i,f){const b=c.value(t),h=ae(b);if(i!==void 0)return i(Re({key:b,row:t,pageIndex:f,__trClass:h?"selected":""}));const k=a["body-cell"],P=L.value.map(T=>{const Y=a[`body-cell-${T.name}`],Z=Y!==void 0?Y:k;return Z!==void 0?Z(nt({key:b,row:t,pageIndex:f,col:T})):n("td",{class:T.__tdClass(t),style:T.__tdStyle(t)},E(T,t))});if(D.value===!0){const T=a["body-selection"],Y=T!==void 0?T(ot({key:b,row:t,pageIndex:f})):[n(fe,{modelValue:h,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(Z,ft)=>{I([b],[t],Z,ft)}})];P.unshift(n("td",{class:"q-table--col-auto-width"},Y))}const M={key:b,class:{selected:h}};return e.onRowClick!==void 0&&(M.class["cursor-pointer"]=!0,M.onClick=T=>{o("rowClick",T,t,f)}),e.onRowDblclick!==void 0&&(M.class["cursor-pointer"]=!0,M.onDblclick=T=>{o("rowDblclick",T,t,f)}),e.onRowContextmenu!==void 0&&(M.class["cursor-pointer"]=!0,M.onContextmenu=T=>{o("rowContextmenu",T,t,f)}),n("tr",M,P)}function at(){const t=a.body,i=a["top-row"],f=a["bottom-row"];let b=$.value.map((h,k)=>xe(h,t,k));return i!==void 0&&(b=i({cols:L.value}).concat(b)),f!==void 0&&(b=b.concat(f({cols:L.value}))),n("tbody",b)}function Re(t){return de(t),t.cols=t.cols.map(i=>Q({...i},"value",()=>E(i,t.row))),t}function nt(t){return de(t),Q(t,"value",()=>E(t.col,t.row)),t}function ot(t){return de(t),t}function de(t){Object.assign(t,{cols:L.value,colsMap:Pe.value,sort:ne,rowIndex:U.value+t.pageIndex,color:e.color,dark:g.value,dense:e.dense}),D.value===!0&&Q(t,"selected",()=>ae(t.key),(i,f)=>{I([t.key],[t.row],i,f)}),Q(t,"expand",()=>R(t.key),i=>{He(t.key,i)})}function E(t,i){const f=typeof t.field=="function"?t.field(i):i[t.field];return t.format!==void 0?t.format(f,i):f}const j=v(()=>({pagination:y.value,pagesNumber:W.value,isFirstPage:oe.value,isLastPage:re.value,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,inFullscreen:s.value,toggleFullscreen:u}));function rt(){const t=a.top,i=a["top-left"],f=a["top-right"],b=a["top-selection"],h=D.value===!0&&b!==void 0&&le.value>0,k="q-table__top relative-position row items-center";if(t!==void 0)return n("div",{class:k},[t(j.value)]);let P;if(h===!0?P=b(j.value).slice():(P=[],i!==void 0?P.push(n("div",{class:"q-table__control"},[i(j.value)])):e.title&&P.push(n("div",{class:"q-table__control"},[n("div",{class:["q-table__title",e.titleClass]},e.title)]))),f!==void 0&&(P.push(n("div",{class:"q-table__separator col"})),P.push(n("div",{class:"q-table__control"},[f(j.value)]))),P.length!==0)return n("div",{class:k},P)}const Te=v(()=>qe.value===!0?null:Ie.value);function Be(){const t=it();return e.loading===!0&&a.loading===void 0&&t.push(n("tr",{class:"q-table__progress"},[n("th",{class:"relative-position",colspan:Ce.value},ke())])),n("thead",t)}function it(){const t=a.header,i=a["header-cell"];if(t!==void 0)return t(ve({header:!0})).slice();const f=L.value.map(b=>{const h=a[`header-cell-${b.name}`],k=h!==void 0?h:i,P=ve({col:b});return k!==void 0?k(P):n(Lt,{key:b.name,props:P},()=>b.label)});if(ze.value===!0&&e.grid!==!0)f.unshift(n("th",{class:"q-table--col-auto-width"}," "));else if(we.value===!0){const b=a["header-selection"],h=b!==void 0?b(ve({})):[n(fe,{color:e.color,modelValue:Te.value,dark:g.value,dense:e.dense,"onUpdate:modelValue":Oe})];f.unshift(n("th",{class:"q-table--col-auto-width"},h))}return[n("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},f)]}function ve(t){return Object.assign(t,{cols:L.value,sort:ne,colsMap:Pe.value,color:e.color,dark:g.value,dense:e.dense}),we.value===!0&&Q(t,"selected",()=>Te.value,Oe),t}function Oe(t){qe.value===!0&&(t=!1),I($.value.map(c.value),$.value,t)}const X=v(()=>{const t=[e.iconFirstPage||r.iconSet.table.firstPage,e.iconPrevPage||r.iconSet.table.prevPage,e.iconNextPage||r.iconSet.table.nextPage,e.iconLastPage||r.iconSet.table.lastPage];return r.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ye.value===!0){if(e.hideNoData===!0)return;const f=e.loading===!0?e.loadingLabel||r.lang.table.loading:e.filter?e.noResultsLabel||r.lang.table.noResults:e.noDataLabel||r.lang.table.noData,b=a["no-data"],h=b!==void 0?[b({message:f,icon:r.iconSet.table.warning,filter:e.filter})]:[n(Se,{class:"q-table__bottom-nodata-icon",name:r.iconSet.table.warning}),f];return n("div",{class:ee+" q-table__bottom--nodata"},h)}const t=a.bottom;if(t!==void 0)return n("div",{class:ee},[t(j.value)]);const i=e.hideSelectedBanner!==!0&&D.value===!0&&le.value>0?[n("div",{class:"q-table__control"},[n("div",[(e.selectedRowsLabel||r.lang.table.selectedRecords)(le.value)])])]:[];if(e.hidePagination!==!0)return n("div",{class:ee+" justify-end"},ct(i));if(i.length!==0)return n("div",{class:ee},i)}function ut(t){F({page:1,rowsPerPage:t.value})}function ct(t){let i;const{rowsPerPage:f}=y.value,b=e.paginationLabel||r.lang.table.pagination,h=a.pagination,k=e.rowsPerPageOptions.length>1;if(t.push(n("div",{class:"q-table__separator col"})),k===!0&&t.push(n("div",{class:"q-table__control"},[n("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||r.lang.table.recordsPerPage]),n(Bt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:f,options:Xe.value,displayValue:f===0?r.lang.table.allRows:f,dark:g.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),h!==void 0)i=h(j.value);else if(i=[n("span",f!==0?{class:"q-table__bottom-item"}:{},[f?b(U.value+1,Math.min(K.value,G.value),G.value):b(1,_e.value,G.value)])],f!==0&&W.value>1){const P={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(P.size="sm"),W.value>2&&i.push(n(J,{key:"pgFirst",...P,icon:X.value[0],disable:oe.value,onClick:ie})),i.push(n(J,{key:"pgPrev",...P,icon:X.value[1],disable:oe.value,onClick:se}),n(J,{key:"pgNext",...P,icon:X.value[2],disable:re.value,onClick:ue})),W.value>2&&i.push(n(J,{key:"pgLast",...P,icon:X.value[3],disable:re.value,onClick:ce}))}return t.push(n("div",{class:"q-table__control"},i)),t}function dt(){const t=e.gridHeader===!0?[n("table",{class:"q-table"},[Be()])]:e.loading===!0&&a.loading===void 0?ke():void 0;return n("div",{class:"q-table__middle"},t)}function vt(){const t=a.item!==void 0?a.item:i=>{const f=i.cols.map(h=>n("div",{class:"q-table__grid-item-row"},[n("div",{class:"q-table__grid-item-title"},[h.label]),n("div",{class:"q-table__grid-item-value"},[h.value])]));if(D.value===!0){const h=a["body-selection"],k=h!==void 0?h(i):[n(fe,{modelValue:i.selected,color:e.color,dark:g.value,dense:e.dense,"onUpdate:modelValue":(P,M)=>{I([i.key],[i.row],P,M)}})];f.unshift(n("div",{class:"q-table__grid-item-row"},k),n(Vt,{dark:g.value}))}const b={class:["q-table__grid-item-card"+w.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(b.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(b.onClick=h=>{o("RowClick",h,i.row,i.pageIndex)}),e.onRowDblclick!==void 0&&(b.onDblclick=h=>{o("RowDblclick",h,i.row,i.pageIndex)})),n("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(i.selected===!0?" q-table__grid-item--selected":"")},[n("div",b,f)])};return n("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},$.value.map((i,f)=>t(Re({key:c.value(i),row:i,pageIndex:f}))))}return Object.assign(d.proxy,{requestServerInteraction:O,setPagination:F,firstPage:ie,prevPage:se,nextPage:ue,lastPage:ce,isRowSelected:ae,clearSelection:Ue,isRowExpanded:R,setExpanded:z,sort:ne,resetVirtualScroll:Je,scrollTo:tt,getCellValue:E}),Tt(d.proxy,{filteredSortedRows:()=>te.value,computedRows:()=>$.value,computedRowsNumber:()=>G.value}),()=>{const t=[rt()],i={ref:S,class:C.value};return e.grid===!0?t.push(dt()):Object.assign(i,{class:[i.class,e.cardClass],style:e.cardStyle}),t.push(et(),st()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),n("div",i,t)}}});export{sl as Q,fe as a};
