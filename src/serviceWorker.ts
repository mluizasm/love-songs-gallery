
// Este é um Service Worker para habilitar recursos PWA

// Registrar o Service Worker
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Ajuste para GitHub Pages - considera o caminho base
      const baseUrl = window.location.pathname.includes('/love-songs-gallery/') 
        ? '/love-songs-gallery/' 
        : '/';
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
