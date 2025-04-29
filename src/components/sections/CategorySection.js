import { useRef, useState } from 'react';

export default function CategorySection({ selectedCategory, onCategorySelect, categories }) {
  const carouselRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  
  // Navigation functions for smooth scrolling
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };
  
  // Card sizes in rem
  const originalW = 14, originalH = 14;
  const expandedW = 16.5, expandedH = 19.5;
  const remToPx = rem => rem * 16;
  
  return (
    <div className="w-full my-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore by Category</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 bg-primary text-base hover:bg-primary/90"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 bg-primary text-base hover:bg-primary/90"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className="min-h-[19.5rem] flex items-center">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-7 scrollbar-hide w-full relative overflow-visible"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category, idx) => (
            <div
              key={category.id}
              className={`relative flex-shrink-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out group mx-auto my-auto
                w-[14rem] h-[14rem] ${hovered === idx ? 'w-[16.5rem] h-[19.5rem] z-10' : 'z-0'}
              `}
              style={{

                position: 'relative',
                width: hovered === idx ? '16.5rem' : '14rem',
                height: hovered === idx ? '19.5rem' : '14rem',
                overflow: 'visible',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Absolute image overlay */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 1000,
                }}
              />
              {/* Absolute color overlay with hover transition */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  backgroundColor: 'black',
                  opacity: hovered === idx ? 0.2 : 1,
                  zIndex: 1100,
                }}
              />
              {/* Button/content as top layer */}
              <button
                onClick={() => onCategorySelect(category.id)}
                className={`w-full h-full flex flex-col items-center justify-center transition-colors duration-300 ease-in-out relative z-10
                  ${selectedCategory === category.id ? 'border-4 border-primary shadow-lg scale-105' : 'shadow-md'}
                `}
                style={{ zIndex: 1200, background: 'transparent' }}
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <div className="h-1 w-16 bg-base mb-4 transition-all duration-300"></div>
                <h2 className="text-xl font-semibold text-base">{category.title}</h2>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 