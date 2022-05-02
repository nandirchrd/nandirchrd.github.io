import styled from 'styled-components';
export const Navbar = styled.nav`
	width: 100%;
	background-color: #001ea0;
	position: fixed;
	top: 0;
	z-index: 9999;
	transition: top 0.3s;
`;
export const Inner = styled.div`
	padding: 0.8em 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 768px) {
		padding: 0.5em 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;
export const Brand = styled.div`
	display: flex;
	gap: 1em;
	/* border: 1px solid red; */
`;
export const Items = styled.div`
	display: flex;
	gap: 1em;
	@media screen and (max-width: 992px) {
		display: none;
		background-color: #001ea0;
		position: absolute;
		top: 0;
		right: 0;
		flex-direction: column;
		align-items: flex-start;
		width: 80vw;
		height: 100vh;
		/* border: 2px solid red; */
	}
`;
export const Close = styled.button`
	align-self: end;
	cursor: pointer;
	color: red;
	display: flex;
	justify-content: center;
	border: none;
	padding: 0.5em;
	background-color: unset;
	@media screen and (min-width: 992px) {
		display: none;
	}
`;
export const Item = styled.a`
	/* border: 1px solid red; */
	padding: 0.4em 0.6em;
	border-radius: 10px;
	@media screen and (max-width: 992px) {
		border-radius: 0;
	}
	&:hover {
		color: yellow;
	}
`;
export const HamburgerMenu = styled.div`
	cursor: pointer;
	display: none;
	@media screen and (max-width: 992px) {
		display: block;
	}
`;
