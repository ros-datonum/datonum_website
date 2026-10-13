// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync } from 'node:fs';

// The Insights index is noindexed while the section has no articles (see
// src/pages/insights/index.astro), so it stays out of the sitemap until then.
const INSIGHTS_DIRECTORY = './src/content/insights';
const INSIGHTS_INDEX_PATH = '/insights';
const hasInsights = readdirSync(INSIGHTS_DIRECTORY).some((file) => file.endsWith('.md'));

// Static marketing site for datonum.com — no adapter (nginx serves the built output).
// URLs carry no trailing slash: pages build to /about.html and nginx serves them at /about
// (see nginx.conf), so canonicals, internal links and the sitemap all agree on one form.
// https://astro.build/config
export default defineConfig({
  site: 'https://datonum.com',
  trailingSlash: 'never',
  build: { format: 'file' },
  integrations: [
    sitemap({ filter: (page) => hasInsights || new URL(page).pathname !== INSIGHTS_INDEX_PATH }),
  ],
});
