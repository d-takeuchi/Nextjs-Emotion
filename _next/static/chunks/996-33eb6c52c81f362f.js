(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[996],{4019:function(a,b){"use strict";function c(a,b,c,d){return!1}Object.defineProperty(b,"__esModule",{value:!0}),b.getDomainLocale=c,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},7942:function(a,b,c){"use strict";var d,e=c(5696);Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var f=(d=c(7294),d&&d.__esModule?d:{default:d}),g=c(4957),h=c(7995),i=c(647),j=c(1992),k=c(639),l=c(4019),m=c(227),n=void 0!==f.default.useTransition,o={};function p(a,b,c,d){if(a&&g.isLocalURL(b)){a.prefetch(b,c,d).catch(function(a){});var e=d&& void 0!==d.locale?d.locale:a&&a.locale;o[b+"%"+c+(e?"%"+e:"")]=!0}}var q=f.default.forwardRef(function(a,b){var c,d,q=a.href,r=a.as,s=a.children,t=a.prefetch,u=a.passHref,v=a.replace,w=a.soft,x=a.shallow,y=a.scroll,z=a.locale,A=a.onClick,B=a.onMouseEnter,C=a.legacyBehavior,D=void 0===C?!0!==Boolean(!1):C,E=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)b.indexOf(c=f[d])>=0||(e[c]=a[c]);return e}(a,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);c=s,D&&("string"==typeof c||"number"==typeof c)&&(c=f.default.createElement("a",null,c));var F=!1!==t,G=n?f.default.useTransition():[],H=e(G,2),I=H[1],J=f.default.useContext(i.RouterContext),K=f.default.useContext(j.AppRouterContext);K&&(J=K);var L=f.default.useMemo(function(){var a=g.resolveHref(J,q,!0),b=e(a,2),c=b[0],d=b[1];return{href:c,as:r?g.resolveHref(J,r):d||c}},[J,q,r]),M=L.href,N=L.as,O=f.default.useRef(M),P=f.default.useRef(N);D&&(d=f.default.Children.only(c));var Q=D?d&&"object"==typeof d&&d.ref:b,R=k.useIntersection({rootMargin:"200px"}),S=e(R,3),T=S[0],U=S[1],V=S[2],W=f.default.useCallback(function(a){(P.current!==N||O.current!==M)&&(V(),P.current=N,O.current=M),T(a),Q&&("function"==typeof Q?Q(a):"object"==typeof Q&&(Q.current=a))},[N,Q,M,V,T]);f.default.useEffect(function(){var a=U&&F&&g.isLocalURL(M),b=void 0!==z?z:J&&J.locale,c=o[M+"%"+N+(b?"%"+b:"")];a&&!c&&p(J,M,N,{locale:b})},[N,M,U,z,F,J]);var X={ref:W,onClick:function(a){D||"function"!=typeof A||A(a),D&&d.props&&"function"==typeof d.props.onClick&&d.props.onClick(a),a.defaultPrevented||function(a,b,c,d,e,f,h,i,j,k){if("A"!==a.currentTarget.nodeName.toUpperCase()||(!(m=(l=a).currentTarget.target)||"_self"===m)&&!l.metaKey&&!l.ctrlKey&&!l.shiftKey&&!l.altKey&&(!l.nativeEvent||2!==l.nativeEvent.which)&&g.isLocalURL(c)){a.preventDefault();var l,m,n=function(){"softPush"in b&&"softReplace"in b?b[f?e?"softReplace":"softPush":e?"replace":"push"](c):b[e?"replace":"push"](c,d,{shallow:h,locale:j,scroll:i})};k?k(n):n()}}(a,J,M,N,v,w,x,y,z,K?I:void 0)},onMouseEnter:function(a){D||"function"!=typeof B||B(a),D&&d.props&&"function"==typeof d.props.onMouseEnter&&d.props.onMouseEnter(a),g.isLocalURL(M)&&p(J,M,N,{priority:!0})}};if(!D||u||"a"===d.type&&!("href"in d.props)){var Y=void 0!==z?z:J&&J.locale,Z=J&&J.isLocaleDomain&&l.getDomainLocale(N,Y,J.locales,J.domainLocales);X.href=Z||m.addBasePath(h.addLocale(N,Y,J&&J.defaultLocale))}return D?f.default.cloneElement(d,X):f.default.createElement("a",Object.assign({},E,X),c)});b.default=q,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},639:function(a,b,c){"use strict";var d=c(5696);Object.defineProperty(b,"__esModule",{value:!0}),b.useIntersection=function(a){var b=a.rootRef,c=a.rootMargin,i=a.disabled||!g,j=e.useRef(),k=d(e.useState(!1),2),l=k[0],m=k[1],n=d(e.useState(null),2),o=n[0],p=n[1];e.useEffect(function(){if(g){if(j.current&&(j.current(),j.current=void 0),!i&&!l)return o&&o.tagName&&(j.current=h(o,function(a){return a&&m(a)},{root:null==b?void 0:b.current,rootMargin:c})),function(){null==j.current||j.current(),j.current=void 0}}else if(!l){var a=f.requestIdleCallback(function(){return m(!0)});return function(){return f.cancelIdleCallback(a)}}},[o,i,c,b,l]);var q=e.useCallback(function(){m(!1)},[]);return[p,l,q]};var e=c(7294),f=c(6286),g="function"==typeof IntersectionObserver;function h(a,b,c){var d=k(c),e=d.id,f=d.observer,g=d.elements;return g.set(a,b),f.observe(a),function(){if(g.delete(a),f.unobserve(a),0===g.size){f.disconnect(),i.delete(e);var b=j.findIndex(function(a){return a.root===e.root&&a.margin===e.margin});b> -1&&j.splice(b,1)}}}var i=new Map,j=[];function k(a){var b,c={root:a.root||null,margin:a.rootMargin||""},d=j.find(function(a){return a.root===c.root&&a.margin===c.margin});if(d&&(b=i.get(d)))return b;var e=new Map,f=new IntersectionObserver(function(a){a.forEach(function(a){var b=e.get(a.target),c=a.isIntersecting||a.intersectionRatio>0;b&&c&&b(c)})},a);return b={id:c,observer:f,elements:e},j.push(c),i.set(c,b),b}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},8e3:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.AmpStateContext=void 0;var d,e,f=(d=c(7294),d&&d.__esModule?d:{default:d}).default.createContext({});b.AmpStateContext=f},9470:function(a,b){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.isInAmpMode=function(){var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:{},b=a.ampFirst,c=a.hybrid,d=a.hasQuery;return void 0!==b&&b|| void 0!==c&&c&& void 0!==d&&d}},1992:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.FullAppTreeContext=b.AppTreeContext=b.AppRouterContext=void 0;var d,e=(d=c(7294),d&&d.__esModule?d:{default:d}),f=e.default.createContext(null);b.AppRouterContext=f;var g=e.default.createContext(null);b.AppTreeContext=g;var h=e.default.createContext(null);b.FullAppTreeContext=h},2717:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.defaultHead=l,b.default=void 0;var d,e=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=k();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var e in a)if(Object.prototype.hasOwnProperty.call(a,e)){var f=d?Object.getOwnPropertyDescriptor(a,e):null;f&&(f.get||f.set)?Object.defineProperty(c,e,f):c[e]=a[e]}return c.default=a,b&&b.set(a,c),c}(c(7294)),f=(d=c(1585),d&&d.__esModule?d:{default:d}),g=c(8e3),h=c(5850),i=c(9470);function j(){return(j=Object.assign||function(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}return a}).apply(this,arguments)}function k(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return k=function(){return a},a}function l(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0],b=[e.default.createElement("meta",{charSet:"utf-8"})];return a||b.push(e.default.createElement("meta",{name:"viewport",content:"width=device-width"})),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===e.default.Fragment?a.concat(e.default.Children.toArray(b.props.children).reduce(function(a,b){return"string"==typeof b||"number"==typeof b?a:a.concat(b)},[])):a.concat(b)}c(9475);var n=["name","httpEquiv","charSet","itemProp"];function o(a,b){var c,d,f,g;return a.reduce(m,[]).reverse().concat(l(b.inAmpMode).reverse()).filter((c=new Set,d=new Set,f=new Set,g={},function(a){var b=!0,e=!1;if(a.key&&"number"!=typeof a.key&&a.key.indexOf("$")>0){e=!0;var h=a.key.slice(a.key.indexOf("$")+1);c.has(h)?b=!1:c.add(h)}switch(a.type){case"title":case"base":d.has(a.type)?b=!1:d.add(a.type);break;case"meta":for(var i=0,j=n.length;i<j;i++){var k=n[i];if(a.props.hasOwnProperty(k)){if("charSet"===k)f.has(k)?b=!1:f.add(k);else{var l=a.props[k],m=g[k]||new Set;("name"!==k||!e)&&m.has(l)?b=!1:(m.add(l),g[k]=m)}}}}return b})).reverse().map(function(a,c){var d=a.key||c;if(!b.inAmpMode&&"link"===a.type&&a.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(b){return a.props.href.startsWith(b)})){var f=j({},a.props||{});return f["data-href"]=f.href,f.href=void 0,f["data-optimized-fonts"]=!0,e.default.cloneElement(a,f)}return e.default.cloneElement(a,{key:d})})}var p=function(a){var b=a.children,c=e.useContext(g.AmpStateContext),d=e.useContext(h.HeadManagerContext);return e.default.createElement(f.default,{reduceComponentsToState:o,headManager:d,inAmpMode:i.isInAmpMode(c)},b)};b.default=p,("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},1585:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c=a.headManager,e=a.reduceComponentsToState;function i(){if(c&&c.mountedInstances){var b=d.Children.toArray(Array.from(c.mountedInstances).filter(Boolean));c.updateHead(e(b,a))}}return f&&(null==c||null==(b=c.mountedInstances)||b.add(a.children),i()),g(function(){var b;return null==c||null==(b=c.mountedInstances)||b.add(a.children),function(){var b;null==c||null==(b=c.mountedInstances)||b.delete(a.children)}}),g(function(){return c&&(c._pendingUpdate=i),function(){c&&(c._pendingUpdate=i)}}),h(function(){return c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null),function(){c&&c._pendingUpdate&&(c._pendingUpdate(),c._pendingUpdate=null)}}),null};var d=function(a){if(a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var b=e();if(b&&b.has(a))return b.get(a);var c={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){var g=d?Object.getOwnPropertyDescriptor(a,f):null;g&&(g.get||g.set)?Object.defineProperty(c,f,g):c[f]=a[f]}return c.default=a,b&&b.set(a,c),c}(c(7294));function e(){if("function"!=typeof WeakMap)return null;var a=new WeakMap;return e=function(){return a},a}var f=!1,g=f?function(){}:d.useLayoutEffect,h=f?function(){}:d.useEffect},9008:function(a,b,c){a.exports=c(2717)},1664:function(a,b,c){a.exports=c(7942)}}])