import React, { useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.shiftKey) {
      event.preventDefault(); // Prevent the default scroll behavior
      event.stopPropagation(); // Stop Lenis from handling the event
      if (containerRef.current) {
        containerRef.current.scrollLeft += event.deltaY; // Scroll horizontally
      }
    }
  };

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
    <div
      ref={containerRef}
      onWheel={handleWheel}
      className="no-scrollbar flex w-full space-x-4 overflow-x-scroll lg:grid lg:grid-cols-8 lg:gap-4 lg:overflow-visible"
    >
      {years.map((year) => (
        <button
          key={year}
          className={`min-w-fit whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
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
          className={`min-w-fit whitespace-nowrap rounded-lg px-4 py-2 font-bold drop-shadow-lg transition-all duration-200 ease-in-out ${
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
