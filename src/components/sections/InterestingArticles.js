import { useState, useEffect } from 'react';
import CompactArticleCard from '../cards/CompactArticleCard';

export default function InterestingArticles({ articles, excludeId }) {
  const [randomArticles, setRandomArticles] = useState([]);

  useEffect(() => {
    if (articles && articles.length > 0) {
      // Filter out the current article if excludeId is provided
      const filteredArticles = excludeId 
        ? articles.filter(article => article.id !== excludeId)
        : articles;
      
      // Get 3 random articles
      const getRandomArticles = (arr, n) => {
        const shuffled = [...arr].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, n);
      };
      
      setRandomArticles(getRandomArticles(filteredArticles, 3));
    }
  }, [articles, excludeId]);

  if (randomArticles.length === 0) return null;

  return (
    <section className="w-full mx-auto my-20">
      <div className="w-[80vw] mx-auto">
        <h2 className="text-4xl font-bold mb-10">Interesting Articles to Read</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {randomArticles.map(article => (
            <CompactArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}