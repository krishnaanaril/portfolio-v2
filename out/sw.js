if(!self.define){let e,a={};const n=(n,r)=>(n=new URL(n+".js",r).href,a[n]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=a,document.head.appendChild(e)}else e=n,importScripts(n),a()})).then((()=>{let e=a[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,b)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(a[s])return;let i={};const c=e=>n(e,s),d={module:{uri:s},exports:i,require:c};a[s]=Promise.all(r.map((e=>d[e]||c(e)))).then((e=>(b(...e),i)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-eR2TcWllA6a95Egjyc88M.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/675-f8189043268e716f.js",revision:"f8189043268e716f"},{url:"/_next/static/chunks/framework-64ad27b21261a9ce.js",revision:"64ad27b21261a9ce"},{url:"/_next/static/chunks/main-3f0ed92cf86a4bae.js",revision:"3f0ed92cf86a4bae"},{url:"/_next/static/chunks/pages/_app-d9fbfe75f5989c54.js",revision:"d9fbfe75f5989c54"},{url:"/_next/static/chunks/pages/_error-7a92967bea80186d.js",revision:"7a92967bea80186d"},{url:"/_next/static/chunks/pages/_offline-f73cb9000b55d2fa.js",revision:"f73cb9000b55d2fa"},{url:"/_next/static/chunks/pages/about-a81902b1c45c218d.js",revision:"a81902b1c45c218d"},{url:"/_next/static/chunks/pages/blog/%5Bid%5D-624c172a91f05e36.js",revision:"624c172a91f05e36"},{url:"/_next/static/chunks/pages/blogs-a1a2e34d8b17253d.js",revision:"a1a2e34d8b17253d"},{url:"/_next/static/chunks/pages/blogs/category/%5Bcategory%5D-7467f2c7dda52005.js",revision:"7467f2c7dda52005"},{url:"/_next/static/chunks/pages/blogs/tag/%5Btag%5D-19f88d16bc617ba7.js",revision:"19f88d16bc617ba7"},{url:"/_next/static/chunks/pages/index-8b7c62b4591f1214.js",revision:"8b7c62b4591f1214"},{url:"/_next/static/chunks/pages/projects-d044e9b201b414d4.js",revision:"d044e9b201b414d4"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-8fa1640cc84ba8fe.js",revision:"8fa1640cc84ba8fe"},{url:"/_next/static/css/092fa62e5c4bc1e0.css",revision:"092fa62e5c4bc1e0"},{url:"/_next/static/eR2TcWllA6a95Egjyc88M/_buildManifest.js",revision:"2f29c5c528a1808f1c99675a496a3ab7"},{url:"/_next/static/eR2TcWllA6a95Egjyc88M/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"eR2TcWllA6a95Egjyc88M"},{url:"/banners/01.png",revision:"315e9ca8201a7d6d88b9fd8fd727deb8"},{url:"/banners/01.webp",revision:"97dddab8ee22655f9b1e231377dbe133"},{url:"/banners/02.png",revision:"94440fd0de4833d9a93e5e4b7e8bda89"},{url:"/banners/02.webp",revision:"ef100bb3acae0df8c1b143155e7341ae"},{url:"/banners/03.png",revision:"82945defea3bdf3622978e0f154fc7cf"},{url:"/banners/03.webp",revision:"5253bbe9e61a28371fc961c4e7fd9b13"},{url:"/banners/04.png",revision:"ab19552abf4af0d3e121db06da3b5462"},{url:"/banners/04.webp",revision:"763e39f2c12e649d134b435d6023d460"},{url:"/banners/05.png",revision:"da82205e0fdd9893ed259fa7bbf05196"},{url:"/banners/05.webp",revision:"c4ce78610d5066933837e398358f0ffd"},{url:"/banners/06.png",revision:"0c1e8c87a34353f6c51f98dfbedccfa7"},{url:"/banners/06.webp",revision:"39e14c680f5b44d51d47ec8ebe8b45a7"},{url:"/banners/07.png",revision:"6337c8b5abc239cde8d9d9fdc1ee71ef"},{url:"/banners/07.webp",revision:"c603b7909c21aec0a789fcff4ff6f92c"},{url:"/banners/08.png",revision:"3da2a8c4a3208b0127a7dc7543dae9f6"},{url:"/banners/08.webp",revision:"b07c3f75cf954f2ba497f24803f56f4c"},{url:"/banners/09.png",revision:"b9b02e8b9cd5075bca6169dadc4b3702"},{url:"/banners/09.webp",revision:"d56781259774ab98c9d8daca971b06ff"},{url:"/banners/10.png",revision:"d16c7433e6f7815fc7d7e287a6859f0d"},{url:"/banners/10.webp",revision:"de915120ce93156bdb2ce1852cd1a014"},{url:"/banners/11.png",revision:"2b0731d78f7672f911e1a0115e514cb7"},{url:"/banners/11.webp",revision:"f11e24d8dd784596ff7a5acd71939d95"},{url:"/banners/12.png",revision:"b67336f02a3799f87c1c0677c3c41704"},{url:"/banners/12.webp",revision:"39076aa72b51c4c04265f98aff17582a"},{url:"/banners/13.png",revision:"7bd00574f1012b313021df0c047f267e"},{url:"/banners/13.webp",revision:"b0dea8dbdeb9bd6a8f411a647bf385da"},{url:"/banners/14.png",revision:"ae708acb8e809f5b4f7fbf3e8cbbf978"},{url:"/banners/14.webp",revision:"ea15488c974707ee0f79e3ca8fc61c62"},{url:"/banners/15.png",revision:"d5c615c70d524da4e99a400ca24cfd52"},{url:"/banners/15.webp",revision:"439cb23d987cd380e03555a1dd7244fd"},{url:"/banners/16.png",revision:"63e7f3cf7e140140a071df43a44d45d3"},{url:"/banners/16.webp",revision:"455821e5ff84c6fa379be4741bfcc5b5"},{url:"/banners/17.png",revision:"b796a86e2dcbd36824fc10022d9ad946"},{url:"/banners/17.webp",revision:"f3655a7e406361863d19716f05970f6c"},{url:"/banners/18.png",revision:"686157f6a008cf51f47b254ad7e69900"},{url:"/banners/18.webp",revision:"9155086fe08de7e0dd2ecf3073de00b4"},{url:"/banners/19.png",revision:"af11a0d054efcfb04b76860af1bc8810"},{url:"/banners/19.webp",revision:"779d2aac5453f69f67b66971c202867d"},{url:"/banners/20.png",revision:"cf7ceb56c4c58cb2a05326302c90f233"},{url:"/banners/20.webp",revision:"5605d2ff2ec41902558049f6b70dea7a"},{url:"/banners/21.png",revision:"dfe0c33377d7ceb005ff41a8856783fe"},{url:"/banners/21.webp",revision:"77016ace318541a36edea76aa01a9a0b"},{url:"/banners/22.png",revision:"8bf1e244740c915fe3016d7da4839d6f"},{url:"/banners/22.webp",revision:"e92cdf32adf14dac3623e4852b8ca3d4"},{url:"/banners/23.png",revision:"ea0d77edbd33a46b3cbc96f48c6600bf"},{url:"/banners/23.webp",revision:"514d9cb925031e89b8632fb417c6ad8f"},{url:"/banners/24.png",revision:"648a11a01764928f2d6fe587efff8ac5"},{url:"/banners/24.webp",revision:"a87f53806da50d898abb2e675e00de7a"},{url:"/banners/25.png",revision:"9c5296308ce7437001206233e56a2887"},{url:"/banners/25.webp",revision:"9177da6304879d7a366fb03a2d07a6d9"},{url:"/banners/26.png",revision:"fb1ef95965f4e6b4f01f4ca1743b6d9d"},{url:"/banners/26.webp",revision:"b05787a04f289350ad60dfd723c9f757"},{url:"/banners/27.png",revision:"30f4f14a5259a64d4cfc4b650da8fdc3"},{url:"/banners/27.webp",revision:"5d531a5a694a528c09fb6b6efbf220b2"},{url:"/banners/28.png",revision:"45ddebfc524a86bcd9876134b943a8ea"},{url:"/banners/28.webp",revision:"f55636e756f57da95cd401bdab81c176"},{url:"/banners/29.png",revision:"68f4f62ebaffe87f8f914687e4eaec12"},{url:"/banners/29.webp",revision:"6dff086b207522332742fa8831d60325"},{url:"/banners/30.png",revision:"06aa6c48717c02facb464f4f8f259add"},{url:"/banners/30.webp",revision:"f3da3b825af49b58cf8f3e3c99c719a3"},{url:"/banners/31.png",revision:"5e9c00860211d4703d6c4aa5e4d51c90"},{url:"/banners/31.webp",revision:"ca1539334396cf42599b85d55d7222cd"},{url:"/banners/32.png",revision:"d33c2a15f40be8e29065d975f42e2733"},{url:"/banners/32.webp",revision:"25dae0a42c7f968d40c00a8de199addd"},{url:"/banners/33.png",revision:"e3c091e4165b4073c7917f8637c8abf5"},{url:"/banners/33.webp",revision:"31c7826c226d2314940c3d818d1836f5"},{url:"/banners/34.png",revision:"68cdadaa2df7433da0b5d73c50ac926c"},{url:"/banners/34.webp",revision:"05c89b6f586b7aee2eed0289a0cb42bb"},{url:"/banners/35.png",revision:"17814bbc8308ab17a5027abd6f446256"},{url:"/banners/35.webp",revision:"cc70547fd581c04c0f73f416ddb61665"},{url:"/banners/36.png",revision:"a224a7d0b41dca7ab9fb9f9a6f5e2fab"},{url:"/banners/36.webp",revision:"719fe1b5337d57bf01617670dc6b082e"},{url:"/banners/37.png",revision:"75e48f220030068389c55f090ca32b8c"},{url:"/banners/37.webp",revision:"f79c825560309b1185544afbf62d8763"},{url:"/banners/38.png",revision:"a9aa65a85650862dbb7b9a32b3c447f4"},{url:"/banners/38.webp",revision:"05009f44243148194ddd338274e7eafe"},{url:"/banners/39.png",revision:"fc1d8a9b77d162b49ff7a934fc3bf9f8"},{url:"/banners/39.webp",revision:"037175230f96826ecd11ffc3235469e9"},{url:"/banners/40.png",revision:"2b7e2f4826d5f256d8cfe4edd161a382"},{url:"/banners/40.webp",revision:"231c2dc766dbbbaf1f39275d744ce012"},{url:"/banners/41.png",revision:"946ee84216d567b91e3d1bbd2b31167c"},{url:"/banners/41.webp",revision:"a8870b7000ce8eaec228d6b6cabd9e7e"},{url:"/banners/42.png",revision:"1b3c45dc9ab9547f483756305a61b9ec"},{url:"/banners/42.webp",revision:"8afa6fe3c4bc5cad59bf930b9fbf7616"},{url:"/banners/43.png",revision:"f174f39fde5abadfa7c2580b9da0becf"},{url:"/banners/43.webp",revision:"0948375128bd8a08539985e3b7fca6a8"},{url:"/banners/44.png",revision:"e3c2a0ba30c279b5d4c318083377bb76"},{url:"/banners/44.webp",revision:"0954fdfbc01e0145ada40d5d3bf0be94"},{url:"/banners/45.png",revision:"2be68890e702af2135c304caa7f707ca"},{url:"/banners/45.webp",revision:"ea3630cefd4fde8726ef792a479e0e35"},{url:"/banners/46.png",revision:"7ab26508a7bda781bca83028b48e69ac"},{url:"/banners/46.webp",revision:"7b393b1d8da7a545fe69dbab46e6e4a8"},{url:"/banners/47.png",revision:"a7dbf39b3698fdd6407f1bab10fcaf91"},{url:"/banners/47.webp",revision:"5555e725d9dd91ab1af843e391267b37"},{url:"/banners/48.png",revision:"272e2d29345a0c5b6eb80bb539a74e22"},{url:"/banners/48.webp",revision:"8648a2c6bbdb9dd2bebb6ea142b6d668"},{url:"/banners/49.png",revision:"78862f150e58e673b83319d0cae004c5"},{url:"/banners/49.webp",revision:"ac3277468f9e9dc6d7258282a9cb7036"},{url:"/banners/50.png",revision:"31d6ebd3bc0b508e60bdaabf1ebda025"},{url:"/banners/50.webp",revision:"6366b8b13e27d8943fab721263a70286"},{url:"/banners/51.png",revision:"43f5366313aa24273376a8539c5ffb97"},{url:"/banners/51.webp",revision:"822cc9af8969b92a6a24a1a84e897a28"},{url:"/banners/52.png",revision:"8446ac4b03f63f9a8d75cd582f32c428"},{url:"/banners/52.webp",revision:"708cb29324af4efa87dd200c67ccdaa3"},{url:"/banners/53.png",revision:"962cbe6a5328f56d7fd8b6db767f7663"},{url:"/banners/53.webp",revision:"90efaca88a410e05f665c10fcdb96086"},{url:"/banners/54.png",revision:"c5685be5da431bc375abb0ed0178737b"},{url:"/banners/54.webp",revision:"607965a4ebc3bd98498216dddf896430"},{url:"/banners/55.png",revision:"6bc91a58892d7102c7f66fed86ce34a9"},{url:"/banners/55.webp",revision:"dd2aace8bdc0128671e9cba9374aef89"},{url:"/banners/56.png",revision:"1acac31ba7c9ab122cfe37054baf0777"},{url:"/banners/56.webp",revision:"0236acf1ce03d3d1ce67451e4438c539"},{url:"/banners/57.png",revision:"e22ea153962a5a6fa546a6d9aea93352"},{url:"/banners/57.webp",revision:"208d69e5e1bcd099e74c0b7583ad2144"},{url:"/banners/58.png",revision:"1debde597998fb9433a216b742adfe91"},{url:"/banners/58.webp",revision:"d68058e745504a74ad3e516fe8022ebc"},{url:"/banners/59.png",revision:"8a3f9784e35128a6c394b36814d324b7"},{url:"/banners/59.webp",revision:"d461d92562d41d9578992f52b6ce957a"},{url:"/banners/60.png",revision:"4aa6202de5848779fdeca3b9a929de6a"},{url:"/banners/60.webp",revision:"5c8ab6f70da8e692fdc40153ba50d698"},{url:"/banners/61.png",revision:"a2c7687f581d26279cfb1ef1674626ac"},{url:"/banners/61.webp",revision:"7dee5650e11dc6132bbacc629d0eff47"},{url:"/banners/62.png",revision:"0ac47d5e3ff8408dfdea570d14d62b20"},{url:"/banners/62.webp",revision:"6a71714bcbe6a87b39a0e50cbc98452b"},{url:"/banners/63.png",revision:"fd670f86758b265fc543999f78512087"},{url:"/banners/63.webp",revision:"dfbbe4de188a481fdffb80ca2edeb007"},{url:"/banners/64.png",revision:"1296731e6b0f10cd4633d53035e2c289"},{url:"/banners/64.webp",revision:"e7445994b0f7e3d83c73a0b763d0b032"},{url:"/banners/65.png",revision:"1333b2c1be5a5b505b6d6285b5a6fe68"},{url:"/banners/65.webp",revision:"3818be24eb624bc967be04461bcdadbc"},{url:"/banners/66.png",revision:"0c92cc3cf3269e91204bb08216e995e1"},{url:"/banners/66.webp",revision:"207c330515cc2ab77db7c8d80e1dc1c9"},{url:"/banners/67.png",revision:"812282055f0f8ff93fc2af217ca48417"},{url:"/banners/67.webp",revision:"53cf6413d43b729c6a4e1ff440b719a0"},{url:"/banners/68.png",revision:"f2f265b3b2f44ec8de60746828f03976"},{url:"/banners/68.webp",revision:"14c96b4966df30269422bdf13bfcf616"},{url:"/banners/69.png",revision:"4abb9a235c1768b07b37caee19f914b2"},{url:"/banners/69.webp",revision:"fb05d0fdb8bee4b44f8d904eed1ce41f"},{url:"/banners/70.png",revision:"2ddcfb09779e3a0391f8e01460f66f38"},{url:"/banners/70.webp",revision:"6fcf164ecd33a2095cb6a042c393b21a"},{url:"/banners/71.png",revision:"8fcb58d937a4e3a0c03ae7ec5efa25e2"},{url:"/banners/71.webp",revision:"37989caa6412cfe91faeecb8606ba64c"},{url:"/banners/72.png",revision:"ab2d4408aee58d963466253698c464b1"},{url:"/banners/72.webp",revision:"3c71ca1c014d6757d6500b3a27a61384"},{url:"/banners/73.png",revision:"aa4b17f09815f0cfb0def96e04a69574"},{url:"/banners/73.webp",revision:"0907e63c67732e6e6983d8065dea6c11"},{url:"/banners/74.png",revision:"cf895f20f2b46be5d21595388879ff83"},{url:"/banners/74.webp",revision:"c3dfc9288a87b80d408b7e29e215f1d3"},{url:"/banners/75.png",revision:"5d592ddb111407ae39d5d28bb216d972"},{url:"/banners/75.webp",revision:"7dc72e9ca2af144150600023e8096a86"},{url:"/banners/76.png",revision:"7c4e52ce028d50a14b8262d3212902cf"},{url:"/banners/76.webp",revision:"9d6109bcc9990a49111730fd5f01eaee"},{url:"/favicon.ico",revision:"54b91bd63b511820a8dc18557e50bcac"},{url:"/icons/icon-128x128.png",revision:"4783790127cc147b8044569243a442c1"},{url:"/icons/icon-144x144.png",revision:"38fe91b19b7a4994de5608911b6fa8f4"},{url:"/icons/icon-152x152.png",revision:"3997990440986c142b720a2101139e2b"},{url:"/icons/icon-192x192.png",revision:"be74088e89fd8fd8b162c53d458d1b72"},{url:"/icons/icon-384x384.png",revision:"a9104d375a14c64f468b271ecb8d837b"},{url:"/icons/icon-512x512.png",revision:"c099e263676832043caeef8818051b61"},{url:"/icons/icon-72x72.png",revision:"aeedbe6ea6883a6bfba14ac24b9ef95d"},{url:"/icons/icon-96x96.png",revision:"9edd5c32ed057222afdc8e7d294a6b77"},{url:"/images/01_01.png",revision:"2c1dc4936fc0c7936e4ecfafda3e72e7"},{url:"/images/01_01.webp",revision:"d45f3ecc4603c4be251d5a92a58ec2e9"},{url:"/images/01_02.png",revision:"fb68ee638242c27841c47f3ff721ace8"},{url:"/images/01_02.webp",revision:"2fdc1769c391a9dd679d97dc1827d811"},{url:"/images/01_03.png",revision:"4c309e8332616f73b6f05ee4b9d2f2eb"},{url:"/images/01_03.webp",revision:"01e555e08c939eb86e6201850d04c60c"},{url:"/images/01_04.png",revision:"439ede8b5d57ad70fad363fb5e5110dc"},{url:"/images/01_04.webp",revision:"a9f4e9545db88ed9c14692c27ed3895a"},{url:"/images/01_05.png",revision:"cd41cbc0d757596adc6a57cd4fd7e308"},{url:"/images/01_05.webp",revision:"e6c2b1213de30913ad1c345e1efd4d83"},{url:"/images/01_06.png",revision:"b2c22b94563d2353d221054691d3a7a3"},{url:"/images/01_06.webp",revision:"c0838b6c627fe31b9a9045416fd38230"},{url:"/images/01_07.png",revision:"cdb7ecd82484a2741aeccf680b61a242"},{url:"/images/01_07.webp",revision:"b3f042d59026bed3e791183121b67a98"},{url:"/images/02_01.png",revision:"0f086d4f15da30593d915c10cd763148"},{url:"/images/02_01.webp",revision:"565aa34341e75cfc07f83f8993b48e7f"},{url:"/images/02_02.png",revision:"157b529c8457e499d215c8b57a07464b"},{url:"/images/02_02.webp",revision:"2c1c5b8d749fa3d0f610594b96ba75cf"},{url:"/images/02_03.png",revision:"e876f8152fdb8eac0c83635e974e93b5"},{url:"/images/02_03.webp",revision:"5d41f346676911a07eef156e973e0d89"},{url:"/images/02_04.png",revision:"133968ed05302c429a0b0a9c9d98be0a"},{url:"/images/02_04.webp",revision:"f9c7d8bb8606b764242f102141ec5c45"},{url:"/images/02_05.png",revision:"98f68fed9179ba3f1107ff115f54b6e8"},{url:"/images/02_05.webp",revision:"428eb4da89ac991a5f96f152e23baec3"},{url:"/images/02_06.png",revision:"f9ac9d8294201b87c5eb8dd1e961a8f6"},{url:"/images/02_06.webp",revision:"f92bb2b2c8920ce2b50b4df4c12a36f0"},{url:"/images/02_07.png",revision:"de01ac46db0e15560708cf27348b4964"},{url:"/images/02_07.webp",revision:"9a9916edf158e607ff4d240dbc7e58e0"},{url:"/images/03_01.png",revision:"3133b49fabcd11bdb032f3da794566e2"},{url:"/images/03_01.webp",revision:"330c382d0774560f9ef386651265ee67"},{url:"/images/04_01.jpeg",revision:"8a4ae0e392e0fe85d7fb52a8206871c3"},{url:"/images/04_01.webp",revision:"ccb9adffababdf2b9d3d324951ecd7aa"},{url:"/images/04_02.jpeg",revision:"d5e8aa4a9689b95a093f063b210e5d01"},{url:"/images/04_02.webp",revision:"dfa77e9777616c2cbd986ad06be5cba4"},{url:"/images/04_03.jpeg",revision:"005a4bbd91cca7f8092637a16f69aba6"},{url:"/images/04_03.webp",revision:"df1469d66cbc294ff9b9a916ae7e693a"},{url:"/images/04_04.jpeg",revision:"85497ad7ea8b1feecce611c6fe3e3a65"},{url:"/images/04_04.webp",revision:"20a7a390ce0b12f45b3a980c399ec14f"},{url:"/images/04_05.jpeg",revision:"b5f07042ed4627cb015ed1038c2c755d"},{url:"/images/04_05.webp",revision:"52d58c51996da9306a4ed41134362549"},{url:"/images/04_06.jpeg",revision:"9d87b3185bc81c0a79b9f04ca8e8291c"},{url:"/images/04_06.webp",revision:"186fa979ac3dc30ac0eb98b8c6542de1"},{url:"/images/Benchmark.PNG",revision:"0755e65eea6b865732911d9b3cf23ac6"},{url:"/images/Benchmark.webp",revision:"9d5cc09793f8e61cc3c38b3fc74269e6"},{url:"/images/PERM_MetaModel.svg",revision:"e54e3d59628bb4505443b3af9625028e"},{url:"/images/ang19_01.PNG",revision:"ed4258e0b880470d2a5247fa507421c2"},{url:"/images/ang19_01.webp",revision:"730d02764802c64f89c5fdd2e78ea12f"},{url:"/images/ang19_02.PNG",revision:"b500ebcb376d84f13c7c957de59582b0"},{url:"/images/ang19_02.webp",revision:"f1fbf65cbb5056dd7e46266a27843475"},{url:"/images/ang19_03.PNG",revision:"4a0cf881b9b61f6089b7c33e6576350b"},{url:"/images/ang19_03.webp",revision:"248911df4fc6f3aa0f2950dd7a05ad0a"},{url:"/images/ang_build_01.PNG",revision:"78337c7905cc7275517a81dd47625434"},{url:"/images/ang_build_01.webp",revision:"3dccd6ad1a9ad24f7854a9ec4920d374"},{url:"/images/ang_build_02.PNG",revision:"690f06ff79199de0e74efe3905eefc00"},{url:"/images/ang_build_02.webp",revision:"4eb18bb1fbfbd7dd1bbe8bb653080d1b"},{url:"/images/ang_reqinput.png",revision:"3310bef9d6fce09f2ea1a56c5a9890a3"},{url:"/images/ang_reqinput.webp",revision:"553bd099859cc323d15ea6ace059e19c"},{url:"/images/dp.jpeg",revision:"46bfbee179e4f9d483c723f5012c4284"},{url:"/images/dp.webp",revision:"87b299d5e7381e001ba39951a6947d72"},{url:"/images/dp_old.jpg",revision:"bce262b72f084492db581a86e99d1d06"},{url:"/images/dp_old.webp",revision:"a83f5b5c6baf36d50fe2deccb6c47403"},{url:"/images/signal-ex.gif",revision:"fa3d9d02368d7bb0913cf94da2a0c221"},{url:"/manifest.json",revision:"ae46d2bee037fde516ca8f5113c24c18"},{url:"/robots.txt",revision:"f4e70a7d2786be60de6251501eb2a9a0"},{url:"/rss.atom",revision:"738650434c5f578abf6debb6a6215708"},{url:"/rss.json",revision:"cc98f331445f722953bddd451329c813"},{url:"/rss.xml",revision:"404a283915ed392fcd80aaa8d93c90d7"},{url:"/sitemap.xml",revision:"0a30986d9fd2ad0185494fc61d69e45e"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:n,state:r})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
