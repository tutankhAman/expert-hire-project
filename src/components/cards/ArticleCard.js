import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article }) {
  // Helper to truncate excerpt to 4-6 lines (about 300 chars)
  const truncateExcerpt = (text, maxLength = 300) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <article className="bg-neutral overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row h-auto md:h-[400px]">
      {/* Image on the left side */}
      <div className="relative h-[300px] md:h-[400px] w-full md:w-[460px] flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content on the right side */}
      <div className="px-4 md:px-7 py-4 md:py-9 flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center mb-2 gap-1">
          <span className="inline-block text-primary text-sm md:text-base">
            #{article.category}
          </span>
          <span className="mx-2 text-secondary text-base md:text-lg">•</span>
          <span className="text-sm md:text-base text-secondary">{article.readingTime}</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-base md:text-lg text-secondary mb-4 md:mb-6 line-clamp-3">{truncateExcerpt(article.excerpt, 160)}</p>
        <Link href={`/article/${article.id}`}>
          <button className="bg-primary text-neutral px-6 md:px-9 py-3 md:py-4 hover:bg-neutral hover:text-primary border-2 border-primary transition-colors">
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
} 