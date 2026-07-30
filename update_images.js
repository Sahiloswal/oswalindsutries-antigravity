const fs = require('fs');

const products = JSON.parse(fs.readFileSync('src/products.json', 'utf8'));

products.forEach(p => {
  // 1. Relink toughened goggles
  if (p.prodname.toLowerCase().includes('tough')) {
    p.image = '/products/TOUGHEND.jpg';
    if (!p.gallery) p.gallery = [];
    if (!p.gallery.includes('/products/TOUGHEND.jpg')) {
      p.gallery = ['/products/TOUGHEND.jpg', ...p.gallery.filter(img => img !== '/products/toughened case.png')];
    }
  }

  // 2. Add oswal make 1 & 2 to welding goggles, spectacle frames, furnace goggles
  const targetCategories = ['Welding Goggles', 'Spectacle Frames', 'Smelter/Furnace Safety'];
  if (targetCategories.includes(p.category)) {
    if (!p.gallery) {
      p.gallery = [p.image]; // initialize gallery with main image if empty
    }
    const newImages = ['/products/oswal make.png', '/products/oswal make 2.png'];
    
    newImages.forEach(img => {
      if (!p.gallery.includes(img)) {
        p.gallery.push(img);
      }
    });
  }
});

fs.writeFileSync('src/products.json', JSON.stringify(products, null, 2));
console.log('Successfully updated product images in products.json!');
