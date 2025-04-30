import { useRef, useState, JSX } from 'react';
import CategoryCard from '../cards/CategoryCard';
import { motion } from 'framer-motion';
import { categorySectionAnimations } from '../../animations/categorySection';
import { Category } from '@/types/animation';

interface CategorySectionProps {
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
  categories: Category[];
}

export default function CategorySection({ 
  selectedCategory, 
  onCategorySelect, 
  categories 
}: CategorySectionProps): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  
  // Navigation functions for smooth scrolling
  const scrollLeft = (): void => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = (): void => {
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
  const remToPx = (rem: number): number => rem * 16;
  
  return (
    <div className="w-full my-8 md:my-12">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <motion.h2 
          className="text-2xl text-primary dark:text-primary-dark md:text-3xl font-bold"
          {...categorySectionAnimations.heading}
        >
          Explore by Category
        </motion.h2>
        <div className="flex space-x-2">
          <motion.button 
            onClick={scrollLeft}
            className="p-1 md:p-2 bg-primary text-neutral hover:bg-primary/90 dark:bg-primary-dark dark:text-neutral-dark"
            aria-label="Scroll left"
            {...categorySectionAnimations.button}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button 
            onClick={scrollRight}
            className="p-1 md:p-2 bg-primary text-neutral hover:bg-primary/90 dark:bg-primary-dark dark:text-neutral-dark"
            aria-label="Scroll right"
            {...categorySectionAnimations.button}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>
      </div>
      <div className="min-h-[14rem] md:min-h-[19.5rem] flex items-center">
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-4 md:gap-7 scrollbar-hide w-full relative overflow-visible"
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