
import React from 'react';
import { Share2 } from 'lucide-react';

interface GiftcardItem {
  id: number;
  src: string;
  alt: string;
}

// Lista de giftcards usando as imagens enviadas pelo usuário
const giftcards: GiftcardItem[] = [
  { id: 1, src: "/lovable-uploads/f8cbaebe-96b0-4c5a-99a7-b5fd9a299578.png", alt: "Cupom - Uma série à sua escolha" },
  { id: 2, src: "/lovable-uploads/9c085597-1569-4201-972a-b1f073a90649.png", alt: "Cupom - Um filme à sua escolha" },
  { id: 3, src: "/lovable-uploads/05a47708-9d1c-47d9-9da4-33c80bb00566.png", alt: "Cupom - Massagem relaxante" },
  { id: 4, src: "/lovable-uploads/7a2529d3-39c5-4c8a-986b-ced54a627c0a.png", alt: "Cupom - Dia de preguiça juntos" },
  { id: 5, src: "/lovable-uploads/e437aa8e-e70a-4609-a53a-85aa092d6a08.png", alt: "Cupom - Um filme à sua escolha" },
  { id: 6, src: "/lovable-uploads/84a79168-641f-414f-9f5f-072bb19afa1a.png", alt: "Cupom - Um jantar feito por mozão" },
  { id: 7, src: "/lovable-uploads/dc22874b-2c20-4c85-a154-2bf86e7d8975.png", alt: "Cupom - Você escolhe" },
  { id: 8, src: "/lovable-uploads/6c22920d-1f23-4a04-9bfc-c20be82439e1.png", alt: "Cupom - Largar o Valorant" },
  { id: 9, src: "/lovable-uploads/c21eadcd-e754-4c2d-8eb9-80f734b61ca4.png", alt: "Cupom - Um jogo à sua escolha" }
];

const Photos = () => {
  const [cards, setCards] = React.useState<GiftcardItem[]>(giftcards);

  const shareToWhatsApp = (imageUrl: string, alt: string) => {
    // Número do WhatsApp fornecido
    const phoneNumber = "5581982553887";
    
    // Obtenha a URL completa da imagem
    const fullImageUrl = new URL(imageUrl, window.location.origin).href;
    
    // Crie a mensagem para compartilhar
    const message = `Estou resgatando este cupom: ${alt} 💕`;
    
    // Criar o link do WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Abrir em uma nova aba
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-6 pb-20 px-4">
      <div className="container mx-auto max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Seus Giftcards de Aniversário
        </h1>
        
        <div className="grid grid-cols-1 gap-6">
          {cards.map((card) => (
            <div key={card.id} className="card-romantic p-3">
              <div 
                className="relative group cursor-pointer"
                onClick={() => shareToWhatsApp(card.src, card.alt)}
              >
                <img 
                  src={card.src} 
                  alt={card.alt} 
                  className="w-full rounded-lg shadow-md"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="flex flex-col items-center text-white">
                    <Share2 className="w-6 h-6 mb-1" />
                    <span className="text-sm">Resgatar cupom</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {cards.length === 0 && (
          <div className="text-center py-10">
            <p className="text-muted-foreground">
              Ainda não há giftcards para exibir.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Photos;
