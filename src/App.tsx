import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Results from "./pages/Results";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

import Refund from "./pages/Refund";
import NotFound from "./pages/NotFound";
import AiOsAudit from "./pages/AiOsAudit";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./components/theme-provider";

import { trackEvent } from "./utils/analytics";
import { GeoProvider } from "./context/GeoContext";

const queryClient = new QueryClient();

const GlobalTracking = () => {
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      // Find closest element with data-track attribute
      const target = e.target as HTMLElement;
      const trackableElement = target.closest('[data-track]');

      if (trackableElement) {
        const eventName = trackableElement.getAttribute('data-track');
        const eventPropsStr = trackableElement.getAttribute('data-track-props');

        let properties = {};
        if (eventPropsStr) {
          try {
            properties = JSON.parse(eventPropsStr);
          } catch (err) {
            console.warn("Failed to parse tracking props:", eventPropsStr);
          }
        }

        if (eventName) {
          trackEvent(eventName, {
            ...properties,
            text: trackableElement.textContent?.trim() || '',
            url: window.location.pathname
          });
        }
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => document.removeEventListener('click', handleGlobalClick);
  }, []);

  return null;
};

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
    <HelmetProvider>
      <GeoProvider>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider>
            <GlobalTracking />
            <Toaster />
            <Sonner />

            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/results" element={<Results />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />

                <Route path="/refund" element={<Refund />} />
                <Route path="/ai-os-audit" element={<AiOsAudit />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </QueryClientProvider>
      </GeoProvider>
    </HelmetProvider>
  </ThemeProvider>
);

export default App;
