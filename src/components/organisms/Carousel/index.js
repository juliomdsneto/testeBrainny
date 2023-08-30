import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import {
	Button,
	Card,
	CardBody,
	CardSubtitle,
	CardText,
	CardTitle,
} from 'reactstrap';
import './style.scss';


const items = [
	{
		altText: 'Slide 1',
		caption: 'Plano Bronze',
		title: 'R$ 30',
		subtitle: 'Uso de 5 colaboradores',
		content: [
			{ text: 'Área de meus registros', bonus: true },
			{ text: 'Dashboard', bonus: true },
			{ text: 'Acesso de 5 colaboradores', bonus: true },
		],
		misscontent: [
			{ text: 'Suporte exclusivo', failcheck: true },
			{ text: 'Email corporativo', failcheck: true },
		],
		key: 1,
	},
	{
		altText: 'Slide 2',
		caption: 'Plano Prata',
		title: 'R$ 50',
		subtitle: 'Uso de 10 colaboradores',
		content: [
			{ text: 'Área de meus registros', bonus: true },
			{ text: 'Dashboard', bonus: true },
			{ text: 'Acesso de 5 colaboradores', bonus: true },
		],
		misscontent: [
			{ text: 'Suporte exclusivo', failcheck: true },
			{ text: 'Email corporativo', failcheck: true },
		],
		key: 2,
	},
	{
		altText: 'Slide 3',
		caption: 'Plano Ouro',
		title: 'R$ 100',
		subtitle: 'Uso de 20 colaboradores',
		content: [
			{ text: 'Área de meus registros', bonus: true },
			{ text: 'Dashboard', bonus: true },
			{ text: 'Acesso de 5 colaboradores', bonus: true },
			{ text: 'Suporte exclusivo', bonus: true },
		],
		misscontent: [
			{ text: 'Email corporativo', failcheck: true },
		],
		key: 3,
	},
	{
		altText: 'Slide 4',
		caption: 'Plano Platina',
		title: 'R$ 200',
		subtitle: 'Acessos ilimitados',
		content: [
			{ text: 'Área de meus registros', bonus: true },
			{ text: 'Dashboard', bonus: true },
			{ text: 'Acesso de 5 colaboradores', bonus: true },
			{ text: 'Suporte exclusivo', bonus: true },
			{ text: 'Email corporativo', bonus: true },
		],
		misscontent: [],
		key: 4,
	},
];


function ExampleCards(props) {
	const [activeIndex, setActiveIndex] = useState(1);

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
			const isPrev = index === activeIndex - 1;
			const isNext = index === activeIndex + 1;

			const classes = `custom-card ${isActive ? 'active' : ''} ${isPrev || isNext ? 'semi-active' : ''
				}`;


			const cardStyle = {
				transition: 'opacity 0.5s ease-in-out',
				opacity: isActive ? 1 : 0.3,
			};

			return (
				(isPrev || isNext || isActive) && (
					<Card className={classes} key={item.key} style={cardStyle}>
						<CardBody>
							<CardTitle tag='h5'>{item.caption}</CardTitle>
							<p class="price">{item.title}</p>
							<CardSubtitle className='mb-2 text-muted' tag='h6'>

							</CardSubtitle>
							<div className=''>
								<p className='amount'>{item.subtitle} </p>
								{item.content.map((contentItem, contentIndex) => (
									<p className={`bonus ${contentItem.bonus ? 'with-bonus' : ''}`} key={contentIndex}>
										{contentItem.text}
									</p>
								))}
							</div>
							{item.misscontent && item.misscontent.length > 0 && (
								<CardText className=''>
									{item.misscontent.map((misscontentItem, misscontentIndex) => (
										<p
											className={`failcheck ${misscontentItem.failcheck ? 'with-failcheck' : ''
												}`}
											key={misscontentIndex}
										>
											{misscontentItem.text}
										</p>
									))}
								</CardText>
							)}

							<Button className='btncarousel'>Assinar agora
							</Button>
						</CardBody>
					</Card>
				)
			);
		});
	}



	return (
		<div className='card-container'>
			<div className='controls' >
				<Button className='control-cards' onClick={previous}>
					<FaArrowLeft /> {/* Ícone de seta para a esquerda */}
				</Button>
				<Button className='control-cards' onClick={next}>
					<FaArrowRight /> {/* Ícone de seta para a direita */}
				</Button>
			</div>
			{renderCards()}
		</div>
	);
}

export default ExampleCards;
