'use client';

import React from 'react';
import pastWinners from '@/data/pastWinners';
import { H1, Section } from '@/components/common/Typography';
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';

export default function PastWinnersPage() {
  return (
    <Section>
      <header>
        <H1>Past Winners</H1>
      </header>
      <main className="flex flex-row gap-8">
        {/* Sidebar Section */}
        <div className="hidden w-1/6 lg:block">
          {/* Placeholder for sidebar content */}
        </div>

        {/* Main Content Section */}
        <div className="flex-1">
          {pastWinners.map(({ year, orderedWinners, specialAwards }) => (
            <div key={year} className="mb-12">
              <div className="sticky top-16 block w-full backdrop-blur-sm lg:hidden">
                <h2 className="mt-8 text-4xl font-bold">{year}</h2>
              </div>
              {orderedWinners.map((winner, index) => (
                <OrderedWinner key={index} {...winner} />
              ))}
              {specialAwards.length > 0 && (
                <div className="flex h-fit justify-center lg:h-screen lg:flex-col">
                  <div className="flex flex-col gap-8 py-4 lg:flex-row lg:py-0">
                    {specialAwards.map((winner, index) => (
                      <SpecialAward key={index} {...winner} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </Section>
  );
}
