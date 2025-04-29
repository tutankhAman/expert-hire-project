import { useRef, useState } from 'react';
import CategoryCard from '../cards/CategoryCard';

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
            <CategoryCard
              key={category.id}
              category={category}
              idx={idx}
              hovered={hovered}
              setHovered={setHovered}
              selectedCategory={selectedCategory}
              onCategorySelect={onCategorySelect}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 