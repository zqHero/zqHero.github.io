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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d5ec88d4915cdc159a6617bef06823a"
  },
  {
    "url": "about/AboutMe.html",
    "revision": "f38ddd66e687f28822ead5ce99f58a74"
  },
  {
    "url": "about/blog_note/BuildNote1.html",
    "revision": "fc0c30f8b917595665dacc546c0f59a3"
  },
  {
    "url": "about/blog_note/BuildNote2.html",
    "revision": "f6ee8ab7bd708e1bc8debe072040ae84"
  },
  {
    "url": "about/DownLoad.html",
    "revision": "7be2edaf67536d07f99cd70b9df5e5e9"
  },
  {
    "url": "articles/android/A001.html",
    "revision": "8b157760d579b0776106c892ad05741b"
  },
  {
    "url": "articles/android/A002.html",
    "revision": "fd3cd3898ede112a549cab2414833d89"
  },
  {
    "url": "articles/android/A003.html",
    "revision": "5de1c5cfe3282a832c680d73f36179a3"
  },
  {
    "url": "articles/android/A004.html",
    "revision": "8280a31dcfd1c5667fc1dee3acdc7d0f"
  },
  {
    "url": "articles/android/A005.html",
    "revision": "7d634d7daa321629714bbd70c1e3b13e"
  },
  {
    "url": "articles/index.html",
    "revision": "3d636ef78c196738bb1653444b1afe5a"
  },
  {
    "url": "articles/java/J001.html",
    "revision": "71a27f566067211fa3e38238bef15fbf"
  },
  {
    "url": "articles/linux/L001.html",
    "revision": "94ab1861bfafd559ba7ef2b0cf5b443a"
  },
  {
    "url": "articles/linux/L002.html",
    "revision": "9e03995d5a2c5d50aca7d5660bfc6859"
  },
  {
    "url": "articles/linux/L003.html",
    "revision": "96442673df49be382c4030601b18620e"
  },
  {
    "url": "articles/web/W001.html",
    "revision": "7980a5387c48eeae834e84c253789835"
  },
  {
    "url": "articles/web/W002.html",
    "revision": "4f1685007e74e187287ece415929905d"
  },
  {
    "url": "articles/web/W003.html",
    "revision": "9808fa2d41acfd627124d9bbf7bd61ef"
  },
  {
    "url": "articles/web/W004.html",
    "revision": "ca3adf5a03df5f7c0300a024df52793b"
  },
  {
    "url": "assets/css/0.styles.6b83cee8.css",
    "revision": "805630037887fe1646f4391ada9155a2"
  },
  {
    "url": "assets/img/001.158dc736.png",
    "revision": "158dc736e763ce80cfb17ebcf14758c0"
  },
  {
    "url": "assets/img/001.25eab119.png",
    "revision": "25eab119c4645f4634e6ac031701a293"
  },
  {
    "url": "assets/img/001.3132d1eb.png",
    "revision": "3132d1eb9f08f0f1ff530d9a4e982b56"
  },
  {
    "url": "assets/img/001.36a758b2.png",
    "revision": "36a758b289296db67a9d8ef5514c02af"
  },
  {
    "url": "assets/img/001.3c9540a4.png",
    "revision": "3c9540a479e0b7f3d7b24a3e6947ff32"
  },
  {
    "url": "assets/img/001.714573a4.png",
    "revision": "714573a40064c5051ee2ae1c8f40c999"
  },
  {
    "url": "assets/img/001.86f3d5a5.gif",
    "revision": "86f3d5a5f84c437a9d9448e53acef863"
  },
  {
    "url": "assets/img/001.8c86deaf.jpg",
    "revision": "8c86deaf7f8647ba922205c5ff19f4b8"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/001.c051d2cf.png",
    "revision": "c051d2cf7e4f3ca3bcd9a23999324f5c"
  },
  {
    "url": "assets/img/001.d625fdfb.jpg",
    "revision": "d625fdfbe3393b3c5a32c4d502d5e6c9"
  },
  {
    "url": "assets/img/001.df75b966.png",
    "revision": "df75b96696f13850a12445e55b33b027"
  },
  {
    "url": "assets/img/001.f3a3b3cf.png",
    "revision": "f3a3b3cf5061fc5efa3f6784563a8a0e"
  },
  {
    "url": "assets/img/001.f7123354.jpg",
    "revision": "f7123354e339758697621abef5da70ae"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/002.8fad6641.png",
    "revision": "8fad664107f9168be45b73cc482758ef"
  },
  {
    "url": "assets/img/002.995c8a4d.png",
    "revision": "995c8a4daa8246c4ed0c1ea7fcd96975"
  },
  {
    "url": "assets/img/002.c97e060f.png",
    "revision": "c97e060f673c40ef0c6d046f757cb9b2"
  },
  {
    "url": "assets/img/002.dd0f2420.png",
    "revision": "dd0f24208c26f2b75cecf84c4fe0abef"
  },
  {
    "url": "assets/img/002.f7308dcc.png",
    "revision": "f7308dcc635619575b493034705fff4f"
  },
  {
    "url": "assets/img/003.0134bf06.png",
    "revision": "0134bf06242d94f5f39f47073f6c2518"
  },
  {
    "url": "assets/img/003.0204c633.png",
    "revision": "0204c6336d4223d2a03f50ee4433da36"
  },
  {
    "url": "assets/img/003.3810540d.png",
    "revision": "3810540d601b0a25d70ba07f7766280b"
  },
  {
    "url": "assets/img/003.855dd4fc.png",
    "revision": "855dd4fc5120786e68d9d718b53bb5d4"
  },
  {
    "url": "assets/img/003.b37a5699.png",
    "revision": "b37a56997c0142a0963b1635b0345b8c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.32477f3e.png",
    "revision": "32477f3e0e8cc4238e657c8bc852cd0e"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/004.73ddd62c.png",
    "revision": "73ddd62c7d034876181bda63eb5821fd"
  },
  {
    "url": "assets/img/004.88c079fb.png",
    "revision": "88c079fbddf80713d53af3e79e9bfbb1"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.d6c05d0e.js",
    "revision": "2afba54911493712e7bea468f253bf34"
  },
  {
    "url": "assets/js/11.3e0dc188.js",
    "revision": "db27b5118a730963b8597547af1e3166"
  },
  {
    "url": "assets/js/12.2bdce60a.js",
    "revision": "3ca130544d80caa65d06aaecca0fcd81"
  },
  {
    "url": "assets/js/13.ba277a70.js",
    "revision": "d479a12e07da7af22c781ba851795fe2"
  },
  {
    "url": "assets/js/14.54af1e90.js",
    "revision": "d5dde79cbc4a8622246bab4389a15666"
  },
  {
    "url": "assets/js/15.47fd7982.js",
    "revision": "06013e91a244603e998edd0d55c0a020"
  },
  {
    "url": "assets/js/16.c6aa6ea8.js",
    "revision": "9c89a5e27d9892977550a59b431be485"
  },
  {
    "url": "assets/js/17.d1b86438.js",
    "revision": "22569be9c3ea22986269d2cf4154e16a"
  },
  {
    "url": "assets/js/18.6eeae5ff.js",
    "revision": "2cc5f9919669ca90b3f7148e18abc105"
  },
  {
    "url": "assets/js/19.398db2fb.js",
    "revision": "b185ebd10b892d90763d54785962455b"
  },
  {
    "url": "assets/js/2.ef2476c6.js",
    "revision": "ad2e60920e75ef86a48eb98c95b60ea1"
  },
  {
    "url": "assets/js/20.9e308835.js",
    "revision": "09336cf90257e09247e2ea121434659d"
  },
  {
    "url": "assets/js/21.cda31fb6.js",
    "revision": "2792340d9e77cb062c1ab5a60259d933"
  },
  {
    "url": "assets/js/22.422ffe3e.js",
    "revision": "5b709eb18f7829a418fa19ea2d8d4d74"
  },
  {
    "url": "assets/js/23.ab0b2945.js",
    "revision": "87dcb827da066573cfc259dc0e883fcb"
  },
  {
    "url": "assets/js/24.d98d2207.js",
    "revision": "158b838a89d711148f3a7f037c85fb85"
  },
  {
    "url": "assets/js/25.df84870e.js",
    "revision": "8b7e64039b2953f4174b6ead9c94ced0"
  },
  {
    "url": "assets/js/26.aecdc2bf.js",
    "revision": "30b457862671336ddb7b80a9584d22a9"
  },
  {
    "url": "assets/js/27.5ab7a20f.js",
    "revision": "b6616ce4c536c2ab6214e02b78d73d8a"
  },
  {
    "url": "assets/js/28.b6c12d4a.js",
    "revision": "9e7def1aa56b655b4ad570e75fdae76c"
  },
  {
    "url": "assets/js/29.9e4a244d.js",
    "revision": "ee1a13b68beef57b1837c25ab77c4fe0"
  },
  {
    "url": "assets/js/3.161a97f9.js",
    "revision": "86ddc8650e77a18bef806b30642b49de"
  },
  {
    "url": "assets/js/30.9e7d3581.js",
    "revision": "2296a4c2784f13250624d1879c360f08"
  },
  {
    "url": "assets/js/31.5bc51c31.js",
    "revision": "33069b974a4e99352dcb71f7457fbe01"
  },
  {
    "url": "assets/js/32.38474393.js",
    "revision": "dfcb1fe013db016951e577da81f6c6e8"
  },
  {
    "url": "assets/js/33.f826edfb.js",
    "revision": "2b597d893a274c7f11be17763f15771b"
  },
  {
    "url": "assets/js/34.fd5a362f.js",
    "revision": "d91aea0709366d5f7eda26a18a83786d"
  },
  {
    "url": "assets/js/35.4d8a81a3.js",
    "revision": "dce98b756335d70fc90d0713bd816882"
  },
  {
    "url": "assets/js/36.fa0fd636.js",
    "revision": "4c63109c891d728f128f5d48727e03ab"
  },
  {
    "url": "assets/js/37.37f1d88d.js",
    "revision": "9021acf6dca20284bc697fd17cedd9d3"
  },
  {
    "url": "assets/js/38.9c91ca5b.js",
    "revision": "75c882f93bed81589eccfed9b689696d"
  },
  {
    "url": "assets/js/39.6f87e092.js",
    "revision": "b59c3a90d547652e86c59d4f16c9b732"
  },
  {
    "url": "assets/js/4.ec05fe43.js",
    "revision": "ed33f271069e7a222dfd9d9d991f3a4b"
  },
  {
    "url": "assets/js/40.de110f98.js",
    "revision": "ec5a06589da9216f5a3cafa9a5043712"
  },
  {
    "url": "assets/js/41.5db20c65.js",
    "revision": "83223c318a6b4cca5010db571ad91f1d"
  },
  {
    "url": "assets/js/5.52083e85.js",
    "revision": "7dc04d10a50d5b92da3c57f3660886f7"
  },
  {
    "url": "assets/js/6.0a7e9dd8.js",
    "revision": "04bb5713fc48f8df32108e335672eda5"
  },
  {
    "url": "assets/js/7.50a35a7c.js",
    "revision": "e1636226308facccc1b1359aa891d2ad"
  },
  {
    "url": "assets/js/8.a339b318.js",
    "revision": "fd7cf6b47e34d5dbffbbe8f0d783292b"
  },
  {
    "url": "assets/js/9.da927fdd.js",
    "revision": "aae4ee2f0d53f4d5cbcb35645310ad75"
  },
  {
    "url": "assets/js/app.d951d4bd.js",
    "revision": "ae142cfcc574c27bdef260462b6f790a"
  },
  {
    "url": "img/link.png",
    "revision": "3dff7cf741d570bc0cc35aa9585a73a1"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.jpg",
    "revision": "84f79f86833a21d936358900907e09d4"
  },
  {
    "url": "img/wechat.jpg",
    "revision": "b9d245ee81f92302af491e14eb93a1f2"
  },
  {
    "url": "index.html",
    "revision": "038f0e8661070f143bced34db00b5a2d"
  },
  {
    "url": "thought/life_mind/L001.html",
    "revision": "0f675223c4520d43118a06aedf429d58"
  },
  {
    "url": "thought/life_mind/L002.html",
    "revision": "e988851619651f285e0dfa1431cda6ec"
  },
  {
    "url": "thought/read_note/R001.html",
    "revision": "759096afac25bb22cce0a1c3db824b3e"
  },
  {
    "url": "thought/read_note/R002.html",
    "revision": "ffb75b4510b1962b4ec09c414552acb9"
  },
  {
    "url": "thought/read_note/R003.html",
    "revision": "ba338353928a4d972919dceccadaf5af"
  }
].concat(self.__precacheManifest || []);
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
