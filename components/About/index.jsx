import {
	About as Container,
	Inner,
	ProfilePicture,
	PictureContainer,
	Picture,
	Description,
} from './styles/about';

export default function About({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

About.Inner = function AboutInner({ children, ...restProps }) {
	return <Inner {...restProps}>{children}</Inner>;
};
About.ProfilePicture = function AboutProfilePicture({
	children,
	...restProps
}) {
	return <ProfilePicture {...restProps}>{children}</ProfilePicture>;
};
About.PictureContainer = function AboutPictureContainer({
	children,
	...restProps
}) {
	return <PictureContainer {...restProps}>{children}</PictureContainer>;
};
About.Picture = function AboutPicture({ ...restProps }) {
	return <Picture {...restProps} />;
};
About.Description = function AboutDescription({ children, ...restProps }) {
	return <Description {...restProps}>{children}</Description>;
};
