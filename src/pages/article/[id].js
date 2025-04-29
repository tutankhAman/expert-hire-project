import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import fs from 'fs';
import path from 'path';

export default function ArticlePage({ article }) {
  const router = useRouter();
  
  // If the page is still being generated, show a loading state
  if (router.isFallback) {
    return (
      <div className="min-h-screen bg-neutral">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-500 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
              <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !neutralspace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
            </div>
            <p className="mt-4 text-gray-600">Loading article...</p>
          </div>
        </div>
      </div>
    );
  }

  // If the article doesn't exist, show 404
  if (!article) {
    return (
      <div className="min-h-screen bg-neutral">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-6xl font-bold text-pink-500 mb-4">404</h1>
            <h2 className="text-3xl font-semibold mb-6">Article Not Found</h2>
            <p className="text-gray-600 mb-8">
              The article you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link href="/" className="inline-block bg-pink-500 text-neutral px-6 py-3 rounded-full hover:bg-pink-600 transition-colors">
              Return to Homepage
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-pink-500 hover:text-pink-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Home
          </Link>

          <article className="bg-neutral rounded-xl overflow-hidden shadow-md">
            <div className="relative h-96">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm">
                  {article.category}
                </span>
                <span className="text-gray-500 text-sm">{article.date}</span>
                <span className="text-gray-500 text-sm">By {article.author}</span>
              </div>
              <h1 className="text-4xl font-bold mb-6">{article.title}</h1>
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 mb-6">{article.excerpt}</p>
                <p className="text-gray-700">{article.content}</p>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Read the articles.json file
  const filePath = path.join(process.cwd(), 'src', 'data', 'articles.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  // Get the paths we want to pre-render neutrald on articles
  const paths = data.articles.map((article) => ({
    params: { id: article.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes will 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // Read the articles.json file
  const filePath = path.join(process.cwd(), 'src', 'data', 'articles.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContents);
  
  // Find the article with the matching id
  const article = data.articles.find((article) => article.id === params.id);

  // Pass article data to the page via props
  return { props: { article } };
} 