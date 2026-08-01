const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const publicProductsDir = path.join(__dirname, 'public', 'products');

if (!fs.existsSync(publicProductsDir)) {
  fs.mkdirSync(publicProductsDir, { recursive: true });
}

products.forEach(p => {
  const productFolder = path.join(publicProductsDir, p.id);
  if (!fs.existsSync(productFolder)) {
    fs.mkdirSync(productFolder, { recursive: true });
  }

  // Helper to move file
  const moveFile = (oldUrl) => {
    if (!oldUrl) return null;
    const oldPath = path.join(__dirname, 'public', oldUrl.replace(/^\//, ''));
    if (fs.existsSync(oldPath)) {
      const fileName = path.basename(oldPath);
      const newPath = path.join(productFolder, fileName);
      if (oldPath !== newPath) {
        fs.copyFileSync(oldPath, newPath); // copy instead of rename to be safe for now
      }
      return `/products/${p.id}/${fileName}`;
    }
    return oldUrl;
  };

  if (p.image) {
    p.image = moveFile(p.image);
  }
  
  if (p.gallery && Array.isArray(p.gallery)) {
    p.gallery = p.gallery.map(img => moveFile(img));
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Images reorganized and products.json updated!');
