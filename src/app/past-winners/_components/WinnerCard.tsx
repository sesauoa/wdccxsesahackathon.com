import React, { useState } from 'react';
import Image from 'next/image';
import { CardTag } from './CardTag';
import { H2 } from '@/components/Layout/Typography';

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
                  className="text-gray-100 hover:text-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  🔗 GitHub
                </a>
              )}

              {appLink && (
                <a
                  href={appLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 hover:text-gray-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  🔗 Application
                </a>
              )}
            </div>

            {description && (
              <div className="absolute bottom-4 right-4">
                <button className="text-sm font-bold w-20">SEE MORE</button>
              </div>
            )}
          </div>
        </div>

        {description && (
          <div className="back-card rounded-xl leading-relaxed bg-black bg-opacity-40 p-4">
            <div className="h-full w-full">{description}</div>
            <div className="absolute bottom-4 right-4">
              <button className="text-sm font-bold w-20">GO BACK</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
