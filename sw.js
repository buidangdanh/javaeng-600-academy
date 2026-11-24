const CACHE_NAME = 'javaeng-600-v1';
const ASSETS = [
  './',
  './index.html',
  './styles.css',
  './data.js',
  './app.js',
  './icon.svg',
  './content/grammar-g1.js',
  './content/grammar-g2.js',
  './content/grammar-g3.js',
  './content/grammar-g4.js',
  './content/vocab-v1.js',
  './content/vocab-v2.js',
  './content/vocab-v3.js',
  './content/vocab-v4.js',
  './content/practice-labs.js',
  './content/exams-toeic.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
