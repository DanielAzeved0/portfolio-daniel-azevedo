'use client';

import { useEffect, useState } from 'react';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '@/constants/data';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuId = 'mobile-navigation';

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [menuOpen]);

  return (
    <nav className="fixed w-full bg-[#333333] backdrop-blur-sm z-50 border-b border-[#4A90E2]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a
            href="#home"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4A90E2] to-[#00B0FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B0FF]"
            aria-label={`Ir para o início do portfólio de ${PERSONAL_INFO.name}`}
          >
            DA
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[#E0E0E0] hover:text-[#4A90E2] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B0FF]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#E0E0E0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B0FF]"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
            aria-controls={mobileMenuId}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div id={mobileMenuId} className="md:hidden pb-4">
            {NAVIGATION_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-[#E0E0E0] hover:text-[#4A90E2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00B0FF]"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
