import React from 'react';

const Footer = () => {
	return (
		<footer className='mt-2 border-t border-black'>
			<div className='container mx-auto p-2'>
				<div className='footer-description text-center text-xs'>
					<p>
						Made with{' '}
						<a
							className='text-green-700'
							rel='noreferrer'
							target='_blank'
							href='http://reactjs.org'>
							React JS
						</a>{' '}
						& Powered by{' '}
						<a
							className='text-green-700'
							rel='noreferrer'
							target='_blank'
							href='http://sanity.io'>
							Sanity.io
						</a>
					</p>
					<p>
						&copy; {new Date().getFullYear()}{' '}
						<a
							className='text-green-700'
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
