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
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      <main className="flex-grow lg:ml-8">
        {orderedWinners.map((winner, index) => (
          <OrderedWinner key={index} {...winner} />
        ))}
        Special Awards
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
  );
}
