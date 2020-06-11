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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "0718cf45488967df73301dc9b582dc92"
  },
  {
    "url": "assets/css/1.styles.6c183efd.css",
    "revision": "5050eeadc11224fc835c322dc6892581"
  },
  {
    "url": "assets/css/2.styles.79979d12.css",
    "revision": "882b90210428a5e19925166993d2352d"
  },
  {
    "url": "assets/css/3.styles.8612d0ef.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/4.styles.ec8e4f45.css",
    "revision": "09594ef5e62fec13f0dc32db260b1082"
  },
  {
    "url": "assets/css/5.styles.abfe1407.css",
    "revision": "df81391a009a2db4c336081a47abcfed"
  },
  {
    "url": "assets/css/6.styles.57dd2d52.css",
    "revision": "70410e197e5e83dd0344d35a300ed93f"
  },
  {
    "url": "assets/css/7.styles.3717cac2.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "assets/css/styles.038d2f86.css",
    "revision": "f97bbd3d88aef1492ea8f206e208ce08"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/1.6c183efd.js",
    "revision": "b2ead9a12e2cb6570c0f4bb5f29f193e"
  },
  {
    "url": "assets/js/10.57dabb47.js",
    "revision": "a3ad63d282227e668800552dbb1995a0"
  },
  {
    "url": "assets/js/11.9c1052a3.js",
    "revision": "c418401fbdcf3f3547d281884a8c928b"
  },
  {
    "url": "assets/js/12.2d25d7fd.js",
    "revision": "a473be906a7bc2fe18cc798a65261f88"
  },
  {
    "url": "assets/js/13.ef62f506.js",
    "revision": "74c0dc0c3f52bf6345ac0b8ec584117c"
  },
  {
    "url": "assets/js/14.22905dfa.js",
    "revision": "064015d3f3525a17e920205a5b8118df"
  },
  {
    "url": "assets/js/15.f3dfaef5.js",
    "revision": "2a45585c043111797f1fa7e13c7159ec"
  },
  {
    "url": "assets/js/16.daa5d419.js",
    "revision": "c063298eccc9abf94362db54c6462b08"
  },
  {
    "url": "assets/js/17.128728e1.js",
    "revision": "c22c9e493263ca9a5efdc40ff43ec300"
  },
  {
    "url": "assets/js/18.1197edef.js",
    "revision": "852f61800485612eefdd9081df0a0d20"
  },
  {
    "url": "assets/js/19.e9f7cfc6.js",
    "revision": "b23c65a03ea2611023f602a044130448"
  },
  {
    "url": "assets/js/2.79979d12.js",
    "revision": "19239c46219a4adff489a55e6ec13b91"
  },
  {
    "url": "assets/js/20.b352fe9f.js",
    "revision": "2e91ca5fc0e09c467cab9f8228d348d5"
  },
  {
    "url": "assets/js/21.8b7e9f4c.js",
    "revision": "363986531eac312462bf6f4ace1bfb1c"
  },
  {
    "url": "assets/js/22.9fb93356.js",
    "revision": "73f1f06a83eb1c70361d5ac950f3eda7"
  },
  {
    "url": "assets/js/23.67693754.js",
    "revision": "f6454d309ba50fe11b3d808e73da8faf"
  },
  {
    "url": "assets/js/24.46327407.js",
    "revision": "6bc2d8ec5e589ea48e170cbaa52b5408"
  },
  {
    "url": "assets/js/25.906ac1ba.js",
    "revision": "f92df3dafd5dade4e2f01616de7088eb"
  },
  {
    "url": "assets/js/26.750c960f.js",
    "revision": "99739349cb5873a1916884dc072b5b74"
  },
  {
    "url": "assets/js/27.cc3e248e.js",
    "revision": "add4c9d168e6c96474091b5cb9c34f8b"
  },
  {
    "url": "assets/js/28.e4b3eef7.js",
    "revision": "5fe09da98ffcf7b1f10c81b210a7d49b"
  },
  {
    "url": "assets/js/29.d41db221.js",
    "revision": "d7156c6680bbf7ab4d9f44f4ff924eca"
  },
  {
    "url": "assets/js/3.8612d0ef.js",
    "revision": "c457d3aa6f695d3f3c2484dbf8005f25"
  },
  {
    "url": "assets/js/30.4c95500a.js",
    "revision": "d0145ae3e4897c91401cab8fe0e82d19"
  },
  {
    "url": "assets/js/31.5ebd75d8.js",
    "revision": "d80ae3f1951247e22e61b9b4645e466b"
  },
  {
    "url": "assets/js/32.f6930b62.js",
    "revision": "d2fe9d8ea2f55a28189baaae03249ad2"
  },
  {
    "url": "assets/js/33.36f0ccd8.js",
    "revision": "818cd5bfc792f5c7a6ccb0c90d403f54"
  },
  {
    "url": "assets/js/34.5b22a47a.js",
    "revision": "e19572ed8b24efd583c481f782305df3"
  },
  {
    "url": "assets/js/35.a08bc817.js",
    "revision": "b1872ed3c71277f4fbaaa8396145dc31"
  },
  {
    "url": "assets/js/36.6ccba026.js",
    "revision": "e514c64f300697614ab62ae045c14502"
  },
  {
    "url": "assets/js/37.015187c9.js",
    "revision": "5a831efc7dee950c6d1395ed0f562e89"
  },
  {
    "url": "assets/js/38.b7c25087.js",
    "revision": "2229b725ee123836e101b8edd3ca5c24"
  },
  {
    "url": "assets/js/39.06dd8f6f.js",
    "revision": "9e5350d47324996c1d7ae0bd4f51bd49"
  },
  {
    "url": "assets/js/4.ec8e4f45.js",
    "revision": "3cac8062b479c3583323d1420d8e6468"
  },
  {
    "url": "assets/js/40.2d6dd1b6.js",
    "revision": "b743e863bd27fb8687f0fe734a289846"
  },
  {
    "url": "assets/js/41.5bef94b5.js",
    "revision": "0d55d7c7f5ba8c2bbbe0d4ad3f087d75"
  },
  {
    "url": "assets/js/42.5e7885bb.js",
    "revision": "cb0b7e4ea99a9409f1d33072c790c6f2"
  },
  {
    "url": "assets/js/43.c7a41b51.js",
    "revision": "187c8fdb43c275456553bcbd8535f12d"
  },
  {
    "url": "assets/js/5.abfe1407.js",
    "revision": "82363a0c1c51b4fc9dc363aec4846dcd"
  },
  {
    "url": "assets/js/6.57dd2d52.js",
    "revision": "9f32ee75668c9131f69b341101667c5d"
  },
  {
    "url": "assets/js/7.3717cac2.js",
    "revision": "143c26bdc00f3df17c4dafff975667cc"
  },
  {
    "url": "assets/js/8.83e700db.js",
    "revision": "91ae2ed6ad560b0dad65751280e66bb1"
  },
  {
    "url": "assets/js/9.0f6c74da.js",
    "revision": "5fb8f7ee6f04ba28cc5c0f656f0244f3"
  },
  {
    "url": "assets/js/app.038d2f86.js",
    "revision": "fdf3f0efe32101f1b2041b4bc7d338fe"
  },
  {
    "url": "config/index.html",
    "revision": "8edc125a77d2dc2d1d20ca96b1e40c41"
  },
  {
    "url": "default-theme-config/index.html",
    "revision": "b2da903e1912d28f397f64af7e4689a8"
  },
  {
    "url": "guide/assets.html",
    "revision": "bd0d18b238348c6209165a243de796be"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "6a5c076d64ab48822645884741b781fc"
  },
  {
    "url": "guide/custom-themes.html",
    "revision": "d2ebdd1a3b80f28dc6e4bf0235e65ec9"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e15a2b5857d8ca61bd394c4728e5fadc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ebe2cf31a45c5f8c1e294c615ba1036b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "4a1e2a8d28e2200127bd9f16f1ebe549"
  },
  {
    "url": "guide/index.html",
    "revision": "c33c2d7ebf7baadc9ec4c489a8a6fc3e"
  },
  {
    "url": "guide/markdown.html",
    "revision": "54cac2b6677995128351f1d41ca92210"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "4e0283a5720c39bece91dc1e26100fde"
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
    "revision": "39108bf5d39e73bc6a68ca89ebeb5fc4"
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
    "revision": "71a23ab783612bb67594eb76828d971f"
  },
  {
    "url": "web/console.html",
    "revision": "8450457e0036f8f41238c157c76c7712"
  },
  {
    "url": "web/css.html",
    "revision": "9f4071573d0d578afad5c59b08b7c438"
  },
  {
    "url": "web/data-structure.html",
    "revision": "223566653c64a82ab1e61379576ec239"
  },
  {
    "url": "web/git.html",
    "revision": "5ad1ae693db73c250eafdec302edb4d5"
  },
  {
    "url": "web/HTTP.html",
    "revision": "86ba29e0a78b9ed42ffa7982b81ac941"
  },
  {
    "url": "web/index.html",
    "revision": "73eabb15543b185ce506ce47f0993992"
  },
  {
    "url": "web/JavaScript.html",
    "revision": "75864d633de9f0a3e8ec745811024b9d"
  },
  {
    "url": "web/mobile.html",
    "revision": "80c7cac0cc0fcbdfa09cc348dd7f0aa7"
  },
  {
    "url": "web/mode.html",
    "revision": "77e6023322281f800aae57c0a68d236f"
  },
  {
    "url": "web/model.html",
    "revision": "f3d962e002d3b2b96adca0e2cb62669a"
  },
  {
    "url": "web/MongoDB.html",
    "revision": "1bed29dff67c5b195d78e157c921ec64"
  },
  {
    "url": "web/webpack.html",
    "revision": "ec5f4735061eb0f7a2e0e058032be82d"
  },
  {
    "url": "zh/config/index.html",
    "revision": "80f0ab9b279eb68b14366816a1cdddd4"
  },
  {
    "url": "zh/default-theme-config/index.html",
    "revision": "58c03bcd5beb718404cf8b079d1266c4"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "dd83c55888697a5c1265312c850ec182"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "ac50d8828be2e11d5b934641c89fa1e1"
  },
  {
    "url": "zh/guide/custom-themes.html",
    "revision": "1e72c30c82d8c88993196b9596009606"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "539058fcc1440e05727553d8142a1917"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "f4c8946f35c98c4c68fac98a2b516729"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "82ca2c4fad0c2ee39b4c796e4c18bae8"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "4ea486132cb7663d54b767e6a1d3d5f6"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "665a63b0bfe7566091f39a7c568f5271"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "8a07e644b686483cd3c4f30ece835bce"
  },
  {
    "url": "zh/index.html",
    "revision": "52633e4dcceb53e7e3fad342b96ec63e"
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
