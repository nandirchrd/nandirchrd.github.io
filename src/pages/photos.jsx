import { useContext, useEffect } from 'react';
import { ActivePageContext } from '../contexts/activePageContext';

const Photos = () => {
	const { setPage } = useContext(ActivePageContext);

	useEffect(() => {
		setPage('photos');
	}, [setPage]);

	return (
		<main id='photos' className='mt-20'>
			<section>
				<div className='container mx-auto border border-black'>
					<h1>PHOTOS</h1>
				</div>
			</section>
		</main>
	);
};

export default Photos;
