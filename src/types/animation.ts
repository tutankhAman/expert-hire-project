import { ReactNode } from 'react';

export interface AnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  image: string;
  author: string;
}

export interface Category {
  id: string;
  title: string;
  count: number;
  image: string;
} 