'use client';

import React from 'react';
import pastWinners from '@/data/PastWinners';

// WinnerDetails Component
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
    <div className="md:w-2/4">
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
            className="text-blue-300 underline hover:text-blue-400"
          >
            🔗 Deployed Application
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 underline hover:text-blue-400"
          >
            🔗 GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

// WinnerImage Component
function WinnerImage({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="md:w-2/4">
      <img
        src={image}
        alt={alt}
        className="h-full w-full rounded-3xl object-cover object-center shadow-lg"
      />
    </div>
  );
}

// Main PastWinnersPage Component
export default function PastWinnersPage() {
  return (
    <div className="flex min-h-screen p-8 text-white">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <h1 className="mb-8 text-left text-4xl font-bold">Past Winners</h1>
      </div>

      {/* Main Content */}
      <div className="mt-16 flex-grow">
        <div className="flex flex-col space-y-14">
          {pastWinners.map((winner, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:flex-row md:space-x-8"
            >
              {/* Winner Details */}
              <WinnerDetails
                place={winner.place}
                teamName={winner.teamName}
                description={winner.description}
                appLink={winner.appLink}
                github={winner.github}
              />

              {/* Winner Image */}
              <WinnerImage image={winner.image} alt={winner.teamName} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
