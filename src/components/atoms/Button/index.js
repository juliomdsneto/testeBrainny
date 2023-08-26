
import React from 'react';
import './style.scss';

const Button = ({ label, onClick, variant }) => {
	const buttonClass = `btnDefault ${variant}`;

	return (
		<button className={buttonClass} onClick={onClick}>
			{label}
		</button>
	);
};

export default Button;
