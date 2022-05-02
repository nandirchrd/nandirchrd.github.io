import {
	Projects as Container,
	Title,
	Wrapper,
	Project,
	Thumb,
	Description,
	Name,
	Details,
	Tags,
	Tag,
	Share,
	Button,
} from './styles/projects';

export default function Projects({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Projects.Title = function ProjectsTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Projects.Wrapper = function ProjectsWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};
Projects.Project = function ProjectsProject({ children, ...restProps }) {
	return <Project {...restProps}>{children}</Project>;
};
Projects.Thumb = function ProjectsThumb({ children, ...restProps }) {
	return <Thumb {...restProps}>{children}</Thumb>;
};
Projects.Description = function ProjectsDescription({
	children,
	...restProps
}) {
	return <Description {...restProps}>{children}</Description>;
};
Projects.Name = function ProjectsName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
Projects.Details = function ProjectsDetails({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};
Projects.Tags = function ProjectsTags({ children, ...restProps }) {
	return <Tags {...restProps}>{children}</Tags>;
};
Projects.Tag = function ProjectsTag({ children, ...restProps }) {
	return <Tag {...restProps}>{children}</Tag>;
};
Projects.Share = function ProjectsShare({ children, ...restProps }) {
	return <Share {...restProps}>{children}</Share>;
};
Projects.Button = function ProjectsButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
