import { Variants } from 'framer-motion';

export interface AnimationVariants {
  [key: string]: Variants;
}

export interface MotionVariant {
  hidden: Record<string, any>;
  visible: Record<string, any>;
  exit?: Record<string, any>;
  hover?: Record<string, any>;
  tap?: Record<string, any>;
} 