
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const InstallPWA = () => {
  const [installPrompt, setInstallPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      // Armazena o evento para usar mais tarde
      setInstallPrompt(e);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handler as EventListener);

    // Verifica se o app já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsVisible(false);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler as EventListener);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;
    
    // Mostra o prompt de instalação
    installPrompt.prompt();
    
    // Aguarda o usuário responder
    const choiceResult = await installPrompt.userChoice;
    
    // Esconde o botão independente da escolha
    setIsVisible(false);
    setInstallPrompt(null);
    
    if (choiceResult.outcome === 'accepted') {
      console.log('Usuário aceitou a instalação do PWA');
    } else {
      console.log('Usuário rejeitou a instalação do PWA');
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="fixed bottom-20 right-4 z-50 bg-primary text-white p-3 rounded-full shadow-lg"
      aria-label="Instalar aplicativo"
    >
      <Download className="w-6 h-6" />
    </button>
  );
};

export default InstallPWA;
