const fs = require('fs');
const path = require('path');

const productsPath = path.join(__dirname, 'src', 'products.json');
let products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));

// ============================================================
// MASTER EXPERT DATA — Written as a professional safety industry head
// ============================================================

// Universal cartons — specific breakdown
const PACKAGING = "10 / 12 / 15 nos per inner box — 300 / 400 / 1000 nos per master carton";

const STORAGE = "Do not store in direct or high heat / sunlight as prolonged exposure may distort the frame geometry or lens tint. Suitable for dark storage for up to 2 years. Can be stored and transported in original manufacturer cartons at ambient temperature (0°C to +30°C).";

const CLEANING = "Clean the lens using the soft cloth supplied with the product. For field cleaning, use a dry, lint-free soft cloth. Do not use solvents, abrasives, or compressed air on the lens surface.";

// ============================================================
// EXPERT DATA FOR EACH PRODUCT
// Key fields: components, keyFeatures, applications, industries, usage, 
//             lensOptions, opticalClass, weight, certifications
// ============================================================

const EXPERT_DATA = {

  // ─────────────────────────────────────────────────────
  // WELDING GOGGLES (DIN 2–12) — All marked isSubProduct
  // ─────────────────────────────────────────────────────
  "welding-din-2": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Chemical & sweat resistant, dimensionally stable under prolonged heat exposure" },
      { name: "Lens", material: "2 DIN Toughened Filter Glass", advantage: "Filters UV and mild IR radiation — optimal for very low-intensity flame operations" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure, adjustable fit for all-day comfort" },
      { name: "Lens Surround", material: "Cellulose Acetate", advantage: "Dual-lens housing with secure lock mechanism" }
    ],
    lensOptions: "2 DIN (Shade 2) — Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 2",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 85 g",
    keyFeatures: [
      "Filter: Shade 2 — Class 1 Optical Quality glass",
      "Frame material: Cellulose Acetate — skin-safe, lightweight, heat resistant",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Suitable for very light brazing, soldering, and low-intensity UV exposures",
      "Embossed OSWAL marking for product authenticity",
      "Perforated side protection mesh for enhanced peripheral coverage",
      "Integrated smooth frame nose area for comfortable extended wear",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Very light gas brazing and soldering operations",
      "Torch brazing with low-intensity flame",
      "Light inspection tasks in mildly illuminated industrial environments",
      "Laboratory glasswork and light flame operations"
    ],
    usage: "Suitable for operators performing very low-intensity flame work such as light soldering and brazing where UV exposure is minimal. Shade 2 provides the lightest filtration in the welding goggle range.",
    industries: ["Jewellery Manufacturing", "Laboratory & Research", "HVAC", "Plumbing", "General Fabrication", "Food Processing Equipment Maintenance"]
  },

  "welding-din-3": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Chemical & sweat resistant, dimensionally stable under prolonged heat exposure" },
      { name: "Lens", material: "3 DIN Toughened Filter Glass", advantage: "Filters UV and mild IR radiation — suitable for light gas welding and brazing" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure, adjustable fit for all-day comfort" },
      { name: "Side Shields", material: "Cellulose Acetate with perforated mesh", advantage: "Additional protection from spatter and peripheral radiation" }
    ],
    lensOptions: "3 DIN (Shade 3) — Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 3",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 85 g",
    keyFeatures: [
      "Filter: Shade 3 — Class 1 Optical Quality glass",
      "Frame material: Cellulose Acetate — skin-safe, lightweight, heat resistant",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Athermal shade — used in low-intensity gas welding and flame cutting upto 70 ltrs Acetylene/hour",
      "Suitable for Acetylene/Oxygen equipment at low pressure settings",
      "Embossed OSWAL marking for product authenticity",
      "Perforated side protection mesh for enhanced peripheral coverage",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Light gas welding up to 70 litres Acetylene/hour",
      "Light flame cutting up to 900 litres Oxygen/hour",
      "Soldering and light brazing operations",
      "Steel tack welding at low intensity"
    ],
    usage: "Shade 3 is an athermal class goggle intended for light brazing, torch soldering, and low-intensity gas welding tasks. Provides a clearer view while blocking UV and early-stage IR radiation.",
    industries: ["Automotive", "Plumbing & HVAC", "Metal Fabrication", "General Manufacturing", "Railroad Maintenance"]
  },

  "welding-din-4": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Heat-stable, lightweight, chemical resistant — built for demanding industrial environments" },
      { name: "Lens", material: "4 DIN German Toughened Filter Glass", advantage: "Blocks UV & IR radiation from gas welding up to 70 ltrs Acetylene/hour — German optical quality" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Prevents hot spatter ingress while maintaining airflow" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Universal fit with secure retention for industrial use" }
    ],
    lensOptions: "4 DIN (Shade 4) — German Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 4",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 90 g",
    keyFeatures: [
      "Filter: Shade 4 — Class 1 German Optical Quality glass",
      "Frame material: Cellulose Acetate — chemical resistant, heat stable",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Suitable for Gas Welding up to 70 ltrs Acetylene/hour",
      "Suitable for Flame Cutting up to 900 ltrs Oxygen/hour",
      "Ideal for Steel & Grey Cast-Iron Welding",
      "Suitable for Light Alloy Welding",
      "Embossed OSWAL marking for authenticity",
      "Perforated side protection mesh — peripheral safety",
      "Adjustable side shield — open/closed position",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Gas Welding up to 70 litres Acetylene/hour",
      "Flame Cutting up to 900 litres Oxygen/hour",
      "Steel & Grey Cast-Iron Welding",
      "Light Alloy Welding",
      "Torch Brazing and Silver Soldering"
    ],
    usage: "Shade 4 German Welding Goggles are the entry point of the German series. Designed for standard gas welding and cutting operations involving steel, cast iron, and light alloys. Delivers superior optical clarity with German-grade filter glass.",
    industries: ["Iron & Steel", "Automotive", "Heavy Engineering", "Metal Fabrication", "Shipbuilding", "Construction Equipment", "Railways"]
  },

  "welding-din-5": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Heat-stable, lightweight, chemical resistant" },
      { name: "Lens", material: "5 DIN German Toughened Filter Glass", advantage: "Optimal UV & IR filtration for medium-intensity gas welding operations" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Peripheral spatter and heat protection" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure all-day fit" }
    ],
    lensOptions: "5 DIN (Shade 5) — German Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 5",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 90 g",
    keyFeatures: [
      "Filter: Shade 5 — Class 1 German Optical Quality glass",
      "Frame material: Cellulose Acetate",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Suitable for Gas Welding above 70 ltrs Acetylene/hour",
      "Suitable for Flame Cutting above 900 ltrs Oxygen/hour",
      "Heavy Steel Welding and structural fabrication",
      "Used for Cutting and welding of thick sections",
      "Embossed OSWAL marking for authenticity",
      "Perforated side protection mesh",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Gas Welding above 70 litres Acetylene/hour",
      "Flame Cutting above 900 litres Oxygen/hour",
      "Heavy Structural Steel Welding",
      "Thick Section Metal Cutting",
      "Oxy-fuel operations at higher pressures"
    ],
    usage: "Shade 5 is designed for higher intensity gas welding and cutting operations beyond 70 ltrs Acetylene/hour. The deeper shade ensures adequate protection against intense UV, visible, and IR radiation in structural fabrication environments.",
    industries: ["Structural Steel", "Shipbuilding", "Railways", "Heavy Engineering", "Construction", "Power Plants"]
  },

  "welding-din-6": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Heat-stable, chemical resistant, ideal for long-duration industrial wear" },
      { name: "Lens", material: "6 DIN German Toughened Filter Glass", advantage: "Heavy-duty radiation filtration for intense gas welding and oxygen cutting" },
      { name: "Side Shields", material: "Cellulose Acetate with mesh vents", advantage: "Full peripheral protection against sparks and spatter" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Adjustable universal fit" }
    ],
    lensOptions: "6 DIN (Shade 6) — German Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 6",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 90 g",
    keyFeatures: [
      "Filter: Shade 6 — Class 1 German Optical Quality glass",
      "Frame material: Cellulose Acetate",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Designed for heavy-duty gas welding and high-volume cutting operations",
      "Suitable for oxy-fuel processes at high pressures and flow rates",
      "Protects against intense UV, visible, and infrared radiation",
      "Embossed OSWAL marking for authenticity",
      "Perforated side protection mesh",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Heavy-duty gas welding at high intensity",
      "High-volume oxygen cutting operations",
      "Plate cutting and structural fabrication",
      "Industrial boiler and pressure vessel welding"
    ],
    usage: "Shade 6 provides the heaviest filtration in the German standard gas welding range. Intended for high-intensity oxy-fuel operations, thick plate cutting, and heavy structural welding where maximum UV, visible, and IR attenuation is required.",
    industries: ["Boilermaking", "Pressure Vessel Manufacturing", "Shipbuilding", "Heavy Industry", "Power Generation", "Defense Manufacturing"]
  },

  "welding-din-9": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Robust industrial frame — dimensionally stable in high-heat environments" },
      { name: "Lens", material: "9 DIN German Toughened Filter Glass", advantage: "Deep-shade optical glass for arc and heavy-radiation protection" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Comprehensive peripheral protection against spatter and intense light" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure, adjustable retention for industrial use" }
    ],
    lensOptions: "9 DIN (Shade 9) — German Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 9",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 95 g",
    keyFeatures: [
      "Filter: Shade 9 — Class 1 German Optical Quality glass",
      "Frame material: Cellulose Acetate",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Designed for arc welding and high-amperage operations",
      "Protects against intense arc flash, UV, and IR radiation",
      "Suitable for MIG, TIG, and arc welding at medium amperage",
      "Embossed OSWAL marking for authenticity",
      "Perforated side protection mesh",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Electric arc welding at medium amperage",
      "MIG and TIG welding operations",
      "Plasma arc cutting",
      "High-intensity welding in heavy fabrication"
    ],
    usage: "Shade 9 delivers deep optical attenuation for electric arc and plasma-based welding operations. Provides robust protection against arc flash, intense UV and IR radiation in high-amperage processes.",
    industries: ["Iron & Steel", "Automotive Manufacturing", "Aerospace", "Defense", "Heavy Fabrication", "Shipbuilding"]
  },

  "welding-din-11": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Heat-stable, robust industrial grade construction" },
      { name: "Lens", material: "11 DIN Athermal Toughened Filter Glass", advantage: "Maximum athermal shade protection for very high-intensity arc welding" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Full peripheral protection from intense arc flash" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Adjustable secure retention" }
    ],
    lensOptions: "11 DIN (Shade 11) — Athermal Toughened Filter Glass",
    opticalClass: "Class 1",
    filter: "Shade 11",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 95 g",
    keyFeatures: [
      "Filter: Shade 11 — Class 1 Athermal Optical Quality glass",
      "Frame material: Cellulose Acetate",
      "Glass Thickness: 3 mm (±0.2 mm)",
      "Maximum protection athermal filter for very high-amperage arc welding",
      "Suitable for heavy-duty TIG, MIG, plasma arc at high amperage",
      "Protects against extreme UV, visible arc flash, and intense IR radiation",
      "Embossed OSWAL marking for authenticity",
      "Perforated side protection mesh",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Heavy-duty arc welding at high amperage (above 200A)",
      "High-intensity plasma cutting and welding",
      "Carbon arc gouging",
      "Intensive MIG/TIG welding in industrial environments"
    ],
    usage: "Shade 11 is the deepest athermal shade available in the OSWAL range. Designed for the most demanding arc welding environments where intense radiation, arc flash, and UV exposure are at their highest.",
    industries: ["Heavy Engineering", "Defense Manufacturing", "Shipbuilding", "Aerospace", "Steel Plants", "Large-scale Industrial Fabrication"]
  },

  // ─────────────────────────────────────────────────────
  // FURNACE / SMELTER SAFETY
  // ─────────────────────────────────────────────────────
  "3": {  // Furnace Observation Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate with reinforced side panels", advantage: "Dimensionally stable under continuous radiant heat — resists warping and chemical degradation" },
      { name: "Lens", material: "Cobalt Blue Optical Glass (3 mm)", advantage: "Selectively filters excessive infrared and UV radiation from furnace openings and molten metal — provides a clear, undistorted view of high-temperature processes" },
      { name: "Side Shields", material: "Perforated Cellulose Acetate mesh", advantage: "Prevents peripheral heat, spatter, and radiant energy ingress while maintaining airflow" },
      { name: "Nose Bridge", material: "Integrated smooth contour frame", advantage: "Comfort-engineered for extended observation shifts" }
    ],
    lensOptions: "Cobalt Blue Optical Glass — 3 mm thickness",
    opticalClass: "Class 1 (Optical Clarity)",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 120 g",
    keyFeatures: [
      "Cobalt blue glass selectively filters excessive infrared radiation from molten metal and furnace sources",
      "Glass Thickness: 3 mm (±0.2 mm) — industrial grade optical quality",
      "Frame material: Cellulose Acetate — heat-stable, skin-safe",
      "Enhances visibility of furnace interiors while significantly reducing harmful glare",
      "Allows operators to safely observe high-temperature processes for extended durations",
      "Superior optical clarity compared to fibre or polycarbonate shields",
      "Scratch-resistant optical glass surface — stable under extreme temperature cycling",
      "Perforated side protection mesh for enhanced peripheral safety",
      "Adjustable side shield in open/closed position for versatile protection",
      "Integrated smooth nose bridge for all-day comfort",
      "Embossed OSWAL marking for product authenticity"
    ],
    applications: [
      "Furnace interior observation and process monitoring",
      "Protection against radiant thermal energy from furnace openings",
      "Molten metal process monitoring in steel plants and foundries",
      "Smelting and casting observation",
      "Kiln and glass furnace operations",
      "Metal Smelting and slab casting observation"
    ],
    usage: "Specifically engineered for furnace operators who require extended observation into high-temperature environments. The cobalt blue optical glass provides a uniquely comfortable and protective view of processes like molten steel, smelting operations, and kiln work, where radiant infrared energy poses the primary hazard.",
    industries: ["Iron & Steel", "Foundries & Smelters", "Glass Manufacturing", "Ceramics", "Cement Plants", "Non-Ferrous Metals", "Power Generation", "Chemical Processing"]
  },

  "4": {  // Oswal Dual Face Shield for Furnace
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Outer Shield", material: "High-clarity Polycarbonate", advantage: "Broad-coverage impact and spatter protection — resists mechanical impact from falling debris" },
      { name: "Inner Visor", material: "Cobalt Blue / Aluminized filter lens", advantage: "Selectively filters intense infrared radiation and glare from furnace openings" },
      { name: "Head Harness", material: "Adjustable ratchet suspension", advantage: "Secure fit for extended operational periods; distributes weight evenly" },
      { name: "Frame", material: "Reinforced ABS with heat-resistant coating", advantage: "Lightweight yet robust — built for continuous use in high-heat environments" }
    ],
    lensOptions: "Dual-layer: Outer clear PC + Inner cobalt/athermal filter",
    opticalClass: "Class 1",
    glassThickness: "Outer PC: 3 mm | Inner filter: 3 mm",
    weight: "Approx. 450 g",
    keyFeatures: [
      "Dual-shield design: simultaneous facial, eye, and neck protection in a single unit",
      "Full-face coverage from chin to forehead — eliminates exposure gaps",
      "Outer shield guards against mechanical impact, spatter, and molten droplets",
      "Inner cobalt/athermal filter lens attenuates infrared radiation from furnace openings",
      "Temperature resistant construction for proximity to high-heat sources",
      "Ratchet-adjust head harness for secure, hands-free operation",
      "Approved for use in steel plants, smelters, and glass furnace environments"
    ],
    applications: [
      "Furnace tapping and charging operations",
      "Molten metal pouring and casting",
      "Proximity work near electric arc furnaces",
      "High-radiant-heat industrial environments",
      "Smelter maintenance and inspection tasks"
    ],
    usage: "Designed for operators who work in close proximity to furnaces, molten metal, and high-intensity thermal radiation sources. The dual-shield architecture ensures comprehensive face and eye protection in the most demanding smelter and foundry environments.",
    industries: ["Iron & Steel", "Non-Ferrous Smelting", "Foundries", "Glass Manufacturing", "Aluminum Processing", "Copper Smelting", "Power Generation"]
  },

  "5": {  // Oswal Furnace Observation Shield (Face Shield type)
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Face Shield Visor", material: "Aluminized / Cobalt Blue Filter Glass", advantage: "Full-face IR protection — reflects radiant heat while maintaining clear process visibility" },
      { name: "Head Harness", material: "Adjustable ratchet suspension", advantage: "Comfortable fit for long shifts; adjusts to all head sizes" },
      { name: "Shield Frame", material: "ABS plastic with heat-resistant coating", advantage: "Lightweight and robust construction for demanding environments" },
      { name: "Chin Guard", material: "Integrated polycarbonate", advantage: "Adds additional lower-face protection against spatter and radiant heat" }
    ],
    lensOptions: "Cobalt Blue / Athermal Filter Glass — Full-face visor",
    opticalClass: "Class 1",
    glassThickness: "3 mm filter glass panel",
    weight: "Approx. 400 g",
    keyFeatures: [
      "Full-face coverage — provides simultaneous eye, face, and chin protection",
      "Cobalt blue/athermal filter panel attenuates infrared and UV radiation from furnace openings",
      "Temperature resistant frame for proximity operation near high-heat sources",
      "Ratchet-adjust head harness for a secure, fatigue-free fit during extended use",
      "Lightweight design to reduce neck fatigue in long-duration tasks",
      "Embossed OSWAL marking for product authenticity"
    ],
    applications: [
      "Furnace observation and process monitoring",
      "Smelting and casting inspection",
      "Proximity operation near molten metal",
      "Kiln operations in ceramic and glass industries",
      "Monitoring of high-temperature industrial processes"
    ],
    usage: "The OSWAL Furnace Observation Shield provides comprehensive facial protection for operators working in proximity to intense radiant heat. It replaces point-focus goggles with a full-face solution, ideal for sustained observation work near furnaces, kilns, and smelting operations.",
    industries: ["Steel Plants", "Foundries", "Glass Manufacturing", "Ceramics", "Aluminium Smelting", "Cement Plants", "Power Plants"]
  },

  "6": {  // Oswal Smelter — Helmet Attachment
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Attachment Bracket", material: "Reinforced ABS / Steel", advantage: "Universal mounting bracket — attaches to most standard safety helmets without tools" },
      { name: "Filter Visor", material: "Cobalt Blue / Athermal Filter Glass", advantage: "Certified IR and UV filtration for furnace and molten metal environments" },
      { name: "Pivot Mechanism", material: "Stainless steel pivot joints", advantage: "Allows the visor to be flipped up when not in observation mode — hands-free convenience" },
      { name: "Visor Frame", material: "Heat-resistant ABS plastic", advantage: "Lightweight, robust construction that withstands radiant heat proximity" }
    ],
    lensOptions: "Cobalt Blue / Athermal Filter Glass (3 mm)",
    opticalClass: "Class 1",
    glassThickness: "3 mm",
    weight: "Approx. 280 g (shield only, excluding helmet)",
    keyFeatures: [
      "Designed to mount directly onto standard industrial safety helmets",
      "Integrates eye and face protection with existing head protection in a single unit",
      "Flip-up mechanism enables rapid transition between observation and normal visibility",
      "Cobalt blue / athermal filter glass attenuates intense IR radiation from furnaces and molten metal",
      "Stainless steel pivots for reliable, long-lasting operation in harsh environments",
      "Eliminates the need for separate goggles — streamlines PPE for furnace operators",
      "Embossed OSWAL marking for product authenticity"
    ],
    applications: [
      "Furnace tapping, charging, and observation operations",
      "Smelter inspection and maintenance",
      "Molten metal pouring operations",
      "Use as an integrated PPE solution in steel plants and foundries",
      "High-temperature casting operations"
    ],
    usage: "The OSWAL Smelter Helmet Attachment is engineered to integrate seamlessly with standard safety helmets, providing certified eye and face protection without the need for a separate goggle. The flip-up design allows operators to quickly switch between protected observation mode and normal visibility.",
    industries: ["Iron & Steel", "Foundries & Smelters", "Non-Ferrous Metals", "Glass Manufacturing", "Cement Plants", "Aluminum Smelting"]
  },

  "10": {  // Oswal Peep Hole Cobalt Blue Glass — move to Smelter/Furnace Safety
    category: "Smelter/Furnace Safety",
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Optical Glass", material: "Cobalt Blue Optical Glass", advantage: "Precision-manufactured to selectively absorb infrared radiation and intense visible light from furnace openings — provides clear, undistorted process view" },
      { name: "Glass Edge", material: "Ground and polished edges", advantage: "Safe handling with no sharp edges — secure fit in peep hole frames and fixtures" }
    ],
    lensOptions: "Cobalt Blue Optical Glass — custom sizes available",
    opticalClass: "Class 1",
    glassThickness: "3 mm (standard) — other thicknesses available on request",
    weight: "Varies by dimension",
    keyFeatures: [
      "Cobalt blue optical glass — selectively filters excessive infrared and UV radiation from furnace openings",
      "Glass Thickness: 3 mm (custom thicknesses available on request)",
      "Precision-ground edges for safe handling and secure mounting in peep hole frames",
      "Provides clear, optical-quality view of furnace interiors without harmful glare",
      "Superior heat resistance for continuous high-temperature exposure",
      "Long service life with scratch-resistant surface",
      "Used in fixed observation ports, monitoring windows, and portable peep hole frames",
      "Embossed OSWAL branding available on frame fixtures"
    ],
    applications: [
      "Fixed peep hole observation ports in furnace walls",
      "Kiln observation windows in ceramic and glass industries",
      "Monitoring of molten metal processes in steel plants",
      "High-temperature process chambers and reaction vessels",
      "Infrared-shielded observation panels in smelting operations"
    ],
    usage: "OSWAL Cobalt Blue Peep Hole Glass is a precision optical glass component designed for installation in fixed or portable furnace observation ports. It enables safe, distortion-free monitoring of high-temperature processes by filtering intense infrared and UV radiation from furnace interiors, molten metal, and smelting chambers.",
    industries: ["Iron & Steel", "Foundries & Smelters", "Glass Manufacturing", "Ceramics & Kilns", "Non-Ferrous Metals", "Cement Plants", "Chemical Processing", "Power Generation"]
  },

  // ─────────────────────────────────────────────────────
  // SAFETY GOGGLES
  // ─────────────────────────────────────────────────────
  "9": {  // Ultravision Heat Resistant Impact Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Lens", material: "High-Impact Polycarbonate (PC)", advantage: "Exceptional optical clarity with superior resistance to mechanical impact — rated for medium impact resistance" },
      { name: "Frame", material: "Thermoplastic Rubber (TPR) / PVC", advantage: "Flexible, chemical-resistant frame that conforms to facial contours for a secure, comfortable seal" },
      { name: "Ventilation Ports", material: "Integrated indirect vents", advantage: "Prevents fogging during active use without exposing the lens to direct liquid splash" },
      { name: "Headband", material: "Adjustable elastic", advantage: "Accommodates a wide range of head sizes — secure retention during dynamic tasks" }
    ],
    lensOptions: "Clear Polycarbonate — Anti-fog coating",
    opticalClass: "Class 1",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 80 g",
    keyFeatures: [
      "High-impact polycarbonate lens — exceptional clarity and mechanical robustness",
      "Anti-fog coating on inner lens surface for sustained clarity during heat-intensive work",
      "Indirect ventilation system — prevents fogging without permitting liquid ingress",
      "Heat-resistant frame construction for proximity to moderate thermal hazards",
      "100% UV protection for the eyes and surrounding facial tissue",
      "Over-spectacle compatible — can be worn over prescription glasses",
      "Certified under IS 5983 / 1980 and CLI Approved",
      "Adjustable headband for a secure, customised fit"
    ],
    applications: [
      "General industrial eye protection",
      "Heat-intensive manufacturing environments",
      "Chemical handling with moderate splash risk",
      "Laboratory and cleanroom use",
      "Metal finishing and surface treatment",
      "Construction and engineering field operations"
    ],
    usage: "The OSWAL Ultravision is a versatile, high-performance safety goggle engineered for workers in environments involving impact hazards, heat, and moderate chemical exposure. Its anti-fog, indirect-ventilation design makes it particularly effective for active physical work in warm industrial conditions.",
    industries: ["Automotive", "General Manufacturing", "Chemical Processing", "Pharmaceuticals", "Construction", "Mining", "Aerospace", "Oil & Gas", "Food Processing"]
  },

  "11": {  // Oswal Supravision White
    certifications: ["CLI Approved", "IS 5983 / 1980", "EN 166", "ANSI Z87.1"],
    components: [
      { name: "Lens", material: "Optical-grade Polycarbonate (PC)", advantage: "Superior optical clarity meeting EN 166 Class 1 standards — provides undistorted vision during precision tasks" },
      { name: "Frame", material: "Flexible PVC / Thermoplastic Rubber", advantage: "Soft, skin-friendly material that creates a comfortable facial seal — resists chemical degradation" },
      { name: "Ventilation System", material: "Indirect ventilation ports", advantage: "Fog-resistant airflow path that prevents chemical splash and particulate ingress while eliminating lens fogging" },
      { name: "Headband", material: "Adjustable elastic", advantage: "One-size fits all — secure and comfortable for extended wear" }
    ],
    lensOptions: "Clear (Standard) | Tinted variants on request",
    opticalClass: "Class 1 (EN 166)",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 75 g",
    keyFeatures: [
      "European EN 166 and ANSI Z87.1 certified optical quality — trusted globally",
      "One-piece wrap-around polycarbonate lens for panoramic, distortion-free vision",
      "Indirect ventilation prevents fogging while blocking splash and dust ingress",
      "Flexible PVC frame — skin-safe, chemical resistant, comfortable for all-day wear",
      "100% UV protection certified",
      "Compatible with prescription glasses (OTS design)",
      "Meets IS 5983 / 1980 — approved for Indian industrial standards",
      "Lightweight construction for fatigue-free extended wear"
    ],
    applications: [
      "Chemical handling and laboratory operations",
      "General industrial and manufacturing environments",
      "Pharmaceutical production and filling operations",
      "Cleanroom and sterile processing areas",
      "Mining and mineral processing",
      "Painting, coating, and surface finishing"
    ],
    usage: "OSWAL Supravision White is a premium clear safety goggle engineered to meet the highest international certification standards. Its one-piece panoramic lens, indirect ventilation, and flexible frame make it the benchmark choice for industries where optical clarity, chemical resistance, and all-day comfort are non-negotiable.",
    industries: ["Pharmaceuticals", "Chemical Processing", "Laboratories", "Food & Beverage", "Automotive", "Oil & Gas", "Construction", "Mining", "Electronics Manufacturing"]
  },

  "12": {  // Supravision Black
    certifications: ["CLI Approved", "IS 5983 / 1980", "EN 166", "ANSI Z87.1"],
    components: [
      { name: "Lens", material: "Optical-grade Polycarbonate (PC) — Grey Tinted", advantage: "Reduces glare and light intensity in bright outdoor or high-luminance indoor environments while maintaining optical Class 1 clarity" },
      { name: "Frame", material: "Black Flexible PVC / Thermoplastic Rubber", advantage: "Robust and chemical-resistant — provides a reliable face seal in demanding environments" },
      { name: "Ventilation System", material: "Indirect ventilation ports", advantage: "Anti-fog airflow path without compromising splash protection" },
      { name: "Headband", material: "Adjustable elastic", advantage: "Universal fit for diverse workforce" }
    ],
    lensOptions: "Grey Tinted Polycarbonate — Anti-glare, Anti-fog",
    opticalClass: "Class 1 (EN 166)",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 75 g",
    keyFeatures: [
      "European EN 166 and ANSI Z87.1 certified — internationally recognised quality standard",
      "Grey-tinted lens provides effective glare reduction for outdoor and high-luminance environments",
      "Indirect ventilation prevents fogging without exposing the lens to chemical splash",
      "Flexible PVC frame — robust yet skin-comfortable for extended operations",
      "100% UV protection for workers in outdoor industrial environments",
      "Meets IS 5983 / 1980 — CLI Approved for Indian industrial deployment",
      "Panoramic one-piece lens for undistorted, wide-field vision",
      "Compatible with prescription glasses (OTS design)"
    ],
    applications: [
      "Outdoor construction and civil engineering",
      "Bright workshop environments and welding bays",
      "Glare-intensive industrial operations",
      "Chemical handling in high-luminance zones",
      "Surface finishing and spray painting in bright conditions"
    ],
    usage: "Supravision Black delivers all the protection of the Supravision White, enhanced with a grey tint for superior glare control. The ideal choice for outdoor industrial workers and those operating in bright or high-luminance environments where unfiltered light causes visual fatigue.",
    industries: ["Construction", "Oil & Gas", "Mining", "Cement Plants", "Glass Manufacturing", "Automotive Painting", "Outdoor Infrastructure"]
  },

  "18": {  // Cup Type Safety Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Lens Cups", material: "High-impact Polycarbonate or Toughened Glass", advantage: "Deep-cup design provides superior peripheral protection and secure individual eye chambers" },
      { name: "Frame Body", material: "Flexible PVC", advantage: "Conformable to diverse facial structures — creates a reliable seal even during dynamic work" },
      { name: "Side Vents", material: "Indirect ventilation mesh", advantage: "Continuous airflow prevents fogging while blocking particles and splash" },
      { name: "Headband", material: "Adjustable elastic", advantage: "Secure fit across diverse head sizes" }
    ],
    lensOptions: "Clear Polycarbonate | Clear Toughened Glass",
    opticalClass: "Class 1",
    glassThickness: "Polycarbonate: 3 mm",
    weight: "Approx. 90 g",
    keyFeatures: [
      "Classic deep-cup design — provides individual eye chambers for maximum close-up protection",
      "High-impact polycarbonate or toughened glass lens for superior impact resistance",
      "Indirect ventilation prevents fogging and blocks particulate and chemical splash",
      "Flexible PVC body conforms to facial contours for a reliable peripheral seal",
      "Compatible with prescription glasses — deep-cup design accommodates spectacle frames",
      "100% UV protection",
      "Embossed OSWAL marking for product authenticity"
    ],
    applications: [
      "General industrial eye protection against impact and particles",
      "Chemical handling and splash risk environments",
      "Metal grinding and cutting operations",
      "Woodworking and carpentry",
      "Laboratory operations requiring enclosed eye protection"
    ],
    usage: "The OSWAL Cup Type Safety Goggle is the classic industrial eye protector. Its deep-cup polycarbonate or glass lens construction provides superior close-range protection against flying particles, chips, and chemical splash. The design accommodates prescription spectacles underneath.",
    industries: ["Metal Fabrication", "Woodworking", "Mining", "Chemical Processing", "Automotive", "Pharmaceuticals", "Laboratories", "Construction"]
  },

  "21": {  // Oswal Over-The-Spectacle Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980", "EN 166", "ANSI Z87.1"],
    components: [
      { name: "Outer Goggle Lens", material: "High-impact Polycarbonate (PC)", advantage: "Wide-panoramic lens covers the entire spectacle frame including side lenses — no gap protection" },
      { name: "Frame", material: "Flexible Thermoplastic (TPR) — oversized OTS profile", advantage: "Engineered to comfortably sit over most standard spectacle frames without discomfort or pressure" },
      { name: "Ventilation System", material: "Indirect ventilation ports", advantage: "Fog-resistant airflow that prevents lens misting during over-glass wear" },
      { name: "Headband", material: "Adjustable elastic", advantage: "Secure fit without disturbing underlying spectacle frame" }
    ],
    lensOptions: "Clear Polycarbonate — Anti-fog, 100% UV",
    opticalClass: "Class 1 (EN 166)",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 90 g",
    keyFeatures: [
      "Engineered to be worn over most standard prescription and safety spectacles",
      "Wide-profile lens and oversized frame eliminate protection gaps around prescription glasses",
      "Indirect ventilation prevents fogging during over-glass wear",
      "EN 166, ANSI Z87.1, IS 5983 / 1980, and CLI Approved",
      "100% UV protection for the complete eye area",
      "Flexible, skin-safe TPR frame — no pressure marks on spectacle arms",
      "Suitable for pharmaceutical, chemical, and general industrial environments",
      "Eliminates the need to remove and replace prescription glasses in hazardous areas"
    ],
    applications: [
      "Use by prescription spectacle wearers in chemical, industrial, and laboratory environments",
      "Pharmaceutical manufacturing and filling operations",
      "Chemical handling and laboratory work requiring sealed eye protection",
      "General industrial PPE for spectacle-wearing workforce",
      "Cleanroom and sterile processing environments"
    ],
    usage: "OSWAL Over-The-Spectacle Goggles eliminate the safety compromise faced by prescription spectacle wearers in hazardous environments. The oversized profile ensures complete coverage over most spectacle frames, while the indirect ventilation and EN 166-certified polycarbonate lens deliver professional-grade protection without discomfort.",
    industries: ["Pharmaceuticals", "Chemical Processing", "Laboratories", "Food & Beverage", "Automotive", "Electronics Manufacturing", "Oil & Gas", "Mining"]
  },

  "23": {  // Prescription Safety Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Prescription Lens", material: "Optically corrected Polycarbonate or Toughened Glass", advantage: "Combines vision correction and industrial eye protection in a single certified product — eliminates the need for OTS goggles" },
      { name: "Frame", material: "Cellulose Acetate or Nylon (TR90)", advantage: "Lightweight, flexible, and chemically resistant — engineered for industrial use with integrated safety lens retention" },
      { name: "Side Shields", material: "Integrated or detachable", advantage: "Provides peripheral protection to meet industrial safety standards" },
      { name: "Nose Pads", material: "Silicone or acetate", advantage: "Comfortable, non-slip retention during dynamic industrial tasks" }
    ],
    lensOptions: "Prescription-corrected Polycarbonate or Toughened Glass — clear or tinted",
    opticalClass: "As per prescription + Class 1 optical quality",
    glassThickness: "Minimum 3 mm (safety standard) — varies per prescription",
    weight: "Approx. 30–50 g (frame only)",
    keyFeatures: [
      "Prescription-corrected safety eyewear — no compromise between vision and protection",
      "Cellulose Acetate or Nylon frame — lightweight, durable, skin-friendly",
      "Impact-resistant polycarbonate or toughened glass safety lenses",
      "Integrated side shields for peripheral protection",
      "100% UV protection certified",
      "Meets IS 5983 / 1980 and CLI Approved",
      "Available in single vision, bifocal, and progressive lens types",
      "Custom-fabricated to individual prescription — contact OSWAL for ordering"
    ],
    applications: [
      "Workers requiring vision correction in industrial environments",
      "Laboratory and cleanroom personnel",
      "Chemical plant operators with prescription requirements",
      "Field engineers in construction and infrastructure",
      "Manufacturing quality control personnel"
    ],
    usage: "OSWAL Prescription Safety Goggles are a custom-fabricated solution for workers who require vision correction without sacrificing certified eye protection. Each pair is produced to the individual's prescription specification and mounted in an IS 5983 / 1980 certified safety frame, combining optimal vision with professional-grade protection.",
    industries: ["Pharmaceuticals", "Laboratories", "Chemical Processing", "Manufacturing", "Construction", "Oil & Gas", "Mining", "Automotive", "Food & Beverage"]
  },

  // ─────────────────────────────────────────────────────
  // CHEMICAL SPLASH
  // ─────────────────────────────────────────────────────
  "8": {  // Chemical Splash Ultraview Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980", "EN 166", "ANSI Z87.1"],
    components: [
      { name: "Lens", material: "Optical-grade Polycarbonate (PC) — chemical resistant", advantage: "Full-face panoramic clarity with certified resistance to chemical splash, particulates, and UV radiation" },
      { name: "Frame Seal", material: "Soft PVC — direct-seal face gasket", advantage: "Complete 360° facial seal that prevents any liquid ingress from any direction — critical for splash environments" },
      { name: "Ventilation", material: "Indirect (non-vented) or one-way valve vented", advantage: "Non-vented version provides complete splash protection; valve-vented version adds comfort in high-activity operations" },
      { name: "Headband", material: "Adjustable elastic", advantage: "Secure retention to maintain the critical face seal during movement" }
    ],
    lensOptions: "Clear Polycarbonate — EN 166:2002 certified for chemical splash",
    opticalClass: "Class 1 (EN 166)",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 80 g",
    keyFeatures: [
      "Full-seal face gasket — complete protection against liquid chemical splash from any direction",
      "EN 166, ANSI Z87.1, IS 5983 / 1980, and CLI Approved — triple internationally recognised certification",
      "Panoramic polycarbonate lens for undistorted, wide-field visibility during chemical handling",
      "Indirect or non-vented design prevents chemical vapour and fine mist ingress",
      "100% UV protection for outdoor chemical handling environments",
      "Lightweight and ergonomic for use in pharmaceutical and laboratory environments",
      "Compatible with prescription glasses (OTS capable)",
      "Anti-scratch and anti-fog coated lens for sustained operational clarity"
    ],
    applications: [
      "Acid and alkali handling in chemical plants",
      "Laboratory chemical dispensing and titration",
      "Pharmaceutical active ingredient handling",
      "Battery acid handling in industrial and automotive applications",
      "Agricultural chemical mixing and spraying",
      "Electroplating and metal surface treatment",
      "Chlorine and solvent handling"
    ],
    usage: "The OSWAL Chemical Splash Ultraview is the definitive choice for environments where the primary hazard is liquid chemical splash. Its full-seal face gasket and certified panoramic polycarbonate lens ensure that no chemical, acid, or alkali can reach the eyes from any angle, while maintaining exceptional optical clarity for precision handling tasks.",
    industries: ["Chemical Processing", "Pharmaceuticals", "Laboratories", "Electroplating", "Battery Manufacturing", "Agriculture", "Oil & Gas Refining", "Textile Processing", "Food & Beverage"]
  },

  // ─────────────────────────────────────────────────────
  // SPECTACLE FRAMES
  // ─────────────────────────────────────────────────────
  "13": {  // Oswal Boss — Zero Power Glass
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Premium acetate frame — lightweight, hypoallergenic, and dimensionally stable for all-day industrial wear" },
      { name: "Lens", material: "Zero Power Toughened Safety Glass — 3 mm", advantage: "Optically neutral toughened glass that provides superior impact resistance without any vision distortion — ideal for non-prescription users" },
      { name: "Temples", material: "Cellulose Acetate with flexible hinge", advantage: "Ergonomically shaped for comfortable all-day retention on the ears without pressure" },
      { name: "Nose Bridge", material: "Integrated acetate or adjustable nose pads", advantage: "Comfortable, non-slip bridge that distributes the frame weight evenly" }
    ],
    lensOptions: "Zero Power Clear Toughened Glass — 3 mm",
    opticalClass: "Class 1",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 30 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Zero Power: optically neutral — provides no magnification or distortion",
      "3 mm toughened safety glass lens — superior impact resistance vs standard spectacle glass",
      "Cellulose Acetate frame — hypoallergenic, lightweight, premium quality",
      "CLI Approved and IS 5983 / 1980 certified",
      "100% UV protection",
      "Designed for industrial use in environments requiring basic eye impact and UV protection",
      "Comfortable fit for all-day wear in workshops and manufacturing facilities"
    ],
    applications: [
      "General industrial eye protection for non-prescription users",
      "Workshop and fabrication shop use",
      "Engineering field operations",
      "Quality control and inspection tasks",
      "Laboratory basic eye protection"
    ],
    usage: "OSWAL Boss Zero Power Safety Spectacles deliver certified eye protection in a professional, premium-quality spectacle frame. The zero-power toughened glass lens provides maximum optical clarity with superior impact resistance — the ideal everyday industrial safety spectacle for workers who do not require vision correction.",
    industries: ["General Manufacturing", "Automotive", "Construction", "Laboratories", "Pharmaceutical", "Electronics", "Food & Beverage", "Mining"]
  },

  "14": {  // Oswal Boss — Toughened Glass
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Premium industrial-grade acetate — dimensionally stable, hypoallergenic, and chemically resistant" },
      { name: "Lens", material: "Toughened Safety Glass — 3 mm", advantage: "Thermally toughened glass providing superior impact resistance and scratch resistance versus standard plastic safety lenses" },
      { name: "Temples", material: "Cellulose Acetate with flexible spring hinge", advantage: "Comfortable, secure retention — accommodates a wide range of head sizes" },
      { name: "Nose Bridge", material: "Integrated acetate bridge with contoured fit", advantage: "Stable, non-slip retention for all-day comfort" }
    ],
    lensOptions: "Toughened Clear Safety Glass — 3 mm",
    opticalClass: "Class 1",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 35 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Thermally toughened glass lens — superior scratch and impact resistance vs plastic lenses",
      "3 mm safety glass thickness — meets IS 5983 / 1980 impact resistance requirements",
      "Cellulose Acetate frame — premium, hypoallergenic industrial spectacle frame",
      "CLI Approved and IS 5983 / 1980 certified",
      "100% UV protection",
      "Oswal embossed marking for product authenticity",
      "Designed for workers who prefer glass lenses over polycarbonate for optical clarity and scratch resistance"
    ],
    applications: [
      "Precision engineering and machining environments",
      "Quality control and inspection in manufacturing",
      "Environments where lens scratch resistance is a priority",
      "General industrial workshops",
      "Grinding and chipping operations (secondary protection)"
    ],
    usage: "OSWAL Boss Toughened Safety Spectacles are the choice for workers who prioritise optical precision and scratch durability. The thermally toughened glass lens delivers the superior scratch resistance and optical flatness characteristic of glass, all within a certified IS 5983 / 1980 safety spectacle frame.",
    industries: ["Precision Manufacturing", "Automotive", "Aerospace", "Engineering", "Pharmaceuticals", "Electronics Manufacturing", "Laboratories"]
  },

  "15": {  // Oswal Boss fitted with grey glasses
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Lightweight and dimensionally stable premium acetate frame" },
      { name: "Lens", material: "Grey Tinted Toughened Safety Glass — 3 mm", advantage: "Grey neutral-density tint reduces overall light intensity without distorting colour perception — ideal for bright outdoor and mixed-light industrial environments" },
      { name: "Temples", material: "Cellulose Acetate with spring hinge", advantage: "Comfortable all-day retention" },
      { name: "Nose Bridge", material: "Integrated acetate bridge", advantage: "Stable, comfortable fit" }
    ],
    lensOptions: "Grey Tinted Toughened Safety Glass — 3 mm",
    opticalClass: "Class 1",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 35 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Grey tinted toughened glass lens — neutral density reduces glare without colour distortion",
      "3 mm safety glass thickness — IS 5983 / 1980 compliant impact resistance",
      "Cellulose Acetate frame — premium, hypoallergenic, industrial-grade construction",
      "CLI Approved and IS 5983 / 1980 certified",
      "100% UV protection",
      "Ideal for bright industrial and outdoor working environments",
      "OSWAL embossed marking for product authenticity"
    ],
    applications: [
      "Outdoor construction and infrastructure work",
      "Welding auxiliary and grinding observation",
      "High-luminance manufacturing environments",
      "Site inspection and quality control outdoors",
      "General industrial use in bright conditions"
    ],
    usage: "OSWAL Boss fitted with grey glasses provides certified eye protection with glare management in bright environments. The grey-tinted toughened glass lens preserves true colour perception while reducing overall light intensity — the ideal safety spectacle for outdoor industrial workers and those in high-luminance workplaces.",
    industries: ["Construction", "Infrastructure", "Oil & Gas Field Operations", "Agriculture", "Mining", "Cement Plants", "Outdoor Manufacturing"]
  },

  "17": {  // Oswal Boss — Grey Economy Glasses
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Durable ABS Plastic", advantage: "Cost-effective robust frame material — suitable for high-volume industrial distribution" },
      { name: "Lens", material: "Grey Tinted Polycarbonate — 3 mm", advantage: "Lightweight impact-resistant polycarbonate with grey tint for glare reduction in outdoor operations" },
      { name: "Temples", material: "ABS with standard hinge", advantage: "Standard fit with comfortable retention" },
      { name: "Nose Bridge", material: "Integrated fixed bridge", advantage: "Standard comfortable fit" }
    ],
    lensOptions: "Grey Tinted Polycarbonate — 3 mm",
    opticalClass: "Class 1",
    glassThickness: "Polycarbonate 3 mm",
    weight: "Approx. 28 g",
    keyFeatures: [
      "Economy range: high-volume, cost-effective certified safety spectacles",
      "Grey tinted polycarbonate lens for glare reduction",
      "IS 5983 / 1980 certified and CLI Approved",
      "100% UV protection",
      "Lightweight design for comfortable all-day wear",
      "Suitable for mass industrial PPE deployment in price-sensitive applications"
    ],
    applications: [
      "High-volume industrial PPE deployment",
      "Outdoor construction site protection",
      "Visitor safety eyewear for industrial facilities",
      "General workshop safety in price-sensitive environments"
    ],
    usage: "The OSWAL Boss Grey Economy Safety Spectacles deliver CLI-approved, IS 5983 / 1980 certified eye protection in a cost-optimised format. Ideal for mass PPE distribution in construction sites, visitor protection, and large-scale industrial environments where high volumes are required without compromising regulatory compliance.",
    industries: ["Construction", "Infrastructure", "Mining", "Agriculture", "Cement Plants", "General Manufacturing"]
  },

  // ─────────────────────────────────────────────────────
  // WELDING — FLIP UP
  // ─────────────────────────────────────────────────────
  "7": {  // Oswal Super Flip-Up Welding Goggle
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Outer Shade Lens", material: "Shade 5 Dark Filter Glass", advantage: "Blocks intense visible, UV, and IR radiation during welding and brazing operations" },
      { name: "Inner Clear Lens", material: "Clear Toughened Safety Glass", advantage: "Provides eye and face protection when the outer shade is flipped up — prevents spatter and debris contact" },
      { name: "Frame", material: "Cellulose Acetate — Red", advantage: "OSWAL signature red frame: heat-stable, lightweight, and visually distinctive for quick identification on site" },
      { name: "Flip Mechanism", material: "Stainless steel pivot hinge", advantage: "Robust, reliable flip-up and lock-down mechanism for single-hand operation" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure retention for active welding operations" }
    ],
    lensOptions: "Outer: Shade 5 DIN Filter Glass | Inner: Clear Toughened Glass — both 3 mm",
    opticalClass: "Class 1",
    filter: "Shade 5",
    glassThickness: "3 mm each lens (outer shade + inner clear)",
    weight: "Approx. 120 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Dual-lens flip-up design: Shade 5 outer lens flips to reveal inner clear lens",
      "Inner clear lens remains in place when welding lens is flipped — continuous eye protection",
      "Suitable for torch brazing, spot welding, and furnace observation tasks",
      "Cellulose Acetate frame in OSWAL signature red — hypoallergenic, heat stable",
      "Glass Thickness: 3 mm per lens (both lenses)",
      "Stainless steel flip mechanism for reliable single-hand operation",
      "CLI Approved and IS 5983 / 1980 certified",
      "Embossed OSWAL marking for product authenticity",
      "Perforated side protection mesh for peripheral coverage"
    ],
    applications: [
      "Gas welding and torch brazing requiring frequent lens changes",
      "Spot welding operations alternating between viewing and welding",
      "Furnace observation tasks requiring shade changes",
      "Maintenance welding in mixed industrial environments",
      "Operations requiring both shaded and clear vision in rapid succession"
    ],
    usage: "The OSWAL Super Flip-Up delivers the ultimate convenience for operators who alternate between welding/brazing and clear-vision tasks. The flip mechanism allows instantaneous transition from Shade 5 protection to clear visibility without removing the goggle — dramatically increasing safety and efficiency in mixed-task environments.",
    industries: ["Automotive", "General Manufacturing", "Maintenance & Repair", "Metal Fabrication", "Railways", "HVAC", "Plumbing"]
  },

  "19": {  // Box Type Flip-Up Welding Goggle
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Outer Shade Lens", material: "Shade Filter Glass (specify shade on order)", advantage: "Filters welding radiation during active welding tasks" },
      { name: "Inner Clear Lens", material: "Clear Toughened Safety Glass", advantage: "Protects eyes from debris and spatter when the shade lens is flipped" },
      { name: "Box Frame Body", material: "Cellulose Acetate", advantage: "Robust box-style enclosure that provides superior lateral and peripheral eye protection vs standard frame goggles" },
      { name: "Flip Mechanism", material: "Robust stainless steel pivot", advantage: "Single-hand operable flip-up and lock mechanism" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Secure all-day retention" }
    ],
    lensOptions: "Outer: Shade filter glass (DIN as specified) | Inner: Clear Toughened Glass",
    opticalClass: "Class 1",
    glassThickness: "3 mm per lens",
    weight: "Approx. 130 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Box-type frame construction — maximum lateral and peripheral eye protection",
      "Dual-lens flip-up system: shade lens flips over inner clear lens",
      "Cellulose Acetate box frame — robust, chemical resistant, lightweight",
      "CLI Approved and IS 5983 / 1980 certified",
      "Available in multiple shade options — specify DIN shade on order",
      "Embossed OSWAL marking for product authenticity",
      "Inner clear lens provides continuous protection when shade is flipped up"
    ],
    applications: [
      "Gas and electric arc welding in enclosed or cluttered workspaces",
      "Grinding and welding combination tasks",
      "Maintenance welding in tight spaces where maximum peripheral protection is required",
      "Fabrication work alternating between welding and inspection tasks"
    ],
    usage: "The OSWAL Box Type Flip-Up Goggle is engineered for environments where maximum peripheral protection is required alongside the convenience of flip-up shading. The box-frame construction eliminates the lateral exposure gaps characteristic of standard goggles, making it the ideal choice for enclosed fabrication and maintenance welding applications.",
    industries: ["General Fabrication", "Maintenance & Repair", "Automotive", "Railways", "Shipbuilding", "Boilermaking", "Metal Fabrication"]
  },

  // ─────────────────────────────────────────────────────
  // LASER PROTECTION
  // ─────────────────────────────────────────────────────
  "20": {  // Laser Welding Helmet
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Visor", material: "Laser-attenuating optical filter (specify wavelength on order)", advantage: "Engineered to attenuate specific laser wavelengths to safe exposure levels per the rated OD (Optical Density)" },
      { name: "Helmet Shell", material: "ABS / Fibreglass reinforced shell", advantage: "Robust full-head coverage that protects against both laser scatter and mechanical hazards" },
      { name: "Head Harness", material: "Adjustable ratchet suspension", advantage: "Comfortable, secure fit across all head sizes — appropriate for extended laser operations" },
      { name: "Chin Guard", material: "Integrated PC shield", advantage: "Additional lower-face protection from reflected laser scatter" }
    ],
    lensOptions: "Laser filter visor — wavelength-specific (specify Nd:YAG, CO₂, Diode etc.)",
    opticalClass: "Class 1 (per laser wavelength OD rating)",
    weight: "Approx. 600 g",
    keyFeatures: [
      "Full-face laser safety helmet — head, eye, and face protection in a single unit",
      "Wavelength-specific laser filter visor — specify laser type on order",
      "Optical Density (OD) rated to applicable safety standards",
      "ABS or fibreglass shell for robust mechanical protection",
      "Ratchet-adjust head harness for secure all-day fit",
      "CLI Approved and IS 5983 / 1980 certified",
      "Essential for Class 3B and Class 4 laser environments"
    ],
    applications: [
      "Laser welding operations (Nd:YAG, fibre, diode)",
      "Laser cutting and material processing",
      "Laser marking and engraving",
      "Optical research and photonics laboratories",
      "Medical device and electronics laser manufacturing"
    ],
    usage: "The OSWAL Laser Welding Helmet provides comprehensive head-to-chin protection for operators of Class 3B and Class 4 laser systems. The wavelength-specific filter visor is rated to the appropriate Optical Density to reduce laser radiation to safe exposure levels. Must be specified with laser wavelength and class for correct filter selection.",
    industries: ["Electronics Manufacturing", "Automotive", "Medical Devices", "Aerospace", "Defence", "Photonics & Research", "Metal Processing (Laser)"]
  },

  "24": {  // Laser Safety Goggles
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Lens", material: "Laser-attenuating filter glass or polycarbonate (wavelength-specific)", advantage: "Rated to attenuate specific laser wavelengths to safe levels per applicable OD standards" },
      { name: "Frame", material: "Flexible wrap-around nylon or ABS", advantage: "Wrap-around design prevents laser scatter ingress from any angle" },
      { name: "Side Shields", material: "Solid or filtered side panels", advantage: "Comprehensive lateral protection against reflected and scattered laser radiation" },
      { name: "Headband / Temples", material: "Adjustable elastic or standard temples", advantage: "Secure fit during precision laser operations" }
    ],
    lensOptions: "Wavelength-specific laser filter (specify laser type: Nd:YAG, CO₂, Diode, etc.)",
    opticalClass: "Rated OD per wavelength",
    weight: "Approx. 60–90 g",
    keyFeatures: [
      "Wavelength-specific laser attenuation — specify laser type and class for correct filter selection",
      "Optical Density (OD) rated to applicable laser safety standards",
      "Wrap-around frame construction eliminates peripheral scatter ingress",
      "Lightweight design for extended precision laser work",
      "CLI Approved and IS 5983 / 1980 certified",
      "Available for Nd:YAG, CO₂, Diode, Excimer, and other common laser types"
    ],
    applications: [
      "Laser welding and cutting (operator eyewear)",
      "Laser marking and engraving",
      "Medical laser procedures (non-patient)",
      "Research laser laboratories",
      "Photonics and optics manufacturing"
    ],
    usage: "OSWAL Laser Safety Goggles are precision protective eyewear for operators of Class 3B and Class 4 laser systems. Each pair must be specified with the laser wavelength and output class to ensure the correct Optical Density filter is supplied. Contact OSWAL for wavelength-specific order guidance.",
    industries: ["Electronics Manufacturing", "Medical Devices", "Defence", "Research & Development", "Photonics", "Aerospace"]
  },

  // ─────────────────────────────────────────────────────
  // ACCESSORIES
  // ─────────────────────────────────────────────────────
  "22": {  // Oswal Toughened Case
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Case Shell", material: "ABS Plastic — hard outer shell", advantage: "Rigid protection against crushing and impact — keeps eyewear safe during transport and storage" },
      { name: "Inner Lining", material: "Velvet / soft microfibre lining", advantage: "Prevents lens scratching during storage — keeps optical surfaces pristine" },
      { name: "Clasp", material: "Metal hinge and closure clasp", advantage: "Secure, reliable closure that prevents accidental opening during transport" }
    ],
    lensOptions: "N/A — storage and transport case",
    opticalClass: "N/A",
    weight: "Approx. 150 g",
    keyFeatures: [
      "Hard ABS shell protects eyewear from crushing, impact, and environmental damage",
      "Soft inner lining prevents lens and frame scratching in storage",
      "Secure metal clasp for safe transport on site",
      "Sized to accommodate most OSWAL safety spectacle and goggle frames",
      "Maintains the condition and service life of premium safety eyewear",
      "Embossed OSWAL branding"
    ],
    applications: [
      "Storage and transport of OSWAL safety spectacles and goggles",
      "Protection of prescription safety eyewear",
      "Standard issue with OSWAL Boss and premium safety spectacle range",
      "Field transport case for safety eyewear"
    ],
    usage: "The OSWAL Toughened Case is a premium hard-shell storage and transport case designed to protect OSWAL safety spectacles and goggles from damage during storage, handling, and site transport. It maintains the optical and structural integrity of the eyewear, extending product service life and protecting the user's investment.",
    industries: ["All Industries — universal storage solution for OSWAL safety eyewear"]
  },

  // ─────────────────────────────────────────────────────
  // MASTER WELDING PRODUCTS
  // ─────────────────────────────────────────────────────
  "german-welding-goggles": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Premium acetate construction — heat-stable, chemical resistant, lightweight for all-day industrial wear" },
      { name: "Lens", material: "German Toughened Filter Glass (Shade 4/5/6/9)", advantage: "Precision optical glass manufactured to German quality standards — superior scratch resistance and optical flatness vs polycarbonate alternatives" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Peripheral protection from sparks, spatter, and radiant light" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Adjustable, secure retention for industrial use" }
    ],
    lensOptions: "Shade 4 | Shade 5 | Shade 6 | Shade 9 — German Toughened Filter Glass — 3 mm each",
    opticalClass: "Class 1",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 90–95 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "German precision optical filter glass — superior quality and optical flatness",
      "Available in Shade 4, 5, 6, and 9 — select shade from the product page",
      "Frame material: Cellulose Acetate — hypoallergenic, heat-stable, industry standard",
      "Glass Thickness: 3 mm (±0.2 mm) for all shades",
      "CLI Approved and IS 5983 / 1980 certified",
      "Perforated side protection mesh for peripheral coverage",
      "Adjustable side shields — open/closed position",
      "Embossed OSWAL marking for product authenticity",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Gas Welding (Shade 4/5: up to and above 70 ltrs Acetylene/hour)",
      "Flame Cutting (Shade 4/5: up to and above 900 ltrs Oxygen/hour)",
      "Steel, Cast Iron, and Light Alloy Welding",
      "Arc and MIG/TIG Welding (Shade 9)",
      "Heavy structural and industrial fabrication"
    ],
    usage: "OSWAL German Welding Goggles represent the premium tier of the OSWAL welding protection range. Manufactured with precision German optical filter glass, these goggles deliver superior scratch resistance, optical flatness, and protection accuracy across Shades 4, 5, 6, and 9 — covering the full spectrum of gas and arc welding applications.",
    industries: ["Iron & Steel", "Automotive", "Shipbuilding", "Heavy Engineering", "Defense", "Railways", "Power Plants", "Metal Fabrication", "Boilermaking"]
  },

  "athermal-welding-goggles": {
    certifications: ["CLI Approved", "IS 5983 / 1980"],
    components: [
      { name: "Frame", material: "Cellulose Acetate", advantage: "Dimensionally stable and chemically resistant industrial-grade frame" },
      { name: "Lens", material: "Athermal Toughened Filter Glass (Shade 2/3/11)", advantage: "Athermal glass selectively attenuates infrared radiation while providing excellent visible-light transmission — superior to standard tinted glass in low-to-high intensity applications" },
      { name: "Side Shields", material: "Cellulose Acetate with ventilation mesh", advantage: "Peripheral protection from sparks and UV scatter" },
      { name: "Headband", material: "Elastic / Thread (confirm before order)", advantage: "Universal fit for extended industrial use" }
    ],
    lensOptions: "Shade 2 | Shade 3 | Shade 11 — Athermal Toughened Filter Glass — 3 mm each",
    opticalClass: "Class 1",
    glassThickness: "3 mm (±0.2 mm tolerance)",
    weight: "Approx. 85–95 g",
    frameMaterial: "Cellulose Acetate",
    keyFeatures: [
      "Athermal filter glass: superior infrared attenuation with excellent visible-light clarity",
      "Available in Shade 2, 3, and 11 — select shade from the product page",
      "Frame material: Cellulose Acetate — heat-stable, hypoallergenic",
      "Glass Thickness: 3 mm (±0.2 mm) for all shades",
      "CLI Approved and IS 5983 / 1980 certified",
      "Shade 2/3: athermal shades for light brazing, soldering, and gas welding",
      "Shade 11: maximum athermal shade for high-amperage arc welding",
      "Embossed OSWAL marking for product authenticity",
      "Modification available: Thread or Elastic (confirm before supply)"
    ],
    applications: [
      "Light brazing and soldering (Shade 2/3)",
      "Gas welding up to 70 ltrs Acetylene/hour (Shade 3)",
      "High-amperage arc welding — heavy-duty operations (Shade 11)",
      "Carbon arc gouging (Shade 11)",
      "Industrial furnace observation tasks (Shade 2/3)"
    ],
    usage: "OSWAL Athermal Welding Goggles provide the athermal optical advantage across three key shade levels: light brazing and soldering (Shade 2/3), and maximum-protection heavy arc welding (Shade 11). Athermal glass delivers superior infrared filtration and clarity versus conventional coloured glass.",
    industries: ["General Fabrication", "Steel Plants", "Automotive", "Plumbing & HVAC", "Heavy Engineering", "Aerospace", "Defence Manufacturing"]
  }
};

