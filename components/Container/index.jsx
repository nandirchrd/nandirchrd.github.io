import { Container as Cont } from './styles/container';

export default function Container({ children, ...restProps }) {
	return <Cont {...restProps}>{children}</Cont>;
}
