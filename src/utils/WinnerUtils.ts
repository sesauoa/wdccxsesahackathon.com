import { Winner } from '@/types/WinnerType';

export const filterWinners = (
  pastWinners: any[],
  selectedYear: number | null,
  selectedPlace: string | null
) => {
  if (selectedPlace === 'Other') {
    return pastWinners
      .filter(({ year }) => (selectedYear ? year === selectedYear : true))
      .map(({ year, specialAwards }) => ({
        year,
        orderedWinners: [],
        specialAwards,
      }))
      .filter(({ specialAwards }) => specialAwards.length > 0);
  }

  return pastWinners
    .filter(({ year }) => (selectedYear ? year === selectedYear : true))
    .map(({ year, orderedWinners, specialAwards }) => ({
      year,
      orderedWinners: selectedPlace
        ? orderedWinners.filter(
            (winner: Winner) => winner.place === selectedPlace
          )
        : orderedWinners,
      specialAwards: selectedPlace ? [] : specialAwards,
    }))
    .filter(
      ({ orderedWinners, specialAwards }) =>
        orderedWinners.length > 0 || specialAwards.length > 0
    );
};

export const getAllFilteredWinners = (filteredWinners: any[]) => {
  return filteredWinners.flatMap(({ year, orderedWinners, specialAwards }) => [
    ...orderedWinners.map((winner: Winner) => ({ ...winner, year })),
    ...specialAwards.map((award: Winner) => ({ ...award, year })),
  ]);
};
