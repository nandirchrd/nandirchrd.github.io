import { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getBlog } from '../services/blogService';
import BlockContent from '@sanity/block-content-to-react';

const Blog = () => {
	const { slug } = useParams();
	const [blog] = useState(getBlog(slug));

	if (!blog) {
		return <Navigate to='/blogs' />;
	}

	return (
		<main id='blog' className='mt-20 pb-10'>
			<section>
				<article className='container mx-auto '>
					<img
						className='aspect-video w-full max-h-[25em] rounded-md'
						src={blog.thumb}
						alt={blog.title}
					/>
					<h1 className='text-4xl font-bold mt-2'>{blog.title}</h1>
					<div className='body mt-2'>
						<BlockContent blocks={blog.body} />
					</div>
				</article>
			</section>
		</main>
	);
};

export default Blog;
