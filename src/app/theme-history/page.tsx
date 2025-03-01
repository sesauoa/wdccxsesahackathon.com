'use client';

import React from 'react';
import { motion } from 'motion/react';
import { StandardLayout } from '@/components/layout/StandardLayout';
import { H1 } from '@/components/layout/Typography';
import containerVariants from '@/styles/containerVariants';
import cardVariants from '@/styles/cardVariants';
import themeHistory from './_data/themeHistory';

interface CardProps {
  year: number;
  theme: string;
  slogan: string;
}

function Card({ year, theme, slogan }: CardProps) {
  return (
    <div className="flex flex-col justify-between rounded-xl bg-black bg-opacity-20 p-4">
      <div key={year} className="space-y-2 text-center">
        <div className="text-3xl font-bold mb-6">{year}</div>
        <div className="text-2xl font-semibold">{"✨ " + theme.toUpperCase() + " ✨"}</div>
        <div className="text-lg italic">{slogan}</div>
      </div>
    </div>
  );
}

export default function ThemeHistoryPage() {
  return (
    <StandardLayout>
      <H1>Hackathon Theme History</H1>
      <div className="container mx-auto max-w-screen-sm">
        <motion.div
          className="mt-6 space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {themeHistory.map(({ year, theme, slogan }) => (
            <motion.div key={year} variants={cardVariants}>
              <Card year={year} theme={theme} slogan={slogan} />
            </motion.div>
          ))}
        </motion.div>


      </div>
    </StandardLayout>
  );
}
