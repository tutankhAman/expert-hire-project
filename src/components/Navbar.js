import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-10 px-60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-9">
          {/* Hamburger Menu */}
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary hover:text-primary/80 focus:outline-none"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Center Heading */}
          <div className="flex-1 text-center">
            <Link href="/" className="text-3xl font-bold font-heading text-primary hover:text-primary/80">
              Mother's Day Tribute
            </Link>
          </div>

          {/* Search Icon */}
          <div className="flex items-center">
            <button
              className="text-primary hover:text-primary/80 focus:outline-none"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 bg-neutral/95 backdrop-blur-sm border-t border-gray-200">
            <div className="flex flex-col space-y-2 py-4">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Home
              </Link>
              <Link href="/stories" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Stories
              </Link>
              <Link href="/health" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Health
              </Link>
              <Link href="/inspiration" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Inspiration
              </Link>
              <Link href="/lifestyle" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                Lifestyle
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 