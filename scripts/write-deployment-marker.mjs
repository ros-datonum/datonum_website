import fs from 'node:fs/promises';
const commit=process.env.DEPLOY_SHA??'local';
if(commit!=='local'&&!/^[a-f0-9]{40}$/.test(commit))throw new Error('DEPLOY_SHA must be a full commit SHA or local');
await fs.writeFile('dist/deployment.json',JSON.stringify({commit})+'\n');
