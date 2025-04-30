import { useState, useEffect, JSX } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ReadingProgressBarProps } from '@/types/sections';

export default function ReadingProgressBar({ 
  target = 'article',
  className = '' 
}: ReadingProgressBarProps): JSX.Element {
  const [progress, setProgress] = useState<number>(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const calculateProgress = (): void => {
      const article = document.querySelector(target);
      if (!article) return;

      const articleTop = article.getBoundingClientRect().top + window.scrollY;
      const articleHeight = article.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;

      // Calculate how far we've scrolled through the article
      const scrollProgress = (scrollPosition - articleTop) / (articleHeight - windowHeight);
      
      // Convert to percentage and clamp between 0 and 100
      const percentage = Math.min(Math.max(scrollProgress * 100, 0), 100);
      setProgress(percentage);
    };

    window.addEventListener('scroll', calculateProgress);
    window.addEventListener('resize', calculateProgress);

    // Initial calculation
    calculateProgress();

    return () => {
      window.removeEventListener('scroll', calculateProgress);
      window.removeEventListener('resize', calculateProgress);
    };
  }, [target]);

  return (
    <div className={`fixed top-0 left-0 right-0 h-1 z-50 ${className}`}>
      <div 
        className={`h-full transition-all duration-200 ease-out ${
          isDarkMode ? 'bg-primary-dark' : 'bg-primary'
        }`}
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
} 