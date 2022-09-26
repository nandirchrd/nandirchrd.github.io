import { SiExpress, SiReact, SiRedux, SiSocketdotio } from 'react-icons/si';
import ReactRedux from '../assets/images/stuff/shopping-carts.jpg';
import NoThumb from '../assets/images/stuff/no-thumb.jpg';

const stuff = [
	{
		title: 'Arduino Led Connected With Socket Io (IoT)',
		thumb: NoThumb,
		description:
			'I used React and TailwindCSS, and support responsive. I fetched the API used Axios just simple as that.',
		tags: [<SiExpress />, 'johnny-five', <SiSocketdotio />, 'play-sound'],
		actions: [
			{
				label: 'Open',
				link: 'https://twitter.com/nandirchrd/status/1510640600227663872?cxt=HHwWgMDS_ejn7_YpAAAA',
			},
		],
	},
	{
		title: 'React Redux Shopping Carts',
		thumb: ReactRedux,
		description:
			'This is just simple project just for learn how to use redux.',
		tags: [<SiReact />, <SiRedux />],
		actions: [
			{
				label: 'Launch',
				link: 'https://grand-sorbet-2e0ad1.netlify.app/',
			},
		],
	},
];

export default stuff;
