(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(961)}])},1516:function(e,t){"use strict";function r(e,t,r,l){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5569:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return v}});let l=r(4788),n=r(8754),a=r(224),s=n._(r(7294)),o=r(4532),i=r(3353),c=r(1410),u=r(9064),d=r(370),f=r(9955),h=r(4224),p=r(508),x=r(1516),m=r(4266),b=new Set;function g(e,t,r,l,n){if(n||(0,i.isLocalURL)(t)){if(!l.bypassPrefetchedCheck){let n=void 0!==l.locale?l.locale:"locale"in e?e.locale:void 0,a=t+"%"+r+"%"+n;if(b.has(a))return;b.add(a)}Promise.resolve(e.prefetch(t,r,l)).catch(e=>{})}}function j(e){return"string"==typeof e?e:(0,c.formatUrl)(e)}let y=s.default.forwardRef(function(e,t){let r,n;let{href:c,as:b,children:y,prefetch:v,passHref:k,replace:w,shallow:N,scroll:_,locale:P,onClick:C,onMouseEnter:M,onTouchStart:E,legacyBehavior:O=!1}=e,R=a._(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=y,O&&("string"==typeof r||"number"==typeof r)&&(r=s.default.createElement("a",null,r));let S=!1!==v,L=s.default.useContext(f.RouterContext),T=s.default.useContext(h.AppRouterContext),H=null!=L?L:T,A=!L,{href:z,as:I}=s.default.useMemo(()=>{if(!L){let e=j(c);return{href:e,as:b?j(b):e}}let[e,t]=(0,o.resolveHref)(L,c,!0);return{href:e,as:b?(0,o.resolveHref)(L,b):t||e}},[L,c,b]),B=s.default.useRef(z),K=s.default.useRef(I);O&&(n=s.default.Children.only(r));let W=O?n&&"object"==typeof n&&n.ref:t,[U,D,F]=(0,p.useIntersection)({rootMargin:"200px"}),X=s.default.useCallback(e=>{(K.current!==I||B.current!==z)&&(F(),K.current=I,B.current=z),U(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[I,W,z,F,U]);s.default.useEffect(()=>{H&&D&&S&&g(H,z,I,{locale:P},A)},[I,z,D,P,S,null==L?void 0:L.locale,H,A]);let q={ref:X,onClick(e){O||"function"!=typeof C||C(e),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),H&&!e.defaultPrevented&&function(e,t,r,l,n,a,o,c,u,d){let{nodeName:f}=e.currentTarget,h="A"===f.toUpperCase();if(h&&(function(e){let t=e.currentTarget,r=t.getAttribute("target");return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,i.isLocalURL)(r)))return;e.preventDefault();let p=()=>{"beforePopState"in t?t[n?"replace":"push"](r,l,{shallow:a,locale:c,scroll:o}):t[n?"replace":"push"](l||r,{forceOptimisticNavigation:!d})};u?s.default.startTransition(p):p()}(e,H,z,I,w,N,_,P,A,S)},onMouseEnter(e){O||"function"!=typeof M||M(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),H&&(S||!A)&&g(H,z,I,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)},onTouchStart(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),H&&(S||!A)&&g(H,z,I,{locale:P,priority:!0,bypassPrefetchedCheck:!0},A)}};if((0,u.isAbsoluteUrl)(I))q.href=I;else if(!O||k||"a"===n.type&&!("href"in n.props)){let e=void 0!==P?P:null==L?void 0:L.locale,t=(null==L?void 0:L.isLocaleDomain)&&(0,x.getDomainLocale)(I,e,null==L?void 0:L.locales,null==L?void 0:L.domainLocales);q.href=t||(0,m.addBasePath)((0,d.addLocale)(I,e,null==L?void 0:L.defaultLocale))}return O?s.default.cloneElement(n,q):s.default.createElement("a",l._({},R,q),r)}),v=y;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},508:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return i}});let l=r(7294),n=r(29),a="function"==typeof IntersectionObserver,s=new Map,o=[];function i(e){let{rootRef:t,rootMargin:r,disabled:i}=e,c=i||!a,[u,d]=(0,l.useState)(!1),f=(0,l.useRef)(null),h=(0,l.useCallback)(e=>{f.current=e},[]);(0,l.useEffect)(()=>{if(a){if(c||u)return;let e=f.current;if(e&&e.tagName){let l=function(e,t,r){let{id:l,observer:n,elements:a}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},l=o.find(e=>e.root===r.root&&e.margin===r.margin);if(l&&(t=s.get(l)))return t;let n=new Map,a=new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e);return t={id:r,observer:a,elements:n},o.push(r),s.set(r,t),t}(r);return a.set(e,t),n.observe(e),function(){if(a.delete(e),n.unobserve(e),0===a.size){n.disconnect(),s.delete(l);let e=o.findIndex(e=>e.root===l.root&&e.margin===l.margin);e>-1&&o.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r});return l}}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,u,f.current]);let p=(0,l.useCallback)(()=>{d(!1)},[]);return[h,u,p]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},961:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var l=r(5893);r(3814);var n=r(9008),a=r.n(n);function s(){return(0,l.jsxs)("footer",{className:"flex flex-col bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",children:[(0,l.jsx)("div",{className:"mt-10",children:(0,l.jsxs)("ul",{className:"flex flex-row justify-between max-w-sm mx-auto pl-4 pr-4",children:[(0,l.jsx)("li",{className:"hover:text-gray-600 dark:hover:text-gray-100",children:(0,l.jsx)("a",{href:"https://twitter.com/KrishnaAnaril",children:"Twitter"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://krishnamohan.dev/sitemap.xml",children:"Sitemap"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://krishnamohan.dev/rss.xml",children:"RSS"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"mailto:krishnamohan.a.m@gmail.com",children:"Contact"})})]})}),(0,l.jsx)("div",{className:"mx-auto p-5 text-sm",children:(0,l.jsxs)("p",{children:["\xa9 2021-present ",(0,l.jsx)("a",{className:"font-bold",href:"https://krishnamohan.dev/",children:"Krishna Mohan A M"}),". All Rights Reserved."]})})]})}var o=r(1664),i=r.n(o),c=r(1163);function u(e){let{modalState:t,closeModal:r}=e,n=(0,c.useRouter)(),a="border-b-2 border-gray-700 dark:border-gray-300";return(0,l.jsx)("div",{style:{display:t?"block":"none"},className:"fixed top-0 left-0 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg block h-screen lg:hidden p-2 w-screen z-1",children:(0,l.jsxs)("div",{className:"bg-gray-100 bg-opacity-100 m-5 p-5 rounded-lg shadow-xl dark:bg-gray-600 dark:text-gray-50",children:[(0,l.jsx)("div",{className:"flex flex-row justify-end",children:(0,l.jsx)("button",{className:"dark:text-gray-50","aria-label":"close menu items",onClick:r,children:(0,l.jsxs)("svg",{className:"fill-current",xmlns:"http://www.w3.org/2000/svg",height:"24",viewBox:"0 0 24 24",width:"24",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})]})})}),(0,l.jsxs)("ul",{className:"list-none",children:[(0,l.jsx)("li",{className:"/"==n.asPath?a:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/",onClick:r,children:"Home"})}),(0,l.jsx)("li",{className:n.asPath.startsWith("/blog")?a:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/blogs",onClick:r,children:"Blog"})}),(0,l.jsx)("li",{className:n.asPath.startsWith("/projects")?a:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/projects",onClick:r,children:"Projects"})}),(0,l.jsx)("li",{className:n.asPath.startsWith("/about")?a:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/about",onClick:r,children:"About"})})]})]})})}var d=r(7294);function f(){let e=(0,c.useRouter)(),t="border-b-2 border-gray-700 dark:border-gray-300",[r,n]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{r?document.body.style.overflow="hidden":document.body.style.overflow="unset"}),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("nav",{className:"sticky top-0 bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50 bg-opacity-50 dark:bg-opacity-50 backdrop-blur-lg",children:[(0,l.jsx)("section",{className:"hidden lg:flex flex-row justify-center",children:(0,l.jsx)("nav",{children:(0,l.jsxs)("ul",{className:"lg:text-xl lg:flex lg:flex-row",children:[(0,l.jsx)("li",{className:"/"==e.asPath?t:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/",children:"Home"})}),(0,l.jsx)("li",{className:e.asPath.startsWith("/blog")?t:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/blogs",children:"Blog"})}),(0,l.jsx)("li",{className:e.asPath.startsWith("/projects")?t:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/projects",children:"Projects"})}),(0,l.jsx)("li",{className:e.asPath.startsWith("/about")?t:"",children:(0,l.jsx)(i(),{className:"block p-4 cursor-pointer",href:"/about",children:"About"})})]})})}),(0,l.jsx)("div",{className:"lg:hidden mr-4 py-4 right-0",children:(0,l.jsx)("button",{className:"p-2","aria-label":"view menu items",onClick:()=>n(!0),children:(0,l.jsxs)("svg",{className:"fill-gray-800 dark:fill-gray-50",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"black",width:"24px",height:"24px",children:[(0,l.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),(0,l.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})]})})})]}),(0,l.jsx)(u,{modalState:r,closeModal:()=>n(!1)})]})}function h(e){let{children:t}=e;return(0,l.jsxs)("div",{children:[(0,l.jsx)(f,{}),(0,l.jsx)("div",{className:"min-h-screen",children:t}),(0,l.jsx)(s,{})]})}function p(e){let{Component:t,pageProps:r}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a(),{children:(0,l.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=1, viewport-fit=cover"})}),(0,l.jsx)(h,{children:(0,l.jsx)(t,{...r})})]})}},3814:function(){},9008:function(e,t,r){e.exports=r(2636)},1664:function(e,t,r){e.exports=r(5569)},1163:function(e,t,r){e.exports=r(6885)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);