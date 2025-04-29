import { useState, useRef } from 'react';

export default function CategorySection({ selectedCategory, onCategorySelect, categories }) {
  const carouselRef = useRef(null);
  
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
  
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore by Category</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-2 rounded-full bg-primary text-base hover:bg-primary/90"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="p-2 rounded-full bg-primary text-base hover:bg-primary/90"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-7 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative flex-shrink-0 transition-all duration-500 ease-in-out group"
              style={{
                height: '14rem',
                width: '14rem',
                transition: 'all 0.5s ease-in-out',
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transformOrigin: 'center center'
              }}
              onMouseEnter={(e) => {
                const card = e.currentTarget;
                const originalWidth = 14 * 16; // 14rem in pixels
                const originalHeight = 14 * 16; // 14rem in pixels
                const newWidth = 16.5 * 16; // 16.5rem in pixels
                const newHeight = 19.5 * 16; // 19.5rem in pixels
                
                // Calculate the offset to keep the card centered
                const widthDiff = (newWidth - originalWidth) / 2;
                const heightDiff = (newHeight - originalHeight) / 2;
                
                card.style.width = `${newWidth}px`;
                card.style.height = `${newHeight}px`;
                card.style.marginLeft = `-${widthDiff}px`;
                card.style.marginTop = `-${heightDiff}px`;
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.width = '14rem';
                card.style.height = '14rem';
                card.style.marginLeft = '0';
                card.style.marginTop = '0';
              }}
            >
              <button
                onClick={() => onCategorySelect(category.id)}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${
                  selectedCategory === category.id
                    ? 'bg-primary/80 text-base shadow-lg scale-105'
                    : 'bg-primary text-base shadow-md group-hover:bg-transparent'
                }`}
              >
                <div className="h-1 w-16 bg-base mb-4 transition-all duration-500 group-hover:opacity-0"></div>
                <h3 className="text-2xl font-semibold transition-all duration-500 group-hover:opacity-0">{category.title}</h3>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 