import { ReactNode } from 'react';
import { Article, Category } from './animation';

export interface BaseCardProps {
  className?: string;
  children?: ReactNode;
}

export interface ArticleCardProps extends BaseCardProps {
  article: Article;
  variant?: 'default' | 'compact';
}

export interface CategoryCardProps extends BaseCardProps {
  category: Category;
}

export interface HighlightsCardProps extends BaseCardProps {
  // The component has hardcoded highlights internally
} 