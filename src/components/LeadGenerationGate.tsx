'use client';
import { useState } from 'react';

export default function LeadGenerationGate({ fileUrl, fileName, buttonText = 'Download Datasheet' }: { fileUrl: string, fileName: string, buttonText?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    const formData = new FormData(e.currentTarget);
    formData.append('access_key', '9f53ad2d-a82d-421b-b426-fcca8454c1e9');
    formData.append('subject', `New Catalog Lead: ${fileName}`);
    formData.append('from_name', 'OSWAL Industries Website');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        if (fileUrl.startsWith('/')) window.open(fileUrl, '_blank');
        else { const a = document.createElement('a'); a.href = fileUrl; a.download = fileName; a.click(); }
      } else { setStatus('error'); }
    } catch { setStatus('error'); }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(true)}
        className="w-full flex items-center justify-center gap-3 bg-gray-900 hover:bg-[#7AC142] text-white font-black text-sm uppercase tracking-widest py-4 px-6 transition-colors duration-200"
      >
        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        {buttonText}
      </button>

      {/* Modal overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ backgroundColor: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
          onClick={(e) => { if (e.target === e.currentTarget) setIsOpen(false); }}
        >
          <div className="w-full sm:max-w-[480px] bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl relative"
               style={{ maxHeight: '95dvh', overflowY: 'auto' }}>

            {/* Green top bar */}
            <div style={{ height: '5px', backgroundColor: '#7AC142', width: '100%' }} />

            {status === 'success' ? (
              /* ── Success State ── */
              <div className="p-10 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                     style={{ backgroundColor: '#f0f9e8', border: '2px solid #7AC142' }}>
                  <svg className="w-10 h-10" fill="none" stroke="#7AC142" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight text-gray-900 mb-2">You're In!</h3>
                <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                  Thank you. Your catalog is opening now. Our team may reach out to assist with bulk enquiries.
                </p>
                <a
                  href={fileUrl}
                  download={!fileUrl.startsWith('/') ? fileName : undefined}
                  target={fileUrl.startsWith('/') ? '_blank' : undefined}
                  className="inline-flex items-center gap-2 text-white font-black text-sm uppercase tracking-widest px-8 py-3 transition-colors"
                  style={{ backgroundColor: '#7AC142' }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  {fileUrl.startsWith('/') ? 'Open Catalog' : 'Download Now'}
                </a>
                <button onClick={() => setIsOpen(false)} className="block mx-auto mt-4 text-xs text-gray-400 hover:text-gray-600 uppercase tracking-widest">
                  Close
                </button>
              </div>

            ) : (
              /* ── Form State ── */
              <>
                {/* Header */}
                <div className="flex items-start justify-between px-8 pt-7 pb-5" style={{ borderBottom: '1px solid #f3f4f6' }}>
                  <div>
                    <div className="text-[10px] font-bold tracking-[0.25em] uppercase mb-1" style={{ color: '#7AC142' }}>
                      OSWAL Industries
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight text-gray-900 leading-tight">
                      Get the Full Catalog
                    </h3>
                    <p className="text-[12px] text-gray-500 mt-1">
                      {fileName} — Free, instant access
                    </p>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-gray-700 transition-colors mt-1 ml-4 flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                  </button>
                </div>

                {/* Trust badges */}
                <div className="px-8 pt-4 pb-0 flex gap-3 flex-wrap">
                  {['40+ Years', 'CLI Approved', 'IS 5983'].map(b => (
                    <span key={b} className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-1"
                          style={{ border: '1px solid #e5e7eb', color: '#6b7280', backgroundColor: '#f9fafb' }}>
                      ✓ {b}
                    </span>
                  ))}
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="px-8 pt-5 pb-8 space-y-4">
                  <input type="hidden" name="downloaded_file" value={fileName} />

                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                      Full Name <span style={{ color: '#7AC142' }}>*</span>
                    </label>
                    <input
                      type="text" name="name" required placeholder="e.g. Rajesh Kumar"
                      className="w-full text-sm text-gray-900 bg-white p-3 transition-all outline-none"
                      style={{ border: '1.5px solid #e5e7eb', borderRadius: '0' }}
                      onFocus={e => (e.target.style.borderColor = '#7AC142')}
                      onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                    />
                  </div>

                  {/* WhatsApp + Email side by side */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                        WhatsApp <span style={{ color: '#7AC142' }}>*</span>
                      </label>
                      <input
                        type="tel" name="whatsapp" required placeholder="+91 98765 43210"
                        className="w-full text-sm text-gray-900 bg-white p-3 transition-all outline-none"
                        style={{ border: '1.5px solid #e5e7eb', borderRadius: '0' }}
                        onFocus={e => (e.target.style.borderColor = '#7AC142')}
                        onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                        Email <span style={{ color: '#7AC142' }}>*</span>
                      </label>
                      <input
                        type="email" name="email" required placeholder="you@company.com"
                        className="w-full text-sm text-gray-900 bg-white p-3 transition-all outline-none"
                        style={{ border: '1.5px solid #e5e7eb', borderRadius: '0' }}
                        onFocus={e => (e.target.style.borderColor = '#7AC142')}
                        onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1.5">
                      Company / Organisation
                    </label>
                    <input
                      type="text" name="company" placeholder="BHEL, Tata Steel, etc."
                      className="w-full text-sm text-gray-900 bg-white p-3 transition-all outline-none"
                      style={{ border: '1.5px solid #e5e7eb', borderRadius: '0' }}
                      onFocus={e => (e.target.style.borderColor = '#7AC142')}
                      onBlur={e => (e.target.style.borderColor = '#e5e7eb')}
                    />
                  </div>

                  {/* Error */}
                  {status === 'error' && (
                    <p className="text-xs font-bold text-red-500">Something went wrong. Please try again.</p>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full text-white font-black text-[13px] uppercase tracking-widest py-4 mt-2 flex items-center justify-center gap-3 transition-colors disabled:opacity-60"
                    style={{ backgroundColor: status === 'submitting' ? '#9ca3af' : '#7AC142' }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Processing…
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                        </svg>
                        Access Full Catalog →
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] text-gray-400 mt-2 leading-relaxed">
                    We never share your details. One-time access, no spam.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
