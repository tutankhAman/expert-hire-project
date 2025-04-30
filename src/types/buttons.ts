import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  className?: string;
}

export interface ReadMoreButtonProps extends BaseButtonProps {
  href: string;
}

export interface ScrollToTopButtonProps extends BaseButtonProps {
  showAfterHeight?: number;
} 