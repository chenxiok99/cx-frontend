System.register(["./@babel-legacy.f580aa0a.js","./react-legacy.0e757699.js","./rc-trigger-legacy.714c9e7a.js"],(function(e){"use strict";var t,o,r,i,n,a;return{setters:[function(e){t=e.n,o=e.m,r=e.k,i=e.b},function(e){n=e.r},function(e){a=e.T}],execute:function(){var l={adjustX:1,adjustY:1},s=[0,0],f=e("p",{left:{points:["cr","cl"],overflow:l,offset:[-4,0],targetOffset:s},right:{points:["cl","cr"],overflow:l,offset:[4,0],targetOffset:s},top:{points:["bc","tc"],overflow:l,offset:[0,-4],targetOffset:s},bottom:{points:["tc","bc"],overflow:l,offset:[0,4],targetOffset:s},topLeft:{points:["bl","tl"],overflow:l,offset:[0,-4],targetOffset:s},leftTop:{points:["tr","tl"],overflow:l,offset:[-4,0],targetOffset:s},topRight:{points:["br","tr"],overflow:l,offset:[0,-4],targetOffset:s},rightTop:{points:["tl","tr"],overflow:l,offset:[4,0],targetOffset:s},bottomRight:{points:["tr","br"],overflow:l,offset:[0,4],targetOffset:s},rightBottom:{points:["bl","br"],overflow:l,offset:[4,0],targetOffset:s},bottomLeft:{points:["tl","bl"],overflow:l,offset:[0,4],targetOffset:s},leftBottom:{points:["br","bl"],overflow:l,offset:[-4,0],targetOffset:s}}),p=function(e){var t=e.overlay,o=e.prefixCls,r=e.id,i=e.overlayInnerStyle;return n.exports.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:i},"function"==typeof t?t():t)},u=function(e,l){var s=e.overlayClassName,u=e.trigger,v=void 0===u?["hover"]:u,c=e.mouseEnterDelay,g=void 0===c?0:c,y=e.mouseLeaveDelay,m=void 0===y?.1:y,b=e.overlayStyle,d=e.prefixCls,C=void 0===d?"rc-tooltip":d,w=e.children,h=e.onVisibleChange,O=e.afterVisibleChange,x=e.transitionName,V=e.animation,T=e.motion,N=e.placement,P=void 0===N?"right":N,S=e.align,D=void 0===S?{}:S,E=e.destroyTooltipOnHide,j=void 0!==E&&E,I=e.defaultVisible,L=e.getTooltipContainer,k=e.overlayInnerStyle,H=t(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),R=n.exports.useRef(null);n.exports.useImperativeHandle(l,(function(){return R.current}));var A=o({},H);"visible"in e&&(A.popupVisible=e.visible);var B=!1,M=!1;if("boolean"==typeof j)B=j;else if(j&&"object"===r(j)){var X=j.keepParent;B=!0===X,M=!1===X}return n.exports.createElement(a,i({popupClassName:s,prefixCls:C,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,r=e.overlay,i=e.id;return[n.exports.createElement("div",{className:"".concat(C,"-arrow"),key:"arrow"},o),n.exports.createElement(p,{key:"content",prefixCls:C,id:i,overlay:r,overlayInnerStyle:k})]},action:v,builtinPlacements:f,popupPlacement:P,ref:R,popupAlign:D,getPopupContainer:L,onPopupVisibleChange:h,afterPopupVisibleChange:O,popupTransitionName:x,popupAnimation:V,popupMotion:T,defaultPopupVisible:I,destroyPopupOnHide:B,autoDestroy:M,mouseLeaveDelay:m,popupStyle:b,mouseEnterDelay:g},A),w)};e("T",n.exports.forwardRef(u))}}}));