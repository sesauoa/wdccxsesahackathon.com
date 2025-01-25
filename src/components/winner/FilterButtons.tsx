import React from 'react';

interface FilterButtonsProps {
  years: number[];
  places: string[];
  selectedYear: number[];
  selectedPlace: string[];
  setSelectedYear: (years: number[]) => void;
  setSelectedPlace: (places: string[]) => void;
}

export const FilterButtons: React.FC<FilterButtonsProps> = ({
  years,
  places,
  selectedYear,
  selectedPlace,
  setSelectedYear,
  setSelectedPlace,
}) => {
  const toggleYear = (year: number) => {
    setSelectedYear(
      selectedYear.includes(year)
        ? selectedYear.filter((y) => y !== year) 
        : [...selectedYear, year]
    );
  };

  const togglePlace = (place: string) => {
    setSelectedPlace(
      selectedPlace.includes(place)
        ? selectedPlace.filter((p) => p !== place) 
        : [...selectedPlace, place] 
    );
  };

  return (
    <div className="scrollbar-hide flex w-full space-x-4 overflow-x-scroll lg:grid lg:grid-cols-8 lg:gap-4 lg:overflow-visible">
      {years.map((year) => (
        <button
          key={year}
          className={`whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
            selectedYear.includes(year)
              ? 'bg-white text-sesa-navy'
              : 'bg-sesa-navy text-white hover:bg-slate-700'
          }`}
          onClick={() => toggleYear(year)}
        >
          {year}
        </button>
      ))}

      {places.map((place) => (
        <button
          key={place}
          className={`whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
            selectedPlace.includes(place)
              ? 'bg-white text-sesa-navy'
              : 'bg-sesa-navy text-white hover:bg-slate-700'
          }`}
          onClick={() => togglePlace(place)}
        >
          {place}
        </button>
      ))}
    </div>
  );
};
