import React from 'react';
import './style.scss';

const TimeCard = ({ personName, personIdentifier, date, time, isFirstCard }) => {
	return (
		<div className={`time-card ${isFirstCard ? 'first-card' : ''}`}>
			{isFirstCard && (
				<div className='d-flex fields'>
					<p className='fieldsCard'>Dashboard</p>
					<p className='fieldsCard'>Data</p>
					<p className='fieldsCard'>Hora</p>
				</div>
			)}

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
