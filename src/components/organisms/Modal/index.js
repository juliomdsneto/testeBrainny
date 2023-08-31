import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import clock from '../../../images/clock.png';
import Buttonn from '../../atoms/Button'; // Import the customized button
import Image from '../../atoms/Image';



function ModalRegister({ user, args, imageAlt, timeValue, dateValue }) {
	//continuar o modal	

	const [time, setTime] = useState('');
	const [date, setDate] = useState('');


	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);

		//setar setTime e setDate
	}

	// createRegisteredTime graphQL
	//dar reload no get

	const handleCheckIn = (hour, date) => {
		if (!JSON.parse(localStorage.getItem('@pontogo_registers'))) {
			localStorage.setItem('@pontogo_registers', JSON.stringify([]))
		}
		const registers = JSON.parse(localStorage.getItem('@pontogo_registers'))

		registers.push({
			userId: user?.id,
			name: user?.name,
			date,
			hour,
		})
		localStorage.setItem('@pontogo_registers', JSON.stringify(registers))
		toast.success('Registro salvo com sucesso!')
		toggle()

	}

	return (
		<div>
			{user?.role === 'colaborador' && (
				<Button color='danger' onClick={toggle} className='btnModal'>
					Registrar ponto
				</Button>
			)}
			<Modal isOpen={modal} toggle={toggle} {...args}>
				<ModalHeader toggle={toggle}>Registrar novo ponto</ModalHeader>
				<Image images={[{ src: clock, alt: imageAlt }]} />
				<ModalBody>
					<p className='time'>{timeValue}</p>
					<p className='data'>{dateValue}</p>
					{/* <p className='time'>{time}</p>
					<p className='data'>{date}</p> */}
				</ModalBody>
				<ModalFooter>
					<Buttonn
						color='primary'
						variant='modalbtn'
						label='Bater ponto'
						onClick={() => handleCheckIn(timeValue, dateValue)}
					></Buttonn>{' '}
					<Buttonn
						color='secondary'
						label='Cancelar'
						onClick={toggle}
						variant='cancelbtn'
					></Buttonn>
				</ModalFooter>
			</Modal>
		</div>
	)
}

export default ModalRegister;