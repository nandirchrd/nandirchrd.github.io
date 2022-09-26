// LEVELS ['BEGINNER', 'INTERMEDIATE', 'ADVANCE', '']
import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiArduino,
	SiBootstrap,
	SiStyledcomponents,
	SiReact,
	SiNextdotjs,
	SiWebpack,
	SiTailwindcss,
	SiThreedotjs,
	SiJest,
} from 'react-icons/si';

import { RiQuestionMark } from 'react-icons/ri';
const skills = [
	{
		name: 'HTML',
		icon: <SiHtml5 />,
		level: 'INTERMEDIATE',
		percent: 50,
	},
	{
		name: 'CSS',
		icon: <SiCss3 />,
		level: 'INTERMEDIATE',
		percent: 50,
	},
	{
		name: 'JAVASCRIPT',
		icon: <SiJavascript />,
		level: 'INTERMEDIATE',
		percent: 50,
	},
	{
		name: 'ARDUINO',
		icon: <SiArduino />,
		level: 'BEGINNER',
		percent: 50,
	},
	{
		name: 'BOOTSTRAP',
		icon: <SiBootstrap />,
		level: 'INTERMEDIATE',
		percent: 50,
	},
	{
		name: 'STYLED-COMPONENT',
		icon: <SiStyledcomponents />,
		level: 'INTERMEDIATE',
		percent: 80,
	},
	{
		name: 'REACT JS',
		icon: <SiReact />,
		level: 'INTERMEDIATE',
		percent: 20,
	},
	{
		name: 'NEXT JS',
		icon: <SiNextdotjs />,
		level: 'BEGINNER',
		percent: 50,
	},
	{
		name: 'WEBPACK',
		icon: <SiWebpack />,
		level: 'BEGINNER',
		percent: 20,
	},
	{
		name: 'TAILWIND CSS',
		icon: <SiTailwindcss />,
		level: 'INTERMEDIATE',
		percent: 70,
	},
	{
		name: 'THREE JS',
		icon: <SiThreedotjs />,
		level: 'BEGINNER',
		percent: 30,
	},
	{
		name: 'AXIOS',
		icon: <RiQuestionMark />,
		level: 'INTERMEDIATE',
		percent: 60,
	},
	{
		name: 'JEST',
		icon: <SiJest />,
		level: 'BEGINNER',
		percent: 20,
	},
];

export default skills;
