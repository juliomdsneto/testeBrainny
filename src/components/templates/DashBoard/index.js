import moment from 'moment';
import React, { useEffect, useState } from 'react';
import ModalRegister from '../../organisms/Modal'; // Importe o novo componente
import TimeCard from '../../organisms/TimeCard';
import './style.scss';

import SideMenu from '../../molecules/SideMenu';

import { useAuth } from '../../../hooks';

const Dashboard = () => {
	const [currentTime, setCurrentTime] = useState(moment().format('H:mm'))
	const [currentDate, setCurrentDate] = useState(moment().format('DD/MM/yyyy'))
	const [registersData, setRegistersData] = useState([])

	const { user } = useAuth()
	const registers = JSON.parse(localStorage.getItem('@pontogo_registers'))

	useEffect(() => {
		const startTimer = setInterval(() => {
			setCurrentTime(moment().format('H:mm'))
			setCurrentDate(moment().format('DD/MM/yyyy'))
		}, 1000)

		return () => clearInterval(startTimer)
	}, [])

	useEffect(() => {
		if (!registers) {
			return setRegistersData([])
		}
		setRegistersData(
			user?.role === 'colaborador'
				? registers.filter((register) => register.userId === user.id).reverse()
				: registers.reverse()
		)
	}, [registers, user])

	return (
		<div className='dashboard'>
			<SideMenu />
			<div className='dash-content'>
				<ModalRegister
					user={user}
					timeValue={currentTime}
					dateValue={currentDate}
				/>
				<div className='d-flex fields'>
					<p className='fieldsCard'>Dashboard</p>
					<p className='fieldsCard-data'>Data</p>
					<p className='fieldsCard-hora'>Hora</p>
				</div>
				{registersData.map((data, index) => (
					<TimeCard
						key={index}
						personName={data.name}
						personIdentifier={data.id}
						date={data.date}
						time={`${data.hour}h`}
					/>
				))}
			</div>
		</div>
	)
}

export default Dashboard