import styled from 'styled-components';

export const Contact = styled.div`
	width: 100%;
	/* border: 2px solid green; */
	@media screen and (max-width: 768px) {
		padding: 1em 0;
	}
`;
export const Title = styled.h1`
	letter-spacing: 0.2em;
	font-size: clamp(1.5em, 3vw, 2em);
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
	margin-bottom: 0.5em;
`;
