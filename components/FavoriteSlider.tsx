'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    bgImage: '/hero-1.png', 
    productImg: '/hero-1.png', 
    category: 'CHAIRS',
    title: 'Turn Chair Vivid',
    price: '$309.00',
    swatches: ['#b91c1c', '#fbbf24'],
    boxColor: '#e0e7fc', // Light blue/purple from image
    quote: '"All products are authentic and imported from the country of origin."',
    author: 'Jenny Wilson',
    location: 'New Mexico',
  },
  {
    id: 2,
    bgImage: '/hero-1.png',
    productImg: '/hero-1.png',
    category: 'SOFAS',
    title: 'Spoke Sofa',
    price: '$899.00',
    swatches: ['#4b5563', '#10b981'],
    boxColor: '#fff0e5', // Light orange/peach
    quote: '"Crafted with precision and designed for comfort in your modern home."',
    author: 'Guy Hawkins',
    location: 'California',
  },
  {
    id: 3,
    bgImage: '/hero-1.png',
    productImg: '/hero-1.png',
    category: 'LIGHTING',
    title: 'Modern Pendant',
    price: '$189.00',
    swatches: ['#1f2937', '#f3f4f6'],
    boxColor: '#e5fcf5', // Light mint
    quote: '"Sustainable materials combined with unmatched comfort for your home."',
    author: 'Kristin Watson',
    location: 'New York',
  }
];

export default function FavoriteSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative w-full overflow-hidden h-[50vh] min-h-[400px] max-h-[500px] bg-white group">
      <style dangerouslySetInnerHTML={{__html: `
        .slider-track {
          --slide-shift: 100vw;
          width: 100%;
          transform: translateX(calc(var(--slide-shift) * -${currentSlide}));
        }
        .slide-item {
          position: absolute;
          top: 0;
          width: 100vw;
          height: 100%;
        }
        .fixed-box {
          width: 100%;
          height: 45%;
          bottom: 0;
          left: 0;
        }
        @media (min-width: 768px) {
          .slider-track {
            --slide-shift: 50vw;
          }
          .fixed-box {
            width: 45vw; /* Adjust width to reveal next slide */
            height: 100%;
            bottom: auto;
            top: 0;
            left: 50vw;
          }
        }
        @media (min-width: 1024px) {
          .fixed-box {
            width: 42vw; /* Shows 8vw of next slide on large screens */
          }
        }
      `}} />

      {/* Track */}
      <div className="slider-track relative z-10 h-full transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]">
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className="slide-item"
            style={{ left: `calc(var(--slide-shift) * ${index})` }}
          >
            {/* Background Image */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-80 md:opacity-100'}`}>
              <Image 
                src={slide.bgImage}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] md:backdrop-blur-none" />
            </div>

            {/* Product Card */}
            <div 
              className={`absolute top-[25%] md:top-1/2 left-1/2 md:left-[25vw] -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[220px] md:max-w-none md:w-[220px] lg:w-[240px] bg-white rounded-xl md:rounded-2xl p-2.5 md:p-3 shadow-2xl transition-all duration-1000 delay-[100ms] ${index === currentSlide ? 'opacity-100 md:scale-100' : 'opacity-0 md:scale-90 md:-translate-x-[60%]'}`}
            >
              <div className="relative w-full aspect-[4/3] bg-[#f8f8f8] rounded-lg mb-2.5 overflow-hidden flex items-center justify-center">
                <Image 
                  src={slide.productImg}
                  alt={slide.title}
                  fill
                  className="object-cover p-2 mix-blend-multiply" 
                />
              </div>
              <p className="text-[9px] md:text-[10px] font-extrabold tracking-widest text-gray-500 mb-1 uppercase">{slide.category}</p>
              <h3 className="text-base md:text-lg font-bold text-gray-900 mb-0.5">{slide.title}</h3>
              <p className="text-sm md:text-base font-bold text-black mb-3.5 md:mb-4">{slide.price}</p>
              <div className="flex gap-2">
                {slide.swatches.map((color, i) => (
                  <div 
                    key={color} 
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-sm shadow-sm cursor-pointer border border-black/10 hover:border-black/30 transition-colors ${i === 0 ? 'ring-2 ring-black/80 ring-offset-[1.5px]' : ''}`}
                    style={{ backgroundColor: color }} 
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fixed Overlay Box */}
      <div 
        className="fixed-box absolute z-20 flex flex-col justify-center px-8 md:px-12 lg:px-[6vw] xl:px-[8vw] transition-colors duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] pointer-events-none overflow-hidden"
        style={{ backgroundColor: slides[currentSlide].boxColor }}
      >
        <div className="pointer-events-auto max-w-[440px] relative w-full">
          <p className="text-xs md:text-[13px] font-extrabold tracking-wide text-gray-900 mb-4 md:mb-6 uppercase">
            Our Favorite Products
          </p>
          
          {/* Sliding Text Container */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform: `translateX(-${currentSlide * (100 / slides.length)}%)`, width: `${slides.length * 100}%` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="relative flex-shrink-0" style={{ width: `${100 / slides.length}%` }}>
                  <h2 
                    className="text-xl md:text-2xl lg:text-[28px] font-bold leading-[1.3] md:leading-[1.25] tracking-tight text-[#111] mb-5 md:mb-6"
                    dangerouslySetInnerHTML={{ __html: slide.quote }}
                  />
                  <div className="mb-6 md:mb-8">
                    <p className="font-bold text-[#111] text-sm mb-0.5">{slide.author}</p>
                    <p className="text-gray-500 text-[11px] font-medium uppercase tracking-wide">{slide.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-8">
            <button 
              onClick={prevSlide} 
              className="text-[#111] hover:text-black/60 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <span className="text-sm md:text-sm font-bold tabular-nums text-[#111]">
              {currentSlide + 1} / {slides.length}
            </span>
            <button 
              onClick={nextSlide} 
              className="text-[#111] hover:text-black/60 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
