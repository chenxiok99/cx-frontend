System.register(["./react-router-legacy.3e8cd4e8.js","./@babel-legacy.f580aa0a.js","./react-legacy.0e757699.js","./history-legacy.3c627b50.js","./prop-types-legacy.dbf6303e.js","./tiny-invariant-legacy.438d2f37.js"],(function(e){"use strict";var t,n,r,a,i,c,o,l,u,f;return{setters:[function(e){t=e.R,n=e.c,r=e.m},function(e){a=e._,i=e.a,c=e.b},function(e){o=e.R},function(e){l=e.c,e.a,u=e.b},function(){},function(e){f=e.i}],execute:function(){e("B",function(e){function n(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).history=l(t.props),t}return a(n,e),n.prototype.render=function(){return o.createElement(t,{history:this.history,children:this.props.children})},n}(o.Component)),o.Component;var s=function(e,t){return"function"==typeof e?e(t):e},v=function(e,t){return"string"==typeof e?u(e,null,null,t):e},y=function(e){return e},p=o.forwardRef;void 0===p&&(p=y);var m=p((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,l=i(e,["innerRef","navigate","onClick"]),u=l.target,f=c({},l,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=y!==p&&t||n,o.createElement("a",f)})),h=p((function(e,t){var r=e.component,a=void 0===r?m:r,l=e.replace,u=e.to,h=e.innerRef,g=i(e,["component","replace","to","innerRef"]);return o.createElement(n.Consumer,null,(function(e){e||f(!1);var n=e.history,r=v(s(u,e.location),e.location),i=r?n.createHref(r):"",m=c({},g,{href:i,navigate:function(){var t=s(u,e.location);(l?n.replace:n.push)(t)}});return y!==p?m.ref=t||h:m.innerRef=h,o.createElement(a,m)}))})),g=function(e){return e},d=o.forwardRef;void 0===d&&(d=g),d((function(e,t){var a=e["aria-current"],l=void 0===a?"page":a,u=e.activeClassName,y=void 0===u?"active":u,p=e.activeStyle,m=e.className,R=e.exact,C=e.isActive,b=e.location,j=e.sensitive,E=e.strict,w=e.style,N=e.to,x=e.innerRef,A=i(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.createElement(n.Consumer,null,(function(e){e||f(!1);var n=b||e.location,a=v(s(N,n),n),i=a.pathname,u=i&&i.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),K=u?r(n.pathname,{path:u,exact:R,sensitive:j,strict:E}):null,k=!!(C?C(K,n):K),S=k?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(m,y):m,D=k?c({},w,{},p):w,$=c({"aria-current":k&&l||null,className:S,style:D,to:a},A);return g!==d?$.ref=t||x:$.innerRef=x,o.createElement(h,$)}))}))}}}));