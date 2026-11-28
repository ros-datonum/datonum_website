import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {cloudflare} from '../deploy/cloudflare.mjs';
import {verifySite} from '../deploy/verify-site.mjs';
import {pages} from '../deploy/pages.mjs';
const commit='a'.repeat(40), zoneId='b'.repeat(32);
const json=(value,status=200)=>new Response(JSON.stringify(value),{status});
const siteFixture=(visited=[],goStatus=302)=>async url=>{visited.push(url);
  if(url.endsWith('/go/li'))return new Response(null,{status:goStatus,headers:{location:'/?utm_source=linkedin&utm_medium=profile'}});
  return url.endsWith('.json')?json({commit}):new Response(url.endsWith('.txt')?'Sitemap: https://datonum.com/sitemap-index.xml':url.endsWith('BingSiteAuth.xml')?'<users><user>124A020669257E620E06D4D2FD869EBB</user></users>':url.endsWith('.xml')?'<sitemapindex></sitemapindex>':'<title>Datonum</title><link rel="canonical" href="https://datonum.com/">');};

test('Cloudflare rejects a different zone without purging',async()=>{
  const calls=[];
  await assert.rejects(()=>cloudflare('purge',{token:'fixture',zoneId,fetcher:async(url,opts)=>{calls.push({url,method:opts.method});return json({success:true,result:{name:'other.example'}});}}),/no purge performed/);
  assert.equal(calls.length,1);assert.equal(calls[0].method,undefined);
});
test('Cloudflare requires confirmed API success, not only HTTP 200',async()=>{
  let n=0;await assert.rejects(()=>cloudflare('purge',{token:'fixture',zoneId,fetcher:async()=>++n===1?json({success:true,result:{name:'datonum.com'}}):json({success:false})}),/did not confirm/);
});
test('Cloudflare purges only the verified Datonum zone',async()=>{
  const calls=[];const result=await cloudflare('purge',{token:'fixture',zoneId,fetcher:async(url,opts)=>{calls.push({url,...opts});return json(calls.length===1?{success:true,result:{name:'datonum.com'}}:{success:true});}});
  assert(result.purged);assert.equal(calls[1].method,'POST');assert.deepEqual(JSON.parse(calls[1].body),{purge_everything:true});
});
test('live verification rejects stale cached deployment',async()=>{
  await assert.rejects(()=>verifySite({commit,attempts:1,fetcher:async()=>json({commit:'c'.repeat(40)})}),/does not match/);
});
test('live verification requires important pages as well as commit marker',async()=>{
  await assert.rejects(()=>verifySite({commit,attempts:1,fetcher:async url=>url.endsWith('.json')?json({commit}):new Response('not found',{status:404})}),/HTTP 404/);
});
test('live verification checks the intended version and essential routes',async()=>{
  const visited=[];const result=await verifySite({commit,attempts:1,fetcher:siteFixture(visited)});
  assert(result.verified);assert.equal(visited.length,8);
});
test('verification cannot be redirected to an unrelated origin',async()=>{
  await assert.rejects(()=>verifySite({origin:'https://other.example',commit}),/Unexpected/);
});
test('verification accepts this project\'s pages.dev deployments only',async()=>{
  for(const origin of ['https://3f2a9c1d.datonum-website.pages.dev','https://datonum-website.pages.dev','https://main.datonum-website-x7k.pages.dev'])
    assert((await verifySite({origin,commit,attempts:1,fetcher:siteFixture()})).verified,origin);
  for(const origin of ['https://evil.pages.dev','https://datonum-website.pages.dev.example.com','http://datonum-website.pages.dev'])
    await assert.rejects(()=>verifySite({origin,commit,attempts:1,fetcher:siteFixture()}),/Unexpected/,origin);
});
test('verification fails when a /go/ short link does not redirect',async()=>{
  await assert.rejects(()=>verifySite({commit,attempts:1,fetcher:siteFixture([],404)}),/go\/li/);
});

const accountId='c'.repeat(32), deploymentId='0f1e2d3c-4b5a-6978-8a9b-0c1d2e3f4a5b';
test('Pages ensure creates the project only when it is missing',async()=>{
  const calls=[];const r=await pages('ensure',{token:'fixture',accountId,project:'datonum-website',fetcher:async(url,opts)=>{calls.push(opts.method??'GET');return calls.length===1?json({success:false},404):json({success:true,result:{subdomain:'datonum-website.pages.dev'}});}});
  assert(r.created);assert.deepEqual(calls,['GET','POST']);
  const again=await pages('ensure',{token:'fixture',accountId,project:'datonum-website',fetcher:async()=>json({success:true,result:{subdomain:'x'}})});
  assert.equal(again.created,false);
});
test('Pages ensure does not create a project on an auth or server error',async()=>{
  const calls=[];await assert.rejects(()=>pages('ensure',{token:'fixture',accountId,project:'datonum-website',fetcher:async(url,opts)=>{calls.push(opts.method??'GET');return json({success:false},403);}}),/HTTP 403/);
  assert.deepEqual(calls,['GET']);
});
test('Pages production returns the deployment production serves now, or empty',async()=>{
  assert.equal((await pages('production',{token:'fixture',accountId,project:'datonum-website',fetcher:async()=>json({success:true,result:{canonical_deployment:{id:deploymentId},latest_deployment:{id:'newer'}}})})).id,deploymentId);
  assert.equal((await pages('production',{token:'fixture',accountId,project:'datonum-website',fetcher:async()=>json({success:true,result:{canonical_deployment:null}})})).id,'');
});
test('Pages rollback requires a deployment id and confirmed success',async()=>{
  await assert.rejects(()=>pages('rollback',{token:'fixture',accountId,project:'datonum-website',id:'x; rm'}),/deployment id/);
  await assert.rejects(()=>pages('rollback',{token:'fixture',accountId,project:'datonum-website',id:deploymentId,fetcher:async()=>json({success:false})}),/did not confirm/);
  const r=await pages('rollback',{token:'fixture',accountId,project:'datonum-website',id:deploymentId,fetcher:async(url,opts)=>{assert.match(url,new RegExp(`/deployments/${deploymentId}/rollback$`));assert.equal(opts.method,'POST');return json({success:true});}});
  assert.equal(r.rolledBackTo,deploymentId);
});

test('every /go/ short link has both spellings and redirects with 302',async()=>{
  const rules=(await fs.readFile(new URL('../public/_redirects',import.meta.url),'utf8')).split('\n').map(l=>l.trim()).filter(l=>l&&!l.startsWith('#')).map(l=>l.split(/\s+/));
  const go=rules.filter(([from])=>from.startsWith('/go/'));
  assert(go.length>0);
  for(const [from,to,status] of go){
    assert.equal(status,'302',from);assert.match(to,/^\/\?utm_source=/,from);
    const twin=from.endsWith('/')?from.slice(0,-1):`${from}/`;
    assert(go.some(([f,t])=>f===twin&&t===to),`${from} has no matching ${twin}`);
  }
});
