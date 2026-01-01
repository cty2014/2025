import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
  ],
  output: 'server',
  adapter: vercel(),
  site: 'https://wisecom.biz',
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
    resolve: {
      preserveSymlinks: false,
    },
  },
});


