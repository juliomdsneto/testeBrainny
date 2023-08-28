import React, { useState } from 'react';
import ModalRegister from '../../organisms/Modal'; // Importe o novo componente
import TimeCard from '../../organisms/TimeCard';
import './style.scss';

const Dashboard = () => {
	const timeCardData = [
		{ personName: 'João Silva', personIdentifier: '001', date: '12/10/19', time: '18:30h' },
		{ personName: 'Amanda Manduca', personIdentifier: '002', date: '12/10/19', time: '17:10h' },
		// Adicione mais dados aqui...
	];

	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

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
				<ModalRegister
					timeValue="10:30" // Substitua pelo valor real de hora
					dateValue="26/09/2021" // Substitua pelo valor real de data
				/>
			</div>
		</div>
	);
};

export default Dashboard;
