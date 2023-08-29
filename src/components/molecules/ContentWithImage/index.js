import React from 'react';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import Text from '../../atoms/TextTags';
import './style.scss';

const ContentWithImage = ({ content, imageSrc, imageAlt }) => {
	return (
		<div className="content-with-image container">
			<div className="content gap-2">
				{content.map((item, index) => (
					<div key={index} className={`content-item ${item.tag}`}>
						{item.tag === 'h1' && item.text.includes('Controle de Pontos') ? (
							<>
								Chegou a nova realidade para{' '}
								<Text tag="h1" text="controle de pontos" className="purple-text" />
							</>
						) : (
							<Text tag={item.tag} text={item.text} className={item.tag === 'h2' ? 'h2-styles' : 'p-styles'} />
						)}
					</div>
				))}
				<div className='d-flex gap-4'>
					<Button label="Assinar agora" variant="secondary" onClick={() => console.log('Botão clicado')} />
					<Button label="Assinar agora" variant="tertiary" onClick={() => console.log('Botão clicado')} />
				</div>
			</div>
			<div className="image">
				<Image images={[{ src: imageSrc, alt: imageAlt }]} />
			</div>
		</div>
	);
};

export default ContentWithImage;
