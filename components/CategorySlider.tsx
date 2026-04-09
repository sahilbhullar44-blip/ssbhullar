'use client';

import { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronRight as SmallArrow } from 'lucide-react';

const categories = [
  { id: 1, name: 'Press Tables', icon: '🪑' },
  { id: 2, name: 'Lighting', icon: '💡' },
  { id: 3, name: 'Spoke Sofa', icon: '🛋️', hasSub: true },
  { id: 4, name: 'Storage', icon: '📦' },
  { id: 5, name: 'Turn Chairs', icon: '🪑' },
  { id: 6, name: 'Chairs', icon: '🛋️' },
  { id: 7, name: 'Curve Coat', icon: '🧥' },
  { id: 8, name: 'Bend Chairs', icon: '🪑' },
  { id: 9, name: 'Accessories', icon: '🏺' },
];

export default function CategorySlider() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300; // Fixed scroll amount for reliable snapping
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 5);
      setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 5);
    }
  };

  useEffect(() => {
    const initScroll = () => handleScroll();
    setTimeout(initScroll, 100);
    window.addEventListener('resize', initScroll);
    return () => window.removeEventListener('resize', initScroll);
  }, []);

  return (
    <section className="w-full py-6 md:py-8 border-b border-gray-100 group">
      <div className="relative max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className={`absolute left-0 md:-left-2 lg:-left-3 top-[40%] md:top-[42%] -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:scale-105 transition-all duration-300 outline-none ${showLeftArrow ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={22} strokeWidth={1.5} className="-ml-0.5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className={`absolute right-0 md:-right-2 lg:-right-3 top-[40%] md:top-[42%] -translate-y-1/2 z-30 w-10 h-10 md:w-11 md:h-11 bg-white rounded-full shadow-[0_2px_12px_rgba(0,0,0,0.15)] flex items-center justify-center text-gray-800 hover:bg-gray-50 hover:scale-105 transition-all duration-300 outline-none ${showRightArrow ? 'opacity-100 md:opacity-0 md:group-hover:opacity-100 pointer-events-auto md:pointer-events-none md:group-hover:pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          aria-label="Scroll right"
        >
          <ChevronRight size={22} strokeWidth={1.5} className="ml-0.5" />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-4 md:gap-8 overflow-x-auto snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] relative z-10 py-2"
        >
          {categories.map((cat) => (
            <div key={cat.id} className="flex flex-col items-center gap-3 flex-shrink-0 snap-start w-[84px] md:w-[104px] cursor-pointer group/item">
              <div className="w-[74px] h-[74px] md:w-[94px] md:h-[94px] bg-[#f4f4f4] rounded-full flex items-center justify-center text-3xl md:text-4xl hover:bg-[#e9e9e9] transition-colors relative overflow-hidden">
                {/* This is where an <img src="..." /> would go in production */}
                <span className="group-hover/item:scale-110 transition-transform duration-300 drop-shadow-sm">{cat.icon}</span>
              </div>
              <div className="flex items-center justify-center gap-1">
                <p className="text-[13px] md:text-[14px] font-medium text-[#1a1a1a] group-hover/item:text-black transition-colors whitespace-nowrap">
                  {cat.name}
                </p>
                {cat.hasSub && <SmallArrow size={12} className="text-[#1a1a1a] mt-[1px]" strokeWidth={3} />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
