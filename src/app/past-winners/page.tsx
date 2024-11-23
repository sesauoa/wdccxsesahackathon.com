'use client';

import React from 'react';
import pastWinners from '@/data/PastWinners';

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

function WinnerImage({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="w-full">
      <img
        src={image}
        alt={alt}
        className="w-full rounded-3xl object-cover object-center shadow-lg"
      />
    </div>
  );
}

export default function PastWinnersPage() {
  const orderedWinners = pastWinners.slice(0, 3);
  const specialAwards = pastWinners.slice(3);

  return (
    <div className="flex min-h-screen p-8 text-white">
      {/* Sidebar */}
      <div className="w-64 flex-shrink-0">
        <h1 className="mb-8 text-left text-4xl font-bold">Past Winners</h1>
      </div>

      {/* Main Content */}
      <div className="mt-16 flex-grow">
        <div className="flex flex-col space-y-8">
          {/* Ordered Winners (1st, 2nd, 3rd) */}
          {orderedWinners.map((winner, index) => (
            <div
              key={index}
              className="flex flex-col items-start md:flex-row md:space-x-8"
            >
              <div className="md:w-2/4">
                <WinnerDetails
                  place={winner.place}
                  teamName={winner.teamName}
                  description={winner.description}
                  appLink={winner.appLink}
                  github={winner.github}
                />
              </div>
              <div className="md:w-2/4">
                <WinnerImage image={winner.image} alt={winner.teamName} />
              </div>
            </div>
          ))}

          {/* Special Awards Heading */}
          <h2 className="text-left text-3xl font-bold">Special Awards</h2>

          {/* Special Awards Section */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {specialAwards.map((winner, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-4 text-center"
              >
                {/* Image */}
                <WinnerImage image={winner.image} alt={winner.teamName} />

                {/* Details */}
                <div>
                  <h2 className="text-[16px] font-bold">
                    {winner.place} - {winner.teamName}
                  </h2>
                  <p className="text-white-300 mb-4 text-[14px]">
                    {winner.description}
                  </p>
                  <div className="flex flex-col space-y-2">
                    {winner.appLink && (
                      <a
                        href={winner.appLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline hover:text-blue-400"
                      >
                        🔗 Deployed Application
                      </a>
                    )}
                    {winner.github && (
                      <a
                        href={winner.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline hover:text-blue-400"
                      >
                        🔗 GitHub Repo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
