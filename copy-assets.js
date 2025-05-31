// Script to copy assets to the dist folder during build
import { copyFileSync, existsSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Paths
const srcAssetsDir = join(__dirname, 'src', 'assets');
const distAssetsDir = join(__dirname, 'dist', 'assets');

// Ensure the dist/assets directory exists
if (!existsSync(distAssetsDir)) {
  mkdirSync(distAssetsDir, { recursive: true });
}

// Files to copy
const filesToCopy = [
  'iot_project_pdf.pdf',
  'capestone_project_pdf.pdf',
];

// Copy files
console.log('Copying asset files to dist/assets...');
filesToCopy.forEach(file => {
  const srcPath = join(srcAssetsDir, file);
  const distPath = join(distAssetsDir, file);
  try {
    copyFileSync(srcPath, distPath);
    console.log(`Successfully copied: ${file}`);
  } catch (err) {
    console.error(`Failed to copy ${file}: ${err.message}`);
  }
});

console.log('Asset copying complete!');
