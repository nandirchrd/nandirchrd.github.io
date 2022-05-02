import styled from 'styled-components';

export const Projects = styled.section`
	/* border: 1px solid red; */
`;
export const Title = styled.h1`
	letter-spacing: 0.2em;
	font-size: clamp(1.5em, 3vw, 2em);
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
	margin-bottom: 0.5em;
`;
export const Wrapper = styled.div`
	/* border: 1px solid red; */
`;
export const Project = styled.div`
	display: flex;
	justify-content: space-around;
	/* border: 1px solid red; */
	padding: 20px;
	@media screen and (max-width: 768px) {
		flex-direction: column;
	}
`;
export const Thumb = styled.img`
	/* border: 1px solid red; */
	border-radius: 5px;
	border-top-right-radius: 10%;
	flex: 1;
	min-width: 200px;
	max-width: 250px;
	@media screen and (max-width: 768px) {
		max-width: unset;
		min-width: unset;
		min-height: 50vw;
	}
`;
export const Description = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	flex: 4;
	max-width: 600px;
	/* border: 1px solid red; */
`;
export const Name = styled.h1`
	/* border: 1px solid red; */
	padding: 0.5em;
	letter-spacing: 0.2em;
	font-size: 1em;
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 400;
	color: white;
	@media screen and (max-width: 786px) {
		padding: 0.5em 0;
	}
`;
export const Details = styled.p`
	padding: 0 1em;
	font-size: 0.6em;
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
	@media screen and (max-width: 786px) {
		padding: 0;
	}
	/* border: 1px solid red; */
`;
export const Tags = styled.div`
	opacity: 0.6;
	padding: 0.6em;
	font-size: 1em;
	display: flex;
	gap: 0.5em;
	@media screen and (max-width: 786px) {
		padding: 0.5em 0;
	}
	/* border: 1px solid red; */
`;
export const Tag = styled.div``;
export const Share = styled.div`
	display: flex;
	justify-content: end;
	gap: 0.2em;
	@media screen and (max-width: 786px) {
		justify-content: start;
	}
	/* border: 1px solid red; */
`;
export const Button = styled.button`
	cursor: pointer;
	color: white;
	padding: 0.2em 1em;
	border: none;
	background-color: #001ea0;
	border-radius: 2px;
	&:hover {
		background-color: yellow;
		color: black;
	}
`;
