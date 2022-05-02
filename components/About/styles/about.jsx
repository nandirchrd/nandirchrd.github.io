import styled from 'styled-components';

export const About = styled.section`
	padding: 1em 0;
	display: flex;
	align-items: center;
	width: 100%;
	/* border: 1px solid red; */
	@media screen and (max-width: 768px) {
		padding: 1em 0;
	}
`;
export const Inner = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	/* border: 1px solid green; */
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const ProfilePicture = styled.div`
	padding: 0.5em;
	max-width: 800px;
	/* border: 1px solid red; */
	@media screen and (max-width: 768px) {
	}
`;
export const PictureContainer = styled.div`
	width: 20vw;
	height: 20vw;
	max-width: 10em;
	max-height: 10em;
	min-width: 150px;
	min-height: 150px;
	background-color: #001ea0;
	border-radius: 50%;
	position: relative;
	border-radius: 50%;
	overflow: hidden;
`;
export const Picture = styled.img`
	filter: contrast(1.1);
	position: absolute;
	top: -5px;
	left: 0;
	width: 100%;
`;
export const Description = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5em;
	min-width: 70%;
	max-width: 800px;
	/* border: 1px solid red; */
`;
