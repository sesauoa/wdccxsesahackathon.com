'use client';

import React, { useState } from 'react';
import { pastWinners2021 } from './_data/past-winners/pastWinners2021';
import { pastWinners2022 } from './_data/past-winners/pastWinners2022';
import { pastWinners2023 } from './_data/past-winners/pastWinners2023';
import { pastWinners2024 } from './_data/past-winners/pastWinners2024';
import { H1 } from '@/components/Layout/Typography';
import { SectionLayout } from '@/components/Layout/SectionLayout';
import { motion } from 'motion/react';
import { filterWinners, getAllFilteredWinners } from '@/utils/WinnerUtils';
import { FilterButtons } from '@/app/past-winners/_components/FilterButtons';
import { WinnersGroup } from '@/app/past-winners/_components/WinnersGroup';
import { WinnerCard } from '@/app/past-winners/_components/WinnerCard';

export default function PastWinnersPage() {
  const pastWinners = [
    pastWinners2024,
    pastWinners2023,
    pastWinners2022,
    pastWinners2021,
  ];
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
    <SectionLayout className='2xl:px-60 xl:px-24 lg:px-20 md:px-24 px-10'>
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
          {selectedPlace.length > 0 &&
            !selectedPlace.includes('Special Awards') ? (
            <motion.div
              key={`${selectedYear}-${selectedPlace}`}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
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
    </SectionLayout>
  );
}
