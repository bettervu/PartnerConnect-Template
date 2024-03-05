import fs from 'fs';
import schema from './schema';
/*
  Pre-Pack script to generate any last minute items that need to go into the package
*/

async function run() {
  fs.promises.writeFile('./lib/schema.json', JSON.stringify(schema));
}

run();
