import { Footer, Container } from '../components';

const FooterContainer = () => {
	return (
		<Footer id='footer'>
			<Container>
				<p
					style={{
						textAlign: 'center',
						fontSize: '0.5em',
					}}>
					Made with NextJS
				</p>
			</Container>
		</Footer>
	);
};

export default FooterContainer;
