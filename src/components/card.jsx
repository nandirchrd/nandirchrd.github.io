import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/themeContext';

const Card = ({ data }) => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className='lg:flex lg:gap-4 lg:px-2'>
			<img
				className='block aspect-square w-full rounded-tl-md rounded-tr-3xl lg:max-w-[10rem] lg:max-h-[10rem] my-auto'
				alt={data.title}
				src={data.thumb || ''}
			/>
			<div className='card-body w-full lg:h-full lg:flex lg:flex-col my-auto'>
				<h1 className='font-semibold text-lg py-1'>{data.title}</h1>
				<p className='text-sm font-light'>{data.description}</p>
				<div className='flex gap-1 -mt-2 py-1 flex-nowrap'>
					{data.tags.map((tag, i) => (
						<button
							className='rounded-md flex justify-center items-center p-2 min-w-[3em] text-green-800 hover:text-green-500'
							key={i}>
							{tag}
						</button>
					))}
				</div>
				<div className='flex mt-1 gap-2'>
					{data.actions.map((action, i) => (
						<a
							target='_blank'
							rel='noreferrer'
							className={`w-full p-1 border flex justify-center items-center bg-black text-white rounded-md ${
								theme === 'dark'
									? 'hover:bg-green-500 border-green-500'
									: 'hover:bg-green-500 hover:border-green-500'
							} `}
							key={i}
							href={action.link}>
							{action.label}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Card;
