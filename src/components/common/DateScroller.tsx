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
  const listItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const year = entry.target.getAttribute('data-year');
            if (year !== null) {
              setSelectedYear(Number(year));
            }
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    listItemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      listItemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [pastWinners, setSelectedYear]);

  return (
    <aside>
      <ul>
        {pastWinners.map((year, index) => (
          <li
            key={year.year}
            ref={(el) => {
              listItemRefs.current[index] = el;
            }}
            data-year={year.year}
            className="mb-0.5"
          >
            <button
              onClick={() => setSelectedYear(year.year)}
              className={`w-full rounded-lg p-2 py-0 text-left text-sm ${
                year.year === selectedYear
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              } transform hover:scale-150`}
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
