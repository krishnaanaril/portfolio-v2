if(!self.define){let e,a={};const n=(n,r)=>(n=new URL(n+".js",r).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,b)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let i={};const c=e=>n(e,s),d={module:{uri:s},exports:i,require:c};a[s]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(b(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-q0os4X_gik5XjcLu2qx1K.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-409a42cd3b475f95.js",revision:"409a42cd3b475f95"},{url:"/_next/static/chunks/framework-3b5a00d5d7e8d93b.js",revision:"3b5a00d5d7e8d93b"},{url:"/_next/static/chunks/main-66aa1bb94c4eba45.js",revision:"66aa1bb94c4eba45"},{url:"/_next/static/chunks/pages/_app-f2cdab4dc7a6a07f.js",revision:"f2cdab4dc7a6a07f"},{url:"/_next/static/chunks/pages/_error-8353112a01355ec2.js",revision:"8353112a01355ec2"},{url:"/_next/static/chunks/pages/_offline-910abe35df83677e.js",revision:"910abe35df83677e"},{url:"/_next/static/chunks/pages/about-09bbb74cfe8c7d81.js",revision:"09bbb74cfe8c7d81"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-9f2daf21e5c40644.js",revision:"9f2daf21e5c40644"},{url:"/_next/static/chunks/pages/blogs-3751775534431b3e.js",revision:"3751775534431b3e"},{url:"/_next/static/chunks/pages/index-2a56948852d4b458.js",revision:"2a56948852d4b458"},{url:"/_next/static/chunks/pages/projects-7ec357e84679063c.js",revision:"7ec357e84679063c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/a02e1e35a45fb249.css",revision:"a02e1e35a45fb249"},{url:"/_next/static/q0os4X_gik5XjcLu2qx1K/_buildManifest.js",revision:"4291ae8140f134d38445db72cf065ab9"},{url:"/_next/static/q0os4X_gik5XjcLu2qx1K/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"q0os4X_gik5XjcLu2qx1K"},{url:"/banners/01.png",revision:"315e9ca8201a7d6d88b9fd8fd727deb8"},{url:"/banners/01.webp",revision:"97dddab8ee22655f9b1e231377dbe133"},{url:"/banners/02.png",revision:"94440fd0de4833d9a93e5e4b7e8bda89"},{url:"/banners/02.webp",revision:"ef100bb3acae0df8c1b143155e7341ae"},{url:"/banners/03.png",revision:"82945defea3bdf3622978e0f154fc7cf"},{url:"/banners/03.webp",revision:"5253bbe9e61a28371fc961c4e7fd9b13"},{url:"/banners/04.png",revision:"ab19552abf4af0d3e121db06da3b5462"},{url:"/banners/04.webp",revision:"763e39f2c12e649d134b435d6023d460"},{url:"/banners/05.png",revision:"da82205e0fdd9893ed259fa7bbf05196"},{url:"/banners/05.webp",revision:"c4ce78610d5066933837e398358f0ffd"},{url:"/banners/06.png",revision:"0c1e8c87a34353f6c51f98dfbedccfa7"},{url:"/banners/06.webp",revision:"39e14c680f5b44d51d47ec8ebe8b45a7"},{url:"/banners/07.png",revision:"6337c8b5abc239cde8d9d9fdc1ee71ef"},{url:"/banners/07.webp",revision:"c603b7909c21aec0a789fcff4ff6f92c"},{url:"/banners/08.png",revision:"3da2a8c4a3208b0127a7dc7543dae9f6"},{url:"/banners/08.webp",revision:"b07c3f75cf954f2ba497f24803f56f4c"},{url:"/banners/09.png",revision:"b9b02e8b9cd5075bca6169dadc4b3702"},{url:"/banners/09.webp",revision:"d56781259774ab98c9d8daca971b06ff"},{url:"/banners/10.png",revision:"d16c7433e6f7815fc7d7e287a6859f0d"},{url:"/banners/10.webp",revision:"de915120ce93156bdb2ce1852cd1a014"},{url:"/banners/11.png",revision:"2b0731d78f7672f911e1a0115e514cb7"},{url:"/banners/11.webp",revision:"f11e24d8dd784596ff7a5acd71939d95"},{url:"/banners/12.png",revision:"b67336f02a3799f87c1c0677c3c41704"},{url:"/banners/12.webp",revision:"39076aa72b51c4c04265f98aff17582a"},{url:"/banners/13.png",revision:"7bd00574f1012b313021df0c047f267e"},{url:"/banners/13.webp",revision:"b0dea8dbdeb9bd6a8f411a647bf385da"},{url:"/banners/14.png",revision:"ae708acb8e809f5b4f7fbf3e8cbbf978"},{url:"/banners/14.webp",revision:"ea15488c974707ee0f79e3ca8fc61c62"},{url:"/banners/15.png",revision:"d5c615c70d524da4e99a400ca24cfd52"},{url:"/banners/15.webp",revision:"439cb23d987cd380e03555a1dd7244fd"},{url:"/banners/16.png",revision:"63e7f3cf7e140140a071df43a44d45d3"},{url:"/banners/16.webp",revision:"455821e5ff84c6fa379be4741bfcc5b5"},{url:"/banners/17.png",revision:"b796a86e2dcbd36824fc10022d9ad946"},{url:"/banners/17.webp",revision:"f3655a7e406361863d19716f05970f6c"},{url:"/banners/18.png",revision:"686157f6a008cf51f47b254ad7e69900"},{url:"/banners/18.webp",revision:"9155086fe08de7e0dd2ecf3073de00b4"},{url:"/banners/19.png",revision:"af11a0d054efcfb04b76860af1bc8810"},{url:"/banners/19.webp",revision:"779d2aac5453f69f67b66971c202867d"},{url:"/banners/20.png",revision:"cf7ceb56c4c58cb2a05326302c90f233"},{url:"/banners/20.webp",revision:"5605d2ff2ec41902558049f6b70dea7a"},{url:"/banners/21.png",revision:"dfe0c33377d7ceb005ff41a8856783fe"},{url:"/banners/21.webp",revision:"77016ace318541a36edea76aa01a9a0b"},{url:"/banners/22.png",revision:"8bf1e244740c915fe3016d7da4839d6f"},{url:"/banners/22.webp",revision:"e92cdf32adf14dac3623e4852b8ca3d4"},{url:"/banners/23.png",revision:"ea0d77edbd33a46b3cbc96f48c6600bf"},{url:"/banners/23.webp",revision:"514d9cb925031e89b8632fb417c6ad8f"},{url:"/banners/24.png",revision:"648a11a01764928f2d6fe587efff8ac5"},{url:"/banners/24.webp",revision:"a87f53806da50d898abb2e675e00de7a"},{url:"/banners/25.png",revision:"9c5296308ce7437001206233e56a2887"},{url:"/banners/25.webp",revision:"9177da6304879d7a366fb03a2d07a6d9"},{url:"/banners/26.png",revision:"fb1ef95965f4e6b4f01f4ca1743b6d9d"},{url:"/banners/26.webp",revision:"b05787a04f289350ad60dfd723c9f757"},{url:"/banners/27.png",revision:"30f4f14a5259a64d4cfc4b650da8fdc3"},{url:"/banners/27.webp",revision:"5d531a5a694a528c09fb6b6efbf220b2"},{url:"/banners/28.png",revision:"45ddebfc524a86bcd9876134b943a8ea"},{url:"/banners/28.webp",revision:"f55636e756f57da95cd401bdab81c176"},{url:"/banners/29.png",revision:"68f4f62ebaffe87f8f914687e4eaec12"},{url:"/banners/29.webp",revision:"6dff086b207522332742fa8831d60325"},{url:"/banners/30.png",revision:"06aa6c48717c02facb464f4f8f259add"},{url:"/banners/30.webp",revision:"f3da3b825af49b58cf8f3e3c99c719a3"},{url:"/banners/31.png",revision:"5e9c00860211d4703d6c4aa5e4d51c90"},{url:"/banners/31.webp",revision:"ca1539334396cf42599b85d55d7222cd"},{url:"/banners/32.png",revision:"d33c2a15f40be8e29065d975f42e2733"},{url:"/banners/32.webp",revision:"25dae0a42c7f968d40c00a8de199addd"},{url:"/banners/33.png",revision:"e3c091e4165b4073c7917f8637c8abf5"},{url:"/banners/33.webp",revision:"31c7826c226d2314940c3d818d1836f5"},{url:"/banners/34.png",revision:"68cdadaa2df7433da0b5d73c50ac926c"},{url:"/banners/34.webp",revision:"05c89b6f586b7aee2eed0289a0cb42bb"},{url:"/banners/35.png",revision:"17814bbc8308ab17a5027abd6f446256"},{url:"/banners/35.webp",revision:"cc70547fd581c04c0f73f416ddb61665"},{url:"/banners/36.png",revision:"a224a7d0b41dca7ab9fb9f9a6f5e2fab"},{url:"/banners/36.webp",revision:"719fe1b5337d57bf01617670dc6b082e"},{url:"/banners/37.png",revision:"75e48f220030068389c55f090ca32b8c"},{url:"/banners/37.webp",revision:"f79c825560309b1185544afbf62d8763"},{url:"/banners/38.png",revision:"a9aa65a85650862dbb7b9a32b3c447f4"},{url:"/banners/38.webp",revision:"05009f44243148194ddd338274e7eafe"},{url:"/banners/39.png",revision:"fc1d8a9b77d162b49ff7a934fc3bf9f8"},{url:"/banners/39.webp",revision:"037175230f96826ecd11ffc3235469e9"},{url:"/banners/40.png",revision:"2b7e2f4826d5f256d8cfe4edd161a382"},{url:"/banners/40.webp",revision:"231c2dc766dbbbaf1f39275d744ce012"},{url:"/banners/41.png",revision:"946ee84216d567b91e3d1bbd2b31167c"},{url:"/banners/41.webp",revision:"a8870b7000ce8eaec228d6b6cabd9e7e"},{url:"/banners/42.png",revision:"1b3c45dc9ab9547f483756305a61b9ec"},{url:"/banners/42.webp",revision:"8afa6fe3c4bc5cad59bf930b9fbf7616"},{url:"/banners/43.png",revision:"f174f39fde5abadfa7c2580b9da0becf"},{url:"/banners/43.webp",revision:"0948375128bd8a08539985e3b7fca6a8"},{url:"/banners/44.png",revision:"e3c2a0ba30c279b5d4c318083377bb76"},{url:"/banners/44.webp",revision:"0954fdfbc01e0145ada40d5d3bf0be94"},{url:"/banners/45.png",revision:"2be68890e702af2135c304caa7f707ca"},{url:"/banners/45.webp",revision:"ea3630cefd4fde8726ef792a479e0e35"},{url:"/banners/46.png",revision:"7ab26508a7bda781bca83028b48e69ac"},{url:"/banners/46.webp",revision:"7b393b1d8da7a545fe69dbab46e6e4a8"},{url:"/banners/47.png",revision:"a7dbf39b3698fdd6407f1bab10fcaf91"},{url:"/banners/47.webp",revision:"5555e725d9dd91ab1af843e391267b37"},{url:"/banners/48.png",revision:"272e2d29345a0c5b6eb80bb539a74e22"},{url:"/banners/48.webp",revision:"8648a2c6bbdb9dd2bebb6ea142b6d668"},{url:"/banners/49.png",revision:"78862f150e58e673b83319d0cae004c5"},{url:"/banners/49.webp",revision:"ac3277468f9e9dc6d7258282a9cb7036"},{url:"/banners/50.png",revision:"31d6ebd3bc0b508e60bdaabf1ebda025"},{url:"/banners/50.webp",revision:"6366b8b13e27d8943fab721263a70286"},{url:"/banners/51.png",revision:"43f5366313aa24273376a8539c5ffb97"},{url:"/banners/51.webp",revision:"822cc9af8969b92a6a24a1a84e897a28"},{url:"/banners/52.png",revision:"8446ac4b03f63f9a8d75cd582f32c428"},{url:"/banners/52.webp",revision:"708cb29324af4efa87dd200c67ccdaa3"},{url:"/banners/53.png",revision:"962cbe6a5328f56d7fd8b6db767f7663"},{url:"/banners/53.webp",revision:"90efaca88a410e05f665c10fcdb96086"},{url:"/banners/54.png",revision:"c5685be5da431bc375abb0ed0178737b"},{url:"/banners/54.webp",revision:"607965a4ebc3bd98498216dddf896430"},{url:"/banners/55.png",revision:"6bc91a58892d7102c7f66fed86ce34a9"},{url:"/banners/55.webp",revision:"dd2aace8bdc0128671e9cba9374aef89"},{url:"/banners/56.png",revision:"1acac31ba7c9ab122cfe37054baf0777"},{url:"/banners/56.webp",revision:"0236acf1ce03d3d1ce67451e4438c539"},{url:"/banners/57.png",revision:"e22ea153962a5a6fa546a6d9aea93352"},{url:"/banners/57.webp",revision:"208d69e5e1bcd099e74c0b7583ad2144"},{url:"/banners/58.png",revision:"1debde597998fb9433a216b742adfe91"},{url:"/banners/58.webp",revision:"d68058e745504a74ad3e516fe8022ebc"},{url:"/banners/59.png",revision:"8a3f9784e35128a6c394b36814d324b7"},{url:"/banners/59.webp",revision:"d461d92562d41d9578992f52b6ce957a"},{url:"/banners/60.png",revision:"4aa6202de5848779fdeca3b9a929de6a"},{url:"/banners/60.webp",revision:"5c8ab6f70da8e692fdc40153ba50d698"},{url:"/banners/61.png",revision:"a2c7687f581d26279cfb1ef1674626ac"},{url:"/banners/61.webp",revision:"7dee5650e11dc6132bbacc629d0eff47"},{url:"/banners/62.png",revision:"0ac47d5e3ff8408dfdea570d14d62b20"},{url:"/banners/62.webp",revision:"6a71714bcbe6a87b39a0e50cbc98452b"},{url:"/banners/63.png",revision:"fd670f86758b265fc543999f78512087"},{url:"/banners/63.webp",revision:"dfbbe4de188a481fdffb80ca2edeb007"},{url:"/banners/64.png",revision:"1296731e6b0f10cd4633d53035e2c289"},{url:"/banners/64.webp",revision:"e7445994b0f7e3d83c73a0b763d0b032"},{url:"/banners/65.png",revision:"1333b2c1be5a5b505b6d6285b5a6fe68"},{url:"/banners/65.webp",revision:"3818be24eb624bc967be04461bcdadbc"},{url:"/banners/66.png",revision:"0c92cc3cf3269e91204bb08216e995e1"},{url:"/banners/66.webp",revision:"207c330515cc2ab77db7c8d80e1dc1c9"},{url:"/banners/67.png",revision:"812282055f0f8ff93fc2af217ca48417"},{url:"/banners/67.webp",revision:"53cf6413d43b729c6a4e1ff440b719a0"},{url:"/banners/68.png",revision:"f2f265b3b2f44ec8de60746828f03976"},{url:"/banners/68.webp",revision:"14c96b4966df30269422bdf13bfcf616"},{url:"/favicon.ico",revision:"54b91bd63b511820a8dc18557e50bcac"},{url:"/icons/icon-128x128.png",revision:"4783790127cc147b8044569243a442c1"},{url:"/icons/icon-144x144.png",revision:"38fe91b19b7a4994de5608911b6fa8f4"},{url:"/icons/icon-152x152.png",revision:"3997990440986c142b720a2101139e2b"},{url:"/icons/icon-192x192.png",revision:"be74088e89fd8fd8b162c53d458d1b72"},{url:"/icons/icon-384x384.png",revision:"a9104d375a14c64f468b271ecb8d837b"},{url:"/icons/icon-512x512.png",revision:"c099e263676832043caeef8818051b61"},{url:"/icons/icon-72x72.png",revision:"aeedbe6ea6883a6bfba14ac24b9ef95d"},{url:"/icons/icon-96x96.png",revision:"9edd5c32ed057222afdc8e7d294a6b77"},{url:"/images/01_01.png",revision:"2c1dc4936fc0c7936e4ecfafda3e72e7"},{url:"/images/01_01.webp",revision:"ef56af64bae354511d805b962f4dc9c1"},{url:"/images/01_02.png",revision:"fb68ee638242c27841c47f3ff721ace8"},{url:"/images/01_02.webp",revision:"cccdf0aad4e5c35f50ca512510d17f4b"},{url:"/images/01_03.png",revision:"4c309e8332616f73b6f05ee4b9d2f2eb"},{url:"/images/01_03.webp",revision:"aed5a695b661f06a8481a47f480807ee"},{url:"/images/01_04.png",revision:"439ede8b5d57ad70fad363fb5e5110dc"},{url:"/images/01_04.webp",revision:"8c8e3ff10be7920c80cd658b63eaf617"},{url:"/images/01_05.png",revision:"cd41cbc0d757596adc6a57cd4fd7e308"},{url:"/images/01_05.webp",revision:"63a72e8c0c3b696a18e9572404566f15"},{url:"/images/01_06.png",revision:"b2c22b94563d2353d221054691d3a7a3"},{url:"/images/01_06.webp",revision:"29e1051a7ea887ccb09fbef4fd4a9cc0"},{url:"/images/01_07.png",revision:"cdb7ecd82484a2741aeccf680b61a242"},{url:"/images/01_07.webp",revision:"96c1a6edaeef3a8aebb782f8b403ff4d"},{url:"/images/02_01.png",revision:"0f086d4f15da30593d915c10cd763148"},{url:"/images/02_01.webp",revision:"4779d01642dd269c001597c52efaa123"},{url:"/images/02_02.png",revision:"157b529c8457e499d215c8b57a07464b"},{url:"/images/02_02.webp",revision:"ee162c86e54a5a0b81d130c8b18bbbba"},{url:"/images/02_03.png",revision:"e876f8152fdb8eac0c83635e974e93b5"},{url:"/images/02_03.webp",revision:"af9f9fadd0b7f85d9482b522800d9f50"},{url:"/images/02_04.png",revision:"133968ed05302c429a0b0a9c9d98be0a"},{url:"/images/02_04.webp",revision:"25d35fdb40842b8e4b4e37e1d7e9be23"},{url:"/images/02_05.png",revision:"98f68fed9179ba3f1107ff115f54b6e8"},{url:"/images/02_05.webp",revision:"7d283db7848bdf14d66f6d085183f580"},{url:"/images/02_06.png",revision:"f9ac9d8294201b87c5eb8dd1e961a8f6"},{url:"/images/02_06.webp",revision:"3645d471bcec0655fbebf580169abc85"},{url:"/images/02_07.png",revision:"de01ac46db0e15560708cf27348b4964"},{url:"/images/02_07.webp",revision:"7df020f556c1c54a91bfa5b8efe059c1"},{url:"/images/03_01.png",revision:"3133b49fabcd11bdb032f3da794566e2"},{url:"/images/03_01.webp",revision:"84e732861d549365c9876320fd56369c"},{url:"/images/04_01.jpeg",revision:"8a4ae0e392e0fe85d7fb52a8206871c3"},{url:"/images/04_01.webp",revision:"4b66f2f283fb1ab4a6478ceccde32bf3"},{url:"/images/04_02.jpeg",revision:"d5e8aa4a9689b95a093f063b210e5d01"},{url:"/images/04_02.webp",revision:"745cc8bceec2096aef848c0995b9a680"},{url:"/images/04_03.jpeg",revision:"005a4bbd91cca7f8092637a16f69aba6"},{url:"/images/04_03.webp",revision:"65a8c43d8b5e9123ee80887eaeba94e4"},{url:"/images/04_04.jpeg",revision:"85497ad7ea8b1feecce611c6fe3e3a65"},{url:"/images/04_04.webp",revision:"f3a52dfe0c16a1c87b8123fede996f45"},{url:"/images/04_05.jpeg",revision:"b5f07042ed4627cb015ed1038c2c755d"},{url:"/images/04_05.webp",revision:"81b624776abcfbfec8f947ecfa67bb40"},{url:"/images/04_06.jpeg",revision:"9d87b3185bc81c0a79b9f04ca8e8291c"},{url:"/images/04_06.webp",revision:"16305f79442e8f9c541539307ee7b7c9"},{url:"/images/PERM_MetaModel.svg",revision:"e54e3d59628bb4505443b3af9625028e"},{url:"/images/dp.jpeg",revision:"46bfbee179e4f9d483c723f5012c4284"},{url:"/images/dp.webp",revision:"5cc7c47cfc2295e5d6566ba107eebf5f"},{url:"/images/dp_old.jpg",revision:"bce262b72f084492db581a86e99d1d06"},{url:"/images/dp_old.webp",revision:"fe1d27e5d71aa168088aad6c7704024c"},{url:"/manifest.json",revision:"ae46d2bee037fde516ca8f5113c24c18"},{url:"/robots.txt",revision:"1f66cdbfddbd0a5f450259af21853866"},{url:"/rss.atom",revision:"3f83ad771dc5dec9558b1453688b564d"},{url:"/rss.json",revision:"4821cbb5e39a8b4abdb4daf769a39316"},{url:"/rss.xml",revision:"2ee76be73816de511f242557a65b7ee8"},{url:"/sitemap.xml",revision:"b0b5327db6b4c6c4a1e12e941288041b"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:r})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
