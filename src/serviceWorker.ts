
export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      const baseUrl = '/';
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
