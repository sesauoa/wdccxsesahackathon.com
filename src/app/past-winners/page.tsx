'use client';

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';

export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year selection
  const yearData = pastWinners.find((year) => year.year === selectedYear);

  if (!yearData) return <p>No data available for this year.</p>;

  const { orderedWinners, specialAwards } = yearData;

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl snap-y flex-col p-8 text-white">
      {/* Title Section */}
      <header className="mb-12">
        <h1 className="text-left text-4xl font-bold">Past Winners</h1>
      </header>

      {/* Content Section */}
      <div className="mx-auto flex max-w-screen-2xl flex-grow">
        {/* Sidebar */}
        <aside className="flex-shrink-2 hidden w-1/2 lg:block">
          <ul className="space-y-2">
            {pastWinners.map((year) => (
              <li key={year.year}>
                <button
                  onClick={() => setSelectedYear(year.year)}
                  className={`w-full rounded-lg p-2 text-left ${
                    year.year === selectedYear
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {year.year}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-grow lg:ml-8">
          {/* Ordered Winners */}
          {orderedWinners.map((winner, index) => (
            <OrderedWinner key={index} {...winner} />
          ))}

          {/* Special Awards */}
          {specialAwards.length > 0 && (
            <>
              <h2 className="pb-6 text-3xl font-bold">Special Awards</h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {specialAwards.map((winner, index) => (
                  <SpecialAward key={index} {...winner} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
