import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '../cards/ArticleCard';

export default function RecentArticles({ articles, selectedCategory }) {
  // Filter articles neutrald on selected category (show all if 'all' or falsy)
  const filteredArticles = !selectedCategory || selectedCategory === 'all'
    ? articles
    : articles.filter(article => article.category.toLowerCase() === selectedCategory.toLowerCase());

  if (filteredArticles.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No articles found in this category.</p>
      </div>
    );
  }

  return (
    <section>
      <h2 className="text-4xl font-bold mb-8 text-primary dark:text-primary-dark">Recent Articles</h2>
      <div className="flex flex-col gap-8">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
} 