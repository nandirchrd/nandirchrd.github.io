import { useParams } from 'react-router-dom';

const Blog = () => {
	const { slug } = useParams();
	return (
		<main id='blog' className='mt-20'>
			<section>
				<div className='container mx-auto border border-black'>
					<h1>BLOG {slug}</h1>
				</div>
			</section>
		</main>
	);
};

export default Blog;
