// vite.config.ts
import { defineConfig } from "file:///H:/Biz%20Online/Sellatica%20-%20Official%20Website/sellatica-website-/node_modules/vite/dist/node/index.js";
import react from "file:///H:/Biz%20Online/Sellatica%20-%20Official%20Website/sellatica-website-/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { componentTagger } from "file:///H:/Biz%20Online/Sellatica%20-%20Official%20Website/sellatica-website-/node_modules/lovable-tagger/dist/index.js";
import sitemap from "file:///H:/Biz%20Online/Sellatica%20-%20Official%20Website/sellatica-website-/node_modules/vite-plugin-sitemap/dist/index.js";
var __vite_injected_original_dirname = "H:\\Biz Online\\Sellatica - Official Website\\sellatica-website-";
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false
    }
  },
  plugins: [
    react(),
    sitemap({
      hostname: "https://www.sellatica.in",
      dynamicRoutes: [
        "/",
        "/about",
        "/services",
        "/results",
        "/ai-os-audit",
        "/ai-os-partner",
        "/ai-os-pilot",
        "/contact",
        "/faq",
        "/privacy",
        "/terms"
      ],
      changefreq: "weekly",
      priority: {
        "/": 1,
        "/services": 0.9,
        "/ai-os-audit": 0.9,
        "/ai-os-partner": 0.9,
        "/ai-os-pilot": 0.9,
        "*": 0.8
      },
      generateRobotsTxt: false
    }),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJIOlxcXFxCaXogT25saW5lXFxcXFNlbGxhdGljYSAtIE9mZmljaWFsIFdlYnNpdGVcXFxcc2VsbGF0aWNhLXdlYnNpdGUtXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJIOlxcXFxCaXogT25saW5lXFxcXFNlbGxhdGljYSAtIE9mZmljaWFsIFdlYnNpdGVcXFxcc2VsbGF0aWNhLXdlYnNpdGUtXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9IOi9CaXolMjBPbmxpbmUvU2VsbGF0aWNhJTIwLSUyME9mZmljaWFsJTIwV2Vic2l0ZS9zZWxsYXRpY2Etd2Vic2l0ZS0vdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBjb21wb25lbnRUYWdnZXIgfSBmcm9tIFwibG92YWJsZS10YWdnZXJcIjtcclxuaW1wb3J0IHNpdGVtYXAgZnJvbSBcInZpdGUtcGx1Z2luLXNpdGVtYXBcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgaG1yOiB7XHJcbiAgICAgIG92ZXJsYXk6IGZhbHNlLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBzaXRlbWFwKHtcclxuICAgICAgaG9zdG5hbWU6ICdodHRwczovL3d3dy5zZWxsYXRpY2EuaW4nLFxyXG4gICAgICBkeW5hbWljUm91dGVzOiBbXHJcbiAgICAgICAgJy8nLCAnL2Fib3V0JywgJy9zZXJ2aWNlcycsICcvcmVzdWx0cycsICcvYWktb3MtYXVkaXQnLCAnL2FpLW9zLXBhcnRuZXInLCAnL2FpLW9zLXBpbG90JyxcclxuICAgICAgICAnL2NvbnRhY3QnLCAnL2ZhcScsICcvcHJpdmFjeScsICcvdGVybXMnXHJcbiAgICAgIF0sXHJcbiAgICAgIGNoYW5nZWZyZXE6ICd3ZWVrbHknLFxyXG4gICAgICBwcmlvcml0eToge1xyXG4gICAgICAgICcvJzogMS4wLFxyXG4gICAgICAgICcvc2VydmljZXMnOiAwLjksXHJcbiAgICAgICAgJy9haS1vcy1hdWRpdCc6IDAuOSxcclxuICAgICAgICAnL2FpLW9zLXBhcnRuZXInOiAwLjksXHJcbiAgICAgICAgJy9haS1vcy1waWxvdCc6IDAuOSxcclxuICAgICAgICAnKic6IDAuOFxyXG4gICAgICB9LFxyXG4gICAgICBnZW5lcmF0ZVJvYm90c1R4dDogZmFsc2VcclxuICAgIH0pLFxyXG4gICAgbW9kZSA9PT0gXCJkZXZlbG9wbWVudFwiICYmIGNvbXBvbmVudFRhZ2dlcigpXHJcbiAgXS5maWx0ZXIoQm9vbGVhbiksXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgXCJAXCI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmNcIiksXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5WCxTQUFTLG9CQUFvQjtBQUN0WixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsdUJBQXVCO0FBQ2hDLE9BQU8sYUFBYTtBQUpwQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILFNBQVM7QUFBQSxJQUNYO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUFLO0FBQUEsUUFBVTtBQUFBLFFBQWE7QUFBQSxRQUFZO0FBQUEsUUFBZ0I7QUFBQSxRQUFrQjtBQUFBLFFBQzFFO0FBQUEsUUFBWTtBQUFBLFFBQVE7QUFBQSxRQUFZO0FBQUEsTUFDbEM7QUFBQSxNQUNBLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxRQUNSLEtBQUs7QUFBQSxRQUNMLGFBQWE7QUFBQSxRQUNiLGdCQUFnQjtBQUFBLFFBQ2hCLGtCQUFrQjtBQUFBLFFBQ2xCLGdCQUFnQjtBQUFBLFFBQ2hCLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxtQkFBbUI7QUFBQSxJQUNyQixDQUFDO0FBQUEsSUFDRCxTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixFQUFFOyIsCiAgIm5hbWVzIjogW10KfQo=
