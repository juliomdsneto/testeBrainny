import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import Button from '../../atoms/Button'
import Image from '../../atoms/Image'

import { useAuth } from '../../../hooks'

import loginImage from '../../../images/grupo_pontoGo.png'
import pontogo from '../../../images/logo_login.png'
import './style.scss'

const LoginPage = () => {
	const [action, setAction] = useState(true)
	const { user, setUser } = useAuth()

	const { register, handleSubmit } = useForm()

	const onSubmit = (data) => {
		try {
			setUser(data)
			toast.success('Logado com sucesso!')
		} catch {
			toast.error('Não foi possível realizar login.')
		}
	}

	console.log({ user })

	return (
		<div className='login-page container'>
			<div className='login-section'>
				<Image images={[{ src: loginImage, alt: 'Login Image' }]} variant="variant-loginHero" />
				<h1>Bem vindo ao PontoGo</h1>
				<h2>Aqui você fará toda gestão do seu sistema de pontos.</h2>
			</div>
			<div className='login-form-section'>
				<Image images={[{ src: pontogo, alt: 'Logo' }]} variant='variant-login' />
				<h3>{action ? 'Faça login' : 'Resetar senhar'}</h3>
				<form onSubmit={handleSubmit(onSubmit)}>
					<label className='label-input'>Email:</label>
					<input type='text' placeholder='exemplo@email.com' {...register('email')} />
					{action && (
						<>
							<label className='label-input'>Senha:</label>
							<input type='password' placeholder='*************' {...register('password')} />
						</>
					)}

					<p className='help' onClick={() => setAction(!action)}>
						{action ? 'Esqueci minha senha' : 'Voltar para o login'}
					</p>
					<Button label={action ? 'Entrar' : 'Enviar'} variant='loginBtn' type='submit' />
				</form>

			</div>
		</div>
	)
}

export default LoginPage