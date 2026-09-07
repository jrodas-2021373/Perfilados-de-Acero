import fs from 'fs';

const rawSvg = fs.readFileSync('public/traced_logo.svg', 'utf-8');
const pathDataMatch = rawSvg.match(/<path d="([^"]+)"/);
const fullD = pathDataMatch[1];
const subpaths = fullD.split(/(?=M\s)/);

const symbolSubpaths = [];
let overallMinX = Infinity, overallMaxX = -Infinity;
let overallMinY = Infinity, overallMaxY = -Infinity;

for (const sub of subpaths) {
  const coords = sub.match(/-?\d+(?:\.\d+)?/g);
  if (!coords) continue;
  
  let maxY = 0;
  for (let i = 1; i < coords.length; i += 2) {
    const y = parseFloat(coords[i]);
    if (y > maxY) maxY = y;
  }

  if (maxY < 770) {
    symbolSubpaths.push(sub);
    for (let i = 0; i < coords.length; i += 2) {
      const x = parseFloat(coords[i]);
      const y = parseFloat(coords[i+1]);
      if (x < overallMinX) overallMinX = x;
      if (x > overallMaxX) overallMaxX = x;
      if (y < overallMinY) overallMinY = y;
      if (y > overallMaxY) overallMaxY = y;
    }
  }
}

console.log('Bounds:', { overallMinX, overallMaxX, overallMinY, overallMaxY });
const width = overallMaxX - overallMinX;
const height = overallMaxY - overallMinY;
console.log('Width:', width, 'Height:', height);

// Perfectly centered viewBox with 5% padding:
const padding = 20;
const vbX = Math.floor(overallMinX - padding);
const vbY = Math.floor(overallMinY - padding);
const vbW = Math.ceil(width + padding * 2);
const vbH = Math.ceil(height + padding * 2);

const symbolSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vbX} ${vbY} ${vbW} ${vbH}" fill="currentColor">
  <path d="${symbolSubpaths.join(' ')}" fill-rule="evenodd"/>
</svg>`;

// Favicon: badge with dark charcoal background (#020617), pure white symbol centered
// Let's fit width & height into a 100x100 square with 18px padding (content size 64x64)
const scale = 64 / Math.max(width, height);
const offsetX = (100 - width * scale) / 2 - overallMinX * scale;
const offsetY = (100 - height * scale) / 2 - overallMinY * scale;

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" rx="22" fill="#020617"/>
  <g transform="translate(${offsetX.toFixed(2)}, ${offsetY.toFixed(2)}) scale(${scale.toFixed(4)})" fill="#ffffff">
    <path d="${symbolSubpaths.join(' ')}" fill-rule="evenodd"/>
  </g>
</svg>`;

fs.writeFileSync('public/logo-symbol.svg', symbolSvg);
fs.writeFileSync('public/favicon.svg', faviconSvg);
console.log('Updated with exact bounds!');
