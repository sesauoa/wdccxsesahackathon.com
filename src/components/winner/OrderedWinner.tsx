'use client';

import React from 'react';
import { WinnerDetails, WinnerImage } from './WinnerComponents';

export default function OrderedWinner({
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
    <div className="flex flex-col items-center overflow-hidden pb-16 lg:min-h-fit lg:min-w-fit lg:flex-row lg:items-start lg:space-x-8 lg:pb-20">
      {/* Details */}
      <div className="lg:w-2/4">
        <WinnerDetails
          place={place}
          teamName={teamName}
          description={description}
          appLink={appLink}
          github={github}
        />
      </div>

      {/* Image */}
      <div className="md:h-2/4 md:w-2/4 lg:size-full lg:pb-8">
        <WinnerImage image={image} alt={teamName} />
      </div>
    </div>
  );
}
