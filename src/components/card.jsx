import React from 'react';

const Card = ({ data }) => {
	return (
		<div className='lg:flex border-2 border-red-500'>
			<img
				className='block rounded-tl-md rounded-tr-3xl lg:rounded-full lg:w-32 lg:h-32 m-auto'
				alt={data.title}
				src={data.thumb || ''}
			/>
			<div className='card-body'>
				<h1 className='font-semibold text-lg border p-2'>
					{data.title}
				</h1>
				<p className='border text-sm font-light p-2'>
					{data.description}
				</p>
				<div className='flex border gap-2 -mt-2 px-2'>
					{data.tags.map((tag, i) => (
						<button
							className='border rounded-md flex justify-center items-center p-2 min-w-[3em] hover:text-white hover:bg-black'
							key={i}>
							{tag}
						</button>
					))}
				</div>
				<div className='flex'>
					{data.actions.map((action, i) => (
						<a
							className='w-full p-1 border min-w-[4em] text-center bg-black text-white'
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
