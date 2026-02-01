const CACHE_NAME = 'notesneo-v1';
const urlsToCache = [
  '/',
  '/notes',
  '/dashboard',
  '/favorites',
  '/upload-notes',
];

// Install Service Worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch from cache first, then network
self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // Skip caching for WebSocket, HMR, chrome-extension, and external analytics
  if (
    url.includes('/_next/webpack-hmr') ||
    url.includes('ws://') ||
    url.includes('wss://') ||
    url.startsWith('chrome-extension://') ||
    url.includes('vercel-scripts.com') ||
    event.request.method !== 'GET' ||
    event.request.cache === 'only-if-cached'
  ) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) return response;
      
      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        if (event.request.mode === 'navigate') {
          return new Response(
            '<html><body><h1>Offline</h1><p>This page is not available offline. Please connect to the internet.</p></body></html>',
            { headers: { 'Content-Type': 'text/html' } }
          );
        }
        throw new Error('Network request failed');
      });
    })
  );
});

// Clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      ).then(() => {
        return self.clients.claim();
      });
    })
  );
});
