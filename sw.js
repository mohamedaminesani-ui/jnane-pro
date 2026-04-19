// Jnane Pro — Service Worker (minimal, required for PWA)
const CACHE_NAME = 'jnane-pro-v1';
const ASSETS = [
  './',
  './index.html',
  './design-canvas.jsx',
  './frames/ios-frame.jsx',
  './frames/android-frame.jsx',
  './components/tokens.jsx',
  './components/Onboarding.jsx',
  './components/Home.jsx',
  './components/ServiceList.jsx',
  './components/ServiceDetail.jsx',
  './components/QuoteForm.jsx',
  './components/Tracking.jsx',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

// Install: pre-cache local assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// Activate: clean old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: cache-first for same-origin, network for others
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        return cached || fetch(event.request).then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone).catch(() => {}));
          return response;
        }).catch(() => cached);
      })
    );
  }
});
