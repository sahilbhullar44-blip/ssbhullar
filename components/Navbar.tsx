'use client';

import { useState, useEffect } from 'react';
import { Menu, Search, MapPin, User, ShoppingBag, ChevronDown } from 'lucide-react';

const navItems = [
  { label: 'Shop By Categories', dropdown: true },
  { label: 'Shop By Room', dropdown: true },
  { label: 'Tables & Desks', dropdown: true },
  { label: 'Chairs & Stools', dropdown: true },
  { label: 'Pages', dropdown: true },
  { label: 'Theme Features', dropdown: true },
  { label: 'OnSale', special: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use hysteresis (two different thresholds) to prevent scroll loop bounce.
      // The height difference between expanded and scrolled header is around 80px.
      // A gap larger than 80px between upper and lower thresholds prevents the loop entirely.
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else if (window.scrollY < 10) {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 w-full ${isScrolled ? 'shadow-md py-4' : 'border-b border-gray-200 py-6'}`}>
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Main Top Row */}
        <div className="flex items-center justify-between gap-4 lg:gap-8">
          <div className="flex items-center gap-4">
            {/* Menu appears on mobile, or on desktop when scrolled */}
            <button 
              className={`${isScrolled ? 'block' : 'lg:hidden'} hover:text-gray-600 transition-colors`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <Menu size={28} strokeWidth={2} />
            </button>
            
            <h1 className="text-3xl font-black tracking-widest text-[#0a0a0a]">HYPER</h1>
          </div>

          {/* Desktop Search Bar */}
          <div className={`hidden lg:flex flex-1 items-center bg-[#f3f4f6] rounded-full pl-6 pr-2 py-1.5 max-w-2xl transition-all duration-300 ${isScrolled ? 'scale-[0.98]' : 'scale-100'}`}>
            <button className="flex items-center gap-1 text-[15px] font-medium text-gray-800 whitespace-nowrap hover:text-black transition-colors">
              All Categories <ChevronDown size={18} strokeWidth={2} className="ml-1" />
            </button>
            <div className="w-[1px] h-6 bg-gray-300 mx-5"></div>
            <input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent border-none outline-none text-[15px] text-gray-700 placeholder-gray-500"
            />
            <button className="w-10 h-10 flex flex-shrink-0 items-center justify-center text-gray-900 rounded-full hover:bg-gray-200 transition-colors ml-2">
              <Search size={22} strokeWidth={2} />
            </button>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-6 lg:gap-8 shrink-0">
            <button className="hidden lg:flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-black transition-colors">
              <MapPin size={22} strokeWidth={1.5} /> Find a store
            </button>
            <button className="hidden lg:flex items-center gap-2 text-[15px] font-medium text-gray-800 hover:text-black transition-colors">
              <User size={22} strokeWidth={1.5} /> Sign in/ Register
            </button>
            
            <div className="flex items-center gap-4">
              <button className="lg:hidden text-gray-800">
                <Search size={24} strokeWidth={1.5} />
              </button>
              <button className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                <ShoppingBag size={22} strokeWidth={1.5} className="text-black" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Row (Hidden when scrolled) */}
        <div 
          className={`hidden lg:flex items-center gap-8 transition-all duration-300 overflow-hidden text-[#1a1a1a] ${
            isScrolled ? 'h-0 opacity-0 mt-0 pointer-events-none' : 'h-10 opacity-100 mt-6'
          }`}
        >
          {navItems.map((item) => (
            <button 
              key={item.label} 
              className={`flex items-center gap-1.5 text-[15px] font-bold tracking-wide transition-colors ${
                item.special ? 'text-[#c62828] hover:text-[#e53935]' : 'hover:text-gray-500'
              }`}
            >
              <span>{item.label}</span>
              {item.special && (
                <span className="flex text-red-500 text-[10px] mb-3 -ml-1">✦</span>
              )}
              {item.dropdown && <ChevronDown size={16} strokeWidth={2.5} />}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100">
          <div className="px-4 py-4 space-y-4">
            {navItems.map((item) => (
              <button key={item.label} className={`block w-full text-left py-2 text-lg font-medium border-b border-gray-50 last:border-0 ${item.special ? 'text-red-600' : 'text-gray-800'}`}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
