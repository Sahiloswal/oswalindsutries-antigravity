const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// Apply universal changes
products = products.map(p => {
    // 1 & 2 & 12: Certifications and Impact Resistance
    if (!p.datasheet) p.datasheet = {};
    let certs = ["CLI Approved", "IS 5983 / 1980"];
    
    // EN and ANSI for specific products
    const requiresEnAnsi = ['supravision', 'chemical splash', 'ultravision', 'over-the-spectacle'];
    if (requiresEnAnsi.some(n => p.prodname.toLowerCase().includes(n))) {
        certs.push("EN 166", "ANSI Z87.1");
    }
    p.datasheet.certifications = certs;

    // 8: Packaging
    p.datasheet.packaging = "10/12/15 nos per box - 300/400/1000 nos per carton";
    
    // 9: Storage
    p.datasheet.storage = "Do not store in direct / high heat or sunlight as this may distort the colour. Can be stored in the dark for up to 2 years. Can be stored and transported in their original cartons at ambient temperature (0° C to +30° C)";
    
    // 10: Cleaning
    p.datasheet.cleaning = "Use cloth given with the goggle or Clean it with a soft cloth";
    
    // 12: Impact Resistance
    p.datasheet.impactResistance = "Yes (CLI Approved)";

    // Modify features array to avoid mixing
    p.datasheet.keyFeatures = p.datasheet.keyFeatures || [];
    
    // Remove old conflicting info
    p.datasheet.keyFeatures = p.datasheet.keyFeatures.filter(f => 
        !f.includes('Storage:') && 
        !f.includes('Cleaning:') && 
        !f.includes('Packaging:') &&
        !f.includes('Disclaimer:') &&
        !f.includes('Maintenance:') &&
        !f.includes('Glass Thickness:') &&
        !f.includes('Modification:')
    );

    // 3: 3mm Thickness for specific products
    const requiresThickness = ['0 power', 'toughened', 'welding', 'furnace'];
    if (requiresThickness.some(n => p.prodname.toLowerCase().includes(n) || (p.category && p.category.toLowerCase().includes(n)))) {
        p.datasheet.keyFeatures.unshift("Glass Thickness: 3 mm (+/- 0.2mm tolerance)");
    }

    // 11: Optical class 1 and Filter
    if (p.category && p.category.toLowerCase().includes('welding') && p.prodname.toLowerCase().includes('din')) {
        p.datasheet.opticalClass = "1";
        const filterMatch = p.prodname.match(/(\d+)\s*DIN/i);
        if (filterMatch) {
            p.datasheet.filter = `Shade - ${filterMatch[1]}`;
        }
    }

    // 13: Cellulose Acetate Frame
    const requiresAcetate = ['welding', 'spectacle frame', 'flip up'];
    if (requiresAcetate.some(n => p.prodname.toLowerCase().includes(n) || (p.category && p.category.toLowerCase().includes(n)))) {
        p.datasheet.frameMaterial = "Cellulose Acetate";
    }

    // 14: Modifications
    p.datasheet.modifications = "Thread, elastic band, or any other (confirm before supply to all)";

    // 15: SMELTER/FURNACE SAFETY category
    if (p.prodname.toLowerCase().includes('furnace') || p.prodname.toLowerCase().includes('face shield') || p.prodname.toLowerCase().includes('helmet attachment') || p.prodname.toLowerCase().includes('smelter')) {
        p.category = "Smelter/Furnace Safety";
    }

    // 6: Temperature Resistance
    if (p.datasheet.keyFeatures.some(f => f.includes('1500'))) {
        p.datasheet.keyFeatures = p.datasheet.keyFeatures.map(f => f.replace(/1500[^\d]*C/gi, '400-1200°C (verify before order)'));
    }
    // Also check components for temperature
    if (p.datasheet.components) {
         p.datasheet.components = p.datasheet.components.map(c => {
             if (c.advantage && c.advantage.includes('1500')) {
                 c.advantage = c.advantage.replace(/1500[^\d]*C/gi, '400-1200°C (verify before order)');
             }
             return c;
         });
    }

    return p;
});

