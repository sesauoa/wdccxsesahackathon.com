export type Team = {
  year: number;
  place: string;
  teamName: string;
  image: string; // Use string for public paths
  description: string;
};

const pastWinners: Team[] = [
  {
    year: 2024,
    place: '1st',
    teamName: 'Team Alpha',
    image: '/winners/2024-1st.png', // Public path (relative to /public folder)
    description: 'They were the best.',
  },
  {
    year: 2024,
    place: '2nd',
    teamName: 'Team Beta',
    image: '/winners/2024-1st.png', // Public path (relative to /public folder)
    description: 'They were the second best.',
  },
];

export default pastWinners;
