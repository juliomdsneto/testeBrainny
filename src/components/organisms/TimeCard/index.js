import React from 'react';
import './style.scss';

const TimeCard = ({ personName, personIdentifier, date, time }) => {
	return (
		<div className='time-card'>
			<div className='person-info'>
				<div className='person-name'>{personName}</div>
				<div className='person-identifier'>{personIdentifier}</div>
			</div>

			<div className='date'>{date}</div>
			<div className='time'>{time}</div>

		</div>
	);
};

export default TimeCard;