// Structural UI changes
// Remove variant economy
products = products.filter(p => !p.prodname.includes('Economy Glasses (Variant)'));
products = products.filter(p => !p.prodname.includes('Dark Blue Safety Goggles'));

// Rename
const ecoIdx = products.findIndex(p => p.id === '15');
if (ecoIdx > -1) {
    products[ecoIdx].prodname = "Oswal Boss fitted with grey glasses";
    products[ecoIdx].image = "/products/grey economy photo.png"; // We will fix extensions if needed
}

// 4 & 5 Image assignments
const helmetAttIdx = products.findIndex(p => p.prodname.toLowerCase().includes('helmet attachment'));
if (helmetAttIdx > -1) {
    products[helmetAttIdx].image = "/products/helmet attachment.png";
}
const faceShieldIdx = products.findIndex(p => p.prodname.toLowerCase().includes('face shield'));
if (faceShieldIdx > -1) {
    products[faceShieldIdx].image = "/products/face shield.png";
}

// Map safety 1st to Over-the-Spectacle
const otsIdx = products.findIndex(p => p.prodname.toLowerCase().includes('over-the-spectacle'));
if (otsIdx > -1) {
    products[otsIdx].image = "/products/safety 1st.png";
}

// Map peephole
const peepIdx = products.findIndex(p => p.prodname.toLowerCase().includes('peep'));
if (peepIdx > -1) {
    products[peepIdx].image = "/products/peephole glass.png";
}

// Adding Master Welding Products if they don't exist
if (!products.find(p => p.id === 'german-welding-goggles')) {
    products.push({
        id: "german-welding-goggles",
        prodname: "German Welding Goggles",
        category: "Welding Goggles",
        image: "/products/46.png", // German image base
        description: "High quality German-style welding goggles available in shades 4, 5, 6, and 9.",
        hasShadeSelector: true,
        shades: ["4", "5", "6", "9"],
        datasheet: {
            certifications: ["CLI Approved", "IS 5983 / 1980"],
            packaging: "10/12/15 nos per box - 300/400/1000 nos per carton",
            storage: "Do not store in direct / high heat or sunlight as this may distort the colour. Can be stored in the dark for up to 2 years. Can be stored and transported in their original cartons at ambient temperature (0° C to +30° C)",
            cleaning: "Use cloth given with the goggle or Clean it with a soft cloth",
            impactResistance: "Yes (CLI Approved)",
            frameMaterial: "Cellulose Acetate",
            modifications: "Thread, elastic band, or any other (confirm before supply to all)"
        }
    });
}

if (!products.find(p => p.id === 'athermal-welding-goggles')) {
    products.push({
        id: "athermal-welding-goggles",
        prodname: "Athermal Welding Goggles",
        category: "Welding Goggles",
        image: "/products/51.png", // Athermal image base
        description: "Premium Athermal-style welding goggles available in shades 2, 3, and 11.",
        hasShadeSelector: true,
        shades: ["2", "3", "11"],
        datasheet: {
            certifications: ["CLI Approved", "IS 5983 / 1980"],
            packaging: "10/12/15 nos per box - 300/400/1000 nos per carton",
            storage: "Do not store in direct / high heat or sunlight as this may distort the colour. Can be stored in the dark for up to 2 years. Can be stored and transported in their original cartons at ambient temperature (0° C to +30° C)",
            cleaning: "Use cloth given with the goggle or Clean it with a soft cloth",
            impactResistance: "Yes (CLI Approved)",
            frameMaterial: "Cellulose Acetate",
            modifications: "Thread, elastic band, or any other (confirm before supply to all)"
        }
    });
}

// Hide individual DIN items from the main catalog list but keep them for datasheet lookup
// We will modify the UI to filter out products with `isSubProduct: true`
products = products.map(p => {
    if (p.id.startsWith('welding-din-')) {
        p.isSubProduct = true;
    }
    return p;
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Database restructuring complete!');
