import { About, Container, Profile, Interest, Skills } from '../components';
import { FaGithub, FaCodepen, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { BsClockFill } from 'react-icons/bs';
import { RiComputerFill } from 'react-icons/ri';
import { GiEarthAmerica } from 'react-icons/gi';
import skills from '../fixtures/skills';
import interest from '../fixtures/interest';
import { useState } from 'react';

const AboutContainer = () => {
	const [slice, setSlice] = useState(3);

	const showMore = () => {
		setSlice((prev) => {
			if (skills.length < prev + 3) return skills.length;
			return prev + 3;
		});
	};
	return (
		<About id='about'>
			<Container>
				<About.Inner>
					<About.ProfilePicture>
						<About.PictureContainer>
							<About.Picture src='assets/images/me.jpg' />
						</About.PictureContainer>
					</About.ProfilePicture>
					<About.Description>
						{/* PROFILE DESCRIPTION */}
						<Profile>
							<Profile.Title>ABOUT ME</Profile.Title>
							<Profile.SubTitle>
								I{"'"}m a Front End Developer working with React
								JS.
							</Profile.SubTitle>
							<Profile.Details>
								Hi, My name is Nandi, I{"'"}m{' '}
								{new Date().getMonth > 9
									? new Date().getFullYear() - 2001
									: new Date().getFullYear() - 2002}{' '}
								years old. I{"'"}ve been learning coding for{' '}
								{new Date().getFullYear() - 2017} years. I{"'"}m
								working with React JS. I have a strong desire to
								learn programming more deeply. and I will always
								be ready to learn new things about it.
							</Profile.Details>
							<Profile.FollowMe>
								<Profile.Icon
									href='https://github.com/nandirchrd'
									target='blank'
									hoverColor='black'
									hoverBG='#eee'>
									<FaGithub />
								</Profile.Icon>
								<Profile.Icon
									href='https://codepen.io/nandirchrd'
									target='blank'
									hoverColor='black'
									hoverBG='#eee'>
									<FaCodepen />
								</Profile.Icon>
								<Profile.Icon
									href='https://twitter.com/nandirchrd'
									target='blank'
									hoverColor='#1D9BF0'
									hoverBG='#eee'>
									<FaTwitter />
								</Profile.Icon>
								<Profile.Icon
									href='https://www.linkedin.com/in/nandi-setiadi-157b31228'
									target='blank'
									hoverColor='#eee'
									hoverBG='#0A66C2'>
									<FaLinkedin />
								</Profile.Icon>
							</Profile.FollowMe>
							<Profile.ContactMe>
								<Profile.Go
									href='mailto:nandirchrd@gmail.com'
									target='blank'>
									Hire Me
								</Profile.Go>
								<Profile.Go
									href='https://wa.me/6281395209911?text=Hi,%20I%20want%20to%20ask%20something...'
									target='blank'>
									Ask Me
								</Profile.Go>
							</Profile.ContactMe>
						</Profile>
						{/* INTEREST DESCRIPTION */}
						<Interest>
							<Interest.Title>INTEREST</Interest.Title>
							<Interest.InterestContainer>
								{interest.map((interest) => (
									<Interest.Item key={interest.name}>
										<Interest.Icon>
											{interest.icon}
										</Interest.Icon>
										<Interest.Name>
											{interest.name}
										</Interest.Name>
									</Interest.Item>
								))}
							</Interest.InterestContainer>
						</Interest>
						{/* SKILLS DESCRIPTION */}
						<Skills>
							<Skills.Title>SKILLS</Skills.Title>
							{skills
								.map((skill) => (
									<Skills.Skill key={skill.name}>
										<Skills.Icon>{skill.icon}</Skills.Icon>
										<Skills.Details>
											<Skills.Top>
												<Skills.Name>
													{skill.name}
												</Skills.Name>
												<Skills.Percent>
													{skill.percentage}
												</Skills.Percent>
											</Skills.Top>
											<Skills.Bottom>
												<Skills.PercentageContainer>
													<Skills.Percentage
														width={skill.percentage}
													/>
												</Skills.PercentageContainer>
											</Skills.Bottom>
										</Skills.Details>
									</Skills.Skill>
								))
								.slice(0, slice)}

							{slice !== skills.length && (
								<Skills.ShowMore onClick={showMore}>
									Show More
								</Skills.ShowMore>
							)}
						</Skills>
					</About.Description>
				</About.Inner>
			</Container>
		</About>
	);
};

export default AboutContainer;
