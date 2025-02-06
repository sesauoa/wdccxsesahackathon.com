export type Winner = {
  place: string;
  teamName: string;
  image: string;
  description?: string;
  deployedLink?: string;
  github?: string;
  members?: string[];
}

export type YearlyWinners = {
  year: number;
  orderedWinners: Winner[]; 
  specialAwards: Winner[];
};
