import React from 'react';
import Link from 'next/link';

export default function ReadMoreButton({ href }) {
  return (
    <Link href={href}>
      <button className="bg-primary dark:bg-primary-dark text-neutral dark:text-neutral-dark px-6 md:px-9 py-3 md:py-4 hover:bg-neutral dark:hover:bg-neutral-dark hover:text-primary dark:hover:text-primary-dark border-2 border-primary dark:border-primary-dark transition-colors">
        Read More
      </button>
    </Link>
  );
} 