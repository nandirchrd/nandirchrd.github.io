import { FiCodepen, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { GrGoogle } from 'react-icons/gr';
import { FaReact } from 'react-icons/fa';
import { Cards } from '../components';
import projects from '../constants/projects';
import stuff from '../constants/stuff';
import { ThemeContext } from '../contexts/themeContext';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Home = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<main
			id='home'
			className={`mt-14 py-2 ${
				theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
			}`}>
			{/* LANDING PAGE */}
			<section className='landing-page h-[75vh]'>
				<div className='container mx-auto px-3 py-10 flex flex-col justify-between h-full lg:py-8'>
					<div className='lg:flex'>
						<div className='flex flex-col justify-evenly min-h-[12em] max-w-lg'>
							<p>Hi, my name is,</p>
							<h1 className='font-bold text-4xl'>
								Nandi Setiadi.
							</h1>
							<h2 className='font-semibold text-lg'>
								I'm a Front-End Developer.
							</h2>
							<p>
								I'm a front developer working with{' '}
								<a
									className={`text-green-700 hover:text-green-500 ${
										theme === 'dark' && 'text-green-500'
									}`}
									href='http://reactjs.org'
									rel='noreferrer'
									target='_blank'>
									React JS
								</a>
								. I'm passionate about the world of technology
								and I dedicate my life to it.
							</p>
						</div>
						<canvas
							id='3d-model'
							className='hidden w-full bg-red-500 lg:block'></canvas>
					</div>
					<div className='social-media flex justify-around'>
						<a
							className={`flex w-full justify-center items-center p-2 ${
								theme === 'dark'
									? 'hover:text-green-500'
									: 'hover:text-green-500 hover:bg-black '
							}`}
							href='http://reactjs.org'
							rel='noreferrer'
							target='_blank'>
							<FiGithub />
						</a>
						<a
							className={`flex w-full justify-center items-center p-2 ${
								theme === 'dark'
									? 'hover:text-green-500'
									: 'hover:text-green-500 hover:bg-black '
							}`}
							href='http://reactjs.org'
							rel='noreferrer'
							target='_blank'>
							<FiLinkedin />
						</a>

						<a
							className={`flex w-full justify-center items-center p-2 hover:border-b-2 border-b-2 border-opacity-20 ${
								theme === 'dark'
									? 'border-white hover:border-green-500'
									: 'border-black hover:border-green-700'
							}`}
							href='http://reactjs.org'
							rel='noreferrer'
							target='_blank'>
							<FcGoogle size={40} />
						</a>
						<a
							className={`flex w-full justify-center items-center p-2 ${
								theme === 'dark'
									? 'hover:text-green-500'
									: 'hover:text-green-500 hover:bg-black '
							}`}
							href='http://reactjs.org'
							rel='noreferrer'
							target='_blank'>
							<FiTwitter />
						</a>
						<a
							className={`flex w-full justify-center items-center p-2 ${
								theme === 'dark'
									? 'hover:text-green-500'
									: 'hover:text-green-500 hover:bg-black '
							}`}
							href='http://reactjs.org'
							rel='noreferrer'
							target='_blank'>
							<FiCodepen />
						</a>
					</div>
				</div>
			</section>
			{/* ABOUT ME */}
			<section className='mt-1'>
				<div className='container mx-auto p-3'>
					<h1
						className={`p-2 text-center text-xl font-semibold border-b ${
							theme === 'dark' ? 'border-white' : 'border-dark'
						}`}>
						ABOUT ME
					</h1>
					<div className='description mt-4'>
						<p>
							Hi! My name is Nandi. I love developing applications
							especially on the web. I got to know proggramming
							when I started to enter high school (5 years ago).
						</p>
						<p>
							The first proggramming language I learn was{' '}
							<a
								href='http://cplus.com'
								rel='noreferrer'
								className={`${
									theme === 'dark'
										? 'text-green-500'
										: 'text-green-700'
								}`}>
								C++
							</a>
							. And then in 2nd, I got to know{' '}
							<a
								href='http://cplus.com'
								rel='noreferrer'
								className={`${
									theme === 'dark'
										? 'text-green-500'
										: 'text-green-700'
								}`}>
								Javascript
							</a>
							. After graduated, I continued to learn it more
							deeply on the internet. I got know{' '}
							<a
								href='http://cplus.com'
								rel='noreferrer'
								className={`${
									theme === 'dark'
										? 'text-green-500'
										: 'text-green-700'
								}`}>
								React
							</a>{' '}
							and started to fall in love with it.
						</p>
						<p>
							My vision is want to be mastered at{' '}
							<a
								href='http://cplus.com'
								rel='noreferrer'
								className={`${
									theme === 'dark'
										? 'text-green-500'
										: 'text-green-700'
								}`}>
								Javascript
							</a>
							. I'm gonna learn more deeply about Front-End stuff
							and some Back-End then I'll go to the Hybrid App.
						</p>
						<p>Here some technologies I've learned:</p>
					</div>
					<div
						className={`skills border-l-4 border-opacity-80 ${
							theme === 'dark' ? 'border-white' : 'border-black'
						}`}>
						<div className='flex justify-between relative mb-2 '>
							<span
								className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 ${
									theme === 'dark'
										? 'border-white'
										: 'border-black'
								}`}>
								REACT JS
							</span>
							<span className='px-2'>
								<FaReact size={40} className='p-1' />
							</span>
							<span className='w-1/2 flex items-end justify-center'>
								BASIC
							</span>
						</div>
						<div className='flex justify-between relative mb-2 '>
							<span
								className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 ${
									theme === 'dark'
										? 'border-white'
										: 'border-black'
								}`}>
								REACT JS
							</span>
							<span className='px-2'>
								<FaReact size={40} className='p-1' />
							</span>
							<span className='w-1/2 flex items-end justify-center'>
								BASIC
							</span>
						</div>
						<div className='flex justify-between relative mb-2 '>
							<span
								className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 ${
									theme === 'dark'
										? 'border-white'
										: 'border-black'
								}`}>
								REACT JS
							</span>
							<span className='px-2'>
								<FaReact size={40} className='p-1' />
							</span>
							<span className='w-1/2 flex items-end justify-center'>
								BASIC
							</span>
						</div>
						<div className='flex justify-between relative mb-2 '>
							<span
								className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 ${
									theme === 'dark'
										? 'border-white'
										: 'border-black'
								}`}>
								REACT JS
							</span>
							<span className='px-2'>
								<FaReact size={40} className='p-1' />
							</span>
							<span className='w-1/2 flex items-end justify-center'>
								BASIC
							</span>
						</div>
						<div className='flex justify-between relative mb-2 '>
							<span
								className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 ${
									theme === 'dark'
										? 'border-white'
										: 'border-black'
								}`}>
								REACT JS
							</span>
							<span className='px-2'>
								<FaReact size={40} className='p-1' />
							</span>
							<span className='w-1/2 flex items-end justify-center'>
								BASIC
							</span>
						</div>
					</div>
					{/* LOAD MORE */}
					<button
						className={`border w-full text-center p-1 ${
							theme === 'dark'
								? 'hover:bg-green-500 hover:border-green-500 hover:text-white border-white'
								: 'hover:bg-black hover:text-white border-black'
						}  `}>
						LOAD MORE
					</button>
					{/* FACTS ABOUT ME */}
					<div className='facts-about-me mt-2 flex'>
						<h1 className='min-w-[8.5em] px-2 py-3'>
							Facts About Me:
						</h1>
						<div className='p-2 grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] w-full gap-2'>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								UFC Fans
							</button>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								Love History
							</button>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								Music
							</button>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								Books
							</button>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								Minimalist
							</button>
							<button
								className={`p-1 border rounded-md ${
									theme === 'dark'
										? 'border-white hover:bg-green-500 hover:text-black hover:border-green-500'
										: 'border-black hover:bg-black hover:text-white'
								}`}>
								Photography
							</button>
						</div>
					</div>
				</div>
			</section>
			{/* PROJECTS */}
			<section className='mt-2'>
				<div className='container mx-auto border border-black p-3'>
					<h1 className='text-center text-xl font-semibold border border-black'>
						PROJECTS I'VE WORKED ON
					</h1>
					<div className='mt-4'>
						<Cards datas={projects} />
					</div>
				</div>
			</section>
			{/* SOMETHING I'VE BUILT */}
			<section className='mt-2'>
				<div className='container mx-auto border border-black p-3'>
					<h1 className='text-center text-xl font-semibold border border-black'>
						SOMETHING I'VE BUILT
					</h1>
					<div className='mt-4'>
						<Cards datas={stuff} />
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
