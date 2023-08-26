import React from 'react';
import './style.scss';
import Text from '../../atoms/Text';
import Icon from '../../atoms/Icon';

const TextIcon = ({ text, iconContent, iconAlt, iconLink }) => {
	return (
		<div className="text-with-icon">
			<div className="text">
				<Text tag="p" text={text} className="text-styles" />
			</div>
			<div className="icon">
				<a href={iconLink}>
					<Icon content={iconContent} alt={iconAlt} />
				</a>
			</div>
		</div>
	);
};

export default TextIcon;
