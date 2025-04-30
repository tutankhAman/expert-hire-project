import React from 'react';
import Image from 'next/image';
import HighlightsCard from '../cards/HighlightsCard';
import { useTheme } from '../../context/ThemeContext';

const highlights = [
  {
    id: 1,
    title: "Mother's Day Special",
    description: "Celebrate the special women in your life"
  },
  {
    id: 2,
    title: "Featured Stories",
    description: "Top picks from our community"
  },
  {
    id: 3,
    title: "Weekly Newsletter",
    description: "Get the latest updates and stories"
  }
];

export default function Sidebar() {
  const { isDarkMode } = useTheme();

  return (
    <div className="space-y-8 md:space-y-16 mt-8 md:mt-16">
      {/* Author Profile */}
      <div className={`shadow-md px-4 md:px-6 border-2 relative transition-colors duration-300
        ${isDarkMode 
          ? 'bg-neutral-dark border-primary-dark' 
          : 'bg-neutral border-primary'
        }`}
      >
        <div className="text-center mb-4 md:mb-6">
          <div className="relative w-24 h-24 md:w-36 md:h-36 mx-auto mt-[-48px] md:mt-[-72px]">
            <Image
              src="/images/author.jpg"
              alt="Author Profile"
              fill
              className="object-cover border-2 rounded-full"
            />
          </div>
          <h3 className={`text-2xl md:text-4xl font-bold mb-2 mt-4 transition-colors duration-300
            ${isDarkMode ? 'text-primary-dark' : 'text-primary'}`}
          >
            Aman Aziz
          </h3>
          <p className={`text-sm md:text-base leading-relaxed mb-4 md:mb-6 transition-colors duration-300
            ${isDarkMode ? 'text-secondary-dark' : 'text-secondary'}`}
          >
            A passionate storyteller and community builder, dedicated to sharing authentic experiences and creating meaningful connections through the power of words.
          </p>
          <p className={`text-base md:text-lg font-bold leading-relaxed mb-8 md:mb-14 transition-colors duration-300
            ${isDarkMode ? 'text-secondary-dark' : 'text-secondary'}`}
          >
            Follow Me
          </p>
        </div>
        
        <div className="flex justify-center space-x-2 -mb-12 md:-mb-16">
          <a href="https://www.linkedin.com/in/aman-aziz/" className={`h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transform -translate-y-1/2 transition-colors duration-300
            ${isDarkMode 
              ? 'bg-primary-dark hover:bg-primary-dark/90 text-neutral-dark' 
              : 'bg-primary hover:bg-primary/90 text-neutral'
            }`}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a href="https://www.github.com/tutankhAman" className={`h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transform -translate-y-1/2 transition-colors duration-300
            ${isDarkMode 
              ? 'bg-primary-dark hover:bg-primary-dark/90 text-neutral-dark' 
              : 'bg-primary hover:bg-primary/90 text-neutral'
            }`}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://designsbyaman.vercel.app" className={`h-12 w-12 md:h-16 md:w-16 flex items-center justify-center transform -translate-y-1/2 transition-colors duration-300
            ${isDarkMode 
              ? 'bg-primary-dark hover:bg-primary-dark/90 text-neutral-dark' 
              : 'bg-primary hover:bg-primary/90 text-neutral'
            }`}
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Highlights */}
      <HighlightsCard />
    </div>
  );
} 