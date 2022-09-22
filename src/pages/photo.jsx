import { useParams } from 'react-router-dom';

const Photo = () => {
	const { slug } = useParams();
	return <div>Photo {slug}</div>;
};

export default Photo;
