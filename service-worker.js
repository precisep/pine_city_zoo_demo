self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('pine-city-zoo').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/style.css',
        // Add other assets you want to cache
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

