import Head from 'next/head';
import {
	NavbarContainer,
	HeaderContainer,
	AboutContainer,
	ProjectsContainer,
	ContactContainer,
	FooterContainer,
} from '../containers';
import { Wrapper } from '../components';
import React, { useState, useEffect } from 'react';

export default function Home() {
	const [navToggle, setNavToggle] = useState(false);

	useEffect(() => {
		let prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			let currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos || navToggle) {
				document.querySelector('.navbar').style.top = '0';
			} else {
				document.querySelector('.navbar').style.top = '-5em';
			}
			prevScrollpos = currentScrollPos;
		};
	}, [navToggle]);
	return (
		<Wrapper>
			<NavbarContainer useNavToggle={[navToggle, setNavToggle]} />
			<HeaderContainer />
			<AboutContainer />
			<ProjectsContainer />
			{/* <ContactContainer /> */}
			<FooterContainer />
		</Wrapper>
	);
}
