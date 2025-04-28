import React from 'react';
import Carousel from '../components/Carousel';
import ArticleCard from '../components/ArticleCard';
import Sidebar from '../components/Sidebar';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';

export default function Home() {
  return (
    <div className="container">
      <Carousel />
      <main>
        <SearchBar />
        <CategoryFilter />
        <div className="articles-grid">
          {/* Articles will be mapped here */}
        </div>
      </main>
      <Sidebar />
    </div>
  );
} 