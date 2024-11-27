import React, { useEffect, useRef } from 'react';

interface DateScrollerProps {
  pastWinners: { year: number }[];
  selectedYear: number;
  setSelectedYear: (year: number) => void;
}

const DateScroller: React.FC<DateScrollerProps> = ({
  pastWinners,
  selectedYear,
  setSelectedYear,
}) => {
  return (
    <aside>
      <ul>
        {pastWinners.map((year) => (
          <li key={year.year}>
            <button
              onClick={() => setSelectedYear(year.year)}
              className={`mb-0 w-full rounded-lg p-2 py-0 text-left text-sm ${
                // Add text-sm class
                year.year === selectedYear
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transform hover:scale-150`} // Add hover:text-lg class
              style={{ appearance: 'none', border: 'none', background: 'none' }}
            >
              {year.year}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DateScroller;
