const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const imagesDir = path.join(__dirname, 'public', 'products');

const files = fs.readdirSync(imagesDir).filter(f => f.endsWith('.png'));

// basic fuzzy matching helper
function getBestMatch(productName, category, files) {
    const searchString = `${productName} ${category}`.toLowerCase();
    
    // Exact matches or specific rules based on filename
    let bestFile = null;
    let highestScore = 0;

    files.forEach(file => {
        const fileLower = file.toLowerCase().replace('.png', '');
        let score = 0;
        
        // Count matching words
        const words = fileLower.split(' ');
        words.forEach(w => {
            if (w.length > 2 && searchString.includes(w)) {
                score++;
            }
        });
        
        // Special manual mapping overrides
        if (fileLower === '0 power' && searchString.includes('power')) score += 10;
        if (fileLower === '234 din' && searchString.includes('welding') && (searchString.includes(' 2 ') || searchString.includes(' 3 ') || searchString.includes(' 4 '))) score += 10;
        if (fileLower === '5 din' && searchString.includes('welding') && searchString.includes(' 5 ')) score += 10;
        if (fileLower === 'chemical splash' && searchString.includes('splash')) score += 10;
        if (fileLower === 'cobalt bluee goggle' && searchString.includes('cobalt')) score += 10;
        if (fileLower === 'cup type' && searchString.includes('cup')) score += 10;
        if (fileLower === 'dual face shield' && searchString.includes('dual')) score += 10;
        if (fileLower === 'flip up' && searchString.includes('flip')) score += 10;
        if (fileLower === 'supravision black' && searchString.includes('supravision') && searchString.includes('black')) score += 10;
        if (fileLower === 'supravision white' && searchString.includes('supravision') && searchString.includes('white')) score += 10;
        if (fileLower === 'toughened case' && searchString.includes('toughened')) score += 10;
        if (fileLower === 'ultravision' && searchString.includes('ultravision')) score += 10;
        
        if (score > highestScore) {
            highestScore = score;
            bestFile = file;
        }
    });
    
    return bestFile;
}

let updateCount = 0;
products.forEach(p => {
    const matchedFile = getBestMatch(p.prodname, p.category, files);
    if (matchedFile) {
        p.image = `/products/${matchedFile}`;
        updateCount++;
    }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log(`Mapped ${updateCount} product images successfully.`);
