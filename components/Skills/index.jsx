import {
	Skills as Container,
	Title,
	Skill,
	Icon,
	Details,
	Top,
	Name,
	Percent,
	Bottom,
	PercentageContainer,
	Percentage,
	ShowMore,
} from './styles/skills';

export default function Skills({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}
Skills.Title = function SkillsTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Skills.Skill = function SkillsSkill({ children, ...restProps }) {
	return <Skill {...restProps}>{children}</Skill>;
};
Skills.Icon = function SkillsIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};
Skills.Details = function SkillsDetails({ children, ...restProps }) {
	return <Details {...restProps}>{children}</Details>;
};
Skills.Top = function SkillsTop({ children, ...restProps }) {
	return <Top {...restProps}>{children}</Top>;
};
Skills.Name = function SkillsName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};
Skills.Percent = function SkillsPercent({ children, ...restProps }) {
	return <Percent {...restProps}>{children}</Percent>;
};
Skills.Bottom = function SkillsBottom({ children, ...restProps }) {
	return <Bottom {...restProps}>{children}</Bottom>;
};
Skills.PercentageContainer = function SkillsPercentageContainer({
	children,
	...restProps
}) {
	return <PercentageContainer {...restProps}>{children}</PercentageContainer>;
};
Skills.Percentage = function SkillsPercentage({ children, ...restProps }) {
	return <Percentage {...restProps}>{children}</Percentage>;
};
Skills.ShowMore = function SkillsShowMore({ children, ...restProps }) {
	return <ShowMore {...restProps}>{children}</ShowMore>;
};
