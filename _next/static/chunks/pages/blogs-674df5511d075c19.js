(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{4026:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return t(5479)}])},7311:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(5893),l=t(1664),i=t.n(l),c=t(5675),s=t.n(c);function a(e){let{blogData:n}=e,{id:t,title:l,description:c,image:a}=n;return(0,r.jsxs)(i(),{href:"/blog/".concat(t),className:"m-2 rounded-lg shadow-lg w-full py-5 md:w-2/5 lg:w-1/3 xl:w-1/4",children:[(0,r.jsx)(s(),{src:"/".concat(a,".webp"),alt:l,className:"w-full rounded-lg",quality:"100",width:400,height:400}),(0,r.jsx)("div",{className:"px-6 py-4",children:(0,r.jsx)("div",{className:"text-gray-700 mt-1.5 mb-1.5 line-clamp-2 dark:text-gray-400",children:(0,r.jsx)("p",{className:"line-clamp-3 min-h-[4.5rem]",children:c})})})]})}},5479:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return s},default:function(){return o},getAllDocsWithFilter:function(){return a}});var r=t(5893),l=t(7311),i=t(9008),c=t.n(i),s=!0;function a(e){let n={filteredDocs:e,byCategory(t){return console.log("byCategory: ".concat(t)),(null==t?void 0:t.trim())&&(this.filteredDocs=e.filter(e=>e.category==t)),n},byTag(t){return console.log("byTag: ".concat(t)),(null==t?void 0:t.trim())&&(this.filteredDocs=e.filter(e=>e.keywords.some(e=>e==t))),n}};return n}function o(e){let{allBlogs:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c(),{children:(0,r.jsx)("title",{children:" Blogs | Krishna Mohan A M"})}),(0,r.jsx)("div",{className:"container mx-auto min-h-screen bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-50",children:(0,r.jsx)("div",{className:"flex flex-row flex-wrap justify-center",children:n.map(e=>(0,r.jsx)(l.Z,{blogData:e},e.id))})})]})}}},function(e){e.O(0,[675,774,888,179],function(){return e(e.s=4026)}),_N_E=e.O()}]);