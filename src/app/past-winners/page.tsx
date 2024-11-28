'use client';

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';
import DateScroller from '@/components/common/DateScroller';

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
      <h2 className="mb-4 text-[30px] font-bold">
        {place} - {teamName}
      </h2>
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
export default function PastWinnersPage() {
  const [selectedYear, setSelectedYear] = useState(2024); // Default year selection. Update to most recent year.
  const yearData = pastWinners.find((year) => year.year === selectedYear);

  if (!yearData) return <p>No data available for this year.</p>; //Might want to look into this to handle invalid inputs (shouldn't be any invalid inputs).

  const { orderedWinners, specialAwards } = yearData;

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      {/* Title Section */}
      <header className="mb-8">
        <h1 className="text-left text-4xl font-bold">Past Winners</h1>
      </header>

      {/* Content Section */}
      <div className="mx-auto flex max-w-screen-2xl flex-grow">
        {/* Section for the date scroller. At the moment, uses a temporary format. */}
        <DateScroller
          pastWinners={pastWinners}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          showAwards={true}
        />
        {/* Main Content */}
        <main className="ml-8 flex-grow">
          <div className="flex flex-col space-y-8">
            {/* Ordered Winners */}
            {orderedWinners.map((winner, index) => (
              <div
                key={index}
                id={`${winner.place.charAt(3)}`}
                className="flex flex-col md:flex-row md:space-x-8"
              >
                <div className="md:w-2/4">
                  <WinnerDetails {...winner} />
                </div>
                <div className="md:w-2/4">
                  <WinnerImage image={winner.image} alt={winner.teamName} />
                </div>
              </div>
            ))}

            {/* Special Awards */}
            {specialAwards.length > 0 && (
              <>
                <h2 id="S" className="text-3xl font-bold">
                  Special Awards
                </h2>
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
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
