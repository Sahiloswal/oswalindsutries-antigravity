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
  const [features, setFeatures] = useState('');
  const [imageName, setImageName] = useState('');
  const [generatedJson, setGeneratedJson] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'oswal1983') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password');
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate an ID based on name
    const id = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    
    // Process features
    const featureArray = features.split('\n').filter(f => f.trim() !== '');
    
    const newProduct = {
      id,
      prodname: productName,
      category,
      desc: description,
      shade: shade || undefined,
      image: `/products/${imageName}`,
      features: featureArray
    };

    setGeneratedJson(JSON.stringify(newProduct, null, 2) + ',');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedJson);
    alert('Copied to clipboard! Paste this into your products.json file.');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 border border-gray-200 bg-gray-50 text-gray-600 text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#7AC142]"></span>
              Secure Portal
            </div>
            <h1 className="text-3xl font-black text-gray-900 uppercase tracking-tight">Admin Login</h1>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-2">Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 border border-gray-200 p-4 rounded text-lg focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]"
                placeholder="Enter admin password"
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">{error}</p>}
            <button 
              type="submit"
              className="w-full bg-gray-900 text-white font-black text-sm uppercase tracking-widest py-4 rounded hover:bg-[#7AC142] transition-colors"
            >
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
            <p className="text-gray-400 mt-2 text-sm">Add new products to your website catalog</p>
          </div>
          <button 
            onClick={() => setIsAuthenticated(false)}
            className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 -mt-20">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* ── Form ── */}
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-100 pb-4">Product Details</h2>
              <form onSubmit={handleGenerate} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Product Name *</label>
                  <input type="text" required value={productName} onChange={(e) => setProductName(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="e.g. OSWAL Boss Clear" />
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
                  <textarea required value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="Short product description..." />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Shade (Optional)</label>
                  <input type="text" value={shade} onChange={(e) => setShade(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="e.g. 5 (for DIN 5)" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Features (One per line)</label>
                  <textarea value={features} onChange={(e) => setFeatures(e.target.value)} rows={4} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="Anti-fog coating&#10;Scratch resistant&#10;CLI Approved" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Image Filename</label>
                  <input type="text" value={imageName} onChange={(e) => setImageName(e.target.value)} className="w-full border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] rounded" placeholder="e.g. boss-clear.jpg" />
                  <p className="text-[10px] text-gray-500 mt-1">First, upload this image to the 'public/products' folder in your code.</p>
                </div>

                <button type="submit" className="w-full bg-[#7AC142] text-white font-black text-sm uppercase tracking-widest py-4 mt-4 rounded hover:bg-gray-900 transition-colors">
                  Generate Code
                </button>
              </form>
            </div>

            {/* ── Result ── */}
            <div>
              <h2 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-6 border-b border-gray-100 pb-4">Generated Code</h2>
              
              {generatedJson ? (
                <div className="space-y-4">
                  <div className="bg-gray-900 text-green-400 p-4 rounded-xl font-mono text-sm overflow-x-auto whitespace-pre relative">
                    {generatedJson}
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-100 rounded-xl p-6">
                    <h3 className="font-bold text-blue-900 uppercase tracking-widest text-xs mb-3">How to add this product:</h3>
                    <ol className="list-decimal pl-4 space-y-2 text-sm text-blue-800">
                      <li>Copy the code above.</li>
                      <li>Open the file <code className="bg-white px-1 py-0.5 rounded text-blue-900">src/app/products.json</code>.</li>
                      <li>Paste the code at the top of the file, right after the opening <code className="bg-white px-1 py-0.5 rounded text-blue-900">[</code> bracket.</li>
                      <li>Save the file and your new product is live!</li>
                    </ol>
                  </div>

                  <button 
                    onClick={copyToClipboard}
                    className="w-full bg-gray-100 text-gray-900 font-black text-sm uppercase tracking-widest py-4 rounded border border-gray-200 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"/></svg>
                    Copy Code
                  </button>
                </div>
              ) : (
                <div className="h-full border-2 border-dashed border-gray-200 rounded-xl flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
                  <svg className="w-12 h-12 text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
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
