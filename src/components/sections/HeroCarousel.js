import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroCarousel({ articles }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Use the first 3 articles as featured stories
  const featuredStories = articles ? articles.slice(0, 3) : [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredStories.length);
  };

  const prevSlide = () => {
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
        {featuredStories.map((story, index) => (
          <div
            key={story.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative h-full w-full">
              {/* Full-width image */}
              <div className="absolute inset-0 w-screen left-1/2 transform -translate-x-1/2">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
              </div>
              
              {/* Content with container margin */}
              <div className="absolute bottom-0 left-0 right-0 mx-4 md:mx-16 lg:mx-60 text-neutral">
                <div className="relative w-full md:w-[600px] lg:w-[705px] h-[300px] md:h-[400px] lg:h-[498px] bg-neutral text-primary px-4 md:px-8">
                  {/* Navigation buttons - inside content container at top right */}
                  <div className="absolute top-0 right-0 md:right-[-64px] flex z-10">
                    <button
                      onClick={prevSlide}
                      className="bg-primary text-neutral h-12 w-12 md:h-16 md:w-16 flex items-center justify-center"
                      aria-label="Previous slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="bg-neutral text-primary h-12 w-12 md:h-16 md:w-16 flex items-center justify-center"
                      aria-label="Next slide"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 md:w-6 md:h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="py-8 md:py-16">
                    <span className="inline-block py-1 rounded-full text-sm md:text-base">
                      {story.category}
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-2 md:mb-4">{story.title}</h2>
                    <p className="text-base md:text-lg lg:text-xl text-secondary mb-4 md:mb-8 line-clamp-2">{story.excerpt}</p>
                    <Link 
                      href={`/article/${story.id}`}
                      passHref
                      legacyBehavior
                      data-article-id={story.id}
                    >
                      <a>
                        <button className="bg-primary text-neutral px-6 md:px-9 py-2 md:py-4 hover:bg-gray-100 transition-colors">
                          Read More
                        </button>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}