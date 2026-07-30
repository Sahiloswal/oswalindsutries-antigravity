const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

const flipUpIndex = products.findIndex(p => p.id === '7' || p.prodname.toLowerCase().includes('flip'));

if (flipUpIndex !== -1) {
  products[flipUpIndex].datasheet = {
    ...products[flipUpIndex].datasheet,
    certifications: ["CLI Approved", "IS 5983 Approved", "EN 166", "CE", "ANSI Z87.1 Compliant"],
    keyFeatures: [
      "Design: Flip-up style dual-lens system (Inner clear lens & Outer shade 5 black lens)",
      "Frame Construction: Soft, flexible PVC frame paired with rugged ABS eyecups",
      "UV Shielding: Blocks 99.9% of hazardous UV radiation",
      "Impact Rating: Medium velocity impact resistance (Rated B - 120m/s)",
      "Comfort: Universal soft nose bridge and ergonomic frame that naturally contours to the face for extended wear",
      "Ventilation: Integrated air-circulation system that prevents fogging while keeping dust out",
      "Fitment: Equipped with a fully adjustable headband to accommodate all head sizes securely",
      "Over-the-glass compatible: Spacious enough to be worn comfortably over most prescription spectacles",
      "Optical Clarity: Class 1 optical quality for distortion-free vision",
      "Weight: Ultra-lightweight profile (Approx. 120g)",
      "Disclaimer: Ensure the product is suitable for the specific application before use. Always perform a risk assessment.",
      "Maintenance: Inspect before every use. Replace if damaged, scratched, or if the frame is compromised.",
      "Storage: Store in a dry, dark, and clean environment at ambient temperature (0°C to +30°C). Avoid direct sunlight or high heat.",
      "Cleaning: Gently wipe lenses with a soft micro-fiber cloth",
      "Packaging: 50 units per master carton"
    ],
    applications: [
      "Light to medium gas welding and cutting",
      "Torch brazing and spot welding",
      "Furnace observation and smelting operations",
      "Protection against flying debris, sparks, and liquid splashes",
      "General grinding and outdoor industrial work"
    ],
    components: [
      { name: "Lenses", material: "High-grade Impact Resistant Polycarbonate", advantage: "Dual-lens design (Clear inner, Shade 5 dark outer)" },
      { name: "Frame & Body", material: "Flexible PVC", advantage: "Skin-friendly, comfortable fit in our signature RED color" },
      { name: "Eyecups", material: "Premium ABS", advantage: "Durable structural integrity against impacts" }
    ],
    industries: [
      "Oil & Gas",
      "Iron & Steel",
      "Pharmaceuticals",
      "Automotive",
      "Power & Utilities",
      "Manufacturing"
    ]
  };
  
  // also make sure subtitle and description are good
  products[flipUpIndex].subtitle = "Flip-Up Welding Goggles (Red)";
  products[flipUpIndex].description = "Premium flip-up welding goggles offering dual-lens versatility. Features a clear inner lens for grinding and a flip-down Shade 5 outer lens for welding, built into a comfortable, skin-friendly red PVC frame.";
  
  fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
  console.log("Flip-up product updated successfully with unique touch!");
} else {
  console.log("Product not found.");
}
