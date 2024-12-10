'use client';

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';
<<<<<<< HEAD
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';

=======
import { H1, H2 } from '@/components/common/Typography';

// Parses and properly formats and outputs the data from PastWinners.ts
function WinnerDetails({
  place,
  teamName,
  description,
  appLink,
  github,
}: {
  place: string;
  teamName: string;
  description: string;
  appLink?: string;
  github?: string;
}) {
  return (
    <div>
      <H2 className="mb-4">
        {place} - {teamName}
      </H2>
      <p className="mb-4 text-white">{description}</p>
      <div className="flex flex-col space-y-2">
        {appLink && (
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-300 underline hover:text-blue-400"
          >
            🔗 Deployed Application
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-300 underline hover:text-blue-400"
          >
            🔗 GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

// Formats the images provided from the PastWinners.ts import.
function WinnerImage({ image, alt }: { image: string; alt: string }) {
  return (
    <img
      src={image}
      alt={alt}
      className="h-3/4 w-full rounded-3xl object-cover object-center shadow-lg"
    />
  );
}

// Main PastWinnersPage Component
>>>>>>> main
export default function PastWinnersPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
<<<<<<< HEAD
      <header>
        <h1 className="text-5xl font-bold">Past Winners</h1>
=======
      {/* Title Section */}
      <header className="mb-8">
        <H1>Past Winners</H1>
>>>>>>> main
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
<<<<<<< HEAD
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
=======
            ))}

            {/* Special Awards */}
            {specialAwards.length > 0 && (
              <>
                <H2>Special Awards</H2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {specialAwards.map((winner, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-8"
                    >
                      <WinnerDetails {...winner} />
                      <WinnerImage image={winner.image} alt={winner.teamName} />
                    </div>
                  ))}
>>>>>>> main
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
