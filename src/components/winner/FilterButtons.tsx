import React from 'react';

interface FilterButtonsProps {
  years: number[];
  places: string[];
  selectedYear: number | null;
  selectedPlace: string | null;
  setSelectedYear: (year: number | null) => void;
  setSelectedPlace: (place: string | null) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  years,
  places,
  selectedYear,
  selectedPlace,
  setSelectedYear,
  setSelectedPlace,
}) => {
  return (
    <div className="flex w-full justify-between">
      <div className="flex w-[30%] justify-between">
        {years.map((year) => (
          <button
            key={year}
            className={`rounded-lg px-4 py-2 font-bold text-white ${
              selectedYear === year
                ? 'bg-wdcc-blue-to-sesa-teal'
                : 'bg-sesa-navy'
            }`}
            onClick={() => setSelectedYear(selectedYear === year ? null : year)}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="flex w-[55%] justify-between">
        {places.map((place) => (
          <button
            key={place}
            className={`rounded-lg px-4 py-2 font-bold text-white ${
              selectedPlace === place
                ? 'bg-wdcc-blue-to-sesa-teal'
                : 'bg-sesa-navy'
            }`}
            onClick={() =>
              setSelectedPlace(selectedPlace === place ? null : place)
            }
          >
            {place}
          </button>
        ))}
      </div>
    </div>
  );
};
