import { useState, useEffect, JSX } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchOverlay from './SearchOverlay';
import articles from '../../data/articles.json';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarMenuAnimations } from '../../animations/navbarMenu';
import { Article } from '@/types/animation';

export default function Navbar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = (): void => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.2; 
      setIsScrolled(scrollPosition > threshold);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    const results = articles.articles.filter(article => {
      const searchLower = searchQuery.toLowerCase();
      return (
        article.title.toLowerCase().includes(searchLower) ||
        article.author.toLowerCase().includes(searchLower) ||
        article.content.toLowerCase().includes(searchLower) ||
        article.excerpt.toLowerCase().includes(searchLower)
      );
    }).map(article => ({
      ...article,
      readTime: article.readingTime
    }));

    setSearchResults(results);
  }, [searchQuery]);

  const isActive = (path: string): boolean => currentPath === path;

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 lg:py-10 px-4 md:px-8 lg:px-60 transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'bg-primary/0 backdrop-blur-md' 
            : isScrolled 
              ? 'bg-neutral/95 dark:bg-neutral-dark/95 backdrop-blur-md' 
              : 'bg-transparent'
        }`}
        {...navbarMenuAnimations.navbar}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-8 md:h-9">
            {/* Hamburger Menu */}
            <motion.div 
              className="flex items-center"
              {...navbarMenuAnimations.hamburger}
            >
              <motion.button
                onClick={toggleMenu}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Toggle menu"
                {...navbarMenuAnimations.hamburgerButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                  />
                </svg>
              </motion.button>
            </motion.div>

            {/* Center Heading */}
            <motion.div 
              className="flex-1 text-center"
              {...navbarMenuAnimations.heading}
            >
              <Link 
                href="/" 
                className={`text-xl md:text-2xl lg:text-3xl font-bold font-heading transition-colors duration-300 ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
              >
                Mother&apos;s Day Tribute
              </Link>
            </motion.div>

            {/* Right side icons */}
            <motion.div 
              className="flex items-center space-x-4"
              {...navbarMenuAnimations.icons}
            >
              {/* Theme Toggle */}
              <motion.button
                onClick={toggleTheme}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Toggle theme"
                {...navbarMenuAnimations.themeButton}
              >
                {isDarkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                    />
                  </svg>
                )}
              </motion.button>

              {/* Search Icon */}
              <motion.button
                onClick={toggleSearch}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Search"
                {...navbarMenuAnimations.searchButton}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm z-40 py-auto px-4 md:px-8 lg:px-60"
            {...navbarMenuAnimations.overlay}
          >
            <motion.div 
              className="container mx-auto h-full flex items-center"
              {...navbarMenuAnimations.menuContainer}
            >
              <motion.div 
                className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10 max-w-md"
                {...navbarMenuAnimations.menuContent}
              >
                <motion.div 
                  className="flex items-center"
                  {...navbarMenuAnimations.menuItem}
                  custom={0}
                >
                  {isActive('/') && (
                    <motion.div 
                      className="mr-4 md:mr-6 lg:mr-8 w-16 md:w-24 lg:w-32 h-1 bg-neutral dark:bg-neutral-dark"
                      {...navbarMenuAnimations.activeIndicator}
                    />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/" 
                      className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Home
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  {...navbarMenuAnimations.menuItem}
                  custom={1}
                >
                  {isActive('/categories') && (
                    <motion.div 
                      className="mr-4 md:mr-6 lg:mr-8 w-16 md:w-24 lg:w-32 h-1 bg-neutral dark:bg-neutral-dark"
                      {...navbarMenuAnimations.activeIndicator}
                    />
                  )}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href="/categories" 
                      className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80 transition-colors duration-200"
                      onClick={toggleMenu}
                    >
                      Categories
                    </Link>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="flex items-center"
                  {...navbarMenuAnimations.menuItem}
                  custom={2}
                >
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <SearchOverlay 
        isOpen={isSearchOpen}
        onClose={toggleSearch}
        onSearch={setSearchQuery}
      />
    </>
  );
} 