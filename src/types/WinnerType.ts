export type Winner = {
  place: string;
  teamName: string;
  image: string;
  members?: string[];
  description?: string;
  github?: string;
  deployedLink?: string;
};

export type PastWinners = {
  year: number;
  orderedWinners: Winner[];
  specialAwards: Winner[];
};
