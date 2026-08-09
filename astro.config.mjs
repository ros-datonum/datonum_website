// @ts-check
import { defineConfig } from 'astro/config';

// Static marketing site for datonum.com — no adapter (Cloudflare Pages serves the built output).
// https://astro.build/config
export default defineConfig({
  site: 'https://datonum.com',
});
