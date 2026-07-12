const CACHE_NAME = "limit-trader-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        "/limit-trader-fx/",
        "/limit-trader-fx/index.html",
        "/limit-trader-fx/style.css",
        "/limit-trader-fx/script.js",
        "/limit-trader-fx/add-trade.html",
        "/limit-trader-fx/history.html"
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});