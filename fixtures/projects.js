import {
	SiGithub as Github,
	SiReact as React,
	SiTailwindcss as Tailwind,
	SiExpress as Express,
	SiStyledcomponents as StyledComponent,
	SiSocketdotio as SocketIo,
} from 'react-icons/si';

const projects = [
	{
		title: 'WhatsApp Clone',
		thumb: '/assets/images/whatsapp-clone.jpg',
		description:
			"I used socket io, so that client and server communication occurs in real time. I used technologies like react, express, and for storing data I didn't use database, I just used JSON files.",
		tags: [
			<React key={'react'} />,
			<Express key={'react'} />,
			<StyledComponent key={'react'} />,
			<SocketIo key={'react'} />,
		],
		open: [
			{
				title: 'Launch',
				link: 'https://eclectic-griffin-58a35d.netlify.app/',
			},
			{
				title: 'Github',
				link: 'https://github.com/nandirchrd/whats-app-clone-v1-client',
			},
		],
	},
	{
		title: 'Netflix Clone',
		thumb: '/assets/images/netflix-clone.jpg',
		description:
			'I used React and TailwindCSS, and support responsive. I fetched the API used Axios just simple as that.',
		tags: [<React key={'react'} />, <Tailwind key={'react'} />, 'Axios'],
		open: [
			{
				title: 'Launch',
				link: 'https://enchanting-kitsune-388049.netlify.app/',
			},
			{
				title: 'Github',
				link: 'https://github.com/nandirchrd/netflix-clone-public',
			},
		],
	},
	{
		title: 'Quran App',
		thumb: '/assets/images/quran-app.jpg',
		description:
			'I used React and TailwindCSS. I fetched the API used Axios. Can play the audio.',
		tags: [<React key={'react'} />, <Tailwind key={'react'} />, 'Axios'],
		open: [
			{
				title: 'Launch',
				link: 'https://quran-app-bayrack.netlify.app/',
			},
			{
				title: 'Github',
				link: 'https://github.com/nandirchrd/quran-app',
			},
		],
	},
];

export default projects;
