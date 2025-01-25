export type Winner = {
  place: string;
  teamName: string;
  image: string;
  description?: string;
  appLink?: string;
  github?: string;
  members?: string[];
  contacts?: string[];
}

export type YearlyWinners = {
  year: number;
  orderedWinners: Winner[]; 
  specialAwards: Winner[];
};
