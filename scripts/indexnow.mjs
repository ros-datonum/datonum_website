// Pings IndexNow (Bing, Yandex, Seznam and others) with the site's URLs.
// Run after deploying. This command is not automatically triggered by deployment.
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

async function assertPublicKeyMatches() {
  const liveKey = (await fetchText(KEY_LOCATION)).trim();
  if (liveKey !== KEY) {
    throw new Error(`Public IndexNow key file does not match the configured key: ${KEY_LOCATION}`);
  }
  console.log(`Verified public IndexNow key file: ${KEY_LOCATION}`);
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

// IndexNow can return HTTP 202 while ownership verification is pending.
// Check the published key *before* submitting to distinguish missing deployment
// or CDN/proxy problems from a successful notification.
try {
  await assertPublicKeyMatches();
} catch (error) {
  console.error(`IndexNow preflight FAILED: ${error.message}`);
  process.exit(1);
}

const response = await fetch(ENDPOINT, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});
const body = (await response.text()).trim();
const suffix = body ? ` — ${body}` : '';
if (response.status === 200) {
  console.log(`IndexNow: HTTP 200 OK — URLs received and key accepted${suffix}`);
} else if (response.status === 202) {
  console.warn(
    `IndexNow: HTTP 202 PENDING — URLs received but key verification is not complete.${suffix}`
  );
  console.warn('Check Bing Webmaster Tools → IndexNow and retry after validation; 202 is not a confirmed success.');
  process.exitCode = 2;
} else {
  console.error(`IndexNow: HTTP ${response.status} FAILED${suffix}`);
  process.exitCode = 1;
}
