'use client';
import React, { useState } from 'react';
import pastWinners from '@/data/pastWinners';
import { H1 } from '@/components/common/Typography';
import { motion } from 'motion/react';
import { filterWinners, getAllFilteredWinners } from '@/utils/WinnerUtils';
import { FilterButtons } from '@/components/winner/FilterButtons';
import { WinnersGroup } from '@/components/winner/WinnersGroup';
import { WinnerCard } from '@/components/winner/WinnerCard';

export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<string | null>(null);

  const filteredWinners = filterWinners(
    pastWinners,
    selectedYear,
    selectedPlace
  );
  const allFilteredWinners = getAllFilteredWinners(filteredWinners);

  const years = [...new Set(pastWinners.map((winner) => winner.year))];
  const places = ['1st Place', '2nd Place', '3rd Place', 'Other'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      <header>
        <H1 className="text-4xl font-bold">Past Winners</H1>
        <div className="mt-8">
          <FilterButtons
            years={years}
            places={places}
            selectedYear={selectedYear}
            selectedPlace={selectedPlace}
            setSelectedYear={setSelectedYear}
            setSelectedPlace={setSelectedPlace}
          />
        </div>
      </header>

      <main className="flex flex-row gap-8">
        <div className="flex-1">
          {selectedPlace && selectedPlace !== 'Other' ? (
            <motion.div
              key={`${selectedYear}-${selectedPlace}`} // Unique key for the flat grid
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {allFilteredWinners.map((winner, index) => (
                <motion.div
                  key={`${winner.year}-${index}-${selectedYear}-${selectedPlace}`} // Unique key for each winner in flat grid
                  variants={cardVariants}
                >
                  <WinnerCard {...winner} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            filteredWinners.map(({ year, orderedWinners, specialAwards }) => (
              <WinnersGroup
                key={year}
                year={year}
                orderedWinners={orderedWinners}
                specialAwards={specialAwards}
                containerVariants={containerVariants}
                cardVariants={cardVariants}
                selectedYear={selectedYear}
                selectedPlace={selectedPlace}
              />
            ))
          )}
        </div>
      </main>
    </div>
  );
}
