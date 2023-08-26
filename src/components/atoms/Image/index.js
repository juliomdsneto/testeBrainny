import React from 'react';
import './style.scss';

const Image = ({ images, variant }) => {
	const imageClass = variant ? `imageDefault ${variant}` : 'imageDefault';

	return (
		<div className="image-container">
			{images.map((image, index) => (
				<img
					key={index}
					src={image.src}
					alt={image.alt}
					className={imageClass}
					style={{
						maxWidth: 'auto',
						maxHeight: '100%',
					}}
				/>
			))}
		</div>
	);
};

export default Image;
