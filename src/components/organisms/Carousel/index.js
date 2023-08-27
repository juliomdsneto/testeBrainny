import React, { useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import './style.scss';

const items = [
	{
		altText: 'Slide 1',
		caption: 'Slide 1',
		key: 1,
	},
	{
		altText: 'Slide 2',
		caption: 'Slide 2',
		key: 2,
	},
	{
		altText: 'Slide 3',
		caption: 'Slide 3',
		key: 3,
	},
	{
		altText: 'Slide 4',
		caption: 'Slide 4',
		key: 4,
	},
	{
		altText: 'Slide 5',
		caption: 'Slide 5',
		key: 5,
	},
];

function ExampleCards(props) {
	const [activeIndex, setActiveIndex] = useState(2);

	const previous = () => {
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const next = () => {
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const renderCards = () => {
		return items.map((item, index) => {
			const isActive = index === activeIndex;
			const isSemiActive = index === activeIndex - 1 || index === activeIndex + 1;
			const classes = `custom-card ${isActive ? 'active' : ''} ${isSemiActive ? 'semi-active' : ''}`;

			return (
				<Card className={classes} key={item.key}>
					<CardBody>
						<CardTitle tag="h5">{item.caption}</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							Card subtitle
						</CardSubtitle>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card‘s content.
						</CardText>
						<Button>Button</Button>
					</CardBody>
				</Card>
			);
		});
	};

	return (
		<div className="card-container">
			<div className="controls">
				<Button onClick={previous}>Previous</Button>
				<Button onClick={next}>Next</Button>
			</div>
			{renderCards()}
		</div>
	);
}

export default ExampleCards;
