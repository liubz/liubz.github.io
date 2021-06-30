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
    "revision": "d8f73ef9a483d59fe508ea7d6adec44c"
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
    "url": "assets/js/21.56ad7bc5.js",
    "revision": "870aee3b5a12c8f25a3d8e4c18fa8cb8"
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
    "url": "assets/js/27.1cb51942.js",
    "revision": "eddefb78abd0a078572784dcd0381412"
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
    "url": "assets/js/34.ea4c2455.js",
    "revision": "b083ef217bc7aeff2df2c9e721184a58"
  },
  {
    "url": "assets/js/35.f0232813.js",
    "revision": "37559ec97d6daa603dfbb24728ea66e2"
  },
  {
    "url": "assets/js/36.9c78d28f.js",
    "revision": "da8a17d67930991e74c12b5c4f3a537c"
  },
  {
    "url": "assets/js/37.cdceca71.js",
    "revision": "312d3be2e878568ac3da31f3c7d53afa"
  },
  {
    "url": "assets/js/38.4e074764.js",
    "revision": "9e9ba9ffd1849e875e346a80559c91ee"
  },
  {
    "url": "assets/js/39.3146d9ae.js",
    "revision": "dfa15f9a82e6e0f862c2c102c4e780c4"
  },
  {
    "url": "assets/js/4.ea6ae4c0.js",
    "revision": "e4623755468fc26f34c143f930f3cc7f"
  },
  {
    "url": "assets/js/40.00d86512.js",
    "revision": "dc3382a909d8a536387136936c958737"
  },
  {
    "url": "assets/js/41.e2e738b3.js",
    "revision": "ad39f98d454a648fb4d880145be8bf0f"
  },
  {
    "url": "assets/js/42.f6f22f27.js",
    "revision": "c9d2fd14ebf187b70e0d92229b12bf43"
  },
  {
    "url": "assets/js/43.047da75a.js",
    "revision": "11727338b8dae028c41422ef7f77b947"
  },
  {
    "url": "assets/js/44.1f56550a.js",
    "revision": "ac0a2f6d5b802046ef41a884b899dd0c"
  },
  {
    "url": "assets/js/45.f87b4417.js",
    "revision": "d86c14d2d1369617909f78279d63597e"
  },
  {
    "url": "assets/js/46.cbde3f49.js",
    "revision": "5ff4e69b6802f5752b20e01201127f3f"
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
    "url": "assets/js/app.8c0b6caf.js",
    "revision": "280a7b145b226879178e19dfe7d56cdc"
  },
  {
    "url": "config/index.html",
    "revision": "0a459f1d86a5f98090bf3929f0677813"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "a2b9484108bbd86b84fef7b9480f9f1a"
  },
  {
    "url": "guide/assets.html",
    "revision": "b24faafe7f3b1dfa4aa3620cbe30d3c5"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6c11e6aa82cd7fb16831980f9a577772"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "a882736b02f7592562059cfddcf6569d"
  },
  {
    "url": "guide/deploy.html",
    "revision": "46fa0610d536814803d23dca778cf468"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "48586b3f974a6405974cb668032907c5"
  },
  {
    "url": "guide/i18n.html",
    "revision": "d00db72edd0abdb9aa1c0c98562c2974"
  },
  {
    "url": "guide/index.html",
    "revision": "3958061819d67b73f004fbe20f4fdf42"
  },
  {
    "url": "guide/markdown.html",
    "revision": "3b3a728170da75a21b941fb2ebbbe11d"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "8f80dadaa7e4a46c607e22b0bd40693d"
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
    "url": "img/1867034-cd65e35d7dce5045.gif",
    "revision": "c411339b79f92499dcb7b5f304c826f4"
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
    "revision": "f59b5e2f9ea68f01a892c1559c807a25"
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
    "revision": "fd9ac360c52b30df54e10d01d7eb5f5e"
  },
  {
    "url": "web/console.html",
    "revision": "6ac8d532d8239782d721efb3af2a841b"
  },
  {
    "url": "web/css.html",
    "revision": "d4b897c7f2c3cae4785c19ad78a14f0c"
  },
  {
    "url": "web/data-structure.html",
    "revision": "9cd86810025ed27fd05ea84024e71ee0"
  },
  {
    "url": "web/git.html",
    "revision": "c3bf0687fb4f6cdfb03b73e4834acadf"
  },
  {
    "url": "web/HTTP.html",
    "revision": "625dba4ed7e443e6d534b5fc2af1d109"
  },
  {
    "url": "web/index.html",
    "revision": "7871089f7f6e4923d6550be6f94e587b"
  },
  {
    "url": "web/JavaScript.html",
    "revision": "2b1eacb903aa221f5fd9a6e716f34c49"
  },
  {
    "url": "web/mobile.html",
    "revision": "0e4ff3777d2a0b267689940cc95dfc7e"
  },
  {
    "url": "web/mode.html",
    "revision": "15b567bf0d93e56a39253048cdb797f5"
  },
  {
    "url": "web/model.html",
    "revision": "987650e8c701d88a2623813e43368323"
  },
  {
    "url": "web/MongoDB.html",
    "revision": "64db3b8746fadaf3aa6e128df4f2120b"
  },
  {
    "url": "web/test.html",
    "revision": "66a445fb56d6e67d40ee689ad43fb180"
  },
  {
    "url": "web/webpack.html",
    "revision": "a55b3c93ee548bc312645c93b8bd91bc"
  },
  {
    "url": "web/面试.html",
    "revision": "fe738a239c4af0fa4f9da0bd73e8a989"
  },
  {
    "url": "zh/config/index.html",
    "revision": "5f2a9fdd411cfb26f207db11ebeb48d7"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "a04597f0a2a2de491c2393286a74187b"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "a65d6d089240a002f39da3dddc3a5f93"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "33a67a34cf9e1914e0f1e7f1b556dca1"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "1a65ef7976271c79b7ab9b064fa5b7e0"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "c51966d68ec2c4e1ea39c88b6d8fc143"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "79d2d38a22846371c325a9c45eabb582"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "b616cbeaed18804015bb64bb47e97710"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "1f730413d7e0220022225176f298da95"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "c7f3bb876a3a3fd0c3df9d4ac494e506"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "0fbbb0175d2ae45226b403426ffcf9cc"
  },
  {
    "url": "zh/index.html",
    "revision": "809f966fb3409855ed459bcc5b08751e"
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
