import {
	Interest as Container,
	Title,
	InterestContainer,
	Icon,
	Name,
	Item,
} from './styles/interest';

export default function Interest({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
Interest.Title = function InterestTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Interest.InterestContainer = function InterestInterestContainer({
	children,
	...restProps
}) {
	return <InterestContainer {...restProps}>{children}</InterestContainer>;
};
Interest.Item = function InterestItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};
Interest.Icon = function InterestIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};
Interest.Name = function InterestName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
