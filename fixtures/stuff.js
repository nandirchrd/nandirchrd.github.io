import {
	SiGithub as Github,
	SiReact as React,
	SiTailwindcss as Tailwind,
	SiExpress as Express,
	SiStyledcomponents as StyledComponent,
	SiSocketdotio as SocketIo,
	SiNpm as NPM,
	SiRedux as Redux,
} from 'react-icons/si';

const stuff = [
	{
		title: 'Arduino Led Connected With Socket Io (IoT)',
		thumb: '/assets/images/no-thumb.jpg',
		description:
			'I used React and TailwindCSS, and support responsive. I fetched the API used Axios just simple as that.',
		tags: [
			<Express key={'express'} />,
			'johnny-five',
			<SocketIo key={'socket-io'} />,
			'play-sound',
		],
		open: [
			{
				title: 'Open',
				link: 'https://twitter.com/nandirchrd/status/1510640600227663872?cxt=HHwWgMDS_ejn7_YpAAAA',
			},
		],
	},
	{
		title: 'React Redux Shopping Carts',
		thumb: '/assets/images/shopping-carts.jpg',
		description:
			'This is just simple project just for learn how to use redux.',
		tags: [<React key={'react'} />, <Redux key={'redux'} />],
		open: [
			{
				title: 'Launch',
				link: 'https://grand-sorbet-2e0ad1.netlify.app/',
			},
		],
	},
];

export default stuff;
