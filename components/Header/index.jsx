import {
	Header as Container,
	Clip,
	Inner,
	Welcome,
	Title,
	SubTitle,
	Role,
	Image,
} from './styles/header';

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
Header.Clip = function HeaderClip({ children, ...restProps }) {
	return <Clip {...restProps}>{children}</Clip>;
};
Header.Inner = function HeaderInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};

Header.Welcome = function HeaderWelcome({ children, ...restProps }) {
	return <Welcome {...restProps}>{children}</Welcome>;
};
Header.Title = function HeaderContainer({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Header.SubTitle = function HeaderSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Header.Role = function HeaderRole({ children, ...restProps }) {
	return <Role {...restProps}>{children}</Role>;
};
Header.Image = function HeaderImage({ ...restProps }) {
	return <Image {...restProps} />;
};
