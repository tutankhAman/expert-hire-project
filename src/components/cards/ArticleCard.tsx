import React, { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadMoreButton from '../buttons/ReadMoreButton';
import { ArticleCardProps } from '@/types/cards';

export default function ArticleCard({ article, className = '' }: ArticleCardProps): JSX.Element {
  // Helper to truncate excerpt to 4-6 lines (about 300 chars)
  const truncateExcerpt = (text: string, maxLength: number = 300): string => {
    if (!text) return '';
    return text.length > maxLength ? text.slice(0, maxLength).trim() + '...' : text;
  };

  return (
    <article className={`bg-neutral dark:bg-neutral-dark overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row h-auto md:h-[400px] ${className}`}>
      {/* Image on the left side */}
      <div className="relative h-[300px] md:h-[400px] w-full md:w-[460px] flex-shrink-0">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Text content on the right side */}
      <div className="px-4 md:px-7 py-4 md:py-9 flex flex-col flex-1 overflow-hidden">
        <div className="flex items-center mb-2 gap-1">
          <span className="inline-block text-primary dark:text-primary-dark text-sm md:text-base">
            #{article.category}
          </span>
          <span className="mx-2 text-secondary dark:text-secondary-dark text-base md:text-lg">•</span>
          <span className="text-sm md:text-base text-secondary dark:text-secondary-dark">{article.readingTime}</span>
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-2 line-clamp-2 text-primary dark:text-primary-dark">{article.title}</h3>
        <p className="text-base md:text-lg text-secondary mb-4 md:mb-6 line-clamp-3">{truncateExcerpt(article.excerpt, 160)}</p>
        <ReadMoreButton href={`/article/${article.id}`}>Read More</ReadMoreButton>
      </div>
    </article>
  );
} 