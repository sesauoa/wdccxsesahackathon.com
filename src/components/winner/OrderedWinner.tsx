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
    <div className="flex h-screen w-full items-center overflow-hidden">
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex w-[75%]">
          <WinnerDetails
            place={place}
            teamName={teamName}
            description={description}
            appLink={appLink}
            github={github}
          />
        </div>

        <div className="flex w-[100%] flex-col items-center gap-2">
          <Image
            src={image}
            alt={teamName}
            layout="responsive"
            width={16}
            height={9}
            className="rounded-3xl shadow-lg"
          />
          <div className="w-[50%]">
            <h3 className="text-center text-lg font-bold">{teamName}</h3>
            <p className="text-center">{members}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
