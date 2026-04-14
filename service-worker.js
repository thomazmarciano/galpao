const CACHE_NAME = "galpao-v1";

const urlsToCache = [
  "/index.html",
  "/carro.png",
  "./icon-192.png",
  "./icon-512.png",
];

self.addEventListener("install", (event) => {
  console.log("SW install iniciado");

  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      for (const url of urlsToCache) {
        try {
          console.log("Cacheando:", url);
          await cache.add(url);
          console.log("OK:", url);
        } catch (err) {
          console.error("ERRO ao cachear:", url, err);
        }
      }
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});
