const fs = require('fs');
const path = require('path');
const { transform } = require('lightningcss');

const srcFile = path.join(__dirname, 'src', 'css-animation-directions.css');
const distDir = path.join(__dirname, 'dist');

// Read source
const source = fs.readFileSync(srcFile, 'utf8');

// Ensure dist directory exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Unminified — just normalize formatting
const { code: unminified } = transform({
  filename: 'css-animation-directions.css',
  code: Buffer.from(source),
  minify: false,
});

fs.writeFileSync(path.join(distDir, 'css-animation-directions.css'), unminified);

// Minified
const { code: minified } = transform({
  filename: 'css-animation-directions.css',
  code: Buffer.from(source),
  minify: true,
});

fs.writeFileSync(path.join(distDir, 'css-animation-directions.min.css'), minified);

console.log('Build complete:');
console.log(`  dist/css-animation-directions.css     ${unminified.length} bytes`);
console.log(`  dist/css-animation-directions.min.css ${minified.length} bytes`);
