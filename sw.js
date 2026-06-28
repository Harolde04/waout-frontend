const CACHE_NAME = 'waout-v1';
const STATIC_ASSETS = ['/'];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(key) { return key !== CACHE_NAME; })
            .map(function(key) { return caches.delete(key); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // Ne pas intercepter les requêtes Supabase et Railway
  if (e.request.url.includes('supabase.co') || 
      e.request.url.includes('railway.app') ||
      e.request.url.includes('resend.com')) {
    return;
  }
  e.respondWith(
    fetch(e.request).catch(function() {
      return caches.match(e.request);
    })
  );
});

self.addEventListener('push', function(e) {
  var data = e.data ? e.data.json() : {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'WAOUT', {
      body: data.body || 'Nouvel événement près de chez toi !',
      icon: '/icon-192.png',
      badge: '/icon-192.png'
    })
  );
});