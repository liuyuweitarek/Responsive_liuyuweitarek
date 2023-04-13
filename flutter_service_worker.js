'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"index.html": "d45d9e36788bfc207b2a6ff535a40d95",
"/": "d45d9e36788bfc207b2a6ff535a40d95",
"main.dart.js": "8496ebcbdd35276a7cd084b64dcc67f4",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "009c9e65172e010890f7f65fde438006",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "4f7681e92d5fd9dbd4d3cffec9ab9cf0",
"assets/AssetManifest.json": "077c46bb2cfd2587bd5915f7c16b87ba",
"assets/assets/animations/jump-man.riv": "e17fd8999de81b64c68a3f5ce7d743e9",
"assets/assets/animations/Penguin.flr": "479d849d0fdd0429bb0b9a7c93c7a278",
"assets/assets/images/cat-removebg-preview.png": "7c45e3a679a1f459a6646fb884897b77",
"assets/assets/images/meta.png": "46fa06e0d5c1fea7284ed85eccac61bf",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/chat.png": "c4158b64297f39523a5a9b6494ba3842",
"assets/assets/images/favicon.ico": "9b3e7e2d777decc76bea6b8fd7e9340e",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/mework.jpg": "f2a89b25d760468f827abbfeca2007c0",
"assets/assets/images/facebook-128.png": "1a1de538cb956bb9c07d16aa36b9cf21",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/linkedin-circled.png": "7dff2bf06299a006a550abb4e8004a8e",
"assets/assets/images/camp.jpg": "a96d008eba49339d68055c96b799031e",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/github-144.png": "aa5340220a2e10164b1f8bb80c2397c1",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/linkedin-circled-128.png": "637825c9ac5440de25d3fd8aba01ffe4",
"assets/assets/images/meta-w-100.png": "b46bd7ee8d47dbdfe76d24d07e83ac28",
"assets/assets/images/meta-r.png": "47d82801fc7a40e55ae11b72262088fc",
"assets/assets/images/people_only.png": "3d3aba38d9e4cb1af54df29bf679fd7f",
"assets/assets/images/linkedin-128.png": "16eacca5647e496a26ce83d14200d91f",
"assets/assets/images/GitHub-Mark-Light-120px-plus.png": "472739dfb5857b1f659f4c4c6b4568d0",
"assets/assets/images/meta-144.png": "1ad2f78ebb8be4249b5457cc430db8f5",
"assets/assets/images/linkedin-circled-512.png": "7dff2bf06299a006a550abb4e8004a8e",
"assets/assets/images/meta-100.png": "47adde9d1f67ceca3270ace09918fa61",
"assets/assets/images/logo_removebg_rev.png": "4277b440634f9bdd2f72bb6b73a74f1f",
"assets/assets/images/downloadcv.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/GitHub-Mark-120px-plus.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"assets/assets/images/people_pixel.png": "f8e82469ec0c5658654cbb315007945d",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/cat_dude.jpg": "a99a183f323c0ab15d0e36ca284a8ac4",
"assets/assets/images/robotbg.jpg": "dade43667bceb2ab55b957a75fe85310",
"assets/assets/images/linkedin_circled.png": "815e142f8a9ba6d637de8e7d11ee430e",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/cat.jpg": "c0bdcd093f4503ec2243273a8c8223af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
