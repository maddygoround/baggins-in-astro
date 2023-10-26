import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
     output: 'hybrid',
     integrations: [react(), tailwind({
          applyBaseStyles: false
     })],
     adapter: vercel({
          edgeMiddleware: true,
          webAnalytics: {
               enabled: true,
          },
     }),
     redirects: {
          '/blog': '/blog/1'
     },
     vite: {
          ssr: {
               external: ['@resvg/resvg-js']
          },
          optimizeDeps: {
               exclude: ["@resvg/resvg-js"]
          }
     }
});