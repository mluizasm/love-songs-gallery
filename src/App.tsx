import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Videos from "./pages/Videos";
import Photos from "./pages/Photos";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import InstallPWA from "./components/InstallPWA";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="romantic-gradient min-h-screen pb-16">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/giftcardnoivorado" element={<Photos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <InstallPWA />
          <Navbar />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
