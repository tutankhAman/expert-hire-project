import React, { JSX } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ReadMoreButton from '../buttons/ReadMoreButton';
import { ArticleCardProps } from '@/types/cards';

export default function CompactArticleCard({ article, className = '' }: ArticleCardProps): JSX.Element {
  return (
    <div className={`flex flex-col h-full bg-neutral dark:bg-neutral-dark overflow-hidden ${className}`}>
      <div className="relative h-32 md:h-40 lg:h-48 w-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="py-3 md:py-4 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-2 md:mb-4">
          <span className="text-sm md:text-base font-semibold text-primary dark:text-primary-dark">{article.category}</span>
          <span className="text-lg md:text-xl text-secondary dark:text-secondary-dark">•</span>
          <span className="text-sm md:text-base text-secondary dark:text-secondary-dark">{article.readingTime}</span>
        </div>
        <h4 className="font-bold text-2xl md:text-3xl lg:text-4xl mb-1 md:mb-2 line-clamp-2 text-primary dark:text-primary-dark">{article.title}</h4>
        <p className="text-secondary dark:text-secondary-dark text-sm md:text-base mb-4 md:mb-6 line-clamp-3">{article.excerpt}</p>
        <ReadMoreButton href={`/article/${article.id}`}>Read More</ReadMoreButton>
      </div>
    </div>
  );
} 