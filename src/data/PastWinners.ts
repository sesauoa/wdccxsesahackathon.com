export type Team = {
  year: number;
  place: string;
  teamName: string;
  image: string;
  description: string;
};

const pastWinners: Team[] = [
  {
    year: 2024,
    place: '1st',
    teamName: 'Team Alpha',
    image: '/winners/2024-1st.png',
    description: 'They were the best.',
  },
  {
    year: 2024,
    place: '2nd',
    teamName: 'Team Beta',
    image: '/winners/2024-1st.png',
    description: 'They were the second best.',
  },

  {
    year: 2024,
    place: '3rd',
    teamName: 'Team Gamma',
    image: '/winners/2024-1st.png',
    description: 'They were the third best.',
  },
  {
    year: 2024,
    place: 'Most Entertaining',
    teamName: 'Team Epsilon',
    image: '/winners/2024-1st.png',
    description: 'They were the fourth best.',
  },
];

export default pastWinners;
