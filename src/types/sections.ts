import { ReactNode } from 'react';
import { Article } from './animation';

export interface BaseSectionProps {
  className?: string;
  children?: ReactNode;
}

export interface RecentArticlesProps extends BaseSectionProps {
  articles: Article[];
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface CategorySectionProps extends BaseSectionProps {
  categories: {
    id: string;
    name: string;
    count: number;
    image: string;
  }[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

export interface HeroCarouselProps extends BaseSectionProps {
  articles: Article[];
}

export interface NavbarProps extends BaseSectionProps {
  onSearchClick: () => void;
  onMenuToggle: () => void;
  isMenuOpen: boolean;
}

export interface InterestingArticlesProps extends BaseSectionProps {
  articles: Article[];
}

export interface ReadingProgressBarProps extends BaseSectionProps {
  target?: string;
}

export interface SearchOverlayProps extends BaseSectionProps {
  isOpen: boolean;
  onClose: () => void;
  onSearch: (query: string) => void;
}

export interface SidebarProps extends BaseSectionProps {
  isOpen: boolean;
  onClose: () => void;
  categories: {
    id: string;
    name: string;
    count: number;
  }[];
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
} 