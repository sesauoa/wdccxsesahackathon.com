'use client';

import React from 'react';
import { WinnerImage } from './WinnerComponents';

export default function SpecialAward({
  place,
  teamName,
  description,
  appLink,
  github,
  image,
}: {
  place: string;
  teamName: string;
  description: string;
  appLink?: string;
  github?: string;
  image: string;
}) {
  return (
    <div className="flex flex-col items-center justify-between space-y-4 pb-5 text-center">
      {/* Details */}
      <div>
        <h2 className="text-left text-2xl font-bold">
          {place} - {teamName}
        </h2>
        <p className="text-white-300 mb-4 text-left text-[14px]">
          {description}
        </p>
        <div className="flex flex-col space-y-2">
          {appLink && (
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-blue-300 underline hover:text-blue-400"
            >
              🔗 Deployed Application
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-left text-blue-300 underline hover:text-blue-400"
            >
              🔗 GitHub Repo
            </a>
          )}
        </div>
      </div>

      {/* Image */}
      <WinnerImage image={image} alt={teamName} />
    </div>
  );
}
