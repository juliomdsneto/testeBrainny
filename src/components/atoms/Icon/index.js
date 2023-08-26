import React from 'react';
import './style.scss';

const Icon = ({ icons, links }) => {
	return (
		<div className="icons-container">
			{icons.map((icon, index) => (
				<a key={index} href={links[index]} target="_blank" rel="noopener noreferrer">
					<img src={icon.src} alt={icon.alt} className="icon" />
				</a>
			))}
		</div>
	);
};

export default Icon;
