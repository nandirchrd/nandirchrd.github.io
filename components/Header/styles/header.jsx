import styled from 'styled-components';
export const Header = styled.section`
	display: flex;
	align-items: center;
	width: 100%;
	min-height: 100vh;
	/* border: 2px solid red; */
`;
export const Clip = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #001ea0;
	clip-path: polygon(0 0, 100% 100%, 100% 0);
`;
export const Inner = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	line-height: clamp(2.5em, 8vw - 15px, 3.5em);
	/* border: 1px solid yellow; */
	@media screen and (max-width: 768px) {
		flex-direction: column;
		line-height: clamp(2.2em, 10vw, 3em);
	}
`;
export const Welcome = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
export const Title = styled.h1`
	padding: 0.1em 0;
	transform: translateX(-0.07em);
	letter-spacing: -5px;
	font-size: clamp(3em, 10vw, 5em);
	@media screen and (max-width: 768px) {
		letter-spacing: -2px;
		font-size: clamp(2em, 15vw, 5em);
	}
`;
export const SubTitle = styled.h5`
	font-size: 0.8em;
	z-index: 2;
	@media screen and (max-width: 768px) {
		font-size: 0.8em;
	}
`;
export const Role = styled.span`
	display: inline-block;
	border-bottom: 1px solid #2246e9;
	color: #2246e9;
`;
export const Image = styled.img`
	width: 30vw;
	max-width: 400px;
	min-width: 100px;
	filter: hue-rotate(310deg) contrast(1.2);
	@media screen and (max-width: 768px) {
		display: none;
	}
`;
