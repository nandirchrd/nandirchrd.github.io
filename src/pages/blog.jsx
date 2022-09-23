import { useParams } from 'react-router-dom';
const Blog = () => {
	const { slug } = useParams();
	return (
		<div id='blog' className='mt-20'>
			<section>
				<div className='container mx-auto border border-black'>
					<h1>BLOG {slug}</h1>
				</div>
			</section>
		</div>
	);
};

export default Blog;
