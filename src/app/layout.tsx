import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import ClientMarquee from '../components/ClientMarquee';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';
import CartOverlay from '../components/CartOverlay';
import CartFloatingButton from '../components/CartFloatingButton';

const lato = Lato({ weight: ['400', '700', '900'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'OSWAL Industries — Safety Eyewear Manufacturer',
  description: 'Manufacturer of industrial safety spectacles, welding goggles, furnace face shields and eye protection equipment since 1983. Davanagere, Karnataka.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-white text-gray-800 flex flex-col min-h-screen`} style={{ background: '#fff' }}>
        <CartProvider>

        <Header />

        {/* ─── Main Content ─── */}
        <main className="flex-1 w-full print:p-0 print:m-0 bg-white">
          {children}
        </main>

        {/* ─── Scrolling Trusted Brands ─── */}
        <ClientMarquee />

        {/* ─── Footer (scrolls normally at page bottom) ─── */}
        <footer id="contact" className="print:hidden bg-gray-900 text-white shadow-[0_-10px_40px_rgba(0,0,0,0.15)]">
          <div className="w-full px-8 xl:px-16 mx-auto py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              <div>
                <div className="text-[32px] font-black tracking-tight mb-2">OSWAL</div>
                <div className="text-[14px] font-bold tracking-[0.3em] text-[#7AC142] uppercase mb-4">Industries</div>
                <div className="text-[18px] font-bold text-white mb-4 tracking-widest uppercase">Since 1983</div>
                <p className="text-gray-300 text-base leading-relaxed">
                  Manufacturer of industrial safety eyewear since 1983. Trusted by industries across India for quality and reliability.
                </p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-base tracking-widest text-gray-400 mb-6">Our Products</h4>
                <ul className="space-y-4 text-base text-gray-300">
                  {['Safety Goggles', 'Welding Goggles', 'Furnace Goggles', 'Face Shields', 'Chemical Splash Goggles', 'Spectacle Frames'].map((cat) => (
                    <li key={cat}>
                      <Link href="/products" className="hover:text-[#7AC142] transition-colors">{cat}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/library" className="hover:text-[#7AC142] transition-colors font-bold text-[#7AC142]">Technical Library →</Link>
                  </li>
                </ul>
              </div>
              <div id="about">
                <h4 className="font-bold uppercase text-base tracking-widest text-gray-400 mb-6">Contact Us</h4>
                <ul className="space-y-5 text-base text-gray-300">
                  <li className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#7AC142] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                    <span>Davanagere, Karnataka, India</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#7AC142] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                    <span className="font-bold text-lg">+91 9535354312</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-[#7AC142] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                    <span>oswaloptical@yahoo.co.in</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 font-medium">
              © {new Date().getFullYear()} OSWAL Industries, Davanagere. All rights reserved.
            </div>
          </div>
        </footer>

        {/* ─── Cart ─── */}
        <CartFloatingButton />
        <CartOverlay />

        {/* ─── Floating WhatsApp Icon ─── */}
        <a 
          href="https://wa.me/919535354312"
          target="_blank"
          rel="noopener noreferrer"
          className="print:hidden fixed bottom-24 right-6 z-50 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_12px_32px_rgba(37,211,102,0.6)] transition-all duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>

        {/* ─── Structured Data (SEO JSON-LD) ─── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "OSWAL Industries",
              "image": "https://www.oswalindustries.in/products/13/Oswal%20boss%20white.png",
              "@id": "https://www.oswalindustries.in/#organization",
              "url": "https://www.oswalindustries.in",
              "telephone": "+919535354312",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Davanagere",
                "addressLocality": "Davanagere",
                "addressRegion": "Karnataka",
                "postalCode": "577001",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919535354312",
                "contactType": "sales",
                "email": "oswaloptical@yahoo.co.in",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "kn"]
              }
            })
          }}
        />
        </CartProvider>
      </body>
    </html>
  );
}
