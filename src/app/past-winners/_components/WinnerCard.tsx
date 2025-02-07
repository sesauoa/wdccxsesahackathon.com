import React, { useState } from 'react';
import Image from 'next/image';
import { CardTag } from './CardTag';

interface WinnerCardProps {
  place: string;
  teamName: string;
  description?: string;
  deployedLink?: string;
  github?: string;
  image: string;
  members?: string[];
  year: number;
}

export function WinnerCard({
  place,
  teamName,
  description,
  deployedLink,
  github,
  image,
  members,
  year,
}: WinnerCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (description) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div className="main-container" onClick={handleFlip}>
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="front-card flex flex-col justify-between rounded-xl bg-black bg-opacity-20 p-4">
          <div>
            <h2 className="mb-4 mt-2 w-full break-words text-center text-3xl font-bold">
              {teamName}
            </h2>
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
            <div className="py-2 text-center text-sm">
              {members?.join(', ')}
            </div>
            <CardTag year={year} category={place} />
          </div>

          {/*Links*/}
          <div className="flex w-full justify-between space-x-4">
            <div className="flex flex-col gap-1">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-200 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  🔗 GitHub
                </a>
              )}

              {deployedLink && (
                <a
                  href={deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-200 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  🔗 Deployed Project
                </a>
              )}
            </div>

            {description && (
              <div className="absolute bottom-4 right-4">
                <button className="w-20 text-sm font-bold">SEE MORE</button>
              </div>
            )}
          </div>
        </div>

        {description && (
          <div className="back-card rounded-xl bg-black bg-opacity-40 p-4 leading-relaxed">
            <div className="h-full w-full">{description}</div>
            <div className="absolute bottom-4 right-4">
              <button className="w-20 text-sm font-bold">GO BACK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
