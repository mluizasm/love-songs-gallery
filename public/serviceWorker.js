
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

// Estratégia de cache: stale-while-revalidate
// Responde com cache se disponível, mas atualiza o cache com a resposta da rede
self.addEventListener('fetch', (event) => {
  // Ignora requisições POST ou não GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            // Verifica se a resposta é válida
            if (networkResponse && networkResponse.ok && networkResponse.type === 'basic') {
              // Faz uma cópia da resposta para armazenar no cache
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Falha na rede, não faz nada além de registrar o erro
            console.log('Falha na rede para:', event.request.url);
          });

        // Retorna a resposta em cache ou aguarda pela rede
        return cachedResponse || fetchPromise;
      });
    })
  );
});
