import { useState, useEffect, useContext } from 'react';
import { BiMenuAltRight, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../contexts/themeContext';
import {
	HiOutlineLightBulb,
	HiLightBulb,
	HiMoon,
	HiOutlineMoon,
} from 'react-icons/hi';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { theme, toggle: toggleTheme } = useContext(ThemeContext);

	useEffect(() => {
		console.log(theme);
	}, [theme]);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};
	const handleToggleTheme = (value = null) => {
		value ? toggleTheme(value) : toggleTheme();
	};

	return (
		<nav
			className={`navbar fixed w-full top-0 overflow-hidden z-50 bg-black text-white`}>
			<div className={`container mx-auto flex justify-between`}>
				<div className='brand p-3 flex justify-center items-center'>
					<span className='text-5xl font-bold'>N</span>
				</div>
				<ul
					className={`navbar-nav hidden p-3 lg:flex gap-5 items-center`}>
					<li className='navbar-item'>
						<Link to='/' className='hover:text-green-500'>
							Home
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/blogs' className='hover:text-green-500'>
							Blog
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/photos' className='hover:text-green-500'>
							Photography
						</Link>
					</li>
				</ul>
				{/* MODE */}
				<button className='hidden lg:block'>
					{theme === 'light' ? (
						<HiLightBulb
							onClick={() => handleToggleTheme('dark')}
							className='text-yellow-400'
							size={60}
							cursor={'pointer'}
						/>
					) : (
						<HiOutlineLightBulb
							onClick={() => handleToggleTheme('light')}
							className='hover:text-yellow-400'
							size={60}
							cursor={'pointer'}
						/>
					)}
				</button>
				{/* RESPONSIVE MOBILE TOGGLE */}
				<button
					id='toggle-nav'
					className='lg:hidden hover:text-green-500'
					onClick={handleToggle}>
					{!toggle ? (
						<BiMenuAltRight size={60} />
					) : (
						<BiX
							size={60}
							className='text-red-500 hover:text-red-600'
						/>
					)}
				</button>
			</div>
			{toggle && (
				<ul
					className={`px-3 py-3 flex flex-col justify-between h-[90vh] container mx-auto lg:hidden pb-[5rem]`}>
					<div>
						<li
							className={`flex justify-between p-3 border-b border-white border-opacity-10`}>
							{theme === 'dark' && (
								<>
									<HiMoon
										onClick={() =>
											handleToggleTheme('light')
										}
										className=''
										size={30}
										cursor={'pointer'}
									/>
									<HiOutlineLightBulb
										onClick={() =>
											handleToggleTheme('light')
										}
										className='text-yellow-400'
										size={30}
										cursor={'pointer'}
									/>
								</>
							)}
							{theme === 'light' && (
								<>
									<HiOutlineMoon
										onClick={() =>
											handleToggleTheme('dark')
										}
										className=''
										size={30}
										cursor={'pointer'}
									/>
									<HiLightBulb
										onClick={() =>
											handleToggleTheme('dark')
										}
										className='text-yellow-400'
										size={30}
										cursor={'pointer'}
									/>
								</>
							)}
						</li>
						<li
							onClick={handleToggle}
							className={`text-center p-3 cursor-pointer ${
								theme === 'dark'
									? 'hover:bg-white hover:text-black'
									: 'hover:bg-black hover:text-white'
							}`}>
							<Link to='/'>HOME</Link>
						</li>
						<li
							onClick={handleToggle}
							className={`text-center p-3 cursor-pointer ${
								theme === 'dark'
									? 'hover:bg-white hover:text-black'
									: 'hover:bg-black hover:text-white'
							}`}>
							<Link to='/blogs'>BLOG</Link>
						</li>
						<li
							onClick={handleToggle}
							className={`text-center p-3 cursor-pointer ${
								theme === 'dark'
									? 'hover:bg-white hover:text-black'
									: 'hover:bg-black hover:text-white'
							}`}>
							<Link to='/photos'>PHOTOGRAPHY</Link>
						</li>
					</div>
					<div className=''>
						<li
							className={`text-center p-3 bottom-0 cursor-pointer bg-black text-white bg-white text-black`}>
							<Link>Download Resume</Link>
						</li>
					</div>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
