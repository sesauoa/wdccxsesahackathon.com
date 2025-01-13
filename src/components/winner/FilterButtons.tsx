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
    <div className="scrollbar-hide flex w-full space-x-4 overflow-x-scroll lg:grid lg:grid-cols-8 lg:gap-4 lg:overflow-visible">
      {years.map((year) => (
        <button
          key={year}
          className={`whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
            selectedYear === year
              ? 'bg-white text-sesa-navy'
              : 'bg-sesa-navy text-white hover:bg-slate-700'
          }`}
          onClick={() => setSelectedYear(selectedYear === year ? null : year)}
        >
          {year}
        </button>
      ))}

      {places.map((place) => (
        <button
          key={place}
          className={`whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
            selectedPlace === place
              ? 'bg-white text-sesa-navy'
              : 'bg-sesa-navy text-white hover:bg-slate-700'
          }`}
          onClick={() =>
            setSelectedPlace(selectedPlace === place ? null : place)
          }
        >
          {place}
        </button>
      ))}
    </div>
  );
};
