import {
	Profile as Container,
	Title,
	SubTitle,
	Details,
	ContactMe,
	Go,
	FollowMe,
	Icon,
} from './styles/profile';

export default function Profile({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Profile.SubTitle = function ProfileSubTitle({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
Profile.Details = function ProfileContainer({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};
Profile.ContactMe = function ProfileContactMe({ children, ...restProps }) {
	return <ContactMe {...restProps}>{children}</ContactMe>;
};
Profile.Go = function ProfileGo({ children, ...restProps }) {
	return <Go {...restProps}>{children}</Go>;
};
Profile.FollowMe = function ProfileFollowMe({ children, ...restProps }) {
	return <FollowMe {...restProps}>{children}</FollowMe>;
};
Profile.Icon = function ProfileIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};
