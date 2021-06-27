/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "05b8b6343311da7dc7286c973968fa68"
  },
  {
    "url": "assets/css/0.styles.e5007594.css",
    "revision": "fe06dbad76ae52427069ce1fb687b72c"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.88bf304a.js",
    "revision": "f79079346e200f887428c09dda90c6fe"
  },
  {
    "url": "assets/js/11.30b54cb4.js",
    "revision": "8c4dbda081e0a938717ff86b91870c41"
  },
  {
    "url": "assets/js/12.1079dfaa.js",
    "revision": "84f658a8b3c9eb426fa1a119ec01e80d"
  },
  {
    "url": "assets/js/13.c2133e4c.js",
    "revision": "894bff51c07b0c3ad2d3f8dc0333e32a"
  },
  {
    "url": "assets/js/14.05c3b296.js",
    "revision": "f491e6d8a25cb8ba2e9e44134d20f887"
  },
  {
    "url": "assets/js/15.6cfa3be4.js",
    "revision": "abb225cd723c77f054a4ed91bc8c8e66"
  },
  {
    "url": "assets/js/16.ca0f4c0f.js",
    "revision": "966c9b61eb7a2795b2084b56aa9fa4b0"
  },
  {
    "url": "assets/js/17.80deff9b.js",
    "revision": "38160930c2cff250f074e153565152b1"
  },
  {
    "url": "assets/js/18.53321ce0.js",
    "revision": "ffe1e271c7976773d992ade7ef8b5a65"
  },
  {
    "url": "assets/js/19.3daed838.js",
    "revision": "ea943b589ce79b1aeaa435b3fac157ff"
  },
  {
    "url": "assets/js/2.1b37ce37.js",
    "revision": "386909733073ee4efadbc69ba23bcd42"
  },
  {
    "url": "assets/js/20.34123967.js",
    "revision": "50192bc5bc1c7c751789d08d541b0149"
  },
  {
    "url": "assets/js/21.e24b385c.js",
    "revision": "f937f19e5d72dbbc07617c1519f0ea24"
  },
  {
    "url": "assets/js/22.3e731693.js",
    "revision": "0b6e04886a69d4f0698b00943ef0272b"
  },
  {
    "url": "assets/js/23.5b3ff083.js",
    "revision": "80588b8bd218443ed8ae5431cc404865"
  },
  {
    "url": "assets/js/24.32816d47.js",
    "revision": "8e9f12ad64fb848fb09eff370d5fbbee"
  },
  {
    "url": "assets/js/25.56f8e1ec.js",
    "revision": "8deb03497fbc0906034ef5898f599efd"
  },
  {
    "url": "assets/js/26.a09b1d80.js",
    "revision": "ea43f793e75775b0007055590871fe6b"
  },
  {
    "url": "assets/js/27.22b5cf2e.js",
    "revision": "66392222318fa7c79fa494f50e88a720"
  },
  {
    "url": "assets/js/28.6bd9a00d.js",
    "revision": "37c13697c35095b616f68eb46ed0a1ea"
  },
  {
    "url": "assets/js/29.f5750487.js",
    "revision": "4bfc482ea58e65e7b0b60aa550b91524"
  },
  {
    "url": "assets/js/3.9eb19156.js",
    "revision": "c36abbfe274080a8dd9ced045f02de9a"
  },
  {
    "url": "assets/js/30.fc15bf7c.js",
    "revision": "7016ff6807ad1cce51cc929f0406048d"
  },
  {
    "url": "assets/js/31.22a4eda3.js",
    "revision": "6db0886c18fb2e3c48c05fc998fcc31f"
  },
  {
    "url": "assets/js/32.bd2edf29.js",
    "revision": "53915a85d0b37af8948b7937092cffa5"
  },
  {
    "url": "assets/js/33.c361c12a.js",
    "revision": "9ee324f44a23a22bce055d30407c5bad"
  },
  {
    "url": "assets/js/34.59b49b25.js",
    "revision": "6c3f0770a6a04eabfeb7801c8d67c9cd"
  },
  {
    "url": "assets/js/35.5331b34c.js",
    "revision": "9f161a31a524a5184ebd0619c31a0d1f"
  },
  {
    "url": "assets/js/36.da444dc2.js",
    "revision": "20bbf44928ae7a83f9b8d50ba25f3b39"
  },
  {
    "url": "assets/js/37.49f00be8.js",
    "revision": "2d107ba9b1dc072f973d4980952cfb44"
  },
  {
    "url": "assets/js/38.7a0a24e0.js",
    "revision": "8cf22d7bae919a78db2d365f1d40f9e2"
  },
  {
    "url": "assets/js/39.8d232676.js",
    "revision": "9aa630e1ff7c506cd8a5fa6930517e45"
  },
  {
    "url": "assets/js/4.ea6ae4c0.js",
    "revision": "e4623755468fc26f34c143f930f3cc7f"
  },
  {
    "url": "assets/js/40.7d925103.js",
    "revision": "c50ee147c15e3eeddf8dbf95f7f9cc68"
  },
  {
    "url": "assets/js/41.d8d89063.js",
    "revision": "a782d6db131640210cc0b5d99fe9dd68"
  },
  {
    "url": "assets/js/42.3122b6ac.js",
    "revision": "984d945cca27d82c2505c8052fec87af"
  },
  {
    "url": "assets/js/43.484a5a30.js",
    "revision": "d0d730d05ca33cc47468918e3e3d27ef"
  },
  {
    "url": "assets/js/44.635fa0c3.js",
    "revision": "9fd2330b490c61074742efe78cae39eb"
  },
  {
    "url": "assets/js/45.ef30756d.js",
    "revision": "49660a1f2a35778ce2be657011e5f096"
  },
  {
    "url": "assets/js/5.666cc2e3.js",
    "revision": "71fc04b77ff27861aeb5436fa59ddea6"
  },
  {
    "url": "assets/js/6.9e417b4d.js",
    "revision": "78618a7eaeda07d6e6f0e81d59b08fd4"
  },
  {
    "url": "assets/js/7.32e5833a.js",
    "revision": "3d0f98617749fa9d418f171c77c8ea47"
  },
  {
    "url": "assets/js/8.ac022a0c.js",
    "revision": "d00ebcc07062d7aaa701e05113079e97"
  },
  {
    "url": "assets/js/9.882e625c.js",
    "revision": "2b73b22baf14e1e662965da3aaf76e8b"
  },
  {
    "url": "assets/js/app.8ec1669b.js",
    "revision": "91ca30909abbd51896d008c9dce53615"
  },
  {
    "url": "config/index.html",
    "revision": "540c99d3f4dfab896b0fbcaafb5a41f9"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "27a90d9f2d593351d1ad2d3e315dfc92"
  },
  {
    "url": "guide/assets.html",
    "revision": "849aa00d46946399b6348beaf2989f52"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "a8dd5380285ab66cf172cb58d44a5cf1"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "c846737287ced6e334a7e747955ef6c0"
  },
  {
    "url": "guide/deploy.html",
    "revision": "dd3c0b72a80122b32f77adba069cc150"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b4be8aff97fa9a091df65d2e6335b47d"
  },
  {
    "url": "guide/i18n.html",
    "revision": "39ea781b211c17c78093e4db5bace0a9"
  },
  {
    "url": "guide/index.html",
    "revision": "f0c1646af578c56b363a247e03d4564d"
  },
  {
    "url": "guide/markdown.html",
    "revision": "420f38e2e50a351e3e96df0772d94dd7"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "04e47e3ae936885dd893a814a83a6baf"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "img/1546010431.png",
    "revision": "fd1a953299af1752ecc2b68d969ec6e5"
  },
  {
    "url": "img/1546011014.png",
    "revision": "7ec3e82654155489fcb547f105f4bc13"
  },
  {
    "url": "img/1546011061.png",
    "revision": "fc314065da4542c0773197c7a10a20aa"
  },
  {
    "url": "img/1546012885.png",
    "revision": "e271ba041d8034ed7a7cef4d0741133c"
  },
  {
    "url": "img/1575920682-5aa8738170650.png",
    "revision": "30b160e339e6cc64f98ddcecdf9d8e8c"
  },
  {
    "url": "img/1867034-18c70f637b5c01c2.gif",
    "revision": "cdda3f11c6efbc01577f5c29a9066772"
  },
  {
    "url": "img/1867034-d1537e355abdd298.gif",
    "revision": "91b76e8e4dab9b0cad9a017d7dd431e2"
  },
  {
    "url": "img/20200526154028.png",
    "revision": "cf37ba444ecafc96aa2e41cb584bee20"
  },
  {
    "url": "img/20200607170604.jpg",
    "revision": "7e5c65c4e00d6c0fcc33f343ead447bb"
  },
  {
    "url": "img/261939139273322.png",
    "revision": "ca6f2f563ccbe1718725f42f7f1e651b"
  },
  {
    "url": "img/4820992-82913323252fde95.png",
    "revision": "dfa7f279ae9859e1036208e99083efd0"
  },
  {
    "url": "img/bubbleSort.gif",
    "revision": "33a947c71ad62b254cab62e5364d2813"
  },
  {
    "url": "img/css3.png",
    "revision": "d84ec90d893d780247c997f512a93302"
  },
  {
    "url": "img/flex_20190423115618.jpg",
    "revision": "61e91543150db09748e302620d49304c"
  },
  {
    "url": "img/mvvm.png",
    "revision": "9ad547ad07a20db703b49652ee334840"
  },
  {
    "url": "img/scope-a-defined.png",
    "revision": "1c1192b5346a2498fbfe7cfe9b899487"
  },
  {
    "url": "img/scope-a-doing.png",
    "revision": "6801cedcb9d6e92d19395f7c5827d731"
  },
  {
    "url": "img/scope-b-defined.png",
    "revision": "9f0f4051983fd4d52ef231e432521b2a"
  },
  {
    "url": "img/scope-b-doing.png",
    "revision": "1eca6bb9916fb90aa032b60488ac1d1c"
  },
  {
    "url": "img/selectionSort.gif",
    "revision": "1c7e20f306ddc02eb4e3a50fa7817ff4"
  },
  {
    "url": "img/stack.png",
    "revision": "aa701355cf7ef69b4f3a25904935a7c1"
  },
  {
    "url": "index.html",
    "revision": "4ac745b55aa11a8c1cf1c8d58ccf8d91"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "web/BOM.html",
    "revision": "a2390947e3b12c3b127facd29950dadf"
  },
  {
    "url": "web/console.html",
    "revision": "71425980a891bfefe5c89da7b5ab80a3"
  },
  {
    "url": "web/css.html",
    "revision": "637a386071f79daf72b9945c25e0dfa0"
  },
  {
    "url": "web/data-structure.html",
    "revision": "55a58a849ca048bb6e02a546df2c6c99"
  },
  {
    "url": "web/git.html",
    "revision": "b224abbe20a59ae5ed234c53b0ce9f57"
  },
  {
    "url": "web/HTTP.html",
    "revision": "7c870c588d3c7939d9fd18f1cd3fccdc"
  },
  {
    "url": "web/index.html",
    "revision": "0c62cdb61a7b10772ad1427233fdbde0"
  },
  {
    "url": "web/JavaScript.html",
    "revision": "3374aa6f61887796cfc82b6198b0fb13"
  },
  {
    "url": "web/mobile.html",
    "revision": "0139e6f59fb1ce1666f9c8c7cc03ba0b"
  },
  {
    "url": "web/mode.html",
    "revision": "90a6c20583d16d044ee34c981d069507"
  },
  {
    "url": "web/model.html",
    "revision": "effe64c8987f65ccf2c1d0678b57f3ac"
  },
  {
    "url": "web/MongoDB.html",
    "revision": "060056b3a65f0ccf375b336cf12a27c7"
  },
  {
    "url": "web/test.html",
    "revision": "02490e08010873f155775e6e29b81c0b"
  },
  {
    "url": "web/webpack.html",
    "revision": "0c9a62fd4a86984aea4cf9bdbaff5ac1"
  },
  {
    "url": "zh/config/index.html",
    "revision": "4dc15f9337b688947675078ba490fbaf"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "b1545496047e44f208053c1a2f76304d"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "f07c10360eeaa502fbd884de4b33b1a8"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "b0c26d9e0ed00435c7bf01aad95daa16"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "d731bb7a921a564b2e561fb080d6cdee"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "d73b455331427a50f6cf3ace84717237"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "ac349433c0923f87b7f332b49ceeac27"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "b86ba0d1b9df26e7a72d9df10de59523"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "a4eb39a56a272a0802567305225bbf80"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "44ea47a34d7ca20b08e7c728dba5ed17"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "979621e67c95ddfe13fddef8f9449e5c"
  },
  {
    "url": "zh/index.html",
    "revision": "b8074f4d92ce9d1313ba83f1511ed560"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
