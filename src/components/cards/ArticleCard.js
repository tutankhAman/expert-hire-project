import Image from 'next/image';
import Link from 'next/link';

export default function ArticleCard({ article }) {
  // Helper to truncate excerpt to 4-6 lines (about 300 chars)
  const truncateExcerpt = (text, maxLength = 300) => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <article className="bg-neutral overflow-hidden hover:shadow-lg transition-shadow flex flex-row w-[1073px] h-[400px]">
      {/* Image on the left side */}
      <div className="relative h-[400px] w-[460px] flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content on the right side */}
      <div className="px-7 py-9 flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center mb-2 gap-1">
          <span className="inline-block text-primary text-base">
            #{article.category}
          </span>
          <span className="mx-2 text-secondary text-lg">•</span>
          <span className="text-base text-secondary">{article.readingTime}</span>
        </div>
        <h3 className="text-5xl font-bold mb-2">{article.title}</h3>
        <p className="text-lg text-secondary mb-6">{truncateExcerpt(article.excerpt, 160)}</p>
        <Link href={`/article/${article.id}`}>
          <button className="bg-primary text-neutral px-9 py-4  hover:bg-gray-100 transition-colors">
            Read More
          </button>
        </Link>
      </div>
    </article>
  );
} 