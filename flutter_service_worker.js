'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "3e63f1129aba073b02354c009ac66547",
"version.json": "20eb0885869b6bfc34a51c01847f0510",
"index.html": "a9d94081dc3fb2c9a98f8fb79f56ff1c",
"/": "a9d94081dc3fb2c9a98f8fb79f56ff1c",
"main.dart.js": "9366f62eed1414b509f1c2ea96d2afea",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "ae00aba6f9af19c40679a16e9223990a",
"icons/Icon-192.png": "62323ce2fa25416d9a2c881c070cfb42",
"icons/Icon-maskable-192.png": "62323ce2fa25416d9a2c881c070cfb42",
"icons/Icon-maskable-512.png": "e7b43938fe031d48f5416cdb6ab9442c",
"icons/Icon-512.png": "e7b43938fe031d48f5416cdb6ab9442c",
"manifest.json": "de548470c334eca079a365b0a360443e",
"assets/AssetManifest.json": "0808410973b8581e6529f738ca3f35f2",
"assets/NOTICES": "dfa3ebf07da72f87e2ae95fe0f7a56ea",
"assets/FontManifest.json": "a08ff22c15ae01e4e43e47604786de4c",
"assets/AssetManifest.bin.json": "6d44e7766c812e97defda59898cdf320",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "3f896bafdcbcb0b356c5d7e3bbaea10f",
"assets/fonts/MaterialIcons-Regular.otf": "4a1ffb33735855f987b1c96b32be82e7",
"assets/assets/svg/symbols/triangle.svg": "4257413b08266c832f4afd04e82036bc",
"assets/assets/svg/symbols/circle.svg": "ee03c8872b2458d054a1c32de1773411",
"assets/assets/svg/symbols/square.svg": "f14454832ef92637953da61504403164",
"assets/assets/svg/corellianSpike/cards/sylop.svg": "69763942b2a7b86036537f6b7579ceb4",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_6_symbol.svg": "02b3e88a3da8e9657de350a84de851da",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_2_symbol.svg": "bb37f5914d28eaf20aded7f686a9ea97",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_7_symbol.svg": "6e5058d16d4bbefad8f980266fda9159",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_8_symbol.svg": "eeb9302c7bab3dc8d6a81a6c8640a801",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_3_symbol.svg": "3816582b7ae049ac3e1bbde4aab5a689",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_5_symbol.svg": "5dd805d297ffae49880bb4852d34af4b",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_10_symbol.svg": "850b6c0afd329d6cd150c0578290684d",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_4.svg": "13db3654f28e149a2e6c66760151df80",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_2.svg": "f25ee9744ee84077346a9cfc6b02baf8",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_2_symbol.svg": "5c19a731dc9f13a57a2887e487750836",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_9_symbol.svg": "62540336c8b5bb0dfbd4f259c34e7a28",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_3.svg": "020219acc5d3f6c0425acac358937f28",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_5.svg": "476d5c2ad2229720e3505e9c89a601cd",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_1.svg": "b4a95817c528793801bfa162aed3c127",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_4_symbol.svg": "fc865a5cb5c3697fd06b77d9fee24880",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_6.svg": "9de54e9b907d46040d25fca87153eb0d",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_2.svg": "36934f3da993ad7f4744050ac0337152",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_4.svg": "cc22f674a1ac934c2083f4325c194db8",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_5_symbol.svg": "edbb244808649b530e80c8fff506cc26",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_5.svg": "9f703baac2570acb46fb6be9717cabed",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_3.svg": "26eec128fc116c5253a6fa2ffbf12d4f",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_1_symbol.svg": "0cf1950811c169cf43863bf6412819eb",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_1.svg": "127d296056dd97f29b823931656821e4",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_10_symbol.svg": "2fc6b4f29e44f41b5b4cbafe9b41645b",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_6.svg": "ba67105020e2dafdb73040d6c86a472a",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_8_symbol.svg": "eeb9302c7bab3dc8d6a81a6c8640a801",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_7_symbol.svg": "6e5058d16d4bbefad8f980266fda9159",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_2_symbol.svg": "e46ffb5bd7eb481ac0df9db0bdd2c0a6",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_6_symbol.svg": "baf9904dac688beccc1399b2e007a130",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_9_symbol.svg": "0576f656b861b25615e9c4bd94cbcbc4",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_4_symbol.svg": "60b0696fb780a0ea408f9620e6bf4096",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_1_symbol.svg": "76e0609f3899595942716e5593cfe3ab",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_3_symbol.svg": "8e68ba0696ad5040a8910da71934c7f1",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_7_symbol.svg": "6e5058d16d4bbefad8f980266fda9159",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_6.svg": "be5b5eb4ea86f5eabb6b1e0724d60d37",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_10_symbol.svg": "096e8c117a1c6982ebb2af83d25bf784",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_4_symbol.svg": "144d3a18610667f2565e30d9deef8666",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_5.svg": "67c5f5581945dfe8e8dd6c558e4f9d64",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_9_symbol.svg": "d927f38ba3ecd86dfd99ca76003890c0",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_6_symbol.svg": "bd28aa078c2f7dba8c3e619205f2443a",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_4.svg": "e913636f4b77a262f7181f03813a70e8",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_8_symbol.svg": "eeb9302c7bab3dc8d6a81a6c8640a801",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_1.svg": "d4a8e086d41228b8c6d417f250cca0a0",
"assets/assets/svg/corellianSpike/cards/original/symbols/triangle_3_symbol.svg": "b1bb8055d86ca9efad73d5fd6eab648b",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_3.svg": "f63109c5eae7d3e4bbc0c212b35b8d7c",
"assets/assets/svg/corellianSpike/cards/original/symbols/circle_1_symbol.svg": "c87ac3b462664ae3218d4502fa1f7dde",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_2.svg": "bf8e3d78c6481ce3165d8fbe28a7e259",
"assets/assets/svg/corellianSpike/cards/original/symbols/square_5_symbol.svg": "9dbc200c01d8f621dab71c3b68f7c056",
"assets/assets/svg/corellianSpike/cards/original/base/negative_9_10.svg": "1856a6f9b828cb265aea391eeeea4282",
"assets/assets/svg/corellianSpike/cards/original/base/positive_1_to_6.svg": "9e23d1ba70941d9e04791882bb6713e8",
"assets/assets/svg/corellianSpike/cards/original/base/negative_1_to_6.svg": "9b6998b25d8be197bed112c37126a5b1",
"assets/assets/svg/corellianSpike/cards/original/base/positive_9_10.svg": "ba0876fd19bde905d820138ae0f5a4b7",
"assets/assets/svg/corellianSpike/cards/original/base/positive_7_8.svg": "4e7d06b07f042abcac1053672f5384ae",
"assets/assets/svg/corellianSpike/cards/original/base/negative_7_8.svg": "f0edb7b4a1bdd577520ee14ea3bd47d3",
"assets/assets/svg/corellianSpike/cards/back.svg": "df195b6e1eb925b01cd51eef3a04db2c",
"assets/assets/svg/corellianSpike/corellian_spike.svg": "7255f99540818b12edd972da17c95d72",
"assets/assets/images/marks.png": "14271e0b85f32f0299df91ee8fceae3a",
"assets/assets/images/bg.png": "24cdb45bf26f62f664603683c57918f1",
"assets/assets/fonts/MarvinVisionsBig-Bold.ttf": "29f3af07ed392aee57603591f0e10af6",
"assets/assets/fonts/MarvinVisionsBig-DemiBold.ttf": "92e952f0bb755bb9b55ddf6ced1f5589",
"assets/assets/fonts/BricolageGrotesque-Regular.ttf": "534d18349db2aa39394ed31b83406381",
"assets/assets/fonts/MarvinVisionsBig-Regular.ttf": "f1c6341b0de12aecee0a68e9069a6339",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
