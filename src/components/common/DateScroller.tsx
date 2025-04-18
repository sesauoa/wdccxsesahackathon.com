import React, { useRef } from 'react';
import AwardsScroller from './AwardsScroller';
interface DateScrollerProps {
  pastWinners: { year: number }[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  showAwards: boolean;
  winnerPlace: string;
  setWinnerPlace: (place: string) => void;
}

const DateScroller: React.FC<DateScrollerProps> = ({
  pastWinners,
  selectedYear,
  setSelectedYear,
  showAwards,
  winnerPlace,
  setWinnerPlace,
}) => {
  const ulRef = useRef<HTMLUListElement>(null);

  const handleClick = (year: number, index: number) => {
    setSelectedYear(year);
    if (ulRef.current && ulRef.current.children[index]) {
      ulRef.current.children[index].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  };
  return (
    <aside className="sticky top-20">
      <ul>
        {pastWinners.map((year, index) => (
          <li
            key={year.year}
            ref={(el) => {}}
            data-year={year.year}
            className="mb-0.5"
          >
            <button
              onClick={() => handleClick(year.year, index)}
              className={`w-full rounded-lg p-2 py-0 text-left text-sm ${
                year.year === selectedYear
                  ? 'origin-left scale-150 transform bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transform hover:origin-left hover:scale-150`}
              style={{
                appearance: 'none',
                border: 'none',
                background: 'none',
              }}
            >
              {year.year}
            </button>
            {showAwards && year.year === selectedYear && (
              <div className="ml-2">
                <AwardsScroller
                  winnerPlace={winnerPlace}
                  setWinnerPlace={setWinnerPlace}
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DateScroller;
