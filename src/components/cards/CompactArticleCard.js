import Link from 'next/link';
import Image from 'next/image';

export default function CompactArticleCard({ article }) {
  return (
    <div className="flex flex-col h-full bg-neutral overflow-hidden">
      <div className="relative h-32 md:h-40 lg:h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="py-3 md:py-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 md:mb-4">
          <span className="text-sm md:text-base font-semibold text-primary">{article.category}</span>
          <span className="text-lg md:text-xl text-secondary">•</span>
          <span className="text-sm md:text-base text-secondary">{article.readingTime}</span>
        </div>
        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 line-clamp-2">{article.title}</h4>
        <p className="text-secondary text-sm md:text-base mb-4 md:mb-6 line-clamp-3">{article.excerpt}</p>
        <Link href={`/article/${article.id}`}>
          <button className="bg-primary text-neutral px-6 md:px-9 py-3 md:py-4 hover:bg-neutral hover:text-primary border-2 border-primary transition-colors text-sm md:text-base">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
}