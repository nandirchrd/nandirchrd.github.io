import styled from 'styled-components';

export const Skills = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Title = styled.h1`
	letter-spacing: 0.2em;
	font-size: 1em;
	font-family: 'Calibri', 'Trebuchet MS', sans-serif;
	font-weight: 100;
	color: rgb(150, 150, 150);
`;

export const Icon = styled.div`
	font-size: clamp(1.5em, 6vw, 2em);
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 80px;
`;
export const Percentage = styled.div`
	width: ${({ width }) => width || '50%'};
	height: 100%;
	background-color: #001ea0;
`;
export const Skill = styled.div`
	color: rgb(150, 150, 150);
	display: flex;
	/* border: 1px solid red; */
	margin-top: 0.5em;
	cursor: pointer;
	&:hover {
		color: white;
	}
	&:hover ${Percentage} {
		background-color: yellow;
	}
`;
export const Details = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;
export const Top = styled.div`
	padding: 0.25em 0;
	/* border: 1px solid yellow; */
	display: flex;
	justify-content: space-between;
`;
export const Name = styled.span`
	color: white;
	font-size: clamp(0.8em, 3vw + 5px, 1em);
`;
export const Percent = styled.span`
	color: white;
	font-size: clamp(0.8em, 3vw + 5px, 1em);
`;
export const Bottom = styled.div`
	padding: 0.25em 0;
	/* border: 1px solid orange; */
`;
export const PercentageContainer = styled.div`
	width: 100%;
	height: 10px;
	background-color: rgba(150, 150, 150, 0.5);
`;
export const ShowMore = styled.button`
	margin: 0 auto;
	margin-top: 1em;
	border-radius: 5px;
	cursor: pointer;
	padding: 0.5em 1em;
	color: white;
	background-color: #001ea0;
	border: none;
	&:hover {
		color: black;
		background-color: yellow;
	}
`;
