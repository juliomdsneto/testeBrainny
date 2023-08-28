import React from 'react';
import TimeCard from '../../organisms/TimeCard';
import './style.scss';

const Dashboard = () => {
	const timeCardData = [
		{ personName: 'João Silva', personIdentifier: '001', date: '12/10/19', time: '18:30h' },
		{ personName: 'Amanda Manduca', personIdentifier: '002', date: '12/10/19', time: '17:10h' },
		// Adicione mais dados aqui...
	];

	return (
		<div className='dashboard'>
			<div className='sideMenu'>
				{/* ... Conteúdo do SideMenu ... */}
			</div>
			<div className='dash-content'>
				<p>Dashboard</p>
				{/* Renderize os cards TimeCard usando map */}
				{timeCardData.map((data, index) => (
					<TimeCard
						key={index}
						personName={data.personName}
						personIdentifier={data.personIdentifier}
						date={data.date}
						time={data.time}
					/>
				))}
			</div>
		</div>
	);
};

export default Dashboard;
