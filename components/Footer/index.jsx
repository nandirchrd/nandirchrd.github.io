import { Footer as Container } from './styles/footer';

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
