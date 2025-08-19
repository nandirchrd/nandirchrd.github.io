import { FaBlogger, FaCss3, FaGithub, FaPlayCircle, FaReact, FaRobot } from 'react-icons/fa';
import { MdRocketLaunch } from 'react-icons/md';
import {
  SiArduino,
  SiAxios,
  SiJavascript,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
} from 'react-icons/si';
import { TbFileTypeXml } from 'react-icons/tb';

const projects = [
  {
    name: 'V-Chords',
    description:
      'My official chord guitar website. I still developing this website and update for another content',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://v-chords.blogspot.com',
      },
    ],
    libraries: [
      <TbFileTypeXml key={1} />,
      [<FaCss3 key={2} />],
      <FaBlogger key={3} />,
      <SiJavascript key={4} />,
    ],
    thumbnail: './assets/images/v-chords.png',
  },
  {
    name: 'WhatsApp Clone',
    description: 'I used socket io, so that client and server communication occurs in real time.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://eclectic-griffin-58a35d.netlify.app',
      },
    ],
    libraries: [<FaReact key={1} />, <SiTailwindcss key={2} />, <SiAxios key={3} />],
    thumbnail: './assets/images/whatsapp-clone.png',
  },
  // {
  //     name: "Netflix Clone",
  //     description: "I used React and Bootstrap and support responsive. I fetched the API used Axios.",
  //     actions: [
  //         {
  //             icon: <MdRocketLaunch/>,
  //             url: "https://nandirchrd-netflix.netlify.app"
  //         },
  //         {
  //             icon: <FaGithub/>,
  //             url: "https://github.com/nandirchrd/netflix-clone-v2"
  //         },
  //     ],
  //     libraries: [<FaReact/>, <FaBootstrap/>, <SiAxios/>],
  //     thumbnail: ""
  // },
  {
    name: 'React Redux Shooping',
    description: 'This is just simple project just for learn how to use redux.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://grand-sorbet-2e0ad1.netlify.app',
      },
    ],
    libraries: [<FaReact key={1} />, <SiRedux key={2} />],
    thumbnail: './assets/images/react-redux-shooping.png',
  },
  {
    name: 'Three JS Ball Bounce',
    description: 'Made with Three JS, experiment using three JS.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://rchrd-three-ball.netlify.app/',
      },
    ],
    libraries: [<SiThreedotjs key={1} />],
    thumbnail: './assets/gifs/ball.gif',
  },
  {
    name: 'Three JS Lights',
    description: 'Made with Three JS, experiment using three JS.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://rchrd-lights.netlify.app/',
      },
    ],
    libraries: [<SiThreedotjs key={1} />],
    thumbnail: './assets/gifs/lights.gif',
  },
  {
    name: "Controlling Arduino's Led using Socket.io (IoT)",
    description: 'Real time application',
    actions: [
      {
        icon: <FaPlayCircle />,
        url: 'https://www.youtube.com/watch?v=ZmhW6BZ6RI4',
      },
      {
        icon: <FaGithub />,
        url: 'https://github.com/nandirchrd/silentdev-led-controller',
      },
    ],
    libraries: [<FaRobot key={1} />, <SiArduino key={2} />, <SiSocketdotio key={3} />],
    thumbnail: 'https://img.youtube.com/vi/ZmhW6BZ6RI4/mqdefault.jpg',
  },
  {
    name: 'Quran App',
    description: 'I used React and TailwindCSS. I fetched the API used Axios. Can play the audio.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://quran-app-bayrack.netlify.app',
      },
      {
        icon: <FaGithub />,
        url: 'https://github.com/nandirchrd/quran-app',
      },
    ],
    libraries: [
      <FaReact key={1} />,
      <SiTailwindcss key={2} />,
      <SiTypescript key={3} />,
      <SiAxios key={4} />,
    ],
    thumbnail: './assets/images/quran-app.png',
  }
  /* {
    name: 'Moonely (My Journal)',
    description:
      'This project is for me to write a personal journal, sometimes I want to write and I write it here.',
    actions: [
      {
        icon: <MdRocketLaunch />,
        url: 'https://moonely.blogspot.com',
      },
    ],
    libraries: [
      <TbFileTypeXml key={1} />,
      <FaCss3 key={2} />,
      <FaBlogger key={3} />,
      <SiJavascript key={4} />,
    ],
    thumbnail: './assets/images/moonely.png',
  },*/
];

export default projects;
