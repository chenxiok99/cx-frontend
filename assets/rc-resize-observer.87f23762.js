import{c as e,d as t,e as s,m as i,f as r}from"./@babel.023f8892.js";import{r as n}from"./react.eb42bb38.js";import{r as o,t as h,w as l,s as a,c as f}from"./rc-util.52d3e9c9.js";import{i as d}from"./resize-observer-polyfill.8deb1e21.js";var c=function(c){e(v,c);var u=t(v);function v(){var e;return s(this,v),(e=u.apply(this,arguments)).resizeObserver=null,e.childNode=null,e.currentElement=null,e.state={width:0,height:0,offsetHeight:0,offsetWidth:0},e.onResize=function(t){var s=e.props.onResize,r=t[0].target,n=r.getBoundingClientRect(),o=n.width,h=n.height,l=r.offsetWidth,a=r.offsetHeight,f=Math.floor(o),d=Math.floor(h);if(e.state.width!==f||e.state.height!==d||e.state.offsetWidth!==l||e.state.offsetHeight!==a){var c={width:f,height:d,offsetWidth:l,offsetHeight:a};e.setState(c),s&&Promise.resolve().then((function(){s(i(i({},c),{},{offsetWidth:l,offsetHeight:a}),r)}))}},e.setChildNode=function(t){e.childNode=t},e}return r(v,[{key:"componentDidMount",value:function(){this.onComponentUpdated()}},{key:"componentDidUpdate",value:function(){this.onComponentUpdated()}},{key:"componentWillUnmount",value:function(){this.destroyObserver()}},{key:"onComponentUpdated",value:function(){if(this.props.disabled)this.destroyObserver();else{var e=o(this.childNode||this);e!==this.currentElement&&(this.destroyObserver(),this.currentElement=e),!this.resizeObserver&&e&&(this.resizeObserver=new d(this.onResize),this.resizeObserver.observe(e))}}},{key:"destroyObserver",value:function(){this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"render",value:function(){var e=this.props.children,t=h(e);if(t.length>1)l(!1,"Find more than one child node with `children` in ResizeObserver. Will only observe first one.");else if(0===t.length)return l(!1,"`children` of ResizeObserver is empty. Nothing is in observe."),null;var s=t[0];if(n.exports.isValidElement(s)&&a(s)){var i=s.ref;t[0]=n.exports.cloneElement(s,{ref:f(i,this.setChildNode)})}return 1===t.length?t[0]:t.map((function(e,t){return!n.exports.isValidElement(e)||"key"in e&&null!==e.key?e:n.exports.cloneElement(e,{key:"".concat("rc-observer-key","-").concat(t)})}))}}]),v}(n.exports.Component);c.displayName="ResizeObserver";export{c as R};