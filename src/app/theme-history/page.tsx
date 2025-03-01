'use client';

import React from 'react';
import { motion } from 'motion/react';
import { StandardLayout } from '@/components/layout/StandardLayout';
import { H1 } from '@/components/layout/Typography';
import containerVariants from '@/styles/containerVariants';

export default function ThemeHistoryPage() {
  return (
    <StandardLayout>
      <H1>Hackathon Theme History</H1>
      <div className="container mx-auto max-w-screen-sm">
        <motion.div
          className="mt-6 grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        </motion.div>
      </div>
    </StandardLayout>
  );
}
