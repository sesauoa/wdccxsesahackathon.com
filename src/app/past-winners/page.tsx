'use client';

import React, { useState, useEffect, useRef } from 'react';
import pastWinners from '@/data/PastWinners';
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';
import { WinnerCard } from '@/components/winner/WinnerCard';

export default function PastWinnersPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      <header>
        <h1 className="text-4xl font-bold">Past Winners</h1>
      </header>
      <main className="flex flex-row gap-8">
        {/* Main Content Section */}
        <div className="flex-1">
          {pastWinners.map(({ year, orderedWinners, specialAwards }) => (
            <div key={year} className="mb-12">
              <div className="sticky top-16 flex w-full justify-center backdrop-blur-sm">
                <h2 className="mb-4 mt-8 text-3xl font-bold">{year}</h2>
              </div>
              <div className="flex gap-8">
                {orderedWinners.map((winner, index) => (
                  <WinnerCard year={year} key={index} {...winner} />
                ))}
              </div>

              {specialAwards.length > 0 && (
                <div className="flex h-fit justify-center lg:h-screen lg:flex-col">
                  <div className="flex flex-col gap-8 py-4 lg:flex-row lg:py-0">
                    <div className="flex gap-8">
                      {specialAwards.map((winner, index) => (
                        <WinnerCard year={year} key={index} {...winner} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
