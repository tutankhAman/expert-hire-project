import { AnimationVariants } from '../types/framer-motion';

export const navbarMenuAnimations: AnimationVariants = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0 }
  },
  container: {
    initial: { y: 20 },
    animate: { y: 0, transition: { duration: 0.3 } },
    exit: { y: 20 }
  },
  menuItems: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20 }
  },
  activeIndicator: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1, transition: { duration: 0.3 } },
    exit: { scaleX: 0 }
  },
  menuItem: {
    whileHover: { x: 10 },
    animate: { transition: { duration: 0.2 } }
  },
  link: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    animate: { transition: { duration: 0.1 } }
  }
}; 