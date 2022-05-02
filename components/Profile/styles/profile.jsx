import styled from 'styled-components';

export const Profile = styled.div``;
export const Title = styled.h1`
	letter-spacing: 0.2em;
	font-size: 1em;
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
	margin-bottom: 0.5em;
`;
export const SubTitle = styled.h3`
	font-weight: 600;
	max-width: 600px;
	/* border: 1px solid red; */
	margin-bottom: 0.5em;
`;
export const Details = styled.p`
	color: rgb(150, 150, 150);
	font-size: 0.6em;
	font-weight: 100;
	max-width: 700px;
	/* border: 1px solid red; */
	margin-bottom: 1em;
`;
export const ContactMe = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: center;
	font-size: 0.5em;
	font-weight: 100;
	max-width: 700px;
	/* border: 1px solid red; */
`;
export const Go = styled.a`
	font-size: clamp(1.5em, 2vw, 2em);
	cursor: pointer;
	background-color: unset;
	border: 1px solid;
	border-radius: 5px;
	padding: 0.5em 2em;
	color: white;
	background-color: #001ea0;
	border: none;
	&:hover {
		color: black;
		background-color: yellow;
	}
`;
export const FollowMe = styled.div`
	display: flex;
	gap: 0.5em;
	align-items: flex-start;
	font-size: 0.5em;
	font-weight: 100;
	max-width: 700px;
	/* border: 1px solid red; */
	margin-bottom: 1em;
`;
export const Icon = styled.a`
	cursor: pointer;
	border-radius: 2px;
	font-size: clamp(1.8em, 2vw, 2em);
	background-color: unset;
	color: white;
	border: none;
	padding: 0.2em;
	&:hover {
		transform: scale(1.2);
		color: ${({ hoverColor }) => hoverColor || null};
		background-color: ${({ hoverBG }) => hoverBG || null};
	}
`;
