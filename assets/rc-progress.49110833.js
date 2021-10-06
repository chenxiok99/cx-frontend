import{r as t}from"./react.eb42bb38.js";import{c as e}from"./classnames.ca41f454.js";import{n as r,h as a,b as o}from"./@babel.023f8892.js";var s=0;function c(t){return+t.replace("%","")}function n(t){return Array.isArray(t)?t:[t]}function i(t,e,r,a){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5?arguments[5]:void 0,c=50-a/2,n=0,i=-c,l=0,p=-2*c;switch(s){case"left":n=-c,i=0,l=2*c,p=0;break;case"right":n=c,i=0,l=-2*c,p=0;break;case"bottom":i=c,p=2*c}var f="M 50,50 m ".concat(n,",").concat(i,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(l,",").concat(-p,"\n   a ").concat(c,",").concat(c," 0 1 1 ").concat(-l,",").concat(p),u=2*Math.PI*c,h={stroke:"string"==typeof r?r:void 0,strokeDasharray:"".concat(e/100*(u-o),"px ").concat(u,"px"),strokeDashoffset:"-".concat(o/2+t/100*(u-o),"px"),transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s, opacity .3s ease 0s"};return{pathString:f,pathStyle:h}}var l=function(l){var p,f=l.prefixCls,u=l.strokeWidth,h=l.trailWidth,k=l.gapDegree,y=l.gapPosition,d=l.trailColor,m=l.strokeLinecap,g=l.style,x=l.className,b=l.strokeColor,v=l.percent,C=r(l,["prefixCls","strokeWidth","trailWidth","gapDegree","gapPosition","trailColor","strokeLinecap","style","className","strokeColor","percent"]),j=t.exports.useMemo((function(){return s+=1}),[]),D=i(0,100,d,u,k,y),E=D.pathString,O=D.pathStyle,S=n(v),W=n(b),N=W.find((function(t){return"[object Object]"===Object.prototype.toString.call(t)})),w=function(e){var r=e.map((function(){return t.exports.useRef()})),a=t.exports.useRef(null);return t.exports.useEffect((function(){var t=Date.now(),e=!1;Object.keys(r).forEach((function(o){var s=r[o].current;if(s){e=!0;var c=s.style;c.transitionDuration=".3s, .3s, .3s, .06s",a.current&&t-a.current<100&&(c.transitionDuration="0s, 0s")}})),e&&(a.current=Date.now())})),[r]}(S),L=a(w,1)[0];return t.exports.createElement("svg",o({className:e("".concat(f,"-circle"),x),viewBox:"0 0 100 100",style:g},C),N&&t.exports.createElement("defs",null,t.exports.createElement("linearGradient",{id:"".concat(f,"-gradient-").concat(j),x1:"100%",y1:"0%",x2:"0%",y2:"0%"},Object.keys(N).sort((function(t,e){return c(t)-c(e)})).map((function(e,r){return t.exports.createElement("stop",{key:r,offset:e,stopColor:N[e]})})))),t.exports.createElement("path",{className:"".concat(f,"-circle-trail"),d:E,stroke:d,strokeLinecap:m,strokeWidth:h||u,fillOpacity:"0",style:O}),(p=0,S.map((function(e,r){var a=W[r]||W[W.length-1],o="[object Object]"===Object.prototype.toString.call(a)?"url(#".concat(f,"-gradient-").concat(j,")"):"",s=i(p,e,a,u,k,y);return p+=e,t.exports.createElement("path",{key:r,className:"".concat(f,"-circle-path"),d:s.pathString,stroke:o,strokeLinecap:m,strokeWidth:u,opacity:0===e?0:1,fillOpacity:"0",style:s.pathStyle,ref:L[r]})}))).reverse())};l.defaultProps={className:"",percent:0,prefixCls:"rc-progress",strokeColor:"#2db7f5",strokeLinecap:"round",strokeWidth:1,style:{},trailColor:"#D9D9D9",trailWidth:1},l.displayName="Circle";export{l as C};