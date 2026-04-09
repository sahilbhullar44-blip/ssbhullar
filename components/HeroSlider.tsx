'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    subtitle: 'Modern Elegance',
    title: 'Spoke Sofa',
    buttonText: 'Shop Collection',
    image: '/hero-1.png', 
  },
  {
    id: 2,
    subtitle: 'Premium Comfort',
    title: 'Lounge Set',
    buttonText: 'View Details',
    image: '/hero-1.png', 
  },
  {
    id: 3,
    subtitle: 'Minimalist Design',
    title: 'Dining Tables',
    buttonText: 'Explore Collection',
    image: '/hero-1.png', 
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="w-full py-4 md:py-6 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="relative w-full aspect-[4/3] md:aspect-[2.5/1] xl:aspect-[2.8/1] rounded-2xl md:rounded-[32px] overflow-hidden group shadow-sm bg-gray-100">
          
          {/* Slider Content */}
          <div 
            className="flex w-full h-full transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={slide.image} 
                    alt={slide.title} 
                    fill 
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Subtle darkening overlay to ensure white text readability */}
                  <div className="absolute inset-0 bg-black/20 md:bg-black/10"></div>
                </div>

                {/* Text Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-white px-4 text-center mt-4 md:mt-0">
                  <p className="text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-3 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-5 md:mb-8 drop-shadow-lg tracking-tight">
                    {slide.title}
                  </h2>
                  <button className="bg-white text-black px-6 py-2.5 md:px-8 md:py-3.5 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-100 transition-colors shadow-lg hover:scale-105 transform duration-300">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls Overlay - Bottom center */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4 md:gap-6 bg-black/10 backdrop-blur-sm px-4 py-2 rounded-full">
            {/* Prev Button */}
            <button 
              onClick={prevSlide}
              className="text-white hover:text-white/80 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx 
                      ? 'w-6 md:w-8 bg-white' 
                      : 'w-1.5 md:w-2 bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button 
              onClick={nextSlide}
              className="text-white hover:text-white/80 transition-colors"
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
