import Link from 'next/link';
import { Projects, Container } from '../components';
import projects from '../fixtures/projects';
import stuff from '../fixtures/stuff';

const ProjectsContainer = ({ children, ...restProps }) => {
	return (
		<Projects id='projects'>
			<Container>
				<Projects.Title>Projects I{"'"}ve Working On</Projects.Title>
				<Projects.Wrapper>
					{projects.map((project) => (
						<Projects.Project key={project.title}>
							<Projects.Thumb src={project.thumb} />
							<Projects.Description>
								<Projects.Name>{project.title}</Projects.Name>
								<Projects.Details>
									{project.description}
								</Projects.Details>
								<Projects.Tags>
									{project.tags.map((tag) => (
										<Projects.Tag key={tag}>
											{tag}
										</Projects.Tag>
									))}
								</Projects.Tags>
								<Projects.Share>
									{project.open.map((open) => (
										<Link
											href={open.link}
											passHref={true}
											key={open.link}>
											<a target='_blank'>
												<Projects.Button>
													{open.title}
												</Projects.Button>
											</a>
										</Link>
									))}
								</Projects.Share>
							</Projects.Description>
						</Projects.Project>
					))}
				</Projects.Wrapper>
				{/* SOMETHINGS I'VE BUILT */}
				<Projects.Title>Somethings I{"'"}ve Built</Projects.Title>
				<Projects.Wrapper>
					{stuff.map((stuff) => (
						<Projects.Project key={stuff.title}>
							<Projects.Thumb src={stuff.thumb} />
							<Projects.Description>
								<Projects.Name>{stuff.title}</Projects.Name>
								<Projects.Details>
									{stuff.description}
								</Projects.Details>
								<Projects.Tags>
									{stuff.tags.map((tag, id) => (
										<Projects.Tag key={id}>
											{tag}
										</Projects.Tag>
									))}
								</Projects.Tags>
								<Projects.Share>
									{stuff.open.map((open, id) => (
										<Link
											key={id}
											href={open.link}
											passHref>
											<a target='_blank'>
												<Projects.Button>
													{open.title}
												</Projects.Button>
											</a>
										</Link>
									))}
								</Projects.Share>
							</Projects.Description>
						</Projects.Project>
					))}
				</Projects.Wrapper>
			</Container>
		</Projects>
	);
};

export default ProjectsContainer;
