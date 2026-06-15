// Minimal service worker — required by Chrome/Android for standalone PWA install.
// No caching: every request just passes through to the network.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
