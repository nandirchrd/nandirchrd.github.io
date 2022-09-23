import SpaceX from '../assets/images/space-x.jpg';
import { FaReact, FaVuejs } from 'react-icons/fa';

const stuff = [
	{
		id: 1,
		title: 'Hello',
		thumb: SpaceX,
		description:
			'Lorearakn sadjjda sdmaslnd asnd asldnasdknasld laskdnaslnd askl daskldnas daslkdnaskdn asdlaksdfhaskfhaskd haslkdhaskd askdaskld askldhaskdh',
		tags: [<FaReact />, <FaVuejs />],
		actions: [
			{
				label: 'Open',
				link: 'http://reactjs.org',
			},
		],
	},
];

export default stuff;
