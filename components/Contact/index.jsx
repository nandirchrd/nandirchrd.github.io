import { Contact as Container, Title } from './styles/contact';

export default function Contact({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Contact.Title = function ContactTitle({ children, ...restProps }) {
	return <Title {...restProps}> {children} </Title>;
};
