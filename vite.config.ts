import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.sellatica.in',
      dynamicRoutes: [
        '/', '/about', '/services', '/results', '/ai-os-audit', '/ai-os-partner', '/ai-os-pilot',
        '/contact', '/faq', '/privacy', '/terms'
      ],
      changefreq: 'weekly',
      priority: {
        '/': 1.0,
        '/services': 0.9,
        '/ai-os-audit': 0.9,
        '/ai-os-partner': 0.9,
        '/ai-os-pilot': 0.9,
        '*': 0.8
      },
      generateRobotsTxt: false
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
