/**
 * Global Tracking Utility
 * Pushes events to Google Analytics 4 (gtag) and Microsoft Clarity simultaneously.
 */
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
     try {
          // 1. Send to Google Analytics 4
          if (typeof window !== 'undefined' && 'gtag' in window) {
               // @ts-ignore
               window.gtag('event', eventName, properties);
          }

          // 2. Send to Microsoft Clarity
          if (typeof window !== 'undefined' && 'clarity' in window) {
               // @ts-ignore
               window.clarity("set", eventName, properties ? JSON.stringify(properties) : "");
          }
     } catch (error) {
          console.warn("Analytics tracking error:", error);
     }
};
