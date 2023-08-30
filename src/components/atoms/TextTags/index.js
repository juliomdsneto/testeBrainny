
import React from 'react';

const Text = ({ tag, text, className }) => {
	const Tag = tag;

	return <Tag className={`textDefault ${className}`}>{text}</Tag>;
};

export default Text;
