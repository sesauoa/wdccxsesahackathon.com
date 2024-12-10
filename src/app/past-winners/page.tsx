'use client';

import React, { useState, useEffect, useRef } from 'react';
import pastWinners from '@/data/PastWinners';
import { H1, H2 } from '@/components/common/Typography';
import DateScroller from '@/components/common/DateScroller';
import { log } from 'console';
import OrderedWinner from '@/components/winner/OrderedWinner';
import SpecialAward from '@/components/winner/SpecialAward';

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
      <header>
        <h1 className="text-5xl font-bold">Past Winners</h1>
      </header>
      <main className="flex flex-row gap-8">
        {/* Sidebar Section */}
        <div className="hidden w-1/6 flex-shrink-0 lg:block">
          <DateScroller
            pastWinners={pastWinners}
            selectedYear={selectedYear}
            setSelectedYear={setSelectedYear}
            showAwards={true}
            winnerPlace={winnerPlace}
            setWinnerPlace={setWinnerPlace}
          />
        </div>

        {/* Main Content Section */}
        <div className="flex-1">
          {pastWinners.map(({ year, orderedWinners, specialAwards }) => (
            <div key={year} id={`year-${year}`} className="mb-12">
              <div className="sticky top-16 block w-full backdrop-blur-sm lg:hidden">
                <h2 className="mt-8 text-4xl font-bold">{year}</h2>
              </div>
              {orderedWinners.map((winner, index) => (
                <OrderedWinner key={index} {...winner} />
              ))}
              {specialAwards.length > 0 && (
                <div className="flex h-fit justify-center lg:h-screen lg:flex-col">
                  <div className="flex flex-col gap-8 py-4 lg:flex-row lg:py-0">
                    {specialAwards.map((winner, index) => (
                      <SpecialAward key={index} {...winner} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
