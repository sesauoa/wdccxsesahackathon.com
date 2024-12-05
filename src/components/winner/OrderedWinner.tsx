'use client';

import React from 'react';
import { WinnerDetails } from './WinnerComponents';
import Image from 'next/image';
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
    <div className="flex h-screen w-full flex-col items-center overflow-hidden pb-16 lg:flex-row lg:gap-4 lg:pb-20">
      <WinnerDetails
        place={place}
        teamName={teamName}
        description={description}
        appLink={appLink}
        github={github}
      />
      <div className="flex w-full items-center justify-center">
        <Image
          src={image}
          alt={teamName}
          width={2000}
          height={2000}
          className="rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
}
