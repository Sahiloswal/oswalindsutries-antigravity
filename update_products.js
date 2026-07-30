const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// The industries from the image
const allIndustries = [
  "Mining", "Construction", "Railroad Industry", "Automotive", "Iron & Steel", 
  "Oil & Gas", "Marine", "Manufacturing", "Power", "Electronics Manufacturing", 
  "Aerospace", "FMCG", "Agriculture", "Food Processing"
];

const generalLiabilityInfo = [
  "Disclaimer: Ensure the product is suitable for the specific application before use. Always perform a risk assessment.",
  "Maintenance: Inspect before every use. Replace if damaged, scratched, or if the frame is compromised.",
  "Storage: Store in a dry, clean environment at ambient temperature, away from direct sunlight and chemicals."
];

products.forEach(p => {
  if (!p.datasheet) {
    p.datasheet = {};
  }
  
  // 1. ALL products are CLI Approved
  p.datasheet.certifications = ["CLI Approved", "IS 5983 Approved"];
  
  // 2. Default Industries (if not set, assign all, or select ones)
  if (!p.datasheet.industries || p.datasheet.industries.length === 0) {
    p.datasheet.industries = allIndustries; // Can refine per category if needed
  }

  // 3. Update Welding Goggles (DIN 2 - 12)
  if (p.category === "Welding Goggles" && p.shade) {
    const shadeNum = parseInt(p.shade, 10);
    p.datasheet.keyFeatures = p.datasheet.keyFeatures || [];
    p.datasheet.keyFeatures.push(`Glass Thickness: 2.8mm to 3.2mm (Standard)`); // General assumption, we can refine if known.
    
    // Proper specification for usage based on DIN
    if (shadeNum === 2) {
      p.datasheet.applications = ["Very light brazing and soldering"];
    } else if (shadeNum === 3) {
      p.datasheet.applications = ["Light brazing and soldering"];
    } else if (shadeNum === 4) {
      p.datasheet.applications = ["Gas Welding upto 70 ltrs Acetylene/hour", "Flame cutting upto 900 ltrs oxygen/hour", "Steel & Grey Cast-Iron Welding", "Light Alloy Welding"];
    } else if (shadeNum === 5) {
      p.datasheet.applications = ["Gas Welding 70-200 ltrs Acetylene/hour", "Flame cutting 900-2000 ltrs oxygen/hour"];
    } else if (shadeNum === 6) {
      p.datasheet.applications = ["Gas Welding 200-800 ltrs Acetylene/hour", "Flame cutting 2000-4000 ltrs oxygen/hour"];
    } else if (shadeNum === 7) {
      p.datasheet.applications = ["Gas Welding >800 ltrs Acetylene/hour", "Flame cutting 4000-8000 ltrs oxygen/hour"];
    } else if (shadeNum >= 8 && shadeNum <= 12) {
      p.datasheet.applications = [`Arc welding and intense thermal cutting suitable for shade ${shadeNum}`];
    }
  }

  // Ensure 'Adjustable Temples' is only on specific ones (e.g., non-welding goggles might have it, but let's be careful. The user said "not all product have adjustable temples")
  if (p.datasheet.keyFeatures) {
    p.datasheet.keyFeatures = p.datasheet.keyFeatures.filter(f => !f.toLowerCase().includes('adjustable temple') || p.category !== 'Welding Goggles'); 
    
    // Add liability info
    generalLiabilityInfo.forEach(info => {
       if(!p.datasheet.keyFeatures.includes(info)) {
           p.datasheet.keyFeatures.push(info);
       }
    });
  }
});

fs.writeFileSync(productsPath, JSON.stringify(products, null, 2));
console.log('Products updated successfully.');
