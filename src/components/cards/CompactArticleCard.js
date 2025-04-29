import Link from 'next/link';
import Image from 'next/image';

export default function CompactArticleCard({ article }) {
  return (
    <div className="flex flex-col h-full bg-white hover:shadow-md transition-shadow overflow-hidden">
      <div className="relative h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
        />

      </div>
      <div className="py-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-base font-semibold text-primary">{article.category}</span>
          <span className="text-xl text-secondary">•</span>
          <span className="text-secondary">{article.readingTime}</span>
        </div>
        <h4 className="font-bold text-4xl mb-2 line-clamp-2">{article.title}</h4>
        <p className="text-secondary text-base mb-6 line-clamp-3">{article.excerpt}</p>
        <Link href={`/article/${article.id}`}>
          <button className="bg-primary text-neutral px-9 py-4  hover:bg-neutral hover:text-primary border-2 border-primary transition-colors">
            Read More
          </button>
        </Link>
        
      </div>
    </div>
  );
}