// ─────────────────────────────────────────────────────
// APPLY ALL EXPERT DATA TO PRODUCTS
// ─────────────────────────────────────────────────────

const updatedProducts = products.map(p => {
  // Fix peephole category
  if (p.id === '10') {
    p.category = 'Smelter/Furnace Safety';
  }

  const expertEntry = EXPERT_DATA[p.id];
  if (!expertEntry) return p; // No update for this product

  // Apply each field from the expert entry
  if (!p.datasheet) p.datasheet = {};

  if (expertEntry.certifications) {
    // Remove EN 166 / ANSI from products that don't need it
    p.datasheet.certifications = expertEntry.certifications;
  }

  if (expertEntry.components) p.datasheet.components = expertEntry.components;
  if (expertEntry.keyFeatures) p.datasheet.keyFeatures = expertEntry.keyFeatures;
  if (expertEntry.applications) p.datasheet.applications = expertEntry.applications;
  if (expertEntry.industries) p.datasheet.industries = expertEntry.industries;
  if (expertEntry.usage) p.datasheet.usage = expertEntry.usage;
  if (expertEntry.lensOptions) p.datasheet.lensOptions = expertEntry.lensOptions;
  if (expertEntry.opticalClass) p.datasheet.opticalClass = expertEntry.opticalClass;
  if (expertEntry.filter) p.datasheet.filter = expertEntry.filter;
  if (expertEntry.glassThickness) p.datasheet.glassThickness = expertEntry.glassThickness;
  if (expertEntry.weight) p.datasheet.weight = expertEntry.weight;
  if (expertEntry.frameMaterial) p.datasheet.frameMaterial = expertEntry.frameMaterial;
  if (expertEntry.category) p.category = expertEntry.category;

  // Universal fields (always override)
  p.datasheet.packaging = PACKAGING;
  p.datasheet.storage = STORAGE;
  p.datasheet.cleaning = CLEANING;
  p.datasheet.impactResistance = "Yes (CLI Approved)";
  p.datasheet.modifications = "Thread, elastic band, or any other (confirm before supply to all)";

  return p;
});

