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

  const handleClick = (year: number) => {
    setSelectedYear(year);

    // Scroll to the corresponding year section in the main content
    const section = document.getElementById(`year-${year}`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <aside className="sticky top-36">
      <ul>
        {pastWinners.map((year, index) => (
          <li
            key={year.year}
            ref={(el) => {}}
            data-year={year.year}
            className="mb-0.5"
          >
            <button
              onClick={() => handleClick(year.year)}
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
                  selectedYear={selectedYear}
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
