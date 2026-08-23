'use client';
import { useState } from 'react';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Form state
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [shade, setShade] = useState('');
  const [features, setFeatures] = useState(''); 
  const [imageName, setImageName] = useState('');
  
  // Datasheet State
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
      setError('AUTHORIZATION FAILED');
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
        keyFeatures: parseLines(features),
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
      const cleanStr = importJsonStr.trim().replace(/,$/, '');
      const parsed = JSON.parse(cleanStr);
      
      setProductName(parsed.prodname || '');
      setCategory(parsed.category || '');
      setDescription(parsed.desc || parsed.description || '');
      setShade(parsed.shade || '');
      setFeatures(parsed.features ? parsed.features.join('\\n') : '');
      
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
      
      alert('RECORD IMPORTED. Ready for modification.');
      setImportJsonStr('');
    } catch (e) {
      alert('SYNTAX ERROR: Invalid JSON payload.');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert('COPIED TO CLIPBOARD. Awaiting manual deployment to products.json.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 font-sans">
        <div className="w-full max-w-md bg-white border-t-4 border-[#7AC142] shadow-sm p-8">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-3 h-3 bg-[#7AC142]"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">System Gateway</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Admin Authentication</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-900 uppercase tracking-widest mb-2">Access Key</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-gray-300 p-3 text-sm focus:outline-none focus:border-gray-900 focus:ring-0 transition-colors"
                placeholder="Enter security key"
              />
            </div>
            {error && <p className="text-red-600 text-xs font-bold uppercase tracking-widest bg-red-50 p-2 border-l-2 border-red-600">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white font-bold text-xs uppercase tracking-[0.2em] py-4 hover:bg-[#7AC142] transition-colors"
            >
              Initialize Session
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-20 font-sans">
      {/* Top Corporate Nav */}
      <div className="bg-[#111] text-white py-6 px-6 border-b-4 border-[#7AC142]">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="w-4 h-4 bg-[#7AC142]"></span>
            <div>
              <h1 className="text-xl font-bold tracking-tight leading-none mb-1">Product Data Center</h1>
              <p className="text-gray-400 text-xs font-mono uppercase">OSWAL Industries // Admin.Portal</p>
            </div>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors"
          >
            Terminate Session
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 space-y-6">
        
        {/* ── Import Existing ── */}
        <div className="bg-white border border-gray-200 p-6 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 bg-blue-500"></span>
            <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Modification Protocol (Import)</h2>
          </div>
          <p className="text-sm text-gray-600 mb-4">Paste existing product JSON block below to load its parameters into the generation form.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <textarea 
              value={importJsonStr} 
              onChange={(e) => setImportJsonStr(e.target.value)}
              className="flex-1 border border-gray-300 p-3 font-mono text-xs focus:outline-none focus:border-gray-900 bg-gray-50"
              rows={3}
              placeholder='{\n  "id": "...",\n  "prodname": "..."\n}'
            />
            <button onClick={handleImport} className="bg-blue-600 text-white px-8 py-3 font-bold uppercase text-[10px] tracking-widest hover:bg-blue-700 transition-colors whitespace-nowrap h-fit">
              Load Parameters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* ── Form ── */}
          <div className="bg-white border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
              <span className="w-2 h-2 bg-[#7AC142]"></span>
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Data Entry</h2>
            </div>

            <form onSubmit={handleGenerate} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">Product Name *</label>
                <input type="text" required value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">Category *</label>
                  <select required value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50">
                    <option value="">Select...</option>
                    <option value="Spectacle Frames">Spectacle Frames</option>
                    <option value="Welding Goggles">Welding Goggles</option>
                    <option value="Furnace Goggles">Furnace Goggles</option>
                    <option value="Safety Goggles">Safety Goggles</option>
                    <option value="Chemical Splash Goggles">Chemical Splash Goggles</option>
                    <option value="Face Shields">Face Shields</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">Shade (Optional)</label>
                  <input type="text" value={shade} onChange={(e) => setShade(e.target.value)} className="w-full border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50" placeholder="e.g. 5" />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">General Description *</label>
                <textarea required value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">Key Features (One per line)</label>
                <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={4} className="w-full border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50" />
              </div>

              {/* Datasheet block */}
              <div className="bg-gray-50 border border-gray-200 p-4 mt-6">
                <h3 className="font-bold text-gray-900 uppercase text-[10px] tracking-widest mb-4">Datasheet Specifications</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Applications (One per line)</label>
                    <textarea value={applications} onChange={(e) => setApplications(e.target.value)} rows={3} className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-gray-900 bg-white" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Industries (One per line)</label>
                    <textarea value={industries} onChange={(e) => setIndustries(e.target.value)} rows={3} className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-gray-900 bg-white" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Certifications (One per line)</label>
                    <textarea value={certifications} onChange={(e) => setCertifications(e.target.value)} rows={2} className="w-full border border-gray-300 p-2 text-sm focus:outline-none focus:border-gray-900 bg-white" />
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <label className="block text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-1">Image Filename</label>
                <div className="flex gap-2">
                  <span className="bg-gray-100 border border-gray-300 p-2.5 text-sm text-gray-500">/products/</span>
                  <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} className="flex-1 border border-gray-300 p-2.5 text-sm focus:outline-none focus:border-gray-900 bg-gray-50" placeholder="image.png" />
                </div>
              </div>

              <button type="submit" className="w-full bg-[#7AC142] text-white font-bold text-[10px] uppercase tracking-[0.2em] py-4 mt-6 hover:bg-gray-900 transition-colors">
                Execute Generation
              </button>
            </form>
          </div>

          {/* ── Result ── */}
          <div className="bg-gray-900 border border-gray-800 p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-800">
              <span className="w-2 h-2 bg-yellow-400"></span>
              <h2 className="text-sm font-bold text-white uppercase tracking-widest">Output Terminal</h2>
            </div>
            
            {generatedJson ? (
              <div className="flex flex-col flex-1">
                
                <div className="bg-[#0a0a0a] border border-gray-800 p-4 font-mono text-xs text-green-400 overflow-y-auto max-h-[500px] mb-4 whitespace-pre custom-scrollbar">
                  {generatedJson}
                </div>
                
                <div className="bg-gray-800 p-4 border border-gray-700 mb-4 text-gray-300 text-xs leading-relaxed">
                  <p className="font-bold text-white uppercase tracking-widest mb-2 text-[10px]">Deployment Instructions:</p>
                  1. Copy the payload below.<br/>
                  2. Open <code className="text-yellow-400 bg-black px-1">src/products.json</code>.<br/>
                  3. If <strong>NEW</strong>, paste after the opening <code className="text-yellow-400 bg-black px-1">[</code> bracket.<br/>
                  4. If <strong>UPDATE</strong>, overwrite the existing product block.
                </div>

                <button 
                  onClick={copyToClipboard}
                  className="mt-auto w-full bg-white text-gray-900 font-bold text-[10px] uppercase tracking-[0.2em] py-4 hover:bg-gray-200 transition-colors"
                >
                  Copy Payload to Clipboard
                </button>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 opacity-50">
                <svg className="w-12 h-12 text-gray-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 9l3 3-3 3m5 0h3M4 17a2 2 0 100-4 2 2 0 000 4zm16-4a2 2 0 100-4 2 2 0 000 4z"/></svg>
                <p className="text-gray-400 font-mono text-xs uppercase">Awaiting compilation request...</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
