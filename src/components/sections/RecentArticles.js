import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '../cards/ArticleCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function RecentArticles({ articles, selectedCategory }) {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  // Filter articles based on selected category (show all if 'all' or falsy)
  const filteredArticles = !selectedCategory || selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category.toLowerCase() === selectedCategory.toLowerCase());

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  if (filteredArticles.length === 0) {
    return (
      <motion.div 
        className="text-center py-12"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        <p className="text-gray-600">No articles found in this category.</p>
      </motion.div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const paginationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-primary dark:text-primary-dark"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        Recent Articles
      </motion.h2>
      <motion.div 
        className="flex flex-col gap-8"
        variants={containerVariants}
      >
        <AnimatePresence mode="wait">
          {currentArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { 
                  duration: 0.3,
                  ease: [0.4, 0, 0.2, 1]
                }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.2 }
              }}
            >
              <ArticleCard article={article} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <motion.div 
          className="mt-12 flex flex-col items-center gap-6"
          variants={paginationVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`w-10 h-10 flex items-center justify-center transition-all duration-200 ${
                currentPage === 1
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-primary dark:text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              aria-label="Previous page"
              whileHover={{ 
                scale: currentPage !== 1 ? 1.1 : 1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: currentPage !== 1 ? 0.95 : 1,
                transition: { duration: 0.1 }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <motion.button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 flex items-center justify-center transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-white dark:bg-gray-800 text-primary dark:text-primary-dark border-2 border-primary dark:border-primary-dark font-medium'
                    : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
                aria-label={`Page ${page}`}
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ 
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                {page}
              </motion.button>
            ))}

            <motion.button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`w-10 h-10 flex items-center justify-center transition-all duration-200 ${
                currentPage === totalPages
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 cursor-not-allowed'
                  : 'bg-white dark:bg-gray-800 text-primary dark:text-primary-dark hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
              aria-label="Next page"
              whileHover={{ 
                scale: currentPage !== totalPages ? 1.1 : 1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: currentPage !== totalPages ? 0.95 : 1,
                transition: { duration: 0.1 }
              }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 0.6,
              duration: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
          >
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
} 