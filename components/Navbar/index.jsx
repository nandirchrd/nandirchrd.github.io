import {
	Navbar as Container,
	Inner,
	Brand,
	Items,
	Item,
	Close,
	HamburgerMenu,
} from './styles/navbar';

export default function Navbar({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
Navbar.Inner = function NavbarInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};
Navbar.Brand = function NavbarBrand({ children, ...restProps }) {
	return <Brand {...restProps}>{children}</Brand>;
};

Navbar.Items = function NavbarItems({ children, ...restProps }) {
	return <Items {...restProps}>{children}</Items>;
};

Navbar.Item = function NavbarItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Navbar.Close = function NavbarClose({ children, ...restProps }) {
	return <Close {...restProps}>{children}</Close>;
};
Navbar.HamburgerMenu = function NavbarHamburgerMenu({
	children,
	...restProps
}) {
	return <HamburgerMenu {...restProps}>{children}</HamburgerMenu>;
};
