import { readFile } from 'fs/promises';
import { query, end, createFakeSignature } from './db.js';

const schemaFile = './sql/schema.sql';

async function create() {
  const data = await readFile(schemaFile);

  for (let i = 0; i < 500; i += 1) {
    createFakeSignature();
  }

  await query(data.toString('utf-8'));
  await end();

  console.info('Schema created');
}

create().catch((err) => {
  console.error('Error creating schema', err);
});
