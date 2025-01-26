import React, { useState } from 'react';
import Image from 'next/image';
import { CardTag } from './CardTag';

interface WinnerCardProps {
  place: string;
  teamName: string;
  description?: string;
  appLink?: string;
  github?: string;
  image: string;
  members?: string[];
  year: number;
}

export function WinnerCard({
  place,
  teamName,
  description,
  appLink,
  github,
  image,
  members,
  year,
}: WinnerCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

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

      <div className="py-2 text-center">{members?.join(', ')}</div>

      <div className="flex w-full flex-col">
        <h2 className="mb-4 mt-2 text-3xl font-bold">{teamName}</h2>

        <CardTag year={year} category={place} />

        {description && (
          <div className='flex flex-col w-full'>
            {isExpanded && (
              <p className="mb-4 text-lg font-bold text-white">
                "{description}"
              </p>
            )}
            <button
              onClick={toggleDescription}
              className="self-end text-gray-100 hover:text-gray-200"
            >
              {isExpanded ? 'Show less' : 'See more'}
            </button>
          </div>
        )}

        <div className="mt-4 flex flex-col space-y-2">
          {appLink && (
            <a
              href={appLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-200"
            >
              🔗 Deployed Application
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 hover:text-gray-200"
            >
              🔗 GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
