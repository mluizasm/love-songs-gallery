
const CACHE_NAME = 'memoria-romantica-v1';

// Obtém o caminho base do deploy (importante para GitHub Pages)
const getScope = () => {
  const pathSegments = self.location.pathname.split('/');
  pathSegments.pop(); // Remove o serviceWorker.js
  return pathSegments.join('/') + '/';
};

const scope = getScope();

const urlsToCache = [
  scope,
  scope + 'index.html',
  scope + 'manifest.json',
  scope + 'logo192.png',
  scope + 'logo512.png',
  scope + 'favicon.ico',
];

// Instalação do service worker e cache dos recursos estáticos
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache aberto');
        return cache.addAll(urlsToCache);
      })
  );
});

// Ativação do service worker e limpeza de caches antigos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Removendo cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Estratégia de cache: cache-first
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request).then(
          (response) => {
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});
