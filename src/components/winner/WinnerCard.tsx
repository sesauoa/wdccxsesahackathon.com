import React from 'react';
import Image from 'next/image';
import { CardTag } from './CardTag';

interface WinnerCardProps {
  place: string;
  teamName: string;
  description: string;
  appLink?: string;
  github?: string;
  image: string;
  members?: string;
  year: number;
}

export function WinnerCard({
  place,
  teamName,
  description,
  appLink,
  github,
  image,
  year,
}: WinnerCardProps) {
  return (
    <div className="flex w-full flex-col rounded-xl bg-black bg-opacity-20 p-8">
      <div className="flex w-full">
        <Image
          src={image}
          alt={teamName}
          layout="responsive"
          width={16}
          height={9}
          className="shadow-lg"
        />
      </div>

      <CardTag year={year} category={place} />

      <div className="flex w-full flex-col">
        <h2 className="mb-4 text-2xl font-bold">{teamName}</h2>
        <p className="text-md mb-4 font-bold text-white">{description}</p>
        <div className="flex flex-col space-y-2">
          {appLink && (
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-400"
            >
              🔗 GitHub Repo
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 underline hover:text-blue-400"
            >
              🔗 Deployed Application
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
