importScripts('version.js');

const ASSETS = [
  './',
  'index.html',
  'version.js',
  'manifest.webmanifest',
  'icons/icon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'fonts/atkinson-hyperlegible-next-latin-400-normal.woff2',
  'fonts/atkinson-hyperlegible-next-latin-600-normal.woff2',
  'fonts/atkinson-hyperlegible-next-latin-700-normal.woff2',
  'fonts/atkinson-hyperlegible-mono-latin-400-normal.woff2',
  'fonts/atkinson-hyperlegible-mono-latin-600-normal.woff2'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(self.CACHE_NAME).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith('elektrocalc-') && k !== self.CACHE_NAME).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Network-first for the page (picks up new versions when online), cache-first for everything else.
self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then((res) => {
        const copy = res.clone();
        caches.open(self.CACHE_NAME).then((c) => c.put('index.html', copy));
        return res;
      }).catch(() => caches.match('index.html'))
    );
    return;
  }
  e.respondWith(caches.match(req).then((hit) => hit || fetch(req)));
});
