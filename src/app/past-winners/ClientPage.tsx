'use client';

import React, { useState } from 'react';
import { pastWinners } from './_data/past-winners/pastWinners';
import { H1 } from '@/components/layout/Typography';
import { StandardLayout } from '@/components/layout/StandardLayout';
import { motion } from 'motion/react';
import { filterWinners, getAllFilteredWinners } from '@/utils/WinnerUtils';
import { FilterButtons } from '@/app/past-winners/_components/FilterButtons';
import { WinnersGroup } from '@/app/past-winners/_components/WinnersGroup';
import { WinnerCard } from '@/app/past-winners/_components/WinnerCard';
import containerVariants from '@/styles/containerVariants';
import cardVariants from '@/styles/cardVariants';

export default function ClientPage() {
  const [selectedYear, setSelectedYear] = useState<number[]>([]); // Multiple years can be selected
  const [selectedPlace, setSelectedPlace] = useState<string[]>([]); // Multiple places can be selected

  const filteredWinners = filterWinners(
    pastWinners,
    selectedYear.length > 0 ? selectedYear : null,
    selectedPlace.length > 0 ? selectedPlace : null
  );
  const allFilteredWinners = getAllFilteredWinners(filteredWinners);

  const years = [...new Set(pastWinners.map((winner) => winner.year))];
  const places = ['1st Place', '2nd Place', '3rd Place', 'Special Awards'];

  return (
    <StandardLayout>
      <header>
        <H1>Past Winners</H1>
        <div>
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

      <main className="flex flex-row">
        <div className="flex-1">
          {selectedPlace.length > 0 &&
          !selectedPlace.includes('Special Awards') ? (
            <motion.div
              key={`${selectedYear}-${selectedPlace}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {allFilteredWinners.map((winner, index) => (
                <motion.div
                  key={`${winner.year}-${index}`}
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
    </StandardLayout>
  );
}
