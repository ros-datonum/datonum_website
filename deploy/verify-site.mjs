import {pathToFileURL} from 'node:url';
import {setTimeout as delay} from 'node:timers/promises';

export async function verifySite({origin='https://datonum.com',commit,fetcher=fetch,attempts=12,pause=5000}={}) {
  if(!/^[a-f0-9]{40}$/.test(commit??''))throw new Error('A full commit SHA is required');
  const base=new URL(origin);
  if(!['https://datonum.com','http://127.0.0.1:8080'].includes(base.origin))throw new Error('Unexpected verification origin');
  let error;
  for(let i=0;i<attempts;i++){
    try{
      const response=await fetcher(`${base.origin}/deployment.json`,{redirect:'error',signal:AbortSignal.timeout(15000)});
      if(!response.ok)throw new Error(`Deployment marker HTTP ${response.status}`);
      const marker=await response.json();if(marker.commit!==commit)throw new Error('Public deployment marker does not match this commit');
      for(const route of ['/','/services','/insights','/robots.txt','/sitemap-index.xml','/BingSiteAuth.xml']){
        const page=await fetcher(`${base.origin}${route}`,{redirect:'error',signal:AbortSignal.timeout(15000)});
        if(page.status!==200)throw new Error(`${route}: HTTP ${page.status}`);
        const body=await page.text();
        if(route.endsWith('.txt')&&!body.includes('Sitemap:'))throw new Error('robots.txt has no sitemap');
        if(route==='/sitemap-index.xml'&&!body.includes('<sitemapindex'))throw new Error('Invalid sitemap index');
        if(route==='/BingSiteAuth.xml'&&!/<users>\s*<user>[A-F0-9]{32}<\/user>\s*<\/users>/i.test(body))throw new Error('Invalid Bing verification');
        if(!route.includes('.')&&(!/<title>[^<]+<\/title>/.test(body)||!body.includes('rel="canonical"')))throw new Error(`${route}: missing title/canonical`);
      }
      return {verified:true,commit,origin:base.origin};
    }catch(e){error=e;if(i+1<attempts)await delay(pause);}
  }
  throw error;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  const args=process.argv.slice(2);const arg=name=>args[args.indexOf(name)+1];
  try{console.log(JSON.stringify(await verifySite({commit:arg('--commit'),origin:args.includes('--origin')?arg('--origin'):undefined})));}
  catch(e){console.error(e.message);process.exitCode=1;}
}
