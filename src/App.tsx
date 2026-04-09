import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Diagnostic from "./pages/Diagnostic";
import { HelmetProvider } from "react-helmet-async";

import { ThemeProvider } from "./components/theme-provider";

import { trackEvent } from "./utils/analytics";
import { GeoProvider } from "./context/GeoContext";
import BrandLoader from "./components/BrandLoader";

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

const App = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderExiting, setLoaderExiting] = useState(false);

  useEffect(() => {
    let minimumDelayComplete = false;
    let pageReady = document.readyState === "complete";
    let exitTimer: number | undefined;
    let removeTimer: number | undefined;

    const maybeDismissLoader = () => {
      if (!minimumDelayComplete || !pageReady || loaderExiting) return;

      setLoaderExiting(true);
      exitTimer = window.setTimeout(() => {
        setLoaderVisible(false);
      }, 420);
    };

    const minimumTimer = window.setTimeout(() => {
      minimumDelayComplete = true;
      maybeDismissLoader();
    }, 700);

    const handleLoad = () => {
      pageReady = true;
      maybeDismissLoader();
    };

    if (!pageReady) {
      window.addEventListener("load", handleLoad, { once: true });
    } else {
      maybeDismissLoader();
    }

    return () => {
      window.clearTimeout(minimumTimer);
      if (exitTimer) window.clearTimeout(exitTimer);
      if (removeTimer) window.clearTimeout(removeTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, [loaderExiting]);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" disableTransitionOnChange>
      <HelmetProvider>
        <GeoProvider>
          <QueryClientProvider client={queryClient}>
            <TooltipProvider>
              <GlobalTracking />
              <Toaster />
              <Sonner />

              <BrowserRouter>
                <ScrollToTop />
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
                  <Route path="/diagnostic" element={<Diagnostic />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </BrowserRouter>

              {loaderVisible ? <BrandLoader exiting={loaderExiting} /> : null}
            </TooltipProvider>
          </QueryClientProvider>
        </GeoProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default App;
