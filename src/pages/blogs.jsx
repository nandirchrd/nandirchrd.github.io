import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ActivePageContext } from '../contexts/activePageContext';
import { ThemeContext } from '../contexts/themeContext';
import { getBlogs } from '../services/blogService';

const Blogs = () => {
	const { setPage } = useContext(ActivePageContext);
	const [blogs, setBlogs] = useState([]);
	const { theme } = useContext(ThemeContext);

	useEffect(() => {
		async function fetchData() {
			const blogs = await getBlogs();

			console.log(blogs);
			sessionStorage.setItem('blogs', JSON.stringify(blogs));
			setBlogs(blogs);
		}
		if (!sessionStorage.getItem('blogs')) {
			fetchData();
		} else {
			setBlogs(JSON.parse(sessionStorage.getItem('blogs')));
		}
	}, []);
	useEffect(() => {
		setPage('blogs');
	}, [setPage]);

	return (
		<main id='blogs' className='mt-20 pb-10'>
			<section>
				<div className='container'>
					<h1
						className={`p-2 text-center text-xl font-semibold border-b ${
							theme === 'dark' ? 'border-white' : 'border-dark'
						}`}>
						BLOGS
					</h1>
					<div className='mt-2'>
						{blogs.map((blog) => (
							<article
								className='flex flex-col mb-2 lg:flex-row lg:gap-2'
								key={blog._id}>
								<Link to={blog.slug}>
									<img
										src={blog.thumb}
										alt={blog.title}
										className='rounded-md lg:rounded-full lg:w-[7em] lg:h-[7em]'
									/>
								</Link>
								<div className='description mt-2 order-2 gap-1 text-xs flex flex-col lg:gap-2 min-w-[12em] lg:order-none'>
									<div className='grid grid-cols-[120px,_1fr] lg:grid-cols-none'>
										<h2 className='text-xs'>Date:</h2>
										<span className='block whitespace-nowrap font-semibold'>
											{`${new Date(
												blog.date
											).toLocaleString('id', {
												month: 'long',
											})} ${new Date(
												blog.date
											).getDay()}, ${new Date(
												blog.date
											).getFullYear()}`}
										</span>
									</div>
									<div className='grid grid-cols-[120px,_1fr] lg:grid-cols-none'>
										<h2 className='text-xs'>Tags:</h2>
										<div className='grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(100px,_max-content))]'>
											{blog.categories.map((c) => (
												<span
													key={c.title}
													className='font-medium lg:border lg:p-1 text-xs'>
													{c.title}
												</span>
											))}
										</div>
									</div>
									<div className='grid grid-cols-[120px,_1fr] lg:grid-cols-none'>
										<h2 className='text-xs'>Created By:</h2>
										<span className='block whitespace-nowrap font-semibold'>
											Nandi Setiadi
										</span>
									</div>
								</div>
								<Link
									className='block lg:w-[65%]'
									to={blog.slug}>
									<div className='body h-full max-h-[8em] overflow-hidden'>
										<h1 className='text-xl font-semibold'>
											{blog.title}
										</h1>
										<p className='text-sm'>
											{blog.body[0].children[0].text}
										</p>
									</div>
								</Link>
							</article>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Blogs;
