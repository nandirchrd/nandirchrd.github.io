import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import {
	// HiOutlineLightBulb,
	HiLightBulb,
	// HiMoon,
	HiOutlineMoon,
} from 'react-icons/hi';

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleToggle = () => {
		setToggle((prev) => !prev);
	};
	return (
		<nav className='navbar fixed w-full bg-white top-0 overflow-hidden z-50'>
			<div className='container mx-auto flex justify-between border border-black'>
				<div className='brand p-3 flex justify-center items-center'>
					<span className='text-5xl font-bold'>N</span>
				</div>
				<ul className='navbar-nav hidden p-3 lg:flex gap-5 border items-center'>
					<li className='navbar-item'>
						<Link to='/' className='navbar-link'>
							Home
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/blogs' className='navbar-link'>
							Blog
						</Link>
					</li>
					<li className='navbar-item'>
						<Link to='/photos' className='navbar-link'>
							Photography
						</Link>
					</li>
				</ul>
				{/* RESPONSIVE MOBILE TOGGLE */}
				<button
					id='toggle-nav'
					className='lg:hidden'
					onClick={handleToggle}>
					<BiMenuAltRight size={60} />
				</button>
			</div>
			{toggle && (
				<ul className='border px-3 py-3 flex flex-col justify-between h-[90vh] container mx-auto lg:hidden pb-[5rem]'>
					<div>
						<li className='flex justify-between p-3 border-b border-white border-opacity-10 '>
							<HiOutlineMoon
								className=''
								size={30}
								cursor={'pointer'}
							/>
							<HiLightBulb
								className='text-yellow-400'
								size={30}
								cursor={'pointer'}
							/>
						</li>
						<li className='text-center p-3 hover:bg-black hover:text-white cursor-pointer'>
							<Link>HOME</Link>
						</li>
						<li className='text-center p-3 hover:bg-black hover:text-white cursor-pointer'>
							<Link>BLOG</Link>
						</li>
						<li className='text-center p-3 hover:bg-black hover:text-white cursor-pointer'>
							<Link>PHOTOGRAPHY</Link>
						</li>
					</div>
					<div className=''>
						<li className='text-center p-3 bottom-0 bg-black text-white'>
							<Link>Download Resume</Link>
						</li>
					</div>
				</ul>
			)}
		</nav>
	);
};

export default Navbar;
