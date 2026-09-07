import potrace from 'potrace';
import fs from 'fs';

potrace.trace('public/logos/logo-v2-1-truss-vigas.jpg', {
  threshold: 128,
  optCurve: true,
  turdSize: 5
}, (err, svg) => {
  if (err) throw err;
  fs.writeFileSync('public/traced_logo.svg', svg);
  console.log('Successfully traced full logo to public/traced_logo.svg! SVG length:', svg.length);
});
