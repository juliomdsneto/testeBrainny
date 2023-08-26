
import React from 'react';
import AnchorWithImage from '../../atoms/AnchorWithImage';
import Button from '../../atoms/Button';
import './style.scss';

const Navbar = () => {
	return (
		<nav className="navbar pt-4 container">
			<AnchorWithImage to="/">Home</AnchorWithImage> <br />
			<div className="navbar-center d-flex">
				<ul className="nav-links list-unstyled d-flex">
					<li><a href="#inicio">Inicio</a></li>
					<li><a href="#carousel">Carousel</a></li>
				</ul>
				<Button label="Login" variant="primary" onClick={() => console.log('Botão clicado')} />

			</div>
		</nav>
	);
}

export default Navbar;
