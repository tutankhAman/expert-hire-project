import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const calculateProgress = () => {
      const article = document.querySelector('article');
      if (!article) return;

      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
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
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50">
      <div 
        className={`h-full transition-all duration-200 ease-out ${
          isDarkMode ? 'bg-primary-dark' : 'bg-primary'
        }`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 