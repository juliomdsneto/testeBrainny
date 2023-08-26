import React from 'react';
import Icon from '../../atoms/Icon';
import Text from '../../atoms/TextTags';
import './style.scss';

const TextWithIcon = ({ text, iconSrc, iconAlt, iconLink }) => {
	return (
		<div className="text-with-icon">
			<Icon src={iconSrc} alt={iconAlt} link={iconLink} />
			<Text text={text} />
		</div>
	);
};

export default TextWithIcon;
