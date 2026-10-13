// /robots.txt — the whole site is open to search and AI crawlers; points them at the sitemap
// emitted by @astrojs/sitemap. Built from `site` so the origin is never hardcoded here.
import type { APIRoute } from 'astro';

const SITEMAP_INDEX_PATH = '/sitemap-index.xml';

export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(SITEMAP_INDEX_PATH, site).href;
  const body = ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemapUrl}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
