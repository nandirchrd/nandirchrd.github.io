import React from 'react';
import Card from './card';

const Cards = ({ datas }) => {
	return (
		<div>
			{datas.map((data) => (
				<Card key={data.id} data={data} />
			))}
		</div>
	);
};

export default Cards;