// Also apply the DIN 4,5,6,9,11 expert data (they're sub-products but need good data)
// Map them from the expert data above
const dinMappings = {
  'welding-din-4': EXPERT_DATA['welding-din-4'],
  'welding-din-5': EXPERT_DATA['welding-din-5'],
  'welding-din-6': EXPERT_DATA['welding-din-6'],
  'welding-din-9': EXPERT_DATA['welding-din-9'],
  'welding-din-11': EXPERT_DATA['welding-din-11'],
};

const finalProducts = updatedProducts.map(p => {
  const dinEntry = dinMappings[p.id];
  if (!dinEntry) return p;

  if (!p.datasheet) p.datasheet = {};
  if (dinEntry.certifications) p.datasheet.certifications = dinEntry.certifications;
  if (dinEntry.components) p.datasheet.components = dinEntry.components;
  if (dinEntry.keyFeatures) p.datasheet.keyFeatures = dinEntry.keyFeatures;
  if (dinEntry.applications) p.datasheet.applications = dinEntry.applications;
  if (dinEntry.industries) p.datasheet.industries = dinEntry.industries;
  if (dinEntry.usage) p.datasheet.usage = dinEntry.usage;
  if (dinEntry.lensOptions) p.datasheet.lensOptions = dinEntry.lensOptions;
  if (dinEntry.opticalClass) p.datasheet.opticalClass = dinEntry.opticalClass;
  if (dinEntry.filter) p.datasheet.filter = dinEntry.filter;
  if (dinEntry.glassThickness) p.datasheet.glassThickness = dinEntry.glassThickness;
  if (dinEntry.weight) p.datasheet.weight = dinEntry.weight;
  if (dinEntry.frameMaterial) p.datasheet.frameMaterial = dinEntry.frameMaterial;

  p.datasheet.packaging = PACKAGING;
  p.datasheet.storage = STORAGE;
  p.datasheet.cleaning = CLEANING;
  p.datasheet.impactResistance = "Yes (CLI Approved)";
  p.datasheet.modifications = "Thread, elastic band, or any other (confirm before supply to all)";

  return p;
});

fs.writeFileSync(productsPath, JSON.stringify(finalProducts, null, 2));
console.log('Expert data injection complete!');
console.log('Products updated:', finalProducts.length);

// Audit — show any product still missing key fields
const missing = finalProducts.filter(p => !p.isSubProduct && (
  !p.datasheet || !p.datasheet.components || !p.datasheet.keyFeatures || !p.datasheet.applications
));
if (missing.length > 0) {
  console.log('\n⚠ Products still missing key data:');
  missing.forEach(p => console.log(' -', p.id, ':', p.prodname));
} else {
  console.log('\n✅ All products have components, features, and applications!');
}
