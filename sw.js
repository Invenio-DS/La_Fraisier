const CACHE_NAME = 'invenio-v1';
const ASSETS = [
  './index.html',
  './Menu1.png',
  './Handelson-Four.otf'
];

// Instalación: Guardar archivos críticos en el dispositivo
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Estrategia: Intentar red, si falla, usar lo guardado (Caché)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});