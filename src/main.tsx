
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { register } from './serviceWorker'

createRoot(document.getElementById("root")!).render(<App />);

// Registrar o service worker para habilitar recursos PWA
register();
