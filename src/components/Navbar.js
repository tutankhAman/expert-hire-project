import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => currentPath === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 py-10 px-60 transition-all duration-300 ${
        isMenuOpen ? 'bg-primary/0 backdrop-blur-sm' : isScrolled ? 'bg-neutral/95 backdrop-blur-sm' : ''
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-9">
            {/* Hamburger Menu */}
            <div className="flex items-center">
              <button
                onClick={toggleMenu}
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen ? 'text-neutral hover:text-neutral/80' : 'text-primary hover:text-primary/80'
                }`}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
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
                className={`text-3xl font-bold font-heading transition-colors duration-300 ${
                  isMenuOpen ? 'text-neutral hover:text-neutral/80' : 'text-primary hover:text-primary/80'
                }`}
              >
                Mother's Day Tribute
              </Link>
            </div>

            {/* Search Icon */}
            <div className="flex items-center">
              <button
                className={`transition-colors duration-300 focus:outline-none ${
                  isMenuOpen ? 'text-neutral hover:text-neutral/80' : 'text-primary hover:text-primary/80'
                }`}
                aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
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
        <div className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-40 py-auto px-60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="flex flex-col space-y-10 max-w-md">
              <div className="flex items-center">
                {isActive('/') && <div className="mr-8 w-32 h-1 bg-white"></div>}
                <Link 
                  href="/" 
                  className="text-6xl font-heading font-bold text-white hover:text-white/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </div>
              <div className="flex items-center">
                {isActive('/stories') && <div className="mr-8 w-32 h-1 bg-white"></div>}
                <Link 
                  href="/stories" 
                  className="text-6xl font-heading font-bold text-white hover:text-white/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  About me
                </Link>
              </div>
              <div className="flex items-center">
                {isActive('/health') && <div className="mr-8 w-32 h-1 bg-white"></div>}
                <Link 
                  href="/health" 
                  className="text-6xl font-heading font-bold text-white hover:text-white/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Categories
                </Link>
              </div>
              <div className="flex items-center">
                {isActive('/inspiration') && <div className="mr-8 w-32 h-1 bg-white"></div>}
                <Link 
                  href="/inspiration" 
                  className="text-6xl font-heading font-bold text-white hover:text-white/80 transition-colors duration-200"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 