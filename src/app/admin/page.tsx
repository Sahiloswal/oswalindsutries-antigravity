'use client';
import { useState, useRef } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form state
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [shade, setShade] = useState('');
  const [features, setFeatures] = useState(''); // root features
  const [imageName, setImageName] = useState('');
  
  // Datasheet State (Simplified for form)
  const [certifications, setCertifications] = useState('CLI Approved\\nIS 5983 / 1980');
  const [applications, setApplications] = useState('');
  const [industries, setIndustries] = useState('');
  const [packaging, setPackaging] = useState('10 / 12 / 15 nos per inner box - 300 / 400 / 1000 nos per master carton');
  const [storage, setStorage] = useState('Store at ambient temperature away from direct sunlight.');

  const [generatedJson, setGeneratedJson] = useState('');
  const [importJsonStr, setImportJsonStr] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'oswal1983') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const parseLines = (text: string) => text.split('\\n').map(l => l.trim()).filter(l => l !== '');

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    
    const id = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    const newProduct = {
      id,
      prodname: productName,
      category,
      desc: description,
      shade: shade || undefined,
      image: `/products/${imageName}`,
      features: parseLines(features),
      datasheet: {
        certifications: parseLines(certifications),
        keyFeatures: parseLines(features), // Using root features as key features
        applications: parseLines(applications),
        industries: parseLines(industries),
        packaging: packaging,
        storage: storage,
        impactResistance: "Yes (CLI Approved)",
        opticalClass: "Class 1",
        filter: shade ? `Shade ${shade}` : undefined,
        frameMaterial: "Cellulose Acetate",
      }
    };

    setGeneratedJson(JSON.stringify(newProduct, null, 2) + ',');
  };

  const handleImport = () => {
    try {
      // Remove trailing comma if they copied with it
      const cleanStr = importJsonStr.trim().replace(/,$/, '');
      const parsed = JSON.parse(cleanStr);
      
      setProductName(parsed.prodname || '');
      setCategory(parsed.category || '');
      setDescription(parsed.desc || parsed.description || '');
      setShade(parsed.shade || '');
      setFeatures(parsed.features ? parsed.features.join('\\n') : '');
      
      // Handle image name extraction
      if (parsed.image) {
        const parts = parsed.image.split('/');
        setImageName(parts[parts.length - 1]);
      }

      if (parsed.datasheet) {
        setCertifications(parsed.datasheet.certifications ? parsed.datasheet.certifications.join('\\n') : '');
        setApplications(parsed.datasheet.applications ? parsed.datasheet.applications.join('\\n') : '');
        setIndustries(parsed.datasheet.industries ? parsed.datasheet.industries.join('\\n') : '');
        setPackaging(parsed.datasheet.packaging || '');
        setStorage(parsed.datasheet.storage || '');
      }
      
      alert('Product imported successfully! You can now edit the fields.');
      setImportJsonStr('');
    } catch (e) {
      alert('Invalid JSON format. Please ensure you pasted the exact JSON block for a single product.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert('Copied to clipboard! Paste this into your src/products.json file.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Admin Login</h1>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-lg focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]"
                placeholder="Enter password"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}
            <button type="submit" className="w-full bg-gray-900 text-white font-black text-sm uppercase tracking-widest py-4 rounded hover:bg-[#7AC142] transition-colors">
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="bg-gray-900 text-white pt-8 pb-32 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black uppercase tracking-tight">Product Manager</h1>
            <p className="text-gray-400 mt-2 text-sm">Add or edit products and their datasheets</p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white">Logout</button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-20 space-y-8">
        
        {/* ── Import Existing ── */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-4">Edit Existing Product</h2>
          <p className="text-sm text-gray-500 mb-4">Want to edit an existing product? Copy its JSON block from <code className="bg-gray-100 px-1 rounded">src/products.json</code> and paste it here to auto-fill the form below.</p>
          <div className="flex gap-4">
            <textarea 
              value={importJsonStr} 
              onChange={(e) => setImportJsonStr(e.target.value)}
              className="flex-1 border border-gray-200 rounded p-3 font-mono text-xs focus:outline-none focus:border-[#7AC142]"
              rows={3}
              placeholder='{\n  "id": "...",\n  "prodname": "..."\n}'
            />
            <button onClick={handleImport} className="bg-gray-900 text-white px-6 font-bold uppercase text-xs rounded hover:bg-[#7AC142] transition-colors whitespace-nowrap">
              Load Product
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* ── Form ── */}
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-100 pb-4">Product Details & Datasheet</h2>
              <form onSubmit={handleGenerate} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Product Name *</label>
                  <input type="text" required value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Category *</label>
                  <select required value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded bg-white">
                    <option value="">Select a category...</option>
                    <option value="Spectacle Frames">Spectacle Frames</option>
                    <option value="Welding Goggles">Welding Goggles</option>
                    <option value="Furnace Goggles">Furnace Goggles</option>
                    <option value="Safety Goggles">Safety Goggles</option>
                    <option value="Chemical Splash Goggles">Chemical Splash Goggles</option>
                    <option value="Face Shields">Face Shields</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Description *</label>
                  <textarea required value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Shade (Optional)</label>
                  <input type="text" value={shade} onChange={(e) => setShade(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Features (One per line)</label>
                  <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={4} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" />
                </div>

                {/* Datasheet fields */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-bold text-[#7AC142] uppercase text-xs tracking-widest mb-4">Datasheet Information</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Applications (One per line)</label>
                      <textarea value={applications} onChange={(e) => setApplications(e.target.value)} rows={3} className="w-full border border-gray-200 p-2 text-sm focus:outline-none focus:border-[#7AC142] rounded bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Industries (One per line)</label>
                      <textarea value={industries} onChange={(e) => setIndustries(e.target.value)} rows={3} className="w-full border border-gray-200 p-2 text-sm focus:outline-none focus:border-[#7AC142] rounded bg-gray-50" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Certifications (One per line)</label>
                      <textarea value={certifications} onChange={(e) => setCertifications(e.target.value)} rows={2} className="w-full border border-gray-200 p-2 text-sm focus:outline-none focus:border-[#7AC142] rounded bg-gray-50" />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Image Filename</label>
                  <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="e.g. boss-clear.jpg" />
                  <p className="text-[10px] text-gray-500 mt-1">First, upload this image to the 'public/products' folder in your code.</p>
                </div>

                <button type="submit" className="w-full bg-[#7AC142] text-white font-black text-sm uppercase tracking-widest py-4 mt-4 rounded hover:bg-gray-900 transition-colors">
                  Generate JSON Code
                </button>
              </form>
            </div>

            {/* ── Result ── */}
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-100 pb-4">Generated Code</h2>
              
              {generatedJson ? (
                <div className="space-y-4">
                  <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-xs overflow-x-auto whitespace-pre relative max-h-[600px] overflow-y-auto">
                    {generatedJson}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-3">How to use this code:</h3>
                    <ul className="list-disc pl-4 space-y-2 text-sm text-blue-800">
                      <li><strong>For a NEW product:</strong> Paste this at the top of <code className="bg-white px-1 py-0.5 rounded">src/products.json</code> (after the first <code className="bg-white px-1 py-0.5 rounded">[</code>)</li>
                      <li><strong>To EDIT a product:</strong> Find the old JSON block in the file and replace it entirely with this new one.</li>
                    </ul>
                  </div>

                  <button 
                    onClick={copyToClipboard}
                    className="w-full bg-gray-100 text-gray-900 font-black text-sm uppercase tracking-widest py-4 rounded border border-gray-200 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    Copy Code
                  </button>
                </div>
              ) : (
                <div className="h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                  <p className="text-gray-400 font-medium">Fill out the form and click Generate to create the product code.</p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
