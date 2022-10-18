import {
	SiStyledcomponents,
	SiReact,
	SiTailwindcss,
	SiExpress,
	SiSocketdotio,
	SiGithub,
	SiMongodb,
} from 'react-icons/si';

import WhatsAppClone from '../assets/images/projects/whatsapp-clone.jpg';
import NetflixClone from '../assets/images/projects/netflix-clone.jpg';
import QuranApp from '../assets/images/projects/quran-app.jpg';
import XstreamsApp from '../assets/images/projects/xstreams-app.jpg';

const projects = [
	{
		id: 1,
		title: 'WhatsApp Clone',
		thumb: WhatsAppClone,
		description:
			"I used socket io, so that client and server communication occurs in real time. I used technologies like react, express, and for storing data I didn't use database, I just used JSON files.",
		tags: [
			<SiReact />,
			<SiExpress />,
			<SiStyledcomponents />,
			<SiSocketdotio />,
		],
		actions: [
			{
				label: 'Launch',
				link: 'https://eclectic-griffin-58a35d.netlify.app/',
			},
			{
				label: <SiGithub />,
				link: 'https://github.com/nandirchrd/whats-app-clone-v1-client',
			},
		],
	},
	{
		id: 2,
		title: 'Netflix Clone',
		thumb: NetflixClone,
		description:
			'I used React and Bootstrap and support responsive. I fetched the API used Axios.',
		tags: [<SiReact />, <SiTailwindcss />, 'Axios'],
		actions: [
			{
				label: 'Launch',
				link: 'https://nandirchrd-netflix.netlify.app/',
			},
			{
				label: <SiGithub />,
				link: 'https://github.com/nandirchrd/netflix-clone-v2',
			},
		],
	},
	{
		id: 3,
		title: 'Quran App',
		thumb: QuranApp,
		description:
			'I used React and TailwindCSS. I fetched the API used Axios. Can play the audio.',
		tags: [<SiReact />, <SiTailwindcss />, 'Axios'],
		actions: [
			{
				label: 'Launch',
				link: 'https://quran-app-bayrack.netlify.app/',
			},
			{
				label: <SiGithub />,
				link: 'https://github.com/nandirchrd/quran-app',
			},
		],
	},
	{
		id: 3,
		title: 'XStreams',
		thumb: XstreamsApp,
		description: 'This app is for tv streamings',
		tags: [<SiReact />, <SiTailwindcss />, <SiExpress />, <SiMongodb />],
		actions: [
			{
				label: 'Launch',
				link: 'https://xstreams.netlify.app/',
			},
			{
				label: <SiGithub />,
				link: 'https://github.com/nandirchrd/app-streams',
			},
		],
	},
];
export default projects;
