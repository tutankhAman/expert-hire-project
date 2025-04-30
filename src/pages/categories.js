import { useState, useRef } from 'react';
import Navbar from '../components/sections/Navbar';
import CompactArticleCard from '../components/cards/CompactArticleCard';
import fs from 'fs';
import path from 'path';

export default function Categories({ articles, categories }) {
  // Group articles by category
  const articlesByCategory = categories.reduce((acc, category) => {
    acc[category.title] = articles.filter(article => article.category === category.title);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      
      <main className="mx-4 md:mx-16 lg:mx-60 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mt-20 mb-10">Categories</h1>
        
        {categories.map((category) => (
          <CategoryArticlesSection
            key={category.id}
            category={category}
            articles={articlesByCategory[category.title]}
          />
        ))}
      </main>
    </div>
  );
}

function CategoryArticlesSection({ category, articles }) {
  const carouselRef = useRef(null);
  
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="mb-8 md:mb-12">
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">{category.title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={scrollLeft}
            className="p-1 md:p-2 bg-primary text-neutral hover:bg-primary/90"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className="p-1 md:p-2 bg-primary text-neutral hover:bg-primary/90"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div 
        ref={carouselRef}
        className="flex overflow-x-auto gap-3 md:gap-4 lg:gap-7 scrollbar-hide w-full relative overflow-visible"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {articles.map((article) => (
          <div key={article.id} className="flex-none w-[250px] md:w-[280px] lg:w-[300px]">
            <CompactArticleCard article={article} />
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  // Read the articles.json file
  const articlesPath = path.join(process.cwd(), 'src', 'data', 'articles.json');
  const articlesContents = fs.readFileSync(articlesPath, 'utf8');
  const articlesData = JSON.parse(articlesContents);
  
  // Read the categories.json file
  const categoriesPath = path.join(process.cwd(), 'src', 'data', 'categories.json');
  const categoriesContents = fs.readFileSync(categoriesPath, 'utf8');
  const categoriesData = JSON.parse(categoriesContents);
  
  return { 
    props: { 
      articles: articlesData.articles,
      categories: categoriesData.categories
    } 
  };
} 