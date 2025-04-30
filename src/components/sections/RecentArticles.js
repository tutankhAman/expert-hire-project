import { useState } from 'react';
import ArticleCard from '../cards/ArticleCard';
import { motion, AnimatePresence } from 'framer-motion';
import { recentArticlesAnimations } from '../../animations/recentArticles';

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
        {...recentArticlesAnimations.emptyState}
      >
        <p className="text-gray-600">No articles found in this category.</p>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={recentArticlesAnimations.section}
      className="w-full my-8 md:my-12"
    >
      <motion.h2 
        className="text-4xl font-bold mb-8 text-primary dark:text-primary-dark"
        variants={recentArticlesAnimations.heading}
      >
        Recent Articles
      </motion.h2>
      
      <motion.div 
        className="flex flex-col gap-8"
        variants={recentArticlesAnimations.section}
      >
        <AnimatePresence mode="wait">
          {currentArticles.map((article) => (
            <motion.div
              key={article.id}
              variants={recentArticlesAnimations.article}
              initial="hidden"
              animate="visible"
              exit="exit"
              whileHover="hover"
              whileTap="tap"
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
          variants={recentArticlesAnimations.pagination}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="flex items-center gap-2"
            whileHover="hover"
            variants={recentArticlesAnimations.paginationContainer}
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
              whileHover={currentPage !== 1 ? "hover" : {}}
              whileTap={currentPage !== 1 ? "tap" : {}}
              variants={recentArticlesAnimations.paginationButton}
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
                variants={recentArticlesAnimations.paginationButton}
                whileHover="hover"
                whileTap="tap"
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
              whileHover={currentPage !== totalPages ? "hover" : {}}
              whileTap={currentPage !== totalPages ? "tap" : {}}
              variants={recentArticlesAnimations.paginationButton}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>

          <motion.div 
            className="text-sm text-gray-500 dark:text-gray-400"
            variants={recentArticlesAnimations.paginationInfo}
          >
            Showing {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} of {filteredArticles.length} articles
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  );
} 