import{n as e,m as t,i as n,b as r,g as o,c as i,d as a,e as l,f as s,h as u}from"./@babel.023f8892.js";import{r as c}from"./react.eb42bb38.js";import{c as f}from"./classnames.ca41f454.js";import{s as p}from"./shallowequal.ea8d8004.js";import{e as d,w as v,o as m,K as x,t as y,a as h,g as b,u as C}from"./rc-util.52d3e9c9.js";import{F as g}from"./rc-overflow.dfd7b0e8.js";import{T as E}from"./rc-trigger.c489d32f.js";import{C as K}from"./rc-motion.5487a61d.js";var M=c.exports.createContext(null);function P(n){var r=n.children,o=n.locked,i=e(n,["children","locked"]),a=c.exports.useContext(M),l=d((function(){return e=i,n=t({},a),Object.keys(e).forEach((function(t){var r=e[t];void 0!==r&&(n[t]=r)})),n;var e,n}),[a,i],(function(e,t){return!(o||e[0]===t[0]&&p(e[1],t[1]))}));return c.exports.createElement(M.Provider,{value:l},r)}function w(e,t,n,r){var o=c.exports.useContext(M),i=o.activeKey,a=o.onActive,l=o.onInactive,s={active:i===e};return t||(s.onMouseEnter=function(t){null==n||n({key:e,domEvent:t}),a(e)},s.onMouseLeave=function(t){null==r||r({key:e,domEvent:t}),l(e)}),s}function I(t){var n=t.item,r=e(t,["item"]);return Object.defineProperty(r,"item",{get:function(){return v(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),n}}),r}function S(e){var n=e.icon,r=e.props,o=e.children;return("function"==typeof n?c.exports.createElement(n,t({},r)):n)||o||null}function k(e){var t=c.exports.useContext(M),n=t.mode,r=t.rtl,o=t.inlineIndent;if("inline"!==n)return null;return r?{paddingRight:e*o}:{paddingLeft:e*o}}var N=[],R=c.exports.createContext(null);function D(){return c.exports.useContext(R)}var T=c.exports.createContext(N);function O(e){var t=c.exports.useContext(T);return c.exports.useMemo((function(){return void 0!==e?[].concat(n(t),[e]):t}),[t,e])}var A=c.exports.createContext(null),L=c.exports.createContext(null);function j(e,t){return void 0===e?null:"".concat(e,"-").concat(t)}function z(e){return j(c.exports.useContext(L),e)}var V=function(t){i(o,t);var n=a(o);function o(){return l(this,o),n.apply(this,arguments)}return s(o,[{key:"render",value:function(){var t=this.props,n=t.title,o=t.attribute,i=t.elementRef,a=e(t,["title","attribute","elementRef"]),l=m(a,["eventKey"]);return v(!o,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),c.exports.createElement(g.Item,r({},o,{title:"string"==typeof n?n:void 0},l,{ref:i}))}}]),o}(c.exports.Component),F=function(i){var a,l=i.style,s=i.className,u=i.eventKey;i.warnKey;var p=i.disabled,d=i.itemIcon,v=i.children,m=i.role,y=i.onMouseEnter,h=i.onMouseLeave,b=i.onClick,C=i.onKeyDown,g=i.onFocus,E=e(i,["style","className","eventKey","warnKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),K=z(u),P=c.exports.useContext(M),N=P.prefixCls,R=P.onItemClick,D=P.disabled,T=P.overflowDisabled,A=P.itemIcon,L=P.selectedKeys,j=P.onActive,F="".concat(N,"-item"),_=c.exports.useRef(),q=c.exports.useRef(),W=D||p,G=O(u),H=function(e){return{key:u,keyPath:n(G).reverse(),item:_.current,domEvent:e}},U=d||A,B=w(u,W,y,h),X=B.active,Y=e(B,["active"]),J=L.includes(u),Q=k(G.length),Z={};return"option"===i.role&&(Z["aria-selected"]=J),c.exports.createElement(V,r({ref:_,elementRef:q,role:null===m?"none":m||"menuitem",tabIndex:p?null:-1,"data-menu-id":T&&K?null:K},E,Y,Z,{component:"li","aria-disabled":p,style:t(t({},Q),l),className:f(F,(a={},o(a,"".concat(F,"-active"),X),o(a,"".concat(F,"-selected"),J),o(a,"".concat(F,"-disabled"),W),a),s),onClick:function(e){if(!W){var t=H(e);null==b||b(I(t)),R(t)}},onKeyDown:function(e){if(null==C||C(e),e.which===x.ENTER){var t=H(e);null==b||b(I(t)),R(t)}},onFocus:function(e){j(u),null==g||g(e)}}),v,c.exports.createElement(S,{props:t(t({},i),{},{isSelected:J}),icon:U}))};function _(e){var t=e.eventKey,n=D(),r=O(t);return c.exports.useEffect((function(){if(n)return n.registerPath(t,r),function(){n.unregisterPath(t,r)}}),[r]),n?null:c.exports.createElement(F,e)}function q(e,t){return y(e).map((function(e,r){if(c.exports.isValidElement(e)){var o,i,a=e.key,l=null!==(o=null===(i=e.props)||void 0===i?void 0:i.eventKey)&&void 0!==o?o:a;null==l&&(l="tmp_key-".concat([].concat(n(t),[r]).join("-")));var s={key:l,eventKey:l};return c.exports.cloneElement(e,s)}return e}))}function W(e){var t=c.exports.useRef(e);t.current=e;var n=c.exports.useCallback((function(){for(var e,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return null===(e=t.current)||void 0===e?void 0:e.call.apply(e,[t].concat(r))}),[]);return e?n:void 0}var G=function(t,n){var o=t.className,i=t.children,a=e(t,["className","children"]),l=c.exports.useContext(M),s=l.prefixCls,u=l.mode;return c.exports.createElement("ul",r({className:f(s,"".concat(s,"-sub"),"".concat(s,"-").concat("inline"===u?"inline":"vertical"),o)},a,{"data-menu-list":!0,ref:n}),i)},H=c.exports.forwardRef(G);H.displayName="SubMenuList";var U={adjustX:1,adjustY:1},B={topLeft:{points:["bl","tl"],overflow:U,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:U,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:U,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:U,offset:[4,0]}},X={topLeft:{points:["bl","tl"],overflow:U,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:U,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:U,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:U,offset:[4,0]}};function Y(e,t,n){return t||(n?n[e]||n.other:void 0)}var J={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Q(e){var n=e.prefixCls,r=e.visible,i=e.children,a=e.popup,l=e.popupClassName,s=e.popupOffset,p=e.disabled,d=e.mode,v=e.onVisibleChange,m=c.exports.useContext(M),x=m.getPopupContainer,y=m.rtl,b=m.subMenuOpenDelay,C=m.subMenuCloseDelay,g=m.builtinPlacements,K=m.triggerSubMenuAction,P=m.forceSubMenuRender,w=m.motion,I=m.defaultMotions,S=c.exports.useState(!1),k=u(S,2),N=k[0],R=k[1],D=t(t({},y?X:B),g),T=J[d],O=Y(d,w,I),A=t(t({},O),{},{leavedClassName:"".concat(n,"-hidden"),removeOnLeave:!1,motionAppear:!0}),L=c.exports.useRef();return c.exports.useEffect((function(){return L.current=h((function(){R(r)})),function(){h.cancel(L.current)}}),[r]),c.exports.createElement(E,{prefixCls:n,popupClassName:f("".concat(n,"-popup"),o({},"".concat(n,"-rtl"),y),l),stretch:"horizontal"===d?"minWidth":null,getPopupContainer:x,builtinPlacements:D,popupPlacement:T,popupVisible:N,popup:a,popupAlign:s&&{offset:s},action:p?[]:[K],mouseEnterDelay:b,mouseLeaveDelay:C,onPopupVisibleChange:v,forceRender:P,popupMotion:A},i)}function Z(e){var n=e.id,o=e.open,i=e.keyPath,a=e.children,l="inline",s=c.exports.useContext(M),f=s.prefixCls,p=s.forceSubMenuRender,d=s.motion,v=s.defaultMotions,m=s.mode,x=c.exports.useRef(!1);x.current=m===l;var y=c.exports.useState(!x.current),h=u(y,2),b=h[0],C=h[1],g=!!x.current&&o;c.exports.useEffect((function(){x.current&&C(!1)}),[m]);var E=t({},Y(l,d,v));i.length>1&&(E.motionAppear=!1);var w=E.onVisibleChanged;return E.onVisibleChanged=function(e){return x.current||e||C(!0),null==w?void 0:w(e)},b?null:c.exports.createElement(P,{mode:l,locked:!x.current},c.exports.createElement(K,r({visible:g},E,{forceRender:p,removeOnLeave:!1,leavedClassName:"".concat(f,"-hidden")}),(function(e){var t=e.className,r=e.style;return c.exports.createElement(H,{id:n,className:t,style:r},a)})))}var $=function(n){var i,a=n.style,l=n.className,s=n.title,p=n.eventKey;n.warnKey;var d=n.disabled,v=n.internalPopupClose,m=n.children,x=n.itemIcon,y=n.expandIcon,h=n.popupClassName,b=n.popupOffset,C=n.onClick,E=n.onMouseEnter,K=n.onMouseLeave,N=n.onTitleClick,R=n.onTitleMouseEnter,D=n.onTitleMouseLeave,T=e(n,["style","className","title","eventKey","warnKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),L=z(p),j=c.exports.useContext(M),V=j.prefixCls,F=j.mode,_=j.openKeys,q=j.disabled,G=j.overflowDisabled,U=j.activeKey,B=j.selectedKeys,X=j.itemIcon,Y=j.expandIcon,J=j.onItemClick,$=j.onOpenChange,ee=j.onActive,te=c.exports.useContext(A).isSubPathKey,ne=O(),re="".concat(V,"-submenu"),oe=q||d,ie=c.exports.useRef(),ae=c.exports.useRef(),le=x||X,se=y||Y,ue=_.includes(p),ce=!G&&ue,fe=te(B,p),pe=w(p,oe,R,D),de=pe.active,ve=e(pe,["active"]),me=c.exports.useState(!1),xe=u(me,2),ye=xe[0],he=xe[1],be=function(e){oe||he(e)},Ce=c.exports.useMemo((function(){return de||"inline"!==F&&(ye||te([U],p))}),[F,de,U,ye,p,te]),ge=k(ne.length),Ee=W((function(e){null==C||C(I(e)),J(e)})),Ke=L&&"".concat(L,"-popup"),Me=c.exports.createElement("div",r({role:"menuitem",style:ge,className:"".concat(re,"-title"),tabIndex:oe?null:-1,ref:ie,title:"string"==typeof s?s:null,"data-menu-id":G&&L?null:L,"aria-expanded":ce,"aria-haspopup":!0,"aria-controls":Ke,"aria-disabled":oe,onClick:function(e){oe||(null==N||N({key:p,domEvent:e}),"inline"===F&&$(p,!ue))},onFocus:function(){ee(p)}},ve),s,c.exports.createElement(S,{icon:"horizontal"!==F?se:null,props:t(t({},n),{},{isOpen:ce,isSubMenu:!0})},c.exports.createElement("i",{className:"".concat(re,"-arrow")}))),Pe=c.exports.useRef(F);if("inline"!==F&&(Pe.current=ne.length>1?"vertical":F),!G){var we=Pe.current;Me=c.exports.createElement(Q,{mode:we,prefixCls:re,visible:!v&&ce&&"inline"!==F,popupClassName:h,popupOffset:b,popup:c.exports.createElement(P,{mode:"horizontal"===we?"vertical":we},c.exports.createElement(H,{id:Ke,ref:ae},m)),disabled:oe,onVisibleChange:function(e){"inline"!==F&&$(p,e)}},Me)}return c.exports.createElement(P,{onItemClick:Ee,mode:"horizontal"===F?"vertical":F,itemIcon:le,expandIcon:se},c.exports.createElement(g.Item,r({role:"none"},T,{component:"li",style:a,className:f(re,"".concat(re,"-").concat(F),l,(i={},o(i,"".concat(re,"-open"),ce),o(i,"".concat(re,"-active"),Ce),o(i,"".concat(re,"-selected"),fe),o(i,"".concat(re,"-disabled"),oe),i)),onMouseEnter:function(e){be(!0),null==E||E({key:p,domEvent:e})},onMouseLeave:function(e){be(!1),null==K||K({key:p,domEvent:e})}}),Me,!G&&c.exports.createElement(Z,{id:Ke,open:ce,keyPath:ne},m)))};function ee(e){var t,n=e.eventKey,r=e.children,o=O(n),i=q(r,o),a=D();return c.exports.useEffect((function(){if(a)return a.registerPath(n,o),function(){a.unregisterPath(n,o)}}),[o]),t=a?i:c.exports.createElement($,e,i),c.exports.createElement(T.Provider,{value:o},t)}var te=x.LEFT,ne=x.RIGHT,re=x.UP,oe=x.DOWN,ie=x.ENTER,ae=x.ESC,le=[re,oe,te,ne];function se(e,t){return b(e,!0).filter((function(e){return t.has(e)}))}function ue(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if(!e)return null;var o=se(e,t),i=o.length,a=o.findIndex((function(e){return n===e}));return r<0?-1===a?a=i-1:a-=1:r>0&&(a+=1),o[a=(a+i)%i]}function ce(e,t,n,r,i,a,l,s,u,f){var p=c.exports.useRef(),d=c.exports.useRef();d.current=t;var v=function(){h.cancel(p.current)};return c.exports.useEffect((function(){return function(){v()}}),[]),function(c){var m=c.which;if([].concat(le,[ie,ae]).includes(m)){var x,y,b,C=function(){return x=new Set,y=new Map,b=new Map,a().forEach((function(e){var t=document.querySelector("[data-menu-id='".concat(j(r,e),"']"));t&&(x.add(t),b.set(t,e),y.set(e,t))})),x};C();var g=function(e,t){for(var n=e||document.activeElement;n;){if(t.has(n))return n;n=n.parentElement}return null}(y.get(t),x),E=b.get(g),K=function(e,t,n,r){var i,a,l,s,u="prev",c="next",f="children",p="parent";if("inline"===e&&r===ie)return{inlineTrigger:!0};var d=(o(i={},re,u),o(i,oe,c),i),v=(o(a={},te,n?c:u),o(a,ne,n?u:c),o(a,oe,f),o(a,ie,f),a),m=(o(l={},re,u),o(l,oe,c),o(l,ie,f),o(l,ae,p),o(l,te,n?f:p),o(l,ne,n?p:f),l);switch(null===(s={inline:d,horizontal:v,vertical:m,inlineSub:d,horizontalSub:m,verticalSub:m}["".concat(e).concat(t?"":"Sub")])||void 0===s?void 0:s[r]){case u:return{offset:-1,sibling:!0};case c:return{offset:1,sibling:!0};case p:return{offset:-1,sibling:!1};case f:return{offset:1,sibling:!1};default:return null}}(e,1===l(E,!0).length,n,m);if(!K)return;le.includes(m)&&c.preventDefault();var M=function(e){if(e){var t=e,n=e.querySelector("a");(null==n?void 0:n.getAttribute("href"))&&(t=n);var r=b.get(e);s(r),v(),p.current=h((function(){d.current===r&&t.focus()}))}};if(K.sibling||!g){var P=ue(g&&"inline"!==e?function(e){for(var t=e;t;){if(t.getAttribute("data-menu-list"))return t;t=t.parentElement}return null}(g):i.current,x,g,K.offset);M(P)}else if(K.inlineTrigger)u(E);else if(K.offset>0)u(E,!0),v(),p.current=h((function(){C();var e=g.getAttribute("aria-controls"),t=ue(document.getElementById(e),x);M(t)}),5);else if(K.offset<0){var w=l(E,!0),I=w[w.length-2],S=y.get(I);u(I,!1),M(S)}}null==f||f(c)}}var fe=Math.random().toFixed(5).toString().slice(2),pe=0;var de="__RC_UTIL_PATH_SPLIT__",ve=function(e){return e.join(de)};function me(){var e=c.exports.useState({}),t=u(e,2)[1],r=c.exports.useRef(new Map),o=c.exports.useRef(new Map),i=c.exports.useState([]),a=u(i,2),l=a[0],s=a[1],f=c.exports.useRef(0),p=c.exports.useRef(!1),d=c.exports.useCallback((function(e,n){var i=ve(n);o.current.set(i,e),r.current.set(e,i),f.current+=1;var a,l=f.current;a=function(){l===f.current&&(p.current||t({}))},Promise.resolve().then(a)}),[]),v=c.exports.useCallback((function(e,t){var n=ve(t);o.current.delete(n),r.current.delete(e)}),[]),m=c.exports.useCallback((function(e){s(e)}),[]),x=c.exports.useCallback((function(e,t){var n=r.current.get(e)||"",o=n.split(de);return t&&l.includes(o[0])&&o.unshift("rc-menu-more"),o}),[l]),y=c.exports.useCallback((function(e,t){return e.some((function(e){return x(e,!0).includes(t)}))}),[x]),h=c.exports.useCallback((function(e){var t="".concat(r.current.get(e)).concat(de),i=new Set;return n(o.current.keys()).forEach((function(e){e.startsWith(t)&&i.add(o.current.get(e))})),i}),[]);return c.exports.useEffect((function(){return function(){p.current=!0}}),[]),{registerPath:d,unregisterPath:v,refreshOverflowKeys:m,isSubPathKey:y,getKeyPath:x,getKeys:function(){var e=n(r.current.keys());return l.length&&e.push("rc-menu-more"),e},getSubPathKeys:h}}var xe=[],ye=function(t){var n=t.className,o=t.title;t.eventKey;var i=t.children,a=e(t,["className","title","eventKey","children"]),l=c.exports.useContext(M).prefixCls,s="".concat(l,"-item-group");return c.exports.createElement("li",r({},a,{onClick:function(e){return e.stopPropagation()},className:f(s,n)}),c.exports.createElement("div",{className:"".concat(s,"-title"),title:"string"==typeof o?o:void 0},o),c.exports.createElement("ul",{className:"".concat(s,"-list")},i))};function he(t){var n=t.children,r=e(t,["children"]),o=q(n,O(r.eventKey));return D()?o:c.exports.createElement(ye,m(r,["warnKey"]),o)}function be(e){var t=e.className,n=e.style,r=c.exports.useContext(M).prefixCls;return D()?null:c.exports.createElement("li",{className:f("".concat(r,"-item-divider"),t),style:n})}var Ce=O,ge=function(i){var a,l,s=i.prefixCls,d=void 0===s?"rc-menu":s,v=i.style,m=i.className,x=i.tabIndex,y=void 0===x?0:x,h=i.children,b=i.direction,E=i.id,K=i.mode,M=void 0===K?"vertical":K,w=i.inlineCollapsed,S=i.disabled,k=i.disabledOverflow,N=i.subMenuOpenDelay,D=void 0===N?.1:N,T=i.subMenuCloseDelay,O=void 0===T?.1:T,j=i.forceSubMenuRender,z=i.defaultOpenKeys,V=i.openKeys,F=i.activeKey,G=i.defaultActiveFirst,H=i.selectable,U=void 0===H||H,B=i.multiple,X=void 0!==B&&B,Y=i.defaultSelectedKeys,J=i.selectedKeys,Q=i.onSelect,Z=i.onDeselect,$=i.inlineIndent,te=void 0===$?24:$,ne=i.motion,re=i.defaultMotions,oe=i.triggerSubMenuAction,ie=void 0===oe?"hover":oe,ae=i.builtinPlacements,le=i.itemIcon,se=i.expandIcon,ue=i.overflowedIndicator,de=void 0===ue?"...":ue,ve=i.overflowedIndicatorPopupClassName,ye=i.getPopupContainer,he=i.onClick,be=i.onOpenChange,Ce=i.onKeyDown;i.openAnimation,i.openTransitionName;var ge=e(i,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","overflowedIndicatorPopupClassName","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Ee=q(h,xe),Ke=c.exports.useState(!1),Me=u(Ke,2),Pe=Me[0],we=Me[1],Ie=c.exports.useRef(),Se=function(e){var t=C(e,{value:e}),n=u(t,2),r=n[0],o=n[1];return c.exports.useEffect((function(){pe+=1;var e="".concat(fe,"-").concat(pe);o("rc-menu-uuid-".concat(e))}),[]),r}(E),ke="rtl"===b,Ne=c.exports.useMemo((function(){return"inline"!==M&&"vertical"!==M||!w?[M,!1]:["vertical",w]}),[M,w]),Re=u(Ne,2),De=Re[0],Te=Re[1],Oe=c.exports.useState(0),Ae=u(Oe,2),Le=Ae[0],je=Ae[1],ze=Le>=Ee.length-1||"horizontal"!==De||k,Ve=C(z,{value:V,postState:function(e){return e||xe}}),Fe=u(Ve,2),_e=Fe[0],qe=Fe[1],We=function(e){qe(e),null==be||be(e)},Ge=c.exports.useState(_e),He=u(Ge,2),Ue=He[0],Be=He[1],Xe="inline"===De,Ye=c.exports.useRef(!1);c.exports.useEffect((function(){Xe&&Be(_e)}),[_e]),c.exports.useEffect((function(){Ye.current?Xe?qe(Ue):We(xe):Ye.current=!0}),[Xe]);var Je=me(),Qe=Je.registerPath,Ze=Je.unregisterPath,$e=Je.refreshOverflowKeys,et=Je.isSubPathKey,tt=Je.getKeyPath,nt=Je.getKeys,rt=Je.getSubPathKeys,ot=c.exports.useMemo((function(){return{registerPath:Qe,unregisterPath:Ze}}),[Qe,Ze]),it=c.exports.useMemo((function(){return{isSubPathKey:et}}),[et]);c.exports.useEffect((function(){$e(ze?xe:Ee.slice(Le+1).map((function(e){return e.key})))}),[Le,ze]);var at=C(F||G&&(null===(a=Ee[0])||void 0===a?void 0:a.key),{value:F}),lt=u(at,2),st=lt[0],ut=lt[1],ct=W((function(e){ut(e)})),ft=W((function(){ut(void 0)})),pt=C(Y||[],{value:J,postState:function(e){return Array.isArray(e)?e:null==e?xe:[e]}}),dt=u(pt,2),vt=dt[0],mt=dt[1],xt=W((function(e){null==he||he(I(e)),function(e){if(U){var r,o=e.key,i=vt.includes(o);r=X?i?vt.filter((function(e){return e!==o})):[].concat(n(vt),[o]):[o],mt(r);var a=t(t({},e),{},{selectedKeys:r});i?null==Z||Z(a):null==Q||Q(a)}!X&&_e.length&&"inline"!==De&&We(xe)}(e)})),yt=W((function(e,t){var n=_e.filter((function(t){return t!==e}));if(t)n.push(e);else if("inline"!==De){var r=rt(e);n=n.filter((function(e){return!r.has(e)}))}p(_e,n)||We(n)})),ht=W(ye),bt=ce(De,st,ke,Se,Ie,nt,tt,ut,(function(e,t){var n=null!=t?t:!_e.includes(e);yt(e,n)}),Ce);c.exports.useEffect((function(){we(!0)}),[]);var Ct="horizontal"!==De||k?Ee:Ee.map((function(e,t){return c.exports.createElement(P,{key:e.key,overflowDisabled:t>Le},e)})),gt=c.exports.createElement(g,r({id:E,ref:Ie,prefixCls:"".concat(d,"-overflow"),component:"ul",itemComponent:_,className:f(d,"".concat(d,"-root"),"".concat(d,"-").concat(De),m,(l={},o(l,"".concat(d,"-inline-collapsed"),Te),o(l,"".concat(d,"-rtl"),ke),l)),dir:b,style:v,role:"menu",tabIndex:y,data:Ct,renderRawItem:function(e){return e},renderRawRest:function(e){var t=e.length,n=t?Ee.slice(-t):null;return c.exports.createElement(ee,{eventKey:"rc-menu-more",title:de,disabled:ze,internalPopupClose:0===t,popupClassName:ve},n)},maxCount:"horizontal"!==De||k?g.INVALIDATE:g.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(e){je(e)},onKeyDown:bt},ge));return c.exports.createElement(L.Provider,{value:Se},c.exports.createElement(P,{prefixCls:d,mode:De,openKeys:_e,rtl:ke,disabled:S,motion:Pe?ne:null,defaultMotions:Pe?re:null,activeKey:st,onActive:ct,onInactive:ft,selectedKeys:vt,inlineIndent:te,subMenuOpenDelay:D,subMenuCloseDelay:O,forceSubMenuRender:j,builtinPlacements:ae,triggerSubMenuAction:ie,getPopupContainer:ht,itemIcon:le,expandIcon:se,onItemClick:xt,onOpenChange:yt},c.exports.createElement(A.Provider,{value:it},gt),c.exports.createElement("div",{style:{display:"none"},"aria-hidden":!0},c.exports.createElement(R.Provider,{value:ot},Ee))))};ge.Item=_,ge.SubMenu=ee,ge.ItemGroup=he,ge.Divider=be;export{be as D,ge as E,_ as M,ee as S,he as a,Ce as u};