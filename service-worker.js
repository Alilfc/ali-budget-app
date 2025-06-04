
self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open("ali-budget-cache").then(function(cache) {
      return cache.addAll([
        "/ali-budget/index.html",
        "/ali-budget/manifest.json",
        "/ali-budget/service-worker.js",
        "/ali-budget/logo.png",
        "https://cdn.jsdelivr.net/npm/chart.js"
      ]);
    })
  );
});

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
