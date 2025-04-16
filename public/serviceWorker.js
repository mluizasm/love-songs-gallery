
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
  
  // Força a ativação imediata (não espera por outras abas fecharem)
  self.skipWaiting();
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
    }).then(() => {
      // Assume o controle de todas as páginas imediatamente
      self.clients.claim();
    })
  );
});

// Estratégia de cache: network-first com fallback para cache
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // Se a resposta for bem-sucedida, armazene-a no cache
        if (response.ok) {
          const responseToCache = response.clone();
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
        }
        return response;
      })
      .catch(() => {
        // Se a rede falhar, tente responder do cache
        return caches.match(event.request);
      })
  );
});
