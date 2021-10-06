import{n as e,b as t,m as r,h as n}from"./@babel.023f8892.js";import{r as o}from"./react.eb42bb38.js";import{c as s}from"./classnames.ca41f454.js";import{R as i}from"./rc-resize-observer.87f23762.js";import{a}from"./rc-util.52d3e9c9.js";function l(n,a){var l=n.prefixCls,u=n.invalidate,c=n.item,f=n.renderItem,m=n.responsive,p=n.registerSize,d=n.itemKey,v=n.className,x=n.style,y=n.children,E=n.display,h=n.order,N=n.component,b=void 0===N?"div":N,R=e(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),g=m&&!E;function C(e){p(d,e)}o.exports.useEffect((function(){return function(){C(null)}}),[]);var I,S=f&&undefined!==c?f(c):y;u||(I={opacity:g?0:1,height:g?0:undefined,overflowY:g?"hidden":undefined,order:m?h:undefined,pointerEvents:g?"none":undefined,position:g?"absolute":undefined});var w={};g&&(w["aria-hidden"]=!0);var z=o.exports.createElement(b,t({className:s(!u&&l,v),style:r(r({},I),x)},w,R,{ref:a}),S);return m&&(z=o.exports.createElement(i,{onResize:function(e){C(e.offsetWidth)}},z)),z}var u=o.exports.forwardRef(l);u.displayName="Item";var c=function(r,n){var i=o.exports.useContext(m);if(!i){var a=r.component,l=void 0===a?"div":a,c=e(r,["component"]);return o.exports.createElement(l,t({},c,{ref:n}))}var f=i.className,p=e(i,["className"]),d=r.className,v=e(r,["className"]);return o.exports.createElement(m.Provider,{value:null},o.exports.createElement(u,t({ref:n,className:s(f,d)},p,v)))},f=o.exports.forwardRef(c);f.displayName="RawItem";var m=o.exports.createContext(null);function p(e){return"+ ".concat(e.length," ...")}function d(l,c){var f=l.prefixCls,d=void 0===f?"rc-overflow":f,v=l.data,x=void 0===v?[]:v,y=l.renderItem,E=l.renderRawItem,h=l.itemKey,N=l.itemWidth,b=void 0===N?10:N,R=l.ssr,g=l.style,C=l.className,I=l.maxCount,S=l.renderRest,w=l.renderRawRest,z=l.suffix,M=l.component,k=void 0===M?"div":M,A=l.itemComponent,K=l.onVisibleChange,j=e(l,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),P=function(){var e=o.exports.useState({}),t=n(e,2)[1],r=o.exports.useRef([]),s=o.exports.useRef(!1),i=0,l=0;return o.exports.useEffect((function(){return function(){s.current=!0}}),[]),function(e){var n=i;return i+=1,r.current.length<n+1&&(r.current[n]=e),[r.current[n],function(e){r.current[n]="function"==typeof e?e(r.current[n]):e,a.cancel(l),l=a((function(){s.current||t({})}))}]}}(),V="full"===R,W=P(null),_=n(W,2),F=_[0],T=_[1],G=F||0,L=P(new Map),O=n(L,2),X=O[0],D=O[1],Y=P(0),q=n(Y,2),B=q[0],H=q[1],J=P(0),Q=n(J,2),U=Q[0],Z=Q[1],$=P(0),ee=n($,2),te=ee[0],re=ee[1],ne=o.exports.useState(null),oe=n(ne,2),se=oe[0],ie=oe[1],ae=o.exports.useState(null),le=n(ae,2),ue=le[0],ce=le[1],fe=o.exports.useMemo((function(){return null===ue&&V?Number.MAX_SAFE_INTEGER:ue||0}),[ue,F]),me=o.exports.useState(!1),pe=n(me,2),de=pe[0],ve=pe[1],xe="".concat(d,"-item"),ye=Math.max(B,U),Ee=x.length&&"responsive"===I,he="invalidate"===I,Ne=Ee||"number"==typeof I&&x.length>I,be=o.exports.useMemo((function(){var e=x;return Ee?e=null===F&&V?x:x.slice(0,Math.min(x.length,G/b)):"number"==typeof I&&(e=x.slice(0,I)),e}),[x,b,F,I,Ee]),Re=o.exports.useMemo((function(){return Ee?x.slice(fe+1):x.slice(be.length)}),[x,be,Ee,fe]),ge=o.exports.useCallback((function(e,t){var r;return"function"==typeof h?h(e):null!==(r=h&&(null==e?void 0:e[h]))&&void 0!==r?r:t}),[h]),Ce=o.exports.useCallback(y||function(e){return e},[y]);function Ie(e,t){ce(e),t||(ve(e<x.length-1),null==K||K(e))}function Se(e,t){D((function(r){var n=new Map(r);return null===t?n.delete(e):n.set(e,t),n}))}function we(e){return X.get(ge(be[e],e))}o.exports.useLayoutEffect((function(){if(G&&ye&&be){var e=te,t=be.length,r=t-1;if(!t)return Ie(0),void ie(null);for(var n=0;n<t;n+=1){var o=we(n);if(void 0===o){Ie(n-1,!0);break}if(e+=o,0===r&&e<=G||n===r-1&&e+we(r)<=G){Ie(r),ie(null);break}if(e+ye>G){Ie(n-1),ie(e-o-te+U);break}}z&&we(0)+te>G&&ie(null)}}),[G,X,U,te,ge,be]);var ze=de&&!!Re.length,Me={};null!==se&&Ee&&(Me={position:"absolute",left:se,top:0});var ke,Ae={prefixCls:xe,responsive:Ee,component:A,invalidate:he},Ke=E?function(e,t){var n=ge(e,t);return o.exports.createElement(m.Provider,{key:n,value:r(r({},Ae),{},{order:t,item:e,itemKey:n,registerSize:Se,display:t<=fe})},E(e,t))}:function(e,r){var n=ge(e,r);return o.exports.createElement(u,t({},Ae,{order:r,key:n,item:e,renderItem:Ce,itemKey:n,registerSize:Se,display:r<=fe}))},je={order:ze?fe:Number.MAX_SAFE_INTEGER,className:"".concat(xe,"-rest"),registerSize:function(e,t){Z(t),H(U)},display:ze};if(w)w&&(ke=o.exports.createElement(m.Provider,{value:r(r({},Ae),je)},w(Re)));else{var Pe=S||p;ke=o.exports.createElement(u,t({},Ae,je),"function"==typeof Pe?Pe(Re):Pe)}var Ve=o.exports.createElement(k,t({className:s(!he&&d,C),style:g,ref:c},j),be.map(Ke),Ne?ke:null,z&&o.exports.createElement(u,t({},Ae,{order:fe,className:"".concat(xe,"-suffix"),registerSize:function(e,t){re(t)},display:!0,style:Me}),z));return Ee&&(Ve=o.exports.createElement(i,{onResize:function(e,t){T(t.clientWidth)}},Ve)),Ve}var v=o.exports.forwardRef(d);v.displayName="Overflow",v.Item=f,v.RESPONSIVE="responsive",v.INVALIDATE="invalidate";export{v as F};