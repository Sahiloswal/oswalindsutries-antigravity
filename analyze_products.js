const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

console.log("--- Welding Goggles ---");
products.filter(p => p.category === 'Welding Goggles').forEach(p => console.log(`${p.id}: ${p.prodname} (Shade: ${p.shade})`));

console.log("\n--- Safety Goggles ---");
products.filter(p => p.category === 'Safety Goggles').forEach(p => console.log(`${p.id}: ${p.prodname}`));

console.log("\n--- Spectacle Frames ---");
products.filter(p => p.category === 'Spectacle Frames').forEach(p => console.log(`${p.id}: ${p.prodname}`));

console.log("\n--- Peephole ---");
products.filter(p => p.prodname.toLowerCase().includes('peep')).forEach(p => console.log(`${p.id}: ${p.prodname}`));
