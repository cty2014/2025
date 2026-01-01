import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: true,
    }),
    sitemap(),
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


