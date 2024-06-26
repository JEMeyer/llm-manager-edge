import { readFile, writeFile } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '..', 'main.js');
const shebang = '#!/usr/bin/env node\n';

// Used due to the fact this is an npm package
readFile(filePath, 'utf8', (err, data) => {
  if (err) throw err;
  if (!data.startsWith(shebang)) {
    const updatedData = shebang + data;
    writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) throw err;
      console.log('Shebang line added to main.js');
    });
  }
});
