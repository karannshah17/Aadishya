import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Clients from "./components/Clients";
import Company from "./components/Company";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsappButton from "./components/WhatsappButton";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Homepage */}
          <Route
            path="/"
            element={
              <div className="min-h-screen">
                <Header />
                <main>
                  <Hero />
                  <About />
                  <Services />
                  <Clients />
                  <Contact />
                </main>
                <Footer />
                <WhatsappButton />
              </div>
            }
          />

          {/* Company Page */}
          <Route
            path="/company"
            element={
              <div className="min-h-screen">
                <Header />
                <main>
                  <Company />
                </main>
                <Footer />
                <WhatsappButton />
              </div>
            }
          />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
