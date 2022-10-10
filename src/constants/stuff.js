import {
	SiBootstrap,
	SiCanonical,
	SiExpress,
	SiGithub,
	SiJsonwebtokens,
	SiReact,
	SiRedux,
	SiSocketdotio,
	SiThreedotjs,
} from 'react-icons/si';
import ReactRedux from '../assets/images/stuff/shopping-carts.jpg';
import NoThumb from '../assets/images/stuff/no-thumb.jpg';
import VidlyApp from '../assets/images/stuff/vidly-app.jpg';
import ThreeBall from '../assets/images/stuff/three-ball.jpg';

const stuff = [
	{
		id: 1,
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
		id: 2,
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
	{
		id: 3,
		title: 'Vidly App',
		thumb: VidlyApp,
		description: 'I learned react with mosh and here si the final project',
		tags: [<SiReact />, <SiBootstrap />, <SiJsonwebtokens />],
		actions: [
			{
				label: 'Launch',
				link: 'https://rchrd-vidly.netlify.app/',
			},
			{
				label: <SiGithub />,
				link: 'https://github.com/nandirchrd/learning-react-with-mosh',
			},
		],
	},
	{
		id: 4,
		title: 'Three Ball',
		thumb: ThreeBall,
		description: 'Learned some three js stuff',
		tags: [<SiThreedotjs />, <SiCanonical />],
		actions: [
			{
				label: 'Launch',
				link: 'https://rchrd-three-ball.netlify.app',
			},
		],
	},
];

export default stuff;
