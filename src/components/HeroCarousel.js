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
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Slides */}
      <div className="relative h-full w-full">
        {featuredStories.map((story, index) => (
          <div
            key={story.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              {/* Content with container margin */}
              <div className="absolute bottom-0 left-0 right-0 mx-60 text-white">
                <div className="w-[705px] h-[498px] bg-base text-primary p-8">
                  <span className="inline-block py-1 rounded-full text-sm mb-4">
                    {story.category}
                  </span>
                  <h2 className="text-6xl font-bold mb-4">{story.title}</h2>
                  <p className="text-xl text-secondary mb-8">{story.excerpt}</p>
                  <Link href={`/article/${story.id}`}>
                    <button className="bg-primary text-base px-9 py-4  hover:bg-gray-100 transition-colors">
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
} 