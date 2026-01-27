import { SiAdobe, SiEyeem, SiShutterstock } from 'react-icons/si';
import IStock from '../assets/logo/IStock.png';

const platforms = [
  {
    name: 'Adobestock',
    url: 'https://stock.adobe.com/contributor/211495607/nandirichard',
    icon: <SiAdobe color="red" />,
  },
  {
    name: 'IStock',
    url: '#',
    icon: <img src={IStock} />,
  },
  {
    name: 'Eyeem',
    url: 'https://petapixel.com/2025/12/11/eyeem-is-shutting-down',
    icon: <SiEyeem />,
  },
  {
    name: 'Shutterstock',
    url: 'https://www.shutterstock.com/g/nandi+richard',
    icon: <SiShutterstock color="red" />,
  },
];

export default platforms;
