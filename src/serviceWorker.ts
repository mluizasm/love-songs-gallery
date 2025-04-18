
// Este é um Service Worker para habilitar recursos PWA

// Registrar o Service Worker
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Determina o URL base onde o app está rodando
      const isLovableDomain = window.location.hostname.includes('lovable.app');
      const isGithubPages = window.location.hostname.includes('github.io');
      
      let baseUrl = '/';
      if (isGithubPages && window.location.pathname.includes('/love-songs-gallery/')) {
        baseUrl = '/love-songs-gallery/';
      } else if (isLovableDomain) {
        baseUrl = '/';
      }
      
      const swUrl = `${window.location.origin}${baseUrl}serviceWorker.js`;
      
      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log('ServiceWorker registrado com sucesso:', registration);
        })
        .catch((error) => {
          console.error('Erro ao registrar o ServiceWorker:', error);
        });
    });
  }
}

// Desregistrar o Service Worker (útil para desenvolvimento)
export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}
