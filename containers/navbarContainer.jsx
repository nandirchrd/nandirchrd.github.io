import { useState } from 'react';
import { Navbar, Container } from '../components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const NavbarContainer = ({ useNavToggle }) => {
	const [navToggle, setNavToggle] = useNavToggle;
	const handleClick = (isClose) => {
		// Nav Toggle
		const navLists = document.getElementById('navLists');
		if (isClose) {
			navLists.style.display = 'none';
			setNavToggle(false);
		}
		if (!navToggle) {
			navLists.style.display = 'flex';
			setNavToggle(true);
		}
	};
	return (
		<Navbar className='navbar'>
			<Container>
				<Navbar.Inner>
					<Navbar.Brand>
						<img width={30} src='assets/images/smile.png' />
					</Navbar.Brand>
					<Navbar.Items id='navLists'>
						{navToggle && (
							<Navbar.Close onClick={() => handleClick(true)}>
								<AiOutlineClose size={40} />
							</Navbar.Close>
						)}
						<Navbar.Item href='#home'>Home</Navbar.Item>
						<Navbar.Item href='#about'>About</Navbar.Item>
						<Navbar.Item href='#projects'>Projects</Navbar.Item>
						<Navbar.Item
							href='/assets/documents/Resume.pdf'
							download>
							Resume
						</Navbar.Item>
					</Navbar.Items>
					<Navbar.HamburgerMenu onClick={handleClick}>
						<GiHamburgerMenu />
					</Navbar.HamburgerMenu>
				</Navbar.Inner>
			</Container>
		</Navbar>
	);
};

export default NavbarContainer;
