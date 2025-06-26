const CACHE = 'bedburn-v1';
const FILES = [
  './',
  './index.html',
  './manifest.json',
  './sounds/start.mp3',
  './sounds/tick.mp3',
  './sounds/done.mp3',
  './sounds/praise.mp3',
  'https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.1/dist/confetti.browser.min.js'
];

// install
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

// fetch
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
