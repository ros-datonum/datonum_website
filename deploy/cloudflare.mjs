import {pathToFileURL} from 'node:url';

export async function cloudflare(mode, {token, zoneId, fetcher=fetch}={}) {
  if(!['check','purge'].includes(mode)) throw new Error('Expected check or purge');
  if(!token || !/^[a-f0-9]{32}$/i.test(zoneId??'')) throw new Error('CF_API_TOKEN and valid CF_ZONE_ID are required');
  const base=`https://api.cloudflare.com/client/v4/zones/${zoneId}`;
  const headers={Authorization:`Bearer ${token}`,'Content-Type':'application/json'};
  const zoneResponse=await fetcher(base,{headers,signal:AbortSignal.timeout(20000)});
  const zone=await zoneResponse.json();
  if(!zoneResponse.ok||zone.success!==true||zone.result?.name!=='datonum.com')throw new Error('Could not verify the Cloudflare datonum.com zone; no purge performed');
  if(mode==='check')return {verified:true};
  const response=await fetcher(`${base}/purge_cache`,{method:'POST',headers,body:JSON.stringify({purge_everything:true}),signal:AbortSignal.timeout(20000)});
  const result=await response.json();
  if(!response.ok||result.success!==true)throw new Error('Cloudflare did not confirm cache purge');
  return {purged:true};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(process.argv[1]).href){
  try{console.log(JSON.stringify(await cloudflare(process.argv[2],{token:process.env.CF_API_TOKEN,zoneId:process.env.CF_ZONE_ID})));}
  catch(e){console.error(e.message);process.exitCode=1;}
}
