import React from 'react';

interface CardTagProps {
  year: number;
  category: string;
}

export function CardTag({ year, category }: CardTagProps) {
  return (
    <div className="flex w-full flex-wrap gap-2 py-2">
      <div className="rounded-lg bg-wdcc-blue px-2 py-1 font-bold text-white drop-shadow-xl">
        {year}
      </div>
      <div
        className={`rounded-lg px-2 py-1 font-bold text-white drop-shadow-xl ${
          category === '1st Place'
            ? 'bg-yellow-400'
            : category === '2nd Place'
              ? 'bg-gray-300'
              : category === '3rd Place'
                ? 'bg-yellow-600'
                : 'bg-sesa-teal-dark'
        }`}
      >
        {category}
      </div>
    </div>
  );
}
