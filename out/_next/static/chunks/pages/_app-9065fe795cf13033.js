(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(1642)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(2648).Z,l=r(7273).Z,o=n(r(7294)),a=r(1003),s=r(7795),i=r(4465),c=r(2692),u=r(8245),f=r(9246),d=r(227),h=r(3468);let p=new Set;function x(e,t,r,n){if(a.isLocalURL(t)){if(!n.bypassPrefetchedCheck){let l=void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0,o=t+"%"+r+"%"+l;if(p.has(o))return;p.add(o)}Promise.resolve(e.prefetch(t,r,n)).catch(e=>{})}}function m(e){return"string"==typeof e?e:s.formatUrl(e)}let v=o.default.forwardRef(function(e,t){let r,n;let{href:s,as:p,children:v,prefetch:j,passHref:g,replace:b,shallow:y,scroll:_,locale:w,onClick:k,onMouseEnter:N,onTouchStart:M,legacyBehavior:C=!1}=e,P=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=v,C&&("string"==typeof r||"number"==typeof r)&&(r=o.default.createElement("a",null,r));let E=!1!==j,O=o.default.useContext(c.RouterContext),R=o.default.useContext(u.AppRouterContext),S=null!=O?O:R,T=!O,{href:L,as:H}=o.default.useMemo(()=>{if(!O){let e=m(s);return{href:e,as:p?m(p):e}}let[t,r]=a.resolveHref(O,s,!0);return{href:t,as:p?a.resolveHref(O,p):r||t}},[O,s,p]),I=o.default.useRef(L),A=o.default.useRef(H);C&&(n=o.default.Children.only(r));let K=C?n&&"object"==typeof n&&n.ref:t,[z,B,D]=f.useIntersection({rootMargin:"200px"}),U=o.default.useCallback(e=>{(A.current!==H||I.current!==L)&&(D(),A.current=H,I.current=L),z(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[H,K,L,D,z]);o.default.useEffect(()=>{S&&B&&E&&x(S,L,H,{locale:w})},[H,L,B,w,E,null==O?void 0:O.locale,S]);let W={ref:U,onClick(e){C||"function"!=typeof k||k(e),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,r,n,l,s,i,c,u,f){let{nodeName:d}=e.currentTarget,h="A"===d.toUpperCase();if(h&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!a.isLocalURL(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[l?"replace":"push"](r,n,{shallow:s,locale:c,scroll:i}):t[l?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};u?o.default.startTransition(p):p()}(e,S,L,H,b,y,_,w,T,E)},onMouseEnter(e){C||"function"!=typeof N||N(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),S&&(E||!T)&&x(S,L,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){C||"function"!=typeof M||M(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),S&&(E||!T)&&x(S,L,H,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!C||g||"a"===n.type&&!("href"in n.props)){let F=void 0!==w?w:null==O?void 0:O.locale,X=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(H,F,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);W.href=X||h.addBasePath(i.addLocale(H,F,null==O?void 0:O.defaultLocale))}return C?o.default.cloneElement(n,W):o.default.createElement("a",Object.assign({},P,W),r)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!o,[u,f]=n.useState(!1),[d,h]=n.useState(null);n.useEffect(()=>{if(o){if(!c&&!u&&d&&d.tagName){let e=function(e,t,r){let{id:n,observer:l,elements:o}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=s.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let l=new Map,o=new IntersectionObserver(e=>{e.forEach(e=>{let t=l.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:o,elements:l},s.push(r),a.set(r,t),t}(r);return o.set(e,t),l.observe(e),function(){if(o.delete(e),l.unobserve(e),0===o.size){l.disconnect(),a.delete(n);let t=s.findIndex(e=>e.root===n.root&&e.margin===n.margin);t>-1&&s.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r});return e}}else if(!u){let n=l.requestIdleCallback(()=>f(!0));return()=>l.cancelIdleCallback(n)}},[d,c,r,t,u]);let p=n.useCallback(()=>{f(!1)},[]);return[h,u,p]};var n=r(7294),l=r(4686);let o="function"==typeof IntersectionObserver,a=new Map,s=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1642:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893);r(7475);var l=r(9008),o=r.n(l);function a(){return(0,n.jsxs)("footer",{className:"flex flex-col bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",children:[(0,n.jsx)("div",{className:"mt-10",children:(0,n.jsxs)("ul",{className:"flex flex-row justify-between max-w-sm mx-auto pl-4 pr-4",children:[(0,n.jsx)("li",{className:"hover:text-gray-600 dark:hover:text-gray-100",children:(0,n.jsx)("a",{href:"https://twitter.com/KrishnaAnaril",children:"Twitter"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://krishnamohan.dev/sitemap-blog.xml",children:"Sitemap"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://krishnamohan.dev/feed.xml",children:"RSS"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"mailto:krishnamohan.a.m@gmail.com",children:"Contact"})})]})}),(0,n.jsx)("div",{className:"mx-auto p-5 text-sm",children:(0,n.jsxs)("p",{children:["\xa9 2021-present ",(0,n.jsx)("a",{className:"font-bold",href:"https://krishnamohan.dev/",children:"Krishna Mohan A M"}),". All Rights Reserved."]})})]})}var s=r(1664),i=r.n(s),c=r(1163);function u(){let e=(0,c.useRouter)(),t="p-3 cursor-pointer border-b-2 border-gray-700 dark:border-gray-300",r="p-3 cursor-pointer";return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("nav",{className:"sticky top-0 text-gray-800 dark:text-gray-50 backdrop-blur-lg mix-blend-multiply dark:mix-blend-color-dodge",children:[(0,n.jsx)("section",{className:"hidden lg:flex flex-row justify-center",children:(0,n.jsx)("nav",{children:(0,n.jsxs)("ul",{className:"lg:text-xl lg:flex lg:flex-row",children:[(0,n.jsx)("li",{className:"/"==e.asPath?t:r,children:(0,n.jsx)(i(),{href:"/",children:"Home"})}),(0,n.jsx)("li",{className:e.asPath.startsWith("/blog")?t:r,children:(0,n.jsx)(i(),{href:"/blogs",children:"Blog"})}),(0,n.jsx)("li",{className:e.asPath.startsWith("/projects")?t:r,children:(0,n.jsx)(i(),{href:"/projects",children:"Projects"})}),(0,n.jsx)("li",{className:e.asPath.startsWith("/about")?t:r,children:(0,n.jsx)(i(),{href:"/about",children:"About"})})]})})}),(0,n.jsx)("div",{className:"absolute lg:hidden mr-4 p-4 right-0",children:(0,n.jsx)("button",{className:"p-2","aria-label":"view menu items",children:(0,n.jsxs)("svg",{className:"fill-gray-800 dark:fill-gray-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",children:[(0,n.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,n.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})})]})})}function f(e){let{children:t}=e;return(0,n.jsxs)("div",{children:[(0,n.jsx)(u,{}),(0,n.jsx)("div",{className:"min-h-screen",children:t}),(0,n.jsx)(a,{})]})}function d(e){let{Component:t,pageProps:r}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o(),{children:(0,n.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"})}),(0,n.jsx)(f,{children:(0,n.jsx)(t,{...r})})]})}},7475:function(){},9008:function(e,t,r){e.exports=r(3121)},1664:function(e,t,r){e.exports=r(1551)},1163:function(e,t,r){e.exports=r(880)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(880)}),_N_E=e.O()}]);