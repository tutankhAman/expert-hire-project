import { AnimationVariants } from '../types/framer-motion';

export const recentArticlesAnimations: AnimationVariants = {
  section: {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  },
  heading: {
    initial: { opacity: 0, x: -30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },
  article: {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    whileHover: {
      scale: 1.02,
      y: -5,
      transition: { 
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }
    },
    whileTap: {
      scale: 0.98,
      transition: { duration: 0.2 }
    }
  },
  pagination: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },
  paginationButton: {
    whileHover: {
      scale: 1.1,
      y: -2,
      transition: { duration: 0.2 }
    },
    whileTap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  },
  paginationContainer: {
    whileHover: { scale: 1.02 },
    animate: { transition: { duration: 0.3 } }
  },
  paginationInfo: {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  },
  emptyState: {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }
}; 