import {
	SiGithub as Github,
	SiReact as React,
	SiTailwindcss as Tailwind,
	SiExpress as Express,
	SiStyledcomponents as StyledComponent,
	SiSocketdotio as SocketIo,
	SiNpm as NPM,
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
];

export default stuff;
