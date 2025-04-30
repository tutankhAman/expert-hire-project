import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import SearchOverlay from './SearchOverlay';
import articles from '../../data/articles.json';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { isDarkMode, toggleTheme } = useTheme();
  const router = useRouter();
  const currentPath = router.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery('');
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

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
    });

    setSearchResults(results);
  }, [searchQuery]);

  const isActive = (path) => currentPath === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-4 md:py-6 lg:py-10 px-4 md:px-8 lg:px-60 transition-all duration-300 ${
        isMenuOpen 
          ? 'bg-primary/0 backdrop-blur-sm' 
          : isScrolled 
            ? 'bg-neutral/95 dark:bg-neutral-dark/95 backdrop-blur-sm' 
            : 'bg-neutral dark:bg-neutral-dark'
      }`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-8 md:h-9">
            {/* Hamburger Menu */}
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Toggle menu"
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
              </button>
            </div>

            {/* Center Heading */}
            <div className="flex-1 text-center">
              <Link 
                href="/" 
                className={`text-xl md:text-2xl lg:text-3xl font-bold font-heading transition-colors duration-300 ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
              >
                Mother's Day Tribute
              </Link>
            </div>

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Toggle theme"
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
              </button>

              {/* Search Icon */}
              <button
                onClick={toggleSearch}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen 
                    ? 'text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80' 
                    : 'text-primary dark:text-primary-dark hover:text-primary/80 dark:hover:text-primary-dark/80'
                }`}
                aria-label="Search"
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
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-primary/80 dark:bg-primary-dark/80 backdrop-blur-sm z-40 py-auto px-4 md:px-8 lg:px-60">
          <div className="container mx-auto h-full flex items-center">
            <div className="flex flex-col space-y-6 md:space-y-8 lg:space-y-10 max-w-md">
              <div className="flex items-center">
                {isActive('/') && <div className="mr-4 md:mr-6 lg:mr-8 w-16 md:w-24 lg:w-32 h-1 bg-neutral dark:bg-neutral-dark"></div>}
                <Link 
                  href="/" 
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center">
                {isActive('/categories') && <div className="mr-4 md:mr-6 lg:mr-8 w-16 md:w-24 lg:w-32 h-1 bg-neutral dark:bg-neutral-dark"></div>}
                <Link 
                  href="/categories" 
                  className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral dark:text-neutral-dark hover:text-neutral/80 dark:hover:text-neutral-dark/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Categories
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      <SearchOverlay isOpen={isSearchOpen} onClose={toggleSearch} />
    </>
  );
} 