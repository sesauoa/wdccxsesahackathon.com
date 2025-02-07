import React from 'react';
import FilterButton from '@/components/common/FilterButton';

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
    <div className="flex w-full flex-wrap justify-center gap-4">
      {years.map((year) => (
        <FilterButton
          key={year}
          onClick={() => toggleYear(year)}
          isSelected={selectedYear.includes(year)}
        >
          {year}
        </FilterButton>
      ))}

      {places.map((place) => (
        <FilterButton
          key={place}
          onClick={() => togglePlace(place)}
          isSelected={selectedPlace.includes(place)}
        >
          {place}
        </FilterButton>
      ))}
    </div>
  );
};
