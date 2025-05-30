import { useState, useEffect, JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ReadMoreButton from '../buttons/ReadMoreButton';
import { motion, AnimatePresence } from 'framer-motion';
import { heroCarouselAnimations } from '../../animations/heroCarousel';
import { Article } from '@/types/animation';

interface HeroCarouselProps {
  articles: Article[];
}

export default function HeroCarousel({ articles }: HeroCarouselProps): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  
  // Use the first 3 articles as featured stories
  const featuredStories = articles ? articles.slice(0, 3) : [];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredStories.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev - 1 + featuredStories.length) % featuredStories.length);
  };

  if (!articles || featuredStories.length === 0) {
    return (
      <div className="relative w-full h-[90vh] overflow-hidden bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600">No featured stories available.</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
      {/* Slides */}
      <div className="relative h-full w-full">
        <AnimatePresence mode="wait">
          {featuredStories.map((story, index) => (
            index === currentSlide && (
              <motion.div
                key={story.id}
                {...heroCarouselAnimations.slide}
                className="absolute inset-0"
              >
                <div className="relative h-full w-full">
                  {/* Full-width image */}
                  <motion.div 
                    className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </motion.div>
                  
                  {/* Content with container margin */}
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 mx-4 md:mx-16 lg:mx-60 text-neutral"
                    {...heroCarouselAnimations.content}
                  >
                    <div className="relative w-full md:w-[600px] lg:w-[705px] h-[300px] md:h-[400px] lg:h-[498px] bg-neutral dark:bg-neutral-dark text-primary dark:text-primary-dark px-4 md:px-8">
                      {/* Navigation buttons - inside content container at top right */}
                      <div className="absolute top-0 right-0 md:right-[-64px] flex z-10">
                        <motion.button
                          onClick={prevSlide}
                          className="bg-primary dark:bg-primary-dark text-neutral dark:text-neutral-dark h-12 w-12 md:h-16 md:w-16 flex items-center justify-center"
                          aria-label="Previous slide"
                          {...heroCarouselAnimations.button}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                          </svg>
                        </motion.button>
                        <motion.button
                          onClick={nextSlide}
                          className="bg-neutral dark:bg-neutral-dark text-primary dark:text-primary-dark h-12 w-12 md:h-16 md:w-16 flex items-center justify-center"
                          aria-label="Next slide"
                          {...heroCarouselAnimations.button}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                          </svg>
                        </motion.button>
                      </div>
                      
                      <motion.div 
                        className="py-8 md:py-16"
                        {...heroCarouselAnimations.content}
                      >
                        <motion.span 
                          className="inline-block py-1 rounded-full text-sm md:text-base"
                          {...heroCarouselAnimations.content}
                        >
                          {story.category}
                        </motion.span>
                        <motion.h2 
                          className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4"
                          {...heroCarouselAnimations.content}
                        >
                          {story.title}
                        </motion.h2>
                        <motion.p 
                          className="text-base md:text-lg lg:text-xl text-secondary mb-4 md:mb-8 line-clamp-2"
                          {...heroCarouselAnimations.content}
                        >
                          {story.excerpt}
                        </motion.p>
                        <motion.div
                          {...heroCarouselAnimations.content}
                        >
                          <ReadMoreButton href={`/article/${story.id}`}>Read More</ReadMoreButton>
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
} 