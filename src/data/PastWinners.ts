export type Team = {
  place: string;
  teamName: string;
  image: string;
  description: string;
  appLink: string;
  github: string;
};

export type YearlyWinners = {
  year: number;
  orderedWinners: Team[]; // For 1st, 2nd, and 3rd places
  specialAwards: Team[]; // For special awards
};

const pastWinners: YearlyWinners[] = [
  {
    year: 2024,
    orderedWinners: [
      {
        place: '🥇 1st Place',
        teamName: 'Team Alpha',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🥈 2nd Place',
        teamName: 'Team Beta',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🥉 3rd Place',
        teamName: 'Team Gamma',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
    ],
    specialAwards: [
      {
        place: '⚙ Most Overengineered',
        teamName: 'Team Delta',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🎨 Best Design',
        teamName: 'Team Epsilon',
        image: '/winners/example2.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🎭 Most Entertaining',
        teamName: 'Team Zeta',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
    ],
  },
  {
    year: 2023,
    orderedWinners: [
      {
        place: '🥇 1st Place',
        teamName: 'Team Alpha',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🥈 2nd Place',
        teamName: 'Team Beta',
        image: '/winners/example1.jpg',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🥉 3rd Place',
        teamName: 'Team Gamma',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
    ],
    specialAwards: [
      {
        place: '⚙ Most Overengineered',
        teamName: 'Team Delta',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🎨 Best Design',
        teamName: 'Team Epsilon',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
      {
        place: '🎭 Most Entertaining',
        teamName: 'Team Zeta',
        image: '/winners/2024-1st.png',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
        appLink: '#',
        github: '#',
      },
    ],
  },
  // Need to add other years.
];

export default pastWinners;
