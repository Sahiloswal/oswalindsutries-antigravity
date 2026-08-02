const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src', 'products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

products.forEach(p => {
  if (p.image) {
    const parts = p.image.split('/');
    // e.g. "/products/toughened-case/TOUGHEND.jpg" -> ["", "products", "toughened-case", "TOUGHEND.jpg"]
    if (parts.length >= 4 && parts[1] === 'products') {
      const folderName = parts[2];
      if (p.id !== folderName) {
        console.log(`Updating id: ${p.id} -> ${folderName}`);
        p.id = folderName;
      }
    }
  }
});

fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
console.log("Updated products.json IDs to match folder names.");
