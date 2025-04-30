export const navbarMenuAnimations = {
  overlay: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  container: {
    initial: { y: 20 },
    animate: { y: 0 },
    exit: { y: 20 },
    transition: { duration: 0.3 }
  },
  menuItems: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 }
  },
  activeIndicator: {
    initial: { scaleX: 0 },
    animate: { scaleX: 1 },
    exit: { scaleX: 0 },
    transition: { duration: 0.3 }
  },
  menuItem: {
    whileHover: { x: 10 },
    transition: { duration: 0.2 }
  },
  link: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.1 }
  }
}; 