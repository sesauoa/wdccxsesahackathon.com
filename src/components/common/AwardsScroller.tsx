import { log } from 'console';
import React, { useState } from 'react';

interface AwardsScrollerProps {
  winnerPlace: string;
  selectedYear: number;

  setWinnerPlace: (place: string) => void;
}

interface Award {
  id: string;
  label: string;
  emoji: string;
}

const awards: Award[] = [
  { id: '🥇 1st Place', label: '1st Place', emoji: '🏆' },
  { id: '🥈 2nd Place', label: '2nd Place', emoji: '🥈' },
  { id: '🥉 3rd Place', label: '3rd Place', emoji: '🥉' },
  { id: 'special-awards', label: 'Special Awards', emoji: '🌟' },
];

const AwardsScroller: React.FC<AwardsScrollerProps> = ({
  winnerPlace,
  setWinnerPlace,
  selectedYear,
}) => {
  console.log(winnerPlace);

  const handleScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setWinnerPlace(sectionId);
  };

  return (
    <div className="flex flex-col overflow-hidden text-ellipsis whitespace-nowrap text-xs">
      {awards.map(({ id, label, emoji }) => {
        return (
          <button
            key={id}
            onClick={() => handleScrollToSection(`${selectedYear} ${id}`)}
            className={`text-left ${
              winnerPlace === `${selectedYear} ${id}`
                ? 'text-white'
                : 'text-xs text-gray-300'
            } truncate`}
          >
            {emoji} {label}
          </button>
        );
      })}
    </div>
  );
};

export default AwardsScroller;
