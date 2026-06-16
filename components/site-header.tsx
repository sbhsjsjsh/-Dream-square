'use client';
    
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Menu, X, Sparkles } from 'lucide-react';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/buy', label: 'Buy' },
    { href: '/rent', label: 'Rent' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full flex flex-col">
      <nav className="bg-white/80 backdrop-blur-lg border-b border-stone-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-stone-900">
              Dream Square Property
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link 
                key={link.href}
                href={link.href} 
                className={`font-medium transition-colors ${pathname === link.href ? 'text-orange-600' : 'text-stone-600 hover:text-orange-600'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/#contact" className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2.5 rounded-full font-medium transition-colors">
              Get in Touch
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-stone-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-stone-200 p-4 shadow-lg">
          <div className="flex flex-col gap-4">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-medium p-2 rounded-lg ${pathname === link.href ? 'bg-orange-50 text-orange-600' : 'text-stone-600 hover:bg-stone-50'}`}
              >
                {link.label}
              </Link>
            ))}
            <hr className="border-stone-100" />
            <Link 
              href="/#contact" 
              onClick={() => setIsMenuOpen(false)}
              className="w-full bg-orange-600 text-center text-white px-5 py-3 rounded-xl font-medium block"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
    </header>
  );
}
