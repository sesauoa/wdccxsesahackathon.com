'use client';

import React from 'react';
import Image from 'next/image';
import { WinnerDetails } from './WinnerComponents';
export default function SpecialAward({
  place,
  teamName,
  description,
  appLink,
  github,
  image,
  members,
}: {
  place: string;
  teamName: string;
  description: string;
  appLink?: string;
  github?: string;
  image: string;
  members: string;
}) {
  return (
    <div className="flex-1 flex-shrink-0 flex-col justify-center space-y-4 pb-5 text-left">
      <div className="flex h-full flex-col justify-between gap-4">
        <div className="flex">
          <WinnerDetails
            place={place}
            teamName={teamName}
            description={description}
            appLink={appLink}
            github={github}
          />
        </div>
        <div className="flex flex-col">
          <Image
            src={image}
            alt={teamName}
            layout="responsive"
            width={16}
            height={9}
            className="rounded-3xl shadow-lg"
          />
          <div className="w-[75%] self-center">
            <h3 className="text-center text-lg font-bold">{teamName}</h3>
            <p className="text-center">{members}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
