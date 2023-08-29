import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ModalRegister from '../../organisms/Modal'; // Importe o novo componente
import TimeCard from '../../organisms/TimeCard';
import './style.scss';

import SideMenu from '../../molecules/SideMenu';

const Dashboard = () => {
	const [currentTime, setCurrentTime] = useState(moment().format('H:mm'));
	const [currentDate, setCurrentDate] = useState(moment().format('DD/MM/yyyy'));

	const timeCardData = [
		{ personName: 'João Silva', personIdentifier: '001', date: '12/10/19', time: '18:30h' },
		{ personName: 'Amanda Manduca', personIdentifier: '002', date: '12/10/19', time: '17:10h' },
		// Adicione mais dados aqui...
	];

	const [modalOpen, setModalOpen] = useState(false);

	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};


	useEffect(() => {
		const startTimer = setInterval(() => {
			setCurrentTime(moment().format('H:mm'))
			setCurrentDate(moment().format('DD/MM/yyyy'))
		}, 1000)

		return () => clearInterval(startTimer)
	}, [])

	return (
		<div className='dashboard'>
			<SideMenu />
			<div className='dash-content'>
				<ModalRegister
					timeValue={currentTime}
					dateValue={currentDate}
				/>
				<div className='d-flex fields'>
					<p className='fieldsCard'>Dashboard</p>
					<p className='fieldsCard'>Data</p>
					<p className='fieldsCard'>Hora</p>
				</div>
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
