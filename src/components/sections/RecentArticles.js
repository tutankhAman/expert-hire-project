import Image from 'next/image';
import Link from 'next/link';

export default function RecentArticles({ articles, selectedCategory }) {
  // Filter articles based on selected category (show all if 'all' or falsy)
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

  // Helper to truncate excerpt to 2-3 lines (about 150 chars)
  const truncateExcerpt = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredArticles.map((article) => (
        <article key={article.id} className="bg-base rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
          <div className="relative h-48">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                {article.category}
              </span>
              <span className="text-xs text-gray-500 ml-2">{article.readingTime}</span>
            </div>
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{article.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{truncateExcerpt(article.excerpt)}</p>
            <div className="flex items-center justify-between mt-auto">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">{article.author}</span>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <Link href={`/article/${article.id}`}>
                <button className="bg-primary text-base px-4 py-2 rounded-full text-white hover:bg-pink-600 transition-colors">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
} 