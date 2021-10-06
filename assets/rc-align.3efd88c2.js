import{h as e,k as n}from"./@babel.023f8892.js";import{R as r}from"./react.eb42bb38.js";import{q as t,i as c,c as u,m as i}from"./rc-util.52d3e9c9.js";import{a as o,b as f}from"./dom-align.f1b5d360.js";import{i as l}from"./resize-observer-polyfill.8deb1e21.js";function a(n,r){var t=null,c=null;var u=new l((function(n){var u=e(n,1)[0].target;if(document.documentElement.contains(u)){var i=u.getBoundingClientRect(),o=i.width,f=i.height,l=Math.floor(o),a=Math.floor(f);t===l&&c===a||Promise.resolve().then((function(){r({width:l,height:a})})),t=l,c=a}}));return n&&u.observe(n),function(){u.disconnect()}}function s(e){return"function"!=typeof e?null:e()}function m(e){return"object"===n(e)&&e?e:null}var d=r.forwardRef((function(n,l){var d=n.children,v=n.disabled,g=n.target,p=n.align,b=n.onAlign,w=n.monitorWindowResize,R=n.monitorBufferTime,h=void 0===R?0:R,E=r.useRef({}),j=r.useRef(),X=r.Children.only(d),Y=r.useRef({});Y.current.disabled=v,Y.current.target=g,Y.current.onAlign=b;var y=function(e,n){var t=r.useRef(!1),c=r.useRef(null);function u(){window.clearTimeout(c.current)}return[function r(i){if(t.current&&!0!==i)u(),c.current=window.setTimeout((function(){t.current=!1,r()}),n);else{if(!1===e())return;t.current=!0,u(),c.current=window.setTimeout((function(){t.current=!1}),n)}},function(){t.current=!1,u()}]}((function(){var e=Y.current,n=e.disabled,r=e.target,c=e.onAlign;if(!n&&r){var u,l=j.current,a=s(r),d=m(r);E.current.element=a,E.current.point=d;var v=document.activeElement;return a&&i(a)?u=o(l,a,p):d&&(u=f(l,d,p)),function(e,n){e!==document.activeElement&&t(n,e)&&"function"==typeof e.focus&&e.focus()}(v,l),c&&u&&c(l,u),!0}return!1}),h),A=e(y,2),T=A[0],z=A[1],B=r.useRef({cancel:function(){}}),C=r.useRef({cancel:function(){}});r.useEffect((function(){var e,n,r=s(g),t=m(g);j.current!==C.current.element&&(C.current.cancel(),C.current.element=j.current,C.current.cancel=a(j.current,T)),E.current.element===r&&((e=E.current.point)===(n=t)||e&&n&&("pageX"in n&&"pageY"in n?e.pageX===n.pageX&&e.pageY===n.pageY:"clientX"in n&&"clientY"in n&&e.clientX===n.clientX&&e.clientY===n.clientY))||(T(),B.current.element!==r&&(B.current.cancel(),B.current.element=r,B.current.cancel=a(r,T)))})),r.useEffect((function(){v?z():T()}),[v]);var M=r.useRef(null);return r.useEffect((function(){w?M.current||(M.current=c(window,"resize",T)):M.current&&(M.current.remove(),M.current=null)}),[w]),r.useEffect((function(){return function(){B.current.cancel(),C.current.cancel(),M.current&&M.current.remove(),z()}}),[]),r.useImperativeHandle(l,(function(){return{forceAlign:function(){return T(!0)}}})),r.isValidElement(X)&&(X=r.cloneElement(X,{ref:u(X.ref,j)})),X}));d.displayName="Align";export{d as R};