import React, { useState, useEffect, JSX } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { ScrollToTopButtonProps } from '@/types/buttons';

export default function ScrollToTopButton({ 
  showAfterHeight = 300,
  className = ''
}: ScrollToTopButtonProps): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const toggleVisibility = (): void => {
      if (window.pageYOffset > showAfterHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfterHeight]);

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 transform hover:scale-110 focus:outline-none ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${
        isDarkMode 
          ? 'bg-primary-dark text-neutral-dark hover:bg-primary-dark/90' 
          : 'bg-primary text-neutral hover:bg-primary/90'
      } ${className}`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
} 