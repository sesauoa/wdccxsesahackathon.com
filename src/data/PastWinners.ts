export type Team = {
  year: number;
  place: string;
  teamName: string;
  image: string;
  description: string;
  appLink: string;
  github: string;
};

const pastWinners: Team[] = [
  {
    year: 2024,
    place: '🏆 1st Place',
    teamName: 'Team Alpha',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },
  {
    year: 2024,
    place: '🥈 2nd Place',
    teamName: 'Team Beta',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },

  {
    year: 2024,
    place: '🥉 3rd Place',
    teamName: 'Team Gamma',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },
  {
    year: 2024,
    place: '⚙ Most Overengineered',
    teamName: 'Team Delta',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },
  {
    year: 2024,
    place: '🎨 Best Design',
    teamName: 'Team Epsilon',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },
  {
    year: 2024,
    place: '🎭 Most Entertaining',
    teamName: 'Team Zeta',
    image: '/winners/2024-1st.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
    appLink: '#',
    github: '#',
  },
];

export default pastWinners;
