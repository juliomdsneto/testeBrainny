import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import Button from '../../atoms/Button';
import Image from '../../atoms/Image';

import { useAuth } from '../../../hooks';
import { users } from './mockedData';

import loginImage from '../../../images/grupo_pontoGo.png';
import pontogo from '../../../images/logo_login.png';
import './style.scss';


const LoginPage = () => {

	const history = useHistory()

	const [action, setAction] = useState(true);
	const [showPassword, setShowPassword] = useState(false);
	const { user, setUser } = useAuth();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		try {
			const findUser = users.find(
				(user) => user.email === data.email
			)

			if (!findUser || findUser.password !== data.password) {
				return toast.error('Senha ou usuário não encontrados.')
			}

			delete findUser.password

			localStorage.setItem('@pontogo', JSON.stringify(findUser))

			setUser(findUser)
			toast.success('Logado com sucesso!')
			history.push('dashboard')
		} catch {
			toast.error('Não foi possível realizar login.')
		}
	}

	return (
		<div className='login-page container'>
			<div className='login-section'>
				<Image images={[{ src: loginImage, alt: 'Login Image' }]} variant="variant-loginHero" />
				<h1>Bem vindo ao PontoGo</h1>
				<h2>Aqui você fará toda gestão do seu sistema de pontos.</h2>
			</div>
			<div className='login-form-section'>
				<a href='/'><Image images={[{ src: pontogo, alt: 'Logo' }]} variant='variant-login' /></a>
				<h3>{action ? 'Faça login' : 'Resetar senha'}</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className='label-input'>Email:</label>
					<input type='text' placeholder='exemplo@email.com' {...register('email')} />
					{action && (
						<>
							<label className='label-input mt-3'>Senha:</label>
							<div className='password-input-wrapper'>
								<input
									type={showPassword ? 'text' : 'password'}
									placeholder='*************'
									{...register('password')}
								/>
								<span
									className='password-toggle-icon'
									onClick={() => setShowPassword(!showPassword)}
								>
									{showPassword ? <FaEyeSlash /> : <FaEye />}
								</span>
							</div>
						</>
					)}

					<p className='help' onClick={() => setAction(!action)}>
						{action ? 'Esqueci minha senha' : 'Voltar para o login'}
					</p>
					<Button label={action ? 'Entrar' : 'Enviar'} variant='loginBtn' type='submit' />
				</form>
			</div>
		</div>
	);
};

export default LoginPage;
