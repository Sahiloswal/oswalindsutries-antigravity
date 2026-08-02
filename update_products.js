const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, 'src', 'products.json');
let products = JSON.parse(fs.readFileSync(productsFile, 'utf8'));

// Find and split ID 4 (Dual Face Shield)
const id4Index = products.findIndex(p => p.id === '4' || p.id === 'dual-face-shield-furnace');
if (id4Index !== -1) {
  const pBlue = JSON.parse(JSON.stringify(products[id4Index]));
  pBlue.id = 'dual-face-shield-furnace-blue';
  pBlue.prodname = 'Oswal Dual Face Shield for Furnace - Blue';
  pBlue.image = '/products/dual-face-shield-furnace-blue/dual face shield.jpeg';
  pBlue.gallery = [
    '/products/dual-face-shield-furnace-blue/dual face shield.jpeg',
    '/products/dual-face-shield-furnace-blue/WhatsApp_Image_2026-08-01_at_11.40.57_202608012345.jpeg'
  ];

  const pGreen = JSON.parse(JSON.stringify(products[id4Index]));
  pGreen.id = 'dual-face-shield-furnace-green';
  pGreen.prodname = 'Oswal Dual Face Shield for Furnace - Green';
  pGreen.image = '/products/dual-face-shield-furnace-green/green dual face shield.jpeg';
  pGreen.gallery = [
    '/products/dual-face-shield-furnace-green/green dual face shield.jpeg',
    '/products/dual-face-shield-furnace-green/green 2- fs -01.jpeg',
    '/products/dual-face-shield-furnace-green/green 2-fs.jpeg'
  ];
  pGreen.datasheet.lensOptions = "Dual-layer: Outer clear PC + Inner Green filter";

  // Replace ID 4 with blue, and add green
  products[id4Index] = pBlue;
  products.splice(id4Index + 1, 0, pGreen);
}

// Find and split ID 5 (Observation Shield)
const id5Index = products.findIndex(p => p.id === '5' || p.id === 'furnace-observation-shield');
if (id5Index !== -1) {
  const pBlue = JSON.parse(JSON.stringify(products[id5Index]));
  pBlue.id = 'furnace-observation-shield-blue';
  pBlue.prodname = 'Oswal Furnace Observation Shield - Blue';
  pBlue.image = '/products/furnace-observation-shield-blue/furnace shield 101.jpeg';
  pBlue.gallery = [
    '/products/furnace-observation-shield-blue/furnace shield 101.jpeg',
    '/products/furnace-observation-shield-blue/fs 03.jpeg',
    '/products/furnace-observation-shield-blue/fs 04.jpeg',
    '/products/furnace-observation-shield-blue/fs smelt 02.jpeg'
  ];

  const pGreen = JSON.parse(JSON.stringify(products[id5Index]));
  pGreen.id = 'furnace-observation-shield-green';
  pGreen.prodname = 'Oswal Furnace Observation Shield - Green';
  pGreen.image = '/products/furnace-observation-shield-green/green 01  (1).jpeg';
  pGreen.gallery = [
    '/products/furnace-observation-shield-green/green 01  (1).jpeg',
    '/products/furnace-observation-shield-green/green 02.jpeg',
    '/products/furnace-observation-shield-green/green 03.jpeg',
    '/products/furnace-observation-shield-green/green 04.jpeg',
    '/products/furnace-observation-shield-green/green 05.jpeg'
  ];
  pGreen.datasheet.lensOptions = "Green / Athermal Filter Glass — Full-face visor";

  // Replace ID 5 with blue, and add green
  products[id5Index] = pBlue;
  products.splice(id5Index + 1, 0, pGreen);
}

// Add OSWAL Leather Supervisor
const leatherProduct = {
  id: "oswal-leather-supervisor",
  prodname: "OSWAL Smelter Supervisor Observation Shield",
  category: "Smelter/Furnace Safety",
  subtitle: "Heavy-Duty Leather Viewing Aid",
  description: "Specialized high-temperature viewing aid for supervisors and engineers inspecting furnaces and molten metal operations. Manufactured from heavy-duty heat-resistant leather, hand stitched for rigidity and durability.",
  datasheet: {
    certifications: [
      "CLI Approved",
      "IS 5983 / 1980"
    ],
    highlights: [
      "Heat-resistant Leather",
      "Hand Stitched",
      "Replaceable Lenses",
      "High Optical Clarity",
      "Lightweight Ergonomic Design"
    ],
    keyFeatures: [
      "Overall Size: 195 × 80 mm",
      "Viewing Holes: 2 × 55 mm diameter",
      "Leather: Heat-resistant stiff leather, hand stitched",
      "Lens: German Cobalt Blue Glass (standard); Optional German Green Glass",
      "Lens Thickness: 3 mm / 4 mm / 5 mm",
      "Exclusive product manufactured by Oswal Industries in India"
    ],
    applications: [
      "Furnace observation and process monitoring",
      "Smelting and casting inspection",
      "Proximity operation near molten metal",
      "Monitoring of high-temperature industrial processes"
    ],
    industries: [
      "Steel plants",
      "Foundries",
      "Aluminium and copper smelters",
      "Blast furnaces",
      "Induction furnaces",
      "Rolling mills",
      "Glass plants and heat treatment facilities"
    ],
    packaging: "10 / 12 / 15 nos per inner box — 300 / 400 / 1000 nos per master carton",
    storage: "Shelf Life: Up to 36 months (recommended storage in original manufacturer cartons at ambient temperature 0°C to +30°C).",
    cleaning: "Clean the lens using a dry, lint-free soft cloth. Do not use solvents or abrasives.",
    impactResistance: "Yes (CLI Approved)",
    modifications: "German Green Glass (optional)",
    components: [
      {
        "name": "Body",
        "material": "Heat-resistant stiff leather",
        "advantage": "Rigid, durable, and highly heat-resistant"
      },
      {
        "name": "Lenses",
        "material": "German Cobalt Blue Glass (Standard)",
        "advantage": "High optical clarity for inspecting molten metals"
      }
    ],
    usage: "Specialized viewing aid designed for supervisors and engineers inspecting high-temperature furnaces and molten metal operations.",
    "lensOptions": "German Cobalt Blue Glass (standard); Optional German Green Glass",
    opticalClass: "Class 1",
    glassThickness: "3 mm / 4 mm / 5 mm",
    weight: "Lightweight"
  },
  image: "/products/OSWAL-leather-supervisor/leather.jpeg",
  gallery: [
    "/products/OSWAL-leather-supervisor/leather.jpeg",
    "/products/OSWAL-leather-supervisor/leather 02.jpeg",
    "/products/OSWAL-leather-supervisor/leater 1010.jpeg"
  ]
};

if (!products.some(p => p.id === 'oswal-leather-supervisor')) {
  products.push(leatherProduct);
}

fs.writeFileSync(productsFile, JSON.stringify(products, null, 2));
console.log("products.json updated successfully.");
