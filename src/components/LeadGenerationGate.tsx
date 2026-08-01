'use client';
import { useState } from 'react';

export default function LeadGenerationGate({ fileUrl, fileName, buttonText = 'Download Datasheet' }: { fileUrl: string, fileName: string, buttonText?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    
    // Add the Web3Forms access key
    formData.append('access_key', '9f53ad2d-a82d-421b-b426-fcca8454c1e9');
    formData.append('subject', `New Datasheet Lead: ${fileName}`);
    formData.append('from_name', 'OSWAL Industries Website');
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      if (data.success) {
        setStatus('success');
        // Automatically trigger the download
        const link = document.createElement('a');
        link.href = fileUrl;
        link.download = fileName;
        link.click();
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="w-full bg-gray-900 text-white font-black text-sm uppercase tracking-widest py-4 px-6 rounded hover:bg-[#7AC142] transition-colors flex items-center justify-center gap-3"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
        {buttonText}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-900/80 backdrop-blur-sm p-4">
          <div className="bg-white max-w-md w-full p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>

            {status === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-[#7AC142]/20 text-[#7AC142] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase">Success!</h3>
                <p className="text-gray-600 mb-6">Your download should start automatically. If it doesn't, click the button below.</p>
                <a 
                  href={fileUrl}
                  download={fileName}
                  className="inline-block bg-[#7AC142] text-white font-bold px-6 py-3 uppercase tracking-wider text-sm hover:bg-gray-900 transition-colors"
                >
                  Download Manually
                </a>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-black text-gray-900 mb-2 uppercase tracking-tight leading-tight">Download Datasheet</h3>
                <p className="text-sm text-gray-500 mb-6">Please provide your contact details to access the complete technical specifications.</p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="hidden" name="downloaded_file" value={fileName} />
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Full Name *</label>
                    <input type="text" name="name" required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">WhatsApp Number *</label>
                    <input type="tel" name="whatsapp" required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Email Address *</label>
                    <input type="email" name="email" required className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase tracking-widest mb-1">Company Name</label>
                    <input type="text" name="company" className="w-full bg-gray-50 border border-gray-200 p-3 text-sm focus:outline-none focus:border-[#7AC142] focus:ring-1 focus:ring-[#7AC142]" />
                  </div>
                  
                  {status === 'error' && (
                    <p className="text-red-500 text-xs font-bold mt-2">Something went wrong. Please try again.</p>
                  )}

                  <button 
                    type="submit" 
                    disabled={status === 'submitting'}
                    className="w-full bg-[#7AC142] text-white font-black text-sm uppercase tracking-widest py-4 mt-6 hover:bg-gray-900 transition-colors disabled:opacity-50"
                  >
                    {status === 'submitting' ? 'Processing...' : 'Access Datasheet'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
