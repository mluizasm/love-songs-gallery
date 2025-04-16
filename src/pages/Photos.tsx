
import React from 'react';
import { Share2 } from 'lucide-react';

interface PhotoItem {
  id: number;
  src: string;
  alt: string;
}

// Lista de fotos de exemplo (você poderá substituir por suas próprias fotos)
const demoPhotos: PhotoItem[] = [
  { id: 1, src: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&auto=format", alt: "Momento romântico 1" },
  { id: 2, src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=500&auto=format", alt: "Momento romântico 2" },
  { id: 3, src: "https://images.unsplash.com/photo-1537721664796-76f77222a5d0?w=500&auto=format", alt: "Momento romântico 3" },
  { id: 4, src: "https://images.unsplash.com/photo-1503516459261-40c66117780a?w=500&auto=format", alt: "Momento romântico 4" }
];

const Photos = () => {
  const [photos, setPhotos] = React.useState<PhotoItem[]>(demoPhotos);

  const shareToWhatsApp = (imageUrl: string) => {
    // Encode a mensagem para compartilhar no WhatsApp
    const message = encodeURIComponent("Olhe essa foto especial que quero compartilhar com você ❤️");
    const url = encodeURIComponent(imageUrl);
    
    // Criar o link do WhatsApp
    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}%20${url}`;
    
    // Abrir em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-6 pb-20 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Nossas Fotos Especiais
        </h1>
        
        <div className="grid grid-cols-2 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="card-romantic p-2">
              <div className="relative group">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <button
                  onClick={() => shareToWhatsApp(photo.src)}
                  className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"
                >
                  <div className="flex flex-col items-center text-white">
                    <Share2 className="w-6 h-6 mb-1" />
                    <span className="text-xs">Compartilhar</span>
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {photos.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Ainda não há fotos para exibir. Adicione suas fotos favoritas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
