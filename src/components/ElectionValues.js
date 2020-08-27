import React from 'react';
import {Card} from 'react-bootstrap';

const ElectionValues = () => {
	const cardInfo = [
		{
			title: '1st API',
			text: 'Text to copy and paste',
		},
		{
			title: '2nd API',
			text: 'Text to Copy and pasta',
		},
		{
			title: '3rd API',
			text: 'Text to Copy and pasta',
		},
		{
			title: '4th API',
			text: 'Text to Copy and pasta',
		},
		{
			title: '5th API',
			text: 'Text to Copy and pasta',
		},
		{
			title: '6th API',
			text: 'Text to Copy and pasta',
		},
	];

	const renderCard = (card, index) => {
		return (
			<Card style={{width: '18rem'}} key={index} className='box'>
				<Card.Body>
					<Card.Title>{card.title}</Card.Title>
					<Card.Text>{card.text}</Card.Text>
				</Card.Body>
			</Card>
		);
	};

	return <div className='grid'>{cardInfo.map(renderCard)}</div>;
};

export default ElectionValues;
