import { Header, Container } from '../components';

const HeaderContainer = () => {
	return (
		<Header id='home'>
			<Header.Clip />
			<Container>
				<Header.Inner>
					<Header.Welcome>
						<Header.SubTitle>Hi, my name is</Header.SubTitle>
						<Header.Title>Nandi Setiadi</Header.Title>
						<Header.SubTitle>
							I{"'"}m a{' '}
							<Header.Role id='role'>
								Front End Developer
							</Header.Role>
						</Header.SubTitle>
					</Header.Welcome>
					<Header.Image src='assets/images/dab.png' />
				</Header.Inner>
			</Container>
		</Header>
	);
};
export default HeaderContainer;
