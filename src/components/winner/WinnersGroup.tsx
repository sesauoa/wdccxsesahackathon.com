import React from 'react';
import { motion } from 'motion/react';
import { WinnerCard } from './WinnerCard';

interface WinnersGroupProps {
  year: number;
  orderedWinners: any[];
  specialAwards: any[];
  containerVariants: any;
  cardVariants: any;
  selectedYear: number | null;
  selectedPlace: string | null;
}

export const WinnersGroup: React.FC<WinnersGroupProps> = ({
  year,
  orderedWinners,
  specialAwards,
  containerVariants,
  cardVariants,
  selectedYear,
  selectedPlace,
}) => {
  return (
    <div key={year} className="mb-12">
      <div className="sticky top-16 z-10 flex w-full justify-center backdrop-blur-sm">
        <h2 className="mb-4 mt-8 text-3xl font-bold">{year}</h2>
      </div>

      <motion.div
        key={`${year}-${selectedYear}-${selectedPlace}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {orderedWinners.map((winner, index) => (
          <motion.div
            key={`winner-${year}-${index}-${selectedYear}-${selectedPlace}`}
            variants={cardVariants}
          >
            <WinnerCard year={year} {...winner} />
          </motion.div>
        ))}
        {specialAwards.map((award, index) => (
          <motion.div
            key={`award-${year}-${index}-${selectedYear}-${selectedPlace}`}
            variants={cardVariants}
          >
            <WinnerCard year={year} {...award} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
