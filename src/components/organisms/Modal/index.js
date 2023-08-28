import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import clock from '../../../images/clock.png';
import Buttonn from '../../atoms/Button'; // Import the customized button
import Image from '../../atoms/Image';

function ModalRegister({ args, imageAlt, timeValue, dateValue }) {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<Button color="danger" onClick={toggle} className='btnModal' >
				Registrar ponto
			</Button>
			<Modal isOpen={modal} toggle={toggle} {...args}>
				<ModalHeader toggle={toggle}>Registrar novo ponto</ModalHeader>
				<Image images={[{ src: clock, alt: imageAlt }]} />
				<ModalBody>
					<p className='time'>{timeValue}</p>
					<p className='data'>{dateValue}</p>
				</ModalBody>
				<ModalFooter>
					<Buttonn color="primary" variant="modalbtn" label="Bater ponto" onClick={toggle}>
					</Buttonn>{' '}
					<Buttonn color="secondary" label="Cancelar" onClick={toggle} variant="cancelbtn">

					</Buttonn>
				</ModalFooter>
			</Modal>
		</div>
	);
}

export default ModalRegister;
