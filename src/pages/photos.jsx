import { useContext, useEffect } from 'react';
import { ActivePageContext } from '../contexts/activePageContext';
import { Link } from 'react-router-dom';
import photos from '../constants/photos';
import { ThemeContext } from '../contexts/themeContext';

const Photos = () => {
	const { setPage } = useContext(ActivePageContext);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		setPage('photos');
	}, [setPage]);

	return (
		<main id='photos' className='mt-20 pb-8'>
			<section>
				<div className='container'>
					<h1
						className={`p-2 text-center text-xl font-semibold border-b ${
							theme === 'dark' ? 'border-white' : 'border-dark'
						}`}>
						PHOTOS
					</h1>
					<div className='grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-2 mt-2 pb-2'>
						{photos.map((photo) => (
							<div
								className='w-full aspect-square overflow-hidden rounded-md'
								key={photo.id}>
								<Link to={`/photos/${photo.id}`}>
									<img
										onContextMenu={(e) =>
											e.preventDefault()
										}
										className='w-full h-full blur-[1px] hover:scale-110 hover:filter-none duration-700'
										src={photo.thumb}
										alt={photo.thumb}
									/>
								</Link>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Photos;
