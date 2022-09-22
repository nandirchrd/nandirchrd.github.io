import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar bg-blue-600'>
			<div className='container m-auto flex justify-between border-2 border-black'>
				<div className='brand p-3'>N</div>
				<ul className='navbar-nav p-3 flex gap-5 border'>
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
			</div>
		</nav>
	);
};

export default Navbar;
