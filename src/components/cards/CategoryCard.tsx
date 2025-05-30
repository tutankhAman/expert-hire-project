import React, { JSX } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { CategoryCardProps } from '@/types/cards';

interface ExtendedCategoryCardProps extends CategoryCardProps {
  idx: number;
  hovered: number | null;
  setHovered: (idx: number | null) => void;
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export default function CategoryCard({ 
  category, 
  idx, 
  hovered, 
  setHovered, 
  selectedCategory, 
  onCategorySelect,
  className = ''
}: ExtendedCategoryCardProps): JSX.Element {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`relative flex-shrink-0 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ease-in-out group mx-auto my-auto
        w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] ${hovered === idx ? 'md:w-[16.5rem] md:h-[19.5rem] z-10' : 'z-0'} ${className}
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
          backgroundColor: isDarkMode ? 'gray' : 'black',
          opacity: hovered === idx ? 0.2 : 1,
          zIndex: 1100,
        }}
      />
      {/* Button/content as top layer */}
      <button
        onClick={() => onCategorySelect(category.id)}
        className={`w-full h-full flex flex-col items-center justify-center transition-colors duration-300 ease-in-out relative z-10
          ${selectedCategory === category.id ? 'border-2 md:border-4 border-primary shadow-lg scale-105' : 'shadow-md'}
        `}
        style={{ zIndex: 1200, background: 'transparent' }}
        onMouseEnter={() => setHovered(idx)}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="h-1 w-12 md:w-16 bg-neutral dark:bg-neutral-dark mb-2 md:mb-4 transition-all duration-300"></div>
        <h2 className="text-lg md:text-xl font-semibold text-neutral dark:text-neutral-dark">{category.title}</h2>
      </button>
    </div>
  );
} 