'use client';

import React, { useState, useEffect, useRef } from 'react';
import pastWinners from '@/data/PastWinners';
import { H1, H2 } from '@/components/common/Typography';
import DateScroller from '@/components/common/DateScroller';
import { log } from 'console';

// Parses and properly formats and outputs the data from PastWinners.ts
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
      <H2 className="mb-4">
        {place} - {teamName}
      </H2>
      <p className="mb-4 text-white">{description}</p>
      <div className="flex flex-col space-y-2">
        {appLink && (
          <a
            href={appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-300 underline hover:text-blue-400"
          >
            🔗 Deployed Application
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-300 underline hover:text-blue-400"
          >
            🔗 GitHub Repo
          </a>
        )}
      </div>
    </div>
  );
}

// Formats the images provided from the PastWinners.ts import.
function WinnerImage({ image, alt }: { image: string; alt: string }) {
  return (
    <img
      src={image}
      alt={alt}
      className="h-3/4 w-full rounded-3xl object-cover object-center shadow-lg"
    />
  );
}

// Main PastWinnersPage Component
export default function PastWinnersPage() {
  const [winnerPlace, setWinnerPlace] = useState(''); // Default place selection. Update to current place.
  const [selectedYear, setSelectedYear] = useState(2024); // Default year selection. Update to most recent year.
  const yearData = pastWinners.find((year) => year.year === selectedYear);

  if (!yearData) return <p>No data available for this year.</p>; //Might want to look into this to handle invalid inputs (shouldn't be any invalid inputs).

  const { orderedWinners, specialAwards } = yearData;

  const winnerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    console.log('useEffect is running');

    const observerOptions = {
      root: null,
      threshold: 0,
      rootMargin: '0px 0px -90% 0px', // Adjust as needed
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const place = entry.target.getAttribute('data-place');
          if (place) {
            if (place.charAt(0) === 's') {
              console.log(place.charAt(0));
              setWinnerPlace('S');
            } else {
              setWinnerPlace(place.charAt(3));
              console.log('Place', place.charAt(3));
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    winnerRefs.current.forEach((ref, idx) => {
      console.log(`Ref ${idx}:`, ref);
      if (ref) {
        observer.observe(ref);
      } else {
        console.warn(`Ref at index ${idx} is null`);
      }
    });
    console.log('winnerRefs.current:', winnerRefs.current);

    return () => {
      winnerRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [orderedWinners, specialAwards]);

  return (
    <div className="mx-auto flex min-h-screen max-w-screen-2xl flex-col p-8 text-white">
      {/* Title Section */}
      <header className="mb-8">
        <H1>Past Winners</H1>
      </header>

      {/* Content Section */}
      <div className="mx-auto flex max-w-screen-2xl flex-grow">
        {/* Section for the date scroller. At the moment, uses a temporary format. */}
        <div className="parent-container">
          <DateScroller
            pastWinners={pastWinners}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            showAwards={true}
            winnerPlace={winnerPlace}
            setWinnerPlace={setWinnerPlace}
          />
        </div>

        {/* Main Content */}
        <main className="ml-8 flex-grow">
          <div className="flex flex-col space-y-8">
            {/* Ordered Winners */}
            {orderedWinners.map((winner, index) => (
              <div
                key={index}
                id={`${winner.place.charAt(3)}`}
                ref={(el) => {
                  if (el) winnerRefs.current[index] = el;
                }}
                data-place={winner.place}
                className="winner-section flex flex-col md:flex-row md:space-x-8"
              >
                <div className="md:w-2/4">
                  <WinnerDetails {...winner} />
                </div>
                <div className="md:w-2/4">
                  <WinnerImage image={winner.image} alt={winner.teamName} />
                </div>
              </div>
            ))}

            {/* Special Awards */}
            {specialAwards.length > 0 && (
              <div
                id="S"
                ref={(el) => {
                  if (el) winnerRefs.current[orderedWinners.length] = el;
                }}
                data-place="special-awards"
                className="winner-section"
              >
                <H2>Special Awards</H2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                  {specialAwards.map((winner, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center gap-8"
                    >
                      <WinnerDetails {...winner} />
                      <WinnerImage image={winner.image} alt={winner.teamName} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
