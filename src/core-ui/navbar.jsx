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
import { ActivePageContext } from '../contexts/activePageContext';
import Logo from '../assets/images/logo.png';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);
	const { theme, toggle: toggleTheme } = useContext(ThemeContext);
	const { page } = useContext(ActivePageContext);

	useEffect(() => {
		console.log(theme, page);
		if (theme === 'dark') {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		} else {
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		}
	}, [theme, page]);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};
	const handleToggleTheme = (value = null) => {
		value ? toggleTheme(value) : toggleTheme();
	};

	return (
		<nav className='navbar dark'>
			<div className='container flex justify-between'>
				{/* NAVBAR BRAND */}
				<div className='navbar-brand max-w-[45px]'>
					{/* BRAND HERE */}
					<img src={Logo} className='h-full' alt='My logo' />
				</div>
				{/* NAVBAR NAV */}
				<ul className={`navbar-nav`}>
					<li
						className={`nav-item ${
							page === 'home' && 'text-green-500'
						}`}>
						<Link to='/' className='nav-link'>
							Home
						</Link>
					</li>
					<li
						className={`nav-item ${
							page === 'blogs' && 'text-green-500'
						}`}>
						<Link to='/blogs' className='nav-link'>
							Blog
						</Link>
					</li>
					<li
						className={`nav-item ${
							page === 'photos' && 'text-green-500'
						}`}>
						<Link to='/photos' className='nav-link'>
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
				{/* RESPONSIVE TOGGLE MOBILE */}
				<button className='navbar-toggle' onClick={handleToggle}>
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
					className={`container navbar-nav-mobile flex flex-col justify-between`}>
					{/* NAVIGATION */}
					<div className='mobile-nav'>
						<li className='mobile-nav-mode'>
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
							className={`mobile-nav-item hover:text-green-500 ${
								page === 'home' &&
								'border-b-2 border-green-500 text-green-500'
							} `}>
							<Link to='/'>HOME</Link>
						</li>
						<li
							onClick={handleToggle}
							className={`mobile-nav-item hover:text-green-500  ${
								page === 'blogs' &&
								'border-b-2 border-green-500 text-green-500'
							} `}>
							<Link to='/blogs'>BLOG</Link>
						</li>
						<li
							onClick={handleToggle}
							className={`mobile-nav-item hover:text-green-500 ${
								page === 'photos' &&
								'border-b-2 border-green-500 text-green-500'
							} `}>
							<Link to='/photos'>PHOTOGRAPHY</Link>
						</li>
					</div>
					{/* RESUME */}
					<div className='mobile-resume'>
						<li className={`mobile-resume-item`}>
							<Link>Download Resume</Link>
						</li>
					</div>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
