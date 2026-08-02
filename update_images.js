const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src', 'products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

const productsDir = path.join(__dirname, 'public', 'products');

products.forEach(p => {
  const folderPath = path.join(productsDir, p.id);
  
  if (fs.existsSync(folderPath)) {
    const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(png|jpe?g)$/i));
    if (files.length > 0) {
      // Sort to have consistent main image if possible, or just pick first
      // Some folders might have something like "boss design .jpeg" which is generic, 
      // but let's just pick the first one that is NOT "boss design .jpeg" if possible
      let mainFile = files.find(f => !f.toLowerCase().includes('boss design')) || files[0];
      
      p.image = `/products/${p.id}/${mainFile}`;
      p.gallery = files.map(f => `/products/${p.id}/${f}`);
    } else {
      console.log(`No images found for ${p.id}`);
    }
  } else {
    console.log(`Folder not found for ${p.id}`);
  }
});

fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
console.log("Updated images and galleries for all products based on folder contents.");
