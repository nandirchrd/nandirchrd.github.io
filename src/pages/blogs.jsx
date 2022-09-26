import { useContext, useEffect } from 'react';
import { ActivePageContext } from '../contexts/activePageContext';

const Blogs = () => {
	const { setPage } = useContext(ActivePageContext);

	useEffect(() => {
		setPage('blogs');
	}, [setPage]);

	return (
		<main id='blogs' className='mt-20'>
			<section>
				<div className='container mx-auto border border-black'>
					<h1>BLOGS</h1>
				</div>
			</section>
		</main>
	);
};

export default Blogs;
