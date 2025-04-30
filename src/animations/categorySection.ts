import { AnimationVariants } from '../types/framer-motion';

export const categorySectionAnimations: AnimationVariants = {
  heading: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  },
  button: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 }
  }
}; 