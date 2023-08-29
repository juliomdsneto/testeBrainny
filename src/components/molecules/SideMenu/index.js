import logoCalendar from '../../../images/calendar.png'
import logoSair from '../../../images/exit.png'
import logo from '../../../images/logo_login.png'
import './style.scss'

const SideMenu = () => {
	return (
		<div className='side-menu'>
			<div>
				<img width='150px' className='p-20' src={logo} alt='Brand logo' />
				<div className='item-menu menu'>
					<img width='24px' src={logoCalendar} alt='icon' />
					<p>Registro</p>
				</div>
			</div>
			<div className='p-20 d-flex'>
				<img src={logoSair} alt='Sair' />
				Sair
			</div>
		</div>
	)
}

export default SideMenu
