import { Winner, YearlyWinners } from '@/types/WinnerType';

export const filterWinners = (
  pastWinners: YearlyWinners[],
  selectedYears: number[] | null,
  selectedPlaces: string[] | null
) => {
  return pastWinners
    .filter(({ year }) => (selectedYears?.length ? selectedYears.includes(year) : true))
    .map(({ year, orderedWinners, specialAwards }) => ({
      year,
      orderedWinners: selectedPlaces?.length
        ? orderedWinners.filter((winner: Winner) => selectedPlaces.includes(winner.place))
        : orderedWinners,
      specialAwards: selectedPlaces?.length && !selectedPlaces.includes('Other')
        ? []
        : specialAwards,
    }))
    .filter(({ orderedWinners, specialAwards }) => orderedWinners.length > 0 || specialAwards.length > 0);
};


export const getAllFilteredWinners = (filteredWinners: YearlyWinners[]) => {
  return filteredWinners.flatMap(({ year, orderedWinners, specialAwards }) => [
    ...orderedWinners.map((winner: Winner) => ({ ...winner, year })),
    ...specialAwards.map((award: Winner) => ({ ...award, year })),
  ]);
};
