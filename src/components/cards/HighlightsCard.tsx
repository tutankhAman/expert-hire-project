import React, { JSX } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { HighlightsCardProps } from '@/types/cards';

interface Highlight {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  color?: 'primary' | 'secondary' | 'accent';
}

const highlights: Highlight[] = [
  {
    id: 1,
    title: "Mother's Day Special",
    description: "Celebrate the special women in your life",
    icon: <span>🎁</span>,
    color: 'primary'
  },
  {
    id: 2,
    title: "Featured Stories",
    description: "Read our most popular articles",
    icon: <span>🌟</span>,
    color: 'secondary'
  },
  {
    id: 3,
    title: "Weekly Newsletter",
    description: "Stay updated with our latest content",
    icon: <span>📧</span>,
    color: 'accent'
  }
];

export default function HighlightsCard({ className = '' }: HighlightsCardProps): JSX.Element {
  const { isDarkMode } = useTheme();

  return (
    <div className="bg-neutral dark:bg-neutral-dark">
      <p className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-primary dark:text-primary-dark">Highlights</p>
      <div className="space-y-2">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="w-full">
            <div className={`w-full transition-all duration-300 cursor-pointer group
              ${isDarkMode 
                ? 'bg-primary-dark hover:bg-neutral-dark border-2 border-primary-dark hover:border-primary-dark' 
                : 'bg-primary hover:bg-neutral border-2 border-primary hover:border-primary'
              }`}
            >
              <div className="flex flex-col items-center py-6 md:py-10">
                <div className={`h-1 w-12 md:w-16 mb-2 md:mb-4 transition-all duration-300
                  ${isDarkMode ? 'bg-neutral-dark group-hover:bg-primary-dark' : 'bg-neutral group-hover:bg-primary'}`}
                />
                <h4 className={`text-lg md:text-2xl text-center transition-all duration-300
                  ${isDarkMode 
                    ? 'text-neutral-dark group-hover:text-primary-dark' 
                    : 'text-neutral group-hover:text-primary'
                  }`}
                >
                  {highlight.title}
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 