import { useParams } from 'react-router-dom';

const Photo = () => {
	const { slug } = useParams();
	return (
		<main id='photo' className='mt-20'>
			<section>
				<div className='container mx-auto border border-black'>
					<h1>PHOTO {slug}</h1>
				</div>
			</section>
		</main>
	);
};

export default Photo;
