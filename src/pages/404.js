import Link from 'next/link';
import Navbar from '../components/sections/Navbar';
import ScrollToTopButton from '../components/buttons/ScrollToTopButton';

export default function Custom404() {
  return (
    <div className="min-h-screen bg-neutral dark:bg-neutral-dark">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center py-16">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="inline-block bg-primary text-neutral px-6 py-3 rounded-full hover:bg-primary/80 transition-colors">
            Return to Homepage
          </Link>
        </div>
      </main>
      <ScrollToTopButton />
    </div>
  );
} 