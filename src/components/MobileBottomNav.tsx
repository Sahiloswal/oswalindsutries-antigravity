'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      label: 'Catalog',
      href: '/products',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="8" y1="6" x2="21" y2="6" />
          <line x1="8" y1="12" x2="21" y2="12" />
          <line x1="8" y1="18" x2="21" y2="18" />
          <line x1="3" y1="6" x2="3.01" y2="6" />
          <line x1="3" y1="12" x2="3.01" y2="12" />
          <line x1="3" y1="18" x2="3.01" y2="18" />
        </svg>
      )
    },
    {
      label: 'Contact',
      href: '/#contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-[70px] bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] z-[60] flex justify-between items-center px-6">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/' && item.href !== '/#contact');
        return (
          <Link 
            key={item.href} 
            href={item.href}
            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? 'text-[#7AC142]' : 'text-gray-500 hover:text-gray-900'}`}
          >
            {item.icon}
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
