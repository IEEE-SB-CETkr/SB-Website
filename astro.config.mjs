// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";
import playformCompress from '@playform/compress';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: process.env.GITHUB_PAGES
  ? 'https://kethu-x86.github.io/ieeesbcetkr/'
  : 'https://example.com',
  base: process.env.GITHUB_PAGES ? '/ieeesbcetkr/' : '/',
  integrations: [sitemap(), react(), playformCompress(), mdx()],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});