// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static marketing site for datonum.com — no adapter (nginx serves the built output).
// URLs carry no trailing slash: pages build to /about.html and nginx serves them at /about
// (see nginx.conf), so canonicals, internal links and the sitemap all agree on one form.
// https://astro.build/config
export default defineConfig({
  site: 'https://datonum.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [sitemap()],
});
