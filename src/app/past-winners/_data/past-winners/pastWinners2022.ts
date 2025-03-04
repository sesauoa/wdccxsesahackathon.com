import { PastWinners } from '@/types/WinnerType';

export const pastWinners2022: PastWinners = {
  year: 2022,
  orderedWinners: [
    {
      place: '1st Place',
      teamName: 'Lubricated Ducks',
      image: '/winners/2022/2022-1st.jpg',
      members: [
        'Ron Bansal',
        'Grant Liu',
        'Jimmy Wang',
        'Jay Prasad',
        'Vishva Dave',
        'Harry Qu',
      ],
      description:
        'Zapp: A real-time quiz game designed to run alongside a lecture, offering students a range of interactive questions and puzzles to solve. It aims to create a more dynamic lecture experience by encouraging student engagement and participation, with the potential to attach a small amount of grade points to the activity as incentive. The game takes inspiration from the problem-solving elements of “Keep Talking and Nobody Explodes”, and leverages websockets for communication.',
      github: 'https://github.com/tmacsmee/zapp',
    },
    {
      place: '2nd Place',
      teamName: 'Jade Jaguars',
      image: '/winners/2022/2022-2nd.jpg',
      members: [
        'Danielle Print',
        'Andreas Knapp',
        'Samuel Chen',
        'Etienne Naude',
        'Raina Song',
        'Jessica Villegas',
      ],
      description:
        'We built an app to help facilitate social connections on busses by creating a series of barrier of low entry games/activities which people on the bus can do together such as collaborative drawing together.',
      github: 'https://github.com/etinaude/sesa-hackathon-2022',
    },
    {
      place: '3rd Place',
      teamName: 'Team X',
      image: '/winners/2022/2022-3rd.jpg',
      members: [
        'Jared Daniel Recomenable',
        'Zoe Niu',
        'Avikash Naidu',
        'Cale Ying',
        'Aden Ing',
        'Dhruv Joshi',
      ],
      description:
        '"ProdKiller is a productivity game where team members compete against each other, with points awarded or deducted based on visited websites as detected by a Chrome extension. Players can use their accumulated points to send distractions and attacks to their teammates, while also defending themselves from similar disruptions. The game syncs data to a MongoDB database via a Flask server, allowing players to track progress and compete for top spot in their group."',
      github: 'https://github.com/JDCRecomendable/wdcc-x-sesa-hackathon-2022',
    },
  ],
  specialAwards: [
    {
      place: 'Most Overengineered',
      teamName: "Andrew's Angular Team",
      image: '/winners/2022/2022-4th.jpg',
      members: [
        'Jiaru Lin',
        'Cheng-Zhen Yang',
        'Flynn Fromont',
        'Hiruna Jayamanne',
        'Bob Liou',
      ],
    },
    {
      place: 'Best Design',
      teamName: 'Infinity^2',
      image: '/winners/2022/2022-5th.jpg',
      members: [
        'Lia Arroyo',
        'Eugene Chua',
        'Amisha Singh',
        'Caitlin Pillay',
        'Vanisha Rajan',
        'Bun Thong Chea',
      ],
      description:
        '"Task Fighter is a web-based app built on React, utilising custom Framer Motion animations, ParticlesJS, styled Material UI components, developed collaboratively using the GitHub workflow in under 48 hours! In it, you are presented with 3 different monsters to fight! Just create your to-do-list; set your timer; get to monster fighting!"',
      github: 'https://github.com/luorixo/task-fighter',
    },
  ],
};
