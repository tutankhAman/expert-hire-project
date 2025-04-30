import { Variants } from 'framer-motion';

export interface AnimationVariants {
  [key: string]: Variants;
}

export interface MotionVariant {
  initial: Record<string, any>;
  animate: Record<string, any> & {
    transition?: {
      duration?: number;
      delay?: number;
      ease?: string;
      [key: string]: any;
    };
  };
  exit?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
} 