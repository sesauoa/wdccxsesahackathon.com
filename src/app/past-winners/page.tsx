import { H1 } from '@/components/common/Typography';

('use client');

import React, { useState } from 'react';
import pastWinners from '@/data/PastWinners';

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
    <div className="h-screen w-full p-20">
      <H1>Past Winners</H1>
    </div>
  );
}
