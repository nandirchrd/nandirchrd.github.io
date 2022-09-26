import React, { useContext } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../contexts/themeContext';
import Skill from './skill';

const Skills = ({ data }) => {
	const { theme } = useContext(ThemeContext);
	const [slice, setSlice] = useState(3);
	const filtered = [...data].slice(0, slice);
	return (
		<>
			<div className={`skills`}>
				{filtered.map((data, i) => (
					<Skill data={data} key={i} />
				))}
			</div>
			{filtered.length !== data.length && (
				<button
					onClick={() => setSlice((prev) => prev + 3)}
					className={`border w-full text-center p-1 mt-1 ${
						theme === 'dark'
							? 'hover:bg-green-500 hover:border-green-500 hover:text-white border-white'
							: 'hover:bg-black hover:text-white border-black'
					}  `}>
					LOAD MORE
				</button>
			)}
		</>
	);
};

export default Skills;
