'use client';

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';
import { H1, H2 } from '@/components/common/Typography';

import Image from 'next/image';

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
    <Image
      src={image}
      alt={alt}
      layout="fill"
      className="w-full rounded-3xl object-cover object-center shadow-lg"
    />
  );
}

// Main PastWinnersPage Component
export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year selection. Update to most recent year.
  const yearData = pastWinners.find((year) => year.year === selectedYear);

  if (!yearData) return <p>No data available for this year.</p>; //Might want to look into this to handle invalid inputs (shouldn't be any invalid inputs).

  const { orderedWinners, specialAwards } = yearData;

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      {/* Title Section */}
      <header className="mb-8">
        <H1>Past Winners</H1>
      </header>

      {/* Content Section */}
      <div className="mx-auto flex max-w-screen-2xl flex-grow">
        {/* Section for the date scroller. At the moment, uses a temporary format. */}
        <aside className="flex-shrink-2 w-[40vw]">
          <ul className="space-y-2">
            {pastWinners.map((year) => (
              <li key={year.year}>
                <button
                  onClick={() => setSelectedYear(year.year)}
                  className={`w-full rounded-lg p-2 text-left ${
                    year.year === selectedYear
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {year.year}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="ml-8 flex-grow">
          <div className="flex flex-col space-y-8">
            {/* Ordered Winners */}
            {orderedWinners.map((winner, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:space-x-8"
              >
                <div className="md:w-2/4">
                  <WinnerDetails {...winner} />
                </div>
                <div className="relative md:w-2/4">
                  <WinnerImage image={winner.image} alt={winner.teamName} />
                </div>
              </div>
            ))}

            {/* Special Awards */}
            {specialAwards.length > 0 && (
              <>
                <H2>Special Awards</H2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {specialAwards.map((winner, index) => (
                    <div
                      key={index}
                      className="relative flex flex-col items-center gap-8"
                    >
                      <WinnerDetails {...winner} />
                      <div className="relative h-[15vw] w-full">
                        <WinnerImage
                          image={winner.image}
                          alt={winner.teamName}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
