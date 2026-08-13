import { execFileSync } from 'node:child_process';
import fs from 'node:fs';

const raw = fs.readFileSync('wrangler.jsonc', 'utf8').replace(/\/\/.*$/gm, '');
const config = JSON.parse(raw);
const provider = config.vars?.DATABASE_PROVIDER ?? 'd1';

if (provider !== 'd1') {
  console.log(`Skipping remote migrations (DATABASE_PROVIDER=${provider})`);
  process.exit(0);
}

const dbName = config.d1_databases?.[0]?.database_name;
if (!dbName) {
  console.error('No d1_databases[0].database_name in wrangler.jsonc');
  process.exit(1);
}

execFileSync(
  'pnpm',
  ['exec', 'wrangler', 'd1', 'migrations', 'apply', dbName, '--remote'],
  { stdio: 'inherit' }
);
