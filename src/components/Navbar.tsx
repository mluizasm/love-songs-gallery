
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, Image, Youtube } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-16 bg-white/80 backdrop-blur-md border-t border-romantic-200 shadow-lg z-50">
      <div className="container h-full flex items-center justify-around">
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center w-24 h-full transition-all ${
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }`
          }
          end
        >
          <Heart className={`w-5 h-5 mb-1 animate-pulse-soft`} />
          <span className="text-xs">Início</span>
        </NavLink>

        <NavLink 
          to="/videos" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center w-24 h-full transition-all ${
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }`
          }
        >
          <Youtube className="w-5 h-5 mb-1" />
          <span className="text-xs">Vídeos</span>
        </NavLink>
        
        <NavLink 
          to="/photos" 
          className={({ isActive }) => 
            `flex flex-col items-center justify-center w-24 h-full transition-all ${
              isActive ? 'text-primary font-medium' : 'text-muted-foreground'
            }`
          }
        >
          <Image className="w-5 h-5 mb-1" />
          <span className="text-xs">Fotos</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
