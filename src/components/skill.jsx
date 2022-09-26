import React, { useContext, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const Skill = ({ data }) => {
	const { theme } = useContext(ThemeContext);
	const [percent, setPercent] = useState(0);
	const percentHTML = useRef(null);

	useEffect(() => {
		if (percent < data.percent) {
			percentHTML.current.style.width = `${percent}%`;
			setTimeout(() => {
				setPercent(percent + 1);
			}, 80);
		}
	}, [percent, data.percent]);

	return (
		<div className='flex justify-between relative mb-2 text-xs'>
			<span
				className={`w-1/2 flex items-end justify-center border-l-4 border-opacity-80 lg:order-2 lg:border-none lg:justify-start lg:w-1/4 ${
					theme === 'dark' ? 'border-green-500' : 'border-green-700'
				}`}>
				{data.name}
			</span>
			<span
				className={`px-2 text-lg lg:order-1 lg:text-2xl ${
					theme === 'dark' ? 'text-green-500' : 'text-green-800'
				}`}>
				{data.icon}
			</span>
			<span
				className={`w-1/2 flex items-end justify-center lg:order-4 lg:w-1/4 lg:border-r-2 ${
					theme === 'dark' ? 'border-green-500' : 'border-green-700'
				}`}>
				{data.level}
			</span>
			<span className='hidden text-white w-1/2 lg:flex lg:items-center lg:justify-center lg:order-3 lg:relative bg-green-900'>
				<span
					ref={percentHTML}
					className={`left-0 top-0 bottom-0 absolute bg-green-500`}
				/>
				<span className='z-20'>{percent}%</span>
			</span>
		</div>
	);
};

export default Skill;
