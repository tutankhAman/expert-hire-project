import React from 'react';
import { useRouter } from 'next/router';

export default function Article() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="article-container">
      {/* Article content will be rendered here */}
    </div>
  );
} 