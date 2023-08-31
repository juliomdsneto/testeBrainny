import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../hooks';
import logoCalendar from '../../../images/calendar.png';
import logoDashboard from '../../../images/dashboard.png';
import logo from '../../../images/logo_login.png';
import './style.scss';

import { useEffect } from 'react';

const SideMenu = () => {
	const history = useHistory();
	const { user, setUser } = useAuth();
	const handleLogout = () => {
		localStorage.removeItem("@pontogo");
		history.push('/login');
	};

	useEffect(() => {
		const getStorageUser = JSON.parse(localStorage.getItem('@pontogo'));

		if (!getStorageUser) {
			return history.push('/login')
		}
		setUser(getStorageUser)
	}, [history, setUser])

	return (
		<div className='side-menu'>
			<div>
				<a href="/">	<img width='150px' className='p-20' src={logo} alt='Brand logo' /></a>
				{user?.role === 'colaborador' ? (
					<div className='item-menu menu'>
						<img width='24px' src={logoCalendar} alt='icon' />
						<p>Registro</p>
					</div>
				) : (
					<div className='item-menu menu'>
						<img width='24px' src={logoDashboard} alt='icon' />
						<p>Dashboard</p>
					</div>
				)}
			</div>
			<div className='p-20 d-flex'>
				<Link to="#" className="exit" onClick={handleLogout}>
					Sair
				</Link>
			</div>
		</div>
	);
};

export default SideMenu;
