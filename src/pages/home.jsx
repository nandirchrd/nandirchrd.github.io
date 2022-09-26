import { FiCodepen, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Cards } from '../components';
import projects from '../constants/projects';
import stuff from '../constants/stuff';
import { ThemeContext } from '../contexts/themeContext';
import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Character from '../models/character';
import { OrbitControls } from '@react-three/drei';
import { ActivePageContext } from '../contexts/activePageContext';
import skills from '../constants/skills';
import { useEffect } from 'react';
import Skills from '../components/skills';
import ItsTime from '../assets/music/its-time.mp3';

const Home = () => {
	const { theme } = useContext(ThemeContext);
	const { setPage } = useContext(ActivePageContext);
	const bruceBuffer = new Audio(ItsTime);

	useEffect(() => {
		setPage('home');
	}, [setPage]);

	return (
		<main
			id='home'
			className={`mt-14 py-2 ${
				theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'
			}`}>
			{/* LANDING PAGE */}
			<section className='landing-page h-[75vh]'>
				<div className='container px-3 py-10 flex flex-col justify-between h-full lg:py-8'>
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
									className={` ${
										theme === 'dark'
											? 'text-green-500'
											: 'text-green-700'
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
						<Canvas className='cursor-grab hidden lg:block'>
							<OrbitControls />
							<ambientLight
								intensity={theme === 'dark' ? 0.2 : 0.5}
							/>
							<directionalLight
								intensity={0.2}
								position={[0, 2, 2]}
							/>
							<Suspense fallback={false}>
								<Character
									scale={3.5}
									position={[0, -2.8, 0]}
									castShadow={true}
								/>
							</Suspense>
						</Canvas>
						{/* <canvas
							id='3d-model'
							className='hidden w-full bg-red-500 lg:block'></canvas> */}
					</div>
					<div className='social-media flex justify-around'>
						<a
							className={`flex w-full justify-center items-center p-2 ${
								theme === 'dark'
									? 'hover:text-green-500'
									: 'hover:text-green-500 hover:bg-black '
							}`}
							href='https://github.com/nandirchrd'
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
							href='https://www.linkedin.com/in/nandi-setiadi-157b31228/'
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
							href='mailto:nandirchrd@gmail.com'
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
							href='https://twitter.com/nandirchrd'
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
							href='http://codepen.io/nandirchrd'
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
								href='http://cplusplus.com'
								target='_blank'
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
								href='http://javascript.com'
								target='_blank'
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
								href='http://reactjs.org'
								target='_blank'
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
								href='http://javascript.com'
								target='_blank'
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
					{/* SKILLS */}
					<Skills data={skills} />
					{/* FACTS ABOUT ME */}
					<div className='facts-about-me mt-2 flex'>
						<h1 className='min-w-[8.5em] px-2 py-3'>
							Facts About Me:
						</h1>
						<div className='p-2 grid grid-cols-[repeat(auto-fit,_minmax(170px,_1fr))] w-full gap-2'>
							<button
								onClick={() => bruceBuffer.play()}
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
				<div className='container p-3'>
					<h1
						className={`p-2 text-center text-xl font-semibold border-b ${
							theme === 'dark' ? 'border-white' : 'border-dark'
						}`}>
						PROJECTS I'VE WORKED ON
					</h1>
					<div className='mt-4'>
						<Cards datas={projects} />
					</div>
				</div>
			</section>
			{/* SOMETHING I'VE BUILT */}
			<section className='mt-2'>
				<div className='container p-3'>
					<h1
						className={`p-2 text-center text-xl font-semibold border-b ${
							theme === 'dark' ? 'border-white' : 'border-dark'
						}`}>
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
