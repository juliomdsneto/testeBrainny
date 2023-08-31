
import React from 'react';
import './style.scss';

const Button = ({ label, onClick, variant, href }) => {
	const buttonClass = `btnDefault ${variant}`;

	return (
		<button className={buttonClass} onClick={onClick} href={href}>
			{label}
		</button>
	);
};

export default Button;
