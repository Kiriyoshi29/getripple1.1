import { useEffect } from "react"; // Импортируем useEffect для скролла
import { useLocation } from "react-router-dom"; // Импортируем useLocation для отслеживания пути
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Features from "./pages/Features";
import Security from "./pages/Security";
import DownloadPage from "./pages/Download";
import Support from "./pages/Support";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

// 1. Создаем компонент ScrollToTop
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // При каждом изменении пути (pathname) прокручиваем окно в начало
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* 2. Вставляем компонент ScrollToTop сразу после BrowserRouter */}
        <ScrollToTop />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/security" element={<Security />} />
          <Route path="/download" element={<DownloadPage />} />
          <Route path="/support" element={<Support />} />
          <Route path="/support/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;