import { useState } from 'react';
import type { GetStaticProps } from 'next';
import Navbar from '../components/sections/Navbar';
import HeroCarousel from '../components/sections/HeroCarousel';
import CategorySection from '../components/sections/CategorySection';
import RecentArticles from '../components/sections/RecentArticles';
import Sidebar from '../components/sections/Sidebar';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton';
import fs from 'fs';
import path from 'path';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  author: string;
  readingTime: string;
}

interface Category {
  id: string;
  title: string;
  count: number;
  image: string;
}

interface HomeProps {
  articles: Article[];
  categories: Category[];
}

export default function Home({ articles, categories }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  return (
    <div className="min-h-screen bg-neutral dark:bg-neutral-dark">
      {/* Hero Section with Navbar overlay */}
      <div className="relative">
        <HeroCarousel articles={articles} />
        <div className="absolute top-0 left-0 right-0 z-10">
          <Navbar />
        </div>
      </div>

      {/* Main Content with responsive horizontal margin */}
      <div className="mx-4 md:mx-16 lg:mx-60">
        <main className="py-4 md:py-8">
          {/* Categories Section */}
          <section className="mb-8 md:mb-12">
            <CategorySection 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
              categories={categories}
            />
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8">
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

            {/* Sidebar - shown below articles on mobile/tablet, right side on desktop */}
            <div className="lg:col-span-1">
              <Sidebar />
            </div>
          </div>
        </main>
      </div>
      <ScrollToTopButton />
    </div>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
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
}; 