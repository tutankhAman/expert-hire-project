import { useState } from 'react';
import Navbar from '../components/sections/Navbar';
import HeroCarousel from '../components/sections/HeroCarousel';
import CategorySection from '../components/sections/CategorySection';
import RecentArticles from '../components/sections/RecentArticles';
import Sidebar from '../components/sections/Sidebar';
import fs from 'fs';
import path from 'path';

export default function Home({ articles, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="min-h-screen bg-neutral">
      {/* Hero Section with Navbar overlay */}
      <div className="relative">
        <HeroCarousel articles={articles} />
        <div className="absolute top-0 left-0 right-0 z-10">
      <Navbar />
        </div>
      </div>

      {/* Main Content with 240px horizontal margin */}
      <div className="mx-60">
        <main className="py-8">
          {/* Categories Section */}
          <section className="mb-12">
            <CategorySection 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              categories={categories}
            />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Recent Articles Section */}
              <section>
                <RecentArticles 
                  selectedCategory={selectedCategory} 
                  articles={articles}
                />
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  // Read the articles.json file
  const articlesPath = path.join(process.cwd(), 'src', 'data', 'articles.json');
  const articlesContents = fs.readFileSync(articlesPath, 'utf8');
  const articlesData = JSON.parse(articlesContents);
  
  // Read the categories.json file
  const categoriesPath = path.join(process.cwd(), 'src', 'data', 'categories.json');
  const categoriesContents = fs.readFileSync(categoriesPath, 'utf8');
  const categoriesData = JSON.parse(categoriesContents);
  
  // Pass data to the page via props
  return { 
    props: { 
      articles: articlesData.articles,
      categories: categoriesData.categories
    } 
  };
} 