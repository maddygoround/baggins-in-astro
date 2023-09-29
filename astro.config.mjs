import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import nodejs from '@astrojs/node';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
     output: 'hybrid',
     adapter: nodejs({
          mode: 'standalone'
     }),
     integrations: [react(), tailwind({
          applyBaseStyles: false,
     })],
     redirects: {
          '/blog': '/blog/[page]',
     },
});
