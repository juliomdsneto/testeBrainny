import React from 'react';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import './style.scss';

import loginImage from '../../../images/grupo_pontoGo.png';
import pontogo from '../../../images/logo_login.png';

const LoginPage = () => {
	return (
		<div className="login-page container">
			<div className="login-section">
				<Image images={[{ src: loginImage, alt: 'Login Image' }]} />
				<h1>Bem vindo ao PontoGo</h1>
				<h2>Aqui você fará toda gestão do
					seu sistema de pontos.</h2>
			</div>
			<div className="login-form-section">
				<Image images={[{ src: pontogo, alt: 'Logo' }]} variant="variant-login" />
				<h3>Faça login</h3>
				<label className='label-input'>Email:</label>
				<input type="text" placeholder="exemplo@email.com" />
				<label className='label-input'>Senha:</label>
				<input type="password" placeholder="*************" />

				<a className='help' href="#">Esqueci minha senha</a>
				<Button label="Entrar" variant="loginBtn" onClick={() => console.log('Login button clicked')} />
			</div>
		</div>
	);
};

export default LoginPage;
