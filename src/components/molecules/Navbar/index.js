import React from 'react';
import { withRouter } from 'react-router-dom'; // Importe o withRouter
import AnchorWithImage from '../../atoms/AnchorWithImage';
import Button from '../../atoms/Button';
import './style.scss';

const Navbar = ({ history }) => {
	const handleLoginButtonClick = () => {
		history.push('/Login'); // Agora você pode usar o history.push
	};

	return (
		<nav className="navbar pt-5 container">
			<AnchorWithImage to="/">Home</AnchorWithImage> <br />
			<div className="navbar-center d-flex">
				<ul className="nav-links list-unstyled d-flex">
					<li><a href="#inicio">Inicio</a></li>
					<li><a href="#carousel">Carousel</a></li>
				</ul>
				<Button label="Login" variant="primary" onClick={handleLoginButtonClick} />
			</div>
		</nav>
	);
}

export default withRouter(Navbar); // Encapsule o componente Navbar com withRouter
