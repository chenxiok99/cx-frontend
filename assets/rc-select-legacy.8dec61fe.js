System.register(["./@babel-legacy.f580aa0a.js","./react-legacy.0e757699.js","./rc-util-legacy.0b3b3659.js","./classnames-legacy.5e058700.js","./rc-virtual-list-legacy.25fcbb49.js","./rc-overflow-legacy.e0c1032f.js","./rc-trigger-legacy.714c9e7a.js"],(function(e){"use strict";var t,n,o,r,a,i,l,u,c,s,p,f,d,m,v,h,b,g,x,w,y,E,S,C,I,R;return{setters:[function(e){t=e.h,n=e.n,o=e.g,r=e.b,a=e.m,i=e.i,l=e.k,u=e.l,c=e.c,s=e.d,p=e.e,f=e.f},function(e){d=e.r},function(e){m=e.e,v=e.K,h=e.v,b=e.t,g=e.w,x=e.c,w=e.p,y=e.u,E=e.x},function(e){S=e.c},function(e){C=e.L},function(e){I=e.F},function(e){R=e.T}],execute:function(){var N=function(e){var t,n=e.className,o=e.customizeIcon,r=e.customizeIconProps,a=e.onMouseDown,i=e.onClick,l=e.children;return t="function"==typeof o?o(r):o,d.exports.createElement("span",{className:n,onMouseDown:function(e){e.preventDefault(),a&&a(e)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:i,"aria-hidden":!0},void 0!==t?t:d.exports.createElement("span",{className:S(n.split(/\s+/).map((function(e){return"".concat(e,"-icon")})))},l))},P=function(e,a){var i=e.prefixCls,l=e.id,u=e.flattenOptions,c=e.childrenAsData,s=e.values,p=e.searchValue,f=e.multiple,b=e.defaultActiveFirstOption,g=e.height,x=e.itemHeight,w=e.notFoundContent,y=e.open,E=e.menuItemSelectedIcon,I=e.virtual,R=e.onSelect,P=e.onToggleOpen,V=e.onActiveValue,O=e.onScroll,D=e.onMouseEnter,M="".concat(i,"-item"),T=m((function(){return u}),[y,u],(function(e,t){return t[0]&&e[1]!==t[1]})),A=d.exports.useRef(null),k=function(e){e.preventDefault()},L=function(e){A.current&&A.current.scrollTo({index:e})},_=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=T.length,o=0;o<n;o+=1){var r=(e+o*t+n)%n,a=T[r],i=a.group,l=a.data;if(!i&&!l.disabled)return r}return-1},F=d.exports.useState((function(){return _(0)})),K=t(F,2),j=K[0],W=K[1],H=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];W(e);var n={source:t?"keyboard":"mouse"},o=T[e];o?V(o.data.value,e,n):V(null,-1,n)};d.exports.useEffect((function(){H(!1!==b?_(0):-1)}),[T.length,p]),d.exports.useEffect((function(){var e,t=setTimeout((function(){if(!f&&y&&1===s.size){var e=Array.from(s)[0],t=T.findIndex((function(t){return t.data.value===e}));H(t),L(t)}}));return y&&(null===(e=A.current)||void 0===e||e.scrollTo(void 0)),function(){return clearTimeout(t)}}),[y]);var z=function(e){void 0!==e&&R(e,{selected:!s.has(e)}),f||P(!1)};if(d.exports.useImperativeHandle(a,(function(){return{onKeyDown:function(e){var t=e.which;switch(t){case v.UP:case v.DOWN:var n=0;if(t===v.UP?n=-1:t===v.DOWN&&(n=1),0!==n){var o=_(j+n,n);L(o),H(o,!0)}break;case v.ENTER:var r=T[j];r&&!r.data.disabled?z(r.data.value):z(void 0),y&&e.preventDefault();break;case v.ESC:P(!1),y&&e.stopPropagation()}},onKeyUp:function(){},scrollTo:function(e){L(e)}}})),0===T.length)return d.exports.createElement("div",{role:"listbox",id:"".concat(l,"_list"),className:"".concat(M,"-empty"),onMouseDown:k},w);function U(e){var t=T[e];if(!t)return null;var n=t.data||{},o=n.value,a=n.label,i=n.children,u=h(n,!0),p=c?i:a;return t?d.exports.createElement("div",r({"aria-label":"string"==typeof p?p:null},u,{key:e,role:"option",id:"".concat(l,"_list_").concat(e),"aria-selected":s.has(o)}),o):null}return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("div",{role:"listbox",id:"".concat(l,"_list"),style:{height:0,width:0,overflow:"hidden"}},U(j-1),U(j),U(j+1)),d.exports.createElement(C,{itemKey:"key",ref:A,data:T,height:g,itemHeight:x,fullHeight:!1,onMouseDown:k,onScroll:O,virtual:I,onMouseEnter:D},(function(e,t){var a,i=e.group,l=e.groupOption,u=e.data,p=u.label,f=u.key;if(i)return d.exports.createElement("div",{className:S(M,"".concat(M,"-group"))},void 0!==p?p:f);var m=u.disabled,v=u.value,h=u.title,b=u.children,g=u.style,x=u.className,w=n(u,["disabled","value","title","children","style","className"]),y=s.has(v),C="".concat(M,"-option"),I=S(M,C,x,(o(a={},"".concat(C,"-grouped"),l),o(a,"".concat(C,"-active"),j===t&&!m),o(a,"".concat(C,"-disabled"),m),o(a,"".concat(C,"-selected"),y),a)),R=!E||"function"==typeof E||y,P=(c?b:p)||v,V="string"==typeof P||"number"==typeof P?P.toString():void 0;return void 0!==h&&(V=h),d.exports.createElement("div",r({},w,{"aria-selected":y,className:I,title:V,onMouseMove:function(){j===t||m||H(t)},onClick:function(){m||z(v)},style:g}),d.exports.createElement("div",{className:"".concat(C,"-content")},P),d.exports.isValidElement(E)||y,R&&d.exports.createElement(N,{className:"".concat(M,"-option-state"),customizeIcon:E,customizeIconProps:{isSelected:y}},y?"✓":null))})))},V=d.exports.forwardRef(P);V.displayName="OptionList";var O=e("O",(function(){return null}));O.isSelectOption=!0;var D=e("a",(function(){return null}));function M(e){var t=e.key,o=e.props,r=o.children,i=o.value,l=n(o,["children","value"]);return a({key:t,value:void 0!==i?i:t,children:r},l)}function T(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return b(e).map((function(e,o){if(!d.exports.isValidElement(e)||!e.type)return null;var r=e.type.isSelectOptGroup,i=e.key,l=e.props,u=l.children,c=n(l,["children"]);return t||!r?M(e):a(a({key:"__RC_SELECT_GRP__".concat(null===i?o:i,"__"),label:i},c),{},{options:T(u)})})).filter((function(e){return e}))}function A(e){return Array.isArray(e)?e:void 0!==e?[e]:[]}function k(e,t){var n,o=i(t);for(n=e.length-1;n>=0&&e[n].disabled;n-=1);var r=null;return-1!==n&&(r=o[n],o.splice(n,1)),{values:o,removedValue:r}}D.isSelectOptGroup=!0;var L="undefined"!=typeof window&&window.document&&window.document.documentElement,_=0;function F(e,t){var n,o=e.key;return"value"in e&&(n=e.value),null!=o?o:void 0!==n?n:"rc-index-key-".concat(t)}function K(e){var t=a({},e);return"props"in t||Object.defineProperty(t,"props",{get:function(){return g(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),t}}),t}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.prevValueOptions,r=void 0===o?[]:o,i=new Map;return t.forEach((function(e){if(!e.group){var t=e.data;i.set(t.value,t)}})),e.map((function(e){var t=i.get(e);return t||(t=a({},r.find((function(t){return t._INTERNAL_OPTION_VALUE_===e})))),K(t)}))}function W(e){return A(e).join("")}var H=function(e,t){var n,o,r=e.prefixCls,i=e.id,l=e.inputElement,u=e.disabled,c=e.tabIndex,s=e.autoFocus,p=e.autoComplete,f=e.editable,m=e.accessibilityIndex,v=e.value,h=e.maxLength,b=e.onKeyDown,g=e.onMouseDown,w=e.onChange,y=e.onPaste,E=e.onCompositionStart,C=e.onCompositionEnd,I=e.open,R=e.attrs,N=l||d.exports.createElement("input",null),P=N,V=P.ref,O=P.props,D=O.onKeyDown,M=O.onChange,T=O.onMouseDown,A=O.onCompositionStart,k=O.onCompositionEnd,L=O.style;return N=d.exports.cloneElement(N,a(a({id:i,ref:x(t,V),disabled:u,tabIndex:c,autoComplete:p||"off",type:"search",autoFocus:s,className:S("".concat(r,"-selection-search-input"),null===(n=N)||void 0===n||null===(o=n.props)||void 0===o?void 0:o.className),style:a(a({},L),{},{opacity:f?null:0}),role:"combobox","aria-expanded":I,"aria-haspopup":"listbox","aria-owns":"".concat(i,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(i,"_list"),"aria-activedescendant":"".concat(i,"_list_").concat(m)},R),{},{value:f?v:"",maxLength:h,readOnly:!f,unselectable:f?null:"on",onKeyDown:function(e){b(e),D&&D(e)},onMouseDown:function(e){g(e),T&&T(e)},onChange:function(e){w(e),M&&M(e)},onCompositionStart:function(e){E(e),A&&A(e)},onCompositionEnd:function(e){C(e),k&&k(e)},onPaste:y}))},z=d.exports.forwardRef(H);function U(e,t){L?d.exports.useLayoutEffect(e,t):d.exports.useEffect(e,t)}z.displayName="Input";var B=function(e){e.preventDefault(),e.stopPropagation()},G=function(e){var n=e.id,r=e.prefixCls,a=e.values,i=e.open,l=e.searchValue,u=e.inputRef,c=e.placeholder,s=e.disabled,p=e.mode,f=e.showSearch,m=e.autoFocus,v=e.autoComplete,b=e.accessibilityIndex,g=e.tabIndex,x=e.removeIcon,w=e.maxTagCount,y=e.maxTagTextLength,E=e.maxTagPlaceholder,C=void 0===E?function(e){return"+ ".concat(e.length," ...")}:E,R=e.tagRender,P=e.onToggleOpen,V=e.onSelect,O=e.onInputChange,D=e.onInputPaste,M=e.onInputKeyDown,T=e.onInputMouseDown,A=e.onInputCompositionStart,k=e.onInputCompositionEnd,L=d.exports.useRef(null),_=d.exports.useState(0),F=t(_,2),K=F[0],j=F[1],W=d.exports.useState(!1),H=t(W,2),G=H[0],Y=H[1],X="".concat(r,"-selection"),$=i||"tags"===p?l:"",q="tags"===p||f&&(i||G);function J(e,t,n,r){return d.exports.createElement("span",{className:S("".concat(X,"-item"),o({},"".concat(X,"-item-disabled"),t))},d.exports.createElement("span",{className:"".concat(X,"-item-content")},e),n&&d.exports.createElement(N,{className:"".concat(X,"-item-remove"),onMouseDown:B,onClick:r,customizeIcon:x},"×"))}U((function(){j(L.current.scrollWidth)}),[$]);var Q=d.exports.createElement("div",{className:"".concat(X,"-search"),style:{width:K},onFocus:function(){Y(!0)},onBlur:function(){Y(!1)}},d.exports.createElement(z,{ref:u,open:i,prefixCls:r,id:n,inputElement:null,disabled:s,autoFocus:m,autoComplete:v,editable:q,accessibilityIndex:b,value:$,onKeyDown:M,onMouseDown:T,onChange:O,onPaste:D,onCompositionStart:A,onCompositionEnd:k,tabIndex:g,attrs:h(e,!0)}),d.exports.createElement("span",{ref:L,className:"".concat(X,"-search-mirror"),"aria-hidden":!0},$," ")),Z=d.exports.createElement(I,{prefixCls:"".concat(X,"-overflow"),data:a,renderItem:function(e){var t=e.disabled,n=e.label,o=e.value,r=!s&&!t,a=n;if("number"==typeof y&&("string"==typeof n||"number"==typeof n)){var l=String(a);l.length>y&&(a="".concat(l.slice(0,y),"..."))}var u=function(e){e&&e.stopPropagation(),V(o,{selected:!1})};return"function"==typeof R?function(e,t,n,o,r){return d.exports.createElement("span",{onMouseDown:function(e){B(e),P(!i)}},R({label:t,value:e,disabled:n,closable:o,onClose:r}))}(o,a,t,r,u):J(a,t,r,u)},renderRest:function(e){return J("function"==typeof C?C(e):C,!1)},suffix:Q,itemKey:"key",maxCount:w});return d.exports.createElement(d.exports.Fragment,null,Z,!a.length&&!$&&d.exports.createElement("span",{className:"".concat(X,"-placeholder")},c))},Y=function(e){var n=e.inputElement,o=e.prefixCls,r=e.id,a=e.inputRef,i=e.disabled,l=e.autoFocus,u=e.autoComplete,c=e.accessibilityIndex,s=e.mode,p=e.open,f=e.values,m=e.placeholder,v=e.tabIndex,b=e.showSearch,g=e.searchValue,x=e.activeValue,w=e.maxLength,y=e.onInputKeyDown,E=e.onInputMouseDown,S=e.onInputChange,C=e.onInputPaste,I=e.onInputCompositionStart,R=e.onInputCompositionEnd,N=d.exports.useState(!1),P=t(N,2),V=P[0],O=P[1],D="combobox"===s,M=D||b,T=f[0],A=g||"";D&&x&&!V&&(A=x),d.exports.useEffect((function(){D&&O(!1)}),[D,x]);var k=!("combobox"!==s&&!p||!A),L=!T||"string"!=typeof T.label&&"number"!=typeof T.label?void 0:T.label.toString();return d.exports.createElement(d.exports.Fragment,null,d.exports.createElement("span",{className:"".concat(o,"-selection-search")},d.exports.createElement(z,{ref:a,prefixCls:o,id:r,open:p,inputElement:n,disabled:i,autoFocus:l,autoComplete:u,editable:M,accessibilityIndex:c,value:A,onKeyDown:y,onMouseDown:E,onChange:function(e){O(!0),S(e)},onPaste:C,onCompositionStart:I,onCompositionEnd:R,tabIndex:v,attrs:h(e,!0),maxLength:D?w:void 0})),!D&&T&&!k&&d.exports.createElement("span",{className:"".concat(o,"-selection-item"),title:L},T.label),!T&&!k&&d.exports.createElement("span",{className:"".concat(o,"-selection-placeholder")},m))};function X(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:250,t=d.exports.useRef(null),n=d.exports.useRef(null);function o(o){(o||null===t.current)&&(t.current=o),window.clearTimeout(n.current),n.current=window.setTimeout((function(){t.current=null}),e)}return d.exports.useEffect((function(){return function(){window.clearTimeout(n.current)}}),[]),[function(){return t.current},o]}var $=function(e,n){var o=d.exports.useRef(null),a=d.exports.useRef(!1),i=e.prefixCls,l=e.multiple,u=e.open,c=e.mode,s=e.showSearch,p=e.tokenWithEnter,f=e.onSearch,m=e.onSearchSubmit,h=e.onToggleOpen,b=e.onInputKeyDown,g=e.domRef;d.exports.useImperativeHandle(n,(function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}}));var x=X(0),w=t(x,2),y=w[0],E=w[1],S=d.exports.useRef(null),C=function(e){!1!==f(e,!0,a.current)&&h(!0)},I={inputRef:o,onInputKeyDown:function(e){var t=e.which;t!==v.UP&&t!==v.DOWN||e.preventDefault(),b&&b(e),t!==v.ENTER||"tags"!==c||a.current||u||m(e.target.value),[v.SHIFT,v.TAB,v.BACKSPACE,v.ESC].includes(t)||h(!0)},onInputMouseDown:function(){E(!0)},onInputChange:function(e){var t=e.target.value;if(p&&S.current&&/[\r\n]/.test(S.current)){var n=S.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");t=t.replace(n,S.current)}S.current=null,C(t)},onInputPaste:function(e){var t=e.clipboardData.getData("text");S.current=t},onInputCompositionStart:function(){a.current=!0},onInputCompositionEnd:function(e){a.current=!1,"combobox"!==c&&C(e.target.value)}},R=l?d.exports.createElement(G,r({},e,I)):d.exports.createElement(Y,r({},e,I));return d.exports.createElement("div",{ref:g,className:"".concat(i,"-selector"),onClick:function(e){e.target!==o.current&&(void 0!==document.body.style.msTouchAction?setTimeout((function(){o.current.focus()})):o.current.focus())},onMouseDown:function(e){var t=y();e.target===o.current||t||e.preventDefault(),("combobox"===c||s&&t)&&u||(u&&f("",!0,!1),h())}},R)},q=d.exports.forwardRef($);q.displayName="Selector";var J=function(e,t){var i=e.prefixCls;e.disabled;var l=e.visible,u=e.children,c=e.popupElement,s=e.containerWidth,p=e.animation,f=e.transitionName,m=e.dropdownStyle,v=e.dropdownClassName,h=e.direction,b=void 0===h?"ltr":h,g=e.dropdownMatchSelectWidth,x=void 0===g||g,w=e.dropdownRender,y=e.dropdownAlign,E=e.getPopupContainer,C=e.empty,I=e.getTriggerDOMNode,N=e.onPopupVisibleChange,P=n(e,["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange"]),V="".concat(i,"-dropdown"),O=c;w&&(O=w(c));var D=d.exports.useMemo((function(){return function(e){var t="number"!=typeof e?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:t,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:t,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:t,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:t,adjustY:1}}}}(x)}),[x]),M=p?"".concat(V,"-").concat(p):f,T=d.exports.useRef(null);d.exports.useImperativeHandle(t,(function(){return{getPopupElement:function(){return T.current}}}));var A=a({minWidth:s},m);return"number"==typeof x?A.width=x:x&&(A.width=s),d.exports.createElement(R,r({},P,{showAction:N?["click"]:[],hideAction:N?["click"]:[],popupPlacement:"rtl"===b?"bottomRight":"bottomLeft",builtinPlacements:D,prefixCls:V,popupTransitionName:M,popup:d.exports.createElement("div",{ref:T},O),popupAlign:y,popupVisible:l,getPopupContainer:E,popupClassName:S(v,o({},"".concat(V,"-empty"),C)),popupStyle:A,getTriggerDOMNode:I,onPopupVisibleChange:N}),u)},Q=d.exports.forwardRef(J);Q.displayName="SelectTrigger";var Z=["removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","tabIndex"],ee=function(e){var l=e.prefixCls,c=e.components.optionList,s=e.convertChildrenToData,p=e.flattenOptions,f=e.getLabeledValue,m=e.filterOptions,h=e.isValueDisabled,b=e.findValueOption;e.warningProps;var g=e.fillOptionsWithMissingValue,E=e.omitDOMProps;function C(e,C){var I,R=e.prefixCls,P=void 0===R?l:R,V=e.className,O=e.id,D=e.open,M=e.defaultOpen,T=e.options,A=e.children,F=e.mode,K=e.value,j=e.defaultValue,W=e.labelInValue,H=e.showSearch,z=e.inputValue,B=e.searchValue,G=e.filterOption,Y=e.filterSort,$=e.optionFilterProp,J=void 0===$?"value":$,ee=e.autoClearSearchValue,te=void 0===ee||ee,ne=e.onSearch,oe=e.allowClear,re=e.clearIcon,ae=e.showArrow,ie=e.inputIcon,le=e.menuItemSelectedIcon,ue=e.disabled,ce=e.loading,se=e.defaultActiveFirstOption,pe=e.notFoundContent,fe=void 0===pe?"Not Found":pe,de=e.optionLabelProp,me=e.backfill;e.tabIndex;var ve=e.getInputElement,he=e.getRawInputElement,be=e.getPopupContainer,ge=e.listHeight,xe=void 0===ge?200:ge,we=e.listItemHeight,ye=void 0===we?20:we,Ee=e.animation,Se=e.transitionName,Ce=e.virtual,Ie=e.dropdownStyle,Re=e.dropdownClassName,Ne=e.dropdownMatchSelectWidth,Pe=e.dropdownRender,Ve=e.dropdownAlign,Oe=e.showAction,De=void 0===Oe?[]:Oe,Me=e.direction,Te=e.tokenSeparators,Ae=e.tagRender,ke=e.onPopupScroll,Le=e.onDropdownVisibleChange,_e=e.onFocus,Fe=e.onBlur,Ke=e.onKeyUp,je=e.onKeyDown,We=e.onMouseDown,He=e.onChange,ze=e.onSelect,Ue=e.onDeselect,Be=e.onClear,Ge=e.internalProps,Ye=void 0===Ge?{}:Ge,Xe=n(e,["prefixCls","className","id","open","defaultOpen","options","children","mode","value","defaultValue","labelInValue","showSearch","inputValue","searchValue","filterOption","filterSort","optionFilterProp","autoClearSearchValue","onSearch","allowClear","clearIcon","showArrow","inputIcon","menuItemSelectedIcon","disabled","loading","defaultActiveFirstOption","notFoundContent","optionLabelProp","backfill","tabIndex","getInputElement","getRawInputElement","getPopupContainer","listHeight","listItemHeight","animation","transitionName","virtual","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","showAction","direction","tokenSeparators","tagRender","onPopupScroll","onDropdownVisibleChange","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown","onChange","onSelect","onDeselect","onClear","internalProps"]),$e="RC_SELECT_INTERNAL_PROPS_MARK"===Ye.mark,qe=E?E(Xe):Xe;Z.forEach((function(e){delete qe[e]}));var Je=d.exports.useRef(null),Qe=d.exports.useRef(null),Ze=d.exports.useRef(null),et=d.exports.useRef(null),tt=d.exports.useMemo((function(){return(Te||[]).some((function(e){return["\n","\r\n"].includes(e)}))}),[Te]),nt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,n=d.exports.useState(!1),o=t(n,2),r=o[0],a=o[1],i=d.exports.useRef(null),l=function(){window.clearTimeout(i.current)};return d.exports.useEffect((function(){return l}),[]),[r,function(t,n){l(),i.current=window.setTimeout((function(){a(t),n&&n()}),e)},l]}(),ot=t(nt,3),rt=ot[0],at=ot[1],it=ot[2],lt=d.exports.useState(),ut=t(lt,2),ct=ut[0],st=ut[1];d.exports.useEffect((function(){var e;st("rc_select_".concat((L?(e=_,_+=1):e="TEST_OR_SSR",e)))}),[]);var pt=O||ct,ft=de;void 0===ft&&(ft=T?"label":"children");var dt="combobox"!==F&&W,mt="tags"===F||"multiple"===F,vt=void 0!==H?H:mt||"combobox"===F,ht=d.exports.useState(!1),bt=t(ht,2),gt=bt[0],xt=bt[1];d.exports.useEffect((function(){xt(w())}),[]);var wt=d.exports.useRef(null);d.exports.useImperativeHandle(C,(function(){var e,t,n;return{focus:null===(e=Ze.current)||void 0===e?void 0:e.focus,blur:null===(t=Ze.current)||void 0===t?void 0:t.blur,scrollTo:null===(n=et.current)||void 0===n?void 0:n.scrollTo}}));var yt=y(j,{value:K}),Et=t(yt,2),St=Et[0],Ct=Et[1],It=d.exports.useMemo((function(){return function(e,t){var n=t.labelInValue,o=t.combobox,r=new Map;if(void 0===e||""===e&&o)return[[],r];var a=Array.isArray(e)?e:[e],i=a;return n&&(i=a.filter((function(e){return null!==e})).map((function(e){var t=e.key,n=e.value,o=void 0!==n?n:t;return r.set(o,e),o}))),[i,r]}(St,{labelInValue:dt,combobox:"combobox"===F})}),[St,dt]),Rt=t(It,2),Nt=Rt[0],Pt=Rt[1],Vt=d.exports.useMemo((function(){return new Set(Nt)}),[Nt]),Ot=d.exports.useState(null),Dt=t(Ot,2),Mt=Dt[0],Tt=Dt[1],At=d.exports.useState(""),kt=t(At,2),Lt=kt[0],_t=kt[1],Ft=Lt;"combobox"===F&&void 0!==St?Ft=St:void 0!==B?Ft=B:z&&(Ft=z);var Kt=d.exports.useMemo((function(){var e=T;return void 0===e&&(e=s(A)),"tags"===F&&g&&(e=g(e,St,ft,W)),e||[]}),[T,A,F,St]),jt=d.exports.useMemo((function(){return p(Kt,e)}),[Kt]),Wt=function(e){var t=d.exports.useRef(null),n=d.exports.useMemo((function(){var t=new Map;return e.forEach((function(e){var n=e.data.value;t.set(n,e)})),t}),[e]);return t.current=n,function(e){return e.map((function(e){return t.current.get(e)})).filter(Boolean)}}(jt),Ht=d.exports.useMemo((function(){if(!Ft||!vt)return i(Kt);var e=m(Ft,Kt,{optionFilterProp:J,filterOption:"combobox"===F&&void 0===G?function(){return!0}:G});return"tags"===F&&e.every((function(e){return e[J]!==Ft}))&&e.unshift({value:Ft,label:Ft,key:"__RC_SELECT_TAG_PLACEHOLDER__"}),Y&&Array.isArray(e)?i(e).sort(Y):e}),[Kt,Ft,F,vt,Y]),zt=d.exports.useMemo((function(){return p(Ht,e)}),[Ht]);d.exports.useEffect((function(){et.current&&et.current.scrollTo&&et.current.scrollTo(0)}),[Ft]);var Ut,Bt,Gt=d.exports.useMemo((function(){var e=Nt.map((function(e){var t=Wt([e]),n=f(e,{options:t,prevValueMap:Pt,labelInValue:dt,optionLabelProp:ft});return a(a({},n),{},{disabled:h(e,t)})}));return F||1!==e.length||null!==e[0].value||null!==e[0].label?e:[]}),[St,Kt,F]);Ut=Gt,Bt=d.exports.useRef(Ut),Gt=d.exports.useMemo((function(){var e=new Map;Bt.current.forEach((function(t){var n=t.value,o=t.label;n!==o&&e.set(n,o)}));var t=Ut.map((function(t){var n=e.get(t.value);return t.isCacheable&&n?a(a({},t),{},{label:n}):t}));return Bt.current=t,t}),[Ut]);var Yt=function(e,t,n){var o=Wt([e]),r=b([e],o)[0];if(!Ye.skipTriggerSelect){var a=dt?f(e,{options:o,prevValueMap:Pt,labelInValue:dt,optionLabelProp:ft}):e;t&&ze?ze(a,r):!t&&Ue&&Ue(a,r)}$e&&(t&&Ye.onRawSelect?Ye.onRawSelect(e,r,n):!t&&Ye.onRawDeselect&&Ye.onRawDeselect(e,r,n))},Xt=d.exports.useState([]),$t=t(Xt,2),qt=$t[0],Jt=$t[1],Qt=function(e){if(!$e||!Ye.skipTriggerChange){var t=Wt(e),n=function(e,t){var n=t.optionLabelProp,o=t.labelInValue,r=t.prevValueMap,a=t.options,i=t.getLabeledValue,l=e;return o&&(l=l.map((function(e){return i(e,{options:a,prevValueMap:r,labelInValue:o,optionLabelProp:n})}))),l}(Array.from(e),{labelInValue:dt,options:t,getLabeledValue:f,prevValueMap:Pt,optionLabelProp:ft}),o=mt?n:n[0];if(He&&(0!==Nt.length||0!==n.length)){var r=b(e,t,{prevValueOptions:qt});Jt(r.map((function(t,n){var o=a({},t);return Object.defineProperty(o,"_INTERNAL_OPTION_VALUE_",{get:function(){return e[n]}}),o}))),He(o,mt?r:r[0])}Ct(o)}},Zt=function(e,t){var n,o=t.selected,r=t.source;ue||(mt?(n=new Set(Nt),o?n.add(e):n.delete(e)):(n=new Set).add(e),(mt||!mt&&Array.from(Nt)[0]!==e)&&Qt(Array.from(n)),Yt(e,!mt||o,r),"combobox"===F?(_t(String(e)),Tt("")):mt&&!te||(_t(""),Tt("")))},en="combobox"===F&&"function"==typeof ve&&ve()||null,tn="function"==typeof he&&he(),nn=y(void 0,{defaultValue:M,value:D}),on=t(nn,2),rn=on[0],an=on[1],ln=rn,un=!fe&&!Ht.length;(ue||un&&ln&&"combobox"===F)&&(ln=!1);var cn,sn=!un&&ln,pn=function(e){var t=void 0!==e?e:!ln;rn===t||ue||(an(t),Le&&Le(t))};tn&&(cn=function(e){pn(e)}),function(e,t,n){var o=d.exports.useRef(null);o.current={open:t,triggerOpen:n},d.exports.useEffect((function(){function t(t){var n=t.target;n.shadowRoot&&t.composed&&(n=t.composedPath()[0]||n),o.current.open&&e().filter((function(e){return e})).every((function(e){return!e.contains(n)&&e!==n}))&&o.current.triggerOpen(!1)}return window.addEventListener("mousedown",t),function(){return window.removeEventListener("mousedown",t)}}),[])}((function(){var e;return[Je.current,null===(e=Qe.current)||void 0===e?void 0:e.getPopupElement()]}),sn,pn);var fn=function(e,t,n){var o=!0,r=e;Tt(null);var a=n?null:function(e,t){if(!t||!t.length)return null;var n=!1,o=function e(t,o){var r=u(o),a=r[0],l=r.slice(1);if(!a)return[t];var c=t.split(a);return n=n||c.length>1,c.reduce((function(t,n){return[].concat(i(t),i(e(n,l)))}),[]).filter((function(e){return e}))}(e,t);return n?o:null}(e,Te),l=a;if("combobox"===F)t&&Qt([r]);else if(a){r="","tags"!==F&&(l=a.map((function(e){var t=jt.find((function(t){return t.data[ft]===e}));return t?t.data.value:null})).filter((function(e){return null!==e})));var c=Array.from(new Set([].concat(i(Nt),i(l))));Qt(c),c.forEach((function(e){Yt(e,!0,"input")})),pn(!1),o=!1}return _t(r),ne&&Ft!==r&&ne(r),o};d.exports.useEffect((function(){rn&&ue&&an(!1)}),[ue]),d.exports.useEffect((function(){ln||mt||"combobox"===F||fn("",!1,!1)}),[ln]);var dn=X(),mn=t(dn,2),vn=mn[0],hn=mn[1],bn=d.exports.useRef(!1),gn=[];d.exports.useEffect((function(){return function(){gn.forEach((function(e){return clearTimeout(e)})),gn.splice(0,gn.length)}}),[]);var xn=d.exports.useState(0),wn=t(xn,2),yn=wn[0],En=wn[1],Sn=void 0!==se?se:"combobox"!==F,Cn=d.exports.useState(null),In=t(Cn,2),Rn=In[0],Nn=In[1],Pn=d.exports.useState({}),Vn=t(Pn,2)[1];U((function(){if(sn){var e,t=Math.ceil(null===(e=Je.current)||void 0===e?void 0:e.offsetWidth);Rn===t||Number.isNaN(t)||Nn(t)}}),[sn]);var On,Dn=d.exports.createElement(c,{ref:et,prefixCls:P,id:pt,open:ln,childrenAsData:!T,options:Ht,flattenOptions:zt,multiple:mt,values:Vt,height:xe,itemHeight:ye,onSelect:function(e,t){Zt(e,a(a({},t),{},{source:"option"}))},onToggleOpen:pn,onActiveValue:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=n.source,r=void 0===o?"keyboard":o;En(t),me&&"combobox"===F&&null!==e&&"keyboard"===r&&Tt(String(e))},defaultActiveFirstOption:Sn,notFoundContent:fe,onScroll:ke,searchValue:Ft,menuItemSelectedIcon:le,virtual:!1!==Ce&&!1!==Ne,onMouseEnter:function(){Vn({})}});!ue&&oe&&(Nt.length||Ft)&&(On=d.exports.createElement(N,{className:"".concat(P,"-clear"),onMouseDown:function(){$e&&Ye.onClear&&Ye.onClear(),Be&&Be(),Qt([]),fn("",!1,!1)},customizeIcon:re},"×"));var Mn,Tn=void 0!==ae?ae:ce||!mt&&"combobox"!==F;Tn&&(Mn=d.exports.createElement(N,{className:S("".concat(P,"-arrow"),o({},"".concat(P,"-arrow-loading"),ce)),customizeIcon:ie,customizeIconProps:{loading:ce,searchValue:Ft,open:ln,focused:rt,showSearch:vt}}));var An=S(P,V,(o(I={},"".concat(P,"-focused"),rt),o(I,"".concat(P,"-multiple"),mt),o(I,"".concat(P,"-single"),!mt),o(I,"".concat(P,"-allow-clear"),oe),o(I,"".concat(P,"-show-arrow"),Tn),o(I,"".concat(P,"-disabled"),ue),o(I,"".concat(P,"-loading"),ce),o(I,"".concat(P,"-open"),ln),o(I,"".concat(P,"-customize-input"),en),o(I,"".concat(P,"-show-search"),vt),I)),kn=d.exports.createElement(Q,{ref:Qe,disabled:ue,prefixCls:P,visible:sn,popupElement:Dn,containerWidth:Rn,animation:Ee,transitionName:Se,dropdownStyle:Ie,dropdownClassName:Re,direction:Me,dropdownMatchSelectWidth:Ne,dropdownRender:Pe,dropdownAlign:Ve,getPopupContainer:be,empty:!Kt.length,getTriggerDOMNode:function(){return wt.current},onPopupVisibleChange:cn},tn?d.exports.cloneElement(tn,{ref:x(wt,tn.props.ref)}):d.exports.createElement(q,r({},e,{domRef:wt,prefixCls:P,inputElement:en,ref:Ze,id:pt,showSearch:vt,mode:F,accessibilityIndex:yn,multiple:mt,tagRender:Ae,values:Gt,open:ln,onToggleOpen:pn,searchValue:Ft,activeValue:Mt,onSearch:fn,onSearchSubmit:function(e){if(e&&e.trim()){var t=Array.from(new Set([].concat(i(Nt),[e])));Qt(t),t.forEach((function(e){Yt(e,!0,"input")})),_t("")}},onSelect:function(e,t){Zt(e,a(a({},t),{},{source:"selection"}))},tokenWithEnter:tt})));return tn?kn:d.exports.createElement("div",r({className:An},qe,{ref:Je,onMouseDown:function(e){var t,n=e.target,o=null===(t=Qe.current)||void 0===t?void 0:t.getPopupElement();if(o&&o.contains(n)){var r=setTimeout((function(){var e,t=gn.indexOf(r);-1!==t&&gn.splice(t,1),it(),gt||o.contains(document.activeElement)||null===(e=Ze.current)||void 0===e||e.focus()}));gn.push(r)}if(We){for(var a=arguments.length,i=new Array(a>1?a-1:0),l=1;l<a;l++)i[l-1]=arguments[l];We.apply(void 0,[e].concat(i))}},onKeyDown:function(e){var t,n=vn(),o=e.which;if(o===v.ENTER&&("combobox"!==F&&e.preventDefault(),ln||pn(!0)),hn(!!Ft),o===v.BACKSPACE&&!n&&mt&&!Ft&&Nt.length){var r=k(Gt,Nt);null!==r.removedValue&&(Qt(r.values),Yt(r.removedValue,!1,"input"))}for(var a=arguments.length,i=new Array(a>1?a-1:0),l=1;l<a;l++)i[l-1]=arguments[l];ln&&et.current&&(t=et.current).onKeyDown.apply(t,[e].concat(i)),je&&je.apply(void 0,[e].concat(i))},onKeyUp:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r;ln&&et.current&&(r=et.current).onKeyUp.apply(r,[e].concat(n)),Ke&&Ke.apply(void 0,[e].concat(n))},onFocus:function(){at(!0),ue||(_e&&!bn.current&&_e.apply(void 0,arguments),De.includes("focus")&&pn(!0)),bn.current=!0},onBlur:function(){at(!1,(function(){bn.current=!1,pn(!1)})),ue||(Ft&&("tags"===F?(fn("",!1,!1),Qt(Array.from(new Set([].concat(i(Nt),[Ft]))))):"multiple"===F&&_t("")),Fe&&Fe.apply(void 0,arguments))}}),rt&&!ln&&d.exports.createElement("span",{style:{width:0,height:0,display:"flex",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(Nt.join(", "))),kn,Mn,On)}return d.exports.forwardRef(C)}({prefixCls:"rc-select",components:{optionList:V},convertChildrenToData:T,flattenOptions:function(e){var t=[];return function e(n,o){n.forEach((function(n){o||!("options"in n)?t.push({key:F(n,t.length),groupOption:o,data:n}):(t.push({key:F(n,t.length),group:!0,data:n}),e(n.options,!0))}))}(e,!1),t},getLabeledValue:function(e,t){var n=t.options,o=t.prevValueMap,r=t.labelInValue,a=t.optionLabelProp,i=j([e],n)[0],u={value:e},c=r?o.get(e):void 0;return c&&"object"===l(c)&&"label"in c?(u.label=c.label,i&&"string"==typeof c.label&&"string"==typeof i[a]&&c.label.trim()!==i[a].trim()&&g(!1,"`label` of `value` is not same as `label` in Select options.")):i&&a in i?u.label=i[a]:(u.label=e,u.isCacheable=!0),u.key=u.value,u},filterOptions:function(e,t,n){var o,r=n.optionFilterProp,l=n.filterOption,u=[];return!1===l?i(t):(o="function"==typeof l?l:function(e){return function(t,n){var o=t.toLowerCase();return"options"in n?W(n.label).toLowerCase().includes(o):W(n[e]).toLowerCase().includes(o)}}(r),t.forEach((function(t){if("options"in t)if(o(e,t))u.push(t);else{var n=t.options.filter((function(t){return o(e,t)}));n.length&&u.push(a(a({},t),{},{options:n}))}else o(e,K(t))&&u.push(t)})),u)},isValueDisabled:function(e,t){return j([e],t)[0].disabled},findValueOption:j,warningProps:function(e){var t=e.mode,n=e.options,o=e.children,r=e.backfill,a=e.allowClear,i=e.placeholder,u=e.getInputElement,c=e.showSearch,s=e.onSearch,p=e.defaultOpen,f=e.autoFocus,m=e.labelInValue,v=e.value,h=e.inputValue,x=e.optionLabelProp,w="multiple"===t||"tags"===t,y=void 0!==c?c:w||"combobox"===t,S=n||T(o);if(g("tags"!==t||S.every((function(e){return!e.disabled})),"Please avoid setting option to disabled in tags mode since user can always type text as tag."),"tags"===t||"combobox"===t){var C=S.some((function(e){return e.options?e.options.some((function(e){return"number"==typeof("value"in e?e.value:e.key)})):"number"==typeof("value"in e?e.value:e.key)}));g(!C,"`value` of Option should not use number type when `mode` is `tags` or `combobox`.")}if(g("combobox"!==t||!x,"`combobox` mode not support `optionLabelProp`. Please set `value` on Option directly."),g("combobox"===t||!r,"`backfill` only works with `combobox` mode."),g("combobox"===t||!u,"`getInputElement` only work with `combobox` mode."),E("combobox"!==t||!u||!a||!i,"Customize `getInputElement` should customize clear and placeholder logic instead of configuring `allowClear` and `placeholder`."),s&&!y&&"combobox"!==t&&"tags"!==t&&g(!1,"`onSearch` should work with `showSearch` instead of use alone."),E(!p||f,"`defaultOpen` makes Select open without focus which means it will not close by click outside. You can set `autoFocus` if needed."),null!=v){var I=A(v);g(!m||I.every((function(e){return"object"===l(e)&&("key"in e||"value"in e)})),"`value` should in shape of `{ value: string | number, label?: ReactNode }` when you set `labelInValue` to `true`"),g(!w||Array.isArray(v),"`value` should be array when `mode` is `multiple` or `tags`")}if(o){var R=null;b(o).some((function(e){if(!d.exports.isValidElement(e)||!e.type)return!1;var t=e.type;return!t.isSelectOption&&(t.isSelectOptGroup?!b(e.props.children).every((function(t){return!(d.exports.isValidElement(t)&&e.type&&!t.type.isSelectOption&&(R=t.type,1))})):(R=t,!0))})),R&&g(!1,"`children` should be `Select.Option` or `Select.OptGroup` instead of `".concat(R.displayName||R.name||R,"`.")),g(void 0===h,"`inputValue` is deprecated, please use `searchValue` instead.")}},fillOptionsWithMissingValue:function(e,t,n,r){var a=A(t).slice().sort(),l=i(e),u=new Set;return e.forEach((function(e){e.options?e.options.forEach((function(e){u.add(e.value)})):u.add(e.value)})),a.forEach((function(e){var t,a=r?e.value:e;u.has(a)||l.push(r?(o(t={},n,e.label),o(t,"value",a),t):{value:a})})),l}}),te=e("S",function(e){c(n,e);var t=s(n);function n(){var e;return p(this,n),(e=t.apply(this,arguments)).selectRef=d.exports.createRef(),e.focus=function(){e.selectRef.current.focus()},e.blur=function(){e.selectRef.current.blur()},e}return f(n,[{key:"render",value:function(){return d.exports.createElement(ee,r({ref:this.selectRef},this.props))}}]),n}(d.exports.Component));te.Option=O,te.OptGroup=D}}}));