import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';
import ClientMarquee from '../components/ClientMarquee';
import Header from '../components/Header';
import { CartProvider } from '../context/CartContext';
import CartOverlay from '../components/CartOverlay';
import CartFloatingButton from '../components/CartFloatingButton';
import MobileBottomNav from '../components/MobileBottomNav';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.oswalindustries.in'),
  title: {
    default: 'OSWAL Industries | Industrial Safety Goggles & Welding Protection Manufacturer',
    template: '%s | OSWAL Industries'
  },
  description: 'Leading manufacturer of industrial safety goggles, welding goggles, furnace face shields, chemical splash goggles, and medical eye protection equipment in India since 1983. IS 5983 & CE certified.',
  keywords: ['safety goggles', 'welding goggles', 'industrial goggles', 'medical goggles', 'oswal industries', 'oswal safety goggles', 'furnace goggles', 'chemical splash goggles', 'safety eyewear manufacturer india', 'PPE eye protection', 'laser safety goggles'],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.oswalindustries.in',
    siteName: 'OSWAL Industries',
    title: 'OSWAL Industries | Safety Goggles & Welding Protection Manufacturer',
    description: 'Leading manufacturer of industrial safety goggles, welding goggles, furnace face shields, chemical splash goggles, and medical eye protection equipment in India since 1983.',
    images: [
      {
        url: '/products/13/Oswal%20boss%20white.png',
        width: 800,
        height: 600,
        alt: 'OSWAL Safety Goggles',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OSWAL Industries | Safety Goggles Manufacturer',
    description: 'Manufacturer of IS & CE certified safety goggles, welding protection, and industrial eyewear in India.',
    images: ['/products/13/Oswal%20boss%20white.png'],
  },
  alternates: {
    canonical: 'https://www.oswalindustries.in',
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-800 flex flex-col min-h-screen pb-[70px] md:pb-0`} style={{ background: '#fff' }}>
        <CartProvider>

        <Header />

        {/* ─── Main Content ─── */}
        <main className="flex-1 w-full print:p-0 print:m-0 bg-white">
          {children}
        </main>

        {/* ─── Scrolling Trusted Brands ─── */}
        <ClientMarquee />

        {/* ─── Footer ─── */}
        <footer id="contact" className="print:hidden bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-slate-800">
              <div>
                <div className="text-[26px] font-black tracking-tight text-white leading-none mb-0.5">OSWAL</div>
                <div className="text-[11px] font-bold tracking-[0.35em] text-amber-500 uppercase mb-4">Industries</div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Manufacturer of industrial safety eyewear since 1983. CLI Approved and IS 5983 certified protection for steel plants, foundries, and heavy industry across India.
                </p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400 mb-5">Products</h4>
                <ul className="space-y-3 text-sm text-slate-400">
                  {['Safety Goggles', 'Welding Goggles', 'Furnace Goggles', 'Face Shields', 'Chemical Splash Goggles', 'Spectacle Frames'].map((cat) => (
                    <li key={cat}>
                      <Link href="/products" className="hover:text-amber-400 transition-colors">{cat}</Link>
                    </li>
                  ))}
                  <li>
                    <Link href="/library" className="font-bold text-amber-500 hover:text-amber-400 transition-colors">Technical Library →</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest text-slate-400 mb-5">Contact</h4>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>Davanagere, Karnataka, India</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    <a href="tel:+919535354312" className="hover:text-amber-400 transition-colors font-bold text-white">+91 95353 54312</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    <a href="mailto:oswaloptical@yahoo.co.in" className="hover:text-amber-400 transition-colors break-all">oswaloptical@yahoo.co.in</a>
                  </li>
                  <li className="pt-2 border-t border-slate-800">
                    <span className="block text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">GST No.</span>
                    <span className="font-mono text-slate-300 tracking-wider text-xs">29AAFPO7702C1ZT</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-medium">
              <span>© {new Date().getFullYear()} OSWAL Industries, Davanagere. All rights reserved.</span>
              <span className="flex items-center gap-2">GST: <span className="font-mono text-slate-400">29AAFPO7702C1ZT</span></span>
            </div>
          </div>
        </footer>

        {/* ─── Cart ─── */}
        <CartFloatingButton />
        <CartOverlay />
        <MobileBottomNav />

        {/* ─── Floating WhatsApp ─── */}
        <a
          href="https://wa.me/919535354312"
          target="_blank"
          rel="noopener noreferrer"
          className="print:hidden fixed bottom-24 right-6 z-50 bg-[#25D366] text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-200"
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
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": ["LocalBusiness", "Organization"],
                "name": "OSWAL Industries",
                "alternateName": ["OSWAL Safety Goggles", "Oswal Industries Davanagere"],
                "description": "Leading manufacturer of industrial safety goggles, welding goggles, furnace face shields, chemical splash goggles and safety eyewear in India since 1983. IS 5983 & CE certified.",
                "image": "https://www.oswalindustries.in/products/13/Oswal%20boss%20white.png",
                "@id": "https://www.oswalindustries.in/#organization",
                "url": "https://www.oswalindustries.in",
                "telephone": "+919535354312",
                "email": "oswaloptical@yahoo.co.in",
                "foundingDate": "1983",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Davanagere",
                  "addressLocality": "Davanagere",
                  "addressRegion": "Karnataka",
                  "postalCode": "577001",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": "14.4644",
                  "longitude": "75.9218"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+919535354312",
                  "contactType": "sales",
                  "email": "oswaloptical@yahoo.co.in",
                  "areaServed": "IN",
                  "availableLanguage": ["en", "hi", "kn"]
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "OSWAL Safety Eyewear Catalog",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Safety Goggles" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Welding Goggles" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Industrial Goggles" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Furnace Face Shields" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Chemical Splash Goggles" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Laser Safety Goggles" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Prescription Safety Goggles" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "OSWAL Industries",
                "url": "https://www.oswalindustries.in",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://www.oswalindustries.in/products?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                }
              }
            ])
          }}
        />
        </CartProvider>
      </body>
    </html>
  );
}
