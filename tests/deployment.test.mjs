import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {cloudflare} from '../deploy/cloudflare.mjs';
import {verifySite} from '../deploy/verify-site.mjs';
const commit='a'.repeat(40), zoneId='b'.repeat(32);
const json=(value,status=200)=>new Response(JSON.stringify(value),{status});

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
  const visited=[];const result=await verifySite({commit,attempts:1,fetcher:async url=>{visited.push(url);return url.endsWith('.json')?json({commit}):new Response(url.endsWith('.txt')?'Sitemap: https://datonum.com/sitemap-index.xml':url.endsWith('.xml')?'<sitemapindex></sitemapindex>':'<title>Datonum</title><link rel="canonical" href="https://datonum.com/">');}});
  assert(result.verified);assert.equal(visited.length,6);
});
test('verification cannot be redirected to an unrelated origin',async()=>{
  await assert.rejects(()=>verifySite({origin:'https://other.example',commit}),/Unexpected/);
});
const script=fileURLToPath(new URL('../deploy/github-deploy.sh',import.meta.url));
async function fixture(){
  const dir=await fs.mkdtemp(path.join(os.tmpdir(),'datonum-deploy-'));
  await fs.mkdir(path.join(dir,'bin'));await fs.mkdir(path.join(dir,'repo'));await fs.mkdir(path.join(dir,'state'));
  await fs.writeFile(path.join(dir,'bin/flock'),'#!/bin/sh\nexit 0\n',{mode:0o755});
  const env={...process.env,PATH:`${dir}/bin:${process.env.PATH}`,DATONUM_DEPLOY_ROOT:`${dir}/repo`,DATONUM_DEPLOY_STATE:`${dir}/state`};
  return {dir,env,clean:()=>fs.rm(dir,{recursive:true,force:true})};
}
test('server rejects unsafe commit input before reading the checkout',()=>{
  const r=spawnSync('bash',[script,'deploy','main; touch /tmp/not-allowed'],{encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stderr,/Invalid commit/);
});
test('server refuses a dirty checkout without invoking Docker',async()=>{
  const f=await fixture();try{
    await fs.writeFile(`${f.dir}/bin/git`,'#!/bin/sh\ncase "$1" in branch) echo main;; status) echo " M user-file";; *) exit 99;; esac\n',{mode:0o755});
    await fs.writeFile(`${f.dir}/bin/docker`,'#!/bin/sh\necho SHOULD_NOT_RUN >&2\nexit 99\n',{mode:0o755});
    const r=spawnSync('bash',[script,'deploy',commit],{env:f.env,encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stderr,/local changes/);assert(!r.stderr.includes('SHOULD_NOT_RUN'));
  }finally{await f.clean();}
});
test('rollback refuses to replace a newer unrelated deployment',async()=>{
  const f=await fixture();try{
    const state=`${f.dir}/state/${commit}`;await fs.mkdir(state);await fs.writeFile(`${state}/previous-image`,'sha256:old');await fs.writeFile(`${state}/project`,'datonum_website');await fs.writeFile(`${state}/compose.yaml`,'services: {}');
    await fs.writeFile(`${f.dir}/bin/docker`,'#!/bin/sh\nif [ "$1" = inspect ]; then case "$3" in *revision*) echo cccccccccccccccccccccccccccccccccccccccc;; *) echo sha256:newer;; esac; else echo MUTATION_NOT_ALLOWED >&2; exit 99; fi\n',{mode:0o755});
    const r=spawnSync('bash',[script,'rollback',commit],{env:f.env,encoding:'utf8'});assert.notEqual(r.status,0);assert.match(r.stderr,/different deployment/);assert(!r.stderr.includes('MUTATION_NOT_ALLOWED'));
  }finally{await f.clean();}
});
