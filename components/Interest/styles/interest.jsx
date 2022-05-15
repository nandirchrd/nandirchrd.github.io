import styled from 'styled-components';

export const Interest = styled.div``;
export const Title = styled.div`
	letter-spacing: 0.2em;
	font-size: 1em;
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
`;
export const InterestContainer = styled.div`
	width: 100%;
	/* border: 2px solid red; */
	margin-top: 0.5em;
	display: flex;
	justify-content: space-evenly;
	@media screen and (max-width: 768px) {
		/* border: 1px solid red; */
		display: grid;
		gap: 0.2em;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	}
`;
export const Item = styled.div`
	color: rgb(150, 150, 150);
	cursor: pointer;
	padding: 0 0.5em;
	display: flex;
	gap: 0.2em;
	/* border: 1px solid #001ea0; */
	&:hover {
		color: white;
	}
	@media screen and (max-width: 768px) {
		/* border: 1px solid red; */
		gap: 0.2em;
		justify-content: start;
		border-radius: 0;
		width: 100%;
		&:hover {
			color: unset;
		}
	}
`;
export const Icon = styled.div`
	color: white;
	font-size: 1.2em;
`;
export const Name = styled.div`
	display: flex;
	align-items: center;
	margin-left: 0.2em;
	font-size: 0.8em;
`;
