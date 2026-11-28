// Cloudflare Pages helpers for the deploy workflow (wrangler does the upload itself).
//   node deploy/pages.mjs ensure      create the Pages project if it does not exist yet
//   node deploy/pages.mjs production  print the id of the current production deployment ("" if none)
//   node deploy/pages.mjs rollback ID make deployment ID the production deployment again
// Needs CLOUDFLARE_API_TOKEN (Account: Cloudflare Pages Edit), CLOUDFLARE_ACCOUNT_ID, PAGES_PROJECT.
import {pathToFileURL} from 'node:url';

export async function pages(mode, {token, accountId, project, id, fetcher=fetch}={}) {
  if(!['ensure','production','rollback'].includes(mode)) throw new Error('Expected ensure, production or rollback');
  if(!token || !/^[a-f0-9]{32}$/i.test(accountId??'')) throw new Error('CLOUDFLARE_API_TOKEN and a valid CLOUDFLARE_ACCOUNT_ID are required');
  if(!/^[a-z0-9][a-z0-9-]{0,57}$/.test(project??'')) throw new Error('A valid PAGES_PROJECT is required');
  const base=`https://api.cloudflare.com/client/v4/accounts/${accountId}/pages/projects`;
  const headers={Authorization:`Bearer ${token}`,'Content-Type':'application/json'};
  const call=async(url,opts={})=>{
    const response=await fetcher(url,{headers,signal:AbortSignal.timeout(20000),...opts});
    const body=await response.json().catch(()=>({}));
    return {status:response.status,ok:response.ok&&body.success===true,body};
  };
  if(mode==='ensure'){
    const existing=await call(`${base}/${project}`);
    if(existing.ok) return {project,created:false,subdomain:existing.body.result?.subdomain};
    if(existing.status!==404) throw new Error(`Could not read Pages project ${project} (HTTP ${existing.status})`);
    const created=await call(base,{method:'POST',body:JSON.stringify({name:project,production_branch:'main'})});
    if(!created.ok) throw new Error(`Cloudflare did not create Pages project ${project}`);
    return {project,created:true,subdomain:created.body.result?.subdomain};
  }
  if(mode==='production'){
    // canonical_deployment is what production serves now (after a rollback it is not the newest).
    const current=await call(`${base}/${project}`);
    if(!current.ok) throw new Error('Could not read the current production deployment');
    return {id:current.body.result?.canonical_deployment?.id??''};
  }
  if(!/^[a-f0-9-]{36}$/.test(id??'')) throw new Error('A deployment id is required for rollback');
  const rolled=await call(`${base}/${project}/deployments/${id}/rollback`,{method:'POST'});
  if(!rolled.ok) throw new Error('Cloudflare did not confirm the rollback');
  return {rolledBackTo:id};
}

if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  try{
    const result=await pages(process.argv[2],{token:process.env.CLOUDFLARE_API_TOKEN,accountId:process.env.CLOUDFLARE_ACCOUNT_ID,project:process.env.PAGES_PROJECT,id:process.argv[3]});
    console.log(process.argv[2]==='production'?result.id:JSON.stringify(result));
  }catch(e){console.error(e.message);process.exitCode=1;}
}
