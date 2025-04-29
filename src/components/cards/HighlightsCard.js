import React from 'react';

const highlights = [
  {
    id: 1,
    title: "Mother's Day Special",
  },
  {
    id: 2,
    title: "Featured Stories",
  },
  {
    id: 3,
    title: "Weekly Newsletter",
  }
];

export default function HighlightsCard() {
  return (
    <div className="bg-neutral">
      <p className="text-2xl font-bold mb-4">Highlights</p>
      <div className="space-y-2">
        {highlights.map((highlight) => (
          <div key={highlight.id} className="w-full">
            <div className="bg-primary w-full hover:bg-primary/90 transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center py-10">
                <div className="h-1 w-16 bg-neutral mb-4 transition-all duration-300"></div>
                <h4 className="text-2xl text-neutral text-center">{highlight.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 