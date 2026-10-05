// Export only the files required by the current LP; local editing files stay private.
import { mkdir, readFile, copyFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, 'dist');
await mkdir(join(output, 'assets'), { recursive: true });
const html = await readFile(join(root, 'income.html'), 'utf8');
await writeFile(join(output, 'index.html'), html);
await writeFile(join(output, 'income.html'), html);
for (const file of ['style.css', 'app.js', 'config.js', 'copy-review.css', 'copy-review.js', 'assets/genkaku-icon.jpg', 'assets/favicon.svg']) {
  await copyFile(join(root, file), join(output, file));
}
console.log('Public LP prepared in dist/');
