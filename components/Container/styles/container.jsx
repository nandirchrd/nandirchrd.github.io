import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	/* border: 1px solid red; */
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 1em;
	@media screen and (max-width: 768px) {
		padding: 0 0.6em;
	}
`;
