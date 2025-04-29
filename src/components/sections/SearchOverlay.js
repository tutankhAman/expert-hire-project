import { useState, useEffect } from 'react';
import Link from 'next/link';
import articles from '../../data/articles.json';

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-50 py-auto px-60"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Fixed Search Input */}
        <div className="w-full max-w-2xl mx-auto pt-20">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent border-b-2 border-white text-white text-4xl font-heading py-4 px-2 focus:outline-none placeholder-white/50"
              autoFocus
            />
            <button
              onClick={onClose}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-white hover:text-white/80 transition-colors duration-200"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Results Container */}
        <div className="w-full max-w-2xl mx-auto mt-8 overflow-y-auto flex-1 pb-20 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30">
          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="space-y-6 pr-4">
              {searchResults.map((article) => (
                <Link
                  key={article.id}
                  href={`/article/${article.id}`}
                  className="block group"
                  onClick={onClose}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20">
                    <h3 className="text-2xl font-heading font-bold text-white group-hover:text-white/80 transition-colors duration-200">
                      {article.title}
                    </h3>
                    <p className="text-white/80 mt-2">{article.excerpt}</p>
                    <div className="flex items-center mt-4 text-white/60 text-sm">
                      <span>{article.author}</span>
                      <span className="mx-2">•</span>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readingTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* No Results */}
          {searchQuery && searchResults.length === 0 && (
            <div className="text-center">
              <p className="text-white/80 text-xl">No articles found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 