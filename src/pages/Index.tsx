
import React from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen pt-6 pb-20 px-4">
      <div className="container mx-auto max-w-md">
        <div className="flex flex-col items-center justify-center space-y-6 pt-10">
          <Heart className="w-16 h-16 text-primary animate-float" />
          <h1 className="text-3xl font-bold text-center">
            Feliz aniversário!
          </h1>
          <p className="text-center text-muted-foreground">
            Bem-vindo ao seu aplicativo de giftcard do amor.
          </p>
          
          <div className="grid grid-cols-1 gap-6 w-full mt-6">
            <div className="card-romantic">
              <h2 className="text-xl font-semibold mb-3">Nossas Músicas</h2>
              <p className="text-muted-foreground text-sm">
                Uma coleção de músicas especiais que me lembram você.
              </p>
              <Link to="/videos" className="btn-romantic mt-4 block text-center">
                Ver Músicas
              </Link>
            </div>
            
            <div className="card-romantic">
              <h2 className="text-xl font-semibold mb-3">Giftcard</h2>
              <p className="text-muted-foreground text-sm">
                Aproveite seus giftcards de aniversário.
              </p>
              <Link to="/photos" className="btn-romantic mt-4 block text-center">
                Ver Giftcards
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
