import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const W = 1200, H = 630;
const canvas = createCanvas(W, H);
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#0d0f0e';
ctx.fillRect(0, 0, W, H);

ctx.beginPath();
ctx.arc(160, 315, 110, 0, Math.PI * 2);
ctx.fillStyle = '#2db52d';
ctx.fill();

ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = '#ffffff';
ctx.font = 'bold 96px "Times New Roman", serif';
ctx.fillText('MES', 160, 322);

ctx.textAlign = 'left';
ctx.textBaseline = 'alphabetic';
ctx.fillStyle = '#eae6de';
ctx.font = 'bold 64px Arial, sans-serif';
ctx.fillText('Mykado Engineering', 310, 295);

ctx.fillStyle = '#2db52d';
ctx.font = '34px Arial, sans-serif';
ctx.fillText('PROCUREMENT · OPERATIONS · ENGINEERING', 310, 355);

ctx.fillStyle = '#8c8a85';
ctx.font = '26px Arial, sans-serif';
ctx.fillText('mykado.org', 310, 405);

const out = join(__dirname, '../public/og-image.png');
writeFileSync(out, canvas.toBuffer('image/png'));
console.log('Written: public/og-image.png');
