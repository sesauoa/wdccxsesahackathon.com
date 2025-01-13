'use client';

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';
import { WinnerCard } from '@/components/winner/WinnerCard';

export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const filteredWinners =
    selectedPlace === 'Special Category'
      ? pastWinners
          .filter(({ year }) => (selectedYear ? year === selectedYear : true))
          .map(({ year, specialAwards }) => ({
            year,
            orderedWinners: [],
            specialAwards,
          }))
          .filter(({ specialAwards }) => specialAwards.length > 0)
      : pastWinners
          .filter(({ year }) => (selectedYear ? year === selectedYear : true))
          .map(({ year, orderedWinners, specialAwards }) => ({
            year,
            orderedWinners: selectedPlace
              ? orderedWinners.filter(
                  (winner) => winner.place === selectedPlace
                )
              : orderedWinners,
            specialAwards: selectedPlace ? [] : specialAwards,
          }))
          .filter(
            ({ orderedWinners, specialAwards }) =>
              orderedWinners.length > 0 || specialAwards.length > 0
          );

  const years = [...new Set(pastWinners.map((winner) => winner.year))];
  const places = ['1st Place', '2nd Place', '3rd Place', 'Special Category'];

  const allFilteredWinners =
    filteredWinners.length > 0
      ? filteredWinners.flatMap(({ year, orderedWinners, specialAwards }) => [
          ...orderedWinners.map((winner) => ({ ...winner, year })),
          ...specialAwards.map((award) => ({ ...award, year })),
        ])
      : [];

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      <header>
        <h1 className="text-4xl font-bold">Past Winners</h1>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex w-full">
            <div className="flex w-[40%] gap-2">
              {years.map((year) => (
                <button
                  key={year}
                  className={`rounded-lg px-4 py-2 font-bold text-white ${
                    selectedYear === year
                      ? 'bg-wdcc-blue-to-sesa-teal'
                      : 'bg-sesa-navy'
                  }`}
                  onClick={() =>
                    setSelectedYear(selectedYear === year ? null : year)
                  }
                >
                  {year}
                </button>
              ))}
            </div>
            <div className="flex w-[60%] justify-between">
              {places.map((place) => (
                <button
                  key={place}
                  className={`rounded-lg px-4 py-2 font-bold text-white ${
                    selectedPlace === place
                      ? 'bg-wdcc-blue-to-sesa-teal'
                      : 'bg-sesa-navy'
                  }`}
                  onClick={() =>
                    setSelectedPlace(selectedPlace === place ? null : place)
                  }
                >
                  {place}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-row gap-8">
        <div className="flex-1">
          {selectedPlace && selectedPlace !== 'Special Category' ? (
            <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {allFilteredWinners.map((winner, index) => (
                <WinnerCard key={index} {...winner} />
              ))}
            </div>
          ) : (
            // Group winners by year
            filteredWinners.map(({ year, orderedWinners, specialAwards }) => (
              <div key={year} className="mb-12">
                <div className="sticky top-16 flex w-full justify-center backdrop-blur-sm">
                  <h2 className="mb-4 mt-8 text-3xl font-bold">{year}</h2>
                </div>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {orderedWinners.map((winner, index) => (
                    <WinnerCard
                      year={year}
                      key={`winner-${index}`}
                      {...winner}
                    />
                  ))}
                  {specialAwards.map((award, index) => (
                    <WinnerCard year={year} key={`award-${index}`} {...award} />
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
}
