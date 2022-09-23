import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const Footer = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<footer
			className={`${
				theme === 'dark'
					? 'bg-black text-white border-t border-white'
					: 'bg-white text-black border-t border-black'
			}`}>
			<div className='container mx-auto p-2'>
				<div className='footer-description text-center text-xs'>
					<p>
						Made with{' '}
						<a
							className={`${
								theme === 'dark'
									? 'text-green-500'
									: 'text-green-700'
							}`}
							rel='noreferrer'
							target='_blank'
							href='http://reactjs.org'>
							React JS
						</a>{' '}
						& Powered by{' '}
						<a
							className={`${
								theme === 'dark'
									? 'text-green-500'
									: 'text-green-700'
							}`}
							rel='noreferrer'
							target='_blank'
							href='http://sanity.io'>
							Sanity.io
						</a>
					</p>
					<p>
						&copy; {new Date().getFullYear()}{' '}
						<a
							className={`${
								theme === 'dark'
									? 'text-green-500'
									: 'text-green-700'
							}`}
							rel='noreferrer'
							target='_blank'
							href='http://twitter.com/nandirchrd'>
							Nandi Setiadi
						</a>{' '}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
