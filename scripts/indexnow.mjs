// Pings IndexNow (Bing, Yandex, Seznam and others) with the site's URLs after a deploy.
//   npm run indexnow                       every URL in the live sitemap
//   npm run indexnow -- --urls=/a,https://datonum.com/b   only these
// Node 22, no dependencies. The key file lives in public/ and is served from the site root.
const HOST = 'datonum.com';
const ORIGIN = `https://${HOST}`;
const KEY = '087946e69631a726e776769531d9618f';
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP_INDEX = `${ORIGIN}/sitemap-index.xml`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function fetchText(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${url} → HTTP ${response.status}`);
  return response.text();
}

function locs(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
}

async function sitemapUrls() {
  const sitemaps = locs(await fetchText(SITEMAP_INDEX));
  const pages = await Promise.all(sitemaps.map(async (sitemap) => locs(await fetchText(sitemap))));
  return [...new Set(pages.flat())];
}

function argUrls() {
  const arg = process.argv.slice(2).find((a) => a.startsWith('--urls='));
  if (!arg) return null;
  return arg
    .slice('--urls='.length)
    .split(',')
    .map((url) => url.trim())
    .filter(Boolean)
    .map((url) => new URL(url, ORIGIN).href);
}

const urlList = argUrls() ?? (await sitemapUrls());
const foreign = urlList.filter((url) => new URL(url).host !== HOST);
if (foreign.length > 0) {
  console.error(`Not on ${HOST}: ${foreign.join(', ')}`);
  process.exit(1);
}
if (urlList.length === 0) {
  console.error('No URLs to submit.');
  process.exit(1);
}

console.log(`Submitting ${urlList.length} URL(s) to IndexNow:`);
for (const url of urlList) console.log(`  ${url}`);

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
const ok = response.status === 200 || response.status === 202;
const body = (await response.text()).trim();
console.log(`IndexNow: HTTP ${response.status} ${ok ? 'OK' : 'FAILED'}${body ? ` — ${body}` : ''}`);
if (!ok) process.exit(1);
