import React, { useState } from 'react';
import {
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
	Carousel,
	CarouselControl,
	CarouselItem,
} from 'reactstrap';
import './style.scss';

const items = [
	{
		id: 1,
		altText: 'Slide 1',
		caption: 'Slide 1',
	},
	{
		id: 2,
		altText: 'Slide 2',
		caption: 'Slide 2',
	},
	{
		id: 3,
		altText: 'Slide 3',
		caption: 'Slide 3',
	},
	{
		id: 4,
		altText: 'Slide 4',
		caption: 'Slide 4',
	},
	{
		id: 5,
		altText: 'Slide 5',
		caption: 'Slide 5',
	},
];

function ExampleCarousel(props) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const slides = items.map((item, index) => {
		const opacity = 0.5;
		const size = 30; // Tamanho em porcentagem dos lados
		const offset = 35; // Metade da diferença entre 100% e o tamanho desejado
		const isActive = index === activeIndex;
		const isNext = index === (activeIndex + 1) % items.length;
		const isPrev = index === (activeIndex - 1 + items.length) % items.length;

		const cardStyle = {
			width: `${size}%`,
			opacity: isActive ? 1 : opacity,
			left: isActive ? '0' : isPrev ? `-${offset}%` : isNext ? `${offset}%` : '100%',
		};

		return (
			<CarouselItem
				className="custom-tag"
				tag="div"
				key={item.id}
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
			>
				<Card style={cardStyle}>
					<img
						alt={item.altText}
						src="https://picsum.photos/300/200"
					/>
					<CardBody>
						<CardTitle tag="h5">{item.caption}</CardTitle>
						<CardSubtitle className="mb-2 text-muted" tag="h6">
							Card subtitle
						</CardSubtitle>
						<CardText>
							Some quick example text to build on the card title and make up the bulk of the card‘s content.
						</CardText>
					</CardBody>
				</Card>
			</CarouselItem>
		);
	});

	return (
		<div>
			<style>
				{`.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`}
			</style>
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				{slides}
				<CarouselControl
					direction="prev"
					directionText="Previous"
					onClickHandler={previous}
				/>
				<CarouselControl
					direction="next"
					directionText="Next"
					onClickHandler={next}
				/>
			</Carousel>
		</div>
	);
}

export default ExampleCarousel;
