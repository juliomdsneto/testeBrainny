import moment from 'moment';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import clock from '../../../images/clock.png';
import Buttonn from '../../atoms/Button'; // Import the customized button
import Image from '../../atoms/Image';

function ModalRegister({ user, args, imageAlt }) {
	const [registers, setRegisters] = useState(
		JSON.parse(localStorage.getItem('@pontogo_registers')) || []
	);
	const [currentTime, setCurrentTime] = useState(moment().format('H:mm'));
	const [currentDate, setCurrentDate] = useState(moment().format('DD/MM/yyyy'));
	const [modal, setModal] = useState(false);

	const toggle = () => {
		setModal(!modal);
		setCurrentDate(moment().format('DD/MM/yyyy'));
		setCurrentTime(moment().format('H:mm'));
	};

	const handleCheckIn = (hour, date) => {
		if (!JSON.parse(localStorage.getItem('@pontogo_registers'))) {
			localStorage.setItem('@pontogo_registers', JSON.stringify([]));
		}
		const newRegister = {
			userId: user?.id,
			name: user?.name,
			date,
			hour,
		};

		const updatedRegisters = [...registers, newRegister];
		localStorage.setItem('@pontogo_registers', JSON.stringify(updatedRegisters));
		setRegisters(updatedRegisters);

		toast.success('Registro salvo com sucesso!');
		toggle();
	};

	return (
		<div>
			{user.user.role.type === 'user' && (
				<Button color='danger' onClick={toggle} className='btnModal'>
					Registrar ponto
				</Button>
			)}
			<Modal isOpen={modal} toggle={toggle} {...args}>
				<ModalHeader toggle={toggle}>Registrar novo ponto</ModalHeader>
				<Image images={[{ src: clock, alt: imageAlt }]} />
				<ModalBody>
					<p className='time'>{currentTime}</p>
					<p className='data'>{currentDate}</p>
				</ModalBody>
				<ModalFooter>
					<Buttonn
						color='primary'
						variant='modalbtn'
						label='Bater ponto'
						onClick={() => handleCheckIn(currentTime, currentDate)}
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
	);
}

export default ModalRegister;