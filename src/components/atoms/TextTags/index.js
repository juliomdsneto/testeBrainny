
import React from 'react';

const Text = ({ tag, text, className }) => {
	const Tag = tag; // Use a tag passada como prop

	return <Tag className={`textDefault ${className}`}>{text}</Tag>;
};

export default Text;
